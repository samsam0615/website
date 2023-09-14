import{T,M as $}from"./components.88b11339.js";import{_ as h,o as u,c as p,a as o,j as l,b as c,F as g,p as x,f as y,d,k as v,v as b,l as j,m as E,q as H,s as K,w,g as U}from"./entry.6419e8e1.js";import{_ as k}from"./nuxt-img.3a7b7957.js";const D={name:"VueCatalog",props:["title","list"],emits:["click"],data(){return{pos:0,xPos:0,xOffset:0,timeoutEvt:null,status:"stop",scrollEvt:null}},methods:{click(s){this.$emit("click",s)},findRange(s,e){let n=e.length,i=0,t=0;if(s<e[0])i=0;else if(s>=e[n-1])i=n-1;else for(let a=0;a<n-1;a++)e[a]<=s&&s<e[a+1]&&(i=a);return i<n-1&&(t=1-(e[i+1]-s)/(e[i+1]-e[i]),t<0&&(t=0)),i+t},calWeightedSum(s,e){if(e<=0)return 0;let n=0;for(let i=0;i<s.length;i++)if(e>=i+1)n+=s[i];else{n+=s[i]*(e-i);break}return n},calPosition(){const s=document.getElementsByClassName("text-content");let e=[];return Array.prototype.forEach.call(s,(n,i)=>{e[i]=n.getBoundingClientRect().y+window.scrollY}),{posMap:e}},setPositionY(){let s=this.calPosition(),e=window.scrollY+200+100;window.requestAnimationFrame(()=>{this.pos=this.findRange(e,s.posMap)})}},mounted(){this.setPositionY(),this.scrollEvt=document.addEventListener("scroll",s=>{this.setPositionY()})},unmounted(){document.removeEventListener("scroll",this.scrollEvt)},watch:{}},S={class:"container"},V={style:{display:"flex",gap:"10px",width:"1024px"}};function W(s,e,n,i,t,a){return u(),p("div",S,[o("div",V,[o("span",{class:l({active:Math.floor(t.pos)==0,inactive:Math.floor(t.pos)!=0})},"CUHK iPort",2),o("span",{class:l({active:Math.floor(t.pos)==1,inactive:Math.floor(t.pos)!=1})},"功能介紹",2),o("span",{class:l({active:Math.floor(t.pos)==2,inactive:Math.floor(t.pos)!=2})},"使用說明",2),o("span",{class:l({active:Math.floor(t.pos)==3,inactive:Math.floor(t.pos)!=3})},"實驗範例",2),o("span",{class:l({active:Math.floor(t.pos)==4,inactive:Math.floor(t.pos)!=4})},"編程平台",2),o("span",{class:l({active:Math.floor(t.pos)==5,inactive:Math.floor(t.pos)!=5})},"資源總匯",2)])])}const Y=h(D,[["render",W],["__scopeId","data-v-9053ab0d"]]);const z={},C=s=>(x("data-v-d4b8a677"),s=s(),y(),s),B={class:"mobile container"},N={style:{position:"absolute",opacity:"0.8",width:"158px",height:"122px",top:"23px"},class:"anime"},O=C(()=>o("div",{class:"light"},null,-1)),R={class:"screen"},q={class:"pc container"},L={style:{position:"absolute",opacity:"0.8",width:"330px",height:"256px",top:"35px"},class:"anime"},G=C(()=>o("div",{class:"light"},null,-1)),J={class:"screen"};function Q(s,e){const n=k;return u(),p(g,null,[o("div",B,[c(n,{src:"iport2.svg",width:330,preload:""},null,8,["src"]),o("div",N,[O,o("div",R,[c(n,{class:"image",src:"logo.png"},null,8,["src"])])])]),o("div",q,[c(n,{src:"iport2.svg",width:700,preload:""},null,8,["src"]),o("div",L,[G,o("div",J,[c(n,{class:"image",src:"logo.png"},null,8,["src"])])])])],64)}const X=h(z,[["render",Q],["__scopeId","data-v-d4b8a677"]]);const Z={name:"iPortVideoPlayer",data(){return{id:0,src:["https://customer-9nuyiwcobdv6cl6j.cloudflarestream.com/998774a81cac037fd7dff75a7ddaaa83/iframe?muted=true&poster=https%3A%2F%2Fcustomer-9nuyiwcobdv6cl6j.cloudflarestream.com%2F998774a81cac037fd7dff75a7ddaaa83%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600","https://customer-9nuyiwcobdv6cl6j.cloudflarestream.com/c866571f1b314f650410cf3be1357b70/iframe?poster=https%3A%2F%2Fcustomer-9nuyiwcobdv6cl6j.cloudflarestream.com%2Fc866571f1b314f650410cf3be1357b70%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600","https://customer-9nuyiwcobdv6cl6j.cloudflarestream.com/bab4467687bc64bcbd1aa3c867ae28c4/iframe?poster=https%3A%2F%2Fcustomer-9nuyiwcobdv6cl6j.cloudflarestream.com%2Fbab4467687bc64bcbd1aa3c867ae28c4%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600"]}}},tt={class:"container pc"},et={style:{height:"300px","border-radius":"20px",padding:"20px 0",display:"flex","flex-direction":"column",border:"1px solid #c0c0c0",background:"orange"}},ot={style:{display:"flex","justify-content":"center","align-items":"center",padding:"0 20px"}},st={style:{position:"relative",width:"550px",height:"300px",background:"white"}},it=["src"],nt={class:"container mobile"},ct={style:{width:"100%","border-radius":"20px",padding:"20px 0",display:"flex","flex-direction":"column",border:"1px solid #c0c0c0",background:"orange"}},lt={style:{position:"relative",width:"100%",height:"300px"}},at=["src"],rt={style:{position:"relative",width:"100%",height:"300px"}},dt=["src"],pt={style:{position:"relative",width:"100%",height:"300px"}},_t=["src"];function ht(s,e,n,i,t,a){return u(),p(g,null,[o("div",tt,[o("div",et,[o("span",{onClick:e[0]||(e[0]=r=>t.id=0),class:l({active:t.id==0})},"1. 訓練AI模型及生成連結",2),o("span",{onClick:e[1]||(e[1]=r=>t.id=1),class:l({active:t.id==1})},"2. 上載模型至編程平台",2),o("span",{onClick:e[2]||(e[2]=r=>t.id=2),class:l({active:t.id==2})},"3. 操作CUHK iPort或模擬器",2)]),o("div",ot,[o("div",st,[o("iframe",{src:t.src[t.id],style:{border:"none",position:"absolute",top:"0",left:"0",height:"100%",width:"100%","border-radius":"10px"},allow:"accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;",allowfullscreen:"true"},null,8,it)])])]),o("div",nt,[o("div",ct,[o("span",{onClick:e[3]||(e[3]=r=>t.id=0),class:l({active:t.id==0})},[d("1. 訓練AI模型及生成連結 "),v(o("div",lt,[o("iframe",{src:t.src[0],style:{border:"none",position:"absolute",top:"0",left:"0",height:"100%",width:"100%","border-radius":"10px"},allow:"accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;",allowfullscreen:"true"},null,8,at)],512),[[b,t.id==0]])],2),o("span",{onClick:e[4]||(e[4]=r=>t.id=1),class:l({active:t.id==1})},[d("2. 上載模型至編程平台 "),v(o("div",rt,[o("iframe",{src:t.src[1],style:{border:"none",position:"absolute",top:"0",left:"0",height:"100%",width:"100%","border-radius":"10px"},allow:"accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;",allowfullscreen:"true"},null,8,dt)],512),[[b,t.id==1]])],2),o("span",{onClick:e[5]||(e[5]=r=>t.id=2),class:l({active:t.id==2})},[d("3. 操作CUHK iPort或模擬器 "),v(o("div",pt,[o("iframe",{src:t.src[2],style:{border:"none",position:"absolute",top:"0",left:"0",height:"100%",width:"100%","border-radius":"10px"},allow:"accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;",allowfullscreen:"true"},null,8,_t)],512),[[b,t.id==2]])],2)])])],64)}const ut=h(Z,[["render",ht],["__scopeId","data-v-fb17c1a8"]]),mt=j({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(s,{slots:e,attrs:n}){const i=E(!1);return H(()=>{i.value=!0}),t=>{var _;if(i.value)return(_=e.default)==null?void 0:_.call(e);const a=e.fallback||e.placeholder;if(a)return a();const r=t.fallback||t.placeholder||"",f=t.fallbackTag||t.placeholderTag||"span";return p(f,n,r)}}});const ft={name:"CUHK-iPort",data(){return{viewWidth:1024}},methods:{scroll(s){this.$nextTick(function(){window.setTimeout(()=>{s===0?window.scrollTo({top:0,left:0,behavior:"smooth"}):this.$refs.content.getElementsByTagName("span")[s].scrollIntoView({behavior:"smooth",block:"start"})},1)})},vw(s){var e=Math.max(document.documentElement.clientWidth,window.innerWidth||0);return s*e/100}},watch:{"$route.hash":{immediate:!0,handler(s,e){s&&this.scroll(s.replace("#",""))}}},mounted(){const s=this;this.viewWidth=this.vw(50),new ResizeObserver(n=>{s.viewWidth=Math.min(s.vw(50),1024),s.viewWidth=Math.max(s.viewWidth,300)}).observe(document.body)}},m=s=>(x("data-v-a78f4165"),s=s(),y(),s),vt={class:"pageContent-container",style:{"z-index":"0","flex-direction":"column","justify-content":"flex-start","align-items":"flex-start",padding:"30px",overflow:"visible",width:"1000px","max-width":"100%"}},bt={class:"page-content",ref:"content"},gt=m(()=>o("span",{class:"title"},"CUHK iPort",-1)),wt={class:"text-content",style:{display:"flex","justify-content":"center",width:"100%"}},xt=m(()=>o("span",{class:"title"},"功能介紹",-1)),yt={class:"text-content"},kt=m(()=>o("span",{class:"title"},"使用說明",-1)),Ct={class:"text-content"},Pt=m(()=>o("span",{class:"title"},"實驗範例",-1)),It={class:"text-content",style:{"max-width":"100%"}},Mt=U('<span class="title" data-v-a78f4165>編程平台</span><div class="text-content" data-v-a78f4165><a href="https://iport.eduairhk.com" target="_blank" class="btn" data-v-a78f4165>前往CUHK iPort編程平台</a></div><span class="title" data-v-a78f4165>實用資源總匯</span><div class="text-content" data-v-a78f4165> 即將推出 </div>',4);function Ft(s,e,n,i,t,a){const r=T,f=$,_=Y,P=X,I=k,M=ut,F=K("Youtube"),A=mt;return u(),p(g,null,[c(r,null,{default:w(()=>[d("CUHK iPort")]),_:1}),c(f,{name:"description",content:"CUHK iPort是為實現AI物聯網（AIoT）而設的AI教學套件，讓學生輕鬆創建不同AI機械項目。"}),c(_,{list:["CUHK iPort","功能介紹","使用說明","實驗範例","編程平台","實用資源總匯"],style:{"z-index":"1"}}),o("div",vt,[o("div",bt,[gt,o("div",wt,[c(P)]),xt,o("div",yt,[d(" CUHK iPort是由中大團隊開發的AI教學套件。師生可省略複雜的硬件搭綫步驟，使用iPort編程平台，套用於Teachable Machine訓練的AI模型，無須編程即可實現AI物聯網（AIoT） ， 建立不同的AI項目。 "),c(I,{src:"iportDesc6.png",style:{width:"100%","max-width":"900px"}})]),kt,o("div",Ct,[c(M)]),Pt,o("div",It,[c(A,null,{default:w(()=>[c(F,{src:"https://www.youtube.com/watch?v=TxEHsEqnwGw&ab_channel=DerekCheung",width:t.viewWidth},null,8,["width"])]),_:1})]),Mt],512)])],64)}const jt=h(ft,[["render",Ft],["__scopeId","data-v-a78f4165"]]);export{jt as default};
