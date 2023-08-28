import { b as buildAssetsURL } from '../../handlers/renderer.mjs';
import { T as Title, M as Meta } from './components-d2ce98ee.mjs';
import { useSSRContext, withCtx, createTextVNode, createVNode, mergeProps, defineComponent, ref, computed, h } from 'vue';
import { ssrRenderComponent, ssrRenderStyle, ssrRenderAttr, ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _export_sfc, u as useHead, b as useNuxtApp, d as useRuntimeConfig } from '../server.mjs';
import { defu } from 'defu';
import { encodeParam, hasProtocol, withLeadingSlash, joinURL, parseURL, encodePath } from 'ufo';
import 'vue-bundle-renderer/runtime';
import 'h3';
import 'devalue';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'ofetch';
import 'unenv/runtime/fetch/index';
import 'hookable';
import 'scule';
import 'klona';
import 'ohash';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'ipx';
import 'http-graceful-shutdown';
import 'unctx';
import 'vue-router';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';

const _imports_0$1 = "" + buildAssetsURL("iCarR.25d12606.png");
const _imports_1$1 = "" + buildAssetsURL("iCarL.d12c0858.png");
const _imports_2$1 = "" + buildAssetsURL("iCarF.0923d21e.png");
const _sfc_main$5 = {
  name: "VueCatalog",
  props: ["title", "list"],
  emits: ["click"],
  data() {
    return {
      pos: 0,
      xPos: 0,
      xOffset: 0,
      timeoutEvt: null,
      status: "stop",
      scrollEvt: null
    };
  },
  methods: {
    click(index) {
      this.$emit("click", index);
    },
    findRange(num, position) {
      let n = position.length;
      let id = 0;
      let dist = 0;
      if (num < position[0]) {
        id = 0;
      } else if (num >= position[n - 1]) {
        id = n - 1;
      } else {
        for (let i = 0; i < n - 1; i++) {
          if (position[i] <= num && num < position[i + 1]) {
            id = i;
          }
        }
      }
      if (id < n - 1) {
        dist = 1 - (position[id + 1] - num) / (position[id + 1] - position[id]);
        if (dist < 0) {
          dist = 0;
        }
      }
      return id + dist;
    },
    calWeightedSum(array, x) {
      if (x <= 0) {
        return 0;
      }
      let sum = 0;
      for (let i = 0; i < array.length; i++) {
        if (x >= i + 1) {
          sum += array[i];
        } else {
          sum += array[i] * (x - i);
          break;
        }
      }
      return sum;
    },
    calPosition() {
      const array = document.getElementsByClassName("text-content");
      const btnContainer = this.$refs.btnContainer;
      if (!btnContainer[0]) {
        return false;
      }
      this.xOffset = btnContainer[0].clientWidth / 2 - this.$refs.car.clientWidth / 2;
      let widthMap = [];
      Array.prototype.forEach.call(btnContainer, (element, index) => {
        widthMap[index] = element.clientWidth;
      });
      let posMap = [];
      Array.prototype.forEach.call(array, (element, index) => {
        posMap[index] = element.getBoundingClientRect().y + window.scrollY;
      });
      return { posMap, widthMap };
    },
    setPositionX() {
      let result = this.calPosition();
      if (!result) {
        return;
      }
      let lastKnownScrollPosition = window.scrollY + 200 + 100 + 30;
      window.requestAnimationFrame(() => {
        this.pos = this.findRange(lastKnownScrollPosition, result.posMap);
        this.xPos = this.calWeightedSum(result.widthMap, this.pos);
      });
    }
  },
  mounted() {
    this.setPositionX();
    this.scrollEvt = document.addEventListener("scroll", (event) => {
      this.setPositionX();
    });
  },
  unmounted() {
    document.removeEventListener("scroll", this.scrollEvt);
  },
  watch: {
    xPos(newValue, oldValue) {
      if (newValue !== oldValue) {
        if (newValue > oldValue) {
          this.status = "right";
        } else {
          this.status = "left";
        }
        clearTimeout(this.timeoutEvt);
        this.timeoutEvt = setTimeout(() => {
          this.status = "stop";
        }, 100);
      }
    }
  }
};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-catalog2" }, _attrs))} data-v-9ba9ee69><label data-v-9ba9ee69>${ssrInterpolate($props.title)}</label><div style="${ssrRenderStyle({ "display": "flex", "flex-direction": "column", "width": "100%", "position": "relative", "padding": "0 20px" })}" data-v-9ba9ee69><div style="${ssrRenderStyle({ "z-index": "1" })}" data-v-9ba9ee69>`);
  if ($data.status == "right") {
    _push(`<img${ssrRenderAttr("src", _imports_0$1)} style="${ssrRenderStyle([{ "position": "relative", "height": "50px", "top": "10px" }, { left: $data.xPos + $data.xOffset + "px" }])}" data-v-9ba9ee69>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.status == "left") {
    _push(`<img${ssrRenderAttr("src", _imports_1$1)} style="${ssrRenderStyle([{ "position": "relative", "height": "50px", "top": "10px" }, { left: $data.xPos + $data.xOffset + "px" }])}" data-v-9ba9ee69>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.status == "stop") {
    _push(`<img${ssrRenderAttr("src", _imports_2$1)} style="${ssrRenderStyle([{ "position": "relative", "height": "50px", "top": "10px" }, { left: $data.xPos + $data.xOffset + "px" }])}" data-v-9ba9ee69>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><div style="${ssrRenderStyle({ "display": "flex", "flex": "1", "flex-direction": "row", "min-height": "60px", "max-height": "60px", "width": "100%", "position": "relative", "align-items": "flex-end", "padding": "0" })}" data-v-9ba9ee69><span class="line" data-v-9ba9ee69></span><!--[-->`);
  ssrRenderList($props.list, (item, index) => {
    _push(`<div class="btnContainer" data-v-9ba9ee69><div style="${ssrRenderStyle({ "display": "flex", "justify-content": "center", "align-items": "center", "position": "relative", "width": "100%", "height": "30px" })}" data-v-9ba9ee69><span class="point" data-v-9ba9ee69></span></div><div class="${ssrRenderClass([{ "active": Math.floor($data.pos) == index }, "btn"])}" data-v-9ba9ee69>${ssrInterpolate(item)}</div></div>`);
  });
  _push(`<!--]--></div></div></div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PageCatalog2.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5], ["__scopeId", "data-v-9ba9ee69"]]);
const _sfc_main$4 = {
  name: "VueCatalog",
  props: ["title", "list"],
  emits: ["click"],
  data() {
    return {
      pos: 0,
      xPos: 0,
      xOffset: 0,
      timeoutEvt: null,
      status: "stop",
      scrollEvt: null
    };
  },
  methods: {
    click(index) {
      this.$emit("click", index);
    },
    findRange(num, position) {
      let n = position.length;
      let id = 0;
      let dist = 0;
      if (num < position[0]) {
        id = 0;
      } else if (num >= position[n - 1]) {
        id = n - 1;
      } else {
        for (let i = 0; i < n - 1; i++) {
          if (position[i] <= num && num < position[i + 1]) {
            id = i;
          }
        }
      }
      if (id < n - 1) {
        dist = 1 - (position[id + 1] - num) / (position[id + 1] - position[id]);
        if (dist < 0) {
          dist = 0;
        }
      }
      return id + dist;
    },
    calWeightedSum(array, x) {
      if (x <= 0) {
        return 0;
      }
      let sum = 0;
      for (let i = 0; i < array.length; i++) {
        if (x >= i + 1) {
          sum += array[i];
        } else {
          sum += array[i] * (x - i);
          break;
        }
      }
      return sum;
    },
    calPosition() {
      const array = document.getElementsByClassName("text-content");
      let posMap = [];
      Array.prototype.forEach.call(array, (element, index) => {
        posMap[index] = element.getBoundingClientRect().y + window.scrollY;
      });
      return { posMap };
    },
    setPositionY() {
      let result = this.calPosition();
      let lastKnownScrollPosition = window.scrollY + 200 + 100;
      window.requestAnimationFrame(() => {
        this.pos = this.findRange(lastKnownScrollPosition, result.posMap);
      });
    }
  },
  mounted() {
    this.setPositionY();
    this.scrollEvt = document.addEventListener("scroll", (event) => {
      this.setPositionY();
    });
  },
  unmounted() {
    document.removeEventListener("scroll", this.scrollEvt);
  },
  watch: {
    /*       xPos(newValue, oldValue) {
            if (newValue !== oldValue) {
              if(newValue > oldValue) {
                  this.status = 'right'
              } else {
                  this.status = 'left'
              }
              clearTimeout(this.timeoutEvt)
              this.timeoutEvt = setTimeout(() => {
                  this.status = 'stop'
              }, 100);
            }
          }, */
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "test" }, _attrs))} data-v-201ac6fd><span data-v-201ac6fd></span><!--[-->`);
  ssrRenderList($props.list, (item, index) => {
    _push(`<div class="${ssrRenderClass([{ active: Math.floor($data.pos) == index }, "btnContainer"])}" data-v-201ac6fd><div class="btn" data-v-201ac6fd><img${ssrRenderAttr("src", $props.list[index])} style="${ssrRenderStyle({ "height": "100%" })}" data-v-201ac6fd></div></div>`);
  });
  _push(`<!--]--></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PageCatalog3.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4], ["__scopeId", "data-v-201ac6fd"]]);
const _sfc_main$3 = {
  name: "TextTitle",
  props: ["image"],
  methods: {
    copy(content) {
      alert("Link copied");
      var textarea = document.createElement("textarea");
      textarea.value = content;
      textarea.display = "none";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "text-title" }, _attrs))} data-v-c283fc2d><img${ssrRenderAttr("src", $props.image)} data-v-c283fc2d>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TextTitle.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-c283fc2d"]]);
const _sfc_main$2 = {
  name: "TextBox",
  props: ["title", "image"],
  methods: {}
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "text-box" }, _attrs))} data-v-068f6592><div style="${ssrRenderStyle({ "display": "flex", "align-items": "center", "padding-bottom": "20px" })}" data-v-068f6592><img${ssrRenderAttr("src", $props.image)} data-v-068f6592><label class="title" data-v-068f6592>${ssrInterpolate($props.title)}</label></div>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TextBox.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-068f6592"]]);
async function imageMeta(_ctx, url) {
  const meta = await _imageMeta(url).catch((err) => {
    console.error("Failed to get image meta for " + url, err + "");
    return {
      width: 0,
      height: 0,
      ratio: 0
    };
  });
  return meta;
}
async function _imageMeta(url) {
  {
    const imageMeta2 = await import('image-meta').then((r) => r.imageMeta);
    const data = await fetch(url).then((res) => res.buffer());
    const metadata = imageMeta2(data);
    if (!metadata) {
      throw new Error(`No metadata could be extracted from the image \`${url}\`.`);
    }
    const { width, height } = metadata;
    const meta = {
      width,
      height,
      ratio: width && height ? width / height : void 0
    };
    return meta;
  }
}
function createMapper(map) {
  return (key) => {
    return key ? map[key] || key : map.missingValue;
  };
}
function createOperationsGenerator({ formatter, keyMap, joinWith = "/", valueMap } = {}) {
  if (!formatter) {
    formatter = (key, value) => `${key}=${value}`;
  }
  if (keyMap && typeof keyMap !== "function") {
    keyMap = createMapper(keyMap);
  }
  const map = valueMap || {};
  Object.keys(map).forEach((valueKey) => {
    if (typeof map[valueKey] !== "function") {
      map[valueKey] = createMapper(map[valueKey]);
    }
  });
  return (modifiers = {}) => {
    const operations = Object.entries(modifiers).filter(([_, value]) => typeof value !== "undefined").map(([key, value]) => {
      const mapper = map[key];
      if (typeof mapper === "function") {
        value = mapper(modifiers[key]);
      }
      key = typeof keyMap === "function" ? keyMap(key) : key;
      return formatter(key, value);
    });
    return operations.join(joinWith);
  };
}
function parseSize(input = "") {
  if (typeof input === "number") {
    return input;
  }
  if (typeof input === "string") {
    if (input.replace("px", "").match(/^\d+$/g)) {
      return parseInt(input, 10);
    }
  }
}
function createImage(globalOptions) {
  const ctx = {
    options: globalOptions
  };
  const getImage2 = (input, options = {}) => {
    const image = resolveImage(ctx, input, options);
    return image;
  };
  const $img = (input, modifiers = {}, options = {}) => {
    return getImage2(input, {
      ...options,
      modifiers: defu(modifiers, options.modifiers || {})
    }).url;
  };
  for (const presetName in globalOptions.presets) {
    $img[presetName] = (source, modifiers, options) => $img(source, modifiers, { ...globalOptions.presets[presetName], ...options });
  }
  $img.options = globalOptions;
  $img.getImage = getImage2;
  $img.getMeta = (input, options) => getMeta(ctx, input, options);
  $img.getSizes = (input, options) => getSizes(ctx, input, options);
  ctx.$img = $img;
  return $img;
}
async function getMeta(ctx, input, options) {
  const image = resolveImage(ctx, input, { ...options });
  if (typeof image.getMeta === "function") {
    return await image.getMeta();
  } else {
    return await imageMeta(ctx, image.url);
  }
}
function resolveImage(ctx, input, options) {
  var _a, _b;
  if (typeof input !== "string" || input === "") {
    throw new TypeError(`input must be a string (received ${typeof input}: ${JSON.stringify(input)})`);
  }
  if (input.startsWith("data:")) {
    return {
      url: input
    };
  }
  const { provider, defaults } = getProvider(ctx, options.provider || ctx.options.provider);
  const preset = getPreset(ctx, options.preset);
  input = hasProtocol(input) ? input : withLeadingSlash(input);
  if (!provider.supportsAlias) {
    for (const base in ctx.options.alias) {
      if (input.startsWith(base)) {
        input = joinURL(ctx.options.alias[base], input.substr(base.length));
      }
    }
  }
  if (provider.validateDomains && hasProtocol(input)) {
    const inputHost = parseURL(input).host;
    if (!ctx.options.domains.find((d) => d === inputHost)) {
      return {
        url: input
      };
    }
  }
  const _options = defu(options, preset, defaults);
  _options.modifiers = { ..._options.modifiers };
  const expectedFormat = _options.modifiers.format;
  if ((_a = _options.modifiers) == null ? void 0 : _a.width) {
    _options.modifiers.width = parseSize(_options.modifiers.width);
  }
  if ((_b = _options.modifiers) == null ? void 0 : _b.height) {
    _options.modifiers.height = parseSize(_options.modifiers.height);
  }
  const image = provider.getImage(input, _options, ctx);
  image.format = image.format || expectedFormat || "";
  return image;
}
function getProvider(ctx, name) {
  const provider = ctx.options.providers[name];
  if (!provider) {
    throw new Error("Unknown provider: " + name);
  }
  return provider;
}
function getPreset(ctx, name) {
  if (!name) {
    return {};
  }
  if (!ctx.options.presets[name]) {
    throw new Error("Unknown preset: " + name);
  }
  return ctx.options.presets[name];
}
function getSizes(ctx, input, opts) {
  var _a, _b;
  const width = parseSize((_a = opts.modifiers) == null ? void 0 : _a.width);
  const height = parseSize((_b = opts.modifiers) == null ? void 0 : _b.height);
  const hwRatio = width && height ? height / width : 0;
  const variants = [];
  const sizes = {};
  if (typeof opts.sizes === "string") {
    for (const entry of opts.sizes.split(/[\s,]+/).filter((e) => e)) {
      const s = entry.split(":");
      if (s.length !== 2) {
        continue;
      }
      sizes[s[0].trim()] = s[1].trim();
    }
  } else {
    Object.assign(sizes, opts.sizes);
  }
  for (const key in sizes) {
    const screenMaxWidth = ctx.options.screens && ctx.options.screens[key] || parseInt(key);
    let size = String(sizes[key]);
    const isFluid = size.endsWith("vw");
    if (!isFluid && /^\d+$/.test(size)) {
      size = size + "px";
    }
    if (!isFluid && !size.endsWith("px")) {
      continue;
    }
    let _cWidth = parseInt(size);
    if (!screenMaxWidth || !_cWidth) {
      continue;
    }
    if (isFluid) {
      _cWidth = Math.round(_cWidth / 100 * screenMaxWidth);
    }
    const _cHeight = hwRatio ? Math.round(_cWidth * hwRatio) : height;
    variants.push({
      width: _cWidth,
      size,
      screenMaxWidth,
      media: `(max-width: ${screenMaxWidth}px)`,
      src: ctx.$img(input, { ...opts.modifiers, width: _cWidth, height: _cHeight }, opts)
    });
  }
  variants.sort((v1, v2) => v1.screenMaxWidth - v2.screenMaxWidth);
  const defaultVar = variants[variants.length - 1];
  if (defaultVar) {
    defaultVar.media = "";
  }
  return {
    sizes: variants.map((v) => `${v.media ? v.media + " " : ""}${v.size}`).join(", "),
    srcset: variants.map((v) => `${v.src} ${v.width}w`).join(", "),
    src: defaultVar == null ? void 0 : defaultVar.src
  };
}
const operationsGenerator = createOperationsGenerator({
  keyMap: {
    format: "f",
    fit: "fit",
    width: "w",
    height: "h",
    resize: "s",
    quality: "q",
    background: "b"
  },
  joinWith: "&",
  formatter: (key, val) => encodeParam(key) + "_" + encodeParam(val)
});
const getImage = (src, { modifiers = {}, baseURL } = {}, ctx) => {
  if (modifiers.width && modifiers.height) {
    modifiers.resize = `${modifiers.width}x${modifiers.height}`;
    delete modifiers.width;
    delete modifiers.height;
  }
  const params = operationsGenerator(modifiers) || "_";
  if (!baseURL) {
    baseURL = joinURL(ctx.options.nuxt.baseURL, "/_ipx");
  }
  return {
    url: joinURL(baseURL, params, encodePath(src))
  };
};
const validateDomains = true;
const supportsAlias = true;
const ipxRuntime$j5aHsReDat = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  getImage,
  supportsAlias,
  validateDomains
});
const imageOptions = {
  "screens": {
    "xs": 320,
    "sm": 640,
    "md": 768,
    "lg": 1024,
    "xl": 1280,
    "xxl": 1536,
    "2xl": 1536
  },
  "presets": {},
  "provider": "ipx",
  "domains": [],
  "alias": {}
};
imageOptions.providers = {
  ["ipx"]: { provider: ipxRuntime$j5aHsReDat, defaults: void 0 }
};
const useImage = () => {
  const config = /* @__PURE__ */ useRuntimeConfig();
  const nuxtApp = useNuxtApp();
  return nuxtApp.$img || nuxtApp._img || (nuxtApp._img = createImage({
    ...imageOptions,
    nuxt: {
      baseURL: config.app.baseURL
    }
  }));
};
const baseImageProps = {
  // input source
  src: { type: String, required: true },
  // modifiers
  format: { type: String, default: void 0 },
  quality: { type: [Number, String], default: void 0 },
  background: { type: String, default: void 0 },
  fit: { type: String, default: void 0 },
  modifiers: { type: Object, default: void 0 },
  // options
  preset: { type: String, default: void 0 },
  provider: { type: String, default: void 0 },
  sizes: { type: [Object, String], default: void 0 },
  preload: { type: Boolean, default: void 0 },
  // <img> attributes
  width: { type: [String, Number], default: void 0 },
  height: { type: [String, Number], default: void 0 },
  alt: { type: String, default: void 0 },
  referrerpolicy: { type: String, default: void 0 },
  usemap: { type: String, default: void 0 },
  longdesc: { type: String, default: void 0 },
  ismap: { type: Boolean, default: void 0 },
  loading: { type: String, default: void 0 },
  crossorigin: {
    type: [Boolean, String],
    default: void 0,
    validator: (val) => ["anonymous", "use-credentials", "", true, false].includes(val)
  },
  decoding: {
    type: String,
    default: void 0,
    validator: (val) => ["async", "auto", "sync"].includes(val)
  }
};
const useBaseImage = (props) => {
  const options = computed(() => {
    return {
      provider: props.provider,
      preset: props.preset
    };
  });
  const attrs = computed(() => {
    return {
      width: parseSize(props.width),
      height: parseSize(props.height),
      alt: props.alt,
      referrerpolicy: props.referrerpolicy,
      usemap: props.usemap,
      longdesc: props.longdesc,
      ismap: props.ismap,
      crossorigin: props.crossorigin === true ? "anonymous" : props.crossorigin || void 0,
      loading: props.loading,
      decoding: props.decoding
    };
  });
  const modifiers = computed(() => {
    return {
      ...props.modifiers,
      width: parseSize(props.width),
      height: parseSize(props.height),
      format: props.format,
      quality: props.quality,
      background: props.background,
      fit: props.fit
    };
  });
  return {
    options,
    attrs,
    modifiers
  };
};
const imgProps = {
  ...baseImageProps,
  placeholder: { type: [Boolean, String, Number, Array], default: void 0 }
};
const __nuxt_component_0 = /* @__PURE__ */ defineComponent({
  name: "NuxtImg",
  props: imgProps,
  emits: ["load", "error"],
  setup: (props, ctx) => {
    const $img = useImage();
    const _base = useBaseImage(props);
    const placeholderLoaded = ref(false);
    const sizes = computed(() => $img.getSizes(props.src, {
      ..._base.options.value,
      sizes: props.sizes,
      modifiers: {
        ..._base.modifiers.value,
        width: parseSize(props.width),
        height: parseSize(props.height)
      }
    }));
    const attrs = computed(() => {
      const attrs2 = { ..._base.attrs.value, "data-nuxt-img": "" };
      if (props.sizes) {
        attrs2.sizes = sizes.value.sizes;
        attrs2.srcset = sizes.value.srcset;
      }
      return attrs2;
    });
    const placeholder = computed(() => {
      let placeholder2 = props.placeholder;
      if (placeholder2 === "") {
        placeholder2 = true;
      }
      if (!placeholder2 || placeholderLoaded.value) {
        return false;
      }
      if (typeof placeholder2 === "string") {
        return placeholder2;
      }
      const size = Array.isArray(placeholder2) ? placeholder2 : typeof placeholder2 === "number" ? [placeholder2, placeholder2] : [10, 10];
      return $img(props.src, {
        ..._base.modifiers.value,
        width: size[0],
        height: size[1],
        quality: size[2] || 50
      }, _base.options.value);
    });
    const mainSrc = computed(
      () => props.sizes ? sizes.value.src : $img(props.src, _base.modifiers.value, _base.options.value)
    );
    const src = computed(() => placeholder.value ? placeholder.value : mainSrc.value);
    if (props.preload) {
      const isResponsive = Object.values(sizes.value).every((v) => v);
      useHead({
        link: [{
          rel: "preload",
          as: "image",
          ...!isResponsive ? { href: src.value } : {
            href: sizes.value.src,
            imagesizes: sizes.value.sizes,
            imagesrcset: sizes.value.srcset
          }
        }]
      });
    }
    const imgEl = ref();
    const nuxtApp = useNuxtApp();
    nuxtApp.isHydrating;
    return () => h("img", {
      ref: imgEl,
      key: src.value,
      src: src.value,
      ...{ onerror: "this.setAttribute('data-error', 1)" },
      ...attrs.value,
      ...ctx.attrs
    });
  }
});
const _sfc_main$1 = {
  name: "DownloadTable",
  props: ["source"],
  methods: {
    copy(content) {
      alert("Link copied");
      var textarea = document.createElement("textarea");
      textarea.value = content;
      textarea.display = "none";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_img = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "download-table" }, _attrs))} data-v-3ba79058><div class="download-table-row" data-v-3ba79058><div data-v-3ba79058>\u540D\u7A31</div><div data-v-3ba79058>\u985E\u578B</div><div data-v-3ba79058>\u5927\u5C0F</div><div style="${ssrRenderStyle({ "justify-content": "center" })}" data-v-3ba79058>\u4E0B\u8F09\u9EDE</div></div><!--[-->`);
  ssrRenderList($props.source, (item) => {
    _push(`<div class="download-table-row" data-v-3ba79058><div data-v-3ba79058>${ssrInterpolate(item.name)}</div><div data-v-3ba79058>${ssrInterpolate(item.type)}</div><div data-v-3ba79058>${ssrInterpolate(item.size)}</div><div data-v-3ba79058>`);
    if (item.action == "download") {
      _push(`<a${ssrRenderAttr("href", item.url)} style="${ssrRenderStyle({ "height": "80%" })}" data-v-3ba79058>`);
      _push(ssrRenderComponent(_component_nuxt_img, {
        src: "icon_download.png",
        style: { "height": "80%" }
      }, null, _parent));
      _push(`</a>`);
    } else {
      _push(`<!---->`);
    }
    if (item.action == "clipboard") {
      _push(`<a style="${ssrRenderStyle({ "height": "80%", "cursor": "pointer" })}" data-v-3ba79058>`);
      _push(ssrRenderComponent(_component_nuxt_img, {
        src: "icon_copy.png",
        style: { "height": "80%" }
      }, null, _parent));
      _push(`</a>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div></div>`);
  });
  _push(`<!--]--></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DownloadTable.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-3ba79058"]]);
const _imports_0 = "" + buildAssetsURL("logo_blockly.010a26d0.png");
const _imports_1 = "" + buildAssetsURL("logo_app.f7db2ddf.png");
const _imports_2 = "" + buildAssetsURL("logo_remote.8d6d1574.png");
const _imports_3 = "" + buildAssetsURL("gif_moral2.520ac47b.gif");
const _imports_4 = "" + buildAssetsURL("gif_face2.b084def7.gif");
const _imports_5 = "" + buildAssetsURL("gif_line2.81f158a0.gif");
const _sfc_main = {
  name: "CUHK-iCar",
  data() {
    return {
      download: [
        {
          action: "download",
          name: "CUHK iCar \u6559\u6750 (\u4E2D\u6587\u7248)",
          size: "285 MB",
          type: "zip",
          url: "https://download.eduairhk.com/iCar_ZH.zip"
        },
        {
          action: "download",
          name: "CUHK iCar Teaching Materials (English Version)",
          size: "261 MB",
          type: "zip",
          url: "https://download.eduairhk.com/iCar_EN.zip"
        },
        {
          action: "download",
          name: "CUHK iCar micro:bit\u7A0B\u5F0F",
          size: "3 MB",
          type: "zip",
          url: "https://download.eduairhk.com/iCar_hex.zip"
        },
        {
          action: "clipboard",
          name: "MakeCode CUHK iCar\u64F4\u5C55\u5EAB\u7DB2\u5740",
          size: "-",
          type: "-",
          url: "https://github.com/hitkuangye/CUHK_JC_iCar_V2"
        }
      ]
    };
  },
  methods: {
    scroll(index) {
      this.$nextTick(function() {
        window.setTimeout(() => {
          if (index === 0) {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          } else {
            const target = this.$refs.content.getElementsByClassName("text-title")[index];
            target.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 1);
      });
    }
  },
  watch: {
    "$route.hash": {
      immediate: true,
      handler(newParams, oldParams) {
        if (newParams) {
          this.scroll(newParams.replace("#", ""));
        }
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Title = Title;
  const _component_Meta = Meta;
  const _component_PageCatalog2 = __nuxt_component_2;
  const _component_PageCatalog3 = __nuxt_component_3;
  const _component_TextTitle = __nuxt_component_4;
  const _component_TextBox = __nuxt_component_5;
  const _component_DownloadTable = __nuxt_component_6;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Title, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`CUHK iCar`);
      } else {
        return [
          createTextVNode("CUHK iCar")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Meta, {
    name: "description",
    content: "CUHK iCar\u662F\u5C08\u7232\u521D\u4E2D\u5B78\u751F\u800C\u8A2D\u7684AI\u6559\u5B78\u5957\u4EF6\uFF0C\u8B93\u5B78\u751F\u8F15\u9B06\u900F\u904E\u7A4D\u6728\u7DE8\u7A0B\u638C\u63E1AI\u3002"
  }, null, _parent));
  _push(`<div class="cuhkicar-wrapper" data-v-2b941705>`);
  _push(ssrRenderComponent(_component_PageCatalog2, {
    onClick: $options.scroll,
    title: "CUHK iCar",
    list: ["iCar\u662F\u751A\u9EBC\uFF1F", "\u5982\u4F55\u4F7F\u7528iCar\uFF1F", "\u9053\u5FB7\u56F0\u5883\u5BE6\u9A57", "\u4EBA\u9762\u8B58\u5225\u8FFD\u8E64\u5BE6\u9A57", "\u624B\u756B\u7DDA\u5FAA\u8DE1\u5BE6\u9A57", "iCar\u8CC7\u6E90\u7E3D\u532F"]
  }, null, _parent));
  _push(ssrRenderComponent(_component_PageCatalog3, {
    onClick: $options.scroll,
    title: "CUHK iCar",
    list: [
      "image/materials/logo_icar3.png",
      "image/materials/logo_question2.png",
      "image/materials/logo_moraldilemma.png",
      "image/materials/logo_facereg.png",
      "image/materials/logo_handdraw.png",
      "image/materials/logo_download.png"
    ]
  }, null, _parent));
  _push(`<div class="cuhkicar-container" data-v-2b941705><div class="page-content" data-v-2b941705>`);
  _push(ssrRenderComponent(_component_TextTitle, { image: "image/materials/logo_icar3.png" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`iCar\u662F\u751A\u9EBC\uFF1F`);
      } else {
        return [
          createTextVNode("iCar\u662F\u751A\u9EBC\uFF1F")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="text-content" data-v-2b941705> CUHK iCar\u662F\u7531\u9999\u6E2F\u4E2D\u6587\u5927\u5B78\u79D1\u7814\u5718\u968A\u958B\u767C\uFF0C\u5C08\u7232\u521D\u4E2D\u5B78\u751F\u800C\u8A2D\u7684AI\u6559\u5B78\u5957\u4EF6\uFF0C<br data-v-2b941705> \u53EF\u9032\u884C\u591A\u500B\u6709\u8DA3\u7684\u6559\u5B78\u5BE6\u9A57\uFF0C\u8B93\u5B78\u751F\u8F15\u9B06\u900F\u904E\u7A4D\u6728\u7DE8\u7A0B\u638C\u63E1AI\u3002<br data-v-2b941705> \u5168\u6E2F\u6709\u8D85\u904E5\u6210\u4E2D\u5B78\u6B63\u4F7F\u7528CUHK iCar\u9032\u884CAI\u6559\u5B78\u6D3B\u52D5\u3002 </div>`);
  _push(ssrRenderComponent(_component_TextTitle, { image: "image/materials/logo_question2.png" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u5982\u4F55\u4F7F\u7528CUHK iCar\uFF1F`);
      } else {
        return [
          createTextVNode("\u5982\u4F55\u4F7F\u7528CUHK iCar\uFF1F")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="text-content" data-v-2b941705><div style="${ssrRenderStyle({ "display": "flex", "flex-direction": "row", "padding": "0", "justify-content": "center", "padding-top": "0", "flex-wrap": "wrap" })}" data-v-2b941705><div style="${ssrRenderStyle({ "display": "flex", "justify-content": "center", "flex-direction": "column", "align-items": "center", "margin-left": "15px", "margin-right": "15px", "margin-top": "25px" })}" data-v-2b941705> MakeCode\u7A4D\u6728\u7DE8\u7A0B <div class="imageContainer" data-v-2b941705><img${ssrRenderAttr("src", _imports_0)} style="${ssrRenderStyle({ "height": "90%" })}" data-v-2b941705></div></div><div style="${ssrRenderStyle({ "display": "flex", "justify-content": "center", "flex-direction": "column", "align-items": "center", "margin-left": "15px", "margin-right": "15px", "margin-top": "25px" })}" data-v-2b941705> \u624B\u6A5F\u85CD\u82BD\u63A7\u5236 <div class="imageContainer" data-v-2b941705><img${ssrRenderAttr("src", _imports_1)} style="${ssrRenderStyle({ "height": "90%" })}" data-v-2b941705></div></div><div style="${ssrRenderStyle({ "display": "flex", "justify-content": "center", "flex-direction": "column", "align-items": "center", "margin-left": "15px", "margin-right": "15px", "margin-top": "25px" })}" data-v-2b941705> \u7D05\u5916\u7DDA\u9059\u63A7\u5668 <div class="imageContainer" data-v-2b941705><img${ssrRenderAttr("src", _imports_2)} style="${ssrRenderStyle({ "height": "70%" })}" data-v-2b941705></div></div></div></div>`);
  _push(ssrRenderComponent(_component_TextTitle, { image: "image/materials/logo_moraldilemma.png" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u9053\u5FB7\u56F0\u5883\u5BE6\u9A57`);
      } else {
        return [
          createTextVNode("\u9053\u5FB7\u56F0\u5883\u5BE6\u9A57")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="text-content" data-v-2b941705><img${ssrRenderAttr("src", _imports_3)} style="${ssrRenderStyle({ "width": "50%", "min-width": "250px" })}" data-v-2b941705><br data-v-2b941705> \u7576\u81EA\u52D5\u99D5\u99DB\u8ECA\u5239\u8ECA\u529F\u80FD\u5931\u9748\uFF0C\u53EA\u80FD\u5DE6\u8F49\u6216\u53F3\u8F49\uFF0C<br data-v-2b941705> \u7136\u800C\uFF0C\u4E0D\u8AD6\u9078\u64C7\u54EA\u689D\u8DEF\u7DDA\uFF0C\u8ECA\u8F1B\u90FD\u5C07\u78B0\u4E0A\u5176\u4ED6\u8DEF\u4EBA\uFF01<br data-v-2b941705> \u773C\u524D\u4E00\u908A\u662F\u5C0F\u5B69\uFF0C\u53E6\u4E00\u908A\u5247\u662F\u8001\u4EBA\uFF0C\u81EA\u52D5\u8ECA\u8A72\u600E\u9EBD\u8FA6\uFF1F<br data-v-2b941705> \u4EBA\u985E\u548CAI\u5728\u540C\u985E\u4E8B\u4EF6\u4E2D\u626E\u6F14\u751A\u9EBD\u89D2\u8272\uFF1F\u52D5\u624B\u7528CUHK iCar\u505A\u5BE6\u9A57\uFF0C\u4E00\u63A2\u7A76\u7ADF\u5427\uFF01<br data-v-2b941705><br data-v-2b941705>`);
  _push(ssrRenderComponent(_component_TextBox, {
    title: "\u8A0E\u8AD6\u554F\u984C\u8209\u9685",
    image: "image/materials/logo_think2.png"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` CUHK iCar\u7528\u4E86\u54EA\u4E00\u7A2E\u6A5F\u5668\u5B78\u7FD2\u6A21\u5F0F\uFF1F<br data-v-2b941705${_scopeId}> \u6536\u96C6\u6578\u64DA\u6642\uFF0C\u6211\u5011\u8981\u6CE8\u610F\u751A\u9EBD\uFF1F\u6CE8\u610F\u9019\u4E9B\u4E8B\u9805\u7684\u76EE\u7684\u662F\u751A\u9EBD\uFF1F<br data-v-2b941705${_scopeId}> \u9664\u4E86\u907F\u958B\u5C0F\u5B69\u548C\u907F\u958B\u8001\u4EBA\uFF0CCUHK iCar\u9084\u6709\u7B2C\u4E09\u500B\u9078\u64C7\u55CE\uFF1F<br data-v-2b941705${_scopeId}>`);
      } else {
        return [
          createTextVNode(" CUHK iCar\u7528\u4E86\u54EA\u4E00\u7A2E\u6A5F\u5668\u5B78\u7FD2\u6A21\u5F0F\uFF1F"),
          createVNode("br"),
          createTextVNode(" \u6536\u96C6\u6578\u64DA\u6642\uFF0C\u6211\u5011\u8981\u6CE8\u610F\u751A\u9EBD\uFF1F\u6CE8\u610F\u9019\u4E9B\u4E8B\u9805\u7684\u76EE\u7684\u662F\u751A\u9EBD\uFF1F"),
          createVNode("br"),
          createTextVNode(" \u9664\u4E86\u907F\u958B\u5C0F\u5B69\u548C\u907F\u958B\u8001\u4EBA\uFF0CCUHK iCar\u9084\u6709\u7B2C\u4E09\u500B\u9078\u64C7\u55CE\uFF1F"),
          createVNode("br")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
  _push(ssrRenderComponent(_component_TextTitle, { image: "image/materials/logo_facereg.png" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u4EBA\u9762\u8B58\u5225\u8FFD\u8E64\u5BE6\u9A57`);
      } else {
        return [
          createTextVNode("\u4EBA\u9762\u8B58\u5225\u8FFD\u8E64\u5BE6\u9A57")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="text-content" data-v-2b941705><img${ssrRenderAttr("src", _imports_4)} style="${ssrRenderStyle({ "width": "50%", "min-width": "250px" })}" data-v-2b941705><br data-v-2b941705> \u7232\u751A\u9EBD\u81EA\u52D5\u99D5\u99DB\u8ECA\u53EF\u4EE5\u8FA8\u8B58\u4EBA\u81C9\uFF0C\u4E26\u8DDF\u96A8\u6307\u5B9A\u4EBA\u81C9\u884C\u99DB\uFF1F<br data-v-2b941705> \u81EA\u52D5\u99D5\u99DB\u8ECA\u53C8\u662F\u5982\u4F55\u5B78\u6703\u9019\u9805\u6280\u80FD\uFF1F\u52D5\u624B\u7528CUHK iCar\u505A\u5BE6\u9A57\uFF0C\u4E00\u63A2\u7A76\u7ADF\u5427\uFF01<br data-v-2b941705><br data-v-2b941705>`);
  _push(ssrRenderComponent(_component_TextBox, {
    title: "\u8A0E\u8AD6\u554F\u984C\u8209\u9685",
    image: "image/materials/logo_think2.png"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` CUHK iCar\u5982\u4F55\u5B78\u6703\u8FA8\u8B58\u6307\u5B9A\u4EBA\u81C9\uFF1F<br data-v-2b941705${_scopeId}> \u7528\u6307\u5B9A\u4EBA\u81C9\u7684\u5176\u4ED6\u89D2\u5EA6\u6216\u7167\u7247\uFF0CCUHK iCar\u7684\u8868\u73FE\u6703\u53D7\u5F71\u97FF\u55CE\uFF1F\u7232\u751A\u9EBD\uFF1F<br data-v-2b941705${_scopeId}> \u5728\u771F\u5BE6\u60C5\u6CC1\u4E2D\u61C9\u7528\u6B64\u6280\u8853\uFF0C\u6703\u6709\u751A\u9EBD\u597D\u8655\u548C\u9650\u5236\uFF1F<br data-v-2b941705${_scopeId}>`);
      } else {
        return [
          createTextVNode(" CUHK iCar\u5982\u4F55\u5B78\u6703\u8FA8\u8B58\u6307\u5B9A\u4EBA\u81C9\uFF1F"),
          createVNode("br"),
          createTextVNode(" \u7528\u6307\u5B9A\u4EBA\u81C9\u7684\u5176\u4ED6\u89D2\u5EA6\u6216\u7167\u7247\uFF0CCUHK iCar\u7684\u8868\u73FE\u6703\u53D7\u5F71\u97FF\u55CE\uFF1F\u7232\u751A\u9EBD\uFF1F"),
          createVNode("br"),
          createTextVNode(" \u5728\u771F\u5BE6\u60C5\u6CC1\u4E2D\u61C9\u7528\u6B64\u6280\u8853\uFF0C\u6703\u6709\u751A\u9EBD\u597D\u8655\u548C\u9650\u5236\uFF1F"),
          createVNode("br")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
  _push(ssrRenderComponent(_component_TextTitle, { image: "image/materials/logo_handdraw.png" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u624B\u756B\u7DDA\u5FAA\u8DE1\u5BE6\u9A57`);
      } else {
        return [
          createTextVNode("\u624B\u756B\u7DDA\u5FAA\u8DE1\u5BE6\u9A57")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="text-content" data-v-2b941705><img${ssrRenderAttr("src", _imports_5)} style="${ssrRenderStyle({ "width": "50%", "min-width": "250px" })}" data-v-2b941705><br data-v-2b941705> \u81EA\u52D5\u99D5\u99DB\u8ECA\u80FD\u6839\u64DA\u5404\u8272\u865B\u7DDA\u3001\u5BE6\u7DDA\u79FB\u52D5\uFF0C\u5F9E\u800C\u884C\u8D70\u6B63\u78BA\u8DEF\u7DDA\u3002<br data-v-2b941705> \u9019\u662F\u600E\u9EBD\u505A\u5230\u7684\u5462\uFF1F\u52D5\u624B\u7528CUHK iCar\u505A\u5BE6\u9A57\uFF0C\u4E00\u63A2\u7A76\u7ADF\u5427\uFF01<br data-v-2b941705><br data-v-2b941705>`);
  _push(ssrRenderComponent(_component_TextBox, {
    title: "\u8A0E\u8AD6\u554F\u984C\u8209\u9685",
    image: "image/materials/logo_think2.png"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` CUHK iCar\u8DDF\u8457\u624B\u756B\u7DDA\u548C\u5217\u5370\u51FA\u4F86\u7684\u7DDA\u689D\u884C\u99DB\u6703\u6709\u5DEE\u7570\u55CE\uFF1F<br data-v-2b941705${_scopeId}> \u7DDA\u689D\u7684\u7C97\u5E7C\u3001\u5927\u5C0F\u3001\u5F62\u72C0\u7B49\u5C0DCUHK iCar\u884C\u99DB\u6709\u5F71\u97FF\u55CE\uFF1F<br data-v-2b941705${_scopeId}> CUHK iCar\u7684\u9019\u9805\u6280\u8853\u5728\u73FE\u5BE6\u751F\u6D3B\u4E2D\u6709\u4F55\u4F5C\u7528\uFF1F\u53EF\u61C9\u7528\u5728\u54EA\u4E9B\u5730\u65B9\uFF1F<br data-v-2b941705${_scopeId}>`);
      } else {
        return [
          createTextVNode(" CUHK iCar\u8DDF\u8457\u624B\u756B\u7DDA\u548C\u5217\u5370\u51FA\u4F86\u7684\u7DDA\u689D\u884C\u99DB\u6703\u6709\u5DEE\u7570\u55CE\uFF1F"),
          createVNode("br"),
          createTextVNode(" \u7DDA\u689D\u7684\u7C97\u5E7C\u3001\u5927\u5C0F\u3001\u5F62\u72C0\u7B49\u5C0DCUHK iCar\u884C\u99DB\u6709\u5F71\u97FF\u55CE\uFF1F"),
          createVNode("br"),
          createTextVNode(" CUHK iCar\u7684\u9019\u9805\u6280\u8853\u5728\u73FE\u5BE6\u751F\u6D3B\u4E2D\u6709\u4F55\u4F5C\u7528\uFF1F\u53EF\u61C9\u7528\u5728\u54EA\u4E9B\u5730\u65B9\uFF1F"),
          createVNode("br")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
  _push(ssrRenderComponent(_component_TextTitle, { image: "image/materials/logo_download.png" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`CUHK iCar\u8CC7\u6E90\u7E3D\u532F`);
      } else {
        return [
          createTextVNode("CUHK iCar\u8CC7\u6E90\u7E3D\u532F")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="text-content" style="${ssrRenderStyle({ "display": "flex", "gap": "50px" })}" data-v-2b941705>`);
  _push(ssrRenderComponent(_component_DownloadTable, { source: $data.download }, null, _parent));
  _push(`</div></div></div></div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/cuhk-icar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const cuhkIcar = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-2b941705"]]);

export { cuhkIcar as default };
//# sourceMappingURL=cuhk-icar-3c38d5b1.mjs.map
