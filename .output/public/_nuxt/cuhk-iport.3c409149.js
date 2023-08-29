import{T as P,M as I}from"./components.95351936.js";import{_ as g,o as c,c as l,a as t,t as m,F as b,i as w,d as s,p as v,f as y,r as C,b as o,w as n}from"./entry.a3530212.js";const k={name:"VueCatalog",props:["title","list"],emits:["click"],methods:{click(e){this.$emit("click",e)}}},U=e=>(v("data-v-829a8454"),e=e(),y(),e),H={class:"page-catalog"},K=["onClick"],T=U(()=>t("span",null,null,-1));function A(e,r,a,u,h,_){return c(),l("div",H,[t("label",null,m(a.title),1),(c(!0),l(b,null,w(a.list,(p,f)=>(c(),l("div",{key:p,onClick:$=>_.click(f)},[t("a",null,[s(m(p)+" ",1),T])],8,K))),128))])}const B=g(k,[["render",A],["__scopeId","data-v-829a8454"]]);const M={name:"PictureFrame",props:["title","image"]},S={class:"orangeDescription"},V={class:"icon-container"},D=["src"];function F(e,r,a,u,h,_){return c(),l("div",S,[t("label",null,[C(e.$slots,"default",{},void 0,!0)]),t("div",V,[t("img",{src:a.image,class:"icon"},null,8,D)])])}const N=g(M,[["render",F],["__scopeId","data-v-5b1d13d3"]]),O={name:"PictureFrame",props:["title","image","number"]},j={style:{display:"flex","flex-direction":"column","border-radius":"40px",border:"3px solid orange",padding:"0 0",height:"max-content",width:"100%","max-width":"600px","box-sizing":"border-box"}},z={style:{padding:"20px 40px",display:"flex",gap:"20px"}},E={style:{"font-size":"40px","font-weight":"600",color:"orange"}},L=["src"],R={style:{height:"80px",display:"flex","justify-content":"center","align-items":"center"}};function q(e,r,a,u,h,_){return c(),l("div",j,[t("label",z,[t("a",E,m(a.number),1),s(" "+m(a.title),1)]),t("img",{src:a.image,style:{width:"100%",height:"auto"}},null,8,L),t("label",R,[C(e.$slots,"default")])])}const G=g(O,[["render",q]]),J=""+new URL("image1.fe8d41a6.png",import.meta.url).href;const Q={name:"CUHK-iPort",methods:{scroll(e){this.$nextTick(function(){window.setTimeout(()=>{e===0?window.scrollTo({top:0,left:0,behavior:"smooth"}):this.$refs.content.getElementsByTagName("span")[e].scrollIntoView({behavior:"smooth",block:"start"})},1)})}},watch:{"$route.hash":{immediate:!0,handler(e,r){e&&this.scroll(e.replace("#",""))}}},mounted(){}},i=e=>(v("data-v-65d4cb36"),e=e(),y(),e),W={class:"pageContent-container",style:{"flex-direction":"row","justify-content":"flex-start","align-items":"flex-start",padding:"30px",overflow:"visible"}},X={class:"page-content",ref:"content"},Y=i(()=>t("span",null,"CUHK iPort是甚麽？",-1)),Z=i(()=>t("div",null," CUHK iPort是由中大團隊開發的AI教學套件。師生可省略複雜的硬件搭綫步驟，使用iPort編程平台，套用於Teachable Machine訓練的AI模型，無須編程即可實現AI物聯網（AIoT） ， 建立不同的AI項目。 ",-1)),tt=i(()=>t("img",{src:J,style:{position:"relative","max-width":"500px",width:"100%","margin-top":"5px"}},null,-1)),et=i(()=>t("span",null,"CUHK iPort能做甚麼？",-1)),ot={style:{display:"flex",gap:"15px","flex-wrap":"wrap"}},it=i(()=>t("span",null,"如何使用CUHK iPort？",-1)),at={style:{display:"flex",gap:"20px","flex-direction":"column"}},nt=i(()=>t("a",{class:"orangeBtn",href:"https://teachablemachine.withgoogle.com/",target:"_blank"},"前往Teachable Machine",-1)),st=i(()=>t("a",{class:"orangeBtn",href:"https://iport.eduairhk.com/",target:"_blank"},"前往CUHK iPort編程平台",-1)),ct=i(()=>t("span",null,"CUHK iPort編程平台",-1)),lt=i(()=>t("a",{href:"https://iport.eduairhk.com",target:"_blank",class:"btn"},"前往 iPort編程平台",-1)),rt=i(()=>t("span",null,"CUHK iPort實用資源總匯",-1)),_t=i(()=>t("div",null," 即將推出 ",-1));function dt(e,r,a,u,h,_){const p=P,f=I,$=B,d=N,x=G;return c(),l(b,null,[o(p,null,{default:n(()=>[s("CUHK iPort")]),_:1}),o(f,{name:"description",content:"CUHK iPort是為實現AI物聯網（AIoT）而設的AI教學套件，讓學生輕鬆創建不同AI機械項目。"}),t("div",W,[o($,{onClick:_.scroll,title:"CUHK iPort",list:["CUHK iPort是甚麽？","CUHK iPort能做甚麼？","如何使用CUHK iPort？","CUHK iPort編程平台","CUHK iPort資源總匯"]},null,8,["onClick"]),t("div",X,[Y,Z,tt,et,t("div",ot,[o(d,{image:"image/iport/image6.gif"},{default:n(()=>[s("馬達控制")]),_:1},8,["image"]),o(d,{image:"image/iport/image5.png"},{default:n(()=>[s("文字顯示")]),_:1},8,["image"]),o(d,{image:"image/iport/image52.png"},{default:n(()=>[s("聲音輸出")]),_:1},8,["image"]),o(d,{image:"image/iport/image3.gif"},{default:n(()=>[s("燈光展示")]),_:1},8,["image"]),o(d,{image:"image/iport/image22.gif"},{default:n(()=>[s("開關控制")]),_:1},8,["image"])]),it,t("div",at,[o(x,{image:"image/iport/image7.gif",title:"在Teachable Machine訓練AI模型及生成連結",number:1},{default:n(()=>[nt]),_:1},8,["image"]),o(x,{image:"image/iport/image8.gif",title:"將AI模型的連結複製至iPort編程平台",number:2},{default:n(()=>[st]),_:1},8,["image"]),o(x,{image:"image/iport/image9.gif",title:"應用該AI模型去控制不同硬件",number:3},null,8,["image"])]),ct,lt,rt,_t],512)])],64)}const gt=g(Q,[["render",dt],["__scopeId","data-v-65d4cb36"]]);export{gt as default};
