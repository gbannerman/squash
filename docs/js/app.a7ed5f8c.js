(function(t){function e(e){for(var r,c,a=e[0],s=e[1],u=e[2],f=0,d=[];f<a.length;f++)c=a[f],i[c]&&d.push(i[c][0]),i[c]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);l&&l(e);while(d.length)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,a=1;a<n.length;a++){var s=n[a];0!==i[s]&&(r=!1)}r&&(o.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},i={app:0},o=[];function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],s=a.push.bind(a);a.push=e,a=a.slice();for(var u=0;u<a.length;u++)e(a[u]);var l=s;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},2652:function(t,e,n){},"3ef6":function(t,e,n){"use strict";var r=n("2652"),i=n.n(r);i.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Timer",{attrs:{id:"timer"}}),n("div",{staticClass:"scores"},[n("Score",{attrs:{count:t.leftScore,id:"left"},on:{increment:function(e){t.leftScore++}}}),n("Score",{attrs:{count:t.rightScore,id:"right"},on:{increment:function(e){t.rightScore++}}})],1),n("button",{staticClass:"ui-component",attrs:{id:"reset"},on:{click:t.resetScores}},[n("icon-base",{attrs:{"icon-name":"reset"}},[n("icon-reset")],1)],1)],1)},o=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"score-box",on:{click:function(e){return t.$emit("increment")}}},[n("div",{staticClass:"score"},[t._v("\n    "+t._s(t.count)+"\n  ")])])},a=[],s=(n("c5f6"),{name:"Score",props:{count:Number}}),u=s,l=(n("f8fa"),n("2877")),f=Object(l["a"])(u,c,a,!1,null,"6df54ad9",null),d=f.exports,p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"timer-container"},[n("div",{staticClass:"timer ui-component",on:{click:t.startTimer}},[t.editing?[n("form",{on:{submit:function(e){return e.preventDefault(),t.handleSubmit(e)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.timeValue,expression:"timeValue"}],ref:"timeInput",attrs:{type:"number",minlength:"1",maxlength:"4"},domProps:{value:t.timeValue},on:{input:function(e){e.target.composing||(t.timeValue=e.target.value)}}})])]:[n("VueCountdown",{ref:"timer",attrs:{time:1e3*t.startTime,"auto-start":!1,transform:t.transform},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n          "+t._s(e.minutes)+":"+t._s(e.seconds)+"\n        ")]}}],null,!1,893125680)})]],2),n("button",{staticClass:"ui-component",class:{editing:t.editing},attrs:{id:"edit"},on:{click:t.toggleEditing}},[n("icon-base",{attrs:{"icon-name":"pencil",height:"18",width:"18"}},[t.editing?t._e():n("icon-pencil"),t.editing?n("icon-tick"):t._e()],1)],1)])},m=[],h=n("768b"),g=(n("ffc1"),n("ac6a"),n("407d")),v=n.n(g),b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:t.width,height:t.height,viewBox:"0 0 24 24","aria-labelledby":t.iconName,role:"presentation"}},[n("title",{attrs:{id:t.iconName,lang:"en"}},[t._v(t._s(t.iconName)+" icon")]),n("g",{attrs:{fill:t.iconColor}},[t._t("default")],2)])},_=[],w={props:{iconName:{type:String,default:"box"},width:{type:[Number,String],default:24},height:{type:[Number,String],default:24},iconColor:{type:String,default:"currentColor"}}},S=w,C=(n("e056"),Object(l["a"])(S,b,_,!1,null,"7a2c6156",null)),y=C.exports,x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("path",{attrs:{d:"M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z"}})},j=[],O={},L=Object(l["a"])(O,x,j,!1,null,null,null),k=L.exports,T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("path",{attrs:{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}})},$=[],E={},N=Object(l["a"])(E,T,$,!1,null,null,null),V=N.exports,M={name:"Timer",components:{VueCountdown:v.a,IconBase:y,IconPencil:k,IconTick:V},data:function(){return{startTime:300,counting:!1,editing:!1,timeValue:""}},methods:{startTimer:function(){this.editing||(this.counting?(this.$refs.timer.abort(),this.counting=!1):(this.$refs.timer.start(),this.counting=!0))},toggleEditing:function(){var t=this;this.editing?this.handleSubmit():(this.editing=!0,this.$nextTick(function(){t.$refs.timeInput.focus()}))},transform:function(t){return Object.entries(t).forEach(function(e){var n=Object(h["a"])(e,2),r=n[0],i=n[1],o=i<10?"0".concat(i):i;t[r]=o}),t},handleSubmit:function(){var t=this.timeValue;t&&(t.length>2||(this.startTime=parseInt(60*t,10)),this.editing=!1)}}},I=M,P=(n("3ef6"),Object(l["a"])(I,p,m,!1,null,"9431bba2",null)),B=P.exports,A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("path",{attrs:{d:"M12,4C14.1,4 16.1,4.8 17.6,6.3C20.7,9.4 20.7,14.5 17.6,17.6C15.8,19.5 13.3,20.2 10.9,19.9L11.4,17.9C13.1,18.1 14.9,17.5 16.2,16.2C18.5,13.9 18.5,10.1 16.2,7.7C15.1,6.6 13.5,6 12,6V10.6L7,5.6L12,0.6V4M6.3,17.6C3.7,15 3.3,11 5.1,7.9L6.6,9.4C5.5,11.6 5.9,14.4 7.8,16.2C8.3,16.7 8.9,17.1 9.6,17.4L9,19.4C8,19 7.1,18.4 6.3,17.6Z"}})},Z=[],F={},J=Object(l["a"])(F,A,Z,!1,null,null,null),q=J.exports,D={name:"app",components:{Timer:B,Score:d,IconBase:y,IconReset:q},data:function(){return{leftScore:0,rightScore:0}},methods:{resetScores:function(){this.leftScore=0,this.rightScore=0}}},H=D,R=(n("5c0b"),Object(l["a"])(H,i,o,!1,null,null,null)),z=R.exports,G=n("2f62");r["a"].use(G["a"]);var K=new G["a"].Store({state:{},mutations:{},actions:{}}),Q=n("9483");Object(Q["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}}),r["a"].config.productionTip=!1,new r["a"]({store:K,render:function(t){return t(z)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var r=n("5e27"),i=n.n(r);i.a},"5e27":function(t,e,n){},"988d":function(t,e,n){},e056:function(t,e,n){"use strict";var r=n("f526"),i=n.n(r);i.a},f526:function(t,e,n){},f8fa:function(t,e,n){"use strict";var r=n("988d"),i=n.n(r);i.a}});
//# sourceMappingURL=app.a7ed5f8c.js.map