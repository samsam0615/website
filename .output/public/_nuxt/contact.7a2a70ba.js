import{T as u,M as _}from"./components.4a1a2fef.js";import{e as y}from"./index.a704afdc.js";import{_ as x,o as h,c as g,b as m,w as v,d as r,a as e,t as a,i as l,v as c,j as b,F as w,p as F,f as S}from"./entry.01b14724.js";const j={data(){return{name:"",email:"",content:""}},methods:{sendForm(){this.name==""||this.email==""||this.content==""||(y.sendForm("service_b5o3c5j","template_glfviys","#contactform","fmOc4joeStfAyUTP1").then(o=>{console.log("SUCCESS!",o.status,o.text)},o=>{console.log("FAILED...",o)}),location.reload())},resetForm(){this.$refs.contactform.reset()}}},d=o=>(F("data-v-c461af85"),o=o(),S(),o),I={class:"pageContent-container",style:{width:"100%",padding:"60px 0 0 0"}},T={class:"text-container",style:{width:"100%",position:"relative",padding:"20px",display:"flex","justify-content":"center","align-items":"center"}},C={class:"form",style:{}},V={style:{width:"100%",background:"rgba( 255, 255, 255, 0.7   )",padding:"30px"}},k=d(()=>e("label",{class:"pageTitle font-big"},[r("立即聯絡 EduAIR"),e("br")],-1)),E=d(()=>e("br",null,null,-1)),M={id:"contactform",ref:"contactform",style:{display:"flex","flex-direction":"column"}},U=d(()=>e("div",{class:"row",style:{display:"flex","justify-content":"space-between"}},[e("input",{class:"font-mini",type:"text",id:"phone",name:"phone",placeholder:"聯絡電話",autocomplete:"off"}),e("input",{class:"font-mini",type:"text",id:"contactformOrganization",name:"organization",placeholder:"機構/公司名稱",autocomplete:"off"})],-1)),A={style:{"justify-content":"center",display:"flex"}};function B(o,t,D,N,n,i){const p=u,f=_;return h(),g(w,null,[m(p,null,{default:v(()=>[r("聯絡我們")]),_:1}),m(f,{name:"description",content:"立即聯絡 EduAIR"}),e("div",I,[r(a(n.name)+" "+a(n.email)+" "+a(n.content)+" ",1),e("div",T,[e("div",C,[e("div",V,[k,E,e("form",M,[l(e("input",{"onUpdate:modelValue":t[0]||(t[0]=s=>n.name=s),class:"font-mini",type:"text",id:"name",name:"name",placeholder:"姓名（必填）",autocomplete:"off",required:""},null,512),[[c,n.name]]),l(e("input",{"onUpdate:modelValue":t[1]||(t[1]=s=>n.email=s),class:"font-mini",type:"text",id:"email",name:"email",placeholder:"電郵（必填）",autocomplete:"off",required:""},null,512),[[c,n.email]]),l(e("textarea",{"onUpdate:modelValue":t[2]||(t[2]=s=>n.content=s),class:"font-mini",placeholder:"內容（必填）",name:"message",id:"message"},null,512),[[c,n.content]]),U,e("div",A,[e("button",{onClick:t[3]||(t[3]=(...s)=>i.sendForm&&i.sendForm(...s))},"提交"),e("button",{onClick:t[4]||(t[4]=b((...s)=>i.resetForm&&i.resetForm(...s),["prevent"]))},"重置")])],512)])])])])],64)}const R=x(j,[["render",B],["__scopeId","data-v-c461af85"]]);export{R as default};