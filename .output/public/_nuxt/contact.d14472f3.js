import{i as Y,j as W,k as q,r as b,l as M,m as ae,n as B,q as O,s as Q,v as le,o as j,c as L,a as d,x as ce,y as de,z as ue,_ as pe,A as D,b as T,w as U,d as I,B as V,C as R,D as N,E as G,F as he,T as me,M as ge,p as fe,f as ye}from"./entry.a548a0ed.js";const E={_origin:"https://api.emailjs.com"},ve=(t,e="https://api.emailjs.com")=>{E._userID=t,E._origin=e},ee=(t,e,i)=>{if(!t)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!e)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!i)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class K{constructor(e){this.status=e?e.status:0,this.text=e?e.responseText:"Network Error"}}const te=(t,e,i={})=>new Promise((s,o)=>{const r=new XMLHttpRequest;r.addEventListener("load",({target:n})=>{const u=new K(n);u.status===200||u.text==="OK"?s(u):o(u)}),r.addEventListener("error",({target:n})=>{o(new K(n))}),r.open("POST",E._origin+t,!0),Object.keys(i).forEach(n=>{r.setRequestHeader(n,i[n])}),r.send(e)}),be=(t,e,i,s)=>{const o=s||E._userID;return ee(o,t,e),te("/api/v1.0/email/send",JSON.stringify({lib_version:"3.11.0",user_id:o,service_id:t,template_id:e,template_params:i}),{"Content-type":"application/json"})},_e=t=>{let e;if(typeof t=="string"?e=document.querySelector(t):e=t,!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return e},we=(t,e,i,s)=>{const o=s||E._userID,r=_e(i);ee(o,t,e);const n=new FormData(r);return n.append("lib_version","3.11.0"),n.append("service_id",t),n.append("template_id",e),n.append("user_id",o),te("/api/v1.0/email/send-form",n)},xe={init:ve,send:be,sendForm:we};(function(){try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode(".mapdiv[data-v-174b771e]{width:100%;height:100%}.info-window-wrapper[data-v-90174664]{display:none}.mapdiv .info-window-wrapper[data-v-90174664]{display:inline-block}.custom-marker-wrapper[data-v-2d2d343a]{display:none}.mapdiv .custom-marker-wrapper[data-v-2d2d343a]{display:inline-block}")),document.head.appendChild(t)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();var ke=Object.defineProperty,Se=(t,e,i)=>e in t?ke(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,H=(t,e,i)=>(Se(t,typeof e!="symbol"?e+"":e,i),i);const ie=Symbol("map"),oe=Symbol("api"),Ce=Symbol("marker"),Oe=Symbol("markerCluster"),z=Symbol("CustomMarker"),Ie=Symbol("mapTilesLoaded"),re=["click","dblclick","drag","dragend","dragstart","mousedown","mousemove","mouseout","mouseover","mouseup","rightclick"];/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function Ee(t,e,i,s){function o(r){return r instanceof i?r:new i(function(n){n(r)})}return new(i||(i=Promise))(function(r,n){function u(a){try{g(s.next(a))}catch(c){n(c)}}function f(a){try{g(s.throw(a))}catch(c){n(c)}}function g(a){a.done?r(a.value):o(a.value).then(u,f)}g((s=s.apply(t,e||[])).next())})}var Pe=function t(e,i){if(e===i)return!0;if(e&&i&&typeof e=="object"&&typeof i=="object"){if(e.constructor!==i.constructor)return!1;var s,o,r;if(Array.isArray(e)){if(s=e.length,s!=i.length)return!1;for(o=s;o--!==0;)if(!t(e[o],i[o]))return!1;return!0}if(e.constructor===RegExp)return e.source===i.source&&e.flags===i.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===i.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===i.toString();if(r=Object.keys(e),s=r.length,s!==Object.keys(i).length)return!1;for(o=s;o--!==0;)if(!Object.prototype.hasOwnProperty.call(i,r[o]))return!1;for(o=s;o--!==0;){var n=r[o];if(!t(e[n],i[n]))return!1}return!0}return e!==e&&i!==i};const Z="__googleMapsScriptId";var C;(function(t){t[t.INITIALIZED=0]="INITIALIZED",t[t.LOADING=1]="LOADING",t[t.SUCCESS=2]="SUCCESS",t[t.FAILURE=3]="FAILURE"})(C||(C={}));class x{constructor({apiKey:e,authReferrerPolicy:i,channel:s,client:o,id:r=Z,language:n,libraries:u=[],mapIds:f,nonce:g,region:a,retries:c=3,url:p="https://maps.googleapis.com/maps/api/js",version:m}){if(this.callbacks=[],this.done=!1,this.loading=!1,this.errors=[],this.apiKey=e,this.authReferrerPolicy=i,this.channel=s,this.client=o,this.id=r||Z,this.language=n,this.libraries=u,this.mapIds=f,this.nonce=g,this.region=a,this.retries=c,this.url=p,this.version=m,x.instance){if(!Pe(this.options,x.instance.options))throw new Error(`Loader must not be called again with different options. ${JSON.stringify(this.options)} !== ${JSON.stringify(x.instance.options)}`);return x.instance}x.instance=this}get options(){return{version:this.version,apiKey:this.apiKey,channel:this.channel,client:this.client,id:this.id,libraries:this.libraries,language:this.language,region:this.region,mapIds:this.mapIds,nonce:this.nonce,url:this.url,authReferrerPolicy:this.authReferrerPolicy}}get status(){return this.errors.length?C.FAILURE:this.done?C.SUCCESS:this.loading?C.LOADING:C.INITIALIZED}get failed(){return this.done&&!this.loading&&this.errors.length>=this.retries+1}createUrl(){let e=this.url;return e+="?callback=__googleMapsCallback",this.apiKey&&(e+=`&key=${this.apiKey}`),this.channel&&(e+=`&channel=${this.channel}`),this.client&&(e+=`&client=${this.client}`),this.libraries.length>0&&(e+=`&libraries=${this.libraries.join(",")}`),this.language&&(e+=`&language=${this.language}`),this.region&&(e+=`&region=${this.region}`),this.version&&(e+=`&v=${this.version}`),this.mapIds&&(e+=`&map_ids=${this.mapIds.join(",")}`),this.authReferrerPolicy&&(e+=`&auth_referrer_policy=${this.authReferrerPolicy}`),e}deleteScript(){const e=document.getElementById(this.id);e&&e.remove()}load(){return this.loadPromise()}loadPromise(){return new Promise((e,i)=>{this.loadCallback(s=>{s?i(s.error):e(window.google)})})}importLibrary(e){return this.execute(),google.maps.importLibrary(e)}loadCallback(e){this.callbacks.push(e),this.execute()}setScript(){var e,i;if(document.getElementById(this.id)){this.callback();return}const s={key:this.apiKey,channel:this.channel,client:this.client,libraries:this.libraries.length&&this.libraries,v:this.version,mapIds:this.mapIds,language:this.language,region:this.region,authReferrerPolicy:this.authReferrerPolicy};Object.keys(s).forEach(r=>!s[r]&&delete s[r]),!((i=(e=window==null?void 0:window.google)===null||e===void 0?void 0:e.maps)===null||i===void 0)&&i.importLibrary||(r=>{let n,u,f,g="The Google Maps JavaScript API",a="google",c="importLibrary",p="__ib__",m=document,l=window;l=l[a]||(l[a]={});const h=l.maps||(l.maps={}),y=new Set,v=new URLSearchParams,k=()=>n||(n=new Promise((w,S)=>Ee(this,void 0,void 0,function*(){var P;yield u=m.createElement("script"),u.id=this.id,v.set("libraries",[...y]+"");for(f in r)v.set(f.replace(/[A-Z]/g,A=>"_"+A[0].toLowerCase()),r[f]);v.set("callback",a+".maps."+p),u.src=this.url+"?"+v,h[p]=w,u.onerror=()=>n=S(Error(g+" could not load.")),u.nonce=this.nonce||((P=m.querySelector("script[nonce]"))===null||P===void 0?void 0:P.nonce)||"",m.head.append(u)})));h[c]?console.warn(g+" only loads once. Ignoring:",r):h[c]=(w,...S)=>y.add(w)&&k().then(()=>h[c](w,...S))})(s);const o=this.libraries.map(r=>this.importLibrary(r));o.length||o.push(this.importLibrary("core")),Promise.all(o).then(()=>this.callback(),r=>{const n=new ErrorEvent("error",{error:r});this.loadErrorCallback(n)})}reset(){this.deleteScript(),this.done=!1,this.loading=!1,this.errors=[],this.onerrorEvent=null}resetIfRetryingFailed(){this.failed&&this.reset()}loadErrorCallback(e){if(this.errors.push(e),this.errors.length<=this.retries){const i=this.errors.length*Math.pow(2,this.errors.length);console.error(`Failed to load Google Maps script, retrying in ${i} ms.`),setTimeout(()=>{this.deleteScript(),this.setScript()},i)}else this.onerrorEvent=e,this.callback()}callback(){this.done=!0,this.loading=!1,this.callbacks.forEach(e=>{e(this.onerrorEvent)}),this.callbacks=[]}execute(){if(this.resetIfRetryingFailed(),this.done)this.callback();else{if(window.google&&window.google.maps&&window.google.maps.version){console.warn("Google Maps already loaded outside @googlemaps/js-api-loader.This may result in undesirable behavior as options and script parameters may not match."),this.callback();return}this.loading||(this.loading=!0,this.setScript())}}}function Te(t){return class extends t.OverlayView{constructor(e){super(),H(this,"element"),H(this,"opts");const{element:i,...s}=e;this.element=i,this.opts=s,this.opts.map&&this.setMap(this.opts.map)}getPosition(){return this.opts.position?this.opts.position instanceof t.LatLng?this.opts.position:new t.LatLng(this.opts.position):null}getVisible(){if(!this.element)return!1;const e=this.element;return e.style.display!=="none"&&e.style.visibility!=="hidden"&&(e.style.opacity===""||Number(e.style.opacity)>.01)}onAdd(){if(!this.element)return;const e=this.getPanes();e&&e.overlayMouseTarget.appendChild(this.element)}draw(){if(!this.element)return;const e=this.getProjection(),i=e==null?void 0:e.fromLatLngToDivPixel(this.getPosition());if(i){this.element.style.position="absolute";const s=this.element.offsetHeight,o=this.element.offsetWidth;let r,n;switch(this.opts.anchorPoint){case"TOP_CENTER":r=i.x-o/2,n=i.y;break;case"BOTTOM_CENTER":r=i.x-o/2,n=i.y-s;break;case"LEFT_CENTER":r=i.x,n=i.y-s/2;break;case"RIGHT_CENTER":r=i.x-o,n=i.y-s/2;break;case"TOP_LEFT":r=i.x,n=i.y;break;case"TOP_RIGHT":r=i.x-o,n=i.y;break;case"BOTTOM_LEFT":r=i.x,n=i.y-s;break;case"BOTTOM_RIGHT":r=i.x-o,n=i.y-s;break;default:r=i.x-o/2,n=i.y-s/2}this.element.style.left=r+"px",this.element.style.top=n+"px",this.element.style.transform=`translateX(${this.opts.offsetX||0}px) translateY(${this.opts.offsetY||0}px)`,this.opts.zIndex&&(this.element.style.zIndex=this.opts.zIndex.toString())}}onRemove(){this.element&&this.element.remove()}setOptions(e){const{element:i,...s}=e;this.element=i,this.opts=s,this.draw()}}}let $;const J=["bounds_changed","center_changed","click","dblclick","drag","dragend","dragstart","heading_changed","idle","maptypeid_changed","mousemove","mouseout","mouseover","projection_changed","resize","rightclick","tilesloaded","tilt_changed","zoom_changed"],qe=Y({props:{apiPromise:{type:Promise},apiKey:{type:String,default:""},version:{type:String,default:"weekly"},libraries:{type:Array,default:()=>["places"]},region:{type:String,required:!1},language:{type:String,required:!1},backgroundColor:{type:String,required:!1},center:{type:Object,default:()=>({lat:0,lng:0})},clickableIcons:{type:Boolean,required:!1,default:void 0},controlSize:{type:Number,required:!1},disableDefaultUi:{type:Boolean,required:!1,default:void 0},disableDoubleClickZoom:{type:Boolean,required:!1,default:void 0},draggable:{type:Boolean,required:!1,default:void 0},draggableCursor:{type:String,required:!1},draggingCursor:{type:String,required:!1},fullscreenControl:{type:Boolean,required:!1,default:void 0},fullscreenControlPosition:{type:String,required:!1},gestureHandling:{type:String,required:!1},heading:{type:Number,required:!1},keyboardShortcuts:{type:Boolean,required:!1,default:void 0},mapTypeControl:{type:Boolean,required:!1,default:void 0},mapTypeControlOptions:{type:Object,required:!1},mapTypeId:{type:[Number,String],required:!1},mapId:{type:String,required:!1},maxZoom:{type:Number,required:!1},minZoom:{type:Number,required:!1},noClear:{type:Boolean,required:!1,default:void 0},panControl:{type:Boolean,required:!1,default:void 0},panControlPosition:{type:String,required:!1},restriction:{type:Object,required:!1},rotateControl:{type:Boolean,required:!1,default:void 0},rotateControlPosition:{type:String,required:!1},scaleControl:{type:Boolean,required:!1,default:void 0},scaleControlStyle:{type:Number,required:!1},scrollwheel:{type:Boolean,required:!1,default:void 0},streetView:{type:Object,required:!1},streetViewControl:{type:Boolean,required:!1,default:void 0},streetViewControlPosition:{type:String,required:!1},styles:{type:Array,required:!1},tilt:{type:Number,required:!1},zoom:{type:Number,required:!1},zoomControl:{type:Boolean,required:!1,default:void 0},zoomControlPosition:{type:String,required:!1}},emits:J,setup(t,{emit:e}){const i=b(),s=b(!1),o=b(),r=b(),n=b(!1);q(ie,o),q(oe,r),q(Ie,n);const u=()=>{const c={...t};Object.keys(c).forEach(l=>{c[l]===void 0&&delete c[l]});const p=l=>{var h;return l?{position:(h=r.value)==null?void 0:h.ControlPosition[l]}:{}},m={scaleControlOptions:t.scaleControlStyle?{style:t.scaleControlStyle}:{},panControlOptions:p(t.panControlPosition),zoomControlOptions:p(t.zoomControlPosition),rotateControlOptions:p(t.rotateControlPosition),streetViewControlOptions:p(t.streetViewControlPosition),fullscreenControlOptions:p(t.fullscreenControlPosition),disableDefaultUI:t.disableDefaultUi};return{...c,...m}},f=B([r,o],([c,p])=>{const m=c,l=p;m&&l&&(m.event.addListenerOnce(l,"tilesloaded",()=>{n.value=!0}),setTimeout(f,0))},{immediate:!0}),g=()=>{try{const{apiKey:c,region:p,version:m,language:l,libraries:h}=t;$=new x({apiKey:c,region:p,version:m,language:l,libraries:h})}catch(c){console.error(c)}},a=c=>{r.value=O(c.maps),o.value=O(new c.maps.Map(i.value,u()));const p=Te(r.value);r.value[z]=p,J.forEach(l=>{var h;(h=o.value)==null||h.addListener(l,y=>e(l,y))}),s.value=!0;const m=Object.keys(t).filter(l=>!["apiPromise","apiKey","version","libraries","region","language","center","zoom"].includes(l)).map(l=>W(t,l));B([()=>t.center,()=>t.zoom,...m],([l,h],[y,v])=>{var k,w,S;const{center:P,zoom:A,...ne}=u();(k=o.value)==null||k.setOptions(ne),h!==void 0&&h!==v&&((w=o.value)==null||w.setZoom(h));const se=!y||l.lng!==y.lng||l.lat!==y.lat;l&&se&&((S=o.value)==null||S.panTo(l))})};return le(()=>{t.apiPromise&&t.apiPromise instanceof Promise?t.apiPromise.then(a):(g(),$.load().then(a))}),Q(()=>{var c;n.value=!1,o.value&&((c=r.value)==null||c.event.clearInstanceListeners(o.value))}),{mapRef:i,ready:s,map:o,api:r,mapTilesLoaded:n}}}),je=(t,e)=>{const i=t.__vccOpts||t;for(const[s,o]of e)i[s]=o;return i},Le={ref:"mapRef",class:"mapdiv"};function Me(t,e,i,s,o,r){return j(),L("div",null,[d("div",Le,null,512),ce(t.$slots,"default",de(ue({ready:t.ready,map:t.map,api:t.api,mapTilesLoaded:t.mapTilesLoaded})),void 0,!0)])}const Re=je(qe,[["render",Me],["__scopeId","data-v-174b771e"]]);function Ne(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Be=function t(e,i){if(e===i)return!0;if(e&&i&&typeof e=="object"&&typeof i=="object"){if(e.constructor!==i.constructor)return!1;var s,o,r;if(Array.isArray(e)){if(s=e.length,s!=i.length)return!1;for(o=s;o--!==0;)if(!t(e[o],i[o]))return!1;return!0}if(e.constructor===RegExp)return e.source===i.source&&e.flags===i.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===i.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===i.toString();if(r=Object.keys(e),s=r.length,s!==Object.keys(i).length)return!1;for(o=s;o--!==0;)if(!Object.prototype.hasOwnProperty.call(i,r[o]))return!1;for(o=s;o--!==0;){var n=r[o];if(!t(e[n],i[n]))return!1}return!0}return e!==e&&i!==i};const Fe=Ne(Be),ze=t=>t==="Marker",Ae=t=>t===z,De=(t,e,i,s)=>{const o=b(),r=M(ie,b()),n=M(oe,b()),u=M(Oe,b()),f=ae(()=>!!(u.value&&n.value&&(o.value instanceof n.value.Marker||o.value instanceof n.value[z])));return B([r,i],(g,[a,c])=>{var p,m,l;const h=!Fe(i.value,c)||r.value!==a;!r.value||!n.value||!h||(o.value?(o.value.setOptions(i.value),f.value&&((p=u.value)==null||p.removeMarker(o.value),(m=u.value)==null||m.addMarker(o.value))):(ze(t)?o.value=O(new n.value[t](i.value)):Ae(t)?o.value=O(new n.value[t](i.value)):o.value=O(new n.value[t]({...i.value,map:r.value})),f.value?(l=u.value)==null||l.addMarker(o.value):o.value.setMap(r.value),e.forEach(y=>{var v;(v=o.value)==null||v.addListener(y,k=>s(y,k))})))},{immediate:!0}),Q(()=>{var g,a;o.value&&((g=n.value)==null||g.event.clearInstanceListeners(o.value),f.value?(a=u.value)==null||a.removeMarker(o.value):o.value.setMap(null))}),o},X=["animation_changed","click","dblclick","rightclick","dragstart","dragend","drag","mouseover","mousedown","mouseout","mouseup","draggable_changed","clickable_changed","contextmenu","cursor_changed","flat_changed","rightclick","zindex_changed","icon_changed","position_changed","shape_changed","title_changed","visible_changed"],Ue=Y({name:"Marker",props:{options:{type:Object,required:!0}},emits:X,setup(t,{emit:e,expose:i,slots:s}){const o=W(t,"options"),r=De("Marker",X,o,e);return q(Ce,r),i({marker:r}),()=>{var n;return(n=s.default)==null?void 0:n.call(s)}}});re.concat(["bounds_changed"]);re.concat(["center_changed","radius_changed"]);var F;(function(t){t.CLUSTERING_BEGIN="clusteringbegin",t.CLUSTERING_END="clusteringend",t.CLUSTER_CLICK="click"})(F||(F={}));Object.values(F);const Ve={components:{GoogleMap:Re,Marker:Ue},data(){return{name:"",email:"",content:"",center:{lat:22.428077697753906,lng:114.20909881591797},isError:!1,isSuccess:!1}},methods:{sendForm(){this.name==""||this.email==""||this.content==""||xe.sendForm("service_dw5j7af","template_glfviys","#contactform","fmOc4joeStfAyUTP1").then(t=>{console.log("SUCCESS!",t.status,t.text),this.isSuccess=!0,setTimeout(()=>{this.isSuccess=!1},2e3),this.resetForm()},t=>{console.log("FAILED...",t),this.isError=!0,setTimeout(()=>{this.isError=!1},2e3)})},resetForm(){this.$refs.contactform.reset()}}},_=t=>(fe("data-v-6ce83501"),t=t(),ye(),t),Ge={class:"bg"},Ke={key:0,style:{position:"fixed",width:"400px",height:"max-content",background:"rgba(255, 236, 236, 0.95)","z-index":"1",top:"50%",left:"50%","max-width":"75%","max-height":"40%",transform:"translate(-50%, -50%)",padding:"25px"}},He=_(()=>d("div",{style:{"font-size":"20px"}},"Failed Sending Form",-1)),Ze=_(()=>d("div",{style:{"font-size":"16px",padding:"10px 0"}}," The contact form functionality has encountered an issue. Please utilize email to get in touch with us. ",-1)),$e=[He,Ze],Je={key:1,style:{position:"fixed",width:"400px",height:"max-content",background:"rgba(236, 255, 236, 0.95)","z-index":"1",top:"50%",left:"50%","max-width":"75%","max-height":"40%",transform:"translate(-50%, -50%)",padding:"25px"}},Xe=_(()=>d("div",{style:{"font-size":"20px"}},"Send Sucessfully ",-1)),Ye=_(()=>d("div",{style:{"font-size":"16px",padding:"10px 0"}},null,-1)),We=[Xe,Ye],Qe={class:"pageContent-container"},et={class:"text-container"},tt={class:"form"},it={style:{width:"100%",background:"rgba( 255, 255, 255, 0.7   )",padding:"30px",flex:"1"}},ot=_(()=>d("label",{class:"pageTitle font-big"},[I("立即聯絡 EduAIR"),d("br")],-1)),rt=_(()=>d("br",null,null,-1)),nt={id:"contactform",ref:"contactform",style:{display:"flex","flex-direction":"column"}},st=_(()=>d("div",{class:"row",style:{display:"flex","justify-content":"space-between"}},[d("input",{class:"font-mini",type:"text",id:"phone",name:"phone",placeholder:"聯絡電話",autocomplete:"off"}),d("input",{class:"font-mini",type:"text",id:"contactformOrganization",name:"organization",placeholder:"機構/公司名稱",autocomplete:"off"})],-1)),at={style:{"justify-content":"center",display:"flex"}},lt={style:{display:"flex","align-self":"center","flex-direction":"column","max-width":"100%","justify-content":"center","align-items":"center",padding:"20px 0",width:"max-content"}},ct={style:{"border-radius":"5px",overflow:"hidden",width:"400px",height:"300px","max-width":"100%"}},dt=_(()=>d("div",{style:{width:"400px","max-width":"100%",padding:"20px","line-height":"30px",background:"rgba(255,255,255,0.6)",margin:"20px 0 5px","border-radius":"10px",display:"flex","align-items":"center"}},[I(" 聯絡電話：+852 5542 7564"),d("br"),I(" 聯絡電郵：info@eduairhk.com"),d("br"),I(" 地址：科學園16W棟2樓237室 ")],-1));function ut(t,e,i,s,o,r){const n=me,u=ge,f=D("Marker"),g=D("GoogleMap");return j(),L(he,null,[T(n,null,{default:U(()=>[I("聯絡我們")]),_:1}),T(u,{name:"description",content:"熱線電話：5542 7564 電郵地址：info@eduairhk.com"}),d("div",Ge,[o.isError?(j(),L("div",Ke,$e)):V("",!0),o.isSuccess?(j(),L("div",Je,We)):V("",!0),d("div",Qe,[d("div",et,[d("div",tt,[d("div",it,[ot,rt,d("form",nt,[R(d("input",{"onUpdate:modelValue":e[0]||(e[0]=a=>o.name=a),class:"font-mini",type:"text",id:"name",name:"name",placeholder:"姓名（必填）",autocomplete:"off",required:""},null,512),[[N,o.name]]),R(d("input",{"onUpdate:modelValue":e[1]||(e[1]=a=>o.email=a),class:"font-mini",type:"text",id:"email",name:"email",placeholder:"電郵（必填）",autocomplete:"off",required:""},null,512),[[N,o.email]]),R(d("textarea",{"onUpdate:modelValue":e[2]||(e[2]=a=>o.content=a),class:"font-mini",placeholder:"內容（必填）",name:"message",id:"message"},null,512),[[N,o.content]]),st,d("div",at,[d("button",{onClick:e[3]||(e[3]=G((...a)=>r.sendForm&&r.sendForm(...a),["prevent"]))},"提交"),d("button",{onClick:e[4]||(e[4]=G((...a)=>r.resetForm&&r.resetForm(...a),["prevent"]))},"重置")])],512)])]),d("div",lt,[d("div",ct,[T(g,{"api-key":"AIzaSyBgiaMIsBDwdjUXYZZkvuLlAtrBmBaHRtY",style:{width:"100%",height:"100%"},center:o.center,zoom:17},{default:U(()=>[T(f,{options:{position:o.center}},null,8,["options"])]),_:1},8,["center"])]),dt])])])])],64)}const ht=pe(Ve,[["render",ut],["__scopeId","data-v-6ce83501"]]);export{ht as default};