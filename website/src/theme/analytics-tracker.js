"use strict";var d=Object.defineProperty,b=Object.defineProperties,S=Object.getOwnPropertyDescriptor,I=Object.getOwnPropertyDescriptors,T=Object.getOwnPropertyNames,y=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var x=(t,e,r)=>e in t?d(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,U=(t,e)=>{for(var r in e||(e={}))h.call(e,r)&&x(t,r,e[r]);if(y)for(var r of y(e))k.call(e,r)&&x(t,r,e[r]);return t},D=(t,e)=>b(t,I(e));var Q=(t,e)=>{for(var r in e)d(t,r,{get:e[r],enumerable:!0})},R=(t,e,r,o)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of T(e))!h.call(t,i)&&i!==r&&d(t,i,{get:()=>e[i],enumerable:!(o=S(e,i))||o.enumerable});return t};var j=t=>R(d({},"__esModule",{value:!0}),t);var f=(t,e,r)=>new Promise((o,i)=>{var m=a=>{try{s(r.next(a))}catch(l){i(l)}},g=a=>{try{s(r.throw(a))}catch(l){i(l)}},s=a=>a.done?o(a.value):Promise.resolve(a.value).then(m,g);s((r=r.apply(t,e)).next())});var G={};Q(G,{safeTrackPageView:()=>F,trackPageView:()=>V});module.exports=j(G);var n=[];for(u=0;u<256;++u)n.push((u+256).toString(16).slice(1));var u;function P(t,e=0){return(n[t[e+0]]+n[t[e+1]]+n[t[e+2]]+n[t[e+3]]+"-"+n[t[e+4]]+n[t[e+5]]+"-"+n[t[e+6]]+n[t[e+7]]+"-"+n[t[e+8]]+n[t[e+9]]+"-"+n[t[e+10]]+n[t[e+11]]+n[t[e+12]]+n[t[e+13]]+n[t[e+14]]+n[t[e+15]]).toLowerCase()}var c,E=new Uint8Array(16);function w(){if(!c&&(c=typeof crypto!="undefined"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!c))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return c(E)}var z=typeof crypto!="undefined"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),v={randomUUID:z};function C(t,e,r){if(v.randomUUID&&!e&&!t)return v.randomUUID();t=t||{};var o=t.random||(t.rng||w)();if(o[6]=o[6]&15|64,o[8]=o[8]&63|128,e){r=r||0;for(var i=0;i<16;++i)e[r+i]=o[i];return e}return P(o)}var p=C;var L="https://snowplow-pixel.tradingview.com",O={e:"pv",aid:"tradingview",p:"web"};function A(){return{schema:"iglu:com.snowplowanalytics.snowplow/contexts/jsonschema/1-0-0",data:[{schema:"iglu:com.snowplowanalytics.snowplow/web_page/jsonschema/1-0-0",data:{id:p()}}]}}function H(){try{return Intl.DateTimeFormat().resolvedOptions().timeZone}catch(t){return}}function N(){let t=Date.now().toString(),e=Date.now().toString(),r=btoa(JSON.stringify(A())),o=p(),i=window.location.href,m=document.title,g=document.referrer,s=H();return D(U({},O),{dtm:t,stm:e,cx:r,url:i,page:m,refr:g,tz:s,eid:o})}function q(t){return t.match(/^https:\/\/tradingview\.github\.io\/lightweight-charts/)!==null}function V(){return f(this,null,function*(){if(!q(window.location.href))return;let t=N(),e=new window.URL("i",L);for(let[r,o]of Object.entries(t))e.searchParams.append(r,o);yield window.fetch(e.toString(),{method:"GET"})})}function F(){return f(this,null,function*(){try{yield V()}catch(t){}})}
