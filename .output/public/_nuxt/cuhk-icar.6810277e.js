import{_ as v,o as _,c as h,a as t,t as f,G as k,B as g,F as b,H as U,I as E,p as y,f as x,x as I,b as r,h as H,w as p,d as n,g as S,T as z,M as T}from"./entry.6cfed882.js";import{_ as L}from"./TextBox.23d887a8.js";const R=""+new URL("iCarR.25d12606.png",import.meta.url).href,B=""+new URL("iCarL.d12c0858.png",import.meta.url).href,A=""+new URL("iCarF.0923d21e.png",import.meta.url).href;const D={name:"VueCatalog",props:["title","list"],emits:["click"],data(){return{pos:0,xPos:0,xOffset:0,timeoutEvt:null,status:"stop",scrollEvt:null}},methods:{click(e){this.$emit("click",e)},findRange(e,o){let l=o.length,i=0,s=0;if(e<o[0])i=0;else if(e>=o[l-1])i=l-1;else for(let a=0;a<l-1;a++)o[a]<=e&&e<o[a+1]&&(i=a);return i<l-1&&(s=1-(o[i+1]-e)/(o[i+1]-o[i]),s<0&&(s=0)),i+s},calWeightedSum(e,o){if(o<=0)return 0;let l=0;for(let i=0;i<e.length;i++)if(o>=i+1)l+=e[i];else{l+=e[i]*(o-i);break}return l},calPosition(){const e=document.getElementsByClassName("text-content"),o=this.$refs.btnContainer;if(!o[0])return!1;this.xOffset=o[0].clientWidth/2-this.$refs.car.clientWidth/2;let l=[];Array.prototype.forEach.call(o,(s,a)=>{l[a]=s.clientWidth});let i=[];return Array.prototype.forEach.call(e,(s,a)=>{i[a]=s.getBoundingClientRect().y+window.scrollY}),{posMap:i,widthMap:l}},setPositionX(){let e=this.calPosition();if(!e)return;let o=window.scrollY+200+100+30;window.requestAnimationFrame(()=>{this.pos=this.findRange(o,e.posMap),this.xPos=this.calWeightedSum(e.widthMap,this.pos)})}},mounted(){this.setPositionX(),this.scrollEvt=document.addEventListener("scroll",e=>{this.setPositionX()})},unmounted(){document.removeEventListener("scroll",this.scrollEvt)},watch:{xPos(e,o){e!==o&&(e>o?this.status="right":this.status="left",clearTimeout(this.timeoutEvt),this.timeoutEvt=setTimeout(()=>{this.status="stop"},100))}}},K=e=>(y("data-v-3f2641d8"),e=e(),x(),e),N={class:"page-catalog2"},F={style:{display:"flex","flex-direction":"column",width:"100%",position:"relative",padding:"0 20px"}},V={style:{"z-index":"1"}},j={style:{display:"flex",flex:"1","flex-direction":"row","min-height":"60px","max-height":"60px",width:"100%",position:"relative","align-items":"flex-end",padding:"0"}},Y=K(()=>t("span",{class:"line"},null,-1)),O=K(()=>t("div",{style:{display:"flex","justify-content":"center","align-items":"center",position:"relative",width:"100%",height:"30px"}},[t("span",{class:"point"})],-1)),W=["onClick"];function q(e,o,l,i,s,a){return _(),h("div",N,[t("label",null,f(l.title),1),t("div",F,[t("div",V,[s.status=="right"?(_(),h("img",{key:0,ref:"car",src:R,style:k([{position:"relative",height:"50px",top:"10px"},{left:s.xPos+s.xOffset+"px"}])},null,4)):g("",!0),s.status=="left"?(_(),h("img",{key:1,ref:"car",src:B,style:k([{position:"relative",height:"50px",top:"10px"},{left:s.xPos+s.xOffset+"px"}])},null,4)):g("",!0),s.status=="stop"?(_(),h("img",{key:2,ref:"car",src:A,style:k([{position:"relative",height:"50px",top:"10px"},{left:s.xPos+s.xOffset+"px"}])},null,4)):g("",!0)]),t("div",j,[Y,(_(!0),h(b,null,U(l.list,(u,d)=>(_(),h("div",{ref_for:!0,ref:"btnContainer",class:"btnContainer",key:u},[O,t("div",{class:E(["btn",{active:Math.floor(s.pos)==d}]),onClick:w=>a.click(d)},f(u),11,W)]))),128))])])])}const X=v(D,[["render",q],["__scopeId","data-v-3f2641d8"]]);const J={name:"VueCatalog",props:["title","list"],emits:["click"],data(){return{pos:0,xPos:0,xOffset:0,timeoutEvt:null,status:"stop",scrollEvt:null}},methods:{click(e){this.$emit("click",e)},findRange(e,o){let l=o.length,i=0,s=0;if(e<o[0])i=0;else if(e>=o[l-1])i=l-1;else for(let a=0;a<l-1;a++)o[a]<=e&&e<o[a+1]&&(i=a);return i<l-1&&(s=1-(o[i+1]-e)/(o[i+1]-o[i]),s<0&&(s=0)),i+s},calWeightedSum(e,o){if(o<=0)return 0;let l=0;for(let i=0;i<e.length;i++)if(o>=i+1)l+=e[i];else{l+=e[i]*(o-i);break}return l},calPosition(){const e=document.getElementsByClassName("text-content");let o=[];return Array.prototype.forEach.call(e,(l,i)=>{o[i]=l.getBoundingClientRect().y+window.scrollY}),{posMap:o}},setPositionY(){let e=this.calPosition(),o=window.scrollY+200+100;window.requestAnimationFrame(()=>{this.pos=this.findRange(o,e.posMap)})}},mounted(){this.setPositionY(),this.scrollEvt=document.addEventListener("scroll",e=>{this.setPositionY()})},unmounted(){document.removeEventListener("scroll",this.scrollEvt)},watch:{}},G=e=>(y("data-v-c789e785"),e=e(),x(),e),Z={class:"test"},Q=G(()=>t("span",null,null,-1)),tt=["onClick"],et=["src"];function ot(e,o,l,i,s,a){return _(),h("div",Z,[Q,(_(!0),h(b,null,U(l.list,(u,d)=>(_(),h("div",{class:E(["btnContainer",{active:Math.floor(s.pos)==d}]),key:u},[t("div",{class:"btn",onClick:w=>a.click(d)},[t("img",{src:l.list[d],style:{height:"100%"}},null,8,et)],8,tt)],2))),128))])}const it=v(J,[["render",ot],["__scopeId","data-v-c789e785"]]);const lt={name:"TextTitle",props:["image","isShowDownload","chiUrl","engUrl"],methods:{copy(e){alert("Link copied");var o=document.createElement("textarea");o.value=e,o.display="none",document.body.appendChild(o),o.select(),document.execCommand("copy"),document.body.removeChild(o)}}},st=e=>(y("data-v-66d0ef1f"),e=e(),x(),e),nt={class:"text-title"},at={style:{height:"100%",display:"flex","align-items":"center"}},ct=["src"],rt={key:0,class:"download-button-container"},dt=st(()=>t("div",{style:{"font-size":"20px",padding:"10px"}},"下載教材",-1)),_t=["src"],ht={class:"hover",style:{color:"#565656"}},pt=["href"],ut=["href"];function mt(e,o,l,i,s,a){return _(),h("div",nt,[t("div",at,[t("img",{class:"icon",src:l.image},null,8,ct),I(e.$slots,"default",{},void 0,!0)]),l.isShowDownload?(_(),h("div",rt,[dt,t("img",{src:"/download.svg",style:{width:"30px"}},null,8,_t),t("div",ht,[t("a",{class:"download-button",href:l.chiUrl}," 中 ",8,pt),t("a",{class:"download-button",href:l.engUrl}," Eng ",8,ut)])])):g("",!0)])}const gt=v(lt,[["render",mt],["__scopeId","data-v-66d0ef1f"]]);const ft={name:"DownloadTable",props:["source"],methods:{copy(e){alert("Link copied");var o=document.createElement("textarea");o.value=e,o.display="none",document.body.appendChild(o),o.select(),document.execCommand("copy"),document.body.removeChild(o)}}},vt=e=>(y("data-v-4eb99e55"),e=e(),x(),e),yt={class:"download-table font-small"},xt=vt(()=>t("div",{class:"download-table-row"},[t("div",null,"名稱"),t("div",null,"類型"),t("div",null,"大小"),t("div",{style:{"justify-content":"center"}},"下載點")],-1)),wt=["href"],bt=["onClick"];function Ct(e,o,l,i,s,a){const u=H;return _(),h("div",yt,[xt,(_(!0),h(b,null,U(l.source,d=>(_(),h("div",{class:"download-table-row",key:d},[t("div",null,f(d.name),1),t("div",null,f(d.type),1),t("div",null,f(d.size),1),t("div",null,[d.action=="download"?(_(),h("a",{key:0,href:d.url,style:{height:"80%"}},[r(u,{src:"icon_download.png",style:{height:"80%"}},null,8,["src"])],8,wt)):g("",!0),d.action=="clipboard"?(_(),h("a",{key:1,style:{height:"80%",cursor:"pointer"},onClick:w=>a.copy(d.url)},[r(u,{src:"icon_copy.png",style:{height:"80%"}},null,8,["src"])],8,bt)):g("",!0)])]))),128))])}const kt=v(ft,[["render",Ct],["__scopeId","data-v-4eb99e55"]]),Ut=""+new URL("logo_blockly.010a26d0.png",import.meta.url).href,$t=""+new URL("logo_app.f7db2ddf.png",import.meta.url).href,Et=""+new URL("logo_remote.8d6d1574.png",import.meta.url).href,Ht=""+new URL("gif_moral2.520ac47b.gif",import.meta.url).href,Kt=""+new URL("gif_face2.b084def7.gif",import.meta.url).href,Mt=""+new URL("gif_line2.81f158a0.gif",import.meta.url).href;const Pt={name:"CUHK-iCar",data(){return{download:[{action:"download",name:"CUHK iCar 教材 (中文版)",size:"285 MB",type:"zip",url:"https://download.eduairhk.com/iCar_ZH.zip"},{action:"download",name:"CUHK iCar Teaching Materials (English Version)",size:"261 MB",type:"zip",url:"https://download.eduairhk.com/iCar_EN.zip"},{action:"download",name:"CUHK iCar micro:bit程式",size:"3 MB",type:"zip",url:"https://download.eduairhk.com/iCar_hex.zip"},{action:"clipboard",name:"MakeCode CUHK iCar擴展庫網址",size:"-",type:"-",url:"https://github.com/hitkuangye/CUHK_JC_iCar_V2"}]}},methods:{scroll(e){this.$nextTick(function(){window.setTimeout(()=>{e===0?window.scrollTo({top:0,left:0,behavior:"smooth"}):this.$refs.content.getElementsByClassName("text-title")[e].scrollIntoView({behavior:"smooth",block:"start"})},1)})}},watch:{"$route.hash":{immediate:!0,handler(e,o){e&&this.scroll(e.replace("#",""))}}}},c=e=>(y("data-v-b15bab44"),e=e(),x(),e),It={class:"cuhkicar-wrapper"},St={class:"cuhkicar-container"},zt={class:"page-content",ref:"content"},Tt={class:"text-content font-small text-content-responsive"},Lt=c(()=>t("div",{class:"text"}," CUHK iCar是由香港中文大學科研團隊開發，專爲初中學生而設的AI教學套件， 可進行多個有趣的教學實驗，讓學生輕鬆透過積木編程掌握AI。 全港有超過5成中學正使用CUHK iCar進行AI教學活動。 ",-1)),Rt={class:"appDownloader",style:{}},Bt=["src"],At={href:"https://play.google.com/store/apps/details?id=com.eduairhk.cuhkicarapp&hl=en_US",target:"_blank"},Dt={href:"https://apps.apple.com/us/app/cuhk-icar-app/id6462405334",target:"_blank"},Nt=S('<div class="text-content font-small" data-v-b15bab44><div style="display:flex;flex-direction:row;padding:0;justify-content:center;padding-top:0;flex-wrap:wrap;" data-v-b15bab44><div style="display:flex;justify-content:center;flex-direction:column;align-items:center;margin-left:15px;margin-right:15px;margin-top:25px;" data-v-b15bab44> MakeCode積木編程 <div class="imageContainer" data-v-b15bab44><img src="'+Ut+'" style="height:90%;" data-v-b15bab44></div></div><div style="display:flex;justify-content:center;flex-direction:column;align-items:center;margin-left:15px;margin-right:15px;margin-top:25px;" data-v-b15bab44> 手機藍芽控制 <div class="imageContainer" data-v-b15bab44><img src="'+$t+'" style="height:90%;" data-v-b15bab44></div></div><div style="display:flex;justify-content:center;flex-direction:column;align-items:center;margin-left:15px;margin-right:15px;margin-top:25px;" data-v-b15bab44> 紅外線遙控器 <div class="imageContainer" data-v-b15bab44><img src="'+Et+'" style="height:70%;" data-v-b15bab44></div></div></div></div>',1),Ft={class:"text-content font-small"},Vt=c(()=>t("img",{src:Ht,style:{width:"50%","min-width":"250px"}},null,-1)),jt=c(()=>t("br",null,null,-1)),Yt=c(()=>t("br",null,null,-1)),Ot=c(()=>t("br",null,null,-1)),Wt=c(()=>t("br",null,null,-1)),qt=c(()=>t("br",null,null,-1)),Xt=c(()=>t("br",null,null,-1)),Jt={class:"text-content font-small"},Gt=c(()=>t("img",{src:Kt,style:{width:"50%","min-width":"250px"}},null,-1)),Zt=c(()=>t("br",null,null,-1)),Qt=c(()=>t("br",null,null,-1)),te=c(()=>t("br",null,null,-1)),ee=c(()=>t("br",null,null,-1)),oe=c(()=>t("br",null,null,-1)),ie=c(()=>t("br",null,null,-1)),le=c(()=>t("br",null,null,-1)),se={class:"text-content font-small"},ne=c(()=>t("img",{src:Mt,style:{width:"50%","min-width":"250px"}},null,-1)),ae=c(()=>t("br",null,null,-1)),ce=c(()=>t("br",null,null,-1)),re=c(()=>t("br",null,null,-1)),de=c(()=>t("br",null,null,-1)),_e=c(()=>t("br",null,null,-1)),he=c(()=>t("br",null,null,-1)),pe=c(()=>t("br",null,null,-1)),ue={class:"text-content font-small",style:{display:"flex",gap:"50px","flex-direction":"column"}},me={style:{display:"flex",width:"100%","justify-content":"space-around"}},ge={style:{display:"flex","flex-direction":"column",width:"28%","align-items":"center"}},fe={autoplay:"",muted:"",loop:"",playsinline:"","webkit-playsinline":"",style:{width:"100%"}},ve=["src"],ye={style:{display:"flex","flex-direction":"column",width:"28%","align-items":"center"}},xe={autoplay:"",muted:"",loop:"",playsinline:"","webkit-playsinline":"",style:{width:"100%"}},we=["src"],be={style:{display:"flex","flex-direction":"column",width:"28%","align-items":"center"}},Ce={autoplay:"",muted:"",loop:"",playsinline:"","webkit-playsinline":"",style:{width:"100%"}},ke=["src"],Ue=c(()=>t("div",null," 推理是一個根據現有資訊來決策的過程。 它分為三個層級：基於本能、基於規則和基於知識。 CUHK-JC iCar外賣仔實驗旨在展示三種不同推理層次下的行為。 學生可以選擇不同送餐地點，通過觀察iCar的配送路線選擇，分別了解三個推理層級的特點。 ",-1)),$e={class:"text-content font-small",style:{display:"flex",gap:"50px"}};function Ee(e,o,l,i,s,a){const u=z,d=T,w=X,M=it,m=gt,$=H,C=L,P=kt;return _(),h(b,null,[r(u,null,{default:p(()=>[n("CUHK iCar")]),_:1}),r(d,{name:"description",content:"CUHK iCar是專爲初中學生而設的AI教學套件，讓學生輕鬆透過積木編程掌握AI。"}),t("div",It,[r(w,{onClick:a.scroll,title:"CUHK iCar",list:["iCar是甚麼？","如何使用iCar？","道德困境實驗","人面識別追蹤","手畫線循跡","外賣仔實驗","資源總匯"]},null,8,["onClick"]),r(M,{onClick:a.scroll,title:"CUHK iCar",list:["image/materials/logo_icar3.png","image/materials/logo_question2.png","image/materials/logo_moraldilemma.png","image/materials/logo_facereg.png","image/materials/logo_handdraw.png","image/materials/logo_food3.png","image/materials/logo_download.png"]},null,8,["onClick","list"]),t("div",St,[t("div",zt,[r(m,{image:"image/materials/logo_icar3.png"},{default:p(()=>[n("iCar是甚麼？")]),_:1},8,["image"]),t("div",Tt,[Lt,t("div",Rt,[t("img",{src:"iCarF2.png",style:{width:"200px"}},null,8,Bt),t("div",null,[t("a",At,[r($,{src:"googleplay.png",style:{height:"50px",margin:"10px 5px"}})]),t("a",Dt,[r($,{src:"apple.png",style:{height:"50px",margin:"10px 5px"}})])])])]),r(m,{image:"image/materials/logo_question2.png"},{default:p(()=>[n("如何使用iCar？")]),_:1},8,["image"]),Nt,r(m,{image:"image/materials/logo_moraldilemma.png",isShowDownload:!0,chiUrl:"https://download.eduairhk.com/道德困境_中文版教材.zip",engUrl:"https://download.eduairhk.com/Moral_Dilemma_English_Materials.zip"},{default:p(()=>[n("道德困境實驗")]),_:1},8,["image","chiUrl","engUrl"]),t("div",Ft,[Vt,jt,n(" 當自動駕駛車刹車功能失靈，只能左轉或右轉， 然而，不論選擇哪條路線，車輛都將碰上其他路人！ 眼前一邊是小孩，另一邊則是老人，自動車該怎麽辦？ 人類和AI在同類事件中扮演甚麽角色？動手用CUHK iCar做實驗，一探究竟吧！"),Yt,Ot,r(C,{title:"討論問題舉隅",image:"image/materials/logo_think2.png"},{default:p(()=>[n(" CUHK iCar用了哪一種機器學習模式？"),Wt,n(" 收集數據時，我們要注意甚麽？注意這些事項的目的又是甚麽？"),qt,n(" 除了避開小孩和避開老人，CUHK iCar還有第三個選擇嗎？"),Xt]),_:1},8,["image"])]),r(m,{image:"image/materials/logo_facereg.png",isShowDownload:!0,chiUrl:"https://download.eduairhk.com/人面識別追蹤_中文版教材.zip",engUrl:"https://download.eduairhk.com/Face_Following_English_Materials.zip"},{default:p(()=>[n("人面識別追蹤")]),_:1},8,["image","chiUrl","engUrl"]),t("div",Jt,[Gt,Zt,n(" 爲甚麽自動駕駛車可以辨識人臉，並跟隨指定人臉行駛？"),Qt,n(" 自動駕駛車又是如何學會這項技能？動手用CUHK iCar做實驗，一探究竟吧！"),te,ee,r(C,{title:"討論問題舉隅",image:"image/materials/logo_think2.png"},{default:p(()=>[n(" CUHK iCar如何學會辨識指定人臉？"),oe,n(" 辨識其他角度的相同人臉或照片時，CUHK iCar的表現會受影響嗎？爲甚麽？"),ie,n(" 在真實情況中應用此技術，會有甚麽好處和限制？"),le]),_:1},8,["image"])]),r(m,{image:"image/materials/logo_handdraw.png",isShowDownload:!0,chiUrl:"https://download.eduairhk.com/手畫線循跡_中文版教材.zip",engUrl:"https://download.eduairhk.com/Line_Tracking_English_Materials.zip"},{default:p(()=>[n("手畫線循跡")]),_:1},8,["image","chiUrl","engUrl"]),t("div",se,[ne,ae,n(" 自動駕駛車能根據各色虛線、實線移動，從而行走正確路線。"),ce,n(" 這是怎麽做到的呢？動手用CUHK iCar做實驗，一探究竟吧！"),re,de,r(C,{title:"討論問題舉隅",image:"image/materials/logo_think2.png"},{default:p(()=>[n(" CUHK iCar跟著手畫線和列印出來的線條行駛會有差異嗎？"),_e,n(" 線條的粗幼、大小、形狀等對CUHK iCar行駛有影響嗎？"),he,n(" CUHK iCar的這項技術在現實生活中有何作用？可應用在哪些地方？"),pe]),_:1},8,["image"])]),r(m,{image:"image/materials/logo_food3.png"},{default:p(()=>[n("外賣仔實驗")]),_:1},8,["image"]),t("div",ue,[t("div",me,[t("div",ge,[n(" 基於本能推理 "),t("video",fe,[t("source",{src:"food_skill.mp4"},null,8,ve)]),n(" 以最直觀的方式完成任務 ")]),t("div",ye,[n(" 基於規則推理 "),t("video",xe,[t("source",{src:"food_rule.mp4"},null,8,we)]),n(" 根據已學習的模式作出決策並執行 ")]),t("div",be,[n(" 基於知識推理 "),t("video",Ce,[t("source",{src:"food_knowledge.mp4"},null,8,ke)]),n(" 應用機器學習找出最佳解決方法 ")])]),Ue]),r(m,{image:"image/materials/logo_download.png"},{default:p(()=>[n("資源總匯")]),_:1},8,["image"]),t("div",$e,[r(P,{source:s.download},null,8,["source"])])],512)])])],64)}const Me=v(Pt,[["render",Ee],["__scopeId","data-v-b15bab44"]]);export{Me as default};
