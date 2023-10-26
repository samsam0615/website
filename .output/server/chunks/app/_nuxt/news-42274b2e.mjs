import { _ as _export_sfc, T as Title, M as Meta } from '../server.mjs';
import { useSSRContext, withCtx, createTextVNode, mergeProps } from 'vue';
import { ssrRenderComponent, ssrRenderStyle, ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
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
  props: {
    title: {
      type: String,
      default: "Title"
    },
    subtitle: {
      type: String,
      default: null
    },
    image: {
      type: String,
      default: ""
    },
    url: {
      type: String,
      default: ""
    },
    date: {
      type: String,
      default: ""
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ style: { "flex-grow": "1", "padding": "0 5px" } }, _attrs))}><div style="${ssrRenderStyle({ "width": "300px", "height": "400px", "background": "#f6f6f8", "display": "flex", "flex-direction": "column", "justify-content": "space-between", "padding": "0" })}"><div><img${ssrRenderAttr("src", $props.image)} style="${ssrRenderStyle({ "width": "100%", "height": "auto", "aspect-ratio": "3 / 2" })}"><div style="${ssrRenderStyle({ "padding": "5px 10px 10px 10px" })}"><div class="font-small" style="${ssrRenderStyle({ "color": "#6d0e77", "font-weight": "600" })}">${ssrInterpolate($props.title)}</div><div class="font-mini">${ssrInterpolate($props.subtitle)}</div></div></div><div style="${ssrRenderStyle({ "padding": "10px" })}"><a style="${ssrRenderStyle({ "color": "#ffa500", "line-height": "30px", "cursor": "pointer" })}"${ssrRenderAttr("href", $props.url)}>\u66F4\u591A&gt;&gt;</a><div>${ssrInterpolate($props.date)}</div></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Gallery2.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Title = Title;
  const _component_Meta = Meta;
  const _component_Gallery2 = __nuxt_component_2;
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
  _push(ssrRenderComponent(_component_Meta, {
    name: "description",
    content: ""
  }, null, _parent));
  _push(`<div class="pageContent-container" style="${ssrRenderStyle({ "max-width": "100%", "width": "1024px", "justify-content": "center" })}" data-v-ae6f37f8><div class="banner" data-v-ae6f37f8><label class="title font-big" data-v-ae6f37f8> \u6700\u65B0\u6D88\u606F </label></div><div class="text" data-v-ae6f37f8><div class="border" data-v-ae6f37f8><div class="font-middle" style="${ssrRenderStyle({ "color": "#6d0e77", "font-weight": "600", "padding": "0 0 0px 0" })}" data-v-ae6f37f8><a style="${ssrRenderStyle({ "text-decoration-color": "blue", "color": "blue" })}" target="_blank" href="https://tcs.edb.gov.hk/tcs/admin/courses/previewCourse/forPortal.htm?courseId=CSD020240360&amp;lang=zh" data-v-ae6f37f8> [\u{1F525}\u7ACB\u5373\u5831\u540D] </a> STEAM\u6559\u80B2\u5B78\u8207\u6559\u548C\u8A55\u4F30\u7CFB\u5217 </div><div class="font-small" style="${ssrRenderStyle({ "color": "#6d0e77", "font-weight": "600", "padding": "0 0 15px 0" })}" data-v-ae6f37f8>\u521D\u4E2D\u4EBA\u5DE5\u667A\u80FD\u8AB2\u7A0B\u55AE\u5143\u61C9\u7528\u5BE6\u8E10\u5DE5\u4F5C\u574A</div><div class="font-mini" style="${ssrRenderStyle({ "line-height": "30px" })}" data-v-ae6f37f8> \u9999\u6E2F\u6559\u80B2\u5C40\u65BC\u4ECA\u5E746\u6708\u63A8\u51FA\u300C\u521D\u4E2D\u4EBA\u5DE5\u667A\u80FD\u8AB2\u7A0B\u55AE\u5143\u300D\uFF0C\u5B78\u6821\u9700\u8981\u6BCF\u5E74\u5B89\u6392\u7D0410\u81F314\u5C0F\u6642\u6559\u6388\u76F8\u95DC\u5167\u5BB9\uFF0C\u8B93\u5B78\u751F\u80FD\u5F9E\u5C0F\u4E86\u89E3AI\uFF0C\u57F9\u990A\u53CA\u52A0\u5F37\u4ED6\u5011\u5B78\u7FD2\u5275\u65B0\u79D1\u6280\u7684\u8208\u8DA3\u53CA\u80FD\u529B\u3002 <br data-v-ae6f37f8><br data-v-ae6f37f8> \u6559\u80B2\u5C40\u65BC\u672C\u5E749\u6708\u5E95\u8D77\u8209\u8FA6\u76F8\u95DC\u7684\u6559\u5E2B\u57F9\u8A13\u8AB2\u7A0B(STEAM\u6559\u80B2\u5B78\u8207\u6559\u548C\u8A55\u4F30\u7CFB\u5217\uFF1A\u521D\u4E2D\u4EBA\u5DE5\u667A\u80FD\u8AB2\u7A0B\u55AE\u5143\u61C9\u7528\u5BE6\u8E10\u5DE5\u4F5C\u574A)\uFF0C\u9080\u8ACB500\u5BB6\u5B78\u6821\u51711000\u4F4D\u4E2D\u5B78\u8001\u5E2B\u53C3\u8207\u5DE5\u4F5C\u574A\uFF0C\u5DE5\u4F5C\u574A\u5408\u5171\u8209\u8FA620\u5834\uFF0C\u6BCF\u58346\u5C0F\u6642\u3002\u589E\u52A0\u8001\u5E2B\u5C0D\u6559\u5B78\u8AB2\u7A0B\u55AE\u5143\u53CA\u4F7F\u7528\u76F8\u95DC\u5B78\u7FD2\u5957\u4EF6\u7684\u8A8D\u8B58\u3002 <br data-v-ae6f37f8><br data-v-ae6f37f8> EduAIR\u5C07\u8207\u6559\u80B2\u5C40\u5408\u4F5C\uFF0C\u5411\u5B78\u6821\u63D0\u4F9BAI\u6559\u5B78\u5957\u4EF6 - CUHK iCar\u53CACUHK iPort\uFF0C\u672C\u516C\u53F8\u4EA6\u6703\u6D3E\u51FA\u6280\u8853\u5C08\u624D\u64D4\u4EFB\u57F9\u8A13\u8AB2\u7A0B\u7684\u8B1B\u5E2B\u3002 <br data-v-ae6f37f8><br data-v-ae6f37f8><a style="${ssrRenderStyle({ "text-decoration-color": "blue", "color": "blue" })}" target="_blank" href="https://tcs.edb.gov.hk/tcs/admin/courses/previewCourse/forPortal.htm?courseId=CSD020240360&amp;lang=zh" data-v-ae6f37f8>\u6559\u5E2B\u57F9\u8A13\u8AB2\u7A0B\u8A73\u60C5</a></div></div></div><div style="${ssrRenderStyle({ "width": "100%", "padding": "10px 20px", "max-width": "1024px" })}" data-v-ae6f37f8><div class="font-big" style="${ssrRenderStyle({ "align-self": "flex-start", "padding": "20px 0", "font-weight": "600" })}" data-v-ae6f37f8>\u6D3B\u52D5\u56DE\u9867 \u{1F5D3}\uFE0F</div><div style="${ssrRenderStyle({ "display": "flex", "flex-wrap": "wrap", "row-gap": "20px", "max-width": "1024px" })}" data-v-ae6f37f8>`);
  _push(ssrRenderComponent(_component_Gallery2, {
    title: "\u521D\u4E2D\u4EBA\u5DE5\u667A\u80FD\u8AB2\u7A0B\u55AE\u5143\u61C9\u7528\u5BE6\u8E10\u5DE5\u4F5C\u574A\uFF08\u517120\u5834\uFF09",
    subtitle: "\u9999\u6E2F\u6559\u80B2\u5C40STEAM\u6559\u80B2\u5B78\u8207\u6559\u548C\u8A55\u4F30\u7CFB\u5217",
    url: "/event/4",
    image: "event/event4/1.jpg",
    date: "2023 \u5E74 9 \u6708\u8D77"
  }, null, _parent));
  _push(ssrRenderComponent(_component_Gallery2, {
    title: "\u300C\u5371\u6A5F\u89E3\u9664\u300D\u5DE5\u4F5C\u574A",
    subtitle: "\u4EBA\u5DE5\u667A\u80FD\u6559\u80B2\u53CA\u63A2\u7D22\u5BE6\u9A57\u5BA4\u958B\u653E\u65E5",
    url: "/event/1",
    image: "event/event1/2.jpg",
    date: "2023 \u5E74 8 \u6708 17 - 18 \u65E5"
  }, null, _parent));
  _push(ssrRenderComponent(_component_Gallery2, {
    title: "\u300CiCar\u9054\u4EBA\u300D\u5DE5\u4F5C\u574A",
    subtitle: "\u4EBA\u5DE5\u667A\u80FD\u6559\u80B2\u53CA\u63A2\u7D22\u5BE6\u9A57\u5BA4\u958B\u653E\u65E5",
    url: "/event/2",
    image: "event/event2/3.jpg",
    date: "2023 \u5E74 8 \u6708 17 - 18 \u65E5"
  }, null, _parent));
  _push(ssrRenderComponent(_component_Gallery2, {
    title: "\u300CiCar\u9054\u4EBA\u300D\u5DE5\u4F5C\u574A",
    subtitle: "\u300C\u667A\u300D\u70BA\u672A\u4F86\u6691\u671F\u8A13\u7DF4\u71DF 2023",
    url: "/event/3",
    image: "event/event3/2.jpg",
    date: "2023 \u5E74 7 \u6708 18 - 19 \u65E5"
  }, null, _parent));
  _push(`</div></div></div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/news.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const news = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-ae6f37f8"]]);

export { news as default };
//# sourceMappingURL=news-42274b2e.mjs.map
