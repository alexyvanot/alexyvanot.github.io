import{ag as qe,k as Yt,b7 as Vn,i as I,at as Ie,aB as Wt,j as Kt,g as le,aV as $t,ac as Qt,au as hn,aL as se,aa as he,ab as Xt,aQ as Zt,ar as vn,aS as ei,b8 as B,ad as ue,aU as ni,x as ti,a0 as Jn,aO as Qe,b9 as ii,ba as ri,m as oi,J as bn,bb as ai,aT as Yn,af as Wn,bc as Ee,z as Kn,bd as si,aN as li,as as ye,aJ as ui,be as $n,q as Qn,bf as ci,A as pi,bg as di,bh as mi,bi as gi,bj as fi,bk as hi,bl as vi,bm as bi,bn as yi,bo as _i,bp as xi,_ as Si,a2 as Ai,v as yn,h as wi,bq as ki,Y as _n,e as Ci,O as ji,br as Ti}from"./CrEmclJz.js";import{o as Li,p as Pi,d as qi,q as Ii,v as Ei}from"./B5sLhNz6.js";import{b as Di,r as Mi}from"./B1r1qw8c.js";function Zl(e,n){return n}function Fi(e,n,t){for(var r=[],i=n.length,a,o=n.length,s=0;s<i;s++){let p=n[s];Wn(p,()=>{if(a){if(a.pending.delete(p),a.done.add(p),a.pending.size===0){var m=e.outrogroups;Ge(Qe(a.done)),m.delete(a),m.size===0&&(e.outrogroups=null)}}else o-=1},!1)}if(o===0){var l=r.length===0&&t!==null;if(l){var u=t,d=u.parentNode;li(d),d.append(u),e.items.clear()}Ge(n,!l)}else a={pending:new Set(n),done:new Set},(e.outrogroups??(e.outrogroups=new Set)).add(a)}function Ge(e,n=!0){for(var t=0;t<e.length;t++)ye(e[t],n)}var xn;function eu(e,n,t,r,i,a=null){var o=e,s=new Map,l=(n&Vn)!==0;if(l){var u=e;o=I?Ie(Wt(u)):u.appendChild(qe())}I&&Kt();var d=null,p=ti(()=>{var v=t();return Jn(v)?v:v==null?[]:Qe(v)}),m,f=!0;function b(){g.fallback=d,Ni(g,m,o,n,r),d!==null&&(m.length===0?(d.f&B)===0?Yn(d):(d.f^=B,oe(d,null,o)):Wn(d,()=>{d=null}))}var y=Yt(()=>{m=le(p);var v=m.length;let _=!1;if(I){var F=$t(o)===Qt;F!==(v===0)&&(o=hn(),Ie(o),se(!1),_=!0)}for(var w=new Set,N=ei,S=ni(),x=0;x<v;x+=1){I&&he.nodeType===Xt&&he.data===Zt&&(o=he,_=!0,se(!1));var k=m[x],D=r(k,x),A=f?null:s.get(D);A?(A.v&&vn(A.v,k),A.i&&vn(A.i,x),S&&N.skipped_effects.delete(A.e)):(A=Oi(s,f?o:xn??(xn=qe()),k,D,x,i,n,t),f||(A.e.f|=B),s.set(D,A)),w.add(D)}if(v===0&&a&&!d&&(f?d=ue(()=>a(o)):(d=ue(()=>a(xn??(xn=qe()))),d.f|=B)),I&&v>0&&Ie(hn()),!f)if(S){for(const[J,Y]of s)w.has(J)||N.skipped_effects.add(Y.e);N.oncommit(b),N.ondiscard(()=>{})}else b();_&&se(!0),le(p)}),g={effect:y,items:s,outrogroups:null,fallback:d};f=!1,I&&(o=he)}function Ni(e,n,t,r,i){var A,J,Y,un,cn,pn,dn,mn,gn;var a=(r&si)!==0,o=n.length,s=e.items,l=e.effect.first,u,d=null,p,m=[],f=[],b,y,g,v;if(a)for(v=0;v<o;v+=1)b=n[v],y=i(b,v),g=s.get(y).e,(g.f&B)===0&&((J=(A=g.nodes)==null?void 0:A.a)==null||J.measure(),(p??(p=new Set)).add(g));for(v=0;v<o;v+=1){if(b=n[v],y=i(b,v),g=s.get(y).e,e.outrogroups!==null)for(const R of e.outrogroups)R.pending.delete(g),R.done.delete(g);if((g.f&B)!==0)if(g.f^=B,g===l)oe(g,null,t);else{var _=d?d.next:l;g===e.effect.last&&(e.effect.last=g.prev),g.prev&&(g.prev.next=g.next),g.next&&(g.next.prev=g.prev),H(e,d,g),H(e,g,_),oe(g,_,t),d=g,m=[],f=[],l=d.next;continue}if((g.f&Ee)!==0&&(Yn(g),a&&((un=(Y=g.nodes)==null?void 0:Y.a)==null||un.unfix(),(p??(p=new Set)).delete(g))),g!==l){if(u!==void 0&&u.has(g)){if(m.length<f.length){var F=f[0],w;d=F.prev;var N=m[0],S=m[m.length-1];for(w=0;w<m.length;w+=1)oe(m[w],F,t);for(w=0;w<f.length;w+=1)u.delete(f[w]);H(e,N.prev,S.next),H(e,d,N),H(e,S,F),l=F,d=S,v-=1,m=[],f=[]}else u.delete(g),oe(g,l,t),H(e,g.prev,g.next),H(e,g,d===null?e.effect.first:d.next),H(e,d,g),d=g;continue}for(m=[],f=[];l!==null&&l!==g;)(u??(u=new Set)).add(l),f.push(l),l=l.next;if(l===null)continue}(g.f&B)===0&&m.push(g),d=g,l=g.next}if(e.outrogroups!==null){for(const R of e.outrogroups)R.pending.size===0&&(Ge(Qe(R.done)),(cn=e.outrogroups)==null||cn.delete(R));e.outrogroups.size===0&&(e.outrogroups=null)}if(l!==null||u!==void 0){var x=[];if(u!==void 0)for(g of u)(g.f&Ee)===0&&x.push(g);for(;l!==null;)(l.f&Ee)===0&&l!==e.fallback&&x.push(l),l=l.next;var k=x.length;if(k>0){var D=(r&Vn)!==0&&o===0?t:null;if(a){for(v=0;v<k;v+=1)(dn=(pn=x[v].nodes)==null?void 0:pn.a)==null||dn.measure();for(v=0;v<k;v+=1)(gn=(mn=x[v].nodes)==null?void 0:mn.a)==null||gn.fix()}Fi(e,x,D)}}a&&Kn(()=>{var R,fn;if(p!==void 0)for(g of p)(fn=(R=g.nodes)==null?void 0:R.a)==null||fn.apply()})}function Oi(e,n,t,r,i,a,o,s){var l=(o&ii)!==0?(o&ri)===0?oi(t,!1,!1):bn(t):null,u=(o&ai)!==0?bn(i):null;return{v:l,i:u,e:ue(()=>(a(n,l??t,u??i,s),()=>{e.delete(r)}))}}function oe(e,n,t){if(e.nodes)for(var r=e.nodes.start,i=e.nodes.end,a=n&&(n.f&B)===0?n.nodes.start:t;r!==null;){var o=ui(r);if(a.before(r),r===i)return;r=o}}function H(e,n,t){n===null?e.effect.first=t:n.next=t,t===null?e.effect.last=n:t.prev=n}function Ri(e,n){var t=void 0,r;$n(()=>{t!==(t=n())&&(r&&(ye(r),r=null),t&&(r=ue(()=>{Qn(()=>t(e))})))})}function Xn(e){var n,t,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(n=0;n<i;n++)e[n]&&(t=Xn(e[n]))&&(r&&(r+=" "),r+=t)}else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function Bi(){for(var e,n,t=0,r="",i=arguments.length;t<i;t++)(e=arguments[t])&&(n=Xn(e))&&(r&&(r+=" "),r+=n);return r}function Gi(e){return typeof e=="object"?Bi(e):e??""}const Sn=[...` 	
\r\f \v\uFEFF`];function Hi(e,n,t){var r=e==null?"":""+e;if(n&&(r=r?r+" "+n:n),t){for(var i in t)if(t[i])r=r?r+" "+i:i;else if(r.length)for(var a=i.length,o=0;(o=r.indexOf(i,o))>=0;){var s=o+a;(o===0||Sn.includes(r[o-1]))&&(s===r.length||Sn.includes(r[s]))?r=(o===0?"":r.substring(0,o))+r.substring(s+1):o=s}}return r===""?null:r}function An(e,n=!1){var t=n?" !important;":";",r="";for(var i in e){var a=e[i];a!=null&&a!==""&&(r+=" "+i+": "+a+t)}return r}function De(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function Ui(e,n){if(n){var t="",r,i;if(Array.isArray(n)?(r=n[0],i=n[1]):r=n,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var a=!1,o=0,s=!1,l=[];r&&l.push(...Object.keys(r).map(De)),i&&l.push(...Object.keys(i).map(De));var u=0,d=-1;const y=e.length;for(var p=0;p<y;p++){var m=e[p];if(s?m==="/"&&e[p-1]==="*"&&(s=!1):a?a===m&&(a=!1):m==="/"&&e[p+1]==="*"?s=!0:m==='"'||m==="'"?a=m:m==="("?o++:m===")"&&o--,!s&&a===!1&&o===0){if(m===":"&&d===-1)d=p;else if(m===";"||p===y-1){if(d!==-1){var f=De(e.substring(u,d).trim());if(!l.includes(f)){m!==";"&&p++;var b=e.substring(u,p).trim();t+=" "+b+";"}}u=p+1,d=-1}}}}return r&&(t+=An(r)),i&&(t+=An(i,!0)),t=t.trim(),t===""?null:t}return e==null?null:String(e)}function zi(e,n,t,r,i,a){var o=e.__className;if(I||o!==t||o===void 0){var s=Hi(t,r,a);(!I||s!==e.getAttribute("class"))&&(s==null?e.removeAttribute("class"):n?e.className=s:e.setAttribute("class",s)),e.__className=t}else if(a&&i!==a)for(var l in a){var u=!!a[l];(i==null||u!==!!i[l])&&e.classList.toggle(l,u)}return a}function Me(e,n={},t,r){for(var i in t){var a=t[i];n[i]!==a&&(t[i]==null?e.style.removeProperty(i):e.style.setProperty(i,a,r))}}function Vi(e,n,t,r){var i=e.__style;if(I||i!==n){var a=Ui(n,r);(!I||a!==e.getAttribute("style"))&&(a==null?e.removeAttribute("style"):e.style.cssText=a),e.__style=n}else r&&(Array.isArray(r)?(Me(e,t==null?void 0:t[0],r[0]),Me(e,t==null?void 0:t[1],r[1],"important")):Me(e,t,r));return r}function He(e,n,t=!1){if(e.multiple){if(n==null)return;if(!Jn(n))return di();for(var r of e.options)r.selected=n.includes(wn(r));return}for(r of e.options){var i=wn(r);if(ci(i,n)){r.selected=!0;return}}(!t||n!==void 0)&&(e.selectedIndex=-1)}function Ji(e){var n=new MutationObserver(()=>{He(e,e.__value)});n.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),pi(()=>{n.disconnect()})}function wn(e){return"__value"in e?e.__value:e.value}const te=Symbol("class"),ie=Symbol("style"),Zn=Symbol("is custom element"),et=Symbol("is html");function Yi(e){if(I){var n=!1,t=()=>{if(!n){if(n=!0,e.hasAttribute("value")){var r=e.value;_e(e,"value",null),e.value=r}if(e.hasAttribute("checked")){var i=e.checked;_e(e,"checked",null),e.checked=i}}};e.__on_r=t,Kn(t),vi()}}function nu(e,n){var t=Xe(e);t.value===(t.value=n??void 0)||e.value===n&&(n!==0||e.nodeName!=="PROGRESS")||(e.value=n??"")}function Wi(e,n){n?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function _e(e,n,t,r){var i=Xe(e);I&&(i[n]=e.getAttribute(n),n==="src"||n==="srcset"||n==="href"&&e.nodeName==="LINK")||i[n]!==(i[n]=t)&&(n==="loading"&&(e[_i]=t),t==null?e.removeAttribute(n):typeof t!="string"&&nt(e).includes(n)?e[n]=t:e.setAttribute(n,t))}function Ki(e,n,t,r,i=!1,a=!1){if(I&&i&&e.tagName==="INPUT"){var o=e,s=o.type==="checkbox"?"defaultChecked":"defaultValue";s in t||Yi(o)}var l=Xe(e),u=l[Zn],d=!l[et];let p=I&&u;p&&se(!1);var m=n||{},f=e.tagName==="OPTION";for(var b in n)b in t||(t[b]=null);t.class?t.class=Gi(t.class):(r||t[te])&&(t.class=null),t[ie]&&(t.style??(t.style=null));var y=nt(e);for(const S in t){let x=t[S];if(f&&S==="value"&&x==null){e.value=e.__value="",m[S]=x;continue}if(S==="class"){var g=e.namespaceURI==="http://www.w3.org/1999/xhtml";zi(e,g,x,r,n==null?void 0:n[te],t[te]),m[S]=x,m[te]=t[te];continue}if(S==="style"){Vi(e,x,n==null?void 0:n[ie],t[ie]),m[S]=x,m[ie]=t[ie];continue}var v=m[S];if(!(x===v&&!(x===void 0&&e.hasAttribute(S)))){m[S]=x;var _=S[0]+S[1];if(_!=="$$")if(_==="on"){const k={},D="$$"+S;let A=S.slice(2);var F=Ei(A);if(Li(A)&&(A=A.slice(0,-7),k.capture=!0),!F&&v){if(x!=null)continue;e.removeEventListener(A,m[D],k),m[D]=null}if(x!=null)if(F)e[`__${A}`]=x,qi([A]);else{let J=function(Y){m[S].call(this,Y)};m[D]=Pi(A,e,J,k)}else F&&(e[`__${A}`]=void 0)}else if(S==="style")_e(e,S,x);else if(S==="autofocus")fi(e,!!x);else if(!u&&(S==="__value"||S==="value"&&x!=null))e.value=e.__value=x;else if(S==="selected"&&f)Wi(e,x);else{var w=S;d||(w=Ii(w));var N=w==="defaultValue"||w==="defaultChecked";if(x==null&&!u&&!N)if(l[S]=null,w==="value"||w==="checked"){let k=e;const D=n===void 0;if(w==="value"){let A=k.defaultValue;k.removeAttribute(w),k.defaultValue=A,k.value=k.__value=D?A:null}else{let A=k.defaultChecked;k.removeAttribute(w),k.defaultChecked=A,k.checked=D?A:!1}}else e.removeAttribute(S);else N||y.includes(w)&&(u||typeof x!="string")?(e[w]=x,w in l&&(l[w]=hi)):typeof x!="function"&&_e(e,w,x)}}}return p&&se(!0),m}function tu(e,n,t=[],r=[],i=[],a,o=!1,s=!1){mi(i,t,r,l=>{var u=void 0,d={},p=e.nodeName==="SELECT",m=!1;if($n(()=>{var b=n(...l.map(le)),y=Ki(e,u,b,a,o,s);m&&p&&"value"in b&&He(e,b.value);for(let v of Object.getOwnPropertySymbols(d))b[v]||ye(d[v]);for(let v of Object.getOwnPropertySymbols(b)){var g=b[v];v.description===gi&&(!u||g!==u[v])&&(d[v]&&ye(d[v]),d[v]=ue(()=>Ri(e,()=>g))),y[v]=g}u=y}),p){var f=e;Qn(()=>{He(f,u.value,!0),Ji(f)})}m=!0})}function Xe(e){return e.__attributes??(e.__attributes={[Zn]:e.nodeName.includes("-"),[et]:e.namespaceURI===bi})}var kn=new Map;function nt(e){var n=e.getAttribute("is")||e.nodeName,t=kn.get(n);if(t)return t;kn.set(n,t=[]);for(var r,i=e,a=Element.prototype;a!==i;){r=xi(i);for(var o in r)r[o].set&&t.push(o);i=yi(i)}return t}function iu(e=!1){const n=Si,t=n.l.u;if(!t)return;let r=()=>Ci(n.s);if(e){let i=0,a={};const o=ji(()=>{let s=!1;const l=n.s;for(const u in l)l[u]!==a[u]&&(a[u]=l[u],s=!0);return s&&i++,i});r=()=>le(o)}t.b.length&&Ai(()=>{Cn(n,r),_n(t.b)}),yn(()=>{const i=wi(()=>t.m.map(ki));return()=>{for(const a of i)typeof a=="function"&&a()}}),t.a.length&&yn(()=>{Cn(n,r),_n(t.a)})}function Cn(e,n){if(e.l.s)for(const t of e.l.s)le(t);n()}const $i="";function Qi(...e){return Di+$i+Mi(e[0],e[1])}Ti();const Xi=`---
title: "Démonstration de la plateforme de blog"
slug: blog-platform-demo
published: true
excerpt: "Découvrez toutes les fonctionnalités de notre plateforme de blog moderne : recherche, navigation, épinglage, et bien plus encore."
author: Alexy VANOT
publishedAt: 2025-07-08
tags:
  - blog
  - sveltekit
  - demo
  - features
  - ux
logo: Svelte
readingTime: 6
color: purple
pinned: true
links:
  - label: SvelteKit
    to: https://kit.svelte.dev/
    newTab: true
  - label: TailwindCSS
    to: https://tailwindcss.com/
    newTab: true
---

# Démonstration de la plateforme de blog

Bienvenue sur notre nouvelle plateforme de blog ! Cet article présente toutes les fonctionnalités et capacités de notre système de publication.

## Fonctionnalités principales

### 1. Système de navigation intelligent

Notre plateforme offre une navigation intuitive avec :
- **Recherche en temps réel** : Trouvez instantanément des articles par titre, contenu, tags ou auteur
- **Tri automatique** : Les articles les plus récents apparaissent en premier
- **Navigation par slug** : URLs propres et SEO-friendly

### 2. Articles épinglés

Les articles importants peuvent être épinglés et apparaissent dans un carrousel en vedette :
- 📌 Badge spécial pour les articles épinglés
- Carrousel interactif avec navigation par flèches
- Mise en avant visuelle avec effets de glow

### 3. Badges et indicateurs

- **Badge "Nouveau"** : Articles publiés dans les 30 derniers jours
- **Tags colorés** : Classification thématique des articles
- **Temps de lecture** : Estimation automatique basée sur le contenu

## Syntaxe Markdown avancée

### Code avec coloration syntaxique

\`\`\`javascript
// Exemple de code JavaScript
function createBlogPost(title, content, tags) {
  return {
    slug: title.toLowerCase().replace(/\\s+/g, '-'),
    title,
    content,
    tags,
    publishedAt: new Date(),
    readingTime: estimateReadingTime(content)
  };
}
\`\`\`

\`\`\`typescript
// Exemple TypeScript avec types
interface BlogPost {
  slug: string;
  title: string;
  content: string;
  author: string;
  publishedAt: Date;
  tags: string[];
  readingTime: number;
  pinned?: boolean;
}
\`\`\`

### Listes et tableaux

#### Technologies utilisées
- **Frontend** : SvelteKit, TypeScript, TailwindCSS
- **Composants** : shadcn/ui adaptés pour Svelte
- **Animation** : CSS transitions et transforms
- **Icons** : Carbon Design System

#### Comparaison des frameworks

| Framework | Performance | Taille bundle | Courbe d'apprentissage |
|-----------|-------------|---------------|------------------------|
| Svelte    | ⭐⭐⭐⭐⭐   | ⭐⭐⭐⭐⭐     | ⭐⭐⭐⭐              |
| React     | ⭐⭐⭐⭐     | ⭐⭐⭐         | ⭐⭐⭐                |
| Vue       | ⭐⭐⭐⭐     | ⭐⭐⭐⭐       | ⭐⭐⭐⭐              |

## Design et UX

### Thème adaptatif
- Support complet du mode sombre/clair
- Couleurs cohérentes avec système de nommage
- Transitions fluides entre les thèmes

### Responsive Design
- Grid adaptatif : 1 colonne sur mobile, 2 sur tablette, 3 sur desktop
- Carrousel optimisé pour tous les écrans
- Navigation tactile friendly

### Micro-interactions
- Hover effects sur les cartes
- Animations de scroll fluides
- Feedback visuel sur les interactions

## Performance et SEO

### Optimisations
- **Lazy loading** : Chargement différé des images
- **Meta tags** : SEO optimisé pour chaque article
- **Structured data** : Markup sémantique pour les moteurs de recherche
- **URL friendly** : Slugs propres et descriptifs

### Mesures de performance
- Temps de chargement < 1s
- Score Lighthouse > 95
- Bundle size optimisé
- Tree shaking automatique

## Fonctionnalités avancées

### Partage social
- Bouton de partage natif
- Copie d'URL en fallback
- Meta tags Open Graph

### Estimation de lecture
- Calcul automatique basé sur 200 mots/minute
- Affichage sur les cartes et dans les articles
- Prise en compte du contenu markdown

### Système de couleurs
- Palette cohérente avec noms sémantiques
- Support des couleurs hexadécimales et nommées
- Adaptation automatique aux thèmes

## Conclusion

Cette plateforme de blog démontre comment créer une expérience utilisateur moderne et performante avec SvelteKit. Toutes les fonctionnalités sont pensées pour offrir une navigation fluide et une lecture agréable.

N'hésitez pas à explorer les autres articles pour découvrir plus de contenu technique !

---

*Cet article fait partie de la démonstration de notre plateforme. Il illustre les capacités de rendu Markdown et les fonctionnalités de navigation.*
`,Zi=`---
title: "Petit Georges vs Gros Georges 🐾"
slug: georges-le-chat
published: true
excerpt: "Georges, le chat de Nico, oscille entre moine zen et chaos incarné. Petit Georges ou Gros Georges, choisis ton camp."
author: Anonymous
publishedAt: 2025-07-15
updatedAt: 2025-07-15
tags:
  - humour
  - chat
  - wtf
  - georges
  - grosgeorges
  - petitgeorges
logo: Unknown
coverImage: Unknown
readingTime: 3
color: lightpink
pinned: true
links:
  - label: Mon site personnel
    to: https://www.alexyvanot.com
    newTab: true
---

# 🐾 **Georges, le Chat de Nico**  
> *"Personne ne sait vraiment ce qu'il veut. Même pas lui."*  

---

## 📸 Présentation rapide
**Nom** : Georges  
**Surnoms** :  
- Petit Georges 💤  
- Gros Georges 💥  
- Le Sphinx du Salon  
- Le Furoncle de l'Ombre  

**Race** : Probablement un chat. Mais on n'a pas encore eu l'analyse ADN.  
**Particularité** : Alterne entre philosophe bouddhiste et possédé par un démon de la 8e dimension.  

---

## ⚖️ Double personnalité

### 🧘 Petit Georges
- Contemple les murs pendant 45 minutes.
- S'endort dans l'évier.
- Se laisse caresser comme si t'étais un nuage.
- Parfois il pousse juste un long "hmmmmm" et s'évanouit.

> "_Petit Georges il a vu des trucs, mais il juge pas._"

---

### 🔥 Gros Georges
- Course-poursuite avec un sac plastique imaginaire.
- Grimpe aux rideaux comme si c'était l'ascension du K2.
- Fixe un coin de mur et gronde.
- A déjà essayé de mordre une multiprise (deux fois).

> "_Gros Georges, c'est quand ton chat entre en mode **Berserker** sans patch notes._"

---

## 🧠 Une journée type

| Heure      | Comportement           |
|------------|------------------------|
| 07:00      | Petit Georges ronronne dans le frigo (???) |
| 10:00      | Gros Georges attaque une éponge |
| 14:00      | Petit Georges médite dans la litière |
| 18:00      | Gros Georges essaie de manger l'ombre d'un pigeon |
| 22:00      | ??? il n'est plus là, il est devenu conceptuel |

---

## 🥇 Le DÉBAT : Tu préfères qui ?

> "_Tu préfères **Petit Georges** ou **Gros Georges** ?_"

Les réponses possibles :
- **Petit Georges** → "j'ai besoin de paix intérieure"
- **Gros Georges** → "j'ai besoin que la maison explose"
- **Un mix des deux** → t'es un instable toi aussi

> On a une règle : si tu dis "Gros Georges sans hésiter", tu dois dormir une nuit chez lui. Avec les portes ouvertes. Bonne chance.

---

## 🐾 Citations célèbres

- "_Il est monté sur la table, m'a regardé dans les yeux et a renversé mon bol. Sans raison._" – Nico  
- "_Il a miaulé dans mon verre d'eau. Et ensuite il l'a bu._" – Jules  
- "_J'ai vu Petit Georges se faire peur avec son propre pet._" – Léa

---

## 📷 Galerie d'horreurs (et de douceurs)

🖼️ *(Insérez ici des photos floues de Georges qui traverse à toute vitesse ou qui médite face au grille-pain)*

---

## ⚠️ Attention
Ne jamais :
- Le fixer dans les yeux entre 16h03 et 16h06.
- Lui dire "t'es mignon" quand il est en Gros Georges.
- T'approcher de lui quand il est en train de miauler vers la prise murale.

---

## 🎉 En conclusion

Georges c'est pas un chat. C'est une **expérience métaphysique** en poils.  
Tu peux le trouver adorable ou terrifiant. Mais tu **ne peux pas l'ignorer**.

> "_Il ne miaule pas. Il **prononce ton nom**._"
`,er=`---
title: "Commencer avec Svelte : Un guide pour débutants"
slug: getting-started-with-svelte
published: true
excerpt: "Découvrez les bases de Svelte, le framework JavaScript révolutionnaire qui compile vos composants."
author: Alexy VANOT
publishedAt: 2024-01-15
updatedAt: 2024-01-20
tags:
  - svelte
  - javascript
  - frontend
  - tutorial
logo: Svelte
coverImage: Svelte
readingTime: 8
color: orange
pinned: true
links:
  - label: Site officiel Svelte
    to: https://svelte.dev/
    newTab: true
  - label: Tutoriel officiel
    to: https://svelte.dev/tutorial
    newTab: true
---

# Commencer avec Svelte

Svelte est un framework JavaScript moderne qui révolutionne la façon dont nous construisons des interfaces utilisateur. Contrairement à d'autres frameworks comme React ou Vue, Svelte compile vos composants en JavaScript vanilla hautement optimisé au moment de la construction.

## Pourquoi choisir Svelte ?

### Performance exceptionnelle
Svelte génère du code optimisé sans framework runtime, ce qui se traduit par des applications plus rapides et plus légères.

### Syntaxe intuitive
La syntaxe de Svelte est proche du HTML, CSS et JavaScript natifs, ce qui rend l'apprentissage plus facile.

### Moins de boilerplate
Svelte réduit considérablement la quantité de code nécessaire par rapport aux autres frameworks.

## Installation

Pour commencer un nouveau projet Svelte :

\`\`\`bash
npm create svelte@latest mon-projet
cd mon-projet
npm install
npm run dev
\`\`\`

## Premier composant

Voici un exemple de composant Svelte simple :

\`\`\`svelte
<script>
  let count = 0;
  
  function increment() {
    count += 1;
  }
<\/script>

<button on:click={increment}>
  Cliqué {count} {count === 1 ? 'fois' : 'fois'}
</button>

<style>
  button {
    background: #ff3e00;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
  }
</style>
\`\`\`

## Réactivité

La réactivité de Svelte est basée sur les assignations. Quand vous assignez une nouvelle valeur à une variable, Svelte met automatiquement à jour l'interface utilisateur.

\`\`\`svelte
<script>
  let firstname = 'John';
  let lastname = 'Doe';
  
  // Cette déclaration réactive se met à jour automatiquement
  $: fullname = \`\${firstname} \${lastname}\`;
<\/script>

<p>Nom complet : {fullname}</p>
\`\`\`

## Conclusion

Svelte offre une approche rafraîchissante au développement frontend. Sa simplicité, ses performances et sa courbe d'apprentissage douce en font un excellent choix pour les nouveaux projets.

Dans les prochains articles, nous explorerons SvelteKit, les stores, et les patterns avancés de Svelte.
`,nr=`---
title: "Mini Article"
slug: mini-article
published: true
excerpt: "La technologie évolue rapidement, transformant notre quotidien. Rester curieux et apprendre en continu permet de s'adapter à ce monde en mouvement."
author: Alexy VANOT
publishedAt: 2023-10-01
updatedAt: 2023-10-02
tags:
  - technology
  - curiosity
  - learning
  - innovation
logo: Unknown
coverImage: Unknown
readingTime: 2
color: lightgray
links:
  - label: Mon site personnel
    to: https://www.alexyvanot.com
    newTab: true
---

La technologie évolue rapidement, transformant notre quotidien. Rester curieux et apprendre en continu permet de s'adapter à ce monde en mouvement.
`,tr=`---
title: "Techniques CSS modernes : Grid, Flexbox et plus"
slug: modern-css-techniques
published: true
excerpt: "Maîtrisez les techniques CSS modernes pour créer des layouts flexibles et responsives."
author: Alexy VANOT
publishedAt: 2024-03-05
tags:
  - css
  - frontend
  - layout
  - responsive
logo: CSS
readingTime: 15
color: blue
links:
  - label: MDN CSS Documentation
    to: https://developer.mozilla.org/en-US/docs/Web/CSS
    newTab: true
  - label: CSS-Tricks
    to: https://css-tricks.com/
    newTab: true
---

# Techniques CSS modernes : Grid, Flexbox et plus

Le CSS moderne offre des outils puissants pour créer des layouts sophistiqués. Explorons les techniques essentielles.

## CSS Grid : Le layout 2D

Grid est parfait pour les layouts complexes en 2 dimensions :

\`\`\`css
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  padding: 1rem;
}

/* Layout avec zones nommées */
.layout {
  display: grid;
  grid-template-areas: 
    "header header header"
    "sidebar main aside"
    "footer footer footer";
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.aside { grid-area: aside; }
.footer { grid-area: footer; }
\`\`\`

## Flexbox : L'alignement parfait

Flexbox excelle pour l'alignement et la distribution d'espace :

\`\`\`css
.flex-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

/* Navigation responsive */
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.nav-links {
  display: flex;
  gap: 2rem;
  list-style: none;
}
\`\`\`

## Variables CSS (Custom Properties)

Les variables CSS apportent la dynamique :

\`\`\`css
:root {
  --primary-color: #3b82f6;
  --secondary-color: #8b5cf6;
  --spacing-unit: 0.5rem;
  --border-radius: 0.375rem;
}

.button {
  background: var(--primary-color);
  padding: calc(var(--spacing-unit) * 2) calc(var(--spacing-unit) * 4);
  border-radius: var(--border-radius);
  border: none;
  color: white;
  cursor: pointer;
  transition: background 0.2s ease;
}

.button:hover {
  background: color-mix(in srgb, var(--primary-color) 80%, black);
}
\`\`\`

## Container Queries

Les container queries révolutionnent le responsive design :

\`\`\`css
.card-container {
  container-type: inline-size;
  container-name: card;
}

@container card (min-width: 400px) {
  .card {
    display: flex;
    flex-direction: row;
  }
  
  .card-image {
    width: 40%;
  }
  
  .card-content {
    width: 60%;
  }
}
\`\`\`

## Nouveaux sélecteurs

Exploitez les sélecteurs modernes :

\`\`\`css
/* :has() - Le parent selector */
.card:has(.card-image) {
  border: 2px solid var(--primary-color);
}

/* :where() et :is() */
:where(h1, h2, h3, h4, h5, h6) {
  margin-block: 1em 0.5em;
  line-height: 1.2;
}

/* Logical properties */
.content {
  margin-inline: auto;
  padding-block: 2rem;
  max-inline-size: 65ch;
}
\`\`\`

## Animations modernes

Créez des animations performantes :

\`\`\`css
@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-in {
  animation: slideIn 0.3s ease-out;
}

/* Préférence utilisateur */
@media (prefers-reduced-motion: reduce) {
  .animate-in {
    animation: none;
  }
}
\`\`\`

## Conclusion

Ces techniques CSS modernes vous permettent de créer des interfaces plus robustes, accessibles et maintenables. L'avenir du CSS est déjà là !
`,ir=`---
title: "SvelteKit : Le framework full-stack pour Svelte"
slug: sveltekit-full-stack-framework
published: true
excerpt: "Découvrez SvelteKit, le framework full-stack officiel qui révolutionne le développement web avec Svelte."
author: Alexy VANOT
publishedAt: 2025-07-06
tags:
  - sveltekit
  - svelte
  - full-stack
  - ssr
  - framework
logo: Svelte
readingTime: 18
color: orange
pinned: true
links:
  - label: Site officiel SvelteKit
    to: https://kit.svelte.dev/
    newTab: true
  - label: Documentation SvelteKit
    to: https://kit.svelte.dev/docs
    newTab: true
---

# SvelteKit : Le framework full-stack pour Svelte

SvelteKit est le framework officiel pour construire des applications web avec Svelte. Il offre tout ce dont vous avez besoin pour créer des applications rapides et modernes.

## Qu'est-ce que SvelteKit ?

SvelteKit est un framework full-stack qui s'appuie sur Svelte pour fournir :

- **Routage basé sur le système de fichiers** : Organisation intuitive de vos pages
- **Rendu côté serveur (SSR)** : Performances et SEO optimisés
- **Génération de sites statiques (SSG)** : Sites ultra-rapides
- **API routes** : Backend intégré pour vos endpoints
- **Optimisations automatiques** : Code splitting, préchargement, etc.

## Architecture basée sur les fichiers

SvelteKit utilise une approche de routage basée sur les fichiers :

\`\`\`
src/routes/
├── +layout.svelte          # Layout principal
├── +layout.ts             # Code de layout
├── +page.svelte           # Page d'accueil
├── about/
│   └── +page.svelte       # Page /about
├── blog/
│   ├── +page.svelte       # Page /blog
│   └── [slug]/
│       ├── +page.svelte   # Page /blog/[slug]
│       └── +page.ts       # Données pour /blog/[slug]
└── api/
    └── posts/
        └── +server.ts     # API endpoint /api/posts
\`\`\`

## Chargement de données

SvelteKit offre plusieurs façons de charger des données :

### Load functions

\`\`\`typescript
// +page.ts
export async function load({ params, fetch }) {
  const response = await fetch(\`/api/posts/\${params.slug}\`);
  const post = await response.json();
  
  return {
    post
  };
}
\`\`\`

### Server-side load

\`\`\`typescript
// +page.server.ts
import { db } from '$lib/database';

export async function load({ params }) {
  const post = await db.getPost(params.slug);
  
  return {
    post
  };
}
\`\`\`

## Rendu adaptatif

SvelteKit peut s'adapter à différents environnements :

\`\`\`typescript
// svelte.config.js
import adapter from '@sveltejs/adapter-auto';

export default {
  kit: {
    adapter: adapter()
  }
};
\`\`\`

Adaptateurs disponibles :
- \`@sveltejs/adapter-auto\` : Détection automatique
- \`@sveltejs/adapter-node\` : Serveur Node.js
- \`@sveltejs/adapter-static\` : Sites statiques
- \`@sveltejs/adapter-vercel\` : Déploiement Vercel
- \`@sveltejs/adapter-netlify\` : Déploiement Netlify

## API Routes

Créez facilement des endpoints API :

\`\`\`typescript
// src/routes/api/posts/+server.ts
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ url }) => {
  const limit = Number(url.searchParams.get('limit') ?? '10');
  
  const posts = await getPosts(limit);
  
  return json(posts);
};

export const POST: RequestHandler = async ({ request }) => {
  const data = await request.json();
  const post = await createPost(data);
  
  return json(post, { status: 201 });
};
\`\`\`

## Formulaires avancés

SvelteKit simplifie la gestion des formulaires :

\`\`\`svelte
<!-- +page.svelte -->
<script>
  import { enhance } from '$app/forms';
  
  let { form } = $props();
<\/script>

<form method="POST" use:enhance>
  <input name="title" required />
  <textarea name="content" required></textarea>
  <button type="submit">Publier</button>
</form>

{#if form?.success}
  <p>Article publié avec succès !</p>
{/if}
\`\`\`

\`\`\`typescript
// +page.server.ts
import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const title = data.get('title') as string;
    const content = data.get('content') as string;
    
    if (!title || !content) {
      return fail(400, { error: 'Titre et contenu requis' });
    }
    
    await createPost({ title, content });
    
    return { success: true };
  }
};
\`\`\`

## Performance et optimisations

SvelteKit inclut de nombreuses optimisations automatiques :

### Préchargement intelligent

\`\`\`svelte
<a href="/blog/article-important" data-sveltekit-preload-data="hover">
  Article important
</a>
\`\`\`

### Code splitting automatique

\`\`\`javascript
// Import dynamique automatique par route
const Component = () => import('./Component.svelte');
\`\`\`

### Service Worker

\`\`\`typescript
// src/service-worker.ts
import { build, files, version } from '$service-worker';

const CACHE = \`cache-\${version}\`;
const ASSETS = [...build, ...files];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE)
      .then(cache => cache.addAll(ASSETS))
  );
});
\`\`\`

## Déploiement

SvelteKit facilite le déploiement sur différentes plateformes :

### Vercel
\`\`\`bash
npm i -D @sveltejs/adapter-vercel
\`\`\`

### Netlify
\`\`\`bash
npm i -D @sveltejs/adapter-netlify
\`\`\`

### Site statique
\`\`\`bash
npm i -D @sveltejs/adapter-static
npm run build
\`\`\`

## Conclusion

SvelteKit offre une expérience de développement exceptionnelle en combinant la simplicité de Svelte avec les fonctionnalités d'un framework full-stack moderne. Que vous construisiez une SPA, un site statique ou une application web complète, SvelteKit s'adapte à vos besoins.

Commencez dès aujourd'hui avec :

\`\`\`bash
npm create svelte@latest my-app
cd my-app
npm install
npm run dev
\`\`\`
`,rr=`---
title: "Meilleures pratiques TypeScript en 2024"
slug: typescript-best-practices
published: true
excerpt: "Explorez les meilleures pratiques et patterns pour écrire du TypeScript maintenable et performant."
author: Alexy VANOT
publishedAt: 2024-02-10
tags:
  - typescript
  - javascript
  - best-practices
  - development
logo: TypeScript
readingTime: 12
color: steelblue
links:
  - label: Site officiel TypeScript
    to: https://www.typescriptlang.org/
    newTab: true
  - label: Documentation TypeScript
    to: https://www.typescriptlang.org/docs/
    newTab: true
---

# Meilleures pratiques TypeScript en 2024

TypeScript est devenu indispensable dans l'écosystème JavaScript moderne. Voici les meilleures pratiques pour tirer parti de sa puissance.

## Configuration strict

Utilisez toujours une configuration stricte dans votre \`tsconfig.json\` :

\`\`\`json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true,
    "noImplicitReturns": true,
    "noImplicitThis": true
  }
}
\`\`\`

## Types utilitaires

Maîtrisez les types utilitaires intégrés :

\`\`\`typescript
// Pick et Omit
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

type PublicUser = Omit<User, 'password'>;
type UserIdentity = Pick<User, 'id' | 'name'>;

// Partial et Required
type PartialUser = Partial<User>; // Toutes les propriétés optionnelles
type RequiredUser = Required<User>; // Toutes les propriétés obligatoires
\`\`\`

## Génériques contraints

Utilisez les contraintes de génériques pour plus de sécurité :

\`\`\`typescript
interface HasId {
  id: number;
}

function updateEntity<T extends HasId>(entity: T, updates: Partial<T>): T {
  return { ...entity, ...updates };
}
\`\`\`

## Union discriminée

Les unions discriminées améliorent la sécurité des types :

\`\`\`typescript
interface LoadingState {
  status: 'loading';
}

interface SuccessState {
  status: 'success';
  data: any;
}

interface ErrorState {
  status: 'error';
  error: string;
}

type AsyncState = LoadingState | SuccessState | ErrorState;

function handleState(state: AsyncState) {
  switch (state.status) {
    case 'loading':
      // TypeScript sait que c'est LoadingState
      break;
    case 'success':
      // TypeScript sait que data existe
      console.log(state.data);
      break;
    case 'error':
      // TypeScript sait que error existe
      console.error(state.error);
      break;
  }
}
\`\`\`

## Types avancés

Explorez les types avancés pour des APIs plus expressives :

\`\`\`typescript
// Mapped types
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

// Conditional types
type NonNullable<T> = T extends null | undefined ? never : T;

// Template literal types
type EventName<T extends string> = \`on\${Capitalize<T>}\`;
type ClickEvent = EventName<'click'>; // 'onClick'
\`\`\`

## Conclusion

TypeScript offre des outils puissants pour améliorer la qualité et la maintenabilité de votre code. Ces pratiques vous aideront à exploiter pleinement son potentiel.
`,or=`---
name: Comet Learning - Formation Minecraft
slug: comet-learning
category: humain
type: Formation & Éducation
color: "#62B47A"
published: true
logo: https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg
period:
  from: 2023-01-01
  to: 2023-06-01
skills:
  - java
  - skript
  - papermc
team:
  - name: Brimal MARTIN
    role: Co-formateur
  - name: Alexy VANOT
    role: Co-formateur
---

# Comet Learning - Formation Minecraft

**Comet Learning** est un projet de formation tout public que j'ai co-animé avec **Brimal MARTIN**. L'objectif ? Apprendre à créer son propre serveur Minecraft et découvrir les bases du développement de plugins !

# 🎯 Concept du projet

Minecraft est bien plus qu'un jeu : c'est une plateforme d'apprentissage incroyable. Nous avons exploité cet engouement pour initier les participants aux concepts de :
- Administration de serveurs
- Développement et programmation
- Travail collaboratif

# 📚 Programme de formation

## Module 1 : Création d'un serveur Minecraft

- 🖥️ **Installation de Java** et configuration de l'environnement
- 📦 **Installation de PaperMC** - Un serveur Minecraft performant et extensible
- ⚙️ **Configuration du serveur** - Paramètres, permissions, whitelist
- 🌐 **Mise en réseau** - Comment rendre son serveur accessible aux amis
- 🔧 **Administration** - Gestion des joueurs, commandes de base

## Module 2 : Introduction au développement avec Skript

- ✨ **Découverte de Skript** - Un langage simple pour créer des fonctionnalités
- 📝 **Premiers scripts** - Commandes personnalisées, messages automatiques
- 🎮 **Mini-jeux basiques** - Création de petits systèmes ludiques
- 🔄 **Événements et déclencheurs** - Réagir aux actions des joueurs

## Module 3 : Aller plus loin

- 🧩 **Installation de plugins** - Découverte de l'écosystème
- 🎨 **Personnalisation** - Créer une identité unique pour son serveur
- 👥 **Gestion de communauté** - Modération, règles, animation

# 🎓 Approche pédagogique

Notre méthode était basée sur :

| Principe | Application |
|----------|-------------|
| **Learning by doing** | Chaque participant créait son propre serveur |
| **Accompagnement personnalisé** | Aide individuelle selon le niveau |
| **Progression douce** | Du plus simple au plus complexe |
| **Fun first** | L'apprentissage par le jeu avant tout |

# 👥 Public ciblé

- 🧒 **Débutants complets** - Aucune connaissance requise
- 🎮 **Joueurs Minecraft** - Qui veulent comprendre l'envers du décor
- 💻 **Curieux de la programmation** - Première approche du code
- 👨‍👩‍👧‍👦 **Tout âge** - De 10 à 77 ans !

# 💫 Résultats

| Métrique | Valeur |
|----------|--------|
| **Participants formés** | 20+ personnes |
| **Serveurs créés** | Chaque participant est reparti avec le sien |
| **Scripts développés** | Dizaines de mini-projets |
| **Sourires générés** | Incalculable 😄 |

# 🤝 L'équipe

- **Brimal MARTIN** - Co-formateur, expert Minecraft et administration serveur
- **Alexy VANOT** - Co-formateur, développement et pédagogie

# 💡 Pourquoi Minecraft pour apprendre ?

Minecraft offre un contexte idéal pour l'apprentissage :

- **Motivation intrinsèque** - Les participants sont déjà fans du jeu
- **Résultats visibles** - Le code produit des effets immédiats dans le jeu
- **Environnement ludique** - L'erreur n'est pas grave, on peut toujours recommencer
- **Créativité** - Pas de limite à ce qu'on peut imaginer

# 🔮 Ce que j'ai appris

Ce projet m'a confirmé ma passion pour la transmission de connaissances :

- **Vulgarisation** - Rendre des concepts techniques accessibles
- **Patience** - Chaque apprenant avance à son rythme
- **Adaptabilité** - Ajuster le contenu en temps réel
- **Satisfaction** - Voir quelqu'un réussir son premier script, ça n'a pas de prix !

> *"Le meilleur moyen d'apprendre, c'est d'enseigner."*
`,ar=`---
name: Flutter Movie App
slug: flutter-movie-manip
category: technique
type: Mobile Development
color: "#02569B"
published: true
logo: https://raw.githubusercontent.com/alexyvanot/flutter_movie_manip/main/assets/images/HomePage.png
links:
  - label: GitHub
    url: https://github.com/alexyvanot/flutter_movie_manip
skills:
  - flutter
  - dart
attachments:
  - label: Page d'accueil
    src: https://raw.githubusercontent.com/alexyvanot/flutter_movie_manip/main/assets/images/HomePage.png
  - label: Détail d'un film
    src: https://raw.githubusercontent.com/alexyvanot/flutter_movie_manip/main/assets/images/MovieDetail.png
---

# Flutter Movie App

Bienvenue dans le projet **Flutter Movie Manip** ! Ce projet a pour but d'explorer les concepts clés de Flutter tout en construisant une application qui récupère les films à venir à partir de l'API [The Movie Database (TMDb)](https://www.themoviedb.org/).

![Page d'accueil|clean](https://raw.githubusercontent.com/alexyvanot/flutter_movie_manip/main/assets/images/HomePage.png)

# Objectifs pédagogiques

Ce projet a été conçu dans le cadre d'un cours de Flutter afin de pratiquer et comprendre les notions suivantes :

1. **Stateless vs Stateful Widgets** : comprendre la différence entre des widgets statiques et ceux dont l'état peut changer
2. **Appels HTTP dans Flutter** : apprendre à faire des requêtes à une API externe
3. **Gestion de l'état** : manipulation de l'état dans une application Flutter via \`setState\`
4. **Affichage dynamique avec \`ListView.builder\`** : utilisation de ce widget pour générer des listes dynamiques basées sur des données reçues d'une API
5. **Utilisation d'environnements avec \`flutter_dotenv\`** : apprendre à gérer des informations sensibles comme les clés d'API

# Structure du projet

\`\`\`
lib/
├── main.dart          # Point d'entrée, initialisation de dotenv
├── home_page.dart     # Page principale avec liste des films (StatefulWidget)
├── http_helper.dart   # Classe utilitaire pour les appels HTTP à TMDb
└── model/
    └── movie.dart     # Modèle de données pour représenter un film
\`\`\`

# Concepts clés

## 1. Stateful Widgets et \`setState()\`

Dans Flutter, un widget peut être **Stateful** ou **Stateless**. Ce projet utilise un \`StatefulWidget\` dans \`home_page.dart\` pour maintenir la liste des films à jour. Chaque fois que les données des films sont récupérées, la méthode \`setState()\` est appelée pour mettre à jour l'interface utilisateur.

## 2. Appels HTTP et gestion des données

Pour communiquer avec une API externe, nous utilisons le package [http](https://pub.dev/packages/http). L'appel HTTP se fait dans \`http_helper.dart\`, où nous envoyons une requête GET pour obtenir les films à venir. La réponse JSON est décodée puis transformée en objets Dart avec \`Movie.fromJson()\`.

## 3. Gestion des environnements avec \`flutter_dotenv\`

Afin de sécuriser la clé API, le package \`flutter_dotenv\` est utilisé pour charger les variables d'environnement. Cela permet de garder les informations sensibles hors du code source.

## 4. Affichage dynamique avec \`ListView.builder\`

Le widget \`ListView.builder\` est utilisé pour afficher une liste de films récupérés de manière dynamique. Ce widget est efficace pour les listes longues.

# Installation

\`\`\`bash
# Cloner le projet
git clone https://github.com/alexyvanot/flutter_movie_manip.git
cd flutter_movie_manip

# Installer les dépendances
flutter pub get

# Configurer l'API (créer un fichier .env)
echo "API_KEY=your_api_key_here" > .env

# Lancer l'application
flutter run
\`\`\`

# Configuration de l'API

1. Inscrivez-vous sur [The Movie Database (TMDb)](https://www.themoviedb.org/)
2. Rendez-vous dans la section API de votre compte pour générer votre clé API
3. Créez un fichier \`.env\` dans le répertoire racine avec votre clé :

\`\`\`env
API_KEY=your_api_key_here
\`\`\`

# Aperçu de l'application

L'application affiche une liste des films à venir avec leurs affiches et informations. En cliquant sur un film, l'utilisateur accède à une page de détails avec plus d'informations.

![Détail d'un film|clean](https://raw.githubusercontent.com/alexyvanot/flutter_movie_manip/main/assets/images/MovieDetail.png)
`,sr=`---
name: Flutter Todo List
slug: flutter-todo-list
category: technique
type: Mobile Development
color: "#02569B"
published: true
logo: https://raw.githubusercontent.com/alexyvanot/flutter_todo_list/main/assets/images/README/appshow.png
links:
  - label: GitHub
    url: https://github.com/alexyvanot/flutter_todo_list
skills:
  - flutter
  - dart
attachments:
  - label: Aperçu de l'application
    src: https://raw.githubusercontent.com/alexyvanot/flutter_todo_list/main/assets/images/README/appshow.png
---

# Flutter Todo List

**Flutter Todo List** est une application simple de gestion de tâches écrite en Dart. L'utilisateur peut ajouter des tâches, marquer des tâches comme terminées, et les supprimer.

![Aperçu de l'application|clean](https://raw.githubusercontent.com/alexyvanot/flutter_todo_list/main/assets/images/README/appshow.png)

L'application utilise [shared-preferences](https://pub.dev/packages/shared_preferences) pour sauvegarder les tâches localement et [Provider](https://pub.dev/packages/provider) pour la gestion de l'état global, permettant ainsi de conserver les données et d'actualiser l'interface de manière réactive.

# Fonctionnalités

- ➕ **Ajout de nouvelles tâches**
- ✅ **Marquer les tâches comme terminées**
- 🗑️ **Suppression des tâches** avec confirmation
- 🔄 **Gestion de l'état global** avec \`Provider\`
- 💾 **Sauvegarde locale** avec \`SharedPreferences\`
- 🎨 **Interface utilisateur réactive** avec le style Cupertino
- 🔍 **Filtrage des tâches** par état (toutes, complètes, incomplètes)

# Architecture et concepts

## Gestion de l'état avec Provider

L'application utilise le pattern **Provider** pour gérer l'état global de la liste de tâches. Cela permet :
- Une séparation claire entre la logique métier et l'interface utilisateur
- Une mise à jour réactive de l'UI lors des changements d'état
- Un partage facile des données entre les widgets

## Persistance avec SharedPreferences

Les tâches sont automatiquement sauvegardées localement grâce à \`SharedPreferences\`. Les modifications sont enregistrées et persistées, ce qui signifie que vos tâches resteront disponibles même après la fermeture de l'application.

# Utilisation

## Ajouter une tâche
Entrez le titre de la tâche dans le champ de texte et appuyez sur le bouton **Ajouter**. La tâche sera ajoutée à la liste.

## Cocher et décocher une tâche
Appuyez sur l'interrupteur à côté de chaque tâche pour la marquer comme terminée. Cela barrera le texte de la tâche. Appuyez à nouveau pour la décocher.

## Supprimer une tâche
Glissez la tâche de droite à gauche. Une boîte de dialogue de confirmation apparaîtra pour vérifier si vous souhaitez bien supprimer la tâche.

# Installation

\`\`\`bash
# Cloner le dépôt
git clone https://github.com/alexyvanot/flutter_todo_list.git

# Naviguer dans le répertoire
cd flutter_todo_list

# Installer les dépendances
flutter pub get

# Lancer l'application
flutter run
\`\`\`

# Technologies utilisées

| Technologie | Utilisation |
|-------------|-------------|
| **Flutter** | Framework UI cross-platform |
| **Dart** | Langage de programmation |
| **Provider** | Gestion de l'état global |
| **SharedPreferences** | Persistance locale des données |
| **Cupertino Widgets** | Style iOS natif |
`,lr=`---
name: Foot AI
slug: foot-ai
category: technique
type: Computer Vision & Machine Learning
color: "#4CAF50"
published: true
logo: https://raw.githubusercontent.com/alexyvanot/foot-ai/main/tactical%20map.jpg
links:
  - label: GitHub
    url: https://github.com/alexyvanot/foot-ai
skills:
  - python
  - opencv
  - mediapipe
  - streamlit
  - jupyter
attachments:
  - label: Démo de l'application
    src: https://raw.githubusercontent.com/alexyvanot/foot-ai/main/images/demo.gif
  - label: Diagramme de workflow
    src: https://raw.githubusercontent.com/alexyvanot/foot-ai/main/workflow%20diagram.png
  - label: Carte tactique
    src: https://raw.githubusercontent.com/alexyvanot/foot-ai/main/tactical%20map.jpg
  - label: Match exemple 1
    src: https://raw.githubusercontent.com/alexyvanot/foot-ai/main/images/match.png
  - label: Match exemple 2
    src: https://raw.githubusercontent.com/alexyvanot/foot-ai/main/images/match2.png
  - label: Match exemple 3
    src: https://raw.githubusercontent.com/alexyvanot/foot-ai/main/images/match3.png
---

![Démo|clean](https://raw.githubusercontent.com/alexyvanot/foot-ai/main/images/demo.gif)

# Introduction

Ce projet a été réalisé dans le cadre de mes études en **Computer Vision**. Foot AI est un projet Python qui utilise la vision par ordinateur et le machine learning pour analyser des vidéos de football et générer des cartes tactiques avec les positions des joueurs.

Le système exploite **OpenCV** pour le traitement vidéo, **MediaPipe** pour l'estimation de pose, et **Streamlit** pour créer une application web interactive.

![Workflow du projet|clean](https://raw.githubusercontent.com/alexyvanot/foot-ai/main/workflow%20diagram.png)

# Fonctionnalités

- ⚽️ **Upload et traitement de vidéos** de football
- 🕵️‍♂️ **Détection des positions des joueurs** avec MediaPipe
- 🗺️ **Génération de cartes tactiques** avec les positions des joueurs
- 🌐 **Interface web interactive** avec Streamlit
- 📊 **Notebook Jupyter** pour l'analyse de données et la visualisation

# Comment ça fonctionne

1. L'utilisateur upload une vidéo de football via l'interface Streamlit
2. Le système traite la vidéo frame par frame avec OpenCV
3. MediaPipe détecte les poses et positions des joueurs
4. Une carte tactique est générée avec les positions mappées sur un terrain
5. Les résultats sont affichés dans l'interface web

# Technologies utilisées

| Technologie | Utilisation |
|-------------|-------------|
| **Python** | Langage principal |
| **OpenCV** | Traitement d'images et vidéos |
| **MediaPipe** | Détection de pose et tracking |
| **Streamlit** | Interface web interactive |
| **Jupyter Notebook** | Analyse et visualisation des données |
| **YAML** | Configuration des datasets |

# Installation

\`\`\`bash
git clone https://github.com/alexyvanot/foot-ai.git && cd foot-ai
python -m venv .venv
source .venv/bin/activate  # Sur Windows: .venv\\Scripts\\activate
pip install -r requirements.txt
\`\`\`

# Utilisation

## Application Streamlit

\`\`\`bash
streamlit run src/main.py
\`\`\`

## Notebook Jupyter

\`\`\`bash
jupyter notebook FootAI.ipynb
\`\`\`

# Résultats

L'application permet de transformer une vidéo de match de football en une visualisation tactique, facilitant l'analyse des positions et mouvements des joueurs sur le terrain.

![Démo|clean](https://raw.githubusercontent.com/alexyvanot/foot-ai/main/images/demo.gif)
`,ur=`---
name: HR Data Analytics
slug: hr-data-analytics
category: technique
type: Data Science & Machine Learning
color: "#E91E63"
published: true
logo: https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg
links:
  - label: GitHub
    url: https://github.com/alexyvanot/hr-data-analytics
  - label: Notebook
    url: https://github.com/alexyvanot/hr-data-analytics/blob/main/ProjetFinal_DataCrafting_Mining.ipynb
skills:
  - python
  - pandas
  - numpy
  - matplotlib
  - scikitlearn
  - jupyter
---

# 📊 HR Data Analytics – Prédiction du Type de Contrat

Projet de **Machine Learning** réalisé dans le cadre du module académique **DataCrafting & Data Mining**.

Ce projet se concentre sur l'analyse d'un dataset RH synthétique afin de :

- 🧹 Nettoyer et prétraiter les informations des employés
- 🔍 Détecter les anomalies et valeurs manquantes
- 🤖 Construire un modèle prédictif pour déterminer le type de contrat (Stage, Alternance, CDD, CDI)

# Pipeline de traitement des données

## 1. Nettoyage des données

- Suppression des doublons
- Correction des âges incohérents et salaires anormaux
- Gestion des valeurs manquantes (imputation ou suppression)
- Standardisation des champs catégoriels (genre, éducation, type de contrat...)

## 2. Feature Engineering

- Encodage des variables catégorielles
- Normalisation des features numériques
- Création d'une nouvelle feature : \`Ancienneté\` (seniority de l'employé)

## 3. Machine Learning

- Classification supervisée avec \`RandomForestClassifier\`
- Optimisation des hyperparamètres avec \`GridSearchCV\`
- Évaluation via rapport de classification et matrice de confusion

# Résultats du modèle

Le modèle montre une capacité partielle à distinguer les contrats CDI et CDD, mais a des difficultés à différencier les stages et alternances en raison de l'absence d'indicateurs RH spécifiques.

| Métrique | Valeur |
|----------|--------|
| **Précision obtenue** | ~22–45% selon le split du dataset |

> Note : Les performances limitées sont dues à la nature synthétique du dataset et au manque de features discriminantes pour les contrats courts.

# Technologies utilisées

| Technologie | Utilisation |
|-------------|-------------|
| **Python 3** | Langage principal |
| **Pandas** | Manipulation et nettoyage des données |
| **NumPy** | Calculs numériques |
| **Matplotlib/Seaborn** | Visualisation des données |
| **Scikit-learn** | Modèles de ML et évaluation |
| **Jupyter Notebook** | Environnement d'analyse |

# Installation et exécution

\`\`\`bash
# Cloner le projet
git clone https://github.com/alexyvanot/hr-data-analytics.git
cd hr-data-analytics

# Installer les dépendances
pip install -r requirements.txt

# Ouvrir le notebook
jupyter notebook ProjetFinal_DataCrafting_Mining.ipynb
\`\`\`

# Structure du projet

\`\`\`
hr-data-analytics/
├── ProjetFinal_DataCrafting_Mining.ipynb  # Notebook principal
├── dataset_rh.csv                          # Dataset RH synthétique
├── requirements.txt                        # Dépendances Python
└── LICENCE                                 # Licence MIT
\`\`\`
`,cr=`---
name: InVR - Initiation à la Réalité Virtuelle
slug: invr
category: humain
type: Événement & Médiation
color: "#6366F1"
published: true
logo: https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg
period:
  from: 2023-01-01
  to: 2023-06-01
skills:
  - unity
  - csharp
  - openxr
team:
  - name: Pierre GERVAIS
    role: Co-organisateur
  - name: Alexy VANOT
    role: Co-organisateur
---

# InVR - Initiation à la Réalité Virtuelle

**InVR** est un projet d'initiation et de médiation autour de la **réalité virtuelle** que j'ai co-organisé avec **Pierre GERVAIS**. L'objectif était de faire découvrir la VR au plus grand nombre : étudiants du campus, parents, et curieux de tous horizons.

# 🎯 Objectifs du projet

- 🎮 **Faire tester la VR** à un public novice dans un cadre encadré
- 🎓 **Sensibiliser aux métiers** de la réalité virtuelle et du développement VR
- 💡 **Présenter les applications concrètes** de la VR dans la société
- 🤝 **Créer un moment de partage** entre étudiants, familles et passionnés

# 🌟 Ce qu'on a proposé

## Sessions de découverte VR

Nous avons installé plusieurs postes VR permettant aux participants de vivre leurs premières expériences immersives :
- Découverte de jeux et applications variées
- Encadrement personnalisé pour chaque participant
- Adaptation aux différents profils (enfants, adultes, seniors)

## Initiation au développement VR

Pour les plus curieux, nous avons proposé des sessions d'initiation au développement :
- Présentation des outils (Unity, OpenXR)
- Démonstration de création de scènes simples
- Explication des concepts de base (tracking, interactions, locomotion)

## Conférences et échanges

Des temps d'échange sur les apports de la VR à la société :
- **Formation et éducation** - Simulations médicales, apprentissage immersif
- **Santé** - Thérapies par exposition, rééducation
- **Industrie** - Prototypage, formation aux gestes métiers
- **Culture** - Visites virtuelles, expériences artistiques

# 💫 Impact du projet

| Indicateur | Résultat |
|------------|----------|
| **Participants** | 50+ personnes initiées à la VR |
| **Durée** | Plusieurs sessions sur le semestre |
| **Public** | Étudiants, parents, personnel du campus |
| **Retours** | Très positifs, beaucoup de découvertes ! |

# 🤝 L'équipe

Ce projet a été rendu possible grâce à la collaboration avec :

- **Pierre GERVAIS** - Co-organisateur, expert technique VR
- **Alexy VANOT** - Co-organisateur, médiation et développement

# 💡 Ce que j'ai appris

Au-delà des aspects techniques, ce projet m'a permis de développer des compétences humaines essentielles :

- **Pédagogie** - Expliquer des concepts complexes simplement
- **Médiation scientifique** - Rendre la technologie accessible à tous
- **Organisation d'événements** - Logistique, planning, coordination
- **Communication** - Adapter son discours au public

# 🔮 Pourquoi ce projet me tient à cœur

La réalité virtuelle n'est pas qu'une technologie de jeu vidéo. C'est un outil qui peut transformer l'éducation, la santé, et notre façon d'interagir avec le monde. Partager cette vision et voir les yeux émerveillés des participants qui découvrent la VR pour la première fois a été une expérience incroyablement gratifiante.

> *"La meilleure façon de comprendre la VR, c'est de l'essayer."*
`,pr=`---
name: Nano Pong
slug: nano-pong
published: true
category: technique
type: Embedded System
color: "#00979D"
logo: https://raw.githubusercontent.com/alexyvanot/nano-pong/main/resources/images/breadboard/t_main3.png
period:
  from: 2022-01-01
  to: 2022-06-01
skills:
  - c
  - arduino
  - vscode
links:
  - label: GitHub
    to: https://github.com/alexyvanot/nano-pong
attachments:
  - label: Circuit principal
    src: https://raw.githubusercontent.com/alexyvanot/nano-pong/main/resources/images/breadboard/t_main3.png
  - label: Montage breadboard
    src: https://raw.githubusercontent.com/alexyvanot/nano-pong/main/resources/images/breadboard/main.jpg
  - label: Vue d'ensemble
    src: https://raw.githubusercontent.com/alexyvanot/nano-pong/main/resources/images/breadboard/main2.jpg
  - label: Détail circuit
    src: https://raw.githubusercontent.com/alexyvanot/nano-pong/main/resources/images/breadboard/main3.jpg
  - label: Matrice LED MAX7219
    src: https://raw.githubusercontent.com/alexyvanot/nano-pong/main/resources/images/breadboard/MAX7219.jpg
  - label: Arduino Nano
    src: https://raw.githubusercontent.com/alexyvanot/nano-pong/main/resources/images/breadboard/nano.jpg
  - label: Potentiomètres
    src: https://raw.githubusercontent.com/alexyvanot/nano-pong/main/resources/images/breadboard/potentiometers.jpg
---

<img src="https://raw.githubusercontent.com/alexyvanot/nano-pong/main/resources/images/breadboard/t_main3.png" alt="Circuit Nano Pong clean" width="400" />

## À propos

**Nano Pong** est une réplique du célèbre jeu Pong développée sur microcontrôleur **Arduino Nano**. Ce projet étudiant réalisé en équipe de 4 reproduit l'expérience classique du tennis de table en version électronique miniature.

## Fonctionnalités

- 🎮 **Gameplay 2 joueurs** — Chaque joueur contrôle sa raquette via un potentiomètre
- 💡 **Affichage LED** — Le jeu s'affiche sur une matrice de LEDs MAX7219
- 🏓 **Physique réaliste** — Angles de rebond variables selon la zone de la raquette touchée
- 🏆 **Système de score** — 3 LEDs par joueur pour afficher les points, premier à 3 gagne
- 🔄 **Rejouabilité** — Possibilité de relancer une partie sans reset du système

## Règles du jeu

- La balle rebondit à **45° vers le haut** si elle touche le bord supérieur de la raquette
- La balle rebondit à **45° vers le bas** si elle touche le bord inférieur
- La balle repart **horizontalement** si elle touche le centre de la raquette
- Les bords haut et bas du terrain font rebondir la balle
- Quand la balle touche un bord latéral, l'adversaire marque un point

## Spécifications techniques

| Composant | Description |
|-----------|-------------|
| Microcontrôleur | Arduino Nano |
| Affichage | Matrice LED 8x8 MAX7219 |
| Contrôleurs | 2 potentiomètres (un par joueur) |
| Indicateurs de score | 6 LEDs (3 par joueur) |
| Langage | C avec bibliothèques Arduino |

## Équipe

Projet réalisé dans le cadre d'un exercice de fin de module à l'**ESIEA** par :
- Alexy Vanot
- Sandro Bakuradze
- Pierre Gervais
- Brice Nyamsi
`,dr=`---
name: Quiz AI
slug: quiz-ai
category: technique
type: AI & Web Application
color: "#7C3AED"
published: true
logo: https://raw.githubusercontent.com/alexyvanot/quiz-ai/main/src/lib/assets/demo_init.png
links:
  - label: GitHub
    url: https://github.com/alexyvanot/quiz-ai
skills:
  - svelte
  - typescript
  - javascript
  - nodejs
  - express
  - tailwindcss
  - docker
attachments:
  - label: Démo complète (GIF)
    src: https://raw.githubusercontent.com/alexyvanot/quiz-ai/main/src/lib/assets/demo_quiz.gif
  - label: Formulaire initial
    src: https://raw.githubusercontent.com/alexyvanot/quiz-ai/main/src/lib/assets/demo_init.png
  - label: Quiz interactif
    src: https://raw.githubusercontent.com/alexyvanot/quiz-ai/main/src/lib/assets/demo_player.png
  - label: Écran des résultats
    src: https://raw.githubusercontent.com/alexyvanot/quiz-ai/main/src/lib/assets/demo_result.png
---

# Quiz AI

**Quiz AI** est un générateur de quiz intelligent qui utilise l'IA pour créer des quiz interactifs à partir de n'importe quel texte. Construit avec des technologies modernes incluant SvelteKit, Express.js et les modèles Ollama AI.

Ce projet a été réalisé dans le cadre de mes études en **Prompt Engineering**.

![Démo de l'application|clean](https://raw.githubusercontent.com/alexyvanot/quiz-ai/main/src/lib/assets/demo_quiz.gif)

# Fonctionnalités

- 🎯 **Génération intelligente de quiz** - Créez des quiz à partir de n'importe quel texte grâce à l'IA
- 🤖 **Multiples modèles IA** - Support de llama3.2:latest et gemma:2b
- 🎮 **Lecteur de quiz interactif** - Interface moderne pour répondre aux quiz
- 📊 **Scoring en temps réel** - Feedback instantané et résultats détaillés
- 🐳 **Docker Ready** - Plusieurs modes de déploiement (default, GPU, local)
- ⚡ **Téléchargement auto des modèles** - Les modèles se téléchargent automatiquement au premier lancement
- 🌙 **Thème sombre** - Interface moderne inspirée de Discord
- 🔧 **Configurable** - Personnalisez le nombre de questions et de choix de réponses

# Architecture

| Composant | Technologie |
|-----------|-------------|
| **Frontend** | SvelteKit 5 avec Tailwind CSS |
| **Backend** | Express.js REST API |
| **Moteur IA** | Ollama (llama3.2:latest, gemma:2b) |
| **Conteneurisation** | Docker & Docker Compose |

# Comment ça fonctionne

1. **Coller votre texte** dans la zone de saisie
2. **Configurer** le nombre de questions (3-10) et de choix (2-4)
3. **Générer** le quiz avec le modèle IA de votre choix
4. **Répondre** aux questions de manière interactive
5. **Consulter** vos résultats avec le détail des bonnes/mauvaises réponses

# Installation et lancement

## 🚀 Quick Start (Recommandé)

\`\`\`bash
git clone https://github.com/alexyvanot/quiz-ai.git && cd quiz-ai
docker compose up -d
\`\`\`

Les modèles se téléchargent automatiquement au premier lancement (llama3.2:latest + gemma:2b)

> Accédez à l'application sur [http://localhost:5173](http://localhost:5173)

## GPU Accelerated (NVIDIA)

\`\`\`bash
docker compose -f docker-compose.gpu.yml up -d
\`\`\`

## Mode Ollama Local

\`\`\`bash
# Démarrer Ollama localement
ollama serve

# Télécharger les modèles si nécessaire
ollama pull llama3.2:latest
ollama pull gemma:2b

# Lancer l'application
docker compose -f docker-compose.local.yml up -d
\`\`\`

# Modèles IA

| Modèle | Taille | Description |
|--------|--------|-------------|
| **llama3.2:latest** | 2.0GB | Modèle principal de génération de questions |
| **gemma:2b** | 1.7GB | Modèle alternatif léger |

# Screenshots

![Formulaire initial|clean](https://raw.githubusercontent.com/alexyvanot/quiz-ai/main/src/lib/assets/demo_init.png)

![Quiz interactif|clean](https://raw.githubusercontent.com/alexyvanot/quiz-ai/main/src/lib/assets/demo_player.png)

![Résultats|clean](https://raw.githubusercontent.com/alexyvanot/quiz-ai/main/src/lib/assets/demo_result.png)
`,mr=`---
name: Snake Game AI
slug: snake-game-ai
published: true
category: technique
type: Machine Learning
shortDescription: Un jeu Snake classique où l'IA apprend à jouer en utilisant des algorithmes génétiques et des réseaux de neurones.
color: "#3776AB"
logo: https://raw.githubusercontent.com/alexyvanot/Snake-Game-AI/main/assets/animfull.gif
period:
  from: 2024-12-01
  to: 2025-01-01
skills:
  - python
  - numpy
  - tensorflow
links:
  - label: GitHub
    to: https://github.com/alexyvanot/Snake-Game-AI
attachments:
  - label: Démo du jeu
    src: https://raw.githubusercontent.com/alexyvanot/Snake-Game-AI/main/assets/animfull.gif
  - label: Modèle Vertical (txt)
    src: https://raw.githubusercontent.com/alexyvanot/Snake-Game-AI/main/vertical_model.txt
  - label: Modèle Horizontal (txt)
    src: https://raw.githubusercontent.com/alexyvanot/Snake-Game-AI/main/horizontal_model.txt
---

<img src="https://raw.githubusercontent.com/alexyvanot/Snake-Game-AI/main/assets/animfull.gif" alt="Snake Game AI clean" width="350" />

## À propos

**Snake Game AI** est un projet de Machine Learning qui utilise des **algorithmes génétiques** et des **réseaux de neurones** pour entraîner une intelligence artificielle à jouer au jeu classique Snake.

L'IA apprend à jouer en évoluant sur plusieurs générations, améliorant ses performances grâce à des scores de fitness. Ce projet a été développé dans le cadre d'un module académique de Machine Learning.

## Fonctionnement

- 🧬 **Algorithmes génétiques** — L'IA évolue par sélection naturelle, croisant les meilleurs individus
- 🧠 **Réseaux de neurones** — Chaque snake possède un réseau neuronal qui prend des décisions
- 📈 **Fitness scoring** — Les performances sont évaluées et les meilleurs gènes sont transmis
- 🔄 **Apprentissage itératif** — L'IA s'améliore génération après génération

## Résultats des modèles

| Modèle | Itérations | Meilleur score |
|--------|------------|----------------|
| Vertical | 573/1000 | **96.00%** |
| Horizontal | 1000/1000 | **98.00%** |

## Stack technique

| Technologie | Utilisation |
|-------------|-------------|
| Python 3.13 | Langage principal |
| NumPy | Calculs matriciels et opérations sur les réseaux de neurones |
| Pygame | Interface graphique et rendu du jeu |

## Configuration

Les paramètres d'entraînement de l'IA sont personnalisables via le fichier \`.env\` :
- Taille de la population
- Nombre de générations
- Taux de mutation
- Architecture du réseau neuronal

## Contexte académique

Projet réalisé dans le cadre du module **Machine Learning** à l'ESIEA. Basé sur un codebase fourni par l'enseignant, avec des améliorations et modifications personnelles significatives.
`,gr=`---
name: Squat Counter IA
slug: squat-counter-ia
category: technique
type: Computer Vision & Pose Estimation
color: "#FF5722"
published: true
logo: https://raw.githubusercontent.com/alexyvanot/squat-counter-ia/main/resources/images/demo.png
links:
  - label: GitHub
    url: https://github.com/alexyvanot/squat-counter-ia
skills:
  - python
  - opencv
  - mediapipe
  - streamlit
  - numpy
attachments:
  - label: Démo de l'application
    src: https://raw.githubusercontent.com/alexyvanot/squat-counter-ia/main/resources/images/demo.png
---

# 🏋️ Squat Counter

Ce projet a été développé dans le cadre d'un TP universitaire. L'objectif était de créer un compteur de squats utilisant l'estimation de pose humaine avec **MediaPipe** et d'afficher les résultats via une interface **Streamlit**.

![Démo de l'application|clean](https://raw.githubusercontent.com/alexyvanot/squat-counter-ia/main/resources/images/demo.png)

L'exercice a été donné par Ilyes Talbi avec les instructions suivantes :

> "Construire un compteur de squats utilisant l'estimation de pose humaine. Utiliser MediaPipe pour extraire les positions des articulations, calculer les angles et distances pour détecter les squats, et afficher le tout avec une UI Streamlit."

# Fonctionnalités

- 📹 **Détection de squats en temps réel** depuis la webcam
- 🧠 **Analyse d'angles et de position des hanches**
- 📊 **Jauge visuelle** montrant l'état de la pose
- 🖼️ **Interface Streamlit** intuitive

# Comment ça fonctionne

Le système utilise MediaPipe pour détecter le squelette humain et extraire les positions des articulations clés (genoux, hanches). En calculant les angles entre ces articulations, l'application peut déterminer si l'utilisateur est en position debout ou accroupie.

## Logique de détection

| État | Angle des genoux | Position des hanches |
|------|------------------|----------------------|
| **Debout** | > 150° | Haute (< 0.60) |
| **Squat** | < 100° | Basse (> 0.70) |

# Configuration

Les seuils de détection peuvent être ajustés dans \`src/squat_counter/init/config_init.py\` :

\`\`\`python
# Plus la valeur de l'angle est basse, plus les genoux sont pliés
SQUAT_THRESHOLD = 100  # Angle minimum pour considérer un squat
STAND_THRESHOLD = 150  # Angle maximum pour considérer debout

# Plus la valeur des hanches est haute, plus les hanches sont proches du sol
SQUAT_HIP_MIN = 0.70   # Distance minimum des hanches pour un squat
STAND_HIP_MAX = 0.60   # Distance maximum des hanches pour être debout
\`\`\`

# Installation et utilisation

\`\`\`bash
git clone https://github.com/alexyvanot/squat-counter-ia.git && cd squat-counter-ia
python -m venv .venv
source .venv/bin/activate  # Sur Windows: .venv\\Scripts\\activate
pip install -r requirements.txt
streamlit run main.py
\`\`\`

# Technologies utilisées

| Technologie | Utilisation |
|-------------|-------------|
| **MediaPipe** | Estimation de pose et détection du squelette |
| **OpenCV** | Traitement de la vidéo webcam |
| **Streamlit** | Interface utilisateur web |
| **NumPy** | Calculs mathématiques (angles, distances) |

# Utilisation

1. Lancer l'application avec \`streamlit run main.py\`
2. Autoriser l'accès à la webcam
3. Commencer à faire des squats ! L'app compte vos squats et affiche l'état actuel
4. La jauge visuelle montre votre position en temps réel (vert = debout, rouge = squat)
`,fr=`---
name: Svelte Static Blog
slug: svelte-blog
category: technique
type: Web Development
color: "#FF3E00"
published: true
logo: https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/svelte/svelte-original.svg
links:
  - label: GitHub
    url: https://github.com/alexyvanot/testing-blog
  - label: Demo
    url: https://alexyvanot.github.io/testing-blog/
skills:
  - svelte
  - typescript
  - javascript
  - html
  - css
  - markdown
---

# Svelte Static Blog Generator

Mon **premier projet Svelte** ! 🎉 Un générateur de site statique moderne et minimaliste, conçu pour créer des blogs rapidement avec le support complet du **Markdown**.

Ce projet m'a permis de découvrir l'écosystème Svelte et d'explorer comment construire un système de gestion de contenu léger et performant.

# ✨ Pourquoi ce projet ?

L'idée était simple : créer un outil permettant de générer un blog statique sans la complexité des CMS traditionnels. Juste du **Markdown**, du **Svelte**, et c'est parti !

# 🚀 Fonctionnalités

- 📝 **Support Markdown complet** - Écrivez vos articles en Markdown, ils sont automatiquement convertis en HTML
- ⚡ **Génération statique** - Site ultra-rapide, déployable partout (GitHub Pages, Netlify, Vercel...)
- 🎨 **Design minimaliste** - Interface épurée qui met le contenu en avant
- 🔄 **Hot Reload** - Rechargement automatique en développement
- 📁 **Organisation simple** - Un dossier \`posts/\` pour tous vos articles
- 🌐 **SEO-friendly** - Pages statiques optimisées pour le référencement
- 🚀 **CI/CD intégré** - Déploiement automatique via GitHub Actions

# 💡 Ce que j'ai appris

Ce projet a été l'occasion parfaite pour découvrir :

| Concept | Description |
|---------|-------------|
| **Réactivité Svelte** | Le système de réactivité simple et intuitif de Svelte |
| **SvelteKit** | Le framework full-stack pour Svelte |
| **Static Adapter** | Génération de sites statiques avec SvelteKit |
| **Markdown Processing** | Parsing et rendu de fichiers Markdown |
| **GitHub Pages** | Déploiement automatisé de sites statiques |
| **GitHub Actions** | Workflows CI/CD pour l'automatisation |

# 🛠️ Architecture

\`\`\`
svelte-blog/
├── posts/              # Articles en Markdown
│   ├── article-1.md
│   └── article-2.md
├── src/
│   ├── routes/         # Pages Svelte
│   └── lib/            # Composants réutilisables
├── static/             # Assets statiques
├── svelte.config.js    # Configuration SvelteKit
└── vite.config.ts      # Configuration Vite
\`\`\`

# 🎯 Utilisation

## Ajouter un article

1. Créez un fichier \`.md\` dans le dossier \`posts/\`
2. Ajoutez votre contenu en Markdown
3. Le site se met à jour automatiquement !

## Développement local

\`\`\`bash
# Cloner le projet
git clone https://github.com/alexyvanot/testing-blog.git
cd testing-blog

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
\`\`\`

## Déploiement

Le site se déploie automatiquement sur GitHub Pages via GitHub Actions à chaque push sur \`main\`.

# 🔮 Pourquoi Svelte ?

Après avoir travaillé avec d'autres frameworks, j'ai voulu explorer Svelte pour :

- **Sa simplicité** - Moins de boilerplate, plus de productivité
- **Ses performances** - Compilation en JavaScript vanilla, pas de virtual DOM
- **Sa courbe d'apprentissage** - Plus accessible que React ou Vue
- **Son écosystème moderne** - SvelteKit offre une expérience développeur exceptionnelle

Ce premier projet m'a convaincu, et c'est pourquoi mon portfolio actuel est aussi construit avec Svelte ! 🧡
`,hr=`---
name: Template Project
slug: template-project
published: false
type: Template
color: "#5e95e3"
logo: Unknown
period:
  from: 2024-01-01
skills:
  - angular
  - ts
  - tailwind
links:
  - label: GitHub
    to: https://github.com/
  - label: Repository
    to: https://github.com/#repo
  - label: Svelte
    to: https://svelte.dev/
  - label: Shadcn Svelte
    to: https://www.shadcn-svelte.com/
---

Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!
`,vr=`---
name: Svelte Template
slug: template-svelte
published: false
type: Website Template
color: "#ff3e00"
logo: Svelte
period:
  from: 2024-01-01
skills:
  - svelte
  - ts
  - tailwind
  - sass
links:
  - label: GitHub
    to: https://github.com/
# Pièces jointes - Nouveau système unifié !
# Types supportés: image, pdf, document, archive, video, audio, code, link, other
# Le type est auto-détecté selon l'extension/URL si non spécifié
attachments:
  # Images (s'affichent comme les anciens screenshots)
  - label: screen 1
    src: https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60
  - label: "2"
    src: https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60
  - label: "3"
    src: https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60
  - label: "4"
    src: https://images.unsplash.com/photo-1542903660-eedba2cda473?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60
  - label: "5"
    src: https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60
  - label: "6"
    src: https://images.unsplash.com/photo-1585079542156-2755d9c8a094?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60
  # Exemples d'autres types de pièces jointes
  # - label: Documentation PDF
  #   src: /pdf/documentation.pdf
  #   description: Guide complet du projet
  # - label: Code source
  #   src: https://github.com/user/repo/archive/main.zip
  #   type: archive
  # - label: Démo vidéo
  #   src: https://youtube.com/watch?v=xxx
  # - label: Article de blog
  #   src: https://blog.example.com/article
  #   description: Article expliquant le projet
---

A Vercel-like developer portfolio website template made with Typescript and SvelteKit.
`,br=`---
name: TP VPO CIFAR-10
slug: tpvpocifar
category: technique
type: Deep Learning & Computer Vision
color: "#673AB7"
published: true
logo: https://raw.githubusercontent.com/alexyvanot/tpvpocifar/main/Figure_1.png
links:
  - label: GitHub
    url: https://github.com/alexyvanot/tpvpocifar
skills:
  - python
  - tensorflow
  - numpy
  - flask
  - streamlit
  - jupyter
attachments:
  - label: Courbes d'entraînement
    src: https://raw.githubusercontent.com/alexyvanot/tpvpocifar/main/Figure_1.png
  - label: Consigne du TP
    src: https://raw.githubusercontent.com/alexyvanot/tpvpocifar/main/consigne.png
  - label: Image test 1
    src: https://raw.githubusercontent.com/alexyvanot/tpvpocifar/main/img/img.png
  - label: Image test 2
    src: https://raw.githubusercontent.com/alexyvanot/tpvpocifar/main/img/img2.png
  - label: Image custom 32x32
    src: https://raw.githubusercontent.com/alexyvanot/tpvpocifar/main/img/customc32.png
---

# TPVPOCIFAR - Pipeline de Vision par Ordinateur avec CIFAR-10

Ce projet démontre un pipeline complet de vision par ordinateur utilisant le dataset **CIFAR-10**. Il couvre l'ensemble du processus de machine learning, de l'exploration des données à l'inférence en temps réel.

![Courbes d'entraînement|clean](https://raw.githubusercontent.com/alexyvanot/tpvpocifar/main/Figure_1.png)

# Fonctionnalités

- 📊 Chargement et exploration des données
- 🔧 Prétraitement du dataset
- 🧠 Construction de modèle avec **CNN** (Convolutional Neural Networks)
- 📈 Entraînement et évaluation du modèle
- 📉 Visualisation des performances
- 💾 Sauvegarde du modèle pour l'inférence
- 🌐 Prédiction en direct via **API Flask** et **interface Streamlit**

# Comment ça fonctionne

1. Le modèle est entraîné sur **10 catégories** d'images RGB de 32x32 pixels
2. Un CNN avec **2 couches de convolution + couches denses** effectue la classification
3. L'utilisateur peut uploader sa propre image (doit être 32x32x3) pour obtenir une prédiction
4. L'app Streamlit envoie l'image à l'API Flask qui retourne la classe prédite

# Dataset CIFAR-10

CIFAR-10 contient **60 000 images** couleur 32x32 réparties en 10 classes :

| Classe | Description |
|--------|-------------|
| 0 | Avion |
| 1 | Automobile |
| 2 | Oiseau |
| 3 | Chat |
| 4 | Cerf |
| 5 | Chien |
| 6 | Grenouille |
| 7 | Cheval |
| 8 | Bateau |
| 9 | Camion |

Plus d'infos : [https://www.cs.toronto.edu/~kriz/cifar.html](https://www.cs.toronto.edu/~kriz/cifar.html)

# Architecture du projet

\`\`\`
tpvpocifar/
├── training_notebook.py    # Script d'entraînement
├── flask_api.py            # API Flask pour les prédictions
├── streamlit_interface.py  # Interface utilisateur Streamlit
├── cifar10_model.h5        # Modèle entraîné sauvegardé
├── cifar.ipynb             # Notebook Jupyter d'expérimentation
└── img/                    # Images de test
\`\`\`

# Installation et utilisation

\`\`\`bash
# Cloner et installer
git clone https://github.com/alexyvanot/tpvpocifar.git && cd tpvpocifar
python -m venv venv
venv\\Scripts\\activate  # Sur Unix: source venv/bin/activate
pip install -r requirements.txt

# Entraîner le modèle
python training_notebook.py

# Lancer l'API Flask
python flask_api.py

# Dans un autre terminal, lancer Streamlit
streamlit run streamlit_interface.py
\`\`\`

# Technologies utilisées

| Technologie | Utilisation |
|-------------|-------------|
| **TensorFlow/Keras** | Construction et entraînement du CNN |
| **NumPy** | Manipulation des données |
| **Matplotlib** | Visualisation des résultats |
| **Flask** | API REST pour les prédictions |
| **Streamlit** | Interface web interactive |
| **Pillow** | Traitement des images uploadées |
`,yr=`---
name: Android Studio
slug: android-studio
published: true
category: devtools
color: green
logo: AndroidStudio
---

IDE officiel pour le développement Android. Émulateur, débogage et outils de build Gradle intégrés.
`,_r=`---
name: Apache2
slug: apache2
published: true
category: devops
color: red
logo: Apache
---

Serveur web HTTP open-source. Configuration de virtual hosts, reverse proxy et modules.
`,xr=`---
name: Arduino
slug: arduino
published: true
category: devtools
color: teal
logo: Arduino
---

Programmation de microcontrôleurs pour des projets IoT et électronique embarquée.
`,Sr=`---
name: Autonomie & apprentissage
slug: autonomy
published: true
category: soft
color: blue
logo: Autonomy
---

Capacité à apprendre par moi-même, à m'auto-former rapidement, et à être force de proposition.
`,Ar=`---
name: BungeeCord / Waterfall
slug: bungeecord
published: true
category: devtools
color: yellow
logo: BungeeCord
---

Proxy Minecraft pour connecter plusieurs serveurs. Waterfall est un fork optimisé avec corrections de bugs.
`,wr=`---
name: C
slug: c
published: true
category: pro-lang
color: gray
logo: C
---

Langage bas niveau utilisé pour la programmation système et les performances critiques.
`,kr=`---
name: CI/CD
slug: ci-cd
published: true
category: devops
color: gray
logo: CICD
---

Mise en place de pipelines CI/CD via GitLab. Automatisation des tests et déploiement.
`,Cr=`---
name: CLion
slug: clion
published: true
category: devtools
color: green
logo: CLion
---

IDE JetBrains pour C et C++. CMake intégré, debugging avancé et analyse de code statique.
`,jr=`---
name: Confluence
slug: confluence
published: true
category: devtools
color: blue
logo: Confluence
---

Plateforme de documentation collaborative Atlassian. Wiki d'équipe, knowledge base et documentation projet.
`,Tr=`---
name: Créativité
slug: creativity
published: true
category: soft
color: purple
logo: Creativity
---

Création d'expériences originales, notamment en réalité virtuelle ou dans la conception d'UI.
`,Lr=`---
name: C#
slug: csharp
published: true
category: pro-lang
color: purple
logo: CSharp
---

Langage orienté objet de Microsoft, utilisé pour le développement .NET et Unity.
`,Pr=`---
name: CSS
slug: css
published: true
category: markup-style
color: blue
logo: CSS
---

Mise en forme des interfaces. Utilisé avec Sass ou Tailwind selon les projets.
`,qr=`---
name: Dart
slug: dart
published: true
category: pro-lang
color: cyan
logo: Dart
---

Langage de Google utilisé principalement avec Flutter pour le développement mobile cross-platform.
`,Ir=`---
name: DataGrip
slug: datagrip
published: true
category: devtools
color: purple
logo: DataGrip
---

IDE JetBrains pour bases de données. Support multi-SGBD, requêtes SQL et administration.
`,Er=`---
name: Docker Swarm
slug: docker-swarm
published: true
category: devops
color: blue
logo: Docker
---

Orchestration native de Docker pour le clustering et le déploiement de services distribués.
`,Dr=`---
name: Docker
slug: docker
published: true
category: devops
color: blue
logo: Docker
---

Conteneurisation d'applications. Utilisé pour créer des environnements de test ou déployer des apps.
`,Mr=`---
name: .NET
slug: dotnet
published: true
category: framework
color: purple
logo: DotNet
---

Framework Microsoft pour le développement d'applications web, desktop et cloud.
`,Fr=`---
name: Electron
slug: electron
published: true
category: framework
color: cyan
logo: Electron
---

Framework pour créer des applications desktop cross-platform avec les technologies web.
`,Nr=`---
name: Microsoft Excel
slug: excel
published: true
category: devtools
color: green
logo: Excel
---

Tableur avancé pour l'analyse de données, formules complexes, macros VBA et visualisation.
`,Or=`---
name: Express.js
slug: expressjs
published: true
category: framework
color: gray
logo: Express
---

Framework minimaliste pour Node.js, utilisé pour créer des APIs REST et des serveurs web.
`,Rr=`---
name: Firebase
slug: firebase
published: true
category: devops
color: orange
logo: Firebase
---

Plateforme Google pour le backend-as-a-service : authentification, base de données temps réel, hosting.
`,Br=`---
name: Flask
slug: flask
published: true
category: framework
color: gray
logo: Flask
---

Micro-framework Python léger pour le développement web et d'APIs.
`,Gr=`---
name: Flutter
slug: flutter
published: true
category: framework
color: cyan
logo: Flutter
---

Framework UI de Google pour créer des applications mobiles, web et desktop à partir d'une seule codebase.
`,Hr=`---
name: Git
slug: git
published: true
category: devtools
color: orange
logo: Git
---

Système de versionnement utilisé dans tous mes projets. Workflow GitLab et GitHub.
`,Ur=`---
name: Grafana
slug: grafana
published: true
category: devops
color: orange
logo: Grafana
---

Plateforme de visualisation et monitoring pour métriques et logs.
`,zr=`---
name: HTML
slug: html
published: true
category: markup-style
color: orange
logo: HTML
---

Structure des pages web. Maîtrisé depuis mes débuts.
`,Vr=`---
name: Hugo
slug: hugo
published: true
category: framework
color: pink
logo: Hugo
---

Générateur de sites statiques ultra-rapide écrit en Go.
`,Jr=`---
name: IntelliJ IDEA
slug: intellij
published: true
category: devtools
color: pink
logo: IntelliJ
---

IDE JetBrains puissant pour Java, Kotlin et développement polyglotte. Refactoring et analyse de code avancés.
`,Yr=`---
name: Ionic
slug: ionic
published: true
category: framework
color: blue
logo: Ionic
---

Framework pour créer des applications mobiles hybrides avec les technologies web.
`,Wr=`---
name: Java
slug: java
published: true
category: pro-lang
color: red
logo: Java
---

Langage orienté objet utilisé principalement dans mes projets backend chez Synchrotron SOLEIL.
`,Kr=`---
name: JavaFX
slug: javafx
published: true
category: framework
color: orange
logo: Java
---

Framework Java pour créer des interfaces graphiques modernes et des applications desktop riches.
`,$r=`---
name: JavaScript
slug: js
published: true
category: pro-lang
color: yellow
logo: JavaScript
---

Langage de programmation principal utilisé pour les interfaces interactives, côté client comme côté serveur avec Node.js.
`,Qr=`---
name: Java EE
slug: jee
published: true
category: framework
color: red
logo: Java
---

Plateforme Java pour le développement d'applications d'entreprise. Servlets, JSP, EJB, JPA et services web.
`,Xr=`---
name: Jira
slug: jira
published: true
category: devtools
color: blue
logo: Jira
---

Outil de gestion de projet Agile. Suivi des issues, sprints, Kanban et workflows personnalisés.
`,Zr=`---
name: Kotlin
slug: kotlin
published: true
category: pro-lang
color: purple
logo: Kotlin
---

Langage moderne sur JVM, concis et interopérable avec Java. Développement Android et backend.
`,eo=`---
name: Kubernetes
slug: kubernetes
published: true
category: devops
color: blue
logo: Kubernetes
---

Orchestration de conteneurs pour le déploiement, la mise à l'échelle et la gestion d'applications.
`,no=`---
name: Linux
slug: linux
published: true
category: devtools
color: gray
logo: Linux
---

Utilisation quotidienne de serveurs Debian et Red Hat au Synchrotron.
`,to=`---
name: MariaDB
slug: mariadb
published: true
category: db
color: brown
logo: MariaDB
---

Base de données relationnelle open-source, fork de MySQL.
`,io=`---
name: Minikube
slug: minikube
published: true
category: devops
color: blue
logo: Kubernetes
---

Kubernetes local pour le développement et les tests. Environnement de cluster complet sur une seule machine.
`,ro=`---
name: MongoDB
slug: mongodb
published: true
category: db
color: green
logo: MongoDB
---

Base de données NoSQL orientée documents, idéale pour les données flexibles et le scaling horizontal.
`,oo=`---
name: MySQL
slug: mysql
published: true
category: db
color: blue
logo: MySQL
---

Système de gestion de base de données relationnelle open-source très répandu.
`,ao=`---
name: Nginx
slug: nginx
published: true
category: devops
color: green
logo: Nginx
---

Serveur web haute performance, reverse proxy et load balancer.
`,so=`---
name: Node.js
slug: nodejs
published: true
category: framework
color: green
logo: NodeJs
---

Runtime JavaScript côté serveur pour créer des applications backend scalables.
`,lo=`---
name: OpenCV
slug: opencv
published: true
category: library
color: blue
logo: OpenCV
---

Bibliothèque de vision par ordinateur pour le traitement d'images et la détection d'objets.
`,uo=`---
name: OpenXR
slug: openxr
published: true
category: library
color: blue
logo: OpenXR
---

Standard ouvert pour le développement d'applications VR/AR. Utilisé pour créer des expériences immersives cross-platform.
`,co=`---
name: Oracle
slug: oracle
published: true
category: db
color: red
logo: Oracle
---

Système de gestion de base de données relationnelle d'entreprise.
`,po=`---
name: Pandas
slug: pandas
published: true
category: library
color: blue
logo: Pandas
---

Bibliothèque Python pour la manipulation et l'analyse de données structurées.
`,mo=`---
name: PaperMC
slug: papermc
published: true
category: devtools
color: gray
logo: PaperMC
---

Fork haute performance de Spigot pour serveurs Minecraft. Optimisation et API étendue pour plugins.
`,go=`---
name: Photoshop
slug: photoshop
published: true
category: design
color: blue
logo: Photoshop
---

Logiciel de retouche d'image et de création graphique d'Adobe.
`,fo=`---
name: PHP
slug: php
published: true
category: pro-lang
color: purple
logo: PHP
---

Langage de script côté serveur très utilisé pour le développement web.
`,ho=`---
name: Playwright
slug: playwright
published: true
category: test
color: green
logo: Playwright
---

Framework de test end-to-end moderne pour applications web. Support multi-navigateurs et automatisation avancée.
`,vo=`---
name: PostgreSQL
slug: postgresql
published: true
category: db
color: blue
logo: PostgreSQL
---

Base de données relationnelle open-source avancée avec support JSON et extensions.
`,bo=`---
name: Postman
slug: postman
published: true
category: devtools
color: orange
logo: Postman
---

Outil de test et documentation d'APIs REST et GraphQL.
`,yo=`---
name: Microsoft PowerPoint
slug: powerpoint
published: true
category: devtools
color: orange
logo: PowerPoint
---

Création de présentations professionnelles, animations et supports de communication visuels.
`,_o=`---
name: PyCharm
slug: pycharm
published: true
category: devtools
color: green
logo: PyCharm
---

IDE JetBrains dédié au développement Python. Support Django, Flask, data science et debugging avancé.
`,xo=`---
name: Python
slug: python
published: true
category: pro-lang
color: yellow
logo: Python
---

Langage polyvalent utilisé pour le scripting, le data science, le machine learning et le web.
`,So=`---
name: React.js
slug: reactjs
published: true
category: library
color: cyan
logo: ReactJs
---

Bibliothèque JavaScript pour créer des interfaces utilisateur réactives. Utilisé professionnellement.
`,Ao=`---
name: Redis
slug: redis
published: true
category: db
color: red
logo: Redis
---

Base de données in-memory ultra-rapide. Cache, pub/sub, et structures de données avancées.
`,wo=`---
name: Rider
slug: rider
published: true
category: devtools
color: red
logo: Rider
---

IDE JetBrains pour .NET et Unity. Développement C#, ASP.NET et game development.
`,ko=`---
name: Rust
slug: rust
published: true
category: pro-lang
color: orange
logo: Rust
---

Langage système performant avec gestion mémoire sécurisée sans garbage collector.
`,Co=`---
name: Sass
slug: sass
published: true
category: markup-style
color: pink
logo: Sass
---

Préprocesseur CSS qui facilite la factorisation et la gestion de grands projets.
`,jo=`---
name: Selenium
slug: selenium
published: true
category: test
color: green
logo: Selenium
---

Framework d'automatisation de tests pour navigateurs web.
`,To=`---
name: Skript
slug: skript
published: true
category: devtools
color: orange
logo: Skript
---

Langage de scripting simplifié pour créer des plugins Minecraft sans Java. Syntaxe proche de l'anglais naturel.
`,Lo=`---
name: Spigot
slug: spigot
published: true
category: devtools
color: orange
logo: Spigot
---

Serveur Minecraft modifié avec API pour plugins. Base de nombreux serveurs communautaires.
`,Po=`---
name: Spring
slug: spring
published: true
category: framework
color: green
logo: Spring
---

Framework Java pour le développement d'applications enterprise et microservices.
`,qo=`---
name: Spring Boot
slug: springboot
published: false
category: framework
color: green
logo: Spring
---

Framework Java pour créer rapidement des applications Spring autonomes et prêtes pour la production.
`,Io=`---
name: SQLite
slug: sqlite
published: true
category: db
color: gray
logo: SQLite
---

Base de données légère intégrée. Idéale pour des projets locaux ou embarqués.
`,Eo=`---
name: Streamlit
slug: streamlit
published: true
category: framework
color: red
logo: Streamlit
---

Framework Python pour créer rapidement des applications web de data science et machine learning.
`,Do=`---
name: Svelte
slug: svelte
published: true
category: framework
color: orange
logo: Svelte
---

# Svelte

[\`Svelte\`](https://svelte.dev/) is a free and open-source front end component framework or language created by Rich Harris and maintained by the Svelte core team members. Svelte is not a monolithic JavaScript library imported by applications: instead, Svelte compiles HTML templates to specialized code that manipulates the DOM directly, which may reduce the size of transferred files and give better client performance. Application code is also processed by the compiler, inserting calls to automatically recompute data and re-render UI elements when the data they depend on is modified. This also avoids the overhead associated with runtime intermediate representations, such as virtual DOM, unlike traditional frameworks (such as React and Vue) which carry out the bulk of their work at runtime, i.e. in the browser.

The compiler itself is written in TypeScript. Its source code is licensed under MIT License and hosted on GitHub.

<br/>

Svelte is :

- compiled : Svelte shifts as much work as possible out of the browser and into your build step. No more manual optimisations — just faster, more efficient apps.
- compact : Write breathtakingly concise components using languages you already know — HTML, CSS and JavaScript. Oh, and your application bundles will be tiny as well.
- complete : Built-in scoped styling, state management, motion primitives, form bindings and more — don't waste time trawling npm for the bare essentials. It's all here.

## Example

\`\`\`ts
<script>
    let count = 1;
    $: doubled = count * 2;
<\/script>

<p>{count} * 2 = {doubled}</p>

<button on:click={() => count = count + 1}>Count</button>
\`\`\`

> Svelte is a free and open-source front end component framework or language created by Rich Harris and maintained by the Svelte core team members.
`,Mo=`---
name: Tailwind CSS
slug: tailwind
published: true
category: markup-style
color: cyan
logo: TailwindCSS
---

Framework CSS utility-first pour créer des interfaces rapidement sans quitter le HTML.
`,Fo=`---
name: Travail en équipe
slug: teamwork
published: true
category: soft
color: green
logo: Teamwork
---

Collaboration efficace dans des équipes pluridisciplinaires. Communication claire et partage de responsabilités.
`,No=`---
name: TensorFlow
slug: tensorflow
published: true
category: library
color: orange
logo: TensorFlow
---

Bibliothèque de machine learning et deep learning de Google.
`,Oo=`---
name: TypeScript
slug: ts
published: true
category: pro-lang
color: blue
logo: TypeScript
---

Superset de JavaScript typé statiquement. Utilisé pour des projets robustes avec des IDE performants.
`,Ro=`---
name: Unity
slug: unity
published: true
category: devtools
color: gray
logo: Unity
---

Moteur de jeu multiplateforme pour le développement de jeux 2D/3D et expériences VR/AR.
`,Bo=`---
name: Velocity
slug: velocity
published: true
category: devtools
color: cyan
logo: Velocity
---

Proxy Minecraft moderne et performant. Gestion de réseaux de serveurs avec API plugin avancée.
`,Go=`---
name: VS Code
slug: vscode
published: true
category: devtools
color: blue
logo: VSCode
---

Éditeur de code léger et extensible de Microsoft. Extensions, debugging intégré et terminal.
`,Ho=`---
name: Vue.js
slug: vuejs
published: true
category: framework
color: green
logo: VueJs
---

Framework JavaScript progressif pour construire des interfaces utilisateur réactives.
`,Uo=`---
name: WebStorm
slug: webstorm
published: true
category: devtools
color: cyan
logo: WebStorm
---

IDE JetBrains pour le développement JavaScript et TypeScript. Support React, Vue, Angular et Node.js.
`,zo=`---
name: Microsoft Word
slug: word
published: true
category: devtools
color: blue
logo: Word
---

Traitement de texte pour documentation technique, rapports et rédaction professionnelle.
`,Vo=`---
name: Stagiaire – Rénovation administrative
slug: stagiaire-aghb
published: true
shortDescription: "Stage d'un mois dédié à la transformation digitale d'une entreprise du BTP."
company: AGH Bâtiment
type: Développement Web
contract: Internship
location: France
color: teal
logo: AGH
period:
  from: 2022-08-01
  to: 2022-08-31
skills:
  - html
  - css
  - js
links: []
---

## 🛠️ Développeur Web – AGH Bâtiment (Stage)

**📍 Lieu :** France  
**📅 Période :** Août 2022  
**📝 Contrat :** Internship (Stage de 1 mois)

---

### 🧱 À propos d'AGH Bâtiment

**AGH Bâtiment** est une entreprise spécialisée dans les travaux de rénovation et de construction. Elle souhaitait moderniser son organisation interne et sa présence en ligne, en automatisant certaines tâches administratives et en mettant en valeur ses services via un site web.

---

### 💻 Mes missions

Pendant ce stage, j'ai contribué à la transformation digitale de l'entreprise en développant plusieurs outils personnalisés :

- 🧩 **Création d'interfaces de gestion** internes simples et fonctionnelles
- 🌐 **Conception du site web vitrine** de l'entreprise (HTML/CSS/JavaScript)
- 🎨 **Conception du logo vectoriel** en SVG (scalable et responsive)
- 🗂️ Participation à l'organisation des documents numériques

---

### 🔧 Stack principale

- HTML, CSS, JavaScript
- SVG pour le logo vectoriel
- Notions d'UX/UI design appliquées à un contexte réel
`,Jo=`---
name: Full-Stack Developer
slug: fullstack-synchrotron-soleil
published: true
shortDescription: Développeur full-stack en alternance au sein d'un grand équipement scientifique. Développement Java/React, tests automatisés, CI/CD et administration Linux.
company: Synchrotron SOLEIL
type: Développement Full-Stack
contract: Apprenticeship
location: Saint-Aubin, France
color: orange
logo: Soleil
period:
  from: 2023-09-01
skills:
  - java
  - reactjs
  - docker
  - ci-cd
  - linux
links:
  - label: Site Web
    to: https://www.synchrotron-soleil.fr/
    newTab: true
---

## 🧪 Full‑Stack Developer – Synchrotron SOLEIL (Work-Study)

**📍 Lieu :** Saint-Aubin, France  
**📅 Période :** Depuis septembre 2023  
**📝 Contrat :** Work-Study (alternance école / entreprise)  
**🌐 Site :** [www.synchrotron-soleil.fr](https://www.synchrotron-soleil.fr)

---

### 🔬 À propos de Synchrotron SOLEIL

Le **Synchrotron SOLEIL** est un grand équipement scientifique français de rayonnement synchrotron, au service de la recherche fondamentale et appliquée. Il permet l'analyse fine de la matière pour des domaines variés comme la chimie, la biologie, les matériaux, l'environnement ou encore l'industrie pharmaceutique.

---

### 💻 Mes missions

En tant que développeur full-stack, j'interviens sur des applications critiques pour la gestion des utilisateurs et des faisceaux au sein de l'infrastructure :

- 🧪 **Développement de tests automatisés** pour des modules en production (ex. : STD, BAGmx, BAGnotmx, BOD)
- 🚀 **Mise en place et amélioration de pipelines CI/CD**
- 🧩 **Développement full-stack** :
  - **Back-end** : Java, Node.js
  - **Front-end** : React.js
- 🐧 **Administration de serveurs Linux (Debian / Red Hat)**
- 📦 Utilisation de **Docker** pour les environnements de test

---

### 🔧 Stack principale

- Java, Node.js, React
- Docker, CI/CD (GitLab CI)
- Linux (Debian, Red Hat)
- Tests automatisés (JUnit, Cypress, etc.)
`,Yo=`---
name: ESIEA
slug: master-esiea
published: true
shortDescription: Master en ingénierie informatique en alternance. Spécialisation en architecture logicielle, sécurité, réseaux et technologies immersives.
degree: Master en ingénierie informatique
organization: ESIEA
location: France
color: deepskyblue
logo: ESIEA
period:
  from: 2024-01-01
  to: 2026-06-01
subjects: []
links:
  - label: Site web ESIEA
    to: https://www.esiea.fr
    newTab: true
---

## 🎓 ESIEA – Master en ingénierie informatique

**📍 Localisation :** Paris / Ivry-sur-Seine, France  
**📅 Période :** 2024 – 2026  
**🎓 Niveau :** Bac+5 – RNCP Niveau 7 (31678)  
**🌐 Site :** [https://www.esiea.fr](https://www.esiea.fr)

L'ESIEA est une école d'ingénieurs reconnue, spécialisée dans les technologies numériques. J'y poursuis actuellement un Master en ingénierie informatique, en alternance.

**Axes principaux :**
- Architecture logicielle, sécurité et réseaux
- Réalité virtuelle et innovation technologique
- Gestion de projet agile
- Approche humaine du numérique (projets éthiques et collaboratifs)

**Projets marquants :**
- **Développement d'une application de réalité virtuelle** pour la formation en entreprise, intégrant des éléments de gamification.
- **Mise en place d'un système de sécurité réseau** pour une PME, incluant l'analyse des risques et la configuration de pare-feu.
- **Participation à un projet de recherche** sur l'impact des technologies numériques sur la société, avec une approche éthique et responsable.

**Compétences développées :**
- Maîtrise des technologies de développement web et mobile
- Expertise en sécurité informatique et gestion des réseaux
- Capacité à travailler en équipe sur des projets complexes
- Sensibilisation aux enjeux éthiques et sociétaux du numérique

**Pourquoi l'ESIEA ?**
L'ESIEA se distingue par son approche innovante et humaine de l'ingénierie informatique. L'école met un point d'honneur à former des ingénieurs capables de répondre aux défis technologiques tout en intégrant une dimension éthique et sociale. Les projets collaboratifs et l'alternance permettent d'acquérir une expérience concrète et de développer des compétences techniques solides.
`,Wo=`---
name: InTech
slug: bachelor-intech
published: true
shortDescription: Bachelor en ingénierie informatique orienté projets. Formation complète en développement full-stack JavaScript/TypeScript avec React, Node.js et méthodologies agiles.
degree: Bachelor en ingénierie informatique
organization: InTech
location: France
color: limegreen
logo: InTech
period:
  from: 2021-01-01
  to: 2023-06-01
subjects: []
links:
  - label: Site web InTech
    to: https://www.intechinfo.fr
    newTab: true
---

## 💻 InTech – Bachelor en ingénierie informatique

**📍 Localisation :** Paris, France  
**📅 Période :** 2021 – 2023  
**🎓 Niveau :** Bac+3  
**🌐 Site :** [https://intechinfo.fr](https://intechinfo.fr)

InTech est une école orientée projets, spécialisée dans les technologies logicielles. Ce Bachelor m'a permis de développer mes compétences en développement web et mobile via des projets concrets et du travail en équipe.

**Compétences clés :**
- Full-stack JavaScript / TypeScript
- Front-end (React, Svelte)
- Back-end (Node.js)
- Bases de données, intégration continue, UX/UI
`,Ko=`---
name: Pierre Mendès France
slug: bac-pmf-2020
published: true
shortDescription: Baccalauréat général avec spécialités SVT et SES. Formation pluridisciplinaire alliant rigueur scientifique et culture économique.
degree: Baccalauréat (SVT / SES)
organization: Lycée Pierre Mendès France
location: Savigny-le-Temple, France
color: moccasin
logo: PMF
period:
  from: 2017-09-01
  to: 2020-07-01
subjects:
  - SVT
  - SES
links:
  - label: Site Web PMF
    to: https://www.lyceepmf-savigny77.fr
    newTab: true
---

## 🧬 Lycée Pierre Mendès France – Baccalauréat général

**📍 Localisation :** Savigny-le-Temple, France  
**📅 Période :** 2017 – 2020  
**🎓 Spécialités :** Sciences de la Vie et de la Terre (SVT), Sciences Économiques et Sociales (SES)  
**🌐 Site :** [https://www.lyceepmf-savigny77.fr](https://www.lyceepmf-savigny77.fr)

Obtention du baccalauréat général avec un profil pluridisciplinaire mêlant sciences naturelles, économie et méthodologie. Ce socle m'a donné de la rigueur, une bonne culture scientifique, et l'envie de créer.

**Points forts :**
- Projet personnel encadré (TPE)
- Culture scientifique et raisonnement critique
- Sensibilisation à l'économie et à la société
`,$o=`---
title: À propos de moi
attachments:
  - label: Mon CV
    src: /pdf/cv.pdf
  - label: Portfolio PDF
    src: /pdf/portfolio.pdf
---

:::profile-card
![Photo de profil](https://avatars.githubusercontent.com/u/48055002)
::handwritten[Bonjour, je suis Alexy]{fontSize=32 duration=2500 height=120}
:::

Je suis **développeur full-stack** passionné par la technologie et l'innovation. Actuellement en alternance au **Synchrotron SOLEIL** et en formation à l'**ESIEA** pour un Master en ingénierie informatique.

---

## 🚀 Mon parcours

Mon aventure dans le développement a commencé par curiosité, et s'est transformée en véritable passion. Du **développement web** aux **applications full-stack**, en passant par le **DevOps** et les **systèmes distribués**, j'aime explorer tous les aspects de l'informatique.

### Formation

- 🎓 **ESIEA** (2024-2026) - Master en ingénierie informatique
- 💻 **InTech** (2021-2023) - Bachelor en développement logiciel
- 📚 **Lycée Pierre Mendès France** (2017-2020) - Baccalauréat général

### Expérience

- ☀️ **Synchrotron SOLEIL** (depuis 2023) - Développeur Full-Stack en alternance
- 🏗️ **AGH Bâtiment** (2022) - Stage développement web

---

## 💻 Compétences techniques

### Langages & Frameworks
- **Frontend** : React, Svelte, TypeScript, HTML/CSS
- **Backend** : Java, Node.js, Python
- **Base de données** : PostgreSQL, MongoDB, SQLite

### Outils & DevOps
- Git, Docker, CI/CD (GitLab CI)
- Linux (Debian, Red Hat)
- Tests automatisés (JUnit, Cypress)

---

## 🎵 Au-delà du code

Je ne suis pas qu'un développeur ! La **musique** occupe une place importante dans ma vie. Je joue du piano et j'aime explorer différents genres musicaux. Cette passion nourrit ma créativité et m'aide à aborder les problèmes techniques avec une perspective unique.

### Mes centres d'intérêt

- 🎹 **Musique** - Piano et production musicale
- 📖 **Lecture** - Science-fiction et développement personnel
- 🎮 **Gaming** - Jeux de stratégie et indie games
- 🌍 **Voyages** - Découverte de nouvelles cultures

---

## 📫 Me contacter

N'hésitez pas à me contacter pour discuter d'un projet, d'une opportunité ou simplement pour échanger !

- 📧 **Email** : [contact@alexyvanot.fr](mailto:contact@alexyvanot.fr)
- 💼 **LinkedIn** : [linkedin.com/in/vanot](https://linkedin.com/in/vanot)
- 🐙 **GitHub** : [github.com/alexyvanot](https://github.com/alexyvanot)

---

> *"Le code, c'est de la poésie qui compile."*
`,Qo=`# Site Configuration
# Ce fichier contient les paramètres globaux du site

firstName: Alexy
lastName: VANOT
jobTitle: Full Stack Developer & Software Engineer
email: contact@alexyvanot.fr

# Bandeau "En construction"
inConstruction:
  enabled: true  # Mettre à false pour désactiver le bandeau
  title: "En cours de développement"
  message: "Les informations présentes sur ce site peuvent être incorrectes, merci de ne pas en prendre compte"

# Liens sociaux
socialLinks:
  - label: GitHub
    href: https://github.com/alexyvanot
    icon: i-carbon-logo-github
  - label: LinkedIn
    href: https://linkedin.com/in/vanot
    icon: i-carbon-logo-linkedin
  - label: Email
    href: mailto:contact@alexyvanot.fr
    icon: i-carbon-at
  - label: Blog
    href: /blog
    icon: i-carbon-blog
`,Xo=`# Page d'accueil
# Personnalise le contenu de ta page d'accueil ici

title: Accueil

hero:
  description: >
    Développeur Full-Stack passionné, je crée des applications web modernes
    et performantes. Actuellement en alternance au Synchrotron SOLEIL et 
    en Master à l'ESIEA.
`,Zo=`# Page CV
# Personnalise le contenu de ta page CV ici

title: CV
pdfPath: /pdf/CV_Alexy_Vanot.pdf
downloadLabel: Télécharger
fullscreenLabel: Plein écran
`,ea=`# Page Contact
# Personnalise le contenu de ta page Contact ici

title: Contact
description: N'hésitez pas à me contacter pour toute question ou opportunité professionnelle.
email: contact@alexyvanot.fr

# Labels du formulaire
form:
  nameLabel: Nom
  namePlaceholder: Votre nom
  emailLabel: Email
  emailPlaceholder: votre@email.com
  messageLabel: Message
  messagePlaceholder: Votre message...
  submitLabel: Envoyer
  sendingLabel: Envoi en cours...
  
# Messages de succès/erreur
messages:
  success: Message envoyé avec succès !
  error: Une erreur est survenue. Veuillez réessayer.
  validationError: Veuillez remplir tous les champs correctement.
`;/*! js-yaml 4.1.1 https://github.com/nodeca/js-yaml @license MIT */function tt(e){return typeof e>"u"||e===null}function na(e){return typeof e=="object"&&e!==null}function ta(e){return Array.isArray(e)?e:tt(e)?[]:[e]}function ia(e,n){var t,r,i,a;if(n)for(a=Object.keys(n),t=0,r=a.length;t<r;t+=1)i=a[t],e[i]=n[i];return e}function ra(e,n){var t="",r;for(r=0;r<n;r+=1)t+=e;return t}function oa(e){return e===0&&Number.NEGATIVE_INFINITY===1/e}var aa=tt,sa=na,la=ta,ua=ra,ca=oa,pa=ia,T={isNothing:aa,isObject:sa,toArray:la,repeat:ua,isNegativeZero:ca,extend:pa};function it(e,n){var t="",r=e.reason||"(unknown reason)";return e.mark?(e.mark.name&&(t+='in "'+e.mark.name+'" '),t+="("+(e.mark.line+1)+":"+(e.mark.column+1)+")",!n&&e.mark.snippet&&(t+=`

`+e.mark.snippet),r+" "+t):r}function ce(e,n){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=n,this.message=it(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}ce.prototype=Object.create(Error.prototype);ce.prototype.constructor=ce;ce.prototype.toString=function(n){return this.name+": "+it(this,n)};var q=ce;function Fe(e,n,t,r,i){var a="",o="",s=Math.floor(i/2)-1;return r-n>s&&(a=" ... ",n=r-s+a.length),t-r>s&&(o=" ...",t=r+s-o.length),{str:a+e.slice(n,t).replace(/\t/g,"→")+o,pos:r-n+a.length}}function Ne(e,n){return T.repeat(" ",n-e.length)+e}function da(e,n){if(n=Object.create(n||null),!e.buffer)return null;n.maxLength||(n.maxLength=79),typeof n.indent!="number"&&(n.indent=1),typeof n.linesBefore!="number"&&(n.linesBefore=3),typeof n.linesAfter!="number"&&(n.linesAfter=2);for(var t=/\r?\n|\r|\0/g,r=[0],i=[],a,o=-1;a=t.exec(e.buffer);)i.push(a.index),r.push(a.index+a[0].length),e.position<=a.index&&o<0&&(o=r.length-2);o<0&&(o=r.length-1);var s="",l,u,d=Math.min(e.line+n.linesAfter,i.length).toString().length,p=n.maxLength-(n.indent+d+3);for(l=1;l<=n.linesBefore&&!(o-l<0);l++)u=Fe(e.buffer,r[o-l],i[o-l],e.position-(r[o]-r[o-l]),p),s=T.repeat(" ",n.indent)+Ne((e.line-l+1).toString(),d)+" | "+u.str+`
`+s;for(u=Fe(e.buffer,r[o],i[o],e.position,p),s+=T.repeat(" ",n.indent)+Ne((e.line+1).toString(),d)+" | "+u.str+`
`,s+=T.repeat("-",n.indent+d+3+u.pos)+`^
`,l=1;l<=n.linesAfter&&!(o+l>=i.length);l++)u=Fe(e.buffer,r[o+l],i[o+l],e.position-(r[o]-r[o+l]),p),s+=T.repeat(" ",n.indent)+Ne((e.line+l+1).toString(),d)+" | "+u.str+`
`;return s.replace(/\n$/,"")}var ma=da,ga=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],fa=["scalar","sequence","mapping"];function ha(e){var n={};return e!==null&&Object.keys(e).forEach(function(t){e[t].forEach(function(r){n[String(r)]=t})}),n}function va(e,n){if(n=n||{},Object.keys(n).forEach(function(t){if(ga.indexOf(t)===-1)throw new q('Unknown option "'+t+'" is met in definition of "'+e+'" YAML type.')}),this.options=n,this.tag=e,this.kind=n.kind||null,this.resolve=n.resolve||function(){return!0},this.construct=n.construct||function(t){return t},this.instanceOf=n.instanceOf||null,this.predicate=n.predicate||null,this.represent=n.represent||null,this.representName=n.representName||null,this.defaultStyle=n.defaultStyle||null,this.multi=n.multi||!1,this.styleAliases=ha(n.styleAliases||null),fa.indexOf(this.kind)===-1)throw new q('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')}var L=va;function jn(e,n){var t=[];return e[n].forEach(function(r){var i=t.length;t.forEach(function(a,o){a.tag===r.tag&&a.kind===r.kind&&a.multi===r.multi&&(i=o)}),t[i]=r}),t}function ba(){var e={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},n,t;function r(i){i.multi?(e.multi[i.kind].push(i),e.multi.fallback.push(i)):e[i.kind][i.tag]=e.fallback[i.tag]=i}for(n=0,t=arguments.length;n<t;n+=1)arguments[n].forEach(r);return e}function Ue(e){return this.extend(e)}Ue.prototype.extend=function(n){var t=[],r=[];if(n instanceof L)r.push(n);else if(Array.isArray(n))r=r.concat(n);else if(n&&(Array.isArray(n.implicit)||Array.isArray(n.explicit)))n.implicit&&(t=t.concat(n.implicit)),n.explicit&&(r=r.concat(n.explicit));else throw new q("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");t.forEach(function(a){if(!(a instanceof L))throw new q("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(a.loadKind&&a.loadKind!=="scalar")throw new q("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(a.multi)throw new q("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),r.forEach(function(a){if(!(a instanceof L))throw new q("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var i=Object.create(Ue.prototype);return i.implicit=(this.implicit||[]).concat(t),i.explicit=(this.explicit||[]).concat(r),i.compiledImplicit=jn(i,"implicit"),i.compiledExplicit=jn(i,"explicit"),i.compiledTypeMap=ba(i.compiledImplicit,i.compiledExplicit),i};var rt=Ue,ot=new L("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return e!==null?e:""}}),at=new L("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return e!==null?e:[]}}),st=new L("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return e!==null?e:{}}}),lt=new rt({explicit:[ot,at,st]});function ya(e){if(e===null)return!0;var n=e.length;return n===1&&e==="~"||n===4&&(e==="null"||e==="Null"||e==="NULL")}function _a(){return null}function xa(e){return e===null}var ut=new L("tag:yaml.org,2002:null",{kind:"scalar",resolve:ya,construct:_a,predicate:xa,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function Sa(e){if(e===null)return!1;var n=e.length;return n===4&&(e==="true"||e==="True"||e==="TRUE")||n===5&&(e==="false"||e==="False"||e==="FALSE")}function Aa(e){return e==="true"||e==="True"||e==="TRUE"}function wa(e){return Object.prototype.toString.call(e)==="[object Boolean]"}var ct=new L("tag:yaml.org,2002:bool",{kind:"scalar",resolve:Sa,construct:Aa,predicate:wa,represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"});function ka(e){return 48<=e&&e<=57||65<=e&&e<=70||97<=e&&e<=102}function Ca(e){return 48<=e&&e<=55}function ja(e){return 48<=e&&e<=57}function Ta(e){if(e===null)return!1;var n=e.length,t=0,r=!1,i;if(!n)return!1;if(i=e[t],(i==="-"||i==="+")&&(i=e[++t]),i==="0"){if(t+1===n)return!0;if(i=e[++t],i==="b"){for(t++;t<n;t++)if(i=e[t],i!=="_"){if(i!=="0"&&i!=="1")return!1;r=!0}return r&&i!=="_"}if(i==="x"){for(t++;t<n;t++)if(i=e[t],i!=="_"){if(!ka(e.charCodeAt(t)))return!1;r=!0}return r&&i!=="_"}if(i==="o"){for(t++;t<n;t++)if(i=e[t],i!=="_"){if(!Ca(e.charCodeAt(t)))return!1;r=!0}return r&&i!=="_"}}if(i==="_")return!1;for(;t<n;t++)if(i=e[t],i!=="_"){if(!ja(e.charCodeAt(t)))return!1;r=!0}return!(!r||i==="_")}function La(e){var n=e,t=1,r;if(n.indexOf("_")!==-1&&(n=n.replace(/_/g,"")),r=n[0],(r==="-"||r==="+")&&(r==="-"&&(t=-1),n=n.slice(1),r=n[0]),n==="0")return 0;if(r==="0"){if(n[1]==="b")return t*parseInt(n.slice(2),2);if(n[1]==="x")return t*parseInt(n.slice(2),16);if(n[1]==="o")return t*parseInt(n.slice(2),8)}return t*parseInt(n,10)}function Pa(e){return Object.prototype.toString.call(e)==="[object Number]"&&e%1===0&&!T.isNegativeZero(e)}var pt=new L("tag:yaml.org,2002:int",{kind:"scalar",resolve:Ta,construct:La,predicate:Pa,represent:{binary:function(e){return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){return e>=0?"0o"+e.toString(8):"-0o"+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),qa=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function Ia(e){return!(e===null||!qa.test(e)||e[e.length-1]==="_")}function Ea(e){var n,t;return n=e.replace(/_/g,"").toLowerCase(),t=n[0]==="-"?-1:1,"+-".indexOf(n[0])>=0&&(n=n.slice(1)),n===".inf"?t===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:n===".nan"?NaN:t*parseFloat(n,10)}var Da=/^[-+]?[0-9]+e/;function Ma(e,n){var t;if(isNaN(e))switch(n){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(n){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(n){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(T.isNegativeZero(e))return"-0.0";return t=e.toString(10),Da.test(t)?t.replace("e",".e"):t}function Fa(e){return Object.prototype.toString.call(e)==="[object Number]"&&(e%1!==0||T.isNegativeZero(e))}var dt=new L("tag:yaml.org,2002:float",{kind:"scalar",resolve:Ia,construct:Ea,predicate:Fa,represent:Ma,defaultStyle:"lowercase"}),mt=lt.extend({implicit:[ut,ct,pt,dt]}),gt=mt,ft=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),ht=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function Na(e){return e===null?!1:ft.exec(e)!==null||ht.exec(e)!==null}function Oa(e){var n,t,r,i,a,o,s,l=0,u=null,d,p,m;if(n=ft.exec(e),n===null&&(n=ht.exec(e)),n===null)throw new Error("Date resolve error");if(t=+n[1],r=+n[2]-1,i=+n[3],!n[4])return new Date(Date.UTC(t,r,i));if(a=+n[4],o=+n[5],s=+n[6],n[7]){for(l=n[7].slice(0,3);l.length<3;)l+="0";l=+l}return n[9]&&(d=+n[10],p=+(n[11]||0),u=(d*60+p)*6e4,n[9]==="-"&&(u=-u)),m=new Date(Date.UTC(t,r,i,a,o,s,l)),u&&m.setTime(m.getTime()-u),m}function Ra(e){return e.toISOString()}var vt=new L("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:Na,construct:Oa,instanceOf:Date,represent:Ra});function Ba(e){return e==="<<"||e===null}var bt=new L("tag:yaml.org,2002:merge",{kind:"scalar",resolve:Ba}),Ze=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function Ga(e){if(e===null)return!1;var n,t,r=0,i=e.length,a=Ze;for(t=0;t<i;t++)if(n=a.indexOf(e.charAt(t)),!(n>64)){if(n<0)return!1;r+=6}return r%8===0}function Ha(e){var n,t,r=e.replace(/[\r\n=]/g,""),i=r.length,a=Ze,o=0,s=[];for(n=0;n<i;n++)n%4===0&&n&&(s.push(o>>16&255),s.push(o>>8&255),s.push(o&255)),o=o<<6|a.indexOf(r.charAt(n));return t=i%4*6,t===0?(s.push(o>>16&255),s.push(o>>8&255),s.push(o&255)):t===18?(s.push(o>>10&255),s.push(o>>2&255)):t===12&&s.push(o>>4&255),new Uint8Array(s)}function Ua(e){var n="",t=0,r,i,a=e.length,o=Ze;for(r=0;r<a;r++)r%3===0&&r&&(n+=o[t>>18&63],n+=o[t>>12&63],n+=o[t>>6&63],n+=o[t&63]),t=(t<<8)+e[r];return i=a%3,i===0?(n+=o[t>>18&63],n+=o[t>>12&63],n+=o[t>>6&63],n+=o[t&63]):i===2?(n+=o[t>>10&63],n+=o[t>>4&63],n+=o[t<<2&63],n+=o[64]):i===1&&(n+=o[t>>2&63],n+=o[t<<4&63],n+=o[64],n+=o[64]),n}function za(e){return Object.prototype.toString.call(e)==="[object Uint8Array]"}var yt=new L("tag:yaml.org,2002:binary",{kind:"scalar",resolve:Ga,construct:Ha,predicate:za,represent:Ua}),Va=Object.prototype.hasOwnProperty,Ja=Object.prototype.toString;function Ya(e){if(e===null)return!0;var n=[],t,r,i,a,o,s=e;for(t=0,r=s.length;t<r;t+=1){if(i=s[t],o=!1,Ja.call(i)!=="[object Object]")return!1;for(a in i)if(Va.call(i,a))if(!o)o=!0;else return!1;if(!o)return!1;if(n.indexOf(a)===-1)n.push(a);else return!1}return!0}function Wa(e){return e!==null?e:[]}var _t=new L("tag:yaml.org,2002:omap",{kind:"sequence",resolve:Ya,construct:Wa}),Ka=Object.prototype.toString;function $a(e){if(e===null)return!0;var n,t,r,i,a,o=e;for(a=new Array(o.length),n=0,t=o.length;n<t;n+=1){if(r=o[n],Ka.call(r)!=="[object Object]"||(i=Object.keys(r),i.length!==1))return!1;a[n]=[i[0],r[i[0]]]}return!0}function Qa(e){if(e===null)return[];var n,t,r,i,a,o=e;for(a=new Array(o.length),n=0,t=o.length;n<t;n+=1)r=o[n],i=Object.keys(r),a[n]=[i[0],r[i[0]]];return a}var xt=new L("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:$a,construct:Qa}),Xa=Object.prototype.hasOwnProperty;function Za(e){if(e===null)return!0;var n,t=e;for(n in t)if(Xa.call(t,n)&&t[n]!==null)return!1;return!0}function es(e){return e!==null?e:{}}var St=new L("tag:yaml.org,2002:set",{kind:"mapping",resolve:Za,construct:es}),en=gt.extend({implicit:[vt,bt],explicit:[yt,_t,xt,St]}),z=Object.prototype.hasOwnProperty,xe=1,At=2,wt=3,Se=4,Oe=1,ns=2,Tn=3,ts=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,is=/[\x85\u2028\u2029]/,rs=/[,\[\]\{\}]/,kt=/^(?:!|!!|![a-z\-]+!)$/i,Ct=/^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;function Ln(e){return Object.prototype.toString.call(e)}function O(e){return e===10||e===13}function V(e){return e===9||e===32}function E(e){return e===9||e===32||e===10||e===13}function Q(e){return e===44||e===91||e===93||e===123||e===125}function os(e){var n;return 48<=e&&e<=57?e-48:(n=e|32,97<=n&&n<=102?n-97+10:-1)}function as(e){return e===120?2:e===117?4:e===85?8:0}function ss(e){return 48<=e&&e<=57?e-48:-1}function Pn(e){return e===48?"\0":e===97?"\x07":e===98?"\b":e===116||e===9?"	":e===110?`
`:e===118?"\v":e===102?"\f":e===114?"\r":e===101?"\x1B":e===32?" ":e===34?'"':e===47?"/":e===92?"\\":e===78?"":e===95?" ":e===76?"\u2028":e===80?"\u2029":""}function ls(e){return e<=65535?String.fromCharCode(e):String.fromCharCode((e-65536>>10)+55296,(e-65536&1023)+56320)}function jt(e,n,t){n==="__proto__"?Object.defineProperty(e,n,{configurable:!0,enumerable:!0,writable:!0,value:t}):e[n]=t}var Tt=new Array(256),Lt=new Array(256);for(var W=0;W<256;W++)Tt[W]=Pn(W)?1:0,Lt[W]=Pn(W);function us(e,n){this.input=e,this.filename=n.filename||null,this.schema=n.schema||en,this.onWarning=n.onWarning||null,this.legacy=n.legacy||!1,this.json=n.json||!1,this.listener=n.listener||null,this.implicitTypes=this.schema.compiledImplicit,this.typeMap=this.schema.compiledTypeMap,this.length=e.length,this.position=0,this.line=0,this.lineStart=0,this.lineIndent=0,this.firstTabInLine=-1,this.documents=[]}function Pt(e,n){var t={name:e.filename,buffer:e.input.slice(0,-1),position:e.position,line:e.line,column:e.position-e.lineStart};return t.snippet=ma(t),new q(n,t)}function h(e,n){throw Pt(e,n)}function Ae(e,n){e.onWarning&&e.onWarning.call(null,Pt(e,n))}var qn={YAML:function(n,t,r){var i,a,o;n.version!==null&&h(n,"duplication of %YAML directive"),r.length!==1&&h(n,"YAML directive accepts exactly one argument"),i=/^([0-9]+)\.([0-9]+)$/.exec(r[0]),i===null&&h(n,"ill-formed argument of the YAML directive"),a=parseInt(i[1],10),o=parseInt(i[2],10),a!==1&&h(n,"unacceptable YAML version of the document"),n.version=r[0],n.checkLineBreaks=o<2,o!==1&&o!==2&&Ae(n,"unsupported YAML version of the document")},TAG:function(n,t,r){var i,a;r.length!==2&&h(n,"TAG directive accepts exactly two arguments"),i=r[0],a=r[1],kt.test(i)||h(n,"ill-formed tag handle (first argument) of the TAG directive"),z.call(n.tagMap,i)&&h(n,'there is a previously declared suffix for "'+i+'" tag handle'),Ct.test(a)||h(n,"ill-formed tag prefix (second argument) of the TAG directive");try{a=decodeURIComponent(a)}catch{h(n,"tag prefix is malformed: "+a)}n.tagMap[i]=a}};function U(e,n,t,r){var i,a,o,s;if(n<t){if(s=e.input.slice(n,t),r)for(i=0,a=s.length;i<a;i+=1)o=s.charCodeAt(i),o===9||32<=o&&o<=1114111||h(e,"expected valid JSON character");else ts.test(s)&&h(e,"the stream contains non-printable characters");e.result+=s}}function In(e,n,t,r){var i,a,o,s;for(T.isObject(t)||h(e,"cannot merge mappings; the provided source object is unacceptable"),i=Object.keys(t),o=0,s=i.length;o<s;o+=1)a=i[o],z.call(n,a)||(jt(n,a,t[a]),r[a]=!0)}function X(e,n,t,r,i,a,o,s,l){var u,d;if(Array.isArray(i))for(i=Array.prototype.slice.call(i),u=0,d=i.length;u<d;u+=1)Array.isArray(i[u])&&h(e,"nested arrays are not supported inside keys"),typeof i=="object"&&Ln(i[u])==="[object Object]"&&(i[u]="[object Object]");if(typeof i=="object"&&Ln(i)==="[object Object]"&&(i="[object Object]"),i=String(i),n===null&&(n={}),r==="tag:yaml.org,2002:merge")if(Array.isArray(a))for(u=0,d=a.length;u<d;u+=1)In(e,n,a[u],t);else In(e,n,a,t);else!e.json&&!z.call(t,i)&&z.call(n,i)&&(e.line=o||e.line,e.lineStart=s||e.lineStart,e.position=l||e.position,h(e,"duplicated mapping key")),jt(n,i,a),delete t[i];return n}function nn(e){var n;n=e.input.charCodeAt(e.position),n===10?e.position++:n===13?(e.position++,e.input.charCodeAt(e.position)===10&&e.position++):h(e,"a line break is expected"),e.line+=1,e.lineStart=e.position,e.firstTabInLine=-1}function j(e,n,t){for(var r=0,i=e.input.charCodeAt(e.position);i!==0;){for(;V(i);)i===9&&e.firstTabInLine===-1&&(e.firstTabInLine=e.position),i=e.input.charCodeAt(++e.position);if(n&&i===35)do i=e.input.charCodeAt(++e.position);while(i!==10&&i!==13&&i!==0);if(O(i))for(nn(e),i=e.input.charCodeAt(e.position),r++,e.lineIndent=0;i===32;)e.lineIndent++,i=e.input.charCodeAt(++e.position);else break}return t!==-1&&r!==0&&e.lineIndent<t&&Ae(e,"deficient indentation"),r}function Ce(e){var n=e.position,t;return t=e.input.charCodeAt(n),!!((t===45||t===46)&&t===e.input.charCodeAt(n+1)&&t===e.input.charCodeAt(n+2)&&(n+=3,t=e.input.charCodeAt(n),t===0||E(t)))}function tn(e,n){n===1?e.result+=" ":n>1&&(e.result+=T.repeat(`
`,n-1))}function cs(e,n,t){var r,i,a,o,s,l,u,d,p=e.kind,m=e.result,f;if(f=e.input.charCodeAt(e.position),E(f)||Q(f)||f===35||f===38||f===42||f===33||f===124||f===62||f===39||f===34||f===37||f===64||f===96||(f===63||f===45)&&(i=e.input.charCodeAt(e.position+1),E(i)||t&&Q(i)))return!1;for(e.kind="scalar",e.result="",a=o=e.position,s=!1;f!==0;){if(f===58){if(i=e.input.charCodeAt(e.position+1),E(i)||t&&Q(i))break}else if(f===35){if(r=e.input.charCodeAt(e.position-1),E(r))break}else{if(e.position===e.lineStart&&Ce(e)||t&&Q(f))break;if(O(f))if(l=e.line,u=e.lineStart,d=e.lineIndent,j(e,!1,-1),e.lineIndent>=n){s=!0,f=e.input.charCodeAt(e.position);continue}else{e.position=o,e.line=l,e.lineStart=u,e.lineIndent=d;break}}s&&(U(e,a,o,!1),tn(e,e.line-l),a=o=e.position,s=!1),V(f)||(o=e.position+1),f=e.input.charCodeAt(++e.position)}return U(e,a,o,!1),e.result?!0:(e.kind=p,e.result=m,!1)}function ps(e,n){var t,r,i;if(t=e.input.charCodeAt(e.position),t!==39)return!1;for(e.kind="scalar",e.result="",e.position++,r=i=e.position;(t=e.input.charCodeAt(e.position))!==0;)if(t===39)if(U(e,r,e.position,!0),t=e.input.charCodeAt(++e.position),t===39)r=e.position,e.position++,i=e.position;else return!0;else O(t)?(U(e,r,i,!0),tn(e,j(e,!1,n)),r=i=e.position):e.position===e.lineStart&&Ce(e)?h(e,"unexpected end of the document within a single quoted scalar"):(e.position++,i=e.position);h(e,"unexpected end of the stream within a single quoted scalar")}function ds(e,n){var t,r,i,a,o,s;if(s=e.input.charCodeAt(e.position),s!==34)return!1;for(e.kind="scalar",e.result="",e.position++,t=r=e.position;(s=e.input.charCodeAt(e.position))!==0;){if(s===34)return U(e,t,e.position,!0),e.position++,!0;if(s===92){if(U(e,t,e.position,!0),s=e.input.charCodeAt(++e.position),O(s))j(e,!1,n);else if(s<256&&Tt[s])e.result+=Lt[s],e.position++;else if((o=as(s))>0){for(i=o,a=0;i>0;i--)s=e.input.charCodeAt(++e.position),(o=os(s))>=0?a=(a<<4)+o:h(e,"expected hexadecimal character");e.result+=ls(a),e.position++}else h(e,"unknown escape sequence");t=r=e.position}else O(s)?(U(e,t,r,!0),tn(e,j(e,!1,n)),t=r=e.position):e.position===e.lineStart&&Ce(e)?h(e,"unexpected end of the document within a double quoted scalar"):(e.position++,r=e.position)}h(e,"unexpected end of the stream within a double quoted scalar")}function ms(e,n){var t=!0,r,i,a,o=e.tag,s,l=e.anchor,u,d,p,m,f,b=Object.create(null),y,g,v,_;if(_=e.input.charCodeAt(e.position),_===91)d=93,f=!1,s=[];else if(_===123)d=125,f=!0,s={};else return!1;for(e.anchor!==null&&(e.anchorMap[e.anchor]=s),_=e.input.charCodeAt(++e.position);_!==0;){if(j(e,!0,n),_=e.input.charCodeAt(e.position),_===d)return e.position++,e.tag=o,e.anchor=l,e.kind=f?"mapping":"sequence",e.result=s,!0;t?_===44&&h(e,"expected the node content, but found ','"):h(e,"missed comma between flow collection entries"),g=y=v=null,p=m=!1,_===63&&(u=e.input.charCodeAt(e.position+1),E(u)&&(p=m=!0,e.position++,j(e,!0,n))),r=e.line,i=e.lineStart,a=e.position,Z(e,n,xe,!1,!0),g=e.tag,y=e.result,j(e,!0,n),_=e.input.charCodeAt(e.position),(m||e.line===r)&&_===58&&(p=!0,_=e.input.charCodeAt(++e.position),j(e,!0,n),Z(e,n,xe,!1,!0),v=e.result),f?X(e,s,b,g,y,v,r,i,a):p?s.push(X(e,null,b,g,y,v,r,i,a)):s.push(y),j(e,!0,n),_=e.input.charCodeAt(e.position),_===44?(t=!0,_=e.input.charCodeAt(++e.position)):t=!1}h(e,"unexpected end of the stream within a flow collection")}function gs(e,n){var t,r,i=Oe,a=!1,o=!1,s=n,l=0,u=!1,d,p;if(p=e.input.charCodeAt(e.position),p===124)r=!1;else if(p===62)r=!0;else return!1;for(e.kind="scalar",e.result="";p!==0;)if(p=e.input.charCodeAt(++e.position),p===43||p===45)Oe===i?i=p===43?Tn:ns:h(e,"repeat of a chomping mode identifier");else if((d=ss(p))>=0)d===0?h(e,"bad explicit indentation width of a block scalar; it cannot be less than one"):o?h(e,"repeat of an indentation width identifier"):(s=n+d-1,o=!0);else break;if(V(p)){do p=e.input.charCodeAt(++e.position);while(V(p));if(p===35)do p=e.input.charCodeAt(++e.position);while(!O(p)&&p!==0)}for(;p!==0;){for(nn(e),e.lineIndent=0,p=e.input.charCodeAt(e.position);(!o||e.lineIndent<s)&&p===32;)e.lineIndent++,p=e.input.charCodeAt(++e.position);if(!o&&e.lineIndent>s&&(s=e.lineIndent),O(p)){l++;continue}if(e.lineIndent<s){i===Tn?e.result+=T.repeat(`
`,a?1+l:l):i===Oe&&a&&(e.result+=`
`);break}for(r?V(p)?(u=!0,e.result+=T.repeat(`
`,a?1+l:l)):u?(u=!1,e.result+=T.repeat(`
`,l+1)):l===0?a&&(e.result+=" "):e.result+=T.repeat(`
`,l):e.result+=T.repeat(`
`,a?1+l:l),a=!0,o=!0,l=0,t=e.position;!O(p)&&p!==0;)p=e.input.charCodeAt(++e.position);U(e,t,e.position,!1)}return!0}function En(e,n){var t,r=e.tag,i=e.anchor,a=[],o,s=!1,l;if(e.firstTabInLine!==-1)return!1;for(e.anchor!==null&&(e.anchorMap[e.anchor]=a),l=e.input.charCodeAt(e.position);l!==0&&(e.firstTabInLine!==-1&&(e.position=e.firstTabInLine,h(e,"tab characters must not be used in indentation")),!(l!==45||(o=e.input.charCodeAt(e.position+1),!E(o))));){if(s=!0,e.position++,j(e,!0,-1)&&e.lineIndent<=n){a.push(null),l=e.input.charCodeAt(e.position);continue}if(t=e.line,Z(e,n,wt,!1,!0),a.push(e.result),j(e,!0,-1),l=e.input.charCodeAt(e.position),(e.line===t||e.lineIndent>n)&&l!==0)h(e,"bad indentation of a sequence entry");else if(e.lineIndent<n)break}return s?(e.tag=r,e.anchor=i,e.kind="sequence",e.result=a,!0):!1}function fs(e,n,t){var r,i,a,o,s,l,u=e.tag,d=e.anchor,p={},m=Object.create(null),f=null,b=null,y=null,g=!1,v=!1,_;if(e.firstTabInLine!==-1)return!1;for(e.anchor!==null&&(e.anchorMap[e.anchor]=p),_=e.input.charCodeAt(e.position);_!==0;){if(!g&&e.firstTabInLine!==-1&&(e.position=e.firstTabInLine,h(e,"tab characters must not be used in indentation")),r=e.input.charCodeAt(e.position+1),a=e.line,(_===63||_===58)&&E(r))_===63?(g&&(X(e,p,m,f,b,null,o,s,l),f=b=y=null),v=!0,g=!0,i=!0):g?(g=!1,i=!0):h(e,"incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"),e.position+=1,_=r;else{if(o=e.line,s=e.lineStart,l=e.position,!Z(e,t,At,!1,!0))break;if(e.line===a){for(_=e.input.charCodeAt(e.position);V(_);)_=e.input.charCodeAt(++e.position);if(_===58)_=e.input.charCodeAt(++e.position),E(_)||h(e,"a whitespace character is expected after the key-value separator within a block mapping"),g&&(X(e,p,m,f,b,null,o,s,l),f=b=y=null),v=!0,g=!1,i=!1,f=e.tag,b=e.result;else if(v)h(e,"can not read an implicit mapping pair; a colon is missed");else return e.tag=u,e.anchor=d,!0}else if(v)h(e,"can not read a block mapping entry; a multiline key may not be an implicit key");else return e.tag=u,e.anchor=d,!0}if((e.line===a||e.lineIndent>n)&&(g&&(o=e.line,s=e.lineStart,l=e.position),Z(e,n,Se,!0,i)&&(g?b=e.result:y=e.result),g||(X(e,p,m,f,b,y,o,s,l),f=b=y=null),j(e,!0,-1),_=e.input.charCodeAt(e.position)),(e.line===a||e.lineIndent>n)&&_!==0)h(e,"bad indentation of a mapping entry");else if(e.lineIndent<n)break}return g&&X(e,p,m,f,b,null,o,s,l),v&&(e.tag=u,e.anchor=d,e.kind="mapping",e.result=p),v}function hs(e){var n,t=!1,r=!1,i,a,o;if(o=e.input.charCodeAt(e.position),o!==33)return!1;if(e.tag!==null&&h(e,"duplication of a tag property"),o=e.input.charCodeAt(++e.position),o===60?(t=!0,o=e.input.charCodeAt(++e.position)):o===33?(r=!0,i="!!",o=e.input.charCodeAt(++e.position)):i="!",n=e.position,t){do o=e.input.charCodeAt(++e.position);while(o!==0&&o!==62);e.position<e.length?(a=e.input.slice(n,e.position),o=e.input.charCodeAt(++e.position)):h(e,"unexpected end of the stream within a verbatim tag")}else{for(;o!==0&&!E(o);)o===33&&(r?h(e,"tag suffix cannot contain exclamation marks"):(i=e.input.slice(n-1,e.position+1),kt.test(i)||h(e,"named tag handle cannot contain such characters"),r=!0,n=e.position+1)),o=e.input.charCodeAt(++e.position);a=e.input.slice(n,e.position),rs.test(a)&&h(e,"tag suffix cannot contain flow indicator characters")}a&&!Ct.test(a)&&h(e,"tag name cannot contain such characters: "+a);try{a=decodeURIComponent(a)}catch{h(e,"tag name is malformed: "+a)}return t?e.tag=a:z.call(e.tagMap,i)?e.tag=e.tagMap[i]+a:i==="!"?e.tag="!"+a:i==="!!"?e.tag="tag:yaml.org,2002:"+a:h(e,'undeclared tag handle "'+i+'"'),!0}function vs(e){var n,t;if(t=e.input.charCodeAt(e.position),t!==38)return!1;for(e.anchor!==null&&h(e,"duplication of an anchor property"),t=e.input.charCodeAt(++e.position),n=e.position;t!==0&&!E(t)&&!Q(t);)t=e.input.charCodeAt(++e.position);return e.position===n&&h(e,"name of an anchor node must contain at least one character"),e.anchor=e.input.slice(n,e.position),!0}function bs(e){var n,t,r;if(r=e.input.charCodeAt(e.position),r!==42)return!1;for(r=e.input.charCodeAt(++e.position),n=e.position;r!==0&&!E(r)&&!Q(r);)r=e.input.charCodeAt(++e.position);return e.position===n&&h(e,"name of an alias node must contain at least one character"),t=e.input.slice(n,e.position),z.call(e.anchorMap,t)||h(e,'unidentified alias "'+t+'"'),e.result=e.anchorMap[t],j(e,!0,-1),!0}function Z(e,n,t,r,i){var a,o,s,l=1,u=!1,d=!1,p,m,f,b,y,g;if(e.listener!==null&&e.listener("open",e),e.tag=null,e.anchor=null,e.kind=null,e.result=null,a=o=s=Se===t||wt===t,r&&j(e,!0,-1)&&(u=!0,e.lineIndent>n?l=1:e.lineIndent===n?l=0:e.lineIndent<n&&(l=-1)),l===1)for(;hs(e)||vs(e);)j(e,!0,-1)?(u=!0,s=a,e.lineIndent>n?l=1:e.lineIndent===n?l=0:e.lineIndent<n&&(l=-1)):s=!1;if(s&&(s=u||i),(l===1||Se===t)&&(xe===t||At===t?y=n:y=n+1,g=e.position-e.lineStart,l===1?s&&(En(e,g)||fs(e,g,y))||ms(e,y)?d=!0:(o&&gs(e,y)||ps(e,y)||ds(e,y)?d=!0:bs(e)?(d=!0,(e.tag!==null||e.anchor!==null)&&h(e,"alias node should not have any properties")):cs(e,y,xe===t)&&(d=!0,e.tag===null&&(e.tag="?")),e.anchor!==null&&(e.anchorMap[e.anchor]=e.result)):l===0&&(d=s&&En(e,g))),e.tag===null)e.anchor!==null&&(e.anchorMap[e.anchor]=e.result);else if(e.tag==="?"){for(e.result!==null&&e.kind!=="scalar"&&h(e,'unacceptable node kind for !<?> tag; it should be "scalar", not "'+e.kind+'"'),p=0,m=e.implicitTypes.length;p<m;p+=1)if(b=e.implicitTypes[p],b.resolve(e.result)){e.result=b.construct(e.result),e.tag=b.tag,e.anchor!==null&&(e.anchorMap[e.anchor]=e.result);break}}else if(e.tag!=="!"){if(z.call(e.typeMap[e.kind||"fallback"],e.tag))b=e.typeMap[e.kind||"fallback"][e.tag];else for(b=null,f=e.typeMap.multi[e.kind||"fallback"],p=0,m=f.length;p<m;p+=1)if(e.tag.slice(0,f[p].tag.length)===f[p].tag){b=f[p];break}b||h(e,"unknown tag !<"+e.tag+">"),e.result!==null&&b.kind!==e.kind&&h(e,"unacceptable node kind for !<"+e.tag+'> tag; it should be "'+b.kind+'", not "'+e.kind+'"'),b.resolve(e.result,e.tag)?(e.result=b.construct(e.result,e.tag),e.anchor!==null&&(e.anchorMap[e.anchor]=e.result)):h(e,"cannot resolve a node with !<"+e.tag+"> explicit tag")}return e.listener!==null&&e.listener("close",e),e.tag!==null||e.anchor!==null||d}function ys(e){var n=e.position,t,r,i,a=!1,o;for(e.version=null,e.checkLineBreaks=e.legacy,e.tagMap=Object.create(null),e.anchorMap=Object.create(null);(o=e.input.charCodeAt(e.position))!==0&&(j(e,!0,-1),o=e.input.charCodeAt(e.position),!(e.lineIndent>0||o!==37));){for(a=!0,o=e.input.charCodeAt(++e.position),t=e.position;o!==0&&!E(o);)o=e.input.charCodeAt(++e.position);for(r=e.input.slice(t,e.position),i=[],r.length<1&&h(e,"directive name must not be less than one character in length");o!==0;){for(;V(o);)o=e.input.charCodeAt(++e.position);if(o===35){do o=e.input.charCodeAt(++e.position);while(o!==0&&!O(o));break}if(O(o))break;for(t=e.position;o!==0&&!E(o);)o=e.input.charCodeAt(++e.position);i.push(e.input.slice(t,e.position))}o!==0&&nn(e),z.call(qn,r)?qn[r](e,r,i):Ae(e,'unknown document directive "'+r+'"')}if(j(e,!0,-1),e.lineIndent===0&&e.input.charCodeAt(e.position)===45&&e.input.charCodeAt(e.position+1)===45&&e.input.charCodeAt(e.position+2)===45?(e.position+=3,j(e,!0,-1)):a&&h(e,"directives end mark is expected"),Z(e,e.lineIndent-1,Se,!1,!0),j(e,!0,-1),e.checkLineBreaks&&is.test(e.input.slice(n,e.position))&&Ae(e,"non-ASCII line breaks are interpreted as content"),e.documents.push(e.result),e.position===e.lineStart&&Ce(e)){e.input.charCodeAt(e.position)===46&&(e.position+=3,j(e,!0,-1));return}if(e.position<e.length-1)h(e,"end of the stream or a document separator is expected");else return}function qt(e,n){e=String(e),n=n||{},e.length!==0&&(e.charCodeAt(e.length-1)!==10&&e.charCodeAt(e.length-1)!==13&&(e+=`
`),e.charCodeAt(0)===65279&&(e=e.slice(1)));var t=new us(e,n),r=e.indexOf("\0");for(r!==-1&&(t.position=r,h(t,"null byte is not allowed in input")),t.input+="\0";t.input.charCodeAt(t.position)===32;)t.lineIndent+=1,t.position+=1;for(;t.position<t.length-1;)ys(t);return t.documents}function _s(e,n,t){n!==null&&typeof n=="object"&&typeof t>"u"&&(t=n,n=null);var r=qt(e,t);if(typeof n!="function")return r;for(var i=0,a=r.length;i<a;i+=1)n(r[i])}function xs(e,n){var t=qt(e,n);if(t.length!==0){if(t.length===1)return t[0];throw new q("expected a single document in the stream, but found more")}}var Ss=_s,As=xs,It={loadAll:Ss,load:As},Et=Object.prototype.toString,Dt=Object.prototype.hasOwnProperty,rn=65279,ws=9,pe=10,ks=13,Cs=32,js=33,Ts=34,ze=35,Ls=37,Ps=38,qs=39,Is=42,Mt=44,Es=45,we=58,Ds=61,Ms=62,Fs=63,Ns=64,Ft=91,Nt=93,Os=96,Ot=123,Rs=124,Rt=125,P={};P[0]="\\0";P[7]="\\a";P[8]="\\b";P[9]="\\t";P[10]="\\n";P[11]="\\v";P[12]="\\f";P[13]="\\r";P[27]="\\e";P[34]='\\"';P[92]="\\\\";P[133]="\\N";P[160]="\\_";P[8232]="\\L";P[8233]="\\P";var Bs=["y","Y","yes","Yes","YES","on","On","ON","n","N","no","No","NO","off","Off","OFF"],Gs=/^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;function Hs(e,n){var t,r,i,a,o,s,l;if(n===null)return{};for(t={},r=Object.keys(n),i=0,a=r.length;i<a;i+=1)o=r[i],s=String(n[o]),o.slice(0,2)==="!!"&&(o="tag:yaml.org,2002:"+o.slice(2)),l=e.compiledTypeMap.fallback[o],l&&Dt.call(l.styleAliases,s)&&(s=l.styleAliases[s]),t[o]=s;return t}function Us(e){var n,t,r;if(n=e.toString(16).toUpperCase(),e<=255)t="x",r=2;else if(e<=65535)t="u",r=4;else if(e<=4294967295)t="U",r=8;else throw new q("code point within a string may not be greater than 0xFFFFFFFF");return"\\"+t+T.repeat("0",r-n.length)+n}var zs=1,de=2;function Vs(e){this.schema=e.schema||en,this.indent=Math.max(1,e.indent||2),this.noArrayIndent=e.noArrayIndent||!1,this.skipInvalid=e.skipInvalid||!1,this.flowLevel=T.isNothing(e.flowLevel)?-1:e.flowLevel,this.styleMap=Hs(this.schema,e.styles||null),this.sortKeys=e.sortKeys||!1,this.lineWidth=e.lineWidth||80,this.noRefs=e.noRefs||!1,this.noCompatMode=e.noCompatMode||!1,this.condenseFlow=e.condenseFlow||!1,this.quotingType=e.quotingType==='"'?de:zs,this.forceQuotes=e.forceQuotes||!1,this.replacer=typeof e.replacer=="function"?e.replacer:null,this.implicitTypes=this.schema.compiledImplicit,this.explicitTypes=this.schema.compiledExplicit,this.tag=null,this.result="",this.duplicates=[],this.usedDuplicates=null}function Dn(e,n){for(var t=T.repeat(" ",n),r=0,i=-1,a="",o,s=e.length;r<s;)i=e.indexOf(`
`,r),i===-1?(o=e.slice(r),r=s):(o=e.slice(r,i+1),r=i+1),o.length&&o!==`
`&&(a+=t),a+=o;return a}function Ve(e,n){return`
`+T.repeat(" ",e.indent*n)}function Js(e,n){var t,r,i;for(t=0,r=e.implicitTypes.length;t<r;t+=1)if(i=e.implicitTypes[t],i.resolve(n))return!0;return!1}function ke(e){return e===Cs||e===ws}function me(e){return 32<=e&&e<=126||161<=e&&e<=55295&&e!==8232&&e!==8233||57344<=e&&e<=65533&&e!==rn||65536<=e&&e<=1114111}function Mn(e){return me(e)&&e!==rn&&e!==ks&&e!==pe}function Fn(e,n,t){var r=Mn(e),i=r&&!ke(e);return(t?r:r&&e!==Mt&&e!==Ft&&e!==Nt&&e!==Ot&&e!==Rt)&&e!==ze&&!(n===we&&!i)||Mn(n)&&!ke(n)&&e===ze||n===we&&i}function Ys(e){return me(e)&&e!==rn&&!ke(e)&&e!==Es&&e!==Fs&&e!==we&&e!==Mt&&e!==Ft&&e!==Nt&&e!==Ot&&e!==Rt&&e!==ze&&e!==Ps&&e!==Is&&e!==js&&e!==Rs&&e!==Ds&&e!==Ms&&e!==qs&&e!==Ts&&e!==Ls&&e!==Ns&&e!==Os}function Ws(e){return!ke(e)&&e!==we}function ae(e,n){var t=e.charCodeAt(n),r;return t>=55296&&t<=56319&&n+1<e.length&&(r=e.charCodeAt(n+1),r>=56320&&r<=57343)?(t-55296)*1024+r-56320+65536:t}function Bt(e){var n=/^\n* /;return n.test(e)}var Gt=1,Je=2,Ht=3,Ut=4,K=5;function Ks(e,n,t,r,i,a,o,s){var l,u=0,d=null,p=!1,m=!1,f=r!==-1,b=-1,y=Ys(ae(e,0))&&Ws(ae(e,e.length-1));if(n||o)for(l=0;l<e.length;u>=65536?l+=2:l++){if(u=ae(e,l),!me(u))return K;y=y&&Fn(u,d,s),d=u}else{for(l=0;l<e.length;u>=65536?l+=2:l++){if(u=ae(e,l),u===pe)p=!0,f&&(m=m||l-b-1>r&&e[b+1]!==" ",b=l);else if(!me(u))return K;y=y&&Fn(u,d,s),d=u}m=m||f&&l-b-1>r&&e[b+1]!==" "}return!p&&!m?y&&!o&&!i(e)?Gt:a===de?K:Je:t>9&&Bt(e)?K:o?a===de?K:Je:m?Ut:Ht}function $s(e,n,t,r,i){e.dump=(function(){if(n.length===0)return e.quotingType===de?'""':"''";if(!e.noCompatMode&&(Bs.indexOf(n)!==-1||Gs.test(n)))return e.quotingType===de?'"'+n+'"':"'"+n+"'";var a=e.indent*Math.max(1,t),o=e.lineWidth===-1?-1:Math.max(Math.min(e.lineWidth,40),e.lineWidth-a),s=r||e.flowLevel>-1&&t>=e.flowLevel;function l(u){return Js(e,u)}switch(Ks(n,s,e.indent,o,l,e.quotingType,e.forceQuotes&&!r,i)){case Gt:return n;case Je:return"'"+n.replace(/'/g,"''")+"'";case Ht:return"|"+Nn(n,e.indent)+On(Dn(n,a));case Ut:return">"+Nn(n,e.indent)+On(Dn(Qs(n,o),a));case K:return'"'+Xs(n)+'"';default:throw new q("impossible error: invalid scalar style")}})()}function Nn(e,n){var t=Bt(e)?String(n):"",r=e[e.length-1]===`
`,i=r&&(e[e.length-2]===`
`||e===`
`),a=i?"+":r?"":"-";return t+a+`
`}function On(e){return e[e.length-1]===`
`?e.slice(0,-1):e}function Qs(e,n){for(var t=/(\n+)([^\n]*)/g,r=(function(){var u=e.indexOf(`
`);return u=u!==-1?u:e.length,t.lastIndex=u,Rn(e.slice(0,u),n)})(),i=e[0]===`
`||e[0]===" ",a,o;o=t.exec(e);){var s=o[1],l=o[2];a=l[0]===" ",r+=s+(!i&&!a&&l!==""?`
`:"")+Rn(l,n),i=a}return r}function Rn(e,n){if(e===""||e[0]===" ")return e;for(var t=/ [^ ]/g,r,i=0,a,o=0,s=0,l="";r=t.exec(e);)s=r.index,s-i>n&&(a=o>i?o:s,l+=`
`+e.slice(i,a),i=a+1),o=s;return l+=`
`,e.length-i>n&&o>i?l+=e.slice(i,o)+`
`+e.slice(o+1):l+=e.slice(i),l.slice(1)}function Xs(e){for(var n="",t=0,r,i=0;i<e.length;t>=65536?i+=2:i++)t=ae(e,i),r=P[t],!r&&me(t)?(n+=e[i],t>=65536&&(n+=e[i+1])):n+=r||Us(t);return n}function Zs(e,n,t){var r="",i=e.tag,a,o,s;for(a=0,o=t.length;a<o;a+=1)s=t[a],e.replacer&&(s=e.replacer.call(t,String(a),s)),(G(e,n,s,!1,!1)||typeof s>"u"&&G(e,n,null,!1,!1))&&(r!==""&&(r+=","+(e.condenseFlow?"":" ")),r+=e.dump);e.tag=i,e.dump="["+r+"]"}function Bn(e,n,t,r){var i="",a=e.tag,o,s,l;for(o=0,s=t.length;o<s;o+=1)l=t[o],e.replacer&&(l=e.replacer.call(t,String(o),l)),(G(e,n+1,l,!0,!0,!1,!0)||typeof l>"u"&&G(e,n+1,null,!0,!0,!1,!0))&&((!r||i!=="")&&(i+=Ve(e,n)),e.dump&&pe===e.dump.charCodeAt(0)?i+="-":i+="- ",i+=e.dump);e.tag=a,e.dump=i||"[]"}function el(e,n,t){var r="",i=e.tag,a=Object.keys(t),o,s,l,u,d;for(o=0,s=a.length;o<s;o+=1)d="",r!==""&&(d+=", "),e.condenseFlow&&(d+='"'),l=a[o],u=t[l],e.replacer&&(u=e.replacer.call(t,l,u)),G(e,n,l,!1,!1)&&(e.dump.length>1024&&(d+="? "),d+=e.dump+(e.condenseFlow?'"':"")+":"+(e.condenseFlow?"":" "),G(e,n,u,!1,!1)&&(d+=e.dump,r+=d));e.tag=i,e.dump="{"+r+"}"}function nl(e,n,t,r){var i="",a=e.tag,o=Object.keys(t),s,l,u,d,p,m;if(e.sortKeys===!0)o.sort();else if(typeof e.sortKeys=="function")o.sort(e.sortKeys);else if(e.sortKeys)throw new q("sortKeys must be a boolean or a function");for(s=0,l=o.length;s<l;s+=1)m="",(!r||i!=="")&&(m+=Ve(e,n)),u=o[s],d=t[u],e.replacer&&(d=e.replacer.call(t,u,d)),G(e,n+1,u,!0,!0,!0)&&(p=e.tag!==null&&e.tag!=="?"||e.dump&&e.dump.length>1024,p&&(e.dump&&pe===e.dump.charCodeAt(0)?m+="?":m+="? "),m+=e.dump,p&&(m+=Ve(e,n)),G(e,n+1,d,!0,p)&&(e.dump&&pe===e.dump.charCodeAt(0)?m+=":":m+=": ",m+=e.dump,i+=m));e.tag=a,e.dump=i||"{}"}function Gn(e,n,t){var r,i,a,o,s,l;for(i=t?e.explicitTypes:e.implicitTypes,a=0,o=i.length;a<o;a+=1)if(s=i[a],(s.instanceOf||s.predicate)&&(!s.instanceOf||typeof n=="object"&&n instanceof s.instanceOf)&&(!s.predicate||s.predicate(n))){if(t?s.multi&&s.representName?e.tag=s.representName(n):e.tag=s.tag:e.tag="?",s.represent){if(l=e.styleMap[s.tag]||s.defaultStyle,Et.call(s.represent)==="[object Function]")r=s.represent(n,l);else if(Dt.call(s.represent,l))r=s.represent[l](n,l);else throw new q("!<"+s.tag+'> tag resolver accepts not "'+l+'" style');e.dump=r}return!0}return!1}function G(e,n,t,r,i,a,o){e.tag=null,e.dump=t,Gn(e,t,!1)||Gn(e,t,!0);var s=Et.call(e.dump),l=r,u;r&&(r=e.flowLevel<0||e.flowLevel>n);var d=s==="[object Object]"||s==="[object Array]",p,m;if(d&&(p=e.duplicates.indexOf(t),m=p!==-1),(e.tag!==null&&e.tag!=="?"||m||e.indent!==2&&n>0)&&(i=!1),m&&e.usedDuplicates[p])e.dump="*ref_"+p;else{if(d&&m&&!e.usedDuplicates[p]&&(e.usedDuplicates[p]=!0),s==="[object Object]")r&&Object.keys(e.dump).length!==0?(nl(e,n,e.dump,i),m&&(e.dump="&ref_"+p+e.dump)):(el(e,n,e.dump),m&&(e.dump="&ref_"+p+" "+e.dump));else if(s==="[object Array]")r&&e.dump.length!==0?(e.noArrayIndent&&!o&&n>0?Bn(e,n-1,e.dump,i):Bn(e,n,e.dump,i),m&&(e.dump="&ref_"+p+e.dump)):(Zs(e,n,e.dump),m&&(e.dump="&ref_"+p+" "+e.dump));else if(s==="[object String]")e.tag!=="?"&&$s(e,e.dump,n,a,l);else{if(s==="[object Undefined]")return!1;if(e.skipInvalid)return!1;throw new q("unacceptable kind of an object to dump "+s)}e.tag!==null&&e.tag!=="?"&&(u=encodeURI(e.tag[0]==="!"?e.tag.slice(1):e.tag).replace(/!/g,"%21"),e.tag[0]==="!"?u="!"+u:u.slice(0,18)==="tag:yaml.org,2002:"?u="!!"+u.slice(18):u="!<"+u+">",e.dump=u+" "+e.dump)}return!0}function tl(e,n){var t=[],r=[],i,a;for(Ye(e,t,r),i=0,a=r.length;i<a;i+=1)n.duplicates.push(t[r[i]]);n.usedDuplicates=new Array(a)}function Ye(e,n,t){var r,i,a;if(e!==null&&typeof e=="object")if(i=n.indexOf(e),i!==-1)t.indexOf(i)===-1&&t.push(i);else if(n.push(e),Array.isArray(e))for(i=0,a=e.length;i<a;i+=1)Ye(e[i],n,t);else for(r=Object.keys(e),i=0,a=r.length;i<a;i+=1)Ye(e[r[i]],n,t)}function il(e,n){n=n||{};var t=new Vs(n);t.noRefs||tl(e,t);var r=e;return t.replacer&&(r=t.replacer.call({"":r},"",r)),G(t,0,r,!0,!0)?t.dump+`
`:""}var rl=il,ol={dump:rl};function on(e,n){return function(){throw new Error("Function yaml."+e+" is removed in js-yaml 4. Use yaml."+n+" instead, which is now safe by default.")}}var al=L,sl=rt,ll=lt,ul=mt,cl=gt,pl=en,dl=It.load,ml=It.loadAll,gl=ol.dump,fl=q,hl={binary:yt,float:dt,map:st,null:ut,pairs:xt,set:St,timestamp:vt,bool:ct,int:pt,merge:bt,omap:_t,seq:at,str:ot},vl=on("safeLoad","load"),bl=on("safeLoadAll","loadAll"),yl=on("safeDump","dump"),ge={Type:al,Schema:sl,FAILSAFE_SCHEMA:ll,JSON_SCHEMA:ul,CORE_SCHEMA:cl,DEFAULT_SCHEMA:pl,load:dl,loadAll:ml,dump:gl,YAMLException:fl,types:hl,safeLoad:vl,safeLoadAll:bl,safeDump:yl};const We=e=>Qi(`/logos/${e}`),_l="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",re=We("no-img.svg"),c=(e,n=e)=>({light:We(e),dark:We(n),fallback:_l}),be={javascript:"javascript",typescript:"typescript",python:"python",java:"java",c:"c",cpp:"cplusplus","c++":"cplusplus",csharp:"csharp","c#":"csharp",go:"go",rust:"rust",kotlin:"kotlin",dart:"dart",php:"php",ruby:"ruby",swift:"swift",r:"r",scala:"scala",perl:"perl",lua:"lua",haskell:"haskell",elixir:"elixir",clojure:"clojure",matlab:"matlab",bash:"bash",powershell:"powershell",react:"react",reactjs:"react",vue:"vuejs",vuejs:"vuejs",angular:"angularjs",svelte:"svelte",nextjs:"nextjs",nuxt:"nuxtjs",nuxtjs:"nuxtjs",gatsby:"gatsby",ember:"ember",backbone:"backbonejs",jquery:"jquery",bootstrap:"bootstrap",tailwind:"tailwindcss",tailwindcss:"tailwindcss",materialui:"materialui",sass:"sass",less:"less",css:"css3",html:"html5",nodejs:"nodejs",node:"nodejs",express:"express",expressjs:"express",nestjs:"nestjs",fastify:"fastify",django:"django",flask:"flask",fastapi:"fastapi",spring:"spring",rails:"rails",laravel:"laravel",dotnet:"dotnetcore",".net":"dotnetcore",aspnet:"dotnetcore",postgresql:"postgresql",postgres:"postgresql",mysql:"mysql",mongodb:"mongodb",redis:"redis",sqlite:"sqlite",oracle:"oracle",mariadb:"mariadb",cassandra:"cassandra",neo4j:"neo4j",firebase:"firebase",dynamodb:"dynamodb",docker:"docker",kubernetes:"kubernetes",aws:"amazonwebservices",azure:"azure",gcp:"googlecloud",googlecloud:"googlecloud",heroku:"heroku",nginx:"nginx",apache:"apache",jenkins:"jenkins",circleci:"circleci",travisci:"travis",terraform:"terraform",ansible:"ansible",vagrant:"vagrant",git:"git",github:"github",gitlab:"gitlab",bitbucket:"bitbucket",vscode:"vscode",vim:"vim",jetbrains:"jetbrains",intellij:"intellij",webpack:"webpack",vite:"vitejs",babel:"babel",eslint:"eslint",npm:"npm",yarn:"yarn",pnpm:"pnpm",gradle:"gradle",maven:"maven",cmake:"cmake",jest:"jest",mocha:"mocha",jasmine:"jasmine",selenium:"selenium",cypress:"cypressio",pytest:"pytest",playwright:"playwright",streamlit:"streamlit",android:"android",flutter:"flutter",reactnative:"react",ionic:"ionic",xamarin:"xamarin",linux:"linux",ubuntu:"ubuntu",debian:"debian",centos:"centos",windows:"windows8",apple:"apple",macos:"apple",raspberrypi:"raspberrypi",graphql:"graphql",kafka:"apachekafka",rabbitmq:"rabbitmq",electron:"electron",figma:"figma",sketch:"sketch",photoshop:"photoshop",illustrator:"illustrator",blender:"blender",unity:"unity",unrealengine:"unrealengine",threejs:"threejs",opencv:"opencv",tensorflow:"tensorflow",pytorch:"pytorch",pandas:"pandas",numpy:"numpy",jupyter:"jupyter",anaconda:"anaconda",markdown:"markdown",latex:"latex",wordpress:"wordpress",drupal:"drupal",jira:"jira",confluence:"confluence",trello:"trello",slack:"slack",postman:"postman",insomnia:"insomnia",swagger:"swagger"};function ve(e){return e.toLowerCase().replace(/[.\-_\s]/g,"").replace(/js$/i,"").replace(/\.js$/i,"").replace(/lang$/i,"")}function xl(e){const n=ve(e);for(const[a,o]of Object.entries(be))if(ve(a)===n)return o;for(const[a,o]of Object.entries(be)){const s=ve(a);if(n.includes(s)||s.includes(n))return o}const t={node:"nodejs",js:"javascript",ts:"typescript",py:"python",rb:"ruby",cpp:"cplusplus",cxx:"cplusplus",cs:"csharp",postgres:"postgresql",mongo:"mongodb",k8s:"kubernetes",tf:"terraform",vue:"vuejs",react:"react",ng:"angularjs",angular:"angularjs",next:"nextjs",nuxt:"nuxtjs",tailwind:"tailwindcss",tw:"tailwindcss",bs:"bootstrap",electron:"electron",deno:"denojs",bun:"bun",aws:"amazonwebservices",gcloud:"googlecloud",gc:"googlecloud",az:"azure",gh:"github",gl:"gitlab",vsc:"vscode",code:"vscode",vim:"vim",nvim:"neovim",neovim:"neovim",intellij:"intellij",idea:"intellij",pycharm:"pycharm",webstorm:"webstorm"};if(t[n])return t[n];let r,i=1/0;for(const[a,o]of Object.entries(be)){const s=Sl(n,ve(a));s<i&&s<=2&&(i=s,r=o)}return r}function Sl(e,n){if(e.length===0)return n.length;if(n.length===0)return e.length;const t=[];for(let r=0;r<=n.length;r++)t[r]=[r];for(let r=0;r<=e.length;r++)t[0][r]=r;for(let r=1;r<=n.length;r++)for(let i=1;i<=e.length;i++)n.charAt(r-1)===e.charAt(i-1)?t[r][i]=t[r-1][i-1]:t[r][i]=Math.min(t[r-1][i-1]+1,t[r][i-1]+1,t[r-1][i]+1);return t[n.length][e.length]}const Al=new Set(["unknown","none","null","undefined","","n/a","na","no-img","placeholder","autonomy","autonomie","creativity","créativité","creativite","teamwork","travail d'équipe","travail equipe","communication","leadership","problem-solving","problem solving","résolution de problèmes","adaptability","adaptabilité","adaptabilite","time-management","time management","gestion du temps","critical-thinking","critical thinking","pensée critique","collaboration","motivation","organization","organisation","flexibility","flexibilité","flexibilite","patience","empathy","empathie","curiosity","curiosité","curiosite","rigor","rigueur","initiative","perseverance","persévérance","perseverance","soft skill","soft skills"]);function zt(e){if(!e)return!0;const n=e.toLowerCase().trim();return n.length===0?!0:Al.has(n)}function wl(e,n="original"){if(zt(e))return;let t=be[e.toLowerCase()];if(t||(t=xl(e)),!!t)return`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${t}/${t}-${n}.svg`}function kl(e){if(zt(e))return{light:re,dark:re,fallback:re};const n=wl(e);if(n)return{light:n,dark:n,fallback:re};const r=`https://cdn.simpleicons.org/${e.toLowerCase().replace(/[^a-z0-9]/g,"")}`;return{light:r,dark:r,fallback:re}}const $={AWS:c("aws.svg"),Bootstrap:c("bootstrap.svg"),C:c("c.svg"),Cpp:c("cpp.svg"),Celery:c("celery.svg"),Django:c("django.svg"),FastApi:c("fastapi"),Flask:c("flask.svg"),Go:c("go.svg"),Kafka:c("kafka.svg"),Neo4j:c("neo4j.svg"),Nginx:c("nginx.svg"),Numpy:c("numpy.svg"),Pandas:c("pandas.svg"),RabbitMQ:c("rabbitmq.svg"),Rust:c("rust.svg"),Scrapy:c("scrapy.png"),Selenium:c("selenium.svg"),Docker:c("docker.svg"),Kubernetes:c("kubernetes.svg"),Csharp:c("csharp.svg"),CSharp:c("csharp.svg"),Xamarin:c("xamarin.svg"),TypeScript:c("typescript-original.svg"),VueJs:c("vuejs-original.svg"),ReactJs:c("react.svg"),Dart:c("dart.png"),Kotlin:c("kotlin-original.svg"),Python:c("python.png"),NodeJs:c("nodejs-original.svg"),Deno:c("deno.svg"),Svelte:c("svelte.svg"),ExpressJs:c("express.png"),Express:c("express.png"),JavaScript:c("javascript-original.svg"),Fastify:c("fastify.svg"),NestJs:c("nest.svg"),Quasar:c("quasar.svg"),SolidJs:c("solid.svg"),Electron:c("electron.png"),Flutter:c("flutter.svg"),Java:c("java.png"),AdonisJs:c("adonis.png"),Android:c("android.png"),Angular:c("angular.png"),PostgreSQL:c("postgresql-original.svg"),Firebase:c("firebase.png"),Sass:c("sass.png"),Unknown:c("no-img.svg"),MongoDB:c("mongodb.svg"),Redis:c("redis.svg"),Tailwind:c("tailwind.svg"),TailwindCSS:c("tailwindcss-original.svg"),HTML:c("html.svg"),Premiere:c("premiere.svg"),Photoshop:c("photoshop.svg"),CSS:c("css.svg"),AfterEffects:c("after-effects.svg"),Illustrator:c("illustrator.svg"),Nuxt:c("nuxt.png"),Vite:c("vite.png"),Vitest:c("vitest.svg"),Jest:c("jest.png"),Unocss:c("unocss.svg"),Ruvy:c("ruvy.svg"),Postcss:c("postcss.svg"),Soleil:c("soleil.png"),AGH:c("agh.png"),InTech:c("intech.png"),ESIEA:c("esiea.png"),PMF:c("pmf.png"),Git:c("git-original.svg"),Linux:c("linux-original.svg"),SQLite:c("sqlite-original.svg"),CICD:c("cicd.svg"),Arduino:c("arduino-original.svg"),DotNet:c("dotnet-original.svg"),Grafana:c("grafana-original.svg"),Hugo:c("hugo-original.svg"),Ionic:c("ionic-original.svg"),MariaDB:c("mariadb-original.svg"),MySQL:c("mysql-original.svg"),OpenCV:c("opencv-original.svg"),Oracle:c("oracle-original.svg"),PHP:c("php-original.svg"),Postman:c("postman-original.svg"),Spring:c("spring-original.svg"),TensorFlow:c("tensorflow-original.svg"),Unity:c("unity-original.svg"),Apache:c("apache-original.svg"),Apache2:c("apache-original.svg"),Playwright:c("playwright-original.svg"),Streamlit:c("streamlit-original.svg"),RedisDB:c("redis-original.svg"),PaperMC:c("papermc.svg"),Velocity:c("velocity.svg"),BungeeCord:c("bungeecord.svg"),Spigot:c("spigot.svg"),Skript:c("skript.svg"),OpenXR:c("openxr.svg"),IntelliJ:c("intellij-original.svg"),PyCharm:c("pycharm-original.svg"),WebStorm:c("webstorm-original.svg"),CLion:c("clion-original.svg"),Rider:c("rider-original.svg"),DataGrip:c("datagrip-original.svg"),AndroidStudio:c("androidstudio-original.svg"),VSCode:c("vscode-original.svg"),Excel:c("excel.svg"),PowerPoint:c("powerpoint.svg"),Word:c("word.svg"),Jira:c("jira-original.svg"),Confluence:c("confluence-original.svg"),Teamwork:c("no-img.svg"),Autonomy:c("no-img.svg"),Creativity:c("no-img.svg"),MiniArticle:c("mini-article.png")};var M=(e=>(e.FullTime="Full-time",e.PartTime="Part-time",e.SelfEmployed="Self-employed",e.Freelance="Freelance",e.Contract="Contract",e.Internship="Internship",e.Apprenticeship="Apprenticeship",e))(M||{}),C=(e=>(e.Image="image",e.PDF="pdf",e.Document="document",e.Archive="archive",e.Video="video",e.Audio="audio",e.Code="code",e.Link="link",e.Other="other",e))(C||{});function je(e,n=new Date){if(e instanceof Date&&!isNaN(e.getTime()))return e;if(typeof e=="string"){const t=e.match(/^(\d{4})-(\d{2})-(\d{2})$/);if(t){const[,i,a,o]=t;return new Date(parseInt(i),parseInt(a)-1,parseInt(o))}const r=new Date(e);if(!isNaN(r.getTime()))return r}return console.log("[parseDate] Failed to parse:",e,"- using fallback"),n}function Te(e){if(e){if(e instanceof Date&&!isNaN(e.getTime()))return e;if(typeof e=="string"){const n=e.match(/^(\d{4})-(\d{2})-(\d{2})$/);if(n){const[,r,i,a]=n;return new Date(parseInt(r),parseInt(i)-1,parseInt(a))}const t=new Date(e);if(!isNaN(t.getTime()))return t}}}function Re(e){return e.light.includes("no-img")||e.light===$.Unknown.light}function ee(e){if(!e)return $.Unknown;if(e.startsWith("http://")||e.startsWith("https://"))return{light:e,dark:e,fallback:$.Unknown.light};let n=$[e];if(n&&!Re(n))return n;const t=[e,e.charAt(0).toUpperCase()+e.slice(1),e.toUpperCase(),e.toLowerCase(),e.replace(/(?:^|[-_])(\w)/g,(o,s)=>s?s.toUpperCase():"")];for(const o of t)if(n=$[o],n&&!Re(n))return n;const r={react:"ReactJs",node:"NodeJs",js:"JavaScript",ts:"TypeScript",vue:"VueJs",express:"ExpressJs",postgres:"PostgreSQL",postgresql:"PostgreSQL",mongo:"MongoDB",tailwindcss:"Tailwind"},i=e.toLowerCase();return r[i]&&(n=$[r[i]],n&&!Re(n))?n:kl(e)}function an(e){return e?e.replace(/<[^>]*>/g,"").replace(/^#{1,6}\s+/gm,"").replace(/\*\*([^*]+)\*\*/g,"$1").replace(/\*([^*]+)\*/g,"$1").replace(/__([^_]+)__/g,"$1").replace(/_([^_]+)_/g,"$1").replace(/\[([^\]]+)\]\([^)]+\)/g,"$1").replace(/!\[[^\]]*\]\([^)]+\)/g,"").replace(/```[\s\S]*?```/g,"").replace(/`([^`]+)`/g,"$1").replace(/^[\s]*[-*+]\s+/gm,"").replace(/^[\s]*\d+\.\s+/gm,"").replace(/^>\s+/gm,"").replace(/^[-*_]{3,}$/gm,"").replace(/\n{2,}/g," ").replace(/\n/g," ").replace(/\s{2,}/g," ").trim():""}function Le(e){return Array.isArray(e)?e.map(n=>({to:n.to||"",label:n.label||"",newTab:n.newTab??!0})):[]}function Cl(e){return Array.isArray(e)?e.map(n=>({src:n.src||"",label:n.label||""})):[]}function Hn(e){const n=e.toLowerCase();return/\.(jpg|jpeg|png|gif|webp|svg|bmp|ico)(\?.*)?$/i.test(n)||n.includes("unsplash.com")||n.includes("imgur.com")?C.Image:/\.pdf(\?.*)?$/i.test(n)?C.PDF:/\.(doc|docx|odt|rtf|txt|xls|xlsx|ppt|pptx)(\?.*)?$/i.test(n)?C.Document:/\.(zip|rar|7z|tar|gz|bz2)(\?.*)?$/i.test(n)?C.Archive:/\.(mp4|webm|avi|mov|mkv)(\?.*)?$/i.test(n)||n.includes("youtube.com")||n.includes("youtu.be")||n.includes("vimeo.com")?C.Video:/\.(mp3|wav|ogg|flac|aac)(\?.*)?$/i.test(n)?C.Audio:/\.(js|ts|py|java|c|cpp|cs|go|rs|rb|php|html|css|json|xml|yaml|yml|sh|bash)(\?.*)?$/i.test(n)||n.includes("github.com")||n.includes("gitlab.com")||n.includes("gist.github.com")?C.Code:n.startsWith("http://")||n.startsWith("https://")?C.Link:C.Other}function jl(e){return{[C.Image]:"i-carbon-image",[C.PDF]:"i-carbon-document-pdf",[C.Document]:"i-carbon-document",[C.Archive]:"i-carbon-zip",[C.Video]:"i-carbon-video",[C.Audio]:"i-carbon-music",[C.Code]:"i-carbon-code",[C.Link]:"i-carbon-link",[C.Other]:"i-carbon-attachment"}[e]||"i-carbon-attachment"}function Pe(e){return Array.isArray(e)?e.map(n=>{const t=n.src||n.url||"",r=n.type&&C[n.type]||Hn(t),i=t.startsWith("http://")||t.startsWith("https://");return{label:n.label||n.name||"Pièce jointe",src:t,type:r,description:n.description||void 0,size:n.size||void 0,icon:n.icon||jl(r),newTab:n.newTab??i}}):[]}function Tl(e){return{FullTime:M.FullTime,"Full-time":M.FullTime,PartTime:M.PartTime,"Part-time":M.PartTime,SelfEmployed:M.SelfEmployed,"Self-employed":M.SelfEmployed,Freelance:M.Freelance,Contract:M.Contract,Internship:M.Internship,Apprenticeship:M.Apprenticeship}[e||""]||M.Contract}function fe(e){return(e.split("/").pop()||"").replace(/\.(md|yaml|yml)$/,"")}function ne(e,n){const t=e.replace(/\r\n/g,`
`).replace(/\r/g,`
`),r=/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/,i=t.match(r);if(!i)return console.log(`[parseMarkdownFile] No frontmatter found for ${n}, raw starts with:`,t.substring(0,50)),{meta:{slug:n},content:t};const[,a,o]=i;try{const s=ge.load(a);return console.log(`[parseMarkdownFile] Parsed ${n}:`,JSON.stringify(s)),{meta:{...s,slug:n},content:o.trim()}}catch(s){return console.error(`Error parsing frontmatter for ${n}:`,s),{meta:{slug:n},content:(o==null?void 0:o.trim())||t}}}const Ke=[{name:"Programming Languages",slug:"pro-lang"},{name:"Frameworks",slug:"framework"},{name:"Libraries",slug:"library"},{name:"Languages",slug:"lang"},{name:"Databases",slug:"db"},{name:"ORMs",slug:"orm"},{name:"DevOps",slug:"devops"},{name:"Testing",slug:"test"},{name:"Dev Tools",slug:"devtools"},{name:"Markup & Style",slug:"markup-style"},{name:"Design",slug:"design"},{name:"Soft Skills",slug:"soft"}];function Ll(e){if(e)return Ke.find(n=>n.slug===e)}const Pl=Object.assign({"/content/blog/blog-platform-demo.md":Xi,"/content/blog/georges-le-chat.md":Zi,"/content/blog/getting-started-with-svelte.md":er,"/content/blog/mini-article.md":nr,"/content/blog/modern-css-techniques.md":tr,"/content/blog/sveltekit-full-stack-framework.md":ir,"/content/blog/typescript-best-practices.md":rr}),ql=Object.assign({"/content/projects/comet-learning.md":or,"/content/projects/flutter-movie-manip.md":ar,"/content/projects/flutter-todo-list.md":sr,"/content/projects/foot-ai.md":lr,"/content/projects/hr-data-analytics.md":ur,"/content/projects/invr.md":cr,"/content/projects/nano-pong.md":pr,"/content/projects/quiz-ai.md":dr,"/content/projects/snake-game-ai.md":mr,"/content/projects/squat-counter-ia.md":gr,"/content/projects/svelte-blog.md":fr,"/content/projects/template-project.md":hr,"/content/projects/template-svelte.md":vr,"/content/projects/tpvpocifar.md":br}),Un=Object.assign({"/content/skills/android-studio.md":yr,"/content/skills/apache2.md":_r,"/content/skills/arduino.md":xr,"/content/skills/autonomy.md":Sr,"/content/skills/bungeecord.md":Ar,"/content/skills/c.md":wr,"/content/skills/ci-cd.md":kr,"/content/skills/clion.md":Cr,"/content/skills/confluence.md":jr,"/content/skills/creativity.md":Tr,"/content/skills/csharp.md":Lr,"/content/skills/css.md":Pr,"/content/skills/dart.md":qr,"/content/skills/datagrip.md":Ir,"/content/skills/docker-swarm.md":Er,"/content/skills/docker.md":Dr,"/content/skills/dotnet.md":Mr,"/content/skills/electron.md":Fr,"/content/skills/excel.md":Nr,"/content/skills/expressjs.md":Or,"/content/skills/firebase.md":Rr,"/content/skills/flask.md":Br,"/content/skills/flutter.md":Gr,"/content/skills/git.md":Hr,"/content/skills/grafana.md":Ur,"/content/skills/html.md":zr,"/content/skills/hugo.md":Vr,"/content/skills/intellij.md":Jr,"/content/skills/ionic.md":Yr,"/content/skills/java.md":Wr,"/content/skills/javafx.md":Kr,"/content/skills/javascript.md":$r,"/content/skills/jee.md":Qr,"/content/skills/jira.md":Xr,"/content/skills/kotlin.md":Zr,"/content/skills/kubernetes.md":eo,"/content/skills/linux.md":no,"/content/skills/mariadb.md":to,"/content/skills/minikube.md":io,"/content/skills/mongodb.md":ro,"/content/skills/mysql.md":oo,"/content/skills/nginx.md":ao,"/content/skills/nodejs.md":so,"/content/skills/opencv.md":lo,"/content/skills/openxr.md":uo,"/content/skills/oracle.md":co,"/content/skills/pandas.md":po,"/content/skills/papermc.md":mo,"/content/skills/photoshop.md":go,"/content/skills/php.md":fo,"/content/skills/playwright.md":ho,"/content/skills/postgresql.md":vo,"/content/skills/postman.md":bo,"/content/skills/powerpoint.md":yo,"/content/skills/pycharm.md":_o,"/content/skills/python.md":xo,"/content/skills/reactjs.md":So,"/content/skills/redis.md":Ao,"/content/skills/rider.md":wo,"/content/skills/rust.md":ko,"/content/skills/sass.md":Co,"/content/skills/selenium.md":jo,"/content/skills/skript.md":To,"/content/skills/spigot.md":Lo,"/content/skills/spring.md":Po,"/content/skills/springboot.md":qo,"/content/skills/sqlite.md":Io,"/content/skills/streamlit.md":Eo,"/content/skills/svelte.md":Do,"/content/skills/tailwind.md":Mo,"/content/skills/teamwork.md":Fo,"/content/skills/tensorflow.md":No,"/content/skills/typescript.md":Oo,"/content/skills/unity.md":Ro,"/content/skills/velocity.md":Bo,"/content/skills/vscode.md":Go,"/content/skills/vuejs.md":Ho,"/content/skills/webstorm.md":Uo,"/content/skills/word.md":zo}),Il=Object.assign({"/content/experience/agh-batiment.md":Vo,"/content/experience/synchrotron-soleil.md":Jo}),El=Object.assign({"/content/education/esiea.md":Yo,"/content/education/intech.md":Wo,"/content/education/pmf.md":Ko});let Be=null;function sn(){if(Be)return Be;console.log("[loadAllSkills] Starting to load skills..."),console.log("[loadAllSkills] skillFiles keys:",Object.keys(Un));const e=[];for(const[n,t]of Object.entries(Un)){const r=fe(n),{meta:i,content:a}=ne(t,r);if(i.published===!1){console.log(`[loadAllSkills] Skipping ${r} (published: false)`);continue}console.log(`[loadAllSkills] Processing ${r}:`,{name:i.name,logo:i.logo,rawLogoType:typeof i.logo}),e.push({slug:i.slug||r,name:i.name||r,logo:ee(i.logo),description:a||i.name||"",color:i.color||"gray",category:Ll(i.category)})}return Be=e,e}function Vt(...e){const n=sn();return e.length===0?n:n.filter(t=>e.includes(t.slug))}function ru(e=""){const n=sn(),t=[],r=[];return n.forEach(i=>{if(e.trim()&&!i.name.toLowerCase().includes(e.trim().toLowerCase()))return;if(!i.category){r.push(i);return}let a=t.find(o=>{var s;return o.category.slug===((s=i.category)==null?void 0:s.slug)});a||(a={items:[],category:i.category},t.push(a)),a.items.push(i)}),r.length!==0&&t.push({category:{name:"Others",slug:"others"},items:r}),t.sort((i,a)=>{const o=Ke.findIndex(l=>l.slug===i.category.slug),s=Ke.findIndex(l=>l.slug===a.category.slug);return o===-1?1:s===-1?-1:o-s}),t.forEach(i=>{i.items.sort((a,o)=>a.name.localeCompare(o.name))}),t}function Dl(){const e=[];for(const[n,t]of Object.entries(Pl)){const r=fe(n),{meta:i,content:a}=ne(t,r);i.published!==!1&&e.push({slug:i.slug||r,name:i.name||i.title||r,title:i.title||i.name||r,logo:ee(i.logo),excerpt:i.excerpt||"",shortDescription:i.excerpt||"",description:a,content:a,author:i.author||"Anonymous",publishedAt:je(i.publishedAt),updatedAt:Te(i.updatedAt),tags:i.tags||[],coverImage:i.coverImage?ee(i.coverImage):void 0,readingTime:i.readingTime||Math.ceil(a.split(/\s+/).length/200),color:i.color,links:Le(i.links),pinned:i.pinned||!1})}return e.sort((n,t)=>t.publishedAt.getTime()-n.publishedAt.getTime())}function Jt(){var n,t;const e=[];for(const[r,i]of Object.entries(ql)){const a=fe(r),{meta:o,content:s}=ne(i,a);o.published!==!1&&e.push({slug:o.slug||a,name:o.name||a,logo:ee(o.logo),shortDescription:o.shortDescription||an(s).substring(0,200),description:s,color:o.color||"gray",type:o.type||"Project",category:o.category?Ml(o.category):void 0,period:{from:je((n=o.period)==null?void 0:n.from),to:Te((t=o.period)==null?void 0:t.to)},skills:Vt(...o.skills||[]),links:Le(o.links),screenshots:Cl(o.screenshots),attachments:Pe(o.attachments)})}return e.sort((r,i)=>i.period.from.getTime()-r.period.from.getTime())}const $e=[{slug:"technique",name:"💻 Projets Techniques"},{slug:"humain",name:"🤝 Projets Humains"}];function Ml(e){return $e.find(t=>t.slug===e.toLowerCase())||{name:e,slug:e.toLowerCase()}}function ou(e="",n=[]){const t=Jt(),r=[],i=[];return t.forEach(a=>{if(e.trim()&&!a.name.toLowerCase().includes(e.trim().toLowerCase())||n.length>0&&!a.skills.some(s=>n.includes(s.slug)))return;if(!a.category){i.push(a);return}let o=r.find(s=>{var l;return s.category.slug===((l=a.category)==null?void 0:l.slug)});o||(o={items:[],category:a.category},r.push(o)),o.items.push(a)}),i.length!==0&&r.push({category:{name:"📁 Autres",slug:"others"},items:i}),r.sort((a,o)=>{const s=$e.findIndex(u=>u.slug===a.category.slug),l=$e.findIndex(u=>u.slug===o.category.slug);return s===-1?1:l===-1?-1:s-l}),r}function Fl(){var n,t,r;const e=[];for(const[i,a]of Object.entries(Il)){const o=fe(i),{meta:s,content:l}=ne(a,o);s.published!==!1&&(console.log(`[loadAllExperiences] ${o}:`,{name:s.name,shortDescription:(n=s.shortDescription)==null?void 0:n.substring(0,50),period:s.period}),e.push({slug:s.slug||o,name:s.name||o,logo:ee(s.logo),shortDescription:s.shortDescription||an(l).substring(0,200),description:l,company:s.company||"",location:s.location||"",contract:Tl(s.contract),type:s.type||"Development",color:s.color||"gray",period:{from:je((t=s.period)==null?void 0:t.from),to:Te((r=s.period)==null?void 0:r.to)},skills:Vt(...s.skills||[]),links:Le(s.links),attachments:Pe(s.attachments)}))}return e.sort((i,a)=>a.period.from.getTime()-i.period.from.getTime())}function Nl(){var n,t;const e=[];for(const[r,i]of Object.entries(El)){const a=fe(r),{meta:o,content:s}=ne(i,a);o.published!==!1&&e.push({slug:o.slug||a,name:o.name||a,logo:ee(o.logo),shortDescription:o.shortDescription||an(s).substring(0,200),description:s,degree:o.degree||"",organization:o.organization||"",location:o.location||"",color:o.color,period:{from:je((n=o.period)==null?void 0:n.from),to:Te((t=o.period)==null?void 0:t.to)},subjects:o.subjects||[],links:Le(o.links),attachments:Pe(o.attachments)})}return e.sort((r,i)=>i.period.from.getTime()-r.period.from.getTime())}const Ol=Object.assign({"/content/about.md":$o});function Rl(){const e=Object.values(Ol)[0];if(!e)return console.log("[loadAboutPage] No about.md file found"),{title:"À propos",content:"",attachments:[]};const{meta:n,content:t}=ne(e,"about");return{title:n.title||"À propos",content:t,attachments:Pe(n.attachments)}}const Bl=Object.assign({"/content/site.yaml":Qo}),Gl=Object.assign({"/content/pages/home.yaml":Xo}),Hl=Object.assign({"/content/pages/resume.yaml":Zo}),Ul=Object.assign({"/content/pages/contact.yaml":ea});function ln(){const e=Object.values(Bl)[0];if(!e)return{firstName:"Prénom",lastName:"NOM",jobTitle:"Développeur",email:"contact@example.com",socialLinks:[],inConstruction:{enabled:!1,title:"",message:""}};const n=e.replace(/\r\n/g,`
`).replace(/\r/g,`
`),t=ge.load(n),r=t.inConstruction;return{firstName:t.firstName||"Prénom",lastName:t.lastName||"NOM",jobTitle:t.jobTitle||"Développeur",email:t.email||"contact@example.com",socialLinks:(t.socialLinks||[]).map(i=>({label:i.label,href:i.href,icon:i.icon})),inConstruction:{enabled:(r==null?void 0:r.enabled)??!1,title:(r==null?void 0:r.title)||"",message:(r==null?void 0:r.message)||""}}}function zl(){const e=ln(),n=Object.values(Gl)[0];let t="Accueil",r="";if(n){const i=n.replace(/\r\n/g,`
`).replace(/\r/g,`
`),a=ge.load(i);t=a.title||"Accueil";const o=a.hero;r=(o==null?void 0:o.description)||""}return{title:t,heroDescription:r,socialLinks:e.socialLinks,fullName:`${e.firstName} ${e.lastName}`}}function Vl(){const e=Object.values(Hl)[0];if(!e)return{title:"CV",pdfPath:"/pdf/cv.pdf",downloadLabel:"Télécharger",fullscreenLabel:"Plein écran"};const n=e.replace(/\r\n/g,`
`).replace(/\r/g,`
`),t=ge.load(n);return{title:t.title||"CV",pdfPath:t.pdfPath||"/pdf/cv.pdf",downloadLabel:t.downloadLabel||"Télécharger",fullscreenLabel:t.fullscreenLabel||"Plein écran"}}function Jl(){const e=ln(),n=Object.values(Ul)[0],t={title:"Contact",description:"N'hésitez pas à me contacter.",email:e.email,form:{nameLabel:"Nom",namePlaceholder:"Votre nom",emailLabel:"Email",emailPlaceholder:"votre@email.com",messageLabel:"Message",messagePlaceholder:"Votre message...",submitLabel:"Envoyer",sendingLabel:"Envoi en cours..."},messages:{success:"Message envoyé avec succès !",error:"Une erreur est survenue.",validationError:"Veuillez remplir tous les champs."}};if(!n)return t;const r=n.replace(/\r\n/g,`
`).replace(/\r/g,`
`),i=ge.load(r),a=i.form,o=i.messages;return{title:i.title||t.title,description:i.description||t.description,email:i.email||t.email,form:{nameLabel:(a==null?void 0:a.nameLabel)||t.form.nameLabel,namePlaceholder:(a==null?void 0:a.namePlaceholder)||t.form.namePlaceholder,emailLabel:(a==null?void 0:a.emailLabel)||t.form.emailLabel,emailPlaceholder:(a==null?void 0:a.emailPlaceholder)||t.form.emailPlaceholder,messageLabel:(a==null?void 0:a.messageLabel)||t.form.messageLabel,messagePlaceholder:(a==null?void 0:a.messagePlaceholder)||t.form.messagePlaceholder,submitLabel:(a==null?void 0:a.submitLabel)||t.form.submitLabel,sendingLabel:(a==null?void 0:a.sendingLabel)||t.form.sendingLabel},messages:{success:(o==null?void 0:o.success)||t.messages.success,error:(o==null?void 0:o.error)||t.messages.error,validationError:(o==null?void 0:o.validationError)||t.messages.validationError}}}const zn=ln(),au=zl(),su=Vl(),lu=Jl(),uu=Rl(),cu={title:"Blog",items:Dl()},pu={title:"Projets",items:Jt()},du={title:"Skills",items:sn()},mu={title:"Expérience",items:Fl()},gu={title:"Formation",items:Nl()},Yl=`${zn.firstName} ${zn.lastName}`,Wl={title:Yl,icon:"i-carbon-code"},Kl=[{title:"À Propos",icon:"i-carbon-user",href:"/about"},{title:"Skills",icon:"i-carbon-assembly-cluster",href:"/skills"},{title:"Projets",icon:"i-carbon-cube",href:"/projects"},{title:"Experience",icon:"i-carbon-development",href:"/experience"},{title:"Formation",icon:"i-carbon-education",href:"/education"},{title:"Blog",icon:"i-carbon-blog",href:"/blog"},{title:"CV",icon:"i-carbon-document",href:"/resume"},{title:"Contact",icon:"i-carbon-email",href:"/contact"}],fu={left:Wl,items:Kl};export{$ as A,cu as B,lu as C,mu as E,au as H,fu as N,pu as P,su as R,du as S,Zl as a,tu as b,gu as c,ru as d,eu as e,zi as f,Vt as g,uu as h,iu as i,C as j,ou as k,Gi as l,zn as m,Vi as n,ie as o,nu as p,Bi as q,Yi as r,_e as s};
