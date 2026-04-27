"use strict";var n=function(t,r){return function(){return r||t((r={exports:{}}).exports,r),r.exports}};var u=n(function(sr,v){
var F=require('@stdlib/constants-float64-max/dist'),k={copy:!1,depth:F};v.exports=k
});var p=n(function(vr,f){
var L=require('@stdlib/assert-is-plain-object/dist'),c=require('@stdlib/assert-has-own-property/dist'),P=require('@stdlib/assert-is-boolean/dist').isPrimitive,V=require('@stdlib/assert-is-nonnegative-integer/dist').isPrimitive,o=require('@stdlib/error-tools-fmtprodmsg/dist');function M(t,r){return L(r)?c(r,"depth")&&(t.depth=r.depth,!V(t.depth))?new TypeError(o('1Tr2t',"depth",t.depth)):c(r,"copy")&&(t.copy=r.copy,!P(t.copy))?new TypeError(o('1Tr2o',"copy",t.copy)):null:new TypeError(o('1Tr2V',r));}f.exports=M
});var q=n(function(cr,y){
var _=require('@stdlib/assert-is-array-like-object/dist');function l(t,r,a){var i,e;for(e=0;e<r.length;e++)i=r[e],a&&_(i)?l(t,i,a-1):t.push(i);return t}y.exports=l
});var h=n(function(fr,g){
var B=require('@stdlib/utils-copy/dist'),I=require('@stdlib/assert-is-array-like-object/dist'),N=require('@stdlib/error-tools-fmtprodmsg/dist'),m=u(),R=p(),C=q();function G(t,r){var a,i,e;if(!I(t))throw new TypeError(N('1Tr2O',t));if(a={copy:m.copy,depth:m.depth},arguments.length>1&&(i=R(a,r),i))throw i;return a.depth===0?e=t:e=C([],t,a.depth),a.copy?B(e):e}g.exports=G
});var w=n(function(pr,d){
var U=require('@stdlib/function-ctor/dist');function X(t){var r,a,i,e;for(i="return function flattenArray(x){",r=t.length,a=r-1,i+="var o=[];var ",e=0;e<r;e++)i+="i"+e,e<a?i+=",":i+=";";for(e=0;e<r;e++)i+="for(i"+e+"=0;i"+e+"<"+t[e]+";i"+e+"++){";for(i+="o.push(x",e=0;e<r;e++)i+="[i"+e+"]";for(i+=");",e=0;e<r;e++)i+="}";return i+="return o;",i+="}",i+="//# sourceURL=flatten_array.gen_fcn.js",new U(i)()}d.exports=X
});var O=n(function(lr,b){
var z=require('@stdlib/assert-is-array-like-object/dist'),D=require('@stdlib/error-tools-fmtprodmsg/dist');function H(t){return r;function r(a){if(!z(a))throw new TypeError(D('1Tr2u',a));return t(a)}}b.exports=H
});var x=n(function(yr,j){
var J=require('@stdlib/assert-is-array-like-object/dist'),K=require('@stdlib/error-tools-fmtprodmsg/dist'),Q=require('@stdlib/utils-copy/dist');function S(t){return r;function r(a){if(!J(a))throw new TypeError(K('1Tr2u',a));return Q(t(a))}}j.exports=S
});var T=n(function(qr,A){
var W=require('@stdlib/assert-is-positive-integer-array/dist').primitives,Y=require('@stdlib/assert-is-plain-object/dist'),Z=require('@stdlib/assert-has-own-property/dist'),$=require('@stdlib/assert-is-boolean/dist').isPrimitive,s=require('@stdlib/error-tools-fmtprodmsg/dist'),rr=u(),er=w(),tr=O(),ir=x();function ar(t,r){var a,i;if(!W(t))throw new TypeError(s('1TrB9',t));if(a=rr.copy,arguments.length>1){if(!Y(r))throw new TypeError(s('1Tr2V',r));if(Z(r,"copy")&&(a=r.copy,!$(a)))throw new TypeError(s('1Tr2o',"copy",a))}return i=er(t),a?ir(i):tr(i)}A.exports=ar
});var nr=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),E=h(),ur=T();nr(E,"factory",ur);module.exports=E;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
