import { b as buildAssetsURL } from '../../handlers/renderer.mjs';
import { T as Title, M as Meta } from './components-d2ce98ee.mjs';
import { useSSRContext, withCtx, createTextVNode, createVNode, mergeProps } from 'vue';
import { ssrRenderComponent, ssrRenderStyle, ssrRenderAttr, ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderSlot } from 'vue/server-renderer';
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
import 'ipx';
import 'http-graceful-shutdown';
import 'unctx';
import 'vue-router';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';

const _sfc_main$3 = {
  name: "VueCatalog",
  props: ["title", "list"],
  emits: ["click"],
  methods: {
    click(index) {
      this.$emit("click", index);
    }
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-catalog" }, _attrs))} data-v-829a8454><label data-v-829a8454>${ssrInterpolate($props.title)}</label><!--[-->`);
  ssrRenderList($props.list, (item, index) => {
    _push(`<div data-v-829a8454><a data-v-829a8454>${ssrInterpolate(item)} <span data-v-829a8454></span></a></div>`);
  });
  _push(`<!--]--></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PageCatalog.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-829a8454"]]);
const _sfc_main$2 = {
  name: "PictureFrame",
  props: ["title", "image"]
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "orangeDescription" }, _attrs))} data-v-5b1d13d3><label data-v-5b1d13d3>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</label><div class="icon-container" data-v-5b1d13d3><img${ssrRenderAttr("src", $props.image)} class="icon" data-v-5b1d13d3></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/OrangeDescription.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-5b1d13d3"]]);
const _sfc_main$1 = {
  name: "PictureFrame",
  props: ["title", "image", "number"]
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ style: { "display": "flex", "flex-direction": "column", "border-radius": "40px", "border": "3px solid orange", "padding": "0 0", "height": "max-content", "width": "600px", "box-sizing": "border-box" } }, _attrs))}><label style="${ssrRenderStyle({ "padding": "20px 40px", "display": "flex", "gap": "20px" })}"><a style="${ssrRenderStyle({ "font-size": "40px", "font-weight": "600", "color": "orange" })}">${ssrInterpolate($props.number)}</a> ${ssrInterpolate($props.title)}</label><img${ssrRenderAttr("src", $props.image)} style="${ssrRenderStyle({ "width": "100%", "height": "auto" })}"><label style="${ssrRenderStyle({ "height": "80px", "display": "flex", "justify-content": "center", "align-items": "center" })}">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</label></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/OrangeVideo.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _imports_0 = "" + buildAssetsURL("image1.fe8d41a6.png");
const _sfc_main = {
  name: "CUHK-iPort",
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
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Title = Title;
  const _component_Meta = Meta;
  const _component_PageCatalog = __nuxt_component_2;
  const _component_OrangeDescription = __nuxt_component_3;
  const _component_OrangeVideo = __nuxt_component_4;
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
  _push(`<div class="pageContent-container" style="${ssrRenderStyle({ "flex-direction": "row", "justify-content": "flex-start", "align-items": "flex-start", "padding": "60px", "overflow": "visible" })}" data-v-4f64c8d8>`);
  _push(ssrRenderComponent(_component_PageCatalog, {
    onClick: $options.scroll,
    title: "CUHK iPort",
    list: ["CUHK iPort\u662F\u751A\u9EBD\uFF1F", "CUHK iPort\u80FD\u505A\u751A\u9EBC\uFF1F", "\u5982\u4F55\u4F7F\u7528CUHK iPort\uFF1F", "CUHK iPort\u7DE8\u7A0B\u5E73\u53F0", "CUHK iPort\u8CC7\u6E90\u7E3D\u532F"]
  }, null, _parent));
  _push(`<div class="page-content" data-v-4f64c8d8><span data-v-4f64c8d8>CUHK iPort\u662F\u751A\u9EBD\uFF1F</span><div data-v-4f64c8d8> CUHK iPort\u662F\u7531\u4E2D\u5927\u5718\u968A\u958B\u767C\u7684AI\u6559\u5B78\u5957\u4EF6\u3002\u5E2B\u751F\u53EF\u7701\u7565\u8907\u96DC\u7684\u786C\u4EF6\u642D\u7DAB\u6B65\u9A5F\uFF0C\u4F7F\u7528iPort\u7DE8\u7A0B\u5E73\u53F0\uFF0C\u5957\u7528\u65BCTeachable Machine\u8A13\u7DF4\u7684AI\u6A21\u578B\uFF0C\u7121\u9808\u7DE8\u7A0B\u5373\u53EF\u5BE6\u73FEAI\u7269\u806F\u7DB2\uFF08AIoT\uFF09 \uFF0C \u5EFA\u7ACB\u4E0D\u540C\u7684AI\u9805\u76EE\u3002 </div><img${ssrRenderAttr("src", _imports_0)} style="${ssrRenderStyle({ "position": "relative", "width": "500px", "margin-top": "5px" })}" data-v-4f64c8d8><span data-v-4f64c8d8>CUHK iPort\u80FD\u505A\u751A\u9EBC\uFF1F</span><div style="${ssrRenderStyle({ "display": "flex", "gap": "20px" })}" data-v-4f64c8d8>`);
  _push(ssrRenderComponent(_component_OrangeDescription, { image: "image/iport/image6.gif" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u99AC\u9054\u63A7\u5236`);
      } else {
        return [
          createTextVNode("\u99AC\u9054\u63A7\u5236")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_OrangeDescription, { image: "image/iport/image5.png" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u6587\u5B57\u986F\u793A`);
      } else {
        return [
          createTextVNode("\u6587\u5B57\u986F\u793A")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_OrangeDescription, { image: "image/iport/image52.png" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u8072\u97F3\u8F38\u51FA`);
      } else {
        return [
          createTextVNode("\u8072\u97F3\u8F38\u51FA")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_OrangeDescription, { image: "image/iport/image3.gif" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u71C8\u5149\u5C55\u793A`);
      } else {
        return [
          createTextVNode("\u71C8\u5149\u5C55\u793A")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_OrangeDescription, { image: "image/iport/image22.gif" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u958B\u95DC\u63A7\u5236`);
      } else {
        return [
          createTextVNode("\u958B\u95DC\u63A7\u5236")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><span data-v-4f64c8d8>\u5982\u4F55\u4F7F\u7528CUHK iPort\uFF1F</span><div style="${ssrRenderStyle({ "display": "flex", "gap": "20px", "flex-direction": "column" })}" data-v-4f64c8d8>`);
  _push(ssrRenderComponent(_component_OrangeVideo, {
    image: "image/iport/image7.gif",
    title: "\u5728Teachable Machine\u8A13\u7DF4AI\u6A21\u578B\u53CA\u751F\u6210\u9023\u7D50",
    number: 1
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<a class="orangeBtn" href="https://teachablemachine.withgoogle.com/" target="_blank" data-v-4f64c8d8${_scopeId}>\u524D\u5F80Teachable Machine</a>`);
      } else {
        return [
          createVNode("a", {
            class: "orangeBtn",
            href: "https://teachablemachine.withgoogle.com/",
            target: "_blank"
          }, "\u524D\u5F80Teachable Machine")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_OrangeVideo, {
    image: "image/iport/image8.gif",
    title: "\u5C07AI\u6A21\u578B\u7684\u9023\u7D50\u8907\u88FD\u81F3iPort\u7DE8\u7A0B\u5E73\u53F0",
    number: 2
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<a class="orangeBtn" href="https://iport.eduairhk.com/" target="_blank" data-v-4f64c8d8${_scopeId}>\u524D\u5F80CUHK iPort\u7DE8\u7A0B\u5E73\u53F0</a>`);
      } else {
        return [
          createVNode("a", {
            class: "orangeBtn",
            href: "https://iport.eduairhk.com/",
            target: "_blank"
          }, "\u524D\u5F80CUHK iPort\u7DE8\u7A0B\u5E73\u53F0")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_OrangeVideo, {
    image: "image/iport/image9.gif",
    title: "\u61C9\u7528\u8A72AI\u6A21\u578B\u53BB\u63A7\u5236\u4E0D\u540C\u786C\u4EF6",
    number: 3
  }, null, _parent));
  _push(`</div><span data-v-4f64c8d8>CUHK iPort\u7DE8\u7A0B\u5E73\u53F0</span><a href="https://iport.eduairhk.com" target="_blank" class="btn" data-v-4f64c8d8>\u524D\u5F80 iPort\u7DE8\u7A0B\u5E73\u53F0</a><span data-v-4f64c8d8>CUHK iPort\u5BE6\u7528\u8CC7\u6E90\u7E3D\u532F</span><div data-v-4f64c8d8> \u5373\u5C07\u63A8\u51FA </div></div></div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/cuhk-iport.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const cuhkIport = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-4f64c8d8"]]);

export { cuhkIport as default };
//# sourceMappingURL=cuhk-iport-2c5e0490.mjs.map
