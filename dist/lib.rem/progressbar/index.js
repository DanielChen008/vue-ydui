/*! vue-ydui v0.5.8 by YDCSS (c) 2017 Licensed MIT */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.ydui=e():t.ydui=e()}(this,function(){return function(t){function e(n){if(r[n])return r[n].exports;var s=r[n]={exports:{},id:n,loaded:!1};return t[n].call(s.exports,s,s.exports,e),s.loaded=!0,s.exports}var r={};return e.m=t,e.c=r,e.p="/dist/",e(0)}({0:function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.ProgressBar=void 0;var s=r(67),o=n(s);e.ProgressBar=o.default},1:function(t,e){t.exports=function(t,e,r,n){var s,o=t=t||{},i=typeof t.default;"object"!==i&&"function"!==i||(s=t,o=t.default);var a="function"==typeof o?o.options:o;if(e&&(a.render=e.render,a.staticRenderFns=e.staticRenderFns),r&&(a._scopeId=r),n){var l=a.computed||(a.computed={});Object.keys(n).forEach(function(t){var e=n[t];l[t]=function(){return e}})}return{esModule:s,exports:o,options:a}}},2:function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var r=this[e];r[2]?t.push("@media "+r[2]+"{"+r[1]+"}"):t.push(r[1])}return t.join("")},t.i=function(e,r){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},s=0;s<this.length;s++){var o=this[s][0];"number"==typeof o&&(n[o]=!0)}for(s=0;s<e.length;s++){var i=e[s];"number"==typeof i[0]&&n[i[0]]||(r&&!i[2]?i[2]=r:r&&(i[2]="("+i[2]+") and ("+r+")"),t.push(i))}},t}},3:function(t,e,r){function n(t){for(var e=0;e<t.length;e++){var r=t[e],n=u[r.id];if(n){n.refs++;for(var s=0;s<n.parts.length;s++)n.parts[s](r.parts[s]);for(;s<r.parts.length;s++)n.parts.push(o(r.parts[s]));n.parts.length>r.parts.length&&(n.parts.length=r.parts.length)}else{for(var i=[],s=0;s<r.parts.length;s++)i.push(o(r.parts[s]));u[r.id]={id:r.id,refs:1,parts:i}}}}function s(){var t=document.createElement("style");return t.type="text/css",c.appendChild(t),t}function o(t){var e,r,n=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(n){if(p)return v;n.parentNode.removeChild(n)}if(g){var o=h++;n=f||(f=s()),e=i.bind(null,n,o,!1),r=i.bind(null,n,o,!0)}else n=s(),e=a.bind(null,n),r=function(){n.parentNode.removeChild(n)};return e(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;e(t=n)}else r()}}function i(t,e,r,n){var s=r?"":n.css;if(t.styleSheet)t.styleSheet.cssText=m(e,s);else{var o=document.createTextNode(s),i=t.childNodes;i[e]&&t.removeChild(i[e]),i.length?t.insertBefore(o,i[e]):t.appendChild(o)}}function a(t,e){var r=e.css,n=e.media,s=e.sourceMap;if(n&&t.setAttribute("media",n),s&&(r+="\n/*# sourceURL="+s.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var l="undefined"!=typeof document,d=r(4),u={},c=l&&(document.head||document.getElementsByTagName("head")[0]),f=null,h=0,p=!1,v=function(){},g="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,r){p=r;var s=d(t,e);return n(s),function(e){for(var r=[],o=0;o<s.length;o++){var i=s[o],a=u[i.id];a.refs--,r.push(a)}e?(s=d(t,e),n(s)):s=[];for(var o=0;o<r.length;o++){var a=r[o];if(0===a.refs){for(var l=0;l<a.parts.length;l++)a.parts[l]();delete u[a.id]}}}};var m=function(){var t=[];return function(e,r){return t[e]=r,t.filter(Boolean).join("\n")}}()},4:function(t,e){t.exports=function(t,e){for(var r=[],n={},s=0;s<e.length;s++){var o=e[s],i=o[0],a=o[1],l=o[2],d=o[3],u={id:t+":"+s,css:a,media:l,sourceMap:d};n[i]?n[i].parts.push(u):r.push(n[i]={id:i,parts:[u]})}return r}},5:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){var t=function(t){t.preventDefault(),t.stopPropagation()},e=!1;return{lock:function(){e||(e=!0,document.addEventListener("touchmove",t))},unlock:function(){e=!1,document.removeEventListener("touchmove",t)}}}(),n=function(t){var e=/^#([a-fA-F0-9]){3}(([a-fA-F0-9]){3})?$/,r=/^[rR][gG][bB][aA]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){3}\s*(\.|\d+\.)?\d+\s*\)$/,n=/^[rR][gG][bB]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){2}(25[0-5]|2[0-4]\d|1?\d{1,2})\s*\)$/;return e.test(t)||r.test(t)||n.test(t)},s=function(t){for(var e=t;e&&"HTML"!==e.tagName&&"BODY"!==e.tagName&&1===e.nodeType;){var r=document.defaultView.getComputedStyle(e).overflowY;if("scroll"===r||"auto"===r)return e;e=e.parentNode}return window},o=function(t,e){var r=t==window?document.body.offsetHeight:t.offsetHeight,n=t===window?0:t.getBoundingClientRect().top,s=e.getBoundingClientRect().top-n,o=s+e.offsetHeight;return s>=0&&s<r||o>0&&o<=r},i=function(t,e){return e=e||"",0!=e.replace(/\s/g,"").length&&new RegExp(" "+e+" ").test(" "+t.className+" ")},a=function(t,e){i(t,e)||(t.className=""==t.className?e:t.className+" "+e)},l=function(t,e){if(i(t,e)){for(var r=" "+t.className.replace(/[\t\r\n]/g,"")+" ";r.indexOf(" "+e+" ")>=0;)r=r.replace(" "+e+" "," ");t.className=r.replace(/^\s+|\s+$/g,"")}};e.pageScroll=r,e.isColor=n,e.getScrollview=s,e.checkInview=o,e.addClass=a,e.removeClass=l},24:function(t,e,r){e=t.exports=r(2)(),e.push([t.id,".m-progressbar{position:relative;color:#333;width:100%;height:100%}.m-progressbar>svg{width:100%}.m-progressbar>svg>path{-webkit-transition:all 1s linear;transition:all 1s linear}.progressbar-content{position:absolute;top:50%;left:50%;font-size:.3rem;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}",""])},67:function(t,e,r){r(139);var n=r(1)(r(183),r(103),null,null);t.exports=n.exports},103:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"m-progressbar"},["line"!=t.type?r("div",{staticClass:"progressbar-content"},[t._t("default")],2):t._e(),t._v(" "),r("svg",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],attrs:{viewBox:t.viewBox,preserveAspectRatio:"line"==t.type?"none":""}},[r("path",{attrs:{"fill-opacity":t.fillColor?1:0,d:t.getPathString,fill:t.fillColor,stroke:t.strokeColor,"stroke-width":t.trailWidth}}),t._v(" "),r("path",{ref:"trailPath",style:{strokeDasharray:t.stroke.dasharray,strokeDashoffset:t.stroke.dashoffset},attrs:{"fill-opacity":"0",d:t.getPathString,stroke:t.trailColor,"stroke-width":t.strokeWidth?t.strokeWidth:t.trailWidth}})])])},staticRenderFns:[]}},139:function(t,e,r){var n=r(24);"string"==typeof n&&(n=[[t.id,n,""]]),n.locals&&(t.exports=n.locals);r(3)("e1c8536c",n,!0)},183:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(5);e.default={name:"yd-progressbar",data:function(){return{viewBox:"0 0 100 100",show:!1,stroke:{dasharray:"",dashoffset:""}}},props:{type:{validator:function(t){return["circle","line"].indexOf(t)>-1},default:"circle"},fillColor:{validator:function(t){return!t||(0,n.isColor)(t)}},strokeWidth:{validator:function(t){return/^\d*$/.test(t)},default:0},strokeColor:{validator:function(t){return!t||(0,n.isColor)(t)},default:"#E5E5E5"},trailWidth:{validator:function(t){return/^\d*$/.test(t)},default:0,require:!0},trailColor:{validator:function(t){return!t||(0,n.isColor)(t)},default:"#646464"},progress:{validator:function(t){return/^(0(.\d+)?|1(\.0+)?)$/.test(t)},default:0}},methods:{init:function(){var t=this,e=this.length=this.$refs.trailPath.getTotalLength();this.stroke.dashoffset=e,this.stroke.dasharray=e+","+e,this.scrollview=(0,n.getScrollview)(this.$el),this.show=!0,"line"==this.type&&(this.viewBox="0 0 100 "+(this.strokeWidth?this.strokeWidth:this.trailWidth)),this.$nextTick(function(){t.scrollHandler()}),this.bindEvent()},scrollHandler:function(){(0,n.checkInview)(this.scrollview,this.$el)&&(this.stroke.dashoffset=this.length-this.progress*this.length)},bindEvent:function(){this.scrollview.addEventListener("scroll",this.scrollHandler),window.addEventListener("resize",this.scrollHandler)},unbindEvent:function(){this.scrollview.removeEventListener("scroll",this.scrollHandler),window.removeEventListener("resize",this.scrollHandler)}},watch:{progress:function(t){this.stroke.dashoffset=this.length-t*this.length}},computed:{getPathString:function(){if("line"==this.type)return"M 0,{R} L 100,{R}".replace(/\{R\}/g,this.trailWidth/2);var t=50-(this.strokeWidth?this.strokeWidth:this.trailWidth)/2;return"M 50,50 m 0,-{R} a {R},{R} 0 1 1 0,{2R} a {R},{R} 0 1 1 0,-{2R}".replace(/\{R\}/g,t).replace(/\{2R\}/g,2*t)}},mounted:function(){this.init()},destoryed:function(){this.unbindEvent()}}}})});