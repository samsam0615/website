import { T as Title } from './components-c34ba2a2.mjs';
import { useSSRContext, withCtx, createTextVNode, mergeProps } from 'vue';
import { ssrRenderComponent, ssrRenderClass, ssrRenderList, ssrInterpolate, ssrRenderStyle, ssrRenderAttr, ssrRenderAttrs } from 'vue/server-renderer';
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

const _sfc_main$1 = {
  name: "ResourceItem",
  props: {
    text: String
  },
  methods: {
    click() {
      this.$emit("click");
    },
    touchleave() {
      this.$emit("touchleave");
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "resourceItem" }, _attrs))}><div>${ssrInterpolate($props.text)}</div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ResourceItem.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const defaultExternalJson = {
  name: "external",
  vision: [
    {
      imageURL: "",
      name: "CLIP Interrogator",
      url: "https://huggingface.co/spaces/pharma/CLIP-Interrogator",
      description: "CLIP Interrogator \u5206\u6790\u7528\u6236\u63D0\u4F9B\u7684\u5716\u50CF\uFF0C\u4E26\u6839\u64DA\u5716\u50CF\u5167\u5BB9\u63D0\u4F9B\u76F8\u95DC\u7684\u63D0\u793A\uFF08Prompt\uFF09\u3002\u7528\u6236\u53EF\u4EE5\u7528\u4EE5\u751F\u6210\u8207\u539F\u59CB\u5716\u50CF\u76F8\u4F3C\u7684\u5716\u50CF\uFF0C\u6216\u8005\u6839\u64DA\u63D0\u793A\u9032\u884C\u9032\u4E00\u6B65\u7684\u4FEE\u6539\u548C\u8ABF\u6574\uFF0C\u5F9E\u800C\u751F\u6210\u7B26\u5408\u81EA\u5DF1\u9700\u6C42\u7684\u5716\u50CF"
    },
    {
      imageURL: "",
      name: "Craiyon",
      url: "https://www.craiyon.com/",
      description: "Craiyon \u662F\u4E00\u500B\u514D\u8CBB\u7684\u7DDA\u4E0A AI \u5716\u50CF\u751F\u6210\u5DE5\u5177\uFF0C\u80FD\u5920\u5728\u77ED\u6642\u9593\u5167\u5C07\u7C21\u55AE\u7684\u6587\u672C\u63D0\u793A\uFF08Prompt\uFF09\u8F49\u63DB\u70BA\u5716\u50CF\uFF0C\u5373\u4F7F\u4F60\u6C92\u6709\u7E6A\u5716\u5929\u8CE6\uFF0C\u53EA\u8981\u4E0D\u65B7\u88DC\u5145\u548C\u8ABF\u6574\u6587\u672C\u63D0\u793A\uFF0C\u4E5F\u53EF\u4EE5\u5275\u9020\u51FA\u4EE4\u4EBA\u9A5A\u5606\u7684\u7684\u5716\u50CF"
    },
    {
      imageURL: "",
      name: "Image to Music",
      url: "https://huggingface.co/spaces/fffiloni/img-to-music",
      description: "Image to Music \u662F\u4E00\u500B\u4EE5\u5716\u50CF\u751F\u6210\u97F3\u6A02\u7684\u5DE5\u5177\uFF0C\u5B83\u5148\u4F7F\u7528 CLIP Interrogator \u5C07\u7528\u6236\u63D0\u4F9B\u7684\u5716\u50CF\u8F49\u5316\u70BA\u63D0\u793A\uFF08Prompt\uFF09\uFF0C\u518D\u5229\u7528 Mubert Render\uFF08AI \u514D\u7248\u7A05\u97F3\u6A02\u7522\u751F\u5668\uFF09\u751F\u6210\u8207\u5716\u50CF\u76F8\u95DC\u7684\u97F3\u6A02"
    },
    {
      imageUrl: "",
      name: "Quick Draw",
      url: "https://quickdraw.withgoogle.com/",
      description: "Quick, Draw! \u662F\u7531 Google \u958B\u767C\u7684\u4E00\u6B3E\u756B\u5716\u904A\u6232\uFF0C\u73A9\u5BB6\u6309\u7167\u904A\u6232\u7684\u63D0\u793A\u7E6A\u756B\u5716\u5F62\uFF0C\u800C\u6DF1\u5EA6\u795E\u7D93\u7DB2\u7D61\u6703\u5BE6\u6642\u731C\u6E2C\u5716\u5F62\u4EE3\u8868\u7684\u5167\u5BB9\u3002\u4EBA\u5DE5\u667A\u80FD\u6703\u900F\u904E\u6BCF\u6B21\u904A\u6232\u6703\u4E0D\u65B7\u5B78\u7FD2\uFF0C\u4E26\u63D0\u9AD8\u672A\u4F86\u7684\u731C\u6E2C\u80FD\u529B\u3002\u5FEB\u4F86\u4E00\u8D77\u6311\u6230\u4F60\u7684\u5275\u9020\u529B\u548C\u60F3\u50CF\u529B\u5427\uFF01"
    },
    {
      imageURL: "",
      name: "Semi-Conductor",
      url: "https://semiconductor.withgoogle.com/",
      description: "Semi-Conductor \u662F\u4E00\u500B\u59FF\u52E2\u5075\u6E2C\u5BE6\u9A57\uFF0C\u8B93\u4F7F\u7528\u8005\u900F\u904E\u651D\u50CF\u982D\uFF0C\u64FA\u51FA\u4E0D\u540C\u7684\u59FF\u52E2\u4EE5\u6307\u63EE\u81EA\u5DF1\u7684\u6A02\u968A\uFF0C\u4F8B\u5982\u6539\u8B8A\u97F3\u6A02\u7684\u7BC0\u594F\u3001\u97F3\u91CF\u548C\u6A02\u5668\u3002\u9019\u500B\u5BE6\u9A57\u63D0\u4F9B\u4E86\u4E00\u500B\u5275\u65B0\u7684\u4E92\u52D5\u9AD4\u9A57\uFF0C\u8B93\u7528\u6236\u5728\u97F3\u6A02\u9818\u57DF\u4E2D\u767C\u63EE\u5275\u610F"
    },
    {
      imageURL: "",
      name: "Teachable Machine",
      url: "https://teachablemachine.withgoogle.com/",
      description: "Teachable Machine\u662F\u7531Google\u57FA\u65BC\u4EBA\u5DE5\u667A\u80FD\u958B\u767C\u7684\u7DB2\u9801\u61C9\u7528\uFF0C\u53EF\u4EE5\u5E6B\u52A9\u7528\u6236\u5FEB\u901F\u5730\u5275\u5EFA\u81EA\u5DF1\u7684\u6A5F\u5668\u5B78\u7FD2\u6A21\u578B\u3002\u7528\u6236\u53EA\u9808\u7C21\u55AE\u5730\u8F38\u5165\u5716\u50CF\u3001\u8072\u97F3\u6216\u59FF\u52E2\u7B49\u6578\u64DA\uFF0C\u4FBF\u53EF\u9032\u884CAI\u8A13\u7DF4\uFF0C\u751F\u6210\u81EA\u5DF1\u7684\u6A5F\u5668\u5B78\u7FD2\u6A21\u578B\u3002\u9019\u500B\u5DE5\u5177\u975E\u5E38\u9069\u5408\u521D\u5B78\u8005\u548C\u6559\u80B2\u8005\u4F7F\u7528\uFF0C\u80FD\u5920\u5E6B\u52A9\u4ED6\u5011\u66F4\u52A0\u6DF1\u5165\u5730\u4E86\u89E3\u6A5F\u5668\u5B78\u7FD2\u6280\u8853\u7684\u61C9\u7528\u548C\u539F\u7406"
    }
  ],
  hear: [
    {
      imageURL: "",
      name: "Web Speech API",
      url: "https://www.google.com/intl/en/chrome/demos/speech.html ",
      description: "Web Speech API \u53EF\u4EE5\u8B93\u7528\u6236\u5728\u7DB2\u9801\u4E0A\u4F7F\u7528\u81EA\u52D5\u8A9E\u97F3\u8B58\u5225\u548C\u6587\u672C\u8F49\u8A9E\u97F3\u7684\u529F\u80FD\u3002\u4F7F\u7528\u8005\u53EF\u4EE5\u900F\u904E\u9EA5\u514B\u98A8\u8F38\u5165\u8A9E\u97F3\uFF0CWeb Speech API \u6703\u5C07\u8A9E\u97F3\u8B58\u5225\u6210\u6587\u5B57\uFF0C\u7136\u5F8C\u958B\u767C\u8005\u53EF\u4EE5\u5C07\u6587\u5B57\u9032\u884C\u76F8\u61C9\u7684\u8655\u7406\uFF0C\u4F8B\u5982\u6587\u672C\u5206\u6790\u3001\u95DC\u9375\u5B57\u63D0\u53D6\u7B49\u7B49"
    }
  ],
  speak: [
    {
      imageURL: "",
      name: "TTS Demo",
      url: "https://ttsdemo.com/ ",
      description: "TTS Demo \u662F\u4E00\u500B\u6587\u5B57\u8F49\u8A9E\u97F3\u5408\u6210\u7CFB\u7D71\uFF0C\u53EF\u4EE5\u8B93\u7528\u6236\u9078\u64C7\u8A9E\u8A00\u3001\u8072\u97F3\u3001\u97F3\u8CEA\u548C\u8A9E\u8ABF\u7B49\u53C3\u6578\uFF0C\u900F\u904E\u96FB\u8166\u8A9E\u97F3\u5408\u6210\u5C07\u8F38\u5165\u7684\u6587\u5B57\u8F49\u63DB\u6210\u8072\u97F3\u8F38\u51FA\u3002 TTS Demo \u53EF\u4EE5\u61C9\u7528\u65BC\u6717\u8B80\u96FB\u5B50\u66F8\u3001\u8A9E\u97F3\u5C0E\u822A\u3001\u8A9E\u97F3\u63D0\u793A\u7B49\u7B49"
    },
    {
      imageURL: "",
      name: "\u8AAA\u5531\u5408\u6210",
      description: "\u8AAA\u5531\u5408\u6210\u53EF\u4EE5\u5C07\u8F38\u5165\u7684\u6587\u5B57\u914D\u5408\u9078\u64C7\u7684\u7684\u80CC\u666F\u97F3\u6A02\u3001\u8A9E\u901F\u53CA\u8A9E\u8ABF\u8F49\u63DB\u70BA\u8AAA\u5531\u6B4C\u66F2\uFF0C\u751F\u6210\u7684\u6B4C\u66F2\u81EA\u7136\u6D41\u66A2\u3001\u97F3\u8272\u6E05\u6670\u800C\u4E14\u7BC0\u594F\u611F\u5F37\u3002\u4F7F\u7528\u8005\u53EF\u4EE5\u900F\u904E\u8ABF\u6574\u4E0D\u540C\u7684\u97F3\u6A02\u548C\u8A9E\u97F3\u8A2D\u7F6E\uFF0C\u5275\u4F5C\u51FA\u7B26\u5408\u81EA\u5DF1\u53E3\u5473\u7684\u8AAA\u5531\u6B4C\u66F2",
      url: "https://www.volcengine.com/products/Rap-synthesis"
    }
  ],
  read: [
    {
      imageURL: "",
      name: "Poe",
      url: "https://poe.com/ChatGPT",
      description: "Poe AI \u662F\u4E00\u6B3E\u57FA\u65BC\u4EBA\u5DE5\u667A\u80FD\u7684\u804A\u5929\u5E73\u53F0\uFF0C\u5B83\u5229\u7528\u6700\u5148\u9032\u7684\u81EA\u7136\u8A9E\u8A00\u8655\u7406\u548C\u6A5F\u5668\u5B78\u7FD2\u6280\u8853\uFF0C\u53EF\u4EE5\u8207\u7528\u6236\u9032\u884C\u667A\u80FD\u5316\u7684\u5C0D\u8A71\u548C\u4EA4\u4E92\u3002\u5B83\u53EF\u4EE5\u7406\u89E3\u4E26\u89E3\u91CB\u7528\u6236\u7684\u81EA\u7136\u8A9E\u8A00\u8F38\u5165\uFF0C\u4E26\u81EA\u52D5\u56DE\u7B54\u7528\u6236\u7684\u554F\u984C\u3001\u63D0\u4F9B\u5EFA\u8B70\u3001\u57F7\u884C\u4EFB\u52D9\u7B49"
    },
    {
      imageURL: "",
      name: "Semantris",
      url: "https://research.google.com/semantris",
      description: "Semantris \u662F\u4E00\u6B3E\u4F7F\u7528\u6A5F\u5668\u5B78\u7FD2\u7684\u55AE\u8A5E\u806F\u60F3\u904A\u6232\u3002\u7576\u8F38\u5165\u4E00\u500B\u8A5E\u8A9E\u6642\uFF0CAI\u6703\u6AA2\u67E5\u904A\u6232\u4E2D\u7684\u6240\u6709\u55AE\u8A5E\uFF0C\u4E26\u9078\u64C7\u5B83\u8A8D\u70BA\u6700\u76F8\u95DC\u7684\u55AE\u8A5E\u3002\u7531\u65BCAI\u63A5\u53D7\u904E\u5404\u7A2E\u4E3B\u984C\u7684\u5C0D\u8A71\u6587\u672C\u8A13\u7DF4\uFF0C\u56E0\u6B64\u5B83\u80FD\u5920\u6839\u64DA\u8A5E\u7FA9\u5EFA\u7ACB\u591A\u7A2E\u985E\u578B\u7684\u95DC\u806F"
    },
    {
      imageURL: "",
      name: "\u8A69\u4EBA\u5C0F\u51B0",
      url: "https://poem.xiaoice.com/",
      description: "\u8A69\u4EBA\u5C0F\u51B0\u80FD\u5920\u6839\u64DA\u7528\u6236\u6240\u63D0\u4F9B\u7684\u5716\u7247\u548C\u6587\u5B57\u63D0\u793A\uFF0C\u751F\u6210\u4E0D\u540C\u9577\u5EA6\u7684\u4E2D\u6587\u8A69"
    }
  ],
  create: [
    {
      name: "AI Duet",
      imageURL: "",
      url: "https://experiments.withgoogle.com/ai/ai-duet/view/",
      description: "AI Duet\u662F\u4E00\u500B\u4E92\u52D5\u97F3\u6A02\u5DE5\u5177\uFF0C\u5B83\u5C07\u4EBA\u5DE5\u667A\u80FD\u6280\u8853\u61C9\u7528\u65BC\u97F3\u6A02\u5275\u4F5C\u548C\u8868\u6F14\u4E2D\u3002\u901A\u904E\u6A5F\u5668\u5B78\u7FD2\u548C\u5373\u6642\u97F3\u983B\u8655\u7406\uFF0C\u4F7F\u7528\u8005\u53EF\u4EE5\u900F\u904E\u9375\u76E4\u3001MIDI\u9375\u76E4\u6216\u5176\u4ED6\u6A02\u5668\u8207AI Duet\u4E92\u52D5\uFF0CAI Duet\u6703\u5728\u5373\u6642\u8A08\u7B97\u5F8C\u751F\u6210\u4E00\u6BB5\u5373\u8208\u97F3\u6A02\u56DE\u61C9\u3002AI Duet\u662F\u4E00\u500B\u6709\u8DA3\u7684\u97F3\u6A02\u6559\u80B2\u5DE5\u5177\uFF0C\u5E6B\u52A9\u97F3\u6A02\u6559\u80B2\u8005\u5411\u5B78\u751F\u5C55\u793A\u4EBA\u5DE5\u667A\u80FD\u6280\u8853\u5728\u97F3\u6A02\u9818\u57DF\u4E2D\u7684\u61C9\u7528"
    },
    {
      imageURL: "",
      url: "https://huggingface.co/spaces/akhaliq/AnimeGANv2",
      name: "AnimeGAN v2",
      description: "AnimeGANv2 \u80FD\u5920\u5C07\u7528\u5BB6\u8F38\u5165\u7684\u7167\u7247\u8F49\u63DB\u70BA\u52D5\u756B\u98A8\u683C"
    },
    {
      imageURL: "",
      name: "Blob Opera",
      description: "Blob Opera\u662F\u4E00\u6B3E\u7531Google\u958B\u767C\u7684\u57FA\u65BC\u4EBA\u5DE5\u667A\u80FD\u7684\u97F3\u6A02\u4E92\u52D5\u5DE5\u5177\uFF0C\u4F7F\u7528\u8005\u901A\u904E\u6ED1\u9F20\u63A7\u5236\u56DB\u500B\u5361\u901ABlob\u7684\u9AD8\u4F4E\u97F3\u3001\u97F3\u8ABF\u548C\u97F3\u91CF\u7B49\u5C6C\u6027\uFF0C\u5373\u8208\u5275\u4F5C\u548C\u6F14\u5531\u81EA\u5DF1\u7684\u6B4C\u66F2\u3002\u900F\u904E\u6A5F\u5668\u5B78\u7FD2\u6280\u8853\u548C\u5373\u6642\u97F3\u983B\u8655\u7406\uFF0CBlob Opera\u53EF\u4EE5\u5E6B\u52A9\u97F3\u6A02\u6559\u80B2\u8005\u5411\u5B78\u751F\u5C55\u793A\u4EBA\u5DE5\u667A\u80FD\u6280\u8853\u5728\u97F3\u6A02\u5275\u4F5C\u548C\u6559\u5B78\u4E2D\u7684\u61C9\u7528",
      url: "https://artsandculture.google.com/experiment/blob-opera/AAHWrq360NcGbw?cp=e30"
    },
    {
      imageURL: "",
      name: "Image-to-Image Demo",
      description: "Image-to-Image \u7DB2\u7AD9\u5305\u62EC\u591A\u500B\u4EBA\u5DE5\u667A\u80FD\u5BE6\u9A57\uFF0C\u900F\u904E\u8A13\u7DF4\u5716\u50CF\u5C0D\uFF08\u6A19\u7C64\u8207\u5716\u50CF\uFF09\uFF0C\u5C07\u7528\u6236\u624B\u7E6A\u7684\u8C93\u3001\u5EFA\u7BC9\u7269\u3001\u624B\u888B\u6216\u978B\u8F49\u63DB\u6210\u5716\u50CF",
      url: "https://affinelayer.com/pixsrv/"
    },
    {
      name: "Random Face Generator",
      url: "https://this-person-does-not-exist.com/en",
      imageURL: "",
      description: "Random Face Generator \u662F\u4E00\u500B\u57FA\u65BC\u4EBA\u5DE5\u667A\u80FD\u6280\u8853\u958B\u767C\u7684\u4EBA\u81C9\u751F\u6210\u5668\uFF0C\u80FD\u5920\u96A8\u6A5F\u751F\u6210\u5177\u6709\u591A\u7A2E\u4E0D\u540C\u7279\u5FB5\u548C\u98A8\u683C\u7684\u4EBA\u81C9\u5716\u50CF\u3002\u4F7F\u7528\u8005\u53EF\u4EE5\u900F\u904E\u8ABF\u6574\u591A\u500B\u53C3\u6578\uFF0C\u4F8B\u5982\u5E74\u9F61\u3001\u6027\u5225\u3001\u7A2E\u65CF\u3001\u9762\u90E8\u7279\u5FB5\u7B49\uFF0C\u751F\u6210\u7B26\u5408\u81EA\u5DF1\u9700\u6C42\u7684\u4EBA\u81C9\u5716\u50CF"
    },
    {
      name: "AnyTools",
      url: "https://anytools.pro/en/img/editor/styling",
      imageURL: "",
      description: "AnyTools.pro\u662F\u4E00\u500B\u57FA\u65BC\u4EBA\u5DE5\u667A\u80FD\u7684\u5716\u50CF\u548C\u8996\u983B\u98A8\u683C\u9077\u79FB\uFF08Style Transfer\uFF09\u5DE5\u5177\uFF0C\u80FD\u5920\u5C07\u4E00\u7A2E\u5716\u50CF\u7684\u98A8\u683C\u61C9\u7528\u5230\u53E6\u4E00\u7A2E\u5716\u50CF\u4E0A\uFF0C\u5F9E\u800C\u5275\u9020\u51FA\u65B0\u7684\u85DD\u8853\u6548\u679C\u3002\u5B83\u63D0\u4F9B\u4E86\u591A\u7A2E\u9810\u8A2D\u7684\u98A8\u683C\u7BC4\u672C\uFF0C\u540C\u6642\u4E5F\u652F\u63F4\u4F7F\u7528\u8005\u4E0A\u50B3\u81EA\u5B9A\u7684\u98A8\u683C\u7BC4\u672C\u3002\u9084\u53EF\u4EE5\u5C0D\u8F38\u51FA\u7D50\u679C\u9032\u884C\u5FAE\u8ABF\u548C\u512A\u5316"
    }
  ],
  advance: [
    {
      imageURL: "",
      name: "Keras.js",
      url: "https://transcranial.github.io/keras-js",
      description: "Keras \u662F\u4E00\u500B\u958B\u6E90\u795E\u7D93\u7DB2\u8DEF\u5EAB\u3002\u5728Keras.js\uFF0C\u7528\u6236\u53EF\u4EE5\u9AD4\u9A57\u4E0D\u540CAI\u5BE6\u9A57\uFF0C\u4F8B\u5982\u624B\u5BEB\u6578\u5B57\u8B58\u5225\u3001\u5716\u50CF\u8B58\u5225\u3001\u8D85\u89E3\u6790\u5EA6\u6210\u50CF\u7B49\uFF0C\u5F9E\u4E2D\u5B78\u7FD2\u4E0D\u540C\u6DF1\u5EA6\u795E\u7D93\u7DB2\u7D61\u548C\u5DE5\u4F5C\u539F\u7406"
    },
    {
      imageURL: "",
      name: "Tensorflow Playground",
      url: "http://playground.tensorflow.org",
      description: "\u5728Tensorflow Playground \u4E2D\uFF0C\u7528\u6236\u53EF\u4EE5\u900F\u904E\u8ABF\u6574\u6DF1\u5EA6\u795E\u7D93\u7DB2\u7D61\u7684\u5C64\u6578\u3001\u795E\u7D93\u5143\u6578\u91CF\u3001\u6FC0\u52F5\u51FD\u6578\u3001\u5B78\u7FD2\u7387\u7B49\u5E38\u898B\u795E\u7D93\u7DB2\u7D61\u8A13\u7DF4\u53C3\u6578\uFF0C\u89C0\u5BDF\u4E0D\u540C\u6578\u503C\u5C0DAI\u8B58\u5225\u5668\u6A21\u578B\u6548\u679C\u7684\u5F71\u97FF"
    }
  ]
};
const _sfc_main = {
  name: "Resource",
  data() {
    return {
      focus: null,
      focusClass: null,
      externalJson: null
    };
  },
  mounted() {
    const self = this;
    self.externalJson = defaultExternalJson;
    self.focusClass = self.externalJson.vision;
    self.focus = self.focusClass[0];
  },
  methods: {
    setFocus(item) {
      this.focus = item;
    },
    setFocusClass(className) {
      this.focusClass = this.externalJson[className];
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Title = Title;
  const _component_ResourceItem = __nuxt_component_1;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Title, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u5176\u4ED6\u8CC7\u6E90`);
      } else {
        return [
          createTextVNode("\u5176\u4ED6\u8CC7\u6E90")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="pageContent-container"><div class="text-container" onclick=""><label class="subTitle">\u5176\u4ED6\u8CC7\u6E90</label><br><br><div class="resourceContainer"><div class="resourceType"><label class="${ssrRenderClass({ active: $data.externalJson != null && $data.externalJson["vision"] == $data.focusClass })}">\u8996\u89BA</label><label class="${ssrRenderClass({ active: $data.externalJson != null && $data.externalJson["hear"] == $data.focusClass })}">\u807D\u89BA</label><label class="${ssrRenderClass({ active: $data.externalJson != null && $data.externalJson["speak"] == $data.focusClass })}">\u8A9E\u97F3</label><label class="${ssrRenderClass({ active: $data.externalJson != null && $data.externalJson["read"] == $data.focusClass })}">\u7406\u89E3</label><label class="${ssrRenderClass({ active: $data.externalJson != null && $data.externalJson["create"] == $data.focusClass })}">\u5275\u4F5C</label><label class="${ssrRenderClass({ active: $data.externalJson != null && $data.externalJson["advance"] == $data.focusClass })}">\u9032\u968E</label></div><div class="resourceSelector unselectable">`);
  if ($data.externalJson != null) {
    _push(`<!--[-->`);
    ssrRenderList($data.focusClass, (item) => {
      _push(ssrRenderComponent(_component_ResourceItem, {
        key: item.name,
        text: item.name,
        onClick: ($event) => $options.setFocus(item),
        onTouchleave: ($event) => $options.setFocus(item),
        class: { active: $data.focus == item }
      }, null, _parent));
    });
    _push(`<!--]-->`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><div class="resourceDescriptor">`);
  if ($data.focus != null) {
    _push(`<!--[--><div class="title">${ssrInterpolate($data.focus.name)}</div><div class="description" style="${ssrRenderStyle({ "font-size": "16px", "line-height": "24px" })}">${ssrInterpolate($data.focus.description)}</div><div class="media"><a${ssrRenderAttr("href", $data.focus.url)} target="_blank">\u524D\u5F80\u7DB2\u7AD9</a></div><!--]-->`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div></div></div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/resource.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const resource = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { resource as default };
//# sourceMappingURL=resource-9f66ceaa.mjs.map
