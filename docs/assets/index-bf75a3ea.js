(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function e(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerpolicy&&(o.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?o.credentials="include":a.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(a){if(a.ep)return;a.ep=!0;const o=e(a);fetch(a.href,o)}})();function i1(){}function _(n,t){for(const e in t)n[e]=t[e];return n}function Ln(n){return n()}function Qt(){return Object.create(null)}function C1(n){n.forEach(Ln)}function Rt(n){return typeof n=="function"}function N1(n,t){return n!=n?t==t:n!==t||n&&typeof n=="object"||typeof n=="function"}function ce(n){return Object.keys(n).length===0}function Gt(n,...t){if(n==null)return i1;const e=n.subscribe(...t);return e.unsubscribe?()=>e.unsubscribe():e}function Ne(n){let t;return Gt(n,e=>t=e)(),t}function W1(n,t,e){n.$$.on_destroy.push(Gt(t,e))}function f1(n,t,e,i){if(n){const a=Wn(n,t,e,i);return n[0](a)}}function Wn(n,t,e,i){return n[1]&&i?_(e.ctx.slice(),n[1](i(t))):e.ctx}function R1(n,t,e,i){if(n[2]&&i){const a=n[2](i(e));if(t.dirty===void 0)return a;if(typeof a=="object"){const o=[],l=Math.max(t.dirty.length,a.length);for(let s=0;s<l;s+=1)o[s]=t.dirty[s]|a[s];return o}return t.dirty|a}return t.dirty}function G1(n,t,e,i,a,o){if(a){const l=Wn(t,e,i,o);n.p(l,a)}}function g1(n){if(n.ctx.length>32){const t=[],e=n.ctx.length/32;for(let i=0;i<e;i++)t[i]=-1;return t}return-1}function n1(n){const t={};for(const e in n)e[0]!=="$"&&(t[e]=n[e]);return t}function q(n,t){const e={};t=new Set(t);for(const i in n)!t.has(i)&&i[0]!=="$"&&(e[i]=n[i]);return e}function Pn(n){const t={};for(const e in n)t[e]=!0;return t}function Ie(n,t,e){return n.set(e),t}function U(n,t){n.appendChild(t)}function G(n,t,e){n.insertBefore(t,e||null)}function R(n){n.parentNode&&n.parentNode.removeChild(n)}function _1(n,t){for(let e=0;e<n.length;e+=1)n[e]&&n[e].d(t)}function O(n){return document.createElement(n)}function e1(n){return document.createElementNS("http://www.w3.org/2000/svg",n)}function t1(n){return document.createTextNode(n)}function k(){return t1(" ")}function b1(){return t1("")}function v(n,t,e,i){return n.addEventListener(t,e,i),()=>n.removeEventListener(t,e,i)}function et(n){return function(t){return t.preventDefault(),n.call(this,t)}}function At(n){return function(t){return t.stopPropagation(),n.call(this,t)}}function g(n,t,e){e==null?n.removeAttribute(t):n.getAttribute(t)!==e&&n.setAttribute(t,e)}function l1(n,t){const e=Object.getOwnPropertyDescriptors(n.__proto__);for(const i in t)t[i]==null?n.removeAttribute(i):i==="style"?n.style.cssText=t[i]:i==="__value"?n.value=n[i]=t[i]:e[i]&&e[i].set?n[i]=t[i]:g(n,i,t[i])}function H1(n,t){for(const e in t)g(n,e,t[e])}function Be(n){return Array.from(n.childNodes)}function o1(n,t){t=""+t,n.wholeText!==t&&(n.data=t)}function jt(n,t){n.value=t??""}function Xt(n,t,e,i){e===null?n.style.removeProperty(t):n.style.setProperty(t,e,i?"important":"")}function B(n,t,e){n.classList[e?"add":"remove"](t)}function Ee(n,t,{bubbles:e=!1,cancelable:i=!1}={}){const a=document.createEvent("CustomEvent");return a.initCustomEvent(n,e,i,t),a}function F1(n,t){return new n(t)}let it;function nt(n){it=n}function at(){if(!it)throw new Error("Function called outside component initialization");return it}function lt(n){at().$$.on_mount.push(n)}function Bt(n){at().$$.after_update.push(n)}function p1(){const n=at();return(t,e,{cancelable:i=!1}={})=>{const a=n.$$.callbacks[t];if(a){const o=Ee(t,e,{cancelable:i});return a.slice().forEach(l=>{l.call(n,o)}),!o.defaultPrevented}return!0}}function Et(n,t){return at().$$.context.set(n,t),t}function q1(n){return at().$$.context.get(n)}function F(n,t){const e=n.$$.callbacks[t.type];e&&e.slice().forEach(i=>i.call(this,t))}const $1=[],I1=[],st=[],Ct=[],vn=Promise.resolve();let Mt=!1;function Dn(){Mt||(Mt=!0,vn.then(_n))}function Fn(){return Dn(),vn}function Tt(n){st.push(n)}function M1(n){Ct.push(n)}const Ht=new Set;let rt=0;function _n(){const n=it;do{for(;rt<$1.length;){const t=$1[rt];rt++,nt(t),de(t.$$)}for(nt(null),$1.length=0,rt=0;I1.length;)I1.pop()();for(let t=0;t<st.length;t+=1){const e=st[t];Ht.has(e)||(Ht.add(e),e())}st.length=0}while($1.length);for(;Ct.length;)Ct.pop()();Mt=!1,Ht.clear(),nt(n)}function de(n){if(n.fragment!==null){n.update(),C1(n.before_update);const t=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,t),n.after_update.forEach(Tt)}}const ct=new Set;let V1;function u1(){V1={r:0,c:[],p:V1}}function S1(){V1.r||C1(V1.c),V1=V1.p}function T(n,t){n&&n.i&&(ct.delete(n),n.i(t))}function m(n,t,e,i){if(n&&n.o){if(ct.has(n))return;ct.add(n),V1.c.push(()=>{ct.delete(n),i&&(e&&n.d(1),i())}),n.o(t)}else i&&i()}function pn(n,t){m(n,1,1,()=>{t.delete(n.key)})}function yn(n,t,e,i,a,o,l,s,r,c,I,d){let u=n.length,N=o.length,E=u;const S={};for(;E--;)S[n[E].key]=E;const H=[],A=new Map,M=new Map;for(E=N;E--;){const W=d(a,o,E),y=e(W);let L=l.get(y);L?i&&L.p(W,t):(L=c(y,W),L.c()),A.set(y,H[E]=L),y in S&&M.set(y,Math.abs(E-S[y]))}const b=new Set,C=new Set;function h(W){T(W,1),W.m(s,I),l.set(W.key,W),I=W.first,N--}for(;u&&N;){const W=H[N-1],y=n[u-1],L=W.key,$=y.key;W===y?(I=W.first,u--,N--):A.has($)?!l.has(L)||b.has(L)?h(W):C.has($)?u--:M.get(L)>M.get($)?(C.add(L),h(W)):(b.add($),u--):(r(y,l),u--)}for(;u--;){const W=n[u];A.has(W.key)||r(W,l)}for(;N;)h(H[N-1]);return H}function r1(n,t){const e={},i={},a={$$scope:1};let o=n.length;for(;o--;){const l=n[o],s=t[o];if(s){for(const r in l)r in s||(i[r]=1);for(const r in s)a[r]||(e[r]=s[r],a[r]=1);n[o]=s}else for(const r in l)a[r]=1}for(const l in i)l in e||(e[l]=void 0);return e}function Q1(n){return typeof n=="object"&&n!==null?n:{}}function T1(n,t,e,i){const a=n.$$.props[t];a!==void 0&&(n.$$.bound[a]=e,i===void 0&&e(n.$$.ctx[a]))}function z(n){n&&n.c()}function J(n,t,e,i){const{fragment:a,after_update:o}=n.$$;a&&a.m(t,e),i||Tt(()=>{const l=n.$$.on_mount.map(Ln).filter(Rt);n.$$.on_destroy?n.$$.on_destroy.push(...l):C1(l),n.$$.on_mount=[]}),o.forEach(Tt)}function w(n,t){const e=n.$$;e.fragment!==null&&(C1(e.on_destroy),e.fragment&&e.fragment.d(t),e.on_destroy=e.fragment=null,e.ctx=[])}function ue(n,t){n.$$.dirty[0]===-1&&($1.push(n),Dn(),n.$$.dirty.fill(0)),n.$$.dirty[t/31|0]|=1<<t%31}function B1(n,t,e,i,a,o,l,s=[-1]){const r=it;nt(n);const c=n.$$={fragment:null,ctx:[],props:o,update:i1,not_equal:a,bound:Qt(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(r?r.$$.context:[])),callbacks:Qt(),dirty:s,skip_bound:!1,root:t.target||r.$$.root};l&&l(c.root);let I=!1;if(c.ctx=e?e(n,t.props||{},(d,u,...N)=>{const E=N.length?N[0]:u;return c.ctx&&a(c.ctx[d],c.ctx[d]=E)&&(!c.skip_bound&&c.bound[d]&&c.bound[d](E),I&&ue(n,d)),u}):[],c.update(),I=!0,C1(c.before_update),c.fragment=i?i(c.ctx):!1,t.target){if(t.hydrate){const d=Be(t.target);c.fragment&&c.fragment.l(d),d.forEach(R)}else c.fragment&&c.fragment.c();t.intro&&T(n.$$.fragment),J(n,t.target,t.anchor,t.customElement),_n()}nt(r)}class E1{$destroy(){w(this,1),this.$destroy=i1}$on(t,e){if(!Rt(e))return i1;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(e),()=>{const a=i.indexOf(e);a!==-1&&i.splice(a,1)}}$set(t){this.$$set&&!ce(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function xt(n){let t,e;return{c(){t=e1("title"),e=t1(n[1])},m(i,a){G(i,t,a),U(t,e)},p(i,a){a&2&&o1(e,i[1])},d(i){i&&R(t)}}}function Se(n){let t,e,i=n[1]&&xt(n),a=[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{preserveAspectRatio:"xMidYMid meet"},{width:n[0]},{height:n[0]},n[2],n[3]],o={};for(let l=0;l<a.length;l+=1)o=_(o,a[l]);return{c(){t=e1("svg"),i&&i.c(),e=e1("path"),g(e,"d","M16 28h-3c-3.9 0-7-3.1-7-7v-4h2v4c0 2.8 2.2 5 5 5h3V28zM28 30h2.2l-4.6-11h-2.2l-4.6 11H21l.8-2h5.3L28 30zM22.7 26l1.8-4.4 1.8 4.4H22.7zM28 15h-2v-4c0-2.8-2.2-5-5-5h-4V4h4c3.9 0 7 3.1 7 7V15zM14 5V3H9V1H7v2H2v2h8.2C10 5.9 9.4 7.5 8 9 7.4 8.3 6.9 7.6 6.6 7H4.3c.4 1 1.1 2.2 2.1 3.3C5.6 11 4.4 11.6 3 12.1L3.7 14c1.8-.7 3.2-1.5 4.3-2.3 1.1.9 2.5 1.7 4.3 2.3l.7-1.9c-1.4-.5-2.6-1.2-3.5-1.8 1.9-2 2.5-4.1 2.7-5.3H14z"),H1(t,o)},m(l,s){G(l,t,s),i&&i.m(t,null),U(t,e)},p(l,[s]){l[1]?i?i.p(l,s):(i=xt(l),i.c(),i.m(t,e)):i&&(i.d(1),i=null),H1(t,o=r1(a,[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{preserveAspectRatio:"xMidYMid meet"},s&1&&{width:l[0]},s&1&&{height:l[0]},s&4&&l[2],s&8&&l[3]]))},i:i1,o:i1,d(l){l&&R(t),i&&i.d()}}}function He(n,t,e){let i,a;const o=["size","title"];let l=q(t,o),{size:s=16}=t,{title:r=void 0}=t;return n.$$set=c=>{e(5,t=_(_({},t),n1(c))),e(3,l=q(t,o)),"size"in c&&e(0,s=c.size),"title"in c&&e(1,r=c.title)},n.$$.update=()=>{e(4,i=t["aria-label"]||t["aria-labelledby"]||r),e(2,a={"aria-hidden":i?void 0:!0,role:i?"img":void 0,focusable:Number(t.tabindex)===0?!0:void 0})},t=n1(t),[s,r,a,l,i]}class Ae extends E1{constructor(t){super(),B1(this,t,He,Se,N1,{size:0,title:1})}}function $t(n){let t,e;return{c(){t=e1("title"),e=t1(n[1])},m(i,a){G(i,t,a),U(t,e)},p(i,a){a&2&&o1(e,i[1])},d(i){i&&R(t)}}}function Ce(n){let t,e,i=n[1]&&$t(n),a=[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{preserveAspectRatio:"xMidYMid meet"},{width:n[0]},{height:n[0]},n[2],n[3]],o={};for(let l=0;l<a.length;l+=1)o=_(o,a[l]);return{c(){t=e1("svg"),i&&i.c(),e=e1("path"),g(e,"d","M23.7642 6.8593l1.2851-1.5315A13.976 13.976 0 0020.8672 2.887l-.6836 1.8776A11.9729 11.9729 0 0123.7642 6.8593zM27.81 14l1.9677-.4128A13.8888 13.8888 0 0028.14 9.0457L26.4087 10A12.52 12.52 0 0127.81 14zM20.1836 27.2354l.6836 1.8776a13.976 13.976 0 004.1821-2.4408l-1.2851-1.5315A11.9729 11.9729 0 0120.1836 27.2354zM26.4087 22L28.14 23a14.14 14.14 0 001.6382-4.5872L27.81 18.0659A12.1519 12.1519 0 0126.4087 22zM16 30V2a14 14 0 000 28z"),H1(t,o)},m(l,s){G(l,t,s),i&&i.m(t,null),U(t,e)},p(l,[s]){l[1]?i?i.p(l,s):(i=$t(l),i.c(),i.m(t,e)):i&&(i.d(1),i=null),H1(t,o=r1(a,[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{preserveAspectRatio:"xMidYMid meet"},s&1&&{width:l[0]},s&1&&{height:l[0]},s&4&&l[2],s&8&&l[3]]))},i:i1,o:i1,d(l){l&&R(t),i&&i.d()}}}function Me(n,t,e){let i,a;const o=["size","title"];let l=q(t,o),{size:s=16}=t,{title:r=void 0}=t;return n.$$set=c=>{e(5,t=_(_({},t),n1(c))),e(3,l=q(t,o)),"size"in c&&e(0,s=c.size),"title"in c&&e(1,r=c.title)},n.$$.update=()=>{e(4,i=t["aria-label"]||t["aria-labelledby"]||r),e(2,a={"aria-hidden":i?void 0:!0,role:i?"img":void 0,focusable:Number(t.tabindex)===0?!0:void 0})},t=n1(t),[s,r,a,l,i]}class Te extends E1{constructor(t){super(),B1(this,t,Me,Ce,N1,{size:0,title:1})}}const X1=[];function fe(n,t){return{subscribe:P1(n,t).subscribe}}function P1(n,t=i1){let e;const i=new Set;function a(s){if(N1(n,s)&&(n=s,e)){const r=!X1.length;for(const c of i)c[1](),X1.push(c,n);if(r){for(let c=0;c<X1.length;c+=2)X1[c][0](X1[c+1]);X1.length=0}}}function o(s){a(s(n))}function l(s,r=i1){const c=[s,r];return i.add(c),i.size===1&&(e=t(a)||i1),s(n),()=>{i.delete(c),i.size===0&&(e(),e=null)}}return{set:a,update:o,subscribe:l}}function t0(n,t,e){const i=!Array.isArray(n),a=i?[n]:n,o=t.length<2;return fe(e,l=>{let s=!1;const r=[];let c=0,I=i1;const d=()=>{if(c)return;I();const N=t(i?r[0]:r,l);o?l(N):I=Rt(N)?N:i1},u=a.map((N,E)=>Gt(N,S=>{r[E]=S,c&=~(1<<E),s&&d()},()=>{c|=1<<E}));return s=!0,d(),function(){C1(u),I()}})}function n0(n){let t,e;return{c(){t=e1("title"),e=t1(n[1])},m(i,a){G(i,t,a),U(t,e)},p(i,a){a&2&&o1(e,i[1])},d(i){i&&R(t)}}}function Re(n){let t,e,i=n[1]&&n0(n),a=[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{preserveAspectRatio:"xMidYMid meet"},{width:n[0]},{height:n[0]},n[2],n[3]],o={};for(let l=0;l<a.length;l+=1)o=_(o,a[l]);return{c(){t=e1("svg"),i&&i.c(),e=e1("path"),g(e,"d","M22 16L12 26 10.6 24.6 19.2 16 10.6 7.4 12 6z"),H1(t,o)},m(l,s){G(l,t,s),i&&i.m(t,null),U(t,e)},p(l,[s]){l[1]?i?i.p(l,s):(i=n0(l),i.c(),i.m(t,e)):i&&(i.d(1),i=null),H1(t,o=r1(a,[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{preserveAspectRatio:"xMidYMid meet"},s&1&&{width:l[0]},s&1&&{height:l[0]},s&4&&l[2],s&8&&l[3]]))},i:i1,o:i1,d(l){l&&R(t),i&&i.d()}}}function Ge(n,t,e){let i,a;const o=["size","title"];let l=q(t,o),{size:s=16}=t,{title:r=void 0}=t;return n.$$set=c=>{e(5,t=_(_({},t),n1(c))),e(3,l=q(t,o)),"size"in c&&e(0,s=c.size),"title"in c&&e(1,r=c.title)},n.$$.update=()=>{e(4,i=t["aria-label"]||t["aria-labelledby"]||r),e(2,a={"aria-hidden":i?void 0:!0,role:i?"img":void 0,focusable:Number(t.tabindex)===0?!0:void 0})},t=n1(t),[s,r,a,l,i]}class ge extends E1{constructor(t){super(),B1(this,t,Ge,Re,N1,{size:0,title:1})}}const gt=ge;function e0(n,t,e){const i=n.slice();return i[2]=t[e].width,i}function me(n){let t,e,i,a,o=[n[4],{style:e="width: "+n[2]+";"+n[4].style}],l={};for(let s=0;s<o.length;s+=1)l=_(l,o[s]);return{c(){t=O("p"),l1(t,l),B(t,"bx--skeleton__text",!0),B(t,"bx--skeleton__heading",n[0])},m(s,r){G(s,t,r),i||(a=[v(t,"click",n[12]),v(t,"mouseover",n[13]),v(t,"mouseenter",n[14]),v(t,"mouseleave",n[15])],i=!0)},p(s,r){l1(t,l=r1(o,[r&16&&s[4],r&20&&e!==(e="width: "+s[2]+";"+s[4].style)&&{style:e}])),B(t,"bx--skeleton__text",!0),B(t,"bx--skeleton__heading",s[0])},d(s){s&&R(t),i=!1,C1(a)}}}function he(n){let t,e,i,a=n[3],o=[];for(let r=0;r<a.length;r+=1)o[r]=i0(e0(n,a,r));let l=[n[4]],s={};for(let r=0;r<l.length;r+=1)s=_(s,l[r]);return{c(){t=O("div");for(let r=0;r<o.length;r+=1)o[r].c();l1(t,s)},m(r,c){G(r,t,c);for(let I=0;I<o.length;I+=1)o[I].m(t,null);e||(i=[v(t,"click",n[8]),v(t,"mouseover",n[9]),v(t,"mouseenter",n[10]),v(t,"mouseleave",n[11])],e=!0)},p(r,c){if(c&9){a=r[3];let I;for(I=0;I<a.length;I+=1){const d=e0(r,a,I);o[I]?o[I].p(d,c):(o[I]=i0(d),o[I].c(),o[I].m(t,null))}for(;I<o.length;I+=1)o[I].d(1);o.length=a.length}l1(t,s=r1(l,[c&16&&r[4]]))},d(r){r&&R(t),_1(o,r),e=!1,C1(i)}}}function i0(n){let t;return{c(){t=O("p"),Xt(t,"width",n[2]),B(t,"bx--skeleton__text",!0),B(t,"bx--skeleton__heading",n[0])},m(e,i){G(e,t,i)},p(e,i){i&8&&Xt(t,"width",e[2]),i&1&&B(t,"bx--skeleton__heading",e[0])},d(e){e&&R(t)}}}function Ue(n){let t;function e(o,l){return o[1]?he:me}let i=e(n),a=i(n);return{c(){a.c(),t=b1()},m(o,l){a.m(o,l),G(o,t,l)},p(o,[l]){i===(i=e(o))&&a?a.p(o,l):(a.d(1),a=i(o),a&&(a.c(),a.m(t.parentNode,t)))},i:i1,o:i1,d(o){a.d(o),o&&R(t)}}}function be(n,t,e){let i,a,o;const l=["lines","heading","paragraph","width"];let s=q(t,l),{lines:r=3}=t,{heading:c=!1}=t,{paragraph:I=!1}=t,{width:d="100%"}=t;const u=[.973,.153,.567];function N(h){F.call(this,n,h)}function E(h){F.call(this,n,h)}function S(h){F.call(this,n,h)}function H(h){F.call(this,n,h)}function A(h){F.call(this,n,h)}function M(h){F.call(this,n,h)}function b(h){F.call(this,n,h)}function C(h){F.call(this,n,h)}return n.$$set=h=>{t=_(_({},t),n1(h)),e(4,s=q(t,l)),"lines"in h&&e(5,r=h.lines),"heading"in h&&e(0,c=h.heading),"paragraph"in h&&e(1,I=h.paragraph),"width"in h&&e(2,d=h.width)},n.$$.update=()=>{if(n.$$.dirty&4&&e(7,a=parseInt(d,10)),n.$$.dirty&4&&e(6,o=d.includes("px")),n.$$.dirty&238&&I)for(let h=0;h<r;h++){const W=o?a-75:0,y=o?a:75,L=Math.floor(u[h%3]*(y-W+1))+W+"px";e(3,i=[...i,{width:o?L:`calc(${d} - ${L})`}])}},e(3,i=[]),[c,I,d,i,s,r,o,a,N,E,S,H,A,M,b,C]}class Le extends E1{constructor(t){super(),B1(this,t,be,Ue,N1,{lines:5,heading:0,paragraph:1,width:2})}}const tt=Le;function a0(n,t,e){const i=n.slice();return i[9]=t[e],i}function l0(n){let t,e,i,a,o,l,s,r,c,I,d,u,N;return i=new gt({props:{class:"bx--accordion__arrow"}}),o=new tt({props:{class:"bx--accordion__title"}}),r=new tt({props:{width:"90%"}}),I=new tt({props:{width:"80%"}}),u=new tt({props:{width:"95%"}}),{c(){t=O("li"),e=O("span"),z(i.$$.fragment),a=k(),z(o.$$.fragment),l=k(),s=O("div"),z(r.$$.fragment),c=k(),z(I.$$.fragment),d=k(),z(u.$$.fragment),B(e,"bx--accordion__heading",!0),B(s,"bx--accordion__content",!0),B(t,"bx--accordion__item",!0),B(t,"bx--accordion__item--active",!0)},m(E,S){G(E,t,S),U(t,e),J(i,e,null),U(e,a),J(o,e,null),U(t,l),U(t,s),J(r,s,null),U(s,c),J(I,s,null),U(s,d),J(u,s,null),N=!0},i(E){N||(T(i.$$.fragment,E),T(o.$$.fragment,E),T(r.$$.fragment,E),T(I.$$.fragment,E),T(u.$$.fragment,E),N=!0)},o(E){m(i.$$.fragment,E),m(o.$$.fragment,E),m(r.$$.fragment,E),m(I.$$.fragment,E),m(u.$$.fragment,E),N=!1},d(E){E&&R(t),w(i),w(o),w(r),w(I),w(u)}}}function o0(n,t){let e,i,a,o,l,s,r;return a=new gt({props:{class:"bx--accordion__arrow"}}),l=new tt({props:{class:"bx--accordion__title"}}),{key:n,first:null,c(){e=O("li"),i=O("span"),z(a.$$.fragment),o=k(),z(l.$$.fragment),s=k(),B(i,"bx--accordion__heading",!0),B(e,"bx--accordion__item",!0),this.first=e},m(c,I){G(c,e,I),U(e,i),J(a,i,null),U(i,o),J(l,i,null),U(e,s),r=!0},p(c,I){},i(c){r||(T(a.$$.fragment,c),T(l.$$.fragment,c),r=!0)},o(c){m(a.$$.fragment,c),m(l.$$.fragment,c),r=!1},d(c){c&&R(e),w(a),w(l)}}}function We(n){let t,e,i=[],a=new Map,o,l,s,r=n[3]&&l0(),c=Array.from({length:n[3]?n[0]-1:n[0]},r0);const I=N=>N[9];for(let N=0;N<c.length;N+=1){let E=a0(n,c,N),S=I(E);a.set(S,i[N]=o0(S))}let d=[n[4]],u={};for(let N=0;N<d.length;N+=1)u=_(u,d[N]);return{c(){t=O("ul"),r&&r.c(),e=k();for(let N=0;N<i.length;N+=1)i[N].c();l1(t,u),B(t,"bx--skeleton",!0),B(t,"bx--accordion",!0),B(t,"bx--accordion--start",n[1]==="start"),B(t,"bx--accordion--end",n[1]==="end"),B(t,"bx--accordion--sm",n[2]==="sm"),B(t,"bx--accordion--xl",n[2]==="xl")},m(N,E){G(N,t,E),r&&r.m(t,null),U(t,e);for(let S=0;S<i.length;S+=1)i[S].m(t,null);o=!0,l||(s=[v(t,"click",n[5]),v(t,"mouseover",n[6]),v(t,"mouseenter",n[7]),v(t,"mouseleave",n[8])],l=!0)},p(N,[E]){N[3]?r?E&8&&T(r,1):(r=l0(),r.c(),T(r,1),r.m(t,e)):r&&(u1(),m(r,1,1,()=>{r=null}),S1()),E&9&&(c=Array.from({length:N[3]?N[0]-1:N[0]},r0),u1(),i=yn(i,E,I,1,N,c,a,t,pn,o0,null,a0),S1()),l1(t,u=r1(d,[E&16&&N[4]])),B(t,"bx--skeleton",!0),B(t,"bx--accordion",!0),B(t,"bx--accordion--start",N[1]==="start"),B(t,"bx--accordion--end",N[1]==="end"),B(t,"bx--accordion--sm",N[2]==="sm"),B(t,"bx--accordion--xl",N[2]==="xl")},i(N){if(!o){T(r);for(let E=0;E<c.length;E+=1)T(i[E]);o=!0}},o(N){m(r);for(let E=0;E<i.length;E+=1)m(i[E]);o=!1},d(N){N&&R(t),r&&r.d();for(let E=0;E<i.length;E+=1)i[E].d();l=!1,C1(s)}}}const r0=(n,t)=>t;function Pe(n,t,e){const i=["count","align","size","open"];let a=q(t,i),{count:o=4}=t,{align:l="end"}=t,{size:s=void 0}=t,{open:r=!0}=t;function c(N){F.call(this,n,N)}function I(N){F.call(this,n,N)}function d(N){F.call(this,n,N)}function u(N){F.call(this,n,N)}return n.$$set=N=>{t=_(_({},t),n1(N)),e(4,a=q(t,i)),"count"in N&&e(0,o=N.count),"align"in N&&e(1,l=N.align),"size"in N&&e(2,s=N.size),"open"in N&&e(3,r=N.open)},[o,l,s,r,a,c,I,d,u]}class ve extends E1{constructor(t){super(),B1(this,t,Pe,We,N1,{count:0,align:1,size:2,open:3})}}const De=ve;function Fe(n){let t,e,i,a;const o=n[6].default,l=f1(o,n,n[5],null);let s=[n[3]],r={};for(let c=0;c<s.length;c+=1)r=_(r,s[c]);return{c(){t=O("ul"),l&&l.c(),l1(t,r),B(t,"bx--accordion",!0),B(t,"bx--accordion--start",n[0]==="start"),B(t,"bx--accordion--end",n[0]==="end"),B(t,"bx--accordion--sm",n[1]==="sm"),B(t,"bx--accordion--xl",n[1]==="xl")},m(c,I){G(c,t,I),l&&l.m(t,null),e=!0,i||(a=[v(t,"click",n[7]),v(t,"mouseover",n[8]),v(t,"mouseenter",n[9]),v(t,"mouseleave",n[10])],i=!0)},p(c,I){l&&l.p&&(!e||I&32)&&G1(l,o,c,c[5],e?R1(o,c[5],I,null):g1(c[5]),null),l1(t,r=r1(s,[I&8&&c[3]])),B(t,"bx--accordion",!0),B(t,"bx--accordion--start",c[0]==="start"),B(t,"bx--accordion--end",c[0]==="end"),B(t,"bx--accordion--sm",c[1]==="sm"),B(t,"bx--accordion--xl",c[1]==="xl")},i(c){e||(T(l,c),e=!0)},o(c){m(l,c),e=!1},d(c){c&&R(t),l&&l.d(c),i=!1,C1(a)}}}function _e(n){let t,e;const i=[n[3],{align:n[0]},{size:n[1]}];let a={};for(let o=0;o<i.length;o+=1)a=_(a,i[o]);return t=new De({props:a}),t.$on("click",n[11]),t.$on("mouseover",n[12]),t.$on("mouseenter",n[13]),t.$on("mouseleave",n[14]),{c(){z(t.$$.fragment)},m(o,l){J(t,o,l),e=!0},p(o,l){const s=l&11?r1(i,[l&8&&Q1(o[3]),l&1&&{align:o[0]},l&2&&{size:o[1]}]):{};t.$set(s)},i(o){e||(T(t.$$.fragment,o),e=!0)},o(o){m(t.$$.fragment,o),e=!1},d(o){w(t,o)}}}function pe(n){let t,e,i,a;const o=[_e,Fe],l=[];function s(r,c){return r[2]?0:1}return t=s(n),e=l[t]=o[t](n),{c(){e.c(),i=b1()},m(r,c){l[t].m(r,c),G(r,i,c),a=!0},p(r,[c]){let I=t;t=s(r),t===I?l[t].p(r,c):(u1(),m(l[I],1,1,()=>{l[I]=null}),S1(),e=l[t],e?e.p(r,c):(e=l[t]=o[t](r),e.c()),T(e,1),e.m(i.parentNode,i))},i(r){a||(T(e),a=!0)},o(r){m(e),a=!1},d(r){l[t].d(r),r&&R(i)}}}function ye(n,t,e){const i=["align","size","disabled","skeleton"];let a=q(t,i),{$$slots:o={},$$scope:l}=t,{align:s="end"}=t,{size:r=void 0}=t,{disabled:c=!1}=t,{skeleton:I=!1}=t;const d=P1(c);Et("Accordion",{disableItems:d});function u(C){F.call(this,n,C)}function N(C){F.call(this,n,C)}function E(C){F.call(this,n,C)}function S(C){F.call(this,n,C)}function H(C){F.call(this,n,C)}function A(C){F.call(this,n,C)}function M(C){F.call(this,n,C)}function b(C){F.call(this,n,C)}return n.$$set=C=>{t=_(_({},t),n1(C)),e(3,a=q(t,i)),"align"in C&&e(0,s=C.align),"size"in C&&e(1,r=C.size),"disabled"in C&&e(4,c=C.disabled),"skeleton"in C&&e(2,I=C.skeleton),"$$scope"in C&&e(5,l=C.$$scope)},n.$$.update=()=>{n.$$.dirty&16&&d.set(c)},[s,r,I,a,c,l,o,u,N,E,S,H,A,M,b]}class Ye extends E1{constructor(t){super(),B1(this,t,ye,pe,N1,{align:0,size:1,disabled:4,skeleton:2})}}const Oe=Ye,Ke=n=>({}),s0=n=>({});function ke(n){let t;return{c(){t=t1(n[2])},m(e,i){G(e,t,i)},p(e,i){i&4&&o1(t,e[2])},d(e){e&&R(t)}}}function Je(n){let t,e,i,a,o,l,s,r,c,I;i=new gt({props:{class:"bx--accordion__arrow","aria-label":n[3]}});const d=n[7].title,u=f1(d,n,n[6],s0),N=u||ke(n),E=n[7].default,S=f1(E,n,n[6],null);let H=[n[5]],A={};for(let M=0;M<H.length;M+=1)A=_(A,H[M]);return{c(){t=O("li"),e=O("button"),z(i.$$.fragment),a=k(),o=O("div"),N&&N.c(),l=k(),s=O("div"),S&&S.c(),B(o,"bx--accordion__title",!0),g(e,"type","button"),g(e,"title",n[3]),g(e,"aria-expanded",n[0]),e.disabled=n[1],B(e,"bx--accordion__heading",!0),B(s,"bx--accordion__content",!0),l1(t,A),B(t,"bx--accordion__item",!0),B(t,"bx--accordion__item--active",n[0]),B(t,"bx--accordion__item--disabled",n[1]),B(t,"bx--accordion__item--expanding",n[4]==="expanding"),B(t,"bx--accordion__item--collapsing",n[4]==="collapsing")},m(M,b){G(M,t,b),U(t,e),J(i,e,null),U(e,a),U(e,o),N&&N.m(o,null),U(t,l),U(t,s),S&&S.m(s,null),r=!0,c||(I=[v(e,"click",n[9]),v(e,"click",n[14]),v(e,"mouseover",n[10]),v(e,"mouseenter",n[11]),v(e,"mouseleave",n[12]),v(e,"keydown",n[13]),v(e,"keydown",n[15]),v(t,"animationend",n[8]),v(t,"animationend",n[16])],c=!0)},p(M,[b]){const C={};b&8&&(C["aria-label"]=M[3]),i.$set(C),u?u.p&&(!r||b&64)&&G1(u,d,M,M[6],r?R1(d,M[6],b,Ke):g1(M[6]),s0):N&&N.p&&(!r||b&4)&&N.p(M,r?b:-1),(!r||b&8)&&g(e,"title",M[3]),(!r||b&1)&&g(e,"aria-expanded",M[0]),(!r||b&2)&&(e.disabled=M[1]),S&&S.p&&(!r||b&64)&&G1(S,E,M,M[6],r?R1(E,M[6],b,null):g1(M[6]),null),l1(t,A=r1(H,[b&32&&M[5]])),B(t,"bx--accordion__item",!0),B(t,"bx--accordion__item--active",M[0]),B(t,"bx--accordion__item--disabled",M[1]),B(t,"bx--accordion__item--expanding",M[4]==="expanding"),B(t,"bx--accordion__item--collapsing",M[4]==="collapsing")},i(M){r||(T(i.$$.fragment,M),T(N,M),T(S,M),r=!0)},o(M){m(i.$$.fragment,M),m(N,M),m(S,M),r=!1},d(M){M&&R(t),w(i),N&&N.d(M),S&&S.d(M),c=!1,C1(I)}}}function we(n,t,e){const i=["title","open","disabled","iconDescription"];let a=q(t,i),{$$slots:o={},$$scope:l}=t,{title:s="title"}=t,{open:r=!1}=t,{disabled:c=!1}=t,{iconDescription:I="Expand/Collapse"}=t,d=c;const N=q1("Accordion").disableItems.subscribe(L=>{!L&&d||e(1,c=L)});let E;lt(()=>()=>{N()});function S(L){F.call(this,n,L)}function H(L){F.call(this,n,L)}function A(L){F.call(this,n,L)}function M(L){F.call(this,n,L)}function b(L){F.call(this,n,L)}function C(L){F.call(this,n,L)}const h=()=>{e(0,r=!r),e(4,E=r?"expanding":"collapsing")},W=({key:L})=>{r&&L==="Escape"&&e(0,r=!1)},y=()=>{e(4,E=void 0)};return n.$$set=L=>{t=_(_({},t),n1(L)),e(5,a=q(t,i)),"title"in L&&e(2,s=L.title),"open"in L&&e(0,r=L.open),"disabled"in L&&e(1,c=L.disabled),"iconDescription"in L&&e(3,I=L.iconDescription),"$$scope"in L&&e(6,l=L.$$scope)},[r,c,s,I,E,a,l,o,S,H,A,M,b,C,h,W,y]}class ze extends E1{constructor(t){super(),B1(this,t,we,Je,N1,{title:2,open:0,disabled:1,iconDescription:3})}}const Ze=ze;function Ve(n){let t,e,i,a=[n[2]],o={};for(let l=0;l<a.length;l+=1)o=_(o,a[l]);return{c(){t=O("div"),l1(t,o),B(t,"bx--skeleton",!0),B(t,"bx--btn",!0),B(t,"bx--btn--field",n[1]==="field"),B(t,"bx--btn--sm",n[1]==="small"),B(t,"bx--btn--lg",n[1]==="lg"),B(t,"bx--btn--xl",n[1]==="xl")},m(l,s){G(l,t,s),e||(i=[v(t,"click",n[7]),v(t,"mouseover",n[8]),v(t,"mouseenter",n[9]),v(t,"mouseleave",n[10])],e=!0)},p(l,s){l1(t,o=r1(a,[s&4&&l[2]])),B(t,"bx--skeleton",!0),B(t,"bx--btn",!0),B(t,"bx--btn--field",l[1]==="field"),B(t,"bx--btn--sm",l[1]==="small"),B(t,"bx--btn--lg",l[1]==="lg"),B(t,"bx--btn--xl",l[1]==="xl")},d(l){l&&R(t),e=!1,C1(i)}}}function qe(n){let t,e="",i,a,o,l,s=[{href:n[0]},{rel:a=n[2].target==="_blank"?"noopener noreferrer":void 0},{role:"button"},n[2]],r={};for(let c=0;c<s.length;c+=1)r=_(r,s[c]);return{c(){t=O("a"),i=t1(e),l1(t,r),B(t,"bx--skeleton",!0),B(t,"bx--btn",!0),B(t,"bx--btn--field",n[1]==="field"),B(t,"bx--btn--sm",n[1]==="small"),B(t,"bx--btn--lg",n[1]==="lg"),B(t,"bx--btn--xl",n[1]==="xl")},m(c,I){G(c,t,I),U(t,i),o||(l=[v(t,"click",n[3]),v(t,"mouseover",n[4]),v(t,"mouseenter",n[5]),v(t,"mouseleave",n[6])],o=!0)},p(c,I){l1(t,r=r1(s,[I&1&&{href:c[0]},I&4&&a!==(a=c[2].target==="_blank"?"noopener noreferrer":void 0)&&{rel:a},{role:"button"},I&4&&c[2]])),B(t,"bx--skeleton",!0),B(t,"bx--btn",!0),B(t,"bx--btn--field",c[1]==="field"),B(t,"bx--btn--sm",c[1]==="small"),B(t,"bx--btn--lg",c[1]==="lg"),B(t,"bx--btn--xl",c[1]==="xl")},d(c){c&&R(t),o=!1,C1(l)}}}function Qe(n){let t;function e(o,l){return o[0]?qe:Ve}let i=e(n),a=i(n);return{c(){a.c(),t=b1()},m(o,l){a.m(o,l),G(o,t,l)},p(o,[l]){i===(i=e(o))&&a?a.p(o,l):(a.d(1),a=i(o),a&&(a.c(),a.m(t.parentNode,t)))},i:i1,o:i1,d(o){a.d(o),o&&R(t)}}}function je(n,t,e){const i=["href","size"];let a=q(t,i),{href:o=void 0}=t,{size:l="default"}=t;function s(S){F.call(this,n,S)}function r(S){F.call(this,n,S)}function c(S){F.call(this,n,S)}function I(S){F.call(this,n,S)}function d(S){F.call(this,n,S)}function u(S){F.call(this,n,S)}function N(S){F.call(this,n,S)}function E(S){F.call(this,n,S)}return n.$$set=S=>{t=_(_({},t),n1(S)),e(2,a=q(t,i)),"href"in S&&e(0,o=S.href),"size"in S&&e(1,l=S.size)},[o,l,a,s,r,c,I,d,u,N,E]}class Xe extends E1{constructor(t){super(),B1(this,t,je,Qe,N1,{href:0,size:1})}}const xe=Xe,$e=n=>({props:n[0]&512}),c0=n=>({props:n[9]});function ti(n){let t,e,i,a,o,l,s=n[8]&&N0(n);const r=n[19].default,c=f1(r,n,n[18],null);var I=n[2];function d(E){return{props:{"aria-hidden":"true",class:"bx--btn__icon",style:E[8]?"margin-left: 0":void 0,"aria-label":E[3]}}}I&&(i=F1(I,d(n)));let u=[n[9]],N={};for(let E=0;E<u.length;E+=1)N=_(N,u[E]);return{c(){t=O("button"),s&&s.c(),e=k(),c&&c.c(),i&&z(i.$$.fragment),l1(t,N)},m(E,S){G(E,t,S),s&&s.m(t,null),U(t,e),c&&c.m(t,null),i&&J(i,t,null),t.autofocus&&t.focus(),n[33](t),a=!0,o||(l=[v(t,"click",n[24]),v(t,"mouseover",n[25]),v(t,"mouseenter",n[26]),v(t,"mouseleave",n[27])],o=!0)},p(E,S){E[8]?s?s.p(E,S):(s=N0(E),s.c(),s.m(t,e)):s&&(s.d(1),s=null),c&&c.p&&(!a||S[0]&262144)&&G1(c,r,E,E[18],a?R1(r,E[18],S,null):g1(E[18]),null);const H={};if(S[0]&256&&(H.style=E[8]?"margin-left: 0":void 0),S[0]&8&&(H["aria-label"]=E[3]),I!==(I=E[2])){if(i){u1();const A=i;m(A.$$.fragment,1,0,()=>{w(A,1)}),S1()}I?(i=F1(I,d(E)),z(i.$$.fragment),T(i.$$.fragment,1),J(i,t,null)):i=null}else I&&i.$set(H);l1(t,N=r1(u,[S[0]&512&&E[9]]))},i(E){a||(T(c,E),i&&T(i.$$.fragment,E),a=!0)},o(E){m(c,E),i&&m(i.$$.fragment,E),a=!1},d(E){E&&R(t),s&&s.d(),c&&c.d(E),i&&w(i),n[33](null),o=!1,C1(l)}}}function ni(n){let t,e,i,a,o,l,s=n[8]&&I0(n);const r=n[19].default,c=f1(r,n,n[18],null);var I=n[2];function d(E){return{props:{"aria-hidden":"true",class:"bx--btn__icon","aria-label":E[3]}}}I&&(i=F1(I,d(n)));let u=[n[9]],N={};for(let E=0;E<u.length;E+=1)N=_(N,u[E]);return{c(){t=O("a"),s&&s.c(),e=k(),c&&c.c(),i&&z(i.$$.fragment),l1(t,N)},m(E,S){G(E,t,S),s&&s.m(t,null),U(t,e),c&&c.m(t,null),i&&J(i,t,null),n[32](t),a=!0,o||(l=[v(t,"click",n[20]),v(t,"mouseover",n[21]),v(t,"mouseenter",n[22]),v(t,"mouseleave",n[23])],o=!0)},p(E,S){E[8]?s?s.p(E,S):(s=I0(E),s.c(),s.m(t,e)):s&&(s.d(1),s=null),c&&c.p&&(!a||S[0]&262144)&&G1(c,r,E,E[18],a?R1(r,E[18],S,null):g1(E[18]),null);const H={};if(S[0]&8&&(H["aria-label"]=E[3]),I!==(I=E[2])){if(i){u1();const A=i;m(A.$$.fragment,1,0,()=>{w(A,1)}),S1()}I?(i=F1(I,d(E)),z(i.$$.fragment),T(i.$$.fragment,1),J(i,t,null)):i=null}else I&&i.$set(H);l1(t,N=r1(u,[S[0]&512&&E[9]]))},i(E){a||(T(c,E),i&&T(i.$$.fragment,E),a=!0)},o(E){m(c,E),i&&m(i.$$.fragment,E),a=!1},d(E){E&&R(t),s&&s.d(),c&&c.d(E),i&&w(i),n[32](null),o=!1,C1(l)}}}function ei(n){let t;const e=n[19].default,i=f1(e,n,n[18],c0);return{c(){i&&i.c()},m(a,o){i&&i.m(a,o),t=!0},p(a,o){i&&i.p&&(!t||o[0]&262656)&&G1(i,e,a,a[18],t?R1(e,a[18],o,$e):g1(a[18]),c0)},i(a){t||(T(i,a),t=!0)},o(a){m(i,a),t=!1},d(a){i&&i.d(a)}}}function ii(n){let t,e;const i=[{href:n[7]},{size:n[1]},n[10],{style:n[8]&&"width: 3rem;"}];let a={};for(let o=0;o<i.length;o+=1)a=_(a,i[o]);return t=new xe({props:a}),t.$on("click",n[28]),t.$on("mouseover",n[29]),t.$on("mouseenter",n[30]),t.$on("mouseleave",n[31]),{c(){z(t.$$.fragment)},m(o,l){J(t,o,l),e=!0},p(o,l){const s=l[0]&1410?r1(i,[l[0]&128&&{href:o[7]},l[0]&2&&{size:o[1]},l[0]&1024&&Q1(o[10]),l[0]&256&&{style:o[8]&&"width: 3rem;"}]):{};t.$set(s)},i(o){e||(T(t.$$.fragment,o),e=!0)},o(o){m(t.$$.fragment,o),e=!1},d(o){w(t,o)}}}function N0(n){let t,e;return{c(){t=O("span"),e=t1(n[3]),B(t,"bx--assistive-text",!0)},m(i,a){G(i,t,a),U(t,e)},p(i,a){a[0]&8&&o1(e,i[3])},d(i){i&&R(t)}}}function I0(n){let t,e;return{c(){t=O("span"),e=t1(n[3]),B(t,"bx--assistive-text",!0)},m(i,a){G(i,t,a),U(t,e)},p(i,a){a[0]&8&&o1(e,i[3])},d(i){i&&R(t)}}}function ai(n){let t,e,i,a;const o=[ii,ei,ni,ti],l=[];function s(r,c){return r[5]?0:r[4]?1:r[7]&&!r[6]?2:3}return t=s(n),e=l[t]=o[t](n),{c(){e.c(),i=b1()},m(r,c){l[t].m(r,c),G(r,i,c),a=!0},p(r,c){let I=t;t=s(r),t===I?l[t].p(r,c):(u1(),m(l[I],1,1,()=>{l[I]=null}),S1(),e=l[t],e?e.p(r,c):(e=l[t]=o[t](r),e.c()),T(e,1),e.m(i.parentNode,i))},i(r){a||(T(e),a=!0)},o(r){m(e),a=!1},d(r){l[t].d(r),r&&R(i)}}}function li(n,t,e){let i,a;const o=["kind","size","expressive","isSelected","icon","iconDescription","tooltipAlignment","tooltipPosition","as","skeleton","disabled","href","tabindex","type","ref"];let l=q(t,o),{$$slots:s={},$$scope:r}=t;const c=Pn(s);let{kind:I="primary"}=t,{size:d="default"}=t,{expressive:u=!1}=t,{isSelected:N=!1}=t,{icon:E=void 0}=t,{iconDescription:S=void 0}=t,{tooltipAlignment:H="center"}=t,{tooltipPosition:A="bottom"}=t,{as:M=!1}=t,{skeleton:b=!1}=t,{disabled:C=!1}=t,{href:h=void 0}=t,{tabindex:W="0"}=t,{type:y="button"}=t,{ref:L=null}=t;const $=q1("ComposedModal");function f(Q){F.call(this,n,Q)}function P(Q){F.call(this,n,Q)}function p(Q){F.call(this,n,Q)}function a1(Q){F.call(this,n,Q)}function A1(Q){F.call(this,n,Q)}function h1(Q){F.call(this,n,Q)}function m1(Q){F.call(this,n,Q)}function V(Q){F.call(this,n,Q)}function d1(Q){F.call(this,n,Q)}function X(Q){F.call(this,n,Q)}function Y(Q){F.call(this,n,Q)}function c1(Q){F.call(this,n,Q)}function K(Q){I1[Q?"unshift":"push"](()=>{L=Q,e(0,L)})}function Z(Q){I1[Q?"unshift":"push"](()=>{L=Q,e(0,L)})}return n.$$set=Q=>{t=_(_({},t),n1(Q)),e(10,l=q(t,o)),"kind"in Q&&e(11,I=Q.kind),"size"in Q&&e(1,d=Q.size),"expressive"in Q&&e(12,u=Q.expressive),"isSelected"in Q&&e(13,N=Q.isSelected),"icon"in Q&&e(2,E=Q.icon),"iconDescription"in Q&&e(3,S=Q.iconDescription),"tooltipAlignment"in Q&&e(14,H=Q.tooltipAlignment),"tooltipPosition"in Q&&e(15,A=Q.tooltipPosition),"as"in Q&&e(4,M=Q.as),"skeleton"in Q&&e(5,b=Q.skeleton),"disabled"in Q&&e(6,C=Q.disabled),"href"in Q&&e(7,h=Q.href),"tabindex"in Q&&e(16,W=Q.tabindex),"type"in Q&&e(17,y=Q.type),"ref"in Q&&e(0,L=Q.ref),"$$scope"in Q&&e(18,r=Q.$$scope)},n.$$.update=()=>{n.$$.dirty[0]&1&&$&&L&&$.declareRef(L),n.$$.dirty[0]&4&&e(8,i=E&&!c.default),e(9,a={type:h&&!C?void 0:y,tabindex:W,disabled:C===!0?!0:void 0,href:h,"aria-pressed":i&&I==="ghost"&&!h?N:void 0,...l,class:["bx--btn",u&&"bx--btn--expressive",(d==="small"&&!u||d==="sm"&&!u||d==="small"&&!u)&&"bx--btn--sm",d==="field"&&!u||d==="md"&&!u&&"bx--btn--md",d==="field"&&"bx--btn--field",d==="small"&&"bx--btn--sm",d==="lg"&&"bx--btn--lg",d==="xl"&&"bx--btn--xl",I&&`bx--btn--${I}`,C&&"bx--btn--disabled",i&&"bx--btn--icon-only",i&&"bx--tooltip__trigger",i&&"bx--tooltip--a11y",i&&A&&`bx--btn--icon-only--${A}`,i&&H&&`bx--tooltip--align-${H}`,i&&N&&I==="ghost"&&"bx--btn--selected",l.class].filter(Boolean).join(" ")})},[L,d,E,S,M,b,C,h,i,a,l,I,u,N,H,A,W,y,r,s,f,P,p,a1,A1,h1,m1,V,d1,X,Y,c1,K,Z]}class oi extends E1{constructor(t){super(),B1(this,t,li,ai,N1,{kind:11,size:1,expressive:12,isSelected:13,icon:2,iconDescription:3,tooltipAlignment:14,tooltipPosition:15,as:4,skeleton:5,disabled:6,href:7,tabindex:16,type:17,ref:0},null,[-1,-1])}}const x1=oi;function ri(n){let t,e,i,a,o=[n[0]],l={};for(let s=0;s<o.length;s+=1)l=_(l,o[s]);return{c(){t=O("div"),e=O("span"),B(e,"bx--checkbox-label-text",!0),B(e,"bx--skeleton",!0),l1(t,l),B(t,"bx--form-item",!0),B(t,"bx--checkbox-wrapper",!0),B(t,"bx--checkbox-label",!0)},m(s,r){G(s,t,r),U(t,e),i||(a=[v(t,"click",n[1]),v(t,"mouseover",n[2]),v(t,"mouseenter",n[3]),v(t,"mouseleave",n[4])],i=!0)},p(s,[r]){l1(t,l=r1(o,[r&1&&s[0]])),B(t,"bx--form-item",!0),B(t,"bx--checkbox-wrapper",!0),B(t,"bx--checkbox-label",!0)},i:i1,o:i1,d(s){s&&R(t),i=!1,C1(a)}}}function si(n,t,e){const i=[];let a=q(t,i);function o(c){F.call(this,n,c)}function l(c){F.call(this,n,c)}function s(c){F.call(this,n,c)}function r(c){F.call(this,n,c)}return n.$$set=c=>{t=_(_({},t),n1(c)),e(0,a=q(t,i))},[a,o,l,s,r]}class ci extends E1{constructor(t){super(),B1(this,t,si,ri,N1,{})}}const Ni=ci,Ii=n=>({}),B0=n=>({});function Bi(n){let t,e,i,a,o,l,s,r;const c=n[19].labelText,I=f1(c,n,n[18],B0),d=I||di(n);let u=[n[16]],N={};for(let E=0;E<u.length;E+=1)N=_(N,u[E]);return{c(){t=O("div"),e=O("input"),i=k(),a=O("label"),o=O("span"),d&&d.c(),g(e,"type","checkbox"),e.value=n[4],e.checked=n[0],e.disabled=n[9],g(e,"id",n[13]),e.indeterminate=n[5],g(e,"name",n[12]),e.required=n[7],e.readOnly=n[8],B(e,"bx--checkbox",!0),B(o,"bx--checkbox-label-text",!0),B(o,"bx--visually-hidden",n[11]),g(a,"for",n[13]),g(a,"title",n[2]),B(a,"bx--checkbox-label",!0),l1(t,N),B(t,"bx--form-item",!0),B(t,"bx--checkbox-wrapper",!0)},m(E,S){G(E,t,S),U(t,e),n[30](e),U(t,i),U(t,a),U(a,o),d&&d.m(o,null),n[32](o),l=!0,s||(r=[v(e,"change",n[31]),v(e,"change",n[24]),v(e,"blur",n[25]),v(t,"click",n[20]),v(t,"mouseover",n[21]),v(t,"mouseenter",n[22]),v(t,"mouseleave",n[23])],s=!0)},p(E,S){(!l||S[0]&16)&&(e.value=E[4]),(!l||S[0]&1)&&(e.checked=E[0]),(!l||S[0]&512)&&(e.disabled=E[9]),(!l||S[0]&8192)&&g(e,"id",E[13]),(!l||S[0]&32)&&(e.indeterminate=E[5]),(!l||S[0]&4096)&&g(e,"name",E[12]),(!l||S[0]&128)&&(e.required=E[7]),(!l||S[0]&256)&&(e.readOnly=E[8]),I?I.p&&(!l||S[0]&262144)&&G1(I,c,E,E[18],l?R1(c,E[18],S,Ii):g1(E[18]),B0):d&&d.p&&(!l||S[0]&1024)&&d.p(E,l?S:[-1,-1]),(!l||S[0]&2048)&&B(o,"bx--visually-hidden",E[11]),(!l||S[0]&8192)&&g(a,"for",E[13]),(!l||S[0]&4)&&g(a,"title",E[2]),l1(t,N=r1(u,[S[0]&65536&&E[16]])),B(t,"bx--form-item",!0),B(t,"bx--checkbox-wrapper",!0)},i(E){l||(T(d,E),l=!0)},o(E){m(d,E),l=!1},d(E){E&&R(t),n[30](null),d&&d.d(E),n[32](null),s=!1,C1(r)}}}function Ei(n){let t,e;const i=[n[16]];let a={};for(let o=0;o<i.length;o+=1)a=_(a,i[o]);return t=new Ni({props:a}),t.$on("click",n[26]),t.$on("mouseover",n[27]),t.$on("mouseenter",n[28]),t.$on("mouseleave",n[29]),{c(){z(t.$$.fragment)},m(o,l){J(t,o,l),e=!0},p(o,l){const s=l[0]&65536?r1(i,[Q1(o[16])]):{};t.$set(s)},i(o){e||(T(t.$$.fragment,o),e=!0)},o(o){m(t.$$.fragment,o),e=!1},d(o){w(t,o)}}}function di(n){let t;return{c(){t=t1(n[10])},m(e,i){G(e,t,i)},p(e,i){i[0]&1024&&o1(t,e[10])},d(e){e&&R(t)}}}function ui(n){let t,e,i,a;const o=[Ei,Bi],l=[];function s(r,c){return r[6]?0:1}return t=s(n),e=l[t]=o[t](n),{c(){e.c(),i=b1()},m(r,c){l[t].m(r,c),G(r,i,c),a=!0},p(r,c){let I=t;t=s(r),t===I?l[t].p(r,c):(u1(),m(l[I],1,1,()=>{l[I]=null}),S1(),e=l[t],e?e.p(r,c):(e=l[t]=o[t](r),e.c()),T(e,1),e.m(i.parentNode,i))},i(r){a||(T(e),a=!0)},o(r){m(e),a=!1},d(r){l[t].d(r),r&&R(i)}}}function Si(n,t,e){let i,a;const o=["value","checked","group","indeterminate","skeleton","required","readonly","disabled","labelText","hideLabel","name","title","id","ref"];let l=q(t,o),{$$slots:s={},$$scope:r}=t,{value:c=""}=t,{checked:I=!1}=t,{group:d=void 0}=t,{indeterminate:u=!1}=t,{skeleton:N=!1}=t,{required:E=!1}=t,{readonly:S=!1}=t,{disabled:H=!1}=t,{labelText:A=""}=t,{hideLabel:M=!1}=t,{name:b=""}=t,{title:C=void 0}=t,{id:h="ccs-"+Math.random().toString(36)}=t,{ref:W=null}=t;const y=p1();let L=null;function $(K){F.call(this,n,K)}function f(K){F.call(this,n,K)}function P(K){F.call(this,n,K)}function p(K){F.call(this,n,K)}function a1(K){F.call(this,n,K)}function A1(K){F.call(this,n,K)}function h1(K){F.call(this,n,K)}function m1(K){F.call(this,n,K)}function V(K){F.call(this,n,K)}function d1(K){F.call(this,n,K)}function X(K){I1[K?"unshift":"push"](()=>{W=K,e(3,W)})}const Y=()=>{i?e(1,d=d.includes(c)?d.filter(K=>K!==c):[...d,c]):e(0,I=!I)};function c1(K){I1[K?"unshift":"push"](()=>{L=K,e(14,L)})}return n.$$set=K=>{t=_(_({},t),n1(K)),e(16,l=q(t,o)),"value"in K&&e(4,c=K.value),"checked"in K&&e(0,I=K.checked),"group"in K&&e(1,d=K.group),"indeterminate"in K&&e(5,u=K.indeterminate),"skeleton"in K&&e(6,N=K.skeleton),"required"in K&&e(7,E=K.required),"readonly"in K&&e(8,S=K.readonly),"disabled"in K&&e(9,H=K.disabled),"labelText"in K&&e(10,A=K.labelText),"hideLabel"in K&&e(11,M=K.hideLabel),"name"in K&&e(12,b=K.name),"title"in K&&e(2,C=K.title),"id"in K&&e(13,h=K.id),"ref"in K&&e(3,W=K.ref),"$$scope"in K&&e(18,r=K.$$scope)},n.$$.update=()=>{n.$$.dirty[0]&2&&e(15,i=Array.isArray(d)),n.$$.dirty[0]&32787&&e(0,I=i?d.includes(c):I),n.$$.dirty[0]&1&&y("check",I),n.$$.dirty[0]&16384&&e(17,a=(L==null?void 0:L.offsetWidth)<(L==null?void 0:L.scrollWidth)),n.$$.dirty[0]&147460&&e(2,C=!C&&a?L==null?void 0:L.innerText:C)},[I,d,C,W,c,u,N,E,S,H,A,M,b,h,L,i,l,a,r,s,$,f,P,p,a1,A1,h1,m1,V,d1,X,Y,c1]}class Hi extends E1{constructor(t){super(),B1(this,t,Si,ui,N1,{value:4,checked:0,group:1,indeterminate:5,skeleton:6,required:7,readonly:8,disabled:9,labelText:10,hideLabel:11,name:12,title:2,id:13,ref:3},null,[-1,-1])}}const Yn=Hi;function E0(n){let t,e;return{c(){t=e1("title"),e=t1(n[1])},m(i,a){G(i,t,a),U(t,e)},p(i,a){a&2&&o1(e,i[1])},d(i){i&&R(t)}}}function Ai(n){let t,e,i,a=n[1]&&E0(n),o=[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{preserveAspectRatio:"xMidYMid meet"},{width:n[0]},{height:n[0]},n[2],n[3]],l={};for(let s=0;s<o.length;s+=1)l=_(l,o[s]);return{c(){t=e1("svg"),a&&a.c(),e=e1("path"),i=e1("path"),g(e,"d","M16,2C8.3,2,2,8.3,2,16s6.3,14,14,14s14-6.3,14-14C30,8.3,23.7,2,16,2z M14.9,8h2.2v11h-2.2V8z M16,25	c-0.8,0-1.5-0.7-1.5-1.5S15.2,22,16,22c0.8,0,1.5,0.7,1.5,1.5S16.8,25,16,25z"),g(i,"fill","none"),g(i,"d","M17.5,23.5c0,0.8-0.7,1.5-1.5,1.5c-0.8,0-1.5-0.7-1.5-1.5S15.2,22,16,22	C16.8,22,17.5,22.7,17.5,23.5z M17.1,8h-2.2v11h2.2V8z"),g(i,"data-icon-path","inner-path"),g(i,"opacity","0"),H1(t,l)},m(s,r){G(s,t,r),a&&a.m(t,null),U(t,e),U(t,i)},p(s,[r]){s[1]?a?a.p(s,r):(a=E0(s),a.c(),a.m(t,e)):a&&(a.d(1),a=null),H1(t,l=r1(o,[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{preserveAspectRatio:"xMidYMid meet"},r&1&&{width:s[0]},r&1&&{height:s[0]},r&4&&s[2],r&8&&s[3]]))},i:i1,o:i1,d(s){s&&R(t),a&&a.d()}}}function Ci(n,t,e){let i,a;const o=["size","title"];let l=q(t,o),{size:s=16}=t,{title:r=void 0}=t;return n.$$set=c=>{e(5,t=_(_({},t),n1(c))),e(3,l=q(t,o)),"size"in c&&e(0,s=c.size),"title"in c&&e(1,r=c.title)},n.$$.update=()=>{e(4,i=t["aria-label"]||t["aria-labelledby"]||r),e(2,a={"aria-hidden":i?void 0:!0,role:i?"img":void 0,focusable:Number(t.tabindex)===0?!0:void 0})},t=n1(t),[s,r,a,l,i]}class Mi extends E1{constructor(t){super(),B1(this,t,Ci,Ai,N1,{size:0,title:1})}}const On=Mi;function d0(n){let t,e;return{c(){t=e1("title"),e=t1(n[1])},m(i,a){G(i,t,a),U(t,e)},p(i,a){a&2&&o1(e,i[1])},d(i){i&&R(t)}}}function Ti(n){let t,e,i,a,o=n[1]&&d0(n),l=[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{preserveAspectRatio:"xMidYMid meet"},{width:n[0]},{height:n[0]},n[2],n[3]],s={};for(let r=0;r<l.length;r+=1)s=_(s,l[r]);return{c(){t=e1("svg"),o&&o.c(),e=e1("path"),i=e1("path"),a=e1("path"),g(e,"fill","none"),g(e,"d","M16,26a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,16,26Zm-1.125-5h2.25V12h-2.25Z"),g(e,"data-icon-path","inner-path"),g(i,"d","M16.002,6.1714h-.004L4.6487,27.9966,4.6506,28H27.3494l.0019-.0034ZM14.875,12h2.25v9h-2.25ZM16,26a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,16,26Z"),g(a,"d","M29,30H3a1,1,0,0,1-.8872-1.4614l13-25a1,1,0,0,1,1.7744,0l13,25A1,1,0,0,1,29,30ZM4.6507,28H27.3493l.002-.0033L16.002,6.1714h-.004L4.6487,27.9967Z"),H1(t,s)},m(r,c){G(r,t,c),o&&o.m(t,null),U(t,e),U(t,i),U(t,a)},p(r,[c]){r[1]?o?o.p(r,c):(o=d0(r),o.c(),o.m(t,e)):o&&(o.d(1),o=null),H1(t,s=r1(l,[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{preserveAspectRatio:"xMidYMid meet"},c&1&&{width:r[0]},c&1&&{height:r[0]},c&4&&r[2],c&8&&r[3]]))},i:i1,o:i1,d(r){r&&R(t),o&&o.d()}}}function fi(n,t,e){let i,a;const o=["size","title"];let l=q(t,o),{size:s=16}=t,{title:r=void 0}=t;return n.$$set=c=>{e(5,t=_(_({},t),n1(c))),e(3,l=q(t,o)),"size"in c&&e(0,s=c.size),"title"in c&&e(1,r=c.title)},n.$$.update=()=>{e(4,i=t["aria-label"]||t["aria-labelledby"]||r),e(2,a={"aria-hidden":i?void 0:!0,role:i?"img":void 0,focusable:Number(t.tabindex)===0?!0:void 0})},t=n1(t),[s,r,a,l,i]}class Ri extends E1{constructor(t){super(),B1(this,t,fi,Ti,N1,{size:0,title:1})}}const Gi=Ri;function u0(n){let t,e;return{c(){t=e1("title"),e=t1(n[1])},m(i,a){G(i,t,a),U(t,e)},p(i,a){a&2&&o1(e,i[1])},d(i){i&&R(t)}}}function gi(n){let t,e,i=n[1]&&u0(n),a=[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{preserveAspectRatio:"xMidYMid meet"},{width:n[0]},{height:n[0]},n[2],n[3]],o={};for(let l=0;l<a.length;l+=1)o=_(o,a[l]);return{c(){t=e1("svg"),i&&i.c(),e=e1("path"),g(e,"d","M16 22L6 12 7.4 10.6 16 19.2 24.6 10.6 26 12z"),H1(t,o)},m(l,s){G(l,t,s),i&&i.m(t,null),U(t,e)},p(l,[s]){l[1]?i?i.p(l,s):(i=u0(l),i.c(),i.m(t,e)):i&&(i.d(1),i=null),H1(t,o=r1(a,[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{preserveAspectRatio:"xMidYMid meet"},s&1&&{width:l[0]},s&1&&{height:l[0]},s&4&&l[2],s&8&&l[3]]))},i:i1,o:i1,d(l){l&&R(t),i&&i.d()}}}function mi(n,t,e){let i,a;const o=["size","title"];let l=q(t,o),{size:s=16}=t,{title:r=void 0}=t;return n.$$set=c=>{e(5,t=_(_({},t),n1(c))),e(3,l=q(t,o)),"size"in c&&e(0,s=c.size),"title"in c&&e(1,r=c.title)},n.$$.update=()=>{e(4,i=t["aria-label"]||t["aria-labelledby"]||r),e(2,a={"aria-hidden":i?void 0:!0,role:i?"img":void 0,focusable:Number(t.tabindex)===0?!0:void 0})},t=n1(t),[s,r,a,l,i]}class hi extends E1{constructor(t){super(),B1(this,t,mi,gi,N1,{size:0,title:1})}}const mt=hi;function S0(n){let t,e;return{c(){t=e1("title"),e=t1(n[1])},m(i,a){G(i,t,a),U(t,e)},p(i,a){a&2&&o1(e,i[1])},d(i){i&&R(t)}}}function Ui(n){let t,e,i=n[1]&&S0(n),a=[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{preserveAspectRatio:"xMidYMid meet"},{width:n[0]},{height:n[0]},n[2],n[3]],o={};for(let l=0;l<a.length;l+=1)o=_(o,a[l]);return{c(){t=e1("svg"),i&&i.c(),e=e1("path"),g(e,"d","M24 9.4L22.6 8 16 14.6 9.4 8 8 9.4 14.6 16 8 22.6 9.4 24 16 17.4 22.6 24 24 22.6 17.4 16 24 9.4z"),H1(t,o)},m(l,s){G(l,t,s),i&&i.m(t,null),U(t,e)},p(l,[s]){l[1]?i?i.p(l,s):(i=S0(l),i.c(),i.m(t,e)):i&&(i.d(1),i=null),H1(t,o=r1(a,[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{preserveAspectRatio:"xMidYMid meet"},s&1&&{width:l[0]},s&1&&{height:l[0]},s&4&&l[2],s&8&&l[3]]))},i:i1,o:i1,d(l){l&&R(t),i&&i.d()}}}function bi(n,t,e){let i,a;const o=["size","title"];let l=q(t,o),{size:s=16}=t,{title:r=void 0}=t;return n.$$set=c=>{e(5,t=_(_({},t),n1(c))),e(3,l=q(t,o)),"size"in c&&e(0,s=c.size),"title"in c&&e(1,r=c.title)},n.$$.update=()=>{e(4,i=t["aria-label"]||t["aria-labelledby"]||r),e(2,a={"aria-hidden":i?void 0:!0,role:i?"img":void 0,focusable:Number(t.tabindex)===0?!0:void 0})},t=n1(t),[s,r,a,l,i]}let Li=class extends E1{constructor(t){super(),B1(this,t,bi,Ui,N1,{size:0,title:1})}};const It=Li,ft=new Set,Kn=P1(0),H0=()=>Kn.set([...ft].filter(n=>Ne(n)).length),Wi=n=>lt(()=>{ft.add(n);const t=n.subscribe(H0);return()=>{t(),ft.delete(n),H0()}});Kn.subscribe(n=>{typeof document<"u"&&document.body.classList.toggle("bx--body--with-modal-open",n>0)});function Pi(n){let t,e,i,a,o,l;const s=n[18].default,r=f1(s,n,n[17],null);let c=[{role:"presentation"},n[14]],I={};for(let d=0;d<c.length;d+=1)I=_(I,c[d]);return{c(){t=O("div"),e=O("div"),r&&r.c(),g(e,"role","dialog"),g(e,"aria-modal","true"),g(e,"aria-label",i=n[15]["aria-label"]||n[9]||void 0),g(e,"class",n[5]),B(e,"bx--modal-container",!0),B(e,"bx--modal-container--xs",n[2]==="xs"),B(e,"bx--modal-container--sm",n[2]==="sm"),B(e,"bx--modal-container--lg",n[2]==="lg"),l1(t,I),B(t,"bx--modal",!0),B(t,"is-visible",n[0]),B(t,"bx--modal--danger",n[3])},m(d,u){G(d,t,u),U(t,e),r&&r.m(e,null),n[24](e),n[26](t),a=!0,o||(l=[v(e,"click",n[25]),v(t,"keydown",n[19]),v(t,"keydown",n[27]),v(t,"click",n[20]),v(t,"click",n[28]),v(t,"mouseover",n[21]),v(t,"mouseenter",n[22]),v(t,"mouseleave",n[23]),v(t,"transitionend",n[29])],o=!0)},p(d,u){r&&r.p&&(!a||u[0]&131072)&&G1(r,s,d,d[17],a?R1(s,d[17],u,null):g1(d[17]),null),(!a||u[0]&33280&&i!==(i=d[15]["aria-label"]||d[9]||void 0))&&g(e,"aria-label",i),(!a||u[0]&32)&&g(e,"class",d[5]),(!a||u[0]&32)&&B(e,"bx--modal-container",!0),(!a||u[0]&36)&&B(e,"bx--modal-container--xs",d[2]==="xs"),(!a||u[0]&36)&&B(e,"bx--modal-container--sm",d[2]==="sm"),(!a||u[0]&36)&&B(e,"bx--modal-container--lg",d[2]==="lg"),l1(t,I=r1(c,[{role:"presentation"},u[0]&16384&&d[14]])),B(t,"bx--modal",!0),B(t,"is-visible",d[0]),B(t,"bx--modal--danger",d[3])},i(d){a||(T(r,d),a=!0)},o(d){m(r,d),a=!1},d(d){d&&R(t),r&&r.d(d),n[24](null),n[26](null),o=!1,C1(l)}}}function vi(n,t,e){let i;const a=["size","open","danger","preventCloseOnClickOutside","containerClass","selectorPrimaryFocus","ref"];let o=q(t,a),l,s,{$$slots:r={},$$scope:c}=t,{size:I=void 0}=t,{open:d=!1}=t,{danger:u=!1}=t,{preventCloseOnClickOutside:N=!1}=t,{containerClass:E=""}=t,{selectorPrimaryFocus:S="[data-modal-primary-focus]"}=t,{ref:H=null}=t;const A=p1(),M=P1(void 0);W1(n,M,Y=>e(9,s=Y));let b=null,C=null,h=!1;Et("ComposedModal",{closeModal:()=>{e(0,d=!1)},submit:()=>{A("submit"),A("click:button--primary")},declareRef:Y=>{b=Y},updateLabel:Y=>{M.set(Y)}});function W(Y){var K;if(S==null)return;const c1=((K=Y||C)==null?void 0:K.querySelector(S))||b;c1!=null&&c1.focus()}let y=!1;const L=P1(d);W1(n,L,Y=>e(32,l=Y)),Wi(L),lt(()=>{Fn().then(()=>{W()})}),Bt(()=>{y?d||(y=!1,A("close")):d&&(y=!0,A("open"))});function $(Y){F.call(this,n,Y)}function f(Y){F.call(this,n,Y)}function P(Y){F.call(this,n,Y)}function p(Y){F.call(this,n,Y)}function a1(Y){F.call(this,n,Y)}function A1(Y){I1[Y?"unshift":"push"](()=>{C=Y,e(6,C)})}const h1=()=>{e(7,h=!0)};function m1(Y){I1[Y?"unshift":"push"](()=>{H=Y,e(1,H)})}const V=Y=>{if(d){if(Y.key==="Escape")e(0,d=!1);else if(Y.key==="Tab"){const c1=`
  a[href], area[href], input:not([disabled]):not([tabindex='-1']),
  button:not([disabled]):not([tabindex='-1']),select:not([disabled]):not([tabindex='-1']),
  textarea:not([disabled]):not([tabindex='-1']),
  iframe, object, embed, *[tabindex]:not([tabindex='-1']):not([disabled]), *[contenteditable=true]
`,K=Array.from(H.querySelectorAll(c1));let Z=K.indexOf(document.activeElement);Z===-1&&Y.shiftKey&&(Z=0),Z+=K.length+(Y.shiftKey?-1:1),Z%=K.length,K[Z].focus(),Y.preventDefault()}}},d1=()=>{!h&&!N&&e(0,d=!1),e(7,h=!1)},X=({propertyName:Y,currentTarget:c1})=>{Y==="transform"&&A("transitionend",{open:d}),i&&(W(c1),e(8,i=!1))};return n.$$set=Y=>{e(15,t=_(_({},t),n1(Y))),e(14,o=q(t,a)),"size"in Y&&e(2,I=Y.size),"open"in Y&&e(0,d=Y.open),"danger"in Y&&e(3,u=Y.danger),"preventCloseOnClickOutside"in Y&&e(4,N=Y.preventCloseOnClickOutside),"containerClass"in Y&&e(5,E=Y.containerClass),"selectorPrimaryFocus"in Y&&e(16,S=Y.selectorPrimaryFocus),"ref"in Y&&e(1,H=Y.ref),"$$scope"in Y&&e(17,c=Y.$$scope)},n.$$.update=()=>{n.$$.dirty[0]&1&&e(8,i=d),n.$$.dirty[0]&1&&Ie(L,l=d,l)},t=n1(t),[d,H,I,u,N,E,C,h,i,s,A,M,W,L,o,t,S,c,r,$,f,P,p,a1,A1,h1,m1,V,d1,X]}class Di extends E1{constructor(t){super(),B1(this,t,vi,Pi,N1,{size:2,open:0,danger:3,preventCloseOnClickOutside:4,containerClass:5,selectorPrimaryFocus:16,ref:1},null,[-1,-1])}}const Fi=Di;function A0(n){let t,e;return{c(){t=O("h2"),e=t1(n[1]),g(t,"class",n[2]),B(t,"bx--modal-header__label",!0),B(t,"bx--type-delta",!0)},m(i,a){G(i,t,a),U(t,e)},p(i,a){a&2&&o1(e,i[1]),a&4&&g(t,"class",i[2]),a&4&&B(t,"bx--modal-header__label",!0),a&4&&B(t,"bx--type-delta",!0)},d(i){i&&R(t)}}}function C0(n){let t,e;return{c(){t=O("h3"),e=t1(n[0]),g(t,"class",n[3]),B(t,"bx--modal-header__heading",!0),B(t,"bx--type-beta",!0)},m(i,a){G(i,t,a),U(t,e)},p(i,a){a&1&&o1(e,i[0]),a&8&&g(t,"class",i[3]),a&8&&B(t,"bx--modal-header__heading",!0),a&8&&B(t,"bx--type-beta",!0)},d(i){i&&R(t)}}}function _i(n){let t,e,i,a,o,l,s,r,c,I=n[1]&&A0(n),d=n[0]&&C0(n);const u=n[10].default,N=f1(u,n,n[9],null);l=new It({props:{size:20,class:"bx--modal-close__icon "+n[5],"aria-hidden":"true"}});let E=[n[8]],S={};for(let H=0;H<E.length;H+=1)S=_(S,E[H]);return{c(){t=O("div"),I&&I.c(),e=k(),d&&d.c(),i=k(),N&&N.c(),a=k(),o=O("button"),z(l.$$.fragment),g(o,"type","button"),g(o,"aria-label",n[6]),g(o,"class",n[4]),B(o,"bx--modal-close",!0),l1(t,S),B(t,"bx--modal-header",!0)},m(H,A){G(H,t,A),I&&I.m(t,null),U(t,e),d&&d.m(t,null),U(t,i),N&&N.m(t,null),U(t,a),U(t,o),J(l,o,null),s=!0,r||(c=[v(o,"click",n[11]),v(o,"click",n[7])],r=!0)},p(H,[A]){H[1]?I?I.p(H,A):(I=A0(H),I.c(),I.m(t,e)):I&&(I.d(1),I=null),H[0]?d?d.p(H,A):(d=C0(H),d.c(),d.m(t,i)):d&&(d.d(1),d=null),N&&N.p&&(!s||A&512)&&G1(N,u,H,H[9],s?R1(u,H[9],A,null):g1(H[9]),null);const M={};A&32&&(M.class="bx--modal-close__icon "+H[5]),l.$set(M),(!s||A&64)&&g(o,"aria-label",H[6]),(!s||A&16)&&g(o,"class",H[4]),(!s||A&16)&&B(o,"bx--modal-close",!0),l1(t,S=r1(E,[A&256&&H[8]])),B(t,"bx--modal-header",!0)},i(H){s||(T(N,H),T(l.$$.fragment,H),s=!0)},o(H){m(N,H),m(l.$$.fragment,H),s=!1},d(H){H&&R(t),I&&I.d(),d&&d.d(),N&&N.d(H),w(l),r=!1,C1(c)}}}function pi(n,t,e){const i=["title","label","labelClass","titleClass","closeClass","closeIconClass","iconDescription"];let a=q(t,i),{$$slots:o={},$$scope:l}=t,{title:s=""}=t,{label:r=""}=t,{labelClass:c=""}=t,{titleClass:I=""}=t,{closeClass:d=""}=t,{closeIconClass:u=""}=t,{iconDescription:N="Close"}=t;const{closeModal:E,updateLabel:S}=q1("ComposedModal");function H(A){F.call(this,n,A)}return n.$$set=A=>{t=_(_({},t),n1(A)),e(8,a=q(t,i)),"title"in A&&e(0,s=A.title),"label"in A&&e(1,r=A.label),"labelClass"in A&&e(2,c=A.labelClass),"titleClass"in A&&e(3,I=A.titleClass),"closeClass"in A&&e(4,d=A.closeClass),"closeIconClass"in A&&e(5,u=A.closeIconClass),"iconDescription"in A&&e(6,N=A.iconDescription),"$$scope"in A&&e(9,l=A.$$scope)},n.$$.update=()=>{n.$$.dirty&2&&S(r)},[s,r,c,I,d,u,N,E,a,l,o,H]}class yi extends E1{constructor(t){super(),B1(this,t,pi,_i,N1,{title:0,label:1,labelClass:2,titleClass:3,closeClass:4,closeIconClass:5,iconDescription:6})}}const Yi=yi;function M0(n){let t,e;return{c(){t=e1("title"),e=t1(n[1])},m(i,a){G(i,t,a),U(t,e)},p(i,a){a&2&&o1(e,i[1])},d(i){i&&R(t)}}}function Oi(n){let t,e,i=n[1]&&M0(n),a=[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{preserveAspectRatio:"xMidYMid meet"},{width:n[0]},{height:n[0]},n[2],n[3]],o={};for(let l=0;l<a.length;l+=1)o=_(o,a[l]);return{c(){t=e1("svg"),i&&i.c(),e=e1("path"),g(e,"d","M29,27.5859l-7.5521-7.5521a11.0177,11.0177,0,1,0-1.4141,1.4141L27.5859,29ZM4,13a9,9,0,1,1,9,9A9.01,9.01,0,0,1,4,13Z"),H1(t,o)},m(l,s){G(l,t,s),i&&i.m(t,null),U(t,e)},p(l,[s]){l[1]?i?i.p(l,s):(i=M0(l),i.c(),i.m(t,e)):i&&(i.d(1),i=null),H1(t,o=r1(a,[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{preserveAspectRatio:"xMidYMid meet"},s&1&&{width:l[0]},s&1&&{height:l[0]},s&4&&l[2],s&8&&l[3]]))},i:i1,o:i1,d(l){l&&R(t),i&&i.d()}}}function Ki(n,t,e){let i,a;const o=["size","title"];let l=q(t,o),{size:s=16}=t,{title:r=void 0}=t;return n.$$set=c=>{e(5,t=_(_({},t),n1(c))),e(3,l=q(t,o)),"size"in c&&e(0,s=c.size),"title"in c&&e(1,r=c.title)},n.$$.update=()=>{e(4,i=t["aria-label"]||t["aria-labelledby"]||r),e(2,a={"aria-hidden":i?void 0:!0,role:i?"img":void 0,focusable:Number(t.tabindex)===0?!0:void 0})},t=n1(t),[s,r,a,l,i]}class ki extends E1{constructor(t){super(),B1(this,t,Ki,Oi,N1,{size:0,title:1})}}const Ji=ki;function wi(n){let t,e,i,a,o,l,s=[n[1]],r={};for(let c=0;c<s.length;c+=1)r=_(r,s[c]);return{c(){t=O("div"),e=O("span"),i=k(),a=O("div"),B(e,"bx--label",!0),B(a,"bx--search-input",!0),l1(t,r),B(t,"bx--skeleton",!0),B(t,"bx--search--sm",n[0]==="sm"),B(t,"bx--search--lg",n[0]==="lg"),B(t,"bx--search--xl",n[0]==="xl")},m(c,I){G(c,t,I),U(t,e),U(t,i),U(t,a),o||(l=[v(t,"click",n[2]),v(t,"mouseover",n[3]),v(t,"mouseenter",n[4]),v(t,"mouseleave",n[5])],o=!0)},p(c,[I]){l1(t,r=r1(s,[I&2&&c[1]])),B(t,"bx--skeleton",!0),B(t,"bx--search--sm",c[0]==="sm"),B(t,"bx--search--lg",c[0]==="lg"),B(t,"bx--search--xl",c[0]==="xl")},i:i1,o:i1,d(c){c&&R(t),o=!1,C1(l)}}}function zi(n,t,e){const i=["size"];let a=q(t,i),{size:o="xl"}=t;function l(I){F.call(this,n,I)}function s(I){F.call(this,n,I)}function r(I){F.call(this,n,I)}function c(I){F.call(this,n,I)}return n.$$set=I=>{t=_(_({},t),n1(I)),e(1,a=q(t,i)),"size"in I&&e(0,o=I.size)},[o,a,l,s,r,c]}class Zi extends E1{constructor(t){super(),B1(this,t,zi,wi,N1,{size:0})}}const Vi=Zi,qi=n=>({}),T0=n=>({});function Qi(n){let t,e,i,a,o,l,s,r,c,I,d,u,N,E,S,H;var A=n[14];function M(f){return{props:{class:"bx--search-magnifier-icon"}}}A&&(i=F1(A,M()));const b=n[20].labelText,C=f1(b,n,n[19],T0),h=C||Xi(n);let W=[{type:"text"},{role:"searchbox"},{autofocus:c=n[11]===!0?!0:void 0},{autocomplete:n[10]},{disabled:n[7]},{id:n[15]},{placeholder:n[9]},n[18]],y={};for(let f=0;f<W.length;f+=1)y=_(y,W[f]);var L=It;function $(f){return{props:{size:f[3]==="xl"?20:16}}}return L&&(u=F1(L,$(n))),{c(){t=O("div"),e=O("div"),i&&z(i.$$.fragment),a=k(),o=O("label"),h&&h.c(),s=k(),r=O("input"),I=k(),d=O("button"),u&&z(u.$$.fragment),B(e,"bx--search-magnifier",!0),g(o,"id",l=n[15]+"-search"),g(o,"for",n[15]),B(o,"bx--label",!0),l1(r,y),B(r,"bx--search-input",!0),g(d,"type","button"),g(d,"aria-label",n[12]),d.disabled=n[7],B(d,"bx--search-close",!0),B(d,"bx--search-close--hidden",n[2]===""),g(t,"role","search"),g(t,"aria-labelledby",N=n[15]+"-search"),g(t,"class",n[4]),B(t,"bx--search",!0),B(t,"bx--search--light",n[6]),B(t,"bx--search--disabled",n[7]),B(t,"bx--search--sm",n[3]==="sm"),B(t,"bx--search--lg",n[3]==="lg"),B(t,"bx--search--xl",n[3]==="xl"),B(t,"bx--search--expandable",n[8]),B(t,"bx--search--expanded",n[0])},m(f,P){G(f,t,P),U(t,e),i&&J(i,e,null),n[33](e),U(t,a),U(t,o),h&&h.m(o,null),U(t,s),U(t,r),r.autofocus&&r.focus(),n[35](r),jt(r,n[2]),U(t,I),U(t,d),u&&J(u,d,null),E=!0,S||(H=[v(e,"click",n[34]),v(r,"input",n[36]),v(r,"change",n[22]),v(r,"input",n[23]),v(r,"focus",n[24]),v(r,"focus",n[37]),v(r,"blur",n[25]),v(r,"blur",n[38]),v(r,"keydown",n[26]),v(r,"keydown",n[39]),v(r,"keyup",n[27]),v(r,"paste",n[28]),v(d,"click",n[21]),v(d,"click",n[40])],S=!0)},p(f,P){if(A!==(A=f[14])){if(i){u1();const a1=i;m(a1.$$.fragment,1,0,()=>{w(a1,1)}),S1()}A?(i=F1(A,M()),z(i.$$.fragment),T(i.$$.fragment,1),J(i,e,null)):i=null}C?C.p&&(!E||P[0]&524288)&&G1(C,b,f,f[19],E?R1(b,f[19],P,qi):g1(f[19]),T0):h&&h.p&&(!E||P[0]&8192)&&h.p(f,E?P:[-1,-1]),(!E||P[0]&32768&&l!==(l=f[15]+"-search"))&&g(o,"id",l),(!E||P[0]&32768)&&g(o,"for",f[15]),l1(r,y=r1(W,[{type:"text"},{role:"searchbox"},(!E||P[0]&2048&&c!==(c=f[11]===!0?!0:void 0))&&{autofocus:c},(!E||P[0]&1024)&&{autocomplete:f[10]},(!E||P[0]&128)&&{disabled:f[7]},(!E||P[0]&32768)&&{id:f[15]},(!E||P[0]&512)&&{placeholder:f[9]},P[0]&262144&&f[18]])),P[0]&4&&r.value!==f[2]&&jt(r,f[2]),B(r,"bx--search-input",!0);const p={};if(P[0]&8&&(p.size=f[3]==="xl"?20:16),L!==(L=It)){if(u){u1();const a1=u;m(a1.$$.fragment,1,0,()=>{w(a1,1)}),S1()}L?(u=F1(L,$(f)),z(u.$$.fragment),T(u.$$.fragment,1),J(u,d,null)):u=null}else L&&u.$set(p);(!E||P[0]&4096)&&g(d,"aria-label",f[12]),(!E||P[0]&128)&&(d.disabled=f[7]),(!E||P[0]&4)&&B(d,"bx--search-close--hidden",f[2]===""),(!E||P[0]&32768&&N!==(N=f[15]+"-search"))&&g(t,"aria-labelledby",N),(!E||P[0]&16)&&g(t,"class",f[4]),(!E||P[0]&16)&&B(t,"bx--search",!0),(!E||P[0]&80)&&B(t,"bx--search--light",f[6]),(!E||P[0]&144)&&B(t,"bx--search--disabled",f[7]),(!E||P[0]&24)&&B(t,"bx--search--sm",f[3]==="sm"),(!E||P[0]&24)&&B(t,"bx--search--lg",f[3]==="lg"),(!E||P[0]&24)&&B(t,"bx--search--xl",f[3]==="xl"),(!E||P[0]&272)&&B(t,"bx--search--expandable",f[8]),(!E||P[0]&17)&&B(t,"bx--search--expanded",f[0])},i(f){E||(i&&T(i.$$.fragment,f),T(h,f),u&&T(u.$$.fragment,f),E=!0)},o(f){i&&m(i.$$.fragment,f),m(h,f),u&&m(u.$$.fragment,f),E=!1},d(f){f&&R(t),i&&w(i),n[33](null),h&&h.d(f),n[35](null),u&&w(u),S=!1,C1(H)}}}function ji(n){let t,e;const i=[{size:n[3]},n[18]];let a={};for(let o=0;o<i.length;o+=1)a=_(a,i[o]);return t=new Vi({props:a}),t.$on("click",n[29]),t.$on("mouseover",n[30]),t.$on("mouseenter",n[31]),t.$on("mouseleave",n[32]),{c(){z(t.$$.fragment)},m(o,l){J(t,o,l),e=!0},p(o,l){const s=l[0]&262152?r1(i,[l[0]&8&&{size:o[3]},l[0]&262144&&Q1(o[18])]):{};t.$set(s)},i(o){e||(T(t.$$.fragment,o),e=!0)},o(o){m(t.$$.fragment,o),e=!1},d(o){w(t,o)}}}function Xi(n){let t;return{c(){t=t1(n[13])},m(e,i){G(e,t,i)},p(e,i){i[0]&8192&&o1(t,e[13])},d(e){e&&R(t)}}}function xi(n){let t,e,i,a;const o=[ji,Qi],l=[];function s(r,c){return r[5]?0:1}return t=s(n),e=l[t]=o[t](n),{c(){e.c(),i=b1()},m(r,c){l[t].m(r,c),G(r,i,c),a=!0},p(r,c){let I=t;t=s(r),t===I?l[t].p(r,c):(u1(),m(l[I],1,1,()=>{l[I]=null}),S1(),e=l[t],e?e.p(r,c):(e=l[t]=o[t](r),e.c()),T(e,1),e.m(i.parentNode,i))},i(r){a||(T(e),a=!0)},o(r){m(e),a=!1},d(r){l[t].d(r),r&&R(i)}}}function $i(n,t,e){const i=["value","size","searchClass","skeleton","light","disabled","expandable","expanded","placeholder","autocomplete","autofocus","closeButtonLabelText","labelText","icon","id","ref"];let a=q(t,i),{$$slots:o={},$$scope:l}=t,{value:s=""}=t,{size:r="xl"}=t,{searchClass:c=""}=t,{skeleton:I=!1}=t,{light:d=!1}=t,{disabled:u=!1}=t,{expandable:N=!1}=t,{expanded:E=!1}=t,{placeholder:S="Search..."}=t,{autocomplete:H="off"}=t,{autofocus:A=!1}=t,{closeButtonLabelText:M="Clear search input"}=t,{labelText:b=""}=t,{icon:C=Ji}=t,{id:h="ccs-"+Math.random().toString(36)}=t,{ref:W=null}=t;const y=p1();let L=null;function $(j){F.call(this,n,j)}function f(j){F.call(this,n,j)}function P(j){F.call(this,n,j)}function p(j){F.call(this,n,j)}function a1(j){F.call(this,n,j)}function A1(j){F.call(this,n,j)}function h1(j){F.call(this,n,j)}function m1(j){F.call(this,n,j)}function V(j){F.call(this,n,j)}function d1(j){F.call(this,n,j)}function X(j){F.call(this,n,j)}function Y(j){F.call(this,n,j)}function c1(j){I1[j?"unshift":"push"](()=>{L=j,e(16,L)})}const K=()=>{N&&e(0,E=!0)};function Z(j){I1[j?"unshift":"push"](()=>{W=j,e(1,W)})}function Q(){s=this.value,e(2,s)}const K1=()=>{N&&e(0,E=!0)},D1=()=>{E&&s.trim().length===0&&e(0,E=!1)},k1=({key:j})=>{j==="Escape"&&(e(2,s=""),y("clear"))},J1=()=>{e(2,s=""),W.focus(),y("clear")};return n.$$set=j=>{t=_(_({},t),n1(j)),e(18,a=q(t,i)),"value"in j&&e(2,s=j.value),"size"in j&&e(3,r=j.size),"searchClass"in j&&e(4,c=j.searchClass),"skeleton"in j&&e(5,I=j.skeleton),"light"in j&&e(6,d=j.light),"disabled"in j&&e(7,u=j.disabled),"expandable"in j&&e(8,N=j.expandable),"expanded"in j&&e(0,E=j.expanded),"placeholder"in j&&e(9,S=j.placeholder),"autocomplete"in j&&e(10,H=j.autocomplete),"autofocus"in j&&e(11,A=j.autofocus),"closeButtonLabelText"in j&&e(12,M=j.closeButtonLabelText),"labelText"in j&&e(13,b=j.labelText),"icon"in j&&e(14,C=j.icon),"id"in j&&e(15,h=j.id),"ref"in j&&e(1,W=j.ref),"$$scope"in j&&e(19,l=j.$$scope)},n.$$.update=()=>{n.$$.dirty[0]&3&&E&&W&&W.focus(),n.$$.dirty[0]&1&&y(E?"expand":"collapse")},[E,W,s,r,c,I,d,u,N,S,H,A,M,b,C,h,L,y,a,l,o,$,f,P,p,a1,A1,h1,m1,V,d1,X,Y,c1,K,Z,Q,K1,D1,k1,J1]}class ta extends E1{constructor(t){super(),B1(this,t,$i,xi,N1,{value:2,size:3,searchClass:4,skeleton:5,light:6,disabled:7,expandable:8,expanded:0,placeholder:9,autocomplete:10,autofocus:11,closeButtonLabelText:12,labelText:13,icon:14,id:15,ref:1},null,[-1,-1])}}const Nt=ta;function f0(n){let t,e;return{c(){t=e1("title"),e=t1(n[1])},m(i,a){G(i,t,a),U(t,e)},p(i,a){a&2&&o1(e,i[1])},d(i){i&&R(t)}}}function na(n){let t,e,i,a=n[1]&&f0(n),o=[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{preserveAspectRatio:"xMidYMid meet"},{width:n[0]},{height:n[0]},n[2],n[3]],l={};for(let s=0;s<o.length;s+=1)l=_(l,o[s]);return{c(){t=e1("svg"),a&&a.c(),e=e1("path"),i=e1("path"),g(e,"d","M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2ZM14,21.5908l-5-5L10.5906,15,14,18.4092,21.41,11l1.5957,1.5859Z"),g(i,"fill","none"),g(i,"d","M14 21.591L9 16.591 10.591 15 14 18.409 21.41 11 23.005 12.585 14 21.591z"),g(i,"data-icon-path","inner-path"),H1(t,l)},m(s,r){G(s,t,r),a&&a.m(t,null),U(t,e),U(t,i)},p(s,[r]){s[1]?a?a.p(s,r):(a=f0(s),a.c(),a.m(t,e)):a&&(a.d(1),a=null),H1(t,l=r1(o,[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{preserveAspectRatio:"xMidYMid meet"},r&1&&{width:s[0]},r&1&&{height:s[0]},r&4&&s[2],r&8&&s[3]]))},i:i1,o:i1,d(s){s&&R(t),a&&a.d()}}}function ea(n,t,e){let i,a;const o=["size","title"];let l=q(t,o),{size:s=16}=t,{title:r=void 0}=t;return n.$$set=c=>{e(5,t=_(_({},t),n1(c))),e(3,l=q(t,o)),"size"in c&&e(0,s=c.size),"title"in c&&e(1,r=c.title)},n.$$.update=()=>{e(4,i=t["aria-label"]||t["aria-labelledby"]||r),e(2,a={"aria-hidden":i?void 0:!0,role:i?"img":void 0,focusable:Number(t.tabindex)===0?!0:void 0})},t=n1(t),[s,r,a,l,i]}class ia extends E1{constructor(t){super(),B1(this,t,ea,na,N1,{size:0,title:1})}}const aa=ia;function kn(){localStorage.clear()}function la(n,t,e){let{key:i="local-storage-key"}=t,{value:a=""}=t;function o(){localStorage.removeItem(i)}const l=p1();let s=a;function r(){typeof a=="object"?localStorage.setItem(i,JSON.stringify(a)):localStorage.setItem(i,a)}return lt(()=>{const c=localStorage.getItem(i);if(c!=null)try{e(0,a=JSON.parse(c))}catch{e(0,a=c)}else r(),l("save")}),Bt(()=>{s!==a&&(r(),l("update",{prevValue:s,value:a})),s=a}),n.$$set=c=>{"key"in c&&e(1,i=c.key),"value"in c&&e(0,a=c.value)},[a,i,o,kn]}class oa extends E1{constructor(t){super(),B1(this,t,la,null,N1,{key:1,value:0,clearItem:2,clearAll:3})}get clearItem(){return this.$$.ctx[2]}get clearAll(){return kn}}const Y1=oa,ra=n=>({}),R0=n=>({});function G0(n){let t,e;const i=n[26].labelText,a=f1(i,n,n[25],R0),o=a||sa(n);return{c(){t=O("label"),o&&o.c(),g(t,"for",n[5]),B(t,"bx--label",!0),B(t,"bx--visually-hidden",n[14]),B(t,"bx--label--disabled",n[4])},m(l,s){G(l,t,s),o&&o.m(t,null),e=!0},p(l,s){a?a.p&&(!e||s[0]&33554432)&&G1(a,i,l,l[25],e?R1(i,l[25],s,ra):g1(l[25]),R0):o&&o.p&&(!e||s[0]&8192)&&o.p(l,e?s:[-1,-1]),(!e||s[0]&32)&&g(t,"for",l[5]),(!e||s[0]&16384)&&B(t,"bx--visually-hidden",l[14]),(!e||s[0]&16)&&B(t,"bx--label--disabled",l[4])},i(l){e||(T(o,l),e=!0)},o(l){m(o,l),e=!1},d(l){l&&R(t),o&&o.d(l)}}}function sa(n){let t;return{c(){t=t1(n[13])},m(e,i){G(e,t,i)},p(e,i){i[0]&8192&&o1(t,e[13])},d(e){e&&R(t)}}}function g0(n){let t,e,i,a,o,l,s,r,c,I,d,u,N,E,S,H,A;const M=n[26].default,b=f1(M,n,n[25],null);c=new mt({props:{class:"bx--select__arrow"}});let C=n[7]&&m0(),h=n[7]&&h0(n),W=n[11]&&U0(n);return{c(){t=O("div"),e=O("div"),i=O("select"),b&&b.c(),r=k(),z(c.$$.fragment),I=k(),C&&C.c(),u=k(),h&&h.c(),N=k(),W&&W.c(),E=b1(),g(i,"aria-describedby",a=n[7]?n[16]:void 0),g(i,"aria-invalid",o=n[7]||void 0),i.disabled=l=n[4]||void 0,i.required=s=n[15]||void 0,g(i,"id",n[5]),g(i,"name",n[6]),B(i,"bx--select-input",!0),B(i,"bx--select-input--sm",n[1]==="sm"),B(i,"bx--select-input--xl",n[1]==="xl"),g(e,"data-invalid",d=n[7]||void 0),B(e,"bx--select-input__wrapper",!0),B(t,"bx--select-input--inline__wrapper",!0)},m(y,L){G(y,t,L),U(t,e),U(e,i),b&&b.m(i,null),n[35](i),U(e,r),J(c,e,null),U(e,I),C&&C.m(e,null),U(t,u),h&&h.m(t,null),G(y,N,L),W&&W.m(y,L),G(y,E,L),S=!0,H||(A=[v(i,"change",n[21]),v(i,"change",n[31]),v(i,"input",n[32]),v(i,"focus",n[33]),v(i,"blur",n[34])],H=!0)},p(y,L){b&&b.p&&(!S||L[0]&33554432)&&G1(b,M,y,y[25],S?R1(M,y[25],L,null):g1(y[25]),null),(!S||L[0]&65664&&a!==(a=y[7]?y[16]:void 0))&&g(i,"aria-describedby",a),(!S||L[0]&128&&o!==(o=y[7]||void 0))&&g(i,"aria-invalid",o),(!S||L[0]&16&&l!==(l=y[4]||void 0))&&(i.disabled=l),(!S||L[0]&32768&&s!==(s=y[15]||void 0))&&(i.required=s),(!S||L[0]&32)&&g(i,"id",y[5]),(!S||L[0]&64)&&g(i,"name",y[6]),(!S||L[0]&2)&&B(i,"bx--select-input--sm",y[1]==="sm"),(!S||L[0]&2)&&B(i,"bx--select-input--xl",y[1]==="xl"),y[7]?C?L[0]&128&&T(C,1):(C=m0(),C.c(),T(C,1),C.m(e,null)):C&&(u1(),m(C,1,1,()=>{C=null}),S1()),(!S||L[0]&128&&d!==(d=y[7]||void 0))&&g(e,"data-invalid",d),y[7]?h?h.p(y,L):(h=h0(y),h.c(),h.m(t,null)):h&&(h.d(1),h=null),y[11]?W?W.p(y,L):(W=U0(y),W.c(),W.m(E.parentNode,E)):W&&(W.d(1),W=null)},i(y){S||(T(b,y),T(c.$$.fragment,y),T(C),S=!0)},o(y){m(b,y),m(c.$$.fragment,y),m(C),S=!1},d(y){y&&R(t),b&&b.d(y),n[35](null),w(c),C&&C.d(),h&&h.d(),y&&R(N),W&&W.d(y),y&&R(E),H=!1,C1(A)}}}function m0(n){let t,e;return t=new On({props:{class:"bx--select__invalid-icon"}}),{c(){z(t.$$.fragment)},m(i,a){J(t,i,a),e=!0},i(i){e||(T(t.$$.fragment,i),e=!0)},o(i){m(t.$$.fragment,i),e=!1},d(i){w(t,i)}}}function h0(n){let t,e;return{c(){t=O("div"),e=t1(n[8]),g(t,"id",n[16]),B(t,"bx--form-requirement",!0)},m(i,a){G(i,t,a),U(t,e)},p(i,a){a[0]&256&&o1(e,i[8]),a[0]&65536&&g(t,"id",i[16])},d(i){i&&R(t)}}}function U0(n){let t,e;return{c(){t=O("div"),e=t1(n[11]),B(t,"bx--form__helper-text",!0),B(t,"bx--form__helper-text--disabled",n[4])},m(i,a){G(i,t,a),U(t,e)},p(i,a){a[0]&2048&&o1(e,i[11]),a[0]&16&&B(t,"bx--form__helper-text--disabled",i[4])},d(i){i&&R(t)}}}function b0(n){let t,e,i,a,o,l,s,r,c,I,d,u,N,E,S,H,A,M;const b=n[26].default,C=f1(b,n,n[25],null);r=new mt({props:{class:"bx--select__arrow"}});let h=n[7]&&L0(),W=!n[7]&&n[9]&&W0(),y=!n[7]&&n[11]&&P0(n),L=n[7]&&v0(n),$=!n[7]&&n[9]&&D0(n);return{c(){t=O("div"),e=O("select"),C&&C.c(),s=k(),z(r.$$.fragment),c=k(),h&&h.c(),I=k(),W&&W.c(),u=k(),y&&y.c(),N=k(),L&&L.c(),E=k(),$&&$.c(),S=b1(),g(e,"id",n[5]),g(e,"name",n[6]),g(e,"aria-describedby",i=n[7]?n[16]:void 0),e.disabled=a=n[4]||void 0,e.required=o=n[15]||void 0,g(e,"aria-invalid",l=n[7]||void 0),B(e,"bx--select-input",!0),B(e,"bx--select-input--sm",n[1]==="sm"),B(e,"bx--select-input--xl",n[1]==="xl"),g(t,"data-invalid",d=n[7]||void 0),B(t,"bx--select-input__wrapper",!0)},m(f,P){G(f,t,P),U(t,e),C&&C.m(e,null),n[36](e),U(t,s),J(r,t,null),U(t,c),h&&h.m(t,null),U(t,I),W&&W.m(t,null),G(f,u,P),y&&y.m(f,P),G(f,N,P),L&&L.m(f,P),G(f,E,P),$&&$.m(f,P),G(f,S,P),H=!0,A||(M=[v(e,"change",n[21]),v(e,"change",n[27]),v(e,"input",n[28]),v(e,"focus",n[29]),v(e,"blur",n[30])],A=!0)},p(f,P){C&&C.p&&(!H||P[0]&33554432)&&G1(C,b,f,f[25],H?R1(b,f[25],P,null):g1(f[25]),null),(!H||P[0]&32)&&g(e,"id",f[5]),(!H||P[0]&64)&&g(e,"name",f[6]),(!H||P[0]&65664&&i!==(i=f[7]?f[16]:void 0))&&g(e,"aria-describedby",i),(!H||P[0]&16&&a!==(a=f[4]||void 0))&&(e.disabled=a),(!H||P[0]&32768&&o!==(o=f[15]||void 0))&&(e.required=o),(!H||P[0]&128&&l!==(l=f[7]||void 0))&&g(e,"aria-invalid",l),(!H||P[0]&2)&&B(e,"bx--select-input--sm",f[1]==="sm"),(!H||P[0]&2)&&B(e,"bx--select-input--xl",f[1]==="xl"),f[7]?h?P[0]&128&&T(h,1):(h=L0(),h.c(),T(h,1),h.m(t,I)):h&&(u1(),m(h,1,1,()=>{h=null}),S1()),!f[7]&&f[9]?W?P[0]&640&&T(W,1):(W=W0(),W.c(),T(W,1),W.m(t,null)):W&&(u1(),m(W,1,1,()=>{W=null}),S1()),(!H||P[0]&128&&d!==(d=f[7]||void 0))&&g(t,"data-invalid",d),!f[7]&&f[11]?y?y.p(f,P):(y=P0(f),y.c(),y.m(N.parentNode,N)):y&&(y.d(1),y=null),f[7]?L?L.p(f,P):(L=v0(f),L.c(),L.m(E.parentNode,E)):L&&(L.d(1),L=null),!f[7]&&f[9]?$?$.p(f,P):($=D0(f),$.c(),$.m(S.parentNode,S)):$&&($.d(1),$=null)},i(f){H||(T(C,f),T(r.$$.fragment,f),T(h),T(W),H=!0)},o(f){m(C,f),m(r.$$.fragment,f),m(h),m(W),H=!1},d(f){f&&R(t),C&&C.d(f),n[36](null),w(r),h&&h.d(),W&&W.d(),f&&R(u),y&&y.d(f),f&&R(N),L&&L.d(f),f&&R(E),$&&$.d(f),f&&R(S),A=!1,C1(M)}}}function L0(n){let t,e;return t=new On({props:{class:"bx--select__invalid-icon"}}),{c(){z(t.$$.fragment)},m(i,a){J(t,i,a),e=!0},i(i){e||(T(t.$$.fragment,i),e=!0)},o(i){m(t.$$.fragment,i),e=!1},d(i){w(t,i)}}}function W0(n){let t,e;return t=new Gi({props:{class:"bx--select__invalid-icon bx--select__invalid-icon--warning"}}),{c(){z(t.$$.fragment)},m(i,a){J(t,i,a),e=!0},i(i){e||(T(t.$$.fragment,i),e=!0)},o(i){m(t.$$.fragment,i),e=!1},d(i){w(t,i)}}}function P0(n){let t,e;return{c(){t=O("div"),e=t1(n[11]),B(t,"bx--form__helper-text",!0),B(t,"bx--form__helper-text--disabled",n[4])},m(i,a){G(i,t,a),U(t,e)},p(i,a){a[0]&2048&&o1(e,i[11]),a[0]&16&&B(t,"bx--form__helper-text--disabled",i[4])},d(i){i&&R(t)}}}function v0(n){let t,e;return{c(){t=O("div"),e=t1(n[8]),g(t,"id",n[16]),B(t,"bx--form-requirement",!0)},m(i,a){G(i,t,a),U(t,e)},p(i,a){a[0]&256&&o1(e,i[8]),a[0]&65536&&g(t,"id",i[16])},d(i){i&&R(t)}}}function D0(n){let t,e;return{c(){t=O("div"),e=t1(n[10]),g(t,"id",n[16]),B(t,"bx--form-requirement",!0)},m(i,a){G(i,t,a),U(t,e)},p(i,a){a[0]&1024&&o1(e,i[10]),a[0]&65536&&g(t,"id",i[16])},d(i){i&&R(t)}}}function ca(n){let t,e,i,a,o,l=!n[12]&&G0(n),s=n[2]&&g0(n),r=!n[2]&&b0(n),c=[n[22]],I={};for(let d=0;d<c.length;d+=1)I=_(I,c[d]);return{c(){t=O("div"),e=O("div"),l&&l.c(),i=k(),s&&s.c(),a=k(),r&&r.c(),B(e,"bx--select",!0),B(e,"bx--select--inline",n[2]),B(e,"bx--select--light",n[3]),B(e,"bx--select--invalid",n[7]),B(e,"bx--select--disabled",n[4]),B(e,"bx--select--warning",n[9]),l1(t,I),B(t,"bx--form-item",!0)},m(d,u){G(d,t,u),U(t,e),l&&l.m(e,null),U(e,i),s&&s.m(e,null),U(e,a),r&&r.m(e,null),o=!0},p(d,u){d[12]?l&&(u1(),m(l,1,1,()=>{l=null}),S1()):l?(l.p(d,u),u[0]&4096&&T(l,1)):(l=G0(d),l.c(),T(l,1),l.m(e,i)),d[2]?s?(s.p(d,u),u[0]&4&&T(s,1)):(s=g0(d),s.c(),T(s,1),s.m(e,a)):s&&(u1(),m(s,1,1,()=>{s=null}),S1()),d[2]?r&&(u1(),m(r,1,1,()=>{r=null}),S1()):r?(r.p(d,u),u[0]&4&&T(r,1)):(r=b0(d),r.c(),T(r,1),r.m(e,null)),(!o||u[0]&4)&&B(e,"bx--select--inline",d[2]),(!o||u[0]&8)&&B(e,"bx--select--light",d[3]),(!o||u[0]&128)&&B(e,"bx--select--invalid",d[7]),(!o||u[0]&16)&&B(e,"bx--select--disabled",d[4]),(!o||u[0]&512)&&B(e,"bx--select--warning",d[9]),l1(t,I=r1(c,[u[0]&4194304&&d[22]])),B(t,"bx--form-item",!0)},i(d){o||(T(l),T(s),T(r),o=!0)},o(d){m(l),m(s),m(r),o=!1},d(d){d&&R(t),l&&l.d(),s&&s.d(),r&&r.d()}}}function Na(n,t,e){let i;const a=["selected","size","inline","light","disabled","id","name","invalid","invalidText","warn","warnText","helperText","noLabel","labelText","hideLabel","ref","required"];let o=q(t,a),l,s,r,c,{$$slots:I={},$$scope:d}=t,{selected:u=void 0}=t,{size:N=void 0}=t,{inline:E=!1}=t,{light:S=!1}=t,{disabled:H=!1}=t,{id:A="ccs-"+Math.random().toString(36)}=t,{name:M=void 0}=t,{invalid:b=!1}=t,{invalidText:C=""}=t,{warn:h=!1}=t,{warnText:W=""}=t,{helperText:y=""}=t,{noLabel:L=!1}=t,{labelText:$=""}=t,{hideLabel:f=!1}=t,{ref:P=null}=t,{required:p=!1}=t;const a1=p1(),A1=P1(u);W1(n,A1,x=>e(38,s=x));const h1=P1(null);W1(n,h1,x=>e(40,c=x));const m1=P1(null);W1(n,m1,x=>e(24,l=x));const V=P1({});W1(n,V,x=>e(39,r=x)),Et("Select",{selectedValue:A1,setDefaultValue:(x,v1)=>{l===null?(h1.set(x),m1.set(v1)):c===x&&A1.set(v1),V.update(y1=>({...y1,[v1]:typeof v1}))}});const d1=({target:x})=>{let v1=x.value;r[v1]==="number"&&(v1=Number(v1)),A1.set(v1)};let X;Bt(()=>{e(23,u=s),X!==void 0&&u!==X&&a1("update",s),X=u});function Y(x){F.call(this,n,x)}function c1(x){F.call(this,n,x)}function K(x){F.call(this,n,x)}function Z(x){F.call(this,n,x)}function Q(x){F.call(this,n,x)}function K1(x){F.call(this,n,x)}function D1(x){F.call(this,n,x)}function k1(x){F.call(this,n,x)}function J1(x){I1[x?"unshift":"push"](()=>{P=x,e(0,P)})}function j(x){I1[x?"unshift":"push"](()=>{P=x,e(0,P)})}return n.$$set=x=>{t=_(_({},t),n1(x)),e(22,o=q(t,a)),"selected"in x&&e(23,u=x.selected),"size"in x&&e(1,N=x.size),"inline"in x&&e(2,E=x.inline),"light"in x&&e(3,S=x.light),"disabled"in x&&e(4,H=x.disabled),"id"in x&&e(5,A=x.id),"name"in x&&e(6,M=x.name),"invalid"in x&&e(7,b=x.invalid),"invalidText"in x&&e(8,C=x.invalidText),"warn"in x&&e(9,h=x.warn),"warnText"in x&&e(10,W=x.warnText),"helperText"in x&&e(11,y=x.helperText),"noLabel"in x&&e(12,L=x.noLabel),"labelText"in x&&e(13,$=x.labelText),"hideLabel"in x&&e(14,f=x.hideLabel),"ref"in x&&e(0,P=x.ref),"required"in x&&e(15,p=x.required),"$$scope"in x&&e(25,d=x.$$scope)},n.$$.update=()=>{n.$$.dirty[0]&32&&e(16,i=`error-${A}`),n.$$.dirty[0]&25165824&&A1.set(u??l)},[P,N,E,S,H,A,M,b,C,h,W,y,L,$,f,p,i,A1,h1,m1,V,d1,o,u,l,d,I,Y,c1,K,Z,Q,K1,D1,k1,J1,j]}class Ia extends E1{constructor(t){super(),B1(this,t,Na,ca,N1,{selected:23,size:1,inline:2,light:3,disabled:4,id:5,name:6,invalid:7,invalidText:8,warn:9,warnText:10,helperText:11,noLabel:12,labelText:13,hideLabel:14,ref:0,required:15},null,[-1,-1])}}const Ba=Ia;function Ea(n){let t,e=(n[1]||n[0])+"",i,a,o;return{c(){t=O("option"),i=t1(e),t.__value=n[0],t.value=t.__value,t.disabled=n[3],t.hidden=n[2],t.selected=n[4],g(t,"class",a=n[5].class),g(t,"style",o=n[5].style),B(t,"bx--select-option",!0)},m(l,s){G(l,t,s),U(t,i)},p(l,[s]){s&3&&e!==(e=(l[1]||l[0])+"")&&o1(i,e),s&1&&(t.__value=l[0],t.value=t.__value),s&8&&(t.disabled=l[3]),s&4&&(t.hidden=l[2]),s&16&&(t.selected=l[4]),s&32&&a!==(a=l[5].class)&&g(t,"class",a),s&32&&o!==(o=l[5].style)&&g(t,"style",o),s&32&&B(t,"bx--select-option",!0)},i:i1,o:i1,d(l){l&&R(t)}}}function da(n,t,e){const i=["value","text","hidden","disabled"];let a=q(t,i),{value:o=""}=t,{text:l=""}=t,{hidden:s=!1}=t,{disabled:r=!1}=t;const c="ccs-"+Math.random().toString(36),I=q1("Select")||q1("TimePickerSelect");let d=!1;const u=I.selectedValue.subscribe(N=>{e(4,d=N===o)});return lt(()=>()=>u()),n.$$set=N=>{t=_(_({},t),n1(N)),e(5,a=q(t,i)),"value"in N&&e(0,o=N.value),"text"in N&&e(1,l=N.text),"hidden"in N&&e(2,s=N.hidden),"disabled"in N&&e(3,r=N.disabled)},n.$$.update=()=>{var N;n.$$.dirty&1&&((N=I==null?void 0:I.setDefaultValue)==null||N.call(I,c,o))},[o,l,s,r,d,a]}class ua extends E1{constructor(t){super(),B1(this,t,da,Ea,N1,{value:0,text:1,hidden:2,disabled:3})}}const Sa=ua;function Ha(n){let t,e,i,a,o,l;const s=n[11].default,r=f1(s,n,n[10],null);let c=[n[9],{style:i=n[9].style+"; "+(n[6]&&"position: relative")}],I={};for(let d=0;d<c.length;d+=1)I=_(I,c[d]);return{c(){t=O("div"),e=O("div"),r&&r.c(),B(e,"bx--popover-contents",!0),l1(t,I),B(t,"bx--popover",!0),B(t,"bx--popover--caret",n[2]),B(t,"bx--popover--light",n[4]),B(t,"bx--popover--high-contrast",n[5]),B(t,"bx--popover--top",n[3]==="top"),B(t,"bx--popover--top-left",n[3]==="top-left"),B(t,"bx--popover--top-right",n[3]==="top-right"),B(t,"bx--popover--bottom",n[3]==="bottom"),B(t,"bx--popover--bottom-left",n[3]==="bottom-left"),B(t,"bx--popover--bottom-right",n[3]==="bottom-right"),B(t,"bx--popover--left",n[3]==="left"),B(t,"bx--popover--left-bottom",n[3]==="left-bottom"),B(t,"bx--popover--left-top",n[3]==="left-top"),B(t,"bx--popover--right",n[3]==="right"),B(t,"bx--popover--right-bottom",n[3]==="right-bottom"),B(t,"bx--popover--right-top",n[3]==="right-top"),B(t,"bx--popover--open",n[0]),B(t,"bx--popover--relative",n[6])},m(d,u){G(d,t,u),U(t,e),r&&r.m(e,null),n[13](t),a=!0,o||(l=v(window,"click",n[12]),o=!0)},p(d,[u]){r&&r.p&&(!a||u&1024)&&G1(r,s,d,d[10],a?R1(s,d[10],u,null):g1(d[10]),null),l1(t,I=r1(c,[u&512&&d[9],(!a||u&576&&i!==(i=d[9].style+"; "+(d[6]&&"position: relative")))&&{style:i}])),B(t,"bx--popover",!0),B(t,"bx--popover--caret",d[2]),B(t,"bx--popover--light",d[4]),B(t,"bx--popover--high-contrast",d[5]),B(t,"bx--popover--top",d[3]==="top"),B(t,"bx--popover--top-left",d[3]==="top-left"),B(t,"bx--popover--top-right",d[3]==="top-right"),B(t,"bx--popover--bottom",d[3]==="bottom"),B(t,"bx--popover--bottom-left",d[3]==="bottom-left"),B(t,"bx--popover--bottom-right",d[3]==="bottom-right"),B(t,"bx--popover--left",d[3]==="left"),B(t,"bx--popover--left-bottom",d[3]==="left-bottom"),B(t,"bx--popover--left-top",d[3]==="left-top"),B(t,"bx--popover--right",d[3]==="right"),B(t,"bx--popover--right-bottom",d[3]==="right-bottom"),B(t,"bx--popover--right-top",d[3]==="right-top"),B(t,"bx--popover--open",d[0]),B(t,"bx--popover--relative",d[6])},i(d){a||(T(r,d),a=!0)},o(d){m(r,d),a=!1},d(d){d&&R(t),r&&r.d(d),n[13](null),o=!1,l()}}}function Aa(n,t,e){const i=["open","closeOnOutsideClick","caret","align","light","highContrast","relative"];let a=q(t,i),{$$slots:o={},$$scope:l}=t,{open:s=!1}=t,{closeOnOutsideClick:r=!1}=t,{caret:c=!1}=t,{align:I="top"}=t,{light:d=!1}=t,{highContrast:u=!1}=t,{relative:N=!1}=t;const E=p1();let S=null;const H=M=>{s&&(S.contains(M.target)||(E("click:outside",{target:M.target}),r&&e(0,s=!1)))};function A(M){I1[M?"unshift":"push"](()=>{S=M,e(7,S)})}return n.$$set=M=>{t=_(_({},t),n1(M)),e(9,a=q(t,i)),"open"in M&&e(0,s=M.open),"closeOnOutsideClick"in M&&e(1,r=M.closeOnOutsideClick),"caret"in M&&e(2,c=M.caret),"align"in M&&e(3,I=M.align),"light"in M&&e(4,d=M.light),"highContrast"in M&&e(5,u=M.highContrast),"relative"in M&&e(6,N=M.relative),"$$scope"in M&&e(10,l=M.$$scope)},[s,r,c,I,d,u,N,S,E,a,l,o,H,A]}class Ca extends E1{constructor(t){super(),B1(this,t,Aa,Ha,N1,{open:0,closeOnOutsideClick:1,caret:2,align:3,light:4,highContrast:5,relative:6})}}const Ma=Ca,Ta=n=>({}),F0=n=>({});function _0(n){let t=n[3].label+"",e;return{c(){e=t1(t)},m(i,a){G(i,e,a)},p(i,a){a[0]&8&&t!==(t=i[3].label+"")&&o1(e,t)},d(i){i&&R(e)}}}function fa(n){let t,e,i,a,o,l,s,r,c,I,d,u,N=n[3]&&_0(n);o=new mt({props:{"aria-hidden":"true",title:n[1]}});const E=n[20].default,S=f1(E,n,n[19],null);let H=[{role:"navigation"},n[10]],A={};for(let C=0;C<H.length;C+=1)A=_(A,H[C]);const M=n[20].content,b=f1(M,n,n[19],F0);return{c(){t=O("div"),e=O("div"),i=O("a"),N&&N.c(),a=k(),z(o.$$.fragment),s=k(),r=O("ul"),S&&S.c(),c=k(),b&&b.c(),g(i,"tabindex","-1"),g(i,"href",n[2]),B(i,"bx--tabs-trigger-text",!0),g(e,"role","listbox"),g(e,"tabindex","0"),g(e,"aria-label",l=n[11]["aria-label"]||"listbox"),B(e,"bx--tabs-trigger",!0),g(r,"role","tablist"),B(r,"bx--tabs__nav",!0),B(r,"bx--tabs__nav--hidden",n[5]),l1(t,A),B(t,"bx--tabs",!0),B(t,"bx--tabs--container",n[0]==="container")},m(C,h){G(C,t,h),U(t,e),U(e,i),N&&N.m(i,null),U(e,a),J(o,e,null),U(t,s),U(t,r),S&&S.m(r,null),n[26](r),G(C,c,h),b&&b.m(C,h),I=!0,d||(u=[v(i,"click",et(n[22])),v(i,"click",At(et(n[23]))),v(e,"click",n[24]),v(e,"keypress",n[21]),v(e,"keypress",n[25])],d=!0)},p(C,h){C[3]?N?N.p(C,h):(N=_0(C),N.c(),N.m(i,null)):N&&(N.d(1),N=null),(!I||h[0]&4)&&g(i,"href",C[2]);const W={};h[0]&2&&(W.title=C[1]),o.$set(W),(!I||h[0]&2048&&l!==(l=C[11]["aria-label"]||"listbox"))&&g(e,"aria-label",l),S&&S.p&&(!I||h[0]&524288)&&G1(S,E,C,C[19],I?R1(E,C[19],h,null):g1(C[19]),null),(!I||h[0]&32)&&B(r,"bx--tabs__nav--hidden",C[5]),l1(t,A=r1(H,[{role:"navigation"},h[0]&1024&&C[10]])),B(t,"bx--tabs",!0),B(t,"bx--tabs--container",C[0]==="container"),b&&b.p&&(!I||h[0]&524288)&&G1(b,M,C,C[19],I?R1(M,C[19],h,Ta):g1(C[19]),F0)},i(C){I||(T(o.$$.fragment,C),T(S,C),T(b,C),I=!0)},o(C){m(o.$$.fragment,C),m(S,C),m(b,C),I=!1},d(C){C&&R(t),N&&N.d(),w(o),S&&S.d(C),n[26](null),C&&R(c),b&&b.d(C),d=!1,C1(u)}}}function Ra(n,t,e){let i,a;const o=["selected","type","autoWidth","iconDescription","triggerHref"];let l=q(t,o),s,r,c,I,{$$slots:d={},$$scope:u}=t,{selected:N=0}=t,{type:E="default"}=t,{autoWidth:S=!1}=t,{iconDescription:H="Show menu options"}=t,{triggerHref:A="#"}=t;const M=p1(),b=P1([]);W1(n,b,Y=>e(18,c=Y));const C=t0(b,Y=>Y.reduce((c1,K)=>({...c1,[K.id]:K}),{}));W1(n,C,Y=>e(28,I=Y));const h=P1(S),W=P1(void 0);W1(n,W,Y=>e(16,s=Y));const y=P1([]);W1(n,y,Y=>e(17,r=Y));const L=t0(y,Y=>Y.reduce((c1,K)=>({...c1,[K.id]:K}),{})),$=P1(void 0);let f=null;Et("Tabs",{tabs:b,contentById:L,selectedTab:W,selectedContent:$,useAutoWidth:h,add:Y=>{b.update(c1=>[...c1,{...Y,index:c1.length}])},addContent:Y=>{y.update(c1=>[...c1,{...Y,index:c1.length}])},update:Y=>{e(14,p=I[Y].index)},change:async Y=>{let c1=p+Y;c1<0?c1=c.length-1:c1>=c.length&&(c1=0);let K=c[c1].disabled;for(;K;)c1=c1+Y,c1<0?c1=c.length-1:c1>=c.length&&(c1=0),K=c[c1].disabled;e(14,p=c1),await Fn();const Z=f==null?void 0:f.querySelectorAll("[role='tab']")[p];Z==null||Z.focus()}}),Bt(()=>{e(12,N=p),a1>-1&&a1!==p&&M("change",p),a1=p});let P=!0,p=N,a1=-1;function A1(Y){F.call(this,n,Y)}function h1(Y){F.call(this,n,Y)}const m1=()=>{e(5,P=!P)},V=()=>{e(5,P=!P)},d1=()=>{e(5,P=!P)};function X(Y){I1[Y?"unshift":"push"](()=>{f=Y,e(4,f)})}return n.$$set=Y=>{e(11,t=_(_({},t),n1(Y))),e(10,l=q(t,o)),"selected"in Y&&e(12,N=Y.selected),"type"in Y&&e(0,E=Y.type),"autoWidth"in Y&&e(13,S=Y.autoWidth),"iconDescription"in Y&&e(1,H=Y.iconDescription),"triggerHref"in Y&&e(2,A=Y.triggerHref),"$$scope"in Y&&e(19,u=Y.$$scope)},n.$$.update=()=>{n.$$.dirty[0]&4096&&e(14,p=N),n.$$.dirty[0]&278528&&e(3,i=c[p]||void 0),n.$$.dirty[0]&147456&&e(15,a=r[p]||void 0),n.$$.dirty[0]&32776&&(i&&W.set(i.id),a&&$.set(a.id)),n.$$.dirty[0]&65536&&s&&e(5,P=!0),n.$$.dirty[0]&8192&&h.set(S)},t=n1(t),[E,H,A,i,f,P,b,C,W,y,l,t,N,S,p,a,s,r,c,u,d,A1,h1,m1,V,d1,X]}class Ga extends E1{constructor(t){super(),B1(this,t,Ra,fa,N1,{selected:12,type:0,autoWidth:13,iconDescription:1,triggerHref:2},null,[-1,-1])}}const ga=Ga;function ma(n){let t;return{c(){t=t1(n[1])},m(e,i){G(e,t,i)},p(e,i){i&2&&o1(t,e[1])},d(e){e&&R(t)}}}function ha(n){let t,e,i,a,o,l,s;const r=n[15].default,c=f1(r,n,n[14],null),I=c||ma(n);let d=[{tabindex:"-1"},{role:"presentation"},n[12]],u={};for(let N=0;N<d.length;N+=1)u=_(u,d[N]);return{c(){t=O("li"),e=O("a"),I&&I.c(),g(e,"role","tab"),g(e,"tabindex",i=n[3]?"-1":n[4]),g(e,"aria-selected",n[6]),g(e,"aria-disabled",n[3]),g(e,"id",n[5]),g(e,"href",n[2]),g(e,"style",a=n[7]?"width: auto":void 0),B(e,"bx--tabs__nav-link",!0),l1(t,u),B(t,"bx--tabs__nav-item",!0),B(t,"bx--tabs__nav-item--disabled",n[3]),B(t,"bx--tabs__nav-item--selected",n[6])},m(N,E){G(N,t,E),U(t,e),I&&I.m(e,null),n[20](e),o=!0,l||(s=[v(t,"click",et(n[16])),v(t,"click",et(n[21])),v(t,"mouseover",n[17]),v(t,"mouseenter",n[18]),v(t,"mouseleave",n[19]),v(t,"keydown",n[22])],l=!0)},p(N,[E]){c?c.p&&(!o||E&16384)&&G1(c,r,N,N[14],o?R1(r,N[14],E,null):g1(N[14]),null):I&&I.p&&(!o||E&2)&&I.p(N,o?E:-1),(!o||E&24&&i!==(i=N[3]?"-1":N[4]))&&g(e,"tabindex",i),(!o||E&64)&&g(e,"aria-selected",N[6]),(!o||E&8)&&g(e,"aria-disabled",N[3]),(!o||E&32)&&g(e,"id",N[5]),(!o||E&4)&&g(e,"href",N[2]),(!o||E&128&&a!==(a=N[7]?"width: auto":void 0))&&g(e,"style",a),l1(t,u=r1(d,[{tabindex:"-1"},{role:"presentation"},E&4096&&N[12]])),B(t,"bx--tabs__nav-item",!0),B(t,"bx--tabs__nav-item--disabled",N[3]),B(t,"bx--tabs__nav-item--selected",N[6])},i(N){o||(T(I,N),o=!0)},o(N){m(I,N),o=!1},d(N){N&&R(t),I&&I.d(N),n[20](null),l=!1,C1(s)}}}function Ua(n,t,e){let i;const a=["label","href","disabled","tabindex","id","ref"];let o=q(t,a),l,s,{$$slots:r={},$$scope:c}=t,{label:I=""}=t,{href:d="#"}=t,{disabled:u=!1}=t,{tabindex:N="0"}=t,{id:E="ccs-"+Math.random().toString(36)}=t,{ref:S=null}=t;const{selectedTab:H,useAutoWidth:A,add:M,update:b,change:C}=q1("Tabs");W1(n,H,p=>e(13,l=p)),W1(n,A,p=>e(7,s=p)),M({id:E,label:I,disabled:u});function h(p){F.call(this,n,p)}function W(p){F.call(this,n,p)}function y(p){F.call(this,n,p)}function L(p){F.call(this,n,p)}function $(p){I1[p?"unshift":"push"](()=>{S=p,e(0,S)})}const f=()=>{u||b(E)},P=({key:p})=>{u||(p==="ArrowRight"?C(1):p==="ArrowLeft"?C(-1):(p===" "||p==="Enter")&&b(E))};return n.$$set=p=>{t=_(_({},t),n1(p)),e(12,o=q(t,a)),"label"in p&&e(1,I=p.label),"href"in p&&e(2,d=p.href),"disabled"in p&&e(3,u=p.disabled),"tabindex"in p&&e(4,N=p.tabindex),"id"in p&&e(5,E=p.id),"ref"in p&&e(0,S=p.ref),"$$scope"in p&&e(14,c=p.$$scope)},n.$$.update=()=>{n.$$.dirty&8224&&e(6,i=l===E)},[S,I,d,u,N,E,i,s,H,A,b,C,o,l,c,r,h,W,y,L,$,f,P]}class ba extends E1{constructor(t){super(),B1(this,t,Ua,ha,N1,{label:1,href:2,disabled:3,tabindex:4,id:5,ref:0})}}const p0=ba;function La(n){let t,e,i,a;const o=n[12].default,l=f1(o,n,n[11],null);let s=[{role:"tabpanel"},{"aria-labelledby":n[1]},{"aria-hidden":e=!n[2]},{hidden:i=n[2]?void 0:""},{id:n[0]},n[6]],r={};for(let c=0;c<s.length;c+=1)r=_(r,s[c]);return{c(){t=O("div"),l&&l.c(),l1(t,r),B(t,"bx--tab-content",!0)},m(c,I){G(c,t,I),l&&l.m(t,null),a=!0},p(c,[I]){l&&l.p&&(!a||I&2048)&&G1(l,o,c,c[11],a?R1(o,c[11],I,null):g1(c[11]),null),l1(t,r=r1(s,[{role:"tabpanel"},(!a||I&2)&&{"aria-labelledby":c[1]},(!a||I&4&&e!==(e=!c[2]))&&{"aria-hidden":e},(!a||I&4&&i!==(i=c[2]?void 0:""))&&{hidden:i},(!a||I&1)&&{id:c[0]},I&64&&c[6]])),B(t,"bx--tab-content",!0)},i(c){a||(T(l,c),a=!0)},o(c){m(l,c),a=!1},d(c){c&&R(t),l&&l.d(c)}}}function Wa(n,t,e){let i,a,o;const l=["id"];let s=q(t,l),r,c,I,{$$slots:d={},$$scope:u}=t,{id:N="ccs-"+Math.random().toString(36)}=t;const{selectedContent:E,addContent:S,tabs:H,contentById:A}=q1("Tabs");return W1(n,E,M=>e(10,I=M)),W1(n,H,M=>e(8,r=M)),W1(n,A,M=>e(9,c=M)),S({id:N}),n.$$set=M=>{t=_(_({},t),n1(M)),e(6,s=q(t,l)),"id"in M&&e(0,N=M.id),"$$scope"in M&&e(11,u=M.$$scope)},n.$$.update=()=>{n.$$.dirty&1025&&e(2,i=I===N),n.$$.dirty&513&&e(7,a=c[N].index),n.$$.dirty&384&&e(1,o=r[a].id)},[N,o,i,E,H,A,s,a,r,c,I,u,d]}class Pa extends E1{constructor(t){super(),B1(this,t,Wa,La,N1,{id:0})}}const y0=Pa;function va(n){let t,e,i,a=[n[1]],o={};for(let l=0;l<a.length;l+=1)o=_(o,a[l]);return{c(){t=O("span"),l1(t,o),B(t,"bx--tag",!0),B(t,"bx--tag--sm",n[0]==="sm"),B(t,"bx--skeleton",!0)},m(l,s){G(l,t,s),e||(i=[v(t,"click",n[2]),v(t,"mouseover",n[3]),v(t,"mouseenter",n[4]),v(t,"mouseleave",n[5])],e=!0)},p(l,[s]){l1(t,o=r1(a,[s&2&&l[1]])),B(t,"bx--tag",!0),B(t,"bx--tag--sm",l[0]==="sm"),B(t,"bx--skeleton",!0)},i:i1,o:i1,d(l){l&&R(t),e=!1,C1(i)}}}function Da(n,t,e){const i=["size"];let a=q(t,i),{size:o="default"}=t;function l(I){F.call(this,n,I)}function s(I){F.call(this,n,I)}function r(I){F.call(this,n,I)}function c(I){F.call(this,n,I)}return n.$$set=I=>{t=_(_({},t),n1(I)),e(1,a=q(t,i)),"size"in I&&e(0,o=I.size)},[o,a,l,s,r,c]}class Fa extends E1{constructor(t){super(),B1(this,t,Da,va,N1,{size:0})}}const _a=Fa,pa=n=>({}),Y0=n=>({}),ya=n=>({}),O0=n=>({props:{class:"bx--tag__label"}}),Ya=n=>({}),K0=n=>({props:{class:"bx--tag__label"}});function Oa(n){let t,e,i,a,o,l,s=(n[11].icon||n[7])&&k0(n);const r=n[13].default,c=f1(r,n,n[12],null);let I=[{id:n[8]},n[10]],d={};for(let u=0;u<I.length;u+=1)d=_(d,I[u]);return{c(){t=O("div"),s&&s.c(),e=k(),i=O("span"),c&&c.c(),l1(t,d),B(t,"bx--tag",!0),B(t,"bx--tag--disabled",n[3]),B(t,"bx--tag--sm",n[1]==="sm"),B(t,"bx--tag--red",n[0]==="red"),B(t,"bx--tag--magenta",n[0]==="magenta"),B(t,"bx--tag--purple",n[0]==="purple"),B(t,"bx--tag--blue",n[0]==="blue"),B(t,"bx--tag--cyan",n[0]==="cyan"),B(t,"bx--tag--teal",n[0]==="teal"),B(t,"bx--tag--green",n[0]==="green"),B(t,"bx--tag--gray",n[0]==="gray"),B(t,"bx--tag--cool-gray",n[0]==="cool-gray"),B(t,"bx--tag--warm-gray",n[0]==="warm-gray"),B(t,"bx--tag--high-contrast",n[0]==="high-contrast"),B(t,"bx--tag--outline",n[0]==="outline")},m(u,N){G(u,t,N),s&&s.m(t,null),U(t,e),U(t,i),c&&c.m(i,null),a=!0,o||(l=[v(t,"click",n[22]),v(t,"mouseover",n[23]),v(t,"mouseenter",n[24]),v(t,"mouseleave",n[25])],o=!0)},p(u,N){u[11].icon||u[7]?s?(s.p(u,N),N&2176&&T(s,1)):(s=k0(u),s.c(),T(s,1),s.m(t,e)):s&&(u1(),m(s,1,1,()=>{s=null}),S1()),c&&c.p&&(!a||N&4096)&&G1(c,r,u,u[12],a?R1(r,u[12],N,null):g1(u[12]),null),l1(t,d=r1(I,[(!a||N&256)&&{id:u[8]},N&1024&&u[10]])),B(t,"bx--tag",!0),B(t,"bx--tag--disabled",u[3]),B(t,"bx--tag--sm",u[1]==="sm"),B(t,"bx--tag--red",u[0]==="red"),B(t,"bx--tag--magenta",u[0]==="magenta"),B(t,"bx--tag--purple",u[0]==="purple"),B(t,"bx--tag--blue",u[0]==="blue"),B(t,"bx--tag--cyan",u[0]==="cyan"),B(t,"bx--tag--teal",u[0]==="teal"),B(t,"bx--tag--green",u[0]==="green"),B(t,"bx--tag--gray",u[0]==="gray"),B(t,"bx--tag--cool-gray",u[0]==="cool-gray"),B(t,"bx--tag--warm-gray",u[0]==="warm-gray"),B(t,"bx--tag--high-contrast",u[0]==="high-contrast"),B(t,"bx--tag--outline",u[0]==="outline")},i(u){a||(T(s),T(c,u),a=!0)},o(u){m(s),m(c,u),a=!1},d(u){u&&R(t),s&&s.d(),c&&c.d(u),o=!1,C1(l)}}}function Ka(n){let t,e,i,a,o,l,s,r=(n[11].icon||n[7])&&J0(n);const c=n[13].default,I=f1(c,n,n[12],null);let d=[{type:"button"},{id:n[8]},{disabled:n[3]},{"aria-disabled":n[3]},{tabindex:a=n[3]?"-1":void 0},n[10]],u={};for(let N=0;N<d.length;N+=1)u=_(u,d[N]);return{c(){t=O("button"),r&&r.c(),e=k(),i=O("span"),I&&I.c(),l1(t,u),B(t,"bx--tag",!0),B(t,"bx--tag--interactive",!0),B(t,"bx--tag--disabled",n[3]),B(t,"bx--tag--sm",n[1]==="sm"),B(t,"bx--tag--red",n[0]==="red"),B(t,"bx--tag--magenta",n[0]==="magenta"),B(t,"bx--tag--purple",n[0]==="purple"),B(t,"bx--tag--blue",n[0]==="blue"),B(t,"bx--tag--cyan",n[0]==="cyan"),B(t,"bx--tag--teal",n[0]==="teal"),B(t,"bx--tag--green",n[0]==="green"),B(t,"bx--tag--gray",n[0]==="gray"),B(t,"bx--tag--cool-gray",n[0]==="cool-gray"),B(t,"bx--tag--warm-gray",n[0]==="warm-gray"),B(t,"bx--tag--high-contrast",n[0]==="high-contrast"),B(t,"bx--tag--outline",n[0]==="outline")},m(N,E){G(N,t,E),r&&r.m(t,null),U(t,e),U(t,i),I&&I.m(i,null),t.autofocus&&t.focus(),o=!0,l||(s=[v(t,"click",n[18]),v(t,"mouseover",n[19]),v(t,"mouseenter",n[20]),v(t,"mouseleave",n[21])],l=!0)},p(N,E){N[11].icon||N[7]?r?(r.p(N,E),E&2176&&T(r,1)):(r=J0(N),r.c(),T(r,1),r.m(t,e)):r&&(u1(),m(r,1,1,()=>{r=null}),S1()),I&&I.p&&(!o||E&4096)&&G1(I,c,N,N[12],o?R1(c,N[12],E,null):g1(N[12]),null),l1(t,u=r1(d,[{type:"button"},(!o||E&256)&&{id:N[8]},(!o||E&8)&&{disabled:N[3]},(!o||E&8)&&{"aria-disabled":N[3]},(!o||E&8&&a!==(a=N[3]?"-1":void 0))&&{tabindex:a},E&1024&&N[10]])),B(t,"bx--tag",!0),B(t,"bx--tag--interactive",!0),B(t,"bx--tag--disabled",N[3]),B(t,"bx--tag--sm",N[1]==="sm"),B(t,"bx--tag--red",N[0]==="red"),B(t,"bx--tag--magenta",N[0]==="magenta"),B(t,"bx--tag--purple",N[0]==="purple"),B(t,"bx--tag--blue",N[0]==="blue"),B(t,"bx--tag--cyan",N[0]==="cyan"),B(t,"bx--tag--teal",N[0]==="teal"),B(t,"bx--tag--green",N[0]==="green"),B(t,"bx--tag--gray",N[0]==="gray"),B(t,"bx--tag--cool-gray",N[0]==="cool-gray"),B(t,"bx--tag--warm-gray",N[0]==="warm-gray"),B(t,"bx--tag--high-contrast",N[0]==="high-contrast"),B(t,"bx--tag--outline",N[0]==="outline")},i(N){o||(T(r),T(I,N),o=!0)},o(N){m(r),m(I,N),o=!1},d(N){N&&R(t),r&&r.d(),I&&I.d(N),l=!1,C1(s)}}}function ka(n){let t,e,i,a,o,l,s;const r=n[13].default,c=f1(r,n,n[12],K0),I=c||Za(n);a=new It({});let d=[{"aria-label":n[6]},{id:n[8]},n[10]],u={};for(let N=0;N<d.length;N+=1)u=_(u,d[N]);return{c(){t=O("div"),I&&I.c(),e=k(),i=O("button"),z(a.$$.fragment),g(i,"type","button"),g(i,"aria-labelledby",n[8]),i.disabled=n[3],g(i,"title",n[6]),B(i,"bx--tag__close-icon",!0),l1(t,u),B(t,"bx--tag",!0),B(t,"bx--tag--disabled",n[3]),B(t,"bx--tag--filter",n[2]),B(t,"bx--tag--sm",n[1]==="sm"),B(t,"bx--tag--red",n[0]==="red"),B(t,"bx--tag--magenta",n[0]==="magenta"),B(t,"bx--tag--purple",n[0]==="purple"),B(t,"bx--tag--blue",n[0]==="blue"),B(t,"bx--tag--cyan",n[0]==="cyan"),B(t,"bx--tag--teal",n[0]==="teal"),B(t,"bx--tag--green",n[0]==="green"),B(t,"bx--tag--gray",n[0]==="gray"),B(t,"bx--tag--cool-gray",n[0]==="cool-gray"),B(t,"bx--tag--warm-gray",n[0]==="warm-gray"),B(t,"bx--tag--high-contrast",n[0]==="high-contrast"),B(t,"bx--tag--outline",n[0]==="outline")},m(N,E){G(N,t,E),I&&I.m(t,null),U(t,e),U(t,i),J(a,i,null),o=!0,l||(s=[v(i,"click",At(n[14])),v(i,"click",At(n[30])),v(i,"mouseover",n[15]),v(i,"mouseenter",n[16]),v(i,"mouseleave",n[17])],l=!0)},p(N,E){c?c.p&&(!o||E&4096)&&G1(c,r,N,N[12],o?R1(r,N[12],E,Ya):g1(N[12]),K0):I&&I.p&&(!o||E&1)&&I.p(N,o?E:-1),(!o||E&256)&&g(i,"aria-labelledby",N[8]),(!o||E&8)&&(i.disabled=N[3]),(!o||E&64)&&g(i,"title",N[6]),l1(t,u=r1(d,[(!o||E&64)&&{"aria-label":N[6]},(!o||E&256)&&{id:N[8]},E&1024&&N[10]])),B(t,"bx--tag",!0),B(t,"bx--tag--disabled",N[3]),B(t,"bx--tag--filter",N[2]),B(t,"bx--tag--sm",N[1]==="sm"),B(t,"bx--tag--red",N[0]==="red"),B(t,"bx--tag--magenta",N[0]==="magenta"),B(t,"bx--tag--purple",N[0]==="purple"),B(t,"bx--tag--blue",N[0]==="blue"),B(t,"bx--tag--cyan",N[0]==="cyan"),B(t,"bx--tag--teal",N[0]==="teal"),B(t,"bx--tag--green",N[0]==="green"),B(t,"bx--tag--gray",N[0]==="gray"),B(t,"bx--tag--cool-gray",N[0]==="cool-gray"),B(t,"bx--tag--warm-gray",N[0]==="warm-gray"),B(t,"bx--tag--high-contrast",N[0]==="high-contrast"),B(t,"bx--tag--outline",N[0]==="outline")},i(N){o||(T(I,N),T(a.$$.fragment,N),o=!0)},o(N){m(I,N),m(a.$$.fragment,N),o=!1},d(N){N&&R(t),I&&I.d(N),w(a),l=!1,C1(s)}}}function Ja(n){let t,e;const i=[{size:n[1]},n[10]];let a={};for(let o=0;o<i.length;o+=1)a=_(a,i[o]);return t=new _a({props:a}),t.$on("click",n[26]),t.$on("mouseover",n[27]),t.$on("mouseenter",n[28]),t.$on("mouseleave",n[29]),{c(){z(t.$$.fragment)},m(o,l){J(t,o,l),e=!0},p(o,l){const s=l&1026?r1(i,[l&2&&{size:o[1]},l&1024&&Q1(o[10])]):{};t.$set(s)},i(o){e||(T(t.$$.fragment,o),e=!0)},o(o){m(t.$$.fragment,o),e=!1},d(o){w(t,o)}}}function k0(n){let t,e;const i=n[13].icon,a=f1(i,n,n[12],Y0),o=a||wa(n);return{c(){t=O("div"),o&&o.c(),B(t,"bx--tag__custom-icon",!0)},m(l,s){G(l,t,s),o&&o.m(t,null),e=!0},p(l,s){a?a.p&&(!e||s&4096)&&G1(a,i,l,l[12],e?R1(i,l[12],s,pa):g1(l[12]),Y0):o&&o.p&&(!e||s&128)&&o.p(l,e?s:-1)},i(l){e||(T(o,l),e=!0)},o(l){m(o,l),e=!1},d(l){l&&R(t),o&&o.d(l)}}}function wa(n){let t,e,i;var a=n[7];function o(l){return{}}return a&&(t=F1(a,o())),{c(){t&&z(t.$$.fragment),e=b1()},m(l,s){t&&J(t,l,s),G(l,e,s),i=!0},p(l,s){if(a!==(a=l[7])){if(t){u1();const r=t;m(r.$$.fragment,1,0,()=>{w(r,1)}),S1()}a?(t=F1(a,o()),z(t.$$.fragment),T(t.$$.fragment,1),J(t,e.parentNode,e)):t=null}},i(l){i||(t&&T(t.$$.fragment,l),i=!0)},o(l){t&&m(t.$$.fragment,l),i=!1},d(l){l&&R(e),t&&w(t,l)}}}function J0(n){let t,e;const i=n[13].icon,a=f1(i,n,n[12],O0),o=a||za(n);return{c(){t=O("div"),o&&o.c(),B(t,"bx--tag__custom-icon",!0)},m(l,s){G(l,t,s),o&&o.m(t,null),e=!0},p(l,s){a?a.p&&(!e||s&4096)&&G1(a,i,l,l[12],e?R1(i,l[12],s,ya):g1(l[12]),O0):o&&o.p&&(!e||s&128)&&o.p(l,e?s:-1)},i(l){e||(T(o,l),e=!0)},o(l){m(o,l),e=!1},d(l){l&&R(t),o&&o.d(l)}}}function za(n){let t,e,i;var a=n[7];function o(l){return{}}return a&&(t=F1(a,o())),{c(){t&&z(t.$$.fragment),e=b1()},m(l,s){t&&J(t,l,s),G(l,e,s),i=!0},p(l,s){if(a!==(a=l[7])){if(t){u1();const r=t;m(r.$$.fragment,1,0,()=>{w(r,1)}),S1()}a?(t=F1(a,o()),z(t.$$.fragment),T(t.$$.fragment,1),J(t,e.parentNode,e)):t=null}},i(l){i||(t&&T(t.$$.fragment,l),i=!0)},o(l){t&&m(t.$$.fragment,l),i=!1},d(l){l&&R(e),t&&w(t,l)}}}function Za(n){let t,e;return{c(){t=O("span"),e=t1(n[0]),B(t,"bx--tag__label",!0)},m(i,a){G(i,t,a),U(t,e)},p(i,a){a&1&&o1(e,i[0])},d(i){i&&R(t)}}}function Va(n){let t,e,i,a;const o=[Ja,ka,Ka,Oa],l=[];function s(r,c){return r[5]?0:r[2]?1:r[4]?2:3}return t=s(n),e=l[t]=o[t](n),{c(){e.c(),i=b1()},m(r,c){l[t].m(r,c),G(r,i,c),a=!0},p(r,[c]){let I=t;t=s(r),t===I?l[t].p(r,c):(u1(),m(l[I],1,1,()=>{l[I]=null}),S1(),e=l[t],e?e.p(r,c):(e=l[t]=o[t](r),e.c()),T(e,1),e.m(i.parentNode,i))},i(r){a||(T(e),a=!0)},o(r){m(e),a=!1},d(r){l[t].d(r),r&&R(i)}}}function qa(n,t,e){const i=["type","size","filter","disabled","interactive","skeleton","title","icon","id"];let a=q(t,i),{$$slots:o={},$$scope:l}=t;const s=Pn(o);let{type:r=void 0}=t,{size:c="default"}=t,{filter:I=!1}=t,{disabled:d=!1}=t,{interactive:u=!1}=t,{skeleton:N=!1}=t,{title:E="Clear filter"}=t,{icon:S=void 0}=t,{id:H="ccs-"+Math.random().toString(36)}=t;const A=p1();function M(X){F.call(this,n,X)}function b(X){F.call(this,n,X)}function C(X){F.call(this,n,X)}function h(X){F.call(this,n,X)}function W(X){F.call(this,n,X)}function y(X){F.call(this,n,X)}function L(X){F.call(this,n,X)}function $(X){F.call(this,n,X)}function f(X){F.call(this,n,X)}function P(X){F.call(this,n,X)}function p(X){F.call(this,n,X)}function a1(X){F.call(this,n,X)}function A1(X){F.call(this,n,X)}function h1(X){F.call(this,n,X)}function m1(X){F.call(this,n,X)}function V(X){F.call(this,n,X)}const d1=()=>{A("close")};return n.$$set=X=>{t=_(_({},t),n1(X)),e(10,a=q(t,i)),"type"in X&&e(0,r=X.type),"size"in X&&e(1,c=X.size),"filter"in X&&e(2,I=X.filter),"disabled"in X&&e(3,d=X.disabled),"interactive"in X&&e(4,u=X.interactive),"skeleton"in X&&e(5,N=X.skeleton),"title"in X&&e(6,E=X.title),"icon"in X&&e(7,S=X.icon),"id"in X&&e(8,H=X.id),"$$scope"in X&&e(12,l=X.$$scope)},[r,c,I,d,u,N,E,S,H,A,a,s,l,o,M,b,C,h,W,y,L,$,f,P,p,a1,A1,h1,m1,V,d1]}class Qa extends E1{constructor(t){super(),B1(this,t,qa,Va,N1,{type:0,size:1,filter:2,disabled:3,interactive:4,skeleton:5,title:6,icon:7,id:8})}}const O1=Qa,ja=n=>({}),w0=n=>({}),Xa=n=>({}),z0=n=>({}),xa=n=>({}),Z0=n=>({});function $a(n){let t;return{c(){t=t1(n[5])},m(e,i){G(e,t,i)},p(e,i){i&32&&o1(t,e[5])},d(e){e&&R(t)}}}function t2(n){let t;return{c(){t=t1(n[3])},m(e,i){G(e,t,i)},p(e,i){i&8&&o1(t,e[3])},d(e){e&&R(t)}}}function n2(n){let t;return{c(){t=t1(n[4])},m(e,i){G(e,t,i)},p(e,i){i&16&&o1(t,e[4])},d(e){e&&R(t)}}}function e2(n){let t,e,i,a,o,l,s,r,c,I,d,u,N,E,S,H;const A=n[12].labelText,M=f1(A,n,n[11],Z0),b=M||$a(n),C=n[12].labelA,h=f1(C,n,n[11],z0),W=h||t2(n),y=n[12].labelB,L=f1(y,n,n[11],w0),$=L||n2(n);let f=[n[9],{style:N=n[9].style+"; user-select: none"}],P={};for(let p=0;p<f.length;p+=1)P=_(P,f[p]);return{c(){t=O("div"),e=O("input"),i=k(),a=O("label"),o=O("span"),b&&b.c(),l=k(),s=O("span"),r=O("span"),W&&W.c(),c=k(),I=O("span"),$&&$.c(),g(e,"role","switch"),g(e,"type","checkbox"),e.checked=n[0],e.disabled=n[2],g(e,"id",n[7]),g(e,"name",n[8]),B(e,"bx--toggle-input",!0),B(e,"bx--toggle-input--small",n[1]==="sm"),B(o,"bx--visually-hidden",n[6]),g(r,"aria-hidden","true"),B(r,"bx--toggle__text--off",!0),g(I,"aria-hidden","true"),B(I,"bx--toggle__text--on",!0),g(s,"style",d=n[6]&&"margin-top: 0"),B(s,"bx--toggle__switch",!0),g(a,"aria-label",u=n[5]?void 0:n[10]["aria-label"]||"Toggle"),g(a,"for",n[7]),B(a,"bx--toggle-input__label",!0),l1(t,P),B(t,"bx--form-item",!0)},m(p,a1){G(p,t,a1),U(t,e),U(t,i),U(t,a),U(a,o),b&&b.m(o,null),U(a,l),U(a,s),U(s,r),W&&W.m(r,null),U(s,c),U(s,I),$&&$.m(I,null),E=!0,S||(H=[v(e,"change",n[21]),v(e,"change",n[17]),v(e,"keyup",n[22]),v(e,"keyup",n[18]),v(e,"focus",n[19]),v(e,"blur",n[20]),v(t,"click",n[13]),v(t,"mouseover",n[14]),v(t,"mouseenter",n[15]),v(t,"mouseleave",n[16])],S=!0)},p(p,[a1]){(!E||a1&1)&&(e.checked=p[0]),(!E||a1&4)&&(e.disabled=p[2]),(!E||a1&128)&&g(e,"id",p[7]),(!E||a1&256)&&g(e,"name",p[8]),(!E||a1&2)&&B(e,"bx--toggle-input--small",p[1]==="sm"),M?M.p&&(!E||a1&2048)&&G1(M,A,p,p[11],E?R1(A,p[11],a1,xa):g1(p[11]),Z0):b&&b.p&&(!E||a1&32)&&b.p(p,E?a1:-1),(!E||a1&64)&&B(o,"bx--visually-hidden",p[6]),h?h.p&&(!E||a1&2048)&&G1(h,C,p,p[11],E?R1(C,p[11],a1,Xa):g1(p[11]),z0):W&&W.p&&(!E||a1&8)&&W.p(p,E?a1:-1),L?L.p&&(!E||a1&2048)&&G1(L,y,p,p[11],E?R1(y,p[11],a1,ja):g1(p[11]),w0):$&&$.p&&(!E||a1&16)&&$.p(p,E?a1:-1),(!E||a1&64&&d!==(d=p[6]&&"margin-top: 0"))&&g(s,"style",d),(!E||a1&1056&&u!==(u=p[5]?void 0:p[10]["aria-label"]||"Toggle"))&&g(a,"aria-label",u),(!E||a1&128)&&g(a,"for",p[7]),l1(t,P=r1(f,[a1&512&&p[9],(!E||a1&512&&N!==(N=p[9].style+"; user-select: none"))&&{style:N}])),B(t,"bx--form-item",!0)},i(p){E||(T(b,p),T(W,p),T($,p),E=!0)},o(p){m(b,p),m(W,p),m($,p),E=!1},d(p){p&&R(t),b&&b.d(p),W&&W.d(p),$&&$.d(p),S=!1,C1(H)}}}function i2(n,t,e){const i=["size","toggled","disabled","labelA","labelB","labelText","hideLabel","id","name"];let a=q(t,i),{$$slots:o={},$$scope:l}=t,{size:s="default"}=t,{toggled:r=!1}=t,{disabled:c=!1}=t,{labelA:I="Off"}=t,{labelB:d="On"}=t,{labelText:u=""}=t,{hideLabel:N=!1}=t,{id:E="ccs-"+Math.random().toString(36)}=t,{name:S=void 0}=t;const H=p1();function A(P){F.call(this,n,P)}function M(P){F.call(this,n,P)}function b(P){F.call(this,n,P)}function C(P){F.call(this,n,P)}function h(P){F.call(this,n,P)}function W(P){F.call(this,n,P)}function y(P){F.call(this,n,P)}function L(P){F.call(this,n,P)}const $=()=>{e(0,r=!r)},f=P=>{(P.key===" "||P.key==="Enter")&&(P.preventDefault(),e(0,r=!r))};return n.$$set=P=>{e(10,t=_(_({},t),n1(P))),e(9,a=q(t,i)),"size"in P&&e(1,s=P.size),"toggled"in P&&e(0,r=P.toggled),"disabled"in P&&e(2,c=P.disabled),"labelA"in P&&e(3,I=P.labelA),"labelB"in P&&e(4,d=P.labelB),"labelText"in P&&e(5,u=P.labelText),"hideLabel"in P&&e(6,N=P.hideLabel),"id"in P&&e(7,E=P.id),"name"in P&&e(8,S=P.name),"$$scope"in P&&e(11,l=P.$$scope)},n.$$.update=()=>{n.$$.dirty&1&&H("toggle",{toggled:r})},t=n1(t),[r,s,c,I,d,u,N,E,S,a,t,l,o,A,M,b,C,h,W,y,L,$,f]}class a2 extends E1{constructor(t){super(),B1(this,t,i2,e2,N1,{size:1,toggled:0,disabled:2,labelA:3,labelB:4,labelText:5,hideLabel:6,id:7,name:8})}}const l2=a2,o2=n=>({theme:n&1}),V0=n=>({theme:n[0]});function q0(n,t,e){const i=n.slice();return i[0]=t[e],i}function Q0(n){let t,e,i;function a(l){n[9](l)}let o={key:n[2]};return n[0]!==void 0&&(o.value=n[0]),t=new Y1({props:o}),I1.push(()=>T1(t,"value",a,n[0])),{c(){z(t.$$.fragment)},m(l,s){J(t,l,s),i=!0},p(l,s){const r={};s&4&&(r.key=l[2]),!e&&s&1&&(e=!0,r.value=l[0],M1(()=>e=!1)),t.$set(r)},i(l){i||(T(t.$$.fragment,l),i=!0)},o(l){m(t.$$.fragment,l),i=!1},d(l){w(t,l)}}}function r2(n){let t,e,i;const a=[n[5]];function o(s){n[11](s)}let l={$$slots:{default:[c2]},$$scope:{ctx:n}};for(let s=0;s<a.length;s+=1)l=_(l,a[s]);return n[0]!==void 0&&(l.selected=n[0]),t=new Ba({props:l}),I1.push(()=>T1(t,"selected",o,n[0])),{c(){z(t.$$.fragment)},m(s,r){J(t,s,r),i=!0},p(s,r){const c=r&32?r1(a,[Q1(s[5])]):{};r&4128&&(c.$$scope={dirty:r,ctx:s}),!e&&r&1&&(e=!0,c.selected=s[0],M1(()=>e=!1)),t.$set(c)},i(s){i||(T(t.$$.fragment,s),i=!0)},o(s){m(t.$$.fragment,s),i=!1},d(s){w(t,s)}}}function s2(n){let t,e;const i=[n[4],{toggled:n[0]===n[4].themes[1]}];let a={};for(let o=0;o<i.length;o+=1)a=_(a,i[o]);return t=new l2({props:a}),t.$on("toggle",n[10]),{c(){z(t.$$.fragment)},m(o,l){J(t,o,l),e=!0},p(o,l){const s=l&17?r1(i,[l&16&&Q1(o[4]),{toggled:o[0]===o[4].themes[1]}]):{};t.$set(s)},i(o){e||(T(t.$$.fragment,o),e=!0)},o(o){m(t.$$.fragment,o),e=!1},d(o){w(t,o)}}}function j0(n,t){let e,i,a;return i=new Sa({props:{value:t[0],text:t[6][t[0]]}}),{key:n,first:null,c(){e=b1(),z(i.$$.fragment),this.first=e},m(o,l){G(o,e,l),J(i,o,l),a=!0},p(o,l){t=o;const s={};l&32&&(s.value=t[0]),l&32&&(s.text=t[6][t[0]]),i.$set(s)},i(o){a||(T(i.$$.fragment,o),a=!0)},o(o){m(i.$$.fragment,o),a=!1},d(o){o&&R(e),w(i,o)}}}function c2(n){let t=[],e=new Map,i,a,o=n[5].themes;const l=s=>s[0];for(let s=0;s<o.length;s+=1){let r=q0(n,o,s),c=l(r);e.set(c,t[s]=j0(c,r))}return{c(){for(let s=0;s<t.length;s+=1)t[s].c();i=b1()},m(s,r){for(let c=0;c<t.length;c+=1)t[c].m(s,r);G(s,i,r),a=!0},p(s,r){r&96&&(o=s[5].themes,u1(),t=yn(t,r,l,1,s,o,e,i.parentNode,pn,j0,i,q0),S1())},i(s){if(!a){for(let r=0;r<o.length;r+=1)T(t[r]);a=!0}},o(s){for(let r=0;r<t.length;r+=1)m(t[r]);a=!1},d(s){for(let r=0;r<t.length;r+=1)t[r].d(s);s&&R(i)}}}function N2(n){let t,e,i,a,o,l=n[1]&&Q0(n);const s=[s2,r2],r=[];function c(u,N){return u[3]==="toggle"?0:u[3]==="select"?1:-1}~(e=c(n))&&(i=r[e]=s[e](n));const I=n[8].default,d=f1(I,n,n[12],V0);return{c(){l&&l.c(),t=k(),i&&i.c(),a=k(),d&&d.c()},m(u,N){l&&l.m(u,N),G(u,t,N),~e&&r[e].m(u,N),G(u,a,N),d&&d.m(u,N),o=!0},p(u,[N]){u[1]?l?(l.p(u,N),N&2&&T(l,1)):(l=Q0(u),l.c(),T(l,1),l.m(t.parentNode,t)):l&&(u1(),m(l,1,1,()=>{l=null}),S1());let E=e;e=c(u),e===E?~e&&r[e].p(u,N):(i&&(u1(),m(r[E],1,1,()=>{r[E]=null}),S1()),~e?(i=r[e],i?i.p(u,N):(i=r[e]=s[e](u),i.c()),T(i,1),i.m(a.parentNode,a)):i=null),d&&d.p&&(!o||N&4097)&&G1(d,I,u,u[12],o?R1(I,u[12],N,o2):g1(u[12]),V0)},i(u){o||(T(l),T(i),T(d,u),o=!0)},o(u){m(l),m(i),m(d,u),o=!1},d(u){l&&l.d(u),u&&R(t),~e&&r[e].d(u),u&&R(a),d&&d.d(u)}}}function I2(n,t,e){let{$$slots:i={},$$scope:a}=t,{theme:o="white"}=t,{tokens:l={}}=t,{persist:s=!1}=t,{persistKey:r="theme"}=t,{render:c=void 0}=t,{toggle:I={themes:["white","g100"],labelA:"",labelB:"",labelText:"Dark mode",hideLabel:!1}}=t;const d={white:"White",g10:"Gray 10",g80:"Gray 80",g90:"Gray 90",g100:"Gray 100"},u=Object.keys(d);let{select:N={themes:u,labelText:"Themes",hideLabel:!1}}=t;const E=p1();function S(M){o=M,e(0,o)}const H=({detail:M})=>{e(0,o=M.toggled?I.themes[1]:I.themes[0])};function A(M){o=M,e(0,o)}return n.$$set=M=>{"theme"in M&&e(0,o=M.theme),"tokens"in M&&e(7,l=M.tokens),"persist"in M&&e(1,s=M.persist),"persistKey"in M&&e(2,r=M.persistKey),"render"in M&&e(3,c=M.render),"toggle"in M&&e(4,I=M.toggle),"select"in M&&e(5,N=M.select),"$$scope"in M&&e(12,a=M.$$scope)},n.$$.update=()=>{n.$$.dirty&129&&typeof window<"u"&&(Object.entries(l).forEach(([M,b])=>{document.documentElement.style.setProperty(`--cds-${M}`,b)}),o in d?(document.documentElement.setAttribute("theme",o),E("update",{theme:o})):console.warn(`[Theme.svelte] invalid theme "${o}". Value must be one of: ${JSON.stringify(Object.keys(d))}`))},[o,s,r,c,I,N,d,l,i,S,H,A,a]}class B2 extends E1{constructor(t){super(),B1(this,t,I2,N2,N1,{theme:0,tokens:7,persist:1,persistKey:2,render:3,toggle:4,select:5})}}const E2=B2;function d2(n){let t,e,i,a;const o=n[3].default,l=f1(o,n,n[2],null);let s=[n[1]],r={};for(let c=0;c<s.length;c+=1)r=_(r,s[c]);return{c(){t=O("div"),l&&l.c(),l1(t,r),B(t,"bx--tile",!0),B(t,"bx--tile--light",n[0])},m(c,I){G(c,t,I),l&&l.m(t,null),e=!0,i||(a=[v(t,"click",n[4]),v(t,"mouseover",n[5]),v(t,"mouseenter",n[6]),v(t,"mouseleave",n[7])],i=!0)},p(c,[I]){l&&l.p&&(!e||I&4)&&G1(l,o,c,c[2],e?R1(o,c[2],I,null):g1(c[2]),null),l1(t,r=r1(s,[I&2&&c[1]])),B(t,"bx--tile",!0),B(t,"bx--tile--light",c[0])},i(c){e||(T(l,c),e=!0)},o(c){m(l,c),e=!1},d(c){c&&R(t),l&&l.d(c),i=!1,C1(a)}}}function u2(n,t,e){const i=["light"];let a=q(t,i),{$$slots:o={},$$scope:l}=t,{light:s=!1}=t;function r(u){F.call(this,n,u)}function c(u){F.call(this,n,u)}function I(u){F.call(this,n,u)}function d(u){F.call(this,n,u)}return n.$$set=u=>{t=_(_({},t),n1(u)),e(1,a=q(t,i)),"light"in u&&e(0,s=u.light),"$$scope"in u&&e(2,l=u.$$scope)},[s,a,l,o,r,c,I,d]}class S2 extends E1{constructor(t){super(),B1(this,t,u2,d2,N1,{light:0})}}const H2=S2;function A2(n){let t,e,i,a,o,l,s,r,c,I,d;o=new aa({props:{"aria-label":n[7],title:n[7]}});const u=n[12].default,N=f1(u,n,n[11],null);let E=[{for:n[8]},{tabindex:r=n[3]?void 0:n[6]},n[10]],S={};for(let H=0;H<E.length;H+=1)S=_(S,E[H]);return{c(){t=O("input"),e=k(),i=O("label"),a=O("span"),z(o.$$.fragment),l=k(),s=O("span"),N&&N.c(),g(t,"type","checkbox"),g(t,"tabindex","-1"),t.checked=n[0],g(t,"id",n[8]),t.value=n[5],g(t,"name",n[9]),g(t,"title",n[4]),t.disabled=n[3],B(t,"bx--tile-input",!0),B(a,"bx--tile__checkmark",!0),B(s,"bx--tile-content",!0),l1(i,S),B(i,"bx--tile",!0),B(i,"bx--tile--selectable",!0),B(i,"bx--tile--is-selected",n[0]),B(i,"bx--tile--light",n[2]),B(i,"bx--tile--disabled",n[3])},m(H,A){G(H,t,A),n[18](t),G(H,e,A),G(H,i,A),U(i,a),J(o,a,null),U(i,l),U(i,s),N&&N.m(s,null),c=!0,I||(d=[v(i,"click",n[13]),v(i,"click",et(n[19])),v(i,"mouseover",n[14]),v(i,"mouseenter",n[15]),v(i,"mouseleave",n[16]),v(i,"keydown",n[17]),v(i,"keydown",n[20])],I=!0)},p(H,[A]){(!c||A&1)&&(t.checked=H[0]),(!c||A&256)&&g(t,"id",H[8]),(!c||A&32)&&(t.value=H[5]),(!c||A&512)&&g(t,"name",H[9]),(!c||A&16)&&g(t,"title",H[4]),(!c||A&8)&&(t.disabled=H[3]);const M={};A&128&&(M["aria-label"]=H[7]),A&128&&(M.title=H[7]),o.$set(M),N&&N.p&&(!c||A&2048)&&G1(N,u,H,H[11],c?R1(u,H[11],A,null):g1(H[11]),null),l1(i,S=r1(E,[(!c||A&256)&&{for:H[8]},(!c||A&72&&r!==(r=H[3]?void 0:H[6]))&&{tabindex:r},A&1024&&H[10]])),B(i,"bx--tile",!0),B(i,"bx--tile--selectable",!0),B(i,"bx--tile--is-selected",H[0]),B(i,"bx--tile--light",H[2]),B(i,"bx--tile--disabled",H[3])},i(H){c||(T(o.$$.fragment,H),T(N,H),c=!0)},o(H){m(o.$$.fragment,H),m(N,H),c=!1},d(H){H&&R(t),n[18](null),H&&R(e),H&&R(i),w(o),N&&N.d(H),I=!1,C1(d)}}}function C2(n,t,e){const i=["selected","light","disabled","title","value","tabindex","iconDescription","id","name","ref"];let a=q(t,i),{$$slots:o={},$$scope:l}=t,{selected:s=!1}=t,{light:r=!1}=t,{disabled:c=!1}=t,{title:I="title"}=t,{value:d="value"}=t,{tabindex:u="0"}=t,{iconDescription:N="Tile checkmark"}=t,{id:E="ccs-"+Math.random().toString(36)}=t,{name:S=""}=t,{ref:H=null}=t;const A=p1();function M(f){F.call(this,n,f)}function b(f){F.call(this,n,f)}function C(f){F.call(this,n,f)}function h(f){F.call(this,n,f)}function W(f){F.call(this,n,f)}function y(f){I1[f?"unshift":"push"](()=>{H=f,e(1,H)})}const L=()=>{c||e(0,s=!s)},$=f=>{c||(f.key===" "||f.key==="Enter")&&(f.preventDefault(),e(0,s=!s))};return n.$$set=f=>{t=_(_({},t),n1(f)),e(10,a=q(t,i)),"selected"in f&&e(0,s=f.selected),"light"in f&&e(2,r=f.light),"disabled"in f&&e(3,c=f.disabled),"title"in f&&e(4,I=f.title),"value"in f&&e(5,d=f.value),"tabindex"in f&&e(6,u=f.tabindex),"iconDescription"in f&&e(7,N=f.iconDescription),"id"in f&&e(8,E=f.id),"name"in f&&e(9,S=f.name),"ref"in f&&e(1,H=f.ref),"$$scope"in f&&e(11,l=f.$$scope)},n.$$.update=()=>{n.$$.dirty&265&&(c||A(s?"select":"deselect",E))},[s,H,r,c,I,d,u,N,E,S,a,l,o,M,b,C,h,W,y,L,$]}class M2 extends E1{constructor(t){super(),B1(this,t,C2,A2,N1,{selected:0,light:2,disabled:3,title:4,value:5,tabindex:6,iconDescription:7,id:8,name:9,ref:1})}}const T2=M2;function X0(n){let t,e;return{c(){t=e1("title"),e=t1(n[1])},m(i,a){G(i,t,a),U(t,e)},p(i,a){a&2&&o1(e,i[1])},d(i){i&&R(t)}}}function f2(n){let t,e,i=n[1]&&X0(n),a=[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{preserveAspectRatio:"xMidYMid meet"},{width:n[0]},{height:n[0]},n[2],n[3]],o={};for(let l=0;l<a.length;l+=1)o=_(o,a[l]);return{c(){t=e1("svg"),i&&i.c(),e=e1("path"),g(e,"d","M18,28H14a2,2,0,0,1-2-2V18.41L4.59,11A2,2,0,0,1,4,9.59V6A2,2,0,0,1,6,4H26a2,2,0,0,1,2,2V9.59A2,2,0,0,1,27.41,11L20,18.41V26A2,2,0,0,1,18,28ZM6,6V9.59l8,8V26h4V17.59l8-8V6Z"),H1(t,o)},m(l,s){G(l,t,s),i&&i.m(t,null),U(t,e)},p(l,[s]){l[1]?i?i.p(l,s):(i=X0(l),i.c(),i.m(t,e)):i&&(i.d(1),i=null),H1(t,o=r1(a,[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{preserveAspectRatio:"xMidYMid meet"},s&1&&{width:l[0]},s&1&&{height:l[0]},s&4&&l[2],s&8&&l[3]]))},i:i1,o:i1,d(l){l&&R(t),i&&i.d()}}}function R2(n,t,e){let i,a;const o=["size","title"];let l=q(t,o),{size:s=16}=t,{title:r=void 0}=t;return n.$$set=c=>{e(5,t=_(_({},t),n1(c))),e(3,l=q(t,o)),"size"in c&&e(0,s=c.size),"title"in c&&e(1,r=c.title)},n.$$.update=()=>{e(4,i=t["aria-label"]||t["aria-labelledby"]||r),e(2,a={"aria-hidden":i?void 0:!0,role:i?"img":void 0,focusable:Number(t.tabindex)===0?!0:void 0})},t=n1(t),[s,r,a,l,i]}class G2 extends E1{constructor(t){super(),B1(this,t,R2,f2,N1,{size:0,title:1})}}function x0(n){let t,e;return{c(){t=e1("title"),e=t1(n[1])},m(i,a){G(i,t,a),U(t,e)},p(i,a){a&2&&o1(e,i[1])},d(i){i&&R(t)}}}function g2(n){let t,e,i,a=n[1]&&x0(n),o=[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{preserveAspectRatio:"xMidYMid meet"},{width:n[0]},{height:n[0]},n[2],n[3]],l={};for(let s=0;s<o.length;s+=1)l=_(l,o[s]);return{c(){t=e1("svg"),a&&a.c(),e=e1("path"),i=e1("path"),g(e,"d","M23 27L23 15 18 15 18 13 30 13 30 15 25 15 25 27 23 27z"),g(i,"d","M11 27L11 8 2 8 2 6 22 6 22 8 13 8 13 27 11 27z"),H1(t,l)},m(s,r){G(s,t,r),a&&a.m(t,null),U(t,e),U(t,i)},p(s,[r]){s[1]?a?a.p(s,r):(a=x0(s),a.c(),a.m(t,e)):a&&(a.d(1),a=null),H1(t,l=r1(o,[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{preserveAspectRatio:"xMidYMid meet"},r&1&&{width:s[0]},r&1&&{height:s[0]},r&4&&s[2],r&8&&s[3]]))},i:i1,o:i1,d(s){s&&R(t),a&&a.d()}}}function m2(n,t,e){let i,a;const o=["size","title"];let l=q(t,o),{size:s=16}=t,{title:r=void 0}=t;return n.$$set=c=>{e(5,t=_(_({},t),n1(c))),e(3,l=q(t,o)),"size"in c&&e(0,s=c.size),"title"in c&&e(1,r=c.title)},n.$$.update=()=>{e(4,i=t["aria-label"]||t["aria-labelledby"]||r),e(2,a={"aria-hidden":i?void 0:!0,role:i?"img":void 0,focusable:Number(t.tabindex)===0?!0:void 0})},t=n1(t),[s,r,a,l,i]}class h2 extends E1{constructor(t){super(),B1(this,t,m2,g2,N1,{size:0,title:1})}}function $0(n){let t,e;return{c(){t=e1("title"),e=t1(n[1])},m(i,a){G(i,t,a),U(t,e)},p(i,a){a&2&&o1(e,i[1])},d(i){i&&R(t)}}}function U2(n){let t,e,i=n[1]&&$0(n),a=[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{preserveAspectRatio:"xMidYMid meet"},{width:n[0]},{height:n[0]},n[2],n[3]],o={};for(let l=0;l<a.length;l+=1)o=_(o,a[l]);return{c(){t=e1("svg"),i&&i.c(),e=e1("path"),g(e,"d","M16 4a5 5 0 11-5 5 5 5 0 015-5m0-2a7 7 0 107 7A7 7 0 0016 2zM26 30H24V25a5 5 0 00-5-5H13a5 5 0 00-5 5v5H6V25a7 7 0 017-7h6a7 7 0 017 7z"),H1(t,o)},m(l,s){G(l,t,s),i&&i.m(t,null),U(t,e)},p(l,[s]){l[1]?i?i.p(l,s):(i=$0(l),i.c(),i.m(t,e)):i&&(i.d(1),i=null),H1(t,o=r1(a,[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{preserveAspectRatio:"xMidYMid meet"},s&1&&{width:l[0]},s&1&&{height:l[0]},s&4&&l[2],s&8&&l[3]]))},i:i1,o:i1,d(l){l&&R(t),i&&i.d()}}}function b2(n,t,e){let i,a;const o=["size","title"];let l=q(t,o),{size:s=16}=t,{title:r=void 0}=t;return n.$$set=c=>{e(5,t=_(_({},t),n1(c))),e(3,l=q(t,o)),"size"in c&&e(0,s=c.size),"title"in c&&e(1,r=c.title)},n.$$.update=()=>{e(4,i=t["aria-label"]||t["aria-labelledby"]||r),e(2,a={"aria-hidden":i?void 0:!0,role:i?"img":void 0,focusable:Number(t.tabindex)===0?!0:void 0})},t=n1(t),[s,r,a,l,i]}class L2 extends E1{constructor(t){super(),B1(this,t,b2,U2,N1,{size:0,title:1})}}function tn(n){let t,e;return{c(){t=e1("title"),e=t1(n[1])},m(i,a){G(i,t,a),U(t,e)},p(i,a){a&2&&o1(e,i[1])},d(i){i&&R(t)}}}function W2(n){let t,e,i=n[1]&&tn(n),a=[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{preserveAspectRatio:"xMidYMid meet"},{width:n[0]},{height:n[0]},n[2],n[3]],o={};for(let l=0;l<a.length;l+=1)o=_(o,a[l]);return{c(){t=e1("svg"),i&&i.c(),e=e1("path"),g(e,"d","M28.316 13.949L27.684 12.051 17 15.612 17 4 15 4 15 15.612 4.316 12.051 3.684 13.949 14.368 17.51 7.2 27.066 8.8 28.267 16 18.667 23.2 28.267 24.8 27.066 17.632 17.51 28.316 13.949z"),H1(t,o)},m(l,s){G(l,t,s),i&&i.m(t,null),U(t,e)},p(l,[s]){l[1]?i?i.p(l,s):(i=tn(l),i.c(),i.m(t,e)):i&&(i.d(1),i=null),H1(t,o=r1(a,[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{preserveAspectRatio:"xMidYMid meet"},s&1&&{width:l[0]},s&1&&{height:l[0]},s&4&&l[2],s&8&&l[3]]))},i:i1,o:i1,d(l){l&&R(t),i&&i.d()}}}function P2(n,t,e){let i,a;const o=["size","title"];let l=q(t,o),{size:s=16}=t,{title:r=void 0}=t;return n.$$set=c=>{e(5,t=_(_({},t),n1(c))),e(3,l=q(t,o)),"size"in c&&e(0,s=c.size),"title"in c&&e(1,r=c.title)},n.$$.update=()=>{e(4,i=t["aria-label"]||t["aria-labelledby"]||r),e(2,a={"aria-hidden":i?void 0:!0,role:i?"img":void 0,focusable:Number(t.tabindex)===0?!0:void 0})},t=n1(t),[s,r,a,l,i]}class v2 extends E1{constructor(t){super(),B1(this,t,P2,W2,N1,{size:0,title:1})}}function nn(n){let t,e;return{c(){t=e1("title"),e=t1(n[1])},m(i,a){G(i,t,a),U(t,e)},p(i,a){a&2&&o1(e,i[1])},d(i){i&&R(t)}}}function D2(n){let t,e,i=n[1]&&nn(n),a=[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{preserveAspectRatio:"xMidYMid meet"},{width:n[0]},{height:n[0]},n[2],n[3]],o={};for(let l=0;l<a.length;l+=1)o=_(o,a[l]);return{c(){t=e1("svg"),i&&i.c(),e=e1("path"),g(e,"d","M18 19H24V21H18zM18 15H30V17H18zM18 11H30V13H18zM14 21V19H9V17H7v2H2v2h8.2148a8.5914 8.5914 0 01-2.2159 3.9771A9.2731 9.2731 0 016.5521 23H4.3334a10.8553 10.8553 0 002.1451 3.2966A14.6584 14.6584 0 013 28.127L3.7021 30a16.42 16.42 0 004.2907-2.3362A16.4883 16.4883 0 0012.2979 30L13 28.127A14.664 14.664 0 019.5228 26.3 10.3132 10.3132 0 0012.2516 21zM11.1666 13H13.333L8.75 2H6.5832L2 13H4.1664L5 11h5.3335zM5.8331 9L7.6665 4.6 9.5 9z"),H1(t,o)},m(l,s){G(l,t,s),i&&i.m(t,null),U(t,e)},p(l,[s]){l[1]?i?i.p(l,s):(i=nn(l),i.c(),i.m(t,e)):i&&(i.d(1),i=null),H1(t,o=r1(a,[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{preserveAspectRatio:"xMidYMid meet"},s&1&&{width:l[0]},s&1&&{height:l[0]},s&4&&l[2],s&8&&l[3]]))},i:i1,o:i1,d(l){l&&R(t),i&&i.d()}}}function F2(n,t,e){let i,a;const o=["size","title"];let l=q(t,o),{size:s=16}=t,{title:r=void 0}=t;return n.$$set=c=>{e(5,t=_(_({},t),n1(c))),e(3,l=q(t,o)),"size"in c&&e(0,s=c.size),"title"in c&&e(1,r=c.title)},n.$$.update=()=>{e(4,i=t["aria-label"]||t["aria-labelledby"]||r),e(2,a={"aria-hidden":i?void 0:!0,role:i?"img":void 0,focusable:Number(t.tabindex)===0?!0:void 0})},t=n1(t),[s,r,a,l,i]}class _2 extends E1{constructor(t){super(),B1(this,t,F2,D2,N1,{size:0,title:1})}}function en(n){let t,e;return{c(){t=e1("title"),e=t1(n[1])},m(i,a){G(i,t,a),U(t,e)},p(i,a){a&2&&o1(e,i[1])},d(i){i&&R(t)}}}function p2(n){let t,e,i=n[1]&&en(n),a=[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{preserveAspectRatio:"xMidYMid meet"},{width:n[0]},{height:n[0]},n[2],n[3]],o={};for(let l=0;l<a.length;l+=1)o=_(o,a[l]);return{c(){t=e1("svg"),i&&i.c(),e=e1("path"),g(e,"d","M24 9.4L22.6 8 16 14.6 9.4 8 8 9.4 14.6 16 8 22.6 9.4 24 16 17.4 22.6 24 24 22.6 17.4 16 24 9.4z"),H1(t,o)},m(l,s){G(l,t,s),i&&i.m(t,null),U(t,e)},p(l,[s]){l[1]?i?i.p(l,s):(i=en(l),i.c(),i.m(t,e)):i&&(i.d(1),i=null),H1(t,o=r1(a,[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{preserveAspectRatio:"xMidYMid meet"},s&1&&{width:l[0]},s&1&&{height:l[0]},s&4&&l[2],s&8&&l[3]]))},i:i1,o:i1,d(l){l&&R(t),i&&i.d()}}}function y2(n,t,e){let i,a;const o=["size","title"];let l=q(t,o),{size:s=16}=t,{title:r=void 0}=t;return n.$$set=c=>{e(5,t=_(_({},t),n1(c))),e(3,l=q(t,o)),"size"in c&&e(0,s=c.size),"title"in c&&e(1,r=c.title)},n.$$.update=()=>{e(4,i=t["aria-label"]||t["aria-labelledby"]||r),e(2,a={"aria-hidden":i?void 0:!0,role:i?"img":void 0,focusable:Number(t.tabindex)===0?!0:void 0})},t=n1(t),[s,r,a,l,i]}class Jn extends E1{constructor(t){super(),B1(this,t,y2,p2,N1,{size:0,title:1})}}function an(n,t,e){const i=n.slice();return i[6]=t[e],i[8]=e,i}function ln(n,t,e){const i=n.slice();return i[9]=t[e],i}function on(n){let t,e=n[9]+"",i;return{c(){t=O("span"),i=t1(e),g(t,"class","font-mono")},m(a,o){G(a,t,o),U(t,i)},p:i1,d(a){a&&R(t)}}}function Y2(n){let t=n[2][n[8]/6]+"",e;return{c(){e=t1(t)},m(i,a){G(i,e,a)},p:i1,d(i){i&&R(e)}}}function rn(n){let t,e,i,a,o=!(n[8]%6)&&Y2(n);function l(r){n[5](r)}let s={class:"!m-0",value:n[6],hideLabel:!0};return n[0]!==void 0&&(s.group=n[0]),e=new Yn({props:s}),I1.push(()=>T1(e,"group",l,n[0])),{c(){o&&o.c(),t=k(),z(e.$$.fragment)},m(r,c){o&&o.m(r,c),G(r,t,c),J(e,r,c),a=!0},p(r,c){r[8]%6||o.p(r,c);const I={};!i&&c&1&&(i=!0,I.group=r[0],M1(()=>i=!1)),e.$set(I)},i(r){a||(T(e.$$.fragment,r),a=!0)},o(r){m(e.$$.fragment,r),a=!1},d(r){o&&o.d(r),r&&R(t),w(e,r)}}}function O2(n){let t,e,i,a,o,l,s,r,c;a=new Jn({});let I=n[1],d=[];for(let S=0;S<I.length;S+=1)d[S]=on(ln(n,I,S));let u=n[3],N=[];for(let S=0;S<u.length;S+=1)N[S]=rn(an(n,u,S));const E=S=>m(N[S],1,1,()=>{N[S]=null});return{c(){t=O("main"),e=O("div"),i=O("span"),z(a.$$.fragment),o=k();for(let S=0;S<d.length;S+=1)d[S].c();l=k();for(let S=0;S<N.length;S+=1)N[S].c();g(i,"class","cursor-pointer"),g(e,"class","grid gap-x-2 grid-cols-[repeat(7,minmax(0,1.5rem))] text-center"),g(t,"class","p-2")},m(S,H){G(S,t,H),U(t,e),U(e,i),J(a,i,null),U(e,o);for(let A=0;A<d.length;A+=1)d[A].m(e,null);U(e,l);for(let A=0;A<N.length;A+=1)N[A].m(e,null);s=!0,r||(c=v(i,"click",n[4]),r=!0)},p(S,[H]){if(H&2){I=S[1];let A;for(A=0;A<I.length;A+=1){const M=ln(S,I,A);d[A]?d[A].p(M,H):(d[A]=on(M),d[A].c(),d[A].m(e,l))}for(;A<d.length;A+=1)d[A].d(1);d.length=I.length}if(H&13){u=S[3];let A;for(A=0;A<u.length;A+=1){const M=an(S,u,A);N[A]?(N[A].p(M,H),T(N[A],1)):(N[A]=rn(M),N[A].c(),T(N[A],1),N[A].m(e,null))}for(u1(),A=u.length;A<N.length;A+=1)E(A);S1()}},i(S){if(!s){T(a.$$.fragment,S);for(let H=0;H<u.length;H+=1)T(N[H]);s=!0}},o(S){m(a.$$.fragment,S),N=N.filter(Boolean);for(let H=0;H<N.length;H+=1)m(N[H]);s=!1},d(S){S&&R(t),w(a),_1(d,S),_1(N,S),r=!1,c()}}}function K2(n,t,e){const i=["M","T","W","R","F","S"],a=["1","2","3","4","n","5","6","7","8","9","a","b","c"],o=a.flatMap(c=>i.map(I=>I+c));let{filterTimetable:l}=t;const s=()=>{e(0,l=[])};function r(c){l=c,e(0,l)}return n.$$set=c=>{"filterTimetable"in c&&e(0,l=c.filterTimetable)},[l,i,a,o,s,r]}class k2 extends E1{constructor(t){super(),B1(this,t,K2,O2,N1,{filterTimetable:0})}}function J2(n){let t,e=n[5].length+"",i;return{c(){t=t1("Found: "),i=t1(e)},m(a,o){G(a,t,o),G(a,i,o)},p(a,o){o&32&&e!==(e=a[5].length+"")&&o1(i,e)},d(a){a&&R(t),a&&R(i)}}}function w2(n){let t;return{c(){t=t1("Clear All")},m(e,i){G(e,t,i)},d(e){e&&R(t)}}}function z2(n){let t,e,i,a,o,l,s,r,c,I,d,u,N,E,S,H,A,M,b,C,h,W;function y(V){n[9](V)}let L={size:"lg",placeholder:"Course Name...",icon:h2};n[0]!==void 0&&(L.value=n[0]),t=new Nt({props:L}),I1.push(()=>T1(t,"value",y,n[0]));function $(V){n[10](V)}let f={size:"lg",placeholder:"Teacher Name...",icon:L2};n[1]!==void 0&&(f.value=n[1]),a=new Nt({props:f}),I1.push(()=>T1(a,"value",$,n[1]));function P(V){n[11](V)}let p={size:"lg",placeholder:"Course ID...",icon:v2};n[2]!==void 0&&(p.value=n[2]),s=new Nt({props:p}),I1.push(()=>T1(s,"value",P,n[2])),d=new _2({props:{class:"m-3",fill:"var(--cds-icon-02)"}});function a1(V){n[12](V)}let A1={class:"m-3"};n[3]!==void 0&&(A1.checked=n[3]),S=new Yn({props:A1}),I1.push(()=>T1(S,"checked",a1,n[3]));function h1(V){n[13](V)}let m1={};return n[4]!==void 0&&(m1.filterTimetable=n[4]),M=new k2({props:m1}),I1.push(()=>T1(M,"filterTimetable",h1,n[4])),h=new x1({props:{class:"w-full mt-4",kind:"secondary",$$slots:{default:[w2]},$$scope:{ctx:n}}}),h.$on("click",n[14]),{c(){z(t.$$.fragment),i=k(),z(a.$$.fragment),l=k(),z(s.$$.fragment),c=k(),I=O("div"),z(d.$$.fragment),u=k(),N=O("span"),N.textContent="Only English",E=k(),z(S.$$.fragment),A=k(),z(M.$$.fragment),C=k(),z(h.$$.fragment),g(N,"class","mr-auto"),g(I,"class","flex items-center")},m(V,d1){J(t,V,d1),G(V,i,d1),J(a,V,d1),G(V,l,d1),J(s,V,d1),G(V,c,d1),G(V,I,d1),J(d,I,null),U(I,u),U(I,N),U(I,E),J(S,I,null),G(V,A,d1),J(M,V,d1),G(V,C,d1),J(h,V,d1),W=!0},p(V,d1){const X={};!e&&d1&1&&(e=!0,X.value=V[0],M1(()=>e=!1)),t.$set(X);const Y={};!o&&d1&2&&(o=!0,Y.value=V[1],M1(()=>o=!1)),a.$set(Y);const c1={};!r&&d1&4&&(r=!0,c1.value=V[2],M1(()=>r=!1)),s.$set(c1);const K={};!H&&d1&8&&(H=!0,K.checked=V[3],M1(()=>H=!1)),S.$set(K);const Z={};!b&&d1&16&&(b=!0,Z.filterTimetable=V[4],M1(()=>b=!1)),M.$set(Z);const Q={};d1&65536&&(Q.$$scope={dirty:d1,ctx:V}),h.$set(Q)},i(V){W||(T(t.$$.fragment,V),T(a.$$.fragment,V),T(s.$$.fragment,V),T(d.$$.fragment,V),T(S.$$.fragment,V),T(M.$$.fragment,V),T(h.$$.fragment,V),W=!0)},o(V){m(t.$$.fragment,V),m(a.$$.fragment,V),m(s.$$.fragment,V),m(d.$$.fragment,V),m(S.$$.fragment,V),m(M.$$.fragment,V),m(h.$$.fragment,V),W=!1},d(V){w(t,V),V&&R(i),w(a,V),V&&R(l),w(s,V),V&&R(c),V&&R(I),w(d),w(S),V&&R(A),w(M,V),V&&R(C),w(h,V)}}}function Z2(n){let t,e,i,a,o,l;t=new x1({props:{kind:"tertiary",icon:G2,$$slots:{default:[J2]},$$scope:{ctx:n}}}),t.$on("click",n[8]);function s(c){n[15](c)}let r={align:"bottom-right",$$slots:{default:[z2]},$$scope:{ctx:n}};return n[6]!==void 0&&(r.open=n[6]),a=new Ma({props:r}),I1.push(()=>T1(a,"open",s,n[6])),{c(){z(t.$$.fragment),e=k(),i=O("div"),z(a.$$.fragment),g(i,"class","relative")},m(c,I){J(t,c,I),G(c,e,I),G(c,i,I),J(a,i,null),l=!0},p(c,[I]){const d={};I&65568&&(d.$$scope={dirty:I,ctx:c}),t.$set(d);const u={};I&65567&&(u.$$scope={dirty:I,ctx:c}),!o&&I&64&&(o=!0,u.open=c[6],M1(()=>o=!1)),a.$set(u)},i(c){l||(T(t.$$.fragment,c),T(a.$$.fragment,c),l=!0)},o(c){m(t.$$.fragment,c),m(a.$$.fragment,c),l=!1},d(c){w(t,c),c&&R(e),c&&R(i),w(a)}}}function V2(n,t,e){let i=!1;function a(){e(0,l=""),e(1,s=""),e(2,r=""),e(3,c=!1),e(4,I=[])}let{found:o,filterName:l,filterTeacher:s,filterID:r,filterEng:c,filterTimetable:I}=t;const d=()=>e(6,i=!i);function u(b){l=b,e(0,l)}function N(b){s=b,e(1,s)}function E(b){r=b,e(2,r)}function S(b){c=b,e(3,c)}function H(b){I=b,e(4,I)}const A=()=>{a()};function M(b){i=b,e(6,i)}return n.$$set=b=>{"found"in b&&e(5,o=b.found),"filterName"in b&&e(0,l=b.filterName),"filterTeacher"in b&&e(1,s=b.filterTeacher),"filterID"in b&&e(2,r=b.filterID),"filterEng"in b&&e(3,c=b.filterEng),"filterTimetable"in b&&e(4,I=b.filterTimetable)},[l,s,r,c,I,o,i,a,d,u,N,E,S,H,A,M]}class q2 extends E1{constructor(t){super(),B1(this,t,V2,Z2,N1,{found:5,filterName:0,filterTeacher:1,filterID:2,filterEng:3,filterTimetable:4})}}function sn(n){let t,e;return{c(){t=e1("title"),e=t1(n[1])},m(i,a){G(i,t,a),U(t,e)},p(i,a){a&2&&o1(e,i[1])},d(i){i&&R(t)}}}function Q2(n){let t,e,i,a=n[1]&&sn(n),o=[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{preserveAspectRatio:"xMidYMid meet"},{width:n[0]},{height:n[0]},n[2],n[3]],l={};for(let s=0;s<o.length;s+=1)l=_(l,o[s]);return{c(){t=e1("svg"),a&&a.c(),e=e1("path"),i=e1("path"),g(e,"d","M16,18a5,5,0,1,1,5-5A5.0057,5.0057,0,0,1,16,18Zm0-8a3,3,0,1,0,3,3A3.0033,3.0033,0,0,0,16,10Z"),g(i,"d","M16,30,7.5645,20.0513c-.0479-.0571-.3482-.4515-.3482-.4515A10.8888,10.8888,0,0,1,5,13a11,11,0,0,1,22,0,10.8844,10.8844,0,0,1-2.2148,6.5973l-.0015.0025s-.3.3944-.3447.4474ZM8.8125,18.395c.001.0007.2334.3082.2866.3744L16,26.9079l6.91-8.15c.0439-.0552.2783-.3649.2788-.3657A8.901,8.901,0,0,0,25,13,9,9,0,1,0,7,13a8.9054,8.9054,0,0,0,1.8125,5.395Z"),H1(t,l)},m(s,r){G(s,t,r),a&&a.m(t,null),U(t,e),U(t,i)},p(s,[r]){s[1]?a?a.p(s,r):(a=sn(s),a.c(),a.m(t,e)):a&&(a.d(1),a=null),H1(t,l=r1(o,[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{preserveAspectRatio:"xMidYMid meet"},r&1&&{width:s[0]},r&1&&{height:s[0]},r&4&&s[2],r&8&&s[3]]))},i:i1,o:i1,d(s){s&&R(t),a&&a.d()}}}function j2(n,t,e){let i,a;const o=["size","title"];let l=q(t,o),{size:s=16}=t,{title:r=void 0}=t;return n.$$set=c=>{e(5,t=_(_({},t),n1(c))),e(3,l=q(t,o)),"size"in c&&e(0,s=c.size),"title"in c&&e(1,r=c.title)},n.$$.update=()=>{e(4,i=t["aria-label"]||t["aria-labelledby"]||r),e(2,a={"aria-hidden":i?void 0:!0,role:i?"img":void 0,focusable:Number(t.tabindex)===0?!0:void 0})},t=n1(t),[s,r,a,l,i]}class X2 extends E1{constructor(t){super(),B1(this,t,j2,Q2,N1,{size:0,title:1})}}function cn(n){let t,e;return{c(){t=e1("title"),e=t1(n[1])},m(i,a){G(i,t,a),U(t,e)},p(i,a){a&2&&o1(e,i[1])},d(i){i&&R(t)}}}function x2(n){let t,e,i=n[1]&&cn(n),a=[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{preserveAspectRatio:"xMidYMid meet"},{width:n[0]},{height:n[0]},n[2],n[3]],o={};for(let l=0;l<a.length;l+=1)o=_(o,a[l]);return{c(){t=e1("svg"),i&&i.c(),e=e1("path"),g(e,"d","M30 30H28V25a5.0057 5.0057 0 00-5-5V18a7.0078 7.0078 0 017 7zM22 30H20V25a5.0059 5.0059 0 00-5-5H9a5.0059 5.0059 0 00-5 5v5H2V25a7.0082 7.0082 0 017-7h6a7.0082 7.0082 0 017 7zM20 2V4a5 5 0 010 10v2A7 7 0 0020 2zM12 4A5 5 0 117 9a5 5 0 015-5m0-2a7 7 0 107 7A7 7 0 0012 2z"),H1(t,o)},m(l,s){G(l,t,s),i&&i.m(t,null),U(t,e)},p(l,[s]){l[1]?i?i.p(l,s):(i=cn(l),i.c(),i.m(t,e)):i&&(i.d(1),i=null),H1(t,o=r1(a,[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{preserveAspectRatio:"xMidYMid meet"},s&1&&{width:l[0]},s&1&&{height:l[0]},s&4&&l[2],s&8&&l[3]]))},i:i1,o:i1,d(l){l&&R(t),i&&i.d()}}}function $2(n,t,e){let i,a;const o=["size","title"];let l=q(t,o),{size:s=16}=t,{title:r=void 0}=t;return n.$$set=c=>{e(5,t=_(_({},t),n1(c))),e(3,l=q(t,o)),"size"in c&&e(0,s=c.size),"title"in c&&e(1,r=c.title)},n.$$.update=()=>{e(4,i=t["aria-label"]||t["aria-labelledby"]||r),e(2,a={"aria-hidden":i?void 0:!0,role:i?"img":void 0,focusable:Number(t.tabindex)===0?!0:void 0})},t=n1(t),[s,r,a,l,i]}class tl extends E1{constructor(t){super(),B1(this,t,$2,x2,N1,{size:0,title:1})}}function Nn(n,t,e){const i=n.slice();return i[12]=t[e][0],i[13]=t[e][1],i[15]=e,i}function In(n,t,e){const i=n.slice();return i[16]=t[e],i[15]=e,i}function Bn(n,t,e){const i=n.slice();return i[16]=t[e],i[18]=t,i[19]=e,i}function En(n,t,e){const i=n.slice();return i[20]=t[e],i}function dn(n,t,e){const i=n.slice();return i[20]=t[e],i}function nl(n){let t,e=n[0].length+"",i;return{c(){t=t1("Selected: "),i=t1(e)},m(a,o){G(a,t,o),G(a,i,o)},p(a,o){o&1&&e!==(e=a[0].length+"")&&o1(i,e)},d(a){a&&R(t),a&&R(i)}}}function el(n){let t;return{c(){t=t1(n[5])},m(e,i){G(e,t,i)},p(e,i){i&32&&o1(t,e[5])},d(e){e&&R(t)}}}function il(n){let t,e,i;return t=new O1({props:{size:"sm",$$slots:{default:[el]},$$scope:{ctx:n}}}),{c(){z(t.$$.fragment),e=t1(" Selected")},m(a,o){J(t,a,o),G(a,e,o),i=!0},p(a,o){const l={};o&33554464&&(l.$$scope={dirty:o,ctx:a}),t.$set(l)},i(a){i||(T(t.$$.fragment,a),i=!0)},o(a){m(t.$$.fragment,a),i=!1},d(a){w(t,a),a&&R(e)}}}function al(n){let t,e,i,a;return t=new p0({props:{$$slots:{default:[il]},$$scope:{ctx:n}}}),i=new p0({props:{label:"Timetable"}}),{c(){z(t.$$.fragment),e=k(),z(i.$$.fragment)},m(o,l){J(t,o,l),G(o,e,l),J(i,o,l),a=!0},p(o,l){const s={};l&33554464&&(s.$$scope={dirty:l,ctx:o}),t.$set(s)},i(o){a||(T(t.$$.fragment,o),T(i.$$.fragment,o),a=!0)},o(o){m(t.$$.fragment,o),m(i.$$.fragment,o),a=!1},d(o){w(t,o),o&&R(e),w(i,o)}}}function un(n){let t;return{c(){t=t1("Woohoo! No classes this semester~")},m(e,i){G(e,t,i)},d(e){e&&R(t)}}}function ll(n){let t=n[16].venue+"",e;return{c(){e=t1(t)},m(i,a){G(i,e,a)},p(i,a){a&1&&t!==(t=i[16].venue+"")&&o1(e,t)},d(i){i&&R(e)}}}function Sn(n){let t,e,i=n[16].time,a=[];for(let l=0;l<i.length;l+=1)a[l]=Hn(En(n,i,l));const o=l=>m(a[l],1,1,()=>{a[l]=null});return{c(){for(let l=0;l<a.length;l+=1)a[l].c();t=b1()},m(l,s){for(let r=0;r<a.length;r+=1)a[r].m(l,s);G(l,t,s),e=!0},p(l,s){if(s&1){i=l[16].time;let r;for(r=0;r<i.length;r+=1){const c=En(l,i,r);a[r]?(a[r].p(c,s),T(a[r],1)):(a[r]=Hn(c),a[r].c(),T(a[r],1),a[r].m(t.parentNode,t))}for(u1(),r=i.length;r<a.length;r+=1)o(r);S1()}},i(l){if(!e){for(let s=0;s<i.length;s+=1)T(a[s]);e=!0}},o(l){a=a.filter(Boolean);for(let s=0;s<a.length;s+=1)m(a[s]);e=!1},d(l){_1(a,l),l&&R(t)}}}function ol(n){let t=n[20]+"",e;return{c(){e=t1(t)},m(i,a){G(i,e,a)},p(i,a){a&1&&t!==(t=i[20]+"")&&o1(e,t)},d(i){i&&R(e)}}}function Hn(n){let t,e;return t=new O1({props:{type:"outline",$$slots:{default:[ol]},$$scope:{ctx:n}}}),{c(){z(t.$$.fragment)},m(i,a){J(t,i,a),e=!0},p(i,a){const o={};a&33554433&&(o.$$scope={dirty:a,ctx:i}),t.$set(o)},i(i){e||(T(t.$$.fragment,i),e=!0)},o(i){m(t.$$.fragment,i),e=!1},d(i){w(t,i)}}}function rl(n){let t=n[16].capacity+"",e;return{c(){e=t1(t)},m(i,a){G(i,e,a)},p(i,a){a&1&&t!==(t=i[16].capacity+"")&&o1(e,t)},d(i){i&&R(e)}}}function sl(n){let t,e,i,a,o,l,s,r,c,I,d,u,N=n[16].limits+"",E,S;e=new X2({props:{size:"24",class:"m-2"}}),a=new O1({props:{type:"outline",$$slots:{default:[ll]},$$scope:{ctx:n}}});let H=n[16].time&&Sn(n);return r=new tl({props:{size:"24",class:"m-2"}}),I=new O1({props:{type:"outline",$$slots:{default:[rl]},$$scope:{ctx:n}}}),{c(){t=O("div"),z(e.$$.fragment),i=k(),z(a.$$.fragment),o=k(),H&&H.c(),l=k(),s=O("div"),z(r.$$.fragment),c=k(),z(I.$$.fragment),d=k(),u=O("span"),E=t1(N),g(t,"class","flex items-center"),g(s,"class","flex items-center")},m(A,M){G(A,t,M),J(e,t,null),U(t,i),J(a,t,null),U(t,o),H&&H.m(t,null),G(A,l,M),G(A,s,M),J(r,s,null),U(s,c),J(I,s,null),U(s,d),U(s,u),U(u,E),S=!0},p(A,M){const b={};M&33554433&&(b.$$scope={dirty:M,ctx:A}),a.$set(b),A[16].time?H?(H.p(A,M),M&1&&T(H,1)):(H=Sn(A),H.c(),T(H,1),H.m(t,null)):H&&(u1(),m(H,1,1,()=>{H=null}),S1());const C={};M&33554433&&(C.$$scope={dirty:M,ctx:A}),I.$set(C),(!S||M&1)&&N!==(N=A[16].limits+"")&&o1(E,N)},i(A){S||(T(e.$$.fragment,A),T(a.$$.fragment,A),T(H),T(r.$$.fragment,A),T(I.$$.fragment,A),S=!0)},o(A){m(e.$$.fragment,A),m(a.$$.fragment,A),m(H),m(r.$$.fragment,A),m(I.$$.fragment,A),S=!1},d(A){A&&R(t),w(e),w(a),H&&H.d(),A&&R(l),A&&R(s),w(r),w(I)}}}function cl(n){let t=n[16].credit+"",e;return{c(){e=t1(t)},m(i,a){G(i,e,a)},p(i,a){a&1&&t!==(t=i[16].credit+"")&&o1(e,t)},d(i){i&&R(e)}}}function Nl(n){let t=n[20][n[1]]+"",e;return{c(){e=t1(t)},m(i,a){G(i,e,a)},p(i,a){a&3&&t!==(t=i[20][i[1]]+"")&&o1(e,t)},d(i){i&&R(e)}}}function An(n){let t,e;return t=new O1({props:{size:"sm",$$slots:{default:[Nl]},$$scope:{ctx:n}}}),{c(){z(t.$$.fragment)},m(i,a){J(t,i,a),e=!0},p(i,a){const o={};a&33554435&&(o.$$scope={dirty:a,ctx:i}),t.$set(o)},i(i){e||(T(t.$$.fragment,i),e=!0)},o(i){m(t.$$.fragment,i),e=!1},d(i){w(t,i)}}}function Il(n){let t,e,i,a=n[16].name[n[1]]+"",o,l,s,r;t=new O1({props:{size:"sm",$$slots:{default:[cl]},$$scope:{ctx:n}}});let c=n[16].teacher,I=[];for(let u=0;u<c.length;u+=1)I[u]=An(dn(n,c,u));const d=u=>m(I[u],1,1,()=>{I[u]=null});return{c(){z(t.$$.fragment),e=k(),i=O("span"),o=t1(a),l=k();for(let u=0;u<I.length;u+=1)I[u].c();s=b1(),g(i,"class","mr-2")},m(u,N){J(t,u,N),G(u,e,N),G(u,i,N),U(i,o),G(u,l,N);for(let E=0;E<I.length;E+=1)I[E].m(u,N);G(u,s,N),r=!0},p(u,N){const E={};if(N&33554433&&(E.$$scope={dirty:N,ctx:u}),t.$set(E),(!r||N&3)&&a!==(a=u[16].name[u[1]]+"")&&o1(o,a),N&3){c=u[16].teacher;let S;for(S=0;S<c.length;S+=1){const H=dn(u,c,S);I[S]?(I[S].p(H,N),T(I[S],1)):(I[S]=An(H),I[S].c(),T(I[S],1),I[S].m(s.parentNode,s))}for(u1(),S=c.length;S<I.length;S+=1)d(S);S1()}},i(u){if(!r){T(t.$$.fragment,u);for(let N=0;N<c.length;N+=1)T(I[N]);r=!0}},o(u){m(t.$$.fragment,u),I=I.filter(Boolean);for(let N=0;N<I.length;N+=1)m(I[N]);r=!1},d(u){w(t,u),u&&R(e),u&&R(i),u&&R(l),_1(I,u),u&&R(s)}}}function Cn(n){let t,e,i,a,o,l;function s(){return n[7](n[16],n[18],n[19])}return e=new x1({props:{kind:"ghost",size:"small",icon:Jn,tooltipPosition:"right",iconDescription:"Remove"}}),e.$on("click",s),a=new Ze({props:{class:"flex-1",$$slots:{title:[Il],default:[sl]},$$scope:{ctx:n}}}),{c(){t=O("div"),z(e.$$.fragment),i=k(),z(a.$$.fragment),o=k(),g(t,"class","flex")},m(r,c){G(r,t,c),J(e,t,null),U(t,i),J(a,t,null),U(t,o),l=!0},p(r,c){n=r;const I={};c&33554435&&(I.$$scope={dirty:c,ctx:n}),a.$set(I)},i(r){l||(T(e.$$.fragment,r),T(a.$$.fragment,r),l=!0)},o(r){m(e.$$.fragment,r),m(a.$$.fragment,r),l=!1},d(r){r&&R(t),w(e),w(a)}}}function Bl(n){let t,e,i,a=n[0].length==0&&un(),o=n[0],l=[];for(let r=0;r<o.length;r+=1)l[r]=Cn(Bn(n,o,r));const s=r=>m(l[r],1,1,()=>{l[r]=null});return{c(){a&&a.c(),t=k();for(let r=0;r<l.length;r+=1)l[r].c();e=b1()},m(r,c){a&&a.m(r,c),G(r,t,c);for(let I=0;I<l.length;I+=1)l[I].m(r,c);G(r,e,c),i=!0},p(r,c){if(r[0].length==0?a||(a=un(),a.c(),a.m(t.parentNode,t)):a&&(a.d(1),a=null),c&3){o=r[0];let I;for(I=0;I<o.length;I+=1){const d=Bn(r,o,I);l[I]?(l[I].p(d,c),T(l[I],1)):(l[I]=Cn(d),l[I].c(),T(l[I],1),l[I].m(e.parentNode,e))}for(u1(),I=o.length;I<l.length;I+=1)s(I);S1()}},i(r){if(!i){for(let c=0;c<o.length;c+=1)T(l[c]);i=!0}},o(r){l=l.filter(Boolean);for(let c=0;c<l.length;c+=1)m(l[c]);i=!1},d(r){a&&a.d(r),r&&R(t),_1(l,r),r&&R(e)}}}function El(n){let t,e;return t=new Oe({props:{$$slots:{default:[Bl]},$$scope:{ctx:n}}}),{c(){z(t.$$.fragment)},m(i,a){J(t,i,a),e=!0},p(i,a){const o={};a&33554435&&(o.$$scope={dirty:a,ctx:i}),t.$set(o)},i(i){e||(T(t.$$.fragment,i),e=!0)},o(i){m(t.$$.fragment,i),e=!1},d(i){w(t,i)}}}function dl(n){let t;return{c(){t=O("div"),g(t,"class","col-span-full h-1")},m(e,i){G(e,t,i)},d(e){e&&R(t)}}}function Mn(n){let t;return{c(){t=O("br")},m(e,i){G(e,t,i)},d(e){e&&R(t)}}}function Tn(n){let t,e=n[16].name[n[1]]+"",i,a,o,l=n[13].length>1&&n[15]!=n[13].length-1&&Mn();return{c(){t=O("span"),i=t1(e),a=k(),l&&l.c(),o=b1(),g(t,"class","font-mono text-0.75rem block")},m(s,r){G(s,t,r),U(t,i),G(s,a,r),l&&l.m(s,r),G(s,o,r)},p(s,r){r&6&&e!==(e=s[16].name[s[1]]+"")&&o1(i,e),s[13].length>1&&s[15]!=s[13].length-1?l||(l=Mn(),l.c(),l.m(o.parentNode,o)):l&&(l.d(1),l=null)},d(s){s&&R(t),s&&R(a),l&&l.d(s),s&&R(o)}}}function ul(n){let t,e=n[13],i=[];for(let a=0;a<e.length;a+=1)i[a]=Tn(In(n,e,a));return{c(){for(let a=0;a<i.length;a+=1)i[a].c();t=k()},m(a,o){for(let l=0;l<i.length;l+=1)i[l].m(a,o);G(a,t,o)},p(a,o){if(o&6){e=a[13];let l;for(l=0;l<e.length;l+=1){const s=In(a,e,l);i[l]?i[l].p(s,o):(i[l]=Tn(s),i[l].c(),i[l].m(t.parentNode,t))}for(;l<i.length;l+=1)i[l].d(1);i.length=e.length}},d(a){_1(i,a),a&&R(t)}}}function fn(n){let t=[4,5,9,10].map(Ml).includes(n[15]),e,i,a,o=t&&dl();return i=new H2({props:{light:!0,class:"!min-w-0 px-0 py-2",$$slots:{default:[ul]},$$scope:{ctx:n}}}),{c(){o&&o.c(),e=k(),z(i.$$.fragment)},m(l,s){o&&o.m(l,s),G(l,e,s),J(i,l,s),a=!0},p(l,s){const r={};s&33554438&&(r.$$scope={dirty:s,ctx:l}),i.$set(r)},i(l){a||(T(i.$$.fragment,l),a=!0)},o(l){m(i.$$.fragment,l),a=!1},d(l){o&&o.d(l),l&&R(e),w(i,l)}}}function Sl(n){let t,e,i=Object.entries(n[2]),a=[];for(let l=0;l<i.length;l+=1)a[l]=fn(Nn(n,i,l));const o=l=>m(a[l],1,1,()=>{a[l]=null});return{c(){t=O("div");for(let l=0;l<a.length;l+=1)a[l].c();g(t,"class","max-h-85vh grid grid-cols-6 gap-1")},m(l,s){G(l,t,s);for(let r=0;r<a.length;r+=1)a[r].m(t,null);e=!0},p(l,s){if(s&6){i=Object.entries(l[2]);let r;for(r=0;r<i.length;r+=1){const c=Nn(l,i,r);a[r]?(a[r].p(c,s),T(a[r],1)):(a[r]=fn(c),a[r].c(),T(a[r],1),a[r].m(t,null))}for(u1(),r=i.length;r<a.length;r+=1)o(r);S1()}},i(l){if(!e){for(let s=0;s<i.length;s+=1)T(a[s]);e=!0}},o(l){a=a.filter(Boolean);for(let s=0;s<a.length;s+=1)m(a[s]);e=!1},d(l){l&&R(t),_1(a,l)}}}function Hl(n){let t,e,i,a;return t=new y0({props:{class:"overflow-auto",$$slots:{default:[El]},$$scope:{ctx:n}}}),i=new y0({props:{class:"overflow-auto",$$slots:{default:[Sl]},$$scope:{ctx:n}}}),{c(){z(t.$$.fragment),e=k(),z(i.$$.fragment)},m(o,l){J(t,o,l),G(o,e,l),J(i,o,l),a=!0},p(o,l){const s={};l&33554435&&(s.$$scope={dirty:l,ctx:o}),t.$set(s);const r={};l&33554438&&(r.$$scope={dirty:l,ctx:o}),i.$set(r)},i(o){a||(T(t.$$.fragment,o),T(i.$$.fragment,o),a=!0)},o(o){m(t.$$.fragment,o),m(i.$$.fragment,o),a=!1},d(o){w(t,o),o&&R(e),w(i,o)}}}function Al(n){let t,e,i,a,o;t=new Yi({props:{class:"sticky"}});function l(r){n[8](r)}let s={$$slots:{content:[Hl],default:[al]},$$scope:{ctx:n}};return n[4]!==void 0&&(s.selected=n[4]),i=new ga({props:s}),I1.push(()=>T1(i,"selected",l,n[4])),{c(){z(t.$$.fragment),e=k(),z(i.$$.fragment)},m(r,c){J(t,r,c),G(r,e,c),J(i,r,c),o=!0},p(r,c){const I={};c&33554471&&(I.$$scope={dirty:c,ctx:r}),!a&&c&16&&(a=!0,I.selected=r[4],M1(()=>a=!1)),i.$set(I)},i(r){o||(T(t.$$.fragment,r),T(i.$$.fragment,r),o=!0)},o(r){m(t.$$.fragment,r),m(i.$$.fragment,r),o=!1},d(r){w(t,r),r&&R(e),w(i,r)}}}function Cl(n){let t,e,i,a,o;t=new x1({props:{kind:"tertiary",$$slots:{default:[nl]},$$scope:{ctx:n}}}),t.$on("click",n[6]);function l(r){n[9](r)}let s={selectorPrimaryFocus:null,size:n[4]?"lg":"",$$slots:{default:[Al]},$$scope:{ctx:n}};return n[3]!==void 0&&(s.open=n[3]),i=new Fi({props:s}),I1.push(()=>T1(i,"open",l,n[3])),{c(){z(t.$$.fragment),e=k(),z(i.$$.fragment)},m(r,c){J(t,r,c),G(r,e,c),J(i,r,c),o=!0},p(r,[c]){const I={};c&33554433&&(I.$$scope={dirty:c,ctx:r}),t.$set(I);const d={};c&16&&(d.size=r[4]?"lg":""),c&33554487&&(d.$$scope={dirty:c,ctx:r}),!a&&c&8&&(a=!0,d.open=r[3],M1(()=>a=!1)),i.$set(d)},i(r){o||(T(t.$$.fragment,r),T(i.$$.fragment,r),o=!0)},o(r){m(t.$$.fragment,r),m(i.$$.fragment,r),o=!1},d(r){w(t,r),r&&R(e),w(i,r)}}}const Ml=n=>n*6;function Tl(n,t,e){let i,a=!1,o=0;const l=["M","T","W","R","F","S"],s=["1","2","3","4","n","5","6","7","8","9","a","b","c"];let r={};s.flatMap(S=>l.map(H=>H+S)).forEach(S=>e(2,r[S]=[],r));let{selected:c,lang:I}=t;const d=()=>e(3,a=!0),u=(S,H,A)=>{e(0,H[A].selected=!1,c)};function N(S){o=S,e(4,o)}function E(S){a=S,e(3,a)}return n.$$set=S=>{"selected"in S&&e(0,c=S.selected),"lang"in S&&e(1,I=S.lang)},n.$$.update=()=>{n.$$.dirty&1&&e(5,i=c.map(S=>parseInt(S.credit)).reduce((S,H)=>S+H,0)),n.$$.dirty&5&&(s.flatMap(S=>l.map(H=>H+S)).forEach(S=>e(2,r[S]=[],r)),c.forEach(S=>S.time?S.time.forEach(H=>e(2,r[H]=[...r[H],S],r)):null))},[c,I,r,a,o,i,d,u,N,E]}class fl extends E1{constructor(t){super(),B1(this,t,Tl,Cl,N1,{selected:0,lang:1})}}const Rl=[{科號:"11120AES 370100",課程中文名稱:"環境科學與工程",課程英文名稱:"Environmental Science and Engineering",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"環境科技學程(第二專長)，不列入分環所畢業學分",停開註記:"",教室與上課時間:`BMES醫環501	R7R8R9
`,授課教師:`吳劍侯	WU, CHIEN-HOU
`,擋修說明:"",課程限制說明:"",第一二專長對應:"環境科技學程(第二專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"分環所111M  選修	醫環系111M  選修	原科院學士班109B  選修	"},{科號:"11120AES 510000",課程中文名稱:"專題演講",課程英文名稱:"Colloquium",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`BMES醫環401	W7W8
`,授課教師:`楊樹森	YANG, SHU-SEN
`,擋修說明:"",課程限制說明:"限分環所,環境博士學程",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"分環所111M  必修	環境博士學程111D  必修	"},{科號:"11120AES 510100",課程中文名稱:"碩士班專題研究",課程英文名稱:"MS Graduate Research",學分數:"1",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"指導教授限分環所教師、碩一不可選",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"限分環所碩士班2年級3年級4年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"分環所111M  必修	"},{科號:"11120AES 511100",課程中文名稱:"書報討論",課程英文名稱:"Seminar",學分數:"1",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`BMES醫環717	W5W6
`,授課教師:`楊樹森	YANG, SHU-SEN
`,擋修說明:"",課程限制說明:"限分環所1年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"分環所111M  必修	"},{科號:"11120AES 520200",課程中文名稱:"綠色科技",課程英文名稱:"Green technology",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`BMES醫環717	R5R6R7
`,授課教師:`周子勤	CHOU, TSU-CHIN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"環境科技學程(第二專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"分環所111M  必修	原科院學士班108B  選修	"},{科號:"11120AES 520500",課程中文名稱:"環境生物技術",課程英文名稱:"Environmental Biotechnology",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`BMES醫環717	W2W3W4
`,授課教師:`周秀專	CHOU, HSIU-CHUAN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"環境科技學程(第二專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"分環所111M  必修	原科院學士班108B  選修	"},{科號:"11120AES 530100",課程中文名稱:"空氣品質量測",課程英文名稱:"Air quality characterization",學分數:"3",人限:"15",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`BMES醫環501	WaWbWc
`,授課教師:`林采吟	LIN, TSAI-YIN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"環境科技學程(第二專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"分環所111M  選修	原科院學士班109B  選修	"},{科號:"11120AES 540300",課程中文名稱:"生物分析技術",課程英文名稱:"Bioanalytical Chemistry",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`BMES醫環501	T2T3T4
`,授課教師:`黃郁棻	HUANG, YU-FEN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"環境科技學程(第二專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"分環所111M  選修	原科院學士班108B  選修	"},{科號:"11120AES 560300",課程中文名稱:"當代環境醫學特論二",課程英文名稱:"Specific Topic for Contemporary Environmental Medicine (II)",學分數:"1",人限:"0",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"需與老師討論後加簽選課",停開註記:"",教室與上課時間:`BMES醫環419	M2
`,授課教師:`周秀專	CHOU, HSIU-CHUAN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"分環所111M  選修	"},{科號:"11120AES 570300",課程中文名稱:"汙染生態學",課程英文名稱:"Pollution Ecology",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`BMES醫環717	T5T6T7
`,授課教師:`楊樹森	YANG, SHU-SEN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"分環所111M  選修	原科院學士班108B  選修	"},{科號:"11120AES 570400",課程中文名稱:"環境奈米與水處理",課程英文名稱:"Environmental Nanotechnology for Water Treatment",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"面授＋同步遠距教學",停開註記:"",教室與上課時間:`BMES醫環501	M2M3M4
`,授課教師:`董瑞安	DOONG, RUEY-AN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)奈米科技學分學程",不可加簽說明:"",必選修說明:"分環所111M  選修	"},{科號:"11120AES 580400",課程中文名稱:"觸媒技術",課程英文名稱:"Technology of Catalysis",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`BMES醫環717	R2R3R4
`,授課教師:`周子勤	CHOU, TSU-CHIN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"分環所111M  選修	"},{科號:"11120AES 610000",課程中文名稱:"論文研究",課程英文名稱:"Thesis",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限碩二以上修習",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"限分環所碩士班2年級3年級4年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"分環所111M  必修	"},{科號:"11120AES 611100",課程中文名稱:"專題書報討論",課程英文名稱:"Seminar",學分數:"1",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"需先修畢書報討論，限分環所碩二及環境科技博士生可選。(面授＋同步＋非同步)",停開註記:"",教室與上課時間:`BMES醫環501	W5W6
`,授課教師:`董瑞安	DOONG, RUEY-AN
`,擋修說明:"",課程限制說明:"限分環所,環境博士學程",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"分環所111M  必修	環境博士學程111D  必修	"},{科號:"11120AIIM500100",課程中文名稱:"產學實務專題二",課程英文名稱:"Special Topics on Industrial Practice II",學分數:"2",人限:"6",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程由專班主任開設，指導教授評定成績",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"限AI智造暨聯網產碩專班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"AI智造暨聯網產碩專班111M  必修	"},{科號:"11120AMEV500100",課程中文名稱:"產學實務專題二",課程英文名稱:"Special Topics on Industrial Practice II",學分數:"2",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"由專班主任開設，指導教授評分。",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"限電動載具先進製造產碩專班碩士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"電動載具先進製造產碩專班111M  必修	"},{科號:"11120ANTH500000",課程中文名稱:"論文研究",課程英文名稱:"Thesis",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限人類所碩三以上修習",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"排除人類所碩士班1年級2年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"人類所111M  必修	"},{科號:"11120ANTH652300",課程中文名稱:"經濟人類學",課程英文名稱:"Anthropology of Economics",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"16週課程",停開註記:"",教室與上課時間:`HSS人社C303	M6M7M8
`,授課教師:`方怡潔	FANG, I-CHIEH
`,擋修說明:"",課程限制說明:"限碩士班博士班專班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"人類所111D  選修	人類所111M  選修	台研教在職學位班111P  選修	亞際文化碩士學程111M  選修	"},{科號:"11120ANTH653500",課程中文名稱:"中國少數民族",課程英文名稱:"Ethnic Minorities in China",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`HSS人社C304	M2M3M4
`,授課教師:`黃樹民	HUANG, SHU-MIN
劉紹華	LIU, SHAO-HUA
`,擋修說明:"",課程限制說明:"限碩士班博士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"人類所111D  選修	人類所111M  選修	"},{科號:"11120ANTH654200",課程中文名稱:"人類學方法論",課程英文名稱:"Anthropological Methodology",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"IACS論文研究方法多選一，選課前需先經授課老師同意16週課程",停開註記:"",教室與上課時間:`HSS人社C304	T6T7T8
`,授課教師:`林浩立	LIN, HAO-LI
`,擋修說明:"",課程限制說明:"限碩士班博士班專班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"人類所111D  選修	人類所111M  必修	台研教在職學位班111P  選修	亞際文化碩士學程111M  選修	"},{科號:"11120ANTH670700",課程中文名稱:"都市人類學",課程英文名稱:"Urban Anthropology",學分數:"3",人限:"8",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"16週課程",停開註記:"",教室與上課時間:`HSS人社C304	R2R3R4
`,授課教師:`許&#28702;文	CHING-WEN HSU
`,擋修說明:"",課程限制說明:"限碩士班博士班專班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"人類所111D  選修	人類所111M  選修	台研教在職學位班111P  選修	"},{科號:"11120ANTH673900",課程中文名稱:"儀式與展演",課程英文名稱:"Ritual and Performance--Anthropological Perspectives",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"16週課程",停開註記:"",教室與上課時間:`HSS人社C304	T2T3T4
`,授課教師:`呂玫鍰	LU, MEI-HUAN
`,擋修說明:"",課程限制說明:"排除大學部1年級2年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"人類所111D  選修	人類所111M  選修	台研教在職學位班111P  選修	亞際文化碩士學程111M  選修	"},{科號:"11120ANTH676600",課程中文名稱:"想像人類學",課程英文名稱:"Anthropology of Imaginary",學分數:"3",人限:"12",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"16週課程",停開註記:"",教室與上課時間:`HSS人社C304	F6F7F8
`,授課教師:`李威宜	LEE, WEI-I
`,擋修說明:"",課程限制說明:"排除大學部1年級2年級3年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"人類所111D  選修	人類所111M  選修	台研教在職學位班111P  選修	亞際文化碩士學程111M  選修	"},{科號:"11120ANTH676700",課程中文名稱:"考古學方法論",課程英文名稱:"Archaeological Methodology",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"須修過考古學導論或相關課程",停開註記:"",教室與上課時間:`HSS人社C303	W2W3W4
`,授課教師:`邱鴻霖	CHIU, HUNG-LIN
`,擋修說明:"",課程限制說明:"限碩士班博士班專班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"人類所111D  選修	人類所111M  必修	台研教在職學位班111P  選修	"},{科號:"11120ANTH677500",課程中文名稱:"當代人類學理論",課程英文名稱:"Contemporary Anthropological Theory",學分數:"3",人限:"10",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"支援南島英語碩士學程、16週課程",停開註記:"",教室與上課時間:`HSS人社C304	W2W3W4
`,授課教師:`高進榮	GALIPEAU, BRENDAN ARTHUR
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)世界南島暨原住民族學分學程",不可加簽說明:"",必選修說明:"人類所111D  必修	人類所111M  選修	台研教在職學位班111P  選修	"},{科號:"11120ANTH678000",課程中文名稱:"公眾考古學",課程英文名稱:"Public Archaeology",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"16週課程",停開註記:"",教室與上課時間:`HSS人社C304	TaTbTc
`,授課教師:`謝艾倫	ELLEN HSIEH
`,擋修說明:"",課程限制說明:"排除大學部1年級2年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"人類所111D  選修	人類所111M  選修	台研教在職學位班111P  選修	"},{科號:"11120ANTH679000",課程中文名稱:"台灣南島研究",課程英文名稱:"Austronesian Taiwan",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"支援南島英語碩士學程,16週課程",停開註記:"",教室與上課時間:`HSS人社C304	R6R7R8
`,授課教師:`顧坤惠	KU, KUN-HUI
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)世界南島暨原住民族學分學程",不可加簽說明:"",必選修說明:"人類所111D  選修	人類所111M  必修	台研教在職學位班111P  選修	"},{科號:"11120ANTH679800",課程中文名稱:"聚落及景觀考古學",課程英文名稱:"Settlement and Landscape Archaeology",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"開放大三大四且修過考古學導論者選修",停開註記:"",教室與上課時間:`HSS人社C304	M6M7M8
`,授課教師:`臧振華	TSANG, CHENG-HWA
`,擋修說明:"",課程限制說明:"排除大學部1年級2年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"人類所111D  選修	人類所111M  選修	台研教在職學位班111P  選修	"},{科號:"11120ANTH679900",課程中文名稱:"人類學與親密: 情感和行為",課程英文名稱:"Anthropology and the Intimate: Studies in Emotion and Action",學分數:"3",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"支援性別學程,南島英語碩士學程,16週課程",停開註記:"",教室與上課時間:`HSS人社C304	F2F3F4
`,授課教師:`賴婉琪	LAI, YUEN-KI
`,擋修說明:"",課程限制說明:"排除大學部1年級2年級3年級",第一二專長對應:"",學分學程對應:"(跨領域)性別研究學分學程/(跨領域)世界南島暨原住民族學分學程",不可加簽說明:"",必選修說明:"人類所111D  選修	人類所111M  選修	台研教在職學位班111P  選修	人社院學士班108BA 選修	人社院學士班108BB 選修	"},{科號:"11120ANTH800000",課程中文名稱:"論文研究",課程英文名稱:"Thesis",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限博三以上修習",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"排除博士班1年級2年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"人類所111D  必修	"},{科號:"11120ASTR500100",課程中文名稱:"專題研究--天文教學二",課程英文名稱:"Special Topic on Teaching Astronomy (II)",學分數:"1",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"天文所111D  選修	天文所111M  選修	"},{科號:"11120ASTR510000",課程中文名稱:"恒星天文物理學",課程英文名稱:"Stellar Astrophysics",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`GEN II綜二521	W6W7W8
`,授課教師:`潘國全	PAN, KUO-CHUAN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"天文所111D  必修	天文所111M  必修	"},{科號:"11120ASTR550000",課程中文名稱:"恆星形成",課程英文名稱:"star formation",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`GEN II綜二501	R6R7R8
`,授課教師:`何英宏	Daniel Harsono
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"天文所111D  選修	天文所111M  選修	"},{科號:"11120ASTR592000",課程中文名稱:"專題演講二",課程英文名稱:"Colloquium (II)",學分數:"1",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"",停開註記:"",教室與上課時間:`PHYS物  124	F6F7
`,授課教師:`何英宏	Daniel Harsono
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"天文所111D  必修	天文所111M  必修	"},{科號:"11120ASTR600800",課程中文名稱:"天文物理的前沿二",課程英文名稱:"Frontier of Astrophysics Seminars II",學分數:"1",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`GEN II綜二501	TnWnRn
`,授課教師:`後藤友嗣	GOTO, TOMOTSUGU
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"天文所111D  選修	天文所111M  選修	"},{科號:"11120ASTR620000",課程中文名稱:"天文輻射物理",課程英文名稱:"Astrophysical Radiative Processes",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`GEN II綜二521	M6M7M8
`,授課教師:`張祥光	CHANG, HSIANG-KUANG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"天文所111D  必修	天文所111M  必修	"},{科號:"11120ASTR630000",課程中文名稱:"電波天文學",課程英文名稱:"Radio Astronomy",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`GEN II綜二521	T6T7T8
`,授課教師:`陳惠茹	CHEN, HUEI-RU
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"天文所111D  選修	天文所111M  選修	"},{科號:"11120ASTR640000",課程中文名稱:"宇宙論",課程英文名稱:"Cosmology",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`GEN II綜二501	T6T7T8
`,授課教師:`後藤友嗣	GOTO, TOMOTSUGU
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"天文所111D  選修	天文所111M  選修	"},{科號:"11120ASTR692000",課程中文名稱:"論文研究",課程英文名稱:"Thesis",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限碩二以上修習",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"排除天文所碩士班1年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"天文所111M  必修	"},{科號:"11120ASTR992000",課程中文名稱:"論文研究",課程英文名稱:"Thesis",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限博二以上修習",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"排除博士班1年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"天文所111D  必修	"},{科號:"11120BAI 700400",課程中文名稱:"科學",課程英文名稱:"Science",學分數:"3",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"本課程為 16 週課程。",停開註記:"",教室與上課時間:`GEN II綜二205	T6T7T8
`,授課教師:`楊立威	YANG, LEE-WEI
`,擋修說明:"",課程限制說明:"電資院,工學院,生科院,原科院,智慧生醫博士學程,跨院國際博士,精準醫療博士學程優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"智慧生醫博士學程111D  必修	"},{科號:"11120BAI 700500",課程中文名稱:"統計與機器學習概論二",課程英文名稱:"Introduction of Statistics and Machine Learning (II)",學分數:"3",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"本課程為 16 週課程。",停開註記:"",教室與上課時間:`GEN II綜二103	T2T3T4
`,授課教師:`楊立威	YANG, LEE-WEI
羅中泉	LO, CHUNG-CHUAN
`,擋修說明:"",課程限制說明:"電資院,工學院,生科院,原科院,智慧生醫博士學程,跨院國際博士,精準醫療博士學程優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"(跨領域)神經科學學分學程",不可加簽說明:"",必選修說明:"智慧生醫博士學程111D  必修	"},{科號:"11120BAI 700700",課程中文名稱:"實驗輪轉二",課程英文名稱:"Lab Rotation (II)",學分數:"1",人限:"3",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:"",授課教師:`未定	
`,擋修說明:"",課程限制說明:"限智慧生醫博士學程",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"智慧生醫博士學程111D  必修	"},{科號:"11120BME 400100",課程中文名稱:"專題研究",課程英文名稱:"Undergraduate Research",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程為 16 週課程",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"限大學部",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"醫工所111M  選修	"},{科號:"11120BME 500400",課程中文名稱:"書報討論",課程英文名稱:"Seminar",學分數:"1",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"1.本課程為 16 週課程 2.教室為清華實驗室R826-1",停開註記:"",教室與上課時間:`NTHU Lab清實826	W3W4
`,授課教師:`林幸瑩	LIN, HSING-YING
`,擋修說明:"",課程限制說明:"限醫工所",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"醫工所111D  必修	醫工所111M  必修	"},{科號:"11120BME 500500",課程中文名稱:"奈米材料化學",課程英文名稱:"Nanomaterial Chemistry",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"本課程為 16 週課程",停開註記:"",教室與上課時間:`NTHU Lab清實826	R6R7R8
`,授課教師:`萬德輝	WAN, DE-HUI
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)奈米與光電半導體產業學分學程/(跨領域)生物產業技術學分學程/(跨領域)奈米科技學分學程",不可加簽說明:"",必選修說明:"醫工所111M  選修	"},{科號:"11120BME 501200",課程中文名稱:"論文研究",課程英文名稱:"Thesis",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限醫工所碩二以上修習",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"排除醫工所碩士班1年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"醫工所111M  必修	"},{科號:"11120BME 501400",課程中文名稱:"癌症奈米科技",課程英文名稱:"Cancer Nanotechnology",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"1.限醫工所學生選修  2.修課者須先修過「癌症生物學與治療」3.本課程為16週課程",停開註記:"",教室與上課時間:`NTHU Lab清實319	RaRbRc
`,授課教師:`陳韻晶	CHEN, YUN-CHING
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>曾修癌症生物學與治療<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"限醫工所",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"醫工所111M  選修	"},{科號:"11120BME 501500",課程中文名稱:"生物醫學技術",課程英文名稱:"Techniques in Biology and Medicine",學分數:"3",人限:"24",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"本課程為 16 週課程",停開註記:"",教室與上課時間:`NTHU Lab清實826	M5M6M7
`,授課教師:`陳韻晶	CHEN, YUN-CHING
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)生物產業技術學分學程",不可加簽說明:"",必選修說明:"醫工所111M  選修	"},{科號:"11120BME 502000",課程中文名稱:"無機材料與工程",課程英文名稱:"Inorganic Materials and Engineering",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"1.修課者須先修過「奈米光學材料」2.本課程為16週課程",停開註記:"",教室與上課時間:`NTHU Lab清實826	T6T7T8
`,授課教師:`萬德輝	WAN, DE-HUI
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>曾修奈米光學材料<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"醫工所優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"醫工所111M  選修	"},{科號:"11120BME 503100",課程中文名稱:"重點照護檢驗",課程英文名稱:"Point-of-Care Diagnostics",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"本課程為 16 週課程",停開註記:"",教室與上課時間:`NTHU Lab清實319	W5W6W7
`,授課教師:`鄭兆&#29641;	CHENG, CHAO-MIN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"醫工所111M  選修	"},{科號:"11120BME 503200",課程中文名稱:"再生醫學與組織工程",課程英文名稱:"Regenerative medicine and tissue engineering",學分數:"3",人限:"28",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"本課程為 16 週課程",停開註記:"",教室與上課時間:`NTHU Lab清實826	T2T3T4
`,授課教師:`黃玠誠	HUANG, CHIEH-CHENG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)生物產業技術學分學程/(跨領域)醫學科技學分學程",不可加簽說明:"",必選修說明:"醫工所111M  選修	"},{科號:"11120BME 503400",課程中文名稱:"分子生醫影像導論",課程英文名稱:"Introduction to Molecular Imaging",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"本課程為 16 週課程",停開註記:"",教室與上課時間:`NTHU Lab清實826	M2M3M4
`,授課教師:`魯才德	LU, TSAI-TE
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"醫工所111M  選修	"},{科號:"11120BME 503500",課程中文名稱:"醫療器材進階法規實作練習",課程英文名稱:"Workshop Practice on Medical Device Regulations",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"1.修課者須先修過「醫療器材設計與開發實務」2.本課程為16週課程",停開註記:"",教室與上課時間:`GEN II綜二614	MaMbMc
`,授課教師:`王明哲	WANG, MING-CHE
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"醫工所111M  選修	"},{科號:"11120BME 504300",課程中文名稱:"磁性生醫材料",課程英文名稱:"Magnetic Biomaterial",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"1.修課者須先修過「金屬生物醫藥與生醫材料」2.本課程為16週課程",停開註記:"",教室與上課時間:`NTHU Lab清實319	M6M7M8
`,授課教師:`魯才德	LU, TSAI-TE
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>曾修金屬生物醫藥與生醫材料<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"醫工所111M  選修	"},{科號:"11120BME 504700",課程中文名稱:"生醫感測數值統計分析",課程英文名稱:"Biomedical sensing technology and statistical analysis",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"1.修課學生須先經過任課教師同意 2.本課程為16週課程  3.教室為清華實驗室R428-1",停開註記:"",教室與上課時間:`NTHU Lab清實4281	M5M6M7
`,授課教師:`林幸瑩	LIN, HSING-YING
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"醫工所111M  選修	"},{科號:"11120BME 505000",課程中文名稱:"細胞治療特論",課程英文名稱:"Special topics in cell therapy",學分數:"3",人限:"0",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"1.需與授課教師討論後加簽選課 2.本課程為16週課程",停開註記:"",教室與上課時間:`NTHU Lab清實826	F5F6F7
`,授課教師:`黃玠誠	HUANG, CHIEH-CHENG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"醫工所111M  選修	"},{科號:"11120BME 800100",課程中文名稱:"論文研究",課程英文名稱:"Thesis",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"限醫工所",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"醫工所111D  必修	"},{科號:"11120BMES112200",課程中文名稱:"生命科學導論",課程英文名稱:"Introduction to Life Science",學分數:"3",人限:"80",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`BMES醫環110	W7W8W9
`,授課教師:`莊淳宇	CHUANG, CHUN-YU
`,擋修說明:"",課程限制說明:"醫環系大學部,原科院學士班大學部優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"醫環系111B  必修	"},{科號:"11120BMES211200",課程中文名稱:"工程數學二",課程英文名稱:"Engineering Mathematics II",學分數:"3",人限:"85",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`BMES醫環110	T3T4R3
`,授課教師:`劉耕谷	LIU, KENG-KU
`,擋修說明:`<div>
  擋修對象 : 醫環系 <br>
  先修科目 : <BR><BR>工程數學一-成績需D以上<BR>應用數學一-成績需D以上<BR><br>上述條件任選一科，則不擋修。</div>`,課程限制說明:"醫環系大學部,原科院學士班大學部優先，第3次選課起開放全校修習",第一二專長對應:"生醫工程(第二專長)	生醫工程與環境科學(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"醫環系110B  必修	原科院學士班110B  必修	"},{科號:"11120BMES224200",課程中文名稱:"電磁學",課程英文名稱:"Electromagnetism",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"醫環系大學部,16週課程",停開註記:"",教室與上課時間:`BMES醫環401	T7T8R7
`,授課教師:`林曉均	Lin, Hsiao Chun
`,擋修說明:"",課程限制說明:"",第一二專長對應:"生醫工程(第二專長)	生醫工程與環境科學(第一專長)	醫學物理(第二專長)	動力機械工程(第二專長)	動力機械工程(第一專長)",學分學程對應:"(跨領域)光電學分學程",不可加簽說明:"",必選修說明:"醫環系110B  選修	"},{科號:"11120BMES225200",課程中文名稱:"有機化學二",課程英文名稱:"Organic Chemistry (II)",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程上150分鐘，其餘時間由教授視情形彈性運用",停開註記:"",教室與上課時間:`BMES醫環401	W3W4F3F4
`,授課教師:`俞鐘山	YU, CHUNG-SHAN
`,擋修說明:`<div>
  擋修對象 : 醫環系 <br>
  先修科目 : <BR><BR>有機化學一-成績需D以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"",第一二專長對應:"生醫工程(第二專長)	生醫工程與環境科學(第一專長)	化學工程(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"醫環系110B  選修	原科院學士班110B  選修	"},{科號:"11120BMES232200",課程中文名稱:"分析化學一",課程英文名稱:"Analytical Chemistry (I)",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`BMES醫環110	T5T6R5R6
`,授課教師:`李亦淇	LEE, I-CHI
`,擋修說明:"",課程限制說明:"",第一二專長對應:"生醫工程與環境科學(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"醫環系110B  選修	原科院學士班110B  選修	"},{科號:"11120BMES240200",課程中文名稱:"計算機概論與程式語言",課程英文名稱:"Introduction to Computer Science and Programming Language",學分數:"3",人限:"21",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`BMES醫環110	W2W3W4
`,授課教師:`彭旭霞	PENG, HSU-HSIA
`,擋修說明:"",課程限制說明:"原科院優先，第3次選課起開放全校修習",第一二專長對應:"生醫工程(第二專長)	生醫工程與環境科學(第一專長)",學分學程對應:"(跨領域)人工智慧與應用進階學分學程/(跨領域)人工智慧與應用基礎學分學程/(跨領域)音樂科技與健康學分學程/(跨領域)神經科學學分學程",不可加簽說明:"",必選修說明:"醫環系110B  選修	"},{科號:"11120BMES318200",課程中文名稱:"專題研究二",課程英文名稱:"Undergraduate Research (II)",學分數:"1",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"指導教授限醫環系教師",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"醫環系109B  選修	"},{科號:"11120BMES323401",課程中文名稱:"生物與材料實驗",課程英文名稱:"Biology and Biomedical Materials Laboratory",學分數:"2",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`BMES醫環101	M5M6M7M8
`,授課教師:`莊淳宇	CHUANG, CHUN-YU
`,擋修說明:"",課程限制說明:"大學部3年級優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"醫環系109B  必修	"},{科號:"11120BMES323402",課程中文名稱:"生物與材料實驗",課程英文名稱:"Biology and Biomedical Materials Laboratory",學分數:"2",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`BMES醫環101	R5R6R7R8
`,授課教師:`劉耕谷	LIU, KENG-KU
`,擋修說明:"",課程限制說明:"大學部3年級優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"醫環系109B  必修	"},{科號:"11120BMES325100",課程中文名稱:"生理解剖學",課程英文名稱:"Human Anatomy and Physiology",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`BMES醫環301	W7W8W9
`,授課教師:`柯美蘭	KO, MEI-LAN
`,擋修說明:"",課程限制說明:"醫環系優先，第3次選課起開放全校修習",第一二專長對應:"生醫工程(第二專長)	醫學物理(第二專長)",學分學程對應:"(跨領域)醫學科技學分學程",不可加簽說明:"",必選修說明:"醫環系109B  必修	"},{科號:"11120BMES325300",課程中文名稱:"光學",課程英文名稱:"Optics",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`BMES醫環101	W3W4F3
`,授課教師:`陳之碩	CHEN, CHI-SHUO
`,擋修說明:"",課程限制說明:"醫環系優先，第3次選課起開放全校修習",第一二專長對應:"生醫工程(第二專長)	生醫工程與環境科學(第一專長)",學分學程對應:"(跨領域)光電學分學程",不可加簽說明:"",必選修說明:"醫環系109B  選修	"},{科號:"11120BMES326200",課程中文名稱:"生物化學二",課程英文名稱:"Biochemistry II",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"16週彈性課程",停開註記:"",教室與上課時間:`BMES醫環618	T3T4R3
`,授課教師:`江&#21843;&#	CHIANG, CHI-SHIUN
`,擋修說明:`<div>
  擋修對象 : 醫環系 <br>
  先修科目 : <BR><BR>生物化學一-成績需D以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"",第一二專長對應:"生醫工程(第二專長)	生醫工程與環境科學(第一專長)	生命科學(第二專長)",學分學程對應:"(跨領域)生物產業技術學分學程/(跨領域)微系統科技整合學分學程",不可加簽說明:"",必選修說明:"醫環系109B  選修	原科院學士班109B  選修	"},{科號:"11120BMES337200",課程中文名稱:"物理化學二",課程英文名稱:"Physical Chemistry (II)",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`BMES醫環401	M3M4W1W2
`,授課教師:`吳劍侯	WU, CHIEN-HOU
`,擋修說明:`<div>
  擋修對象 : 醫環系 <br>
  先修科目 : <BR><BR>普通化學二-成績需D以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"",第一二專長對應:"生醫工程與環境科學(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"醫環系109B  選修	"},{科號:"11120BMES411200",課程中文名稱:"書報討論",課程英文名稱:"Seminar",學分數:"1",人限:"26",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`BMES醫環618	W6
`,授課教師:`朱麗安	CHU, LI-AN
`,擋修說明:"",課程限制說明:"醫環系大學部4年級優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"醫環系108B  必修	"},{科號:"11120BMES418200",課程中文名稱:"專題研究四",課程英文名稱:"Undergraduate Research (IV)",學分數:"1",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"指導教授限醫環系老師",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"醫環系108B  選修	"},{科號:"11120BMES424200",課程中文名稱:"分子遺傳學",課程英文名稱:"Molecular Genetics",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"生醫工程(第二專長)/生醫工程與環境科學(第一專長)",停開註記:"",教室與上課時間:`BMES醫環501	T7T8T9
`,授課教師:`張建文	CHANG, CHIEN-WEN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"生醫工程(第二專長)	生醫工程與環境科學(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"醫環系108B  選修	"},{科號:"11120BMES424400",課程中文名稱:"生醫高分子導論",課程英文名稱:"Introduction of Biomedical Polymer",學分數:"3",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`BMES醫環717	W7W8W9
`,授課教師:`胡尚秀	HU, SHANG-HSIU
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"醫環系108B  選修	"},{科號:"11120BMES432200",課程中文名稱:"全球暖化與環境衝擊",課程英文名稱:"Global Warming and Environmental Impact",學分數:"2",人限:"105",新生保留人數:"0",通識對象:"*1",通識類別:"自然科學領域 Elective GE course: Natural Sciences",授課語言:"中",備註:"16週彈性課程，不接受期中停修申請",停開註記:"",教室與上課時間:`BMES醫環120	R7R8
`,授課教師:`鍾堅	CHUNG, CHIEN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)能源科技與永續社會學分學程/(跨領域)永續發展與環境管理學分學程",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:"醫環系108B  選修	"},{科號:"11120BMES500000",課程中文名稱:"專題演講",課程英文名稱:"Colloquium",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限碩博班各組",停開註記:"",教室與上課時間:`BMES醫環120	W7W8
`,授課教師:`王廷瑋	WANG, TING-WEI
張建文	CHANG, CHIEN-WEN
`,擋修說明:"",課程限制說明:"限醫環系碩士班博士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"醫環系111D  必修	醫環系111DA 必修	醫環系111DB 必修	醫環系111M  必修	"},{科號:"11120BMES511201",課程中文名稱:"書報討論(一)-分子生醫工程與材料",課程英文名稱:"Seminar(I)：Molecular Biomedical Engineering and Materials",學分數:"1",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限醫環系碩一甲(分子生醫工程與材料組)、丙(應用化學組)",停開註記:"",教室與上課時間:`BMES醫環301	W5
`,授課教師:`張建文	CHANG, CHIEN-WEN
`,擋修說明:"",課程限制說明:"限醫環系碩士班1年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"醫環系111M  必修	"},{科號:"11120BMES511203",課程中文名稱:"書報討論(一)-生醫影像工程",課程英文名稱:"Seminar(I)：Biomedical Imaging Engineering",學分數:"1",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限醫環系碩一乙(醫學物理與工程組)",停開註記:"",教室與上課時間:`BMES醫環401	W5
`,授課教師:`王廷瑋	WANG, TING-WEI
`,擋修說明:"",課程限制說明:"限醫環系碩士班1年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"醫環系111M  必修	"},{科號:"11120BMES512200",課程中文名稱:"碩士班專題研究二",課程英文名稱:"MS Graduate Research (II)",學分數:"1",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"指導教授限醫環系教師",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"限醫環系碩士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"醫環系111M  必修	"},{科號:"11120BMES522100",課程中文名稱:"生醫光電基礎",課程英文名稱:"Fundamentals of Biophotonics",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`BMES醫環105	M2M3M4
`,授課教師:`陳之碩	CHEN, CHI-SHUO
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"醫環系111D  選修	醫環系111DA 選修	醫環系111DB 選修	醫環系111M  選修	"},{科號:"11120BMES525100",課程中文名稱:"藥物控制釋放",課程英文名稱:"Drug Controlled Release",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`BMES醫環501	W2W3W4
`,授課教師:`邱信程	CHIU, HSIN-CHENG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)生物產業技術學分學程",不可加簽說明:"",必選修說明:"醫環系111D  選修	醫環系111DA 選修	醫環系111DB 選修	醫環系111M  選修	"},{科號:"11120BMES526600",課程中文名稱:"生醫高分子應用",課程英文名稱:"Polymer for Bio-Applications",學分數:"3",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`BMES醫環717	F2F3F4
`,授課教師:`胡尚秀	HU, SHANG-HSIU
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"醫環系111D  選修	醫環系111DA 選修	醫環系111DB 選修	醫環系111M  選修	"},{科號:"11120BMES527400",課程中文名稱:"生醫流行病與環境毒理學",課程英文名稱:"Biomedical Epidemiology and Environmental Toxicology",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`BMES醫環419	W2W3W4
`,授課教師:`莊淳宇	CHUANG, CHUN-YU
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"醫環系111D  選修	醫環系111DA 選修	醫環系111DB 選修	醫環系111M  選修	原科院學士班108B  選修	"},{科號:"11120BMES528400",課程中文名稱:"分子影像藥物",課程英文名稱:"Molecular Imaging Pharmaceuticals",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`BMES醫環110	M7M8M9
`,授課教師:`張智偉	CHANG, CHIH-WEI
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)醫學物理學分學程",不可加簽說明:"",必選修說明:"醫環系111D  選修	醫環系111DA 選修	醫環系111DB 選修	醫環系111M  選修	核工所111D  選修	核工所111M  選修	"},{科號:"11120BMES531600",課程中文名稱:"生醫電學",課程英文名稱:"Biomedical Electronics",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`BMES醫環419	T2T3T4
`,授課教師:`王廷瑋	WANG, TING-WEI
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"醫環系111D  選修	醫環系111DA 選修	醫環系111DB 選修	醫環系111M  選修	"},{科號:"11120BMES532400",課程中文名稱:"醫學影像實務",課程英文名稱:"Medical Imaging in Practice",學分數:"3",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"面授＋同步",停開註記:"",教室與上課時間:`BMES醫環618	F2F3F4
`,授課教師:`阮春榮	JUAN, CHUN-JUNG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)醫學物理學分學程",不可加簽說明:"",必選修說明:"醫環系111D  選修	醫環系111DA 選修	醫環系111DB 選修	醫環系111M  選修	"},{科號:"11120BMES542400",課程中文名稱:"幹細胞與組織工程",課程英文名稱:"Stem Cell and Tissue Engineering",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`BMES醫環105	R2R3R4
`,授課教師:`張建文	CHANG, CHIEN-WEN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"醫環系111D  選修	醫環系111DA 選修	醫環系111DB 選修	醫環系111M  選修	"},{科號:"11120BMES546600",課程中文名稱:"數位生物醫學顯微影像技術",課程英文名稱:"Digital biomedical microscopy technology",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`BMES醫環419	T5T6T7
`,授課教師:`朱麗安	CHU, LI-AN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"醫環系111D  選修	醫環系111DA 選修	醫環系111DB 選修	醫環系111M  選修	"},{科號:"11120BMES547500",課程中文名稱:"深度學習之生醫影像分析",課程英文名稱:"Deep Learning in Biomedical Image Analysis",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`BMES醫環301	W2W3W4
`,授課教師:`許靖涵	HSU, CHING-HAN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)人工智慧與應用進階學分學程/(跨領域)人工智慧與應用基礎學分學程/(跨領域)神經科學學分學程/(跨領域)醫學物理學分學程",不可加簽說明:"",必選修說明:"醫環系111D  選修	醫環系111DA 選修	醫環系111DB 選修	醫環系111M  選修	核工所111D  選修	核工所111M  選修	"},{科號:"11120BMES610200",課程中文名稱:"論文研究",課程英文名稱:"Thesis",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限碩二以上修習",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"排除碩士班1年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"醫環系111M  必修	"},{科號:"11120BMES611201",課程中文名稱:"書報討論(二)-分子生醫工程與材料",課程英文名稱:"Seminar(II)：Molecular Biomedical Engineering and Materials",學分數:"1",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限醫環系碩二甲(分子生醫工程與材料組)",停開註記:"",教室與上課時間:`BMES醫環301	W6
`,授課教師:`張建文	CHANG, CHIEN-WEN
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>書報討論-分子生醫工程與材料-成績需B-以上<BR>書報討論(一)-分子生醫工程與材料-成績需B-以上<BR><br>上述條件任選一科，則不擋修。</div>`,課程限制說明:"限醫環系碩士班2年級3年級4年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"醫環系111M  必修	"},{科號:"11120BMES611203",課程中文名稱:"書報討論(二)-生醫影像工程",課程英文名稱:"Seminar(II)：Biomedical Imaging Engineering",學分數:"1",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限醫環系碩二乙(醫學物理與工程組)",停開註記:"",教室與上課時間:`BMES醫環401	W6
`,授課教師:`王廷瑋	WANG, TING-WEI
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>書報討論-生醫影像工程-成績需B-以上<BR>書報討論(一)-生醫影像工程-成績需B-以上<BR><br>上述條件任選一科，則不擋修。</div>`,課程限制說明:"限醫環系碩士班2年級3年級4年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"醫環系111M  必修	"},{科號:"11120BMES711200",課程中文名稱:"專題書報討論",課程英文名稱:"Seminar",學分數:"1",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限醫環系博班各組(博班必修)",停開註記:"",教室與上課時間:`BMES醫環110	W6
`,授課教師:`莊淳宇	CHUANG, CHUN-YU
`,擋修說明:"",課程限制說明:"限醫環系博士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"醫環系111D  必修	醫環系111DA 必修	醫環系111DB 必修	"},{科號:"11120BMES712200",課程中文名稱:"博士班專題研究二",課程英文名稱:"PhD Graduate Research (II)",學分數:"1",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"指導教授限醫環系教師",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"限博士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"醫環系111D  必修	醫環系111DA 必修	醫環系111DB 必修	"},{科號:"11120BMES810200",課程中文名稱:"論文研究",課程英文名稱:"Thesis",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限博二以上修習",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"排除博士班1年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"醫環系111D  必修	醫環系111DA 必修	醫環系111DB 必修	"},{科號:"11120CHE 114001",課程中文名稱:"質能均衡",課程英文名稱:"Material and Energy Balance",學分數:"3",人限:"35",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"本系同學依分組名單選課，外系(含院學士班)同學選課前先向化工系辦登記分組，再依分組結果選課。",停開註記:"",教室與上課時間:`CHE化工 210	W3W4F3
`,授課教師:`沈若樸	SHEN, CLAIRE-ROAPU
`,擋修說明:"",課程限制說明:"化工系大學部優先，第3次選課起開放全校修習",第一二專長對應:"化學工程(第二專長)	化學工程(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"化工系111B  必修	"},{科號:"11120CHE 114002",課程中文名稱:"質能均衡",課程英文名稱:"Material and Energy Balance",學分數:"3",人限:"35",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"本系同學依分組名單選課，外系(含院學士班)同學選課前先向化工系辦登記分組，再依分組結果選課。",停開註記:"",教室與上課時間:`CHE化工 209	W3W4F3
`,授課教師:`宋信文	SUNG, HSING-WEN
`,擋修說明:"",課程限制說明:"化工系大學部優先，第3次選課起開放全校修習",第一二專長對應:"化學工程(第二專長)	化學工程(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"化工系111B  必修	"},{科號:"11120CHE 212001",課程中文名稱:"工程數學二",課程英文名稱:"Engineering Mathematics II",學分數:"3",人限:"35",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`CHE化工 209	T3T4R3
`,授課教師:`呂世源	LU, SHIH-YUAN
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>工程數學一-成績需D以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"化工系大學部優先，第3次選課起開放全校修習",第一二專長對應:"化學工程(第一專長)	材料科學工程(第二專長)	材料科學工程(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"化工系110B  必修	"},{科號:"11120CHE 212002",課程中文名稱:"工程數學二",課程英文名稱:"Engineering Mathematics II",學分數:"3",人限:"35",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`CHE化工 210	T3T4R3
`,授課教師:`周鶴修	CHOU, HO-HSIU
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>工程數學一-成績需D以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"化工系大學部優先，第3次選課起開放全校修習",第一二專長對應:"化學工程(第一專長)	材料科學工程(第二專長)	材料科學工程(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"化工系110B  必修	"},{科號:"11120CHE 240100",課程中文名稱:"資訊系統應用",課程英文名稱:"Computer Systems & Applications",學分數:"3",人限:"67",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`CHE化工 B18	T7T8T9
`,授課教師:`林昆翰	LIN, KUN-HAN
`,擋修說明:"",課程限制說明:"限化工系大學部2年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"化工系110B  必修	"},{科號:"11120CHE 242001",課程中文名稱:"物理化學二",課程英文名稱:"Physical Chemistry (II)",學分數:"3",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"本課上150分鐘，其餘時間由教授視情形彈性運用。",停開註記:"",教室與上課時間:`CHE化工 212	M3M4W1W2
`,授課教師:`堀江正樹	MASAKI HORIE
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>曾修普通化學一<BR>曾修普通化學二<BR><br>上述條件一定要有，而且<br><BR>微積分一-成績需D以上<BR>曾修微積分二<BR>微積分Ａ一-成績需D以上<BR>微積分Ｂ一-成績需D以上<BR>曾修微積分Ｂ二<BR>微積分一(數學系)-成績需D以上<BR>曾修微積分二(數學系)<BR>曾修微積分Ａ二<BR>曾修微積分一(數學系)(基本科目免修測試)<BR>曾修微積分Ａ一(基本科目免修測試)<BR>曾修微積分Ｂ一(基本科目免修測試)<BR><br>上述條件任選一科，則不擋修。</div>`,課程限制說明:"化工系大學部優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"化工系110B  必修	"},{科號:"11120CHE 242002",課程中文名稱:"物理化學二",課程英文名稱:"Physical Chemistry (II)",學分數:"3",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"本課上150分鐘，其餘時間由教授視情形彈性運用。",停開註記:"",教室與上課時間:`CHE化工 211	M3M4W1W2
`,授課教師:`王潔	WANG, JANE
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>曾修普通化學一<BR>曾修普通化學二<BR><br>上述條件一定要有，而且<br><BR>微積分一-成績需D以上<BR>曾修微積分二<BR>微積分Ａ一-成績需D以上<BR>微積分Ｂ一-成績需D以上<BR>曾修微積分Ｂ二<BR>微積分一(數學系)-成績需D以上<BR>曾修微積分二(數學系)<BR>曾修微積分Ａ二<BR>曾修微積分一(數學系)(基本科目免修測試)<BR>曾修微積分Ａ一(基本科目免修測試)<BR>曾修微積分Ｂ一(基本科目免修測試)<BR><br>上述條件任選一科，則不擋修。</div>`,課程限制說明:"化工系大學部優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"化工系110B  必修	"},{科號:"11120CHE 305001",課程中文名稱:"程序控制",課程英文名稱:"Process Control",學分數:"3",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本系同學依分組名單選課，外系(含院學士班)同學選課前先向化工系辦登記分組，再依分組結果選課。",停開註記:"",教室與上課時間:`CHE化工 211	W3W4F3
`,授課教師:`鄭西顯	JANG, SHI-SHANG
`,擋修說明:`<div>
  擋修對象 : 化工系大學部 <br>
  先修科目 : <BR><BR>曾修資訊系統應用<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"化工系大學部優先，第3次選課起開放全校修習",第一二專長對應:"化學工程(第二專長)	化學工程(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"化工系109B  必修	"},{科號:"11120CHE 305002",課程中文名稱:"程序控制",課程英文名稱:"Process Control",學分數:"3",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"本系同學依分組名單選課，外系(含院學士班)同學選課前先向化工系辦登記分組，再依分組結果選課。",停開註記:"",教室與上課時間:`CHE化工 212	W3W4F3
`,授課教師:`林育正	YU-JENG LIN
`,擋修說明:`<div>
  擋修對象 : 化工系大學部 <br>
  先修科目 : <BR><BR>曾修資訊系統應用<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"化工系大學部優先，第3次選課起開放全校修習",第一二專長對應:"化學工程(第二專長)	化學工程(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"化工系109B  必修	"},{科號:"11120CHE 306001",課程中文名稱:"化工單操",課程英文名稱:"Chemical Engineering Unit Operations",學分數:"3",人限:"35",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`CHE化工 211	T1T2F2
`,授課教師:`汪上曉	WONG, SHANG-HSIAO
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>質能均衡-成績需C-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"化工系大學部優先，第3次選課起開放全校修習",第一二專長對應:"化學工程(第二專長)	化學工程(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"化工系109B  必修	"},{科號:"11120CHE 306002",課程中文名稱:"化工單操",課程英文名稱:"Chemical Engineering Unit Operations",學分數:"3",人限:"35",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`CHE化工 212	T1T2F2
`,授課教師:`林育正	YU-JENG LIN
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>質能均衡-成績需C-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"化工系大學部優先，第3次選課起開放全校修習",第一二專長對應:"化學工程(第二專長)	化學工程(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"化工系109B  必修	"},{科號:"11120CHE 353001",課程中文名稱:"輸送現象及單元操作二",課程英文名稱:"Transport Phenomena and Unit Operations(II)",學分數:"3",人限:"35",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"本系同學依分組名單選課，外系(含院學士班)同學選課前先向化工系辦登記分組，再依分組結果選課。",停開註記:"",教室與上課時間:`CHE化工 210	M3M4W1W2
`,授課教師:`黃振煌	HUANG, JEN-HUANG
`,擋修說明:`<div>
  擋修對象 : 大學部 <br>
  先修科目 : <BR><BR>輸送現象及單元操作一-成績需D以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"化工系大學部優先，第3次選課起開放全校修習",第一二專長對應:"化學工程(第二專長)	化學工程(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"化工系109B  必修	"},{科號:"11120CHE 353002",課程中文名稱:"輸送現象及單元操作二",課程英文名稱:"Transport Phenomena and Unit Operations(II)",學分數:"3",人限:"35",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本系同學依分組名單選課，外系(含院學士班)同學選課前先向化工系辦登記分組，再依分組結果選課。",停開註記:"",教室與上課時間:`CHE化工 209	M3M4W1W2
`,授課教師:`陳信龍	CHEN, HSIN-LUNG
`,擋修說明:`<div>
  擋修對象 : 大學部 <br>
  先修科目 : <BR><BR>輸送現象及單元操作一-成績需D以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"化工系大學部優先，第3次選課起開放全校修習",第一二專長對應:"化學工程(第二專長)	化學工程(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"化工系109B  必修	"},{科號:"11120CHE 373000",課程中文名稱:"基礎高分子科學",課程英文名稱:"Fundamental Polymer Science",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`CHE化工 421	R5R6R7
`,授課教師:`何榮銘	HO, RONG-MING
劉英麟	LIU, YING-LING
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"化工系109B  選修	"},{科號:"11120CHE 431200",課程中文名稱:"電子構裝技術與材料",課程英文名稱:"Electronic Packaging technology and materials",學分數:"2",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"F7的50分鐘由教授彈性運用",停開註記:"",教室與上課時間:`CHE化工 210	F5F6F7
`,授課教師:`陳信文	CHEN, SINN-WEN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"化工系108B  選修	"},{科號:"11120CHE 494000",課程中文名稱:"光電材料與元件基礎",課程英文名稱:"Fundamentals of Optoelectronic Materials and Devices",學分數:"2",人限:"65",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`CHE化工 210	M7M8
`,授課教師:`林昆翰	LIN, KUN-HAN
段興宇	TUAN, HSING-YU
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)先進能源研究生學分學程/(跨領域)光電學分學程",不可加簽說明:"",必選修說明:"化工系108B  選修	"},{科號:"11120CHE 495000",課程中文名稱:"專題研究一",課程英文名稱:"Research on special topics",學分數:"1",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"第一次選專題研究一，第二次選專題研究二。指導教授限本系專任/合聘教授。",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"限化工系大學部3年級4年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"化工系108B  選修	"},{科號:"11120CHE 496000",課程中文名稱:"專題研究二",課程英文名稱:"Undergraduate Research (II)",學分數:"1",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"第一次選專題研究一，第二次選專題研究二。指導教授限本系專任/合聘教授。",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"限化工系大學部4年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"化工系108B  選修	"},{科號:"11120CHE 500200",課程中文名稱:"分子工程二",課程英文名稱:"Molecular Engineering (II)",學分數:"3",人限:"25",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"分工學程學生必修，開放化工系或其他系所選修。",停開註記:"",教室與上課時間:`CHE化工 221	T6T7T8
`,授課教師:`周鶴修	CHOU, HO-HSIU
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)奈米與光電半導體產業學分學程/(跨領域)奈米科技學分學程",不可加簽說明:"",必選修說明:"化工系111M  選修	"},{科號:"11120CHE 505000",課程中文名稱:"高等輸送現象",課程英文名稱:"Advanced Transport Phenomena",學分數:"3",人限:"25",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`CHE化工220	M7M8M9
`,授課教師:`潘詠庭	PAN, YUNG-TIN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)先進能源研究生學分學程",不可加簽說明:"",必選修說明:"化工系111M  選修	"},{科號:"11120CHE 508000",課程中文名稱:"化工原理二",課程英文名稱:"Chemical Engineering Principles (II)",學分數:"3",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"碩甄乙組必修，非化工系背景之碩博士班必修",停開註記:"",教室與上課時間:`CHE化工 421	F2F3F4
`,授課教師:`楊東翰	YANG, TUNG-HAN
段興宇	TUAN, HSING-YU
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"化工系111M  選修	"},{科號:"11120CHE 510000",課程中文名稱:"書報討論",課程英文名稱:"Seminar",學分數:"1",人限:"160",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`CHE化工 B18	W7W8
`,授課教師:`蔡德豪	TSAI, DE-HAO
`,擋修說明:"",課程限制說明:"限化工系碩士班博士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"化工系111D  必修	化工系111M  必修	"},{科號:"11120CHE 512000",課程中文名稱:"電化學分析技術與應用",課程英文名稱:"Electrochemical Analytical Techniques and Applications",學分數:"3",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`CHE化工 210	T6T7T8
`,授課教師:`胡啟章	HU, CHI-CHANG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)先進能源研究生學分學程",不可加簽說明:"",必選修說明:"化工系111M  選修	半導體學院111D  選修	半導體學院111M  選修	"},{科號:"11120CHE 512100",課程中文名稱:"石油化學工業",課程英文名稱:"Petroleum Chemistry",學分數:"3",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`CHE化工 209	M7M8M9
`,授課教師:`谷家嵩	 
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"化工系111M  選修	"},{科號:"11120CHE 512500",課程中文名稱:"實驗設計與品質工程",課程英文名稱:"Experimental Design and Quality Engineering",學分數:"3",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`CHE化工 421	W2W3W4
`,授課教師:`胡啟章	HU, CHI-CHANG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"化工系111M  選修	"},{科號:"11120CHE 515200",課程中文名稱:"化學產品創意設計",課程英文名稱:"Creative Design and Development of Chemical Products",學分數:"2",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`CHE化工 210	M5M6
`,授課教師:`盧詩磊	 
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)創新創業學分學程/(跨領域)創新設計學分學程",不可加簽說明:"",必選修說明:"化工系111M  選修	"},{科號:"11120CHE 518000",課程中文名稱:"高分子生物材料",課程英文名稱:"Macromolecules as Biomaterials",學分數:"3",人限:"25",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`CHE化工 621	T2T3T4
`,授課教師:`王潔	WANG, JANE
`,擋修說明:"",課程限制說明:"排除大學部1年級2年級3年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"化工系111M  選修	"},{科號:"11120CHE 521000",課程中文名稱:"論文研究",課程英文名稱:"Thesis",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限碩二以上修習",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"排除化工系碩士班1年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"化工系111M  必修	"},{科號:"11120CHE 524000",課程中文名稱:"數據科學與決策科技",課程英文名稱:"Data Science and Decision Technology",學分數:"3",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`CHE化工 621	M3M4Mn
`,授課教師:`張良志	CHANG, LIANG-JYH
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"化工系111M  選修	"},{科號:"11120CHE 545200",課程中文名稱:"高分子分析技術",課程英文名稱:"Polymer Characterization",學分數:"3",人限:"15",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`CHE化工 216	W2W3W4
`,授課教師:`何榮銘	HO, RONG-MING
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"化工系111M  選修	"},{科號:"11120CHE 545500",課程中文名稱:"熱固性高分子特論",課程英文名稱:"Crosslinked and Thermosetting Polymers",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`CHE化工 621	W2W3W4
`,授課教師:`劉英麟	LIU, YING-LING
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"化工系111M  選修	"},{科號:"11120CHE 546500",課程中文名稱:"高等高分子物理",課程英文名稱:"Special Topics in Condensed Polymer Physics",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`CHE化工220	R2R3R4
`,授課教師:`陳信龍	CHEN, HSIN-LUNG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"化工系111M  選修	"},{科號:"11120CHE 549000",課程中文名稱:"高分子加工",課程英文名稱:"Polymer Processing",學分數:"3",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`CHE化工220	R6R7R8
`,授課教師:`張榮語	CHANG, RONG-YEU
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"化工系111M  選修	"},{科號:"11120CHE 555000",課程中文名稱:"膠體界面科學與科技特論",課程英文名稱:"Introduction to Colloid and Interface Science & Technology",學分數:"3",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`CHE化工 211	R6R7R8
`,授課教師:`蔡德豪	TSAI, DE-HAO
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"化工系111M  選修	"},{科號:"11120CHE 575000",課程中文名稱:"材料相平衡",課程英文名稱:"Phase Equilibria of Materials",學分數:"2",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`CHE化工220	M1M2
`,授課教師:`陳信文	CHEN, SINN-WEN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"化工系111M  選修	"},{科號:"11120CHE 576000",課程中文名稱:"金屬奈米材料",課程英文名稱:"Metal Nanomaterials",學分數:"3",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`CHE化工220	T2T3T4
`,授課教師:`楊東翰	YANG, TUNG-HAN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"化工系111M  選修	半導體學院111D  選修	半導體學院111M  選修	"},{科號:"11120CHE 582000",課程中文名稱:"電化學能源",課程英文名稱:"Electrochemical Energy Storage and Conversion",學分數:"2",人限:"60",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`CHE化工202	W5W6
`,授課教師:`衛子健	WEI, TZU-CHIEN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)先進能源研究生學分學程",不可加簽說明:"",必選修說明:"化工系111M  選修	"},{科號:"11120CHE 589000",課程中文名稱:"工業微生物學",課程英文名稱:"Industrial Microbiology",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`CHE化工 621	R2R3R4
`,授課教師:`朱一民	CHU, I-MIN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)生物產業技術學分學程",不可加簽說明:"",必選修說明:"化工系111M  選修	"},{科號:"11120CHE 590000",課程中文名稱:"分子生物技術",課程英文名稱:"Molecular Biotechnology",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`CHE化工 210	R6R7R8
`,授課教師:`胡育誠	HU, YU-CHEN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)生物產業技術學分學程/(跨領域)生物科技管理學分學程",不可加簽說明:"",必選修說明:"化工系111M  選修	"},{科號:"11120CHE 704000",課程中文名稱:"論文研究",課程英文名稱:"Thesis",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限博二以上修習",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"排除化工系博士班1年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"化工系111D  必修	"},{科號:"11120CHEM102001",課程中文名稱:"普通化學二",課程英文名稱:"General Chemistry (II)",學分數:"3",人限:"157",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"(含實中科學班)。此課程上4小時",停開註記:"",教室與上課時間:`MXIC旺宏懷樸	M3M4W1W2
`,授課教師:`洪嘉呈	HORNG, JIA-CHERNG
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>曾修普通化學一<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"【上學期原修普通化學一CHEM101001(廖文&#23791;老師)同學選課優先,第3次選課起開放】",第一二專長對應:"化學工程(第一專長)	化學(第一專長)	醫學科學(第一專長)	生命科學(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"化學系111B  必修	工學院學士班111B  必修	原科院學士班111B  選修	理學院學士班111B  必修	"},{科號:"11120CHEM102002",課程中文名稱:"普通化學二",課程英文名稱:"General Chemistry (II)",學分數:"3",人限:"158",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"此課程上150分鐘，50分鐘彈性時間",停開註記:"",教室與上課時間:`MXIC旺宏懷樸	W3W4F3F4
`,授課教師:`陳益佳	CHEN, I-CHIA
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>曾修普通化學一<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"【上學期原修普通化學一CHEM101002(洪嘉呈老師)同學選課優先,第3次選課起開放】",第一二專長對應:"化學工程(第一專長)	化學(第一專長)	醫學科學(第一專長)	生命科學(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"醫環系111B  必修	醫科系111B  必修	原科院學士班111B  選修	生科系111B  必修	生科院學士班111B  必修	"},{科號:"11120CHEM102003",課程中文名稱:"普通化學二",課程英文名稱:"General Chemistry (II)",學分數:"3",人限:"150",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程上4小時,",停開註記:"",教室與上課時間:`CHE化工 B18	M3M4W1W2
`,授課教師:`黃國柱	HWANG, KUO-CHU
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>曾修普通化學一<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"【上學期原修普通化學一CHEM101003(黃國柱老師)同學選課優先,第3次選課起開放】",第一二專長對應:"化學工程(第一專長)	化學(第一專長)	醫學科學(第一專長)	生命科學(第一專長)	物理(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"化工系111B  必修	原科院學士班111B  選修	物理系111B A必修	物理系111B B必修	物理系111B C必修	"},{科號:"11120CHEM102004",課程中文名稱:"普通化學二",課程英文名稱:"General Chemistry (II)",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`CHEM化   326	M3M4W1W2
`,授課教師:`游靜惠	YU, CHIN-HUI
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>曾修普通化學一<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"",第一二專長對應:"化學工程(第一專長)	化學(第一專長)	醫學科學(第一專長)	生命科學(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120CHEM103001",課程中文名稱:"普通化學實驗一",課程英文名稱:"General Chemistry Laboratory (I)",學分數:"1",人限:"55",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"召集人王育恒教授，加簽僅開放2月9~15日,請洽化207室廖翊雅",停開註記:"",教室與上課時間:`CHEM化   229	W1W2W3W4
`,授課教師:`廖翊雅	LIAO, YI-YA
`,擋修說明:"",課程限制說明:"限動機系大學部清班",第一二專長對應:"化學(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"動機系111BA 必修	"},{科號:"11120CHEM103002",課程中文名稱:"普通化學實驗一",課程英文名稱:"General Chemistry Laboratory (I)",學分數:"1",人限:"55",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"召集人王育恒教授，加簽僅開放2月09~15日,請洽化207室廖翊雅",停開註記:"",教室與上課時間:`CHEM化   225	W1W2W3W4
`,授課教師:`廖翊雅	LIAO, YI-YA
`,擋修說明:"",課程限制說明:"限動機系大學部華班",第一二專長對應:"化學(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"動機系111BB 必修	"},{科號:"11120CHEM104001",課程中文名稱:"普通化學實驗二",課程英文名稱:"General Chemistry Laboratory (II)",學分數:"1",人限:"55",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"召集人王育恒教授，加簽僅開放2月09~15日,請洽化207室廖翊雅",停開註記:"",教室與上課時間:`CHEM化   229	M5M6M7M8
`,授課教師:`廖翊雅	LIAO, YI-YA
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>曾修普通化學實驗一<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"【上學期原修普通化學實驗一CHEM103001(廖翊雅老師)同學選課優先,第3次選課起開放】",第一二專長對應:"化學(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"原科院學士班111B  選修	材料系111BA 必修	"},{科號:"11120CHEM104002",課程中文名稱:"普通化學實驗二",課程英文名稱:"General Chemistry Laboratory (II)",學分數:"1",人限:"55",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"召集人王育恒教授，加簽僅開放2月09~15日,請洽化207室廖翊雅",停開註記:"",教室與上課時間:`CHEM化   225	M5M6M7M8
`,授課教師:`廖翊雅	LIAO, YI-YA
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>曾修普通化學實驗一<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"【上學期原修普通化學實驗一CHEM103002(廖翊雅老師)同學選課優先,第3次選課起開放】",第一二專長對應:"化學(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"原科院學士班111B  選修	生科系111B  必修	"},{科號:"11120CHEM104003",課程中文名稱:"普通化學實驗二",課程英文名稱:"General Chemistry Laboratory (II)",學分數:"1",人限:"55",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"召集人王育恒教授，加簽僅開放2月09~15日,請洽化207室廖翊雅",停開註記:"",教室與上課時間:`CHEM化   229	T5T6T7T8
`,授課教師:`廖翊雅	LIAO, YI-YA
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>曾修普通化學實驗一<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"【上學期原修普通化學實驗一CHEM103003(廖翊雅老師)同學選課優先,第3次選課起開放】",第一二專長對應:"化學(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"醫環系111B  必修	醫科系111B  必修	工學院學士班111B  必修	原科院學士班111B  選修	"},{科號:"11120CHEM104004",課程中文名稱:"普通化學實驗二",課程英文名稱:"General Chemistry Laboratory (II)",學分數:"1",人限:"55",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"召集人王育恒教授，加簽僅開放2月9~15日,請洽化207室廖翊雅",停開註記:"",教室與上課時間:`CHEM化   225	T5T6T7T8
`,授課教師:`廖翊雅	LIAO, YI-YA
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>曾修普通化學實驗一<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"【上學期原修普通化學實驗一CHEM103004(廖翊雅老師)同學選課優先,第3次選課起開放】",第一二專長對應:"化學(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"醫環系111B  必修	醫科系111B  必修	工學院學士班111B  必修	原科院學士班111B  選修	"},{科號:"11120CHEM104005",課程中文名稱:"普通化學實驗二",課程英文名稱:"General Chemistry Laboratory (II)",學分數:"1",人限:"65",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"召集人王育恒教授，加簽僅開放2月09~15日,請洽化207室廖翊雅",停開註記:"",教室與上課時間:`CHEM化   225	W5W6W7W8
`,授課教師:`廖翊雅	LIAO, YI-YA
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>曾修普通化學實驗一<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"【上學期原修普通化學實驗一CHEM103005(廖翊雅老師)同學選課優先,第3次選課起開放】",第一二專長對應:"化學(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"化學系111B  必修	原科院學士班111B  選修	"},{科號:"11120CHEM104006",課程中文名稱:"普通化學實驗二",課程英文名稱:"General Chemistry Laboratory (II)",學分數:"1",人限:"61",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"召集人王育恒教授，加簽僅開放2月09~15日,請洽化207室廖翊雅",停開註記:"",教室與上課時間:`CHEM化   225	R5R6R7R8
`,授課教師:`廖翊雅	LIAO, YI-YA
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>曾修普通化學實驗一<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"【上學期原修普通化學實驗一CHEM103006(廖翊雅老師)同學選課優先,第3次選課起開放】",第一二專長對應:"化學(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"化工系111B  必修	原科院學士班111B  選修	"},{科號:"11120CHEM104007",課程中文名稱:"普通化學實驗二",課程英文名稱:"General Chemistry Laboratory (II)",學分數:"1",人限:"55",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"召集人王育恒教授，加簽僅開放2月09~15日,請洽化207室廖翊雅",停開註記:"",教室與上課時間:`CHEM化   229	R5R6R7R8
`,授課教師:`廖翊雅	LIAO, YI-YA
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>曾修普通化學實驗一<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"【上學期原修普通化學實驗一CHEM103007(廖翊雅老師)同學選課優先,第3次選課起開放】",第一二專長對應:"化學(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"原科院學士班111B  選修	材料系111BB 必修	"},{科號:"11120CHEM104008",課程中文名稱:"普通化學實驗二",課程英文名稱:"General Chemistry Laboratory (II)",學分數:"1",人限:"55",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"召集人王育恒教授，加簽僅開放2月09~15日,請洽化207室廖翊雅",停開註記:"",教室與上課時間:`CHEM化   225	F5F6F7F8
`,授課教師:`廖翊雅	LIAO, YI-YA
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>曾修普通化學實驗一<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"【上學期原修普通化學實驗一CHEM103008(廖翊雅老師)同學選課優先,第3次選課起開放】",第一二專長對應:"化學(第一專長)	物理(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"原科院學士班111B  選修	物理系111B A必修	物理系111B B必修	物理系111B C必修	理學院學士班111B  必修	"},{科號:"11120CHEM104009",課程中文名稱:"普通化學實驗二",課程英文名稱:"General Chemistry Laboratory (II)",學分數:"1",人限:"55",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"召集人王育恒教授，加簽僅開放2月09~15日,請洽化207室廖翊雅",停開註記:"",教室與上課時間:`CHEM化   229	F5F6F7F8
`,授課教師:`廖翊雅	LIAO, YI-YA
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>曾修普通化學實驗一<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"【上學期原修普通化學實驗一CHEM103009(廖翊雅老師)同學選課優先,第3次選課起開放】",第一二專長對應:"化學(第一專長)	物理(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"原科院學士班111B  選修	物理系111B A必修	物理系111B B必修	物理系111B C必修	理學院學士班111B  必修	"},{科號:"11120CHEM222001",課程中文名稱:"有機化學二",課程英文名稱:"Organic Chemistry (II)",學分數:"3",人限:"100",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程上4小時",停開註記:"",教室與上課時間:`CHEM II化二 223	T1T2F1F2
`,授課教師:`陳建添	CHEN, CHIEN-TIEN
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>有機化學一-成績需D以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"限化學系,理學院學士班",第一二專長對應:"化學工程(第二專長)	化學工程(第一專長)	化學(第二專長)	化學(第一專長)	醫學科學(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"化學系110B  必修	理學院學士班110B  必修	"},{科號:"11120CHEM222002",課程中文名稱:"有機化學二",課程英文名稱:"Organic Chemistry (II)",學分數:"3",人限:"160",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程上4小時,",停開註記:"",教室與上課時間:`CHE化工 B18	W3W4F3F4
`,授課教師:`王聖凱	WANG, SHENG-KAI
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>有機化學一-成績需D以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"生科院,化工系大學部2年級優先，第3次選課起開放全校修習",第一二專長對應:"化學工程(第二專長)	化學工程(第一專長)	化學(第二專長)	化學(第一專長)	醫學科學(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"化工系110B  必修	醫科系110B  必修	生科系110B  必修	理學院學士班110B  必修	"},{科號:"11120CHEM224001",課程中文名稱:"有機化學實驗二",課程英文名稱:"Organic Chemistry Laboratory (II)",學分數:"2",人限:"33",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"召集人陳建添教授,加簽事宜洽化207林芳齡",停開註記:"",教室與上課時間:`CHEM化   326	M5M6
CHEM化   324	M7M8
`,授課教師:`林芳齡	LIN,FANG-LING
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>曾修有機化學實驗一<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"化工系,化學系優先，第3次選課起開放全校修習",第一二專長對應:"化學(第二專長)	化學(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"化工系110B  必修	化學系110B  必修	"},{科號:"11120CHEM224002",課程中文名稱:"有機化學實驗二",課程英文名稱:"Organic Chemistry Laboratory (II)",學分數:"2",人限:"33",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"召集人陳建添教授,加簽事宜洽化207林芳齡",停開註記:"",教室與上課時間:`CHEM化   326	W5W6
CHEM化   324	W7W8
`,授課教師:`林芳齡	LIN,FANG-LING
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>曾修有機化學實驗一<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"化工系,化學系優先，第3次選課起開放全校修習",第一二專長對應:"化學(第二專長)	化學(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"化工系110B  必修	化學系110B  必修	"},{科號:"11120CHEM224003",課程中文名稱:"有機化學實驗二",課程英文名稱:"Organic Chemistry Laboratory (II)",學分數:"2",人限:"33",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"召集人陳建添教授,加簽事宜洽化207林芳齡",停開註記:"",教室與上課時間:`CHEM化   326	R5R6
CHEM化   324	R7R8
`,授課教師:`林芳齡	LIN,FANG-LING
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>曾修有機化學實驗一<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"化工系,化學系優先，第3次選課起開放全校修習",第一二專長對應:"化學(第二專長)	化學(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"化工系110B  必修	化學系110B  必修	"},{科號:"11120CHEM224004",課程中文名稱:"有機化學實驗二",課程英文名稱:"Organic Chemistry Laboratory (II)",學分數:"2",人限:"33",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"召集人陳建添教授,加簽事宜洽化207林芳齡",停開註記:"",教室與上課時間:`CHEM化   326	F5F6
CHEM化   324	F7F8
`,授課教師:`林芳齡	LIN,FANG-LING
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>曾修有機化學實驗一<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"化工系,化學系優先，第3次選課起開放全校修習",第一二專長對應:"化學(第二專長)	化學(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"化工系110B  必修	化學系110B  必修	"},{科號:"11120CHEM242000",課程中文名稱:"物理化學二",課程英文名稱:"Physical Chemistry (II)",學分數:"3",人限:"100",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程上4小時",停開註記:"",教室與上課時間:`CHEM II化二 223	W3W4F3F4
`,授課教師:`朱立岡	CHU, LI-KANG
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>曾修微積分Ｂ二<BR>曾修微積分二(數學系)<BR>曾修微積分Ａ二<BR>曾修微積分二<BR><br>上述條件任選一科，而且<br><BR>曾修普通化學一<BR>曾修普通化學二<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"限化學系大學部2年級3年級4年級,理學院學士班大學部2年級3年級4年級",第一二專長對應:"化學(第二專長)	化學(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"化學系110B  必修	理學院學士班110B  必修	"},{科號:"11120CHEM244001",課程中文名稱:"物理化學實驗一",課程英文名稱:"Physical Chemistry Laboratory (I)",學分數:"2",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"召集人陳益佳教授,加簽事宜洽化207室莊晴如",停開註記:"",教室與上課時間:`CHEM化   329	W5W6W7W8
`,授課教師:`莊晴如	CHUANG, CHING-JU
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>曾修普通化學實驗二<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"化工系,化學系優先，第3次選課起開放全校修習",第一二專長對應:"化學(第二專長)	化學(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"化工系110B  必修	化學系110B  必修	"},{科號:"11120CHEM244002",課程中文名稱:"物理化學實驗一",課程英文名稱:"Physical Chemistry Laboratory (I)",學分數:"2",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"召集人陳益佳教授,加簽事宜洽化207室莊晴如",停開註記:"",教室與上課時間:`CHEM化   329	F5F6F7F8
`,授課教師:`莊晴如	CHUANG, CHING-JU
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>曾修普通化學實驗二<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"化工系,化學系優先，第3次選課起開放全校修習",第一二專長對應:"化學(第二專長)	化學(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"化工系110B  必修	化學系110B  必修	"},{科號:"11120CHEM244003",課程中文名稱:"物理化學實驗一",課程英文名稱:"Physical Chemistry Laboratory (I)",學分數:"2",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"召集人陳益佳教授,加簽事宜洽化207室莊晴如",停開註記:"",教室與上課時間:`CHEM化   329	M5M6M7M8
`,授課教師:`莊晴如	CHUANG, CHING-JU
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>曾修普通化學實驗二<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"化工系,化學系優先，第3次選課起開放全校修習",第一二專長對應:"化學(第二專長)	化學(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"化工系110B  必修	化學系110B  必修	"},{科號:"11120CHEM244004",課程中文名稱:"物理化學實驗一",課程英文名稱:"Physical Chemistry Laboratory (I)",學分數:"2",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"召集人陳益佳教授,加簽事宜洽化207室莊晴如",停開註記:"",教室與上課時間:`CHEM化   329	R5R6R7R8
`,授課教師:`莊晴如	CHUANG, CHING-JU
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>曾修普通化學實驗二<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"化工系,化學系優先，第3次選課起開放全校修習",第一二專長對應:"化學(第二專長)	化學(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"化工系110B  必修	化學系110B  必修	"},{科號:"11120CHEM292000",課程中文名稱:"化學數學",課程英文名稱:"Mathematics for Chemistry",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程上150分鐘，50分鐘彈性時間",停開註記:"",教室與上課時間:`CHEM化   125	M1M2R1R2
`,授課教師:`江昀緯	CHIANG, YUN-WEI
`,擋修說明:"",課程限制說明:"限化學系大學部2年級3年級4年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"化學系110B  選修	"},{科號:"11120CHEM312000",課程中文名稱:"分析化學二",課程英文名稱:"Analytical Chemistry (II)",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"本課程上4小時",停開註記:"",教室與上課時間:`CHEM化   B07	T3T4R3R4
`,授課教師:`帕偉鄂本	URBAN, PAWEL LUKASZ
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>曾修分析化學一<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"",第一二專長對應:"化學(第二專長)	化學(第一專長)	工程與系統科學(第一專長)	核工與能源(第二專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"化學系109B  必修	理學院學士班109B  必修	"},{科號:"11120CHEM314001",課程中文名稱:"分析化學實驗二",課程英文名稱:"Analytical Chemistry Laboratory (II)",學分數:"2",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"召集人陳貴通教授,加簽事宜洽化207室廖英孝",停開註記:"",教室與上課時間:`CHEM化   228	M5M6M7M8
`,授課教師:`廖英孝	LIAO, YING-HSIAO
`,擋修說明:"",課程限制說明:"限化學系大學部3年級4年級",第一二專長對應:"化學(第二專長)	化學(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"化學系109B  必修	"},{科號:"11120CHEM314002",課程中文名稱:"分析化學實驗二",課程英文名稱:"Analytical Chemistry Laboratory (II)",學分數:"2",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"召集人陳貴通教授,加簽事宜洽化207室廖英孝",停開註記:"",教室與上課時間:`CHEM化   228	R5R6R7R8
`,授課教師:`廖英孝	LIAO, YING-HSIAO
`,擋修說明:"",課程限制說明:"限化學系大學部3年級4年級",第一二專長對應:"化學(第二專長)	化學(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"化學系109B  必修	"},{科號:"11120CHEM326000",課程中文名稱:"光譜分析",課程英文名稱:"Spectroscopic Analysis",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`CHEM II化二 223	M3M4W2
`,授課教師:`游景晴	YU, CHING-CHING
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"化學系109B  選修	"},{科號:"11120CHEM328000",課程中文名稱:"當代化學論壇",課程英文名稱:"Contemporary  Research in Chemistry",學分數:"1",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`CHEM II化二 223	F7F8
`,授課教師:`王育恒	WANG, YU-HENG
`,擋修說明:"",課程限制說明:"限化學系",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"化學系109B  選修	"},{科號:"11120CHEM329001",課程中文名稱:"光譜分析實驗",課程英文名稱:"Spectroscopic Analysis Laboratory",學分數:"2",人限:"33",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`CHEM化   326	T5
CHEM化   324	T6T7T8
`,授課教師:`陳建添	CHEN, CHIEN-TIEN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)光電學分學程",不可加簽說明:"",必選修說明:"化學系109B  選修	"},{科號:"11120CHEM332000",課程中文名稱:"無機化學二",課程英文名稱:"Inorganic Chemistry (II)",學分數:"3",人限:"86",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程上4小時",停開註記:"",教室與上課時間:`CHEM化   B07	M1M2R1R2
`,授課教師:`蔡易州	TSAI, YI-CHOU
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>無機化學一-成績需D以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"",第一二專長對應:"化學(第二專長)	化學(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"化學系109B  必修	理學院學士班109B  必修	"},{科號:"11120CHEM453000",課程中文名稱:"有機反應與合成",課程英文名稱:"Organic Reactions and Syntheses",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`CHEM化   326	T2W3W4
`,授課教師:`胡紀如	HWU, JIH-RU
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"化學系108B  選修	"},{科號:"11120CHEM463000",課程中文名稱:"書報討論二(有機無機組)",課程英文名稱:"Seminar-Organic and Inorganic Divisions (II)",學分數:"1",人限:"35",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`CHEM化   125	R5R6
`,授課教師:`劉瑞雄	LIU, JUI-HSIUNG
`,擋修說明:"",課程限制說明:"限化學系大學部",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"化學系108B  必修	"},{科號:"11120CHEM464000",課程中文名稱:"書報討論二(物化分析組)",課程英文名稱:"Seminar-Physical and Analytical Chemistry (II)",學分數:"1",人限:"35",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`CHEM化   325	R5R6
`,授課教師:`陳貴通	TAN, KUI THONG
`,擋修說明:"",課程限制說明:"限化學系大學部",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"化學系108B  必修	"},{科號:"11120CHEM466000",課程中文名稱:"專題演講二",課程英文名稱:"Colloquium (II)",學分數:"1",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"每週上課起迄時間視邀請講者略有不同，詳見化學系公告,另1間教室為化二223",停開註記:"",教室與上課時間:`CHEM化   B07	W6W7W8
`,授課教師:`江昀緯	CHIANG, YUN-WEI
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"化學系108B  選修	"},{科號:"11120CHEM481000",課程中文名稱:"專題研究二",課程英文名稱:"Undergraduate Research (II)",學分數:"3",人限:"0",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"經該指導教授加簽同意方式選課",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"限化學系3年級4年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"化學系108B  選修	化學系109B  選修	"},{科號:"11120CHEM500500",課程中文名稱:"教學實習二",課程英文名稱:"Teaching Internship (II)",學分數:"1",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"碩一必修,碩二以上本學期擔任TA者亦須選修，此學分不計入最低畢業應修學分數",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"限化學系碩士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"化學系111MA 必修	化學系111MB 必修	"},{科號:"11120CHEM501500",課程中文名稱:"同步輻射應用",課程英文名稱:"Applications of Synchrotron Radiation",學分數:"2",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`CHEM化   326	R7R8
`,授課教師:`李耀昌	LEE, YAO-CHANG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"化學系111D  選修	化學系111MA 選修	化學系111MB 選修	"},{科號:"11120CHEM504500",課程中文名稱:"蛋白質結構與化學",課程英文名稱:"Protein Structure and Chemistry",學分數:"3",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`CHEM化   326	T3T4R2
`,授課教師:`林竣偉	LIN,CHUN-WEI
洪嘉呈	HORNG, JIA-CHERNG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"化學系111D  選修	化學系111MA 選修	化學系111MB 選修	"},{科號:"11120CHEM504600",課程中文名稱:"電化學導論及應用",課程英文名稱:"Electrochemistry Fundamentals and Applications",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`CHEM化   114	R2F1F2
`,授課教師:`王育恒	WANG, YU-HENG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"化學系111D  選修	化學系111MA 選修	化學系111MB 選修	"},{科號:"11120CHEM506000",課程中文名稱:"生物無機化學",課程英文名稱:"Bioinorganic Chemistry",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`CHEM化  121	M3M4W2
`,授課教師:`廖文&#23791;	LIAW, WEN-FENG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"化學系111D  選修	化學系111MA 選修	化學系111MB 選修	"},{科號:"11120CHEM506500",課程中文名稱:"生物有機反應機構",課程英文名稱:"Bioorganic Reaction Mechanism",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"教師: 洪上程",停開註記:"",教室與上課時間:`CHEM化   326	T6T7T8
`,授課教師:`聘任中	
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"化學系111D  選修	化學系111MA 選修	化學系111MB 選修	"},{科號:"11120CHEM507500",課程中文名稱:"高等生物化學",課程英文名稱:"Advanced Biochemistry",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`CHEM化   114	M2W3W4
`,授課教師:`林竣偉	LIN,CHUN-WEI
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"化學系111D  選修	化學系111MA 選修	化學系111MB 選修	"},{科號:"11120CHEM524500",課程中文名稱:"計算化學",課程英文名稱:"Computational Chemistry",學分數:"2",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"必需修過物化二方能選修計算化學",停開註記:"",教室與上課時間:`CHEM化   114	M5M6
`,授課教師:`楊自雄	YANG, TZUHSIUNG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"化學系111D  選修	化學系111MA 選修	化學系111MB 選修	"},{科號:"11120CHEM531500",課程中文名稱:"電化學實驗",課程英文名稱:"Electrochemistry Laboratory",學分數:"2",人限:"6",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"修習電化學實驗需同時選修電化學導論與應用。視情況開放加簽人數",停開註記:"",教室與上課時間:`CHEM化  504	R6R7R8
`,授課教師:`王育恒	WANG, YU-HENG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"化學系111D  選修	化學系111MA 選修	化學系111MB 選修	"},{科號:"11120CHEM538000",課程中文名稱:"統計熱力學",課程英文名稱:"Statistical Thermodynamics",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`CHEM化   B07	M3M4W3W4
`,授課教師:`周佳駿	CHOU, CHIA-CHUN
`,擋修說明:"",課程限制說明:"限化學系",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"化學系111D  選修	化學系111MA 選修	化學系111MB 選修	"},{科號:"11120CHEM542000",課程中文名稱:"雷射化學及光譜",課程英文名稱:"Laser Chemistry and Spectroscopy",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"限 物化組 同學選課",停開註記:"",教室與上課時間:`CHEM化   114	R5R6F5F6
`,授課教師:`鄭博元	CHENG, PO-YUAN
`,擋修說明:"",課程限制說明:"限化學系",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"化學系111D  選修	化學系111MA 選修	化學系111MB 選修	"},{科號:"11120CHEM549000",課程中文名稱:"奈米材料化學",課程英文名稱:"Nanomaterial Chemistry",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`CHEM化   125	T3T4W2
`,授課教師:`黃暄益	 
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)奈米與光電半導體產業學分學程/(跨領域)生物產業技術學分學程/(跨領域)奈米科技學分學程",不可加簽說明:"",必選修說明:"化學系111D  選修	化學系111MA 選修	化學系111MB 選修	"},{科號:"11120CHEM550000",課程中文名稱:"觸媒化學",課程英文名稱:"Heterogeneous Catalysis",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`CHEM化   325	T3T4R2
`,授課教師:`楊家銘	YANG, CHIA-MIN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"化學系111D  選修	化學系111MA 選修	化學系111MB 選修	"},{科號:"11120CHEM551000",課程中文名稱:"應用化學特論",課程英文名稱:"Special Topics in Applied Chemistry",學分數:"2",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"另1間教室為旺宏3B",停開註記:"",教室與上課時間:`CHEM化   B07	F3F4
`,授課教師:`吳典霖	WU, TIEN-LIN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"化學系111D  選修	化學系111MA 選修	化學系111MB 必修	"},{科號:"11120CHEM553500",課程中文名稱:"研究專題討論二",課程英文名稱:"Seminar II",學分數:"2",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"限化學系碩士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"化學系111MA 必修	化學系111MB 必修	"},{科號:"11120CHEM562000",課程中文名稱:"書報討論(有機組)",課程英文名稱:"Seminar - Organic Division",學分數:"2",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"M9Ma 為彈性時間",停開註記:"",教室與上課時間:`CHEM化   326	M7M8
`,授課教師:`胡紀如	HWU, JIH-RU
`,擋修說明:"",課程限制說明:"限化學系碩士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"化學系111MA 必修	化學系111MB 必修	"},{科號:"11120CHEM564000",課程中文名稱:"書報討論(物化組)",課程英文名稱:"Seminar - Physical Chemistry Division",學分數:"2",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"T9Ta 為彈性時間",停開註記:"",教室與上課時間:`CHEM化   114	T7T8
`,授課教師:`楊自雄	YANG, TZUHSIUNG
`,擋修說明:"",課程限制說明:"限化學系碩士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"化學系111MA 必修	化學系111MB 必修	"},{科號:"11120CHEM566000",課程中文名稱:"書報討論(無機組)",課程英文名稱:"Seminar - Inorganic",學分數:"2",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"T9Ta 為彈性時間",停開註記:"",教室與上課時間:`CHEM化   125	T7T8
`,授課教師:`廖文&#23791;	LIAW, WEN-FENG
`,擋修說明:"",課程限制說明:"限化學系碩士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"化學系111MA 必修	化學系111MB 必修	"},{科號:"11120CHEM568000",課程中文名稱:"書報討論(分析組)",課程英文名稱:"Seminar - Analytical Chemistry Division",學分數:"2",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"Only For Department of Chemistry, Master Student Practicing.T9Ta為彈性時間",停開註記:"",教室與上課時間:`CHEM化   325	T7T8
`,授課教師:`帕偉鄂本	URBAN, PAWEL LUKASZ
`,擋修說明:"",課程限制說明:"限化學系碩士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"化學系111MA 必修	化學系111MB 必修	"},{科號:"11120CHEM570000",課程中文名稱:"專題演講",課程英文名稱:"Colloquium",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"每週上課起迄時間視邀請講者略有不同，詳見化學系公告,另1間教室為化二223",停開註記:"",教室與上課時間:`CHEM化   B07	W6W7W8
`,授課教師:`江昀緯	CHIANG, YUN-WEI
`,擋修說明:"",課程限制說明:"限化學系碩士班博士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"化學系111D  必修	化學系111MA 必修	化學系111MB 必修	"},{科號:"11120CHEM578500",課程中文名稱:"同相催化",課程英文名稱:"Homogeneous Catalysis",學分數:"2",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`CHEM化   125	W3W4
`,授課教師:`劉瑞雄	LIU, JUI-HSIUNG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"化學系111D  選修	化學系111MA 選修	化學系111MB 選修	"},{科號:"11120CHEM581000",課程中文名稱:"論文研究",課程英文名稱:"Thesis",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限碩二以上修習",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"排除化學系碩士班1年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"化學系111MA 必修	化學系111MB 必修	"},{科號:"11120CHEM592000",課程中文名稱:"有機半導體導論",課程英文名稱:"Introduction to Organic Semiconductors",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`CHEM化  121	M2R3R4
`,授課教師:`吳典霖	WU, TIEN-LIN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"化學系111D  選修	化學系111MA 選修	化學系111MB 選修	"},{科號:"11120CHEM598000",課程中文名稱:"化學生物二",課程英文名稱:"Chemical Biology",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`CHEM化   125	T2R3R4
`,授課教師:`林俊成	LIN, CHUN-CHENG
王聖凱	WANG, SHENG-KAI
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"化學系111D  選修	化學系111MA 選修	化學系111MB 選修	"},{科號:"11120CHEM620000",課程中文名稱:"化學教學實習",課程英文名稱:"Teaching Practice",學分數:"1",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限博二以上,帶實驗當學期必修,最低畢業應修學分數中,此課程最多僅計入1學分",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"排除化學系博士班1年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"化學系111D  必修	"},{科號:"11120CHEM624000",課程中文名稱:"有機合成二",課程英文名稱:"Organic Synthesis (II)",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`CHEM化  121	W3W4F2
`,授課教師:`黃郁文	HUANG, YU-WEN
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>曾修有機合成一<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"化學系111D  選修	化學系111MA 選修	化學系111MB 選修	"},{科號:"11120CHEM651000",課程中文名稱:"研究專題討論二",課程英文名稱:"Seminar II",學分數:"2",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"限化學系博士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"化學系111D  必修	"},{科號:"11120CHEM662000",課程中文名稱:"書報討論(有機組)",課程英文名稱:"Seminar - Organic Division",學分數:"1",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"M7M8 為彈性時間",停開註記:"",教室與上課時間:`CHEM化   326	M9Ma
`,授課教師:`胡紀如	HWU, JIH-RU
`,擋修說明:"",課程限制說明:"限化學系博士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"化學系111D  必修	"},{科號:"11120CHEM663000",課程中文名稱:"書報討論(物化組)",課程英文名稱:"Seminar - Physical Chemistry Division",學分數:"1",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"T7T8為彈性時間",停開註記:"",教室與上課時間:`CHEM化   114	T9Ta
`,授課教師:`楊自雄	YANG, TZUHSIUNG
`,擋修說明:"",課程限制說明:"限化學系博士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"化學系111D  必修	"},{科號:"11120CHEM666000",課程中文名稱:"書報討論(無機組)",課程英文名稱:"Seminar - Inorganic",學分數:"1",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"T7T8為彈性時間",停開註記:"",教室與上課時間:`CHEM化   125	T9Ta
`,授課教師:`廖文&#23791;	LIAW, WEN-FENG
`,擋修說明:"",課程限制說明:"限化學系博士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"化學系111D  必修	"},{科號:"11120CHEM668000",課程中文名稱:"書報討論(分析組)",課程英文名稱:"Seminar - Analytical Chemistry Division",學分數:"1",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"Only For Department of Chemistry, PHD Student Practicing. T7T8為彈性時間",停開註記:"",教室與上課時間:`CHEM化   325	T9Ta
`,授課教師:`帕偉鄂本	URBAN, PAWEL LUKASZ
`,擋修說明:"",課程限制說明:"限化學系博士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"化學系111D  必修	"},{科號:"11120CHEM681000",課程中文名稱:"論文研究",課程英文名稱:"Thesis",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限博二以上修習",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"排除化學系博士班1年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"化學系111D  必修	"},{科號:"11120CHSS200100",課程中文名稱:"經典學思行",課程英文名稱:"Reading Classics: Reflection and Practice",學分數:"3",人限:"25",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"16週課程",停開註記:"",教室與上課時間:`HSS人社C412	M7M8M9
`,授課教師:`李卓穎	LI, CHO-YING
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"中文系108B  選修	中文系109B  選修	中文系110B  選修	外語系108B  選修	外語系109B  選修	外語系110B  選修	人社院學士班108BA 選修	人社院學士班108BB 選修	人社院學士班109BA 選修	人社院學士班109BB 選修	人社院學士班110BA 選修	人社院學士班110BB 選修	"},{科號:"11120CL  102001",課程中文名稱:"大學中文",課程英文名稱:"College Chinese",學分數:"2",人限:"25",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"1選:限原設科系大一，2選:限大二，3選:開放全校修習",停開註記:"",教室與上課時間:`GEN II綜二103	M5M6
`,授課教師:`王月秀	WANG, YUE-SHIOU
`,擋修說明:"",課程限制說明:"計財系大學部1年級,科管院學士班大學部1年級,原科院學士班大學部1年級優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:""},{科號:"11120CL  102002",課程中文名稱:"大學中文",課程英文名稱:"College Chinese",學分數:"2",人限:"25",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"1選:限原設科系大一，2選:限大二，3選:開放全校修習",停開註記:"",教室與上課時間:`LTM綠能201	M5M6
`,授課教師:`劉盈成	LIU, YIN-GHENG
`,擋修說明:"",課程限制說明:"計財系大學部1年級,科管院學士班大學部1年級,原科院學士班大學部1年級優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:""},{科號:"11120CL  102003",課程中文名稱:"大學中文",課程英文名稱:"College Chinese",學分數:"2",人限:"25",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"1選:限原設科系大一，2選:限大二，3選:開放全校修習",停開註記:"",教室與上課時間:`LTM綠能202	M5M6
`,授課教師:`黃鈴棋	HUANG, LING-CHI
`,擋修說明:"",課程限制說明:"計財系大學部1年級,科管院學士班大學部1年級,原科院學士班大學部1年級優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:""},{科號:"11120CL  102004",課程中文名稱:"大學中文",課程英文名稱:"College Chinese",學分數:"2",人限:"25",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"1選:限原設科系大一，2選:限大二，3選:開放全校修習",停開註記:"",教室與上課時間:`GEN II綜二201	M5M6
`,授課教師:`李東龍	LI,TUNG-LUNG
`,擋修說明:"",課程限制說明:"計財系大學部1年級,科管院學士班大學部1年級,原科院學士班大學部1年級優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:""},{科號:"11120CL  102005",課程中文名稱:"大學中文",課程英文名稱:"College Chinese",學分數:"2",人限:"25",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限108前(含)入學外籍生,僑生如需修習,需經任課教師同意,加簽選課。",停開註記:"",教室與上課時間:`GEN II綜二614	M5M6
`,授課教師:`許漢祥	HSU, HAN-HSIANG
`,擋修說明:"",課程限制說明:"限外籍生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:""},{科號:"11120CL  102007",課程中文名稱:"大學中文",課程英文名稱:"College Chinese",學分數:"2",人限:"25",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"1選:限原設科系大一，2選:限大二，3選:開放全校修習",停開註記:"",教室與上課時間:`PHYS物   501	T5T6
`,授課教師:`謝明憲	HSIEH, MING-HSIEN
`,擋修說明:"",課程限制說明:"物理系大學部1年級,理學院學士班大學部1年級優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:""},{科號:"11120CL  102008",課程中文名稱:"大學中文",課程英文名稱:"College Chinese",學分數:"2",人限:"25",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"1選:限原設科系大一，2選:限大二，3選:開放全校修習",停開註記:"",教室與上課時間:`PHYS物   504	T5T6
`,授課教師:`劉盈成	LIU, YIN-GHENG
`,擋修說明:"",課程限制說明:"物理系大學部1年級,理學院學士班大學部1年級優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:""},{科號:"11120CL  102009",課程中文名稱:"大學中文",課程英文名稱:"College Chinese",學分數:"2",人限:"25",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"1選:限原設科系大一，2選:限大二，3選:開放全校修習",停開註記:"",教室與上課時間:`GEN II綜二103	T5T6
`,授課教師:`李慈恩	LEE, TZU-EN
`,擋修說明:"",課程限制說明:"物理系大學部1年級,理學院學士班大學部1年級優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:""},{科號:"11120CL  102010",課程中文名稱:"大學中文",課程英文名稱:"College Chinese",學分數:"2",人限:"25",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"1選:限原設科系大一，2選:限大二，3選:開放全校修習",停開註記:"",教室與上課時間:`EDU教  102	T5T6
`,授課教師:`鄧怡菁	TENG, I-CHING
`,擋修說明:"",課程限制說明:"物理系大學部1年級,理學院學士班大學部1年級優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:""},{科號:"11120CL  102011",課程中文名稱:"大學中文",課程英文名稱:"College Chinese",學分數:"2",人限:"25",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"1選:限原設科系大一，2選:限大二，3選:開放全校修習",停開註記:"",教室與上課時間:`GEN II綜二203	T5T6
`,授課教師:`李瑞竹	LEE, JUI-CHU
`,擋修說明:"",課程限制說明:"物理系大學部1年級,理學院學士班大學部1年級優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:""},{科號:"11120CL  102014",課程中文名稱:"大學中文",課程英文名稱:"College Chinese",學分數:"2",人限:"25",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"1選:限原設科系大一，2選:限大二，3選:開放全校修習",停開註記:"",教室與上課時間:`BMES醫環101	W5W6
`,授課教師:`方俠文	FANG, SHIA-WEN
`,擋修說明:"",課程限制說明:"經濟系大學部1年級,醫環系大學部1年級優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:""},{科號:"11120CL  102015",課程中文名稱:"大學中文",課程英文名稱:"College Chinese",學分數:"2",人限:"25",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"1選:限原設科系大一，2選:限大二，3選:開放全校修習",停開註記:"",教室與上課時間:`EDU教   307	W5W6
`,授課教師:`呂柏勳	LU, BO-HSUEN
`,擋修說明:"",課程限制說明:"經濟系大學部1年級,醫環系大學部1年級優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:""},{科號:"11120CL  102016",課程中文名稱:"大學中文",課程英文名稱:"College Chinese",學分數:"2",人限:"25",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"教師：劉芷瑋。1選:限原設科系大一，2選:限大二，3選:開放全校修習",停開註記:"",教室與上課時間:`TSMC台積223	W5W6
`,授課教師:`聘任中	
`,擋修說明:"",課程限制說明:"經濟系大學部1年級,醫環系大學部1年級優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:""},{科號:"11120CL  102017",課程中文名稱:"大學中文",課程英文名稱:"College Chinese",學分數:"2",人限:"25",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"1選:限原設科系大一，2選:限大二，3選:開放全校修習",停開註記:"",教室與上課時間:`TSMC台積204	W5W6
`,授課教師:`鄧怡菁	TENG, I-CHING
`,擋修說明:"",課程限制說明:"經濟系大學部1年級,醫環系大學部1年級優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:""},{科號:"11120CL  102018",課程中文名稱:"大學中文",課程英文名稱:"College Chinese",學分數:"2",人限:"25",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"1選:限原設科系大一，2選:限大二，3選:開放全校修習",停開註記:"",教室與上課時間:`TSMC台積205	W5W6
`,授課教師:`劉璟翰	LIU, CHING-HAN
`,擋修說明:"",課程限制說明:"經濟系大學部1年級,醫環系大學部1年級優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:""},{科號:"11120CL  102019",課程中文名稱:"大學中文",課程英文名稱:"College Chinese",學分數:"2",人限:"25",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"1選:限原設科系大一，2選:限大二，3選:開放全校修習",停開註記:"",教室與上課時間:`LTM綠能201	W5W6
`,授課教師:`聘任中	
`,擋修說明:"",課程限制說明:"經濟系大學部1年級,醫環系大學部1年級優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:""},{科號:"11120CL  102021",課程中文名稱:"大學中文",課程英文名稱:"College Chinese",學分數:"2",人限:"25",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"1選:限原設科系大一，2選:限大二，3選:開放全校修習",停開註記:"",教室與上課時間:`GEN III綜三 115	R5R6
`,授課教師:`李慈恩	LEE, TZU-EN
`,擋修說明:"",課程限制說明:"醫科系大學部1年級,化學系大學部1年級,數學系大學部1年級優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:""},{科號:"11120CL  102022",課程中文名稱:"大學中文",課程英文名稱:"College Chinese",學分數:"2",人限:"25",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"1選:限原設科系大一，2選:限大二，3選:開放全校修習",停開註記:"",教室與上課時間:`GEN III綜三 119	R5R6
`,授課教師:`呂柏勳	LU, BO-HSUEN
`,擋修說明:"",課程限制說明:"醫科系大學部1年級,化學系大學部1年級,數學系大學部1年級優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:""},{科號:"11120CL  102023",課程中文名稱:"大學中文",課程英文名稱:"College Chinese",學分數:"2",人限:"25",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"教師：劉芷瑋。1選:限原設科系大一，2選:限大二，3選:開放全校修習",停開註記:"",教室與上課時間:`EDU教   307	R5R6
`,授課教師:`聘任中	
`,擋修說明:"",課程限制說明:"醫科系大學部1年級,化學系大學部1年級,數學系大學部1年級優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:""},{科號:"11120CL  102024",課程中文名稱:"大學中文",課程英文名稱:"College Chinese",學分數:"2",人限:"25",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"1選:限原設科系大一，2選:限大二，3選:開放全校修習",停開註記:"",教室與上課時間:`GEN II綜二202	R5R6
`,授課教師:`李瑞竹	LEE, JUI-CHU
`,擋修說明:"",課程限制說明:"醫科系大學部1年級,化學系大學部1年級,數學系大學部1年級優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:""},{科號:"11120CL  102025",課程中文名稱:"大學中文",課程英文名稱:"College Chinese",學分數:"2",人限:"25",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"1選:限原設科系大一，2選:限大二，3選:開放全校修習",停開註記:"",教室與上課時間:`GEN II綜二103	R5R6
`,授課教師:`王秋今	WANG, CHIU-CHIN
`,擋修說明:"",課程限制說明:"醫科系大學部1年級,化學系大學部1年級,數學系大學部1年級優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:""},{科號:"11120CL  102026",課程中文名稱:"大學中文",課程英文名稱:"College Chinese",學分數:"2",人限:"25",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"1選:限原設科系大一，2選:限大二，3選:開放全校修習",停開註記:"",教室與上課時間:`GEN II綜二104	R5R6
`,授課教師:`聘任中	
`,擋修說明:"",課程限制說明:"醫科系大學部1年級,化學系大學部1年級,數學系大學部1年級優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:""},{科號:"11120CL  102029",課程中文名稱:"大學中文",課程英文名稱:"College Chinese",學分數:"2",人限:"25",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"1選:限原設科系大一，2選:限大二，3選:開放全校修習",停開註記:"",教室與上課時間:`ESS工科 506	F3F4
`,授課教師:`江曉輝	KONH, HIU-FAI
`,擋修說明:"",課程限制說明:"工科系大學部1年級優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:""},{科號:"11120CL  102030",課程中文名稱:"大學中文",課程英文名稱:"College Chinese",學分數:"2",人限:"25",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"1選:限原設科系大一，2選:限大二，3選:開放全校修習",停開註記:"",教室與上課時間:`ESS工科 504	F3F4
`,授課教師:`朱芯儀	CHU, HSIN-I
`,擋修說明:"",課程限制說明:"工科系大學部1年級優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:""},{科號:"11120CL  102031",課程中文名稱:"大學中文",課程英文名稱:"College Chinese",學分數:"2",人限:"25",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"1選:限原設科系大一，2選:限大二，3選:開放全校修習",停開註記:"",教室與上課時間:`LTM綠能202	F3F4
`,授課教師:`林佩珊	LIN, PEI-SHAN
`,擋修說明:"",課程限制說明:"工科系大學部1年級優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:""},{科號:"11120CL  102032",課程中文名稱:"大學中文",課程英文名稱:"College Chinese",學分數:"2",人限:"25",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"教師：郭俐君。1選:限原設科系大一，2選:限大二，3選:開放全校修習",停開註記:"",教室與上課時間:`ESS工科 502	F3F4
`,授課教師:`聘任中	
`,擋修說明:"",課程限制說明:"工科系大學部1年級優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:""},{科號:"11120CL  102035",課程中文名稱:"大學中文",課程英文名稱:"College Chinese",學分數:"2",人限:"25",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"1選:限原設科系大一，2選:限大二，3選:開放全校修習",停開註記:"",教室與上課時間:`CHE化工 211	F5F6
`,授課教師:`江曉輝	KONH, HIU-FAI
`,擋修說明:"",課程限制說明:"化工系大學部1年級,工學院學士班大學部1年級優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:""},{科號:"11120CL  102036",課程中文名稱:"大學中文",課程英文名稱:"College Chinese",學分數:"2",人限:"25",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"1選:限原設科系大一，2選:限大二，3選:開放全校修習",停開註記:"",教室與上課時間:`GEN II綜二201	F5F6
`,授課教師:`朱芯儀	CHU, HSIN-I
`,擋修說明:"",課程限制說明:"化工系大學部1年級,工學院學士班大學部1年級優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:""},{科號:"11120CL  102037",課程中文名稱:"大學中文",課程英文名稱:"College Chinese",學分數:"2",人限:"25",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"1選:限原設科系大一，2選:限大二，3選:開放全校修習",停開註記:"",教室與上課時間:`GEN II綜二104	F5F6
`,授課教師:`林佩珊	LIN, PEI-SHAN
`,擋修說明:"",課程限制說明:"化工系大學部1年級,工學院學士班大學部1年級優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:""},{科號:"11120CL  102038",課程中文名稱:"大學中文",課程英文名稱:"College Chinese",學分數:"2",人限:"25",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"教師：郭俐君。1選:限原設科系大一，2選:限大二，3選:開放全校修習",停開註記:"",教室與上課時間:`GEN II綜二103	F5F6
`,授課教師:`聘任中	
`,擋修說明:"",課程限制說明:"化工系大學部1年級,工學院學士班大學部1年級優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:""},{科號:"11120CL  102040",課程中文名稱:"大學中文",課程英文名稱:"College Chinese",學分數:"2",人限:"25",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"1選:限原設科系大一，2選:限大二，3選:開放全校修習",停開註記:"",教室與上課時間:`Nanda南大9122	T5T6
`,授課教師:`蔡幸娟	TSAI, HSING-CHUAN
`,擋修說明:"",課程限制說明:"藝術學院學士班大學部1年級,幼教系大學部1年級,教科系大學部1年級優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:""},{科號:"11120CL  102041",課程中文名稱:"大學中文",課程英文名稱:"College Chinese",學分數:"2",人限:"25",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"1選:限原設科系大一，2選:限大二，3選:開放全校修習",停開註記:"",教室與上課時間:`Nanda南大9205	T5T6
`,授課教師:`許漢祥	HSU, HAN-HSIANG
`,擋修說明:"",課程限制說明:"藝術學院學士班大學部1年級,幼教系大學部1年級,教科系大學部1年級優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:""},{科號:"11120CL  102042",課程中文名稱:"大學中文",課程英文名稱:"College Chinese",學分數:"2",人限:"25",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"1選:限原設科系大一，2選:限大二，3選:開放全校修習",停開註記:"",教室與上課時間:`Nanda南大N203	T5T6
`,授課教師:`劉璟翰	LIU, CHING-HAN
`,擋修說明:"",課程限制說明:"藝術學院學士班大學部1年級,幼教系大學部1年級,教科系大學部1年級優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:""},{科號:"11120CL  102043",課程中文名稱:"大學中文",課程英文名稱:"College Chinese",學分數:"2",人限:"25",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"1選:限原設科系大一，2選:限大二，3選:開放全校修習",停開註記:"",教室與上課時間:`Nanda南大2303	T5T6
`,授課教師:`黃鈴棋	HUANG, LING-CHI
`,擋修說明:"",課程限制說明:"藝術學院學士班大學部1年級,幼教系大學部1年級,教科系大學部1年級優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:""},{科號:"11120CL  102044",課程中文名稱:"大學中文",課程英文名稱:"College Chinese",學分數:"2",人限:"25",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"1選:限原設科系大一，2選:限大二，3選:開放全校修習",停開註記:"",教室與上課時間:`Nanda南大2106	T5T6
`,授課教師:`聘任中	
`,擋修說明:"",課程限制說明:"藝術學院學士班大學部1年級,幼教系大學部1年級,教科系大學部1年級優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:""},{科號:"11120CL  102045",課程中文名稱:"大學中文",課程英文名稱:"College Chinese",學分數:"2",人限:"25",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"1選:限原設科系大一，2選:限大二，3選:開放全校修習",停開註記:"",教室與上課時間:`Nanda南大9206	T5T6
`,授課教師:`聘任中	
`,擋修說明:"",課程限制說明:"藝術學院學士班大學部1年級,幼教系大學部1年級,教科系大學部1年級優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:""},{科號:"11120CL  102048",課程中文名稱:"大學中文",課程英文名稱:"College Chinese",學分數:"2",人限:"25",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"1選:限原設科系大一，2選:限大二，3選:開放全校修習",停開註記:"",教室與上課時間:`Nanda南大9122	R5R6
`,授課教師:`王月秀	WANG, YUE-SHIOU
`,擋修說明:"",課程限制說明:"教育學院學士班大學部1年級,心諮系大學部1年級,特教系大學部1年級,運科系大學部1年級優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:""},{科號:"11120CL  102049",課程中文名稱:"大學中文",課程英文名稱:"College Chinese",學分數:"2",人限:"25",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"1選:限原設科系大一，2選:限大二，3選:開放全校修習",停開註記:"",教室與上課時間:`Nanda南大9205	R5R6
`,授課教師:`方俠文	FANG, SHIA-WEN
`,擋修說明:"",課程限制說明:"教育學院學士班大學部1年級,心諮系大學部1年級,特教系大學部1年級,運科系大學部1年級優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:""},{科號:"11120CL  102050",課程中文名稱:"大學中文",課程英文名稱:"College Chinese",學分數:"2",人限:"25",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"1選:限原設科系大一，2選:限大二，3選:開放全校修習",停開註記:"",教室與上課時間:`Nanda南大9206	R5R6
`,授課教師:`蔡幸娟	TSAI, HSING-CHUAN
`,擋修說明:"",課程限制說明:"教育學院學士班大學部1年級,心諮系大學部1年級,特教系大學部1年級,運科系大學部1年級優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:""},{科號:"11120CL  102051",課程中文名稱:"大學中文",課程英文名稱:"College Chinese",學分數:"2",人限:"25",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"1選:限原設科系大一，2選:限大二，3選:開放全校修習",停開註記:"",教室與上課時間:`Nanda南大9104	R5R6
`,授課教師:`李東龍	LI,TUNG-LUNG
`,擋修說明:"",課程限制說明:"教育學院學士班大學部1年級,心諮系大學部1年級,特教系大學部1年級,運科系大學部1年級優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:""},{科號:"11120CL  102052",課程中文名稱:"大學中文",課程英文名稱:"College Chinese",學分數:"2",人限:"25",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"1選:限原設科系大一，2選:限大二，3選:開放全校修習",停開註記:"",教室與上課時間:`Nanda南大1407	R5R6
`,授課教師:`聘任中	
`,擋修說明:"",課程限制說明:"教育學院學士班大學部1年級,心諮系大學部1年級,特教系大學部1年級,運科系大學部1年級優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:""},{科號:"11120CL  110400",課程中文名稱:"詩選",課程英文名稱:"Selected Readings from Chinese Poetry",學分數:"3",人限:"60",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程為16週課程。",停開註記:"",教室與上課時間:`HSS人社C509	T7T8T9
`,授課教師:`許銘全	HSU, MING-CHUAN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"中國文學(第二專長)	中國文學(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"中文系111B  必修	"},{科號:"11120CL  111001",課程中文名稱:"基礎寫作",課程英文名稱:"Basic Writing",學分數:"2",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程為16週課程。111起必修課程。",停開註記:"",教室與上課時間:`HSS人社C402	R3R4
`,授課教師:`劉承慧	LIU, CHENG-HUI
`,擋修說明:"",課程限制說明:"限中文系大學部",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"中文系111B  必修	"},{科號:"11120CL  111002",課程中文名稱:"基礎寫作",課程英文名稱:"Basic Writing",學分數:"2",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程為16週課程。111起必修課程。",停開註記:"",教室與上課時間:`HSS人社C403	R3R4
`,授課教師:`楊佳嫻	YANG, CHIA-HSIEN
`,擋修說明:"",課程限制說明:"限中文系大學部",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"中文系111B  必修	"},{科號:"11120CL  111003",課程中文名稱:"基礎寫作",課程英文名稱:"Basic Writing",學分數:"2",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程為16週課程。111起必修課程。",停開註記:"",教室與上課時間:`HSS人社C522	R3R4
`,授課教師:`羅漪文	LO, YI-WEN
`,擋修說明:"",課程限制說明:"限中文系大學部",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"中文系111B  必修	"},{科號:"11120CL  111200",課程中文名稱:"語言學導論",課程英文名稱:"General Linguistics",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程為16週課程。",停開註記:"",教室與上課時間:`HSS人社C509	M7M8M9
`,授課教師:`游文福	YEW BOON HOCK
`,擋修說明:"",課程限制說明:"",第一二專長對應:"中國文學(第二專長)	中國文學(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"中文系111B  必修	"},{科號:"11120CL  111400",課程中文名稱:"漢魏六朝文",課程英文名稱:"The Selected Reading of articles in Six Dynasties",學分數:"3",人限:"60",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程為16週課程。",停開註記:"",教室與上課時間:`HSS人社C405	F6F7F8
`,授課教師:`簡良如	CHIEN, LIANG-JU
`,擋修說明:"",課程限制說明:"",第一二專長對應:"中國文學(第二專長)	中國文學(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"中文系111B  必修	"},{科號:"11120CL  151100",課程中文名稱:"越南文學導讀",課程英文名稱:" ",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"近現代文學與文化研究類選修課程。華語文教學組認列課程。",停開註記:"",教室與上課時間:`HSS人社C402	R7R8R9
`,授課教師:`羅漪文	LO, YI-WEN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"中文系111B  選修	"},{科號:"11120CL  210300",課程中文名稱:"詞選",課程英文名稱:"Selected Readings from Ci Poetry",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"必選修課程：小說選、詞選、戲曲選、中國文學批評，四門選一門修習。",停開註記:"",教室與上課時間:`HSS人社C509	W7W8W9
`,授課教師:`陳建男	CHEN, CHIEN-NAN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"中國文學(第二專長)	中國文學(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"中文系110B  選修	"},{科號:"11120CL  210600",課程中文名稱:"子學名著選讀",課程英文名稱:"Selected Readings in Classic Chinese Philosophy",學分數:"3",人限:"35",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"必選修課程:經學名著選讀、子學名著選讀，二門選一門修習。面授+同步遠距教學, 課程進行方式詳見課程大綱.",停開註記:"",教室與上課時間:`HSS人社C509	MnM5M6
`,授課教師:`鍋島亞朱華	NABESHIMA,ASUKA
`,擋修說明:"",課程限制說明:"",第一二專長對應:"中國文學(第二專長)	中國文學(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"中文系110B  選修	"},{科號:"11120CL  210801",課程中文名稱:"聲韻學",課程英文名稱:"Chinese  Phonology",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程為16週課程。",停開註記:"",教室與上課時間:`HSS人社C509	R3R4Rn
`,授課教師:`邴尚白	BIING, SHANG-BAIR
`,擋修說明:"",課程限制說明:"",第一二專長對應:"中國文學(第二專長)	中國文學(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"中文系110B  必修	"},{科號:"11120CL  221700",課程中文名稱:"杜詩",課程英文名稱:"Poetry of Du Fu",學分數:"3",人限:"35",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"專書。古典文學類選修課程。",停開註記:"",教室與上課時間:`HSS人社C403	F5F6F7
`,授課教師:`陳國球	Chan Kwok Kou Leonard
`,擋修說明:"",課程限制說明:"",第一二專長對應:"中國文學(第二專長)	中國文學(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"中文系110B  選修	"},{科號:"11120CL  222100",課程中文名稱:"宋代社會與文化",課程英文名稱:"The social and cultural history of Song Dynasty",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"古典文學類、學術思想類選修課程。",停開註記:"",教室與上課時間:`HSS人社C405	F3F4Fn
`,授課教師:`林保全	LIN, BAO-QUAN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"中文系110B  選修	"},{科號:"11120CL  222200",課程中文名稱:"現代詩",課程英文名稱:"Modern Chinese Poetry",學分數:"3",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"111起必選修課程：現代詩、現代散文、現代小說、現代戲劇、現代文學理論，五門選一門修習。",停開註記:"",教室與上課時間:`HSS人社C405	W3W4Wn
`,授課教師:`楊佳嫻	YANG, CHIA-HSIEN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"中國文學(第二專長)	中國文學(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"中文系110B  選修	"},{科號:"11120CL  222300",課程中文名稱:"現代戲劇",課程英文名稱:"Modern Drama",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程為16週課程。111起必選修課程：現代詩、現代散文、現代小說、現代戲劇、現代文學理論，五門選一門修",停開註記:"",教室與上課時間:`HSS人社C405	T7T8T9
`,授課教師:`羅仕龍	LO, SHIH-LUNG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"中國文學(第二專長)	中國文學(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"中文系110B  選修	人社院學士班110BA 選修	人社院學士班110BB 選修	"},{科號:"11120CL  252200",課程中文名稱:"進階寫作：編採寫作",課程英文名稱:" ",學分數:"3",人限:"15",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"教師：黃奕瀠。需先修習通過「大學中文」或「基礎寫作一、二」。自由選修課程。",停開註記:"",教室與上課時間:`HSS人社C402	M7M8M9
`,授課教師:`聘任中	
`,擋修說明:"",課程限制說明:"中文系優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"中文系110B  選修	"},{科號:"11120CL  252300",課程中文名稱:"進階寫作：劇本創作",課程英文名稱:" ",學分數:"3",人限:"15",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"教師：許正平。需先修習通過「大學中文」或「基礎寫作一、二」。自由選修課程。",停開註記:"",教室與上課時間:`HSS人社C411	R7R8R9
`,授課教師:`聘任中	
`,擋修說明:"",課程限制說明:"中文系優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"中文系110B  選修	"},{科號:"11120CL  280800",課程中文名稱:"華語口語與表達",課程英文名稱:"Oral Performance in Chinese",學分數:"3",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"109前（含）華教組必修課程。110後（含）華教組選修課程。同步遠距教學，課程進行方式詳見課程大綱。",停開註記:"",教室與上課時間:`HSS人社C509	W2W3W4
`,授課教師:`王蒞文	MARTHA LIWEN WANG GALLAGHER
`,擋修說明:"",課程限制說明:"限大學部",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"中文系110B  選修	"},{科號:"11120CL  281000",課程中文名稱:"華語教材教法",課程英文名稱:"Methods and Materials in Chinese Language Teaching",學分數:"3",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"109前（含）華教組選修課程。110後（含）華教組必修課程。",停開註記:"",教室與上課時間:`HSS人社C405	R7R8R9
`,授課教師:`陳慶華	CHEN, CHING-HUA
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"中文系110B  選修	"},{科號:"11120CL  292000",課程中文名稱:"基礎影像敘事",課程英文名稱:"Fundamental Storytelling Strategies",學分數:"2",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"近現代文學與文化研究類選修課程。華語文教學組認列課程。",停開註記:"",教室與上課時間:`HSS人社C405	W7W8
`,授課教師:`游惠貞	YU, HUI-CHEN
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>未修過基礎影像敘事一<BR>未修過基礎影像敘事二<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)藝術學分學程",不可加簽說明:"",必選修說明:"中文系110B  選修	"},{科號:"11120CL  310200",課程中文名稱:"中國文學史二",課程英文名稱:"History of Chinese Literature (II)",學分數:"3",人限:"60",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程為16週課程。",停開註記:"",教室與上課時間:`HSS人社C509	R7R8R9
`,授課教師:`李貞慧	LEE, CHEN-HUI
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>曾修中國文學史一<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"限大學部2年級3年級4年級",第一二專長對應:"中國文學(第二專長)	中國文學(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"中文系109B  必修	"},{科號:"11120CL  330000",課程中文名稱:"史記",課程英文名稱:"Shi-Ji",學分數:"3",人限:"35",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程為16週課程。專書。古典文學類、學術思想類選修課程。",停開註記:"",教室與上課時間:`HSS人社C402	T3T4Tn
`,授課教師:`林聰舜	LIN, TSUNG-SHUN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"中國文學(第二專長)	中國文學(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"中文系109B  選修	"},{科號:"11120CL  330500",課程中文名稱:"楚辭",課程英文名稱:"Chu Ci",學分數:"3",人限:"35",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程為16週課程。專書。古典文學類選修課程。",停開註記:"",教室與上課時間:`HSS人社C403	M7M8M9
`,授課教師:`邴尚白	BIING, SHANG-BAIR
`,擋修說明:"",課程限制說明:"",第一二專長對應:"中國文學(第二專長)	中國文學(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"中文系109B  選修	"},{科號:"11120CL  330900",課程中文名稱:"莊子",課程英文名稱:"Chuang Tzu",學分數:"3",人限:"35",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程為16週課程。專書。學術思想類選修課程。",停開註記:"",教室與上課時間:`HSS人社C402	M3M4Mn
`,授課教師:`林聰舜	LIN, TSUNG-SHUN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"中國文學(第二專長)	中國文學(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"中文系109B  選修	"},{科號:"11120CL  331100",課程中文名稱:"陶詩",課程英文名稱:"Poetry of Tao Y. M.",學分數:"3",人限:"35",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程為16週課程。專書。古典文學類選修課程。",停開註記:"",教室與上課時間:`HSS人社C403	R7R8R9
`,授課教師:`許銘全	HSU, MING-CHUAN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"中國文學(第二專長)	中國文學(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"中文系109B  選修	"},{科號:"11120CL  332700",課程中文名稱:"東坡詞",課程英文名稱:"Ci Poetry of Su Shi",學分數:"3",人限:"35",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"專書。古典文學類選修課程。",停開註記:"",教室與上課時間:`HSS人社C403	W3W4Wn
`,授課教師:`陳建男	CHEN, CHIEN-NAN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"中國文學(第二專長)	中國文學(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"中文系109B  選修	"},{科號:"11120CL  350500",課程中文名稱:"中國文學批評",課程英文名稱:"Chinese Literary Criticism",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"111起必選修課程：小說選、詞選、戲曲選、中國文學批評，四門選一門修習。",停開註記:"",教室與上課時間:`HSS人社C403	RnR5R6
`,授課教師:`陳國球	Chan Kwok Kou Leonard
`,擋修說明:"",課程限制說明:"",第一二專長對應:"中國文學(第二專長)	中國文學(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"中文系109B  選修	"},{科號:"11120CL  360300",課程中文名稱:"儒林外史",課程英文名稱:"Rulin Waishi and Literati Culture in Late Imperial China",學分數:"3",人限:"35",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"專書。古典文學類選修課程。",停開註記:"",教室與上課時間:`HSS人社C405	MnM5M6
`,授課教師:`張閏熙	CHANG, JUN-HSI
`,擋修說明:"",課程限制說明:"",第一二專長對應:"中國文學(第二專長)	中國文學(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"中文系109B  選修	"},{科號:"11120CL  372600",課程中文名稱:"文學翻譯與翻譯文學",課程英文名稱:"Literary Translation",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程為16週課程。近現代文學與文化研究類選修課程。華語文教學組認列課程。",停開註記:"",教室與上課時間:`HSS人社C405	R3R4Rn
`,授課教師:`羅仕龍	LO, SHIH-LUNG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"中文系109B  選修	人社院學士班109BA 選修	"},{科號:"11120CL  382300",課程中文名稱:"閱讀與寫作教學方法",課程英文名稱:"Teaching Reading and Writing to Students of Chinese as a second Language",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程為16週課程。華語文教學組選修課程。",停開註記:"",教室與上課時間:`HSS人社C402	F3F4Fn
`,授課教師:`沈婉霖	SHEN, WAN-LIN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"中文系109B  選修	"},{科號:"11120CL  383000",課程中文名稱:"文言文教學",課程英文名稱:"Classical Chinese Teaching",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程為16週課程。華語文教學組選修課程。",停開註記:"",教室與上課時間:`HSS人社C402	W3W4Wn
`,授課教師:`劉承慧	LIU, CHENG-HUI
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"中文系109B  選修	"},{科號:"11120CL  410200",課程中文名稱:"中國思想史二",課程英文名稱:"History of Chinese Thought (II)",學分數:"3",人限:"60",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程為16週課程。同步＋非同步遠距教學課程，上課說明詳見課程大綱。",停開註記:"",教室與上課時間:`VC虛擬教室	M7M8M9
`,授課教師:`祝平次	CHU, PING-TZU
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>曾修中國思想史一<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"限大學部3年級4年級",第一二專長對應:"中國文學(第二專長)	中國文學(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"中文系108B  必修	"},{科號:"11120CL  430700",課程中文名稱:"易經",課程英文名稱:"I-Ching",學分數:"3",人限:"35",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"專書。學術思想類選修課程。",停開註記:"",教室與上課時間:`HSS人社C403	W7W8W9
`,授課教師:`黃忠天	HUANG, CHUNG-TIEN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"中國文學(第二專長)	中國文學(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"中文系108B  選修	"},{科號:"11120CL  441800",課程中文名稱:"文學與圖繪",課程英文名稱:"Literature and Pictorial Work",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程為16週課程。古典文學類選修課程。",停開註記:"",教室與上課時間:`HSS人社C405	TnT5T6
`,授課教師:`楊晉綺	YANG, CHIN-CHI
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"中文系108B  選修	"},{科號:"11120CL  470500",課程中文名稱:"漢語語法分析",課程英文名稱:"Chinese Grammatical Analysis",學分數:"3",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程為16週課程。華語文教學組選修課程。",停開註記:"",教室與上課時間:`HSS人社C402	T7T8T9
`,授課教師:`游文福	YEW BOON HOCK
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"中文系108B  選修	"},{科號:"11120CL  481900",課程中文名稱:"現代文學與性／別",課程英文名稱:"Gender and Sexuality in Modern Chinese Literature",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程為16週課程。近現代文學與文化研究類選修課程。華語文教學組認列課程。HSS性別研究學程",停開註記:"",教室與上課時間:`HSS人社C403	T3T4Tn
`,授課教師:`劉人鵬	LIU, JEN-PENG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)性別研究學分學程",不可加簽說明:"",必選修說明:"中文系108B  選修	人社院學士班108BA 選修	人社院學士班108BB 選修	人社院學士班109BA 選修	人社院學士班109BB 選修	人社院學士班110BA 選修	人社院學士班111BA 選修	人社院學士班111BB 選修	"},{科號:"11120CL  492100",課程中文名稱:"旅行與文學",課程英文名稱:"Travel and Literature",學分數:"3",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程為16週課程。近現代文學與文化研究類選修課程。華語文教學組認列課程。",停開註記:"",教室與上課時間:`HSS人社C403	MnM5M6
`,授課教師:`顏健富	GUAN, KEAN-FUNG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"中文系108B  選修	人社院學士班108BA 選修	"},{科號:"11120CL  492600",課程中文名稱:"西方漢學史",課程英文名稱:"The History of Western Sinology",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"本課程為16週課程。古典文學類、學術思想類選修課程。",停開註記:"",教室與上課時間:`HSS人社C509	T3T4Tn
`,授課教師:`侯道儒	SKONICKI DOUGLAS EDWARD
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"中文系108B  選修	"},{科號:"11120CL  502700",課程中文名稱:"對比分析與偏誤分析",課程英文名稱:"Comparative Analysis Theory and Error Analysis",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`HSS人社C501	MnM5M6
`,授課教師:`吳貞慧	WU, CHEN-HUEI
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"中文系111D  選修	中文系111M  選修	"},{科號:"11120CL  506100",課程中文名稱:"漢學英文二",課程英文名稱:"English for Chinese Studies Ⅱ",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程為16週課程。中文系碩士班、博士班學生選修，但不得列入畢業學分計算。",停開註記:"",教室與上課時間:`HSS人社C501	R2R3R4
`,授課教師:`侯道儒	SKONICKI DOUGLAS EDWARD
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"中文系111D  選修	中文系111M  選修	"},{科號:"11120CL  515500",課程中文名稱:"宋詩專題",課程英文名稱:" ",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程為16週課程。",停開註記:"",教室與上課時間:`HSS人Ｂ302A	W3W4Wn
`,授課教師:`李貞慧	LEE, CHEN-HUI
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"中文系111D  選修	中文系111M  選修	"},{科號:"11120CL  520900",課程中文名稱:"魏晉文學批評史料研究",課程英文名稱:"Readings on Literature Criticism of Wei-chin Period",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`HSS人社C501	W7W8W9
`,授課教師:`朱曉海	CHU, HSIAO-HAI
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"中文系111D  選修	中文系111M  選修	"},{科號:"11120CL  525100",課程中文名稱:"敘述理論專題",課程英文名稱:" ",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`HSS人社C501	F6F7F8
`,授課教師:`蔡英俊	TSAI, YING-CHUN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"中文系111D  選修	中文系111M  選修	"},{科號:"11120CL  525200",課程中文名稱:"古典小說的邊陲視域與異境書寫",課程英文名稱:"The Frontier in Traditional Chinese Fiction",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`HSS人Ｂ302A	T3T4Tn
`,授課教師:`張閏熙	CHANG, JUN-HSI
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"中文系111D  選修	中文系111M  選修	"},{科號:"11120CL  530100",課程中文名稱:"近現代小說專題",課程英文名稱:"Topics on Modern Chinese Novels",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程為16週課程。",停開註記:"",教室與上課時間:`HSS人社C501	T6T7T8
`,授課教師:`顏健富	GUAN, KEAN-FUNG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"中文系111D  選修	中文系111M  選修	亞際文化碩士學程111M  選修	"},{科號:"11120CL  535600",課程中文名稱:"文心雕龍研究",課程英文名稱:"The Literary Mind and the Carving of Dragons（Wen xin diao lung）",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程為16週課程。",停開註記:"",教室與上課時間:`HSS人Ｂ302A	MnM5M6
`,授課教師:`簡良如	CHIEN, LIANG-JU
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"中文系111D  選修	中文系111M  選修	"},{科號:"11120CL  535700",課程中文名稱:"語料分析與理學研究",課程英文名稱:"Topics on Corpus Analysis and Neo-Confucianism",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程為16週課程。",停開註記:"",教室與上課時間:`CC計中電二	T7T8T9
`,授課教師:`祝平次	CHU, PING-TZU
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"中文系111D  選修	中文系111M  選修	"},{科號:"11120CL  535800",課程中文名稱:"明代思想研究",課程英文名稱:" ",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`HSS人Ｂ302A	R6R7R8
`,授課教師:`鍋島亞朱華	NABESHIMA,ASUKA
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"中文系111D  選修	中文系111M  選修	"},{科號:"11120CL  561100",課程中文名稱:"道與藝：唐宋文學專題",課程英文名稱:"Topical Studies of Literature in the Tang and Sung Dynastics",學分數:"3",人限:"15",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"6週密集上課，上課時間詳見課程大綱",停開註記:"",教室與上課時間:`HSS人Ｂ302A	F3F4Fn
`,授課教師:`政大陳英傑	
許銘全	HSU, MING-CHUAN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"中文系111D  選修	中文系111M  選修	"},{科號:"11120CL  570800",課程中文名稱:"性／別研究",課程英文名稱:"Seminar on Gender/Sexuality Studies",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程為16週課程。",停開註記:"",教室與上課時間:`HSS人社C501	F2F3F4
`,授課教師:`劉人鵬	LIU, JEN-PENG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"中文系111D  選修	中文系111M  選修	亞際文化碩士學程111M  選修	"},{科號:"11120CL  600100",課程中文名稱:"論文研究",課程英文名稱:"Thesis",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限碩三以上修習",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"排除中文系碩士班1年級2年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"中文系111M  必修	"},{科號:"11120CL  700100",課程中文名稱:"論文研究",課程英文名稱:"Thesis",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限博三以上修習",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"排除中文系博士班1年級2年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"中文系111D  必修	"},{科號:"11120CLC 100101",課程中文名稱:"初級華語一",課程英文名稱:"Mandarin Basic I",學分數:"4",人限:"15",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`GEN II綜二602	M5M6W5W6
`,授課教師:`林宛蓉	LIN, WAN-JUNG
`,擋修說明:"",課程限制說明:"限外籍生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120CLC 100102",課程中文名稱:"初級華語一",課程英文名稱:"Mandarin Basic I",學分數:"4",人限:"15",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`GEN II綜二603	W3W4F3F4
`,授課教師:`許巧蒨	HSU, CHIAO-CHIEN
`,擋修說明:"",課程限制說明:"限外籍生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120CLC 100103",課程中文名稱:"初級華語一",課程英文名稱:"Mandarin Basic I",學分數:"4",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`GEN II綜二110	MaMbWaWb
`,授課教師:`戴淑珍	TAI, SHU-CHEN
`,擋修說明:"",課程限制說明:"限外籍生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120CLC 100104",課程中文名稱:"初級華語一",課程英文名稱:"Mandarin Basic I",學分數:"4",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`GEN II綜二602	TaTbRaRb
`,授課教師:`郭玫君	KUO, MEI-CHUN
`,擋修說明:"",課程限制說明:"限外籍生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120CLC 100201",課程中文名稱:"初級華語二",課程英文名稱:"Mandarin Basic Ⅱ",學分數:"4",人限:"15",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`GEN II綜二110	M5M6W5W6
`,授課教師:`李菊鳳	LEE, CHU-FENG
`,擋修說明:"",課程限制說明:"限外籍生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120CLC 100202",課程中文名稱:"初級華語二",課程英文名稱:"Mandarin Basic Ⅱ",學分數:"4",人限:"15",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`GEN II綜二614	W5W6F5F6
`,授課教師:`聘任中	
`,擋修說明:"",課程限制說明:"限外籍生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120CLC 100203",課程中文名稱:"初級華語二",課程英文名稱:"Mandarin Basic Ⅱ",學分數:"4",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`GEN II綜二103	TaTbRaRb
`,授課教師:`陳芷安	CHEN,CHIH-AN
`,擋修說明:"",課程限制說明:"限外籍生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120CLC 100204",課程中文名稱:"初級華語二",課程英文名稱:"Mandarin Basic Ⅱ",學分數:"4",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`GEN II綜二602	MaMbWaWb
`,授課教師:`許巧蒨	HSU, CHIAO-CHIEN
`,擋修說明:"",課程限制說明:"限外籍生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120CLC 100301",課程中文名稱:"初級華語三",課程英文名稱:"Mandarin Basic Ⅲ",學分數:"4",人限:"15",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`GEN II綜二604	T3T4R3R4
`,授課教師:`李菊鳳	LEE, CHU-FENG
`,擋修說明:"",課程限制說明:"限外籍生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120CLC 100302",課程中文名稱:"初級華語三",課程英文名稱:"Mandarin Basic Ⅲ",學分數:"4",人限:"15",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`GEN II綜二603	M7M8W7W8
`,授課教師:`陳芷安	CHEN,CHIH-AN
`,擋修說明:"",課程限制說明:"限外籍生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120CLC 100303",課程中文名稱:"初級華語三",課程英文名稱:"Mandarin Basic Ⅲ",學分數:"4",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`GEN II綜二103	MaMbWaWb
`,授課教師:`張晏綾	CHANG, YEN-LING
`,擋修說明:"",課程限制說明:"限外籍生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120CLC 100801",課程中文名稱:"初級台語一",課程英文名稱:"Taiwanese Basic I",學分數:"2",人限:"15",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`GEN II綜二603	T7T8
`,授課教師:`陳慶華	CHEN, CHING-HUA
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120CLC 100802",課程中文名稱:"初級台語二",課程英文名稱:"Taiwanese Basic II",學分數:"2",人限:"15",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`GEN II綜二604	W3W4
`,授課教師:`陳淑娟	CHEN, SHU-CHUAN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120CLC 101101",課程中文名稱:"初級華語生活會話一",課程英文名稱:"Mandarin Basic Conversation I",學分數:"2",人限:"15",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`GEN II綜二602	W3W4
`,授課教師:`林宛蓉	LIN, WAN-JUNG
`,擋修說明:"",課程限制說明:"限外籍生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120CLC 101102",課程中文名稱:"初級華語生活會話一",課程英文名稱:"Mandarin Basic Conversation I",學分數:"2",人限:"15",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`GEN II綜二602	T5T6
`,授課教師:`陳芷安	CHEN,CHIH-AN
`,擋修說明:"",課程限制說明:"限外籍生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120CLC 101103",課程中文名稱:"初級華語生活會話一",課程英文名稱:"Mandarin Basic Conversation I",學分數:"2",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`GEN II綜二110	RaRb
`,授課教師:`戴淑珍	TAI, SHU-CHEN
`,擋修說明:"",課程限制說明:"限外籍生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120CLC 101201",課程中文名稱:"初級華語生活會話二",課程英文名稱:"Mandarin Basic Conversation Ⅱ",學分數:"2",人限:"15",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`GEN II綜二602	M3M4
`,授課教師:`許巧蒨	HSU, CHIAO-CHIEN
`,擋修說明:"",課程限制說明:"限外籍生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120CLC 101202",課程中文名稱:"初級華語生活會話二",課程英文名稱:"Mandarin Basic Conversation Ⅱ",學分數:"2",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`GEN II綜二110	TaTb
`,授課教師:`戴淑珍	TAI, SHU-CHEN
`,擋修說明:"",課程限制說明:"限外籍生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120CLC 101301",課程中文名稱:"初級華語生活會話三",課程英文名稱:"Mandarin Basic Conversation Ⅲ",學分數:"2",人限:"15",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`GEN II綜二604	R7R8
`,授課教師:`陳芷安	CHEN,CHIH-AN
`,擋修說明:"",課程限制說明:"限外籍生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120CLC 200101",課程中文名稱:"中級華語一",課程英文名稱:"Mandarin Intermediate I",學分數:"4",人限:"15",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`GEN II綜二604	M5M6W5W6
`,授課教師:`李羿妏	YI-WEN LEE
`,擋修說明:"",課程限制說明:"限外籍生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120CLC 200102",課程中文名稱:"中級華語一",課程英文名稱:"Mandarin Intermediate I",學分數:"4",人限:"15",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`GEN II綜二110	T5T6R5R6
`,授課教師:`聘任中	
`,擋修說明:"",課程限制說明:"限外籍生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120CLC 200201",課程中文名稱:"中級華語二",課程英文名稱:"Mandarin Intermediate II",學分數:"4",人限:"15",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`GEN II綜二603	T5T6R5R6
`,授課教師:`陳慶華	CHEN, CHING-HUA
`,擋修說明:"",課程限制說明:"限外籍生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120CLC 200202",課程中文名稱:"中級華語二",課程英文名稱:"Mandarin Intermediate II",學分數:"4",人限:"15",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`GEN II綜二602	T7T8R7R8
`,授課教師:`郭玫君	KUO, MEI-CHUN
`,擋修說明:"",課程限制說明:"限外籍生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120CLC 200301",課程中文名稱:"中級華語三",課程英文名稱:"Mandarin Intermediate III",學分數:"4",人限:"15",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`GEN II綜二602	T3T4R3R4
`,授課教師:`林宛蓉	LIN, WAN-JUNG
`,擋修說明:"",課程限制說明:"限外籍生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120CLC 200302",課程中文名稱:"中級華語三",課程英文名稱:"Mandarin Intermediate III",學分數:"4",人限:"15",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`GEN II綜二110	M7M8W7W8
`,授課教師:`劉殿敏	DIEN-MIN, LIU
`,擋修說明:"",課程限制說明:"限外籍生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120CLC 300101",課程中文名稱:"中高級華語一",課程英文名稱:"Mandarin High-Intermediate I",學分數:"4",人限:"15",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`GEN II綜二603	M5M6W5W6
`,授課教師:`張晏綾	CHANG, YEN-LING
`,擋修說明:"",課程限制說明:"限外籍生",第一二專長對應:"華語與文化(第二專長)",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120CLC 300102",課程中文名稱:"中高級華語一",課程英文名稱:"Mandarin High-Intermediate I",學分數:"4",人限:"15",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`GEN II綜二603	T3T4R3R4
`,授課教師:`陳慶華	CHEN, CHING-HUA
`,擋修說明:"",課程限制說明:"限外籍生",第一二專長對應:"華語與文化(第二專長)",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120CLC 300200",課程中文名稱:"中高級華語二",課程英文名稱:"Mandarin High Intermediate II",學分數:"4",人限:"15",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`GEN II綜二110	T7T8R7R8
`,授課教師:`劉殿敏	DIEN-MIN, LIU
`,擋修說明:"",課程限制說明:"限外籍生",第一二專長對應:"華語與文化(第二專長)",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120CLC 300300",課程中文名稱:"中高級華語三",課程英文名稱:"Mandarin High-Intermediate  III",學分數:"3",人限:"15",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`GEN II綜二602	M7M8M9
`,授課教師:`林宛蓉	LIN, WAN-JUNG
`,擋修說明:"",課程限制說明:"限外籍生",第一二專長對應:"華語與文化(第二專長)	華語與文化(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120CLC 301100",課程中文名稱:"新聞華語一",課程英文名稱:"News Mandarin I",學分數:"2",人限:"15",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`GEN II綜二604	M7M8
`,授課教師:`李菊鳳	LEE, CHU-FENG
`,擋修說明:"",課程限制說明:"限外籍生",第一二專長對應:"華語與文化(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120CLC 400100",課程中文名稱:"高級華語一",課程英文名稱:"Mandarin Advanced I",學分數:"3",人限:"15",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`GEN II綜二604	T7T8T9
`,授課教師:`陳翊綺	CHEN, I-CHI
`,擋修說明:"",課程限制說明:"限外籍生",第一二專長對應:"華語與文化(第二專長)	華語與文化(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120CLC 400200",課程中文名稱:"高級華語二",課程英文名稱:"Mandarin Advanced II",學分數:"3",人限:"15",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`GEN II綜二602	W7W8W9
`,授課教師:`許巧蒨	HSU, CHIAO-CHIEN
`,擋修說明:"",課程限制說明:"限外籍生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120CLC 400300",課程中文名稱:"高級華語三",課程英文名稱:"Mandarin Advanced III",學分數:"3",人限:"15",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`GEN II綜二603	R7R8R9
`,授課教師:`李菊鳳	LEE, CHU-FENG
`,擋修說明:"",課程限制說明:"限外籍生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120CLC 401100",課程中文名稱:"商用華語一",課程英文名稱:"Business Chinese I",學分數:"3",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`GEN II綜二104	WaWbWc
`,授課教師:`黃歐喜強	OU, XI-QIANG
`,擋修說明:"",課程限制說明:"限外籍生",第一二專長對應:"華語與文化(第二專長)	華語與文化(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120CLC 401200",課程中文名稱:"商用華語二",課程英文名稱:"Business Chinese Ⅱ",學分數:"3",人限:"15",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`GEN II綜二604	W7W8W9
`,授課教師:`李羿妏	YI-WEN LEE
`,擋修說明:"",課程限制說明:"限外籍生",第一二專長對應:"華語與文化(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120COM 502000",課程中文名稱:"書報討論",課程英文名稱:"Seminar",學分數:"1",人限:"103",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"排除通訊所111下入學之碩士班一年級新生",停開註記:"",教室與上課時間:`DELTA台達216	F6F7
`,授課教師:`蔡育仁	TSAI, YUH-REN
吳仁銘	WU, JEN-MING
李祈均	LEE, CHI-CHUN
`,擋修說明:"",課程限制說明:"限通訊所",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"通訊所111D  必修	通訊所111M  必修	"},{科號:"11120COM 511000",課程中文名稱:"通訊之隨機程序",課程英文名稱:"Random Processes for Communications",學分數:"3",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"16週課程，本課程每週上課150分鐘，其餘時間由教授彈性運用。",停開註記:"",教室與上課時間:`DELTA台達210	T7T8W7W8
`,授課教師:`洪樂文	YAO-WIN HONG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"通訊所111D  選修	通訊所111M  選修	"},{科號:"11120COM 514000",課程中文名稱:"錯誤更正碼",課程英文名稱:"Error-Correcting Codes",學分數:"3",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程每週上課150分鐘，其餘時間由教授彈性運用。",停開註記:"",教室與上課時間:`DELTA台達208	M8M9W5W6
`,授課教師:`趙啟超	CHAO, CHI-CHAO
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"通訊所111D  選修	通訊所111M  選修	"},{科號:"11120COM 516000",課程中文名稱:"展頻通訊",課程英文名稱:"Spread Spectrum Communications",學分數:"3",人限:"22",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`DELTA台達212	T7T8R7
`,授課教師:`蔡育仁	TSAI, YUH-REN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:"通訊所111D  選修	通訊所111M  選修	"},{科號:"11120COM 518000",課程中文名稱:"通訊之數學方法",課程英文名稱:"Mathematical Methods for Communications",學分數:"3",人限:"53",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"欲加簽前請跟老師聯絡",停開註記:"",教室與上課時間:`DELTA台達209	M5M6R5
`,授課教師:`黃之浩	HUANG,CHIH-HAO
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"通訊所111D  選修	通訊所111M  選修	"},{科號:"11120COM 523200",課程中文名稱:"檢測與估計理論",課程英文名稱:"Detection and Estimation Theory",學分數:"3",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"超過人限優先加簽通訊所學生. 面授+非同步遠距教學, 本課程每週上課150分鐘,其餘時間由教授彈性運用.",停開註記:"",教室與上課時間:`DELTA台達211	M5M6W5W6
`,授課教師:`鍾偉和	CHUNG, WEI-HO
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"通訊所111D  選修	通訊所111M  選修	"},{科號:"11120COM 533500",課程中文名稱:"網路安全",課程英文名稱:"Network Security",學分數:"3",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"欲加簽前請跟老師聯絡",停開註記:"",教室與上課時間:`DELTA台達210	M2R2R3
`,授課教師:`黃之浩	HUANG,CHIH-HAO
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"通訊所111D  選修	通訊所111M  選修	"},{科號:"11120COM 534000",課程中文名稱:"無線網路",課程英文名稱:"Wireless Network",學分數:"3",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`DELTA台達106	T3T4R3
`,授課教師:`許健平	SHEU, JANG-PING
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"通訊所111D  選修	通訊所111M  選修	資工系108BA 選修	資工系108BB 選修	資工系108BC 選修	資工系111D  選修	資工系111M  選修	"},{科號:"11120COM 534500",課程中文名稱:"合作式通訊與網路",課程英文名稱:"Cooperative Communications and Networking",學分數:"3",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"16週課程",停開註記:"",教室與上課時間:`DELTA台達210	T3T4R4
`,授課教師:`劉光浩	LIU, KUANG-HAO
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"通訊所111D  選修	通訊所111M  選修	"},{科號:"11120COM 541000",課程中文名稱:"光纖通訊系統",課程英文名稱:"Optical Fiber Communication Systems",學分數:"3",人限:"32",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`DELTA台達202	R2R3R4
`,授課教師:`馮開明	FENG, KAI-MING
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"通訊所111D  選修	通訊所111M  選修	"},{科號:"11120COM 602000",課程中文名稱:"論文研究",課程英文名稱:"Thesis",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限碩二以上修習",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"排除碩士班1年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"通訊所111M  必修	"},{科號:"11120COM 702000",課程中文名稱:"論文研究",課程英文名稱:"Thesis",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限博二以上修習",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"排除博士班1年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"通訊所111D  必修	"},{科號:"11120CS  125000",課程中文名稱:"資料結構導論",課程英文名稱:"Introduction to Data Structure",學分數:"2",人限:"120",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"面授＋非同步遠距。需有C++或Python程式背景。上機教室資電323、326、328。",停開註記:"",教室與上課時間:`DELTA台達107	M5M6
`,授課教師:`韓永楷	HON WING KAI
`,擋修說明:"",課程限制說明:"排除電資院",第一二專長對應:"數據科學(第二專長)",學分學程對應:"(跨領域)生物資訊學分學程/(跨領域)人工智慧與應用基礎學分學程/(跨領域)音樂科技與健康學分學程",不可加簽說明:"",必選修說明:""},{科號:"11120CS  135500",課程中文名稱:"計算機程式設計一",課程英文名稱:"Introduction to Programming (I)",學分數:"3",人限:"200",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"RaRbRc上機教室在資電326、328、323，面授+同步遠距教學。",停開註記:"",教室與上課時間:`DELTA台達108	TaTbTc
`,授課教師:`陳煥宗	CHEN, HWANN-TZONG
`,擋修說明:"",課程限制說明:"資工系大學部優先，第3次選課起開放全校修習",第一二專長對應:"資訊工程(第二專長)	資訊工程(第一專長)	數據科學(第二專長)	電機資訊(第一專長)",學分學程對應:"(跨領域)積體電路設計學分學程/(跨領域)人工智慧與應用基礎學分學程/(跨領域)音樂科技與健康學分學程/(跨領域)神經科學學分學程",不可加簽說明:"",必選修說明:"資工系111BA 必修	資工系111BB 必修	資工系111BC 必修	電資院學士班111B  必修	"},{科號:"11120CS  135601",課程中文名稱:"計算機程式設計二",課程英文名稱:"Introduction to Programming (II)",學分數:"3",人限:"75",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"本課程上150分鐘，其餘時間由教授視情況彈性運用。T56在資電323、326、328電腦教室上課。",停開註記:"",教室與上課時間:`DELTA台達105	T5T6F5F6
`,授課教師:`郭柏志	KUO, PO-CHIH
`,擋修說明:"",課程限制說明:"【上學期原修計算機程式設計一CS  135501(胡敏君老師)同學選課優先,第3次選課起開放】",第一二專長對應:"資訊工程(第一專長)	電機資訊(第一專長)",學分學程對應:"(跨領域)積體電路設計學分學程/(跨領域)神經科學學分學程",不可加簽說明:"",必選修說明:"資工系111BA 必修	資工系111BB 必修	資工系111BC 必修	電資院學士班111B  必修	電資院學士班111BA 必修	"},{科號:"11120CS  135602",課程中文名稱:"計算機程式設計二",課程英文名稱:"Introduction to Programming (II)",學分數:"3",人限:"110",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程上150分鐘，其餘時間由教授視情況彈性運用。F56在資電323、326、328電腦教室上課。",停開註記:"",教室與上課時間:`DELTA台達107	T5T6F5F6
`,授課教師:`楊舜仁	YANG, SHUN-REN
`,擋修說明:"",課程限制說明:"【上學期原修計算機程式設計一CS  135502(楊舜仁老師)同學選課優先,第3次選課起開放】",第一二專長對應:"資訊工程(第一專長)	電機資訊(第一專長)",學分學程對應:"(跨領域)積體電路設計學分學程/(跨領域)神經科學學分學程",不可加簽說明:"",必選修說明:"資工系111BA 必修	資工系111BB 必修	資工系111BC 必修	電資院學士班111B  必修	電資院學士班111BA 必修	"},{科號:"11120CS  135800",課程中文名稱:"Python語言程式入門",課程英文名稱:"Introduction to Programming in Python",學分數:"3",人限:"150",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"不可加簽。面授＋同步＋非同步遠距。擋修：EECS1210。W3W4上機教室為資電323、326、328。",停開註記:"",教室與上課時間:`DELTA台達108	M2W3W4
`,授課教師:`周百祥	CHOU, PAI-HSIANG
`,擋修說明:"",課程限制說明:"電資院,大學部優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"(跨領域)人工智慧與應用基礎學分學程/(跨領域)音樂科技與健康學分學程/(跨領域)神經科學學分學程",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:"資工系110BA 選修	資工系110BB 選修	資工系110BC 選修	資工系111BA 選修	資工系111BB 選修	資工系111BC 選修	電資院學士班110B  選修	電資院學士班110BA 選修	電資院學士班111BA 選修	"},{科號:"11120CS  150100",課程中文名稱:"英語聽講",課程英文名稱:"English Listening & Speaking",學分數:"3",人限:"35",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"不可加簽。",停開註記:"",教室與上課時間:`DELTA台達106	W7W8W9
`,授課教師:`郭詩芝	KUO, SHIH-CHIH
`,擋修說明:"",課程限制說明:"限資工系",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:"資工系111BA 選修	資工系111BB 選修	資工系111BC 選修	電資院學士班111B  選修	電資院學士班111BA 選修	"},{科號:"11120CS  210000",課程中文名稱:"電路與電子學一",課程英文名稱:"Circuits and Electronics (I)",學分數:"3",人限:"90",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`DELTA台達109	T5T6F5F6
`,授課教師:`邱&#28702;德	CHIU, CHING-TE
`,擋修說明:"",課程限制說明:"資工系大學部優先，第3次選課起開放全校修習",第一二專長對應:"資訊工程(第一專長)",學分學程對應:"(跨領域)積體電路設計學分學程",不可加簽說明:"",必選修說明:"資工系110BA 選修	資工系110BB 選修	資工系110BC 選修	電資院學士班110B  選修	電資院學士班110BA 選修	"},{科號:"11120CS  235100",課程中文名稱:"資料結構",課程英文名稱:"Data Structures",學分數:"3",人限:"250",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"台達104、105教室同步轉播。",停開註記:"",教室與上課時間:`DELTA台達105	M3M4W2
`,授課教師:`陳宜欣	CHEN, YI-SHIN
`,擋修說明:"",課程限制說明:"資工系大學部,電資院學士班大學部優先，第3次選課起開放全校修習",第一二專長對應:"資訊工程(第二專長)	資訊工程(第一專長)	數據科學(第二專長)	電機資訊(第一專長)",學分學程對應:"(跨領域)積體電路設計學分學程/(跨領域)數據科學學分學程/(跨領域)人工智慧與應用基礎學分學程/(跨領域)音樂科技與健康學分學程",不可加簽說明:"",必選修說明:"資工系110BA 必修	電資院學士班110B  必修	電資院學士班110BA 必修	"},{科號:"11120CS  241001",課程中文名稱:"軟體設計與實驗",課程英文名稱:"Software Studio",學分數:"3",人限:"75",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"R7R8在資電326、328電腦教室上課。",停開註記:"",教室與上課時間:`EECS資電 326	R7R8
DELTA台達105	T7T8
`,授課教師:`吳尚鴻	WU, SHAN-HUNG
`,擋修說明:"",課程限制說明:"資工系大學部2年級,電資院學士班大學部2年級優先，第3次選課起開放全校修習",第一二專長對應:"資訊工程(第一專長)	電機資訊(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"資工系110BA 必修	資工系110BB 必修	資工系110BC 必修	電資院學士班110B  必修	電資院學士班110BA 必修	"},{科號:"11120CS  241002",課程中文名稱:"軟體設計與實驗",課程英文名稱:"Software Studio",學分數:"3",人限:"75",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"T7T8在資電326、328電腦教室上課。",停開註記:"",教室與上課時間:`DELTA台達105	R7R8
EECS資電 326	T7T8
`,授課教師:`朱宏國	CHU, HUNG-KUO
`,擋修說明:"",課程限制說明:"資工系大學部2年級,電資院學士班大學部2年級優先，第3次選課起開放全校修習",第一二專長對應:"資訊工程(第一專長)	電機資訊(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"資工系110BA 必修	資工系110BB 必修	資工系110BC 必修	電資院學士班110B  必修	電資院學士班110BA 必修	"},{科號:"11120CS  333201",課程中文名稱:"機率",課程英文名稱:"Probability",學分數:"3",人限:"75",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`DELTA台達109	W3W4F4
`,授課教師:`李端興	LEE, DUAN-SHIN
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>微積分一-成績需C-以上<BR>微積分Ａ一-成績需C-以上<BR>微積分Ｂ一-成績需C-以上<BR>微積分一(數學系)-成績需C-以上<BR>曾修微積分Ａ一(基本科目免修測試)<BR>曾修微積分Ｂ一(基本科目免修測試)<BR>曾修微積分一(數學系)(基礎科目免修測試)<BR><br>上述條件任選一科，而且<br><BR>曾修微積分二<BR>曾修微積分Ｂ二<BR>曾修微積分二(數學系)<BR>曾修微積分Ａ二<BR><br>上述條件任選一科，則不擋修。</div>`,課程限制說明:"資工系大學部2年級,電資院學士班大學部2年級優先，第3次選課起開放全校修習",第一二專長對應:"資訊工程(第一專長)	電機資訊(第一專長)",學分學程對應:"(跨領域)生物資訊學分學程/(跨領域)數據科學學分學程/(跨領域)人工智慧與應用基礎學分學程/(跨領域)音樂科技與健康學分學程/(跨領域)神經科學學分學程",不可加簽說明:"",必選修說明:"資工系110BA 必修	資工系110BB 必修	資工系110BC 必修	電資院學士班109BA 必修	電資院學士班110B  必修	電資院學士班110BA 必修	"},{科號:"11120CS  333202",課程中文名稱:"機率",課程英文名稱:"Probability",學分數:"3",人限:"75",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`DELTA台達104	W3W4F4
`,授課教師:`許秋婷	HSU, CHIU-TING
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>微積分一-成績需C-以上<BR>微積分Ａ一-成績需C-以上<BR>微積分Ｂ一-成績需C-以上<BR>微積分一(數學系)-成績需C-以上<BR>曾修微積分Ａ一(基本科目免修測試)<BR>曾修微積分Ｂ一(基本科目免修測試)<BR>曾修微積分一(數學系)(基礎科目免修測試)<BR><br>上述條件任選一科，而且<br><BR>曾修微積分二<BR>曾修微積分Ｂ二<BR>曾修微積分二(數學系)<BR>曾修微積分Ａ二<BR><br>上述條件任選一科，則不擋修。</div>`,課程限制說明:"資工系大學部2年級,電資院學士班大學部2年級優先，第3次選課起開放全校修習",第一二專長對應:"資訊工程(第一專長)	電機資訊(第一專長)",學分學程對應:"(跨領域)人工智慧與應用基礎學分學程/(跨領域)音樂科技與健康學分學程/(跨領域)神經科學學分學程",不可加簽說明:"",必選修說明:"資工系110BA 必修	資工系110BB 必修	資工系110BC 必修	電資院學士班109BA 必修	電資院學士班110B  必修	電資院學士班110BA 必修	"},{科號:"11120CS  340400",課程中文名稱:"編譯器設計",課程英文名稱:"Compiler Design",學分數:"3",人限:"90",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`DELTA台達107	T7T8R7
`,授課教師:`李政崑	LEE, JENQ-KUEN
`,擋修說明:"",課程限制說明:"資工系大學部優先，第3次選課起開放全校修習",第一二專長對應:"資訊工程(第一專長)",學分學程對應:"(跨領域)積體電路設計學分學程",不可加簽說明:"",必選修說明:"資工系109BA 選修	資工系109BB 選修	資工系109BC 選修	電資院學士班109B  選修	電資院學士班109BA 選修	"},{科號:"11120CS  342300",課程中文名稱:"作業系統",課程英文名稱:"Operating Systems",學分數:"3",人限:"75",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程上150分鐘，其餘時間由教授視情況彈性運用。",停開註記:"",教室與上課時間:`DELTA台達108	T3T4R3R4
`,授課教師:`王家祥	WANG, JIA-SHUNG
`,擋修說明:"",課程限制說明:"資工系大學部優先，第3次選課起開放全校修習",第一二專長對應:"資訊工程(第二專長)	資訊工程(第一專長)	電機資訊(第一專長)",學分學程對應:"(跨領域)積體電路設計學分學程",不可加簽說明:"",必選修說明:"資工系109BA 必修	資工系109BB 必修	資工系109BC 必修	電資院學士班108B  選修	電資院學士班108BA 選修	電資院學士班109B  必修	電資院學士班109BA 選修	電資院學士班110B  選修	電資院學士班110BA 選修	電資院學士班111B  選修	電資院學士班111BA 選修	"},{科號:"11120CS  343400",課程中文名稱:"競技程式設計二",課程英文名稱:"Competitive Programming Training (II)",學分數:"3",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"MaMbMc上機教室：資電326、328。",停開註記:"",教室與上課時間:`DELTA台達105	MaMbMc
`,授課教師:`黃兆源	HUANG, CHAO-YUAN
`,擋修說明:"",課程限制說明:"資工系大學部優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"資工系108BA 選修	資工系108BB 選修	資工系108BC 選修	資工系109BA 選修	資工系109BB 選修	資工系109BC 選修	資工系110BA 選修	資工系110BB 選修	資工系110BC 選修	資工系111BA 選修	資工系111BB 選修	資工系111BC 選修	電資院學士班108B  選修	電資院學士班108BA 選修	電資院學士班109B  選修	電資院學士班109BA 選修	電資院學士班110B  選修	電資院學士班110BA 選修	電資院學士班111B  選修	電資院學士班111BA 選修	"},{科號:"11120CS  357000",課程中文名稱:"多媒體技術概論",課程英文名稱:"Introduction to Multimedia",學分數:"3",人限:"90",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`DELTA台達103	T5F5F6
`,授課教師:`賴尚宏	LAI, SHANG-HONG
`,擋修說明:"",課程限制說明:"資工系大學部優先，第3次選課起開放全校修習",第一二專長對應:"資訊工程(第一專長)",學分學程對應:"(跨領域)金融科技與區塊鏈學分學程",不可加簽說明:"",必選修說明:"資工系108BA 選修	資工系108BB 選修	資工系108BC 選修	資工系109BA 選修	資工系109BB 選修	資工系109BC 選修	電資院學士班108B  選修	電資院學士班108BA 選修	電資院學士班109B  選修	電資院學士班109BA 選修	"},{科號:"11120CS  390100",課程中文名稱:"系統整合實作一",課程英文名稱:"System Integration Implementation  I",學分數:"2",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限資工系學生，非資工系欲選課者，請先連絡系辦並以加簽方式辦理。",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"限資工系大學部",第一二專長對應:"資訊工程(第一專長)	電機資訊(第一專長)",學分學程對應:"(跨領域)資訊傳媒學分學程",不可加簽說明:"",必選修說明:"資工系109BA 必修	資工系109BB 必修	資工系109BC 必修	電資院學士班109B  必修	電資院學士班109BA 必修	"},{科號:"11120CS  390200",課程中文名稱:"系統整合實作二",課程英文名稱:"System Integration Implementation  II",學分數:"2",人限:"0",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限資工系於大四期間確定出國交換之學生，請以加簽方式選課。",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>系統整合實作一-成績需C-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"限資工系大學部",第一二專長對應:"資訊工程(第一專長)	電機資訊(第一專長)",學分學程對應:"(跨領域)資訊傳媒學分學程",不可加簽說明:"",必選修說明:"資工系109BA 必修	資工系109BB 必修	資工系109BC 必修	電資院學士班109B  必修	電資院學士班109BA 必修	"},{科號:"11120CS  410001",課程中文名稱:"計算機結構",課程英文名稱:"Computer Architecture",學分數:"3",人限:"75",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`DELTA台達105	T3T4R3
`,授課教師:`王廷基	WANG, TING-CHI
`,擋修說明:"",課程限制說明:"資工系大學部2年級優先，第3次選課起開放全校修習",第一二專長對應:"資訊工程(第二專長)	資訊工程(第一專長)	電機資訊(第一專長)",學分學程對應:"(跨領域)積體電路設計學分學程",不可加簽說明:"",必選修說明:"資工系110BA 必修	資工系110BB 必修	資工系110BC 必修	電資院學士班109B  必修	電資院學士班109BA 必修	電資院學士班110B  必修	電資院學士班110BA 必修	"},{科號:"11120CS  410002",課程中文名稱:"計算機結構",課程英文名稱:"Computer Architecture",學分數:"3",人限:"75",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`DELTA台達103	T3T4R3
`,授課教師:`黃稚存	HUANG, CHIH-TSUN
`,擋修說明:"",課程限制說明:"資工系大學部2年級優先，第3次選課起開放全校修習",第一二專長對應:"資訊工程(第二專長)	資訊工程(第一專長)	電機資訊(第一專長)",學分學程對應:"(跨領域)積體電路設計學分學程",不可加簽說明:"",必選修說明:"資工系110BA 必修	資工系110BB 必修	資工系110BC 必修	電資院學士班109B  必修	電資院學士班109BA 必修	電資院學士班110B  必修	電資院學士班110BA 必修	"},{科號:"11120CS  410100",課程中文名稱:"嵌入式系統概論",課程英文名稱:"Introduction to Embedded Systems",學分數:"3",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"T3T4電腦教室：資電326、328。",停開註記:"",教室與上課時間:`DELTA台達102	T3T4R3
`,授課教師:`郭永清	KUO, YUNG-CHING
`,擋修說明:"",課程限制說明:"大學部優先，第3次選課起開放全校修習",第一二專長對應:"資訊工程(第一專長)	電機資訊(第一專長)",學分學程對應:"(台聯大)太空科技與工程學分學程",不可加簽說明:"",必選修說明:"資工系108BA 選修	資工系108BB 選修	資工系108BC 選修	資工系109BA 選修	資工系109BB 選修	資工系109BC 選修	電資院學士班108B  選修	電資院學士班108BA 選修	電資院學士班109B  選修	電資院學士班109BA 選修	"},{科號:"11120CS  411100",課程中文名稱:"平行計算概論",課程英文名稱:"Introduction to Parallel Computing",學分數:"3",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"不可加簽。",停開註記:"",教室與上課時間:`DELTA台達106	T6T7T8
`,授課教師:`李濬屹	LEE, CHUN-YI
`,擋修說明:"",課程限制說明:"大學部優先，第3次選課起開放全校修習",第一二專長對應:"資訊工程(第一專長)",學分學程對應:"(跨領域)人工智慧與應用進階學分學程/(跨領域)人工智慧與應用基礎學分學程",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:"資工系108BA 選修	資工系108BB 選修	資工系108BC 選修	資工系109BA 選修	資工系109BB 選修	資工系109BC 選修	電資院學士班108B  選修	電資院學士班108BA 選修	電資院學士班109B  選修	電資院學士班109BA 選修	"},{科號:"11120CS  431100",課程中文名稱:"計算方法設計",課程英文名稱:"Design and Analysis of Algorithms",學分數:"3",人限:"75",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`DELTA台達105	W3W4F3
`,授課教師:`盧錦隆	LU, CHIN LUNG
`,擋修說明:"",課程限制說明:"資工系大學部優先，第3次選課起開放全校修習",第一二專長對應:"資訊工程(第二專長)	資訊工程(第一專長)	電機資訊(第一專長)",學分學程對應:"(跨領域)積體電路設計學分學程/(跨領域)音樂科技與健康學分學程",不可加簽說明:"",必選修說明:"資工系109BA 必修	資工系109BB 必修	資工系109BC 必修	電資院學士班109B  必修	電資院學士班109BA 必修	"},{科號:"11120CS  446100",課程中文名稱:"軟體工程",課程英文名稱:"Software Engineering",學分數:"3",人限:"95",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`DELTA台達105	M5M6R5
`,授課教師:`黃慶育	HUANG, CHING-YU
`,擋修說明:"",課程限制說明:"資工系大學部優先，第3次選課起開放全校修習",第一二專長對應:"資訊工程(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"資工系108BA 選修	資工系108BB 選修	資工系108BC 選修	資工系109BA 選修	資工系109BB 選修	資工系109BC 選修	電資院學士班108B  選修	電資院學士班108BA 選修	電資院學士班109B  選修	電資院學士班109BA 選修	"},{科號:"11120CS  471000",課程中文名稱:"資料庫系統概論",課程英文名稱:"Introduction to Database Systems",學分數:"3",人限:"90",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"上課方式：課堂教學+遠距輔助教學。",停開註記:"",教室與上課時間:`DELTA台達103	M7M8R6
`,授課教師:`吳尚鴻	WU, SHAN-HUNG
`,擋修說明:`<div>
  擋修對象 : 資工系 <br>
  先修科目 : <BR><BR>資料結構-成績需C-以上<BR><br>上述條件一定要有，而且<br><BR>計算機程式設計-成績需C-以上<BR>計算機程式設計一-成績需C-以上<BR><br>上述條件任選一科，則不擋修。</div>`,課程限制說明:"資工系大學部優先，第3次選課起開放全校修習",第一二專長對應:"資訊工程(第二專長)	資訊工程(第一專長)	數據科學(第二專長)",學分學程對應:"(跨領域)生物資訊學分學程/(跨領域)數據科學學分學程",不可加簽說明:"",必選修說明:"資工系108BA 選修	資工系108BB 選修	資工系108BC 選修	資工系109BA 選修	資工系109BB 選修	資工系109BC 選修	電資院學士班108B  選修	電資院學士班108BA 選修	電資院學士班109B  選修	電資院學士班109BA 選修	"},{科號:"11120CS  512000",課程中文名稱:"超大型積體電路系統設計",課程英文名稱:"VLSI System Design",學分數:"3",人限:"0",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"電腦教室資電323。務必填寫表單https://reurl.cc/DXqG1E同時送出電子加簽、出席第1堂課",停開註記:"",教室與上課時間:`DELTA台達102	T7T8R7R8
`,授課教師:`黃稚存	HUANG, CHIH-TSUN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)積體電路設計學分學程",不可加簽說明:"",必選修說明:"資工系108BA 選修	資工系108BB 選修	資工系108BC 選修	資工系111D  選修	資工系111M  選修	半導體學院111D  選修	半導體學院111M  選修	電資院學士班108B  選修	電資院學士班108BA 選修	"},{科號:"11120CS  512200",課程中文名稱:"超大型積體電路量產可行性設計",課程英文名稱:"VLSI Design for Manufacturability",學分數:"3",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`DELTA台達104	T5T6R7
`,授課教師:`麥偉基	MAK WAI KEI
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"資工系108BA 選修	資工系108BB 選修	資工系108BC 選修	資工系111D  選修	資工系111M  選修	半導體學院111D  選修	半導體學院111M  選修	電資院學士班108B  選修	電資院學士班108BA 選修	"},{科號:"11120CS  524500",課程中文名稱:"寬頻行動通訊",課程英文名稱:"Broadband Mobile Communications",學分數:"3",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`DELTA台達108	T7T8R7
`,授課教師:`高榮駿	KAO, JUNG-CHUN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"通訊所111D  選修	通訊所111M  選修	資工系111D  選修	資工系111M  選修	"},{科號:"11120CS  526200",課程中文名稱:"多媒體網路與系統",課程英文名稱:"Multimedia Networking and Systems",學分數:"3",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"先修科目CS3570 Introduction to Multimedia and EECS3020 Introduction to Computer Networks",停開註記:"",教室與上課時間:`DELTA台達102	M7M8R6
`,授課教師:`徐正炘	HSU, CHENG-HSIN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"資工系108BA 選修	資工系108BB 選修	資工系108BC 選修	資工系109BA 選修	資工系109BB 選修	資工系109BC 選修	資工系111D  選修	資工系111M  選修	電資院學士班108B  選修	電資院學士班108BA 選修	電資院學士班109B  選修	電資院學士班109BA 選修	"},{科號:"11120CS  531200",課程中文名稱:"圖形理論",課程英文名稱:"Graph Theory",學分數:"3",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`DELTA台達102	M3M4W2
`,授課教師:`蔡明哲	TSAI, MING-JER
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)人工智慧與應用進階學分學程/(跨領域)人工智慧與應用基礎學分學程",不可加簽說明:"",必選修說明:"資工系108BA 選修	資工系108BB 選修	資工系108BC 選修	資工系111D  選修	資工系111M  選修	電資院學士班108B  選修	電資院學士班108BA 選修	"},{科號:"11120CS  533100",課程中文名稱:"排隊理論",課程英文名稱:"Queuing Theory",學分數:"3",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"面授＋同步遠距教學。",停開註記:"",教室與上課時間:`EECS資電 128	T7T8F5
`,授課教師:`林華君	LIN, HWA-CHUN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"通訊所111D  選修	通訊所111M  選修	資工系111D  選修	資工系111M  選修	"},{科號:"11120CS  534100",課程中文名稱:"高等賽局理論與應用",課程英文名稱:"Advanced game Theory and its applications",學分數:"3",人限:"75",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程上150分鐘，其餘時間由教授視情況彈性運用。",停開註記:"",教室與上課時間:`DELTA台達103	T6T7T8T9
`,授課教師:`張隆紋	CHANG, LONG-WEN
`,擋修說明:"",課程限制說明:"電資院,碩士班博士班優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"資工系111D  選修	資工系111M  選修	"},{科號:"11120CS  536300",課程中文名稱:"區塊鏈的技術與應用",課程英文名稱:"Blockchain Technologies and Applications",學分數:"3",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`DELTA台達104	T3T4R4
`,授課教師:`蔡仁松	TSAY, REN-SONG
`,擋修說明:"",課程限制說明:"資工系碩士班博士班優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"資工系111D  選修	資工系111M  選修	"},{科號:"11120CS  537100",課程中文名稱:"計算理論",課程英文名稱:"Theory of Computation",學分數:"3",人限:"75",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程上150分鐘，其餘時間由教授視情況彈性運用。",停開註記:"",教室與上課時間:`EECS資電 127	M7M8R7R8
`,授課教師:`石維寬	SHIH, WEI-KUAN
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>計算方法設計-成績需C-以上<BR>離散數學-成績需C-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"資工系大學部碩士班博士班優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"資工系108BA 選修	資工系108BB 選修	資工系108BC 選修	資工系109BA 選修	資工系109BB 選修	資工系109BC 選修	資工系111D  選修	資工系111M  選修	電資院學士班108B  選修	電資院學士班108BA 選修	電資院學士班109B  選修	電資院學士班109BA 選修	"},{科號:"11120CS  541200",課程中文名稱:"虛擬化技術與應用",課程英文名稱:"Virtualization technology and its applications",學分數:"3",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`DELTA台達106	F5F6F7
`,授課教師:`李哲榮	LEE, CHE-RUNG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"資工系108BA 選修	資工系108BB 選修	資工系108BC 選修	資工系109BA 選修	資工系109BB 選修	資工系109BC 選修	資工系111D  選修	資工系111M  選修	電資院學士班108B  選修	電資院學士班108BA 選修	電資院學士班109B  選修	電資院學士班109BA 選修	"},{科號:"11120CS  550000",課程中文名稱:"計算機圖學",課程英文名稱:"Computer Graphics",學分數:"3",人限:"150",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"不可加簽。修課人限已達教室座位最大容量，已無任何加簽的空間。",停開註記:"",教室與上課時間:`DELTA台達107	WaWbWc
`,授課教師:`李潤容	LEE, RUEN-RONE
`,擋修說明:"",課程限制說明:"資工系碩士班博士班,資安所碩士班博士班,資應所碩士班博士班優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:"資工系108BA 選修	資工系108BB 選修	資工系108BC 選修	資工系109BA 選修	資工系109BB 選修	資工系109BC 選修	資工系111D  選修	資工系111M  選修	電資院學士班108B  選修	電資院學士班108BA 選修	電資院學士班109B  選修	電資院學士班109BA 選修	"},{科號:"11120CS  551100",課程中文名稱:"虛擬實境",課程英文名稱:"Virtual Reality",學分數:"3",人限:"0",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"以加簽方式選課。",停開註記:"",教室與上課時間:`DELTA台達106	MaMbMc
`,授課教師:`胡敏君	MIN-CHUN HU
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)資訊傳媒學分學程",不可加簽說明:"",必選修說明:"資工系108BA 選修	資工系108BB 選修	資工系108BC 選修	資工系109BA 選修	資工系109BB 選修	資工系109BC 選修	資工系111D  選修	資工系111M  選修	電資院學士班108B  選修	電資院學士班108BA 選修	電資院學士班109B  選修	電資院學士班109BA 選修	"},{科號:"11120CS  554000",課程中文名稱:"圖形識別",課程英文名稱:"Pattern Recognition",學分數:"3",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`DELTA台達106	M5M6R4
`,授課教師:`許秋婷	HSU, CHIU-TING
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)人工智慧與應用進階學分學程/(跨領域)人工智慧與應用基礎學分學程",不可加簽說明:"",必選修說明:"資工系111D  選修	資工系111M  選修	"},{科號:"11120CS  555200",課程中文名稱:"偏鄉智慧醫療專題實作",課程英文名稱:"Practice Project of Medical Intelligent Services In Remote Areas",學分數:"2",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`DELTA台達108	F5F6
`,授課教師:`林沿妊	LIN, YEN-JEN
林文綺	LIN, WEN-CHI
唐傳義	TANG, CHUAN-YI
`,擋修說明:"",課程限制說明:"服科所大學部碩士班,資工系大學部碩士班優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"資工系108BA 選修	資工系108BB 選修	資工系108BC 選修	資工系109BA 選修	資工系109BB 選修	資工系109BC 選修	資工系111D  選修	資工系111M  選修	電資院學士班108B  選修	電資院學士班108BA 選修	電資院學士班109B  選修	電資院學士班109BA 選修	"},{科號:"11120CS  560400",課程中文名稱:"人工智慧與藝術導論",課程英文名稱:"Introduction to Artificial Intelligence and Arts",學分數:"3",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`EECS資電 224	T5T6T7
`,授課教師:`吳中浩	WU, CHUNG-HAO
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"資工系108BA 選修	資工系108BB 選修	資工系108BC 選修	資工系111D  選修	資工系111M  選修	電資院學士班108B  選修	電資院學士班108BA 選修	"},{科號:"11120CS  561200",課程中文名稱:"演化計算",課程英文名稱:"Evolutionary Computation",學分數:"3",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"先修科目:Programming",停開註記:"",教室與上課時間:`DELTA台達106	M7M8M9
`,授課教師:`丁川康	TING, CHUAN-KANG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"資工系111D  選修	資工系111M  選修	"},{科號:"11120CS  570100",課程中文名稱:"資料科學",課程英文名稱:"Data Science",學分數:"3",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"上課方式：課堂教學+遠距輔助教學。",停開註記:"",教室與上課時間:`DELTA台達109	T7T8T9
`,授課教師:`沈之涯	SHEN, CHIH-YA
`,擋修說明:"",課程限制說明:"",第一二專長對應:"數據科學(第二專長)",學分學程對應:"(跨領域)人工智慧與應用進階學分學程/(跨領域)人工智慧與應用基礎學分學程/(跨領域)神經科學學分學程",不可加簽說明:"",必選修說明:"資工系111D  選修	資工系111M  選修	"},{科號:"11120CS  573100",課程中文名稱:"音樂資訊檢索",課程英文名稱:"Music Information Retrieval",學分數:"3",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`DELTA台達102	TnT5T6
`,授課教師:`蘇黎	SU, LI
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)音樂科技與健康學分學程",不可加簽說明:"",必選修說明:"資工系108BA 選修	資工系108BB 選修	資工系108BC 選修	資工系111D  選修	資工系111M  選修	電資院學士班108B  選修	電資院學士班108BA 選修	"},{科號:"11120CS  580200",課程中文名稱:"研究方法二",課程英文名稱:"Research Methodology (II)",學分數:"2",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"尚未找到指導教授者請勿選課。",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"限資工系",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"資工系111M  選修	"},{科號:"11120CS  591000",課程中文名稱:"書報討論",課程英文名稱:"Seminar",學分數:"1",人限:"200",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"台達106、107同步轉播。",停開註記:"",教室與上課時間:`DELTA台達107	W5W6
`,授課教師:`郭柏志	KUO, PO-CHIH
林瀚仚	LIN, HAN-HSUAN
`,擋修說明:"",課程限制說明:"限資工系碩士班1年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"資工系111M  必修	"},{科號:"11120CS  613200",課程中文名稱:"高等邏輯合成",課程英文名稱:"Advanced Logic Synthesis",學分數:"3",人限:"15",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`EECS資電 224	M5M6W4
`,授課教師:`黃婷婷	HWANG, TING-TING
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"資工系111D  選修	資工系111M  選修	"},{科號:"11120CS  631200",課程中文名稱:"平行計算方法設計",課程英文名稱:"Parallel Algorithm Design",學分數:"3",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`DELTA台達106	W3W4F3
`,授課教師:`王炳豐	WANG, BIING-FENG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)人工智慧與應用進階學分學程/(跨領域)人工智慧與應用基礎學分學程",不可加簽說明:"",必選修說明:"資工系111D  選修	資工系111M  選修	"},{科號:"11120CS  690000",課程中文名稱:"論文研究",課程英文名稱:"Thesis",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限資工系碩二以上修習",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"排除資工系碩士班1年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"資工系111M  必修	"},{科號:"11120CS  725300",課程中文名稱:"網路系統之理論與實作專題",課程英文名稱:"Special Topics in Theory and Implementation of Network Systems",學分數:"2",人限:"0",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"以加簽方式選課。",停開註記:"",教室與上課時間:`DELTA台達615	RaRb
`,授課教師:`高榮駿	KAO, JUNG-CHUN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"資工系111D  選修	資工系111M  選修	"},{科號:"11120CS  742500",課程中文名稱:"即時系統專題",課程英文名稱:"Special Topics on Real-Time Systems",學分數:"2",人限:"0",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"以加簽方式選課。",停開註記:"停開",教室與上課時間:`EECS資電 125	M1M2
`,授課教師:`石維寬	SHIH, WEI-KUAN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"資工系111D  選修	資工系111M  選修	"},{科號:"11120CS  742600",課程中文名稱:"資源配置專題",課程英文名稱:"Special Topics on Resource Allocation",學分數:"2",人限:"0",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"以加簽方式選課。",停開註記:"",教室與上課時間:`EECS資電 125	F3F4
`,授課教師:`林華君	LIN, HWA-CHUN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"資工系111D  選修	資工系111M  選修	"},{科號:"11120CS  746100",課程中文名稱:"軟體工程專題",課程英文名稱:"Special Topics in Software Engineering",學分數:"2",人限:"0",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"以加簽方式選課。",停開註記:"",教室與上課時間:`EECS資電 127	F3F4
`,授課教師:`黃慶育	HUANG, CHING-YU
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"資工系111D  選修	資工系111M  選修	"},{科號:"11120CS  760200",課程中文名稱:"智慧型代理程式專題",課程英文名稱:"Special Topics : Intelligent Agents",學分數:"2",人限:"0",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"以加簽方式選課。",停開註記:"",教室與上課時間:`EECS資電 125	R7R8
`,授課教師:`蘇豐文	SOO, VON-WUN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"資工系111D  選修	資工系111M  選修	"},{科號:"11120CS  760300",課程中文名稱:"智慧型機器人專題",課程英文名稱:"Special Topics on Intelligent Robotics",學分數:"2",人限:"0",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"以加簽方式選課。",停開註記:"",教室與上課時間:`EECS資電 125	RaRb
`,授課教師:`李濬屹	LEE, CHUN-YI
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"資工系111D  選修	資工系111M  選修	"},{科號:"11120CS  760400",課程中文名稱:"邊緣智慧專題",課程英文名稱:"Special Topics On Edge Intelligence/AI",學分數:"2",人限:"0",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"以加簽方式選課。",停開註記:"",教室與上課時間:`EECS資電 125	T7T8
`,授課教師:`邱德泉	CHIU, TE-CHUAN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"資工系111D  選修	資工系111M  選修	"},{科號:"11120CS  771000",課程中文名稱:"資料庫系統專題一",課程英文名稱:"Special Topics in Data Base Management System(I)",學分數:"2",人限:"0",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"以加簽方式選課。",停開註記:"",教室與上課時間:`DELTA台達613	W3W4
`,授課教師:`陳宜欣	CHEN, YI-SHIN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"資工系111D  選修	資工系111M  選修	"},{科號:"11120CS  890000",課程中文名稱:"論文研究",課程英文名稱:"Thesis",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限資工博二以上修習",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"排除博士班1年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"資工系111D  必修	"},{科號:"11120CSR 500100",課程中文名稱:"書報討論",課程英文名稱:"Seminar",學分數:"1",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`GEN III綜三 203	F6F7
`,授課教師:`林崇榮	LIN, CHRONG JUNG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"半導體學院111D  必修	半導體學院111M  必修	"},{科號:"11120CSR 500200",課程中文名稱:"領導統御",課程英文名稱:"Leadership",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"xclass",停開註記:"",教室與上課時間:`MS材料418	T5T6W5W6
`,授課教師:`李炯霆	LI,  JEONG-TYNG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"半導體學院111D  必修	半導體學院111M  必修	"},{科號:"11120CSR 500300",課程中文名稱:"業界實習",課程英文名稱:"Industry Internship",學分數:"3",人限:"0",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限半導體研究學院生申請加簽,學院依繳交之實習申請書審核是否同意加簽",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"限半導體學院",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"半導體學院111D  必修	半導體學院111M  必修	"},{科號:"11120CSR 510200",課程中文名稱:"三維及次世代記憶體",課程英文名稱:"3D and Next Generation Memories",學分數:"3",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`GEN III綜三LRB	R6R7R8
`,授課教師:`白田理一郎	RIICHIRO SHIROTA
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"半導體學院111D  選修	半導體學院111M  選修	"},{科號:"11120CSR 510300",課程中文名稱:"人工類神經突觸及記憶體運算元件",課程英文名稱:"Artificial Neuromorphic Synapse and Memory Computing Device",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`GEN III綜三LRA	R6R7R8
`,授課教師:`謝易叡	YI-JUI HSIEH
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"半導體學院111D  選修	半導體學院111M  選修	"},{科號:"11120CSR 530300",課程中文名稱:"設計自動化二",課程英文名稱:"Design automation (Ⅱ)",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`GEN III綜三LRA	T3T4W3W4
`,授課教師:`李炯霆	LI,  JEONG-TYNG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"半導體學院111D  選修	半導體學院111M  選修	"},{科號:"11120CSR 530400",課程中文名稱:"全流程智慧系統設計基礎一",課程英文名稱:"Essentials of Intelligent System Design Flow Ⅰ",學分數:"1",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`GEN III綜三LRA	F2F3F4
`,授課教師:`王廷基	WANG, TING-CHI
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"半導體學院111D  選修	半導體學院111M  選修	"},{科號:"11120CSR 530600",課程中文名稱:"運用Synopsys HAPS進行系統單晶片設計驗證",課程英文名稱:"FPGA Prototyping Using Synopsys HAPS",學分數:"1",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`GEN III綜三LRB	R2R3R4
`,授課教師:`馬席彬	MA, HSI-PIN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"半導體學院111D  選修	半導體學院111M  選修	"},{科號:"11120CSR 540200",課程中文名稱:"製程整合",課程英文名稱:"Process Integration",學分數:"2",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`GEN III綜三LRA	M7M8
`,授課教師:`聘任中	
`,擋修說明:"",課程限制說明:"半導體學院優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"半導體學院111D  選修	半導體學院111M  選修	"},{科號:"11120CSR 540400",課程中文名稱:"光學鄰近修正",課程英文名稱:"Optical Proximity Correction",學分數:"2",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`GEN III綜三LRB	T3T4
`,授課教師:`高蔡勝	KAO, TSAI-SHENG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"半導體學院111D  選修	半導體學院111M  選修	"},{科號:"11120CSR 540500",課程中文名稱:"微影、蝕刻、鍍膜、清洗、製程設備與控制",課程英文名稱:"Litho Process & Control, scanner, track, metrology, Deposition, Etching, Cleaning",學分數:"3",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`GEN III綜三LRA	R2R3R4
`,授課教師:`聘任中	
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"半導體學院111D  選修	半導體學院111M  選修	"},{科號:"11120CSR 540600",課程中文名稱:"極紫外光微影原理",課程英文名稱:"Principles of Extreme-Ultraviolet Lithography",學分數:"2",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"同步遠距",停開註記:"",教室與上課時間:`GEN III綜三LRA	FnF5
`,授課教師:`聘任中	
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"半導體學院111D  選修	半導體學院111M  選修	"},{科號:"11120CSR 540700",課程中文名稱:"奈米世代封裝技術",課程英文名稱:"Packaging for Nanoelectronics",學分數:"2",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`GEN III綜三LRA	W7W8
`,授課教師:`聘任中	
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"半導體學院111D  選修	半導體學院111M  選修	"},{科號:"11120CSR 540800",課程中文名稱:"先進半導體製程測量",課程英文名稱:"Advanced Semiconductor Process Metrology",學分數:"3",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`GEN III綜三 631	R5R6R7
`,授課教師:`聘任中	
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"半導體學院111D  選修	半導體學院111M  選修	"},{科號:"11120CSR 600000",課程中文名稱:"論文研究",課程英文名稱:"Thesis",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"半導體學院111M  必修	"},{科號:"11120CSR 800000",課程中文名稱:"論文研究",課程英文名稱:"Thesis",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"半導體學院111D  必修	"},{科號:"11120DMS 210500",課程中文名稱:"醫學科學實驗",課程英文名稱:"Medical Science Laboratory",學分數:"2",人限:"24",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`LS II生二103	R5R6R7R8
`,授課教師:`王群超	WANG, CHUN-CHAO
邱于芯	CHIU, YU-HSIN
彭明德	PERNG, MING-DER
`,擋修說明:"",課程限制說明:"限醫科系",第一二專長對應:"醫學科學(第二專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"醫科系110B  必修	"},{科號:"11120DMS 240200",課程中文名稱:"分子生物學",課程英文名稱:"Molecular Biology",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"第一專長選「醫科」者必修",停開註記:"",教室與上課時間:`LS II生二 109	M3M4W2
`,授課教師:`王群超	WANG, CHUN-CHAO
李政昇	LEE, CHENG-SHENG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"醫學科學(第二專長)	醫學科學(第一專長)",學分學程對應:"(跨領域)生物產業技術學分學程/(跨領域)生物資訊學分學程",不可加簽說明:"",必選修說明:"醫科系110B  必修	"},{科號:"11120DMS 270200",課程中文名稱:"轉譯醫學",課程英文名稱:"Translational Medicine",學分數:"2",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`LS II生二 107	M7M8
`,授課教師:`邱于芯	CHIU, YU-HSIN
林愷悌	LIN, KAI-TI
`,擋修說明:"",課程限制說明:"醫科系優先，第3次選課起開放全校修習",第一二專長對應:"醫學科學(第二專長)	醫學科學(第一專長)",學分學程對應:"(跨領域)生物科技管理學分學程/(跨領域)醫學科技學分學程",不可加簽說明:"",必選修說明:"醫科系110B  必修	"},{科號:"11120DMS 274200",課程中文名稱:"醫用寄生蟲概論",課程英文名稱:"Introduction to Medical Parasitology",學分數:"2",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`LS II生二217	W3W4
`,授課教師:`黃建銘	HUANG, JIAN-MING
`,擋修說明:"",課程限制說明:"醫科系優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"醫科系110B  選修	"},{科號:"11120DMS 301100",課程中文名稱:"專題研究",課程英文名稱:"Undergraduate Research",學分數:"1",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"指導教授限生科院專任教師",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"",第一二專長對應:"醫學科學(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"醫科系109B  必修	"},{科號:"11120DMS 301200",課程中文名稱:"學士論文",課程英文名稱:"Bachelor Thesis",學分數:"1",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"指導教授限生科院專任教師",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"",第一二專長對應:"醫學科學(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"醫科系109B  必修	"},{科號:"11120DMS 370100",課程中文名稱:"生物醫學工程",課程英文名稱:"Biomedical Engineering",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"選課限已修「細胞生物學」修習者",停開註記:"",教室與上課時間:`LS II生二 107	F6F7F8
`,授課教師:`湯學成	TANG, SHIUE-CHENG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"醫學科學(第二專長)	醫學科學(第一專長)",學分學程對應:"(跨領域)生物產業技術學分學程/(跨領域)生物科技管理學分學程/(跨領域)醫學科技學分學程",不可加簽說明:"",必選修說明:"醫科系109B  必修	"},{科號:"11120DMS 370400",課程中文名稱:"醫學統計與流行病學",課程英文名稱:"Medical Statistics and Epidemiology",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`LS II生二 113	R6R7R8
`,授課教師:`蔡慧如	TSAI, HUI-JU
`,擋修說明:"",課程限制說明:"",第一二專長對應:"醫學科學(第二專長)	醫學科學(第一專長)",學分學程對應:"(跨領域)生物資訊學分學程/(跨領域)醫學科技學分學程",不可加簽說明:"",必選修說明:"醫科系110B  必修	"},{科號:"11120DMS 370600",課程中文名稱:"醫學微生物與免疫學",課程英文名稱:"Medical Microbiology and Immunology",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"建議先修細胞生物及分子生物相關課程",停開註記:"",教室與上課時間:`LS II生二 109	M6M7M8
`,授課教師:`張晃猷	CHANG, HWAN-YOU
王慧菁	WANG, HUI-CHING
李政昇	LEE, CHENG-SHENG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"醫學科學(第二專長)	醫學科學(第一專長)",學分學程對應:"(跨領域)生物產業技術學分學程/(跨領域)醫學科技學分學程",不可加簽說明:"",必選修說明:"醫科系109B  必修	"},{科號:"11120DMS 371400",課程中文名稱:"醫學倫理學",課程英文名稱:"Medical Ethics",學分數:"1",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"與張苑琤教師合授",停開註記:"",教室與上課時間:`LS II生二 107	T4
`,授課教師:`聘任中	
陳令儀	CHEN, LINYI
`,擋修說明:"",課程限制說明:"醫科系大學部優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"(跨領域)生物科技管理學分學程",不可加簽說明:"",必選修說明:"醫科系109B  必修	"},{科號:"11120DMS 374400",課程中文名稱:"基因體資料科學",課程英文名稱:"Genomic Data Science",學分數:"1",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"授課教師蘇明威、林建維",停開註記:"",教室與上課時間:`LS II生二220	W5W6
`,授課教師:`聘任中	
`,擋修說明:"",課程限制說明:"醫科系優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"醫科系109B  選修	"},{科號:"11120DMS 375200",課程中文名稱:"生理量測與音樂健康照護",課程英文名稱:"Medical Measurement in the Application of Music Healthcare",學分數:"2",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`LS II生二 213	R6R7
`,授課教師:`陳令儀	CHEN, LINYI
蘇郁惠	SU, YU-HUEI
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)音樂科技與健康學分學程/(跨領域)醫學科技學分學程",不可加簽說明:"",必選修說明:"醫科系109B  選修	"},{科號:"11120DMS 391200",課程中文名稱:"書報討論",課程英文名稱:"Seminar",學分數:"1",人限:"10",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`LS II生二 105	R2
`,授課教師:`徐子勝	HSU, TZU-SHENG
`,擋修說明:"",課程限制說明:"限醫科系大學部3年級4年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"醫科系109B  必修	"},{科號:"11120DMS 391201",課程中文名稱:"書報討論",課程英文名稱:"Seminar",學分數:"1",人限:"10",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`LS II生二 109	R2
`,授課教師:`周雅菁	YA-CHING CHOU
`,擋修說明:"",課程限制說明:"限醫科系大學部3年級4年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"醫科系109B  必修	"},{科號:"11120DMS 391202",課程中文名稱:"書報討論",課程英文名稱:"Seminar",學分數:"1",人限:"10",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`LS II生二 113	R2
`,授課教師:`邱于芯	CHIU, YU-HSIN
`,擋修說明:"",課程限制說明:"限醫科系大學部3年級4年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"醫科系109B  必修	"},{科號:"11120DMS 391203",課程中文名稱:"書報討論",課程英文名稱:"Seminar",學分數:"1",人限:"10",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`LS II生二207	R2
`,授課教師:`林郁婷	LIN, YU-TING
`,擋修說明:"",課程限制說明:"限醫科系大學部3年級4年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"醫科系109B  必修	"},{科號:"11120E   200100",課程中文名稱:"感測器與物聯網",課程英文名稱:"Sensors and IoT",學分數:"3",人限:"24",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"面授＋非同步遠距教學",停開註記:"",教室與上課時間:`ENG I工一 211	W2W3W4
`,授課教師:`李昇憲	LI, SHENG-SHIAN
`,擋修說明:"",課程限制說明:"工學院,大學部2年級3年級4年級優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120E   500100",課程中文名稱:"書報討論",課程英文名稱:"Seminar",學分數:"1",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"Restricted to students of CHE/PME/MSE/BME(M/D) and IEEM (M)",停開註記:"",教室與上課時間:`ENG I工一 106	T5T6
`,授課教師:`胡育誠	HU, YU-CHEN
`,擋修說明:"",課程限制說明:"限醫工所碩士班博士班,化工系碩士班博士班,工工系碩士班博士班,材料系碩士班博士班,奈微所碩士班博士班,動機系碩士班博士班,外籍生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120E   500300",課程中文名稱:"創新創業與營運管理實務",課程英文名稱:"Innovation, Start-Ups and Company Operation",學分數:"3",人限:"25",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限特定對象優先修習：工學院碩士班、博士班、大學部大三（含）以上",停開註記:"",教室與上課時間:`DELTA台達321	W5W6W7
`,授課教師:`傅建中	FU, CHIEN-CHUNG
`,擋修說明:"",課程限制說明:"醫工所碩士班博士班,化工系碩士班博士班,工工系碩士班博士班,工學院學士班碩士班博士班,材料系碩士班博士班,奈微所碩士班博士班,前瞻產博學程碩士班博士班,動機系碩士班博士班優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"(跨領域)創新創業學分學程/(跨領域)金融科技與區塊鏈學分學程",不可加簽說明:"",必選修說明:""},{科號:"11120ECON100201",課程中文名稱:"經濟學原理二",課程英文名稱:"Principles of Economics (II)",學分數:"3",人限:"150",新生保留人數:"0",通識對象:"*3",通識類別:"核心通識Core GE courses 4",授課語言:"中",備註:"【108(含)前入學生視為核心向度四】",停開註記:"",教室與上課時間:`MXIC旺宏懷樸	M7M8M9
`,授課教師:`廖肇寧	LIAO, CHAO-NING
`,擋修說明:"",課程限制說明:"【上學期原修經濟學原理一ECON100101(廖肇寧老師)同學選課優先,第3次選課起開放】",第一二專長對應:"經濟(第二專長)	經濟(第一專長)	工業工程與工程管理(第一專長)	計量財務金融(第一專長)",學分學程對應:"(跨領域)創新創業學分學程",不可加簽說明:"",必選修說明:"經濟系111BA 必修	經濟系111BB 必修	人社院學士班111BA 選修	人社院學士班111BB 選修	計財系111B  必修	科管院學士班111B  必修	"},{科號:"11120ECON100202",課程中文名稱:"經濟學原理二",課程英文名稱:"Principles of Economics (II)",學分數:"3",人限:"105",新生保留人數:"0",通識對象:"*3",通識類別:"核心通識Core GE courses 4",授課語言:"中",備註:"【108(含)前入學生視為核心向度四】",停開註記:"",教室與上課時間:`TSMC台積224	R3R4Rn
`,授課教師:`李宜	LEE, YI
`,擋修說明:"",課程限制說明:"【上學期原修經濟學原理一ECON100102(余朝恩老師)同學選課優先,第3次選課起開放】",第一二專長對應:"經濟(第二專長)	經濟(第一專長)	工業工程與工程管理(第一專長)	計量財務金融(第一專長)",學分學程對應:"(跨領域)創新創業學分學程",不可加簽說明:"",必選修說明:"經濟系111BA 必修	經濟系111BB 必修	人社院學士班111BA 選修	人社院學士班111BB 選修	計財系111B  必修	科管院學士班111B  必修	"},{科號:"11120ECON100203",課程中文名稱:"經濟學原理二",課程英文名稱:"Principles of Economics (II)",學分數:"3",人限:"120",新生保留人數:"0",通識對象:"*3",通識類別:"核心通識Core GE courses 4",授課語言:"英",備註:"不開放加簽,【108(含)前入學生視為核心向度四】",停開註記:"",教室與上課時間:`TSMC台積103	R5R6R7
`,授課教師:`周嗣文	CHOU, SZU-WEN
`,擋修說明:"",課程限制說明:"【上學期原修經濟學原理一ECON100103(周嗣文老師)同學選課優先,第3次選課起開放】",第一二專長對應:"經濟(第二專長)	經濟(第一專長)	工業工程與工程管理(第一專長)	計量財務金融(第一專長)",學分學程對應:"(跨領域)創新創業學分學程",不可加簽說明:"",必選修說明:"經濟系111BA 必修	經濟系111BB 必修	人社院學士班111BA 選修	人社院學士班111BB 選修	計財系111B  必修	科管院學士班111B  必修	"},{科號:"11120ECON100204",課程中文名稱:"經濟學原理二",課程英文名稱:"Principles of Economics (II)",學分數:"3",人限:"100",新生保留人數:"0",通識對象:"*3",通識類別:"核心通識Core GE courses 4",授課語言:"中",備註:"【108(含)前入學生視為核心向度四】",停開註記:"",教室與上課時間:`TSMC台積103	F2F3F4
`,授課教師:`朱筱蕾	CHU, HSIAO-LEI
`,擋修說明:"",課程限制說明:"【上學期原修經濟學原理一ECON100104(朱筱蕾老師)同學選課優先,第3次選課起開放】",第一二專長對應:"經濟(第二專長)	經濟(第一專長)	工業工程與工程管理(第一專長)	計量財務金融(第一專長)",學分學程對應:"(跨領域)創新創業學分學程",不可加簽說明:"",必選修說明:"經濟系111BA 必修	經濟系111BB 必修	人社院學士班111BA 選修	人社院學士班111BB 選修	計財系111B  必修	科管院學士班111B  必修	"},{科號:"11120ECON100205",課程中文名稱:"經濟學原理二",課程英文名稱:"Principles of Economics (II)",學分數:"3",人限:"155",新生保留人數:"0",通識對象:"*3",通識類別:"核心通識Core GE courses 4",授課語言:"英",備註:"【108(含)前入學生視為核心向度四】",停開註記:"",教室與上課時間:`GEN IV綜四121	W5W6W7
`,授課教師:`周瑞賢	CHOU, JUI-HSIEN
`,擋修說明:"",課程限制說明:"【上學期原修經濟學原理一ECON100105(周瑞賢老師)同學選課優先,第3次選課起開放】",第一二專長對應:"經濟(第二專長)	經濟(第一專長)	工業工程與工程管理(第一專長)	計量財務金融(第一專長)",學分學程對應:"(跨領域)創新創業學分學程",不可加簽說明:"",必選修說明:"經濟系111BA 必修	經濟系111BB 必修	人社院學士班111BA 選修	人社院學士班111BB 選修	計財系111B  必修	科管院學士班111B  必修	"},{科號:"11120ECON100206",課程中文名稱:"經濟學原理二",課程英文名稱:"Principles of Economics (II)",學分數:"3",人限:"102",新生保留人數:"0",通識對象:"*3",通識類別:"核心通識Core GE courses 4",授課語言:"中",備註:"【108(含)前入學生視為核心向度四】",停開註記:"",教室與上課時間:`TSMC台積103	F7F8F9
`,授課教師:`唐震宏	TANG, JENN-HONG
`,擋修說明:"",課程限制說明:"【上學期原修經濟學原理一ECON100106(唐震宏老師)同學選課優先,第3次選課起開放】",第一二專長對應:"經濟(第二專長)	經濟(第一專長)	工業工程與工程管理(第一專長)	計量財務金融(第一專長)",學分學程對應:"(跨領域)創新創業學分學程",不可加簽說明:"",必選修說明:"經濟系111BA 必修	經濟系111BB 必修	人社院學士班111BA 選修	人社院學士班111BB 選修	計財系111B  必修	科管院學士班111B  必修	"},{科號:"11120ECON127201",課程中文名稱:"會計學二",課程英文名稱:"Accounting (II)",學分數:"3",人限:"90",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`TSMC台積224	F7F8F9
`,授課教師:`黃天偉	HWANG,TIEN-WEI
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>會計學一-成績需C-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"【上學期原修會計學一ECON127101(黃天偉老師)同學選課優先,第3次選課起開放】",第一二專長對應:"經濟(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"經濟系111BA 必修	經濟系111BB 必修	科管院學士班111B  必修	"},{科號:"11120ECON127202",課程中文名稱:"會計學二",課程英文名稱:"Accounting (II)",學分數:"3",人限:"80",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`TSMC台積103	W2W3W4
`,授課教師:`沈瑜峰	SHEN, YU-FENG
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>會計學一-成績需C-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"【上學期原修會計學一ECON127102(沈瑜峰老師)同學選課優先,第3次選課起開放】",第一二專長對應:"經濟(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"經濟系111BA 必修	經濟系111BB 必修	科管院學士班111B  必修	"},{科號:"11120ECON206201",課程中文名稱:"個體經濟學二",課程英文名稱:"Microeconomics (II)",學分數:"3",人限:"110",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"本課程上課4小時",停開註記:"",教室與上課時間:`TSMC台積224	W3W4F3F4
`,授課教師:`周瑞賢	CHOU, JUI-HSIEN
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>曾修個體經濟學一<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"【上學期原修個體經濟學一ECON206101(周瑞賢老師)同學選課優先,第3次選課起開放】",第一二專長對應:"經濟(第二專長)	經濟(第一專長)	計量財務金融(第二專長)	計量財務金融(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"經濟系110BA 必修	經濟系110BB 必修	科管院學士班110B  必修	"},{科號:"11120ECON206202",課程中文名稱:"個體經濟學二",課程英文名稱:"Microeconomics (II)",學分數:"3",人限:"95",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`TSMC台積224	W7W8W9
`,授課教師:`黃賀寶	WONG, HO PO
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>曾修個體經濟學一<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"【上學期原修個體經濟學一ECON206102(黃賀寶老師)同學選課優先,第3次選課起開放】",第一二專長對應:"經濟(第二專長)	經濟(第一專長)	計量財務金融(第二專長)	計量財務金融(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"經濟系110BA 必修	經濟系110BB 必修	科管院學士班108BA 選修	科管院學士班109BA 選修	科管院學士班110B  必修	科管院學士班110BA 選修	"},{科號:"11120ECON206203",課程中文名稱:"個體經濟學二",課程英文名稱:"Microeconomics (II)",學分數:"3",人限:"90",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程上150分鐘，其餘時間由教授彈性運用",停開註記:"",教室與上課時間:`TSMC台積309	T3T4R3R4
`,授課教師:`吳世英	WU, SHIH-YING
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>曾修個體經濟學一<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"【上學期原修個體經濟學一ECON206103(吳世英老師)同學選課優先,第3次選課起開放】",第一二專長對應:"經濟(第二專長)	經濟(第一專長)	計量財務金融(第二專長)	計量財務金融(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"經濟系110BA 必修	經濟系110BB 必修	科管院學士班110B  必修	"},{科號:"11120ECON206204",課程中文名稱:"個體經濟學二",課程英文名稱:"Microeconomics (II)",學分數:"3",人限:"120",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"本課程上課4小時",停開註記:"",教室與上課時間:`TSMC台積309	W3W4F3F4
`,授課教師:`蔡璧涵	TSAI, PI-HAN
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>曾修個體經濟學一<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"【上學期原修個體經濟學一ECON206104(蔡璧涵老師)同學選課優先,第3次選課起開放】",第一二專長對應:"經濟(第二專長)	經濟(第一專長)	計量財務金融(第二專長)	計量財務金融(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"經濟系110BA 必修	經濟系110BB 必修	科管院學士班108BA 選修	科管院學士班109BA 選修	科管院學士班110B  必修	科管院學士班110BA 選修	"},{科號:"11120ECON210201",課程中文名稱:"貨幣銀行學二",課程英文名稱:"Money and Banking(II)",學分數:"3",人限:"81",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`TSMC台積224	MnM5M6
`,授課教師:`郭俊宏	KUO, CHUN-HUNG
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>貨幣銀行學一-成績需C-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"【上學期原修貨幣銀行學一ECON210101(郭俊宏老師)同學選課優先,第3次選課起開放】",第一二專長對應:"經濟(第二專長)	經濟(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"經濟系108BA 選修	經濟系108BB 選修	經濟系109BA 選修	經濟系109BB 選修	經濟系110BA 選修	經濟系110BB 選修	科管院學士班110B  必修	"},{科號:"11120ECON210202",課程中文名稱:"貨幣銀行學二",課程英文名稱:"Money and Banking(II)",學分數:"3",人限:"80",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`TSMC台積103	T2T3T4
`,授課教師:`黃朝熙	HUANG, CHAO-HSI
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>貨幣銀行學一-成績需C-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"【上學期原修貨幣銀行學一ECON210102(黃朝熙老師)同學選課優先,第3次選課起開放】",第一二專長對應:"經濟(第二專長)	經濟(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"經濟系108BA 選修	經濟系108BB 選修	經濟系109BA 選修	經濟系109BB 選修	經濟系110BA 選修	經濟系110BB 選修	科管院學士班110B  必修	"},{科號:"11120ECON216201",課程中文名稱:"統計學二",課程英文名稱:"Statistics II",學分數:"3",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`TSMC台積224	R7R8R9
`,授課教師:`余朝恩	YU, CHAO-EN
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>統計學一-成績需C-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"【上學期原修統計學一ECON216101(余朝恩老師)同學選課優先,第3次選課起開放】",第一二專長對應:"經濟(第一專長)	計量財務金融(第二專長)",學分學程對應:"(跨領域)數據科學學分學程",不可加簽說明:"",必選修說明:"經濟系110BA 必修	經濟系110BB 必修	科管院學士班110B  必修	"},{科號:"11120ECON216202",課程中文名稱:"統計學二",課程英文名稱:"Statistics II",學分數:"3",人限:"155",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`MXIC旺宏懷樸	MnM5M6
`,授課教師:`馮炳萱	FUNG, PING-HSUAN
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>統計學一-成績需C-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"【上學期原修統計學一ECON216102(馮炳萱老師)同學選課優先,第3次選課起開放】",第一二專長對應:"經濟(第一專長)	計量財務金融(第二專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"經濟系110BA 必修	經濟系110BB 必修	科管院學士班110B  必修	科管院學士班110BA 必修	"},{科號:"11120ECON227400",課程中文名稱:"成本與管理會計二",課程英文名稱:"Cost & Management Accounting (II)",學分數:"3",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`TSMC台積103	S2S3S4
`,授課教師:`林育光	LIN, YU-KUANG
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>成本與管理會計一-成績需C-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"【上學期原修成本與管理會計一ECON227300(林育光老師)同學選課優先,第3次選課起開放】",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"經濟系108BA 選修	經濟系108BB 選修	經濟系109BA 選修	經濟系109BB 選修	經濟系110BA 選修	經濟系110BB 選修	"},{科號:"11120ECON227600",課程中文名稱:"企業診斷",課程英文名稱:"Business Diagnosis",學分數:"3",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`TSMC台積104	S2S3S4
`,授課教師:`梁淑芸	LIANG, SHU-YUN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"經濟系110BA 選修	經濟系110BB 選修	"},{科號:"11120ECON300000",課程中文名稱:"經濟系職涯規劃",課程英文名稱:"Career Development for Economics Graduates",學分數:"1",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"經濟系研究生若想選修請透過加簽系統",停開註記:"",教室與上課時間:`TSMC台積206	WnW5
`,授課教師:`林靜儀	LIN, CHING-YI
廖肇寧	LIAO, CHAO-NING
`,擋修說明:"",課程限制說明:"限經濟系3年級4年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"經濟系108BA 選修	經濟系108BB 選修	經濟系109BA 選修	經濟系109BB 選修	"},{科號:"11120ECON303400",課程中文名稱:"計量經濟學二",課程英文名稱:"Introduction to Econometrics (II)",學分數:"3",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`TSMC台積203	WnW5W6
`,授課教師:`林世昌	LIN, SHIH-CHANG
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>計量經濟學一-成績需C-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"【上學期原修計量經濟學一ECON303300(馮炳萱老師)同學選課優先,第3次選課起開放】",第一二專長對應:"經濟(第二專長)	經濟(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"經濟系108BA 選修	經濟系108BB 選修	經濟系109BA 選修	經濟系109BB 選修	科管院學士班108BA 選修	科管院學士班109B  必修	科管院學士班109BA 選修	科管院學士班110BA 選修	"},{科號:"11120ECON303800",課程中文名稱:"數據分析與機器學習",課程英文名稱:"Data Analysis and Machine Learning",學分數:"3",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`TSMC台積205	RnR5R6
`,授課教師:`余朝恩	YU, CHAO-EN
`,擋修說明:`<div>
  擋修對象 : 大學部 <br>
  先修科目 : <BR><BR>統計學一-成績需B以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"",第一二專長對應:"數據科學(第二專長)",學分學程對應:"(跨領域)金融科技與區塊鏈學分學程",不可加簽說明:"",必選修說明:"經濟系108BA 選修	經濟系108BB 選修	經濟系109BA 選修	經濟系109BB 選修	科管院學士班109B  選修	"},{科號:"11120ECON309201",課程中文名稱:"總體經濟學二",課程英文名稱:"Macroeconomics (II)",學分數:"3",人限:"80",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`TSMC台積224	M7M8M9
`,授課教師:`黃朝熙	HUANG, CHAO-HSI
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>曾修總體經濟學一<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"【上學期原修總體經濟學一ECON309101(趙相科老師)同學選課優先,第3次選課起開放】",第一二專長對應:"經濟(第二專長)	經濟(第一專長)	計量財務金融(第二專長)	計量財務金融(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"經濟系109BA 必修	經濟系109BB 必修	科管院學士班109B  必修	"},{科號:"11120ECON309202",課程中文名稱:"總體經濟學二",課程英文名稱:"Macroeconomics (II)",學分數:"3",人限:"80",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`TSMC台積224	T6T7T8
`,授課教師:`郭俊宏	KUO, CHUN-HUNG
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>曾修總體經濟學一<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"【上學期原修總體經濟學一ECON309102(祁玉蘭老師)同學選課優先,第3次選課起開放】",第一二專長對應:"經濟(第二專長)	經濟(第一專長)	計量財務金融(第二專長)	計量財務金融(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"經濟系109BA 必修	經濟系109BB 必修	科管院學士班109B  必修	"},{科號:"11120ECON309203",課程中文名稱:"總體經濟學二",課程英文名稱:"Macroeconomics (II)",學分數:"3",人限:"70",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"遠距教學（面授＋同步＋非同步）原修ECON309104者若選不上，請送加簽單選課",停開註記:"",教室與上課時間:`TSMC台積103	M6M7M8
`,授課教師:`盧姝璇	LU, SHU-SHIUAN
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>曾修總體經濟學一<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"【上學期原修總體經濟學一ECON309103(盧姝璇老師)同學選課優先,第3次選課起開放】",第一二專長對應:"經濟(第二專長)	經濟(第一專長)	計量財務金融(第二專長)	計量財務金融(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"經濟系109BA 必修	經濟系109BB 必修	科管院學士班108BA 選修	科管院學士班109B  必修	科管院學士班109BA 選修	科管院學士班110BA 選修	"},{科號:"11120ECON310500",課程中文名稱:"期貨市場",課程英文名稱:"Futures Market",學分數:"3",人限:"85",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`TSMC台積103	M2M3M4
`,授課教師:`黃睿	HWANG, RUEY
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"經濟系108BA 選修	經濟系108BB 選修	經濟系109BA 選修	經濟系109BB 選修	經濟系110BA 選修	經濟系110BB 選修	科管院學士班109B  選修	"},{科號:"11120ECON311000",課程中文名稱:"貨幣政策與金融市場",課程英文名稱:"Monetary Policy and Financial Market",學分數:"3",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`TSMC台積205	M3M4Mn
`,授課教師:`朱筱蕾	CHU, HSIAO-LEI
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>曾修經濟學原理二<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"經濟系108BA 選修	經濟系108BB 選修	經濟系109BA 選修	經濟系109BB 選修	科管院學士班109B  選修	"},{科號:"11120ECON313100",課程中文名稱:"全球化經濟一",課程英文名稱:"Globalizing Economy I",學分數:"3",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`TSMC台積205	R7R8R9
`,授課教師:`祁玉蘭	CHYI, YIH-LUAN
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>經濟學-成績需C-以上<BR>經濟學原理一-成績需C-以上<BR><br>上述條件任選一科，則不擋修。</div>`,課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"經濟系108BA 選修	經濟系108BB 選修	經濟系109BA 選修	經濟系109BB 選修	人社院學士班109BA 選修	人社院學士班109BB 選修	科管院學士班109B  選修	"},{科號:"11120ECON313800",課程中文名稱:"經濟全球化的制度與組織",課程英文名稱:"Institution and Organization in Economic Globalization",學分數:"3",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`TSMC台積203	W7W8W9
`,授課教師:`劉瑞華	LIU, RUEY-HUA
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"經濟系108BA 選修	經濟系108BB 選修	經濟系109BA 選修	經濟系109BB 選修	人社院學士班109BA 選修	人社院學士班109BB 選修	科管院學士班109B  選修	"},{科號:"11120ECON316200",課程中文名稱:"財政學二",課程英文名稱:"Public Finance (II)",學分數:"3",人限:"90",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`TSMC台積224	WnW5W6
`,授課教師:`吳世英	WU, SHIH-YING
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>經濟學原理一-成績需C-以上<BR>經濟學原理二-成績需C-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"【上學期原修財政學一ECON316100(吳世英老師)同學選課優先,第3次選課起開放】",第一二專長對應:"經濟(第二專長)	經濟(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"經濟系108BA 選修	經濟系108BB 選修	經濟系109BA 選修	經濟系109BB 選修	人社院學士班109BA 選修	人社院學士班109BB 選修	科管院學士班108BA 選修	科管院學士班109B  必修	科管院學士班109BA 選修	科管院學士班110BA 選修	"},{科號:"11120ECON317100",課程中文名稱:"政治經濟學",課程英文名稱:"Political Economy",學分數:"3",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"HSS政治經濟學程必修",停開註記:"",教室與上課時間:`TSMC台積203	R5R6R7
`,授課教師:`蔡璧涵	TSAI, PI-HAN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)能源科技與永續社會學分學程",不可加簽說明:"",必選修說明:"經濟系108BA 選修	經濟系108BB 選修	經濟系109BA 選修	經濟系109BB 選修	人社院學士班109BA 選修	人社院學士班109BB 選修	科管院學士班109B  選修	"},{科號:"11120ECON321300",課程中文名稱:"文化經濟學專題",課程英文名稱:"Special Topics in Cultural Economics",學分數:"3",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`TSMC台積203	M7M8M9
`,授課教師:`劉瑞華	LIU, RUEY-HUA
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"經濟系108BA 選修	經濟系108BB 選修	經濟系109BA 選修	經濟系109BB 選修	人社院學士班109BA 選修	人社院學士班109BB 選修	科管院學士班109B  選修	"},{科號:"11120ECON327201",課程中文名稱:"中級會計二",課程英文名稱:"Intermediate Accounting II",學分數:"3",人限:"46",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`TSMC台積120	TaTbTc
`,授課教師:`李怡嫺	LEE, EI-SHYAN
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>中級會計一-成績需C-以上<BR>中級會計學一-成績需C-以上<BR><br>上述條件任選一科，則不擋修。</div>`,課程限制說明:"【上學期原修中級會計一ECON327101(李怡嫺老師)同學選課優先,第3次選課起開放】",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"經濟系108BA 選修	經濟系108BB 選修	經濟系109BA 選修	經濟系109BB 選修	科管院學士班109B  選修	"},{科號:"11120ECON327202",課程中文名稱:"中級會計二",課程英文名稱:"Intermediate Accounting II",學分數:"3",人限:"55",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`TSMC台積203	T2T3T4
`,授課教師:`胡慎緁	HU, SHEN-CHIEH
賴盟坤	LAI, MENG-KUN
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>中級會計一-成績需C-以上<BR>中級會計學一-成績需C-以上<BR><br>上述條件任選一科，則不擋修。</div>`,課程限制說明:"【上學期原修中級會計一ECON327102(胡慎緁,賴盟坤老師)同學選課優先,第3次選課起開放】",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"經濟系108BA 選修	經濟系108BB 選修	經濟系109BA 選修	經濟系109BB 選修	科管院學士班109B  選修	"},{科號:"11120ECON328400",課程中文名稱:"審計學二",課程英文名稱:"Auditing and Assurance Service II",學分數:"3",人限:"100",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`TSMC台積224	M2M3M4
`,授課教師:`楊雨霓	YANG, YU-NI
陳智忠	CHEN, CHIH-CHUNG
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>審計學一-成績需C-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"【上學期原修審計學一ECON328200(楊雨霓,陳智忠老師)同學選課優先,第3次選課起開放】",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"經濟系108BA 選修	經濟系108BB 選修	經濟系109BA 選修	經濟系109BB 選修	科管院學士班109B  選修	"},{科號:"11120ECON412200",課程中文名稱:"國際經濟學二",課程英文名稱:"International Economics (II)",學分數:"3",人限:"120",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`TSMC台積224	T2T3T4
`,授課教師:`林靜儀	LIN, CHING-YI
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>曾修經濟學原理一<BR>曾修經濟學原理二<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"【上學期原修國際經濟學一ECON412100(李宜老師)同學選課優先,第3次選課起開放】",第一二專長對應:"經濟(第二專長)	經濟(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"經濟系108BA 選修	經濟系108BB 選修	經濟系109BA 選修	經濟系109BB 選修	人社院學士班108BA 選修	人社院學士班108BB 選修	科管院學士班108B  必修	"},{科號:"11120ECON424300",課程中文名稱:"產業組織",課程英文名稱:"Industrial Organization",學分數:"3",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`TSMC台積309	TnT5T6
`,授課教師:`張寶塔	CHANG, BAO-TAA
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"經濟系108BA 選修	經濟系108BB 選修	經濟系109BA 選修	經濟系109BB 選修	科管院學士班108B  選修	"},{科號:"11120ECON434100",課程中文名稱:"跨文化國際合作與創新策略",課程英文名稱:"Cross-Cultural Collaboration and Innovation Strategies",學分數:"3",人限:"35",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`TSMC台積206	M2M3M4
`,授課教師:`劉宛淯	GRACE LIU
`,擋修說明:"",課程限制說明:"限大學部2年級以上",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"經濟系108BA 選修	經濟系108BB 選修	經濟系109BA 選修	經濟系109BB 選修	科管院學士班108B  選修	"},{科號:"11120ECON500500",課程中文名稱:"經濟學文獻閱讀與寫作",課程英文名稱:"Reading and Writing in Economics",學分數:"3",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`TSMC台積205	F2F3F4
`,授課教師:`黃春興	HWANG, CHUN-SIN
`,擋修說明:"",課程限制說明:"限經濟系碩士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"經濟系111M  必修	"},{科號:"11120ECON507500",課程中文名稱:"人口經濟學理論與實務",課程英文名稱:"Population Economics and Application",學分數:"3",人限:"10",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`TSMC台積428	F7F8F9
`,授課教師:`黃賀寶	WONG, HO PO
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"經濟系111D  選修	經濟系111M  選修	IMBA碩士班111M  選修	"},{科號:"11120ECON509900",課程中文名稱:"計量經濟學的因果推論",課程英文名稱:"Causal inference in econometrics",學分數:"3",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"外系研究生欲修課,請至課堂與老師討論",停開註記:"",教室與上課時間:`TSMC台積203	T7T8T9
`,授課教師:`冼芻蕘	SIN CHOR YIU
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"經濟系111D  選修	經濟系111M  選修	"},{科號:"11120ECON513100",課程中文名稱:"國際金融",課程英文名稱:"International Finance",學分數:"3",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`TSMC台積205	M5M6M7
`,授課教師:`林靜儀	LIN, CHING-YI
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"經濟系111D  選修	經濟系111M  選修	"},{科號:"11120ECON513300",課程中文名稱:"全球化管理",課程英文名稱:"Globalization Management",學分數:"3",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"本課程為16週課程，經濟系僅限大學部同學選修",停開註記:"",教室與上課時間:`TSMC台積901	W6W7W8
`,授課教師:`馮炳萱	FUNG, PING-HSUAN
`,擋修說明:"",課程限制說明:"限IMBA碩士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"經濟系108BA 選修	經濟系108BB 選修	經濟系109BA 選修	經濟系109BB 選修	IMBA碩士班111M  必修	"},{科號:"11120ECON516700",課程中文名稱:"行銷管理",課程英文名稱:"Marketing Management",學分數:"3",人限:"25",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"經濟系碩士班選修不計入學分",停開註記:"",教室與上課時間:`TSMC台積205	WaWbWc
`,授課教師:`王遠樵	WANG, YUAN-CHIAO
`,擋修說明:"",課程限制說明:"經濟系優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"經濟系108BA 選修	經濟系108BB 選修	經濟系109BA 選修	經濟系109BB 選修	IMBA碩士班111M  選修	"},{科號:"11120ECON524600",課程中文名稱:"實證產業經濟學專題",課程英文名稱:"Topic of Empirical Industrial Economics",學分數:"3",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`TSMC台積203	M2M3M4
`,授課教師:`李宜	LEE, YI
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"經濟系111D  選修	經濟系111M  選修	"},{科號:"11120ECON591200",課程中文名稱:"書報討論二",課程英文名稱:"Seminar(II)",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`TSMC台積905	T5T6
`,授課教師:`蔡璧涵	TSAI, PI-HAN
馮炳萱	FUNG, PING-HSUAN
`,擋修說明:"",課程限制說明:"限經濟系碩士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"經濟系111M  必修	"},{科號:"11120ECON699900",課程中文名稱:"論文研究",課程英文名稱:"Thesis",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限經濟碩二以上修習",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"排除經濟系碩士班1年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"經濟系111M  必修	"},{科號:"11120ECON703300",課程中文名稱:"計量經濟專題",課程英文名稱:"Topics in Econometrics",學分數:"3",人限:"18",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`TSMC台積732	M5M6M7
`,授課教師:`林世昌	LIN, SHIH-CHANG
冼芻蕘	SIN CHOR YIU
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"經濟系111D  必修	經濟系111M  選修	"},{科號:"11120ECON706100",課程中文名稱:"個體經濟專題",課程英文名稱:"Seminar on Microeconomics",學分數:"3",人限:"18",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`TSMC台積732	W5W6W7
`,授課教師:`周嗣文	CHOU, SZU-WEN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"經濟系111D  必修	經濟系111M  選修	"},{科號:"11120ECON709100",課程中文名稱:"總體經濟專題",課程英文名稱:"Seminar on Macroeconomics",學分數:"3",人限:"18",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`TSMC台積732	T2T3T4
`,授課教師:`盧姝璇	LU, SHU-SHIUAN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"經濟系111D  必修	經濟系111M  選修	"},{科號:"11120ECON800000",課程中文名稱:"論文研究",課程英文名稱:"Thesis",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限經濟博二以上修習",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"排除經濟系博士班1年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"經濟系111D  必修	"},{科號:"11120ECON890100",課程中文名稱:"教學實習",課程英文名稱:"Teaching Internship",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"限經濟系博士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"經濟系111D  選修	"},{科號:"11120ECON891200",課程中文名稱:"書報討論二",課程英文名稱:"Seminar(II)",學分數:"1",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`TSMC台積905	T5T6
`,授課教師:`蔡璧涵	TSAI, PI-HAN
馮炳萱	FUNG, PING-HSUAN
`,擋修說明:"",課程限制說明:"限經濟系博士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"經濟系111D  必修	"},{科號:"11120EE  202000",課程中文名稱:"偏微分方程與複變函數",課程英文名稱:"Partial Differential Equations and Complex Variables",學分數:"3",人限:"53",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`DELTA台達209	T3T4R3R4
`,授課教師:`楊雅棠	YANG, YA-TANG
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>曾修微分方程與複變函數<BR>曾修常微分方程<BR><br>上述條件任選一科，則不擋修。</div>`,課程限制說明:"電機系大學部2年級3年級4年級,電資院學士班大學部2年級3年級4年級優先，第3次選課起開放全校修習",第一二專長對應:"電機工程(第二專長)	電機工程(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"電機系110BA 必修	電機系110BB 必修	電資院學士班110B  必修	電資院學士班110BA 必修	"},{科號:"11120EE  203000",課程中文名稱:"線性代數",課程英文名稱:"Linear Algebra",學分數:"3",人限:"98",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程每週上課150分鐘，其餘時間由教授彈性運用。",停開註記:"",教室與上課時間:`DELTA台達217	W3W4F3F4
`,授課教師:`王晉良	WANG, CHIN-LIANG
`,擋修說明:"",課程限制說明:"電機系大學部,電資院學士班大學部優先，第3次選課起開放全校修習",第一二專長對應:"資訊工程(第二專長)	資訊工程(第一專長)	電機工程(第二專長)	電機工程(第一專長)	電機資訊(第一專長)	工業工程與工程管理(第二專長)",學分學程對應:"(跨領域)音樂科技與健康學分學程",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:"電機系108BA 必修	電機系108BB 必修	電機系109BA 必修	電機系109BB 必修	電機系110BA 必修	電機系110BB 必修	電資院學士班108B  必修	電資院學士班108BA 必修	電資院學士班109B  必修	電資院學士班109BA 必修	電資院學士班110B  必修	電資院學士班110BA 必修	"},{科號:"11120EE  206000",課程中文名稱:"離散數學",課程英文名稱:"Discrete Mathematics",學分數:"3",人限:"100",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程每週上課150分鐘，其餘時間由教授彈性運用。",停開註記:"",教室與上課時間:`DELTA台達215	W3W4F3F4
`,授課教師:`翁詠祿	UENG, YEONG-LUH
`,擋修說明:"",課程限制說明:"電機系大學部2年級3年級4年級,電資院學士班大學部2年級3年級4年級優先，第3次選課起開放全校修習",第一二專長對應:"資訊工程(第二專長)	資訊工程(第一專長)	電機工程(第二專長)	電機工程(第一專長)	電機資訊(第一專長)	工業工程與工程管理(第二專長)",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:"電機系110BA 選修	電機系110BB 選修	電資院學士班110B  選修	電資院學士班110BA 選修	"},{科號:"11120EE  211000",課程中文名稱:"近代物理",課程英文名稱:"Modern Physics",學分數:"3",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"16週課程",停開註記:"",教室與上課時間:`DELTA台達202	M6M7M8
`,授課教師:`劉昌樺	LIU, CHANG-HUA
`,擋修說明:"",課程限制說明:"電機系大學部2年級3年級4年級,電資院學士班大學部2年級3年級4年級優先，第3次選課起開放全校修習",第一二專長對應:"電機工程(第二專長)	電機工程(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"電機系110BA 選修	電機系110BB 選修	電資院學士班110B  選修	電資院學士班110BA 選修	"},{科號:"11120EE  214001",課程中文名稱:"電磁學",課程英文名稱:"Electromagnetism",學分數:"3",人限:"70",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"大一選課必須經授課教師加簽同意始得修習。優先加簽大四。",停開註記:"",教室與上課時間:`DELTA台達216	M3M4W2
`,授課教師:`楊尚達	YANG, SHANG-DA
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>曾修微積分一<BR>曾修微積分Ａ一<BR>曾修微積分Ｂ一<BR>曾修微積分一(數學系)<BR>曾修微積分一(數學系)(基本科目免修測試)<BR>曾修微積分Ａ一(基本科目免修測試)<BR>曾修微積分Ｂ一(基本科目免修測試)<BR><br>上述條件任選一科，而且<br><BR>曾修微積分二<BR>曾修微積分Ｂ二<BR>曾修微積分二(數學系)<BR>曾修微積分Ａ二<BR><br>上述條件任選一科，則不擋修。</div>`,課程限制說明:"電機系大學部2年級3年級4年級,電資院學士班大學部2年級3年級4年級優先，第3次選課起開放全校修習",第一二專長對應:"電機工程(第二專長)	電機工程(第一專長)	電機資訊(第一專長)",學分學程對應:"(跨領域)光電學分學程",不可加簽說明:"",必選修說明:"電機系110BA 必修	電機系110BB 必修	電資院學士班110B  必修	電資院學士班110BA 必修	"},{科號:"11120EE  214002",課程中文名稱:"電磁學",課程英文名稱:"Electromagnetism",學分數:"3",人限:"85",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`DELTA台達215	M3M4W2
`,授課教師:`洪毓玨	HUNG,YU-CHUEH
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>曾修微積分一<BR>曾修微積分Ａ一<BR>曾修微積分Ｂ一<BR>曾修微積分一(數學系)<BR>曾修微積分一(數學系)(基本科目免修測試)<BR>曾修微積分Ａ一(基本科目免修測試)<BR>曾修微積分Ｂ一(基本科目免修測試)<BR><br>上述條件任選一科，而且<br><BR>曾修微積分二<BR>曾修微積分Ｂ二<BR>曾修微積分二(數學系)<BR>曾修微積分Ａ二<BR><br>上述條件任選一科，則不擋修。</div>`,課程限制說明:"電機系大學部2年級3年級4年級,電資院學士班大學部2年級3年級4年級優先，第3次選課起開放全校修習",第一二專長對應:"電機工程(第二專長)	電機工程(第一專長)	電機資訊(第一專長)",學分學程對應:"(跨領域)光電學分學程",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:"電機系110BA 必修	電機系110BB 必修	電資院學士班110B  必修	電資院學士班110BA 必修	"},{科號:"11120EE  221001",課程中文名稱:"電路學",課程英文名稱:"Electric Circuits",學分數:"3",人限:"53",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"第3次選課起開放大一同學選課。每週上課150分鐘,其餘時間教授彈性運用",停開註記:"",教室與上課時間:`DELTA台達209	M3M4W1W2
`,授課教師:`李依珊	I-SHAN LEE
`,擋修說明:"",課程限制說明:"電機系大學部2年級3年級4年級,電資院學士班大學部2年級3年級4年級優先，第3次選課起開放全校修習",第一二專長對應:"電機工程(第二專長)	電機工程(第一專長)	電機資訊(第一專長)",學分學程對應:"(跨領域)積體電路設計學分學程",不可加簽說明:"",必選修說明:"電機系110BA 必修	電機系110BB 必修	電資院學士班110B  必修	電資院學士班110BA 必修	"},{科號:"11120EE  221002",課程中文名稱:"電路學",課程英文名稱:"Electric Circuits",學分數:"3",人限:"80",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"第3次選課起開放大一同學選課。每週上課150分鐘,其餘時間教授彈性運用",停開註記:"",教室與上課時間:`DELTA台達217	M3M4W2
`,授課教師:`黃承彬	HUANG, CHEN-BIN
`,擋修說明:"",課程限制說明:"電機系大學部2年級3年級4年級,電資院學士班大學部2年級3年級4年級優先，第3次選課起開放全校修習",第一二專長對應:"電機工程(第二專長)	電機工程(第一專長)	電機資訊(第一專長)",學分學程對應:"(跨領域)積體電路設計學分學程",不可加簽說明:"",必選修說明:"電機系110BA 必修	電機系110BB 必修	電資院學士班110B  必修	電資院學士班110BA 必修	"},{科號:"11120EE  223001",課程中文名稱:"邏輯設計實驗",課程英文名稱:"Logic Design Laboratory",學分數:"2",人限:"10",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"加簽規則請見課程大綱。",停開註記:"",教室與上課時間:`DELTA台達217	M7M8M9
`,授課教師:`馬席彬	MA, HSI-PIN
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>數位邏輯設計-成績需C-以上<BR>邏輯設計-成績需C-以上<BR><br>上述條件任選一科，則不擋修。</div>`,課程限制說明:"電機系大學部1年級,電資院學士班大學部1年級優先，第3次選課起開放全校修習",第一二專長對應:"資訊工程(第一專長)	電機工程(第二專長)	電機工程(第一專長)	電機資訊(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"電機系111BA 選修	電機系111BB 選修	電資院學士班111B  選修	電資院學士班111BA 選修	"},{科號:"11120EE  223002",課程中文名稱:"邏輯設計實驗",課程英文名稱:"Logic Design Laboratory",學分數:"2",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"加簽規則請見課程大綱。",停開註記:"",教室與上課時間:`DELTA台達217	T7T8T9
`,授課教師:`黃元豪	HUANG, YUAN-HAO
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>數位邏輯設計-成績需C-以上<BR>邏輯設計-成績需C-以上<BR><br>上述條件任選一科，則不擋修。</div>`,課程限制說明:"電機系大學部1年級,電資院學士班大學部1年級優先，第3次選課起開放全校修習",第一二專長對應:"資訊工程(第一專長)	電機工程(第二專長)	電機工程(第一專長)	電機資訊(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"電機系111BA 選修	電機系111BB 選修	電資院學士班111B  選修	電資院學士班111BA 選修	"},{科號:"11120EE  225501",課程中文名稱:"電子學",課程英文名稱:"Electronics",學分數:"3",人限:"60",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"本課程每週上課4小時",停開註記:"",教室與上課時間:`DELTA台達217	T3T4R3R4
`,授課教師:`金雅琴	KING, YA-CHIN
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>曾修電路學<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"電機系大學部2年級,電資院學士班大學部2年級優先，第3次選課起開放全校修習",第一二專長對應:"電機工程(第二專長)	電機工程(第一專長)	電機資訊(第一專長)",學分學程對應:"(跨領域)微系統科技整合學分學程/(跨領域)積體電路設計學分學程",不可加簽說明:"",必選修說明:"電機系110BA 必修	電機系110BB 必修	電資院學士班110B  必修	電資院學士班110BA 必修	"},{科號:"11120EE  225502",課程中文名稱:"電子學",課程英文名稱:"Electronics",學分數:"3",人限:"60",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程每週上課4小時",停開註記:"",教室與上課時間:`DELTA台達216	T3T4R3R4
`,授課教師:`黃柏鈞	HUANG, PO-CHIUN
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>曾修電路學<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"電機系大學部2年級,電資院學士班大學部2年級優先，第3次選課起開放全校修習",第一二專長對應:"電機工程(第二專長)	電機工程(第一專長)	電機資訊(第一專長)",學分學程對應:"(跨領域)微系統科技整合學分學程/(跨領域)積體電路設計學分學程",不可加簽說明:"",必選修說明:"電機系110BA 必修	電機系110BB 必修	電資院學士班110B  必修	電資院學士班110BA 必修	"},{科號:"11120EE  231000",課程中文名稱:"計算機程式設計",課程英文名稱:"Introduction to Programming",學分數:"3",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程每週上課150分鐘,其餘時間教授彈性運用",停開註記:"",教室與上課時間:`DELTA台達215	M1M2R1R2
`,授課教師:`張彌彰	CHANG, MI-CHANG
`,擋修說明:"",課程限制說明:"電機系大學部,電資院學士班大學部優先，第3次選課起開放全校修習",第一二專長對應:"資訊工程(第一專長)	數據科學(第二專長)	電機工程(第二專長)	電機工程(第一專長)	電機資訊(第一專長)",學分學程對應:"(跨領域)積體電路設計學分學程/(跨領域)數據科學學分學程/(跨領域)人工智慧與應用基礎學分學程/(跨領域)音樂科技與健康學分學程/(跨領域)神經科學學分學程",不可加簽說明:"",必選修說明:"電機系111BA 必修	電機系111BB 必修	電資院學士班111B  必修	電資院學士班111BA 必修	"},{科號:"11120EE  240500",課程中文名稱:"嵌入式系統與實驗",課程英文名稱:"Embedded System Laboratory",學分數:"2",人限:"5",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"16週課程,加選以線上抽簽方式進行,請於2/9~13於校務資訊系統登記,2/13抽簽35人加簽及備取順位",停開註記:"",教室與上課時間:`DELTA台達216	W7W8W9
`,授課教師:`劉靖家	LIOU, JING-JIA
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>邏輯設計-成績需C-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"限電機系大學部2年級3年級4年級,電資院學士班大學部2年級3年級4年級",第一二專長對應:"資訊工程(第一專長)	電機工程(第二專長)	電機工程(第一專長)	電機資訊(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"電機系110BA 選修	電機系110BB 選修	電資院學士班110B  選修	電資院學士班110BA 選修	"},{科號:"11120EE  241000",課程中文名稱:"資料結構",課程英文名稱:"Data Structures",學分數:"3",人限:"80",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`DELTA台達215	T1T2F1F2
`,授課教師:`鐘太郎	JONG, TAI-LANG
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>計算機程式設計-成績需C-以上<BR>計算機程式設計一-成績需C-以上<BR><br>上述條件任選一科，則不擋修。</div>`,課程限制說明:"電機系大學部2年級3年級4年級,電資院學士班大學部2年級3年級4年級優先，第3次選課起開放全校修習",第一二專長對應:"資訊工程(第二專長)	資訊工程(第一專長)	數據科學(第二專長)	電機工程(第二專長)	電機工程(第一專長)	電機資訊(第一專長)",學分學程對應:"(跨領域)積體電路設計學分學程/(跨領域)數據科學學分學程/(跨領域)人工智慧與應用基礎學分學程/(跨領域)音樂科技與健康學分學程",不可加簽說明:"",必選修說明:"電機系110BA 選修	電機系110BB 選修	電資院學士班110B  選修	電資院學士班110BA 選修	"},{科號:"11120EE  302000",課程中文名稱:"偏微分方程與數值分法",課程英文名稱:"Partial Differential Equations and numerical methods",學分數:"3",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"非常態開設課程。",停開註記:"",教室與上課時間:`DELTA台達209	T5T6R6
`,授課教師:`劉奕汶	LIU, YI-WEN
`,擋修說明:"",課程限制說明:"電機系大學部3年級4年級,電資院學士班大學部3年級4年級優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"電機系109BA 選修	電機系109BB 選修	電資院學士班109B  選修	電資院學士班109BA 選修	"},{科號:"11120EE  306001",課程中文名稱:"機率",課程英文名稱:"Probability",學分數:"3",人限:"51",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"週一19:00-21:00為演習課。16週課程,每週上課150分鐘,其餘時間由教授彈性運用",停開註記:"",教室與上課時間:`DELTA台達211	T5T6R5R6
`,授課教師:`呂忠津	LU, CHUNG-CHIN
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>微積分一-成績需C-以上<BR>微積分Ａ一-成績需C-以上<BR>微積分Ｂ一-成績需C-以上<BR>微積分一(數學系)-成績需C-以上<BR>曾修微積分一(數學系)(基本科目免修測試)<BR>曾修微積分Ａ一(基本科目免修測試)<BR>曾修微積分Ｂ一(基本科目免修測試)<BR><br>上述條件任選一科，而且<br><BR>曾修微積分二<BR>曾修微積分Ｂ二<BR>曾修微積分二(數學系)<BR>曾修微積分Ａ二<BR><br>上述條件任選一科，則不擋修。</div>`,課程限制說明:"電機系大學部2年級3年級4年級,電資院學士班大學部2年級3年級4年級優先，第3次選課起開放全校修習",第一二專長對應:"資訊工程(第一專長)	電機工程(第二專長)	電機工程(第一專長)	電機資訊(第一專長)",學分學程對應:"(跨領域)生物資訊學分學程/(跨領域)數據科學學分學程/(跨領域)人工智慧與應用基礎學分學程/(跨領域)音樂科技與健康學分學程/(跨領域)神經科學學分學程",不可加簽說明:"",必選修說明:"電機系110BA 必修	電機系110BB 必修	電資院學士班110B  必修	電資院學士班110BA 必修	"},{科號:"11120EE  306002",課程中文名稱:"機率",課程英文名稱:"Probability",學分數:"3",人限:"60",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"16週課程,每週上課150分鐘,其餘時間由教授彈性運用。加簽順序請見課程大綱。",停開註記:"",教室與上課時間:`DELTA台達217	T5T6R5R6
`,授課教師:`祁忠勇	CHI, CHONG-YUNG
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>微積分一-成績需C-以上<BR>微積分Ａ一-成績需C-以上<BR>微積分Ｂ一-成績需C-以上<BR>微積分一(數學系)-成績需C-以上<BR>曾修微積分一(數學系)(基本科目免修測試)<BR>曾修微積分Ａ一(基本科目免修測試)<BR>曾修微積分Ｂ一(基本科目免修測試)<BR><br>上述條件任選一科，而且<br><BR>曾修微積分二<BR>曾修微積分Ｂ二<BR>曾修微積分二(數學系)<BR>曾修微積分Ａ二<BR><br>上述條件任選一科，則不擋修。</div>`,課程限制說明:"電機系大學部2年級,電資院學士班大學部2年級優先，第3次選課起開放全校修習",第一二專長對應:"資訊工程(第一專長)	電機工程(第二專長)	電機工程(第一專長)	電機資訊(第一專長)",學分學程對應:"(跨領域)生物資訊學分學程/(跨領域)人工智慧與應用基礎學分學程/(跨領域)音樂科技與健康學分學程/(跨領域)神經科學學分學程",不可加簽說明:"",必選修說明:"電機系110BA 必修	電機系110BB 必修	電資院學士班110B  必修	電資院學士班110BA 必修	"},{科號:"11120EE  307000",課程中文名稱:"統計",課程英文名稱:"Statistics",學分數:"3",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"16週課程。非常態開設課程",停開註記:"",教室與上課時間:`DELTA台達211	T3T4W2
`,授課教師:`鍾偉和	CHUNG, WEI-HO
`,擋修說明:"",課程限制說明:"電機系大學部3年級4年級,電資院學士班大學部3年級4年級優先，第3次選課起開放全校修習",第一二專長對應:"電機工程(第二專長)	電機工程(第一專長)",學分學程對應:"(跨領域)人工智慧與應用基礎學分學程",不可加簽說明:"",必選修說明:"電機系109BA 選修	電機系109BB 選修	電資院學士班109B  選修	電資院學士班109BA 選修	"},{科號:"11120EE  315000",課程中文名稱:"電磁波",課程英文名稱:"Electromagnetic Waves",學分數:"3",人限:"32",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"本學期增開課程, 非常態開設。",停開註記:"",教室與上課時間:`DELTA台達202	M3M4W2
`,授課教師:`黃衍介	HUANG, YEN-CHIEH
`,擋修說明:"",課程限制說明:"電機系大學部3年級4年級優先，第3次選課起開放全校修習",第一二專長對應:"電機工程(第二專長)	電機工程(第一專長)",學分學程對應:"(跨領域)光電學分學程",不可加簽說明:"",必選修說明:"電機系109BA 選修	電機系109BB 選修	電資院學士班109B  選修	電資院學士班109BA 選修	"},{科號:"11120EE  317000",課程中文名稱:"雷射導論",課程英文名稱:"Introduction to lasers",學分數:"3",人限:"25",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"16週課程。非常態開設課程",停開註記:"",教室與上課時間:`DELTA台達210	M7M8R7
`,授課教師:`林凡異	LIN, FAN-YI
`,擋修說明:"",課程限制說明:"電機系大學部3年級4年級,電資院學士班大學部3年級4年級優先，第3次選課起開放全校修習",第一二專長對應:"電機工程(第二專長)	電機工程(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"電機系109BA 選修	電機系109BB 選修	電資院學士班109B  選修	電資院學士班109BA 選修	"},{科號:"11120EE  323500",課程中文名稱:"類比電路分析與設計一",課程英文名稱:"Analog Integrated Circuits Analysis and Design I",學分數:"3",人限:"100",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本學期增開課程, 非常態開設。",停開註記:"",教室與上課時間:`DELTA台達216	T7T8R7
`,授課教師:`謝志成	HSIEH, CHIH CHENG
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>電子學-成績需C-以上<BR>電路學-成績需C-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"電機系大學部3年級4年級,電資院學士班大學部3年級4年級優先，第3次選課起開放全校修習",第一二專長對應:"電機工程(第二專長)	電機工程(第一專長)",學分學程對應:"(跨領域)微系統科技整合學分學程/(跨領域)積體電路設計學分學程",不可加簽說明:"",必選修說明:"電機系109BA 選修	電機系109BB 選修	電資院學士班109B  選修	電資院學士班109BA 選修	"},{科號:"11120EE  335000",課程中文名稱:"固態電子元件導論",課程英文名稱:"Introduction to Solid-State Electronic Devices",學分數:"3",人限:"70",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本學期增開課程, 非常態開設。",停開註記:"",教室與上課時間:`DELTA台達216	W3W4F4
`,授課教師:`徐永珍	HSU, YUNG-JANE
`,擋修說明:"",課程限制說明:"電機系大學部3年級4年級,電資院學士班大學部3年級4年級優先，第3次選課起開放全校修習",第一二專長對應:"電機工程(第二專長)	電機工程(第一專長)",學分學程對應:"(跨領域)奈米與光電半導體產業學分學程/(跨領域)奈米科技學分學程/(跨領域)微系統科技整合學分學程",不可加簽說明:"",必選修說明:"電機系109BA 選修	電機系109BB 選修	電資院學士班109B  選修	電資院學士班109BA 選修	"},{科號:"11120EE  336000",課程中文名稱:"光電元件",課程英文名稱:"Opto-electronic Devices",學分數:"3",人限:"22",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"非常態開設課程。",停開註記:"",教室與上課時間:`DELTA台達216	M6
DELTA台達211	W7W8
`,授課教師:`洪毓玨	HUNG,YU-CHUEH
`,擋修說明:"",課程限制說明:"電機系大學部3年級4年級,電資院學士班大學部3年級4年級優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"電機系109BA 選修	電機系109BB 選修	電資院學士班109B  選修	電資院學士班109BA 選修	"},{科號:"11120EE  351000",課程中文名稱:"控制系統",課程英文名稱:"Feedback Control Systems",學分數:"3",人限:"100",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`DELTA台達215	T3T4R3
`,授課教師:`盧向成	LU, SHIANG-CHENG
`,擋修說明:"",課程限制說明:"電機系大學部3年級4年級,電資院學士班大學部3年級4年級優先，第3次選課起開放全校修習",第一二專長對應:"電機工程(第二專長)	電機工程(第一專長)",學分學程對應:"(跨領域)奈米與光電半導體產業學分學程/(跨領域)奈米科技學分學程/(台聯大)太空科技與工程學分學程",不可加簽說明:"",必選修說明:"電機系109BA 選修	電機系109BB 選修	電資院學士班109B  選修	電資院學士班109BA 選修	"},{科號:"11120EE  364000",課程中文名稱:"通訊系統一",課程英文名稱:"Communication Systems (I)",學分數:"3",人限:"80",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本學期增開課程, 非常態開設。",停開註記:"",教室與上課時間:`DELTA台達215	M5M6R5
`,授課教師:`趙啟超	CHAO, CHI-CHAO
`,擋修說明:"",課程限制說明:"電機系大學部3年級4年級,電資院學士班大學部3年級4年級優先，第3次選課起開放全校修習",第一二專長對應:"電機工程(第二專長)	電機工程(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"電機系109BA 選修	電機系109BB 選修	電資院學士班109B  選修	電資院學士班109BA 選修	"},{科號:"11120EE  366000",課程中文名稱:"數位訊號處理概論",課程英文名稱:"Introduction to Digital Signal Processing",學分數:"3",人限:"100",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"加簽時EE,CS,EECS大三優先,EE,CS,EECS大學部第二,其他院大學部第三，不接受研究所加簽",停開註記:"",教室與上課時間:`DELTA台達215	W5W6R8
`,授課教師:`李祈均	LEE, CHI-CHUN
`,擋修說明:"",課程限制說明:"電機系大學部3年級,電資院學士班大學部3年級優先，第3次選課起開放全校修習",第一二專長對應:"電機工程(第二專長)	電機工程(第一專長)",學分學程對應:"(跨領域)神經科學學分學程",不可加簽說明:"",必選修說明:"電機系109BA 選修	電機系109BB 選修	電資院學士班109B  選修	電資院學士班109BA 選修	"},{科號:"11120EE  367000",課程中文名稱:"凸最佳化導論",課程英文名稱:"Introduction to Convex Optimization",學分數:"3",人限:"32",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"非常態開設課程。",停開註記:"",教室與上課時間:`DELTA台達202	W3W4F3F4
`,授課教師:`祁忠勇	CHI, CHONG-YUNG
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>未修過通訊及信號處理之凸優化方法<BR>未修過通訊之數學導論<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"電機系大學部3年級4年級,電資院學士班大學部3年級4年級優先，第3次選課起開放全校修習",第一二專長對應:"電機工程(第二專長)	電機工程(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"電機系109BA 選修	電機系109BB 選修	電資院學士班109B  選修	電資院學士班109BA 選修	"},{科號:"11120EE  370000",課程中文名稱:"機器學習導論",課程英文名稱:"Introduction to Machine Learning",學分數:"3",人限:"150",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本學期增開課程, 非常態開設。",停開註記:"",教室與上課時間:`GEN IV綜四121	T5T6R6
`,授課教師:`楊雅棠	YANG, YA-TANG
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>未修過數位訊號處理學程特論：機器學習導論<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"電機系大學部3年級4年級,電資院學士班大學部3年級4年級優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"(跨領域)人工智慧與應用進階學分學程/(跨領域)人工智慧與應用基礎學分學程",不可加簽說明:"",必選修說明:"電機系109BA 選修	電機系109BB 選修	電資院學士班109B  選修	電資院學士班109BA 選修	"},{科號:"11120EE  380000",課程中文名稱:"電能處理",課程英文名稱:"Power Processing",學分數:"3",人限:"32",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"非常態開設課程。",停開註記:"",教室與上課時間:`DELTA台達202	R7R8R9
`,授課教師:`吳財福	WU, TSAI-FU
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>未修過電力工程特論：電能處理<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"電機系大學部3年級4年級,電資院學士班大學部3年級4年級優先，第3次選課起開放全校修習",第一二專長對應:"電機工程(第二專長)	電機工程(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"電機系109BA 選修	電機系109BB 選修	電資院學士班109B  選修	電資院學士班109BA 選修	"},{科號:"11120EE  384000",課程中文名稱:"電動機械實驗",課程英文名稱:"Electrical Machinery Laboratory",學分數:"2",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`DELTA台達201	W7W8W9
`,授課教師:`張淵智	CHANG, YUAN-CHIH
`,擋修說明:"",課程限制說明:"電機系大學部3年級4年級,電資院學士班大學部3年級4年級優先，第3次選課起開放全校修習",第一二專長對應:"電機工程(第二專長)	電機工程(第一專長)	電機資訊(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"電機系109BA 選修	電機系109BB 選修	電資院學士班109B  選修	電資院學士班109BA 選修	"},{科號:"11120EE  390000",課程中文名稱:"實作專題一",課程英文名稱:"Special Topic on Implementation (I)",學分數:"1",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程選課僅開放至第2次選課結束,同學務必於1月5日前完成，並於實作專題系統完成選課登錄",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"限電機系大學部3年級4年級,電資院學士班大學部3年級4年級",第一二專長對應:"電機工程(第一專長)	電機資訊(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"電機系109BA 必修	電機系109BB 必修	電資院學士班109B  必修	電資院學士班109BA 必修	"},{科號:"11120EE  391000",課程中文名稱:"實作專題二",課程英文名稱:"Special Topic on Implementation (II)",學分數:"2",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程為EE3900實作專題一延續，指導教授必須為同一位老師。更換指導教授需洽電機系辦公室提出申請",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:`<div>
  擋修對象 : 大學部 <br>
  先修科目 : <BR><BR>實作專題一-成績需C-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"限電機系大學部3年級4年級,電資院學士班大學部3年級4年級",第一二專長對應:"電機工程(第一專長)	電機資訊(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"電機系108BA 必修	電機系108BB 必修	電資院學士班108B  必修	電資院學士班108BA 必修	"},{科號:"11120EE  398000",課程中文名稱:"演算法",課程英文名稱:"Algorithms",學分數:"3",人限:"22",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"非常態開設課程。 須先修過資料結構",停開註記:"",教室與上課時間:`DELTA台達212	T3T4R4
`,授課教師:`張彌彰	CHANG, MI-CHANG
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>未修過計算方法設計<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"電機系大學部3年級4年級,電資院學士班大學部3年級4年級優先，第3次選課起開放全校修習",第一二專長對應:"資訊工程(第二專長)	資訊工程(第一專長)	電機工程(第二專長)	電機工程(第一專長)	電機資訊(第一專長)",學分學程對應:"(跨領域)積體電路設計學分學程/(跨領域)人工智慧與應用基礎學分學程/(跨領域)音樂科技與健康學分學程",不可加簽說明:"",必選修說明:"電機系109BA 選修	電機系109BB 選修	電資院學士班109B  選修	電資院學士班109BA 選修	"},{科號:"11120EE  407000",課程中文名稱:"數值分析",課程英文名稱:"Numerical Analysis",學分數:"3",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"非常態開設課程。 視選課情況斟酌是否開課",停開註記:"",教室與上課時間:`DELTA台達210	M3M4W2
`,授課教師:`張彌彰	CHANG, MI-CHANG
`,擋修說明:"",課程限制說明:"電機系大學部3年級4年級,電資院學士班大學部3年級4年級優先，第3次選課起開放全校修習",第一二專長對應:"電機工程(第二專長)	電機工程(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"電機系108BA 選修	電機系108BB 選修	電資院學士班108B  選修	電資院學士班108BA 選修	"},{科號:"11120EE  411000",課程中文名稱:"光波導概論",課程英文名稱:"Introduction to Optical Waveguide",學分數:"3",人限:"32",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"非常態開設課程。",停開註記:"",教室與上課時間:`DELTA台達202	T7T8W5
`,授課教師:`王立康	WANG, LI-KARN
`,擋修說明:"",課程限制說明:"電機系大學部3年級4年級,電資院學士班大學部3年級4年級優先，第3次選課起開放全校修習",第一二專長對應:"電機工程(第二專長)	電機工程(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"電機系108BA 選修	電機系108BB 選修	電資院學士班108B  選修	電資院學士班108BA 選修	"},{科號:"11120EE  432000",課程中文名稱:"固態電子實驗--半導體製程與實驗",課程英文名稱:"Solid-State Electronics Laboratory-Semiconductor Processing",學分數:"2",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本學期增開課程, 非常態開設。可加簽6位",停開註記:"",教室與上課時間:`DELTA台達201	T7T8T9
`,授課教師:`邱博文	CHIU, PO-WEN
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>電子學-成績需C-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"電機系大學部4年級,電資院學士班大學部4年級優先，第3次選課起開放全校修習",第一二專長對應:"電機工程(第二專長)	電機工程(第一專長)	電機資訊(第一專長)",學分學程對應:"(跨領域)奈米與光電半導體產業學分學程/(跨領域)微系統科技整合學分學程",不可加簽說明:"",必選修說明:"電機系108BA 選修	電機系108BB 選修	電資院學士班108B  選修	電資院學士班108BA 選修	"},{科號:"11120EE  441000",課程中文名稱:"生醫影像導論",課程英文名稱:"Introduction to Biomedical Imaging",學分數:"3",人限:"32",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"非常態開設課程。面授＋非同步遠距教學。",停開註記:"",教室與上課時間:`DELTA台達202	T5T6R6
`,授課教師:`李夢麟	LI, MENG-LIN
`,擋修說明:"",課程限制說明:"電機系大學部3年級4年級,電資院學士班大學部3年級4年級優先，第3次選課起開放全校修習",第一二專長對應:"電機工程(第二專長)	電機工程(第一專長)",學分學程對應:"(跨領域)人工智慧與應用進階學分學程/(跨領域)人工智慧與應用基礎學分學程/(跨領域)神經科學學分學程",不可加簽說明:"",必選修說明:"電機系108BA 選修	電機系108BB 選修	電資院學士班108B  選修	電資院學士班108BA 選修	"},{科號:"11120EE  461000",課程中文名稱:"通訊電子學",課程英文名稱:"Communication Electronics",學分數:"3",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"非常態開設課程。",停開註記:"",教室與上課時間:`DELTA台達209	W5W6R8
`,授課教師:`彭朋瑞	PENG, PEN-JUI
`,擋修說明:"",課程限制說明:"電機系大學部3年級4年級,電資院學士班大學部3年級4年級優先，第3次選課起開放全校修習",第一二專長對應:"電機工程(第二專長)	電機工程(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"電機系108BA 選修	電機系108BB 選修	電資院學士班108B  選修	電資院學士班108BA 選修	"},{科號:"11120EE  464000",課程中文名稱:"通訊系統二",課程英文名稱:"Communication Systems (II)",學分數:"3",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"非常態開設課程。 本課程每週上課150分鐘,其餘時間教授彈性運用",停開註記:"",教室與上課時間:`DELTA台達210	W3W4F3F4
`,授課教師:`蔡育仁	TSAI, YUH-REN
`,擋修說明:"",課程限制說明:"電機系大學部3年級4年級,電資院學士班大學部3年級4年級優先，第3次選課起開放全校修習",第一二專長對應:"電機工程(第二專長)	電機工程(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"電機系108BA 選修	電機系108BB 選修	電資院學士班108B  選修	電資院學士班108BA 選修	"},{科號:"11120EE  484000",課程中文名稱:"電機控制",課程英文名稱:"Electric Machinery Control",學分數:"3",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"非常態開設課程。",停開註記:"",教室與上課時間:`DELTA台達201	T3T4R3
`,授課教師:`廖聰明	LIAO, TSUNG-MING
`,擋修說明:"",課程限制說明:"電機系大學部3年級4年級,電資院學士班大學部3年級4年級優先，第3次選課起開放全校修習",第一二專長對應:"電機工程(第二專長)	電機工程(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"電機系108BA 選修	電機系108BB 選修	電資院學士班108B  選修	電資院學士班108BA 選修	"},{科號:"11120EE  521500",課程中文名稱:"影像感測器積體電路設計",課程英文名稱:"Image Sensor IC Design",學分數:"3",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`DELTA台達208	T4R3R4
`,授課教師:`謝志成	HSIEH, CHIH CHENG
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>未修過電子電路設計特論：影像感測器IC 設計<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"電機系111D  選修	電機系111M  選修	"},{科號:"11120EE  521800",課程中文名稱:"高階合成技術於應用加速",課程英文名稱:"Application Acceleration with High-Level Synthesis",學分數:"3",人限:"25",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`DELTA台達208	W2W3W4
`,授課教師:`賴瑾	JIIN LAI
`,擋修說明:"",課程限制說明:"",第一二專長對應:"電機工程(第二專長)	電機工程(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"電機系111D  選修	電機系111M  選修	"},{科號:"11120EE  522000",課程中文名稱:"內嵌式記憶體電路設計",課程英文名稱:"Embedded Memory Circuit Design",學分數:"3",人限:"51",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`DELTA台達211	T7T8T9
`,授課教師:`張孟凡	CHANG, MENG-FAN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"半導體學院111D  選修	半導體學院111M  選修	電機系111D  選修	電機系111M  選修	"},{科號:"11120EE  525400",課程中文名稱:"高等數位晶片設計流程",課程英文名稱:"Advanced Digital Design Flow",學分數:"3",人限:"0",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程僅能透過加簽選課，加簽之必要條件: 1) 已簽署ADFP之NDA; 2) 修過積體電路設計實驗或等同具APR之課程",停開註記:"",教室與上課時間:`DELTA台達201	R7R8R9Ra
`,授課教師:`黃朝宗	HUANG, CHAO-TSUNG
`,擋修說明:"",課程限制說明:"限電資院,半導體學院",第一二專長對應:"電機工程(第二專長)	電機工程(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"電機系111D  選修	電機系111M  選修	"},{科號:"11120EE  525500",課程中文名稱:"晶片安全設計",課程英文名稱:"Design of Chip Securit",學分數:"3",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`DELTA台達211	F2F3F4
`,授課教師:`吳孟益	WU, MENG-YI
`,擋修說明:"",課程限制說明:"限電機系碩士班博士班",第一二專長對應:"電機工程(第二專長)	電機工程(第一專長)",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:"電機系111D  選修	電機系111M  選修	"},{科號:"11120EE  551000",課程中文名稱:"系統理論",課程英文名稱:"System Theory",學分數:"3",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"16週課程",停開註記:"",教室與上課時間:`DELTA台達201	T5T6R6
`,授課教師:`邱偉育	CHIU, WEI-YU
`,擋修說明:"",課程限制說明:"",第一二專長對應:"電機工程(第二專長)	電機工程(第一專長)",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:"電機系111D  選修	電機系111M  選修	"},{科號:"11120EE  578000",課程中文名稱:"智慧電網",課程英文名稱:"Smart Grid",學分數:"3",人限:"22",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`DELTA台達215	M7M8T7T8
`,授課教師:`朱家齊	CHU, CHIA-CHI
`,擋修說明:"",課程限制說明:"",第一二專長對應:"電機工程(第二專長)	電機工程(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"電機系111D  選修	電機系111M  選修	"},{科號:"11120EE  581500",課程中文名稱:"固態能量轉換",課程英文名稱:"Solid-State Power Conversion",學分數:"3",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`DELTA台達210	M5M6R5
`,授課教師:`廖聰明	LIAO, TSUNG-MING
`,擋修說明:"",課程限制說明:"",第一二專長對應:"電機工程(第二專長)	電機工程(第一專長)",學分學程對應:"(跨領域)先進能源研究生學分學程",不可加簽說明:"",必選修說明:"電機系111D  選修	電機系111M  選修	"},{科號:"11120EE  592001",課程中文名稱:"書報討論",課程英文名稱:"Seminar",學分數:"1",人限:"140",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限電機碩班《系統組》學生修習",停開註記:"",教室與上課時間:`DELTA台達B05	F6F7
`,授課教師:`鄭桂忠	TANG KEA TIONG
翁詠祿	UENG, YEONG-LUH
`,擋修說明:"",課程限制說明:"限電機系碩士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"電機系111M  必修	"},{科號:"11120EE  592002",課程中文名稱:"書報討論",課程英文名稱:"Seminar",學分數:"1",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限電機碩班《電力組》學生修習",停開註記:"",教室與上課時間:`DELTA台達209	F6F7
`,授課教師:`吳財福	WU, TSAI-FU
`,擋修說明:"",課程限制說明:"限電機系碩士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"電機系111M  必修	"},{科號:"11120EE  601000",課程中文名稱:"基礎學術論文寫作",課程英文名稱:"Introduction to Academic Writing",學分數:"3",人限:"15",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"欲修習本課程之同學，請務必準時出席第一堂課。",停開註記:"",教室與上課時間:`EDU教  312	W7W8W9
`,授課教師:`徐憶萍	HSU, ANGELA YI-PING
`,擋修說明:"",課程限制說明:"限通訊所碩士班博士班,電機系碩士班博士班,電子所碩士班博士班,光電所碩士班博士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:"電機系111D  選修	電機系111M  選修	"},{科號:"11120EE  625000",課程中文名稱:"超大型積體電路測試",課程英文名稱:"VLSI Testing",學分數:"3",人限:"80",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`DELTA台達216	MaMbMc
`,授課教師:`黃錫瑜	HUANG, SHI-YU
`,擋修說明:"",課程限制說明:"",第一二專長對應:"電機工程(第二專長)	電機工程(第一專長)",學分學程對應:"(跨領域)積體電路設計學分學程",不可加簽說明:"",必選修說明:"半導體學院111D  選修	半導體學院111M  選修	電機系111D  選修	電機系111M  選修	"},{科號:"11120EE  626100",課程中文名稱:"仿生系統設計",課程英文名稱:"Biomimetic System Design",學分數:"3",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`DELTA台達210	T5T6R6
`,授課教師:`鄭桂忠	TANG KEA TIONG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"半導體學院111D  選修	半導體學院111M  選修	電機系111D  選修	電機系111M  選修	"},{科號:"11120EE  641700",課程中文名稱:"Ｈ無窮強健設計及在控制、訊號及生物之應用",課程英文名稱:"H infinity Robust Design and Its Applications to Control, Signal Processing, and Systems Biology",學分數:"3",人限:"22",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`DELTA台達212	M5M6W5
`,授課教師:`陳博現	CHEN, BOR-SEN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"電機工程(第二專長)	電機工程(第一專長)",學分學程對應:"(跨領域)金融科技與區塊鏈學分學程",不可加簽說明:"",必選修說明:"通訊所111D  選修	通訊所111M  選修	電機系111D  選修	電機系111M  選修	"},{科號:"11120EE  642000",課程中文名稱:"排隊理論",課程英文名稱:"Queuing Theory",學分數:"3",人限:"12",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`DELTA台達212	M3M4W3
`,授課教師:`鄭傑	CHENG, JAY
`,擋修說明:"",課程限制說明:"",第一二專長對應:"電機工程(第二專長)	電機工程(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"電機系111D  選修	電機系111M  選修	"},{科號:"11120EE  645300",課程中文名稱:"記憶體系統",課程英文名稱:"Memory Systems",學分數:"3",人限:"25",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"16週課程。先修課程：計算機結構",停開註記:"",教室與上課時間:`DELTA台達208	M3M4R2
`,授課教師:`呂仁碩	LIU, REN-SHUO
`,擋修說明:"",課程限制說明:"",第一二專長對應:"電機工程(第二專長)	電機工程(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"半導體學院111D  選修	半導體學院111M  選修	電機系111D  選修	電機系111M  選修	"},{科號:"11120EE  647000",課程中文名稱:"電子系統層級設計與合成",課程英文名稱:"Electronic System Level Design and Synthesis",學分數:"3",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"16週課程",停開註記:"",教室與上課時間:`DELTA台達211	M3M4W3
`,授課教師:`劉靖家	LIOU, JING-JIA
`,擋修說明:"",課程限制說明:"",第一二專長對應:"電機工程(第二專長)	電機工程(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"半導體學院111D  選修	半導體學院111M  選修	電機系111D  選修	電機系111M  選修	"},{科號:"11120EE  655000",課程中文名稱:"機器學習",課程英文名稱:"Machine Learning",學分數:"3",人限:"80",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"16週課程",停開註記:"",教室與上課時間:`DELTA台達215	W7W8W9
`,授課教師:`孫民	SUN, MIN
`,擋修說明:"",課程限制說明:"半導體學院,電資院,碩士班博士班優先，第3次選課起開放全校修習",第一二專長對應:"數據科學(第二專長)	電機工程(第二專長)	電機工程(第一專長)",學分學程對應:"(跨領域)人工智慧與應用進階學分學程/(跨領域)人工智慧與應用基礎學分學程/(跨領域)神經科學學分學程",不可加簽說明:"",必選修說明:"半導體學院111D  選修	半導體學院111M  選修	電機系111D  選修	電機系111M  選修	"},{科號:"11120EE  690000",課程中文名稱:"論文研究",課程英文名稱:"Thesis",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限電機碩二以上修習",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"排除電機系碩士班1年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"電機系111M  必修	"},{科號:"11120EE  890000",課程中文名稱:"論文研究",課程英文名稱:"Thesis",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限電機博二以上修習",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"排除電機系博士班1年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"電機系111D  必修	"},{科號:"11120EECS101001",課程中文名稱:"邏輯設計",課程英文名稱:"Logic Design",學分數:"3",人限:"75",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程上150分鐘，其餘時間由教授視情況彈性運用",停開註記:"",教室與上課時間:`DELTA台達107	M7M8R5R6
`,授課教師:`王俊堯	WANG, CHUN-YAO
`,擋修說明:"",課程限制說明:"資工系大學部1年級,電機系大學部1年級,電資院學士班大學部1年級優先，第3次選課起開放全校修習",第一二專長對應:"資訊工程(第二專長)	資訊工程(第一專長)	電機工程(第二專長)	電機工程(第一專長)",學分學程對應:"(跨領域)積體電路設計學分學程",不可加簽說明:"",必選修說明:"資工系111BA 必修	資工系111BB 必修	資工系111BC 必修	電機系111BA 必修	電機系111BB 必修	電資院學士班111B  必修	電資院學士班111BA 必修	"},{科號:"11120EECS101002",課程中文名稱:"邏輯設計",課程英文名稱:"Logic Design",學分數:"3",人限:"75",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"本課程上150分鐘，其餘時間由教授視情況彈性運用。",停開註記:"",教室與上課時間:`DELTA台達104	M7M8R5R6
`,授課教師:`麥偉基	MAK WAI KEI
`,擋修說明:"",課程限制說明:"資工系大學部1年級,電機系大學部1年級,電資院學士班大學部1年級優先，第3次選課起開放全校修習",第一二專長對應:"資訊工程(第二專長)	資訊工程(第一專長)	電機工程(第二專長)	電機工程(第一專長)",學分學程對應:"(跨領域)積體電路設計學分學程",不可加簽說明:"",必選修說明:"資工系111BA 必修	資工系111BB 必修	資工系111BC 必修	電機系111BA 必修	電機系111BB 必修	電資院學士班111B  必修	電資院學士班111BA 必修	"},{科號:"11120EECS101003",課程中文名稱:"邏輯設計",課程英文名稱:"Logic Design",學分數:"3",人限:"80",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"16週課程，本課程上150分鐘,其餘時間由教授視情形彈性運用",停開註記:"",教室與上課時間:`DELTA台達215	T5T6R6
`,授課教師:`劉怡君	LIU, YI-CHUN
`,擋修說明:"",課程限制說明:"資工系大學部,電機系大學部,電資院學士班大學部優先，第3次選課起開放全校修習",第一二專長對應:"資訊工程(第二專長)	資訊工程(第一專長)	電機工程(第二專長)	電機工程(第一專長)",學分學程對應:"(跨領域)積體電路設計學分學程",不可加簽說明:"",必選修說明:"資工系111BA 必修	資工系111BB 必修	資工系111BC 必修	電機系111BA 必修	電機系111BB 必修	電資院學士班111B  必修	電資院學士班111BA 必修	"},{科號:"11120EECS120000",課程中文名稱:"科技英語溝通技巧",課程英文名稱:"Communication skills for Engineers and Scientists",學分數:"2",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"16週課程",停開註記:"",教室與上課時間:`GEN III綜三 115	W7W8
`,授課教師:`黃芸茵	HUANG, YUN-YIN
`,擋修說明:"",課程限制說明:"電資院,大學部優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"電資院學士班108B  選修	電資院學士班108BA 選修	電資院學士班109B  選修	電資院學士班109BA 選修	電資院學士班110B  選修	電資院學士班110BA 選修	電資院學士班111B  選修	電資院學士班111BA 選修	"},{科號:"11120EECS121000",課程中文名稱:"Python語言程式入門",課程英文名稱:"Introduction to Programming in Python",學分數:"3",人限:"125",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"面授+同步+非同步,M34上機教室資電323,326,328",停開註記:"",教室與上課時間:`DELTA台達108	M3M4W2
`,授課教師:`周百祥	CHOU, PAI-HSIANG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)人工智慧與應用基礎學分學程",不可加簽說明:"",必選修說明:"電資院學士班111B  選修	"},{科號:"11120EECS202001",課程中文名稱:"訊號與系統",課程英文名稱:"Signals and Systems",學分數:"3",人限:"100",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"16週課程。大一選課必須經授課教師加簽同意始得修習。本課程每週上課150分鐘, 其餘時間由教授彈性運用",停開註記:"",教室與上課時間:`DELTA台達217	W5W6R8R9
`,授課教師:`黃承彬	HUANG, CHEN-BIN
`,擋修說明:"",課程限制說明:"資工系大學部2年級3年級4年級,電機系大學部2年級3年級4年級,電資院學士班大學部2年級3年級4年級優先，第3次選課起開放全校修習",第一二專長對應:"資訊工程(第一專長)	電機工程(第二專長)	電機工程(第一專長)	電機資訊(第一專長)	核工與能源(第二專長)",學分學程對應:"(跨領域)積體電路設計學分學程/(跨領域)神經科學學分學程",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:"資工系110BA 選修	資工系110BB 選修	資工系110BC 選修	電機系110BA 必修	電機系110BB 必修	電資院學士班110B  必修	電資院學士班110BA 必修	"},{科號:"11120EECS202002",課程中文名稱:"訊號與系統",課程英文名稱:"Signals and Systems",學分數:"3",人限:"98",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"16週課程。大一選課必須經授課教師加簽同意始得修習。本課程每週上課150分鐘, 其餘時間由教授彈性運用",停開註記:"",教室與上課時間:`DELTA台達216	W5W6R8R9
`,授課教師:`林嘉文	LIN, CHIA-WEN
`,擋修說明:"",課程限制說明:"資工系大學部2年級3年級4年級,電機系大學部2年級3年級4年級,電資院學士班大學部2年級3年級4年級優先，第3次選課起開放全校修習",第一二專長對應:"資訊工程(第一專長)	電機工程(第二專長)	電機工程(第一專長)	電機資訊(第一專長)	核工與能源(第二專長)",學分學程對應:"(跨領域)積體電路設計學分學程/(跨領域)神經科學學分學程",不可加簽說明:"",必選修說明:"資工系110BA 選修	資工系110BB 選修	資工系110BC 選修	電機系110BA 必修	電機系110BB 必修	電資院學士班110B  必修	電資院學士班110BA 必修	"},{科號:"11120EECS202003",課程中文名稱:"訊號與系統",課程英文名稱:"Signals and Systems",學分數:"3",人限:"45",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`DELTA台達108	T6F7F8
`,授課教師:`林瀚仚	LIN, HAN-HSUAN
`,擋修說明:"",課程限制說明:"資工系,電機系,電資院學士班優先，第3次選課起開放全校修習",第一二專長對應:"資訊工程(第一專長)	電機資訊(第一專長)	核工與能源(第二專長)",學分學程對應:"(跨領域)積體電路設計學分學程/(跨領域)神經科學學分學程",不可加簽說明:"",必選修說明:"資工系110BA 選修	資工系110BB 選修	資工系110BC 選修	電資院學士班110B  選修	電資院學士班110BA 選修	"},{科號:"11120EECS203001",課程中文名稱:"常微分方程",課程英文名稱:"Ordinary Differential Equations",學分數:"3",人限:"100",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程每週上課150分鐘, 其餘時間由教授彈性運用.加簽順位詳見課程大綱。",停開註記:"",教室與上課時間:`MXIC旺宏懷樸	T5T6R5R6
`,授課教師:`劉光浩	LIU, KUANG-HAO
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>微積分一-成績需D以上<BR>微積分Ａ一-成績需D以上<BR>微積分Ｂ一-成績需D以上<BR>微積分一(數學系)-成績需D以上<BR>曾修微積分一(數學系)(基本科目免修測試)<BR>曾修微積分Ａ一(基本科目免修測試)<BR>曾修微積分Ｂ一(基本科目免修測試)<BR><br>上述條件任選一科，則不擋修。</div>`,課程限制說明:"資工系大學部1年級,電機系大學部1年級,電資院學士班大學部1年級優先，第3次選課起開放全校修習",第一二專長對應:"資訊工程(第一專長)	電機工程(第二專長)	電機工程(第一專長)	電機資訊(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"資工系110BA 選修	資工系110BB 選修	資工系110BC 選修	電機系111BA 必修	電機系111BB 必修	電資院學士班111B  必修	電資院學士班111BA 必修	"},{科號:"11120EECS203002",課程中文名稱:"常微分方程",課程英文名稱:"Ordinary Differential Equations",學分數:"3",人限:"90",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"本課程每週上課150分鐘, 其餘時間由教授彈性運用.",停開註記:"",教室與上課時間:`DELTA台達216	T5T6R5R6
`,授課教師:`大江昌人	OHE, MASAHITO
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>微積分一-成績需D以上<BR>微積分Ａ一-成績需D以上<BR>微積分Ｂ一-成績需D以上<BR>微積分一(數學系)-成績需D以上<BR>曾修微積分一(數學系)(基本科目免修測試)<BR>曾修微積分Ａ一(基本科目免修測試)<BR>曾修微積分Ｂ一(基本科目免修測試)<BR><br>上述條件任選一科，則不擋修。</div>`,課程限制說明:"資工系大學部1年級,電機系大學部1年級,電資院學士班大學部1年級優先，第3次選課起開放全校修習",第一二專長對應:"資訊工程(第一專長)	電機工程(第二專長)	電機工程(第一專長)	電機資訊(第一專長)",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:"資工系110BA 選修	資工系110BB 選修	資工系110BC 選修	電機系111BA 必修	電機系111BB 必修	電資院學士班111B  必修	電資院學士班111BA 必修	"},{科號:"11120EECS302001",課程中文名稱:"計算機網路概論",課程英文名稱:"Introduction  to Computer Networks",學分數:"3",人限:"75",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`DELTA台達109	M7M8R6
`,授課教師:`邱德泉	CHIU, TE-CHUAN
`,擋修說明:"",課程限制說明:"資工系大學部3年級4年級,電機系大學部3年級4年級,電資院學士班大學部3年級4年級優先，第3次選課起開放全校修習",第一二專長對應:"資訊工程(第二專長)	資訊工程(第一專長)	電機工程(第二專長)	電機工程(第一專長)	電機資訊(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"資工系110BA 選修	資工系110BB 選修	資工系110BC 選修	電機系108BA 選修	電機系108BB 選修	電機系109BA 選修	電機系109BB 選修	電資院學士班108B  選修	電資院學士班108BA 選修	電資院學士班109B  選修	電資院學士班109BA 選修	電資院學士班110B  選修	電資院學士班110BA 選修	"},{科號:"11120EECS302002",課程中文名稱:"計算機網路概論",課程英文名稱:"Introduction  to Computer Networks",學分數:"3",人限:"100",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`DELTA台達105	M7M8R6
`,授課教師:`張正尚	CHANG, CHENG-SHANG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"資訊工程(第二專長)	資訊工程(第一專長)	電機工程(第二專長)	電機工程(第一專長)	電機資訊(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"資工系110BA 選修	資工系110BB 選修	資工系110BC 選修	電機系108BA 選修	電機系108BB 選修	電機系109BA 選修	電機系109BB 選修	電資院學士班108B  選修	電資院學士班108BA 選修	電資院學士班109B  選修	電資院學士班109BA 選修	電資院學士班110B  選修	電資院學士班110BA 選修	"},{科號:"11120EECS340000",課程中文名稱:"衛星電機系統設計",課程英文名稱:"Satellite Electrical System Design",學分數:"3",人限:"74",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`MXIC旺宏3B	RaRbRc
`,授課教師:`林信嘉	LIN, HSIN-CHIA
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(台聯大)太空科技與工程學分學程",不可加簽說明:"",必選修說明:""},{科號:"11120EECS402000",課程中文名稱:"演算法",課程英文名稱:"Algorithms",學分數:"3",人限:"90",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`DELTA台達107	W3W4F3
`,授課教師:`韓永楷	HON WING KAI
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>未修過計算方法設計<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"電資院優先，第3次選課起開放全校修習",第一二專長對應:"資訊工程(第二專長)	資訊工程(第一專長)	電機工程(第一專長)	電機資訊(第一專長)",學分學程對應:"(跨領域)積體電路設計學分學程/(跨領域)人工智慧與應用基礎學分學程",不可加簽說明:"",必選修說明:"電機系108BA 選修	電機系108BB 選修	電機系109BA 選修	電機系109BB 選修	電資院學士班108B  選修	電資院學士班108BA 選修	電資院學士班109B  選修	電資院學士班109BA 選修	"},{科號:"11120EECS403000",課程中文名稱:"計算機結構",課程英文名稱:"Computer Architecture",學分數:"3",人限:"75",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`DELTA台達109	T3T4R3
`,授課教師:`金仲達	KING, CHUNG-TA
`,擋修說明:"",課程限制說明:"電資院優先，第3次選課起開放全校修習",第一二專長對應:"資訊工程(第二專長)	資訊工程(第一專長)	電機工程(第一專長)	電機資訊(第一專長)",學分學程對應:"(跨領域)積體電路設計學分學程",不可加簽說明:"",必選修說明:"電機系108BA 選修	電機系108BB 選修	電機系109BA 選修	電機系109BB 選修	電資院學士班108B  選修	電資院學士班108BA 選修	電資院學士班109B  選修	電資院學士班109BA 選修	"},{科號:"11120EMBA501000",課程中文名稱:"論文",課程英文名稱:"Thesis",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限專二以上修習",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"限EMBA專班專班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"EMBA專班111P  必修	"},{科號:"11120EMBA501300",課程中文名稱:"財務管理",課程英文名稱:"Financial Management",學分數:"3",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`TSMC台積905	S2S3S4
`,授課教師:`張焯然	CHANG, JOW-RAN
林哲群	LIN, CHE-CHUN
`,擋修說明:"",課程限制說明:"限EMBA專班專班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"EMBA專班111P  必修	"},{科號:"11120EMBA502400",課程中文名稱:"策略",課程英文名稱:"Strategy",學分數:"3",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`TSMC台積905	S5S6S7
`,授課教師:`洪世章	HUNG, SHIH-CHANG
`,擋修說明:"",課程限制說明:"限EMBA專班專班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"EMBA專班111P  必修	"},{科號:"11120EMBA509000",課程中文名稱:"財務金融策略管理",課程英文名稱:"Strategic Management for Financial Institution",學分數:"2",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`TSMC台積901	FaFb
`,授課教師:`呂桔誠	JOSEPH JYE-CHERNG LYU
`,擋修說明:"",課程限制說明:"限EMBA專班,MBA專班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:"EMBA專班111P  選修	MBA專班111P  選修	"},{科號:"11120EMBA509500",課程中文名稱:"企業論壇",課程英文名稱:"Business Forum",學分數:"1",人限:"60",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`TSMC台積901	Ra
`,授課教師:`林哲群	LIN, CHE-CHUN
`,擋修說明:"",課程限制說明:"限EMBA專班,EMBA雙聯,健康經管專班,MBA專班,財金專班,公共政策與管理碩士專班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:"EMBA專班111P  選修	EMBA雙聯111P  選修	健康經管專班111P  選修	MBA專班111P  選修	財金專班111P  選修	公共政策與管理碩士專班111P  選修	"},{科號:"11120EMBA510000",課程中文名稱:"組織權力與領導",課程英文名稱:"Organizational Power and Leadership",學分數:"2",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`TSMC台積905	T1T2
`,授課教師:`苑廣寧	YUANN JAMES KWANGLIN
`,擋修說明:"",課程限制說明:"限EMBA專班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:"EMBA專班111P  選修	"},{科號:"11120EMBA510500",課程中文名稱:"策略性人力資源管理",課程英文名稱:"Strategic Human Resource Management",學分數:"3",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`TSMC台積901	S2S3S4
`,授課教師:`許朱勝	HSU, CHU-SHENG
陳世哲	CHEN, SHYH-JER
劉玉雯	LIU, YUWEN
`,擋修說明:"",課程限制說明:"限EMBA專班專班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"EMBA專班111P  必修	"},{科號:"11120EMBA510600",課程中文名稱:"人文思維與社會實踐",課程英文名稱:"Humanities and Social Practices",學分數:"2",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`TSMC台積905	WaWb
`,授課教師:`林聖芬	LIN, SHENG-FEN
`,擋修說明:"",課程限制說明:"限科管院,專班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"EMBA專班111P  選修	EMBA雙聯111P  選修	健康經管專班111P  選修	MBA專班111P  選修	財金專班111P  選修	公共政策與管理碩士專班111P  選修	"},{科號:"11120EMBA510900",課程中文名稱:"董總的經營哲學",課程英文名稱:"Philosophy of Business Leaders",學分數:"2",人限:"60",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`TSMC台積901	WaWb
`,授課教師:`林哲群	LIN, CHE-CHUN
`,擋修說明:"",課程限制說明:"限EMBA專班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:"EMBA專班111P  選修	"},{科號:"11120EMBA511000",課程中文名稱:"企業研究方法與倫理",課程英文名稱:"Business Research Methods and Ethics",學分數:"2",人限:"60",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`TSMC台積901	TaTb
`,授課教師:`林世昌	LIN, SHIH-CHANG
蔡昌憲	TSAI, CHANG-HSIEN
`,擋修說明:"",課程限制說明:"限EMBA專班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"EMBA專班111P  必修	"},{科號:"11120EMBA511200",課程中文名稱:"ESG與企業永續發展",課程英文名稱:"ESG and Sustainable Development of The Enterprise",學分數:"2",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`TSMC台積903	RbRc
`,授課教師:`黃裕烈	HUANG, YU-LIEH
`,擋修說明:"",課程限制說明:"限EMBA專班,EMBA雙聯,EMBA亞太馬國境外專班,EMBA深圳境外專班,健康經管專班,MBA專班,財金專班,公共政策與管理碩士專班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:"EMBA專班111P  選修	"},{科號:"11120EMBA511500",課程中文名稱:"全球跨域科技與文化管理",課程英文名稱:"Global Interdisciplinary technology and cultural management",學分數:"3",人限:"0",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"統一以加簽方式選課",停開註記:"",教室與上課時間:`TSMC台積901	M1M2M3
`,授課教師:`林世昌	LIN, SHIH-CHANG
林哲群	LIN, CHE-CHUN
`,擋修說明:"",課程限制說明:"限EMBA專班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"EMBA專班111P  選修	"},{科號:"11120EMD 500000",課程中文名稱:"論文",課程英文名稱:"Thesis",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"限EMBA雙聯專班2年級3年級4年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"EMBA雙聯111P  必修	"},{科號:"11120EMD 500600",課程中文名稱:"國際行銷",課程英文名稱:"International Marketing",學分數:"3",人限:"25",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"Dual EMBA students only",停開註記:"",教室與上課時間:`TSMC台積429	S6S7S8
`,授課教師:`EMD雙聯專班	
`,擋修說明:"",課程限制說明:"限EMBA雙聯",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"EMBA雙聯111P  必修	"},{科號:"11120EMD 500700",課程中文名稱:"公司法與公司治理",課程英文名稱:"Corporate Law & Corporate Governance",學分數:"3",人限:"25",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"Dual EMBA students only",停開註記:"",教室與上課時間:`TSMC台積429	SaSbSc
`,授課教師:`蔡昌憲	TSAI, CHANG-HSIEN
邱婉茜	CHIU, WAN-CHIEN
`,擋修說明:"",課程限制說明:"限EMBA雙聯",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"EMBA雙聯111P  必修	"},{科號:"11120EMD 500800",課程中文名稱:"知識與組織行為管理",課程英文名稱:"Management of Knowledge and Organizational Behavior",學分數:"3",人限:"25",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"Dual EMBA students only",停開註記:"",教室與上課時間:`TSMC台積429	MaMbMc
`,授課教師:`劉玉雯	LIU, YUWEN
林福仁	LIN, FU-REN
`,擋修說明:"",課程限制說明:"限EMBA雙聯專班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"EMBA雙聯111P  必修	"},{科號:"11120EMD 501100",課程中文名稱:"跨國企業管理",課程英文名稱:"Management Multinational Enterprises",學分數:"3",人限:"25",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"Dual EMBA students only",停開註記:"",教室與上課時間:`TSMC台積429	TaTbTc
`,授課教師:`EMD雙聯專班	
`,擋修說明:"",課程限制說明:"限EMBA雙聯",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"EMBA雙聯111P  必修	"},{科號:"11120EMD 501200",課程中文名稱:"策略管理",課程英文名稱:"Strategic Management",學分數:"3",人限:"25",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"Dual EMBA students only",停開註記:"",教室與上課時間:`TSMC台積429	S2S3S4
`,授課教師:`EMD雙聯專班	
`,擋修說明:"",課程限制說明:"限EMBA雙聯",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"EMBA雙聯111P  必修	"},{科號:"11120EMIM500600",課程中文名稱:"深度學習概論",課程英文名稱:"Introduction to Deep Learning",學分數:"3",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`GEN IV綜四219	S2S3S4
`,授課教師:`陳煥宗	CHEN, HWANN-TZONG
江振國	CHIANG, CHEN-KUO
賴尚宏	LAI, SHANG-HONG
`,擋修說明:"",課程限制說明:"限智慧製造高階在職學位學程專班1年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"智慧製造高階在職學位學程111P  必修	"},{科號:"11120EMIM500700",課程中文名稱:"智慧製造與營運管理",課程英文名稱:"Intelligent Manufacturing and Operations Management",學分數:"3",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`GEN IV綜四223	S5S6S7
`,授課教師:`吳建瑋	WU, CHIEN-WEI
陳建良	CHEN, CHIEN LIANG
`,擋修說明:"",課程限制說明:"限智慧製造高階在職學位學程專班1年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"智慧製造高階在職學位學程111P  必修	"},{科號:"11120EMIM501000",課程中文名稱:"AI技術實務應用",課程英文名稱:"Introduction to AI Technologies in Industrial Applications",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`GEN IV綜四223	S2S3S4
`,授課教師:`林嘉文	LIN, CHIA-WEN
`,擋修說明:"",課程限制說明:"限智慧製造高階在職學位學程",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"智慧製造高階在職學位學程111P  選修	"},{科號:"11120EMIM501400",課程中文名稱:"區域產業調研與移地學習",課程英文名稱:"Regional Industry Research and off-site Learning",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`GEN IV綜四223	RaRbRc
`,授課教師:`簡禎富	CHIEN, CHEN-FU
`,擋修說明:"",課程限制說明:"限智慧製造高階在職學位學程",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"智慧製造高階在職學位學程111P  選修	"},{科號:"11120EMIM501600",課程中文名稱:"經營策略與永續專題",課程英文名稱:" ",學分數:"3",人限:"45",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`GEN IV綜四223	FaFbFc
`,授課教師:`簡禎富	CHIEN, CHEN-FU
`,擋修說明:"",課程限制說明:"限智慧製造高階在職學位學程專班1年級2年級3年級4年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"智慧製造高階在職學位學程111P  選修	"},{科號:"11120EMIM600000",課程中文名稱:"論文",課程英文名稱:"Thesis",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限專二以上修習",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"限智慧製造高階在職學位學程專班2年級3年級4年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"智慧製造高階在職學位學程111P  必修	"},{科號:"11120EMM 600300",課程中文名稱:"財經個案研究",課程英文名稱:"Finance and Economic Cases Analysis",學分數:"2",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`Malaysia馬來西亞	TaTb
`,授課教師:`余士迪	YU, SHIH-TI
蔡子&#26215;	TSAI, TZU-HAO
`,擋修說明:"",課程限制說明:"限EMBA亞太馬國境外專班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"EMBA亞太馬國境外專班111P  選修	"},{科號:"11120EMM 600400",課程中文名稱:"高階主管經濟",課程英文名稱:"Advanced Management Economics",學分數:"2",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`Malaysia馬來西亞	SaSb
`,授課教師:`莊慧玲	CHUANG, HWEI-LIN
祁玉蘭	CHYI, YIH-LUAN
`,擋修說明:"",課程限制說明:"限EMBA亞太馬國境外專班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"EMBA亞太馬國境外專班111P  必修	"},{科號:"11120EMM 600500",課程中文名稱:"企業社會責任與管理",課程英文名稱:"Corporate Social Responsibility and Management",學分數:"2",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`Malaysia馬來西亞	MaMb
`,授課教師:`謝英哲	HSIEH, YING-CHE
張焯然	CHANG, JOW-RAN
`,擋修說明:"",課程限制說明:"限EMBA亞太馬國境外專班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"EMBA亞太馬國境外專班111P  選修	"},{科號:"11120EMM 600700",課程中文名稱:"法律、創新與公司治理",課程英文名稱:"Law, Innovation and Corporate Governance",學分數:"2",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`Malaysia馬來西亞	WaWb
`,授課教師:`蔡昌憲	TSAI, CHANG-HSIEN
林勤富	LIN, CHING-FU
`,擋修說明:"",課程限制說明:"限EMBA亞太馬國境外專班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"EMBA亞太馬國境外專班111P  選修	"},{科號:"11120EMM 609900",課程中文名稱:"論文",課程英文名稱:"Thesis",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限碩二以上修習",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"限EMBA亞太馬國境外專班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"EMBA亞太馬國境外專班111P  必修	"},{科號:"11120EMS 500300",課程中文名稱:"中國宏觀經濟",課程英文名稱:"Macroeconomics of China",學分數:"2",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"深圳劉玲玲教授授課",停開註記:"",教室與上課時間:`Shenzhen深圳研究	S1S2
`,授課教師:`深圳境外課程	
`,擋修說明:"",課程限制說明:"限EMBA深圳境外專班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"EMBA深圳境外專班111P  必修	"},{科號:"11120EMS 500500",課程中文名稱:"中國商法",課程英文名稱:"Chinese Business Law",學分數:"2",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"深圳湯欣教授授課",停開註記:"",教室與上課時間:`Shenzhen深圳研究	S3S4
`,授課教師:`深圳境外課程	
`,擋修說明:"",課程限制說明:"限EMBA深圳境外專班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"EMBA深圳境外專班111P  必修	"},{科號:"11120EMS 500700",課程中文名稱:"科技創新與管理論壇",課程英文名稱:"Technological Innovation and Management Forum",學分數:"2",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"深圳李敘鳳教授授課",停開註記:"",教室與上課時間:`Shenzhen深圳研究	S5S6
`,授課教師:`深圳境外課程	
`,擋修說明:"",課程限制說明:"限EMBA深圳境外專班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"EMBA深圳境外專班111P  必修	"},{科號:"11120EMS 500900",課程中文名稱:"創新與創業",課程英文名稱:"Innovation and Entrepreneurship",學分數:"2",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`Shenzhen深圳研究	S8S9
`,授課教師:`張元杰	CHANG, YUAN-CHIEH
胡美智	HU,MEI-CHIH
`,擋修說明:"",課程限制說明:"限EMBA深圳境外專班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"EMBA深圳境外專班111P  必修	"},{科號:"11120EMS 501900",課程中文名稱:"數據經營管理",課程英文名稱:"Critical Numbers for Decision-Making",學分數:"2",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`Shenzhen深圳研究	SaSb
`,授課教師:`林世昌	LIN, SHIH-CHANG
林哲群	LIN, CHE-CHUN
`,擋修說明:"",課程限制說明:"限EMBA深圳境外專班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"EMBA深圳境外專班111P  必修	"},{科號:"11120EMS 509900",課程中文名稱:"論文",課程英文名稱:"Thesis",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限專二以上修習",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"限EMBA深圳境外專班專班2年級3年級4年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"EMBA深圳境外專班111P  必修	"},{科號:"11120ENE 511000",課程中文名稱:"固態物理一",課程英文名稱:"Solid State Physics I",學分數:"3",人限:"51",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`DELTA台達211	R2R3R4
`,授課教師:`吳玉書	WU, YU-SHU
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"電子所111D  選修	電子所111M  選修	"},{科號:"11120ENE 512500",課程中文名稱:"半導體物理",課程英文名稱:"Semiconductor Physics",學分數:"3",人限:"32",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`DELTA台達202	T2T3T4
`,授課教師:`吳玉書	WU, YU-SHU
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"半導體學院111D  選修	半導體學院111M  選修	電子所111D  選修	電子所111M  選修	"},{科號:"11120ENE 513000",課程中文名稱:"量子力學",課程英文名稱:"Quantum Mechanics",學分數:"3",人限:"22",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`DELTA台達212	W7W8R8
`,授課教師:`洪勝富	HORNG, SHENG-FU
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"電子所111D  選修	電子所111M  選修	"},{科號:"11120ENE 525000",課程中文名稱:"微波電路分析及設計",課程英文名稱:"Analysis and Design of Microwave Circuits",學分數:"3",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`DELTA台達201	M5M6W6
`,授課教師:`徐碩鴻	HSU, SHUO-HUNG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"半導體學院111D  選修	半導體學院111M  選修	電子所111D  選修	電子所111M  選修	"},{科號:"11120ENE 531000",課程中文名稱:"微電子工程",課程英文名稱:"Silicon Processing Technology for Microelectronics",學分數:"3",人限:"53",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`DELTA台達209	W3W4F3
`,授課教師:`葉昭輝	YEH, CHAO-HUI
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)奈米與光電半導體產業學分學程",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:"電機系111D  選修	電機系111M  選修	電子所111D  選修	電子所111M  選修	"},{科號:"11120ENE 533000",課程中文名稱:"積體電路元件",課程英文名稱:"Semiconductor Devices for Integrated Circuits",學分數:"3",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`DELTA台達209	T1T2R2
`,授課教師:`林崇榮	LIN, CHRONG JUNG
`,擋修說明:"",課程限制說明:"電子所碩士班博士班優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"(跨領域)奈米與光電半導體產業學分學程",不可加簽說明:"",必選修說明:"半導體學院111D  選修	半導體學院111M  選修	電子所111D  選修	電子所111M  選修	"},{科號:"11120ENE 539500",課程中文名稱:"高速元件",課程英文名稱:"High Speed Semiconductor Devices",學分數:"3",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`DELTA台達201	M2M3M4
`,授課教師:`吳孟奇	WU, MENG-CHYI
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"電子所111D  選修	電子所111M  選修	"},{科號:"11120ENE 553000",課程中文名稱:"兆赫波科技",課程英文名稱:"Terahertz Science and Technology",學分數:"3",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`DELTA台達208	M5M6W7
`,授課教師:`楊尚樺	YANG, SHANG-HUA
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>未修過兆赫波科技特論<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"電子所111D  選修	電子所111M  選修	"},{科號:"11120ENE 592000",課程中文名稱:"書報討論",課程英文名稱:"Seminar",學分數:"1",人限:"135",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`DELTA台達215	F6F7
`,授課教師:`黃智方	HUANG, CHIH-FANG
劉怡君	LIU, YI-CHUN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"電子所111M  必修	"},{科號:"11120ENE 631000",課程中文名稱:"半導體光偵測器與電路",課程英文名稱:"Semiconductor Photodetectors and Circuits",學分數:"3",人限:"53",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`DELTA台達209	T7T8R7
`,授課教師:`徐永珍	HSU, YUNG-JANE
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>未修過半導體光偵測器與電路特論<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:"半導體學院111D  選修	半導體學院111M  選修	電子所111D  選修	電子所111M  選修	"},{科號:"11120ENE 634000",課程中文名稱:"半導體功率元件",課程英文名稱:"Semiconductor Power Devices",學分數:"3",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`DELTA台達208	T7T8R7
`,授課教師:`黃智方	HUANG, CHIH-FANG
`,擋修說明:"",課程限制說明:"電子所優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"半導體學院111D  選修	半導體學院111M  選修	電機系111D  選修	電機系111M  選修	電子所111D  選修	電子所111M  選修	"},{科號:"11120ENE 638000",課程中文名稱:"邏輯非揮發性記憶體",課程英文名稱:"Logic Non-Volatile Memory",學分數:"3",人限:"135",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`DELTA台達217	W7W8W9
`,授課教師:`金雅琴	KING, YA-CHIN
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>未修過邏輯非揮發性記憶體特論<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"半導體學院,電子所優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:"半導體學院111D  選修	半導體學院111M  選修	電子所111D  選修	電子所111M  選修	"},{科號:"11120ENE 641000",課程中文名稱:"半導體雷射",課程英文名稱:"Semiconductor Lasers",學分數:"3",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`DELTA台達201	W2W3W4
`,授課教師:`吳孟奇	WU, MENG-CHYI
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"電子所111D  選修	電子所111M  選修	"},{科號:"11120ENE 690000",課程中文名稱:"論文研究",課程英文名稱:"Thesis",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限電子所碩二以上修習",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"排除電子所碩士班1年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"電子所111M  必修	"},{科號:"11120ENE 890000",課程中文名稱:"論文研究",課程英文名稱:"Thesis",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限電子所博二以上修習",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"排除電子所博士班1年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"電子所111D  必修	"},{科號:"11120ESS 100200",課程中文名稱:"工程與系統科學探索",課程英文名稱:"Exploring ESS",學分數:"1",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程隔週上課",停開註記:"",教室與上課時間:`ESS工科 501	W7W8
`,授課教師:`歐陽汎怡	OU YANG, FAN-YI
陳燦耀	CHEN, TSAN-YAO
吳順吉	WU, SHUN-CHI
`,擋修說明:"",課程限制說明:"限工科系",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"工科系111BA 選修	工科系111BB 選修	"},{科號:"11120ESS 104001",課程中文名稱:"熱流工程導論",課程英文名稱:"Introduction to Engineering Thermofluidic",學分數:"3",人限:"60",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`ESS工科 506	M5M6R5
`,授課教師:`王翔郁	WANG, HSIANG-YU
陳紹文	CHEN, SHAO-WEN
林洸銓	LIN, KUANG-CHUAN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"工科系111BA 必修	"},{科號:"11120ESS 104002",課程中文名稱:"熱流工程導論",課程英文名稱:"Introduction to Engineering Thermofluidic",學分數:"3",人限:"60",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`ESS工科 506	T5T6R6
`,授課教師:`王翔郁	WANG, HSIANG-YU
陳紹文	CHEN, SHAO-WEN
林洸銓	LIN, KUANG-CHUAN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"工科系111BB 必修	"},{科號:"11120ESS 105000",課程中文名稱:"能源與環境概論",課程英文名稱:"Introduction to Energy and Environment",學分數:"2",人限:"140",新生保留人數:"0",通識對象:"*3",通識類別:"自然科學領域 Elective GE course: Natural Sciences",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`ESS工科NE69	W3W4
`,授課教師:`陳燦耀	CHEN, TSAN-YAO
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"工科系111BA 選修	工科系111BB 選修	原科院學士班111B  必修	"},{科號:"11120ESS 204001",課程中文名稱:"工程數學二",課程英文名稱:"Engineering Mathematics II",學分數:"3",人限:"60",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程上150分鐘，其餘時間由教授視情形彈性運用。",停開註記:"",教室與上課時間:`ESS工科 501	W3W4F3F4
`,授課教師:`陳健群	CHEN, CHEIN-CHUN
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>曾修微積分一<BR>曾修微積分Ａ一<BR>曾修微積分Ｂ一<BR>曾修微積分一(數學系)<BR>曾修微積分一(數學系)(基本科目免修測試)<BR>曾修微積分Ａ一(基本科目免修測試)<BR>曾修微積分Ｂ一(基本科目免修測試)<BR><br>上述條件任選一科，而且<br><BR>曾修微積分二<BR>曾修微積分Ｂ二<BR>曾修微積分二(數學系)<BR>曾修微積分Ａ二<BR><br>上述條件任選一科，則不擋修。</div>`,課程限制說明:"工科系大學部清班優先，第3次選課起開放全校修習",第一二專長對應:"工程與系統科學(第一專長)	材料科學工程(第二專長)	材料科學工程(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"工科系110BA 必修	原科院學士班110B  必修	"},{科號:"11120ESS 204002",課程中文名稱:"工程數學二",課程英文名稱:"Engineering Mathematics II",學分數:"3",人限:"60",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程上150分鐘，其餘時間由教授視情形彈性運用。",停開註記:"",教室與上課時間:`ESS工科NE69	T3T4R3R4
`,授課教師:`陳健群	CHEN, CHEIN-CHUN
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>曾修微積分一<BR>曾修微積分Ａ一<BR>曾修微積分Ｂ一<BR>曾修微積分一(數學系)<BR>曾修微積分一(數學系)(基本科目免修測試)<BR>曾修微積分Ａ一(基本科目免修測試)<BR>曾修微積分Ｂ一(基本科目免修測試)<BR><br>上述條件任選一科，而且<br><BR>曾修微積分二<BR>曾修微積分Ｂ二<BR>曾修微積分二(數學系)<BR>曾修微積分Ａ二<BR><br>上述條件任選一科，則不擋修。</div>`,課程限制說明:"工科系大學部華班優先，第3次選課起開放全校修習",第一二專長對應:"工程與系統科學(第一專長)	材料科學工程(第二專長)	材料科學工程(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"工科系110BB 必修	原科院學士班110B  必修	"},{科號:"11120ESS 225000",課程中文名稱:"電子學二",課程英文名稱:"Electronics II",學分數:"3",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程上150分鐘，其餘時間由教授視情形彈性運用。",停開註記:"",教室與上課時間:`ESS工科NE69	F7F8F9
`,授課教師:`盧志文	LU, CHIH-WEN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"核工與能源(第二專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"工科系110BA 選修	工科系110BB 選修	"},{科號:"11120ESS 226001",課程中文名稱:"電子學實驗二",課程英文名稱:"Electronics Lab. II",學分數:"2",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`ESS工科 304	T9TaTbTc
`,授課教師:`巫勇賢	WU, YUNG-HSIEN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"工科系110BA 選修	"},{科號:"11120ESS 226002",課程中文名稱:"電子學實驗二",課程英文名稱:"Electronics Lab. II",學分數:"2",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`ESS工科 404	M9MaMbMc
`,授課教師:`巫勇賢	WU, YUNG-HSIEN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"工科系110BB 選修	"},{科號:"11120ESS 233000",課程中文名稱:"電磁學一",課程英文名稱:"Electromagnetism I",學分數:"3",人限:"60",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"xclass。本課程上150分鐘，其餘時間由教授視情形彈性運用。",停開註記:"",教室與上課時間:`ESS工科 503	M5M6R1R2
`,授課教師:`柳克強	LEOU, KEH-CHYANG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"醫學物理(第二專長)	核工與能源(第二專長)	動力機械工程(第二專長)	動力機械工程(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"工科系110BA 選修	工科系110BB 選修	"},{科號:"11120ESS 241000",課程中文名稱:"工程熱力學",課程英文名稱:"Engineering Thermodynamics",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"本課程上150分鐘，其餘時間由教授視情形彈性運用。",停開註記:"",教室與上課時間:`ESS工科 504	M7M8R5R6
`,授課教師:`李敏	LEE, MIN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"核工與能源(第二專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"工科系110BA 選修	工科系110BB 選修	"},{科號:"11120ESS 250001",課程中文名稱:"材料科學導論一",課程英文名稱:"Introduction to Materials Science I",學分數:"3",人限:"60",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`ESS工科 501	T5T6R6
`,授課教師:`歐陽汎怡	OU YANG, FAN-YI
`,擋修說明:"",課程限制說明:"工科系大學部清班優先，第3次選課起開放全校修習",第一二專長對應:"工程與系統科學(第一專長)	材料科學工程(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"工科系111BA 必修	原科院學士班111B  選修	"},{科號:"11120ESS 250002",課程中文名稱:"材料科學導論一",課程英文名稱:"Introduction to Materials Science I",學分數:"3",人限:"60",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`ESS工科 501	M5M6R5
`,授課教師:`藍貫哲	LAN, KUAN-CHE
`,擋修說明:"",課程限制說明:"工科系大學部華班優先，第3次選課起開放全校修習",第一二專長對應:"工程與系統科學(第一專長)	材料科學工程(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"工科系111BB 必修	原科院學士班111B  選修	"},{科號:"11120ESS 251000",課程中文名稱:"材料熱力學",課程英文名稱:"Thermodynamics of Materials",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程上150分鐘，其餘時間由教授視情形彈性運用。",停開註記:"",教室與上課時間:`ESS工科 406	T5T6F5F6
`,授課教師:`朱鵬維	CHU, PENG-WEI
`,擋修說明:"",課程限制說明:"",第一二專長對應:"材料科學工程(第一專長)	核工與能源(第二專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"工科系110BA 選修	工科系110BB 選修	"},{科號:"11120ESS 260000",課程中文名稱:"工程化學概論",課程英文名稱:"Introductory Chemistry for Engineers",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`ESS工科 302	M5M6R5
`,授課教師:`王本誠	WANG, PEN-CHENG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"工科系109BA 選修	工科系109BB 選修	工科系110BA 選修	工科系110BB 選修	"},{科號:"11120ESS 302001",課程中文名稱:"近代物理一",課程英文名稱:"Modern Physics I",學分數:"3",人限:"60",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程上150分鐘，其餘時間由教授視情形彈性運用。",停開註記:"",教室與上課時間:`ESS工科 503	T3T4R3R4
`,授課教師:`陳馨怡	CHEN, HSIN-YI
`,擋修說明:"",課程限制說明:"工科系大學部清班優先，第3次選課起開放全校修習",第一二專長對應:"工程與系統科學(第一專長)	醫學物理(第二專長)	核工與能源(第二專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"工科系110BA 必修	原科院學士班110B  選修	"},{科號:"11120ESS 302002",課程中文名稱:"近代物理一",課程英文名稱:"Modern Physics I",學分數:"3",人限:"60",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程上150分鐘，其餘時間由教授視情形彈性運用。",停開註記:"",教室與上課時間:`ESS工科 503	W3W4F3F4
`,授課教師:`陳馨怡	CHEN, HSIN-YI
`,擋修說明:"",課程限制說明:"工科系大學部華班優先，第3次選課起開放全校修習",第一二專長對應:"工程與系統科學(第一專長)	醫學物理(第二專長)	核工與能源(第二專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"工科系110BB 必修	原科院學士班110B  選修	"},{科號:"11120ESS 304000",課程中文名稱:"機率與統計",課程英文名稱:"Probability and Statistics",學分數:"3",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程上150分鐘，其餘時間由教授視情形彈性運用。",停開註記:"",教室與上課時間:`ESS工科 501	T3T4R3R4
`,授課教師:`蕭百沂	HSIAO, PAI-YI
`,擋修說明:"",課程限制說明:"",第一二專長對應:"醫學物理(第二專長)",學分學程對應:"(跨領域)人工智慧與應用基礎學分學程/(跨領域)音樂科技與健康學分學程/(跨領域)神經科學學分學程",不可加簽說明:"",必選修說明:"工科系109BA 選修	工科系109BB 選修	"},{科號:"11120ESS 325000",課程中文名稱:"控制系統",課程英文名稱:"Feedback Control Systems",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`ESS工科 406	M3M4W2
`,授課教師:`蘇育全	SU, YU-CHUAN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"核工與能源(第二專長)",學分學程對應:"(跨領域)奈米與光電半導體產業學分學程/(跨領域)奈米科技學分學程",不可加簽說明:"",必選修說明:"工科系109BA 選修	工科系109BB 選修	"},{科號:"11120ESS 327100",課程中文名稱:"量測系統實驗",課程英文名稱:"Measurement System Experiments",學分數:"2",人限:"16",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`ESS工科 405	F7F8F9
`,授課教師:`蘇育全	SU, YU-CHUAN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"工科系109BA 選修	工科系109BB 選修	"},{科號:"11120ESS 340000",課程中文名稱:"熱傳學",課程英文名稱:"Heat Transfer",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"本課程上150分鐘，其餘時間由教授視情形彈性運用。",停開註記:"",教室與上課時間:`ESS工科 502	T3T4R3R4
`,授課教師:`李敏	LEE, MIN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"核工與能源(第二專長)",學分學程對應:"(跨領域)微系統科技整合學分學程/(跨領域)先進能源研究生學分學程",不可加簽說明:"",必選修說明:"工科系109BA 選修	工科系109BB 選修	原科院學士班109B  選修	"},{科號:"11120ESS 341000",課程中文名稱:"熱流學實驗",課程英文名稱:"Heat Transfer Laboratory",學分數:"2",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`ESS工科 320	TaTbTc
`,授課教師:`林洸銓	LIN, KUANG-CHUAN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"工科系109BA 選修	工科系109BB 選修	原科院學士班108B  選修	"},{科號:"11120ESS 352000",課程中文名稱:"物理冶金二",課程英文名稱:"Physical Metallurgy II",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程上150分鐘，其餘時間由教授視情形彈性運用。",停開註記:"",教室與上課時間:`ESS工科 406	W3W4F3F4
`,授課教師:`黃嘉宏	HUANG, JIA-HONG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"核工與能源(第二專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"工科系109BA 選修	工科系109BB 選修	"},{科號:"11120ESS 401200",課程中文名稱:"核能安全",課程英文名稱:"Nuclear Power Reactor Safety",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`ESS工科 302	T5T6T7
`,授課教師:`馮玉明	FERNG, YUH-MING
`,擋修說明:"",課程限制說明:"",第一二專長對應:"核工與能源(第二專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"工科系108BA 選修	工科系108BB 選修	原科院學士班108B  選修	核工所111M  選修	"},{科號:"11120ESS 401300",課程中文名稱:"書報討論二",課程英文名稱:"Seminar(II)",學分數:"1",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"與工程系統專題研究擇一必修。",停開註記:"",教室與上課時間:`ESS工科 504	M5M6
`,授課教師:`陳馨怡	CHEN, HSIN-YI
`,擋修說明:"",課程限制說明:"限工科系大學部",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"工科系108BA 必修	工科系108BB 必修	"},{科號:"11120ESS 423000",課程中文名稱:"半導體製程",課程英文名稱:"Semiconductor Processing",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`ESS工科NE69	F2F3F4
`,授課教師:`吳文發	WU, WEN-FA
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)奈米與光電半導體產業學分學程/(跨領域)奈米科技學分學程",不可加簽說明:"",必選修說明:"工科系108BA 選修	工科系108BB 選修	"},{科號:"11120ESS 427000",課程中文名稱:"機器學習導論",課程英文名稱:"Introduction to Machine Learning",學分數:"3",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程上150分鐘，其餘時間由教授彈性運用",停開註記:"",教室與上課時間:`ESS工科 503	T5T6R5R6
`,授課教師:`吳順吉	WU, SHUN-CHI
`,擋修說明:"",課程限制說明:"",第一二專長對應:"數據科學(第二專長)	醫學物理(第二專長)",學分學程對應:"(跨領域)數據科學學分學程/(跨領域)人工智慧與應用進階學分學程/(跨領域)人工智慧與應用基礎學分學程/(跨領域)神經科學學分學程",不可加簽說明:"",必選修說明:"工科系108BA 選修	工科系108BB 選修	原科院學士班108B  選修	核工所111M  選修	"},{科號:"11120ESS 430000",課程中文名稱:"固態物理導論一",課程英文名稱:"Introduction to Solid State Physics I",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"台積電學程 / 本課程上150分鐘，其餘時間由教授視情形彈性運用。",停開註記:"",教室與上課時間:`ESS工科 503	M3M4W1W2
`,授課教師:`吳永俊	WU, YUNG-CHUN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"工程與系統科學(第一專長)	核工與能源(第二專長)",學分學程對應:"(跨領域)光電學分學程",不可加簽說明:"",必選修說明:"工科系108BA 選修	工科系108BB 選修	"},{科號:"11120ESS 450000",課程中文名稱:"材料機械性質",課程英文名稱:"Mechanical Properties of Materials",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程上150分鐘，其餘時間由教授彈性運用",停開註記:"",教室與上課時間:`LTM綠能201	T5T6F5F6
`,授課教師:`藍貫哲	LAN, KUAN-CHE
`,擋修說明:"",課程限制說明:"",第一二專長對應:"材料科學工程(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"工科系108BA 選修	工科系108BB 選修	核工所111M  選修	"},{科號:"11120ESS 454000",課程中文名稱:"燃料電池原理與應用",課程英文名稱:"Principles and Applications of Fuel Cells",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`ESS工科 501	R7R8R9
`,授課教師:`葉宗洸	YEH, TSUNG-KUANG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"核工與能源(第二專長)",學分學程對應:"(跨領域)先進能源研究生學分學程",不可加簽說明:"",必選修說明:"工科系108BA 選修	工科系108BB 選修	原科院學士班109B  選修	核工所111M  選修	"},{科號:"11120ESS 455000",課程中文名稱:"太陽光電創意專題實作",課程英文名稱:"Solar Cell Laboratory and Project Study",學分數:"1",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`LTM綠能202	Wa
`,授課教師:`吳永俊	WU, YUNG-CHUN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"工科系108BA 選修	工科系108BB 選修	原科院學士班109B  選修	核工所111M  選修	"},{科號:"11120ESS 480000",課程中文名稱:"奈微米系統工程原理",課程英文名稱:"Principles of Nano and Micro Systems Engineering",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`ESS工科 406	W7W8W9
`,授課教師:`蘇育全	SU, YU-CHUAN
曾繁根	TSENG, FAN-GANG
王本誠	WANG, PEN-CHENG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"核工與能源(第二專長)",學分學程對應:"(跨領域)奈米科技學分學程",不可加簽說明:"",必選修說明:"工科系108BA 選修	工科系108BB 選修	"},{科號:"11120ESS 498000",課程中文名稱:"工程系統專題研究一",課程英文名稱:"Independent Study in Engineering & System Science I",學分數:"1",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"與書報討論擇一必修",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"工科系108BA 必修	工科系108BB 必修	工科系109BA 必修	工科系109BB 必修	"},{科號:"11120ESS 499000",課程中文名稱:"工程系統專題研究二",課程英文名稱:"Independent Study in Engineering & System Science II",學分數:"1",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"與書報討論擇一必修",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"工科系108BA 必修	工科系108BB 必修	"},{科號:"11120ESS 500000",課程中文名稱:"專題演講",課程英文名稱:"Colloquium",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"",停開註記:"",教室與上課時間:`ESS工科NE69	W7W8
`,授課教師:`朱鵬維	CHU, PENG-WEI
陳馨怡	CHEN, HSIN-YI
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"工科系111D  必修	工科系111M  必修	先進光源學位學程111DB 必修	先進光源學位學程111MB 必修	"},{科號:"11120ESS 502001",課程中文名稱:"書報討論",課程英文名稱:"Seminar",學分數:"1",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`ESS工科 506	W5W6
`,授課教師:`李志浩	LEE, CHIH-HAO
`,擋修說明:"",課程限制說明:"限碩士班博士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"工科系111D  必修	工科系111M  必修	先進光源學位學程111DB 必修	先進光源學位學程111MB 必修	"},{科號:"11120ESS 502002",課程中文名稱:"書報討論",課程英文名稱:"Seminar",學分數:"1",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`ESS工科 501	W5W6
`,授課教師:`曾繁根	TSENG, FAN-GANG
`,擋修說明:"",課程限制說明:"限碩士班博士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"工科系111D  必修	工科系111M  必修	先進光源學位學程111DB 必修	先進光源學位學程111MB 必修	"},{科號:"11120ESS 502003",課程中文名稱:"書報討論",課程英文名稱:"Seminar",學分數:"1",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`LTM綠能308	W5W6
`,授課教師:`王翔郁	WANG, HSIANG-YU
`,擋修說明:"",課程限制說明:"限碩士班博士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"工科系111D  必修	工科系111M  必修	"},{科號:"11120ESS 502004",課程中文名稱:"書報討論",課程英文名稱:"Seminar",學分數:"1",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`ESS工科 503	W5W6
`,授課教師:`朱鵬維	CHU, PENG-WEI
`,擋修說明:"",課程限制說明:"限碩士班博士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"工科系111D  必修	工科系111M  必修	先進光源學位學程111DB 必修	先進光源學位學程111MB 必修	"},{科號:"11120ESS 502005",課程中文名稱:"書報討論",課程英文名稱:"Seminar",學分數:"1",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`ESS工科 302	W5W6
`,授課教師:`張廖貴術	CHANG LIAO, KUEI-SHU
`,擋修說明:"",課程限制說明:"限碩士班博士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"工科系111D  必修	工科系111M  必修	先進光源學位學程111DB 必修	先進光源學位學程111MB 必修	"},{科號:"11120ESS 502006",課程中文名稱:"書報討論",課程英文名稱:"Seminar",學分數:"1",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`ESS工科 302	FaFb
`,授課教師:`吳順吉	WU, SHUN-CHI
`,擋修說明:"",課程限制說明:"限碩士班博士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"工科系111D  必修	工科系111M  必修	先進光源學位學程111DB 必修	先進光源學位學程111MB 必修	"},{科號:"11120ESS 523000",課程中文名稱:"半導體元件物理",課程英文名稱:"Semiconductor Devices Physics",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程上150分鐘，其餘時間由教授視情形彈性運用。",停開註記:"",教室與上課時間:`ESS工科 501	M3M4W1W2
`,授課教師:`張廖貴術	CHANG LIAO, KUEI-SHU
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)奈米與光電半導體產業學分學程/(跨領域)奈米科技學分學程",不可加簽說明:"",必選修說明:"半導體學院111D  選修	半導體學院111M  選修	工科系111D  選修	工科系111M  選修	"},{科號:"11120ESS 527100",課程中文名稱:"微波工程",課程英文名稱:"Microwave Engineering",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"xclass",停開註記:"",教室與上課時間:`ESS工科 502	F5F6F7
`,授課教師:`柳克強	LEOU, KEH-CHYANG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"半導體學院111D  選修	半導體學院111M  選修	工科系111D  選修	工科系111M  選修	"},{科號:"11120ESS 537500",課程中文名稱:"先進製程特論",課程英文名稱:"Special Topics on Advanced Process Technology",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"台積電學程 / 另1位為李正中教師 / 本課程為16週課程",停開註記:"",教室與上課時間:`ESS工科NE69	R5R6R7
`,授課教師:`聘任中	
蘇紘儀	SU, DAVID HUNG-I
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"工科系111D  選修	工科系111M  選修	"},{科號:"11120ESS 552000",課程中文名稱:"高等物理冶金",課程英文名稱:"Advanced Physical Metallurgy",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程上150分鐘，其餘時間由教授視情形彈性運用。",停開註記:"",教室與上課時間:`ESS工科 504	T5T6F5F6
`,授課教師:`黃嘉宏	HUANG, JIA-HONG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"工科系111D  選修	工科系111M  選修	"},{科號:"11120ESS 568001",課程中文名稱:"輻射度量實驗",課程英文名稱:"Radiation Detection and Measurement Lab.",學分數:"2",人限:"18",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"工科新館102室",停開註記:"",教室與上課時間:`ESS工科102	T8T9TaTb
`,授課教師:`李志浩	LEE, CHIH-HAO
`,擋修說明:"",課程限制說明:"",第一二專長對應:"核工與能源(第二專長)",學分學程對應:"(跨領域)醫學物理學分學程",不可加簽說明:"",必選修說明:"工科系108BA 選修	工科系108BB 選修	工科系111D  選修	工科系111M  選修	原科院學士班108B  選修	核工所111D  選修	核工所111M  選修	"},{科號:"11120ESS 571500",課程中文名稱:"高分子物理",課程英文名稱:"Polymer Physics",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`ESS工科 503	M7M8M9
`,授課教師:`蕭百沂	HSIAO, PAI-YI
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"工科系111D  選修	工科系111M  選修	核工所111D  選修	核工所111M  選修	"},{科號:"11120ESS 573000",課程中文名稱:"先進太陽能電池",課程英文名稱:"Advanced Solar Cells",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`ESS工科 506	F6F7F8
`,授課教師:`陳燦耀	CHEN, TSAN-YAO
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)先進能源研究生學分學程",不可加簽說明:"",必選修說明:"工科系111D  選修	工科系111M  選修	原科院學士班110B  選修	核工所111D  選修	核工所111M  選修	"},{科號:"11120ESS 584000",課程中文名稱:"電子構裝冷卻理論與實驗",課程英文名稱:"Electronics Cooling System Design",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`ESS工科 302	R6R7R8
`,授課教師:`林唯耕	LIN, WEI-KENG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)先進能源研究生學分學程",不可加簽說明:"",必選修說明:"工科系111D  選修	工科系111M  選修	"},{科號:"11120ESS 584500",課程中文名稱:"奈微米生醫及流體系統",課程英文名稱:"Nano/Micro Biomedical and Fluidic Systems",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`ESS工科 406	R6R7R8
`,授課教師:`曾繁根	TSENG, FAN-GANG
楊重熙	YANG, CHUNG-SHI
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)奈米與光電半導體產業學分學程/(跨領域)奈米科技學分學程",不可加簽說明:"",必選修說明:"工科系111D  選修	工科系111M  選修	"},{科號:"11120ESS 589800",課程中文名稱:"軟物質科學導論",課程英文名稱:"Introduction to Soft Condensed Matter",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`ESS工科 302	F5F6F7
`,授課教師:`王本誠	WANG, PEN-CHENG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"工科系111D  選修	工科系111M  選修	"},{科號:"11120ESS 634000",課程中文名稱:"高等電漿工程",課程英文名稱:"Advanced Plasma Engineering",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`ESS工科 502	R9RaRb
`,授課教師:`柳克強	LEOU, KEH-CHYANG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"工科系111D  選修	工科系111M  選修	"},{科號:"11120ESS 699000",課程中文名稱:"論文研究",課程英文名稱:"Thesis",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限工科所碩二以上修習",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"排除工科系碩士班1年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"工科系111M  必修	"},{科號:"11120ESS 999000",課程中文名稱:"論文研究",課程英文名稱:"Thesis",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限工科所博二以上修習",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"排除工科系博士班1年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"工科系111D  必修	"},{科號:"11120EST 710200",課程中文名稱:"博士班專題研究二",課程英文名稱:"PhD Graduate Research (II)",學分數:"1",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"博二",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"排除環境博士學程博士班1年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"環境博士學程111D  必修	"},{科號:"11120EST 810200",課程中文名稱:"論文研究",課程英文名稱:"Thesis",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"限環境博士學程博士班3年級4年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"環境博士學程111D  必修	"},{科號:"11120FL  100600",課程中文名稱:"西洋文學概論二",課程英文名稱:"Introduction to Western Literature II",學分數:"3",人限:"70",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程為 16 週課程，輔助遠距",停開註記:"",教室與上課時間:`HSS人社C411	T7T8T9
`,授課教師:`吳建亨	WU, CHIEN-HENG
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>西洋文學概論一-成績需C-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"限外語系",第一二專長對應:"外國語文(第二專長)	外國語文(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"外語系111B  必修	"},{科號:"11120FL  101900",課程中文名稱:"應用語言學",課程英文名稱:"Introduction to Applied Linguistics",學分數:"3",人限:"70",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"本課程為 16 週課程",停開註記:"",教室與上課時間:`HSS人社C406	M3M4Mn
`,授課教師:`許淳潔	HSU, CHUN-CHIEH
`,擋修說明:`<div>
  擋修對象 : 大學部 <br>
  先修科目 : <BR><BR>語言學概論-成績需D以上<BR>語言學導論-成績需D以上<BR><br>上述條件任選一科，則不擋修。</div>`,課程限制說明:"限外語系",第一二專長對應:"外國語文(第二專長)	外國語文(第一專長)",學分學程對應:"(跨領域)語言治療學分學程",不可加簽說明:"",必選修說明:"外語系111B  必修	"},{科號:"11120FL  102001",課程中文名稱:"英文二",課程英文名稱:"English II",學分數:"3",人限:"18",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"本課程為 16 週課程，非外語系同學選此科無法抵《英文領域必修》",停開註記:"",教室與上課時間:`HSS人社C412	W3W4Wn
`,授課教師:`楊梵孛	YANG, FAN-PEI
`,擋修說明:`<div>
  擋修對象 : 外語系 <br>
  先修科目 : <BR><BR>曾修英文一<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"【上學期原修英文一FL  101001(楊梵孛老師)同學選課優先,第3次選課起開放】",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:"外語系111B  必修	"},{科號:"11120FL  102002",課程中文名稱:"英文二",課程英文名稱:"English II",學分數:"3",人限:"18",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"非外語系同學選此科無法抵《英文領域必修》",停開註記:"",教室與上課時間:`HSS人社C407	W3W4Wn
`,授課教師:`張銪容	CHANG, YU-JUNG
`,擋修說明:`<div>
  擋修對象 : 外語系 <br>
  先修科目 : <BR><BR>曾修英文一<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"【上學期原修英文一FL  101002(張銪容老師)同學選課優先,第3次選課起開放】",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:"外語系111B  必修	"},{科號:"11120FL  102003",課程中文名稱:"英文二",課程英文名稱:"English II",學分數:"3",人限:"18",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"本課程為 16 週課程，非外語系同學選此科無法抵《英文領域必修》",停開註記:"",教室與上課時間:`HSS人社C522	W3W4Wn
`,授課教師:`陳宗穎	CHEN, TSUNG-YING
`,擋修說明:`<div>
  擋修對象 : 外語系 <br>
  先修科目 : <BR><BR>曾修英文一<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"【上學期原修英文一FL  101003(陳宗穎老師)同學選課優先,第3次選課起開放】",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:"外語系111B  必修	"},{科號:"11120FL  102801",課程中文名稱:"進階英文：閱讀與討論",課程英文名稱:"Advanced English: Reading and Discussion",學分數:"2",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`HSS人社C412	M1M2
`,授課教師:`秦震宇	CHIN, CHEN-YU
`,擋修說明:"",課程限制說明:"限進階生,進階生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:""},{科號:"11120FL  102802",課程中文名稱:"進階英文：閱讀與討論",課程英文名稱:"Advanced English: Reading and Discussion",學分數:"2",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`HSS人社C406	M1M2
`,授課教師:`呂文仁	LIU, WEN-REN
`,擋修說明:"",課程限制說明:"限進階生,進階生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:""},{科號:"11120FL  102803",課程中文名稱:"進階英文：閱讀與討論",課程英文名稱:"Advanced English: Reading and Discussion",學分數:"2",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`HSS人社C522	M3M4
`,授課教師:`郭詩芝	KUO, SHIH-CHIH
`,擋修說明:"",課程限制說明:"限進階生,進階生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:""},{科號:"11120FL  102804",課程中文名稱:"進階英文：閱讀與討論",課程英文名稱:"Advanced English: Reading and Discussion",學分數:"2",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`HSS人社B303	W3W4
`,授課教師:`林雅瓊	LIM, NGA-KHING
`,擋修說明:"",課程限制說明:"限進階生,進階生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:""},{科號:"11120FL  102805",課程中文名稱:"進階英文：閱讀與討論",課程英文名稱:"Advanced English: Reading and Discussion",學分數:"2",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`EDU教   305	R1R2
`,授課教師:`鄺粵敏	KWONG, YUET MAN
`,擋修說明:"",課程限制說明:"限進階生,進階生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:""},{科號:"11120FL  102806",課程中文名稱:"進階英文：聽講",課程英文名稱:"Advanced English: Listening and Speaking",學分數:"2",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`HSS人社C522	M1M2
`,授課教師:`郭詩芝	KUO, SHIH-CHIH
`,擋修說明:"",課程限制說明:"限進階生,進階生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:""},{科號:"11120FL  102807",課程中文名稱:"進階英文：聽講",課程英文名稱:"Advanced English: Listening and Speaking",學分數:"2",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`EDU教   305	M1M2
`,授課教師:`鄺粵敏	KWONG, YUET MAN
`,擋修說明:"",課程限制說明:"限進階生,進階生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:""},{科號:"11120FL  102808",課程中文名稱:"進階英文：聽講",課程英文名稱:"Advanced English: Listening and Speaking",學分數:"2",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`HSS人社B304	M3M4
`,授課教師:`詹智婷	CHAN, CHIH-TING
`,擋修說明:"",課程限制說明:"限進階生,進階生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:""},{科號:"11120FL  102809",課程中文名稱:"進階英文：聽講",課程英文名稱:"Advanced English: Listening and Speaking",學分數:"2",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`HSS人社C511	W3W4
`,授課教師:`詹智婷	CHAN, CHIH-TING
`,擋修說明:"",課程限制說明:"限進階生,進階生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:""},{科號:"11120FL  102810",課程中文名稱:"進階英文：聽講",課程英文名稱:"Advanced English: Listening and Speaking",學分數:"2",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`HSS人社C412	R1R2
`,授課教師:`馬紹芸	MA, SHAO-YUN
`,擋修說明:"",課程限制說明:"限進階生,進階生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:""},{科號:"11120FL  102811",課程中文名稱:"進階英文：聽講",課程英文名稱:"Advanced English: Listening and Speaking",學分數:"2",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`HSS人社C522	F3F4
`,授課教師:`周寶齡	 
`,擋修說明:"",課程限制說明:"限進階生,進階生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:""},{科號:"11120FL  103600",課程中文名稱:"文學作品讀法二",課程英文名稱:"Introduction to Literature II",學分數:"3",人限:"70",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"本課程為 16 週課程",停開註記:"",教室與上課時間:`HSS人社C406	R2R3R4
`,授課教師:`黃仕宜	HUANG, SHIH-YI
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>文學作品讀法一-成績需C-以上<BR><br>上述條件任選一科，則不擋修。</div>`,課程限制說明:"限外語系",第一二專長對應:"外國語文(第二專長)	外國語文(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"外語系111B  必修	"},{科號:"11120FL  104201",課程中文名稱:"英語聽講二",課程英文名稱:"English Listening and Speaking II",學分數:"2",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`HSS人社C406	T5T6
`,授課教師:`蘇怡如	SU, I-RU
`,擋修說明:"",課程限制說明:"【上學期原修英語聽講一FL  104101(張寶玉老師)同學選課優先,第3次選課起開放】",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:"外語系111B  必修	"},{科號:"11120FL  104202",課程中文名稱:"英語聽講二",課程英文名稱:"English Listening and Speaking II",學分數:"2",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"本課程為 16 週課程",停開註記:"",教室與上課時間:`HSS人社C407	T5T6
`,授課教師:`許淳潔	HSU, CHUN-CHIEH
`,擋修說明:"",課程限制說明:"【上學期原修英語聽講一FL  104102(許淳潔老師)同學選課優先,第3次選課起開放】",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:"外語系111B  必修	"},{科號:"11120FL  201001",課程中文名稱:"閱讀與寫作一(下)",課程英文名稱:"Reading & Writing I (2)",學分數:"2",人限:"18",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"本課程為 16 週課程",停開註記:"",教室與上課時間:`HSS人社C521	T3T4
`,授課教師:`林惠芬	LIN, HUI-FEN
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>閱讀與寫作一(上)-成績需C-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"【上學期原修閱讀與寫作一(上)FL  200901(林惠芬老師)同學選課優先,第3次選課起開放】",第一二專長對應:"外國語文(第二專長)	外國語文(第一專長)",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:"外語系110B  必修	"},{科號:"11120FL  201002",課程中文名稱:"閱讀與寫作一(下)",課程英文名稱:"Reading & Writing I (2)",學分數:"2",人限:"18",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`HSS人社C511	T3T4
`,授課教師:`張寶玉	VIPHAVEE VONGPUMIVITCH
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>閱讀與寫作一(上)-成績需C-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"【上學期原修閱讀與寫作一(上)FL  200902(張寶玉老師)同學選課優先,第3次選課起開放】",第一二專長對應:"外國語文(第二專長)	外國語文(第一專長)",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:"外語系110B  必修	"},{科號:"11120FL  201003",課程中文名稱:"閱讀與寫作一(下)",課程英文名稱:"Reading & Writing I (2)",學分數:"2",人限:"18",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"本課程為 16 週課程",停開註記:"",教室與上課時間:`HSS人社C412	T3T4
`,授課教師:`陳皇華	CHEN, HUANG-HUA
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>閱讀與寫作一(上)-成績需C-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"【上學期原修閱讀與寫作一(上)FL  200903(陳皇華老師)同學選課優先,第3次選課起開放】",第一二專長對應:"外國語文(第二專長)	外國語文(第一專長)",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:"外語系110B  必修	"},{科號:"11120FL  201201",課程中文名稱:"初級日語二",課程英文名稱:"Beginning Japanese II",學分數:"3",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"不接受旁聽。",停開註記:"",教室與上課時間:`HSS人社C407	M7M8M9
`,授課教師:`簡嘉菁	CHIEN, CHIA-CHING
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>初級日語一-成績需C-以上<BR><br>上述條件任選一科，則不擋修。</div>`,課程限制說明:"【上學期原修初級日語一FL  201101(簡嘉菁老師)同學選課優先,第3次選課起開放】",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:"外語系110B  必修	"},{科號:"11120FL  201202",課程中文名稱:"初級日語二",課程英文名稱:"Beginning Japanese II",學分數:"3",人限:"42",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"未接受旁聽,考量順利銜接,未能即時選課成功者 <加退選期間> 可參與課堂;欲正式修課者務必第1週開始參與課程",停開註記:"",教室與上課時間:`HSS人社C512	M3M4Mn
`,授課教師:`張鈞竹	CHANG,CHUN-CHU
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>初級日語一-成績需C-以上<BR><br>上述條件任選一科，則不擋修。</div>`,課程限制說明:"排除外語系",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:""},{科號:"11120FL  201203",課程中文名稱:"初級日語二",課程英文名稱:"Beginning Japanese II",學分數:"3",人限:"42",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`MXIC旺宏253	MnM5M6
`,授課教師:`陳國卿	CHEN, KUO-CHING
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>初級日語一-成績需C-以上<BR><br>上述條件任選一科，則不擋修。</div>`,課程限制說明:"排除外語系",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:""},{科號:"11120FL  201204",課程中文名稱:"初級日語二",課程英文名稱:"Beginning Japanese II",學分數:"3",人限:"42",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"不接受旁聽，排除母語為日語學生",停開註記:"",教室與上課時間:`GEN II綜二203	M7M8M9
`,授課教師:`周雅玲	CHOU, YA-LING
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>初級日語一-成績需C-以上<BR><br>上述條件任選一科，則不擋修。</div>`,課程限制說明:"排除外語系",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:""},{科號:"11120FL  201205",課程中文名稱:"初級日語二",課程英文名稱:"Beginning Japanese II",學分數:"3",人限:"42",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"不接受旁聽，排除母語為日語學生",停開註記:"",教室與上課時間:`HSS人社C405	T2T3T4
`,授課教師:`周雅玲	CHOU, YA-LING
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>初級日語一-成績需C-以上<BR><br>上述條件任選一科，則不擋修。</div>`,課程限制說明:"排除外語系",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:""},{科號:"11120FL  201206",課程中文名稱:"初級日語二",課程英文名稱:"Beginning Japanese II",學分數:"3",人限:"42",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`HSS人社C511	TnT5T6
`,授課教師:`楊漫恩	YANG, MAN-EN
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>初級日語一-成績需C-以上<BR><br>上述條件任選一科，則不擋修。</div>`,課程限制說明:"排除外語系",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:""},{科號:"11120FL  201207",課程中文名稱:"初級日語二",課程英文名稱:"Beginning Japanese II",學分數:"3",人限:"42",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"不接受旁聽。",停開註記:"",教室與上課時間:`HSS人社C403	T5T6T7
`,授課教師:`簡嘉菁	CHIEN, CHIA-CHING
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>初級日語一-成績需C-以上<BR><br>上述條件任選一科，則不擋修。</div>`,課程限制說明:"排除外語系",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:""},{科號:"11120FL  201208",課程中文名稱:"初級日語二",課程英文名稱:"Beginning Japanese II",學分數:"3",人限:"42",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"不接受旁聽，排除母語為日語學生",停開註記:"",教室與上課時間:`ESS工科 502	T5T6T7
`,授課教師:`周雅玲	CHOU, YA-LING
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>初級日語一-成績需C-以上<BR><br>上述條件任選一科，則不擋修。</div>`,課程限制說明:"排除外語系",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:""},{科號:"11120FL  201209",課程中文名稱:"初級日語二",課程英文名稱:"Beginning Japanese II",學分數:"3",人限:"42",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"未接受旁聽,考量順利銜接,未能即時選課成功者 <加退選期間> 可參與課堂;欲正式修課者務必第1週開始參與課程",停開註記:"",教室與上課時間:`HSS人社C512	T6T7T8
`,授課教師:`張鈞竹	CHANG,CHUN-CHU
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>初級日語一-成績需C-以上<BR><br>上述條件任選一科，則不擋修。</div>`,課程限制說明:"排除外語系",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:""},{科號:"11120FL  201210",課程中文名稱:"初級日語二",課程英文名稱:"Beginning Japanese II",學分數:"3",人限:"42",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"排除日語為母語學生",停開註記:"",教室與上課時間:`ESS工科 504	W3W4Wn
`,授課教師:`王瑋婷	WANG, WEI-TING
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>初級日語一-成績需C-以上<BR><br>上述條件任選一科，則不擋修。</div>`,課程限制說明:"排除外語系",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:""},{科號:"11120FL  201211",課程中文名稱:"初級日語二",課程英文名稱:"Beginning Japanese II",學分數:"3",人限:"42",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"排除日語為母語學生",停開註記:"",教室與上課時間:`HSS人社C412	W6W7W8
`,授課教師:`王瑋婷	WANG, WEI-TING
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>初級日語一-成績需C-以上<BR><br>上述條件任選一科，則不擋修。</div>`,課程限制說明:"排除外語系",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:""},{科號:"11120FL  201212",課程中文名稱:"初級日語二",課程英文名稱:"Beginning Japanese II",學分數:"3",人限:"42",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`ESS工科 506	W7W8W9
`,授課教師:`張嘉芬	CHANG, CHIA-FEN
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>初級日語一-成績需C-以上<BR><br>上述條件任選一科，則不擋修。</div>`,課程限制說明:"排除外語系",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:""},{科號:"11120FL  201213",課程中文名稱:"初級日語二",課程英文名稱:"Beginning Japanese II",學分數:"3",人限:"42",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"不接受旁聽，排除母語為日語學生",停開註記:"",教室與上課時間:`HSS人社C512	R2R3R4
`,授課教師:`周雅玲	CHOU, YA-LING
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>初級日語一-成績需C-以上<BR><br>上述條件任選一科，則不擋修。</div>`,課程限制說明:"排除外語系",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:""},{科號:"11120FL  201214",課程中文名稱:"初級日語二",課程英文名稱:"Beginning Japanese II",學分數:"3",人限:"42",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`HSS人社C511	R2R3R4
`,授課教師:`陳曉貞	CHEN, HSIAO-CHEN
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>初級日語一-成績需C-以上<BR><br>上述條件任選一科，則不擋修。</div>`,課程限制說明:"排除外語系",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:""},{科號:"11120FL  201215",課程中文名稱:"初級日語二",課程英文名稱:"Beginning Japanese II",學分數:"3",人限:"42",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"不接受旁聽。",停開註記:"",教室與上課時間:`ESS工科 406	R2R3R4
`,授課教師:`簡嘉菁	CHIEN, CHIA-CHING
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>初級日語一-成績需C-以上<BR><br>上述條件任選一科，則不擋修。</div>`,課程限制說明:"排除外語系",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:""},{科號:"11120FL  201216",課程中文名稱:"初級日語二",課程英文名稱:"Beginning Japanese II",學分數:"3",人限:"42",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"不接受旁聽。",停開註記:"",教室與上課時間:`ESS工科 502	R5R6R7
`,授課教師:`簡嘉菁	CHIEN, CHIA-CHING
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>初級日語一-成績需C-以上<BR><br>上述條件任選一科，則不擋修。</div>`,課程限制說明:"排除外語系",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:""},{科號:"11120FL  201217",課程中文名稱:"初級日語二",課程英文名稱:"Beginning Japanese II",學分數:"3",人限:"42",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"排除日語為母語學生",停開註記:"",教室與上課時間:`HSS人社C511	R6R7R8
`,授課教師:`王瑋婷	WANG, WEI-TING
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>初級日語一-成績需C-以上<BR><br>上述條件任選一科，則不擋修。</div>`,課程限制說明:"排除外語系",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:""},{科號:"11120FL  201218",課程中文名稱:"初級日語二",課程英文名稱:"Beginning Japanese II",學分數:"3",人限:"42",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`ESS工科 506	R7R8R9
`,授課教師:`張嘉芬	CHANG, CHIA-FEN
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>初級日語一-成績需C-以上<BR><br>上述條件任選一科，則不擋修。</div>`,課程限制說明:"排除外語系",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:""},{科號:"11120FL  201219",課程中文名稱:"初級日語二",課程英文名稱:"Beginning Japanese II",學分數:"3",人限:"42",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`HSS人社C512	F2F3F4
`,授課教師:`陳曉貞	CHEN, HSIAO-CHEN
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>初級日語一-成績需C-以上<BR><br>上述條件任選一科，則不擋修。</div>`,課程限制說明:"排除外語系",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:""},{科號:"11120FL  201220",課程中文名稱:"初級日語二",課程英文名稱:"Beginning Japanese II",學分數:"3",人限:"42",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"排除日語為母語學生",停開註記:"",教室與上課時間:`HSS人社C511	F3F4Fn
`,授課教師:`王瑋婷	WANG, WEI-TING
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>初級日語一-成績需C-以上<BR><br>上述條件任選一科，則不擋修。</div>`,課程限制說明:"排除外語系",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:""},{科號:"11120FL  201221",課程中文名稱:"初級日語二",課程英文名稱:"Beginning Japanese II",學分數:"3",人限:"42",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`HSS人社C204	F6F7F8
`,授課教師:`李蕙如	LEE,HUI-JU
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>初級日語一-成績需C-以上<BR><br>上述條件任選一科，則不擋修。</div>`,課程限制說明:"排除外語系",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:""},{科號:"11120FL  201401",課程中文名稱:"初級西班牙語二",課程英文名稱:"Beginning Spanish II",學分數:"3",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`HSS人社B303	M7M8M9
`,授課教師:`張雅鈴	CHANG, YEA-LING
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>初級西班牙語一-成績需C-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"【上學期原修初級西班牙語一FL  201301(張雅鈴老師)同學選課優先,第3次選課起開放】",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:"外語系110B  必修	"},{科號:"11120FL  201402",課程中文名稱:"初級西班牙語二",課程英文名稱:"Beginning Spanish II",學分數:"3",人限:"42",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`HSS人社C521	MnM5M6
`,授課教師:`鄭雲英	CHENG, YUN-YING
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>初級西班牙語一-成績需C-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"排除外語系",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:""},{科號:"11120FL  201403",課程中文名稱:"初級西班牙語二",課程英文名稱:"Beginning Spanish II",學分數:"3",人限:"42",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`HSS人社C406	T7T8T9
`,授課教師:`張雅鈴	CHANG, YEA-LING
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>初級西班牙語一-成績需C-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"排除外語系",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:""},{科號:"11120FL  201404",課程中文名稱:"初級西班牙語二",課程英文名稱:"Beginning Spanish II",學分數:"3",人限:"42",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`HSS人社C411	WnW5W6
`,授課教師:`張雅鈴	CHANG, YEA-LING
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>初級西班牙語一-成績需C-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"排除外語系",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:""},{科號:"11120FL  201405",課程中文名稱:"初級西班牙語二",課程英文名稱:"Beginning Spanish II",學分數:"3",人限:"42",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`HSS人社C411	W7W8W9
`,授課教師:`張雅鈴	CHANG, YEA-LING
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>初級西班牙語一-成績需C-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"排除外語系",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:""},{科號:"11120FL  201406",課程中文名稱:"初級西班牙語二",課程英文名稱:"Beginning Spanish II",學分數:"3",人限:"42",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`HSS人社C406	RnR5R6
`,授課教師:`張雅鈴	CHANG, YEA-LING
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>初級西班牙語一-成績需C-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"排除外語系",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:""},{科號:"11120FL  201407",課程中文名稱:"初級西班牙語二",課程英文名稱:"Beginning Spanish II",學分數:"3",人限:"42",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`HSS人社C406	FnF5F6
`,授課教師:`張雅鈴	CHANG, YEA-LING
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>初級西班牙語一-成績需C-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"排除外語系",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:""},{科號:"11120FL  201601",課程中文名稱:"初級法語二",課程英文名稱:"Beginning French II",學分數:"3",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"法語授課，本課程為 16 週課程",停開註記:"",教室與上課時間:`HSS人社C522	M7M8M9
`,授課教師:`張月琴	CHANG, YUEH-CHIN
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>初級法語一-成績需C-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"【上學期原修初級法語一FL  201501(張月琴老師)同學選課優先,第3次選課起開放】",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:"外語系110B  必修	"},{科號:"11120FL  201602",課程中文名稱:"初級法語二",課程英文名稱:"Beginning French II",學分數:"3",人限:"42",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`GEN II綜二108	T7T8T9
`,授課教師:`廖含潔	LIAO, HAN-CHIEH
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>初級法語一-成績需C-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"排除外語系",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:""},{科號:"11120FL  201603",課程中文名稱:"初級法語二",課程英文名稱:"Beginning French II",學分數:"3",人限:"42",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`HSS人社C511	W7W8W9
`,授課教師:`廖含潔	LIAO, HAN-CHIEH
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>初級法語一-成績需C-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"排除外語系",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:""},{科號:"11120FL  201604",課程中文名稱:"初級法語二",課程英文名稱:"Beginning French II",學分數:"3",人限:"42",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"停開",教室與上課時間:`HSS人社B304	R3R4Rn
`,授課教師:`洪筱婷	HUNG, SHIAU-TING
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>初級法語一-成績需C-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"排除外語系",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:""},{科號:"11120FL  201605",課程中文名稱:"初級法語二",課程英文名稱:"Beginning French II",學分數:"3",人限:"42",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`HSS人社C407	F7F8F9
`,授課教師:`廖含潔	LIAO, HAN-CHIEH
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>初級法語一-成績需C-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"排除外語系",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:""},{科號:"11120FL  201606",課程中文名稱:"初級法語二",課程英文名稱:"Beginning French II",學分數:"3",人限:"42",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"停開",教室與上課時間:`HSS人社B304	R5R6R7
`,授課教師:`洪筱婷	HUNG, SHIAU-TING
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>初級法語一-成績需C-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"排除外語系",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:""},{科號:"11120FL  201607",課程中文名稱:"初級法語二",課程英文名稱:"Beginning French II",學分數:"3",人限:"42",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`HSS人社C407	F2F3F4
`,授課教師:`徐琿輝	HSU, HUN-HUI
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>初級法語一-成績需C-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"排除外語系",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:""},{科號:"11120FL  201608",課程中文名稱:"初級法語二",課程英文名稱:"Beginning French II",學分數:"3",人限:"42",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`HSS人Ｃ513A	WnW5W6
`,授課教師:`石秋燕	SHIH, CHIU-YEN
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>初級法語一-成績需C-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"排除外語系",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:""},{科號:"11120FL  202401",課程中文名稱:"英語口語訓練二",課程英文名稱:"English Oral Practice(II)",學分數:"2",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"本課程為 16 週課程",停開註記:"",教室與上課時間:`HSS人社C406	M5M6
`,授課教師:`黃仕宜	HUANG, SHIH-YI
`,擋修說明:"",課程限制說明:"【上學期原修英語口語訓練一FL  203901(黃仕宜老師)同學選課優先,第3次選課起開放】",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:"外語系110B  必修	"},{科號:"11120FL  202402",課程中文名稱:"英語口語訓練二",課程英文名稱:"English Oral Practice(II)",學分數:"2",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`HSS人社C412	R5R6
`,授課教師:`張銪容	CHANG, YU-JUNG
`,擋修說明:"",課程限制說明:"【上學期原修英語口語訓練一FL  203902(張銪容老師)同學選課優先,第3次選課起開放】",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:"外語系110B  必修	"},{科號:"11120FL  202403",課程中文名稱:"英語口語訓練二",課程英文名稱:"English Oral Practice(II)",學分數:"2",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`HSS人社C521	R5R6
`,授課教師:`張寶玉	VIPHAVEE VONGPUMIVITCH
`,擋修說明:"",課程限制說明:"【上學期原修英語口語訓練一FL  203903(黃虹慈老師)同學選課優先,第3次選課起開放】",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:"外語系110B  必修	"},{科號:"11120FL  204201",課程中文名稱:"初級德語二",課程英文名稱:"Beginning German II",學分數:"3",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`HSS人社C511	M7M8M9
`,授課教師:`郭春長	KUO, CHUN-CHANG
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>初級德語一-成績需C-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"【上學期原修初級德語一FL  204101(郭春長老師)同學選課優先,第3次選課起開放】",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:"外語系110B  必修	"},{科號:"11120FL  204202",課程中文名稱:"初級德語二",課程英文名稱:"Beginning German II",學分數:"3",人限:"42",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`HSS人社C511	M3M4Mn
`,授課教師:`郭春長	KUO, CHUN-CHANG
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>初級德語一-成績需C-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"排除外語系",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:""},{科號:"11120FL  204203",課程中文名稱:"初級德語二",課程英文名稱:"Beginning German II",學分數:"3",人限:"42",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`HSS人社C406	M7M8M9
`,授課教師:`韓珮雯	HAN, PEI-WEN
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>初級德語一-成績需C-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"排除外語系",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:""},{科號:"11120FL  204204",課程中文名稱:"初級德語二",課程英文名稱:"Beginning German II",學分數:"3",人限:"42",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`GEN II綜二108	T3T4Tn
`,授課教師:`郭春長	KUO, CHUN-CHANG
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>初級德語一-成績需C-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"排除外語系",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:""},{科號:"11120FL  204205",課程中文名稱:"初級德語二",課程英文名稱:"Beginning German II",學分數:"3",人限:"42",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`PHYS物   501	W3W4Wn
`,授課教師:`郭春長	KUO, CHUN-CHANG
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>初級德語一-成績需C-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"排除外語系",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:""},{科號:"11120FL  204206",課程中文名稱:"初級德語二",課程英文名稱:"Beginning German II",學分數:"3",人限:"42",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`HSS人社C511	WnW5W6
`,授課教師:`韓珮雯	HAN, PEI-WEN
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>初級德語一-成績需C-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"排除外語系",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:""},{科號:"11120FL  204207",課程中文名稱:"初級德語二",課程英文名稱:"Beginning German II",學分數:"3",人限:"42",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`HSS人社C407	W7W8W9
`,授課教師:`郭春長	KUO, CHUN-CHANG
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>初級德語一-成績需C-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"排除外語系",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:""},{科號:"11120FL  204208",課程中文名稱:"初級德語二",課程英文名稱:"Beginning German II",學分數:"3",人限:"42",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`GEN II綜二105	FnF5F6
`,授課教師:`韓珮雯	HAN, PEI-WEN
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>初級德語一-成績需C-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"排除外語系",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:""},{科號:"11120FL  204209",課程中文名稱:"初級德語二",課程英文名稱:"Beginning German II",學分數:"3",人限:"42",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`GEN II綜二105	F7F8F9
`,授課教師:`韓珮雯	HAN, PEI-WEN
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>初級德語一-成績需C-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"排除外語系",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:""},{科號:"11120FL  207200",課程中文名稱:"幽默與諷刺文學",課程英文名稱:"The Pleasure of Reading: Humor and Satire",學分數:"3",人限:"30",新生保留人數:"0",通識對象:"*1",通識類別:"人文學領域 Elective GE course: Humanities",授課語言:"英",備註:"本課程為 16 週課程",停開註記:"",教室與上課時間:`HSS人社C412	T7T8T9
`,授課教師:`李書雨	LEE, SHU-YU
`,擋修說明:"",課程限制說明:"外語系優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"外語系108B  選修	外語系109B  選修	外語系110B  選修	"},{科號:"11120FL  215700",課程中文名稱:"語言與R統計",課程英文名稱:"Language and Statistics in R",學分數:"2",人限:"28",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"本課程為 16 週課程",停開註記:"",教室與上課時間:`HSS人社C521	F5F6
`,授課教師:`陳宗穎	CHEN, TSUNG-YING
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>應用語言學-成績需C-以上<BR>語言學概論-成績需C-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"外語系優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"外語系108B  選修	外語系109B  選修	外語系110B  選修	"},{科號:"11120FL  300401",課程中文名稱:"閱讀與寫作二(下)",課程英文名稱:"Reading & Writing II (2)",學分數:"2",人限:"18",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程為 16 週課程，【Academic Writing】",停開註記:"",教室與上課時間:`HSS人社C413	T3T4
`,授課教師:`傅士珍	FUH, SHYH-JEN
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>閱讀與寫作二(上)-成績需C-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"【上學期原修閱讀與寫作二(上)FL  300301(傅士珍老師)同學選課優先,第3次選課起開放】",第一二專長對應:"外國語文(第一專長)",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:"外語系109B  必修	"},{科號:"11120FL  300402",課程中文名稱:"閱讀與寫作二(下)",課程英文名稱:"Reading & Writing II (2)",學分數:"2",人限:"18",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"【Academic Writing】",停開註記:"",教室與上課時間:`HSS人社C522	T3T4
`,授課教師:`紀元文	CHI, YUAN-WEN
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>閱讀與寫作二(上)-成績需C-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"【上學期原修閱讀與寫作二(上)FL  300302(黃虹慈老師)同學選課優先,第3次選課起開放】",第一二專長對應:"外國語文(第一專長)",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:"外語系109B  必修	"},{科號:"11120FL  300403",課程中文名稱:"閱讀與寫作二(下)",課程英文名稱:"Reading & Writing II (2)",學分數:"2",人限:"18",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"本課程為 16 週課程，【Media Writing】",停開註記:"",教室與上課時間:`HSS人社C406	T3T4
`,授課教師:`李書雨	LEE, SHU-YU
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>閱讀與寫作二(上)-成績需C-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"【上學期原修閱讀與寫作二(上)FL  300303(李書雨老師)同學選課優先,第3次選課起開放】",第一二專長對應:"外國語文(第一專長)",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:"外語系109B  必修	"},{科號:"11120FL  300601",課程中文名稱:"中級日語二",課程英文名稱:"Intermediate Japanese II",學分數:"3",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"日語授課",停開註記:"",教室與上課時間:`HSS人社C522	R7R8R9
`,授課教師:`真武薰	KAORU MATAKE
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>曾修日本語能力試驗N5級通過<BR>中級日語一-成績需C-以上<BR><br>上述條件任選一科，則不擋修。</div>`,課程限制說明:"【上學期原修中級日語一FL  300501(真武薰老師)同學選課優先,第3次選課起開放】",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:"外語系109B  必修	"},{科號:"11120FL  300602",課程中文名稱:"中級日語二",課程英文名稱:"Intermediate Japanese II",學分數:"3",人限:"42",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`HSS人社C407	M3M4Mn
`,授課教師:`簡嘉菁	CHIEN, CHIA-CHING
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>曾修日本語能力試驗N5級通過<BR>中級日語一-成績需C-以上<BR><br>上述條件任選一科，則不擋修。</div>`,課程限制說明:"排除外語系",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:""},{科號:"11120FL  300603",課程中文名稱:"中級日語二",課程英文名稱:"Intermediate Japanese II",學分數:"3",人限:"42",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"未接受旁聽,考量順利銜接,未能即時選課成功者 <加退選期間> 可參與課堂;欲正式修課者務必第1週開始參與課程",停開註記:"",教室與上課時間:`HSS人社C512	M7M8M9
`,授課教師:`張鈞竹	CHANG,CHUN-CHU
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>曾修日本語能力試驗N5級通過<BR>中級日語一-成績需C-以上<BR><br>上述條件任選一科，則不擋修。</div>`,課程限制說明:"排除外語系",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:""},{科號:"11120FL  300604",課程中文名稱:"中級日語二",課程英文名稱:"Intermediate Japanese II",學分數:"3",人限:"42",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`ESS工科 406	T2T3T4
`,授課教師:`陳曉貞	CHEN, HSIAO-CHEN
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>曾修日本語能力試驗N5級通過<BR>中級日語一-成績需C-以上<BR><br>上述條件任選一科，則不擋修。</div>`,課程限制說明:"排除外語系",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:""},{科號:"11120FL  300605",課程中文名稱:"中級日語二",課程英文名稱:"Intermediate Japanese II",學分數:"3",人限:"42",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`HSS人社C512	W2W3W4
`,授課教師:`簡嘉菁	CHIEN, CHIA-CHING
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>曾修日本語能力試驗N5級通過<BR>中級日語一-成績需C-以上<BR><br>上述條件任選一科，則不擋修。</div>`,課程限制說明:"排除外語系",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:""},{科號:"11120FL  300606",課程中文名稱:"中級日語二",課程英文名稱:"Intermediate Japanese II",學分數:"3",人限:"42",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"不接受旁聽，排除母語為日語學生",停開註記:"",教室與上課時間:`GEN II綜二105	W7W8W9
`,授課教師:`周雅玲	CHOU, YA-LING
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>曾修日本語能力試驗N5級通過<BR>中級日語一-成績需C-以上<BR><br>上述條件任選一科，則不擋修。</div>`,課程限制說明:"排除外語系",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:""},{科號:"11120FL  300607",課程中文名稱:"中級日語二",課程英文名稱:"Intermediate Japanese II",學分數:"3",人限:"42",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`HSS人社C411	RnR5R6
`,授課教師:`王佑心	WANG, YU-HSIN
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>曾修日本語能力試驗N5級通過<BR>中級日語一-成績需C-以上<BR><br>上述條件任選一科，則不擋修。</div>`,課程限制說明:"排除外語系",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:""},{科號:"11120FL  300608",課程中文名稱:"中級日語二",課程英文名稱:"Intermediate Japanese II",學分數:"3",人限:"42",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"排除日語為母語學生",停開註記:"",教室與上課時間:`ESS工科 504	R3R4Rn
`,授課教師:`王瑋婷	WANG, WEI-TING
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>曾修日本語能力試驗N5級通過<BR>中級日語一-成績需C-以上<BR><br>上述條件任選一科，則不擋修。</div>`,課程限制說明:"排除外語系",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:""},{科號:"11120FL  300609",課程中文名稱:"中級日語二",課程英文名稱:"Intermediate Japanese II",學分數:"3",人限:"42",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"不接受旁聽",停開註記:"",教室與上課時間:`HSS人社C412	F2F3F4
`,授課教師:`廖紋淑	LIAO, WEN-SHU
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>曾修日本語能力試驗N5級通過<BR>中級日語一-成績需C-以上<BR><br>上述條件任選一科，則不擋修。</div>`,課程限制說明:"排除外語系",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:""},{科號:"11120FL  300801",課程中文名稱:"中級法語二",課程英文名稱:"Intermediate French II",學分數:"3",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`HSS人社C413	R7R8R9
`,授課教師:`廖含潔	LIAO, HAN-CHIEH
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>CEFR A1通過-成績需C-以上<BR>中級法語一-成績需C-以上<BR><br>上述條件任選一科，則不擋修。</div>`,課程限制說明:"【上學期原修中級法語一FL  300701(廖含潔老師)同學選課優先,第3次選課起開放】",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:"外語系109B  必修	"},{科號:"11120FL  300802",課程中文名稱:"中級法語二",課程英文名稱:"Intermediate French II",學分數:"3",人限:"42",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`HSS人社C522	W7W8W9
`,授課教師:`石秋燕	SHIH, CHIU-YEN
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>CEFR A1通過-成績需C-以上<BR>中級法語一-成績需C-以上<BR><br>上述條件任選一科，則不擋修。</div>`,課程限制說明:"排除外語系",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:""},{科號:"11120FL  301001",課程中文名稱:"中級德語二",課程英文名稱:"Intermediate German II",學分數:"3",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`HSS人社C412	R7R8R9
`,授課教師:`郭春長	KUO, CHUN-CHANG
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>中級德語一-成績需C-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"【上學期原修中級德語一FL  300901(郭春長老師)同學選課優先,第3次選課起開放】",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:"外語系109B  必修	"},{科號:"11120FL  301002",課程中文名稱:"中級德語二",課程英文名稱:"Intermediate German II",學分數:"3",人限:"42",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`HSS人社C522	T7T8T9
`,授課教師:`郭春長	KUO, CHUN-CHANG
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>中級德語一-成績需C-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"排除外語系",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:""},{科號:"11120FL  301200",課程中文名稱:"維多利亞時期文學",課程英文名稱:"Victorian Literature",學分數:"3",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"外語系核心課程，本課程為 16 週課程，外系中等教育學程生可尋求加簽選課",停開註記:"",教室與上課時間:`HSS人社C406	W3W4Wn
`,授課教師:`林宜莊	LIN, YI-CHUANG
`,擋修說明:"",課程限制說明:"限外語系",第一二專長對應:"外國語文(第二專長)	外國語文(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"外語系109B  選修	"},{科號:"11120FL  304100",課程中文名稱:"莎士比亞",課程英文名稱:"Shakespeare",學分數:"3",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"外語系核心課程，本課程為 16 週課程",停開註記:"",教室與上課時間:`HSS人社C413	R3R4Rn
`,授課教師:`林宜莊	LIN, YI-CHUANG
`,擋修說明:"",課程限制說明:"限外語系",第一二專長對應:"外國語文(第二專長)	外國語文(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"外語系109B  選修	"},{科號:"11120FL  307100",課程中文名稱:"戲劇文類",課程英文名稱:"Drama",學分數:"3",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"外語系核心課程，本課程為 16 週課程",停開註記:"",教室與上課時間:`HSS人社C406	F2F3F4
`,授課教師:`黃仕宜	HUANG, SHIH-YI
`,擋修說明:"",課程限制說明:"限外語系",第一二專長對應:"外國語文(第二專長)	外國語文(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"外語系108B  選修	外語系109B  選修	"},{科號:"11120FL  326600",課程中文名稱:"英中新聞翻譯",課程英文名稱:"English-Chinese News Translation",學分數:"2",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程為 16 週課程，107學年度起入學非外語系英教系同學可作為選讀英文學分,課程級數為高級",停開註記:"",教室與上課時間:`HSS人社C522	R5R6
`,授課教師:`陳國華	CHEN, KUO-HUA
`,擋修說明:"",課程限制說明:"外語系優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"外語系108B  選修	外語系109B  選修	"},{科號:"11120FL  327200",課程中文名稱:"日語會話二",課程英文名稱:"Japanese Conversation II",學分數:"3",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`HSS人Ｃ513A	T2T3T4
`,授課教師:`簡嘉菁	CHIEN, CHIA-CHING
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>中級日語二-成績需C-以上<BR>高級日語二-成績需C-以上<BR>高級日語一-成績需C-以上<BR>曾修日本語能力試驗N5級通過<BR>日語會話一-成績需C-以上<BR><br>上述條件任選一科，則不擋修。</div>`,課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:""},{科號:"11120FL  327400",課程中文名稱:"日語聽解二",課程英文名稱:"Japanese Listening II",學分數:"2",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`HSS人社C407	M5M6
`,授課教師:`簡嘉菁	CHIEN, CHIA-CHING
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>中級日語一-成績需C-以上<BR>高級日語二-成績需C-以上<BR>高級日語一-成績需C-以上<BR>日語聽解一-成績需C-以上<BR>曾修日本語能力試驗N5級通過<BR><br>上述條件任選一科，則不擋修。</div>`,課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:""},{科號:"11120FL  328700",課程中文名稱:"中級法語會話二",課程英文名稱:"Intermediate French Conversation II",學分數:"3",人限:"24",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`HSS人社C402	RnR5R6
`,授課教師:`廖含潔	LIAO, HAN-CHIEH
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>中級法語一-成績需C-以上<BR>初級法語二-成績需C-以上<BR>曾修CEFR A1通過<BR>中級法語會話一-成績需C-以上<BR><br>上述條件任選一科，則不擋修。</div>`,課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120FL  330100",課程中文名稱:"音韻學",課程英文名稱:"Phonology",學分數:"3",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"本課程為 16 週課程，外語系核心課程，外系中等教育學程生可尋求加簽選課",停開註記:"",教室與上課時間:`HSS人社C521	F2F3F4
`,授課教師:`陳宗穎	CHEN, TSUNG-YING
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>英語語言學概論-成績需C-以上<BR>語言學概論-成績需C-以上<BR>語言學導論-成績需C-以上<BR><br>上述條件任選一科，則不擋修。</div>`,課程限制說明:"限外語系",第一二專長對應:"外國語文(第二專長)	外國語文(第一專長)",學分學程對應:"(跨領域)語言治療學分學程",不可加簽說明:"",必選修說明:"外語系108B  選修	外語系109B  選修	外語系110B  選修	"},{科號:"11120FL  330800",課程中文名稱:"語言與認知",課程英文名稱:"Language and Cognition",學分數:"3",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"本課程為 16 週課程",停開註記:"",教室與上課時間:`HSS人社C412	R3R4Rn
`,授課教師:`楊梵孛	YANG, FAN-PEI
`,擋修說明:"",課程限制說明:"限外語系",第一二專長對應:"",學分學程對應:"(跨領域)語言治療學分學程",不可加簽說明:"",必選修說明:"外語系108B  選修	外語系109B  選修	外語系110B  選修	"},{科號:"11120FL  338001",課程中文名稱:"初級韓語二",課程英文名稱:"Beginning Korean II",學分數:"3",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"跨校選課與交換生加簽，必須在開課前與老師商量",停開註記:"",教室與上課時間:`HSS人社C413	W7W8W9
`,授課教師:`韓京&#24810;	HAN KYUNG DUK
`,擋修說明:"",課程限制說明:"外語系優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:""},{科號:"11120FL  338002",課程中文名稱:"初級韓語二",課程英文名稱:"Beginning Korean II",學分數:"3",人限:"42",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`HSS人社C412	M3M4Mn
`,授課教師:`李伶美	LEE, YEONG MI
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:""},{科號:"11120FL  338003",課程中文名稱:"初級韓語二",課程英文名稱:"Beginning Korean II",學分數:"3",人限:"42",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"跨校選課與交換生加簽，必須在開課前與老師商量",停開註記:"",教室與上課時間:`HSS人社C407	T2T3T4
`,授課教師:`韓京&#24810;	HAN KYUNG DUK
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:""},{科號:"11120FL  338004",課程中文名稱:"初級韓語二",課程英文名稱:"Beginning Korean II",學分數:"3",人限:"42",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"跨校選課與交換生加簽，必須在開課前與老師商量",停開註記:"",教室與上課時間:`HSS人社C413	T7T8T9
`,授課教師:`韓京&#24810;	HAN KYUNG DUK
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:""},{科號:"11120FL  338005",課程中文名稱:"初級韓語二",課程英文名稱:"Beginning Korean II",學分數:"3",人限:"42",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"跨校選課與交換生加簽，必須在開課前與老師商量",停開註記:"",教室與上課時間:`HSS人社C413	W2W3W4
`,授課教師:`韓京&#24810;	HAN KYUNG DUK
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:""},{科號:"11120FL  338006",課程中文名稱:"初級韓語二",課程英文名稱:"Beginning Korean II",學分數:"3",人限:"42",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"跨校選課與交換生加簽，必須在開課前與老師商量",停開註記:"",教室與上課時間:`HSS人社C407	R2R3R4
`,授課教師:`韓京&#24810;	HAN KYUNG DUK
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:""},{科號:"11120FL  338007",課程中文名稱:"初級韓語二",課程英文名稱:"Beginning Korean II",學分數:"3",人限:"42",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"跨校選課與交換生加簽，必須在開課前與老師商量",停開註記:"",教室與上課時間:`HSS人社C407	R7R8R9
`,授課教師:`韓京&#24810;	HAN KYUNG DUK
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:""},{科號:"11120FL  338008",課程中文名稱:"初級韓語二",課程英文名稱:"Beginning Korean II",學分數:"3",人限:"42",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`HSS人社C403	F3F4Fn
`,授課教師:`李伶美	LEE, YEONG MI
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:""},{科號:"11120FL  338101",課程中文名稱:"中級韓語二",課程英文名稱:"Intermediate Korean II",學分數:"3",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"韓語授課，跨校選課與交換生加簽，必須在第1堂課上課前與老師商量",停開註記:"",教室與上課時間:`HSS人社C413	TnT5T6
`,授課教師:`韓京&#24810;	HAN KYUNG DUK
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:""},{科號:"11120FL  338102",課程中文名稱:"中級韓語二",課程英文名稱:"Intermediate Korean II",學分數:"3",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"韓語授課，跨校選課與交換生加簽，必須在第1堂課上課前與老師商量",停開註記:"",教室與上課時間:`HSS人社C407	RnR5R6
`,授課教師:`韓京&#24810;	HAN KYUNG DUK
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:""},{科號:"11120FL  342600",課程中文名稱:"中級德語會話二",課程英文名稱:"Intermediate German Conversation II",學分數:"3",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`GEN II綜二104	T7T8T9
`,授課教師:`韓珮雯	HAN, PEI-WEN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120FL  343200",課程中文名稱:"日語聽解四",課程英文名稱:"Japanese Listening IV",學分數:"2",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`HSS人社C512	RnR5
`,授課教師:`周雅玲	CHOU, YA-LING
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>中級日語二-成績需C-以上<BR>高級日語二-成績需C-以上<BR>高級日語一-成績需C-以上<BR>日語聽解三-成績需C-以上<BR>曾修日本語能力試驗N4級通過<BR><br>上述條件任選一科，則不擋修。</div>`,課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120FL  343300",課程中文名稱:"商用英語會話",課程英文名稱:"English for Oral Business Communication",學分數:"2",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"107學年度起入學非外語系英教系同學可作為選讀英文學分,課程級數為高級",停開註記:"",教室與上課時間:`HSS人社B304	T7T8
`,授課教師:`黃伊岑	HUANG, I-TSEN
`,擋修說明:"",課程限制說明:"限大學部",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"外語系109B  選修	"},{科號:"11120FL  344400",課程中文名稱:"日語會話四",課程英文名稱:"Japanese Conversation IV",學分數:"3",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"日語授課",停開註記:"",教室與上課時間:`HSS人社C522	F5F6F7
`,授課教師:`真武薰	KAORU MATAKE
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>中級日語二-成績需C-以上<BR>高級日語二-成績需C-以上<BR>高級日語一-成績需C-以上<BR>日語會話三-成績需C-以上<BR>曾修日本語能力試驗N4級通過<BR><br>上述條件任選一科，則不擋修。</div>`,課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"外語系108B  選修	"},{科號:"11120FL  344500",課程中文名稱:"從《哈利波特》學英文",課程英文名稱:"English Language Skills with Harry Potter",學分數:"2",人限:"30",新生保留人數:"0",通識對象:"*1",通識類別:"人文學領域 Elective GE course: Humanities",授課語言:"英",備註:"107學年度起入學生欲視為選讀英文而非通識可於畢審作業時另行主張,",停開註記:"",教室與上課時間:`HSS人社C412	M5M6
`,授課教師:`柯安娜	JOHANNA KATCHEN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"外語系109B  選修	"},{科號:"11120FL  350100",課程中文名稱:"魯濱遜漂流記：全球脈絡下的多重文本",課程英文名稱:"Robinson Crusoe: A Multilayered Text in Global Contexts",學分數:"3",人限:"30",新生保留人數:"0",通識對象:"*1",通識類別:"核心通識Core GE courses 3",授課語言:"中",備註:"107學年度起入學生欲視為選讀英文而非通識可於畢審作業時另行主張,【108(含)前入學生視為核心向度三】",停開註記:"",教室與上課時間:`HSS人社C413	F2F3F4
`,授課教師:`紀元文	CHI, YUAN-WEN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"外語系109B  選修	"},{科號:"11120FL  355000",課程中文名稱:"希臘文學選讀",課程英文名稱:"Survey of Greek Literature",學分數:"3",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"xclass，本課程為 16 週課程，輔助遠距，有修過吳老師西概一不建議選此門課",停開註記:"",教室與上課時間:`HSS人社C412	TnT5T6
`,授課教師:`吳建亨	WU, CHIEN-HENG
`,擋修說明:"",課程限制說明:"排除外語系大學部1年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"外語系108B  選修	外語系109B  選修	外語系110B  選修	"},{科號:"11120FL  402600",課程中文名稱:"高級韓語二",課程英文名稱:"Advanced Korean II",學分數:"3",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"韓語授課，跨校選課與交換生加簽，必須在第1堂課上課前與老師商量",停開註記:"",教室與上課時間:`HSS人社C413	WnW5W6
`,授課教師:`韓京&#24810;	HAN KYUNG DUK
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120FL  403500",課程中文名稱:"新聞英文",課程英文名稱:"Journalistic English",學分數:"2",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"107學年度起入學非外語系英教系同學可作為選讀英文學分,課程級數為高級",停開註記:"",教室與上課時間:`HSS人社C405	M7M8
`,授課教師:`黃伊岑	HUANG, I-TSEN
`,擋修說明:"",課程限制說明:"排除大學部1年級2年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"外語系108B  選修	"},{科號:"11120FL  404000",課程中文名稱:"高級法語二",課程英文名稱:"Advanced French II",學分數:"3",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`HSS人社C521	WnW5W6
`,授課教師:`廖含潔	LIAO, HAN-CHIEH
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>曾修CEFR A2通過<BR>高級法語一-成績需C-以上<BR><br>上述條件任選一科，則不擋修。</div>`,課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120FL  404500",課程中文名稱:"中級西班牙語二",課程英文名稱:"Intermediate Spanish II",學分數:"3",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`HSS人社C406	R7R8R9
`,授課教師:`張雅鈴	CHANG, YEA-LING
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>中級西班牙語一-成績需C-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"【上學期原修中級西班牙語一FL  404400(張雅鈴老師)同學選課優先,第3次選課起開放】",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:"外語系109B  必修	"},{科號:"11120FL  404501",課程中文名稱:"中級西班牙語二",課程英文名稱:"Intermediate Spanish II",學分數:"3",人限:"42",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`HSS人社C522	MnM5M6
`,授課教師:`張雅鈴	CHANG, YEA-LING
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>中級西班牙語一-成績需C-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"排除外語系",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:""},{科號:"11120FL  404801",課程中文名稱:"高級日語二",課程英文名稱:"Advanced Japanese II",學分數:"3",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"日語授課",停開註記:"",教室與上課時間:`HSS人社C413	M5M6M7
`,授課教師:`真武薰	KAORU MATAKE
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>曾修日本語能力試驗N4級通過<BR>高級日語一-成績需C-以上<BR><br>上述條件任選一科，則不擋修。</div>`,課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:"外語系108B  選修	"},{科號:"11120FL  404802",課程中文名稱:"高級日語二",課程英文名稱:"Advanced Japanese II",學分數:"3",人限:"42",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"未接受旁聽,考量順利銜接,未能即時選課成功者 <加退選期間> 可參與課堂;欲正式修課者務必第1週開始參與課程",停開註記:"",教室與上課時間:`HSS人社C512	T2T3T4
`,授課教師:`張鈞竹	CHANG,CHUN-CHU
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>曾修日本語能力試驗N4級通過<BR>高級日語一-成績需C-以上<BR><br>上述條件任選一科，則不擋修。</div>`,課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:""},{科號:"11120FL  404803",課程中文名稱:"高級日語二",課程英文名稱:"Advanced Japanese II",學分數:"3",人限:"42",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`HSS人社C406	W5W6W7
`,授課教師:`藤井康子	FUJII YASUKO
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>曾修日本語能力試驗N4級通過<BR>高級日語一-成績需C-以上<BR><br>上述條件任選一科，則不擋修。</div>`,課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:""},{科號:"11120FL  405000",課程中文名稱:"日語閱讀二",課程英文名稱:"Japanese Reading II",學分數:"2",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`HSS人社C512	R6R7
`,授課教師:`周雅玲	CHOU, YA-LING
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>中級日語二-成績需C-以上<BR>高級日語二-成績需C-以上<BR>高級日語一-成績需C-以上<BR>日語閱讀一-成績需C-以上<BR>曾修日本語能力試驗N4級通過<BR><br>上述條件任選一科，則不擋修。</div>`,課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120FL  405500",課程中文名稱:"中級西班牙語會話二",課程英文名稱:"Intermediate Spanish Conversation II",學分數:"3",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`HSS人社C521	M2M3M4
`,授課教師:`鄭雲英	CHENG, YUN-YING
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120FL  406500",課程中文名稱:"口譯",課程英文名稱:"Oral Interpretation",學分數:"2",人限:"16",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"107學年度起入學非外語系英教系同學可作為選讀英文學分,課程級數為高級",停開註記:"",教室與上課時間:`HSS人社C511	T7T8
`,授課教師:`黃嘉瑜	HUANG, CHIA-YU
`,擋修說明:"",課程限制說明:"外語系優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"外語系108B  選修	"},{科號:"11120FL  417100",課程中文名稱:"高級德語二",課程英文名稱:"Advanced German II",學分數:"3",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`HSS人社B303	R3R4Rn
`,授課教師:`郭春長	KUO, CHUN-CHANG
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>高級德語一-成績需C-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120FL  420200",課程中文名稱:"美國文學-1865年之後",課程英文名稱:"American Literature since 1865",學分數:"3",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"外語系核心課程，本課程為 16 週課程",停開註記:"",教室與上課時間:`HSS人社C413	M2M3M4
`,授課教師:`傅士珍	FUH, SHYH-JEN
`,擋修說明:"",課程限制說明:"限外語系",第一二專長對應:"外國語文(第二專長)	外國語文(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"外語系108B  選修	"},{科號:"11120FL  420900",課程中文名稱:"高級西班牙語二",課程英文名稱:"Advanced Spanish II",學分數:"3",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`HSS人社B304	TnT5T6
`,授課教師:`張雅鈴	CHANG, YEA-LING
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>高級西班牙語一-成績需C-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120FL  421200",課程中文名稱:"商用日語二",課程英文名稱:" Business Japanese II",學分數:"2",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`HSS人社C512	WnW5
`,授課教師:`簡嘉菁	CHIEN, CHIA-CHING
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>中級日語二-成績需C-以上<BR>曾修日本語能力試驗N4級通過<BR>商用日語一-成績需C-以上<BR><br>上述條件任選一科，則不擋修。</div>`,課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:""},{科號:"11120FL  421301",課程中文名稱:"新聞日語二",課程英文名稱:"News Japanese II",學分數:"2",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`HSS人社C512	W6W7
`,授課教師:`簡嘉菁	CHIEN, CHIA-CHING
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>中級日語二-成績需C-以上<BR>新聞日語一-成績需C-以上<BR>曾修日本語能力試驗N4級通過<BR><br>上述條件任選一科，則不擋修。</div>`,課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:""},{科號:"11120FL  422000",課程中文名稱:"語句處理實驗實作",課程英文名稱:"Sentence Processing Experiments",學分數:"3",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"本課程為 16 週課程",停開註記:"",教室與上課時間:`HSS人社C407	T7T8T9
`,授課教師:`許淳潔	HSU, CHUN-CHIEH
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>應用語言學-成績需C-以上<BR>語言學概論-成績需C-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"外語系優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"外語系108B  選修	外語系109B  選修	外語系110B  選修	"},{科號:"11120FL  456200",課程中文名稱:"日語寫作二",課程英文名稱:"Japanese writing 2",學分數:"2",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`HSS人社C521	W3W4
`,授課教師:`藤井康子	FUJII YASUKO
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>中級日語二-成績需C-以上<BR>高級日語二-成績需C-以上<BR>高級日語一-成績需C-以上<BR>日語寫作一-成績需C-以上<BR>曾修日本語能力試驗N4級通過<BR><br>上述條件任選一科，則不擋修。</div>`,課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120FL  513900",課程中文名稱:"反烏托邦文學",課程英文名稱:"Dystopian Literature",學分數:"3",人限:"18",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程為 16 週課程",停開註記:"",教室與上課時間:`HSS人社B303	R6R7R8
`,授課教師:`林宜莊	LIN, YI-CHUANG
`,擋修說明:"",課程限制說明:"限外語系碩士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"外語系111M  選修	"},{科號:"11120FL  514300",課程中文名稱:"敘述焦慮與小說興起",課程英文名稱:"Narrative Anxiety and The Rise of the Novel",學分數:"3",人限:"18",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"本課程為 16 週課程，歡迎大四同學修習(請以加簽選課)",停開註記:"",教室與上課時間:`HSS人社B303	T5T6T7
`,授課教師:`陳皇華	CHEN, HUANG-HUA
`,擋修說明:"",課程限制說明:"限外語系碩士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"外語系111M  選修	"},{科號:"11120FL  515100",課程中文名稱:"視覺敘事：電影與漫畫",課程英文名稱:"Visual Storytelling: Film and Comics",學分數:"3",人限:"18",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"本課程為 16 週課程",停開註記:"",教室與上課時間:`HSS人社B303	MnM5M6
`,授課教師:`李書雨	LEE, SHU-YU
`,擋修說明:"",課程限制說明:"限外語系碩士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"外語系111M  選修	"},{科號:"11120FL  560200",課程中文名稱:"第二語言習得",課程英文名稱:"Second Language Acquisition",學分數:"3",人限:"18",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`HSS人社B304	W3W4Wn
`,授課教師:`蘇怡如	SU, I-RU
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>曾修應用語言學<BR><br>上述條件一定要有，而且<br><BR>曾修英語語言學概論<BR>曾修語言學概論<BR>曾修語言學導論<BR><br>上述條件任選一科，則不擋修。</div>`,課程限制說明:"限外語系碩士班",第一二專長對應:"外國語文(第二專長)	外國語文(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"外語系111M  必修	"},{科號:"11120FL  560500",課程中文名稱:"論文寫作",課程英文名稱:"Thesis Writing",學分數:"3",人限:"18",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`HSS人社B304	M5M6M7
`,授課教師:`張寶玉	VIPHAVEE VONGPUMIVITCH
`,擋修說明:"",課程限制說明:"限外語系碩士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"外語系111M  必修	"},{科號:"11120FL  571000",課程中文名稱:"電腦輔助第二外語寫作",課程英文名稱:"Computer-assisted Second Language Writing Instruction",學分數:"3",人限:"18",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"本課程為 16 週課程，歡迎大四同學修習(請以加簽選課)",停開註記:"",教室與上課時間:`HSS人Ｃ513A	T5T6T7
`,授課教師:`林惠芬	LIN, HUI-FEN
`,擋修說明:"",課程限制說明:"限碩士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"外語系111M  選修	"},{科號:"11120FL  571700",課程中文名稱:"身分認同與語言教學",課程英文名稱:"Identity in Language Teaching and Learning",學分數:"3",人限:"18",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`HSS人社B303	F3F4Fn
`,授課教師:`張銪容	CHANG, YU-JUNG
`,擋修說明:"",課程限制說明:"限外語系碩士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"外語系111M  選修	"},{科號:"11120FL  600100",課程中文名稱:"論文研究",課程英文名稱:"Thesis",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限外語系碩三以上修習",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"排除外語系碩士班1年級2年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"外語系111M  必修	"},{科號:"11120GE  101200",課程中文名稱:"工業4.0與發展趨勢概論",課程英文名稱:"Introduction to the development trend of the Industry 4.0",學分數:"2",人限:"50",新生保留人數:"0",通識對象:"*1",通識類別:"自然科學領域 Elective GE course: Natural Sciences",授課語言:"中",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`EDU教   313	T3T4
`,授課教師:`陳德鴻	CHEN, TE-HUNG
曾仕君	TSENG, SHIH-CHUN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120GE  101300",課程中文名稱:"東亞地區的宗教與政治",課程英文名稱:"The Interrelation between Religion and Politics in East Asia",學分數:"2",人限:"50",新生保留人數:"0",通識對象:"*1",通識類別:"社會科學領域 Elective GE course: Social Sciences",授課語言:"中",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`EDU教   314	T5T6
`,授課教師:`李文政	LEE,WEN-CHENG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120GE  102200",課程中文名稱:"現代科技的應用、風險與福祉",課程英文名稱:"Applications, Risks and Benefits of Modern Technologies",學分數:"2",人限:"120",新生保留人數:"0",通識對象:"*1",通識類別:"自然科學領域 Elective GE course: Natural Sciences",授課語言:"中",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`EDU教   311	R5R6
`,授課教師:`林基興	LIN, JI-SHING
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120GE  102400",課程中文名稱:"產業創新實作",課程英文名稱:"Practice for Industry innovation",學分數:"2",人限:"100",新生保留人數:"0",通識對象:"*1",通識類別:"社會科學領域 Elective GE course: Social Sciences",授課語言:"中",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`D-Shi實齋講堂	TaTb
`,授課教師:`商雅婷	SHANG, YA-TING
蔡協亨	TSAI, HSIEH-HENG
李佳玫	LI, CHIA-MEI
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)創新創業學分學程",不可加簽說明:"",必選修說明:""},{科號:"11120GE  103600",課程中文名稱:"中國音樂概論",課程英文名稱:"Chinese Music Introduction",學分數:"2",人限:"70",新生保留人數:"0",通識對象:"*1",通識類別:"人文學領域 Elective GE course: Humanities",授課語言:"中",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`EDU教   309	M3M4
`,授課教師:`林心智	LIN, HSIN-CHIH
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)藝術學分學程",不可加簽說明:"",必選修說明:""},{科號:"11120GE  106600",課程中文名稱:"設計繪畫",課程英文名稱:"Design Drawing",學分數:"2",人限:"20",新生保留人數:"0",通識對象:"*1",通識類別:"人文學領域 Elective GE course: Humanities",授課語言:"中",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`EDU教  107	W2W3W4Wn
`,授課教師:`連正宏	LIEN, CHENG-HUNG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)藝術學分學程",不可加簽說明:"",必選修說明:""},{科號:"11120GE  107200",課程中文名稱:"中藥與近代科技",課程英文名稱:"Chinese Herbology and Modern Sciences & Technologies",學分數:"3",人限:"60",新生保留人數:"0",通識對象:"*1",通識類別:"自然科學領域 Elective GE course: Natural Sciences",授課語言:"中",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`EDU教   310	R2R3R4
`,授課教師:`陳瑞凱	CHEN, SWE-KAI
張翔	CHANG, SHYANG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120GE  107300",課程中文名稱:"智慧財產權",課程英文名稱:"Intellectual Property Laws",學分數:"2",人限:"60",新生保留人數:"0",通識對象:"*1",通識類別:"社會科學領域 Elective GE course: Social Sciences",授課語言:"中",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`EDU教   314	F1F2
`,授課教師:`楊智傑	YANG, CHIH-CHIEH
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)創新創業學分學程",不可加簽說明:"",必選修說明:""},{科號:"11120GE  107600",課程中文名稱:"繪畫創作",課程英文名稱:"Painting Creation",學分數:"2",人限:"20",新生保留人數:"0",通識對象:"*1",通識類別:"人文學領域 Elective GE course: Humanities",授課語言:"中",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`EDU教  107	W5W6W7W8
`,授課教師:`連正宏	LIEN, CHENG-HUNG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)藝術學分學程",不可加簽說明:"",必選修說明:""},{科號:"11120GE  108100",課程中文名稱:"野生動物保育之探索與實踐",課程英文名稱:"Exploration and Practice for Wildlife Conservation",學分數:"2",人限:"40",新生保留人數:"0",通識對象:"*1",通識類別:"自然科學領域 Elective GE course: Natural Sciences",授課語言:"中",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`EDU教   314	F3F4
`,授課教師:`顏士清	YEN, SHIH-CHING
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120GE  108200",課程中文名稱:"從日常到科幻的有趣物理學",課程英文名稱:"Interesting physics from daily life to scientific fantasies",學分數:"2",人限:"50",新生保留人數:"0",通識對象:"*1",通識類別:"自然科學領域 Elective GE course: Natural Sciences",授課語言:"中",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`EDU教  114	M7M8
`,授課教師:`鄭宜帆	CHENG, YI-FAN
`,擋修說明:"",課程限制說明:"藝術學院,人社院,科管院,教育學院,清華學院優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120GE  108600",課程中文名稱:"基礎素描",課程英文名稱:"Element of Art",學分數:"2",人限:"20",新生保留人數:"0",通識對象:"*1",通識類別:"人文學領域 Elective GE course: Humanities",授課語言:"中",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`EDU教  107	T6T7T8T9
`,授課教師:`唐唐發	TANG, TANG-FA
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)藝術學分學程",不可加簽說明:"",必選修說明:""},{科號:"11120GE  108800",課程中文名稱:"唐宋詞人的心靈世界",課程英文名稱:"The Inner World of Ci Poets in the Tang and Song Dynasties",學分數:"2",人限:"50",新生保留人數:"0",通識對象:"*1",通識類別:"人文學領域 Elective GE course: Humanities",授課語言:"中",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`Nanda南大9104	W5W6
`,授課教師:`黃雅莉	HUANG, YA-LI
`,擋修說明:"",課程限制說明:"排除人社院",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120GE  109601",課程中文名稱:"陶藝製作",課程英文名稱:"Clay Work",學分數:"2",人限:"25",新生保留人數:"0",通識對象:"*1",通識類別:"人文學領域 Elective GE course: Humanities",授課語言:"中",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`Nanda南大2101	M1M2M3M4
`,授課教師:`吳建福	WU, CHIEN-FU
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>未修過陶藝製作一<BR>未修過陶藝製作二<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"排除藝設系",第一二專長對應:"",學分學程對應:"(跨領域)藝術學分學程",不可加簽說明:"",必選修說明:""},{科號:"11120GE  109602",課程中文名稱:"陶藝製作",課程英文名稱:"Clay Work",學分數:"2",人限:"25",新生保留人數:"0",通識對象:"*1",通識類別:"人文學領域 Elective GE course: Humanities",授課語言:"中",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`Nanda南大2101	M5M6M7M8
`,授課教師:`吳建福	WU, CHIEN-FU
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>未修過陶藝製作一<BR>未修過陶藝製作二<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"排除藝設系",第一二專長對應:"",學分學程對應:"(跨領域)藝術學分學程",不可加簽說明:"",必選修說明:""},{科號:"11120GE  109800",課程中文名稱:"台語‧影劇及文學",課程英文名稱:"Taiwanese / T&#226;i-g&#237;‧movie, drama and Literature",學分數:"2",人限:"50",新生保留人數:"0",通識對象:"*1",通識類別:"人文學領域 Elective GE course: Humanities",授課語言:"中",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`EDU教   313	R5R6
`,授課教師:`鄧慧恩	TENG, HUI-EN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120GE  111300",課程中文名稱:"百年來的中華民國對外關係",課程英文名稱:"Foreign Relations of Republic of China, 1912-now",學分數:"2",人限:"50",新生保留人數:"0",通識對象:"*1",通識類別:"社會科學領域 Elective GE course: Social Sciences",授課語言:"中",備註:"本課程為16週課程,不接受二退",停開註記:"",教室與上課時間:`EDU教  114	M5M6
`,授課教師:`張棋炘	CHANG, CHI-SHIN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120GE  112800",課程中文名稱:"世界古文明",課程英文名稱:"History of Ancient World Civilization",學分數:"2",人限:"60",新生保留人數:"0",通識對象:"*1",通識類別:"人文學領域 Elective GE course: Humanities",授課語言:"中",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`Nanda南大2106	T7T8
`,授課教師:`陳冠穎	CHEN, KUAN-YING
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120GE  113500",課程中文名稱:"媒體影響與社會問題",課程英文名稱:"Media Effects and Social Problems",學分數:"2",人限:"40",新生保留人數:"0",通識對象:"*1",通識類別:"社會科學領域 Elective GE course: Social Sciences",授課語言:"中",備註:"本課程為16週課程,修課前務請先讀授課大綱,本課程不接受期中退選(二退)",停開註記:"",教室與上課時間:`Nanda南大2103	F7F8
`,授課教師:`簡立易	CHIEN, LI-YI
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)資訊傳媒學分學程",不可加簽說明:"",必選修說明:""},{科號:"11120GE  114600",課程中文名稱:"現代藝術創作專題",課程英文名稱:"Art Project",學分數:"1",人限:"20",新生保留人數:"0",通識對象:"*1",通識類別:"人文學領域 Elective GE course: Humanities",授課語言:"中",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`EDU教  108	W5W6
`,授課教師:`林甫珊	LIN, FU-SHAN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)藝術學分學程/(跨領域)創新創業學分學程/(跨領域)創新設計學分學程",不可加簽說明:"",必選修說明:""},{科號:"11120GE  115100",課程中文名稱:"認識真菌",課程英文名稱:"Knowing Fungi",學分數:"2",人限:"60",新生保留人數:"0",通識對象:"*1",通識類別:"自然科學領域 Elective GE course: Natural Sciences",授課語言:"中",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`Nanda南大N102	T5T6
`,授課教師:`陳復琴	Chen, Fu-Chin
`,擋修說明:"",課程限制說明:"大學部4年級優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120GE  115500",課程中文名稱:"創新創意與創業",課程英文名稱:"Innovation and Entrepreneurship",學分數:"2",人限:"60",新生保留人數:"0",通識對象:"*1",通識類別:"自然科學領域 Elective GE course: Natural Sciences",授課語言:"中",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`DELTA台達104	T7T8
`,授課教師:`蔡仁松	TSAY, REN-SONG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)創新創業學分學程/(跨領域)創新設計學分學程",不可加簽說明:"",必選修說明:""},{科號:"11120GE  115600",課程中文名稱:"水墨技法與美學：山水畫",課程英文名稱:"Techniques and Aesthetics of Ink Painting: Landscape Painting",學分數:"2",人限:"15",新生保留人數:"0",通識對象:"*1",通識類別:"人文學領域 Elective GE course: Humanities",授課語言:"中",備註:"本課程為16週課程,不接受旁聽",停開註記:"",教室與上課時間:`EDU教  108	M4MnM5M6
`,授課教師:`袁慧莉	YUAN, HUI-LI
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)藝術學分學程",不可加簽說明:"",必選修說明:""},{科號:"11120GE  115800",課程中文名稱:"台灣當代戲曲",課程英文名稱:"Taiwan Contemporary Xiqu",學分數:"2",人限:"55",新生保留人數:"0",通識對象:"*1",通識類別:"人文學領域 Elective GE course: Humanities",授課語言:"中",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`EDU教   310	T5T6
`,授課教師:`吳岳霖	WU, YUE-LIN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)藝術學分學程",不可加簽說明:"",必選修說明:""},{科號:"11120GE  117300",課程中文名稱:"中亞國際關係",課程英文名稱:"Central Asia: Politics and Society and Contested Powers",學分數:"2",人限:"60",新生保留人數:"0",通識對象:"*1",通識類別:"社會科學領域 Elective GE course: Social Sciences",授課語言:"中",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`MXIC旺宏243	F5F6
`,授課教師:`侍建宇	SHIH, CHIEN-YU
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120GE  118300",課程中文名稱:"中東地區研究",課程英文名稱:"The Research of Middle East Region",學分數:"2",人限:"50",新生保留人數:"0",通識對象:"*1",通識類別:"社會科學領域 Elective GE course: Social Sciences",授課語言:"中",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`EDU教   313	F7F8
`,授課教師:`葉長城	YEH, CHANG-CHEN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120GE  119600",課程中文名稱:"版畫實驗",課程英文名稱:"Print Making",學分數:"1",人限:"20",新生保留人數:"0",通識對象:"*1",通識類別:"人文學領域 Elective GE course: Humanities",授課語言:"中",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`EDU教  108	W7W8
`,授課教師:`林甫珊	LIN, FU-SHAN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)藝術學分學程/(跨領域)創新創業學分學程",不可加簽說明:"",必選修說明:""},{科號:"11120GE  119800",課程中文名稱:"十八世紀英國的藝術與社會",課程英文名稱:"Introduction to Eighteenth-century English Art and Society",學分數:"2",人限:"50",新生保留人數:"0",通識對象:"*1",通識類別:"人文學領域 Elective GE course: Humanities",授課語言:"英",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`EDU教   313	M3M4
`,授課教師:`蕭智尹	HSIAO, CHIH-YIN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120GE  120601",課程中文名稱:"油畫",課程英文名稱:"Oil Painting",學分數:"2",人限:"20",新生保留人數:"0",通識對象:"*1",通識類別:"人文學領域 Elective GE course: Humanities",授課語言:"中",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`EDU教  107	M5M6M7M8
`,授課教師:`唐唐發	TANG, TANG-FA
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)藝術學分學程",不可加簽說明:"",必選修說明:""},{科號:"11120GE  120602",課程中文名稱:"油畫",課程英文名稱:"Oil Painting",學分數:"2",人限:"20",新生保留人數:"0",通識對象:"*1",通識類別:"人文學領域 Elective GE course: Humanities",授課語言:"中",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`EDU教  107	T2T3T4Tn
`,授課教師:`唐唐發	TANG, TANG-FA
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)藝術學分學程",不可加簽說明:"",必選修說明:""},{科號:"11120GE  121600",課程中文名稱:"女性藝術",課程英文名稱:"Women’s Art",學分數:"2",人限:"50",新生保留人數:"0",通識對象:"*1",通識類別:"人文學領域 Elective GE course: Humanities",授課語言:"中",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`EDU教   313	T7T8
`,授課教師:`謝鴻均	SHIEH, HONG-JUIN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)藝術學分學程",不可加簽說明:"",必選修說明:""},{科號:"11120GE  122100",課程中文名稱:"環保與生活",課程英文名稱:" Environmental Protection and Life",學分數:"2",人限:"90",新生保留人數:"0",通識對象:"*1",通識類別:"自然科學領域 Elective GE course: Natural Sciences",授課語言:"中",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`Nanda南大4104	M5M6
`,授課教師:`杜明進	TU, MING-CHIN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)能源科技與永續社會學分學程",不可加簽說明:"",必選修說明:""},{科號:"11120GE  123300",課程中文名稱:"身心障礙理論與權益",課程英文名稱:"The Introduction of  Disability and Civil Rights",學分數:"2",人限:"48",新生保留人數:"0",通識對象:"*1",通識類別:"社會科學領域 Elective GE course: Social Sciences",授課語言:"中",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`Nanda南大N413	M5M6
`,授課教師:`黃國晏	HUANG, KUO-YEN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120GE  124100",課程中文名稱:"離散數學趣談",課程英文名稱:"Interesting Topics in Discrete Mathematics",學分數:"2",人限:"60",新生保留人數:"0",通識對象:"*1",通識類別:"自然科學領域 Elective GE course: Natural Sciences",授課語言:"中",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`EDU教   314	W5W6
`,授課教師:`韓永楷	HON WING KAI
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120GE  124500",課程中文名稱:"行銷管理",課程英文名稱:"Marketing Management",學分數:"3",人限:"90",新生保留人數:"0",通識對象:"*1",通識類別:"社會科學領域 Elective GE course: Social Sciences",授課語言:"中",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`EDU教   310	R7R8R9
`,授課教師:`洪淑芳	HUNG, SHU-FANG
`,擋修說明:"",課程限制說明:"限大學部2年級3年級4年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120GE  125600",課程中文名稱:"中國器樂賞析",課程英文名稱:"Chinese Instrumental Music Appreciation",學分數:"2",人限:"70",新生保留人數:"0",通識對象:"*1",通識類別:"人文學領域 Elective GE course: Humanities",授課語言:"中",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`EDU教   309	M5M6
`,授課教師:`林心智	LIN, HSIN-CHIH
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)藝術學分學程",不可加簽說明:"",必選修說明:""},{科號:"11120GE  125700",課程中文名稱:"聖經與人生",課程英文名稱:"Bible and Life",學分數:"2",人限:"60",新生保留人數:"0",通識對象:"*1",通識類別:"人文學領域 Elective GE course: Humanities",授課語言:"中",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`MXIC旺宏253	W5W6
`,授課教師:`李哲榮	LEE, CHE-RUNG
王道維	WANG, DAW-WEI
麥偉基	MAK WAI KEI
蔡仁松	TSAY, REN-SONG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120GE  125800",課程中文名稱:"歐洲經濟社會史",課程英文名稱:"Economic and Social History of Europe",學分數:"2",人限:"50",新生保留人數:"0",通識對象:"*1",通識類別:"人文學領域 Elective GE course: Humanities",授課語言:"中",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`EDU教   307	T3T4
`,授課教師:`何萍	HO, PING
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120GE  126500",課程中文名稱:"企業文化與傳播",課程英文名稱:"Corporate Cultures",學分數:"2",人限:"50",新生保留人數:"0",通識對象:"*1",通識類別:"社會科學領域 Elective GE course: Social Sciences",授課語言:"中",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`EDU教   313	R3R4
`,授課教師:`蒯亮	LIANG, KUAI
`,擋修說明:"",課程限制說明:"大學部2年級3年級4年級優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"(跨領域)資訊傳媒學分學程",不可加簽說明:"",必選修說明:""},{科號:"11120GE  126600",課程中文名稱:"台灣美術與地方風土",課程英文名稱:"Taiwanese Art and Local Culture",學分數:"3",人限:"50",新生保留人數:"0",通識對象:"*1",通識類別:"人文學領域 Elective GE course: Humanities",授課語言:"中",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`EDU教  115	MnM5M6
`,授課教師:`黃琪惠	HUANG,CHI-HUI
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)藝術學分學程",不可加簽說明:"",必選修說明:""},{科號:"11120GE  127600",課程中文名稱:"音樂賞析三",課程英文名稱:"Music Appreciation and Analysis (III)",學分數:"2",人限:"50",新生保留人數:"0",通識對象:"*1",通識類別:"人文學領域 Elective GE course: Humanities",授課語言:"中",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`EDU教   311	M7M8
`,授課教師:`彭文几	PERNG, WEN-JI
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)藝術學分學程",不可加簽說明:"",必選修說明:""},{科號:"11120GE  128601",課程中文名稱:"插畫技法與運用",課程英文名稱:"Drawing skills and application",學分數:"2",人限:"20",新生保留人數:"0",通識對象:"*1",通識類別:"人文學領域 Elective GE course: Humanities",授課語言:"中",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`EDU教  108	F2F3F4Fn
`,授課教師:`林鴻堯	LIN, HUNG-YAO
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)藝術學分學程",不可加簽說明:"",必選修說明:""},{科號:"11120GE  128602",課程中文名稱:"插畫技法與運用",課程英文名稱:"Drawing skills and application",學分數:"2",人限:"20",新生保留人數:"0",通識對象:"*1",通識類別:"人文學領域 Elective GE course: Humanities",授課語言:"中",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`EDU教  108	F5F6F7F8
`,授課教師:`林鴻堯	LIN, HUNG-YAO
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)藝術學分學程",不可加簽說明:"",必選修說明:""},{科號:"11120GE  128800",課程中文名稱:"武俠小說之賞析",課程英文名稱:"The Appreciation of Emprise Novel",學分數:"2",人限:"50",新生保留人數:"0",通識對象:"*1",通識類別:"人文學領域 Elective GE course: Humanities",授課語言:"中",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`EDU教  116	R5R6
`,授課教師:`梁偉賢	LEONG, WEI-HEAN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120GE  130300",課程中文名稱:"創傷與社會",課程英文名稱:"Trauma and Society",學分數:"3",人限:"50",新生保留人數:"0",通識對象:"*1",通識類別:"社會科學領域 Elective GE course: Social Sciences",授課語言:"中",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`EDU教  116	M7M8M9
`,授課教師:`蔣興儀	CHIANG, HSING-YI
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120GE  130500",課程中文名稱:"電視製作的理論與實務",課程英文名稱:"Television Production",學分數:"3",人限:"50",新生保留人數:"0",通識對象:"*1",通識類別:"社會科學領域 Elective GE course: Social Sciences",授課語言:"中",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`EDU教   310	F2F3F4
`,授課教師:`曾行宜	TSENG, HSING-I
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)資訊傳媒學分學程",不可加簽說明:"",必選修說明:""},{科號:"11120GE  131800",課程中文名稱:"現代詩選讀",課程英文名稱:"Chinese Modern Poetry",學分數:"2",人限:"50",新生保留人數:"0",通識對象:"*1",通識類別:"人文學領域 Elective GE course: Humanities",授課語言:"中",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`GEN II綜二108	M5M6
`,授課教師:`陳柏伶	CHEN, PO-LING
`,擋修說明:"",課程限制說明:"排除中文系,外語系,人社院學士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120GE  132300",課程中文名稱:"國際時事與英語溝通",課程英文名稱:"Current Events & English Communication",學分數:"2",人限:"50",新生保留人數:"0",通識對象:"*1",通識類別:"社會科學領域 Elective GE course: Social Sciences",授課語言:"英",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`EDU教  115	T3T4
`,授課教師:`嚴震生	YEN, CHEN-SHEN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120GE  132800",課程中文名稱:"中國神話故事選讀",課程英文名稱:'Selective Readings for "The Chinese Mythology"',學分數:"2",人限:"55",新生保留人數:"0",通識對象:"*1",通識類別:"人文學領域 Elective GE course: Humanities",授課語言:"中",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`EDU教   314	F7F8
`,授課教師:`陳燕梅	CHEN, YEN-MEI
`,擋修說明:"",課程限制說明:"排除中文系",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120GE  133100",課程中文名稱:"西洋數學史",課程英文名稱:"History and Philosophy of Western Mathematics",學分數:"2",人限:"50",新生保留人數:"0",通識對象:"*1",通識類別:"自然科學領域 Elective GE course: Natural Sciences",授課語言:"英",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`EDU教  115	T1T2
`,授課教師:`英家銘	YING, JIA-MING
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120GE  133500",課程中文名稱:"互動設計概論",課程英文名稱:"Introduction to Interaction design",學分數:"3",人限:"50",新生保留人數:"0",通識對象:"*1",通識類別:"社會科學領域 Elective GE course: Social Sciences",授課語言:"中",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`EDU教  115	W3W4Wn
`,授課教師:`許有真	HSU, YU-CHEN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)資訊傳媒學分學程/(跨領域)藝術學分學程/(跨領域)創新設計學分學程",不可加簽說明:"",必選修說明:""},{科號:"11120GE  134600",課程中文名稱:"電影配樂發展史與風格賞析",課程英文名稱:"The History of Film Scoring--Analysis and Development",學分數:"2",人限:"60",新生保留人數:"0",通識對象:"*1",通識類別:"人文學領域 Elective GE course: Humanities",授課語言:"中",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`EDU教   310	W7W8
`,授課教師:`邱亭雅	CHIU, TING-YA
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)藝術學分學程",不可加簽說明:"",必選修說明:""},{科號:"11120GE  134800",課程中文名稱:"傳統中國司法敘事與歷史思維",課程英文名稱:"Traditional Chinese judicial narratives and historical thinking",學分數:"2",人限:"50",新生保留人數:"0",通識對象:"*1",通識類別:"人文學領域 Elective GE course: Humanities",授課語言:"中",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`EDU教  115	M3M4
`,授課教師:`李如鈞	LEE, JU-CHUN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120GE  135600",課程中文名稱:"歌劇欣賞-華格納",課程英文名稱:"Opera Appreciation - R. Wagner",學分數:"2",人限:"50",新生保留人數:"0",通識對象:"*1",通識類別:"人文學領域 Elective GE course: Humanities",授課語言:"中",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`EDU教   311	M5M6
`,授課教師:`彭文几	PERNG, WEN-JI
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)藝術學分學程",不可加簽說明:"",必選修說明:""},{科號:"11120GE  136500",課程中文名稱:"高科技人力資源管理--基礎與實務應用",課程英文名稱:"Human Resource Management-- fundamentals and Practice",學分數:"2",人限:"85",新生保留人數:"0",通識對象:"*1",通識類別:"社會科學領域 Elective GE course: Social Sciences",授課語言:"中",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`EDU教   309	T7T8
`,授課教師:`洪淑芳	HUNG, SHU-FANG
`,擋修說明:"",課程限制說明:"限大學部2年級3年級4年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120GE  136800",課程中文名稱:"小說閱讀與創意書寫",課程英文名稱:"Novel reading and Creative Writing",學分數:"2",人限:"50",新生保留人數:"0",通識對象:"*1",通識類別:"人文學領域 Elective GE course: Humanities",授課語言:"中",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`EDU教   309	T5T6
`,授課教師:`蔣興立	CHIANG, HSIN-LI
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120GE  137300",課程中文名稱:"歐洲政府與政治",課程英文名稱:"European Governments and Politics",學分數:"2",人限:"50",新生保留人數:"0",通識對象:"*1",通識類別:"社會科學領域 Elective GE course: Social Sciences",授課語言:"中",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`EDU教  116	M5M6
`,授課教師:`張福昌	CHANG, FU-CHANG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120GE  137500",課程中文名稱:"職場溝通學",課程英文名稱:"Business Communications",學分數:"2",人限:"50",新生保留人數:"0",通識對象:"*1",通識類別:"社會科學領域 Elective GE course: Social Sciences",授課語言:"中",備註:"本課程為16週課程, 欲加選者請第一堂課到課，並於課後提出申請",停開註記:"",教室與上課時間:`EDU教   311	WaWb
`,授課教師:`彭冠宇	PENG, KUAN-YU
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120GE  137600",課程中文名稱:"除魅與欲望：英文愛情小說導讀",課程英文名稱:"Disenchantment and Desire: Introduction to the Romance Novel",學分數:"2",人限:"55",新生保留人數:"0",通識對象:"*1",通識類別:"人文學領域 Elective GE course: Humanities",授課語言:"英",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`EDU教  114	F7F8
`,授課教師:`陳麒方	CHEN, CHI-FANG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120GE  138300",課程中文名稱:"歐洲聯盟概論",課程英文名稱:"Introduction to the European Union",學分數:"2",人限:"50",新生保留人數:"0",通識對象:"*1",通識類別:"社會科學領域 Elective GE course: Social Sciences",授課語言:"中",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`EDU教   314	M3M4
`,授課教師:`鍾志明	CHUNG, CHIH-MING
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120GE  139400",課程中文名稱:"性別思考",課程英文名稱:"Gender Thinking",學分數:"3",人限:"50",新生保留人數:"0",通識對象:"*1",通識類別:"社會科學領域 Elective GE course: Social Sciences",授課語言:"中",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`EDU教   314	R7R8R9
`,授課教師:`陸品妃	LU, PIN-FEI
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120GE  139800",課程中文名稱:"戲曲表演及其文化",課程英文名稱:"Chinese Opera Performance and Its Culture",學分數:"3",人限:"50",新生保留人數:"0",通識對象:"*1",通識類別:"人文學領域 Elective GE course: Humanities",授課語言:"中",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`Nanda南大2305	TnT5T6
`,授課教師:`林佳儀	LIN, CHIA-YI
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)藝術學分學程",不可加簽說明:"",必選修說明:""},{科號:"11120GE  140100",課程中文名稱:"台灣水生與濕地植物之探索實踐與應用",課程英文名稱:"Exploration and practice for aquatic and wetland plants in Taiwan",學分數:"2",人限:"40",新生保留人數:"0",通識對象:"*1",通識類別:"自然科學領域 Elective GE course: Natural Sciences",授課語言:"中",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`Nanda南大N204	R5R6
`,授課教師:`李松柏	LI, SUNG PO
李翠玲	LEE, TSUEY-LING
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120GE  141300",課程中文名稱:"消費者保護之理論與實務",課程英文名稱:"The Theory and Practice of Consumer Protection Law",學分數:"2",人限:"130",新生保留人數:"0",通識對象:"*1",通識類別:"社會科學領域 Elective GE course: Social Sciences",授課語言:"中",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`EDU教   311	W1W2
`,授課教師:`靳邦忠	 
`,擋修說明:"",課程限制說明:"大學部3年級4年級優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120GE  142500",課程中文名稱:"公關企劃與案例",課程英文名稱:"Public Relations Campaign and Cases",學分數:"2",人限:"42",新生保留人數:"0",通識對象:"*1",通識類別:"社會科學領域 Elective GE course: Social Sciences",授課語言:"中",備註:"本課程為16週課程,授課教師:吳世家老師",停開註記:"停開",教室與上課時間:`EDU教  115	W7W8
`,授課教師:`聘任中	
`,擋修說明:"",課程限制說明:"大學部3年級4年級優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"(跨領域)資訊傳媒學分學程",不可加簽說明:"",必選修說明:""},{科號:"11120GE  143500",課程中文名稱:"新媒體企劃與素養",課程英文名稱:"New Media Planning & Literacy",學分數:"2",人限:"50",新生保留人數:"0",通識對象:"*1",通識類別:"社會科學領域 Elective GE course: Social Sciences",授課語言:"中",備註:"教師:黃聿清老師,本課程為16週課程",停開註記:"",教室與上課時間:`EDU教   305	M5M6
`,授課教師:`聘任中	
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)資訊傳媒學分學程",不可加簽說明:"",必選修說明:""},{科號:"11120GE  143800",課程中文名稱:"認識甲骨文字與古代中國文化",課程英文名稱:"Oracle Bone Scripts and Ancient Chinese Culture",學分數:"2",人限:"60",新生保留人數:"0",通識對象:"*1",通識類別:"人文學領域 Elective GE course: Humanities",授課語言:"中",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`EDU教   314	R1R2
`,授課教師:`江柏毅	CHIANG, PO-YI
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120GE  144300",課程中文名稱:"恐怖主義與反恐",課程英文名稱:"Terrorism and Anti-Terrorism",學分數:"2",人限:"60",新生保留人數:"0",通識對象:"*1",通識類別:"社會科學領域 Elective GE course: Social Sciences",授課語言:"中",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`MXIC旺宏243	F3F4
`,授課教師:`侍建宇	SHIH, CHIEN-YU
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120GE  144800",課程中文名稱:"塹城生活文史調查",課程英文名稱:"Fieldwork for Culture and History in Hsinchu",學分數:"1",人限:"20",新生保留人數:"0",通識對象:"*1",通識類別:"人文學領域 Elective GE course: Humanities",授課語言:"中",備註:"本課程為密集型課程，選課請詳閱課綱",停開註記:"",教室與上課時間:`EDU教  109	S2
`,授課教師:`徐淑賢	HSU,SHU-HSIEN
張繼瑩	CHANG, CHI-YING
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120GE  145300",課程中文名稱:"兩岸關係與政策發展",課程英文名稱:"The Development of the Cross-Strait Relations and Policy",學分數:"3",人限:"50",新生保留人數:"0",通識對象:"*1",通識類別:"社會科學領域 Elective GE course: Social Sciences",授課語言:"中",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`EDU教  115	RnR5R6
`,授課教師:`徐銘謙	HSU, MING-CHIEN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120GE  145600",課程中文名稱:"台灣歌謠發展史",課程英文名稱:"The Development Process of Taiwanese Songs",學分數:"2",人限:"60",新生保留人數:"0",通識對象:"*1",通識類別:"人文學領域 Elective GE course: Humanities",授課語言:"中",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`EDU教   310	R5R6
`,授課教師:`簡上仁	CHIEN, SHANG-JEN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)藝術學分學程",不可加簽說明:"",必選修說明:""},{科號:"11120GE  146800",課程中文名稱:"俄羅斯的藝術史、文學史和科學史",課程英文名稱:"HISTORY OF ART, LITERATURE AND SCIENCE IN PRE-SOVIET RUSSIA",學分數:"2",人限:"50",新生保留人數:"0",通識對象:"*1",通識類別:"人文學領域 Elective GE course: Humanities",授課語言:"英",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`EDU教   314	R3R4
`,授課教師:`琅元	VOLKOV, ALEXEI KARLOVITCH
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120GE  147800",課程中文名稱:"輕旅深讀：情境旅讀研究與設計",課程英文名稱:"Local Research and Application through Fieldwork",學分數:"3",人限:"25",新生保留人數:"0",通識對象:"*1",通識類別:"人文學領域 Elective GE course: Humanities",授課語言:"中",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`EDU教  109	R7R8R9
`,授課教師:`張繼瑩	CHANG, CHI-YING
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120GE  148800",課程中文名稱:"台灣的傳說故事與文學再現",課程英文名稱:"Taiwan's Stories and Literary Representations",學分數:"2",人限:"50",新生保留人數:"0",通識對象:"*1",通識類別:"人文學領域 Elective GE course: Humanities",授課語言:"中",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`EDU教  115	F3F4
`,授課教師:`徐淑賢	HSU,SHU-HSIEN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120GE  149300",課程中文名稱:"認識著作權",課程英文名稱:"Learning the Rules of Taiwan's Copyright Law",學分數:"2",人限:"60",新生保留人數:"0",通識對象:"*1",通識類別:"社會科學領域 Elective GE course: Social Sciences",授課語言:"中",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`EDU教   309	R5R6
`,授課教師:`胡中瑋	HU, CHUNG-WEI
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120GE  149600",課程中文名稱:"京劇新美學：唱唸作表",課程英文名稱:"New Aesthetics of Jingju: Four Main Skills of Performance",學分數:"2",人限:"27",新生保留人數:"0",通識對象:"*1",通識類別:"人文學領域 Elective GE course: Humanities",授課語言:"中",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`EDU教  109	M6M7M8M9
`,授課教師:`林佳儀	LIN, CHIA-YI
羅仕龍	LO, SHIH-LUNG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120GE  152400",課程中文名稱:"印度文化概論",課程英文名稱:"Introduction to Indian Culture",學分數:"2",人限:"50",新生保留人數:"0",通識對象:"*1",通識類別:"社會科學領域 Elective GE course: Social Sciences",授課語言:"中",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`EDU教  115	R3R4
`,授課教師:`董玉莉	TUNG, YU-LI
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>未修過印度文明與當代社會<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120GE  153300",課程中文名稱:"非洲政治",課程英文名稱:"Politics of Africa",學分數:"2",人限:"50",新生保留人數:"0",通識對象:"*1",通識類別:"社會科學領域 Elective GE course: Social Sciences",授課語言:"英",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`EDU教  115	T5T6
`,授課教師:`嚴震生	YEN, CHEN-SHEN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120GE  154200",課程中文名稱:"系統思維與統計應用",課程英文名稱:"System thinking and Statistics application",學分數:"3",人限:"50",新生保留人數:"0",通識對象:"*1",通識類別:"自然科學領域 Elective GE course: Natural Sciences",授課語言:"中",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`ENG I工一827	M7M8M9
`,授課教師:`桑慧敏	SONG, WHEYMING
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>未修過系統思維學統計<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120GE  154300",課程中文名稱:"美國研究",課程英文名稱:"American Studies",學分數:"2",人限:"50",新生保留人數:"0",通識對象:"*1",通識類別:"社會科學領域 Elective GE course: Social Sciences",授課語言:"中",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`EDU教   311	F3F4
`,授課教師:`何志勇	HO, CHIH-YUNG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120GE  154400",課程中文名稱:"弗洛伊德與精神分析",課程英文名稱:"Freud and Psychoanalysis",學分數:"2",人限:"130",新生保留人數:"0",通識對象:"*1",通識類別:"社會科學領域 Elective GE course: Social Sciences",授課語言:"中",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`EDU教   310	W3W4
`,授課教師:`高榮禧	KAO, JUNG-HSI
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120GE  154600",課程中文名稱:"策展理論與實務",課程英文名稱:"Organizing Art Exhibitions :Theory and Practices",學分數:"2",人限:"15",新生保留人數:"0",通識對象:"*1",通識類別:"人文學領域 Elective GE course: Humanities",授課語言:"中",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`EDU教   307	M3M4
`,授課教師:`賴小秋	LAI, HSIAO-CHIU
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)藝術學分學程/(跨領域)創新創業學分學程",不可加簽說明:"",必選修說明:""},{科號:"11120GE  155600",課程中文名稱:"公共藝術賞析",課程英文名稱:"Public Art",學分數:"2",人限:"85",新生保留人數:"0",通識對象:"*1",通識類別:"人文學領域 Elective GE course: Humanities",授課語言:"中",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`EDU教   310	T7T8
`,授課教師:`賴小秋	LAI, HSIAO-CHIU
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)藝術學分學程/(跨領域)創新創業學分學程",不可加簽說明:"",必選修說明:""},{科號:"11120GE  156300",課程中文名稱:"宗教與人權",課程英文名稱:"Religion and Human Rights",學分數:"2",人限:"60",新生保留人數:"0",通識對象:"*1",通識類別:"社會科學領域 Elective GE course: Social Sciences",授課語言:"中",備註:"教師:林榮光,本課程為16週課程",停開註記:"",教室與上課時間:`EDU教   305	R5R6
`,授課教師:`聘任中	
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120GE  157600",課程中文名稱:"建築文化與社會",課程英文名稱:"ON ARCHITECTURE, its cultural characters and social significances",學分數:"2",人限:"50",新生保留人數:"0",通識對象:"*1",通識類別:"人文學領域 Elective GE course: Humanities",授課語言:"中",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`EDU教   313	F3F4
`,授課教師:`林洵可	LIN, SHYUN-KEE
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120GE  158400",課程中文名稱:"當代國際議題研究",課程英文名稱:"Current important issues in international Relations",學分數:"2",人限:"80",新生保留人數:"0",通識對象:"*1",通識類別:"社會科學領域 Elective GE course: Social Sciences",授課語言:"中",備註:"本課程為16週課程,不接受二退",停開註記:"",教室與上課時間:`EDU教   310	W5W6
`,授課教師:`方天賜	FANG, TIEN-SZE
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>未修過國際現勢研究<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120GE  158600",課程中文名稱:"戲劇表演",課程英文名稱:"Theatre acting",學分數:"2",人限:"20",新生保留人數:"0",通識對象:"*1",通識類別:"人文學領域 Elective GE course: Humanities",授課語言:"中",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`HSS人社D202	T5T6T7T8
`,授課教師:`安原良	AN, YUAN-LIANG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)藝術學分學程",不可加簽說明:"",必選修說明:""},{科號:"11120GE  160600",課程中文名稱:"認識心靈：精神醫學之初探",課程英文名稱:"How mad are you?-- Introduction of Psychiatry",學分數:"2",人限:"60",新生保留人數:"0",通識對象:"*1",通識類別:"自然科學領域 Elective GE course: Natural Sciences",授課語言:"中",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`EDU教  116	F3F4
`,授課教師:`顏怡君	YEN, YI-CHUN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120GE  161400",課程中文名稱:"中醫與現代生活二",課程英文名稱:"Traditional Chinese Medicine in Modern Life(II)",學分數:"2",人限:"130",新生保留人數:"0",通識對象:"*1",通識類別:"社會科學領域 Elective GE course: Social Sciences",授課語言:"中",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`EDU教   310	W1W2
`,授課教師:`李如英	LI, JU-YING
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>未修過進階中醫<BR>未修過認識中醫<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120GE  163700",課程中文名稱:"莊子的人生哲學",課程英文名稱:"The Philosophy of Life in Zhuangzi",學分數:"2",人限:"50",新生保留人數:"0",通識對象:"*1",通識類別:"人文學領域 Elective GE course: Humanities",授課語言:"中",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`EDU教   305	W7W8
`,授課教師:`徐其寧	HSU, CHI-NING
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>未修過莊子選讀<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"排除中文系",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120GE  168200",課程中文名稱:"鑑識科學的奧妙",課程英文名稱:"Identify the Mysteries of Forensic Science",學分數:"2",人限:"60",新生保留人數:"0",通識對象:"*1",通識類別:"自然科學領域 Elective GE course: Natural Sciences",授課語言:"中",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`EDU教   309	W5W6
`,授課教師:`任修平	JEN, HSIU-PING
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>未修過鑑識科學與犯罪預防<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120GE  169600",課程中文名稱:"媒體藝術",課程英文名稱:"The Art of Medias",學分數:"3",人限:"30",新生保留人數:"0",通識對象:"*1",通識類別:"人文學領域 Elective GE course: Humanities",授課語言:"中",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`EDU教   311	M2M3M4
`,授課教師:`邱永中	CHIU, YUNG-CHUNG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)資訊傳媒學分學程/(跨領域)藝術學分學程",不可加簽說明:"",必選修說明:""},{科號:"11120GE  171400",課程中文名稱:"音樂創作與台灣社會運動",課程英文名稱:"The Making of Popular Music in Taiwan Social Movement",學分數:"2",人限:"60",新生保留人數:"0",通識對象:"*1",通識類別:"社會科學領域 Elective GE course: Social Sciences",授課語言:"中",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`EDU教   311	T5T6
`,授課教師:`陳柏偉	CHEN, BO-WEI
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)資訊傳媒學分學程/(跨領域)藝術學分學程/(跨領域)音樂科技與健康學分學程",不可加簽說明:"",必選修說明:""},{科號:"11120GE  172200",課程中文名稱:"生活中的科學",課程英文名稱:"Science in Daily Life",學分數:"2",人限:"80",新生保留人數:"0",通識對象:"*1",通識類別:"自然科學領域 Elective GE course: Natural Sciences",授課語言:"中",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`EDU教   310	WaWb
`,授課教師:`白培霖	PAI, PEI-LIN
`,擋修說明:"",課程限制說明:"限藝術學院,人社院,科管院,教育學院,生科院,清華學院",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120GE  173200",課程中文名稱:"鑑識科學與犯罪預防",課程英文名稱:"Forensic Science and Crime Prevention",學分數:"2",人限:"50",新生保留人數:"0",通識對象:"*1",通識類別:"自然科學領域 Elective GE course: Natural Sciences",授課語言:"中",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`EDU教   305	W9Wa
`,授課教師:`王明偉	WANG, MING-WOEI
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>未修過鑑識科學的奧妙<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120GE  174400",課程中文名稱:"食品政治",課程英文名稱:"Food and Politics",學分數:"2",人限:"50",新生保留人數:"0",通識對象:"*1",通識類別:"社會科學領域 Elective GE course: Social Sciences",授課語言:"中",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`Nanda南大9105	M3M4
`,授課教師:`譚偉恩	TAN, WEI-EN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120GE  176200",課程中文名稱:"犯罪偵查科技",課程英文名稱:"Crime Investigation Technology",學分數:"2",人限:"150",新生保留人數:"0",通識對象:"*1",通識類別:"自然科學領域 Elective GE course: Natural Sciences",授課語言:"中",備註:"本課程為16週課程, xclass",停開註記:"",教室與上課時間:`MXIC旺宏懷樸	R7R8
`,授課教師:`李承龍	LEE, CHENG-LUNG
`,擋修說明:"",課程限制說明:"大學部3年級4年級優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120GE  178200",課程中文名稱:"針灸與近代科學",課程英文名稱:"Acupuncture and Modern Sciences",學分數:"2",人限:"60",新生保留人數:"0",通識對象:"*1",通識類別:"自然科學領域 Elective GE course: Natural Sciences",授課語言:"中",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`EDU教   311	F5F6
`,授課教師:`張翔	CHANG, SHYANG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120GE  180200",課程中文名稱:"運動與健康",課程英文名稱:"Exercise and Health",學分數:"2",人限:"50",新生保留人數:"0",通識對象:"*1",通識類別:"自然科學領域 Elective GE course: Natural Sciences",授課語言:"中",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`EDU教  114	M1M2
`,授課教師:`朱真儀	CHU, CHEN-YI
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120GE  181600",課程中文名稱:"非劇情電影賞析",課程英文名稱:"Non-Fiction Film Appreciation",學分數:"2",人限:"50",新生保留人數:"0",通識對象:"*1",通識類別:"人文學領域 Elective GE course: Humanities",授課語言:"中",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`EDU教   314	WaWb
`,授課教師:`游惠貞	YU, HUI-CHEN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)藝術學分學程",不可加簽說明:"",必選修說明:""},{科號:"11120GE  182400",課程中文名稱:"東南亞各國國情與文化",課程英文名稱:"State Situations and Culture in Southeast Asia",學分數:"2",人限:"60",新生保留人數:"0",通識對象:"*1",通識類別:"社會科學領域 Elective GE course: Social Sciences",授課語言:"中",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`MXIC旺宏253	F3F4
`,授課教師:`林若雩	LIN, JUO-YU
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120GE  182600",課程中文名稱:"打開博物館：看見在地文化",課程英文名稱:"OPEN UP MUSEUMS：appreciate local culture",學分數:"2",人限:"40",新生保留人數:"0",通識對象:"*1",通識類別:"人文學領域 Elective GE course: Humanities",授課語言:"中",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`GEN II綜二105	T3T4
`,授課教師:`謝小芩	HSIEH, HSIAO-CHIN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120GE  183200",課程中文名稱:"運動科學概論",課程英文名稱:"Introduction to exercise science",學分數:"2",人限:"50",新生保留人數:"0",通識對象:"*1",通識類別:"自然科學領域 Elective GE course: Natural Sciences",授課語言:"中",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`EDU教  114	M3M4
`,授課教師:`朱真儀	CHU, CHEN-YI
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120GE  186200",課程中文名稱:"遇見科學--時間、演化、選擇的科學",課程英文名稱:"Science Encountered-Time, evolution, and Decisions",學分數:"2",人限:"60",新生保留人數:"0",通識對象:"*1",通識類別:"自然科學領域 Elective GE course: Natural Sciences",授課語言:"英",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`EDU教  114	T5T6
`,授課教師:`潘瑋	PAN, WEI
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120GE  186600",課程中文名稱:"中日書道鑑賞論",課程英文名稱:"Appreciation of Chinese and Japanese Calligraphy",學分數:"2",人限:"50",新生保留人數:"0",通識對象:"*1",通識類別:"人文學領域 Elective GE course: Humanities",授課語言:"中",備註:"本課程為16週課程.教師:谷川雅夫",停開註記:"",教室與上課時間:`EDU教  115	R7R8
`,授課教師:`聘任中	
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120GE  187200",課程中文名稱:"跨領域的中醫觀",課程英文名稱:"Interdiscipline Viewpoint of Chinese Medicine",學分數:"2",人限:"60",新生保留人數:"0",通識對象:"*1",通識類別:"自然科學領域 Elective GE course: Natural Sciences",授課語言:"中",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`EDU教  116	T7T8
`,授課教師:`鄭宏足	CHENG, HUNG-TSU
`,擋修說明:"",課程限制說明:"大學部3年級4年級優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120GE  187400",課程中文名稱:"清華人的國際行動力培力",課程英文名稱:"Prepare Yourself for International Mobility",學分數:"2",人限:"60",新生保留人數:"0",通識對象:"*1",通識類別:"社會科學領域 Elective GE course: Social Sciences",授課語言:"中",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`EDU教  114	W3W4
`,授課教師:`羅丞曜	LO, CHENG-YAO
王翔郁	WANG, HSIANG-YU
嚴大任	YEN, TA-JEN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120GE  189200",課程中文名稱:"生活化學應用：身在毒中不知毒",課程英文名稱:"The Application of Life Chemistry: Living in a Poisoned Environment but being Unaware",學分數:"2",人限:"90",新生保留人數:"0",通識對象:"*1",通識類別:"自然科學領域 Elective GE course: Natural Sciences",授課語言:"中",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`EDU教   311	W3W4
`,授課教師:`任修平	JEN, HSIU-PING
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120GE  190200",課程中文名稱:"太空探索：理論與實踐",課程英文名稱:"Space Exploration: Theory and Practice",學分數:"2",人限:"50",新生保留人數:"0",通識對象:"*1",通識類別:"自然科學領域 Elective GE course: Natural Sciences",授課語言:"英",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`EDU教   310	M5M6
`,授課教師:`廖瑩	LIAO, YING
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120GE  191200",課程中文名稱:"料理中的科學",課程英文名稱:"Science of Cooking",學分數:"2",人限:"70",新生保留人數:"0",通識對象:"*1",通識類別:"自然科學領域 Elective GE course: Natural Sciences",授課語言:"中",備註:"本課程為16週課程,同步遠距教學課程",停開註記:"",教室與上課時間:`VC虛擬教室	W3W4
`,授課教師:`張蓉	CHANG, JUNG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120GE  196200",課程中文名稱:"生活中的選擇與賽局",課程英文名稱:"Decision making and Games in daily life",學分數:"2",人限:"80",新生保留人數:"0",通識對象:"*1",通識類別:"自然科學領域 Elective GE course: Natural Sciences",授課語言:"英",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`MXIC旺宏243	W5W6
`,授課教師:`潘瑋	PAN, WEI
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120GE  198200",課程中文名稱:"半導體產業策略與演進",課程英文名稱:"Strategy and Evolution of Semiconductor Industry",學分數:"2",人限:"50",新生保留人數:"0",通識對象:"*1",通識類別:"自然科學領域 Elective GE course: Natural Sciences",授課語言:"中",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`ENG I工一104	W3W4
`,授課教師:`簡禎富	CHIEN, CHEN-FU
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120GE  199400",課程中文名稱:"新聞學概論",課程英文名稱:"Introduction to Journalism",學分數:"2",人限:"50",新生保留人數:"0",通識對象:"*1",通識類別:"社會科學領域 Elective GE course: Social Sciences",授課語言:"中",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`EDU教   313	R1R2
`,授課教師:`蒯亮	LIANG, KUAI
`,擋修說明:"",課程限制說明:"大學部2年級3年級4年級優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"(跨領域)資訊傳媒學分學程",不可加簽說明:"",必選修說明:""},{科號:"11120GEC 110200",課程中文名稱:"批判思考（通識）",課程英文名稱:"Critical Thinking",學分數:"3",人限:"50",新生保留人數:"0",通識對象:"*1",通識類別:"核心通識Core GE courses 1",授課語言:"中",備註:"【108(含)前入學生視為核心向度一】本課程為16週課程",停開註記:"",教室與上課時間:`EDU教  114	R2R3R4
`,授課教師:`陳思廷	CHEN, SZU-TING
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120GEC 110301",課程中文名稱:"價值與實踐",課程英文名稱:"Value and Practice",學分數:"3",人限:"87",新生保留人數:"0",通識對象:"*1",通識類別:"核心通識Core GE courses 1",授課語言:"中",備註:"【108(含)前入學生視為核心向度一】本課程為16週課程",停開註記:"",教室與上課時間:`EDU教   309	R2R3R4
`,授課教師:`洪巳軒	HUNG, SZU-HSUAN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120GEC 110302",課程中文名稱:"價值與實踐",課程英文名稱:"Value and Practice",學分數:"3",人限:"70",新生保留人數:"0",通識對象:"*1",通識類別:"核心通識Core GE courses 1",授課語言:"中",備註:"【108(含)前入學生視為核心向度一】本課程為16週課程",停開註記:"",教室與上課時間:`Nanda南大N101	F2F3F4
`,授課教師:`洪巳軒	HUNG, SZU-HSUAN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120GEC 111100",課程中文名稱:"思想經典：《易經》選讀",課程英文名稱:"Selected Readings of Changes",學分數:"2",人限:"50",新生保留人數:"0",通識對象:"*1",通識類別:"核心通識Core GE courses 1",授課語言:"中",備註:"【108(含)前入學生視為核心向度一】本課程為16週課程",停開註記:"",教室與上課時間:`Nanda南大N101	W5W6
`,授課教師:`游騰達	YU, TENG-TA
`,擋修說明:"",課程限制說明:"排除中文系",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120GEC 111200",課程中文名稱:"思想經典：《論》《孟》思想與現代生活",課程英文名稱:"Confucianism, Mencianism and modern life",學分數:"2",人限:"50",新生保留人數:"0",通識對象:"*1",通識類別:"核心通識Core GE courses 1",授課語言:"中",備註:"【108(含)前入學生視為核心向度一】本課程為16週課程",停開註記:"",教室與上課時間:`EDU教  115	T7T8
`,授課教師:`陳淑娟	CHEN, SHU-CHUAN
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>未修過東方思想經典：《論》《孟》選讀<BR>未修過東方思想經典：《孟子》選讀<BR>未修過東方思想經典:《論》《孟》思想與現代生活<BR>未修過思想經典：《論》《孟》選讀<BR>未修過思想經典：《孟子》選讀<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"排除中文系",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120GEC 111300",課程中文名稱:"思想經典：《周易》選讀",課程英文名稱:"Selected Readings of Changes",學分數:"2",人限:"60",新生保留人數:"0",通識對象:"*1",通識類別:"核心通識Core GE courses 1",授課語言:"中",備註:"【108(含)前入學生視為核心向度一】本課程為16週課程",停開註記:"",教室與上課時間:`EDU教   309	T3T4
`,授課教師:`黃忠天	HUANG, CHUNG-TIEN
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>未修過東方思想經典：《周易》選讀<BR>未修過東方思想經典：《易經》選讀<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"排除中文系",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120GEC 111400",課程中文名稱:"思想經典：《韓非子》選讀",課程英文名稱:"Selected Readings of Han Feizi",學分數:"2",人限:"63",新生保留人數:"0",通識對象:"*1",通識類別:"核心通識Core GE courses 1",授課語言:"中",備註:"【108(含)前入學生視為核心向度一】本課程為16週課程",停開註記:"",教室與上課時間:`Nanda南大2205	W3W4
`,授課教師:`洪巳軒	HUNG, SZU-HSUAN
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>未修過東方思想經典：《韓非子》選讀<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120GEC 111501",課程中文名稱:"統計思維與分析",課程英文名稱:"Statistical Thinking and Analysis",學分數:"3",人限:"50",新生保留人數:"0",通識對象:"*1",通識類別:"核心通識Core GE courses 2",授課語言:"中",備註:"【108(含)前入學生視為核心向度一】本課程為16週課程",停開註記:"",教室與上課時間:`EDU教   309	F2F3F4
`,授課教師:`張延彰	CHANG, YEN-CHANG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120GEC 111502",課程中文名稱:"統計思維與分析",課程英文名稱:"Statistical Thinking and Analysis",學分數:"3",人限:"50",新生保留人數:"0",通識對象:"*1",通識類別:"核心通識Core GE courses 2",授課語言:"中",備註:"【108(含)前入學生視為核心向度一】本課程為16週課程",停開註記:"",教室與上課時間:`EDU教   309	F5F6F7
`,授課教師:`張延彰	CHANG, YEN-CHANG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120GEC 111503",課程中文名稱:"統計思維與分析",課程英文名稱:"Statistical Thinking and Analysis",學分數:"3",人限:"50",新生保留人數:"0",通識對象:"*1",通識類別:"核心通識Core GE courses 2",授課語言:"中",備註:"【108(含)前入學生視為核心向度一】本課程為16週課程",停開註記:"",教室與上課時間:`Nanda南大9104	M5M6M7
`,授課教師:`張延彰	CHANG, YEN-CHANG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120GEC 111800",課程中文名稱:"思想經典：《墨子》選讀",課程英文名稱:"Classics of Eastern Thought: Selected Reading of Mo Tze",學分數:"3",人限:"60",新生保留人數:"0",通識對象:"*1",通識類別:"核心通識Core GE courses 1",授課語言:"中",備註:"【108(含)前入學生視為核心向度一】本課程為16週課程",停開註記:"",教室與上課時間:`Nanda南大2205	T3T4Tn
`,授課教師:`林保全	LIN, BAO-QUAN
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>未修過東方思想經典：《墨子》選讀<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"排除中文系",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120GEC 112500",課程中文名稱:"思想經典：詩與思",課程英文名稱:"Classics of Eastern Thought：Poetry and Thought",學分數:"3",人限:"60",新生保留人數:"0",通識對象:"*1",通識類別:"核心通識Core GE courses 1",授課語言:"中",備註:"【108(含)前入學生視為核心向度一】本課程為16週課程",停開註記:"",教室與上課時間:`EDU教   309	R7R8R9
`,授課教師:`楊儒賓	YANG, RUR-BIN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120GEC 120100",課程中文名稱:"當代生命科學",課程英文名稱:"Contemporary Biology and Your Life",學分數:"2",人限:"300",新生保留人數:"0",通識對象:"*1",通識類別:"核心通識Core GE courses 2",授課語言:"中",備註:"【108(含)前入學生視為核心向度二】本課程為16週課程",停開註記:"",教室與上課時間:`LS II生二講堂	W7W8
`,授課教師:`黃貞祥	NG, CHEN SIANG
焦傳金	CHIAO, CHUAN-CHIN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120GEC 120200",課程中文名稱:"生態體系與全球變遷",課程英文名稱:"Eco-system and Global Changes",學分數:"3",人限:"100",新生保留人數:"0",通識對象:"*1",通識類別:"核心通識Core GE courses 2",授課語言:"中",備註:"【108(含)前入學生視為核心向度二】本課程為16週課程,本課程為面授＋同步＋非同步遠距教學",停開註記:"",教室與上課時間:`VC虛擬教室	TnT5T6
`,授課教師:`游能悌	YU, NENG-TI
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)能源科技與永續社會學分學程",不可加簽說明:"",必選修說明:""},{科號:"11120GEC 120301",課程中文名稱:"探索心智與行為：當代心理學",課程英文名稱:"Exploring Minds and Behaviors: Contemporary Psychology",學分數:"3",人限:"50",新生保留人數:"0",通識對象:"*1",通識類別:"核心通識Core GE courses 2",授課語言:"英",備註:"【108(含)前入學生視為核心向度二】16週課程,預設向度二,109(含)起入學生欲歸為向度四請於畢審時提出",停開註記:"",教室與上課時間:`EDU教   305	R3R4Rn
`,授課教師:`李姝慧	LEE, SHU-HUI
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>未修過現代社會與心理<BR>未修過心理學與現代生活<BR>未修過普通心理學<BR>未修過心理學<BR>未修過心理學(基本科目免修測試)<BR>未修過普通心理學一<BR>未修過普通心理學二<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"排除心諮系",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120GEC 120302",課程中文名稱:"探索心智與行為：當代心理學",課程英文名稱:"Exploring Minds and Behaviors: Contemporary Psychology",學分數:"3",人限:"50",新生保留人數:"0",通識對象:"*1",通識類別:"核心通識Core GE courses 2",授課語言:"中",備註:"【108(含)前入學生視為核心向度二】16週課程,預設向度二,109(含)起入學生欲歸為向度四請於畢審時提出",停開註記:"",教室與上課時間:`EDU教   305	R7R8R9
`,授課教師:`李姝慧	LEE, SHU-HUI
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>未修過現代社會與心理<BR>未修過心理學與現代生活<BR>未修過普通心理學<BR>未修過心理學<BR>未修過心理學(基本科目免修測試)<BR>未修過普通心理學一<BR>未修過普通心理學二<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"排除心諮系",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120GEC 120303",課程中文名稱:"探索心智與行為：當代心理學",課程英文名稱:"Exploring Minds and Behaviors: Contemporary Psychology",學分數:"3",人限:"50",新生保留人數:"0",通識對象:"*1",通識類別:"核心通識Core GE courses 2",授課語言:"中",備註:"【108(含)前入學生視為核心向度二】16週課程,預設向度二,109(含)起入學生欲歸為向度四請於畢審時提出",停開註記:"",教室與上課時間:`EDU教   311	T3T4Tn
`,授課教師:`陳舜文	CHEN, SHUN-WEN
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>未修過現代社會與心理<BR>未修過心理學與現代生活<BR>未修過普通心理學<BR>未修過心理學<BR>未修過心理學(基本科目免修測試)<BR>未修過普通心理學一<BR>未修過普通心理學二<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"排除心諮系",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120GEC 120304",課程中文名稱:"探索心智與行為：當代心理學",課程英文名稱:"Exploring Minds and Behaviors: Contemporary Psychology",學分數:"3",人限:"50",新生保留人數:"0",通識對象:"*1",通識類別:"核心通識Core GE courses 2",授課語言:"中",備註:"【108(含)前入學生視為核心向度二】16週課程,預設向度二,109(含)起入學生欲歸為向度四請於畢審時提出",停開註記:"",教室與上課時間:`EDU教   311	WnW5W6
`,授課教師:`陳舜文	CHEN, SHUN-WEN
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>未修過現代社會與心理<BR>未修過心理學與現代生活<BR>未修過普通心理學<BR>未修過心理學<BR>未修過心理學(基本科目免修測試)<BR>未修過普通心理學一<BR>未修過普通心理學二<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"排除心諮系",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120GEC 120305",課程中文名稱:"探索心智與行為：當代心理學",課程英文名稱:"Exploring Minds and Behaviors: Contemporary Psychology",學分數:"3",人限:"50",新生保留人數:"0",通識對象:"*1",通識類別:"核心通識Core GE courses 2",授課語言:"中",備註:"【108(含)前入學生視為核心向度二】16週課程,預設向度二,109(含)起入學生欲歸為向度四請於畢審時提出",停開註記:"",教室與上課時間:`EDU教   309	M7M8M9
`,授課教師:`詹雨臻	CHAN, YU-CHEN
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>未修過現代社會與心理<BR>未修過心理學與現代生活<BR>未修過普通心理學<BR>未修過心理學<BR>未修過心理學(基本科目免修測試)<BR>未修過普通心理學一<BR>未修過普通心理學二<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"排除心諮系",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120GEC 120306",課程中文名稱:"探索心智與行為：當代心理學",課程英文名稱:"Exploring Minds and Behaviors: Contemporary Psychology",學分數:"3",人限:"50",新生保留人數:"0",通識對象:"*1",通識類別:"核心通識Core GE courses 2",授課語言:"中",備註:"【108(含)前入學生視為核心向度二】16週課程,預設向度二,109(含)起入學生欲歸為向度四請於畢審時提出",停開註記:"",教室與上課時間:`Nanda南大9104	M3M4Mn
`,授課教師:`李昆樺	LEE, KUN-HUA
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>未修過現代社會與心理<BR>未修過心理學與現代生活<BR>未修過普通心理學<BR>未修過心理學<BR>未修過心理學(基本科目免修測試)<BR>未修過普通心理學一<BR>未修過普通心理學二<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"排除心諮系",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120GEC 120601",課程中文名稱:"群眾的心理分析",課程英文名稱:"Psychoanalysis of Group",學分數:"3",人限:"50",新生保留人數:"0",通識對象:"*1",通識類別:"核心通識Core GE courses 4",授課語言:"中",備註:"【108(含)前入學生視為核心向度二】本課程為16週課程",停開註記:"",教室與上課時間:`EDU教  116	WnW5W6
`,授課教師:`蔣興儀	CHIANG, HSING-YI
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120GEC 120602",課程中文名稱:"群眾的心理分析",課程英文名稱:"Psychoanalysis of Group",學分數:"3",人限:"50",新生保留人數:"0",通識對象:"*1",通識類別:"核心通識Core GE courses 4",授課語言:"中",備註:"【108(含)前入學生視為核心向度二】本課程為16週課程",停開註記:"",教室與上課時間:`EDU教  114	RnR5R6
`,授課教師:`蔣興儀	CHIANG, HSING-YI
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120GEC 120701",課程中文名稱:"自然環境之變遷與永續",課程英文名稱:"Changes and Sustainability of Nature",學分數:"3",人限:"60",新生保留人數:"0",通識對象:"*1",通識類別:"核心通識Core GE courses 2",授課語言:"中",備註:"【108(含)前入學生視為核心向度二】本課程為16週課程",停開註記:"",教室與上課時間:`MXIC旺宏243	RnR5R6
`,授課教師:`顏士清	YEN, SHIH-CHING
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120GEC 120702",課程中文名稱:"自然環境之變遷與永續",課程英文名稱:"Changes and Sustainability of Nature",學分數:"3",人限:"60",新生保留人數:"0",通識對象:"*1",通識類別:"核心通識Core GE courses 2",授課語言:"中",備註:"【108(含)前入學生視為核心向度二】本課程為16週課程",停開註記:"",教室與上課時間:`EDU教   311	F7F8F9
`,授課教師:`顏士清	YEN, SHIH-CHING
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120GEC 130100",課程中文名稱:"認識藝術：視覺藝術",課程英文名稱:"Understanding Art: Visual Arts",學分數:"3",人限:"50",新生保留人數:"0",通識對象:"*1",通識類別:"核心通識Core GE courses 3",授課語言:"中",備註:"【108(含)前入學生視為核心向度三】本課程為16週課程",停開註記:"",教室與上課時間:`EDU教   314	RnR5R6
`,授課教師:`馬孟晶	MA, MENG-CHING
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>未修過認識藝術<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)藝術學分學程",不可加簽說明:"",必選修說明:""},{科號:"11120GEC 130401",課程中文名稱:"藝術與社會",課程英文名稱:"Art and Society",學分數:"3",人限:"50",新生保留人數:"0",通識對象:"*1",通識類別:"核心通識Core GE courses 3",授課語言:"中",備註:"【108(含)前入學生視為核心向度三】本課程為16週課程",停開註記:"",教室與上課時間:`EDU教   313	TnT5T6
`,授課教師:`梅韻秋	MEI, YUN-CHIU
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)藝術學分學程",不可加簽說明:"",必選修說明:""},{科號:"11120GEC 130402",課程中文名稱:"藝術與社會",課程英文名稱:"Art and Society",學分數:"3",人限:"50",新生保留人數:"0",通識對象:"*1",通識類別:"核心通識Core GE courses 3",授課語言:"中",備註:"【108(含)前入學生視為核心向度三】本課程為16週課程",停開註記:"",教室與上課時間:`EDU教   313	WnW5W6
`,授課教師:`梅韻秋	MEI, YUN-CHIU
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)藝術學分學程",不可加簽說明:"",必選修說明:""},{科號:"11120GEC 130601",課程中文名稱:"藝術經典：台灣電影賞析",課程英文名稱:"Classic of Art : Analysis of Taiwan Cinema",學分數:"3",人限:"80",新生保留人數:"0",通識對象:"*1",通識類別:"核心通識Core GE courses 3",授課語言:"中",備註:"【108(含)前入學生視為核心向度三】本課程為16週課程",停開註記:"",教室與上課時間:`EDU教   311	W7W8W9
`,授課教師:`蕭菊貞	HSIAO, CHU-CHEN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)藝術學分學程",不可加簽說明:"",必選修說明:""},{科號:"11120GEC 130602",課程中文名稱:"藝術經典：台灣電影賞析",課程英文名稱:"Classic of Art : Analysis of Taiwan Cinema",學分數:"3",人限:"80",新生保留人數:"0",通識對象:"*1",通識類別:"核心通識Core GE courses 3",授課語言:"中",備註:"【108(含)前入學生視為核心向度三】本課程為16週課程",停開註記:"",教室與上課時間:`EDU教   311	R3R4Rn
`,授課教師:`蕭菊貞	HSIAO, CHU-CHEN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)藝術學分學程",不可加簽說明:"",必選修說明:""},{科號:"11120GEC 130800",課程中文名稱:"藝術經典：西洋藝術名作精選",課程英文名稱:"The Canon of Art: Selected Masterpieces of Western Art",學分數:"3",人限:"50",新生保留人數:"0",通識對象:"*1",通識類別:"核心通識Core GE courses 3",授課語言:"中",備註:"【108(含)前入學生視為核心向度三】本課程為16週課程",停開註記:"",教室與上課時間:`EDU教   313	R7R8R9
`,授課教師:`梅韻秋	MEI, YUN-CHIU
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)藝術學分學程",不可加簽說明:"",必選修說明:""},{科號:"11120GEC 131000",課程中文名稱:"認識藝術：音樂",課程英文名稱:"Understanding Art : Music",學分數:"2",人限:"50",新生保留人數:"0",通識對象:"*1",通識類別:"核心通識Core GE courses 3",授課語言:"中",備註:"【108(含)前入學生視為核心向度三】本課程為16週課程",停開註記:"",教室與上課時間:`EDU教   313	W3W4
`,授課教師:`陳孟亨	CHEN, MENG-HENG
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>未修過認識音樂<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)藝術學分學程",不可加簽說明:"",必選修說明:""},{科號:"11120GEC 131100",課程中文名稱:"藝術經典：中國藝術名品",課程英文名稱:"Art Historical Canon: Chinese Art",學分數:"3",人限:"50",新生保留人數:"0",通識對象:"*1",通識類別:"核心通識Core GE courses 3",授課語言:"中",備註:"【108(含)前入學生視為核心向度三】本課程為16週課程",停開註記:"",教室與上課時間:`EDU教   313	W7W8W9
`,授課教師:`馬孟晶	MA, MENG-CHING
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)藝術學分學程",不可加簽說明:"",必選修說明:""},{科號:"11120GEC 131200",課程中文名稱:"藝術經典：科技藝術賞析",課程英文名稱:"Art Classics: Appreciation and Analysis of Technology Art",學分數:"3",人限:"36",新生保留人數:"0",通識對象:"*1",通識類別:"核心通識Core GE courses 3",授課語言:"中",備註:"【108(含)前入學生視為核心向度三】本課程為16週課程",停開註記:"",教室與上課時間:`EDU教  116	W7W8W9
`,授課教師:`許素朱	HSU, SU-CHU
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)藝術學分學程",不可加簽說明:"",必選修說明:""},{科號:"11120GEC 131301",課程中文名稱:"文化與創意：文創產品設計與設計思考",課程英文名稱:"Innovative design and its Design Thinking",學分數:"3",人限:"50",新生保留人數:"0",通識對象:"*1",通識類別:"核心通識Core GE courses 3",授課語言:"中",備註:"【108(含)前入學生視為核心向度三】本課程為16週課程",停開註記:"",教室與上課時間:`EDU教   314	T3T4Tn
`,授課教師:`黃致傑	HUANG, CHIH-CHIEH
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>未修過文化創意設計<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)藝術學分學程",不可加簽說明:"",必選修說明:""},{科號:"11120GEC 131302",課程中文名稱:"文化與創意：文創產品設計與設計思考",課程英文名稱:"Innovative design and its Design Thinking",學分數:"3",人限:"48",新生保留人數:"0",通識對象:"*1",通識類別:"核心通識Core GE courses 3",授課語言:"中",備註:"【108(含)前入學生視為核心向度三】本課程為16週課程",停開註記:"",教室與上課時間:`Nanda南大N202	T7T8T9
`,授課教師:`黃致傑	HUANG, CHIH-CHIEH
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>未修過文化創意設計<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)藝術學分學程",不可加簽說明:"",必選修說明:""},{科號:"11120GEC 131500",課程中文名稱:"藝術經典：中國歷代主流工藝",課程英文名稱:"Art Classics: Chinese Crafts and Decorative Arts",學分數:"2",人限:"60",新生保留人數:"0",通識對象:"*1",通識類別:"核心通識Core GE courses 3",授課語言:"中",備註:"【108(含)前入學生視為核心向度三】本課程為16週課程",停開註記:"",教室與上課時間:`EDU教   314	M5M6
`,授課教師:`楊美莉	YANG, MEI-LI
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>未修過中國工藝美術史<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)藝術學分學程",不可加簽說明:"",必選修說明:""},{科號:"11120GEC 131700",課程中文名稱:"藝術經典：中國陶瓷的藝術與科學",課程英文名稱:"Art Classics: The Art and Science of Chinese Ceramics",學分數:"2",人限:"50",新生保留人數:"0",通識對象:"*1",通識類別:"核心通識Core GE courses 3",授課語言:"中",備註:"【108(含)前入學生視為核心向度三】本課程為16週課程",停開註記:"",教室與上課時間:`EDU教   314	M7M8
`,授課教師:`楊美莉	YANG, MEI-LI
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>未修過中國陶瓷的藝術和科學<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)藝術學分學程",不可加簽說明:"",必選修說明:""},{科號:"11120GEC 131900",課程中文名稱:"藝術經典：戰後(1945)台灣現代建築",課程英文名稱:"Art Classics:Taiwan Modern Architecture after 1945",學分數:"3",人限:"60",新生保留人數:"0",通識對象:"*1",通識類別:"核心通識Core GE courses 3",授課語言:"中",備註:"【108(含)前入學生視為核心向度三】本課程為16週課程",停開註記:"",教室與上課時間:`EDU教   310	T3T4Tn
`,授課教師:`吳光庭	WU, KWANG-TYNG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)藝術學分學程",不可加簽說明:"",必選修說明:""},{科號:"11120GEC 132100",課程中文名稱:"藝術經典：搖滾樂",課程英文名稱:"Art Classics: Rock",學分數:"3",人限:"90",新生保留人數:"0",通識對象:"*1",通識類別:"核心通識Core GE courses 3",授課語言:"中",備註:"【108(含)前入學生視為核心向度三】本課程為16週課程",停開註記:"",教室與上課時間:`EDU教   310	M7M8M9
`,授課教師:`鄭志鵬	CHENG, CHIH-PENG
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>未修過搖滾樂與社會<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)資訊傳媒學分學程/(跨領域)藝術學分學程",不可加簽說明:"",必選修說明:""},{科號:"11120GEC 140100",課程中文名稱:"公民社會與法治",課程英文名稱:"Civil Society and  Constitutional Democracy",學分數:"3",人限:"60",新生保留人數:"0",通識對象:"*1",通識類別:"核心通識Core GE courses 4",授課語言:"中",備註:"【108(含)前入學生視為核心向度四】本課程為16週課程",停開註記:"",教室與上課時間:`EDU教   314	W3W4Wn
`,授課教師:`翁曉玲	WENG, HSIAO-LING
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120GEC 140201",課程中文名稱:"社會文化分析",課程英文名稱:"Social and cultural Analysis",學分數:"3",人限:"50",新生保留人數:"0",通識對象:"*1",通識類別:"核心通識Core GE courses 4",授課語言:"中",備註:"【108(含)前入學生視為核心向度四】本課程為16週課程",停開註記:"",教室與上課時間:`EDU教  114	T3T4Tn
`,授課教師:`鄭志鵬	CHENG, CHIH-PENG
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>未修過社會文化分析：跨文化比較<BR>未修過社會文化分析：教育議題<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120GEC 140202",課程中文名稱:"社會文化分析",課程英文名稱:"Social and cultural Analysis",學分數:"2",人限:"50",新生保留人數:"0",通識對象:"*1",通識類別:"核心通識Core GE courses 4",授課語言:"英",備註:"【108(含)前入學生視為核心向度四】本課程為16週課程",停開註記:"",教室與上課時間:`EDU教  114	W7W8
`,授課教師:`謝小芩	HSIEH, HSIAO-CHIN
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>未修過社會文化分析：跨文化比較<BR>未修過社會文化分析：教育議題<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120GEC 140300",課程中文名稱:"媒體探索與反思",課程英文名稱:"Media Understanding and Rethinking",學分數:"3",人限:"60",新生保留人數:"0",通識對象:"*1",通識類別:"核心通識Core GE courses 4",授課語言:"中",備註:"【108(含)前入學生視為核心向度四】本課程為16週課程",停開註記:"",教室與上課時間:`EDU教   314	W7W8W9
`,授課教師:`翁曉玲	WENG, HSIAO-LING
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)資訊傳媒學分學程",不可加簽說明:"",必選修說明:""},{科號:"11120GEC 140401",課程中文名稱:"全球政治經濟學",課程英文名稱:"Global Political Economy",學分數:"3",人限:"50",新生保留人數:"0",通識對象:"*1",通識類別:"核心通識Core GE courses 4",授課語言:"中",備註:"【108(含)前入學生視為核心向度四】本課程為16週課程",停開註記:"",教室與上課時間:`EDU教   314	T7T8T9
`,授課教師:`李文政	LEE,WEN-CHENG
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>未修過國際政治經濟學<BR>未修過全球化與國際關係<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)能源科技與永續社會學分學程",不可加簽說明:"",必選修說明:""},{科號:"11120GEC 140402",課程中文名稱:"全球政治經濟學",課程英文名稱:"Global Political Economy",學分數:"3",人限:"50",新生保留人數:"0",通識對象:"*1",通識類別:"核心通識Core GE courses 4",授課語言:"中",備註:"【108(含)前入學生視為核心向度四】本課程為16週課程,不接受二退",停開註記:"",教室與上課時間:`EDU教   309	W2W3W4
`,授課教師:`方天賜	FANG, TIEN-SZE
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>未修過國際政治經濟學<BR>未修過全球化與國際關係<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)能源科技與永續社會學分學程",不可加簽說明:"",必選修說明:""},{科號:"11120GEC 140500",課程中文名稱:"當代法哲學經典導讀",課程英文名稱:"Classic Readings in the Philosophy of Law",學分數:"3",人限:"50",新生保留人數:"0",通識對象:"*1",通識類別:"核心通識Core GE courses 4",授課語言:"英",備註:"【108(含)前入學生視為核心向度四】本課程為16週課程",停開註記:"",教室與上課時間:`EDU教  116	FnF5F6
`,授課教師:`陳弘儒	CHEN, HUNG-JU
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120GEC 140601",課程中文名稱:"社會學經典名著",課程英文名稱:"Classic Works of Sociology",學分數:"3",人限:"50",新生保留人數:"0",通識對象:"*1",通識類別:"核心通識Core GE courses 4",授課語言:"英",備註:"【108(含)前入學生視為核心向度四】本課程為16週課程",停開註記:"",教室與上課時間:`EDU教  116	R7R8R9
`,授課教師:`賴婉琪	LAI, YUEN-KI
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120GEC 140602",課程中文名稱:"社會學經典名著",課程英文名稱:"Classic Works of Sociology",學分數:"3",人限:"50",新生保留人數:"0",通識對象:"*1",通識類別:"核心通識Core GE courses 4",授課語言:"中",備註:"【108(含)前入學生視為核心向度四】本課程為16週課程",停開註記:"",教室與上課時間:`Nanda南大9104	F7F8F9
`,授課教師:`賴婉琪	LAI, YUEN-KI
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120GEC 150101",課程中文名稱:"科學革命",課程英文名稱:"The Scientific Revolution",學分數:"3",人限:"55",新生保留人數:"0",通識對象:"*1",通識類別:"核心通識Core GE courses 2",授課語言:"中",備註:"【108(含)前入學生視為核心向度五】本課程為16週課程",停開註記:"",教室與上課時間:`EDU教   310	M2M3M4
`,授課教師:`徐光台	HSU, KUANG-TAI
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)創新創業學分學程",不可加簽說明:"",必選修說明:""},{科號:"11120GEC 150102",課程中文名稱:"科學革命",課程英文名稱:"The Scientific Revolution",學分數:"3",人限:"60",新生保留人數:"0",通識對象:"*1",通識類別:"核心通識Core GE courses 2",授課語言:"中",備註:"【108(含)前入學生視為核心向度五】本課程為16週課程",停開註記:"",教室與上課時間:`MXIC旺宏253	R3R4Rn
`,授課教師:`英家銘	YING, JIA-MING
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)創新創業學分學程",不可加簽說明:"",必選修說明:""},{科號:"11120GEC 150201",課程中文名稱:"科技與社會",課程英文名稱:"Science, Technology and Society",學分數:"3",人限:"40",新生保留人數:"0",通識對象:"*1",通識類別:"核心通識Core GE courses 2",授課語言:"中",備註:"【108(含)前入學生視為核心向度五】本課程為16週課程",停開註記:"",教室與上課時間:`Nanda南大N204	R7R8R9
`,授課教師:`林文源	LIN, WEN-YUEN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)能源科技與永續社會學分學程",不可加簽說明:"",必選修說明:""},{科號:"11120GEC 150202",課程中文名稱:"科技與社會",課程英文名稱:"Science, Technology and Society",學分數:"3",人限:"50",新生保留人數:"0",通識對象:"*1",通識類別:"核心通識Core GE courses 2",授課語言:"中",備註:"【108(含)前入學生視為核心向度五】本課程為16週課程",停開註記:"",教室與上課時間:`EDU教  116	T3T4Tn
`,授課教師:`林宗德	LIN, TZUNG-DE
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)能源科技與永續社會學分學程",不可加簽說明:"",必選修說明:""},{科號:"11120GEC 150203",課程中文名稱:"科技與社會",課程英文名稱:"Science, Technology and Society",學分數:"3",人限:"50",新生保留人數:"0",通識對象:"*1",通識類別:"核心通識Core GE courses 2",授課語言:"中",備註:"【108(含)前入學生視為核心向度五】本課程為16週課程",停開註記:"",教室與上課時間:`EDU教  116	R3R4Rn
`,授課教師:`林宗德	LIN, TZUNG-DE
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)能源科技與永續社會學分學程",不可加簽說明:"",必選修說明:""},{科號:"11120GEC 150401",課程中文名稱:"前近代科學史",課程英文名稱:"Introduction to the History of Pre-Modern Science",學分數:"3",人限:"130",新生保留人數:"0",通識對象:"*1",通識類別:"核心通識Core GE courses 2",授課語言:"英",備註:"【108(含)前入學生視為核心向度五】本課程為16週課程",停開註記:"",教室與上課時間:`EDU教   311	T7T8T9
`,授課教師:`琅元	VOLKOV, ALEXEI KARLOVITCH
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120GEC 150402",課程中文名稱:"前近代科學史",課程英文名稱:"Introduction to the History of Pre-Modern Science",學分數:"3",人限:"130",新生保留人數:"0",通識對象:"*1",通識類別:"核心通識Core GE courses 2",授課語言:"英",備註:"【108(含)前入學生視為核心向度五】本課程為16週課程",停開註記:"",教室與上課時間:`EDU教   311	R7R8R9
`,授課教師:`琅元	VOLKOV, ALEXEI KARLOVITCH
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120GEC 150600",課程中文名稱:"資訊的邏輯思考",課程英文名稱:"Logical Thinking of Informatics",學分數:"3",人限:"110",新生保留人數:"0",通識對象:"*1",通識類別:"核心通識Core GE courses 2",授課語言:"英",備註:"【108(含)前入學生視為核心向度五】本課程為16週課程",停開註記:"",教室與上課時間:`DELTA台達109	MnM5M6
`,授課教師:`陳宜欣	CHEN, YI-SHIN
潘瑋	PAN, WEI
`,擋修說明:"",課程限制說明:"藝術學院,人社院,科管院,教育學院,生科院,原科院,清華學院優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"(跨領域)資訊傳媒學分學程",不可加簽說明:"",必選修說明:""},{科號:"11120GEC 150800",課程中文名稱:"東亞科學經典：《九章算術》與早期中華帝國",課程英文名稱:"The Nine Chapters of Mathematical Art and the World of Early Imperial China",學分數:"3",人限:"50",新生保留人數:"0",通識對象:"*1",通識類別:"核心通識Core GE courses 2",授課語言:"中",備註:"【108(含)前入學生視為核心向度五】本課程為16週課程",停開註記:"",教室與上課時間:`EDU教  114	T7T8T9
`,授課教師:`英家銘	YING, JIA-MING
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120GEC 160100",課程中文名稱:"文學經典：李杜詩選讀",課程英文名稱:"Selections from the Poetry of Li Bai and Du Fu",學分數:"2",人限:"50",新生保留人數:"0",通識對象:"*1",通識類別:"核心通識Core GE courses 3",授課語言:"中",備註:"【108(含)前入學生視為核心向度三】本課程為16週課程",停開註記:"",教室與上課時間:`EDU教  114	W5W6
`,授課教師:`向懿柔	HSIANG, I-JOU
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>未修過李杜詩選讀<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"排除中文系",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120GEC 160201",課程中文名稱:"文學經典：《詩經》選讀",課程英文名稱:"Selections from the Book of Odes",學分數:"2",人限:"50",新生保留人數:"0",通識對象:"*1",通識類別:"核心通識Core GE courses 3",授課語言:"中",備註:"【108(含)前入學生視為核心向度三】本課程為16週課程",停開註記:"",教室與上課時間:`Nanda南大9122	R7R8
`,授課教師:`王月秀	WANG, YUE-SHIOU
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>未修過詩經選讀<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"排除中文系",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120GEC 160202",課程中文名稱:"文學經典：《詩經》選讀",課程英文名稱:"Selections from the Book of Odes",學分數:"2",人限:"55",新生保留人數:"0",通識對象:"*1",通識類別:"核心通識Core GE courses 3",授課語言:"中",備註:"【108(含)前入學生視為核心向度三】本課程為16週課程",停開註記:"",教室與上課時間:`EDU教   314	F5F6
`,授課教師:`陳燕梅	CHEN, YEN-MEI
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>未修過詩經選讀<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"排除中文系",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120GEC 160300",課程中文名稱:"思想經典：《論》《孟》選讀",課程英文名稱:"The selected readings of Lun Yu and Men Zu",學分數:"2",人限:"50",新生保留人數:"0",通識對象:"*1",通識類別:"核心通識Core GE courses 1",授課語言:"中",備註:"【108(含)前入學生視為核心向度一】本課程為16週課程",停開註記:"",教室與上課時間:`EDU教   305	W5W6
`,授課教師:`徐其寧	HSU, CHI-NING
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>未修過論孟選讀<BR>未修過東方思想經典：《論》《孟》選讀<BR>未修過東方思想經典：《孟子》選讀<BR>未修過東方思想經典:《論》《孟》思想與現代生活<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"排除中文系",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120GEC 160600",課程中文名稱:"文學經典：《左傳》選讀",課程英文名稱:"Selections from the Tso Chuan",學分數:"2",人限:"60",新生保留人數:"0",通識對象:"*1",通識類別:"核心通識Core GE courses 3",授課語言:"中",備註:"【108(含)前入學生視為核心向度三】本課程為16週課程",停開註記:"",教室與上課時間:`MXIC旺宏243	T7T8
`,授課教師:`謝明憲	HSIEH, MING-HSIEN
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>未修過左傳選讀<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"排除中文系",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120GEC 161000",課程中文名稱:"文學經典：《史記》選讀",課程英文名稱:"Selections from the Records of Grand Historian",學分數:"3",人限:"40",新生保留人數:"0",通識對象:"*1",通識類別:"核心通識Core GE courses 3",授課語言:"中",備註:"【108(含)前入學生視為核心向度三】本課程為16週課程",停開註記:"",教室與上課時間:`EDU教  114	F3F4Fn
`,授課教師:`張菀琤	CHANG, WAN-CHENG
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>未修過史記選讀<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"排除中文系",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120GEC 161001",課程中文名稱:"文學經典：《史記》選讀",課程英文名稱:"Selections from the Records of Grand Historian",學分數:"3",人限:"40",新生保留人數:"0",通識對象:"*1",通識類別:"核心通識Core GE courses 3",授課語言:"中",備註:"【108(含)前入學生視為核心向度三】本課程為16週課程",停開註記:"",教室與上課時間:`EDU教  116	M3M4Mn
`,授課教師:`張菀琤	CHANG, WAN-CHENG
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>未修過史記選讀<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"排除中文系",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120GEC 161100",課程中文名稱:"文學經典：魏晉風流與文學",課程英文名稱:"Readings in the Wei and Jin Dynasties Literature",學分數:"2",人限:"50",新生保留人數:"0",通識對象:"*1",通識類別:"核心通識Core GE courses 3",授課語言:"中",備註:"【108(含)前入學生視為核心向度三】本課程為16週課程",停開註記:"",教室與上課時間:`EDU教   313	M5M6
`,授課教師:`林宏安	LIN, HUNG-AN
`,擋修說明:"",課程限制說明:"排除中文系",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120GEC 161200",課程中文名稱:"思想經典：《莊子》選讀",課程英文名稱:"The selected readings of Zhuang Zi",學分數:"2",人限:"60",新生保留人數:"0",通識對象:"*1",通識類別:"核心通識Core GE courses 1",授課語言:"中",備註:"【108(含)前入學生視為核心向度一】本課程為16週課程",停開註記:"",教室與上課時間:`EDU教   305	T1T2
`,授課教師:`賴昶&#20120;	LAI, CHANG-XUAN
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>未修過莊子選讀<BR>未修過東方思想經典：《莊子》選讀<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"排除中文系",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120GEC 161300",課程中文名稱:"思想經典：《六祖壇經》選讀",課程英文名稱:"Reading Classics in Eastern Philosophy: the Platform Sutra of the Sixth Patriarch",學分數:"3",人限:"50",新生保留人數:"0",通識對象:"*1",通識類別:"核心通識Core GE courses 1",授課語言:"中",備註:"【108(含)前入學生視為核心向度一】本課程為16週課程",停開註記:"",教室與上課時間:`EDU教   305	M7M8M9
`,授課教師:`王月秀	WANG, YUE-SHIOU
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>未修過六祖壇經選讀<BR>未修過東方思想經典：《六祖壇經》選讀<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120GEC 161500",課程中文名稱:"思想經典：《孟子》選讀",課程英文名稱:"The selected readings of Men Zi",學分數:"2",人限:"60",新生保留人數:"0",通識對象:"*1",通識類別:"核心通識Core GE courses 1",授課語言:"中",備註:"【108(含)前入學生視為核心向度一】本課程為16週課程",停開註記:"",教室與上課時間:`EDU教   305	W1W2
`,授課教師:`賴昶&#20120;	LAI, CHANG-XUAN
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>未修過東方思想經典：《孟子》選讀<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"排除中文系",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120GEC 162000",課程中文名稱:"文學經典：唐吉軻德與幽默文學選讀",課程英文名稱:"Don Quixote and Selected Comedies",學分數:"2",人限:"60",新生保留人數:"0",通識對象:"*1",通識類別:"核心通識Core GE courses 3",授課語言:"英",備註:"【108(含)前入學生視為核心向度三】本課程為16週課程,欲加簽者第一堂須到課Attend class on 1st week shoul",停開註記:"",教室與上課時間:`EDU教  114	F5F6
`,授課教師:`陳麒方	CHEN, CHI-FANG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120GEC 170201",課程中文名稱:"歷史與世界：11世紀以降",課程英文名稱:"History and the World: Since the 11th Century",學分數:"3",人限:"60",新生保留人數:"0",通識對象:"*1",通識類別:"核心通識Core GE courses 1",授課語言:"中",備註:"【108(含)前入學生視為核心向度六】本課程為16週課程",停開註記:"",教室與上課時間:`MXIC旺宏253	T7T8T9
`,授課教師:`陳麗華	CHEN LI HUA
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>未修過歷史與現代世界：11世紀以降<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120GEC 170202",課程中文名稱:"歷史與世界：11世紀以降",課程英文名稱:"History and the World: Since the 11th Century",學分數:"3",人限:"60",新生保留人數:"0",通識對象:"*1",通識類別:"核心通識Core GE courses 1",授課語言:"中",備註:"【108(含)前入學生視為核心向度六】本課程為16週課程",停開註記:"",教室與上課時間:`GEN II綜二105	M7M8M9
`,授課教師:`陳麗華	CHEN LI HUA
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>未修過歷史與現代世界：11世紀以降<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120GEC 170400",課程中文名稱:"歷史現場：歷史文獻、現地考察與歷史書寫",課程英文名稱:"Historical Fieldwork: Historical Source, Fieldwork, and the Writing of History",學分數:"3",人限:"50",新生保留人數:"0",通識對象:"*1",通識類別:"核心通識Core GE courses 1",授課語言:"中",備註:"【108(含)前入學生視為核心向度六】本課程為16週課程",停開註記:"",教室與上課時間:`EDU教  116	F7F8F9
`,授課教師:`張繼瑩	CHANG, CHI-YING
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>未修過史學導論：歷史文獻、現地考察與歷史書寫<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120GEC 170600",課程中文名稱:"歷史思維：人人都是史學家",課程英文名稱:"Historical Thinking: We are all historians",學分數:"3",人限:"60",新生保留人數:"0",通識對象:"*1",通識類別:"核心通識Core GE courses 1",授課語言:"中",備註:"本課程為16週課程。【108(含)前入學生視為核心向度六】",停開註記:"",教室與上課時間:`EDU教   305	F5F6F7
`,授課教師:`洪維晟	HUNG,WEI-SHENG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120GPTS510800",課程中文名稱:"文化人類學",課程英文名稱:"Advance Cultural Anthropology",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`HSS人社C304	S2S3S4
`,授課教師:`陳中民	CHEN, CHUNG-MIN
`,擋修說明:"",課程限制說明:"限台研教在職學位班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"台研教在職學位班111P  必修	"},{科號:"11120GPTS512000",課程中文名稱:"研究方法與論文寫作二",課程英文名稱:"Research Method and Academic Writing (II)",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`HSS人社C304	MaMbMc
`,授課教師:`謝一誼	I-YI HSIEH
`,擋修說明:"",課程限制說明:"限台研教在職學位班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"台研教在職學位班111P  選修	"},{科號:"11120GPTS520100",課程中文名稱:"台灣文學經典專題",課程英文名稱:"Selection from Classics in Taiwanese Literature",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"核心課程(必修)，本課程為16週課程",停開註記:"",教室與上課時間:`HSS人社A309	S5S6S7
`,授課教師:`陳惠齡	HUANG CHEN, WEI-LIN
`,擋修說明:"",課程限制說明:"限台研教在職學位班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"台研教在職學位班111P  必修	"},{科號:"11120GPTS521700",課程中文名稱:"台灣現代散文四家論",課程英文名稱:"Topica on the 4 writers of Taiwanese prose",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`HSS人社A309	WaWbWc
`,授課教師:`陳萬益	CHEN, WAN-YI
`,擋修說明:"",課程限制說明:"限台研教在職學位班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"台研教在職學位班111P  選修	"},{科號:"11120GPTS600000",課程中文名稱:"論文",課程英文名稱:"Thesis",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限台研教專班三年級以上修習",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"排除台研教在職學位班專班1年級2年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"台研教在職學位班111P  必修	"},{科號:"11120HBA 500000",課程中文名稱:"論文",課程英文名稱:"Thesis",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"限健康經管專班專班2年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"健康經管專班111P  必修	"},{科號:"11120HBA 500500",課程中文名稱:"金門戰地人文與管理",課程英文名稱:"Battlefield Culture and Management in Kinmen",學分數:"2",人限:"15",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"統一以加簽方式選課",停開註記:"",教室與上課時間:"",授課教師:`林世昌	LIN, SHIH-CHANG
蔡昌憲	TSAI, CHANG-HSIEN
`,擋修說明:"",課程限制說明:"限健康經管專班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:"健康經管專班111P  選修	"},{科號:"11120HBA 500600",課程中文名稱:"健康數據分析",課程英文名稱:"Health Data Analysis",學分數:"3",人限:"15",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`TSMC台積428	S5S6S7
`,授課教師:`王惠貞	WANG, HUI-CHEN
李宜	LEE, YI
林世昌	LIN, SHIH-CHANG
`,擋修說明:"",課程限制說明:"限健康經管專班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:"健康經管專班111P  必修	"},{科號:"11120HBA 500700",課程中文名稱:"食安、永續與公司治理",課程英文名稱:"Food Safety, Sustainability, and Corporate Governance",學分數:"3",人限:"15",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`TSMC台積428	S2S3S4
`,授課教師:`蔡昌憲	TSAI, CHANG-HSIEN
林勤富	LIN, CHING-FU
`,擋修說明:"",課程限制說明:"限健康經管專班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:"健康經管專班111P  必修	"},{科號:"11120HBA 501200",課程中文名稱:"醫療服務創新與設計",課程英文名稱:"Service Innovation and Design for Health",學分數:"3",人限:"15",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`TSMC台積429	S2S3S4
`,授課教師:`王俊程	WANG, JYUN-CHENG
林福仁	LIN, FU-REN
`,擋修說明:"",課程限制說明:"限健康經管專班專班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:"健康經管專班111P  必修	"},{科號:"11120HIS 110900",課程中文名稱:"中國歷史的演變與發展",課程英文名稱:"Continuity and Change in the Chinese History",學分數:"2",人限:"80",新生保留人數:"0",通識對象:"*1",通識類別:"人文學領域 Elective GE course: Humanities",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`MXIC旺宏253	T5T6
`,授課教師:`張元	CHANG, YUEN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120HIS 213200",課程中文名稱:"歷史文化經典：《資治通鑑南北朝中期》選讀",課程英文名稱:"Selected Readings from Zizhi tongjian （Comprehensive mirror to aid in government）：South and North",學分數:"2",人限:"120",新生保留人數:"0",通識對象:"*1",通識類別:"核心通識Core GE courses 1",授課語言:"中",備註:"【108(含)前入學生視為核心向度六】",停開註記:"",教室與上課時間:`GEN IV綜四121	T7T8
`,授課教師:`張元	CHANG, YUEN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120HIS 213300",課程中文名稱:"歷史文化經典：資治通鑑--漢末大亂",課程英文名稱:"The Historiography of Tzu-chih t'ung-chien: Narratives of the Collapse and Split of Han Dynasty",學分數:"2",人限:"60",新生保留人數:"0",通識對象:"*1",通識類別:"核心通識Core GE courses 1",授課語言:"中",備註:"1.本課程不接受停修申請。2.【108(含)前入學生視為核心向度六】。",停開註記:"",教室與上課時間:`ESS工科 506	W3W4
`,授課教師:`許松源	SHU, SUNG-YUAN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120HIS 232100",課程中文名稱:"歷史與世界：拉丁美洲文化概論",課程英文名稱:"History and World: Introduction of Latin American Culture",學分數:"2",人限:"200",新生保留人數:"0",通識對象:"*1",通識類別:"核心通識Core GE courses 1",授課語言:"中",備註:"本課程不接受停修申請。【108(含)前入學生視為核心向度六】,16週課程",停開註記:"",教室與上課時間:`DELTA台達璟德	M5M6
`,授課教師:`李毓中	LEE, YU-CHUNG
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>未修過拉丁美洲文化概論<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120HIS 233100",課程中文名稱:"歷史思維：歷史與思考",課程英文名稱:"How to learn and think history?",學分數:"2",人限:"60",新生保留人數:"0",通識對象:"*1",通識類別:"核心通識Core GE courses 1",授課語言:"中",備註:"1.本課程不接受停修申請。2.【108(含)前入學生視為核心向度六】。",停開註記:"",教室與上課時間:`ESS工科 506	R3R4
`,授課教師:`許松源	SHU, SUNG-YUAN
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>未修過歷史與思考<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120HIS 233300",課程中文名稱:"歷史與世界：近代世界的形成",課程英文名稱:"History and the World: the Making of the Modern World",學分數:"2",人限:"80",新生保留人數:"0",通識對象:"*1",通識類別:"核心通識Core GE courses 1",授課語言:"中",備註:"【108(含)前入學生視為核心向度六】",停開註記:"",教室與上課時間:`MXIC旺宏243	T5T6
`,授課教師:`馬文英	MA, WEN-YING
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>未修過近代世界的形成<BR>未修過NT239-歷史與現代世界：近代世界的形成<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120HIS 240200",課程中文名稱:"台灣文化史",課程英文名稱:"The History of Taiwan Culture",學分數:"2",人限:"80",新生保留人數:"0",通識對象:"*1",通識類別:"人文學領域 Elective GE course: Humanities",授課語言:"中",備註:"本課程為16週課程。",停開註記:"",教室與上課時間:`MXIC旺宏253	F5F6
`,授課教師:`黃子寧	HUANG,TZU-NING
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120HIS 241400",課程中文名稱:"聲音的臺灣史",課程英文名稱:"Audible Taiwan History",學分數:"3",人限:"30",新生保留人數:"0",通識對象:"*1",通識類別:"人文學領域 Elective GE course: Humanities",授課語言:"中",備註:"本課程為16週課程。",停開註記:"",教室與上課時間:`LTM綠能201	M7M8M9
`,授課教師:`吳國聖	WU, KUO-SHENG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120HIS 260500",課程中文名稱:"德國史",課程英文名稱:"The German History",學分數:"2",人限:"80",新生保留人數:"0",通識對象:"*1",通識類別:"人文學領域 Elective GE course: Humanities",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`MXIC旺宏243	W3W4
`,授課教師:`馬文英	MA, WEN-YING
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120HIS 504100",課程中文名稱:"日文名著精選二",課程英文名稱:"Reading in Japanese Documents",學分數:"2",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`HSS人社B413	F3F4
`,授課教師:`邱若山	CHIOU, RUOH-SHAN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"歷史所111D  選修	歷史所111M  選修	"},{科號:"11120HIS 509500",課程中文名稱:"清朝的帝國建構與圖像製作",課程英文名稱:"Qing Empire Building and Image Making",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"1.本課程為 16 週課程。2.HSS歷史學程。",停開註記:"",教室與上課時間:`HSS人社A302	RnR5R6
`,授課教師:`馬雅貞	MA, YA-CHEN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)藝術學分學程",不可加簽說明:"",必選修說明:"歷史所111D  選修	歷史所111M  選修	人社院學士班108BA 選修	人社院學士班108BB 選修	人社院學士班109BA 選修	人社院學士班109BB 選修	亞際文化碩士學程111M  選修	"},{科號:"11120HIS 511300",課程中文名稱:"明清出版文化",課程英文名稱:"Print Culture in Ming-Qing China",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"1.本課程為16週課程。",停開註記:"",教室與上課時間:`HSS人社A302	T7T8T9
`,授課教師:`馬孟晶	MA, MENG-CHING
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"歷史所111D  選修	歷史所111M  選修	人社院學士班108BA 選修	人社院學士班108BB 選修	人社院學士班109BA 選修	人社院學士班109BB 選修	"},{科號:"11120HIS 514900",課程中文名稱:"明清制度與地方社會",課程英文名稱:"The State System and Local Society since the Ming Dynasty",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"HSS歷史學程",停開註記:"",教室與上課時間:`HSS人社A302	R2R3R4
`,授課教師:`張繼瑩	CHANG, CHI-YING
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"歷史所111D  選修	歷史所111M  選修	人社院學士班108BA 選修	人社院學士班108BB 選修	人社院學士班109BA 選修	人社院學士班109BB 選修	"},{科號:"11120HIS 515000",課程中文名稱:"滿文歷史文獻選讀",課程英文名稱:"Selected Readings of Manchu Historical Sources",學分數:"3",人限:"15",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"1.本課程為16週課程。2.HSS歷史學程。",停開註記:"",教室與上課時間:`HSS人社B413	T2T3T4
`,授課教師:`吳國聖	WU, KUO-SHENG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"歷史所111D  選修	歷史所111M  選修	人社院學士班108BA 選修	人社院學士班108BB 選修	人社院學士班109BA 選修	人社院學士班109BB 選修	"},{科號:"11120HIS 515500",課程中文名稱:"性別與傳記研究",課程英文名稱:"gender and biographical research",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"1.本課程為16週課程。2.本課程實際上課時間為9:30~12:30。",停開註記:"",教室與上課時間:`HSS人社A302	F2F3F4
`,授課教師:`連玲玲	LIEN, LING-LING
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"歷史所111D  選修	歷史所111M  選修	"},{科號:"11120HIS 515700",課程中文名稱:"季風亞洲閩南－西班牙文獻選讀",課程英文名稱:"Readings of Hokkien-Spanish Historical Documents of Monsoon Asia",學分數:"3",人限:"15",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"1.本課程為16週課程。2.本課程不接受停修申請。3.HSS歷史學程。",停開註記:"",教室與上課時間:`HSS人社B413	R5R6R7
`,授課教師:`李毓中	LEE, YU-CHUNG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"歷史所111D  選修	歷史所111M  選修	人社院學士班108BA 選修	人社院學士班108BB 選修	人社院學士班109BA 選修	人社院學士班109BB 選修	"},{科號:"11120HIS 576900",課程中文名稱:"織品與社會--宋元時期",課程英文名稱:"Textile and Society：Song-Yuan Period",學分數:"3",人限:"7",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"1.本課程可算入乙組組內開設課程15學分。2.HSS歷史學程。",停開註記:"",教室與上課時間:`HSS人社A302	M7M8M9
`,授課教師:`毛傳慧	MAU, CHUAN-HUI
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"歷史所111D  選修	歷史所111M  選修	人社院學士班108BA 選修	人社院學士班108BB 選修	人社院學士班109BA 選修	人社院學士班109BB 選修	"},{科號:"11120HIS 580000",課程中文名稱:"絲綢之路的科學考察",課程英文名稱:"Scientific missions on the Silk Roads",學分數:"3",人限:"7",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程為16週課程。2位教師全學期均共同出席",停開註記:"",教室與上課時間:`HSS人社A302	F7F8F9
`,授課教師:`毛傳慧	MAU, CHUAN-HUI
琅元	VOLKOV, ALEXEI KARLOVITCH
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"歷史所111D  選修	歷史所111M  選修	"},{科號:"11120HIS 610500",課程中文名稱:"明清多元文化史專題",課程英文名稱:"Special Topics on Multicultural Studies during Ming and Qing",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"1.本課程不接受停修申請。2.HSS歷史學程。",停開註記:"",教室與上課時間:`HSS人社A302	M2M3M4
`,授課教師:`黃一農	HUANG, YI-LONG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"歷史所111D  選修	歷史所111M  選修	人社院學士班108BA 選修	人社院學士班108BB 選修	人社院學士班109BA 選修	人社院學士班109BB 選修	"},{科號:"11120HIS 612500",課程中文名稱:"荷蘭東印度公司與臺灣專題研究",課程英文名稱:"Seminar on the Dutch East India Company and Taiwan",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"1.本課程為16週課程。2.HSS歷史學程。",停開註記:"",教室與上課時間:`HSS人社B413	M5M6M7
`,授課教師:`邱馨慧	CHIU, HSIN-HUI
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)世界南島暨原住民族學分學程",不可加簽說明:"",必選修說明:"歷史所111D  選修	歷史所111M  選修	人社院學士班108BA 選修	人社院學士班108BB 選修	人社院學士班109BA 選修	人社院學士班109BB 選修	"},{科號:"11120HIS 680000",課程中文名稱:"論文研究",課程英文名稱:"Thesis",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限歷史所碩三以上修習",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"排除歷史所碩士班1年級2年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"歷史所111M  必修	"},{科號:"11120HIS 700100",課程中文名稱:"漢學述評",課程英文名稱:"Sinology: Introduction and Critique",學分數:"2",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程為16週課程。",停開註記:"",教室與上課時間:`HSS人社B413	W3W4
`,授課教師:`廖咸惠	LIAO, HSIEN-HUEI
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"歷史所111D  必修	"},{科號:"11120HIS 800000",課程中文名稱:"論文研究",課程英文名稱:"Thesis",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限歷史所博三以上修習",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"排除歷史所博士班1年級2年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"歷史所111D  必修	"},{科號:"11120HSS 100500",課程中文名稱:"認識世界：世界文明史",課程英文名稱:"World Civilizations",學分數:"3",人限:"40",新生保留人數:"0",通識對象:"*7",通識類別:"人文學領域 Elective GE course: Humanities",授課語言:"中",備註:"認識世界群組課程，HSS文化研究學程 。本課程為16 週課程。",停開註記:"",教室與上課時間:`HSS人社C404	T7T8T9
`,授課教師:`邱馨慧	CHIU, HSIN-HUI
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>未修過世界文明史<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"人社院學士班優先，第3次選課起開放全校修習",第一二專長對應:"人類學(第一專長)	歷史(第一專長)	文學與創作(第一專長)	政治經濟(第一專長)	哲學(第一專長)	社會學(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"人社院學士班111BA 必修	人社院學士班111BB 必修	"},{科號:"11120HSS 101200",課程中文名稱:"人文思維：當代思潮",課程英文名稱:"Contemporary Thought",學分數:"3",人限:"80",新生保留人數:"0",通識對象:"*7",通識類別:"人文學領域 Elective GE course: Humanities",授課語言:"中",備註:"本課為16週課程，人文思維群組",停開註記:"",教室與上課時間:`HSS人社C404	T3T4Tn
`,授課教師:`吳俊業	NG, CHON IP
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>未修過當代思潮<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"",第一二專長對應:"人類學(第一專長)	歷史(第一專長)	文學與創作(第一專長)	政治經濟(第一專長)	哲學(第一專長)	社會學(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"人社院學士班111BA 選修	人社院學士班111BB 選修	"},{科號:"11120HSS 110100",課程中文名稱:"文字的世界史",課程英文名稱:"World History in Writing Systems",學分數:"3",人限:"15",新生保留人數:"0",通識對象:"*7",通識類別:"人文學領域 Elective GE course: Humanities",授課語言:"中",備註:"HSS歷史學程，本課16週課程",停開註記:"",教室與上課時間:`HSS人社B413	T7T8T9
`,授課教師:`吳國聖	WU, KUO-SHENG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"歷史(第二專長)	歷史(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"人社院學士班111BA 選修	人社院學士班111BB 選修	"},{科號:"11120HSS 111100",課程中文名稱:"棒球與台灣社會史",課程英文名稱:"Baseball and Taiwan Social History",學分數:"3",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`HSS人社B413	R3R4Rn
`,授課教師:`施淳益	SHIH, CHUN-YI
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"人社院學士班108BA 選修	人社院學士班108BB 選修	人社院學士班109BA 選修	人社院學士班109BB 選修	"},{科號:"11120HSS 111200",課程中文名稱:"用眼睛看的戰後臺灣史",課程英文名稱:"Seeing the Postwar History of Taiwan",學分數:"2",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`EDU教   305	F3F4
`,授課教師:`洪維晟	HUNG,WEI-SHENG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"人社院學士班108BA 選修	人社院學士班108BB 選修	人社院學士班109BA 選修	人社院學士班109BB 選修	"},{科號:"11120HSS 111300",課程中文名稱:"臺灣史中的性別議題",課程英文名稱:"Gender Issue in Taiwan History",學分數:"2",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`HSS人社A316	F7F8
`,授課教師:`陳肇萱	CHEN, CHAO-HSUAN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"人社院學士班108BA 選修	人社院學士班108BB 選修	人社院學士班109BA 選修	人社院學士班109BB 選修	"},{科號:"11120HSS 130000",課程中文名稱:"語言學導論",課程英文名稱:"General Linguistics",學分數:"3",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"必選九選四，HSS語言學學程必修。本課程為16 週課程。",停開註記:"",教室與上課時間:`HSS人Ｃ403A	M7M8M9
`,授課教師:`廖家萱	LIAO, CHIA-HSUAN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"人社院學士班111BA 必修	人社院學士班111BB 必修	"},{科號:"11120HSS 180000",課程中文名稱:"政治學導論",課程英文名稱:"Introduction to Politics",學分數:"3",人限:"70",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"HSS政治經濟學程，9選四，必選修",停開註記:"",教室與上課時間:`HSS人社C411	F6F7F8
`,授課教師:`黃長玲	CHANG-LING HUANG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"政治經濟(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"人社院學士班111BA 選修	人社院學士班111BB 選修	"},{科號:"11120HSS 190000",課程中文名稱:"文學與創作導論",課程英文名稱:"Literature and Creation Introductory",學分數:"3",人限:"85",新生保留人數:"0",通識對象:"*7",通識類別:"人文學領域 Elective GE course: Humanities",授課語言:"中",備註:"必選九選四，HSS文學與創作學程必修。本課程為16 週課程。",停開註記:"",教室與上課時間:`HSS人社C404	W3W4Wn
`,授課教師:`王鈺婷	WANG, YU-TING
`,擋修說明:"",課程限制說明:"",第一二專長對應:"文學與創作(第二專長)	文學與創作(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"人社院學士班111BA 選修	人社院學士班111BB 選修	"},{科號:"11120HSS 200300",課程中文名稱:"人文社會科學經典閱讀Ｃ",課程英文名稱:"Reading Classics: Humanities and Social Sciences Ｃ",學分數:"3",人限:"50",新生保留人數:"0",通識對象:"*7",通識類別:"人文學領域 Elective GE course: Humanities",授課語言:"中",備註:"經典閱讀群組，本課為16週課程",停開註記:"",教室與上課時間:`HSS人Ｃ403A	F3F4Fn
`,授課教師:`陳斐婷	CHEN, FEI-TING
`,擋修說明:"",課程限制說明:"大學部2年級3年級4年級優先，第3次選課起開放全校修習",第一二專長對應:"人類學(第一專長)	歷史(第一專長)	文學與創作(第一專長)	政治經濟(第一專長)	哲學(第一專長)	社會學(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"人社院學士班110BA 必修	人社院學士班110BB 必修	"},{科號:"11120HSS 201100",課程中文名稱:"社會連結：人文與科技變遷",課程英文名稱:"Issues in Cultural History of Scientific and Tech",學分數:"3",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"社會連結群組課程，加簽限大四生(限第一堂要到課)",停開註記:"",教室與上課時間:`HSS人Ｃ403A	W7W8W9
`,授課教師:`林祐聖	LIN, YU-SHENG
`,擋修說明:"",課程限制說明:"人社院學士班優先，第3次選課起開放全校修習",第一二專長對應:"人類學(第一專長)	歷史(第一專長)	文學與創作(第一專長)	政治經濟(第一專長)	哲學(第一專長)	社會學(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"人社院學士班110BA 必修	人社院學士班110BB 必修	"},{科號:"11120HSS 201300",課程中文名稱:"社會連結：新竹文學踏查",課程英文名稱:"Literary Reading and Fieldwork in Hsinchu",學分數:"1",人限:"15",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"社會連結群組課程",停開註記:"",教室與上課時間:`HSS人Ｃ403A	S3
`,授課教師:`徐淑賢	HSU,SHU-HSIEN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"人類學(第一專長)	歷史(第一專長)	文學與創作(第一專長)	政治經濟(第一專長)	哲學(第一專長)	社會學(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"人社院學士班110BA 必修	人社院學士班110BB 必修	"},{科號:"11120HSS 201400",課程中文名稱:"文化資產與永續發展",課程英文名稱:"Cultural Heritage and Sustainable Development",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課16週課程",停開註記:"",教室與上課時間:`EDU教  109	W2W3W4
`,授課教師:`榮芳杰	RONG, FANG-JAY
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"人社院學士班110BA 選修	人社院學士班110BB 選修	"},{科號:"11120HSS 201500",課程中文名稱:"社會連結：鄉土誌與社區調查",課程英文名稱:"Local Chronicles and Community Survey",學分數:"3",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"社會連結群組課程，本課16週課程",停開註記:"",教室與上課時間:`HSS人社C507	W6W7W8
`,授課教師:`劉柳書琴	LIU, LIU SHU QIN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"人類學(第一專長)	歷史(第一專長)	文學與創作(第一專長)	政治經濟(第一專長)	哲學(第一專長)	社會學(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"人社院學士班110BA 必修	人社院學士班110BB 必修	"},{科號:"11120HSS 202400",課程中文名稱:"自主學習的方法與實踐",課程英文名稱:"The method and practice of the self-planned learning",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`HSS人Ｃ403A	WaWbWc
`,授課教師:`李天健	LEE, TIEN-CHIEN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"人社院學士班108BA 選修	人社院學士班108BB 選修	人社院學士班109BA 選修	人社院學士班109BB 選修	人社院學士班110BA 選修	人社院學士班110BB 選修	人社院學士班111BA 選修	人社院學士班111BB 選修	"},{科號:"11120HSS 220100",課程中文名稱:"形上學",課程英文名稱:"Metaphysics",學分數:"3",人限:"60",新生保留人數:"0",通識對象:"*7",通識類別:"人文學領域 Elective GE course: Humanities",授課語言:"中",備註:"支援社會及文化研究學程  本課16週課程",停開註記:"",教室與上課時間:`HSS人社C204	W2W3W4
`,授課教師:`陳思廷	CHEN, SZU-TING
`,擋修說明:"",課程限制說明:"",第一二專長對應:"哲學(第二專長)	哲學(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"人社院學士班110BA 選修	人社院學士班110BB 選修	"},{科號:"11120HSS 222200",課程中文名稱:"道家思想導論",課程英文名稱:"Introduction to Taoist Thought",學分數:"3",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"HSS哲學學程，本課16週課程，新聘蔡岳璋教師",停開註記:"",教室與上課時間:`HSS人社C205	W7W8W9
`,授課教師:`聘任中	
`,擋修說明:"",課程限制說明:"",第一二專長對應:"哲學(第二專長)	哲學(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"人社院學士班110BA 選修	人社院學士班110BB 選修	"},{科號:"11120HSS 250100",課程中文名稱:"考古學導論",課程英文名稱:"An Introduction to Archeology",學分數:"3",人限:"25",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"HSS人類學學程",停開註記:"",教室與上課時間:`HSS人社C205	T7T8T9
`,授課教師:`邱鴻霖	CHIU, HUNG-LIN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"人類學(第二專長)	人類學(第一專長)",學分學程對應:"(跨領域)藝術學分學程",不可加簽說明:"",必選修說明:"人社院學士班110BA 選修	人社院學士班110BB 選修	"},{科號:"11120HSS 251900",課程中文名稱:"環境人類學導論",課程英文名稱:"Introduction to Environmental Anthropology",學分數:"3",人限:"20",新生保留人數:"0",通識對象:"*7",通識類別:"社會科學領域 Elective GE course: Social Sciences",授課語言:"中",備註:"HSS人類學學程，本課16週課程",停開註記:"",教室與上課時間:`HSS人社B304	F2F3F4
`,授課教師:`林浩立	LIN, HAO-LI
`,擋修說明:"",課程限制說明:"",第一二專長對應:"人類學(第二專長)	人類學(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"人社院學士班110BA 選修	人社院學士班110BB 選修	"},{科號:"11120HSS 252000",課程中文名稱:"藝術人類學與當代藝術",課程英文名稱:"Anthropology of Contemporary Art",學分數:"3",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"HSS人類學學程，新聘謝一誼",停開註記:"",教室與上課時間:`HSS人社C205	M6M7M8
`,授課教師:`聘任中	
`,擋修說明:"",課程限制說明:"",第一二專長對應:"人類學(第二專長)	人類學(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"人社院學士班110BA 選修	人社院學士班110BB 選修	"},{科號:"11120HSS 260000",課程中文名稱:"文化研究導論",課程英文名稱:"Introduction to Cultural Studies",學分數:"3",人限:"60",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"必選九選四，HSS文化研究學程必修 限大二以上",停開註記:"",教室與上課時間:`HSS人社C404	F3F4Fn
`,授課教師:`劉羿宏	LIU, YI-HUNG
`,擋修說明:"",課程限制說明:"人社院學士班大學部2年級3年級4年級優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"人社院學士班110BA 必修	人社院學士班110BB 必修	"},{科號:"11120HSS 280100",課程中文名稱:"民主的理論與實際",課程英文名稱:"Democracy: Theory and Practice",學分數:"3",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"HSS政治經濟學程，新聘黃嘉鴻",停開註記:"",教室與上課時間:`EDU教   307	T7T8T9
`,授課教師:`聘任中	
`,擋修說明:"",課程限制說明:"",第一二專長對應:"政治經濟(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"人社院學士班110BA 選修	人社院學士班110BB 選修	"},{科號:"11120HSS 290100",課程中文名稱:"散文鑑賞與習作",課程英文名稱:"The appreciation and exercise of Modern Prose",學分數:"3",人限:"25",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"HSS文學與創作學程，本課16週課程",停開註記:"",教室與上課時間:`HSS人Ｃ403A	M3M4Mn
`,授課教師:`鄧慧恩	TENG, HUI-EN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"文學與創作(第二專長)	文學與創作(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"人社院學士班110BA 選修	人社院學士班110BB 選修	"},{科號:"11120HSS 291200",課程中文名稱:"基礎影視實務",課程英文名稱:"Basic Video Production",學分數:"3",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"HSS文學與創作學程",停開註記:"",教室與上課時間:`HSS人社C507	M8M9Ma
`,授課教師:`安哲毅	AN, JE-YI
`,擋修說明:"",課程限制說明:"",第一二專長對應:"文學與創作(第二專長)	文學與創作(第一專長)",學分學程對應:"(跨領域)資訊傳媒學分學程/(跨領域)藝術學分學程",不可加簽說明:"",必選修說明:"人社院學士班110BA 選修	人社院學士班110BB 選修	"},{科號:"11120HSS 291800",課程中文名稱:"文學的媒體混合專題",課程英文名稱:"Studying on Literature's Media Mix",學分數:"3",人限:"25",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"HSS文學與創作學程，本課16週課程",停開註記:"",教室與上課時間:`HSS人社C205	F5F6F7
`,授課教師:`王威智	WANG, WEI-CHIH
`,擋修說明:"",課程限制說明:"",第一二專長對應:"文學與創作(第二專長)	文學與創作(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"人社院學士班110BA 選修	人社院學士班110BB 選修	"},{科號:"11120HSS 300200",課程中文名稱:"跨領域對話：社會科學",課程英文名稱:"Interdisciplinary Dialogue: Social Science",學分數:"3",人限:"25",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"跨領域對話群組課程",停開註記:"",教室與上課時間:`HSS人Ｃ513A	M7M8M9
`,授課教師:`魏捷茲	WILKERSON, JAMES RUSSELL
`,擋修說明:"",課程限制說明:"",第一二專長對應:"人類學(第一專長)	歷史(第一專長)	文學與創作(第一專長)	政治經濟(第一專長)	哲學(第一專長)	社會學(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"人社院學士班109BA 必修	人社院學士班109BB 必修	"},{科號:"11120HSS 300900",課程中文名稱:"跨領域對話：技術、社會與歷史",課程英文名稱:"Interdisciplinary Dialogue: Technology, Society, and History",學分數:"3",人限:"50",新生保留人數:"0",通識對象:"*7",通識類別:"人文學領域 Elective GE course: Humanities",授課語言:"中",備註:"跨領域對話群組課程，本課16週課程",停開註記:"",教室與上課時間:`HSS人社C404	R3R4Rn
`,授課教師:`王憲群	WANG, HSIEN-CHUN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"人類學(第一專長)	歷史(第一專長)	文學與創作(第一專長)	政治經濟(第一專長)	哲學(第一專長)	社會學(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"人社院學士班109BA 必修	人社院學士班109BB 必修	"},{科號:"11120HSS 301100",課程中文名稱:"田野實作：農業與農村",課程英文名稱:"Field Work on Agriculture and Rural",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"HSS人類學學程、HSS社會學學程、 HSS文學與創作學程",停開註記:"",教室與上課時間:`HSS人社C204	S2S3S4SnS5S6S7
`,授課教師:`李天健	LEE, TIEN-CHIEN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"人社院學士班108BA 選修	人社院學士班108BB 選修	人社院學士班109BA 選修	人社院學士班109BB 選修	人社院學士班110BA 選修	人社院學士班110BB 選修	人社院學士班111BA 選修	人社院學士班111BB 選修	"},{科號:"11120HSS 301200",課程中文名稱:"社會連結：NGO實習",課程英文名稱:"Non-government Organization Internships",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"社會連結群組課程",停開註記:"",教室與上課時間:`HSS人社C403	TaTbTc
`,授課教師:`李天健	LEE, TIEN-CHIEN
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>未修過NGO實習<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"人社院學士班108BA 選修	人社院學士班108BB 選修	人社院學士班109BA 選修	人社院學士班109BB 選修	人社院學士班110BA 選修	人社院學士班110BB 選修	人社院學士班111BA 選修	人社院學士班111BB 選修	"},{科號:"11120HSS 310200",課程中文名稱:"歷史理論與史學方法",課程英文名稱:"Reading,Thinking,Writing:Introduction to History and Historical Practice",學分數:"3",人限:"20",新生保留人數:"0",通識對象:"*7",通識類別:"人文學領域 Elective GE course: Humanities",授課語言:"中",備註:"HSS歷史學程必修、HSS文化研究學程。本課程為16 週課程。",停開註記:"",教室與上課時間:`HSS人社A316	T3T4Tn
`,授課教師:`廖咸惠	LIAO, HSIEN-HUEI
`,擋修說明:"",課程限制說明:"",第一二專長對應:"歷史(第二專長)	歷史(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"人社院學士班109BA 選修	人社院學士班109BB 選修	"},{科號:"11120HSS 310500",課程中文名稱:"藝術史",課程英文名稱:"Introduction to Art History",學分數:"3",人限:"20",新生保留人數:"0",通識對象:"*7",通識類別:"人文學領域 Elective GE course: Humanities",授課語言:"中",備註:"HSS歷史學程，本課16週課程，不接受加簽",停開註記:"",教室與上課時間:`HSS人社A302	R7R8R9
`,授課教師:`馬雅貞	MA, YA-CHEN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"歷史(第二專長)	歷史(第一專長)",學分學程對應:"(跨領域)藝術學分學程",不可加簽說明:"",必選修說明:"人社院學士班109BA 選修	人社院學士班109BB 選修	"},{科號:"11120HSS 314600",課程中文名稱:"東亞殖民地比較：香港與台灣",課程英文名稱:"Colonial comparison in East Asia: Hong Kong and Taiwan",學分數:"3",人限:"30",新生保留人數:"0",通識對象:"*7",通識類別:"人文學領域 Elective GE course: Humanities",授課語言:"中",備註:"HSS歷史學程，本課16週課程",停開註記:"",教室與上課時間:`HSS人Ｃ403A	F7F8F9
`,授課教師:`陳麗華	CHEN LI HUA
`,擋修說明:"",課程限制說明:"",第一二專長對應:"歷史(第二專長)	歷史(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"人社院學士班108BA 選修	人社院學士班108BB 選修	人社院學士班109BA 選修	人社院學士班109BB 選修	"},{科號:"11120HSS 315200",課程中文名稱:"東亞傳統科學知識與社會",課程英文名稱:"East-Asian Traditional Scientific Knowledge and Society",學分數:"2",人限:"50",新生保留人數:"0",通識對象:"*7",通識類別:"自然科學領域 Elective GE course: Natural Sciences",授課語言:"中",備註:"HSS歷史學程，本課16週課程，不接受加簽",停開註記:"",教室與上課時間:`HSS人Ｃ403A	R5R6
`,授課教師:`英家銘	YING, JIA-MING
`,擋修說明:"",課程限制說明:"",第一二專長對應:"歷史(第二專長)	歷史(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"人社院學士班109BA 選修	人社院學士班109BB 選修	"},{科號:"11120HSS 315500",課程中文名稱:"疾病、醫療與歷史",課程英文名稱:"Disease and Medicine in pre-modern times",學分數:"3",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"HSS歷史學程。本課程為16 週課程。",停開註記:"",教室與上課時間:`HSS人社C204	W6W7W8
`,授課教師:`張嘉鳳	CHANG, CHIA-FENG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"歷史(第二專長)	歷史(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"人社院學士班109BA 選修	人社院學士班109BB 選修	"},{科號:"11120HSS 316100",課程中文名稱:"近代中國的城市發展與社會變遷",課程英文名稱:"Urban history and social changes in modern China",學分數:"3",人限:"30",新生保留人數:"0",通識對象:"*7",通識類別:"人文學領域 Elective GE course: Humanities",授課語言:"中",備註:"HSS歷史學程，本課16週課程",停開註記:"",教室與上課時間:`HSS人社C205	W3W4Wn
`,授課教師:`江豐兆	JIANG, FENG-ZHAO
`,擋修說明:"",課程限制說明:"",第一二專長對應:"歷史(第二專長)	歷史(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"人社院學士班109BA 選修	人社院學士班109BB 選修	"},{科號:"11120HSS 321800",課程中文名稱:"初級古希臘文二",課程英文名稱:"Beginning Classical Greek II",學分數:"3",人限:"15",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"HSS哲學學程、HSS文化研究學程(專業選修)，本課為16週課程",停開註記:"",教室與上課時間:`HSS人社A306	F6F7F8
`,授課教師:`陳斐婷	CHEN, FEI-TING
`,擋修說明:"",課程限制說明:"人社院學士班大學部3年級4年級優先，第3次選課起開放全校修習",第一二專長對應:"哲學(第二專長)	哲學(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"人社院學士班109BA 選修	人社院學士班109BB 選修	"},{科號:"11120HSS 323400",課程中文名稱:"現象學實作",課程英文名稱:"Phenomenology in Practice",學分數:"3",人限:"25",新生保留人數:"0",通識對象:"*7",通識類別:"人文學領域 Elective GE course: Humanities",授課語言:"中",備註:"HSS哲學學程(專業選修)，本課為16週課程",停開註記:"",教室與上課時間:`HSS人社C204	R3R4Rn
`,授課教師:`鄭喜恒	CHENG, HSI-HENG
吳俊業	NG, CHON IP
`,擋修說明:"",課程限制說明:"",第一二專長對應:"哲學(第二專長)	哲學(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"人社院學士班109BA 選修	人社院學士班109BB 選修	"},{科號:"11120HSS 327200",課程中文名稱:"現象學專題：主觀的雙義性",課程英文名稱:"Topic in Phenomenology: Double Meaning of Subject",學分數:"3",人限:"25",新生保留人數:"0",通識對象:"*7",通識類別:"人文學領域 Elective GE course: Humanities",授課語言:"中",備註:"HSS哲學學程，本課16週課程",停開註記:"",教室與上課時間:`HSS人社C507	T6T7T8
`,授課教師:`黃文宏	HUANG, WEN-HONG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"哲學(第二專長)	哲學(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"人社院學士班109BA 選修	人社院學士班109BB 選修	"},{科號:"11120HSS 327300",課程中文名稱:"康德：《未來形上學導論》",課程英文名稱:"Kant: Prolegomena",學分數:"3",人限:"50",新生保留人數:"0",通識對象:"*7",通識類別:"人文學領域 Elective GE course: Humanities",授課語言:"中",備註:"HSS哲學學程、HSS文化研究學程(專業選修)，本課16週課程",停開註記:"",教室與上課時間:`HSS人Ｃ403A	R7R8R9
`,授課教師:`鄭志忠	JENG, JYH-JONG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"哲學(第二專長)	哲學(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"人社院學士班109BA 選修	人社院學士班109BB 選修	"},{科號:"11120HSS 330100",課程中文名稱:"世界語言通論",課程英文名稱:"Languages of the World",學分數:"3",人限:"30",新生保留人數:"0",通識對象:"*7",通識類別:"人文學領域 Elective GE course: Humanities",授課語言:"英",備註:"HSS語言學學程必修。本課程為16 週課程。",停開註記:"",教室與上課時間:`HSS人社C204	R7R8R9
`,授課教師:`廖秀娟	LIAO, HSIU-CHUAN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"語言學(第二專長)",學分學程對應:"(跨領域)世界南島暨原住民族學分學程",不可加簽說明:"",必選修說明:"人社院學士班109BA 選修	人社院學士班109BB 選修	"},{科號:"11120HSS 330200",課程中文名稱:"音韻學",課程英文名稱:"Phonology",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"HSS語言學學程，本課16週課程",停開註記:"",教室與上課時間:`HSS人社C507	R3R4Rn
`,授課教師:`許慧娟	HSU, HUI-CHUAN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"語言學(第二專長)",學分學程對應:"(跨領域)語言治療學分學程",不可加簽說明:"",必選修說明:"人社院學士班109BA 選修	人社院學士班109BB 選修	"},{科號:"11120HSS 330800",課程中文名稱:"語言與認知",課程英文名稱:"Language and Cognition",學分數:"3",人限:"30",新生保留人數:"0",通識對象:"*7",通識類別:"人文學領域 Elective GE course: Humanities",授課語言:"中",備註:"HSS語言學學程，本課16週課程",停開註記:"",教室與上課時間:`HSS人社C204	M7M8M9
`,授課教師:`蘇宜青	SU, YI-CHING
`,擋修說明:"",課程限制說明:"",第一二專長對應:"語言學(第二專長)",學分學程對應:"(跨領域)語言治療學分學程",不可加簽說明:"",必選修說明:"人社院學士班109BA 選修	人社院學士班109BB 選修	"},{科號:"11120HSS 331500",課程中文名稱:"語言、語意與邏輯",課程英文名稱:"Language, Meaning and Logic",學分數:"3",人限:"25",新生保留人數:"0",通識對象:"*7",通識類別:"人文學領域 Elective GE course: Humanities",授課語言:"英",備註:"HSS語言學學程。本課程為16 週課程。",停開註記:"",教室與上課時間:`HSS人社C521	T7T8T9
`,授課教師:`謝易達	HSIEH, I-TA
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"人社院學士班109BA 選修	人社院學士班109BB 選修	"},{科號:"11120HSS 331600",課程中文名稱:"語言的腦科學基礎",課程英文名稱:"The Neuroscience of Language",學分數:"3",人限:"30",新生保留人數:"0",通識對象:"*7",通識類別:"自然科學領域 Elective GE course: Natural Sciences",授課語言:"英",備註:"本課程為16 週課程，HSS語言學學程",停開註記:"",教室與上課時間:`HSS人社C402	W7W8W9
`,授課教師:`廖家萱	LIAO, CHIA-HSUAN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"人社院學士班109BA 選修	人社院學士班109BB 選修	"},{科號:"11120HSS 340200",課程中文名稱:"社會學研究方法二",課程英文名稱:"Social Research Methods (II)",學分數:"3",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"HSS社會學學程必修，支援文化研究學程",停開註記:"",教室與上課時間:`HSS人社C205	T3T4Tn
`,授課教師:`陶逸駿	TAO, YI-CHUN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"社會學(第二專長)	社會學(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"人社院學士班109BA 選修	人社院學士班109BB 選修	"},{科號:"11120HSS 340300",課程中文名稱:"當代社會學理論",課程英文名稱:"Contemporary Sociological Theory",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"HSS社會學學程必修、HSS文化研究學程",停開註記:"",教室與上課時間:`HSS人社C404	W7W8W9
`,授課教師:`姚人多	YAO, JEN-TO
`,擋修說明:"",課程限制說明:"",第一二專長對應:"社會學(第二專長)	社會學(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"人社院學士班109BA 選修	人社院學士班109BB 選修	"},{科號:"11120HSS 342400",課程中文名稱:"社會學想像力",課程英文名稱:"The&#160;Sociological&#160;Imagination",學分數:"3",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"HSS社會學學程，支援文化研究學程",停開註記:"",教室與上課時間:`HSS人社C203	R7R8R9
`,授課教師:`林文蘭	LIN, WEN-LAN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"社會學(第二專長)	社會學(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"人社院學士班109BA 選修	人社院學士班109BB 選修	"},{科號:"11120HSS 344000",課程中文名稱:"比較政府與政治",課程英文名稱:"Comparative Government and Politics",學分數:"3",人限:"30",新生保留人數:"0",通識對象:"*7",通識類別:"社會科學領域 Elective GE course: Social Sciences",授課語言:"中",備註:"支援社會及政治經濟學程",停開註記:"",教室與上課時間:`EDU教   307	TnT5T6
`,授課教師:`方天賜	FANG, TIEN-SZE
`,擋修說明:"",課程限制說明:"",第一二專長對應:"社會學(第二專長)	社會學(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"人社院學士班109BA 選修	人社院學士班109BB 選修	"},{科號:"11120HSS 347900",課程中文名稱:"不穩定社會學",課程英文名稱:"Sociology of Precarity",學分數:"3",人限:"25",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課16週課程，HSS支援社會及政治經濟學程",停開註記:"",教室與上課時間:`HSS人社C204	F3F4Fn
`,授課教師:`李韶芬	LEE, SHAO-FEN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"社會學(第二專長)	社會學(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"人社院學士班109BA 選修	人社院學士班109BB 選修	"},{科號:"11120HSS 348300",課程中文名稱:"舞蹈社會學：身體與空間經驗",課程英文名稱:"The Sociology of Dance: Physical and Spatial Experience",學分數:"3",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"支援社會及文化研究學程,地點人社A701",停開註記:"",教室與上課時間:"",授課教師:`洪意凌	HUNG, YI-LING
`,擋修說明:"",課程限制說明:"",第一二專長對應:"社會學(第二專長)	社會學(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"人社院學士班109BA 選修	人社院學士班109BB 選修	"},{科號:"11120HSS 348500",課程中文名稱:"科技、醫療與性別",課程英文名稱:"Technoscience, Medicine, and Gender",學分數:"3",人限:"25",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"HSS社會學學程，支援性別研究學程，新聘王安琪",停開註記:"",教室與上課時間:`HSS人社C204	T7T8T9
`,授課教師:`聘任中	
`,擋修說明:"",課程限制說明:"",第一二專長對應:"社會學(第二專長)	社會學(第一專長)",學分學程對應:"(跨領域)性別研究學分學程",不可加簽說明:"",必選修說明:"人社院學士班109BA 選修	人社院學士班109BB 選修	"},{科號:"11120HSS 348600",課程中文名稱:"全球化與社會",課程英文名稱:"Globalization and Society",學分數:"3",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"HSS社會學學程，新聘曾柏嘉",停開註記:"",教室與上課時間:`HSS人社C205	R3R4Rn
`,授課教師:`聘任中	
`,擋修說明:"",課程限制說明:"",第一二專長對應:"社會學(第二專長)	社會學(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"人社院學士班109BA 選修	人社院學士班109BB 選修	"},{科號:"11120HSS 350100",課程中文名稱:"人類學研究方法",課程英文名稱:"Research Methods in Anthropology",學分數:"3",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"HSS人類學學程必修，本課16週課程",停開註記:"",教室與上課時間:`HSS人社C205	R7R8R9
`,授課教師:`呂玫鍰	LU, MEI-HUAN
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>人類學導論-成績需C-以上<BR>文化人類學導論-成績需C-以上<BR><br>上述條件任選一科，則不擋修。</div>`,課程限制說明:"",第一二專長對應:"人類學(第二專長)	人類學(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"人社院學士班109BA 選修	人社院學士班109BB 選修	"},{科號:"11120HSS 350200",課程中文名稱:"人類學思潮",課程英文名稱:"Trends in anthropological thoughts",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"HSS人類學學程,人類學學程必修，開設年級：大三大四",停開註記:"",教室與上課時間:`HSS人社C519	M7M8M9
`,授課教師:`陳中民	CHEN, CHUNG-MIN
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>人類學導論-成績需C-以上<BR>文化人類學導論-成績需C-以上<BR><br>上述條件任選一科，則不擋修。</div>`,課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"人社院學士班108BA 選修	人社院學士班108BB 選修	人社院學士班109BA 選修	人社院學士班109BB 選修	"},{科號:"11120HSS 350400",課程中文名稱:"台灣南島社會與文化",課程英文名稱:"Societies and Cultures of Austronesian  Taiwan",學分數:"3",人限:"30",新生保留人數:"0",通識對象:"*7",通識類別:"社會科學領域 Elective GE course: Social Sciences",授課語言:"中",備註:"HSS人類學學程，世界南島與原住民跨領域學分學程，本課為16週課程",停開註記:"",教室與上課時間:`HSS人社C205	F3F4Fn
`,授課教師:`顧坤惠	KU, KUN-HUI
`,擋修說明:"",課程限制說明:"",第一二專長對應:"人類學(第二專長)	人類學(第一專長)",學分學程對應:"(跨領域)創新創業學分學程/(跨領域)世界南島暨原住民族學分學程",不可加簽說明:"",必選修說明:"人社院學士班109BA 選修	人社院學士班109BB 選修	"},{科號:"11120HSS 350500",課程中文名稱:"東南亞族群與文化",課程英文名稱:"Peoples and Cultures of Southeast Asia",學分數:"3",人限:"30",新生保留人數:"0",通識對象:"*7",通識類別:"社會科學領域 Elective GE course: Social Sciences",授課語言:"英",備註:"HSS人類學學程，本課為16週課程",停開註記:"",教室與上課時間:`HSS人Ｃ403A	R3R4Rn
`,授課教師:`高進榮	GALIPEAU, BRENDAN ARTHUR
`,擋修說明:"",課程限制說明:"",第一二專長對應:"人類學(第二專長)	人類學(第一專長)",學分學程對應:"(跨領域)世界南島暨原住民族學分學程",不可加簽說明:"",必選修說明:"人社院學士班109BA 選修	人社院學士班109BB 選修	"},{科號:"11120HSS 354300",課程中文名稱:"空間、社會與權力",課程英文名稱:"Space, Society, and Power",學分數:"3",人限:"25",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"HSS人類學學程，本課16週課程",停開註記:"",教室與上課時間:`HSS人Ｃ513A	W2W3W4
`,授課教師:`許&#28702;文	CHING-WEN HSU
`,擋修說明:"",課程限制說明:"",第一二專長對應:"人類學(第二專長)	人類學(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"人社院學士班109BA 選修	人社院學士班109BB 選修	"},{科號:"11120HSS 354400",課程中文名稱:"人類學與工業生活",課程英文名稱:"Anthropology and Industrial life",學分數:"3",人限:"30",新生保留人數:"0",通識對象:"*7",通識類別:"社會科學領域 Elective GE course: Social Sciences",授課語言:"中",備註:"HSS人類學學程，本課為16週課程",停開註記:"",教室與上課時間:`HSS人Ｃ403A	T3T4Tn
`,授課教師:`方怡潔	FANG, I-CHIEH
`,擋修說明:"",課程限制說明:"",第一二專長對應:"人類學(第二專長)	人類學(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"人社院學士班109BA 選修	人社院學士班109BB 選修	"},{科號:"11120HSS 356300",課程中文名稱:"港市考古",課程英文名稱:"Archaeology of Port Cities",學分數:"3",人限:"50",新生保留人數:"0",通識對象:"*7",通識類別:"人文學領域 Elective GE course: Humanities",授課語言:"中",備註:"HSS人類學學程，本課16週課程",停開註記:"",教室與上課時間:`HSS人社C204	T3T4Tn
`,授課教師:`謝艾倫	ELLEN HSIEH
`,擋修說明:"",課程限制說明:"",第一二專長對應:"人類學(第二專長)	人類學(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"人社院學士班109BA 選修	人社院學士班109BB 選修	"},{科號:"11120HSS 360100",課程中文名稱:"文化研究實作",課程英文名稱:"The Practice of Cultural Studies",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"HSS文化研究學程，新聘李哲宇",停開註記:"",教室與上課時間:`HSS人社A316	M7M8M9
`,授課教師:`聘任中	
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"人社院學士班109BA 選修	人社院學士班109BB 選修	"},{科號:"11120HSS 371400",課程中文名稱:"正義：探尋平權之可能",課程英文名稱:"Justice: Investigating the Possibility of Equal Rights",學分數:"3",人限:"30",新生保留人數:"0",通識對象:"*7",通識類別:"社會科學領域 Elective GE course: Social Sciences",授課語言:"中",備註:"HSS哲學學程、HSS性別研究學程(專業選修)，他系同學欲當通識選修前請詳閱課程大綱。本課程為16 週課程。",停開註記:"",教室與上課時間:`EDU教   307	W7W8W9
`,授課教師:`陸品妃	LU, PIN-FEI
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)性別研究學分學程",不可加簽說明:"",必選修說明:"人社院學士班109BA 選修	人社院學士班109BB 選修	"},{科號:"11120HSS 373300",課程中文名稱:"英雄再起：犯罪小說與性別",課程英文名稱:"Hero Resurrected: Crime Fictions and Gender",學分數:"3",人限:"50",新生保留人數:"0",通識對象:"*7",通識類別:"社會科學領域 Elective GE course: Social Sciences",授課語言:"中",備註:"HSS性別研究學程",停開註記:"",教室與上課時間:`HSS人社C404	M7M8M9
`,授課教師:`李信瑩	LI, HSIN-YIN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)性別研究學分學程",不可加簽說明:"",必選修說明:"人社院學士班109BA 選修	人社院學士班109BB 選修	"},{科號:"11120HSS 373900",課程中文名稱:"台灣當代女性小說與性別書寫",課程英文名稱:" ",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"HSS性別研究學程，新聘李時雍",停開註記:"",教室與上課時間:`EDU教   307	W3W4Wn
`,授課教師:`聘任中	
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)性別研究學分學程",不可加簽說明:"",必選修說明:"人社院學士班109BA 選修	人社院學士班109BB 選修	"},{科號:"11120HSS 380400",課程中文名稱:"國際政治理論",課程英文名稱:"Theory of International Politics",學分數:"3",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"HSS政治經濟學程",停開註記:"",教室與上課時間:`HSS人社C404	R5R6R7
`,授課教師:`鄭楷立	KAI-LI CHENG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"政治經濟(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"人社院學士班108BA 選修	人社院學士班108BB 選修	"},{科號:"11120HSS 382300",課程中文名稱:"羅爾斯的自由主義",課程英文名稱:"Rawls’s Liberalism",學分數:"3",人限:"30",新生保留人數:"0",通識對象:"*7",通識類別:"社會科學領域 Elective GE course: Social Sciences",授課語言:"中",備註:"HSS哲學學程，HSS政治經濟學程。16週課程",停開註記:"",教室與上課時間:`HSS人社C507	W3W4Wn
`,授課教師:`陸品妃	LU, PIN-FEI
`,擋修說明:"",課程限制說明:"",第一二專長對應:"哲學(第二專長)	哲學(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"人社院學士班109BA 選修	人社院學士班109BB 選修	"},{科號:"11120HSS 382600",課程中文名稱:"法治或法制？市埸經濟的法理基礎",課程英文名稱:"Rule of Law or Rule by Law ? – Jurisprudence of Market Economy",學分數:"3",人限:"25",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"HSS政治經濟學程",停開註記:"",教室與上課時間:`HSS人社C507	T2T3T4
`,授課教師:`陳禹成	CHEN, YU-CHEN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"政治經濟(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"人社院學士班109BA 選修	人社院學士班109BB 選修	"},{科號:"11120HSS 390000",課程中文名稱:"研究方法與論文寫作",課程英文名稱:"Research Methodology and Thesis Writing",學分數:"3",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"HSS文學與創作學程必修、HSS文化研究學程。本課程為16 週課程。",停開註記:"",教室與上課時間:`HSS人Ｃ403A	T7T8T9
`,授課教師:`陳芷凡	CHEN, CHIH-FAN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"文學與創作(第二專長)	文學與創作(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"人社院學士班109BA 選修	人社院學士班109BB 選修	"},{科號:"11120HSS 390300",課程中文名稱:"電影與視覺文化",課程英文名稱:"Film and Visual Culture",學分數:"3",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"HSS文學與創作學程，本課16週課程，遠距課程",停開註記:"",教室與上課時間:`HSS人Ｃ403A	W3W4Wn
`,授課教師:`謝世宗	SHIE, SHR-TZUNG
`,擋修說明:"",課程限制說明:"限人社院學士班大學部3年級4年級",第一二專長對應:"文學與創作(第二專長)	文學與創作(第一專長)",學分學程對應:"(跨領域)藝術學分學程",不可加簽說明:"",必選修說明:"人社院學士班109BA 選修	人社院學士班109BB 選修	"},{科號:"11120HSS 390500",課程中文名稱:"現代戲劇選讀",課程英文名稱:"Introductory Reading in Modern Drama",學分數:"3",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"HSS文學與創作學程，本課16週課程",停開註記:"",教室與上課時間:`HSS人社C402	W6W7W8
`,授課教師:`石婉舜	SHIH, WAN-SHUN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"文學與創作(第二專長)	文學與創作(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"人社院學士班109BA 選修	人社院學士班109BB 選修	"},{科號:"11120HSS 400100",課程中文名稱:"學士論文二",課程英文名稱:"Bachelor Thesis Ⅱ",學分數:"2",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"須於加退選前至系網頁下載申請表; 經指導教授簽名後送至系辦.",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"限人社院學士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120HSS 440600",課程中文名稱:"當代中國社會與電影",課程英文名稱:"Contemporary China: Society and Films",學分數:"3",人限:"70",新生保留人數:"0",通識對象:"*7",通識類別:"社會科學領域 Elective GE course: Social Sciences",授課語言:"中",備註:"HSS社會學學程,HSS政治經濟學程",停開註記:"",教室與上課時間:`HSS人社C404	F6F7F8
`,授課教師:`陳明祺	CHEN, MING-CHI
`,擋修說明:"",課程限制說明:"",第一二專長對應:"社會學(第二專長)	社會學(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"人社院學士班108BA 選修	人社院學士班108BB 選修	人社院學士班109BA 選修	人社院學士班109BB 選修	"},{科號:"11120IACS500000",課程中文名稱:"論文研究",課程英文名稱:"Thesis",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限亞際文化碩二以上修習",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"排除亞際文化碩士學程碩士班1年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"亞際文化碩士學程111M  必修	"},{科號:"11120IBP 100900",課程中文名稱:"生活成語",課程英文名稱:"Chinese Idioms",學分數:"2",人限:"35",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`EDU教  101	F3F4
`,授課教師:`陳慶華	CHEN, CHING-HUA
`,擋修說明:"",課程限制說明:"限國際學士班",第一二專長對應:"華語與文化(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"國際學士班110BA 選修	國際學士班111BA 選修	"},{科號:"11120IBP 101001",課程中文名稱:"閱讀與寫作一",課程英文名稱:"Reading and Writing (I)",學分數:"2",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"按照email通知選擇班別",停開註記:"",教室與上課時間:`EDU教  102	F5F6
`,授課教師:`陳玉明	CHEN, YU-MING
`,擋修說明:"",課程限制說明:"限國際學士班",第一二專長對應:"華語與文化(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"國際學士班111BA 必修	"},{科號:"11120IBP 101002",課程中文名稱:"閱讀與寫作一",課程英文名稱:"Reading and Writing (I)",學分數:"2",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"按照email通知選擇班別",停開註記:"",教室與上課時間:`EDU教  102	F1F2
`,授課教師:`陳玉明	CHEN, YU-MING
`,擋修說明:"",課程限制說明:"限國際學士班",第一二專長對應:"華語與文化(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"國際學士班111BA 必修	"},{科號:"11120IBP 101100",課程中文名稱:"華語語音訓練",課程英文名稱:"Chinese Pronunciation Training",學分數:"2",人限:"35",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`EDU教  103	M7M8
`,授課教師:`陳翊綺	CHEN, I-CHI
`,擋修說明:"",課程限制說明:"限國際學士班",第一二專長對應:"華語與文化(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"國際學士班110BA 選修	國際學士班111BA 選修	"},{科號:"11120IBP 101200",課程中文名稱:"親密關係–在親情、愛情和友情所發生的事情",課程英文名稱:"Intimate Relationships-What Happens in the Relationship with Our Families, Lovers and Friends",學分數:"2",人限:"35",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`EDU教  101	M3M4
`,授課教師:`林佩錡	LIN, PEI-CHIH
`,擋修說明:"",課程限制說明:"國際學士班優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"國際學士班110BB 選修	國際學士班111BB 選修	"},{科號:"11120IBP 101600",課程中文名稱:"攝影鑑賞與應用",課程英文名稱:"Appreciation and Application of Photography",學分數:"2",人限:"35",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`EDU教  102	M8M9
`,授課教師:`葉忠達	YEH, CHUNG-TA
`,擋修說明:"",課程限制說明:"限國際學士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"國際學士班110BB 選修	國際學士班111BB 選修	"},{科號:"11120IBP 102500",課程中文名稱:"華語流行歌詞",課程英文名稱:"Chinese Popular Lyrics",學分數:"2",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`EDU教  109	W5W6
`,授課教師:`丁威仁	TING, WEI-JEN
`,擋修說明:"",課程限制說明:"限國際學士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"國際學士班108BA 選修	國際學士班109BA 選修	國際學士班110BA 選修	國際學士班111BA 選修	"},{科號:"11120IBP 102801",課程中文名稱:"大學生活規劃與設計",課程英文名稱:"College Life Planning and Design",學分數:"3",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`EDU教  101	TnT5T6
`,授課教師:`林佩錡	LIN, PEI-CHIH
`,擋修說明:"",課程限制說明:"限國際學士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"國際學士班110BA 選修	國際學士班111BA 選修	"},{科號:"11120IBP 102802",課程中文名稱:"大學生活規劃與設計",課程英文名稱:"College Life Planning and Design",學分數:"3",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`EDU教  101	M7M8M9
`,授課教師:`林佩錡	LIN, PEI-CHIH
`,擋修說明:"",課程限制說明:"限國際學士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"國際學士班110BB 選修	國際學士班111BB 選修	"},{科號:"11120IBP 201001",課程中文名稱:"閱讀與寫作二",課程英文名稱:"Reading and Writing (II)",學分數:"2",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"程度：修畢中高級華語一以上",停開註記:"",教室與上課時間:`EDU教  101	F5F6
`,授課教師:`陳慶華	CHEN, CHING-HUA
`,擋修說明:"",課程限制說明:"限國際學士班",第一二專長對應:"華語與文化(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"國際學士班110BA 必修	"},{科號:"11120IBP 201002",課程中文名稱:"閱讀與寫作二",課程英文名稱:"Reading and Writing (II)",學分數:"2",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"程度：修畢初級華語一至中級華語三",停開註記:"",教室與上課時間:`EDU教  101	F1F2
`,授課教師:`陳慶華	CHEN, CHING-HUA
`,擋修說明:"",課程限制說明:"限國際學士班",第一二專長對應:"華語與文化(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"國際學士班110BA 必修	"},{科號:"11120IBP 201200",課程中文名稱:"文言文一",課程英文名稱:"Classical Chinese (I)",學分數:"2",人限:"35",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`EDU教  103	R5R6
`,授課教師:`陳翊綺	CHEN, I-CHI
`,擋修說明:"",課程限制說明:"限國際學士班",第一二專長對應:"華語與文化(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"國際學士班110BA 必修	"},{科號:"11120IBP 201600",課程中文名稱:"中國文化經典選讀",課程英文名稱:"Selected Readings of Chinese Cultural Classics",學分數:"3",人限:"35",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"此為16週課程。",停開註記:"",教室與上課時間:`EDU教  103	T2T3T4
`,授課教師:`游騰達	YU, TENG-TA
洪巳軒	HUNG, SZU-HSUAN
`,擋修說明:"",課程限制說明:"限國際學士班",第一二專長對應:"華語與文化(第二專長)	華語與文化(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"國際學士班109BA 選修	國際學士班110BA 選修	"},{科號:"11120IBP 202100",課程中文名稱:"資料分析與機器學習概論",課程英文名稱:"Introduction to Data Analytics and Machine Learning",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"此為同步遠距課程。",停開註記:"",教室與上課時間:`EDU教  102	F9FaFb
`,授課教師:`勞夫·納吉布	GORGUI-NAGUIB RAOUF NAGUIB
`,擋修說明:"",課程限制說明:"限國際學士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"國際學士班110BB 選修	國際學士班111BB 選修	"},{科號:"11120IBP 202200",課程中文名稱:"進階書法知識與習作",課程英文名稱:"Advanced Chinese Calligraphy and Practice",學分數:"2",人限:"25",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"先修科目:IBP2015書法知識與習作",停開註記:"",教室與上課時間:`EDU教  103	W5W6
`,授課教師:`張斯翔	TEO SHI SIANG
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>書法知識與習作-成績需C-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"限國際學士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"國際學士班108BA 選修	國際學士班109BA 選修	國際學士班110BA 選修	"},{科號:"11120IBP 304000",課程中文名稱:"觀光導遊華語",課程英文名稱:"Mandarin in Tourism",學分數:"3",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`EDU教  109	T7T8T9
`,授課教師:`倪進誠	NI, CHIN-CHENG
`,擋修說明:"",課程限制說明:"限國際學士班",第一二專長對應:"華語與文化(第二專長)	華語與文化(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"國際學士班108BA 選修	國際學士班109BA 選修	"},{科號:"11120IBP 405000",課程中文名稱:"漢字教學",課程英文名稱:"Chinese Characters Instruction",學分數:"3",人限:"25",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"先修科目：IBP 1001 漢字學習",停開註記:"",教室與上課時間:`EDU教  102	M5M6M7
`,授課教師:`陳玉明	CHEN, YU-MING
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>漢字學習-成績需C-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"國際學士班優先，第3次選課起開放全校修習",第一二專長對應:"華語與文化(第二專長)	華語與文化(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"國際學士班108BA 選修	國際學士班109BA 選修	"},{科號:"11120ICMS500100",課程中文名稱:"專題演講",課程英文名稱:"Colloquium",學分數:"1",人限:"25",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`GEN II綜二A813	T5T6
`,授課教師:`李俊璋	LEE, CHIUN-CHANG
`,擋修說明:"",課程限制說明:"計科所優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"計科所111M  必修	"},{科號:"11120ICMS500200",課程中文名稱:"論文研究",課程英文名稱:"Thesis",學分數:"0",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限計科所碩士班二年級以上同學修習",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"排除計科所碩士班1年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"計科所111M  必修	"},{科號:"11120ICMS510000",課程中文名稱:"數值方法與應用",課程英文名稱:"Numerical Methods and Applications",學分數:"3",人限:"17",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`GEN II綜二430	T2T3T4
`,授課教師:`陳人豪	CHEN, JEN-HAO
`,擋修說明:"",課程限制說明:"計科所優先，第3次選課起開放全校修習",第一二專長對應:"數據科學(第二專長)",學分學程對應:"(跨領域)神經科學學分學程",不可加簽說明:"",必選修說明:"計科所111M  選修	"},{科號:"11120ICMS510900",課程中文名稱:"數值微分方程專題",課程英文名稱:"Topic in Numerical Differential Equations",學分數:"3",人限:"17",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`GEN II綜二430	R2R3R4
`,授課教師:`陳人豪	CHEN, JEN-HAO
`,擋修說明:"",課程限制說明:"計科所優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"計科所111M  選修	"},{科號:"11120ICMS530600",課程中文名稱:"常微分方程與應用",課程英文名稱:"Ordinary Differential Equations and Applications",學分數:"3",人限:"17",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`GEN II綜二430	W2W3W4
`,授課教師:`葉麗琴	YEH, LI-CHIN
`,擋修說明:"",課程限制說明:"計科所優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"計科所111M  選修	"},{科號:"11120ICMS540500",課程中文名稱:"橢圓微分方程二",課程英文名稱:"Elliptic Differential Equations (II)",學分數:"3",人限:"17",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`GEN II綜二430	M5M6M7
`,授課教師:`李俊璋	LEE, CHIUN-CHANG
`,擋修說明:"",課程限制說明:"計科所優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"計科所111M  選修	"},{科號:"11120ICMS550600",課程中文名稱:"數學建模專題",課程英文名稱:"Topics in mathematical modeling",學分數:"3",人限:"17",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`GEN II綜二430	W5W6W7
`,授課教師:`李金龍	LI, CHIN-LUNG
`,擋修說明:"",課程限制說明:"計科所優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"計科所111M  選修	"},{科號:"11120ICMS551300",課程中文名稱:"軟集理論專題",課程英文名稱:"Topics on soft set Theory",學分數:"3",人限:"27",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`GEN II綜二A813	M5M6M7
`,授課教師:`陳啟銘	CHEN, CHI-MING
`,擋修說明:"",課程限制說明:"計科所優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"計科所111M  選修	"},{科號:"11120IEEM201000",課程中文名稱:"線性代數",課程英文名稱:"Linear Algebra",學分數:"3",人限:"80",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`ENG I工一104	T3T4R4
`,授課教師:`李雨青	LEE, YU-CHING
`,擋修說明:"",課程限制說明:"工工系大學部2年級優先，第3次選課起開放全校修習",第一二專長對應:"工業工程與工程管理(第二專長)	工業工程與工程管理(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"工工系110B  必修	"},{科號:"11120IEEM204000",課程中文名稱:"工程統計",課程英文名稱:"Engineering Statistics",學分數:"3",人限:"80",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`ENG I工一 103	T1T2F2
`,授課教師:`吳建瑋	WU, CHIEN-WEI
`,擋修說明:`<div>
  擋修對象 : 大學部 <br>
  先修科目 : <BR><BR>機率論-成績需D以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"工工系大學部2年級優先，第3次選課起開放全校修習",第一二專長對應:"工業工程與工程管理(第二專長)	工業工程與工程管理(第一專長)",學分學程對應:"(跨領域)數據科學學分學程",不可加簽說明:"",必選修說明:"工工系110B  必修	"},{科號:"11120IEEM205000",課程中文名稱:"心理學",課程英文名稱:"General Psychology",學分數:"3",人限:"80",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"加退選期間,線上只能退選,不能加選",停開註記:"",教室與上課時間:`ENG I工一 102	M3M4W2
`,授課教師:`盧俊銘	LU, JUN-MING
`,擋修說明:"",課程限制說明:"工工系大學部1年級4年級優先，第3次選課起開放全校修習",第一二專長對應:"工業工程與工程管理(第二專長)	工業工程與工程管理(第一專長)",學分學程對應:"(跨領域)創新設計學分學程",不可加簽說明:"",必選修說明:"工工系111B  必修	"},{科號:"11120IEEM211000",課程中文名稱:"工作研究",課程英文名稱:"Work Study",學分數:"3",人限:"80",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`ENG I工一 102	W3W4F3
`,授課教師:`李昀儒	LEE, YUN-JU
`,擋修說明:"",課程限制說明:"工工系大學部1年級優先，第3次選課起開放全校修習",第一二專長對應:"工業工程與工程管理(第二專長)	工業工程與工程管理(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"工工系111B  必修	"},{科號:"11120IEEM214000",課程中文名稱:"程式設計與應用",課程英文名稱:"Programming Design and Applications",學分數:"3",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`ENG I工一827	W7W8W9
`,授課教師:`林東盈	DUNG-YING LIN
`,擋修說明:"",課程限制說明:"工工系大學部優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"工工系109B  選修	工工系110B  選修	工工系111B  選修	"},{科號:"11120IEEM302000",課程中文名稱:"作業研究二",課程英文名稱:"Operations Research (II)",學分數:"3",人限:"80",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`ENG I工一 103	W3W4F3
`,授課教師:`張國浩	CHANG, KUO-HAO
`,擋修說明:`<div>
  擋修對象 : 大學部 <br>
  先修科目 : <BR><BR>機率論-成績需D以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"工工系大學部優先，第3次選課起開放全校修習",第一二專長對應:"工業工程與工程管理(第二專長)	工業工程與工程管理(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"工工系109B  必修	"},{科號:"11120IEEM304000",課程中文名稱:"生產計劃與管制",課程英文名稱:"Production Planning and Control",學分數:"3",人限:"90",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`ENG I工一 106	M3M4W2
`,授課教師:`陳建良	CHEN, CHIEN LIANG
`,擋修說明:"",課程限制說明:"限工工系大學部",第一二專長對應:"工業工程與工程管理(第二專長)	工業工程與工程管理(第一專長)",學分學程對應:"(跨領域)奈米與光電半導體產業學分學程",不可加簽說明:"",必選修說明:"工工系110B  必修	"},{科號:"11120IEEM306000",課程中文名稱:"人因工程二",課程英文名稱:"Human Factors(II)",學分數:"3",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`ENG I工一104	MaMbMc
`,授課教師:`趙偉成	CHAO, WEI-CHENG
`,擋修說明:"",課程限制說明:"工工系大學部優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"工工系109B  選修	工工系110B  選修	"},{科號:"11120IEEM307100",課程中文名稱:"會計學",課程英文名稱:"Accounting",學分數:"3",人限:"70",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`ENG I工一 103	F7F8F9
`,授課教師:`李欣怡	LEE, HSIN-I
`,擋修說明:"",課程限制說明:"工工系大學部優先，第3次選課起開放全校修習",第一二專長對應:"工業工程與工程管理(第二專長)	工業工程與工程管理(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"工工系110B  必修	"},{科號:"11120IEEM309000",課程中文名稱:"製造工程",課程英文名稱:"Manufacturing Engineering",學分數:"3",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`ENG I工一 202	T5T6T7
`,授課教師:`瞿志行	CHU, CHIH-HSING
`,擋修說明:"",課程限制說明:"工工系大學部優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"工工系109B  選修	工工系110B  選修	"},{科號:"11120IEEM310000",課程中文名稱:"設施規劃",課程英文名稱:"Facilities Planning",學分數:"3",人限:"80",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程為16週課程。109學(含)之後入學之大學部學生為選修",停開註記:"",教室與上課時間:`ENG I工一 102	R7R8R9
`,授課教師:`吳士榤	WU, SHIH-CHIEH
`,擋修說明:"",課程限制說明:"工工系大學部優先，第3次選課起開放全校修習",第一二專長對應:"工業工程與工程管理(第二專長)	工業工程與工程管理(第一專長)",學分學程對應:"(跨領域)奈米與光電半導體產業學分學程/(跨領域)奈米科技學分學程",不可加簽說明:"",必選修說明:"工工系109B  選修	"},{科號:"11120IEEM314000",課程中文名稱:"資料結構",課程英文名稱:"Data Structures",學分數:"3",人限:"0",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"16週課程,需上機,通過評估測驗才能加簽.平均上課時間150分鐘,其餘時間將視情況進行演習或其他運用",停開註記:"",教室與上課時間:`ENG I工一 102	M5M6R5R6
`,授課教師:`廖崇碩	LIAO, CHUNG-SHOU
`,擋修說明:"",課程限制說明:"工工系大學部優先，第3次選課起開放全校修習",第一二專長對應:"數據科學(第二專長)",學分學程對應:"(跨領域)積體電路設計學分學程/(跨領域)數據科學學分學程/(跨領域)人工智慧與應用基礎學分學程/(跨領域)音樂科技與健康學分學程",不可加簽說明:"",必選修說明:"工工系108B  選修	工工系109B  選修	工工系110B  選修	"},{科號:"11120IEEM316000",課程中文名稱:"資料庫管理系統",課程英文名稱:"Data Base Management System",學分數:"3",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`ENG I工一827	T6T7T8
`,授課教師:`林裕訓	LIN, YU-HSUN
`,擋修說明:"",課程限制說明:"工工系大學部優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"工工系108B  選修	工工系109B  選修	工工系110B  選修	"},{科號:"11120IEEM320000",課程中文名稱:"產品設計與開發",課程英文名稱:"Product Design and Development",學分數:"3",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`ENG I工一 901	R6R7R8
`,授課教師:`瞿志行	CHU, CHIH-HSING
`,擋修說明:"",課程限制說明:"工工系大學部優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"(跨領域)創新創業學分學程/(跨領域)創新設計學分學程",不可加簽說明:"",必選修說明:"工工系108B  選修	工工系109B  選修	"},{科號:"11120IEEM412100",課程中文名稱:"人因工程設計與實務",課程英文名稱:"Human Factors and Ergonomics Design and Practice",學分數:"3",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"加退選期間,線上只能退選,不能加選",停開註記:"",教室與上課時間:`ENG I工一701	T7T8T9
`,授課教師:`盧俊銘	LU, JUN-MING
`,擋修說明:"",課程限制說明:"工工系大學部優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"工工系108B  選修	工工系109B  選修	"},{科號:"11120IEEM436000",課程中文名稱:"電子商務",課程英文名稱:"Electronic Commerce",學分數:"3",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`ENG I工一203	W6W7W8
`,授課教師:`張瑞芬	TRAPPEY, AMY JUI-FEN CHANG
`,擋修說明:"",課程限制說明:"限工工系大學部3年級4年級",第一二專長對應:"",學分學程對應:"(跨領域)資訊傳媒學分學程",不可加簽說明:"",必選修說明:"工工系108B  選修	工工系109B  選修	"},{科號:"11120IEEM439100",課程中文名稱:"智慧製造專題",課程英文名稱:"Special Topic for Smart Manufacturing",學分數:"3",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`ENG I工一 102	F6F7F8
`,授課教師:`簡禎富	CHIEN, CHEN-FU
`,擋修說明:"",課程限制說明:"工工系大學部優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"工工系108B  選修	工工系109B  選修	"},{科號:"11120IEEM492100",課程中文名稱:"品質管理",課程英文名稱:"Quality Management",學分數:"3",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`ENG I工一 202	T2T3T4
`,授課教師:`蘇朝墩	SU, CHAO-TON
`,擋修說明:"",課程限制說明:"工工系大學部優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"工工系108B  選修	工工系109B  選修	"},{科號:"11120IEEM500000",課程中文名稱:"書報討論",課程英文名稱:"Seminar",學分數:"1",人限:"99",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`ENG I工一 107	W6W7
`,授課教師:`吳建瑋	WU, CHIEN-WEI
`,擋修說明:"",課程限制說明:"限工工系碩士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"工工系111MA 必修	工工系111MB 必修	"},{科號:"11120IEEM510500",課程中文名稱:"統計方法",課程英文名稱:"Statistical Methods",學分數:"3",人限:"0",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"本課程為16週課程.需先修過機率或統計,加簽選課,欲選課者請email工工系辦",停開註記:"",教室與上課時間:`ENG I工一 102	T2T3T4
`,授課教師:`葉維彰	YEH, WEI-CHANG
`,擋修說明:"",課程限制說明:"限工工系碩士班",第一二專長對應:"",學分學程對應:"(跨領域)先進能源研究生學分學程",不可加簽說明:"",必選修說明:"工工系111D  必修	工工系111MA 必修	工工系111MB 選修	"},{科號:"11120IEEM511000",課程中文名稱:"演算法特論",課程英文名稱:"Special Topics on Algorithms",學分數:"3",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`ENG I工一701	T2T3T4
`,授課教師:`岩間一雄	IWAMA KAZUO
`,擋修說明:"",課程限制說明:"工工系碩士班博士班專班,工工在職班碩士班博士班專班優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"工工系111D  選修	工工系111MA 選修	工工系111MB 選修	"},{科號:"11120IEEM513200",課程中文名稱:"整數規劃與網路分析",課程英文名稱:"Integer Programming and Network Analysis",學分數:"3",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"本課程為16週課程,大四生需老師同意後方可加簽 Senior students must ask teacher's approval to register",停開註記:"",教室與上課時間:`ENG I工一 102	R2R3R4
`,授課教師:`林東盈	DUNG-YING LIN
`,擋修說明:"",課程限制說明:"限工工系碩士班博士班專班,工工在職班碩士班博士班專班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"工工系111D  選修	工工系111MA 必修	工工系111MB 選修	"},{科號:"11120IEEM513400",課程中文名稱:"物聯網技術與應用",課程英文名稱:"Internet of Things: Technologies and Applications",學分數:"3",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`ENG I工一827	F6F7F8
`,授課教師:`許倍源	HSU, BAY-YUAN
`,擋修說明:"",課程限制說明:"工工系碩士班博士班專班,工工在職班碩士班博士班專班優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"工工系111D  選修	工工系111MA 選修	工工系111MB 選修	"},{科號:"11120IEEM514200",課程中文名稱:"柔性演算",課程英文名稱:"Soft Computing",學分數:"3",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"本課程為16週課程,建議先修過資料結構或程式語言設計",停開註記:"",教室與上課時間:`ENG I工一827	MaMbMc
`,授課教師:`葉維彰	YEH, WEI-CHANG
`,擋修說明:"",課程限制說明:"工工系碩士班博士班專班,工工在職班碩士班博士班專班優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"(跨領域)人工智慧與應用進階學分學程/(跨領域)人工智慧與應用基礎學分學程",不可加簽說明:"",必選修說明:"工工系111D  選修	工工系111MA 選修	工工系111MB 選修	"},{科號:"11120IEEM517000",課程中文名稱:"作業研究應用",課程英文名稱:"Operations Research Applications",學分數:"3",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"專班學生不可修習",停開註記:"",教室與上課時間:`ENG I工一701	F6F7F8
`,授課教師:`張國浩	CHANG, KUO-HAO
`,擋修說明:"",課程限制說明:"工工系碩士班博士班優先，第3次選課起開放全校修習",第一二專長對應:"數據科學(第二專長)",學分學程對應:"(跨領域)先進能源研究生學分學程",不可加簽說明:"",必選修說明:"工工系111D  選修	工工系111MA 選修	工工系111MB 選修	"},{科號:"11120IEEM519100",課程中文名稱:"非線性規劃",課程英文名稱:"Nonlinear Programming",學分數:"3",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`ENG I工一203	M5M6M7
`,授課教師:`李雨青	LEE, YU-CHING
`,擋修說明:"",課程限制說明:"工工系碩士班博士班專班,工工在職班碩士班博士班專班優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"工工系111D  選修	工工系111MA 選修	工工系111MB 選修	"},{科號:"11120IEEM535300",課程中文名稱:"智慧化企業整合",課程英文名稱:"Intelligent Integration of Enterprise",學分數:"3",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"大四生需老師同意後方可加簽 Senior students must ask teacher's approval to register",停開註記:"",教室與上課時間:`ENG I工一827	F2F3F4
`,授課教師:`邱銘傳	CHIU, MING-CHUAN
`,擋修說明:"",課程限制說明:"限工工系碩士班博士班專班,工工在職班碩士班博士班專班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"工工系111D  選修	工工系111MA 必修	工工系111MB 選修	"},{科號:"11120IEEM536000",課程中文名稱:"半導體智慧製造",課程英文名稱:"Semiconductor Intelligent Manufacturing",學分數:"3",人限:"100",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`ENG I工一 107	TaTbTc
`,授課教師:`林建憲	LIN, JIAN-SHIAN
`,擋修說明:"",課程限制說明:"限工工系碩士班博士班專班,工工在職班碩士班博士班專班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"工工系111D  選修	工工系111MA 選修	工工系111MB 選修	"},{科號:"11120IEEM536300",課程中文名稱:"供應鏈管理",課程英文名稱:"Supply Chain Management",學分數:"3",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程為16週課程,專班學生不可修習,大四生需授課老師同意後方可加簽",停開註記:"",教室與上課時間:`ENG I工一 904	R7R8R9
`,授課教師:`洪一&#23791;	HUNG, YI-FENG
`,擋修說明:"",課程限制說明:"限工工系碩士班博士班",第一二專長對應:"",學分學程對應:"(跨領域)創新創業學分學程",不可加簽說明:"",必選修說明:"工工系111D  選修	工工系111MA 選修	工工系111MB 必修	"},{科號:"11120IEEM536700",課程中文名稱:"智慧製造與自動化",課程英文名稱:"Intelligent Manufacturing and Automation",學分數:"3",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"本課程為16週課程,大四生需老師同意後方可加簽 Senior students must ask teacher's approval to register",停開註記:"",教室與上課時間:`ENG I工一 103	M2M3M4
`,授課教師:`侯建良	HOU, JIANG-LIANG
`,擋修說明:"",課程限制說明:"限工工系碩士班博士班專班,工工在職班碩士班博士班專班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"工工系111D  必修	工工系111MA 必修	工工系111MB 選修	"},{科號:"11120IEEM540100",課程中文名稱:"創新研發管理",課程英文名稱:"Innovation and R&D Management",學分數:"3",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"專班同學不可修習,大四生需老師同意後方可加簽 Senior students must ask teacher's approval to register",停開註記:"",教室與上課時間:`ENG I工一 901	T6T7T8
`,授課教師:`邱銘傳	CHIU, MING-CHUAN
`,擋修說明:"",課程限制說明:"限工工系碩士班博士班",第一二專長對應:"",學分學程對應:"(跨領域)創新設計學分學程",不可加簽說明:"",必選修說明:"工工系111D  選修	工工系111MA 選修	工工系111MB 必修	"},{科號:"11120IEEM554500",課程中文名稱:"資料科學與知識庫技術應用",課程英文名稱:"Data Science and Knowledge Base Techniques",學分數:"3",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`ENG I工一827	R7R8R9
`,授課教師:`許倍源	HSU, BAY-YUAN
`,擋修說明:"",課程限制說明:"工工系碩士班博士班專班,工工在職班碩士班博士班專班優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"工工系111D  選修	工工系111MA 選修	工工系111MB 選修	"},{科號:"11120IEEM600000",課程中文名稱:"論文研究",課程英文名稱:"Thesis",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限工工所碩二以上修習",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"排除工工系碩士班1年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"工工系111MA 必修	工工系111MB 必修	"},{科號:"11120IEEM630800",課程中文名稱:"服務創新設計",課程英文名稱:"Innovation & Design of Service",學分數:"3",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"歡迎在職專班學生選課",停開註記:"",教室與上課時間:`ENG I工一701	WaWbWc
`,授課教師:`林則孟	LIN, TSE-MENG
`,擋修說明:"",課程限制說明:"工工系碩士班博士班專班,工工在職班碩士班博士班專班優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"(跨領域)創新創業學分學程",不可加簽說明:"",必選修說明:"工工系111D  選修	工工系111MA 選修	工工系111MB 選修	"},{科號:"11120IEEM700000",課程中文名稱:"論文研究",課程英文名稱:"Thesis",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限工工所博二以上修習",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"排除工工系博士班1年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"工工系111D  必修	"},{科號:"11120IEM 500000",課程中文名稱:"論文",課程英文名稱:"Thesis",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限工工在職專班二年級以上修習",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"排除工工在職班專班1年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"工工在職班111P  必修	工工在職班111PA 必修	"},{科號:"11120IEM 560700",課程中文名稱:"安全衛生管理",課程英文名稱:"Safety and Health Management",學分數:"3",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程不同意一般研究生(含博士生)修課及認定畢業學分，若有特殊情況另案討論。",停開註記:"",教室與上課時間:`ENG I工一 904	S5S6S7
`,授課教師:`趙金榮	CHAO, CHIN-JUNG
李昀儒	LEE, YUN-JU
盧俊銘	LU, JUN-MING
`,擋修說明:"",課程限制說明:"限工工在職班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"工工在職班111P  必修	"},{科號:"11120IEM 560900",課程中文名稱:"全面品質管理",課程英文名稱:"Total Quality Management",學分數:"3",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程不同意一般研究生(含博士生)修課及認定畢業學分，若有特殊情況另案討論。",停開註記:"",教室與上課時間:`ENG I工一 901	S2S3S4
`,授課教師:`蘇朝墩	SU, CHAO-TON
`,擋修說明:"",課程限制說明:"限工工在職班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"工工在職班111P  必修	工工在職班111PA 必修	"},{科號:"11120IEM 561100",課程中文名稱:"創新研發管理",課程英文名稱:"Innovation and R&D Management",學分數:"3",人限:"45",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程不同意一般研究生(含博士生)修課及認定畢業學分，若有特殊情況另案討論。",停開註記:"",教室與上課時間:`ENG I工一 904	FaFbFc
`,授課教師:`朱詣尹	CHU, YEE-YEEN
邱銘傳	CHIU, MING-CHUAN
`,擋修說明:"",課程限制說明:"限工工在職班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"工工在職班111P  必修	"},{科號:"11120IEM 561200",課程中文名稱:"生產與營運管理",課程英文名稱:"Production and Operations Management",學分數:"3",人限:"45",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程不同意一般研究生(含博士生)修課及認定畢業學分，若有特殊情況另案討論。",停開註記:"",教室與上課時間:`ENG I工一 904	MaMbMc
`,授課教師:`陳建良	CHEN, CHIEN LIANG
`,擋修說明:"",課程限制說明:"限工工在職班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"工工在職班111P  必修	工工在職班111PA 必修	"},{科號:"11120IIS 500300",課程中文名稱:"資訊安全實作二",課程英文名稱:"Information Security Implementation (II)",學分數:"2",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限資安所碩士班，需有指導教授才可選修。Requiring application in order to enroll in the course.",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"限資安所碩士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"資安所111M  選修	"},{科號:"11120IIS 500400",課程中文名稱:"應用密碼學",課程英文名稱:"Applied Cryptography",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"本課程採用同步遠距教學",停開註記:"",教室與上課時間:`VC虛擬教室	WaWbWc
`,授課教師:`艾米爾	AMIR REZAPOUR ZIBA
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"資工系111D  選修	資工系111M  選修	資安所111M  選修	"},{科號:"11120IIS 500500",課程中文名稱:"Linux作業系統核心",課程英文名稱:"Linux Operation System Kernel",學分數:"3",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`DELTA台達B07	M5M6M7
`,授課教師:`張君天	CHANG, CHUN-TIEN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"資工系111D  選修	資工系111M  選修	資安所111M  選修	"},{科號:"11120IIS 690000",課程中文名稱:"論文研究",課程英文名稱:"Thesis",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限資安所碩二以上修習",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"排除資安所碩士班1年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"資安所111M  必修	"},{科號:"11120IMBA400300",課程中文名稱:"策略供應鏈管理",課程英文名稱:"Strategic Supply Chain Management",學分數:"3",人限:"24",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"16 weeks course (16週課程)",停開註記:"",教室與上課時間:`TSMC台積428	T9TaTb
`,授課教師:`吳星佑	WU, HSING-YU
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"IMBA碩士班111M  選修	科管院學士班108BA 選修	科管院學士班109BA 選修	"},{科號:"11120IMBA400500",課程中文名稱:"新團隊的企業決策管理",課程英文名稱:"Business Decision Making for New Organization",學分數:"3",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"Prerequisite(s): Accounting, 16 weeks course  (16週課程)",停開註記:"",教室與上課時間:`TSMC台積428	M2M3M4
`,授課教師:`許祐維	HSU,YU-WEI
`,擋修說明:"",課程限制說明:"IMBA碩士班優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"IMBA碩士班111M  選修	"},{科號:"11120IMBA500000",課程中文名稱:"論文研究",課程英文名稱:"Thesis",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限IMBA碩二以上修習",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"排除IMBA碩士班碩士班1年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"IMBA碩士班111M  必修	"},{科號:"11120IMBA500800",課程中文名稱:"跨國企業管理實務",課程英文名稱:"Multi-National Corporation Management",學分數:"3",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"Prerequisite(s): Economics/Macroeconomics, 16 weeks course",停開註記:"",教室與上課時間:`TSMC台積428	R6R7R8
`,授課教師:`許智強	HSU, CHI-TZIANG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"IMBA碩士班111M  選修	"},{科號:"11120IMII600000",課程中文名稱:"論文研究",課程英文名稱:"Thesis",學分數:"0",人限:"3",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"限AI智造與物聯網產碩專班碩士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"AI智造與物聯網產碩專班111M  必修	"},{科號:"11120IMS 501200",課程中文名稱:"華語文教學實務",課程英文名稱:"Teaching Practice for Chinese as a Second Language",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"跨院碩華語教學組必修，曾辦理抵免者可免修。本課程為 16 週課程",停開註記:"",教室與上課時間:`GEN II綜二202	T7T8T9
`,授課教師:`李明懿	LI, MING-YI
`,擋修說明:"",課程限制說明:"華文所,跨院國際碩士,跨院國際博士優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"跨院國際碩士111MA 選修	華文所111M  選修	"},{科號:"11120IMS 501300",課程中文名稱:"國際學校華語教學之理論與實務",課程英文名稱:"Chinese Teaching and Learning in the International School",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"跨院碩華語教學組選修",停開註記:"",教室與上課時間:`GEN II綜二204	W7W8W9
`,授課教師:`李秀芬	HELEN S. JOU
`,擋修說明:"",課程限制說明:"華文所,跨院國際碩士,跨院國際博士優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"跨院國際碩士111MA 選修	華文所111M  選修	"},{科號:"11120IMS 501800",課程中文名稱:"書報討論：專業華語",課程英文名稱:"Seminar: Chinese for Specific Purposes",學分數:"1",人限:"10",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限IMS/IPHD二年級以上準備寫畢業論文學生選修",停開註記:"",教室與上課時間:`GEN II綜二612	F3
`,授課教師:`陳淑芬	SHU-FEN CHEN
`,擋修說明:"",課程限制說明:"限跨院國際碩士,跨院國際博士",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"跨院國際碩士111MA 選修	跨院國際博士111D  選修	"},{科號:"11120IMS 501900",課程中文名稱:"現代漢語詞彙學專題",課程英文名稱:"Topics in Modern Chinese Lexicology",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"跨院碩華語教學組選修。本課程為16週課程",停開註記:"",教室與上課時間:`GEN II綜二104	W3W4Wn
`,授課教師:`陳淑芬	SHU-FEN CHEN
`,擋修說明:"",課程限制說明:"不分院優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"跨院國際碩士111MA 選修	"},{科號:"11120IMS 530100",課程中文名稱:"印度科學史",課程英文名稱:"Introduction to the History of Indian Science",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"跨院碩印度研究組選修",停開註記:"",教室與上課時間:`EDU教  101	W2W3W4
`,授課教師:`琅元	VOLKOV, ALEXEI KARLOVITCH
`,擋修說明:"",課程限制說明:"不分院優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"跨院國際碩士111M  選修	跨院國際博士111D  選修	"},{科號:"11120IMS 600000",課程中文名稱:"論文研究",課程英文名稱:"Thesis",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限跨院碩士班碩二以上同學",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"排除跨院國際碩士碩士班1年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"跨院國際碩士111M  必修	跨院國際碩士111MA 必修	"},{科號:"11120IPHD500100",課程中文名稱:"生物/微奈米製造與治療應用",課程英文名稱:"Bio-Micro/Nano Fabrication and Therapeutic Applications",學分數:"1",人限:"25",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"密集上課時間如課綱.榮譽教師IIT-M Professor Tuhin Subhra Santra, Intensive class",停開註記:"",教室與上課時間:`GEN II綜二205	S3S4
`,授課教師:`榮譽教授	
`,擋修說明:"",課程限制說明:"跨院國際博士博士班優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"跨院國際博士111D  選修	"},{科號:"11120IPHD501100",課程中文名稱:"工業雷射加工--原理及應用",課程英文名稱:"Industrial Laser Machining: Working Principles and Applications",學分數:"3",人限:"16",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`GEN II綜二205	W5W6W7
`,授課教師:`陳鴻文	CHEN, HUNG-WEN
`,擋修說明:"",課程限制說明:"不分院優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"跨院國際博士111D  選修	跨院國際博士111DB 選修	"},{科號:"11120IPHD501500",課程中文名稱:"未來設計思考與策略創新",課程英文名稱:"Strategic Innovation and Future Design Thinking",學分數:"2",人限:"10",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"限碩博士生或大學部三年級以 上並經開課老師同意得以選修。本課程為16週課程。本課程為同步遠距課程。",停開註記:"",教室與上課時間:"",授課教師:`包盛盈	PAO, SHENG-YING
`,擋修說明:"",課程限制說明:"跨院國際碩士,跨院國際博士優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"跨院國際碩士111M  選修	跨院國際博士111D  選修	跨院國際博士111DB 選修	"},{科號:"11120IPHD501900",課程中文名稱:"3D虛擬創意動物 - Blender共創工作坊",課程英文名稱:"Making 3D Virtual Animats-Co-Creation Blender Workshop",學分數:"1",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"與法國巴黎八大博士Dr. Swann Martinez共授，密集課程方式講授，詳細時間請參考課綱, Intensive class, Feb",停開註記:"",教室與上課時間:`GEN II綜二205	S5S6S7
`,授課教師:`陳珠櫻	CHEN, CHU-YIN
榮譽教授	
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"跨院國際碩士111M  選修	跨院國際博士111D  選修	跨院國際博士111DB 選修	"},{科號:"11120IPHD601300",課程中文名稱:"策略與價值創造",課程英文名稱:"Strategy and Value Creation",學分數:"2",人限:"15",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"16 weeks, Distance Learning (非同步+同步遠距)",停開註記:"",教室與上課時間:`GEN II綜二205	R7R8
`,授課教師:`易漫然	MEYRAV YITSHACK HALEVI
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>未修過策略管理<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"跨院國際博士111D  選修	"},{科號:"11120IPHD700100",課程中文名稱:"書報討論",課程英文名稱:"Seminar",學分數:"1",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"跨院博士班一般組必修，obligatory course for general section",停開註記:"",教室與上課時間:`GEN II綜二205	W8W9
`,授課教師:`陳鴻文	CHEN, HUNG-WEN
`,擋修說明:"",課程限制說明:"限不分院",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"跨院國際博士111D  必修	"},{科號:"11120IPHD700200",課程中文名稱:"書報討論",課程英文名稱:"Seminar",學分數:"1",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"教育與公共政策組必修，確切上課時間地點將由學程或金門教育中心另行通知",停開註記:"",教室與上課時間:`Kinmen金門中心	M3M4
`,授課教師:`謝傳崇	HSIEH, CHUAN-CHUNG
`,擋修說明:"",課程限制說明:"限不分院",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"跨院國際博士111DA 必修	"},{科號:"11120IPHD710000",課程中文名稱:"科技藝術書報討論",課程英文名稱:"Seminar of Technology and Arts",學分數:"1",人限:"15",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"跨院碩博科技藝術組必修",停開註記:"",教室與上課時間:`GEN II綜二603	Ta
`,授課教師:`許素朱	HSU, SU-CHU
`,擋修說明:"",課程限制說明:"不分院優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"跨院國際碩士111M  必修	跨院國際博士111DB 選修	"},{科號:"11120IPHD710600",課程中文名稱:"學校創新經營與創意教學研究",課程英文名稱:"The Innovation of School Leadership and Teaching",學分數:"2",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限IPHD教育與公共政策組(金門班)選修",停開註記:"",教室與上課時間:"",授課教師:`謝傳崇	HSIEH, CHUAN-CHUNG
`,擋修說明:"",課程限制說明:"限跨院國際博士",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"跨院國際博士111DA 選修	"},{科號:"11120IPHD750000",課程中文名稱:"英文論文寫作",課程英文名稱:"Writing Research Papers in English",學分數:"3",人限:"10",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"本課程為16週課程。本課程為面授＋同步＋非同步遠距課程。",停開註記:"",教室與上課時間:"",授課教師:`黃芸茵	HUANG, YUN-YIN
`,擋修說明:"",課程限制說明:"跨院國際博士優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"跨院國際博士111D  選修	跨院國際博士111DA 選修	跨院國際博士111DB 選修	"},{科號:"11120IPHD800000",課程中文名稱:"論文研究",課程英文名稱:"Thesis",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限跨院博士班博二以上修習",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"排除跨院國際博士博士班1年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"跨院國際博士111D  必修	跨院國際博士111DA 必修	"},{科號:"11120IPIM600000",課程中文名稱:"論文研究",課程英文名稱:"Thesis",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"限工學院,碩士班2年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"智生製造產碩專班111M  必修	"},{科號:"11120IPNS302000",課程中文名稱:"專題研究二",課程英文名稱:"Undergraduate Research (II)",學分數:"1",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"限原科院學士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"原科院學士班109B  選修	"},{科號:"11120IPNS402000",課程中文名稱:"專題研究四",課程英文名稱:"Undergraduate Research (IV)",學分數:"1",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"限原科院學士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"原科院學士班108B  選修	"},{科號:"11120IPT 510000",課程中文名稱:"論文研究",課程英文名稱:"Thesis",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限光電所碩二以上修習",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"排除光電所碩士班1年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"光電所111M  必修	"},{科號:"11120IPT 511000",課程中文名稱:"非線性光學",課程英文名稱:"Nonlinear Optics",學分數:"3",人限:"22",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`DELTA台達212	W4F3F4
`,授課教師:`黃衍介	HUANG, YEN-CHIEH
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"光電所111D  選修	光電所111M  選修	物理系111D  選修	物理系111MA 選修	物理系111MB 選修	物理系111MC 選修	"},{科號:"11120IPT 514100",課程中文名稱:"光電子學二",課程英文名稱:"Photonics II",學分數:"3",人限:"70",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`DELTA台達217	M5M6R7
`,授課教師:`陳明彰	CHEN, MING-CHANG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)光電學分學程",不可加簽說明:"",必選修說明:"光電所111D  必修	光電所111M  必修	"},{科號:"11120IPT 514200",課程中文名稱:"光電元件與量測",課程英文名稱:"Photonic Devices and Measurements",學分數:"3",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`DELTA台達202	W6W7W8
`,授課教師:`林凡異	LIN, FAN-YI
`,擋修說明:"",課程限制說明:"光電所碩士班優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"(跨領域)光電學分學程",不可加簽說明:"",必選修說明:"光電所111M  必修	"},{科號:"11120IPT 534000",課程中文名稱:"量子光學",課程英文名稱:"Quantum Optics",學分數:"3",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`DELTA台達201	RnF8F9
`,授課教師:`李瑞光	LEE, RAY-KUANG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"光電所111D  選修	光電所111M  選修	物理系111D  選修	物理系111MA 選修	物理系111MB 選修	物理系111MC 選修	"},{科號:"11120IPT 535000",課程中文名稱:"光電半導體原理及應用",課程英文名稱:"Optoelectronics Semiconductor －Principle and Applications",學分數:"3",人限:"22",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`DELTA台達212	R2R3F2
`,授課教師:`李明昌	LI, MING-CHANG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"光電所111D  選修	光電所111M  選修	"},{科號:"11120IPT 545000",課程中文名稱:"光纖感測技術",課程英文名稱:"Fiber-Optic Sensing Technology",學分數:"3",人限:"51",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`DELTA台達211	M7M8R8
`,授課教師:`王立康	WANG, LI-KARN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"光電所111D  選修	光電所111M  選修	"},{科號:"11120IPT 562000",課程中文名稱:"有機光電特論：物理、材料和元件",課程英文名稱:"Organic Optoelectronics: Physics, Materials and Devices",學分數:"3",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`DELTA台達201	M7M8W5
`,授課教師:`大江昌人	OHE, MASAHITO
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"電機系108BA 選修	電機系108BB 選修	電機系109BA 選修	電機系109BB 選修	電資院學士班108B  選修	電資院學士班108BA 選修	電資院學士班109B  選修	電資院學士班109BA 選修	光電所111D  選修	光電所111M  選修	"},{科號:"11120IPT 591100",課程中文名稱:"書報討論",課程英文名稱:"Seminar",學分數:"1",人限:"135",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"",停開註記:"",教室與上課時間:`DELTA台達217	F6F7
`,授課教師:`王立康	WANG, LI-KARN
`,擋修說明:"",課程限制說明:"限光電所碩士班博士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"光電所111D  必修	光電所111M  必修	"},{科號:"11120IPT 599700",課程中文名稱:"半導體奈米微影",課程英文名稱:"Semiconductor Nanolithography",學分數:"3",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`DELTA台達208	T3F3F4
`,授課教師:`陳國平	KUO-PING CHEN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)光電學分學程",不可加簽說明:"",必選修說明:"光電所111D  選修	光電所111M  選修	"},{科號:"11120IPT 621000",課程中文名稱:"研究方法二",課程英文名稱:"Research Methodology (II)",學分數:"2",人限:"0",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"一律由指導教授加簽選課",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"限光電所碩士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"光電所111M  選修	"},{科號:"11120IPT 720000",課程中文名稱:"進階研究方法",課程英文名稱:"Advanced research method",學分數:"2",人限:"0",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"一律由指導教授加簽選課",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"限光電所博士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"光電所111D  選修	"},{科號:"11120IPT 800000",課程中文名稱:"論文研究",課程英文名稱:"Thesis",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限光電所博二以上修習",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"排除光電所博士班1年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"光電所111D  必修	"},{科號:"11120IPTH100100",課程中文名稱:"音樂演奏與實習",課程英文名稱:"Music Performance and Practical Training",學分數:"1",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程適合已有古典音樂演奏程度同學，開放全校修習。",停開註記:"",教室與上課時間:`EDU教  104	FaFb
`,授課教師:`林怡君	LIN, I-CHUN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)藝術學分學程/(跨領域)創新創業學分學程/(跨領域)音樂科技與健康學分學程",不可加簽說明:"",必選修說明:"清華學院學士班108BA 選修	清華學院學士班108BB 選修	清華學院學士班109BA 選修	清華學院學士班109BB 選修	清華學院學士班110BA 選修	清華學院學士班110BB 選修	清華學院學士班111BA 選修	清華學院學士班111BB 選修	"},{科號:"11120IPTH100400",課程中文名稱:"產品設計表現技法",課程英文名稱:"Sketching for Product Design",學分數:"3",人限:"0",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"開學後以加簽選課，線上無法加選。",停開註記:"",教室與上課時間:`EDU教  104	S2S3S4
`,授課教師:`鄭澤民	CHENG,TSE-MIN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)創新設計學分學程",不可加簽說明:"",必選修說明:"清華學院學士班108BA 選修	清華學院學士班108BB 選修	清華學院學士班109BA 選修	清華學院學士班109BB 選修	清華學院學士班110BA 選修	清華學院學士班110BB 選修	清華學院學士班111BA 選修	清華學院學士班111BB 選修	"},{科號:"11120IPTH100600",課程中文名稱:"平面設計",課程英文名稱:"Graphics Design",學分數:"3",人限:"0",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"開學後以加簽選課, 線上無法加選, 清華學院學士班創新設計組學生優先。",停開註記:"",教室與上課時間:`EDU教  104	M5M6M7
`,授課教師:`徐慈璟	HSU, TZU-CHING
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)創新設計學分學程",不可加簽說明:"",必選修說明:"清華學院學士班108BA 選修	清華學院學士班108BB 選修	清華學院學士班109BA 選修	清華學院學士班109BB 選修	清華學院學士班110BA 選修	清華學院學士班110BB 選修	清華學院學士班111BA 選修	清華學院學士班111BB 選修	"},{科號:"11120IPTH101200",課程中文名稱:"創新領導專題一",課程英文名稱:"Leadership & Innovation",學分數:"2",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"立德計畫與創新領導組學生優先。教師賴郁雯",停開註記:"",教室與上課時間:`D-Shi實齋講堂	S5S6
`,授課教師:`聘任中	
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"清華學院學士班108BA 選修	清華學院學士班108BB 選修	清華學院學士班109BA 選修	清華學院學士班109BB 選修	清華學院學士班110BA 選修	清華學院學士班110BB 選修	清華學院學士班111BA 選修	清華學院學士班111BB 選修	"},{科號:"11120IPTH201100",課程中文名稱:"專題研究A1",課程英文名稱:"Special Topics A1",學分數:"1",人限:"0",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"線上無法加選，請以加簽方式選課。",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"清華學院學士班108BA 選修	清華學院學士班108BB 選修	清華學院學士班109BA 選修	清華學院學士班109BB 選修	清華學院學士班110BA 選修	清華學院學士班110BB 選修	清華學院學士班111BA 選修	清華學院學士班111BB 選修	"},{科號:"11120IPTH202100",課程中文名稱:"專題研究B1",課程英文名稱:"Special Topics B1",學分數:"2",人限:"0",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"線上無法加選，請以加簽方式選課。",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"清華學院學士班108BA 選修	清華學院學士班108BB 選修	清華學院學士班109BA 選修	清華學院學士班109BB 選修	清華學院學士班110BA 選修	清華學院學士班110BB 選修	清華學院學士班111BA 選修	清華學院學士班111BB 選修	"},{科號:"11120IPTH202200",課程中文名稱:"專題研究B2",課程英文名稱:"Special Topics B2",學分數:"2",人限:"0",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"線上無法加選，請以加簽方式選課。",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"清華學院學士班108BA 選修	清華學院學士班108BB 選修	清華學院學士班109BA 選修	清華學院學士班109BB 選修	清華學院學士班110BA 選修	清華學院學士班110BB 選修	清華學院學士班111BA 選修	清華學院學士班111BB 選修	"},{科號:"11120IPTH203100",課程中文名稱:"專題研究C1",課程英文名稱:"Special Topics C1",學分數:"3",人限:"0",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"線上無法加選，請以加簽方式選課。",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"清華學院學士班108BA 選修	清華學院學士班108BB 選修	清華學院學士班109BA 選修	清華學院學士班109BB 選修	清華學院學士班110BA 選修	清華學院學士班110BB 選修	清華學院學士班111BA 選修	清華學院學士班111BB 選修	"},{科號:"11120IPTH203200",課程中文名稱:"專題研究C2",課程英文名稱:"Special Topics C2",學分數:"3",人限:"0",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"線上無法加選，請以加簽方式選課。",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"清華學院學士班108BA 選修	清華學院學士班108BB 選修	清華學院學士班109BA 選修	清華學院學士班109BB 選修	清華學院學士班110BA 選修	清華學院學士班110BB 選修	清華學院學士班111BA 選修	清華學院學士班111BB 選修	"},{科號:"11120IPTH203300",課程中文名稱:"專題研究C3",課程英文名稱:"Special Topics C3",學分數:"3",人限:"0",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"線上無法加選，請以加簽方式選課。",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"清華學院學士班108BA 選修	清華學院學士班108BB 選修	清華學院學士班109BA 選修	清華學院學士班109BB 選修	清華學院學士班110BA 選修	清華學院學士班110BB 選修	清華學院學士班111BA 選修	清華學院學士班111BB 選修	"},{科號:"11120IPTH203400",課程中文名稱:"專題研究C4",課程英文名稱:"Special Topics C4",學分數:"3",人限:"0",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"線上無法加選，請以加簽方式選課。",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"清華學院學士班108BA 選修	清華學院學士班108BB 選修	清華學院學士班109BA 選修	清華學院學士班109BB 選修	清華學院學士班110BA 選修	清華學院學士班110BB 選修	清華學院學士班111BA 選修	清華學院學士班111BB 選修	"},{科號:"11120IPTH204100",課程中文名稱:"專題研究D1",課程英文名稱:"Special Topics D1",學分數:"4",人限:"0",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"線上無法加選，請以加簽方式選課。",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"清華學院學士班108BA 選修	清華學院學士班108BB 選修	清華學院學士班109BA 選修	清華學院學士班109BB 選修	清華學院學士班110BA 選修	清華學院學士班110BB 選修	清華學院學士班111BA 選修	清華學院學士班111BB 選修	"},{科號:"11120IPTH205100",課程中文名稱:"實驗教育實習專題A",課程英文名稱:"Experimental Education Internship A",學分數:"9",人限:"0",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"線上無法加選，請以加簽方式選課。(限實驗教育生修習)",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"清華學院學士班108BA 選修	清華學院學士班108BB 選修	清華學院學士班109BA 選修	清華學院學士班109BB 選修	清華學院學士班110BA 選修	清華學院學士班110BB 選修	清華學院學士班111BA 選修	清華學院學士班111BB 選修	"},{科號:"11120IPTH205200",課程中文名稱:"實驗教育實習專題B",課程英文名稱:"Experimental Education Internship B",學分數:"6",人限:"0",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"線上無法加選，請以加簽方式選課。。(限實驗教育生修習)",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"清華學院學士班108BA 選修	清華學院學士班108BB 選修	清華學院學士班109BA 選修	清華學院學士班109BB 選修	清華學院學士班110BA 選修	清華學院學士班110BB 選修	清華學院學士班111BA 選修	清華學院學士班111BB 選修	"},{科號:"11120IPTH205300",課程中文名稱:"實驗教育實習專題C",課程英文名稱:"Experimental Education Internship C",學分數:"3",人限:"0",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"線上無法加選，請以加簽方式選課。",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"清華學院學士班108BA 選修	清華學院學士班108BB 選修	清華學院學士班109BA 選修	清華學院學士班109BB 選修	清華學院學士班110BA 選修	清華學院學士班110BB 選修	清華學院學士班111BA 選修	清華學院學士班111BB 選修	"},{科號:"11120IPTH205400",課程中文名稱:"實驗教育畢業專題B",課程英文名稱:"Graduation topic B",學分數:"6",人限:"0",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"線上無法加選，請以加簽方式選課。限實驗教育方案應屆畢業生",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"清華學院學士班108BA 選修	清華學院學士班108BB 選修	清華學院學士班109BA 選修	清華學院學士班109BB 選修	清華學院學士班110BA 選修	清華學院學士班110BB 選修	清華學院學士班111BA 選修	清華學院學士班111BB 選修	"},{科號:"11120ISA 532000",課程中文名稱:"金融科技創新與應用",課程英文名稱:"Fintech- Innovation and Applications",學分數:"3",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程教學有輔助遠距教學授課。",停開註記:"",教室與上課時間:`DELTA台達108	M6M7M8
`,授課教師:`孫宏民	SUN, HUNG-MIN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)金融科技與區塊鏈學分學程/(跨領域)人工智慧與應用進階學分學程/(跨領域)人工智慧與應用基礎學分學程",不可加簽說明:"",必選修說明:"資工系111D  選修	資工系111M  選修	資應所111D  選修	資應所111M  選修	"},{科號:"11120ISA 532300",課程中文名稱:"金融商品程式交易策略研究",課程英文名稱:"Research on Program Trading Strategy for Financial Products",學分數:"3",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"先修科目程式設計。需具備金融商品基本知識。本課程教學有輔助遠距教學授課。",停開註記:"",教室與上課時間:`DELTA台達106	M2M3M4
`,授課教師:`孫宏民	SUN, HUNG-MIN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"資工系111D  選修	資工系111M  選修	資應所111D  選修	資應所111M  選修	"},{科號:"11120ISA 542000",課程中文名稱:"雲端程式設計",課程英文名稱:"Cloud Programming",學分數:"3",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`DELTA台達103	R7R8R9
`,授課教師:`周志遠	CHOU, JERRY
`,擋修說明:"",課程限制說明:"",第一二專長對應:"數據科學(第二專長)",學分學程對應:"(跨領域)數據科學學分學程/(跨領域)人工智慧與應用進階學分學程/(跨領域)人工智慧與應用基礎學分學程",不可加簽說明:"",必選修說明:"資工系111D  選修	資工系111M  選修	資應所111D  選修	資應所111M  選修	"},{科號:"11120ISA 557300",課程中文名稱:"腦機介面原理與應用",課程英文名稱:"Brain Computer Interfaces: Fundamentals and Application",學分數:"3",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"本課程為 16 週課程。",停開註記:"",教室與上課時間:`DELTA台達106	R5R6R7
`,授課教師:`莊鈞翔	CHUANG, CHUN-HSIANG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)神經科學學分學程",不可加簽說明:"",必選修說明:"資工系111D  選修	資工系111M  選修	資應所111D  選修	資應所111M  選修	"},{科號:"11120ISA 558300",課程中文名稱:"人機互動創新科技設計",課程英文名稱:"Human Computer Interaction for Emerging Technology Design, Prototype, and Evaluation",學分數:"3",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"資應所，跨院碩博科技藝術組及藝術學院學士班大二以上優先選課",停開註記:"",教室與上課時間:`Nanda南大C308	R3R4Rn
`,授課教師:`游創文	YOU, CHUANG-WEN
`,擋修說明:"",課程限制說明:"藝術學院學士班,資應所,跨院國際碩士,跨院國際博士優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"(跨領域)創新設計學分學程",不可加簽說明:"",必選修說明:"跨院國際碩士111M  選修	跨院國際博士111DB 選修	資應所111D  選修	資應所111M  選修	藝術學院學士班110B  選修	"},{科號:"11120ISA 565100",課程中文名稱:"資訊應用書報討論",課程英文名稱:"Seminar in Information Systems and Applications",學分數:"1",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"Most of the lectures will be offered in English.",停開註記:"",教室與上課時間:`DELTA台達105	W5W6
`,授課教師:`邱德泉	CHIU, TE-CHUAN
李濬屹	LEE, CHUN-YI
`,擋修說明:"",課程限制說明:"限資安所碩士班,資應所碩士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"資安所111M  必修	資應所111M  必修	"},{科號:"11120ISA 590200",課程中文名稱:"資訊系統實作二",課程英文名稱:"Information System Implementation (II)",學分數:"2",人限:"0",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"採加簽，需有指導教授",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"資應所111M  選修	"},{科號:"11120ISA 591100",課程中文名稱:"獨立研究",課程英文名稱:"Independent Study",學分數:"1",人限:"0",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"限IMPISA碩二生加簽選(This course is open exclusibely for IMPISA senior students)",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"資應所111M  選修	"},{科號:"11120ISA 688200",課程中文名稱:"研究方法與報告技巧",課程英文名稱:"Research and Presentation Skills",學分數:"3",人限:"25",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"Requiring application in order to enroll in the course.本課程為 16 週課程。",停開註記:"",教室與上課時間:`DELTA台達615	T2T3T4
`,授課教師:`陳宜欣	CHEN, YI-SHIN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"資工系111D  選修	資工系111M  選修	資應所111D  選修	資應所111M  選修	"},{科號:"11120ISA 690000",課程中文名稱:"論文研究",課程英文名稱:"Thesis",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限資應所碩二以上修習",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"排除資應所碩士班1年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"資應所111M  必修	"},{科號:"11120ISA 890000",課程中文名稱:"論文研究",課程英文名稱:"Thesis",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限資應所博二以上修習",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"排除資應所博士班1年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"資應所111D  必修	"},{科號:"11120ISS 500000",課程中文名稱:"論文研究",課程英文名稱:"Thesis",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限服科所碩二以上修習",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"排除服科所碩士班1年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"服科所111M  必修	"},{科號:"11120ISS 506400",課程中文名稱:"多感官人機互動：探索未來設計的可能性",課程英文名稱:"Multisensory HCI: Reimagine Future Design Possibilities",學分數:"3",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"開放科管院學士班大四生加簽Please contact Professor Patricia Kuo to register this course.",停開註記:"",教室與上課時間:`TSMC台積430	W6W7W8
`,授課教師:`郭佩宜	KUO, PEI-YI
`,擋修說明:"",課程限制說明:"IMBA碩士班,服科所優先，第3次選課起開放全校修習",第一二專長對應:"管理(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"IMBA碩士班111M  選修	服科所111M  選修	科管院學士班108B  選修	"},{科號:"11120ISS 506600",課程中文名稱:"程式設計與商業分析",課程英文名稱:"Programming for Business Analytics",學分數:"3",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`TSMC台積430	T6T7T8
`,授課教師:`&#20842;在元	JAEWON YOO
`,擋修說明:"",課程限制說明:"排除大學部",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"IMBA碩士班111M  選修	服科所111M  選修	"},{科號:"11120ISS 507300",課程中文名稱:"文件探勘",課程英文名稱:"Text Mining",學分數:"3",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`TSMC台積421	T2T3T4
`,授課教師:`林福仁	LIN, FU-REN
`,擋修說明:"",課程限制說明:"IMBA碩士班,服科所優先，第3次選課起開放全校修習",第一二專長對應:"數據科學(第二專長)",學分學程對應:"(跨領域)數據科學學分學程/(跨領域)金融科技與區塊鏈學分學程/(跨領域)人工智慧與應用進階學分學程/(跨領域)人工智慧與應用基礎學分學程",不可加簽說明:"",必選修說明:"IMBA碩士班111M  選修	服科所111M  選修	"},{科號:"11120ISS 507600",課程中文名稱:"網路資訊安全管理",課程英文名稱:"Service Security",學分數:"3",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`TSMC台積406	F2F3F4
`,授課教師:`雷松亞	SOUMYA RAY
`,擋修說明:"",課程限制說明:"排除大學部",第一二專長對應:"",學分學程對應:"(跨領域)金融科技與區塊鏈學分學程",不可加簽說明:"",必選修說明:"IMBA碩士班111M  選修	服科所111M  選修	"},{科號:"11120ISS 507700",課程中文名稱:"計算統計於商業分析之應用",課程英文名稱:"Business Analytics Using Computational Statistics",學分數:"3",人限:"175",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`GEN IV綜四121	M3M4Mn
`,授課教師:`雷松亞	SOUMYA RAY
`,擋修說明:"",課程限制說明:"碩士班博士班優先，第3次選課起開放全校修習",第一二專長對應:"管理(第一專長)",學分學程對應:"(跨領域)人工智慧與應用進階學分學程/(跨領域)人工智慧與應用基礎學分學程",不可加簽說明:"",必選修說明:"IMBA碩士班111M  選修	服科所111M  選修	科管院學士班108B  選修	科管院學士班108BA 選修	科管院學士班109BA 選修	"},{科號:"11120ISS 507900",課程中文名稱:"使用者研究方法",課程英文名稱:"User Research Methods",學分數:"3",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"Please contact Professor Patricia Kuo to register this course.",停開註記:"",教室與上課時間:`TSMC台積406	M6M7M8
`,授課教師:`郭佩宜	KUO, PEI-YI
`,擋修說明:"",課程限制說明:"IMBA碩士班,服科所優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"IMBA碩士班111M  選修	服科所111M  選修	"},{科號:"11120ISS 508400",課程中文名稱:"數位創新與電子商務",課程英文名稱:"Digital Innovation and E-commerce",學分數:"3",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`TSMC台積421	R6R7R8
`,授課教師:`王俊程	WANG, JYUN-CHENG
`,擋修說明:"",課程限制說明:"IMBA碩士班,服科所優先，第3次選課起開放全校修習",第一二專長對應:"管理(第一專長)",學分學程對應:"(跨領域)金融科技與區塊鏈學分學程",不可加簽說明:"",必選修說明:"IMBA碩士班111M  選修	服科所111M  選修	科管院學士班108B  選修	科管院學士班108BA 選修	科管院學士班109BA 選修	"},{科號:"11120ISS 508800",課程中文名稱:"前線服務人員管理",課程英文名稱:"Management of Frontline Service Employees",學分數:"3",人限:"24",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"大學部限大三以上,需修過或同時修習管理學與行銷管理",停開註記:"",教室與上課時間:`TSMC台積406	T2T3T4
`,授課教師:`王貞雅	WANG, CHEN-YA
`,擋修說明:"",課程限制說明:"服科所,科管院學士班優先，第3次選課起開放全校修習",第一二專長對應:"管理(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"服科所111M  選修	科管院學士班108B  選修	"},{科號:"11120ISS 509300",課程中文名稱:"媒體與社會行銷",課程英文名稱:"Media and Social Marketing",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`TSMC台積421	R2R3R4
`,授課教師:`林聖芬	LIN, SHENG-FEN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"管理(第一專長)",學分學程對應:"(跨領域)資訊傳媒學分學程",不可加簽說明:"",必選修說明:"服科所111M  選修	"},{科號:"11120ISS 509500",課程中文名稱:"行銷策略",課程英文名稱:"Marketing Strategies",學分數:"3",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`TSMC台積406	W2W3W4
`,授課教師:`歐怡君	YI-CHUN OU
`,擋修說明:"",課程限制說明:"排除大學部",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"IMBA碩士班111M  選修	服科所111M  選修	"},{科號:"11120ISS 509600",課程中文名稱:"實驗和因果推斷",課程英文名稱:"Experiments and Causal Inference",學分數:"3",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`TSMC台積406	R6R7R8
`,授課教師:`&#20842;在元	JAEWON YOO
`,擋修說明:"",課程限制說明:"博士班優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"IMBA碩士班111M  選修	服科所111M  選修	"},{科號:"11120ISS 509800",課程中文名稱:"研究方法",課程英文名稱:"Research Methods",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`TSMC台積430	F5F6F7
`,授課教師:`許裴舫	HSU, PEI-FANG
`,擋修說明:"",課程限制說明:"限服科所碩士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"服科所111M  必修	"},{科號:"11120ISS 581100",課程中文名稱:"組織行為",課程英文名稱:"Organizational Behavior",學分數:"3",人限:"36",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"Please contact Professor Chenya Wang to register this course",停開註記:"",教室與上課時間:`TSMC台積430	M5M6M7
`,授課教師:`王貞雅	WANG, CHEN-YA
`,擋修說明:`<div>
  擋修對象 : 大學部 <br>
  先修科目 : <BR><BR>管理學-成績需C-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"IMBA碩士班,服科所優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"(跨領域)生物科技管理學分學程",不可加簽說明:"",必選修說明:"IMBA碩士班111M  必修	服科所111M  選修	科管院學士班108BA 選修	科管院學士班109BA 選修	"},{科號:"11120ISS 700000",課程中文名稱:"論文研究",課程英文名稱:"Thesis",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限服科所博二以上修習",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"排除服科所博士班1年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"服科所111D  必修	"},{科號:"11120ISS 700200",課程中文名稱:"服務科學理論",課程英文名稱:"Service Science Theory",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`TSMC台積406	R2R3R4
`,授課教師:`林福仁	LIN, FU-REN
`,擋修說明:"",課程限制說明:"服科所優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"服科所111D  必修	"},{科號:"11120ISS 700300",課程中文名稱:"服務科學專題研討(一)",課程英文名稱:"Seminar I",學分數:"2",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"Email the instructor if you are NOT CTM PhD students and intend to take this course.",停開註記:"",教室與上課時間:`TSMC台積406	W6W7
`,授課教師:`歐怡君	YI-CHUN OU
`,擋修說明:"",課程限制說明:"限科管院,博士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"服科所111D  必修	"},{科號:"11120JAC 100400",課程中文名稱:"科技藝術概論",課程英文名稱:"Introduction to Techno-arts",學分數:"2",人限:"100",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"藝術學院大一，3選2院選修課程。",停開註記:"",教室與上課時間:`Nanda南大8102	W5W6
`,授課教師:`邱誌勇	CHIU, CHIH-YUNG
`,擋修說明:"",課程限制說明:"限藝術學院,大學部1年級",第一二專長對應:"科技藝術(第二專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"藝設系111BA 選修	藝設系111BB 選修	藝術學院學士班111B  選修	音樂系111B  選修	"},{科號:"11120JAD 110100",課程中文名稱:"色彩學",課程英文名稱:"Chromatology",學分數:"2",人限:"70",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"系必修",停開註記:"",教室與上課時間:`Nanda南大8102	F5F6
`,授課教師:`謝翠如	HSIEH, TSUEI-JU
`,擋修說明:"",課程限制說明:"藝設系大學部1年級優先，第3次選課起開放全校修習",第一二專長對應:"藝術創作(第二專長)	藝術創作(第一專長)	工藝設計與文創(第二專長)	工藝設計與文創(第一專長)",學分學程對應:"(跨領域)創新設計學分學程",不可加簽說明:"",必選修說明:"藝設系111BA 必修	藝術學院學士班111B  必修	"},{科號:"11120JAD 120500",課程中文名稱:"素描二",課程英文名稱:"Drawing II",學分數:"2",人限:"51",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"創作組必修",停開註記:"",教室與上課時間:`Nanda南大8601	W7W8
`,授課教師:`張淳皓	ZHANG,CHUN-HAO
`,擋修說明:`<div>
  擋修對象 : 藝設系 <br>
  先修科目 : <BR><BR>素描一-成績需D以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"【上學期原修素描一JAD 120100(張淳皓老師)同學選課優先,第3次選課起開放】",第一二專長對應:"藝術創作(第二專長)	藝術創作(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"藝設系111BA 必修	藝術學院學士班111B  選修	"},{科號:"11120JAD 120600",課程中文名稱:"媒材與應用二",課程英文名稱:"Media and Application II",學分數:"2",人限:"49",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"創作組必修",停開註記:"",教室與上課時間:`Nanda南大8213	M5M6
`,授課教師:`梁莉苓	LIANG, LI-LING
`,擋修說明:`<div>
  擋修對象 : 藝設系 <br>
  先修科目 : <BR><BR>媒材與應用一-成績需D以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"【上學期原修媒材與應用一JAD 120200(梁莉苓老師)同學選課優先,第3次選課起開放】",第一二專長對應:"藝術創作(第二專長)	藝術創作(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"藝設系111BA 必修	藝術學院學士班111B  選修	"},{科號:"11120JAD 120700",課程中文名稱:"油畫二",課程英文名稱:"Oil Painting II",學分數:"2",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"創作組必修",停開註記:"",教室與上課時間:`Nanda南大8601	W3W4
`,授課教師:`吳宇棠	WU, YU-TANG
`,擋修說明:`<div>
  擋修對象 : 藝設系 <br>
  先修科目 : <BR><BR>油畫一-成績需D以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"【上學期原修油畫一JAD 120300(吳宇棠老師)同學選課優先,第3次選課起開放】",第一二專長對應:"藝術創作(第二專長)	藝術創作(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"藝設系111BA 必修	藝術學院學士班111B  選修	"},{科號:"11120JAD 120800",課程中文名稱:"水墨畫二",課程英文名稱:"Chinese Ink Painting II",學分數:"2",人限:"45",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"創作組必修",停開註記:"",教室與上課時間:`Nanda南大8213	R1R2
`,授課教師:`胡以誠	HU, YI-CHENG
`,擋修說明:"",課程限制說明:"【上學期原修水墨畫一JAD 120400(胡以誠老師)同學選課優先,第3次選課起開放】",第一二專長對應:"藝術創作(第二專長)	藝術創作(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"藝設系111BA 必修	藝術學院學士班111B  選修	"},{科號:"11120JAD 120901",課程中文名稱:"台灣美術史",課程英文名稱:"Taiwanese Art History",學分數:"2",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"創作組必修 / 本課程為16週課程",停開註記:"",教室與上課時間:`Nanda南大8201	T3T4
`,授課教師:`張晴文	CHANG, CHING-WEN
`,擋修說明:"",課程限制說明:"藝設系大學部1年級優先，第3次選課起開放全校修習",第一二專長對應:"藝術創作(第二專長)	藝術創作(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"藝設系111BA 必修	藝術學院學士班111B  選修	"},{科號:"11120JAD 125200",課程中文名稱:"水彩二",課程英文名稱:"Watercolor Painting II",學分數:"2",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"創作組選修",停開註記:"",教室與上課時間:`Nanda南大8601	W1W2
`,授課教師:`李宜亞	LEE,YI-YA
`,擋修說明:`<div>
  擋修對象 : 藝設系 <br>
  先修科目 : <BR><BR>水彩一-成績需D以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"【上學期原修水彩一JAD 125100(李宜亞老師)同學選課優先,第3次選課起開放】",第一二專長對應:"藝術創作(第二專長)	藝術創作(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"藝設系111BA 選修	藝術學院學士班111B  選修	"},{科號:"11120JAD 125300",課程中文名稱:"書法",課程英文名稱:"Chinese Calligraphy",學分數:"2",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"創作組選修",停開註記:"",教室與上課時間:`Nanda南大8213	W9Wa
`,授課教師:`吳鎮中	WU, CHEN-CHUNG
`,擋修說明:"",課程限制說明:"藝設系大學部1年級優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"藝設系111BA 選修	"},{科號:"11120JAD 130300",課程中文名稱:"基礎設計二",課程英文名稱:"Basic Design Ⅱ",學分數:"2",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"設計組必修",停開註記:"",教室與上課時間:`Nanda南大8213	T3T4
`,授課教師:`李建佑	JIAN,YOU-LI
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>基礎設計一-成績需D以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"【上學期原修基礎設計一JAD 130100(李允文老師)同學選課優先,第3次選課起開放】",第一二專長對應:"工藝設計與文創(第二專長)	工藝設計與文創(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"藝設系111BB 必修	藝術學院學士班111B  選修	"},{科號:"11120JAD 130400",課程中文名稱:"數位圖學",課程英文名稱:"Digital Graphics",學分數:"2",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"設計組必修",停開註記:"",教室與上課時間:`Nanda南大9307	W3W4
`,授課教師:`李允文	LEE, YUN-WEN
`,擋修說明:"",課程限制說明:"藝設系大學部1年級優先，第3次選課起開放全校修習",第一二專長對應:"工藝設計與文創(第二專長)	工藝設計與文創(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"藝設系111BB 必修	藝術學院學士班111B  選修	"},{科號:"11120JAD 138600",課程中文名稱:"數位影像處理與視覺傳達設計",課程英文名稱:"Design of Digital Image Processing and Visual Communication",學分數:"2",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"設計組專業輔助",停開註記:"",教室與上課時間:`Nanda南大9307	M5M6
`,授課教師:`林季錞	LIN, CHI-CHUN
`,擋修說明:"",課程限制說明:"藝設系大學部優先，第3次選課起開放全校修習",第一二專長對應:"工藝設計與文創(第二專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"藝設系111BB 選修	"},{科號:"11120JAD 139800",課程中文名稱:"立體進階造型",課程英文名稱:"Advanced Modeling of Three-Dimensional",學分數:"2",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"設計組專業輔助",停開註記:"",教室與上課時間:`Nanda南大8203	R3R4
`,授課教師:`施富錡	SHIH, FU-CHI
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>立體基礎造型-成績需D以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"【上學期原修立體基礎造型JAD 139700(施富錡老師)同學選課優先,第3次選課起開放】",第一二專長對應:"工藝設計與文創(第二專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"藝設系111BB 選修	"},{科號:"11120JAD 210200",課程中文名稱:"西方美術史",課程英文名稱:"Western Art History",學分數:"2",人限:"70",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"共必修",停開註記:"",教室與上課時間:`Nanda南大8201	W3W4
`,授課教師:`余季音	Yu, Chi-Ying
`,擋修說明:"",課程限制說明:"藝設系大學部2年級優先，第3次選課起開放全校修習",第一二專長對應:"藝術創作(第二專長)	藝術創作(第一專長)	工藝設計與文創(第二專長)	工藝設計與文創(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"藝設系110BB 必修	藝術學院學士班110B  必修	"},{科號:"11120JAD 210300",課程中文名稱:"東方美術史",課程英文名稱:"Oriental Art History",學分數:"2",人限:"70",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"系必修",停開註記:"",教室與上課時間:`Nanda南大8102	W1W2
`,授課教師:`胡以誠	HU, YI-CHENG
`,擋修說明:"",課程限制說明:"藝設系大學部2年級優先，第3次選課起開放全校修習",第一二專長對應:"藝術創作(第二專長)	藝術創作(第一專長)	工藝設計與文創(第二專長)	工藝設計與文創(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"藝設系110BA 必修	藝術學院學士班110B  必修	"},{科號:"11120JAD 210400",課程中文名稱:"數位立體動畫",課程英文名稱:"Digital 3-D Animation",學分數:"2",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"系共選",停開註記:"",教室與上課時間:`Nanda南大9304	F5F6
`,授課教師:`楊仁賢	YANG, JEN-HSIEN
`,擋修說明:"",課程限制說明:"藝設系大學部2年級優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"藝設系110BA 選修	藝設系110BB 選修	"},{科號:"11120JAD 210500",課程中文名稱:"藝術教育",課程英文名稱:"Art Education",學分數:"2",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"系共選",停開註記:"",教室與上課時間:`Nanda南大8213	R3R4
`,授課教師:`吳望如	WU,WANG JU
`,擋修說明:"",課程限制說明:"藝設系大學部2年級優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"藝設系110BA 選修	藝設系110BB 選修	"},{科號:"11120JAD 221000",課程中文名稱:"人文與藝術創作",課程英文名稱:"Humanities and Art Creation",學分數:"2",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"創作組必修",停開註記:"",教室與上課時間:`Nanda南大8201	R5R6
`,授課教師:`梁莉苓	LIANG, LI-LING
`,擋修說明:"",課程限制說明:"藝設系大學部2年級優先，第3次選課起開放全校修習",第一二專長對應:"藝術創作(第二專長)	藝術創作(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"藝設系110BA 必修	藝術學院學士班110B  選修	"},{科號:"11120JAD 221100",課程中文名稱:"現代藝術",課程英文名稱:"Modern Art",學分數:"2",人限:"70",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"創作組必修",停開註記:"",教室與上課時間:`Nanda南大8102	T1T2
`,授課教師:`張家霖	CHANG, CHIA-LIN
`,擋修說明:"",課程限制說明:"藝設系大學部2年級4年級優先，第3次選課起開放全校修習",第一二專長對應:"藝術創作(第二專長)	藝術創作(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"藝設系110BA 必修	藝術學院學士班110B  選修	"},{科號:"11120JAD 225600",課程中文名稱:"藝術專題工作坊",課程英文名稱:"Workshop of Arts",學分數:"2",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"創作組選修，授課教師:陳松志",停開註記:"",教室與上課時間:`Nanda南大8201	F3F4
`,授課教師:`聘任中	
`,擋修說明:"",課程限制說明:"藝設系大學部2年級優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"藝設系110BA 選修	"},{科號:"11120JAD 226900",課程中文名稱:"進階水墨二",課程英文名稱:"Advanced Chinese Ink Painting II",學分數:"2",人限:"45",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"創作組進階選修",停開註記:"",教室與上課時間:`Nanda南大8213	W3W4
`,授課教師:`胡以誠	HU, YI-CHENG
`,擋修說明:`<div>
  擋修對象 : 藝設系 <br>
  先修科目 : <BR><BR>進階水墨一-成績需D以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"【上學期原修進階水墨一JAD 226200(胡以誠老師)同學選課優先,第3次選課起開放】",第一二專長對應:"藝術創作(第二專長)	藝術創作(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"藝設系110BA 選修	藝術學院學士班110B  選修	"},{科號:"11120JAD 227000",課程中文名稱:"進階媒材與應用二",課程英文名稱:"Advanced Media and Application II",學分數:"2",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"創作組進階選修",停開註記:"",教室與上課時間:`Nanda南大8203	F8F9
`,授課教師:`劉鳳鴒	LIU, FENG-LING
`,擋修說明:`<div>
  擋修對象 : 藝設系 <br>
  先修科目 : <BR><BR>進階媒材與應用一-成績需D以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"【上學期原修進階媒材與應用一JAD 226300(劉鳳鴒老師)同學選課優先,第3次選課起開放】",第一二專長對應:"藝術創作(第二專長)	藝術創作(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"藝設系110BA 選修	藝術學院學士班110B  選修	"},{科號:"11120JAD 227100",課程中文名稱:"素描：圖像與媒材二",課程英文名稱:"Drawing: Image and Media II",學分數:"2",人限:"35",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"創作組進階選修",停開註記:"",教室與上課時間:`Nanda南大8301	T7T8
`,授課教師:`吳宇棠	WU, YU-TANG
`,擋修說明:`<div>
  擋修對象 : 藝設系 <br>
  先修科目 : <BR><BR>素描：圖像與媒材一-成績需D以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"【上學期原修素描：圖像與媒材一JAD 226400(吳宇棠老師)同學選課優先,第3次選課起開放】",第一二專長對應:"藝術創作(第二專長)	藝術創作(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"藝設系110BA 選修	藝術學院學士班110B  選修	"},{科號:"11120JAD 227200",課程中文名稱:"進階油畫二",課程英文名稱:"Advanced Oil Painting II",學分數:"2",人限:"35",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"創作組進階選修",停開註記:"",教室與上課時間:`Nanda南大8301	R7R8
`,授課教師:`吳宇棠	WU, YU-TANG
`,擋修說明:`<div>
  擋修對象 : 藝設系 <br>
  先修科目 : <BR><BR>進階油畫一-成績需D以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"【上學期原修進階油畫一JAD 226500(吳宇棠老師)同學選課優先,第3次選課起開放】",第一二專長對應:"藝術創作(第二專長)	藝術創作(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"藝設系110BA 選修	藝術學院學士班110B  選修	"},{科號:"11120JAD 227300",課程中文名稱:"進階水彩二",課程英文名稱:"Advanced Watercolor Painting II",學分數:"2",人限:"35",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"創作組進階選修",停開註記:"",教室與上課時間:`Nanda南大8301	W5W6
`,授課教師:`李宜亞	LEE,YI-YA
`,擋修說明:`<div>
  擋修對象 : 藝設系 <br>
  先修科目 : <BR><BR>進階水彩一-成績需D以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"【上學期原修進階水彩一JAD 226600(李宜亞老師)同學選課優先,第3次選課起開放】",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"藝設系110BA 選修	"},{科號:"11120JAD 227400",課程中文名稱:"現代版畫二",課程英文名稱:"Modern Printmaking II",學分數:"2",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"創作組進階選修",停開註記:"",教室與上課時間:`Nanda南大8309	M7M8
`,授課教師:`呂燕卿	LU,YEN-CHING
`,擋修說明:`<div>
  擋修對象 : 藝設系 <br>
  先修科目 : <BR><BR>現代版畫一-成績需D以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"【上學期原修現代版畫一JAD 226700(呂燕卿老師)同學選課優先,第3次選課起開放】",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"藝設系110BA 選修	"},{科號:"11120JAD 227500",課程中文名稱:"插畫二",課程英文名稱:"Illustration II",學分數:"2",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"創作組進階選修",停開註記:"",教室與上課時間:`Nanda南大8213	T5T6
`,授課教師:`林士棻	LIN, SHIH-FEN
`,擋修說明:`<div>
  擋修對象 : 藝設系 <br>
  先修科目 : <BR><BR>插畫一-成績需D以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"【上學期原修插畫一JAD 226800(林士棻老師)同學選課優先,第3次選課起開放】",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"藝設系110BA 選修	"},{科號:"11120JAD 230700",課程中文名稱:"設計思潮",課程英文名稱:"Design Movements",學分數:"2",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"設計組必修",停開註記:"",教室與上課時間:`Nanda南大8102	T3T4
`,授課教師:`蘇筱婷	SU, HSIAO-TING
`,擋修說明:"",課程限制說明:"藝設系大學部2年級優先，第3次選課起開放全校修習",第一二專長對應:"工藝設計與文創(第二專長)	工藝設計與文創(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"藝設系110BB 必修	藝術學院學士班110B  選修	"},{科號:"11120JAD 230800",課程中文名稱:"數位輔助製作",課程英文名稱:"Computer Aided Manufacturing",學分數:"2",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"設計組必修",停開註記:"",教室與上課時間:`Nanda南大9307	W5W6
`,授課教師:`李允文	LEE, YUN-WEN
`,擋修說明:"",課程限制說明:"藝設系大學部2年級優先，第3次選課起開放全校修習",第一二專長對應:"工藝設計與文創(第二專長)	工藝設計與文創(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"藝設系110BB 必修	藝術學院學士班110B  選修	"},{科號:"11120JAD 235700",課程中文名稱:"陶瓷藝術與設計二",課程英文名稱:"Ceramic Art and Design II",學分數:"3",人限:"25",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"設計專選",停開註記:"",教室與上課時間:`Nanda南大8209	M2M3M4
`,授課教師:`施富錡	SHIH, FU-CHI
`,擋修說明:`<div>
  擋修對象 : 藝設系 <br>
  先修科目 : <BR><BR>陶瓷藝術與設計一-成績需D以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"【上學期原修陶瓷藝術與設計一JAD 235200(施富錡老師)同學選課優先,第3次選課起開放】",第一二專長對應:"工藝設計與文創(第二專長)	工藝設計與文創(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"藝設系110BB 選修	藝術學院學士班110B  選修	"},{科號:"11120JAD 235800",課程中文名稱:"木屬藝術與設計二",課程英文名稱:"Wood Art and Design II",學分數:"3",人限:"25",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"設計專選",停開註記:"",教室與上課時間:`Nanda南大8109	R5R6R7
`,授課教師:`潘力瑋	PAN, LI-WEI
`,擋修說明:`<div>
  擋修對象 : 藝設系 <br>
  先修科目 : <BR><BR>木屬藝術與設計一-成績需D以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"【上學期原修木屬藝術與設計一JAD 235300(潘力瑋老師)同學選課優先,第3次選課起開放】",第一二專長對應:"工藝設計與文創(第二專長)	工藝設計與文創(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"藝設系110BB 選修	藝術學院學士班110B  選修	"},{科號:"11120JAD 235900",課程中文名稱:"金屬藝術與設計二",課程英文名稱:"Metal Art and Design II",學分數:"3",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"設計專選",停開註記:"",教室與上課時間:`Nanda南大8409	T5T6T7
`,授課教師:`蘇筱婷	SU, HSIAO-TING
`,擋修說明:`<div>
  擋修對象 : 藝設系 <br>
  先修科目 : <BR><BR>金屬藝術與設計一-成績需D以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"【上學期原修金屬藝術與設計一JAD 235400(蘇筱婷老師)同學選課優先,第3次選課起開放】",第一二專長對應:"工藝設計與文創(第二專長)	工藝設計與文創(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"藝設系110BB 選修	藝術學院學士班110B  選修	"},{科號:"11120JAD 236000",課程中文名稱:"玻璃藝術與設計二",課程英文名稱:"Glass Art and Design II",學分數:"3",人限:"36",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"設計專選",停開註記:"",教室與上課時間:`Nanda南大8322	R2R3R4
`,授課教師:`蕭銘芚	SHIAU, MING-TWEN
`,擋修說明:`<div>
  擋修對象 : 藝設系 <br>
  先修科目 : <BR><BR>玻璃藝術與設計一-成績需D以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"【上學期原修玻璃藝術與設計一JAD 235500(蕭銘芚老師)同學選課優先,第3次選課起開放】",第一二專長對應:"工藝設計與文創(第二專長)	工藝設計與文創(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"藝設系110BB 選修	藝術學院學士班110B  選修	"},{科號:"11120JAD 238800",課程中文名稱:"產品設計",課程英文名稱:"Product Design",學分數:"2",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"設組輔專選",停開註記:"",教室與上課時間:`Nanda南大8201	F7F8
`,授課教師:`劉立偉	LIU, LI-WEI
`,擋修說明:"",課程限制說明:"藝設系大學部2年級優先，第3次選課起開放全校修習",第一二專長對應:"工藝設計與文創(第二專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"藝設系110BB 選修	"},{科號:"11120JAD 238900",課程中文名稱:"室內設計",課程英文名稱:"Interior Design",學分數:"2",人限:"25",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"設計組輔專選",停開註記:"",教室與上課時間:`Nanda南大9308	M5M6
`,授課教師:`廖家翎	LIAO, JIA-LIN
`,擋修說明:"",課程限制說明:"藝設系大學部2年級優先，第3次選課起開放全校修習",第一二專長對應:"工藝設計與文創(第二專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"藝設系110BB 選修	"},{科號:"11120JAD 310800",課程中文名稱:"美學",課程英文名稱:"Aesthetics",學分數:"2",人限:"85",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"系共選",停開註記:"",教室與上課時間:`Nanda南大8102	R7R8
`,授課教師:`高榮禧	KAO, JUNG-HSI
`,擋修說明:"",課程限制說明:"藝設系大學部3年級優先，第3次選課起開放全校修習",第一二專長對應:"藝術創作(第二專長)	藝術創作(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"藝設系109BA 選修	藝設系109BB 選修	"},{科號:"11120JAD 310900",課程中文名稱:"藝術心理學",課程英文名稱:"Psychology of Art",學分數:"2",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"系共選",停開註記:"",教室與上課時間:`Nanda南大8201	W7W8
`,授課教師:`高榮禧	KAO, JUNG-HSI
`,擋修說明:"",課程限制說明:"藝設系大學部3年級優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"藝設系109BA 選修	藝設系109BB 選修	"},{科號:"11120JAD 325800",課程中文名稱:"藝術法規",課程英文名稱:"Laws of Arts",學分數:"2",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"創作組選修",停開註記:"",教室與上課時間:`Nanda南大2203	M7M8
`,授課教師:`廖凰玎	LIAO,HUANG-DING
`,擋修說明:"",課程限制說明:"藝設系大學部3年級優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"藝設系109BA 選修	"},{科號:"11120JAD 328200",課程中文名稱:"藝術評論",課程英文名稱:"Art Criticism",學分數:"2",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"創作組專業選修 / 本課程為16週課程",停開註記:"",教室與上課時間:`Nanda南大8201	M5M6
`,授課教師:`張晴文	CHANG, CHING-WEN
`,擋修說明:"",課程限制說明:"藝設系大學部3年級優先，第3次選課起開放全校修習",第一二專長對應:"藝術創作(第二專長)	藝術創作(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"藝設系109BA 選修	"},{科號:"11120JAD 328400",課程中文名稱:"古典油畫技法二",課程英文名稱:"Classical Oil Painting Techniques II",學分數:"2",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"創作組專業選修",停開註記:"",教室與上課時間:`Nanda南大8401	W5W6
`,授課教師:`張淳皓	ZHANG,CHUN-HAO
`,擋修說明:`<div>
  擋修對象 : 藝設系 <br>
  先修科目 : <BR><BR>古典油畫技法一-成績需D以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"【上學期原修古典油畫技法一JAD 327600(張淳皓老師)同學選課優先,第3次選課起開放】",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"藝設系109BA 選修	"},{科號:"11120JAD 328500",課程中文名稱:"繪畫：圖像與構成二",課程英文名稱:"Painting: Image and Composition of Painting II",學分數:"2",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"創作組專業選修",停開註記:"",教室與上課時間:`Nanda南大8401	T3T4
`,授課教師:`謝鴻均	SHIEH, HONG-JUIN
`,擋修說明:"",課程限制說明:"【上學期原修繪畫：圖像與構成一JAD 327700(謝鴻均老師)同學選課優先,第3次選課起開放】",第一二專長對應:"藝術創作(第二專長)	藝術創作(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"藝設系109BA 選修	"},{科號:"11120JAD 328600",課程中文名稱:"複合媒材創作二",課程英文名稱:"Mixed Media Art II",學分數:"2",人限:"25",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"創作組專業選修",停開註記:"",教室與上課時間:`Nanda南大8216	R3R4
`,授課教師:`梁莉苓	LIANG, LI-LING
`,擋修說明:`<div>
  擋修對象 : 藝設系 <br>
  先修科目 : <BR><BR>複合媒材創作一-成績需D以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"【上學期原修複合媒材創作一JAD 327800(梁莉苓老師)同學選課優先,第3次選課起開放】",第一二專長對應:"藝術創作(第二專長)	藝術創作(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"藝設系109BA 選修	"},{科號:"11120JAD 328700",課程中文名稱:"書畫創作二",課程英文名稱:"Calligraphy and Painting II",學分數:"2",人限:"45",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"創作組專業選修",停開註記:"",教室與上課時間:`Nanda南大8213	M3M4
`,授課教師:`陳良沛	CHEN, LIANG-PEI
`,擋修說明:`<div>
  擋修對象 : 藝設系 <br>
  先修科目 : <BR><BR>書畫創作一-成績需D以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"【上學期原修書畫創作一JAD 327900(陳良沛老師)同學選課優先,第3次選課起開放】",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"藝設系109BA 選修	"},{科號:"11120JAD 328800",課程中文名稱:"複合形態版畫創作二",課程英文名稱:"Mixed Media Printmaking Art II",學分數:"2",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"創作組專業選修",停開註記:"",教室與上課時間:`Nanda南大8309	F7F8
`,授課教師:`王振泰	WANG, CHENG-TAI
`,擋修說明:`<div>
  擋修對象 : 藝設系 <br>
  先修科目 : <BR><BR>複合形態版畫創作一-成績需D以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"【上學期原修複合形態版畫創作一JAD 328000(王振泰老師)同學選課優先,第3次選課起開放】",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"藝設系109BA 選修	"},{科號:"11120JAD 328900",課程中文名稱:"膠彩畫二",課程英文名稱:"Gouache Ⅱ",學分數:"2",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"創作組專業選修",停開註記:"",教室與上課時間:`Nanda南大8213	F3F4
`,授課教師:`徐子涵	HSU, TZU-HAN
`,擋修說明:`<div>
  擋修對象 : 藝設系 <br>
  先修科目 : <BR><BR>膠彩畫一-成績需D以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"【上學期原修膠彩畫一JAD 328100(徐子涵老師)同學選課優先,第3次選課起開放】",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"藝設系109BA 選修	"},{科號:"11120JAD 329000",課程中文名稱:"藝術產業實習",課程英文名稱:"Internship in the Arts Industry",學分數:"2",人限:"10",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"創作組專業選修 / 本課程為16週課程",停開註記:"",教室與上課時間:`Nanda南大8201	T1T2
`,授課教師:`張晴文	CHANG, CHING-WEN
`,擋修說明:"",課程限制說明:"藝設系大學部3年級優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"藝設系109BA 選修	"},{科號:"11120JAD 331100",課程中文名稱:"品牌企劃與行銷",課程英文名稱:"Brand Planning and Marketing",學分數:"2",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"設計組必修",停開註記:"",教室與上課時間:`Nanda南大8203	T3T4
`,授課教師:`謝翠如	HSIEH, TSUEI-JU
`,擋修說明:"",課程限制說明:"藝設系大學部3年級優先，第3次選課起開放全校修習",第一二專長對應:"工藝設計與文創(第二專長)	工藝設計與文創(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"藝設系109BB 必修	"},{科號:"11120JAD 331200",課程中文名稱:"程式與介面設計",課程英文名稱:"Programming and Interface Design",學分數:"2",人限:"45",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"設計組必修",停開註記:"",教室與上課時間:`Nanda南大9306	M5M6
`,授課教師:`陳依純	CHEN, I-CHUN
`,擋修說明:"",課程限制說明:"藝設系大學部3年級優先，第3次選課起開放全校修習",第一二專長對應:"工藝設計與文創(第二專長)	工藝設計與文創(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"藝設系109BB 必修	"},{科號:"11120JAD 336700",課程中文名稱:"陶瓷藝術與設計四",課程英文名稱:"Ceramic Art and Design Ⅳ",學分數:"3",人限:"15",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"設計組專業主修",停開註記:"",教室與上課時間:`Nanda南大8209	FnF5F6
`,授課教師:`施富錡	SHIH, FU-CHI
`,擋修說明:"",課程限制說明:"【上學期原修陶瓷藝術與設計三JAD 336200(施富錡老師)同學選課優先,第3次選課起開放】",第一二專長對應:"工藝設計與文創(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"藝設系109BB 選修	"},{科號:"11120JAD 336800",課程中文名稱:"木屬藝術與設計四",課程英文名稱:"Wood Art and Design Ⅳ",學分數:"3",人限:"15",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"設計組專業主修",停開註記:"",教室與上課時間:`Nanda南大8109	R2R3R4
`,授課教師:`李允文	LEE, YUN-WEN
`,擋修說明:"",課程限制說明:"【上學期原修木屬藝術與設計三JAD 336300(李允文老師)同學選課優先,第3次選課起開放】",第一二專長對應:"工藝設計與文創(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"藝設系109BB 選修	"},{科號:"11120JAD 336900",課程中文名稱:"金屬藝術與設計四",課程英文名稱:"Metal Art and Design Ⅳ",學分數:"3",人限:"10",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"設計組專業主修",停開註記:"",教室與上課時間:`Nanda南大8409	M2M3M4
`,授課教師:`江怡瑩	CHIANG, I-YING
`,擋修說明:"",課程限制說明:"【上學期原修金屬藝術與設計三JAD 336400(江怡瑩老師)同學選課優先,第3次選課起開放】",第一二專長對應:"工藝設計與文創(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"藝設系109BB 選修	"},{科號:"11120JAD 337000",課程中文名稱:"玻璃藝術與設計四",課程英文名稱:"Glass Art and Design Ⅳ",學分數:"3",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"設計組專業主修",停開註記:"",教室與上課時間:`Nanda南大8322	W2W3W4
`,授課教師:`蕭銘芚	SHIAU, MING-TWEN
`,擋修說明:"",課程限制說明:"【上學期原修玻璃藝術與設計三JAD 336500(蕭銘芚老師)同學選課優先,第3次選課起開放】",第一二專長對應:"工藝設計與文創(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"藝設系109BB 選修	"},{科號:"11120JAD 337700",課程中文名稱:"陶瓷窯爐與燒成",課程英文名稱:"Kilns and Firing",學分數:"2",人限:"15",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"設計組專業副修",停開註記:"",教室與上課時間:`Nanda南大8209	R5R6
`,授課教師:`林瑞龍	LIN,JUI-LUNG
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>陶瓷藝術與設計三-成績需D以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"【上學期原修陶瓷藝術與設計三JAD 336200(施富錡老師)同學選課優先,第3次選課起開放】",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"藝設系109BB 選修	"},{科號:"11120JAD 337800",課程中文名稱:"木屬動態裝置設計",課程英文名稱:"Design of Wood Dynamic Device",學分數:"2",人限:"15",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"設計組專業副修",停開註記:"",教室與上課時間:`Nanda南大8109	R8R9
`,授課教師:`潘力瑋	PAN, LI-WEI
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>木屬藝術與設計三-成績需D以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"【上學期原修木屬藝術與設計三JAD 336300(李允文老師)同學選課優先,第3次選課起開放】",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"藝設系109BB 選修	"},{科號:"11120JAD 337900",課程中文名稱:"鑄造與鍛造",課程英文名稱:"Casting and Forging",學分數:"2",人限:"15",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"設計組專業副修",停開註記:"",教室與上課時間:`Nanda南大8409	W3W4
`,授課教師:`呂浴珊	LU,YU-SHAN
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>金屬藝術與設計三-成績需D以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"【上學期原修金屬藝術與設計三JAD 336400(江怡瑩老師)同學選課優先,第3次選課起開放】",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"藝設系109BB 選修	"},{科號:"11120JAD 339300",課程中文名稱:"纖維藝術",課程英文名稱:"Fiber Art",學分數:"2",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"設計組專業副修",停開註記:"",教室與上課時間:`Nanda南大8203	R5R6
`,授課教師:`陳芯瑤	CHEN, HSIN-YAO
`,擋修說明:"",課程限制說明:"藝設系大學部優先，第3次選課起開放全校修習",第一二專長對應:"工藝設計與文創(第二專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"藝設系109BB 選修	"},{科號:"11120JAD 421400",課程中文名稱:"畢業製作二",課程英文名稱:"Graduation Project II",學分數:"2",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"創作組必修",停開註記:"",教室與上課時間:`Nanda南大8201	S2S3
`,授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"【上學期原修畢業製作一JAD 421300(指導教授老師)同學選課優先,第3次選課起開放】",第一二專長對應:"藝術創作(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"藝設系108BA 必修	"},{科號:"11120JAD 426000",課程中文名稱:"藝術行政專題",課程英文名稱:"Study of Arts Administration",學分數:"2",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"創作組選修，授課教師:張正霖",停開註記:"",教室與上課時間:`Nanda南大8201	W5W6
`,授課教師:`聘任中	
`,擋修說明:"",課程限制說明:"藝設系大學部4年級優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"藝設系108BA 選修	"},{科號:"11120JAD 426100",課程中文名稱:"藝術職涯",課程英文名稱:"Artistic Career Planning",學分數:"2",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"創作組選修，授課教師:陳松志",停開註記:"",教室與上課時間:`Nanda南大8203	F5F6
`,授課教師:`聘任中	
`,擋修說明:"",課程限制說明:"藝設系大學部4年級優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"藝設系108BA 選修	"},{科號:"11120JAD 429800",課程中文名稱:"現代水墨創作二",課程英文名稱:"Modern Chinese Ink Painting II",學分數:"2",人限:"45",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"創作組專業選修",停開註記:"",教室與上課時間:`Nanda南大8213	W7W8
`,授課教師:`吳鎮中	WU, CHEN-CHUNG
`,擋修說明:`<div>
  擋修對象 : 藝設系 <br>
  先修科目 : <BR><BR>現代水墨創作一-成績需D以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"【上學期原修現代水墨創作一JAD 429400(吳鎮中老師)同學選課優先,第3次選課起開放】",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"藝設系108BA 選修	"},{科號:"11120JAD 431500",課程中文名稱:"設計畢業製作二",課程英文名稱:"Graduate Project in Design II",學分數:"2",人限:"41",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"設計組必修",停開註記:"",教室與上課時間:`Nanda南大8102	S2S3
`,授課教師:`指導教授	
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>設計畢業製作一-成績需D以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"【上學期原修設計畢業製作一JAD 431300(指導教授老師)同學選課優先,第3次選課起開放】",第一二專長對應:"工藝設計與文創(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"藝設系108BB 必修	"},{科號:"11120JAD 431600",課程中文名稱:"畢業展演實務二",課程英文名稱:"Graduate Exhibition Practice II",學分數:"2",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"設計組必修",停開註記:"",教室與上課時間:`Nanda南大8203	F3F4
`,授課教師:`謝翠如	HSIEH, TSUEI-JU
施富錡	SHIH, FU-CHI
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>畢業展演實務一-成績需D以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"【上學期原修畢業展演實務一JAD 431400(施富錡,謝翠如老師)同學選課優先,第3次選課起開放】",第一二專長對應:"工藝設計與文創(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"藝設系108BB 必修	"},{科號:"11120JAD 439500",課程中文名稱:"文創設計與跨域創業實務",課程英文名稱:"Cultural Creative Design and Interdisciplinary Business Practice",學分數:"2",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"設計組專業輔助",停開註記:"",教室與上課時間:`Nanda南大8313	R5R6
`,授課教師:`施富錡	SHIH, FU-CHI
李允文	LEE, YUN-WEN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"工藝設計與文創(第二專長)",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120JAD 510300",課程中文名稱:"論文研討一",課程英文名稱:"Seminar on Thesis I",學分數:"1",人限:"12",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"理論組必修",停開註記:"",教室與上課時間:`Nanda南大8313	T8
`,授課教師:`高榮禧	KAO, JUNG-HSI
`,擋修說明:"",課程限制說明:"藝設系碩士班優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"藝設系111M  必修	"},{科號:"11120JAD 515400",課程中文名稱:"影像傳達藝術研究",課程英文名稱:"Study of Image Communication",學分數:"3",人限:"18",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"理論組專業選",停開註記:"",教室與上課時間:`Nanda南大8216	T5T6T7
`,授課教師:`余季音	Yu, Chi-Ying
`,擋修說明:"",課程限制說明:"藝設系碩士班優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"藝設系111M  選修	"},{科號:"11120JAD 515600",課程中文名稱:"視覺文化研究法",課程英文名稱:"Research Methodology on Visual Culture",學分數:"3",人限:"18",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"理論組專業選",停開註記:"",教室與上課時間:`Nanda南大8216	R5R6R7
`,授課教師:`余季音	Yu, Chi-Ying
`,擋修說明:"",課程限制說明:"藝設系碩士班優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"藝設系111M  選修	"},{科號:"11120JAD 520200",課程中文名稱:"創作研究方法與學術寫作二",課程英文名稱:"Methodology of Art Research and Writing II",學分數:"2",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"創作組必修",停開註記:"",教室與上課時間:`Nanda南大8313	W7W8
`,授課教師:`梁莉苓	LIANG, LI-LING
`,擋修說明:"",課程限制說明:"藝設系碩士班優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"藝設系111M  必修	"},{科號:"11120JAD 525600",課程中文名稱:"台灣藝術史專題研究",課程英文名稱:"The Seminar on Taiwanese Art History",學分數:"3",人限:"12",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"創作組選修 / 本課程為16週課程",停開註記:"",教室與上課時間:`Nanda南大8319	M2M3M4
`,授課教師:`張晴文	CHANG, CHING-WEN
`,擋修說明:"",課程限制說明:"藝設系碩士班優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"藝設系111M  選修	"},{科號:"11120JAD 525700",課程中文名稱:"創作專題：藝術語言與圖式",課程英文名稱:"Research Topics of Visual Art: Visual Language and Pictorial Schemata",學分數:"3",人限:"12",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"創作組選修",停開註記:"",教室與上課時間:`Nanda南大8319	R2R3R4
`,授課教師:`吳宇棠	WU, YU-TANG
`,擋修說明:"",課程限制說明:"藝設系碩士班優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"藝設系111M  選修	"},{科號:"11120JAD 530300",課程中文名稱:"論文選讀與設計論述研討",課程英文名稱:"Seminar on Selected Theses of Design",學分數:"2",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"工藝設計組必修",停開註記:"",教室與上課時間:`Nanda南大8313	T3T4
`,授課教師:`蕭銘芚	SHIAU, MING-TWEN
`,擋修說明:"",課程限制說明:"限藝設系碩士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"藝設系111M  必修	"},{科號:"11120JAD 530400",課程中文名稱:"英文學術寫作二",課程英文名稱:"Academic Writing by English II",學分數:"1",人限:"12",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"工藝組必修  奇數週上課",停開註記:"",教室與上課時間:`Nanda南大8313	R3R4
`,授課教師:`蔡慧瑾	TSAI, HUI-CHIN
`,擋修說明:"",課程限制說明:"藝設系碩士班優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"藝設系111M  必修	"},{科號:"11120JAD 535900",課程中文名稱:"金屬藝術與設計研究二",課程英文名稱:"Study of Metal Arts and Design II",學分數:"3",人限:"10",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"專業主修-選修",停開註記:"",教室與上課時間:`Nanda南大8409	W5W6W7
`,授課教師:`黃照津	HUANG,JAW-JIN
`,擋修說明:"",課程限制說明:"藝設系碩士班優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"藝設系111M  選修	"},{科號:"11120JAD 536100",課程中文名稱:"媒材與造形設計研究",課程英文名稱:"Study of Design Material and Form",學分數:"3",人限:"15",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"專業輔助-選修",停開註記:"",教室與上課時間:`Nanda南大8409	M5M6M7
`,授課教師:`江怡瑩	CHIANG, I-YING
`,擋修說明:"",課程限制說明:"藝設系碩士班優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"藝設系111M  選修	"},{科號:"11120JAD 536200",課程中文名稱:"科技輔助設計研究",課程英文名稱:"Study of Technology Aided Desigh",學分數:"3",人限:"15",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"專業輔助-選修",停開註記:"",教室與上課時間:`Nanda南大9308	M2M3M4
`,授課教師:`李允文	LEE, YUN-WEN
`,擋修說明:"",課程限制說明:"藝設系碩士班優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"藝設系111M  選修	"},{科號:"11120JAD 536400",課程中文名稱:"品牌企劃與行銷研究",課程英文名稱:"Study of Brand Planning and Marketing",學分數:"3",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"專業輔助選修",停開註記:"",教室與上課時間:`Nanda南大8216	F7F8F9
`,授課教師:`謝翠如	HSIEH, TSUEI-JU
`,擋修說明:"",課程限制說明:"藝設系碩士班優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"藝設系111M  選修	"},{科號:"11120JAD 615800",課程中文名稱:"西洋藝術史專題研究",課程英文名稱:"Study of Western Art History",學分數:"3",人限:"15",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"組專業選修",停開註記:"",教室與上課時間:`Nanda南大8319	T2T3T4
`,授課教師:`高榮禧	KAO, JUNG-HSI
`,擋修說明:"",課程限制說明:"藝設系碩士班優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"藝設系111M  選修	"},{科號:"11120JAD 616300",課程中文名稱:"視覺與藝術社會學專題研究",課程英文名稱:"Study of Sociology of Visual Art",學分數:"3",人限:"12",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"理論組專業選修",停開註記:"",教室與上課時間:`Nanda南大8319	M5M6M7
`,授課教師:`聘任中	
`,擋修說明:"",課程限制說明:"藝設系碩士班優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"藝設系111M  選修	"},{科號:"11120JAD 626100",課程中文名稱:"創作專題：創作方法與脈絡",課程英文名稱:"Research Topics of Visual Art: Creating Method and Context",學分數:"3",人限:"12",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"創作組選修",停開註記:"",教室與上課時間:`Nanda南大8319	R5R6R7
`,授課教師:`胡以誠	HU, YI-CHENG
`,擋修說明:"",課程限制說明:"藝設系碩士班優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"藝設系111M  選修	"},{科號:"11120JAD 626500",課程中文名稱:"女性藝術專題研究",課程英文名稱:"Study of Women's Art",學分數:"3",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"創作組選修",停開註記:"",教室與上課時間:`Nanda南大8313	W2W3W4
`,授課教師:`謝鴻均	SHIEH, HONG-JUIN
`,擋修說明:"",課程限制說明:"藝設系碩士班優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"藝設系111M  選修	"},{科號:"11120JAD 626600",課程中文名稱:"藝術與人文專題研究",課程英文名稱:"Study of Arts and Humanity",學分數:"3",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"創作組選修",停開註記:"",教室與上課時間:`Nanda南大8313	R8R9Ra
`,授課教師:`彭佳慧	PENG,JIA-HUEI
`,擋修說明:"",課程限制說明:"藝設系碩士班優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"藝設系111M  選修	"},{科號:"11120JAD 626900",課程中文名稱:"複合媒材創作研究",課程英文名稱:"Study of Mixed Media",學分數:"3",人限:"18",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"創作組選修",停開註記:"",教室與上課時間:`Nanda南大8216	T2T3T4
`,授課教師:`黃銘祝	HUANG, MING-CHU
`,擋修說明:"",課程限制說明:"藝設系碩士班優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"藝設系111M  選修	"},{科號:"11120JAD 627000",課程中文名稱:"當代文化講座",課程英文名稱:"Lecture of Contemporary Culture",學分數:"3",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"創作組選修",停開註記:"",教室與上課時間:`Nanda南大8313	WnW5W6
`,授課教師:`謝鴻均	SHIEH, HONG-JUIN
`,擋修說明:"",課程限制說明:"藝設系碩士班優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"藝設系111M  選修	"},{科號:"11120JAD 636700",課程中文名稱:"產業連結與國際參與研究(競賽/展演/研討會)",課程英文名稱:"Study of Industry Connections and International Participations",學分數:"3",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"專業輔助選修",停開註記:"",教室與上課時間:`Nanda南大8203	T5T6T7
`,授課教師:`謝翠如	HSIEH, TSUEI-JU
`,擋修說明:"",課程限制說明:"藝設系碩士班優先，第3次選課起開放全校修習",第一二專長對應:"工藝設計與文創(第二專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"藝設系111M  選修	"},{科號:"11120JANT510400",課程中文名稱:"創作實踐方法",課程英文名稱:"Method on Creative Practice",學分數:"3",人限:"10",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`Nanda南大C302	RnR5R6
`,授課教師:`潘正育	PAN, CHENG-YU
`,擋修說明:"",課程限制說明:"科藝所優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"科藝所111M  必修	"},{科號:"11120JANT520200",課程中文名稱:"數位美學",課程英文名稱:"Digital aesthetics",學分數:"3",人限:"10",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`Nanda南大C308	W2W3W4
`,授課教師:`邱誌勇	CHIU, CHIH-YUNG
`,擋修說明:"",課程限制說明:"科藝所優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"科藝所111M  選修	"},{科號:"11120JANT520300",課程中文名稱:"生物藝術與生物倫理",課程英文名稱:"BioArt and Bioethics",學分數:"3",人限:"10",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`Nanda南大C301	R8R9Ra
`,授課教師:`曹存慧	THERESA TSUN-HUI TSAO
`,擋修說明:"",課程限制說明:"科藝所優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"科藝所111M  選修	"},{科號:"11120JANT530100",課程中文名稱:"當代聲響藝術理論與實作",課程英文名稱:"Contemporary Sound Art",學分數:"3",人限:"8",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"研究所一年級、大學部四年級具有影音軟體基礎之學生",停開註記:"",教室與上課時間:`Nanda南大C308	W5W6W7
`,授課教師:`柯宜均	KO, YI-CHUN
`,擋修說明:"",課程限制說明:"科藝所優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"科藝所111M  選修	"},{科號:"11120JITA110400",課程中文名稱:"數位自造",課程英文名稱:"Digital Fabrication",學分數:"3",人限:"35",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"加退選期間不受理線上加選此門課程，若欲選課得以加簽方式辦理",停開註記:"",教室與上課時間:`Nanda南大2304	W7W8W9
`,授課教師:`蔡奇宏	TSAI, CHI-HUNG
`,擋修說明:"",課程限制說明:"限藝術學院學士班大學部1年級",第一二專長對應:"科技藝術(第二專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"藝術學院學士班111B  必修	"},{科號:"11120JITA110500",課程中文名稱:"數位影像創作",課程英文名稱:"Digital Image Creation",學分數:"3",人限:"35",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:"",授課教師:`陳依純	CHEN, I-CHUN
`,擋修說明:"",課程限制說明:"藝術學院學士班大學部1年級優先，第3次選課起開放全校修習",第一二專長對應:"科技藝術(第二專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"藝術學院學士班111B  必修	"},{科號:"11120JITA110600",課程中文名稱:"微電子互動創作",課程英文名稱:"Micro Electronic Creation",學分數:"3",人限:"25",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"加退選期間不受理線上加選此門課程，若欲選課得以加簽方式辦理",停開註記:"",教室與上課時間:`Nanda南大2304	F7F8F9
`,授課教師:`江振維	CHIANG, CHEN-WEI
`,擋修說明:"",課程限制說明:"限藝術學院學士班",第一二專長對應:"科技藝術(第二專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"藝術學院學士班111B  選修	"},{科號:"11120JITA130100",課程中文名稱:"基礎造形",課程英文名稱:"Basic Principle of Formation",學分數:"3",人限:"25",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"加退選期間不受理線上加選此門課程，若欲選課得以加簽方式辦理",停開註記:"",教室與上課時間:`Nanda南大C308	T7T8T9
`,授課教師:`黃贊倫	HUANG,TSAN LUN
`,擋修說明:"",課程限制說明:"限藝術學院學士班大學部",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"藝術學院學士班111B  選修	"},{科號:"11120JITA220400",課程中文名稱:"移動通訊程式設計",課程英文名稱:"Mobile Application Design and Programming",學分數:"3",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:"",授課教師:`游創文	YOU, CHUANG-WEN
`,擋修說明:"",課程限制說明:"藝術學院學士班優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"(跨領域)創新設計學分學程",不可加簽說明:"",必選修說明:"藝術學院學士班110B  選修	"},{科號:"11120JITA220600",課程中文名稱:"生物藝術概論",課程英文名稱:"Introduction of BioArt",學分數:"3",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`Nanda南大C301	T2T3T4
`,授課教師:`曹存慧	THERESA TSUN-HUI TSAO
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>未修過生物藝術：生命科學在藝術中的討論與應用<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"藝術學院學士班大學部優先，第3次選課起開放全校修習",第一二專長對應:"科技藝術(第二專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"藝術學院學士班111B  選修	"},{科號:"11120JITA220800",課程中文名稱:"基礎3D建模即時互動",課程英文名稱:"Real-time interaction for basic 3D modeling",學分數:"3",人限:"35",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"加退選期間不受理線上加選此門課程，若欲選課得以加簽方式辦理",停開註記:"",教室與上課時間:"",授課教師:`聘任中	
`,擋修說明:"",課程限制說明:"藝術學院學士班大學部2年級優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"藝術學院學士班110B  選修	"},{科號:"11120JITA230200",課程中文名稱:"生物藝術虛實研究",課程英文名稱:"The Fiction and Realization of BioArt",學分數:"3",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"建議修過生物藝術概論或生物科技與藝術者優先選課",停開註記:"",教室與上課時間:`Nanda南大C301	RnR5R6
`,授課教師:`聘任中	
`,擋修說明:"",課程限制說明:"藝術學院學士班大學部優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"藝術學院學士班110B  選修	"},{科號:"11120JITA231200",課程中文名稱:"3D 虛擬影像即時互動",課程英文名稱:"3D real-time interaction for Virtual Reality",學分數:"3",人限:"25",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"加退選期間不受理線上加選此門課程，若欲選課得以加簽方式辦理",停開註記:"",教室與上課時間:"",授課教師:`周小淨	CHOU, HSIAO-CHING
`,擋修說明:"",課程限制說明:"藝術學院學士班大學部2年級優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"藝術學院學士班110B  選修	"},{科號:"11120JITA231300",課程中文名稱:"生物藝術：生命科學在藝術中的討論與應用",課程英文名稱:"BioArt: The Discussion and Application of Life Sciences in Art",學分數:"3",人限:"85",新生保留人數:"0",通識對象:"*7",通識類別:"人文學領域 Elective GE course: Humanities",授課語言:"中",備註:"生物藝術概論與本課程，只能擇一選修",停開註記:"",教室與上課時間:`EDU教   305	T7T8T9
`,授課教師:`曹存慧	THERESA TSUN-HUI TSAO
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>未修過生物藝術概論<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"排除藝術學院學士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"藝術學院學士班110B  選修	"},{科號:"11120JITA231400",課程中文名稱:"創作企劃",課程英文名稱:"Planning skills of Creations",學分數:"3",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`Nanda南大2304	R7R8R9
`,授課教師:`盂施甫	YU, SHIH-FU
`,擋修說明:"",課程限制說明:"限藝術學院學士班大學部",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"藝術學院學士班110B  選修	"},{科號:"11120JITA231500",課程中文名稱:"虛擬實境藝術賞析",課程英文名稱:"Appreciation of Virtual Reality Art",學分數:"3",人限:"12",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`Nanda南大C312	F5F6F7
`,授課教師:`柯宜均	KO, YI-CHUN
`,擋修說明:"",課程限制說明:"藝術學院學士班大學部2年級優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"藝術學院學士班110B  選修	"},{科號:"11120JITA310100",課程中文名稱:"科技藝術實習",課程英文名稱:"Internship of arts in technology",學分數:"2",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:"",授課教師:`邱誌勇	CHIU, CHIH-YUNG
`,擋修說明:"",課程限制說明:"限藝術學院學士班2年級3年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"藝術學院學士班109B  必修	藝術學院學士班110B  必修	"},{科號:"11120JITA320300",課程中文名稱:"仿生藝術專題",課程英文名稱:"Projects in Bionic art",學分數:"3",人限:"8",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`Nanda南大C301	F7F8F9
`,授課教師:`黃致傑	HUANG, CHIH-CHIEH
`,擋修說明:"",課程限制說明:"限藝術學院學士班大學部3年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"藝術學院學士班109B  選修	"},{科號:"11120JITA320700",課程中文名稱:"人工生命與藝術專題",課程英文名稱:"Projects in Artificial Life and  Art",學分數:"3",人限:"8",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`Nanda南大C302	F7F8F9
`,授課教師:`聘任中	
`,擋修說明:"",課程限制說明:"限藝術學院學士班大學部3年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"藝術學院學士班109B  選修	"},{科號:"11120JITA320800",課程中文名稱:"創新科技專題",課程英文名稱:"Projects in Emerging Technology",學分數:"3",人限:"8",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`Nanda南大C308	F7F8F9
`,授課教師:`潘正育	PAN, CHENG-YU
`,擋修說明:"",課程限制說明:"限藝術學院學士班大學部3年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"藝術學院學士班109B  選修	"},{科號:"11120JITA330100",課程中文名稱:"科技與藝術實驗",課程英文名稱:"Technology and Art Experiment",學分數:"3",人限:"24",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`Nanda南大C302	W7W8W9
`,授課教師:`潘正育	PAN, CHENG-YU
`,擋修說明:"",課程限制說明:"藝術學院學士班3年級優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"藝術學院學士班109B  選修	"},{科號:"11120JITA330300",課程中文名稱:"聲音設計",課程英文名稱:"Sound Design",學分數:"3",人限:"12",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`Nanda南大C301	T5T6T7
`,授課教師:`柯宜均	KO, YI-CHUN
`,擋修說明:"",課程限制說明:"藝術學院學士班大學部3年級優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"藝術學院學士班109B  選修	"},{科號:"11120JITA410200",課程中文名稱:"畢業製作二",課程英文名稱:"Graduation Project II",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"限藝術學院學士班大學部4年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"藝術學院學士班108B  必修	"},{科號:"11120JMU 100201",課程中文名稱:"音樂基礎訓練二",課程英文名稱:"Musicianship II",學分數:"2",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"此課程已於上學期實施分班測驗，請依分班結果選課。",停開註記:"",教室與上課時間:`NANDA南6A202	T1T2
`,授課教師:`馮麗朱	FENG,LI-CHU
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>音樂基礎訓練一-成績需C-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"",第一二專長對應:"音樂(第二專長)	音樂(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"藝術學院學士班111B  必修	音樂系111B  必修	"},{科號:"11120JMU 100202",課程中文名稱:"音樂基礎訓練二",課程英文名稱:"Musicianship II",學分數:"2",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"此課程已於上學期實施分班測驗，請依分班結果選課。",停開註記:"",教室與上課時間:`NANDA南6A202	T3T4
`,授課教師:`馮麗朱	FENG,LI-CHU
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>音樂基礎訓練一-成績需C-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"",第一二專長對應:"音樂(第二專長)	音樂(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"藝術學院學士班111B  必修	音樂系111B  必修	"},{科號:"11120JMU 100203",課程中文名稱:"音樂基礎訓練二",課程英文名稱:"Musicianship II",學分數:"2",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"此課程已於上學期實施分班測驗，請依分班結果選課。",停開註記:"",教室與上課時間:`NANDA南6A202	T5T6
`,授課教師:`馮麗朱	FENG,LI-CHU
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>音樂基礎訓練一-成績需C-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"",第一二專長對應:"音樂(第二專長)	音樂(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"藝術學院學士班111B  必修	音樂系111B  必修	"},{科號:"11120JMU 100401",課程中文名稱:"基礎和聲學二",課程英文名稱:"Tonal Harmony II",學分數:"2",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"此課程已於上學期實施分班測驗，請依分班結果選課。",停開註記:"",教室與上課時間:`NANDA南6A202	F5F6
`,授課教師:`馮麗朱	FENG,LI-CHU
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>基礎和聲學一-成績需C-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"",第一二專長對應:"音樂(第二專長)	音樂(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"藝術學院學士班111B  必修	音樂系111B  必修	"},{科號:"11120JMU 100402",課程中文名稱:"基礎和聲學二",課程英文名稱:"Tonal Harmony II",學分數:"2",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"此課程已於上學期實施分班測驗，請依分班結果選課。",停開註記:"",教室與上課時間:`NANDA南6A103	F5F6
`,授課教師:`施梅紛	SHIH, MEI-FEN
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>基礎和聲學一-成績需C-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"",第一二專長對應:"音樂(第二專長)	音樂(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"藝術學院學士班111B  必修	音樂系111B  必修	"},{科號:"11120JMU 100600",課程中文名稱:"中國音樂史",課程英文名稱:"History of Chinese Music",學分數:"2",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`NANDA南6A202	M3M4
`,授課教師:`楊佈光	YANG, BU-KUANG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"音樂系111B  選修	"},{科號:"11120JMU 100800",課程中文名稱:"主修",課程英文名稱:"Major Music Instruction",學分數:"1",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本科目加退選結束前，由系辦公室排定主修課指導老師，並繳交音樂指導費",停開註記:"",教室與上課時間:`NANDA南6A102	S1
`,授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"限音樂系大學部",第一二專長對應:"音樂(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"藝術學院學士班110B  必修	藝術學院學士班111B  必修	音樂系108B  必修	音樂系109B  必修	音樂系110B  必修	音樂系111B  必修	"},{科號:"11120JMU 101400",課程中文名稱:"跨領域表演技巧二",課程英文名稱:"Introduction to Musical Instruments II",學分數:"2",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`NANDB南6B201	M5M6
`,授課教師:`張育嘉	Jocelyn Yuchia Chang
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"音樂系111B  選修	"},{科號:"11120JMU 101600",課程中文名稱:"雙鋼琴",課程英文名稱:"Piano Duo",學分數:"1",人限:"16",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`NANDB南6B405	S5S6
`,授課教師:`程瓊瑩	CHENG, CHIUNG-YING
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>四手聯彈-成績需C-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"限音樂系",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"音樂系111B  選修	"},{科號:"11120JMU 102100",課程中文名稱:"管絃樂合奏",課程英文名稱:"Orchestra",學分數:"2",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"一至四年級合班上課,該課程須視樂團編制調整各樂器人數",停開註記:"",教室與上課時間:`NANDB南6B101	MaMbWaWb
`,授課教師:`黃東漢	HUANG,TON-HAN
`,擋修說明:"",課程限制說明:"限音樂系",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"音樂系108B  選修	音樂系109B  選修	音樂系110B  選修	音樂系111B  選修	"},{科號:"11120JMU 102300",課程中文名稱:"管樂合奏",課程英文名稱:"Wind Ensemble",學分數:"1",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"一至四年級合班上課。",停開註記:"",教室與上課時間:`NANDB南6B101	RaRbRc
`,授課教師:`鄭哲男	CHENG, CHE-NAN
`,擋修說明:"",課程限制說明:"限音樂系",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"音樂系108B  選修	音樂系109B  選修	音樂系110B  選修	音樂系111B  選修	"},{科號:"11120JMU 102500",課程中文名稱:"絃樂合奏",課程英文名稱:"String Ensemble",學分數:"1",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"一至四年級合班上課。",停開註記:"",教室與上課時間:`NANDB南6B101	TaTbTc
`,授課教師:`杜沁澐	TU,CHING-YUN
`,擋修說明:"",課程限制說明:"限音樂系",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"音樂系108B  選修	音樂系109B  選修	音樂系110B  選修	音樂系111B  選修	"},{科號:"11120JMU 102701",課程中文名稱:"合唱",課程英文名稱:"Chorus",學分數:"1",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"一年級選修。",停開註記:"",教室與上課時間:`NANDB南6B101	R7R8
`,授課教師:`楊宜真	YANG, I-CHEN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"音樂(第二專長)	音樂(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"藝術學院學士班111B  必修	音樂系111B  選修	"},{科號:"11120JMU 102702",課程中文名稱:"合唱",課程英文名稱:"Chorus",學分數:"1",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"2至4年級選修",停開註記:"",教室與上課時間:`NANDB南6B101	R5R6
`,授課教師:`楊宜真	YANG, I-CHEN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"音樂(第二專長)	音樂(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"藝術學院學士班110B  必修	音樂系108B  選修	音樂系109B  選修	音樂系110B  選修	"},{科號:"11120JMU 103000",課程中文名稱:"選修樂器二",課程英文名稱:"Selected Instrument/Voice II",學分數:"1",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本科目加退選結束前，須由系辦排定選修樂器指導老師，並在第二階段繳交全學年音樂指導費",停開註記:"",教室與上課時間:`NANDA南6A102	S2
`,授課教師:`授課教師	
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>曾修選修樂器一<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"限音樂系",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"音樂系111B  選修	"},{科號:"11120JMU 103200",課程中文名稱:"直笛合奏二",課程英文名稱:"Recorder Ensemble II",學分數:"1",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`NANDB南6B101	W5W6
`,授課教師:`楊佈光	YANG, BU-KUANG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"音樂系111B  選修	"},{科號:"11120JMU 103300",課程中文名稱:"擊樂室內樂",課程英文名稱:"Chamber Music: Percussion",學分數:"1",人限:"15",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限主修打擊,學士班及碩士班打擊主修必選。",停開註記:"",教室與上課時間:`NANDA南6A6000	W7W8
`,授課教師:`張覺文	CHANG, JUIE-WEN
`,擋修說明:"",課程限制說明:"限音樂系",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"音樂系111B  選修	"},{科號:"11120JMU 104100",課程中文名稱:"文藝復興木笛樂團",課程英文名稱:"Renaissance Recorder Consort",學分數:"1",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"木笛主修必選課程。",停開註記:"",教室與上課時間:`NANDB南6B201	T9Ta
`,授課教師:`陳孟亨	CHEN, MENG-HENG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"音樂系111B  選修	"},{科號:"11120JMU 104501",課程中文名稱:"室內樂",課程英文名稱:"Chamber Music",學分數:"1",人限:"0",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"需先聯繫授課教師後線上加簽課程",停開註記:"",教室與上課時間:`NANDA南6A102	S3S4
`,授課教師:`許詠傑	HSU,YUNG-CHIEH
婭力木	 
`,擋修說明:"",課程限制說明:"限音樂系",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"音樂系108B  選修	音樂系109B  選修	音樂系110B  選修	音樂系111B  選修	"},{科號:"11120JMU 104502",課程中文名稱:"室內樂",課程英文名稱:"Chamber Music",學分數:"1",人限:"0",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"需先聯繫授課教師後線上加簽課程",停開註記:"",教室與上課時間:`NANDA南6A103	S3S4
`,授課教師:`鄭哲男	CHENG, CHE-NAN
`,擋修說明:"",課程限制說明:"限音樂系",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"音樂系108B  選修	音樂系109B  選修	音樂系110B  選修	音樂系111B  選修	"},{科號:"11120JMU 104503",課程中文名稱:"室內樂",課程英文名稱:"Chamber Music",學分數:"1",人限:"0",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"需先聯繫授課教師後線上加簽課程",停開註記:"",教室與上課時間:`NANDA南6A202	S3S4
`,授課教師:`徐子儀	HSU TZU YI
宋光清	SUNG,KUANG-CHING
`,擋修說明:"",課程限制說明:"限音樂系",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"音樂系108B  選修	音樂系109B  選修	音樂系110B  選修	音樂系111B  選修	"},{科號:"11120JMU 104504",課程中文名稱:"室內樂",課程英文名稱:"Chamber Music",學分數:"1",人限:"0",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"需先聯繫授課教師後線上加簽課程",停開註記:"",教室與上課時間:`NANDB南6B301	S3S4
`,授課教師:`許詠傑	HSU,YUNG-CHIEH
蔡秉璋	TSAI, PING-CHANG
`,擋修說明:"",課程限制說明:"限音樂系",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"音樂系108B  選修	音樂系109B  選修	音樂系110B  選修	音樂系111B  選修	"},{科號:"11120JMU 104505",課程中文名稱:"室內樂",課程英文名稱:"Chamber Music",學分數:"1",人限:"0",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"需先聯繫授課教師後線上加簽課程",停開註記:"",教室與上課時間:`NANDA南6A102	S5S6
`,授課教師:`大下詩央	OHSHITA, SHIO
`,擋修說明:"",課程限制說明:"限音樂系",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"音樂系108B  選修	音樂系109B  選修	音樂系110B  選修	音樂系111B  選修	"},{科號:"11120JMU 104800",課程中文名稱:"語韻學二",課程英文名稱:"Diction Ⅱ",學分數:"2",人限:"15",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"英韻",停開註記:"",教室與上課時間:`NANDB南6B301	T7T8
`,授課教師:`蕭涵	HSIAO, HAN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"音樂系111B  選修	"},{科號:"11120JMU 200201",課程中文名稱:"音樂基礎訓練四",課程英文名稱:"Musicianship IV",學分數:"2",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"此課程已於110學年度分班，請務必依分班結果選課。",停開註記:"",教室與上課時間:`NANDA南6A202	W3W4
`,授課教師:`蘇開儀	KAI-I SU
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>音樂基礎訓練三-成績需C-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"音樂系110B  選修	"},{科號:"11120JMU 200202",課程中文名稱:"音樂基礎訓練四",課程英文名稱:"Musicianship IV",學分數:"2",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"此課程已於110學年度分班，請務必依分班結果選課。",停開註記:"",教室與上課時間:`NANDA南6A202	W5W6
`,授課教師:`蘇開儀	KAI-I SU
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>音樂基礎訓練三-成績需C-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"音樂系110B  選修	"},{科號:"11120JMU 200400",課程中文名稱:"高級和聲學二",課程英文名稱:"Advanced Harmony II",學分數:"2",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`NANDA南6A103	R3R4
`,授課教師:`張琇琇	CHANG,HSIU-HSIU
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>高級和聲學一-成績需C-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"音樂系110B  選修	"},{科號:"11120JMU 200600",課程中文名稱:"對位法二",課程英文名稱:"Counterpoint II",學分數:"2",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`NANDA南6A102	T3T4
`,授課教師:`周久渝	CHOU, CHIU-YU
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>對位法一-成績需C-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"",第一二專長對應:"音樂(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"藝術學院學士班110B  必修	音樂系110B  必修	"},{科號:"11120JMU 200800",課程中文名稱:"西洋音樂史二",課程英文名稱:"History of Western Music II",學分數:"2",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"本課程為 16 週課程",停開註記:"",教室與上課時間:`NANDA南6A103	M3M4
`,授課教師:`沈雕龍	SHEN, DIAU-LONG
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>西洋音樂史一-成績需C-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"",第一二專長對應:"音樂(第二專長)	音樂(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"藝術學院學士班110B  必修	音樂系110B  必修	"},{科號:"11120JMU 201400",課程中文名稱:"鍵盤即興",課程英文名稱:"Keyboard Improvisation",學分數:"2",人限:"16",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`NANDA南6A103	F7F8
`,授課教師:`施梅紛	SHIH, MEI-FEN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"音樂系110B  選修	"},{科號:"11120JMU 202400",課程中文名稱:"編創劇場二",課程英文名稱:"Devised Theatre II",學分數:"3",人限:"20",新生保留人數:"0",通識對象:"*7",通識類別:"人文學領域 Elective GE course: Humanities",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`NANDB南6B101	M7M8M9
`,授課教師:`張育嘉	Jocelyn Yuchia Chang
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"音樂系110B  選修	"},{科號:"11120JMU 202600",課程中文名稱:"直笛合奏四",課程英文名稱:"Recorder Ensemble Ⅳ",學分數:"1",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`NANDB南6B101	M5M6
`,授課教師:`楊佈光	YANG, BU-KUANG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"音樂系110B  選修	"},{科號:"11120JMU 203800",課程中文名稱:"選修樂器四",課程英文名稱:"Selected Instrument/Voice IV",學分數:"1",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"加退選結束前由系辦排定選修樂器指導老師,並於加退選結束後繳交音樂指導費",停開註記:"",教室與上課時間:`NANDA南6A103	S2
`,授課教師:`授課教師	
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>曾修選修樂器三<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"限音樂系",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"音樂系110B  選修	"},{科號:"11120JMU 204600",課程中文名稱:"多媒體與音樂創作",課程英文名稱:"Multi-Media and Music Composition",學分數:"2",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`NANDA南6A103	M5M6
`,授課教師:`陳欣蕾	CHEN, HSIN-LEI
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"音樂系110B  選修	"},{科號:"11120JMU 300200",課程中文名稱:"對位法四",課程英文名稱:"Counterpoint IV",學分數:"2",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`NANDA南6A103	T5T6
`,授課教師:`蘇凡凌	SU, FAN-LING
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>對位法三-成績需C-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"音樂系109B  選修	"},{科號:"11120JMU 300600",課程中文名稱:"曲式與分析二",課程英文名稱:"Musical Forms and Analysis II",學分數:"2",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`NANDA南6A102	M5M6
`,授課教師:`周久渝	CHOU, CHIU-YU
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>曲式與分析一-成績需C-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"",第一二專長對應:"音樂(第二專長)	音樂(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"音樂系109B  必修	"},{科號:"11120JMU 300700",課程中文名稱:"台灣戲曲賞析",課程英文名稱:"Taiwanese Drama Seminar",學分數:"2",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`NANDA南6A103	W3W4
`,授課教師:`楊佈光	YANG, BU-KUANG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"音樂系109B  選修	"},{科號:"11120JMU 302300",課程中文名稱:"選修樂器六",課程英文名稱:"Selected Instrument/Voice VI",學分數:"1",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本科目由系上排定指導教授, 並第二階段另繳個別指導實習費.",停開註記:"",教室與上課時間:`NANDA南6A202	S2
`,授課教師:`授課教師	
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>曾修選修樂器五<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"限音樂系",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"音樂系109B  選修	"},{科號:"11120JMU 302400",課程中文名稱:"西洋音樂史四",課程英文名稱:"History of Western Music IV",學分數:"2",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"本課程為 16 週課程",停開註記:"",教室與上課時間:`NANDA南6A103	T3T4
`,授課教師:`沈雕龍	SHEN, DIAU-LONG
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>西洋音樂史三-成績需C-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"",第一二專長對應:"音樂(第二專長)	音樂(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"音樂系109B  選修	"},{科號:"11120JMU 302500",課程中文名稱:"指揮法二",課程英文名稱:"Conducting Technique II",學分數:"2",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`NANDA南6A102	W7W8
`,授課教師:`黃東漢	HUANG,TON-HAN
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>指揮法一-成績需C-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"音樂系109B  選修	"},{科號:"11120JMU 302600",課程中文名稱:"鋼琴作品研究二",課程英文名稱:"Piano Literature II",學分數:"2",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`NANDA南6A102	F5F6
`,授課教師:`璩雅文	CHYU , YA-WEN
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>鋼琴作品研究一-成績需C-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"音樂系109B  選修	"},{科號:"11120JMU 302800",課程中文名稱:"鋼琴伴奏與實務二",課程英文名稱:"Piano Accompanying and practice II",學分數:"2",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`NANDA南6A102	W5W6
`,授課教師:`黃佳瑩	HUANG, CHIA-YING
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"音樂系109B  選修	"},{科號:"11120JMU 302900",課程中文名稱:"劇場排演實務",課程英文名稱:"Music and Drama Theatre",學分數:"3",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"週四由授課老師安排分組上課。",停開註記:"",教室與上課時間:`NANDB南6B201	S5S6S7
`,授課教師:`王秋雯	WANG, CHIU-WEN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"音樂系109B  選修	"},{科號:"11120JMU 303200",課程中文名稱:"亞力山大技巧二",課程英文名稱:"Alexander Technique Ⅱ",學分數:"2",人限:"25",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`NANDB南6B201	F3F4
`,授課教師:`羅潤蘋	LO, JUN-PING
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"音樂系109B  選修	"},{科號:"11120JMU 303300",課程中文名稱:"音樂美學",課程英文名稱:"Seminar of Music Aesthetics",學分數:"2",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"本課程為 16 週課程",停開註記:"",教室與上課時間:`NANDA南6A102	T5T6
`,授課教師:`沈雕龍	SHEN, DIAU-LONG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"音樂(第二專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"音樂系109B  選修	"},{科號:"11120JMU 303601",課程中文名稱:"鋼琴調音與基本維修",課程英文名稱:"Piano Tuning and Repair",學分數:"2",人限:"15",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本班為初階課程",停開註記:"",教室與上課時間:`NANDB南6B101	W1W2
`,授課教師:`許簡雙益	HSU CHIEN SHUANG I
`,擋修說明:"",課程限制說明:"音樂系優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"音樂系109B  選修	"},{科號:"11120JMU 303602",課程中文名稱:"鋼琴調音與基本維修",課程英文名稱:"Piano Tuning and Repair",學分數:"2",人限:"15",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本班為進階課程",停開註記:"",教室與上課時間:`NANDB南6B101	W3W4
`,授課教師:`許簡雙益	HSU CHIEN SHUANG I
`,擋修說明:"",課程限制說明:"音樂系優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"音樂系109B  選修	"},{科號:"11120JMU 400600",課程中文名稱:"管弦樂法二",課程英文名稱:"Orchestration Ⅱ",學分數:"2",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`NANDB南6B201	M3M4
`,授課教師:`陳欣蕾	CHEN, HSIN-LEI
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"音樂系108B  選修	"},{科號:"11120JMU 400800",課程中文名稱:"曲式與分析四",課程英文名稱:"Musical Forms and Analysis IV",學分數:"2",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`NANDA南6A103	R5R6
`,授課教師:`張琇琇	CHANG,HSIU-HSIU
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>曲式與分析三-成績需C-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"音樂系108B  選修	"},{科號:"11120JMU 401800",課程中文名稱:"選修樂器八",課程英文名稱:"Selected Instrument/Voice VIII",學分數:"1",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本科目由系上排定指導教授, 並第二階段另繳個別指導實習費",停開註記:"",教室與上課時間:`NANDA南6A6000	S2
`,授課教師:`授課教師	
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>曾修選修樂器七<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"限音樂系",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"音樂系108B  選修	"},{科號:"11120JMU 402000",課程中文名稱:"電影配樂概論",課程英文名稱:"Introduction to Film Music",學分數:"2",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`NANDA南6A103	T7T8
`,授課教師:`蘇凡凌	SU, FAN-LING
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"音樂系108B  選修	"},{科號:"11120JMU 402400",課程中文名稱:"音樂治療二",課程英文名稱:"Music Therapy II",學分數:"2",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`NANDA南6A103	F1F2
`,授課教師:`張乃文	CHANG,NAI-WEN
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>音樂治療一-成績需C-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"",第一二專長對應:"音樂(第二專長)",學分學程對應:"(跨領域)音樂科技與健康學分學程",不可加簽說明:"",必選修說明:"音樂系108B  選修	"},{科號:"11120JMU 402500",課程中文名稱:"進階鋼琴作品教學",課程英文名稱:"The Advanced Repertoire of Piano Peadagogy",學分數:"2",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`NANDA南6A103	W7W8
`,授課教師:`蔡青蓉	TSAI, CHING-JUNG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"音樂系108B  選修	"},{科號:"11120JMU 500300",課程中文名稱:"音樂產業創新與營運",課程英文名稱:"Innovation and Operation  for Music Industry",學分數:"2",人限:"45",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"上課教室在校本部,另行公布!",停開註記:"",教室與上課時間:`GEN II綜二205	R3R4
`,授課教師:`蘇郁惠	SU, YU-HUEI
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)音樂科技與健康學分學程",不可加簽說明:"",必選修說明:"音樂系111M  選修	"},{科號:"11120JMU 500800",課程中文名稱:"客家戲曲研究",課程英文名稱:"Hakka Drama Seminar",學分數:"2",人限:"15",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`NANDA南6A103	F3F4
`,授課教師:`楊佈光	YANG, BU-KUANG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"音樂系111M  選修	"},{科號:"11120JMU 500900",課程中文名稱:"主修",課程英文名稱:"Major Music Instruction",學分數:"1",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程由系辦排定授課教師,須另繳個別指導費",停開註記:"",教室與上課時間:`NANDA南6A202	S1
`,授課教師:`授課教師	
`,擋修說明:"",課程限制說明:"限音樂系碩士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"音樂系111M  選修	"},{科號:"11120JMU 501500",課程中文名稱:"流行音樂應用",課程英文名稱:"The Application of Pop music",學分數:"2",人限:"0",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程為線上加簽",停開註記:"",教室與上課時間:`Nanda南大2305	W6W7
`,授課教師:`蘇郁惠	SU, YU-HUEI
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)音樂科技與健康學分學程",不可加簽說明:"",必選修說明:"音樂系111M  選修	"},{科號:"11120JMU 501700",課程中文名稱:"客家山歌與八音研究二",課程英文名稱:"Research on Hakka Mountain Songs & Hakka Ba-Yin (Eight Sounds) II",學分數:"2",人限:"15",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`NANDB南6B103	T3T4
`,授課教師:`鄭榮興	 
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"音樂系111M  選修	"},{科號:"11120JMU 502400",課程中文名稱:"演奏實踐問題之探討二",課程英文名稱:"Performance Practice II",學分數:"2",人限:"25",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程為 16 週課程",停開註記:"",教室與上課時間:`NANDA南6A202	R3R4
`,授課教師:`杜沁澐	TU,CHING-YUN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"音樂系111M  選修	"},{科號:"11120JMU 502800",課程中文名稱:"室內樂二",課程英文名稱:"Chamber Music (II)",學分數:"2",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`NANDB南6B301	M5M6
`,授課教師:`蔡秉璋	TSAI, PING-CHANG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"音樂系111M  選修	"},{科號:"11120JMU 503800",課程中文名稱:"身體表演與劇場美學",課程英文名稱:"Theatre and Performance Studies",學分數:"2",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`NANDB南6B201	R7R8
`,授課教師:`劉淑英	LIU, SHU-YING
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"音樂系111M  選修	"},{科號:"11120JMU 504400",課程中文名稱:"Dalcroze教學法",課程英文名稱:"Dalcroze Method",學分數:"2",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`NANDA南6A102	R3R4
`,授課教師:`謝鴻鳴	SHIEH, HONG-MING
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"音樂系111M  選修	"},{科號:"11120JMU 504500",課程中文名稱:"論文研究",課程英文名稱:"Thesis",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"碩士生已修畢課程或當年度要提出口試者才須要選",停開註記:"",教室與上課時間:"",授課教師:`授課教師	
`,擋修說明:"",課程限制說明:"排除音樂系碩士班1年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"音樂系111M  必修	"},{科號:"11120JMU 504700",課程中文名稱:"巴洛克音樂理論與詮釋二",課程英文名稱:"Baroque Music:Performance and Practice  Interpretation II",學分數:"2",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`NANDA南6A202	T7T8
`,授課教師:`陳孟亨	CHEN, MENG-HENG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"音樂系111M  選修	"},{科號:"11120JMU 505200",課程中文名稱:"鋼琴教學與經營實務二",課程英文名稱:"Practical Piano Teaching and Career Management II",學分數:"2",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`NANDA南6A202	W7W8
`,授課教師:`王雨茵	WANG, YU-YIN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"音樂系111M  選修	"},{科號:"11120JMU 505600",課程中文名稱:"藝術管理與組織領導",課程英文名稱:"Arts Management and Leadership",學分數:"2",人限:"12",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限碩士班選修",停開註記:"",教室與上課時間:`NANDB南6B103	T5T6
`,授課教師:`王文儀	WEN-YI WANG
`,擋修說明:"",課程限制說明:"限藝術學院,碩士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"音樂系111M  選修	"},{科號:"11120JMU 506000",課程中文名稱:"音樂與劇場創意製作專題",課程英文名稱:"Seminar in Creative Concert Producing",學分數:"2",人限:"12",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限碩士生修習",停開註記:"",教室與上課時間:`NANDB南6B103	W5W6
`,授課教師:`王文儀	WEN-YI WANG
`,擋修說明:"",課程限制說明:"限藝術學院,碩士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"音樂系111M  選修	"},{科號:"11120JMU 506100",課程中文名稱:"歌劇研究方法導論",課程英文名稱:"Introduction to Methods of Opera Research",學分數:"2",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"停開",教室與上課時間:`NANDA南6A202	M5M6
`,授課教師:`沈雕龍	SHEN, DIAU-LONG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"音樂系111M  選修	"},{科號:"11120JMUN503000",課程中文名稱:"論文",課程英文名稱:"Thesis",學分數:"2",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限專班二年級以上修習",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"排除音樂系在職專班專班1年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"音樂系在職專班111P  必修	"},{科號:"11120KCSN600700",課程中文名稱:"論文",課程英文名稱:"Thesis",學分數:"2",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限專班二年級以上修習",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"學前特教在職學位學程111P  必修	"},{科號:"11120KEC 501300",課程中文名稱:"環境政策與社會",課程英文名稱:"Environmental Policy and the Society",學分數:"3",人限:"55",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`Nanda南大9122	W5W6W7
`,授課教師:`鄭國泰	CHENG, KUO-TAI
`,擋修說明:"",課程限制說明:"環文系碩士班優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"(跨領域)永續發展與環境管理學分學程",不可加簽說明:"",必選修說明:"環文系111M  選修	"},{科號:"11120KEC 501500",課程中文名稱:"空間行為與旅遊決策",課程英文名稱:"Spatial Behavior and Decision-making of Tours",學分數:"3",人限:"55",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`Nanda南大9122	W2W3W4
`,授課教師:`倪進誠	NI, CHIN-CHENG
`,擋修說明:"",課程限制說明:"環文系碩士班優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"環文系111M  選修	"},{科號:"11120KEC 502000",課程中文名稱:"族群文化研究專論",課程英文名稱:"Ethnicculture of Taiwan Issues",學分數:"3",人限:"55",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`Nanda南大9507	R6R7R8
`,授課教師:`徐文路	HSU, WEN-LU
`,擋修說明:"",課程限制說明:"環文系碩士班優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"環文系111M  選修	"},{科號:"11120KEC 502900",課程中文名稱:"環境與文化資源研究",課程英文名稱:"Special Topics on Environmental and Cultural Resources",學分數:"1",人限:"45",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`Nanda南大1305	T6
`,授課教師:`楊宗翰	YANG, CHUNG-HAN
`,擋修說明:"",課程限制說明:"限環文系碩士班1年級2年級3年級4年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"環文系111M  必修	"},{科號:"11120KEC 503000",課程中文名稱:"當代景觀理論與實務",課程英文名稱:"Current issues of landscape architecture",學分數:"3",人限:"55",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程為 16 週課程",停開註記:"",教室與上課時間:`Nanda南大9122	T7T8T9
`,授課教師:`曾慈慧	TSENG, TZU-HUI
`,擋修說明:"",課程限制說明:"環文系碩士班優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"環文系111M  選修	"},{科號:"11120KEC 503300",課程中文名稱:"國際能源治理",課程英文名稱:"Global Energy Governance",學分數:"3",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`Nanda南大1311	WaWbWc
`,授課教師:`楊宗翰	YANG, CHUNG-HAN
`,擋修說明:"",課程限制說明:"環文系碩士班優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"環文系111M  選修	"},{科號:"11120KEC 602500",課程中文名稱:"論文研究",課程英文名稱:"Thesis",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限環文系碩二以上修習",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"排除環文系碩士班1年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"環文系111M  必修	"},{科號:"11120KEC 603200",課程中文名稱:"人類學取向的飲食研究方法",課程英文名稱:"Research Methods for Anthropological Studies of Food",學分數:"3",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`Nanda南大N413	TaTbTc
`,授課教師:`張瑋琦	CHANG, WEI-CHI
`,擋修說明:"",課程限制說明:"環文系碩士班優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"環文系111M  選修	"},{科號:"11120KECN501400",課程中文名稱:"環境心理／行為學研究與專案",課程英文名稱:"The issues and practices of Environmental Psychology/ Behavior",學分數:"3",人限:"48",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`Nanda南大1407	TaTbTc
`,授課教師:`曾慈慧	TSENG, TZU-HUI
`,擋修說明:"",課程限制說明:"限環文系在職專班專班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"環文系在職專班111P  選修	"},{科號:"11120KECN502200",課程中文名稱:"都市及區域政策",課程英文名稱:"Urban and Regional Policies",學分數:"3",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`Nanda南大1205	WaWbWc
`,授課教師:`黃書偉	HUANG, SHU-WEI
`,擋修說明:"",課程限制說明:"限環文系在職專班專班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"環文系在職專班111P  選修	"},{科號:"11120KECN502600",課程中文名稱:"社區與社會學習研究",課程英文名稱:"Special Topics on Community and Social Cognitive",學分數:"1",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`Nanda南大1205	Fa
`,授課教師:`黃書偉	HUANG, SHU-WEI
`,擋修說明:"",課程限制說明:"限環文系在職專班專班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"環文系在職專班111P  必修	"},{科號:"11120KECN600900",課程中文名稱:"地理資訊系統與社區參與專論",課程英文名稱:"Special Topics on Community Participation and Geographic Information Systems",學分數:"3",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`Nanda南大2303	RaRbRc
`,授課教師:`丁志堅	DING, TSU-JEN
`,擋修說明:"",課程限制說明:"限環文系在職專班專班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"環文系在職專班111P  選修	"},{科號:"11120KECN602000",課程中文名稱:"論文",課程英文名稱:"Thesis",學分數:"2",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限專班二年級以上修習,不計入最低畢業應修學分數",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"限環文系在職專班專班2年級3年級4年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"環文系在職專班111P  必修	"},{科號:"11120KEE 100700",課程中文名稱:"環境與幼兒教育",課程英文名稱:"Environment and Early Childhood Education",學分數:"2",人限:"48",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"授課教師：鄭良儀；16週課程",停開註記:"",教室與上課時間:`Nanda南大N204	M5M6
`,授課教師:`鄭良儀	CHENG,LIANG-YI
`,擋修說明:"",課程限制說明:"幼教系優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"幼教系111B  選修	"},{科號:"11120KEE 100800",課程中文名稱:"創造力教育",課程英文名稱:"Creativity Education",學分數:"2",人限:"46",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"16週課程",停開註記:"",教室與上課時間:`Nanda南大1405	M7M8
`,授課教師:`詹文娟	HSUEH CHAN, WEN-CHUAN
`,擋修說明:"",課程限制說明:"幼教系大學部優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"幼教系111B  選修	"},{科號:"11120KEE 100900",課程中文名稱:"幼兒藝術",課程英文名稱:"Arts for Young Children",學分數:"2",人限:"48",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"幼教學程(專門課程)",停開註記:"",教室與上課時間:`Nanda南大9505	R5R6
`,授課教師:`劉淑英	LIU, SHU-YING
`,擋修說明:"",課程限制說明:"幼教系大學部優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"幼教系111B  選修	"},{科號:"11120KEE 101000",課程中文名稱:"幼兒遊戲",課程英文名稱:"Theory and Practice of Play",學分數:"2",人限:"48",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"幼教學程(教育方法)",停開註記:"",教室與上課時間:`Nanda南大2106	T3T4
`,授課教師:`曹亞倫	TSAO, YA-LUN
`,擋修說明:"",課程限制說明:"幼教系大學部優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"幼教系111B  選修	"},{科號:"11120KEE 101100",課程中文名稱:"幼兒觀察",課程英文名稱:"Observation of Young Children",學分數:"2",人限:"55",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"1.幼教學程(教保專業知能課程)。2.先修課程為幼兒發展。16週課程",停開註記:"",教室與上課時間:`Nanda南大N102	R3R4
`,授課教師:`陳湘淳	CHEN, HSIANG-CHUN
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>幼兒發展-成績需C-以上<BR>幼兒發展-成績需C-以上<BR><br>上述條件任選一科，則不擋修。</div>`,課程限制說明:"幼教系大學部優先，第3次選課起開放全校修習",第一二專長對應:"幼教專業知能(第二專長)	教保專業知能(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"幼教系111B  必修	"},{科號:"11120KEE 101300",課程中文名稱:"家庭教育",課程英文名稱:"Family Education",學分數:"3",人限:"48",新生保留人數:"0",通識對象:"*7",通識類別:"社會科學領域 Elective GE course: Social Sciences",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`Nanda南大2106	W2W3W4
`,授課教師:`王海音	WANG, HAI-IN
`,擋修說明:"",課程限制說明:"幼教系大學部優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"幼教系111B  選修	"},{科號:"11120KEE 101400",課程中文名稱:"幼兒STEAM教育課程",課程英文名稱:"STEAM Education in Early Years",學分數:"2",人限:"46",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"幼教學程(專門)、雙語教學師資職前培育課程；16週課程",停開註記:"",教室與上課時間:`Nanda南大N201	T7T8
`,授課教師:`辛靜婷	HSIN, CHING-TING
`,擋修說明:"",課程限制說明:"幼教系大學部優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"幼教系111B  選修	"},{科號:"11120KEE 200600",課程中文名稱:"幼兒科技",課程英文名稱:"Technology for young children",學分數:"2",人限:"48",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"幼教學程(專門課程)；授課教師：吳郁芬",停開註記:"",教室與上課時間:`Nanda南大2106	W5W6
`,授課教師:`吳郁芬	WU,YU-FEN
`,擋修說明:"",課程限制說明:"幼教系大學部優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"幼教系110B  選修	"},{科號:"11120KEE 201400",課程中文名稱:"融合教育理論與實務",課程英文名稱:"Inclusive Education Theories and Practice",學分數:"3",人限:"48",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"16週課程",停開註記:"",教室與上課時間:`Nanda南大N201	W2W3W4
`,授課教師:`鐘梅菁	CHUNG, MEI-CHING
`,擋修說明:"",課程限制說明:"幼教系大學部優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"幼教系110B  選修	"},{科號:"11120KEE 201700",課程中文名稱:"幼兒園課程發展",課程英文名稱:"Early Childhood Curriculum Development",學分數:"2",人限:"46",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"幼教學程(教育方法)",停開註記:"",教室與上課時間:`Nanda南大1405	R3R4
`,授課教師:`曹亞倫	TSAO, YA-LUN
`,擋修說明:"",課程限制說明:"幼教系大學部優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"幼教系110B  選修	"},{科號:"11120KEE 202000",課程中文名稱:"教育統計",課程英文名稱:"Educational Statistics",學分數:"3",人限:"46",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"16週課程",停開註記:"",教室與上課時間:`Nanda南大1405	T2T3T4
`,授課教師:`孫良誠	SUN, LIANG-CHEN
`,擋修說明:"",課程限制說明:"幼教系大學部優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"幼教系110B  選修	"},{科號:"11120KEE 202200",課程中文名稱:"教育哲學",課程英文名稱:"Philosophy of Education",學分數:"2",人限:"48",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"幼教學程(教育基礎課程)",停開註記:"",教室與上課時間:`Nanda南大2106	F3F4
`,授課教師:`李孟翰	LI, MENG-HAN
`,擋修說明:"",課程限制說明:"幼教系大學部優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"幼教系110B  必修	"},{科號:"11120KEE 202300",課程中文名稱:"族群、文化與家庭",課程英文名稱:"Ethnicity, culture and families",學分數:"3",人限:"46",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"16週課程",停開註記:"",教室與上課時間:`Nanda南大1405	M2M3M4
`,授課教師:`鍾欣穎	CHUNG, SING-YIING
`,擋修說明:"",課程限制說明:"幼教系大學部優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"幼教系110B  選修	"},{科號:"11120KEE 202400",課程中文名稱:"專題研究(二)",課程英文名稱:"Undergraduate Research",學分數:"1",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"1.指導教授限本系教師。2.需填專題研究指導教授申請書並請指導教授簽名，送系辦留存。",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"限幼教系大學部",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"幼教系110B  選修	"},{科號:"11120KEE 300200",課程中文名稱:"幼兒學習評量",課程英文名稱:"Assessment of Young Children",學分數:"2",人限:"48",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"幼教學程(教保專業知能課程)",停開註記:"",教室與上課時間:`Nanda南大2106	M3M4
`,授課教師:`張菀真	CHANG, WAN-CHEN
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>幼兒園教保活動課程設計-成績需C-以上<BR>幼兒園教保活動課程設計-成績需C-以上<BR><br>上述條件任選一科，則不擋修。</div>`,課程限制說明:"幼教系大學部優先，第3次選課起開放全校修習",第一二專長對應:"幼教專業知能(第二專長)	教保專業知能(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"幼教系109B  必修	"},{科號:"11120KEE 300400",課程中文名稱:"幼兒園教材教法I",課程英文名稱:"Teaching Materials and Methods in Preschool and Kindergarten I",學分數:"2",人限:"48",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"幼教學程(教保專業知能課程)；先修課程為幼兒教保概論、幼兒園教保活動課程設計；16週課程",停開註記:"",教室與上課時間:`Nanda南大N201	R1R2
`,授課教師:`謝明芳	HSIEH, MING-FANG
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>幼兒教保概論-成績需C-以上<BR>幼兒教保概論-成績需C-以上<BR>幼兒園教保活動課程設計-成績需C-以上<BR><br>上述條件任選一科，則不擋修。</div>`,課程限制說明:"幼教系大學部優先，第3次選課起開放全校修習",第一二專長對應:"幼教專業知能(第二專長)	教保專業知能(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"幼教系109B  必修	"},{科號:"11120KEE 300500",課程中文名稱:"幼兒園教材教法II",課程英文名稱:"Teaching Materials and Methods in Preschool and Kindergarten II",學分數:"2",人限:"48",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"1.幼教學程(教保專業知能課程)；2.先修課程為幼兒教保概論、幼兒園教保活動課程設計；16週課程",停開註記:"",教室與上課時間:`Nanda南大N201	R3R4
`,授課教師:`謝明芳	HSIEH, MING-FANG
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>幼兒教保概論-成績需C-以上<BR>幼兒教保概論-成績需C-以上<BR>幼兒園教保活動課程設計-成績需C-以上<BR><br>上述條件任選一科，則不擋修。</div>`,課程限制說明:"幼教系大學部優先，第3次選課起開放全校修習",第一二專長對應:"幼教專業知能(第二專長)	教保專業知能(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"幼教系109B  必修	"},{科號:"11120KEE 300600",課程中文名稱:"幼兒社會探究與情緒表達",課程英文名稱:"Social Studies and Emotional Expressions for Young Children",學分數:"2",人限:"48",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"幼教學程(專門課程)；16週課程",停開註記:"",教室與上課時間:`Nanda南大N102	T3T4
`,授課教師:`周育如	CHOU, YU-JU
`,擋修說明:"",課程限制說明:"幼教系大學部優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"幼教系109B  選修	"},{科號:"11120KEE 300700",課程中文名稱:"幼兒學習環境設計",課程英文名稱:"Designing Learning Environment for Children",學分數:"2",人限:"48",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"幼教學程(教育方法)；授課教師：陳秀梅老師",停開註記:"",教室與上課時間:`Nanda南大N201	R7R8
`,授課教師:`陳秀梅	CHEN,HSIU-MEI
`,擋修說明:"",課程限制說明:"幼教系大學部優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"幼教系109B  選修	幼教系110B  選修	"},{科號:"11120KEE 300800",課程中文名稱:"幼兒園行政",課程英文名稱:"Administration of Early Childhood Programs",學分數:"2",人限:"46",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"幼教學程(106,107為教育方法課程,108後為教育基礎課程),16週課程",停開註記:"",教室與上課時間:`Nanda南大1405	W3W4
`,授課教師:`孫良誠	SUN, LIANG-CHEN
`,擋修說明:"",課程限制說明:"幼教系大學部優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"幼教系109B  選修	"},{科號:"11120KEE 301500",課程中文名稱:"幼兒音樂",課程英文名稱:"Toddler music",學分數:"2",人限:"48",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"幼教學程(專門課程)",停開註記:"",教室與上課時間:`Nanda南大9220	M5M6
`,授課教師:`蘇珊	SU, SHAN
`,擋修說明:"",課程限制說明:"幼教系大學部優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"幼教系109B  選修	"},{科號:"11120KEE 301600",課程中文名稱:"幼兒戲劇",課程英文名稱:"Drama for Young Children",學分數:"2",人限:"48",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"幼教學程(專門課程)",停開註記:"",教室與上課時間:`Nanda南大9221	W5W6
`,授課教師:`劉淑英	LIU, SHU-YING
`,擋修說明:"",課程限制說明:"幼教系大學部優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"幼教系109B  選修	"},{科號:"11120KEE 301800",課程中文名稱:"嬰幼兒保育實習",課程英文名稱:"Practicum in Infant and Toddler Care",學分數:"3",人限:"46",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`Nanda南大1405	F2F3F4
`,授課教師:`余敏芝	YU,MIIN-JY
`,擋修說明:"",課程限制說明:"幼教系大學部優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"幼教系109B  選修	"},{科號:"11120KEE 302200",課程中文名稱:"專題研究(四)",課程英文名稱:"Undergraduate Research Ⅳ",學分數:"1",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"1.指導教授限本系教師。2.需填專題研究指導教授申請書並請指導教授簽名，送系辦留存。",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"限幼教系大學部",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"幼教系109B  選修	"},{科號:"11120KEE 302300",課程中文名稱:"人際關係與溝通",課程英文名稱:"Human Relations and Communication",學分數:"2",人限:"48",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"幼教學程(教育實踐課程),16週課程",停開註記:"",教室與上課時間:`Nanda南大N201	W7W8
`,授課教師:`陳湘淳	CHEN, HSIANG-CHUN
`,擋修說明:"",課程限制說明:"幼教系大學部優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"幼教系109B  選修	"},{科號:"11120KEE 400400",課程中文名稱:"幼兒園、家庭與社區",課程英文名稱:"Preschool, Family and Community",學分數:"2",人限:"48",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"幼教學程(教保專業知能課程)",停開註記:"",教室與上課時間:`Nanda南大N201	W5W6
`,授課教師:`曹亞倫	TSAO, YA-LUN
`,擋修說明:"",課程限制說明:"幼教系大學部優先，第3次選課起開放全校修習",第一二專長對應:"幼教專業知能(第二專長)	教保專業知能(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"幼教系108B  必修	"},{科號:"11120KEE 400500",課程中文名稱:"幼兒輔導",課程英文名稱:"Behavioral Guidance for Young Children",學分數:"2",人限:"55",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"幼教學程(教育方法)；本課程為16 週課程",停開註記:"",教室與上課時間:`Nanda南大2203	T7T8
`,授課教師:`趙婉娟	CHAO,WAN-CHUAN
`,擋修說明:"",課程限制說明:"幼教系大學部優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"幼教系108B  選修	"},{科號:"11120KEE 400601",課程中文名稱:"幼兒園教學實習",課程英文名稱:"Practicum for Teaching Young Children",學分數:"4",人限:"25",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"師資生必選，幼教學程(教學實習課程)；先修課程為幼兒園教保實習；雙語教學師資職前培育課程；16週課程",停開註記:"",教室與上課時間:`Nanda南大N201	T1T2T3T4
`,授課教師:`陳文玲	CHEN, WEN-LING
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>幼兒園教保實習-成績需C-以上<BR>幼兒園教保實習-成績需C-以上<BR><br>上述條件任選一科，而且<br><BR>幼兒園課室經營-成績需C-以上<BR>幼兒園課室經營-成績需C-以上<BR><br>上述條件任選一科，而且<br><BR>幼兒健康與安全-成績需C-以上<BR>幼兒健康與安全-成績需C-以上<BR><br>上述條件任選一科，則不擋修。</div>`,課程限制說明:"幼教系大學部優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"幼教系108B  選修	"},{科號:"11120KEE 400602",課程中文名稱:"幼兒園教學實習",課程英文名稱:"Practicum for Teaching Young Children",學分數:"4",人限:"25",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"師資生必選，幼教學程(教學實習課程)；先修課程為幼兒園教保實習；雙語教學師資職前培育課程；16週課程",停開註記:"",教室與上課時間:`Nanda南大9206	T1T2T3T4
`,授課教師:`張菀真	CHANG, WAN-CHEN
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>幼兒園教保實習-成績需C-以上<BR>幼兒園教保實習-成績需C-以上<BR><br>上述條件任選一科，而且<br><BR>幼兒園課室經營-成績需C-以上<BR>幼兒園課室經營-成績需C-以上<BR><br>上述條件任選一科，而且<br><BR>幼兒健康與安全-成績需C-以上<BR>幼兒健康與安全-成績需C-以上<BR><br>上述條件任選一科，則不擋修。</div>`,課程限制說明:"幼教系大學部優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"幼教系108B  選修	"},{科號:"11120KEE 400900",課程中文名稱:"幼教產業探索",課程英文名稱:"Early Childhood Related Industry",學分數:"2",人限:"48",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"授課教師：吳郁芬老師",停開註記:"",教室與上課時間:`Nanda南大2106	W7W8
`,授課教師:`吳郁芬	WU,YU-FEN
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>幼兒教保概論-成績需C-以上<BR>幼兒教保概論-成績需C-以上<BR><br>上述條件任選一科，則不擋修。</div>`,課程限制說明:"幼教系大學部優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"幼教系108B  選修	"},{科號:"11120KEE 401200",課程中文名稱:"專題研究(六)",課程英文名稱:"Undergraduate Research Ⅵ",學分數:"1",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"1.指導教授限本系教師。2.需填專題研究指導教授申請書並請指導教授簽名，送系辦留存。",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"限幼教系",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"幼教系108B  選修	"},{科號:"11120KEE 500800",課程中文名稱:"論文研究",課程英文名稱:"Thesis",學分數:"2",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"不計入最低畢業應修學分數，碩士班學生已修畢2個學期課程者必選！",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"限幼教系碩士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"幼教系111M  必修	"},{科號:"11120KEE 501300",課程中文名稱:"幼兒情緒發展與情緒教育專題研究",課程英文名稱:"Emotional development and emotion education",學分數:"3",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"本課程為16 週課程。發展科學組選修(碩一、碩二合開)",停開註記:"",教室與上課時間:`Nanda南大N201	F2F3F4
`,授課教師:`周育如	CHOU, YU-JU
`,擋修說明:"",課程限制說明:"限幼教系碩士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"幼教系111M  選修	"},{科號:"11120KEE 600100",課程中文名稱:"論文研討",課程英文名稱:"Seminar on Thesis",學分數:"2",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"109學年度(含)以前入學且有指導教授之學生才需要選；課程事宜請逕洽指導教授",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"限幼教系碩士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"幼教系111M  選修	"},{科號:"11120KEE 600400",課程中文名稱:"幼兒學習環境專題研究",課程英文名稱:"Learning Environment for Young Children",學分數:"3",人限:"18",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"課程與教學組選修(碩一、碩二合開)；授課教師：陳秀梅",停開註記:"",教室與上課時間:`Nanda南大N207	RnR5R6
`,授課教師:`陳秀梅	CHEN,HSIU-MEI
`,擋修說明:"",課程限制說明:"限幼教系碩士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"幼教系111M  選修	"},{科號:"11120KEEN500400",課程中文名稱:"研究方法-量化研究",課程英文名稱:"Quantitative Research Methods",學分數:"3",人限:"25",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程為16 週課程。",停開註記:"",教室與上課時間:`Nanda南大N201	RaRbRc
`,授課教師:`孫良誠	SUN, LIANG-CHEN
`,擋修說明:"",課程限制說明:"限幼教系在職專班專班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"幼教系在職專班111P  必修	"},{科號:"11120KEEN500500",課程中文名稱:"研究方法-質性研究",課程英文名稱:"Qualitative Research Methods",學分數:"3",人限:"25",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`Nanda南大N201	TaTbTc
`,授課教師:`曹亞倫	TSAO, YA-LUN
`,擋修說明:"",課程限制說明:"限幼教系在職專班專班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"幼教系在職專班111P  必修	"},{科號:"11120KEEN500600",課程中文名稱:"智能理論專題研究",課程英文名稱:"Advanced Studies in Human Intelligence",學分數:"3",人限:"25",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程為16 週課程。",停開註記:"",教室與上課時間:`Nanda南大N201	MaMbMc
`,授課教師:`詹文娟	HSUEH CHAN, WEN-CHUAN
`,擋修說明:"",課程限制說明:"限幼教系在職專班專班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"幼教系在職專班111P  選修	"},{科號:"11120KEEN500800",課程中文名稱:"論文",課程英文名稱:"Thesis",學分數:"2",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"不計入最低畢業應修學分數，幼教系碩士在職專班學生已修畢2個學期課程者必選！",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"限幼教系在職專班專班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"幼教系在職專班111P  必修	"},{科號:"11120KEEN501500",課程中文名稱:"學前特教專題研究",課程英文名稱:"Early Childhood Special Education",學分數:"3",人限:"25",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`Nanda南大N201	WaWbWc
`,授課教師:`鐘梅菁	CHUNG, MEI-CHING
`,擋修說明:"",課程限制說明:"限幼教系在職專班專班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"幼教系在職專班111P  選修	"},{科號:"11120KEEN600100",課程中文名稱:"論文研討",課程英文名稱:"Seminar on Thesis",學分數:"2",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"109學年度(含)以前入學且有指導教授之學生才需要選；課程事宜請逕洽指導教授",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"限幼教系在職專班專班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"幼教系在職專班111P  必修	"},{科號:"11120KEL 111000",課程中文名稱:"藝術與社會跨域體驗學習",課程英文名稱:"Interdisciplinary Experiential Learning in Art and Society",學分數:"2",人限:"35",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`Nanda南大1411	W3W4
`,授課教師:`邱台山	CHIU, TAI-SHAN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"教科系111B  選修	"},{科號:"11120KEL 120000",課程中文名稱:"教育心理學",課程英文名稱:"Educational Psychology",學分數:"3",人限:"45",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"雙語教學師資職前培育課程",停開註記:"",教室與上課時間:`Nanda南大N204	M7M8M9
`,授課教師:`李元萱	LEE, YUAN-HSUAN
`,擋修說明:"",課程限制說明:"限教科系大學部1年級",第一二專長對應:"教育與學習科技(第二專長)	教育與學習科技(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"教科系111B  必修	"},{科號:"11120KEL 122000",課程中文名稱:"兒童發展與輔導",課程英文名稱:"Child Development and Guidance",學分數:"2",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`Nanda南大1411	R5R6
`,授課教師:`彭志業	PENG, CHIH-YEH
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"教科系111B  選修	"},{科號:"11120KEL 143300",課程中文名稱:"實驗教育",課程英文名稱:"Alternative Education",學分數:"3",人限:"35",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`Nanda南大N203	R2R3R4
`,授課教師:`翁志航	WENG, CHIH-HANG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"教科系111B  選修	"},{科號:"11120KEL 151100",課程中文名稱:"教學媒體與運用",課程英文名稱:"Instructional Media and Application",學分數:"2",人限:"60",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"上課教室:南大電腦教室",停開註記:"",教室與上課時間:`Nanda南大N102	R7R8
`,授課教師:`邱富源	CHIU, FU-YUAN
`,擋修說明:"",課程限制說明:"限教科系大學部1年級",第一二專長對應:"教育與學習科技(第二專長)	教育與學習科技(第一專長)",學分學程對應:"(跨領域)資訊傳媒學分學程",不可加簽說明:"",必選修說明:"教科系111B  必修	"},{科號:"11120KEL 187000",課程中文名稱:"口語表達(包含國音及說話)",課程英文名稱:"Phonetics and Speech",學分數:"2",人限:"48",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"師資生必選，國民小學國語教材教法先修課程",停開註記:"",教室與上課時間:`Nanda南大N202	T3T4
`,授課教師:`黃美鴻	HUANG, MEI-HUNG
`,擋修說明:"",課程限制說明:"教科系大學部1年級優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"教科系111B  選修	"},{科號:"11120KEL 210000",課程中文名稱:"教育社會學",課程英文名稱:"Sociology of Education",學分數:"3",人限:"48",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`Nanda南大N202	M5M6R5
`,授課教師:`楊慧琪	YANG, HUEI-CHI
`,擋修說明:"",課程限制說明:"教科系大學部2年級優先，第3次選課起開放全校修習",第一二專長對應:"教育與學習科技(第二專長)	教育與學習科技(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"教科系110B  必修	"},{科號:"11120KEL 211000",課程中文名稱:"學習理論",課程英文名稱:"Learning Theory",學分數:"2",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`Nanda南大1411	R3R4
`,授課教師:`彭志業	PENG, CHIH-YEH
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"教科系110B  選修	"},{科號:"11120KEL 230500",課程中文名稱:"教育行政",課程英文名稱:"Educational Administration",學分數:"3",人限:"48",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`Nanda南大1409	M7M8M9
`,授課教師:`葉于正	YEH, YU-CHENG
林志成	LIN, CHIH-CHENG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"教科系110B  選修	"},{科號:"11120KEL 231100",課程中文名稱:"教育法規",課程英文名稱:"Education Law",學分數:"2",人限:"48",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`Nanda南大N202	W8W9
`,授課教師:`宋峻杰	SUNG, CHUN-CHIEH
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"教科系110B  選修	"},{科號:"11120KEL 242000",課程中文名稱:"班級經營",課程英文名稱:"Classroom Management",學分數:"2",人限:"48",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`Nanda南大N204	W3W4
`,授課教師:`白雲霞	PAI, YUN-HSIA
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"教科系110B  選修	"},{科號:"11120KEL 242100",課程中文名稱:"學習評量",課程英文名稱:"Assessment for Learning",學分數:"2",人限:"48",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`Nanda南大N204	T3T4
`,授課教師:`林倍伊	LIN, PEI-YI
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"教科系110B  選修	"},{科號:"11120KEL 243000",課程中文名稱:"藝術融入課程",課程英文名稱:"Integrate Arts into Curriculums",學分數:"2",人限:"48",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"與薛曉華合開",停開註記:"",教室與上課時間:`Nanda南大N204	F7F8
`,授課教師:`成虹飛	CHERNG, HORN-FAY
聘任中	
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"教科系110B  選修	"},{科號:"11120KEL 251000",課程中文名稱:"STEAM教育專題探究",課程英文名稱:"Study in STEAM Education",學分數:"3",人限:"35",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`Nanda南大N315	R2R3R4
`,授課教師:`邱富源	CHIU, FU-YUAN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"教育與學習科技(第二專長)	教育與學習科技(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"教科系110B  選修	"},{科號:"11120KEL 252000",課程中文名稱:"多媒體與視覺傳達設計",課程英文名稱:"Multimedia and Visual Communication Design",學分數:"3",人限:"35",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`Nanda南大N315	W7W8W9
`,授課教師:`張財銘	CHAG, TSAI-MING
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"教科系110B  選修	"},{科號:"11120KEL 270001",課程中文名稱:"教育研究法",課程英文名稱:"Education Research Methodology",學分數:"3",人限:"23",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`Nanda南大N204	T7T8T9
`,授課教師:`呂秀蓮	LU, HSIU-LIEN
`,擋修說明:"",課程限制說明:"教科系大學部2年級優先，第3次選課起開放全校修習",第一二專長對應:"教育與學習科技(第二專長)	教育與學習科技(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"教科系110B  必修	"},{科號:"11120KEL 270002",課程中文名稱:"教育研究法",課程英文名稱:"Education Research Methodology",學分數:"3",人限:"23",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"上課教室:電腦教室",停開註記:"",教室與上課時間:"",授課教師:`林倍伊	LIN, PEI-YI
`,擋修說明:"",課程限制說明:"教科系大學部2年級優先，第3次選課起開放全校修習",第一二專長對應:"教育與學習科技(第二專長)	教育與學習科技(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"教科系110B  必修	"},{科號:"11120KEL 280100",課程中文名稱:"表演藝術",課程英文名稱:"Performing Arts",學分數:"2",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`Nanda南大9220	W3W4
`,授課教師:`劉淑英	LIU, SHU-YING
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"教科系110B  選修	"},{科號:"11120KEL 281000",課程中文名稱:"自然科學概論",課程英文名稱:"Introduction to Natural Science",學分數:"2",人限:"45",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"108學年度以後取得師資生資格，非理工相關科系者必選",停開註記:"",教室與上課時間:`Nanda南大2205	M3M4
`,授課教師:`杜明進	TU, MING-CHIN
`,擋修說明:"",課程限制說明:"教科系大學部2年級優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"教科系110B  選修	"},{科號:"11120KEL 281100",課程中文名稱:"寫字及書法",課程英文名稱:"Hand Writing and Calligraphy",學分數:"2",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"授課教師:陳昶澤",停開註記:"",教室與上課時間:`Nanda南大4309	R8R9
`,授課教師:`聘任中	
`,擋修說明:"",課程限制說明:"教科系大學部2年級優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"教科系110B  選修	"},{科號:"11120KEL 288100",課程中文名稱:"閱讀教育",課程英文名稱:"Reading Education",學分數:"2",人限:"48",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`Nanda南大N202	M7M8
`,授課教師:`楊慧琪	YANG, HUEI-CHI
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"教科系110B  選修	"},{科號:"11120KEL 290000",課程中文名稱:"臺灣教育史",課程英文名稱:"History of Taiwanese Education",學分數:"2",人限:"48",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`Nanda南大N202	W5W6
`,授課教師:`王映文	WANG, ING-WEN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"教科系110B  選修	"},{科號:"11120KEL 348100",課程中文名稱:"跨領域學習評量設計",課程英文名稱:"Learning Assessment for Interdisciplinary Education",學分數:"3",人限:"35",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`Nanda南大N315	W3W4Wn
`,授課教師:`邱茗伊	CHIU, MING-YI
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"教科系109B  選修	"},{科號:"11120KEL 352100",課程中文名稱:"數位落差與數位機會",課程英文名稱:"Digital Divide and Digital Opportunity",學分數:"3",人限:"25",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`Nanda南大N317	R2R3R4
`,授課教師:`王淳民	WANG, CHUN-MIN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"教科系109B  選修	"},{科號:"11120KEL 382000",課程中文名稱:"本土語言",課程英文名稱:"Vernacular",學分數:"2",人限:"48",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`Nanda南大N202	T5T6
`,授課教師:`黃美鴻	HUANG, MEI-HUNG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"教科系109B  選修	"},{科號:"11120KEL 390000",課程中文名稱:"教育哲學",課程英文名稱:"Philosophy of Education",學分數:"3",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程上150分鐘，其餘時間由教授視情形彈性運用",停開註記:"",教室與上課時間:`Nanda南大1411	M3M4W1W2
`,授課教師:`李孟翰	LI, MENG-HAN
`,擋修說明:"",課程限制說明:"教科系大學部3年級優先，第3次選課起開放全校修習",第一二專長對應:"教育與學習科技(第二專長)	教育與學習科技(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"教科系109B  必修	"},{科號:"11120KEL 413000",課程中文名稱:"比較教育",課程英文名稱:"Comparative Education",學分數:"3",人限:"48",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`Nanda南大N202	W2W3W4
`,授課教師:`王映文	WANG, ING-WEN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"教科系108B  選修	"},{科號:"11120KEL 443100",課程中文名稱:"統整課程設計",課程英文名稱:"Integrated Curriculum Design",學分數:"2",人限:"48",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`Nanda南大N202	R6R7
`,授課教師:`楊慧琪	YANG, HUEI-CHI
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"教科系108B  選修	"},{科號:"11120KEL 463701",課程中文名稱:"教學實習二",課程英文名稱:"Teaching Internship (II)",學分數:"4",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"師資生必選，學年課，須修過國民 小學國語教材教法、國民小學數學 教材教法，方可選修本課程。",停開註記:"",教室與上課時間:`Nanda南大N202	R1R2R3R4
`,授課教師:`馮汝琪	FENG,JU-CHI
王為國	WANG, WEI-KUO
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>教學實習一-成績需C-以上<BR>國民小學國語教材教法-成績需C-以上<BR>國民小學數學教材教法-成績需C-以上<BR>教學實習一-成績需C-以上<BR><br>上述條件任選一科，則不擋修。</div>`,課程限制說明:"限教科系大學部4年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"教科系108B  選修	"},{科號:"11120KEL 463702",課程中文名稱:"教學實習二",課程英文名稱:"Teaching Internship (II)",學分數:"4",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"師資生必選，學年課，須修過國民 小學國語教材教法、國民小學數學 教材教法，方可選修本課程。",停開註記:"",教室與上課時間:`Nanda南大N204	R1R2R3R4
`,授課教師:`江欣怡	CHIANG, HSIN-YI
白雲霞	PAI, YUN-HSIA
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>教學實習一-成績需C-以上<BR>國民小學國語教材教法-成績需C-以上<BR>國民小學數學教材教法-成績需C-以上<BR>教學實習一-成績需C-以上<BR><br>上述條件任選一科，則不擋修。</div>`,課程限制說明:"限教科系大學部4年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"教科系108B  選修	"},{科號:"11120KEL 500300",課程中文名稱:"教育統計學",課程英文名稱:"Educational Statistics",學分數:"3",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"碩班屬兩組共同必選(二選一)課程。上課地點:南大電腦教室",停開註記:"",教室與上課時間:"",授課教師:`蔡明學	TSAI, MING-HSUEH
`,擋修說明:"",課程限制說明:"限教育學院",第一二專長對應:"",學分學程對應:"(跨領域)神經科學學分學程",不可加簽說明:"",必選修說明:"教科系111MA 選修	教科系111MB 選修	"},{科號:"11120KEL 500400",課程中文名稱:"教育學方法論",課程英文名稱:"Methodology of Educational Research",學分數:"3",人限:"25",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"碩班屬兩組共同必選(二選一)課程",停開註記:"",教室與上課時間:`Nanda南大N317	T2T3T4
`,授課教師:`彭煥勝	PENG, HUAN-SHENG
`,擋修說明:"",課程限制說明:"限教育學院",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"教科系111MA 選修	教科系111MB 選修	"},{科號:"11120KEL 500700",課程中文名稱:"教學技巧與策略研究",課程英文名稱:"Study in Teaching Skills and Strategies",學分數:"3",人限:"25",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"碩班屬課程組內選修課程",停開註記:"",教室與上課時間:`Nanda南大N316	R5R6R7
`,授課教師:`白雲霞	PAI, YUN-HSIA
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"教科系111MA 選修	"},{科號:"11120KEL 501200",課程中文名稱:"華德福教育研究",課程英文名稱:"Seminar on Waldorf Education",學分數:"3",人限:"25",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"碩班屬課程組內選修課程(與薛曉華合開)",停開註記:"",教室與上課時間:`Nanda南大N202	F2F3F4
`,授課教師:`成虹飛	CHERNG, HORN-FAY
聘任中	
`,擋修說明:"",課程限制說明:"排除教科系博士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"教科系111MA 選修	"},{科號:"11120KEL 501300",課程中文名稱:"補救教學專題研究",課程英文名稱:"Study in Special Issues in Remedial Teaching",學分數:"3",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"碩班屬課程組內選修，其他班組屬自由選修",停開註記:"",教室與上課時間:`Nanda南大N316	W8W9Wa
`,授課教師:`白雲霞	PAI, YUN-HSIA
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"教科系111MA 選修	"},{科號:"11120KEL 501600",課程中文名稱:"教育與學校領導研究",課程英文名稱:"Study in Education and School Leadership",學分數:"3",人限:"15",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"屬碩班行政組內選修課程，課程組屬自由選修",停開註記:"",教室與上課時間:`Nanda南大N206	W8W9Wa
`,授課教師:`李安明	LI, AN-MIN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"教科系111MB 選修	"},{科號:"11120KEL 502100",課程中文名稱:"教育行政行動智慧研究",課程英文名稱:"Study in Wisdom for Action in Educational Administration",學分數:"3",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"碩班屬行政組內選修課程",停開註記:"",教室與上課時間:`Nanda南大N317	W8W9Wa
`,授課教師:`林志成	LIN, CHIH-CHENG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"教科系111MB 選修	"},{科號:"11120KEL 600000",課程中文名稱:"論文研究",課程英文名稱:"Thesis",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限教科系碩二以上修習",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"排除教科系碩士班1年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"教科系111MA 必修	教科系111MB 必修	"},{科號:"11120KEL 600600",課程中文名稱:"課程決定研究",課程英文名稱:"Study in Curriculum Decision-Making",學分數:"3",人限:"15",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"碩班屬課程組內選修課程",停開註記:"",教室與上課時間:`Nanda南大N206	F2F3F4
`,授課教師:`王為國	WANG, WEI-KUO
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"教科系111MA 選修	"},{科號:"11120KEL 601000",課程中文名稱:"課程與教學革新專題研究",課程英文名稱:"Special Issues in Curriculum and Instructional Innovation",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"碩班屬課程組內選修課程",停開註記:"",教室與上課時間:`Nanda南大N316	F5F6F7
`,授課教師:`鄭淵全	CHENG, YUAN-CHUAN
`,擋修說明:"",課程限制說明:"排除教科系博士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"教科系111MA 選修	"},{科號:"11120KEL 700200",課程中文名稱:"教育專題研討",課程英文名稱:"Seminar on Pedagogy",學分數:"3",人限:"15",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"教科博必修課，需修畢教育學方法論才可修讀",停開註記:"",教室與上課時間:`Nanda南大N311	F5F6F7
`,授課教師:`指導教授	
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>教育學方法論-成績需B-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"限教育學院,博士班1年級2年級3年級4年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"教科系111D  必修	"},{科號:"11120KEL 701600",課程中文名稱:"課程評鑑理論與實務專題研究",課程英文名稱:"Special Issues in the Theory and Practice of Curriculum Evaluation",學分數:"3",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"碩班屬課程組內選修，博班屬課程領域選修課程",停開註記:"",教室與上課時間:`Nanda南大N316	T5T6T7
`,授課教師:`李俊湖	LI, JUN-HU
陳美如	CHEN, MEI-JU
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"教科系111D  選修	教科系111MA 選修	"},{科號:"11120KEL 702200",課程中文名稱:"教育行動研究",課程英文名稱:"Educational Action Research",學分數:"3",人限:"25",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"碩班屬兩組自由選修，博班屬課程領域選修課程",停開註記:"",教室與上課時間:`Nanda南大N317	F8F9Fa
`,授課教師:`林志成	LIN, CHIH-CHENG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"教科系111D  選修	教科系111MA 選修	"},{科號:"11120KEL 702700",課程中文名稱:"數位化教學設計與評量研究",課程英文名稱:"Study in Digital Instructional Design and Assessment",學分數:"3",人限:"15",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"碩班屬課程組內選修，博班屬課程領域選修課程(欲選課者請務必先詢問開課老師)",停開註記:"",教室與上課時間:`Nanda南大N311	T2T3T4
`,授課教師:`王子華	WANG, TZU-HUA
`,擋修說明:"",課程限制說明:"限碩士班博士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"教科系111D  選修	教科系111MA 選修	"},{科號:"11120KEL 703000",課程中文名稱:"課程理論研究",課程英文名稱:"Study in Curriculum Theories",學分數:"3",人限:"25",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"碩班屬課程組必修，博班屬課程領域選修課程",停開註記:"",教室與上課時間:`Nanda南大N316	W2W3W4
`,授課教師:`詹惠雪	CHAN, HUI-HSUEH
`,擋修說明:"",課程限制說明:"限教育學院,碩士班博士班專班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"教科系111D  選修	教科系111MA 必修	"},{科號:"11120KEL 703400",課程中文名稱:"學校行政專題研究",課程英文名稱:"Special Issues in School Administration",學分數:"3",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"碩班屬行政組內選修，博班屬行政領域選修課程",停開註記:"",教室與上課時間:`Nanda南大N316	F2F3F4
`,授課教師:`顏國樑	YEN, KUO-LIANG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"教科系111D  選修	教科系111MB 選修	"},{科號:"11120KEL 703700",課程中文名稱:"教育領導學趨勢研究",課程英文名稱:"Trends in the Study of Educational Leadership",學分數:"3",人限:"15",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"屬博班行政領域選修課程",停開註記:"",教室與上課時間:`Nanda南大N204	F2F3F4
`,授課教師:`李安明	LI, AN-MIN
`,擋修說明:"",課程限制說明:"排除教科系碩士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"教科系111D  選修	"},{科號:"11120KEL 703800",課程中文名稱:"教育評鑑研究",課程英文名稱:"Studies in Educational Evaluation",學分數:"3",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"碩班屬行政組內選修，博班屬行政領域選修課程",停開註記:"",教室與上課時間:`Nanda南大N316	T8T9Ta
`,授課教師:`謝卓君	HSIEH, CHUO-CHUN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"教科系111D  選修	教科系111MB 選修	"},{科號:"11120KEL 704500",課程中文名稱:"教育行政新興議題研究",課程英文名稱:"Study in the New Issues of Educational Administration",學分數:"3",人限:"25",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"碩班屬行政組內選修，博班屬行政領域選修課程",停開註記:"",教室與上課時間:`Nanda南大N317	T5T6T7
`,授課教師:`謝傳崇	HSIEH, CHUAN-CHUNG
簡瑋成	CHIEN, WEI-CHENG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"教科系111D  選修	教科系111MB 選修	"},{科號:"11120KEL 705300",課程中文名稱:"運動行為學研究",課程英文名稱:" ",學分數:"3",人限:"12",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`Nanda南大N205	TaTbTc
`,授課教師:`邱文信	CHIU, WEN-HSIN
`,擋修說明:"",課程限制說明:"限博士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"教科系111D  選修	"},{科號:"11120KEL 706500",課程中文名稱:"跨領域STEAM教育專題研究",課程英文名稱:"Study in Interdisciplinary STEAM Education",學分數:"3",人限:"35",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"碩班屬課程組內選修，博班屬課程領域選修課程",停開註記:"",教室與上課時間:`Nanda南大N315	T2T3T4
`,授課教師:`蔡寶桂	TSAT,PAO-KUEI
邱富源	CHIU, FU-YUAN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"教科系111D  選修	教科系111MA 選修	"},{科號:"11120KEL 706800",課程中文名稱:"正向教育研究",課程英文名稱:"Study in Positive Education",學分數:"3",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"碩班屬行政組內選修，博班屬行政領域選修課程",停開註記:"",教室與上課時間:`Nanda南大N317	W2W3W4
`,授課教師:`謝傳崇	HSIEH, CHUAN-CHUNG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"教科系111D  選修	教科系111MB 選修	"},{科號:"11120KEL 801900",課程中文名稱:"論文研究",課程英文名稱:"Thesis",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限教科系博二以上同學",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"排除教科系博士班1年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"教科系111D  必修	"},{科號:"11120KEL 806100",課程中文名稱:"學習社群與學習領導專題研究",課程英文名稱:"Special Issues in Professional Learning Community and Learning Leadership",學分數:"3",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"碩班屬課程組內選修，博班屬課程領域選修課程",停開註記:"",教室與上課時間:`Nanda南大N316	R2R3R4
`,授課教師:`林倍伊	LIN, PEI-YI
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"教科系111D  選修	教科系111MA 選修	"},{科號:"11120KEL 806600",課程中文名稱:"教育管理個案分析",課程英文名稱:"Case Studies on Educational Management",學分數:"3",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"碩班屬行政組內選修，博班屬行政領域選修課程",停開註記:"",教室與上課時間:`Nanda南大N317	T8T9Ta
`,授課教師:`林志成	LIN, CHIH-CHENG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"教科系111D  選修	教科系111MB 選修	"},{科號:"11120KELN500100",課程中文名稱:"教學理論研究",課程英文名稱:"Study in Teaching Theories",學分數:"3",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限課程與教學在職專班，一年級必選",停開註記:"",教室與上課時間:`Nanda南大N204	TaTbTc
`,授課教師:`陳美如	CHEN, MEI-JU
`,擋修說明:"",課程限制說明:"限教科系碩士在職專班專班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"教科系碩士在職專班111PA 必修	"},{科號:"11120KELN500300",課程中文名稱:"研究方法-質性研究",課程英文名稱:"Qualitative Research Methods",學分數:"3",人限:"25",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限教育行政在職專班，三選二規定選修",停開註記:"",教室與上課時間:`Nanda南大N311	TaTbTc
`,授課教師:`李安明	LI, AN-MIN
`,擋修說明:"",課程限制說明:"限教科系碩士在職專班專班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"教科系碩士在職專班111PB 必修	"},{科號:"11120KELN500600",課程中文名稱:"課程與教學設計研究",課程英文名稱:"Study in Curriculum  and Instructional Design",學分數:"3",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限課程與教學在職專班",停開註記:"",教室與上課時間:`Nanda南大N311	WaWbWc
`,授課教師:`詹惠雪	CHAN, HUI-HSUEH
`,擋修說明:"",課程限制說明:"限教科系碩士在職專班專班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"教科系碩士在職專班111PA 選修	"},{科號:"11120KELN502300",課程中文名稱:"補救教學專題研究",課程英文名稱:"Study in Special Issues in Remedial Teaching",學分數:"3",人限:"25",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限課程與教學在職專班",停開註記:"",教室與上課時間:`Nanda南大N317	RaRbRc
`,授課教師:`白雲霞	PAI, YUN-HSIA
`,擋修說明:"",課程限制說明:"限教科系碩士在職專班專班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"教科系碩士在職專班111PA 選修	"},{科號:"11120KELN503800",課程中文名稱:"教育評鑑研究",課程英文名稱:"Studies in Educational Evaluation",學分數:"3",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限教育行政在職專班",停開註記:"",教室與上課時間:`Nanda南大N316	RaRbRc
`,授課教師:`謝卓君	HSIEH, CHUO-CHUN
`,擋修說明:"",課程限制說明:"限教科系碩士在職專班專班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"教科系碩士在職專班111PB 選修	"},{科號:"11120KELN505101",課程中文名稱:"研究方法--量化研究",課程英文名稱:"Research Method: Quantitative Research",學分數:"3",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限課程與教學在職專班，一年級必選",停開註記:"",教室與上課時間:`Nanda南大N315	S2S3S4
`,授課教師:`王子華	WANG, TZU-HUA
邱富源	CHIU, FU-YUAN
`,擋修說明:"",課程限制說明:"限教科系碩士在職專班專班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"教科系碩士在職專班111PA 必修	"},{科號:"11120KELN505102",課程中文名稱:"研究方法--量化研究",課程英文名稱:"Research Method: Quantitative Research",學分數:"3",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限教育行政在職專班，三選二規定選修",停開註記:"",教室與上課時間:`Nanda南大N316	S2S3S4
`,授課教師:`賴文堅	LAI, WEN-CHIEN
`,擋修說明:"",課程限制說明:"限教科系碩士在職專班專班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"教科系碩士在職專班111PB 必修	"},{科號:"11120KELN505400",課程中文名稱:"課程理論與設計",課程英文名稱:"Curriculum Theories and Design",學分數:"2",人限:"35",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限課程與教學在職專班乙組(金門班)，必選",停開註記:"",教室與上課時間:`Kinmen金門中心	S1S2
`,授課教師:`詹惠雪	CHAN, HUI-HSUEH
`,擋修說明:"",課程限制說明:"限教科系碩士在職專班專班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"教科系碩士在職專班111PC 必修	"},{科號:"11120KELN506200",課程中文名稱:"班級文化與經營",課程英文名稱:"Study in Classroom Management",學分數:"2",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限課程與教學在職專班乙組(金門班)",停開註記:"",教室與上課時間:`Kinmen金門中心	S5S6
`,授課教師:`王為國	WANG, WEI-KUO
`,擋修說明:"",課程限制說明:"限專班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"教科系碩士在職專班111PC 選修	"},{科號:"11120KELN510700",課程中文名稱:"教育行政行動智慧研究",課程英文名稱:"Study in Wisdom for Action in Educational Administration",學分數:"3",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限教育行政在職專班",停開註記:"",教室與上課時間:`Nanda南大N316	MaMbMc
`,授課教師:`林志成	LIN, CHIH-CHENG
`,擋修說明:"",課程限制說明:"限教科系碩士在職專班專班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"教科系碩士在職專班111PB 選修	"},{科號:"11120KELN512200",課程中文名稱:"人力資源管理研究",課程英文名稱:"Human Resource Management Research",學分數:"3",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限教育行政在職專班",停開註記:"",教室與上課時間:`Nanda南大N316	FaFbFc
`,授課教師:`曾煥淦	TSENG, HUAN-KAN
謝傳崇	HSIEH, CHUAN-CHUNG
`,擋修說明:"",課程限制說明:"限教科系碩士在職專班專班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"教科系碩士在職專班111PB 選修	"},{科號:"11120KELN512300",課程中文名稱:"教育計畫與決定研究",課程英文名稱:"Educational Planning and Decision Making",學分數:"3",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限教育行政在職專班",停開註記:"",教室與上課時間:`Nanda南大N317	S5S6S7
`,授課教師:`葉于正	YEH, YU-CHENG
林志成	LIN, CHIH-CHENG
`,擋修說明:"",課程限制說明:"限教科系碩士在職專班專班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"教科系碩士在職專班111PB 選修	"},{科號:"11120KELN600000",課程中文名稱:"論文",課程英文名稱:"Thesis",學分數:"2",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限專班二年級以上修習,此學分不計入最低畢業應修學分數",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"排除教科系碩士在職專班專班1年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"教科系碩士在職專班111PA 必修	教科系碩士在職專班111PB 必修	教科系碩士在職專班111PC 必修	"},{科號:"11120KELN600100",課程中文名稱:"教學理論與設計",課程英文名稱:"Teaching Theories and Design",學分數:"2",人限:"35",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限課程與教學在職專班乙組(金門班)，必選",停開註記:"",教室與上課時間:`Kinmen金門中心	S3S4
`,授課教師:`陳美如	CHEN, MEI-JU
`,擋修說明:"",課程限制說明:"限教科系碩士在職專班專班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"教科系碩士在職專班111PC 必修	"},{科號:"11120KELN601200",課程中文名稱:"多元文化教育研究",課程英文名稱:"Study in Multicultural Education",學分數:"3",人限:"25",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限課程與教學在職專班",停開註記:"",教室與上課時間:`Nanda南大N317	MaMbMc
`,授課教師:`彭煥勝	PENG, HUAN-SHENG
`,擋修說明:"",課程限制說明:"限教科系碩士在職專班專班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"教科系碩士在職專班111PA 選修	"},{科號:"11120KELN602000",課程中文名稱:"教育法學研究",課程英文名稱:"Study in Law of Education",學分數:"3",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限教育行政在職專班",停開註記:"",教室與上課時間:`Nanda南大N202	TaTbTc
`,授課教師:`顏國樑	YEN, KUO-LIANG
`,擋修說明:"",課程限制說明:"限教科系碩士在職專班專班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"教科系碩士在職專班111PB 選修	"},{科號:"11120KELN604200",課程中文名稱:"正念教育研究",課程英文名稱:"Study in Mindful Education",學分數:"3",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限教育行政在職專班",停開註記:"",教室與上課時間:`Nanda南大N202	WaWbWc
`,授課教師:`謝傳崇	HSIEH, CHUAN-CHUNG
`,擋修說明:"",課程限制說明:"限教科系碩士在職專班專班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"教科系碩士在職專班111PB 選修	"},{科號:"11120KELN606300",課程中文名稱:"教學與學習策略",課程英文名稱:"Teaching and Learning Strategies",學分數:"2",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限課程與教學在職專班乙組(金門班)",停開註記:"",教室與上課時間:`Kinmen金門中心	S7S8
`,授課教師:`白雲霞	PAI, YUN-HSIA
`,擋修說明:"",課程限制說明:"限專班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"教科系碩士在職專班111PC 選修	"},{科號:"11120KELN607300",課程中文名稱:"教育行政研究",課程英文名稱:"Study in Educational Administration",學分數:"2",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限課程與教學在職專班乙組(金門班)",停開註記:"",教室與上課時間:`Kinmen金門中心	S9Sa
`,授課教師:`謝卓君	HSIEH, CHUO-CHUN
`,擋修說明:"",課程限制說明:"限專班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"教科系碩士在職專班111PC 選修	"},{科號:"11120KELN612100",課程中文名稱:"新興科技與教學創新",課程英文名稱:"New Technologies and Innovative Teaching",學分數:"3",人限:"25",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限課程與教學在職專班",停開註記:"",教室與上課時間:`Nanda南大N204	WaWbWc
`,授課教師:`王淳民	WANG, CHUN-MIN
`,擋修說明:"",課程限制說明:"限教科系碩士在職專班專班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"教科系碩士在職專班111PA 選修	"},{科號:"11120KENI100200",課程中文名稱:"英文二",課程英文名稱:"English II",學分數:"2",人限:"55",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"本課程為16週課程；英教系同學限修此科，不可修習其他英文二；非英教系同學選此科無法抵《英文領域必修》",停開註記:"",教室與上課時間:`Nanda南大9204	M5M6
`,授課教師:`洪雅慧	HUNG, YA-HUI
`,擋修說明:"",課程限制說明:"限英教系大學部1年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"英教系111B  必修	"},{科號:"11120KENI110400",課程中文名稱:"英語語言學概論",課程英文名稱:"Introduction to English Linguistics",學分數:"3",人限:"55",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`Nanda南大9512	M3M4W2
`,授課教師:`黃漢君	HUANG, HAN-CHUN
`,擋修說明:"",課程限制說明:"英教系大學部1年級優先，第3次選課起開放全校修習",第一二專長對應:"英語教學(第二專長)	英語教學(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"英教系111B  必修	"},{科號:"11120KENI110501",課程中文名稱:"英文寫作",課程英文名稱:"English Writing",學分數:"2",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`Nanda南大9207	W3W4
`,授課教師:`余立棠	YU, LI-TANG
`,擋修說明:"",課程限制說明:"英教系大學部1年級優先，第3次選課起開放全校修習",第一二專長對應:"英語教學(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"英教系111B  必修	"},{科號:"11120KENI110502",課程中文名稱:"英文寫作",課程英文名稱:"English Writing",學分數:"2",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`Nanda南大9207	F1F2
`,授課教師:`余立棠	YU, LI-TANG
`,擋修說明:"",課程限制說明:"英教系大學部1年級優先，第3次選課起開放全校修習",第一二專長對應:"英語教學(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"英教系111B  必修	"},{科號:"11120KENI130800",課程中文名稱:"初階法語",課程英文名稱:"Beginning French",學分數:"2",人限:"35",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`Nanda南大9512	W5W6
`,授課教師:`鄧宜菁	TENG, YI-CHING
`,擋修說明:"",課程限制說明:"英教系優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"英教系111B  選修	"},{科號:"11120KENI131000",課程中文名稱:"聖經故事與暢銷電影",課程英文名稱:"Biblical Stories in 21st Best-selling Movies",學分數:"2",人限:"55",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"本課程為16週課程；107學年度入學非外語系英教系同學可承認為選讀英文學分，課程級數為高級",停開註記:"",教室與上課時間:`Nanda南大9205	T3T4
`,授課教師:`詹智婷	CHAN, CHIH-TING
`,擋修說明:"",課程限制說明:"英教系優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"英教系111B  選修	"},{科號:"11120KENI200400",課程中文名稱:"英文四",課程英文名稱:"English IV",學分數:"2",人限:"48",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"本課程為16週課程；英教系同學限修此科，不可修習選讀英文抵；非英教系同學選此科無法抵《英文領域必修》",停開註記:"",教室與上課時間:`Nanda南大9106	R5R6
`,授課教師:`金祖詠	KING, TZUU-YEONG
`,擋修說明:"",課程限制說明:"限英教系大學部2年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"英教系110B  必修	"},{科號:"11120KENI220200",課程中文名稱:"外語習得",課程英文名稱:"Foreign Language Acquisition",學分數:"3",人限:"55",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`Nanda南大9512	R7R8R9
`,授課教師:`楊榮蘭	YANG, RONG-LAN
`,擋修說明:"",課程限制說明:"英教系大學部2年級優先，第3次選課起開放全校修習",第一二專長對應:"英語教學(第二專長)	英語教學(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"英教系110B  必修	"},{科號:"11120KENI230900",課程中文名稱:"語言與文化",課程英文名稱:"Language and Culture",學分數:"2",人限:"55",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`Nanda南大9512	M5M6
`,授課教師:`黃漢君	HUANG, HAN-CHUN
`,擋修說明:"",課程限制說明:"英教系優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"英教系110B  選修	"},{科號:"11120KENI231100",課程中文名稱:"音韻學",課程英文名稱:"Phonology",學分數:"2",人限:"55",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`Nanda南大9512	T1T2
`,授課教師:`吳睿純	WU, JUI-CHUN
`,擋修說明:"",課程限制說明:"英教系優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"(跨領域)語言治療學分學程",不可加簽說明:"",必選修說明:"英教系110B  選修	"},{科號:"11120KENI240400",課程中文名稱:"英語故事教學",課程英文名稱:"English Storytelling Instruction",學分數:"2",人限:"55",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`Nanda南大9204	M3M4
`,授課教師:`洪雅慧	HUNG, YA-HUI
`,擋修說明:"",課程限制說明:"英教系優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"英教系110B  選修	"},{科號:"11120KENI320400",課程中文名稱:"語言課程設計",課程英文名稱:"Language Curriculum Design",學分數:"3",人限:"55",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`Nanda南大9512	M1M2R1
`,授課教師:`羅文杏	LUO, WEN-HSING
`,擋修說明:"",課程限制說明:"英教系大學部3年級優先，第3次選課起開放全校修習",第一二專長對應:"英語教學(第二專長)	英語教學(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"英教系109B  必修	"},{科號:"11120KENI332200",課程中文名稱:"語用學",課程英文名稱:"Pragmatics",學分數:"2",人限:"55",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`Nanda南大9512	T3T4
`,授課教師:`吳睿純	WU, JUI-CHUN
`,擋修說明:"",課程限制說明:"英教系優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"英教系109B  選修	"},{科號:"11120KENI332300",課程中文名稱:"英美小說選讀",課程英文名稱:"Selected Readings on English Fiction",學分數:"2",人限:"55",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`Nanda南大9512	T5T6
`,授課教師:`鄧宜菁	TENG, YI-CHING
`,擋修說明:"",課程限制說明:"英教系優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"英教系109B  選修	"},{科號:"11120KENI341000",課程中文名稱:"中英翻譯",課程英文名稱:"English-Chinese Translation",學分數:"2",人限:"48",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`Nanda南大9207	R3R4
`,授課教師:`詹智婷	CHAN, CHIH-TING
`,擋修說明:"",課程限制說明:"英教系優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"英教系109B  選修	"},{科號:"11120KENI420800",課程中文名稱:"英語專題製作",課程英文名稱:"Senior Project",學分數:"2",人限:"55",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`Nanda南大9204	F7F8
`,授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"限英教系大學部4年級",第一二專長對應:"英語教學(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"英教系108B  必修	"},{科號:"11120KENI432600",課程中文名稱:"英語能力密集訓練",課程英文名稱:"Intensive Training in English",學分數:"2",人限:"0",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"16週課程/採加簽選課,英教系同學如未通過本系規定之英語畢業門檻應檢附英檢證明及修課申請表至系辦才能選課",停開註記:"",教室與上課時間:`Nanda南大9204	F3F4
`,授課教師:`王瑞蓉	WANG, JUI-JONG
`,擋修說明:"",課程限制說明:"限英教系",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"英教系108B  選修	"},{科號:"11120KENI441200",課程中文名稱:"國小英語教學觀摩與試教",課程英文名稱:"Elementary English Class Observation and Teaching Practice",學分數:"2",人限:"55",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`Nanda南大9513	T3T4
`,授課教師:`余立棠	YU, LI-TANG
`,擋修說明:"",課程限制說明:"英教系優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"英教系108B  選修	"},{科號:"11120KENI520100",課程中文名稱:"當代英語教學議題探討",課程英文名稱:"Studies on Current Issues in English Teaching and Learning",學分數:"3",人限:"15",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`Nanda南大9212	T2T3T4
`,授課教師:`羅文杏	LUO, WEN-HSING
`,擋修說明:"",課程限制說明:"限英教系碩士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"英教系111M  選修	"},{科號:"11120KENI520300",課程中文名稱:"閱讀教學研究",課程英文名稱:"Studies on Reading Instruction",學分數:"3",人限:"15",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`Nanda南大9212	M5M6M7
`,授課教師:`周秋惠	CHOU, CHIOU-HUI
`,擋修說明:"",課程限制說明:"限英教系碩士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"英教系111M  選修	"},{科號:"11120KENI530200",課程中文名稱:"詩學研究",課程英文名稱:"Studies on Poetics",學分數:"3",人限:"15",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`Nanda南大9212	W7W8W9
`,授課教師:`鄧宜菁	TENG, YI-CHING
`,擋修說明:"",課程限制說明:"限英教系碩士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"英教系111M  選修	"},{科號:"11120KENI640000",課程中文名稱:"論文研究",課程英文名稱:"Thesis",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限英教系碩二以上修習",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"排除英教系碩士班1年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"英教系111M  必修	"},{科號:"11120KHCT100400",課程中文名稱:"教育的國際視野",課程英文名稱:"Global Perspectives on Education",學分數:"2",人限:"180",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"教育學院院核心課程",停開註記:"",教室與上課時間:`Nanda南大N001	W5W6
`,授課教師:`教育學院	
`,擋修說明:"",課程限制說明:"幼教系大學部1年級,教科系大學部1年級,特教系大學部1年級,運科系大學部1年級優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"幼教系111B  必修	教科系111B  必修	教育學院學士班111B  必修	特教系111B  必修	運科系111B  必修	"},{科號:"11120KHCT100700",課程中文名稱:"巨量資料軟體實務",課程英文名稱:"Software Practice for Data Analytics",學分數:"2",人限:"16",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`GEN II綜二420	R5R6
`,授課教師:`郭孟倫	KUO, MENG-LUN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120KHCT100800",課程中文名稱:"巨量資料程式設計",課程英文名稱:"Introduction of Big Data and Programming",學分數:"2",人限:"16",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"授課教師：游函諺",停開註記:"",教室與上課時間:`GEN II綜二420	F3F4
`,授課教師:`聘任中	
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120KHCT100900",課程中文名稱:"大數據與人工智慧",課程英文名稱:" Big Data and Artificial Intelligence",學分數:"2",人限:"35",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"上課地點:南大校區電腦教室",停開註記:"",教室與上課時間:"",授課教師:`曾郁庭	ZENG,YU-TING
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120KHCT401700",課程中文名稱:"華德福音樂教學",課程英文名稱:"The music education of Waldorf",學分數:"2",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`Nanda南大1319	T8T9
`,授課教師:`何雅雯	HO, YA-WEN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)華德福教育學分學程",不可加簽說明:"",必選修說明:""},{科號:"11120KHCT401900",課程中文名稱:"華德福感官與教學",課程英文名稱:"Twelve Senses in Waldorf Education",學分數:"2",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`Nanda南大1319	F5F6
`,授課教師:`成虹飛	CHERNG, HORN-FAY
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)華德福教育學分學程",不可加簽說明:"",必選修說明:""},{科號:"11120KHCT402000",課程中文名稱:"華德福教育典籍導讀",課程英文名稱:"Selected Works of Waldorf Education",學分數:"2",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`Nanda南大1319	W3W4
`,授課教師:`王智弘	WANG,CHIH-HUNG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)華德福教育學分學程",不可加簽說明:"",必選修說明:""},{科號:"11120KHCT500101",課程中文名稱:"研究方法-質性研究",課程英文名稱:"Qualitative Research Methods",學分數:"3",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"教育學院碩士班院核心課程",停開註記:"",教室與上課時間:`Nanda南大9212	M1M2M3
`,授課教師:`簡靜雯	CHIEN, CHIN-WEN
`,擋修說明:"",課程限制說明:"英教系碩士班優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"環文系111M  必修	幼教系111M  必修	英教系111M  必修	學科所111M  必修	臺語所111M  必修	"},{科號:"11120KHCT500103",課程中文名稱:"研究方法-質性研究",課程英文名稱:"Qualitative Research Methods",學分數:"3",人限:"25",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"教育學院碩士班院核心課程, 本課程為16週課程",停開註記:"",教室與上課時間:`Nanda南大N201	M2M3M4
`,授課教師:`謝明芳	HSIEH, MING-FANG
`,擋修說明:"",課程限制說明:"幼教系優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"環文系111M  必修	幼教系111M  必修	英教系111M  必修	學科所111M  必修	臺語所111M  必修	"},{科號:"11120KHCT500105",課程中文名稱:"研究方法-質性研究",課程英文名稱:"Qualitative Research Methods",學分數:"3",人限:"25",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"教育學院碩士班院核心課程",停開註記:"",教室與上課時間:`Nanda南大N317	W5W6W7
`,授課教師:`李安明	LI, AN-MIN
`,擋修說明:"",課程限制說明:"教科系碩士班優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"學科所111M  必修	環文系111M  必修	幼教系111M  必修	英教系111M  必修	臺語所111M  必修	"},{科號:"11120KHCT500201",課程中文名稱:"研究方法-量化研究",課程英文名稱:"Quantitative Research Methods",學分數:"3",人限:"25",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"教育學院碩士班院核心課程,本課程為16 週課程。",停開註記:"",教室與上課時間:`Nanda南大2205	W5W6W7
`,授課教師:`陳明蕾	CHEN, MING-LEI
`,擋修說明:"",課程限制說明:"臺語所碩士班優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"環文系111M  必修	幼教系111M  必修	英教系111M  必修	學科所111M  必修	特教系111M  必修	臺語所111M  必修	"},{科號:"11120KHCT500202",課程中文名稱:"研究方法-量化研究",課程英文名稱:"Quantitative Research Methods",學分數:"3",人限:"16",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"教育學院碩士班院核心課程",停開註記:"",教室與上課時間:`GEN II綜二420	R2R3R4
`,授課教師:`陳承德	CHEN, CHENG-TE
`,擋修說明:"",課程限制說明:"學科所碩士班優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"環文系111M  必修	幼教系111M  必修	英教系111M  必修	學科所111M  必修	特教系111M  必修	臺語所111M  必修	"},{科號:"11120KHCT500203",課程中文名稱:"研究方法-量化研究",課程英文名稱:"Quantitative Research Methods",學分數:"3",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"教育學院碩士班院核心課程",停開註記:"",教室與上課時間:`Nanda南大9105	T2T3T4
`,授課教師:`丁志堅	DING, TSU-JEN
`,擋修說明:"",課程限制說明:"環文系碩士班優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"環文系111M  必修	幼教系111M  必修	英教系111M  必修	學科所111M  必修	特教系111M  必修	臺語所111M  必修	"},{科號:"11120KHCT500204",課程中文名稱:"研究方法-量化研究",課程英文名稱:"Quantitative Research Methods",學分數:"3",人限:"25",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"教育學院碩士班院核心課程",停開註記:"",教室與上課時間:`Nanda南大N316	W5W6W7
`,授課教師:`李元萱	LEE, YUAN-HSUAN
`,擋修說明:"",課程限制說明:"教科系碩士班優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"環文系111M  必修	幼教系111M  必修	英教系111M  必修	學科所111M  必修	特教系111M  必修	臺語所111M  必修	"},{科號:"11120KHCT500205",課程中文名稱:"研究方法-量化研究",課程英文名稱:"Quantitative Research Methods",學分數:"3",人限:"25",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"教育學院碩士班院核心課程；本課程為16週課程",停開註記:"",教室與上課時間:`Nanda南大N201	M5M6M7
`,授課教師:`陳文玲	CHEN, WEN-LING
`,擋修說明:"",課程限制說明:"幼教系碩士班優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"學科所111M  必修	環文系111M  必修	幼教系111M  必修	英教系111M  必修	特教系111M  必修	臺語所111M  必修	"},{科號:"11120KHCT500300",課程中文名稱:"研究方法-語言學研究",課程英文名稱:"Linguistic Research Methods",學分數:"3",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"教育學院碩士班院核心課程",停開註記:"",教室與上課時間:`Nanda南大9426	W5W6W7
`,授課教師:`呂菁菁	LU, CHING-CHING
葉瑞娟	YEH, JUI-CHUAN
劉秀雪	LIU, HSIU-HSUEH
`,擋修說明:"",課程限制說明:"臺語所碩士班優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"臺語所111M  必修	"},{科號:"11120KIPE100400",課程中文名稱:"STEAM教育專題探究",課程英文名稱:"Study in STEAM Education",學分數:"3",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`Nanda南大1407	F2F3F4
`,授課教師:`蔡寶桂	TSAT,PAO-KUEI
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"教育學院學士班111B  選修	"},{科號:"11120KIPE100700",課程中文名稱:"華德福教育專題探究",課程英文名稱:"Study in Waldorf Education",學分數:"3",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`Nanda南大1319	W5W6W7
`,授課教師:`王智弘	WANG,CHIH-HUNG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)華德福教育學分學程",不可加簽說明:"",必選修說明:"教育學院學士班111B  選修	"},{科號:"11120KIPE100800",課程中文名稱:"科技與學習",課程英文名稱:"Technology and Learning",學分數:"3",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`Nanda南大N201	T6F7F8
`,授課教師:`王淳民	WANG, CHUN-MIN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"學習科學(第二專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"教育學院學士班109B  選修	"},{科號:"11120KIPE101500",課程中文名稱:"認知心理學",課程英文名稱:"Cognitive Psychology",學分數:"3",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"16週課程；先修科目為「普通心理學」；加退選期間欲加選者請透過加簽系統辦理。",停開註記:"",教室與上課時間:`Nanda南大1407	R7R8R9
`,授課教師:`陳伊慈	CHEN, EVA E
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>心理學與現代生活-成績需C-以上<BR>普通心理學-成績需C-以上<BR>普通心理學一-成績需C-以上<BR><br>上述條件任選一科，則不擋修。</div>`,課程限制說明:"",第一二專長對應:"心智、大腦與學習(第二專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"教育學院學士班110B  選修	教育學院學士班111B  選修	"},{科號:"11120KIPE120200",課程中文名稱:"永續發展教育與文化素養",課程英文名稱:"Cultural literacy and Education for sustainable development",學分數:"3",人限:"18",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`Nanda南大N207	R7R8R9
`,授課教師:`張瑋琦	CHANG, WEI-CHI
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"教育學院學士班111B  選修	"},{科號:"11120KIPE123700",課程中文名稱:"環境教育",課程英文名稱:"Environmental Education",學分數:"3",人限:"48",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`Nanda南大1407	T7T8T9
`,授課教師:`楊宗翰	YANG, CHUNG-HAN
黃書偉	HUANG, SHU-WEI
張瑋琦	CHANG, WEI-CHI
`,擋修說明:"",課程限制說明:"",第一二專長對應:"永續發展教育(第二專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"教育學院學士班111B  選修	"},{科號:"11120KIPE124200",課程中文名稱:"永續發展教育與經濟素養",課程英文名稱:"Economic literacy and Education for sustainable development",學分數:"3",人限:"48",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`Nanda南大9105	W6W7W8
`,授課教師:`胡均立	HU, JIN-LI
闕雅文	CHUEH, YA-WEN
黃書偉	HUANG, SHU-WEI
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"教育學院學士班111B  選修	"},{科號:"11120KIPE201200",課程中文名稱:"APP設計與教學應用",課程英文名稱:"APP Design and Instructional Applications",學分數:"3",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"上課地點:電腦教室",停開註記:"",教室與上課時間:"",授課教師:`唐文華	TANG, WEN-HUA
`,擋修說明:"",課程限制說明:"",第一二專長對應:"學習科學(第二專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"教育學院學士班108B  選修	教育學院學士班109B  選修	教育學院學士班110B  選修	教育學院學士班111B  選修	"},{科號:"11120KIPE201300",課程中文名稱:"資料科學與數據分析",課程英文名稱:"Data Science and Analytics",學分數:"3",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程上150分，其餘時間由教授彈性運用。「心智、大腦與學習」專長必修。為16週課程。上課地點:電腦教室",停開註記:"",教室與上課時間:"",授課教師:`莊鈞翔	CHUANG, CHUN-HSIANG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"心智、大腦與學習(第二專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"教育學院學士班110B  選修	"},{科號:"11120KIPE220400",課程中文名稱:"行動學習與環境調查規劃",課程英文名稱:"Action learning of environmental investigation and planning",學分數:"3",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`Nanda南大2303	R6R7R8
`,授課教師:`曾慈慧	TSENG, TZU-HUI
丁志堅	DING, TSU-JEN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"永續發展教育(第二專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"教育學院學士班110B  選修	"},{科號:"11120KIPE220700",課程中文名稱:"地景永續發展的在地實踐",課程英文名稱:"Local Practice of Landscape Sustainable Development",學分數:"3",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`Nanda南大2303	T2T3T4
`,授課教師:`倪進誠	NI, CHIN-CHENG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"永續發展教育(第二專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"教育學院學士班110B  選修	"},{科號:"11120KIPE222000",課程中文名稱:"環境衝擊與影響評估",課程英文名稱:"Environmental Impact Assessment",學分數:"3",人限:"55",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`Nanda南大9104	W2W3W4
`,授課教師:`黃書偉	HUANG, SHU-WEI
`,擋修說明:"",課程限制說明:"",第一二專長對應:"永續發展教育(第二專長)",學分學程對應:"(跨領域)永續發展與環境管理學分學程",不可加簽說明:"",必選修說明:"教育學院學士班110B  選修	"},{科號:"11120KIPE224700",課程中文名稱:"飲食素養與永續食物設計",課程英文名稱:"Food Literacy and Sustainable Food Design",學分數:"3",人限:"55",新生保留人數:"0",通識對象:"*7",通識類別:"自然科學領域 Elective GE course: Natural Sciences",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`Nanda南大9105	W2W3W4
`,授課教師:`張瑋琦	CHANG, WEI-CHI
`,擋修說明:"",課程限制說明:"",第一二專長對應:"永續發展教育(第二專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"教育學院學士班108B  選修	"},{科號:"11120KIPE300100",課程中文名稱:"畢業專題",課程英文名稱:"Thesis",學分數:"1",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"如需調整指導教授或專題形式，請至本班網頁下載並填寫調整申請書並送至院辦辦理。",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"限教育學院學士班大學部3年級4年級",第一二專長對應:"永續發展教育(第二專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"教育學院學士班109B  必修	"},{科號:"11120KIPE320500",課程中文名稱:"永續發展與資源管理",課程英文名稱:"Sustainable Development and Resources Management",學分數:"3",人限:"48",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`Nanda南大1407	M5M6M7
`,授課教師:`闕雅文	CHUEH, YA-WEN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"永續發展教育(第二專長)",學分學程對應:"(跨領域)永續發展與環境管理學分學程",不可加簽說明:"",必選修說明:"教育學院學士班109B  選修	"},{科號:"11120KIPE322700",課程中文名稱:"文化遺產教育",課程英文名稱:"Cultural Heritage Education",學分數:"3",人限:"48",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"16週彈性週數課程",停開註記:"",教室與上課時間:`Nanda南大1407	W6W7W8
`,授課教師:`榮芳杰	RONG, FANG-JAY
`,擋修說明:"",課程限制說明:"",第一二專長對應:"永續發展教育(第二專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"教育學院學士班108B  選修	"},{科號:"11120KIPE324300",課程中文名稱:"企業與永續發展",課程英文名稱:"Business and Sustainable Development",學分數:"3",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`Nanda南大1311	W5W6W7
`,授課教師:`楊宗翰	YANG, CHUNG-HAN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"永續發展教育(第二專長)",學分學程對應:"(跨領域)永續發展與環境管理學分學程",不可加簽說明:"",必選修說明:"教育學院學士班109B  選修	"},{科號:"11120KLST500000",課程中文名稱:"論文研究",課程英文名稱:"Thesis",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限學科所碩二以上修習",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"排除學科所碩士班1年級,學科所碩士班1年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"學科所111M  必修	"},{科號:"11120KLST520200",課程中文名稱:"書報討論二",課程英文名稱:"Seminar(II)",學分數:"1",人限:"29",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`GEN II綜二410	R7R8
`,授課教師:`廖冠智	LIAO, GUAN-ZE
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"學科所111M  必修	"},{科號:"11120KLST610400",課程中文名稱:"英文學術論文寫作概論",課程英文名稱:"Introduction to Academic Writing in English",學分數:"3",人限:"15",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"欲修習本課程之同學，第一堂務必準時出席。",停開註記:"",教室與上課時間:`EDU教  312	T7T8T9
`,授課教師:`徐憶萍	HSU, ANGELA YI-PING
`,擋修說明:"",課程限制說明:"學科所優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:"學科所111M  選修	"},{科號:"11120KLST620300",課程中文名稱:"STEAM教育導論",課程英文名稱:"Introduction to STEAM Education",學分數:"3",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"建議與本學期開設之「活動式教學與課程設計」課程擇一選修。",停開註記:"",教室與上課時間:`GEN II綜二409	F2F3F4
`,授課教師:`劉樹忠	LIU, SHU-CHUNG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"學科所111M  選修	"},{科號:"11120KLST620400",課程中文名稱:"運算思維與程式教育",課程英文名稱:"Computational Thinking and Programming Education",學分數:"3",人限:"29",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程為16周課程；修課學生需自備筆電。",停開註記:"",教室與上課時間:`GEN II綜二410	T2T3T4
`,授課教師:`區國良	OU, KUO-LIANG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"學科所111M  選修	"},{科號:"11120KLST630100",課程中文名稱:"使用者體驗設計",課程英文名稱:"User Experience Design",學分數:"3",人限:"17",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程為16週課程,限大三及以上,院學士班大三四若無法點選請email課務組。",停開註記:"",教室與上課時間:`GEN II綜二409	TnT5T6
`,授課教師:`許有真	HSU, YU-CHEN
`,擋修說明:"",課程限制說明:"排除大學部1年級2年級",第一二專長對應:"",學分學程對應:"(跨領域)創新創業學分學程/(跨領域)創新設計學分學程",不可加簽說明:"",必選修說明:"學科所111M  選修	"},{科號:"11120KLST630200",課程中文名稱:"使用者與對話機器人設計研究",課程英文名稱:"The Study of User and Chatbot Design",學分數:"3",人限:"29",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程為16週課程。",停開註記:"",教室與上課時間:`GEN II綜二410	W5W6W7
`,授課教師:`廖冠智	LIAO, GUAN-ZE
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"學科所111M  選修	"},{科號:"11120KLST630400",課程中文名稱:"跨領域學習設計研究",課程英文名稱:"The Study of Cross-disciplinary Learning Design",學分數:"3",人限:"29",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`GEN II綜二410	W3W4Wn
`,授課教師:`林倍伊	LIN, PEI-YI
林秋斌	LIN, CHIU-PIN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"學科所111M  選修	"},{科號:"11120KLST630500",課程中文名稱:"學習領域之研究議題探討",課程英文名稱:"Critical Issues in Learning",學分數:"3",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`GEN II綜二409	T2T3T4
`,授課教師:`陳素燕	CHEN, SU-YEN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"學科所111M  選修	"},{科號:"11120KLST630600",課程中文名稱:"活動式教學與課程設計",課程英文名稱:"Activity Approach in Teaching and Course Design",學分數:"3",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"建議與本學期開設之「Steam教育導論」課程擇一選修。",停開註記:"",教室與上課時間:`GEN II綜二409	M2M3M4
`,授課教師:`劉樹忠	LIU, SHU-CHUNG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"學科所111M  選修	"},{科號:"11120KLST630900",課程中文名稱:"科學學習",課程英文名稱:"Learning & Teaching of Science",學分數:"3",人限:"16",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`GEN II綜二420	TnT5T6
`,授課教師:`傅麗玉	FU, LI-YU
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"學科所111M  選修	"},{科號:"11120KLST640500",課程中文名稱:"數位學習創新與推廣",課程英文名稱:"Diffusion of e-Learning Innovations",學分數:"3",人限:"16",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程為16週課程。",停開註記:"",教室與上課時間:`GEN II綜二420	W8W9Wa
`,授課教師:`林秋斌	LIN, CHIU-PIN
王鼎銘	WANG, DING-MING
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"學科所111M  選修	"},{科號:"11120KLST640700",課程中文名稱:"媒體產業發展與研究",課程英文名稱:"Media Industry: Development and Research",學分數:"3",人限:"16",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`GEN II綜二420	T8T9Ta
`,授課教師:`廖冠智	LIAO, GUAN-ZE
王鼎銘	WANG, DING-MING
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"學科所111M  選修	"},{科號:"11120KMS 500200",課程中文名稱:"教育統計",課程英文名稱:"Educational Statistics",學分數:"3",人限:"45",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"數教組與科教組的共同選修課",停開註記:"",教室與上課時間:`Nanda南大9313	T5T6T7
`,授課教師:`陳正忠	CHEN, JENG-CHUNG
`,擋修說明:"",課程限制說明:"限碩士班博士班專班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"數理所111M  選修	"},{科號:"11120KMS 500400",課程中文名稱:"行動研究法",課程英文名稱:"Action Research Methodology",學分數:"3",人限:"42",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"數教組與科教組的共同選修課",停開註記:"",教室與上課時間:`Nanda南大9421	R5R6R7
`,授課教師:`王姿陵	WANG, TZU-LING
`,擋修說明:"",課程限制說明:"限碩士班博士班專班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"數理所111M  選修	"},{科號:"11120KMS 500500",課程中文名稱:"論文研究",課程英文名稱:"Thesis",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限數理所碩二以上修習",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"排除數理所碩士班1年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"數理所111M  必修	"},{科號:"11120KMS 510100",課程中文名稱:"專題討論一",課程英文名稱:"Colloquium I",學分數:"1",人限:"45",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"1.數學教育組一年級生的必修課。2.選修此課程者，不可同時選修專題討論二。3.科學教育組勿選。",停開註記:"",教室與上課時間:`Nanda南大9313	T8
`,授課教師:`林勇吉	LIN, YUNG-CHI
`,擋修說明:"",課程限制說明:"限碩士班博士班專班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"數理所111M  必修	"},{科號:"11120KMS 510200",課程中文名稱:"專題討論二",課程英文名稱:"Colloquium (Ⅱ)",學分數:"1",人限:"45",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"1.數學教育組二年級生的必修課。2.選修此課程者，不可同時選修專題討論一。3.科學教育組勿選。",停開註記:"",教室與上課時間:`Nanda南大9313	T9
`,授課教師:`林勇吉	LIN, YUNG-CHI
`,擋修說明:"",課程限制說明:"限碩士班博士班專班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"數理所111M  必修	"},{科號:"11120KMS 530600",課程中文名稱:"數學教材教法研究",課程英文名稱:"Studies of Mathematics Teaching Methods",學分數:"3",人限:"42",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"數教組選修課，上課16週。",停開註記:"",教室與上課時間:`Nanda南大9313	M5M6M7
`,授課教師:`林碧珍	LIN, PI-JEN
`,擋修說明:"",課程限制說明:"限碩士班博士班專班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"數理所111M  選修	"},{科號:"11120KMS 531900",課程中文名稱:"課室討論文化研究專題",課程英文名稱:"Topics in Classroom Discussion Culture",學分數:"3",人限:"42",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"數教組選修課",停開註記:"",教室與上課時間:`Nanda南大9421	M9MaMb
`,授課教師:`蔡文煥	TSAI, WEN-HUAN
`,擋修說明:"",課程限制說明:"限碩士班博士班專班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"數理所111M  選修	"},{科號:"11120KMS 550300",課程中文名稱:"數學教師覺察力研究",課程英文名稱:"Studies of Mathematics Teacher Noticing",學分數:"3",人限:"45",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"數教組選修課",停開註記:"",教室與上課時間:`Nanda南大9313	W9WaWb
`,授課教師:`林勇吉	LIN, YUNG-CHI
`,擋修說明:"",課程限制說明:"限碩士班博士班專班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"數理所111M  選修	"},{科號:"11120KMS 610100",課程中文名稱:"專題討論一",課程英文名稱:"Colloquium I",學分數:"1",人限:"42",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"1.科學教育組一年級生的必修課。2.選修此課程者，不可同時選修專題討論二。3.數學教育組勿選。",停開註記:"",教室與上課時間:`Nanda南大9312	T8
`,授課教師:`王姿陵	WANG, TZU-LING
`,擋修說明:"",課程限制說明:"限碩士班博士班專班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"數理所111M  必修	"},{科號:"11120KMS 610200",課程中文名稱:"專題討論二",課程英文名稱:"Colloquium (Ⅱ)",學分數:"1",人限:"42",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"1.科學教育組二年級生的必修課。2.選修此課程者，不可同時選修專題討論一。3.數學教育組勿選。",停開註記:"",教室與上課時間:`Nanda南大9312	T9
`,授課教師:`王姿陵	WANG, TZU-LING
`,擋修說明:"",課程限制說明:"限碩士班博士班專班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"數理所111M  必修	"},{科號:"11120KMS 620200",課程中文名稱:"環境教育導論",課程英文名稱:"Introduction of Environmental Education",學分數:"3",人限:"42",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"科教組課程，碩一、二年級合開。",停開註記:"",教室與上課時間:`Nanda南大9312	F2F3F4
`,授課教師:`蘇宏仁	SU, HUNG-JEN
`,擋修說明:"",課程限制說明:"限碩士班博士班專班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"數理所111M  選修	"},{科號:"11120KMS 620500",課程中文名稱:"科學學習心理學",課程英文名稱:"Learning Psychology for Science",學分數:"3",人限:"42",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"科教組選修課",停開註記:"",教室與上課時間:`Nanda南大9312	MaMbMc
`,授課教師:`鄭嘉惠	CHENG, CHIA-HUI
`,擋修說明:"",課程限制說明:"限碩士班博士班專班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"數理所111M  選修	"},{科號:"11120KMS 620600",課程中文名稱:"科學教育與科學史",課程英文名稱:"Science Education and the History of Science",學分數:"3",人限:"42",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"科教組選修課，上課16週。",停開註記:"",教室與上課時間:`Nanda南大9312	W2W3W4
`,授課教師:`林裕仁	LIN, YU-REN
`,擋修說明:"",課程限制說明:"限碩士班博士班專班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"數理所111M  選修	"},{科號:"11120KMS 620900",課程中文名稱:"科學課程設計",課程英文名稱:"Design of Science Curriculum",學分數:"3",人限:"42",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"科教組選修課，上課16週。",停開註記:"",教室與上課時間:`Nanda南大9312	R8R9Ra
`,授課教師:`林裕仁	LIN, YU-REN
`,擋修說明:"",課程限制說明:"限碩士班博士班專班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"數理所111M  選修	"},{科號:"11120KMS 621000",課程中文名稱:"科學展覽之理論與實務",課程英文名稱:"Theory and Practice in Science Fair",學分數:"3",人限:"42",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"科教組選修課",停開註記:"",教室與上課時間:`Nanda南大9421	W5W6W7
`,授課教師:`王姿陵	WANG, TZU-LING
`,擋修說明:"",課程限制說明:"限碩士班博士班專班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"數理所111M  選修	"},{科號:"11120KMS 630500",課程中文名稱:"科學教育APP設計",課程英文名稱:"APP Design for Science Education",學分數:"3",人限:"42",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"科教組課程(電腦教室上課)",停開註記:"",教室與上課時間:"",授課教師:`唐文華	TANG, WEN-HUA
`,擋修說明:"",課程限制說明:"限碩士班博士班專班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"數理所111M  選修	"},{科號:"11120KMS 650100",課程中文名稱:"科學教師專業發展",課程英文名稱:"Professional Development of Science Teachers",學分數:"3",人限:"42",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"科教組選修課",停開註記:"",教室與上課時間:`Nanda南大9312	T2T3T4
`,授課教師:`鄭嘉惠	CHENG, CHIA-HUI
`,擋修說明:"",課程限制說明:"限碩士班博士班專班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"數理所111M  選修	"},{科號:"11120KMSN500200",課程中文名稱:"教育統計",課程英文名稱:"Educational Statistics",學分數:"3",人限:"45",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"數教組與科教組的共同選修課",停開註記:"",教室與上課時間:`Nanda南大9313	FaFbFc
`,授課教師:`陳正忠	CHEN, JENG-CHUNG
`,擋修說明:"",課程限制說明:"限專班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"數理所在職專班111P  選修	"},{科號:"11120KMSN500500",課程中文名稱:"論文",課程英文名稱:"Thesis",學分數:"2",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限專班二年級以上修習、已修畢二個學期課程、已修完畢業學分或當學年度要提出口試者的必選課。",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"排除數理所在職專班專班1年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"數理所在職專班111P  必修	"},{科號:"11120KMSN521400",課程中文名稱:"數學雙語教學的課程設計",課程英文名稱:"Curricular Design of Bilingual Teaching in Mathematics",學分數:"3",人限:"45",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"數教組的選修課，上課16週。",停開註記:"",教室與上課時間:`Nanda南大9313	MaMbMc
`,授課教師:`林碧珍	LIN, PI-JEN
`,擋修說明:"",課程限制說明:"限專班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"數理所在職專班111P  選修	"},{科號:"11120KMSN532200",課程中文名稱:"數學教學活動設計",課程英文名稱:"Designs for Mathematical Teaching Activities",學分數:"3",人限:"42",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"數教組的選修課",停開註記:"",教室與上課時間:`Nanda南大9421	TaTbTc
`,授課教師:`蔡文煥	TSAI, WEN-HUAN
`,擋修說明:"",課程限制說明:"限專班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"數理所在職專班111P  選修	"},{科號:"11120KMSN600400",課程中文名稱:"行動研究法",課程英文名稱:"Action Research Methodology",學分數:"3",人限:"42",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"數教組與科教組的共同選修課",停開註記:"",教室與上課時間:`Nanda南大9312	TaTbTc
`,授課教師:`王姿陵	WANG, TZU-LING
`,擋修說明:"",課程限制說明:"限專班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"數理所在職專班111P  選修	"},{科號:"11120KMSN610300",課程中文名稱:"科學教育導論",課程英文名稱:"Introduction to Science Education",學分數:"3",人限:"42",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"科教組的選修課",停開註記:"",教室與上課時間:`Nanda南大9421	RaRbRc
`,授課教師:`蘇宏仁	SU, HUNG-JEN
`,擋修說明:"",課程限制說明:"限專班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"數理所在職專班111P  選修	"},{科號:"11120KPC 110100",課程中文名稱:"普通心理學二",課程英文名稱:"Introduction to Psychology(II)",學分數:"3",人限:"90",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"此為16週課程；先修科目為「普通心理學一」；加退選期間欲加選者請透過加簽系統辦理。",停開註記:"",教室與上課時間:`Nanda南大N001	M7M8M9
`,授課教師:`李昆樺	LEE, KUN-HUA
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>普通心理學一-成績需C-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"【上學期原修普通心理學一KPC 110000(李昆樺老師)同學選課優先,第3次選課起開放】",第一二專長對應:"心理學(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"心諮系111B  必修	"},{科號:"11120KPC 120100",課程中文名稱:"心理與教育統計二",課程英文名稱:"Psychological and Educational Statistics (II)",學分數:"3",人限:"60",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"先修科目為「心理與教育統計一」。加退選期間欲加選者請透過加簽系統辦理。",停開註記:"",教室與上課時間:`Nanda南大N001	W7W8W9
`,授課教師:`陳承德	CHEN, CHENG-TE
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>心理與教育統計一-成績需C-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"【上學期原修心理與教育統計一KPC 120000(陳承德老師)同學選課優先,第3次選課起開放】",第一二專長對應:"心理學(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"心諮系111B  必修	"},{科號:"11120KPC 140000",課程中文名稱:"輔導原理與實務",課程英文名稱:"Principle and Practice of Guidance",學分數:"3",人限:"35",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"此為16週課程。加退選期間不開放線上加選，如欲加選，請出席第1週課程",停開註記:"",教室與上課時間:`Nanda南大N101	T7T8T9
`,授課教師:`朱惠瓊	CHU, HUI-CHUANG
張惟亮	CHANG, WEI-LIANG
`,擋修說明:"",課程限制說明:"限心諮系大學部1年級2年級",第一二專長對應:"心理學(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"心諮系111B  必修	"},{科號:"11120KPC 142100",課程中文名稱:"團體動力學",課程英文名稱:"Group Dynamics",學分數:"3",人限:"32",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"加退選期間欲加選者請透過加簽系統辦理。",停開註記:"",教室與上課時間:`Nanda南大2204	F2F3F4
`,授課教師:`鄭博文	CHENG, PO-WEN
`,擋修說明:"",課程限制說明:"限心諮系大學部1年級2年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"心諮系111B  選修	"},{科號:"11120KPC 152000",課程中文名稱:"正向心理與健康",課程英文名稱:"Positive Psychology and Well-Being",學分數:"3",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"師資待聘；加退選期間欲加選者請透過加簽系統辦理。",停開註記:"",教室與上課時間:`Nanda南大2203	W2W3W4
`,授課教師:`聘任中	
`,擋修說明:"",課程限制說明:"心諮系大學部優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"心諮系111B  選修	"},{科號:"11120KPC 172300",課程中文名稱:"戶外探索設計與實施",課程英文名稱:"Design and Practice of Outdoor Exploration",學分數:"2",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"加退選期間欲加選者請透過加簽系統辦理。",停開註記:"",教室與上課時間:`Nanda南大2203	M5M6
`,授課教師:`張惟亮	CHANG, WEI-LIANG
`,擋修說明:"",課程限制說明:"限教育學院",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"心諮系111B  選修	"},{科號:"11120KPC 173100",課程中文名稱:"人際關係與溝通",課程英文名稱:"Human Relations and Communication",學分數:"2",人限:"25",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"此為16週課程。加退選期間不受理線上加選及加簽。",停開註記:"",教室與上課時間:`Nanda南大1311	T3T4
`,授課教師:`李姿瑩	LEE, TZU-YING
`,擋修說明:"",課程限制說明:"限心諮系大學部",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"心諮系111B  選修	"},{科號:"11120KPC 210200",課程中文名稱:"發展心理學",課程英文名稱:"Developmental Psychology",學分數:"3",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"加退選期間不開放線上加選，欲加選者請透過加簽系統辦理。",停開註記:"",教室與上課時間:`Nanda南大N102	W7W8W9
`,授課教師:`李姝慧	LEE, SHU-HUI
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>普通心理學一-成績需C-以上<BR>普通心理學二-成績需C-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"限心諮系",第一二專長對應:"心理學(第二專長)	心理學(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"心諮系110B  必修	"},{科號:"11120KPC 220200",課程中文名稱:"心理與教育測驗",課程英文名稱:"Psychological and Educational Testing",學分數:"3",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"此為17週課程。先修科目為「心理與教育統計一」；加退選期間不受理線上加選及加簽。",停開註記:"",教室與上課時間:`Nanda南大N102	T7T8T9
`,授課教師:`王振世	WANG, CHEN-SHIH
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>心理與教育統計一-成績需C-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"限心諮系大學部2年級3年級",第一二專長對應:"心理學(第二專長)	心理學(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"心諮系110B  必修	"},{科號:"11120KPC 232200",課程中文名稱:"知覺心理學",課程英文名稱:"Perceptual Psychology",學分數:"3",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"加退選期間欲加選者請透過加簽系統辦理。",停開註記:"",教室與上課時間:`Nanda南大N203	R5R6R7
`,授課教師:`姚在府	YAO, ZAI-FU
`,擋修說明:"",課程限制說明:"心諮系大學部優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"心諮系110B  選修	"},{科號:"11120KPC 232500",課程中文名稱:"心理實驗法",課程英文名稱:"Methods of Psychological Experiments",學分數:"3",人限:"12",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"先修科目為「認知心理學」；加退選期間不受理線上加選及加簽。",停開註記:"",教室與上課時間:`Nanda南大N524	T2T3T4
`,授課教師:`高淑芳	KAO, SHU-FANG
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>認知心理學-成績需C-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"限心諮系大學部2年級",第一二專長對應:"心理學(第二專長)	心理學(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"心諮系110B  選修	"},{科號:"11120KPC 242300",課程中文名稱:"諮商輔導技術與策略",課程英文名稱:"Techniques and Strategies of Counseling",學分數:"3",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"先修科目為「諮商與心治療理論」；加退選期間欲修課者請透過加簽系統辦理。",停開註記:"",教室與上課時間:`Nanda南大2203	R2R3R4
`,授課教師:`李香盈	LEE HSIANG YING
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>諮商與心理治療理論-成績需C-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"限心諮系大學部2年級3年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"心諮系110B  選修	"},{科號:"11120KPC 262300",課程中文名稱:"組織心理學",課程英文名稱:"Organizational Psychology",學分數:"3",人限:"25",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"此為16週課程。加退選期間不受理線上加選及加簽。",停開註記:"",教室與上課時間:`Nanda南大N203	M5M6M7
`,授課教師:`張婉菁	CHANG, WAN-CHING
`,擋修說明:"",課程限制說明:"限心諮系大學部2年級3年級4年級",第一二專長對應:"人力資源管理(第二專長)	人力資源管理(第一專長)	心理學(第二專長)	心理學(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"心諮系110B  選修	"},{科號:"11120KPC 262700",課程中文名稱:"招募與甄選",課程英文名稱:"Recruitment and Selection",學分數:"3",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"此為16週課程。",停開註記:"",教室與上課時間:`Nanda南大1311	W2W3W4
`,授課教師:`陳殷哲	CHEN, YIN-CHE
王品惇	WANG, PIN-TUN
`,擋修說明:"",課程限制說明:"心諮系大學部優先，第3次選課起開放全校修習",第一二專長對應:"人力資源管理(第二專長)	人力資源管理(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"心諮系110B  選修	"},{科號:"11120KPC 322100",課程中文名稱:"統計套裝軟體",課程英文名稱:"Statistical Package for Social Studies",學分數:"3",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"上課教室：電腦教室。先修科目為「心理與教育統計二」。加退選期間不受理線上加選及加簽。",停開註記:"",教室與上課時間:"",授課教師:`劉政宏	LIU, CHENG-HONG
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>心理與教育統計二-成績需C-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"限心諮系大學部2年級3年級4年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"心諮系109B  選修	"},{科號:"11120KPC 322500",課程中文名稱:"臨床心理學",課程英文名稱:"Clinical Psychology",學分數:"3",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"加退選期間欲加選者請透過加簽系統辦理。",停開註記:"",教室與上課時間:`Nanda南大N204	W7W8W9
`,授課教師:`楊大和	YANG, TA-HO
`,擋修說明:"",課程限制說明:"限心諮系大學部3年級4年級",第一二專長對應:"心理學(第二專長)	心理學(第一專長)",學分學程對應:"(跨領域)神經科學學分學程",不可加簽說明:"",必選修說明:"心諮系109B  選修	"},{科號:"11120KPC 332400",課程中文名稱:"神經心理學",課程英文名稱:"Neuropsychology",學分數:"3",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"加退選期間欲加選者請透過加簽系統辦理。",停開註記:"",教室與上課時間:`Nanda南大1311	M5M6M7
`,授課教師:`林明寬	LIN,MING-KUAN
`,擋修說明:"",課程限制說明:"限心諮系大學部3年級4年級",第一二專長對應:"心理學(第二專長)	心理學(第一專長)",學分學程對應:"(跨領域)語言治療學分學程/(跨領域)神經科學學分學程",不可加簽說明:"",必選修說明:"心諮系109B  選修	"},{科號:"11120KPC 332600",課程中文名稱:"文化心理學",課程英文名稱:"Psychology of Culture",學分數:"3",人限:"15",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"此為16週課程。加退選期間欲修課者請透過加簽系統辦理。",停開註記:"",教室與上課時間:`Nanda南大2203	T3T4Tn
`,授課教師:`張硯評	Chang, Yen-Ping
`,擋修說明:"",課程限制說明:"限心諮系大學部3年級4年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"心諮系109B  選修	"},{科號:"11120KPC 342700",課程中文名稱:"團體諮商",課程英文名稱:"Group Counseling",學分數:"3",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"先修科目為「諮商與心理治療理論、團體動力學」；加退選期間欲加選者請透過加簽系統辦理。",停開註記:"",教室與上課時間:`Nanda南大N203	W2W3W4
`,授課教師:`許育光	HSU, YU-KUANG
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>諮商與心理治療理論-成績需C-以上<BR>團體動力學-成績需C-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"限心諮系大學部3年級4年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"心諮系109B  選修	"},{科號:"11120KPC 342800",課程中文名稱:"遊戲諮商",課程英文名稱:"Play Therapy",學分數:"3",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"先修科目為「諮商與心理治療理論」；加退選期間欲加選者請透過加簽系統辦理。",停開註記:"",教室與上課時間:`Nanda南大N414	R7R8R9
`,授課教師:`鍾岳庭	CHUNG, WEI-JEN
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>諮商與心理治療理論-成績需C-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"限心諮系大學部3年級4年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"心諮系109B  選修	"},{科號:"11120KPC 352300",課程中文名稱:"社區心理學",課程英文名稱:"Community Psychology",學分數:"3",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"此為16週課程。加退選期間欲加選者請透過加簽系統辦理。",停開註記:"",教室與上課時間:`Nanda南大1311	T7T8T9
`,授課教師:`吳哲良	WU, CHE-LIANG
`,擋修說明:"",課程限制說明:"心諮系大學部3年級4年級優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"心諮系109B  選修	"},{科號:"11120KPC 362100",課程中文名稱:"消費心理學",課程英文名稱:"Consumer Psychology",學分數:"3",人限:"25",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"此為16週及合開之課程，合開之師資待聘。",停開註記:"",教室與上課時間:`Nanda南大N524	R5R6R7
`,授課教師:`高登第	KAO, TENG-TI
`,擋修說明:"",課程限制說明:"心諮系大學部優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"心諮系109B  選修	"},{科號:"11120KPC 363300",課程中文名稱:"工商產業實習一",課程英文名稱:"Business Internship(I)",學分數:"2",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`Nanda南大1311	R9Ra
`,授課教師:`蔡宏基	TSAI, HUNG-JI
`,擋修說明:"",課程限制說明:"心諮系大學部3年級4年級優先，第3次選課起開放全校修習",第一二專長對應:"人力資源管理(第二專長)	人力資源管理(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"心諮系109B  選修	"},{科號:"11120KPC 382200",課程中文名稱:"心理專業倫理與法律",課程英文名稱:"Ethics and Law of Psychology Profession",學分數:"3",人限:"23",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"先修科目為「諮商與心理治療理論、心理與教育測驗」。加退選期間欲加選者請透過加簽系統辦理。",停開註記:"",教室與上課時間:`Nanda南大N203	M3M4Mn
`,授課教師:`施怡菱	SHIH, YI-LING
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>諮商與心理治療理論-成績需C-以上<BR><br>上述條件一定要有，而且<br><BR>心理與教育測驗-成績需C-以上<BR>心理與教育測驗-成績需C-以上<BR><br>上述條件任選一科，則不擋修。</div>`,課程限制說明:"限心諮系大學部3年級4年級",第一二專長對應:"心理學(第二專長)	心理學(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"心諮系109B  選修	"},{科號:"11120KPC 382300",課程中文名稱:"畢業專題一",課程英文名稱:"Graduate Project Ⅰ",學分數:"2",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"修課同學須於加退選時限內自行確定指導教師並繳交選修意向表至系辦公室",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"限心諮系大學部3年級4年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"心諮系109B  選修	"},{科號:"11120KPC 443000",課程中文名稱:"輔導與諮商實習二",課程英文名稱:"Guidance and Counseling Practicum(II)",學分數:"2",人限:"9",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"先修科目為「輔導與諮商實習一」；加退選期間不受理線上加選。",停開註記:"",教室與上課時間:`Nanda南大N524	R3R4
`,授課教師:`李昆樺	LEE, KUN-HUA
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>輔導與諮商實習一-成績需C-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"【上學期原修輔導與諮商實習一KPC 442900(李昆樺老師)同學選課優先,第3次選課起開放】",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"心諮系108B  選修	"},{科號:"11120KPC 452600",課程中文名稱:"犯罪心理與防治",課程英文名稱:"Criminal Psychology and Prevention",學分數:"3",人限:"25",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`Nanda南大2203	R5R6R7
`,授課教師:`陳建安	CHEN, CHIEN-AN
`,擋修說明:"",課程限制說明:"心諮系大學部4年級優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"心諮系108B  選修	"},{科號:"11120KPC 452700",課程中文名稱:"危機處理與自傷防治",課程英文名稱:"Crisis Intervention and Self-Injury Prevention",學分數:"3",人限:"16",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"此為16週課程。先修科目為「諮商與心理治療理論」；加退選期間欲加選者請透過加簽系統辦理。",停開註記:"",教室與上課時間:`Nanda南大N203	W5W6W7
`,授課教師:`施香如	SHIH, HSIANG-JU
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>諮商與心理治療理論-成績需C-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"限心諮系大學部4年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"心諮系108B  選修	"},{科號:"11120KPC 463400",課程中文名稱:"就業服務與勞動法規",課程英文名稱:"Employment Service and Labor Legislation",學分數:"3",人限:"15",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"此為16週課程。",停開註記:"",教室與上課時間:`Nanda南大2104	M5M6M7
`,授課教師:`林建銘	LIN, CHIEN-MING
`,擋修說明:"",課程限制說明:"心諮系大學部3年級4年級優先，第3次選課起開放全校修習",第一二專長對應:"人力資源管理(第二專長)	人力資源管理(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"心諮系108B  選修	"},{科號:"11120KPC 463500",課程中文名稱:"人力資源實務個案研究",課程英文名稱:"Human Resources Practice Case Study",學分數:"3",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"加退選期間欲加選者請透過加簽系統辦理。",停開註記:"",教室與上課時間:`Nanda南大2204	T2T3T4
`,授課教師:`柯全恒	KO, CHUAN-HENG
李秉懿	PING-I LI
`,擋修說明:"",課程限制說明:"心諮系大學部3年級4年級優先，第3次選課起開放全校修習",第一二專長對應:"人力資源管理(第二專長)	人力資源管理(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"心諮系108B  選修	"},{科號:"11120KPC 464000",課程中文名稱:"服務管理",課程英文名稱:"Service Management",學分數:"3",人限:"10",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"此為17週課程。",停開註記:"",教室與上課時間:`Nanda南大N526	T5T6T7
`,授課教師:`江旭新	CHIANG, HSU-HSIN
`,擋修說明:"",課程限制說明:"心諮系大學部4年級優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"心諮系108B  選修	"},{科號:"11120KPC 473400",課程中文名稱:"生涯調適與經營",課程英文名稱:"Career Adaptation and Management",學分數:"2",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"加退選期間欲加選者請透過加簽系統辦理。",停開註記:"",教室與上課時間:`Nanda南大1311	M9Ma
`,授課教師:`張明敏	CHANG, MING-MIN
`,擋修說明:"",課程限制說明:"限心諮系大學部3年級4年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"心諮系108B  選修	"},{科號:"11120KPC 522000",課程中文名稱:"質的研究法",課程英文名稱:"Qualitative Research Methods",學分數:"3",人限:"10",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"加退選期間欲加選者請透過加簽系統辦理。",停開註記:"",教室與上課時間:`Nanda南大N524	W2W3W4
`,授課教師:`林旖旎	LIN, YI-NII
`,擋修說明:"",課程限制說明:"心諮系碩士班優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"心諮系111MA 選修	"},{科號:"11120KPC 523300",課程中文名稱:"心理測驗與評量實務",課程英文名稱:"Psychological Testing and Assessment Practice",學分數:"3",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"此為17週課程。通過測驗始得修習。加退選期間不受理線上加選及加簽。",停開註記:"",教室與上課時間:`Nanda南大N203	T2T3T4
`,授課教師:`王振世	WANG, CHEN-SHIH
`,擋修說明:"",課程限制說明:"限心諮系碩士班1年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"心諮系111MA 選修	"},{科號:"11120KPC 542100",課程中文名稱:"諮商與心理治療實務",課程英文名稱:"Practice of Counseling and Psychotherapy",學分數:"3",人限:"18",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"先修科目為「諮商與心理治療理論(研)」；加退選期間不受理線上加選及加簽。",停開註記:"",教室與上課時間:`Nanda南大N203	T7T8T9
`,授課教師:`施香如	SHIH, HSIANG-JU
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>諮商與心理治療理論(研)-成績需B-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"限心諮系碩士班1年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"心諮系111MA 選修	"},{科號:"11120KPC 542200",課程中文名稱:"團體諮商理論與實務",課程英文名稱:"Theories and Practice of Group Counseling",學分數:"3",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"師資待聘。先修科目為「諮商與心理治療理論(研)」，加退選期間不受理線上加選及加簽。每月1次週末上課。",停開註記:"",教室與上課時間:`Nanda南大N524	M6M7M8
`,授課教師:`聘任中	
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>諮商與心理治療理論(研)-成績需B-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"限心諮系碩士班1年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"心諮系111MA 選修	"},{科號:"11120KPC 563000",課程中文名稱:"電子商務與網路行銷",課程英文名稱:"Seminar on Electronic Commerce and Internet Marketing",學分數:"3",人限:"10",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"此為17週課程。",停開註記:"",教室與上課時間:`Nanda南大N526	WaWbWc
`,授課教師:`江旭新	CHIANG, HSU-HSIN
`,擋修說明:"",課程限制說明:"心諮系碩士班優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"心諮系111MA 選修	"},{科號:"11120KPC 563100",課程中文名稱:"教練心理學專題",課程英文名稱:"Seminar on Coaching Psychology",學分數:"3",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"開學第二週後將調整至週末上課。",停開註記:"",教室與上課時間:`Nanda南大N203	RaRbRc
`,授課教師:`葉書芸	YEH, SHU-YUN
`,擋修說明:"",課程限制說明:"限心諮系碩士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"心諮系111MA 選修	心諮系111MB 選修	"},{科號:"11120KPC 563800",課程中文名稱:"工商心理新興議題",課程英文名稱:"Seminar on Emerging Issues of I/O Psychology",學分數:"3",人限:"12",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"此為16週課程。加退選期間欲加選者請透過加簽系統辦理。",停開註記:"",教室與上課時間:`Nanda南大N207	T2T3T4
`,授課教師:`陳殷哲	CHEN, YIN-CHE
`,擋修說明:"",課程限制說明:"限心諮系碩士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"心諮系111MA 選修	"},{科號:"11120KPC 564500",課程中文名稱:"品牌決策分析專題",課程英文名稱:"Seminar on Analysis of Branding Decision-Making",學分數:"3",人限:"12",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"此為16週課程。",停開註記:"",教室與上課時間:`Nanda南大N205	W5W6W7
`,授課教師:`高登第	KAO, TENG-TI
`,擋修說明:"",課程限制說明:"限心諮系碩士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"心諮系111MA 選修	"},{科號:"11120KPC 643401",課程中文名稱:"諮商專業實習二",課程英文名稱:"Counseling Internship II",學分數:"3",人限:"9",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"先修科目要求請依本系碩士班諮商專業實習辦法辦理，加退選期間不受理線上加選及加簽。",停開註記:"",教室與上課時間:`Nanda南大N203	F5F6F7
`,授課教師:`朱惠瓊	CHU, HUI-CHUANG
`,擋修說明:"",課程限制說明:"【上學期原修諮商專業實習一KPC 643301(朱惠瓊老師)同學選課優先,第3次選課起開放】",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"心諮系111MA 選修	"},{科號:"11120KPC 643402",課程中文名稱:"諮商專業實習二",課程英文名稱:"Counseling Internship II",學分數:"3",人限:"9",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"先修科目要求請依本系碩士班諮商專業實習辦法辦理，加退選期間不受理線上加選及加簽。",停開註記:"",教室與上課時間:`Nanda南大N202	F5F6F7
`,授課教師:`許育光	HSU, YU-KUANG
`,擋修說明:"",課程限制說明:"【上學期原修諮商專業實習一KPC 643302(許育光老師)同學選課優先,第3次選課起開放】",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"心諮系111MA 選修	"},{科號:"11120KPC 644700",課程中文名稱:"藝術治療專題",課程英文名稱:"Seminar on Art therapy",學分數:"3",人限:"10",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"此為16週課程。先修科目為「諮商與心理治療理論(研)」。加退選期間不受理線上加選及加簽。",停開註記:"",教室與上課時間:`Nanda南大N524	TaTbTc
`,授課教師:`朱惠瓊	CHU, HUI-CHUANG
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>諮商與心理治療理論(研)-成績需B-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"限心諮系碩士班2年級3年級4年級",第一二專長對應:"",學分學程對應:"(跨領域)語言治療學分學程",不可加簽說明:"",必選修說明:"心諮系111MA 選修	"},{科號:"11120KPC 690100",課程中文名稱:"論文研究",課程英文名稱:"Thesis",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限心諮系碩二以上修習",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"排除心諮系碩士班1年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"心諮系111MA 必修	心諮系111MB 必修	"},{科號:"11120KPC 720200",課程中文名稱:"書報討論二",課程英文名稱:"Seminar(II)",學分數:"1",人限:"47",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"此為16週課程；加退選期間欲加選者請透過加簽系統辦理。",停開註記:"",教室與上課時間:`Nanda南大N101	T5T6
`,授課教師:`張硯評	Chang, Yen-Ping
`,擋修說明:"",課程限制說明:"限心諮系碩士班博士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"心諮系111D  必修	心諮系111MA 必修	心諮系111MB 必修	"},{科號:"11120KPC 732600",課程中文名稱:"道德心理學專題",課程英文名稱:"Seminar on Moral Psychology",學分數:"3",人限:"8",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"加退選期間不受理線上加選及加簽。",停開註記:"",教室與上課時間:`GEN II綜二409	T8T9Ta
`,授課教師:`陳舜文	CHEN, SHUN-WEN
`,擋修說明:"",課程限制說明:"限心諮系碩士班博士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"心諮系111D  選修	心諮系111MB 選修	"},{科號:"11120KPC 733700",課程中文名稱:"幽默神經科學專題",課程英文名稱:"Seminar on Humor Neuroscience",學分數:"3",人限:"10",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"此為16週課程。先修科目為「認知神經科學及情感神經科學專題」。加退選期間欲修課者請透過加簽系統辦理。",停開註記:"",教室與上課時間:`GEN II綜二409	W7W8W9
`,授課教師:`詹雨臻	CHAN, YU-CHEN
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>認知神經科學-成績需B-以上<BR>情感神經科學專題-成績需B-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"限心諮系碩士班博士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"心諮系111D  選修	心諮系111MB 選修	"},{科號:"11120KPC 734500",課程中文名稱:"認知神經科學",課程英文名稱:"Cognitive Neuroscience",學分數:"3",人限:"15",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"此為16週課程。先修科目為「心智與大腦」。加退選期間欲加選者請透過加簽系統辦理。",停開註記:"",教室與上課時間:`GEN II綜二410	T7T8T9
`,授課教師:`詹雨臻	CHAN, YU-CHEN
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>心智與大腦-成績需B-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"限心諮系碩士班博士班",第一二專長對應:"",學分學程對應:"(跨領域)神經科學學分學程",不可加簽說明:"",必選修說明:"心諮系111D  選修	心諮系111MB 選修	"},{科號:"11120KPC 742100",課程中文名稱:"團體諮商與治療專題研究",課程英文名稱:"Seminar and Research on Group Counseling & Psychotherapy",學分數:"3",人限:"5",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"加退選期間欲加選者請透過加簽系統辦理。",停開註記:"",教室與上課時間:`Nanda南大N207	R2R3R4
`,授課教師:`許育光	HSU, YU-KUANG
`,擋修說明:"",課程限制說明:"限心諮系博士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"心諮系111D  選修	"},{科號:"11120KPC 752100",課程中文名稱:"正向心理學專題",課程英文名稱:"Seminar on Positive Psychology",學分數:"3",人限:"15",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"此為16週課程。加退選期間不受理線上加選及加簽。",停開註記:"",教室與上課時間:`Nanda南大N204	MaMbMc
`,授課教師:`簡宏江	CHIEN, HUNG-CHIANG
`,擋修說明:"",課程限制說明:"限心諮系碩士班博士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"心諮系111D  選修	心諮系111MA 選修	心諮系111MB 選修	"},{科號:"11120KPC 752200",課程中文名稱:"心理評量與衡鑑專題研究",課程英文名稱:"Advanced Psychological Testing and Assessment Research",學分數:"3",人限:"5",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"加退選期間欲加選者請透過加簽系統辦理。",停開註記:"",教室與上課時間:`Nanda南大N205	R5R6R7
`,授課教師:`李昆樺	LEE, KUN-HUA
`,擋修說明:"",課程限制說明:"限心諮系博士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"心諮系111D  選修	"},{科號:"11120KPC 823200",課程中文名稱:"實驗設計",課程英文名稱:"Experimental Design",學分數:"3",人限:"8",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"加退選期間不受理線上加選及加簽。",停開註記:"",教室與上課時間:`Nanda南大N205	M2M3M4
`,授課教師:`高淑芳	KAO, SHU-FANG
`,擋修說明:"",課程限制說明:"限心諮系碩士班博士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"心諮系111D  選修	心諮系111MA 選修	心諮系111MB 選修	"},{科號:"11120KPC 823700",課程中文名稱:"多層次模型",課程英文名稱:"Multilevel modeling",學分數:"3",人限:"10",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"加退選期間欲修課者請透過加簽系統辦理。",停開註記:"",教室與上課時間:"",授課教師:`張硯評	Chang, Yen-Ping
`,擋修說明:"",課程限制說明:"限心諮系博士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"心諮系111D  選修	"},{科號:"11120KPC 872100",課程中文名稱:"生涯諮商專題",課程英文名稱:"Seminar on Career Counseling",學分數:"3",人限:"10",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"先修科目為「諮商與心理治療理論(研)」。加退選期間不受理線上加選及加簽。",停開註記:"",教室與上課時間:`Nanda南大N205	T2T3T4
`,授課教師:`何秀珠	HO,HSIU-CHU
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>諮商與心理治療理論(研)-成績需B-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"限心諮系碩士班博士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"心諮系111D  選修	心諮系111MA 選修	"},{科號:"11120KPC 890300",課程中文名稱:"獨立研究二",課程英文名稱:"Independent Study (II)",學分數:"3",人限:"10",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"限心諮系博士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"心諮系111D  選修	"},{科號:"11120KPC 890400",課程中文名稱:"論文研究",課程英文名稱:"Thesis",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限心諮系博二以上同學選修",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"排除心諮系博士班1年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"心諮系111D  必修	"},{科號:"11120KPCN522200",課程中文名稱:"質的研究法",課程英文名稱:"Qualitative Research Methods",學分數:"3",人限:"15",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"加退選期間欲加選者請透過加簽系統辦理。",停開註記:"",教室與上課時間:`Nanda南大N524	MaMbMc
`,授課教師:`林旖旎	LIN, YI-NII
`,擋修說明:"",課程限制說明:"限心諮系在職專班專班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"心諮系在職專班111PA 選修	心諮系在職專班111PB 選修	"},{科號:"11120KPCN522300",課程中文名稱:"測驗原理與實務",課程英文名稱:"Principles and Practices of Psychological Testing",學分數:"3",人限:"10",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"開學第二週後將調整至週末上課。加退選期間不受理線上加選及加簽。",停開註記:"",教室與上課時間:`Nanda南大N203	MaMbMc
`,授課教師:`王振世	WANG, CHEN-SHIH
`,擋修說明:"",課程限制說明:"限心諮系在職專班專班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"心諮系在職專班111PA 選修	心諮系在職專班111PB 選修	"},{科號:"11120KPCN522400",課程中文名稱:"行動研究",課程英文名稱:"Action Research",學分數:"3",人限:"10",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"加退選期間不受理線上加選及加簽",停開註記:"",教室與上課時間:`Nanda南大N205	WaWbWc
`,授課教師:`李易昆	LEE, YI-KUNG
`,擋修說明:"",課程限制說明:"限心諮系在職專班專班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"心諮系在職專班111PA 選修	心諮系在職專班111PB 選修	"},{科號:"11120KPCN542200",課程中文名稱:"個別諮商實務專題",課程英文名稱:"Seminar on Individual Counseling Practice",學分數:"3",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"先修科目為「諮商理論與技術專題」；加退選期間欲加選者請透過加簽系統辦理。",停開註記:"",教室與上課時間:`Nanda南大N203	TaTbTc
`,授課教師:`林祺堂	LIN, CHI-TANG
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>諮商理論與技術專題-成績需B-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"限心諮系在職專班專班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"心諮系在職專班111PA 選修	"},{科號:"11120KPCN542500",課程中文名稱:"團體諮商與輔導專題",課程英文名稱:"Seminar on Group Counseling and Guidance",學分數:"3",人限:"10",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"此為16週課程。先修科目為「諮商理論與技術專題」；加退選期間欲加選者請透過加簽系統辦理。",停開註記:"",教室與上課時間:`Nanda南大N224	WaWbWc
`,授課教師:`施香如	SHIH, HSIANG-JU
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>諮商理論與技術專題-成績需B-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"限心諮系在職專班專班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"心諮系在職專班111PA 選修	"},{科號:"11120KPCN544200",課程中文名稱:"學生發展與職涯輔導",課程英文名稱:"Seminar of Student Development and Career Guidance",學分數:"3",人限:"10",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"加退選期間欲加選者請透過加簽系統辦理。",停開註記:"",教室與上課時間:`Nanda南大N202	MaMbMc
`,授課教師:`許育光	HSU, YU-KUANG
`,擋修說明:"",課程限制說明:"限心諮系在職專班專班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"心諮系在職專班111PA 選修	"},{科號:"11120KPCN563700",課程中文名稱:"職場幸福學專題",課程英文名稱:"Seminar on Workplace Wellbeing",學分數:"3",人限:"10",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"此為16週課程。加退選期間不受理線上加選及加簽。",停開註記:"",教室與上課時間:`Nanda南大N203	WaWbWc
`,授課教師:`張婉菁	CHANG, WAN-CHING
`,擋修說明:"",課程限制說明:"限心諮系在職專班專班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"心諮系在職專班111PB 選修	"},{科號:"11120KPCN564000",課程中文名稱:"品牌決策分析專題",課程英文名稱:"Seminar on Analysis of Branding Decision-Making",學分數:"3",人限:"12",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"此為16週課程。",停開註記:"",教室與上課時間:`Nanda南大N204	RaRbRc
`,授課教師:`高登第	KAO, TENG-TI
`,擋修說明:"",課程限制說明:"限心諮系在職專班專班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"心諮系在職專班111PB 選修	"},{科號:"11120KPCN564100",課程中文名稱:"職能發展專題",課程英文名稱:"Seminar on Competency Development",學分數:"3",人限:"12",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`Nanda南大N526	TaTbTc
`,授課教師:`陳殷哲	CHEN, YIN-CHE
`,擋修說明:"",課程限制說明:"限心諮系在職專班專班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"心諮系在職專班111PB 選修	"},{科號:"11120KPCN690100",課程中文名稱:"論文",課程英文名稱:"Thesis",學分數:"2",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限專班二年級以上修習",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"排除心諮系在職專班專班1年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"心諮系在職專班111PA 必修	心諮系在職專班111PB 必修	"},{科號:"11120KSEN500400",課程中文名稱:"STEAM學科本質探究",課程英文名稱:"Study on the STEAM Pedagogical Content Knowledge",學分數:"3",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`Nanda南大N202	S5S6S7
`,授課教師:`郭哲宇	KUO, CHE-YU
許慧玉	HSU, HUI-YU
王子華	WANG, TZU-HUA
`,擋修說明:"",課程限制說明:"限專班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"STEAM專班111P  必修	"},{科號:"11120KSEN500800",課程中文名稱:"STEAM研究方法",課程英文名稱:" ",學分數:"3",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`Nanda南大1407	MaMbMc
`,授課教師:`王子華	WANG, TZU-HUA
蔡寶桂	TSAT,PAO-KUEI
`,擋修說明:"",課程限制說明:"限教育學院",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"STEAM專班111P  必修	"},{科號:"11120KSEN500900",課程中文名稱:"運動科學STEAM課程設計",課程英文名稱:" ",學分數:"3",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`Nanda南大A309	RaRbRc
`,授課教師:`邱文信	CHIU, WEN-HSIN
`,擋修說明:"",課程限制說明:"限教育學院",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"STEAM專班111P  選修	"},{科號:"11120KSN 100100",課程中文名稱:"書報討論與專題寫作一",課程英文名稱:"Journal Reading and Project Writing I",學分數:"1",人限:"25",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"16週課程,同步遠距教學.實際上課地點請參閱專班公告,限新加坡心諮專班1年級",停開註記:"",教室與上課時間:`Singapor新加	WaWb
`,授課教師:`朱惠瓊	CHU, HUI-CHUANG
許育光	HSU, YU-KUANG
`,擋修說明:"",課程限制說明:"限新加坡心諮碩班境外專班專班1年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"新加坡心諮碩班境外專班111P  必修	"},{科號:"11120KSN 100200",課程中文名稱:"高等統計與研究方法",課程英文名稱:"Advanced Statistic and Research Method",學分數:"3",人限:"25",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"16週課程,同步遠距教學.實際上課地點請參閱專班公告,限新加坡心諮專班1年級",停開註記:"",教室與上課時間:`Singapor新加	TaTbTc
`,授課教師:`張硯評	Chang, Yen-Ping
陳承德	CHEN, CHENG-TE
`,擋修說明:"",課程限制說明:"限新加坡心諮碩班境外專班專班1年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"新加坡心諮碩班境外專班111P  選修	"},{科號:"11120KSN 100300",課程中文名稱:"諮商與心理治療理論",課程英文名稱:"Theories of Counseling and Psychotherapy",學分數:"3",人限:"25",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"16週課程,實際上課地點請參閱專班公告，限新加坡心諮專班1年級",停開註記:"",教室與上課時間:`Singapor新加	FaFbFc
`,授課教師:`許育光	HSU, YU-KUANG
`,擋修說明:"",課程限制說明:"限新加坡心諮碩班境外專班專班1年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"新加坡心諮碩班境外專班111P  必修	"},{科號:"11120KSN 100400",課程中文名稱:"人類發展與成長專題",課程英文名稱:"Seminar on Human Development and Growth",學分數:"3",人限:"25",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"16週課程,同步遠距教學.實際上課地點請參閱專班公告,限新加坡心諮專班1年級",停開註記:"",教室與上課時間:`Singapor新加	R9RaRb
`,授課教師:`詹雨臻	CHAN, YU-CHEN
林旖旎	LIN, YI-NII
`,擋修說明:"",課程限制說明:"限新加坡心諮碩班境外專班專班1年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"新加坡心諮碩班境外專班111P  選修	"},{科號:"11120KSN 100500",課程中文名稱:"心理診斷與介入",課程英文名稱:"Psychological Diagnosis and Intervention",學分數:"3",人限:"25",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"16週課程,實際上課地點請參閱專班公告,限新加坡心諮專班1年級",停開註記:"",教室與上課時間:`Singapor新加	MaMbMc
`,授課教師:`李昆樺	LEE, KUN-HUA
孟瑛如	MENG, YING-RU
`,擋修說明:"",課程限制說明:"限新加坡心諮碩班境外專班專班1年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"新加坡心諮碩班境外專班111P  選修	"},{科號:"11120KSPE110400",課程中文名稱:"情緒行為障礙",課程英文名稱:"Behavior and Emotional Disorders",學分數:"3",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"國小身障組教育基礎科目",停開註記:"",教室與上課時間:`Nanda南大1411	M7M8M9
`,授課教師:`鍾宛玲	CHUNG, WAN-LING
`,擋修說明:"",課程限制說明:"特教系優先，第3次選課起開放全校修習",第一二專長對應:"特殊教育(第二專長)	特殊教育(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"特教系111B  選修	"},{科號:"11120KSPE110500",課程中文名稱:"學習障礙",課程英文名稱:"Learning Disabilities",學分數:"3",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"系必修，國小身障組教育基礎科目，本課程為16週課程",停開註記:"",教室與上課時間:`Nanda南大1411	W7W8W9
`,授課教師:`王立志	WANG, LI-CHIH
`,擋修說明:"",課程限制說明:"特教系優先，第3次選課起開放全校修習",第一二專長對應:"特殊教育(第二專長)	特殊教育(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"特教系111B  必修	"},{科號:"11120KSPE110600",課程中文名稱:"應用行為分析",課程英文名稱:"Applied Behavior Analysis",學分數:"2",人限:"55",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"系必修，國小身障及學前身障組教育方法科目，本課程為16週課程",停開註記:"",教室與上課時間:`Nanda南大2103	W3W4
`,授課教師:`孫淑柔	SUN, SHU-JOU
`,擋修說明:"",課程限制說明:"特教系優先，第3次選課起開放全校修習",第一二專長對應:"特殊教育(第二專長)	特殊教育(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"特教系111B  必修	"},{科號:"11120KSPE110700",課程中文名稱:"手語",課程英文名稱:"Sign Language",學分數:"2",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"國小身障組特需科目",停開註記:"",教室與上課時間:`Nanda南大2103	R3R4
`,授課教師:`林慧芳	LIN, HUI-FANG
`,擋修說明:"",課程限制說明:"特教系優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"特教系111B  選修	"},{科號:"11120KSPE120100",課程中文名稱:"資賦優異教育概論",課程英文名稱:"Introduction to Gifted Education",學分數:"2",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"國小資優組教育基礎科目，本課程為16週課程",停開註記:"",教室與上課時間:`Nanda南大N413	F7F8
`,授課教師:`黃國晏	HUANG, KUO-YEN
`,擋修說明:"",課程限制說明:"特教系優先，第3次選課起開放全校修習",第一二專長對應:"特殊教育(第二專長)	特殊教育(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"特教系111B  選修	"},{科號:"11120KSPE120200",課程中文名稱:"多元智能理論與應用",課程英文名稱:"Theory and Application of Multiple Intelligences",學分數:"3",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"國小資優組教育方法科目，本課程為16週課程",停開註記:"",教室與上課時間:`Nanda南大N413	T5T6T7
`,授課教師:`朱允文	CHU, YUN-WEN
`,擋修說明:"",課程限制說明:"特教系優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"特教系111B  選修	"},{科號:"11120KSPE140300",課程中文名稱:"教育概論",課程英文名稱:"Foundation of Education",學分數:"2",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"國小階段及學前階段一般選修，本課程為16週課程",停開註記:"",教室與上課時間:`Nanda南大N413	F5F6
`,授課教師:`黃國晏	HUANG, KUO-YEN
`,擋修說明:"",課程限制說明:"特教系優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"特教系111B  選修	"},{科號:"11120KSPE140800",課程中文名稱:"學習評量",課程英文名稱:"Assessment for Learning",學分數:"2",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"國小教育階段一般選修，本課程為16週課程",停開註記:"",教室與上課時間:`Nanda南大N413	T8T9
`,授課教師:`孔淑萱	KUNG, SHU-HSUAN
`,擋修說明:"",課程限制說明:"特教系優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"特教系111B  選修	"},{科號:"11120KSPE141000",課程中文名稱:"教育社會學",課程英文名稱:"Sociology of Education",學分數:"2",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"國小階段及學前階段一般選修，本課程為16週課程",停開註記:"",教室與上課時間:`Nanda南大N413	R7R8
`,授課教師:`黃國晏	HUANG, KUO-YEN
`,擋修說明:"",課程限制說明:"特教系優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"特教系111B  選修	"},{科號:"11120KSPE150600",課程中文名稱:"幼兒遊戲",課程英文名稱:"Theory and Practice of Play",學分數:"2",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"學前教育階段一般選修，本課程為16週課程",停開註記:"",教室與上課時間:`Nanda南大1411	M5M6
`,授課教師:`謝協君	HSIEH, HSIEH-CHUN
`,擋修說明:"",課程限制說明:"特教系優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"特教系111B  選修	"},{科號:"11120KSPE150800",課程中文名稱:"幼兒體能與律動",課程英文名稱:"Physical Education and Movement for Young Children",學分數:"2",人限:"25",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"學前教育階段一般選修，上課教室安排中，本課程為16週課程",停開註記:"",教室與上課時間:"",授課教師:`謝音琪	YINCHI HSIEH
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"特教系110B  選修	"},{科號:"11120KSPE211200",課程中文名稱:"融合教育理論與實務",課程英文名稱:"Inclusive Education Theories and Practice",學分數:"2",人限:"55",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"系必修，國小身障及學前身障組必修教育實踐科目，本課程為16週課程",停開註記:"",教室與上課時間:`Nanda南大2103	T3T4
`,授課教師:`孫淑柔	SUN, SHU-JOU
`,擋修說明:"",課程限制說明:"特教系優先，第3次選課起開放全校修習",第一二專長對應:"特殊教育(第二專長)	特殊教育(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"特教系110B  必修	"},{科號:"11120KSPE211400",課程中文名稱:"聽覺障礙",課程英文名稱:"Hearing Impairment",學分數:"2",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"國小身障組教育基礎科目",停開註記:"",教室與上課時間:`Nanda南大N413	F3F4
`,授課教師:`江源泉	CHIANG, YUAN-CHUAN
`,擋修說明:"",課程限制說明:"限特教系",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"特教系110B  選修	"},{科號:"11120KSPE212300",課程中文名稱:"學習困難與補救策略",課程英文名稱:"Intervention Strategies for Children with Learning Disabilities",學分數:"3",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"系必修，國小身障組特需科目，本課程為16週課程",停開註記:"",教室與上課時間:`Nanda南大1305	T7T8T9
`,授課教師:`孟瑛如	MENG, YING-RU
`,擋修說明:"",課程限制說明:"特教系優先，第3次選課起開放全校修習",第一二專長對應:"特殊教育(第二專長)	特殊教育(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"特教系110B  必修	"},{科號:"11120KSPE212600",課程中文名稱:"社會技能訓練",課程英文名稱:"Social Skills Training",學分數:"2",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"國小身障組特需科目，本課程為16週課程",停開註記:"",教室與上課時間:`Nanda南大N413	W3W4
`,授課教師:`翁嘉遜	JASIN WONG
`,擋修說明:"",課程限制說明:"特教系優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"特教系110B  選修	"},{科號:"11120KSPE212900",課程中文名稱:"兒童認知發展與學習",課程英文名稱:"Cognitive Development and Learning in Children",學分數:"3",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"國小身障組認知需求專長科目，本課程為16週課程",停開註記:"",教室與上課時間:`Nanda南大1409	F5F6F7
`,授課教師:`葉佳琪	YEH, CHIA-CHI
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>特殊教育導論-成績需C-以上<BR>特殊教育導論-成績需C-以上<BR><br>上述條件任選一科，而且<br><BR>學習障礙-成績需C-以上<BR>學習障礙-成績需C-以上<BR><br>上述條件任選一科，則不擋修。</div>`,課程限制說明:"特教系優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"特教系108B  選修	特教系109B  選修	特教系110B  選修	"},{科號:"11120KSPE221100",課程中文名稱:"科學資優教育",課程英文名稱:"Science Education for Gifted Students",學分數:"2",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"國小資優組特需科目，本課程為16週課程",停開註記:"",教室與上課時間:`Nanda南大N413	W7W8
`,授課教師:`黃澤洋	HUANG, TSE-YANG
`,擋修說明:"",課程限制說明:"特教系優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"特教系109B  選修	特教系110B  選修	"},{科號:"11120KSPE221500",課程中文名稱:"資優學生情意教育",課程英文名稱:"Affective Education for Gifted Students",學分數:"2",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"國小資優組特需科目",停開註記:"",教室與上課時間:`Nanda南大N413	W5W6
`,授課教師:`黃澤洋	HUANG, TSE-YANG
`,擋修說明:"",課程限制說明:"特教系優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"特教系110B  選修	"},{科號:"11120KSPE250900",課程中文名稱:"學前特教教材教法",課程英文名稱:"Teaching Materials and Methods for Early Childhood Special Education",學分數:"2",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"學前教育階段一般選修",停開註記:"",教室與上課時間:`Nanda南大N413	M7M8
`,授課教師:`羅素琴	LO, SHU-CHIN
`,擋修說明:"",課程限制說明:"特教系優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"特教系110B  選修	"},{科號:"11120KSPE311600",課程中文名稱:"身心障礙教材教法(2)",課程英文名稱:"Teaching Materials and Methods for Children with Special Needs (2)",學分數:"2",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"xclass。國小身障及學前身障組必修教育實踐科目，本課程為16週課程",停開註記:"",教室與上課時間:`Nanda南大N413	R1R2
`,授課教師:`王立志	WANG, LI-CHIH
施桂菁	SHIH KUEI CHING
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>特殊教育導論-成績需C-以上<BR>特殊教育導論-成績需C-以上<BR><br>上述條件任選一科，則不擋修。</div>`,課程限制說明:"特教系優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"特教系109B  選修	"},{科號:"11120KSPE311800",課程中文名稱:"特殊教育行政與法規",課程英文名稱:"Special Education Administration and Regulations",學分數:"2",人限:"55",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"國小身障、國小資優及學前身障組教育基礎科目",停開註記:"",教室與上課時間:`Nanda南大2103	M8M9
`,授課教師:`詹鳳君	CHAN,FENG-CHUN
`,擋修說明:"",課程限制說明:"特教系優先，第3次選課起開放全校修習",第一二專長對應:"特殊教育(第二專長)	特殊教育(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"特教系109B  選修	"},{科號:"11120KSPE312000",課程中文名稱:"溝通障礙",課程英文名稱:"Communication Disorders",學分數:"2",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"國小身障組教育基礎科目，本課程為16週課程",停開註記:"",教室與上課時間:`Nanda南大1311	R3R4
`,授課教師:`許馨仁	HSU, HSIN-JEN
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>語言發展與矯治-成績需C-以上<BR>語言發展與矯治-成績需C-以上<BR><br>上述條件任選一科，則不擋修。</div>`,課程限制說明:"限特教系",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"特教系110B  選修	"},{科號:"11120KSPE312100",課程中文名稱:"定向行動",課程英文名稱:"Orientation and Mobility",學分數:"2",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"國小身障組特需科目，本課程為16週課程",停開註記:"",教室與上課時間:`Nanda南大N413	R5R6
`,授課教師:`黃國晏	HUANG, KUO-YEN
`,擋修說明:"",課程限制說明:"特教系優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"特教系109B  選修	"},{科號:"11120KSPE312200",課程中文名稱:"科技在特殊教育之應用",課程英文名稱:"Technology Applications in Special Education",學分數:"2",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"國小身障組特需科目，本課程為16週課程",停開註記:"",教室與上課時間:`Nanda南大N413	R3R4
`,授課教師:`謝協君	HSIEH, HSIEH-CHUN
`,擋修說明:"",課程限制說明:"特教系優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"特教系109B  選修	"},{科號:"11120KSPE312400",課程中文名稱:"個別化教育計畫的理念與實施",課程英文名稱:"Theory and Practice of IEP",學分數:"2",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"國小身障及學前身障組教育方法科目",停開註記:"",教室與上課時間:`Nanda南大2103	T8T9
`,授課教師:`詹鳳君	CHAN,FENG-CHUN
`,擋修說明:"",課程限制說明:"特教系優先，第3次選課起開放全校修習",第一二專長對應:"特殊教育(第二專長)	特殊教育(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"特教系109B  選修	"},{科號:"11120KSPE320600",課程中文名稱:"資賦優異教材教法(2)",課程英文名稱:"Teaching Materials and Methods for Gifted Children (2)",學分數:"2",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"國小資優組必修教育實踐科目，本課程為16週課程",停開註記:"",教室與上課時間:`Nanda南大N413	M1M2
`,授課教師:`黃澤洋	HUANG, TSE-YANG
`,擋修說明:"",課程限制說明:"特教系優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"特教系109B  選修	"},{科號:"11120KSPE321700",課程中文名稱:"正向心理與領導",課程英文名稱:"Positive Psychology and Leadership",學分數:"2",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"國小資優組特需科目，本課程為16週課程",停開註記:"",教室與上課時間:`Nanda南大1409	F3F4
`,授課教師:`葉佳琪	YEH, CHIA-CHI
`,擋修說明:"",課程限制說明:"特教系優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"特教系109B  選修	"},{科號:"11120KSPE321800",課程中文名稱:"資賦優異教育教學實習",課程英文名稱:"Practicum of Gifted Education",學分數:"2",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"國小資優組必修教育實踐科目",停開註記:"",教室與上課時間:`Nanda南大N413	M3M4
`,授課教師:`黃澤洋	HUANG, TSE-YANG
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>資賦優異教材教法(1)-成績需C-以上<BR>資賦優異教材教法(2)-成績需C-以上<BR>資賦優異教材教法(1)-成績需C-以上<BR>資賦優異教材教法(2)-成績需C-以上<BR><br>上述條件任選一科，則不擋修。</div>`,課程限制說明:"特教系優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"特教系109B  選修	"},{科號:"11120KSPE321900",課程中文名稱:"教育研究法",課程英文名稱:"Education Research Methodology",學分數:"2",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"國小資優組教育基礎科目，本課程為16週課程",停開註記:"",教室與上課時間:`Nanda南大N413	T3T4
`,授課教師:`翁嘉遜	JASIN WONG
`,擋修說明:"",課程限制說明:"特教系優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"特教系109B  選修	"},{科號:"11120KSPE391200",課程中文名稱:"心理衡鑑",課程英文名稱:"Psychological Assessment",學分數:"2",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"國小身障組認知需求專長科目，本課程為16週課程",停開註記:"",教室與上課時間:`Nanda南大1311	T5T6
`,授課教師:`鍾宛玲	CHUNG, WAN-LING
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>特殊教育導論-成績需C-以上<BR>特殊教育導論-成績需C-以上<BR><br>上述條件任選一科，而且<br><BR>學習障礙-成績需C-以上<BR>學習障礙-成績需C-以上<BR><br>上述條件任選一科，則不擋修。</div>`,課程限制說明:"特教系優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"特教系109B  選修	"},{科號:"11120KSPE413200",課程中文名稱:"輕度認知障礙學生學習策略教學",課程英文名稱:"Teaching strategies for students with mild cognitive impairment",學分數:"3",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"國小身障組認知需求專長科目，本課程為16週課程",停開註記:"",教室與上課時間:`Nanda南大1411	WnW5W6
`,授課教師:`王立志	WANG, LI-CHIH
`,擋修說明:"",課程限制說明:"特教系優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"特教系108B  選修	"},{科號:"11120KSPE430701",課程中文名稱:"特殊教育教學實習二",課程英文名稱:"Special Education Practicum (II)",學分數:"4",人限:"18",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"請依預分組選課，本課為學年課一及二，上下學期皆須修畢。本課程為16週課程",停開註記:"",教室與上課時間:`Nanda南大9506	R1R2R3R4
`,授課教師:`孫淑柔	SUN, SHU-JOU
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>身心障礙教材教法(1)-成績需C-以上<BR>身心障礙教材教法(2)-成績需C-以上<BR>資賦優異教材教法(1)-成績需C-以上<BR>資賦優異教材教法(2)-成績需C-以上<BR>身心障礙教材教法(1)-成績需C-以上<BR>資賦優異教材教法(1)-成績需C-以上<BR>身心障礙教材教法(2)-成績需C-以上<BR>資賦優異教材教法(2)-成績需C-以上<BR><br>上述條件任選一科，則不擋修。</div>`,課程限制說明:"限特教系大學部",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"特教系108B  選修	"},{科號:"11120KSPE430702",課程中文名稱:"特殊教育教學實習二",課程英文名稱:"Special Education Practicum (II)",學分數:"4",人限:"18",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"請依預分組選課，本課為學年課一及二，上下學期皆須修畢。本課程為16週課程。新聘兼任洪翠青老師共同授課。",停開註記:"",教室與上課時間:`Nanda南大9505	R1R2R3R4
`,授課教師:`洪翠青	HUNG TSUI-CHING
孔淑萱	KUNG, SHU-HSUAN
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>身心障礙教材教法(1)-成績需C-以上<BR>身心障礙教材教法(2)-成績需C-以上<BR>資賦優異教材教法(1)-成績需C-以上<BR>資賦優異教材教法(2)-成績需C-以上<BR>身心障礙教材教法(1)-成績需C-以上<BR>資賦優異教材教法(1)-成績需C-以上<BR>身心障礙教材教法(2)-成績需C-以上<BR>資賦優異教材教法(2)-成績需C-以上<BR><br>上述條件任選一科，則不擋修。</div>`,課程限制說明:"限特教系大學部",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"特教系108B  選修	"},{科號:"11120KSPE441100",課程中文名稱:"教育哲學",課程英文名稱:"Philosophy of Education",學分數:"2",人限:"45",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"國小教育階段一般選修，本課程為16週課程",停開註記:"",教室與上課時間:`Nanda南大1405	R5R6
`,授課教師:`陳國龍	CHEN, KUO-LONG
`,擋修說明:"",課程限制說明:"特教系優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"特教系108B  選修	"},{科號:"11120KSPE510300",課程中文名稱:"教育統計",課程英文名稱:"Educational Statistics",學分數:"3",人限:"24",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"(電腦教室上課)",停開註記:"",教室與上課時間:"",授課教師:`黃澤洋	HUANG, TSE-YANG
`,擋修說明:"",課程限制說明:"特教系碩士班優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"特教系111M  必修	"},{科號:"11120KSPE520300",課程中文名稱:"科技輔具專題研究",課程英文名稱:"Special Topics on Assistive Technology",學分數:"3",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"16週課程",停開註記:"",教室與上課時間:`Nanda南大N402	R5R6R7
`,授課教師:`謝協君	HSIEH, HSIEH-CHUN
`,擋修說明:"",課程限制說明:"特教系碩士班優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"特教系111M  選修	"},{科號:"11120KSPE520400",課程中文名稱:"特殊幼兒親職教育研究",課程英文名稱:"Studies in Parent Education for Children with Special Needs",學分數:"3",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"16週課程",停開註記:"",教室與上課時間:`Nanda南大N402	M5M6M7
`,授課教師:`朱思穎	CHU, SZU-YIN
`,擋修說明:"",課程限制說明:"特教系碩士班優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"特教系111M  選修	"},{科號:"11120KSPE521700",課程中文名稱:"特殊學生數學學習專題研究",課程英文名稱:"Special Topics on Mathematical Learning of Students with Special Needs",學分數:"3",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"16週課程",停開註記:"",教室與上課時間:`Nanda南大N402	W5W6W7
`,授課教師:`陳國龍	CHEN, KUO-LONG
`,擋修說明:"",課程限制說明:"特教系碩士班優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"特教系111M  選修	"},{科號:"11120KSPE610200",課程中文名稱:"論文研究",課程英文名稱:"Thesis",學分數:"0",人限:"24",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限特教系碩二以上修習",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"排除特教系碩士班1年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"特教系111M  必修	"},{科號:"11120KSS 102000",課程中文名稱:"運動專長訓練",課程英文名稱:"Training of Sport Exercise",學分數:"4",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限本系運動競技組學生修習，訓練時間詳見課程大綱。",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"限運科系大學部",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"運科系109B  必修	運科系110B  必修	運科系111B  必修	"},{科號:"11120KSS 110300",課程中文名稱:"運動生理學",課程英文名稱:"Physiology of Exercise",學分數:"2",人限:"60",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`Nanda南大A414	T5T6
`,授課教師:`林貴福	LIN, KUEI-FU
`,擋修說明:"",課程限制說明:"運科系大學部1年級優先，第3次選課起開放全校修習",第一二專長對應:"運動科學(第二專長)	運動科學(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"運科系111B  必修	"},{科號:"11120KSS 110400",課程中文名稱:"運動傷害與急救",課程英文名稱:"Athletic Injuries and Emergency Care",學分數:"2",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`Nanda南大A414	R3R4
`,授課教師:`黎俊彥	LI, CHUN-YEN
`,擋修說明:"",課程限制說明:"運科系大學部1年級優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"運科系111B  選修	"},{科號:"11120KSS 110501",課程中文名稱:"體育學原理",課程英文名稱:"Principles of Physical Education",學分數:"2",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"運動科學組",停開註記:"",教室與上課時間:`Nanda南大A414	M7M8
`,授課教師:`劉先翔	LIU, HSIEN-HSIANG
`,擋修說明:"",課程限制說明:"運科系大學部1年級優先，第3次選課起開放全校修習",第一二專長對應:"運動科學(第二專長)	運動科學(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"運科系111B  必修	"},{科號:"11120KSS 110502",課程中文名稱:"體育學原理",課程英文名稱:"Principles of Physical Education",學分數:"2",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"運動競技組",停開註記:"",教室與上課時間:`Nanda南大A414	T3T4
`,授課教師:`劉先翔	LIU, HSIEN-HSIANG
`,擋修說明:"",課程限制說明:"運科系大學部1年級優先，第3次選課起開放全校修習",第一二專長對應:"運動科學(第二專長)	運動科學(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"運科系111B  必修	"},{科號:"11120KSS 120101",課程中文名稱:"田徑二",課程英文名稱:"Track and Field (II)",學分數:"1",人限:"45",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:`Nanda南大9005	W1W2
`,授課教師:`陳穎祈	CHEN, YIMG-CHI
`,擋修說明:"",課程限制說明:"運科系大學部1年級,男生優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"運科系111B  選修	"},{科號:"11120KSS 120102",課程中文名稱:"田徑二",課程英文名稱:"Track and Field (II)",學分數:"1",人限:"45",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:`Nanda南大9005	W3W4
`,授課教師:`陳穎祈	CHEN, YIMG-CHI
`,擋修說明:"",課程限制說明:"運科系大學部1年級,女生優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"運科系111B  選修	"},{科號:"11120KSS 120201",課程中文名稱:"游泳二",課程英文名稱:"Swimming (II)",學分數:"1",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:`SWIM Pl.游泳池	R1R2
`,授課教師:`李炫諺	LEE,HSUAN-YEN
`,擋修說明:"",課程限制說明:"運科系大學部1年級,男生優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"運科系111B  選修	"},{科號:"11120KSS 120202",課程中文名稱:"游泳二",課程英文名稱:"Swimming (II)",學分數:"1",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:`SWIM Pl.游泳池	R3R4
`,授課教師:`李炫諺	LEE,HSUAN-YEN
`,擋修說明:"",課程限制說明:"運科系大學部1年級,女生優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"運科系111B  選修	"},{科號:"11120KSS 130100",課程中文名稱:"運動賽會管理",課程英文名稱:"Sport Event Management",學分數:"2",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`Nanda南大A413	M5M6
`,授課教師:`黃煜	HUANG, YU
`,擋修說明:"",課程限制說明:"運科系大學部1年級優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"運科系111B  選修	"},{科號:"11120KSS 180102",課程中文名稱:"籃球二",課程英文名稱:"Basketball (II)",學分數:"1",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:`Nanda南大A507	M3M4
`,授課教師:`盧淑雲	LU, SHU-YUN
`,擋修說明:"",課程限制說明:"運科系大學部1年級,女生優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"運科系111B  選修	"},{科號:"11120KSS 180301",課程中文名稱:"羽球二",課程英文名稱:"Badminton (II)",學分數:"1",人限:"25",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:`Nanda南大B101	T1T2
`,授課教師:`朱真儀	CHU, CHEN-YI
`,擋修說明:"",課程限制說明:"運科系大學部1年級,男生優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"運科系111B  選修	"},{科號:"11120KSS 180302",課程中文名稱:"羽球二",課程英文名稱:"Badminton (II)",學分數:"1",人限:"25",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:`Nanda南大B101	T7T8
`,授課教師:`朱真儀	CHU, CHEN-YI
`,擋修說明:"",課程限制說明:"運科系大學部1年級,女生優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"運科系111B  選修	"},{科號:"11120KSS 189900",課程中文名稱:"足球二",課程英文名稱:"Soccer (II)",學分數:"1",人限:"25",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:`Nanda南大B101	F5F6
`,授課教師:`張生平	CHANG,SHENG-PING
`,擋修說明:"",課程限制說明:"運科系大學部1年級優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"運科系111B  選修	"},{科號:"11120KSS 210200",課程中文名稱:"運動心理學",課程英文名稱:"Sports Psychology",學分數:"2",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`Nanda南大A414	M5M6
`,授課教師:`高三福	KAO, SAN-FU
`,擋修說明:"",課程限制說明:"運科系大學部2年級優先，第3次選課起開放全校修習",第一二專長對應:"運動科學(第二專長)	運動科學(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"運科系110B  必修	"},{科號:"11120KSS 221201",課程中文名稱:"體操二",課程英文名稱:"Gymnastics (II)",學分數:"1",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:`Nanda南大7501	W3W4
`,授課教師:`張惟翔	CHANG, WEI-HSIANG
`,擋修說明:"",課程限制說明:"運科系大學部2年級,男生優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"運科系110B  選修	"},{科號:"11120KSS 221202",課程中文名稱:"體操二",課程英文名稱:"Gymnastics (II)",學分數:"1",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:`Nanda南大7501	W1W2
`,授課教師:`張惟翔	CHANG, WEI-HSIANG
`,擋修說明:"",課程限制說明:"運科系大學部2年級,女生優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"運科系110B  選修	"},{科號:"11120KSS 230100",課程中文名稱:"運動行銷",課程英文名稱:"Sport Marketing",學分數:"2",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`Nanda南大A413	M3M4
`,授課教師:`許建民	HSU, CHIEN-MING
`,擋修說明:"",課程限制說明:"運科系大學部2年級優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"運科系110B  選修	"},{科號:"11120KSS 282201",課程中文名稱:"高爾夫球二",課程英文名稱:"Golf (II)",學分數:"1",人限:"22",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`Nanda南大A414	W1W2
`,授課教師:`謝錦城	HSIEH, CHIN-CHENG
`,擋修說明:"",課程限制說明:"運科系大學部2年級,男生優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"運科系110B  選修	"},{科號:"11120KSS 282202",課程中文名稱:"高爾夫球二",課程英文名稱:"Golf (II)",學分數:"1",人限:"22",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`Nanda南大A414	W3W4
`,授課教師:`謝錦城	HSIEH, CHIN-CHENG
`,擋修說明:"",課程限制說明:"運科系大學部2年級,女生優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"運科系110B  選修	"},{科號:"11120KSS 282301",課程中文名稱:"網球二",課程英文名稱:"Tennis (II)",學分數:"1",人限:"25",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:`Nanda南大B101	R1R2
`,授課教師:`梁龍鏡	LIANG, LUNG-CHING
`,擋修說明:"",課程限制說明:"運科系大學部2年級,男生優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"運科系110B  選修	"},{科號:"11120KSS 282302",課程中文名稱:"網球二",課程英文名稱:"Tennis (II)",學分數:"1",人限:"25",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:`Nanda南大B101	M7M8
`,授課教師:`梁龍鏡	LIANG, LUNG-CHING
`,擋修說明:"",課程限制說明:"運科系大學部2年級,女生優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"運科系110B  選修	"},{科號:"11120KSS 284000",課程中文名稱:"運動裁判法",課程英文名稱:"Officiating in Sports",學分數:"2",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`Nanda南大A413	T7T8
`,授課教師:`張祐華	CHANG, YU-HUA
`,擋修說明:"",課程限制說明:"運科系大學部2年級優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"運科系110B  選修	"},{科號:"11120KSS 284100",課程中文名稱:"運動技術分析",課程英文名稱:"Analysis of sports skill",學分數:"2",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`Nanda南大A413	T3T4
`,授課教師:`邱文信	CHIU, WEN-HSIN
`,擋修說明:"",課程限制說明:"運科系大學部2年級優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"運科系110B  選修	"},{科號:"11120KSS 284201",課程中文名稱:"重量訓練二",課程英文名稱:"Weight Training (II)",學分數:"1",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:`Nanda南大D001	F1F2
`,授課教師:`黎俊彥	LI, CHUN-YEN
`,擋修說明:"",課程限制說明:"運科系大學部2年級,男生優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"運科系110B  選修	"},{科號:"11120KSS 284202",課程中文名稱:"重量訓練二",課程英文名稱:"Weight Training (II)",學分數:"1",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:`Nanda南大D001	F3F4
`,授課教師:`王嬿婷	WANG, YEN-TING
`,擋修說明:"",課程限制說明:"運科系大學部2年級,女生優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"運科系110B  選修	"},{科號:"11120KSS 301501",課程中文名稱:"排球二",課程英文名稱:"Volleyball (II)",學分數:"1",人限:"15",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:`Nanda南大A507	R1R2
`,授課教師:`林家輝	LIN,CHIA-HUI
`,擋修說明:"",課程限制說明:"運科系大學部3年級,男生優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"運科系109B  選修	"},{科號:"11120KSS 301502",課程中文名稱:"排球二",課程英文名稱:"Volleyball (II)",學分數:"1",人限:"15",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:`Nanda南大A507	R3R4
`,授課教師:`林家輝	LIN,CHIA-HUI
`,擋修說明:"",課程限制說明:"運科系大學部3年級,女生優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"運科系109B  選修	"},{科號:"11120KSS 303000",課程中文名稱:"運動按摩學",課程英文名稱:"Sport Massage",學分數:"2",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"上課教室：南大A413、B304",停開註記:"",教室與上課時間:`Nanda南大A413	R1R2
`,授課教師:`黎俊彥	LI, CHUN-YEN
`,擋修說明:"",課程限制說明:"運科系大學部3年級優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"運科系109B  選修	"},{科號:"11120KSS 310200",課程中文名稱:"樂齡運動與代間學習方案",課程英文名稱:"Exercise and Intergenerational Learning Programme for Senior  Adults",學分數:"2",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"上課教室：南大A413、A507",停開註記:"",教室與上課時間:`Nanda南大A413	W3W4
`,授課教師:`何信弘	HO, HSIN-HUNG
鄭麗媛	CHENG, LI-YUAN
`,擋修說明:"",課程限制說明:"運科系大學部3年級優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"運科系109B  選修	"},{科號:"11120KSS 310800",課程中文名稱:"運動贊助與募款",課程英文名稱:"Sponsorship and Fundraising in Sport",學分數:"2",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`Nanda南大A413	R5R6
`,授課教師:`黃煜	HUANG, YU
`,擋修說明:"",課程限制說明:"運科系大學部3年級優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"運科系109B  選修	"},{科號:"11120KSS 311000",課程中文名稱:"棒球二",課程英文名稱:"Baseball (II)",學分數:"1",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:`Nanda南大9005	W1W2
`,授課教師:`劉強	LIU,CHIANG
`,擋修說明:"",課程限制說明:"運科系大學部3年級優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"運科系109B  選修	"},{科號:"11120KSS 311100",課程中文名稱:"壘球二",課程英文名稱:"Softball (II)",學分數:"1",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:`Nanda南大9005	W3W4
`,授課教師:`劉強	LIU,CHIANG
`,擋修說明:"",課程限制說明:"運科系大學部3年級優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"運科系109B  選修	"},{科號:"11120KSS 311400",課程中文名稱:"武術二",課程英文名稱:"Wu-Shu (II)",學分數:"1",人限:"45",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:`Nanda南大7501	T5T6
`,授課教師:`張惟翔	CHANG, WEI-HSIANG
`,擋修說明:"",課程限制說明:"運科系大學部3年級優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"運科系109B  選修	"},{科號:"11120KSS 311801",課程中文名稱:"桌球二",課程英文名稱:"Table Tennis (II)",學分數:"1",人限:"24",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:`Nanda南大C101	M3M4
`,授課教師:`梁龍鏡	LIANG, LUNG-CHING
`,擋修說明:"",課程限制說明:"運科系大學部3年級,男生優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"運科系109B  選修	"},{科號:"11120KSS 311802",課程中文名稱:"桌球二",課程英文名稱:"Table Tennis (II)",學分數:"1",人限:"24",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:`Nanda南大C101	F1F2
`,授課教師:`梁龍鏡	LIANG, LUNG-CHING
`,擋修說明:"",課程限制說明:"運科系大學部3年級,女生優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"運科系109B  選修	"},{科號:"11120KSS 320000",課程中文名稱:"運動專長訓練",課程英文名稱:"Training of Sport Exercise",學分數:"6",人限:"0",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"有必修需求者請洽系辦。限本系運動競技組學生修習，訓練時間詳見課程大綱",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"限運科系大學部",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"運科系108B  必修	"},{科號:"11120KSS 322100",課程中文名稱:"健康與體育學習領域概論",課程英文名稱:"Introduction to the filed of health and physical education",學分數:"2",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"上課教室：南大A413、A507。",停開註記:"",教室與上課時間:`Nanda南大A413	W5W6
`,授課教師:`鄭麗媛	CHENG, LI-YUAN
`,擋修說明:"",課程限制說明:"運科系大學部3年級優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"運科系109B  選修	"},{科號:"11120KSS 332100",課程中文名稱:"網球理論與實務",課程英文名稱:"Theory and Practicum of Tennis",學分數:"2",人限:"45",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"須修完網球一、網球二方可選修。患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:`Nanda南大B101	R5R6
`,授課教師:`梁龍鏡	LIANG, LUNG-CHING
`,擋修說明:"",課程限制說明:"運科系大學部3年級優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"運科系109B  選修	"},{科號:"11120KSS 355700",課程中文名稱:"運動專題二",課程英文名稱:"Selected Topics in Sports and Exercise II",學分數:"4",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限先修運動專題一",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>運動專題一-成績需C-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"限運科系大學部4年級",第一二專長對應:"運動科學(第二專長)	運動科學(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"運科系108B  必修	"},{科號:"11120KSS 357000",課程中文名稱:"運動專題二",課程英文名稱:"Selected Topics in Sports and Exercise II",學分數:"1",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限先修運動專題一",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>運動專題一-成績需C-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"限運科系大學部3年級",第一二專長對應:"運動科學(第二專長)	運動科學(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"運科系109B  必修	"},{科號:"11120KSS 400900",課程中文名稱:"瑜珈",課程英文名稱:"Yoga",學分數:"2",人限:"35",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`Nanda南大A507	T7T8
`,授課教師:`曾鈺婷	TSENG, YU-TING
`,擋修說明:"",課程限制說明:"運科系大學部4年級優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"運科系108B  選修	"},{科號:"11120KSS 401000",課程中文名稱:"臨床運動傷害理論與實務",課程英文名稱:"Clinical sports medicine —Injury theories and clinical practice",學分數:"2",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`Nanda南大A409	M5M6
`,授課教師:`張煥禎	CHANG, HUAN-CHENG
李淑芳	LEE SHU FANG
`,擋修說明:"",課程限制說明:"運科系大學部4年級優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"運科系108B  選修	"},{科號:"11120KSS 401300",課程中文名稱:"運動社會學",課程英文名稱:"Sociology of Sport",學分數:"2",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`Nanda南大A414	R5R6
`,授課教師:`張俊一	CHANG, CHUN-YI
`,擋修說明:"",課程限制說明:"運科系大學部4年級優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"運科系108B  選修	"},{科號:"11120KSS 401400",課程中文名稱:"武術理論與實務",課程英文名稱:"Theory and Practicum of Chinese Martial Arts",學分數:"2",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`Nanda南大7405	M3M4
`,授課教師:`張惟翔	CHANG, WEI-HSIANG
`,擋修說明:"",課程限制說明:"運科系大學部4年級優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"運科系108B  選修	"},{科號:"11120KSS 401700",課程中文名稱:"運動大數據分析: 理論與實務",課程英文名稱:"Big data analytics in sports: theory and practice",學分數:"2",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`Nanda南大A413	T5T6
`,授課教師:`姚在府	YAO, ZAI-FU
`,擋修說明:"",課程限制說明:"運科系大學部4年級優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"運科系108B  選修	"},{科號:"11120KSS 470000",課程中文名稱:"重量訓練理論與實務",課程英文名稱:"Theory and Practicum of Weight Training",學分數:"2",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`Nanda南大D001	W5W6
`,授課教師:`王嬿婷	WANG, YEN-TING
`,擋修說明:"",課程限制說明:"運科系大學部4年級優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"運科系108B  選修	"},{科號:"11120KSS 500200",課程中文名稱:"運動賽會專題研究",課程英文名稱:"Seminar on Sport Event",學分數:"3",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`Nanda南大A412	W5W6W7
`,授課教師:`黃煜	HUANG, YU
`,擋修說明:"",課程限制說明:"運科系碩士班優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"運科系111M  選修	"},{科號:"11120KSS 500800",課程中文名稱:"運動科學專題研究",課程英文名稱:"Essentials of Sport Science",學分數:"3",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`Nanda南大A310	T2T3T4
`,授課教師:`林貴福	LIN, KUEI-FU
`,擋修說明:"",課程限制說明:"運科系碩士班優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"運科系111M  選修	"},{科號:"11120KSS 505100",課程中文名稱:"進階書報討論",課程英文名稱:"Advanced Seminar",學分數:"1",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`Nanda南大A309	W8
`,授課教師:`張惟翔	CHANG, WEI-HSIANG
`,擋修說明:"",課程限制說明:"運科系碩士班優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"運科系111M  必修	"},{科號:"11120KSS 510000",課程中文名稱:"體育政策專題研究",課程英文名稱:"Seminar on sport policy",學分數:"3",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`Nanda南大A412	T2T3T4
`,授課教師:`張俊一	CHANG, CHUN-YI
`,擋修說明:"",課程限制說明:"運科系碩士班優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"運科系111M  選修	"},{科號:"11120KSS 511400",課程中文名稱:"應用運動心理學研究",課程英文名稱:"Study in Applied Sport Psychology",學分數:"3",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`Nanda南大A412	TnT5T6
`,授課教師:`高三福	KAO, SAN-FU
`,擋修說明:"",課程限制說明:"運科系碩士班優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"運科系111M  選修	"},{科號:"11120KSS 514400",課程中文名稱:"運動保健學研究",課程英文名稱:"Study in Athletic Training",學分數:"3",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`Nanda南大A412	R5R6R7
`,授課教師:`黎俊彥	LI, CHUN-YEN
`,擋修說明:"",課程限制說明:"運科系碩士班優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"運科系111M  選修	"},{科號:"11120KSS 515000",課程中文名稱:"健康促進專題研究",課程英文名稱:"Health Promotion Thematic Research",學分數:"3",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`Nanda南大A310	R5R6R7
`,授課教師:`鄭麗媛	CHENG, LI-YUAN
`,擋修說明:"",課程限制說明:"運科系碩士班優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"運科系111M  選修	"},{科號:"11120KSS 610300",課程中文名稱:"體育實驗設計",課程英文名稱:"Experiment Design in Physical Education",學分數:"3",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`Nanda南大A412	T7T8T9
`,授課教師:`謝錦城	HSIEH, CHIN-CHENG
`,擋修說明:"",課程限制說明:"運科系碩士班優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"運科系111M  必修	"},{科號:"11120KSS 634400",課程中文名稱:"動作神經科學專題研究",課程英文名稱:"Research topic on movement neuroscience",學分數:"3",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`Nanda南大A310	W3W4Wn
`,授課教師:`曾鈺婷	TSENG, YU-TING
`,擋修說明:"",課程限制說明:"運科系碩士班優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"運科系111M  選修	"},{科號:"11120KSS 634600",課程中文名稱:"運動營養學專題研究",課程英文名稱:"Exercise and Nutrition Seminars on Exercise Nutrition",學分數:"3",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`Nanda南大A309	R6R7R8
`,授課教師:`張惟翔	CHANG, WEI-HSIANG
`,擋修說明:"",課程限制說明:"運科系碩士班優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"運科系111M  選修	"},{科號:"11120KSS 635000",課程中文名稱:"運動生物力學訊號分析專題研究",課程英文名稱:"Seminars on Signal Processing in Sport Biomechanics",學分數:"3",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`Nanda南大A412	M2M3M4
`,授課教師:`邱文信	CHIU, WEN-HSIN
`,擋修說明:"",課程限制說明:"運科系碩士班優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"運科系111M  選修	"},{科號:"11120KSS 635300",課程中文名稱:"運動行銷專題研究",課程英文名稱:"Study in Sport Marketing",學分數:"3",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`Nanda南大A310	R2R3R4
`,授課教師:`許建民	HSU, CHIEN-MING
`,擋修說明:"",課程限制說明:"運科系碩士班優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"運科系111M  選修	"},{科號:"11120KSS 670000",課程中文名稱:"論文研究",課程英文名稱:"Thesis",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限運科系碩二以上修習",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"限運科系碩士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"運科系111M  必修	"},{科號:"11120KSSN510000",課程中文名稱:"體育政策專題研究",課程英文名稱:"Seminar on sport policy",學分數:"2",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`Nanda南大A310	T9Ta
`,授課教師:`張俊一	CHANG, CHUN-YI
`,擋修說明:"",課程限制說明:"限運科系在職專班專班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"運科系在職專班111P  選修	"},{科號:"11120KSSN510500",課程中文名稱:"體育課程與教學研究",課程英文名稱:"Study in Physical Education Curriculum and Teaching",學分數:"2",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`Nanda南大A310	TbTc
`,授課教師:`劉先翔	LIU, HSIEN-HSIANG
`,擋修說明:"",課程限制說明:"限運科系在職專班專班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"運科系在職專班111P  選修	"},{科號:"11120KSSN510600",課程中文名稱:"統計軟體應用",課程英文名稱:"Application of Statistical Software",學分數:"2",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`Nanda南大A412	F9Fa
`,授課教師:`謝錦城	HSIEH, CHIN-CHENG
`,擋修說明:"",課程限制說明:"限運科系在職專班專班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"運科系在職專班111P  必修	"},{科號:"11120KSSN515600",課程中文名稱:"運動傷害專題研究",課程英文名稱:"Study in Athletic Injuries",學分數:"2",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`Nanda南大A310	RbRc
`,授課教師:`黎俊彥	LI, CHUN-YEN
`,擋修說明:"",課程限制說明:"限運科系在職專班專班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"運科系在職專班111P  選修	"},{科號:"11120KSSN523500",課程中文名稱:"運動贊助專題研究",課程英文名稱:"Seminars on Sport Sponsorship",學分數:"2",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`Nanda南大A310	WbWc
`,授課教師:`黃煜	HUANG, YU
`,擋修說明:"",課程限制說明:"限運科系在職專班專班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"運科系在職專班111P  選修	"},{科號:"11120KSSN524200",課程中文名稱:"教練領導統御",課程英文名稱:"Coaching Leadership",學分數:"2",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`Nanda南大A412	MbMc
`,授課教師:`高三福	KAO, SAN-FU
`,擋修說明:"",課程限制說明:"限運科系在職專班專班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"運科系在職專班111P  選修	"},{科號:"11120KSSN611000",課程中文名稱:"運動器材創新專題研究",課程英文名稱:"Study in Sports Equipment Innovation",學分數:"2",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`Nanda南大A310	W9Wa
`,授課教師:`邱文信	CHIU, WEN-HSIN
`,擋修說明:"",課程限制說明:"限運科系在職專班專班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"運科系在職專班111P  選修	"},{科號:"11120KSSN630300",課程中文名稱:"運動醫學專題研究",課程英文名稱:"Study in Sports Medicine",學分數:"2",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`Nanda南大A412	R9Ra
`,授課教師:`謝錦城	HSIEH, CHIN-CHENG
`,擋修說明:"",課程限制說明:"限運科系在職專班專班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"運科系在職專班111P  選修	"},{科號:"11120KSSN680000",課程中文名稱:"論文",課程英文名稱:"Thesis",學分數:"2",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限專班二年級以上修習",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"限運科系在職專班專班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"運科系在職專班111P  必修	"},{科號:"11120KTLT112100",課程中文名稱:"閩南語聽力與口說",課程英文名稱:"Southren Min Listening and Speaking",學分數:"2",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"國小加註語文領域閩南語文、中等教育閩南語文專門課程必修課程;授課教師聘任中(林曉瑛)",停開註記:"",教室與上課時間:`Nanda南大9426	W8W9
`,授課教師:`林曉瑛	LIN HSIAO-YING
`,擋修說明:"",課程限制說明:"",第一二專長對應:"本土語文(第二專長)",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120KTLT112200",課程中文名稱:"閩南語閱讀與書寫",課程英文名稱:"Southren Min Reading and Writing",學分數:"2",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"國小加註語文領域閩南語文、中等教育閩南語文專門課程必修課程",停開註記:"",教室與上課時間:`Nanda南大9426	R7R8
`,授課教師:`顏秀珊	YEN, HSIU-SHAN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"本土語文(第二專長)",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120KTLT113500",課程中文名稱:"生命禮俗文化",課程英文名稱:"TRADITIONAL BIRTH CUSTOMS",學分數:"2",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"國小加註語文領域閩南語文、中等教育閩南語文專門課程選修課程;授課教師聘任中(游淑珺)",停開註記:"",教室與上課時間:`Nanda南大9426	R5R6
`,授課教師:`游淑珺	YU, SHUCHUN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"本土語文(第二專長)",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120KTLT122200",課程中文名稱:"客家語閱讀與書寫",課程英文名稱:"Hakka Reading and Writing",學分數:"2",人限:"16",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"國小加註語文領域客家語文、中等教育客家語文專門課程必修課程",停開註記:"",教室與上課時間:`Nanda南大9430	M7M8
`,授課教師:`邱仲森	CHIU,CHUNG-SEN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"本土語文(第二專長)",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120KTLT123100",課程中文名稱:"台灣客家文學選",課程英文名稱:"Selected Readings in Taiwanese Hakka Literature",學分數:"3",人限:"16",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"國小加註語文領域客家語文、中等教育客家語文專門課程選修課程",停開註記:"",教室與上課時間:`Nanda南大9430	M2M3M4
`,授課教師:`范文芳	FAV,WEN-FANG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"本土語文(第二專長)",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120KTLT131200",課程中文名稱:"台灣客家語概論",課程英文名稱:"Introduction of Taiwan Hakka",學分數:"3",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程為16 週課程 /國小加註語文領域客家語文必修課程、中等教育客家語文專門課程選修課程",停開註記:"",教室與上課時間:`Nanda南大9426	W2W3W4
`,授課教師:`葉瑞娟	YEH, JUI-CHUAN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"本土語文(第二專長)",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120KTLT132400",課程中文名稱:"泰雅族族語四",課程英文名稱:" ",學分數:"2",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"原住民族語言與文化課程20學分必修課程",停開註記:"",教室與上課時間:`Nanda南大9406	S3S4
`,授課教師:`錢玉章	CHENG JU CHANG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)世界南島暨原住民族學分學程",不可加簽說明:"",必選修說明:""},{科號:"11120KTLT133100",課程中文名稱:"臺灣原住民族文化概論",課程英文名稱:"Introduction to Taiwan's Aboriginal Culture",學分數:"2",人限:"12",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"國小加註/中等教育原住民族語文專門課程、原住民族教育次專長必修課程;授課教師聘任中(伍杜米將)",停開註記:"",教室與上課時間:`Nanda南大9430	F3F4
`,授課教師:`伍杜‧米將	OTO MICYANG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"本土語文(第二專長)",學分學程對應:"(跨領域)世界南島暨原住民族學分學程",不可加簽說明:"",必選修說明:""},{科號:"11120KTLT133200",課程中文名稱:"原住民族教育",課程英文名稱:"Indigenous education",學分數:"2",人限:"12",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"國小加註/中等教育原住民族語文專門課程、原住民族教育次專長必修課程",停開註記:"",教室與上課時間:`Nanda南大9430	F5F6
`,授課教師:`徐榮春	HSU, JUNG-CHUN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"本土語文(第二專長)",學分學程對應:"(跨領域)世界南島暨原住民族學分學程",不可加簽說明:"",必選修說明:""},{科號:"11120KTLT133500",課程中文名稱:"排灣族族語寫作",課程英文名稱:" ",學分數:"3",人限:"12",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"中等教育原住民族語文專門課程必選修課程",停開註記:"",教室與上課時間:`Nanda南大9429	R2R3R4
`,授課教師:`陳春媚	CHEN, CHUN-MEI
`,擋修說明:"",課程限制說明:"",第一二專長對應:"本土語文(第二專長)",學分學程對應:"(跨領域)世界南島暨原住民族學分學程",不可加簽說明:"",必選修說明:""},{科號:"11120KTLT600000",課程中文名稱:"論文研究",課程英文名稱:"Thesis",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限台語所碩二以上修習",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"排除臺語所碩士班1年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"臺語所111M  必修	"},{科號:"11120KTLT711900",課程中文名稱:"語法理論專題",課程英文名稱:"Seminar on grammatical theory",學分數:"3",人限:"16",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程為16 週課程",停開註記:"",教室與上課時間:`Nanda南大9430	W2W3W4
`,授課教師:`鄭縈	CHENG, YING
`,擋修說明:"",課程限制說明:"限碩士班博士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"臺語所111D  選修	臺語所111M  選修	"},{科號:"11120KTLT712700",課程中文名稱:"語言分析專題",課程英文名稱:"Language Analysis",學分數:"3",人限:"12",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`Nanda南大9430	R2R3R4
`,授課教師:`陳亭君	CHEN, TINGCHUN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"本土語文(第二專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"臺語所111D  選修	臺語所111M  選修	"},{科號:"11120KTLT720200",課程中文名稱:"語言田野調查",課程英文名稱:"Language Field Investigation",學分數:"3",人限:"12",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`Nanda南大9429	R5R6R7
`,授課教師:`陳亭君	CHEN, TINGCHUN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"本土語文(第二專長)",學分學程對應:"(跨領域)世界南島暨原住民族學分學程",不可加簽說明:"",必選修說明:"臺語所111D  選修	臺語所111M  選修	"},{科號:"11120KTLT720700",課程中文名稱:"心理語言學專題",課程英文名稱:"Topics in Psycholinguistics",學分數:"3",人限:"16",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`Nanda南大9430	RaRbRc
`,授課教師:`呂菁菁	LU, CHING-CHING
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"臺語所111D  選修	臺語所111M  選修	"},{科號:"11120KTLT721100",課程中文名稱:"臺灣南島語綜論",課程英文名稱:"A Survey of Formosan Languages",學分數:"3",人限:"12",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程為16 週課程。",停開註記:"",教室與上課時間:`Nanda南大9430	W5W6W7
`,授課教師:`陳亭君	CHEN, TINGCHUN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"本土語文(第二專長)",學分學程對應:"(跨領域)世界南島暨原住民族學分學程",不可加簽說明:"",必選修說明:"臺語所111D  選修	臺語所111M  選修	"},{科號:"11120KTLT722700",課程中文名稱:"自然語言處理應用於本土語言教學",課程英文名稱:"NLP Applications for the Teaching of Taiwan Languages",學分數:"3",人限:"16",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程為16 週課程。",停開註記:"",教室與上課時間:`Nanda南大9430	M9MaMb
`,授課教師:`呂菁菁	LU, CHING-CHING
林書宇	LIN, SHU-YU
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"臺語所111D  選修	臺語所111M  選修	"},{科號:"11120KTLT740800",課程中文名稱:"語言教學量化專題研究",課程英文名稱:"Quantitative Research on Language Teaching",學分數:"3",人限:"12",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程為16 週課程。",停開註記:"",教室與上課時間:`Nanda南大9430	W8W9Wa
`,授課教師:`陳鳳如	CHEN, FENG-RU
`,擋修說明:"",課程限制說明:"限臺語所碩士班博士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"臺語所111D  選修	臺語所111M  選修	"},{科號:"11120KTLT800000",課程中文名稱:"論文研究",課程英文名稱:"Thesis",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限台語所博二以上修習",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"排除臺語所博士班1年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"臺語所111D  必修	"},{科號:"11120KWEN530100",課程中文名稱:"探究方案習作",課程英文名稱:"Project Learning（）",學分數:"2",人限:"16",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`Nanda南大N414	S3S4
`,授課教師:`成虹飛	CHERNG, HORN-FAY
王智弘	WANG,CHIH-HUNG
尼爾．伯蘭	NEIL BOLAND
`,擋修說明:"",課程限制說明:"限華德福在職學位學程專班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"華德福在職學位學程111P  必修	"},{科號:"11120LANG102001",課程中文名稱:"中高級英文二",課程英文名稱:"Upper-Intermediate English II",學分數:"2",人限:"32",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`GEN II綜二103	M1M2
`,授課教師:`蔣光煌	CHIANG,KUANG-HUANG
`,擋修說明:"",課程限制說明:"【上學期原修中高級英文一LANG101001(蔣光煌老師)同學選課優先,第3次選課起開放】",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120LANG102002",課程中文名稱:"中高級英文二",課程英文名稱:"Upper-Intermediate English II",學分數:"2",人限:"34",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`GEN II綜二105	M1M2
`,授課教師:`張雅淳	CHANG, YA-TSUN
`,擋修說明:"",課程限制說明:"【上學期原修中高級英文一LANG101002(陳明君老師)同學選課優先,第3次選課起開放】",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120LANG102006",課程中文名稱:"中高級英文二",課程英文名稱:"Upper-Intermediate English II",學分數:"2",人限:"33",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`GEN II綜二105	M3M4
`,授課教師:`張雅淳	CHANG, YA-TSUN
`,擋修說明:"",課程限制說明:"【上學期原修中高級英文一LANG101006(陳明君老師)同學選課優先,第3次選課起開放】",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120LANG102007",課程中文名稱:"中高級英文二",課程英文名稱:"Upper-Intermediate English II",學分數:"2",人限:"32",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`GEN II綜二103	M3M4
`,授課教師:`鄺粵敏	KWONG, YUET MAN
`,擋修說明:"",課程限制說明:"【上學期原修中高級英文一LANG101007(鄺粵敏老師)同學選課優先,第3次選課起開放】",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120LANG102008",課程中文名稱:"中高級英文二",課程英文名稱:"Upper-Intermediate English II",學分數:"2",人限:"34",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`GEN II綜二201	W3W4
`,授課教師:`徐桂平	HSU, KUI-PING
`,擋修說明:"",課程限制說明:"【上學期原修中高級英文一LANG101008(徐桂平老師)同學選課優先,第3次選課起開放】",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120LANG102012",課程中文名稱:"中高級英文二",課程英文名稱:"Upper-Intermediate English II",學分數:"2",人限:"32",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`GEN II綜二201	R1R2
`,授課教師:`徐桂平	HSU, KUI-PING
`,擋修說明:"",課程限制說明:"【上學期原修中高級英文一LANG101012(徐桂平老師)同學選課優先,第3次選課起開放】",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120LANG102013",課程中文名稱:"中高級英文二",課程英文名稱:"Upper-Intermediate English II",學分數:"2",人限:"34",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`GEN II綜二103	R1R2
`,授課教師:`蔣光煌	CHIANG,KUANG-HUANG
`,擋修說明:"",課程限制說明:"【上學期原修中高級英文一LANG101013(蔣光煌老師)同學選課優先,第3次選課起開放】",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120LANG102014",課程中文名稱:"中高級英文二",課程英文名稱:"Upper-Intermediate English II",學分數:"2",人限:"32",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`GEN II綜二104	R1R2
`,授課教師:`聘任中	
`,擋修說明:"",課程限制說明:"【上學期原修中高級英文一LANG101014(陳明君老師)同學選課優先,第3次選課起開放】",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120LANG102015",課程中文名稱:"中高級英文二",課程英文名稱:"Upper-Intermediate English II",學分數:"2",人限:"33",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`GEN II綜二103	F1F2
`,授課教師:`鄺粵敏	KWONG, YUET MAN
`,擋修說明:"",課程限制說明:"【上學期原修中高級英文一LANG101015(鄺粵敏老師)同學選課優先,第3次選課起開放】",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120LANG102016",課程中文名稱:"中高級英文二",課程英文名稱:"Upper-Intermediate English II",學分數:"2",人限:"32",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`GEN II綜二201	F3F4
`,授課教師:`張雅淳	CHANG, YA-TSUN
`,擋修說明:"",課程限制說明:"【上學期原修中高級英文一LANG101016(張雅淳老師)同學選課優先,第3次選課起開放】",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120LANG102017",課程中文名稱:"中高級英文二",課程英文名稱:"Upper-Intermediate English II",學分數:"2",人限:"33",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`GEN II綜二104	F3F4
`,授課教師:`賴郁婷	LAI, YU-TING
`,擋修說明:"",課程限制說明:"【上學期原修中高級英文一LANG101017(賴郁婷老師)同學選課優先,第3次選課起開放】",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120LANG102018",課程中文名稱:"中高級英文二",課程英文名稱:"Upper-Intermediate English II",學分數:"2",人限:"32",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`GEN II綜二103	F3F4
`,授課教師:`鄺粵敏	KWONG, YUET MAN
`,擋修說明:"",課程限制說明:"【上學期原修中高級英文一LANG101018(鄺粵敏老師)同學選課優先,第3次選課起開放】",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120LANG102019",課程中文名稱:"中高級英文二",課程英文名稱:"Upper-Intermediate English II",學分數:"2",人限:"32",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`Nanda南大9205	M3M4
`,授課教師:`徐桂平	HSU, KUI-PING
`,擋修說明:"",課程限制說明:"【上學期原修中高級英文一LANG101019(徐桂平老師)同學選課優先,第3次選課起開放】",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120LANG102020",課程中文名稱:"中高級英文二",課程英文名稱:"Upper-Intermediate English II",學分數:"2",人限:"32",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`Nanda南大9206	M3M4
`,授課教師:`王國樹	WANG, KUO-SHU
`,擋修說明:"",課程限制說明:"【上學期原修中高級英文一LANG101020(王國樹老師)同學選課優先,第3次選課起開放】",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120LANG102021",課程中文名稱:"中高級英文二",課程英文名稱:"Upper-Intermediate English II",學分數:"2",人限:"28",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`Nanda南大9206	F3F4
`,授課教師:`聘任中	
`,擋修說明:"",課程限制說明:"【上學期原修中高級英文一LANG101021(陳明君老師)同學選課優先,第3次選課起開放】",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120LANG102101",課程中文名稱:"中級英文二",課程英文名稱:"Intermediate English II",學分數:"2",人限:"32",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`GEN II綜二105	R1R2
`,授課教師:`王遠洋	WANG, YUAN-YANG
`,擋修說明:"",課程限制說明:"【上學期原修中級英文一LANG101101(王遠洋老師)同學選課優先,第3次選課起開放】",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120LANG102102",課程中文名稱:"中級英文二",課程英文名稱:"Intermediate English II",學分數:"2",人限:"33",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`EDU教  103	F3F4
`,授課教師:`湯智群	TANG, CHIH CHUN
`,擋修說明:"",課程限制說明:"【上學期原修中級英文一LANG101102(湯智群老師)同學選課優先,第3次選課起開放】",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120LANG102103",課程中文名稱:"中級英文二",課程英文名稱:"Intermediate English II",學分數:"2",人限:"33",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`GEN II綜二202	R1R2
`,授課教師:`楊幸瑜	HSING-YU YANG
`,擋修說明:"",課程限制說明:"【上學期原修中級英文一LANG101103(楊幸瑜老師)同學選課優先,第3次選課起開放】",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120LANG102104",課程中文名稱:"中級英文二",課程英文名稱:"Intermediate English II",學分數:"2",人限:"33",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`Nanda南大9512	F3F4
`,授課教師:`金祖詠	KING, TZUU-YEONG
`,擋修說明:"",課程限制說明:"【上學期原修中級英文一LANG101104(金祖詠老師)同學選課優先,第3次選課起開放】",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120LANG102105",課程中文名稱:"中級英文二",課程英文名稱:"Intermediate English II",學分數:"2",人限:"32",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`Nanda南大1411	F3F4
`,授課教師:`蔡佩蓉	KATHERINE TSAI
`,擋修說明:"",課程限制說明:"【上學期原修中級英文一LANG101105(蔡佩蓉老師)同學選課優先,第3次選課起開放】",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120LANG102201",課程中文名稱:"初級英文二",課程英文名稱:"Elementary English II",學分數:"2",人限:"34",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`Nanda南大2203	F3F4
`,授課教師:`林鈺&#20962;	LIN, YU-FAN
`,擋修說明:"",課程限制說明:"【上學期原修初級英文一LANG101201(林鈺&#20962;老師)同學選課優先,第3次選課起開放】",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120LANG102202",課程中文名稱:"初級英文二",課程英文名稱:"Elementary English II",學分數:"2",人限:"34",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`Nanda南大9122	F3F4
`,授課教師:`王遠洋	WANG, YUAN-YANG
`,擋修說明:"",課程限制說明:"【上學期原修初級英文一LANG101202(王遠洋老師)同學選課優先,第3次選課起開放】",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120LANG102203",課程中文名稱:"初級英文二",課程英文名稱:"Elementary English II",學分數:"2",人限:"34",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`Nanda南大9105	F3F4
`,授課教師:`林雅瓊	LIM, NGA-KHING
`,擋修說明:"",課程限制說明:"【上學期原修初級英文一LANG101203(林雅瓊老師)同學選課優先,第3次選課起開放】",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120LANG103001",課程中文名稱:"中高級英文三-閱讀",課程英文名稱:"Upper-Intermediate English III：Reading",學分數:"2",人限:"28",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`GEN II綜二201	M1M2
`,授課教師:`黃滿庭	HUANG, MAN-TING
`,擋修說明:"",課程限制說明:"限工學院,清華學院學士班大學部,頂標生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120LANG103002",課程中文名稱:"中高級英文三-閱讀",課程英文名稱:"Upper-Intermediate English III：Reading",學分數:"2",人限:"28",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`GEN II綜二202	M1M2
`,授課教師:`林嘉瑜	LIN, CHIA-YU
`,擋修說明:"",課程限制說明:"限工學院,清華學院學士班大學部,頂標生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120LANG103003",課程中文名稱:"中高級英文三-閱讀",課程英文名稱:"Upper-Intermediate English III：Reading",學分數:"2",人限:"28",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`GEN II綜二203	M1M2
`,授課教師:`劉文貞	LIU, WEN-CHEN
`,擋修說明:"",課程限制說明:"限工學院,清華學院學士班大學部,頂標生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120LANG103004",課程中文名稱:"中高級英文三-聽講",課程英文名稱:"Upper-Intermediate English III：Listening and Speaking",學分數:"2",人限:"0",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`GEN II綜二104	M1M2
`,授課教師:`聘任中	
`,擋修說明:"",課程限制說明:"限工學院,清華學院學士班大學部,頂標生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120LANG103005",課程中文名稱:"中高級英文三-聽講",課程英文名稱:"Upper-Intermediate English III：Listening and Speaking",學分數:"2",人限:"28",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`EDU教  103	M1M2
`,授課教師:`陳惠芬	CHEN, HUI-FEN
`,擋修說明:"",課程限制說明:"限工學院,清華學院學士班大學部,頂標生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120LANG103006",課程中文名稱:"中高級英文三-聽講",課程英文名稱:"Upper-Intermediate English III：Listening and Speaking",學分數:"2",人限:"28",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`EDU教  102	M1M2
`,授課教師:`戴孜&#20227;	TAI, TZU-YU
`,擋修說明:"",課程限制說明:"限工學院,清華學院學士班大學部,頂標生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120LANG103008",課程中文名稱:"中高級英文三-聽講",課程英文名稱:"Upper-Intermediate English III：Listening and Speaking",學分數:"2",人限:"28",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`GEN II綜二108	M1M2
`,授課教師:`楊幸瑜	HSING-YU YANG
`,擋修說明:"",課程限制說明:"限工學院,清華學院學士班大學部,頂標生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120LANG103010",課程中文名稱:"中高級英文三-閱讀",課程英文名稱:"Upper-Intermediate English III：Reading",學分數:"2",人限:"28",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`GEN II綜二201	M3M4
`,授課教師:`黃滿庭	HUANG, MAN-TING
`,擋修說明:"",課程限制說明:"限生科院,原科院,大學部,頂標生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120LANG103011",課程中文名稱:"中高級英文三-閱讀",課程英文名稱:"Upper-Intermediate English III：Reading",學分數:"2",人限:"28",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`GEN II綜二202	M3M4
`,授課教師:`林嘉瑜	LIN, CHIA-YU
`,擋修說明:"",課程限制說明:"限生科院,原科院,大學部,頂標生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120LANG103012",課程中文名稱:"中高級英文三-聽講",課程英文名稱:"Upper-Intermediate English III：Listening and Speaking",學分數:"2",人限:"28",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`EDU教  103	M3M4
`,授課教師:`陳惠芬	CHEN, HUI-FEN
`,擋修說明:"",課程限制說明:"限生科院,原科院,大學部,頂標生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120LANG103013",課程中文名稱:"中高級英文三-聽講",課程英文名稱:"Upper-Intermediate English III：Listening and Speaking",學分數:"2",人限:"0",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`GEN II綜二104	M3M4
`,授課教師:`聘任中	
`,擋修說明:"",課程限制說明:"限生科院,原科院,大學部,頂標生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120LANG103015",課程中文名稱:"中高級英文三-聽講",課程英文名稱:"Upper-Intermediate English III：Listening and Speaking",學分數:"2",人限:"28",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`GEN II綜二108	M3M4
`,授課教師:`楊幸瑜	HSING-YU YANG
`,擋修說明:"",課程限制說明:"限生科院,原科院,大學部,頂標生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120LANG103018",課程中文名稱:"中高級英文三-聽講",課程英文名稱:"Upper-Intermediate English III：Listening and Speaking",學分數:"2",人限:"28",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`GEN II綜二103	W1W2
`,授課教師:`馬紹芸	MA, SHAO-YUN
`,擋修說明:"",課程限制說明:"限大學部,頂標生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120LANG103019",課程中文名稱:"中高級英文三-閱讀",課程英文名稱:"Upper-Intermediate English III：Reading",學分數:"2",人限:"28",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`GEN II綜二204	W3W4
`,授課教師:`劉文貞	LIU, WEN-CHEN
`,擋修說明:"",課程限制說明:"限電資院,國際學士班大學部,頂標生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120LANG103020",課程中文名稱:"中高級英文三-閱讀",課程英文名稱:"Upper-Intermediate English III：Reading",學分數:"2",人限:"28",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`EDU教  102	W3W4
`,授課教師:`黃滿庭	HUANG, MAN-TING
`,擋修說明:"",課程限制說明:"限電資院,國際學士班大學部,頂標生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120LANG103021",課程中文名稱:"中高級英文三-閱讀",課程英文名稱:"Upper-Intermediate English III：Reading",學分數:"2",人限:"28",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`GEN II綜二202	W3W4
`,授課教師:`林嘉瑜	LIN, CHIA-YU
`,擋修說明:"",課程限制說明:"限電資院,國際學士班大學部,頂標生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120LANG103022",課程中文名稱:"中高級英文三-聽講",課程英文名稱:"Upper-Intermediate English III：Listening and Speaking",學分數:"2",人限:"28",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`GEN II綜二105	W3W4
`,授課教師:`賴盈旭	LAI, YING-HSU
`,擋修說明:"",課程限制說明:"限電資院,國際學士班大學部,頂標生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120LANG103023",課程中文名稱:"中高級英文三-聽講",課程英文名稱:"Upper-Intermediate English III：Listening and Speaking",學分數:"2",人限:"28",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`GEN II綜二103	W3W4
`,授課教師:`馬紹芸	MA, SHAO-YUN
`,擋修說明:"",課程限制說明:"限電資院,國際學士班大學部,頂標生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120LANG103031",課程中文名稱:"中高級英文三-閱讀",課程英文名稱:"Upper-Intermediate English III：Reading",學分數:"2",人限:"28",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`GEN II綜二108	R1R2
`,授課教師:`林玲真	LIN, LING-JEN
`,擋修說明:"",課程限制說明:"限人社院,科管院,運科系大學部,清華學院學士班大學部,頂標生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120LANG103032",課程中文名稱:"中高級英文三-閱讀",課程英文名稱:"Upper-Intermediate English III：Reading",學分數:"2",人限:"28",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`GEN II綜二203	R1R2
`,授課教師:`劉文貞	LIU, WEN-CHEN
`,擋修說明:"",課程限制說明:"限人社院,科管院,運科系大學部,清華學院學士班大學部,頂標生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120LANG103033",課程中文名稱:"中高級英文三-聽講",課程英文名稱:"Upper-Intermediate English III：Listening and Speaking",學分數:"2",人限:"28",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`EDU教  102	R1R2
`,授課教師:`金祖詠	KING, TZUU-YEONG
`,擋修說明:"",課程限制說明:"限人社院,科管院,運科系大學部,清華學院學士班大學部,頂標生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120LANG103034",課程中文名稱:"中高級英文三-聽講",課程英文名稱:"Upper-Intermediate English III：Listening and Speaking",學分數:"2",人限:"28",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`GEN II綜二204	R1R2
`,授課教師:`黃嘉瑜	HUANG, CHIA-YU
`,擋修說明:"",課程限制說明:"限人社院,科管院,運科系大學部,清華學院學士班大學部,頂標生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120LANG103035",課程中文名稱:"中高級英文三-聽講",課程英文名稱:"Upper-Intermediate English III：Listening and Speaking",學分數:"2",人限:"28",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`EDU教  103	R1R2
`,授課教師:`彭明玉	PENG, MING-YU
`,擋修說明:"",課程限制說明:"限人社院,科管院,運科系大學部,清華學院學士班大學部,頂標生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120LANG103037",課程中文名稱:"中高級英文三-閱讀",課程英文名稱:"Upper-Intermediate English III：Reading",學分數:"2",人限:"28",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`GEN II綜二105	F3F4
`,授課教師:`林玲真	LIN, LING-JEN
`,擋修說明:"",課程限制說明:"限理學院,大學部,頂標生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120LANG103038",課程中文名稱:"中高級英文三-閱讀",課程英文名稱:"Upper-Intermediate English III：Reading",學分數:"2",人限:"28",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`GEN II綜二203	F3F4
`,授課教師:`李偉哲	LEE, WEI-CHE
`,擋修說明:"",課程限制說明:"限理學院,大學部,頂標生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120LANG103039",課程中文名稱:"中高級英文三-聽講",課程英文名稱:"Upper-Intermediate English III：Listening and Speaking",學分數:"2",人限:"28",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`EDU教  102	F3F4
`,授課教師:`彭明玉	PENG, MING-YU
`,擋修說明:"",課程限制說明:"限理學院,大學部,頂標生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120LANG103051",課程中文名稱:"中高級英文三-閱讀",課程英文名稱:"Upper-Intermediate English III：Reading",學分數:"2",人限:"28",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`Nanda南大1407	M3M4
`,授課教師:`李偉哲	LEE, WEI-CHE
`,擋修說明:"",課程限制說明:"限教育學院,大學部,頂標生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120LANG103053",課程中文名稱:"中高級英文三-閱讀",課程英文名稱:"Upper-Intermediate English III：Reading",學分數:"2",人限:"28",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`Nanda南大2203	M3M4
`,授課教師:`林玉書	LIN, YU-SHU
`,擋修說明:"",課程限制說明:"限教育學院,大學部,頂標生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120LANG103054",課程中文名稱:"中高級英文三-聽講",課程英文名稱:"Upper-Intermediate English III：Listening and Speaking",學分數:"2",人限:"28",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`Nanda南大9122	M3M4
`,授課教師:`聘任中	
`,擋修說明:"",課程限制說明:"限教育學院,大學部,頂標生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120LANG103061",課程中文名稱:"中高級英文三-聽講",課程英文名稱:"Upper-Intermediate English III：Listening and Speaking",學分數:"2",人限:"28",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`Nanda南大9205	F3F4
`,授課教師:`聘任中	
`,擋修說明:"",課程限制說明:"限藝術學院,運科系大學部,頂標生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120LANG200001",課程中文名稱:"中高級選讀英文-演說與簡報",課程英文名稱:"Public Speaking and Presentation",學分數:"2",人限:"15",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"1、2選:限同級數大二生，3選:限同級數大三、大四生，加退選:開放同級數大二至大四生修習。",停開註記:"",教室與上課時間:`GEN II綜二204	M5M6
`,授課教師:`黃嘉瑜	HUANG, CHIA-YU
`,擋修說明:"",課程限制說明:"限大學部2年級,頂標生,前標生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120LANG200002",課程中文名稱:"中高級選讀英文-新聞英文選讀",課程英文名稱:"Journalistic English",學分數:"2",人限:"19",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"1、2選:限同級數大二生，3選:限同級數大三、大四生，加退選:開放同級數大二至大四生修習。",停開註記:"",教室與上課時間:`GEN II綜二203	M5M6
`,授課教師:`劉文貞	LIU, WEN-CHEN
`,擋修說明:"",課程限制說明:"限大學部2年級,頂標生,前標生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120LANG200003",課程中文名稱:"中高級選讀英文-演說與簡報",課程英文名稱:"Public Speaking and Presentation",學分數:"2",人限:"15",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"1、2選:限同級數大二生，3選:限同級數大三、大四生，加退選:開放同級數大二至大四生修習。",停開註記:"",教室與上課時間:`GEN II綜二204	M7M8
`,授課教師:`黃嘉瑜	HUANG, CHIA-YU
`,擋修說明:"",課程限制說明:"限大學部2年級,頂標生,前標生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120LANG200004",課程中文名稱:"中高級選讀英文-短篇故事選讀",課程英文名稱:"Selected English Short Stories",學分數:"2",人限:"19",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"1、2選:限同級數大二生，3選:限同級數大三、大四生，加退選:開放同級數大二至大四生修習。",停開註記:"",教室與上課時間:`GEN II綜二202	M7M8
`,授課教師:`徐桂平	HSU, KUI-PING
`,擋修說明:"",課程限制說明:"限大學部2年級,頂標生,前標生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120LANG200021",課程中文名稱:"中高級選讀英文-影視英語聽講",課程英文名稱:"Listening & Oral Training through Films",學分數:"2",人限:"15",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"1、2選:限同級數大二生，3選:限同級數大三、大四生，加退選:開放同級數大二至大四生修習。",停開註記:"",教室與上課時間:`GEN II綜二105	R3R4
`,授課教師:`賴盈旭	LAI, YING-HSU
`,擋修說明:"",課程限制說明:"限大學部2年級,頂標生,前標生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120LANG200022",課程中文名稱:"中高級選讀英文-新聞英文選讀",課程英文名稱:"Journalistic English",學分數:"2",人限:"19",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"1、2選:限同級數大二生，3選:限同級數大三、大四生，加退選:開放同級數大二至大四生修習。",停開註記:"",教室與上課時間:`GEN II綜二202	T3T4
`,授課教師:`劉文貞	LIU, WEN-CHEN
`,擋修說明:"",課程限制說明:"限大學部2年級,頂標生,前標生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120LANG200023",課程中文名稱:"中高級選讀英文-中英口譯",課程英文名稱:"Oral Interpretation",學分數:"2",人限:"15",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"1、2選:限同級數大二生，3選:限同級數大三、大四生，加退選:開放同級數大二至大四生修習。",停開註記:"",教室與上課時間:`GEN II綜二204	T3T4
`,授課教師:`黃嘉瑜	HUANG, CHIA-YU
`,擋修說明:"",課程限制說明:"限大學部2年級,頂標生,前標生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120LANG200024",課程中文名稱:"中高級選讀英文-職場英語寫作",課程英文名稱:"Writing for Professional Pursuit",學分數:"2",人限:"11",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"1、2選:限同級數大二生，3選:限同級數大三、大四生，加退選:開放同級數大二至大四生修習。",停開註記:"",教室與上課時間:`GEN II綜二204	T5T6
`,授課教師:`黃佩如	HUANG, PEI-JU
`,擋修說明:"",課程限制說明:"限大學部2年級,頂標生,前標生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120LANG200025",課程中文名稱:"中高級選讀英文-小說選讀",課程英文名稱:"Selected English Novels",學分數:"2",人限:"19",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"1、2選:限同級數大二生，3選:限同級數大三、大四生，加退選:開放同級數大二至大四生修習。",停開註記:"",教室與上課時間:`GEN II綜二105	T5T6
`,授課教師:`李偉哲	LEE, WEI-CHE
`,擋修說明:"",課程限制說明:"限大學部2年級,頂標生,前標生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120LANG200026",課程中文名稱:"中高級選讀英文-中英文筆譯",課程英文名稱:"Chinese-English Translation",學分數:"2",人限:"12",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"1、2選:限同級數大二生，3選:限同級數大三、大四生，加退選:開放同級數大二至大四生修習。",停開註記:"",教室與上課時間:`GEN II綜二108	T5T6
`,授課教師:`張雅淳	CHANG, YA-TSUN
`,擋修說明:"",課程限制說明:"限大學部2年級,頂標生,前標生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120LANG200027",課程中文名稱:"中高級選讀英文-小說選讀",課程英文名稱:"Selected English Novels",學分數:"2",人限:"19",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"1、2選:限同級數大二生，3選:限同級數大三、大四生，加退選:開放同級數大二至大四生修習。",停開註記:"",教室與上課時間:`GEN II綜二105	T7T8
`,授課教師:`李偉哲	LEE, WEI-CHE
`,擋修說明:"",課程限制說明:"限大學部2年級,頂標生,前標生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120LANG200031",課程中文名稱:"中高級選讀英文-小說選讀",課程英文名稱:"Selected English Novels",學分數:"2",人限:"19",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"1、2選:限同級數大二生，3選:限同級數大三、大四生，加退選:開放同級數大二至大四生修習。",停開註記:"",教室與上課時間:`GEN II綜二201	W5W6
`,授課教師:`徐桂平	HSU, KUI-PING
`,擋修說明:"",課程限制說明:"限大學部2年級,頂標生,前標生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120LANG200032",課程中文名稱:"中高級選讀英文-學術英語聽力",課程英文名稱:"Academic Listening Training",學分數:"2",人限:"15",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"1、2選:限同級數大二生，3選:限同級數大三、大四生，加退選:開放同級數大二至大四生修習。",停開註記:"",教室與上課時間:`GEN II綜二202	W5W6
`,授課教師:`林嘉瑜	LIN, CHIA-YU
`,擋修說明:"",課程限制說明:"限大學部2年級,頂標生,前標生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120LANG200033",課程中文名稱:"中高級選讀英文-學術論文寫作",課程英文名稱:"Academic Writing",學分數:"2",人限:"11",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"1、2選:限同級數大二生，3選:限同級數大三、大四生，加退選:開放同級數大二至大四生修習。",停開註記:"",教室與上課時間:`EDU教  102	W5W6
`,授課教師:`黃滿庭	HUANG, MAN-TING
`,擋修說明:"",課程限制說明:"限大學部2年級,頂標生,前標生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120LANG200034",課程中文名稱:"中高級選讀英文-職場英語口語表達",課程英文名稱:"Oral Communication for Professional Contexts",學分數:"2",人限:"15",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"1、2選:限同級數大二生，3選:限同級數大三、大四生，加退選:開放同級數大二至大四生修習。",停開註記:"",教室與上課時間:`GEN II綜二104	W5W6
`,授課教師:`彭明玉	PENG, MING-YU
`,擋修說明:"",課程限制說明:"限大學部2年級,頂標生,前標生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120LANG200035",課程中文名稱:"中高級選讀英文-新聞英文聽力",課程英文名稱:"News English Listening",學分數:"2",人限:"15",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"1、2選:限同級數大二生，3選:限同級數大三、大四生，加退選:開放同級數大二至大四生修習。",停開註記:"",教室與上課時間:`GEN II綜二203	W5W6
`,授課教師:`劉文貞	LIU, WEN-CHEN
`,擋修說明:"",課程限制說明:"限大學部2年級,頂標生,前標生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120LANG200036",課程中文名稱:"中高級選讀英文-學術英語聽力",課程英文名稱:"Academic Listening Training",學分數:"2",人限:"15",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"1、2選:限同級數大二生，3選:限同級數大三、大四生，加退選:開放同級數大二至大四生修習。",停開註記:"",教室與上課時間:`GEN II綜二202	W7W8
`,授課教師:`林嘉瑜	LIN, CHIA-YU
`,擋修說明:"",課程限制說明:"限大學部2年級,頂標生,前標生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120LANG200037",課程中文名稱:"中高級選讀英文-中英文筆譯",課程英文名稱:"Chinese-English Translation",學分數:"2",人限:"19",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"1、2選:限同級數大二生，3選:限同級數大三、大四生，加退選:開放同級數大二至大四生修習。",停開註記:"",教室與上課時間:`GEN II綜二104	W7W8
`,授課教師:`王遠洋	WANG, YUAN-YANG
`,擋修說明:"",課程限制說明:"限大學部2年級,頂標生,前標生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120LANG200038",課程中文名稱:"中高級選讀英文-小說選讀",課程英文名稱:"Selected English Novels",學分數:"2",人限:"19",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"1、2選:限同級數大二生，3選:限同級數大三、大四生，加退選:開放同級數大二至大四生修習。",停開註記:"",教室與上課時間:`GEN II綜二201	W7W8
`,授課教師:`徐桂平	HSU, KUI-PING
`,擋修說明:"",課程限制說明:"限大學部2年級,頂標生,前標生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120LANG200041",課程中文名稱:"中高級選讀英文-詞彙與閱讀",課程英文名稱:"Vocabulary and Reading",學分數:"2",人限:"19",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"1、2選:限同級數大二生，3選:限同級數大三、大四生，加退選:開放同級數大二至大四生修習。",停開註記:"",教室與上課時間:`GEN II綜二108	R3R4
`,授課教師:`張華芸	CHANG, HUA-YUN
`,擋修說明:"",課程限制說明:"限大學部2年級,頂標生,前標生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120LANG200042",課程中文名稱:"中高級選讀英文-英文段落寫作",課程英文名稱:"English Paragraph Writing",學分數:"2",人限:"11",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"1、2選:限同級數大二生，3選:限同級數大三、大四生，加退選:開放同級數大二至大四生修習。",停開註記:"",教室與上課時間:`GEN II綜二204	R3R4
`,授課教師:`黃嘉瑜	HUANG, CHIA-YU
`,擋修說明:"",課程限制說明:"限大學部2年級,頂標生,前標生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120LANG200043",課程中文名稱:"中高級選讀英文-職場英語口語表達",課程英文名稱:"Oral Communication for Professional Contexts",學分數:"2",人限:"15",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"1、2選:限同級數大二生，3選:限同級數大三、大四生，加退選:開放同級數大二至大四生修習。",停開註記:"",教室與上課時間:`GEN II綜二104	R3R4
`,授課教師:`彭明玉	PENG, MING-YU
`,擋修說明:"",課程限制說明:"限大學部2年級,頂標生,前標生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120LANG200044",課程中文名稱:"中高級選讀英文-英文篇章寫作",課程英文名稱:"English Essay Writing",學分數:"2",人限:"11",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"1、2選:限同級數大二生，3選:限同級數大三、大四生，加退選:開放同級數大二至大四生修習。",停開註記:"",教室與上課時間:`GEN II綜二103	R3R4
`,授課教師:`蔣光煌	CHIANG,KUANG-HUANG
`,擋修說明:"",課程限制說明:"限大學部2年級,頂標生,前標生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120LANG200045",課程中文名稱:"中高級選讀英文-新聞英文聽力",課程英文名稱:"News English Listening",學分數:"2",人限:"15",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"1、2選:限同級數大二生，3選:限同級數大三、大四生，加退選:開放同級數大二至大四生修習。",停開註記:"",教室與上課時間:`GEN II綜二203	R5R6
`,授課教師:`劉文貞	LIU, WEN-CHEN
`,擋修說明:"",課程限制說明:"限大學部2年級,頂標生,前標生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120LANG200046",課程中文名稱:"中高級選讀英文-詞彙與閱讀",課程英文名稱:"Vocabulary and Reading",學分數:"2",人限:"19",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"1、2選:限同級數大二生，3選:限同級數大三、大四生，加退選:開放同級數大二至大四生修習。",停開註記:"",教室與上課時間:`GEN II綜二108	R5R6
`,授課教師:`張華芸	CHANG, HUA-YUN
`,擋修說明:"",課程限制說明:"限大學部2年級,頂標生,前標生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120LANG200047",課程中文名稱:"中高級選讀英文-新聞英文選讀",課程英文名稱:"Journalistic English",學分數:"2",人限:"19",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"1、2選:限同級數大二生，3選:限同級數大三、大四生，加退選:開放同級數大二至大四生修習。",停開註記:"",教室與上課時間:`GEN II綜二204	R5R6
`,授課教師:`林靜枝	LIN, CHING-CHIH
`,擋修說明:"",課程限制說明:"限大學部2年級,頂標生,前標生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120LANG200048",課程中文名稱:"中高級選讀英文-新聞英文選讀",課程英文名稱:"Journalistic English",學分數:"2",人限:"19",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"1、2選:限同級數大二生，3選:限同級數大三、大四生，加退選:開放同級數大二至大四生修習。",停開註記:"",教室與上課時間:`GEN II綜二204	R7R8
`,授課教師:`林靜枝	LIN, CHING-CHIH
`,擋修說明:"",課程限制說明:"限大學部2年級,頂標生,前標生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120LANG200051",課程中文名稱:"中高級選讀英文-詞彙與閱讀",課程英文名稱:"Vocabulary and Reading",學分數:"2",人限:"19",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"1、2選:限同級數大二生，3選:限同級數大三、大四生，加退選:開放同級數大二至大四生修習。",停開註記:"",教室與上課時間:`GEN II綜二204	F5F6
`,授課教師:`林靜枝	LIN, CHING-CHIH
`,擋修說明:"",課程限制說明:"限大學部2年級,頂標生,前標生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120LANG200052",課程中文名稱:"中高級選讀英文-詞彙與閱讀",課程英文名稱:"Vocabulary and Reading",學分數:"2",人限:"19",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"1、2選:限同級數大二生，3選:限同級數大三、大四生，加退選:開放同級數大二至大四生修習。",停開註記:"",教室與上課時間:`GEN II綜二204	F7F8
`,授課教師:`林靜枝	LIN, CHING-CHIH
`,擋修說明:"",課程限制說明:"限大學部2年級,頂標生,前標生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120LANG200061",課程中文名稱:"中級選讀英文-辦公室口語溝通",課程英文名稱:"Oral Communication in Workplace",學分數:"2",人限:"15",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"1、2選:限同級數大二生，3選:限同級數大三、大四生，加退選:開放同級數大二至大四生修習。",停開註記:"",教室與上課時間:`GEN II綜二105	M5M6
`,授課教師:`林玉書	LIN, YU-SHU
`,擋修說明:"",課程限制說明:"限大學部2年級,中級生,初級生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120LANG200062",課程中文名稱:"中級選讀英文-詞彙與閱讀",課程英文名稱:"Vocabulary and Reading",學分數:"2",人限:"19",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"1、2選:限同級數大二生，3選:限同級數大三、大四生，加退選:開放同級數大二至大四生修習。",停開註記:"",教室與上課時間:`GEN II綜二201	T3T4
`,授課教師:`汪友于	WANG,  YO-YU
`,擋修說明:"",課程限制說明:"限大學部2年級,中級生,初級生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120LANG200063",課程中文名稱:"中級選讀英文-商用短信寫作",課程英文名稱:"Business Letters and Email Messages",學分數:"2",人限:"11",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"1、2選:限同級數大二生，3選:限同級數大三、大四生，加退選:開放同級數大二至大四生修習。",停開註記:"",教室與上課時間:`GEN II綜二204	T7T8
`,授課教師:`黃佩如	HUANG, PEI-JU
`,擋修說明:"",課程限制說明:"限大學部2年級,中級生,初級生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120LANG200064",課程中文名稱:"中級選讀英文-兒童文學選讀",課程英文名稱:"Children’s Literature",學分數:"2",人限:"19",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"1、2選:限同級數大二生，3選:限同級數大三、大四生，加退選:開放同級數大二至大四生修習。",停開註記:"",教室與上課時間:`GEN II綜二202	R3R4
`,授課教師:`林嘉瑜	LIN, CHIA-YU
`,擋修說明:"",課程限制說明:"限大學部2年級,中級生,初級生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120LANG200065",課程中文名稱:"中級選讀英文-生活英語聽講",課程英文名稱:"Daily English Listening and Speaking",學分數:"2",人限:"15",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"1、2選:限同級數大二生，3選:限同級數大三、大四生，加退選:開放同級數大二至大四生修習。",停開註記:"",教室與上課時間:`Nanda南大1409	R5R6
`,授課教師:`蔡佩蓉	KATHERINE TSAI
`,擋修說明:"",課程限制說明:"限大學部2年級,中級生,初級生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120LANG200066",課程中文名稱:"中級選讀英文-辦公室口語溝通",課程英文名稱:"Oral Communication in Workplace",學分數:"2",人限:"15",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"1、2選:限同級數大二生，3選:限同級數大三、大四生，加退選:開放同級數大二至大四生修習。",停開註記:"",教室與上課時間:`Nanda南大9104	R7R8
`,授課教師:`林玉書	LIN, YU-SHU
`,擋修說明:"",課程限制說明:"限大學部2年級,中級生,初級生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120LANG200067",課程中文名稱:"中級選讀英文-兒童文學選讀",課程英文名稱:"Children’s Literature",學分數:"2",人限:"19",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"1、2選:限同級數大二生，3選:限同級數大三、大四生，加退選:開放同級數大二至大四生修習。",停開註記:"",教室與上課時間:`Nanda南大1311	F3F4
`,授課教師:`林嘉瑜	LIN, CHIA-YU
`,擋修說明:"",課程限制說明:"限大學部2年級,中級生,初級生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120LANG200068",課程中文名稱:"中級選讀英文-生活英語聽講",課程英文名稱:"Daily English Listening and Speaking",學分數:"2",人限:"15",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"1、2選:限同級數大二生，3選:限同級數大三、大四生，加退選:開放同級數大二至大四生修習。",停開註記:"",教室與上課時間:`Nanda南大1411	F5F6
`,授課教師:`蔡佩蓉	KATHERINE TSAI
`,擋修說明:"",課程限制說明:"限大學部2年級,中級生,初級生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120LANG500001",課程中文名稱:"學術英文寫作",課程英文名稱:"Academic Research Writing",學分數:"3",人限:"24",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`GEN II綜二202	MnM5M6
`,授課教師:`林天文	LIN, TIEN-WEN
`,擋修說明:"",課程限制說明:"限碩士班博士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120LANG500002",課程中文名稱:"演說與簡報",課程英文名稱:"Public Speaking and Presentation",學分數:"3",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`EDU教  103	MnM5M6
`,授課教師:`陳惠芬	CHEN, HUI-FEN
`,擋修說明:"",課程限制說明:"限碩士班博士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120LANG500003",課程中文名稱:"科技英文寫作",課程英文名稱:"Technical and Scientific English Writing",學分數:"3",人限:"15",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`GEN II綜二203	T3T4Tn
`,授課教師:`黃芸茵	HUANG, YUN-YIN
`,擋修說明:"",課程限制說明:"限碩士班博士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120LANG500004",課程中文名稱:"學術英文寫作",課程英文名稱:"Academic Research Writing",學分數:"3",人限:"15",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`GEN II綜二202	TnT5T6
`,授課教師:`林天文	LIN, TIEN-WEN
`,擋修說明:"",課程限制說明:"限碩士班博士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120LANG500005",課程中文名稱:"學術閱讀與討論",課程英文名稱:"Academic English Reading & Discussion",學分數:"3",人限:"24",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`GEN II綜二201	TnT5T6
`,授課教師:`汪友于	WANG,  YO-YU
`,擋修說明:"",課程限制說明:"限碩士班博士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120LANG500006",課程中文名稱:"科技英文寫作",課程英文名稱:"Technical and Scientific English Writing",學分數:"3",人限:"15",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`GEN II綜二203	T7T8T9
`,授課教師:`黃芸茵	HUANG, YUN-YIN
`,擋修說明:"",課程限制說明:"限碩士班博士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120LANG500007",課程中文名稱:"演說與簡報",課程英文名稱:"Public Speaking and Presentation",學分數:"3",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`GEN II綜二203	W3W4Wn
`,授課教師:`黃芸茵	HUANG, YUN-YIN
`,擋修說明:"",課程限制說明:"限碩士班博士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120LANG500008",課程中文名稱:"科技英文寫作",課程英文名稱:"Technical and Scientific English Writing",學分數:"3",人限:"15",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`GEN II綜二108	W3W4Wn
`,授課教師:`王遠樵	WANG, YUAN-CHIAO
`,擋修說明:"",課程限制說明:"限碩士班博士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120LANG500009",課程中文名稱:"學術英文寫作",課程英文名稱:"Academic Research Writing",學分數:"3",人限:"15",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`GEN II綜二103	WnW5W6
`,授課教師:`陳麒方	CHEN, CHI-FANG
`,擋修說明:"",課程限制說明:"限碩士班博士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120LANG500010",課程中文名稱:"學術閱讀與討論",課程英文名稱:"Academic English Reading & Discussion",學分數:"3",人限:"24",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`GEN II綜二103	W7W8W9
`,授課教師:`陳麒方	CHEN, CHI-FANG
`,擋修說明:"",課程限制說明:"限碩士班博士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120LANG500011",課程中文名稱:"演說與領袖特質",課程英文名稱:"Leadership through Public Speaking",學分數:"3",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`GEN II綜二108	W7W8W9
`,授課教師:`王遠樵	WANG, YUAN-CHIAO
`,擋修說明:"",課程限制說明:"限碩士班博士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120LANG500013",課程中文名稱:"學術閱讀與討論",課程英文名稱:"Academic English Reading & Discussion",學分數:"3",人限:"24",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`GEN II綜二105	RnR5R6
`,授課教師:`汪友于	WANG,  YO-YU
`,擋修說明:"",課程限制說明:"限碩士班博士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120LE  120101",課程中文名稱:"基礎越南語一",課程英文名稱:"Vietnamese BasicⅠ",學分數:"2",人限:"35",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`GEN II綜二104	M5M6
`,授課教師:`段雅芳	DOAN THI NHA PHUONG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120LE  120102",課程中文名稱:"基礎越南語一",課程英文名稱:"Vietnamese BasicⅠ",學分數:"2",人限:"35",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`GEN II綜二104	M7M8
`,授課教師:`段雅芳	DOAN THI NHA PHUONG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120LE  120200",課程中文名稱:"基礎越南語二",課程英文名稱:"Vietnamese Basic II",學分數:"3",人限:"35",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`GEN II綜二201	RnR5R6
`,授課教師:`段雅芳	DOAN THI NHA PHUONG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120LE  130100",課程中文名稱:"基礎泰語一",課程英文名稱:"Thai Basic I",學分數:"3",人限:"60",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`GEN II綜二108	F7F8F9
`,授課教師:`張君松	PHOPARISUT PIPAT
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120LE  130200",課程中文名稱:"基礎泰語二",課程英文名稱:"Thai Basic II",學分數:"3",人限:"60",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`GEN II綜二108	FnF5F6
`,授課教師:`張君松	PHOPARISUT PIPAT
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120LE  140200",課程中文名稱:"基礎印尼語二",課程英文名稱:"Bahasa Indonesia- Basic II",學分數:"3",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`GEN II綜二103	R7R8R9
`,授課教師:`尤溫柔	JULIWATI JOE
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120LE  150100",課程中文名稱:"基礎馬來語一",課程英文名稱:"Malay Basic I",學分數:"3",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`GEN II綜二104	TnT5T6
`,授課教師:`邱彩韻	KU, CHAI-YEUN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120LE  220100",課程中文名稱:"中級越南語一",課程英文名稱:"Vietnamese Intermediate I",學分數:"2",人限:"35",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`GEN II綜二201	R3R4
`,授課教師:`段雅芳	DOAN THI NHA PHUONG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120LE  230200",課程中文名稱:"中級泰語二",課程英文名稱:"Thai Intermediate II",學分數:"3",人限:"35",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`GEN II綜二110	F2F3F4
`,授課教師:`張君松	PHOPARISUT PIPAT
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120LING500200",課程中文名稱:"音韻學二",課程英文名稱:"Phonology(II)",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"本課程為16 週課程",停開註記:"",教室與上課時間:`HSS人社C519	T7T8T9
`,授課教師:`謝豐帆	HSIEH, FENG-FAN
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>音韻學-成績需B-以上<BR>音韻學一-成績需B-以上<BR><br>上述條件任選一科，則不擋修。</div>`,課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"語言所111D  選修	語言所111M  必修	"},{科號:"11120LING500400",課程中文名稱:"句法學二",課程英文名稱:"Syntax(II)",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程週數為16週",停開註記:"",教室與上課時間:`HSS人社C519	W6W7W8
`,授課教師:`蔡維天	TSAI, WEI-TIEN
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>句法學一-成績需B-以上<BR>句法學-成績需B-以上<BR><br>上述條件任選一科，則不擋修。</div>`,課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"語言所111D  選修	語言所111M  必修	"},{科號:"11120LING575100",課程中文名稱:"進階形式語意學",課程英文名稱:"Advanced Formal Semantics",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"本課程週數為16週",停開註記:"",教室與上課時間:`HSS人社C519	F6F7F8
`,授課教師:`謝易達	HSIEH, I-TA
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"語言所111D  選修	語言所111M  選修	"},{科號:"11120LING600200",課程中文名稱:"論文研究",課程英文名稱:"Thesis",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限語言所碩三以上修習",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"排除語言所碩士班1年級2年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"語言所111M  必修	"},{科號:"11120LING700200",課程中文名稱:"論文研究",課程英文名稱:"Thesis",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限語言所博三以上修習",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"排除語言所博士班1年級2年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"語言所111D  必修	"},{科號:"11120LING703300",課程中文名稱:"句法/語意實驗方法與統計",課程英文名稱:"Experimental Methods and Statistics in Syntax/Semantics",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"此課程週數為16週",停開註記:"",教室與上課時間:`HSS人社C519	R6R7R8
`,授課教師:`蘇宜青	SU, YI-CHING
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"語言所111D  選修	語言所111M  選修	"},{科號:"11120LING703400",課程中文名稱:"漢語方言學",課程英文名稱:"Chinese Dialects",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"此課程週數為16週",停開註記:"",教室與上課時間:`HSS人社C519	M3M4Mn
`,授課教師:`許慧娟	HSU, HUI-CHUAN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"語言所111D  選修	語言所111M  選修	"},{科號:"11120LING703500",課程中文名稱:"漢語語音發展史：韻母篇",課程英文名稱:"Phonological development of rhyme in Chinese",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"此課程週數為16週",停開註記:"",教室與上課時間:`HSS人社B305	F6F7F8
`,授課教師:`許慧娟	HSU, HUI-CHUAN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"語言所111D  選修	語言所111M  選修	"},{科號:"11120LING703600",課程中文名稱:"瀕危語言與語言記載",課程英文名稱:"Endangered Languages and Language Documentation",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"此課程週數為16週",停開註記:"",教室與上課時間:`HSS人社C519	W2W3W4
`,授課教師:`廖秀娟	LIAO, HSIU-CHUAN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)世界南島暨原住民族學分學程",不可加簽說明:"",必選修說明:"語言所111D  選修	語言所111M  選修	"},{科號:"11120LING703700",課程中文名稱:"非典疑問句的比較語法研究",課程英文名稱:"Comparative Syntax of Non-canonical Wh-constructions",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"此課程週數為16週",停開註記:"",教室與上課時間:`HSS人社B305	R6R7R8
`,授課教師:`蔡維天	TSAI, WEI-TIEN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"語言所111D  選修	語言所111M  選修	"},{科號:"11120LING703800",課程中文名稱:"標籤理論與主語問題",課程英文名稱:"Labeling Theory and Questions of Subject",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`HSS人社C519	T2T3T4
`,授課教師:`林宗宏	LIN, TZONG-HONG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"語言所111D  選修	語言所111M  選修	"},{科號:"11120LING703900",課程中文名稱:"西拉雅語法相關問題：分析與重建",課程英文名稱:"Questions in Siraya Grammar: Analysis and Reconstruction",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`HSS人社B305	W2W3W4
`,授課教師:`林宗宏	LIN, TZONG-HONG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"語言所111D  選修	語言所111M  選修	"},{科號:"11120LING704000",課程中文名稱:"構音音韻學",課程英文名稱:"Articulatory Phonology",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"此課程週數為16週",停開註記:"",教室與上課時間:`HSS人社B305	T3T4Tn
`,授課教師:`謝豐帆	HSIEH, FENG-FAN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"語言所111D  選修	語言所111M  選修	"},{科號:"11120LS  110301",課程中文名稱:"生命科學導論",課程英文名稱:"Introduction to Life Science",學分數:"3",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`LS II生二 107	W7W8W9
`,授課教師:`林亦凡	LIN, YI-FAN
高茂傑	KAO, MOU-CHIEH
郭立園	KUO, LI-YAUNG
`,擋修說明:"",課程限制說明:"排除生科院",第一二專長對應:"",學分學程對應:"(跨領域)生物科技管理學分學程",不可加簽說明:"",必選修說明:""},{科號:"11120LS  110302",課程中文名稱:"生命科學導論",課程英文名稱:"Introduction to Life Science",學分數:"3",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`LS II生二 109	R7R8R9
`,授課教師:`張慧雲	CHANG, HUI-YUN
桑自剛	SANG, TZU-KANG
陳韋靜	CHEN, WEI-CHING
`,擋修說明:"",課程限制說明:"排除生科院",第一二專長對應:"",學分學程對應:"(跨領域)生物科技管理學分學程",不可加簽說明:"",必選修說明:""},{科號:"11120LS  180200",課程中文名稱:"基礎生命科學實驗",課程英文名稱:"Basic Life Science Laboratory",學分數:"2",人限:"55",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`LS II生二103	T5T6T7T8
`,授課教師:`林玉俊	LIN, YU-CHUN
彭明德	PERNG, MING-DER
`,擋修說明:"",課程限制說明:"生科系大學部優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"生科系111B  必修	"},{科號:"11120LS  192200",課程中文名稱:"生科研究導讀二",課程英文名稱:"Life Science Research Introduction II",學分數:"1",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`LS II生二 109	R6
`,授課教師:`汪宏達	WANG, HORNG-DAR
李以如	LEE, I-JU
`,擋修說明:"",課程限制說明:"限醫科系,生科系,生科院學士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"生科系111B  選修	"},{科號:"11120LS  214600",課程中文名稱:"未來地球生態學二",課程英文名稱:"Future Earth Ecology II",學分數:"3",人限:"0",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"請有上課的同學開學後找授課教師加簽選課",停開註記:"",教室與上課時間:`LS II生二 107	S2S3S4
`,授課教師:`黃貞祥	NG, CHEN SIANG
顏士清	YEN, SHIH-CHING
郭立園	KUO, LI-YAUNG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"生科系110B  選修	"},{科號:"11120LS  220400",課程中文名稱:"分子與細胞生物學一",課程英文名稱:"Molecular and Cellular Biology I",學分數:"3",人限:"85",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"Only Dr. Wagner's course will be offered in English",停開註記:"",教室與上課時間:`LS II生二 105	T3T4R4
`,授課教師:`王歐力	Wang Ou-Li
林郁婷	LIN, YU-TING
傅化文	FU, HUA-WEN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"生命科學(第二專長)	生命科學(第一專長)",學分學程對應:"(跨領域)生物產業技術學分學程/(跨領域)生物資訊學分學程/(跨領域)微系統科技整合學分學程/(跨領域)神經科學學分學程",不可加簽說明:"",必選修說明:"生科系110B  必修	"},{科號:"11120LS  262200",課程中文名稱:"生物統計學",課程英文名稱:"Biostatistics",學分數:"3",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"彈性學期週數16週",停開註記:"",教室與上課時間:`LS II生二220	T6R7R8
`,授課教師:`張筱涵	CHANG, HSIAO-HAN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"生命科學(第一專長)",學分學程對應:"(跨領域)生物資訊學分學程/(跨領域)數據科學學分學程/(跨領域)神經科學學分學程",不可加簽說明:"",必選修說明:"生科系110B  選修	"},{科號:"11120LS  282100",課程中文名稱:"細胞生物學實驗",課程英文名稱:"Cell Biology Laboratory",學分數:"2",人限:"18",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`LS II生二 325	W6W7W8W9
`,授課教師:`陳令儀	CHEN, LINYI
林玉俊	LIN, YU-CHUN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"生命科學(第二專長)	生命科學(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"生科系110B  選修	"},{科號:"11120LS  311100",課程中文名稱:"遺傳學",課程英文名稱:"Genetics",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"彈性學期週數16週",停開註記:"",教室與上課時間:`LS II生二 105	M3M4W2
`,授課教師:`張筱涵	CHANG, HSIAO-HAN
李政昇	LEE, CHENG-SHENG
廖品超	LIAO, PIN-CHAO
`,擋修說明:"",課程限制說明:"大學部3年級4年級優先，第3次選課起開放全校修習",第一二專長對應:"生命科學(第二專長)	生命科學(第一專長)",學分學程對應:"(跨領域)生物資訊學分學程",不可加簽說明:"",必選修說明:"生科系109B  必修	"},{科號:"11120LS  312200",課程中文名稱:"微生物學",課程英文名稱:"Microbiology",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`LS II生二 107	M5M6R5
`,授課教師:`殷&#29486;生	YIN, HSIEN-SHENG
藍忠昱	LAN, CHUNG-YU
高茂傑	KAO, MOU-CHIEH
`,擋修說明:"",課程限制說明:"",第一二專長對應:"生命科學(第二專長)	生命科學(第一專長)",學分學程對應:"(跨領域)生物產業技術學分學程",不可加簽說明:"",必選修說明:"生科系109B  選修	"},{科號:"11120LS  314600",課程中文名稱:"動物行為學",課程英文名稱:"Animal Behavior",學分數:"2",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"彈性學期週數17週",停開註記:"",教室與上課時間:`LS II生二 109	RnR5
`,授課教師:`郭崇涵	KUO, TSUNG-HAN
`,擋修說明:"",課程限制說明:"限大學部2年級以上",第一二專長對應:"",學分學程對應:"(跨領域)神經科學學分學程",不可加簽說明:"",必選修說明:"生科系109B  選修	"},{科號:"11120LS  321000",課程中文名稱:"宇宙與生命",課程英文名稱:"Universe and Life",學分數:"2",人限:"60",新生保留人數:"0",通識對象:"*3",通識類別:"自然科學領域 Elective GE course: Natural Sciences",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`LS II生二 113	W7W8
`,授課教師:`吳文桂	WU, WEN-GUEY
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"生科系109B  選修	"},{科號:"11120LS  340200",課程中文名稱:"分子與細胞生物學三",課程英文名稱:"Molecular and Cellular Biology III",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`LS II生二 109	T5F5F6
`,授課教師:`周裕珽	CHOU, YU-TING
王翊青	WANG, I-CHING
張壯榮	CHANG, CHUANG-RUNG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"生命科學(第二專長)	生命科學(第一專長)",學分學程對應:"(跨領域)生物產業技術學分學程/(跨領域)生物資訊學分學程",不可加簽說明:"",必選修說明:"生科系109B  必修	"},{科號:"11120LS  344300",課程中文名稱:"神經退化分子遺傳機制",課程英文名稱:"Molecular Genetics of Neurodegeneration",學分數:"2",人限:"10",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`LS II生二 213	T7T8
`,授課教師:`張慧雲	CHANG, HUI-YUN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"生科系109B  選修	"},{科號:"11120LS  374300",課程中文名稱:"行為神經科學",課程英文名稱:"Behavioral Neuroscience",學分數:"2",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"建議先修習「神經生物學」",停開註記:"",教室與上課時間:`LS II生二206	F3F4
`,授課教師:`張鈞惠	CHANG, CHUN-HUI
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)神經科學學分學程",不可加簽說明:"",必選修說明:"生科系109B  選修	"},{科號:"11120LS  383100",課程中文名稱:"專題實驗",課程英文名稱:"Undergraduate laboratory experiments",學分數:"1",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"指導教授限生科院專任教師或經系主任核可",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"生科系109B  選修	"},{科號:"11120LS  384200",課程中文名稱:"微生物學實驗",課程英文名稱:"Microbiology Laboratory",學分數:"2",人限:"24",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`LS II生二 321	R6R7R8R9
`,授課教師:`殷&#29486;生	YIN, HSIEN-SHENG
藍忠昱	LAN, CHUNG-YU
高茂傑	KAO, MOU-CHIEH
`,擋修說明:"",課程限制說明:"生科系優先，第3次選課起開放全校修習",第一二專長對應:"生命科學(第二專長)	生命科學(第一專長)",學分學程對應:"(跨領域)生物產業技術學分學程",不可加簽說明:"",必選修說明:"生科系109B  選修	"},{科號:"11120LS  390201",課程中文名稱:"書報討論",課程英文名稱:"Seminar",學分數:"1",人限:"12",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`LS II生二 107	R2
`,授課教師:`王雯靜	WANG, WEN-CHING
`,擋修說明:"",課程限制說明:"限生科系大學部3年級4年級",第一二專長對應:"生命科學(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"生科系109B  必修	"},{科號:"11120LS  390202",課程中文名稱:"書報討論",課程英文名稱:"Seminar",學分數:"1",人限:"12",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`LS II生二217	R2
`,授課教師:`李以如	LEE, I-JU
`,擋修說明:"",課程限制說明:"限生科系大學部3年級4年級",第一二專長對應:"生命科學(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"生科系109B  必修	"},{科號:"11120LS  390203",課程中文名稱:"書報討論",課程英文名稱:"Seminar",學分數:"1",人限:"12",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`LS II生二 213	R2
`,授課教師:`廖品超	LIAO, PIN-CHAO
`,擋修說明:"",課程限制說明:"限生科系大學部3年級4年級",第一二專長對應:"生命科學(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"生科系109B  必修	"},{科號:"11120LS  390204",課程中文名稱:"書報討論",課程英文名稱:"Seminar",學分數:"1",人限:"12",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`LS II生二206	R2
`,授課教師:`謝琬甄	HSIEH, WAN-CHEN
`,擋修說明:"",課程限制說明:"限生科系大學部3年級4年級",第一二專長對應:"生命科學(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"生科系109B  必修	"},{科號:"11120LS  390205",課程中文名稱:"書報討論",課程英文名稱:"Seminar",學分數:"1",人限:"12",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`LS II生二218	R2
`,授課教師:`陳韋靜	CHEN, WEI-CHING
`,擋修說明:"",課程限制說明:"限生科系大學部3年級4年級",第一二專長對應:"生命科學(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"生科系109B  必修	"},{科號:"11120LS  405000",課程中文名稱:"學士論文",課程英文名稱:"Bachelor Thesis",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"指導教授限生科院專任教師",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"限大學部",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"生科系108B  選修	"},{科號:"11120LS  414300",課程中文名稱:"生態學",課程英文名稱:"Ecology",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`LS II生二 105	R6R7R8
`,授課教師:`曾晴賢	TSENG, CHING-HSIEN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)能源科技與永續社會學分學程",不可加簽說明:"",必選修說明:"生科系108B  選修	"},{科號:"11120LS  414900",課程中文名稱:"生態工法概論",課程英文名稱:"Introduction of Eco-technology",學分數:"2",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限修過生態學或同時選修生態學",停開註記:"",教室與上課時間:`LS II生二 105	F7F8
`,授課教師:`曾晴賢	TSENG, CHING-HSIEN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"生科系108B  選修	"},{科號:"11120LS  424200",課程中文名稱:"生物發育學",課程英文名稱:"Developmental Biology",學分數:"2",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`LS II生二 117	W5W6
`,授課教師:`徐瑞洲	HSU, JUI-CHOU
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"生科系108B  選修	"},{科號:"11120LSBI700200",課程中文名稱:"論文研究",課程英文名稱:"Thesis",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限博二以上修習",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"排除生技博士學程博士班1年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"生技博士學程111D  必修	"},{科號:"11120LSBS514500",課程中文名稱:"動物病毒文獻探討特論",課程英文名稱:"Special Topics in Animal Virology Seminars",學分數:"2",人限:"0",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"需與授課教師討論後加簽選課Requiring application in order to enroll in the course.",停開註記:"",教室與上課時間:`LS II生二 213	MaMb
`,授課教師:`殷&#29486;生	YIN, HSIEN-SHENG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"生資所111D  選修	生資所111M  選修	"},{科號:"11120LSBS514800",課程中文名稱:"傳染疾病模型特論二",課程英文名稱:"Special Topics in Infectious Disease Modeling II",學分數:"2",人限:"0",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"需與授課教師討論後加簽選課Requiring application in order to enroll in the course.",停開註記:"",教室與上課時間:`LS I生一421A	MaMb
`,授課教師:`張筱涵	CHANG, HSIAO-HAN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"生資所111D  選修	生資所111M  選修	"},{科號:"11120LSBS525200",課程中文名稱:"創傷癒合與癌症療法特論二",課程英文名稱:"Special Topics in Wound Healing and Cancer Therapy II",學分數:"2",人限:"0",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"需與授課教師討論後加簽選課",停開註記:"",教室與上課時間:`LS II生二217	MaMb
`,授課教師:`莊永仁	CHUANG, YUNG-JEN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"生資所111D  選修	生資所111M  選修	"},{科號:"11120LSBS544200",課程中文名稱:"植物分子生物技術特論",課程英文名稱:"Special Topics on Plant Molecular Biotechnology",學分數:"2",人限:"0",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"需與授課教師討論後加簽選課Requiring application in order to enroll in the course.",停開註記:"",教室與上課時間:`LS II生二 526	F5F6
`,授課教師:`劉姿吟	LIU, TZU-YIN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"生資所111D  選修	生資所111M  選修	"},{科號:"11120LSBS554400",課程中文名稱:"現代生物物理方法和應用",課程英文名稱:"Modern Biophysical Methods and Applications",學分數:"2",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`LS II生二218	R7R8
`,授課教師:`鄭惠春	CHENG, HUI-CHUN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"生資所111D  選修	生資所111M  選修	"},{科號:"11120LSBS564200",課程中文名稱:"疾病結構生物資訊學",課程英文名稱:"Structural Biology, Bioinformatics and Drug Target of Infectious and Noncommunicable Diseases",學分數:"2",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`LS II生二206	R6R7
`,授課教師:`吳文桂	WU, WEN-GUEY
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"生資所111D  選修	生資所111M  選修	"},{科號:"11120LSBS565000",課程中文名稱:"生物資料庫",課程英文名稱:"Biological Database",學分數:"3",人限:"25",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`LS II生二220	W7W8W9
`,授課教師:`呂平江	LYU, PING-CHIANG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)生物資訊學分學程",不可加簽說明:"",必選修說明:"生資所111D  選修	生資所111M  選修	"},{科號:"11120LSBS565100",課程中文名稱:"電腦生物學",課程英文名稱:"Computational Biology",學分數:"3",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`LS II生二220	F2F3F4
`,授課教師:`楊立威	YANG, LEE-WEI
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)生物資訊學分學程",不可加簽說明:"",必選修說明:"生資所111D  選修	生資所111M  選修	"},{科號:"11120LSBS565700",課程中文名稱:"中心體結構功能與調控特論",課程英文名稱:"Special Topics in Structure, Function, and Regulation of the Centrosome",學分數:"2",人限:"0",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"需與授課教師討論後加簽選課",停開註記:"",教室與上課時間:`LS II生二206	M9Ma
`,授課教師:`鄭惠春	CHENG, HUI-CHUN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"生資所111D  選修	生資所111M  選修	"},{科號:"11120LSBS566000",課程中文名稱:"二維電泳與生物質譜分析特論二",課程英文名稱:"Special Topics in 2D-gel Electrophoresis and Biological Mass Spectrometry II",學分數:"1",人限:"0",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"需與授課教師討論後加簽選課",停開註記:"",教室與上課時間:`LS II生二 213	F3
`,授課教師:`詹鴻霖	CHAN, HONG-LIN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"生資所111D  選修	生資所111M  選修	"},{科號:"11120LSBS566600",課程中文名稱:"從基因調控網路、系統生物學到系統醫學",課程英文名稱:"From Gene Regulatory Networks, Systems Biology to Systems Medicine",學分數:"2",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`LS II生二 113	F7F8
`,授課教師:`喻秋華	 YUH CHIOU HWA
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"生資所111D  選修	生資所111M  選修	"},{科號:"11120LSBS567200",課程中文名稱:"RNA生物學與療法",課程英文名稱:"RNA Biology and Therapeutics",學分數:"2",人限:"15",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`LS II生二206	T3T4
`,授課教師:`林珮君	LIN. PEI-CHUN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"生資所111D  選修	生資所111M  選修	"},{科號:"11120LSBS567600",課程中文名稱:"結構生物資訊學特論二",課程英文名稱:"Special Topic on Structural Bioinformatics II",學分數:"2",人限:"0",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"需與授課教師討論後加簽選課.教學方式以講解,討論,評論,學生演講為主.每週深入探討,解析學術論文與實驗數據",停開註記:"",教室與上課時間:`LS II生二 105	FnF5
`,授課教師:`呂平江	LYU, PING-CHIANG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"生資所111D  選修	生資所111M  選修	"},{科號:"11120LSBS567800",課程中文名稱:"單分子冷凍電子顯微鏡結構學特論二",課程英文名稱:"Special Topic on Single Particle Cryo-electron Microscopy Analysis II",學分數:"2",人限:"0",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"需與授課教師討論後加簽選課Requiring application in order to enroll in the course.",停開註記:"",教室與上課時間:`LS II生二206	RaRb
`,授課教師:`林珮君	LIN. PEI-CHUN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"生資所111D  選修	生資所111M  選修	"},{科號:"11120LSBS573200",課程中文名稱:"疫苗醫療創新領域",課程英文名稱:"Frontiers in Vaccinology",學分數:"2",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`LS II生二 109	W7W8
`,授課教師:`謝琬甄	HSIEH, WAN-CHEN
殷&#29486;生	YIN, HSIEN-SHENG
徐子勝	HSU, TZU-SHENG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"生資所111D  選修	生資所111M  選修	"},{科號:"11120LSBS590201",課程中文名稱:"書報討論",課程英文名稱:"Seminar",學分數:"1",人限:"13",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"大四(含)以上請與授課教師討論後加簽選課",停開註記:"",教室與上課時間:`LS II生二206	W5
`,授課教師:`鄭惠春	CHENG, HUI-CHUN
`,擋修說明:"",課程限制說明:"限生科院,碩士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"生資所111M  必修	"},{科號:"11120LSBS590202",課程中文名稱:"書報討論",課程英文名稱:"Seminar",學分數:"1",人限:"13",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"大四(含)以上請與授課教師討論後加簽選課",停開註記:"",教室與上課時間:`LS II生二 107	W5
`,授課教師:`劉姿吟	LIU, TZU-YIN
`,擋修說明:"",課程限制說明:"限生科院,碩士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"生資所111M  必修	"},{科號:"11120LSBS590400",課程中文名稱:"專題討論",課程英文名稱:"Colloquium",學分數:"1",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"大四(含)以上請與授課教師討論後加簽選課",停開註記:"",教室與上課時間:`LS II生二 107	R3R4
`,授課教師:`林珮君	LIN. PEI-CHUN
`,擋修說明:"",課程限制說明:"限生科院,碩士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"生資所111M  必修	"},{科號:"11120LSBS600200",課程中文名稱:"論文研究",課程英文名稱:"Thesis",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限碩二以上修習",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"排除碩士班1年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"生資所111M  必修	"},{科號:"11120LSBS632100",課程中文名稱:"高等生物化學",課程英文名稱:"Advanced Biochemistry",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`LS II生二 107	T6T7T8
`,授課教師:`劉懿璇	LIU, YI-SHIUAN
鄭惠春	CHENG, HUI-CHUN
詹鴻霖	CHAN, HONG-LIN
陳韋靜	CHEN, WEI-CHING
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"生資所111D  選修	生資所111M  選修	"},{科號:"11120LSBS700200",課程中文名稱:"論文研究",課程英文名稱:"Thesis",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限博二以上修習",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"排除博士班1年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"生資所111D  必修	"},{科號:"11120LSBS790201",課程中文名稱:"書報討論",課程英文名稱:"Seminar",學分數:"1",人限:"10",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`LS II生二 113	F5
`,授課教師:`林珮君	LIN. PEI-CHUN
`,擋修說明:"",課程限制說明:"限生科院,博士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"生資所111D  必修	"},{科號:"11120LSBS790400",課程中文名稱:"專題討論",課程英文名稱:"Colloquium",學分數:"1",人限:"10",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`LS II生二206	R3R4
`,授課教師:`張筱涵	CHANG, HSIAO-HAN
`,擋修說明:"",課程限制說明:"限生科院,博士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"生資所111D  必修	"},{科號:"11120LSBT505400",課程中文名稱:"跨領域學術英文寫作分析",課程英文名稱:"Interdisciplinary Academic English Writing Analysis",學分數:"1",人限:"15",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"化工系選修可列入畢業學分",停開註記:"",教室與上課時間:`LS II生二206	M7
`,授課教師:`湯學成	TANG, SHIUE-CHENG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"化工系111M  選修	生技所111D  選修	生技所111M  選修	"},{科號:"11120LSBT516300",課程中文名稱:"生技產業",課程英文名稱:"Bioindustry",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"歡迎大三四同學選修",停開註記:"",教室與上課時間:`LS II生二 105	M6M7M8
`,授課教師:`程家維	CHENG, JYA-WEI
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)生物產業技術學分學程/(跨領域)生物科技管理學分學程",不可加簽說明:"",必選修說明:"生技所111D  選修	生技所111M  選修	"},{科號:"11120LSBT544200",課程中文名稱:"果蠅之老化與壓力研究",課程英文名稱:"Aging and Stress Studies in Drosophila Melanogaster",學分數:"2",人限:"0",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"需與授課教師討論後加簽選課Requiring application in order to enroll in the course.",停開註記:"",教室與上課時間:`LS I生一405A	T1T2
`,授課教師:`汪宏達	WANG, HORNG-DAR
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"生技所111D  選修	生技所111M  選修	"},{科號:"11120LSBT545600",課程中文名稱:"離子通道與疾病特論",課程英文名稱:"Special Topics in Ion Channels and Diseases",學分數:"2",人限:"0",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"需與授課教師討論後加簽選課",停開註記:"",教室與上課時間:`LS I生一405A	F5F6
`,授課教師:`邱于芯	CHIU, YU-HSIN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"生技所111D  選修	生技所111M  選修	"},{科號:"11120LSBT564100",課程中文名稱:"生物核磁共振導論",課程英文名稱:"Introduction to Biological NMR",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`LS II生二 113	T6T7T8
`,授課教師:`程家維	CHENG, JYA-WEI
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"生技所111D  選修	生技所111M  選修	"},{科號:"11120LSBT573200",課程中文名稱:"肺臟上皮發育與疾病特論二",課程英文名稱:"Special Topics in Lung Epithelium Development and Diseases II",學分數:"2",人限:"0",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"需與授課教師討論後加簽選課Requiring application in order to enroll in the course.",停開註記:"",教室與上課時間:`LS II生二207	M3M4
`,授課教師:`王翊青	WANG, I-CHING
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"生技所111D  選修	生技所111M  選修	"},{科號:"11120LSBT574800",課程中文名稱:"果蠅動物模式在人類疾病之研究",課程英文名稱:"Modeling Human Diseases in Drosophila",學分數:"2",人限:"0",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"需與授課教師討論後加簽選課Requiring application in order to enroll in the course.",停開註記:"",教室與上課時間:`LS II生二206	T5T6
`,授課教師:`桑自剛	SANG, TZU-KANG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"生技所111D  選修	生技所111M  選修	"},{科號:"11120LSBT575600",課程中文名稱:"轉譯癌症研究特論",課程英文名稱:"Special Topics in Translational Cancer Research",學分數:"2",人限:"0",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"需與授課教師討論後加簽選課Requiring application in order to enroll in the course.",停開註記:"",教室與上課時間:`LS II生二 213	T9Ta
`,授課教師:`周裕珽	CHOU, YU-TING
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"生技所111D  選修	生技所111M  選修	"},{科號:"11120LSBT576000",課程中文名稱:"多體學分析於精準醫學應用概論",課程英文名稱:"Introduction of Multi-omics Analysis in Precision Medicine",學分數:"1",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`LS II生二 105	W7
`,授課教師:`周裕珽	CHOU, YU-TING
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"生技所111D  選修	生技所111M  選修	"},{科號:"11120LSBT576200",課程中文名稱:"疫苗與免疫科學",課程英文名稱:"Vaccines and Immunization Science",學分數:"2",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`LS II生二 113	TaTb
`,授課教師:`吳夙欽	WU, SUH-CHIN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"生技所111D  選修	生技所111M  選修	"},{科號:"11120LSBT576600",課程中文名稱:"遠端轉移的分子機制特論二",課程英文名稱:"Special Topics in Molecular Mechanisms Underlying Distant Metastasis II",學分數:"2",人限:"0",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"需與授課教師討論後加簽選課",停開註記:"",教室與上課時間:`LS II生二 626	M5M6
`,授課教師:`林愷悌	LIN, KAI-TI
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"生技所111D  選修	生技所111M  選修	"},{科號:"11120LSBT577000",課程中文名稱:"粒線體動態調控與疾病特論",課程英文名稱:"Special Topics on Mitochondria Dynamics and Pathogenesis",學分數:"2",人限:"0",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"需與授課教師討論後加簽選課Requiring application in order to enroll in the course.",停開註記:"",教室與上課時間:`LS II生二206	M3M4
`,授課教師:`張壯榮	CHANG, CHUANG-RUNG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"生技所111D  選修	生技所111M  選修	"},{科號:"11120LSBT584500",課程中文名稱:"共軛焦顯微鏡實驗",課程英文名稱:"Confocal Microscopy Laboratory",學分數:"1",人限:"0",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"需與授課教師討論後加簽選課",停開註記:"",教室與上課時間:`LS II生二 526	MnTn
`,授課教師:`湯學成	TANG, SHIUE-CHENG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"生技所111D  選修	生技所111M  選修	"},{科號:"11120LSBT590201",課程中文名稱:"書報討論",課程英文名稱:"Seminar",學分數:"1",人限:"13",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"大四(含)以上請與授課教師討論後加簽選課",停開註記:"",教室與上課時間:`LS II生二 113	W5
`,授課教師:`桑自剛	SANG, TZU-KANG
`,擋修說明:"",課程限制說明:"限生科院,碩士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"生技所111M  必修	"},{科號:"11120LSBT590202",課程中文名稱:"書報討論",課程英文名稱:"Seminar",學分數:"1",人限:"13",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"大四(含)以上請與授課教師討論後加簽選課",停開註記:"",教室與上課時間:`LS II生二 109	W5
`,授課教師:`張壯榮	CHANG, CHUANG-RUNG
`,擋修說明:"",課程限制說明:"限生科院,碩士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"生技所111M  必修	"},{科號:"11120LSBT590400",課程中文名稱:"專題討論",課程英文名稱:"Colloquium",學分數:"1",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"大四(含)以上請與授課教師討論後加簽選課",停開註記:"",教室與上課時間:`LS II生二 113	R3R4
`,授課教師:`林亦凡	LIN, YI-FAN
`,擋修說明:"",課程限制說明:"限生科院,碩士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"生技所111M  必修	"},{科號:"11120LSBT600200",課程中文名稱:"論文研究",課程英文名稱:"Thesis",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限碩二以上修習",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"排除碩士班1年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"生技所111M  必修	"},{科號:"11120LSBT700200",課程中文名稱:"論文研究",課程英文名稱:"Thesis",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限博二以上修習",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"排除博士班1年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"生技所111D  必修	"},{科號:"11120LSBT790201",課程中文名稱:"書報討論",課程英文名稱:"Seminar",學分數:"1",人限:"10",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`LS II生二217	F5
`,授課教師:`周裕珽	CHOU, YU-TING
`,擋修說明:"",課程限制說明:"限生科院,博士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"生技所111D  必修	"},{科號:"11120LSBT790202",課程中文名稱:"書報討論",課程英文名稱:"Seminar",學分數:"1",人限:"10",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`LS II生二218	F5
`,授課教師:`林亦凡	LIN, YI-FAN
`,擋修說明:"",課程限制說明:"限生科院,博士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"生技所111D  必修	"},{科號:"11120LSBT790400",課程中文名稱:"專題討論",課程英文名稱:"Colloquium",學分數:"1",人限:"10",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`LS II生二207	R3R4
`,授課教師:`邱于芯	CHIU, YU-HSIN
`,擋修說明:"",課程限制說明:"限生科院,博士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"生技所111D  必修	"},{科號:"11120LSC 110200",課程中文名稱:"生命科學二",課程英文名稱:"Life Science II",學分數:"3",人限:"300",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"彈性學期週數16週 (含實中科學班)",停開註記:"",教室與上課時間:`LS II生二講堂	R7R8R9
`,授課教師:`黃貞祥	NG, CHEN SIANG
焦傳金	CHIAO, CHUAN-CHIN
彭明德	PERNG, MING-DER
劉姿吟	LIU, TZU-YIN
`,擋修說明:"",課程限制說明:"生科院,大學部優先，第3次選課起開放全校修習",第一二專長對應:"醫學科學(第一專長)	生命科學(第一專長)",學分學程對應:"(跨領域)生物科技管理學分學程",不可加簽說明:"",必選修說明:"醫科系111B  必修	生科系111B  必修	生科院學士班111B  必修	"},{科號:"11120LSC 230200",課程中文名稱:"生物化學二",課程英文名稱:"Biochemistry II",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`LS II生二講堂	T1T2F2
`,授課教師:`詹鴻霖	CHAN, HONG-LIN
蘇士哲	SU, SHIH-CHE
劉姿吟	LIU, TZU-YIN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"醫學科學(第二專長)	醫學科學(第一專長)	生命科學(第二專長)	生命科學(第一專長)",學分學程對應:"(跨領域)生物產業技術學分學程",不可加簽說明:"",必選修說明:"醫科系110B  必修	生科系110B  必修	生科院學士班110B  必修	"},{科號:"11120LSC 404000",課程中文名稱:"進階專題研究",課程英文名稱:"Advanced Undergraduate Research",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"指導教授限生科院專任教師",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"醫科系108B  選修	醫科系109B  選修	生科系108B  選修	生科系109B  選修	生科院學士班108B  選修	生科院學士班109B  選修	"},{科號:"11120LSMC515400",課程中文名稱:"演化遺傳學特論",課程英文名稱:"Special Topics on Evolutionary Genetics",學分數:"2",人限:"0",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"需與授課教師討論後加簽選課Requiring application in order to enroll in the course.",停開註記:"",教室與上課時間:`LS II生二217	RaRb
`,授課教師:`黃貞祥	NG, CHEN SIANG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"分生所111D  選修	分生所111M  選修	"},{科號:"11120LSMC515500",課程中文名稱:"利用線蟲模型研究神經系統疾病特論一",課程英文名稱:"Special Topics on C. Elegans as a Model to Study Neurological Disorders I",學分數:"2",人限:"0",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"需與授課教師討論後加簽選課Requiring application in order to enroll in the course.",停開註記:"",教室與上課時間:`LS I生一521A	F7F8
`,授課教師:`王歐力	Wang Ou-Li
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"分生所111D  選修	分生所111M  選修	"},{科號:"11120LSMC515700",課程中文名稱:"蕨類植物生物學特論一",課程英文名稱:"Special Topics on Pteridophyte Biology I",學分數:"2",人限:"0",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"需與授課教師討論後加簽選課Requiring application in order to enroll in the course.",停開註記:"",教室與上課時間:`LS II生二 213	R9Ra
`,授課教師:`郭立園	KUO, LI-YAUNG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"分生所111D  選修	分生所111M  選修	"},{科號:"11120LSMC524300",課程中文名稱:"有絲分裂特論",課程英文名稱:"Special Topics on Mitosis",學分數:"2",人限:"0",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"需與授課教師討論後加簽選課Requiring application in order to enroll in the course.",停開註記:"",教室與上課時間:`LS II生二207	MaMb
`,授課教師:`王慧菁	WANG, HUI-CHING
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"分生所111D  選修	分生所111M  選修	"},{科號:"11120LSMC525600",課程中文名稱:"全球生醫跨領域思維",課程英文名稱:"Interdisciplinary Thinking for Global Biomedical Industry",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`LS II生二 109	T6T7T8
`,授課教師:`藍忠昱	LAN, CHUNG-YU
蘇士哲	SU, SHIH-CHE
張大慈	CHANG, MARGARET DAH-TSYR
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"分生所111D  選修	分生所111M  選修	"},{科號:"11120LSMC525800",課程中文名稱:"感染與自體免疫疾病特論二",課程英文名稱:"Special Topics in Infectious and Autoimmune Disease II",學分數:"2",人限:"0",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"需與授課教師討論後加簽選課",停開註記:"",教室與上課時間:`LS II生二 626	T9Ta
`,授課教師:`謝琬甄	HSIEH, WAN-CHEN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"分生所111D  選修	分生所111M  選修	"},{科號:"11120LSMC526300",課程中文名稱:"癌症與癌幹細胞學",課程英文名稱:"Cancer and Cancer Stem Cell",學分數:"2",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`LS II生二 109	T3T4
`,授課教師:`李佳霖	LEE, JIA-LIN
`,擋修說明:"",課程限制說明:"排除大學部1年級2年級3年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"分生所111D  選修	分生所111M  選修	"},{科號:"11120LSMC546500",課程中文名稱:"CRISPR-Cas之基因編輯特論一",課程英文名稱:"Special Topics in Gene Editing by CRISPR-Cas I",學分數:"2",人限:"0",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"需與授課教師討論後加簽選課",停開註記:"",教室與上課時間:`LS I生一421A	MnM5
`,授課教師:`李政昇	LEE, CHENG-SHENG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"分生所111D  選修	分生所111M  選修	"},{科號:"11120LSMC546800",課程中文名稱:"P53調控細胞自噬與細胞移動特論二",課程英文名稱:"Special Topics in p53-regulated Autophagy and Cell Migration II",學分數:"2",人限:"0",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"需與授課教師討論後加簽選課Requiring application in order to enroll in the course.&#160;",停開註記:"",教室與上課時間:`LS II生二 626	F7F8
`,授課教師:`林立元	LIN, LIH-YUAN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"分生所111D  選修	分生所111M  選修	"},{科號:"11120LSMC547200",課程中文名稱:"醫用寄生蟲學",課程英文名稱:"Medical Parasitology",學分數:"2",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`LS II生二 105	T5T6
`,授課教師:`黃建銘	HUANG, JIAN-MING
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"分生所111D  選修	分生所111M  選修	"},{科號:"11120LSMC574200",課程中文名稱:"免疫學和疾病發病機制",課程英文名稱:"Immunology and Disease Pathogenesis",學分數:"2",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`LS II生二 107	F3F4
`,授課教師:`謝琬甄	HSIEH, WAN-CHEN
徐子勝	HSU, TZU-SHENG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"分生所111D  選修	分生所111M  選修	"},{科號:"11120LSMC576400",課程中文名稱:"酵母致病菌特論二",課程英文名稱:"Special Topics in the Yeast Pathogens II",學分數:"2",人限:"0",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"需與授課教師討論後加簽選課Requiring application in order to enroll in the course.",停開註記:"",教室與上課時間:`LS II生二206	F7F8
`,授課教師:`藍忠昱	LAN, CHUNG-YU
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"分生所111D  選修	分生所111M  選修	"},{科號:"11120LSMC590201",課程中文名稱:"書報討論",課程英文名稱:"Seminar",學分數:"1",人限:"13",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"大四(含)以上請與授課教師討論後加簽選課",停開註記:"",教室與上課時間:`LS I生一112	W5
`,授課教師:`謝琬甄	HSIEH, WAN-CHEN
`,擋修說明:"",課程限制說明:"限生科院,碩士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"分生所111M  必修	"},{科號:"11120LSMC590202",課程中文名稱:"書報討論",課程英文名稱:"Seminar",學分數:"1",人限:"13",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"大四(含)以上請與授課教師討論後加簽選課",停開註記:"",教室與上課時間:`LS II生二218	W5
`,授課教師:`徐子勝	HSU, TZU-SHENG
`,擋修說明:"",課程限制說明:"限生科院,碩士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"分生所111M  必修	"},{科號:"11120LSMC590400",課程中文名稱:"專題討論",課程英文名稱:"Colloquium",學分數:"1",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"大四(含)以上請與授課教師討論後加簽選課",停開註記:"",教室與上課時間:`LS II生二講堂	R3R4
`,授課教師:`李政昇	LEE, CHENG-SHENG
`,擋修說明:"",課程限制說明:"限生科院,碩士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"分生所111M  必修	"},{科號:"11120LSMC600200",課程中文名稱:"論文研究",課程英文名稱:"Thesis",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限碩二以上修習",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"排除碩士班1年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"分生所111M  必修	"},{科號:"11120LSMC614100",課程中文名稱:"微生物毒性因子",課程英文名稱:"Microbial Virulence Factors",學分數:"1",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"建議須修過生物化學或細胞生物課程為宜",停開註記:"",教室與上課時間:`LS II生二 213	T2
`,授課教師:`王雯靜	WANG, WEN-CHING
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"分生所111D  選修	分生所111M  選修	"},{科號:"11120LSMC674300",課程中文名稱:"癌症代謝特論一",課程英文名稱:"Special Topics on Cancer Metabolism I",學分數:"2",人限:"0",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"需與授課教師討論後加簽選課",停開註記:"",教室與上課時間:`LS II生二218	F7F8
`,授課教師:`王雯靜	WANG, WEN-CHING
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"分生所111D  選修	分生所111M  選修	"},{科號:"11120LSMC700200",課程中文名稱:"論文研究",課程英文名稱:"Thesis",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限博二以上修習",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"排除博士班1年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"分生所111D  必修	"},{科號:"11120LSMC790201",課程中文名稱:"書報討論",課程英文名稱:"Seminar",學分數:"1",人限:"10",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`LS II生二 213	F5
`,授課教師:`黃建銘	HUANG, JIAN-MING
`,擋修說明:"",課程限制說明:"限生科院,博士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"分生所111D  必修	"},{科號:"11120LSMC790400",課程中文名稱:"專題討論",課程英文名稱:"Colloquium",學分數:"1",人限:"10",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`LS II生二 626	R3R4
`,授課教師:`傅化文	FU, HUA-WEN
`,擋修說明:"",課程限制說明:"限生科院,博士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"分生所111D  必修	"},{科號:"11120LSMM514500",課程中文名稱:"粒線體特論二",課程英文名稱:"Special Topics on Mitochondria II",學分數:"2",人限:"0",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"需與授課教師討論後加簽選課",停開註記:"",教室與上課時間:`LS II生二 213	F7F8
`,授課教師:`高茂傑	KAO, MOU-CHIEH
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"分醫所111D  選修	分醫所111M  選修	"},{科號:"11120LSMM524200",課程中文名稱:"初級纖毛特論一",課程英文名稱:"Special Topics on Primary Cilia I",學分數:"2",人限:"0",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"需與授課教師討論後加簽選課Requiring application in order to enroll in the course.",停開註記:"",教室與上課時間:`LS II生二 109	F8F9
`,授課教師:`林玉俊	LIN, YU-CHUN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"分醫所111D  選修	分醫所111M  選修	"},{科號:"11120LSMM524400",課程中文名稱:"細胞分化與凋亡特論二",課程英文名稱:"Special Topics in Cell Differentiation and Death II",學分數:"2",人限:"0",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"需與授課教師討論後加簽選課",停開註記:"",教室與上課時間:`LS II生二217	F7F8
`,授課教師:`陳令儀	CHEN, LINYI
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"分醫所111D  選修	分醫所111M  選修	"},{科號:"11120LSMM527800",課程中文名稱:"細胞訊息特論二",課程英文名稱:"Special Topics in Cell Signaling II",學分數:"2",人限:"0",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"需與授課教師討論後加簽選課",停開註記:"",教室與上課時間:`LS I生一521A	R9Ra
`,授課教師:`王群超	WANG, CHUN-CHAO
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"分醫所111D  選修	分醫所111M  選修	"},{科號:"11120LSMM528300",課程中文名稱:"細胞核膜特論一",課程英文名稱:"Special Topics in Nuclear Envelope I",學分數:"2",人限:"0",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"需與授課教師討論後加簽選課Requiring application in order to enroll in the course.",停開註記:"",教室與上課時間:`LS II生二207	W3W4
`,授課教師:`李以如	LEE, I-JU
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"分醫所111D  選修	分醫所111M  選修	"},{科號:"11120LSMM528600",課程中文名稱:"胞器蛋白質恆定特論二",課程英文名稱:"Special Topics in Organelle Proteostasis II",學分數:"2",人限:"0",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"需與授課教師討論後加簽選課Requiring application in order to enroll in the course.",停開註記:"",教室與上課時間:`LS II生二207	F5F6
`,授課教師:`廖品超	LIAO, PIN-CHAO
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"分醫所111D  選修	分醫所111M  選修	"},{科號:"11120LSMM575800",課程中文名稱:"分子及細胞腫瘤治療學",課程英文名稱:"Molecular and Cellular Theurapeutics for Cancer Patients",學分數:"2",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`LS II生二217	W7W8
`,授課教師:`陳功深	CALEB GONSHEN CHEN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)生物產業技術學分學程",不可加簽說明:"",必選修說明:"分醫所111D  選修	分醫所111M  選修	"},{科號:"11120LSMM577200",課程中文名稱:"生殖分子基因體學",課程英文名稱:"Reproductive Molecular Genetics",學分數:"2",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`LS II生二206	W3W4
`,授課教師:`周雅菁	YA-CHING CHOU
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"分醫所111D  選修	分醫所111M  選修	"},{科號:"11120LSMM577400",課程中文名稱:"子宮內膜異位症特論二",課程英文名稱:"Special Topics in Endometriosis II",學分數:"2",人限:"0",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"需與授課教師討論後加簽選課Requiring application in order to enroll in the course.",停開註記:"",教室與上課時間:`LS II生二207	R5R6
`,授課教師:`周雅菁	YA-CHING CHOU
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"分醫所111D  選修	分醫所111M  選修	"},{科號:"11120LSMM577500",課程中文名稱:"以問題導向學習癌症研究特論一",課程英文名稱:"Special Topics in Problem-based Learning in Cancer Research I",學分數:"2",人限:"0",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"需與授課教師討論後加簽選課",停開註記:"",教室與上課時間:`LS II生二206	W9Wa
`,授課教師:`陳韋靜	CHEN, WEI-CHING
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"分醫所111D  選修	分醫所111M  選修	"},{科號:"11120LSMM590201",課程中文名稱:"書報討論",課程英文名稱:"Seminar",學分數:"1",人限:"13",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"大四(含)以上請與授課教師討論後加簽選課",停開註記:"",教室與上課時間:`LS II生二 213	W5
`,授課教師:`李以如	LEE, I-JU
`,擋修說明:"",課程限制說明:"限生科院,碩士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"分醫所111M  必修	"},{科號:"11120LSMM590202",課程中文名稱:"書報討論",課程英文名稱:"Seminar",學分數:"1",人限:"13",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"大四(含)以上請與授課教師討論後加簽選課",停開註記:"",教室與上課時間:`LS II生二217	W5
`,授課教師:`林玉俊	LIN, YU-CHUN
`,擋修說明:"",課程限制說明:"限生科院,碩士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"分醫所111M  必修	"},{科號:"11120LSMM590400",課程中文名稱:"專題討論",課程英文名稱:"Colloquium",學分數:"1",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"大四(含)以上請與授課教師討論後加簽選課",停開註記:"",教室與上課時間:`LS II生二217	R3R4
`,授課教師:`王群超	WANG, CHUN-CHAO
`,擋修說明:"",課程限制說明:"限生科院,碩士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"分醫所111M  必修	"},{科號:"11120LSMM600200",課程中文名稱:"論文研究",課程英文名稱:"Thesis",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限碩二以上修習",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"排除碩士班1年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"分醫所111M  必修	"},{科號:"11120LSMM624700",課程中文名稱:"高等細胞生物學",課程英文名稱:"Advanced Cell Biology",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`LS II生二 107	R6R7R8
`,授課教師:`王歐力	Wang Ou-Li
桑自剛	SANG, TZU-KANG
傅化文	FU, HUA-WEN
邱于芯	CHIU, YU-HSIN
林玉俊	LIN, YU-CHUN
廖品超	LIAO, PIN-CHAO
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"分醫所111D  選修	分醫所111M  選修	"},{科號:"11120LSMM700200",課程中文名稱:"論文研究",課程英文名稱:"Thesis",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限博二以上修習",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"排除博士班1年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"分醫所111D  必修	"},{科號:"11120LSMM790201",課程中文名稱:"書報討論",課程英文名稱:"Seminar",學分數:"1",人限:"10",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`LS II生二206	F5
`,授課教師:`周雅菁	YA-CHING CHOU
`,擋修說明:"",課程限制說明:"限生科院,博士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"分醫所111D  必修	"},{科號:"11120LSMM790400",課程中文名稱:"專題討論",課程英文名稱:"Colloquium",學分數:"1",人限:"10",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`LS II生二 213	R3R4
`,授課教師:`張晃猷	CHANG, HWAN-YOU
`,擋修說明:"",課程限制說明:"限生科院,博士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"分醫所111D  必修	"},{科號:"11120LSSN510500",課程中文名稱:"理論神經科學特論二",課程英文名稱:"Special Topics on Theoretical Neuroscience II",學分數:"2",人限:"0",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"需與授課教師討論後加簽選課Requiring application in order to enroll in the course.",停開註記:"",教室與上課時間:`LS II生二207	TnT5
`,授課教師:`羅中泉	LO, CHUNG-CHUAN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"系神所111D  選修	系神所111M  選修	"},{科號:"11120LSSN510800",課程中文名稱:"高等計算神經科學",課程英文名稱:"Advanced Computational Neuroscience",學分數:"2",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"彈性學期週數16週",停開註記:"",教室與上課時間:`LS II生二206	T7T8
`,授課教師:`羅中泉	LO, CHUNG-CHUAN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)神經科學學分學程",不可加簽說明:"",必選修說明:"系神所111D  選修	系神所111M  選修	"},{科號:"11120LSSN514400",課程中文名稱:"神經體研究專題二",課程英文名稱:"Special Topics in Connectomics II",學分數:"2",人限:"0",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"需與授課教師討論後加簽選課Requiring application in order to enroll in the course.",停開註記:"",教室與上課時間:`LS I生一112	F7F8
`,授課教師:`桑自剛	SANG, TZU-KANG
羅中泉	LO, CHUNG-CHUAN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"系神所111D  選修	系神所111M  選修	"},{科號:"11120LSSN515200",課程中文名稱:"行為神經科學特論二",課程英文名稱:"Special Topics in Behavioral Neuroscience II",學分數:"2",人限:"0",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"需與授課教師討論後加簽選課",停開註記:"",教室與上課時間:`LS II生二218	MaMb
`,授課教師:`張鈞惠	CHANG, CHUN-HUI
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"系神所111D  選修	系神所111M  選修	"},{科號:"11120LSSN515400",課程中文名稱:"動物行為特論二",課程英文名稱:"Special Topics on Animal Behavior II",學分數:"2",人限:"0",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"需與授課教師討論後加簽選課Requiring application in order to enroll in the course.",停開註記:"",教室與上課時間:`LS I生一521A	WbWc
`,授課教師:`郭崇涵	KUO, TSUNG-HAN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"系神所111D  選修	系神所111M  選修	"},{科號:"11120LSSN515800",課程中文名稱:"早期壓力動物模式特論一",課程英文名稱:"Special Topics on Animal Models of Early-life Adversities I",學分數:"2",人限:"0",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"需與授課教師討論後加簽選課. 本課程將針對早期壓力的動力模式與其對中樞神經系統發育之影響,進行相關討論.",停開註記:"",教室與上課時間:`NTHU Lab清實923	FaFb
`,授課教師:`段立珩	TUAN, LI-HENG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"系神所111M  選修	"},{科號:"11120LSSN524300",課程中文名稱:"神經傳導物與行為分析特論二",課程英文名稱:"Special Topics in Neurotransmitters and Physiology of Behaviors II",學分數:"2",人限:"0",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"需與授課教師討論後加簽選課Requiring application in order to enroll in the course.",停開註記:"",教室與上課時間:`LS I生一323A	F7F8
`,授課教師:`張慧雲	CHANG, HUI-YUN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"系神所111D  選修	系神所111M  選修	"},{科號:"11120LSSN584400",課程中文名稱:"共軛焦顯微鏡技術",課程英文名稱:"Confocal Microscopy",學分數:"2",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`LS I生一112	M7M8
`,授課教師:`江安世	CHIANG, ANN-SHYN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"系神所111D  選修	系神所111M  選修	"},{科號:"11120LSSN590201",課程中文名稱:"書報討論",課程英文名稱:"Seminar",學分數:"1",人限:"13",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"大四(含)以上請與授課教師討論後加簽選課",停開註記:"",教室與上課時間:`LS II生二 105	W5
`,授課教師:`張慧雲	CHANG, HUI-YUN
`,擋修說明:"",課程限制說明:"限生科院,碩士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"系神所111M  必修	"},{科號:"11120LSSN590400",課程中文名稱:"專題討論",課程英文名稱:"Colloquium",學分數:"1",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"大四(含)以上請與授課教師討論後加簽選課",停開註記:"",教室與上課時間:`LS II生二 109	R3R4
`,授課教師:`林郁婷	LIN, YU-TING
`,擋修說明:"",課程限制說明:"限生科院,碩士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"系神所111M  必修	"},{科號:"11120LSSN600200",課程中文名稱:"論文研究",課程英文名稱:"Thesis",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限碩二以上修習",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"排除碩士班1年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"系神所111M  必修	"},{科號:"11120LSSN614900",課程中文名稱:"果蠅學習記憶專題討論",課程英文名稱:"Topics on Learning and Memory",學分數:"1",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`LS I生一112	W7
`,授課教師:`陳俊朝	CHEN, CHUN-CHAO
江安世	CHIANG, ANN-SHYN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"系神所111D  選修	系神所111M  選修	"},{科號:"11120LSSN625200",課程中文名稱:"高等神經生物學",課程英文名稱:"Advanced Neurobiology",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`LS II生二 109	M5W3W4
`,授課教師:`郭崇涵	KUO, TSUNG-HAN
林郁婷	LIN, YU-TING
彭筱明	PENG HSIAO-MING
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)神經科學學分學程",不可加簽說明:"",必選修說明:"系神所111D  選修	系神所111M  選修	"},{科號:"11120LSSN700200",課程中文名稱:"論文研究",課程英文名稱:"Thesis",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限系神所博二以上同學，Selectable after successfully completing first year's coursework",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"排除博士班1年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"系神所111D  必修	"},{科號:"11120LST 310401",課程中文名稱:"行政法二",課程英文名稱:"Administrative Law (II)",學分數:"3",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"彈性16週課程",停開註記:"",教室與上課時間:`TSMC台積121	M7M8M9
`,授課教師:`陳仲嶙	CHEN, CHUNG-LIN
`,擋修說明:`<div>
  擋修對象 : 大學部 <br>
  先修科目 : <BR><BR>行政法一-成績需C-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"限科法所",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"科法所111MA 必修	"},{科號:"11120LST 310402",課程中文名稱:"行政法二",課程英文名稱:"Administrative Law (II)",學分數:"3",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`TSMC台積121	T2T3T4
`,授課教師:`李怡俐	LEE, YI-LI
`,擋修說明:`<div>
  擋修對象 : 大學部 <br>
  先修科目 : <BR><BR>行政法一-成績需C-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"科管院優先，第3次選課起開放全校修習",第一二專長對應:"法律(第二專長)	法律(第一專長)",學分學程對應:"(跨領域)法律學分學程",不可加簽說明:"",必選修說明:"科管院學士班108B  選修	科管院學士班109B  選修	"},{科號:"11120LST 310601",課程中文名稱:"刑法分則",課程英文名稱:"Criminal law-kind of Crime",學分數:"3",人限:"18",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`TSMC台積835	R3R4Rn
`,授課教師:`連孟琦	LIEN, MENG-CHI
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>刑法總則-成績需B-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"限科法所碩士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"科法所111MA 必修	"},{科號:"11120LST 310602",課程中文名稱:"刑法分則",課程英文名稱:"Criminal law-kind of Crime",學分數:"3",人限:"100",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程為 16 週課程，學士班同學先修科目C-以上若被擋修請至課務組網頁下載申請表",停開註記:"",教室與上課時間:`TSMC台積309	M2M3M4
`,授課教師:`廖宜寧	LIAO, I-NING
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>刑法總則-成績需B-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"排除科法所碩士班",第一二專長對應:"法律(第二專長)	法律(第一專長)",學分學程對應:"(跨領域)法律學分學程",不可加簽說明:"",必選修說明:"科管院學士班109B  必修	"},{科號:"11120LST 320500",課程中文名稱:"親屬繼承",課程英文名稱:"Family Law",學分數:"2",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"HSS性別研究學程,學士班先修達C-被擋請另填免擋申請表,其餘被擋修者可另洽任課教師討論",停開註記:"",教室與上課時間:`TSMC台積421	M5M6
`,授課教師:`林昀嫺	LIN, YUN-HSIEN
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>民法總則-成績需B-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"科法所優先，第3次選課起開放全校修習",第一二專長對應:"法律(第二專長)	法律(第一專長)",學分學程對應:"(跨領域)性別研究學分學程/(跨領域)法律學分學程",不可加簽說明:"",必選修說明:"人社院學士班108BA 選修	人社院學士班108BB 選修	人社院學士班109BA 選修	人社院學士班109BB 選修	人社院學士班110BA 選修	人社院學士班110BB 選修	人社院學士班111BA 選修	人社院學士班111BB 選修	科法所111MA 必修	科管院學士班109B  必修	"},{科號:"11120LST 320901",課程中文名稱:"民事訴訟法二",課程英文名稱:"Civil Procedure Law II",學分數:"3",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`TSMC台積121	TaTbTc
`,授課教師:`王銘勇	WANG, MING-YUNG
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>民事訴訟法一-成績需B-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"科法所優先，第3次選課起開放全校修習",第一二專長對應:"法律(第二專長)	法律(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"科法所111MA 必修	科管院學士班108B  選修	科管院學士班109B  選修	"},{科號:"11120LST 330200",課程中文名稱:"憲法二",課程英文名稱:"Constitutional Law (II)",學分數:"2",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程為彈性16週課程",停開註記:"",教室與上課時間:`TSMC台積120	T5T6
`,授課教師:`高銘志	KAO, MING-CHIH
`,擋修說明:"",課程限制說明:"科法所優先，第3次選課起開放全校修習",第一二專長對應:"法律(第二專長)	法律(第一專長)",學分學程對應:"(跨領域)法律學分學程",不可加簽說明:"",必選修說明:"科法所111MA 必修	科管院學士班110B  必修	"},{科號:"11120LST 330202",課程中文名稱:"憲法二",課程英文名稱:"Constitutional Law (II)",學分數:"2",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`TSMC台積120	W5W6
`,授課教師:`洪淳琦	HUNG, CHUN-CHI
`,擋修說明:"",課程限制說明:"科法所優先，第3次選課起開放全校修習",第一二專長對應:"法律(第二專長)	法律(第一專長)",學分學程對應:"(跨領域)法律學分學程",不可加簽說明:"",必選修說明:"科法所111MA 必修	科管院學士班110B  必修	"},{科號:"11120LST 350100",課程中文名稱:"法律與科技",課程英文名稱:"Law and Technology",學分數:"2",人限:"80",新生保留人數:"0",通識對象:"*1",通識類別:"社會科學領域 Elective GE course: Social Sciences",授課語言:"中",備註:"彈性16週課程",停開註記:"",教室與上課時間:`MXIC旺宏253	T3T4
`,授課教師:`林勤富	LIN, CHING-FU
`,擋修說明:"",課程限制說明:"排除科法所",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120LST 350302",課程中文名稱:"法學緒論",課程英文名稱:"Introductory Study of Law",學分數:"3",人限:"100",新生保留人數:"0",通識對象:"*3",通識類別:"社會科學領域 Elective GE course: Social Sciences",授課語言:"中",備註:"本課程為 16 週課程",停開註記:"",教室與上課時間:`TSMC台積309	M6M7M8
`,授課教師:`廖宜寧	LIAO, I-NING
`,擋修說明:"",課程限制說明:"經濟系,計財系,科管院學士班優先，第3次選課起開放全校修習",第一二專長對應:"經濟(第一專長)	計量財務金融(第一專長)",學分學程對應:"(跨領域)法律學分學程",不可加簽說明:"",必選修說明:"經濟系109BA 必修	經濟系109BB 必修	經濟系110BA 必修	經濟系110BB 必修	計財系109B  必修	計財系110B  必修	科管院學士班109B  必修	科管院學士班110B  必修	"},{科號:"11120LST 350401",課程中文名稱:"科技法導論",課程英文名稱:"Introduction of Technology Law",學分數:"3",人限:"100",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`TSMC台積103	T7T8T9
`,授課教師:`高銘志	KAO, MING-CHIH
`,擋修說明:"",課程限制說明:"科管院優先，第3次選課起開放全校修習",第一二專長對應:"計量財務金融(第一專長)",學分學程對應:"(跨領域)能源科技與永續社會學分學程",不可加簽說明:"",必選修說明:"經濟系109BA 必修	經濟系109BB 必修	經濟系110BA 必修	經濟系110BB 必修	計財系109B  必修	計財系110B  必修	科管院學士班109B  必修	"},{科號:"11120LST 350402",課程中文名稱:"科技法導論",課程英文名稱:"Introduction of Technology Law",學分數:"3",人限:"100",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"16週課程",停開註記:"",教室與上課時間:`TSMC台積103	W5W6W7
`,授課教師:`李紀寬	LI, GI-KUEN
`,擋修說明:"",課程限制說明:"科管院優先，第3次選課起開放全校修習",第一二專長對應:"計量財務金融(第一專長)",學分學程對應:"(跨領域)能源科技與永續社會學分學程",不可加簽說明:"",必選修說明:"經濟系109BA 必修	經濟系109BB 必修	經濟系110BA 必修	經濟系110BB 必修	計財系109B  必修	計財系110B  必修	科管院學士班109B  必修	"},{科號:"11120LST 420201",課程中文名稱:"民法債編一",課程英文名稱:"General Provisions on Obligation I",學分數:"3",人限:"18",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`TSMC台積121	F3F4Fn
`,授課教師:`陳宛妤	CHEN,WAN-YU
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>民法總則-成績需B-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"限科法所",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"科法所111MA 必修	"},{科號:"11120LST 420202",課程中文名稱:"民法債編一",課程英文名稱:"General Provisions on Obligation I",學分數:"3",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"學士班同學先修科目C-以上若被擋修請至課務組網頁下載申請表",停開註記:"",教室與上課時間:`TSMC台積421	M7M8M9
`,授課教師:`陳乃瑜	CHEN,NAI-YU
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>民法總則-成績需B-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"排除科法所碩士班",第一二專長對應:"法律(第二專長)	法律(第一專長)",學分學程對應:"(跨領域)法律學分學程",不可加簽說明:"",必選修說明:"科管院學士班110B  必修	"},{科號:"11120LST 420402",課程中文名稱:"民法物權",課程英文名稱:"Property Law",學分數:"3",人限:"90",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"學士班同學先修科目C-以上若被擋修請至課務組網頁下載申請表",停開註記:"",教室與上課時間:`TSMC台積104	T2T3T4
`,授課教師:`陳宛妤	CHEN,WAN-YU
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>民法總則-成績需B-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"科法所,科管院學士班優先，第3次選課起開放全校修習",第一二專長對應:"法律(第二專長)	法律(第一專長)",學分學程對應:"(跨領域)法律學分學程",不可加簽說明:"",必選修說明:"科法所111MA 必修	科管院學士班110B  必修	"},{科號:"11120LST 420700",課程中文名稱:"商事法二",課程英文名稱:"Commercial Laws (II)",學分數:"2",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"學士班同學先修科目C-以上被擋修請至課務組網頁下載申請表.",停開註記:"",教室與上課時間:`TSMC台積121	FaFb
`,授課教師:`黃瑞宜	HUANG, JUI-I
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>民法債編一-成績需B-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"科法所優先，第3次選課起開放全校修習",第一二專長對應:"法律(第二專長)	法律(第一專長)",學分學程對應:"(跨領域)法律學分學程",不可加簽說明:"",必選修說明:"科法所111MA 必修	科管院學士班108B  選修	"},{科號:"11120LST 461300",課程中文名稱:"刑事訴訟法二",課程英文名稱:"Criminal Procedure Law II",學分數:"2",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`TSMC台積121	M5M6
`,授課教師:`連孟琦	LIEN, MENG-CHI
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>刑事訴訟法一-成績需B-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"科法所優先，第3次選課起開放全校修習",第一二專長對應:"法律(第二專長)	法律(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"科法所111MA 必修	科管院學士班108B  選修	"},{科號:"11120LST 470200",課程中文名稱:"國際私法",課程英文名稱:"Conflict of Laws",學分數:"2",人限:"18",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"學士班同學先修科目C-以上若被擋修請至課務組網頁下載申請表",停開註記:"",教室與上課時間:`TSMC台積835	W3W4
`,授課教師:`黃居正	HUANG, CHU-CHENG
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>商事法一-成績需B-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"科法所優先，第3次選課起開放全校修習",第一二專長對應:"法律(第二專長)	法律(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"科法所111MA 必修	科管院學士班108B  選修	"},{科號:"11120LST 500100",課程中文名稱:"論文研究",課程英文名稱:"Thesis",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限科法所碩二以上修習",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"排除科法所碩士班1年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"科法所111MA 必修	科法所111MB 必修	"},{科號:"11120LST 500900",課程中文名稱:"專題演講",課程英文名稱:"Colloquium",學分數:"1",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`TSMC台積905	R5R6R7
`,授課教師:`彭心儀	PENG, SHIN-YI
林昀嫺	LIN, YUN-HSIEN
`,擋修說明:"",課程限制說明:"限科法所",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"科法所111D  選修	科法所111MA 必修	科法所111MB 必修	"},{科號:"11120LST 501800",課程中文名稱:"法學研究與寫作二",課程英文名稱:"Legal Writing (II)",學分數:"1",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`TSMC台積121	RaRb
`,授課教師:`黃朝琮	HUANG, CHAO-TSUNG
`,擋修說明:"",課程限制說明:"限科法所",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"科法所111D  必修	科法所111MA 必修	科法所111MB 必修	"},{科號:"11120LST 501900",課程中文名稱:"國際人權法",課程英文名稱:"International Human Rights Law",學分數:"2",人限:"18",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`TSMC台積835	M3M4
`,授課教師:`李怡俐	LEE, YI-LI
`,擋修說明:"",課程限制說明:"科法所優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"IMBA碩士班111M  選修	科法所111D  選修	科法所111MA 選修	科法所111MB 選修	"},{科號:"11120LST 502000",課程中文名稱:"法律倫理學",課程英文名稱:"Legal Ethics",學分數:"1",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`TSMC台積121	F5F6
`,授課教師:`薛熙平	SCHIVE, HSI-PING
`,擋修說明:"",課程限制說明:"科法所優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"科法所111MA 必修	科法所111MB 選修	"},{科號:"11120LST 502200",課程中文名稱:"法學德文二",課程英文名稱:"Legal German(Ⅱ)",學分數:"2",人限:"16",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`TSMC台積835	T9Ta
`,授課教師:`黃忠正	HUANG, CHUNG-CHENG
`,擋修說明:"",課程限制說明:"科法所優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"科法所111D  選修	科法所111MA 選修	科法所111MB 選修	"},{科號:"11120LST 502300",課程中文名稱:"德文法學名著選讀",課程英文名稱:"Selected Readings of German Jurisprudence",學分數:"2",人限:"10",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`TSMC台積835	T5T6
`,授課教師:`黃忠正	HUANG, CHUNG-CHENG
`,擋修說明:"",課程限制說明:"科法所優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"科法所111D  選修	科法所111MA 選修	科法所111MB 選修	"},{科號:"11120LST 510400",課程中文名稱:"憲法專題研究：未列舉權",課程英文名稱:"Constitutional Law Seminar: Unenumerated Rights",學分數:"2",人限:"18",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程為彈性16週課程",停開註記:"",教室與上課時間:`TSMC台積832	T5T6
`,授課教師:`陳仲嶙	CHEN, CHUNG-LIN
`,擋修說明:"",課程限制說明:"科法所優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"科法所111D  選修	科法所111MA 選修	科法所111MB 選修	"},{科號:"11120LST 530200",課程中文名稱:"智慧財產專庭與訴訟實務專題研究",課程英文名稱:"Seminars on IP Court & Trial Practices",學分數:"2",人限:"18",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`TSMC台積835	WbWc
`,授課教師:`王銘勇	WANG, MING-YUNG
`,擋修說明:"",課程限制說明:"科法所優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"科法所111D  選修	科法所111MA 選修	科法所111MB 選修	"},{科號:"11120LST 530300",課程中文名稱:"電腦與軟體法律專題研究",課程英文名稱:"Computer and Software Law",學分數:"2",人限:"18",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"本課程為彈性16週課程",停開註記:"",教室與上課時間:`TSMC台積121	T7T8
`,授課教師:`李紀寬	LI, GI-KUEN
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>著作權法-成績需B-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"科法所優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"IMBA碩士班111M  選修	科法所111D  選修	科法所111MA 選修	科法所111MB 選修	"},{科號:"11120LST 531700",課程中文名稱:"生物科技法導論",課程英文名稱:"Introduction to Biotechnology Law",學分數:"2",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程為彈性16週課程",停開註記:"",教室與上課時間:`TSMC台積121	R3R4
`,授課教師:`范建得	FAN, CHIEN TE
`,擋修說明:"",課程限制說明:"科法所優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"(跨領域)法律學分學程",不可加簽說明:"",必選修說明:"科法所111D  選修	科法所111MA 選修	科法所111MB 選修	"},{科號:"11120LST 532700",課程中文名稱:"消費者保護法實務研究",課程英文名稱:"Practical research of&#160; consumer protection act",學分數:"2",人限:"18",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`TSMC台積223	W3W4
`,授課教師:`靳邦忠	 
`,擋修說明:"",課程限制說明:"科法所優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"科法所111D  選修	科法所111MA 選修	科法所111MB 選修	"},{科號:"11120LST 533100",課程中文名稱:"能源及自然資源法專題",課程英文名稱:"Seminars on Energy & Natural Resources Law",學分數:"2",人限:"18",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程為彈性16週課程",停開註記:"",教室與上課時間:`TSMC台積835	R8R9
`,授課教師:`范建得	FAN, CHIEN TE
`,擋修說明:"",課程限制說明:"科法所優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"(跨領域)法律學分學程",不可加簽說明:"",必選修說明:"科法所111D  選修	科法所111MA 選修	科法所111MB 選修	"},{科號:"11120LST 540800",課程中文名稱:"代孕與人工生殖專題研究",課程英文名稱:"Surrogacy and Assisted Reproduction Technology Seminar",學分數:"2",人限:"18",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"HSS性別研究學程",停開註記:"",教室與上課時間:`TSMC台積835	M7M8
`,授課教師:`林昀嫺	LIN, YUN-HSIEN
`,擋修說明:"",課程限制說明:"科法所優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"(跨領域)性別研究學分學程/(跨領域)法律學分學程",不可加簽說明:"",必選修說明:"人社院學士班109BA 選修	科法所111D  選修	科法所111MA 選修	科法所111MB 選修	"},{科號:"11120LST 541300",課程中文名稱:"專利法",課程英文名稱:"Patent Law",學分數:"2",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`TSMC台積223	R3R4
`,授課教師:`洪淳琦	HUNG, CHUN-CHI
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>民法總則-成績需B-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"科法所優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"(跨領域)法律學分學程/(跨領域)創新創業學分學程",不可加簽說明:"",必選修說明:"科法所111D  選修	科法所111MA 選修	科法所111MB 選修	"},{科號:"11120LST 541700",課程中文名稱:"多樣性與智慧財產權專題研究",課程英文名稱:"Seminar on Diversity and Intellectual Property",學分數:"2",人限:"18",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`TSMC台積121	W7W8
`,授課教師:`洪淳琦	HUNG, CHUN-CHI
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>民法總則-成績需B-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"科法所優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"科法所111D  選修	科法所111MA 選修	科法所111MB 選修	"},{科號:"11120LST 550900",課程中文名稱:"數位貿易與數據治理",課程英文名稱:"Digital Trade and Data Governance",學分數:"3",人限:"18",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程為彈性16週課程",停開註記:"",教室與上課時間:`TSMC台積832	W7W8W9
`,授課教師:`彭心儀	PENG, SHIN-YI
`,擋修說明:"",課程限制說明:"科法所優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"(跨領域)法律學分學程",不可加簽說明:"",必選修說明:"科法所111D  選修	科法所111MA 選修	科法所111MB 選修	"},{科號:"11120LST 560400",課程中文名稱:"美國行政法專題研究：行政國家與司法謙讓",課程英文名稱:"Seminar on the U.S. Administrative Law: Administrative State and Judicial Deference",學分數:"2",人限:"18",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程為彈性16週課程",停開註記:"",教室與上課時間:`TSMC台積835	R5R6
`,授課教師:`黃丞儀	HUANG, CHENG-YI
`,擋修說明:"",課程限制說明:"科法所優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"科法所111D  選修	科法所111MA 選修	科法所111MB 選修	"},{科號:"11120LST 560600",課程中文名稱:"法律之經濟分析",課程英文名稱:"Economic Analysis of Law",學分數:"2",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"授課教師：蔡彥守",停開註記:"",教室與上課時間:`TSMC台積223	F3F4
`,授課教師:`聘任中	
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>民法債編一-成績需B-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"科法所優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"(跨領域)法律學分學程/(跨領域)金融科技與區塊鏈學分學程",不可加簽說明:"",必選修說明:"科法所111D  必修	科法所111MA 必修	科法所111MB 選修	"},{科號:"11120LST 560900",課程中文名稱:"法理學",課程英文名稱:"Philosophy of Law",學分數:"2",人限:"18",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`TSMC台積835	T7T8
`,授課教師:`黃忠正	HUANG, CHUNG-CHENG
`,擋修說明:"",課程限制說明:"限科法所",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"科法所111D  必修	科法所111MA 選修	科法所111MB 選修	"},{科號:"11120LST 562100",課程中文名稱:"原住民法",課程英文名稱:"Indigenous Peoples and the Law",學分數:"2",人限:"18",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`TSMC台積835	W5W6
`,授課教師:`黃居正	HUANG, CHU-CHENG
`,擋修說明:"",課程限制說明:"科法所優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"(跨領域)法律學分學程/(跨領域)世界南島暨原住民族學分學程",不可加簽說明:"",必選修說明:"科法所111D  選修	科法所111MA 選修	科法所111MB 選修	"},{科號:"11120LST 562500",課程中文名稱:"刑事制裁與執行法-重要實務見解評釋一",課程英文名稱:"Criminal Sanctions and Execution of Sentences – A Review of Significant Judicial Decisions I",學分數:"2",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`TSMC台積121	MaMb
`,授課教師:`陳重言	CHEN, CHUNG-YEN
連孟琦	LIEN, MENG-CHI
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>刑法總則-成績需B-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"科法所優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"(跨領域)法律學分學程",不可加簽說明:"",必選修說明:"科法所111D  選修	科法所111MA 選修	科法所111MB 選修	"},{科號:"11120LST 563000",課程中文名稱:"刑事法專題研究",課程英文名稱:"Seminar on Criminal Law",學分數:"2",人限:"18",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`TSMC台積121	R8R9
`,授課教師:`連孟琦	LIEN, MENG-CHI
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>刑法總則-成績需B-以上<BR>刑法分則-成績需B-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"科法所優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"科法所111D  選修	科法所111MA 選修	科法所111MB 選修	"},{科號:"11120LST 571900",課程中文名稱:"公司法",課程英文名稱:"Corporate Law",學分數:"3",人限:"35",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"本課程為彈性16週課程",停開註記:"",教室與上課時間:`TSMC台積905	F5F6F7
`,授課教師:`蔡昌憲	TSAI, CHANG-HSIEN
`,擋修說明:"",課程限制說明:"IMBA碩士班,科法所優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"(跨領域)法律學分學程",不可加簽說明:"",必選修說明:"IMBA碩士班111M  必修	科法所111D  選修	科法所111MA 選修	科法所111MB 選修	科管院學士班108BA 選修	科管院學士班109BA 選修	"},{科號:"11120LST 780100",課程中文名稱:"論文研究",課程英文名稱:"Thesis",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限科法所博二以上修習",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"排除科法所博士班1年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"科法所111D  必修	"},{科號:"11120MATH101000",課程中文名稱:"微積分Ａ一",課程英文名稱:"Calculus (I)",學分數:"4",人限:"100",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"演習課時間為W19:00-21:00，地點為綜三201、203、205",停開註記:"",教室與上課時間:`CHEM II化二 223	T3T4R3R4
`,授課教師:`王信華	WANG, SHIN-HWA
`,擋修說明:"",課程限制說明:"",第一二專長對應:"化學(第一專長)	經濟(第一專長)	電機工程(第一專長)	電機資訊(第一專長)	工程與系統科學(第一專長)	動力機械工程(第二專長)	動力機械工程(第一專長)",學分學程對應:"(跨領域)音樂科技與健康學分學程",不可加簽說明:"",必選修說明:""},{科號:"11120MATH102001",課程中文名稱:"微積分二(數學系)",課程英文名稱:"Calculus (II)",學分數:"4",人限:"108",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"演習課時間為M19:00-21:00，地點為綜三101、118、119",停開註記:"",教室與上課時間:`GEN III綜三 201	T1T2F1F2
GEN III綜三 101	MaMbMc
`,授課教師:`鄭志豪	TEH JYH HAUR
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>微積分一-成績需D以上<BR>微積分Ａ一-成績需D以上<BR>微積分一(數學系)-成績需D以上<BR>曾修微積分一(數學系)(基本科目免修測試)<BR>曾修微積分Ａ一(基本科目免修測試)<BR><br>上述條件任選一科，則不擋修。</div>`,課程限制說明:"【上學期原修微積分一(數學系)MATH101001(鄭志豪老師)同學選課優先,第3次選課起開放】",第一二專長對應:"化學(第一專長)	經濟(第一專長)	電機工程(第一專長)	電機資訊(第一專長)	工程與系統科學(第一專長)	數學(第一專長)	動力機械工程(第二專長)	動力機械工程(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"數學系111BA 必修	數學系111BB 必修	理學院學士班111B  必修	"},{科號:"11120MATH102002",課程中文名稱:"微積分Ａ二",課程英文名稱:"Calculus (II)",學分數:"4",人限:"116",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"演習課時間為M19:00-21:00，地點為工科501,502,503",停開註記:"",教室與上課時間:`DELTA台達109	T1T2F1F2
`,授課教師:`張廷暉	CHANG, TING-HUI
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>微積分一-成績需D以上<BR>微積分Ａ一-成績需D以上<BR>微積分一(數學系)-成績需D以上<BR>曾修微積分一(數學系)(基本科目免修測試)<BR>曾修微積分Ａ一(基本科目免修測試)<BR><br>上述條件任選一科，則不擋修。</div>`,課程限制說明:"【上學期原修微積分Ａ一MATH101002(張廷暉老師)同學選課優先,第3次選課起開放】",第一二專長對應:"化學(第一專長)	經濟(第一專長)	電機工程(第一專長)	電機資訊(第一專長)	工程與系統科學(第一專長)	動力機械工程(第二專長)	動力機械工程(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"工科系111BA 必修	工科系111BB 必修	"},{科號:"11120MATH102003",課程中文名稱:"微積分Ａ二",課程英文名稱:"Calculus (II)",學分數:"4",人限:"100",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"含實中科學班，演習課時間為M19:00-21:00，地點物019、501、504。",停開註記:"",教室與上課時間:`PHYS物   019	T1T2F1F2
`,授課教師:`蔡一豪	TSAI, YI-HAO
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>微積分一-成績需D以上<BR>微積分Ａ一-成績需D以上<BR>微積分一(數學系)-成績需D以上<BR>曾修微積分一(數學系)(基本科目免修測試)<BR>曾修微積分Ａ一(基本科目免修測試)<BR><br>上述條件任選一科，則不擋修。</div>`,課程限制說明:"【上學期原修微積分Ａ一MATH101003(蔡一豪老師)同學選課優先,第3次選課起開放】",第一二專長對應:"化學(第一專長)	經濟(第一專長)	電機工程(第一專長)	電機資訊(第一專長)	工程與系統科學(第一專長)	物理(第一專長)	動力機械工程(第二專長)	動力機械工程(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"原科院學士班111B  必修	物理系111B A必修	物理系111B B必修	物理系111B C必修	"},{科號:"11120MATH102004",課程中文名稱:"微積分Ａ二",課程英文名稱:"Calculus (II)",學分數:"4",人限:"126",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"演習課時間為M19:00-21:00，地點為醫環110、化125、化二223",停開註記:"",教室與上課時間:`DELTA台達105	T1T2F1F2
`,授課教師:`高淑蓉	KAO, SHU-JUNG
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>微積分一-成績需D以上<BR>微積分Ａ一-成績需D以上<BR>微積分一(數學系)-成績需D以上<BR>曾修微積分一(數學系)(基本科目免修測試)<BR>曾修微積分Ａ一(基本科目免修測試)<BR><br>上述條件任選一科，則不擋修。</div>`,課程限制說明:"【上學期原修微積分Ａ一MATH101004(高淑蓉老師)同學選課優先,第3次選課起開放】",第一二專長對應:"化學(第一專長)	經濟(第一專長)	電機工程(第一專長)	電機資訊(第一專長)	工程與系統科學(第一專長)	動力機械工程(第二專長)	動力機械工程(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"醫環系111B  必修	化學系111B  必修	"},{科號:"11120MATH102005",課程中文名稱:"微積分Ａ二",課程英文名稱:"Calculus (II)",學分數:"4",人限:"100",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"演習課時間為W19:00-21:00，地點為台積203、204、309",停開註記:"",教室與上課時間:`GEN III綜三 201	M3M4W1W2
`,授課教師:`黃明傑	HUANG, MIN-JEI
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>微積分一-成績需D以上<BR>微積分Ａ一-成績需D以上<BR>微積分一(數學系)-成績需D以上<BR>曾修微積分一(數學系)(基本科目免修測試)<BR>曾修微積分Ａ一(基本科目免修測試)<BR><br>上述條件任選一科，則不擋修。</div>`,課程限制說明:"【上學期原修微積分Ａ一MATH101005(黃明傑老師)同學選課優先,第3次選課起開放】",第一二專長對應:"化學(第一專長)	經濟(第一專長)	電機資訊(第一專長)	工程與系統科學(第一專長)	動力機械工程(第二專長)	動力機械工程(第一專長)	計量財務金融(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"計財系111B  必修	科管院學士班111B  必修	"},{科號:"11120MATH102006",課程中文名稱:"微積分Ａ二",課程英文名稱:"Calculus (II)",學分數:"4",人限:"111",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"Recitation courses in DELTA 202, 208, 210, 7-9 pm every Wed.",停開註記:"",教室與上課時間:`GEN III綜三 101	T3T4R3R4
`,授課教師:`朱家杰	CHU, CHIA-CHIEH
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>微積分一-成績需D以上<BR>微積分Ａ一-成績需D以上<BR>微積分一(數學系)-成績需D以上<BR>曾修微積分一(數學系)(基本科目免修測試)<BR>曾修微積分Ａ一(基本科目免修測試)<BR><br>上述條件任選一科，則不擋修。</div>`,課程限制說明:"【上學期原修微積分Ａ一MATH101006(朱家杰老師)同學選課優先,第3次選課起開放】",第一二專長對應:"化學(第一專長)	經濟(第一專長)	電機工程(第一專長)	電機資訊(第一專長)	工程與系統科學(第一專長)	動力機械工程(第二專長)	動力機械工程(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"電機系111BA 必修	電機系111BB 必修	電資院學士班111B  必修	"},{科號:"11120MATH102007",課程中文名稱:"微積分Ａ二",課程英文名稱:"Calculus (II)",學分數:"4",人限:"100",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"演習課時間為W19:00-21:00，地點為台達201、209",停開註記:"",教室與上課時間:`PHYSLAB普實203	T3T4R3R4
`,授課教師:`張廷暉	CHANG, TING-HUI
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>微積分一-成績需D以上<BR>微積分Ａ一-成績需D以上<BR>微積分一(數學系)-成績需D以上<BR>曾修微積分一(數學系)(基本科目免修測試)<BR>曾修微積分Ａ一(基本科目免修測試)<BR><br>上述條件任選一科，則不擋修。</div>`,課程限制說明:"【上學期原修微積分Ａ一MATH101007(張廷暉老師)同學選課優先,第3次選課起開放】",第一二專長對應:"化學(第一專長)	經濟(第一專長)	電機工程(第一專長)	電機資訊(第一專長)	工程與系統科學(第一專長)	動力機械工程(第二專長)	動力機械工程(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"電機系111BA 必修	電機系111BB 必修	電資院學士班111B  必修	"},{科號:"11120MATH104001",課程中文名稱:"微積分Ｂ二",課程英文名稱:"Calculus II",學分數:"3",人限:"121",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"演習課時間為M19:00-21:00，地點為工一212、213、214",停開註記:"",教室與上課時間:`ENG I工一 431	T3T4R3
`,授課教師:`陳俊成	CHEN, JIUN-CHENG
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>微積分一-成績需D以上<BR>微積分Ａ一-成績需D以上<BR>微積分Ｂ一-成績需D以上<BR>微積分一(數學系)-成績需D以上<BR>曾修微積分一(數學系)(基本科目免修測試)<BR>曾修微積分Ａ一(基本科目免修測試)<BR>曾修微積分Ｂ一(基本科目免修測試)<BR><br>上述條件任選一科，則不擋修。</div>`,課程限制說明:"【上學期原修微積分Ｂ一MATH103001(陳俊成老師)同學選課優先,第3次選課起開放】",第一二專長對應:"化學工程(第一專長)	資訊工程(第二專長)	資訊工程(第一專長)	醫學科學(第一專長)	數據科學(第二專長)	經濟(第一專長)	電機資訊(第一專長)	工業工程與工程管理(第一專長)	生命科學(第一專長)	動力機械工程(第二專長)	動力機械工程(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"動機系111BA 必修	動機系111BB 必修	"},{科號:"11120MATH104002",課程中文名稱:"微積分Ｂ二",課程英文名稱:"Calculus II",學分數:"3",人限:"128",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"150 mins per week. Recitation courses in CHE 209, 210, 211, 7-9 pm every Tue.",停開註記:"",教室與上課時間:`CHE化工 B18	T3T4R3R4
`,授課教師:`黃皓瑋	HAO-WEI HUANG
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>微積分一-成績需D以上<BR>微積分Ａ一-成績需D以上<BR>微積分Ｂ一-成績需D以上<BR>微積分一(數學系)-成績需D以上<BR>曾修微積分一(數學系)(基本科目免修測試)<BR>曾修微積分Ａ一(基本科目免修測試)<BR>曾修微積分Ｂ一(基本科目免修測試)<BR><br>上述條件任選一科，則不擋修。</div>`,課程限制說明:"【上學期原修微積分Ｂ一MATH103002(黃皓瑋老師)同學選課優先,第3次選課起開放】",第一二專長對應:"化學工程(第一專長)	資訊工程(第二專長)	資訊工程(第一專長)	醫學科學(第一專長)	數據科學(第二專長)	經濟(第一專長)	電機資訊(第一專長)	工業工程與工程管理(第一專長)	生命科學(第一專長)	動力機械工程(第二專長)	動力機械工程(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"化工系111B  必修	工工系111B  必修	工學院學士班111B  必修	材料系111BA 必修	材料系111BB 必修	"},{科號:"11120MATH104003",課程中文名稱:"微積分Ｂ二",課程英文名稱:"Calculus II",學分數:"3",人限:"138",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程上150分鐘，其餘時間由教授彈性運用。演習課時間為T19:00-21:00，地點為台達B05",停開註記:"",教室與上課時間:`DELTA台達B03	T3T4R3R4
`,授課教師:`東聖甯	TUNG, SHEN-NING
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>微積分一-成績需D以上<BR>微積分Ａ一-成績需D以上<BR>微積分Ｂ一-成績需D以上<BR>微積分一(數學系)-成績需D以上<BR>曾修微積分一(數學系)(基本科目免修測試)<BR>曾修微積分Ａ一(基本科目免修測試)<BR>曾修微積分Ｂ一(基本科目免修測試)<BR><br>上述條件任選一科，則不擋修。</div>`,課程限制說明:"【上學期原修微積分Ｂ一MATH103003(東聖甯老師)同學選課優先,第3次選課起開放】",第一二專長對應:"化學工程(第一專長)	資訊工程(第二專長)	資訊工程(第一專長)	醫學科學(第一專長)	數據科學(第二專長)	經濟(第一專長)	電機資訊(第一專長)	工業工程與工程管理(第一專長)	生命科學(第一專長)	動力機械工程(第二專長)	動力機械工程(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"化工系111B  必修	工工系111B  必修	工學院學士班111B  必修	材料系111BA 必修	材料系111BB 必修	"},{科號:"11120MATH104004",課程中文名稱:"微積分Ｂ二",課程英文名稱:"Calculus II",學分數:"3",人限:"140",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程上150分鐘，其餘時間由教授彈性運用。演習課時間為M19:00-21:00，地點為生二105、107、109",停開註記:"",教室與上課時間:`GEN IV綜四224	T3T4R3R4
`,授課教師:`黃柏鈞	HUANG, PO-CHUN
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>微積分一-成績需D以上<BR>微積分Ａ一-成績需D以上<BR>微積分Ｂ一-成績需D以上<BR>微積分一(數學系)-成績需D以上<BR>曾修微積分一(數學系)(基本科目免修測試)<BR>曾修微積分Ａ一(基本科目免修測試)<BR>曾修微積分Ｂ一(基本科目免修測試)<BR><br>上述條件任選一科，則不擋修。</div>`,課程限制說明:"【上學期原修微積分Ｂ一MATH103004(黃柏鈞老師)同學選課優先,第3次選課起開放】",第一二專長對應:"化學工程(第一專長)	資訊工程(第二專長)	資訊工程(第一專長)	醫學科學(第一專長)	數據科學(第二專長)	經濟(第一專長)	電機資訊(第一專長)	工業工程與工程管理(第一專長)	生命科學(第一專長)	動力機械工程(第二專長)	動力機械工程(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"醫科系111B  必修	生科系111B  必修	生科院學士班111B  必修	"},{科號:"11120MATH104005",課程中文名稱:"微積分Ｂ二",課程英文名稱:"Calculus II",學分數:"3",人限:"170",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程上150分鐘,其餘時間教授彈性運用,上課大門口全家旁,演習課為R19:00-21:00,地點台達103,104,108,109",停開註記:"",教室與上課時間:`GEN IV綜四121	T3T4R3R4
`,授課教師:`顏東勇	YAN, DUNG-YUNG
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>微積分一-成績需D以上<BR>微積分Ａ一-成績需D以上<BR>微積分Ｂ一-成績需D以上<BR>微積分一(數學系)-成績需D以上<BR>曾修微積分一(數學系)(基本科目免修測試)<BR>曾修微積分Ａ一(基本科目免修測試)<BR>曾修微積分Ｂ一(基本科目免修測試)<BR><br>上述條件任選一科，則不擋修。</div>`,課程限制說明:"【上學期原修微積分Ｂ一MATH103005(顏東勇老師)同學選課優先,第3次選課起開放】",第一二專長對應:"化學工程(第一專長)	資訊工程(第二專長)	資訊工程(第一專長)	醫學科學(第一專長)	數據科學(第二專長)	經濟(第一專長)	電機資訊(第一專長)	工業工程與工程管理(第一專長)	生命科學(第一專長)	動力機械工程(第二專長)	動力機械工程(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"資工系111BA 必修	資工系111BB 必修	資工系111BC 必修	"},{科號:"11120MATH104006",課程中文名稱:"微積分Ｂ二",課程英文名稱:"Calculus II",學分數:"3",人限:"120",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"上課時間10:10-11:25am。演習課時間為W19:00-21:00，地點台積103,104,206",停開註記:"",教室與上課時間:`GEN III綜三 201	T3T4R3R4
`,授課教師:`宋瓊珠	SUNG, CHIUNG-JUE
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>微積分一-成績需D以上<BR>微積分Ａ一-成績需D以上<BR>微積分Ｂ一-成績需D以上<BR>微積分一(數學系)-成績需D以上<BR>曾修微積分一(數學系)(基本科目免修測試)<BR>曾修微積分Ａ一(基本科目免修測試)<BR>曾修微積分Ｂ一(基本科目免修測試)<BR><br>上述條件任選一科，則不擋修。</div>`,課程限制說明:"【上學期原修微積分Ｂ一MATH103006(宋瓊珠老師)同學選課優先,第3次選課起開放】",第一二專長對應:"化學工程(第一專長)	資訊工程(第二專長)	資訊工程(第一專長)	醫學科學(第一專長)	數據科學(第二專長)	經濟(第一專長)	電機資訊(第一專長)	工業工程與工程管理(第一專長)	生命科學(第一專長)	動力機械工程(第二專長)	動力機械工程(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"經濟系111BA 必修	經濟系111BB 必修	科管院學士班111B  必修	"},{科號:"11120MATH104007",課程中文名稱:"微積分Ｂ二",課程英文名稱:"Calculus II",學分數:"3",人限:"140",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"150 mins per week. Recitation courses in EDU 309, 313, 7-9 pm every Wed",停開註記:"",教室與上課時間:`DELTA台達107	T3T4R3R4
`,授課教師:`李卓彥	LEE, CHEUK YIN
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>微積分一-成績需D以上<BR>微積分Ａ一-成績需D以上<BR>微積分Ｂ一-成績需D以上<BR>微積分一(數學系)-成績需D以上<BR>曾修微積分一(數學系)(基本科目免修測試)<BR>曾修微積分Ａ一(基本科目免修測試)<BR>曾修微積分Ｂ一(基本科目免修測試)<BR><br>上述條件任選一科，則不擋修。</div>`,課程限制說明:"【上學期原修微積分Ｂ一MATH103007(李卓彥老師)同學選課優先,第3次選課起開放】",第一二專長對應:"化學工程(第一專長)	資訊工程(第二專長)	資訊工程(第一專長)	醫學科學(第一專長)	數據科學(第二專長)	經濟(第一專長)	電機資訊(第一專長)	工業工程與工程管理(第一專長)	生命科學(第一專長)	動力機械工程(第二專長)	動力機械工程(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120MATH104008",課程中文名稱:"微積分Ｂ二",課程英文名稱:"Calculus II",學分數:"3",人限:"88",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程上150分鐘，其餘時間由教授彈性運用。演習課時間為R19:00-21:00，地點為綜三119、201。",停開註記:"",教室與上課時間:`MXIC旺宏243	T3T4R3R4
`,授課教師:`王偉成	WANG, WEI-CHENG
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>微積分一-成績需D以上<BR>微積分Ａ一-成績需D以上<BR>微積分Ｂ一-成績需D以上<BR>微積分一(數學系)-成績需D以上<BR>曾修微積分一(數學系)(基本科目免修測試)<BR>曾修微積分Ａ一(基本科目免修測試)<BR>曾修微積分Ｂ一(基本科目免修測試)<BR><br>上述條件任選一科，則不擋修。</div>`,課程限制說明:"【上學期原修微積分Ｂ一MATH103008(廖軒毅老師)同學選課優先,第3次選課起開放】",第一二專長對應:"化學工程(第一專長)	資訊工程(第二專長)	資訊工程(第一專長)	醫學科學(第一專長)	數據科學(第二專長)	經濟(第一專長)	電機資訊(第一專長)	工業工程與工程管理(第一專長)	生命科學(第一專長)	動力機械工程(第二專長)	動力機械工程(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"化工系111B  必修	工工系111B  必修	工學院學士班111B  必修	材料系111BA 必修	材料系111BB 必修	"},{科號:"11120MATH142000",課程中文名稱:"線性代數二",課程英文名稱:"Linear Algebra II",學分數:"3",人限:"120",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"演習課時間為T19:00-21:00，地點為綜三118、119、201",停開註記:"",教室與上課時間:`GEN III綜三 201	T7W5W6
`,授課教師:`卓士堯	JOW, SHIN-YAO
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>線性代數一-成績需D以上<BR>線性代數-成績需D以上<BR><br>上述條件任選一科，則不擋修。</div>`,課程限制說明:"【上學期原修線性代數一MATH141000(卓士堯老師)同學選課優先,第3次選課起開放】",第一二專長對應:"數據科學(第二專長)	數學(第二專長)	數學(第一專長)",學分學程對應:"(跨領域)金融數學學分學程",不可加簽說明:"",必選修說明:"數學系111BA 必修	數學系111BB 必修	理學院學士班111B  必修	"},{科號:"11120MATH153000",課程中文名稱:"數學導論",課程英文名稱:"Introduction to Mathematics",學分數:"3",人限:"111",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"第三次選課起開放全校大學部1年級學生修習",停開註記:"",教室與上課時間:`GEN III綜三 101	M5M6F6
`,授課教師:`蔡孟傑	CHUAH, MENG KIAT
`,擋修說明:"",課程限制說明:"限數學系大學部1年級,理學院學士班大學部1年級",第一二專長對應:"數學(第二專長)	數學(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"數學系111BA 選修	數學系111BB 選修	"},{科號:"11120MATH172000",課程中文名稱:"程式設計二",課程英文名稱:"Introduction to Programming II",學分數:"3",人限:"47",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`GEN III綜三315	R7R8R9
`,授課教師:`卓綵倫	CHO, TSAI-LUN
`,擋修說明:"",課程限制說明:"限數學系大學部清班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"數學系111BA 必修	"},{科號:"11120MATH180000",課程中文名稱:"認識數學",課程英文名稱:"Elementary Introduction to Modern Mathematics",學分數:"1",人限:"120",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`GEN III綜三 201	T6
`,授課教師:`黃皓瑋	HAO-WEI HUANG
`,擋修說明:"",課程限制說明:"數學系大學部優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"數學系108BA 選修	數學系108BB 選修	數學系109BA 選修	數學系109BB 選修	數學系110BA 選修	數學系110BB 選修	數學系111BA 選修	數學系111BB 選修	"},{科號:"11120MATH202001",課程中文名稱:"高等微積分二",課程英文名稱:"Advanced Calculus II",學分數:"4",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"演習課時間為M19:00-21:00，地點為綜三107、201",停開註記:"",教室與上課時間:`GEN III綜三 119	T1T2F1F2
`,授課教師:`江金城	JIANG, JIN-CHENG
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>高等微積分一-成績需D以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"【上學期原修高等微積分一MATH201001(江金城老師)同學選課優先,第3次選課起開放】",第一二專長對應:"數學(第二專長)	數學(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"數學系110BA 必修	數學系110BB 必修	理學院學士班110B  必修	"},{科號:"11120MATH202002",課程中文名稱:"高等微積分二",課程英文名稱:"Advanced Calculus II",學分數:"4",人限:"57",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"演習課時間為M19:00-21:00，地點為綜三203",停開註記:"",教室與上課時間:`GEN III綜三 203	T1T2F1F2
`,授課教師:`邱鴻麟	CHIU,HUNG-LIN
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>高等微積分一-成績需D以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"【上學期原修高等微積分一MATH201002(邱鴻麟老師)同學選課優先,第3次選課起開放】",第一二專長對應:"數學(第二專長)	數學(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"數學系110BA 必修	數學系110BB 必修	理學院學士班110B  必修	"},{科號:"11120MATH242000",課程中文名稱:"代數二",課程英文名稱:"Algebra II",學分數:"3",人限:"110",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"演習課時間為W19:00-21:00，地點為綜三107、115",停開註記:"",教室與上課時間:`GEN III綜三 203	M3M4W2
`,授課教師:`張介玉	CHANG, CHIEH-YU
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>代數-成績需D以上<BR>代數一-成績需D以上<BR><br>上述條件任選一科，則不擋修。</div>`,課程限制說明:"【上學期原修代數一MATH241000(張介玉老師)同學選課優先,第3次選課起開放】",第一二專長對應:"數學(第二專長)	數學(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"數學系110BA 選修	數學系110BB 必修	理學院學士班110B  必修	"},{科號:"11120MATH282000",課程中文名稱:"統計學",課程英文名稱:"Statistics",學分數:"3",人限:"80",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`GEN III綜三 203	T3T4R4
`,授課教師:`黃榮臣	HUWANG, LONG-CHEEN
`,擋修說明:"",課程限制說明:"限數學系,理學院學士班",第一二專長對應:"數據科學(第二專長)	數學(第二專長)	數學(第一專長)",學分學程對應:"(跨領域)金融數學學分學程/(跨領域)人工智慧與應用基礎學分學程/(跨領域)音樂科技與健康學分學程/(跨領域)神經科學學分學程",不可加簽說明:"",必選修說明:"數學系110BA 必修	數學系110BB 選修	"},{科號:"11120MATH287000",課程中文名稱:"離散數學",課程英文名稱:"Discrete Mathematics",學分數:"3",人限:"120",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"演習課時間為R19:00~21:00。數學組二擇一必選修。應數組二(三)擇一必選修。",停開註記:"",教室與上課時間:`GEN III綜三 201	W7W8W9
`,授課教師:`潘戍衍	PAN, SHU-YEN
`,擋修說明:"",課程限制說明:"數學系大學部2年級3年級4年級優先，第3次選課起開放全校修習",第一二專長對應:"工業工程與工程管理(第二專長)	數學(第二專長)	數學(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"數學系108BA 選修	數學系108BB 選修	數學系109BA 選修	數學系109BB 選修	數學系110BA 選修	數學系110BB 選修	"},{科號:"11120MATH305000",課程中文名稱:"複變數函數論",課程英文名稱:"Complex Analysis",學分數:"4",人限:"120",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"演習課時間為T19:00~21:00",停開註記:"",教室與上課時間:`GEN III綜三 201	M5M6R5R6
`,授課教師:`程守慶	CHEN, SO-CHIN
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>高等微積分一-成績需C-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"數學系大學部3年級4年級優先，第3次選課起開放全校修習",第一二專長對應:"數學(第二專長)	數學(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"數學系108BA 選修	數學系108BB 選修	數學系109BA 必修	數學系109BB 必修	理學院學士班109B  必修	"},{科號:"11120MATH341000",課程中文名稱:"幾何作圖",課程英文名稱:"Geometric Construction",學分數:"3",人限:"47",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`GEN III綜三315	W7W8W9
`,授課教師:`全任重	CHUAN, JEN-CHUNG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"數學系108BA 選修	數學系108BB 選修	數學系109BA 選修	數學系109BB 選修	"},{科號:"11120MATH362000",課程中文名稱:"幾何二",課程英文名稱:"Geometry II",學分數:"3",人限:"58",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程上150分鐘，演習課時間為T9。數學組三擇一必選修。",停開註記:"",教室與上課時間:`GEN III綜三 203	T8T9R7R8
`,授課教師:`陳俊成	CHEN, JIUN-CHENG
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>幾何一-成績需D以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"【上學期原修幾何一MATH361000(陳俊成老師)同學選課優先,第3次選課起開放】",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"數學系108BA 選修	數學系108BB 選修	數學系109BA 選修	數學系109BB 選修	"},{科號:"11120MATH428000",課程中文名稱:"偏微分方程導論",課程英文名稱:"Introduction to Partial Differential  Equations",學分數:"3",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"上課時間10:10-11:25am。演習課時間為R 19:00-21:00。應數組二(三)擇一必選修。",停開註記:"",教室與上課時間:`GEN III綜三 115	M3M4R3R4
`,授課教師:`蔡東和	TSAI, DONG-HO
`,擋修說明:"",課程限制說明:"數學系大學部3年級4年級優先，第3次選課起開放全校修習",第一二專長對應:"數學(第二專長)	數學(第一專長)",學分學程對應:"(跨領域)金融數學學分學程",不可加簽說明:"",必選修說明:"數學系108BA 選修	數學系108BB 選修	數學系109BA 選修	數學系109BB 選修	"},{科號:"11120MATH501000",課程中文名稱:"基礎數學通論",課程英文名稱:"Graduate Calculus and Linear Algebra",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`GEN III綜三 530	T4R3R4
`,授課教師:`高淑蓉	KAO, SHU-JUNG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"數學系111D  選修	數學系111MA 選修	數學系111MB 選修	"},{科號:"11120MATH504000",課程中文名稱:"泛函分析二",課程英文名稱:"Functional Analysis II",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`GEN III綜三 118	W5W6R7
`,授課教師:`黃皓瑋	HAO-WEI HUANG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"數學系111D  選修	數學系111MA 選修	數學系111MB 選修	"},{科號:"11120MATH514000",課程中文名稱:"實變數函數論二",課程英文名稱:"Real Analysis II",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`GEN III綜三 631	T4R3R4
`,授課教師:`蔡志強	TSAI, JE-CHIANG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"數學系108BA 選修	數學系108BB 選修	數學系111D  選修	數學系111MA 選修	數學系111MB 選修	"},{科號:"11120MATH525100",課程中文名稱:"常微分方程二",課程英文名稱:"Ordinary Differential Equations II",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`GEN III綜三 115	T5T6T7
`,授課教師:`陳國璋	CHEN, KUO-CHANG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"數學系111D  選修	數學系111MA 選修	數學系111MB 選修	"},{科號:"11120MATH536000",課程中文名稱:"古典力學",課程英文名稱:"Classical Mechanics",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"本課程為16週課程。",停開註記:"",教室與上課時間:`GEN III綜三 101	T5T6T7
`,授課教師:`吳思曄	WU, SIYE
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"數學系111D  選修	數學系111MA 選修	數學系111MB 選修	"},{科號:"11120MATH542000",課程中文名稱:"近世代數二",課程英文名稱:"Modern Algebra II",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`GEN III綜三 723	T2W3W4
`,授課教師:`魏福村	WEI, FU-TSUN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"數學系111D  選修	數學系111MA 選修	數學系111MB 選修	"},{科號:"11120MATH555500",課程中文名稱:"編碼論",課程英文名稱:"Coding Theory",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`GEN III綜三 631	T7T8T9
`,授課教師:`潘戍衍	PAN, SHU-YEN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"數學系111D  選修	數學系111MA 選修	數學系111MB 選修	"},{科號:"11120MATH562000",課程中文名稱:"李代數",課程英文名稱:"Lie Algebras",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`GEN III綜三 734	W5W6F5
`,授課教師:`蔡孟傑	CHUAH, MENG KIAT
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"數學系111D  選修	數學系111MA 選修	數學系111MB 選修	"},{科號:"11120MATH572000",課程中文名稱:"微分幾何二",課程英文名稱:"Differential Geometry II",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`GEN III綜三 203	MnM5M6
`,授課教師:`何南國	HO, NAN-KUO
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"數學系111D  選修	數學系111MA 選修	數學系111MB 選修	"},{科號:"11120MATH580000",課程中文名稱:"廣義函數論",課程英文名稱:"Generalized Function",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`GEN III綜三 107	M3M4F3F4
`,授課教師:`李大中	LEE, TAI-CHUNG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"數學系111D  選修	數學系111MA 選修	數學系111MB 選修	"},{科號:"11120MATH594000",課程中文名稱:"科學計算",課程英文名稱:"Scientific Computing",學分數:"3",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"應數組常微分方程一與科學計算擇一必修。上課時間T 13:20-15:10pm，R 13:10-14:00pm。",停開註記:"",教室與上課時間:`GEN III綜三 734	T5T6R5
`,授課教師:`朱家杰	CHU, CHIA-CHIEH
`,擋修說明:"",課程限制說明:"",第一二專長對應:"數據科學(第二專長)",學分學程對應:"(跨領域)數據科學學分學程",不可加簽說明:"",必選修說明:"計科所111M  選修	數學系111D  選修	數學系111MA 選修	數學系111MB 選修	"},{科號:"11120MATH602000",課程中文名稱:"論文研究",課程英文名稱:"Thesis",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限數學所碩二以上修習",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"排除數學系碩士班1年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"數學系111MA 必修	數學系111MB 必修	"},{科號:"11120MATH607700",課程中文名稱:"隨機微分方程",課程英文名稱:"Stochastic Differential Equations",學分數:"3",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`GEN III綜三 631	W3W4F4
`,授課教師:`蔡志強	TSAI, JE-CHIANG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"數學系111D  選修	數學系111MA 選修	數學系111MB 選修	"},{科號:"11120MATH664300",課程中文名稱:"幾何分析導論",課程英文名稱:"Introduction to Geometric Analysis",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"上課時間T 14:45-16:00pm，W 10:10-11:25pm。",停開註記:"",教室與上課時間:`GEN III綜三 530	T6T7W3W4
`,授課教師:`宋瓊珠	SUNG, CHIUNG-JUE
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"數學系111D  選修	數學系111MA 選修	數學系111MB 選修	"},{科號:"11120MATH666000",課程中文名稱:"辛幾何導論",課程英文名稱:"Introduction to Symplectic Geometry",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`GEN III綜三 631	FnF5F6
`,授課教師:`何南國	HO, NAN-KUO
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>微分幾何一-成績需B-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"數學系111D  選修	數學系111MA 選修	數學系111MB 選修	"},{科號:"11120MATH702000",課程中文名稱:"論文研究",課程英文名稱:"Thesis",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限數學所博二以上修習",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"排除數學系博士班1年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"數學系111D  必修	"},{科號:"11120MATH717200",課程中文名稱:"學術演講",課程英文名稱:"Disquisition",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"博一及碩士班必修，地點為綜三201",停開註記:"",教室與上課時間:`GEN III綜三 201	M7M8
`,授課教師:`黃皓瑋	HAO-WEI HUANG
`,擋修說明:"",課程限制說明:"限數學系碩士班博士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"數學系111D  必修	數學系111MA 必修	數學系111MB 必修	"},{科號:"11120MBA 500000",課程中文名稱:"論文",課程英文名稱:"Thesis",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限專二以上修習",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"限MBA專班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"MBA專班111P  必修	MBA專班111PA 必修	"},{科號:"11120MBA 500100",課程中文名稱:"行銷管理",課程英文名稱:"Marketing Management",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:"",授課教師:`丘宏昌	CHIU, HUNG-CHANG
`,擋修說明:"",課程限制說明:"限MBA專班專班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:"MBA專班111P  必修	"},{科號:"11120MBA 501100",課程中文名稱:"策略",課程英文名稱:"Strategy",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:"",授課教師:`洪世章	HUNG, SHIH-CHANG
`,擋修說明:"",課程限制說明:"限MBA專班專班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:"MBA專班111P  必修	"},{科號:"11120MBA 501600",課程中文名稱:"科技與服務產業專題",課程英文名稱:"Topics on Technology and Service Industry",學分數:"2",人限:"60",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`TSMC台積901	S8S9
`,授課教師:`史欽泰	SHIH, CHIN-TAY
羅達賢	LO, TA-HSIEN
`,擋修說明:"",課程限制說明:"限EMBA專班專班,EMBA雙聯專班,健康經管專班專班,MBA專班專班,財金專班專班,公共政策與管理碩士專班專班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:"EMBA專班111P  選修	EMBA雙聯111P  選修	健康經管專班111P  選修	MBA專班111P  選修	財金專班111P  選修	公共政策與管理碩士專班111P  選修	"},{科號:"11120MBA 501900",課程中文名稱:"商務溝通",課程英文名稱:"Business Communication",學分數:"1",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`TSMC台積901	Mc
`,授課教師:`金聯舫	KIN, LIEN-FANG
`,擋修說明:"",課程限制說明:"限MBA專班專班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:"MBA專班111P  選修	"},{科號:"11120MBA 502600",課程中文名稱:"企業個案分析",課程英文名稱:"Business Case Analysis",學分數:"2",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:"",授課教師:`王俊程	WANG, JYUN-CHENG
`,擋修說明:"",課程限制說明:"限MBA專班專班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:"MBA專班111P  必修	"},{科號:"11120MBA 503100",課程中文名稱:"科技與社會",課程英文名稱:"Science, Technology and Society",學分數:"2",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`TSMC台積903	S8S9
`,授課教師:`林昀嫺	LIN, YUN-HSIEN
李傳楷	LEE, CHUAN-KAI
`,擋修說明:"",課程限制說明:"限EMBA專班專班,MBA專班專班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:"EMBA專班111P  選修	MBA專班111P  選修	"},{科號:"11120MBA 503400",課程中文名稱:"新市場策略",課程英文名稱:"New market strategy",學分數:"2",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`TSMC台積903	WaWb
`,授課教師:`吳清炎	WU. CHING-YAN
`,擋修說明:"",課程限制說明:"限EMBA專班專班,MBA專班專班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:"EMBA專班111P  選修	MBA專班111P  選修	"},{科號:"11120MBA 503500",課程中文名稱:"國際企業管理",課程英文名稱:"International Business Management",學分數:"1",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"全英文授課",停開註記:"",教室與上課時間:`TSMC台積903	T1
`,授課教師:`王振源	WONG CHAN YUAN
`,擋修說明:"",課程限制說明:"限EMBA專班專班,MBA專班專班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:"EMBA專班111P  選修	MBA專班111P  選修	"},{科號:"11120MBA 503900",課程中文名稱:"使用資料視覺化進行商業分析",課程英文名稱:"Business Analytics Using Data Visualization",學分數:"1",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"全英文授課",停開註記:"",教室與上課時間:`TSMC台積406	Ta
`,授課教師:`徐茉莉	SHMUELI, GALIT
`,擋修說明:"",課程限制說明:"限MBA專班專班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:"MBA專班111P  選修	"},{科號:"11120MBA 505800",課程中文名稱:"組織行為",課程英文名稱:"Organizational Behavior",學分數:"2",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`TSMC台積903	S5S6
`,授課教師:`胡美智	HU,MEI-CHIH
`,擋修說明:"",課程限制說明:"限MBA專班專班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:"MBA專班111P  必修	"},{科號:"11120MBA 554100",課程中文名稱:"數位經濟與法律",課程英文名稱:"Digital Economy and Law",學分數:"2",人限:"25",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`Kinmen金門中心	FaFb
`,授課教師:`彭心儀	PENG, SHIN-YI
`,擋修說明:"",課程限制說明:"限MBA專班專班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:"MBA專班111PA 選修	"},{科號:"11120MBA 556100",課程中文名稱:"管理資訊系統",課程英文名稱:"Management Information Systems",學分數:"2",人限:"25",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`Kinmen金門中心	SbSc
`,授課教師:`許裴舫	HSU, PEI-FANG
`,擋修說明:"",課程限制說明:"限MBA專班專班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:"MBA專班111PA 必修	"},{科號:"11120MFB 500600",課程中文名稱:"金融風險管理",課程英文名稱:"Financial Risk Management",學分數:"3",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"週日上午課程",停開註記:"",教室與上課時間:"",授課教師:`鍾經樊	CHUNG, CHING-FAN
`,擋修說明:"",課程限制說明:"限財金專班專班1年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:"財金專班111P  選修	"},{科號:"11120MFB 500800",課程中文名稱:"財經個案研討",課程英文名稱:"Case Studies in Business and Finance",學分數:"3",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"週六上午課程",停開註記:"",教室與上課時間:`TSMC台積902	S2S3S4
`,授課教師:`余士迪	YU, SHIH-TI
`,擋修說明:"",課程限制說明:"限財金專班專班1年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:"財金專班111P  選修	"},{科號:"11120MFB 500900",課程中文名稱:"投資組合管理",課程英文名稱:"Portfolio Management",學分數:"3",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"週日下午課程",停開註記:"",教室與上課時間:"",授課教師:`索樂晴	SO, LEH-CHYAN
`,擋修說明:"",課程限制說明:"限財金專班專班1年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:"財金專班111P  必修	"},{科號:"11120MFB 501300",課程中文名稱:"財金法律個案",課程英文名稱:"Case Studies: A Law and Finance Perspective",學分數:"3",人限:"25",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"週日課程",停開註記:"",教室與上課時間:"",授課教師:`蔡昌憲	TSAI, CHANG-HSIEN
林哲群	LIN, CHE-CHUN
`,擋修說明:"",課程限制說明:"限健康經管專班專班,財金專班專班,公共政策與管理碩士專班專班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:"健康經管專班111P  選修	財金專班111P  選修	公共政策與管理碩士專班111P  選修	"},{科號:"11120MFB 501700",課程中文名稱:"跨域數位金融",課程英文名稱:" ",學分數:"2",人限:"0",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"此課程由系所加簽",停開註記:"",教室與上課時間:"",授課教師:`黃裕烈	HUANG, YU-LIEH
`,擋修說明:"",課程限制說明:"限財金專班專班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:"財金專班111P  選修	"},{科號:"11120MFB 501900",課程中文名稱:"公司財務策略與公司治理",課程英文名稱:"Corporate financial strategy and corporate governance",學分數:"3",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"週六下午課程",停開註記:"",教室與上課時間:`TSMC台積902	S5S6S7
`,授課教師:`謝佩芳	HSIEH, PEI-FANG
`,擋修說明:"",課程限制說明:"限財金專班專班1年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:"財金專班111P  選修	"},{科號:"11120MFB 502000",課程中文名稱:"財富管理實務",課程英文名稱:"Practical Wealth Management",學分數:"2",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"週六課程",停開註記:"停開",教室與上課時間:"",授課教師:`陳怡芬	CHEN, YI-FEN
馬瑞辰	MA, JUI-CHEN
翁禮祺	WENG, LI-CHI
`,擋修說明:"",課程限制說明:"限財金專班專班2年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"財金專班111P  選修	"},{科號:"11120MFB 502200",課程中文名稱:"研究方法與學術倫理",課程英文名稱:"Introduction to Research Methods and Academic Ethics",學分數:"2",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"週日課程",停開註記:"",教室與上課時間:"",授課教師:`黃裕烈	HUANG, YU-LIEH
`,擋修說明:"",課程限制說明:"限財金專班專班2年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:"財金專班111P  選修	"},{科號:"11120MFB 509900",課程中文名稱:"論文",課程英文名稱:"Thesis",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限專二以上修習",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"限財金專班2年級3年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"財金專班111P  必修	"},{科號:"11120MI  100001",課程中文名稱:"全民國防教育軍事訓練--國防科技",課程英文名稱:"All-out Defense Education Military Training-Defense Technology",學分數:"2",人限:"85",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限本國籍生修習",停開註記:"",教室與上課時間:`GEN I綜一 168	T5T6
`,授課教師:`郭瀚濤	KUO,HAN-TAO
`,擋修說明:"",課程限制說明:"排除外籍生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120MI  100002",課程中文名稱:"全民國防教育軍事訓練--國防科技",課程英文名稱:"All-out Defense Education Military Training-Defense Technology",學分數:"2",人限:"85",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限本國籍生修習",停開註記:"",教室與上課時間:`GEN I綜一 168	T7T8
`,授課教師:`郭瀚濤	KUO,HAN-TAO
`,擋修說明:"",課程限制說明:"排除外籍生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120MPM 500400",課程中文名稱:"實證研究方法一",課程英文名稱:"Empirical research methods Ⅰ",學分數:"3",人限:"35",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`TSMC台積431	S2S3S4
`,授課教師:`王惠貞	WANG, HUI-CHEN
李宜	LEE, YI
林世昌	LIN, SHIH-CHANG
`,擋修說明:"",課程限制說明:"限公共政策與管理碩士專班碩士班專班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:"公共政策與管理碩士專班111P  必修	"},{科號:"11120MPM 500500",課程中文名稱:"總體經濟分析",課程英文名稱:"Macroeconomic Analysis",學分數:"3",人限:"35",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`TSMC台積431	S5S6S7
`,授課教師:`黃朝熙	HUANG, CHAO-HSI
祁玉蘭	CHYI, YIH-LUAN
盧姝璇	LU, SHU-SHIUAN
`,擋修說明:"",課程限制說明:"限公共政策與管理碩士專班碩士班專班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:"公共政策與管理碩士專班111P  必修	"},{科號:"11120MPM 501100",課程中文名稱:"大數據與政策專題",課程英文名稱:"Topics in Big Data and Policy",學分數:"3",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`TSMC台積430	S5S6S7
`,授課教師:`林靜儀	LIN, CHING-YI
林世昌	LIN, SHIH-CHANG
余朝恩	YU, CHAO-EN
`,擋修說明:"",課程限制說明:"限公共政策與管理碩士專班碩士班2年級3年級4年級專班2年級3年級4年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:"公共政策與管理碩士專班111P  必修	"},{科號:"11120MPM 501700",課程中文名稱:"永續發展與治理",課程英文名稱:"Sustainable Development and Management",學分數:"2",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`TSMC台積902	S8S9
`,授課教師:`廖肇寧	LIAO, CHAO-NING
吳世英	WU, SHIH-YING
`,擋修說明:"",課程限制說明:"限公共政策與管理碩士專班專班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:"公共政策與管理碩士專班111P  選修	"},{科號:"11120MPM 501900",課程中文名稱:"台灣政經發展專題",課程英文名稱:"The Political and Economic Development of Taiwan",學分數:"3",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`TSMC台積902	FaFbFc
`,授課教師:`趙相科	CHAO, HSIANG-KE
李翎帆	LI, LING-FAN
郭俊宏	KUO, CHUN-HUNG
`,擋修說明:"",課程限制說明:"限公共政策與管理碩士專班專班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:"公共政策與管理碩士專班111P  選修	"},{科號:"11120MPM 502000",課程中文名稱:"頂尖智庫：史丹佛大學胡佛研究所",課程英文名稱:"Top Think Tank: The Hoover Institution at Stanford University",學分數:"3",人限:"0",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"此課程由系所加簽",停開註記:"",教室與上課時間:`TSMC台積431	T2T3T4
`,授課教師:`趙相科	CHAO, HSIANG-KE
`,擋修說明:"",課程限制說明:"限公共政策與管理碩士專班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:"公共政策與管理碩士專班111P  選修	"},{科號:"11120MPM 509900",課程中文名稱:"論文",課程英文名稱:"Thesis",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限專二以上修習",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"限公共政策與管理碩士專班專班2年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:"公共政策與管理碩士專班111P  必修	"},{科號:"11120MS  102201",課程中文名稱:"材料科學與工程二",課程英文名稱:"Material Science and Engineering II",學分數:"3",人限:"70",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"本課程上150分鐘,其餘時間由教授彈性運用",停開註記:"",教室與上課時間:`MS材料418	W3W4F3F4
`,授課教師:`游萃蓉	YEW, TRI-RUNG
`,擋修說明:"",課程限制說明:"限材料系大學部",第一二專長對應:"材料科學工程(第二專長)	材料科學工程(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"材料系111BA 必修	材料系111BB 必修	"},{科號:"11120MS  102202",課程中文名稱:"材料科學與工程二",課程英文名稱:"Material Science and Engineering II",學分數:"3",人限:"100",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"課程上150分鐘,其餘時間由教授彈性運用",停開註記:"",教室與上課時間:`GEN IV綜四224	W3W4F3F4
`,授課教師:`葉安洲	YEH, AN-CHOU
`,擋修說明:"",課程限制說明:"限材料系大學部",第一二專長對應:"材料科學工程(第二專長)	材料科學工程(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"材料系111BA 必修	材料系111BB 必修	"},{科號:"11120MS  102203",課程中文名稱:"材料科學與工程二",課程英文名稱:"Material Science and Engineering II",學分數:"3",人限:"80",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"本課程上150分鐘,其餘時間教授彈性運用",停開註記:"",教室與上課時間:`DELTA台達B03	T7T8W7W8
`,授課教師:`廖建能	LIAO, CHIEN-NENG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"材料科學工程(第二專長)	材料科學工程(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120MS  103200",課程中文名稱:"普通化學二",課程英文名稱:"General Chemistry (II)",學分數:"3",人限:"150",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"本課程上150分鐘，其餘時間由教授彈性運用。院學士班同學第二專長選【化學】者不可選修",停開註記:"",教室與上課時間:`DELTA台達B03	M3M4W1W2
`,授課教師:`龔佩雲	KENG, PEI-YUIN
`,擋修說明:"",課程限制說明:"限工學院學士班大學部,材料系大學部",第一二專長對應:"化學工程(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"材料系111BA 必修	材料系111BB 必修	"},{科號:"11120MS  201200",課程中文名稱:"工程數學二",課程英文名稱:"Engineering Mathematics II",學分數:"3",人限:"150",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"每週150分鐘,其餘為彈性補課時間",停開註記:"",教室與上課時間:`DELTA台達B05	T3T4R3R4
`,授課教師:`嚴大任	YEN, TA-JEN
`,擋修說明:`<div>
  擋修對象 : 材料系大學部 <br>
  先修科目 : <BR><BR>曾修微積分一<BR>曾修高等微積分一<BR>曾修高等微積分二<BR>曾修微積分二<BR>曾修微積分Ａ一<BR>曾修微積分Ｂ一<BR>曾修微積分Ｂ二<BR>曾修微積分一(數學系)<BR>曾修微積分二(數學系)<BR>曾修微積分Ａ二<BR>曾修微積分一(數學系)(基本科目免修測試)<BR>曾修微積分Ａ一(基本科目免修測試)<BR>曾修微積分Ｂ一(基本科目免修測試)<BR><br>上述條件任選一科，則不擋修。</div>`,課程限制說明:"限材料系大學部2年級3年級4年級",第一二專長對應:"材料科學工程(第二專長)	材料科學工程(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"材料系110BA 必修	材料系110BB 必修	"},{科號:"11120MS  202200",課程中文名稱:"材料熱力學二",課程英文名稱:"Thermodynamics of Materials II",學分數:"3",人限:"200",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"本課程上150分鐘,其餘時間由教授視情形彈性運用",停開註記:"",教室與上課時間:`DELTA台達璟德	M3M4W1W2
`,授課教師:`朱英豪	CHU, YING-HAO
`,擋修說明:`<div>
  擋修對象 : 材料系大學部 <br>
  先修科目 : <BR><BR>曾修微積分一<BR>曾修高等微積分一<BR>曾修高等微積分二<BR>曾修微積分二<BR>曾修微積分Ａ一<BR>曾修微積分Ｂ一<BR>曾修微積分Ｂ二<BR>曾修微積分一(數學系)<BR>曾修微積分二(數學系)<BR>曾修微積分Ａ二<BR>曾修微積分一(數學系)(基本科目免修測試)<BR>曾修微積分Ａ一(基本科目免修測試)<BR>曾修微積分Ｂ一(基本科目免修測試)<BR><br>上述條件任選一科，則不擋修。</div>`,課程限制說明:"限工學院學士班大學部2年級3年級4年級,材料系大學部2年級3年級4年級",第一二專長對應:"材料科學工程(第二專長)	材料科學工程(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"材料系110BA 必修	材料系110BB 必修	"},{科號:"11120MS  203000",課程中文名稱:"晶體缺陷",課程英文名稱:"Various Defects in Crystalline Materials",學分數:"3",人限:"150",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程上150分鐘,其餘時間由教授視情形彈性運用,已修過「物理治金一」者,勿修此課.",停開註記:"",教室與上課時間:`DELTA台達B05	T1T2F1F2
`,授課教師:`張守一	CHANG, SHOU-YI
`,擋修說明:"",課程限制說明:"工學院學士班大學部2年級3年級4年級,材料系大學部2年級3年級4年級優先，第3次選課起開放全校修習",第一二專長對應:"材料科學工程(第二專長)	材料科學工程(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"材料系110BA 必修	材料系110BB 必修	"},{科號:"11120MS  207200",課程中文名稱:"電子學",課程英文名稱:"Electronics",學分數:"3",人限:"150",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程上150分鐘,其餘時間由教授彈性運用",停開註記:"",教室與上課時間:`DELTA台達B03	W3W4F3F4
`,授課教師:`林皓武	LIN, HAO-WU
`,擋修說明:`<div>
  擋修對象 : 材料系大學部 <br>
  先修科目 : <BR><BR>曾修微積分一<BR>曾修高等微積分一<BR>曾修高等微積分二<BR>曾修微積分二<BR>曾修微積分Ａ一<BR>曾修微積分Ｂ一<BR>曾修微積分Ｂ二<BR>曾修微積分一(數學系)<BR>曾修微積分二(數學系)<BR>曾修微積分Ａ二<BR>曾修微積分一(數學系)(基本科目免修測試)<BR>曾修微積分Ａ一(基本科目免修測試)<BR>曾修微積分Ｂ一(基本科目免修測試)<BR><br>上述條件任選一科，則不擋修。</div>`,課程限制說明:"材料系大學部2年級3年級4年級優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"(跨領域)微系統科技整合學分學程",不可加簽說明:"",必選修說明:"材料系108BA 選修	材料系108BB 選修	材料系109BA 選修	材料系109BB 選修	材料系110BA 選修	材料系110BB 選修	"},{科號:"11120MS  300301",課程中文名稱:"材料實驗一",課程英文名稱:"Laboratories of Materials I",學分數:"2",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`MS材料515	T7T8T9
`,授課教師:`顏宏	YEN, HUNG
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>曾修材料科學<BR>曾修材料科學導論一<BR>曾修材料科學與工程一<BR>曾修材料科學與工程二<BR>曾修材料科學導論<BR><br>上述條件任選一科，則不擋修。</div>`,課程限制說明:"限材料系大學部3年級4年級華班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"材料系109BB 必修	"},{科號:"11120MS  300302",課程中文名稱:"材料實驗一",課程英文名稱:"Laboratories of Materials I",學分數:"2",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`MS材料515	M7M8M9
`,授課教師:`顏宏	YEN, HUNG
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>曾修材料科學<BR>曾修材料科學導論一<BR>曾修材料科學與工程一<BR>曾修材料科學與工程二<BR>曾修材料科學導論<BR><br>上述條件任選一科，則不擋修。</div>`,課程限制說明:"限材料系大學部3年級4年級華班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"材料系109BB 必修	"},{科號:"11120MS  301100",課程中文名稱:"材料科技論壇",課程英文名稱:"The Forum of Materials Science and Technology",學分數:"1",人限:"170",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`DELTA台達璟德	F5F6
`,授課教師:`陳學仕	CHEN, HSUEH-SHIH
蔡哲瑋	TSAI, TSE-WEI
`,擋修說明:"",課程限制說明:"限材料系大學部3年級4年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"材料系109BA 必修	材料系109BB 必修	"},{科號:"11120MS  301300",課程中文名稱:"擴散與相變化",課程英文名稱:"Diffusion and Phase Transformation",學分數:"3",人限:"200",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程上150分鐘,其餘時間由教授彈性運用",停開註記:"",教室與上課時間:`DELTA台達璟德	T1T2F1F2
`,授課教師:`葉哲寧	YEH, CHE-NING
`,擋修說明:`<div>
  擋修對象 : 材料系大學部 <br>
  先修科目 : <BR><BR>曾修化學數學<BR>曾修應用數學<BR>曾修工程數學一<BR>曾修經濟數學一<BR>曾修離散數學<BR>曾修基礎數學通論<BR>曾修工程數學二<BR>曾修應用數學一<BR>曾修應用數學二<BR>曾修物理數學<BR><br>上述條件任選一科，則不擋修。</div>`,課程限制說明:"限材料系大學部3年級4年級",第一二專長對應:"材料科學工程(第二專長)	材料科學工程(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"材料系109BA 必修	材料系109BB 必修	"},{科號:"11120MS  302200",課程中文名稱:"材料之物理性質",課程英文名稱:"The Physical Properties of Materials",學分數:"3",人限:"150",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程上150分鐘,其餘時間由教授視情形彈性運用。",停開註記:"",教室與上課時間:`DELTA台達B05	W3W4F3F4
`,授課教師:`呂明諺	LU, MING-YEN
`,擋修說明:`<div>
  擋修對象 : 材料系大學部 <br>
  先修科目 : <BR><BR>曾修化學數學<BR>曾修應用數學<BR>曾修工程數學一<BR>曾修經濟數學一<BR>曾修離散數學<BR>曾修基礎數學通論<BR>曾修工程數學二<BR>曾修應用數學一<BR>曾修應用數學二<BR>曾修物理數學<BR><br>上述條件任選一科，則不擋修。</div>`,課程限制說明:"限材料系大學部3年級4年級",第一二專長對應:"材料科學工程(第二專長)	材料科學工程(第一專長)",學分學程對應:"(跨領域)奈米與光電半導體產業學分學程/(跨領域)奈米科技學分學程",不可加簽說明:"",必選修說明:"材料系109BA 必修	材料系109BB 必修	"},{科號:"11120MS  303201",課程中文名稱:"材料實驗二",課程英文名稱:"Laboratories of Materials II",學分數:"2",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"物性實驗(物性實驗、陶瓷實驗擇一修習)",停開註記:"",教室與上課時間:`MS材料101	T7T8T9
`,授課教師:`羅韶奇	LO, SHAO-CHI
`,擋修說明:`<div>
  擋修對象 : 材料系大學部 <br>
  先修科目 : <BR><BR>曾修材料科學<BR>曾修材料科學導論一<BR>曾修材料科學與工程一<BR>曾修材料科學與工程二<BR>曾修材料科學導論<BR><br>上述條件任選一科，則不擋修。</div>`,課程限制說明:"限材料系大學部3年級4年級清班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"材料系109BA 必修	"},{科號:"11120MS  303202",課程中文名稱:"材料實驗二",課程英文名稱:"Laboratories of Materials II",學分數:"2",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"陶瓷實驗(物性實驗、陶瓷實驗擇一修習),",停開註記:"",教室與上課時間:`MS材料130	M7M8M9
`,授課教師:`陳翰儀	CHEN, HAN-YI
`,擋修說明:`<div>
  擋修對象 : 材料系大學部 <br>
  先修科目 : <BR><BR>曾修材料科學<BR>曾修材料科學導論一<BR>曾修材料科學與工程一<BR>曾修材料科學與工程二<BR>曾修材料科學導論<BR><br>上述條件任選一科，則不擋修。</div>`,課程限制說明:"限材料系大學部3年級4年級清班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"材料系109BA 必修	"},{科號:"11120MS  308200",課程中文名稱:"陶瓷材料",課程英文名稱:"Ceramic Materials",學分數:"3",人限:"60",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`DELTA台達B08	M3M4R7
`,授課教師:`李嘉甄	LI, CHIA-CHEN
`,擋修說明:`<div>
  擋修對象 : 材料系大學部 <br>
  先修科目 : <BR><BR>曾修材料科學<BR>曾修材料科學導論一<BR>曾修材料科學與工程一<BR>曾修材料科學與工程二<BR>曾修材料科學導論<BR><br>上述條件任選一科，則不擋修。</div>`,課程限制說明:"",第一二專長對應:"材料科學工程(第二專長)	材料科學工程(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"材料系108BA 選修	材料系108BB 選修	材料系109BA 選修	材料系109BB 選修	材料系111D  選修	材料系111M  選修	"},{科號:"11120MS  309100",課程中文名稱:"高分子材料",課程英文名稱:"Polymer Materials",學分數:"3",人限:"120",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`DELTA台達B05	W7W8W9
`,授課教師:`楊長謀	YANG, ARNOLD CHANG-MOU
`,擋修說明:`<div>
  擋修對象 : 材料系大學部 <br>
  先修科目 : <BR><BR>曾修材料科學<BR>曾修材料科學導論一<BR>曾修材料科學與工程一<BR>曾修材料科學與工程二<BR>曾修材料科學導論<BR><br>上述條件任選一科，則不擋修。</div>`,課程限制說明:"",第一二專長對應:"材料科學工程(第二專長)	材料科學工程(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"材料系108BA 選修	材料系108BB 選修	材料系109BA 選修	材料系109BB 選修	材料系111D  選修	材料系111M  選修	"},{科號:"11120MS  400600",課程中文名稱:"材料分析",課程英文名稱:"Materials Analysis",學分數:"3",人限:"150",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`DELTA台達B05	M7M8W6
`,授課教師:`林姿瑩	LIN, TZU-YING
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"材料系108BA 選修	材料系108BB 選修	材料系109BA 選修	材料系109BB 選修	材料系111D  選修	材料系111M  選修	"},{科號:"11120MS  401200",課程中文名稱:"材料科學專題二",課程英文名稱:"Special Topics on Materials Science II",學分數:"2",人限:"80",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"不列入27專業選修,自行洽詢本系指導教授,開學2週內交指導老師確認卡至台達402，並回覆網址：https://forms.",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"材料系108BA 選修	材料系108BB 選修	材料系109BA 選修	材料系109BB 選修	材料系110BA 選修	材料系110BB 選修	"},{科號:"11120MS  402200",課程中文名稱:"製造工程學二",課程英文名稱:"Manufacturing Engineering and Technologies (II)",學分數:"3",人限:"150",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程上150分鐘，其餘時間由教授視情形彈性運用",停開註記:"",教室與上課時間:`DELTA台達璟德	M1M2R1R2
`,授課教師:`葉均蔚	YEH, JIEN-WEI
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"材料系108BA 選修	材料系108BB 選修	材料系109BA 選修	材料系109BB 選修	材料系110BA 選修	材料系110BB 選修	材料系111D  選修	材料系111M  選修	"},{科號:"11120MS  414300",課程中文名稱:"顯示器材料原理與技術",課程英文名稱:"Introduction to Display Materials Technology",學分數:"3",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`DELTA台達B08	W7W8W9
`,授課教師:`陳學仕	CHEN, HSUEH-SHIH
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)光電學分學程",不可加簽說明:"",必選修說明:"材料系108BA 選修	材料系108BB 選修	材料系109BA 選修	材料系109BB 選修	材料系111D  選修	材料系111M  選修	"},{科號:"11120MS  435100",課程中文名稱:"OLED導論",課程英文名稱:"Introduction of OLED",學分數:"3",人限:"150",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`MS材料511	T7T8T9
`,授課教師:`周卓煇	JOU, JWO-HUEI
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>未修過有機光電材料導論<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)影像顯示科技學分學程/(跨領域)光電學分學程",不可加簽說明:"",必選修說明:"材料系108BA 選修	材料系108BB 選修	材料系109BA 選修	材料系109BB 選修	材料系110BA 選修	材料系110BB 選修	材料系111D  選修	材料系111M  選修	"},{科號:"11120MS  500000",課程中文名稱:"書報討論",課程英文名稱:"Seminar",學分數:"1",人限:"200",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`DELTA台達璟德	R7R8
`,授課教師:`徐文光	HSU, WEN-KUANG
`,擋修說明:"",課程限制說明:"材料系碩士班博士班,前瞻產博學程碩士班博士班優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"材料系111D  必修	材料系111M  必修	"},{科號:"11120MS  501200",課程中文名稱:"固態熱力學",課程英文名稱:"Thermodynamics of Solid State",學分數:"3",人限:"130",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"博士班同學若碩士已修習過此科者請勿再修習。建議先修課程：一般熱力學、微積分、材料科學導論",停開註記:"",教室與上課時間:`MS材料418	T3T4R3R4
`,授課教師:`彭宗平	PERNG, TSONG-PYNG
`,擋修說明:"",課程限制說明:"材料系碩士班博士班,前瞻產博學程碩士班博士班優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"半導體學院111D  選修	半導體學院111M  選修	材料系111D  必修	材料系111M  必修	"},{科號:"11120MS  502200",課程中文名稱:"電子顯微鏡學",課程英文名稱:"Transmission Electron Microscopy",學分數:"3",人限:"150",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"本課程上150分鐘,其餘時間由教授視情形彈性運用",停開註記:"",教室與上課時間:`DELTA台達B03	T5T6R5R6
`,授課教師:`闕郁倫	CHUEH, YU-LUN
`,擋修說明:"",課程限制說明:"半導體學院,材料系,前瞻產博學程優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"半導體學院111D  選修	半導體學院111M  選修	材料系111D  選修	材料系111M  選修	"},{科號:"11120MS  503200",課程中文名稱:"Ｘ光繞射結晶學",課程英文名稱:"X-Ray Crystallography",學分數:"3",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`DELTA台達B02	M3M4W5W6
`,授課教師:`歐陽浩	OUYANG, HAO
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"材料系111D  選修	材料系111M  選修	"},{科號:"11120MS  504100",課程中文名稱:"材料動力學",課程英文名稱:"Kinetic Process of Materials",學分數:"3",人限:"70",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"本課程上4小時，博士班同學若碩士已修習過此科者請勿再修習",停開註記:"",教室與上課時間:`MS材料511	W3W4F3F4
`,授課教師:`陳盈潔	CHEN, YING-CHIEH
`,擋修說明:"",課程限制說明:"材料系碩士班博士班,前瞻產博學程碩士班博士班優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"半導體學院111D  選修	半導體學院111M  選修	材料系111D  必修	材料系111M  必修	"},{科號:"11120MS  505300",課程中文名稱:"科技人如何投資你的職涯、生活、和財富",課程英文名稱:"How to invest in your career, life, and wealth",學分數:"2",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"停開",教室與上課時間:`DELTA台達B08	W5W6
`,授課教師:`陳學仕	CHEN, HSUEH-SHIH
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)創新創業學分學程",不可加簽說明:"",必選修說明:"材料系108BA 選修	材料系108BB 選修	材料系111D  選修	材料系111M  選修	"},{科號:"11120MS  507200",課程中文名稱:"仿生材料導論",課程英文名稱:"Introduction to Bio-inspired and Bio-mimetic Materials",學分數:"3",人限:"60",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`DELTA台達B08	W2W3W4
`,授課教師:`陳柏宇	CHEN, PO-YU
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"材料系108BA 選修	材料系108BB 選修	材料系111D  選修	材料系111M  選修	"},{科號:"11120MS  521400",課程中文名稱:"電化學儲能材料",課程英文名稱:"Electrochemical Energy Storage Materials",學分數:"3",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`DELTA台達B09	W5W6W7
`,授課教師:`陳翰儀	CHEN, HAN-YI
`,擋修說明:"",課程限制說明:"材料系,前瞻產博學程優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"材料系108BA 選修	材料系108BB 選修	材料系111D  選修	材料系111M  選修	"},{科號:"11120MS  525100",課程中文名稱:"奈米碳管專論",課程英文名稱:"Carbon Nanotubes",學分數:"3",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`DELTA台達B08	M7M8M9
`,授課教師:`徐文光	HSU, WEN-KUANG
`,擋修說明:"",課程限制說明:"限材料系,前瞻產博學程",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"材料系111D  選修	材料系111M  選修	"},{科號:"11120MS  526100",課程中文名稱:"磁性薄膜：製程、分析與模擬",課程英文名稱:"The magnetic thin film: film growth, characterization and simulation",學分數:"3",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`DELTA台達B07	T3T4R6
`,授課教師:`歐陽浩	OUYANG, HAO
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"材料系108BA 選修	材料系108BB 選修	材料系111D  選修	材料系111M  選修	"},{科號:"11120MS  530300",課程中文名稱:"二維量子材料之量測技術",課程英文名稱:"Measurements of two-dimensional quantum materials",學分數:"3",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`DELTA台達B02	T5T6T7
`,授課教師:`李奕賢	LEE, YI-HSIEN
`,擋修說明:"",課程限制說明:"半導體學院碩士班博士班,材料系碩士班博士班,前瞻產博學程碩士班博士班優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"半導體學院111D  選修	半導體學院111M  選修	材料系111D  選修	材料系111M  選修	"},{科號:"11120MS  531300",課程中文名稱:"高分子製程",課程英文名稱:"Polymer Synthesis and Polymer-coated Nanoparticles",學分數:"3",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`DELTA台達B07	W5W6F4
`,授課教師:`龔佩雲	KENG, PEI-YUIN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"材料系108BA 選修	材料系108BB 選修	材料系111D  選修	材料系111M  選修	"},{科號:"11120MS  536400",課程中文名稱:"組織工程與再生醫學",課程英文名稱:"Tissue Engineering & Regenerative Medicine",學分數:"3",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`DELTA台達B08	F5F6F7
`,授課教師:`王子威	WANG, TZU-WEI
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)醫學科技學分學程",不可加簽說明:"",必選修說明:"材料系108BA 選修	材料系108BB 選修	材料系111D  選修	材料系111M  選修	"},{科號:"11120MS  540400",課程中文名稱:"半導體製程",課程英文名稱:"Semiconductor Processing",學分數:"3",人限:"132",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`MS材料511	R2R3R4
`,授課教師:`游萃蓉	YEW, TRI-RUNG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)奈米與光電半導體產業學分學程/(跨領域)奈米科技學分學程",不可加簽說明:"",必選修說明:"半導體學院111D  選修	半導體學院111M  選修	材料系111D  選修	材料系111M  選修	"},{科號:"11120MS  540600",課程中文名稱:"先進半導體技術",課程英文名稱:"Advanced Technologies of Semiconductor and Display",學分數:"3",人限:"250",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限大三以上,應用材料公司半導體與顯示器技術最新技術專題課程,已修過「半導體與顯示器製程技術」者請勿修習",停開註記:"",教室與上課時間:`DELTA台達璟德	T7T8T9
`,授課教師:`王寶琪	WANG, PAO-C HI
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>未修過半導體與顯示器製程技術<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"半導體學院111D  選修	半導體學院111M  選修	材料系108BA 選修	材料系108BB 選修	材料系109BA 選修	材料系109BB 選修	材料系111D  選修	材料系111M  選修	"},{科號:"11120MS  552200",課程中文名稱:"材料損壞分析",課程英文名稱:"Failure analysis of Materials",學分數:"3",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`DELTA台達B02	M7M8M9
`,授課教師:`張士欽	CHANG, SHIH-CHIN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"材料系108BA 選修	材料系108BB 選修	材料系111D  選修	材料系111M  選修	"},{科號:"11120MS  559000",課程中文名稱:"高熵材料特論",課程英文名稱:"Special Issues on High-Entropy Materials",學分數:"3",人限:"150",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`DELTA台達B05	T7T8T9
`,授課教師:`葉均蔚	YEH, JIEN-WEI
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"材料系108BA 選修	材料系108BB 選修	材料系109BA 選修	材料系109BB 選修	材料系111D  選修	材料系111M  選修	"},{科號:"11120MS  590100",課程中文名稱:"生醫材料:技術移轉與商化應用",課程英文名稱:"Biomaterials in Technology Transfer and Commercialization",學分數:"1",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"112年4/24-5/5密集授課6天(詳課綱)（18：30~21：30），台達B02。",停開註記:"",教室與上課時間:`DELTA台達B02	Ma
`,授課教師:`賴志遠	LAI,JRIUAN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"材料系108BA 選修	材料系108BB 選修	材料系111D  選修	材料系111M  選修	"},{科號:"11120MS  600000",課程中文名稱:"論文研究",課程英文名稱:"Thesis",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限材料所碩二以上修習",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"排除材料系碩士班1年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"材料系111M  必修	"},{科號:"11120MS  622000",課程中文名稱:"電子顯微鏡微分析",課程英文名稱:"Microanalysis in Electron Microscopy",學分數:"3",人限:"80",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`MS材料418	M2M3M4
`,授課教師:`杜正恭	DUH, JENQ-GONG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"材料系111D  選修	材料系111M  選修	"},{科號:"11120MS  654000",課程中文名稱:"奈米材料特性與應用",課程英文名稱:"Properties and Applications of Nanostructured Materials",學分數:"3",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`DELTA台達B09	T7T8T9
`,授課教師:`吳志明	WU, JYH-MING
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"材料系108BA 選修	材料系108BB 選修	材料系109BA 選修	材料系109BB 選修	材料系111D  選修	材料系111M  選修	"},{科號:"11120MS  800000",課程中文名稱:"論文研究",課程英文名稱:"Thesis",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限材料所博二以上修習",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"排除材料系博士班1年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"材料系111D  必修	"},{科號:"11120NEMS500000",課程中文名稱:"書報討論",課程英文名稱:"Seminar",學分數:"1",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`ENG I工一 108	M7M8
`,授課教師:`葉哲良	YEH, JER-LIANG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"奈微所111D  必修	奈微所111M  必修	"},{科號:"11120NEMS510100",課程中文名稱:"微感測器及量測系統之訊號處理",課程英文名稱:"Microsensor and Microinstrument System",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`DELTA台達301	R2R3R4
`,授課教師:`李昇憲	LI, SHENG-SHIAN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)微系統科技整合學分學程/(跨領域)奈微米機電元件與系統全英語學分學程",不可加簽說明:"",必選修說明:"奈微所111M  選修	"},{科號:"11120NEMS511000",課程中文名稱:"奈微米元件量測實驗",課程英文名稱:"Measurements of Nano and Micro devices",學分數:"3",人限:"32",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"奈微所應屆畢業第一優先、奈微所非應屆畢業第二優先，第3次選課起開放全校修習",停開註記:"",教室與上課時間:`ENG I工一 201	F2F3F4
`,授課教師:`羅丞曜	LO, CHENG-YAO
馮國華	FENG, GUO-HUA
傅建中	FU, CHIEN-CHUNG
葉哲良	YEH, JER-LIANG
陳致真	CHEN, CHIH-CHEN
北森武彥	Takehiko Kitamori
`,擋修說明:"",課程限制說明:"奈微所碩士班博士班優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"奈微所111D  必修	奈微所111M  必修	"},{科號:"11120NEMS520100",課程中文名稱:"微機電構裝技術與可靠度",課程英文名稱:"MEMS Packaging and Reliability",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`ENG I工一 213	T2T3T4
`,授課教師:`饒達仁	YAO, DA-JENG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)微系統科技整合學分學程",不可加簽說明:"",必選修說明:"奈微所111M  選修	"},{科號:"11120NEMS550200",課程中文名稱:"微流體系統",課程英文名稱:"Introduction to Microfluidics Systems",學分數:"3",人限:"10",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`DELTA台達322	F5F6F7
`,授課教師:`許佳賢	HSU, CHIA-HSIEN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"奈微所111M  選修	"},{科號:"11120NEMS581000",課程中文名稱:"微致動器與智能材料",課程英文名稱:"Microactuators and Smart Materials",學分數:"3",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`ENG I工一 210	W5W6W7
`,授課教師:`馮國華	FENG, GUO-HUA
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"奈微所111M  選修	"},{科號:"11120NEMS582400",課程中文名稱:"當代光電工程",課程英文名稱:"Contemporary Optoelectronics Engineering",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`DELTA台達321	R2R3R4
`,授課教師:`羅丞曜	LO, CHENG-YAO
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"奈微所111M  選修	"},{科號:"11120NEMS583000",課程中文名稱:"電子式奈米生醫感測器",課程英文名稱:"Electronic Biomedical Nanosensor",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`DELTA台達321	R6R7R8
`,授課教師:`王玉麟	WANG, YU-LIN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)奈米與光電半導體產業學分學程/(跨領域)奈米科技學分學程",不可加簽說明:"",必選修說明:"半導體學院111D  選修	半導體學院111M  選修	奈微所111M  選修	"},{科號:"11120NEMS583200",課程中文名稱:"奈米電子及奈米技術",課程英文名稱:"Nanoelectronics and nanotechnology",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`DELTA台達322	T6T7T8
`,授課教師:`王玉麟	WANG, YU-LIN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)奈米與光電半導體產業學分學程/(跨領域)奈米科技學分學程/(跨領域)奈微米機電元件與系統全英語學分學程",不可加簽說明:"",必選修說明:"奈微所111M  選修	"},{科號:"11120NEMS584200",課程中文名稱:"細胞生物、胞外泌體及生物科技基礎",課程英文名稱:"Fundamentals of Cell Biology, Extracellular Vesicles and Biotechnology",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`DELTA台達321	T5T6T7
`,授課教師:`陳致真	CHEN, CHIH-CHEN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"奈微所111M  選修	"},{科號:"11120NEMS600000",課程中文名稱:"論文研究",課程英文名稱:"Thesis",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限奈微所碩二以上修習",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"排除奈微所碩士班1年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"奈微所111M  必修	"},{科號:"11120NEMS800000",課程中文名稱:"論文研究",課程英文名稱:"Thesis",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限奈微所博二以上修習",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"排除奈微所博士班1年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"奈微所111D  必修	"},{科號:"11120NES 500000",課程中文名稱:"專題演講",課程英文名稱:"Colloquium",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`ESS工科NE69	W7W8
`,授課教師:`藍貫哲	LAN, KUAN-CHE
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"核工所111D  必修	核工所111M  必修	"},{科號:"11120NES 505500",課程中文名稱:"蒙特卡羅計算",課程英文名稱:"Monte Carlo Method",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程上150分鐘，其餘時間由教授視情形彈性運用",停開註記:"",教室與上課時間:`ESS工科 302	W3W4F3F4
`,授課教師:`許榮鈞	SHEU, RONG-JIUN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)醫學物理學分學程",不可加簽說明:"",必選修說明:"核工所111D  選修	核工所111M  選修	"},{科號:"11120NES 509000",課程中文名稱:"放射線與物質作用",課程英文名稱:"Interaction of Radiation with Matter",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`LTM綠能203	M6M7M8
`,授課教師:`林明緯	LIN, MING-WEI
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"核工所111D  選修	核工所111M  選修	"},{科號:"11120NES 521100",課程中文名稱:"輻射度量",課程英文名稱:"Radiation Detection  and Measurement",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`LTM綠能203	R6R7R8
`,授課教師:`林明緯	LIN, MING-WEI
`,擋修說明:"",課程限制說明:"",第一二專長對應:"核工與能源(第二專長)",學分學程對應:"(跨領域)先進能源研究生學分學程/(跨領域)醫學物理學分學程",不可加簽說明:"",必選修說明:"原科院學士班109B  選修	核工所111D  選修	核工所111M  選修	"},{科號:"11120NES 523300",課程中文名稱:"進階放射生物學",課程英文名稱:"Advanced Radiation Biology",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`LTM綠能202	R5R6R7
`,授課教師:`陳芳馨	FANG-HSIN CHEN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)醫學物理學分學程",不可加簽說明:"",必選修說明:"核工所111D  選修	核工所111M  選修	"},{科號:"11120NES 525000",課程中文名稱:"保健物理",課程英文名稱:"Health Physics",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`LTM綠能202	T2T3T4
`,授課教師:`蔡惠予	TSAI, HUI-YU
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)醫學物理學分學程",不可加簽說明:"",必選修說明:"核工所111D  選修	核工所111M  選修	"},{科號:"11120NES 525100",課程中文名稱:"放射治療物理學",課程英文名稱:"Radiation Therapy Physics",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`LTM綠能202	T5T6T7
`,授課教師:`徐椿壽	CHUI, CHEN-SHOU
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)醫學物理學分學程",不可加簽說明:"",必選修說明:"核工所111D  選修	核工所111M  選修	"},{科號:"11120NES 525200",課程中文名稱:"醫學影像物理學",課程英文名稱:"Medical Imaging Physics",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`LTM綠能202	M3M4Mn
`,授課教師:`蔡惠予	TSAI, HUI-YU
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)醫學物理學分學程",不可加簽說明:"",必選修說明:"核工所111D  選修	核工所111M  選修	"},{科號:"11120NES 545000",課程中文名稱:"核電廠安全度評估",課程英文名稱:"Nuclear Power Plant Risk Assessment",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`LTM綠能202	MaMbMc
`,授課教師:`趙椿長	CHAO, CHUN-CHANG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"核工所111D  選修	核工所111M  選修	"},{科號:"11120NES 549000",課程中文名稱:"核能發電與除役實務",課程英文名稱:"Nuclear Power Generation and Decommission Practice",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`LTM綠能203	R2R3R4
`,授課教師:`黃毓皓	 
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"核工所111D  選修	核工所111M  選修	"},{科號:"11120NES 591000",課程中文名稱:"核電廠水化學",課程英文名稱:"Water Chemistry in Nuclear Power Plants",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"本課程上150分鐘,其餘時間教師彈性運用",停開註記:"",教室與上課時間:`LTM綠能203	T3T4F3F4
`,授課教師:`葉宗洸	YEH, TSUNG-KUANG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"核工所111D  選修	核工所111M  選修	"},{科號:"11120NES 599003",課程中文名稱:"書報討論",課程英文名稱:"Seminar",學分數:"1",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"輻射應用組",停開註記:"",教室與上課時間:`LTM綠能202	W5W6
`,授課教師:`陳芳馨	FANG-HSIN CHEN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"核工所111D  必修	核工所111M  必修	"},{科號:"11120NES 599004",課程中文名稱:"書報討論",課程英文名稱:"Seminar",學分數:"1",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"反應器工程組",停開註記:"",教室與上課時間:`ESS工科 502	W5W6
`,授課教師:`馮玉明	FERNG, YUH-MING
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"核工所111D  必修	核工所111M  必修	"},{科號:"11120NES 599005",課程中文名稱:"書報討論",課程英文名稱:"Seminar",學分數:"1",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"以反應器工程組為主，歡迎各組同學參加",停開註記:"",教室與上課時間:`LTM綠能203	W5W6
`,授課教師:`陳紹文	CHEN, SHAO-WEN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"核工所111D  必修	核工所111M  必修	"},{科號:"11120NES 699000",課程中文名稱:"論文研究",課程英文名稱:"Thesis",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限核工所碩二以上修習",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"排除核工所碩士班1年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"核工所111M  必修	"},{科號:"11120NES 999000",課程中文名稱:"論文研究",課程英文名稱:"Thesis",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限核工所博二以上修習",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"排除核工所博士班1年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"核工所111D  必修	"},{科號:"11120NUCL100100",課程中文名稱:"原子科學導論",課程英文名稱:"Introduction to Nuclear Science",學分數:"3",人限:"178",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`ESS工科NE69	M1M2R1R2
`,授課教師:`陳芳馨	FANG-HSIN CHEN
李志浩	LEE, CHIH-HAO
蔡惠予	TSAI, HUI-YU
林曉均	Lin, Hsiao Chun
李敏	LEE, MIN
彭旭霞	PENG, HSU-HSIA
`,擋修說明:"",課程限制說明:"限原科院,大學部1年級2年級",第一二專長對應:"工程與系統科學(第一專長)	醫學物理(第二專長)	核工與能源(第二專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"醫環系111B  必修	工科系111BA 必修	工科系111BB 必修	原科院學士班111B  必修	"},{科號:"11120PE  112001",課程中文名稱:"重量訓練",課程英文名稱:"Weight Training",學分數:"0",人限:"46",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"選修一、五下午體育課須參加4/22(六)環校路跑,患有重大傷病或特殊病史同學請主動向授課老師說明以提供協助",停開註記:"",教室與上課時間:`WT Rm.重訓室	M5M6
`,授課教師:`李柏均	LEE, PO-CHUN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  112002",課程中文名稱:"跆拳道",課程英文名稱:"Tae kwon do",學分數:"0",人限:"46",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"選修一、五下午體育課須參加4/22(六)環校路跑,患有重大傷病或特殊病史同學請主動向授課老師說明以提供協助",停開註記:"",教室與上課時間:`PEC柔道教室	M5M6
`,授課教師:`戴偉國	TAI, WEI-KUO
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  112003",課程中文名稱:"網球初學",課程英文名稱:"Tennis(basic)",學分數:"0",人限:"32",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"選修一、五下午體育課須參加4/22(六)環校路跑,患有重大傷病或特殊病史同學請主動向授課老師說明以提供協助",停開註記:"",教室與上課時間:`Stadium網球場	M5M6
`,授課教師:`鄭為仁	CHENG, WEI-JEN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  112004",課程中文名稱:"慢壘",課程英文名稱:"Softball",學分數:"0",人限:"46",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"選修一、五下午體育課須參加4/22(六)環校路跑,患有重大傷病或特殊病史同學請主動向授課老師說明以提供協助",停開註記:"",教室與上課時間:`Stadium棒球場	M5M6
`,授課教師:`徐志翔	HSU, CHIH-HSIANG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  112005",課程中文名稱:"舞蹈即興創作",課程英文名稱:"Dance Improvisation",學分數:"0",人限:"46",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"選修一、五下午體育課須參加4/22(六)環校路跑,患有重大傷病或特殊病史同學請主動向授課老師說明以提供協助",停開註記:"",教室與上課時間:`Dance Rm舞蹈教室	M5M6
`,授課教師:`王嬿婷	WANG, YEN-TING
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  112006",課程中文名稱:"羽球初學",課程英文名稱:"Badminton",學分數:"0",人限:"32",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"須著乾淨室內運動鞋。選修一、五下午體育課須參加4/22(六)環校路跑。有重大傷病或特殊病史請主動告知。",停開註記:"",教室與上課時間:`alum Gym校友PE館	M5M6
`,授課教師:`林國威	LIN, KUO-WEI
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  112007",課程中文名稱:"健走與慢跑",課程英文名稱:"Exercise walking and jogging",學分數:"0",人限:"46",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"選修一、五下午體育課須參加4/22(六)環校路跑,患有重大傷病或特殊病史同學請主動向授課老師說明以提供協助",停開註記:"",教室與上課時間:`Stadium田徑場	M5M6
`,授課教師:`周宜辰	CHOU, YI-CHEN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  112008",課程中文名稱:"SUP 立式划槳",課程英文名稱:"Stand up Paddle",學分數:"0",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"第1週未到課者勿選本課,須能夠游完50M來回,共100M腳不落地。須參加4/22(六)環校路跑。有特殊疾病請主動告知",停開註記:"",教室與上課時間:`SWIM Pl.游泳池	M5M6
`,授課教師:`陳國華	TAN KOK HWA
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  112009",課程中文名稱:"籃球女",課程英文名稱:"Basketball",學分數:"0",人限:"46",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"選修一、五下午體育課須參加4/22(六)環校路跑,患有重大傷病或特殊病史同學請主動向授課老師說明以提供協助",停開註記:"",教室與上課時間:`Gym體育館2F	M5M6
`,授課教師:`謝文偉	HSIEH, WEN-WEI
`,擋修說明:"",課程限制說明:"限女生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  112010",課程中文名稱:"重量訓練",課程英文名稱:"Weight Training",學分數:"0",人限:"46",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"選修一、五下午體育課須參加4/22(六)環校路跑,患有重大傷病或特殊病史同學請主動向授課老師說明以提供協助",停開註記:"",教室與上課時間:`WT Rm.重訓室	M7M8
`,授課教師:`周宜辰	CHOU, YI-CHEN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  112011",課程中文名稱:"跆拳道進階",課程英文名稱:"Tae kwon do (advance)",學分數:"0",人限:"46",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"選修一、五下午體育課須參加4/22(六)環校路跑,患有重大傷病或特殊病史同學請主動向授課老師說明以提供協助",停開註記:"",教室與上課時間:`PEC柔道教室	M7M8
`,授課教師:`戴偉國	TAI, WEI-KUO
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  112012",課程中文名稱:"網球初學",課程英文名稱:"Tennis(basic)",學分數:"0",人限:"32",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"選修一、五下午體育課須參加4/22(六)環校路跑,患有重大傷病或特殊病史同學請主動向授課老師說明以提供協助",停開註記:"",教室與上課時間:`Stadium網球場	M7M8
`,授課教師:`鄭為仁	CHENG, WEI-JEN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  112013",課程中文名稱:"游泳初學",課程英文名稱:"Swimming(basic)",學分數:"0",人限:"46",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"選修一、五下午體育課須參加4/22(六)環校路跑,患有重大傷病或特殊病史同學請主動向授課老師說明以提供協助",停開註記:"",教室與上課時間:`SWIM Pl.游泳池	M7M8
`,授課教師:`徐志翔	HSU, CHIH-HSIANG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  112014",課程中文名稱:"舞蹈即興創作",課程英文名稱:"Dance Improvisation",學分數:"0",人限:"46",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"選修一、五下午體育課須參加4/22(六)環校路跑,患有重大傷病或特殊病史同學請主動向授課老師說明以提供協助",停開註記:"",教室與上課時間:`Dance Rm舞蹈教室	M7M8
`,授課教師:`王嬿婷	WANG, YEN-TING
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  112015",課程中文名稱:"羽球初學",課程英文名稱:"Badminton",學分數:"0",人限:"32",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"須著乾淨室內運動鞋。選修一、五下午體育課須參加4/22(六)環校路跑。有重大傷病或特殊病請主動告知",停開註記:"",教室與上課時間:`alum Gym校友PE館	M7M8
`,授課教師:`林國威	LIN, KUO-WEI
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  112016",課程中文名稱:"桌球初學",課程英文名稱:"Ping pong(basic)",學分數:"0",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"前12週在南大校區第2學生活動中心上課,須參加4/22(六)環校路跑,患重大傷病或特殊病史請向授課老師說明",停開註記:"",教室與上課時間:`Old Gym桌球場	F5F6
`,授課教師:`陳光紫	CHEN, KUANG-TZU
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  112017",課程中文名稱:"網球初學",課程英文名稱:"Tennis(basic)",學分數:"0",人限:"32",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"選修一、五下午體育課須參加4/22(六)環校路跑,患有重大傷病或特殊病史同學請主動向授課老師說明以提供協助",停開註記:"",教室與上課時間:`Stadium網球場	F5F6
`,授課教師:`簡敏惠	CHIEN, MIN-HUI
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  112018",課程中文名稱:"流行舞蹈",課程英文名稱:"Pop Dance",學分數:"0",人限:"46",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"須著乾淨室內運動鞋。選修一、五下午體育課須參加4/22(六)環校路跑。有重大傷病或特殊病史請主動告知",停開註記:"",教室與上課時間:`alum Gym校友PE館	F5F6
`,授課教師:`黃靖琄	HUANG,CHING-CHUAN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  112019",課程中文名稱:"跆拳道",課程英文名稱:"Tae kwon do",學分數:"0",人限:"46",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"選修一、五下午體育課須參加4/22(六)環校路跑,患有重大傷病或特殊病史同學請主動向授課老師說明以提供協助",停開註記:"",教室與上課時間:`PEC柔道教室	F5F6
`,授課教師:`戴偉國	TAI, WEI-KUO
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  112020",課程中文名稱:"重量訓練",課程英文名稱:"Weight Training",學分數:"0",人限:"46",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"選修一、五下午體育課須參加4/22(六)環校路跑,患有重大傷病或特殊病史同學請主動向授課老師說明以提供協助",停開註記:"",教室與上課時間:`WT Rm.重訓室	F5F6
`,授課教師:`林家傑	LIN, CHIA-CHIEH
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  112021",課程中文名稱:"健走與慢跑",課程英文名稱:"Exercise walking and jogging",學分數:"0",人限:"46",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"選修一、五下午體育課須參加4/22(六)環校路跑,患有重大傷病或特殊病史同學請主動向授課老師說明以提供協助",停開註記:"",教室與上課時間:`Stadium田徑場	F5F6
`,授課教師:`張祐華	CHANG, YU-HUA
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  112022",課程中文名稱:"慢壘",課程英文名稱:"Softball",學分數:"0",人限:"46",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"選修一、五下午體育課須參加4/22(六)環校路跑,患有重大傷病或特殊病史同學請主動向授課老師說明以提供協助",停開註記:"",教室與上課時間:`Stadium棒球場	F5F6
`,授課教師:`林琨瀚	LIN, KUN-HAN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  112023",課程中文名稱:"SUP 立式划槳",課程英文名稱:"Stand up Paddle",學分數:"0",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"第1週未到課者勿選本課,須能夠游完50M來回,共100M腳不落地。須參加4/22(六)環校路跑。有特殊疾病請主動告知",停開註記:"",教室與上課時間:`SWIM Pl.游泳池	F5F6
`,授課教師:`陳國華	TAN KOK HWA
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  112024",課程中文名稱:"籃球",課程英文名稱:"Basketball",學分數:"0",人限:"46",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"選修一、五下午體育課須參加4/22(六)環校路跑,患有重大傷病或特殊病史同學請主動向授課老師說明以提供協助",停開註記:"",教室與上課時間:`Gym體育館2F	F5F6
`,授課教師:`謝佩君	HSIEH, PEI-CHUN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  112025",課程中文名稱:"桌球初學",課程英文名稱:"Ping pong(basic)",學分數:"0",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"前12週在南大校區第2學生活動中心上課,須參加4/22(六)環校路跑,患重大傷病或特殊病史請向授課老師說明",停開註記:"",教室與上課時間:`Old Gym桌球場	F7F8
`,授課教師:`陳光紫	CHEN, KUANG-TZU
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  112026",課程中文名稱:"健走與慢跑",課程英文名稱:"Exercise walking and jogging",學分數:"0",人限:"46",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"選修一、五下午體育課須參加4/22(六)環校路跑,患有重大傷病或特殊病史同學請主動向授課老師說明以提供協助",停開註記:"",教室與上課時間:`Stadium田徑場	F7F8
`,授課教師:`林家傑	LIN, CHIA-CHIEH
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  112027",課程中文名稱:"國防菁英體適能",課程英文名稱:"National Defense Elite Physical Fitness",學分數:"0",人限:"0",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"以加簽選課，限清華學院學士班將星計畫組修習。參加環校路跑。重大傷病或特殊疾病使者請主動告知授課老師。",停開註記:"",教室與上課時間:"",授課教師:`張祐華	CHANG, YU-HUA
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  112028",課程中文名稱:"跆拳道",課程英文名稱:"Tae kwon do",學分數:"0",人限:"46",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"選修一、五下午體育課須參加4/22(六)環校路跑,患有重大傷病或特殊病史同學請主動向授課老師說明以提供協助",停開註記:"",教室與上課時間:`PEC柔道教室	F7F8
`,授課教師:`戴偉國	TAI, WEI-KUO
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  112029",課程中文名稱:"籃球",課程英文名稱:"Basketball",學分數:"0",人限:"46",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"選修一、五下午體育課須參加4/22(六)環校路跑,患有重大傷病或特殊病史同學請主動向授課老師說明以提供協助",停開註記:"",教室與上課時間:`Gym體育館2F	F7F8
`,授課教師:`謝佩君	HSIEH, PEI-CHUN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  112030",課程中文名稱:"桌球初學",課程英文名稱:"Ping pong(basic)",學分數:"0",人限:"28",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"選修一、五下午體育課須參加4/22(六)環校路跑,患有重大傷病或特殊病史同學請主動向授課老師說明以提供協助",停開註記:"",教室與上課時間:`Nanda南大C101	M5M6
`,授課教師:`何吉星	HE,CHI-HSING
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  112031",課程中文名稱:"體操",課程英文名稱:"Gymnastics",學分數:"0",人限:"46",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"選修一、五下午體育課須參加4/22(六)環校路跑,患有重大傷病或特殊病史同學請主動向授課老師說明以提供協助",停開註記:"",教室與上課時間:`Nanda南大7501	M5M6
`,授課教師:`曾德明	TSENG, TE-MING
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  112032",課程中文名稱:"重量訓練",課程英文名稱:"Weight Training",學分數:"0",人限:"46",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"選修一、五下午體育課須參加4/22(六)環校路跑,患有重大傷病或特殊病史同學請主動向授課老師說明以提供協助",停開註記:"",教室與上課時間:`Nanda南大D001	M5M6
`,授課教師:`黃惠芝	HUANG, HUI-TZU
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  112033",課程中文名稱:"桌球初學",課程英文名稱:"Ping pong(basic)",學分數:"0",人限:"28",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"選修一、五下午體育課須參加4/22(六)環校路跑,患有重大傷病或特殊病史同學請主動向授課老師說明以提供協助",停開註記:"",教室與上課時間:`Nanda南大C101	M7M8
`,授課教師:`何吉星	HE,CHI-HSING
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  112034",課程中文名稱:"體操",課程英文名稱:"Gymnastics",學分數:"0",人限:"46",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"選修一、五下午體育課須參加4/22(六)環校路跑,患有重大傷病或特殊病史同學請主動向授課老師說明以提供協助",停開註記:"",教室與上課時間:`Nanda南大7501	M7M8
`,授課教師:`曾德明	TSENG, TE-MING
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  206001",課程中文名稱:"核心肌力初學",課程英文名稱:"Core Strength(basic)",學分數:"0",人限:"46",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"須著乾淨室內運動鞋。患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:`alum Gym校友PE館	M1M2
`,授課教師:`李柏均	LEE, PO-CHUN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  206002",課程中文名稱:"桌球初學",課程英文名稱:"Ping pong(basic)",學分數:"0",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"前12週在南大校區第2學生活動中心上課,患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助",停開註記:"",教室與上課時間:`Old Gym桌球場	M1M2
`,授課教師:`鄭兆光	ZHENG, ZHAO-GUANG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  206003",課程中文名稱:"游泳進階",課程英文名稱:"Swimming(advance)",學分數:"0",人限:"46",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:`SWIM Pl.游泳池	M1M2
`,授課教師:`徐志翔	HSU, CHIH-HSIANG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  206004",課程中文名稱:"排球",課程英文名稱:"Volleyball",學分數:"0",人限:"46",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:`Gym體育館2F	M1M2
`,授課教師:`邱得全	CHIU,TE-CHUAN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  206005",課程中文名稱:"核心肌力進階",課程英文名稱:"Core Strength(advance)",學分數:"0",人限:"46",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"須著乾淨室內運動鞋。患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:`alum Gym校友PE館	M3M4
`,授課教師:`李柏均	LEE, PO-CHUN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  206006",課程中文名稱:"桌球初學",課程英文名稱:"Ping pong(basic)",學分數:"0",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"前12週在南大校區第2學生活動中心上課,患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助",停開註記:"",教室與上課時間:`Old Gym桌球場	M3M4
`,授課教師:`鄭兆光	ZHENG, ZHAO-GUANG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  206007",課程中文名稱:"游泳初學",課程英文名稱:"Swimming(basic)",學分數:"0",人限:"46",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:`SWIM Pl.游泳池	M3M4
`,授課教師:`李大麟	LEE, TA-LIN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  206008",課程中文名稱:"健走與慢跑",課程英文名稱:"Exercise walking and jogging",學分數:"0",人限:"46",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:`Stadium田徑場	M3M4
`,授課教師:`周宜辰	CHOU, YI-CHEN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  206009",課程中文名稱:"柔道",課程英文名稱:"Judo",學分數:"0",人限:"46",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:`PEC柔道教室	M3M4
`,授課教師:`劉振華	FIU, CHEN-HUA
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  206010",課程中文名稱:"排球",課程英文名稱:"Volleyball",學分數:"0",人限:"46",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:`Gym體育館2F	M3M4
`,授課教師:`邱得全	CHIU,TE-CHUAN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  206011",課程中文名稱:"高爾夫球",課程英文名稱:"Golf",學分數:"0",人限:"26",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。前三堂在視聽教室，須自付保險及練習費。",停開註記:"",教室與上課時間:"",授課教師:`謝文偉	HSIEH, WEN-WEI
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  206012",課程中文名稱:"桌球初學",課程英文名稱:"Ping pong(basic)",學分數:"0",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"前12週在南大校區第2學生活動中心上課,患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助",停開註記:"",教室與上課時間:`Old Gym桌球場	T1T2
`,授課教師:`鄭兆光	ZHENG, ZHAO-GUANG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  206013",課程中文名稱:"核心肌力",課程英文名稱:"Core Strength",學分數:"0",人限:"46",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:`Dance Rm舞蹈教室	T1T2
`,授課教師:`林國威	LIN, KUO-WEI
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  206014",課程中文名稱:"籃球初學",課程英文名稱:"Basketball(basic)",學分數:"0",人限:"46",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。＿",停開註記:"",教室與上課時間:`Gym體育館2F	T1T2
`,授課教師:`謝文偉	HSIEH, WEN-WEI
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  206015",課程中文名稱:"桌球初學",課程英文名稱:"Ping pong(basic)",學分數:"0",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"前12週在南大校區第2學生活動中心上課,患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助",停開註記:"",教室與上課時間:`Old Gym桌球場	T3T4
`,授課教師:`鄭兆光	ZHENG, ZHAO-GUANG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  206016",課程中文名稱:"重量訓練",課程英文名稱:"Weight Training",學分數:"0",人限:"46",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:`WT Rm.重訓室	T3T4
`,授課教師:`周宜辰	CHOU, YI-CHEN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  206017",課程中文名稱:"游泳初學",課程英文名稱:"Swimming(basic)",學分數:"0",人限:"46",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:`SWIM Pl.游泳池	T3T4
`,授課教師:`李大麟	LEE, TA-LIN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  206018",課程中文名稱:"瑜珈進階",課程英文名稱:"Yoga(advance)",學分數:"0",人限:"46",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:`Dance Rm舞蹈教室	T3T4
`,授課教師:`張介	CHANG, CHIEH
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  206019",課程中文名稱:"太極拳中級",課程英文名稱:"Tai Chi (Intermediate)",學分數:"0",人限:"46",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:`PEC柔道教室	T3T4
`,授課教師:`張耀庭	CHANG, YAO-TING
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  206020",課程中文名稱:"定向越野",課程英文名稱:"Orienteering",學分數:"0",人限:"46",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:`Stadium田徑場	T3T4
`,授課教師:`余杰霖	YU, CHIEH-LIN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  206021",課程中文名稱:"籃球進階",課程英文名稱:"Basketball(advance)",學分數:"0",人限:"46",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:`Gym體育館2F	T3T4
`,授課教師:`謝文偉	HSIEH, WEN-WEI
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  206022",課程中文名稱:"網球進階",課程英文名稱:"Tennis(advance)",學分數:"0",人限:"28",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:`Stadium網球場	T5T6
`,授課教師:`鄭為仁	CHENG, WEI-JEN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  206023",課程中文名稱:"足球女",課程英文名稱:"football",學分數:"0",人限:"46",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:`Stadium足球場	T5T6
`,授課教師:`張凱翔	CHANG, KAI-HSIANG
`,擋修說明:"",課程限制說明:"限女生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  206024",課程中文名稱:"棒球",課程英文名稱:"Baseball",學分數:"0",人限:"46",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:`Stadium棒球場	T5T6
`,授課教師:`林琨瀚	LIN, KUN-HAN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  206025",課程中文名稱:"重量訓練",課程英文名稱:"Weight Training",學分數:"0",人限:"46",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:`WT Rm.重訓室	T5T6
`,授課教師:`周宜辰	CHOU, YI-CHEN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  206026",課程中文名稱:"瑜珈初學",課程英文名稱:"Yoga(basic)",學分數:"0",人限:"46",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:`Dance Rm舞蹈教室	T5T6
`,授課教師:`張介	CHANG, CHIEH
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  206027",課程中文名稱:"太極拳",課程英文名稱:"Tai Chi",學分數:"0",人限:"46",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:`PEC柔道教室	T5T6
`,授課教師:`張耀庭	CHANG, YAO-TING
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  206028",課程中文名稱:"定向越野",課程英文名稱:"Orienteering",學分數:"0",人限:"46",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:`Stadium田徑場	T5T6
`,授課教師:`余杰霖	YU, CHIEH-LIN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  206029",課程中文名稱:"羽球初學",課程英文名稱:"Badminton",學分數:"0",人限:"32",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"須著乾淨室內運動鞋。患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:`alum Gym校友PE館	T5T6
`,授課教師:`許仁豪	HSU,JEN-HAO
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  206030",課程中文名稱:"游泳進階",課程英文名稱:"Swimming(advance)",學分數:"0",人限:"46",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:`SWIM Pl.游泳池	T5T6
`,授課教師:`李大麟	LEE, TA-LIN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  206031",課程中文名稱:"桌球初學",課程英文名稱:"Ping pong(basic)",學分數:"0",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"前12週在南大校區第2學生活動中心上課,患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助",停開註記:"",教室與上課時間:`Old Gym桌球場	T5T6
`,授課教師:`吳德成	WU, TE-CHENG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  206032",課程中文名稱:"排球",課程英文名稱:"Volleyball",學分數:"0",人限:"46",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:`Gym體育館2F	T5T6
`,授課教師:`邱得全	CHIU,TE-CHUAN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  206033",課程中文名稱:"網球進階",課程英文名稱:"Tennis(advance)",學分數:"0",人限:"28",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:`Stadium網球場	T7T8
`,授課教師:`鄭為仁	CHENG, WEI-JEN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  206034",課程中文名稱:"足球男",課程英文名稱:"football",學分數:"0",人限:"46",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:`Stadium足球場	T7T8
`,授課教師:`張凱翔	CHANG, KAI-HSIANG
`,擋修說明:"",課程限制說明:"限男生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  206035",課程中文名稱:"棒球",課程英文名稱:"Baseball",學分數:"0",人限:"46",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:`Stadium棒球場	T7T8
`,授課教師:`林琨瀚	LIN, KUN-HAN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  206036",課程中文名稱:"瑜珈初學",課程英文名稱:"Yoga(basic)",學分數:"0",人限:"46",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:`Dance Rm舞蹈教室	T7T8
`,授課教師:`張介	CHANG, CHIEH
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  206037",課程中文名稱:"太極拳",課程英文名稱:"Tai Chi",學分數:"0",人限:"46",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:`PEC柔道教室	T7T8
`,授課教師:`張耀庭	CHANG, YAO-TING
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  206038",課程中文名稱:"羽球進階",課程英文名稱:"Badminton(advance)",學分數:"0",人限:"32",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"須著乾淨室內運動鞋。患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:`alum Gym校友PE館	T7T8
`,授課教師:`許仁豪	HSU,JEN-HAO
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  206039",課程中文名稱:"排球",課程英文名稱:"Volleyball",學分數:"0",人限:"46",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:`Gym體育館2F	T7T8
`,授課教師:`施惠方	SZU, HUI-FANG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  206040",課程中文名稱:"籃球初學",課程英文名稱:"Basketball(basic)",學分數:"0",人限:"46",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:`Gym體育館2F	W1W2
`,授課教師:`盧淑雲	LU, SHU-YUN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  206041",課程中文名稱:"空手道",課程英文名稱:"Karate",學分數:"0",人限:"46",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:`PEC柔道教室	W1W2
`,授課教師:`劉雅甄	Ya-Chen,Liu
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  206042",課程中文名稱:"螺旋有氧",課程英文名稱:"Vortex Aerobics",學分數:"0",人限:"46",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"須著乾淨室內運動鞋。患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:`alum Gym校友PE館	W3W4
`,授課教師:`施惠方	SZU, HUI-FANG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  206043",課程中文名稱:"有氧舞蹈",課程英文名稱:"Aerobics dancing",學分數:"0",人限:"46",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:`Dance Rm舞蹈教室	W3W4
`,授課教師:`張介	CHANG, CHIEH
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  206044",課程中文名稱:"籃球初學",課程英文名稱:"Basketball(basic)",學分數:"0",人限:"46",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:`Gym體育館2F	W3W4
`,授課教師:`盧淑雲	LU, SHU-YUN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  206045",課程中文名稱:"游泳初學",課程英文名稱:"Swimming(basic)",學分數:"0",人限:"46",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:`SWIM Pl.游泳池	W3W4
`,授課教師:`李大麟	LEE, TA-LIN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  206046",課程中文名稱:"空手道",課程英文名稱:"Karate",學分數:"0",人限:"46",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:`PEC柔道教室	W3W4
`,授課教師:`劉雅甄	Ya-Chen,Liu
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  206047",課程中文名稱:"排球",課程英文名稱:"Volleyball",學分數:"0",人限:"46",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:`Gym體育館2F	W5W6
`,授課教師:`葉煌典	HSIEH, HUANG-TIEN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  206048",課程中文名稱:"足球女",課程英文名稱:"football",學分數:"0",人限:"46",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"第1週未到課者勿加簽本課,患有重大傷病或特殊病史同學請主動向授課老師說明以提供協助。不接受加簽。",停開註記:"",教室與上課時間:`Stadium足球場	W5W6
`,授課教師:`陳國華	TAN KOK HWA
`,擋修說明:"",課程限制說明:"限女生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:""},{科號:"11120PE  206049",課程中文名稱:"柔道",課程英文名稱:"Judo",學分數:"0",人限:"46",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:`PEC柔道教室	W5W6
`,授課教師:`劉振華	FIU, CHEN-HUA
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  206050",課程中文名稱:"網球初學",課程英文名稱:"Tennis(basic)",學分數:"0",人限:"32",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:`Stadium網球場	W5W6
`,授課教師:`鄭為仁	CHENG, WEI-JEN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  206051",課程中文名稱:"羽球初學",課程英文名稱:"Badminton",學分數:"0",人限:"32",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"須著乾淨室內運動鞋。患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:`alum Gym校友PE館	T3T4
`,授課教師:`許仁豪	HSU,JEN-HAO
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  206052",課程中文名稱:"螺旋有氧",課程英文名稱:"Vortex Aerobics",學分數:"0",人限:"46",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"須著乾淨室內運動鞋。患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:`alum Gym校友PE館	W5W6
`,授課教師:`施惠方	SZU, HUI-FANG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  206053",課程中文名稱:"重量訓練",課程英文名稱:"Weight Training",學分數:"0",人限:"46",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:`WT Rm.重訓室	W5W6
`,授課教師:`邱晨然	CHIU,CHEN-JAN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  206054",課程中文名稱:"瑜珈提斯",課程英文名稱:"Yogalates",學分數:"0",人限:"46",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:`Dance Rm舞蹈教室	W5W6
`,授課教師:`黃惠芝	HUANG, HUI-TZU
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  206055",課程中文名稱:"定向越野",課程英文名稱:"Orienteering",學分數:"0",人限:"46",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:`Stadium田徑場	W5W6
`,授課教師:`邱得全	CHIU,TE-CHUAN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  206056",課程中文名稱:"健走與慢跑",課程英文名稱:"Exercise walking and jogging",學分數:"0",人限:"46",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:`Stadium田徑場	W5W6
`,授課教師:`張祐華	CHANG, YU-HUA
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  206057",課程中文名稱:"排球",課程英文名稱:"Volleyball",學分數:"0",人限:"46",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:`Gym體育館2F	W7W8
`,授課教師:`葉煌典	HSIEH, HUANG-TIEN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  206058",課程中文名稱:"足球男",課程英文名稱:"football",學分數:"0",人限:"46",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"第1週未到課者勿加簽本課,患有重大傷病或特殊病史同學請主動向授課老師說明以提供協助。不接受加簽。",停開註記:"",教室與上課時間:`Stadium足球場	W7W8
`,授課教師:`陳國華	TAN KOK HWA
`,擋修說明:"",課程限制說明:"限男生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:""},{科號:"11120PE  206059",課程中文名稱:"角力",課程英文名稱:"Wrestling",學分數:"0",人限:"46",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:`PEC柔道教室	W7W8
`,授課教師:`劉振華	FIU, CHEN-HUA
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  206060",課程中文名稱:"網球進階",課程英文名稱:"Tennis(advance)",學分數:"0",人限:"28",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:`Stadium網球場	W7W8
`,授課教師:`鄭為仁	CHENG, WEI-JEN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  206061",課程中文名稱:"速度、敏捷及反應訓練",課程英文名稱:"Speed, agility and quickness training",學分數:"0",人限:"46",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:`Stadium田徑場	W7W8
`,授課教師:`張祐華	CHANG, YU-HUA
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  206062",課程中文名稱:"重量訓練",課程英文名稱:"Weight Training",學分數:"0",人限:"46",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:`WT Rm.重訓室	W7W8
`,授課教師:`邱晨然	CHIU,CHEN-JAN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  206063",課程中文名稱:"瑜珈提斯",課程英文名稱:"Yogalates",學分數:"0",人限:"46",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:`Dance Rm舞蹈教室	W7W8
`,授課教師:`黃惠芝	HUANG, HUI-TZU
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  206064",課程中文名稱:"定向越野",課程英文名稱:"Orienteering",學分數:"0",人限:"46",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:`Stadium田徑場	W7W8
`,授課教師:`邱得全	CHIU,TE-CHUAN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  206065",課程中文名稱:"羽球初學",課程英文名稱:"Badminton",學分數:"0",人限:"32",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"須著乾淨室內運動鞋。患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:`alum Gym校友PE館	R1R2
`,授課教師:`朱真儀	CHU, CHEN-YI
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  206066",課程中文名稱:"網球初學",課程英文名稱:"Tennis(basic)",學分數:"0",人限:"32",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:`Stadium網球場	R1R2
`,授課教師:`邵心平	SHAO, HSIN-PING
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  206067",課程中文名稱:"籃球初學",課程英文名稱:"Basketball(basic)",學分數:"0",人限:"46",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:`Gym體育館2F	R1R2
`,授課教師:`陳虔倖	CHEN, CHIEN-HSIN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  206068",課程中文名稱:"羽球初學",課程英文名稱:"Badminton",學分數:"0",人限:"32",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"須著乾淨室內運動鞋。患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:`alum Gym校友PE館	R3R4
`,授課教師:`朱真儀	CHU, CHEN-YI
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  206069",課程中文名稱:"網球初學",課程英文名稱:"Tennis(basic)",學分數:"0",人限:"32",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:`Stadium網球場	R3R4
`,授課教師:`邵心平	SHAO, HSIN-PING
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  206070",課程中文名稱:"爵士舞",課程英文名稱:"Jazz Dance",學分數:"0",人限:"46",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"須著乾淨室內運動鞋。患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:`alum Gym校友PE館	R3R4
`,授課教師:`黃靖琄	HUANG,CHING-CHUAN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  206071",課程中文名稱:"武術散打",課程英文名稱:"Physical Training:：san da",學分數:"0",人限:"46",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:`PEC柔道教室	R3R4
`,授課教師:`邱晨然	CHIU,CHEN-JAN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  206072",課程中文名稱:"瑜珈提斯",課程英文名稱:"Yogalates",學分數:"0",人限:"46",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:`Dance Rm舞蹈教室	R3R4
`,授課教師:`許芸榛	HSU, YUN-CHEN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  206073",課程中文名稱:"籃球初學",課程英文名稱:"Basketball(basic)",學分數:"0",人限:"46",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:`Gym體育館2F	R3R4
`,授課教師:`陳虔倖	CHEN, CHIEN-HSIN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  206074",課程中文名稱:"慢壘初學",課程英文名稱:"Softball",學分數:"0",人限:"46",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:`Stadium棒球場	R5R6
`,授課教師:`徐志翔	HSU, CHIH-HSIANG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  206075",課程中文名稱:"網球初學",課程英文名稱:"Tennis(basic)",學分數:"0",人限:"32",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:`Stadium網球場	R5R6
`,授課教師:`王汶琳	WANG, WEN-LIN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  206076",課程中文名稱:"排球",課程英文名稱:"Volleyball",學分數:"0",人限:"46",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:`Gym體育館2F	R5R6
`,授課教師:`施惠方	SZU, HUI-FANG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  206077",課程中文名稱:"爵士舞",課程英文名稱:"Jazz Dance",學分數:"0",人限:"46",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"須著乾淨室內運動鞋。患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:`alum Gym校友PE館	R5R6
`,授課教師:`黃靖琄	HUANG,CHING-CHUAN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  206078",課程中文名稱:"武術散打",課程英文名稱:"Physical Training:：san da",學分數:"0",人限:"46",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:`PEC柔道教室	R5R6
`,授課教師:`邱晨然	CHIU,CHEN-JAN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  206079",課程中文名稱:"高爾夫球",課程英文名稱:"Golf",學分數:"0",人限:"26",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。前三堂在視聽教室，須自付保險及練習費。",停開註記:"",教室與上課時間:"",授課教師:`林琨瀚	LIN, KUN-HAN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  206080",課程中文名稱:"桌球進階",課程英文名稱:"Ping pong (advance)",學分數:"0",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"前12週在南大校區第2學生活動中心上課,患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助",停開註記:"",教室與上課時間:`Old Gym桌球場	R5R6
`,授課教師:`吳德成	WU, TE-CHENG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  206081",課程中文名稱:"羽球初學",課程英文名稱:"Badminton",學分數:"0",人限:"32",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"須著乾淨室內運動鞋。患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:`alum Gym校友PE館	R5R6
`,授課教師:`高子人	KAO,TZU-JEN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  206082",課程中文名稱:"重量訓練",課程英文名稱:"Weight Training",學分數:"0",人限:"46",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:`WT Rm.重訓室	R5R6
`,授課教師:`張祐華	CHANG, YU-HUA
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  206083",課程中文名稱:"國際標準舞",課程英文名稱:"Ballroom Dancing",學分數:"0",人限:"46",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"需自備舞鞋。患有重大傷病或特殊病史之同學請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:`Dance Rm舞蹈教室	R5R6
`,授課教師:`曾建嘉	ZENG JIAN-JIA
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  206084",課程中文名稱:"慢壘初學",課程英文名稱:"Softball",學分數:"0",人限:"46",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:`Stadium棒球場	R7R8
`,授課教師:`徐志翔	HSU, CHIH-HSIANG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  206085",課程中文名稱:"游泳初學",課程英文名稱:"Swimming(basic)",學分數:"0",人限:"46",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:`SWIM Pl.游泳池	R7R8
`,授課教師:`施秉宏	SHIH, PING-HUNG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  206086",課程中文名稱:"網球初學",課程英文名稱:"Tennis(basic)",學分數:"0",人限:"32",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:`Stadium網球場	R7R8
`,授課教師:`王汶琳	WANG, WEN-LIN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  206087",課程中文名稱:"排球",課程英文名稱:"Volleyball",學分數:"0",人限:"46",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:`Gym體育館2F	R7R8
`,授課教師:`施惠方	SZU, HUI-FANG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  206088",課程中文名稱:"武術散打進階",課程英文名稱:"Physical Training:：san da (advance)",學分數:"0",人限:"46",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:`PEC柔道教室	R7R8
`,授課教師:`邱晨然	CHIU,CHEN-JAN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  206089",課程中文名稱:"高爾夫球",課程英文名稱:"Golf",學分數:"0",人限:"26",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。前三堂在視聽教室，須自付保險及練習費。",停開註記:"",教室與上課時間:"",授課教師:`林琨瀚	LIN, KUN-HAN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  206090",課程中文名稱:"桌球進階",課程英文名稱:"Ping pong (advance)",學分數:"0",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"前12週在南大校區第2學生活動中心上課,患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助",停開註記:"",教室與上課時間:`Old Gym桌球場	R7R8
`,授課教師:`吳德成	WU, TE-CHENG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  206091",課程中文名稱:"重量訓練",課程英文名稱:"Weight Training",學分數:"0",人限:"46",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:`WT Rm.重訓室	R7R8
`,授課教師:`高子人	KAO,TZU-JEN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  206092",課程中文名稱:"國際標準舞",課程英文名稱:"Ballroom Dancing",學分數:"0",人限:"46",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"需自備舞鞋。患有重大傷病或特殊病史之同學請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:`Dance Rm舞蹈教室	R7R8
`,授課教師:`曾建嘉	ZENG JIAN-JIA
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  206093",課程中文名稱:"羽球初學",課程英文名稱:"Badminton",學分數:"0",人限:"32",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"須著乾淨室內運動鞋。患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:`alum Gym校友PE館	F1F2
`,授課教師:`朱真儀	CHU, CHEN-YI
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  206095",課程中文名稱:"籃球初學",課程英文名稱:"Basketball(basic)",學分數:"0",人限:"46",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:`Gym體育館2F	F1F2
`,授課教師:`陳虔倖	CHEN, CHIEN-HSIN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  206096",課程中文名稱:"羽球初學",課程英文名稱:"Badminton",學分數:"0",人限:"32",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"須著乾淨室內運動鞋。患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:`alum Gym校友PE館	F3F4
`,授課教師:`朱真儀	CHU, CHEN-YI
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  206098",課程中文名稱:"網球初學",課程英文名稱:"Tennis(basic)",學分數:"0",人限:"32",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:`Stadium網球場	F3F4
`,授課教師:`簡敏惠	CHIEN, MIN-HUI
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  206099",課程中文名稱:"籃球進階",課程英文名稱:"Basketball(advance)",學分數:"0",人限:"46",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"修本課者需有初學基礎。患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:`Gym體育館2F	F3F4
`,授課教師:`陳虔倖	CHEN, CHIEN-HSIN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  206101",課程中文名稱:"流行舞蹈",課程英文名稱:"Pop Dance",學分數:"0",人限:"46",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"須著乾淨室內運動鞋。患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:`alum Gym校友PE館	F3F4
`,授課教師:`黃靖琄	HUANG,CHING-CHUAN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  206102",課程中文名稱:"重量訓練",課程英文名稱:"Weight Training",學分數:"0",人限:"46",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:`WT Rm.重訓室	F3F4
`,授課教師:`林琨瀚	LIN, KUN-HAN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  206103",課程中文名稱:"適應體育",課程英文名稱:"Adapted Physical Education",學分數:"0",人限:"0",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"身體狀況不適合修習一般體育者，請檢附醫生證明向任課教師提出加簽，第一堂課在視聽教室。不得抵免大一體育",停開註記:"",教室與上課時間:"",授課教師:`謝文偉	HSIEH, WEN-WEI
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  206104",課程中文名稱:"羽球初學",課程英文名稱:"Badminton",學分數:"0",人限:"32",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:`Nanda南大B101	M3M4
`,授課教師:`梁嘉文	LIANG,CHIA-WEN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  206105",課程中文名稱:"重量塑身",課程英文名稱:"Weight body shape",學分數:"0",人限:"46",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:`Nanda南大D001	M3M4
`,授課教師:`王嬿婷	WANG, YEN-TING
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  206106",課程中文名稱:"迷你網球",課程英文名稱:"Mini tennis",學分數:"0",人限:"25",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:`Nanda南大B101	T3T4
`,授課教師:`梁龍鏡	LIANG, LUNG-CHING
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  206107",課程中文名稱:"適應體育",課程英文名稱:"Adapted Physical Education",學分數:"0",人限:"0",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"身體狀況不適合修習一般體育者，請檢附醫生證明向任課教師提出加簽，第一堂課在視聽教室。不得抵免大一體育",停開註記:"",教室與上課時間:"",授課教師:`梁嘉文	LIANG,CHIA-WEN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  206108",課程中文名稱:"桌球初學",課程英文名稱:"Ping pong(basic)",學分數:"0",人限:"28",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:`Nanda南大C101	T1T2
`,授課教師:`錢明福	CHIEN, MING-FU
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  206109",課程中文名稱:"健走體適能",課程英文名稱:"Exercise walking and Physical fitness",學分數:"0",人限:"46",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:`Nanda南大9005	T5T6
`,授課教師:`張祐華	CHANG, YU-HUA
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  206110",課程中文名稱:"重量訓練",課程英文名稱:"Weight Training",學分數:"0",人限:"46",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:`Nanda南大D001	T7T8
`,授課教師:`梁嘉文	LIANG,CHIA-WEN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  206111",課程中文名稱:"桌球初學",課程英文名稱:"Ping pong(basic)",學分數:"0",人限:"28",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:`Nanda南大C101	T3T4
`,授課教師:`錢明福	CHIEN, MING-FU
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  206112",課程中文名稱:"羽球初學",課程英文名稱:"Badminton",學分數:"0",人限:"32",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:`Nanda南大B101	W1W2
`,授課教師:`許仁豪	HSU,JEN-HAO
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  206113",課程中文名稱:"爵士舞",課程英文名稱:"Jazz Dance",學分數:"0",人限:"46",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:`Nanda南大7405	W3W4
`,授課教師:`黃靖琄	HUANG,CHING-CHUAN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  206114",課程中文名稱:"羽球初學",課程英文名稱:"Badminton",學分數:"0",人限:"32",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:`Nanda南大B101	W3W4
`,授課教師:`許仁豪	HSU,JEN-HAO
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  206115",課程中文名稱:"高爾夫球",課程英文名稱:"Golf",學分數:"0",人限:"26",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。前三堂在視聽教室，須自付保險及練習費。",停開註記:"",教室與上課時間:"",授課教師:`張嘉洲	CHANG, CHIA-CHOU
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  206116",課程中文名稱:"有氧舞蹈",課程英文名稱:"Aerobics dancing",學分數:"0",人限:"46",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:`Nanda南大7405	W5W6
`,授課教師:`黃靖琄	HUANG,CHING-CHUAN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  206117",課程中文名稱:"羽球",課程英文名稱:"Badminton",學分數:"0",人限:"32",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:`Nanda南大B101	W5W6
`,授課教師:`謝佩君	HSIEH, PEI-CHUN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  206118",課程中文名稱:"籃球初學",課程英文名稱:"Basketball(basic)",學分數:"0",人限:"46",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:`Nanda南大A507	W7W8
`,授課教師:`李平鴻	LEE, PING-HUNG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  206119",課程中文名稱:"重量訓練",課程英文名稱:"Weight Training",學分數:"0",人限:"46",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:`Nanda南大D001	W7W8
`,授課教師:`王嬿婷	WANG, YEN-TING
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  206120",課程中文名稱:"高爾夫球",課程英文名稱:"Golf",學分數:"0",人限:"26",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。前三堂在視聽教室，須自付保險及練習費。",停開註記:"",教室與上課時間:"",授課教師:`張嘉洲	CHANG, CHIA-CHOU
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  206121",課程中文名稱:"羽球",課程英文名稱:"Badminton",學分數:"0",人限:"32",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:`Nanda南大B101	W7W8
`,授課教師:`謝佩君	HSIEH, PEI-CHUN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  206122",課程中文名稱:"重量塑身",課程英文名稱:"Weight body shape",學分數:"0",人限:"46",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:`Nanda南大D001	R3R4
`,授課教師:`王嬿婷	WANG, YEN-TING
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  206123",課程中文名稱:"舞蹈即興創作",課程英文名稱:"Dance Improvisation",學分數:"0",人限:"46",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:`Nanda南大7405	R5R6
`,授課教師:`王嬿婷	WANG, YEN-TING
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  206124",課程中文名稱:"排球初學",課程英文名稱:"Volleyball (basic)",學分數:"0",人限:"46",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:`Nanda南大A507	R5R6
`,授課教師:`王俊盛	WANG, CHUN-SHENG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  206125",課程中文名稱:"居家體適能運動",課程英文名稱:"Physical Fitness",學分數:"0",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:`Nanda南大B304	R5R6
`,授課教師:`謝佩君	HSIEH, PEI-CHUN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:""},{科號:"11120PE  206126",課程中文名稱:"健走與慢跑",課程英文名稱:"Exercise walking and jogging",學分數:"0",人限:"46",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:`Nanda南大9005	R5R6
`,授課教師:`邱文信	CHIU, WEN-HSIN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  206127",課程中文名稱:"重量塑身",課程英文名稱:"Weight body shape",學分數:"0",人限:"46",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:`Nanda南大D001	R7R8
`,授課教師:`王嬿婷	WANG, YEN-TING
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  206128",課程中文名稱:"排球初學",課程英文名稱:"Volleyball (basic)",學分數:"0",人限:"46",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:`Nanda南大B101	R7R8
`,授課教師:`王俊盛	WANG, CHUN-SHENG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  206129",課程中文名稱:"居家體適能運動",課程英文名稱:"Physical Fitness",學分數:"0",人限:"46",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:`Nanda南大7405	R7R8
`,授課教師:`謝佩君	HSIEH, PEI-CHUN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  206130",課程中文名稱:"籃球",課程英文名稱:"Basketball",學分數:"0",人限:"46",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:`Nanda南大A507	F3F4
`,授課教師:`謝佩君	HSIEH, PEI-CHUN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  206131",課程中文名稱:"射擊初學",課程英文名稱:"Shooting",學分數:"0",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"訓練地點為風雲樓B1。患有重大傷病或特殊病史同學請主動提出",停開註記:"",教室與上課時間:"",授課教師:`葉志俊	YEH, CHIH-CHUN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:""},{科號:"11120PE  206132",課程中文名稱:"射擊初學",課程英文名稱:"Shooting",學分數:"0",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"訓練地點為風雲樓B1。患有重大傷病或特殊病史同學請主動提出",停開註記:"",教室與上課時間:"",授課教師:`葉志俊	YEH, CHIH-CHUN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:""},{科號:"11120PE  333001",課程中文名稱:"羽球校隊男",課程英文名稱:"Physical Education",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限本校校隊修習，一般學生不得選修。患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:"",授課教師:`許仁豪	HSU,JEN-HAO
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  333002",課程中文名稱:"羽球校隊女",課程英文名稱:"Physical Education",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限本校校隊修習，一般學生不得選修。患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:"",授課教師:`許仁豪	HSU,JEN-HAO
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  333003",課程中文名稱:"排球校隊男",課程英文名稱:"Physical Education",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限本校校隊修習，一般學生不得選修。患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:"",授課教師:`邱得全	CHIU,TE-CHUAN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  333004",課程中文名稱:"排球校隊女",課程英文名稱:"Physical Education",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限本校校隊修習，一般學生不得選修。患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:"",授課教師:`施惠方	SZU, HUI-FANG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  333005",課程中文名稱:"游泳校隊",課程英文名稱:"Physical education",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限本校校隊修習，一般學生不得選修。患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:"",授課教師:`施秉宏	SHIH, PING-HUNG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  333006",課程中文名稱:"射箭校隊",課程英文名稱:"Physical education",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限本校校隊修習，一般學生不得選修。患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"停開",教室與上課時間:"",授課教師:`體育室	
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  333007",課程中文名稱:"拳擊校隊",課程英文名稱:"Physical education",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限本校校隊修習，一般學生不得選修。患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"停開",教室與上課時間:"",授課教師:`體育室	
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  333008",課程中文名稱:"籃球校隊男",課程英文名稱:"Physical Education",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限本校校隊修習，一般學生不得選修。患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:"",授課教師:`謝佩君	HSIEH, PEI-CHUN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  333009",課程中文名稱:"籃球校隊女",課程英文名稱:"Physical Education",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限本校校隊修習，一般學生不得選修。患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:"",授課教師:`謝文偉	HSIEH, WEN-WEI
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  333010",課程中文名稱:"網球校隊男",課程英文名稱:"Physical Education",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限本校校隊修習，一般學生不得選修。患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:"",授課教師:`鄭為仁	CHENG, WEI-JEN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  333011",課程中文名稱:"網球校隊女",課程英文名稱:"Physical Education",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限本校校隊修習，一般學生不得選修。患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:"",授課教師:`鄭為仁	CHENG, WEI-JEN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  333012",課程中文名稱:"桌球校隊男",課程英文名稱:"Physical Education",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限本校校隊修習，一般學生不得選修。患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:"",授課教師:`吳德成	WU, TE-CHENG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  333013",課程中文名稱:"桌球校隊女",課程英文名稱:"Physical Education",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限本校校隊修習，一般學生不得選修。患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:"",授課教師:`吳德成	WU, TE-CHENG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  333014",課程中文名稱:"棒球校隊男",課程英文名稱:"Physical Education",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限本校校隊修習，一般學生不得選修。患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:"",授課教師:`林琨瀚	LIN, KUN-HAN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  333015",課程中文名稱:"足球校隊男",課程英文名稱:"Physical Education",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限本校校隊修習，一般學生不得選修。患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:"",授課教師:`陳國華	TAN KOK HWA
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  333016",課程中文名稱:"田徑校隊",課程英文名稱:"Physical education",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限本校校隊修習，一般學生不得選修。患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"",教室與上課時間:"",授課教師:`周宜辰	CHOU, YI-CHEN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PE  333017",課程中文名稱:"手球校隊",課程英文名稱:"Physical education",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限本校校隊修習，一般學生不得選修。患有重大傷病或特殊病史之同學，請主動向授課老師說明以提供協助。",停開註記:"停開",教室與上課時間:"",授課教師:`體育室	
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PFMI800000",課程中文名稱:"論文研究",課程英文名稱:"Thesis",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限前瞻產博學程博二以上修習",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"限前瞻產博學程",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"前瞻產博學程111D  必修	"},{科號:"11120PHIL501100",課程中文名稱:"書報討論一",課程英文名稱:"Seminar(I)",學分數:"2",人限:"15",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"碩一及博一必修。本課程為16週課程",停開註記:"",教室與上課時間:`HSS人社A306	W7W8
`,授課教師:`陳斐婷	CHEN, FEI-TING
鄭志忠	JENG, JYH-JONG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"哲學所111D  必修	哲學所111M  必修	"},{科號:"11120PHIL554900",課程中文名稱:"純粹理性批判：〈辯證論〉",課程英文名稱:"Critique of Pure Reason: Dialectic",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`HSS人社A306	T7T8T9
`,授課教師:`鄭志忠	JENG, JYH-JONG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"哲學所111D  選修	哲學所111M  選修	"},{科號:"11120PHIL559200",課程中文名稱:"真理原理論--真理自體的純粹形相",課程英文名稱:"On Principles of Alethiology - The Pure Eidos of Truth in itself",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`HSS人社A306	W2W3W4
`,授課教師:`黃文宏	HUANG, WEN-HONG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"亞際文化碩士學程111M  選修	哲學所111D  選修	哲學所111M  選修	"},{科號:"11120PHIL559500",課程中文名稱:"死亡與年老哲學",課程英文名稱:"Philosophy of Dying and Ageing",學分數:"3",人限:"15",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"教師: 張燦輝",停開註記:"",教室與上課時間:`HSS人社C202	W3W4Wn
`,授課教師:`聘任中	
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"哲學所111M  選修	"},{科號:"11120PHIL562400",課程中文名稱:"現象學美學",課程英文名稱:"Phenomenological Aesthetics",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`HSS人社A306	M3M4Mn
`,授課教師:`鄭喜恒	CHENG, HSI-HENG
吳俊業	NG, CHON IP
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"哲學所111D  選修	哲學所111M  選修	"},{科號:"11120PHIL585500",課程中文名稱:"胡塞爾",課程英文名稱:"Husserl",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`HSS人社A306	T3T4Tn
`,授課教師:`聘任中	
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"哲學所111D  選修	哲學所111M  選修	"},{科號:"11120PHIL600000",課程中文名稱:"論文研究",課程英文名稱:"Thesis",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限哲學所碩三以上修習",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"排除哲學所碩士班1年級2年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"哲學所111M  必修	"},{科號:"11120PHIL740800",課程中文名稱:"心靈哲學專題:關於概念之遍在性的爭論",課程英文名稱:"Topics in Philosophy of Mind: The McDowell-Dreyfus Debate",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`HSS人社A306	M7M8M9
`,授課教師:`鄭喜恒	CHENG, HSI-HENG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"哲學所111D  選修	哲學所111M  選修	"},{科號:"11120PHIL759300",課程中文名稱:"古希臘哲學專題:形上學",課程英文名稱:"Topics in Ancient Greek Philosophy: Metaphysics",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`HSS人社A306	R6R7R8
`,授課教師:`陳斐婷	CHEN, FEI-TING
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"哲學所111D  選修	哲學所111M  選修	"},{科號:"11120PHIL800000",課程中文名稱:"論文研究",課程英文名稱:"Thesis",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限哲學所博三以上同學，排除博士班1年級2年級。",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"限哲學所博士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"哲學所111D  必修	"},{科號:"11120PHYS102001",課程中文名稱:"普通物理實驗二",課程英文名稱:"General Physics Laboratory (II)",學分數:"1",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"教室入口位於鴿子廣場愛因斯坦Q版人像旁",停開註記:"",教室與上課時間:`PHYSLAB普實130	M5M6M7M8
`,授課教師:`物理系	
`,擋修說明:"",課程限制說明:"",第一二專長對應:"化學(第一專長)	動力機械工程(第二專長)	動力機械工程(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PHYS102002",課程中文名稱:"普通物理實驗二",課程英文名稱:"General Physics Laboratory (II)",學分數:"1",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"教室入口位於鴿子廣場愛因斯坦Q版人像旁",停開註記:"",教室與上課時間:`PHYSLAB普實130	M5M6M7M8
`,授課教師:`物理系	
`,擋修說明:"",課程限制說明:"",第一二專長對應:"化學(第一專長)	動力機械工程(第二專長)	動力機械工程(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PHYS102003",課程中文名稱:"普通物理實驗二",課程英文名稱:"General Physics Laboratory (II)",學分數:"1",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"教室入口位於鴿子廣場愛因斯坦Q版人像旁",停開註記:"",教室與上課時間:`PHYSLAB普實203	M5M6M7M8
`,授課教師:`物理系	
`,擋修說明:"",課程限制說明:"",第一二專長對應:"化學(第一專長)	動力機械工程(第二專長)	動力機械工程(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PHYS102005",課程中文名稱:"普通物理實驗二",課程英文名稱:"General Physics Laboratory (II)",學分數:"1",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"教室入口位於鴿子廣場愛因斯坦Q版人像旁",停開註記:"",教室與上課時間:`PHYSLAB普實130	T5T6T7T8
`,授課教師:`物理系	
`,擋修說明:"",課程限制說明:"",第一二專長對應:"化學(第一專長)	動力機械工程(第二專長)	動力機械工程(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PHYS102006",課程中文名稱:"普通物理實驗二",課程英文名稱:"General Physics Laboratory (II)",學分數:"1",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"教室入口位於鴿子廣場愛因斯坦Q版人像旁",停開註記:"",教室與上課時間:`PHYSLAB普實130	T5T6T7T8
`,授課教師:`物理系	
`,擋修說明:"",課程限制說明:"",第一二專長對應:"化學(第一專長)	動力機械工程(第二專長)	動力機械工程(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PHYS102007",課程中文名稱:"普通物理實驗二",課程英文名稱:"General Physics Laboratory (II)",學分數:"1",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"教室入口位於鴿子廣場愛因斯坦Q版人像旁",停開註記:"",教室與上課時間:`PHYSLAB普實203	T5T6T7T8
`,授課教師:`物理系	
`,擋修說明:"",課程限制說明:"",第一二專長對應:"化學(第一專長)	動力機械工程(第二專長)	動力機械工程(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PHYS102009",課程中文名稱:"普通物理實驗二",課程英文名稱:"General Physics Laboratory (II)",學分數:"1",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"教室入口位於鴿子廣場愛因斯坦Q版人像旁",停開註記:"",教室與上課時間:`PHYSLAB普實203	W5W6W7W8
`,授課教師:`物理系	
`,擋修說明:"",課程限制說明:"",第一二專長對應:"化學(第一專長)	動力機械工程(第二專長)	動力機械工程(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PHYS102010",課程中文名稱:"普通物理實驗二",課程英文名稱:"General Physics Laboratory (II)",學分數:"1",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"教室入口位於鴿子廣場愛因斯坦Q版人像旁",停開註記:"",教室與上課時間:`PHYSLAB普實203	W5W6W7W8
`,授課教師:`物理系	
`,擋修說明:"",課程限制說明:"",第一二專長對應:"化學工程(第一專長)	動力機械工程(第二專長)	動力機械工程(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PHYS102013",課程中文名稱:"普通物理實驗二",課程英文名稱:"General Physics Laboratory (II)",學分數:"1",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"教室入口位於鴿子廣場愛因斯坦Q版人像旁",停開註記:"",教室與上課時間:`PHYSLAB普實130	R5R6R7R8
`,授課教師:`洪雪行	HUNG, HSUEH-HSING
`,擋修說明:"",課程限制說明:"【上學期原修普通物理實驗一PHYS101013(洪雪行老師)同學選課優先,第3次選課起開放】",第一二專長對應:"化學(第一專長)	物理(第一專長)	動力機械工程(第二專長)	動力機械工程(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PHYS102014",課程中文名稱:"普通物理實驗二",課程英文名稱:"General Physics Laboratory (II)",學分數:"1",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"教室入口位於鴿子廣場愛因斯坦Q版人像旁",停開註記:"",教室與上課時間:`PHYSLAB普實130	R5R6R7R8
`,授課教師:`洪雪行	HUNG, HSUEH-HSING
`,擋修說明:"",課程限制說明:"【上學期原修普通物理實驗一PHYS101014(洪雪行老師)同學選課優先,第3次選課起開放】",第一二專長對應:"化學(第一專長)	物理(第一專長)	動力機械工程(第二專長)	動力機械工程(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PHYS102015",課程中文名稱:"普通物理實驗二",課程英文名稱:"General Physics Laboratory (II)",學分數:"1",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"教室入口位於鴿子廣場愛因斯坦Q版人像旁",停開註記:"",教室與上課時間:`PHYSLAB普實203	R5R6R7R8
`,授課教師:`物理系	
`,擋修說明:"",課程限制說明:"",第一二專長對應:"化學工程(第一專長)	動力機械工程(第二專長)	動力機械工程(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PHYS102016",課程中文名稱:"普通物理實驗二",課程英文名稱:"General Physics Laboratory (II)",學分數:"1",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"教室入口位於鴿子廣場愛因斯坦Q版人像旁",停開註記:"",教室與上課時間:`PHYSLAB普實203	R5R6R7R8
`,授課教師:`物理系	
`,擋修說明:"",課程限制說明:"",第一二專長對應:"化學工程(第一專長)	動力機械工程(第二專長)	動力機械工程(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PHYS102017",課程中文名稱:"普通物理實驗二",課程英文名稱:"General Physics Laboratory (II)",學分數:"1",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"教室入口位於鴿子廣場愛因斯坦Q版人像旁",停開註記:"",教室與上課時間:`PHYSLAB普實130	F5F6F7F8
`,授課教師:`物理系	
`,擋修說明:"",課程限制說明:"",第一二專長對應:"化學(第一專長)	動力機械工程(第二專長)	動力機械工程(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PHYS102018",課程中文名稱:"普通物理實驗二",課程英文名稱:"General Physics Laboratory (II)",學分數:"1",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"教室入口位於鴿子廣場愛因斯坦Q版人像旁",停開註記:"",教室與上課時間:`PHYSLAB普實130	F5F6F7F8
`,授課教師:`物理系	
`,擋修說明:"",課程限制說明:"",第一二專長對應:"化學(第一專長)	動力機械工程(第二專長)	動力機械工程(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PHYS102019",課程中文名稱:"普通物理實驗二",課程英文名稱:"General Physics Laboratory (II)",學分數:"1",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"教室入口位於鴿子廣場愛因斯坦Q版人像旁",停開註記:"",教室與上課時間:`PHYSLAB普實203	F5F6F7F8
`,授課教師:`物理系	
`,擋修說明:"",課程限制說明:"",第一二專長對應:"化學(第一專長)	動力機械工程(第二專長)	動力機械工程(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PHYS102020",課程中文名稱:"普通物理實驗二",課程英文名稱:"General Physics Laboratory (II)",學分數:"1",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"教室入口位於鴿子廣場愛因斯坦Q版人像旁",停開註記:"",教室與上課時間:`PHYSLAB普實125	F5F6F7F8
`,授課教師:`施宙聰	SHY, JOW-TSONG
`,擋修說明:"",課程限制說明:"國際學士班,外籍生優先，第3次選課起開放全校修習",第一二專長對應:"化學工程(第一專長)	動力機械工程(第二專長)	動力機械工程(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PHYS114000",課程中文名稱:"普通物理二(物理系)",課程英文名稱:"General Physics (II)",學分數:"4",人限:"144",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"含實中科學班,上課地點:大門口全家Family Mart 樓上",停開註記:"",教室與上課時間:`MXIC旺宏懷樸	T3T4R3R4
`,授課教師:`唐述中	TANG, SHU-JUNG
`,擋修說明:"",課程限制說明:"【上學期原修普通物理一(物理系)PHYS113000(唐述中老師)同學選課優先,第3次選課起開放】",第一二專長對應:"化學(第一專長)	工程與系統科學(第一專長)	物理(第一專長)	動力機械工程(第二專長)	動力機械工程(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"物理系111B A必修	物理系111B B必修	物理系111B C必修	理學院學士班111B  必修	"},{科號:"11120PHYS114301",課程中文名稱:"普通物理Ｂ二",課程英文名稱:"General Physics B (II)",學分數:"3",人限:"150",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`MXIC旺宏懷樸	T1T2F1F2
`,授課教師:`徐斌睿	HSU, PIN-JUI
`,擋修說明:"",課程限制說明:"【上學期原修普通物理Ｂ一PHYS113301(童世光老師)同學選課優先,第3次選課起開放】",第一二專長對應:"化學工程(第一專長)	資訊工程(第二專長)	資訊工程(第一專長)	電機工程(第一專長)	生命科學(第一專長)	動力機械工程(第二專長)	動力機械工程(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PHYS114302",課程中文名稱:"普通物理Ｂ二",課程英文名稱:"General Physics B (II)",學分數:"3",人限:"100",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`CHE化工 B18	T1T2F1F2
`,授課教師:`張稚卿	CHANG, JYH-CHING
`,擋修說明:"",課程限制說明:"【上學期原修普通物理Ｂ一PHYS113307(張稚卿老師)同學選課優先,第3次選課起開放】",第一二專長對應:"化學工程(第一專長)	資訊工程(第二專長)	資訊工程(第一專長)	電機工程(第一專長)	電機資訊(第一專長)	生命科學(第一專長)	動力機械工程(第二專長)	動力機械工程(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PHYS114303",課程中文名稱:"普通物理Ｂ二",課程英文名稱:"General Physics B (II)",學分數:"3",人限:"177",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`GEN IV綜四224	T1T2F1F2
`,授課教師:`霍夫曼	Hoffmann,Germar
`,擋修說明:"",課程限制說明:"【上學期原修普通物理Ｂ一PHYS113303(林晏詳老師)同學選課優先,第3次選課起開放】",第一二專長對應:"化學工程(第一專長)	資訊工程(第二專長)	資訊工程(第一專長)	電機工程(第一專長)	電機資訊(第一專長)	生命科學(第一專長)	動力機械工程(第二專長)	動力機械工程(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PHYS114304",課程中文名稱:"普通物理Ｂ二",課程英文名稱:"General Physics B (II)",學分數:"3",人限:"163",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`DELTA台達107	T1T2F1F2
`,授課教師:`鄭弘泰	HORNG-TAY JENG
`,擋修說明:"",課程限制說明:"【上學期原修普通物理Ｂ一PHYS113304(鄭弘泰老師)同學選課優先,第3次選課起開放】",第一二專長對應:"化學工程(第一專長)	資訊工程(第二專長)	資訊工程(第一專長)	電機工程(第一專長)	電機資訊(第一專長)	生命科學(第一專長)	動力機械工程(第二專長)	動力機械工程(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PHYS114305",課程中文名稱:"普通物理Ｂ二",課程英文名稱:"General Physics B (II)",學分數:"3",人限:"133",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`DELTA台達217	T1T2F1F2
`,授課教師:`張祥光	CHANG, HSIANG-KUANG
`,擋修說明:"",課程限制說明:"【上學期原修普通物理Ｂ一PHYS113305(張祥光老師)同學選課優先,第3次選課起開放】",第一二專長對應:"化學工程(第一專長)	資訊工程(第二專長)	資訊工程(第一專長)	電機工程(第一專長)	電機資訊(第一專長)	生命科學(第一專長)	動力機械工程(第二專長)	動力機械工程(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PHYS114306",課程中文名稱:"普通物理Ｂ二",課程英文名稱:"General Physics B (II)",學分數:"3",人限:"186",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`GEN IV綜四121	T1T2F1F2
`,授課教師:`林志明	LIN, CHIH-MING
`,擋修說明:"",課程限制說明:"【上學期原修普通物理Ｂ一PHYS113306(林志明老師)同學選課優先,第3次選課起開放】",第一二專長對應:"化學工程(第一專長)	資訊工程(第二專長)	資訊工程(第一專長)	電機工程(第一專長)	電機資訊(第一專長)	生命科學(第一專長)	動力機械工程(第二專長)	動力機械工程(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PHYS114401",課程中文名稱:"普通物理Ａ二",課程英文名稱:"General Physics A (II)",學分數:"4",人限:"115",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`PHYSLAB普實130	T3T4R3R4
`,授課教師:`蘇雲良	SOO, YUN-LIANG
`,擋修說明:"",課程限制說明:"【上學期原修普通物理Ａ一PHYS113401(蘇雲良老師)同學選課優先,第3次選課起開放】",第一二專長對應:"化學(第一專長)	電機工程(第一專長)	電機資訊(第一專長)	工程與系統科學(第一專長)	動力機械工程(第二專長)	動力機械工程(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PHYS114402",課程中文名稱:"普通物理Ａ二",課程英文名稱:"General Physics A (II)",學分數:"4",人限:"121",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`BMES醫環120	T3T4R3R4
`,授課教師:`洪雪行	HUNG, HSUEH-HSING
`,擋修說明:"",課程限制說明:"【上學期原修普通物理Ａ一PHYS113402(洪雪行老師)同學選課優先,第3次選課起開放】",第一二專長對應:"化學(第一專長)	電機工程(第一專長)	電機資訊(第一專長)	工程與系統科學(第一專長)	動力機械工程(第二專長)	動力機械工程(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PHYS114403",課程中文名稱:"普通物理Ａ二",課程英文名稱:"General Physics A (II)",學分數:"4",人限:"100",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"預訂授課老師為蕭子綱老師。",停開註記:"",教室與上課時間:`ENG I工一 108	T3T4R3R4
`,授課教師:`聘任中	
`,擋修說明:"",課程限制說明:"【上學期原修普通物理Ａ一PHYS113403(劉怡維老師)同學選課優先,第3次選課起開放】",第一二專長對應:"化學(第一專長)	電機工程(第一專長)	電機資訊(第一專長)	工程與系統科學(第一專長)	動力機械工程(第二專長)	動力機械工程(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120PHYS115000",課程中文名稱:"普通物理一(物理系)",課程英文名稱:"General Physics (I)",學分數:"4",人限:"45",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"暑期班(暑修)預計不開設普物，欲重修者建議修習此門課程。",停開註記:"",教室與上課時間:`GEN II綜二521	T1T2F1F2
`,授課教師:`安德魯˙古柏	COOPER, ANDREW PAUL
`,擋修說明:"",課程限制說明:"",第一二專長對應:"化學(第一專長)	電機工程(第一專長)	電機資訊(第一專長)	工程與系統科學(第一專長)	物理(第一專長)	動力機械工程(第二專長)	動力機械工程(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"物理系111B A必修	物理系111B B必修	物理系111B C必修	"},{科號:"11120PHYS201001",課程中文名稱:"實驗物理",課程英文名稱:"Experimental Physics",學分數:"2",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`PHYS物   406	T5T6T7T8
`,授課教師:`徐瑋廷	HSU, WEI-TING
林登松	LIN, DENG-SUNG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"物理(第二專長)	物理(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"物理系110B A必修	物理系110B B必修	物理系110B C必修	"},{科號:"11120PHYS201002",課程中文名稱:"實驗物理",課程英文名稱:"Experimental Physics",學分數:"2",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`PHYS物   406	F5F6F7F8
`,授課教師:`徐瑋廷	HSU, WEI-TING
林登松	LIN, DENG-SUNG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"物理(第二專長)	物理(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"物理系110B A必修	物理系110B B必修	物理系110B C必修	"},{科號:"11120PHYS201003",課程中文名稱:"實驗物理",課程英文名稱:"Experimental Physics",學分數:"2",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`PHYS物   406	M5M6M7M8
`,授課教師:`徐瑋廷	HSU, WEI-TING
林登松	LIN, DENG-SUNG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"物理(第二專長)	物理(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"物理系110B A必修	物理系110B B必修	物理系110B C必修	"},{科號:"11120PHYS211000",課程中文名稱:"應用數學一",課程英文名稱:"Applied Mathematics (I)",學分數:"3",人限:"120",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程上150分鐘，其餘時間由教授視情形彈性運用",停開註記:"",教室與上課時間:`PHYS物  124	M1M2R1R2
`,授課教師:`林秀豪	LIN, HSIU-HAU
`,擋修說明:"",課程限制說明:"物理系大學部,理學院學士班大學部優先，第3次選課起開放全校修習",第一二專長對應:"天文物理(第二專長)	物理(第二專長)	物理(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"物理系111B A必修	物理系111B B必修	物理系111B C必修	理學院學士班110B  必修	"},{科號:"11120PHYS222000",課程中文名稱:"理論力學二",課程英文名稱:"Theoretical Mechanics (II)",學分數:"3",人限:"120",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"",停開註記:"",教室與上課時間:`PHYS物   019	W3W4F3
`,授課教師:`朱創新	CHONG-SUN CHU
`,擋修說明:"",課程限制說明:"物理系大學部,理學院學士班大學部優先，第3次選課起開放全校修習",第一二專長對應:"物理(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"物理系110B A必修	物理系110B B選修	物理系110B C選修	"},{科號:"11120PHYS232000",課程中文名稱:"電磁學二",課程英文名稱:"Electromagnetism II",學分數:"3",人限:"100",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"實際授課時間為150分鐘，其餘為演習課彈性運用時間。",停開註記:"",教室與上課時間:`PHYS物   019	T3T4R3R4
`,授課教師:`張存續	CHANG, TSUN-HSU
`,擋修說明:"",課程限制說明:"物理系大學部,理學院學士班大學部優先，第3次選課起開放全校修習",第一二專長對應:"醫學物理(第二專長)	核工與能源(第二專長)	物理(第一專長)",學分學程對應:"(跨領域)光電學分學程",不可加簽說明:"",必選修說明:"物理系110B A必修	物理系110B B必修	物理系110B C必修	"},{科號:"11120PHYS242000",課程中文名稱:"普通天文學二",課程英文名稱:"General Astronomy (II)",學分數:"3",人限:"60",新生保留人數:"0",通識對象:"*7",通識類別:"自然科學領域 Elective GE course: Natural Sciences",授課語言:"英",備註:"物理系天文組為必修9選5之一。",停開註記:"",教室與上課時間:`PHYS物  124	T6T7T8
`,授課教師:`江國興	ALBERT KONG
`,擋修說明:"",課程限制說明:"物理系大學部優先，第3次選課起開放全校修習",第一二專長對應:"天文物理(第二專長)",學分學程對應:"(台聯大)太空科技與工程學分學程",不可加簽說明:"",必選修說明:"物理系110B A選修	物理系110B B選修	物理系110B C必修	物理系111B C必修	"},{科號:"11120PHYS290000",課程中文名稱:"計算物理概論",課程英文名稱:"Computation for Physics",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`PHYS物   313	M7M8M9
`,授課教師:`潘國全	PAN, KUO-CHUAN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"物理系110B A選修	物理系110B B選修	物理系110B C選修	"},{科號:"11120PHYS302001",課程中文名稱:"光學實驗",課程英文名稱:"Optics Laboratory",學分數:"2",人限:"24",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`PHYS物   508	T5T6T7T8
`,授課教師:`施宙聰	SHY, JOW-TSONG
`,擋修說明:"",課程限制說明:"物理系大學部優先，第3次選課起開放全校修習",第一二專長對應:"物理(第二專長)",學分學程對應:"(跨領域)光電學分學程",不可加簽說明:"",必選修說明:"物理系109B A選修	物理系109B B必修	物理系109B C選修	"},{科號:"11120PHYS309000",課程中文名稱:"應用電子學一",課程英文名稱:"Applied Electronics",學分數:"3",人限:"60",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"天文組為九選五必修選科之一。",停開註記:"",教室與上課時間:`PHYS物   313	M2R1R2
`,授課教師:`陳正中	CHEN, CHENG-CHUNG
`,擋修說明:"",課程限制說明:"物理系大學部,理學院學士班大學部優先，第3次選課起開放全校修習",第一二專長對應:"天文物理(第二專長)",學分學程對應:"(跨領域)積體電路設計學分學程",不可加簽說明:"",必選修說明:"物理系110B A選修	物理系110B B必修	物理系110B C必修	"},{科號:"11120PHYS311000",課程中文名稱:"物理數學",課程英文名稱:"Mathematical Methods for Physicists",學分數:"3",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`PHYS物  208	M5M6M7
`,授課教師:`林秀豪	LIN, HSIU-HAU
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"物理系109B A選修	物理系109B B選修	物理系109B C選修	"},{科號:"11120PHYS314000",課程中文名稱:"前沿物理專題演講一",課程英文名稱:"Undergraduate Physics Colloquium (I)",學分數:"1",人限:"130",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"物理系大學部同學必修1學分。",停開註記:"",教室與上課時間:`PHYS物  124	WaWb
`,授課教師:`吳國安	WU, KUO-AN
`,擋修說明:"",課程限制說明:"物理系大學部優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"物理系109B A必修	物理系109B B必修	物理系109B C必修	"},{科號:"11120PHYS326000",課程中文名稱:"熱統計物理二",課程英文名稱:"Thermal and Statistical Physics II",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`PHYS物   019	M3M4W1W2
`,授課教師:`張維甫	CHANG, WE-FU
`,擋修說明:"",課程限制說明:"",第一二專長對應:"醫學物理(第二專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"物理系109B A選修	物理系109B B選修	物理系109B C選修	"},{科號:"11120PHYS334000",課程中文名稱:"光學二",課程英文名稱:"Optics (II)",學分數:"3",人限:"60",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`PHYS物   504	T4R3R4
`,授課教師:`王立邦	WANG, LI-BANG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)光電學分學程",不可加簽說明:"",必選修說明:"物理系109B A選修	物理系109B B必修	物理系109B C選修	"},{科號:"11120PHYS346000",課程中文名稱:"量子物理二",課程英文名稱:"Quantum Physics (II)",學分數:"3",人限:"127",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"課程預訂安排150分鐘,其餘時間由教授形彈性運用。",停開註記:"",教室與上課時間:`PHYS物  124	T1T2F1F2
`,授課教師:`褚志崧	CHUU, CHIH-SUNG
`,擋修說明:"",課程限制說明:"物理系大學部,理學院學士班大學部優先，第3次選課起開放全校修習",第一二專長對應:"物理(第二專長)	物理(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"物理系109B A必修	物理系109B B必修	物理系109B C必修	理學院學士班109B  必修	"},{科號:"11120PHYS375000",課程中文名稱:"數位科技專案實作",課程英文名稱:"Project of Digital Smart Technology",學分數:"3",人限:"50",新生保留人數:"0",通識對象:"*3",通識類別:"自然科學領域 Elective GE course: Natural Sciences",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`PHYSLAB普實125	MaMbMc
`,授課教師:`戴明鳳	TAI, MING-FONG
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>數位智慧科技實作與程式控制-成績需C-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"物理系109B A選修	物理系109B B選修	物理系109B C選修	"},{科號:"11120PHYS392000",課程中文名稱:"基礎天文觀測",課程英文名稱:"Fundamentals of Observational Astronomy",學分數:"3",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"物理系天文組為必修9選5之一。",停開註記:"",教室與上課時間:`GEN II綜二521	R6R7R8
`,授課教師:`賴詩萍	LAI, SHIH-PING
`,擋修說明:"",課程限制說明:"物理系大學部天文組優先，第3次選課起開放全校修習",第一二專長對應:"天文物理(第二專長)",學分學程對應:"(台聯大)太空科技與工程學分學程",不可加簽說明:"",必選修說明:"物理系109B A選修	物理系109B B選修	物理系109B C必修	物理系110B C必修	"},{科號:"11120PHYS432000",課程中文名稱:"相對論導論二",課程英文名稱:"Introduction to Relativity (II)",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"特定對象修習:已先修電磁學一、二及理論力學一二者。",停開註記:"",教室與上課時間:`PHYS物   501	M7M8M9
`,授課教師:`周定一	CHOU, DEAN-YI
`,擋修說明:"",課程限制說明:"排除大學部1年級2年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"物理系108B A選修	物理系108B B選修	物理系108B C選修	"},{科號:"11120PHYS434000",課程中文名稱:"近代宇宙學導論",課程英文名稱:"Introduction to Modern Cosmology",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"天文組為必修9選5之一",停開註記:"",教室與上課時間:`PHYS物   313	R7R8R9
`,授課教師:`江瑛貴	JIANG, ING-GUEY
`,擋修說明:"",課程限制說明:"",第一二專長對應:"天文物理(第二專長)	物理(第二專長)	物理(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"物理系108B A選修	物理系108B B選修	物理系108B C選修	"},{科號:"11120PHYS452000",課程中文名稱:"基本粒子物理導論二",課程英文名稱:"Intro. Elem. Particle Physics (II)",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`PHYS物   501	F5F6F7
`,授課教師:`曾柏彥	TSENG, PO-YEN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"物理系108B A選修	物理系108B B選修	物理系108B C選修	"},{科號:"11120PHYS463000",課程中文名稱:"原子分子物理導論",課程英文名稱:"Introduction to Atomic and Molecular Physics",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`PHYS物   504	RaRbRc
`,授課教師:`童世光	SHIH-KUANG TUNG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"物理(第二專長)	物理(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"物理系108B A選修	物理系108B B選修	物理系108B C選修	"},{科號:"11120PHYS465000",課程中文名稱:"光電物理導論",課程英文名稱:"Introduction to Optoelectronics",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`PHYS物   313	W3W4F3
`,授課教師:`劉怡維	LIU, I-WEI
`,擋修說明:"",課程限制說明:"物理系大學部優先，第3次選課起開放全校修習",第一二專長對應:"物理(第二專長)	物理(第一專長)",學分學程對應:"(跨領域)光電學分學程",不可加簽說明:"",必選修說明:"物理系108B A選修	物理系108B B必修	物理系108B C選修	物理系109B B必修	"},{科號:"11120PHYS472000",課程中文名稱:"固態物理導論二",課程英文名稱:"Introduction to Solid State Physics II",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`PHYS物   313	WnF4Fn
`,授課教師:`霍夫曼	Hoffmann,Germar
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"物理系108B A選修	物理系108B B選修	物理系108B C選修	"},{科號:"11120PHYS480000",課程中文名稱:"黑洞天文物理導論",課程英文名稱:"Introduction to Black Hole Astrophysics",學分數:"3",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"建議先修課程：普通天文學一、二",停開註記:"",教室與上課時間:`PHYS物  208	T5T6T7
`,授課教師:`楊湘怡	YANG, HSIANG-YI
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"物理系108B A選修	物理系108B B選修	物理系108B C選修	"},{科號:"11120PHYS486000",課程中文名稱:"量子資訊導論",課程英文名稱:"Introduction to Quantum Information",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`PHYS物   313	T3T4Tn
`,授課教師:`林晏詳	LIN, YEN-HSIANG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"物理系108B A選修	物理系108B B選修	物理系108B C選修	"},{科號:"11120PHYS492000",課程中文名稱:"專題研究二",課程英文名稱:"Undergraduate Research (II)",學分數:"1",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"請自行找指導教授進行專題(限物理系老師), 選定後請告知系辦.",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"限物理系大學部",第一二專長對應:"",學分學程對應:"(台聯大)太空科技與工程學分學程",不可加簽說明:"",必選修說明:"物理系108B A選修	物理系108B B選修	物理系108B C選修	"},{科號:"11120PHYS500101",課程中文名稱:"專題研究--物理教學二",課程英文名稱:"Special Topics on Teaching Physics II",學分數:"1",人限:"0",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"以加簽選課, 限擔任物理系教學助理者加簽, 若為物理系學生可計入畢業學分.",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"物理系111D  選修	物理系111MA 選修	物理系111MB 選修	物理系111MC 選修	"},{科號:"11120PHYS500102",課程中文名稱:"專題研究--物理教學四",課程英文名稱:"Special Topics on Teaching Physics IV",學分數:"1",人限:"0",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"以加簽選課. 限擔任物理系教學助理者加簽, 若為物理系學生可計入畢業學分.",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"物理系111D  選修	物理系111MA 選修	物理系111MB 選修	物理系111MC 選修	"},{科號:"11120PHYS520000",課程中文名稱:"古典力學",課程英文名稱:"Classical Mechanics",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`PHYS物   504	M7M8M9
`,授課教師:`張稚卿	CHANG, JYH-CHING
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"物理系111D  選修	物理系111MA 選修	物理系111MB 選修	物理系111MC 選修	"},{科號:"11120PHYS521000",課程中文名稱:"統計力學一",課程英文名稱:"Statistical Mechanics (I)",學分數:"3",人限:"120",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"大學部同學欲修課，請經授課老師同意加簽。應物為必修選科之一。",停開註記:"",教室與上課時間:`PHYS物  124	R5R6R7
`,授課教師:`黃一平	HUANG,YI-PING
`,擋修說明:"",課程限制說明:"限碩士班博士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"物理系111D  必修	物理系111MA 必修	物理系111MB 必修	物理系111MC 選修	"},{科號:"11120PHYS524500",課程中文名稱:"量子計算",課程英文名稱:"Quantum Computing",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`PHYS物   313	T7T8T9
`,授課教師:`蘇正耀	SU, ZHENG-YAO
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"物理系111D  選修	物理系111MA 選修	物理系111MB 選修	物理系111MC 選修	"},{科號:"11120PHYS532000",課程中文名稱:"電動力學二",課程英文名稱:"Electrodynamics (II)",學分數:"3",人限:"100",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"授課時間原則為150分鐘，其餘為彈性運用演習時間。應物、光物組為必修選科之一。",停開註記:"",教室與上課時間:`PHYS物  124	T3T4R3R4
`,授課教師:`史馬丁	SPINRATH, MARTIN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"物理系111D  必修	物理系111MA 選修	物理系111MB 必修	物理系111MC 必修	"},{科號:"11120PHYS539100",課程中文名稱:"超穎材料物理二",課程英文名稱:"Metamaterial Physics II",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`PHYS物   620	F3F4Fn
`,授課教師:`果尚志	GWO, SHANGJR
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"物理系111D  選修	物理系111MA 選修	物理系111MB 選修	物理系111MC 選修	"},{科號:"11120PHYS542000",課程中文名稱:"量子力學二",課程英文名稱:"Quantum Mechanics (II)",學分數:"3",人限:"100",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"大學部同學欲修課，請經授課老師同意加簽。應物、光物組為必修選科之一。",停開註記:"",教室與上課時間:`PHYS物  124	W3W4F3
`,授課教師:`徐百嫻	HSU, PAI-HSIEN
`,擋修說明:"",課程限制說明:"限碩士班博士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"物理系111D  必修	物理系111MA 必修	物理系111MB 必修	物理系111MC 必修	"},{科號:"11120PHYS543000",課程中文名稱:"量子技術的原理與應用",課程英文名稱:"Principle and application of quantum technology",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`PHYS物   501	R6R7R8
`,授課教師:`牟中瑜	MOU, CHUNG-YU
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"半導體學院111D  選修	半導體學院111M  選修	物理系111D  選修	物理系111MA 選修	物理系111MB 選修	物理系111MC 選修	"},{科號:"11120PHYS572000",課程中文名稱:"凝態物理二",課程英文名稱:"Condensed Matter Physics(II)",學分數:"3",人限:"12",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`PHYS物   613	M6M7M8
`,授課教師:`張博堯	CHANG, PO-YAO
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"物理系111D  選修	物理系111MA 選修	物理系111MB 選修	物理系111MC 選修	"},{科號:"11120PHYS585500",課程中文名稱:"非線性動力學與混沌",課程英文名稱:"Nonlinear Dynamics and Chaos",學分數:"3",人限:"25",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"歡迎大二以上(已修習過理論力學一)選修",停開註記:"",教室與上課時間:`PHYS物   620	F5F6F7
`,授課教師:`吳國安	WU, KUO-AN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"物理系111D  選修	物理系111MA 選修	物理系111MB 選修	物理系111MC 選修	"},{科號:"11120PHYS587000",課程中文名稱:"雷射物理與應用一",課程英文名稱:"Laser Physics and Applications (I)",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"此為光物組必修選科之一。",停開註記:"",教室與上課時間:`PHYS物   501	T3T4F2
`,授課教師:`劉怡維	LIU, I-WEI
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"物理系111D  選修	物理系111MA 選修	物理系111MB 選修	物理系111MC 必修	"},{科號:"11120PHYS591000",課程中文名稱:"物理與人工智慧(AI)實作導論",課程英文名稱:"Hands-on Artificial Intelligence (AI)",學分數:"3",人限:"24",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"院學士班大三四同學欲點選請EMAIL課務組",停開註記:"",教室與上課時間:`PHYS物  208	R3R4Rn
`,授課教師:`徐百嫻	HSU, PAI-HSIEN
`,擋修說明:"",課程限制說明:"排除大學部1年級2年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"物理系111D  選修	物理系111MA 選修	物理系111MB 選修	物理系111MC 選修	"},{科號:"11120PHYS594000",課程中文名稱:"專題討論二",課程英文名稱:"Colloquium (Ⅱ)",學分數:"1",人限:"120",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"研究生必修專題討論2學期(1+1學分)",停開註記:"",教室與上課時間:`PHYS物  124	W5W6
`,授課教師:`唐述中	TANG, SHU-JUNG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"物理系111D  必修	物理系111MA 必修	物理系111MB 必修	物理系111MC 必修	先進光源學位學程111DA 必修	先進光源學位學程111MA 必修	"},{科號:"11120PHYS596001",課程中文名稱:"書報討論--原子分子光學二",課程英文名稱:"Seminar--AMO II",學分數:"1",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"/Offered in English 碩士班必修書報討論1學分；博士班必選書報討論2學期。",停開註記:"",教室與上課時間:`PHYS物  124	M5M6
`,授課教師:`褚志崧	CHUU, CHIH-SUNG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"物理系111D  必修	物理系111MA 必修	物理系111MB 必修	物理系111MC 必修	"},{科號:"11120PHYS596003",課程中文名稱:"書報討論--粒子二",課程英文名稱:"Seminar--Particle Physics II",學分數:"1",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"碩士班必修書報討論1學分；博士班必選書報討論2學期。",停開註記:"",教室與上課時間:`PHYS物   019	RnR5
`,授課教師:`曾柏彥	TSENG, PO-YEN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"物理系111D  必修	物理系111MA 必修	物理系111MB 必修	物理系111MC 必修	"},{科號:"11120PHYS597001",課程中文名稱:"物理專題--基本粒子天文學與宇宙論",課程英文名稱:"Special Topic:Astroparticle Physics and Cosmology",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`GEN II綜二501	M6M7M8
`,授課教師:`張維甫	CHANG, WE-FU
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"物理系111D  選修	物理系111MA 選修	物理系111MB 選修	物理系111MC 選修	"},{科號:"11120PHYS597002",課程中文名稱:"物理專題--凝態計算物理",課程英文名稱:"Special Topic : Computational Condensed Matter Physics",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`CC計中電一	M3M4Mn
`,授課教師:`鄭弘泰	HORNG-TAY JENG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"物理系111D  選修	物理系111MA 選修	物理系111MB 選修	物理系111MC 選修	"},{科號:"11120PHYS597003",課程中文名稱:"物理專題--近代物理發展史",課程英文名稱:"Special Topic: History of Modern Physics",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"須先修畢科目:電磁學二、理論力學二、熱統計力學一、量子物理一",停開註記:"",教室與上課時間:`PHYS物   501	T7T8T9
`,授課教師:`周定一	CHOU, DEAN-YI
`,擋修說明:"",課程限制說明:"排除大學部1年級2年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"物理系111D  選修	物理系111MA 選修	物理系111MB 選修	物理系111MC 選修	"},{科號:"11120PHYS641000",課程中文名稱:"高等量子力學",課程英文名稱:"Advanced Quantum Mechanics",學分數:"3",人限:"25",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`GEN II綜二501	M3M4Mn
`,授課教師:`朱創新	CHONG-SUN CHU
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"物理系111D  選修	物理系111MA 選修	物理系111MB 選修	物理系111MC 選修	"},{科號:"11120PHYS651000",課程中文名稱:"基本粒子物理一",課程英文名稱:"Elementary Particle Physics (I)",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`GEN II綜二501	W7W8W9
`,授課教師:`張敬民	CHEUNG KING MAN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"物理系111D  選修	物理系111MA 選修	物理系111MB 選修	物理系111MC 選修	"},{科號:"11120PHYS692000",課程中文名稱:"論文研究",課程英文名稱:"Thesis",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限物理所碩二以上修習",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"排除物理系碩士班1年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"物理系111MA 必修	物理系111MB 必修	物理系111MC 必修	"},{科號:"11120PHYS992000",課程中文名稱:"論文研究",課程英文名稱:"Thesis",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限物理所博二以上修習",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"排除博士班1年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"物理系111D  必修	"},{科號:"11120PME 101500",課程中文名稱:"工場實習一",課程英文名稱:"Work Shop Practices (I)",學分數:"1",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"授課教師:馮安萱",停開註記:"",教室與上課時間:`ENG I工一 215	T5T6T7
`,授課教師:`動機系	
`,擋修說明:"",課程限制說明:"工學院,大學部優先，第3次選課起開放全校修習",第一二專長對應:"工業工程與工程管理(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"工工系111B  必修	"},{科號:"11120PME 101601",課程中文名稱:"工場實習",課程英文名稱:"Work Shop Practices",學分數:"1",人限:"58",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`ENG I工一 215	W6W7W8
`,授課教師:`蘇國雄	SU, KUO-HSIUNG
石昭明	SHIH, ALBERT JAU-MIN
`,擋修說明:"",課程限制說明:"限動機系大學部1年級清班",第一二專長對應:"工業工程與工程管理(第一專長)	動力機械工程(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"動機系111BA 必修	"},{科號:"11120PME 101602",課程中文名稱:"工場實習",課程英文名稱:"Work Shop Practices",學分數:"1",人限:"58",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`ENG I工一 215	R6R7R8
`,授課教師:`張金榮	CHANG,JIN-RONG
石昭明	SHIH, ALBERT JAU-MIN
`,擋修說明:"",課程限制說明:"限動機系大學部1年級華班",第一二專長對應:"工業工程與工程管理(第一專長)	動力機械工程(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"動機系111BB 必修	"},{科號:"11120PME 101701",課程中文名稱:"機械設計製圖",課程英文名稱:"Computer Aided Machine  Design & Drawing",學分數:"3",人限:"70",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`ENG I工一 434	F3F4Fn
`,授課教師:`劉俊賢	LIU, CHUN-HSIEN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)創新設計學分學程",不可加簽說明:"",必選修說明:"動機系111BA 選修	動機系111BB 選修	"},{科號:"11120PME 101702",課程中文名稱:"機械設計製圖",課程英文名稱:"Computer Aided Machine  Design & Drawing",學分數:"3",人限:"70",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`ENG I工一 434	F5F6F7
`,授課教師:`劉俊賢	LIU, CHUN-HSIEN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)創新設計學分學程",不可加簽說明:"",必選修說明:"動機系111BA 選修	動機系111BB 選修	"},{科號:"11120PME 134101",課程中文名稱:"應用力學一",課程英文名稱:"Applied Mechanics I",學分數:"2",人限:"65",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`ENG I工一 101	R5R6
`,授課教師:`王偉中	WANG, WEI-CHUNG
`,擋修說明:"",課程限制說明:"動機系大學部1年級清班優先，第3次選課起開放全校修習",第一二專長對應:"動力機械工程(第二專長)	動力機械工程(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"動機系111BA 必修	"},{科號:"11120PME 134102",課程中文名稱:"應用力學一",課程英文名稱:"Applied Mechanics I",學分數:"2",人限:"65",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`ENG I工一 213	T5T6
`,授課教師:`江國寧	CHIANG, KUO-NING
`,擋修說明:"",課程限制說明:"動機系大學部1年級華班優先，第3次選課起開放全校修習",第一二專長對應:"動力機械工程(第二專長)	動力機械工程(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"動機系111BB 必修	"},{科號:"11120PME 200201",課程中文名稱:"工程數學二",課程英文名稱:"Engineering Mathematics II",學分數:"3",人限:"63",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`ENG I工一 201	M3M4W2
`,授課教師:`田孟軒	TIEN, MENG-HSUAN
`,擋修說明:"",課程限制說明:"限動機系大學部2年級3年級4年級清班",第一二專長對應:"材料科學工程(第二專長)	材料科學工程(第一專長)	動力機械工程(第二專長)	動力機械工程(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"動機系110BA 必修	"},{科號:"11120PME 200202",課程中文名稱:"工程數學二",課程英文名稱:"Engineering Mathematics II",學分數:"3",人限:"63",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`ENG I工一 215	M3M4W2
`,授課教師:`張敬	CHANG, CHING
`,擋修說明:"",課程限制說明:"限動機系大學部2年級3年級4年級華班",第一二專長對應:"材料科學工程(第二專長)	材料科學工程(第一專長)	動力機械工程(第二專長)	動力機械工程(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"動機系110BB 必修	"},{科號:"11120PME 210401",課程中文名稱:"基礎熱流學二",課程英文名稱:"Thermal and fluid Science (II)",學分數:"3",人限:"60",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`ENG I工一 214	M5R5R6
`,授課教師:`陳玉彬	CHEN,YUBIN
`,擋修說明:"",課程限制說明:"限動機系大學部2年級3年級4年級清班",第一二專長對應:"動力機械工程(第二專長)	動力機械工程(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"動機系110BA 必修	"},{科號:"11120PME 210402",課程中文名稱:"基礎熱流學二",課程英文名稱:"Thermal and fluid Science (II)",學分數:"3",人限:"60",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`ENG I工一 213	M5R5R6
`,授課教師:`楊佩良	YANG, PATRICIA JIANN
`,擋修說明:"",課程限制說明:"限動機系大學部2年級3年級4年級華班",第一二專長對應:"動力機械工程(第二專長)	動力機械工程(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"動機系110BB 必修	"},{科號:"11120PME 234201",課程中文名稱:"應用力學二",課程英文名稱:"Applied Mechanics (II)",學分數:"2",人限:"55",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`ENG I工一 214	T7T8
`,授課教師:`李昌駿	LEE, CHANG-CHUN
`,擋修說明:"",課程限制說明:"限動機系大學部2年級清班",第一二專長對應:"動力機械工程(第二專長)	動力機械工程(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"動機系110BA 必修	"},{科號:"11120PME 234202",課程中文名稱:"應用力學二",課程英文名稱:"Applied Mechanics (II)",學分數:"2",人限:"55",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`ENG I工一 214	M7M8
`,授課教師:`李昌駿	LEE, CHANG-CHUN
`,擋修說明:"",課程限制說明:"限動機系大學部2年級華班",第一二專長對應:"動力機械工程(第二專長)	動力機械工程(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"動機系110BB 必修	"},{科號:"11120PME 242501",課程中文名稱:"機動學",課程英文名稱:"Kinematics of Machinery",學分數:"3",人限:"55",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`ENG I工一 434	T2T3T4
`,授課教師:`覺元彙	CHUEH, YUAN-HUI
`,擋修說明:"",課程限制說明:"限動機系大學部2年級3年級4年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"動機系108BA 選修	動機系108BB 選修	動機系109BA 選修	動機系109BB 選修	動機系110BA 選修	動機系110BB 選修	"},{科號:"11120PME 300600",課程中文名稱:"材料科學導論",課程英文名稱:"Introduction to Materials Science",學分數:"3",人限:"200",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`ENG I工一 107	M3M4R4
`,授課教師:`蔡哲瑋	TSAI, TSE-WEI
`,擋修說明:"",課程限制說明:"動機系大學部1年級4年級優先，第3次選課起開放全校修習",第一二專長對應:"材料科學工程(第二專長)	材料科學工程(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"動機系111BA 必修	動機系111BB 必修	"},{科號:"11120PME 301000",課程中文名稱:"微系統概論一",課程英文名稱:"Introduction to Microsystem Technology (I)",學分數:"3",人限:"80",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"動機系大學部奈微米學程選修",停開註記:"",教室與上課時間:`ENG I工一 214	F6F7F8
`,授課教師:`方維倫	FANG, WEI-LEUN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)微系統科技整合學分學程",不可加簽說明:"",必選修說明:"動機系109BA 選修	動機系109BB 選修	"},{科號:"11120PME 301101",課程中文名稱:"固體力學與奈米材料實驗",課程英文名稱:"Solid Mechanics and Nanomaterials Laboratory",學分數:"1",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`ENG I工一 320	M5M6M7M8
`,授課教師:`方維倫	FANG, WEI-LEUN
`,擋修說明:"",課程限制說明:"限動機系大學部3年級",第一二專長對應:"動力機械工程(第二專長)	動力機械工程(第一專長)",學分學程對應:"(跨領域)奈米與光電半導體產業學分學程/(跨領域)奈米科技學分學程",不可加簽說明:"",必選修說明:"動機系109BA 必修	動機系109BB 必修	"},{科號:"11120PME 301102",課程中文名稱:"固體力學與奈米材料實驗",課程英文名稱:"Solid Mechanics and Nanomaterials Laboratory",學分數:"1",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`ENG I工一 320	T5T6T7T8
`,授課教師:`方維倫	FANG, WEI-LEUN
`,擋修說明:"",課程限制說明:"限動機系大學部3年級",第一二專長對應:"動力機械工程(第二專長)	動力機械工程(第一專長)",學分學程對應:"(跨領域)奈米與光電半導體產業學分學程/(跨領域)奈米科技學分學程",不可加簽說明:"",必選修說明:"動機系109BA 必修	動機系109BB 必修	"},{科號:"11120PME 301103",課程中文名稱:"固體力學與奈米材料實驗",課程英文名稱:"Solid Mechanics and Nanomaterials Laboratory",學分數:"1",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`ENG I工一 320	R5R6R7R8
`,授課教師:`方維倫	FANG, WEI-LEUN
`,擋修說明:"",課程限制說明:"限動機系大學部3年級",第一二專長對應:"動力機械工程(第二專長)	動力機械工程(第一專長)",學分學程對應:"(跨領域)奈米與光電半導體產業學分學程/(跨領域)奈米科技學分學程",不可加簽說明:"",必選修說明:"動機系109BA 必修	動機系109BB 必修	"},{科號:"11120PME 312000",課程中文名稱:"熱傳與質傳學",課程英文名稱:"Heat and Mass Transfer",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"動機系大學部能源學程必選課程。",停開註記:"",教室與上課時間:`ENG I工一 217	W5W6W7
`,授課教師:`王訓忠	WONG, SHWIN-CHUNG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)微系統科技整合學分學程",不可加簽說明:"",必選修說明:"動機系109BA 選修	動機系109BB 選修	"},{科號:"11120PME 320100",課程中文名稱:"電子學一",課程英文名稱:"Electronics I",學分數:"3",人限:"120",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程平均每週上課時間為150分鐘",停開註記:"",教室與上課時間:`GEN IV綜四121	W3W4F3F4
`,授課教師:`陳榮順	CHEN, RONG-SHUN
`,擋修說明:"",課程限制說明:"限動機系大學部2年級清班華班",第一二專長對應:"醫學物理(第二專長)	動力機械工程(第二專長)	動力機械工程(第一專長)",學分學程對應:"(跨領域)微系統科技整合學分學程/(跨領域)積體電路設計學分學程",不可加簽說明:"",必選修說明:"動機系110BA 必修	動機系110BB 必修	"},{科號:"11120PME 320301",課程中文名稱:"電子電路實驗一",課程英文名稱:"Microelectronics Labs. (I)",學分數:"1",人限:"60",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"講解課在工一216",停開註記:"",教室與上課時間:`ENG I工一 324	M6M7M8
`,授課教師:`陳榮順	CHEN, RONG-SHUN
`,擋修說明:"",課程限制說明:"動機系大學部2年級清班優先，第3次選課起開放全校修習",第一二專長對應:"動力機械工程(第二專長)	動力機械工程(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"動機系110BA 必修	"},{科號:"11120PME 320302",課程中文名稱:"電子電路實驗一",課程英文名稱:"Microelectronics Labs. (I)",學分數:"1",人限:"60",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"講解課在工一216",停開註記:"",教室與上課時間:`ENG I工一 324	T6T7T8
`,授課教師:`陳榮順	CHEN, RONG-SHUN
`,擋修說明:"",課程限制說明:"動機系大學部2年級華班優先，第3次選課起開放全校修習",第一二專長對應:"動力機械工程(第二專長)	動力機械工程(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"動機系110BB 必修	"},{科號:"11120PME 320500",課程中文名稱:"電動機械",課程英文名稱:"Electric Machinery",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"動機系大學部電控學程選修",停開註記:"",教室與上課時間:`ENG I工一 213	FaFbFc
`,授課教師:`洪聯馨	HUNG, LAIN-SHIN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"動機系108BA 選修	動機系108BB 選修	動機系109BA 選修	動機系109BB 選修	"},{科號:"11120PME 320800",課程中文名稱:"控制系統二",課程英文名稱:"Control  System II",學分數:"3",人限:"80",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"動機系大學部電控學程必選",停開註記:"",教室與上課時間:`ENG I工一 101	T7T8W6
`,授課教師:`葉廷仁	YEH, TING-JEN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)奈米與光電半導體產業學分學程/(跨領域)奈米科技學分學程",不可加簽說明:"",必選修說明:"動機系109BA 選修	動機系109BB 選修	"},{科號:"11120PME 320900",課程中文名稱:"邏輯設計與應用",課程英文名稱:"Logic Design and Applications",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"動機系大學部電控學程選修",停開註記:"",教室與上課時間:`ENG I工一 201	T3T4R3
`,授課教師:`陳致真	CHEN, CHIH-CHEN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"動機系109BA 選修	動機系109BB 選修	"},{科號:"11120PME 321100",課程中文名稱:"生醫微型系統晶片",課程英文名稱:"Microsystem LabChips for BioMedical Applications",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`ENG I工一 209	R2R3R4
`,授課教師:`劉承賢	LIU, CHENG-HSIEN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"動機系109BA 選修	動機系109BB 選修	"},{科號:"11120PME 332000",課程中文名稱:"振動學",課程英文名稱:"Mechanical Vibrations",學分數:"3",人限:"65",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"動機系大學部奈微米學程必選/精密機械與智慧製造學程、電控學程選修。實驗課在工一323",停開註記:"",教室與上課時間:`ENG I工一 431	F2F3F4
`,授課教師:`李銘晃	LI, MING-HUANG
`,擋修說明:"",課程限制說明:"動機系優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"動機系108BA 選修	動機系108BB 選修	動機系109BA 選修	動機系109BB 選修	"},{科號:"11120PME 334900",課程中文名稱:"奈米科技與應用",課程英文名稱:"Nanotechnology and its applications",學分數:"3",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"動機系大學部奈微米學程必選",停開註記:"",教室與上課時間:`ENG I工一 213	M2M3M4
`,授課教師:`李銘晃	LI, MING-HUANG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)奈米與光電半導體產業學分學程/(跨領域)奈米科技學分學程",不可加簽說明:"",必選修說明:"動機系108BA 選修	動機系108BB 選修	動機系109BA 選修	動機系109BB 選修	"},{科號:"11120PME 343602",課程中文名稱:"光機電系統設計",課程英文名稱:"Opto-Mechatronic Systems Design",學分數:"3",人限:"35",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"動機系大學部精密機械與智慧製造學程必選/奈微米學程選修",停開註記:"",教室與上課時間:`ENG I工一 215	W3W4Wn
`,授課教師:`曹哲之	TSAO, CHE-CHIH
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)創新創業學分學程",不可加簽說明:"",必選修說明:"動機系109BA 選修	動機系109BB 選修	"},{科號:"11120PME 400200",課程中文名稱:"專題研究二",課程英文名稱:"Undergraduate Research (II)",學分數:"2",人限:"0",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"動機系修畢專題研究一者，於加退選第一週前至系辦申請，並經課程委員會同意後，以加簽方式選課。",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:`<div>
  擋修對象 : 動機系 <br>
  先修科目 : <BR><BR>專題研究一-成績需C-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"",第一二專長對應:"動力機械工程(第二專長)	動力機械工程(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"動機系108BA 必修	動機系108BB 必修	"},{科號:"11120PME 400300",課程中文名稱:"專題研究一",課程英文名稱:"Research on special topics",學分數:"1",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"限動機系大學部3年級4年級",第一二專長對應:"動力機械工程(第二專長)	動力機械工程(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"動機系109BA 必修	動機系109BB 必修	"},{科號:"11120PME 400700",課程中文名稱:"機器人製作與競賽實務專題",課程英文名稱:"Design and Manufacture for Robot Competition Project",學分數:"2",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`ENG I工一 201	WaWbWc
`,授課教師:`陳榮順	CHEN, RONG-SHUN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"動機系108BA 選修	動機系108BB 選修	動機系109BA 選修	動機系109BB 選修	"},{科號:"11120PME 403100",課程中文名稱:"工程光學",課程英文名稱:"Engineering Optics",學分數:"3",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"動機系大學部精密機械與智慧製造學程選修；物理五選二科目。",停開註記:"",教室與上課時間:`ENG I工一 201	M5M6M7
`,授課教師:`王威智	WANG, WEI-CHIH
`,擋修說明:"",課程限制說明:"",第一二專長對應:"動力機械工程(第二專長)	動力機械工程(第一專長)",學分學程對應:"(跨領域)光電學分學程",不可加簽說明:"",必選修說明:"動機系108BA 選修	動機系108BB 選修	"},{科號:"11120PME 416000",課程中文名稱:"燃料電池及氫能",課程英文名稱:"Fuel cell and hydrogen energy",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`ENG I工一 211	T5T6T7
`,授課教師:`森川響二朗	KYOJIRO MORIKAWA
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"動機系108BA 選修	動機系108BB 選修	動機系109BA 選修	動機系109BB 選修	"},{科號:"11120PME 420900",課程中文名稱:"微算機導論",課程英文名稱:"Introduction to Microcomputer",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"動機系大學部電控學程選修",停開註記:"",教室與上課時間:`ENG I工一 434	M2M3M4
`,授課教師:`洪健中	HONG, CHIEN-CHONG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"動機系108BA 選修	動機系108BB 選修	"},{科號:"11120PME 442600",課程中文名稱:"磁性元件概論",課程英文名稱:"Introduction to Magnetic Devices",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"動機系大學部精密機械與智慧製造學程選修，同步遠距教學",停開註記:"",教室與上課時間:`ENG I工一 209	T6T7T8
`,授課教師:`賴梅鳳	LAI, MEI-FENG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"動機系108BA 選修	動機系108BB 選修	"},{科號:"11120PME 443100",課程中文名稱:"智慧製造導論",課程英文名稱:"Introduction of Intelligent Manufacturing",學分數:"3",人限:"25",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`ENG I工一 434	FaFbFc
`,授課教師:`劉俊葳	LIU, CHUN-WEI
`,擋修說明:"",課程限制說明:"動機系大學部4年級優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"動機系108BA 選修	動機系108BB 選修	"},{科號:"11120PME 500000",課程中文名稱:"書報討論",課程英文名稱:"Seminar",學分數:"1",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`ENG I工一 107	R7R8
`,授課教師:`劉承賢	LIU, CHENG-HSIEN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"動機系111D  必修	動機系111M  必修	"},{科號:"11120PME 500600",課程中文名稱:"奈微系統技術論壇",課程英文名稱:"Forum on Nano-/Microsystem Technology",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`ENG I工一 108	W5W6W7
`,授課教師:`北森武彥	Takehiko Kitamori
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"動機系111D  選修	動機系111M  選修	"},{科號:"11120PME 510400",課程中文名稱:"工程量子力學",課程英文名稱:"Engineering Quantum Mechanics",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`ENG I工一 217	T6T7T8
`,授課教師:`洪哲文	HONG, CHE-WUN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"動機系111D  選修	動機系111M  選修	"},{科號:"11120PME 510900",課程中文名稱:"流動穩定論",課程英文名稱:"Hydrodynamic Stability",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`ENG I工一 212	W5W6W7
`,授課教師:`張敬	CHANG, CHING
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"動機系111D  選修	動機系111M  選修	"},{科號:"11120PME 512200",課程中文名稱:"熱對流",課程英文名稱:"Heat Convection",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"動機系碩士班必選、博士班資格考科目。",停開註記:"",教室與上課時間:`ENG I工一 217	R4R5R6
`,授課教師:`劉通敏	LIOU, TONG-MIIN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)先進能源研究生學分學程",不可加簽說明:"",必選修說明:"動機系111D  選修	動機系111M  選修	"},{科號:"11120PME 512300",課程中文名稱:"電子裝備冷卻系統",課程英文名稱:"Cooling Systems for  Electronic Equipment",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"動機系大學部能源學程選修",停開註記:"停開",教室與上課時間:`ENG I工一 201	T6T7T8
`,授課教師:`王訓忠	WONG, SHWIN-CHUNG
`,擋修說明:`<div>
  擋修對象 : 大學部 <br>
  先修科目 : <BR><BR>熱傳與質傳學-成績需C-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)奈米與光電半導體產業學分學程/(跨領域)奈米科技學分學程/(跨領域)先進能源研究生學分學程",不可加簽說明:"",必選修說明:"動機系111D  選修	動機系111M  選修	"},{科號:"11120PME 512800",課程中文名稱:"冷凍空調系統模擬與熱交換",課程英文名稱:"Heat exchangers and System simulation of HVAC",學分數:"3",人限:"80",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"動機系大學部能源學程選修",停開註記:"",教室與上課時間:`ENG I工一 217	M2M3M4
`,授課教師:`陳理定	CHEN, LI-TING
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"動機系111D  選修	動機系111M  選修	"},{科號:"11120PME 513200",課程中文名稱:"進階燃燒學",課程英文名稱:"Advanced Combustion",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`ENG I工一 210	TnT5R2
`,授課教師:`許文震	SHEU, WEN-JENN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"動機系111D  選修	動機系111M  選修	"},{科號:"11120PME 514400",課程中文名稱:"兩相流",課程英文名稱:"Two-Phase Flow",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`ENG I工一 209	M5M6M7
`,授課教師:`李明蒼	LEE, MING-TSANG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"動機系111D  選修	動機系111M  選修	"},{科號:"11120PME 515000",課程中文名稱:"渦輪機",課程英文名稱:"Gas Turbine Theory",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`ENG I工一 215	T3T4R3
`,授課教師:`蔣小偉	CHIANG, HSIAO-WEI
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"動機系111D  選修	動機系111M  選修	"},{科號:"11120PME 519100",課程中文名稱:"偏微分方程",課程英文名稱:"Partial Differential Equations",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`ENG I工一 209	W2W3W4
`,授課教師:`賴君亮	LAI, CHUN-LIANG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"動機系111D  選修	動機系111M  選修	"},{科號:"11120PME 520600",課程中文名稱:"聲學陣列信號處理",課程英文名稱:"Microphone Array Signal Processing",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"動機系碩士班電控組必選科目",停開註記:"",教室與上課時間:`ENG I工一 216	M3M4W4
`,授課教師:`白明憲	BAI, MING-SIAN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"電機系111D  選修	電機系111M  選修	動機系111D  選修	動機系111M  選修	"},{科號:"11120PME 523300",課程中文名稱:"生醫微系統",課程英文名稱:"Biomedical Microsystem",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"電控學程選修",停開註記:"",教室與上課時間:`ENG I工一 211	F2F3F4
`,授課教師:`洪健中	HONG, CHIEN-CHONG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"動機系111D  選修	動機系111M  選修	"},{科號:"11120PME 526000",課程中文名稱:"機器人學",課程英文名稱:"Robotics",學分數:"3",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"電控學程選修，其餘有意願修課者以加簽方式辦理",停開註記:"",教室與上課時間:`ENG I工一 216	M7M8W7
`,授課教師:`葉廷仁	YEH, TING-JEN
`,擋修說明:"",課程限制說明:"限動機系碩士班博士班",第一二專長對應:"",學分學程對應:"(跨領域)人工智慧與應用進階學分學程/(跨領域)人工智慧與應用基礎學分學程",不可加簽說明:"",必選修說明:"動機系111D  選修	動機系111M  選修	"},{科號:"11120PME 534400",課程中文名稱:"結構動力學",課程英文名稱:"Structure Dynamics",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`ENG I工一 210	M2W3W4
`,授課教師:`田孟軒	TIEN, MENG-HSUAN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"動機系111D  選修	動機系111M  選修	"},{科號:"11120PME 534800",課程中文名稱:"複合材料力學",課程英文名稱:"Mechanics of Composite Materials",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`ENG I工一 213	M6M7M8
`,授課教師:`葉孟考	YEH, MENG-KAO
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"動機系111D  選修	動機系111M  選修	"},{科號:"11120PME 535200",課程中文名稱:"振動控制",課程英文名稱:"Vibration Control",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`ENG I工一 210	F5F6F7
`,授課教師:`張禎元	CHANG, JEN-YUAN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"動機系111D  選修	動機系111M  選修	"},{科號:"11120PME 542900",課程中文名稱:"積層製造學",課程英文名稱:"Additive Manufacturing",學分數:"3",人限:"45",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`ENG I工一 215	M6M7M8
`,授課教師:`覺元彙	CHUEH, YUAN-HUI
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"動機系111D  選修	動機系111M  選修	"},{科號:"11120PME 543100",課程中文名稱:"電腦輔助製造專題",課程英文名稱:"Special Topics in Computer-Aided Manufacturing",學分數:"3",人限:"35",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"動機系碩士班機設組必選科目,講解教室在工一216",停開註記:"",教室與上課時間:`ENG I工一 434	R2R3R4
`,授課教師:`曹哲之	TSAO, CHE-CHIH
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"動機系111D  選修	動機系111M  選修	"},{科號:"11120PME 543200",課程中文名稱:"製造技術專題",課程英文名稱:"Special Topics in Manufacturing Technology",學分數:"3",人限:"24",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`ENG I工一 434	WaWbWc
`,授課教師:`劉俊葳	LIU, CHUN-WEI
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"動機系111D  選修	動機系111M  選修	"},{科號:"11120PME 543600",課程中文名稱:"精密機械設計二",課程英文名稱:"Precision Machine Design (II)",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`ENG I工一 214	W6W7W8
`,授課教師:`宋震國	SUNG, CHENG-KUO
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"動機系111D  選修	動機系111M  選修	"},{科號:"11120PME 544100",課程中文名稱:"微小尺度系統設計與製作技術",課程英文名稱:"Design and manufacture of miniaturized systems",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"動機系精密機械與智慧製造學程選修,同步遠距教學",停開註記:"",教室與上課時間:`ENG I工一 108	F6F7F8
`,授課教師:`賴梅鳳	LAI, MEI-FENG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"動機系111D  選修	動機系111M  選修	"},{科號:"11120PME 544200",課程中文名稱:"微奈米製造技術",課程英文名稱:"Micro and Nano Fabrication Technology",學分數:"3",人限:"24",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"動機系博士班資格考科目及碩士班機設組必選科目",停開註記:"",教室與上課時間:`DELTA台達321	F5F6F7
`,授課教師:`傅建中	FU, CHIEN-CHUNG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)奈米科技學分學程",不可加簽說明:"",必選修說明:"動機系111D  選修	動機系111M  選修	"},{科號:"11120PME 544300",課程中文名稱:"光電子學",課程英文名稱:"Opto Electronics",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"動機系博士班資格考科目及碩士班光機電系統組必選科目",停開註記:"",教室與上課時間:`ENG I工一 216	T2T3T4
`,授課教師:`羅丞曜	LO, CHENG-YAO
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"動機系111D  選修	動機系111M  選修	"},{科號:"11120PME 545900",課程中文名稱:"製程診斷與分析",課程英文名稱:"Process Diagnosis and Analysis",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"欲加簽同學及上課連結請見課綱",停開註記:"",教室與上課時間:`ENG I工一 213	W2W3W4
`,授課教師:`林士傑	LIN, SHIH-CHIEH
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"動機系111D  選修	動機系111M  選修	"},{科號:"11120PME 570100",課程中文名稱:"人工智慧與機械資訊專論",課程英文名稱:"Special Topics on Artificial Intelligence and Mechatronic Informatics",學分數:"3",人限:"60",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"動機系碩士班人工智慧組必選科目",停開註記:"",教室與上課時間:`ENG I工一 201	W7W8W9
`,授課教師:`蔡宏營	TSAI, HUNG-YIN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"動機系111D  選修	動機系111M  選修	"},{科號:"11120PME 600000",課程中文名稱:"論文研究",課程英文名稱:"Thesis",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限動機系碩二以上修習",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"排除動機系碩士班1年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"資通訊控制與熱流產碩專班111M  必修	智慧資料中心產碩專班111M  必修	資通訊熱流電聲產碩專班111M  必修	動機系111M  必修	"},{科號:"11120PME 634100",課程中文名稱:"結構最佳化設計",課程英文名稱:"Optimum Structural Design",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`ENG I工一 209	F2F3F4
`,授課教師:`鄭仙志	CHENG, HSIEN-CHIE
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"動機系111D  選修	動機系111M  選修	"},{科號:"11120PME 634300",課程中文名稱:"電子封裝力學概論",課程英文名稱:"Fundamental Mechanics of Electronic Packaging",學分數:"3",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"建議先修科目：材料力學、有限單元法或有限單元法導論",停開註記:"",教室與上課時間:`ENG I工一 213	W6W7W8
`,授課教師:`江國寧	CHIANG, KUO-NING
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)奈米與光電半導體產業學分學程/(跨領域)奈米科技學分學程",不可加簽說明:"",必選修說明:"半導體學院111D  選修	半導體學院111M  選修	動機系111D  選修	動機系111M  選修	"},{科號:"11120PME 635000",課程中文名稱:"有限單元法之應用",課程英文名稱:"Applications of Finite Element Method",學分數:"3",人限:"65",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`ENG I工一 434	TaTbTc
`,授課教師:`李銘孝	LEE, MING-HSIAO
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"動機系111D  選修	動機系111M  選修	"},{科號:"11120PME 635100",課程中文名稱:"非線性有限單元法",課程英文名稱:"Nonlinear Finite Element Method",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`ENG I工一 212	TnT5T6
`,授課教師:`黃琮暉	HUANG, TSUNG-HUI
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"動機系111D  選修	動機系111M  選修	"},{科號:"11120PME 800000",課程中文名稱:"論文研究",課程英文名稱:"Thesis",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限動機系博二以上修習",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"排除動機系博士班1年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"動機系111D  必修	"},{科號:"11120PMED700300",課程中文名稱:"專題演講",課程英文名稱:"Colloquium",學分數:"1",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程為精準醫療學程學生必修課程，開放其他學院系或學程選修。",停開註記:"",教室與上課時間:`GEN II綜二616	W5
`,授課教師:`周裕珽	CHOU, YU-TING
黃玠誠	HUANG, CHIEH-CHENG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"精準醫療博士學程111D  必修	"},{科號:"11120QF  100201",課程中文名稱:"資訊工程導論",課程英文名稱:"Introduction to Information Engineering",學分數:"3",人限:"60",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`TSMC台積104	TaTbTc
`,授課教師:`陳政琦	CHEN, CHENG-CHI
`,擋修說明:"",課程限制說明:"計財系,科管院學士班優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"計財系111B  必修	"},{科號:"11120QF  100300",課程中文名稱:"計算機程式設計",課程英文名稱:"Introduction to Programming",學分數:"3",人限:"80",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`TSMC台積104	T7T8T9
`,授課教師:`陳政琦	CHEN, CHENG-CHI
`,擋修說明:"",課程限制說明:"限計財系",第一二專長對應:"數據科學(第二專長)",學分學程對應:"(跨領域)數據科學學分學程/(跨領域)音樂科技與健康學分學程",不可加簽說明:"",必選修說明:"計財系111B  必修	"},{科號:"11120QF  100501",課程中文名稱:"會計學二",課程英文名稱:"Accounting (II)",學分數:"3",人限:"100",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程為 16 週課程",停開註記:"",教室與上課時間:`TSMC台積104	F6F7F8
`,授課教師:`潘虹華	PAN, HUNG-HUA
`,擋修說明:`<div>
  擋修對象 : 大學部 <br>
  先修科目 : <BR><BR>會計學一-成績需C-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"【上學期原修會計學一QF  100401(潘虹華老師)同學選課優先,第3次選課起開放】",第一二專長對應:"經濟(第一專長)	計量財務金融(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"經濟系111BA 必修	經濟系111BB 必修	計財系111B  必修	科管院學士班111B  必修	"},{科號:"11120QF  100502",課程中文名稱:"會計學二",課程英文名稱:"Accounting (II)",學分數:"3",人限:"60",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`TSMC台積203	F5F6F7
`,授課教師:`黃海寧	HUANG, HAI-NING
`,擋修說明:`<div>
  擋修對象 : 大學部 <br>
  先修科目 : <BR><BR>會計學一-成績需C-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"【上學期原修會計學一QF  100402(黃海寧老師)同學選課優先,第3次選課起開放】",第一二專長對應:"經濟(第一專長)	計量財務金融(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"經濟系111BA 必修	經濟系111BB 必修	計財系111B  必修	科管院學士班111B  必修	"},{科號:"11120QF  100503",課程中文名稱:"會計學二",課程英文名稱:"Accounting (II)",學分數:"3",人限:"55",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程為 16 週課程",停開註記:"",教室與上課時間:`TSMC台積223	F6F7F8
`,授課教師:`張俊賢	CHANG, CHUN-HSIEN
`,擋修說明:`<div>
  擋修對象 : 大學部 <br>
  先修科目 : <BR><BR>會計學一-成績需C-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"【上學期原修會計學一QF  100403(張俊賢老師)同學選課優先,第3次選課起開放】",第一二專長對應:"經濟(第一專長)	計量財務金融(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"經濟系111BA 必修	經濟系111BB 必修	計財系111B  必修	科管院學士班111B  必修	"},{科號:"11120QF  214500",課程中文名稱:"統計學二",課程英文名稱:"Statistics II",學分數:"3",人限:"95",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`TSMC台積104	M3M4W2
`,授課教師:`余士迪	YU, SHIH-TI
`,擋修說明:"",課程限制說明:"計財系優先，第3次選課起開放全校修習",第一二專長對應:"經濟(第一專長)	計量財務金融(第二專長)	計量財務金融(第一專長)",學分學程對應:"(跨領域)數據科學學分學程",不可加簽說明:"",必選修說明:"計財系110B  必修	科管院學士班110B  必修	"},{科號:"11120QF  214601",課程中文名稱:"公司理財",課程英文名稱:"Corporate Finance",學分數:"3",人限:"160",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`MXIC旺宏懷樸	W7W8W9
`,授課教師:`謝佩芳	HSIEH, PEI-FANG
`,擋修說明:`<div>
  擋修對象 : 大學部 <br>
  先修科目 : <BR><BR>財務管理-成績需C-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"計財系優先，第3次選課起開放全校修習",第一二專長對應:"計量財務金融(第二專長)	計量財務金融(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"計財系110B  必修	科管院學士班110B  選修	"},{科號:"11120QF  214602",課程中文名稱:"公司理財",課程英文名稱:"Corporate Finance",學分數:"3",人限:"80",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"本課程為 16 週課程",停開註記:"",教室與上課時間:`TSMC台積104	W7W8W9
`,授課教師:`黃德源	WONG, TAK YUEN
`,擋修說明:`<div>
  擋修對象 : 大學部 <br>
  先修科目 : <BR><BR>財務管理-成績需C-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"計財系,科管院學士班優先，第3次選課起開放全校修習",第一二專長對應:"計量財務金融(第二專長)	計量財務金融(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"計財系110B  必修	科管院學士班108BA 選修	科管院學士班109BA 選修	科管院學士班110B  選修	科管院學士班110BA 選修	"},{科號:"11120QF  214603",課程中文名稱:"公司理財",課程英文名稱:"Corporate Finance",學分數:"3",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`TSMC台積206	M6M7M8
`,授課教師:`蔡子&#26215;	TSAI, TZU-HAO
`,擋修說明:`<div>
  擋修對象 : 大學部 <br>
  先修科目 : <BR><BR>財務管理-成績需C-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"計財系優先，第3次選課起開放全校修習",第一二專長對應:"計量財務金融(第二專長)	計量財務金融(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"計財系110B  必修	科管院學士班110B  選修	"},{科號:"11120QF  214900",課程中文名稱:"高等微積分一",課程英文名稱:"Advanced Calculus I",學分數:"3",人限:"100",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`GEN III綜三 203	R1R2R3
`,授課教師:`李華倫	LI, HUA-LUN
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>微積分一-成績需C-以上<BR>微積分Ａ一-成績需C-以上<BR>微積分Ｂ一-成績需C-以上<BR>微積分一(數學系)-成績需C-以上<BR>曾修微積分一(數學系)(基本科目免修測試)<BR>曾修微積分Ａ一(基本科目免修測試)<BR>曾修微積分Ｂ一(基本科目免修測試)<BR><br>上述條件任選一科，而且<br><BR>微積分二-成績需C-以上<BR>微積分Ｂ二-成績需C-以上<BR>微積分二(數學系)-成績需C-以上<BR>微積分Ａ二-成績需C-以上<BR><br>上述條件任選一科，則不擋修。</div>`,課程限制說明:"限計財系",第一二專長對應:"計量財務金融(第二專長)	計量財務金融(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"計財系110B  必修	科管院學士班110B  選修	"},{科號:"11120QF  314101",課程中文名稱:"衍生性商品訂價",課程英文名稱:"Derivatives Pricing",學分數:"3",人限:"60",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"",停開註記:"",教室與上課時間:`TSMC台積204	W7W8W9
`,授課教師:`鍾經樊	CHUNG, CHING-FAN
`,擋修說明:`<div>
  擋修對象 : 大學部 <br>
  先修科目 : <BR><BR>衍生性金融市場-成績需C-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"計財系大學部碩士班優先，第3次選課起開放全校修習",第一二專長對應:"計量財務金融(第二專長)	計量財務金融(第一專長)",學分學程對應:"(跨領域)金融數學學分學程",不可加簽說明:"",必選修說明:"計財系109B  必修	科管院學士班109B  選修	"},{科號:"11120QF  314102",課程中文名稱:"衍生性商品訂價",課程英文名稱:"Derivatives Pricing",學分數:"3",人限:"90",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`TSMC台積104	M6M7M8
`,授課教師:`索樂晴	SO, LEH-CHYAN
`,擋修說明:`<div>
  擋修對象 : 大學部 <br>
  先修科目 : <BR><BR>衍生性金融市場-成績需C-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"計財系大學部碩士班優先，第3次選課起開放全校修習",第一二專長對應:"計量財務金融(第二專長)	計量財務金融(第一專長)",學分學程對應:"(跨領域)金融數學學分學程",不可加簽說明:"",必選修說明:"計財系109B  必修	科管院學士班109B  選修	"},{科號:"11120QF  314901",課程中文名稱:"數理統計二",課程英文名稱:"Mathematical Statistics II",學分數:"3",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"本課程為 16 週課程",停開註記:"",教室與上課時間:`TSMC台積206	T7T8T9
`,授課教師:`謝宗翰	HSIEH, CHUNG-HAN
`,擋修說明:`<div>
  擋修對象 : 大學部 <br>
  先修科目 : <BR><BR>數理統計一-成績需D以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"計財系優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"計財系109B  選修	科管院學士班109B  選修	"},{科號:"11120QF  314902",課程中文名稱:"數理統計二",課程英文名稱:"Mathematical Statistics II",學分數:"3",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程為 16 週課程",停開註記:"",教室與上課時間:`TSMC台積206	W6W7W8
`,授課教師:`劉鋼	LIU KANG
`,擋修說明:`<div>
  擋修對象 : 大學部 <br>
  先修科目 : <BR><BR>數理統計一-成績需D以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"計財系109B  選修	科管院學士班109B  選修	"},{科號:"11120QF  321000",課程中文名稱:"財務決策分析",課程英文名稱:"Financial Decision Analysis",學分數:"2",人限:"60",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"磨課師輔助教學 blended learning with MOOCs》,面授＋非同步遠距,平均每週面授1小時,歡迎大二(含)以上同學",停開註記:"",教室與上課時間:`TSMC台積204	R5R6R7
`,授課教師:`林哲群	LIN, CHE-CHUN
`,擋修說明:"",課程限制說明:"經濟系,計財系,科管院學士班優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"計財系109B  選修	"},{科號:"11120QF  321100",課程中文名稱:"投資實務研討",課程英文名稱:"Topics on Investment",學分數:"2",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"《磨課師輔助教學》,面授＋非同步遠距,實體課程屬隔周上課",停開註記:"",教室與上課時間:`TSMC台積223	R5R6
`,授課教師:`索樂晴	SO, LEH-CHYAN
`,擋修說明:"",課程限制說明:"經濟系,計財系,科管院學士班優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"計財系109B  選修	"},{科號:"11120QF  321200",課程中文名稱:"房地產投資與市場分析",課程英文名稱:"Real Estate Investment and Market Analysis",學分數:"3",人限:"45",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`TSMC台積204	M2M3M4
`,授課教師:`鄧筱蓉	TENG, HSIAO-JUNG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"計財系109B  選修	"},{科號:"11120QF  321300",課程中文名稱:"金融科技應用與實務",課程英文名稱:"Application and Practice of Financial Technology",學分數:"3",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`TSMC台積204	R2R3R4
`,授課教師:`翁禮祺	WENG, LI-CHI
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"計財系109B  選修	"},{科號:"11120QF  322000",課程中文名稱:"金融大數據",課程英文名稱:"Financial Big Data Analysis",學分數:"3",人限:"95",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`TSMC台積104	R7R8R9
`,授課教師:`鍾經樊	CHUNG, CHING-FAN
`,擋修說明:`<div>
  擋修對象 : 大學部 <br>
  先修科目 : <BR><BR>統計學一-成績需C-以上<BR>統計學二-成績需C-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"計財系優先，第3次選課起開放全校修習",第一二專長對應:"計量財務金融(第二專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"計財系109B  必修	科管院學士班108BA 選修	科管院學士班109B  必修	科管院學士班109BA 選修	科管院學士班110BA 選修	"},{科號:"11120QF  414300",課程中文名稱:"國際財務管理",課程英文名稱:"Business Finance",學分數:"3",人限:"60",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程為 16 週課程",停開註記:"",教室與上課時間:`TSMC台積204	T6T7T8
`,授課教師:`曾祺峰	TZENG, CHI-FENG
`,擋修說明:`<div>
  擋修對象 : 大學部 <br>
  先修科目 : <BR><BR>財務管理-成績需C-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"計財系優先，第3次選課起開放全校修習",第一二專長對應:"計量財務金融(第二專長)	計量財務金融(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"計財系108B  選修	科管院學士班108B  選修	"},{科號:"11120QF  444400",課程中文名稱:"金融機構的人才管理",課程英文名稱:"Talent Management in the Financial Institutions",學分數:"3",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"歡迎研究所學生修習,院學士班若無法點選請EMAIL課務組",停開註記:"",教室與上課時間:`TSMC台積204	F5F6F7
`,授課教師:`徐正宗	HSU, CHENG-TSONG
`,擋修說明:"",課程限制說明:"排除大學部1年級2年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"計財系108B  選修	"},{科號:"11120QF  444900",課程中文名稱:"創新產業與企業社會責任",課程英文名稱:"Forward-Looking Infrastructure & CSR",學分數:"2",人限:"60",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`TSMC台積204	M5M6M7
`,授課教師:`馬瑞辰	MA, JUI-CHEN
`,擋修說明:"",課程限制說明:"排除大學部1年級2年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"計財系108B  選修	"},{科號:"11120QF  445100",課程中文名稱:"投資分析與企業發展",課程英文名稱:"Investment analysis and business development",學分數:"2",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"面授＋同步遠距教學課程",停開註記:"",教室與上課時間:`TSMC台積205	F5F6
`,授課教師:`蔡子&#26215;	TSAI, TZU-HAO
`,擋修說明:"",課程限制說明:"經濟系,計財系,科管院學士班優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"計財系108B  選修	"},{科號:"11120QF  445200",課程中文名稱:"數位金融科技",課程英文名稱:"Digital Financial Technology",學分數:"3",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"大一不得修習，第3次選課起開放全校大二以上同學修習",停開註記:"",教室與上課時間:`TSMC台積905	W6W7W8
`,授課教師:`黃男州	HUANG NAN-ZHOU
林哲群	LIN, CHE-CHUN
`,擋修說明:"",課程限制說明:"限科管院,大學部2年級3年級4年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"計財系108B  選修	"},{科號:"11120QF  445300",課程中文名稱:"金融與新創科技經營實務與案例研討",課程英文名稱:"FinTech and Innovation Management – A Case Study Approach",學分數:"3",人限:"36",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`TSMC台積429	W5W6W7
`,授課教師:`林濬暘	LIN, CHUN-YANG
`,擋修說明:"",課程限制說明:"計財系,科管院學士班優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"計財系108B  選修	"},{科號:"11120QF  510100",課程中文名稱:"書報討論",課程英文名稱:"Seminar",學分數:"2",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`TSMC台積905	R2R3R4
`,授課教師:`黃德源	WONG, TAK YUEN
`,擋修說明:"",課程限制說明:"限計財系碩士班博士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"計財系111D  選修	計財系111MA 選修	計財系111MB 選修	"},{科號:"11120QF  512000",課程中文名稱:"財務風險管理",課程英文名稱:"Financial Risk Management",學分數:"3",人限:"32",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`TSMC台積428	T5T6T7
`,授課教師:`邱婉茜	CHIU, WAN-CHIEN
`,擋修說明:"",課程限制說明:"計財系碩士班博士班優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"IMBA碩士班111M  選修	計財系111D  必修	計財系111MA 必修	計財系111MB 必修	"},{科號:"11120QF  513000",課程中文名稱:"論文研究",課程英文名稱:"Thesis",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限計財所碩二以上修習",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"排除計財系碩士班1年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"計財系111MA 必修	計財系111MB 必修	"},{科號:"11120QF  520400",課程中文名稱:"個體計量模型在財務上的應用",課程英文名稱:"Financial Microeconometrics：Methods and Applications",學分數:"3",人限:"36",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`TSMC台積431	W6W7W8
`,授課教師:`余士迪	YU, SHIH-TI
`,擋修說明:"",課程限制說明:"計財系優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"計財系111D  選修	計財系111MA 選修	計財系111MB 選修	"},{科號:"11120QF  521501",課程中文名稱:"金融計算",課程英文名稱:"Computational Finance",學分數:"3",人限:"10",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限修習過「信用風險專題」",停開註記:"",教室與上課時間:`TSMC台積735	T6T7T8
`,授課教師:`張焯然	CHANG, JOW-RAN
`,擋修說明:"",課程限制說明:"限計財系碩士班博士班",第一二專長對應:"",學分學程對應:"(跨領域)金融科技與區塊鏈學分學程",不可加簽說明:"",必選修說明:"計財系111D  選修	計財系111MA 選修	計財系111MB 選修	"},{科號:"11120QF  521502",課程中文名稱:"金融計算",課程英文名稱:"Computational Finance",學分數:"3",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`TSMC台積205	TaTbTc
`,授課教師:`韓傳祥	HAN, CHUAN-HSIANG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)金融科技與區塊鏈學分學程",不可加簽說明:"",必選修說明:"數學系111D  選修	數學系111MA 選修	數學系111MB 選修	計財系111D  選修	計財系111MA 選修	計財系111MB 選修	"},{科號:"11120QF  522100",課程中文名稱:"金融商品設計與評價",課程英文名稱:"Financial product design and pricing",學分數:"3",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`TSMC台積204	T2T3T4
`,授課教師:`張焯然	CHANG, JOW-RAN
胡國琳	KUO-LIN HU
`,擋修說明:"",課程限制說明:"計財系碩士班博士班優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"計財系111D  必修	計財系111MA 必修	計財系111MB 必修	"},{科號:"11120QF  524300",課程中文名稱:"財務時間序列分析二",課程英文名稱:"Financial Time Series II",學分數:"3",人限:"10",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程為16週課程，須修過「財務時間序列分析一」及「財務計量經濟學」",停開註記:"",教室與上課時間:`TSMC台積733	R6R7R8
`,授課教師:`黃裕烈	HUANG, YU-LIEH
`,擋修說明:"",課程限制說明:"限計財系碩士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"計財系111D  選修	計財系111MA 選修	計財系111MB 選修	"},{科號:"11120QF  524400",課程中文名稱:"財務計量實證專題",課程英文名稱:"Seminar in empirical financial econometrics",學分數:"3",人限:"10",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`TSMC台積735	M6M7M8
`,授課教師:`曾祺峰	TZENG, CHI-FENG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)金融科技與區塊鏈學分學程",不可加簽說明:"",必選修說明:"IMBA碩士班111M  選修	計財系111MA 選修	"},{科號:"11120QF  526200",課程中文名稱:"金融科技",課程英文名稱:"Financial Technology",學分數:"3",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`TSMC台積205	T6T7T8
`,授課教師:`韓傳祥	HAN, CHUAN-HSIANG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)金融科技與區塊鏈學分學程/(跨領域)人工智慧與應用進階學分學程/(跨領域)人工智慧與應用基礎學分學程",不可加簽說明:"",必選修說明:"計財系111D  選修	計財系111MA 選修	計財系111MB 選修	"},{科號:"11120QF  526800",課程中文名稱:"企業理財與創新實證研究",課程英文名稱:"Empirical Corporate Finance and Innovation",學分數:"3",人限:"12",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"停開",教室與上課時間:`TSMC台積735	RaRbRc
`,授課教師:`許博炫	HSU, PO-HSUAN
`,擋修說明:"",課程限制說明:"碩士班博士班優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"IMBA碩士班111M  選修	計財系111D  選修	計財系111MA 選修	計財系111MB 選修	"},{科號:"11120QF  527000",課程中文名稱:"財務與創新經濟學術研究探討",課程英文名稱:"Seminar on Academic Research Careers in Finance and Innovation Economics",學分數:"3",人限:"12",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`TSMC台積735	R6R7R8
`,授課教師:`許博炫	HSU, PO-HSUAN
`,擋修說明:"",課程限制說明:"碩士班博士班優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"IMBA碩士班111M  選修	計財系111D  選修	計財系111MA 選修	計財系111MB 選修	"},{科號:"11120QF  527200",課程中文名稱:"強健與隨機投資組合優化",課程英文名稱:"Robust and Stochastic Portfolio Optimization",學分數:"3",人限:"10",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`TSMC台積735	W5W6W7
`,授課教師:`謝宗翰	HSIEH, CHUNG-HAN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"IMBA碩士班111M  選修	計財系111D  選修	計財系111MA 選修	計財系111MB 選修	"},{科號:"11120QF  527400",課程中文名稱:"不動產專題研究二",課程英文名稱:"Seminar on Real Estate Research II",學分數:"3",人限:"4",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"曾修習「不動產專題研究一」",停開註記:"",教室與上課時間:`TSMC台積735	F2F3F4
`,授課教師:`蔡怡純	TSAI, I-CHUN
林哲群	LIN, CHE-CHUN
`,擋修說明:"",課程限制說明:"【上學期原修不動產專題研究一QF  527100(林哲群,蔡怡純老師)同學選課優先,第3次選課起開放】",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"計財系111D  選修	計財系111MA 選修	計財系111MB 選修	"},{科號:"11120QF  700000",課程中文名稱:"論文研究",課程英文名稱:"Thesis",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限計財博二以上同學修習",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"排除計財系博士班1年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"計財系111D  必修	"},{科號:"11120SL  511000",課程中文名稱:"小說創作專題",課程英文名稱:"Seminar on Fiction Writing",學分數:"3",人限:"15",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程為 16 週課程",停開註記:"",教室與上課時間:`Nanda南大2301	M7M8M9
`,授課教師:`蔣興立	CHIANG, HSIN-LI
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"華文所111M  選修	"},{科號:"11120SL  511400",課程中文名稱:"現代詩創作專題",課程英文名稱:"Special study on modern poetry writing",學分數:"3",人限:"10",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`Nanda南大2301	W2W3W4
`,授課教師:`丁威仁	TING, WEI-JEN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"華文所111M  選修	"},{科號:"11120SL  512100",課程中文名稱:"東南亞華人文化與文獻專題",課程英文名稱:"Selected Texts in SE Asian Chinese Studies",學分數:"3",人限:"10",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`Nanda南大2301	RnR5R6
`,授課教師:`邱彩韻	KU, CHAI-YEUN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"華文所111M  選修	"},{科號:"11120SL  512500",課程中文名稱:"史記會注考證專題",課程英文名稱:"Topics on Shi Ji Hui Zhu Kao Zheng",學分數:"3",人限:"10",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程為 16 週課程",停開註記:"",教室與上課時間:`Nanda南大2301	T5T6T7
`,授課教師:`林保全	LIN, BAO-QUAN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"華文所111M  選修	"},{科號:"11120SL  513000",課程中文名稱:"自傳與回憶書寫專題",課程英文名稱:"A Study of  Contemporary Memoir Writing",學分數:"3",人限:"15",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程為 16 週課程",停開註記:"",教室與上課時間:`Nanda南大2301	R2R3R4
`,授課教師:`黃雅莉	HUANG, YA-LI
`,擋修說明:"",課程限制說明:"人社院,中等教育學程生優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"華文所111M  選修	"},{科號:"11120SL  513900",課程中文名稱:"華文自然寫作專題",課程英文名稱:"A Topic of Mandarin Nature Writing",學分數:"3",人限:"10",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程為16週課程",停開註記:"",教室與上課時間:`Nanda南大2301	T3T4Tn
`,授課教師:`張日郡	CHANG, JIH-CHUN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"華文所111M  選修	"},{科號:"11120SL  600000",課程中文名稱:"學術議題研討",課程英文名稱:"Seminar",學分數:"1",人限:"0",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"採加簽方式選課，華文所研究生修習，1學分不計入畢業應修學分",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"限華文所碩士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"華文所111M  必修	"},{科號:"11120SL  600100",課程中文名稱:"論文研究",課程英文名稱:"Thesis",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限碩二以上修習",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"排除華文所碩士班1年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"華文所111M  必修	"},{科號:"11120SLS 600000",課程中文名稱:"論文研究",課程英文名稱:"Thesis",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"限碩士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"先進光源學位學程111MA 必修	先進光源學位學程111MB 必修	"},{科號:"11120SLS 700000",課程中文名稱:"論文研究",課程英文名稱:"Thesis",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"限博士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"先進光源學位學程111DA 必修	先進光源學位學程111DB 必修	"},{科號:"11120SNHC710000",課程中文名稱:"書報討論",課程英文名稱:"Seminar",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"Location: Taipei,Academia Sinica  中研院資訊所新館106 N106, IIS, AS，授課老師曹昱 等。",停開註記:"",教室與上課時間:`SINICA中  研院	M6M7
`,授課教師:`TIGP Program	
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"社群人智國際學程111D  必修	"},{科號:"11120SNHC751000",課程中文名稱:"人智計算",課程英文名稱:"Human-Centered Computing",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"中研院資訊所新館107，授課教師陳駿丞、廖文宏、彭彥璁、蘇黎等老師",停開註記:"",教室與上課時間:`SINICA中  研院	W2W3W4
`,授課教師:`TIGP Program	
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"社群人智國際學程111D  選修	"},{科號:"11120SOC 500201",課程中文名稱:"社會學方法論",課程英文名稱:"Sociological Methodology",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"碩必修博選修(須修過社會學研究方法一程度,由任課老師認定),碩甲及博班生選此班。台聯大需授課老師同意",停開註記:"",教室與上課時間:`HSS人社C306	T6T7T8
`,授課教師:`陳瑞樺	CHEN, JUI-HUA
`,擋修說明:"",課程限制說明:"限亞際文化碩士學程,社會所",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"亞際文化碩士學程111M  選修	社會所111D  選修	社會所111M  必修	"},{科號:"11120SOC 500202",課程中文名稱:"社會學方法論",課程英文名稱:"Sociological Methodology",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"碩必修博選修(須修過社會學研究方法一程度,由任課老師認定),碩乙及僑陸生選此班。台聯大需授課老師同意",停開註記:"",教室與上課時間:`HSS人社C203	T6T7T8
`,授課教師:`古明君	KU, MING-CHUN
`,擋修說明:"",課程限制說明:"限亞際文化碩士學程,社會所",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"亞際文化碩士學程111M  選修	社會所111M  必修	"},{科號:"11120SOC 514000",課程中文名稱:"社會運動",課程英文名稱:"Social Movement",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"碩博選修，支援跨校合辦博士班專業領域：政治社會學。",停開註記:"",教室與上課時間:`HSS人社C306	T3T4Tn
`,授課教師:`林祐聖	LIN, YU-SHENG
`,擋修說明:"",課程限制說明:"排除大學部",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"社會所111D  選修	社會所111M  選修	"},{科號:"11120SOC 515700",課程中文名稱:"政治社會學",課程英文名稱:"Political Sociology",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"碩博選修。開放學士班社會學程大四選修。支援HSS政治經濟學程",停開註記:"",教室與上課時間:`HSS人社C306	F7F8F9
`,授課教師:`姚人多	YAO, JEN-TO
`,擋修說明:"",課程限制說明:"排除大學部1年級2年級3年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"社會所111D  選修	社會所111M  選修	"},{科號:"11120SOC 556300",課程中文名稱:"性別社會學",課程英文名稱:"Sociology of Gender",學分數:"3",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"碩博選修。開放學士班社會學程，性別學程大四選修。",停開註記:"",教室與上課時間:`HSS人社C306	M6M7M8
`,授課教師:`曾柏嘉	TSENG, PO-CHIA
`,擋修說明:"",課程限制說明:"排除大學部1年級2年級3年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"社會所111D  選修	社會所111M  選修	"},{科號:"11120SOC 575800",課程中文名稱:"經濟社會學",課程英文名稱:"Economic Sociology",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"碩博選修。開放學士班大四選修。",停開註記:"",教室與上課時間:`HSS人社C306	F3F4Fn
`,授課教師:`陳明祺	CHEN, MING-CHI
`,擋修說明:"",課程限制說明:"排除大學部1年級2年級3年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"社會所111D  選修	社會所111M  選修	"},{科號:"11120SOC 578100",課程中文名稱:"（後）殖民科技與醫療",課程英文名稱:"(Post) Colonial Science, Technology and Medicine",學分數:"3",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"碩博選修。支援跨校合辦博專業領域：科技與社會。",停開註記:"",教室與上課時間:`HSS人社C306	R6R7R8
`,授課教師:`洪意凌	HUNG, YI-LING
`,擋修說明:"",課程限制說明:"排除大學部",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"社會所111D  選修	社會所111M  選修	"},{科號:"11120SOC 578400",課程中文名稱:"勞動與就業專題：理論與研究",課程英文名稱:"Seminar on Work and Employment: Theory and Research",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程為16週課程。碩博選修，支援跨校合辦博士班專業領域：政治社會學/人口、家庭與階層。",停開註記:"",教室與上課時間:`HSS人社C306	W6W7W8
`,授課教師:`李韶芬	LEE, SHAO-FEN
`,擋修說明:"",課程限制說明:"排除大學部",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"社會所111D  選修	社會所111M  選修	"},{科號:"11120SOC 580200",課程中文名稱:"中國研究工作坊",課程英文名稱:"China Studies Workshop",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"碩乙必修",停開註記:"",教室與上課時間:`HSS人社C203	MnM5
`,授課教師:`陶逸駿	TAO, YI-CHUN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"社會所111D  選修	社會所111M  必修	"},{科號:"11120SOC 586100",課程中文名稱:"中國政治體制與組織",課程英文名稱:"Political Institutions and Organizations in China",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"碩博選修,屬中國研究分支。",停開註記:"",教室與上課時間:`HSS人社C203	W6W7W8
`,授課教師:`陶逸駿	TAO, YI-CHUN
`,擋修說明:"",課程限制說明:"排除大學部",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"社會所111D  選修	社會所111M  選修	"},{科號:"11120SOC 586300",課程中文名稱:"中國境外影響力與銳實力:台灣香港印太地區",課程英文名稱:"China's Offshore Influence and Sharp Power in Hong Kong, Taiwan and Indo-Pacific",學分數:"1",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"碩博選修，屬中國研究。密集課4/12~4/28上課(W234n56F234詳課綱)。合辦博:全球化與亞洲比較研究",停開註記:"",教室與上課時間:`HSS人社C203	W2W3W4
`,授課教師:`吳介民	WU, JIEH-MIN
古明君	KU, MING-CHUN
`,擋修說明:"",課程限制說明:"排除大學部1年級2年級3年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"社會所111D  選修	社會所111M  選修	"},{科號:"11120SOC 600000",課程中文名稱:"論文研究",課程英文名稱:"Thesis",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限社會所碩三以上修習",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"排除社會所碩士班1年級2年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"社會所111M  必修	"},{科號:"11120SOC 800000",課程中文名稱:"論文研究",課程英文名稱:"Thesis",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限社會所博三以上修習",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"排除社會所博士班1年級2年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"社會所111D  必修	"},{科號:"11120STAT216000",課程中文名稱:"統計學二",課程英文名稱:"Statistics II",學分數:"3",人限:"80",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`GEN III綜三 203	M7M8M9
`,授課教師:`謝文萍	HSIEH, WEN-PING
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>機率與統計-成績需D以上<BR>統計學一-成績需D以上<BR>統計學-成績需D以上<BR><br>上述條件任選一科，則不擋修。</div>`,課程限制說明:"",第一二專長對應:"經濟(第一專長)",學分學程對應:"(跨領域)數據科學學分學程",不可加簽說明:"",必選修說明:"科管院學士班110B  必修	科管院學士班110BA 必修	"},{科號:"11120STAT262200",課程中文名稱:"統計資料分析",課程英文名稱:"Statistical Data Analysis",學分數:"3",人限:"80",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`GEN III綜三 203	T5R5R6
`,授課教師:`徐南蓉	HSU, NAN-JUNG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"數據科學(第二專長)",學分學程對應:"(跨領域)數據科學學分學程/(跨領域)人工智慧與應用進階學分學程/(跨領域)人工智慧與應用基礎學分學程/(跨領域)神經科學學分學程",不可加簽說明:"",必選修說明:"理學院學士班110B  必修	"},{科號:"11120STAT519100",課程中文名稱:"應用多變量分析",課程英文名稱:"Applied Multivariate Analysis",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`GEN III綜三 834	R2R3R4
`,授課教師:`謝文萍	HSIEH, WEN-PING
`,擋修說明:"",課程限制說明:"",第一二專長對應:"數據科學(第二專長)",學分學程對應:"(跨領域)數據科學學分學程",不可加簽說明:"",必選修說明:"統計所111M  選修	"},{科號:"11120STAT521000",課程中文名稱:"時間序列分析",課程英文名稱:"Time Series Analysis",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程為 16 週課程",停開註記:"",教室與上課時間:`GEN III綜三 834	M5M6F7
`,授課教師:`銀慶剛	CHING-KANG YIN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"數據科學(第二專長)",學分學程對應:"(跨領域)數據科學學分學程/(跨領域)金融科技與區塊鏈學分學程",不可加簽說明:"",必選修說明:"統計所111M  選修	"},{科號:"11120STAT523000",課程中文名稱:"類別資料分析",課程英文名稱:"Discrete Analysis",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`GEN III綜三 834	T6T7T8
`,授課教師:`鄭少為	CHENG, SHAO-WEI
`,擋修說明:"",課程限制說明:"",第一二專長對應:"數據科學(第二專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"統計所111M  選修	"},{科號:"11120STAT524100",課程中文名稱:"生物數據分析",課程英文名稱:"Biostatistical Data Analysis",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`GEN III綜三 834	M2M3M4
`,授課教師:`黃文瀚	HUANG, WEN-HAN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)人工智慧與應用進階學分學程/(跨領域)人工智慧與應用基礎學分學程/(跨領域)神經科學學分學程",不可加簽說明:"",必選修說明:"統計所111M  選修	"},{科號:"11120STAT533000",課程中文名稱:"統計計算",課程英文名稱:"Statistical Computing",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`GEN III綜三 834	T2T3T4
`,授課教師:`徐南蓉	HSU, NAN-JUNG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)數據科學學分學程/(跨領域)人工智慧與應用進階學分學程/(跨領域)人工智慧與應用基礎學分學程",不可加簽說明:"",必選修說明:"統計所111M  必修	"},{科號:"11120STAT551000",課程中文名稱:"實驗設計與分析",課程英文名稱:"Experimental Design and Analysis",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`GEN III綜三 834	R6R7R8
`,授課教師:`鄭少為	CHENG, SHAO-WEI
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"統計所111M  選修	"},{科號:"11120STAT557000",課程中文名稱:"可靠度分析",課程英文名稱:"Reliability Analysis",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程為 16 週課程",停開註記:"",教室與上課時間:`GEN III綜三 834	W5W6W7
`,授課教師:`孫誠佑	SUN, CHENG-YU
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"統計所111M  選修	"},{科號:"11120STAT591000",課程中文名稱:"書報討論",課程英文名稱:"Seminar",學分數:"1",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程為 16 週課程",停開註記:"",教室與上課時間:`GEN III綜三 834	F2
`,授課教師:`銀慶剛	CHING-KANG YIN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"統計所111M  必修	"},{科號:"11120STAT592000",課程中文名稱:"專題演講",課程英文名稱:"Colloquium",學分數:"1",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`GEN III綜三 837	F3
`,授課教師:`孫誠佑	SUN, CHENG-YU
`,擋修說明:"",課程限制說明:"排除碩士班1年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"統計所111D  必修	統計所111M  必修	"},{科號:"11120STAT600000",課程中文名稱:"論文研究",課程英文名稱:"Thesis",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限統計所碩二以上修習",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"排除統計所碩士班1年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"統計所111M  必修	"},{科號:"11120STAT661000",課程中文名稱:"倖存分析",課程英文名稱:"Survival Analysis",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程為 16 週課程",停開註記:"",教室與上課時間:`GEN III綜三 834	M7M8M9
`,授課教師:`鄭又仁	CHENG, YU-JEN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"統計所111M  選修	"},{科號:"11120STAT691000",課程中文名稱:"統計實習",課程英文名稱:"Practicing Statistics",學分數:"2",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程為 16 週課程",停開註記:"",教室與上課時間:`GEN III綜三 834	F5F6
`,授課教師:`銀慶剛	CHING-KANG YIN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"統計所111D  必修	統計所111M  必修	"},{科號:"11120STAT701500",課程中文名稱:"統計推論",課程英文名稱:"Statistical Inference",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`GEN III綜三 840	M5M6W3
`,授課教師:`黃禮珊	HUANG, LI-SHAN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"統計所111D  必修	"},{科號:"11120STAT800000",課程中文名稱:"論文研究",課程英文名稱:"Thesis",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限統計所博二以上修習",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"排除統計所博士班1年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"統計所111D  必修	"},{科號:"11120TE  201100",課程中文名稱:"教育哲學",課程英文名稱:"Philosophy of Education",學分數:"2",人限:"40",新生保留人數:"0",通識對象:"*6",通識類別:"社會科學領域 Elective GE course: Social Sciences",授課語言:"中",備註:"加退選階段始開放非中等教程生修習.",停開註記:"",教室與上課時間:`EDU教  315	M7M8
`,授課教師:`黃漢昌	HUANG, HANG-CHANG
`,擋修說明:"",課程限制說明:"限中等教育學程生",第一二專長對應:"",學分學程對應:"(跨領域)教育知能學分學程",不可加簽說明:"",必選修說明:""},{科號:"11120TE  201200",課程中文名稱:"教學原理",課程英文名稱:"Teaching Principles",學分數:"2",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"欲修習本課程者,請務必出席第一堂課.《不接受加簽 Don't accept extra selection》",停開註記:"",教室與上課時間:`EDU教   305	W3W4
`,授課教師:`徐憶萍	HSU, ANGELA YI-PING
`,擋修說明:"",課程限制說明:"限中等教育學程生",第一二專長對應:"",學分學程對應:"(跨領域)教育知能學分學程",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:""},{科號:"11120TE  202200",課程中文名稱:"教育社會學",課程英文名稱:"Sociology of Education",學分數:"2",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"《不接受加簽 Don't accept extra selection》",停開註記:"",教室與上課時間:`EDU教   305	M3M4
`,授課教師:`朱如君	CHU, JU-CHUN
`,擋修說明:"",課程限制說明:"限中等教育學程生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:""},{科號:"11120TE  204100",課程中文名稱:"教育概論",課程英文名稱:"Foundation of Education",學分數:"2",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"《不接受加簽 Don't accept extra selection》16週課程",停開註記:"",教室與上課時間:`EDU教  315	T3T4
`,授課教師:`朱如君	CHU, JU-CHUN
`,擋修說明:"",課程限制說明:"限中等教育學程生",第一二專長對應:"",學分學程對應:"(跨領域)教育知能學分學程",不可加簽說明:"《不接受加簽 No extra selection》",必選修說明:""},{科號:"11120TE  204200",課程中文名稱:"教師專業倫理與發展",課程英文名稱:"Professional ethics and professional development for teachers",學分數:"2",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`EDU教  315	F3F4
`,授課教師:`林孟君	LIN, MENG-CHUN
`,擋修說明:"",課程限制說明:"限中等教育學程生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120TE  205900",課程中文名稱:"班級經營",課程英文名稱:"Classroom Management",學分數:"2",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`EDU教  315	R3R4
`,授課教師:`呂秀蓮	LU, HSIU-LIEN
`,擋修說明:"",課程限制說明:"限中等教育學程生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120TE  210300",課程中文名稱:"化學/自然與科學領域教學實習",課程英文名稱:"Practicum: Teaching Chemistry",學分數:"2",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"須先符合先修條件.限中教化學專長師資生修習.",停開註記:"",教室與上課時間:`EDU教  312	F8F9
`,授課教師:`江月媚	CHIANG, YUEH-MEI
`,擋修說明:"",課程限制說明:"限中等教育學程生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120TE  210500",課程中文名稱:"教育議題專題",課程英文名稱:"Special Issues on Education",學分數:"2",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`EDU教  315	F5F6
`,授課教師:`林孟君	LIN, MENG-CHUN
`,擋修說明:"",課程限制說明:"限中等教育學程生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120TE  211300",課程中文名稱:"國語文/語文領域教學實習",課程英文名稱:"Practicum: Teaching Chinese",學分數:"2",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"須先符合先修條件.限中教國文專長師資生修習.16週課程",停開註記:"",教室與上課時間:`EDU教  312	T3T4
`,授課教師:`羅仕龍	LO, SHIH-LUNG
`,擋修說明:"",課程限制說明:"限中等教育學程生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120TE  212400",課程中文名稱:"輔導原理與實務",課程英文名稱:"Principle and Practice of Guidance",學分數:"2",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`EDU教  315	T7T8
`,授課教師:`林旖旎	LIN, YI-NII
`,擋修說明:"",課程限制說明:"限中等教育學程生",第一二專長對應:"",學分學程對應:"(跨領域)教育知能學分學程",不可加簽說明:"",必選修說明:""},{科號:"11120TE  215300",課程中文名稱:"英語文/語文領域教學實習",課程英文名稱:"Practicum: Teaching English",學分數:"2",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"須先符合先修條件.限中教英文科師資生修習.",停開註記:"",教室與上課時間:`EDU教  315	M3M4
`,授課教師:`張碧珠	PEARL CHANG
`,擋修說明:"",課程限制說明:"限中等教育學程生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120TE  216300",課程中文名稱:"物理/自然與科學領域教學實習",課程英文名稱:"Practicum: Teaching Physics",學分數:"2",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"須先符合先修條件.限中教物理專長師資生修習.",停開註記:"",教室與上課時間:`EDU教  312	W3W4
`,授課教師:`陳金楓	CHEN, CHIN-FENG
`,擋修說明:"",課程限制說明:"限中等教育學程生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120TE  217300",課程中文名稱:"數學/數學領域教學實習",課程英文名稱:"Practicum: Teaching Mathematics",學分數:"2",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"須先符合先修條件.限中教數學專長師資生修習.",停開註記:"",教室與上課時間:`EDU教  315	M5M6
`,授課教師:`劉樹忠	LIU, SHU-CHUNG
`,擋修說明:"",課程限制說明:"限中等教育學程生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120TE  219300",課程中文名稱:"生物/自然與科學領域教學實習",課程英文名稱:"Practicum: Teaching Biology",學分數:"2",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"須先符合先修條件.限中教生物專長師資生修習.",停開註記:"",教室與上課時間:`EDU教  312	M5M6
`,授課教師:`黃琇珍	HUANG, HSIU-CHEN
`,擋修說明:"",課程限制說明:"限中等教育學程生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120TE  220000",課程中文名稱:"體育/健康與體育領域教學實習",課程英文名稱:"Practicum: Teaching Physical Education",學分數:"2",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"須先符合先修條件.限中教體育專長師資生修習.",停開註記:"",教室與上課時間:`Nanda南大A412	M5M6
`,授課教師:`陳政宇	CHEN，CHENG-YU
劉先翔	LIU, HSIEN-HSIANG
`,擋修說明:"",課程限制說明:"限中等教育學程生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120TE  222200",課程中文名稱:"教育心理學",課程英文名稱:"Educational Psychology",學分數:"2",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`EDU教   305	T5T6
`,授課教師:`陳承德	CHEN, CHENG-TE
`,擋修說明:"",課程限制說明:"限中等教育學程生",第一二專長對應:"",學分學程對應:"(跨領域)教育知能學分學程",不可加簽說明:"",必選修說明:""},{科號:"11120TE  224800",課程中文名稱:"人際關係與溝通",課程英文名稱:"Human Relations and Communication",學分數:"2",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`EDU教  315	R7R8
`,授課教師:`劉政宏	LIU, CHENG-HONG
`,擋修說明:"",課程限制說明:"限中等教育學程生",第一二專長對應:"",學分學程對應:"(跨領域)教育知能學分學程",不可加簽說明:"",必選修說明:""},{科號:"11120TE  225500",課程中文名稱:"歷史／社會領域教學實習",課程英文名稱:"Practicum: Teaching History",學分數:"2",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"須先符合先修條件.限中教歷史專長師資生修習.",停開註記:"",教室與上課時間:`EDU教  312	F3F4
`,授課教師:`林文正	LIN,WEN-CHENG
`,擋修說明:"",課程限制說明:"限中等教育學程生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120TE  234400",課程中文名稱:"多元文化教育",課程英文名稱:"Multicultural Education",學分數:"2",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`EDU教   305	T3T4
`,授課教師:`傅麗玉	FU, LI-YU
`,擋修說明:"",課程限制說明:"限中等教育學程生",第一二專長對應:"",學分學程對應:"(跨領域)教育知能學分學程",不可加簽說明:"",必選修說明:""},{科號:"11120TE  235400",課程中文名稱:"教學媒體與運用",課程英文名稱:"Instructional Media and Application",學分數:"2",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`EDU教  315	T5T6
`,授課教師:`薛慶友	HSUEH, CHING-YU
`,擋修說明:"",課程限制說明:"限中等教育學程生",第一二專長對應:"",學分學程對應:"(跨領域)教育知能學分學程",不可加簽說明:"",必選修說明:""},{科號:"11120TE  250200",課程中文名稱:"中學教育實地研究",課程英文名稱:"Action research in high schools",學分數:"2",人限:"0",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"加簽選課,本課程配合史懷課輔服務須於暑期7-8月至金門參與課輔服務三週,修課對象限已錄取史懷哲之師資生",停開註記:"",教室與上課時間:`Nanda南大1403	W5W6
`,授課教師:`聘任中	
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120TE  250900",課程中文名稱:"認知與學習",課程英文名稱:"Cognition and Learning",學分數:"2",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`EDU教  315	W3W4
`,授課教師:`曾郁倫	TSENG,YU-LUN
`,擋修說明:"",課程限制說明:"限中等教育學程生",第一二專長對應:"",學分學程對應:"(跨領域)教育知能學分學程",不可加簽說明:"",必選修說明:""},{科號:"11120TE  251900",課程中文名稱:"STEAM教學設計",課程英文名稱:"STEAM Instructional Design",學分數:"2",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`EDU教  315	R5R6
`,授課教師:`劉樹忠	LIU, SHU-CHUNG
`,擋修說明:"",課程限制說明:"限中等教育學程生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120TE  253200",課程中文名稱:"自主學習",課程英文名稱:"Self -Planned Learning",學分數:"3",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`EDU教  315	W5W6W7
`,授課教師:`姚麗英	YAO,LI-YING
`,擋修說明:"",課程限制說明:"限中等教育學程生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120TE  337700",課程中文名稱:"閩南語／語文領域本土語文教學實習",課程英文名稱:"Teaching Practicum of Southern Min",學分數:"2",人限:"12",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"須先符合先修條件.限中教閩南語專長師資生修習.16週課程",停開註記:"",教室與上課時間:`Nanda南大9429	M3M4
`,授課教師:`鄭縈	CHENG, YING
`,擋修說明:"",課程限制說明:"限中等教育學程生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120TE  337800",課程中文名稱:"原住民族語／語文領域本土語文教學實習",課程英文名稱:"Formosan Language Teaching Practicum",學分數:"2",人限:"12",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"須先符合先修條件.限中教原住民族語專長師資生修習.",停開註記:"",教室與上課時間:`Nanda南大9429	W8W9
`,授課教師:`高清菊	KAO, CHIN-CHU
`,擋修說明:"",課程限制說明:"限中等教育學程生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120TE  337900",課程中文名稱:"客家語/語文領域本土語文教學實習",課程英文名稱:"Teaching Practicum of Hakka",學分數:"2",人限:"12",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"須先符合先修條件.限中教客家語專長師資生修習.16週課程",停開註記:"",教室與上課時間:`Nanda南大9429	T3T4
`,授課教師:`范姜淑雲	FAN CHIANG SHU YUN
`,擋修說明:"",課程限制說明:"限中等教育學程生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120TE  338000",課程中文名稱:"輔導教學實習",課程英文名稱:"Practicum：Teaching Guidance",學分數:"2",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"須先符合先修條件.限中教輔導教師師資生修習.16週課程",停開註記:"",教室與上課時間:`Nanda南大N203	F3F4
`,授課教師:`朱惠瓊	CHU, HUI-CHUANG
`,擋修說明:"",課程限制說明:"限中等教育學程生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120TEE 100702",課程中文名稱:"自然科學概論",課程英文名稱:"Introduction to Natural Science",學分數:"2",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"必修，「雙語教學師資職前培育課程」。",停開註記:"",教室與上課時間:`Nanda南大1403	R3R4
`,授課教師:`陳復琴	Chen, Fu-Chin
`,擋修說明:"",課程限制說明:"限國小教育學程生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120TEE 100703",課程中文名稱:"自然科學概論",課程英文名稱:"Introduction to Natural Science",學分數:"2",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"必修",停開註記:"",教室與上課時間:`Nanda南大2205	T1T2
`,授課教師:`杜明進	TU, MING-CHIN
`,擋修說明:"",課程限制說明:"限國小教育學程生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120TEE 101500",課程中文名稱:"健康與體育",課程英文名稱:"Health and Physical Education",學分數:"2",人限:"25",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`Nanda南大A413	R3R4
`,授課教師:`鄭麗媛	CHENG, LI-YUAN
`,擋修說明:"",課程限制說明:"限國小教育學程生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120TEE 101800",課程中文名稱:"教育心理學",課程英文名稱:"Educational Psychology",學分數:"2",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程為16 週課程。",停開註記:"",教室與上課時間:`Nanda南大1411	T1T2
`,授課教師:`郭哲宇	KUO, CHE-YU
`,擋修說明:"",課程限制說明:"限國小教育學程生",第一二專長對應:"",學分學程對應:"(跨領域)教育知能學分學程",不可加簽說明:"",必選修說明:""},{科號:"11120TEE 101900",課程中文名稱:"教育哲學",課程英文名稱:"Philosophy of Education",學分數:"2",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程為16 週課程。",停開註記:"",教室與上課時間:`Nanda南大1319	M3M4
`,授課教師:`王智弘	WANG,CHIH-HUNG
`,擋修說明:"",課程限制說明:"限國小教育學程生",第一二專長對應:"",學分學程對應:"(跨領域)教育知能學分學程",不可加簽說明:"",必選修說明:""},{科號:"11120TEE 102100",課程中文名稱:"教育概論",課程英文名稱:"Foundation of Education",學分數:"2",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`Nanda南大1403	M7M8
`,授課教師:`葉春櫻	YEH, CHUN-YING
`,擋修說明:"",課程限制說明:"限國小教育學程生",第一二專長對應:"",學分學程對應:"(跨領域)教育知能學分學程",不可加簽說明:"",必選修說明:""},{科號:"11120TEE 102801",課程中文名稱:"數學",課程英文名稱:"Mathematics",學分數:"2",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"必修，國民小學數學教材教法先修課程。",停開註記:"",教室與上課時間:`Nanda南大1409	M3M4
`,授課教師:`李金龍	LI, CHIN-LUNG
`,擋修說明:"",課程限制說明:"限國小教育學程生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120TEE 102802",課程中文名稱:"數學",課程英文名稱:"Mathematics",學分數:"2",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"必修，國民小學數學教材教法先修課程。「雙語教學師資職前培育課程」。本課程為16 週課程。",停開註記:"",教室與上課時間:`Nanda南大9507	M7M8
`,授課教師:`陳正忠	CHEN, JENG-CHUNG
`,擋修說明:"",課程限制說明:"限國小教育學程生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120TEE 102803",課程中文名稱:"數學",課程英文名稱:"Mathematics",學分數:"2",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"必修，國民小學數學教材教法先修課程。本課程為16 週課程。",停開註記:"",教室與上課時間:`Nanda南大9507	W3W4
`,授課教師:`陳正忠	CHEN, JENG-CHUNG
`,擋修說明:"",課程限制說明:"限國小教育學程生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120TEE 102901",課程中文名稱:"口語表達(包含國音及說話)",課程英文名稱:"Phonetics and Speech",學分數:"2",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"必修，國民小學國語教材教法先修課程。",停開註記:"",教室與上課時間:`Nanda南大1409	T8T9
`,授課教師:`黃小芳	HUANG, SHIAO-FANG
`,擋修說明:"",課程限制說明:"限國小教育學程生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120TEE 102902",課程中文名稱:"口語表達(包含國音及說話)",課程英文名稱:"Phonetics and Speech",學分數:"2",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"必修，國民小學國語教材教法先修課程。",停開註記:"",教室與上課時間:`Nanda南大1409	W8W9
`,授課教師:`范靜玉	FAN, CHING-YU
`,擋修說明:"",課程限制說明:"限國小教育學程生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120TEE 103101",課程中文名稱:"英語",課程英文名稱:"English",學分數:"2",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"必修，「雙語教學師資職前培育課程」。",停開註記:"",教室與上課時間:`Nanda南大9207	R5R6
`,授課教師:`洪雅慧	HUNG, YA-HUI
`,擋修說明:"",課程限制說明:"限國小教育學程生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120TEE 103102",課程中文名稱:"英語",課程英文名稱:"English",學分數:"2",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"必修，「雙語教學師資職前培育課程」。本課程需具備CEFR B1級(含)以上相同等級的英語能力。",停開註記:"",教室與上課時間:`Nanda南大9207	R7R8
`,授課教師:`洪雅慧	HUNG, YA-HUI
`,擋修說明:"",課程限制說明:"限國小教育學程生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120TEE 103200",課程中文名稱:"社會領域概論",課程英文名稱:"Introduction to social studies",學分數:"2",人限:"25",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`Nanda南大1403	W7W8
`,授課教師:`丁志堅	DING, TSU-JEN
`,擋修說明:"",課程限制說明:"限國小教育學程生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120TEE 103300",課程中文名稱:"視覺藝術",課程英文名稱:"Visual Arts",學分數:"2",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`Nanda南大9122	M5M6
`,授課教師:`葉俊顯	YEH,CHUN-HSIEN
`,擋修說明:"",課程限制說明:"限國小教育學程生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120TEE 103701",課程中文名稱:"音樂",課程英文名稱:"General Music",學分數:"2",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程為16 週課程。",停開註記:"",教室與上課時間:`Nanda南大2305	W3W4
`,授課教師:`王尚芳	WANG, SHANG-FANG
`,擋修說明:"",課程限制說明:"限國小教育學程生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120TEE 103702",課程中文名稱:"音樂",課程英文名稱:"General Music",學分數:"2",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"「雙語教學師資職前培育課程」",停開註記:"",教室與上課時間:`Nanda南大2305	M7M8
`,授課教師:`蘇珊	SU, SHAN
`,擋修說明:"",課程限制說明:"限國小教育學程生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120TEE 200101",課程中文名稱:"教學實習",課程英文名稱:"Teaching Internship",學分數:"4",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"必修，學期課，須修過國民小學國語、數學教材教法先修課，方可選修本課程。106、107版本僅採計2學分。",停開註記:"",教室與上課時間:`Nanda南大1403	T1T2T3T4
`,授課教師:`江美文	CHIANG, MEI-WEN
曾文鑑	TSENG, WUN-JIAN
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>國民小學國語教材教法-成績需C-以上<BR>國民小學數學教材教法-成績需C-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"限國小教育學程生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120TEE 200102",課程中文名稱:"教學實習",課程英文名稱:"Teaching Internship",學分數:"4",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"必修，學期課，須修過國民小學國語、數學教材教法先修課，方可選修本課程。106、107版本僅採計2學分。",停開註記:"",教室與上課時間:`Nanda南大1403	W1W2W3W4
`,授課教師:`李怡穎	LEE, YI-YING
蔡寶桂	TSAT,PAO-KUEI
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>國民小學國語教材教法-成績需C-以上<BR>國民小學數學教材教法-成績需C-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"限國小教育學程生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120TEE 200103",課程中文名稱:"教學實習",課程英文名稱:"Teaching Internship",學分數:"4",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"必修，學期課,須修過國民小學國語、數學教材教法先修課，「雙語教學師資職前培育課程」。",停開註記:"",教室與上課時間:`Nanda南大N414	R1R2R3R4
`,授課教師:`吳鈺崧	WU, YU-SUNG
李秉諺	LEE，PINGYEN
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>國民小學國語教材教法-成績需C-以上<BR>國民小學數學教材教法-成績需C-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"限國小教育學程生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120TEE 200104",課程中文名稱:"教學實習",課程英文名稱:"Teaching Internship",學分數:"4",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"必修，學期課,須修過國民小學國語、數學教材教法先修課，「雙語教學師資職前培育課程」。",停開註記:"",教室與上課時間:`Nanda南大1407	T1T2T3T4
`,授課教師:`丁莉杰	TIN LI CHIEH
左思謙	TSUO, SZU-CHIEN
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>國民小學國語教材教法-成績需C-以上<BR>國民小學數學教材教法-成績需C-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"限國小教育學程生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120TEE 200201",課程中文名稱:"國民小學國語教材教法",課程英文名稱:"Language Arts Teaching Materials and Methods",學分數:"2",人限:"25",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"必修，須修過口語表達(包含國音及說話)或國音及說話，方可選本課程。本課程為 16 週課程。",停開註記:"",教室與上課時間:`Nanda南大N414	W3W4
`,授課教師:`陳明蕾	CHEN, MING-LEI
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>國音及說話-成績需C-以上<BR>口語表達(包含國音及說話)-成績需C-以上<BR><br>上述條件任選一科，則不擋修。</div>`,課程限制說明:"限國小教育學程生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120TEE 200202",課程中文名稱:"國民小學國語教材教法",課程英文名稱:"Language Arts Teaching Materials and Methods",學分數:"2",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"必修，須修過口語表達(包含國音及說話)或國音及說話，方可選本課程。",停開註記:"",教室與上課時間:`Nanda南大N414	M7M8
`,授課教師:`蔡寶桂	TSAT,PAO-KUEI
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>國音及說話-成績需C-以上<BR>口語表達(包含國音及說話)-成績需C-以上<BR><br>上述條件任選一科，則不擋修。</div>`,課程限制說明:"限國小教育學程生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120TEE 200203",課程中文名稱:"國民小學國語教材教法",課程英文名稱:"Language Arts Teaching Materials and Methods",學分數:"2",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"必修，須修過口語表達(包含國音及說話)或國音及說話，方可選本課程。授課教師聘任中。",停開註記:"",教室與上課時間:`Nanda南大1405	T7T8
`,授課教師:`黃美鴻	HUANG, MEI-HUNG
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>國音及說話-成績需C-以上<BR>口語表達(包含國音及說話)-成績需C-以上<BR><br>上述條件任選一科，則不擋修。</div>`,課程限制說明:"限國小教育學程生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120TEE 200301",課程中文名稱:"國民小學數學教材教法",課程英文名稱:"Pedagogy of Mathematics in Elementary School",學分數:"2",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"必修，須修過數學或普通數學，方可選本課程。",停開註記:"",教室與上課時間:`Nanda南大N414	M5M6
`,授課教師:`蔡寶桂	TSAT,PAO-KUEI
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>普通數學-成績需C-以上<BR>數學-成績需C-以上<BR><br>上述條件任選一科，則不擋修。</div>`,課程限制說明:"限國小教育學程生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120TEE 200302",課程中文名稱:"國民小學數學教材教法",課程英文名稱:"Pedagogy of Mathematics in Elementary School",學分數:"2",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"必修，須修過數學或普通數學，方可選本課程，「雙語教學師資職前培育課程」",停開註記:"",教室與上課時間:`Nanda南大9313	R5R6
`,授課教師:`林勇吉	LIN, YUNG-CHI
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>普通數學-成績需C-以上<BR>數學-成績需C-以上<BR><br>上述條件任選一科，則不擋修。</div>`,課程限制說明:"限國小教育學程生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120TEE 200800",課程中文名稱:"國民小學英語教材教法",課程英文名稱:"English Teaching Materials & Methods",學分數:"2",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"「雙語教學師資職前培育課程」。本課程為 16 週課程。",停開註記:"",教室與上課時間:`Nanda南大N414	R5R6
`,授課教師:`余立棠	YU, LI-TANG
`,擋修說明:"",課程限制說明:"限國小教育學程生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120TEE 201100",課程中文名稱:"國民小學社會教材教法",課程英文名稱:"Methods and Materials: Elementary Society Technology",學分數:"2",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`Nanda南大N414	W5W6
`,授課教師:`倪進誠	NI, CHIN-CHENG
`,擋修說明:"",課程限制說明:"限國小教育學程生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120TEE 201200",課程中文名稱:"國民小學健康與體育教材教法",課程英文名稱:"Teaching Materials and Methods in Health and Physical Education",學分數:"2",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`Nanda南大1403	R5R6
`,授課教師:`陳政宇	CHEN，CHENG-YU
劉先翔	LIU, HSIEN-HSIANG
`,擋修說明:"",課程限制說明:"限國小教育學程生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120TEE 201400",課程中文名稱:"國民小學綜合活動教材教法",課程英文名稱:"The Teaching Materials and Methods of Elementary Comprehensive Activity",學分數:"2",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"「雙語教學師資職前培育課程」",停開註記:"",教室與上課時間:`Nanda南大N414	T8T9
`,授課教師:`葉若蘭	YEN, JUO-LAN
`,擋修說明:"",課程限制說明:"限國小教育學程生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120TEE 201600",課程中文名稱:"國民小學自然科學教材教法",課程英文名稱:"Teaching Materials and Methods of Natural Sciences in Elementary School",學分數:"2",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程為16 週課程。",停開註記:"",教室與上課時間:`Nanda南大9205	W5W6
`,授課教師:`林裕仁	LIN, YU-REN
`,擋修說明:"",課程限制說明:"限國小教育學程生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120TEE 201701",課程中文名稱:"國民小學藝術教材教法",課程英文名稱:"Teaching Materials and Methods in Art",學分數:"2",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"後9週教室為2305。",停開註記:"",教室與上課時間:`Nanda南大8309	M3M4
`,授課教師:`呂燕卿	LU,YEN-CHING
蘇珊	SU, SHAN
`,擋修說明:"",課程限制說明:"限國小教育學程生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120TEE 201702",課程中文名稱:"國民小學藝術教材教法",課程英文名稱:"Teaching Materials and Methods in Art",學分數:"2",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"「雙語教學師資職前培育課程」",停開註記:"",教室與上課時間:`Nanda南大2305	R3R4
`,授課教師:`左思謙	TSUO, SZU-CHIEN
`,擋修說明:"",課程限制說明:"限國小教育學程生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120TEE 202000",課程中文名稱:"教育見習",課程英文名稱:"Educational Probation",學分數:"2",人限:"24",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`Nanda南大1409	F1F2
`,授課教師:`廖金文	LIAO, CHIN-WEN
`,擋修說明:"",課程限制說明:"限國小教育學程生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120TEE 300101",課程中文名稱:"班級經營",課程英文名稱:"Classroom Management",學分數:"2",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`Nanda南大1409	T3T4
`,授課教師:`白雲霞	PAI, YUN-HSIA
`,擋修說明:"",課程限制說明:"限國小教育學程生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120TEE 300102",課程中文名稱:"班級經營",課程英文名稱:"Classroom Management",學分數:"2",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`Nanda南大1409	W5W6
`,授課教師:`白雲霞	PAI, YUN-HSIA
`,擋修說明:"",課程限制說明:"限國小教育學程生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120TEE 300201",課程中文名稱:"課程發展與設計",課程英文名稱:"Theory and Practice of Curriculum Development & Design",學分數:"2",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`Nanda南大N414	T3T4
`,授課教師:`呂秀蓮	LU, HSIU-LIEN
`,擋修說明:"",課程限制說明:"限國小教育學程生",第一二專長對應:"",學分學程對應:"(跨領域)教育知能學分學程",不可加簽說明:"",必選修說明:""},{科號:"11120TEE 300202",課程中文名稱:"課程發展與設計",課程英文名稱:"Theory and Practice of Curriculum Development & Design",學分數:"2",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`Nanda南大N414	T5T6
`,授課教師:`詹惠雪	CHAN, HUI-HSUEH
`,擋修說明:"",課程限制說明:"限國小教育學程生",第一二專長對應:"",學分學程對應:"(跨領域)教育知能學分學程",不可加簽說明:"",必選修說明:""},{科號:"11120TEE 300401",課程中文名稱:"教學原理",課程英文名稱:"Teaching Principles",學分數:"2",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`Nanda南大1403	T7T8
`,授課教師:`曾文鑑	TSENG, WUN-JIAN
`,擋修說明:"",課程限制說明:"限國小教育學程生",第一二專長對應:"",學分學程對應:"(跨領域)教育知能學分學程",不可加簽說明:"",必選修說明:""},{科號:"11120TEE 300402",課程中文名稱:"教學原理",課程英文名稱:"Teaching Principles",學分數:"2",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`Nanda南大N316	T3T4
`,授課教師:`詹惠雪	CHAN, HUI-HSUEH
`,擋修說明:"",課程限制說明:"限國小教育學程生",第一二專長對應:"",學分學程對應:"(跨領域)教育知能學分學程",不可加簽說明:"",必選修說明:""},{科號:"11120TEE 300501",課程中文名稱:"學習評量",課程英文名稱:"Assessment for Learning",學分數:"2",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程為 16 週課程。",停開註記:"",教室與上課時間:`Nanda南大1411	T3T4
`,授課教師:`郭哲宇	KUO, CHE-YU
`,擋修說明:"",課程限制說明:"限國小教育學程生",第一二專長對應:"",學分學程對應:"(跨領域)教育知能學分學程",不可加簽說明:"",必選修說明:""},{科號:"11120TEE 300502",課程中文名稱:"學習評量",課程英文名稱:"Assessment for Learning",學分數:"2",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`Nanda南大N414	M1M2
`,授課教師:`蔡寶桂	TSAT,PAO-KUEI
`,擋修說明:"",課程限制說明:"限國小教育學程生",第一二專長對應:"",學分學程對應:"(跨領域)教育知能學分學程",不可加簽說明:"",必選修說明:""},{科號:"11120TEE 300800",課程中文名稱:"輔導原理與實務",課程英文名稱:"Principle and Practice of Guidance",學分數:"2",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`Nanda南大1403	T5T6
`,授課教師:`曾文鑑	TSENG, WUN-JIAN
`,擋修說明:"",課程限制說明:"限國小教育學程生",第一二專長對應:"",學分學程對應:"(跨領域)教育知能學分學程",不可加簽說明:"",必選修說明:""},{科號:"11120TEE 300900",課程中文名稱:"教育研究法",課程英文名稱:"Education Research Methodology",學分數:"2",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程為 16 週課程。",停開註記:"",教室與上課時間:`Nanda南大1409	W3W4
`,授課教師:`陳鳳如	CHEN, FENG-RU
`,擋修說明:"",課程限制說明:"限國小教育學程生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120TEE 301201",課程中文名稱:"自然科學探究與實作",課程英文名稱:"Inquiry-based Learning in Natural Science",學分數:"2",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"110學年度(含)後課程版本者適用。",停開註記:"",教室與上課時間:`Nanda南大1403	F3F4
`,授課教師:`陳復琴	Chen, Fu-Chin
`,擋修說明:"",課程限制說明:"限國小教育學程生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120TEE 301202",課程中文名稱:"自然科學探究與實作",課程英文名稱:"Inquiry-based Learning in Natural Science",學分數:"2",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"110學年度(含)後課程版本者適用，「雙語教學師資職前培育課程」。",停開註記:"",教室與上課時間:`Nanda南大1403	F5F6
`,授課教師:`陳復琴	Chen, Fu-Chin
`,擋修說明:"",課程限制說明:"限國小教育學程生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120TEE 301300",課程中文名稱:"社會探究與實作",課程英文名稱:"Inquiry-based Learning in Social Studies",學分數:"2",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"110學年度(含)後課程版本者適用。本課程為16 週課程。",停開註記:"",教室與上課時間:`Nanda南大1411	T7T8
`,授課教師:`榮芳杰	RONG, FANG-JAY
`,擋修說明:"",課程限制說明:"限國小教育學程生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120TEE 301400",課程中文名稱:"另類教育與教學",課程英文名稱:"Alternative Education and Teaching",學分數:"2",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`Nanda南大1409	R8R9
`,授課教師:`曾煥淦	TSENG, HUAN-KAN
`,擋修說明:"",課程限制說明:"限國小教育學程生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120TEE 301500",課程中文名稱:"適性教學(含分組合作學習、差異化教學)",課程英文名稱:"Adaptive Instruction(including cooperative learning, differentiated instruction)",學分數:"2",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"授課教師聘任中。",停開註記:"",教室與上課時間:`Nanda南大1403	R8R9
`,授課教師:`王美娟	WANG, MEI-CHUAN
`,擋修說明:"",課程限制說明:"限國小教育學程生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120TEE 301600",課程中文名稱:"實驗教育",課程英文名稱:"Alternative Education",學分數:"2",人限:"25",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程為16 週課程。",停開註記:"",教室與上課時間:`Nanda南大1319	T5T6
`,授課教師:`王智弘	WANG,CHIH-HUNG
`,擋修說明:"",課程限制說明:"限國小教育學程生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120TEE 303501",課程中文名稱:"教育議題專題",課程英文名稱:"Special Issues on Education",學分數:"2",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"必修，本課程為16 週課程。",停開註記:"",教室與上課時間:`Nanda南大1319	M5M6
`,授課教師:`王智弘	WANG,CHIH-HUNG
`,擋修說明:"",課程限制說明:"限國小教育學程生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120TEE 303502",課程中文名稱:"教育議題專題",課程英文名稱:"Special Issues on Education",學分數:"2",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"必修",停開註記:"",教室與上課時間:`Nanda南大1407	M8M9
`,授課教師:`林信全	LIN, HSIN-CHUAN
`,擋修說明:"",課程限制說明:"限國小教育學程生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120TEE 400300",課程中文名稱:"特殊教育學生評量",課程英文名稱:"Evaluation and Assessment of Exceptional Children",學分數:"3",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"必修，須修過特殊教育導論方可選修本課程。本課程為16 週課程。授課教師聘任中。",停開註記:"",教室與上課時間:`Nanda南大1305	T2T3T4
`,授課教師:`胡瑀	HU, YU
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>特殊教育導論-成績需C-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"限特殊教育學程生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120TEE 400400",課程中文名稱:"身心障礙教材教法(1)",課程英文名稱:"Teaching Materials and Methods for Children with Special Needs (1)",學分數:"2",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"必修，須修過特殊教育導論方可選修本課程。",停開註記:"",教室與上課時間:`Nanda南大1405	W8W9
`,授課教師:`林儀婷	LIN, YI-TING
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>特殊教育導論-成績需C-以上<BR><br>上述條件一定要有，則不擋修。</div>`,課程限制說明:"限特殊教育學程生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120TEE 400600",課程中文名稱:"特殊教育教學實習",課程英文名稱:"Special Education Practicum",學分數:"4",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"必修，須修過一門教材教法方可選修本課程。本課程為16 週課程。",停開註記:"",教室與上課時間:`Nanda南大1409	R1R2R3R4
`,授課教師:`趙婉娟	CHAO,WAN-CHUAN
`,擋修說明:`<div>
  擋修對象 : 全校 <br>
  先修科目 : <BR><BR>身心障礙教材教法(1)-成績需C-以上<BR>身心障礙教材教法(2)-成績需C-以上<BR>身心障礙教材教法(1)-成績需C-以上<BR>身心障礙教材教法(2)-成績需C-以上<BR><br>上述條件任選一科，則不擋修。</div>`,課程限制說明:"限特殊教育學程生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120TEE 400700",課程中文名稱:"融合教育理論與實務",課程英文名稱:"Inclusive Education Theories and Practice",學分數:"2",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"必修。本課程為16 週課程。",停開註記:"",教室與上課時間:`Nanda南大N203	M8M9
`,授課教師:`朱思穎	CHU, SZU-YIN
吳欣如	WU, SIN-RU
`,擋修說明:"",課程限制說明:"限特殊教育學程生",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120TEG 430100",課程中文名稱:"自然科學領域探究與實作專題",課程英文名稱:"Topics in the Study and Practice of Natural Science",學分數:"2",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`EDU教  101	R5R6
`,授課教師:`陳復琴	Chen, Fu-Chin
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120THC 100300",課程中文名稱:"在地探索與田野實作：鄉村場域",課程英文名稱:"Exploring Locality and Fieldwork :Rural Field",學分數:"2",人限:"20",新生保留人數:"0",通識對象:"*1",通識類別:"社會科學領域 Elective GE course: Social Sciences",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`D-Shi實齋講堂	S3S4
`,授課教師:`錢克瑋	CHIEN, KER-WEI
`,擋修說明:"",課程限制說明:"限1年級2年級3年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120THC 100400",課程中文名稱:"探索你的可能性",課程英文名稱:"Explore Your Possibilities",學分數:"2",人限:"36",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"主要招收大學部一二年級。 報名採兩階段篩選，再加簽選課（詳見課綱），不接受期中退選。",停開註記:"",教室與上課時間:`EDU教  114	R7R8R9
`,授課教師:`彭心儀	PENG, HSINYI
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120THC 100700",課程中文名稱:"社會創新的專案規劃與實作",課程英文名稱:"Project Design and Implementation in Social Innovation",學分數:"3",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`D-Shi實齋講堂	MaMbMc
`,授課教師:`吳哲良	WU, CHE-LIANG
錢克瑋	CHIEN, KER-WEI
陳璽文	CHEN, HSI-WEN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120THC 101500",課程中文名稱:"永續設計與實作",課程英文名稱:"Sustainable design and practice",學分數:"1",人限:"15",新生保留人數:"0",通識對象:"*1",通識類別:"社會科學領域 Elective GE course: Social Sciences",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`D-Ren仁齋講堂	MaMb
`,授課教師:`郭文祺	KUO, WEN-CHI
蔡協亨	TSAI, HSIEH-HENG
李佳玫	LI, CHIA-MEI
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"(跨領域)創新設計學分學程",不可加簽說明:"",必選修說明:""},{科號:"11120THC 101901",課程中文名稱:"跨域自主實踐專題一：教育與心理",課程英文名稱:"Interdisciplinary Self-directed Learning and Practice 1_ Educational and Psychological Topics",學分數:"1",人限:"0",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"加簽選課,限大二以上載物書院生",停開註記:"",教室與上課時間:`D-Ren仁齋講堂	SaSb
`,授課教師:`商雅婷	SHANG, YA-TING
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120THC 101902",課程中文名稱:"跨域自主實踐專題一：創新與科技",課程英文名稱:"Interdisciplinary Self-directed Learning and Practice 1_ Innovation and Technology Topics",學分數:"1",人限:"0",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"加簽選課,限大二以上載物書院生",停開註記:"",教室與上課時間:`D-Ren仁齋講堂	SaSb
`,授課教師:`蔡協亨	TSAI, HSIEH-HENG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120THC 101903",課程中文名稱:"跨域自主實踐專題一：美感與實作",課程英文名稱:"Interdisciplinary Self-directed Learning and Practice 1_ Aesthetic and Implemental Topics",學分數:"1",人限:"0",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"加簽選課,限大二以上載物書院生",停開註記:"",教室與上課時間:`D-Ren仁齋講堂	SaSb
`,授課教師:`李佳玫	LI, CHIA-MEI
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120THC 102000",課程中文名稱:"科技旅讀：科學園區電腦之旅",課程英文名稱:"Travel and Reading for Technology：A Computer's Journey in the Science Park",學分數:"3",人限:"15",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`EDU教  103	T5T6T7
`,授課教師:`陳鴻文	CHEN, HUNG-WEN
陳俊銘	CHEN, CHUN-MING
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120THC 130300",課程中文名稱:"軍事美語",課程英文名稱:"American Language for Military",學分數:"2",人限:"10",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"將星計畫組必修，將星生優先修習，餘額予本國籍生選修但無法折抵役期，加退選加簽選課。",停開註記:"",教室與上課時間:`EDU教  101	S3S4
`,授課教師:`鍾堅	CHUNG, CHIEN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120THC 130400",課程中文名稱:"孫子兵法",課程英文名稱:"The Art of War for Modern Battle",學分數:"1",人限:"10",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"將星計畫組必修，將星生優先修習，餘額予本國籍生選修但無法折抵役期，加退選加簽選課。",停開註記:"",教室與上課時間:`EDU教  101	S5
`,授課教師:`于易塵	YU, YI-CHEN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120THC 230400",課程中文名稱:"哲學概論二",課程英文名稱:"Introduction of Philosophy for Military II",學分數:"1",人限:"10",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"將星計畫組必修，將星生優先修習，餘額予本國籍生選修但無法折抵役期，加退選加簽選課。",停開註記:"",教室與上課時間:`EDU教  102	S3
`,授課教師:`張延廷	CHANG, YAN-TING
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120THC 230500",課程中文名稱:"中國現代史二",課程英文名稱:"Modern History and War of China II",學分數:"1",人限:"10",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"將星計畫組必修，將星生優先修習，餘額予本國籍生選修但無法折抵役期，加退選加簽選課。",停開註記:"",教室與上課時間:`EDU教  102	S4
`,授課教師:`張延廷	CHANG, YAN-TING
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120THC 230600",課程中文名稱:"法律概論二",課程英文名稱:"Introduction to Law for Military II",學分數:"1",人限:"10",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"將星計畫組必修，將星生優先修習，餘額予本國籍生選修但無法折抵役期，加退選加簽選課。",停開註記:"",教室與上課時間:`EDU教  102	Sn
`,授課教師:`聘任中	
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120THC 330300",課程中文名稱:"領導與管理",課程英文名稱:"Management and Leadership for Small Combat Unit",學分數:"2",人限:"10",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"將星計畫組必修，將星生優先修習，餘額予本國籍生選修但無法折抵役期，加退選加簽選課。",停開註記:"",教室與上課時間:`EDU教  103	S3S4
`,授課教師:`鄭德美	Cheng, Te-Mei
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120THC 330400",課程中文名稱:"國防資訊概論",課程英文名稱:"Introduction of Defense Information Science",學分數:"1",人限:"10",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"將星計畫組必修，將星生優先修習，餘額予本國籍生選修但無法折抵役期，第三階段加簽選課。",停開註記:"",教室與上課時間:`EDU教  103	Sn
`,授課教師:`張冠群	CHANG, GUAN CHUNG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120THC 430300",課程中文名稱:"軍事專案管理",課程英文名稱:"Military Project Management",學分數:"2",人限:"10",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"將星計畫組必修，將星生優先修習，餘額予本國籍生選修但無法折抵役期，加退選加簽選課。",停開註記:"",教室與上課時間:`EDU教  109	S3S4
`,授課教師:`蒲澤春	PU, TSE-CHUN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120THC 430400",課程中文名稱:"地圖學",課程英文名稱:"Military Map",學分數:"1",人限:"10",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"將星計畫組必修，將星生優先修習，餘額予本國籍生選修但無法折抵役期，加退選加簽選課。",停開註記:"",教室與上課時間:`EDU教  109	Sn
`,授課教師:`于易塵	YU, YI-CHEN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120THSM111000",課程中文名稱:"社區與偏鄉醫療實務",課程英文名稱:"Community and rural health care practice",學分數:"1",人限:"22",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"授課教師:陳炫達,張震慶,洪振瀛,王瑛玫,詳課綱。上課地點臺北榮民總醫院新竹分院第六會議室。",停開註記:"",教室與上課時間:"",授課教師:`聘任中	
`,擋修說明:"",課程限制說明:"限醫學系",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"醫學系111X  必修	"},{科號:"11120THSM111200",課程中文名稱:"生物統計",課程英文名稱:"Biostatistics",學分數:"2",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"1選限醫學系，2選限生科院，3選開放全校修習。詳見課程大綱。授課教師：張啟仁",停開註記:"",教室與上課時間:`CII育成320	T1T2F3F4
`,授課教師:`聘任中	
`,擋修說明:"",課程限制說明:"限生科院",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"醫學系111X  必修	"},{科號:"11120THSM111300",課程中文名稱:"神經解剖學",課程英文名稱:"Neuroanatomy",學分數:"1",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"1選限醫學系，2選限生科院，3選開放全校修習。詳見課程大綱。",停開註記:"",教室與上課時間:`CII育成320	F1F2
`,授課教師:`彭偉豪	PENG, WEI-HAO
段立珩	TUAN, LI-HENG
`,擋修說明:"",課程限制說明:"限生科院",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"醫學系111X  必修	"},{科號:"11120THSM111400",課程中文名稱:"微生物免疫學(含寄生蟲學及實驗)",課程英文名稱:"Microbiology, Immunology, and Parasitology",學分數:"6",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"1選限醫學系，2選限生科院大四以上及生科院碩博生。詳見課程大綱。",停開註記:"",教室與上課時間:`CII育成320	M1M2M3M4M5M6
`,授課教師:`陳世杰	CHEN, SHIH-CHIEH
張晃猷	CHANG, HWAN-YOU
黃建銘	HUANG, JIAN-MING
王慧菁	WANG, HUI-CHING
謝琬甄	HSIEH, WAN-CHEN
周雅菁	YA-CHING CHOU
藍忠昱	LAN, CHUNG-YU
徐子勝	HSU, TZU-SHENG
`,擋修說明:"",課程限制說明:"限生科院,碩士班博士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"醫學系111X  必修	"},{科號:"11120THSM111500",課程中文名稱:"宿主感染與免疫",課程英文名稱:"Host infection and immunity",學分數:"2",人限:"22",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限醫學系。詳見課程大綱。",停開註記:"",教室與上課時間:`CII育成320	M7W2
`,授課教師:`黃建銘	HUANG, JIAN-MING
全以祖	CHYUAN, I-TSU
黃彥霖	HUANG,YEN-LIN
溫瀅皓	WEN, YING-HAO
`,擋修說明:"",課程限制說明:"限醫學系",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"醫學系111X  必修	"},{科號:"11120THSM111600",課程中文名稱:"心臟血管系統",課程英文名稱:"The Cardiovascular System",學分數:"5",人限:"22",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"授課教師：陳泰迪、吳家棟、林佳濱、周星賢、林育勝(聘任中)  ,詳見課程大綱。",停開註記:"",教室與上課時間:`CII育成320	R3R4R5R6R7
`,授課教師:`醫學系教師	
`,擋修說明:"",課程限制說明:"限醫學系",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"醫學系111X  必修	"},{科號:"11120THSM111700",課程中文名稱:"呼吸系統",課程英文名稱:"Respiratory system",學分數:"4",人限:"22",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"詳見課程大綱。授課教師：林恕民、王智亮(聘任中)",停開註記:"",教室與上課時間:`CII育成320	T3T4T5T6
`,授課教師:`醫學系教師	
`,擋修說明:"",課程限制說明:"限醫學系",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"醫學系111X  必修	"},{科號:"11120THSM111800",課程中文名稱:"醫學專業素養二-人文倫理素養的融入",課程英文名稱:"Medical Professionalism (II) – Humanities and Ethics",學分數:"1",人限:"22",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"詳見課程大綱。授課教師：蔡博方、張幸治、陳重助、陳百璽、翁順隆(聘任中)",停開註記:"",教室與上課時間:`CII育成320	W5W6W7W8
`,授課教師:`張晃猷	CHANG, HWAN-YOU
周宏學	CHOU, HUNG-HSUEH
`,擋修說明:"",課程限制說明:"限醫學系",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"醫學系111X  必修	"},{科號:"11120THSM111900",課程中文名稱:"資料科學與醫療領域應用與實作一",課程英文名稱:"Application and implementation of data science in the medical field (I)",學分數:"2",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"1選限醫學系，2選限生科院。詳見課程大綱。",停開註記:"",教室與上課時間:`CII育成320	F7F8
`,授課教師:`劉懿璇	LIU, YI-SHIUAN
葉善茹	YEH, SHAN-JU
`,擋修說明:"",課程限制說明:"限生科院",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"醫學系111X  選修	"},{科號:"11120THSM112000",課程中文名稱:"大體解剖學實驗二",課程英文名稱:"Gross Anatomy Laboratory (II)",學分數:"2",人限:"22",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限醫學系。大體解剖實驗選課者一定要選修大體解剖正課，上課時間詳見課程大綱。",停開註記:"",教室與上課時間:`BT生技215	R1R2
`,授課教師:`陳世杰	CHEN, SHIH-CHIEH
彭偉豪	PENG, WEI-HAO
蕭廷鑫	HSIAO,TING-HSIN
段立珩	TUAN, LI-HENG
周宏學	CHOU, HONG-SHIUE
`,擋修說明:"",課程限制說明:"限醫學系",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"醫學系111X  必修	"},{科號:"11120THSM113000",課程中文名稱:"專題研究一",課程英文名稱:"Research on special topics",學分數:"1",人限:"22",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"詳見課程大綱。",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"限醫學系",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"醫學系111X  選修	"},{科號:"11120TIGP717000",課程中文名稱:"學術研究的專業素養與倫理養成",課程英文名稱:"Professional Developments for a Graduate Student",學分數:"2",人限:"10",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"CBMB學程, only for TIGP students",停開註記:"",教室與上課時間:"",授課教師:`CBMB Program	
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120TIGP717800",課程中文名稱:"分子與細胞生物科技",課程英文名稱:"Molecular & Cellular Approaches for Biotechnology",學分數:"2",人限:"10",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"CBMB學程,Lecture time: 2:00 pm - 5:00 pm,Location:Taipei,Academia Sinica, Only for TIGP students",停開註記:"",教室與上課時間:`SINICA中  研院	M6M7M8
`,授課教師:`CBMB Program	
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120TIGP718100",課程中文名稱:"書報討論",課程英文名稱:"Seminar",學分數:"1",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"Required course for CBMB students for 4 semesters. Location:Taipei,Academia Sinica",停開註記:"",教室與上課時間:`SINICA中  研院	W3W4
`,授課教師:`CBMB Program	
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120TIGP718200",課程中文名稱:"專題演講",課程英文名稱:"Colloquium",學分數:"1",人限:"10",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"Required course for CBMB students for 4 semesters, Location:Taipei,Academia Sinica",停開註記:"",教室與上課時間:"",授課教師:`CBMB Program	
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120TIGP719000",課程中文名稱:"新藥研發",課程英文名稱:"New Drug Research and Development",學分數:"2",人限:"10",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"CBMB學程,location: NTU University,Only for TIGP students",停開註記:"",教室與上課時間:"",授課教師:`CBMB Program	
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120TIGP719100",課程中文名稱:"初級中文二",課程英文名稱:"Elementary Chinese II",學分數:"0",人限:"10",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"Location:Taipei,Academia Sinica,Only for TIGP international students",停開註記:"",教室與上課時間:"",授課教師:`CBMB Program	
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120TIGP719300",課程中文名稱:"實驗室見習",課程英文名稱:"Lab Rotation",學分數:"2",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"CBMB學程",停開註記:"",教室與上課時間:"",授課教師:`CBMB Program	
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120TIGP719400",課程中文名稱:"實驗分子生物物理學",課程英文名稱:"Experimental Molecular Biophysics",學分數:"3",人限:"5",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"Only for TIGP students. Students must contact the program office before taking the course.",停開註記:"",教室與上課時間:`SINICA中  研院	T6T7T8
`,授課教師:`CBMB Program	
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120TIGP719500",課程中文名稱:"高等化學生物學專論二",課程英文名稱:"Discussion in Advanced Chemical Biology II",學分數:"3",人限:"10",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"CBMB學程,Only for TIGP students",停開註記:"",教室與上課時間:`SINICA中  研院	F2F3F4
`,授課教師:`CBMB Program	
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120TIGP719700",課程中文名稱:"分子醫學實驗法",課程英文名稱:"Experimental Approaches in Molecular Medicine",學分數:"2",人限:"10",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"CBMB學程, Only for TIGP students",停開註記:"",教室與上課時間:`SINICA中  研院	T5T6
`,授課教師:`CBMB Program	
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120TIGP719800",課程中文名稱:"醣質生物學",課程英文名稱:"Glycobiology",學分數:"2",人限:"10",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:'"CBMB學程,location:Room N101, 生化館, NTU University, only for TIGP stdnt"',停開註記:"",教室與上課時間:`SINICA中  研院	T7T8
`,授課教師:"",擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120TIGP719900",課程中文名稱:"初級中文一",課程英文名稱:"Elementary Chinese I",學分數:"0",人限:"10",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"TIGP T&A Building(CBMB/CLCLP/MST/NST學程的外籍生必修)",停開註記:"",教室與上課時間:"",授課教師:"",擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120TIGP720300",課程中文名稱:"分子科學與技術專題研究",課程英文名稱:"Special Studies on Topics about Molecular Science and Technology",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"Location:R311,IAMS,Taipei,Academia Sinica",停開註記:"",教室與上課時間:`SINICA中  研院	SnS5S6
`,授課教師:`MST Program	
`,擋修說明:"",課程限制說明:"排除大學部",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120TIGP723500",課程中文名稱:"量子光學",課程英文名稱:"Quantum Optics",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"Location:R304,CCMS & New Physics Building, NTU",停開註記:"",教室與上課時間:"",授課教師:`MST Program	
`,擋修說明:"",課程限制說明:"排除大學部",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120TIGP723800",課程中文名稱:"永續化學科技導論二",課程英文名稱:"Introduction to Sustainable Chemical Science and Technology (II)",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"Location:B105,IoC,AS",停開註記:"",教室與上課時間:`SINICA中  研院	W2W3W4
`,授課教師:`MST Program	
`,擋修說明:"",課程限制說明:"排除大學部",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120TIGP726300",課程中文名稱:"分子科學與技術書報討論暨演練",課程英文名稱:"Seminar Presentation on Topics about Molecular Science and Technology",學分數:"1",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"Location:R311,IAMS,Taipei,Academia Sinica",停開註記:"",教室與上課時間:`SINICA中  研院	S2S3
`,授課教師:`MST Program	
`,擋修說明:"",課程限制說明:"排除大學部",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120TIGP727200",課程中文名稱:"高等物理化學二",課程英文名稱:"Advanced Physical Chemistry (II)",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"Location:R121, Chemistry Building NTU",停開註記:"",教室與上課時間:"",授課教師:`MST Program	
`,擋修說明:"",課程限制說明:"排除大學部",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120TIGP727400",課程中文名稱:"高等物化特論",課程英文名稱:"Advanced Topics in Physical Chemistry",學分數:"3",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"Location:R604, Zonghe Lecture Building, Taiwan Univ.",停開註記:"",教室與上課時間:"",授課教師:`MST Program	
`,擋修說明:"",課程限制說明:"排除大學部",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120TIGP730200",課程中文名稱:"基礎分子生物學二",課程英文名稱:"Basic Molecular Biology (II)",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"Location: 資訊所,Taipei,Academia Sinica",停開註記:"",教室與上課時間:`SINICA中  研院	T2T3T4
`,授課教師:`BP Program	
`,擋修說明:"",課程限制說明:"限博士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120TIGP730300",課程中文名稱:"書報討論",課程英文名稱:"Seminar",學分數:"1",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"週四14:00-15:30上課,Location: 資訊所,Taipei,Academia Sinica",停開註記:"",教室與上課時間:`SINICA中  研院	R5R6
`,授課教師:`BP Program	
`,擋修說明:"",課程限制說明:"限博士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120TIGP730400",課程中文名稱:"研究室見習",課程英文名稱:"Lab Rotation",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"Once a week, Location: 資訊所,Taipei,Academia Sinica",停開註記:"",教室與上課時間:"",授課教師:`BP Program	
`,擋修說明:"",課程限制說明:"限博士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120TIGP730500",課程中文名稱:"閱讀指導",課程英文名稱:"Student Presentation",學分數:"1",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"週四15:30-17:00上課,Location: 資訊所,Taipei,Academia Sinica",停開註記:"",教室與上課時間:`SINICA中  研院	R7R8
`,授課教師:`BP Program	
`,擋修說明:"",課程限制說明:"限博士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120TIGP730600",課程中文名稱:"進階生物資訊統計學",課程英文名稱:"Advanced Statistical Methods in Bioinformatics",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"Location: 資科所,Taipei,Academia Sinica",停開註記:"",教室與上課時間:`SINICA中  研院	R2R3R4
`,授課教師:`BP Program	
`,擋修說明:"",課程限制說明:"限博士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120TIGP730800",課程中文名稱:"生物計算學",課程英文名稱:"Biological Computing",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"週五14:00-17:00上課,Location: 資科所,Taipei,Academia Sinica",停開註記:"",教室與上課時間:`SINICA中  研院	F5F6F7F8
`,授課教師:`BP Program	
`,擋修說明:"",課程限制說明:"限博士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120TIGP740201",課程中文名稱:"奈米科技進階A",課程英文名稱:"Advanced Nanotechnology (A)",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"Location:Taipei,Academia Sinica,物理所P101會議室",停開註記:"",教室與上課時間:`SINICA中  研院	W2W3W4
`,授課教師:`NST Program	
`,擋修說明:"",課程限制說明:"排除大學部",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120TIGP740202",課程中文名稱:"奈米科技進階B",課程英文名稱:"Advanced Nanotechnology (B)",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"Location:Taipei,Academia Sinica,物理所P101會議室",停開註記:"",教室與上課時間:`SINICA中  研院	F2F3F4
`,授課教師:`NST Program	
`,擋修說明:"",課程限制說明:"排除大學部",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120TIGP741300",課程中文名稱:"應用光學",課程英文名稱:"Applied Optics",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"Location:Taipei,Academia Sinica,物理所P101會議室",停開註記:"",教室與上課時間:`SINICA中  研院	M6M7M8
`,授課教師:`NST Program	
`,擋修說明:"",課程限制說明:"排除大學部",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120TIGP744300",課程中文名稱:"固態物理專題：進階與應用",課程英文名稱:"Special Topics on Solid State Physics: Advances and Applications",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"Location:台大物理R618",停開註記:"",教室與上課時間:"",授課教師:`NST Program	
`,擋修說明:"",課程限制說明:"排除大學部",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120TIGP747500",課程中文名稱:"高等材料化學",課程英文名稱:"Advanced Chemistry of Material",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"Location:Taipei,Academia Sinica, 化學所B105, IoC",停開註記:"",教室與上課時間:`SINICA中  研院	T2T3T4
`,授課教師:`NST Program	
`,擋修說明:"",課程限制說明:"排除大學部",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120TIGP748300",課程中文名稱:"計算材料",課程英文名稱:"Computational Material Science",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"Location:Taipei,Academia Sinica,原分所P311室",停開註記:"",教室與上課時間:`SINICA中  研院	R2R3R4
`,授課教師:`NST Program	
`,擋修說明:"",課程限制說明:"排除大學部",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120TIGP748500",課程中文名稱:"晶體成長之科學與實作",課程英文名稱:"Science and Practices of Crystal Growth",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"Location:Taipei,Academia Sinica,物理所P101會議室",停開註記:"",教室與上課時間:`SINICA中  研院	T6T7T8
`,授課教師:`NST Program	
`,擋修說明:"",課程限制說明:"排除大學部",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120TIGP748600",課程中文名稱:"尖端材料之基礎與應用",課程英文名稱:"Advanced Materials: Fundamentals and Applications",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"Location: 台大凝態中心212室",停開註記:"",教室與上課時間:"",授課教師:`NST Program	
`,擋修說明:"",課程限制說明:"排除大學部",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120TIGP749200",課程中文名稱:"書報討論",課程英文名稱:"Seminar",學分數:"1",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"Location:Taipei,Academia Sinica,物理所P101會議室",停開註記:"",教室與上課時間:`SINICA中  研院	W6W7
`,授課教師:`NST Program	
`,擋修說明:"",課程限制說明:"排除大學部",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120TIGP749400",課程中文名稱:"專題演講",課程英文名稱:"Colloquium",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"Location:Taipei,Academia Sinica",停開註記:"",教室與上課時間:"",授課教師:`NST Program	
`,擋修說明:"",課程限制說明:"排除大學部",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120TL  500000",課程中文名稱:"論文研究",課程英文名稱:"Thesis",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限台文所碩三以上修習",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"排除台文所碩士班1年級2年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"台文所111M  必修	"},{科號:"11120TL  500200",課程中文名稱:"台灣文學史專題二",課程英文名稱:"Topics on Taiwan Literary History II",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程為16週彈性課程",停開註記:"",教室與上課時間:`HSS人社A309	W6W7W8
`,授課教師:`陳惠齡	HUANG CHEN, WEI-LIN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"台研教在職學位班111P  選修	台文所111D  選修	台文所111M  必修	"},{科號:"11120TL  518600",課程中文名稱:"作家研究與作品轉譯專題",課程英文名稱:"Studies of Authors and Translation",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程為16週彈性課程；為基礎選修課程。",停開註記:"",教室與上課時間:`HSS人社A309	F2F3F4
`,授課教師:`劉柳書琴	LIU, LIU SHU QIN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"台研教在職學位班111P  選修	台文所111D  選修	台文所111M  選修	"},{科號:"11120TL  560400",課程中文名稱:"精神分析與文學批評",課程英文名稱:"Psychoanalysis and Literary Criticism",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程為16週彈性課程",停開註記:"",教室與上課時間:`HSS人社A309	T3T4Tn
`,授課教師:`李癸雲	LEE, KUEI-YUN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"台研教在職學位班111P  選修	台文所111D  選修	台文所111M  選修	"},{科號:"11120TL  570600",課程中文名稱:"劇本分析",課程英文名稱:"Play Analysis",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程為16週彈性課程；為基礎選修課程。",停開註記:"",教室與上課時間:`HSS人社A309	T6T7T8
`,授課教師:`石婉舜	SHIH, WAN-SHUN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"台研教在職學位班111P  選修	亞際文化碩士學程111M  選修	台文所111D  選修	台文所111M  選修	"},{科號:"11120TL  571200",課程中文名稱:"影視劇本改編二",課程英文名稱:"Script adaptation II",學分數:"3",人限:"5",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"此課程為基礎選修課程",停開註記:"",教室與上課時間:`HSS人社A309	M5M6M7
`,授課教師:`安哲毅	AN, JE-YI
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"台研教在職學位班111P  選修	台文所111D  選修	台文所111M  選修	"},{科號:"11120TL  580300",課程中文名稱:"族裔比較文學專題",課程英文名稱:"Ethnic Comparative Literature",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程為16週彈性課程",停開註記:"",教室與上課時間:`HSS人社A309	W2W3W4
`,授課教師:`陳芷凡	CHEN, CHIH-FAN
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"台研教在職學位班111P  選修	台文所111D  選修	台文所111M  選修	"},{科號:"11120TL  590600",課程中文名稱:"科幻小說與後人類",課程英文名稱:"Science Fiction and the Posthuman",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程為16週彈性課程",停開註記:"",教室與上課時間:`HSS人社A309	M3M4Mn
`,授課教師:`王威智	WANG, WEI-CHIH
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"台研教在職學位班111P  選修	台文所111D  選修	台文所111M  選修	"},{科號:"11120TL  700000",課程中文名稱:"論文研究",課程英文名稱:"Thesis",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限台文所博三以上修習",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"排除台文所博士班1年級2年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"台文所111D  必修	"},{科號:"11120TL  700200",課程中文名稱:"台灣文學文獻與研究方法二",課程英文名稱:"The Source Materials of Taiwan Literature and Research Methodology (II)",學分數:"3",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"IACS論文研究方法多選一，選課前需先經授課老師同意。本課程為16週彈性課程",停開註記:"",教室與上課時間:`HSS人社A309	R2R3R4
`,授課教師:`謝世宗	SHIE, SHR-TZUNG
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"台研教在職學位班111P  選修	亞際文化碩士學程111M  選修	台文所111D  必修	台文所111M  選修	"},{科號:"11120TM  200201",課程中文名稱:"管理學",課程英文名稱:"Management",學分數:"3",人限:"70",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"本課程為 16 週課程",停開註記:"",教室與上課時間:`TSMC台積309	T7T8T9
`,授課教師:`胡美智	HU,MEI-CHIH
`,擋修說明:"",課程限制說明:"科管院,大學部2年級3年級4年級優先，第3次選課起開放全校修習",第一二專長對應:"經濟(第一專長)",學分學程對應:"(跨領域)創新創業學分學程",不可加簽說明:"",必選修說明:"經濟系109BA 必修	經濟系109BB 必修	經濟系110BA 必修	經濟系110BB 必修	計財系109B  必修	計財系110B  必修	科管院學士班109B  必修	科管院學士班110B  必修	科管院學士班110BA 必修	"},{科號:"11120TM  200202",課程中文名稱:"管理學",課程英文名稱:"Management",學分數:"3",人限:"70",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程為 16 週課程",停開註記:"",教室與上課時間:`TSMC台積309	W7W8W9
`,授課教師:`申欽鳴	SHIN, KYOUNG-MUN
張元杰	CHANG, YUAN-CHIEH
`,擋修說明:"",課程限制說明:"科管院,大學部2年級3年級4年級優先，第3次選課起開放全校修習",第一二專長對應:"經濟(第一專長)",學分學程對應:"(跨領域)創新創業學分學程",不可加簽說明:"",必選修說明:"經濟系109BA 必修	經濟系109BB 必修	經濟系110BA 必修	經濟系110BB 必修	計財系109B  必修	計財系110B  必修	科管院學士班109B  必修	科管院學士班110B  必修	"},{科號:"11120TM  400300",課程中文名稱:"行銷管理",課程英文名稱:"Marketing Management",學分數:"3",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程為 16 週課程",停開註記:"",教室與上課時間:`TSMC台積120	R2R3R4
`,授課教師:`吳清炎	WU. CHING-YAN
`,擋修說明:"",課程限制說明:"科管院,大學部優先，第3次選課起開放全校修習",第一二專長對應:"管理(第一專長)",學分學程對應:"(跨領域)創新創業學分學程",不可加簽說明:"",必選修說明:"科管所111M  選修	科管院學士班109B  必修	"},{科號:"11120TM  400500",課程中文名稱:"科技管理導論",課程英文名稱:"Fundamentals of  Technology Management",學分數:"3",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程為 16 週課程",停開註記:"",教室與上課時間:`TSMC台積120	F2F3F4
`,授課教師:`李傳楷	LEE, CHUAN-KAI
`,擋修說明:"",課程限制說明:"科管院,大學部優先，第3次選課起開放全校修習",第一二專長對應:"管理(第一專長)",學分學程對應:"(跨領域)生物科技管理學分學程/(跨領域)創新創業學分學程",不可加簽說明:"",必選修說明:"科管所111M  選修	科管院學士班108B  必修	科管院學士班109B  必修	"},{科號:"11120TM  401000",課程中文名稱:"國際企業管理",課程英文名稱:"International Business Management",學分數:"3",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"本課程為 16 週課程",停開註記:"",教室與上課時間:`TSMC台積120	M2M3M4
`,授課教師:`錢克瑄	CHIEN, KER-HSUAN
`,擋修說明:"",課程限制說明:"科管院優先，第3次選課起開放全校修習",第一二專長對應:"管理(第一專長)",學分學程對應:"",不可加簽說明:"",必選修說明:"科管所111M  選修	科管院學士班108B  選修	科管院學士班108BA 選修	科管院學士班109B  選修	科管院學士班109BA 選修	科管院學士班110BA 選修	"},{科號:"11120TM  401400",課程中文名稱:"電子商務與零售管理",課程英文名稱:"E-commerce and Retailing Management",學分數:"3",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"本課程為 16 週課程",停開註記:"",教室與上課時間:`TSMC台積429	R5R6R7
`,授課教師:`簡珮瑜	CHIEN, PEI-YU
`,擋修說明:"",課程限制說明:"科管院,大學部碩士班優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"科管所111M  選修	科管院學士班108BA 選修	科管院學士班109BA 選修	"},{科號:"11120TM  500000",課程中文名稱:"論文研究",課程英文名稱:"Thesis",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限科管所碩二以上修習",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"排除科管所碩士班1年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"科管所111M  必修	"},{科號:"11120TM  500700",課程中文名稱:"研究方法",課程英文名稱:"Research Methods",學分數:"3",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程為 16 週課程",停開註記:"",教室與上課時間:`TSMC台積428	W2W3W4
`,授課教師:`簡珮瑜	CHIEN, PEI-YU
李傳楷	LEE, CHUAN-KAI
`,擋修說明:"",課程限制說明:"限科管所碩士班博士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"科管所111DA 選修	科管所111M  必修	"},{科號:"11120TM  501300",課程中文名稱:"創業管理",課程英文名稱:"Entrepreneurship",學分數:"3",人限:"0",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"16 週課程,兩岸清華創業實驗室、菁英計畫成員始得修習該課程,以加簽方式選課",停開註記:"",教室與上課時間:`TSMC台積120	MaMbMc
`,授課教師:`吳清炎	WU. CHING-YAN
胡美智	HU,MEI-CHIH
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"科管所111M  選修	"},{科號:"11120TM  502100",課程中文名稱:"創新與技術策略",課程英文名稱:"Innovation and Technology Strategy",學分數:"3",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程為 16 週課程",停開註記:"",教室與上課時間:`TSMC台積120	M6M7M8
`,授課教師:`洪世章	HUNG, SHIH-CHANG
`,擋修說明:"",課程限制說明:"限科管所碩士班博士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"科管所111DA 選修	科管所111M  必修	"},{科號:"11120TM  503900",課程中文名稱:"書報討論二",課程英文名稱:"Seminar(II)",學分數:"2",人限:"35",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程為 16 週課程",停開註記:"",教室與上課時間:`TSMC台積903	W5W6
`,授課教師:`張元杰	CHANG, YUAN-CHIEH
`,擋修說明:"",課程限制說明:"限服科所碩士班博士班,科管所碩士班博士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"科管所111DA 選修	科管所111M  必修	"},{科號:"11120TM  508900",課程中文名稱:"商業模式和創新分析",課程英文名稱:"Business Models and Innovation Analytics",學分數:"3",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"本課程為 16 週課程",停開註記:"",教室與上課時間:`TSMC台積120	F5F6F7
`,授課教師:`王振源	WONG CHAN YUAN
`,擋修說明:"",課程限制說明:"IMBA碩士班,科管所優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"IMBA碩士班111M  選修	科管所111DA 選修	科管所111M  選修	科管院學士班108BA 選修	科管院學士班109BA 選修	"},{科號:"11120TM  511700",課程中文名稱:"專案管理",課程英文名稱:"Project Management",學分數:"3",人限:"0",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"本課程為 16 週課程。請以加簽選課",停開註記:"",教室與上課時間:`TSMC台積421	T5T6T7
`,授課教師:`謝英哲	HSIEH, YING-CHE
`,擋修說明:"",課程限制說明:"限科管所碩士班2年級博士班2年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"IMBA碩士班111M  選修	科管所111DA 選修	科管所111M  必修	"},{科號:"11120TM  700000",課程中文名稱:"論文研究",課程英文名稱:"Thesis",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"限科管所博二以上修習",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"排除科管所博士班1年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"科管所111D  必修	科管所111DA 必修	"},{科號:"11120TM  700200",課程中文名稱:"科技管理理論二",課程英文名稱:"Technology Management Theory (II)",學分數:"3",人限:"15",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程為 16 週課程",停開註記:"",教室與上課時間:`TSMC台積833	R2R3R4
`,授課教師:`劉玉雯	LIU, YUWEN
簡珮瑜	CHIEN, PEI-YU
李傳楷	LEE, CHUAN-KAI
`,擋修說明:"",課程限制說明:"限科管所博士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"科管所111D  必修	科管所111DA 選修	"},{科號:"11120TM  700400",課程中文名稱:"定量研究方法",課程英文名稱:"Quantitative Research Method",學分數:"3",人限:"15",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程為 16 週課程",停開註記:"",教室與上課時間:`TSMC台積833	M2M3M4
`,授課教師:`丘宏昌	CHIU, HUNG-CHANG
`,擋修說明:"",課程限制說明:"限科管所博士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"科管所111D  必修	科管所111DA 必修	"},{科號:"11120TM  701700",課程中文名稱:"全球永續與社會發展",課程英文名稱:"Global sustainability and social development",學分數:"3",人限:"15",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程為 16 週課程",停開註記:"",教室與上課時間:`TSMC台積833	W5W6W7
`,授課教師:`謝英哲	HSIEH, YING-CHE
錢克瑄	CHIEN, KER-HSUAN
`,擋修說明:"",課程限制說明:"限科管所博士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"科管所111D  選修	科管所111DA 必修	"},{科號:"11120TSE 500000",課程中文名稱:"21世紀全球秩序的移轉",課程英文名稱:"The Transformation of Global Order in the 21st Century",學分數:"3",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"Foundational Knowledge. Guest speaker: Prof Amitav Acharya (American University)",停開註記:"",教室與上課時間:`CII育成A8	W2W3W4
`,授課教師:`蔡中民	TSAI, CHUNG-MIN
`,擋修說明:"",課程限制說明:"排除大學部1年級2年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"IMBA碩士班111M  選修	台北政經學院111M  選修	"},{科號:"11120TSE 500500",課程中文名稱:"書報討論二: 二十一世紀的議題及構想",課程英文名稱:"Seminar II: Issues and Ideas of the 21st Century",學分數:"2",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"Foundational Knowledge. Note that only one seminar can be counted as graduation requirement.",停開註記:"",教室與上課時間:`CII育成A8	R2R3R4
`,授課教師:`蔡中民	TSAI, CHUNG-MIN
`,擋修說明:"",課程限制說明:"排除大學部1年級2年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"IMBA碩士班111M  選修	台北政經學院111M  選修	"},{科號:"11120TSE 500600",課程中文名稱:"論文研究",課程英文名稱:"Thesis",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"Required for second-year and above students.",停開註記:"",教室與上課時間:"",授課教師:`指導教授	
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"台北政經學院111M  選修	"},{科號:"11120TSE 501100",課程中文名稱:"比較觀點下的亞洲經濟發展",課程英文名稱:"Asian Economic Development in Comparative Perspective",學分數:"2",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"MAPE core/MGPE optional/MED core",停開註記:"",教室與上課時間:`CII育成A9	T6T7
`,授課教師:`陳添枝	CHEN, TAIN-JY
`,擋修說明:"",課程限制說明:"排除大學部1年級2年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"IMBA碩士班111M  選修	台北政經學院111M  選修	"},{科號:"11120TSE 501200",課程中文名稱:"國際政治經濟",課程英文名稱:"Perspectives in International Political Economy",學分數:"2",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"同步遠距教學.MGPE core/MAPE optional. Guest speaker: Prof Yves Tiberghien (UBC)",停開註記:"",教室與上課時間:`CII育成A8	TnT5
`,授課教師:`客座教授	
`,擋修說明:"",課程限制說明:"排除大學部1年級2年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"IMBA碩士班111M  選修	台北政經學院111M  選修	"},{科號:"11120TSE 502300",課程中文名稱:"亞洲的政府與發展：戰後台灣個案研究",課程英文名稱:"State and Development in Asia: Case study in Postwar Taiwan",學分數:"2",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"MAPE core/MGPE optional. Guest speaker: Dr. Hsiao-ting Lin (Hoover Institution, Stanford University)",停開註記:"",教室與上課時間:`CII育成A8	M3M4
`,授課教師:`趙相科	CHAO, HSIANG-KE
`,擋修說明:"",課程限制說明:"排除大學部1年級2年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"IMBA碩士班111M  選修	台北政經學院111M  選修	"},{科號:"11120TSE 502500",課程中文名稱:"亞洲的政府與政治",課程英文名稱:"Government and Politics in Asia",學分數:"2",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"同步遠距教學.MAPE core/MGPE optional. Guest speaker: Prof Tun-jen Cheng (William & Mary)",停開註記:"",教室與上課時間:`CII育成A8	T2T3
`,授課教師:`客座教授	
`,擋修說明:"",課程限制說明:"排除大學部1年級2年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"IMBA碩士班111M  選修	台北政經學院111M  選修	"},{科號:"11120TSE 502700",課程中文名稱:"比較政治經濟",課程英文名稱:"Perspectives in Comparative Political Economy",學分數:"3",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"MAPE core/MGPE optional",停開註記:"",教室與上課時間:`CII育成A9	WaWbWc
`,授課教師:`蔡中民	TSAI, CHUNG-MIN
`,擋修說明:"",課程限制說明:"排除大學部1年級2年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"IMBA碩士班111M  選修	台北政經學院111M  選修	"},{科號:"11120TSE 503000",課程中文名稱:"經濟發展",課程英文名稱:"Topics in Development Economics",學分數:"2",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"MED core. Guest speaker: Prof Ping Wang (Washington University in St. Louis)",停開註記:"",教室與上課時間:`CII育成A8	F2F3
`,授課教師:`李文傑	WEN-CHIEH LEE
`,擋修說明:"",課程限制說明:"排除大學部1年級2年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"IMBA碩士班111M  選修	台北政經學院111M  選修	"},{科號:"11120TSE 503300",課程中文名稱:"總體經濟分析",課程英文名稱:"Macroeconomic Analysis",學分數:"2",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"MED prerequisite.",停開註記:"",教室與上課時間:`CII育成A9	W5W6
`,授課教師:`黃朝熙	HUANG, CHAO-HSI
`,擋修說明:"",課程限制說明:"排除大學部1年級2年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"IMBA碩士班111M  選修	台北政經學院111M  選修	"},{科號:"11120TSE 504100",課程中文名稱:"兩岸關係政治經濟",課程英文名稱:"Political Economy of Cross-Strait Relations",學分數:"2",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"MAPE optional/MGPE optional. Prof Chen-Dong Tso.",停開註記:"",教室與上課時間:`CII育成A9	M6M7
`,授課教師:`聘任中	
`,擋修說明:"",課程限制說明:"排除大學部1年級2年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"IMBA碩士班111M  選修	台北政經學院111M  選修	"},{科號:"11120TSE 505200",課程中文名稱:"數量方法二",課程英文名稱:"Quantitative Methods II",學分數:"2",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:"Methodology. MED required. Associate Prof. Tse-min Lin (UT - Austin). In person.",停開註記:"",教室與上課時間:`CII育成A9	R6R7
`,授課教師:`客座教授	
`,擋修說明:"",課程限制說明:"排除大學部1年級2年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"IMBA碩士班111M  選修	台北政經學院111M  選修	"},{科號:"11120UPMT300300",課程中文名稱:"組織行為",課程英文名稱:"Organizational Behavior",學分數:"3",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:`TSMC台積223	T5T6T7
`,授課教師:`林舒予	LIN, SHUYEU
`,擋修說明:"",課程限制說明:"科管院學士班2年級3年級4年級優先，第3次選課起開放全校修習",第一二專長對應:"管理(第一專長)",學分學程對應:"(跨領域)生物科技管理學分學程",不可加簽說明:"",必選修說明:"科管院學士班109B  選修	"},{科號:"11120UPMT300500",課程中文名稱:"人力資源管理",課程英文名稱:"Human Resource Management",學分數:"3",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`TSMC台積421	W5W6W7
`,授課教師:`聘任中	
`,擋修說明:"",課程限制說明:"科管院學士班大學部3年級4年級,國際學士班大學部3年級4年級優先，第3次選課起開放全校修習",第一二專長對應:"管理(第一專長)",學分學程對應:"(跨領域)創新創業學分學程",不可加簽說明:"",必選修說明:"科管院學士班108B  選修	科管院學士班108BA 選修	科管院學士班109B  選修	科管院學士班109BA 選修	"},{科號:"11120UPMT300600",課程中文名稱:"數位經濟新創事業導論",課程英文名稱:"Introduction to new venture creation in the digital economy",學分數:"3",人限:"35",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`TSMC台積431	M5M6M7
`,授課教師:`聘任中	
`,擋修說明:"",課程限制說明:"科管院學士班大學部3年級4年級,國際學士班大學部3年級4年級優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"(跨領域)創新創業學分學程",不可加簽說明:"",必選修說明:"科管院學士班108BA 選修	科管院學士班109BA 選修	"},{科號:"11120UPMT300700",課程中文名稱:"領導者精神:理論與哈佛管理個案研討",課程英文名稱:"Leadership Development: Theory and Harvard Business Case Study",學分數:"3",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"英",備註:" ",停開註記:"",教室與上課時間:`TSMC台積223	MnM5M6
`,授課教師:`劉宛淯	GRACE LIU
`,擋修說明:"",課程限制說明:"科管院學士班大學部3年級4年級,國際學士班大學部3年級4年級優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"科管院學士班108BA 選修	科管院學士班109BA 選修	"},{科號:"11120UPMT400300",課程中文名稱:"企業架構流程與管理",課程英文名稱:"Enterprise Architecture and Management",學分數:"2",人限:"60",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"科管院碩班及其他系所大三以上同學以加簽方式選課,請洽科管院學士班辦公室",停開註記:"",教室與上課時間:`TSMC台積224	F5F6
`,授課教師:`洪建儒	HUNG, CHIEN-JU
`,擋修說明:"",課程限制說明:"限經濟系大學部3年級4年級,計財系大學部3年級4年級,科管院學士班大學部3年級4年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"科管院學士班108B  選修	"},{科號:"11120ZY  100003",課程中文名稱:"服務學習--Fun心balay偏鄉服務隊",課程英文名稱:"Service Learning",學分數:"0",人限:"12",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"授課單位：新竹市築心生命教育協會~聯絡方式請見課程大綱",停開註記:"",教室與上課時間:"",授課教師:`課外活動組	
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120ZY  100004",課程中文名稱:"服務學習--晨光家園弱勢兒童課後輔導",課程英文名稱:"Service Learning",學分數:"0",人限:"10",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"授課單位：新竹勝利堂晨光家園~聯絡方式請見課程大綱",停開註記:"",教室與上課時間:"",授課教師:`課外活動組	
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120ZY  100005",課程中文名稱:"服務學習--陪伴心路寶貝學習",課程英文名稱:"Service Learning-Accompany syinlu children",學分數:"0",人限:"10",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"授課單位：心路基金會-新竹兒童日間服務中心~聯絡方式請見課程大綱",停開註記:"",教室與上課時間:"",授課教師:`課外活動組	
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120ZY  100006",課程中文名稱:"服務學習--天文知識推廣教育",課程英文名稱:"Service Learning: Astronomy",學分數:"0",人限:"12",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"授課單位：清華大學天文社~聯絡方式請見課程大綱",停開註記:"",教室與上課時間:"",授課教師:`課外活動組	
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120ZY  100007",課程中文名稱:"服務學習--熱血青年反哺心",課程英文名稱:"Service Learning-Passion youth : with cup scouts",學分數:"0",人限:"11",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"授課單位：清華大學羅浮群~聯絡方式請見課程大綱",停開註記:"",教室與上課時間:"",授課教師:`課外活動組	
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120ZY  100008",課程中文名稱:"服務學習--仁愛之家弱勢學童課業輔導",課程英文名稱:"Service Learning-(Ren ai zhi jia) accompany the children who is underprivileged",學分數:"0",人限:"10",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"授課單位：清華大學課輔志工社~聯絡方式請見課程大綱",停開註記:"停開",教室與上課時間:"",授課教師:`課外活動組	
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120ZY  100009",課程中文名稱:"服務學習--校園領航員",課程英文名稱:"Campus tour training program",學分數:"0",人限:"27",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"授課單位：清華大學校園導覽小組~聯絡方式請見課程大綱",停開註記:"",教室與上課時間:"",授課教師:`課外活動組	
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120ZY  100010",課程中文名稱:"服務學習--文服一日營及東園國小例行",課程英文名稱:"Service Learning",學分數:"0",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"授課單位：清華大學基層文化服務社~聯絡方式請見課程大綱",停開註記:"",教室與上課時間:"",授課教師:`課外活動組	
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120ZY  100012",課程中文名稱:"服務學習--芎林課輔",課程英文名稱:"Service Learning-Qionglin Township school work guidance",學分數:"0",人限:"12",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"授課單位：信望愛同好會~聯絡方式請見課程大綱",停開註記:"",教室與上課時間:"",授課教師:`課外活動組	
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120ZY  100013",課程中文名稱:"服務學習--緊急救護與醫療服務志工",課程英文名稱:"Service Learning",學分數:"0",人限:"8",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"授課單位：清華大學衛生保健組~聯絡方式請見課程大綱",停開註記:"",教室與上課時間:"",授課教師:`課外活動組	
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120ZY  100014",課程中文名稱:"服務學習-惠瑜慈善協會弱勢學生補救教學",課程英文名稱:"Michelle Chiou Foundation one-on-one remedial teaching for disadvantaged students",學分數:"0",人限:"25",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"授課單位：惠瑜慈善協會~聯絡方式請見課程大綱",停開註記:"",教室與上課時間:"",授課教師:`課外活動組	
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120ZY  100015",課程中文名稱:"服務學習--學生自治為什麼會失敗？",課程英文名稱:"Service Learning",學分數:"0",人限:"18",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"授課單位：學生會~聯絡方式請見課程大綱",停開註記:"",教室與上課時間:"",授課教師:`課外活動組	
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120ZY  100016",課程中文名稱:"服務學習--校園流浪犬關懷",課程英文名稱:"Service Learning-Campus stray dog care lecture",學分數:"0",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"授課單位：清華大學關懷生命社~聯絡方式請見課程大綱",停開註記:"",教室與上課時間:"",授課教師:`課外活動組	
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120ZY  100017",課程中文名稱:"服務學習--高關懷家庭兒少課業輔導",課程英文名稱:"Service Learning",學分數:"0",人限:"12",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"授課單位：財團法人漢慈公益基金會~聯絡方式請見課程大綱",停開註記:"",教室與上課時間:"",授課教師:`課外活動組	
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120ZY  100019",課程中文名稱:"服務學習--新生學伴計畫",課程英文名稱:"Service Learning-Newbie Program",學分數:"0",人限:"0",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"授課單位：全球事務處全球招生與服務組~聯絡方式請見課程大綱",停開註記:"",教室與上課時間:"",授課教師:`課外活動組	
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120ZY  100020",課程中文名稱:"服務學習--運動志工",課程英文名稱:"Service Learning",學分數:"0",人限:"6",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"授課單位：體育室~聯絡方式請見課程大綱",停開註記:"",教室與上課時間:"",授課教師:`課外活動組	
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120ZY  100021",課程中文名稱:"服務學習--聯電希望種子課輔計畫",課程英文名稱:"UMC After-school Tutoring",學分數:"0",人限:"25",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"授課單位：財團法人聯華電子科技文教基金會~聯絡方式請見課程大綱",停開註記:"",教室與上課時間:"",授課教師:`課外活動組	
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120ZY  100023",課程中文名稱:"服務學習--視覺藝術實務",課程英文名稱:"Service Learning-Visual Art Practice",學分數:"0",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"授課單位：藝術文化總中心美術館~聯絡方式請見課程大綱",停開註記:"",教室與上課時間:"",授課教師:`課外活動組	
`,擋修說明:"",課程限制說明:"【上學期原修服務學習--視覺藝術實務ZY  100023(課外活動組老師)同學選課優先,第3次選課起開放】",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120ZY  100024",課程中文名稱:"服務學習--梅竹火力班訓練課程",課程英文名稱:"Service Learning – Meichu Game Cheerleading Training",學分數:"0",人限:"0",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"授課單位：清華大學火力班~聯絡方式請見課程大綱",停開註記:"",教室與上課時間:"",授課教師:`課外活動組	
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120ZY  100025",課程中文名稱:"服務學習--梅竹賽服務學習課程",課程英文名稱:"Service Learning",學分數:"0",人限:"0",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"授課單位：清華大學癸卯梅竹籌備委員會~聯絡方式請見課程大綱",停開註記:"",教室與上課時間:"",授課教師:`課外活動組	
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120ZY  100027",課程中文名稱:"服務學習--愛情教會我們的事",課程英文名稱:"Service Learning-What love has taught us",學分數:"0",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"授課單位：善牧基金會新竹小羊之家~聯絡方式請見課程大綱",停開註記:"",教室與上課時間:"",授課教師:`課外活動組	
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120ZY  100029",課程中文名稱:"服務學習--藝術創意空間服務課程",課程英文名稱:"Service Learning-Art Studio",學分數:"0",人限:"14",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"授課單位：藝術文化總中心~聯絡方式請見課程大綱",停開註記:"",教室與上課時間:"",授課教師:`課外活動組	
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120ZY  100031",課程中文名稱:"服務學習--載物書院服務學習",課程英文名稱:"Service Learning",學分數:"0",人限:"100",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:"",授課教師:`住宿書院	
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120ZY  100032",課程中文名稱:"服務學習--多元社會實踐",課程英文名稱:"Service Learning",學分數:"0",人限:"60",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:"",授課教師:`住宿書院	
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120ZY  100033",課程中文名稱:"服務學習--木工製作與校園角落營造",課程英文名稱:"Service Learning",學分數:"0",人限:"6",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:"",授課教師:`住宿書院	
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120ZY  100034",課程中文名稱:"服務學習--校園國際交換生服務計畫",課程英文名稱:"Service Learning",學分數:"0",人限:"6",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:"",授課教師:`住宿書院	
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120ZY  100035",課程中文名稱:"服務學習--清大TBIKE計畫-實作",課程英文名稱:"Service Learning",學分數:"0",人限:"10",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:"",授課教師:`住宿書院	
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120ZY  100036",課程中文名稱:"服務學習--多元想像。性別實踐",課程英文名稱:"Service Learning",學分數:"0",人限:"7",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:"",授課教師:`住宿書院	
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120ZY  100037",課程中文名稱:"服務學習--科普推廣與服務：大眾科學",課程英文名稱:"Service Learning",學分數:"0",人限:"5",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:"",授課教師:`住宿書院	
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120ZY  100038",課程中文名稱:"服務學習--戲劇與社區服務",課程英文名稱:"Service Learning",學分數:"0",人限:"6",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:"",授課教師:`住宿書院	
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120ZY  100039",課程中文名稱:"服務學習--晨間的邂逅：東園國小課輔",課程英文名稱:"Service Learning",學分數:"0",人限:"8",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:"",授課教師:`住宿書院	
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120ZY  100040",課程中文名稱:"服務學習--動物園空間規劃",課程英文名稱:"Service Learning",學分數:"0",人限:"9",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:" ",停開註記:"",教室與上課時間:"",授課教師:`住宿書院	
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:""},{科號:"11120ZY  100201",課程中文名稱:"服務學習--工科系",課程英文名稱:"Student Service",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"16週課程,Tabc不定期會有課堂活動,教師:陳健群教授,一般性服務課程，內容由系上安排",停開註記:"",教室與上課時間:"",授課教師:`工科系	
`,擋修說明:"",課程限制說明:"限工科系大學部清班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"工科系111BA 必修	"},{科號:"11120ZY  100202",課程中文名稱:"服務學習--工科系",課程英文名稱:"Student Service",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"16週課程,Tabc不定期會有課堂活動,教師:陳健群教授,一般性服務課程，內容由系上安排",停開註記:"",教室與上課時間:"",授課教師:`工科系	
`,擋修說明:"",課程限制說明:"限工科系大學部華班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"工科系111BB 必修	"},{科號:"11120ZY  100203",課程中文名稱:"服務學習--認識數學系",課程英文名稱:"Student Service",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"16週課程,服務時間Tn,課程負責人黃敏書總助教,教師邱鴻麟主任,一般性服務課程,內容由系上安排",停開註記:"",教室與上課時間:"",授課教師:`數學系	
`,擋修說明:"",課程限制說明:"限數學系大學部",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"數學系111BA 必修	數學系111BB 必修	"},{科號:"11120ZY  100204",課程中文名稱:"服務學習--物理系",課程英文名稱:"Student Service",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"16週課程，一般性服務課程, 內容由系上安排,負責人為B1F機械工廠田振滿先生。",停開註記:"",教室與上課時間:"",授課教師:`物理系	
`,擋修說明:"",課程限制說明:"限物理系大學部",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"物理系111B A必修	物理系111B B必修	物理系111B C必修	"},{科號:"11120ZY  100205",課程中文名稱:"服務學習--化學系",課程英文名稱:"Student Service",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"16週課程,教師:蔡易州教授,聯絡窗口:陳珮寧助教,一般性服務課程,內容由系上安排",停開註記:"",教室與上課時間:"",授課教師:`化學系	
`,擋修說明:"",課程限制說明:"限化學系大學部",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"化學系111B  必修	"},{科號:"11120ZY  100206",課程中文名稱:"服務學習--材料系",課程英文名稱:"Student Service",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"16週課程,教師張守一教授,TA:羅韶奇fir88987@gmail.com/許景涵kelly520patrick@gmail.com",停開註記:"",教室與上課時間:"",授課教師:`材料系	
`,擋修說明:"",課程限制說明:"限材料系大學部",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"材料系111BA 必修	材料系111BB 必修	"},{科號:"11120ZY  100208",課程中文名稱:"服務學習--化工系",課程英文名稱:"Student Service",學分數:"0",人限:"60",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"一般性服務課程，內容由系上安排，授課教師為林育正教授",停開註記:"",教室與上課時間:"",授課教師:`化工系	
`,擋修說明:"",課程限制說明:"限化工系大學部",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"化工系111B  必修	"},{科號:"11120ZY  100209",課程中文名稱:"服務學習--動機系",課程英文名稱:"Student Service",學分數:"0",人限:"105",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"16週課程，課程負責人王訓忠教授；聯絡人黃裕容小姐。一般性服務課程，內容由系上安排",停開註記:"",教室與上課時間:"",授課教師:`動機系	
`,擋修說明:"",課程限制說明:"限動機系大學部",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"動機系111BA 必修	動機系111BB 必修	"},{科號:"11120ZY  100210",課程中文名稱:"服務學習--工工系",課程英文名稱:"Student Service",學分數:"0",人限:"60",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"16週課程,教師吳建瑋教授,聯絡人系辦姜采蘋,一般性服務課程,內容由系上安排",停開註記:"",教室與上課時間:"",授課教師:`工工系	
`,擋修說明:"",課程限制說明:"限工工系大學部",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"工工系111B  必修	"},{科號:"11120ZY  100211",課程中文名稱:"服務學習--電機系",課程英文名稱:"Student Service",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"16週課程，教師:洪毓玨教授，一般性服務課程，內容由系上安排",停開註記:"",教室與上課時間:"",授課教師:`電機系	
`,擋修說明:"",課程限制說明:"限電機系大學部清班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"電機系111BA 必修	"},{科號:"11120ZY  100212",課程中文名稱:"服務學習--電機系",課程英文名稱:"Student Service",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"16週課程，教師:洪毓玨教授，一般性服務課程，內容由系上安排",停開註記:"",教室與上課時間:"",授課教師:`電機系	
`,擋修說明:"",課程限制說明:"限電機系大學部華班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"電機系111BB 必修	"},{科號:"11120ZY  100213",課程中文名稱:"服務學習--中文系",課程英文名稱:"Student Service",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"16週課程，課程負責人：邴尚白老師。一般性服務課程，內容由系上安排。",停開註記:"",教室與上課時間:"",授課教師:`邴尚白	BIING, SHANG-BAIR
`,擋修說明:"",課程限制說明:"限中文系大學部",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"中文系111B  必修	"},{科號:"11120ZY  100214",課程中文名稱:"服務學習--外語系",課程英文名稱:"Student Service",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"課程負責人:李書雨老師",停開註記:"",教室與上課時間:"",授課教師:`外語系	
`,擋修說明:"",課程限制說明:"限外語系大學部",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"外語系111B  必修	"},{科號:"11120ZY  100215",課程中文名稱:"服務學習--經濟系",課程英文名稱:"Student Service",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"16週課程，課程負責人:朱筱蕾老師、冼芻蕘老師；一般性服務課程，內容由系上安排",停開註記:"",教室與上課時間:"",授課教師:`經濟系	
`,擋修說明:"",課程限制說明:"限經濟系大學部",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"經濟系111BA 必修	經濟系111BB 必修	"},{科號:"11120ZY  100216",課程中文名稱:"服務學習--計財系",課程英文名稱:"Student Service",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"16週課程，教師:邱婉茜老師，一般性服務課程，內容由系上安排",停開註記:"",教室與上課時間:"",授課教師:`計財系	
`,擋修說明:"",課程限制說明:"限計財系大學部",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"計財系111B  必修	"},{科號:"11120ZY  100217",課程中文名稱:"服務學習--資工系",課程英文名稱:"Student Service",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"16週課程，教師:王廷基教授，一般性服務課程，內容由系上安排",停開註記:"",教室與上課時間:"",授課教師:`資工系	
`,擋修說明:"",課程限制說明:"限資工系大學部",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"資工系111BA 必修	資工系111BB 必修	資工系111BC 必修	"},{科號:"11120ZY  100218",課程中文名稱:"服務學習--生科院",課程英文名稱:"Service Learning",學分數:"0",人限:"120",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"16週課程,陳令儀教授,一般性服務課程,內容由系上安排,地點詳課綱",停開註記:"",教室與上課時間:"",授課教師:`生科院	
`,擋修說明:"",課程限制說明:"限生科院,大學部",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"醫科系111B  必修	生科系111B  必修	生科院學士班111B  必修	"},{科號:"11120ZY  100219",課程中文名稱:"服務學習--醫環系",課程英文名稱:"Student Service",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"16週課程，統籌教師：林曉均教授",停開註記:"",教室與上課時間:"",授課教師:`醫環系	
`,擋修說明:"",課程限制說明:"限醫環系大學部",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"醫環系111B  必修	"},{科號:"11120ZY  100220",課程中文名稱:"服務學習--工學院學士班",課程英文名稱:"Student Service",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"16週課程，一般性服務課程，內容由系上安排",停開註記:"",教室與上課時間:"",授課教師:`工學院學士班	
`,擋修說明:"",課程限制說明:"限工學院學士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"工學院學士班111B  必修	"},{科號:"11120ZY  100221",課程中文名稱:"服務學習--理學院學士班",課程英文名稱:"Student Service",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"16週課程，教師:蔡易州教授，一般性服務課程，內容由系上安排",停開註記:"",教室與上課時間:"",授課教師:`理學院學士班	
`,擋修說明:"",課程限制說明:"限理學院學士班大學部1年級",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"理學院學士班111B  必修	"},{科號:"11120ZY  100222",課程中文名稱:"服務學習--黃昏的邂逅：建功高中課輔",課程英文名稱:"Service Learning",學分數:"0",人限:"30",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"16週課程，教師: 韓永楷主任,一般性服務課程，內容由系上安排",停開註記:"",教室與上課時間:"",授課教師:`電資院學士班	
`,擋修說明:"",課程限制說明:"電資院學士班優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"電資院學士班111B  必修	"},{科號:"11120ZY  100223",課程中文名稱:"服務學習--科管院學士班",課程英文名稱:"Student Service",學分數:"0",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"16週課程，教師:林勤富主任，一般性服務課程，內容由系上安排",停開註記:"",教室與上課時間:"",授課教師:`科管院學士班	
`,擋修說明:"",課程限制說明:"限科管院學士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"科管院學士班111B  必修	"},{科號:"11120ZY  100224",課程中文名稱:"服務學習--清華學院學士班",課程英文名稱:"Student Service",學分數:"0",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"16週課程，教師吳志明教授，一般性服務課程，內容由系上安排。",停開註記:"",教室與上課時間:"",授課教師:`清華學院學士	
`,擋修說明:"",課程限制說明:"清華學院學士班大學部1年級優先，第3次選課起開放全校修習",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"清華學院學士班111BA 必修	清華學院學士班111BB 必修	"},{科號:"11120ZY  100225",課程中文名稱:"服務學習--人社院學士班",課程英文名稱:"Student Service",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"16週課程,聯絡窗口dhss@my.nthu.edu.tw,負責教師張嘉鳳教授,一般性服務課程,內容由系上安排",停開註記:"",教室與上課時間:"",授課教師:`人社院學士班	
`,擋修說明:"",課程限制說明:"限人社院學士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"人社院學士班111BA 必修	人社院學士班111BB 必修	"},{科號:"11120ZY  100226",課程中文名稱:"服務學習--原科院學士班",課程英文名稱:"Student Service",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"16週課程,教師:黃郁棻主任,一般性服務課程,內容由系上安排",停開註記:"",教室與上課時間:"",授課教師:`原科院學士班	
`,擋修說明:"",課程限制說明:"限原科院學士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"原科院學士班111B  必修	"},{科號:"11120ZY  100231",課程中文名稱:"服務學習--音樂系",課程英文名稱:"Student Service",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"16週課程，授課教師張芳宇，一般性服務課程，內容由系上安排",停開註記:"",教室與上課時間:"",授課教師:`音樂系	
`,擋修說明:"",課程限制說明:"限音樂系",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"音樂系111B  必修	"},{科號:"11120ZY  100232",課程中文名稱:"服務學習--心諮系",課程英文名稱:"Student Service",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"16週課程，聯絡窗口:陳莉婷助理,一般性服務課程，內容由系上安排",停開註記:"",教室與上課時間:"",授課教師:`心諮系	
`,擋修說明:"",課程限制說明:"限心諮系大學部",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"心諮系111B  必修	"},{科號:"11120ZY  100233",課程中文名稱:"服務學習--特教系",課程英文名稱:"Student Service",學分數:"0",人限:"45",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"16週課程，朱思穎主任，一般性服務課程，內容由系上安排",停開註記:"",教室與上課時間:"",授課教師:`特教系	
`,擋修說明:"",課程限制說明:"限特教系大學部",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"特教系111B  必修	"},{科號:"11120ZY  100234",課程中文名稱:"服務學習--藝設系設計組",課程英文名稱:"Student Service",學分數:"0",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"教師:李允文教授,一般性服務課程，內容由系上安排",停開註記:"",教室與上課時間:"",授課教師:`藝設系	
`,擋修說明:"",課程限制說明:"限藝設系大學部華班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"藝設系111BB 必修	"},{科號:"11120ZY  100235",課程中文名稱:"服務學習--運科系",課程英文名稱:"Student Service",學分數:"0",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"16週課程，一般性服務課程，內容由系上安排",停開註記:"",教室與上課時間:"",授課教師:`運科系	
`,擋修說明:"",課程限制說明:"限運科系大學部",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"運科系111B  必修	"},{科號:"11120ZY  100238",課程中文名稱:"服務學習--英教系",課程英文名稱:"Student Service",學分數:"0",人限:"20",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"16週課程；課程負責人：簡靜雯系主任(聯絡人:張伊文分機76702)，一般性服務課程，內容由系上安排",停開註記:"",教室與上課時間:"",授課教師:`英教系	
`,擋修說明:"",課程限制說明:"限英教系大學部",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"英教系111B  必修	"},{科號:"11120ZY  100239",課程中文名稱:"服務學習--藝設系創作組",課程英文名稱:"Service Learning",學分數:"0",人限:"50",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"教師:胡以誠,一般性服務課程，內容由系上安排",停開註記:"",教室與上課時間:"",授課教師:`藝設系	
`,擋修說明:"",課程限制說明:"限藝設系大學部清班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"藝設系111BA 必修	"},{科號:"11120ZY  100240",課程中文名稱:"服務學習--幼教系",課程英文名稱:"Student Service",學分數:"0",人限:"46",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"16週課程，課程負責教師：張菀真老師、陳湘淳老師",停開註記:"",教室與上課時間:"",授課教師:`幼教系	
`,擋修說明:"",課程限制說明:"限幼教系大學部",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"幼教系111B  必修	"},{科號:"11120ZY  100242",課程中文名稱:"服務學習--教科系",課程英文名稱:"Student Service",學分數:"0",人限:"40",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"本課程為16週課程。課程負責人：謝卓君、楊慧琪老師",停開註記:"",教室與上課時間:"",授課教師:`教科系	
`,擋修說明:"",課程限制說明:"限教科系大學部",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"教科系111B  必修	"},{科號:"11120ZY  100244",課程中文名稱:"服務學習--竹師教育學院學士班",課程英文名稱:"Student Service",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"16週課程，課程負責人:王子華主任(聯絡人藍小姐分機73004)、鄭國泰教授(聯絡人朱小姐分機72801)",停開註記:"",教室與上課時間:"",授課教師:`教育院學士班	
`,擋修說明:"",課程限制說明:"限教育學院學士班",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"教育學院學士班111B  必修	"},{科號:"11120ZY  100245",課程中文名稱:"服務學習--藝術學院學士班",課程英文名稱:"Student Service",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"16週課程，柯宜均老師，為一般性服務課程，由系上安排",停開註記:"",教室與上課時間:"",授課教師:`藝術院學士班	
`,擋修說明:"",課程限制說明:"限藝術學院學士班大學部",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"藝術學院學士班111B  必修	"},{科號:"11120ZY  100246",課程中文名稱:"服務學習--國際學士班",課程英文名稱:"Service Learning",學分數:"0",人限:"",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"16週課程",停開註記:"",教室與上課時間:"",授課教師:`國際學士班	
`,擋修說明:"",課程限制說明:"",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"國際學士班111BA 必修	國際學士班111BB 必修	"},{科號:"11120ZY  100247",課程中文名稱:"服務學習--潛力新苗探索成長營培訓計畫",課程英文名稱:"Training Program on Young Potential Talent Camp",學分數:"0",人限:"0",新生保留人數:"0",通識對象:" ",通識類別:"",授課語言:"中",備註:"加簽選課，詳細資訊請見課程大綱。計財系開課,16週課程",停開註記:"",教室與上課時間:"",授課教師:`索樂晴	SO, LEH-CHYAN
`,擋修說明:"",課程限制說明:"限科管院",第一二專長對應:"",學分學程對應:"",不可加簽說明:"",必選修說明:"計財系111B  必修	"}];let Gl=Rl.map(n=>({selected:!1,subject:n.科號.slice(0,9).replaceAll(" ",""),class:n.科號.slice(9,15),name:{en:n.課程英文名稱,zh:n.課程中文名稱},credit:n.學分數,capacity:n.人限,_a:n.新生保留人數,_b:n.通識對象,_c:n.通識類別,lang:n.授課語言,desc:n.備註,_d:n.停開註記,venue:n.教室與上課時間.split("	")[0],time:n.教室與上課時間?n.教室與上課時間.match(/[M||T||W||R||F||S][1-9||a-c||n]/g):[],teacher:n.授課教師.split(`
`).filter(t=>t).map(t=>({en:t.split("	")[1],zh:t.split("	")[0]})),prereq:n.擋修說明,limits:n.課程限制說明,_e:n.第一二專長對應,_f:n.學分學程對應,_g:n.不可加簽說明,forwho:n.必選修說明.split("	").filter(t=>t)}));function Rn(n,t,e){const i=n.slice();return i[36]=t[e],i[37]=t,i[38]=e,i}function Gn(n,t,e){const i=n.slice();return i[39]=t[e],i}function gn(n,t,e){const i=n.slice();return i[39]=t[e],i}function gl(n){let t=n[39][n[10]]+"",e;return{c(){e=t1(t)},m(i,a){G(i,e,a)},p(i,a){a[0]&5120&&t!==(t=i[39][i[10]]+"")&&o1(e,t)},d(i){i&&R(e)}}}function mn(n){let t,e;return t=new O1({props:{size:"sm",$$slots:{default:[gl]},$$scope:{ctx:n}}}),{c(){z(t.$$.fragment)},m(i,a){J(t,i,a),e=!0},p(i,a){const o={};a[0]&5120|a[1]&8192&&(o.$$scope={dirty:a,ctx:i}),t.$set(o)},i(i){e||(T(t.$$.fragment,i),e=!0)},o(i){m(t.$$.fragment,i),e=!1},d(i){w(t,i)}}}function hn(n){let t,e,i=n[36].time,a=[];for(let l=0;l<i.length;l+=1)a[l]=Un(Gn(n,i,l));const o=l=>m(a[l],1,1,()=>{a[l]=null});return{c(){for(let l=0;l<a.length;l+=1)a[l].c();t=b1()},m(l,s){for(let r=0;r<a.length;r+=1)a[r].m(l,s);G(l,t,s),e=!0},p(l,s){if(s[0]&4096){i=l[36].time;let r;for(r=0;r<i.length;r+=1){const c=Gn(l,i,r);a[r]?(a[r].p(c,s),T(a[r],1)):(a[r]=Un(c),a[r].c(),T(a[r],1),a[r].m(t.parentNode,t))}for(u1(),r=i.length;r<a.length;r+=1)o(r);S1()}},i(l){if(!e){for(let s=0;s<i.length;s+=1)T(a[s]);e=!0}},o(l){a=a.filter(Boolean);for(let s=0;s<a.length;s+=1)m(a[s]);e=!1},d(l){_1(a,l),l&&R(t)}}}function ml(n){let t=n[39]+"",e;return{c(){e=t1(t)},m(i,a){G(i,e,a)},p(i,a){a[0]&4096&&t!==(t=i[39]+"")&&o1(e,t)},d(i){i&&R(e)}}}function Un(n){let t,e;return t=new O1({props:{size:"sm",type:"outline",$$slots:{default:[ml]},$$scope:{ctx:n}}}),{c(){z(t.$$.fragment)},m(i,a){J(t,i,a),e=!0},p(i,a){const o={};a[0]&4096|a[1]&8192&&(o.$$scope={dirty:a,ctx:i}),t.$set(o)},i(i){e||(T(t.$$.fragment,i),e=!0)},o(i){m(t.$$.fragment,i),e=!1},d(i){w(t,i)}}}function hl(n){let t,e=n[36].subject+"",i,a,o=n[36].class+"",l,s,r,c=n[36].name[n[10]]+"",I,d,u,N,E,S,H=n[36].teacher,A=[];for(let C=0;C<H.length;C+=1)A[C]=mn(gn(n,H,C));const M=C=>m(A[C],1,1,()=>{A[C]=null});let b=n[36].time&&hn(n);return{c(){t=O("div"),i=t1(e),a=k(),l=t1(o),s=k(),r=O("div"),I=t1(c),d=k();for(let C=0;C<A.length;C+=1)A[C].c();u=k(),N=O("div"),b&&b.c(),E=k()},m(C,h){G(C,t,h),U(t,i),U(t,a),U(t,l),G(C,s,h),G(C,r,h),U(r,I),U(r,d);for(let W=0;W<A.length;W+=1)A[W].m(r,null);G(C,u,h),G(C,N,h),b&&b.m(N,null),G(C,E,h),S=!0},p(C,h){if((!S||h[0]&4096)&&e!==(e=C[36].subject+"")&&o1(i,e),(!S||h[0]&4096)&&o!==(o=C[36].class+"")&&o1(l,o),(!S||h[0]&5120)&&c!==(c=C[36].name[C[10]]+"")&&o1(I,c),h[0]&5120){H=C[36].teacher;let W;for(W=0;W<H.length;W+=1){const y=gn(C,H,W);A[W]?(A[W].p(y,h),T(A[W],1)):(A[W]=mn(y),A[W].c(),T(A[W],1),A[W].m(r,null))}for(u1(),W=H.length;W<A.length;W+=1)M(W);S1()}C[36].time?b?(b.p(C,h),h[0]&4096&&T(b,1)):(b=hn(C),b.c(),T(b,1),b.m(N,null)):b&&(u1(),m(b,1,1,()=>{b=null}),S1())},i(C){if(!S){for(let h=0;h<H.length;h+=1)T(A[h]);T(b),S=!0}},o(C){A=A.filter(Boolean);for(let h=0;h<A.length;h+=1)m(A[h]);m(b),S=!1},d(C){C&&R(t),C&&R(s),C&&R(r),_1(A,C),C&&R(u),C&&R(N),b&&b.d(),C&&R(E)}}}function bn(n){let t,e,i;function a(l){n[24](l,n[36])}let o={$$slots:{default:[hl]},$$scope:{ctx:n}};return n[0][n[0].indexOf(n[36])].selected!==void 0&&(o.selected=n[0][n[0].indexOf(n[36])].selected),t=new T2({props:o}),I1.push(()=>T1(t,"selected",a,n[0][n[0].indexOf(n[36])].selected)),{c(){z(t.$$.fragment)},m(l,s){J(t,l,s),i=!0},p(l,s){n=l;const r={};s[0]&5120|s[1]&8192&&(r.$$scope={dirty:s,ctx:n}),!e&&s[0]&4097&&(e=!0,r.selected=n[0][n[0].indexOf(n[36])].selected,M1(()=>e=!1)),t.$set(r)},i(l){i||(T(t.$$.fragment,l),i=!0)},o(l){m(t.$$.fragment,l),i=!1},d(l){w(t,l)}}}function Ul(n){let t,e,i,a,o,l,s,r,c,I,d,u,N,E,S,H,A,M,b,C,h,W,y,L,$,f,P,p,a1,A1,h1,m1,V,d1,X,Y,c1,K,Z,Q,K1,D1,k1,J1,j,x,v1,y1,dt,ot;function wn(D){n[13](D)}let ht={placeholder:"Department ID..."};n[1]!==void 0&&(ht.value=n[1]),i=new Nt({props:ht}),I1.push(()=>T1(i,"value",wn,n[1]));function zn(D){n[14](D)}function Zn(D){n[15](D)}function Vn(D){n[16](D)}function qn(D){n[17](D)}function Qn(D){n[18](D)}function jn(D){n[19](D)}let w1={};n[12]!==void 0&&(w1.found=n[12]),n[2]!==void 0&&(w1.filterName=n[2]),n[3]!==void 0&&(w1.filterTeacher=n[3]),n[4]!==void 0&&(w1.filterID=n[4]),n[5]!==void 0&&(w1.filterEng=n[5]),n[6]!==void 0&&(w1.filterTimetable=n[6]),l=new q2({props:w1}),I1.push(()=>T1(l,"found",zn,n[12])),I1.push(()=>T1(l,"filterName",Zn,n[2])),I1.push(()=>T1(l,"filterTeacher",Vn,n[3])),I1.push(()=>T1(l,"filterID",qn,n[4])),I1.push(()=>T1(l,"filterEng",Qn,n[5])),I1.push(()=>T1(l,"filterTimetable",jn,n[6]));function Xn(D){n[20](D)}function xn(D){n[21](D)}let ut={};n[11]!==void 0&&(ut.selected=n[11]),n[10]!==void 0&&(ut.lang=n[10]),E=new fl({props:ut}),I1.push(()=>T1(E,"selected",Xn,n[11])),I1.push(()=>T1(E,"lang",xn,n[10])),M=new x1({props:{kind:"tertiary",tooltipPosition:"left",iconDescription:n[10].toUpperCase(),icon:Ae}}),M.$on("click",n[22]),C=new x1({props:{kind:"tertiary",tooltipPosition:"left",iconDescription:n[9].toUpperCase(),icon:Te}}),C.$on("click",n[23]);let z1=n[12],U1=[];for(let D=0;D<z1.length;D+=1)U1[D]=bn(Rn(n,z1,D));const $n=D=>m(U1[D],1,1,()=>{U1[D]=null});function te(D){n[25](D)}let Ut={};n[9]!==void 0&&(Ut.theme=n[9]),L=new E2({props:Ut}),I1.push(()=>T1(L,"theme",te,n[9]));function ne(D){n[26](D)}let bt={key:"lang"};n[7]!==void 0&&(bt.value=n[7]),P=new Y1({props:bt}),I1.push(()=>T1(P,"value",ne,n[7]));function ee(D){n[27](D)}let Lt={key:"theme"};n[8]!==void 0&&(Lt.value=n[8]),A1=new Y1({props:Lt}),I1.push(()=>T1(A1,"value",ee,n[8]));function ie(D){n[28](D)}let Wt={key:"search"};n[1]!==void 0&&(Wt.value=n[1]),V=new Y1({props:Wt}),I1.push(()=>T1(V,"value",ie,n[1]));function ae(D){n[29](D)}let Pt={key:"filterName"};n[2]!==void 0&&(Pt.value=n[2]),Y=new Y1({props:Pt}),I1.push(()=>T1(Y,"value",ae,n[2]));function le(D){n[30](D)}let vt={key:"filterTeacher"};n[3]!==void 0&&(vt.value=n[3]),Z=new Y1({props:vt}),I1.push(()=>T1(Z,"value",le,n[3]));function oe(D){n[31](D)}let Dt={key:"filterID"};n[4]!==void 0&&(Dt.value=n[4]),D1=new Y1({props:Dt}),I1.push(()=>T1(D1,"value",oe,n[4]));function re(D){n[32](D)}let Ft={key:"filterEng"};n[5]!==void 0&&(Ft.value=n[5]),j=new Y1({props:Ft}),I1.push(()=>T1(j,"value",re,n[5]));function se(D){n[33](D)}let _t={key:"filterTimetable"};return n[6]!==void 0&&(_t.value=n[6]),y1=new Y1({props:_t}),I1.push(()=>T1(y1,"value",se,n[6])),{c(){t=O("main"),e=O("div"),z(i.$$.fragment),o=k(),z(l.$$.fragment),N=k(),z(E.$$.fragment),A=k(),z(M.$$.fragment),b=k(),z(C.$$.fragment),h=k(),W=O("div");for(let D=0;D<U1.length;D+=1)U1[D].c();y=k(),z(L.$$.fragment),f=k(),z(P.$$.fragment),a1=k(),z(A1.$$.fragment),m1=k(),z(V.$$.fragment),X=k(),z(Y.$$.fragment),K=k(),z(Z.$$.fragment),K1=k(),z(D1.$$.fragment),J1=k(),z(j.$$.fragment),v1=k(),z(y1.$$.fragment),g(e,"class","flex"),g(W,"class","overflow-auto"),g(W,"role","group"),g(t,"class","max-h-screen flex flex-col")},m(D,s1){G(D,t,s1),U(t,e),J(i,e,null),U(e,o),J(l,e,null),U(e,N),J(E,e,null),U(e,A),J(M,e,null),U(e,b),J(C,e,null),U(t,h),U(t,W);for(let j1=0;j1<U1.length;j1+=1)U1[j1].m(W,null);G(D,y,s1),J(L,D,s1),G(D,f,s1),J(P,D,s1),G(D,a1,s1),J(A1,D,s1),G(D,m1,s1),J(V,D,s1),G(D,X,s1),J(Y,D,s1),G(D,K,s1),J(Z,D,s1),G(D,K1,s1),J(D1,D,s1),G(D,J1,s1),J(j,D,s1),G(D,v1,s1),J(y1,D,s1),ot=!0},p(D,s1){const j1={};!a&&s1[0]&2&&(a=!0,j1.value=D[1],M1(()=>a=!1)),i.$set(j1);const Z1={};!s&&s1[0]&4096&&(s=!0,Z1.found=D[12],M1(()=>s=!1)),!r&&s1[0]&4&&(r=!0,Z1.filterName=D[2],M1(()=>r=!1)),!c&&s1[0]&8&&(c=!0,Z1.filterTeacher=D[3],M1(()=>c=!1)),!I&&s1[0]&16&&(I=!0,Z1.filterID=D[4],M1(()=>I=!1)),!d&&s1[0]&32&&(d=!0,Z1.filterEng=D[5],M1(()=>d=!1)),!u&&s1[0]&64&&(u=!0,Z1.filterTimetable=D[6],M1(()=>u=!1)),l.$set(Z1);const St={};!S&&s1[0]&2048&&(S=!0,St.selected=D[11],M1(()=>S=!1)),!H&&s1[0]&1024&&(H=!0,St.lang=D[10],M1(()=>H=!1)),E.$set(St);const pt={};s1[0]&1024&&(pt.iconDescription=D[10].toUpperCase()),M.$set(pt);const yt={};if(s1[0]&512&&(yt.iconDescription=D[9].toUpperCase()),C.$set(yt),s1[0]&5121){z1=D[12];let L1;for(L1=0;L1<z1.length;L1+=1){const qt=Rn(D,z1,L1);U1[L1]?(U1[L1].p(qt,s1),T(U1[L1],1)):(U1[L1]=bn(qt),U1[L1].c(),T(U1[L1],1),U1[L1].m(W,null))}for(u1(),L1=z1.length;L1<U1.length;L1+=1)$n(L1);S1()}const Yt={};!$&&s1[0]&512&&($=!0,Yt.theme=D[9],M1(()=>$=!1)),L.$set(Yt);const Ot={};!p&&s1[0]&128&&(p=!0,Ot.value=D[7],M1(()=>p=!1)),P.$set(Ot);const Kt={};!h1&&s1[0]&256&&(h1=!0,Kt.value=D[8],M1(()=>h1=!1)),A1.$set(Kt);const kt={};!d1&&s1[0]&2&&(d1=!0,kt.value=D[1],M1(()=>d1=!1)),V.$set(kt);const Jt={};!c1&&s1[0]&4&&(c1=!0,Jt.value=D[2],M1(()=>c1=!1)),Y.$set(Jt);const wt={};!Q&&s1[0]&8&&(Q=!0,wt.value=D[3],M1(()=>Q=!1)),Z.$set(wt);const zt={};!k1&&s1[0]&16&&(k1=!0,zt.value=D[4],M1(()=>k1=!1)),D1.$set(zt);const Zt={};!x&&s1[0]&32&&(x=!0,Zt.value=D[5],M1(()=>x=!1)),j.$set(Zt);const Vt={};!dt&&s1[0]&64&&(dt=!0,Vt.value=D[6],M1(()=>dt=!1)),y1.$set(Vt)},i(D){if(!ot){T(i.$$.fragment,D),T(l.$$.fragment,D),T(E.$$.fragment,D),T(M.$$.fragment,D),T(C.$$.fragment,D);for(let s1=0;s1<z1.length;s1+=1)T(U1[s1]);T(L.$$.fragment,D),T(P.$$.fragment,D),T(A1.$$.fragment,D),T(V.$$.fragment,D),T(Y.$$.fragment,D),T(Z.$$.fragment,D),T(D1.$$.fragment,D),T(j.$$.fragment,D),T(y1.$$.fragment,D),ot=!0}},o(D){m(i.$$.fragment,D),m(l.$$.fragment,D),m(E.$$.fragment,D),m(M.$$.fragment,D),m(C.$$.fragment,D),U1=U1.filter(Boolean);for(let s1=0;s1<U1.length;s1+=1)m(U1[s1]);m(L.$$.fragment,D),m(P.$$.fragment,D),m(A1.$$.fragment,D),m(V.$$.fragment,D),m(Y.$$.fragment,D),m(Z.$$.fragment,D),m(D1.$$.fragment,D),m(j.$$.fragment,D),m(y1.$$.fragment,D),ot=!1},d(D){D&&R(t),w(i),w(l),w(E),w(M),w(C),_1(U1,D),D&&R(y),w(L,D),D&&R(f),w(P,D),D&&R(a1),w(A1,D),D&&R(m1),w(V,D),D&&R(X),w(Y,D),D&&R(K),w(Z,D),D&&R(K1),w(D1,D),D&&R(J1),w(j,D),D&&R(v1),w(y1,D)}}}function bl(n,t,e){let i,a,o,l,s=Gl,r="",c="",I="",d="",u=!1,N=[],E=0,S=["en","zh"],H=0,A=["g100","g80","white"];function M(Z){r=Z,e(1,r)}function b(Z){i=Z,e(12,i),e(0,s),e(1,r),e(2,c),e(3,I),e(4,d),e(5,u),e(6,N)}function C(Z){c=Z,e(2,c)}function h(Z){I=Z,e(3,I)}function W(Z){d=Z,e(4,d)}function y(Z){u=Z,e(5,u)}function L(Z){N=Z,e(6,N)}function $(Z){a=Z,e(11,a),e(0,s)}function f(Z){o=Z,e(10,o),e(34,S),e(7,E)}const P=()=>{e(7,E++,E)},p=()=>{e(8,H++,H)};function a1(Z,Q){n.$$.not_equal(s[s.indexOf(Q)].selected,Z)&&(s[s.indexOf(Q)].selected=Z,e(0,s))}function A1(Z){l=Z,e(9,l),e(35,A),e(8,H)}function h1(Z){E=Z,e(7,E)}function m1(Z){H=Z,e(8,H)}function V(Z){r=Z,e(1,r)}function d1(Z){c=Z,e(2,c)}function X(Z){I=Z,e(3,I)}function Y(Z){d=Z,e(4,d)}function c1(Z){u=Z,e(5,u)}function K(Z){N=Z,e(6,N)}return n.$$.update=()=>{n.$$.dirty[0]&127&&e(12,i=s.filter(Z=>Z.subject.replace(/[0-9]/g,"")==r.toUpperCase()).filter(Z=>(Z.name.en.toUpperCase()+Z.name.zh).includes(c.toUpperCase())).filter(Z=>JSON.stringify(Z.teacher).replace(/[\[\]\{\}",:"en""zh"]/g,"").includes(I.toUpperCase())).filter(Z=>(Z.subject+Z.class).includes(d.toUpperCase())).filter(Z=>u?Z.lang=="英":Z).filter(Z=>N.length?N.some(Q=>Z.time.includes(Q)):Z)),n.$$.dirty[0]&1&&e(11,a=s.filter(Z=>Z.selected)),n.$$.dirty[0]&128&&e(10,o=S[E%S.length]),n.$$.dirty[0]&256&&e(9,l=A[H%A.length])},[s,r,c,I,d,u,N,E,H,l,o,a,i,M,b,C,h,W,y,L,$,f,P,p,a1,A1,h1,m1,V,d1,X,Y,c1,K]}class Ll extends E1{constructor(t){super(),B1(this,t,bl,Ul,N1,{},null,[-1,-1])}}new Ll({target:document.getElementById("app")});
