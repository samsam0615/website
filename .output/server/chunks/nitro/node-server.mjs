globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import 'node-fetch-native/polyfill';
import { Server as Server$1 } from 'node:http';
import { Server } from 'node:https';
import destr from 'destr';
import { defineEventHandler, handleCacheHeaders, createEvent, eventHandler, setHeaders, sendRedirect, proxyRequest, getRequestHeader, setResponseStatus, setResponseHeader, getRequestHeaders, createError, getRequestHost, getRequestProtocol, setHeader, getHeader, getQuery as getQuery$1, lazyEventHandler, createApp, createRouter as createRouter$1, toNodeListener, fetchWithEvent } from 'h3';
import { createFetch as createFetch$1, Headers } from 'ofetch';
import { createCall, createFetch } from 'unenv/runtime/fetch/index';
import { createHooks } from 'hookable';
import { snakeCase } from 'scule';
import { klona } from 'klona';
import defu, { defuFn, defu as defu$1 } from 'defu';
import { hash } from 'ohash';
import { parseURL, withoutBase, joinURL, getQuery, withQuery, withLeadingSlash, withoutTrailingSlash, hasProtocol, withBase, withTrailingSlash, withHttps } from 'ufo';
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
  "public": {
    "site": {
      "_context": {
        "defaultLocale": "defaults",
        "trailingSlash": "defaults",
        "titleSeparator": "defaults",
        "name": "package.json",
        "indexable": "system",
        "debug": "nuxt:config:site",
        "url": "nuxt:config:site"
      },
      "defaultLocale": "en",
      "trailingSlash": false,
      "titleSeparator": "|",
      "name": "nuxt-app",
      "indexable": true,
      "debug": false,
      "url": "https://eduairhk.com"
    }
  },
  "nuxt-simple-sitemap": {
    "version": "3.2.6",
    "moduleConfig": {
      "autoLastmod": true,
      "xsl": "/__sitemap__/style.xsl",
      "xslTips": true,
      "cacheTtl": 3600000,
      "defaultSitemapsChunkSize": 1000,
      "runtimeCacheStorage": "default",
      "autoAlternativeLangPrefixes": "",
      "credits": true,
      "defaults": {},
      "xslColumns": [
        {
          "label": "URL",
          "width": "50%"
        },
        {
          "label": "Images",
          "width": "25%",
          "select": "count(image:image)"
        },
        {
          "label": "Last Updated",
          "width": "25%",
          "select": "concat(substring(sitemap:lastmod,0,11),concat(' ', substring(sitemap:lastmod,12,5)),concat(' ', substring(sitemap:lastmod,20,6)))"
        }
      ],
      "include": [],
      "exclude": [],
      "sitemaps": "",
      "sitemapName": "sitemap.xml",
      "dynamicUrlsApiEndpoint": "/api/_sitemap-urls",
      "urls": [],
      "debug": false,
      "discoverImages": true
    },
    "buildTimeMeta": {
      "isNuxtContentDocumentDriven": false,
      "hasApiRoutesUrl": false,
      "hasPrerenderedRoutesPayload": false,
      "prerenderSitemap": false,
      "version": "3.2.6"
    }
  },
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
const _sharedAppConfig = _deepFreeze(klona(appConfig));
function useAppConfig(event) {
  if (!event) {
    return _sharedAppConfig;
  }
  if (event.context.nitro.appConfig) {
    return event.context.nitro.appConfig;
  }
  const appConfig$1 = klona(appConfig);
  event.context.nitro.appConfig = appConfig$1;
  return appConfig$1;
}
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
  "/apple.png": {
    "type": "image/png",
    "etag": "\"a538-y+gIfwC5IDCeobLC6JHiVvIqXDw\"",
    "mtime": "2023-09-18T08:35:20.000Z",
    "size": 42296,
    "path": "../public/apple.png"
  },
  "/banner1.jpg": {
    "type": "image/jpeg",
    "etag": "\"867f-cWs+dfHZGlYx9PEf4TQ8cEMICOE\"",
    "mtime": "2023-09-19T01:28:31.624Z",
    "size": 34431,
    "path": "../public/banner1.jpg"
  },
  "/banner2.jpg": {
    "type": "image/jpeg",
    "etag": "\"92ac6-JPnMruz+uw0Um8Wa63EmPymqYFs\"",
    "mtime": "2023-09-19T06:10:04.833Z",
    "size": 600774,
    "path": "../public/banner2.jpg"
  },
  "/call.png": {
    "type": "image/png",
    "etag": "\"180-v5aXfMuII/ioULqkXWLhRNnNOSU\"",
    "mtime": "2023-09-18T09:41:13.938Z",
    "size": 384,
    "path": "../public/call.png"
  },
  "/call2.png": {
    "type": "image/png",
    "etag": "\"c9-wUkTlLnCZbpLH89NVqEp+9sGtMM\"",
    "mtime": "2023-09-18T09:44:24.955Z",
    "size": 201,
    "path": "../public/call2.png"
  },
  "/call3.png": {
    "type": "image/png",
    "etag": "\"25d-Zf8ukbQgfG02HTOtZofDuz6C2gE\"",
    "mtime": "2023-09-18T09:53:03.437Z",
    "size": 605,
    "path": "../public/call3.png"
  },
  "/company1.png": {
    "type": "image/png",
    "etag": "\"21bc-Y0gi8lEQtltVkrJ3iJK14v3Yh7I\"",
    "mtime": "2023-09-18T06:11:00.000Z",
    "size": 8636,
    "path": "../public/company1.png"
  },
  "/company1.svg": {
    "type": "image/svg+xml",
    "etag": "\"b3e-gTO5g8AviD7fQVMeiS9C06j50Bk\"",
    "mtime": "2023-09-19T05:52:19.713Z",
    "size": 2878,
    "path": "../public/company1.svg"
  },
  "/company2.png": {
    "type": "image/png",
    "etag": "\"2342-6sZxnHofap8QN3CdiKJlZmHVMsY\"",
    "mtime": "2023-09-18T06:11:18.000Z",
    "size": 9026,
    "path": "../public/company2.png"
  },
  "/company2.svg": {
    "type": "image/svg+xml",
    "etag": "\"4cd-ewC38qTe9kMtbJxjA+Qnw20rvac\"",
    "mtime": "2023-09-19T05:52:22.175Z",
    "size": 1229,
    "path": "../public/company2.svg"
  },
  "/company3.png": {
    "type": "image/png",
    "etag": "\"23d3-AIdZuHBwbTNXEX388ZctHFpfr9k\"",
    "mtime": "2023-09-18T06:20:58.000Z",
    "size": 9171,
    "path": "../public/company3.png"
  },
  "/company3.svg": {
    "type": "image/svg+xml",
    "etag": "\"d14-gXBP1q7hQNxY9Qeh8wsirX5SbcE\"",
    "mtime": "2023-09-19T05:52:24.677Z",
    "size": 3348,
    "path": "../public/company3.svg"
  },
  "/company4.png": {
    "type": "image/png",
    "etag": "\"2159-LPBqKrENuwUoh6+K5QjjOunrkkQ\"",
    "mtime": "2023-09-18T06:21:58.000Z",
    "size": 8537,
    "path": "../public/company4.png"
  },
  "/company4.svg": {
    "type": "image/svg+xml",
    "etag": "\"618-EWCZZUI/83p/aEVOdUVJq83/oK8\"",
    "mtime": "2023-09-19T05:52:28.473Z",
    "size": 1560,
    "path": "../public/company4.svg"
  },
  "/company5.svg": {
    "type": "image/svg+xml",
    "etag": "\"b34-3ons9dcJVc1QiBuh6P1AM8IqB7M\"",
    "mtime": "2023-09-18T06:10:48.000Z",
    "size": 2868,
    "path": "../public/company5.svg"
  },
  "/company6.svg": {
    "type": "image/svg+xml",
    "etag": "\"4c8-u4VKYjXCHkhxU0kE/5D5qI4UGBA\"",
    "mtime": "2023-09-18T06:11:30.000Z",
    "size": 1224,
    "path": "../public/company6.svg"
  },
  "/company7.svg": {
    "type": "image/svg+xml",
    "etag": "\"d0f-PnwqkOHkhTrWkIfsIbUDkf7WiNQ\"",
    "mtime": "2023-09-18T06:21:16.000Z",
    "size": 3343,
    "path": "../public/company7.svg"
  },
  "/company8.svg": {
    "type": "image/svg+xml",
    "etag": "\"60e-6olXsXnd9MiT0U0QeXvjcBKapHY\"",
    "mtime": "2023-09-18T06:21:50.000Z",
    "size": 1550,
    "path": "../public/company8.svg"
  },
  "/event1.jpg": {
    "type": "image/jpeg",
    "etag": "\"4ad07-ScsSF26n6tiznqEMWCTODORdAUo\"",
    "mtime": "2023-09-19T10:53:15.033Z",
    "size": 306439,
    "path": "../public/event1.jpg"
  },
  "/event2.jpg": {
    "type": "image/jpeg",
    "etag": "\"6056a-AAngM1weJyf5Ik9/gajtRYdTbz4\"",
    "mtime": "2023-09-19T05:45:07.895Z",
    "size": 394602,
    "path": "../public/event2.jpg"
  },
  "/event3.jpg": {
    "type": "image/jpeg",
    "etag": "\"4f33c-QfoHlTlQKaytldUw0ke88aOLyk8\"",
    "mtime": "2023-09-19T05:45:07.921Z",
    "size": 324412,
    "path": "../public/event3.jpg"
  },
  "/event4.jpg": {
    "type": "image/jpeg",
    "etag": "\"687eb-rcY0kfDKm7NXfWIDH+XdLX92/F0\"",
    "mtime": "2023-09-19T05:45:07.948Z",
    "size": 428011,
    "path": "../public/event4.jpg"
  },
  "/event5.jpg": {
    "type": "image/jpeg",
    "etag": "\"59f89-LBlQxsPdFBhO+wlqo2+92ztrigU\"",
    "mtime": "2023-09-19T05:45:07.973Z",
    "size": 368521,
    "path": "../public/event5.jpg"
  },
  "/event6.jpg": {
    "type": "image/jpeg",
    "etag": "\"4d524-3pSct9Xi+vV3G9sziSNfy5OY56U\"",
    "mtime": "2023-09-19T10:43:04.659Z",
    "size": 316708,
    "path": "../public/event6.jpg"
  },
  "/event7.jpg": {
    "type": "image/jpeg",
    "etag": "\"7f5f3-gvafJd9OEiPgElW71n0uAz8YNm4\"",
    "mtime": "2023-09-19T10:53:10.914Z",
    "size": 521715,
    "path": "../public/event7.jpg"
  },
  "/facebook.png": {
    "type": "image/png",
    "etag": "\"12be7-8KAque2ZeKAeStiBNJT8MJxoZ1o\"",
    "mtime": "2023-09-18T09:30:38.034Z",
    "size": 76775,
    "path": "../public/facebook.png"
  },
  "/facebook2.svg": {
    "type": "image/svg+xml",
    "etag": "\"66a-/6Irw4HBFNBxsSDDH52kT2NJtIk\"",
    "mtime": "2023-09-18T09:39:45.039Z",
    "size": 1642,
    "path": "../public/facebook2.svg"
  },
  "/facebook3.png": {
    "type": "image/png",
    "etag": "\"2d9-vbh+X62p2e5QyFDpenhXDITplso\"",
    "mtime": "2023-09-18T09:53:24.617Z",
    "size": 729,
    "path": "../public/facebook3.png"
  },
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"3c2e-6i49WGBAyeOhMkH9mEoDQ/xQ3gU\"",
    "mtime": "2023-08-10T12:09:40.000Z",
    "size": 15406,
    "path": "../public/favicon.ico"
  },
  "/googleplay.png": {
    "type": "image/png",
    "etag": "\"cfd2-KQCqF1o4Ih0F7AgME0Szb9lOquw\"",
    "mtime": "2023-09-18T08:33:54.000Z",
    "size": 53202,
    "path": "../public/googleplay.png"
  },
  "/icars.jpg": {
    "type": "image/jpeg",
    "etag": "\"2ca9c5-z03v7n0NGxOV9QnJZ9050ViEvfA\"",
    "mtime": "2023-09-19T05:11:54.853Z",
    "size": 2927045,
    "path": "../public/icars.jpg"
  },
  "/icars2.jpg": {
    "type": "image/jpeg",
    "etag": "\"3aa55-xlZJF/qrSEfPYkhJOfggPwxxu6c\"",
    "mtime": "2023-09-19T10:01:59.444Z",
    "size": 240213,
    "path": "../public/icars2.jpg"
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
  "/instagram.png": {
    "type": "image/png",
    "etag": "\"5e0c-MOw18SCarah70BiQCLXOBsghEqE\"",
    "mtime": "2023-09-18T09:29:51.418Z",
    "size": 24076,
    "path": "../public/instagram.png"
  },
  "/instagram2.svg": {
    "type": "image/svg+xml",
    "etag": "\"246-QG2mvFLhmrNPrV+uKx8hEliP/Lg\"",
    "mtime": "2023-09-18T09:38:40.359Z",
    "size": 582,
    "path": "../public/instagram2.svg"
  },
  "/instagram3.png": {
    "type": "image/png",
    "etag": "\"2ff-dQLiZY264Q8PM4qy2Bp9VqUTavU\"",
    "mtime": "2023-09-18T09:50:37.107Z",
    "size": 767,
    "path": "../public/instagram3.png"
  },
  "/intro.mp4": {
    "type": "video/mp4",
    "etag": "\"371b7e-U0G09FnGS9UyRPHCqAmnK7v6VnA\"",
    "mtime": "2023-06-12T09:12:11.705Z",
    "size": 3611518,
    "path": "../public/intro.mp4"
  },
  "/iport.png": {
    "type": "image/png",
    "etag": "\"573a-5IV42rc/3cs5up53eXHnC0dV+rU\"",
    "mtime": "2023-09-04T02:24:46.304Z",
    "size": 22330,
    "path": "../public/iport.png"
  },
  "/iport.svg": {
    "type": "image/svg+xml",
    "etag": "\"21a2-9XZVtSwTRYRwYYJhxBL04eyi2xs\"",
    "mtime": "2023-08-31T08:05:40.470Z",
    "size": 8610,
    "path": "../public/iport.svg"
  },
  "/iport2.png": {
    "type": "image/png",
    "etag": "\"1793b-9OlOOkb1r9XlRzlc/j4ziScAQMA\"",
    "mtime": "2023-09-04T02:33:56.320Z",
    "size": 96571,
    "path": "../public/iport2.png"
  },
  "/iport2.svg": {
    "type": "image/svg+xml",
    "etag": "\"2184-LyKZq3Kl8daKiLdmeVSIfL5JqTc\"",
    "mtime": "2023-09-04T06:05:38.240Z",
    "size": 8580,
    "path": "../public/iport2.svg"
  },
  "/iportDesc.png": {
    "type": "image/png",
    "etag": "\"3a085-YcyROTE3CnexDZ82jj1IlNRAj5s\"",
    "mtime": "2023-09-04T03:19:12.214Z",
    "size": 237701,
    "path": "../public/iportDesc.png"
  },
  "/iportDesc2.png": {
    "type": "image/png",
    "etag": "\"a9047-/G0DZKvK6W4/ZigqSFt8y4jWgeE\"",
    "mtime": "2023-09-04T05:38:59.213Z",
    "size": 692295,
    "path": "../public/iportDesc2.png"
  },
  "/iportDesc3.png": {
    "type": "image/png",
    "etag": "\"d9389-vtrzlCRgv3gkWakM6tLfQOmrFLA\"",
    "mtime": "2023-09-04T06:48:15.630Z",
    "size": 889737,
    "path": "../public/iportDesc3.png"
  },
  "/iportDesc4.png": {
    "type": "image/png",
    "etag": "\"99f10-jftk7lP1XHSSeGfIQY9D0Ly0KM4\"",
    "mtime": "2023-09-04T06:56:07.890Z",
    "size": 630544,
    "path": "../public/iportDesc4.png"
  },
  "/iportDesc6.png": {
    "type": "image/png",
    "etag": "\"97efc-u/K/MAxm91jrRgu7R1jnPnJUU5k\"",
    "mtime": "2023-09-05T06:26:50.000Z",
    "size": 622332,
    "path": "../public/iportDesc6.png"
  },
  "/location.png": {
    "type": "image/png",
    "etag": "\"19f-30VuQq2MVmJ1uQnwwVRLfvDbhio\"",
    "mtime": "2023-09-18T09:41:54.981Z",
    "size": 415,
    "path": "../public/location.png"
  },
  "/location2.png": {
    "type": "image/png",
    "etag": "\"d2-xn859Uo742XDG+aTqikhXC5EF/I\"",
    "mtime": "2023-09-18T09:43:53.004Z",
    "size": 210,
    "path": "../public/location2.png"
  },
  "/location3.png": {
    "type": "image/png",
    "etag": "\"1a9-5s4YsdjcNn8WqibgW5xWByljprQ\"",
    "mtime": "2023-09-18T09:54:58.134Z",
    "size": 425,
    "path": "../public/location3.png"
  },
  "/logo.png": {
    "type": "image/png",
    "etag": "\"254e-A5svQTFkdqMjKDJyJqJ7Fju5D1w\"",
    "mtime": "2023-07-25T02:12:37.133Z",
    "size": 9550,
    "path": "../public/logo.png"
  },
  "/logo2.png": {
    "type": "image/png",
    "etag": "\"cbd0-iDNO/A7rkk1kg3PMcNwU+kuWhuI\"",
    "mtime": "2023-09-04T02:33:05.740Z",
    "size": 52176,
    "path": "../public/logo2.png"
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
  "/mail.png": {
    "type": "image/png",
    "etag": "\"14f-zxs91jA+BJwvChHJfHCABssuIXo\"",
    "mtime": "2023-09-18T09:41:36.002Z",
    "size": 335,
    "path": "../public/mail.png"
  },
  "/mail2.png": {
    "type": "image/png",
    "etag": "\"b2-e7T9kJB9ExVpBsmNBxrrkHxsxD4\"",
    "mtime": "2023-09-18T09:44:50.267Z",
    "size": 178,
    "path": "../public/mail2.png"
  },
  "/mail3.png": {
    "type": "image/png",
    "etag": "\"1e9-otNruBWs5SYqqGCWLBVNO1hLKGI\"",
    "mtime": "2023-09-18T09:54:31.697Z",
    "size": 489,
    "path": "../public/mail3.png"
  },
  "/timeline2.png": {
    "type": "image/png",
    "etag": "\"5481e-VNOkXaDhjTf0Jeld0CPjFFqsU4I\"",
    "mtime": "2023-09-18T09:30:22.000Z",
    "size": 346142,
    "path": "../public/timeline2.png"
  },
  "/timeline3.png": {
    "type": "image/png",
    "etag": "\"1e95a-UUprcahDZJbxZ1M+68mawB1rghc\"",
    "mtime": "2023-09-19T10:03:29.390Z",
    "size": 125274,
    "path": "../public/timeline3.png"
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
  "/image/iport.png": {
    "type": "image/png",
    "etag": "\"573a-5IV42rc/3cs5up53eXHnC0dV+rU\"",
    "mtime": "2023-09-04T02:24:46.304Z",
    "size": 22330,
    "path": "../public/image/iport.png"
  },
  "/image/iport2.png": {
    "type": "image/png",
    "etag": "\"1793b-9OlOOkb1r9XlRzlc/j4ziScAQMA\"",
    "mtime": "2023-09-04T02:33:56.320Z",
    "size": 96571,
    "path": "../public/image/iport2.png"
  },
  "/image/iport2.svg": {
    "type": "image/svg+xml",
    "etag": "\"2184-LyKZq3Kl8daKiLdmeVSIfL5JqTc\"",
    "mtime": "2023-09-04T06:05:38.240Z",
    "size": 8580,
    "path": "../public/image/iport2.svg"
  },
  "/image/iportDesc2.png": {
    "type": "image/png",
    "etag": "\"a9047-/G0DZKvK6W4/ZigqSFt8y4jWgeE\"",
    "mtime": "2023-09-04T05:38:59.213Z",
    "size": 692295,
    "path": "../public/image/iportDesc2.png"
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
  "/image/logo2.png": {
    "type": "image/png",
    "etag": "\"cbd0-iDNO/A7rkk1kg3PMcNwU+kuWhuI\"",
    "mtime": "2023-09-04T02:33:05.740Z",
    "size": 52176,
    "path": "../public/image/logo2.png"
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
  "/image/timeline3.png": {
    "type": "image/png",
    "etag": "\"8107e-205yXIvnp055yjBWbbKWzflOfm0\"",
    "mtime": "2023-09-19T09:47:56.000Z",
    "size": 528510,
    "path": "../public/image/timeline3.png"
  },
  "/image/youtube.png": {
    "type": "image/png",
    "etag": "\"21aa-JIdFmDjb13Bd3Q9MGRPlBgWOjHg\"",
    "mtime": "2023-06-12T09:12:11.599Z",
    "size": 8618,
    "path": "../public/image/youtube.png"
  },
  "/_nuxt/company.369649d3.js": {
    "type": "application/javascript",
    "etag": "\"964-bKHtLqrozoHKtLfqNtg7gPf+UPE\"",
    "mtime": "2023-09-20T01:55:03.488Z",
    "size": 2404,
    "path": "../public/_nuxt/company.369649d3.js"
  },
  "/_nuxt/company.4eb46b22.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"5e1-GerEl7/GYaydtrji9ZVQ5YcxjMY\"",
    "mtime": "2023-09-20T01:55:03.479Z",
    "size": 1505,
    "path": "../public/_nuxt/company.4eb46b22.css"
  },
  "/_nuxt/company2.5509ac2a.js": {
    "type": "application/javascript",
    "etag": "\"f97-uF8YEj3iAU62ojKFiS9EJDpc/F0\"",
    "mtime": "2023-09-20T01:55:03.488Z",
    "size": 3991,
    "path": "../public/_nuxt/company2.5509ac2a.js"
  },
  "/_nuxt/company2.a455f27b.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"a90-ieqtx800xCD3mIM6l+CEU95YS6w\"",
    "mtime": "2023-09-20T01:55:03.479Z",
    "size": 2704,
    "path": "../public/_nuxt/company2.a455f27b.css"
  },
  "/_nuxt/components.15610d71.js": {
    "type": "application/javascript",
    "etag": "\"57a-tlFk60V3WNS0G46lgFStekZuJUg\"",
    "mtime": "2023-09-20T01:55:03.488Z",
    "size": 1402,
    "path": "../public/_nuxt/components.15610d71.js"
  },
  "/_nuxt/contact.051474ef.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"4af-RNGLTyx8JiFxseeUiD5IBv/mvmU\"",
    "mtime": "2023-09-20T01:55:03.479Z",
    "size": 1199,
    "path": "../public/_nuxt/contact.051474ef.css"
  },
  "/_nuxt/contact.382d83f7.js": {
    "type": "application/javascript",
    "etag": "\"a55-Y/lQtcEhHlvPFjCE/V6eL6INf7s\"",
    "mtime": "2023-09-20T01:55:03.488Z",
    "size": 2645,
    "path": "../public/_nuxt/contact.382d83f7.js"
  },
  "/_nuxt/contact2.015868bf.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"7bb-HnZSY0IEjXsJg9AnCSqiIp53oYs\"",
    "mtime": "2023-09-20T01:55:03.479Z",
    "size": 1979,
    "path": "../public/_nuxt/contact2.015868bf.css"
  },
  "/_nuxt/contact2.cd3ecdb2.js": {
    "type": "application/javascript",
    "etag": "\"7f6-HH8zbF6RaW/z53x7Q7A19kMWN0o\"",
    "mtime": "2023-09-20T01:55:03.488Z",
    "size": 2038,
    "path": "../public/_nuxt/contact2.cd3ecdb2.js"
  },
  "/_nuxt/cuhk-icar.69a4bf95.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"13b1-+eiy4XAE8h0vMKvXqSp+zZLfe5k\"",
    "mtime": "2023-09-20T01:55:03.479Z",
    "size": 5041,
    "path": "../public/_nuxt/cuhk-icar.69a4bf95.css"
  },
  "/_nuxt/cuhk-icar.80b8801f.js": {
    "type": "application/javascript",
    "etag": "\"377e-ptp7oQ7NftPTL7LmC98w2cOckFI\"",
    "mtime": "2023-09-20T01:55:03.501Z",
    "size": 14206,
    "path": "../public/_nuxt/cuhk-icar.80b8801f.js"
  },
  "/_nuxt/cuhk-iport.3528d32c.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1025-LrTXaFz585AEJ69nY0NGQLaKfSM\"",
    "mtime": "2023-09-20T01:55:03.479Z",
    "size": 4133,
    "path": "../public/_nuxt/cuhk-iport.3528d32c.css"
  },
  "/_nuxt/cuhk-iport.a0ac0bba.js": {
    "type": "application/javascript",
    "etag": "\"316d-LxKMQTxce5Pn5LUZfXvUQMdPTnA\"",
    "mtime": "2023-09-20T01:55:03.492Z",
    "size": 12653,
    "path": "../public/_nuxt/cuhk-iport.a0ac0bba.js"
  },
  "/_nuxt/entry.12d5db98.js": {
    "type": "application/javascript",
    "etag": "\"1e018a-NM7qqs9CdiAGvvV3GZeK3bBz/mo\"",
    "mtime": "2023-09-20T01:55:03.503Z",
    "size": 1966474,
    "path": "../public/_nuxt/entry.12d5db98.js"
  },
  "/_nuxt/entry.aa02cfe1.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"16ba-My0uU8vvy6iplVkEHFrU2LE8s3w\"",
    "mtime": "2023-09-20T01:55:03.473Z",
    "size": 5818,
    "path": "../public/_nuxt/entry.aa02cfe1.css"
  },
  "/_nuxt/error-404.70d16bd8.js": {
    "type": "application/javascript",
    "etag": "\"8ad-Q1+fj0FdCsugYkUMEiKrDQu95qM\"",
    "mtime": "2023-09-20T01:55:03.488Z",
    "size": 2221,
    "path": "../public/_nuxt/error-404.70d16bd8.js"
  },
  "/_nuxt/error-404.7fc72018.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"e2e-iNt1cqPQ0WDudfCTZVQd31BeRGs\"",
    "mtime": "2023-09-20T01:55:03.473Z",
    "size": 3630,
    "path": "../public/_nuxt/error-404.7fc72018.css"
  },
  "/_nuxt/error-500.b6097274.js": {
    "type": "application/javascript",
    "etag": "\"756-NbcL4SAyR1ZGoXoSfc+qoSSn71o\"",
    "mtime": "2023-09-20T01:55:03.488Z",
    "size": 1878,
    "path": "../public/_nuxt/error-500.b6097274.js"
  },
  "/_nuxt/error-500.c5df6088.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"79e-ByRo+49BgcevWdRjJy3CMx2IA5k\"",
    "mtime": "2023-09-20T01:55:03.476Z",
    "size": 1950,
    "path": "../public/_nuxt/error-500.c5df6088.css"
  },
  "/_nuxt/event3.13e8b7e3.jpg": {
    "type": "image/jpeg",
    "etag": "\"4f33c-QfoHlTlQKaytldUw0ke88aOLyk8\"",
    "mtime": "2023-09-20T01:55:03.473Z",
    "size": 324412,
    "path": "../public/_nuxt/event3.13e8b7e3.jpg"
  },
  "/_nuxt/gif_face2.b084def7.gif": {
    "type": "image/gif",
    "etag": "\"6c4e47-Jxplg5GU2VXswrGeWpxE0yDz014\"",
    "mtime": "2023-09-20T01:55:03.502Z",
    "size": 7097927,
    "path": "../public/_nuxt/gif_face2.b084def7.gif"
  },
  "/_nuxt/gif_line2.81f158a0.gif": {
    "type": "image/gif",
    "etag": "\"6c4e1e-Km/FBAiQEZkyOVBLHQuekhAL04U\"",
    "mtime": "2023-09-20T01:55:03.502Z",
    "size": 7097886,
    "path": "../public/_nuxt/gif_line2.81f158a0.gif"
  },
  "/_nuxt/gif_moral2.520ac47b.gif": {
    "type": "image/gif",
    "etag": "\"4a8d42-NqqYMGLDHjeUx0Xs7qnMqsTQO8M\"",
    "mtime": "2023-09-20T01:55:03.488Z",
    "size": 4885826,
    "path": "../public/_nuxt/gif_moral2.520ac47b.gif"
  },
  "/_nuxt/iCarF.0923d21e.png": {
    "type": "image/png",
    "etag": "\"2699-4wLivRXwiDjnO+/b2bDZQbncMCA\"",
    "mtime": "2023-09-20T01:55:03.468Z",
    "size": 9881,
    "path": "../public/_nuxt/iCarF.0923d21e.png"
  },
  "/_nuxt/iCarL.d12c0858.png": {
    "type": "image/png",
    "etag": "\"18df-V9VO5fclO7PmBMTJGrqD+HcUla0\"",
    "mtime": "2023-09-20T01:55:03.473Z",
    "size": 6367,
    "path": "../public/_nuxt/iCarL.d12c0858.png"
  },
  "/_nuxt/iCarR.25d12606.png": {
    "type": "image/png",
    "etag": "\"18cd-wQwdUTlno1tkMbIEyGSl9bYurGo\"",
    "mtime": "2023-09-20T01:55:03.473Z",
    "size": 6349,
    "path": "../public/_nuxt/iCarR.25d12606.png"
  },
  "/_nuxt/icars2.8fe89017.jpg": {
    "type": "image/jpeg",
    "etag": "\"3aa55-xlZJF/qrSEfPYkhJOfggPwxxu6c\"",
    "mtime": "2023-09-20T01:55:03.473Z",
    "size": 240213,
    "path": "../public/_nuxt/icars2.8fe89017.jpg"
  },
  "/_nuxt/index.9949e3a6.js": {
    "type": "application/javascript",
    "etag": "\"16dc-zPPUIo/+zGIgdJnA32TiB0qmR8c\"",
    "mtime": "2023-09-20T01:55:03.492Z",
    "size": 5852,
    "path": "../public/_nuxt/index.9949e3a6.js"
  },
  "/_nuxt/index.a704afdc.js": {
    "type": "application/javascript",
    "etag": "\"5c6-QZoT6f12pRDxGaJd25zwN44iRHw\"",
    "mtime": "2023-09-20T01:55:03.488Z",
    "size": 1478,
    "path": "../public/_nuxt/index.a704afdc.js"
  },
  "/_nuxt/index.d0a62524.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"d56-RxeFf/IWw0N5IdkpJVEiQcxRAMI\"",
    "mtime": "2023-09-20T01:55:03.479Z",
    "size": 3414,
    "path": "../public/_nuxt/index.d0a62524.css"
  },
  "/_nuxt/intro.9ccedcb0.mp4": {
    "type": "video/mp4",
    "etag": "\"371b7e-U0G09FnGS9UyRPHCqAmnK7v6VnA\"",
    "mtime": "2023-09-20T01:55:03.484Z",
    "size": 3611518,
    "path": "../public/_nuxt/intro.9ccedcb0.mp4"
  },
  "/_nuxt/iport2.b0c57375.gif": {
    "type": "image/gif",
    "etag": "\"30a990-NsS/7VTkIOxNw0ufM4/Tgg0sffM\"",
    "mtime": "2023-09-20T01:55:03.481Z",
    "size": 3189136,
    "path": "../public/_nuxt/iport2.b0c57375.gif"
  },
  "/_nuxt/iport3.d5ff5cbd.gif": {
    "type": "image/gif",
    "etag": "\"3ea03f-AOujSXopm9Qg8j2bw8VJs5msnYk\"",
    "mtime": "2023-09-20T01:55:03.485Z",
    "size": 4104255,
    "path": "../public/_nuxt/iport3.d5ff5cbd.gif"
  },
  "/_nuxt/iport4.d0a68e8e.gif": {
    "type": "image/gif",
    "etag": "\"3a64ca-h3R5RoSiuwXlC8wS665NfpllxtM\"",
    "mtime": "2023-09-20T01:55:03.485Z",
    "size": 3826890,
    "path": "../public/_nuxt/iport4.d0a68e8e.gif"
  },
  "/_nuxt/iport5.98c6b345.gif": {
    "type": "image/gif",
    "etag": "\"c2d677-YlKAdGKUlWW5CMyHIyvFqZWqPds\"",
    "mtime": "2023-09-20T01:55:03.507Z",
    "size": 12768887,
    "path": "../public/_nuxt/iport5.98c6b345.gif"
  },
  "/_nuxt/ishare.9f386b7a.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"be9-j3eZ7O6P8h0d60ChqVIGRZvJBfk\"",
    "mtime": "2023-09-20T01:55:03.480Z",
    "size": 3049,
    "path": "../public/_nuxt/ishare.9f386b7a.css"
  },
  "/_nuxt/ishare.b69c3d88.js": {
    "type": "application/javascript",
    "etag": "\"24b0-aK7tcr0XuOWNsRqUMg0LfSxlJrc\"",
    "mtime": "2023-09-20T01:55:03.492Z",
    "size": 9392,
    "path": "../public/_nuxt/ishare.b69c3d88.js"
  },
  "/_nuxt/logo.24b58023.png": {
    "type": "image/png",
    "etag": "\"254e-A5svQTFkdqMjKDJyJqJ7Fju5D1w\"",
    "mtime": "2023-09-20T01:55:03.473Z",
    "size": 9550,
    "path": "../public/_nuxt/logo.24b58023.png"
  },
  "/_nuxt/logo_app.f7db2ddf.png": {
    "type": "image/png",
    "etag": "\"dadb-YL/QWSetbbTQbH4Y455xEY7mW+o\"",
    "mtime": "2023-09-20T01:55:03.472Z",
    "size": 56027,
    "path": "../public/_nuxt/logo_app.f7db2ddf.png"
  },
  "/_nuxt/logo_blockly.010a26d0.png": {
    "type": "image/png",
    "etag": "\"1c196-OUx43J93OfzzLZugsNmONZhir2Y\"",
    "mtime": "2023-09-20T01:55:03.473Z",
    "size": 115094,
    "path": "../public/_nuxt/logo_blockly.010a26d0.png"
  },
  "/_nuxt/logo_remote.8d6d1574.png": {
    "type": "image/png",
    "etag": "\"5380-nHhmc1zcYPPIhGRWAiY6zDGA2g8\"",
    "mtime": "2023-09-20T01:55:03.472Z",
    "size": 21376,
    "path": "../public/_nuxt/logo_remote.8d6d1574.png"
  },
  "/_nuxt/news.8ad1be54.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"585-OODerCKxbz+d8oLX858R5e4sDJ4\"",
    "mtime": "2023-09-20T01:55:03.480Z",
    "size": 1413,
    "path": "../public/_nuxt/news.8ad1be54.css"
  },
  "/_nuxt/news.bdc145e5.js": {
    "type": "application/javascript",
    "etag": "\"afe-4gRhO0cr/SmSAIBODGd2geaxGng\"",
    "mtime": "2023-09-20T01:55:03.488Z",
    "size": 2814,
    "path": "../public/_nuxt/news.bdc145e5.js"
  },
  "/_nuxt/privacy.3728d2fb.js": {
    "type": "application/javascript",
    "etag": "\"fdf-T3nlYFLzHt9OG0rKhchnrtlrf9g\"",
    "mtime": "2023-09-20T01:55:03.488Z",
    "size": 4063,
    "path": "../public/_nuxt/privacy.3728d2fb.js"
  },
  "/_nuxt/privacy.5186e969.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"97-aA27VmQsumK2lJ+byTxUew36yH8\"",
    "mtime": "2023-09-20T01:55:03.480Z",
    "size": 151,
    "path": "../public/_nuxt/privacy.5186e969.css"
  },
  "/_nuxt/staff.9624def9.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"7b3-wa0kTxVoFK39da/jLLgbSb2ADc0\"",
    "mtime": "2023-09-20T01:55:03.482Z",
    "size": 1971,
    "path": "../public/_nuxt/staff.9624def9.css"
  },
  "/_nuxt/staff.a730d065.js": {
    "type": "application/javascript",
    "etag": "\"10d4-gGk5Ns+87c1q1qK1Vf2Jspu05ng\"",
    "mtime": "2023-09-20T01:55:03.490Z",
    "size": 4308,
    "path": "../public/_nuxt/staff.a730d065.js"
  },
  "/_nuxt/TextBox.39ef399e.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"243-XCb+iBlZE7VhlppbQk6pPwEQ+w0\"",
    "mtime": "2023-09-20T01:55:03.479Z",
    "size": 579,
    "path": "../public/_nuxt/TextBox.39ef399e.css"
  },
  "/_nuxt/TextBox.f4967ec1.js": {
    "type": "application/javascript",
    "etag": "\"1e8-9F+zx72vuvQ4nvKyNhOZwxkCUK8\"",
    "mtime": "2023-09-20T01:55:03.488Z",
    "size": 488,
    "path": "../public/_nuxt/TextBox.f4967ec1.js"
  },
  "/_nuxt/timeline.1dea26a8.png": {
    "type": "image/png",
    "etag": "\"16070-5fPKH13vVOzoS3/CbnABMmH10+M\"",
    "mtime": "2023-09-20T01:55:03.472Z",
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
  "/image/iport/image1.png": {
    "type": "image/png",
    "etag": "\"46c98-Utqk5fF9EuKAJaLo9Y28Ikr4JJM\"",
    "mtime": "2023-08-29T10:51:27.133Z",
    "size": 289944,
    "path": "../public/image/iport/image1.png"
  },
  "/image/iport/image2.gif": {
    "type": "image/gif",
    "etag": "\"1e0e9-+eNsTMgpxZ58w2WmmzaZrF0q7uU\"",
    "mtime": "2023-08-29T10:51:27.773Z",
    "size": 123113,
    "path": "../public/image/iport/image2.gif"
  },
  "/image/iport/image22.gif": {
    "type": "image/gif",
    "etag": "\"88020b-TdRfWeph4c4JGtywlGFqtobH9nI\"",
    "mtime": "2023-08-29T11:10:43.110Z",
    "size": 8913419,
    "path": "../public/image/iport/image22.gif"
  },
  "/image/iport/image3.gif": {
    "type": "image/gif",
    "etag": "\"2551c1-Imo+ezYaw/6osHHu9B2nlDywU/Q\"",
    "mtime": "2023-08-29T10:51:27.726Z",
    "size": 2445761,
    "path": "../public/image/iport/image3.gif"
  },
  "/image/iport/image4.png": {
    "type": "image/png",
    "etag": "\"2b72-hE2SujkCwYKhyc8lghq1Jrh7qho\"",
    "mtime": "2023-08-29T10:51:27.658Z",
    "size": 11122,
    "path": "../public/image/iport/image4.png"
  },
  "/image/iport/image5.png": {
    "type": "image/png",
    "etag": "\"3b36-8FVJUU2TJZu8ZzB7Q1C3+0P3cUk\"",
    "mtime": "2023-08-29T10:51:27.449Z",
    "size": 15158,
    "path": "../public/image/iport/image5.png"
  },
  "/image/iport/image52.png": {
    "type": "image/png",
    "etag": "\"a0d0-CLEfe5bjtxzXUgBRCcquRvG8bEQ\"",
    "mtime": "2023-08-29T11:16:06.077Z",
    "size": 41168,
    "path": "../public/image/iport/image52.png"
  },
  "/image/iport/image6.gif": {
    "type": "image/gif",
    "etag": "\"a02ce-isPv/VgGeXtcm1+Ix0c67T0uSJs\"",
    "mtime": "2023-08-29T10:51:27.419Z",
    "size": 656078,
    "path": "../public/image/iport/image6.gif"
  },
  "/image/iport/image7.gif": {
    "type": "image/gif",
    "etag": "\"8f7c3b-JdzSrSRyYOtdvcRqpb8ditUENag\"",
    "mtime": "2023-08-29T10:51:27.610Z",
    "size": 9403451,
    "path": "../public/image/iport/image7.gif"
  },
  "/image/iport/image8.gif": {
    "type": "image/gif",
    "etag": "\"2d8fc4-u3ii5LDQW2ojjmW5zYeWEvaOLvk\"",
    "mtime": "2023-08-29T10:51:27.245Z",
    "size": 2985924,
    "path": "../public/image/iport/image8.gif"
  },
  "/image/iport/image9.gif": {
    "type": "image/gif",
    "etag": "\"45b345-tPdh6VRbAZjbDy3wvLmy9E+fYxw\"",
    "mtime": "2023-08-29T10:51:27.372Z",
    "size": 4567877,
    "path": "../public/image/iport/image9.gif"
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
  "/image/media/img2.jpg": {
    "type": "image/jpeg",
    "etag": "\"315ca0-J5hMmVGNVCcJVTaYaXiM/Qnx5Mo\"",
    "mtime": "2023-09-19T09:26:58.625Z",
    "size": 3234976,
    "path": "../public/image/media/img2.jpg"
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

function createSiteConfigStack() {
  const stack = [];
  function push(input) {
    if (!input || typeof input !== "object" || Object.keys(input).length === 0)
      return;
    if (!input._context) {
      let lastFunctionName = new Error("tmp").stack?.split("\n")[2].split(" ")[5];
      if (lastFunctionName?.includes("/"))
        lastFunctionName = "anonymous";
      input._context = lastFunctionName;
    }
    stack.push(input);
  }
  function get() {
    const siteConfig = {
      _context: {}
    };
    for (const o in stack) {
      for (const k in stack[o]) {
        const key = k;
        const val = stack[o][k];
        if (!k.endsWith("context") && typeof val !== "undefined") {
          siteConfig[k] = val;
          siteConfig._context[key] = stack[o]._context?.[key] || stack[o]._context || "anonymous";
        }
      }
    }
    return normalizeSiteConfig(siteConfig);
  }
  return {
    stack,
    push,
    get
  };
}

function normalizeSiteConfig(config) {
  if (typeof config.indexable !== "undefined")
    config.indexable = String(config.indexable) !== "false";
  if (typeof config.trailingSlash !== "undefined")
    config.trailingSlash = String(config.trailingSlash) !== "false";
  if (config.url && !hasProtocol(config.url, { acceptRelative: true, strict: false }))
    config.url = withHttps(config.url);
  return config;
}
function resolveSitePath(pathOrUrl, options) {
  let path = pathOrUrl;
  if (hasProtocol(pathOrUrl, { strict: false, acceptRelative: true })) {
    const parsed = parseURL(pathOrUrl);
    path = parsed.pathname;
  }
  const base = withLeadingSlash(options.base);
  if (base !== "/" && path.startsWith(base)) {
    path = path.slice(base.length);
  }
  const origin = options.absolute ? options.siteUrl : "";
  const baseWithOrigin = options.withBase ? withBase(base, origin || "/") : origin;
  const resolvedUrl = withBase(path, baseWithOrigin);
  return path === "/" && !options.withBase ? withTrailingSlash(resolvedUrl) : fixSlashes(options.trailingSlash, resolvedUrl);
}
function fixSlashes(trailingSlash, pathOrUrl) {
  const $url = parseURL(pathOrUrl);
  const isFileUrl = $url.pathname.includes(".");
  if (isFileUrl)
    return pathOrUrl;
  const fixedPath = trailingSlash ? withTrailingSlash($url.pathname) : withoutTrailingSlash($url.pathname);
  return `${$url.protocol ? `${$url.protocol}//` : ""}${$url.host || ""}${fixedPath}${$url.search || ""}${$url.hash || ""}`;
}

function useSiteConfig(e) {
  e.context.siteConfig = e.context.siteConfig || createSiteConfigStack();
  return e.context.siteConfig.get();
}

function useNitroOrigin(e) {
  const cert = process.env.NITRO_SSL_CERT;
  const key = process.env.NITRO_SSL_KEY;
  let host = process.env.NITRO_HOST || process.env.HOST || false;
  let port;
  let protocol = cert && key || !false ? "https" : "http";
  if (!e) ; else {
    host = getRequestHost(e, { xForwardedHost: true }) || host;
    protocol = getRequestProtocol(e, { xForwardedProto: true }) || protocol;
  }
  if (typeof host === "string" && host.includes(":")) {
    port = host.split(":").pop();
    host = host.split(":")[0];
  }
  port = port ? `:${port}` : "";
  return `${protocol}://${host}${port}/`;
}

function updateSiteConfig(e, input) {
  e.context.siteConfig = e.context.siteConfig || createSiteConfigStack();
  e.context.siteConfig.push(input);
}

function createSitePathResolver(e, options = {}) {
  const siteConfig = useSiteConfig(e);
  const nitroOrigin = useNitroOrigin(e);
  const nuxtBase = useRuntimeConfig().app.baseURL || "/";
  return (path) => {
    return resolveSitePath(path, {
      ...options,
      siteUrl: options.canonical !== false || false ? siteConfig.url : nitroOrigin,
      trailingSlash: siteConfig.trailingSlash,
      base: nuxtBase
    });
  };
}

const _zOc7zo = defineEventHandler((e) => {
  if (!e.context.siteConfig) {
    const appConfig = useAppConfig();
    const nitroOrigin = useNitroOrigin(e);
    e.context.siteConfigNitroOrigin = nitroOrigin;
    const { public: publicRuntimeConfig } = useRuntimeConfig();
    updateSiteConfig(e, {
      _context: "nitro:init",
      url: nitroOrigin
    });
    updateSiteConfig(e, publicRuntimeConfig.site);
    if (appConfig.site) {
      updateSiteConfig(e, {
        _context: "app:config",
        ...appConfig.site
      });
    }
    if (e.context._nitro.routeRules.site) {
      updateSiteConfig(e, {
        _context: "route-rules",
        ...e.context._nitro.routeRules.site
      });
    }
  }
});

const _HdyRPs = defineEventHandler(async (e) => {
  setHeader(e, "Content-Type", "application/xslt+xml");
  setHeader(e, "Cache-Control", "max-age=600, must-revalidate");
  const fixPath = createSitePathResolver(e, { absolute: false, withBase: true });
  const { version, moduleConfig } = useRuntimeConfig()["nuxt-simple-sitemap"];
  const { name: siteName, url: siteUrl } = useSiteConfig(e);
  const referrer = getHeader(e, "Referer") || "/";
  const isNotIndexButHasIndex = referrer !== fixPath("/sitemap.xml") && parseURL(referrer).pathname.endsWith("-sitemap.xml");
  const sitemapName = parseURL(referrer).pathname.split("/").pop()?.split("-sitemap")[0] || void 0;
  const canonicalQuery = getQuery(referrer).canonical;
  const isShowingCanonical = typeof canonicalQuery !== "undefined" && canonicalQuery !== "false";
  const conditionalTips = [
    'You are looking at a <a href="https://developer.mozilla.org/en-US/docs/Web/XSLT/Transforming_XML_with_XSLT/An_Overview" style="color: #398465" target="_blank">XML stylesheet</a>. Read the  <a href="nuxtseo.com/sitemap/guides/customising-ui" style="color: #398465" target="_blank">docs</a> to learn how to customize it.',
    `URLs missing? Check the <a href="${withQuery("/api/__sitemap__/debug", { sitemap: sitemapName })}" style="color: #398465" target="_blank">debug endpoint</a>`
  ];
  if (!isShowingCanonical) {
    const canonicalPreviewUrl = withQuery(referrer, { canonical: "" });
    conditionalTips.push(`Your canonical site URL is <strong>${siteUrl}</strong>.`);
    conditionalTips.push(`You can preview your canonical sitemap by visiting <a href="${canonicalPreviewUrl}" style="color: #398465; white-space: nowrap;">${fixPath(canonicalPreviewUrl)}?canonical</a>`);
  } else {
    conditionalTips.push(`You are viewing the canonical sitemap. You can switch to using the request origin: <a href="${fixPath(referrer)}" style="color: #398465; white-space: nowrap ">${fixPath(referrer)}</a>`);
  }
  let columns = [...moduleConfig.xslColumns];
  if (!columns.length) {
    columns = [
      { label: "URL", width: "50%" },
      { label: "Images", width: "25%", select: "count(image:image)" },
      { label: "Last Updated", width: "25%", select: "concat(substring(sitemap:lastmod,0,11),concat(' ', substring(sitemap:lastmod,12,5)),concat(' ', substring(sitemap:lastmod,20,6)))" }
    ];
  }
  return `<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
                xmlns:html="http://www.w3.org/TR/REC-html40"
                xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title>XML Sitemap</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <style type="text/css">
          body {
            font-family: Inter, Helvetica, Arial, sans-serif;
            font-size: 14px;
            color: #333;
          }

          table {
            border: none;
            border-collapse: collapse;
          }

          .bg-yellow-200 {
            background-color: #fef9c3;
          }

          .p-5 {
            padding: 1.25rem;
          }

          .rounded {
            border-radius: 4px;
            }

          .shadow {
            box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
          }

          #sitemap tr:nth-child(odd) td {
            background-color: #f8f8f8 !important;
          }

          #sitemap tbody tr:hover td {
            background-color: #fff;
          }

          #sitemap tbody tr:hover td, #sitemap tbody tr:hover td a {
            color: #000;
          }

          .expl a {
            color: #398465
            font-weight: 600;
          }

          .expl a:visited {
            color: #398465
          }

          a {
            color: #000;
            text-decoration: none;
          }

          a:visited {
            color: #777;
          }

          a:hover {
            text-decoration: underline;
          }

          td {
            font-size: 12px;
          }

          .text-2xl {
            font-size: 2rem;
            font-weight: 600;
            line-height: 1.25;
          }

          th {
            text-align: left;
            padding-right: 30px;
            font-size: 12px;
          }

          thead th {
            border-bottom: 1px solid #000;
          }
          .fixed { position: fixed; }
          .right-2 { right: 2rem; }
          .top-2 { top: 2rem; }
          .w-30 { width: 30rem; }
          p { margin: 0; }
          li { padding-bottom: 0.5rem; line-height: 1.5; }
          h1 { margin: 0; }
          .mb-5 { margin-bottom: 1.25rem; }
        </style>
      </head>
      <body>
        <div style="grid-template-columns: 1fr 1fr; display: grid; margin: 3rem;">
            <div>
             <div id="content">
          <h1 class="text-2xl mb-5">${siteName} XML Sitemap</h1>
          ${isNotIndexButHasIndex ? `<p style="font-size: 12px; margin-bottom: 1rem;"><a href="${fixPath("/sitemap_index.xml")}">${fixPath("/sitemap_index.xml")}</a></p>` : ""}
          <xsl:if test="count(sitemap:sitemapindex/sitemap:sitemap) &gt; 0">
            <p class="expl" style="margin-bottom: 1rem;">
              This XML Sitemap Index file contains
              <xsl:value-of select="count(sitemap:sitemapindex/sitemap:sitemap)"/> sitemaps.
            </p>
            <table id="sitemap" cellpadding="3">
              <thead>
                <tr>
                  <th width="75%">Sitemap</th>
                  <th width="25%">Last Modified</th>
                </tr>
              </thead>
              <tbody>
                <xsl:for-each select="sitemap:sitemapindex/sitemap:sitemap">
                  <xsl:variable name="sitemapURL">
                    <xsl:value-of select="sitemap:loc"/>
                  </xsl:variable>
                  <tr>
                    <td>
                      <a href="{$sitemapURL}">
                        <xsl:value-of select="sitemap:loc"/>
                      </a>
                    </td>
                    <td>
                      <xsl:value-of
                        select="concat(substring(sitemap:lastmod,0,11),concat(' ', substring(sitemap:lastmod,12,5)),concat(' ', substring(sitemap:lastmod,20,6)))"/>
                    </td>
                  </tr>
                </xsl:for-each>
              </tbody>
            </table>
          </xsl:if>
          <xsl:if test="count(sitemap:sitemapindex/sitemap:sitemap) &lt; 1">
            <p class="expl" style="margin-bottom: 1rem;">
              This XML Sitemap contains
              <xsl:value-of select="count(sitemap:urlset/sitemap:url)"/> URLs.
            </p>
            <table id="sitemap" cellpadding="3">
              <thead>
                <tr>
                  ${columns.map((c) => `<th width="${c.width}">${c.label}</th>`).join("\n")}
                </tr>
              </thead>
              <tbody>
                <xsl:variable name="lower" select="'abcdefghijklmnopqrstuvwxyz'"/>
                <xsl:variable name="upper" select="'ABCDEFGHIJKLMNOPQRSTUVWXYZ'"/>
                <xsl:for-each select="sitemap:urlset/sitemap:url">
                  <tr>
                    <td>
                      <xsl:variable name="itemURL">
                        <xsl:value-of select="sitemap:loc"/>
                      </xsl:variable>
                      <a href="{$itemURL}">
                        <xsl:value-of select="sitemap:loc"/>
                      </a>
                    </td>
                    ${columns.filter((c) => c.label !== "URL").map((c) => `<td>
<xsl:value-of select="${c.select}"/>
</td>`).join("\n")}
                  </tr>
                </xsl:for-each>
              </tbody>
            </table>
          </xsl:if>
        </div>
        </div>
                    ${""}
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
`;
});

async function resolveUrls(urls) {
  if (typeof urls === "function")
    urls = urls();
  urls = await urls;
  return urls;
}
async function resolveAsyncDataSources(input) {
  const { hasPrerenderedRoutesPayload, isNuxtContentDocumentDriven } = input.buildTimeMeta;
  const entries = [];
  entries.push({
    context: "pages",
    urls: input.pages
  });
  if (input.prerenderUrls) {
    entries.push({
      context: "prerender",
      urls: input.prerenderUrls
    });
  }
  if (input.extraRoutes.prerenderUrls.length) {
    entries.push({
      context: "nuxt-config.nitro-prerender",
      urls: input.extraRoutes.prerenderUrls
    });
  }
  if (input.extraRoutes.routeRules.length) {
    entries.push({
      context: "nuxt-config.route-rules",
      urls: input.extraRoutes.routeRules
    });
  }
  entries.push({
    context: "nuxt-config.module",
    path: "urls",
    urls: await resolveUrls(input.moduleConfig.urls)
  });
  function doFetch(url, timeout = 8e3) {
    const context = "api";
    const start = Date.now();
    const timeoutController = new AbortController();
    const abortRequestTimeout = setTimeout(() => timeoutController.abort(), timeout);
    let isHtmlResponse = false;
    return globalThis.$fetch(url, {
      responseType: "json",
      signal: timeoutController.signal,
      headers: {
        Accept: "application/json"
      },
      onResponse({ response }) {
        if (typeof response._data === "string" && response._data.startsWith("<!DOCTYPE html>"))
          isHtmlResponse = true;
      }
    }).then((urls) => {
      const timeTakenMs = Date.now() - start;
      if (isHtmlResponse) {
        entries.push({
          context,
          timeTakenMs,
          urls: [],
          path: url,
          error: "Received HTML response instead of JSON"
        });
      } else {
        entries.push({
          context,
          timeTakenMs,
          path: url,
          urls
        });
      }
    }).catch((err) => {
      entries.push({
        context,
        urls: [],
        path: url,
        error: err
      });
    }).finally(() => {
      abortRequestTimeout && clearTimeout(abortRequestTimeout);
    });
  }
  const waitables = [];
  async function loadSitemapSources(sitemap) {
    if (sitemap.urls) {
      entries.push({
        context: "nuxt-config.module",
        path: `sitemaps.${sitemap.sitemapName}.urls`,
        urls: await resolveUrls(sitemap.urls)
      });
    }
    if (sitemap.dynamicUrlsApiEndpoint)
      waitables.push(doFetch(sitemap.dynamicUrlsApiEndpoint));
  }
  if (input.buildTimeMeta.hasApiRoutesUrl)
    waitables.push(doFetch(input.moduleConfig.dynamicUrlsApiEndpoint));
  if (!input.sitemap && typeof input.moduleConfig.sitemaps === "object") {
    for (const entry of Object.entries(input.moduleConfig.sitemaps)) {
      const [sitemapName, sitemap] = entry;
      await loadSitemapSources({
        sitemapName,
        ...sitemap
      });
    }
  } else if (input.sitemap) {
    await loadSitemapSources(input.sitemap);
  }
  if (hasPrerenderedRoutesPayload)
    waitables.push(doFetch(input.canonicalUrlResolver("/__sitemap__/routes.json"), 1500));
  if (isNuxtContentDocumentDriven)
    waitables.push(doFetch("/api/__sitemap__/document-driven-urls", 4e3));
  await Promise.all(waitables);
  return entries;
}

function createFilter(options = {}) {
  const include = options.include || [];
  const exclude = options.exclude || [];
  if (include.length === 0 && exclude.length === 0)
    return () => true;
  return function(path) {
    for (const v of [{ rules: exclude, result: false }, { rules: include, result: true }]) {
      const regexRules = v.rules.filter((r) => r instanceof RegExp);
      if (regexRules.some((r) => r.test(path)))
        return v.result;
      const stringRules = v.rules.filter((r) => typeof r === "string");
      if (stringRules.length > 0) {
        const routes = {};
        for (const r of stringRules) {
          if (r === path)
            return v.result;
          routes[r] = true;
        }
        const routeRulesMatcher = toRouteMatcher(createRouter({ routes, strictTrailingSlash: false }));
        if (routeRulesMatcher.matchAll(path).length > 0)
          return Boolean(v.result);
      }
    }
    return include.length === 0;
  };
}

function mergeOnKey(arr, key) {
  const res = {};
  arr.forEach((item) => {
    const k = item[key];
    res[k] = defu$1(item, res[k] || {});
  });
  return Object.values(res);
}

async function normaliseSitemapData(data, options) {
  const {
    defaults,
    exclude,
    include,
    autoLastmod,
    autoI18n
  } = options.moduleConfig;
  const combinedInclude = [...options.sitemap?.include || [], ...include || []];
  const combinedExclude = [...options.sitemap?.exclude || [], ...exclude || []];
  const urlFilter = createFilter({ include: combinedInclude, exclude: combinedExclude });
  function resolve(s) {
    if (!s)
      return;
    s = typeof s === "string" ? s : s.toString();
    if (hasProtocol(s, { acceptRelative: true, strict: false }))
      return s;
    return options.canonicalUrlResolver(s);
  }
  const defaultEntryData = defu$1(options.sitemap?.defaults, defaults);
  if (autoLastmod)
    defaultEntryData.lastmod = defaultEntryData.lastmod || /* @__PURE__ */ new Date();
  let entries = data.map((e) => typeof e === "string" ? { loc: e } : e).map((e) => {
    e = { ...e };
    if (e.url) {
      e.loc = e.url;
      delete e.url;
    }
    e.loc = fixSlashes(false, e.loc);
    e = defu$1(e, defaultEntryData);
    return e;
  }).map((e) => {
    const routeRules = options.getRouteRulesForPath(e.loc);
    if (routeRules.index === false)
      return false;
    return defu$1(routeRules.sitemap || {}, e);
  });
  if (autoI18n?.locales) {
    const entriesByLoc = entries.reduce((acc, e) => {
      const match = e.loc.match(new RegExp(`^/(${autoI18n.locales.map((l) => l.code).join("|")})(.*)`));
      let loc = e.loc;
      let prefix = null;
      if (match) {
        loc = match[2] || "/";
        prefix = match[1];
      }
      acc[loc] = acc[loc] || [];
      acc[loc].push({ entry: e, prefix });
      return acc;
    }, {});
    Object.entries(entriesByLoc).forEach(([loc, childEntry]) => {
      autoI18n.locales.map((l) => l.code).forEach((prefix) => {
        if (!childEntry.map((e) => e.prefix).filter(Boolean).includes(prefix)) {
          if (autoI18n.strategy === "prefix")
            entries.push({ ...childEntry[0].entry, loc: joinURL(`/${prefix}`, loc) });
          else if (autoI18n.strategy === "prefix_except_default")
            entries.push({ ...childEntry[0].entry, loc: prefix === autoI18n.defaultLocale ? loc : joinURL(`/${prefix}`, loc) });
        }
      });
    });
    entries.map((e) => {
      let withoutPrefix = e.loc.replace(new RegExp(`^/(${autoI18n.locales.map((l) => l.code).join("|")})(.*)`), "$2");
      withoutPrefix = withoutPrefix || "/";
      let xDefault = e.loc;
      if (autoI18n.strategy === "prefix") {
        xDefault = joinURL("/", autoI18n.defaultLocale, withoutPrefix);
      } else if (autoI18n.strategy === "prefix_except_default") {
        xDefault = withoutPrefix;
      }
      e.alternatives = e.alternatives || [
        ...autoI18n.locales.map((locale) => {
          const isDefault = locale.code === autoI18n.defaultLocale;
          let href = "";
          if (autoI18n.strategy === "prefix") {
            href = joinURL(locale.code, withoutPrefix);
          } else if (autoI18n.strategy === "prefix_except_default") {
            if (isDefault) {
              href = withoutPrefix;
            } else {
              href = joinURL("/", locale.code, withoutPrefix);
            }
          }
          const hreflang = locale.iso || locale.code;
          return {
            hreflang,
            href
          };
        }),
        { hreflang: "x-default", href: xDefault }
      ];
      return e;
    });
    if (autoI18n.strategy === "prefix") {
      entries = entries.filter((e) => e.loc.match(new RegExp(`^/(${autoI18n.locales.map((l) => l.code).join("|")})(.*)`)));
    }
  }
  const filteredEntries = entries.filter((e) => e && urlFilter(e.loc));
  function normaliseEntry(e) {
    if (e.lastmod) {
      const date = normaliseDate(e.lastmod);
      if (date)
        e.lastmod = date;
      else
        delete e.lastmod;
    }
    if (!e.lastmod)
      delete e.lastmod;
    e.loc = resolve(e.loc);
    if (e.alternatives) {
      e.alternatives = mergeOnKey(e.alternatives.map((e2) => {
        const a = { ...e2 };
        a.href = resolve(typeof a.href === "string" ? a.href : a.href.href);
        return a;
      }), "hreflang");
    }
    if (e.images) {
      e.images = mergeOnKey(e.images.map((i) => {
        i = { ...i };
        i.loc = resolve(i.loc);
        return i;
      }), "loc");
    }
    if (e.videos) {
      e.videos = e.videos.map((v) => {
        v = { ...v };
        v.contentLoc = resolve(v.contentLoc);
        return v;
      });
    }
    return e;
  }
  function normaliseEntries(entries2) {
    return mergeOnKey(entries2.map(normaliseEntry), "loc").sort((a, b) => {
      if (a.loc > b.loc)
        return 1;
      if (a.loc < b.loc)
        return -1;
      return 0;
    }).sort((a, b) => {
      const aSegments = a.loc.split("/").length;
      const bSegments = b.loc.split("/").length;
      if (aSegments > bSegments)
        return 1;
      if (aSegments < bSegments)
        return -1;
      return 0;
    });
  }
  const ctx = { urls: normaliseEntries(filteredEntries), sitemapName: options.sitemap?.sitemapName || "sitemap" };
  if (options.callHook)
    await options.callHook(ctx);
  return normaliseEntries(ctx.urls);
}
function normaliseDate(date) {
  const d = typeof date === "string" ? new Date(date) : date;
  if (!(d instanceof Date))
    return false;
  const z = (n) => `0${n}`.slice(-2);
  return `${d.getUTCFullYear()}-${z(d.getUTCMonth() + 1)}-${z(d.getUTCDate())}T${z(d.getUTCHours())}:${z(d.getUTCMinutes())}:${z(d.getUTCSeconds())}+00:00`;
}

function wrapSitemapXml(input, { xsl, credits, version }) {
  input.unshift(`<?xml version="1.0" encoding="UTF-8"?>${xsl ? `<?xml-stylesheet type="text/xsl" href="${xsl}"?>` : ""}`);
  if (credits)
    input.push(`<!-- XML Sitemap generated by Nuxt Simple Sitemap V${version} -->`);
  return input.join("\n");
}
function escapeValueForXml(value) {
  if (value === true || value === false)
    return value ? "yes" : "no";
  return String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}

async function buildSitemap(options) {
  const sitemapsConfig = options.moduleConfig.sitemaps;
  const sources = await resolveAsyncDataSources(options);
  let entries = await normaliseSitemapData(sources.map((e) => e.urls).flat(), options);
  if (sitemapsConfig === true && options.moduleConfig.defaultSitemapsChunkSize)
    entries = entries.slice(Number(options.sitemap?.sitemapName) * options.moduleConfig.defaultSitemapsChunkSize, (Number(options.sitemap?.sitemapName) + 1) * options.moduleConfig.defaultSitemapsChunkSize);
  const resolveKey = (k) => {
    switch (k) {
      case "images":
        return "image";
      case "videos":
        return "video";
      default:
        return k;
    }
  };
  const handleArray = (key, arr) => {
    if (arr.length === 0)
      return false;
    key = resolveKey(key);
    if (key === "alternatives") {
      return arr.map((obj) => [
        `        <xhtml:link rel="alternate" ${Object.entries(obj).map(([sk, sv]) => `${sk}="${escapeValueForXml(sv)}"`).join(" ")} />`
      ].join("\n")).join("\n");
    }
    return arr.map((obj) => [
      `        <${key}:${key}>`,
      ...Object.entries(obj).map(([sk, sv]) => `            <${key}:${sk}>${escapeValueForXml(sv)}</${key}:${sk}>`),
      `        </${key}:${key}>`
    ].join("\n")).join("\n");
  };
  return wrapSitemapXml([
    '<urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd http://www.google.com/schemas/sitemap-image/1.1 http://www.google.com/schemas/sitemap-image/1.1/sitemap-image.xsd" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...entries?.map((e) => `    <url>
${Object.keys(e).map((k) => Array.isArray(e[k]) ? handleArray(k, e[k]) : `        <${k}>${escapeValueForXml(e[k])}</${k}>`).filter((l) => l !== false).join("\n")}
    </url>`) ?? [],
    "</urlset>"
  ], {
    xsl: options.moduleConfig.xsl ? options.relativeBaseUrlResolver(options.moduleConfig.xsl) : false,
    credits: options.moduleConfig.credits,
    version: options.buildTimeMeta.version
  });
}

async function setupCache(e, key) {
  const { moduleConfig, buildTimeMeta } = useRuntimeConfig()["nuxt-simple-sitemap"];
  const useCache = moduleConfig.runtimeCacheStorage && moduleConfig.cacheTtl && moduleConfig.cacheTtl > 0;
  const baseCacheKey = moduleConfig.runtimeCacheStorage === "default" ? `/cache/nuxt-simple-sitemap${buildTimeMeta.version}` : `/nuxt-simple-sitemap/${buildTimeMeta.version}`;
  const cache = prefixStorage(useStorage(), `${baseCacheKey}/sitemaps`);
  let xSitemapCacheHeader = "MISS";
  let xSitemapCacheExpires = 0;
  const purge = typeof getQuery$1(e).purge !== "undefined";
  let cachedSitemap = false;
  if (useCache && await cache.hasItem(key)) {
    const { value, expiresAt } = await cache.getItem(key);
    if (expiresAt > Date.now()) {
      if (purge) {
        xSitemapCacheHeader = "PURGE";
        await cache.removeItem(key);
      } else {
        xSitemapCacheHeader = "HIT";
        xSitemapCacheExpires = expiresAt;
        cachedSitemap = value;
      }
    } else {
      await cache.removeItem(key);
    }
  }
  setHeader(e, "x-sitemap-cache", xSitemapCacheHeader);
  setHeader(e, "x-sitemap-cache-expires", xSitemapCacheExpires.toString());
  return {
    cachedSitemap,
    cache: async (sitemap) => {
      if (useCache)
        await cache.setItem(key, { value: sitemap, expiresAt: Date.now() + (moduleConfig.cacheTtl || 0) });
    }
  };
}

const pages = [
  {
    "loc": "/company",
    "lastmod": "2023-09-20T01:51:02.255Z"
  },
  {
    "loc": "/company2",
    "lastmod": "2023-09-19T02:38:48.433Z"
  },
  {
    "loc": "/contact",
    "lastmod": "2023-09-20T01:53:55.399Z"
  },
  {
    "loc": "/contact2",
    "lastmod": "2023-09-19T06:56:50.241Z"
  },
  {
    "loc": "/cuhk-icar",
    "lastmod": "2023-09-19T10:57:39.550Z"
  },
  {
    "loc": "/cuhk-iport",
    "lastmod": "2023-09-20T01:54:29.797Z"
  },
  {
    "loc": "/",
    "lastmod": "2023-09-19T10:58:10.599Z"
  },
  {
    "loc": "/ishare",
    "lastmod": "2023-09-19T09:59:22.535Z"
  },
  {
    "loc": "/news",
    "lastmod": "2023-09-19T10:58:32.462Z"
  },
  {
    "loc": "/privacy",
    "lastmod": "2023-09-19T06:32:16.899Z"
  },
  {
    "loc": "/staff",
    "lastmod": "2023-09-19T08:58:33.106Z"
  }
];

const routeRules = [];
const prerenderUrls = [];
const extraRoutes = { routeRules, prerenderUrls };

const _TU69yw = defineEventHandler(async (e) => {
  const { moduleConfig, buildTimeMeta } = useRuntimeConfig()["nuxt-simple-sitemap"];
  if (moduleConfig.sitemaps) {
    return sendRedirect(e, withBase("/sitemap_index.xml", useRuntimeConfig().app.baseURL), 301);
  }
  const { cachedSitemap, cache } = await setupCache(e, "sitemap", getQuery$1(e).purge);
  let sitemap = cachedSitemap;
  if (!cachedSitemap) {
    const nitro = useNitroApp();
    const callHook = async (ctx2) => {
      await nitro.hooks.callHook("sitemap:resolved", ctx2);
    };
    const canonicalQuery = getQuery$1(e).canonical;
    const isShowingCanonical = typeof canonicalQuery !== "undefined" && canonicalQuery !== "false";
    sitemap = await buildSitemap({
      moduleConfig,
      extraRoutes,
      buildTimeMeta,
      canonicalUrlResolver: createSitePathResolver(e, { canonical: isShowingCanonical || !false, absolute: true, withBase: true }),
      relativeBaseUrlResolver: createSitePathResolver(e, { absolute: false, withBase: true }),
      getRouteRulesForPath,
      callHook,
      pages
    });
    const ctx = { sitemap, sitemapName: "sitemap" };
    await nitro.hooks.callHook("sitemap:output", ctx);
    sitemap = ctx.sitemap;
    await cache(sitemap);
  }
  setHeader(e, "Content-Type", "text/xml; charset=UTF-8");
  setHeader(e, "Cache-Control", "max-age=600, must-revalidate");
  return sitemap;
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
  { route: '', handler: _zOc7zo, lazy: false, middleware: true, method: undefined },
  { route: '/__sitemap__/style.xsl', handler: _HdyRPs, lazy: false, middleware: false, method: undefined },
  { route: '/sitemap.xml', handler: _TU69yw, lazy: false, middleware: false, method: undefined },
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
