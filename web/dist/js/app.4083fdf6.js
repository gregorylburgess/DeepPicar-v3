(function(){"use strict";var t={1443:function(t,e,n){var o=n(8462),r=n(3758);const a=(0,r._)("div",{class:"text-h4"},"LEAPES: DeepPicar",-1);function i(t,e,n,o,i,l){const u=(0,r.up)("q-toolbar-title"),c=(0,r.up)("q-toolbar"),s=(0,r.up)("q-header"),d=(0,r.up)("HomeView"),p=(0,r.up)("q-page"),h=(0,r.up)("q-page-container"),m=(0,r.up)("q-layout");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r.Wm)(m,{view:"hhh lpr fff",class:"rounded-borders unselectable"},{default:(0,r.w5)((()=>[(0,r.Wm)(s,{elevated:"",class:"flex-center"},{default:(0,r.w5)((()=>[(0,r.Wm)(c,null,{default:(0,r.w5)((()=>[(0,r.Wm)(u,null,{default:(0,r.w5)((()=>[a])),_:1})])),_:1})])),_:1}),(0,r.Wm)(h,null,{default:(0,r.w5)((()=>[(0,r.Wm)(p,{class:"q-my-md home-page flex-center"},{default:(0,r.w5)((()=>[(0,r.Wm)(d)])),_:1})])),_:1})])),_:1})])}const l={class:"column flex-center"};function u(t,e,n,o,a,i){const u=(0,r.up)("CameraView"),c=(0,r.up)("q-separator"),s=(0,r.up)("ControlPad"),d=(0,r.up)("DataMenu");return(0,r.wg)(),(0,r.iD)("div",l,[(0,r.Wm)(u),(0,r.Wm)(c),(0,r.Wm)(s),(0,r.Wm)(c),(0,r.Wm)(d)])}const c=["src"];function s(t,e,n,o,a,i){const l=(0,r.up)("q-btn-toggle");return(0,r.wg)(),(0,r.iD)("div",null,[t.video?((0,r.wg)(),(0,r.iD)("img",{src:t.picam,key:NaN},null,8,c)):(0,r.kq)("",!0),(0,r.Wm)(l,{modelValue:t.video,"onUpdate:modelValue":e[0]||(e[0]=e=>t.video=e),spread:"","no-caps":"","toggle-color":"primary",onClick:e[1]||(e[1]=t=>i.streaming()),options:[{label:"Enable Video",value:!0},{label:"Disable Video",value:!1}]},null,8,["modelValue"])])}var d=n(1643),p=n.n(d),h={name:"CameraView",data:function(){return{video:!0,picam:""}},created(){this.picam="http://"+window.location.hostname+":8001/stream.mjpg"},methods:{streaming:function(){p().post(this.picam,{params:{streaming:this.video}}).then((t=>this.responseData=t.data))}}},m=n(5076),f=n(8143),w=n(2026),g=n.n(w);const v=(0,m.Z)(h,[["render",s]]);var b=v;g()(h,"components",{QBtnToggle:f.Z});const y={class:"text-h6"},k=(0,r.Uk)("Control method: "),_=(0,r._)("div",{class:"text-h6"},"Use the buttons below to control the DeepPicar",-1),x=(0,r.Uk)(" Throttle: "),W={class:"row full-width justify-between"},D=(0,r._)("div",{class:"flex-break"},null,-1),Z={class:"column"},C=(0,r._)("div",{class:"flex-break"},null,-1);function V(t,e,n,o,a,i){const l=(0,r.up)("q-btn-toggle"),u=(0,r.up)("q-knob"),c=(0,r.up)("q-btn");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("div",y,[k,(0,r.Wm)(l,{modelValue:t.inputType,"onUpdate:modelValue":e[0]||(e[0]=e=>t.inputType=e),spread:"","no-caps":"","toggle-color":"primary",onClick:e[1]||(e[1]=t=>i.inputSwitch()),options:[{label:"Keyboard",value:0},{label:"Gamepad",value:1},{label:"Web",value:2}]},null,8,["modelValue"])]),_,(0,r._)("div",null,[x,(0,r.Wm)(u,{"show-value":"",modelValue:t.throttle,"onUpdate:modelValue":e[2]||(e[2]=e=>t.throttle=e),size:"80 px"},null,8,["modelValue"])]),(0,r._)("div",W,[(0,r.Wm)(c,{color:"primary",size:"xl",padding:"10px 50px",onMousedown:e[3]||(e[3]=e=>i.actuate("left",t.throttle)),onTouchstart:e[4]||(e[4]=e=>i.actuate("left",t.throttle)),onMouseup:e[5]||(e[5]=e=>i.actuate("center",t.throttle)),onTouchend:e[6]||(e[6]=e=>i.actuate("center",t.throttle)),icon:"arrow_left"}),D,(0,r._)("div",Z,[(0,r.Wm)(c,{round:"",color:"primary",size:"xl",onClick:e[7]||(e[7]=e=>i.actuate("forward",t.throttle)),icon:"north"}),(0,r.Wm)(c,{round:"",color:"primary",size:"xl",onClick:e[8]||(e[8]=e=>i.actuate("stop",t.throttle)),icon:"front_hand"}),(0,r.Wm)(c,{round:"",color:"primary",size:"xl",onClick:e[9]||(e[9]=e=>i.actuate("reverse",t.throttle)),icon:"south"})]),C,(0,r.Wm)(c,{color:"primary",size:"xl",padding:"10px 50px",onMousedown:e[10]||(e[10]=e=>i.actuate("right",t.throttle)),onTouchstart:e[11]||(e[11]=e=>i.actuate("right",t.throttle)),onMouseup:e[12]||(e[12]=e=>i.actuate("center",t.throttle)),onTouchend:e[13]||(e[13]=e=>i.actuate("center",t.throttle)),icon:"arrow_right"})])],64)}var q={name:"ControlPad",data:function(){return{throttle:50,inputType:2}},created:function(){document.addEventListener("keydown",this.keyDown),document.addEventListener("keyup",this.keyUp)},watch:{throttle(t){this.actuate("",t)}},methods:{actuate:function(t,e){p().post("http://"+window.location.hostname+":8000/actuate",{params:{direction:t,speed:e}}).then((t=>this.responseData=t.data))},inputSwitch:function(){p().post("http://"+window.location.hostname+":8001/input_switch",{params:{input_type:this.inputType}}).then((t=>this.responseData=t.data))},keyDown:function(t){console.log(t),"ArrowUp"==t.key&&this.actuate("forward",this.throttle),"ArrowLeft"==t.key&&this.actuate("left",this.throttle),"ArrowRight"==t.key&&this.actuate("right",this.throttle),"ArrowDown"==t.key&&this.actuate("reverse",this.throttle)," "==t.key&&this.actuate("stop",this.throttle)},keyUp:function(t){"ArrowLeft"!=t.key&&"ArrowRight"!=t.key||this.actuate("center",this.throttle)}}},T=n(4341),A=n(5389);const Q=(0,m.Z)(q,[["render",V]]);var U=Q;g()(q,"components",{QBtnToggle:f.Z,QKnob:T.Z,QBtn:A.Z});const j=(0,r._)("div",{class:"text-h6"},"Begin and stop recording",-1),z={class:"text-h6"},O=(0,r.Uk)(" Download : "),P={class:"text-h6"},M=(0,r.Uk)(" Upload: "),N=(0,r._)("div",{class:"text-h6"},"Start and stop DNN",-1);function S(t,e,n,o,a,i){const l=(0,r.up)("q-btn"),u=(0,r.up)("q-btn-group"),c=(0,r.up)("q-uploader");return(0,r.wg)(),(0,r.iD)(r.HY,null,[j,(0,r._)("div",null,[(0,r.Wm)(u,{outline:""},{default:(0,r.w5)((()=>[a.recording?((0,r.wg)(),(0,r.j4)(l,{key:1,outline:"",size:"lg",onClick:e[1]||(e[1]=t=>{i.record("finish"),a.recording=!a.recording}),label:"Finish"})):((0,r.wg)(),(0,r.j4)(l,{key:0,outline:"",size:"lg",onClick:e[0]||(e[0]=t=>{i.record("begin"),a.recording=!a.recording}),label:"Record"}))])),_:1})]),(0,r._)("div",z,[O,(0,r.Wm)(l,{size:"lg",onClick:e[2]||(e[2]=t=>i.download()),icon:"download"})]),(0,r._)("div",P,[M,(0,r.Wm)(c,{url:this.mainApi+"upload",label:"tflite upload","send-raw":""},null,8,["url"])]),N,(0,r._)("div",null,[(0,r.Wm)(u,{outline:""},{default:(0,r.w5)((()=>[a.running?((0,r.wg)(),(0,r.j4)(l,{key:1,outline:"",size:"lg",onClick:e[4]||(e[4]=t=>{i.dnn("stop"),a.running=!a.running}),label:"Stop DNN"})):((0,r.wg)(),(0,r.j4)(l,{key:0,outline:"",size:"lg",onClick:e[3]||(e[3]=t=>{i.dnn("start"),a.running=!a.running}),label:"Start DNN"}))])),_:1})])],64)}var B={name:"DataMenu",data(){return{inputApi:"http://"+window.location.hostname+":8000/",mainApi:"http://"+window.location.hostname+":8001/",recording:!1,running:!1}},methods:{record:function(t){p().post(this.inputApi+"record",{params:{action:t}}).then((t=>this.responseData=t.data))},download:function(){window.open(this.mainApi+"out-key.csv"),window.open(this.mainApi+"out-video.avi")},dnn:function(t){p().post(this.inputApi+"dnn",{params:{action:t}}).then((t=>this.responseData=t.data))}}},E=n(1196),H=n(1463);const L=(0,m.Z)(B,[["render",S]]);var R=L;g()(B,"components",{QBtnGroup:E.Z,QBtn:A.Z,QUploader:H.Z});var F={name:"HomeView",components:{CameraView:b,ControlPad:U,DataMenu:R}},G=n(9866);const K=(0,m.Z)(F,[["render",u]]);var Y=K;g()(F,"components",{QSeparator:G.Z});var I={name:"app",components:{HomeView:Y}},J=n(7141),X=n(2016),$=n(4752),tt=n(5882),et=n(6097),nt=n(5043);const ot=(0,m.Z)(I,[["render",i]]);var rt=ot;g()(I,"components",{QLayout:J.Z,QHeader:X.Z,QToolbar:$.Z,QToolbarTitle:tt.Z,QPageContainer:et.Z,QPage:nt.Z});var at=n(7023);const it=[{path:"/",name:"home",component:Y}],lt=(0,at.p7)({history:(0,at.r5)(),routes:it});var ut=lt,ct=n(419),st=n(4949),dt={config:{dark:"true"},plugins:{}};const pt=(0,o.ri)(rt);pt.use(st.Z,dt),ct.Z.toggle(),pt.use(ut),pt.mount("#app")}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={exports:{}};return t[o](a,a.exports,n),a.exports}n.m=t,function(){var t=[];n.O=function(e,o,r,a){if(!o){var i=1/0;for(s=0;s<t.length;s++){o=t[s][0],r=t[s][1],a=t[s][2];for(var l=!0,u=0;u<o.length;u++)(!1&a||i>=a)&&Object.keys(n.O).every((function(t){return n.O[t](o[u])}))?o.splice(u--,1):(l=!1,a<i&&(i=a));if(l){t.splice(s--,1);var c=r();void 0!==c&&(e=c)}}return e}a=a||0;for(var s=t.length;s>0&&t[s-1][2]>a;s--)t[s]=t[s-1];t[s]=[o,r,a]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,o){var r,a,i=o[0],l=o[1],u=o[2],c=0;if(i.some((function(e){return 0!==t[e]}))){for(r in l)n.o(l,r)&&(n.m[r]=l[r]);if(u)var s=u(n)}for(e&&e(o);c<i.length;c++)a=i[c],n.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return n.O(s)},o=self["webpackChunkclient"]=self["webpackChunkclient"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(1443)}));o=n.O(o)})();
//# sourceMappingURL=app.4083fdf6.js.map