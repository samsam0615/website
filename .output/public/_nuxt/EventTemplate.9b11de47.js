import{_ as p,o as n,c as l,a as t,x as c,F as f,H as m,I as y,b as g,t as i,B as x,h as v,p as w,f as b,d as _,w as S}from"./entry.6cfed882.js";const C={name:"CUHK-iCar",props:{title:{type:String,default:"Title"},subtitle:{type:String,default:null},images:{type:Array,default:function(){return["logo.png","logo.png","logo.png","logo.png","logo.png"]}}},data(){return{url:null}},methods:{setImage(e){this.url=e}},mounted(){this.setImage(this.images[0])}},I=e=>(w("data-v-faf772fe"),e=e(),b(),e),$={class:"container",style:{}},k={style:{display:"flex",height:"300px"}},j={style:{color:"white",display:"flex","justify-content":"space-between","flex-direction":"row",width:"100%",flex:"1"}},B={class:"imageDisplayer",style:{}},N=["src"],V={class:"pc",style:{width:"100%",height:"450px",padding:"0 20px"}},H={class:"font-small",style:{"line-height":"35px"}},T={style:{display:"flex","flex-direction":"row","justify-content":"space-between",width:"100%"}},A=["onClick"],D=I(()=>t("div",null,null,-1)),F={class:"mobile",style:{width:"100%",padding:"10px"}},G={class:"font-middle",style:{color:"#6d0e77","font-weight":"600",padding:"10px 0 0px 0"}},K={key:0,class:"font-small",style:{color:"#6d0e77","font-weight":"600",padding:"0 0 10px 0"}},U={class:"font-mini",style:{"line-height":"30px"}};function z(e,u,s,h,a,r){const d=v;return n(),l("div",$,[t("div",k,[t("div",j,[t("div",B,[t("img",{ref:"image",src:a.url,style:{width:"100%",height:"100%",border:"1px solid white","object-fit":"cover"}},null,8,N)])]),t("div",V,[t("div",H,[c(e.$slots,"default",{},void 0,!0)])])]),t("div",T,[(n(!0),l(f,null,m(s.images,o=>(n(),l("div",{key:o,class:y(["image-container2",{active:a.url==o}]),style:{"aspect-ratio":"4/3",overflow:"hidden"},onClick:Y=>r.setImage(o)},[g(d,{src:o,style:{height:"100%","object-fit":"cover"}},null,8,["src"]),D],10,A))),128))]),t("div",F,[t("div",G,i(s.title),1),s.subtitle?(n(),l("div",K,i(s.subtitle),1)):x("",!0),t("div",U,[c(e.$slots,"default",{},void 0,!0)])])])}const E=p(C,[["render",z],["__scopeId","data-v-faf772fe"]]),L={name:"CUHK-iCar",props:{title:{type:String,default:"Title"},subtitle:{type:String,default:null},date:{type:String,default:null},location:{type:String,default:null},images:{type:Array,default:function(){return["logo.png","logo.png","logo.png","logo.png","logo.png"]}}},data(){return{url:null}},methods:{setImage(e){this.url=e}},mounted(){this.setImage(this.images[0])}},q={class:"pageContent-container",style:{"max-width":"100%",width:"1024px"}},J={style:{width:"100%",padding:"10px 20px","max-width":"1200px"}},M={class:"font-big",style:{"align-self":"flex-start",padding:"20px 0 0 0","font-weight":"600",color:"#6d0e77"}},O={class:"font-middle",style:{padding:"8px 0"}},P={class:"font-small",style:{display:"flex","align-items":"center",padding:"5px 0"}},Q=["src"],R={class:"font-small",style:{display:"flex","align-items":"center",padding:"5px 0"}},W=["src"];function X(e,u,s,h,a,r){const d=E;return n(),l("div",q,[t("div",J,[t("div",M,i(s.title),1),t("div",O,i(s.subtitle),1),t("div",P,[t("img",{src:"/calendargray.png",style:{width:"50px",padding:"0 9px"}},null,8,Q),_(i(s.date),1)]),t("div",R,[t("img",{src:"/location4gray.png",style:{width:"50px",padding:"0 9px"}},null,8,W),_(i(s.location),1)])]),g(d,{images:s.images},{default:S(()=>[c(e.$slots,"default")]),_:3},8,["images"])])}const tt=p(L,[["render",X]]);export{tt as _};