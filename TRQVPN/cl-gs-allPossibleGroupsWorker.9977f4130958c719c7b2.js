"use strict";(self.webpackChunkdraw=self.webpackChunkdraw||[]).push([[1839],{49283:(n,e,t)=>{const s=t(32875),r=(n,e,t)=>n.map(((n,e)=>e)).filter((s=>t(e,n,s)));function o(n,e,t,a,i){const c=e.slice(),u=c[a];return c[a]=[t,...u],function(n,e,t){const a=n.findIndex(s.default);if(a<0)return!0;const i=n.slice(),[c,...u]=i[a];return i[a]=u,r(e,c,t).some((n=>o(i,e,c,n,t)))}(n,c,i)}e.UR=(n,e,t,s)=>r(e,t,s).filter((r=>o(n,e,t,r,s))),e.up=(n,e,t,s)=>r(e,t,s).find((r=>o(n,e,t,r,s)))},97532:(n,e,t)=>{t.d(e,{Z:()=>c});var s=t(73303),r=t(16746);var o=t(76303);const a=new Set(["Kazakhstan","Russia","Belarus","Lithuania","Latvia","Estonia","Norway","Finland","Sweden","Iceland","Faroe Islands"]);function i(n,e){const t=e-(e>>1),r=n=>a.has(n.country),o=n=>r(n)?1:0;return n=>s(n,o)<=t}const c=(n,e)=>{const t=(0,o.Z)(n),s=i(0,e);return(n,e,o)=>{const a=e[o],i=(0,r.Z)(e);var c;return!(a.length>i||a.some((c=n.country,n=>n.country===c))||a.some(t(n))||!s([...a,n])||n.pairing&&((n,e)=>{const t=n.length>>1,s=e<t?0:t;return n.slice(s,s+t)})(e,o).some(function(n){const e=function(n){const{id:e}=n;return n=>n.id===e}(n);return n=>n.some(e)}(n.pairing)))}}},76303:(n,e,t)=>{t.d(e,{Z:()=>d});var s=t(95062),r=t(97527);const o=[{countries:["Russia","Ukraine"],predicate:(a=2014,i=Number.MAX_SAFE_INTEGER,n=>n>=a&&n<=i)},{countries:["Azerbaijan","Armenia"]},{countries:["Serbia","Kosovo"]},{countries:["Bosnia & Herzegovina","Kosovo"]},{countries:["Spain","Gibraltar"]}];var a,i;const c={predicate:r},u=o.map((n=>({...c,...n}))),d=n=>{const e=(n=>{const e=new Map;for(const{countries:t,predicate:s}of u)s(n)&&(e.set(t[0],t[1]),e.set(t[1],t[0]));return e.get.bind(e)})(n);return n=>{const t=e(n.country);return void 0===t?s:n=>n.country===t}}},14069:(n,e,t)=>{t.r(e);var s=t(30845),r=t(49283),o=t(97532);const a=([n,e])=>JSON.stringify({year:n,groupSize:e}),i=(0,s.Z)(o.Z,((n,e)=>a(n)===a(e)));addEventListener("message",(n=>{const{messageId:e,data:{season:t,pots:s,groups:o,selectedTeam:a}}=n.data,c=i(t,s.length),u=(0,r.UR)(s,o,a,c);postMessage({messageId:e,data:{possibleGroups:u}})}))}}]);