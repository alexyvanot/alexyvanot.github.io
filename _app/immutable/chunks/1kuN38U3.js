import{ag as Ie,k as Yi,b1 as zn,i as F,at as Fe,aB as $i,j as Vi,g as se,aV as Ji,ac as Ki,au as gn,aL as le,aa as he,ab as Wi,aQ as Qi,ar as hn,aS as Zi,b2 as B,ad as ce,aU as Xi,x as er,a0 as Yn,aO as We,b3 as nr,b4 as ir,m as rr,J as vn,b5 as tr,aT as $n,af as Vn,b6 as De,z as Jn,b7 as or,aN as ar,as as ye,aJ as lr,b8 as Kn,q as Wn,b9 as sr,A as cr,ba as ur,bb as pr,bc as fr,bd as dr,be as mr,bf as gr,bg as hr,bh as vr,bi as br,bj as yr,_ as xr,a2 as Sr,v as bn,h as Ar,bk as _r,Y as yn,e as wr,O as kr,bl as Cr}from"./BYvLBXBV.js";import{n as Tr,o as Er,d as Lr,p as jr,q as Ir}from"./DwEPtfxu.js";import{b as Fr,r as Dr}from"./BTYZMoSN.js";function jl(e,n){return n}function Or(e,n,i){for(var t=[],r=n.length,a,o=n.length,l=0;l<r;l++){let u=n[l];Vn(u,()=>{if(a){if(a.pending.delete(u),a.done.add(u),a.pending.size===0){var f=e.outrogroups;He(We(a.done)),f.delete(a),f.size===0&&(e.outrogroups=null)}}else o-=1},!1)}if(o===0){var s=t.length===0&&i!==null;if(s){var c=i,p=c.parentNode;ar(p),p.append(c),e.items.clear()}He(n,!s)}else a={pending:new Set(n),done:new Set},(e.outrogroups??(e.outrogroups=new Set)).add(a)}function He(e,n=!0){for(var i=0;i<e.length;i++)ye(e[i],n)}var xn;function Il(e,n,i,t,r,a=null){var o=e,l=new Map,s=(n&zn)!==0;if(s){var c=e;o=F?Fe($i(c)):c.appendChild(Ie())}F&&Vi();var p=null,u=er(()=>{var v=i();return Yn(v)?v:v==null?[]:We(v)}),f,g=!0;function b(){d.fallback=p,Pr(d,f,o,n,t),p!==null&&(f.length===0?(p.f&B)===0?$n(p):(p.f^=B,te(p,null,o)):Vn(p,()=>{p=null}))}var y=Yi(()=>{f=se(u);var v=f.length;let x=!1;if(F){var N=Ji(o)===Ki;N!==(v===0)&&(o=gn(),Fe(o),le(!1),x=!0)}for(var w=new Set,M=Zi,A=Xi(),S=0;S<v;S+=1){F&&he.nodeType===Wi&&he.data===Qi&&(o=he,x=!0,le(!1));var k=f[S],O=t(k,S),_=g?null:l.get(O);_?(_.v&&hn(_.v,k),_.i&&hn(_.i,S),A&&M.skipped_effects.delete(_.e)):(_=Nr(l,g?o:xn??(xn=Ie()),k,O,S,r,n,i),g||(_.e.f|=B),l.set(O,_)),w.add(O)}if(v===0&&a&&!p&&(g?p=ce(()=>a(o)):(p=ce(()=>a(xn??(xn=Ie()))),p.f|=B)),F&&v>0&&Fe(gn()),!g)if(A){for(const[$,V]of l)w.has($)||M.skipped_effects.add(V.e);M.oncommit(b),M.ondiscard(()=>{})}else b();x&&le(!0),se(u)}),d={effect:y,items:l,outrogroups:null,fallback:p};g=!1,F&&(o=he)}function Pr(e,n,i,t,r){var _,$,V,sn,cn,un,pn,fn,dn;var a=(t&or)!==0,o=n.length,l=e.items,s=e.effect.first,c,p=null,u,f=[],g=[],b,y,d,v;if(a)for(v=0;v<o;v+=1)b=n[v],y=r(b,v),d=l.get(y).e,(d.f&B)===0&&(($=(_=d.nodes)==null?void 0:_.a)==null||$.measure(),(u??(u=new Set)).add(d));for(v=0;v<o;v+=1){if(b=n[v],y=r(b,v),d=l.get(y).e,e.outrogroups!==null)for(const R of e.outrogroups)R.pending.delete(d),R.done.delete(d);if((d.f&B)!==0)if(d.f^=B,d===s)te(d,null,i);else{var x=p?p.next:s;d===e.effect.last&&(e.effect.last=d.prev),d.prev&&(d.prev.next=d.next),d.next&&(d.next.prev=d.prev),G(e,p,d),G(e,d,x),te(d,x,i),p=d,f=[],g=[],s=p.next;continue}if((d.f&De)!==0&&($n(d),a&&((sn=(V=d.nodes)==null?void 0:V.a)==null||sn.unfix(),(u??(u=new Set)).delete(d))),d!==s){if(c!==void 0&&c.has(d)){if(f.length<g.length){var N=g[0],w;p=N.prev;var M=f[0],A=f[f.length-1];for(w=0;w<f.length;w+=1)te(f[w],N,i);for(w=0;w<g.length;w+=1)c.delete(g[w]);G(e,M.prev,A.next),G(e,p,M),G(e,A,N),s=N,p=A,v-=1,f=[],g=[]}else c.delete(d),te(d,s,i),G(e,d.prev,d.next),G(e,d,p===null?e.effect.first:p.next),G(e,p,d),p=d;continue}for(f=[],g=[];s!==null&&s!==d;)(c??(c=new Set)).add(s),g.push(s),s=s.next;if(s===null)continue}(d.f&B)===0&&f.push(d),p=d,s=d.next}if(e.outrogroups!==null){for(const R of e.outrogroups)R.pending.size===0&&(He(We(R.done)),(cn=e.outrogroups)==null||cn.delete(R));e.outrogroups.size===0&&(e.outrogroups=null)}if(s!==null||c!==void 0){var S=[];if(c!==void 0)for(d of c)(d.f&De)===0&&S.push(d);for(;s!==null;)(s.f&De)===0&&s!==e.fallback&&S.push(s),s=s.next;var k=S.length;if(k>0){var O=(t&zn)!==0&&o===0?i:null;if(a){for(v=0;v<k;v+=1)(pn=(un=S[v].nodes)==null?void 0:un.a)==null||pn.measure();for(v=0;v<k;v+=1)(dn=(fn=S[v].nodes)==null?void 0:fn.a)==null||dn.fix()}Or(e,S,O)}}a&&Jn(()=>{var R,mn;if(u!==void 0)for(d of u)(mn=(R=d.nodes)==null?void 0:R.a)==null||mn.apply()})}function Nr(e,n,i,t,r,a,o,l){var s=(o&nr)!==0?(o&ir)===0?rr(i,!1,!1):vn(i):null,c=(o&tr)!==0?vn(r):null;return{v:s,i:c,e:ce(()=>(a(n,s??i,c??r,l),()=>{e.delete(t)}))}}function te(e,n,i){if(e.nodes)for(var t=e.nodes.start,r=e.nodes.end,a=n&&(n.f&B)===0?n.nodes.start:i;t!==null;){var o=lr(t);if(a.before(t),t===r)return;t=o}}function G(e,n,i){n===null?e.effect.first=i:n.next=i,i===null?e.effect.last=n:i.prev=n}function Mr(e,n){var i=void 0,t;Kn(()=>{i!==(i=n())&&(t&&(ye(t),t=null),i&&(t=ce(()=>{Wn(()=>i(e))})))})}function Qn(e){var n,i,t="";if(typeof e=="string"||typeof e=="number")t+=e;else if(typeof e=="object")if(Array.isArray(e)){var r=e.length;for(n=0;n<r;n++)e[n]&&(i=Qn(e[n]))&&(t&&(t+=" "),t+=i)}else for(i in e)e[i]&&(t&&(t+=" "),t+=i);return t}function qr(){for(var e,n,i=0,t="",r=arguments.length;i<r;i++)(e=arguments[i])&&(n=Qn(e))&&(t&&(t+=" "),t+=n);return t}function Rr(e){return typeof e=="object"?qr(e):e??""}const Sn=[...` 	
\r\f \v\uFEFF`];function Br(e,n,i){var t=e==null?"":""+e;if(n&&(t=t?t+" "+n:n),i){for(var r in i)if(i[r])t=t?t+" "+r:r;else if(t.length)for(var a=r.length,o=0;(o=t.indexOf(r,o))>=0;){var l=o+a;(o===0||Sn.includes(t[o-1]))&&(l===t.length||Sn.includes(t[l]))?t=(o===0?"":t.substring(0,o))+t.substring(l+1):o=l}}return t===""?null:t}function An(e,n=!1){var i=n?" !important;":";",t="";for(var r in e){var a=e[r];a!=null&&a!==""&&(t+=" "+r+": "+a+i)}return t}function Oe(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function Hr(e,n){if(n){var i="",t,r;if(Array.isArray(n)?(t=n[0],r=n[1]):t=n,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var a=!1,o=0,l=!1,s=[];t&&s.push(...Object.keys(t).map(Oe)),r&&s.push(...Object.keys(r).map(Oe));var c=0,p=-1;const y=e.length;for(var u=0;u<y;u++){var f=e[u];if(l?f==="/"&&e[u-1]==="*"&&(l=!1):a?a===f&&(a=!1):f==="/"&&e[u+1]==="*"?l=!0:f==='"'||f==="'"?a=f:f==="("?o++:f===")"&&o--,!l&&a===!1&&o===0){if(f===":"&&p===-1)p=u;else if(f===";"||u===y-1){if(p!==-1){var g=Oe(e.substring(c,p).trim());if(!s.includes(g)){f!==";"&&u++;var b=e.substring(c,u).trim();i+=" "+b+";"}}c=u+1,p=-1}}}}return t&&(i+=An(t)),r&&(i+=An(r,!0)),i=i.trim(),i===""?null:i}return e==null?null:String(e)}function Gr(e,n,i,t,r,a){var o=e.__className;if(F||o!==i||o===void 0){var l=Br(i,t,a);(!F||l!==e.getAttribute("class"))&&(l==null?e.removeAttribute("class"):n?e.className=l:e.setAttribute("class",l)),e.__className=i}else if(a&&r!==a)for(var s in a){var c=!!a[s];(r==null||c!==!!r[s])&&e.classList.toggle(s,c)}return a}function Pe(e,n={},i,t){for(var r in i){var a=i[r];n[r]!==a&&(i[r]==null?e.style.removeProperty(r):e.style.setProperty(r,a,t))}}function Ur(e,n,i,t){var r=e.__style;if(F||r!==n){var a=Hr(n,t);(!F||a!==e.getAttribute("style"))&&(a==null?e.removeAttribute("style"):e.style.cssText=a),e.__style=n}else t&&(Array.isArray(t)?(Pe(e,i==null?void 0:i[0],t[0]),Pe(e,i==null?void 0:i[1],t[1],"important")):Pe(e,i,t));return t}function Ge(e,n,i=!1){if(e.multiple){if(n==null)return;if(!Yn(n))return ur();for(var t of e.options)t.selected=n.includes(_n(t));return}for(t of e.options){var r=_n(t);if(sr(r,n)){t.selected=!0;return}}(!i||n!==void 0)&&(e.selectedIndex=-1)}function zr(e){var n=new MutationObserver(()=>{Ge(e,e.__value)});n.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),cr(()=>{n.disconnect()})}function _n(e){return"__value"in e?e.__value:e.value}const ne=Symbol("class"),ie=Symbol("style"),Zn=Symbol("is custom element"),Xn=Symbol("is html");function Yr(e){if(F){var n=!1,i=()=>{if(!n){if(n=!0,e.hasAttribute("value")){var t=e.value;xe(e,"value",null),e.value=t}if(e.hasAttribute("checked")){var r=e.checked;xe(e,"checked",null),e.checked=r}}};e.__on_r=i,Jn(i),gr()}}function Fl(e,n){var i=Qe(e);i.value===(i.value=n??void 0)||e.value===n&&(n!==0||e.nodeName!=="PROGRESS")||(e.value=n??"")}function $r(e,n){n?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function xe(e,n,i,t){var r=Qe(e);F&&(r[n]=e.getAttribute(n),n==="src"||n==="srcset"||n==="href"&&e.nodeName==="LINK")||r[n]!==(r[n]=i)&&(n==="loading"&&(e[br]=i),i==null?e.removeAttribute(n):typeof i!="string"&&ei(e).includes(n)?e[n]=i:e.setAttribute(n,i))}function Vr(e,n,i,t,r=!1,a=!1){if(F&&r&&e.tagName==="INPUT"){var o=e,l=o.type==="checkbox"?"defaultChecked":"defaultValue";l in i||Yr(o)}var s=Qe(e),c=s[Zn],p=!s[Xn];let u=F&&c;u&&le(!1);var f=n||{},g=e.tagName==="OPTION";for(var b in n)b in i||(i[b]=null);i.class?i.class=Rr(i.class):(t||i[ne])&&(i.class=null),i[ie]&&(i.style??(i.style=null));var y=ei(e);for(const A in i){let S=i[A];if(g&&A==="value"&&S==null){e.value=e.__value="",f[A]=S;continue}if(A==="class"){var d=e.namespaceURI==="http://www.w3.org/1999/xhtml";Gr(e,d,S,t,n==null?void 0:n[ne],i[ne]),f[A]=S,f[ne]=i[ne];continue}if(A==="style"){Ur(e,S,n==null?void 0:n[ie],i[ie]),f[A]=S,f[ie]=i[ie];continue}var v=f[A];if(!(S===v&&!(S===void 0&&e.hasAttribute(A)))){f[A]=S;var x=A[0]+A[1];if(x!=="$$")if(x==="on"){const k={},O="$$"+A;let _=A.slice(2);var N=Ir(_);if(Tr(_)&&(_=_.slice(0,-7),k.capture=!0),!N&&v){if(S!=null)continue;e.removeEventListener(_,f[O],k),f[O]=null}if(S!=null)if(N)e[`__${_}`]=S,Lr([_]);else{let $=function(V){f[A].call(this,V)};f[O]=Er(_,e,$,k)}else N&&(e[`__${_}`]=void 0)}else if(A==="style")xe(e,A,S);else if(A==="autofocus")dr(e,!!S);else if(!c&&(A==="__value"||A==="value"&&S!=null))e.value=e.__value=S;else if(A==="selected"&&g)$r(e,S);else{var w=A;p||(w=jr(w));var M=w==="defaultValue"||w==="defaultChecked";if(S==null&&!c&&!M)if(s[A]=null,w==="value"||w==="checked"){let k=e;const O=n===void 0;if(w==="value"){let _=k.defaultValue;k.removeAttribute(w),k.defaultValue=_,k.value=k.__value=O?_:null}else{let _=k.defaultChecked;k.removeAttribute(w),k.defaultChecked=_,k.checked=O?_:!1}}else e.removeAttribute(A);else M||y.includes(w)&&(c||typeof S!="string")?(e[w]=S,w in s&&(s[w]=mr)):typeof S!="function"&&xe(e,w,S)}}}return u&&le(!0),f}function Dl(e,n,i=[],t=[],r=[],a,o=!1,l=!1){pr(r,i,t,s=>{var c=void 0,p={},u=e.nodeName==="SELECT",f=!1;if(Kn(()=>{var b=n(...s.map(se)),y=Vr(e,c,b,a,o,l);f&&u&&"value"in b&&Ge(e,b.value);for(let v of Object.getOwnPropertySymbols(p))b[v]||ye(p[v]);for(let v of Object.getOwnPropertySymbols(b)){var d=b[v];v.description===fr&&(!c||d!==c[v])&&(p[v]&&ye(p[v]),p[v]=ce(()=>Mr(e,()=>d))),y[v]=d}c=y}),u){var g=e;Wn(()=>{Ge(g,c.value,!0),zr(g)})}f=!0})}function Qe(e){return e.__attributes??(e.__attributes={[Zn]:e.nodeName.includes("-"),[Xn]:e.namespaceURI===hr})}var wn=new Map;function ei(e){var n=e.getAttribute("is")||e.nodeName,i=wn.get(n);if(i)return i;wn.set(n,i=[]);for(var t,r=e,a=Element.prototype;a!==r;){t=yr(r);for(var o in t)t[o].set&&i.push(o);r=vr(r)}return i}function Ol(e=!1){const n=xr,i=n.l.u;if(!i)return;let t=()=>wr(n.s);if(e){let r=0,a={};const o=kr(()=>{let l=!1;const s=n.s;for(const c in s)s[c]!==a[c]&&(a[c]=s[c],l=!0);return l&&r++,r});t=()=>se(o)}i.b.length&&Sr(()=>{kn(n,t),yn(i.b)}),bn(()=>{const r=Ar(()=>i.m.map(_r));return()=>{for(const a of r)typeof a=="function"&&a()}}),i.a.length&&bn(()=>{kn(n,t),yn(i.a)})}function kn(e,n){if(e.l.s)for(const i of e.l.s)se(i);n()}const Jr="";function Kr(...e){return Fr+Jr+Dr(e[0],e[1])}Cr();const Wr=`---
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
`,Qr=`---
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
`,Zr=`---
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
`,Xr=`---
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
`,et=`---
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
`,nt=`---
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
`,it=`---
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
`,rt=`---
name: Template Project
slug: template-project
published: true
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
`,tt=`---
name: Svelte Template
slug: template-svelte
published: true
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
`,ot=`---
name: Autonomie & apprentissage
slug: autonomy
published: true
category: soft
color: blue
logo: Autonomy
---

Capacité à apprendre par moi-même, à m'auto-former rapidement, et à être force de proposition.
`,at=`---
name: CI/CD
slug: ci-cd
published: true
category: devops
color: gray
logo: CICD
---

Mise en place de pipelines CI/CD via GitLab. Automatisation des tests et déploiement.
`,lt=`---
name: Créativité
slug: creativity
published: true
category: soft
color: purple
logo: Creativity
---

Création d'expériences originales, notamment en réalité virtuelle ou dans la conception d'UI.
`,st=`---
name: CSS
slug: css
published: true
category: markup-style
color: blue
logo: CSS
---

Mise en forme des interfaces. Utilisé avec Sass ou Tailwind selon les projets.
`,ct=`---
name: Docker
slug: docker
published: true
category: devops
color: blue
logo: Docker
---

Conteneurisation d'applications. Utilisé pour créer des environnements de test ou déployer des apps.
`,ut=`---
name: Git
slug: git
published: true
category: devtools
color: orange
logo: Git
---

Système de versionnement utilisé dans tous mes projets. Workflow GitLab et GitHub.
`,pt=`---
name: HTML
slug: html
published: true
category: markup-style
color: orange
logo: HTML
---

Structure des pages web. Maîtrisé depuis mes débuts.
`,ft=`---
name: Java
slug: java
published: true
category: pro-lang
color: red
logo: Java
---

Langage orienté objet utilisé principalement dans mes projets backend chez Synchrotron SOLEIL.
`,dt=`---
name: JavaScript
slug: js
published: true
category: pro-lang
color: yellow
logo: JavaScript
---

Langage de programmation principal utilisé pour les interfaces interactives, côté client comme côté serveur avec Node.js.
`,mt=`---
name: Linux
slug: linux
published: true
category: devtools
color: gray
logo: Linux
---

Utilisation quotidienne de serveurs Debian et Red Hat au Synchrotron.
`,gt=`---
name: React.js
slug: reactjs
published: true
category: library
color: cyan
logo: ReactJs
---

Bibliothèque JavaScript pour créer des interfaces utilisateur réactives. Utilisé professionnellement.
`,ht=`---
name: Sass
slug: sass
published: true
category: markup-style
color: pink
logo: Sass
---

Préprocesseur CSS qui facilite la factorisation et la gestion de grands projets.
`,vt=`---
name: SQLite
slug: sqlite
published: true
category: db
color: gray
logo: SQLite
---

Base de données légère intégrée. Idéale pour des projets locaux ou embarqués.
`,bt=`---
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
`,yt=`---
name: Travail en équipe
slug: teamwork
published: true
category: soft
color: green
logo: Teamwork
---

Collaboration efficace dans des équipes pluridisciplinaires. Communication claire et partage de responsabilités.
`,xt=`---
name: TypeScript
slug: ts
published: true
category: pro-lang
color: blue
logo: TypeScript
---

Superset de JavaScript typé statiquement. Utilisé pour des projets robustes avec des IDE performants.
`,St=`---
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
`,At=`---
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
`,_t=`---
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
`,wt=`---
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
`,kt=`---
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
`,Ct=`---
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
`,Tt=`# Site Configuration
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
`,Et=`# Page d'accueil
# Personnalise le contenu de ta page d'accueil ici

title: Accueil

hero:
  description: >
    Développeur Full-Stack passionné, je crée des applications web modernes
    et performantes. Actuellement en alternance au Synchrotron SOLEIL et 
    en Master à l'ESIEA.
`,Lt=`# Page CV
# Personnalise le contenu de ta page CV ici

title: CV
pdfPath: /pdf/CV_Alexy_Vanot.pdf
downloadLabel: Télécharger
fullscreenLabel: Plein écran
`,jt=`# Page Contact
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
`;/*! js-yaml 4.1.1 https://github.com/nodeca/js-yaml @license MIT */function ni(e){return typeof e>"u"||e===null}function It(e){return typeof e=="object"&&e!==null}function Ft(e){return Array.isArray(e)?e:ni(e)?[]:[e]}function Dt(e,n){var i,t,r,a;if(n)for(a=Object.keys(n),i=0,t=a.length;i<t;i+=1)r=a[i],e[r]=n[r];return e}function Ot(e,n){var i="",t;for(t=0;t<n;t+=1)i+=e;return i}function Pt(e){return e===0&&Number.NEGATIVE_INFINITY===1/e}var Nt=ni,Mt=It,qt=Ft,Rt=Ot,Bt=Pt,Ht=Dt,E={isNothing:Nt,isObject:Mt,toArray:qt,repeat:Rt,isNegativeZero:Bt,extend:Ht};function ii(e,n){var i="",t=e.reason||"(unknown reason)";return e.mark?(e.mark.name&&(i+='in "'+e.mark.name+'" '),i+="("+(e.mark.line+1)+":"+(e.mark.column+1)+")",!n&&e.mark.snippet&&(i+=`

`+e.mark.snippet),t+" "+i):t}function ue(e,n){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=n,this.message=ii(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}ue.prototype=Object.create(Error.prototype);ue.prototype.constructor=ue;ue.prototype.toString=function(n){return this.name+": "+ii(this,n)};var I=ue;function Ne(e,n,i,t,r){var a="",o="",l=Math.floor(r/2)-1;return t-n>l&&(a=" ... ",n=t-l+a.length),i-t>l&&(o=" ...",i=t+l-o.length),{str:a+e.slice(n,i).replace(/\t/g,"→")+o,pos:t-n+a.length}}function Me(e,n){return E.repeat(" ",n-e.length)+e}function Gt(e,n){if(n=Object.create(n||null),!e.buffer)return null;n.maxLength||(n.maxLength=79),typeof n.indent!="number"&&(n.indent=1),typeof n.linesBefore!="number"&&(n.linesBefore=3),typeof n.linesAfter!="number"&&(n.linesAfter=2);for(var i=/\r?\n|\r|\0/g,t=[0],r=[],a,o=-1;a=i.exec(e.buffer);)r.push(a.index),t.push(a.index+a[0].length),e.position<=a.index&&o<0&&(o=t.length-2);o<0&&(o=t.length-1);var l="",s,c,p=Math.min(e.line+n.linesAfter,r.length).toString().length,u=n.maxLength-(n.indent+p+3);for(s=1;s<=n.linesBefore&&!(o-s<0);s++)c=Ne(e.buffer,t[o-s],r[o-s],e.position-(t[o]-t[o-s]),u),l=E.repeat(" ",n.indent)+Me((e.line-s+1).toString(),p)+" | "+c.str+`
`+l;for(c=Ne(e.buffer,t[o],r[o],e.position,u),l+=E.repeat(" ",n.indent)+Me((e.line+1).toString(),p)+" | "+c.str+`
`,l+=E.repeat("-",n.indent+p+3+c.pos)+`^
`,s=1;s<=n.linesAfter&&!(o+s>=r.length);s++)c=Ne(e.buffer,t[o+s],r[o+s],e.position-(t[o]-t[o+s]),u),l+=E.repeat(" ",n.indent)+Me((e.line+s+1).toString(),p)+" | "+c.str+`
`;return l.replace(/\n$/,"")}var Ut=Gt,zt=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],Yt=["scalar","sequence","mapping"];function $t(e){var n={};return e!==null&&Object.keys(e).forEach(function(i){e[i].forEach(function(t){n[String(t)]=i})}),n}function Vt(e,n){if(n=n||{},Object.keys(n).forEach(function(i){if(zt.indexOf(i)===-1)throw new I('Unknown option "'+i+'" is met in definition of "'+e+'" YAML type.')}),this.options=n,this.tag=e,this.kind=n.kind||null,this.resolve=n.resolve||function(){return!0},this.construct=n.construct||function(i){return i},this.instanceOf=n.instanceOf||null,this.predicate=n.predicate||null,this.represent=n.represent||null,this.representName=n.representName||null,this.defaultStyle=n.defaultStyle||null,this.multi=n.multi||!1,this.styleAliases=$t(n.styleAliases||null),Yt.indexOf(this.kind)===-1)throw new I('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')}var L=Vt;function Cn(e,n){var i=[];return e[n].forEach(function(t){var r=i.length;i.forEach(function(a,o){a.tag===t.tag&&a.kind===t.kind&&a.multi===t.multi&&(r=o)}),i[r]=t}),i}function Jt(){var e={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},n,i;function t(r){r.multi?(e.multi[r.kind].push(r),e.multi.fallback.push(r)):e[r.kind][r.tag]=e.fallback[r.tag]=r}for(n=0,i=arguments.length;n<i;n+=1)arguments[n].forEach(t);return e}function Ue(e){return this.extend(e)}Ue.prototype.extend=function(n){var i=[],t=[];if(n instanceof L)t.push(n);else if(Array.isArray(n))t=t.concat(n);else if(n&&(Array.isArray(n.implicit)||Array.isArray(n.explicit)))n.implicit&&(i=i.concat(n.implicit)),n.explicit&&(t=t.concat(n.explicit));else throw new I("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");i.forEach(function(a){if(!(a instanceof L))throw new I("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(a.loadKind&&a.loadKind!=="scalar")throw new I("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(a.multi)throw new I("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),t.forEach(function(a){if(!(a instanceof L))throw new I("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var r=Object.create(Ue.prototype);return r.implicit=(this.implicit||[]).concat(i),r.explicit=(this.explicit||[]).concat(t),r.compiledImplicit=Cn(r,"implicit"),r.compiledExplicit=Cn(r,"explicit"),r.compiledTypeMap=Jt(r.compiledImplicit,r.compiledExplicit),r};var ri=Ue,ti=new L("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return e!==null?e:""}}),oi=new L("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return e!==null?e:[]}}),ai=new L("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return e!==null?e:{}}}),li=new ri({explicit:[ti,oi,ai]});function Kt(e){if(e===null)return!0;var n=e.length;return n===1&&e==="~"||n===4&&(e==="null"||e==="Null"||e==="NULL")}function Wt(){return null}function Qt(e){return e===null}var si=new L("tag:yaml.org,2002:null",{kind:"scalar",resolve:Kt,construct:Wt,predicate:Qt,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function Zt(e){if(e===null)return!1;var n=e.length;return n===4&&(e==="true"||e==="True"||e==="TRUE")||n===5&&(e==="false"||e==="False"||e==="FALSE")}function Xt(e){return e==="true"||e==="True"||e==="TRUE"}function eo(e){return Object.prototype.toString.call(e)==="[object Boolean]"}var ci=new L("tag:yaml.org,2002:bool",{kind:"scalar",resolve:Zt,construct:Xt,predicate:eo,represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"});function no(e){return 48<=e&&e<=57||65<=e&&e<=70||97<=e&&e<=102}function io(e){return 48<=e&&e<=55}function ro(e){return 48<=e&&e<=57}function to(e){if(e===null)return!1;var n=e.length,i=0,t=!1,r;if(!n)return!1;if(r=e[i],(r==="-"||r==="+")&&(r=e[++i]),r==="0"){if(i+1===n)return!0;if(r=e[++i],r==="b"){for(i++;i<n;i++)if(r=e[i],r!=="_"){if(r!=="0"&&r!=="1")return!1;t=!0}return t&&r!=="_"}if(r==="x"){for(i++;i<n;i++)if(r=e[i],r!=="_"){if(!no(e.charCodeAt(i)))return!1;t=!0}return t&&r!=="_"}if(r==="o"){for(i++;i<n;i++)if(r=e[i],r!=="_"){if(!io(e.charCodeAt(i)))return!1;t=!0}return t&&r!=="_"}}if(r==="_")return!1;for(;i<n;i++)if(r=e[i],r!=="_"){if(!ro(e.charCodeAt(i)))return!1;t=!0}return!(!t||r==="_")}function oo(e){var n=e,i=1,t;if(n.indexOf("_")!==-1&&(n=n.replace(/_/g,"")),t=n[0],(t==="-"||t==="+")&&(t==="-"&&(i=-1),n=n.slice(1),t=n[0]),n==="0")return 0;if(t==="0"){if(n[1]==="b")return i*parseInt(n.slice(2),2);if(n[1]==="x")return i*parseInt(n.slice(2),16);if(n[1]==="o")return i*parseInt(n.slice(2),8)}return i*parseInt(n,10)}function ao(e){return Object.prototype.toString.call(e)==="[object Number]"&&e%1===0&&!E.isNegativeZero(e)}var ui=new L("tag:yaml.org,2002:int",{kind:"scalar",resolve:to,construct:oo,predicate:ao,represent:{binary:function(e){return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){return e>=0?"0o"+e.toString(8):"-0o"+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),lo=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function so(e){return!(e===null||!lo.test(e)||e[e.length-1]==="_")}function co(e){var n,i;return n=e.replace(/_/g,"").toLowerCase(),i=n[0]==="-"?-1:1,"+-".indexOf(n[0])>=0&&(n=n.slice(1)),n===".inf"?i===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:n===".nan"?NaN:i*parseFloat(n,10)}var uo=/^[-+]?[0-9]+e/;function po(e,n){var i;if(isNaN(e))switch(n){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(n){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(n){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(E.isNegativeZero(e))return"-0.0";return i=e.toString(10),uo.test(i)?i.replace("e",".e"):i}function fo(e){return Object.prototype.toString.call(e)==="[object Number]"&&(e%1!==0||E.isNegativeZero(e))}var pi=new L("tag:yaml.org,2002:float",{kind:"scalar",resolve:so,construct:co,predicate:fo,represent:po,defaultStyle:"lowercase"}),fi=li.extend({implicit:[si,ci,ui,pi]}),di=fi,mi=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),gi=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function mo(e){return e===null?!1:mi.exec(e)!==null||gi.exec(e)!==null}function go(e){var n,i,t,r,a,o,l,s=0,c=null,p,u,f;if(n=mi.exec(e),n===null&&(n=gi.exec(e)),n===null)throw new Error("Date resolve error");if(i=+n[1],t=+n[2]-1,r=+n[3],!n[4])return new Date(Date.UTC(i,t,r));if(a=+n[4],o=+n[5],l=+n[6],n[7]){for(s=n[7].slice(0,3);s.length<3;)s+="0";s=+s}return n[9]&&(p=+n[10],u=+(n[11]||0),c=(p*60+u)*6e4,n[9]==="-"&&(c=-c)),f=new Date(Date.UTC(i,t,r,a,o,l,s)),c&&f.setTime(f.getTime()-c),f}function ho(e){return e.toISOString()}var hi=new L("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:mo,construct:go,instanceOf:Date,represent:ho});function vo(e){return e==="<<"||e===null}var vi=new L("tag:yaml.org,2002:merge",{kind:"scalar",resolve:vo}),Ze=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function bo(e){if(e===null)return!1;var n,i,t=0,r=e.length,a=Ze;for(i=0;i<r;i++)if(n=a.indexOf(e.charAt(i)),!(n>64)){if(n<0)return!1;t+=6}return t%8===0}function yo(e){var n,i,t=e.replace(/[\r\n=]/g,""),r=t.length,a=Ze,o=0,l=[];for(n=0;n<r;n++)n%4===0&&n&&(l.push(o>>16&255),l.push(o>>8&255),l.push(o&255)),o=o<<6|a.indexOf(t.charAt(n));return i=r%4*6,i===0?(l.push(o>>16&255),l.push(o>>8&255),l.push(o&255)):i===18?(l.push(o>>10&255),l.push(o>>2&255)):i===12&&l.push(o>>4&255),new Uint8Array(l)}function xo(e){var n="",i=0,t,r,a=e.length,o=Ze;for(t=0;t<a;t++)t%3===0&&t&&(n+=o[i>>18&63],n+=o[i>>12&63],n+=o[i>>6&63],n+=o[i&63]),i=(i<<8)+e[t];return r=a%3,r===0?(n+=o[i>>18&63],n+=o[i>>12&63],n+=o[i>>6&63],n+=o[i&63]):r===2?(n+=o[i>>10&63],n+=o[i>>4&63],n+=o[i<<2&63],n+=o[64]):r===1&&(n+=o[i>>2&63],n+=o[i<<4&63],n+=o[64],n+=o[64]),n}function So(e){return Object.prototype.toString.call(e)==="[object Uint8Array]"}var bi=new L("tag:yaml.org,2002:binary",{kind:"scalar",resolve:bo,construct:yo,predicate:So,represent:xo}),Ao=Object.prototype.hasOwnProperty,_o=Object.prototype.toString;function wo(e){if(e===null)return!0;var n=[],i,t,r,a,o,l=e;for(i=0,t=l.length;i<t;i+=1){if(r=l[i],o=!1,_o.call(r)!=="[object Object]")return!1;for(a in r)if(Ao.call(r,a))if(!o)o=!0;else return!1;if(!o)return!1;if(n.indexOf(a)===-1)n.push(a);else return!1}return!0}function ko(e){return e!==null?e:[]}var yi=new L("tag:yaml.org,2002:omap",{kind:"sequence",resolve:wo,construct:ko}),Co=Object.prototype.toString;function To(e){if(e===null)return!0;var n,i,t,r,a,o=e;for(a=new Array(o.length),n=0,i=o.length;n<i;n+=1){if(t=o[n],Co.call(t)!=="[object Object]"||(r=Object.keys(t),r.length!==1))return!1;a[n]=[r[0],t[r[0]]]}return!0}function Eo(e){if(e===null)return[];var n,i,t,r,a,o=e;for(a=new Array(o.length),n=0,i=o.length;n<i;n+=1)t=o[n],r=Object.keys(t),a[n]=[r[0],t[r[0]]];return a}var xi=new L("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:To,construct:Eo}),Lo=Object.prototype.hasOwnProperty;function jo(e){if(e===null)return!0;var n,i=e;for(n in i)if(Lo.call(i,n)&&i[n]!==null)return!1;return!0}function Io(e){return e!==null?e:{}}var Si=new L("tag:yaml.org,2002:set",{kind:"mapping",resolve:jo,construct:Io}),Xe=di.extend({implicit:[hi,vi],explicit:[bi,yi,xi,Si]}),z=Object.prototype.hasOwnProperty,Se=1,Ai=2,_i=3,Ae=4,qe=1,Fo=2,Tn=3,Do=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,Oo=/[\x85\u2028\u2029]/,Po=/[,\[\]\{\}]/,wi=/^(?:!|!!|![a-z\-]+!)$/i,ki=/^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;function En(e){return Object.prototype.toString.call(e)}function q(e){return e===10||e===13}function Y(e){return e===9||e===32}function D(e){return e===9||e===32||e===10||e===13}function W(e){return e===44||e===91||e===93||e===123||e===125}function No(e){var n;return 48<=e&&e<=57?e-48:(n=e|32,97<=n&&n<=102?n-97+10:-1)}function Mo(e){return e===120?2:e===117?4:e===85?8:0}function qo(e){return 48<=e&&e<=57?e-48:-1}function Ln(e){return e===48?"\0":e===97?"\x07":e===98?"\b":e===116||e===9?"	":e===110?`
`:e===118?"\v":e===102?"\f":e===114?"\r":e===101?"\x1B":e===32?" ":e===34?'"':e===47?"/":e===92?"\\":e===78?"":e===95?" ":e===76?"\u2028":e===80?"\u2029":""}function Ro(e){return e<=65535?String.fromCharCode(e):String.fromCharCode((e-65536>>10)+55296,(e-65536&1023)+56320)}function Ci(e,n,i){n==="__proto__"?Object.defineProperty(e,n,{configurable:!0,enumerable:!0,writable:!0,value:i}):e[n]=i}var Ti=new Array(256),Ei=new Array(256);for(var J=0;J<256;J++)Ti[J]=Ln(J)?1:0,Ei[J]=Ln(J);function Bo(e,n){this.input=e,this.filename=n.filename||null,this.schema=n.schema||Xe,this.onWarning=n.onWarning||null,this.legacy=n.legacy||!1,this.json=n.json||!1,this.listener=n.listener||null,this.implicitTypes=this.schema.compiledImplicit,this.typeMap=this.schema.compiledTypeMap,this.length=e.length,this.position=0,this.line=0,this.lineStart=0,this.lineIndent=0,this.firstTabInLine=-1,this.documents=[]}function Li(e,n){var i={name:e.filename,buffer:e.input.slice(0,-1),position:e.position,line:e.line,column:e.position-e.lineStart};return i.snippet=Ut(i),new I(n,i)}function h(e,n){throw Li(e,n)}function _e(e,n){e.onWarning&&e.onWarning.call(null,Li(e,n))}var jn={YAML:function(n,i,t){var r,a,o;n.version!==null&&h(n,"duplication of %YAML directive"),t.length!==1&&h(n,"YAML directive accepts exactly one argument"),r=/^([0-9]+)\.([0-9]+)$/.exec(t[0]),r===null&&h(n,"ill-formed argument of the YAML directive"),a=parseInt(r[1],10),o=parseInt(r[2],10),a!==1&&h(n,"unacceptable YAML version of the document"),n.version=t[0],n.checkLineBreaks=o<2,o!==1&&o!==2&&_e(n,"unsupported YAML version of the document")},TAG:function(n,i,t){var r,a;t.length!==2&&h(n,"TAG directive accepts exactly two arguments"),r=t[0],a=t[1],wi.test(r)||h(n,"ill-formed tag handle (first argument) of the TAG directive"),z.call(n.tagMap,r)&&h(n,'there is a previously declared suffix for "'+r+'" tag handle'),ki.test(a)||h(n,"ill-formed tag prefix (second argument) of the TAG directive");try{a=decodeURIComponent(a)}catch{h(n,"tag prefix is malformed: "+a)}n.tagMap[r]=a}};function U(e,n,i,t){var r,a,o,l;if(n<i){if(l=e.input.slice(n,i),t)for(r=0,a=l.length;r<a;r+=1)o=l.charCodeAt(r),o===9||32<=o&&o<=1114111||h(e,"expected valid JSON character");else Do.test(l)&&h(e,"the stream contains non-printable characters");e.result+=l}}function In(e,n,i,t){var r,a,o,l;for(E.isObject(i)||h(e,"cannot merge mappings; the provided source object is unacceptable"),r=Object.keys(i),o=0,l=r.length;o<l;o+=1)a=r[o],z.call(n,a)||(Ci(n,a,i[a]),t[a]=!0)}function Q(e,n,i,t,r,a,o,l,s){var c,p;if(Array.isArray(r))for(r=Array.prototype.slice.call(r),c=0,p=r.length;c<p;c+=1)Array.isArray(r[c])&&h(e,"nested arrays are not supported inside keys"),typeof r=="object"&&En(r[c])==="[object Object]"&&(r[c]="[object Object]");if(typeof r=="object"&&En(r)==="[object Object]"&&(r="[object Object]"),r=String(r),n===null&&(n={}),t==="tag:yaml.org,2002:merge")if(Array.isArray(a))for(c=0,p=a.length;c<p;c+=1)In(e,n,a[c],i);else In(e,n,a,i);else!e.json&&!z.call(i,r)&&z.call(n,r)&&(e.line=o||e.line,e.lineStart=l||e.lineStart,e.position=s||e.position,h(e,"duplicated mapping key")),Ci(n,r,a),delete i[r];return n}function en(e){var n;n=e.input.charCodeAt(e.position),n===10?e.position++:n===13?(e.position++,e.input.charCodeAt(e.position)===10&&e.position++):h(e,"a line break is expected"),e.line+=1,e.lineStart=e.position,e.firstTabInLine=-1}function T(e,n,i){for(var t=0,r=e.input.charCodeAt(e.position);r!==0;){for(;Y(r);)r===9&&e.firstTabInLine===-1&&(e.firstTabInLine=e.position),r=e.input.charCodeAt(++e.position);if(n&&r===35)do r=e.input.charCodeAt(++e.position);while(r!==10&&r!==13&&r!==0);if(q(r))for(en(e),r=e.input.charCodeAt(e.position),t++,e.lineIndent=0;r===32;)e.lineIndent++,r=e.input.charCodeAt(++e.position);else break}return i!==-1&&t!==0&&e.lineIndent<i&&_e(e,"deficient indentation"),t}function Ce(e){var n=e.position,i;return i=e.input.charCodeAt(n),!!((i===45||i===46)&&i===e.input.charCodeAt(n+1)&&i===e.input.charCodeAt(n+2)&&(n+=3,i=e.input.charCodeAt(n),i===0||D(i)))}function nn(e,n){n===1?e.result+=" ":n>1&&(e.result+=E.repeat(`
`,n-1))}function Ho(e,n,i){var t,r,a,o,l,s,c,p,u=e.kind,f=e.result,g;if(g=e.input.charCodeAt(e.position),D(g)||W(g)||g===35||g===38||g===42||g===33||g===124||g===62||g===39||g===34||g===37||g===64||g===96||(g===63||g===45)&&(r=e.input.charCodeAt(e.position+1),D(r)||i&&W(r)))return!1;for(e.kind="scalar",e.result="",a=o=e.position,l=!1;g!==0;){if(g===58){if(r=e.input.charCodeAt(e.position+1),D(r)||i&&W(r))break}else if(g===35){if(t=e.input.charCodeAt(e.position-1),D(t))break}else{if(e.position===e.lineStart&&Ce(e)||i&&W(g))break;if(q(g))if(s=e.line,c=e.lineStart,p=e.lineIndent,T(e,!1,-1),e.lineIndent>=n){l=!0,g=e.input.charCodeAt(e.position);continue}else{e.position=o,e.line=s,e.lineStart=c,e.lineIndent=p;break}}l&&(U(e,a,o,!1),nn(e,e.line-s),a=o=e.position,l=!1),Y(g)||(o=e.position+1),g=e.input.charCodeAt(++e.position)}return U(e,a,o,!1),e.result?!0:(e.kind=u,e.result=f,!1)}function Go(e,n){var i,t,r;if(i=e.input.charCodeAt(e.position),i!==39)return!1;for(e.kind="scalar",e.result="",e.position++,t=r=e.position;(i=e.input.charCodeAt(e.position))!==0;)if(i===39)if(U(e,t,e.position,!0),i=e.input.charCodeAt(++e.position),i===39)t=e.position,e.position++,r=e.position;else return!0;else q(i)?(U(e,t,r,!0),nn(e,T(e,!1,n)),t=r=e.position):e.position===e.lineStart&&Ce(e)?h(e,"unexpected end of the document within a single quoted scalar"):(e.position++,r=e.position);h(e,"unexpected end of the stream within a single quoted scalar")}function Uo(e,n){var i,t,r,a,o,l;if(l=e.input.charCodeAt(e.position),l!==34)return!1;for(e.kind="scalar",e.result="",e.position++,i=t=e.position;(l=e.input.charCodeAt(e.position))!==0;){if(l===34)return U(e,i,e.position,!0),e.position++,!0;if(l===92){if(U(e,i,e.position,!0),l=e.input.charCodeAt(++e.position),q(l))T(e,!1,n);else if(l<256&&Ti[l])e.result+=Ei[l],e.position++;else if((o=Mo(l))>0){for(r=o,a=0;r>0;r--)l=e.input.charCodeAt(++e.position),(o=No(l))>=0?a=(a<<4)+o:h(e,"expected hexadecimal character");e.result+=Ro(a),e.position++}else h(e,"unknown escape sequence");i=t=e.position}else q(l)?(U(e,i,t,!0),nn(e,T(e,!1,n)),i=t=e.position):e.position===e.lineStart&&Ce(e)?h(e,"unexpected end of the document within a double quoted scalar"):(e.position++,t=e.position)}h(e,"unexpected end of the stream within a double quoted scalar")}function zo(e,n){var i=!0,t,r,a,o=e.tag,l,s=e.anchor,c,p,u,f,g,b=Object.create(null),y,d,v,x;if(x=e.input.charCodeAt(e.position),x===91)p=93,g=!1,l=[];else if(x===123)p=125,g=!0,l={};else return!1;for(e.anchor!==null&&(e.anchorMap[e.anchor]=l),x=e.input.charCodeAt(++e.position);x!==0;){if(T(e,!0,n),x=e.input.charCodeAt(e.position),x===p)return e.position++,e.tag=o,e.anchor=s,e.kind=g?"mapping":"sequence",e.result=l,!0;i?x===44&&h(e,"expected the node content, but found ','"):h(e,"missed comma between flow collection entries"),d=y=v=null,u=f=!1,x===63&&(c=e.input.charCodeAt(e.position+1),D(c)&&(u=f=!0,e.position++,T(e,!0,n))),t=e.line,r=e.lineStart,a=e.position,Z(e,n,Se,!1,!0),d=e.tag,y=e.result,T(e,!0,n),x=e.input.charCodeAt(e.position),(f||e.line===t)&&x===58&&(u=!0,x=e.input.charCodeAt(++e.position),T(e,!0,n),Z(e,n,Se,!1,!0),v=e.result),g?Q(e,l,b,d,y,v,t,r,a):u?l.push(Q(e,null,b,d,y,v,t,r,a)):l.push(y),T(e,!0,n),x=e.input.charCodeAt(e.position),x===44?(i=!0,x=e.input.charCodeAt(++e.position)):i=!1}h(e,"unexpected end of the stream within a flow collection")}function Yo(e,n){var i,t,r=qe,a=!1,o=!1,l=n,s=0,c=!1,p,u;if(u=e.input.charCodeAt(e.position),u===124)t=!1;else if(u===62)t=!0;else return!1;for(e.kind="scalar",e.result="";u!==0;)if(u=e.input.charCodeAt(++e.position),u===43||u===45)qe===r?r=u===43?Tn:Fo:h(e,"repeat of a chomping mode identifier");else if((p=qo(u))>=0)p===0?h(e,"bad explicit indentation width of a block scalar; it cannot be less than one"):o?h(e,"repeat of an indentation width identifier"):(l=n+p-1,o=!0);else break;if(Y(u)){do u=e.input.charCodeAt(++e.position);while(Y(u));if(u===35)do u=e.input.charCodeAt(++e.position);while(!q(u)&&u!==0)}for(;u!==0;){for(en(e),e.lineIndent=0,u=e.input.charCodeAt(e.position);(!o||e.lineIndent<l)&&u===32;)e.lineIndent++,u=e.input.charCodeAt(++e.position);if(!o&&e.lineIndent>l&&(l=e.lineIndent),q(u)){s++;continue}if(e.lineIndent<l){r===Tn?e.result+=E.repeat(`
`,a?1+s:s):r===qe&&a&&(e.result+=`
`);break}for(t?Y(u)?(c=!0,e.result+=E.repeat(`
`,a?1+s:s)):c?(c=!1,e.result+=E.repeat(`
`,s+1)):s===0?a&&(e.result+=" "):e.result+=E.repeat(`
`,s):e.result+=E.repeat(`
`,a?1+s:s),a=!0,o=!0,s=0,i=e.position;!q(u)&&u!==0;)u=e.input.charCodeAt(++e.position);U(e,i,e.position,!1)}return!0}function Fn(e,n){var i,t=e.tag,r=e.anchor,a=[],o,l=!1,s;if(e.firstTabInLine!==-1)return!1;for(e.anchor!==null&&(e.anchorMap[e.anchor]=a),s=e.input.charCodeAt(e.position);s!==0&&(e.firstTabInLine!==-1&&(e.position=e.firstTabInLine,h(e,"tab characters must not be used in indentation")),!(s!==45||(o=e.input.charCodeAt(e.position+1),!D(o))));){if(l=!0,e.position++,T(e,!0,-1)&&e.lineIndent<=n){a.push(null),s=e.input.charCodeAt(e.position);continue}if(i=e.line,Z(e,n,_i,!1,!0),a.push(e.result),T(e,!0,-1),s=e.input.charCodeAt(e.position),(e.line===i||e.lineIndent>n)&&s!==0)h(e,"bad indentation of a sequence entry");else if(e.lineIndent<n)break}return l?(e.tag=t,e.anchor=r,e.kind="sequence",e.result=a,!0):!1}function $o(e,n,i){var t,r,a,o,l,s,c=e.tag,p=e.anchor,u={},f=Object.create(null),g=null,b=null,y=null,d=!1,v=!1,x;if(e.firstTabInLine!==-1)return!1;for(e.anchor!==null&&(e.anchorMap[e.anchor]=u),x=e.input.charCodeAt(e.position);x!==0;){if(!d&&e.firstTabInLine!==-1&&(e.position=e.firstTabInLine,h(e,"tab characters must not be used in indentation")),t=e.input.charCodeAt(e.position+1),a=e.line,(x===63||x===58)&&D(t))x===63?(d&&(Q(e,u,f,g,b,null,o,l,s),g=b=y=null),v=!0,d=!0,r=!0):d?(d=!1,r=!0):h(e,"incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"),e.position+=1,x=t;else{if(o=e.line,l=e.lineStart,s=e.position,!Z(e,i,Ai,!1,!0))break;if(e.line===a){for(x=e.input.charCodeAt(e.position);Y(x);)x=e.input.charCodeAt(++e.position);if(x===58)x=e.input.charCodeAt(++e.position),D(x)||h(e,"a whitespace character is expected after the key-value separator within a block mapping"),d&&(Q(e,u,f,g,b,null,o,l,s),g=b=y=null),v=!0,d=!1,r=!1,g=e.tag,b=e.result;else if(v)h(e,"can not read an implicit mapping pair; a colon is missed");else return e.tag=c,e.anchor=p,!0}else if(v)h(e,"can not read a block mapping entry; a multiline key may not be an implicit key");else return e.tag=c,e.anchor=p,!0}if((e.line===a||e.lineIndent>n)&&(d&&(o=e.line,l=e.lineStart,s=e.position),Z(e,n,Ae,!0,r)&&(d?b=e.result:y=e.result),d||(Q(e,u,f,g,b,y,o,l,s),g=b=y=null),T(e,!0,-1),x=e.input.charCodeAt(e.position)),(e.line===a||e.lineIndent>n)&&x!==0)h(e,"bad indentation of a mapping entry");else if(e.lineIndent<n)break}return d&&Q(e,u,f,g,b,null,o,l,s),v&&(e.tag=c,e.anchor=p,e.kind="mapping",e.result=u),v}function Vo(e){var n,i=!1,t=!1,r,a,o;if(o=e.input.charCodeAt(e.position),o!==33)return!1;if(e.tag!==null&&h(e,"duplication of a tag property"),o=e.input.charCodeAt(++e.position),o===60?(i=!0,o=e.input.charCodeAt(++e.position)):o===33?(t=!0,r="!!",o=e.input.charCodeAt(++e.position)):r="!",n=e.position,i){do o=e.input.charCodeAt(++e.position);while(o!==0&&o!==62);e.position<e.length?(a=e.input.slice(n,e.position),o=e.input.charCodeAt(++e.position)):h(e,"unexpected end of the stream within a verbatim tag")}else{for(;o!==0&&!D(o);)o===33&&(t?h(e,"tag suffix cannot contain exclamation marks"):(r=e.input.slice(n-1,e.position+1),wi.test(r)||h(e,"named tag handle cannot contain such characters"),t=!0,n=e.position+1)),o=e.input.charCodeAt(++e.position);a=e.input.slice(n,e.position),Po.test(a)&&h(e,"tag suffix cannot contain flow indicator characters")}a&&!ki.test(a)&&h(e,"tag name cannot contain such characters: "+a);try{a=decodeURIComponent(a)}catch{h(e,"tag name is malformed: "+a)}return i?e.tag=a:z.call(e.tagMap,r)?e.tag=e.tagMap[r]+a:r==="!"?e.tag="!"+a:r==="!!"?e.tag="tag:yaml.org,2002:"+a:h(e,'undeclared tag handle "'+r+'"'),!0}function Jo(e){var n,i;if(i=e.input.charCodeAt(e.position),i!==38)return!1;for(e.anchor!==null&&h(e,"duplication of an anchor property"),i=e.input.charCodeAt(++e.position),n=e.position;i!==0&&!D(i)&&!W(i);)i=e.input.charCodeAt(++e.position);return e.position===n&&h(e,"name of an anchor node must contain at least one character"),e.anchor=e.input.slice(n,e.position),!0}function Ko(e){var n,i,t;if(t=e.input.charCodeAt(e.position),t!==42)return!1;for(t=e.input.charCodeAt(++e.position),n=e.position;t!==0&&!D(t)&&!W(t);)t=e.input.charCodeAt(++e.position);return e.position===n&&h(e,"name of an alias node must contain at least one character"),i=e.input.slice(n,e.position),z.call(e.anchorMap,i)||h(e,'unidentified alias "'+i+'"'),e.result=e.anchorMap[i],T(e,!0,-1),!0}function Z(e,n,i,t,r){var a,o,l,s=1,c=!1,p=!1,u,f,g,b,y,d;if(e.listener!==null&&e.listener("open",e),e.tag=null,e.anchor=null,e.kind=null,e.result=null,a=o=l=Ae===i||_i===i,t&&T(e,!0,-1)&&(c=!0,e.lineIndent>n?s=1:e.lineIndent===n?s=0:e.lineIndent<n&&(s=-1)),s===1)for(;Vo(e)||Jo(e);)T(e,!0,-1)?(c=!0,l=a,e.lineIndent>n?s=1:e.lineIndent===n?s=0:e.lineIndent<n&&(s=-1)):l=!1;if(l&&(l=c||r),(s===1||Ae===i)&&(Se===i||Ai===i?y=n:y=n+1,d=e.position-e.lineStart,s===1?l&&(Fn(e,d)||$o(e,d,y))||zo(e,y)?p=!0:(o&&Yo(e,y)||Go(e,y)||Uo(e,y)?p=!0:Ko(e)?(p=!0,(e.tag!==null||e.anchor!==null)&&h(e,"alias node should not have any properties")):Ho(e,y,Se===i)&&(p=!0,e.tag===null&&(e.tag="?")),e.anchor!==null&&(e.anchorMap[e.anchor]=e.result)):s===0&&(p=l&&Fn(e,d))),e.tag===null)e.anchor!==null&&(e.anchorMap[e.anchor]=e.result);else if(e.tag==="?"){for(e.result!==null&&e.kind!=="scalar"&&h(e,'unacceptable node kind for !<?> tag; it should be "scalar", not "'+e.kind+'"'),u=0,f=e.implicitTypes.length;u<f;u+=1)if(b=e.implicitTypes[u],b.resolve(e.result)){e.result=b.construct(e.result),e.tag=b.tag,e.anchor!==null&&(e.anchorMap[e.anchor]=e.result);break}}else if(e.tag!=="!"){if(z.call(e.typeMap[e.kind||"fallback"],e.tag))b=e.typeMap[e.kind||"fallback"][e.tag];else for(b=null,g=e.typeMap.multi[e.kind||"fallback"],u=0,f=g.length;u<f;u+=1)if(e.tag.slice(0,g[u].tag.length)===g[u].tag){b=g[u];break}b||h(e,"unknown tag !<"+e.tag+">"),e.result!==null&&b.kind!==e.kind&&h(e,"unacceptable node kind for !<"+e.tag+'> tag; it should be "'+b.kind+'", not "'+e.kind+'"'),b.resolve(e.result,e.tag)?(e.result=b.construct(e.result,e.tag),e.anchor!==null&&(e.anchorMap[e.anchor]=e.result)):h(e,"cannot resolve a node with !<"+e.tag+"> explicit tag")}return e.listener!==null&&e.listener("close",e),e.tag!==null||e.anchor!==null||p}function Wo(e){var n=e.position,i,t,r,a=!1,o;for(e.version=null,e.checkLineBreaks=e.legacy,e.tagMap=Object.create(null),e.anchorMap=Object.create(null);(o=e.input.charCodeAt(e.position))!==0&&(T(e,!0,-1),o=e.input.charCodeAt(e.position),!(e.lineIndent>0||o!==37));){for(a=!0,o=e.input.charCodeAt(++e.position),i=e.position;o!==0&&!D(o);)o=e.input.charCodeAt(++e.position);for(t=e.input.slice(i,e.position),r=[],t.length<1&&h(e,"directive name must not be less than one character in length");o!==0;){for(;Y(o);)o=e.input.charCodeAt(++e.position);if(o===35){do o=e.input.charCodeAt(++e.position);while(o!==0&&!q(o));break}if(q(o))break;for(i=e.position;o!==0&&!D(o);)o=e.input.charCodeAt(++e.position);r.push(e.input.slice(i,e.position))}o!==0&&en(e),z.call(jn,t)?jn[t](e,t,r):_e(e,'unknown document directive "'+t+'"')}if(T(e,!0,-1),e.lineIndent===0&&e.input.charCodeAt(e.position)===45&&e.input.charCodeAt(e.position+1)===45&&e.input.charCodeAt(e.position+2)===45?(e.position+=3,T(e,!0,-1)):a&&h(e,"directives end mark is expected"),Z(e,e.lineIndent-1,Ae,!1,!0),T(e,!0,-1),e.checkLineBreaks&&Oo.test(e.input.slice(n,e.position))&&_e(e,"non-ASCII line breaks are interpreted as content"),e.documents.push(e.result),e.position===e.lineStart&&Ce(e)){e.input.charCodeAt(e.position)===46&&(e.position+=3,T(e,!0,-1));return}if(e.position<e.length-1)h(e,"end of the stream or a document separator is expected");else return}function ji(e,n){e=String(e),n=n||{},e.length!==0&&(e.charCodeAt(e.length-1)!==10&&e.charCodeAt(e.length-1)!==13&&(e+=`
`),e.charCodeAt(0)===65279&&(e=e.slice(1)));var i=new Bo(e,n),t=e.indexOf("\0");for(t!==-1&&(i.position=t,h(i,"null byte is not allowed in input")),i.input+="\0";i.input.charCodeAt(i.position)===32;)i.lineIndent+=1,i.position+=1;for(;i.position<i.length-1;)Wo(i);return i.documents}function Qo(e,n,i){n!==null&&typeof n=="object"&&typeof i>"u"&&(i=n,n=null);var t=ji(e,i);if(typeof n!="function")return t;for(var r=0,a=t.length;r<a;r+=1)n(t[r])}function Zo(e,n){var i=ji(e,n);if(i.length!==0){if(i.length===1)return i[0];throw new I("expected a single document in the stream, but found more")}}var Xo=Qo,ea=Zo,Ii={loadAll:Xo,load:ea},Fi=Object.prototype.toString,Di=Object.prototype.hasOwnProperty,rn=65279,na=9,pe=10,ia=13,ra=32,ta=33,oa=34,ze=35,aa=37,la=38,sa=39,ca=42,Oi=44,ua=45,we=58,pa=61,fa=62,da=63,ma=64,Pi=91,Ni=93,ga=96,Mi=123,ha=124,qi=125,j={};j[0]="\\0";j[7]="\\a";j[8]="\\b";j[9]="\\t";j[10]="\\n";j[11]="\\v";j[12]="\\f";j[13]="\\r";j[27]="\\e";j[34]='\\"';j[92]="\\\\";j[133]="\\N";j[160]="\\_";j[8232]="\\L";j[8233]="\\P";var va=["y","Y","yes","Yes","YES","on","On","ON","n","N","no","No","NO","off","Off","OFF"],ba=/^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;function ya(e,n){var i,t,r,a,o,l,s;if(n===null)return{};for(i={},t=Object.keys(n),r=0,a=t.length;r<a;r+=1)o=t[r],l=String(n[o]),o.slice(0,2)==="!!"&&(o="tag:yaml.org,2002:"+o.slice(2)),s=e.compiledTypeMap.fallback[o],s&&Di.call(s.styleAliases,l)&&(l=s.styleAliases[l]),i[o]=l;return i}function xa(e){var n,i,t;if(n=e.toString(16).toUpperCase(),e<=255)i="x",t=2;else if(e<=65535)i="u",t=4;else if(e<=4294967295)i="U",t=8;else throw new I("code point within a string may not be greater than 0xFFFFFFFF");return"\\"+i+E.repeat("0",t-n.length)+n}var Sa=1,fe=2;function Aa(e){this.schema=e.schema||Xe,this.indent=Math.max(1,e.indent||2),this.noArrayIndent=e.noArrayIndent||!1,this.skipInvalid=e.skipInvalid||!1,this.flowLevel=E.isNothing(e.flowLevel)?-1:e.flowLevel,this.styleMap=ya(this.schema,e.styles||null),this.sortKeys=e.sortKeys||!1,this.lineWidth=e.lineWidth||80,this.noRefs=e.noRefs||!1,this.noCompatMode=e.noCompatMode||!1,this.condenseFlow=e.condenseFlow||!1,this.quotingType=e.quotingType==='"'?fe:Sa,this.forceQuotes=e.forceQuotes||!1,this.replacer=typeof e.replacer=="function"?e.replacer:null,this.implicitTypes=this.schema.compiledImplicit,this.explicitTypes=this.schema.compiledExplicit,this.tag=null,this.result="",this.duplicates=[],this.usedDuplicates=null}function Dn(e,n){for(var i=E.repeat(" ",n),t=0,r=-1,a="",o,l=e.length;t<l;)r=e.indexOf(`
`,t),r===-1?(o=e.slice(t),t=l):(o=e.slice(t,r+1),t=r+1),o.length&&o!==`
`&&(a+=i),a+=o;return a}function Ye(e,n){return`
`+E.repeat(" ",e.indent*n)}function _a(e,n){var i,t,r;for(i=0,t=e.implicitTypes.length;i<t;i+=1)if(r=e.implicitTypes[i],r.resolve(n))return!0;return!1}function ke(e){return e===ra||e===na}function de(e){return 32<=e&&e<=126||161<=e&&e<=55295&&e!==8232&&e!==8233||57344<=e&&e<=65533&&e!==rn||65536<=e&&e<=1114111}function On(e){return de(e)&&e!==rn&&e!==ia&&e!==pe}function Pn(e,n,i){var t=On(e),r=t&&!ke(e);return(i?t:t&&e!==Oi&&e!==Pi&&e!==Ni&&e!==Mi&&e!==qi)&&e!==ze&&!(n===we&&!r)||On(n)&&!ke(n)&&e===ze||n===we&&r}function wa(e){return de(e)&&e!==rn&&!ke(e)&&e!==ua&&e!==da&&e!==we&&e!==Oi&&e!==Pi&&e!==Ni&&e!==Mi&&e!==qi&&e!==ze&&e!==la&&e!==ca&&e!==ta&&e!==ha&&e!==pa&&e!==fa&&e!==sa&&e!==oa&&e!==aa&&e!==ma&&e!==ga}function ka(e){return!ke(e)&&e!==we}function oe(e,n){var i=e.charCodeAt(n),t;return i>=55296&&i<=56319&&n+1<e.length&&(t=e.charCodeAt(n+1),t>=56320&&t<=57343)?(i-55296)*1024+t-56320+65536:i}function Ri(e){var n=/^\n* /;return n.test(e)}var Bi=1,$e=2,Hi=3,Gi=4,K=5;function Ca(e,n,i,t,r,a,o,l){var s,c=0,p=null,u=!1,f=!1,g=t!==-1,b=-1,y=wa(oe(e,0))&&ka(oe(e,e.length-1));if(n||o)for(s=0;s<e.length;c>=65536?s+=2:s++){if(c=oe(e,s),!de(c))return K;y=y&&Pn(c,p,l),p=c}else{for(s=0;s<e.length;c>=65536?s+=2:s++){if(c=oe(e,s),c===pe)u=!0,g&&(f=f||s-b-1>t&&e[b+1]!==" ",b=s);else if(!de(c))return K;y=y&&Pn(c,p,l),p=c}f=f||g&&s-b-1>t&&e[b+1]!==" "}return!u&&!f?y&&!o&&!r(e)?Bi:a===fe?K:$e:i>9&&Ri(e)?K:o?a===fe?K:$e:f?Gi:Hi}function Ta(e,n,i,t,r){e.dump=(function(){if(n.length===0)return e.quotingType===fe?'""':"''";if(!e.noCompatMode&&(va.indexOf(n)!==-1||ba.test(n)))return e.quotingType===fe?'"'+n+'"':"'"+n+"'";var a=e.indent*Math.max(1,i),o=e.lineWidth===-1?-1:Math.max(Math.min(e.lineWidth,40),e.lineWidth-a),l=t||e.flowLevel>-1&&i>=e.flowLevel;function s(c){return _a(e,c)}switch(Ca(n,l,e.indent,o,s,e.quotingType,e.forceQuotes&&!t,r)){case Bi:return n;case $e:return"'"+n.replace(/'/g,"''")+"'";case Hi:return"|"+Nn(n,e.indent)+Mn(Dn(n,a));case Gi:return">"+Nn(n,e.indent)+Mn(Dn(Ea(n,o),a));case K:return'"'+La(n)+'"';default:throw new I("impossible error: invalid scalar style")}})()}function Nn(e,n){var i=Ri(e)?String(n):"",t=e[e.length-1]===`
`,r=t&&(e[e.length-2]===`
`||e===`
`),a=r?"+":t?"":"-";return i+a+`
`}function Mn(e){return e[e.length-1]===`
`?e.slice(0,-1):e}function Ea(e,n){for(var i=/(\n+)([^\n]*)/g,t=(function(){var c=e.indexOf(`
`);return c=c!==-1?c:e.length,i.lastIndex=c,qn(e.slice(0,c),n)})(),r=e[0]===`
`||e[0]===" ",a,o;o=i.exec(e);){var l=o[1],s=o[2];a=s[0]===" ",t+=l+(!r&&!a&&s!==""?`
`:"")+qn(s,n),r=a}return t}function qn(e,n){if(e===""||e[0]===" ")return e;for(var i=/ [^ ]/g,t,r=0,a,o=0,l=0,s="";t=i.exec(e);)l=t.index,l-r>n&&(a=o>r?o:l,s+=`
`+e.slice(r,a),r=a+1),o=l;return s+=`
`,e.length-r>n&&o>r?s+=e.slice(r,o)+`
`+e.slice(o+1):s+=e.slice(r),s.slice(1)}function La(e){for(var n="",i=0,t,r=0;r<e.length;i>=65536?r+=2:r++)i=oe(e,r),t=j[i],!t&&de(i)?(n+=e[r],i>=65536&&(n+=e[r+1])):n+=t||xa(i);return n}function ja(e,n,i){var t="",r=e.tag,a,o,l;for(a=0,o=i.length;a<o;a+=1)l=i[a],e.replacer&&(l=e.replacer.call(i,String(a),l)),(H(e,n,l,!1,!1)||typeof l>"u"&&H(e,n,null,!1,!1))&&(t!==""&&(t+=","+(e.condenseFlow?"":" ")),t+=e.dump);e.tag=r,e.dump="["+t+"]"}function Rn(e,n,i,t){var r="",a=e.tag,o,l,s;for(o=0,l=i.length;o<l;o+=1)s=i[o],e.replacer&&(s=e.replacer.call(i,String(o),s)),(H(e,n+1,s,!0,!0,!1,!0)||typeof s>"u"&&H(e,n+1,null,!0,!0,!1,!0))&&((!t||r!=="")&&(r+=Ye(e,n)),e.dump&&pe===e.dump.charCodeAt(0)?r+="-":r+="- ",r+=e.dump);e.tag=a,e.dump=r||"[]"}function Ia(e,n,i){var t="",r=e.tag,a=Object.keys(i),o,l,s,c,p;for(o=0,l=a.length;o<l;o+=1)p="",t!==""&&(p+=", "),e.condenseFlow&&(p+='"'),s=a[o],c=i[s],e.replacer&&(c=e.replacer.call(i,s,c)),H(e,n,s,!1,!1)&&(e.dump.length>1024&&(p+="? "),p+=e.dump+(e.condenseFlow?'"':"")+":"+(e.condenseFlow?"":" "),H(e,n,c,!1,!1)&&(p+=e.dump,t+=p));e.tag=r,e.dump="{"+t+"}"}function Fa(e,n,i,t){var r="",a=e.tag,o=Object.keys(i),l,s,c,p,u,f;if(e.sortKeys===!0)o.sort();else if(typeof e.sortKeys=="function")o.sort(e.sortKeys);else if(e.sortKeys)throw new I("sortKeys must be a boolean or a function");for(l=0,s=o.length;l<s;l+=1)f="",(!t||r!=="")&&(f+=Ye(e,n)),c=o[l],p=i[c],e.replacer&&(p=e.replacer.call(i,c,p)),H(e,n+1,c,!0,!0,!0)&&(u=e.tag!==null&&e.tag!=="?"||e.dump&&e.dump.length>1024,u&&(e.dump&&pe===e.dump.charCodeAt(0)?f+="?":f+="? "),f+=e.dump,u&&(f+=Ye(e,n)),H(e,n+1,p,!0,u)&&(e.dump&&pe===e.dump.charCodeAt(0)?f+=":":f+=": ",f+=e.dump,r+=f));e.tag=a,e.dump=r||"{}"}function Bn(e,n,i){var t,r,a,o,l,s;for(r=i?e.explicitTypes:e.implicitTypes,a=0,o=r.length;a<o;a+=1)if(l=r[a],(l.instanceOf||l.predicate)&&(!l.instanceOf||typeof n=="object"&&n instanceof l.instanceOf)&&(!l.predicate||l.predicate(n))){if(i?l.multi&&l.representName?e.tag=l.representName(n):e.tag=l.tag:e.tag="?",l.represent){if(s=e.styleMap[l.tag]||l.defaultStyle,Fi.call(l.represent)==="[object Function]")t=l.represent(n,s);else if(Di.call(l.represent,s))t=l.represent[s](n,s);else throw new I("!<"+l.tag+'> tag resolver accepts not "'+s+'" style');e.dump=t}return!0}return!1}function H(e,n,i,t,r,a,o){e.tag=null,e.dump=i,Bn(e,i,!1)||Bn(e,i,!0);var l=Fi.call(e.dump),s=t,c;t&&(t=e.flowLevel<0||e.flowLevel>n);var p=l==="[object Object]"||l==="[object Array]",u,f;if(p&&(u=e.duplicates.indexOf(i),f=u!==-1),(e.tag!==null&&e.tag!=="?"||f||e.indent!==2&&n>0)&&(r=!1),f&&e.usedDuplicates[u])e.dump="*ref_"+u;else{if(p&&f&&!e.usedDuplicates[u]&&(e.usedDuplicates[u]=!0),l==="[object Object]")t&&Object.keys(e.dump).length!==0?(Fa(e,n,e.dump,r),f&&(e.dump="&ref_"+u+e.dump)):(Ia(e,n,e.dump),f&&(e.dump="&ref_"+u+" "+e.dump));else if(l==="[object Array]")t&&e.dump.length!==0?(e.noArrayIndent&&!o&&n>0?Rn(e,n-1,e.dump,r):Rn(e,n,e.dump,r),f&&(e.dump="&ref_"+u+e.dump)):(ja(e,n,e.dump),f&&(e.dump="&ref_"+u+" "+e.dump));else if(l==="[object String]")e.tag!=="?"&&Ta(e,e.dump,n,a,s);else{if(l==="[object Undefined]")return!1;if(e.skipInvalid)return!1;throw new I("unacceptable kind of an object to dump "+l)}e.tag!==null&&e.tag!=="?"&&(c=encodeURI(e.tag[0]==="!"?e.tag.slice(1):e.tag).replace(/!/g,"%21"),e.tag[0]==="!"?c="!"+c:c.slice(0,18)==="tag:yaml.org,2002:"?c="!!"+c.slice(18):c="!<"+c+">",e.dump=c+" "+e.dump)}return!0}function Da(e,n){var i=[],t=[],r,a;for(Ve(e,i,t),r=0,a=t.length;r<a;r+=1)n.duplicates.push(i[t[r]]);n.usedDuplicates=new Array(a)}function Ve(e,n,i){var t,r,a;if(e!==null&&typeof e=="object")if(r=n.indexOf(e),r!==-1)i.indexOf(r)===-1&&i.push(r);else if(n.push(e),Array.isArray(e))for(r=0,a=e.length;r<a;r+=1)Ve(e[r],n,i);else for(t=Object.keys(e),r=0,a=t.length;r<a;r+=1)Ve(e[t[r]],n,i)}function Oa(e,n){n=n||{};var i=new Aa(n);i.noRefs||Da(e,i);var t=e;return i.replacer&&(t=i.replacer.call({"":t},"",t)),H(i,0,t,!0,!0)?i.dump+`
`:""}var Pa=Oa,Na={dump:Pa};function tn(e,n){return function(){throw new Error("Function yaml."+e+" is removed in js-yaml 4. Use yaml."+n+" instead, which is now safe by default.")}}var Ma=L,qa=ri,Ra=li,Ba=fi,Ha=di,Ga=Xe,Ua=Ii.load,za=Ii.loadAll,Ya=Na.dump,$a=I,Va={binary:bi,float:pi,map:ai,null:si,pairs:xi,set:Si,timestamp:hi,bool:ci,int:ui,merge:vi,omap:yi,seq:oi,str:ti},Ja=tn("safeLoad","load"),Ka=tn("safeLoadAll","loadAll"),Wa=tn("safeDump","dump"),me={Type:Ma,Schema:qa,FAILSAFE_SCHEMA:Ra,JSON_SCHEMA:Ba,CORE_SCHEMA:Ha,DEFAULT_SCHEMA:Ga,load:Ua,loadAll:za,dump:Ya,YAMLException:$a,types:Va,safeLoad:Ja,safeLoadAll:Ka,safeDump:Wa};const Je=e=>Kr(`/logos/${e}`),Qa="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",re=Je("no-img.svg"),m=(e,n=e)=>({light:Je(e),dark:Je(n),fallback:Qa}),be={javascript:"javascript",typescript:"typescript",python:"python",java:"java",c:"c",cpp:"cplusplus","c++":"cplusplus",csharp:"csharp","c#":"csharp",go:"go",rust:"rust",kotlin:"kotlin",dart:"dart",php:"php",ruby:"ruby",swift:"swift",r:"r",scala:"scala",perl:"perl",lua:"lua",haskell:"haskell",elixir:"elixir",clojure:"clojure",matlab:"matlab",bash:"bash",powershell:"powershell",react:"react",reactjs:"react",vue:"vuejs",vuejs:"vuejs",angular:"angularjs",svelte:"svelte",nextjs:"nextjs",nuxt:"nuxtjs",nuxtjs:"nuxtjs",gatsby:"gatsby",ember:"ember",backbone:"backbonejs",jquery:"jquery",bootstrap:"bootstrap",tailwind:"tailwindcss",tailwindcss:"tailwindcss",materialui:"materialui",sass:"sass",less:"less",css:"css3",html:"html5",nodejs:"nodejs",node:"nodejs",express:"express",expressjs:"express",nestjs:"nestjs",fastify:"fastify",django:"django",flask:"flask",fastapi:"fastapi",spring:"spring",rails:"rails",laravel:"laravel",dotnet:"dotnetcore",".net":"dotnetcore",aspnet:"dotnetcore",postgresql:"postgresql",postgres:"postgresql",mysql:"mysql",mongodb:"mongodb",redis:"redis",sqlite:"sqlite",oracle:"oracle",mariadb:"mariadb",cassandra:"cassandra",neo4j:"neo4j",firebase:"firebase",dynamodb:"dynamodb",docker:"docker",kubernetes:"kubernetes",aws:"amazonwebservices",azure:"azure",gcp:"googlecloud",googlecloud:"googlecloud",heroku:"heroku",nginx:"nginx",apache:"apache",jenkins:"jenkins",circleci:"circleci",travisci:"travis",terraform:"terraform",ansible:"ansible",vagrant:"vagrant",git:"git",github:"github",gitlab:"gitlab",bitbucket:"bitbucket",vscode:"vscode",vim:"vim",jetbrains:"jetbrains",intellij:"intellij",webpack:"webpack",vite:"vitejs",babel:"babel",eslint:"eslint",npm:"npm",yarn:"yarn",pnpm:"pnpm",gradle:"gradle",maven:"maven",cmake:"cmake",jest:"jest",mocha:"mocha",jasmine:"jasmine",selenium:"selenium",cypress:"cypressio",pytest:"pytest",android:"android",flutter:"flutter",reactnative:"react",ionic:"ionic",xamarin:"xamarin",linux:"linux",ubuntu:"ubuntu",debian:"debian",centos:"centos",windows:"windows8",apple:"apple",macos:"apple",raspberrypi:"raspberrypi",graphql:"graphql",kafka:"apachekafka",rabbitmq:"rabbitmq",electron:"electron",figma:"figma",sketch:"sketch",photoshop:"photoshop",illustrator:"illustrator",blender:"blender",unity:"unity",unrealengine:"unrealengine",threejs:"threejs",opencv:"opencv",tensorflow:"tensorflow",pytorch:"pytorch",pandas:"pandas",numpy:"numpy",jupyter:"jupyter",anaconda:"anaconda",markdown:"markdown",latex:"latex",wordpress:"wordpress",drupal:"drupal",jira:"jira",confluence:"confluence",trello:"trello",slack:"slack",postman:"postman",insomnia:"insomnia",swagger:"swagger"};function ve(e){return e.toLowerCase().replace(/[.\-_\s]/g,"").replace(/js$/i,"").replace(/\.js$/i,"").replace(/lang$/i,"")}function Za(e){const n=ve(e);for(const[a,o]of Object.entries(be))if(ve(a)===n)return o;for(const[a,o]of Object.entries(be)){const l=ve(a);if(n.includes(l)||l.includes(n))return o}const i={node:"nodejs",js:"javascript",ts:"typescript",py:"python",rb:"ruby",cpp:"cplusplus",cxx:"cplusplus",cs:"csharp",postgres:"postgresql",mongo:"mongodb",k8s:"kubernetes",tf:"terraform",vue:"vuejs",react:"react",ng:"angularjs",angular:"angularjs",next:"nextjs",nuxt:"nuxtjs",tailwind:"tailwindcss",tw:"tailwindcss",bs:"bootstrap",electron:"electron",deno:"denojs",bun:"bun",aws:"amazonwebservices",gcloud:"googlecloud",gc:"googlecloud",az:"azure",gh:"github",gl:"gitlab",vsc:"vscode",code:"vscode",vim:"vim",nvim:"neovim",neovim:"neovim",intellij:"intellij",idea:"intellij",pycharm:"pycharm",webstorm:"webstorm"};if(i[n])return i[n];let t,r=1/0;for(const[a,o]of Object.entries(be)){const l=Xa(n,ve(a));l<r&&l<=2&&(r=l,t=o)}return t}function Xa(e,n){if(e.length===0)return n.length;if(n.length===0)return e.length;const i=[];for(let t=0;t<=n.length;t++)i[t]=[t];for(let t=0;t<=e.length;t++)i[0][t]=t;for(let t=1;t<=n.length;t++)for(let r=1;r<=e.length;r++)n.charAt(t-1)===e.charAt(r-1)?i[t][r]=i[t-1][r-1]:i[t][r]=Math.min(i[t-1][r-1]+1,i[t][r-1]+1,i[t-1][r]+1);return i[n.length][e.length]}const el=new Set(["unknown","none","null","undefined","","n/a","na","no-img","placeholder","autonomy","autonomie","creativity","créativité","creativite","teamwork","travail d'équipe","travail equipe","communication","leadership","problem-solving","problem solving","résolution de problèmes","adaptability","adaptabilité","adaptabilite","time-management","time management","gestion du temps","critical-thinking","critical thinking","pensée critique","collaboration","motivation","organization","organisation","flexibility","flexibilité","flexibilite","patience","empathy","empathie","curiosity","curiosité","curiosite","rigor","rigueur","initiative","perseverance","persévérance","perseverance","soft skill","soft skills"]);function Ui(e){if(!e)return!0;const n=e.toLowerCase().trim();return n.length===0?!0:el.has(n)}function nl(e,n="original"){if(Ui(e))return;let i=be[e.toLowerCase()];if(i||(i=Za(e)),!!i)return`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${i}/${i}-${n}.svg`}function il(e){if(Ui(e))return{light:re,dark:re,fallback:re};const n=nl(e);if(n)return{light:n,dark:n,fallback:re};const t=`https://cdn.simpleicons.org/${e.toLowerCase().replace(/[^a-z0-9]/g,"")}`;return{light:t,dark:t,fallback:re}}const ae={AWS:m("aws.svg"),Bootstrap:m("bootstrap.svg"),C:m("c.svg"),Cpp:m("cpp.svg"),Celery:m("celery.svg"),Django:m("django.svg"),FastApi:m("fastapi"),Flask:m("flask.svg"),Go:m("go.svg"),Kafka:m("kafka.svg"),Neo4j:m("neo4j.svg"),Nginx:m("nginx.svg"),Numpy:m("numpy.svg"),Pandas:m("pandas.svg"),RabbitMQ:m("rabbitmq.svg"),Rust:m("rust.svg","rust-dark.png"),Scrapy:m("scrapy.png"),Selenium:m("selenium.svg"),Docker:m("docker.svg"),Kubernetes:m("kubernetes.svg"),Csharp:m("csharp.svg"),Xamarin:m("xamarin.svg"),TypeScript:m("ts.png"),VueJs:m("vue.png"),ReactJs:m("react.svg"),Dart:m("dart.png"),Kotlin:m("kotlin.png"),Python:m("python.png"),NodeJs:m("node.png"),Deno:m("deno.svg"),Svelte:m("svelte.svg"),ExpressJs:m("express.png"),JavaScript:m("js.png"),Fastify:m("fastify.svg","fastify-dark.png"),NestJs:m("nest.svg"),Quasar:m("quasar.svg"),SolidJs:m("solid.svg"),Electron:m("electron.png"),Flutter:m("flutter.svg"),Java:m("java.png"),AdonisJs:m("adonis.png"),Android:m("android.png"),Angular:m("angular.png"),PostgreSQL:m("postgres.png"),Firebase:m("firebase.png"),Sass:m("sass.png"),Unknown:m("no-img.svg"),MongoDB:m("mongodb.svg"),Redis:m("redis.svg"),Tailwind:m("tailwind.svg"),HTML:m("html.svg"),Premiere:m("premiere.svg"),Photoshop:m("photoshop.svg"),CSS:m("css.svg"),AfterEffects:m("after-effects.svg"),Illustrator:m("illustrator.svg"),Nuxt:m("nuxt.png"),Vite:m("vite.png"),Vitest:m("vitest.svg"),Jest:m("jest.png"),Unocss:m("unocss.svg"),Ruvy:m("ruvy.svg"),Postcss:m("postcss.svg"),Soleil:m("soleil.png"),AGH:m("agh.png"),InTech:m("intech.png"),ESIEA:m("esiea.png"),PMF:m("pmf.png"),Git:m("git-original.svg"),Linux:m("linux-original.svg"),SQLite:m("sqlite-original.svg"),CICD:m("cicd.svg"),Teamwork:m("no-img.svg"),Autonomy:m("no-img.svg"),Creativity:m("no-img.svg"),MiniArticle:m("mini-article.png")};var P=(e=>(e.FullTime="Full-time",e.PartTime="Part-time",e.SelfEmployed="Self-employed",e.Freelance="Freelance",e.Contract="Contract",e.Internship="Internship",e.Apprenticeship="Apprenticeship",e))(P||{}),C=(e=>(e.Image="image",e.PDF="pdf",e.Document="document",e.Archive="archive",e.Video="video",e.Audio="audio",e.Code="code",e.Link="link",e.Other="other",e))(C||{});function Te(e,n=new Date){if(e instanceof Date&&!isNaN(e.getTime()))return e;if(typeof e=="string"){const i=e.match(/^(\d{4})-(\d{2})-(\d{2})$/);if(i){const[,r,a,o]=i;return new Date(parseInt(r),parseInt(a)-1,parseInt(o))}const t=new Date(e);if(!isNaN(t.getTime()))return t}return console.log("[parseDate] Failed to parse:",e,"- using fallback"),n}function Ee(e){if(e){if(e instanceof Date&&!isNaN(e.getTime()))return e;if(typeof e=="string"){const n=e.match(/^(\d{4})-(\d{2})-(\d{2})$/);if(n){const[,t,r,a]=n;return new Date(parseInt(t),parseInt(r)-1,parseInt(a))}const i=new Date(e);if(!isNaN(i.getTime()))return i}}}function Re(e){return e.light.includes("no-img")||e.light===ae.Unknown.light}function X(e){if(!e)return ae.Unknown;let n=ae[e];if(n&&!Re(n))return n;const i=[e,e.charAt(0).toUpperCase()+e.slice(1),e.toUpperCase(),e.toLowerCase(),e.replace(/(?:^|[-_])(\w)/g,(o,l)=>l?l.toUpperCase():"")];for(const o of i)if(n=ae[o],n&&!Re(n))return n;const t={react:"ReactJs",node:"NodeJs",js:"JavaScript",ts:"TypeScript",vue:"VueJs",express:"ExpressJs",postgres:"PostgreSQL",postgresql:"PostgreSQL",mongo:"MongoDB",tailwindcss:"Tailwind"},r=e.toLowerCase();return t[r]&&(n=ae[t[r]],n&&!Re(n))?n:il(e)}function on(e){return e?e.replace(/^#{1,6}\s+/gm,"").replace(/\*\*([^*]+)\*\*/g,"$1").replace(/\*([^*]+)\*/g,"$1").replace(/__([^_]+)__/g,"$1").replace(/_([^_]+)_/g,"$1").replace(/\[([^\]]+)\]\([^)]+\)/g,"$1").replace(/!\[[^\]]*\]\([^)]+\)/g,"").replace(/```[\s\S]*?```/g,"").replace(/`([^`]+)`/g,"$1").replace(/^[\s]*[-*+]\s+/gm,"").replace(/^[\s]*\d+\.\s+/gm,"").replace(/^>\s+/gm,"").replace(/^[-*_]{3,}$/gm,"").replace(/\n{2,}/g," ").replace(/\n/g," ").replace(/\s{2,}/g," ").trim():""}function Le(e){return Array.isArray(e)?e.map(n=>({to:n.to||"",label:n.label||"",newTab:n.newTab??!0})):[]}function rl(e){return Array.isArray(e)?e.map(n=>({src:n.src||"",label:n.label||""})):[]}function Hn(e){const n=e.toLowerCase();return/\.(jpg|jpeg|png|gif|webp|svg|bmp|ico)(\?.*)?$/i.test(n)||n.includes("unsplash.com")||n.includes("imgur.com")?C.Image:/\.pdf(\?.*)?$/i.test(n)?C.PDF:/\.(doc|docx|odt|rtf|txt|xls|xlsx|ppt|pptx)(\?.*)?$/i.test(n)?C.Document:/\.(zip|rar|7z|tar|gz|bz2)(\?.*)?$/i.test(n)?C.Archive:/\.(mp4|webm|avi|mov|mkv)(\?.*)?$/i.test(n)||n.includes("youtube.com")||n.includes("youtu.be")||n.includes("vimeo.com")?C.Video:/\.(mp3|wav|ogg|flac|aac)(\?.*)?$/i.test(n)?C.Audio:/\.(js|ts|py|java|c|cpp|cs|go|rs|rb|php|html|css|json|xml|yaml|yml|sh|bash)(\?.*)?$/i.test(n)||n.includes("github.com")||n.includes("gitlab.com")||n.includes("gist.github.com")?C.Code:n.startsWith("http://")||n.startsWith("https://")?C.Link:C.Other}function tl(e){return{[C.Image]:"i-carbon-image",[C.PDF]:"i-carbon-document-pdf",[C.Document]:"i-carbon-document",[C.Archive]:"i-carbon-zip",[C.Video]:"i-carbon-video",[C.Audio]:"i-carbon-music",[C.Code]:"i-carbon-code",[C.Link]:"i-carbon-link",[C.Other]:"i-carbon-attachment"}[e]||"i-carbon-attachment"}function je(e){return Array.isArray(e)?e.map(n=>{const i=n.src||n.url||"",t=n.type&&C[n.type]||Hn(i),r=i.startsWith("http://")||i.startsWith("https://");return{label:n.label||n.name||"Pièce jointe",src:i,type:t,description:n.description||void 0,size:n.size||void 0,icon:n.icon||tl(t),newTab:n.newTab??r}}):[]}function ol(e){return{FullTime:P.FullTime,"Full-time":P.FullTime,PartTime:P.PartTime,"Part-time":P.PartTime,SelfEmployed:P.SelfEmployed,"Self-employed":P.SelfEmployed,Freelance:P.Freelance,Contract:P.Contract,Internship:P.Internship,Apprenticeship:P.Apprenticeship}[e||""]||P.Contract}function ge(e){return(e.split("/").pop()||"").replace(/\.(md|yaml|yml)$/,"")}function ee(e,n){const i=e.replace(/\r\n/g,`
`).replace(/\r/g,`
`),t=/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/,r=i.match(t);if(!r)return console.log(`[parseMarkdownFile] No frontmatter found for ${n}, raw starts with:`,i.substring(0,50)),{meta:{slug:n},content:i};const[,a,o]=r;try{const l=me.load(a);return console.log(`[parseMarkdownFile] Parsed ${n}:`,JSON.stringify(l)),{meta:{...l,slug:n},content:o.trim()}}catch(l){return console.error(`Error parsing frontmatter for ${n}:`,l),{meta:{slug:n},content:(o==null?void 0:o.trim())||i}}}const Ke=[{name:"Programming Languages",slug:"pro-lang"},{name:"Frameworks",slug:"framework"},{name:"Libraries",slug:"library"},{name:"Languages",slug:"lang"},{name:"Databases",slug:"db"},{name:"ORMs",slug:"orm"},{name:"DevOps",slug:"devops"},{name:"Testing",slug:"test"},{name:"Dev Tools",slug:"devtools"},{name:"Markup & Style",slug:"markup-style"},{name:"Design",slug:"design"},{name:"Soft Skills",slug:"soft"}];function al(e){if(e)return Ke.find(n=>n.slug===e)}const ll=Object.assign({"/content/blog/blog-platform-demo.md":Wr,"/content/blog/georges-le-chat.md":Qr,"/content/blog/getting-started-with-svelte.md":Zr,"/content/blog/mini-article.md":Xr,"/content/blog/modern-css-techniques.md":et,"/content/blog/sveltekit-full-stack-framework.md":nt,"/content/blog/typescript-best-practices.md":it}),sl=Object.assign({"/content/projects/template-project.md":rt,"/content/projects/template-svelte.md":tt}),Gn=Object.assign({"/content/skills/autonomy.md":ot,"/content/skills/ci-cd.md":at,"/content/skills/creativity.md":lt,"/content/skills/css.md":st,"/content/skills/docker.md":ct,"/content/skills/git.md":ut,"/content/skills/html.md":pt,"/content/skills/java.md":ft,"/content/skills/javascript.md":dt,"/content/skills/linux.md":mt,"/content/skills/reactjs.md":gt,"/content/skills/sass.md":ht,"/content/skills/sqlite.md":vt,"/content/skills/svelte.md":bt,"/content/skills/teamwork.md":yt,"/content/skills/typescript.md":xt}),cl=Object.assign({"/content/experience/agh-batiment.md":St,"/content/experience/synchrotron-soleil.md":At}),ul=Object.assign({"/content/education/esiea.md":_t,"/content/education/intech.md":wt,"/content/education/pmf.md":kt});let Be=null;function an(){if(Be)return Be;console.log("[loadAllSkills] Starting to load skills..."),console.log("[loadAllSkills] skillFiles keys:",Object.keys(Gn));const e=[];for(const[n,i]of Object.entries(Gn)){const t=ge(n),{meta:r,content:a}=ee(i,t);if(r.published===!1){console.log(`[loadAllSkills] Skipping ${t} (published: false)`);continue}console.log(`[loadAllSkills] Processing ${t}:`,{name:r.name,logo:r.logo,rawLogoType:typeof r.logo}),e.push({slug:r.slug||t,name:r.name||t,logo:X(r.logo),description:a||r.name||"",color:r.color||"gray",category:al(r.category)})}return Be=e,e}function zi(...e){const n=an();return e.length===0?n:n.filter(i=>e.includes(i.slug))}function Pl(e=""){const n=an(),i=[],t=[];return n.forEach(r=>{if(e.trim()&&!r.name.toLowerCase().includes(e.trim().toLowerCase()))return;if(!r.category){t.push(r);return}let a=i.find(o=>{var l;return o.category.slug===((l=r.category)==null?void 0:l.slug)});a||(a={items:[],category:r.category},i.push(a)),a.items.push(r)}),t.length!==0&&i.push({category:{name:"Others",slug:"others"},items:t}),i.sort((r,a)=>{const o=Ke.findIndex(s=>s.slug===r.category.slug),l=Ke.findIndex(s=>s.slug===a.category.slug);return o===-1?1:l===-1?-1:o-l}),i.forEach(r=>{r.items.sort((a,o)=>a.name.localeCompare(o.name))}),i}function pl(){const e=[];for(const[n,i]of Object.entries(ll)){const t=ge(n),{meta:r,content:a}=ee(i,t);r.published!==!1&&e.push({slug:r.slug||t,name:r.name||r.title||t,title:r.title||r.name||t,logo:X(r.logo),excerpt:r.excerpt||"",shortDescription:r.excerpt||"",description:a,content:a,author:r.author||"Anonymous",publishedAt:Te(r.publishedAt),updatedAt:Ee(r.updatedAt),tags:r.tags||[],coverImage:r.coverImage?X(r.coverImage):void 0,readingTime:r.readingTime||Math.ceil(a.split(/\s+/).length/200),color:r.color,links:Le(r.links),pinned:r.pinned||!1})}return e.sort((n,i)=>i.publishedAt.getTime()-n.publishedAt.getTime())}function fl(){var n,i;const e=[];for(const[t,r]of Object.entries(sl)){const a=ge(t),{meta:o,content:l}=ee(r,a);o.published!==!1&&e.push({slug:o.slug||a,name:o.name||a,logo:X(o.logo),shortDescription:on(l).substring(0,200),description:l,color:o.color||"gray",type:o.type||"Project",period:{from:Te((n=o.period)==null?void 0:n.from),to:Ee((i=o.period)==null?void 0:i.to)},skills:zi(...o.skills||[]),links:Le(o.links),screenshots:rl(o.screenshots),attachments:je(o.attachments)})}return e.sort((t,r)=>r.period.from.getTime()-t.period.from.getTime())}function dl(){var n,i,t;const e=[];for(const[r,a]of Object.entries(cl)){const o=ge(r),{meta:l,content:s}=ee(a,o);l.published!==!1&&(console.log(`[loadAllExperiences] ${o}:`,{name:l.name,shortDescription:(n=l.shortDescription)==null?void 0:n.substring(0,50),period:l.period}),e.push({slug:l.slug||o,name:l.name||o,logo:X(l.logo),shortDescription:l.shortDescription||on(s).substring(0,200),description:s,company:l.company||"",location:l.location||"",contract:ol(l.contract),type:l.type||"Development",color:l.color||"gray",period:{from:Te((i=l.period)==null?void 0:i.from),to:Ee((t=l.period)==null?void 0:t.to)},skills:zi(...l.skills||[]),links:Le(l.links),attachments:je(l.attachments)}))}return e.sort((r,a)=>a.period.from.getTime()-r.period.from.getTime())}function ml(){var n,i;const e=[];for(const[t,r]of Object.entries(ul)){const a=ge(t),{meta:o,content:l}=ee(r,a);o.published!==!1&&e.push({slug:o.slug||a,name:o.name||a,logo:X(o.logo),shortDescription:o.shortDescription||on(l).substring(0,200),description:l,degree:o.degree||"",organization:o.organization||"",location:o.location||"",color:o.color,period:{from:Te((n=o.period)==null?void 0:n.from),to:Ee((i=o.period)==null?void 0:i.to)},subjects:o.subjects||[],links:Le(o.links),attachments:je(o.attachments)})}return e.sort((t,r)=>r.period.from.getTime()-t.period.from.getTime())}const gl=Object.assign({"/content/about.md":Ct});function hl(){const e=Object.values(gl)[0];if(!e)return console.log("[loadAboutPage] No about.md file found"),{title:"À propos",content:"",attachments:[]};const{meta:n,content:i}=ee(e,"about");return{title:n.title||"À propos",content:i,attachments:je(n.attachments)}}const vl=Object.assign({"/content/site.yaml":Tt}),bl=Object.assign({"/content/pages/home.yaml":Et}),yl=Object.assign({"/content/pages/resume.yaml":Lt}),xl=Object.assign({"/content/pages/contact.yaml":jt});function ln(){const e=Object.values(vl)[0];if(!e)return{firstName:"Prénom",lastName:"NOM",jobTitle:"Développeur",email:"contact@example.com",socialLinks:[],inConstruction:{enabled:!1,title:"",message:""}};const n=e.replace(/\r\n/g,`
`).replace(/\r/g,`
`),i=me.load(n),t=i.inConstruction;return{firstName:i.firstName||"Prénom",lastName:i.lastName||"NOM",jobTitle:i.jobTitle||"Développeur",email:i.email||"contact@example.com",socialLinks:(i.socialLinks||[]).map(r=>({label:r.label,href:r.href,icon:r.icon})),inConstruction:{enabled:(t==null?void 0:t.enabled)??!1,title:(t==null?void 0:t.title)||"",message:(t==null?void 0:t.message)||""}}}function Sl(){const e=ln(),n=Object.values(bl)[0];let i="Accueil",t="";if(n){const r=n.replace(/\r\n/g,`
`).replace(/\r/g,`
`),a=me.load(r);i=a.title||"Accueil";const o=a.hero;t=(o==null?void 0:o.description)||""}return{title:i,heroDescription:t,socialLinks:e.socialLinks,fullName:`${e.firstName} ${e.lastName}`}}function Al(){const e=Object.values(yl)[0];if(!e)return{title:"CV",pdfPath:"/pdf/cv.pdf",downloadLabel:"Télécharger",fullscreenLabel:"Plein écran"};const n=e.replace(/\r\n/g,`
`).replace(/\r/g,`
`),i=me.load(n);return{title:i.title||"CV",pdfPath:i.pdfPath||"/pdf/cv.pdf",downloadLabel:i.downloadLabel||"Télécharger",fullscreenLabel:i.fullscreenLabel||"Plein écran"}}function _l(){const e=ln(),n=Object.values(xl)[0],i={title:"Contact",description:"N'hésitez pas à me contacter.",email:e.email,form:{nameLabel:"Nom",namePlaceholder:"Votre nom",emailLabel:"Email",emailPlaceholder:"votre@email.com",messageLabel:"Message",messagePlaceholder:"Votre message...",submitLabel:"Envoyer",sendingLabel:"Envoi en cours..."},messages:{success:"Message envoyé avec succès !",error:"Une erreur est survenue.",validationError:"Veuillez remplir tous les champs."}};if(!n)return i;const t=n.replace(/\r\n/g,`
`).replace(/\r/g,`
`),r=me.load(t),a=r.form,o=r.messages;return{title:r.title||i.title,description:r.description||i.description,email:r.email||i.email,form:{nameLabel:(a==null?void 0:a.nameLabel)||i.form.nameLabel,namePlaceholder:(a==null?void 0:a.namePlaceholder)||i.form.namePlaceholder,emailLabel:(a==null?void 0:a.emailLabel)||i.form.emailLabel,emailPlaceholder:(a==null?void 0:a.emailPlaceholder)||i.form.emailPlaceholder,messageLabel:(a==null?void 0:a.messageLabel)||i.form.messageLabel,messagePlaceholder:(a==null?void 0:a.messagePlaceholder)||i.form.messagePlaceholder,submitLabel:(a==null?void 0:a.submitLabel)||i.form.submitLabel,sendingLabel:(a==null?void 0:a.sendingLabel)||i.form.sendingLabel},messages:{success:(o==null?void 0:o.success)||i.messages.success,error:(o==null?void 0:o.error)||i.messages.error,validationError:(o==null?void 0:o.validationError)||i.messages.validationError}}}const Un=ln(),Nl=Sl(),Ml=Al(),ql=_l(),Rl=hl(),Bl={title:"Blog",items:pl()},Hl={title:"Projets",items:fl()},Gl={title:"Skills",items:an()},Ul={title:"Expérience",items:dl()},zl={title:"Formation",items:ml()},wl=`${Un.firstName} ${Un.lastName}`,kl={title:wl,icon:"i-carbon-code"},Cl=[{title:"À Propos",icon:"i-carbon-user",href:"/about"},{title:"Skills",icon:"i-carbon-assembly-cluster",href:"/skills"},{title:"Projets",icon:"i-carbon-cube",href:"/projects"},{title:"Experience",icon:"i-carbon-development",href:"/experience"},{title:"Formation",icon:"i-carbon-education",href:"/education"},{title:"Blog",icon:"i-carbon-blog",href:"/blog"},{title:"CV",icon:"i-carbon-document",href:"/resume"},{title:"Contact",icon:"i-carbon-email",href:"/contact"}],Yl={left:kl,items:Cl};export{ae as A,Bl as B,ql as C,Ul as E,Nl as H,Yl as N,Hl as P,Ml as R,Gl as S,jl as a,Dl as b,zl as c,Pl as d,Il as e,Gr as f,zi as g,Rl as h,Ol as i,C as j,Rr as k,Un as l,Ur as m,ie as n,Fl as o,qr as p,Yr as r,xe as s};
