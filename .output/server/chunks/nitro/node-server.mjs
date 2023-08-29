globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import 'node-fetch-native/polyfill';
import { Server as Server$1 } from 'node:http';
import { Server } from 'node:https';
import destr from 'destr';
import { defineEventHandler, handleCacheHeaders, createEvent, eventHandler, setHeaders, sendRedirect, proxyRequest, getRequestHeader, setResponseStatus, setResponseHeader, getRequestHeaders, createError, lazyEventHandler, createApp, createRouter as createRouter$1, toNodeListener, fetchWithEvent } from 'h3';
import { createFetch as createFetch$1, Headers } from 'ofetch';
import { createCall, createFetch } from 'unenv/runtime/fetch/index';
import { createHooks } from 'hookable';
import { snakeCase } from 'scule';
import { klona } from 'klona';
import defu, { defuFn } from 'defu';
import { hash } from 'ohash';
import { parseURL, withoutBase, joinURL, getQuery, withQuery, withLeadingSlash, withoutTrailingSlash } from 'ufo';
import { createStorage, prefixStorage } from 'unstorage';
import { toRouteMatcher, createRouter } from 'radix3';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'pathe';
import { createIPX, createIPXMiddleware } from 'ipx';
import gracefulShutdown from 'http-graceful-shutdown';

const inlineAppConfig = {};



const appConfig = defuFn(inlineAppConfig);

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/",
    "buildAssetsDir": "/_nuxt/",
    "cdnURL": ""
  },
  "nitro": {
    "envPrefix": "NUXT_",
    "routeRules": {
      "/__nuxt_error": {
        "cache": false
      },
      "/_nuxt/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      }
    }
  },
  "public": {},
  "ipx": {
    "dir": "../public",
    "domains": [],
    "sharp": {},
    "alias": {}
  }
};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT = _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
const _sharedRuntimeConfig = _deepFreeze(
  _applyEnv(klona(_inlineRuntimeConfig))
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  _applyEnv(runtimeConfig);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
_deepFreeze(klona(appConfig));
function _getEnv(key) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function _applyEnv(obj, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = _getEnv(subKey);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
      }
      _applyEnv(obj[key], subKey);
    } else {
      obj[key] = envValue ?? obj[key];
    }
  }
  return obj;
}
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

const _assets = {

};

function normalizeKey(key) {
  if (!key) {
    return "";
  }
  return key.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "");
}

const assets$1 = {
  getKeys() {
    return Promise.resolve(Object.keys(_assets))
  },
  hasItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(id in _assets)
  },
  getItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].import() : null)
  },
  getMeta (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].meta : {})
  }
};

const storage = createStorage({});

storage.mount('/assets', assets$1);

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = hash([opts.integrity, fn, opts]);
  const validate = opts.validate || (() => true);
  async function get(key, resolver, shouldInvalidateCache) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || !validate(entry);
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry)) {
          useStorage().setItem(cacheKey, entry).catch((error) => console.error("[nitro] [cache]", error));
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (opts.swr && entry.value) {
      _resolvePromise.catch(console.error);
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = opts.shouldInvalidateCache?.(...args);
    const entry = await get(key, () => fn(...args), shouldInvalidateCache);
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return key.replace(/[^\dA-Za-z]/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const key = await opts.getKey?.(event);
      if (key) {
        return escapeKey(key);
      }
      const url = event.node.req.originalUrl || event.node.req.url;
      const friendlyName = escapeKey(decodeURI(parseURL(url).pathname)).slice(
        0,
        16
      );
      const urlHash = hash(url);
      return `${friendlyName}.${urlHash}`;
    },
    validate: (entry) => {
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: [opts.integrity, handler]
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const reqProxy = cloneWithProxy(incomingEvent.node.req, { headers: {} });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            for (const header in headers2) {
              this.setHeader(header, headers2[header]);
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.context = incomingEvent.context;
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = headers.Etag || headers.etag || `W/"${hash(body)}"`;
      headers["last-modified"] = headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString();
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      event.node.res.setHeader(name, response.headers[name]);
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler() {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      return sendRedirect(
        event,
        routeRules.redirect.to,
        routeRules.redirect.statusCode
      );
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: $fetch.raw,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    const path = new URL(event.node.req.url, "http://localhost").pathname;
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(path, useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

const plugins = [
  
];

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function normalizeError(error) {
  const cwd = typeof process.cwd === "function" ? process.cwd() : "/";
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}
function trapUnhandledNodeErrors() {
  {
    process.on(
      "unhandledRejection",
      (err) => console.error("[nitro] [unhandledRejection] " + err)
    );
    process.on(
      "uncaughtException",
      (err) => console.error("[nitro]  [uncaughtException] " + err)
    );
  }
}

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.node.req.url,
    statusCode,
    statusMessage,
    message,
    stack: "",
    data: error.data
  };
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (event.handled) {
    return;
  }
  setResponseStatus(event, errorObject.statusCode !== 200 && errorObject.statusCode || 500, errorObject.statusMessage);
  if (isJsonRequest(event)) {
    setResponseHeader(event, "Content-Type", "application/json");
    event.node.res.end(JSON.stringify(errorObject));
    return;
  }
  const isErrorPage = event.node.req.url?.startsWith("/__nuxt_error");
  const res = !isErrorPage ? await useNitroApp().localFetch(withQuery(joinURL(useRuntimeConfig().app.baseURL, "/__nuxt_error"), errorObject), {
    headers: getRequestHeaders(event),
    redirect: "manual"
  }).catch(() => null) : null;
  if (!res) {
    const { template } = await import('../error-500.mjs');
    if (event.handled) {
      return;
    }
    setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
    event.node.res.end(template(errorObject));
    return;
  }
  const html = await res.text();
  if (event.handled) {
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  setResponseStatus(event, res.status && res.status !== 200 ? res.status : void 0, res.statusText);
  event.node.res.end(html);
});

const assets = {
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"3c2e-6i49WGBAyeOhMkH9mEoDQ/xQ3gU\"",
    "mtime": "2023-08-10T12:09:40.000Z",
    "size": 15406,
    "path": "../public/favicon.ico"
  },
  "/icon_copy.png": {
    "type": "image/png",
    "etag": "\"134-ujJ8WHmH3RU/Jwq1nPBe86n61Wo\"",
    "mtime": "2023-07-26T13:37:01.603Z",
    "size": 308,
    "path": "../public/icon_copy.png"
  },
  "/icon_download.png": {
    "type": "image/png",
    "etag": "\"16e-smy9Rl8/RcSEUNLOmDZe3Bq3vnM\"",
    "mtime": "2023-07-26T12:51:44.649Z",
    "size": 366,
    "path": "../public/icon_download.png"
  },
  "/intro.mp4": {
    "type": "video/mp4",
    "etag": "\"371b7e-U0G09FnGS9UyRPHCqAmnK7v6VnA\"",
    "mtime": "2023-06-12T09:12:11.705Z",
    "size": 3611518,
    "path": "../public/intro.mp4"
  },
  "/logo.png": {
    "type": "image/png",
    "etag": "\"254e-A5svQTFkdqMjKDJyJqJ7Fju5D1w\"",
    "mtime": "2023-07-25T02:12:37.133Z",
    "size": 9550,
    "path": "../public/logo.png"
  },
  "/logo_cuhk.png": {
    "type": "image/png",
    "etag": "\"a3d6-o8XBnRgs4xxbMdNsMyXtXaOFUXw\"",
    "mtime": "2023-07-25T01:59:07.699Z",
    "size": 41942,
    "path": "../public/logo_cuhk.png"
  },
  "/logo_cuhk2.png": {
    "type": "image/png",
    "etag": "\"986bc-NGUQVjAT+GEjxEilL3gYDVA0U+A\"",
    "mtime": "2023-07-25T08:44:39.422Z",
    "size": 624316,
    "path": "../public/logo_cuhk2.png"
  },
  "/logo_cuhk3.png": {
    "type": "image/png",
    "etag": "\"3c905-0mmm0PYvFEgluktZFvxpNvhlIdY\"",
    "mtime": "2023-07-25T08:57:26.013Z",
    "size": 248069,
    "path": "../public/logo_cuhk3.png"
  },
  "/image/cuhk-icar.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"30ca8-6UGSMCuDrs7CsvkTompqTg+yZGo\"",
    "mtime": "2023-08-02T10:59:03.942Z",
    "size": 199848,
    "path": "../public/image/cuhk-icar.html"
  },
  "/image/Hugging_Face_Emoji_2028ce8b-c213-4d45-94aa-21e1a0842b4d_large.webp": {
    "type": "image/webp",
    "etag": "\"703c-lerJmuv24wmREaO7ZhF0uXrAvKY\"",
    "mtime": "2023-08-10T12:07:05.041Z",
    "size": 28732,
    "path": "../public/image/Hugging_Face_Emoji_2028ce8b-c213-4d45-94aa-21e1a0842b4d_large.webp"
  },
  "/image/istockphoto-1053139916-612x612.jpg": {
    "type": "image/jpeg",
    "etag": "\"77b8-dtnLWrMQiEEcTSdZ2LShXOgRSYs\"",
    "mtime": "2023-08-04T08:34:15.114Z",
    "size": 30648,
    "path": "../public/image/istockphoto-1053139916-612x612.jpg"
  },
  "/image/logo.png": {
    "type": "image/png",
    "etag": "\"254e-A5svQTFkdqMjKDJyJqJ7Fju5D1w\"",
    "mtime": "2023-07-25T02:12:37.133Z",
    "size": 9550,
    "path": "../public/image/logo.png"
  },
  "/image/logo_cuhk.png": {
    "type": "image/png",
    "etag": "\"a3d6-o8XBnRgs4xxbMdNsMyXtXaOFUXw\"",
    "mtime": "2023-07-25T01:59:07.699Z",
    "size": 41942,
    "path": "../public/image/logo_cuhk.png"
  },
  "/image/logo_cuhk2.png": {
    "type": "image/png",
    "etag": "\"986bc-NGUQVjAT+GEjxEilL3gYDVA0U+A\"",
    "mtime": "2023-07-25T08:44:39.422Z",
    "size": 624316,
    "path": "../public/image/logo_cuhk2.png"
  },
  "/image/logo_cuhk3.png": {
    "type": "image/png",
    "etag": "\"3c905-0mmm0PYvFEgluktZFvxpNvhlIdY\"",
    "mtime": "2023-07-25T08:57:26.013Z",
    "size": 248069,
    "path": "../public/image/logo_cuhk3.png"
  },
  "/image/timeline.jpg": {
    "type": "image/jpeg",
    "etag": "\"2717d-q2Bvo20B6BmbVeTBs/VwNpeN82Y\"",
    "mtime": "2023-06-12T09:12:11.597Z",
    "size": 160125,
    "path": "../public/image/timeline.jpg"
  },
  "/image/timeline.png": {
    "type": "image/png",
    "etag": "\"16070-5fPKH13vVOzoS3/CbnABMmH10+M\"",
    "mtime": "2023-07-25T13:26:11.835Z",
    "size": 90224,
    "path": "../public/image/timeline.png"
  },
  "/image/timeline.svg": {
    "type": "image/svg+xml",
    "etag": "\"dacf-R6Pv8BgrwmEz24hT4PCRfm2C1LU\"",
    "mtime": "2023-06-12T09:12:11.598Z",
    "size": 56015,
    "path": "../public/image/timeline.svg"
  },
  "/image/youtube.png": {
    "type": "image/png",
    "etag": "\"21aa-JIdFmDjb13Bd3Q9MGRPlBgWOjHg\"",
    "mtime": "2023-06-12T09:12:11.599Z",
    "size": 8618,
    "path": "../public/image/youtube.png"
  },
  "/_nuxt/company.5795bde3.js": {
    "type": "application/javascript",
    "etag": "\"f9b-9eXUwb0nGnFkk0bdN9wTd2AMKGk\"",
    "mtime": "2023-08-29T07:34:29.841Z",
    "size": 3995,
    "path": "../public/_nuxt/company.5795bde3.js"
  },
  "/_nuxt/company.a6140f02.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"b88-ATB/fv8/QOsC9D5Az4lDaFB7uc4\"",
    "mtime": "2023-08-29T07:34:29.800Z",
    "size": 2952,
    "path": "../public/_nuxt/company.a6140f02.css"
  },
  "/_nuxt/components.07b0d069.js": {
    "type": "application/javascript",
    "etag": "\"57a-hWmUSU0jeMlcrXjgPKqeWMaY56w\"",
    "mtime": "2023-08-29T07:34:29.841Z",
    "size": 1402,
    "path": "../public/_nuxt/components.07b0d069.js"
  },
  "/_nuxt/contact.015868bf.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"7bb-HnZSY0IEjXsJg9AnCSqiIp53oYs\"",
    "mtime": "2023-08-29T07:34:29.800Z",
    "size": 1979,
    "path": "../public/_nuxt/contact.015868bf.css"
  },
  "/_nuxt/contact.6accc1fa.js": {
    "type": "application/javascript",
    "etag": "\"d75-V9Va8hmUvaFUmlLRI3DQm+Xjkxg\"",
    "mtime": "2023-08-29T07:34:29.842Z",
    "size": 3445,
    "path": "../public/_nuxt/contact.6accc1fa.js"
  },
  "/_nuxt/cuhk-icar.117e8924.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"144e-hJEYKLDUXWz0e6TLHxd3ureJh0E\"",
    "mtime": "2023-08-29T07:34:29.800Z",
    "size": 5198,
    "path": "../public/_nuxt/cuhk-icar.117e8924.css"
  },
  "/_nuxt/cuhk-icar.e4856f1e.js": {
    "type": "application/javascript",
    "etag": "\"529d-KH3YWX57GWlRn2hlTu0H0+GpHzw\"",
    "mtime": "2023-08-29T07:34:29.843Z",
    "size": 21149,
    "path": "../public/_nuxt/cuhk-icar.e4856f1e.js"
  },
  "/_nuxt/cuhk-iport.2bc5079b.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"583-jSVJHdxQPZxkOb/ui6PTQnQUb/M\"",
    "mtime": "2023-08-29T07:34:29.800Z",
    "size": 1411,
    "path": "../public/_nuxt/cuhk-iport.2bc5079b.css"
  },
  "/_nuxt/cuhk-iport.f7070960.js": {
    "type": "application/javascript",
    "etag": "\"adc-pO3kW4atSATU+83diCWNCYhgInE\"",
    "mtime": "2023-08-29T07:34:29.842Z",
    "size": 2780,
    "path": "../public/_nuxt/cuhk-iport.f7070960.js"
  },
  "/_nuxt/entry.17d2c478.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"167a-2NsXWB/8/kUjZ8m4JYLj8pT8Vyc\"",
    "mtime": "2023-08-29T07:34:29.800Z",
    "size": 5754,
    "path": "../public/_nuxt/entry.17d2c478.css"
  },
  "/_nuxt/entry.edf4917e.js": {
    "type": "application/javascript",
    "etag": "\"1d5214-3NpoBxn4ibWn8EIcE50N09Jd66k\"",
    "mtime": "2023-08-29T07:34:29.848Z",
    "size": 1921556,
    "path": "../public/_nuxt/entry.edf4917e.js"
  },
  "/_nuxt/error-404.23f2309d.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"e2e-ivsbEmi48+s9HDOqtrSdWFvddYQ\"",
    "mtime": "2023-08-29T07:34:29.800Z",
    "size": 3630,
    "path": "../public/_nuxt/error-404.23f2309d.css"
  },
  "/_nuxt/error-404.53b49b11.js": {
    "type": "application/javascript",
    "etag": "\"8ad-43yHZ8l8aB9eHuFGaXm8Bm9DinU\"",
    "mtime": "2023-08-29T07:34:29.841Z",
    "size": 2221,
    "path": "../public/_nuxt/error-404.53b49b11.js"
  },
  "/_nuxt/error-500.aa16ed4d.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"79e-7j4Tsx89siDo85YoIs0XqsPWmPI\"",
    "mtime": "2023-08-29T07:34:29.800Z",
    "size": 1950,
    "path": "../public/_nuxt/error-500.aa16ed4d.css"
  },
  "/_nuxt/error-500.e4e87ca1.js": {
    "type": "application/javascript",
    "etag": "\"756-RjfPPIzFqAU9AaG1m8UyIxGTCmM\"",
    "mtime": "2023-08-29T07:34:29.841Z",
    "size": 1878,
    "path": "../public/_nuxt/error-500.e4e87ca1.js"
  },
  "/_nuxt/gif_face2.b084def7.gif": {
    "type": "image/gif",
    "etag": "\"6c4e47-Jxplg5GU2VXswrGeWpxE0yDz014\"",
    "mtime": "2023-08-29T07:34:29.851Z",
    "size": 7097927,
    "path": "../public/_nuxt/gif_face2.b084def7.gif"
  },
  "/_nuxt/gif_line2.81f158a0.gif": {
    "type": "image/gif",
    "etag": "\"6c4e1e-Km/FBAiQEZkyOVBLHQuekhAL04U\"",
    "mtime": "2023-08-29T07:34:29.850Z",
    "size": 7097886,
    "path": "../public/_nuxt/gif_line2.81f158a0.gif"
  },
  "/_nuxt/gif_moral2.520ac47b.gif": {
    "type": "image/gif",
    "etag": "\"4a8d42-NqqYMGLDHjeUx0Xs7qnMqsTQO8M\"",
    "mtime": "2023-08-29T07:34:29.848Z",
    "size": 4885826,
    "path": "../public/_nuxt/gif_moral2.520ac47b.gif"
  },
  "/_nuxt/iCarF.0923d21e.png": {
    "type": "image/png",
    "etag": "\"2699-4wLivRXwiDjnO+/b2bDZQbncMCA\"",
    "mtime": "2023-08-29T07:34:29.799Z",
    "size": 9881,
    "path": "../public/_nuxt/iCarF.0923d21e.png"
  },
  "/_nuxt/iCarL.d12c0858.png": {
    "type": "image/png",
    "etag": "\"18df-V9VO5fclO7PmBMTJGrqD+HcUla0\"",
    "mtime": "2023-08-29T07:34:29.799Z",
    "size": 6367,
    "path": "../public/_nuxt/iCarL.d12c0858.png"
  },
  "/_nuxt/iCarR.25d12606.png": {
    "type": "image/png",
    "etag": "\"18cd-wQwdUTlno1tkMbIEyGSl9bYurGo\"",
    "mtime": "2023-08-29T07:34:29.799Z",
    "size": 6349,
    "path": "../public/_nuxt/iCarR.25d12606.png"
  },
  "/_nuxt/index.97031884.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"dd3-wCoFrwWNEwjWvBUoeqGhcJ6yi3g\"",
    "mtime": "2023-08-29T07:34:29.786Z",
    "size": 3539,
    "path": "../public/_nuxt/index.97031884.css"
  },
  "/_nuxt/index.d920e839.js": {
    "type": "application/javascript",
    "etag": "\"fa9-zVwOR/w+jg/EJ+Wtr6LjfZWL6Bw\"",
    "mtime": "2023-08-29T07:34:29.841Z",
    "size": 4009,
    "path": "../public/_nuxt/index.d920e839.js"
  },
  "/_nuxt/intro.9ccedcb0.mp4": {
    "type": "video/mp4",
    "etag": "\"371b7e-U0G09FnGS9UyRPHCqAmnK7v6VnA\"",
    "mtime": "2023-08-29T07:34:29.845Z",
    "size": 3611518,
    "path": "../public/_nuxt/intro.9ccedcb0.mp4"
  },
  "/_nuxt/ishare.66604c69.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"bcb-09qaxhCRPjNHUH4WEZu8JfjtoHU\"",
    "mtime": "2023-08-29T07:34:29.801Z",
    "size": 3019,
    "path": "../public/_nuxt/ishare.66604c69.css"
  },
  "/_nuxt/ishare.d5d66dbe.js": {
    "type": "application/javascript",
    "etag": "\"2426-PF7Pj36PQxrIOWLOI1UEJ1QXkHU\"",
    "mtime": "2023-08-29T07:34:29.841Z",
    "size": 9254,
    "path": "../public/_nuxt/ishare.d5d66dbe.js"
  },
  "/_nuxt/logo.24b58023.png": {
    "type": "image/png",
    "etag": "\"254e-A5svQTFkdqMjKDJyJqJ7Fju5D1w\"",
    "mtime": "2023-08-29T07:34:29.799Z",
    "size": 9550,
    "path": "../public/_nuxt/logo.24b58023.png"
  },
  "/_nuxt/logo_app.f7db2ddf.png": {
    "type": "image/png",
    "etag": "\"dadb-YL/QWSetbbTQbH4Y455xEY7mW+o\"",
    "mtime": "2023-08-29T07:34:29.799Z",
    "size": 56027,
    "path": "../public/_nuxt/logo_app.f7db2ddf.png"
  },
  "/_nuxt/logo_blockly.010a26d0.png": {
    "type": "image/png",
    "etag": "\"1c196-OUx43J93OfzzLZugsNmONZhir2Y\"",
    "mtime": "2023-08-29T07:34:29.797Z",
    "size": 115094,
    "path": "../public/_nuxt/logo_blockly.010a26d0.png"
  },
  "/_nuxt/logo_remote.8d6d1574.png": {
    "type": "image/png",
    "etag": "\"5380-nHhmc1zcYPPIhGRWAiY6zDGA2g8\"",
    "mtime": "2023-08-29T07:34:29.799Z",
    "size": 21376,
    "path": "../public/_nuxt/logo_remote.8d6d1574.png"
  },
  "/_nuxt/staff.1151c54d.js": {
    "type": "application/javascript",
    "etag": "\"1089-Rjfw84MAwPT6bbKpnjpuwgt3Rkk\"",
    "mtime": "2023-08-29T07:34:29.842Z",
    "size": 4233,
    "path": "../public/_nuxt/staff.1151c54d.js"
  },
  "/_nuxt/staff.e56f84ab.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"7b0-si8GjGBaBAM8pN6W/dgxQfoUes4\"",
    "mtime": "2023-08-29T07:34:29.840Z",
    "size": 1968,
    "path": "../public/_nuxt/staff.e56f84ab.css"
  },
  "/_nuxt/test.4de393fe.js": {
    "type": "application/javascript",
    "etag": "\"213-l61VtuTnaF5MOUh6SUO9pEKSHq0\"",
    "mtime": "2023-08-29T07:34:29.840Z",
    "size": 531,
    "path": "../public/_nuxt/test.4de393fe.js"
  },
  "/_nuxt/timeline.1dea26a8.png": {
    "type": "image/png",
    "etag": "\"16070-5fPKH13vVOzoS3/CbnABMmH10+M\"",
    "mtime": "2023-08-29T07:34:29.799Z",
    "size": 90224,
    "path": "../public/_nuxt/timeline.1dea26a8.png"
  },
  "/image/cuhk-icar_files/client": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"142d4-/FXGdqjGl/VPkVEX2qObf7T74Pk\"",
    "mtime": "2023-08-02T10:59:03.722Z",
    "size": 82644,
    "path": "../public/image/cuhk-icar_files/client"
  },
  "/image/cuhk-icar_files/entry.js.下載": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"ac9-GgXzVMIOUGdsbNksIRkl8+aRN0Q\"",
    "mtime": "2023-08-02T10:59:03.832Z",
    "size": 2761,
    "path": "../public/image/cuhk-icar_files/entry.js.下載"
  },
  "/image/cuhk-icar_files/gif_face2.gif": {
    "type": "image/gif",
    "etag": "\"6c4e47-Jxplg5GU2VXswrGeWpxE0yDz014\"",
    "mtime": "2023-08-02T10:59:02.557Z",
    "size": 7097927,
    "path": "../public/image/cuhk-icar_files/gif_face2.gif"
  },
  "/image/cuhk-icar_files/gif_line2.gif": {
    "type": "image/gif",
    "etag": "\"6c4e1e-Km/FBAiQEZkyOVBLHQuekhAL04U\"",
    "mtime": "2023-08-02T10:59:02.667Z",
    "size": 7097886,
    "path": "../public/image/cuhk-icar_files/gif_line2.gif"
  },
  "/image/cuhk-icar_files/gif_moral2.gif": {
    "type": "image/gif",
    "etag": "\"4a8d42-NqqYMGLDHjeUx0Xs7qnMqsTQO8M\"",
    "mtime": "2023-08-02T10:59:02.463Z",
    "size": 4885826,
    "path": "../public/image/cuhk-icar_files/gif_moral2.gif"
  },
  "/image/cuhk-icar_files/iCarF.png": {
    "type": "image/png",
    "etag": "\"2699-4wLivRXwiDjnO+/b2bDZQbncMCA\"",
    "mtime": "2023-08-02T10:59:02.151Z",
    "size": 9881,
    "path": "../public/image/cuhk-icar_files/iCarF.png"
  },
  "/image/cuhk-icar_files/icon_copy.png": {
    "type": "image/png",
    "etag": "\"134-ujJ8WHmH3RU/Jwq1nPBe86n61Wo\"",
    "mtime": "2023-08-02T10:59:03.602Z",
    "size": 308,
    "path": "../public/image/cuhk-icar_files/icon_copy.png"
  },
  "/image/cuhk-icar_files/icon_download.png": {
    "type": "image/png",
    "etag": "\"16e-smy9Rl8/RcSEUNLOmDZe3Bq3vnM\"",
    "mtime": "2023-08-02T10:59:03.492Z",
    "size": 366,
    "path": "../public/image/cuhk-icar_files/icon_download.png"
  },
  "/image/cuhk-icar_files/logo.png": {
    "type": "image/png",
    "etag": "\"254e-A5svQTFkdqMjKDJyJqJ7Fju5D1w\"",
    "mtime": "2023-08-02T10:59:01.489Z",
    "size": 9550,
    "path": "../public/image/cuhk-icar_files/logo.png"
  },
  "/image/cuhk-icar_files/logo_app.png": {
    "type": "image/png",
    "etag": "\"dadb-YL/QWSetbbTQbH4Y455xEY7mW+o\"",
    "mtime": "2023-08-02T10:59:02.760Z",
    "size": 56027,
    "path": "../public/image/cuhk-icar_files/logo_app.png"
  },
  "/image/cuhk-icar_files/logo_cuhk3.png": {
    "type": "image/png",
    "etag": "\"3c905-0mmm0PYvFEgluktZFvxpNvhlIdY\"",
    "mtime": "2023-08-02T10:59:02.073Z",
    "size": 248069,
    "path": "../public/image/cuhk-icar_files/logo_cuhk3.png"
  },
  "/image/cuhk-icar_files/logo_download.png": {
    "type": "image/png",
    "etag": "\"510-42Zxq7nHCcSFBwqfKl6UpheEegY\"",
    "mtime": "2023-08-02T10:59:03.383Z",
    "size": 1296,
    "path": "../public/image/cuhk-icar_files/logo_download.png"
  },
  "/image/cuhk-icar_files/logo_facereg.png": {
    "type": "image/png",
    "etag": "\"2c57-iEabmBMaWhxFNqMzNAw7INbRPOU\"",
    "mtime": "2023-08-02T10:59:03.180Z",
    "size": 11351,
    "path": "../public/image/cuhk-icar_files/logo_facereg.png"
  },
  "/image/cuhk-icar_files/logo_handdraw.png": {
    "type": "image/png",
    "etag": "\"2495-YOXSA4T/emOMzNlD81t5tWj+RC8\"",
    "mtime": "2023-08-02T10:59:03.289Z",
    "size": 9365,
    "path": "../public/image/cuhk-icar_files/logo_handdraw.png"
  },
  "/image/cuhk-icar_files/logo_icar3.png": {
    "type": "image/png",
    "etag": "\"270c-qfIlPHSRqNrNBMrmG+J7N/hHlV8\"",
    "mtime": "2023-08-02T10:59:02.260Z",
    "size": 9996,
    "path": "../public/image/cuhk-icar_files/logo_icar3.png"
  },
  "/image/cuhk-icar_files/logo_moraldilemma.png": {
    "type": "image/png",
    "etag": "\"1c38-ncutBIaUfBgSnpboaQjGj3Vp52U\"",
    "mtime": "2023-08-02T10:59:02.975Z",
    "size": 7224,
    "path": "../public/image/cuhk-icar_files/logo_moraldilemma.png"
  },
  "/image/cuhk-icar_files/logo_question2.png": {
    "type": "image/png",
    "etag": "\"c01-WJy/wUlZj+NP9/FTdQmIrFC4nJY\"",
    "mtime": "2023-08-02T10:59:02.354Z",
    "size": 3073,
    "path": "../public/image/cuhk-icar_files/logo_question2.png"
  },
  "/image/cuhk-icar_files/logo_remote.png": {
    "type": "image/png",
    "etag": "\"5380-nHhmc1zcYPPIhGRWAiY6zDGA2g8\"",
    "mtime": "2023-08-02T10:59:02.854Z",
    "size": 21376,
    "path": "../public/image/cuhk-icar_files/logo_remote.png"
  },
  "/image/cuhk-icar_files/logo_think.png": {
    "type": "image/png",
    "etag": "\"fbb-CGtKdmmVWIWjA6DOEuXn1eBl1b0\"",
    "mtime": "2023-08-02T10:59:03.070Z",
    "size": 4027,
    "path": "../public/image/cuhk-icar_files/logo_think.png"
  },
  "/image/gif/gif_face2.gif": {
    "type": "image/gif",
    "etag": "\"6c4e47-Jxplg5GU2VXswrGeWpxE0yDz014\"",
    "mtime": "1979-12-31T16:00:00.000Z",
    "size": 7097927,
    "path": "../public/image/gif/gif_face2.gif"
  },
  "/image/gif/gif_line2.gif": {
    "type": "image/gif",
    "etag": "\"6c4e1e-Km/FBAiQEZkyOVBLHQuekhAL04U\"",
    "mtime": "1979-12-31T16:00:00.000Z",
    "size": 7097886,
    "path": "../public/image/gif/gif_line2.gif"
  },
  "/image/gif/gif_moral2.gif": {
    "type": "image/gif",
    "etag": "\"4a8d42-NqqYMGLDHjeUx0Xs7qnMqsTQO8M\"",
    "mtime": "1979-12-31T16:00:00.000Z",
    "size": 4885826,
    "path": "../public/image/gif/gif_moral2.gif"
  },
  "/image/media/img0.jpg": {
    "type": "image/jpeg",
    "etag": "\"7690e-RUQA8WY0Nkfer45kh16ZzBepAQs\"",
    "mtime": "2023-06-12T09:12:11.592Z",
    "size": 485646,
    "path": "../public/image/media/img0.jpg"
  },
  "/image/media/img1.jpg": {
    "type": "image/jpeg",
    "etag": "\"a21f2-YT6fGrz3E6igorsP9Ki4rGkmOe0\"",
    "mtime": "2023-06-12T09:12:11.595Z",
    "size": 664050,
    "path": "../public/image/media/img1.jpg"
  },
  "/image/media/intro.mp4": {
    "type": "video/mp4",
    "etag": "\"371b7e-U0G09FnGS9UyRPHCqAmnK7v6VnA\"",
    "mtime": "2023-06-12T09:12:11.705Z",
    "size": 3611518,
    "path": "../public/image/media/intro.mp4"
  },
  "/image/materials/book.png": {
    "type": "image/png",
    "etag": "\"18b-N/DWthl4Tgx6c2dJUcnYXm3usN8\"",
    "mtime": "2023-07-25T02:28:16.133Z",
    "size": 395,
    "path": "../public/image/materials/book.png"
  },
  "/image/materials/iCarF.png": {
    "type": "image/png",
    "etag": "\"2699-4wLivRXwiDjnO+/b2bDZQbncMCA\"",
    "mtime": "2023-07-31T09:21:54.000Z",
    "size": 9881,
    "path": "../public/image/materials/iCarF.png"
  },
  "/image/materials/iCarL.png": {
    "type": "image/png",
    "etag": "\"18df-V9VO5fclO7PmBMTJGrqD+HcUla0\"",
    "mtime": "2023-07-31T09:22:34.000Z",
    "size": 6367,
    "path": "../public/image/materials/iCarL.png"
  },
  "/image/materials/iCarR.png": {
    "type": "image/png",
    "etag": "\"18cd-wQwdUTlno1tkMbIEyGSl9bYurGo\"",
    "mtime": "2023-07-31T09:22:24.000Z",
    "size": 6349,
    "path": "../public/image/materials/iCarR.png"
  },
  "/image/materials/icon_copy.png": {
    "type": "image/png",
    "etag": "\"134-ujJ8WHmH3RU/Jwq1nPBe86n61Wo\"",
    "mtime": "2023-07-26T13:37:01.603Z",
    "size": 308,
    "path": "../public/image/materials/icon_copy.png"
  },
  "/image/materials/icon_download.png": {
    "type": "image/png",
    "etag": "\"16e-smy9Rl8/RcSEUNLOmDZe3Bq3vnM\"",
    "mtime": "2023-07-26T12:51:44.649Z",
    "size": 366,
    "path": "../public/image/materials/icon_download.png"
  },
  "/image/materials/icon_download2.png": {
    "type": "image/png",
    "etag": "\"17a-31G/621I+D8WF49EqEBxtpjXZ08\"",
    "mtime": "2023-07-26T13:34:41.602Z",
    "size": 378,
    "path": "../public/image/materials/icon_download2.png"
  },
  "/image/materials/icon_expand.png": {
    "type": "image/png",
    "etag": "\"14c-rgWLtvVwpNfs2SpC8f8+XcPRYBI\"",
    "mtime": "2023-07-26T13:56:25.354Z",
    "size": 332,
    "path": "../public/image/materials/icon_expand.png"
  },
  "/image/materials/icon_narrow.png": {
    "type": "image/png",
    "etag": "\"13f-K1P78qpr1B0K+Ae1FxtdbshAFJo\"",
    "mtime": "2023-07-26T13:56:50.873Z",
    "size": 319,
    "path": "../public/image/materials/icon_narrow.png"
  },
  "/image/materials/icon_quote.png": {
    "type": "image/png",
    "etag": "\"153-wDra/4SsBQIH23D062v9swzgQL8\"",
    "mtime": "2023-07-26T14:03:40.053Z",
    "size": 339,
    "path": "../public/image/materials/icon_quote.png"
  },
  "/image/materials/icon_quote2.png": {
    "type": "image/png",
    "etag": "\"13e-Ym6YPNiaFk2kvV3jOIbPNWvFiao\"",
    "mtime": "2023-07-26T14:07:00.630Z",
    "size": 318,
    "path": "../public/image/materials/icon_quote2.png"
  },
  "/image/materials/icon_quote3.png": {
    "type": "image/png",
    "etag": "\"13b-mJxRYGiF17oOYwuUwlOIK1bbm3U\"",
    "mtime": "2023-07-26T14:07:18.843Z",
    "size": 315,
    "path": "../public/image/materials/icon_quote3.png"
  },
  "/image/materials/iport_cap.png": {
    "type": "image/png",
    "etag": "\"27724-UiOXmYq5LMpZeFzDABRUfckOEdA\"",
    "mtime": "2023-08-04T10:07:14.421Z",
    "size": 161572,
    "path": "../public/image/materials/iport_cap.png"
  },
  "/image/materials/logo_app.png": {
    "type": "image/png",
    "etag": "\"dadb-YL/QWSetbbTQbH4Y455xEY7mW+o\"",
    "mtime": "2023-07-31T09:23:18.000Z",
    "size": 56027,
    "path": "../public/image/materials/logo_app.png"
  },
  "/image/materials/logo_blockly.PNG": {
    "type": "image/png",
    "etag": "\"1c196-OUx43J93OfzzLZugsNmONZhir2Y\"",
    "mtime": "2023-08-04T07:18:28.000Z",
    "size": 115094,
    "path": "../public/image/materials/logo_blockly.PNG"
  },
  "/image/materials/logo_download.png": {
    "type": "image/png",
    "etag": "\"510-42Zxq7nHCcSFBwqfKl6UpheEegY\"",
    "mtime": "2023-07-31T09:25:32.000Z",
    "size": 1296,
    "path": "../public/image/materials/logo_download.png"
  },
  "/image/materials/logo_facereg.png": {
    "type": "image/png",
    "etag": "\"2c57-iEabmBMaWhxFNqMzNAw7INbRPOU\"",
    "mtime": "2023-07-31T09:24:58.000Z",
    "size": 11351,
    "path": "../public/image/materials/logo_facereg.png"
  },
  "/image/materials/logo_handdraw.png": {
    "type": "image/png",
    "etag": "\"2495-YOXSA4T/emOMzNlD81t5tWj+RC8\"",
    "mtime": "2023-07-31T09:25:12.000Z",
    "size": 9365,
    "path": "../public/image/materials/logo_handdraw.png"
  },
  "/image/materials/logo_icar.png": {
    "type": "image/png",
    "etag": "\"2a26-0AlalrB18/veLytB05vfaNzcFH8\"",
    "mtime": "2023-07-31T09:24:14.000Z",
    "size": 10790,
    "path": "../public/image/materials/logo_icar.png"
  },
  "/image/materials/logo_icar2.png": {
    "type": "image/png",
    "etag": "\"20f3-V12Zfm1y2iLThc3ssb1CCnQCuns\"",
    "mtime": "2023-08-01T04:19:38.000Z",
    "size": 8435,
    "path": "../public/image/materials/logo_icar2.png"
  },
  "/image/materials/logo_icar3.png": {
    "type": "image/png",
    "etag": "\"270c-qfIlPHSRqNrNBMrmG+J7N/hHlV8\"",
    "mtime": "2023-08-01T04:26:26.000Z",
    "size": 9996,
    "path": "../public/image/materials/logo_icar3.png"
  },
  "/image/materials/logo_moraldilemma.png": {
    "type": "image/png",
    "etag": "\"1c38-ncutBIaUfBgSnpboaQjGj3Vp52U\"",
    "mtime": "2023-07-31T09:24:42.000Z",
    "size": 7224,
    "path": "../public/image/materials/logo_moraldilemma.png"
  },
  "/image/materials/logo_question2.png": {
    "type": "image/png",
    "etag": "\"c01-WJy/wUlZj+NP9/FTdQmIrFC4nJY\"",
    "mtime": "2023-08-01T04:21:02.000Z",
    "size": 3073,
    "path": "../public/image/materials/logo_question2.png"
  },
  "/image/materials/logo_remote.png": {
    "type": "image/png",
    "etag": "\"5380-nHhmc1zcYPPIhGRWAiY6zDGA2g8\"",
    "mtime": "2023-07-31T09:23:50.000Z",
    "size": 21376,
    "path": "../public/image/materials/logo_remote.png"
  },
  "/image/materials/logo_think.png": {
    "type": "image/png",
    "etag": "\"fbb-CGtKdmmVWIWjA6DOEuXn1eBl1b0\"",
    "mtime": "2023-07-31T09:25:22.000Z",
    "size": 4027,
    "path": "../public/image/materials/logo_think.png"
  },
  "/image/materials/logo_think2.png": {
    "type": "image/png",
    "etag": "\"167c-rhLeqCgPT0fyOIfmdknbEsI1Slw\"",
    "mtime": "2023-08-02T11:06:27.270Z",
    "size": 5756,
    "path": "../public/image/materials/logo_think2.png"
  },
  "/image/materials/people.png": {
    "type": "image/png",
    "etag": "\"18d-Iysyf6X1wHdqKlrL5SuDxuZSXhc\"",
    "mtime": "2023-07-25T02:28:37.524Z",
    "size": 397,
    "path": "../public/image/materials/people.png"
  },
  "/image/materials/school.png": {
    "type": "image/png",
    "etag": "\"1cb-p4yakNHYoiGWUCUrJ3JV82OawZM\"",
    "mtime": "2023-07-25T02:29:15.311Z",
    "size": 459,
    "path": "../public/image/materials/school.png"
  },
  "/image/materials/school2.png": {
    "type": "image/png",
    "etag": "\"297a-yTY7QgRMq3224VhMmH2tdPSq4U0\"",
    "mtime": "2023-07-25T03:35:28.000Z",
    "size": 10618,
    "path": "../public/image/materials/school2.png"
  },
  "/image/materials/teacher2.png": {
    "type": "image/png",
    "etag": "\"293d-7F3uQo2hmEDewhAncwSWLSAxPFU\"",
    "mtime": "2023-07-25T03:18:54.000Z",
    "size": 10557,
    "path": "../public/image/materials/teacher2.png"
  },
  "/image/materials/work_history.png": {
    "type": "image/png",
    "etag": "\"193-rMzjx4q7EtwUiJG16LOvWz2rXz4\"",
    "mtime": "2023-07-25T02:27:52.436Z",
    "size": 403,
    "path": "../public/image/materials/work_history.png"
  },
  "/image/staff/2.jpg": {
    "type": "image/jpeg",
    "etag": "\"2a0c-9QA3SjW/F8zaFqUOr/hZ3zljvL8\"",
    "mtime": "2023-08-04T08:51:46.000Z",
    "size": 10764,
    "path": "../public/image/staff/2.jpg"
  },
  "/image/staff/alt.png": {
    "type": "image/png",
    "etag": "\"1a74-nUqWPnKCIYPr+mwJ0Irc2/XGtcQ\"",
    "mtime": "2023-08-04T08:42:44.000Z",
    "size": 6772,
    "path": "../public/image/staff/alt.png"
  },
  "/image/staff/Derek.jpg": {
    "type": "image/jpeg",
    "etag": "\"16773-WDXJiFMzRdxCvNtBHj7zOEdZD6c\"",
    "mtime": "2023-06-12T09:12:11.585Z",
    "size": 92019,
    "path": "../public/image/staff/Derek.jpg"
  },
  "/image/staff/icon1_1200_circle.jpg": {
    "type": "image/jpeg",
    "etag": "\"377a7-fOa2Ws5miwZ+Q21XJG6UBVR+w+w\"",
    "mtime": "2023-06-12T09:12:11.588Z",
    "size": 227239,
    "path": "../public/image/staff/icon1_1200_circle.jpg"
  },
  "/image/staff/icon1_1200_circle.webp": {
    "type": "image/webp",
    "etag": "\"da96-XbSrfi9y0kw2gP5BAjzT4z1kT5Q\"",
    "mtime": "2023-06-12T09:12:11.588Z",
    "size": 55958,
    "path": "../public/image/staff/icon1_1200_circle.webp"
  },
  "/image/staff/icon2_1200_circle.jpg": {
    "type": "image/jpeg",
    "etag": "\"390fc-QPme7gxDtVZIos2WeXKbTZEz+S0\"",
    "mtime": "2023-06-12T09:12:11.589Z",
    "size": 233724,
    "path": "../public/image/staff/icon2_1200_circle.jpg"
  },
  "/image/staff/icon2_1200_circle.webp": {
    "type": "image/webp",
    "etag": "\"e9fa-iCV2jORZZtq0ngIVnSXhdZlZLPo\"",
    "mtime": "2023-06-12T09:12:11.590Z",
    "size": 59898,
    "path": "../public/image/staff/icon2_1200_circle.webp"
  }
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = {"/_nuxt":{"maxAge":31536000}};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _f4b49z = eventHandler((event) => {
  if (event.node.req.method && !METHODS.has(event.node.req.method)) {
    return;
  }
  let id = decodeURIComponent(
    withLeadingSlash(
      withoutTrailingSlash(parseURL(event.node.req.url).pathname)
    )
  );
  let asset;
  const encodingHeader = String(
    event.node.req.headers["accept-encoding"] || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  if (encodings.length > 1) {
    event.node.res.setHeader("Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      event.node.res.removeHeader("cache-control");
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = event.node.req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    if (!event.handled) {
      event.node.res.statusCode = 304;
      event.node.res.end();
    }
    return;
  }
  const ifModifiedSinceH = event.node.req.headers["if-modified-since"];
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    if (!event.handled) {
      event.node.res.statusCode = 304;
      event.node.res.end();
    }
    return;
  }
  if (asset.type && !event.node.res.getHeader("Content-Type")) {
    event.node.res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag && !event.node.res.getHeader("ETag")) {
    event.node.res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime && !event.node.res.getHeader("Last-Modified")) {
    event.node.res.setHeader("Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !event.node.res.getHeader("Content-Encoding")) {
    event.node.res.setHeader("Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !event.node.res.getHeader("Content-Length")) {
    event.node.res.setHeader("Content-Length", asset.size);
  }
  return readAsset(id);
});

const _BUmDx6 = lazyEventHandler(() => {
  const opts = useRuntimeConfig().ipx;
  const ipxOptions = {
    ...opts || {},
    // TODO: Switch to storage API when ipx supports it
    dir: fileURLToPath(new URL(opts.dir, globalThis._importMeta_.url))
  };
  const ipx = createIPX(ipxOptions);
  const middleware = createIPXMiddleware(ipx);
  return eventHandler(async (event) => {
    event.node.req.url = withLeadingSlash(event.context.params._);
    await middleware(event.node.req, event.node.res);
  });
});

const _lazy_6CIL7R = () => import('../handlers/renderer.mjs').then(function (n) { return n.r; });

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '/__nuxt_error', handler: _lazy_6CIL7R, lazy: true, middleware: false, method: undefined },
  { route: '/_ipx/**', handler: _BUmDx6, lazy: false, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_6CIL7R, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const h3App = createApp({
    debug: destr(false),
    onError: errorHandler
  });
  const router = createRouter$1();
  h3App.use(createRouteRulesHandler());
  const localCall = createCall(toNodeListener(h3App));
  const localFetch = createFetch(localCall, globalThis.fetch);
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(
    eventHandler((event) => {
      event.context.nitro = event.context.nitro || {};
      const envContext = event.node.req.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
    })
  );
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch
  };
  for (const plugin of plugins) {
    plugin(app);
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

function getGracefulShutdownConfig() {
  return {
    disabled: !!process.env.NITRO_SHUTDOWN_DISABLED,
    signals: (process.env.NITRO_SHUTDOWN_SIGNALS || "SIGTERM SIGINT").split(" ").map((s) => s.trim()),
    timeout: Number.parseInt(process.env.NITRO_SHUTDOWN_TIMEOUT, 10) || 3e4,
    forceExit: !process.env.NITRO_SHUTDOWN_NO_FORCE_EXIT
  };
}
function setupGracefulShutdown(listener, nitroApp) {
  const shutdownConfig = getGracefulShutdownConfig();
  if (shutdownConfig.disabled) {
    return;
  }
  gracefulShutdown(listener, {
    signals: shutdownConfig.signals.join(" "),
    timeout: shutdownConfig.timeout,
    forceExit: shutdownConfig.forceExit,
    onShutdown: async () => {
      await new Promise((resolve) => {
        const timeout = setTimeout(() => {
          console.warn("Graceful shutdown timeout, force exiting...");
          resolve();
        }, shutdownConfig.timeout);
        nitroApp.hooks.callHook("close").catch((err) => {
          console.error(err);
        }).finally(() => {
          clearTimeout(timeout);
          resolve();
        });
      });
    }
  });
}

const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const server = cert && key ? new Server({ key, cert }, toNodeListener(nitroApp.h3App)) : new Server$1(toNodeListener(nitroApp.h3App));
const port = destr(process.env.NITRO_PORT || process.env.PORT) || 3e3;
const host = process.env.NITRO_HOST || process.env.HOST;
const listener = server.listen(port, host, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  const protocol = cert && key ? "https" : "http";
  const addressInfo = listener.address();
  const baseURL = (useRuntimeConfig().app.baseURL || "").replace(/\/$/, "");
  const url = `${protocol}://${addressInfo.family === "IPv6" ? `[${addressInfo.address}]` : addressInfo.address}:${addressInfo.port}${baseURL}`;
  console.log(`Listening ${url}`);
});
trapUnhandledNodeErrors();
setupGracefulShutdown(listener, nitroApp);
const nodeServer = {};

export { useRuntimeConfig as a, getRouteRules as g, nodeServer as n, useNitroApp as u };
//# sourceMappingURL=node-server.mjs.map
