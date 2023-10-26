import { _ as _export_sfc, T as Title, M as Meta } from '../server.mjs';
import { useSSRContext, withCtx, createTextVNode, mergeProps } from 'vue';
import { ssrRenderComponent, ssrRenderStyle, ssrRenderClass, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrRenderAttrs } from 'vue/server-renderer';
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
  name: "ResourceItem",
  props: {
    text: String,
    url: String
  },
  methods: {
    data() {
      return {
        src: null
      };
    },
    click() {
      this.$emit("click");
    },
    touchleave() {
      this.$emit("touchleave");
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "resourceItem" }, _attrs))}><div class="image"><img${ssrRenderAttr("src", "https://www.google.com/s2/favicons?sz=64&domain=" + $props.url)}${ssrRenderAttr("alt", $props.text.charAt(0))} style="${ssrRenderStyle({ "width": "50%", "height": "50%", "font-size": "30px" })}"></div><div style="${ssrRenderStyle({ "text-align": "center", "min-height": "40px" })}">${ssrInterpolate($props.text)}</div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ResourceItem.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const defaultExternalJson = {
  name: "external",
  vision: [
    {
      imageUrl: "",
      name: "Quick Draw",
      url: "https://quickdraw.withgoogle.com/",
      description: "Quick, Draw! \u662F\u7531Google\u958B\u767C\u7684\u4E00\u6B3E\u756B\u5716\u904A\u6232\uFF0C\u73A9\u5BB6\u6309\u63D0\u793A\u756B\u5716\uFF0C\u7531\u6DF1\u5EA6\u795E\u7D93\u7DB2\u7D61\u731C\u73A9\u5BB6\u5728\u756B\u751A\u9EBD\u3002\u540C\u6642\uFF0CAI\u4E5F\u6703\u900F\u904E\u4E0D\u540C\u73A9\u5BB6\u7E6A\u756B\u7684\u5716\u6848\u4E0D\u65B7\u5B78\u7FD2\uFF0C\u63D0\u9AD8\u731C\u6E2C\u80FD\u529B\u3002"
    },
    {
      imageURL: "",
      name: "Semi-Conductor",
      url: "https://semiconductor.withgoogle.com/",
      description: "Semi-Conductor \u662F\u4E00\u500B\u59FF\u52E2\u5075\u6E2C\u5BE6\u9A57\uFF0C\u7528\u5BB6\u53EF\u5728\u93E1\u982D\u524D\u64FA\u51FA\u4E0D\u540C\u7684\u59FF\u52E2\uFF0C\u6307\u63EE\u6A02\u968A\uFF0C\u4F8B\u5982\uFF1A\u6539\u8B8A\u97F3\u6A02\u7BC0\u594F\u3001\u97F3\u91CF\u548C\u6A02\u5668\uFF0C\u8B93\u7528\u6236\u5728\u97F3\u6A02\u9818\u57DF\u4E2D\u767C\u63EE\u5275\u610F\u3002"
    },
    {
      imageURL: "",
      name: "Teacheable Machine",
      url: "https://teachablemachine.withgoogle.com/",
      description: "Teachable Machine\u662F\u7531Google\u57FA\u65BCAI\u958B\u767C\u7684\u7DB2\u9801\u61C9\u7528\u3002\u7528\u6236\u53EA\u9700\u8F38\u5165\u5716\u50CF\u3001\u8072\u97F3\u6216\u59FF\u52E2\u7B49\u6578\u64DA\uFF0C\u4FBF\u53EF\u8A13\u7DF4AI\uFF0C\u751F\u6210\u81EA\u5DF1\u7368\u5275\u7684\u6A5F\u5668\u5B78\u7FD2\u6A21\u578B\uFF0C\u9069\u5408\u521D\u5B78\u8005\u548C\u6559\u5E2B\u4F7F\u7528\uFF0C\u6709\u52A9\u4ED6\u5011\u6DF1\u5165\u4E86\u89E3\u6A5F\u5668\u5B78\u7FD2\u6280\u8853\u7684\u61C9\u7528\u548C\u539F\u7406\u3002"
    },
    {
      imageURL: "",
      name: "Odd One Out",
      url: "https://artsandculture.google.com/experiment/odd-one-out/wAHNn4JsVTFOiw",
      description: "Odd One Out \u662F Google Arts & Culture \u4E0A\u6E2C\u8A66\u4F60\u7684\u89C0\u5BDF\u80FD\u529B\u7684\u904A\u6232\u3002\u904A\u6232\u5448\u73FE\u4E86\u4E00\u7CFB\u5217\u85DD\u8853\u4F5C\u54C1\uFF0C\u73A9\u5BB6\u8981\u5728\u5176\u4E2D\u8B58\u5225\u51FAAI\u751F\u6210\u7684\u300C\u5192\u540D\u9802\u66FF\u8005\u300D\u3002"
    },
    {
      imageURL: "",
      name: "Memswift",
      url: "https://memeswift.com/?ref=futuretools.io",
      description: "Memeswift \u662F\u4F7F\u7528AI\u628A\u7528\u5BB6\u4E0A\u50B3\u6216\u6355\u7372\u7684\u7167\u7247\u8B8A\u70BA\u641E\u7B11\u7684\u8868\u60C5\u5305\u3002\u8A72\u5DE5\u5177\u652F\u6301 jpg\uFF0Cjpeg \u548C webp \u7684\u6A94\u6848\u3002"
    },
    {
      imageURL: "",
      name: "StarByFace",
      url: "https://starbyface.com/?ref=futuretools.io#google_vignette",
      description: '"StarByFace\u662F\u4E00\u500B\u7528AI\u6BD4\u8F03\u4EBA\u81C9\u7684\u5DE5\u5177\uFF0C\u7528\u6236\u4E0A\u50B3\u4ED6\u5011\u7684\u7167\u7247\uFF0C\u7CFB\u7D71\u4EBA\u81C9\u9EDE\u6AA2\u6E2C\u6703\u627E\u53BB\u5B9A\u4F4D\u4EBA\u81C9\u7684\u95DC\u9375\u90E8\u4F4D\uFF0C\u4F8B\u5982\u7709\u6BDB\u3001\u773C\u775B\u3001\u9F3B\u5B50\u3001\u5634\u5DF4\u7684\u4F4D\u7F6E\uFF0C\u795E\u7D93\u7DB2\u7D61\u6703\u5C07\u4EBA\u8207\u540D\u4EBA\u9762\u5B54\u9032\u884C\u6BD4\u8F03\uFF0C\u4E26\u63A8\u85A6\u6700\u76F8\u4F3C\u7684\u540D\u4EBA\u9762\u5B54\u3002"'
    },
    {
      imageURL: "",
      name: "Machine Learning for Kids",
      url: "https://machinelearningforkids.co.uk/#!/about",
      description: "Machine Learning for Kids\u662F\u4E00\u500B\u70BA\u521D\u5B78\u8005\u4ECB\u7D39\u6A5F\u5668\u5B78\u7FD2\u7684\u5E73\u53F0\u3002\u5B83\u63D0\u4F9B\u4E86\u4E00\u500B\u6613\u65BC\u4F7F\u7528\u7684\u6307\u5C0E\u74B0\u5883\uFF0C\u7528\u65BC\u8A13\u7DF4\u6A5F\u5668\u5B78\u7FD2\u6A21\u578B\u4F86\u8B58\u5225\u6587\u672C\u3001\u6578\u5B57\u3001\u5716\u50CF\u6216\u8072\u97F3\u3002\u5152\u7AE5\u53EF\u4EE5\u5C07\u9019\u4E9B\u6A21\u578B\u6DFB\u52A0\u5230\u6559\u80B2\u7DE8\u78BC\u5E73\u53F0 Scratch \u548C App Inventor \u4E2D\uFF0C\u4F7F\u7528\u4ED6\u5011\u8A13\u7DF4\u7684\u6A5F\u5668\u5B78\u7FD2\u6A21\u578B\u5275\u5EFA\u9805\u76EE\u548C\u69CB\u5EFA\u904A\u6232\u3002"
    }
  ],
  hear: [
    {
      imageURL: "",
      name: "Web Speech API",
      url: "https://www.google.com/intl/en/chrome/demos/speech.html",
      description: "Web Speech API \u63D0\u4F9B\u591A\u500B\u8A9E\u8A00\u7684\u81EA\u52D5\u8A9E\u97F3\u8B58\u5225\u529F\u80FD\uFF0C\u5C07\u7528\u6236\u900F\u904E\u9EA5\u514B\u98A8\u8F38\u5165\u7684\u8A9E\u97F3\u8F49\u5316\u70BA\u6587\u5B57\u3002\u540C\u6642\uFF0C\u958B\u767C\u8005\u53EF\u8655\u7406\u6709\u95DC\u6587\u5B57\uFF0C\u4F8B\u5982\u5206\u6790\u6587\u672C\uFF0C\u63D0\u53D6\u95DC\u9375\u5B57\u7B49\u7B49\u3002"
    },
    {
      imageURL: "",
      name: "Conformer-2",
      url: "https://www.assemblyai.com/playground/source",
      description: "Conformer-2\u662F\u4E00\u500B\u81EA\u52D5\u8A9E\u97F3\u8B58\u5225\u7684AI \u6A21\u578B\uFF0C\u53EF\u7528\u65BC\u8A9E\u97F3\u8B58\u5225\u3001\u8AAA\u8A71\u6AA2\u6E2C\u548C\u97F3\u983B\u6458\u8981\u3002 \u7528\u6236\u53EF\u4EE5\u4E0A\u50B3\u97F3\u983B\u6587\u4EF6\u6216\u8996\u983B\u6587\u4EF6\uFF0C\u6216\u8F38\u5165YouTube\u8996\u983B\u93C8\u63A5\uFF0CAI\u53EF\u4EE5\u5E6B\u4F60\u8F49\u63DB\u5B57\u5E55\u53CA\u4F5C\u91CD\u9EDE\u7E3D\u7D50\u7B49\u3002"
    },
    {
      imageURL: "",
      name: "LeMUR",
      url: "https://www.assemblyai.com/playground/v2",
      description: "LeMUR \u662F\u57FA\u65BC\u8A9E\u97F3\u6578\u64DA\u69CB\u5EFA\u7684\u5927\u578B\u8A9E\u8A00\u6A21\u578B\uFF08LLM\uFF09\uFF0C \u7528\u6236\u53EF\u4E0A\u8F09\u8A9E\u97F3\u6A94\u6848\u6216\u8F38\u5165YouTube\u8996\u983B\u93C8\u63A5\uFF0C LeMUR \u4FBF\u80FD\u8F49\u63DB\u5B57\u5E55\u53CA\u7E3D\u7D50\u5185\u5BB9\uFF0C \u7528\u6236\u4E5F\u53EF\u4EE5\u8ABF\u6574\u7E3D\u7D50\u7684\u683C\u5F0F\u53CA\u767C\u554F\u6709\u95DC\u6A94\u6848\u5167\u5BB9\u7684\u554F\u984C\u3002"
    },
    {
      imageURL: "",
      name: "Riverside",
      url: "https://riverside.fm/transcription?ref=futuretools.io",
      description: "Riverside \u662F\u8B93\u7528\u6236\u8F49\u9304\u97F3\u983B\u548C\u8996\u983B\u6587\u4EF6\u7684\u5DE5\u5177\u3002\u7528\u6236\u53EA\u9700\u5C07\u6587\u4EF6\u4E0A\u50B3\u5230\u5E73\u53F0\u5373\u53EF\u9032\u884C\u8F49\u9304\u3002\u8A72\u5DE5\u5177\u652F\u6301\u591A\u7A2E\u6587\u4EF6\u985E\u578B\uFF0C\u5305\u62EC MP3\u3001WAV\u3001MP4 \u548C MOV\uFF0C\u53CA\u63D0\u4F9B 100 \u591A\u7A2E\u8A9E\u8A00\u7684\u8F49\u9304\u3002\u7528\u6236\u53EF\u4EE5\u9078\u64C7\u4E0B\u8F09 TXT \u683C\u5F0F\u7684\u6587\u5B57\u8A18\u9304\u6216\u7372\u53D6 SRT \u683C\u5F0F\u7684\u5B57\u5E55\u3002"
    }
  ],
  speak: [
    {
      imageURL: "",
      name: "TTS Demo",
      url: "https://ttsdemo.com/ ",
      description: "TTS Demo \u662F\u4E00\u500B\u6587\u5B57\u8F49\u8A9E\u97F3\u5408\u6210\u7CFB\u7D71\uFF0C\u6839\u64DA\u7528\u6236\u9078\u64C7\u7684\u8A9E\u8A00\u3001\u97F3\u8CEA\u548C\u8A9E\u8ABF\u7B49\uFF0C\u5C07\u6587\u672C\u8F38\u51FA\u6210\u8072\u97F3\uFF0C\u53EF\u61C9\u7528\u65BC\u6717\u8B80\u96FB\u5B50\u66F8\u3001\u8A9E\u97F3\u5C0E\u822A\u3001\u8A9E\u97F3\u63D0\u793A\u7B49\u3002"
    }
  ],
  read: [
    {
      imageURL: "",
      name: "Semantris",
      url: "https://research.google.com/semantris",
      description: "Semantris\u662F\u4E00\u6B3E\u63A5\u53D7\u904E\u5C0D\u8A71\u6587\u672C\u8A13\u7DF4\u7684\u55AE\u8A5E\u806F\u60F3\u904A\u6232\uFF0C\u80FD\u5224\u65B7\u54EA\u4E9B\u8A5E\u7FA9\u6709\u95DC\u806F\u3002\u904A\u6232\u6709\u5169\u500B\u6A21\u5F0F\uFF1A(1) \u8981\u6C42\u73A9\u5BB6\u8F38\u5165\u6307\u5B9A\u55AE\u8A5E\u7684\u95DC\u806F\u5B57\u8A5E\uFF0C\u4EE5\u6D88\u9664\u4E0D\u65B7\u7E8D\u7A4D\u7684\u6307\u5B9A\u55AE\u8A5E\uFF1B(2) \u7531AI\u6AA2\u67E5\u904A\u6232\u4E2D\u6240\u6709\u55AE\u8A5E\uFF0C\u5224\u65B7\u51FA\u5176\u4E2D\u8207\u73A9\u5BB6\u8F38\u5165\u7684\u5B57\u8A5E\u6700\u76F8\u95DC\u7684\u4E00\u500B\u3002"
    },
    {
      imageURL: "",
      name: "Replicate",
      url: "https://replicate.com/methexis-inc/img2prompt?ref=FutureTools.io",
      description: "Replicate\u662F\u4E00\u6B3E\u4F7F\u7528AI\u5F9E\u4E0D\u540C\u89D2\u5EA6\u5206\u6790\u53CA\u7406\u89E3\u5716\u50CF\u7684\u5DE5\u5177\uFF0C\u901A\u904E\u5229\u7528AI\u6A21\u578B\u4F86\u7372\u53D6\u8207\u5716\u50CF\u5167\u5BB9\u53CA\u6A23\u5F0F\u5339\u914D\u7684\u6587\u672C\u63D0\u793A\u3002"
    },
    {
      imageURL: "",
      name: "OnlineGPT",
      url: "https://onlinegpt.org/chat/",
      description: "OnlineGPT\u662F\u4E00\u6B3E\u57FA\u65BCAI\u7684\u804A\u5929\u5E73\u53F0\uFF0C\u5229\u7528\u81EA\u7136\u8A9E\u8A00\u8655\u7406\u548C\u6A5F\u5668\u5B78\u7FD2\u6280\u8853\uFF0C\u8207\u7528\u6236\u5C0D\u8A71\uFF0C\u53EF\u7406\u89E3\u548C\u89E3\u91CB\u7528\u6236\u7684\u81EA\u7136\u8A9E\u8A00\uFF0C\u56DE\u7B54\u7528\u6236\u7684\u554F\u984C\uFF0C\u63D0\u4F9B\u5EFA\u8B70\uFF0C\u57F7\u884C\u4EFB\u52D9\u7B49\u3002"
    },
    {
      imageURL: "",
      name: "Teach Anything",
      url: "https://www.teach-anything.com/?ref=futuretools.io",
      description: "Teach Anything\u662F\u4E00\u500B\u6559\u5B78\u5DE5\u5177\uFF0C\u7528\u6236\u901A\u904E\u7DE8\u5BEB\u554F\u984C\u3001\u9078\u64C7\u8A9E\u8A00\u3001\u548C\u96E3\u5EA6\u7D1A\u5225\u4F86\u5FEB\u901F\u7372\u5F97\u554F\u984C\u7684\u7B54\u6848\u3002"
    },
    {
      imageURL: "",
      name: "Hotoke AI",
      url: "https://hotoke.ai/",
      description: "Hotoke AI\u662F\u4EE5ChatGPT\u505A\u57FA\u790E\uFF0C\u7531\u65E5\u672C\u958B\u767C\u7684AI\u4F5B\u7956 \u3002\u7528\u6236\u53EF\u4EE5\u8F38\u5165\u4EBA\u751F\u7591\u554F\uFF0CAI\u4FBF\u6703\u5F9E\u4F5B\u7CFB\u7684\u89D2\u5EA6\u56DE\u7B54\u4F60\u7684\u7B54\u6848\u3002Hotoke AI \u652F\u63F4\u591A\u500B\u8A9E\u8A00\uFF0C\u5305\u62EC\u4E2D\u6587\u7248\u3002"
    },
    {
      imageURL: "",
      name: "Character.ai",
      url: "https://beta.character.ai/",
      description: "Character.ai\u662F\u751F\u6210\u5F0FAI\u804A\u5929\u6A5F\u5668\u4EBA\uFF0C\u7528\u6236\u53EF\u4EE5\u9078\u64C7\u8DDF\u4E0D\u540C\u7684\u4EBA\u7269\uFF0C\u5305\u62EC\u540D\u4EBA\u3001\u53F2\u524D\u4EBA\u7269\u3001\u52D5\u6F2B\u89D2\u8272\u7B49\u3002AI\u6703\u6A21\u64EC\u89D2\u8272\u7684\u6027\u683C\u8207\u7528\u6236\u804A\u5929\u3002 \u6B64\u5916\uFF0C\u7528\u6236\u53EF\u81EA\u884C\u8A2D\u8A08\u300C\u865B\u64EC\u89D2\u8272\u300D\u53CA\u4ED6\u7684\u300C\u500B\u6027\u300D\uFF0C\u5275\u5EFA\u81EA\u5DF1\u7684\u804A\u5929\u6A5F\u5668\u4EBA\u3002"
    },
    {
      imageURL: "",
      name: "ChatPDF",
      url: "https://www.chatpdf.com/",
      description: "ChatPDF \u6703\u5F9E\u5927\u578B PDF \u6587\u4EF6\uFF0C\u5982\u6CD5\u5F8B\u5408\u540C\u3001\u66F8\u7C4D\u6216\u7814\u7A76\u8AD6\u6587\u4E2D\u5FEB\u901F\u63D0\u53D6\u4E3B\u8981\u4FE1\u606F\uFF0C\u8B93\u7528\u6236\u53EF\u4EE5\u66F4\u5BB9\u6613\u660E\u767D\u8907\u96DC\u7684\u6587\u4EF6\u3002"
    }
  ],
  create: [
    {
      name: "AI Duet",
      imageURL: "",
      url: "https://experiments.withgoogle.com/ai/ai-duet/view/",
      description: "AI Duet\u662F\u4E00\u500B\u4E92\u52D5\u97F3\u6A02\u5DE5\u5177\uFF0C\u901A\u904E\u6A5F\u5668\u5B78\u7FD2\u548C\u5373\u6642\u97F3\u983B\u8655\u7406\uFF0C\u8B93\u4F7F\u7528\u8005\u900F\u904E\u9375\u76E4\u3001MIDI\u9375\u76E4\u6216\u5176\u4ED6\u6A02\u5668\u8207AI Duet\u4E92\u52D5\uFF0CAI Duet \u6703\u96A8\u5373\u751F\u6210\u4E00\u6BB5\u97F3\u6A02\u56DE\u61C9\u3002\u97F3\u6A02\u8001\u5E2B\u53EF\u7528AI Duet\u5411\u5B78\u751F\u5C55\u793A\u4EBA\u5DE5\u667A\u80FD\u6280\u8853\u5728\u97F3\u6A02\u9818\u57DF\u4E2D\u7684\u61C9\u7528\u3002"
    },
    {
      imageURL: "",
      url: "https://huggingface.co/spaces/akhaliq/AnimeGANv2",
      name: "AnimeGAN v2",
      description: "AnimeGANv2 \u5C07\u7528\u5BB6\u8F38\u5165\u7684\u7167\u7247\u8F49\u63DB\u70BA\u52D5\u756B\u98A8\u683C\u3002"
    },
    {
      imageURL: "",
      name: "Blob Opera",
      description: "Blob Opera \u662F\u4E00\u6B3EGoogle\u958B\u767C\u7684AI\u97F3\u6A02\u4E92\u52D5\u5DE5\u5177\uFF0C\u900F\u904E\u6A5F\u5668\u5B78\u7FD2\u6280\u8853\u548C\u5373\u6642\u97F3\u983B\u8655\u7406\uFF0C\u8B93\u4F7F\u7528\u8005\u80FD\u63A7\u5236\u56DB\u500B\u5361\u901ABlob\u7684\u97F3\u9AD8\u3001\u6BCD\u97F3\u548C\u97F3\u91CF\u7B49\uFF0C\u5275\u4F5C\u548C\u5373\u6642\u6F14\u5531\u6B4C\u66F2\u3002\u97F3\u6A02\u8001\u5E2B\u53EF\u7528Blob Opera\u5411\u5B78\u751F\u5C55\u793A\u4EBA\u5DE5\u667A\u80FD\u6280\u8853\u5728\u97F3\u6A02\u5275\u4F5C\u4E2D\u7684\u61C9\u7528\u3002",
      url: "https://artsandculture.google.com/experiment/blob-opera/AAHWrq360NcGbw?cp=e30"
    },
    {
      imageURL: "",
      name: "Fotor Style Transfer",
      description: "Fotor\u662F\u4E00\u500B\u57FA\u65BCAI\u5716\u50CF\u98A8\u683C\u9077\u79FB(Style Transfer)\u5DE5\u5177\uFF0C\u80FD\u5C07\u4E00\u7A2E\u5716\u50CF\u7684\u98A8\u683C\u61C9\u7528\u5230\u53E6\u4E00\u81EA\u884C\u4E0A\u50B3\u7684\u5716\u50CF\u4E0A\uFF0C\u5275\u9020\u65B0\u7684\u85DD\u8853\u6548\u679C\u3002",
      url: "https://www.fotor.com/features/style-transfer/"
    },
    {
      name: "Stable Diffusion",
      url: "https://stablediffusionweb.com/",
      imageURL: "",
      description: "Stable Diffusion \u662F\u4E00\u500BAI\u751F\u6210\u5716\u7247\u7684\u5DE5\u5177, \u900F\u904E\u8F38\u5165\u6587\u5B57\u4F86\u63CF\u8FF0\u5716\u7247\u7684\u7279\u5FB5, \u5C31\u53EF\u4EE5\u7522\u751F\u4E00\u4E9BAI\u5716\u7247\u3002"
    },
    {
      name: "Clipdrop",
      url: "https://clipdrop.co/uncrop",
      imageURL: "",
      description: "Clipdrop\u662F\u4E00\u500B\u201C\u53D6\u6D88\u88C1\u526A\u201D\u7684AI\u5DE5\u5177\uFF0C\u5B83\u4F7F\u7528 AI \u6280\u8853\u4F86\u7DE8\u8F2F\u5716\u50CF\u7684\u9577\u5BEC\u6BD4\uFF0C\u901A\u904E\u64F4\u5C55\u6216\u8ABF\u6574\u4E3B\u9AD4\u6216\u80CC\u666F\u4F86\u4FEE\u6539\u7167\u7247\u7684\u69CB\u5716\uFF0C\u53EF\u4EE5\u751F\u6210\u7B26\u5408\u6240\u9700\u5BEC\u9AD8\u6BD4\u7684\u65B0\u7248\u672C\u5716\u50CF\u3002"
    },
    {
      name: "Stable diffusion XL",
      url: "https://clipdrop.co/stable-diffusion",
      imageURL: "",
      description: "\u8207Stable diffusion \u76F8\u6BD4\uFF0C\u7528\u6236\u53EF\u4EE5\u7528\u66F4\u77ED\u7684\u6307\u793A\u751F\u6210\u66F4\u7684\u7F8E\u9E97\u7684\u5716\u50CF\u3002 \u6B64\u5916\uFF0C\u7528\u6236\u53EF\u4EE5\u9078\u64C7\u4E0D\u540C\u7684\u98A8\u683C\uFF0C\u4E26\u6307\u793A\u5716\u50CF\u4E2D\u8981\u907F\u514D\u7684\u5167\u5BB9\u3002"
    },
    {
      name: "Artbreeder",
      url: "https://www.artbreeder.com/",
      imageURL: "",
      description: "\u7528\u6236\u53EF\u4EE5\u5C07\u81EA\u5DF1\u6216\u7DB2\u7AD9\u4E0A\u7684\u4E0D\u540C\u5716\u50CF\u6DF7\u5408\u5728\u4E00\u8D77\uFF0C\u751F\u6210\u5168\u65B0\u7684\u5716\u50CF"
    },
    {
      name: "DeepAI",
      url: "https://deepai.org/machine-learning-model/cute-creature-generator",
      imageURL: "",
      description: "DeepAI \u662F\u4E00\u500B\u5716\u50CF\u7DE8\u8F2F\u5668\uFF0C\u6587\u672C\u5716\u50CF\u751F\u6210\u5668\u7528\u6236\u7528\u6587\u5B57\u6307\u793A\u7DB2\u7AD9\u7DE8\u8F2F\u5716\u50CF\uFF0C\u4F8B\u5982\u6539\u8B8A\u984F\u8272\u53CA\u80CC\u666F, \u4E5F\u53EF\u4EE5\u76F4\u63A5\u9078\u64C7\u4E00\u500B\u98A8\u683C\uFF0C\u751F\u6210\u65B0\u7684\u5716\u50CF\u3002"
    },
    {
      name: "Waveformer",
      url: "https://waveformer.replicate.dev/",
      imageURL: "",
      description: "Waveformer\u662F\u6DF1\u5EA6\u5B78\u7FD2\u521D\u5275\u516C\u53F8Anthropic\u958B\u767C\u3002\u7528\u6236\u53EA\u8981\u8F38\u5165\u4E00\u4E32\u60F3\u8981\u751F\u6210\u7684\u97F3\u6A02\u6587\u5B57\uFF0C\u4E26\u6307\u5B9A\u79D2\u6578\uFF0C\u5C31\u6703\u751F\u6210\u97F3\u6A02\u3002"
    },
    {
      name: "Zeroscope",
      url: "https://huggingface.co/spaces/fffiloni/zeroscope?ref=futuretools.io",
      imageURL: "",
      description: "Zeroscope \u662F\u4E00\u500B\u6587\u672C\u5230\u8996\u983B\u7684\u5DE5\u5177\uFF0C \u7528\u6236\u53EF\u4EE5\u8F38\u5165\u63CF\u8FF0\u6027\u6587\u5B57\u3001\u6558\u8FF0\u6216\u8173\u672C\uFF0C\u5DE5\u5177\u6703\u81EA\u52D5\u751F\u6210\u76F8\u61C9\u7684\u7121\u6C34\u5370\u8996\u983B\u5167\u5BB9\u3002 \u9019\u5C0D\u9700\u8981\u5FEB\u901F\u88FD\u4F5C\u8996\u983B\u5167\u5BB9\u800C\u7121\u9700\u7CBE\u6E5B\u7684\u8996\u983B\u7DE8\u8F2F\u6280\u80FD\u6216\u8CC7\u6E90\u7684\u4EBA\u7279\u5225\u6709\u7528\u3002"
    }
  ],
  advance: [
    {
      imageURL: "",
      name: "Keras.js",
      url: "https://transcranial.github.io/keras-js",
      description: "Keras \u662F\u4E00\u500B\u958B\u6E90\u795E\u7D93\u7DB2\u8DEF\u5EAB\uFF0C\u7528\u6236\u53EF\u5728\u6B64\u9AD4\u9A57\u4E0D\u540CAI\u5BE6\u9A57\uFF0C\u4F8B\u5982\uFF1A\u8B58\u5225\u624B\u5BEB\u6578\u5B57\uFF0C\u8B58\u5225\u5716\u50CF\uFF0C\u8D85\u89E3\u6790\u5EA6\u6210\u50CF\u7B49\uFF0C\u5F9E\u4E2D\u5B78\u7FD2\u4E0D\u540C\u6DF1\u5EA6\u795E\u7D93\u7DB2\u7D61\u7684\u5DE5\u4F5C\u539F\u7406\u3002"
    },
    {
      imageURL: "",
      name: "Tensorflow Playground",
      url: "http://playground.tensorflow.org",
      description: "\u5728Tensorflow Playground \u4E2D\uFF0C\u7528\u6236\u53EF\u8ABF\u6574\u6DF1\u5EA6\u795E\u7D93\u7DB2\u7D61\u7684\u5C64\u6578\u3001\u795E\u7D93\u5143\u6578\u91CF\u3001\u6FC0\u52F5\u51FD\u6578\u3001\u5B78\u7FD2\u7387\u7B49\u5E38\u898B\u795E\u7D93\u7DB2\u7D61\u8A13\u7DF4\u53C3\u6578\uFF0C\u89C0\u5BDF\u4E0D\u540C\u6578\u503C\u5C0DAI\u8B58\u5225\u5668\u6A21\u578B\u7684\u8868\u73FE\u6709\u4F55\u5F71\u97FF\u3002"
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
      this.focus = this.focusClass[0];
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Title = Title;
  const _component_Meta = Meta;
  const _component_ResourceItem = __nuxt_component_2;
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
  _push(ssrRenderComponent(_component_Meta, {
    name: "description",
    content: "\u591A\u500B\u7DB2\u4E0A\u514D\u8CBB\u7684AI \u5B78\u7FD2\u8CC7\u6E90\uFF0C\u597D\u73A9\u4E4B\u9918\u53C8\u4E0D\u7528\u8A3B\u518A\u767B\u8A18\uFF0C\u52A9\u4F60\u8F15\u9B06\u6109\u5FEB\u9AD4\u9A57AI\u7684\u5947\u5999\u3002"
  }, null, _parent));
  _push(`<div class="pageContent-container" style="${ssrRenderStyle({ "width": "100%" })}" data-v-0d44cc3c><div class="text-container" data-v-0d44cc3c><label class="subTitle font-big" data-v-0d44cc3c>iShare</label><div class="pageDescription font-small" data-v-0d44cc3c>\u82E6\u82E6\u641C\u5C0B\u7DB2\u4E0A\u514D\u8CBB\u7684AI \u5B78\u7FD2\u8CC7\u6E90\uFF0C\u597D\u73A9\u4E4B\u9918\u53C8\u4E0D\u60F3\u8A3B\u518A\u767B\u8A18\uFF1FiShare\u5E6B\u4F60\u8F15\u9B06\u6109\u5FEB\u9AD4\u9A57AI\u7684\u5947\u5999\u3002</div><br data-v-0d44cc3c><br data-v-0d44cc3c><div class="resourceContainer" data-v-0d44cc3c><div class="resourceType" data-v-0d44cc3c><label class="${ssrRenderClass({ active: $data.externalJson != null && $data.externalJson["vision"] == $data.focusClass })}" data-v-0d44cc3c>\u8996\u89BA</label><label class="${ssrRenderClass({ active: $data.externalJson != null && $data.externalJson["hear"] == $data.focusClass })}" data-v-0d44cc3c>\u807D\u89BA</label><label class="${ssrRenderClass({ active: $data.externalJson != null && $data.externalJson["speak"] == $data.focusClass })}" data-v-0d44cc3c>\u8A9E\u97F3</label><label class="${ssrRenderClass({ active: $data.externalJson != null && $data.externalJson["read"] == $data.focusClass })}" data-v-0d44cc3c>\u7406\u89E3</label><label class="${ssrRenderClass({ active: $data.externalJson != null && $data.externalJson["create"] == $data.focusClass })}" data-v-0d44cc3c>\u5275\u4F5C</label><label class="${ssrRenderClass({ active: $data.externalJson != null && $data.externalJson["advance"] == $data.focusClass })}" data-v-0d44cc3c>\u9032\u968E</label></div><div class="resourceSelector unselectable" data-v-0d44cc3c>`);
  if ($data.externalJson != null) {
    _push(`<!--[-->`);
    ssrRenderList($data.focusClass, (item) => {
      _push(ssrRenderComponent(_component_ResourceItem, {
        key: item.name,
        text: item.name,
        url: item.url,
        onClick: ($event) => $options.setFocus(item),
        onTouchleave: ($event) => $options.setFocus(item),
        class: { active: $data.focus == item }
      }, null, _parent));
    });
    _push(`<!--]-->`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><div class="resourceDescriptor" data-v-0d44cc3c>`);
  if ($data.focus != null) {
    _push(`<!--[--><div style="${ssrRenderStyle({ "position": "relative", "display": "flex", "flex-direction": "column", "flex-grow": "1", "max-height": "calc(100% - 50px)" })}" data-v-0d44cc3c><div class="title font-middle" style="${ssrRenderStyle({ "position": "relative", "padding": "0 0 10px" })}" data-v-0d44cc3c>${ssrInterpolate($data.focus.name)}</div><div class="description font-mini" style="${ssrRenderStyle({ "position": "relative", "line-height": "35px", "padding": "0 10px", "overflow-y": "auto", "height": "max-content" })}" data-v-0d44cc3c>${ssrInterpolate($data.focus.description)}</div></div><div class="media" style="${ssrRenderStyle({ "height": "50px" })}" data-v-0d44cc3c><a style="${ssrRenderStyle({})}"${ssrRenderAttr("href", $data.focus.url)} target="_blank" data-v-0d44cc3c>\u524D\u5F80\u7DB2\u7AD9</a></div><!--]-->`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div></div></div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ishare.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ishare = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-0d44cc3c"]]);

export { ishare as default };
//# sourceMappingURL=ishare-0d680fe2.mjs.map