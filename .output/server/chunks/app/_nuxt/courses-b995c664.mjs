import { _ as _export_sfc, T as Title, a as __nuxt_component_0$1 } from '../server.mjs';
import { withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderStyle } from 'vue/server-renderer';
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

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Title = Title;
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Title, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u5230\u6821\u8AB2\u7A0B`);
      } else {
        return [
          createTextVNode("\u5230\u6821\u8AB2\u7A0B")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="pageContent-container" style="${ssrRenderStyle({ "max-width": "100%", "width": "1024px", "justify-content": "flex-start", "min-height": "100%", "align-items": "center" })}" data-v-48263345><div class="banner" data-v-48263345><label class="title font-big" data-v-48263345> \u5230\u6821\u8AB2\u7A0B </label></div><div class="text" style="${ssrRenderStyle({ "padding": "60px" })}" data-v-48263345>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/contact",
    style: { "text-decoration": "none" }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div style="${ssrRenderStyle({ "margin-top": "30px", "padding": "20px", "font-size": "20px", "background": "orange", "color": "white", "border-radius": "10px", "cursor": "pointer", "display": "flex", "justify-content": "center", "min-width": "max-content" })}" data-v-48263345${_scopeId}> \u806F\u7D61\u6211\u5011\u2002\u77AD\u89E3\u66F4\u591A </div>`);
      } else {
        return [
          createVNode("div", { style: { "margin-top": "30px", "padding": "20px", "font-size": "20px", "background": "orange", "color": "white", "border-radius": "10px", "cursor": "pointer", "display": "flex", "justify-content": "center", "min-width": "max-content" } }, " \u806F\u7D61\u6211\u5011\u2002\u77AD\u89E3\u66F4\u591A ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/courses.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const courses = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-48263345"]]);

export { courses as default };
//# sourceMappingURL=courses-b995c664.mjs.map
