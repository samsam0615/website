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
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "resourceItem" }, _attrs))}><div><img${ssrRenderAttr("src", "https://www.google.com/s2/favicons?sz=64&domain=" + $props.url)}${ssrRenderAttr("alt", $props.text.charAt(0))} style="${ssrRenderStyle({ "width": "50%", "height": "50%", "font-size": "30px" })}"></div></div>`);
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
      name: "Teacheable Machine (\u5716\u7247, \u59FF\u52E2)",
      url: "https://teachablemachine.withgoogle.com/",
      description: "Teachable Machine\u662F\u7531Google\u57FA\u65BCAI\u958B\u767C\u7684\u7DB2\u9801\u61C9\u7528\u3002\u7528\u6236\u53EA\u9700\u8F38\u5165\u5716\u50CF\u3001\u8072\u97F3\u6216\u59FF\u52E2\u7B49\u6578\u64DA\uFF0C\u4FBF\u53EF\u8A13\u7DF4AI\uFF0C\u751F\u6210\u81EA\u5DF1\u7368\u5275\u7684\u6A5F\u5668\u5B78\u7FD2\u6A21\u578B\uFF0C\u9069\u5408\u521D\u5B78\u8005\u548C\u6559\u5E2B\u4F7F\u7528\uFF0C\u6709\u52A9\u4ED6\u5011\u6DF1\u5165\u4E86\u89E3\u6A5F\u5668\u5B78\u7FD2\u6280\u8853\u7684\u61C9\u7528\u548C\u539F\u7406\u3002"
    },
    {
      imageURL: "",
      name: "Odd One Out",
      url: "https://artsandculture.google.com/experiment/odd-one-out/wAHNn4JsVTFOiw",
      description: "Odd One Out \u662F Google Arts & Culture \u4E0A\u6E2C\u8A66\u4F60\u7684\u89C0\u5BDF\u80FD\u529B\u7684\u904A\u6232\u3002\u904A\u6232\u5448\u73FE\u4E86\u4E00\u7CFB\u5217\u85DD\u8853\u4F5C\u54C1\uFF0C\u73A9\u5BB6\u8981\u5728\u5176\u4E2D\u8B58\u5225\u51FAAI\u751F\u6210\u7684\u300C\u5192\u540D\u9802\u66FF\u8005\u300D\u3002"
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
      name: "Teacheable Machine (\u97F3\u8A0A)",
      url: "https://teachablemachine.withgoogle.com/",
      description: "Teachable Machine\u662F\u7531Google\u57FA\u65BCAI\u958B\u767C\u7684\u7DB2\u9801\u61C9\u7528\u3002\u7528\u6236\u53EA\u9700\u9304\u88FD\u7C21\u77ED\u7684\u97F3\u8A0A\u6A23\u672C\uFF0C\u85C9\u6B64\u8A13\u7DF4AI\u6A21\u578B\u5C07\u97F3\u8A0A\u5206\u985E\u3002"
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
      description: "Random Face Generator \u662F\u4E00\u500B\u57FA\u65BC\u4EBA\u5DE5\u667A\u80FD\u6280\u8853\u958B\u767C\u7684\u4EBA\u81C9\u751F\u6210\u5668\uFF0C\u80FD\u5920\u96A8\u6A5F\u751F\u6210\u5177\u6709\u591A\u7A2E\u4E0D\u540C\u7279\u5FB5\u548C\u98A8\u683C\u7684\u4EBA\u81C9\u5716\u50CF\u3002\u4F7F\u7528\u8005\u53EF\u4EE5\u900F\u904E\u8ABF\u6574\u591A\u500B\u53C3\u6578\uFF0C\u4F8B\u5982\u5E74\u9F61\u3001\u6027\u5225\u3001\u7A2E\u65CF\u3001\u9762\u90E8\u7279\u5FB5\u7B49\uFF0C\u751F\u6210\u7B26\u5408\u81EA\u5DF1\u9700\u6C42\u7684\u4EBA\u81C9\u5716\u50CF\u3002"
    },
    {
      name: "Clipdrop",
      url: "https://clipdrop.co/uncrop",
      imageURL: "",
      description: "Clipdrop\u662F\u4E00\u500B\u201C\u53D6\u6D88\u88C1\u526A\u201D\u7684AI\u5DE5\u5177\uFF0C\u5B83\u4F7F\u7528 AI \u6280\u8853\u4F86\u7DE8\u8F2F\u5716\u50CF\u7684\u9577\u5BEC\u6BD4\uFF0C\u901A\u904E\u64F4\u5C55\u6216\u8ABF\u6574\u4E3B\u9AD4\u6216\u80CC\u666F\u4F86\u4FEE\u6539\u7167\u7247\u7684\u69CB\u5716\uFF0C\u53EF\u4EE5\u751F\u6210\u7B26\u5408\u6240\u9700\u5BEC\u9AD8\u6BD4\u7684\u65B0\u7248\u672C\u5716\u50CF\u3002 Stable Diffusion \u662F\u4E00\u500BAI\u751F\u6210\u5716\u7247\u7684\u5DE5\u5177, \u900F\u904E\u8F38\u5165\u6587\u5B57\u4F86\u63CF\u8FF0\u5716\u7247\u7684\u7279\u5FB5, \u5C31\u53EF\u4EE5\u7522\u751F\u4E00\u4E9BAI\u5716\u7247\u3002"
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
//# sourceMappingURL=resource-cf0cf819.mjs.map
