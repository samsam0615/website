import{T as p,M as u}from"./components.63722e37.js";import{e as f}from"./index.a704afdc.js";import{_ as d,o as r,c as l,a as t,g as h,b as n,w as v,d as _,F as x}from"./entry.37017f55.js";const g={setup(){},methods:{sendForm(){f.sendForm("service_b5o3c5j","template_glfviys","#contactform","fmOc4joeStfAyUTP1").then(e=>{console.log("SUCCESS!",e.status,e.text)},e=>{console.log("FAILED...",e)}),location.reload()},resetForm(){this.$refs.contactform.reset()}}},y={class:"contactform-container"},F={id:"contactform",ref:"contactform"},$={class:"info-container"},w=h('<div class="info-row"><div><input type="text" id="name" name="name" placeholder="姓名"></div><div><input type="text" id="salutation" name="salutation" placeholder="稱謂"></div></div><div class="info-row"><div><input type="text" id="phone" name="phone" placeholder="聯絡電話"></div><div><input type="text" id="email" name="email" placeholder="電郵 (必填)" class="required" required></div></div>',2),C={class:"info-row info-row-2"},b=t("div",{class:"textarea-conatiner"},[t("textarea",{placeholder:"內容 (必填)",name:"message",id:"message"})],-1),T={class:"extrainfo-conatiner"},E=t("input",{type:"text",id:"contactformOrganization",name:"organization",placeholder:"機構/公司名稱"},null,-1),S={style:{padding:"0","margin-top":"10px"}};function A(e,o,s,a,c,i){return r(),l("div",y,[t("form",F,[t("div",$,[w,t("div",C,[b,t("div",T,[E,t("div",S,[t("input",{class:"button",type:"send",value:"發送",onClick:o[0]||(o[0]=(...m)=>i.sendForm&&i.sendForm(...m))})])])])])],512)])}const N=d(g,[["render",A]]),V={},j={class:"pageContent-container",style:{width:"100%"}},k={class:"text-container",style:{width:"100%"}},B=t("label",{class:"pageTitle"},[_("立即聯絡 EduAIR"),t("br")],-1),I=t("br",null,null,-1);function M(e,o){const s=p,a=u,c=N;return r(),l(x,null,[n(s,null,{default:v(()=>[_("聯絡我們")]),_:1}),n(a,{name:"description",content:"立即聯絡 EduAIR"}),t("div",j,[t("div",k,[B,I,n(c)])])],64)}const R=d(V,[["render",M]]);export{R as default};
