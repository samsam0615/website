import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';

const _sfc_main = {
  name: "TextBox",
  props: ["title", "image"],
  methods: {}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "text-box" }, _attrs))} data-v-b84e9952><div style="${ssrRenderStyle({ "display": "flex", "align-items": "center", "padding-bottom": "20px" })}" data-v-b84e9952><img${ssrRenderAttr("src", $props.image)} data-v-b84e9952><label class="title" data-v-b84e9952>${ssrInterpolate($props.title)}</label></div>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TextBox.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-b84e9952"]]);

export { __nuxt_component_6 as _ };
//# sourceMappingURL=TextBox-d613185c.mjs.map
