import { T as Title } from './components-c34ba2a2.mjs';
import emailjs from '@emailjs/browser';
import { useSSRContext, withCtx, createTextVNode, mergeProps } from 'vue';
import { ssrRenderComponent, ssrRenderStyle, ssrRenderAttrs } from 'vue/server-renderer';
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
  setup() {
  },
  methods: {
    sendForm() {
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
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "contactform-container" }, _attrs))}><form id="contactform"><div class="info-container"><div class="info-row"><div><input type="text" id="name" name="name" placeholder="\u59D3\u540D"></div><div><input type="text" id="salutation" name="salutation" placeholder="\u7A31\u8B02"></div></div><div class="info-row"><div><input type="text" id="phone" name="phone" placeholder="\u806F\u7D61\u96FB\u8A71"></div><div><input type="text" id="email" name="email" placeholder="\u96FB\u90F5 (\u5FC5\u586B)" class="required" required></div></div><div class="info-row info-row-2"><div class="textarea-conatiner"><textarea placeholder="\u5167\u5BB9 (\u5FC5\u586B)" name="message" id="message"></textarea></div><div class="extrainfo-conatiner"><input type="text" id="contactformOrganization" name="organization" placeholder="\u6A5F\u69CB/\u516C\u53F8\u540D\u7A31"><div style="${ssrRenderStyle({ "padding": "0", "margin-top": "10px" })}"><input class="button" type="send" value="\u767C\u9001"></div></div></div></div></form></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ContactForm.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Title = Title;
  const _component_ContactForm = __nuxt_component_1;
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
  _push(`<div class="pageContent-container" style="${ssrRenderStyle({ "width": "100%" })}"><div class="text-container" style="${ssrRenderStyle({ "width": "100%" })}"><label class="pageTitle">\u7ACB\u5373\u806F\u7D61 EduAIR<br></label><br>`);
  _push(ssrRenderComponent(_component_ContactForm, null, null, _parent));
  _push(`</div></div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contact = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { contact as default };
//# sourceMappingURL=contact-c287b36b.mjs.map
