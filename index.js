// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("buffer")):"function"==typeof define&&define.amd?define(["buffer"],t):(r="undefined"!=typeof globalThis?globalThis:r||self).flattenArray=t(r.require$$0)}(this,(function(r){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=Object.defineProperty;function e(r){return"number"==typeof r}function o(r){var t,n="";for(t=0;t<r;t++)n+="0";return n}function i(r,t,n){var e=!1,i=t-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(e=!0,r=r.substr(1)),r=n?r+o(i):o(i)+r,e&&(r="-"+r)),r}var a=String.prototype.toLowerCase,u=String.prototype.toUpperCase;function c(r){var t,n,o;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(n=r.arg,o=parseInt(n,10),!isFinite(o)){if(!e(n))throw new Error("invalid integer. Value: "+n);o=0}return o<0&&("u"===r.specifier||10!==t)&&(o=4294967295+o+1),o<0?(n=(-o).toString(t),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=o.toString(t),o||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===t&&(r.alternate&&(n="0x"+n),n=r.specifier===u.call(r.specifier)?u.call(n):a.call(n)),8===t&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function l(r){return"string"==typeof r}var f=Math.abs,p=String.prototype.toLowerCase,y=String.prototype.toUpperCase,s=String.prototype.replace,v=/e\+(\d)$/,g=/e-(\d)$/,b=/^(\d+)$/,d=/^(\d+)e/,h=/\.0$/,m=/\.0*e/,w=/(\..*[^0])0*e/;function j(r){var t,n,o=parseFloat(r.arg);if(!isFinite(o)){if(!e(r.arg))throw new Error("invalid floating-point number. Value: "+n);o=r.arg}switch(r.specifier){case"e":case"E":n=o.toExponential(r.precision);break;case"f":case"F":n=o.toFixed(r.precision);break;case"g":case"G":f(o)<1e-4?((t=r.precision)>0&&(t-=1),n=o.toExponential(t)):n=o.toPrecision(r.precision),r.alternate||(n=s.call(n,w,"$1e"),n=s.call(n,m,"e"),n=s.call(n,h,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=s.call(n,v,"e+0$1"),n=s.call(n,g,"e-0$1"),r.alternate&&(n=s.call(n,b,"$1."),n=s.call(n,d,"$1.e")),o>=0&&r.sign&&(n=r.sign+n),n=r.specifier===y.call(r.specifier)?y.call(n):p.call(n)}function S(r){var t,n="";for(t=0;t<r;t++)n+=" ";return n}function O(r,t,n){var e=t-r.length;return e<0?r:r=n?r+S(e):S(e)+r}var A=String.fromCharCode,E=isNaN,_=Array.isArray;function T(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function I(r){var t,n,e,o,a,u,f,p,y;if(!_(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(u="",f=1,p=0;p<r.length;p++)if(l(e=r[p]))u+=e;else{if(t=void 0!==e.precision,!(e=T(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+p+"`. Value: `"+e+"`.");for(e.mapping&&(f=e.mapping),n=e.flags,y=0;y<n.length;y++)switch(o=n.charAt(y)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=n.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===e.width){if(e.width=parseInt(arguments[f],10),f+=1,E(e.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(t&&"*"===e.precision){if(e.precision=parseInt(arguments[f],10),f+=1,E(e.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,t=!1)}switch(e.arg=arguments[f],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(e.padZeros=!1),e.arg=c(e);break;case"s":e.maxWidth=t?e.precision:-1;break;case"c":if(!E(e.arg)){if((a=parseInt(e.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=E(a)?String(e.arg):A(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(e.precision=6),e.arg=j(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=i(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=O(e.arg,e.width,e.padRight)),u+=e.arg||"",f+=1}return u}var P=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function F(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function x(r){var t,n,e,o;for(n=[],o=0,e=P.exec(r);e;)(t=r.slice(o,P.lastIndex-e[0].length)).length&&n.push(t),n.push(F(e)),o=P.lastIndex,e=P.exec(r);return(t=r.slice(o)).length&&n.push(t),n}function k(r){return"string"==typeof r}function U(r){var t,n;if(!k(r))throw new TypeError(U("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=[x(r)],n=1;n<arguments.length;n++)t.push(arguments[n]);return I.apply(null,t)}var V,C=Object.prototype,N=C.toString,$=C.__defineGetter__,B=C.__defineSetter__,M=C.__lookupGetter__,R=C.__lookupSetter__;V=function(){try{return t({},"x",{}),!0}catch(r){return!1}}()?n:function(r,t,n){var e,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===N.call(r))throw new TypeError(U("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===N.call(n))throw new TypeError(U("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((o="value"in n)&&(M.call(r,t)||R.call(r,t)?(e=r.__proto__,r.__proto__=C,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),i="get"in n,a="set"in n,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&$&&$.call(r,t,n.get),a&&B&&B.call(r,t,n.set),r};var G=V;function L(r,t,n){G(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function z(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var W=z();function X(){return W&&"symbol"==typeof Symbol.toStringTag}var Z=Object.prototype.toString;var D=Object.prototype.hasOwnProperty;function Y(r,t){return null!=r&&D.call(r,t)}var q="function"==typeof Symbol?Symbol:void 0,H="function"==typeof q?q.toStringTag:"";var J=X()?function(r){var t,n,e;if(null==r)return Z.call(r);n=r[H],t=Y(r,H);try{r[H]=void 0}catch(t){return Z.call(r)}return e=Z.call(r),t?r[H]=n:delete r[H],e}:function(r){return Z.call(r)};var K=Array.isArray?Array.isArray:function(r){return"[object Array]"===J(r)};function Q(r){return"number"==typeof r}var rr=Object.prototype.toString;var tr="function"==typeof Symbol?Symbol:void 0,nr="function"==typeof tr?tr.toStringTag:"";var er=X()?function(r){var t,n,e;if(null==r)return rr.call(r);n=r[nr],t=Y(r,nr);try{r[nr]=void 0}catch(t){return rr.call(r)}return e=rr.call(r),t?r[nr]=n:delete r[nr],e}:function(r){return rr.call(r)},or=Number,ir=or.prototype.toString;var ar=X();function ur(r){return"object"==typeof r&&(r instanceof or||(ar?function(r){try{return ir.call(r),!0}catch(r){return!1}}(r):"[object Number]"===er(r)))}function cr(r){return Q(r)||ur(r)}L(cr,"isPrimitive",Q),L(cr,"isObject",ur);var lr=Number.POSITIVE_INFINITY,fr=or.NEGATIVE_INFINITY,pr=Math.floor;function yr(r){return pr(r)===r}function sr(r){return r<lr&&r>fr&&yr(r)}function vr(r){return Q(r)&&sr(r)}function gr(r){return ur(r)&&sr(r.valueOf())}function br(r){return vr(r)||gr(r)}function dr(r){return vr(r)&&r>=0}function hr(r){return gr(r)&&r.valueOf()>=0}function mr(r){return dr(r)||hr(r)}L(br,"isPrimitive",vr),L(br,"isObject",gr),L(mr,"isPrimitive",dr),L(mr,"isObject",hr);var wr=Object.prototype.toString;var jr="function"==typeof Symbol?Symbol:void 0,Sr="function"==typeof jr?jr.toStringTag:"";var Or=X()?function(r){var t,n,e;if(null==r)return wr.call(r);n=r[Sr],t=Y(r,Sr);try{r[Sr]=void 0}catch(t){return wr.call(r)}return e=wr.call(r),t?r[Sr]=n:delete r[Sr],e}:function(r){return wr.call(r)};var Ar=Array.isArray?Array.isArray:function(r){return"[object Array]"===Or(r)};function Er(r){return null!==r&&"object"==typeof r}function _r(r){return Er(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))}L(Er,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(U("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var n,e;if(!Ar(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(Er));var Tr=Object,Ir=/./;function Pr(r){return"boolean"==typeof r}var Fr=Object.prototype.toString;var xr="function"==typeof Symbol?Symbol:void 0,kr="function"==typeof xr?xr.toStringTag:"";var Ur=X()?function(r){var t,n,e;if(null==r)return Fr.call(r);n=r[kr],t=Y(r,kr);try{r[kr]=void 0}catch(t){return Fr.call(r)}return e=Fr.call(r),t?r[kr]=n:delete r[kr],e}:function(r){return Fr.call(r)},Vr=Boolean,Cr=Boolean.prototype.toString;var Nr=X();function $r(r){return"object"==typeof r&&(r instanceof Vr||(Nr?function(r){try{return Cr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===Ur(r)))}function Br(r){return Pr(r)||$r(r)}function Mr(){return new Function("return this;")()}L(Br,"isPrimitive",Pr),L(Br,"isObject",$r);var Rr="object"==typeof self?self:null,Gr="object"==typeof window?window:null,Lr="object"==typeof global?global:null,zr="object"==typeof globalThis?globalThis:null;var Wr=function(r){if(arguments.length){if(!Pr(r))throw new TypeError(U("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return Mr()}if(zr)return zr;if(Rr)return Rr;if(Gr)return Gr;if(Lr)return Lr;throw new Error("unexpected error. Unable to resolve global object.")}(),Xr=Wr.document&&Wr.document.childNodes,Zr=Int8Array;var Dr=Object.prototype.toString;var Yr="function"==typeof Symbol?Symbol:void 0,qr="function"==typeof Yr?Yr.toStringTag:"";var Hr=X()?function(r){var t,n,e;if(null==r)return Dr.call(r);n=r[qr],t=Y(r,qr);try{r[qr]=void 0}catch(t){return Dr.call(r)}return e=Dr.call(r),t?r[qr]=n:delete r[qr],e}:function(r){return Dr.call(r)};function Jr(){return/^\s*function\s*([^(]*)/i}var Kr=/^\s*function\s*([^(]*)/i;function Qr(r){var t,n,e;if(("Object"===(n=Hr(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=Kr.exec(e.toString()))return t[1]}return _r(r)?"Buffer":n}L(Jr,"REGEXP",Kr);var rt="function"==typeof Ir||"object"==typeof Zr||"function"==typeof Xr?function(r){return Qr(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?Qr(r).toLowerCase():t};function tt(r){return"function"===rt(r)}var nt=Object.getPrototypeOf,et=Object.prototype.toString;var ot="function"==typeof Symbol?Symbol:void 0,it="function"==typeof ot?ot.toStringTag:"";var at,ut=X()?function(r){var t,n,e;if(null==r)return et.call(r);n=r[it],t=Y(r,it);try{r[it]=void 0}catch(t){return et.call(r)}return e=et.call(r),t?r[it]=n:delete r[it],e}:function(r){return et.call(r)};at=tt(Object.getPrototypeOf)?nt:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===ut(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var ct=at;function lt(r){return null==r?null:(r=Tr(r),ct(r))}var ft=Object.prototype.toString;var pt="function"==typeof Symbol?Symbol:void 0,yt="function"==typeof pt?pt.toStringTag:"";var st=X()?function(r){var t,n,e;if(null==r)return ft.call(r);n=r[yt],t=Y(r,yt);try{r[yt]=void 0}catch(t){return ft.call(r)}return e=ft.call(r),t?r[yt]=n:delete r[yt],e}:function(r){return ft.call(r)};function vt(r){return"string"==typeof r}var gt=Object.prototype.toString;var bt="function"==typeof Symbol?Symbol:void 0,dt="function"==typeof bt?bt.toStringTag:"";var ht=X()?function(r){var t,n,e;if(null==r)return gt.call(r);n=r[dt],t=Y(r,dt);try{r[dt]=void 0}catch(t){return gt.call(r)}return e=gt.call(r),t?r[dt]=n:delete r[dt],e}:function(r){return gt.call(r)},mt=String.prototype.valueOf;var wt=X();function jt(r){return"object"==typeof r&&(r instanceof String||(wt?function(r){try{return mt.call(r),!0}catch(r){return!1}}(r):"[object String]"===ht(r)))}function St(r){return vt(r)||jt(r)}function Ot(){return/^\/((?:\\\/|[^\/])+)\/([imgy]*)$/}function At(r){return r!=r}function Et(r){return Q(r)&&At(r)}function _t(r){return ur(r)&&At(r.valueOf())}function Tt(r){return Et(r)||_t(r)}L(St,"isPrimitive",vt),L(St,"isObject",jt),L(Ot,"REGEXP",/^\/((?:\\\/|[^\/])+)\/([imgy]*)$/),L(Tt,"isPrimitive",Et),L(Tt,"isObject",_t);function It(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&yr(r.length)&&r.length>=0&&r.length<=9007199254740991}function Pt(r){return"string"==typeof r}var Ft=Object.prototype.toString;var xt="function"==typeof Symbol?Symbol:void 0,kt="function"==typeof xt?xt.toStringTag:"";var Ut=X()?function(r){var t,n,e;if(null==r)return Ft.call(r);n=r[kt],t=Y(r,kt);try{r[kt]=void 0}catch(t){return Ft.call(r)}return e=Ft.call(r),t?r[kt]=n:delete r[kt],e}:function(r){return Ft.call(r)},Vt=String.prototype.valueOf;var Ct=X();function Nt(r){return"object"==typeof r&&(r instanceof String||(Ct?function(r){try{return Vt.call(r),!0}catch(r){return!1}}(r):"[object String]"===Ut(r)))}function $t(r){return Pt(r)||Nt(r)}function Bt(r,t,n){var e,o;if(!It(r)&&!Pt(r))throw new TypeError(U("invalid argument. First argument must be an array-like object. Value: `%s`.",r));if(0===(e=r.length))return-1;if(3===arguments.length){if(!vr(n))throw new TypeError(U("invalid argument. Third argument must be an integer. Value: `%s`.",n));if(n>=0){if(n>=e)return-1;o=n}else(o=e+n)<0&&(o=0)}else o=0;if(Tt(t)){for(;o<e;o++)if(Tt(r[o]))return o}else for(;o<e;o++)if(r[o]===t)return o;return-1}function Mt(r){return Object.keys(Object(r))}L($t,"isPrimitive",Pt),L($t,"isObject",Nt);var Rt=void 0!==Object.keys,Gt=Object.prototype.toString;var Lt="function"==typeof Symbol?Symbol:void 0,zt="function"==typeof Lt?Lt.toStringTag:"";var Wt,Xt=X()?function(r){var t,n,e;if(null==r)return Gt.call(r);n=r[zt],t=Y(r,zt);try{r[zt]=void 0}catch(t){return Gt.call(r)}return e=Gt.call(r),t?r[zt]=n:delete r[zt],e}:function(r){return Gt.call(r)};function Zt(r){return"[object Arguments]"===Xt(r)}Wt=function(){return Zt(arguments)}();var Dt=Wt;function Yt(r){return"string"==typeof r}var qt=String.prototype.valueOf;var Ht=X();function Jt(r){return"object"==typeof r&&(r instanceof String||(Ht?function(r){try{return qt.call(r),!0}catch(r){return!1}}(r):"[object String]"===Xt(r)))}function Kt(r){return Yt(r)||Jt(r)}function Qt(r){return r!=r}function rn(r){return Q(r)&&Qt(r)}function tn(r){return ur(r)&&Qt(r.valueOf())}function nn(r){return rn(r)||tn(r)}L(Kt,"isPrimitive",Yt),L(Kt,"isObject",Jt),L(nn,"isPrimitive",rn),L(nn,"isObject",tn);var en=Object.prototype.propertyIsEnumerable;var on=!en.call("beep","0");var an,un=Array.isArray?Array.isArray:function(r){return"[object Array]"===Xt(r)},cn=4294967295;an=Dt?Zt:function(r){return null!==r&&"object"==typeof r&&!un(r)&&"number"==typeof r.length&&yr(r.length)&&r.length>=0&&r.length<=cn&&Y(r,"callee")&&!function(r,t){var n;return null!=r&&(!(n=en.call(r,t))&&on&&Kt(r)?!rn(t=+t)&&vr(t)&&t>=0&&t<r.length:n)}(r,"callee")};var ln=an,fn=Array.prototype.slice;function pn(r){return"string"==typeof r}var yn=Object.prototype.toString;var sn="function"==typeof Symbol?Symbol:void 0,vn="function"==typeof sn?sn.toStringTag:"";var gn=X()?function(r){var t,n,e;if(null==r)return yn.call(r);n=r[vn],t=Y(r,vn);try{r[vn]=void 0}catch(t){return yn.call(r)}return e=yn.call(r),t?r[vn]=n:delete r[vn],e}:function(r){return yn.call(r)},bn=String.prototype.valueOf;var dn=X();function hn(r){return"object"==typeof r&&(r instanceof String||(dn?function(r){try{return bn.call(r),!0}catch(r){return!1}}(r):"[object String]"===gn(r)))}function mn(r){return pn(r)||hn(r)}function wn(r){return r!=r}function jn(r){return Q(r)&&wn(r)}function Sn(r){return ur(r)&&wn(r.valueOf())}function On(r){return jn(r)||Sn(r)}L(mn,"isPrimitive",pn),L(mn,"isObject",hn),L(On,"isPrimitive",jn),L(On,"isObject",Sn);var An=Object.prototype.propertyIsEnumerable;var En=!An.call("beep","0");function _n(r,t){var n;return null!=r&&(!(n=An.call(r,t))&&En&&mn(r)?!jn(t=+t)&&vr(t)&&t>=0&&t<r.length:n)}var Tn=_n((function(){}),"prototype"),In=!_n({toString:null},"toString");function Pn(r){return r.constructor&&r.constructor.prototype===r}var Fn=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],xn="undefined"==typeof window?void 0:window;var kn=function(){var r;if("undefined"===rt(xn))return!1;for(r in xn)try{-1===Bt(Fn,r)&&Y(xn,r)&&null!==xn[r]&&"object"===rt(xn[r])&&Pn(xn[r])}catch(r){return!0}return!1}(),Un="undefined"!=typeof window;var Vn,Cn=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];Vn=Rt?function(){return 2!==(Mt(arguments)||"").length}(1,2)?function(r){return ln(r)?Mt(fn.call(r)):Mt(r)}:Mt:function(r){var t,n,e,o,i,a,u;if(o=[],ln(r)){for(u=0;u<r.length;u++)o.push(u.toString());return o}if("string"==typeof r){if(r.length>0&&!Y(r,"0"))for(u=0;u<r.length;u++)o.push(u.toString())}else{if(!1==(e="function"==typeof r)&&!Er(r))return o;n=Tn&&e}for(i in r)n&&"prototype"===i||!Y(r,i)||o.push(String(i));if(In)for(t=function(r){if(!1===Un&&!kn)return Pn(r);try{return Pn(r)}catch(r){return!1}}(r),u=0;u<Cn.length;u++)a=Cn[u],t&&"constructor"===a||!Y(r,a)||o.push(String(a));return o};var Nn=Vn,$n=void 0!==Object.getOwnPropertyNames,Bn=Object,Mn=Bn.getOwnPropertyNames;var Rn=$n?function(r){return Mn(Bn(r))}:function(r){return Nn(Bn(r))},Gn=void 0!==Object.getOwnPropertyDescriptor,Ln=Object.getOwnPropertyDescriptor;var zn=Gn?function(r,t){var n;return null==r||void 0===(n=Ln(r,t))?null:n}:function(r,t){return Y(r,t)?{configurable:!0,enumerable:!0,writable:!0,value:r[t]}:null},Wn="function"==typeof Object.defineProperty?Object.defineProperty:null;var Xn,Zn=Object.defineProperty,Dn=Object.prototype,Yn=Dn.toString,qn=Dn.__defineGetter__,Hn=Dn.__defineSetter__,Jn=Dn.__lookupGetter__,Kn=Dn.__lookupSetter__;Xn=function(){try{return Wn({},"x",{}),!0}catch(r){return!1}}()?Zn:function(r,t,n){var e,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===Yn.call(r))throw new TypeError(U("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===Yn.call(n))throw new TypeError(U("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((o="value"in n)&&(Jn.call(r,t)||Kn.call(r,t)?(e=r.__proto__,r.__proto__=Dn,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),i="get"in n,a="set"in n,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&qn&&qn.call(r,t,n.get),a&&Hn&&Hn.call(r,t,n.set),r};var Qn=Xn,re="function"==typeof Buffer?Buffer:null;var te,ne=r.Buffer;te=function(){var r,t;if("function"!=typeof re)return!1;try{r=_r(t="function"==typeof re.from?re.from([1,2,3,4]):new re([1,2,3,4]))&&1===t[0]&&2===t[1]&&3===t[2]&&4===t[3]}catch(t){r=!1}return r}()?ne:function(){throw new Error("not implemented")};var ee=te;var oe=tt(ee.from)?function(r){if(!_r(r))throw new TypeError(U("invalid argument. Must provide a Buffer. Value: `%s`.",r));return ee.from(r)}:function(r){if(!_r(r))throw new TypeError(U("invalid argument. Must provide a Buffer. Value: `%s`.",r));return new ee(r)},ie=Object.prototype.toString;var ae="function"==typeof Symbol?Symbol:void 0,ue="function"==typeof ae?ae.toStringTag:"";var ce=X()?function(r){var t,n,e;if(null==r)return ie.call(r);n=r[ue],t=Y(r,ue);try{r[ue]=void 0}catch(t){return ie.call(r)}return e=ie.call(r),t?r[ue]=n:delete r[ue],e}:function(r){return ie.call(r)},le="function"==typeof Int8Array;var fe="function"==typeof Int8Array?Int8Array:null;var pe,ye="function"==typeof Int8Array?Int8Array:void 0;pe=function(){var r,t,n;if("function"!=typeof fe)return!1;try{t=new fe([1,3.14,-3.14,128]),n=t,r=(le&&n instanceof Int8Array||"[object Int8Array]"===ce(n))&&1===t[0]&&3===t[1]&&-3===t[2]&&-128===t[3]}catch(t){r=!1}return r}()?ye:function(){throw new Error("not implemented")};var se=pe,ve=Object.prototype.toString;var ge="function"==typeof Symbol?Symbol:void 0,be="function"==typeof ge?ge.toStringTag:"";var de=X()?function(r){var t,n,e;if(null==r)return ve.call(r);n=r[be],t=Y(r,be);try{r[be]=void 0}catch(t){return ve.call(r)}return e=ve.call(r),t?r[be]=n:delete r[be],e}:function(r){return ve.call(r)},he="function"==typeof Uint8Array;var me="function"==typeof Uint8Array?Uint8Array:null;var we,je="function"==typeof Uint8Array?Uint8Array:void 0;we=function(){var r,t,n;if("function"!=typeof me)return!1;try{t=new me(t=[1,3.14,-3.14,256,257]),n=t,r=(he&&n instanceof Uint8Array||"[object Uint8Array]"===de(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?je:function(){throw new Error("not implemented")};var Se=we,Oe=z();var Ae=Object.prototype.toString;var Ee="function"==typeof Symbol?Symbol:void 0,_e="function"==typeof Ee?Ee.toStringTag:"";var Te=Oe&&"symbol"==typeof Symbol.toStringTag?function(r){var t,n,e;if(null==r)return Ae.call(r);n=r[_e],t=Y(r,_e);try{r[_e]=void 0}catch(t){return Ae.call(r)}return e=Ae.call(r),t?r[_e]=n:delete r[_e],e}:function(r){return Ae.call(r)},Ie="function"==typeof Uint8ClampedArray;var Pe="function"==typeof Uint8ClampedArray?Uint8ClampedArray:null;var Fe,xe="function"==typeof Uint8ClampedArray?Uint8ClampedArray:void 0;Fe=function(){var r,t,n;if("function"!=typeof Pe)return!1;try{t=new Pe([-1,0,1,3.14,4.99,255,256]),n=t,r=(Ie&&n instanceof Uint8ClampedArray||"[object Uint8ClampedArray]"===Te(n))&&0===t[0]&&0===t[1]&&1===t[2]&&3===t[3]&&5===t[4]&&255===t[5]&&255===t[6]}catch(t){r=!1}return r}()?xe:function(){throw new Error("not implemented")};var ke=Fe,Ue=Object.prototype.toString;var Ve="function"==typeof Symbol?Symbol:void 0,Ce="function"==typeof Ve?Ve.toStringTag:"";var Ne=X()?function(r){var t,n,e;if(null==r)return Ue.call(r);n=r[Ce],t=Y(r,Ce);try{r[Ce]=void 0}catch(t){return Ue.call(r)}return e=Ue.call(r),t?r[Ce]=n:delete r[Ce],e}:function(r){return Ue.call(r)},$e="function"==typeof Int16Array;var Be="function"==typeof Int16Array?Int16Array:null;var Me,Re="function"==typeof Int16Array?Int16Array:void 0;Me=function(){var r,t,n;if("function"!=typeof Be)return!1;try{t=new Be([1,3.14,-3.14,32768]),n=t,r=($e&&n instanceof Int16Array||"[object Int16Array]"===Ne(n))&&1===t[0]&&3===t[1]&&-3===t[2]&&-32768===t[3]}catch(t){r=!1}return r}()?Re:function(){throw new Error("not implemented")};var Ge=Me,Le=Object.prototype.toString;var ze="function"==typeof Symbol?Symbol:void 0,We="function"==typeof ze?ze.toStringTag:"";var Xe=X()?function(r){var t,n,e;if(null==r)return Le.call(r);n=r[We],t=Y(r,We);try{r[We]=void 0}catch(t){return Le.call(r)}return e=Le.call(r),t?r[We]=n:delete r[We],e}:function(r){return Le.call(r)},Ze="function"==typeof Uint16Array;var De="function"==typeof Uint16Array?Uint16Array:null;var Ye,qe="function"==typeof Uint16Array?Uint16Array:void 0;Ye=function(){var r,t,n;if("function"!=typeof De)return!1;try{t=new De(t=[1,3.14,-3.14,65536,65537]),n=t,r=(Ze&&n instanceof Uint16Array||"[object Uint16Array]"===Xe(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?qe:function(){throw new Error("not implemented")};var He=Ye,Je=Object.prototype.toString;var Ke="function"==typeof Symbol?Symbol:void 0,Qe="function"==typeof Ke?Ke.toStringTag:"";var ro=X()?function(r){var t,n,e;if(null==r)return Je.call(r);n=r[Qe],t=Y(r,Qe);try{r[Qe]=void 0}catch(t){return Je.call(r)}return e=Je.call(r),t?r[Qe]=n:delete r[Qe],e}:function(r){return Je.call(r)},to="function"==typeof Int32Array;var no="function"==typeof Int32Array?Int32Array:null;var eo,oo="function"==typeof Int32Array?Int32Array:void 0;eo=function(){var r,t,n;if("function"!=typeof no)return!1;try{t=new no([1,3.14,-3.14,2147483648]),n=t,r=(to&&n instanceof Int32Array||"[object Int32Array]"===ro(n))&&1===t[0]&&3===t[1]&&-3===t[2]&&-2147483648===t[3]}catch(t){r=!1}return r}()?oo:function(){throw new Error("not implemented")};var io=eo,ao=Object.prototype.toString;var uo="function"==typeof Symbol?Symbol:void 0,co="function"==typeof uo?uo.toStringTag:"";var lo=X()?function(r){var t,n,e;if(null==r)return ao.call(r);n=r[co],t=Y(r,co);try{r[co]=void 0}catch(t){return ao.call(r)}return e=ao.call(r),t?r[co]=n:delete r[co],e}:function(r){return ao.call(r)},fo="function"==typeof Uint32Array;var po="function"==typeof Uint32Array?Uint32Array:null;var yo,so="function"==typeof Uint32Array?Uint32Array:void 0;yo=function(){var r,t,n;if("function"!=typeof po)return!1;try{t=new po(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(fo&&n instanceof Uint32Array||"[object Uint32Array]"===lo(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?so:function(){throw new Error("not implemented")};var vo=yo,go=Object.prototype.toString;var bo="function"==typeof Symbol?Symbol:void 0,ho="function"==typeof bo?bo.toStringTag:"";var mo=X()?function(r){var t,n,e;if(null==r)return go.call(r);n=r[ho],t=Y(r,ho);try{r[ho]=void 0}catch(t){return go.call(r)}return e=go.call(r),t?r[ho]=n:delete r[ho],e}:function(r){return go.call(r)},wo="function"==typeof Float32Array;var jo="function"==typeof Float32Array?Float32Array:null;var So,Oo="function"==typeof Float32Array?Float32Array:void 0;So=function(){var r,t,n;if("function"!=typeof jo)return!1;try{t=new jo([1,3.14,-3.14,5e40]),n=t,r=(wo&&n instanceof Float32Array||"[object Float32Array]"===mo(n))&&1===t[0]&&3.140000104904175===t[1]&&-3.140000104904175===t[2]&&t[3]===lr}catch(t){r=!1}return r}()?Oo:function(){throw new Error("not implemented")};var Ao=So,Eo="function"==typeof Float64Array;var _o="function"==typeof Float64Array?Float64Array:null;var To,Io="function"==typeof Float64Array?Float64Array:void 0;To=function(){var r,t,n;if("function"!=typeof _o)return!1;try{t=new _o([1,3.14,-3.14,NaN]),n=t,r=(Eo&&n instanceof Float64Array||"[object Float64Array]"===J(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?Io:function(){throw new Error("not implemented")};var Po=To;function Fo(r){return new se(r)}function xo(r){return new Se(r)}function ko(r){return new ke(r)}function Uo(r){return new Ge(r)}function Vo(r){return new He(r)}function Co(r){return new io(r)}function No(r){return new vo(r)}function $o(r){return new Ao(r)}function Bo(r){return new Po(r)}var Mo={int8array:Fo,uint8array:xo,uint8clampedarray:ko,int16array:Uo,uint16array:Vo,int32array:Co,uint32array:No,float32array:$o,float64array:Bo};function Ro(r,t,n,e,o){var i,a,u,c,l,f,p,y,s,v;if(o-=1,"object"!=typeof r||null===r)return r;if(_r(r))return oe(r);if(function(r){if("object"!=typeof r||null===r)return!1;if(r instanceof Error)return!0;for(;r;){if("[object Error]"===st(r))return!0;r=lt(r)}return!1}(r))return function(r){var t,n,e,o,i,a,u=[],c=[];for(i=new r.constructor(r.message),u.push(r),c.push(i),r.stack&&(i.stack=r.stack),r.code&&(i.code=r.code),r.errno&&(i.errno=r.errno),r.syscall&&(i.syscall=r.syscall),t=Nn(r),a=0;a<t.length;a++)o=t[a],Y(n=zn(r,o),"value")&&(e=K(r[o])?[]:{},n.value=Ro(r[o],e,u,c,-1)),Qn(i,o,n);return i}(r);if("date"===(u=rt(r)))return new Date(+r);if("regexp"===u)return function(r){if(!vt(r))throw new TypeError(U("invalid argument. Must provide a regular expression string. Value: `%s`.",r));return(r=/^\/((?:\\\/|[^\/])+)\/([imgy]*)$/.exec(r))?new RegExp(r[1],r[2]):null}(r.toString());if("set"===u)return new Set(r);if("map"===u)return new Map(r);if("string"===u||"boolean"===u||"number"===u)return r.valueOf();if(l=Mo[u])return l(r);if("array"!==u&&"object"!==u)return"function"==typeof Object.freeze?function(r){var t,n,e,o,i,a,u,c;for(t=[],o=[],u=Object.create(lt(r)),t.push(r),o.push(u),n=Rn(r),c=0;c<n.length;c++)e=n[c],Y(i=zn(r,e),"value")&&(a=K(r[e])?[]:{},i.value=Ro(r[e],a,t,o,-1)),Qn(u,e,i);return Object.isExtensible(r)||Object.preventExtensions(u),Object.isSealed(r)&&Object.seal(u),Object.isFrozen(r)&&Object.freeze(u),u}(r):{};if(a=Nn(r),o>0)for(i=u,v=0;v<a.length;v++)y=r[f=a[v]],u=rt(y),"object"!=typeof y||null===y||"array"!==u&&"object"!==u||_r(y)?"object"===i?(Y(c=zn(r,f),"value")&&(c.value=Ro(y)),Qn(t,f,c)):t[f]=Ro(y):-1===(s=Bt(n,y))?(p=K(y)?new Array(y.length):{},n.push(y),e.push(p),"array"===i?t[f]=Ro(y,p,n,e,o):(Y(c=zn(r,f),"value")&&(c.value=Ro(y,p,n,e,o)),Qn(t,f,c))):t[f]=e[s];else if("array"===u)for(v=0;v<a.length;v++)t[f=a[v]]=r[f];else for(v=0;v<a.length;v++)f=a[v],c=zn(r,f),Qn(t,f,c);return Object.isExtensible(r)||Object.preventExtensions(t),Object.isSealed(r)&&Object.seal(t),Object.isFrozen(r)&&Object.freeze(t),t}function Go(r,t){var n;if(arguments.length>1){if(!dr(t))throw new TypeError(U("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",t));if(0===t)return r}else t=lr;return Ro(r,n=K(r)?new Array(r.length):{},[r],[n],t)}var Lo=4294967295;function zo(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&yr(r.length)&&r.length>=0&&r.length<=Lo}var Wo=!1,Xo=17976931348623157e292,Zo=Object.prototype.toString;var Do="function"==typeof Symbol?Symbol:void 0,Yo="function"==typeof Do?Do.toStringTag:"";var qo=X()?function(r){var t,n,e;if(null==r)return Zo.call(r);n=r[Yo],t=Y(r,Yo);try{r[Yo]=void 0}catch(t){return Zo.call(r)}return e=Zo.call(r),t?r[Yo]=n:delete r[Yo],e}:function(r){return Zo.call(r)};var Ho=Array.isArray?Array.isArray:function(r){return"[object Array]"===qo(r)};var Jo=Object.prototype.toString;var Ko="function"==typeof Symbol?Symbol:void 0,Qo="function"==typeof Ko?Ko.toStringTag:"";var ri=X()?function(r){var t,n,e;if(null==r)return Jo.call(r);n=r[Qo],t=Y(r,Qo);try{r[Qo]=void 0}catch(t){return Jo.call(r)}return e=Jo.call(r),t?r[Qo]=n:delete r[Qo],e}:function(r){return Jo.call(r)},ti=Object.prototype;function ni(r){var t;return!!function(r){return"object"==typeof r&&null!==r&&!Ho(r)}(r)&&(!(t=lt(r))||!Y(r,"constructor")&&Y(t,"constructor")&&tt(t.constructor)&&"[object Function]"===ri(t.constructor)&&Y(t,"isPrototypeOf")&&tt(t.isPrototypeOf)&&(t===ti||function(r){var t;for(t in r)if(!Y(r,t))return!1;return!0}(r)))}function ei(r,t){return ni(t)?Y(t,"depth")&&(r.depth=t.depth,!dr(r.depth))?new TypeError(U("invalid option. `%s` option must be a nonnegative integer. Option: `%s`.","depth",r.depth)):Y(t,"copy")&&(r.copy=t.copy,!Pr(r.copy))?new TypeError(U("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy)):null:new TypeError(U("invalid argument. Options argument must be an object. Value: `%s`.",t))}function oi(r,t,n){var e,o;for(o=0;o<t.length;o++)e=t[o],n&&zo(e)?oi(r,e,n-1):r.push(e);return r}function ii(r,t){var n,e,o;if(!zo(r))throw new TypeError(U("invalid argument. First argument must be an array-like object. Value: `%s`.",r));if(n={copy:Wo,depth:Xo},arguments.length>1&&(e=ei(n,t)))throw e;return o=0===n.depth?r:oi([],r,n.depth),n.copy?Go(o):o}function ai(r){return vr(r)&&r>0}function ui(r){return gr(r)&&r.valueOf()>0}function ci(r){return ai(r)||ui(r)}function li(r){if("function"!=typeof r)throw new TypeError(U("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var n,e;if(!function(r){return null!=r&&"function"!=typeof r&&"number"==typeof r.length&&yr(r.length)&&r.length>=0&&r.length<=Lo}(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}L(ci,"isPrimitive",ai),L(ci,"isObject",ui);var fi=li(ci.isPrimitive),pi=li(ci.isObject),yi=li(ci);L(yi,"primitives",fi),L(yi,"objects",pi);var si=Function;function vi(r){var t,n,e,o;for(e="return function flattenArray(x){",n=(t=r.length)-1,e+="var o=[];var ",o=0;o<t;o++)e+="i"+o,e+=o<n?",":";";for(o=0;o<t;o++)e+="for(i"+o+"=0;i"+o+"<"+r[o]+";i"+o+"++){";for(e+="o.push(x",o=0;o<t;o++)e+="[i"+o+"]";for(e+=");",o=0;o<t;o++)e+="}";return e+="return o;",e+="}",new si(e+="//# sourceURL=flatten_array.gen_fcn.js")()}function gi(r){return function(t){if(!zo(t))throw new TypeError(U("invalid argument. Must provide an array-like object. Value: `%s`.",t));return r(t)}}function bi(r){return function(t){if(!zo(t))throw new TypeError(U("invalid argument. Must provide an array-like object. Value: `%s`.",t));return Go(r(t))}}return L(ii,"factory",(function(r,t){var n,e;if(!fi(r))throw new TypeError(U("invalid argument. First argument must be an array of positive integers. Value: `%s`.",r));if(n=Wo,arguments.length>1){if(!ni(t))throw new TypeError(U("invalid argument. Options argument must be an object. Value: `%s`.",t));if(Y(t,"copy")&&!Pr(n=t.copy))throw new TypeError(U("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n))}return e=vi(r),n?bi(e):gi(e)})),ii}));
//# sourceMappingURL=index.js.map
