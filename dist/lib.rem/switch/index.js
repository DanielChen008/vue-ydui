/*! vue-ydui v0.5.8 by YDCSS (c) 2017 Licensed MIT */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.ydui=t():e.ydui=t()}(this,function(){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var r={};return t.m=e,t.c=r,t.p="/dist/",t(0)}({0:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Switch=void 0;var o=r(78),s=n(o);t.Switch=s.default},1:function(e,t){e.exports=function(e,t,r,n){var o,s=e=e||{},i=typeof e.default;"object"!==i&&"function"!==i||(o=e,s=e.default);var a="function"==typeof s?s.options:s;if(t&&(a.render=t.render,a.staticRenderFns=t.staticRenderFns),r&&(a._scopeId=r),n){var c=a.computed||(a.computed={});Object.keys(n).forEach(function(e){var t=n[e];c[e]=function(){return t}})}return{esModule:o,exports:s,options:a}}},2:function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var r=this[t];r[2]?e.push("@media "+r[2]+"{"+r[1]+"}"):e.push(r[1])}return e.join("")},e.i=function(t,r){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},o=0;o<this.length;o++){var s=this[o][0];"number"==typeof s&&(n[s]=!0)}for(o=0;o<t.length;o++){var i=t[o];"number"==typeof i[0]&&n[i[0]]||(r&&!i[2]?i[2]=r:r&&(i[2]="("+i[2]+") and ("+r+")"),e.push(i))}},e}},3:function(e,t,r){function n(e){for(var t=0;t<e.length;t++){var r=e[t],n=u[r.id];if(n){n.refs++;for(var o=0;o<n.parts.length;o++)n.parts[o](r.parts[o]);for(;o<r.parts.length;o++)n.parts.push(s(r.parts[o]));n.parts.length>r.parts.length&&(n.parts.length=r.parts.length)}else{for(var i=[],o=0;o<r.parts.length;o++)i.push(s(r.parts[o]));u[r.id]={id:r.id,refs:1,parts:i}}}}function o(){var e=document.createElement("style");return e.type="text/css",f.appendChild(e),e}function s(e){var t,r,n=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(n){if(h)return m;n.parentNode.removeChild(n)}if(v){var s=p++;n=l||(l=o()),t=i.bind(null,n,s,!1),r=i.bind(null,n,s,!0)}else n=o(),t=a.bind(null,n),r=function(){n.parentNode.removeChild(n)};return t(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t(e=n)}else r()}}function i(e,t,r,n){var o=r?"":n.css;if(e.styleSheet)e.styleSheet.cssText=b(t,o);else{var s=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(s,i[t]):e.appendChild(s)}}function a(e,t){var r=t.css,n=t.media,o=t.sourceMap;if(n&&e.setAttribute("media",n),o&&(r+="\n/*# sourceURL="+o.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var c="undefined"!=typeof document,d=r(4),u={},f=c&&(document.head||document.getElementsByTagName("head")[0]),l=null,p=0,h=!1,m=function(){},v="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,r){h=r;var o=d(e,t);return n(o),function(t){for(var r=[],s=0;s<o.length;s++){var i=o[s],a=u[i.id];a.refs--,r.push(a)}t?(o=d(e,t),n(o)):o=[];for(var s=0;s<r.length;s++){var a=r[s];if(0===a.refs){for(var c=0;c<a.parts.length;c++)a.parts[c]();delete u[a.id]}}}};var b=function(){var e=[];return function(t,r){return e[t]=r,e.filter(Boolean).join("\n")}}()},4:function(e,t){e.exports=function(e,t){for(var r=[],n={},o=0;o<t.length;o++){var s=t[o],i=s[0],a=s[1],c=s[2],d=s[3],u={id:e+":"+o,css:a,media:c,sourceMap:d};n[i]?n[i].parts.push(u):r.push(n[i]={id:i,parts:[u]})}return r}},31:function(e,t,r){t=e.exports=r(2)(),t.push([e.id,'.m-switch{position:relative;display:block;width:52px;height:32px;left:0;border:1px solid #dfdfdf;border-radius:16px;background-color:#dfdfdf;-webkit-appearance:none;-moz-appearance:none}.m-switch:after,.m-switch:before{content:"";position:absolute;top:0;left:0;height:30px;border-radius:15px;-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s}.m-switch:before{width:50px;background-color:#fdfdfd}.m-switch:after{width:30px;background-color:#fff;box-shadow:0 1px 3px rgba(0,0,0,.4)}.m-switch:checked{border-color:#4cd864;background-color:#4cd864}.m-switch:checked:before{-webkit-transform:scale(0);transform:scale(0)}.m-switch:checked:after{-webkit-transform:translateX(20px);transform:translateX(20px)}',""])},78:function(e,t,r){r(146);var n=r(1)(r(194),r(118),null,null);e.exports=n.exports},118:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("input",{directives:[{name:"model",rawName:"v-model",value:e.checked,expression:"checked"}],staticClass:"m-switch",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.checked)?e._i(e.checked,null)>-1:e.checked},on:{__c:function(t){var r=e.checked,n=t.target,o=!!n.checked;if(Array.isArray(r)){var s=null,i=e._i(r,s);o?i<0&&(e.checked=r.concat(s)):i>-1&&(e.checked=r.slice(0,i).concat(r.slice(i+1)))}else e.checked=o}}})},staticRenderFns:[]}},146:function(e,t,r){var n=r(31);"string"==typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals);r(3)("7c03577b",n,!0)},194:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"yd-switch",data:function(){return{checked:!1}},props:{value:Boolean},watch:{checked:function(e){this.$emit("input",e)}},mounted:function(){this.checked=this.value}}}})});