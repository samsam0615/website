import{T as $}from"./components.c9ab5c7c.js";import{_ as c,o as u,c as d,a as n,t as _,r as S,G as F,b as l,w as g,d as y,H as T,F as A,I as D}from"./entry.031f756a.js";const O=""+new URL("intro.9ccedcb0.mp4",import.meta.url).href,C={name:"VideoBackground",mounted(){this.$refs.myVideo.play()}},N={ref:"myVideo",id:"myVideo",style:{right:"0",bottom:"0",width:"100%",height:"100%","object-fit":"cover"},autoplay:"",muted:"",loop:"",playsinline:"","webkit-playsinline":""},P=n("source",{src:O,type:"video/mp4"},null,-1),q=[P];function j(t,e,i,s,a,p){return u(),d("video",N,q,512)}const k=c(C,[["render",j]]);const E={name:"PictureFrame",props:["title","image"]},I={class:"picture-frame-container"},B={class:"description-image-container"},R=["src"],M={class:"title"},U={class:"overlay"},z={class:"text"};function L(t,e,i,s,a,p){return u(),d("div",I,[n("div",B,[n("img",{src:i.image},null,8,R)]),n("div",M,[n("label",null,_(i.title),1)]),n("div",U,[n("div",z,[S(t.$slots,"default",{},void 0,!0)])])])}const H=c(E,[["render",L],["__scopeId","data-v-21206e75"]]);let V=0;const w="webkit moz ms o".split(" ");let o,r;const G=typeof window>"u";if(G)o=function(){},r=function(){};else{o=window.requestAnimationFrame,r=window.cancelAnimationFrame;let t;for(let e=0;e<w.length&&!(o&&r);e++)t=w[e],o=o||window[t+"RequestAnimationFrame"],r=r||window[t+"CancelAnimationFrame"]||window[t+"CancelRequestAnimationFrame"];(!o||!r)&&(o=function(e){const i=new Date().getTime(),s=Math.max(0,16-(i-V)),a=window.setTimeout(()=>{e(i+s)},s);return V=i+s,a},r=function(e){window.clearTimeout(e)})}const K={props:{startVal:{type:Number,required:!1,default:0},endVal:{type:Number,required:!1,default:2017},duration:{type:Number,required:!1,default:3e3},autoplay:{type:Boolean,required:!1,default:!0},decimals:{type:Number,required:!1,default:0,validator(t){return t>=0}},decimal:{type:String,required:!1,default:"."},separator:{type:String,required:!1,default:","},prefix:{type:String,required:!1,default:""},suffix:{type:String,required:!1,default:""},useEasing:{type:Boolean,required:!1,default:!0},easingFn:{type:Function,default(t,e,i,s){return i*(-Math.pow(2,-10*t/s)+1)*1024/1023+e}}},data(){return{localStartVal:this.startVal,displayValue:this.formatNumber(this.startVal),printVal:null,paused:!1,localDuration:this.duration,startTime:null,timestamp:null,remaining:null,rAF:null}},computed:{countDown(){return this.startVal>this.endVal}},watch:{startVal(){this.autoplay&&this.start()},endVal(){this.autoplay&&this.start()}},mounted(){this.autoplay&&this.start(),this.$emit("mountedCallback")},methods:{start(){this.localStartVal=this.startVal,this.startTime=null,this.localDuration=this.duration,this.paused=!1,this.rAF=o(this.count)},pauseResume(){this.paused?(this.resume(),this.paused=!1):(this.pause(),this.paused=!0)},pause(){r(this.rAF)},resume(){this.startTime=null,this.localDuration=+this.remaining,this.localStartVal=+this.printVal,o(this.count)},reset(){this.startTime=null,r(this.rAF),this.displayValue=this.formatNumber(this.startVal)},count(t){this.startTime||(this.startTime=t),this.timestamp=t;const e=t-this.startTime;this.remaining=this.localDuration-e,this.useEasing?this.countDown?this.printVal=this.localStartVal-this.easingFn(e,0,this.localStartVal-this.endVal,this.localDuration):this.printVal=this.easingFn(e,this.localStartVal,this.endVal-this.localStartVal,this.localDuration):this.countDown?this.printVal=this.localStartVal-(this.localStartVal-this.endVal)*(e/this.localDuration):this.printVal=this.localStartVal+(this.endVal-this.localStartVal)*(e/this.localDuration),this.countDown?this.printVal=this.printVal<this.endVal?this.endVal:this.printVal:this.printVal=this.printVal>this.endVal?this.endVal:this.printVal,this.displayValue=this.formatNumber(this.printVal),e<this.localDuration?this.rAF=o(this.count):this.$emit("callback")},isNumber(t){return!isNaN(parseFloat(t))},formatNumber(t){t=t.toFixed(this.decimals),t+="";const e=t.split(".");let i=e[0];const s=e.length>1?this.decimal+e[1]:"",a=/(\d+)(\d{3})/;if(this.separator&&!this.isNumber(this.separator))for(;a.test(i);)i=i.replace(a,"$1"+this.separator+"$2");return this.prefix+i+s+this.suffix}},destroyed(){r(this.rAF)}};function J(t,e,i,s,a,p){return u(),d("span",null,_(a.displayValue),1)}const m=c(K,[["render",J]]);function Q(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function b(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),i.push.apply(i,s)}return i}m.unmounted=m.destroyed,Reflect.deleteProperty(m,"destroyed");var W=function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e]!=null?arguments[e]:{};e%2?b(Object(i),!0).forEach(function(s){Q(t,s,i[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):b(Object(i)).forEach(function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(i,s))})}return t}({name:"CountTo",emits:["callback","mountedCallback"]},m);const X={name:"UpCounter",props:["image","text1","text2","number"],data:()=>({counterStatus:!1,event:null}),components:{CountTo:W},methods:{startCounter(){let t=this;window.innerHeight-t.$refs.upcounter.$el.getBoundingClientRect().top>0&&t.counterStatus==!1&&(t.$refs.upcounter.start(),t.counterStatus=!0)}},mounted(){let t=this;this.startCounter(),this.event=document.addEventListener("scroll",e=>{t.$refs.upcounter&&this.startCounter()})},unmounted(){document.removeEventListener("scroll",this.event)}},Y={class:"upcounter-container"},Z={style:{width:"60px",height:"60px",display:"flex"}},tt=["src"];function et(t,e,i,s,a,p){const f=F("countTo");return u(),d("div",Y,[n("div",Z,[n("img",{src:i.image,style:{width:"60px","object-fit":"contain"}},null,8,tt)]),n("label",null,_(i.text1),1),l(f,{startVal:0,endVal:i.number,duration:4e3,autoplay:!1,ref:"upcounter"},null,8,["endVal"]),n("label",null,_(i.text2),1)])}const it=c(X,[["render",et],["__scopeId","data-v-ae01fd6d"]]);const nt={name:"IndexPage",mounted(){}},st={style:{width:"100%"}},at={class:"promote-container video-container",style:{overflow:"hidden",width:"100%"}},ot=n("div",{class:"video-description"},[n("label",{class:"title"},"掌握AI 更好明天"),n("label",{class:"content"},"愛動智教育系統提供一系列創新AI學習套件及課程")],-1),rt={class:"promote-container promote-container-1"},lt={class:"promote-container-content text-container",onclick:""},ct=n("div",{class:"description-box-title",style:{padding:"30px","font-size":"30px","font-weight":"500"}},[n("label",null,"我們的服務")],-1),ut={style:{display:"flex","justify-content":"center",width:"100%",gap:"50px","padding-top":"20px"}},dt={class:"promote-container promote-container-2"},pt={class:"promote-container-content text-container",onclick:""},ht=n("div",{class:"description-box-title",style:{padding:"30px","font-size":"30px","font-weight":"500"}},[n("label",null,"我們的成果")],-1),mt={style:{display:"flex","justify-content":"center",width:"100%",gap:"50px","padding-top":"20px","flex-wrap":"wrap"}};function _t(t,e,i,s,a,p){const f=$,v=k,x=H,h=it;return u(),d(A,null,[l(f,null,{default:g(()=>[y("愛動智 EduAIR")]),_:1}),n("div",st,[n("div",at,[l(v),ot]),T(n("div",rt,[n("div",lt,[ct,n("div",ut,[l(x,{title:"創新教學套件",image:"image/media/img0.jpg"},{default:g(()=>[y(" 由中大工程專家研發的一系列學習工具，是學習AI / STEAM的最佳起點 ")]),_:1},8,["image"]),l(x,{title:"嶄新學習體驗",image:"image/media/img1.jpg"},{default:g(()=>[y(" 提供嶄新及貼近生活的課程，讓學生無痛學習AI / STEAM課題 ")]),_:1},8,["image"])])])],512),[[D,!0]]),n("div",dt,[n("div",pt,[ht,n("div",mt,[l(h,{text1:"舉辦",text2:"學生訓練班",image:"image/materials/work_history.png",number:5},null,8,["image"]),l(h,{text1:"舉辦",text2:"教師工作坊",image:"image/materials/teacher2.png",number:6},null,8,["image"]),l(h,{text1:"舉辦",text2:"本地中學使用",image:"image/materials/school2.png",number:238},null,8,["image"]),l(h,{text1:"覆蓋",text2:"學生",image:"image/materials/people.png",number:2560},null,8,["image"])])])])])],64)}const yt=c(nt,[["render",_t]]);export{yt as default};