import { b as buildAssetsURL } from '../../handlers/renderer.mjs';
import { T as Title } from './components-d2ce98ee.mjs';
import { useSSRContext, withCtx, createTextVNode, mergeProps } from 'vue';
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
import 'ipx';
import 'http-graceful-shutdown';
import 'unctx';
import 'vue-router';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';

const _imports_0 = "" + buildAssetsURL("intro.9ccedcb0.mp4");
const _sfc_main$3 = {
  name: "VideoBackground",
  mounted() {
    this.$refs.myVideo.play();
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<video${ssrRenderAttrs(mergeProps({
    ref: "myVideo",
    id: "myVideo",
    style: { "right": "0", "bottom": "0", "width": "100%", "height": "100%", "object-fit": "cover" },
    autoplay: "",
    muted: "",
    loop: "",
    playsinline: "",
    "webkit-playsinline": ""
  }, _attrs))}><source${ssrRenderAttr("src", _imports_0)} type="video/mp4"></video>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/VideoBackground.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$2 = {
  name: "PictureFrame",
  props: ["title", "image"]
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "picture-frame-container" }, _attrs))} data-v-21206e75><div class="description-image-container" data-v-21206e75><img${ssrRenderAttr("src", $props.image)} data-v-21206e75></div><div class="title" data-v-21206e75><label data-v-21206e75>${ssrInterpolate($props.title)}</label></div><div class="overlay" data-v-21206e75><div class="text" data-v-21206e75>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PictureFrame.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-21206e75"]]);
const _sfc_main$1 = {
  name: "UpCounter",
  props: ["image", "text1", "text2", "number"],
  data: () => ({
    counterStatus: false,
    event: null
  }),
  components: {},
  methods: {
    startCounter() {
      let self = this;
      let dist = window.innerHeight - self.$refs.upcounter.$el.getBoundingClientRect().top;
      if (dist > 0) {
        if (self.counterStatus == false) {
          self.$refs.upcounter.start();
          self.counterStatus = true;
        }
      }
    }
  },
  mounted() {
  },
  unmounted() {
    document.removeEventListener("scroll", this.event);
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "upcounter-container" }, _attrs))} data-v-bcc371f5><div style="${ssrRenderStyle({ "width": "60px", "height": "60px", "display": "flex" })}" data-v-bcc371f5><img${ssrRenderAttr("src", $props.image)} style="${ssrRenderStyle({ "width": "60px", "object-fit": "contain" })}" data-v-bcc371f5></div><label data-v-bcc371f5>${ssrInterpolate($props.text1)}</label><span data-v-bcc371f5>${ssrInterpolate($props.number)}</span><label data-v-bcc371f5>${ssrInterpolate($props.text2)}</label></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UpCounter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-bcc371f5"]]);
const _sfc_main = {
  name: "IndexPage",
  mounted() {
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Title = Title;
  const _component_VideoBackground = __nuxt_component_1;
  const _component_PictureFrame = __nuxt_component_2;
  const _component_UpCounter = __nuxt_component_3;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Title, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u611B\u52D5\u667A EduAIR`);
      } else {
        return [
          createTextVNode("\u611B\u52D5\u667A EduAIR")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div style="${ssrRenderStyle({ "width": "100%" })}"><div class="promote-container video-container" style="${ssrRenderStyle({ "overflow": "hidden", "width": "100%" })}">`);
  _push(ssrRenderComponent(_component_VideoBackground, null, null, _parent));
  _push(`<div class="video-description"><label class="title">\u638C\u63E1AI \u66F4\u597D\u660E\u5929</label><label class="content">\u611B\u52D5\u667A\u6559\u80B2\u7CFB\u7D71\u63D0\u4F9B\u4E00\u7CFB\u5217\u5275\u65B0AI\u5B78\u7FD2\u5957\u4EF6\u53CA\u8AB2\u7A0B</label></div></div><div class="promote-container promote-container-1" style="${ssrRenderStyle(null)}"><div class="promote-container-content text-container" onclick=""><div class="description-box-title" style="${ssrRenderStyle({ "padding": "30px", "font-size": "30px", "font-weight": "500" })}"><label>\u6211\u5011\u7684\u670D\u52D9</label></div><div style="${ssrRenderStyle({ "display": "flex", "justify-content": "center", "width": "100%", "gap": "50px", "padding-top": "20px" })}">`);
  _push(ssrRenderComponent(_component_PictureFrame, {
    title: "\u5275\u65B0\u6559\u5B78\u5957\u4EF6",
    image: "image/media/img0.jpg"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` \u7531\u4E2D\u5927\u5DE5\u7A0B\u5C08\u5BB6\u7814\u767C\u7684\u4E00\u7CFB\u5217\u5B78\u7FD2\u5DE5\u5177\uFF0C\u662F\u5B78\u7FD2AI / STEAM\u7684\u6700\u4F73\u8D77\u9EDE `);
      } else {
        return [
          createTextVNode(" \u7531\u4E2D\u5927\u5DE5\u7A0B\u5C08\u5BB6\u7814\u767C\u7684\u4E00\u7CFB\u5217\u5B78\u7FD2\u5DE5\u5177\uFF0C\u662F\u5B78\u7FD2AI / STEAM\u7684\u6700\u4F73\u8D77\u9EDE ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_PictureFrame, {
    title: "\u5D84\u65B0\u5B78\u7FD2\u9AD4\u9A57",
    image: "image/media/img1.jpg"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` \u63D0\u4F9B\u5D84\u65B0\u53CA\u8CBC\u8FD1\u751F\u6D3B\u7684\u8AB2\u7A0B\uFF0C\u8B93\u5B78\u751F\u7121\u75DB\u5B78\u7FD2AI / STEAM\u8AB2\u984C `);
      } else {
        return [
          createTextVNode(" \u63D0\u4F9B\u5D84\u65B0\u53CA\u8CBC\u8FD1\u751F\u6D3B\u7684\u8AB2\u7A0B\uFF0C\u8B93\u5B78\u751F\u7121\u75DB\u5B78\u7FD2AI / STEAM\u8AB2\u984C ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div><div class="promote-container promote-container-2"><div class="promote-container-content text-container" onclick=""><div class="description-box-title" style="${ssrRenderStyle({ "padding": "30px", "font-size": "30px", "font-weight": "500" })}"><label>\u6211\u5011\u7684\u6210\u679C</label></div><div style="${ssrRenderStyle({ "display": "flex", "justify-content": "center", "width": "100%", "gap": "50px", "padding-top": "20px", "flex-wrap": "wrap" })}">`);
  _push(ssrRenderComponent(_component_UpCounter, {
    text1: "\u8209\u8FA6",
    text2: "\u5B78\u751F\u8A13\u7DF4\u73ED",
    image: "image/materials/work_history.png",
    number: 5
  }, null, _parent));
  _push(ssrRenderComponent(_component_UpCounter, {
    text1: "\u8209\u8FA6",
    text2: "\u6559\u5E2B\u5DE5\u4F5C\u574A",
    image: "image/materials/teacher2.png",
    number: 6
  }, null, _parent));
  _push(ssrRenderComponent(_component_UpCounter, {
    text1: "\u5DF2\u6709",
    text2: "\u672C\u5730\u4E2D\u5B78\u4F7F\u7528",
    image: "image/materials/school2.png",
    number: 238
  }, null, _parent));
  _push(ssrRenderComponent(_component_UpCounter, {
    text1: "\u8986\u84CB",
    text2: "\u5B78\u751F",
    image: "image/materials/people.png",
    number: 2560
  }, null, _parent));
  _push(`</div></div></div></div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-c8a2ff95.mjs.map
