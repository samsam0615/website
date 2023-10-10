import { _ as _export_sfc, b as __nuxt_component_3 } from '../server.mjs';
import { useSSRContext, mergeProps, withCtx, renderSlot } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrInterpolate, ssrRenderAttr, ssrRenderComponent, ssrRenderSlot, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';

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
  const _component_nuxt_img = __nuxt_component_3;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "container",
    style: {}
  }, _attrs))} data-v-faf772fe><div style="${ssrRenderStyle({ "display": "flex", "height": "300px" })}" data-v-faf772fe><div style="${ssrRenderStyle({ "color": "white", "display": "flex", "justify-content": "space-between", "flex-direction": "row", "width": "100%", "flex": "1" })}" data-v-faf772fe><div class="imageDisplayer" style="${ssrRenderStyle({})}" data-v-faf772fe><img${ssrRenderAttr("src", $data.url)} style="${ssrRenderStyle({ "width": "100%", "height": "100%", "border": "1px solid white", "object-fit": "cover" })}" data-v-faf772fe></div></div><div class="pc" style="${ssrRenderStyle({ "width": "100%", "height": "450px", "padding": "0 20px" })}" data-v-faf772fe><div class="font-small" style="${ssrRenderStyle({ "line-height": "35px" })}" data-v-faf772fe>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></div></div><div style="${ssrRenderStyle({ "display": "flex", "flex-direction": "row", "justify-content": "space-between", "width": "100%" })}" data-v-faf772fe><!--[-->`);
  ssrRenderList($props.images, (image) => {
    _push(`<div style="${ssrRenderStyle({ "aspect-ratio": "4/3", "overflow": "hidden" })}" class="${ssrRenderClass([{ active: $data.url == image }, "image-container2"])}" data-v-faf772fe>`);
    _push(ssrRenderComponent(_component_nuxt_img, {
      src: image,
      style: { "height": "100%", "object-fit": "cover" }
    }, null, _parent));
    _push(`<div data-v-faf772fe></div></div>`);
  });
  _push(`<!--]--></div><div class="mobile" style="${ssrRenderStyle({ "width": "100%", "padding": "10px" })}" data-v-faf772fe><div class="font-middle" style="${ssrRenderStyle({ "color": "#6d0e77", "font-weight": "600", "padding": "10px 0 0px 0" })}" data-v-faf772fe>${ssrInterpolate($props.title)}</div>`);
  if ($props.subtitle) {
    _push(`<div class="font-small" style="${ssrRenderStyle({ "color": "#6d0e77", "font-weight": "600", "padding": "0 0 10px 0" })}" data-v-faf772fe>${ssrInterpolate($props.subtitle)}</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="font-mini" style="${ssrRenderStyle({ "line-height": "30px" })}" data-v-faf772fe>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Gallery4.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-faf772fe"]]);
const _sfc_main = {
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
    date: {
      type: String,
      default: null
    },
    location: {
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
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Gallery4 = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "pageContent-container",
    style: { "max-width": "100%" }
  }, _attrs))}><div style="${ssrRenderStyle({ "width": "100%", "padding": "10px 20px", "max-width": "1200px" })}"><div class="font-big" style="${ssrRenderStyle({ "align-self": "flex-start", "padding": "20px 0 0 0", "font-weight": "600", "color": "#6d0e77" })}">${ssrInterpolate($props.title)}</div><div class="font-middle" style="${ssrRenderStyle({ "padding": "8px 0" })}">${ssrInterpolate($props.subtitle)}</div><div class="font-small" style="${ssrRenderStyle({ "display": "flex", "align-items": "center", "padding": "5px 0" })}"><img${ssrRenderAttr("src", "/calendargray.png")} style="${ssrRenderStyle({ "width": "50px", "padding": "0 9px" })}">${ssrInterpolate($props.date)}</div><div class="font-small" style="${ssrRenderStyle({ "display": "flex", "align-items": "center", "padding": "5px 0" })}"><img${ssrRenderAttr("src", "/location4gray.png")} style="${ssrRenderStyle({ "width": "50px", "padding": "0 9px" })}">${ssrInterpolate($props.location)}</div></div>`);
  _push(ssrRenderComponent(_component_Gallery4, { images: $props.images }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
      } else {
        return [
          renderSlot(_ctx.$slots, "default")
        ];
      }
    }),
    _: 3
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/EventTemplate.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_1 as _ };
//# sourceMappingURL=EventTemplate-6e660d3f.mjs.map
