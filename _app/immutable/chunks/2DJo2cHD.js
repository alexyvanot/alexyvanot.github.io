import{ag as Pe,k as Vt,b7 as zn,i as I,at as Ie,aB as Jt,j as Yt,g as le,aV as Wt,ac as $t,au as fn,aL as se,aa as he,ab as Kt,aQ as Qt,ar as hn,aS as Xt,b8 as B,ad as ce,aU as Zt,x as ei,a0 as Vn,aO as Ke,b9 as ni,ba as ti,m as ii,J as vn,bb as ri,aT as Jn,af as Yn,bc as De,z as Wn,bd as oi,aN as ai,as as ye,aJ as si,be as $n,q as Kn,bf as li,A as ci,bg as ui,bh as pi,bi as di,bj as mi,bk as gi,bl as fi,bm as hi,bn as vi,bo as bi,bp as yi,_ as _i,a2 as xi,v as bn,h as Si,bq as Ai,Y as yn,e as wi,O as ki,br as Ci}from"./CrEmclJz.js";import{o as Ti,p as Li,d as ji,q as Ei,v as Pi}from"./B5sLhNz6.js";import{b as Ii,r as Di}from"./DJe1gKjh.js";function Wl(e,n){return n}function qi(e,n,t){for(var r=[],i=n.length,a,o=n.length,s=0;s<i;s++){let p=n[s];Yn(p,()=>{if(a){if(a.pending.delete(p),a.done.add(p),a.pending.size===0){var m=e.outrogroups;Ge(Ke(a.done)),m.delete(a),m.size===0&&(e.outrogroups=null)}}else o-=1},!1)}if(o===0){var l=r.length===0&&t!==null;if(l){var c=t,d=c.parentNode;ai(d),d.append(c),e.items.clear()}Ge(n,!l)}else a={pending:new Set(n),done:new Set},(e.outrogroups??(e.outrogroups=new Set)).add(a)}function Ge(e,n=!0){for(var t=0;t<e.length;t++)ye(e[t],n)}var _n;function $l(e,n,t,r,i,a=null){var o=e,s=new Map,l=(n&zn)!==0;if(l){var c=e;o=I?Ie(Jt(c)):c.appendChild(Pe())}I&&Yt();var d=null,p=ei(()=>{var v=t();return Vn(v)?v:v==null?[]:Ke(v)}),m,f=!0;function b(){g.fallback=d,Fi(g,m,o,n,r),d!==null&&(m.length===0?(d.f&B)===0?Jn(d):(d.f^=B,oe(d,null,o)):Yn(d,()=>{d=null}))}var y=Vt(()=>{m=le(p);var v=m.length;let _=!1;if(I){var M=Wt(o)===$t;M!==(v===0)&&(o=fn(),Ie(o),se(!1),_=!0)}for(var w=new Set,N=Xt,S=Zt(),x=0;x<v;x+=1){I&&he.nodeType===Kt&&he.data===Qt&&(o=he,_=!0,se(!1));var k=m[x],q=r(k,x),A=f?null:s.get(q);A?(A.v&&hn(A.v,k),A.i&&hn(A.i,x),S&&N.skipped_effects.delete(A.e)):(A=Mi(s,f?o:_n??(_n=Pe()),k,q,x,i,n,t),f||(A.e.f|=B),s.set(q,A)),w.add(q)}if(v===0&&a&&!d&&(f?d=ce(()=>a(o)):(d=ce(()=>a(_n??(_n=Pe()))),d.f|=B)),I&&v>0&&Ie(fn()),!f)if(S){for(const[J,Y]of s)w.has(J)||N.skipped_effects.add(Y.e);N.oncommit(b),N.ondiscard(()=>{})}else b();_&&se(!0),le(p)}),g={effect:y,items:s,outrogroups:null,fallback:d};f=!1,I&&(o=he)}function Fi(e,n,t,r,i){var A,J,Y,ln,cn,un,pn,dn,mn;var a=(r&oi)!==0,o=n.length,s=e.items,l=e.effect.first,c,d=null,p,m=[],f=[],b,y,g,v;if(a)for(v=0;v<o;v+=1)b=n[v],y=i(b,v),g=s.get(y).e,(g.f&B)===0&&((J=(A=g.nodes)==null?void 0:A.a)==null||J.measure(),(p??(p=new Set)).add(g));for(v=0;v<o;v+=1){if(b=n[v],y=i(b,v),g=s.get(y).e,e.outrogroups!==null)for(const R of e.outrogroups)R.pending.delete(g),R.done.delete(g);if((g.f&B)!==0)if(g.f^=B,g===l)oe(g,null,t);else{var _=d?d.next:l;g===e.effect.last&&(e.effect.last=g.prev),g.prev&&(g.prev.next=g.next),g.next&&(g.next.prev=g.prev),H(e,d,g),H(e,g,_),oe(g,_,t),d=g,m=[],f=[],l=d.next;continue}if((g.f&De)!==0&&(Jn(g),a&&((ln=(Y=g.nodes)==null?void 0:Y.a)==null||ln.unfix(),(p??(p=new Set)).delete(g))),g!==l){if(c!==void 0&&c.has(g)){if(m.length<f.length){var M=f[0],w;d=M.prev;var N=m[0],S=m[m.length-1];for(w=0;w<m.length;w+=1)oe(m[w],M,t);for(w=0;w<f.length;w+=1)c.delete(f[w]);H(e,N.prev,S.next),H(e,d,N),H(e,S,M),l=M,d=S,v-=1,m=[],f=[]}else c.delete(g),oe(g,l,t),H(e,g.prev,g.next),H(e,g,d===null?e.effect.first:d.next),H(e,d,g),d=g;continue}for(m=[],f=[];l!==null&&l!==g;)(c??(c=new Set)).add(l),f.push(l),l=l.next;if(l===null)continue}(g.f&B)===0&&m.push(g),d=g,l=g.next}if(e.outrogroups!==null){for(const R of e.outrogroups)R.pending.size===0&&(Ge(Ke(R.done)),(cn=e.outrogroups)==null||cn.delete(R));e.outrogroups.size===0&&(e.outrogroups=null)}if(l!==null||c!==void 0){var x=[];if(c!==void 0)for(g of c)(g.f&De)===0&&x.push(g);for(;l!==null;)(l.f&De)===0&&l!==e.fallback&&x.push(l),l=l.next;var k=x.length;if(k>0){var q=(r&zn)!==0&&o===0?t:null;if(a){for(v=0;v<k;v+=1)(pn=(un=x[v].nodes)==null?void 0:un.a)==null||pn.measure();for(v=0;v<k;v+=1)(mn=(dn=x[v].nodes)==null?void 0:dn.a)==null||mn.fix()}qi(e,x,q)}}a&&Wn(()=>{var R,gn;if(p!==void 0)for(g of p)(gn=(R=g.nodes)==null?void 0:R.a)==null||gn.apply()})}function Mi(e,n,t,r,i,a,o,s){var l=(o&ni)!==0?(o&ti)===0?ii(t,!1,!1):vn(t):null,c=(o&ri)!==0?vn(i):null;return{v:l,i:c,e:ce(()=>(a(n,l??t,c??i,s),()=>{e.delete(r)}))}}function oe(e,n,t){if(e.nodes)for(var r=e.nodes.start,i=e.nodes.end,a=n&&(n.f&B)===0?n.nodes.start:t;r!==null;){var o=si(r);if(a.before(r),r===i)return;r=o}}function H(e,n,t){n===null?e.effect.first=t:n.next=t,t===null?e.effect.last=n:t.prev=n}function Ni(e,n){var t=void 0,r;$n(()=>{t!==(t=n())&&(r&&(ye(r),r=null),t&&(r=ce(()=>{Kn(()=>t(e))})))})}function Qn(e){var n,t,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(n=0;n<i;n++)e[n]&&(t=Qn(e[n]))&&(r&&(r+=" "),r+=t)}else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function Oi(){for(var e,n,t=0,r="",i=arguments.length;t<i;t++)(e=arguments[t])&&(n=Qn(e))&&(r&&(r+=" "),r+=n);return r}function Ri(e){return typeof e=="object"?Oi(e):e??""}const xn=[...` 	
\r\f \v\uFEFF`];function Bi(e,n,t){var r=e==null?"":""+e;if(n&&(r=r?r+" "+n:n),t){for(var i in t)if(t[i])r=r?r+" "+i:i;else if(r.length)for(var a=i.length,o=0;(o=r.indexOf(i,o))>=0;){var s=o+a;(o===0||xn.includes(r[o-1]))&&(s===r.length||xn.includes(r[s]))?r=(o===0?"":r.substring(0,o))+r.substring(s+1):o=s}}return r===""?null:r}function Sn(e,n=!1){var t=n?" !important;":";",r="";for(var i in e){var a=e[i];a!=null&&a!==""&&(r+=" "+i+": "+a+t)}return r}function qe(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function Gi(e,n){if(n){var t="",r,i;if(Array.isArray(n)?(r=n[0],i=n[1]):r=n,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var a=!1,o=0,s=!1,l=[];r&&l.push(...Object.keys(r).map(qe)),i&&l.push(...Object.keys(i).map(qe));var c=0,d=-1;const y=e.length;for(var p=0;p<y;p++){var m=e[p];if(s?m==="/"&&e[p-1]==="*"&&(s=!1):a?a===m&&(a=!1):m==="/"&&e[p+1]==="*"?s=!0:m==='"'||m==="'"?a=m:m==="("?o++:m===")"&&o--,!s&&a===!1&&o===0){if(m===":"&&d===-1)d=p;else if(m===";"||p===y-1){if(d!==-1){var f=qe(e.substring(c,d).trim());if(!l.includes(f)){m!==";"&&p++;var b=e.substring(c,p).trim();t+=" "+b+";"}}c=p+1,d=-1}}}}return r&&(t+=Sn(r)),i&&(t+=Sn(i,!0)),t=t.trim(),t===""?null:t}return e==null?null:String(e)}function Hi(e,n,t,r,i,a){var o=e.__className;if(I||o!==t||o===void 0){var s=Bi(t,r,a);(!I||s!==e.getAttribute("class"))&&(s==null?e.removeAttribute("class"):n?e.className=s:e.setAttribute("class",s)),e.__className=t}else if(a&&i!==a)for(var l in a){var c=!!a[l];(i==null||c!==!!i[l])&&e.classList.toggle(l,c)}return a}function Fe(e,n={},t,r){for(var i in t){var a=t[i];n[i]!==a&&(t[i]==null?e.style.removeProperty(i):e.style.setProperty(i,a,r))}}function Ui(e,n,t,r){var i=e.__style;if(I||i!==n){var a=Gi(n,r);(!I||a!==e.getAttribute("style"))&&(a==null?e.removeAttribute("style"):e.style.cssText=a),e.__style=n}else r&&(Array.isArray(r)?(Fe(e,t==null?void 0:t[0],r[0]),Fe(e,t==null?void 0:t[1],r[1],"important")):Fe(e,t,r));return r}function He(e,n,t=!1){if(e.multiple){if(n==null)return;if(!Vn(n))return ui();for(var r of e.options)r.selected=n.includes(An(r));return}for(r of e.options){var i=An(r);if(li(i,n)){r.selected=!0;return}}(!t||n!==void 0)&&(e.selectedIndex=-1)}function zi(e){var n=new MutationObserver(()=>{He(e,e.__value)});n.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),ci(()=>{n.disconnect()})}function An(e){return"__value"in e?e.__value:e.value}const te=Symbol("class"),ie=Symbol("style"),Xn=Symbol("is custom element"),Zn=Symbol("is html");function Vi(e){if(I){var n=!1,t=()=>{if(!n){if(n=!0,e.hasAttribute("value")){var r=e.value;_e(e,"value",null),e.value=r}if(e.hasAttribute("checked")){var i=e.checked;_e(e,"checked",null),e.checked=i}}};e.__on_r=t,Wn(t),fi()}}function Kl(e,n){var t=Qe(e);t.value===(t.value=n??void 0)||e.value===n&&(n!==0||e.nodeName!=="PROGRESS")||(e.value=n??"")}function Ji(e,n){n?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function _e(e,n,t,r){var i=Qe(e);I&&(i[n]=e.getAttribute(n),n==="src"||n==="srcset"||n==="href"&&e.nodeName==="LINK")||i[n]!==(i[n]=t)&&(n==="loading"&&(e[bi]=t),t==null?e.removeAttribute(n):typeof t!="string"&&et(e).includes(n)?e[n]=t:e.setAttribute(n,t))}function Yi(e,n,t,r,i=!1,a=!1){if(I&&i&&e.tagName==="INPUT"){var o=e,s=o.type==="checkbox"?"defaultChecked":"defaultValue";s in t||Vi(o)}var l=Qe(e),c=l[Xn],d=!l[Zn];let p=I&&c;p&&se(!1);var m=n||{},f=e.tagName==="OPTION";for(var b in n)b in t||(t[b]=null);t.class?t.class=Ri(t.class):(r||t[te])&&(t.class=null),t[ie]&&(t.style??(t.style=null));var y=et(e);for(const S in t){let x=t[S];if(f&&S==="value"&&x==null){e.value=e.__value="",m[S]=x;continue}if(S==="class"){var g=e.namespaceURI==="http://www.w3.org/1999/xhtml";Hi(e,g,x,r,n==null?void 0:n[te],t[te]),m[S]=x,m[te]=t[te];continue}if(S==="style"){Ui(e,x,n==null?void 0:n[ie],t[ie]),m[S]=x,m[ie]=t[ie];continue}var v=m[S];if(!(x===v&&!(x===void 0&&e.hasAttribute(S)))){m[S]=x;var _=S[0]+S[1];if(_!=="$$")if(_==="on"){const k={},q="$$"+S;let A=S.slice(2);var M=Pi(A);if(Ti(A)&&(A=A.slice(0,-7),k.capture=!0),!M&&v){if(x!=null)continue;e.removeEventListener(A,m[q],k),m[q]=null}if(x!=null)if(M)e[`__${A}`]=x,ji([A]);else{let J=function(Y){m[S].call(this,Y)};m[q]=Li(A,e,J,k)}else M&&(e[`__${A}`]=void 0)}else if(S==="style")_e(e,S,x);else if(S==="autofocus")mi(e,!!x);else if(!c&&(S==="__value"||S==="value"&&x!=null))e.value=e.__value=x;else if(S==="selected"&&f)Ji(e,x);else{var w=S;d||(w=Ei(w));var N=w==="defaultValue"||w==="defaultChecked";if(x==null&&!c&&!N)if(l[S]=null,w==="value"||w==="checked"){let k=e;const q=n===void 0;if(w==="value"){let A=k.defaultValue;k.removeAttribute(w),k.defaultValue=A,k.value=k.__value=q?A:null}else{let A=k.defaultChecked;k.removeAttribute(w),k.defaultChecked=A,k.checked=q?A:!1}}else e.removeAttribute(S);else N||y.includes(w)&&(c||typeof x!="string")?(e[w]=x,w in l&&(l[w]=gi)):typeof x!="function"&&_e(e,w,x)}}}return p&&se(!0),m}function Ql(e,n,t=[],r=[],i=[],a,o=!1,s=!1){pi(i,t,r,l=>{var c=void 0,d={},p=e.nodeName==="SELECT",m=!1;if($n(()=>{var b=n(...l.map(le)),y=Yi(e,c,b,a,o,s);m&&p&&"value"in b&&He(e,b.value);for(let v of Object.getOwnPropertySymbols(d))b[v]||ye(d[v]);for(let v of Object.getOwnPropertySymbols(b)){var g=b[v];v.description===di&&(!c||g!==c[v])&&(d[v]&&ye(d[v]),d[v]=ce(()=>Ni(e,()=>g))),y[v]=g}c=y}),p){var f=e;Kn(()=>{He(f,c.value,!0),zi(f)})}m=!0})}function Qe(e){return e.__attributes??(e.__attributes={[Xn]:e.nodeName.includes("-"),[Zn]:e.namespaceURI===hi})}var wn=new Map;function et(e){var n=e.getAttribute("is")||e.nodeName,t=wn.get(n);if(t)return t;wn.set(n,t=[]);for(var r,i=e,a=Element.prototype;a!==i;){r=yi(i);for(var o in r)r[o].set&&t.push(o);i=vi(i)}return t}function Xl(e=!1){const n=_i,t=n.l.u;if(!t)return;let r=()=>wi(n.s);if(e){let i=0,a={};const o=ki(()=>{let s=!1;const l=n.s;for(const c in l)l[c]!==a[c]&&(a[c]=l[c],s=!0);return s&&i++,i});r=()=>le(o)}t.b.length&&xi(()=>{kn(n,r),yn(t.b)}),bn(()=>{const i=Si(()=>t.m.map(Ai));return()=>{for(const a of i)typeof a=="function"&&a()}}),t.a.length&&bn(()=>{kn(n,r),yn(t.a)})}function kn(e,n){if(e.l.s)for(const t of e.l.s)le(t);n()}const Wi="";function $i(...e){return Ii+Wi+Di(e[0],e[1])}Ci();const Ki=`---
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
`,Qi=`---
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
`,Xi=`---
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
`,Zi=`---
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
`,er=`---
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
`,nr=`---
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
`,tr=`---
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
`,ir=`---
name: Flutter Movie App
slug: flutter-movie-manip
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
`,rr=`---
name: Flutter Todo List
slug: flutter-todo-list
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
`,or=`---
name: Foot AI
slug: foot-ai
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
`,ar=`---
name: HR Data Analytics
slug: hr-data-analytics
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
`,sr=`---
name: Nano Pong
slug: nano-pong
published: true
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
`,lr=`---
name: Quiz AI
slug: quiz-ai
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
`,cr=`---
name: Snake Game AI
slug: snake-game-ai
published: true
type: Machine Learning
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
`,ur=`---
name: Squat Counter IA
slug: squat-counter-ia
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
`,pr=`---
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
`,dr=`---
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
`,mr=`---
name: TP VPO CIFAR-10
slug: tpvpocifar
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
`,gr=`---
name: Android Studio
slug: android-studio
published: true
category: devtools
color: green
logo: AndroidStudio
---

IDE officiel pour le développement Android. Émulateur, débogage et outils de build Gradle intégrés.
`,fr=`---
name: Apache2
slug: apache2
published: true
category: devops
color: red
logo: Apache
---

Serveur web HTTP open-source. Configuration de virtual hosts, reverse proxy et modules.
`,hr=`---
name: Arduino
slug: arduino
published: true
category: devtools
color: teal
logo: Arduino
---

Programmation de microcontrôleurs pour des projets IoT et électronique embarquée.
`,vr=`---
name: Autonomie & apprentissage
slug: autonomy
published: true
category: soft
color: blue
logo: Autonomy
---

Capacité à apprendre par moi-même, à m'auto-former rapidement, et à être force de proposition.
`,br=`---
name: BungeeCord / Waterfall
slug: bungeecord
published: true
category: devtools
color: yellow
logo: BungeeCord
---

Proxy Minecraft pour connecter plusieurs serveurs. Waterfall est un fork optimisé avec corrections de bugs.
`,yr=`---
name: C
slug: c
published: true
category: pro-lang
color: gray
logo: C
---

Langage bas niveau utilisé pour la programmation système et les performances critiques.
`,_r=`---
name: CI/CD
slug: ci-cd
published: true
category: devops
color: gray
logo: CICD
---

Mise en place de pipelines CI/CD via GitLab. Automatisation des tests et déploiement.
`,xr=`---
name: CLion
slug: clion
published: true
category: devtools
color: green
logo: CLion
---

IDE JetBrains pour C et C++. CMake intégré, debugging avancé et analyse de code statique.
`,Sr=`---
name: Confluence
slug: confluence
published: true
category: devtools
color: blue
logo: Confluence
---

Plateforme de documentation collaborative Atlassian. Wiki d'équipe, knowledge base et documentation projet.
`,Ar=`---
name: Créativité
slug: creativity
published: true
category: soft
color: purple
logo: Creativity
---

Création d'expériences originales, notamment en réalité virtuelle ou dans la conception d'UI.
`,wr=`---
name: C#
slug: csharp
published: true
category: pro-lang
color: purple
logo: CSharp
---

Langage orienté objet de Microsoft, utilisé pour le développement .NET et Unity.
`,kr=`---
name: CSS
slug: css
published: true
category: markup-style
color: blue
logo: CSS
---

Mise en forme des interfaces. Utilisé avec Sass ou Tailwind selon les projets.
`,Cr=`---
name: Dart
slug: dart
published: true
category: pro-lang
color: cyan
logo: Dart
---

Langage de Google utilisé principalement avec Flutter pour le développement mobile cross-platform.
`,Tr=`---
name: DataGrip
slug: datagrip
published: true
category: devtools
color: purple
logo: DataGrip
---

IDE JetBrains pour bases de données. Support multi-SGBD, requêtes SQL et administration.
`,Lr=`---
name: Docker Swarm
slug: docker-swarm
published: true
category: devops
color: blue
logo: Docker
---

Orchestration native de Docker pour le clustering et le déploiement de services distribués.
`,jr=`---
name: Docker
slug: docker
published: true
category: devops
color: blue
logo: Docker
---

Conteneurisation d'applications. Utilisé pour créer des environnements de test ou déployer des apps.
`,Er=`---
name: .NET
slug: dotnet
published: true
category: framework
color: purple
logo: DotNet
---

Framework Microsoft pour le développement d'applications web, desktop et cloud.
`,Pr=`---
name: Electron
slug: electron
published: true
category: framework
color: cyan
logo: Electron
---

Framework pour créer des applications desktop cross-platform avec les technologies web.
`,Ir=`---
name: Microsoft Excel
slug: excel
published: true
category: devtools
color: green
logo: Excel
---

Tableur avancé pour l'analyse de données, formules complexes, macros VBA et visualisation.
`,Dr=`---
name: Express.js
slug: expressjs
published: true
category: framework
color: gray
logo: Express
---

Framework minimaliste pour Node.js, utilisé pour créer des APIs REST et des serveurs web.
`,qr=`---
name: Firebase
slug: firebase
published: true
category: devops
color: orange
logo: Firebase
---

Plateforme Google pour le backend-as-a-service : authentification, base de données temps réel, hosting.
`,Fr=`---
name: Flask
slug: flask
published: true
category: framework
color: gray
logo: Flask
---

Micro-framework Python léger pour le développement web et d'APIs.
`,Mr=`---
name: Flutter
slug: flutter
published: true
category: framework
color: cyan
logo: Flutter
---

Framework UI de Google pour créer des applications mobiles, web et desktop à partir d'une seule codebase.
`,Nr=`---
name: Git
slug: git
published: true
category: devtools
color: orange
logo: Git
---

Système de versionnement utilisé dans tous mes projets. Workflow GitLab et GitHub.
`,Or=`---
name: Grafana
slug: grafana
published: true
category: devops
color: orange
logo: Grafana
---

Plateforme de visualisation et monitoring pour métriques et logs.
`,Rr=`---
name: HTML
slug: html
published: true
category: markup-style
color: orange
logo: HTML
---

Structure des pages web. Maîtrisé depuis mes débuts.
`,Br=`---
name: Hugo
slug: hugo
published: true
category: framework
color: pink
logo: Hugo
---

Générateur de sites statiques ultra-rapide écrit en Go.
`,Gr=`---
name: IntelliJ IDEA
slug: intellij
published: true
category: devtools
color: pink
logo: IntelliJ
---

IDE JetBrains puissant pour Java, Kotlin et développement polyglotte. Refactoring et analyse de code avancés.
`,Hr=`---
name: Ionic
slug: ionic
published: true
category: framework
color: blue
logo: Ionic
---

Framework pour créer des applications mobiles hybrides avec les technologies web.
`,Ur=`---
name: Java
slug: java
published: true
category: pro-lang
color: red
logo: Java
---

Langage orienté objet utilisé principalement dans mes projets backend chez Synchrotron SOLEIL.
`,zr=`---
name: JavaFX
slug: javafx
published: true
category: framework
color: orange
logo: Java
---

Framework Java pour créer des interfaces graphiques modernes et des applications desktop riches.
`,Vr=`---
name: JavaScript
slug: js
published: true
category: pro-lang
color: yellow
logo: JavaScript
---

Langage de programmation principal utilisé pour les interfaces interactives, côté client comme côté serveur avec Node.js.
`,Jr=`---
name: Java EE
slug: jee
published: true
category: framework
color: red
logo: Java
---

Plateforme Java pour le développement d'applications d'entreprise. Servlets, JSP, EJB, JPA et services web.
`,Yr=`---
name: Jira
slug: jira
published: true
category: devtools
color: blue
logo: Jira
---

Outil de gestion de projet Agile. Suivi des issues, sprints, Kanban et workflows personnalisés.
`,Wr=`---
name: Kotlin
slug: kotlin
published: true
category: pro-lang
color: purple
logo: Kotlin
---

Langage moderne sur JVM, concis et interopérable avec Java. Développement Android et backend.
`,$r=`---
name: Kubernetes
slug: kubernetes
published: true
category: devops
color: blue
logo: Kubernetes
---

Orchestration de conteneurs pour le déploiement, la mise à l'échelle et la gestion d'applications.
`,Kr=`---
name: Linux
slug: linux
published: true
category: devtools
color: gray
logo: Linux
---

Utilisation quotidienne de serveurs Debian et Red Hat au Synchrotron.
`,Qr=`---
name: MariaDB
slug: mariadb
published: true
category: db
color: brown
logo: MariaDB
---

Base de données relationnelle open-source, fork de MySQL.
`,Xr=`---
name: Minikube
slug: minikube
published: true
category: devops
color: blue
logo: Kubernetes
---

Kubernetes local pour le développement et les tests. Environnement de cluster complet sur une seule machine.
`,Zr=`---
name: MongoDB
slug: mongodb
published: true
category: db
color: green
logo: MongoDB
---

Base de données NoSQL orientée documents, idéale pour les données flexibles et le scaling horizontal.
`,eo=`---
name: MySQL
slug: mysql
published: true
category: db
color: blue
logo: MySQL
---

Système de gestion de base de données relationnelle open-source très répandu.
`,no=`---
name: Nginx
slug: nginx
published: true
category: devops
color: green
logo: Nginx
---

Serveur web haute performance, reverse proxy et load balancer.
`,to=`---
name: Node.js
slug: nodejs
published: true
category: framework
color: green
logo: NodeJs
---

Runtime JavaScript côté serveur pour créer des applications backend scalables.
`,io=`---
name: OpenCV
slug: opencv
published: true
category: library
color: blue
logo: OpenCV
---

Bibliothèque de vision par ordinateur pour le traitement d'images et la détection d'objets.
`,ro=`---
name: OpenXR
slug: openxr
published: true
category: library
color: blue
logo: OpenXR
---

Standard ouvert pour le développement d'applications VR/AR. Utilisé pour créer des expériences immersives cross-platform.
`,oo=`---
name: Oracle
slug: oracle
published: true
category: db
color: red
logo: Oracle
---

Système de gestion de base de données relationnelle d'entreprise.
`,ao=`---
name: Pandas
slug: pandas
published: true
category: library
color: blue
logo: Pandas
---

Bibliothèque Python pour la manipulation et l'analyse de données structurées.
`,so=`---
name: PaperMC
slug: papermc
published: true
category: devtools
color: gray
logo: PaperMC
---

Fork haute performance de Spigot pour serveurs Minecraft. Optimisation et API étendue pour plugins.
`,lo=`---
name: Photoshop
slug: photoshop
published: true
category: design
color: blue
logo: Photoshop
---

Logiciel de retouche d'image et de création graphique d'Adobe.
`,co=`---
name: PHP
slug: php
published: true
category: pro-lang
color: purple
logo: PHP
---

Langage de script côté serveur très utilisé pour le développement web.
`,uo=`---
name: Playwright
slug: playwright
published: true
category: test
color: green
logo: Playwright
---

Framework de test end-to-end moderne pour applications web. Support multi-navigateurs et automatisation avancée.
`,po=`---
name: PostgreSQL
slug: postgresql
published: true
category: db
color: blue
logo: PostgreSQL
---

Base de données relationnelle open-source avancée avec support JSON et extensions.
`,mo=`---
name: Postman
slug: postman
published: true
category: devtools
color: orange
logo: Postman
---

Outil de test et documentation d'APIs REST et GraphQL.
`,go=`---
name: Microsoft PowerPoint
slug: powerpoint
published: true
category: devtools
color: orange
logo: PowerPoint
---

Création de présentations professionnelles, animations et supports de communication visuels.
`,fo=`---
name: PyCharm
slug: pycharm
published: true
category: devtools
color: green
logo: PyCharm
---

IDE JetBrains dédié au développement Python. Support Django, Flask, data science et debugging avancé.
`,ho=`---
name: Python
slug: python
published: true
category: pro-lang
color: yellow
logo: Python
---

Langage polyvalent utilisé pour le scripting, le data science, le machine learning et le web.
`,vo=`---
name: React.js
slug: reactjs
published: true
category: library
color: cyan
logo: ReactJs
---

Bibliothèque JavaScript pour créer des interfaces utilisateur réactives. Utilisé professionnellement.
`,bo=`---
name: Redis
slug: redis
published: true
category: db
color: red
logo: Redis
---

Base de données in-memory ultra-rapide. Cache, pub/sub, et structures de données avancées.
`,yo=`---
name: Rider
slug: rider
published: true
category: devtools
color: red
logo: Rider
---

IDE JetBrains pour .NET et Unity. Développement C#, ASP.NET et game development.
`,_o=`---
name: Rust
slug: rust
published: true
category: pro-lang
color: orange
logo: Rust
---

Langage système performant avec gestion mémoire sécurisée sans garbage collector.
`,xo=`---
name: Sass
slug: sass
published: true
category: markup-style
color: pink
logo: Sass
---

Préprocesseur CSS qui facilite la factorisation et la gestion de grands projets.
`,So=`---
name: Selenium
slug: selenium
published: true
category: test
color: green
logo: Selenium
---

Framework d'automatisation de tests pour navigateurs web.
`,Ao=`---
name: Skript
slug: skript
published: true
category: devtools
color: orange
logo: Skript
---

Langage de scripting simplifié pour créer des plugins Minecraft sans Java. Syntaxe proche de l'anglais naturel.
`,wo=`---
name: Spigot
slug: spigot
published: true
category: devtools
color: orange
logo: Spigot
---

Serveur Minecraft modifié avec API pour plugins. Base de nombreux serveurs communautaires.
`,ko=`---
name: Spring
slug: spring
published: true
category: framework
color: green
logo: Spring
---

Framework Java pour le développement d'applications enterprise et microservices.
`,Co=`---
name: Spring Boot
slug: springboot
published: false
category: framework
color: green
logo: Spring
---

Framework Java pour créer rapidement des applications Spring autonomes et prêtes pour la production.
`,To=`---
name: SQLite
slug: sqlite
published: true
category: db
color: gray
logo: SQLite
---

Base de données légère intégrée. Idéale pour des projets locaux ou embarqués.
`,Lo=`---
name: Streamlit
slug: streamlit
published: true
category: framework
color: red
logo: Streamlit
---

Framework Python pour créer rapidement des applications web de data science et machine learning.
`,jo=`---
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
`,Eo=`---
name: Tailwind CSS
slug: tailwind
published: true
category: markup-style
color: cyan
logo: TailwindCSS
---

Framework CSS utility-first pour créer des interfaces rapidement sans quitter le HTML.
`,Po=`---
name: Travail en équipe
slug: teamwork
published: true
category: soft
color: green
logo: Teamwork
---

Collaboration efficace dans des équipes pluridisciplinaires. Communication claire et partage de responsabilités.
`,Io=`---
name: TensorFlow
slug: tensorflow
published: true
category: library
color: orange
logo: TensorFlow
---

Bibliothèque de machine learning et deep learning de Google.
`,Do=`---
name: TypeScript
slug: ts
published: true
category: pro-lang
color: blue
logo: TypeScript
---

Superset de JavaScript typé statiquement. Utilisé pour des projets robustes avec des IDE performants.
`,qo=`---
name: Unity
slug: unity
published: true
category: devtools
color: gray
logo: Unity
---

Moteur de jeu multiplateforme pour le développement de jeux 2D/3D et expériences VR/AR.
`,Fo=`---
name: Velocity
slug: velocity
published: true
category: devtools
color: cyan
logo: Velocity
---

Proxy Minecraft moderne et performant. Gestion de réseaux de serveurs avec API plugin avancée.
`,Mo=`---
name: VS Code
slug: vscode
published: true
category: devtools
color: blue
logo: VSCode
---

Éditeur de code léger et extensible de Microsoft. Extensions, debugging intégré et terminal.
`,No=`---
name: Vue.js
slug: vuejs
published: true
category: framework
color: green
logo: VueJs
---

Framework JavaScript progressif pour construire des interfaces utilisateur réactives.
`,Oo=`---
name: WebStorm
slug: webstorm
published: true
category: devtools
color: cyan
logo: WebStorm
---

IDE JetBrains pour le développement JavaScript et TypeScript. Support React, Vue, Angular et Node.js.
`,Ro=`---
name: Microsoft Word
slug: word
published: true
category: devtools
color: blue
logo: Word
---

Traitement de texte pour documentation technique, rapports et rédaction professionnelle.
`,Bo=`---
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
`,Go=`---
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
`,Ho=`---
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
`,Uo=`---
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
`,zo=`---
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
`,Vo=`---
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
`,Jo=`# Site Configuration
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
`,Yo=`# Page d'accueil
# Personnalise le contenu de ta page d'accueil ici

title: Accueil

hero:
  description: >
    Développeur Full-Stack passionné, je crée des applications web modernes
    et performantes. Actuellement en alternance au Synchrotron SOLEIL et 
    en Master à l'ESIEA.
`,Wo=`# Page CV
# Personnalise le contenu de ta page CV ici

title: CV
pdfPath: /pdf/CV_Alexy_Vanot.pdf
downloadLabel: Télécharger
fullscreenLabel: Plein écran
`,$o=`# Page Contact
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
`;/*! js-yaml 4.1.1 https://github.com/nodeca/js-yaml @license MIT */function nt(e){return typeof e>"u"||e===null}function Ko(e){return typeof e=="object"&&e!==null}function Qo(e){return Array.isArray(e)?e:nt(e)?[]:[e]}function Xo(e,n){var t,r,i,a;if(n)for(a=Object.keys(n),t=0,r=a.length;t<r;t+=1)i=a[t],e[i]=n[i];return e}function Zo(e,n){var t="",r;for(r=0;r<n;r+=1)t+=e;return t}function ea(e){return e===0&&Number.NEGATIVE_INFINITY===1/e}var na=nt,ta=Ko,ia=Qo,ra=Zo,oa=ea,aa=Xo,L={isNothing:na,isObject:ta,toArray:ia,repeat:ra,isNegativeZero:oa,extend:aa};function tt(e,n){var t="",r=e.reason||"(unknown reason)";return e.mark?(e.mark.name&&(t+='in "'+e.mark.name+'" '),t+="("+(e.mark.line+1)+":"+(e.mark.column+1)+")",!n&&e.mark.snippet&&(t+=`

`+e.mark.snippet),r+" "+t):r}function ue(e,n){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=n,this.message=tt(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}ue.prototype=Object.create(Error.prototype);ue.prototype.constructor=ue;ue.prototype.toString=function(n){return this.name+": "+tt(this,n)};var P=ue;function Me(e,n,t,r,i){var a="",o="",s=Math.floor(i/2)-1;return r-n>s&&(a=" ... ",n=r-s+a.length),t-r>s&&(o=" ...",t=r+s-o.length),{str:a+e.slice(n,t).replace(/\t/g,"→")+o,pos:r-n+a.length}}function Ne(e,n){return L.repeat(" ",n-e.length)+e}function sa(e,n){if(n=Object.create(n||null),!e.buffer)return null;n.maxLength||(n.maxLength=79),typeof n.indent!="number"&&(n.indent=1),typeof n.linesBefore!="number"&&(n.linesBefore=3),typeof n.linesAfter!="number"&&(n.linesAfter=2);for(var t=/\r?\n|\r|\0/g,r=[0],i=[],a,o=-1;a=t.exec(e.buffer);)i.push(a.index),r.push(a.index+a[0].length),e.position<=a.index&&o<0&&(o=r.length-2);o<0&&(o=r.length-1);var s="",l,c,d=Math.min(e.line+n.linesAfter,i.length).toString().length,p=n.maxLength-(n.indent+d+3);for(l=1;l<=n.linesBefore&&!(o-l<0);l++)c=Me(e.buffer,r[o-l],i[o-l],e.position-(r[o]-r[o-l]),p),s=L.repeat(" ",n.indent)+Ne((e.line-l+1).toString(),d)+" | "+c.str+`
`+s;for(c=Me(e.buffer,r[o],i[o],e.position,p),s+=L.repeat(" ",n.indent)+Ne((e.line+1).toString(),d)+" | "+c.str+`
`,s+=L.repeat("-",n.indent+d+3+c.pos)+`^
`,l=1;l<=n.linesAfter&&!(o+l>=i.length);l++)c=Me(e.buffer,r[o+l],i[o+l],e.position-(r[o]-r[o+l]),p),s+=L.repeat(" ",n.indent)+Ne((e.line+l+1).toString(),d)+" | "+c.str+`
`;return s.replace(/\n$/,"")}var la=sa,ca=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],ua=["scalar","sequence","mapping"];function pa(e){var n={};return e!==null&&Object.keys(e).forEach(function(t){e[t].forEach(function(r){n[String(r)]=t})}),n}function da(e,n){if(n=n||{},Object.keys(n).forEach(function(t){if(ca.indexOf(t)===-1)throw new P('Unknown option "'+t+'" is met in definition of "'+e+'" YAML type.')}),this.options=n,this.tag=e,this.kind=n.kind||null,this.resolve=n.resolve||function(){return!0},this.construct=n.construct||function(t){return t},this.instanceOf=n.instanceOf||null,this.predicate=n.predicate||null,this.represent=n.represent||null,this.representName=n.representName||null,this.defaultStyle=n.defaultStyle||null,this.multi=n.multi||!1,this.styleAliases=pa(n.styleAliases||null),ua.indexOf(this.kind)===-1)throw new P('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')}var j=da;function Cn(e,n){var t=[];return e[n].forEach(function(r){var i=t.length;t.forEach(function(a,o){a.tag===r.tag&&a.kind===r.kind&&a.multi===r.multi&&(i=o)}),t[i]=r}),t}function ma(){var e={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},n,t;function r(i){i.multi?(e.multi[i.kind].push(i),e.multi.fallback.push(i)):e[i.kind][i.tag]=e.fallback[i.tag]=i}for(n=0,t=arguments.length;n<t;n+=1)arguments[n].forEach(r);return e}function Ue(e){return this.extend(e)}Ue.prototype.extend=function(n){var t=[],r=[];if(n instanceof j)r.push(n);else if(Array.isArray(n))r=r.concat(n);else if(n&&(Array.isArray(n.implicit)||Array.isArray(n.explicit)))n.implicit&&(t=t.concat(n.implicit)),n.explicit&&(r=r.concat(n.explicit));else throw new P("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");t.forEach(function(a){if(!(a instanceof j))throw new P("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(a.loadKind&&a.loadKind!=="scalar")throw new P("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(a.multi)throw new P("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),r.forEach(function(a){if(!(a instanceof j))throw new P("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var i=Object.create(Ue.prototype);return i.implicit=(this.implicit||[]).concat(t),i.explicit=(this.explicit||[]).concat(r),i.compiledImplicit=Cn(i,"implicit"),i.compiledExplicit=Cn(i,"explicit"),i.compiledTypeMap=ma(i.compiledImplicit,i.compiledExplicit),i};var it=Ue,rt=new j("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return e!==null?e:""}}),ot=new j("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return e!==null?e:[]}}),at=new j("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return e!==null?e:{}}}),st=new it({explicit:[rt,ot,at]});function ga(e){if(e===null)return!0;var n=e.length;return n===1&&e==="~"||n===4&&(e==="null"||e==="Null"||e==="NULL")}function fa(){return null}function ha(e){return e===null}var lt=new j("tag:yaml.org,2002:null",{kind:"scalar",resolve:ga,construct:fa,predicate:ha,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function va(e){if(e===null)return!1;var n=e.length;return n===4&&(e==="true"||e==="True"||e==="TRUE")||n===5&&(e==="false"||e==="False"||e==="FALSE")}function ba(e){return e==="true"||e==="True"||e==="TRUE"}function ya(e){return Object.prototype.toString.call(e)==="[object Boolean]"}var ct=new j("tag:yaml.org,2002:bool",{kind:"scalar",resolve:va,construct:ba,predicate:ya,represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"});function _a(e){return 48<=e&&e<=57||65<=e&&e<=70||97<=e&&e<=102}function xa(e){return 48<=e&&e<=55}function Sa(e){return 48<=e&&e<=57}function Aa(e){if(e===null)return!1;var n=e.length,t=0,r=!1,i;if(!n)return!1;if(i=e[t],(i==="-"||i==="+")&&(i=e[++t]),i==="0"){if(t+1===n)return!0;if(i=e[++t],i==="b"){for(t++;t<n;t++)if(i=e[t],i!=="_"){if(i!=="0"&&i!=="1")return!1;r=!0}return r&&i!=="_"}if(i==="x"){for(t++;t<n;t++)if(i=e[t],i!=="_"){if(!_a(e.charCodeAt(t)))return!1;r=!0}return r&&i!=="_"}if(i==="o"){for(t++;t<n;t++)if(i=e[t],i!=="_"){if(!xa(e.charCodeAt(t)))return!1;r=!0}return r&&i!=="_"}}if(i==="_")return!1;for(;t<n;t++)if(i=e[t],i!=="_"){if(!Sa(e.charCodeAt(t)))return!1;r=!0}return!(!r||i==="_")}function wa(e){var n=e,t=1,r;if(n.indexOf("_")!==-1&&(n=n.replace(/_/g,"")),r=n[0],(r==="-"||r==="+")&&(r==="-"&&(t=-1),n=n.slice(1),r=n[0]),n==="0")return 0;if(r==="0"){if(n[1]==="b")return t*parseInt(n.slice(2),2);if(n[1]==="x")return t*parseInt(n.slice(2),16);if(n[1]==="o")return t*parseInt(n.slice(2),8)}return t*parseInt(n,10)}function ka(e){return Object.prototype.toString.call(e)==="[object Number]"&&e%1===0&&!L.isNegativeZero(e)}var ut=new j("tag:yaml.org,2002:int",{kind:"scalar",resolve:Aa,construct:wa,predicate:ka,represent:{binary:function(e){return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){return e>=0?"0o"+e.toString(8):"-0o"+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),Ca=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function Ta(e){return!(e===null||!Ca.test(e)||e[e.length-1]==="_")}function La(e){var n,t;return n=e.replace(/_/g,"").toLowerCase(),t=n[0]==="-"?-1:1,"+-".indexOf(n[0])>=0&&(n=n.slice(1)),n===".inf"?t===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:n===".nan"?NaN:t*parseFloat(n,10)}var ja=/^[-+]?[0-9]+e/;function Ea(e,n){var t;if(isNaN(e))switch(n){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(n){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(n){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(L.isNegativeZero(e))return"-0.0";return t=e.toString(10),ja.test(t)?t.replace("e",".e"):t}function Pa(e){return Object.prototype.toString.call(e)==="[object Number]"&&(e%1!==0||L.isNegativeZero(e))}var pt=new j("tag:yaml.org,2002:float",{kind:"scalar",resolve:Ta,construct:La,predicate:Pa,represent:Ea,defaultStyle:"lowercase"}),dt=st.extend({implicit:[lt,ct,ut,pt]}),mt=dt,gt=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),ft=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function Ia(e){return e===null?!1:gt.exec(e)!==null||ft.exec(e)!==null}function Da(e){var n,t,r,i,a,o,s,l=0,c=null,d,p,m;if(n=gt.exec(e),n===null&&(n=ft.exec(e)),n===null)throw new Error("Date resolve error");if(t=+n[1],r=+n[2]-1,i=+n[3],!n[4])return new Date(Date.UTC(t,r,i));if(a=+n[4],o=+n[5],s=+n[6],n[7]){for(l=n[7].slice(0,3);l.length<3;)l+="0";l=+l}return n[9]&&(d=+n[10],p=+(n[11]||0),c=(d*60+p)*6e4,n[9]==="-"&&(c=-c)),m=new Date(Date.UTC(t,r,i,a,o,s,l)),c&&m.setTime(m.getTime()-c),m}function qa(e){return e.toISOString()}var ht=new j("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:Ia,construct:Da,instanceOf:Date,represent:qa});function Fa(e){return e==="<<"||e===null}var vt=new j("tag:yaml.org,2002:merge",{kind:"scalar",resolve:Fa}),Xe=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function Ma(e){if(e===null)return!1;var n,t,r=0,i=e.length,a=Xe;for(t=0;t<i;t++)if(n=a.indexOf(e.charAt(t)),!(n>64)){if(n<0)return!1;r+=6}return r%8===0}function Na(e){var n,t,r=e.replace(/[\r\n=]/g,""),i=r.length,a=Xe,o=0,s=[];for(n=0;n<i;n++)n%4===0&&n&&(s.push(o>>16&255),s.push(o>>8&255),s.push(o&255)),o=o<<6|a.indexOf(r.charAt(n));return t=i%4*6,t===0?(s.push(o>>16&255),s.push(o>>8&255),s.push(o&255)):t===18?(s.push(o>>10&255),s.push(o>>2&255)):t===12&&s.push(o>>4&255),new Uint8Array(s)}function Oa(e){var n="",t=0,r,i,a=e.length,o=Xe;for(r=0;r<a;r++)r%3===0&&r&&(n+=o[t>>18&63],n+=o[t>>12&63],n+=o[t>>6&63],n+=o[t&63]),t=(t<<8)+e[r];return i=a%3,i===0?(n+=o[t>>18&63],n+=o[t>>12&63],n+=o[t>>6&63],n+=o[t&63]):i===2?(n+=o[t>>10&63],n+=o[t>>4&63],n+=o[t<<2&63],n+=o[64]):i===1&&(n+=o[t>>2&63],n+=o[t<<4&63],n+=o[64],n+=o[64]),n}function Ra(e){return Object.prototype.toString.call(e)==="[object Uint8Array]"}var bt=new j("tag:yaml.org,2002:binary",{kind:"scalar",resolve:Ma,construct:Na,predicate:Ra,represent:Oa}),Ba=Object.prototype.hasOwnProperty,Ga=Object.prototype.toString;function Ha(e){if(e===null)return!0;var n=[],t,r,i,a,o,s=e;for(t=0,r=s.length;t<r;t+=1){if(i=s[t],o=!1,Ga.call(i)!=="[object Object]")return!1;for(a in i)if(Ba.call(i,a))if(!o)o=!0;else return!1;if(!o)return!1;if(n.indexOf(a)===-1)n.push(a);else return!1}return!0}function Ua(e){return e!==null?e:[]}var yt=new j("tag:yaml.org,2002:omap",{kind:"sequence",resolve:Ha,construct:Ua}),za=Object.prototype.toString;function Va(e){if(e===null)return!0;var n,t,r,i,a,o=e;for(a=new Array(o.length),n=0,t=o.length;n<t;n+=1){if(r=o[n],za.call(r)!=="[object Object]"||(i=Object.keys(r),i.length!==1))return!1;a[n]=[i[0],r[i[0]]]}return!0}function Ja(e){if(e===null)return[];var n,t,r,i,a,o=e;for(a=new Array(o.length),n=0,t=o.length;n<t;n+=1)r=o[n],i=Object.keys(r),a[n]=[i[0],r[i[0]]];return a}var _t=new j("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:Va,construct:Ja}),Ya=Object.prototype.hasOwnProperty;function Wa(e){if(e===null)return!0;var n,t=e;for(n in t)if(Ya.call(t,n)&&t[n]!==null)return!1;return!0}function $a(e){return e!==null?e:{}}var xt=new j("tag:yaml.org,2002:set",{kind:"mapping",resolve:Wa,construct:$a}),Ze=mt.extend({implicit:[ht,vt],explicit:[bt,yt,_t,xt]}),z=Object.prototype.hasOwnProperty,xe=1,St=2,At=3,Se=4,Oe=1,Ka=2,Tn=3,Qa=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,Xa=/[\x85\u2028\u2029]/,Za=/[,\[\]\{\}]/,wt=/^(?:!|!!|![a-z\-]+!)$/i,kt=/^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;function Ln(e){return Object.prototype.toString.call(e)}function O(e){return e===10||e===13}function V(e){return e===9||e===32}function D(e){return e===9||e===32||e===10||e===13}function Q(e){return e===44||e===91||e===93||e===123||e===125}function es(e){var n;return 48<=e&&e<=57?e-48:(n=e|32,97<=n&&n<=102?n-97+10:-1)}function ns(e){return e===120?2:e===117?4:e===85?8:0}function ts(e){return 48<=e&&e<=57?e-48:-1}function jn(e){return e===48?"\0":e===97?"\x07":e===98?"\b":e===116||e===9?"	":e===110?`
`:e===118?"\v":e===102?"\f":e===114?"\r":e===101?"\x1B":e===32?" ":e===34?'"':e===47?"/":e===92?"\\":e===78?"":e===95?" ":e===76?"\u2028":e===80?"\u2029":""}function is(e){return e<=65535?String.fromCharCode(e):String.fromCharCode((e-65536>>10)+55296,(e-65536&1023)+56320)}function Ct(e,n,t){n==="__proto__"?Object.defineProperty(e,n,{configurable:!0,enumerable:!0,writable:!0,value:t}):e[n]=t}var Tt=new Array(256),Lt=new Array(256);for(var W=0;W<256;W++)Tt[W]=jn(W)?1:0,Lt[W]=jn(W);function rs(e,n){this.input=e,this.filename=n.filename||null,this.schema=n.schema||Ze,this.onWarning=n.onWarning||null,this.legacy=n.legacy||!1,this.json=n.json||!1,this.listener=n.listener||null,this.implicitTypes=this.schema.compiledImplicit,this.typeMap=this.schema.compiledTypeMap,this.length=e.length,this.position=0,this.line=0,this.lineStart=0,this.lineIndent=0,this.firstTabInLine=-1,this.documents=[]}function jt(e,n){var t={name:e.filename,buffer:e.input.slice(0,-1),position:e.position,line:e.line,column:e.position-e.lineStart};return t.snippet=la(t),new P(n,t)}function h(e,n){throw jt(e,n)}function Ae(e,n){e.onWarning&&e.onWarning.call(null,jt(e,n))}var En={YAML:function(n,t,r){var i,a,o;n.version!==null&&h(n,"duplication of %YAML directive"),r.length!==1&&h(n,"YAML directive accepts exactly one argument"),i=/^([0-9]+)\.([0-9]+)$/.exec(r[0]),i===null&&h(n,"ill-formed argument of the YAML directive"),a=parseInt(i[1],10),o=parseInt(i[2],10),a!==1&&h(n,"unacceptable YAML version of the document"),n.version=r[0],n.checkLineBreaks=o<2,o!==1&&o!==2&&Ae(n,"unsupported YAML version of the document")},TAG:function(n,t,r){var i,a;r.length!==2&&h(n,"TAG directive accepts exactly two arguments"),i=r[0],a=r[1],wt.test(i)||h(n,"ill-formed tag handle (first argument) of the TAG directive"),z.call(n.tagMap,i)&&h(n,'there is a previously declared suffix for "'+i+'" tag handle'),kt.test(a)||h(n,"ill-formed tag prefix (second argument) of the TAG directive");try{a=decodeURIComponent(a)}catch{h(n,"tag prefix is malformed: "+a)}n.tagMap[i]=a}};function U(e,n,t,r){var i,a,o,s;if(n<t){if(s=e.input.slice(n,t),r)for(i=0,a=s.length;i<a;i+=1)o=s.charCodeAt(i),o===9||32<=o&&o<=1114111||h(e,"expected valid JSON character");else Qa.test(s)&&h(e,"the stream contains non-printable characters");e.result+=s}}function Pn(e,n,t,r){var i,a,o,s;for(L.isObject(t)||h(e,"cannot merge mappings; the provided source object is unacceptable"),i=Object.keys(t),o=0,s=i.length;o<s;o+=1)a=i[o],z.call(n,a)||(Ct(n,a,t[a]),r[a]=!0)}function X(e,n,t,r,i,a,o,s,l){var c,d;if(Array.isArray(i))for(i=Array.prototype.slice.call(i),c=0,d=i.length;c<d;c+=1)Array.isArray(i[c])&&h(e,"nested arrays are not supported inside keys"),typeof i=="object"&&Ln(i[c])==="[object Object]"&&(i[c]="[object Object]");if(typeof i=="object"&&Ln(i)==="[object Object]"&&(i="[object Object]"),i=String(i),n===null&&(n={}),r==="tag:yaml.org,2002:merge")if(Array.isArray(a))for(c=0,d=a.length;c<d;c+=1)Pn(e,n,a[c],t);else Pn(e,n,a,t);else!e.json&&!z.call(t,i)&&z.call(n,i)&&(e.line=o||e.line,e.lineStart=s||e.lineStart,e.position=l||e.position,h(e,"duplicated mapping key")),Ct(n,i,a),delete t[i];return n}function en(e){var n;n=e.input.charCodeAt(e.position),n===10?e.position++:n===13?(e.position++,e.input.charCodeAt(e.position)===10&&e.position++):h(e,"a line break is expected"),e.line+=1,e.lineStart=e.position,e.firstTabInLine=-1}function T(e,n,t){for(var r=0,i=e.input.charCodeAt(e.position);i!==0;){for(;V(i);)i===9&&e.firstTabInLine===-1&&(e.firstTabInLine=e.position),i=e.input.charCodeAt(++e.position);if(n&&i===35)do i=e.input.charCodeAt(++e.position);while(i!==10&&i!==13&&i!==0);if(O(i))for(en(e),i=e.input.charCodeAt(e.position),r++,e.lineIndent=0;i===32;)e.lineIndent++,i=e.input.charCodeAt(++e.position);else break}return t!==-1&&r!==0&&e.lineIndent<t&&Ae(e,"deficient indentation"),r}function Ce(e){var n=e.position,t;return t=e.input.charCodeAt(n),!!((t===45||t===46)&&t===e.input.charCodeAt(n+1)&&t===e.input.charCodeAt(n+2)&&(n+=3,t=e.input.charCodeAt(n),t===0||D(t)))}function nn(e,n){n===1?e.result+=" ":n>1&&(e.result+=L.repeat(`
`,n-1))}function os(e,n,t){var r,i,a,o,s,l,c,d,p=e.kind,m=e.result,f;if(f=e.input.charCodeAt(e.position),D(f)||Q(f)||f===35||f===38||f===42||f===33||f===124||f===62||f===39||f===34||f===37||f===64||f===96||(f===63||f===45)&&(i=e.input.charCodeAt(e.position+1),D(i)||t&&Q(i)))return!1;for(e.kind="scalar",e.result="",a=o=e.position,s=!1;f!==0;){if(f===58){if(i=e.input.charCodeAt(e.position+1),D(i)||t&&Q(i))break}else if(f===35){if(r=e.input.charCodeAt(e.position-1),D(r))break}else{if(e.position===e.lineStart&&Ce(e)||t&&Q(f))break;if(O(f))if(l=e.line,c=e.lineStart,d=e.lineIndent,T(e,!1,-1),e.lineIndent>=n){s=!0,f=e.input.charCodeAt(e.position);continue}else{e.position=o,e.line=l,e.lineStart=c,e.lineIndent=d;break}}s&&(U(e,a,o,!1),nn(e,e.line-l),a=o=e.position,s=!1),V(f)||(o=e.position+1),f=e.input.charCodeAt(++e.position)}return U(e,a,o,!1),e.result?!0:(e.kind=p,e.result=m,!1)}function as(e,n){var t,r,i;if(t=e.input.charCodeAt(e.position),t!==39)return!1;for(e.kind="scalar",e.result="",e.position++,r=i=e.position;(t=e.input.charCodeAt(e.position))!==0;)if(t===39)if(U(e,r,e.position,!0),t=e.input.charCodeAt(++e.position),t===39)r=e.position,e.position++,i=e.position;else return!0;else O(t)?(U(e,r,i,!0),nn(e,T(e,!1,n)),r=i=e.position):e.position===e.lineStart&&Ce(e)?h(e,"unexpected end of the document within a single quoted scalar"):(e.position++,i=e.position);h(e,"unexpected end of the stream within a single quoted scalar")}function ss(e,n){var t,r,i,a,o,s;if(s=e.input.charCodeAt(e.position),s!==34)return!1;for(e.kind="scalar",e.result="",e.position++,t=r=e.position;(s=e.input.charCodeAt(e.position))!==0;){if(s===34)return U(e,t,e.position,!0),e.position++,!0;if(s===92){if(U(e,t,e.position,!0),s=e.input.charCodeAt(++e.position),O(s))T(e,!1,n);else if(s<256&&Tt[s])e.result+=Lt[s],e.position++;else if((o=ns(s))>0){for(i=o,a=0;i>0;i--)s=e.input.charCodeAt(++e.position),(o=es(s))>=0?a=(a<<4)+o:h(e,"expected hexadecimal character");e.result+=is(a),e.position++}else h(e,"unknown escape sequence");t=r=e.position}else O(s)?(U(e,t,r,!0),nn(e,T(e,!1,n)),t=r=e.position):e.position===e.lineStart&&Ce(e)?h(e,"unexpected end of the document within a double quoted scalar"):(e.position++,r=e.position)}h(e,"unexpected end of the stream within a double quoted scalar")}function ls(e,n){var t=!0,r,i,a,o=e.tag,s,l=e.anchor,c,d,p,m,f,b=Object.create(null),y,g,v,_;if(_=e.input.charCodeAt(e.position),_===91)d=93,f=!1,s=[];else if(_===123)d=125,f=!0,s={};else return!1;for(e.anchor!==null&&(e.anchorMap[e.anchor]=s),_=e.input.charCodeAt(++e.position);_!==0;){if(T(e,!0,n),_=e.input.charCodeAt(e.position),_===d)return e.position++,e.tag=o,e.anchor=l,e.kind=f?"mapping":"sequence",e.result=s,!0;t?_===44&&h(e,"expected the node content, but found ','"):h(e,"missed comma between flow collection entries"),g=y=v=null,p=m=!1,_===63&&(c=e.input.charCodeAt(e.position+1),D(c)&&(p=m=!0,e.position++,T(e,!0,n))),r=e.line,i=e.lineStart,a=e.position,Z(e,n,xe,!1,!0),g=e.tag,y=e.result,T(e,!0,n),_=e.input.charCodeAt(e.position),(m||e.line===r)&&_===58&&(p=!0,_=e.input.charCodeAt(++e.position),T(e,!0,n),Z(e,n,xe,!1,!0),v=e.result),f?X(e,s,b,g,y,v,r,i,a):p?s.push(X(e,null,b,g,y,v,r,i,a)):s.push(y),T(e,!0,n),_=e.input.charCodeAt(e.position),_===44?(t=!0,_=e.input.charCodeAt(++e.position)):t=!1}h(e,"unexpected end of the stream within a flow collection")}function cs(e,n){var t,r,i=Oe,a=!1,o=!1,s=n,l=0,c=!1,d,p;if(p=e.input.charCodeAt(e.position),p===124)r=!1;else if(p===62)r=!0;else return!1;for(e.kind="scalar",e.result="";p!==0;)if(p=e.input.charCodeAt(++e.position),p===43||p===45)Oe===i?i=p===43?Tn:Ka:h(e,"repeat of a chomping mode identifier");else if((d=ts(p))>=0)d===0?h(e,"bad explicit indentation width of a block scalar; it cannot be less than one"):o?h(e,"repeat of an indentation width identifier"):(s=n+d-1,o=!0);else break;if(V(p)){do p=e.input.charCodeAt(++e.position);while(V(p));if(p===35)do p=e.input.charCodeAt(++e.position);while(!O(p)&&p!==0)}for(;p!==0;){for(en(e),e.lineIndent=0,p=e.input.charCodeAt(e.position);(!o||e.lineIndent<s)&&p===32;)e.lineIndent++,p=e.input.charCodeAt(++e.position);if(!o&&e.lineIndent>s&&(s=e.lineIndent),O(p)){l++;continue}if(e.lineIndent<s){i===Tn?e.result+=L.repeat(`
`,a?1+l:l):i===Oe&&a&&(e.result+=`
`);break}for(r?V(p)?(c=!0,e.result+=L.repeat(`
`,a?1+l:l)):c?(c=!1,e.result+=L.repeat(`
`,l+1)):l===0?a&&(e.result+=" "):e.result+=L.repeat(`
`,l):e.result+=L.repeat(`
`,a?1+l:l),a=!0,o=!0,l=0,t=e.position;!O(p)&&p!==0;)p=e.input.charCodeAt(++e.position);U(e,t,e.position,!1)}return!0}function In(e,n){var t,r=e.tag,i=e.anchor,a=[],o,s=!1,l;if(e.firstTabInLine!==-1)return!1;for(e.anchor!==null&&(e.anchorMap[e.anchor]=a),l=e.input.charCodeAt(e.position);l!==0&&(e.firstTabInLine!==-1&&(e.position=e.firstTabInLine,h(e,"tab characters must not be used in indentation")),!(l!==45||(o=e.input.charCodeAt(e.position+1),!D(o))));){if(s=!0,e.position++,T(e,!0,-1)&&e.lineIndent<=n){a.push(null),l=e.input.charCodeAt(e.position);continue}if(t=e.line,Z(e,n,At,!1,!0),a.push(e.result),T(e,!0,-1),l=e.input.charCodeAt(e.position),(e.line===t||e.lineIndent>n)&&l!==0)h(e,"bad indentation of a sequence entry");else if(e.lineIndent<n)break}return s?(e.tag=r,e.anchor=i,e.kind="sequence",e.result=a,!0):!1}function us(e,n,t){var r,i,a,o,s,l,c=e.tag,d=e.anchor,p={},m=Object.create(null),f=null,b=null,y=null,g=!1,v=!1,_;if(e.firstTabInLine!==-1)return!1;for(e.anchor!==null&&(e.anchorMap[e.anchor]=p),_=e.input.charCodeAt(e.position);_!==0;){if(!g&&e.firstTabInLine!==-1&&(e.position=e.firstTabInLine,h(e,"tab characters must not be used in indentation")),r=e.input.charCodeAt(e.position+1),a=e.line,(_===63||_===58)&&D(r))_===63?(g&&(X(e,p,m,f,b,null,o,s,l),f=b=y=null),v=!0,g=!0,i=!0):g?(g=!1,i=!0):h(e,"incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"),e.position+=1,_=r;else{if(o=e.line,s=e.lineStart,l=e.position,!Z(e,t,St,!1,!0))break;if(e.line===a){for(_=e.input.charCodeAt(e.position);V(_);)_=e.input.charCodeAt(++e.position);if(_===58)_=e.input.charCodeAt(++e.position),D(_)||h(e,"a whitespace character is expected after the key-value separator within a block mapping"),g&&(X(e,p,m,f,b,null,o,s,l),f=b=y=null),v=!0,g=!1,i=!1,f=e.tag,b=e.result;else if(v)h(e,"can not read an implicit mapping pair; a colon is missed");else return e.tag=c,e.anchor=d,!0}else if(v)h(e,"can not read a block mapping entry; a multiline key may not be an implicit key");else return e.tag=c,e.anchor=d,!0}if((e.line===a||e.lineIndent>n)&&(g&&(o=e.line,s=e.lineStart,l=e.position),Z(e,n,Se,!0,i)&&(g?b=e.result:y=e.result),g||(X(e,p,m,f,b,y,o,s,l),f=b=y=null),T(e,!0,-1),_=e.input.charCodeAt(e.position)),(e.line===a||e.lineIndent>n)&&_!==0)h(e,"bad indentation of a mapping entry");else if(e.lineIndent<n)break}return g&&X(e,p,m,f,b,null,o,s,l),v&&(e.tag=c,e.anchor=d,e.kind="mapping",e.result=p),v}function ps(e){var n,t=!1,r=!1,i,a,o;if(o=e.input.charCodeAt(e.position),o!==33)return!1;if(e.tag!==null&&h(e,"duplication of a tag property"),o=e.input.charCodeAt(++e.position),o===60?(t=!0,o=e.input.charCodeAt(++e.position)):o===33?(r=!0,i="!!",o=e.input.charCodeAt(++e.position)):i="!",n=e.position,t){do o=e.input.charCodeAt(++e.position);while(o!==0&&o!==62);e.position<e.length?(a=e.input.slice(n,e.position),o=e.input.charCodeAt(++e.position)):h(e,"unexpected end of the stream within a verbatim tag")}else{for(;o!==0&&!D(o);)o===33&&(r?h(e,"tag suffix cannot contain exclamation marks"):(i=e.input.slice(n-1,e.position+1),wt.test(i)||h(e,"named tag handle cannot contain such characters"),r=!0,n=e.position+1)),o=e.input.charCodeAt(++e.position);a=e.input.slice(n,e.position),Za.test(a)&&h(e,"tag suffix cannot contain flow indicator characters")}a&&!kt.test(a)&&h(e,"tag name cannot contain such characters: "+a);try{a=decodeURIComponent(a)}catch{h(e,"tag name is malformed: "+a)}return t?e.tag=a:z.call(e.tagMap,i)?e.tag=e.tagMap[i]+a:i==="!"?e.tag="!"+a:i==="!!"?e.tag="tag:yaml.org,2002:"+a:h(e,'undeclared tag handle "'+i+'"'),!0}function ds(e){var n,t;if(t=e.input.charCodeAt(e.position),t!==38)return!1;for(e.anchor!==null&&h(e,"duplication of an anchor property"),t=e.input.charCodeAt(++e.position),n=e.position;t!==0&&!D(t)&&!Q(t);)t=e.input.charCodeAt(++e.position);return e.position===n&&h(e,"name of an anchor node must contain at least one character"),e.anchor=e.input.slice(n,e.position),!0}function ms(e){var n,t,r;if(r=e.input.charCodeAt(e.position),r!==42)return!1;for(r=e.input.charCodeAt(++e.position),n=e.position;r!==0&&!D(r)&&!Q(r);)r=e.input.charCodeAt(++e.position);return e.position===n&&h(e,"name of an alias node must contain at least one character"),t=e.input.slice(n,e.position),z.call(e.anchorMap,t)||h(e,'unidentified alias "'+t+'"'),e.result=e.anchorMap[t],T(e,!0,-1),!0}function Z(e,n,t,r,i){var a,o,s,l=1,c=!1,d=!1,p,m,f,b,y,g;if(e.listener!==null&&e.listener("open",e),e.tag=null,e.anchor=null,e.kind=null,e.result=null,a=o=s=Se===t||At===t,r&&T(e,!0,-1)&&(c=!0,e.lineIndent>n?l=1:e.lineIndent===n?l=0:e.lineIndent<n&&(l=-1)),l===1)for(;ps(e)||ds(e);)T(e,!0,-1)?(c=!0,s=a,e.lineIndent>n?l=1:e.lineIndent===n?l=0:e.lineIndent<n&&(l=-1)):s=!1;if(s&&(s=c||i),(l===1||Se===t)&&(xe===t||St===t?y=n:y=n+1,g=e.position-e.lineStart,l===1?s&&(In(e,g)||us(e,g,y))||ls(e,y)?d=!0:(o&&cs(e,y)||as(e,y)||ss(e,y)?d=!0:ms(e)?(d=!0,(e.tag!==null||e.anchor!==null)&&h(e,"alias node should not have any properties")):os(e,y,xe===t)&&(d=!0,e.tag===null&&(e.tag="?")),e.anchor!==null&&(e.anchorMap[e.anchor]=e.result)):l===0&&(d=s&&In(e,g))),e.tag===null)e.anchor!==null&&(e.anchorMap[e.anchor]=e.result);else if(e.tag==="?"){for(e.result!==null&&e.kind!=="scalar"&&h(e,'unacceptable node kind for !<?> tag; it should be "scalar", not "'+e.kind+'"'),p=0,m=e.implicitTypes.length;p<m;p+=1)if(b=e.implicitTypes[p],b.resolve(e.result)){e.result=b.construct(e.result),e.tag=b.tag,e.anchor!==null&&(e.anchorMap[e.anchor]=e.result);break}}else if(e.tag!=="!"){if(z.call(e.typeMap[e.kind||"fallback"],e.tag))b=e.typeMap[e.kind||"fallback"][e.tag];else for(b=null,f=e.typeMap.multi[e.kind||"fallback"],p=0,m=f.length;p<m;p+=1)if(e.tag.slice(0,f[p].tag.length)===f[p].tag){b=f[p];break}b||h(e,"unknown tag !<"+e.tag+">"),e.result!==null&&b.kind!==e.kind&&h(e,"unacceptable node kind for !<"+e.tag+'> tag; it should be "'+b.kind+'", not "'+e.kind+'"'),b.resolve(e.result,e.tag)?(e.result=b.construct(e.result,e.tag),e.anchor!==null&&(e.anchorMap[e.anchor]=e.result)):h(e,"cannot resolve a node with !<"+e.tag+"> explicit tag")}return e.listener!==null&&e.listener("close",e),e.tag!==null||e.anchor!==null||d}function gs(e){var n=e.position,t,r,i,a=!1,o;for(e.version=null,e.checkLineBreaks=e.legacy,e.tagMap=Object.create(null),e.anchorMap=Object.create(null);(o=e.input.charCodeAt(e.position))!==0&&(T(e,!0,-1),o=e.input.charCodeAt(e.position),!(e.lineIndent>0||o!==37));){for(a=!0,o=e.input.charCodeAt(++e.position),t=e.position;o!==0&&!D(o);)o=e.input.charCodeAt(++e.position);for(r=e.input.slice(t,e.position),i=[],r.length<1&&h(e,"directive name must not be less than one character in length");o!==0;){for(;V(o);)o=e.input.charCodeAt(++e.position);if(o===35){do o=e.input.charCodeAt(++e.position);while(o!==0&&!O(o));break}if(O(o))break;for(t=e.position;o!==0&&!D(o);)o=e.input.charCodeAt(++e.position);i.push(e.input.slice(t,e.position))}o!==0&&en(e),z.call(En,r)?En[r](e,r,i):Ae(e,'unknown document directive "'+r+'"')}if(T(e,!0,-1),e.lineIndent===0&&e.input.charCodeAt(e.position)===45&&e.input.charCodeAt(e.position+1)===45&&e.input.charCodeAt(e.position+2)===45?(e.position+=3,T(e,!0,-1)):a&&h(e,"directives end mark is expected"),Z(e,e.lineIndent-1,Se,!1,!0),T(e,!0,-1),e.checkLineBreaks&&Xa.test(e.input.slice(n,e.position))&&Ae(e,"non-ASCII line breaks are interpreted as content"),e.documents.push(e.result),e.position===e.lineStart&&Ce(e)){e.input.charCodeAt(e.position)===46&&(e.position+=3,T(e,!0,-1));return}if(e.position<e.length-1)h(e,"end of the stream or a document separator is expected");else return}function Et(e,n){e=String(e),n=n||{},e.length!==0&&(e.charCodeAt(e.length-1)!==10&&e.charCodeAt(e.length-1)!==13&&(e+=`
`),e.charCodeAt(0)===65279&&(e=e.slice(1)));var t=new rs(e,n),r=e.indexOf("\0");for(r!==-1&&(t.position=r,h(t,"null byte is not allowed in input")),t.input+="\0";t.input.charCodeAt(t.position)===32;)t.lineIndent+=1,t.position+=1;for(;t.position<t.length-1;)gs(t);return t.documents}function fs(e,n,t){n!==null&&typeof n=="object"&&typeof t>"u"&&(t=n,n=null);var r=Et(e,t);if(typeof n!="function")return r;for(var i=0,a=r.length;i<a;i+=1)n(r[i])}function hs(e,n){var t=Et(e,n);if(t.length!==0){if(t.length===1)return t[0];throw new P("expected a single document in the stream, but found more")}}var vs=fs,bs=hs,Pt={loadAll:vs,load:bs},It=Object.prototype.toString,Dt=Object.prototype.hasOwnProperty,tn=65279,ys=9,pe=10,_s=13,xs=32,Ss=33,As=34,ze=35,ws=37,ks=38,Cs=39,Ts=42,qt=44,Ls=45,we=58,js=61,Es=62,Ps=63,Is=64,Ft=91,Mt=93,Ds=96,Nt=123,qs=124,Ot=125,E={};E[0]="\\0";E[7]="\\a";E[8]="\\b";E[9]="\\t";E[10]="\\n";E[11]="\\v";E[12]="\\f";E[13]="\\r";E[27]="\\e";E[34]='\\"';E[92]="\\\\";E[133]="\\N";E[160]="\\_";E[8232]="\\L";E[8233]="\\P";var Fs=["y","Y","yes","Yes","YES","on","On","ON","n","N","no","No","NO","off","Off","OFF"],Ms=/^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;function Ns(e,n){var t,r,i,a,o,s,l;if(n===null)return{};for(t={},r=Object.keys(n),i=0,a=r.length;i<a;i+=1)o=r[i],s=String(n[o]),o.slice(0,2)==="!!"&&(o="tag:yaml.org,2002:"+o.slice(2)),l=e.compiledTypeMap.fallback[o],l&&Dt.call(l.styleAliases,s)&&(s=l.styleAliases[s]),t[o]=s;return t}function Os(e){var n,t,r;if(n=e.toString(16).toUpperCase(),e<=255)t="x",r=2;else if(e<=65535)t="u",r=4;else if(e<=4294967295)t="U",r=8;else throw new P("code point within a string may not be greater than 0xFFFFFFFF");return"\\"+t+L.repeat("0",r-n.length)+n}var Rs=1,de=2;function Bs(e){this.schema=e.schema||Ze,this.indent=Math.max(1,e.indent||2),this.noArrayIndent=e.noArrayIndent||!1,this.skipInvalid=e.skipInvalid||!1,this.flowLevel=L.isNothing(e.flowLevel)?-1:e.flowLevel,this.styleMap=Ns(this.schema,e.styles||null),this.sortKeys=e.sortKeys||!1,this.lineWidth=e.lineWidth||80,this.noRefs=e.noRefs||!1,this.noCompatMode=e.noCompatMode||!1,this.condenseFlow=e.condenseFlow||!1,this.quotingType=e.quotingType==='"'?de:Rs,this.forceQuotes=e.forceQuotes||!1,this.replacer=typeof e.replacer=="function"?e.replacer:null,this.implicitTypes=this.schema.compiledImplicit,this.explicitTypes=this.schema.compiledExplicit,this.tag=null,this.result="",this.duplicates=[],this.usedDuplicates=null}function Dn(e,n){for(var t=L.repeat(" ",n),r=0,i=-1,a="",o,s=e.length;r<s;)i=e.indexOf(`
`,r),i===-1?(o=e.slice(r),r=s):(o=e.slice(r,i+1),r=i+1),o.length&&o!==`
`&&(a+=t),a+=o;return a}function Ve(e,n){return`
`+L.repeat(" ",e.indent*n)}function Gs(e,n){var t,r,i;for(t=0,r=e.implicitTypes.length;t<r;t+=1)if(i=e.implicitTypes[t],i.resolve(n))return!0;return!1}function ke(e){return e===xs||e===ys}function me(e){return 32<=e&&e<=126||161<=e&&e<=55295&&e!==8232&&e!==8233||57344<=e&&e<=65533&&e!==tn||65536<=e&&e<=1114111}function qn(e){return me(e)&&e!==tn&&e!==_s&&e!==pe}function Fn(e,n,t){var r=qn(e),i=r&&!ke(e);return(t?r:r&&e!==qt&&e!==Ft&&e!==Mt&&e!==Nt&&e!==Ot)&&e!==ze&&!(n===we&&!i)||qn(n)&&!ke(n)&&e===ze||n===we&&i}function Hs(e){return me(e)&&e!==tn&&!ke(e)&&e!==Ls&&e!==Ps&&e!==we&&e!==qt&&e!==Ft&&e!==Mt&&e!==Nt&&e!==Ot&&e!==ze&&e!==ks&&e!==Ts&&e!==Ss&&e!==qs&&e!==js&&e!==Es&&e!==Cs&&e!==As&&e!==ws&&e!==Is&&e!==Ds}function Us(e){return!ke(e)&&e!==we}function ae(e,n){var t=e.charCodeAt(n),r;return t>=55296&&t<=56319&&n+1<e.length&&(r=e.charCodeAt(n+1),r>=56320&&r<=57343)?(t-55296)*1024+r-56320+65536:t}function Rt(e){var n=/^\n* /;return n.test(e)}var Bt=1,Je=2,Gt=3,Ht=4,$=5;function zs(e,n,t,r,i,a,o,s){var l,c=0,d=null,p=!1,m=!1,f=r!==-1,b=-1,y=Hs(ae(e,0))&&Us(ae(e,e.length-1));if(n||o)for(l=0;l<e.length;c>=65536?l+=2:l++){if(c=ae(e,l),!me(c))return $;y=y&&Fn(c,d,s),d=c}else{for(l=0;l<e.length;c>=65536?l+=2:l++){if(c=ae(e,l),c===pe)p=!0,f&&(m=m||l-b-1>r&&e[b+1]!==" ",b=l);else if(!me(c))return $;y=y&&Fn(c,d,s),d=c}m=m||f&&l-b-1>r&&e[b+1]!==" "}return!p&&!m?y&&!o&&!i(e)?Bt:a===de?$:Je:t>9&&Rt(e)?$:o?a===de?$:Je:m?Ht:Gt}function Vs(e,n,t,r,i){e.dump=(function(){if(n.length===0)return e.quotingType===de?'""':"''";if(!e.noCompatMode&&(Fs.indexOf(n)!==-1||Ms.test(n)))return e.quotingType===de?'"'+n+'"':"'"+n+"'";var a=e.indent*Math.max(1,t),o=e.lineWidth===-1?-1:Math.max(Math.min(e.lineWidth,40),e.lineWidth-a),s=r||e.flowLevel>-1&&t>=e.flowLevel;function l(c){return Gs(e,c)}switch(zs(n,s,e.indent,o,l,e.quotingType,e.forceQuotes&&!r,i)){case Bt:return n;case Je:return"'"+n.replace(/'/g,"''")+"'";case Gt:return"|"+Mn(n,e.indent)+Nn(Dn(n,a));case Ht:return">"+Mn(n,e.indent)+Nn(Dn(Js(n,o),a));case $:return'"'+Ys(n)+'"';default:throw new P("impossible error: invalid scalar style")}})()}function Mn(e,n){var t=Rt(e)?String(n):"",r=e[e.length-1]===`
`,i=r&&(e[e.length-2]===`
`||e===`
`),a=i?"+":r?"":"-";return t+a+`
`}function Nn(e){return e[e.length-1]===`
`?e.slice(0,-1):e}function Js(e,n){for(var t=/(\n+)([^\n]*)/g,r=(function(){var c=e.indexOf(`
`);return c=c!==-1?c:e.length,t.lastIndex=c,On(e.slice(0,c),n)})(),i=e[0]===`
`||e[0]===" ",a,o;o=t.exec(e);){var s=o[1],l=o[2];a=l[0]===" ",r+=s+(!i&&!a&&l!==""?`
`:"")+On(l,n),i=a}return r}function On(e,n){if(e===""||e[0]===" ")return e;for(var t=/ [^ ]/g,r,i=0,a,o=0,s=0,l="";r=t.exec(e);)s=r.index,s-i>n&&(a=o>i?o:s,l+=`
`+e.slice(i,a),i=a+1),o=s;return l+=`
`,e.length-i>n&&o>i?l+=e.slice(i,o)+`
`+e.slice(o+1):l+=e.slice(i),l.slice(1)}function Ys(e){for(var n="",t=0,r,i=0;i<e.length;t>=65536?i+=2:i++)t=ae(e,i),r=E[t],!r&&me(t)?(n+=e[i],t>=65536&&(n+=e[i+1])):n+=r||Os(t);return n}function Ws(e,n,t){var r="",i=e.tag,a,o,s;for(a=0,o=t.length;a<o;a+=1)s=t[a],e.replacer&&(s=e.replacer.call(t,String(a),s)),(G(e,n,s,!1,!1)||typeof s>"u"&&G(e,n,null,!1,!1))&&(r!==""&&(r+=","+(e.condenseFlow?"":" ")),r+=e.dump);e.tag=i,e.dump="["+r+"]"}function Rn(e,n,t,r){var i="",a=e.tag,o,s,l;for(o=0,s=t.length;o<s;o+=1)l=t[o],e.replacer&&(l=e.replacer.call(t,String(o),l)),(G(e,n+1,l,!0,!0,!1,!0)||typeof l>"u"&&G(e,n+1,null,!0,!0,!1,!0))&&((!r||i!=="")&&(i+=Ve(e,n)),e.dump&&pe===e.dump.charCodeAt(0)?i+="-":i+="- ",i+=e.dump);e.tag=a,e.dump=i||"[]"}function $s(e,n,t){var r="",i=e.tag,a=Object.keys(t),o,s,l,c,d;for(o=0,s=a.length;o<s;o+=1)d="",r!==""&&(d+=", "),e.condenseFlow&&(d+='"'),l=a[o],c=t[l],e.replacer&&(c=e.replacer.call(t,l,c)),G(e,n,l,!1,!1)&&(e.dump.length>1024&&(d+="? "),d+=e.dump+(e.condenseFlow?'"':"")+":"+(e.condenseFlow?"":" "),G(e,n,c,!1,!1)&&(d+=e.dump,r+=d));e.tag=i,e.dump="{"+r+"}"}function Ks(e,n,t,r){var i="",a=e.tag,o=Object.keys(t),s,l,c,d,p,m;if(e.sortKeys===!0)o.sort();else if(typeof e.sortKeys=="function")o.sort(e.sortKeys);else if(e.sortKeys)throw new P("sortKeys must be a boolean or a function");for(s=0,l=o.length;s<l;s+=1)m="",(!r||i!=="")&&(m+=Ve(e,n)),c=o[s],d=t[c],e.replacer&&(d=e.replacer.call(t,c,d)),G(e,n+1,c,!0,!0,!0)&&(p=e.tag!==null&&e.tag!=="?"||e.dump&&e.dump.length>1024,p&&(e.dump&&pe===e.dump.charCodeAt(0)?m+="?":m+="? "),m+=e.dump,p&&(m+=Ve(e,n)),G(e,n+1,d,!0,p)&&(e.dump&&pe===e.dump.charCodeAt(0)?m+=":":m+=": ",m+=e.dump,i+=m));e.tag=a,e.dump=i||"{}"}function Bn(e,n,t){var r,i,a,o,s,l;for(i=t?e.explicitTypes:e.implicitTypes,a=0,o=i.length;a<o;a+=1)if(s=i[a],(s.instanceOf||s.predicate)&&(!s.instanceOf||typeof n=="object"&&n instanceof s.instanceOf)&&(!s.predicate||s.predicate(n))){if(t?s.multi&&s.representName?e.tag=s.representName(n):e.tag=s.tag:e.tag="?",s.represent){if(l=e.styleMap[s.tag]||s.defaultStyle,It.call(s.represent)==="[object Function]")r=s.represent(n,l);else if(Dt.call(s.represent,l))r=s.represent[l](n,l);else throw new P("!<"+s.tag+'> tag resolver accepts not "'+l+'" style');e.dump=r}return!0}return!1}function G(e,n,t,r,i,a,o){e.tag=null,e.dump=t,Bn(e,t,!1)||Bn(e,t,!0);var s=It.call(e.dump),l=r,c;r&&(r=e.flowLevel<0||e.flowLevel>n);var d=s==="[object Object]"||s==="[object Array]",p,m;if(d&&(p=e.duplicates.indexOf(t),m=p!==-1),(e.tag!==null&&e.tag!=="?"||m||e.indent!==2&&n>0)&&(i=!1),m&&e.usedDuplicates[p])e.dump="*ref_"+p;else{if(d&&m&&!e.usedDuplicates[p]&&(e.usedDuplicates[p]=!0),s==="[object Object]")r&&Object.keys(e.dump).length!==0?(Ks(e,n,e.dump,i),m&&(e.dump="&ref_"+p+e.dump)):($s(e,n,e.dump),m&&(e.dump="&ref_"+p+" "+e.dump));else if(s==="[object Array]")r&&e.dump.length!==0?(e.noArrayIndent&&!o&&n>0?Rn(e,n-1,e.dump,i):Rn(e,n,e.dump,i),m&&(e.dump="&ref_"+p+e.dump)):(Ws(e,n,e.dump),m&&(e.dump="&ref_"+p+" "+e.dump));else if(s==="[object String]")e.tag!=="?"&&Vs(e,e.dump,n,a,l);else{if(s==="[object Undefined]")return!1;if(e.skipInvalid)return!1;throw new P("unacceptable kind of an object to dump "+s)}e.tag!==null&&e.tag!=="?"&&(c=encodeURI(e.tag[0]==="!"?e.tag.slice(1):e.tag).replace(/!/g,"%21"),e.tag[0]==="!"?c="!"+c:c.slice(0,18)==="tag:yaml.org,2002:"?c="!!"+c.slice(18):c="!<"+c+">",e.dump=c+" "+e.dump)}return!0}function Qs(e,n){var t=[],r=[],i,a;for(Ye(e,t,r),i=0,a=r.length;i<a;i+=1)n.duplicates.push(t[r[i]]);n.usedDuplicates=new Array(a)}function Ye(e,n,t){var r,i,a;if(e!==null&&typeof e=="object")if(i=n.indexOf(e),i!==-1)t.indexOf(i)===-1&&t.push(i);else if(n.push(e),Array.isArray(e))for(i=0,a=e.length;i<a;i+=1)Ye(e[i],n,t);else for(r=Object.keys(e),i=0,a=r.length;i<a;i+=1)Ye(e[r[i]],n,t)}function Xs(e,n){n=n||{};var t=new Bs(n);t.noRefs||Qs(e,t);var r=e;return t.replacer&&(r=t.replacer.call({"":r},"",r)),G(t,0,r,!0,!0)?t.dump+`
`:""}var Zs=Xs,el={dump:Zs};function rn(e,n){return function(){throw new Error("Function yaml."+e+" is removed in js-yaml 4. Use yaml."+n+" instead, which is now safe by default.")}}var nl=j,tl=it,il=st,rl=dt,ol=mt,al=Ze,sl=Pt.load,ll=Pt.loadAll,cl=el.dump,ul=P,pl={binary:bt,float:pt,map:at,null:lt,pairs:_t,set:xt,timestamp:ht,bool:ct,int:ut,merge:vt,omap:yt,seq:ot,str:rt},dl=rn("safeLoad","load"),ml=rn("safeLoadAll","loadAll"),gl=rn("safeDump","dump"),ge={Type:nl,Schema:tl,FAILSAFE_SCHEMA:il,JSON_SCHEMA:rl,CORE_SCHEMA:ol,DEFAULT_SCHEMA:al,load:sl,loadAll:ll,dump:cl,YAMLException:ul,types:pl,safeLoad:dl,safeLoadAll:ml,safeDump:gl};const We=e=>$i(`/logos/${e}`),fl="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",re=We("no-img.svg"),u=(e,n=e)=>({light:We(e),dark:We(n),fallback:fl}),be={javascript:"javascript",typescript:"typescript",python:"python",java:"java",c:"c",cpp:"cplusplus","c++":"cplusplus",csharp:"csharp","c#":"csharp",go:"go",rust:"rust",kotlin:"kotlin",dart:"dart",php:"php",ruby:"ruby",swift:"swift",r:"r",scala:"scala",perl:"perl",lua:"lua",haskell:"haskell",elixir:"elixir",clojure:"clojure",matlab:"matlab",bash:"bash",powershell:"powershell",react:"react",reactjs:"react",vue:"vuejs",vuejs:"vuejs",angular:"angularjs",svelte:"svelte",nextjs:"nextjs",nuxt:"nuxtjs",nuxtjs:"nuxtjs",gatsby:"gatsby",ember:"ember",backbone:"backbonejs",jquery:"jquery",bootstrap:"bootstrap",tailwind:"tailwindcss",tailwindcss:"tailwindcss",materialui:"materialui",sass:"sass",less:"less",css:"css3",html:"html5",nodejs:"nodejs",node:"nodejs",express:"express",expressjs:"express",nestjs:"nestjs",fastify:"fastify",django:"django",flask:"flask",fastapi:"fastapi",spring:"spring",rails:"rails",laravel:"laravel",dotnet:"dotnetcore",".net":"dotnetcore",aspnet:"dotnetcore",postgresql:"postgresql",postgres:"postgresql",mysql:"mysql",mongodb:"mongodb",redis:"redis",sqlite:"sqlite",oracle:"oracle",mariadb:"mariadb",cassandra:"cassandra",neo4j:"neo4j",firebase:"firebase",dynamodb:"dynamodb",docker:"docker",kubernetes:"kubernetes",aws:"amazonwebservices",azure:"azure",gcp:"googlecloud",googlecloud:"googlecloud",heroku:"heroku",nginx:"nginx",apache:"apache",jenkins:"jenkins",circleci:"circleci",travisci:"travis",terraform:"terraform",ansible:"ansible",vagrant:"vagrant",git:"git",github:"github",gitlab:"gitlab",bitbucket:"bitbucket",vscode:"vscode",vim:"vim",jetbrains:"jetbrains",intellij:"intellij",webpack:"webpack",vite:"vitejs",babel:"babel",eslint:"eslint",npm:"npm",yarn:"yarn",pnpm:"pnpm",gradle:"gradle",maven:"maven",cmake:"cmake",jest:"jest",mocha:"mocha",jasmine:"jasmine",selenium:"selenium",cypress:"cypressio",pytest:"pytest",playwright:"playwright",streamlit:"streamlit",android:"android",flutter:"flutter",reactnative:"react",ionic:"ionic",xamarin:"xamarin",linux:"linux",ubuntu:"ubuntu",debian:"debian",centos:"centos",windows:"windows8",apple:"apple",macos:"apple",raspberrypi:"raspberrypi",graphql:"graphql",kafka:"apachekafka",rabbitmq:"rabbitmq",electron:"electron",figma:"figma",sketch:"sketch",photoshop:"photoshop",illustrator:"illustrator",blender:"blender",unity:"unity",unrealengine:"unrealengine",threejs:"threejs",opencv:"opencv",tensorflow:"tensorflow",pytorch:"pytorch",pandas:"pandas",numpy:"numpy",jupyter:"jupyter",anaconda:"anaconda",markdown:"markdown",latex:"latex",wordpress:"wordpress",drupal:"drupal",jira:"jira",confluence:"confluence",trello:"trello",slack:"slack",postman:"postman",insomnia:"insomnia",swagger:"swagger"};function ve(e){return e.toLowerCase().replace(/[.\-_\s]/g,"").replace(/js$/i,"").replace(/\.js$/i,"").replace(/lang$/i,"")}function hl(e){const n=ve(e);for(const[a,o]of Object.entries(be))if(ve(a)===n)return o;for(const[a,o]of Object.entries(be)){const s=ve(a);if(n.includes(s)||s.includes(n))return o}const t={node:"nodejs",js:"javascript",ts:"typescript",py:"python",rb:"ruby",cpp:"cplusplus",cxx:"cplusplus",cs:"csharp",postgres:"postgresql",mongo:"mongodb",k8s:"kubernetes",tf:"terraform",vue:"vuejs",react:"react",ng:"angularjs",angular:"angularjs",next:"nextjs",nuxt:"nuxtjs",tailwind:"tailwindcss",tw:"tailwindcss",bs:"bootstrap",electron:"electron",deno:"denojs",bun:"bun",aws:"amazonwebservices",gcloud:"googlecloud",gc:"googlecloud",az:"azure",gh:"github",gl:"gitlab",vsc:"vscode",code:"vscode",vim:"vim",nvim:"neovim",neovim:"neovim",intellij:"intellij",idea:"intellij",pycharm:"pycharm",webstorm:"webstorm"};if(t[n])return t[n];let r,i=1/0;for(const[a,o]of Object.entries(be)){const s=vl(n,ve(a));s<i&&s<=2&&(i=s,r=o)}return r}function vl(e,n){if(e.length===0)return n.length;if(n.length===0)return e.length;const t=[];for(let r=0;r<=n.length;r++)t[r]=[r];for(let r=0;r<=e.length;r++)t[0][r]=r;for(let r=1;r<=n.length;r++)for(let i=1;i<=e.length;i++)n.charAt(r-1)===e.charAt(i-1)?t[r][i]=t[r-1][i-1]:t[r][i]=Math.min(t[r-1][i-1]+1,t[r][i-1]+1,t[r-1][i]+1);return t[n.length][e.length]}const bl=new Set(["unknown","none","null","undefined","","n/a","na","no-img","placeholder","autonomy","autonomie","creativity","créativité","creativite","teamwork","travail d'équipe","travail equipe","communication","leadership","problem-solving","problem solving","résolution de problèmes","adaptability","adaptabilité","adaptabilite","time-management","time management","gestion du temps","critical-thinking","critical thinking","pensée critique","collaboration","motivation","organization","organisation","flexibility","flexibilité","flexibilite","patience","empathy","empathie","curiosity","curiosité","curiosite","rigor","rigueur","initiative","perseverance","persévérance","perseverance","soft skill","soft skills"]);function Ut(e){if(!e)return!0;const n=e.toLowerCase().trim();return n.length===0?!0:bl.has(n)}function yl(e,n="original"){if(Ut(e))return;let t=be[e.toLowerCase()];if(t||(t=hl(e)),!!t)return`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${t}/${t}-${n}.svg`}function _l(e){if(Ut(e))return{light:re,dark:re,fallback:re};const n=yl(e);if(n)return{light:n,dark:n,fallback:re};const r=`https://cdn.simpleicons.org/${e.toLowerCase().replace(/[^a-z0-9]/g,"")}`;return{light:r,dark:r,fallback:re}}const K={AWS:u("aws.svg"),Bootstrap:u("bootstrap.svg"),C:u("c.svg"),Cpp:u("cpp.svg"),Celery:u("celery.svg"),Django:u("django.svg"),FastApi:u("fastapi"),Flask:u("flask.svg"),Go:u("go.svg"),Kafka:u("kafka.svg"),Neo4j:u("neo4j.svg"),Nginx:u("nginx.svg"),Numpy:u("numpy.svg"),Pandas:u("pandas.svg"),RabbitMQ:u("rabbitmq.svg"),Rust:u("rust.svg"),Scrapy:u("scrapy.png"),Selenium:u("selenium.svg"),Docker:u("docker.svg"),Kubernetes:u("kubernetes.svg"),Csharp:u("csharp.svg"),CSharp:u("csharp.svg"),Xamarin:u("xamarin.svg"),TypeScript:u("typescript-original.svg"),VueJs:u("vuejs-original.svg"),ReactJs:u("react.svg"),Dart:u("dart.png"),Kotlin:u("kotlin-original.svg"),Python:u("python.png"),NodeJs:u("nodejs-original.svg"),Deno:u("deno.svg"),Svelte:u("svelte.svg"),ExpressJs:u("express.png"),Express:u("express.png"),JavaScript:u("javascript-original.svg"),Fastify:u("fastify.svg"),NestJs:u("nest.svg"),Quasar:u("quasar.svg"),SolidJs:u("solid.svg"),Electron:u("electron.png"),Flutter:u("flutter.svg"),Java:u("java.png"),AdonisJs:u("adonis.png"),Android:u("android.png"),Angular:u("angular.png"),PostgreSQL:u("postgresql-original.svg"),Firebase:u("firebase.png"),Sass:u("sass.png"),Unknown:u("no-img.svg"),MongoDB:u("mongodb.svg"),Redis:u("redis.svg"),Tailwind:u("tailwind.svg"),TailwindCSS:u("tailwindcss-original.svg"),HTML:u("html.svg"),Premiere:u("premiere.svg"),Photoshop:u("photoshop.svg"),CSS:u("css.svg"),AfterEffects:u("after-effects.svg"),Illustrator:u("illustrator.svg"),Nuxt:u("nuxt.png"),Vite:u("vite.png"),Vitest:u("vitest.svg"),Jest:u("jest.png"),Unocss:u("unocss.svg"),Ruvy:u("ruvy.svg"),Postcss:u("postcss.svg"),Soleil:u("soleil.png"),AGH:u("agh.png"),InTech:u("intech.png"),ESIEA:u("esiea.png"),PMF:u("pmf.png"),Git:u("git-original.svg"),Linux:u("linux-original.svg"),SQLite:u("sqlite-original.svg"),CICD:u("cicd.svg"),Arduino:u("arduino-original.svg"),DotNet:u("dotnet-original.svg"),Grafana:u("grafana-original.svg"),Hugo:u("hugo-original.svg"),Ionic:u("ionic-original.svg"),MariaDB:u("mariadb-original.svg"),MySQL:u("mysql-original.svg"),OpenCV:u("opencv-original.svg"),Oracle:u("oracle-original.svg"),PHP:u("php-original.svg"),Postman:u("postman-original.svg"),Spring:u("spring-original.svg"),TensorFlow:u("tensorflow-original.svg"),Unity:u("unity-original.svg"),Apache:u("apache-original.svg"),Apache2:u("apache-original.svg"),Playwright:u("playwright-original.svg"),Streamlit:u("streamlit-original.svg"),RedisDB:u("redis-original.svg"),PaperMC:u("papermc.svg"),Velocity:u("velocity.svg"),BungeeCord:u("bungeecord.svg"),Spigot:u("spigot.svg"),Skript:u("skript.svg"),OpenXR:u("openxr.svg"),IntelliJ:u("intellij-original.svg"),PyCharm:u("pycharm-original.svg"),WebStorm:u("webstorm-original.svg"),CLion:u("clion-original.svg"),Rider:u("rider-original.svg"),DataGrip:u("datagrip-original.svg"),AndroidStudio:u("androidstudio-original.svg"),VSCode:u("vscode-original.svg"),Excel:u("excel.svg"),PowerPoint:u("powerpoint.svg"),Word:u("word.svg"),Jira:u("jira-original.svg"),Confluence:u("confluence-original.svg"),Teamwork:u("no-img.svg"),Autonomy:u("no-img.svg"),Creativity:u("no-img.svg"),MiniArticle:u("mini-article.png")};var F=(e=>(e.FullTime="Full-time",e.PartTime="Part-time",e.SelfEmployed="Self-employed",e.Freelance="Freelance",e.Contract="Contract",e.Internship="Internship",e.Apprenticeship="Apprenticeship",e))(F||{}),C=(e=>(e.Image="image",e.PDF="pdf",e.Document="document",e.Archive="archive",e.Video="video",e.Audio="audio",e.Code="code",e.Link="link",e.Other="other",e))(C||{});function Te(e,n=new Date){if(e instanceof Date&&!isNaN(e.getTime()))return e;if(typeof e=="string"){const t=e.match(/^(\d{4})-(\d{2})-(\d{2})$/);if(t){const[,i,a,o]=t;return new Date(parseInt(i),parseInt(a)-1,parseInt(o))}const r=new Date(e);if(!isNaN(r.getTime()))return r}return console.log("[parseDate] Failed to parse:",e,"- using fallback"),n}function Le(e){if(e){if(e instanceof Date&&!isNaN(e.getTime()))return e;if(typeof e=="string"){const n=e.match(/^(\d{4})-(\d{2})-(\d{2})$/);if(n){const[,r,i,a]=n;return new Date(parseInt(r),parseInt(i)-1,parseInt(a))}const t=new Date(e);if(!isNaN(t.getTime()))return t}}}function Re(e){return e.light.includes("no-img")||e.light===K.Unknown.light}function ee(e){if(!e)return K.Unknown;if(e.startsWith("http://")||e.startsWith("https://"))return{light:e,dark:e,fallback:K.Unknown.light};let n=K[e];if(n&&!Re(n))return n;const t=[e,e.charAt(0).toUpperCase()+e.slice(1),e.toUpperCase(),e.toLowerCase(),e.replace(/(?:^|[-_])(\w)/g,(o,s)=>s?s.toUpperCase():"")];for(const o of t)if(n=K[o],n&&!Re(n))return n;const r={react:"ReactJs",node:"NodeJs",js:"JavaScript",ts:"TypeScript",vue:"VueJs",express:"ExpressJs",postgres:"PostgreSQL",postgresql:"PostgreSQL",mongo:"MongoDB",tailwindcss:"Tailwind"},i=e.toLowerCase();return r[i]&&(n=K[r[i]],n&&!Re(n))?n:_l(e)}function on(e){return e?e.replace(/^#{1,6}\s+/gm,"").replace(/\*\*([^*]+)\*\*/g,"$1").replace(/\*([^*]+)\*/g,"$1").replace(/__([^_]+)__/g,"$1").replace(/_([^_]+)_/g,"$1").replace(/\[([^\]]+)\]\([^)]+\)/g,"$1").replace(/!\[[^\]]*\]\([^)]+\)/g,"").replace(/```[\s\S]*?```/g,"").replace(/`([^`]+)`/g,"$1").replace(/^[\s]*[-*+]\s+/gm,"").replace(/^[\s]*\d+\.\s+/gm,"").replace(/^>\s+/gm,"").replace(/^[-*_]{3,}$/gm,"").replace(/\n{2,}/g," ").replace(/\n/g," ").replace(/\s{2,}/g," ").trim():""}function je(e){return Array.isArray(e)?e.map(n=>({to:n.to||"",label:n.label||"",newTab:n.newTab??!0})):[]}function xl(e){return Array.isArray(e)?e.map(n=>({src:n.src||"",label:n.label||""})):[]}function Gn(e){const n=e.toLowerCase();return/\.(jpg|jpeg|png|gif|webp|svg|bmp|ico)(\?.*)?$/i.test(n)||n.includes("unsplash.com")||n.includes("imgur.com")?C.Image:/\.pdf(\?.*)?$/i.test(n)?C.PDF:/\.(doc|docx|odt|rtf|txt|xls|xlsx|ppt|pptx)(\?.*)?$/i.test(n)?C.Document:/\.(zip|rar|7z|tar|gz|bz2)(\?.*)?$/i.test(n)?C.Archive:/\.(mp4|webm|avi|mov|mkv)(\?.*)?$/i.test(n)||n.includes("youtube.com")||n.includes("youtu.be")||n.includes("vimeo.com")?C.Video:/\.(mp3|wav|ogg|flac|aac)(\?.*)?$/i.test(n)?C.Audio:/\.(js|ts|py|java|c|cpp|cs|go|rs|rb|php|html|css|json|xml|yaml|yml|sh|bash)(\?.*)?$/i.test(n)||n.includes("github.com")||n.includes("gitlab.com")||n.includes("gist.github.com")?C.Code:n.startsWith("http://")||n.startsWith("https://")?C.Link:C.Other}function Sl(e){return{[C.Image]:"i-carbon-image",[C.PDF]:"i-carbon-document-pdf",[C.Document]:"i-carbon-document",[C.Archive]:"i-carbon-zip",[C.Video]:"i-carbon-video",[C.Audio]:"i-carbon-music",[C.Code]:"i-carbon-code",[C.Link]:"i-carbon-link",[C.Other]:"i-carbon-attachment"}[e]||"i-carbon-attachment"}function Ee(e){return Array.isArray(e)?e.map(n=>{const t=n.src||n.url||"",r=n.type&&C[n.type]||Gn(t),i=t.startsWith("http://")||t.startsWith("https://");return{label:n.label||n.name||"Pièce jointe",src:t,type:r,description:n.description||void 0,size:n.size||void 0,icon:n.icon||Sl(r),newTab:n.newTab??i}}):[]}function Al(e){return{FullTime:F.FullTime,"Full-time":F.FullTime,PartTime:F.PartTime,"Part-time":F.PartTime,SelfEmployed:F.SelfEmployed,"Self-employed":F.SelfEmployed,Freelance:F.Freelance,Contract:F.Contract,Internship:F.Internship,Apprenticeship:F.Apprenticeship}[e||""]||F.Contract}function fe(e){return(e.split("/").pop()||"").replace(/\.(md|yaml|yml)$/,"")}function ne(e,n){const t=e.replace(/\r\n/g,`
`).replace(/\r/g,`
`),r=/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/,i=t.match(r);if(!i)return console.log(`[parseMarkdownFile] No frontmatter found for ${n}, raw starts with:`,t.substring(0,50)),{meta:{slug:n},content:t};const[,a,o]=i;try{const s=ge.load(a);return console.log(`[parseMarkdownFile] Parsed ${n}:`,JSON.stringify(s)),{meta:{...s,slug:n},content:o.trim()}}catch(s){return console.error(`Error parsing frontmatter for ${n}:`,s),{meta:{slug:n},content:(o==null?void 0:o.trim())||t}}}const $e=[{name:"Programming Languages",slug:"pro-lang"},{name:"Frameworks",slug:"framework"},{name:"Libraries",slug:"library"},{name:"Languages",slug:"lang"},{name:"Databases",slug:"db"},{name:"ORMs",slug:"orm"},{name:"DevOps",slug:"devops"},{name:"Testing",slug:"test"},{name:"Dev Tools",slug:"devtools"},{name:"Markup & Style",slug:"markup-style"},{name:"Design",slug:"design"},{name:"Soft Skills",slug:"soft"}];function wl(e){if(e)return $e.find(n=>n.slug===e)}const kl=Object.assign({"/content/blog/blog-platform-demo.md":Ki,"/content/blog/georges-le-chat.md":Qi,"/content/blog/getting-started-with-svelte.md":Xi,"/content/blog/mini-article.md":Zi,"/content/blog/modern-css-techniques.md":er,"/content/blog/sveltekit-full-stack-framework.md":nr,"/content/blog/typescript-best-practices.md":tr}),Cl=Object.assign({"/content/projects/flutter-movie-manip.md":ir,"/content/projects/flutter-todo-list.md":rr,"/content/projects/foot-ai.md":or,"/content/projects/hr-data-analytics.md":ar,"/content/projects/nano-pong.md":sr,"/content/projects/quiz-ai.md":lr,"/content/projects/snake-game-ai.md":cr,"/content/projects/squat-counter-ia.md":ur,"/content/projects/template-project.md":pr,"/content/projects/template-svelte.md":dr,"/content/projects/tpvpocifar.md":mr}),Hn=Object.assign({"/content/skills/android-studio.md":gr,"/content/skills/apache2.md":fr,"/content/skills/arduino.md":hr,"/content/skills/autonomy.md":vr,"/content/skills/bungeecord.md":br,"/content/skills/c.md":yr,"/content/skills/ci-cd.md":_r,"/content/skills/clion.md":xr,"/content/skills/confluence.md":Sr,"/content/skills/creativity.md":Ar,"/content/skills/csharp.md":wr,"/content/skills/css.md":kr,"/content/skills/dart.md":Cr,"/content/skills/datagrip.md":Tr,"/content/skills/docker-swarm.md":Lr,"/content/skills/docker.md":jr,"/content/skills/dotnet.md":Er,"/content/skills/electron.md":Pr,"/content/skills/excel.md":Ir,"/content/skills/expressjs.md":Dr,"/content/skills/firebase.md":qr,"/content/skills/flask.md":Fr,"/content/skills/flutter.md":Mr,"/content/skills/git.md":Nr,"/content/skills/grafana.md":Or,"/content/skills/html.md":Rr,"/content/skills/hugo.md":Br,"/content/skills/intellij.md":Gr,"/content/skills/ionic.md":Hr,"/content/skills/java.md":Ur,"/content/skills/javafx.md":zr,"/content/skills/javascript.md":Vr,"/content/skills/jee.md":Jr,"/content/skills/jira.md":Yr,"/content/skills/kotlin.md":Wr,"/content/skills/kubernetes.md":$r,"/content/skills/linux.md":Kr,"/content/skills/mariadb.md":Qr,"/content/skills/minikube.md":Xr,"/content/skills/mongodb.md":Zr,"/content/skills/mysql.md":eo,"/content/skills/nginx.md":no,"/content/skills/nodejs.md":to,"/content/skills/opencv.md":io,"/content/skills/openxr.md":ro,"/content/skills/oracle.md":oo,"/content/skills/pandas.md":ao,"/content/skills/papermc.md":so,"/content/skills/photoshop.md":lo,"/content/skills/php.md":co,"/content/skills/playwright.md":uo,"/content/skills/postgresql.md":po,"/content/skills/postman.md":mo,"/content/skills/powerpoint.md":go,"/content/skills/pycharm.md":fo,"/content/skills/python.md":ho,"/content/skills/reactjs.md":vo,"/content/skills/redis.md":bo,"/content/skills/rider.md":yo,"/content/skills/rust.md":_o,"/content/skills/sass.md":xo,"/content/skills/selenium.md":So,"/content/skills/skript.md":Ao,"/content/skills/spigot.md":wo,"/content/skills/spring.md":ko,"/content/skills/springboot.md":Co,"/content/skills/sqlite.md":To,"/content/skills/streamlit.md":Lo,"/content/skills/svelte.md":jo,"/content/skills/tailwind.md":Eo,"/content/skills/teamwork.md":Po,"/content/skills/tensorflow.md":Io,"/content/skills/typescript.md":Do,"/content/skills/unity.md":qo,"/content/skills/velocity.md":Fo,"/content/skills/vscode.md":Mo,"/content/skills/vuejs.md":No,"/content/skills/webstorm.md":Oo,"/content/skills/word.md":Ro}),Tl=Object.assign({"/content/experience/agh-batiment.md":Bo,"/content/experience/synchrotron-soleil.md":Go}),Ll=Object.assign({"/content/education/esiea.md":Ho,"/content/education/intech.md":Uo,"/content/education/pmf.md":zo});let Be=null;function an(){if(Be)return Be;console.log("[loadAllSkills] Starting to load skills..."),console.log("[loadAllSkills] skillFiles keys:",Object.keys(Hn));const e=[];for(const[n,t]of Object.entries(Hn)){const r=fe(n),{meta:i,content:a}=ne(t,r);if(i.published===!1){console.log(`[loadAllSkills] Skipping ${r} (published: false)`);continue}console.log(`[loadAllSkills] Processing ${r}:`,{name:i.name,logo:i.logo,rawLogoType:typeof i.logo}),e.push({slug:i.slug||r,name:i.name||r,logo:ee(i.logo),description:a||i.name||"",color:i.color||"gray",category:wl(i.category)})}return Be=e,e}function zt(...e){const n=an();return e.length===0?n:n.filter(t=>e.includes(t.slug))}function Zl(e=""){const n=an(),t=[],r=[];return n.forEach(i=>{if(e.trim()&&!i.name.toLowerCase().includes(e.trim().toLowerCase()))return;if(!i.category){r.push(i);return}let a=t.find(o=>{var s;return o.category.slug===((s=i.category)==null?void 0:s.slug)});a||(a={items:[],category:i.category},t.push(a)),a.items.push(i)}),r.length!==0&&t.push({category:{name:"Others",slug:"others"},items:r}),t.sort((i,a)=>{const o=$e.findIndex(l=>l.slug===i.category.slug),s=$e.findIndex(l=>l.slug===a.category.slug);return o===-1?1:s===-1?-1:o-s}),t.forEach(i=>{i.items.sort((a,o)=>a.name.localeCompare(o.name))}),t}function jl(){const e=[];for(const[n,t]of Object.entries(kl)){const r=fe(n),{meta:i,content:a}=ne(t,r);i.published!==!1&&e.push({slug:i.slug||r,name:i.name||i.title||r,title:i.title||i.name||r,logo:ee(i.logo),excerpt:i.excerpt||"",shortDescription:i.excerpt||"",description:a,content:a,author:i.author||"Anonymous",publishedAt:Te(i.publishedAt),updatedAt:Le(i.updatedAt),tags:i.tags||[],coverImage:i.coverImage?ee(i.coverImage):void 0,readingTime:i.readingTime||Math.ceil(a.split(/\s+/).length/200),color:i.color,links:je(i.links),pinned:i.pinned||!1})}return e.sort((n,t)=>t.publishedAt.getTime()-n.publishedAt.getTime())}function El(){var n,t;const e=[];for(const[r,i]of Object.entries(Cl)){const a=fe(r),{meta:o,content:s}=ne(i,a);o.published!==!1&&e.push({slug:o.slug||a,name:o.name||a,logo:ee(o.logo),shortDescription:on(s).substring(0,200),description:s,color:o.color||"gray",type:o.type||"Project",period:{from:Te((n=o.period)==null?void 0:n.from),to:Le((t=o.period)==null?void 0:t.to)},skills:zt(...o.skills||[]),links:je(o.links),screenshots:xl(o.screenshots),attachments:Ee(o.attachments)})}return e.sort((r,i)=>i.period.from.getTime()-r.period.from.getTime())}function Pl(){var n,t,r;const e=[];for(const[i,a]of Object.entries(Tl)){const o=fe(i),{meta:s,content:l}=ne(a,o);s.published!==!1&&(console.log(`[loadAllExperiences] ${o}:`,{name:s.name,shortDescription:(n=s.shortDescription)==null?void 0:n.substring(0,50),period:s.period}),e.push({slug:s.slug||o,name:s.name||o,logo:ee(s.logo),shortDescription:s.shortDescription||on(l).substring(0,200),description:l,company:s.company||"",location:s.location||"",contract:Al(s.contract),type:s.type||"Development",color:s.color||"gray",period:{from:Te((t=s.period)==null?void 0:t.from),to:Le((r=s.period)==null?void 0:r.to)},skills:zt(...s.skills||[]),links:je(s.links),attachments:Ee(s.attachments)}))}return e.sort((i,a)=>a.period.from.getTime()-i.period.from.getTime())}function Il(){var n,t;const e=[];for(const[r,i]of Object.entries(Ll)){const a=fe(r),{meta:o,content:s}=ne(i,a);o.published!==!1&&e.push({slug:o.slug||a,name:o.name||a,logo:ee(o.logo),shortDescription:o.shortDescription||on(s).substring(0,200),description:s,degree:o.degree||"",organization:o.organization||"",location:o.location||"",color:o.color,period:{from:Te((n=o.period)==null?void 0:n.from),to:Le((t=o.period)==null?void 0:t.to)},subjects:o.subjects||[],links:je(o.links),attachments:Ee(o.attachments)})}return e.sort((r,i)=>i.period.from.getTime()-r.period.from.getTime())}const Dl=Object.assign({"/content/about.md":Vo});function ql(){const e=Object.values(Dl)[0];if(!e)return console.log("[loadAboutPage] No about.md file found"),{title:"À propos",content:"",attachments:[]};const{meta:n,content:t}=ne(e,"about");return{title:n.title||"À propos",content:t,attachments:Ee(n.attachments)}}const Fl=Object.assign({"/content/site.yaml":Jo}),Ml=Object.assign({"/content/pages/home.yaml":Yo}),Nl=Object.assign({"/content/pages/resume.yaml":Wo}),Ol=Object.assign({"/content/pages/contact.yaml":$o});function sn(){const e=Object.values(Fl)[0];if(!e)return{firstName:"Prénom",lastName:"NOM",jobTitle:"Développeur",email:"contact@example.com",socialLinks:[],inConstruction:{enabled:!1,title:"",message:""}};const n=e.replace(/\r\n/g,`
`).replace(/\r/g,`
`),t=ge.load(n),r=t.inConstruction;return{firstName:t.firstName||"Prénom",lastName:t.lastName||"NOM",jobTitle:t.jobTitle||"Développeur",email:t.email||"contact@example.com",socialLinks:(t.socialLinks||[]).map(i=>({label:i.label,href:i.href,icon:i.icon})),inConstruction:{enabled:(r==null?void 0:r.enabled)??!1,title:(r==null?void 0:r.title)||"",message:(r==null?void 0:r.message)||""}}}function Rl(){const e=sn(),n=Object.values(Ml)[0];let t="Accueil",r="";if(n){const i=n.replace(/\r\n/g,`
`).replace(/\r/g,`
`),a=ge.load(i);t=a.title||"Accueil";const o=a.hero;r=(o==null?void 0:o.description)||""}return{title:t,heroDescription:r,socialLinks:e.socialLinks,fullName:`${e.firstName} ${e.lastName}`}}function Bl(){const e=Object.values(Nl)[0];if(!e)return{title:"CV",pdfPath:"/pdf/cv.pdf",downloadLabel:"Télécharger",fullscreenLabel:"Plein écran"};const n=e.replace(/\r\n/g,`
`).replace(/\r/g,`
`),t=ge.load(n);return{title:t.title||"CV",pdfPath:t.pdfPath||"/pdf/cv.pdf",downloadLabel:t.downloadLabel||"Télécharger",fullscreenLabel:t.fullscreenLabel||"Plein écran"}}function Gl(){const e=sn(),n=Object.values(Ol)[0],t={title:"Contact",description:"N'hésitez pas à me contacter.",email:e.email,form:{nameLabel:"Nom",namePlaceholder:"Votre nom",emailLabel:"Email",emailPlaceholder:"votre@email.com",messageLabel:"Message",messagePlaceholder:"Votre message...",submitLabel:"Envoyer",sendingLabel:"Envoi en cours..."},messages:{success:"Message envoyé avec succès !",error:"Une erreur est survenue.",validationError:"Veuillez remplir tous les champs."}};if(!n)return t;const r=n.replace(/\r\n/g,`
`).replace(/\r/g,`
`),i=ge.load(r),a=i.form,o=i.messages;return{title:i.title||t.title,description:i.description||t.description,email:i.email||t.email,form:{nameLabel:(a==null?void 0:a.nameLabel)||t.form.nameLabel,namePlaceholder:(a==null?void 0:a.namePlaceholder)||t.form.namePlaceholder,emailLabel:(a==null?void 0:a.emailLabel)||t.form.emailLabel,emailPlaceholder:(a==null?void 0:a.emailPlaceholder)||t.form.emailPlaceholder,messageLabel:(a==null?void 0:a.messageLabel)||t.form.messageLabel,messagePlaceholder:(a==null?void 0:a.messagePlaceholder)||t.form.messagePlaceholder,submitLabel:(a==null?void 0:a.submitLabel)||t.form.submitLabel,sendingLabel:(a==null?void 0:a.sendingLabel)||t.form.sendingLabel},messages:{success:(o==null?void 0:o.success)||t.messages.success,error:(o==null?void 0:o.error)||t.messages.error,validationError:(o==null?void 0:o.validationError)||t.messages.validationError}}}const Un=sn(),ec=Rl(),nc=Bl(),tc=Gl(),ic=ql(),rc={title:"Blog",items:jl()},oc={title:"Projets",items:El()},ac={title:"Skills",items:an()},sc={title:"Expérience",items:Pl()},lc={title:"Formation",items:Il()},Hl=`${Un.firstName} ${Un.lastName}`,Ul={title:Hl,icon:"i-carbon-code"},zl=[{title:"À Propos",icon:"i-carbon-user",href:"/about"},{title:"Skills",icon:"i-carbon-assembly-cluster",href:"/skills"},{title:"Projets",icon:"i-carbon-cube",href:"/projects"},{title:"Experience",icon:"i-carbon-development",href:"/experience"},{title:"Formation",icon:"i-carbon-education",href:"/education"},{title:"Blog",icon:"i-carbon-blog",href:"/blog"},{title:"CV",icon:"i-carbon-document",href:"/resume"},{title:"Contact",icon:"i-carbon-email",href:"/contact"}],cc={left:Ul,items:zl};export{K as A,rc as B,tc as C,sc as E,ec as H,cc as N,oc as P,nc as R,ac as S,Wl as a,Ql as b,lc as c,Zl as d,$l as e,Hi as f,zt as g,ic as h,Xl as i,C as j,Ri as k,Un as l,Ui as m,ie as n,Kl as o,Oi as p,Vi as r,_e as s};
