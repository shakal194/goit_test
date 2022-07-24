"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[566],{6373:function(e,t,n){n.d(t,{g4:function(){return o}});var r=n(2791),i=function(){return i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},i.apply(this,arguments)},a=function(e){return{display:e?"flex":"none"}},o=function(e){var t=e.height,n=void 0===t?80:t,o=e.width,u=void 0===o?80:o,c=e.radius,l=void 0===c?9:c,f=e.color,s=void 0===f?"green":f,p=e.ariaLabel,v=void 0===p?"three-dots-loading":p,d=e.wrapperStyle,m=e.wrapperClass,y=e.visible,g=void 0===y||y;return r.createElement("div",{style:i(i({},a(g)),d),className:m,"data-testid":"three-dots-loading"},r.createElement("svg",{width:u,height:n,viewBox:"0 0 120 30",xmlns:"http://www.w3.org/2000/svg",fill:s,"aria-label":v,"data-testid":"three-dots-svg"},r.createElement("circle",{cx:"15",cy:"15",r:Number(l)+6},r.createElement("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),r.createElement("animate",{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"})),r.createElement("circle",{cx:"60",cy:"15",r:l,attributeName:"fill-opacity",from:"1",to:"0.3"},r.createElement("animate",{attributeName:"r",from:"9",to:"9",begin:"0s",dur:"0.8s",values:"9;15;9",calcMode:"linear",repeatCount:"indefinite"}),r.createElement("animate",{attributeName:"fill-opacity",from:"0.5",to:"0.5",begin:"0s",dur:"0.8s",values:".5;1;.5",calcMode:"linear",repeatCount:"indefinite"})),r.createElement("circle",{cx:"105",cy:"15",r:Number(l)+6},r.createElement("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),r.createElement("animate",{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"}))))}},6916:function(e,t,n){n.d(t,{P1:function(){return c}});var r="NOT_FOUND";var i=function(e,t){return e===t};function a(e,t){var n="object"===typeof t?t:{equalityCheck:t},a=n.equalityCheck,o=void 0===a?i:a,u=n.maxSize,c=void 0===u?1:u,l=n.resultEqualityCheck,f=function(e){return function(t,n){if(null===t||null===n||t.length!==n.length)return!1;for(var r=t.length,i=0;i<r;i++)if(!e(t[i],n[i]))return!1;return!0}}(o),s=1===c?function(e){var t;return{get:function(n){return t&&e(t.key,n)?t.value:r},put:function(e,n){t={key:e,value:n}},getEntries:function(){return t?[t]:[]},clear:function(){t=void 0}}}(f):function(e,t){var n=[];function i(e){var i=n.findIndex((function(n){return t(e,n.key)}));if(i>-1){var a=n[i];return i>0&&(n.splice(i,1),n.unshift(a)),a.value}return r}return{get:i,put:function(t,a){i(t)===r&&(n.unshift({key:t,value:a}),n.length>e&&n.pop())},getEntries:function(){return n},clear:function(){n=[]}}}(c,f);function p(){var t=s.get(arguments);if(t===r){if(t=e.apply(null,arguments),l){var n=s.getEntries(),i=n.find((function(e){return l(e.value,t)}));i&&(t=i.value)}s.put(arguments,t)}return t}return p.clearCache=function(){return s.clear()},p}function o(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every((function(e){return"function"===typeof e}))){var n=t.map((function(e){return"function"===typeof e?"function "+(e.name||"unnamed")+"()":typeof e})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+n+"]")}return t}function u(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=function(){for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];var a,u=0,c={memoizeOptions:void 0},l=r.pop();if("object"===typeof l&&(c=l,l=r.pop()),"function"!==typeof l)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof l+"]");var f=c,s=f.memoizeOptions,p=void 0===s?n:s,v=Array.isArray(p)?p:[p],d=o(r),m=e.apply(void 0,[function(){return u++,l.apply(null,arguments)}].concat(v)),y=e((function(){for(var e=[],t=d.length,n=0;n<t;n++)e.push(d[n].apply(null,arguments));return a=m.apply(null,e)}));return Object.assign(y,{resultFunc:l,memoizedResultFunc:m,dependencies:d,lastResult:function(){return a},recomputations:function(){return u},resetRecomputations:function(){return u=0}}),y};return i}var c=u(a)},3158:function(){},5984:function(e,t,n){n.d(t,{x0:function(){return r}});var r=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,t="",n=crypto.getRandomValues(new Uint8Array(e));e--;){var r=63&n[e];t+=r<36?r.toString(36):r<62?(r-26).toString(36).toUpperCase():r<63?"_":"-"}return t}}}]);
//# sourceMappingURL=566.9e61f145.chunk.js.map