var z=Object.defineProperty;var G=(e,t,n)=>t in e?z(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var A=(e,t,n)=>(G(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const u of s.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();function d(){}function D(e){return e()}function U(){return Object.create(null)}function O(e){e.forEach(D)}function F(e){return typeof e=="function"}function E(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function Q(e){return Object.keys(e).length===0}function _(e,t){e.appendChild(t)}function J(e,t,n){e.insertBefore(t,n||null)}function R(e){e.parentNode&&e.parentNode.removeChild(e)}function y(e){return document.createElement(e)}function W(e){return document.createTextNode(e)}function N(){return W(" ")}function B(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function X(e){return Array.from(e.childNodes)}let K;function g(e){K=e}const p=[],Y=[];let m=[];const q=[],Z=Promise.resolve();let I=!1;function k(){I||(I=!0,Z.then(V))}function M(e){m.push(e)}const C=new Set;let h=0;function V(){if(h!==0)return;const e=K;do{try{for(;h<p.length;){const t=p[h];h++,g(t),ee(t.$$)}}catch(t){throw p.length=0,h=0,t}for(g(null),p.length=0,h=0;Y.length;)Y.pop()();for(let t=0;t<m.length;t+=1){const n=m[t];C.has(n)||(C.add(n),n())}m.length=0}while(p.length);for(;q.length;)q.pop()();I=!1,C.clear(),g(e)}function ee(e){if(e.fragment!==null){e.update(),O(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(M)}}function te(e){const t=[],n=[];m.forEach(r=>e.indexOf(r)===-1?t.push(r):n.push(r)),n.forEach(r=>r()),m=t}const x=new Set;let ne;function w(e,t){e&&e.i&&(x.delete(e),e.i(t))}function P(e,t,n,r){if(e&&e.o){if(x.has(e))return;x.add(e),ne.c.push(()=>{x.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}else r&&r()}function S(e){e&&e.c()}function v(e,t,n){const{fragment:r,after_update:o}=e.$$;r&&r.m(t,n),M(()=>{const s=e.$$.on_mount.map(D).filter(F);e.$$.on_destroy?e.$$.on_destroy.push(...s):O(s),e.$$.on_mount=[]}),o.forEach(M)}function b(e,t){const n=e.$$;n.fragment!==null&&(te(n.after_update),O(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function re(e,t){e.$$.dirty[0]===-1&&(p.push(e),k(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function L(e,t,n,r,o,s,u=null,f=[-1]){const l=K;g(e);const i=e.$$={fragment:null,ctx:[],props:s,update:d,not_equal:o,bound:U(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(l?l.$$.context:[])),callbacks:U(),dirty:f,skip_bound:!1,root:t.target||l.$$.root};u&&u(i.root);let a=!1;if(i.ctx=n?n(e,t.props||{},(c,$,...T)=>{const H=T.length?T[0]:$;return i.ctx&&o(i.ctx[c],i.ctx[c]=H)&&(!i.skip_bound&&i.bound[c]&&i.bound[c](H),a&&re(e,c)),$}):[],i.update(),a=!0,O(i.before_update),i.fragment=r?r(i.ctx):!1,t.target){if(t.hydrate){const c=X(t.target);i.fragment&&i.fragment.l(c),c.forEach(R)}else i.fragment&&i.fragment.c();t.intro&&w(e.$$.fragment),v(e,t.target,t.anchor),V()}g(l)}class j{constructor(){A(this,"$$");A(this,"$$set")}$destroy(){b(this,1),this.$destroy=d}$on(t,n){if(!F(n))return d;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}$set(t){this.$$set&&!Q(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const oe="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(oe);function se(e){let t;return{c(){t=y("header"),t.innerHTML="<h1>Cafe Bar Castillo v2 (ondev)</h1>",B(t,"class","svelte-1s6m1vm")},m(n,r){J(n,t,r)},p:d,i:d,o:d,d(n){n&&R(t)}}}function ie(e){return console.log("Before fetch"),fetch("https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJ_____0yoOg0RsOKhy-g0La8&key=YOUR_API_KEY").then(t=>(console.log("Response:",t),t.json())).then(t=>console.log("Data:",t)).catch(t=>console.error("Error:",t)),console.log("After fetch"),[]}class ce extends j{constructor(t){super(),L(this,t,ie,se,E,{})}}class ue extends j{constructor(t){super(),L(this,t,null,null,E,{})}}class fe extends j{constructor(t){super(),L(this,t,null,null,E,{})}}function le(e){let t,n,r,o,s,u,f,l,i,a;return r=new ce({}),s=new ue({}),f=new fe({}),{c(){t=y("main"),n=y("section"),S(r.$$.fragment),o=N(),S(s.$$.fragment),u=N(),S(f.$$.fragment),l=N(),i=y("section"),i.innerHTML="<h2>Menu del dia y carta</h2>",B(n,"class","svelte-1dh7jrh"),B(i,"class","svelte-1dh7jrh")},m(c,$){J(c,t,$),_(t,n),v(r,n,null),_(n,o),v(s,n,null),_(n,u),v(f,n,null),_(t,l),_(t,i),a=!0},p:d,i(c){a||(w(r.$$.fragment,c),w(s.$$.fragment,c),w(f.$$.fragment,c),a=!0)},o(c){P(r.$$.fragment,c),P(s.$$.fragment,c),P(f.$$.fragment,c),a=!1},d(c){c&&R(t),b(r),b(s),b(f)}}}class ae extends j{constructor(t){super(),L(this,t,null,le,E,{})}}new ae({target:document.getElementById("app")});
