import{T as f,M as g}from"./components.07b0d069.js";import{_ as p,o,c as s,a,t as _,F as h,i as I,d as u,p as P,f as C,b as l,w as b,g as k}from"./entry.edf4917e.js";const $={name:"VueCatalog",props:["title","list"],emits:["click"],methods:{click(t){this.$emit("click",t)}}},x=t=>(P("data-v-b75ba81c"),t=t(),C(),t),A={class:"page-catalog"},T=["onClick"],w=x(()=>a("span",null,null,-1));function y(t,n,i,v,m,c){return o(),s("div",A,[a("label",null,_(i.title),1),(o(!0),s(h,null,I(i.list,(e,r)=>(o(),s("div",{key:e,onClick:d=>c.click(r)},[a("a",null,[u(_(e)+" ",1),w])],8,T))),128))])}const H=p($,[["render",y],["__scopeId","data-v-b75ba81c"]]);const K={name:"CUHK-iPort",methods:{scroll(t){this.$nextTick(function(){window.setTimeout(()=>{t===0?window.scrollTo({top:0,left:0,behavior:"smooth"}):this.$refs.content.getElementsByTagName("span")[t].scrollIntoView({behavior:"smooth",block:"start"})},1)})}},watch:{"$route.hash":{immediate:!0,handler(t,n){t&&this.scroll(t.replace("#",""))}}},mounted(){}},U={class:"pageContent-container",style:{"flex-direction":"row","justify-content":"flex-start","align-items":"flex-start",padding:"60px"}},M={class:"page-content",ref:"content"},S=k('<span data-v-977a5264>CUHK iPort是甚麽？</span><div data-v-977a5264> CUHK iPort是由中大科研團隊開發的AI教學套件。團隊洞悉到部分學生有缺乏STEM搭綫技能的困難，研發出iPort，讓師生省略搭綫步驟也可在硬件上套用AI模型。師生只要使用iPort編程平台，便可以套用於Teachable Machine訓練的AI模型，讓硬件根據自行設定的條件作出反應，無須編程即可實現AI物聯網（AIoT） </div><span data-v-977a5264>如何使用CUHK iPort？</span><div data-v-977a5264> 1. 在Teachable Machine訓練AI模型及生成AI模型的連結<br data-v-977a5264> 2. 將AI模型的連結複製及貼上至iPort編程平台<br data-v-977a5264> 3. 應用該AI模型去操作虛擬或實體的iPort </div><span data-v-977a5264>CUHK iPort編程平台</span><a href="https://iport.eduairhk.com" target="_blank" class="btn" data-v-977a5264>前往 iPort編程平台</a><div data-v-977a5264></div><span data-v-977a5264>CUHK iPort實用資源總匯</span><div data-v-977a5264> 即將推出 </div>',9),V=[S];function N(t,n,i,v,m,c){const e=f,r=g,d=H;return o(),s(h,null,[l(e,null,{default:b(()=>[u("CUHK iPort")]),_:1}),l(r,{name:"description",content:"CUHK iPort是為實現AI物聯網（AIoT）而設的AI教學套件，讓學生輕鬆創建不同AI機械項目。"}),a("div",U,[l(d,{onClick:c.scroll,title:"CUHK iPort",list:["iPort是甚麽？","如何使用iPort？","iPort編程平台","iPort資源總匯"]},null,8,["onClick"]),a("div",M,V,512)])],64)}const F=p(K,[["render",N],["__scopeId","data-v-977a5264"]]);export{F as default};