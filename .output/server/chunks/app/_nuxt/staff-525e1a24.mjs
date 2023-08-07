import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import { T as Title } from './components-c34ba2a2.mjs';
import { useSSRContext, withCtx, createTextVNode, createVNode, mergeProps } from 'vue';
import { ssrRenderComponent, ssrRenderStyle, ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
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
import 'defu';
import 'ohash';
import 'ufo';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'http-graceful-shutdown';
import 'unctx';
import 'vue-router';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';

const _imports_0 = "" + publicAssetsURL("image/youtube.png");
const _sfc_main$1 = {
  name: "TextBox",
  props: ["title", "image", "color", "youtube"],
  methods: {}
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "staff-container" }, _attrs))} data-v-8172962f><div class="staff-image-container" data-v-8172962f><img${ssrRenderAttr("src", $props.image)} data-v-8172962f></div><div class="staff-description-container" data-v-8172962f><label class="subTitle staffSubTitle" style="${ssrRenderStyle({ "border-bottom": "3px solid " + $props.color })}" data-v-8172962f>${ssrInterpolate($props.title)} <a${ssrRenderAttr("href", $props.youtube)} target="_blank" data-v-8172962f>`);
  if ($props.youtube) {
    _push(`<img${ssrRenderAttr("src", _imports_0)} data-v-8172962f>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</a></label><div class="description" data-v-8172962f>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/StaffNameCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-8172962f"]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Title = Title;
  const _component_StaffNameCard = __nuxt_component_1;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Title, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u516C\u53F8\u67B6\u69CB`);
      } else {
        return [
          createTextVNode("\u516C\u53F8\u67B6\u69CB")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="pageContent-container"><div class="text-container" style="${ssrRenderStyle({ "width": "100%" })}"><label class="pageTitle">\u8463\u4E8B\u5C40\u6210\u54E1</label><br><div class="pageDescription">EduAIR\u7531\u4E00\u773E\u5177\u8C50\u5BCC\u79D1\u6280\u6559\u80B2\u7D93\u9A57\u7684\u7814\u7A76\u8005\u7D44\u6210\uFF0C\u81F4\u529B\u63A8\u52D5\u9999\u6E2FAI/STEAM\u6559\u80B2\u767C\u5C55\u3002</div></div><div class="text-container" style="${ssrRenderStyle({ "display": "flex", "flex-direction": "row", "padding": "0 0 10px 0", "justify-content": "space-around", "flex-wrap": "wrap", "flex": "1" })}">`);
  _push(ssrRenderComponent(_component_StaffNameCard, {
    image: "image/staff/icon1_1200_circle.jpg",
    title: "\u8499\u7F8E\u73B2\u6559\u6388",
    color: "purple"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` \u2022\u2003\u9999\u6E2F\u4E2D\u6587\u5927\u5B78\u79A4\u6C38\u660E\u7CFB\u7D71\u5DE5\u7A0B\u8207\u5DE5\u7A0B\u7BA1\u7406\u5B78\u6559\u6388<br${_scopeId}> \u2022\u2003\u9999\u6E2F\u4E2D\u6587\u5927\u5B78\u535A\u667A\u611F\u77E5\u4EA4\u4E92\u7814\u7A76\u4E2D\u5FC3\u4E3B\u4EFB<br${_scopeId}> \u2022\u2003\u4E2D\u5927\u8CFD\u99AC\u6703\u300C\u667A\u300D\u70BA\u672A\u4F86\u8A08\u5283\u8A08\u5283\u526F\u8CA0\u8CAC\u4EBA\u3001\u8AB2\u7A0B\u767C\u5C55\u7D44\u4E3B\u9818\u53CA\u8A55\u4F30\u53CA\u5206\u6790\u7D44\u526F\u4E3B\u9818<br${_scopeId}> \u2022\u2003\u7F8E\u570B\u9EBB\u7701\u7406\u5DE5\u5B78\u9662\u5B78\u58EB\u3001\u78A9\u58EB\u53CA\u535A\u58EB<br${_scopeId}> \u2022\u2003\u7814\u7A76\u9818\u57DF\uFF1A\u591A\u8A9E\u8A00\u8A9E\u97F3\u3001\u8A9E\u8A00\u8655\u7406\u3001\u4EBA\u6A5F\u4E92\u52D5\u6A21\u578B\u3001\u5927\u6578\u64DA\u5206\u6790\u7B49<br${_scopeId}>`);
      } else {
        return [
          createTextVNode(" \u2022\u2003\u9999\u6E2F\u4E2D\u6587\u5927\u5B78\u79A4\u6C38\u660E\u7CFB\u7D71\u5DE5\u7A0B\u8207\u5DE5\u7A0B\u7BA1\u7406\u5B78\u6559\u6388"),
          createVNode("br"),
          createTextVNode(" \u2022\u2003\u9999\u6E2F\u4E2D\u6587\u5927\u5B78\u535A\u667A\u611F\u77E5\u4EA4\u4E92\u7814\u7A76\u4E2D\u5FC3\u4E3B\u4EFB"),
          createVNode("br"),
          createTextVNode(" \u2022\u2003\u4E2D\u5927\u8CFD\u99AC\u6703\u300C\u667A\u300D\u70BA\u672A\u4F86\u8A08\u5283\u8A08\u5283\u526F\u8CA0\u8CAC\u4EBA\u3001\u8AB2\u7A0B\u767C\u5C55\u7D44\u4E3B\u9818\u53CA\u8A55\u4F30\u53CA\u5206\u6790\u7D44\u526F\u4E3B\u9818"),
          createVNode("br"),
          createTextVNode(" \u2022\u2003\u7F8E\u570B\u9EBB\u7701\u7406\u5DE5\u5B78\u9662\u5B78\u58EB\u3001\u78A9\u58EB\u53CA\u535A\u58EB"),
          createVNode("br"),
          createTextVNode(" \u2022\u2003\u7814\u7A76\u9818\u57DF\uFF1A\u591A\u8A9E\u8A00\u8A9E\u97F3\u3001\u8A9E\u8A00\u8655\u7406\u3001\u4EBA\u6A5F\u4E92\u52D5\u6A21\u578B\u3001\u5927\u6578\u64DA\u5206\u6790\u7B49"),
          createVNode("br")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_StaffNameCard, {
    image: "image/staff/icon2_1200_circle.jpg",
    title: "\u8499\u7F8E\u73B2\u6559\u6388",
    color: "orange"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` \u2022\u2003\u9999\u6E2F\u4E2D\u6587\u5927\u5B78\u6A5F\u68B0\u8207\u81EA\u52D5\u5316\u5DE5\u7A0B\u5B78\u7CFB\u6559\u6388<br${_scopeId}> \u2022\u2003\u9999\u6E2F\u4E2D\u6587\u5927\u5B78\u6DF1\u5733\u7814\u7A76\u9662\u9662\u9577<br${_scopeId}> \u2022\u2003\u4E2D\u5927\u8CFD\u99AC\u6703\u300C\u667A\u300D\u70BA\u672A\u4F86\u8A08\u5283\u9996\u5E2D\u8CA0\u8CAC\u4EBA<br${_scopeId}> \u2022\u2003\u7F8E\u570B\u9EBB\u7701\u7406\u5DE5\u5B78\u9662\u822A\u7A7A\u822A\u5929\u78A9\u58EB\u53CA\u535A\u58EB<br${_scopeId}> \u2022\u2003\u9999\u6E2F\u4E2D\u6587\u5927\u5B78\u7269\u7406\u5B78\u5B78\u58EB<br${_scopeId}> \u2022\u2003\u7814\u7A76\u9818\u57DF\uFF1A\u667A\u80FD\u7CFB\u7D71\u3001\u63A7\u5236\u7CFB\u7D71\u3001\u4EBA\u9AD4\u6A5F\u80FD\u5B78\u3001\u91AB\u7642\u7528\u6A5F\u5668\u4EBA\u7B49<br${_scopeId}>`);
      } else {
        return [
          createTextVNode(" \u2022\u2003\u9999\u6E2F\u4E2D\u6587\u5927\u5B78\u6A5F\u68B0\u8207\u81EA\u52D5\u5316\u5DE5\u7A0B\u5B78\u7CFB\u6559\u6388"),
          createVNode("br"),
          createTextVNode(" \u2022\u2003\u9999\u6E2F\u4E2D\u6587\u5927\u5B78\u6DF1\u5733\u7814\u7A76\u9662\u9662\u9577"),
          createVNode("br"),
          createTextVNode(" \u2022\u2003\u4E2D\u5927\u8CFD\u99AC\u6703\u300C\u667A\u300D\u70BA\u672A\u4F86\u8A08\u5283\u9996\u5E2D\u8CA0\u8CAC\u4EBA"),
          createVNode("br"),
          createTextVNode(" \u2022\u2003\u7F8E\u570B\u9EBB\u7701\u7406\u5DE5\u5B78\u9662\u822A\u7A7A\u822A\u5929\u78A9\u58EB\u53CA\u535A\u58EB"),
          createVNode("br"),
          createTextVNode(" \u2022\u2003\u9999\u6E2F\u4E2D\u6587\u5927\u5B78\u7269\u7406\u5B78\u5B78\u58EB"),
          createVNode("br"),
          createTextVNode(" \u2022\u2003\u7814\u7A76\u9818\u57DF\uFF1A\u667A\u80FD\u7CFB\u7D71\u3001\u63A7\u5236\u7CFB\u7D71\u3001\u4EBA\u9AD4\u6A5F\u80FD\u5B78\u3001\u91AB\u7642\u7528\u6A5F\u5668\u4EBA\u7B49"),
          createVNode("br")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="text-container" style="${ssrRenderStyle({ "width": "100%" })}"><label class="pageTitle" style="${ssrRenderStyle({ "align-self": "flex-start" })}">\u6280\u8853\u5718\u968A</label></div><div class="text-container" style="${ssrRenderStyle({ "display": "flex", "flex-direction": "row", "padding": "0 0 10px 0", "justify-content": "space-around", "flex-wrap": "wrap", "flex": "1" })}">`);
  _push(ssrRenderComponent(_component_StaffNameCard, {
    image: "image/staff/Derek.jpg",
    title: "\u7AE0\u6587\u6770 Derek",
    color: "purple",
    youtube: "https://www.youtube.com/@derekcheung7857"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` \u2022\u2003\u4E2D\u5927\u8CFD\u99AC\u6703\u300C\u667A\u300D\u70BA\u672A\u4F86\u8A08\u5283\u6280\u8853\u7D93\u7406<br${_scopeId}> \u2022\u2003\u7562\u696D\u65BC\u9999\u6E2F\u4E2D\u6587\u5927\u5B78\u6A5F\u68B0\u8207\u81EA\u52D5\u5316\u5DE5\u7A0B\u5B78\u7CFB<br${_scopeId}> \u2022\u2003\u66FE\u4EFB\u672C\u5730\u534A\u5C0E\u9AD4\u516C\u53F8\u79D1\u7814\u5DE5\u4F5C<br${_scopeId}> \u2022\u2003AI\u6559\u80B2\uFF1A\u70BA\u4E2D\u5C0F\u5B78\u6559\u5E2B\u548C\u5B78\u751F\u63D0\u4F9BAI\u57F9\u8A13\uFF1B\u7814\u767C\u9069\u7528\u65BC\u4E2D\u5C0F\u5B78\u6559\u80B2\u7684AI\u5B78\u7FD2\u5957\u4EF6\u53CA\u5C55\u54C1\uFF0C\u73FE\u501F\u51FA\u4E88\u4E2D\u5927AI\u6559\u80B2\u53CA\u63A2\u7D22\u5BE6\u9A57\u5BA4\u5C55\u51FA<br${_scopeId}> \u2022\u2003\u7814\u7A76\u9818\u57DF\uFF1A\u5C08\u6CE8AI\u5728\u85DD\u8853\u65B9\u9762\u7684\u7814\u7A76\uFF0C\u66FE\u958B\u767C\u6CB9\u756B\u53CA\u66F8\u6CD5\u6A5F\u68B0\u4EBA\u7B49<br${_scopeId}>`);
      } else {
        return [
          createTextVNode(" \u2022\u2003\u4E2D\u5927\u8CFD\u99AC\u6703\u300C\u667A\u300D\u70BA\u672A\u4F86\u8A08\u5283\u6280\u8853\u7D93\u7406"),
          createVNode("br"),
          createTextVNode(" \u2022\u2003\u7562\u696D\u65BC\u9999\u6E2F\u4E2D\u6587\u5927\u5B78\u6A5F\u68B0\u8207\u81EA\u52D5\u5316\u5DE5\u7A0B\u5B78\u7CFB"),
          createVNode("br"),
          createTextVNode(" \u2022\u2003\u66FE\u4EFB\u672C\u5730\u534A\u5C0E\u9AD4\u516C\u53F8\u79D1\u7814\u5DE5\u4F5C"),
          createVNode("br"),
          createTextVNode(" \u2022\u2003AI\u6559\u80B2\uFF1A\u70BA\u4E2D\u5C0F\u5B78\u6559\u5E2B\u548C\u5B78\u751F\u63D0\u4F9BAI\u57F9\u8A13\uFF1B\u7814\u767C\u9069\u7528\u65BC\u4E2D\u5C0F\u5B78\u6559\u80B2\u7684AI\u5B78\u7FD2\u5957\u4EF6\u53CA\u5C55\u54C1\uFF0C\u73FE\u501F\u51FA\u4E88\u4E2D\u5927AI\u6559\u80B2\u53CA\u63A2\u7D22\u5BE6\u9A57\u5BA4\u5C55\u51FA"),
          createVNode("br"),
          createTextVNode(" \u2022\u2003\u7814\u7A76\u9818\u57DF\uFF1A\u5C08\u6CE8AI\u5728\u85DD\u8853\u65B9\u9762\u7684\u7814\u7A76\uFF0C\u66FE\u958B\u767C\u6CB9\u756B\u53CA\u66F8\u6CD5\u6A5F\u68B0\u4EBA\u7B49"),
          createVNode("br")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_StaffNameCard, {
    image: "image/staff/2.jpg",
    title: "\u5718\u968A\u6210\u54E1",
    color: "orange"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` \u2022\u2003\u6280\u8853\u526F\u7D93\u7406\uFF1AMr. Michael CHUI<br${_scopeId}> \u2022\u2003\u7522\u54C1\u5DE5\u7A0B\u5E2B\uFF1AMr. Heison SO<br${_scopeId}> \u2022\u2003\u8EDF\u4EF6\u5DE5\u7A0B\u5E2B\uFF1AMr. Ben CHAN<br${_scopeId}>`);
      } else {
        return [
          createTextVNode(" \u2022\u2003\u6280\u8853\u526F\u7D93\u7406\uFF1AMr. Michael CHUI"),
          createVNode("br"),
          createTextVNode(" \u2022\u2003\u7522\u54C1\u5DE5\u7A0B\u5E2B\uFF1AMr. Heison SO"),
          createVNode("br"),
          createTextVNode(" \u2022\u2003\u8EDF\u4EF6\u5DE5\u7A0B\u5E2B\uFF1AMr. Ben CHAN"),
          createVNode("br")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/staff.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const staff = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { staff as default };
//# sourceMappingURL=staff-525e1a24.mjs.map
