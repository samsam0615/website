import { resolveComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent } from 'vue/server-renderer';
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
import 'http-graceful-shutdown';

const _sfc_main = {
  name: "CUHK-iPort",
  components: {},
  data() {
    return {
      source1: "/777.pdf"
    };
  },
  methods: {
    click(num) {
      console.log(this.$refs.a2);
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_vue_pdf_embed = resolveComponent("vue-pdf-embed");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "pageContent-container" }, _attrs))}><div style="${ssrRenderStyle({ "width": "80%", "background": "blue" })}" class="pdf-viewer">`);
  _push(ssrRenderComponent(_component_vue_pdf_embed, {
    source: $data.source1,
    style: { "width": "800px" },
    onClick: $options.click,
    ref: "a2"
  }, null, _parent));
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/test.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const test = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { test as default };
//# sourceMappingURL=test-225d79cd.mjs.map
