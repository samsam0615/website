import { T as Title } from './components-9f200465.mjs';
import { _ as _export_sfc, b as __nuxt_component_1 } from '../server.mjs';
import { useSSRContext, withCtx, createTextVNode, mergeProps } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr, ssrRenderClass } from 'vue/server-renderer';
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

const _sfc_main$1 = {
  name: "CUHK-iCar",
  data() {
    return {
      url: "event4.jpg"
    };
  },
  methods: {
    setImage(url) {
      this.url = url;
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_img = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({ style: { "display": "flex", "padding": "20px", "width": "1024px", "flex-direction": "column" } }, _attrs))} data-v-698aeab3><label class="font-big" style="${ssrRenderStyle({ "font-weight": "600", "padding": "0 0 20px 0" })}" data-v-698aeab3>2023</label><div style="${ssrRenderStyle({ "display": "flex", "height": "350px" })}" data-v-698aeab3><div style="${ssrRenderStyle({ "color": "white", "display": "flex", "justify-content": "space-between", "flex-direction": "row" })}" data-v-698aeab3><div style="${ssrRenderStyle({ "height": "350px" })}" data-v-698aeab3><img${ssrRenderAttr("src", $data.url)} style="${ssrRenderStyle({ "height": "100%", "width": "auto", "border": "1px solid white" })}" data-v-698aeab3></div></div><div style="${ssrRenderStyle({ "width": "100%", "height": "450px", "padding": "0 20px" })}" data-v-698aeab3><div class="font-big" style="${ssrRenderStyle({ "color": "#6d0e77", "font-weight": "600", "padding": "0 0 10px 0" })}" data-v-698aeab3>\u5371\u6A5F\u89E3\u9664\u5DE5\u4F5C\u574A 2023</div><div class="font-small" style="${ssrRenderStyle({ "line-height": "30px" })}" data-v-698aeab3> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proidentm. </div></div></div><div style="${ssrRenderStyle({ "display": "flex", "flex-direction": "row", "justify-content": "space-between", "width": "100%" })}" data-v-698aeab3><div class="${ssrRenderClass([{ active: $data.url == "event4.jpg" }, "image-container2"])}" data-v-698aeab3>`);
  _push(ssrRenderComponent(_component_nuxt_img, { src: "event4.jpg" }, null, _parent));
  _push(`<div data-v-698aeab3></div></div><div class="${ssrRenderClass([{ active: $data.url == "event3.jpg" }, "image-container2"])}" data-v-698aeab3>`);
  _push(ssrRenderComponent(_component_nuxt_img, { src: "event3.jpg" }, null, _parent));
  _push(`<div data-v-698aeab3></div></div><div class="${ssrRenderClass([{ active: $data.url == "event3.jpg" }, "image-container2"])}" data-v-698aeab3>`);
  _push(ssrRenderComponent(_component_nuxt_img, { src: "event3.jpg" }, null, _parent));
  _push(`<div data-v-698aeab3></div></div><div class="${ssrRenderClass([{ active: $data.url == "event3.jpg" }, "image-container2"])}" data-v-698aeab3>`);
  _push(ssrRenderComponent(_component_nuxt_img, { src: "event3.jpg" }, null, _parent));
  _push(`<div data-v-698aeab3></div></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Gallery.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-698aeab3"]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Title = Title;
  const _component_nuxt_img = __nuxt_component_1;
  const _component_Gallery = __nuxt_component_2;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Title, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u6700\u65B0\u6D88\u606F`);
      } else {
        return [
          createTextVNode("\u6700\u65B0\u6D88\u606F")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="pageContent-container" data-v-93e32a30><div class="banner" data-v-93e32a30>`);
  _push(ssrRenderComponent(_component_nuxt_img, { src: "banner2.jpg" }, null, _parent));
  _push(`<label class="title font-big" data-v-93e32a30> \u6700\u65B0\u6D88\u606F </label></div>`);
  _push(ssrRenderComponent(_component_Gallery, null, null, _parent));
  _push(`</div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/news.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const news = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-93e32a30"]]);

export { news as default };
//# sourceMappingURL=news-cd00415a.mjs.map
