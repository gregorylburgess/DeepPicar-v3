(function(){"use strict";var t={1521:function(t,e,n){var o=n(8462),r=n(3758);const a=(0,r._)("div",{class:"text-h4"},"LEAPES: DeepPicar",-1);function i(t,e,n,o,i,l){const u=(0,r.up)("q-toolbar-title"),c=(0,r.up)("q-toolbar"),s=(0,r.up)("q-header"),d=(0,r.up)("HomeView"),p=(0,r.up)("q-page"),h=(0,r.up)("q-page-container"),f=(0,r.up)("q-layout");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r.Wm)(f,{view:"hhh lpr fff",class:"rounded-borders unselectable"},{default:(0,r.w5)((()=>[(0,r.Wm)(s,{elevated:"",class:"flex-center"},{default:(0,r.w5)((()=>[(0,r.Wm)(c,null,{default:(0,r.w5)((()=>[(0,r.Wm)(u,null,{default:(0,r.w5)((()=>[a])),_:1})])),_:1})])),_:1}),(0,r.Wm)(h,null,{default:(0,r.w5)((()=>[(0,r.Wm)(p,{class:"q-my-md home-page flex-center"},{default:(0,r.w5)((()=>[(0,r.Wm)(d)])),_:1})])),_:1})])),_:1})])}const l={class:"column flex-center"};function u(t,e,n,o,a,i){const u=(0,r.up)("CameraView"),c=(0,r.up)("q-separator"),s=(0,r.up)("ControlPad"),d=(0,r.up)("DataMenu");return(0,r.wg)(),(0,r.iD)("div",l,[(0,r.Wm)(u),(0,r.Wm)(c),(0,r.Wm)(s),(0,r.Wm)(c),(0,r.Wm)(d)])}const c=["src"];function s(t,e,n,o,a,i){const l=(0,r.up)("q-btn-toggle");return(0,r.wg)(),(0,r.iD)("div",null,[t.video?((0,r.wg)(),(0,r.iD)("img",{src:t.picam,key:NaN},null,8,c)):(0,r.kq)("",!0),(0,r.Wm)(l,{modelValue:t.video,"onUpdate:modelValue":e[0]||(e[0]=e=>t.video=e),spread:"","no-caps":"","toggle-color":"primary",options:[{label:"Enable Video",value:!0},{label:"Disable Video",value:!1}]},null,8,["modelValue"])])}var d={name:"CameraView",data:function(){return{video:!0,picam:""}},created(){this.picam="http://"+window.location.hostname+":8000/stream.mjpg"}},p=n(5076),h=n(8143),f=n(2026),m=n.n(f);const w=(0,p.Z)(d,[["render",s]]);var g=w;m()(d,"components",{QBtnToggle:h.Z});const v=(0,r._)("div",{class:"text-h6"},"Use the buttons below to control the DeepPicar",-1),b=(0,r.Uk)(" Throttle: "),k={class:"row full-width justify-between"},y=(0,r._)("div",{class:"flex-break"},null,-1),_={class:"column"},x=(0,r._)("div",{class:"flex-break"},null,-1);function W(t,e,n,o,a,i){const l=(0,r.up)("q-knob"),u=(0,r.up)("q-btn");return(0,r.wg)(),(0,r.iD)(r.HY,null,[v,(0,r._)("div",null,[b,(0,r.Wm)(l,{"show-value":"",modelValue:t.throttle,"onUpdate:modelValue":e[0]||(e[0]=e=>t.throttle=e),size:"80 px"},null,8,["modelValue"])]),(0,r._)("div",k,[(0,r.Wm)(u,{color:"primary",size:"xl",padding:"10px 50px",onMousedown:e[1]||(e[1]=e=>i.actuate("left",t.throttle)),onTouchstart:e[2]||(e[2]=e=>i.actuate("left",t.throttle)),onMouseup:e[3]||(e[3]=e=>i.actuate("center",t.throttle)),onTouchend:e[4]||(e[4]=e=>i.actuate("center",t.throttle)),icon:"arrow_left"}),y,(0,r._)("div",_,[(0,r.Wm)(u,{round:"",color:"primary",size:"xl",onClick:e[5]||(e[5]=e=>i.actuate("forward",t.throttle)),icon:"north"}),(0,r.Wm)(u,{round:"",color:"primary",size:"xl",onClick:e[6]||(e[6]=e=>i.actuate("stop",t.throttle)),icon:"front_hand"}),(0,r.Wm)(u,{round:"",color:"primary",size:"xl",onClick:e[7]||(e[7]=e=>i.actuate("reverse",t.throttle)),icon:"south"})]),x,(0,r.Wm)(u,{color:"primary",size:"xl",padding:"10px 50px",onMousedown:e[8]||(e[8]=e=>i.actuate("right",t.throttle)),onTouchstart:e[9]||(e[9]=e=>i.actuate("right",t.throttle)),onMouseup:e[10]||(e[10]=e=>i.actuate("center",t.throttle)),onTouchend:e[11]||(e[11]=e=>i.actuate("center",t.throttle)),icon:"arrow_right"})])],64)}var D=n(1643),Z=n.n(D),C={name:"ControlPad",data:function(){return{throttle:50}},created:function(){document.addEventListener("keydown",this.keyDown),document.addEventListener("keyup",this.keyUp)},watch:{throttle(t){this.actuate("",t)}},methods:{actuate:function(t,e){Z().post("http://"+window.location.hostname+":8000/actuate",{params:{direction:t,speed:e}}).then((t=>this.responseData=t.data))},keyDown:function(t){console.log(t),"ArrowUp"==t.key&&this.actuate("forward"),"ArrowLeft"==t.key&&this.actuate("left"),"ArrowRight"==t.key&&this.actuate("right"),"ArrowDown"==t.key&&this.actuate("reverse")," "==t.key&&this.actuate("stop")},keyUp:function(t){"ArrowLeft"!=t.key&&"ArrowRight"!=t.key||this.actuate("center")}}},q=n(4341),V=n(5389);const Q=(0,p.Z)(C,[["render",W]]);var j=Q;m()(C,"components",{QKnob:q.Z,QBtn:V.Z});const z=(0,r._)("div",{class:"text-h6"},"Begin and stop recording",-1),O={class:"text-h6"},T=(0,r.Uk)(" Download : "),U={class:"text-h6"},P=(0,r.Uk)(" Upload: "),M=(0,r._)("div",{class:"text-h6"},"Start and stop DNN",-1);function N(t,e,n,o,a,i){const l=(0,r.up)("q-btn"),u=(0,r.up)("q-btn-group"),c=(0,r.up)("q-uploader");return(0,r.wg)(),(0,r.iD)(r.HY,null,[z,(0,r._)("div",null,[(0,r.Wm)(u,{outline:""},{default:(0,r.w5)((()=>[a.recording?((0,r.wg)(),(0,r.j4)(l,{key:1,outline:"",size:"lg",onClick:e[1]||(e[1]=t=>{i.record("finish"),a.recording=!a.recording}),label:"Finish"})):((0,r.wg)(),(0,r.j4)(l,{key:0,outline:"",size:"lg",onClick:e[0]||(e[0]=t=>{i.record("begin"),a.recording=!a.recording}),label:"Record"}))])),_:1})]),(0,r._)("div",O,[T,(0,r.Wm)(l,{size:"lg",onClick:e[2]||(e[2]=t=>i.download()),icon:"download"})]),(0,r._)("div",U,[P,(0,r.Wm)(c,{url:this.api+"upload",label:"tflite upload","send-raw":""},null,8,["url"])]),M,(0,r._)("div",null,[(0,r.Wm)(u,{outline:""},{default:(0,r.w5)((()=>[a.running?((0,r.wg)(),(0,r.j4)(l,{key:1,outline:"",size:"lg",onClick:e[4]||(e[4]=t=>{i.dnn("stop"),a.running=!a.running}),label:"Stop DNN"})):((0,r.wg)(),(0,r.j4)(l,{key:0,outline:"",size:"lg",onClick:e[3]||(e[3]=t=>{i.dnn("start"),a.running=!a.running}),label:"Start DNN"}))])),_:1})])],64)}var A={name:"DataMenu",data(){return{api:"http://"+window.location.hostname+":8000/",recording:!1,running:!1}},methods:{record:function(t){Z().post(this.api+"record",{params:{action:t}}).then((t=>this.responseData=t.data))},download:function(){window.open("http://"+window.location.hostname+":8000/out-key.csv"),window.open("http://"+window.location.hostname+":8000/out-video.avi")},dnn:function(t){Z().post(this.api+"dnn",{params:{action:t}}).then((t=>this.responseData=t.data))}}},E=n(1196),H=n(1463);const L=(0,p.Z)(A,[["render",N]]);var B=L;m()(A,"components",{QBtnGroup:E.Z,QBtn:V.Z,QUploader:H.Z});var S={name:"HomeView",components:{CameraView:g,ControlPad:j,DataMenu:B}},R=n(9866);const F=(0,p.Z)(S,[["render",u]]);var Y=F;m()(S,"components",{QSeparator:R.Z});var G={name:"app",components:{HomeView:Y}},K=n(7141),I=n(2016),J=n(4752),X=n(5882),$=n(6097),tt=n(5043);const et=(0,p.Z)(G,[["render",i]]);var nt=et;m()(G,"components",{QLayout:K.Z,QHeader:I.Z,QToolbar:J.Z,QToolbarTitle:X.Z,QPageContainer:$.Z,QPage:tt.Z});var ot=n(7023);const rt=[{path:"/",name:"home",component:Y}],at=(0,ot.p7)({history:(0,ot.r5)(),routes:rt});var it=at,lt=n(419),ut=n(4949),ct={config:{dark:"true"},plugins:{}};const st=(0,o.ri)(nt);st.use(ut.Z,ct),lt.Z.toggle(),st.use(it),st.mount("#app")}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={exports:{}};return t[o](a,a.exports,n),a.exports}n.m=t,function(){var t=[];n.O=function(e,o,r,a){if(!o){var i=1/0;for(s=0;s<t.length;s++){o=t[s][0],r=t[s][1],a=t[s][2];for(var l=!0,u=0;u<o.length;u++)(!1&a||i>=a)&&Object.keys(n.O).every((function(t){return n.O[t](o[u])}))?o.splice(u--,1):(l=!1,a<i&&(i=a));if(l){t.splice(s--,1);var c=r();void 0!==c&&(e=c)}}return e}a=a||0;for(var s=t.length;s>0&&t[s-1][2]>a;s--)t[s]=t[s-1];t[s]=[o,r,a]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,o){var r,a,i=o[0],l=o[1],u=o[2],c=0;if(i.some((function(e){return 0!==t[e]}))){for(r in l)n.o(l,r)&&(n.m[r]=l[r]);if(u)var s=u(n)}for(e&&e(o);c<i.length;c++)a=i[c],n.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return n.O(s)},o=self["webpackChunkclient"]=self["webpackChunkclient"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(1521)}));o=n.O(o)})();
//# sourceMappingURL=app.8707d08e.js.map