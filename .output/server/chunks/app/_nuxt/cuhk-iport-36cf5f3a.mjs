import { T as Title, M as Meta } from './components-9f200465.mjs';
import { useSSRContext, withCtx, createTextVNode, createVNode, mergeProps } from 'vue';
import { ssrRenderComponent, ssrRenderStyle, ssrRenderAttr, ssrRenderAttrs, ssrRenderClass } from 'vue/server-renderer';
import { _ as _export_sfc, b as __nuxt_component_1 } from '../server.mjs';
import { _ as __nuxt_component_6 } from './TextBox-d613185c.mjs';
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
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-b95c31bb><div style="${ssrRenderStyle({ "display": "flex", "gap": "10px", "width": "1200px" })}" data-v-b95c31bb><span class="${ssrRenderClass({ active: Math.floor($data.pos) == 0, inactive: Math.floor($data.pos) != 0 })}" data-v-b95c31bb>iPort\u662F\u751A\u9EBC\uFF1F</span><span class="${ssrRenderClass({ active: Math.floor($data.pos) == 1, inactive: Math.floor($data.pos) != 1 })}" data-v-b95c31bb>\u5982\u4F55\u4F7F\u7528iPort\uFF1F</span><span class="${ssrRenderClass({ active: Math.floor($data.pos) == 2, inactive: Math.floor($data.pos) != 2 })}" data-v-b95c31bb>\u8B66\u5831\u7CFB\u7D71</span><span class="${ssrRenderClass({ active: Math.floor($data.pos) == 3, inactive: Math.floor($data.pos) != 3 })}" data-v-b95c31bb>\u624B\u52E2\u63A7\u5236\u5C0F\u8ECA</span><span class="${ssrRenderClass({ active: Math.floor($data.pos) == 4, inactive: Math.floor($data.pos) != 4 })}" data-v-b95c31bb>\u8072\u63A7\u958B\u95DC</span><span class="${ssrRenderClass({ active: Math.floor($data.pos) == 5, inactive: Math.floor($data.pos) != 5 })}" data-v-b95c31bb>iPort\u7DE8\u7A0B\u5E73\u53F0</span></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PageCatalog4.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-b95c31bb"]]);
const _sfc_main$2 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_nuxt_img = __nuxt_component_1;
  _push(`<!--[--><div class="mobile container" data-v-8eb21375>`);
  _push(ssrRenderComponent(_component_nuxt_img, {
    src: "iport2.svg",
    width: 330,
    preload: ""
  }, null, _parent));
  _push(`<div style="${ssrRenderStyle({ "position": "absolute", "opacity": "0.8", "width": "158px", "height": "122px", "top": "23px" })}" class="anime" data-v-8eb21375><div class="light" data-v-8eb21375></div><div class="screen" data-v-8eb21375>`);
  _push(ssrRenderComponent(_component_nuxt_img, {
    class: "image",
    src: "logo.png"
  }, null, _parent));
  _push(`</div></div></div><div class="pc container" data-v-8eb21375>`);
  _push(ssrRenderComponent(_component_nuxt_img, {
    src: "iport2.svg",
    width: 700,
    preload: ""
  }, null, _parent));
  _push(`<div style="${ssrRenderStyle({ "position": "absolute", "opacity": "0.8", "width": "330px", "height": "256px", "top": "35px" })}" class="anime" data-v-8eb21375><div class="light" data-v-8eb21375></div><div class="screen" data-v-8eb21375>`);
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
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-8eb21375"]]);
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
  _push(`<!--[--><div class="container pc" data-v-a6f01bf2><div style="${ssrRenderStyle({ "height": "300px", "border-radius": "20px", "padding": "20px 0", "display": "flex", "flex-direction": "column", "border": "1px solid #c0c0c0", "background": "orange" })}" data-v-a6f01bf2><span class="${ssrRenderClass([{ active: $data.id == 0 }, "font-small"])}" data-v-a6f01bf2>1. \u8A13\u7DF4AI\u6A21\u578B\u53CA\u751F\u6210\u9023\u7D50</span><span class="${ssrRenderClass([{ active: $data.id == 1 }, "font-small"])}" data-v-a6f01bf2>2. \u4E0A\u8F09\u6A21\u578B\u81F3\u7DE8\u7A0B\u5E73\u53F0</span><span class="${ssrRenderClass([{ active: $data.id == 2 }, "font-small"])}" data-v-a6f01bf2>3. \u64CD\u4F5CCUHK iPort\u6216\u6A21\u64EC\u5668</span></div><div style="${ssrRenderStyle({ "display": "flex", "justify-content": "center", "align-items": "center", "padding": "0 20px" })}" data-v-a6f01bf2><div style="${ssrRenderStyle({ "position": "relative", "width": "550px", "height": "300px", "background": "white" })}" data-v-a6f01bf2><iframe${ssrRenderAttr("src", $data.src[$data.id])} style="${ssrRenderStyle({ "border": "none", "position": "absolute", "top": "0", "left": "0", "height": "100%", "width": "100%", "border-radius": "10px" })}" allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;" allowfullscreen="true" data-v-a6f01bf2></iframe></div></div></div><div class="container mobile" data-v-a6f01bf2><div style="${ssrRenderStyle({ "width": "100%", "border-radius": "20px", "padding": "20px 0", "display": "flex", "flex-direction": "column", "border": "1px solid #c0c0c0", "background": "orange" })}" data-v-a6f01bf2><span class="${ssrRenderClass([{ active: $data.id == 0 }, "font-small"])}" data-v-a6f01bf2>1. \u8A13\u7DF4AI\u6A21\u578B\u53CA\u751F\u6210\u9023\u7D50 <div style="${ssrRenderStyle([
    $data.id == 0 ? null : { display: "none" },
    { "position": "relative", "width": "100%", "height": "300px" }
  ])}" data-v-a6f01bf2><iframe${ssrRenderAttr("src", $data.src[0])} style="${ssrRenderStyle({ "border": "none", "position": "absolute", "top": "0", "left": "0", "height": "100%", "width": "100%", "border-radius": "10px" })}" allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;" allowfullscreen="true" preload="true" data-v-a6f01bf2></iframe></div></span><span class="${ssrRenderClass([{ active: $data.id == 1 }, "font-small"])}" data-v-a6f01bf2>2. \u4E0A\u8F09\u6A21\u578B\u81F3\u7DE8\u7A0B\u5E73\u53F0 <div style="${ssrRenderStyle([
    $data.id == 1 ? null : { display: "none" },
    { "position": "relative", "width": "100%", "height": "300px" }
  ])}" data-v-a6f01bf2><iframe${ssrRenderAttr("src", $data.src[1])} style="${ssrRenderStyle({ "border": "none", "position": "absolute", "top": "0", "left": "0", "height": "100%", "width": "100%", "border-radius": "10px" })}" allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;" allowfullscreen="true" preload="true" data-v-a6f01bf2></iframe></div></span><span class="${ssrRenderClass([{ active: $data.id == 2 }, "font-small"])}" data-v-a6f01bf2>3. \u64CD\u4F5CCUHK iPort\u6216\u6A21\u64EC\u5668 <div style="${ssrRenderStyle([
    $data.id == 2 ? null : { display: "none" },
    { "position": "relative", "width": "100%", "height": "300px" }
  ])}" data-v-a6f01bf2><iframe${ssrRenderAttr("src", $data.src[2])} style="${ssrRenderStyle({ "border": "none", "position": "absolute", "top": "0", "left": "0", "height": "100%", "width": "100%", "border-radius": "10px" })}" allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;" allowfullscreen="true" preload="true" data-v-a6f01bf2></iframe></div></span></div></div><!--]-->`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/iPortVideoPlayer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-a6f01bf2"]]);
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
    this.$refs.myVideo1.play();
    this.$refs.myVideo2.play();
    this.$refs.myVideo3.play();
    this.$refs.myVideo4.play();
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
  const _component_nuxt_img = __nuxt_component_1;
  const _component_iPortVideoPlayer = __nuxt_component_5;
  const _component_TextBox = __nuxt_component_6;
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
  _push(ssrRenderComponent(_component_PageCatalog4, { style: { "z-index": "1" } }, null, _parent));
  _push(`<div class="pageContent-container" style="${ssrRenderStyle({ "z-index": "0", "flex-direction": "column", "justify-content": "flex-start", "align-items": "flex-start", "padding": "30px", "overflow": "visible", "max-width": "1200px", "width": "100%" })}" data-v-b82884bf><div class="page-content" style="${ssrRenderStyle({ "width": "100%" })}" data-v-b82884bf><span class="title font-big" data-v-b82884bf>iPort\u662F\u751A\u9EBC\uFF1F</span><div class="text-content font-small" style="${ssrRenderStyle({ "display": "flex", "justify-content": "center", "width": "100%" })}" data-v-b82884bf>`);
  _push(ssrRenderComponent(_component_iPortImage, null, null, _parent));
  _push(`</div><div class="text-content font-small" data-v-b82884bf> CUHK iPort\u662F\u7531\u4E2D\u5927\u5718\u968A\u958B\u767C\u7684AI\u6559\u5B78\u5957\u4EF6\u3002\u5E2B\u751F\u53EF\u7701\u7565\u8907\u96DC\u7684\u786C\u4EF6\u642D\u7DAB\u6B65\u9A5F\uFF0C\u4F7F\u7528iPort\u7DE8\u7A0B\u5E73\u53F0\uFF0C\u5957\u7528\u65BCTeachable Machine\u8A13\u7DF4\u7684AI\u6A21\u578B\uFF0C\u7121\u9808\u7DE8\u7A0B\u5373\u53EF\u5BE6\u73FEAI\u7269\u806F\u7DB2\uFF08AIoT\uFF09 \uFF0C \u5EFA\u7ACB\u4E0D\u540C\u7684AI\u9805\u76EE\u3002 `);
  _push(ssrRenderComponent(_component_nuxt_img, {
    src: "iportDesc6.png",
    style: { "width": "100%", "max-width": "900px" }
  }, null, _parent));
  _push(`</div><span class="title font-big" data-v-b82884bf>\u5982\u4F55\u4F7F\u7528iPort\uFF1F</span>`);
  _push(ssrRenderComponent(_component_iPortVideoPlayer, null, null, _parent));
  _push(`<span class="title font-big" data-v-b82884bf>\u8B66\u5831\u7CFB\u7D71</span><div class="text-content font-small" data-v-b82884bf><video autoplay muted loop playsinline webkit-playsinline style="${ssrRenderStyle({ "width": "100%", "max-width": "750px" })}" data-v-b82884bf><source${ssrRenderAttr("src", "iport5.mp4")} type="video/mp4" data-v-b82884bf></video><br data-v-b82884bf> \u4F7F\u7528Teachable Machine \u8A13\u7DF4AI \u5716\u7247\u8B58\u5225\u6A21\u578B\u6AA2\u6E2C\u7981\u5340\u5927\u9580\u6709\u4EBA\u53CA\u7121\u4EBA\u7684\u60C5\u666F\u3002\u900F\u904EiPort \u5E73\u53F0\u4E0A\u7C21\u55AE\u8A2D\u7F6E\u986F\u793A\u5B89\u5168\u63D0\u793A\u53CA\u8072\u97F3\u71C8\u5149\u7B49\u6548\u679C\uFF0C\u53EA\u8981\u6709\u4EBA\u7D93\u904E\u7981\u5340\u5927\u9580\uFF0CiPort \u5C31\u6703\u767C\u51FA\u8B66\u5831\uFF0C\u63D0\u9192\u8AA4\u95D6\u4EBA\u58EB\u96E2\u958B\u3002 <br data-v-b82884bf><br data-v-b82884bf>`);
  _push(ssrRenderComponent(_component_TextBox, {
    title: "\u8A0E\u8AD6\u554F\u984C\u8209\u9685",
    image: "image/materials/logo_think2.png"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` \u4EFB\u4F55\u4EBA\u7D93\u904E\u7981\u5340\u5927\u9580\u90FD\u6703\u89F8\u767C\u8B66\u5831\u7CFB\u7D71\u55CE\uFF1F\u53EF\u4EE5\u53EA\u8B93\u6388\u6B0A\u4EBA\u58EB\u901A\u904E\u55CE\uFF1F<br data-v-b82884bf${_scopeId}> \u70BA\u4F55\u5929\u9ED1\u5F8C\u8B66\u5831\u7CFB\u7D71\u5C31\u6703\u88AB\u89F8\u767C\uFF1F\u5982\u4F55\u907F\u514D\u8AA4\u89F8\u767C\u7684\u60C5\u6CC1\uFF1F<br data-v-b82884bf${_scopeId}> \u5728\u8A13\u7DF4\u300C\u6709\u4EBA\u300D\u7684\u60C5\u666F\u6642\uFF0C\u5047\u8A2D\u53EA\u7528\u540C\u5B78A\u7D93\u904E\u7981\u5340\u7684\u5716\u7247\uFF0C\u6709\u8DB3\u5920\u6578\u64DA\u4F5C\u70BA\u8B58\u5225\u6709\u4EBA\u7684\u60C5\u666F\u55CE\uFF1F<br data-v-b82884bf${_scopeId}>`);
      } else {
        return [
          createTextVNode(" \u4EFB\u4F55\u4EBA\u7D93\u904E\u7981\u5340\u5927\u9580\u90FD\u6703\u89F8\u767C\u8B66\u5831\u7CFB\u7D71\u55CE\uFF1F\u53EF\u4EE5\u53EA\u8B93\u6388\u6B0A\u4EBA\u58EB\u901A\u904E\u55CE\uFF1F"),
          createVNode("br"),
          createTextVNode(" \u70BA\u4F55\u5929\u9ED1\u5F8C\u8B66\u5831\u7CFB\u7D71\u5C31\u6703\u88AB\u89F8\u767C\uFF1F\u5982\u4F55\u907F\u514D\u8AA4\u89F8\u767C\u7684\u60C5\u6CC1\uFF1F"),
          createVNode("br"),
          createTextVNode(" \u5728\u8A13\u7DF4\u300C\u6709\u4EBA\u300D\u7684\u60C5\u666F\u6642\uFF0C\u5047\u8A2D\u53EA\u7528\u540C\u5B78A\u7D93\u904E\u7981\u5340\u7684\u5716\u7247\uFF0C\u6709\u8DB3\u5920\u6578\u64DA\u4F5C\u70BA\u8B58\u5225\u6709\u4EBA\u7684\u60C5\u666F\u55CE\uFF1F"),
          createVNode("br")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><span class="title font-big" data-v-b82884bf>\u624B\u52E2\u63A7\u5236\u5C0F\u8ECA</span><div class="text-content font-small" data-v-b82884bf><div class="font-middle" style="${ssrRenderStyle({ "padding": "10px 0" })}" data-v-b82884bf>\u88FD\u4F5C\u6559\u5B78</div><div style="${ssrRenderStyle({ "display": "flex", "flex-wrap": "wrap" })}" data-v-b82884bf><video autoplay muted loop playsinline webkit-playsinline style="${ssrRenderStyle({ "width": "100%", "max-width": "750px" })}" data-v-b82884bf><source${ssrRenderAttr("src", "iport7.mp4")} type="video/mp4" data-v-b82884bf></video><div style="${ssrRenderStyle({ "padding": "20px 20px 0 20px" })}" data-v-b82884bf> \u6240\u9700\u6750\u6599\uFF1A <br data-v-b82884bf> 1. \u5EE2\u68C4\u7D19\u76AE <br data-v-b82884bf> 2. \u81A0\u6A3D\u6A3D\u84CB <br data-v-b82884bf> 3. \u81A0\u7D19 <br data-v-b82884bf> 4. CUHK iPort <br data-v-b82884bf> 5. 360\u96FB\u6A5F * 2 <br data-v-b82884bf></div></div><br data-v-b82884bf><div class="font-middle" style="${ssrRenderStyle({ "padding": "10px 0" })}" data-v-b82884bf>\u5BE6\u9A57\u793A\u7BC4</div><video autoplay muted loop playsinline webkit-playsinline style="${ssrRenderStyle({ "width": "100%", "max-width": "750px" })}" data-v-b82884bf><source${ssrRenderAttr("src", "iport1.mp4")} type="video/mp4" data-v-b82884bf></video><br data-v-b82884bf> \u5728Teachable Machine \u4E0A\u8A13\u7DF4\u597D\u81EA\u5DF1\u559C\u6B61\u7684\u624B\u52E2\u8B58\u5225\u6A21\u578B\u5F8C\uFF0C\u5C31\u53EF\u4EE5\u900F\u904E\u651D\u50CF\u982D\u4EE5\u624B\u52E2\u63A7\u5236\u5C0F\u8ECA\u98DB\u99B3\u3002\u7A7A\u66E0\u74B0\u5883\u4E0B\u7121\u7DDA\u63A7\u5236\u8DDD\u96E2\u53EF\u905450\u7C73\u3002\u5927\u5BB6\u4E0D\u59A8\u6BD4\u8CFD\u8AB0\u7684\u5C0F\u8ECA\u6700\u5FEB\u96E2\u958B\u8FF7\u5BAE\u3002 <br data-v-b82884bf><br data-v-b82884bf>`);
  _push(ssrRenderComponent(_component_TextBox, {
    title: "\u8A0E\u8AD6\u554F\u984C\u8209\u9685",
    image: "image/materials/logo_think2.png"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` \u624B\u52E2\u8B58\u5225\u9664\u4E86\u53EF\u4EE5\u73A9\u5C0F\u8ECA\u6BD4\u8CFD\u5916\uFF0C\u9084\u53EF\u4EE5\u7528\u5230\u54EA\u4E9B\u751F\u6D3B\u61C9\u7528\u4E0A\uFF1F<br data-v-b82884bf${_scopeId}> Teacheble Machine \u4E0A\u5229\u7528\u5716\u7247\u8B58\u5225\u624B\u52E2\u8207\u50B3\u7D71\u7684\u624B\u52E2\u8B58\u5225\u6280\u8853\u6709\u751A\u9EBC\u4E0D\u540C\uFF1F<br data-v-b82884bf${_scopeId}> \u600E\u6A23\u6536\u96C6\u6578\u64DA\u624D\u80FD\u4F7F\u5C0F\u8ECA\u5F97\u5230\u66F4\u597D\u7684\u63A7\u5236\uFF1F<br data-v-b82884bf${_scopeId}>`);
      } else {
        return [
          createTextVNode(" \u624B\u52E2\u8B58\u5225\u9664\u4E86\u53EF\u4EE5\u73A9\u5C0F\u8ECA\u6BD4\u8CFD\u5916\uFF0C\u9084\u53EF\u4EE5\u7528\u5230\u54EA\u4E9B\u751F\u6D3B\u61C9\u7528\u4E0A\uFF1F"),
          createVNode("br"),
          createTextVNode(" Teacheble Machine \u4E0A\u5229\u7528\u5716\u7247\u8B58\u5225\u624B\u52E2\u8207\u50B3\u7D71\u7684\u624B\u52E2\u8B58\u5225\u6280\u8853\u6709\u751A\u9EBC\u4E0D\u540C\uFF1F"),
          createVNode("br"),
          createTextVNode(" \u600E\u6A23\u6536\u96C6\u6578\u64DA\u624D\u80FD\u4F7F\u5C0F\u8ECA\u5F97\u5230\u66F4\u597D\u7684\u63A7\u5236\uFF1F"),
          createVNode("br")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><span class="title font-big" data-v-b82884bf>\u8072\u63A7\u958B\u95DC</span><div class="text-content font-small" data-v-b82884bf><video autoplay muted loop playsinline webkit-playsinline style="${ssrRenderStyle({ "width": "100%", "max-width": "750px" })}" data-v-b82884bf><source${ssrRenderAttr("src", "iport2.mp4")} type="video/mp4" data-v-b82884bf></video><br data-v-b82884bf> iPort\u914D\u4EF6\u4E2D\u7684\u96FB\u52D5\u624B\u6307\u80FD\u5920\u505A\u5230\u985E\u4F3C\u771F\u5BE6\u624B\u6307\u63A8\u62C9\u7684\u52D5\u4F5C\uFF0C\u5C0D\u65BC\u884C\u52D5\u4E0D\u4FBF\u4EBA\u58EB\u53EF\u4EE5\u5229\u7528\u8A13\u7DF4\u8072\u97F3\u8B58\u5225\u6A21\u578B\uFF0C\u5229\u7528\u7C21\u55AE\u7684\u8072\u63A7\u6307\u4EE4\u4FBF\u80FD\u63A7\u5236\u5BB6\u4E2D\u7684\u4EFB\u610F\u6309\u9375\u958B\u95DC\u3002\u6709\u969C\u7919\u7684\u5BA4\u5167\u74B0\u5883\u4E0B\u7121\u7DDA\u63A7\u5236\u8DDD\u96E2\u4ECD\u53EF\u905415\u7C73\u3002 <br data-v-b82884bf><br data-v-b82884bf>`);
  _push(ssrRenderComponent(_component_TextBox, {
    title: "\u8A0E\u8AD6\u554F\u984C\u8209\u9685",
    image: "image/materials/logo_think2.png"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` \u5982\u4F55\u80FD\u63D0\u5347Teachable Machine \u4E2D\u7684\u8072\u63A7\u6E96\u78BA\u6027\u5462\uFF1F<br data-v-b82884bf${_scopeId}> \u8A9E\u8A00\u969C\u7919\u8005\u6709\u751A\u9EBC\u8FA6\u6CD5\u80FD\u5920\u63A7\u5236\u96FB\u52D5\u624B\u6307\uFF1F<br data-v-b82884bf${_scopeId}> \u8072\u63A7\u8B58\u5225\u7684\u6700\u5927\u56F0\u96E3\u662F\u5BB9\u6613\u53D7\u5230\u566A\u97F3\u5F71\u97FF\uFF0C\u96FB\u52D5\u624B\u6307\u53EF\u80FD\u56E0\u800C\u767C\u751F\u8AA4\u89F8\u60C5\u6CC1\uFF0C\u6211\u5011\u5982\u4F55\u907F\u514D\u566A\u97F3\u7684\u5F71\u97FF\uFF1F<br data-v-b82884bf${_scopeId}>`);
      } else {
        return [
          createTextVNode(" \u5982\u4F55\u80FD\u63D0\u5347Teachable Machine \u4E2D\u7684\u8072\u63A7\u6E96\u78BA\u6027\u5462\uFF1F"),
          createVNode("br"),
          createTextVNode(" \u8A9E\u8A00\u969C\u7919\u8005\u6709\u751A\u9EBC\u8FA6\u6CD5\u80FD\u5920\u63A7\u5236\u96FB\u52D5\u624B\u6307\uFF1F"),
          createVNode("br"),
          createTextVNode(" \u8072\u63A7\u8B58\u5225\u7684\u6700\u5927\u56F0\u96E3\u662F\u5BB9\u6613\u53D7\u5230\u566A\u97F3\u5F71\u97FF\uFF0C\u96FB\u52D5\u624B\u6307\u53EF\u80FD\u56E0\u800C\u767C\u751F\u8AA4\u89F8\u60C5\u6CC1\uFF0C\u6211\u5011\u5982\u4F55\u907F\u514D\u566A\u97F3\u7684\u5F71\u97FF\uFF1F"),
          createVNode("br")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><span class="title font-big" data-v-b82884bf>iPort\u7DE8\u7A0B\u5E73\u53F0</span><div class="text-content font-small" data-v-b82884bf><div style="${ssrRenderStyle({ "width": "100%", "max-width": "900px", "background": "red", "padding": "0", "height": "min-content", "display": "flex" })}" data-v-b82884bf><img${ssrRenderAttr("src", "iportui.png")} style="${ssrRenderStyle({ "width": "100%", "height": "auto", "padding": "0" })}" data-v-b82884bf><div style="${ssrRenderStyle({ "width": "100%", "height": "100%", "background": "white", "opacity": "0.5", "position": "absolute", "top": "0" })}" data-v-b82884bf></div><a href="https://iport.eduairhk.com" target="_blank" class="btn" style="${ssrRenderStyle({ "position": "absolute", "top": "50%", "left": "50%", "transform": "translate(-100%, -50%)" })}" data-v-b82884bf>\u524D\u5F80iPort\u7DE8\u7A0B\u5E73\u53F0</a></div></div></div></div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/cuhk-iport.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const cuhkIport = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-b82884bf"]]);

export { cuhkIport as default };
//# sourceMappingURL=cuhk-iport-36cf5f3a.mjs.map
