(self.webpackChunkdraw=self.webpackChunkdraw||[]).push([[425],{95062:t=>{t.exports=function(){return!1}},30845:(t,r,n)=>{"use strict";n.d(r,{Z:()=>a});var e=Number.isNaN||function(t){return"number"==typeof t&&t!=t};function s(t,r){if(t.length!==r.length)return!1;for(var n=0;n<t.length;n++)if(s=t[n],a=r[n],!(s===a||e(s)&&e(a)))return!1;var s,a;return!0}function a(t,r){void 0===r&&(r=s);var n=null;function e(){for(var e=[],s=0;s<arguments.length;s++)e[s]=arguments[s];if(n&&n.lastThis===this&&r(e,n.lastArgs))return n.lastResult;var a=t.apply(this,e);return n={lastResult:a,lastArgs:e,lastThis:this},a}return e.clear=function(){n=null},e}},62311:(t,r,n)=>{"use strict";function e(t,[r,n],s,a){const o=s.findIndex((t=>1===t.length));if(!a(t,s,o))return!1;const i=[...s],u=i[o][0];i[o]=[u,t];return o+1===i.length||function([t,r],n,s){const a=n.findIndex((t=>!t.length)),[o,...i]=r,u=[...n];return u[a]=[o],t.some((r=>e(r,[t,i],u,s)))}([r.filter((r=>r!==t)),n],i,a)}n.d(r,{Z:()=>s});const s=([t,r],n,s)=>t.map(((t,r)=>r)).filter((a=>e(t[a],[t,r],n,s)))},60402:(t,r,n)=>{"use strict";n.d(r,{Z:()=>s});var e=n(76303);const s=t=>{const r=(0,e.Z)(t),n=(t,n)=>{return 0===t.length||1===t.length&&(e=n,s=t[0],e.country!==s.country&&e.group!==s.group&&!r(e)(s));var e,s};return(t,r,e)=>n(r[e],t)}},76303:(t,r,n)=>{"use strict";n.d(r,{Z:()=>l});var e=n(95062),s=n(97527);const a=[{countries:["Russia","Ukraine"],predicate:(o=2014,i=Number.MAX_SAFE_INTEGER,t=>t>=o&&t<=i)},{countries:["Azerbaijan","Armenia"]},{countries:["Serbia","Kosovo"]},{countries:["Bosnia & Herzegovina","Kosovo"]},{countries:["Spain","Gibraltar"]}];var o,i;const u={predicate:s},c=a.map((t=>({...u,...t}))),l=t=>{const r=(t=>{const r=new Map;for(const{countries:n,predicate:e}of c)e(t)&&(r.set(n[0],n[1]),r.set(n[1],n[0]));return r.get.bind(r)})(t);return t=>{const n=r(t.country);return void 0===n?e:t=>t.country===n}}},12061:(t,r,n)=>{"use strict";n.r(r);var e=n(30845),s=n(62311),a=n(60402);const o=([t])=>JSON.stringify({year:t}),i=(0,e.Z)(a.Z,((t,r)=>o(t)===o(r)));addEventListener("message",(t=>{const{messageId:r,data:{season:n,pots:e,matchups:a}}=t.data,o=i(n),u=(0,s.Z)(e,a,o);postMessage({messageId:r,data:{possiblePairings:u}})}))}}]);