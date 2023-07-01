// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("buffer")):"function"==typeof define&&define.amd?define(["buffer"],t):(r="undefined"!=typeof globalThis?globalThis:r||self).flattenArray=t(r.require$$0)}(this,(function(r){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var e,n=Object.defineProperty,o=Object.prototype,i=o.toString,a=o.__defineGetter__,u=o.__defineSetter__,c=o.__lookupGetter__,f=o.__lookupSetter__;e=function(){try{return t({},"x",{}),!0}catch(r){return!1}}()?n:function(r,t,e){var n,l,p,s;if("object"!=typeof r||null===r||"[object Array]"===i.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof e||null===e||"[object Array]"===i.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((l="value"in e)&&(c.call(r,t)||f.call(r,t)?(n=r.__proto__,r.__proto__=o,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),p="get"in e,s="set"in e,l&&(p||s))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&a&&a.call(r,t,e.get),s&&u&&u.call(r,t,e.set),r};var l=e;function p(r,t,e){l(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}var s="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function y(){return s&&"symbol"==typeof Symbol.toStringTag}var v=Object.prototype.toString;var g=Object.prototype.hasOwnProperty;function h(r,t){return null!=r&&g.call(r,t)}var d="function"==typeof Symbol?Symbol.toStringTag:"";var b=y()?function(r){var t,e,n;if(null==r)return v.call(r);e=r[d],t=h(r,d);try{r[d]=void 0}catch(t){return v.call(r)}return n=v.call(r),t?r[d]=e:delete r[d],n}:function(r){return v.call(r)};var w=Array.isArray?Array.isArray:function(r){return"[object Array]"===b(r)};function m(r){return"number"==typeof r}var j=Number,A=j.prototype.toString;var O=y();function E(r){return"object"==typeof r&&(r instanceof j||(O?function(r){try{return A.call(r),!0}catch(r){return!1}}(r):"[object Number]"===b(r)))}function I(r){return m(r)||E(r)}p(I,"isPrimitive",m),p(I,"isObject",E);var S=Number.POSITIVE_INFINITY,_=j.NEGATIVE_INFINITY,T=Math.floor;function x(r){return T(r)===r}function U(r){return r<S&&r>_&&x(r)}function F(r){return m(r)&&U(r)}function k(r){return E(r)&&U(r.valueOf())}function P(r){return F(r)||k(r)}function V(r){return F(r)&&r>=0}function C(r){return k(r)&&r.valueOf()>=0}function N(r){return V(r)||C(r)}function $(r){return null!==r&&"object"==typeof r}function B(r){return $(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))}p(P,"isPrimitive",F),p(P,"isObject",k),p(N,"isPrimitive",V),p(N,"isObject",C),p($,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var e,n;if(!w(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}($));var R=/./;function L(r){return"boolean"==typeof r}var M=Boolean.prototype.toString;var G=y();function z(r){return"object"==typeof r&&(r instanceof Boolean||(G?function(r){try{return M.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===b(r)))}function W(r){return L(r)||z(r)}function X(){return new Function("return this;")()}p(W,"isPrimitive",L),p(W,"isObject",z);var Z="object"==typeof self?self:null,D="object"==typeof window?window:null,Y="object"==typeof global?global:null;var q=function(r){if(arguments.length){if(!L(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return X()}if(Z)return Z;if(D)return D;if(Y)return Y;throw new Error("unexpected error. Unable to resolve global object.")}(),H=q.document&&q.document.childNodes,J=Int8Array;function K(){return/^\s*function\s*([^(]*)/i}var Q=/^\s*function\s*([^(]*)/i;function rr(r){var t,e,n;if(("Object"===(e=b(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=Q.exec(n.toString()))return t[1]}return B(r)?"Buffer":e}p(K,"REGEXP",Q);var tr="function"==typeof R||"object"==typeof J||"function"==typeof H?function(r){return rr(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?rr(r).toLowerCase():t};function er(r){return"function"===tr(r)}var nr,or=Object.getPrototypeOf;nr=er(Object.getPrototypeOf)?or:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===b(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var ir=nr;function ar(r){return null==r?null:(r=Object(r),ir(r))}function ur(r){return"string"==typeof r}var cr=String.prototype.valueOf;var fr=y();function lr(r){return"object"==typeof r&&(r instanceof String||(fr?function(r){try{return cr.call(r),!0}catch(r){return!1}}(r):"[object String]"===b(r)))}function pr(r){return ur(r)||lr(r)}function sr(){return/^\/((?:\\\/|[^\/])+)\/([imgy]*)$/}function yr(r){return"number"==typeof r}function vr(r){var t,e="";for(t=0;t<r;t++)e+="0";return e}function gr(r,t,e){var n=!1,o=t-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=e?r+vr(o):vr(o)+r,n&&(r="-"+r)),r}p(pr,"isPrimitive",ur),p(pr,"isObject",lr),p(sr,"REGEXP",/^\/((?:\\\/|[^\/])+)\/([imgy]*)$/);var hr=String.prototype.toLowerCase,dr=String.prototype.toUpperCase;function br(r){var t,e,n;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(e=r.arg,n=parseInt(e,10),!isFinite(n)){if(!yr(e))throw new Error("invalid integer. Value: "+e);n=0}return n<0&&("u"===r.specifier||10!==t)&&(n=4294967295+n+1),n<0?(e=(-n).toString(t),r.precision&&(e=gr(e,r.precision,r.padRight)),e="-"+e):(e=n.toString(t),n||r.precision?r.precision&&(e=gr(e,r.precision,r.padRight)):e="",r.sign&&(e=r.sign+e)),16===t&&(r.alternate&&(e="0x"+e),e=r.specifier===dr.call(r.specifier)?dr.call(e):hr.call(e)),8===t&&r.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}function wr(r){return"string"==typeof r}var mr=Math.abs,jr=String.prototype.toLowerCase,Ar=String.prototype.toUpperCase,Or=String.prototype.replace,Er=/e\+(\d)$/,Ir=/e-(\d)$/,Sr=/^(\d+)$/,_r=/^(\d+)e/,Tr=/\.0$/,xr=/\.0*e/,Ur=/(\..*[^0])0*e/;function Fr(r){var t,e,n=parseFloat(r.arg);if(!isFinite(n)){if(!yr(r.arg))throw new Error("invalid floating-point number. Value: "+e);n=r.arg}switch(r.specifier){case"e":case"E":e=n.toExponential(r.precision);break;case"f":case"F":e=n.toFixed(r.precision);break;case"g":case"G":mr(n)<1e-4?((t=r.precision)>0&&(t-=1),e=n.toExponential(t)):e=n.toPrecision(r.precision),r.alternate||(e=Or.call(e,Ur,"$1e"),e=Or.call(e,xr,"e"),e=Or.call(e,Tr,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return e=Or.call(e,Er,"e+0$1"),e=Or.call(e,Ir,"e-0$1"),r.alternate&&(e=Or.call(e,Sr,"$1."),e=Or.call(e,_r,"$1.e")),n>=0&&r.sign&&(e=r.sign+e),e=r.specifier===Ar.call(r.specifier)?Ar.call(e):jr.call(e)}function kr(r){var t,e="";for(t=0;t<r;t++)e+=" ";return e}function Pr(r,t,e){var n=t-r.length;return n<0?r:r=e?r+kr(n):kr(n)+r}var Vr=String.fromCharCode,Cr=isNaN,Nr=Array.isArray;function $r(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function Br(r){var t,e,n,o,i,a,u,c,f;if(!Nr(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",u=1,c=0;c<r.length;c++)if(wr(n=r[c]))a+=n;else{if(t=void 0!==n.precision,!(n=$r(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),e=n.flags,f=0;f<e.length;f++)switch(o=e.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=e.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,Cr(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(t&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,Cr(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,t=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(n.padZeros=!1),n.arg=br(n);break;case"s":n.maxWidth=t?n.precision:-1;break;case"c":if(!Cr(n.arg)){if((i=parseInt(n.arg,10))<0||i>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=Cr(i)?String(n.arg):Vr(i)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(n.precision=6),n.arg=Fr(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=gr(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=Pr(n.arg,n.width,n.padRight)),a+=n.arg||"",u+=1}return a}var Rr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Lr(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function Mr(r){var t,e,n,o;for(e=[],o=0,n=Rr.exec(r);n;)(t=r.slice(o,Rr.lastIndex-n[0].length)).length&&e.push(t),e.push(Lr(n)),o=Rr.lastIndex,n=Rr.exec(r);return(t=r.slice(o)).length&&e.push(t),e}function Gr(r){return"string"==typeof r}function zr(r){var t,e,n;if(!Gr(r))throw new TypeError(zr("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=Mr(r),(e=new Array(arguments.length))[0]=t,n=1;n<e.length;n++)e[n]=arguments[n];return Br.apply(null,e)}function Wr(r){if(!ur(r))throw new TypeError(zr("invalid argument. Must provide a regular expression string. Value: `%s`.",r));return(r=/^\/((?:\\\/|[^\/])+)\/([imgy]*)$/.exec(r))?new RegExp(r[1],r[2]):null}function Xr(r){return r!=r}function Zr(r){return m(r)&&Xr(r)}function Dr(r){return E(r)&&Xr(r.valueOf())}function Yr(r){return Zr(r)||Dr(r)}p(Yr,"isPrimitive",Zr),p(Yr,"isObject",Dr);function qr(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&x(r.length)&&r.length>=0&&r.length<=9007199254740991}function Hr(r,t,e){var n,o;if(!qr(r)&&!ur(r))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+r+"`.");if(0===(n=r.length))return-1;if(3===arguments.length){if(!F(e))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+e+"`.");if(e>=0){if(e>=n)return-1;o=e}else(o=n+e)<0&&(o=0)}else o=0;if(Yr(t)){for(;o<n;o++)if(Yr(r[o]))return o}else for(;o<n;o++)if(r[o]===t)return o;return-1}function Jr(r){return Object.keys(Object(r))}var Kr,Qr=void 0!==Object.keys;function rt(r){return"[object Arguments]"===b(r)}Kr=function(){return rt(arguments)}();var tt=Kr,et=Object.prototype.propertyIsEnumerable;var nt=!et.call("beep","0");function ot(r,t){var e;return null!=r&&(!(e=et.call(r,t))&&nt&&pr(r)?!Zr(t=+t)&&F(t)&&t>=0&&t<r.length:e)}var it=4294967295;var at=tt?rt:function(r){return null!==r&&"object"==typeof r&&!w(r)&&"number"==typeof r.length&&x(r.length)&&r.length>=0&&r.length<=it&&h(r,"callee")&&!ot(r,"callee")},ut=Array.prototype.slice;var ct=ot((function(){}),"prototype"),ft=!ot({toString:null},"toString");function lt(r){return r.constructor&&r.constructor.prototype===r}var pt=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],st="undefined"==typeof window?void 0:window;var yt=function(){var r;if("undefined"===tr(st))return!1;for(r in st)try{-1===Hr(pt,r)&&h(st,r)&&null!==st[r]&&"object"===tr(st[r])&&lt(st[r])}catch(r){return!0}return!1}(),vt="undefined"!=typeof window;var gt,ht=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];gt=Qr?function(){return 2!==(Jr(arguments)||"").length}(1,2)?function(r){return at(r)?Jr(ut.call(r)):Jr(r)}:Jr:function(r){var t,e,n,o,i,a,u;if(o=[],at(r)){for(u=0;u<r.length;u++)o.push(u.toString());return o}if("string"==typeof r){if(r.length>0&&!h(r,"0"))for(u=0;u<r.length;u++)o.push(u.toString())}else{if(!1==(n="function"==typeof r)&&!$(r))return o;e=ct&&n}for(i in r)e&&"prototype"===i||!h(r,i)||o.push(String(i));if(ft)for(t=function(r){if(!1===vt&&!yt)return lt(r);try{return lt(r)}catch(r){return!1}}(r),u=0;u<ht.length;u++)a=ht[u],t&&"constructor"===a||!h(r,a)||o.push(String(a));return o};var dt=gt,bt=void 0!==Object.getOwnPropertyNames,wt=Object.getOwnPropertyNames;var mt=bt?function(r){return wt(Object(r))}:function(r){return dt(Object(r))},jt=void 0!==Object.getOwnPropertyDescriptor,At=Object.getOwnPropertyDescriptor;var Ot=jt?function(r,t){var e;return null==r||void 0===(e=At(r,t))?null:e}:function(r,t){return h(r,t)?{configurable:!0,enumerable:!0,writable:!0,value:r[t]}:null},Et="function"==typeof Buffer?Buffer:null;var It,St=r.Buffer;It=function(){var r,t;if("function"!=typeof Et)return!1;try{r=B(t="function"==typeof Et.from?Et.from([1,2,3,4]):new Et([1,2,3,4]))&&1===t[0]&&2===t[1]&&3===t[2]&&4===t[3]}catch(t){r=!1}return r}()?St:function(){throw new Error("not implemented")};var _t=It;var Tt=er(_t.from)?function(r){if(!B(r))throw new TypeError("invalid argument. Must provide a Buffer. Value: `"+r+"`");return _t.from(r)}:function(r){if(!B(r))throw new TypeError("invalid argument. Must provide a Buffer. Value: `"+r+"`");return new _t(r)},xt="function"==typeof Int8Array;var Ut="function"==typeof Int8Array?Int8Array:null;var Ft,kt="function"==typeof Int8Array?Int8Array:void 0;Ft=function(){var r,t,e;if("function"!=typeof Ut)return!1;try{t=new Ut([1,3.14,-3.14,128]),e=t,r=(xt&&e instanceof Int8Array||"[object Int8Array]"===b(e))&&1===t[0]&&3===t[1]&&-3===t[2]&&-128===t[3]}catch(t){r=!1}return r}()?kt:function(){throw new Error("not implemented")};var Pt=Ft,Vt="function"==typeof Uint8Array;var Ct="function"==typeof Uint8Array?Uint8Array:null;var Nt,$t="function"==typeof Uint8Array?Uint8Array:void 0;Nt=function(){var r,t,e;if("function"!=typeof Ct)return!1;try{t=new Ct(t=[1,3.14,-3.14,256,257]),e=t,r=(Vt&&e instanceof Uint8Array||"[object Uint8Array]"===b(e))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?$t:function(){throw new Error("not implemented")};var Bt=Nt,Rt="function"==typeof Uint8ClampedArray;var Lt="function"==typeof Uint8ClampedArray?Uint8ClampedArray:null;var Mt,Gt="function"==typeof Uint8ClampedArray?Uint8ClampedArray:void 0;Mt=function(){var r,t,e;if("function"!=typeof Lt)return!1;try{t=new Lt([-1,0,1,3.14,4.99,255,256]),e=t,r=(Rt&&e instanceof Uint8ClampedArray||"[object Uint8ClampedArray]"===b(e))&&0===t[0]&&0===t[1]&&1===t[2]&&3===t[3]&&5===t[4]&&255===t[5]&&255===t[6]}catch(t){r=!1}return r}()?Gt:function(){throw new Error("not implemented")};var zt=Mt,Wt="function"==typeof Int16Array;var Xt="function"==typeof Int16Array?Int16Array:null;var Zt,Dt="function"==typeof Int16Array?Int16Array:void 0;Zt=function(){var r,t,e;if("function"!=typeof Xt)return!1;try{t=new Xt([1,3.14,-3.14,32768]),e=t,r=(Wt&&e instanceof Int16Array||"[object Int16Array]"===b(e))&&1===t[0]&&3===t[1]&&-3===t[2]&&-32768===t[3]}catch(t){r=!1}return r}()?Dt:function(){throw new Error("not implemented")};var Yt=Zt,qt="function"==typeof Uint16Array;var Ht="function"==typeof Uint16Array?Uint16Array:null;var Jt,Kt="function"==typeof Uint16Array?Uint16Array:void 0;Jt=function(){var r,t,e;if("function"!=typeof Ht)return!1;try{t=new Ht(t=[1,3.14,-3.14,65536,65537]),e=t,r=(qt&&e instanceof Uint16Array||"[object Uint16Array]"===b(e))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Kt:function(){throw new Error("not implemented")};var Qt=Jt,re="function"==typeof Int32Array;var te="function"==typeof Int32Array?Int32Array:null;var ee,ne="function"==typeof Int32Array?Int32Array:void 0;ee=function(){var r,t,e;if("function"!=typeof te)return!1;try{t=new te([1,3.14,-3.14,2147483648]),e=t,r=(re&&e instanceof Int32Array||"[object Int32Array]"===b(e))&&1===t[0]&&3===t[1]&&-3===t[2]&&-2147483648===t[3]}catch(t){r=!1}return r}()?ne:function(){throw new Error("not implemented")};var oe=ee,ie="function"==typeof Uint32Array;var ae="function"==typeof Uint32Array?Uint32Array:null;var ue,ce="function"==typeof Uint32Array?Uint32Array:void 0;ue=function(){var r,t,e;if("function"!=typeof ae)return!1;try{t=new ae(t=[1,3.14,-3.14,4294967296,4294967297]),e=t,r=(ie&&e instanceof Uint32Array||"[object Uint32Array]"===b(e))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?ce:function(){throw new Error("not implemented")};var fe=ue,le="function"==typeof Float32Array;var pe="function"==typeof Float32Array?Float32Array:null;var se,ye="function"==typeof Float32Array?Float32Array:void 0;se=function(){var r,t,e;if("function"!=typeof pe)return!1;try{t=new pe([1,3.14,-3.14,5e40]),e=t,r=(le&&e instanceof Float32Array||"[object Float32Array]"===b(e))&&1===t[0]&&3.140000104904175===t[1]&&-3.140000104904175===t[2]&&t[3]===S}catch(t){r=!1}return r}()?ye:function(){throw new Error("not implemented")};var ve=se,ge="function"==typeof Float64Array;var he="function"==typeof Float64Array?Float64Array:null;var de,be="function"==typeof Float64Array?Float64Array:void 0;de=function(){var r,t,e;if("function"!=typeof he)return!1;try{t=new he([1,3.14,-3.14,NaN]),e=t,r=(ge&&e instanceof Float64Array||"[object Float64Array]"===b(e))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?be:function(){throw new Error("not implemented")};var we=de;function me(r){return new Pt(r)}function je(r){return new Bt(r)}function Ae(r){return new zt(r)}function Oe(r){return new Yt(r)}function Ee(r){return new Qt(r)}function Ie(r){return new oe(r)}function Se(r){return new fe(r)}function _e(r){return new ve(r)}function Te(r){return new we(r)}var xe={int8array:me,uint8array:je,uint8clampedarray:Ae,int16array:Oe,uint16array:Ee,int32array:Ie,uint32array:Se,float32array:_e,float64array:Te};function Ue(r,t,e,n,o){var i,a,u,c,f,p,s,y,v,g;if(o-=1,"object"!=typeof r||null===r)return r;if(B(r))return Tt(r);if(function(r){if("object"!=typeof r||null===r)return!1;if(r instanceof Error)return!0;for(;r;){if("[object Error]"===b(r))return!0;r=ar(r)}return!1}(r))return function(r){var t,e,n,o,i,a,u=[],c=[];for(i=new r.constructor(r.message),u.push(r),c.push(i),r.stack&&(i.stack=r.stack),r.code&&(i.code=r.code),r.errno&&(i.errno=r.errno),r.syscall&&(i.syscall=r.syscall),t=dt(r),a=0;a<t.length;a++)o=t[a],h(e=Ot(r,o),"value")&&(n=w(r[o])?[]:{},e.value=Ue(r[o],n,u,c,-1)),l(i,o,e);return i}(r);if("date"===(u=tr(r)))return new Date(+r);if("regexp"===u)return Wr(r.toString());if("set"===u)return new Set(r);if("map"===u)return new Map(r);if("string"===u||"boolean"===u||"number"===u)return r.valueOf();if(f=xe[u])return f(r);if("array"!==u&&"object"!==u)return"function"==typeof Object.freeze?function(r){var t,e,n,o,i,a,u,c;for(t=[],o=[],u=Object.create(ar(r)),t.push(r),o.push(u),e=mt(r),c=0;c<e.length;c++)n=e[c],h(i=Ot(r,n),"value")&&(a=w(r[n])?[]:{},i.value=Ue(r[n],a,t,o,-1)),l(u,n,i);return Object.isExtensible(r)||Object.preventExtensions(u),Object.isSealed(r)&&Object.seal(u),Object.isFrozen(r)&&Object.freeze(u),u}(r):{};if(a=dt(r),o>0)for(i=u,g=0;g<a.length;g++)y=r[p=a[g]],u=tr(y),"object"!=typeof y||null===y||"array"!==u&&"object"!==u||B(y)?"object"===i?(h(c=Ot(r,p),"value")&&(c.value=Ue(y)),l(t,p,c)):t[p]=Ue(y):-1===(v=Hr(e,y))?(s=w(y)?new Array(y.length):{},e.push(y),n.push(s),"array"===i?t[p]=Ue(y,s,e,n,o):(h(c=Ot(r,p),"value")&&(c.value=Ue(y,s,e,n,o)),l(t,p,c))):t[p]=n[v];else if("array"===u)for(g=0;g<a.length;g++)t[p=a[g]]=r[p];else for(g=0;g<a.length;g++)p=a[g],c=Ot(r,p),l(t,p,c);return Object.isExtensible(r)||Object.preventExtensions(t),Object.isSealed(r)&&Object.seal(t),Object.isFrozen(r)&&Object.freeze(t),t}function Fe(r,t){var e;if(arguments.length>1){if(!V(t))throw new TypeError("invalid argument. `level` must be a nonnegative integer. Value: `"+t+"`.");if(0===t)return r}else t=S;return Ue(r,e=w(r)?new Array(r.length):{},[r],[e],t)}var ke=4294967295;function Pe(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&x(r.length)&&r.length>=0&&r.length<=ke}function Ve(){var r,t=arguments,e=t[0],n="https://stdlib.io/e/"+e+"?";for(r=1;r<t.length;r++)n+="&arg[]="+encodeURIComponent(t[r]);return n}var Ce=!1,Ne=17976931348623157e292;var $e=Object.prototype;function Be(r){var t;return!!function(r){return"object"==typeof r&&null!==r&&!w(r)}(r)&&(!(t=ar(r))||!h(r,"constructor")&&h(t,"constructor")&&er(t.constructor)&&"[object Function]"===b(t.constructor)&&h(t,"isPrototypeOf")&&er(t.isPrototypeOf)&&(t===$e||function(r){var t;for(t in r)if(!h(r,t))return!1;return!0}(r)))}function Re(r,t){return Be(t)?h(t,"depth")&&(r.depth=t.depth,!V(r.depth))?new TypeError(Ve("0jm35","depth",r.depth)):h(t,"copy")&&(r.copy=t.copy,!L(r.copy))?new TypeError(Ve("0jm30","copy",r.copy)):null:new TypeError(Ve("0jm2h",t))}function Le(r,t,e){var n,o;for(o=0;o<t.length;o++)n=t[o],e&&Pe(n)?Le(r,n,e-1):r.push(n);return r}function Me(r,t){var e,n,o;if(!Pe(r))throw new TypeError(Ve("0jm2a",r));if(e={copy:Ce,depth:Ne},arguments.length>1&&(n=Re(e,t)))throw n;return o=0===e.depth?r:Le([],r,e.depth),e.copy?Fe(o):o}function Ge(r){return F(r)&&r>0}function ze(r){return k(r)&&r.valueOf()>0}function We(r){return Ge(r)||ze(r)}function Xe(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var e,n;if(!function(r){return null!=r&&"function"!=typeof r&&"number"==typeof r.length&&x(r.length)&&r.length>=0&&r.length<=ke}(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}p(We,"isPrimitive",Ge),p(We,"isObject",ze);var Ze=Xe(We.isPrimitive),De=Xe(We.isObject),Ye=Xe(We);p(Ye,"primitives",Ze),p(Ye,"objects",De);var qe=Function;function He(r){var t,e,n,o;for(n="return function flattenArray(x){",e=(t=r.length)-1,n+="var o=[];var ",o=0;o<t;o++)n+="i"+o,n+=o<e?",":";";for(o=0;o<t;o++)n+="for(i"+o+"=0;i"+o+"<"+r[o]+";i"+o+"++){";for(n+="o.push(x",o=0;o<t;o++)n+="[i"+o+"]";for(n+=");",o=0;o<t;o++)n+="}";return n+="return o;",n+="}",new qe(n+="//# sourceURL=flatten_array.gen_fcn.js")()}function Je(r){return function(t){if(!Pe(t))throw new TypeError(Ve("0jm36",t));return r(t)}}function Ke(r){return function(t){if(!Pe(t))throw new TypeError(Ve("0jm36",t));return Fe(r(t))}}return p(Me,"factory",(function(r,t){var e,n;if(!Ze(r))throw new TypeError(Ve("0jmBv",r));if(e=Ce,arguments.length>1){if(!Be(t))throw new TypeError(Ve("0jm2h",t));if(h(t,"copy")&&!L(e=t.copy))throw new TypeError(Ve("0jm30","copy",e))}return n=He(r),e?Ke(n):Je(n)})),Me}));
//# sourceMappingURL=index.js.map