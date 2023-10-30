import { _ as _export_sfc, T as Title } from '../server.mjs';
import { useSSRContext, withCtx, createTextVNode, createVNode, mergeProps } from 'vue';
import { ssrRenderComponent, ssrRenderStyle, ssrRenderAttr, ssrRenderAttrs, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';
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

const _imports_0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAQZJREFUaEPtllEOwyAMQ+GcO9/O2YlJnRBbgWAnFZr725L42QGa0+ZP3lx/EsDdCSoBJQA6oBECDYSXKwHYQrCAEgANhJcrAdhCsMD/JnA805EfnL9ZpNZSAqXhmTwKgdYyA9QNUQhGLQpAAbEm8Uv8Sh0zQGmCNkfX1wfXEgACwRT/Tgw5hq1irN/PaIMALEl4iIcTOB0aiRu9n3H66hs4gRHEZWPSJUgD6I1TC2E9cnsJUQFmIJjiaXugdchz5r/SRDZQb20LwXb+8xvjBVCPk5d4txHyNCVshKIg6KdQlPCQPRABowQiXA69iaOBNELRjuseuNtxJaAEyA7oGCUbai63fQIvtcRIMUVMaYcAAAAASUVORK5CYII=";
const _imports_1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAPlJREFUaEPtl1EKwzAMQ5Nz7nw7Z0cHgTLoYlly24D6W9vRk0KT9rb40xfX3wxwd4JOwAmQDngLkQbS7U6AtpAc4ARIA+l2J0BbSA5wAv8M3N5t29/3V92ttyyBIX4AVkGUAPyKr4SQA5yJr4KQAszEV0DIAKLi1RASgNmen71njgIaICouWofCUACoKLQ+ApMGyIrJ9p3BpABYEWz/EQYGUC2umgMBqBYdDirmQQD7wuo7DjsPBjhCqC5ozK01BRD5vF1VY4CrnJaeA3eLps6BJ4n//q4+TRCqxwCoY+p6J6B2FJ3nBFDH1PVOQO0oOs8JoI6p65dP4AOn5kgxr0WkpAAAAABJRU5ErkJggg==";
const _sfc_main$1 = {
  name: "ExpandField",
  props: ["title", "number", "displayArrow", "isExpand"],
  data() {
    return {};
  },
  methods: {}
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "expand-field font-middle" }, _attrs))} data-v-bdebd34d><div class="expand-field-top" data-v-bdebd34d><div style="${ssrRenderStyle({ "display": "flex", "flex-direction": "row", "align-items": "center" })}" data-v-bdebd34d><div class="question" data-v-bdebd34d>${ssrInterpolate($props.number)}</div> ${ssrInterpolate($props.title)}</div>`);
  if ($props.displayArrow) {
    _push(`<div class="expand-button" data-v-bdebd34d>`);
    if (!$props.isExpand) {
      _push(`<img${ssrRenderAttr("src", _imports_0)} data-v-bdebd34d>`);
    } else {
      _push(`<img${ssrRenderAttr("src", _imports_1)} data-v-bdebd34d>`);
    }
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
  if ($props.isExpand || !$props.displayArrow) {
    _push(`<div class="expand-field-bottom" data-v-bdebd34d>`);
    ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ExpandField2.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-bdebd34d"]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Title = Title;
  const _component_ExpandField2 = __nuxt_component_1;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Title, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`[\u{1F525}\u7ACB\u5373\u5831\u540D] \u521D\u4E2D\u4EBA\u5DE5\u667A\u80FD\u8AB2\u7A0B\u55AE\u5143\u61C9\u7528\u5BE6\u8E10\u5DE5\u4F5C\u574A`);
      } else {
        return [
          createTextVNode("[\u{1F525}\u7ACB\u5373\u5831\u540D] \u521D\u4E2D\u4EBA\u5DE5\u667A\u80FD\u8AB2\u7A0B\u55AE\u5143\u61C9\u7528\u5BE6\u8E10\u5DE5\u4F5C\u574A")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="pageContent-container" style="${ssrRenderStyle({ "max-width": "100%", "width": "1024px" })}" data-v-e741d624><div style="${ssrRenderStyle({ "width": "100%", "padding": "10px 20px" })}" data-v-e741d624><div class="font-big" style="${ssrRenderStyle({ "align-self": "flex-start", "padding": "20px 0 0 0", "font-weight": "600", "color": "#6d0e77" })}" data-v-e741d624> [\u{1F525}\u7ACB\u5373\u5831\u540D] \u521D\u4E2D\u4EBA\u5DE5\u667A\u80FD\u8AB2\u7A0B\u55AE\u5143\u61C9\u7528\u5BE6\u8E10\u5DE5\u4F5C\u574A </div><div class="font-middle" style="${ssrRenderStyle({ "padding": "8px 0" })}" data-v-e741d624>\u9999\u6E2F\u6559\u80B2\u5C40STEAM\u6559\u80B2\u5B78\u8207\u6559\u548C\u8A55\u4F30\u7CFB\u5217</div><a class="font-small" style="${ssrRenderStyle({ "display": "flex", "align-items": "center", "padding": "5px 0", "color": "red", "font-weight": "600" })}" href="https://tcs.edb.gov.hk/tcs/admin/courses/previewCourse/forPortal.htm?courseId=CSD020240360&amp;lang=zh" target="_blank" data-v-e741d624><img${ssrRenderAttr("src", "/calendarred.png")} style="${ssrRenderStyle({ "width": "50px", "padding": "0 9px" })}" data-v-e741d624> \u9678\u7E8C\u63A8\u51FA \u{1F525} </a><div class="font-small" style="${ssrRenderStyle({ "display": "flex", "align-items": "center", "padding": "5px 0" })}" data-v-e741d624><img${ssrRenderAttr("src", "/location4gray.png")} style="${ssrRenderStyle({ "width": "50px", "padding": "0 9px" })}" data-v-e741d624>\u9999\u6E2F\u4E2D\u6587\u5927\u5B78</div></div><div style="${ssrRenderStyle({ "width": "100%", "padding": "20px 20px", "max-width": "1200px" })}" class="font-small" data-v-e741d624> \u9999\u6E2F\u6559\u80B2\u5C40\u65BC\u4ECA\u5E746\u6708\u63A8\u51FA\u300C\u521D\u4E2D\u4EBA\u5DE5\u667A\u80FD\u8AB2\u7A0B\u55AE\u5143\u300D\uFF0C\u5B78\u6821\u9700\u8981\u6BCF\u5E74\u5B89\u6392\u7D0410\u81F314\u5C0F\u6642\u6559\u6388\u76F8\u95DC\u5167\u5BB9\uFF0C\u8B93\u5B78\u751F\u80FD\u5F9E\u5C0F\u4E86\u89E3AI\uFF0C\u57F9\u990A\u53CA\u52A0\u5F37\u4ED6\u5011\u5B78\u7FD2\u5275\u65B0\u79D1\u6280\u7684\u8208\u8DA3\u53CA\u80FD\u529B\u3002 <br data-v-e741d624><br data-v-e741d624> \u6559\u80B2\u5C40\u65BC\u672C\u5E749\u6708\u5E95\u8D77\u8209\u8FA6\u76F8\u95DC\u7684\u6559\u5E2B\u57F9\u8A13\u8AB2\u7A0B(STEAM\u6559\u80B2\u5B78\u8207\u6559\u548C\u8A55\u4F30\u7CFB\u5217\uFF1A\u521D\u4E2D\u4EBA\u5DE5\u667A\u80FD\u8AB2\u7A0B\u55AE\u5143\u61C9\u7528\u5BE6\u8E10\u5DE5\u4F5C\u574A)\uFF0C\u9080\u8ACB500\u5BB6\u5B78\u6821\u51711000\u4F4D\u4E2D\u5B78\u8001\u5E2B\u53C3\u8207\u5DE5\u4F5C\u574A\uFF0C\u5DE5\u4F5C\u574A\u5408\u5171\u8209\u8FA620\u5834\uFF0C\u6BCF\u58346\u5C0F\u6642\u3002\u589E\u52A0\u8001\u5E2B\u5C0D\u6559\u5B78\u8AB2\u7A0B\u55AE\u5143\u53CA\u4F7F\u7528\u76F8\u95DC\u5B78\u7FD2\u5957\u4EF6\u7684\u8A8D\u8B58\u3002 <br data-v-e741d624><br data-v-e741d624> EduAIR\u5C07\u8207\u6559\u80B2\u5C40\u5408\u4F5C\uFF0C\u5411\u5B78\u6821\u63D0\u4F9BAI\u6559\u5B78\u5957\u4EF6-CUHK iCar\u53CACUHK iPort\uFF0C\u672C\u516C\u53F8\u4EA6\u6703\u6D3E\u51FA\u6280\u8853\u5C08\u624D\u64D4\u4EFB\u57F9\u8A13\u8AB2\u7A0B\u7684\u8B1B\u5E2B\u3002 <br data-v-e741d624><br data-v-e741d624><a style="${ssrRenderStyle({ "text-decoration-color": "blue", "color": "blue" })}" target="_blank" href="https://tcs.edb.gov.hk/tcs/admin/courses/previewCourse/forPortal.htm?courseId=CSD020240360&amp;lang=zh" data-v-e741d624>\u6559\u5E2B\u57F9\u8A13\u8AB2\u7A0B\u8A73\u60C5</a></div><div style="${ssrRenderStyle({ "width": "100%", "padding": "20px", "max-width": "1200px" })}" data-v-e741d624><div class="font-middle" style="${ssrRenderStyle({ "color": "#ffa500", "font-weight": "600" })}" data-v-e741d624>\u6D3B\u52D5\u5FEB\u7167</div><div class="event-photo" style="${ssrRenderStyle({ "padding": "20px 0" })}" data-v-e741d624>`);
  _push(ssrRenderComponent(_component_ExpandField2, {
    title: " 2023 \u5E74 9 \u6708 28 \u65E5",
    number: "1",
    isExpand: false,
    displayArrow: true
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", "/event/event4/1.jpg")} style="${ssrRenderStyle({ "width": "100%" })}" data-v-e741d624${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: "/event/event4/1.jpg",
            style: { "width": "100%" }
          }, null, 8, ["src"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_ExpandField2, {
    title: " 2023 \u5E74 10 \u6708 20 \u65E5",
    number: "2",
    isExpand: false,
    displayArrow: true
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", "/event/20231020.jpg")} style="${ssrRenderStyle({ "width": "100%" })}" data-v-e741d624${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: "/event/20231020.jpg",
            style: { "width": "100%" }
          }, null, 8, ["src"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_ExpandField2, {
    title: " 2023 \u5E74 10 \u6708 27 \u65E5",
    number: "3",
    isExpand: true,
    displayArrow: true
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", "/event/20231027.jpg")} style="${ssrRenderStyle({ "width": "100%" })}" data-v-e741d624${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: "/event/20231027.jpg",
            style: { "width": "100%" }
          }, null, 8, ["src"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/event/4.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _4 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-e741d624"]]);

export { _4 as default };
//# sourceMappingURL=4-1198a8d6.mjs.map
