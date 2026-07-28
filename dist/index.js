"use strict";var n=function(t,r){return function(){try{return r||t((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var u=n(function(sr,v){
var F=require('@stdlib/constants-float64-max/dist'),k={copy:!1,depth:F};v.exports=k
});var p=n(function(vr,f){
var L=require('@stdlib/assert-is-plain-object/dist'),c=require('@stdlib/assert-has-own-property/dist'),P=require('@stdlib/assert-is-boolean/dist').isPrimitive,V=require('@stdlib/assert-is-nonnegative-integer/dist').isPrimitive,o=require('@stdlib/error-tools-fmtprodmsg/dist');function M(t,r){return L(r)?c(r,"depth")&&(t.depth=r.depth,!V(t.depth))?new TypeError(o('1Tr2t',"depth",t.depth)):c(r,"copy")&&(t.copy=r.copy,!P(t.copy))?new TypeError(o('1Tr2o',"copy",t.copy)):null:new TypeError(o('1Tr2V',r));}f.exports=M
});var q=n(function(cr,y){
var _=require('@stdlib/assert-is-array-like-object/dist');function l(t,r,i){var a,e;for(e=0;e<r.length;e++)a=r[e],i&&_(a)?l(t,a,i-1):t.push(a);return t}y.exports=l
});var h=n(function(fr,g){
var B=require('@stdlib/utils-copy/dist'),I=require('@stdlib/assert-is-array-like-object/dist'),N=require('@stdlib/error-tools-fmtprodmsg/dist'),m=u(),R=p(),C=q();function G(t,r){var i,a,e;if(!I(t))throw new TypeError(N('1Tr2O',t));if(i={copy:m.copy,depth:m.depth},arguments.length>1&&(a=R(i,r),a))throw a;return i.depth===0?e=t:e=C([],t,i.depth),i.copy?B(e):e}g.exports=G
});var w=n(function(pr,d){
var U=require('@stdlib/function-ctor/dist');function X(t){var r,i,a,e;for(a="return function flattenArray(x){",r=t.length,i=r-1,a+="var o=[];var ",e=0;e<r;e++)a+="i"+e,e<i?a+=",":a+=";";for(e=0;e<r;e++)a+="for(i"+e+"=0;i"+e+"<"+t[e]+";i"+e+"++){";for(a+="o.push(x",e=0;e<r;e++)a+="[i"+e+"]";for(a+=");",e=0;e<r;e++)a+="}";return a+="return o;",a+="}",a+="//# sourceURL=flatten_array.gen_fcn.js",new U(a)()}d.exports=X
});var O=n(function(lr,b){
var z=require('@stdlib/assert-is-array-like-object/dist'),D=require('@stdlib/error-tools-fmtprodmsg/dist');function H(t){return r;function r(i){if(!z(i))throw new TypeError(D('1Tr2u',i));return t(i)}}b.exports=H
});var x=n(function(yr,j){
var J=require('@stdlib/assert-is-array-like-object/dist'),K=require('@stdlib/error-tools-fmtprodmsg/dist'),Q=require('@stdlib/utils-copy/dist');function S(t){return r;function r(i){if(!J(i))throw new TypeError(K('1Tr2u',i));return Q(t(i))}}j.exports=S
});var T=n(function(qr,A){
var W=require('@stdlib/assert-is-positive-integer-array/dist').primitives,Y=require('@stdlib/assert-is-plain-object/dist'),Z=require('@stdlib/assert-has-own-property/dist'),$=require('@stdlib/assert-is-boolean/dist').isPrimitive,s=require('@stdlib/error-tools-fmtprodmsg/dist'),rr=u(),er=w(),tr=O(),ir=x();function ar(t,r){var i,a;if(!W(t))throw new TypeError(s('1TrB9',t));if(i=rr.copy,arguments.length>1){if(!Y(r))throw new TypeError(s('1Tr2V',r));if(Z(r,"copy")&&(i=r.copy,!$(i)))throw new TypeError(s('1Tr2o',"copy",i))}return a=er(t),i?ir(a):tr(a)}A.exports=ar
});var nr=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),E=h(),ur=T();nr(E,"factory",ur);module.exports=E;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
