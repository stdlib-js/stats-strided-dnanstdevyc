"use strict";var i=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var t=i(function(w,u){
var p=require('@stdlib/stats-strided-dnanvarianceyc/dist').ndarray,x=require('@stdlib/math-base-special-sqrt/dist');function j(e,r,a,n,f){return x(p(e,r,a,n,f))}u.exports=j
});var d=i(function(z,v){
var m=require('@stdlib/strided-base-stride2offset/dist'),l=t();function R(e,r,a,n){return l(e,r,a,n,m(e,n))}v.exports=R
});var y=i(function(A,c){
var _=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=d(),E=t();_(q,"ndarray",E);c.exports=q
});var O=require("path").join,b=require('@stdlib/utils-try-require/dist'),g=require('@stdlib/assert-is-error/dist'),h=y(),s,o=b(O(__dirname,"./native.js"));g(o)?s=h:s=o;module.exports=s;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
