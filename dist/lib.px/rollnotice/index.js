/*! vue-ydui v0.5.8 by YDCSS (c) 2017 Licensed MIT */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.ydui=e():t.ydui=e()}(this,function(){return function(t){function e(i){if(n[i])return n[i].exports;var r=n[i]={exports:{},id:i,loaded:!1};return t[i].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var n={};return e.m=t,e.c=n,e.p="/dist/",e(0)}({0:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.RollNoticeItem=e.RollNotice=void 0;var r=n(72),o=i(r),s=n(71),a=i(s);e.RollNotice=o.default,e.RollNoticeItem=a.default},1:function(t,e){t.exports=function(t,e,n,i){var r,o=t=t||{},s=typeof t.default;"object"!==s&&"function"!==s||(r=t,o=t.default);var a="function"==typeof o?o.options:o;if(e&&(a.render=e.render,a.staticRenderFns=e.staticRenderFns),n&&(a._scopeId=n),i){var l=a.computed||(a.computed={});Object.keys(i).forEach(function(t){var e=i[t];l[t]=function(){return e}})}return{esModule:r,exports:o,options:a}}},2:function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var i={},r=0;r<this.length;r++){var o=this[r][0];"number"==typeof o&&(i[o]=!0)}for(r=0;r<e.length;r++){var s=e[r];"number"==typeof s[0]&&i[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},3:function(t,e,n){function i(t){for(var e=0;e<t.length;e++){var n=t[e],i=c[n.id];if(i){i.refs++;for(var r=0;r<i.parts.length;r++)i.parts[r](n.parts[r]);for(;r<n.parts.length;r++)i.parts.push(o(n.parts[r]));i.parts.length>n.parts.length&&(i.parts.length=n.parts.length)}else{for(var s=[],r=0;r<n.parts.length;r++)s.push(o(n.parts[r]));c[n.id]={id:n.id,refs:1,parts:s}}}}function r(){var t=document.createElement("style");return t.type="text/css",d.appendChild(t),t}function o(t){var e,n,i=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(i){if(h)return m;i.parentNode.removeChild(i)}if(v){var o=p++;i=f||(f=r()),e=s.bind(null,i,o,!1),n=s.bind(null,i,o,!0)}else i=r(),e=a.bind(null,i),n=function(){i.parentNode.removeChild(i)};return e(t),function(i){if(i){if(i.css===t.css&&i.media===t.media&&i.sourceMap===t.sourceMap)return;e(t=i)}else n()}}function s(t,e,n,i){var r=n?"":i.css;if(t.styleSheet)t.styleSheet.cssText=x(e,r);else{var o=document.createTextNode(r),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(o,s[e]):t.appendChild(o)}}function a(t,e){var n=e.css,i=e.media,r=e.sourceMap;if(i&&t.setAttribute("media",i),r&&(n+="\n/*# sourceURL="+r.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var l="undefined"!=typeof document,u=n(4),c={},d=l&&(document.head||document.getElementsByTagName("head")[0]),f=null,p=0,h=!1,m=function(){},v="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,n){h=n;var r=u(t,e);return i(r),function(e){for(var n=[],o=0;o<r.length;o++){var s=r[o],a=c[s.id];a.refs--,n.push(a)}e?(r=u(t,e),i(r)):r=[];for(var o=0;o<n.length;o++){var a=n[o];if(0===a.refs){for(var l=0;l<a.parts.length;l++)a.parts[l]();delete c[a.id]}}}};var x=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},4:function(t,e){t.exports=function(t,e){for(var n=[],i={},r=0;r<e.length;r++){var o=e[r],s=o[0],a=o[1],l=o[2],u=o[3],c={id:t+":"+r,css:a,media:l,sourceMap:u};i[s]?i[s].parts.push(c):n.push(i[s]={id:s,parts:[c]})}return n}},36:function(t,e,n){e=t.exports=n(2)(),e.push([t.id,".m-rollnotice{overflow:hidden;width:100%;background-color:#fff}.rollnotice-box{height:inherit}.rollnotice-box.align-left{-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}.rollnotice-box.align-right{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}.rollnotice-box.align-center{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.rollnotice-item{height:inherit;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:inherit;-webkit-justify-content:inherit;-ms-flex-pack:inherit;justify-content:inherit}",""])},71:function(t,e,n){var i=n(1)(n(190),n(109),null,null);t.exports=i.exports},72:function(t,e,n){n(154);var i=n(1)(n(191),n(129),null,null);t.exports=i.exports},109:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"rollnotice-item"},[t._t("default")],2)},staticRenderFns:[]}},129:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"m-rollnotice",style:{height:t.height+"px"}},[n("div",{staticClass:"rollnotice-box",class:"align-"+t.align,style:t.styles},[n("div",{staticClass:"rollnotice-item",domProps:{innerHTML:t._s(t.lastItem)}}),t._v(" "),t._t("default"),t._v(" "),n("div",{staticClass:"rollnotice-item",domProps:{innerHTML:t._s(t.firtstItem)}})],2)])},staticRenderFns:[]}},154:function(t,e,n){var i=n(36);"string"==typeof i&&(i=[[t.id,i,""]]),i.locals&&(t.exports=i.locals);n(3)("36ce97d1",i,!0)},190:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"yd-rollnotice-item",mounted:function(){this.$parent.init()}}},191:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"yd-rollnotice",data:function(){return{timer:null,index:1,totalNum:0,firtstItem:"",lastItem:"",styles:{transform:0,transitionDuration:0}}},props:{height:{validator:function(t){return/^\d*$/.test(t)},default:30},speed:{validator:function(t){return/^\d*$/.test(t)},default:500},autoplay:{validator:function(t){return/^\d*$/.test(t)},default:3e3},align:{validator:function(t){return["left","center","right"].indexOf(t)>-1},default:"left"},direction:{validator:function(t){return["up","down"].indexOf(t)>-1},default:"up"}},methods:{init:function(){this.destroy(),this.items=this.$children.filter(function(t){return"yd-rollnotice-item"===t.$options.name}),this.totalNum=this.items.length,this.totalNum<=0||(this.firtstItem=this.items[0].$el.innerHTML,this.lastItem=this.items[this.totalNum-1].$el.innerHTML,this.setTranslate(0,-this.height),this.autoPlay())},autoPlay:function(){var t=this;this.timer=setInterval(function(){"up"==t.direction?(t.setTranslate(t.speed,-(++t.index*t.height)),t.index>=t.totalNum&&(t.index=0,setTimeout(function(){t.setTranslate(0,0)},t.speed))):(t.setTranslate(t.speed,-(--t.index*t.height)),t.index<=0&&(t.index=t.totalNum,setTimeout(function(){t.setTranslate(0,-t.totalNum*t.height)},t.speed)))},this.autoplay)},setTranslate:function(t,e){this.styles.transitionDuration=t+"ms",this.styles.transform="translate3d(0, "+e+"px, 0)"},destroy:function(){clearInterval(this.timer)}},destroyed:function(){this.destroy()}}}})});