import{_ as h,i as m,o as g,c as y,b as l,w as p,d as i,a as e,j as c,v as d,k as v,F as w,T as b,M as k,p as M,f as F}from"./entry.0dd2e7d2.js";import{e as I}from"./index.a704afdc.js";import{O as j,x as S}from"./index.es.b63fbbb6.js";const B={components:{GoogleMap:j,Marker:S},data(){return{name:"",email:"",content:"",center:{lat:22.428077697753906,lng:114.20909881591797}}},methods:{sendForm(){this.name==""||this.email==""||this.content==""||(I.sendForm("service_dw5j7af","template_glfviys","#contactform","fmOc4joeStfAyUTP1").then(o=>{console.log("SUCCESS!",o.status,o.text)},o=>{console.log("FAILED...",o)}),location.reload())},resetForm(){this.$refs.contactform.reset()}}},r=o=>(M("data-v-65329368"),o=o(),F(),o),C={class:"bg"},T={class:"pageContent-container"},A={class:"text-container"},U={class:"form"},V={style:{width:"100%",background:"rgba( 255, 255, 255, 0.7   )",padding:"30px",flex:"1"}},E=r(()=>e("label",{class:"pageTitle font-big"},[i("立即聯絡 EduAIR"),e("br")],-1)),z=r(()=>e("br",null,null,-1)),O={id:"contactform",ref:"contactform",style:{display:"flex","flex-direction":"column"}},D=r(()=>e("div",{class:"row",style:{display:"flex","justify-content":"space-between"}},[e("input",{class:"font-mini",type:"text",id:"phone",name:"phone",placeholder:"聯絡電話",autocomplete:"off"}),e("input",{class:"font-mini",type:"text",id:"contactformOrganization",name:"organization",placeholder:"機構/公司名稱",autocomplete:"off"})],-1)),G={style:{"justify-content":"center",display:"flex"}},N={style:{display:"flex","align-self":"center","flex-direction":"column","max-width":"100%","justify-content":"center","align-items":"center",padding:"20px 0",width:"max-content"}},R={style:{"border-radius":"5px",overflow:"hidden",width:"400px",height:"300px","max-width":"100%"}},q=r(()=>e("div",{style:{width:"400px","max-width":"100%",padding:"20px","line-height":"30px",background:"rgba(255,255,255,0.6)",margin:"20px 0 5px","border-radius":"10px",display:"flex","align-items":"center"}},[i(" 聯絡電話：+852 5542 7564"),e("br"),i(" 聯絡電郵：info@eduairhk.com"),e("br"),i(" 地址：科學園16W棟2樓237室 ")],-1));function L(o,t,Y,Z,s,a){const f=b,_=k,u=m("Marker"),x=m("GoogleMap");return g(),y(w,null,[l(f,null,{default:p(()=>[i("聯絡我們")]),_:1}),l(_,{name:"description",content:"立即聯絡 EduAIR"}),e("div",C,[e("div",T,[e("div",A,[e("div",U,[e("div",V,[E,z,e("form",O,[c(e("input",{"onUpdate:modelValue":t[0]||(t[0]=n=>s.name=n),class:"font-mini",type:"text",id:"name",name:"name",placeholder:"姓名（必填）",autocomplete:"off",required:""},null,512),[[d,s.name]]),c(e("input",{"onUpdate:modelValue":t[1]||(t[1]=n=>s.email=n),class:"font-mini",type:"text",id:"email",name:"email",placeholder:"電郵（必填）",autocomplete:"off",required:""},null,512),[[d,s.email]]),c(e("textarea",{"onUpdate:modelValue":t[2]||(t[2]=n=>s.content=n),class:"font-mini",placeholder:"內容（必填）",name:"message",id:"message"},null,512),[[d,s.content]]),D,e("div",G,[e("button",{onClick:t[3]||(t[3]=(...n)=>a.sendForm&&a.sendForm(...n))},"提交"),e("button",{onClick:t[4]||(t[4]=v((...n)=>a.resetForm&&a.resetForm(...n),["prevent"]))},"重置")])],512)])]),e("div",N,[e("div",R,[l(x,{"api-key":"AIzaSyBgiaMIsBDwdjUXYZZkvuLlAtrBmBaHRtY",style:{width:"100%",height:"100%"},center:s.center,zoom:17},{default:p(()=>[l(u,{options:{position:s.center}},null,8,["options"])]),_:1},8,["center"])]),q])])])])],64)}const X=h(B,[["render",L],["__scopeId","data-v-65329368"]]);export{X as default};
