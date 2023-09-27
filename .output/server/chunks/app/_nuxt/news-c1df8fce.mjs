import { T as Title } from './components-9f200465.mjs';
import { _ as _export_sfc, b as __nuxt_component_0 } from '../server.mjs';
import { useSSRContext, withCtx, createTextVNode, mergeProps } from 'vue';
import { ssrRenderComponent, ssrRenderStyle, ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderSlot, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
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
    images: {
      type: Array,
      default: function() {
        return ["logo.png", "logo.png", "logo.png", "logo.png", "logo.png"];
      }
    }
  },
  data() {
    return {
      url: null
    };
  },
  methods: {
    setImage(url) {
      this.url = url;
    }
  },
  mounted() {
    this.setImage(this.images[0]);
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_img = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "container",
    style: {}
  }, _attrs))} data-v-f9380187><div style="${ssrRenderStyle({ "display": "flex", "height": "300px" })}" data-v-f9380187><div style="${ssrRenderStyle({ "color": "white", "display": "flex", "justify-content": "space-between", "flex-direction": "row", "width": "100%", "flex": "1" })}" data-v-f9380187><div class="imageDisplayer" style="${ssrRenderStyle({})}" data-v-f9380187><img${ssrRenderAttr("src", $data.url)} style="${ssrRenderStyle({ "width": "100%", "height": "100%", "border": "1px solid white", "object-fit": "cover" })}" data-v-f9380187></div></div><div class="pc" style="${ssrRenderStyle({ "width": "100%", "height": "450px", "padding": "0 20px" })}" data-v-f9380187><div class="font-middle" style="${ssrRenderStyle({ "color": "#6d0e77", "font-weight": "600", "padding": "0 0 0px 0" })}" data-v-f9380187>${ssrInterpolate($props.title)}</div>`);
  if ($props.subtitle) {
    _push(`<div class="font-small" style="${ssrRenderStyle({ "color": "#6d0e77", "font-weight": "600", "padding": "0 0 10px 0" })}" data-v-f9380187>${ssrInterpolate($props.subtitle)}</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="font-mini" style="${ssrRenderStyle({ "line-height": "30px" })}" data-v-f9380187>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></div></div><div style="${ssrRenderStyle({ "display": "flex", "flex-direction": "row", "justify-content": "space-between", "width": "100%" })}" data-v-f9380187><!--[-->`);
  ssrRenderList($props.images, (image) => {
    _push(`<div style="${ssrRenderStyle({ "aspect-ratio": "4/3", "overflow": "hidden" })}" class="${ssrRenderClass([{ active: $data.url == image }, "image-container2"])}" data-v-f9380187>`);
    _push(ssrRenderComponent(_component_nuxt_img, {
      src: image,
      style: { "height": "100%", "object-fit": "cover" }
    }, null, _parent));
    _push(`<div data-v-f9380187></div></div>`);
  });
  _push(`<!--]--></div><div class="mobile" style="${ssrRenderStyle({ "width": "100%", "padding": "10px" })}" data-v-f9380187><div class="font-middle" style="${ssrRenderStyle({ "color": "#6d0e77", "font-weight": "600", "padding": "10px 0 0px 0" })}" data-v-f9380187>${ssrInterpolate($props.title)}</div>`);
  if ($props.subtitle) {
    _push(`<div class="font-small" style="${ssrRenderStyle({ "color": "#6d0e77", "font-weight": "600", "padding": "0 0 10px 0" })}" data-v-f9380187>${ssrInterpolate($props.subtitle)}</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="font-mini" style="${ssrRenderStyle({ "line-height": "30px" })}" data-v-f9380187>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Gallery.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-f9380187"]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Title = Title;
  const _component_Gallery = __nuxt_component_1;
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
  _push(`<div class="pageContent-container" style="${ssrRenderStyle({ "max-width": "100%" })}" data-v-6588fa5b><div class="banner" data-v-6588fa5b><label class="title font-big" data-v-6588fa5b> \u6700\u65B0\u6D88\u606F </label></div><div class="text" data-v-6588fa5b><div class="border" data-v-6588fa5b><div class="font-middle" style="${ssrRenderStyle({ "color": "#6d0e77", "font-weight": "600", "padding": "0 0 0px 0" })}" data-v-6588fa5b><a style="${ssrRenderStyle({ "text-decoration-color": "blue", "color": "blue" })}" target="_blank" href="https://tcs.edb.gov.hk/tcs/admin/courses/previewCourse/forPortal.htm?courseId=CSD020240360&amp;lang=zh" data-v-6588fa5b> [\u7ACB\u5373\u5831\u540D] </a> \u{1F525}STEAM\u6559\u80B2\u5B78\u8207\u6559\u548C\u8A55\u4F30\u7CFB\u5217 </div><div class="font-small" style="${ssrRenderStyle({ "color": "#6d0e77", "font-weight": "600", "padding": "0 0 15px 0" })}" data-v-6588fa5b>\u521D\u4E2D\u4EBA\u5DE5\u667A\u80FD\u8AB2\u7A0B\u55AE\u5143\u61C9\u7528\u5BE6\u8E10\u5DE5\u4F5C\u574A</div><div class="font-mini" style="${ssrRenderStyle({ "line-height": "30px" })}" data-v-6588fa5b> \u9999\u6E2F\u6559\u80B2\u5C40\u65BC\u4ECA\u5E746\u6708\u63A8\u51FA\u300C\u521D\u4E2D\u4EBA\u5DE5\u667A\u80FD\u8AB2\u7A0B\u55AE\u5143\u300D\uFF0C\u5B78\u6821\u9700\u8981\u6BCF\u5E74\u5B89\u6392\u7D0410\u81F314\u5C0F\u6642\u6559\u6388\u76F8\u95DC\u5167\u5BB9\uFF0C\u8B93\u5B78\u751F\u80FD\u5F9E\u5C0F\u4E86\u89E3AI\uFF0C\u57F9\u990A\u53CA\u52A0\u5F37\u4ED6\u5011\u5B78\u7FD2\u5275\u65B0\u79D1\u6280\u7684\u8208\u8DA3\u53CA\u80FD\u529B\u3002 <br data-v-6588fa5b><br data-v-6588fa5b> \u6559\u80B2\u5C40\u65BC\u672C\u5E749\u6708\u5E95\u8D77\u8209\u8FA6\u76F8\u95DC\u7684\u6559\u5E2B\u57F9\u8A13\u8AB2\u7A0B(STEAM\u6559\u80B2\u5B78\u8207\u6559\u548C\u8A55\u4F30\u7CFB\u5217\uFF1A\u521D\u4E2D\u4EBA\u5DE5\u667A\u80FD\u8AB2\u7A0B\u55AE\u5143\u61C9\u7528\u5BE6\u8E10\u5DE5\u4F5C\u574A)\uFF0C\u9080\u8ACB500\u5BB6\u5B78\u6821\u51711000\u4F4D\u4E2D\u5B78\u8001\u5E2B\u53C3\u8207\u5DE5\u4F5C\u574A\uFF0C\u5DE5\u4F5C\u574A\u5408\u5171\u8209\u8FA620\u5834\uFF0C\u6BCF\u58346\u5C0F\u6642\u3002\u589E\u52A0\u8001\u5E2B\u5C0D\u6559\u5B78\u8AB2\u7A0B\u55AE\u5143\u53CA\u4F7F\u7528\u76F8\u95DC\u5B78\u7FD2\u5957\u4EF6\u7684\u8A8D\u8B58\u3002 <br data-v-6588fa5b><br data-v-6588fa5b> EduAIR\u5C07\u8207\u6559\u80B2\u5C40\u5408\u4F5C\uFF0C\u5411\u5B78\u6821\u63D0\u4F9BAI\u6559\u5B78\u5957\u4EF6-CUHK iCar\u53CACUHK iPort\uFF0C\u672C\u516C\u53F8\u4EA6\u6703\u6D3E\u51FA\u6280\u8853\u5C08\u624D\u64D4\u4EFB\u57F9\u8A13\u8AB2\u7A0B\u7684\u8B1B\u5E2B\u3002 <br data-v-6588fa5b><br data-v-6588fa5b><a style="${ssrRenderStyle({ "text-decoration-color": "blue", "color": "blue" })}" target="_blank" href="https://tcs.edb.gov.hk/tcs/admin/courses/previewCourse/forPortal.htm?courseId=CSD020240360&amp;lang=zh" data-v-6588fa5b>\u6559\u5E2B\u57F9\u8A13\u8AB2\u7A0B\u8A73\u60C5</a></div></div></div>`);
  _push(ssrRenderComponent(_component_Gallery, {
    title: "\u300C\u5371\u6A5F\u89E3\u9664\u300D\u5DE5\u4F5C\u574A",
    subtitle: "\u4EBA\u5DE5\u667A\u80FD\u6559\u80B2\u53CA\u63A2\u7D22\u5BE6\u9A57\u5BA4\u958B\u653E\u65E5",
    images: ["event/event1/3.jpg", "event/event1/2.jpg", "event/event1/1.jpg", "event/event1/4.jpg", "event/event1/5.jpg"]
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` EduAIR\u8207\u4E2D\u5927\u8CFD\u99AC\u6703\u300C\u667A\u300D\u70BA\u672A\u4F86\u8A08\u5283\u65BC2023\u5E748\u670817\u53CA18\u65E5\u5728\u9999\u6E2F\u4E2D\u6587\u5927\u5B78\u5408\u8FA6\u4EBA\u5DE5\u667A\u80FD\u6559\u80B2\u53CA\u63A2\u7D22\u5BE6\u9A57\u5BA4\u958B\u653E\u65E5\uFF0C\u6709\u4E8C\u5341\u591A\u500B\u4E0D\u540C\u7684AI\u6A5F\u68B0\u4EBA\u5C55\u54C1\u4F9B\u516C\u773E\u53C3\u89C0\uFF0C\u4F8B\u5982AI\u6CB9\u756B\u6A5F\u3001AI\u66F8\u6CD5\u6A5F\u68B0\u4EBA\u3001AI\u6C23\u588A\u7403\u6A5F\u68B0\u4EBA\u3001AI\u92FC\u7434\u4E8C\u91CD\u594F\u7B49\u3002\u53E6\u5916\u9084\u8209\u8FA6\u4E864\u57F8\u300C\u5371\u6A5F\u89E3\u9664\u300D\u5DE5\u4F5C\u574A\uFF0C\u8D85\u904E60\u4F4D\u516C\u773E\u4EE5\u62C6\u5F48\u5C08\u54E1\u7684\u8EAB\u5206\u62C6\u89E3\u6A21\u64EC\u5B9A\u6642\u70B8\u5F48\uFF0C\u4ED6\u5011\u4F7F\u7528\u5404\u7A2E\u5DE5\u7A0B\u5DE5\u5177\u8207\u5718\u968A\u5408\u4F5C\u5171\u540C\u89E3\u9664\u5371\u6A5F\u3002 `);
      } else {
        return [
          createTextVNode(" EduAIR\u8207\u4E2D\u5927\u8CFD\u99AC\u6703\u300C\u667A\u300D\u70BA\u672A\u4F86\u8A08\u5283\u65BC2023\u5E748\u670817\u53CA18\u65E5\u5728\u9999\u6E2F\u4E2D\u6587\u5927\u5B78\u5408\u8FA6\u4EBA\u5DE5\u667A\u80FD\u6559\u80B2\u53CA\u63A2\u7D22\u5BE6\u9A57\u5BA4\u958B\u653E\u65E5\uFF0C\u6709\u4E8C\u5341\u591A\u500B\u4E0D\u540C\u7684AI\u6A5F\u68B0\u4EBA\u5C55\u54C1\u4F9B\u516C\u773E\u53C3\u89C0\uFF0C\u4F8B\u5982AI\u6CB9\u756B\u6A5F\u3001AI\u66F8\u6CD5\u6A5F\u68B0\u4EBA\u3001AI\u6C23\u588A\u7403\u6A5F\u68B0\u4EBA\u3001AI\u92FC\u7434\u4E8C\u91CD\u594F\u7B49\u3002\u53E6\u5916\u9084\u8209\u8FA6\u4E864\u57F8\u300C\u5371\u6A5F\u89E3\u9664\u300D\u5DE5\u4F5C\u574A\uFF0C\u8D85\u904E60\u4F4D\u516C\u773E\u4EE5\u62C6\u5F48\u5C08\u54E1\u7684\u8EAB\u5206\u62C6\u89E3\u6A21\u64EC\u5B9A\u6642\u70B8\u5F48\uFF0C\u4ED6\u5011\u4F7F\u7528\u5404\u7A2E\u5DE5\u7A0B\u5DE5\u5177\u8207\u5718\u968A\u5408\u4F5C\u5171\u540C\u89E3\u9664\u5371\u6A5F\u3002 ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Gallery, {
    title: "\u300CiCar\u9054\u4EBA\u300D\u5DE5\u4F5C\u574A",
    subtitle: "\u4EBA\u5DE5\u667A\u80FD\u6559\u80B2\u53CA\u63A2\u7D22\u5BE6\u9A57\u5BA4\u958B\u653E\u65E5",
    images: ["event/event2/1.jpg", "event/event2/2.jpg", "event/event2/3.jpg", "event/event2/4.jpg", "event/event2/5.jpg"]
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` EduAIR\u8207\u4E2D\u5927\u8CFD\u99AC\u6703\u300C\u667A\u300D\u70BA\u672A\u4F86\u8A08\u5283\u65BC2023\u5E748\u670817\u53CA18\u65E5\u5728\u9999\u6E2F\u4E2D\u6587\u5927\u5B78\u5408\u8FA6\u4EBA\u5DE5\u667A\u80FD\u6559\u80B2\u53CA\u63A2\u7D22\u5BE6\u9A57\u5BA4\u958B\u653E\u65E5\uFF0C\u6709\u4E8C\u5341\u591A\u500B\u4E0D\u540C\u7684AI\u6A5F\u68B0\u4EBA\u5C55\u54C1\u4F9B\u516C\u773E\u53C3\u89C0\uFF0C\u4F8B\u5982AI\u6CB9\u756B\u6A5F\u3001AI\u66F8\u6CD5\u6A5F\u68B0\u4EBA\u3001AI\u6C23\u588A\u7403\u6A5F\u68B0\u4EBA\u3001AI\u92FC\u7434\u4E8C\u91CD\u594F\u7B49\u7B49\u3002\u9664\u53C3\u89C0\u4E4B\u5916\uFF0C\u9084\u8209\u8FA6\u4E864\u5834\u300CiCar\u9054\u4EBA\u300D\u5DE5\u4F5C\u574A\uFF0C\u8D85\u904E90\u4F4D\u516C\u773E\u5229\u7528\u6211\u5011\u7814\u767C\u7684CUHK iCar\u4F5C\u6559\u5B78\u5957\u4EF6\uFF0C\u900F\u904E\u7DE8\u7A0B\u53CA\u7A0B\u5F0F\u8A2D\u8A08\u908F\u8F2F\uFF0C\u6210\u529F\u5B8C\u6210\u4EBA\u9762\u8B58\u5225\u8FFD\u8E64\u7684AI\u5BE6\u9A57\u3002 `);
      } else {
        return [
          createTextVNode(" EduAIR\u8207\u4E2D\u5927\u8CFD\u99AC\u6703\u300C\u667A\u300D\u70BA\u672A\u4F86\u8A08\u5283\u65BC2023\u5E748\u670817\u53CA18\u65E5\u5728\u9999\u6E2F\u4E2D\u6587\u5927\u5B78\u5408\u8FA6\u4EBA\u5DE5\u667A\u80FD\u6559\u80B2\u53CA\u63A2\u7D22\u5BE6\u9A57\u5BA4\u958B\u653E\u65E5\uFF0C\u6709\u4E8C\u5341\u591A\u500B\u4E0D\u540C\u7684AI\u6A5F\u68B0\u4EBA\u5C55\u54C1\u4F9B\u516C\u773E\u53C3\u89C0\uFF0C\u4F8B\u5982AI\u6CB9\u756B\u6A5F\u3001AI\u66F8\u6CD5\u6A5F\u68B0\u4EBA\u3001AI\u6C23\u588A\u7403\u6A5F\u68B0\u4EBA\u3001AI\u92FC\u7434\u4E8C\u91CD\u594F\u7B49\u7B49\u3002\u9664\u53C3\u89C0\u4E4B\u5916\uFF0C\u9084\u8209\u8FA6\u4E864\u5834\u300CiCar\u9054\u4EBA\u300D\u5DE5\u4F5C\u574A\uFF0C\u8D85\u904E90\u4F4D\u516C\u773E\u5229\u7528\u6211\u5011\u7814\u767C\u7684CUHK iCar\u4F5C\u6559\u5B78\u5957\u4EF6\uFF0C\u900F\u904E\u7DE8\u7A0B\u53CA\u7A0B\u5F0F\u8A2D\u8A08\u908F\u8F2F\uFF0C\u6210\u529F\u5B8C\u6210\u4EBA\u9762\u8B58\u5225\u8FFD\u8E64\u7684AI\u5BE6\u9A57\u3002 ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Gallery, {
    title: "\u300CiCar\u9054\u4EBA\u300D\u5DE5\u4F5C\u574A",
    subtitle: "\u300C\u667A\u300D\u70BA\u672A\u4F86\u6691\u671F\u8A13\u7DF4\u71DF 2023",
    images: ["event/event3/4.jpg", "event/event3/2.jpg", "event/event3/3.jpg", "event/event3/1.jpg", "event/event3/5.jpg"]
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` EduAIR \u8207\u4E2D\u5927\u8CFD\u99AC\u6703\u300C\u667A\u300D\u70BA\u672A\u4F86\u8A08\u5283\u65BC2023\u5E747\u670818\u81F319\u65E5\u5728\u9999\u6E2F\u4E2D\u6587\u5927\u5B78\u5408\u8FA6\u4E86\u300C\u667A\u300D\u70BA\u672A\u4F86\u6691\u671F\u8A13\u7DF4\u71DF 2023\uFF0C\u77ED\u77ED\u5169\u5929\u8209\u8FA6\u4E8620\u5834\u8C50\u5BCC\u7CBE\u5F69\u7684\u6D3B\u52D5\uFF0C\u7576\u4E2D\u5305\u62EC\u300CAI\u57FA\u790E\u73ED\u300D\uFF0C\u300CPython \u7DE8\u7A0B\u73ED\u300D\uFF0C\u300C\u53C3\u89C0AI\u5BE6\u9A57\u5BA4\u300D\u53CA\u300CiCar\u9054\u4EBA\u300D\u7B49\uFF0C\u5176\u4E2D\u5728\u300CiCar\u9054\u4EBA\u300D\u4F7F\u7528\u4E86\u6211\u5011\u7814\u767C\u7684CUHK iCar \uFF0C\u4E26\u541198\u540D\u9999\u6E2F\u521D\u4E2D\u5B78\u751F\u6559\u6388\u7DE8\u7A0B\u53CA\u7A0B\u5F0F\u8A2D\u8A08\u908F\u8F2F\uFF0C\u6240\u6709\u5B78\u751F\u90FD\u6210\u529F\u5B8C\u6210\u4EBA\u9762\u8B58\u5225\u8FFD\u8E64\u53CA\u9053\u5FB7\u56F0\u5883\u7684AI\u5BE6\u9A57\uFF0C\u4F7F\u4ED6\u5011\u5C0DAI\u6709\u66F4\u597D\u7684\u8A8D\u8B58\u3002 `);
      } else {
        return [
          createTextVNode(" EduAIR \u8207\u4E2D\u5927\u8CFD\u99AC\u6703\u300C\u667A\u300D\u70BA\u672A\u4F86\u8A08\u5283\u65BC2023\u5E747\u670818\u81F319\u65E5\u5728\u9999\u6E2F\u4E2D\u6587\u5927\u5B78\u5408\u8FA6\u4E86\u300C\u667A\u300D\u70BA\u672A\u4F86\u6691\u671F\u8A13\u7DF4\u71DF 2023\uFF0C\u77ED\u77ED\u5169\u5929\u8209\u8FA6\u4E8620\u5834\u8C50\u5BCC\u7CBE\u5F69\u7684\u6D3B\u52D5\uFF0C\u7576\u4E2D\u5305\u62EC\u300CAI\u57FA\u790E\u73ED\u300D\uFF0C\u300CPython \u7DE8\u7A0B\u73ED\u300D\uFF0C\u300C\u53C3\u89C0AI\u5BE6\u9A57\u5BA4\u300D\u53CA\u300CiCar\u9054\u4EBA\u300D\u7B49\uFF0C\u5176\u4E2D\u5728\u300CiCar\u9054\u4EBA\u300D\u4F7F\u7528\u4E86\u6211\u5011\u7814\u767C\u7684CUHK iCar \uFF0C\u4E26\u541198\u540D\u9999\u6E2F\u521D\u4E2D\u5B78\u751F\u6559\u6388\u7DE8\u7A0B\u53CA\u7A0B\u5F0F\u8A2D\u8A08\u908F\u8F2F\uFF0C\u6240\u6709\u5B78\u751F\u90FD\u6210\u529F\u5B8C\u6210\u4EBA\u9762\u8B58\u5225\u8FFD\u8E64\u53CA\u9053\u5FB7\u56F0\u5883\u7684AI\u5BE6\u9A57\uFF0C\u4F7F\u4ED6\u5011\u5C0DAI\u6709\u66F4\u597D\u7684\u8A8D\u8B58\u3002 ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/news.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const news = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-6588fa5b"]]);

export { news as default };
//# sourceMappingURL=news-c1df8fce.mjs.map
