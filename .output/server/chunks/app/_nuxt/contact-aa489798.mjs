import { _ as _export_sfc, T as Title, M as Meta } from '../server.mjs';
import emailjs from '@emailjs/browser';
import { O as Ot, x as xt } from '../../index.es.mjs';
import { resolveComponent, withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderStyle, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
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

const _sfc_main = {
  components: { GoogleMap: Ot, Marker: xt },
  data() {
    return {
      name: "",
      email: "",
      content: "",
      center: {
        lat: 22.428077697753906,
        lng: 114.20909881591797
      }
    };
  },
  methods: {
    sendForm() {
      if (this.name == "" || this.email == "" || this.content == "") {
        return;
      }
      emailjs.sendForm("service_b5o3c5j", "template_glfviys", "#contactform", "fmOc4joeStfAyUTP1").then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      }, (err) => {
        console.log("FAILED...", err);
      });
      location.reload();
    },
    resetForm() {
      this.$refs.contactform.reset();
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Title = Title;
  const _component_Meta = Meta;
  const _component_GoogleMap = resolveComponent("GoogleMap");
  const _component_Marker = resolveComponent("Marker");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Title, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u806F\u7D61\u6211\u5011`);
      } else {
        return [
          createTextVNode("\u806F\u7D61\u6211\u5011")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Meta, {
    name: "description",
    content: "\u7ACB\u5373\u806F\u7D61 EduAIR"
  }, null, _parent));
  _push(`<div class="bg" data-v-6f796d9d><div class="pageContent-container" data-v-6f796d9d><div class="text-container" data-v-6f796d9d><div class="form" data-v-6f796d9d><div style="${ssrRenderStyle({ "min-width": "max-content", "width": "100%", "background": "rgba( 255, 255, 255, 0.7   )", "padding": "30px" })}" data-v-6f796d9d><label class="pageTitle font-big" data-v-6f796d9d>\u7ACB\u5373\u806F\u7D61 EduAIR<br data-v-6f796d9d></label><br data-v-6f796d9d><form id="contactform" style="${ssrRenderStyle({ "display": "flex", "flex-direction": "column" })}" data-v-6f796d9d><input${ssrRenderAttr("value", $data.name)} class="font-mini" type="text" id="name" name="name" placeholder="\u59D3\u540D\uFF08\u5FC5\u586B\uFF09" autocomplete="off" required data-v-6f796d9d><input${ssrRenderAttr("value", $data.email)} class="font-mini" type="text" id="email" name="email" placeholder="\u96FB\u90F5\uFF08\u5FC5\u586B\uFF09" autocomplete="off" required data-v-6f796d9d><textarea class="font-mini" placeholder="\u5167\u5BB9\uFF08\u5FC5\u586B\uFF09" name="message" id="message" data-v-6f796d9d>${ssrInterpolate($data.content)}</textarea><div class="row" style="${ssrRenderStyle({ "display": "flex", "justify-content": "space-between" })}" data-v-6f796d9d><input class="font-mini" type="text" id="phone" name="phone" placeholder="\u806F\u7D61\u96FB\u8A71" autocomplete="off" data-v-6f796d9d><input class="font-mini" type="text" id="contactformOrganization" name="organization" placeholder="\u6A5F\u69CB/\u516C\u53F8\u540D\u7A31" autocomplete="off" data-v-6f796d9d></div><div style="${ssrRenderStyle({ "justify-content": "center", "display": "flex" })}" data-v-6f796d9d><button data-v-6f796d9d>\u63D0\u4EA4</button><button data-v-6f796d9d>\u91CD\u7F6E</button></div></form></div></div><div style="${ssrRenderStyle({ "display": "flex", "align-self": "flex-start", "flex-direction": "column", "width": "100%", "justify-content": "center", "align-items": "center", "padding": "20px 0" })}" data-v-6f796d9d><div style="${ssrRenderStyle({ "border-radius": "5px", "overflow": "hidden", "width": "500px", "height": "300px", "max-width": "100%" })}" data-v-6f796d9d>`);
  _push(ssrRenderComponent(_component_GoogleMap, {
    "api-key": "AIzaSyBgiaMIsBDwdjUXYZZkvuLlAtrBmBaHRtY",
    style: { "width": "100%", "height": "100%" },
    center: $data.center,
    zoom: 17
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Marker, {
          options: { position: $data.center }
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Marker, {
            options: { position: $data.center }
          }, null, 8, ["options"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div style="${ssrRenderStyle({ "width": "500px", "max-width": "100%", "padding": "20px", "line-height": "30px", "background": "rgba(255,255,255,0.6)", "margin": "20px 0 5px", "border-radius": "10px", "display": "flex", "align-items": "center" })}" data-v-6f796d9d> \u806F\u7D61\u96FB\u8A71\uFF1A+852 3618 8911<br data-v-6f796d9d> \u806F\u7D61\u96FB\u90F5\uFF1Ainfo@eduairhk.com<br data-v-6f796d9d> \u5730\u5740\uFF1A\u79D1\u5B78\u571216W\u68DF2\u6A13237\u5BA4 </div></div></div></div></div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contact = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-6f796d9d"]]);

export { contact as default };
//# sourceMappingURL=contact-aa489798.mjs.map
