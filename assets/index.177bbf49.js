import{d as y,r as m,o as i,c as d,a,w as S,v as x,p as B,b as I,e as N,f as w}from"./vendor.430f9857.js";const A=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}};A();const l=new AudioContext,g=2*l.sampleRate,h=l.createBuffer(1,g,l.sampleRate),P=h.getChannelData(0);for(let e=0;e<g;e++)P[e]=Math.random()*2-1;const p=l.createBufferSource(),_=l.createGain();_.connect(l.destination);p.connect(_);p.buffer=h;p.loop=!0;p.start(0);var f={context:l,gainNode:_};const b={load:()=>{const e=localStorage.getItem("vol");return e===null?.2:Number(e)},save:e=>{localStorage.setItem("vol",`${e}`)}},u=e=>{switch(e.type){case"Play":f.context.resume();break;case"Stop":f.context.suspend();break;case"ChangeVolume":f.gainNode.gain.value=e.volume,b.save(e.volume);break}};var V=(e,n)=>{const s=e.__vccOpts||e;for(const[r,t]of n)s[r]=t;return s};const k=e=>(B("data-v-06dbbf7f"),e=e(),I(),e),L={class:"l-sugoi"},O=k(()=>a("h1",{class:"title"},[a("span",null,"\u306A\u3093\u304B"),a("br"),a("span",null,"\u3059\u3054\u3044"),a("br"),a("span",null,"\u30CE\u30A4\u30BA")],-1)),E={class:"l-noise"},F=k(()=>a("label",{class:"label range",for:"vol"},"\u97F3\u91CF",-1)),M=y({setup(e){const n=m(b.load()),s=m(!1),r=()=>{u({type:"ChangeVolume",volume:n.value}),u({type:"Play"}),s.value=!0},t=()=>{u({type:"Stop"}),s.value=!1},o=()=>u({type:"ChangeVolume",volume:n.value});return(c,v)=>(i(),d("section",L,[O,a("section",E,[F,S(a("input",{"onUpdate:modelValue":v[0]||(v[0]=C=>n.value=C),class:"range",name:"vol",type:"range",max:"1.0",min:"0.0",step:"0.01",onInput:o},null,544),[[x,n.value]]),s.value?(i(),d("button",{key:1,class:"button stop",onClick:t},"Stop")):(i(),d("button",{key:0,class:"button play",onClick:r}," Play "))])]))}});var D=V(M,[["__scopeId","data-v-06dbbf7f"]]);const H=y({setup(e){return(n,s)=>(i(),N(D))}});w(H).mount("#app");
