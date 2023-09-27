import { T as Title, M as Meta } from './components-9f200465.mjs';
import emailjs from '@emailjs/browser';
import { withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderStyle, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
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

const _sfc_main = {
  data() {
    return {
      name: "",
      email: "",
      content: ""
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
  _push(`<div class="pageContent-container" style="${ssrRenderStyle({ "width": "100%", "padding": "60px 0 0 0" })}" data-v-ea70bc22><div class="text-container" style="${ssrRenderStyle({ "width": "100%", "position": "relative", "padding": "20px", "display": "flex", "justify-content": "center", "align-items": "center" })}" data-v-ea70bc22><div class="form" style="${ssrRenderStyle({})}" data-v-ea70bc22><div style="${ssrRenderStyle({ "width": "100%", "background": "rgba( 255, 255, 255, 0.7   )", "padding": "30px" })}" data-v-ea70bc22><label class="pageTitle font-big" data-v-ea70bc22>\u7ACB\u5373\u806F\u7D61 EduAIR<br data-v-ea70bc22></label><br data-v-ea70bc22><form id="contactform" style="${ssrRenderStyle({ "display": "flex", "flex-direction": "column" })}" data-v-ea70bc22><input${ssrRenderAttr("value", $data.name)} class="font-mini" type="text" id="name" name="name" placeholder="\u59D3\u540D\uFF08\u5FC5\u586B\uFF09" autocomplete="off" required data-v-ea70bc22><input${ssrRenderAttr("value", $data.email)} class="font-mini" type="text" id="email" name="email" placeholder="\u96FB\u90F5\uFF08\u5FC5\u586B\uFF09" autocomplete="off" required data-v-ea70bc22><textarea class="font-mini" placeholder="\u5167\u5BB9\uFF08\u5FC5\u586B\uFF09" name="message" id="message" data-v-ea70bc22>${ssrInterpolate($data.content)}</textarea><div class="row" style="${ssrRenderStyle({ "display": "flex", "justify-content": "space-between" })}" data-v-ea70bc22><input class="font-mini" type="text" id="phone" name="phone" placeholder="\u806F\u7D61\u96FB\u8A71" autocomplete="off" data-v-ea70bc22><input class="font-mini" type="text" id="contactformOrganization" name="organization" placeholder="\u6A5F\u69CB/\u516C\u53F8\u540D\u7A31" autocomplete="off" data-v-ea70bc22></div><div style="${ssrRenderStyle({ "justify-content": "center", "display": "flex" })}" data-v-ea70bc22><button data-v-ea70bc22>\u63D0\u4EA4</button><button data-v-ea70bc22>\u91CD\u7F6E</button></div></form></div></div></div></div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contact = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-ea70bc22"]]);

export { contact as default };
//# sourceMappingURL=contact-d99d4266.mjs.map
