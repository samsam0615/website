import { b as buildAssetsURL } from '../../handlers/renderer.mjs';
import { H as Head, T as Title } from './components-c34ba2a2.mjs';
import { useSSRContext, withCtx, createTextVNode, createVNode, mergeProps } from 'vue';
import { ssrRenderComponent, ssrRenderStyle, ssrRenderAttr, ssrRenderAttrs, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';
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

const _sfc_main$1 = {
  name: "PictureCard",
  props: ["title", "symbol", "text"]
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "card-wrapper",
    onclick: ""
  }, _attrs))}><div class="card"><div class="text-overlay"><label class="back-h2">${ssrInterpolate($props.title)}</label><span class="material-symbols-outlined">${ssrInterpolate($props.symbol)}</span></div><div class="purchase-button-container"><span>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</span></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PictureCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _imports_0 = "" + buildAssetsURL("timeline.1dea26a8.png");
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Head = Head;
  const _component_Title = Title;
  const _component_PictureCard = __nuxt_component_2;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Head, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Title, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`\u516C\u53F8\u7C21\u4ECB`);
            } else {
              return [
                createTextVNode("\u516C\u53F8\u7C21\u4ECB")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Title, null, {
            default: withCtx(() => [
              createTextVNode("\u516C\u53F8\u7C21\u4ECB")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="pageContent-container"><div class="text-container"><label class="pageTitle">\u516C\u53F8\u7C21\u4ECB</label><br><div class="pageDescription">\u611B\u52D5\u667A\u6559\u80B2\u7CFB\u7D71\u6709\u9650\u516C\u53F8\u7531\u9999\u6E2F\u4E2D\u6587\u5927\u5B78\u521D\u5275\u7A2E\u5B50\u57FA\u91D1\u555F\u52D5\uFF0C\u662F\u4E00\u5BB6\u975E\u725F\u5229\u6A5F\u69CB\uFF0C\u8463\u4E8B\u6703\u6210\u54E1\u70BA\u9999\u6E2F\u4E2D\u6587\u5927\u5B78\u6DF1\u5733\u7814\u7A76\u9662\u9662\u9577\u4EFB\u63DA\u6559\u6388\u548C\u7CFB\u7D71\u5DE5\u7A0B\u8207\u5DE5\u7A0B\u7BA1\u7406\u5B78\u8499\u7F8E\u73B2\u6559\u6388\uFF0C\u81F4\u529B\u65BC\u4EE5\u6559\u80B2\u70BA\u4E3B\u5C0E\uFF0C\u63A8\u52D5\u5E74\u8F15\u4EBA\u5C0DAI\u53CASTEAM\u7684\u5B78\u7FD2\u548C\u8A8D\u77E5\uFF0C\u5E6B\u52A9\u4ED6\u5011\u5728\u76F8\u95DC\u9818\u57DF\u4E2D\u5BE6\u73FE\u81EA\u5DF1\u7684\u5922\u60F3\u548C\u62B1\u8CA0\u3002</div></div><div class="text-container"><label class="subTitle">EduAIR \u7684\u670D\u52D9<br></label><br><div class="pageDescription">\u70BA\u5BE6\u73FE\u4E0A\u8FF0\u76EE\u6A19\uFF0CEduAIR\u63D0\u4F9B\u591A\u5143\u5316\u7684\u670D\u52D9\uFF0C\u5305\u62EC\u8209\u8FA6\u6559\u80B2\u6D3B\u52D5\u3001\u5230\u6821\u670D\u52D9\u3001\u7814\u767C\u6559\u5B78\u5957\u4EF6\u3001AI/STEAM \u5BE6\u9A57\u5BA4\u8A2D\u8A08\u53CA\u88DD\u4FEE\u7B49\u3002EduAIR\u81F4\u529B\u69CB\u5EFA\u4E00\u500B\u5171\u4EAB\u5B78\u7FD2\u7684\u5E73\u53F0\uFF0C\u5E6B\u52A9\u5B78\u751F\u9032\u4E00\u6B65\u4E86\u89E3AI\u548CSTEAM\u3002</div> <br><div class="pageDescription" style="${ssrRenderStyle({ "padding-bottom": "40px", "align-self": "flex-end" })}"><div style="${ssrRenderStyle({ "display": "flex", "flex-direction": "column" })}"><label style="${ssrRenderStyle({ "font-weight": "800", "margin-bottom": "15px", "font-size": "24px" })}"> \u63D0\u4F9B\u6559\u80B2\u6D3B\u52D5\u548C\u5230\u6821\u670D\u52D9 </label> EduAIR\u7684\u8AB2\u7A0B\u6DB5\u84CB\u5404\u500B\u5E74\u9F61\u5C64\uFF0C\u5305\u62EC\u5E7C\u5152\u3001\u5C0F\u5B78\u548C\u4E2D\u5B78\u751F\uFF0C\u70BA\u4E0D\u540C\u5E74\u9F61\u5C64\u7684\u5B78\u751F\u63D0\u4F9B\u6700\u5408\u9069\u7684\u5B78\u7FD2\u9AD4\u9A57\u3002\u6B64\u5916\uFF0CEduAIR\u8209\u8FA6\u5DE5\u4F5C\u574A\u3001\u6BD4\u8CFD\u7B49\u5404\u985E\u6D3B\u52D5\uFF0C\u4EE5\u6FC0\u767C\u5B78\u751F\u7684\u5B78\u7FD2\u8208\u8DA3\u548C\u5275\u9020\u529B\u3002 </div><br><div style="${ssrRenderStyle({ "display": "flex", "flex-direction": "column", "align-self": "flex-end" })}"><label style="${ssrRenderStyle({ "font-weight": "800", "margin-bottom": "15px", "font-size": "24px" })}"> \u7814\u767C\u6559\u5B78\u5957\u4EF6\u548CAI \u5BE6\u9A57\u5BA4 <br></label> EduAIR\u6839\u64DA\u5B78\u751F\u7684\u80FD\u529B\u548C\u5B78\u7FD2\u76EE\u6A19\uFF0C\u91CF\u8EAB\u6253\u9020\u6559\u5B78\u5957\u4EF6\u548C\u5BE6\u9A57\u5BA4\uFF0C\u8B93\u5B78\u751F\u5728\u4E92\u52D5\u548C\u5BE6\u8E10\u4E2D\u66F4\u597D\u5730\u7406\u89E3\u548C\u61C9\u7528AI\u548CSTEAM\u76F8\u95DC\u77E5\u8B58\u3002 </div></div><div class="card-container-center">`);
  _push(ssrRenderComponent(_component_PictureCard, {
    title: "\u57F9\u8A13\u5DE5\u4F5C\u574A",
    symbol: "home_repair_service"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u8AB2\u5802\u5185\u5BB9\u8CBC\u8FD1\u751F\u6D3B\uFF0C\u8B93\u8001\u5E2B\u548C\u5B78\u751F\u7DCA\u8CBCAI\u7684\u6700\u65B0\u8DA8\u52E2`);
      } else {
        return [
          createTextVNode("\u8AB2\u5802\u5185\u5BB9\u8CBC\u8FD1\u751F\u6D3B\uFF0C\u8B93\u8001\u5E2B\u548C\u5B78\u751F\u7DCA\u8CBCAI\u7684\u6700\u65B0\u8DA8\u52E2")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_PictureCard, {
    title: "\u9867\u554F\u670D\u52D9",
    symbol: "support_agent"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u70BA\u5B78\u6821\u548C\u5718\u9AD4\u5EA6\u8EAB\u8A02\u9020AI\u5BE6\u9A57\u5BA4\u5C55\u54C1\u53CA\u8A13\u7DF4\u73ED`);
      } else {
        return [
          createTextVNode("\u70BA\u5B78\u6821\u548C\u5718\u9AD4\u5EA6\u8EAB\u8A02\u9020AI\u5BE6\u9A57\u5BA4\u5C55\u54C1\u53CA\u8A13\u7DF4\u73ED")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_PictureCard, {
    title: "\u5B78\u7FD2\u5957\u4EF6\u7814\u767C",
    symbol: "memory"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u8A2D\u8A08\u6613\u4E0A\u624B\uFF0C\u6DB5\u84CB\u591A\u5143\u8AB2\u984C`);
      } else {
        return [
          createTextVNode("\u8A2D\u8A08\u6613\u4E0A\u624B\uFF0C\u6DB5\u84CB\u591A\u5143\u8AB2\u984C")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="text-container"><label class="subTitle">EduAIR \u7684\u6545\u4E8B</label><br><div class="subDescription"> \u611B\u52D5\u667A\u6559\u80B2\u7CFB\u7D71\u662F\u4E00\u9593\u6559\u80B2\u79D1\u6280\u521D\u5275\u516C\u53F8\uFF0C\u6210\u7ACB\u516C\u53F8\u7684\u9999\u6E2F\u4E2D\u6587\u5927\u5B78\u7814\u7A76\u5718\u968A\u958B\u5275\u5148\u6CB3\uFF0C\u5C07AI\u8AB2\u984C\u4F5C\u7CFB\u7D71\u5F0F\u5206\u985E\uFF0C\u88FD\u4F5C\u51FA\u4E00\u5957\u6DFA\u767D\u6613\u7528\u7684\u6559\u6750\uFF0C\u52A0\u901FAI\u8AB2\u984C\u878D\u5165\u5B78\u6821\u8AB2\u7A0B\u3002 </div><br><br><img${ssrRenderAttr("src", _imports_0)} style="${ssrRenderStyle({ "width": "100%" })}"></div></div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/company.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const company = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { company as default };
//# sourceMappingURL=company-951198b3.mjs.map
