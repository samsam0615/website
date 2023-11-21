import{_,o as l,c as r,a as t,t as d,x as w,b as o,w as c,d as s,C as v,F as I,T as A,M as S,h as j,L as f,p as k,f as E}from"./entry.cd926efa.js";const C=""+new URL("intro.9ccedcb0.mp4",import.meta.url).href,T={name:"VideoBackground",mounted(){this.$refs.myVideo.play()}},V={ref:"myVideo",id:"myVideo",style:{right:"0",bottom:"0",width:"100%",height:"100%","object-fit":"cover"},autoplay:"",muted:"",loop:"",playsinline:"","webkit-playsinline":""},M=t("source",{src:C,type:"video/mp4"},null,-1),B=[M];function F(e,i,n,m,u,h){return l(),r("video",V,B,512)}const R=_(T,[["render",F]]);const P={name:"PictureFrame",props:["title","image"]},U={class:"picture-frame-container"},z={class:"description-image-container"},L=["src"],N={class:"title"},D={class:"overlay"},H={class:"text"};function q(e,i,n,m,u,h){return l(),r("div",U,[t("div",z,[t("img",{src:n.image},null,8,L)]),t("div",N,[t("label",null,d(n.title),1)]),t("div",D,[t("div",H,[w(e.$slots,"default",{},void 0,!0)])])])}const G=_(P,[["render",q],["__scopeId","data-v-587e225d"]]);const J={name:"UpCounter",props:["image","text1","text2","number"],data:()=>({counterStatus:!1,event:null}),components:{},methods:{startCounter(){let e=this;window.innerHeight-e.$refs.upcounter.$el.getBoundingClientRect().top>0&&e.counterStatus==!1&&(e.$refs.upcounter.start(),e.counterStatus=!0)}},mounted(){},unmounted(){document.removeEventListener("scroll",this.event)}},K={class:"upcounter-container"},O={style:{width:"60px",height:"60px",display:"flex"}},Q=["src"],W={class:"font-small"},X={class:"font-big"},Y={class:"font-small"};function Z(e,i,n,m,u,h){return l(),r("div",K,[t("div",O,[t("img",{src:n.image,style:{width:"60px","object-fit":"contain"}},null,8,Q)]),t("label",W,d(n.text1),1),t("span",X,d(n.number),1),t("label",Y,d(n.text2),1)])}const tt=_(J,[["render",Z],["__scopeId","data-v-b9b12da6"]]);const et={name:"IndexPage",head(){return{title:"愛動智 EduAIR",meta:[{hid:"og:title",name:"og:title",content:"愛動智 EduAIR"}]}}},p=e=>(k("data-v-e3abbc8e"),e=e(),E(),e),ot={style:{width:"100%"}},nt={class:"promote-container video-container",style:{overflow:"hidden",width:"100%"}},st=p(()=>t("div",{class:"video-description"},[t("label",{class:"title"},"掌握AI 更好明天"),t("label",{class:"content"},"愛動智教育系統提供一系列創新AI學習套件及課程")],-1)),it={class:"promote-container promote-container-2"},at={class:"promote-container-content text-container",onclick:""},ct=p(()=>t("div",{class:"description-box-title",style:{padding:"30px","font-size":"30px","font-weight":"500"}},[t("label",null,"最新消息")],-1)),dt={class:"responsive-div",style:{}},_t={style:{width:"300px",height:"300px"}},lt={style:{width:"300px",height:"300px"}},rt={style:{width:"300px",height:"300px"}},pt={class:"promote-container promote-container-1"},mt={class:"promote-container-content text-container",onclick:""},ut=p(()=>t("div",{class:"description-box-title",style:{padding:"30px","font-size":"30px","font-weight":"500"}},[t("label",null,"我們的服務")],-1)),ht={class:"responsive-div",style:{}},gt={class:"promote-container promote-container-2"},xt={class:"promote-container-content text-container",onclick:""},vt=p(()=>t("div",{class:"description-box-title",style:{padding:"30px","font-size":"30px","font-weight":"500"}},[t("label",null,"我們的成果")],-1)),ft={style:{display:"flex","justify-content":"center",width:"100%",gap:"50px","padding-top":"20px","flex-wrap":"wrap"}};function yt(e,i,n,m,u,h){const y=A,$=S,b=R,g=j,x=G,a=tt;return l(),r(I,null,[o(y,null,{default:c(()=>[s("愛動智 EduAIR")]),_:1}),o($,{name:"description",content:"愛動智教育系統有限公司由香港中文大學初創種子基金啟動，是一家非牟利機構，董事會成員為香港中文大學深圳研究院院長任揚教授和系統工程與工程管理學蒙美玲教授，致力於以教育為主導，推動年輕人對AI/STEAM的學習和認知，幫助他們在相關領域中實現自己的夢想和抱負。"}),t("div",ot,[t("div",nt,[o(b),st]),v(t("div",it,[t("div",at,[ct,t("div",dt,[t("div",_t,[o(g,{src:"event7.jpg",style:{width:"100%","aspect-ratio":"3 / 2"}}),s(" 香港教育局課程 STEAM教育學與教和評估系列：初中人工智能課程單元應用實踐工作坊 ")]),t("div",lt,[o(g,{src:"event1.jpg",style:{width:"100%","aspect-ratio":"3 / 2"}}),s(" 中大賽馬會「智」為未來計劃 - 人工智能教育及探索實驗室開放日 「危機解除」工作坊 ")]),t("div",rt,[o(g,{src:"event6.jpg",style:{width:"100%","aspect-ratio":"3 / 2"}}),s(" 中大賽馬會「智」為未來計劃 - 「智」為未來暑期訓練營 2023 「iCar達人」工作坊 ")])])])],512),[[f,!0]]),v(t("div",pt,[t("div",mt,[ut,t("div",ht,[o(x,{title:"創新教學套件",image:"image/media/img0.jpg"},{default:c(()=>[s(" 由中大工程專家研發的一系列學習工具，是學習AI/STEAM的最佳起點 ")]),_:1},8,["image"]),o(x,{title:"嶄新學習體驗",image:"image/media/img1.jpg"},{default:c(()=>[s(" 提供嶄新及貼近生活的課程，讓學生無痛學習AI/STEAM課題 ")]),_:1},8,["image"]),o(x,{title:"互動AI展品",image:"image/media/img2.jpg"},{default:c(()=>[s(" 結合機械與AI，研發出多個在藝術/玩樂/生活方面的AI展品，讓學生了解AI的廣泛應用 ")]),_:1},8,["image"])])])],512),[[f,!0]]),t("div",gt,[t("div",xt,[vt,t("div",ft,[o(a,{text1:"舉辦",text2:"學生訓練班",image:"image/materials/work_history.png",number:5},null,8,["image"]),o(a,{text1:"舉辦",text2:"教師工作坊",image:"image/materials/teacher2.png",number:6},null,8,["image"]),o(a,{text1:"已有",text2:"本地中學使用",image:"image/materials/school2.png",number:238},null,8,["image"]),o(a,{text1:"覆蓋",text2:"學生",image:"image/materials/people.png",number:2560},null,8,["image"])])])])])],64)}const bt=_(et,[["render",yt],["__scopeId","data-v-e3abbc8e"]]);export{bt as default};
