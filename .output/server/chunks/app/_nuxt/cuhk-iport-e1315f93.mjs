import { T as Title, M as Meta } from './components-d2ce98ee.mjs';
import { useSSRContext, withCtx, createTextVNode, mergeProps } from 'vue';
import { ssrRenderComponent, ssrRenderStyle, ssrRenderAttrs, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
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
  name: "VueCatalog",
  props: ["title", "list"],
  emits: ["click"],
  methods: {
    click(index) {
      this.$emit("click", index);
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-catalog" }, _attrs))} data-v-b75ba81c><label data-v-b75ba81c>${ssrInterpolate($props.title)}</label><!--[-->`);
  ssrRenderList($props.list, (item, index) => {
    _push(`<div data-v-b75ba81c><a data-v-b75ba81c>${ssrInterpolate(item)} <span data-v-b75ba81c></span></a></div>`);
  });
  _push(`<!--]--></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PageCatalog.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-b75ba81c"]]);
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
  _push(`<div class="pageContent-container" style="${ssrRenderStyle({ "flex-direction": "row", "justify-content": "flex-start", "align-items": "flex-start", "padding": "60px" })}" data-v-977a5264>`);
  _push(ssrRenderComponent(_component_PageCatalog, {
    onClick: $options.scroll,
    title: "CUHK iPort",
    list: ["iPort\u662F\u751A\u9EBD\uFF1F", "\u5982\u4F55\u4F7F\u7528iPort\uFF1F", "iPort\u7DE8\u7A0B\u5E73\u53F0", "iPort\u8CC7\u6E90\u7E3D\u532F"]
  }, null, _parent));
  _push(`<div class="page-content" data-v-977a5264><span data-v-977a5264>CUHK iPort\u662F\u751A\u9EBD\uFF1F</span><div data-v-977a5264> CUHK iPort\u662F\u7531\u4E2D\u5927\u79D1\u7814\u5718\u968A\u958B\u767C\u7684AI\u6559\u5B78\u5957\u4EF6\u3002\u5718\u968A\u6D1E\u6089\u5230\u90E8\u5206\u5B78\u751F\u6709\u7F3A\u4E4FSTEM\u642D\u7DAB\u6280\u80FD\u7684\u56F0\u96E3\uFF0C\u7814\u767C\u51FAiPort\uFF0C\u8B93\u5E2B\u751F\u7701\u7565\u642D\u7DAB\u6B65\u9A5F\u4E5F\u53EF\u5728\u786C\u4EF6\u4E0A\u5957\u7528AI\u6A21\u578B\u3002\u5E2B\u751F\u53EA\u8981\u4F7F\u7528iPort\u7DE8\u7A0B\u5E73\u53F0\uFF0C\u4FBF\u53EF\u4EE5\u5957\u7528\u65BCTeachable Machine\u8A13\u7DF4\u7684AI\u6A21\u578B\uFF0C\u8B93\u786C\u4EF6\u6839\u64DA\u81EA\u884C\u8A2D\u5B9A\u7684\u689D\u4EF6\u4F5C\u51FA\u53CD\u61C9\uFF0C\u7121\u9808\u7DE8\u7A0B\u5373\u53EF\u5BE6\u73FEAI\u7269\u806F\u7DB2\uFF08AIoT\uFF09 </div><span data-v-977a5264>\u5982\u4F55\u4F7F\u7528CUHK iPort\uFF1F</span><div data-v-977a5264> 1. \u5728Teachable Machine\u8A13\u7DF4AI\u6A21\u578B\u53CA\u751F\u6210AI\u6A21\u578B\u7684\u9023\u7D50<br data-v-977a5264> 2. \u5C07AI\u6A21\u578B\u7684\u9023\u7D50\u8907\u88FD\u53CA\u8CBC\u4E0A\u81F3iPort\u7DE8\u7A0B\u5E73\u53F0<br data-v-977a5264> 3. \u61C9\u7528\u8A72AI\u6A21\u578B\u53BB\u64CD\u4F5C\u865B\u64EC\u6216\u5BE6\u9AD4\u7684iPort </div><span data-v-977a5264>CUHK iPort\u7DE8\u7A0B\u5E73\u53F0</span><a href="https://iport.eduairhk.com" target="_blank" class="btn" data-v-977a5264>\u524D\u5F80 iPort\u7DE8\u7A0B\u5E73\u53F0</a><div data-v-977a5264></div><span data-v-977a5264>CUHK iPort\u5BE6\u7528\u8CC7\u6E90\u7E3D\u532F</span><div data-v-977a5264> \u5373\u5C07\u63A8\u51FA </div></div></div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/cuhk-iport.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const cuhkIport = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-977a5264"]]);

export { cuhkIport as default };
//# sourceMappingURL=cuhk-iport-e1315f93.mjs.map
