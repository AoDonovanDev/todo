(()=>{"use strict";var t={160:(t,e,n)=>{n.d(e,{Z:()=>u});var r=n(81),a=n.n(r),o=n(645),i=n.n(o)()(a());i.push([t.id,"@tailwind base;\n@tailwind components;\n@tailwind utilities;\n.main{\n    display: flex;\n    background-color: hsl(var(--nc));\n    flex: 1;\n}\n.sidebar{\n    display: flex;\n}\n.hero{\n    display: flex;\n    flex-direction: column;\n    /* justify-content: flex-end; */\n}\n.addNew{\n    height: 100%;\n    width: 100%;\n}\n#newProj{\n    display: flex;\n    flex-direction: column;\n}\n#sdSpacer{\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n}\n.inputSpacer{\n    margin-right: 6px;\n}\n.newInput{\n    display: flex;\n    justify-content: space-around;\n    gap:8px;\n}\n#taskArea{\n    display: flex;\n    flex-direction: column;\n    padding: 2%;\n\n}\n.clipboard{\n    display: flex;\n    flex-direction: column;\n    flex:1;\n    justify-content: space-between;\n}\n.boardWrap{\n    display: flex;\n    flex-direction: column;\n    flex: 1;\n    align-items: center;\n}\n.taskLabel{\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n    justify-content: left;\n    text-align: left;\n    align-content: start;\n    gap: 8px;\n    padding-bottom: 6%;\n}\n.fadey{\n    opacity: 0;\n    transition: opacity 2s ease-out;\n}\n.taskComplete{\n    text-decoration: line-through;\n    animation: strike 1s;\n    opacity: 0.1;\n}\n@keyframes strike {\n    from { \n        text-decoration-color: transparent;\n        opacity: 1;\n    }\n    to { \n        text-decoration-color: auto; \n        opacity: 0;\n    }\n}\n",""]);const u=i},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,a,o){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(r)for(var u=0;u<this.length;u++){var s=this[u][0];null!=s&&(i[s]=!0)}for(var c=0;c<t.length;c++){var d=[].concat(t[c]);r&&i[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),e.push(d))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var o={},i=[],u=0;u<t.length;u++){var s=t[u],c=r.base?s[0]+r.base:s[0],d=o[c]||0,l="".concat(c," ").concat(d);o[c]=d+1;var f=n(l),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==f)e[f].references++,e[f].updater(m);else{var h=a(m,r);r.byIndex=u,e.splice(u,0,{identifier:l,updater:h,references:1})}i.push(l)}return i}function a(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,a){var o=r(t=t||[],a=a||{});return function(t){t=t||[];for(var i=0;i<o.length;i++){var u=n(o[i]);e[u].references--}for(var s=r(t,a),c=0;c<o.length;c++){var d=n(o[c]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}o=s}}},569:t=>{var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(r){var a=e[r];if(void 0!==a)return a.exports;var o=e[r]={id:r,exports:{}};return t[r](o,o.exports,n),o.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0;var r={};(()=>{n.d(r,{R:()=>Yt,F:()=>At});var t=n(379),e=n.n(t),a=n(795),o=n.n(a),i=n(569),u=n.n(i),s=n(565),c=n.n(s),d=n(216),l=n.n(d),f=n(589),m=n.n(f),h=n(160),g={};function v(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function p(t){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(t)}function w(t){return v(1,arguments),t instanceof Date||"object"===p(t)&&"[object Date]"===Object.prototype.toString.call(t)}function y(t){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},y(t)}function b(t){v(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||"object"===y(t)&&"[object Date]"===e?new Date(t.getTime()):"number"==typeof t||"[object Number]"===e?new Date(t):("string"!=typeof t&&"[object String]"!==e||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function T(t){if(v(1,arguments),!w(t)&&"number"!=typeof t)return!1;var e=b(t);return!isNaN(Number(e))}function k(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function C(t,e){v(2,arguments);var n=b(t).getTime(),r=k(e);return new Date(n+r)}function x(t,e){v(2,arguments);var n=k(e);return C(t,-n)}g.styleTagTransform=m(),g.setAttributes=c(),g.insert=u().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=l(),e()(h.Z,g),h.Z&&h.Z.locals&&h.Z.locals;var M=864e5;function S(t){v(1,arguments);var e=1,n=b(t),r=n.getUTCDay(),a=(r<e?7:0)+r-e;return n.setUTCDate(n.getUTCDate()-a),n.setUTCHours(0,0,0,0),n}function E(t){v(1,arguments);var e=b(t),n=e.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(n+1,0,4),r.setUTCHours(0,0,0,0);var a=S(r),o=new Date(0);o.setUTCFullYear(n,0,4),o.setUTCHours(0,0,0,0);var i=S(o);return e.getTime()>=a.getTime()?n+1:e.getTime()>=i.getTime()?n:n-1}function D(t){v(1,arguments);var e=E(t),n=new Date(0);n.setUTCFullYear(e,0,4),n.setUTCHours(0,0,0,0);var r=S(n);return r}var P=6048e5,U={};function L(){return U}function W(t,e){var n,r,a,o,i,u,s,c;v(1,arguments);var d=L(),l=k(null!==(n=null!==(r=null!==(a=null!==(o=null==e?void 0:e.weekStartsOn)&&void 0!==o?o:null==e||null===(i=e.locale)||void 0===i||null===(u=i.options)||void 0===u?void 0:u.weekStartsOn)&&void 0!==a?a:d.weekStartsOn)&&void 0!==r?r:null===(s=d.locale)||void 0===s||null===(c=s.options)||void 0===c?void 0:c.weekStartsOn)&&void 0!==n?n:0);if(!(l>=0&&l<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var f=b(t),m=f.getUTCDay(),h=(m<l?7:0)+m-l;return f.setUTCDate(f.getUTCDate()-h),f.setUTCHours(0,0,0,0),f}function N(t,e){var n,r,a,o,i,u,s,c;v(1,arguments);var d=b(t),l=d.getUTCFullYear(),f=L(),m=k(null!==(n=null!==(r=null!==(a=null!==(o=null==e?void 0:e.firstWeekContainsDate)&&void 0!==o?o:null==e||null===(i=e.locale)||void 0===i||null===(u=i.options)||void 0===u?void 0:u.firstWeekContainsDate)&&void 0!==a?a:f.firstWeekContainsDate)&&void 0!==r?r:null===(s=f.locale)||void 0===s||null===(c=s.options)||void 0===c?void 0:c.firstWeekContainsDate)&&void 0!==n?n:1);if(!(m>=1&&m<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var h=new Date(0);h.setUTCFullYear(l+1,0,m),h.setUTCHours(0,0,0,0);var g=W(h,e),p=new Date(0);p.setUTCFullYear(l,0,m),p.setUTCHours(0,0,0,0);var w=W(p,e);return d.getTime()>=g.getTime()?l+1:d.getTime()>=w.getTime()?l:l-1}function j(t,e){var n,r,a,o,i,u,s,c;v(1,arguments);var d=L(),l=k(null!==(n=null!==(r=null!==(a=null!==(o=null==e?void 0:e.firstWeekContainsDate)&&void 0!==o?o:null==e||null===(i=e.locale)||void 0===i||null===(u=i.options)||void 0===u?void 0:u.firstWeekContainsDate)&&void 0!==a?a:d.firstWeekContainsDate)&&void 0!==r?r:null===(s=d.locale)||void 0===s||null===(c=s.options)||void 0===c?void 0:c.firstWeekContainsDate)&&void 0!==n?n:1),f=N(t,e),m=new Date(0);m.setUTCFullYear(f,0,l),m.setUTCHours(0,0,0,0);var h=W(m,e);return h}var Y=6048e5;function O(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}const q=function(t,e){var n=t.getUTCFullYear(),r=n>0?n:1-n;return O("yy"===e?r%100:r,e.length)},A=function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):O(n+1,2)},B=function(t,e){return O(t.getUTCDate(),e.length)},I=function(t,e){return O(t.getUTCHours()%12||12,e.length)},F=function(t,e){return O(t.getUTCHours(),e.length)},H=function(t,e){return O(t.getUTCMinutes(),e.length)},z=function(t,e){return O(t.getUTCSeconds(),e.length)},Q=function(t,e){var n=e.length,r=t.getUTCMilliseconds();return O(Math.floor(r*Math.pow(10,n-3)),e.length)};var R={G:function(t,e,n){var r=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var r=t.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return q(t,e)},Y:function(t,e,n,r){var a=N(t,r),o=a>0?a:1-a;return"YY"===e?O(o%100,2):"Yo"===e?n.ordinalNumber(o,{unit:"year"}):O(o,e.length)},R:function(t,e){return O(E(t),e.length)},u:function(t,e){return O(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return O(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return O(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){var r=t.getUTCMonth();switch(e){case"M":case"MM":return A(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){var r=t.getUTCMonth();switch(e){case"L":return String(r+1);case"LL":return O(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){var a=function(t,e){v(1,arguments);var n=b(t),r=W(n,e).getTime()-j(n,e).getTime();return Math.round(r/Y)+1}(t,r);return"wo"===e?n.ordinalNumber(a,{unit:"week"}):O(a,e.length)},I:function(t,e,n){var r=function(t){v(1,arguments);var e=b(t),n=S(e).getTime()-D(e).getTime();return Math.round(n/P)+1}(t);return"Io"===e?n.ordinalNumber(r,{unit:"week"}):O(r,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):B(t,e)},D:function(t,e,n){var r=function(t){v(1,arguments);var e=b(t),n=e.getTime();e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0);var r=e.getTime(),a=n-r;return Math.floor(a/M)+1}(t);return"Do"===e?n.ordinalNumber(r,{unit:"dayOfYear"}):O(r,e.length)},E:function(t,e,n){var r=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){var a=t.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return O(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){var a=t.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return O(o,e.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){var r=t.getUTCDay(),a=0===r?7:r;switch(e){case"i":return String(a);case"ii":return O(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){var r=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){var r,a=t.getUTCHours();switch(r=12===a?"noon":0===a?"midnight":a/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,e,n){var r,a=t.getUTCHours();switch(r=a>=17?"evening":a>=12?"afternoon":a>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var r=t.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return I(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):F(t,e)},K:function(t,e,n){var r=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):O(r,e.length)},k:function(t,e,n){var r=t.getUTCHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):O(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):H(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):z(t,e)},S:function(t,e){return Q(t,e)},X:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();if(0===a)return"Z";switch(e){case"X":return X(a);case"XXXX":case"XX":return J(a);default:return J(a,":")}},x:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"x":return X(a);case"xxxx":case"xx":return J(a);default:return J(a,":")}},O:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+G(a,":");default:return"GMT"+J(a,":")}},z:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+G(a,":");default:return"GMT"+J(a,":")}},t:function(t,e,n,r){var a=r._originalDate||t;return O(Math.floor(a.getTime()/1e3),e.length)},T:function(t,e,n,r){return O((r._originalDate||t).getTime(),e.length)}};function G(t,e){var n=t>0?"-":"+",r=Math.abs(t),a=Math.floor(r/60),o=r%60;if(0===o)return n+String(a);var i=e||"";return n+String(a)+i+O(o,2)}function X(t,e){return t%60==0?(t>0?"-":"+")+O(Math.abs(t)/60,2):J(t,e)}function J(t,e){var n=e||"",r=t>0?"-":"+",a=Math.abs(t);return r+O(Math.floor(a/60),2)+n+O(a%60,2)}const _=R;var Z=function(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},V=function(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}};const K={p:V,P:function(t,e){var n,r=t.match(/(P+)(p+)?/)||[],a=r[1],o=r[2];if(!o)return Z(t,e);switch(a){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",Z(a,e)).replace("{{time}}",V(o,e))}};function $(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}var tt=["D","DD"],et=["YY","YYYY"];function nt(t){return-1!==tt.indexOf(t)}function rt(t){return-1!==et.indexOf(t)}function at(t,e,n){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("YY"===t)throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("D"===t)throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("DD"===t)throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var ot={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function it(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth,r=t.formats[n]||t.formats[t.defaultWidth];return r}}const ut={date:it({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:it({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:it({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};var st={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function ct(t){return function(e,n){var r;if("formatting"===(null!=n&&n.context?String(n.context):"standalone")&&t.formattingValues){var a=t.defaultFormattingWidth||t.defaultWidth,o=null!=n&&n.width?String(n.width):a;r=t.formattingValues[o]||t.formattingValues[a]}else{var i=t.defaultWidth,u=null!=n&&n.width?String(n.width):t.defaultWidth;r=t.values[u]||t.values[i]}return r[t.argumentCallback?t.argumentCallback(e):e]}}const dt={ordinalNumber:function(t,e){var n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:ct({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:ct({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:ct({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:ct({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:ct({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})};function lt(t){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.width,a=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],o=e.match(a);if(!o)return null;var i,u=o[0],s=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],c=Array.isArray(s)?mt(s,(function(t){return t.test(u)})):ft(s,(function(t){return t.test(u)}));i=t.valueCallback?t.valueCallback(c):c,i=n.valueCallback?n.valueCallback(i):i;var d=e.slice(u.length);return{value:i,rest:d}}}function ft(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}function mt(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}var ht,gt={ordinalNumber:(ht={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.match(ht.matchPattern);if(!n)return null;var r=n[0],a=t.match(ht.parsePattern);if(!a)return null;var o=ht.valueCallback?ht.valueCallback(a[0]):a[0];o=e.valueCallback?e.valueCallback(o):o;var i=t.slice(r.length);return{value:o,rest:i}}),era:lt({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:lt({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:lt({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:lt({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:lt({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})};const vt={code:"en-US",formatDistance:function(t,e,n){var r,a=ot[t];return r="string"==typeof a?a:1===e?a.one:a.other.replace("{{count}}",e.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:ut,formatRelative:function(t,e,n,r){return st[t]},localize:dt,match:gt,options:{weekStartsOn:0,firstWeekContainsDate:1}};var pt=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,wt=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,yt=/^'([^]*?)'?$/,bt=/''/g,Tt=/[a-zA-Z]/;function kt(t){var e=t.match(yt);return e?e[1].replace(bt,"'"):t}function Ct(t){for(;t.firstChild;)t.removeChild(t.firstChild)}function xt(t,e){const n=document.getElementById("taskArea"),r=[];Ct(n);for(let n=0;n<t.length;n++)t[n].project==e&&r.push(t[n]);r.forEach((t=>function(t){const e=document.createElement("div"),r=document.createElement("label"),a=document.createElement("input"),o=document.createElement("span");e.classList.add("form-control","checklist"),r.classList.add("cursor-pointer","taskLabel"),a.classList.add("checkbox","checkbox-primary"),a.setAttribute("type","checkbox"),a.setAttribute("data-label",t),a.addEventListener("click",At),o.classList.add("label-text"),o.setAttribute("id",t),r.appendChild(a),r.appendChild(o),e.appendChild(r),o.innerHTML=t,n.appendChild(e)}(t.taskName)))}function Mt(t){const e=document.getElementById("projQ"),n=document.createElement("li"),r=document.createElement("a");r.classList.add("navBtn"),r.setAttribute("id",t),r.innerHTML=t,r.addEventListener("click",Yt),n.appendChild(r),e.appendChild(n),r.click()}let St=document.getElementById("datePicker");function Et(t){localStorage.setItem("theme",JSON.stringify(t))}St.value=function(t,e,n){var r,a,o,i,u,s,c,d,l,f,m,h,g,p,w,y,C,M;v(2,arguments);var S=String(e),E=L(),D=null!==(r=null!==(a=null==n?void 0:n.locale)&&void 0!==a?a:E.locale)&&void 0!==r?r:vt,P=k(null!==(o=null!==(i=null!==(u=null!==(s=null==n?void 0:n.firstWeekContainsDate)&&void 0!==s?s:null==n||null===(c=n.locale)||void 0===c||null===(d=c.options)||void 0===d?void 0:d.firstWeekContainsDate)&&void 0!==u?u:E.firstWeekContainsDate)&&void 0!==i?i:null===(l=E.locale)||void 0===l||null===(f=l.options)||void 0===f?void 0:f.firstWeekContainsDate)&&void 0!==o?o:1);if(!(P>=1&&P<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var U=k(null!==(m=null!==(h=null!==(g=null!==(p=null==n?void 0:n.weekStartsOn)&&void 0!==p?p:null==n||null===(w=n.locale)||void 0===w||null===(y=w.options)||void 0===y?void 0:y.weekStartsOn)&&void 0!==g?g:E.weekStartsOn)&&void 0!==h?h:null===(C=E.locale)||void 0===C||null===(M=C.options)||void 0===M?void 0:M.weekStartsOn)&&void 0!==m?m:0);if(!(U>=0&&U<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!D.localize)throw new RangeError("locale must contain localize property");if(!D.formatLong)throw new RangeError("locale must contain formatLong property");var W=b(t);if(!T(W))throw new RangeError("Invalid time value");var N=$(W),j=x(W,N),Y={firstWeekContainsDate:P,weekStartsOn:U,locale:D,_originalDate:W},O=S.match(wt).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,K[e])(t,D.formatLong):t})).join("").match(pt).map((function(r){if("''"===r)return"'";var a=r[0];if("'"===a)return kt(r);var o=_[a];if(o)return null!=n&&n.useAdditionalWeekYearTokens||!rt(r)||at(r,e,String(t)),null!=n&&n.useAdditionalDayOfYearTokens||!nt(r)||at(r,e,String(t)),o(j,r,D.localize,Y);if(a.match(Tt))throw new RangeError("Format string contains an unescaped latin alphabet character `"+a+"`");return r})).join("");return O}(new Date,"yyyy-MM-dd"),St.onchange=function(){Mt(St.value)},document.getElementById("gardenTheme").addEventListener("click",(function(){document.documentElement.setAttribute("data-theme","garden"),Et("garden")})),document.getElementById("lofiTheme").addEventListener("click",(function(){document.documentElement.setAttribute("data-theme","lofi"),Et("lofi")})),document.getElementById("corporateTheme").addEventListener("click",(function(){document.documentElement.setAttribute("data-theme","corporate"),Et("lofi")}));let Dt=localStorage.getItem("theme");null!=Dt&&document.documentElement.setAttribute("data-theme",JSON.parse(Dt));const Pt=document.querySelectorAll(".navBtn"),Ut=document.getElementById("taskName"),Lt=document.getElementById("newTaskBtn"),Wt=document.getElementById("newProjBtn");window.addEventListener("load",qt),Pt.forEach((t=>t.addEventListener("click",Yt))),Lt.addEventListener("click",(function(){const t=new Ot(Nt.project,Ut.value);Nt.taskList.push(t),Ut.value="",xt(Nt.taskList,Nt.project),jt(),qt()})),Wt.addEventListener("click",(function(){Mt(document.getElementById("projName").value),document.getElementById("projName").value=""}));const Nt={project:"Today",taskList:[],taskRemove:t=>Nt.taskList.splice(t,1)};function jt(){localStorage.setItem("saveState",JSON.stringify(Nt.taskList))}function Yt(){document.querySelectorAll(".navBtn").forEach((t=>t.classList.remove("active"))),this.classList.add("active"),Nt.project=this.id,xt(Nt.taskList,Nt.project)}const Ot=function(t,e){this.taskName=e,this.project=t};function qt(){if(localStorage.length>0){Nt.taskList=JSON.parse(localStorage.getItem("saveState")),xt(Nt.taskList,Nt.project);const t=[];for(let e=0;e<Nt.taskList.length;e++)t.push(Nt.taskList[e].project);Ct(document.getElementById("projQ")),[...new Set(t)].forEach((t=>Mt(t)))}}function At(){this.classList.add("fadey");const t=document.getElementById(this.dataset.label);t.addEventListener("animationend",(function(){xt(Nt.taskList,Nt.project)})),t.classList.add("taskComplete");const e=Nt.taskList.findIndex((t=>t.taskName===this.dataset.label));Nt.taskRemove(e),jt()}})()})();