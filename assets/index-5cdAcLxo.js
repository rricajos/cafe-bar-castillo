var K=Object.defineProperty;var Q=(e,t,n)=>t in e?K(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var L=(e,t,n)=>(Q(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const f of r.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function x(){}function F(e){return e()}function N(){return Object.create(null)}function O(e){e.forEach(F)}function R(e){return typeof e=="function"}function X(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function Y(e){return Object.keys(e).length===0}function h(e,t){e.appendChild(t)}function A(e,t,n){e.insertBefore(t,n||null)}function E(e){e.parentNode&&e.parentNode.removeChild(e)}function W(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function v(e){return document.createElement(e)}function M(e){return document.createTextNode(e)}function _(){return M(" ")}function Z(e,t,n,s){return e.addEventListener(t,n,s),()=>e.removeEventListener(t,n,s)}function g(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function ee(e){return Array.from(e.childNodes)}function G(e,t){t=""+t,e.data!==t&&(e.data=t)}function I(e,t,n,s){n==null?e.style.removeProperty(t):e.style.setProperty(t,n,s?"important":"")}let P;function $(e){P=e}const b=[],q=[];let w=[];const D=[],te=Promise.resolve();let k=!1;function ne(){k||(k=!0,te.then(H))}function B(e){w.push(e)}const S=new Set;let y=0;function H(){if(y!==0)return;const e=P;do{try{for(;y<b.length;){const t=b[y];y++,$(t),se(t.$$)}}catch(t){throw b.length=0,y=0,t}for($(null),b.length=0,y=0;q.length;)q.pop()();for(let t=0;t<w.length;t+=1){const n=w[t];S.has(n)||(S.add(n),n())}w.length=0}while(b.length);for(;D.length;)D.pop()();k=!1,S.clear(),$(e)}function se(e){if(e.fragment!==null){e.update(),O(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(B)}}function oe(e){const t=[],n=[];w.forEach(s=>e.indexOf(s)===-1?t.push(s):n.push(s)),n.forEach(s=>s()),w=t}const ie=new Set;function le(e,t){e&&e.i&&(ie.delete(e),e.i(t))}function C(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function re(e,t,n){const{fragment:s,after_update:i}=e.$$;s&&s.m(t,n),B(()=>{const r=e.$$.on_mount.map(F).filter(R);e.$$.on_destroy?e.$$.on_destroy.push(...r):O(r),e.$$.on_mount=[]}),i.forEach(B)}function ae(e,t){const n=e.$$;n.fragment!==null&&(oe(n.after_update),O(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ce(e,t){e.$$.dirty[0]===-1&&(b.push(e),ne(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ue(e,t,n,s,i,r,f=null,p=[-1]){const a=P;$(e);const l=e.$$={fragment:null,ctx:[],props:r,update:x,not_equal:i,bound:N(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(a?a.$$.context:[])),callbacks:N(),dirty:p,skip_bound:!1,root:t.target||a.$$.root};f&&f(l.root);let d=!1;if(l.ctx=n?n(e,t.props||{},(o,c,...m)=>{const u=m.length?m[0]:c;return l.ctx&&i(l.ctx[o],l.ctx[o]=u)&&(!l.skip_bound&&l.bound[o]&&l.bound[o](u),d&&ce(e,o)),c}):[],l.update(),d=!0,O(l.before_update),l.fragment=s?s(l.ctx):!1,t.target){if(t.hydrate){const o=ee(t.target);l.fragment&&l.fragment.l(o),o.forEach(E)}else l.fragment&&l.fragment.c();t.intro&&le(e.$$.fragment),re(e,t.target,t.anchor),H()}$(a)}class fe{constructor(){L(this,"$$");L(this,"$$set")}$destroy(){ae(this,1),this.$destroy=x}$on(t,n){if(!R(n))return x;const s=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return s.push(n),()=>{const i=s.indexOf(n);i!==-1&&s.splice(i,1)}}$set(t){this.$$set&&!Y(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const de="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(de);function T(e,t,n){const s=e.slice();return s[1]=t[n],s}function z(e,t,n){const s=e.slice();return s[4]=t[n],s}function U(e){let t,n,s,i,r=e[4].name+"",f,p,a,l,d,o,c;return{c(){t=v("button"),n=v("div"),s=v("div"),i=v("h3"),f=M(r),p=_(),a=v("div"),l=_(),g(i,"class","menu-item-name svelte-vu5ef"),g(s,"class","menu-item-name-container svelte-vu5ef"),g(a,"class","menu-item-details not-visible svelte-vu5ef"),g(n,"class","menu-item svelte-vu5ef"),g(t,"class",d="menu-item-container "+e[4].category+" svelte-vu5ef"),g(t,"id","menu-item-"+me()),I(t,"background-image","url("+e[4].image+")")},m(m,u){A(m,t,u),h(t,n),h(n,s),h(s,i),h(i,f),h(n,p),h(n,a),h(t,l),o||(c=Z(t,"click",pe),o=!0)},p(m,u){u&1&&r!==(r=m[4].name+"")&&G(f,r),u&1&&d!==(d="menu-item-container "+m[4].category+" svelte-vu5ef")&&g(t,"class",d),u&1&&I(t,"background-image","url("+m[4].image+")")},d(m){m&&E(t),o=!1,c()}}}function V(e){let t,n,s=e[1]+"",i,r,f,p,a,l,d=C(e[0][e[1]]),o=[];for(let c=0;c<d.length;c+=1)o[c]=U(z(e,d,c));return{c(){t=v("article"),n=v("h2"),i=M(s),r=_(),f=v("hr"),p=_(),a=v("div");for(let c=0;c<o.length;c+=1)o[c].c();l=_(),g(n,"class","menu-category svelte-vu5ef"),g(f,"class","svelte-vu5ef"),g(a,"class","menu-container svelte-vu5ef")},m(c,m){A(c,t,m),h(t,n),h(n,i),h(t,r),h(t,f),h(t,p),h(t,a);for(let u=0;u<o.length;u+=1)o[u]&&o[u].m(a,null);h(t,l)},p(c,m){if(m&1&&s!==(s=c[1]+"")&&G(i,s),m&1){d=C(c[0][c[1]]);let u;for(u=0;u<d.length;u+=1){const j=z(c,d,u);o[u]?o[u].p(j,m):(o[u]=U(j),o[u].c(),o[u].m(a,null))}for(;u<o.length;u+=1)o[u].d(1);o.length=d.length}},d(c){c&&E(t),W(o,c)}}}function he(e){let t,n,s,i,r,f,p=C(Object.keys(e[0])),a=[];for(let l=0;l<p.length;l+=1)a[l]=V(T(e,p,l));return{c(){t=v("main"),n=v("section"),s=v("h1"),s.textContent="Carta Cafe Bar Castillo",i=_();for(let l=0;l<a.length;l+=1)a[l].c();r=_(),f=v("section"),f.innerHTML=`<div style="text-align: left; "><h2 class="svelte-vu5ef">Sobre nosotros</h2> <hr class="svelte-vu5ef"/> <p><strong>Café Bar Castillo</strong> destaca por su oferta adaptada a todos
        los bolsillos, desde café hasta cócteles con asientos al aire libre y además
        de una experiencia gastronómica completa.</p> <p><strong>Ofrecemos opciones saludables y deliciosas</strong> para
        desayunos, almuerzos, cenas y postres en un ambiente informal y
        acogedor.
        <strong>Aceptamos encargos, reservas y pagos anticipados</strong> con
        dispositivos móviles.
        <strong>Las opiniones elogian nuestra comida casera </strong>, por sus
        porciones generosas y trato amigable.</p> <p>Ubicado en Maceda, Ourense y <strong>conocidos por nuestra calidad a precios asequibles
        </strong>. Para una experiencia culinaria local y auténtica, visita Café
        Bar Castillo.</p></div> <h2 style="width: 100%; margin: 1em 0" class="svelte-vu5ef">¿Dónde y Cuándo?</h2> <div style="max-width: 460px; width: 100%"><iframe title="Google Maps Cafe Bar Castillo Maceda" width="100%" height="400px" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=R%C3%BAa%20As%20Canteiras,%201,%2032700%20Maceda,%20Province%20of%20Ourense+(Cafe%20Bar%20Castillo)&amp;t=&amp;z=18&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/sport-gps/">swimming watch</a></iframe></div> <div style="max-width: 460px; text-align:left; margin: 0 auto; font-size:1.2em;"><p id="w1">8:30 - 22:30 · Lunes</p> <p id="w2">8:30 - 22:30 · Martes</p> <p id="w3">8:30 - 22:30 · Miércoles</p> <p id="w4">8:30 - 16:00 · Jueves</p> <p id="w5">8:30 - 24:00 · Viernes</p> <p id="w6">8:30 - 24:00 · Sabado</p> <p id="w7">8:30 - 24:00 · Domingo</p></div>`,g(n,"class","svelte-vu5ef"),g(f,"class","section-about svelte-vu5ef"),g(t,"class","svelte-vu5ef")},m(l,d){A(l,t,d),h(t,n),h(n,s),h(n,i);for(let o=0;o<a.length;o+=1)a[o]&&a[o].m(n,null);h(t,r),h(t,f)},p(l,[d]){if(d&1){p=C(Object.keys(l[0]));let o;for(o=0;o<p.length;o+=1){const c=T(l,p,o);a[o]?a[o].p(c,d):(a[o]=V(c),a[o].c(),a[o].m(n,null))}for(;o<a.length;o+=1)a[o].d(1);a.length=p.length}},i:x,o:x,d(l){l&&E(t),W(a,l)}}}function me(){return new String(Math.random().toString(16).slice(2))}function pe(){document.querySelector("#"+this.id+" .menu-item-details").classList.toggle("not-visible"),document.querySelector("#"+this.id).classList.toggle("align-stretch")}function ge(e,t,n){const s=[];return fetch("https://sheetdb.io/api/v1/441ejl4ro8ev3").then(i=>i.json()).then(i=>{i.forEach(r=>{const f=r.category;s[f]||n(0,s[f]=[],s),s[f].push(r)})}),[s]}class ve extends fe{constructor(t){super(),ue(this,t,ge,he,X,{})}}new ve({target:document.getElementById("app")});const J=new Date,_e=J.getDay();J.toLocaleTimeString();document.getElementById(`w${_e}`).style.fontWeight="bold";
