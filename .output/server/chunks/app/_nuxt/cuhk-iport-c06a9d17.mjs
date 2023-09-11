import { T as Title, M as Meta } from './components-d2ce98ee.mjs';
import { useSSRContext, withCtx, createTextVNode, defineComponent, ref, createElementBlock, mergeProps } from 'vue';
import { ssrRenderComponent, ssrRenderStyle, ssrRenderAttrs, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import { _ as __nuxt_component_4 } from './nuxt-img-0e8c7b1b.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'vue-router';
import 'h3';
import 'ufo';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'defu';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'unenv/runtime/fetch/index';
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

const _sfc_main$3 = {
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
  watch: {}
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-9053ab0d><div style="${ssrRenderStyle({ "display": "flex", "gap": "10px", "width": "1024px" })}" data-v-9053ab0d><span class="${ssrRenderClass({ active: Math.floor($data.pos) == 0, inactive: Math.floor($data.pos) != 0 })}" data-v-9053ab0d>CUHK iPort</span><span class="${ssrRenderClass({ active: Math.floor($data.pos) == 1, inactive: Math.floor($data.pos) != 1 })}" data-v-9053ab0d>\u529F\u80FD\u4ECB\u7D39</span><span class="${ssrRenderClass({ active: Math.floor($data.pos) == 2, inactive: Math.floor($data.pos) != 2 })}" data-v-9053ab0d>\u4F7F\u7528\u8AAA\u660E</span><span class="${ssrRenderClass({ active: Math.floor($data.pos) == 3, inactive: Math.floor($data.pos) != 3 })}" data-v-9053ab0d>\u5BE6\u9A57\u7BC4\u4F8B</span><span class="${ssrRenderClass({ active: Math.floor($data.pos) == 4, inactive: Math.floor($data.pos) != 4 })}" data-v-9053ab0d>\u7DE8\u7A0B\u5E73\u53F0</span><span class="${ssrRenderClass({ active: Math.floor($data.pos) == 5, inactive: Math.floor($data.pos) != 5 })}" data-v-9053ab0d>\u8CC7\u6E90\u7E3D\u532F</span></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PageCatalog4.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-9053ab0d"]]);
const _sfc_main$2 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_nuxt_img = __nuxt_component_4;
  _push(`<!--[--><div class="mobile container" data-v-d4b8a677>`);
  _push(ssrRenderComponent(_component_nuxt_img, {
    src: "iport2.svg",
    width: 330,
    preload: ""
  }, null, _parent));
  _push(`<div style="${ssrRenderStyle({ "position": "absolute", "opacity": "0.8", "width": "158px", "height": "122px", "top": "23px" })}" class="anime" data-v-d4b8a677><div class="light" data-v-d4b8a677></div><div class="screen" data-v-d4b8a677>`);
  _push(ssrRenderComponent(_component_nuxt_img, {
    class: "image",
    src: "logo.png"
  }, null, _parent));
  _push(`</div></div></div><div class="pc container" data-v-d4b8a677>`);
  _push(ssrRenderComponent(_component_nuxt_img, {
    src: "iport2.svg",
    width: 700,
    preload: ""
  }, null, _parent));
  _push(`<div style="${ssrRenderStyle({ "position": "absolute", "opacity": "0.8", "width": "330px", "height": "256px", "top": "35px" })}" class="anime" data-v-d4b8a677><div class="light" data-v-d4b8a677></div><div class="screen" data-v-d4b8a677>`);
  _push(ssrRenderComponent(_component_nuxt_img, {
    class: "image",
    src: "logo.png"
  }, null, _parent));
  _push(`</div></div></div><!--]-->`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/iPortImage.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-d4b8a677"]]);
const _sfc_main$1 = {
  name: "iPortVideoPlayer",
  data() {
    return {
      id: 0,
      src: [
        "https://customer-9nuyiwcobdv6cl6j.cloudflarestream.com/998774a81cac037fd7dff75a7ddaaa83/iframe?muted=true&poster=https%3A%2F%2Fcustomer-9nuyiwcobdv6cl6j.cloudflarestream.com%2F998774a81cac037fd7dff75a7ddaaa83%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600",
        "https://customer-9nuyiwcobdv6cl6j.cloudflarestream.com/c866571f1b314f650410cf3be1357b70/iframe?poster=https%3A%2F%2Fcustomer-9nuyiwcobdv6cl6j.cloudflarestream.com%2Fc866571f1b314f650410cf3be1357b70%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600",
        "https://customer-9nuyiwcobdv6cl6j.cloudflarestream.com/bab4467687bc64bcbd1aa3c867ae28c4/iframe?poster=https%3A%2F%2Fcustomer-9nuyiwcobdv6cl6j.cloudflarestream.com%2Fbab4467687bc64bcbd1aa3c867ae28c4%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600"
      ]
    };
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><div class="container pc" data-v-fb17c1a8><div style="${ssrRenderStyle({ "height": "300px", "border-radius": "20px", "padding": "20px 0", "display": "flex", "flex-direction": "column", "border": "1px solid #c0c0c0", "background": "orange" })}" data-v-fb17c1a8><span class="${ssrRenderClass({ active: $data.id == 0 })}" data-v-fb17c1a8>1. \u8A13\u7DF4AI\u6A21\u578B\u53CA\u751F\u6210\u9023\u7D50</span><span class="${ssrRenderClass({ active: $data.id == 1 })}" data-v-fb17c1a8>2. \u4E0A\u8F09\u6A21\u578B\u81F3\u7DE8\u7A0B\u5E73\u53F0</span><span class="${ssrRenderClass({ active: $data.id == 2 })}" data-v-fb17c1a8>3. \u64CD\u4F5CCUHK iPort\u6216\u6A21\u64EC\u5668</span></div><div style="${ssrRenderStyle({ "display": "flex", "justify-content": "center", "align-items": "center", "padding": "0 20px" })}" data-v-fb17c1a8><div style="${ssrRenderStyle({ "position": "relative", "width": "550px", "height": "300px", "background": "white" })}" data-v-fb17c1a8><iframe${ssrRenderAttr("src", $data.src[$data.id])} style="${ssrRenderStyle({ "border": "none", "position": "absolute", "top": "0", "left": "0", "height": "100%", "width": "100%", "border-radius": "10px" })}" allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;" allowfullscreen="true" data-v-fb17c1a8></iframe></div></div></div><div class="container mobile" data-v-fb17c1a8><div style="${ssrRenderStyle({ "width": "100%", "border-radius": "20px", "padding": "20px 0", "display": "flex", "flex-direction": "column", "border": "1px solid #c0c0c0", "background": "orange" })}" data-v-fb17c1a8><span class="${ssrRenderClass({ active: $data.id == 0 })}" data-v-fb17c1a8>1. \u8A13\u7DF4AI\u6A21\u578B\u53CA\u751F\u6210\u9023\u7D50 <div style="${ssrRenderStyle([
    $data.id == 0 ? null : { display: "none" },
    { "position": "relative", "width": "100%", "height": "300px" }
  ])}" data-v-fb17c1a8><iframe${ssrRenderAttr("src", $data.src[0])} style="${ssrRenderStyle({ "border": "none", "position": "absolute", "top": "0", "left": "0", "height": "100%", "width": "100%", "border-radius": "10px" })}" allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;" allowfullscreen="true" data-v-fb17c1a8></iframe></div></span><span class="${ssrRenderClass({ active: $data.id == 1 })}" data-v-fb17c1a8>2. \u4E0A\u8F09\u6A21\u578B\u81F3\u7DE8\u7A0B\u5E73\u53F0 <div style="${ssrRenderStyle([
    $data.id == 1 ? null : { display: "none" },
    { "position": "relative", "width": "100%", "height": "300px" }
  ])}" data-v-fb17c1a8><iframe${ssrRenderAttr("src", $data.src[1])} style="${ssrRenderStyle({ "border": "none", "position": "absolute", "top": "0", "left": "0", "height": "100%", "width": "100%", "border-radius": "10px" })}" allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;" allowfullscreen="true" data-v-fb17c1a8></iframe></div></span><span class="${ssrRenderClass({ active: $data.id == 2 })}" data-v-fb17c1a8>3. \u64CD\u4F5CCUHK iPort\u6216\u6A21\u64EC\u5668 <div style="${ssrRenderStyle([
    $data.id == 2 ? null : { display: "none" },
    { "position": "relative", "width": "100%", "height": "300px" }
  ])}" data-v-fb17c1a8><iframe${ssrRenderAttr("src", $data.src[2])} style="${ssrRenderStyle({ "border": "none", "position": "absolute", "top": "0", "left": "0", "height": "100%", "width": "100%", "border-radius": "10px" })}" allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;" allowfullscreen="true" data-v-fb17c1a8></iframe></div></span></div></div><!--]-->`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/iPortVideoPlayer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-fb17c1a8"]]);
const __nuxt_component_6 = /* @__PURE__ */ defineComponent({
  name: "ClientOnly",
  inheritAttrs: false,
  // eslint-disable-next-line vue/require-prop-types
  props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
  setup(_, { slots, attrs }) {
    const mounted = ref(false);
    return (props) => {
      var _a;
      if (mounted.value) {
        return (_a = slots.default) == null ? void 0 : _a.call(slots);
      }
      const slot = slots.fallback || slots.placeholder;
      if (slot) {
        return slot();
      }
      const fallbackStr = props.fallback || props.placeholder || "";
      const fallbackTag = props.fallbackTag || props.placeholderTag || "span";
      return createElementBlock(fallbackTag, attrs, fallbackStr);
    };
  }
});
const _sfc_main = {
  name: "CUHK-iPort",
  data() {
    return {
      viewWidth: 1024
    };
  },
  methods: {
    scroll(index) {
      this.$nextTick(function() {
        window.setTimeout(() => {
          if (index === 0) {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          } else {
            const target = this.$refs.content.getElementsByTagName("span")[index];
            target.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 1);
      });
    },
    vw(percent) {
      var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
      return percent * w / 100;
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
  },
  mounted() {
    const self = this;
    this.viewWidth = this.vw(50);
    const resizeObserver = new ResizeObserver(
      (entries) => {
        self.viewWidth = Math.min(self.vw(50), 1024);
        self.viewWidth = Math.max(self.viewWidth, 300);
      }
    );
    resizeObserver.observe(document.body);
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Title = Title;
  const _component_Meta = Meta;
  const _component_PageCatalog4 = __nuxt_component_2;
  const _component_iPortImage = __nuxt_component_3;
  const _component_nuxt_img = __nuxt_component_4;
  const _component_iPortVideoPlayer = __nuxt_component_5;
  const _component_ClientOnly = __nuxt_component_6;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Title, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`CUHK iPort`);
      } else {
        return [
          createTextVNode("CUHK iPort")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Meta, {
    name: "description",
    content: "CUHK iPort\u662F\u70BA\u5BE6\u73FEAI\u7269\u806F\u7DB2\uFF08AIoT\uFF09\u800C\u8A2D\u7684AI\u6559\u5B78\u5957\u4EF6\uFF0C\u8B93\u5B78\u751F\u8F15\u9B06\u5275\u5EFA\u4E0D\u540CAI\u6A5F\u68B0\u9805\u76EE\u3002"
  }, null, _parent));
  _push(ssrRenderComponent(_component_PageCatalog4, {
    list: ["CUHK iPort", "\u529F\u80FD\u4ECB\u7D39", "\u4F7F\u7528\u8AAA\u660E", "\u5BE6\u9A57\u7BC4\u4F8B", "\u7DE8\u7A0B\u5E73\u53F0", "\u5BE6\u7528\u8CC7\u6E90\u7E3D\u532F"],
    style: { "z-index": "1" }
  }, null, _parent));
  _push(`<div class="pageContent-container" style="${ssrRenderStyle({ "z-index": "0", "flex-direction": "column", "justify-content": "flex-start", "align-items": "flex-start", "padding": "30px", "overflow": "visible", "width": "1000px", "max-width": "100%" })}" data-v-3e686a58><div class="page-content" data-v-3e686a58><span class="title" data-v-3e686a58>CUHK iPort</span><div class="text-content" style="${ssrRenderStyle({ "display": "flex", "justify-content": "center", "width": "100%" })}" data-v-3e686a58>`);
  _push(ssrRenderComponent(_component_iPortImage, null, null, _parent));
  _push(`</div><span class="title" data-v-3e686a58>\u529F\u80FD\u4ECB\u7D39</span><div class="text-content" data-v-3e686a58> CUHK iPort\u662F\u7531\u4E2D\u5927\u5718\u968A\u958B\u767C\u7684AI\u6559\u5B78\u5957\u4EF6\u3002\u5E2B\u751F\u53EF\u7701\u7565\u8907\u96DC\u7684\u786C\u4EF6\u642D\u7DAB\u6B65\u9A5F\uFF0C\u4F7F\u7528iPort\u7DE8\u7A0B\u5E73\u53F0\uFF0C\u5957\u7528\u65BCTeachable Machine\u8A13\u7DF4\u7684AI\u6A21\u578B\uFF0C\u7121\u9808\u7DE8\u7A0B\u5373\u53EF\u5BE6\u73FEAI\u7269\u806F\u7DB2\uFF08AIoT\uFF09 \uFF0C \u5EFA\u7ACB\u4E0D\u540C\u7684AI\u9805\u76EE\u3002 `);
  _push(ssrRenderComponent(_component_nuxt_img, {
    src: "iportDesc4.png",
    style: { "width": "100%", "max-width": "900px" }
  }, null, _parent));
  _push(`</div><span class="title" data-v-3e686a58>\u4F7F\u7528\u8AAA\u660E</span><div class="text-content" data-v-3e686a58>`);
  _push(ssrRenderComponent(_component_iPortVideoPlayer, null, null, _parent));
  _push(`</div><span class="title" data-v-3e686a58>\u5BE6\u9A57\u7BC4\u4F8B</span><div class="text-content" style="${ssrRenderStyle({ "max-width": "100%" })}" data-v-3e686a58>`);
  _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
  _push(`</div><span class="title" data-v-3e686a58>\u7DE8\u7A0B\u5E73\u53F0</span><div class="text-content" data-v-3e686a58><a href="https://iport.eduairhk.com" target="_blank" class="btn" data-v-3e686a58>\u524D\u5F80CUHK iPort\u7DE8\u7A0B\u5E73\u53F0</a></div><span class="title" data-v-3e686a58>\u5BE6\u7528\u8CC7\u6E90\u7E3D\u532F</span><div class="text-content" data-v-3e686a58> \u5373\u5C07\u63A8\u51FA </div></div></div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/cuhk-iport.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const cuhkIport = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-3e686a58"]]);

export { cuhkIport as default };
//# sourceMappingURL=cuhk-iport-c06a9d17.mjs.map
