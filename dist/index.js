"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var logger=function(e,t){console.group("Logger"),console.log("State:",JSON.stringify(e,null,2)),console.log("New State",JSON.stringify(t,null,2)),console.groupEnd()},observable=function(e,n){return new Proxy(e,{set:function(t,e,r){var o=Object.assign({},t);return Reflect.set(t,e,r),n.forEach(function(e){if("function"!=typeof e)throw new Error("Listener must be a function!");e(o,t)}),{name:e,value:r}}})},store=function(){for(var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length,r=new Array(1<t?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];var n=observable(e,r);return{getStore:function(){return Object.assign({},n)},setStore:function(t){return Object.keys(t).forEach(function(e){Reflect.set(n,e,t[e])}),Object.assign({},n,t)}}};exports.logger=logger,exports.createStore=store;
//# sourceMappingURL=index.js.map