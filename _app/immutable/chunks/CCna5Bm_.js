import{ag as Pe,k as zr,b7 as Jn,i as I,at as Ie,aB as Vr,j as Yr,g as se,aV as $r,ac as Kr,au as mn,aL as le,aa as he,ab as Wr,aQ as Qr,ar as hn,aS as Xr,b8 as B,ad as ce,aU as Zr,x as ei,a0 as zn,aO as We,b9 as ni,ba as ri,m as ii,J as vn,bb as ti,aT as Vn,af as Yn,bc as De,z as $n,bd as oi,aN as ai,as as _e,aJ as li,be as Kn,q as Wn,bf as si,A as ci,bg as ui,bh as pi,bi as di,bj as fi,bk as gi,bl as mi,bm as hi,bn as vi,bo as bi,bp as _i,_ as yi,a2 as xi,v as bn,h as Si,bq as Ai,Y as _n,e as wi,O as ki,br as Ci}from"./CrEmclJz.js";import{o as Ti,p as Ei,d as Li,q as ji,v as Pi}from"./B5sLhNz6.js";import{b as Ii,r as Di}from"./DCM-AVC8.js";function Bs(e,n){return n}function Fi(e,n,r){for(var t=[],i=n.length,a,o=n.length,l=0;l<i;l++){let p=n[l];Yn(p,()=>{if(a){if(a.pending.delete(p),a.done.add(p),a.pending.size===0){var f=e.outrogroups;He(We(a.done)),f.delete(a),f.size===0&&(e.outrogroups=null)}}else o-=1},!1)}if(o===0){var s=t.length===0&&r!==null;if(s){var c=r,d=c.parentNode;ai(d),d.append(c),e.items.clear()}He(n,!s)}else a={pending:new Set(n),done:new Set},(e.outrogroups??(e.outrogroups=new Set)).add(a)}function He(e,n=!0){for(var r=0;r<e.length;r++)_e(e[r],n)}var yn;function Hs(e,n,r,t,i,a=null){var o=e,l=new Map,s=(n&Jn)!==0;if(s){var c=e;o=I?Ie(Vr(c)):c.appendChild(Pe())}I&&Yr();var d=null,p=ei(()=>{var v=r();return zn(v)?v:v==null?[]:We(v)}),f,m=!0;function b(){g.fallback=d,Mi(g,f,o,n,t),d!==null&&(f.length===0?(d.f&B)===0?Vn(d):(d.f^=B,te(d,null,o)):Yn(d,()=>{d=null}))}var _=zr(()=>{f=se(p);var v=f.length;let y=!1;if(I){var N=$r(o)===Kr;N!==(v===0)&&(o=mn(),Ie(o),le(!1),y=!0)}for(var w=new Set,O=Xr,S=Zr(),x=0;x<v;x+=1){I&&he.nodeType===Wr&&he.data===Qr&&(o=he,y=!0,le(!1));var k=f[x],F=t(k,x),A=m?null:l.get(F);A?(A.v&&hn(A.v,k),A.i&&hn(A.i,x),S&&O.skipped_effects.delete(A.e)):(A=Ni(l,m?o:yn??(yn=Pe()),k,F,x,i,n,r),m||(A.e.f|=B),l.set(F,A)),w.add(F)}if(v===0&&a&&!d&&(m?d=ce(()=>a(o)):(d=ce(()=>a(yn??(yn=Pe()))),d.f|=B)),I&&v>0&&Ie(mn()),!m)if(S){for(const[V,Y]of l)w.has(V)||O.skipped_effects.add(Y.e);O.oncommit(b),O.ondiscard(()=>{})}else b();y&&le(!0),se(p)}),g={effect:_,items:l,outrogroups:null,fallback:d};m=!1,I&&(o=he)}function Mi(e,n,r,t,i){var A,V,Y,sn,cn,un,pn,dn,fn;var a=(t&oi)!==0,o=n.length,l=e.items,s=e.effect.first,c,d=null,p,f=[],m=[],b,_,g,v;if(a)for(v=0;v<o;v+=1)b=n[v],_=i(b,v),g=l.get(_).e,(g.f&B)===0&&((V=(A=g.nodes)==null?void 0:A.a)==null||V.measure(),(p??(p=new Set)).add(g));for(v=0;v<o;v+=1){if(b=n[v],_=i(b,v),g=l.get(_).e,e.outrogroups!==null)for(const R of e.outrogroups)R.pending.delete(g),R.done.delete(g);if((g.f&B)!==0)if(g.f^=B,g===s)te(g,null,r);else{var y=d?d.next:s;g===e.effect.last&&(e.effect.last=g.prev),g.prev&&(g.prev.next=g.next),g.next&&(g.next.prev=g.prev),G(e,d,g),G(e,g,y),te(g,y,r),d=g,f=[],m=[],s=d.next;continue}if((g.f&De)!==0&&(Vn(g),a&&((sn=(Y=g.nodes)==null?void 0:Y.a)==null||sn.unfix(),(p??(p=new Set)).delete(g))),g!==s){if(c!==void 0&&c.has(g)){if(f.length<m.length){var N=m[0],w;d=N.prev;var O=f[0],S=f[f.length-1];for(w=0;w<f.length;w+=1)te(f[w],N,r);for(w=0;w<m.length;w+=1)c.delete(m[w]);G(e,O.prev,S.next),G(e,d,O),G(e,S,N),s=N,d=S,v-=1,f=[],m=[]}else c.delete(g),te(g,s,r),G(e,g.prev,g.next),G(e,g,d===null?e.effect.first:d.next),G(e,d,g),d=g;continue}for(f=[],m=[];s!==null&&s!==g;)(c??(c=new Set)).add(s),m.push(s),s=s.next;if(s===null)continue}(g.f&B)===0&&f.push(g),d=g,s=g.next}if(e.outrogroups!==null){for(const R of e.outrogroups)R.pending.size===0&&(He(We(R.done)),(cn=e.outrogroups)==null||cn.delete(R));e.outrogroups.size===0&&(e.outrogroups=null)}if(s!==null||c!==void 0){var x=[];if(c!==void 0)for(g of c)(g.f&De)===0&&x.push(g);for(;s!==null;)(s.f&De)===0&&s!==e.fallback&&x.push(s),s=s.next;var k=x.length;if(k>0){var F=(t&Jn)!==0&&o===0?r:null;if(a){for(v=0;v<k;v+=1)(pn=(un=x[v].nodes)==null?void 0:un.a)==null||pn.measure();for(v=0;v<k;v+=1)(fn=(dn=x[v].nodes)==null?void 0:dn.a)==null||fn.fix()}Fi(e,x,F)}}a&&$n(()=>{var R,gn;if(p!==void 0)for(g of p)(gn=(R=g.nodes)==null?void 0:R.a)==null||gn.apply()})}function Ni(e,n,r,t,i,a,o,l){var s=(o&ni)!==0?(o&ri)===0?ii(r,!1,!1):vn(r):null,c=(o&ti)!==0?vn(i):null;return{v:s,i:c,e:ce(()=>(a(n,s??r,c??i,l),()=>{e.delete(t)}))}}function te(e,n,r){if(e.nodes)for(var t=e.nodes.start,i=e.nodes.end,a=n&&(n.f&B)===0?n.nodes.start:r;t!==null;){var o=li(t);if(a.before(t),t===i)return;t=o}}function G(e,n,r){n===null?e.effect.first=r:n.next=r,r===null?e.effect.last=n:r.prev=n}function Oi(e,n){var r=void 0,t;Kn(()=>{r!==(r=n())&&(t&&(_e(t),t=null),r&&(t=ce(()=>{Wn(()=>r(e))})))})}function Qn(e){var n,r,t="";if(typeof e=="string"||typeof e=="number")t+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(n=0;n<i;n++)e[n]&&(r=Qn(e[n]))&&(t&&(t+=" "),t+=r)}else for(r in e)e[r]&&(t&&(t+=" "),t+=r);return t}function qi(){for(var e,n,r=0,t="",i=arguments.length;r<i;r++)(e=arguments[r])&&(n=Qn(e))&&(t&&(t+=" "),t+=n);return t}function Ri(e){return typeof e=="object"?qi(e):e??""}const xn=[...` 	
\r\f \v\uFEFF`];function Bi(e,n,r){var t=e==null?"":""+e;if(n&&(t=t?t+" "+n:n),r){for(var i in r)if(r[i])t=t?t+" "+i:i;else if(t.length)for(var a=i.length,o=0;(o=t.indexOf(i,o))>=0;){var l=o+a;(o===0||xn.includes(t[o-1]))&&(l===t.length||xn.includes(t[l]))?t=(o===0?"":t.substring(0,o))+t.substring(l+1):o=l}}return t===""?null:t}function Sn(e,n=!1){var r=n?" !important;":";",t="";for(var i in e){var a=e[i];a!=null&&a!==""&&(t+=" "+i+": "+a+r)}return t}function Fe(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function Hi(e,n){if(n){var r="",t,i;if(Array.isArray(n)?(t=n[0],i=n[1]):t=n,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var a=!1,o=0,l=!1,s=[];t&&s.push(...Object.keys(t).map(Fe)),i&&s.push(...Object.keys(i).map(Fe));var c=0,d=-1;const _=e.length;for(var p=0;p<_;p++){var f=e[p];if(l?f==="/"&&e[p-1]==="*"&&(l=!1):a?a===f&&(a=!1):f==="/"&&e[p+1]==="*"?l=!0:f==='"'||f==="'"?a=f:f==="("?o++:f===")"&&o--,!l&&a===!1&&o===0){if(f===":"&&d===-1)d=p;else if(f===";"||p===_-1){if(d!==-1){var m=Fe(e.substring(c,d).trim());if(!s.includes(m)){f!==";"&&p++;var b=e.substring(c,p).trim();r+=" "+b+";"}}c=p+1,d=-1}}}}return t&&(r+=Sn(t)),i&&(r+=Sn(i,!0)),r=r.trim(),r===""?null:r}return e==null?null:String(e)}function Gi(e,n,r,t,i,a){var o=e.__className;if(I||o!==r||o===void 0){var l=Bi(r,t,a);(!I||l!==e.getAttribute("class"))&&(l==null?e.removeAttribute("class"):n?e.className=l:e.setAttribute("class",l)),e.__className=r}else if(a&&i!==a)for(var s in a){var c=!!a[s];(i==null||c!==!!i[s])&&e.classList.toggle(s,c)}return a}function Me(e,n={},r,t){for(var i in r){var a=r[i];n[i]!==a&&(r[i]==null?e.style.removeProperty(i):e.style.setProperty(i,a,t))}}function Ui(e,n,r,t){var i=e.__style;if(I||i!==n){var a=Hi(n,t);(!I||a!==e.getAttribute("style"))&&(a==null?e.removeAttribute("style"):e.style.cssText=a),e.__style=n}else t&&(Array.isArray(t)?(Me(e,r==null?void 0:r[0],t[0]),Me(e,r==null?void 0:r[1],t[1],"important")):Me(e,r,t));return t}function Ge(e,n,r=!1){if(e.multiple){if(n==null)return;if(!zn(n))return ui();for(var t of e.options)t.selected=n.includes(An(t));return}for(t of e.options){var i=An(t);if(si(i,n)){t.selected=!0;return}}(!r||n!==void 0)&&(e.selectedIndex=-1)}function Ji(e){var n=new MutationObserver(()=>{Ge(e,e.__value)});n.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),ci(()=>{n.disconnect()})}function An(e){return"__value"in e?e.__value:e.value}const ne=Symbol("class"),re=Symbol("style"),Xn=Symbol("is custom element"),Zn=Symbol("is html");function zi(e){if(I){var n=!1,r=()=>{if(!n){if(n=!0,e.hasAttribute("value")){var t=e.value;ye(e,"value",null),e.value=t}if(e.hasAttribute("checked")){var i=e.checked;ye(e,"checked",null),e.checked=i}}};e.__on_r=r,$n(r),mi()}}function Gs(e,n){var r=Qe(e);r.value===(r.value=n??void 0)||e.value===n&&(n!==0||e.nodeName!=="PROGRESS")||(e.value=n??"")}function Vi(e,n){n?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function ye(e,n,r,t){var i=Qe(e);I&&(i[n]=e.getAttribute(n),n==="src"||n==="srcset"||n==="href"&&e.nodeName==="LINK")||i[n]!==(i[n]=r)&&(n==="loading"&&(e[bi]=r),r==null?e.removeAttribute(n):typeof r!="string"&&er(e).includes(n)?e[n]=r:e.setAttribute(n,r))}function Yi(e,n,r,t,i=!1,a=!1){if(I&&i&&e.tagName==="INPUT"){var o=e,l=o.type==="checkbox"?"defaultChecked":"defaultValue";l in r||zi(o)}var s=Qe(e),c=s[Xn],d=!s[Zn];let p=I&&c;p&&le(!1);var f=n||{},m=e.tagName==="OPTION";for(var b in n)b in r||(r[b]=null);r.class?r.class=Ri(r.class):(t||r[ne])&&(r.class=null),r[re]&&(r.style??(r.style=null));var _=er(e);for(const S in r){let x=r[S];if(m&&S==="value"&&x==null){e.value=e.__value="",f[S]=x;continue}if(S==="class"){var g=e.namespaceURI==="http://www.w3.org/1999/xhtml";Gi(e,g,x,t,n==null?void 0:n[ne],r[ne]),f[S]=x,f[ne]=r[ne];continue}if(S==="style"){Ui(e,x,n==null?void 0:n[re],r[re]),f[S]=x,f[re]=r[re];continue}var v=f[S];if(!(x===v&&!(x===void 0&&e.hasAttribute(S)))){f[S]=x;var y=S[0]+S[1];if(y!=="$$")if(y==="on"){const k={},F="$$"+S;let A=S.slice(2);var N=Pi(A);if(Ti(A)&&(A=A.slice(0,-7),k.capture=!0),!N&&v){if(x!=null)continue;e.removeEventListener(A,f[F],k),f[F]=null}if(x!=null)if(N)e[`__${A}`]=x,Li([A]);else{let V=function(Y){f[S].call(this,Y)};f[F]=Ei(A,e,V,k)}else N&&(e[`__${A}`]=void 0)}else if(S==="style")ye(e,S,x);else if(S==="autofocus")fi(e,!!x);else if(!c&&(S==="__value"||S==="value"&&x!=null))e.value=e.__value=x;else if(S==="selected"&&m)Vi(e,x);else{var w=S;d||(w=ji(w));var O=w==="defaultValue"||w==="defaultChecked";if(x==null&&!c&&!O)if(s[S]=null,w==="value"||w==="checked"){let k=e;const F=n===void 0;if(w==="value"){let A=k.defaultValue;k.removeAttribute(w),k.defaultValue=A,k.value=k.__value=F?A:null}else{let A=k.defaultChecked;k.removeAttribute(w),k.defaultChecked=A,k.checked=F?A:!1}}else e.removeAttribute(S);else O||_.includes(w)&&(c||typeof x!="string")?(e[w]=x,w in s&&(s[w]=gi)):typeof x!="function"&&ye(e,w,x)}}}return p&&le(!0),f}function Us(e,n,r=[],t=[],i=[],a,o=!1,l=!1){pi(i,r,t,s=>{var c=void 0,d={},p=e.nodeName==="SELECT",f=!1;if(Kn(()=>{var b=n(...s.map(se)),_=Yi(e,c,b,a,o,l);f&&p&&"value"in b&&Ge(e,b.value);for(let v of Object.getOwnPropertySymbols(d))b[v]||_e(d[v]);for(let v of Object.getOwnPropertySymbols(b)){var g=b[v];v.description===di&&(!c||g!==c[v])&&(d[v]&&_e(d[v]),d[v]=ce(()=>Oi(e,()=>g))),_[v]=g}c=_}),p){var m=e;Wn(()=>{Ge(m,c.value,!0),Ji(m)})}f=!0})}function Qe(e){return e.__attributes??(e.__attributes={[Xn]:e.nodeName.includes("-"),[Zn]:e.namespaceURI===hi})}var wn=new Map;function er(e){var n=e.getAttribute("is")||e.nodeName,r=wn.get(n);if(r)return r;wn.set(n,r=[]);for(var t,i=e,a=Element.prototype;a!==i;){t=_i(i);for(var o in t)t[o].set&&r.push(o);i=vi(i)}return r}function Js(e=!1){const n=yi,r=n.l.u;if(!r)return;let t=()=>wi(n.s);if(e){let i=0,a={};const o=ki(()=>{let l=!1;const s=n.s;for(const c in s)s[c]!==a[c]&&(a[c]=s[c],l=!0);return l&&i++,i});t=()=>se(o)}r.b.length&&xi(()=>{kn(n,t),_n(r.b)}),bn(()=>{const i=Si(()=>r.m.map(Ai));return()=>{for(const a of i)typeof a=="function"&&a()}}),r.a.length&&bn(()=>{kn(n,t),_n(r.a)})}function kn(e,n){if(e.l.s)for(const r of e.l.s)se(r);n()}const $i="";function Ki(...e){return Ii+$i+Di(e[0],e[1])}Ci();const Wi=`---
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
`,rt=`---
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
`,it=`---
name: Nano Pong
slug: nano-pong
published: true
type: Embedded System
color: "#00979D"
logo: Arduino
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
`,tt=`---
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
`,ot=`---
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
`,at=`---
name: Android Studio
slug: android-studio
published: true
category: devtools
color: green
logo: AndroidStudio
---

IDE officiel pour le développement Android. Émulateur, débogage et outils de build Gradle intégrés.
`,lt=`---
name: Apache2
slug: apache2
published: true
category: devops
color: red
logo: Apache
---

Serveur web HTTP open-source. Configuration de virtual hosts, reverse proxy et modules.
`,st=`---
name: Arduino
slug: arduino
published: true
category: devtools
color: teal
logo: Arduino
---

Programmation de microcontrôleurs pour des projets IoT et électronique embarquée.
`,ct=`---
name: Autonomie & apprentissage
slug: autonomy
published: true
category: soft
color: blue
logo: Autonomy
---

Capacité à apprendre par moi-même, à m'auto-former rapidement, et à être force de proposition.
`,ut=`---
name: BungeeCord / Waterfall
slug: bungeecord
published: true
category: devtools
color: yellow
logo: BungeeCord
---

Proxy Minecraft pour connecter plusieurs serveurs. Waterfall est un fork optimisé avec corrections de bugs.
`,pt=`---
name: C
slug: c
published: true
category: pro-lang
color: gray
logo: C
---

Langage bas niveau utilisé pour la programmation système et les performances critiques.
`,dt=`---
name: CI/CD
slug: ci-cd
published: true
category: devops
color: gray
logo: CICD
---

Mise en place de pipelines CI/CD via GitLab. Automatisation des tests et déploiement.
`,ft=`---
name: CLion
slug: clion
published: true
category: devtools
color: green
logo: CLion
---

IDE JetBrains pour C et C++. CMake intégré, debugging avancé et analyse de code statique.
`,gt=`---
name: Confluence
slug: confluence
published: true
category: devtools
color: blue
logo: Confluence
---

Plateforme de documentation collaborative Atlassian. Wiki d'équipe, knowledge base et documentation projet.
`,mt=`---
name: Créativité
slug: creativity
published: true
category: soft
color: purple
logo: Creativity
---

Création d'expériences originales, notamment en réalité virtuelle ou dans la conception d'UI.
`,ht=`---
name: C#
slug: csharp
published: true
category: pro-lang
color: purple
logo: CSharp
---

Langage orienté objet de Microsoft, utilisé pour le développement .NET et Unity.
`,vt=`---
name: CSS
slug: css
published: true
category: markup-style
color: blue
logo: CSS
---

Mise en forme des interfaces. Utilisé avec Sass ou Tailwind selon les projets.
`,bt=`---
name: Dart
slug: dart
published: true
category: pro-lang
color: cyan
logo: Dart
---

Langage de Google utilisé principalement avec Flutter pour le développement mobile cross-platform.
`,_t=`---
name: DataGrip
slug: datagrip
published: true
category: devtools
color: purple
logo: DataGrip
---

IDE JetBrains pour bases de données. Support multi-SGBD, requêtes SQL et administration.
`,yt=`---
name: Docker Swarm
slug: docker-swarm
published: true
category: devops
color: blue
logo: Docker
---

Orchestration native de Docker pour le clustering et le déploiement de services distribués.
`,xt=`---
name: Docker
slug: docker
published: true
category: devops
color: blue
logo: Docker
---

Conteneurisation d'applications. Utilisé pour créer des environnements de test ou déployer des apps.
`,St=`---
name: .NET
slug: dotnet
published: true
category: framework
color: purple
logo: DotNet
---

Framework Microsoft pour le développement d'applications web, desktop et cloud.
`,At=`---
name: Electron
slug: electron
published: true
category: framework
color: cyan
logo: Electron
---

Framework pour créer des applications desktop cross-platform avec les technologies web.
`,wt=`---
name: Microsoft Excel
slug: excel
published: true
category: devtools
color: green
logo: Excel
---

Tableur avancé pour l'analyse de données, formules complexes, macros VBA et visualisation.
`,kt=`---
name: Express.js
slug: expressjs
published: true
category: framework
color: gray
logo: Express
---

Framework minimaliste pour Node.js, utilisé pour créer des APIs REST et des serveurs web.
`,Ct=`---
name: Firebase
slug: firebase
published: true
category: devops
color: orange
logo: Firebase
---

Plateforme Google pour le backend-as-a-service : authentification, base de données temps réel, hosting.
`,Tt=`---
name: Flask
slug: flask
published: true
category: framework
color: gray
logo: Flask
---

Micro-framework Python léger pour le développement web et d'APIs.
`,Et=`---
name: Flutter
slug: flutter
published: true
category: framework
color: cyan
logo: Flutter
---

Framework UI de Google pour créer des applications mobiles, web et desktop à partir d'une seule codebase.
`,Lt=`---
name: Git
slug: git
published: true
category: devtools
color: orange
logo: Git
---

Système de versionnement utilisé dans tous mes projets. Workflow GitLab et GitHub.
`,jt=`---
name: Grafana
slug: grafana
published: true
category: devops
color: orange
logo: Grafana
---

Plateforme de visualisation et monitoring pour métriques et logs.
`,Pt=`---
name: HTML
slug: html
published: true
category: markup-style
color: orange
logo: HTML
---

Structure des pages web. Maîtrisé depuis mes débuts.
`,It=`---
name: Hugo
slug: hugo
published: true
category: framework
color: pink
logo: Hugo
---

Générateur de sites statiques ultra-rapide écrit en Go.
`,Dt=`---
name: IntelliJ IDEA
slug: intellij
published: true
category: devtools
color: pink
logo: IntelliJ
---

IDE JetBrains puissant pour Java, Kotlin et développement polyglotte. Refactoring et analyse de code avancés.
`,Ft=`---
name: Ionic
slug: ionic
published: true
category: framework
color: blue
logo: Ionic
---

Framework pour créer des applications mobiles hybrides avec les technologies web.
`,Mt=`---
name: Java
slug: java
published: true
category: pro-lang
color: red
logo: Java
---

Langage orienté objet utilisé principalement dans mes projets backend chez Synchrotron SOLEIL.
`,Nt=`---
name: JavaFX
slug: javafx
published: true
category: framework
color: orange
logo: Java
---

Framework Java pour créer des interfaces graphiques modernes et des applications desktop riches.
`,Ot=`---
name: JavaScript
slug: js
published: true
category: pro-lang
color: yellow
logo: JavaScript
---

Langage de programmation principal utilisé pour les interfaces interactives, côté client comme côté serveur avec Node.js.
`,qt=`---
name: Java EE
slug: jee
published: true
category: framework
color: red
logo: Java
---

Plateforme Java pour le développement d'applications d'entreprise. Servlets, JSP, EJB, JPA et services web.
`,Rt=`---
name: Jira
slug: jira
published: true
category: devtools
color: blue
logo: Jira
---

Outil de gestion de projet Agile. Suivi des issues, sprints, Kanban et workflows personnalisés.
`,Bt=`---
name: Kotlin
slug: kotlin
published: true
category: pro-lang
color: purple
logo: Kotlin
---

Langage moderne sur JVM, concis et interopérable avec Java. Développement Android et backend.
`,Ht=`---
name: Kubernetes
slug: kubernetes
published: true
category: devops
color: blue
logo: Kubernetes
---

Orchestration de conteneurs pour le déploiement, la mise à l'échelle et la gestion d'applications.
`,Gt=`---
name: Linux
slug: linux
published: true
category: devtools
color: gray
logo: Linux
---

Utilisation quotidienne de serveurs Debian et Red Hat au Synchrotron.
`,Ut=`---
name: MariaDB
slug: mariadb
published: true
category: db
color: brown
logo: MariaDB
---

Base de données relationnelle open-source, fork de MySQL.
`,Jt=`---
name: Minikube
slug: minikube
published: true
category: devops
color: blue
logo: Kubernetes
---

Kubernetes local pour le développement et les tests. Environnement de cluster complet sur une seule machine.
`,zt=`---
name: MongoDB
slug: mongodb
published: true
category: db
color: green
logo: MongoDB
---

Base de données NoSQL orientée documents, idéale pour les données flexibles et le scaling horizontal.
`,Vt=`---
name: MySQL
slug: mysql
published: true
category: db
color: blue
logo: MySQL
---

Système de gestion de base de données relationnelle open-source très répandu.
`,Yt=`---
name: Nginx
slug: nginx
published: true
category: devops
color: green
logo: Nginx
---

Serveur web haute performance, reverse proxy et load balancer.
`,$t=`---
name: Node.js
slug: nodejs
published: true
category: framework
color: green
logo: NodeJs
---

Runtime JavaScript côté serveur pour créer des applications backend scalables.
`,Kt=`---
name: OpenCV
slug: opencv
published: true
category: library
color: blue
logo: OpenCV
---

Bibliothèque de vision par ordinateur pour le traitement d'images et la détection d'objets.
`,Wt=`---
name: OpenXR
slug: openxr
published: true
category: library
color: blue
logo: OpenXR
---

Standard ouvert pour le développement d'applications VR/AR. Utilisé pour créer des expériences immersives cross-platform.
`,Qt=`---
name: Oracle
slug: oracle
published: true
category: db
color: red
logo: Oracle
---

Système de gestion de base de données relationnelle d'entreprise.
`,Xt=`---
name: Pandas
slug: pandas
published: true
category: library
color: blue
logo: Pandas
---

Bibliothèque Python pour la manipulation et l'analyse de données structurées.
`,Zt=`---
name: PaperMC
slug: papermc
published: true
category: devtools
color: gray
logo: PaperMC
---

Fork haute performance de Spigot pour serveurs Minecraft. Optimisation et API étendue pour plugins.
`,eo=`---
name: Photoshop
slug: photoshop
published: true
category: design
color: blue
logo: Photoshop
---

Logiciel de retouche d'image et de création graphique d'Adobe.
`,no=`---
name: PHP
slug: php
published: true
category: pro-lang
color: purple
logo: PHP
---

Langage de script côté serveur très utilisé pour le développement web.
`,ro=`---
name: Playwright
slug: playwright
published: true
category: test
color: green
logo: Playwright
---

Framework de test end-to-end moderne pour applications web. Support multi-navigateurs et automatisation avancée.
`,io=`---
name: PostgreSQL
slug: postgresql
published: true
category: db
color: blue
logo: PostgreSQL
---

Base de données relationnelle open-source avancée avec support JSON et extensions.
`,to=`---
name: Postman
slug: postman
published: true
category: devtools
color: orange
logo: Postman
---

Outil de test et documentation d'APIs REST et GraphQL.
`,oo=`---
name: Microsoft PowerPoint
slug: powerpoint
published: true
category: devtools
color: orange
logo: PowerPoint
---

Création de présentations professionnelles, animations et supports de communication visuels.
`,ao=`---
name: PyCharm
slug: pycharm
published: true
category: devtools
color: green
logo: PyCharm
---

IDE JetBrains dédié au développement Python. Support Django, Flask, data science et debugging avancé.
`,lo=`---
name: Python
slug: python
published: true
category: pro-lang
color: yellow
logo: Python
---

Langage polyvalent utilisé pour le scripting, le data science, le machine learning et le web.
`,so=`---
name: React.js
slug: reactjs
published: true
category: library
color: cyan
logo: ReactJs
---

Bibliothèque JavaScript pour créer des interfaces utilisateur réactives. Utilisé professionnellement.
`,co=`---
name: Redis
slug: redis
published: true
category: db
color: red
logo: Redis
---

Base de données in-memory ultra-rapide. Cache, pub/sub, et structures de données avancées.
`,uo=`---
name: Rider
slug: rider
published: true
category: devtools
color: red
logo: Rider
---

IDE JetBrains pour .NET et Unity. Développement C#, ASP.NET et game development.
`,po=`---
name: Rust
slug: rust
published: true
category: pro-lang
color: orange
logo: Rust
---

Langage système performant avec gestion mémoire sécurisée sans garbage collector.
`,fo=`---
name: Sass
slug: sass
published: true
category: markup-style
color: pink
logo: Sass
---

Préprocesseur CSS qui facilite la factorisation et la gestion de grands projets.
`,go=`---
name: Selenium
slug: selenium
published: true
category: test
color: green
logo: Selenium
---

Framework d'automatisation de tests pour navigateurs web.
`,mo=`---
name: Skript
slug: skript
published: true
category: devtools
color: orange
logo: Skript
---

Langage de scripting simplifié pour créer des plugins Minecraft sans Java. Syntaxe proche de l'anglais naturel.
`,ho=`---
name: Spigot
slug: spigot
published: true
category: devtools
color: orange
logo: Spigot
---

Serveur Minecraft modifié avec API pour plugins. Base de nombreux serveurs communautaires.
`,vo=`---
name: Spring
slug: spring
published: true
category: framework
color: green
logo: Spring
---

Framework Java pour le développement d'applications enterprise et microservices.
`,bo=`---
name: Spring Boot
slug: springboot
published: false
category: framework
color: green
logo: Spring
---

Framework Java pour créer rapidement des applications Spring autonomes et prêtes pour la production.
`,_o=`---
name: SQLite
slug: sqlite
published: true
category: db
color: gray
logo: SQLite
---

Base de données légère intégrée. Idéale pour des projets locaux ou embarqués.
`,yo=`---
name: Streamlit
slug: streamlit
published: true
category: framework
color: red
logo: Streamlit
---

Framework Python pour créer rapidement des applications web de data science et machine learning.
`,xo=`---
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
`,So=`---
name: Tailwind CSS
slug: tailwind
published: true
category: markup-style
color: cyan
logo: TailwindCSS
---

Framework CSS utility-first pour créer des interfaces rapidement sans quitter le HTML.
`,Ao=`---
name: Travail en équipe
slug: teamwork
published: true
category: soft
color: green
logo: Teamwork
---

Collaboration efficace dans des équipes pluridisciplinaires. Communication claire et partage de responsabilités.
`,wo=`---
name: TensorFlow
slug: tensorflow
published: true
category: library
color: orange
logo: TensorFlow
---

Bibliothèque de machine learning et deep learning de Google.
`,ko=`---
name: TypeScript
slug: ts
published: true
category: pro-lang
color: blue
logo: TypeScript
---

Superset de JavaScript typé statiquement. Utilisé pour des projets robustes avec des IDE performants.
`,Co=`---
name: Unity
slug: unity
published: true
category: devtools
color: gray
logo: Unity
---

Moteur de jeu multiplateforme pour le développement de jeux 2D/3D et expériences VR/AR.
`,To=`---
name: Velocity
slug: velocity
published: true
category: devtools
color: cyan
logo: Velocity
---

Proxy Minecraft moderne et performant. Gestion de réseaux de serveurs avec API plugin avancée.
`,Eo=`---
name: VS Code
slug: vscode
published: true
category: devtools
color: blue
logo: VSCode
---

Éditeur de code léger et extensible de Microsoft. Extensions, debugging intégré et terminal.
`,Lo=`---
name: Vue.js
slug: vuejs
published: true
category: framework
color: green
logo: VueJs
---

Framework JavaScript progressif pour construire des interfaces utilisateur réactives.
`,jo=`---
name: WebStorm
slug: webstorm
published: true
category: devtools
color: cyan
logo: WebStorm
---

IDE JetBrains pour le développement JavaScript et TypeScript. Support React, Vue, Angular et Node.js.
`,Po=`---
name: Microsoft Word
slug: word
published: true
category: devtools
color: blue
logo: Word
---

Traitement de texte pour documentation technique, rapports et rédaction professionnelle.
`,Io=`---
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
`,Do=`---
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
`,Fo=`---
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
`,Mo=`---
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
`,No=`---
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
`,Oo=`---
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
`,qo=`# Site Configuration
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
`,Ro=`# Page d'accueil
# Personnalise le contenu de ta page d'accueil ici

title: Accueil

hero:
  description: >
    Développeur Full-Stack passionné, je crée des applications web modernes
    et performantes. Actuellement en alternance au Synchrotron SOLEIL et 
    en Master à l'ESIEA.
`,Bo=`# Page CV
# Personnalise le contenu de ta page CV ici

title: CV
pdfPath: /pdf/CV_Alexy_Vanot.pdf
downloadLabel: Télécharger
fullscreenLabel: Plein écran
`,Ho=`# Page Contact
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
`;/*! js-yaml 4.1.1 https://github.com/nodeca/js-yaml @license MIT */function nr(e){return typeof e>"u"||e===null}function Go(e){return typeof e=="object"&&e!==null}function Uo(e){return Array.isArray(e)?e:nr(e)?[]:[e]}function Jo(e,n){var r,t,i,a;if(n)for(a=Object.keys(n),r=0,t=a.length;r<t;r+=1)i=a[r],e[i]=n[i];return e}function zo(e,n){var r="",t;for(t=0;t<n;t+=1)r+=e;return r}function Vo(e){return e===0&&Number.NEGATIVE_INFINITY===1/e}var Yo=nr,$o=Go,Ko=Uo,Wo=zo,Qo=Vo,Xo=Jo,E={isNothing:Yo,isObject:$o,toArray:Ko,repeat:Wo,isNegativeZero:Qo,extend:Xo};function rr(e,n){var r="",t=e.reason||"(unknown reason)";return e.mark?(e.mark.name&&(r+='in "'+e.mark.name+'" '),r+="("+(e.mark.line+1)+":"+(e.mark.column+1)+")",!n&&e.mark.snippet&&(r+=`

`+e.mark.snippet),t+" "+r):t}function ue(e,n){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=n,this.message=rr(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}ue.prototype=Object.create(Error.prototype);ue.prototype.constructor=ue;ue.prototype.toString=function(n){return this.name+": "+rr(this,n)};var P=ue;function Ne(e,n,r,t,i){var a="",o="",l=Math.floor(i/2)-1;return t-n>l&&(a=" ... ",n=t-l+a.length),r-t>l&&(o=" ...",r=t+l-o.length),{str:a+e.slice(n,r).replace(/\t/g,"→")+o,pos:t-n+a.length}}function Oe(e,n){return E.repeat(" ",n-e.length)+e}function Zo(e,n){if(n=Object.create(n||null),!e.buffer)return null;n.maxLength||(n.maxLength=79),typeof n.indent!="number"&&(n.indent=1),typeof n.linesBefore!="number"&&(n.linesBefore=3),typeof n.linesAfter!="number"&&(n.linesAfter=2);for(var r=/\r?\n|\r|\0/g,t=[0],i=[],a,o=-1;a=r.exec(e.buffer);)i.push(a.index),t.push(a.index+a[0].length),e.position<=a.index&&o<0&&(o=t.length-2);o<0&&(o=t.length-1);var l="",s,c,d=Math.min(e.line+n.linesAfter,i.length).toString().length,p=n.maxLength-(n.indent+d+3);for(s=1;s<=n.linesBefore&&!(o-s<0);s++)c=Ne(e.buffer,t[o-s],i[o-s],e.position-(t[o]-t[o-s]),p),l=E.repeat(" ",n.indent)+Oe((e.line-s+1).toString(),d)+" | "+c.str+`
`+l;for(c=Ne(e.buffer,t[o],i[o],e.position,p),l+=E.repeat(" ",n.indent)+Oe((e.line+1).toString(),d)+" | "+c.str+`
`,l+=E.repeat("-",n.indent+d+3+c.pos)+`^
`,s=1;s<=n.linesAfter&&!(o+s>=i.length);s++)c=Ne(e.buffer,t[o+s],i[o+s],e.position-(t[o]-t[o+s]),p),l+=E.repeat(" ",n.indent)+Oe((e.line+s+1).toString(),d)+" | "+c.str+`
`;return l.replace(/\n$/,"")}var ea=Zo,na=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],ra=["scalar","sequence","mapping"];function ia(e){var n={};return e!==null&&Object.keys(e).forEach(function(r){e[r].forEach(function(t){n[String(t)]=r})}),n}function ta(e,n){if(n=n||{},Object.keys(n).forEach(function(r){if(na.indexOf(r)===-1)throw new P('Unknown option "'+r+'" is met in definition of "'+e+'" YAML type.')}),this.options=n,this.tag=e,this.kind=n.kind||null,this.resolve=n.resolve||function(){return!0},this.construct=n.construct||function(r){return r},this.instanceOf=n.instanceOf||null,this.predicate=n.predicate||null,this.represent=n.represent||null,this.representName=n.representName||null,this.defaultStyle=n.defaultStyle||null,this.multi=n.multi||!1,this.styleAliases=ia(n.styleAliases||null),ra.indexOf(this.kind)===-1)throw new P('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')}var L=ta;function Cn(e,n){var r=[];return e[n].forEach(function(t){var i=r.length;r.forEach(function(a,o){a.tag===t.tag&&a.kind===t.kind&&a.multi===t.multi&&(i=o)}),r[i]=t}),r}function oa(){var e={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},n,r;function t(i){i.multi?(e.multi[i.kind].push(i),e.multi.fallback.push(i)):e[i.kind][i.tag]=e.fallback[i.tag]=i}for(n=0,r=arguments.length;n<r;n+=1)arguments[n].forEach(t);return e}function Ue(e){return this.extend(e)}Ue.prototype.extend=function(n){var r=[],t=[];if(n instanceof L)t.push(n);else if(Array.isArray(n))t=t.concat(n);else if(n&&(Array.isArray(n.implicit)||Array.isArray(n.explicit)))n.implicit&&(r=r.concat(n.implicit)),n.explicit&&(t=t.concat(n.explicit));else throw new P("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");r.forEach(function(a){if(!(a instanceof L))throw new P("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(a.loadKind&&a.loadKind!=="scalar")throw new P("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(a.multi)throw new P("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),t.forEach(function(a){if(!(a instanceof L))throw new P("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var i=Object.create(Ue.prototype);return i.implicit=(this.implicit||[]).concat(r),i.explicit=(this.explicit||[]).concat(t),i.compiledImplicit=Cn(i,"implicit"),i.compiledExplicit=Cn(i,"explicit"),i.compiledTypeMap=oa(i.compiledImplicit,i.compiledExplicit),i};var ir=Ue,tr=new L("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return e!==null?e:""}}),or=new L("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return e!==null?e:[]}}),ar=new L("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return e!==null?e:{}}}),lr=new ir({explicit:[tr,or,ar]});function aa(e){if(e===null)return!0;var n=e.length;return n===1&&e==="~"||n===4&&(e==="null"||e==="Null"||e==="NULL")}function la(){return null}function sa(e){return e===null}var sr=new L("tag:yaml.org,2002:null",{kind:"scalar",resolve:aa,construct:la,predicate:sa,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function ca(e){if(e===null)return!1;var n=e.length;return n===4&&(e==="true"||e==="True"||e==="TRUE")||n===5&&(e==="false"||e==="False"||e==="FALSE")}function ua(e){return e==="true"||e==="True"||e==="TRUE"}function pa(e){return Object.prototype.toString.call(e)==="[object Boolean]"}var cr=new L("tag:yaml.org,2002:bool",{kind:"scalar",resolve:ca,construct:ua,predicate:pa,represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"});function da(e){return 48<=e&&e<=57||65<=e&&e<=70||97<=e&&e<=102}function fa(e){return 48<=e&&e<=55}function ga(e){return 48<=e&&e<=57}function ma(e){if(e===null)return!1;var n=e.length,r=0,t=!1,i;if(!n)return!1;if(i=e[r],(i==="-"||i==="+")&&(i=e[++r]),i==="0"){if(r+1===n)return!0;if(i=e[++r],i==="b"){for(r++;r<n;r++)if(i=e[r],i!=="_"){if(i!=="0"&&i!=="1")return!1;t=!0}return t&&i!=="_"}if(i==="x"){for(r++;r<n;r++)if(i=e[r],i!=="_"){if(!da(e.charCodeAt(r)))return!1;t=!0}return t&&i!=="_"}if(i==="o"){for(r++;r<n;r++)if(i=e[r],i!=="_"){if(!fa(e.charCodeAt(r)))return!1;t=!0}return t&&i!=="_"}}if(i==="_")return!1;for(;r<n;r++)if(i=e[r],i!=="_"){if(!ga(e.charCodeAt(r)))return!1;t=!0}return!(!t||i==="_")}function ha(e){var n=e,r=1,t;if(n.indexOf("_")!==-1&&(n=n.replace(/_/g,"")),t=n[0],(t==="-"||t==="+")&&(t==="-"&&(r=-1),n=n.slice(1),t=n[0]),n==="0")return 0;if(t==="0"){if(n[1]==="b")return r*parseInt(n.slice(2),2);if(n[1]==="x")return r*parseInt(n.slice(2),16);if(n[1]==="o")return r*parseInt(n.slice(2),8)}return r*parseInt(n,10)}function va(e){return Object.prototype.toString.call(e)==="[object Number]"&&e%1===0&&!E.isNegativeZero(e)}var ur=new L("tag:yaml.org,2002:int",{kind:"scalar",resolve:ma,construct:ha,predicate:va,represent:{binary:function(e){return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){return e>=0?"0o"+e.toString(8):"-0o"+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),ba=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function _a(e){return!(e===null||!ba.test(e)||e[e.length-1]==="_")}function ya(e){var n,r;return n=e.replace(/_/g,"").toLowerCase(),r=n[0]==="-"?-1:1,"+-".indexOf(n[0])>=0&&(n=n.slice(1)),n===".inf"?r===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:n===".nan"?NaN:r*parseFloat(n,10)}var xa=/^[-+]?[0-9]+e/;function Sa(e,n){var r;if(isNaN(e))switch(n){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(n){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(n){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(E.isNegativeZero(e))return"-0.0";return r=e.toString(10),xa.test(r)?r.replace("e",".e"):r}function Aa(e){return Object.prototype.toString.call(e)==="[object Number]"&&(e%1!==0||E.isNegativeZero(e))}var pr=new L("tag:yaml.org,2002:float",{kind:"scalar",resolve:_a,construct:ya,predicate:Aa,represent:Sa,defaultStyle:"lowercase"}),dr=lr.extend({implicit:[sr,cr,ur,pr]}),fr=dr,gr=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),mr=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function wa(e){return e===null?!1:gr.exec(e)!==null||mr.exec(e)!==null}function ka(e){var n,r,t,i,a,o,l,s=0,c=null,d,p,f;if(n=gr.exec(e),n===null&&(n=mr.exec(e)),n===null)throw new Error("Date resolve error");if(r=+n[1],t=+n[2]-1,i=+n[3],!n[4])return new Date(Date.UTC(r,t,i));if(a=+n[4],o=+n[5],l=+n[6],n[7]){for(s=n[7].slice(0,3);s.length<3;)s+="0";s=+s}return n[9]&&(d=+n[10],p=+(n[11]||0),c=(d*60+p)*6e4,n[9]==="-"&&(c=-c)),f=new Date(Date.UTC(r,t,i,a,o,l,s)),c&&f.setTime(f.getTime()-c),f}function Ca(e){return e.toISOString()}var hr=new L("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:wa,construct:ka,instanceOf:Date,represent:Ca});function Ta(e){return e==="<<"||e===null}var vr=new L("tag:yaml.org,2002:merge",{kind:"scalar",resolve:Ta}),Xe=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function Ea(e){if(e===null)return!1;var n,r,t=0,i=e.length,a=Xe;for(r=0;r<i;r++)if(n=a.indexOf(e.charAt(r)),!(n>64)){if(n<0)return!1;t+=6}return t%8===0}function La(e){var n,r,t=e.replace(/[\r\n=]/g,""),i=t.length,a=Xe,o=0,l=[];for(n=0;n<i;n++)n%4===0&&n&&(l.push(o>>16&255),l.push(o>>8&255),l.push(o&255)),o=o<<6|a.indexOf(t.charAt(n));return r=i%4*6,r===0?(l.push(o>>16&255),l.push(o>>8&255),l.push(o&255)):r===18?(l.push(o>>10&255),l.push(o>>2&255)):r===12&&l.push(o>>4&255),new Uint8Array(l)}function ja(e){var n="",r=0,t,i,a=e.length,o=Xe;for(t=0;t<a;t++)t%3===0&&t&&(n+=o[r>>18&63],n+=o[r>>12&63],n+=o[r>>6&63],n+=o[r&63]),r=(r<<8)+e[t];return i=a%3,i===0?(n+=o[r>>18&63],n+=o[r>>12&63],n+=o[r>>6&63],n+=o[r&63]):i===2?(n+=o[r>>10&63],n+=o[r>>4&63],n+=o[r<<2&63],n+=o[64]):i===1&&(n+=o[r>>2&63],n+=o[r<<4&63],n+=o[64],n+=o[64]),n}function Pa(e){return Object.prototype.toString.call(e)==="[object Uint8Array]"}var br=new L("tag:yaml.org,2002:binary",{kind:"scalar",resolve:Ea,construct:La,predicate:Pa,represent:ja}),Ia=Object.prototype.hasOwnProperty,Da=Object.prototype.toString;function Fa(e){if(e===null)return!0;var n=[],r,t,i,a,o,l=e;for(r=0,t=l.length;r<t;r+=1){if(i=l[r],o=!1,Da.call(i)!=="[object Object]")return!1;for(a in i)if(Ia.call(i,a))if(!o)o=!0;else return!1;if(!o)return!1;if(n.indexOf(a)===-1)n.push(a);else return!1}return!0}function Ma(e){return e!==null?e:[]}var _r=new L("tag:yaml.org,2002:omap",{kind:"sequence",resolve:Fa,construct:Ma}),Na=Object.prototype.toString;function Oa(e){if(e===null)return!0;var n,r,t,i,a,o=e;for(a=new Array(o.length),n=0,r=o.length;n<r;n+=1){if(t=o[n],Na.call(t)!=="[object Object]"||(i=Object.keys(t),i.length!==1))return!1;a[n]=[i[0],t[i[0]]]}return!0}function qa(e){if(e===null)return[];var n,r,t,i,a,o=e;for(a=new Array(o.length),n=0,r=o.length;n<r;n+=1)t=o[n],i=Object.keys(t),a[n]=[i[0],t[i[0]]];return a}var yr=new L("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:Oa,construct:qa}),Ra=Object.prototype.hasOwnProperty;function Ba(e){if(e===null)return!0;var n,r=e;for(n in r)if(Ra.call(r,n)&&r[n]!==null)return!1;return!0}function Ha(e){return e!==null?e:{}}var xr=new L("tag:yaml.org,2002:set",{kind:"mapping",resolve:Ba,construct:Ha}),Ze=fr.extend({implicit:[hr,vr],explicit:[br,_r,yr,xr]}),J=Object.prototype.hasOwnProperty,xe=1,Sr=2,Ar=3,Se=4,qe=1,Ga=2,Tn=3,Ua=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,Ja=/[\x85\u2028\u2029]/,za=/[,\[\]\{\}]/,wr=/^(?:!|!!|![a-z\-]+!)$/i,kr=/^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;function En(e){return Object.prototype.toString.call(e)}function q(e){return e===10||e===13}function z(e){return e===9||e===32}function D(e){return e===9||e===32||e===10||e===13}function W(e){return e===44||e===91||e===93||e===123||e===125}function Va(e){var n;return 48<=e&&e<=57?e-48:(n=e|32,97<=n&&n<=102?n-97+10:-1)}function Ya(e){return e===120?2:e===117?4:e===85?8:0}function $a(e){return 48<=e&&e<=57?e-48:-1}function Ln(e){return e===48?"\0":e===97?"\x07":e===98?"\b":e===116||e===9?"	":e===110?`
`:e===118?"\v":e===102?"\f":e===114?"\r":e===101?"\x1B":e===32?" ":e===34?'"':e===47?"/":e===92?"\\":e===78?"":e===95?" ":e===76?"\u2028":e===80?"\u2029":""}function Ka(e){return e<=65535?String.fromCharCode(e):String.fromCharCode((e-65536>>10)+55296,(e-65536&1023)+56320)}function Cr(e,n,r){n==="__proto__"?Object.defineProperty(e,n,{configurable:!0,enumerable:!0,writable:!0,value:r}):e[n]=r}var Tr=new Array(256),Er=new Array(256);for(var $=0;$<256;$++)Tr[$]=Ln($)?1:0,Er[$]=Ln($);function Wa(e,n){this.input=e,this.filename=n.filename||null,this.schema=n.schema||Ze,this.onWarning=n.onWarning||null,this.legacy=n.legacy||!1,this.json=n.json||!1,this.listener=n.listener||null,this.implicitTypes=this.schema.compiledImplicit,this.typeMap=this.schema.compiledTypeMap,this.length=e.length,this.position=0,this.line=0,this.lineStart=0,this.lineIndent=0,this.firstTabInLine=-1,this.documents=[]}function Lr(e,n){var r={name:e.filename,buffer:e.input.slice(0,-1),position:e.position,line:e.line,column:e.position-e.lineStart};return r.snippet=ea(r),new P(n,r)}function h(e,n){throw Lr(e,n)}function Ae(e,n){e.onWarning&&e.onWarning.call(null,Lr(e,n))}var jn={YAML:function(n,r,t){var i,a,o;n.version!==null&&h(n,"duplication of %YAML directive"),t.length!==1&&h(n,"YAML directive accepts exactly one argument"),i=/^([0-9]+)\.([0-9]+)$/.exec(t[0]),i===null&&h(n,"ill-formed argument of the YAML directive"),a=parseInt(i[1],10),o=parseInt(i[2],10),a!==1&&h(n,"unacceptable YAML version of the document"),n.version=t[0],n.checkLineBreaks=o<2,o!==1&&o!==2&&Ae(n,"unsupported YAML version of the document")},TAG:function(n,r,t){var i,a;t.length!==2&&h(n,"TAG directive accepts exactly two arguments"),i=t[0],a=t[1],wr.test(i)||h(n,"ill-formed tag handle (first argument) of the TAG directive"),J.call(n.tagMap,i)&&h(n,'there is a previously declared suffix for "'+i+'" tag handle'),kr.test(a)||h(n,"ill-formed tag prefix (second argument) of the TAG directive");try{a=decodeURIComponent(a)}catch{h(n,"tag prefix is malformed: "+a)}n.tagMap[i]=a}};function U(e,n,r,t){var i,a,o,l;if(n<r){if(l=e.input.slice(n,r),t)for(i=0,a=l.length;i<a;i+=1)o=l.charCodeAt(i),o===9||32<=o&&o<=1114111||h(e,"expected valid JSON character");else Ua.test(l)&&h(e,"the stream contains non-printable characters");e.result+=l}}function Pn(e,n,r,t){var i,a,o,l;for(E.isObject(r)||h(e,"cannot merge mappings; the provided source object is unacceptable"),i=Object.keys(r),o=0,l=i.length;o<l;o+=1)a=i[o],J.call(n,a)||(Cr(n,a,r[a]),t[a]=!0)}function Q(e,n,r,t,i,a,o,l,s){var c,d;if(Array.isArray(i))for(i=Array.prototype.slice.call(i),c=0,d=i.length;c<d;c+=1)Array.isArray(i[c])&&h(e,"nested arrays are not supported inside keys"),typeof i=="object"&&En(i[c])==="[object Object]"&&(i[c]="[object Object]");if(typeof i=="object"&&En(i)==="[object Object]"&&(i="[object Object]"),i=String(i),n===null&&(n={}),t==="tag:yaml.org,2002:merge")if(Array.isArray(a))for(c=0,d=a.length;c<d;c+=1)Pn(e,n,a[c],r);else Pn(e,n,a,r);else!e.json&&!J.call(r,i)&&J.call(n,i)&&(e.line=o||e.line,e.lineStart=l||e.lineStart,e.position=s||e.position,h(e,"duplicated mapping key")),Cr(n,i,a),delete r[i];return n}function en(e){var n;n=e.input.charCodeAt(e.position),n===10?e.position++:n===13?(e.position++,e.input.charCodeAt(e.position)===10&&e.position++):h(e,"a line break is expected"),e.line+=1,e.lineStart=e.position,e.firstTabInLine=-1}function T(e,n,r){for(var t=0,i=e.input.charCodeAt(e.position);i!==0;){for(;z(i);)i===9&&e.firstTabInLine===-1&&(e.firstTabInLine=e.position),i=e.input.charCodeAt(++e.position);if(n&&i===35)do i=e.input.charCodeAt(++e.position);while(i!==10&&i!==13&&i!==0);if(q(i))for(en(e),i=e.input.charCodeAt(e.position),t++,e.lineIndent=0;i===32;)e.lineIndent++,i=e.input.charCodeAt(++e.position);else break}return r!==-1&&t!==0&&e.lineIndent<r&&Ae(e,"deficient indentation"),t}function Ce(e){var n=e.position,r;return r=e.input.charCodeAt(n),!!((r===45||r===46)&&r===e.input.charCodeAt(n+1)&&r===e.input.charCodeAt(n+2)&&(n+=3,r=e.input.charCodeAt(n),r===0||D(r)))}function nn(e,n){n===1?e.result+=" ":n>1&&(e.result+=E.repeat(`
`,n-1))}function Qa(e,n,r){var t,i,a,o,l,s,c,d,p=e.kind,f=e.result,m;if(m=e.input.charCodeAt(e.position),D(m)||W(m)||m===35||m===38||m===42||m===33||m===124||m===62||m===39||m===34||m===37||m===64||m===96||(m===63||m===45)&&(i=e.input.charCodeAt(e.position+1),D(i)||r&&W(i)))return!1;for(e.kind="scalar",e.result="",a=o=e.position,l=!1;m!==0;){if(m===58){if(i=e.input.charCodeAt(e.position+1),D(i)||r&&W(i))break}else if(m===35){if(t=e.input.charCodeAt(e.position-1),D(t))break}else{if(e.position===e.lineStart&&Ce(e)||r&&W(m))break;if(q(m))if(s=e.line,c=e.lineStart,d=e.lineIndent,T(e,!1,-1),e.lineIndent>=n){l=!0,m=e.input.charCodeAt(e.position);continue}else{e.position=o,e.line=s,e.lineStart=c,e.lineIndent=d;break}}l&&(U(e,a,o,!1),nn(e,e.line-s),a=o=e.position,l=!1),z(m)||(o=e.position+1),m=e.input.charCodeAt(++e.position)}return U(e,a,o,!1),e.result?!0:(e.kind=p,e.result=f,!1)}function Xa(e,n){var r,t,i;if(r=e.input.charCodeAt(e.position),r!==39)return!1;for(e.kind="scalar",e.result="",e.position++,t=i=e.position;(r=e.input.charCodeAt(e.position))!==0;)if(r===39)if(U(e,t,e.position,!0),r=e.input.charCodeAt(++e.position),r===39)t=e.position,e.position++,i=e.position;else return!0;else q(r)?(U(e,t,i,!0),nn(e,T(e,!1,n)),t=i=e.position):e.position===e.lineStart&&Ce(e)?h(e,"unexpected end of the document within a single quoted scalar"):(e.position++,i=e.position);h(e,"unexpected end of the stream within a single quoted scalar")}function Za(e,n){var r,t,i,a,o,l;if(l=e.input.charCodeAt(e.position),l!==34)return!1;for(e.kind="scalar",e.result="",e.position++,r=t=e.position;(l=e.input.charCodeAt(e.position))!==0;){if(l===34)return U(e,r,e.position,!0),e.position++,!0;if(l===92){if(U(e,r,e.position,!0),l=e.input.charCodeAt(++e.position),q(l))T(e,!1,n);else if(l<256&&Tr[l])e.result+=Er[l],e.position++;else if((o=Ya(l))>0){for(i=o,a=0;i>0;i--)l=e.input.charCodeAt(++e.position),(o=Va(l))>=0?a=(a<<4)+o:h(e,"expected hexadecimal character");e.result+=Ka(a),e.position++}else h(e,"unknown escape sequence");r=t=e.position}else q(l)?(U(e,r,t,!0),nn(e,T(e,!1,n)),r=t=e.position):e.position===e.lineStart&&Ce(e)?h(e,"unexpected end of the document within a double quoted scalar"):(e.position++,t=e.position)}h(e,"unexpected end of the stream within a double quoted scalar")}function el(e,n){var r=!0,t,i,a,o=e.tag,l,s=e.anchor,c,d,p,f,m,b=Object.create(null),_,g,v,y;if(y=e.input.charCodeAt(e.position),y===91)d=93,m=!1,l=[];else if(y===123)d=125,m=!0,l={};else return!1;for(e.anchor!==null&&(e.anchorMap[e.anchor]=l),y=e.input.charCodeAt(++e.position);y!==0;){if(T(e,!0,n),y=e.input.charCodeAt(e.position),y===d)return e.position++,e.tag=o,e.anchor=s,e.kind=m?"mapping":"sequence",e.result=l,!0;r?y===44&&h(e,"expected the node content, but found ','"):h(e,"missed comma between flow collection entries"),g=_=v=null,p=f=!1,y===63&&(c=e.input.charCodeAt(e.position+1),D(c)&&(p=f=!0,e.position++,T(e,!0,n))),t=e.line,i=e.lineStart,a=e.position,X(e,n,xe,!1,!0),g=e.tag,_=e.result,T(e,!0,n),y=e.input.charCodeAt(e.position),(f||e.line===t)&&y===58&&(p=!0,y=e.input.charCodeAt(++e.position),T(e,!0,n),X(e,n,xe,!1,!0),v=e.result),m?Q(e,l,b,g,_,v,t,i,a):p?l.push(Q(e,null,b,g,_,v,t,i,a)):l.push(_),T(e,!0,n),y=e.input.charCodeAt(e.position),y===44?(r=!0,y=e.input.charCodeAt(++e.position)):r=!1}h(e,"unexpected end of the stream within a flow collection")}function nl(e,n){var r,t,i=qe,a=!1,o=!1,l=n,s=0,c=!1,d,p;if(p=e.input.charCodeAt(e.position),p===124)t=!1;else if(p===62)t=!0;else return!1;for(e.kind="scalar",e.result="";p!==0;)if(p=e.input.charCodeAt(++e.position),p===43||p===45)qe===i?i=p===43?Tn:Ga:h(e,"repeat of a chomping mode identifier");else if((d=$a(p))>=0)d===0?h(e,"bad explicit indentation width of a block scalar; it cannot be less than one"):o?h(e,"repeat of an indentation width identifier"):(l=n+d-1,o=!0);else break;if(z(p)){do p=e.input.charCodeAt(++e.position);while(z(p));if(p===35)do p=e.input.charCodeAt(++e.position);while(!q(p)&&p!==0)}for(;p!==0;){for(en(e),e.lineIndent=0,p=e.input.charCodeAt(e.position);(!o||e.lineIndent<l)&&p===32;)e.lineIndent++,p=e.input.charCodeAt(++e.position);if(!o&&e.lineIndent>l&&(l=e.lineIndent),q(p)){s++;continue}if(e.lineIndent<l){i===Tn?e.result+=E.repeat(`
`,a?1+s:s):i===qe&&a&&(e.result+=`
`);break}for(t?z(p)?(c=!0,e.result+=E.repeat(`
`,a?1+s:s)):c?(c=!1,e.result+=E.repeat(`
`,s+1)):s===0?a&&(e.result+=" "):e.result+=E.repeat(`
`,s):e.result+=E.repeat(`
`,a?1+s:s),a=!0,o=!0,s=0,r=e.position;!q(p)&&p!==0;)p=e.input.charCodeAt(++e.position);U(e,r,e.position,!1)}return!0}function In(e,n){var r,t=e.tag,i=e.anchor,a=[],o,l=!1,s;if(e.firstTabInLine!==-1)return!1;for(e.anchor!==null&&(e.anchorMap[e.anchor]=a),s=e.input.charCodeAt(e.position);s!==0&&(e.firstTabInLine!==-1&&(e.position=e.firstTabInLine,h(e,"tab characters must not be used in indentation")),!(s!==45||(o=e.input.charCodeAt(e.position+1),!D(o))));){if(l=!0,e.position++,T(e,!0,-1)&&e.lineIndent<=n){a.push(null),s=e.input.charCodeAt(e.position);continue}if(r=e.line,X(e,n,Ar,!1,!0),a.push(e.result),T(e,!0,-1),s=e.input.charCodeAt(e.position),(e.line===r||e.lineIndent>n)&&s!==0)h(e,"bad indentation of a sequence entry");else if(e.lineIndent<n)break}return l?(e.tag=t,e.anchor=i,e.kind="sequence",e.result=a,!0):!1}function rl(e,n,r){var t,i,a,o,l,s,c=e.tag,d=e.anchor,p={},f=Object.create(null),m=null,b=null,_=null,g=!1,v=!1,y;if(e.firstTabInLine!==-1)return!1;for(e.anchor!==null&&(e.anchorMap[e.anchor]=p),y=e.input.charCodeAt(e.position);y!==0;){if(!g&&e.firstTabInLine!==-1&&(e.position=e.firstTabInLine,h(e,"tab characters must not be used in indentation")),t=e.input.charCodeAt(e.position+1),a=e.line,(y===63||y===58)&&D(t))y===63?(g&&(Q(e,p,f,m,b,null,o,l,s),m=b=_=null),v=!0,g=!0,i=!0):g?(g=!1,i=!0):h(e,"incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"),e.position+=1,y=t;else{if(o=e.line,l=e.lineStart,s=e.position,!X(e,r,Sr,!1,!0))break;if(e.line===a){for(y=e.input.charCodeAt(e.position);z(y);)y=e.input.charCodeAt(++e.position);if(y===58)y=e.input.charCodeAt(++e.position),D(y)||h(e,"a whitespace character is expected after the key-value separator within a block mapping"),g&&(Q(e,p,f,m,b,null,o,l,s),m=b=_=null),v=!0,g=!1,i=!1,m=e.tag,b=e.result;else if(v)h(e,"can not read an implicit mapping pair; a colon is missed");else return e.tag=c,e.anchor=d,!0}else if(v)h(e,"can not read a block mapping entry; a multiline key may not be an implicit key");else return e.tag=c,e.anchor=d,!0}if((e.line===a||e.lineIndent>n)&&(g&&(o=e.line,l=e.lineStart,s=e.position),X(e,n,Se,!0,i)&&(g?b=e.result:_=e.result),g||(Q(e,p,f,m,b,_,o,l,s),m=b=_=null),T(e,!0,-1),y=e.input.charCodeAt(e.position)),(e.line===a||e.lineIndent>n)&&y!==0)h(e,"bad indentation of a mapping entry");else if(e.lineIndent<n)break}return g&&Q(e,p,f,m,b,null,o,l,s),v&&(e.tag=c,e.anchor=d,e.kind="mapping",e.result=p),v}function il(e){var n,r=!1,t=!1,i,a,o;if(o=e.input.charCodeAt(e.position),o!==33)return!1;if(e.tag!==null&&h(e,"duplication of a tag property"),o=e.input.charCodeAt(++e.position),o===60?(r=!0,o=e.input.charCodeAt(++e.position)):o===33?(t=!0,i="!!",o=e.input.charCodeAt(++e.position)):i="!",n=e.position,r){do o=e.input.charCodeAt(++e.position);while(o!==0&&o!==62);e.position<e.length?(a=e.input.slice(n,e.position),o=e.input.charCodeAt(++e.position)):h(e,"unexpected end of the stream within a verbatim tag")}else{for(;o!==0&&!D(o);)o===33&&(t?h(e,"tag suffix cannot contain exclamation marks"):(i=e.input.slice(n-1,e.position+1),wr.test(i)||h(e,"named tag handle cannot contain such characters"),t=!0,n=e.position+1)),o=e.input.charCodeAt(++e.position);a=e.input.slice(n,e.position),za.test(a)&&h(e,"tag suffix cannot contain flow indicator characters")}a&&!kr.test(a)&&h(e,"tag name cannot contain such characters: "+a);try{a=decodeURIComponent(a)}catch{h(e,"tag name is malformed: "+a)}return r?e.tag=a:J.call(e.tagMap,i)?e.tag=e.tagMap[i]+a:i==="!"?e.tag="!"+a:i==="!!"?e.tag="tag:yaml.org,2002:"+a:h(e,'undeclared tag handle "'+i+'"'),!0}function tl(e){var n,r;if(r=e.input.charCodeAt(e.position),r!==38)return!1;for(e.anchor!==null&&h(e,"duplication of an anchor property"),r=e.input.charCodeAt(++e.position),n=e.position;r!==0&&!D(r)&&!W(r);)r=e.input.charCodeAt(++e.position);return e.position===n&&h(e,"name of an anchor node must contain at least one character"),e.anchor=e.input.slice(n,e.position),!0}function ol(e){var n,r,t;if(t=e.input.charCodeAt(e.position),t!==42)return!1;for(t=e.input.charCodeAt(++e.position),n=e.position;t!==0&&!D(t)&&!W(t);)t=e.input.charCodeAt(++e.position);return e.position===n&&h(e,"name of an alias node must contain at least one character"),r=e.input.slice(n,e.position),J.call(e.anchorMap,r)||h(e,'unidentified alias "'+r+'"'),e.result=e.anchorMap[r],T(e,!0,-1),!0}function X(e,n,r,t,i){var a,o,l,s=1,c=!1,d=!1,p,f,m,b,_,g;if(e.listener!==null&&e.listener("open",e),e.tag=null,e.anchor=null,e.kind=null,e.result=null,a=o=l=Se===r||Ar===r,t&&T(e,!0,-1)&&(c=!0,e.lineIndent>n?s=1:e.lineIndent===n?s=0:e.lineIndent<n&&(s=-1)),s===1)for(;il(e)||tl(e);)T(e,!0,-1)?(c=!0,l=a,e.lineIndent>n?s=1:e.lineIndent===n?s=0:e.lineIndent<n&&(s=-1)):l=!1;if(l&&(l=c||i),(s===1||Se===r)&&(xe===r||Sr===r?_=n:_=n+1,g=e.position-e.lineStart,s===1?l&&(In(e,g)||rl(e,g,_))||el(e,_)?d=!0:(o&&nl(e,_)||Xa(e,_)||Za(e,_)?d=!0:ol(e)?(d=!0,(e.tag!==null||e.anchor!==null)&&h(e,"alias node should not have any properties")):Qa(e,_,xe===r)&&(d=!0,e.tag===null&&(e.tag="?")),e.anchor!==null&&(e.anchorMap[e.anchor]=e.result)):s===0&&(d=l&&In(e,g))),e.tag===null)e.anchor!==null&&(e.anchorMap[e.anchor]=e.result);else if(e.tag==="?"){for(e.result!==null&&e.kind!=="scalar"&&h(e,'unacceptable node kind for !<?> tag; it should be "scalar", not "'+e.kind+'"'),p=0,f=e.implicitTypes.length;p<f;p+=1)if(b=e.implicitTypes[p],b.resolve(e.result)){e.result=b.construct(e.result),e.tag=b.tag,e.anchor!==null&&(e.anchorMap[e.anchor]=e.result);break}}else if(e.tag!=="!"){if(J.call(e.typeMap[e.kind||"fallback"],e.tag))b=e.typeMap[e.kind||"fallback"][e.tag];else for(b=null,m=e.typeMap.multi[e.kind||"fallback"],p=0,f=m.length;p<f;p+=1)if(e.tag.slice(0,m[p].tag.length)===m[p].tag){b=m[p];break}b||h(e,"unknown tag !<"+e.tag+">"),e.result!==null&&b.kind!==e.kind&&h(e,"unacceptable node kind for !<"+e.tag+'> tag; it should be "'+b.kind+'", not "'+e.kind+'"'),b.resolve(e.result,e.tag)?(e.result=b.construct(e.result,e.tag),e.anchor!==null&&(e.anchorMap[e.anchor]=e.result)):h(e,"cannot resolve a node with !<"+e.tag+"> explicit tag")}return e.listener!==null&&e.listener("close",e),e.tag!==null||e.anchor!==null||d}function al(e){var n=e.position,r,t,i,a=!1,o;for(e.version=null,e.checkLineBreaks=e.legacy,e.tagMap=Object.create(null),e.anchorMap=Object.create(null);(o=e.input.charCodeAt(e.position))!==0&&(T(e,!0,-1),o=e.input.charCodeAt(e.position),!(e.lineIndent>0||o!==37));){for(a=!0,o=e.input.charCodeAt(++e.position),r=e.position;o!==0&&!D(o);)o=e.input.charCodeAt(++e.position);for(t=e.input.slice(r,e.position),i=[],t.length<1&&h(e,"directive name must not be less than one character in length");o!==0;){for(;z(o);)o=e.input.charCodeAt(++e.position);if(o===35){do o=e.input.charCodeAt(++e.position);while(o!==0&&!q(o));break}if(q(o))break;for(r=e.position;o!==0&&!D(o);)o=e.input.charCodeAt(++e.position);i.push(e.input.slice(r,e.position))}o!==0&&en(e),J.call(jn,t)?jn[t](e,t,i):Ae(e,'unknown document directive "'+t+'"')}if(T(e,!0,-1),e.lineIndent===0&&e.input.charCodeAt(e.position)===45&&e.input.charCodeAt(e.position+1)===45&&e.input.charCodeAt(e.position+2)===45?(e.position+=3,T(e,!0,-1)):a&&h(e,"directives end mark is expected"),X(e,e.lineIndent-1,Se,!1,!0),T(e,!0,-1),e.checkLineBreaks&&Ja.test(e.input.slice(n,e.position))&&Ae(e,"non-ASCII line breaks are interpreted as content"),e.documents.push(e.result),e.position===e.lineStart&&Ce(e)){e.input.charCodeAt(e.position)===46&&(e.position+=3,T(e,!0,-1));return}if(e.position<e.length-1)h(e,"end of the stream or a document separator is expected");else return}function jr(e,n){e=String(e),n=n||{},e.length!==0&&(e.charCodeAt(e.length-1)!==10&&e.charCodeAt(e.length-1)!==13&&(e+=`
`),e.charCodeAt(0)===65279&&(e=e.slice(1)));var r=new Wa(e,n),t=e.indexOf("\0");for(t!==-1&&(r.position=t,h(r,"null byte is not allowed in input")),r.input+="\0";r.input.charCodeAt(r.position)===32;)r.lineIndent+=1,r.position+=1;for(;r.position<r.length-1;)al(r);return r.documents}function ll(e,n,r){n!==null&&typeof n=="object"&&typeof r>"u"&&(r=n,n=null);var t=jr(e,r);if(typeof n!="function")return t;for(var i=0,a=t.length;i<a;i+=1)n(t[i])}function sl(e,n){var r=jr(e,n);if(r.length!==0){if(r.length===1)return r[0];throw new P("expected a single document in the stream, but found more")}}var cl=ll,ul=sl,Pr={loadAll:cl,load:ul},Ir=Object.prototype.toString,Dr=Object.prototype.hasOwnProperty,rn=65279,pl=9,pe=10,dl=13,fl=32,gl=33,ml=34,Je=35,hl=37,vl=38,bl=39,_l=42,Fr=44,yl=45,we=58,xl=61,Sl=62,Al=63,wl=64,Mr=91,Nr=93,kl=96,Or=123,Cl=124,qr=125,j={};j[0]="\\0";j[7]="\\a";j[8]="\\b";j[9]="\\t";j[10]="\\n";j[11]="\\v";j[12]="\\f";j[13]="\\r";j[27]="\\e";j[34]='\\"';j[92]="\\\\";j[133]="\\N";j[160]="\\_";j[8232]="\\L";j[8233]="\\P";var Tl=["y","Y","yes","Yes","YES","on","On","ON","n","N","no","No","NO","off","Off","OFF"],El=/^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;function Ll(e,n){var r,t,i,a,o,l,s;if(n===null)return{};for(r={},t=Object.keys(n),i=0,a=t.length;i<a;i+=1)o=t[i],l=String(n[o]),o.slice(0,2)==="!!"&&(o="tag:yaml.org,2002:"+o.slice(2)),s=e.compiledTypeMap.fallback[o],s&&Dr.call(s.styleAliases,l)&&(l=s.styleAliases[l]),r[o]=l;return r}function jl(e){var n,r,t;if(n=e.toString(16).toUpperCase(),e<=255)r="x",t=2;else if(e<=65535)r="u",t=4;else if(e<=4294967295)r="U",t=8;else throw new P("code point within a string may not be greater than 0xFFFFFFFF");return"\\"+r+E.repeat("0",t-n.length)+n}var Pl=1,de=2;function Il(e){this.schema=e.schema||Ze,this.indent=Math.max(1,e.indent||2),this.noArrayIndent=e.noArrayIndent||!1,this.skipInvalid=e.skipInvalid||!1,this.flowLevel=E.isNothing(e.flowLevel)?-1:e.flowLevel,this.styleMap=Ll(this.schema,e.styles||null),this.sortKeys=e.sortKeys||!1,this.lineWidth=e.lineWidth||80,this.noRefs=e.noRefs||!1,this.noCompatMode=e.noCompatMode||!1,this.condenseFlow=e.condenseFlow||!1,this.quotingType=e.quotingType==='"'?de:Pl,this.forceQuotes=e.forceQuotes||!1,this.replacer=typeof e.replacer=="function"?e.replacer:null,this.implicitTypes=this.schema.compiledImplicit,this.explicitTypes=this.schema.compiledExplicit,this.tag=null,this.result="",this.duplicates=[],this.usedDuplicates=null}function Dn(e,n){for(var r=E.repeat(" ",n),t=0,i=-1,a="",o,l=e.length;t<l;)i=e.indexOf(`
`,t),i===-1?(o=e.slice(t),t=l):(o=e.slice(t,i+1),t=i+1),o.length&&o!==`
`&&(a+=r),a+=o;return a}function ze(e,n){return`
`+E.repeat(" ",e.indent*n)}function Dl(e,n){var r,t,i;for(r=0,t=e.implicitTypes.length;r<t;r+=1)if(i=e.implicitTypes[r],i.resolve(n))return!0;return!1}function ke(e){return e===fl||e===pl}function fe(e){return 32<=e&&e<=126||161<=e&&e<=55295&&e!==8232&&e!==8233||57344<=e&&e<=65533&&e!==rn||65536<=e&&e<=1114111}function Fn(e){return fe(e)&&e!==rn&&e!==dl&&e!==pe}function Mn(e,n,r){var t=Fn(e),i=t&&!ke(e);return(r?t:t&&e!==Fr&&e!==Mr&&e!==Nr&&e!==Or&&e!==qr)&&e!==Je&&!(n===we&&!i)||Fn(n)&&!ke(n)&&e===Je||n===we&&i}function Fl(e){return fe(e)&&e!==rn&&!ke(e)&&e!==yl&&e!==Al&&e!==we&&e!==Fr&&e!==Mr&&e!==Nr&&e!==Or&&e!==qr&&e!==Je&&e!==vl&&e!==_l&&e!==gl&&e!==Cl&&e!==xl&&e!==Sl&&e!==bl&&e!==ml&&e!==hl&&e!==wl&&e!==kl}function Ml(e){return!ke(e)&&e!==we}function oe(e,n){var r=e.charCodeAt(n),t;return r>=55296&&r<=56319&&n+1<e.length&&(t=e.charCodeAt(n+1),t>=56320&&t<=57343)?(r-55296)*1024+t-56320+65536:r}function Rr(e){var n=/^\n* /;return n.test(e)}var Br=1,Ve=2,Hr=3,Gr=4,K=5;function Nl(e,n,r,t,i,a,o,l){var s,c=0,d=null,p=!1,f=!1,m=t!==-1,b=-1,_=Fl(oe(e,0))&&Ml(oe(e,e.length-1));if(n||o)for(s=0;s<e.length;c>=65536?s+=2:s++){if(c=oe(e,s),!fe(c))return K;_=_&&Mn(c,d,l),d=c}else{for(s=0;s<e.length;c>=65536?s+=2:s++){if(c=oe(e,s),c===pe)p=!0,m&&(f=f||s-b-1>t&&e[b+1]!==" ",b=s);else if(!fe(c))return K;_=_&&Mn(c,d,l),d=c}f=f||m&&s-b-1>t&&e[b+1]!==" "}return!p&&!f?_&&!o&&!i(e)?Br:a===de?K:Ve:r>9&&Rr(e)?K:o?a===de?K:Ve:f?Gr:Hr}function Ol(e,n,r,t,i){e.dump=(function(){if(n.length===0)return e.quotingType===de?'""':"''";if(!e.noCompatMode&&(Tl.indexOf(n)!==-1||El.test(n)))return e.quotingType===de?'"'+n+'"':"'"+n+"'";var a=e.indent*Math.max(1,r),o=e.lineWidth===-1?-1:Math.max(Math.min(e.lineWidth,40),e.lineWidth-a),l=t||e.flowLevel>-1&&r>=e.flowLevel;function s(c){return Dl(e,c)}switch(Nl(n,l,e.indent,o,s,e.quotingType,e.forceQuotes&&!t,i)){case Br:return n;case Ve:return"'"+n.replace(/'/g,"''")+"'";case Hr:return"|"+Nn(n,e.indent)+On(Dn(n,a));case Gr:return">"+Nn(n,e.indent)+On(Dn(ql(n,o),a));case K:return'"'+Rl(n)+'"';default:throw new P("impossible error: invalid scalar style")}})()}function Nn(e,n){var r=Rr(e)?String(n):"",t=e[e.length-1]===`
`,i=t&&(e[e.length-2]===`
`||e===`
`),a=i?"+":t?"":"-";return r+a+`
`}function On(e){return e[e.length-1]===`
`?e.slice(0,-1):e}function ql(e,n){for(var r=/(\n+)([^\n]*)/g,t=(function(){var c=e.indexOf(`
`);return c=c!==-1?c:e.length,r.lastIndex=c,qn(e.slice(0,c),n)})(),i=e[0]===`
`||e[0]===" ",a,o;o=r.exec(e);){var l=o[1],s=o[2];a=s[0]===" ",t+=l+(!i&&!a&&s!==""?`
`:"")+qn(s,n),i=a}return t}function qn(e,n){if(e===""||e[0]===" ")return e;for(var r=/ [^ ]/g,t,i=0,a,o=0,l=0,s="";t=r.exec(e);)l=t.index,l-i>n&&(a=o>i?o:l,s+=`
`+e.slice(i,a),i=a+1),o=l;return s+=`
`,e.length-i>n&&o>i?s+=e.slice(i,o)+`
`+e.slice(o+1):s+=e.slice(i),s.slice(1)}function Rl(e){for(var n="",r=0,t,i=0;i<e.length;r>=65536?i+=2:i++)r=oe(e,i),t=j[r],!t&&fe(r)?(n+=e[i],r>=65536&&(n+=e[i+1])):n+=t||jl(r);return n}function Bl(e,n,r){var t="",i=e.tag,a,o,l;for(a=0,o=r.length;a<o;a+=1)l=r[a],e.replacer&&(l=e.replacer.call(r,String(a),l)),(H(e,n,l,!1,!1)||typeof l>"u"&&H(e,n,null,!1,!1))&&(t!==""&&(t+=","+(e.condenseFlow?"":" ")),t+=e.dump);e.tag=i,e.dump="["+t+"]"}function Rn(e,n,r,t){var i="",a=e.tag,o,l,s;for(o=0,l=r.length;o<l;o+=1)s=r[o],e.replacer&&(s=e.replacer.call(r,String(o),s)),(H(e,n+1,s,!0,!0,!1,!0)||typeof s>"u"&&H(e,n+1,null,!0,!0,!1,!0))&&((!t||i!=="")&&(i+=ze(e,n)),e.dump&&pe===e.dump.charCodeAt(0)?i+="-":i+="- ",i+=e.dump);e.tag=a,e.dump=i||"[]"}function Hl(e,n,r){var t="",i=e.tag,a=Object.keys(r),o,l,s,c,d;for(o=0,l=a.length;o<l;o+=1)d="",t!==""&&(d+=", "),e.condenseFlow&&(d+='"'),s=a[o],c=r[s],e.replacer&&(c=e.replacer.call(r,s,c)),H(e,n,s,!1,!1)&&(e.dump.length>1024&&(d+="? "),d+=e.dump+(e.condenseFlow?'"':"")+":"+(e.condenseFlow?"":" "),H(e,n,c,!1,!1)&&(d+=e.dump,t+=d));e.tag=i,e.dump="{"+t+"}"}function Gl(e,n,r,t){var i="",a=e.tag,o=Object.keys(r),l,s,c,d,p,f;if(e.sortKeys===!0)o.sort();else if(typeof e.sortKeys=="function")o.sort(e.sortKeys);else if(e.sortKeys)throw new P("sortKeys must be a boolean or a function");for(l=0,s=o.length;l<s;l+=1)f="",(!t||i!=="")&&(f+=ze(e,n)),c=o[l],d=r[c],e.replacer&&(d=e.replacer.call(r,c,d)),H(e,n+1,c,!0,!0,!0)&&(p=e.tag!==null&&e.tag!=="?"||e.dump&&e.dump.length>1024,p&&(e.dump&&pe===e.dump.charCodeAt(0)?f+="?":f+="? "),f+=e.dump,p&&(f+=ze(e,n)),H(e,n+1,d,!0,p)&&(e.dump&&pe===e.dump.charCodeAt(0)?f+=":":f+=": ",f+=e.dump,i+=f));e.tag=a,e.dump=i||"{}"}function Bn(e,n,r){var t,i,a,o,l,s;for(i=r?e.explicitTypes:e.implicitTypes,a=0,o=i.length;a<o;a+=1)if(l=i[a],(l.instanceOf||l.predicate)&&(!l.instanceOf||typeof n=="object"&&n instanceof l.instanceOf)&&(!l.predicate||l.predicate(n))){if(r?l.multi&&l.representName?e.tag=l.representName(n):e.tag=l.tag:e.tag="?",l.represent){if(s=e.styleMap[l.tag]||l.defaultStyle,Ir.call(l.represent)==="[object Function]")t=l.represent(n,s);else if(Dr.call(l.represent,s))t=l.represent[s](n,s);else throw new P("!<"+l.tag+'> tag resolver accepts not "'+s+'" style');e.dump=t}return!0}return!1}function H(e,n,r,t,i,a,o){e.tag=null,e.dump=r,Bn(e,r,!1)||Bn(e,r,!0);var l=Ir.call(e.dump),s=t,c;t&&(t=e.flowLevel<0||e.flowLevel>n);var d=l==="[object Object]"||l==="[object Array]",p,f;if(d&&(p=e.duplicates.indexOf(r),f=p!==-1),(e.tag!==null&&e.tag!=="?"||f||e.indent!==2&&n>0)&&(i=!1),f&&e.usedDuplicates[p])e.dump="*ref_"+p;else{if(d&&f&&!e.usedDuplicates[p]&&(e.usedDuplicates[p]=!0),l==="[object Object]")t&&Object.keys(e.dump).length!==0?(Gl(e,n,e.dump,i),f&&(e.dump="&ref_"+p+e.dump)):(Hl(e,n,e.dump),f&&(e.dump="&ref_"+p+" "+e.dump));else if(l==="[object Array]")t&&e.dump.length!==0?(e.noArrayIndent&&!o&&n>0?Rn(e,n-1,e.dump,i):Rn(e,n,e.dump,i),f&&(e.dump="&ref_"+p+e.dump)):(Bl(e,n,e.dump),f&&(e.dump="&ref_"+p+" "+e.dump));else if(l==="[object String]")e.tag!=="?"&&Ol(e,e.dump,n,a,s);else{if(l==="[object Undefined]")return!1;if(e.skipInvalid)return!1;throw new P("unacceptable kind of an object to dump "+l)}e.tag!==null&&e.tag!=="?"&&(c=encodeURI(e.tag[0]==="!"?e.tag.slice(1):e.tag).replace(/!/g,"%21"),e.tag[0]==="!"?c="!"+c:c.slice(0,18)==="tag:yaml.org,2002:"?c="!!"+c.slice(18):c="!<"+c+">",e.dump=c+" "+e.dump)}return!0}function Ul(e,n){var r=[],t=[],i,a;for(Ye(e,r,t),i=0,a=t.length;i<a;i+=1)n.duplicates.push(r[t[i]]);n.usedDuplicates=new Array(a)}function Ye(e,n,r){var t,i,a;if(e!==null&&typeof e=="object")if(i=n.indexOf(e),i!==-1)r.indexOf(i)===-1&&r.push(i);else if(n.push(e),Array.isArray(e))for(i=0,a=e.length;i<a;i+=1)Ye(e[i],n,r);else for(t=Object.keys(e),i=0,a=t.length;i<a;i+=1)Ye(e[t[i]],n,r)}function Jl(e,n){n=n||{};var r=new Il(n);r.noRefs||Ul(e,r);var t=e;return r.replacer&&(t=r.replacer.call({"":t},"",t)),H(r,0,t,!0,!0)?r.dump+`
`:""}var zl=Jl,Vl={dump:zl};function tn(e,n){return function(){throw new Error("Function yaml."+e+" is removed in js-yaml 4. Use yaml."+n+" instead, which is now safe by default.")}}var Yl=L,$l=ir,Kl=lr,Wl=dr,Ql=fr,Xl=Ze,Zl=Pr.load,es=Pr.loadAll,ns=Vl.dump,rs=P,is={binary:br,float:pr,map:ar,null:sr,pairs:yr,set:xr,timestamp:hr,bool:cr,int:ur,merge:vr,omap:_r,seq:or,str:tr},ts=tn("safeLoad","load"),os=tn("safeLoadAll","loadAll"),as=tn("safeDump","dump"),ge={Type:Yl,Schema:$l,FAILSAFE_SCHEMA:Kl,JSON_SCHEMA:Wl,CORE_SCHEMA:Ql,DEFAULT_SCHEMA:Xl,load:Zl,loadAll:es,dump:ns,YAMLException:rs,types:is,safeLoad:ts,safeLoadAll:os,safeDump:as};const $e=e=>Ki(`/logos/${e}`),ls="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",ie=$e("no-img.svg"),u=(e,n=e)=>({light:$e(e),dark:$e(n),fallback:ls}),be={javascript:"javascript",typescript:"typescript",python:"python",java:"java",c:"c",cpp:"cplusplus","c++":"cplusplus",csharp:"csharp","c#":"csharp",go:"go",rust:"rust",kotlin:"kotlin",dart:"dart",php:"php",ruby:"ruby",swift:"swift",r:"r",scala:"scala",perl:"perl",lua:"lua",haskell:"haskell",elixir:"elixir",clojure:"clojure",matlab:"matlab",bash:"bash",powershell:"powershell",react:"react",reactjs:"react",vue:"vuejs",vuejs:"vuejs",angular:"angularjs",svelte:"svelte",nextjs:"nextjs",nuxt:"nuxtjs",nuxtjs:"nuxtjs",gatsby:"gatsby",ember:"ember",backbone:"backbonejs",jquery:"jquery",bootstrap:"bootstrap",tailwind:"tailwindcss",tailwindcss:"tailwindcss",materialui:"materialui",sass:"sass",less:"less",css:"css3",html:"html5",nodejs:"nodejs",node:"nodejs",express:"express",expressjs:"express",nestjs:"nestjs",fastify:"fastify",django:"django",flask:"flask",fastapi:"fastapi",spring:"spring",rails:"rails",laravel:"laravel",dotnet:"dotnetcore",".net":"dotnetcore",aspnet:"dotnetcore",postgresql:"postgresql",postgres:"postgresql",mysql:"mysql",mongodb:"mongodb",redis:"redis",sqlite:"sqlite",oracle:"oracle",mariadb:"mariadb",cassandra:"cassandra",neo4j:"neo4j",firebase:"firebase",dynamodb:"dynamodb",docker:"docker",kubernetes:"kubernetes",aws:"amazonwebservices",azure:"azure",gcp:"googlecloud",googlecloud:"googlecloud",heroku:"heroku",nginx:"nginx",apache:"apache",jenkins:"jenkins",circleci:"circleci",travisci:"travis",terraform:"terraform",ansible:"ansible",vagrant:"vagrant",git:"git",github:"github",gitlab:"gitlab",bitbucket:"bitbucket",vscode:"vscode",vim:"vim",jetbrains:"jetbrains",intellij:"intellij",webpack:"webpack",vite:"vitejs",babel:"babel",eslint:"eslint",npm:"npm",yarn:"yarn",pnpm:"pnpm",gradle:"gradle",maven:"maven",cmake:"cmake",jest:"jest",mocha:"mocha",jasmine:"jasmine",selenium:"selenium",cypress:"cypressio",pytest:"pytest",playwright:"playwright",streamlit:"streamlit",android:"android",flutter:"flutter",reactnative:"react",ionic:"ionic",xamarin:"xamarin",linux:"linux",ubuntu:"ubuntu",debian:"debian",centos:"centos",windows:"windows8",apple:"apple",macos:"apple",raspberrypi:"raspberrypi",graphql:"graphql",kafka:"apachekafka",rabbitmq:"rabbitmq",electron:"electron",figma:"figma",sketch:"sketch",photoshop:"photoshop",illustrator:"illustrator",blender:"blender",unity:"unity",unrealengine:"unrealengine",threejs:"threejs",opencv:"opencv",tensorflow:"tensorflow",pytorch:"pytorch",pandas:"pandas",numpy:"numpy",jupyter:"jupyter",anaconda:"anaconda",markdown:"markdown",latex:"latex",wordpress:"wordpress",drupal:"drupal",jira:"jira",confluence:"confluence",trello:"trello",slack:"slack",postman:"postman",insomnia:"insomnia",swagger:"swagger"};function ve(e){return e.toLowerCase().replace(/[.\-_\s]/g,"").replace(/js$/i,"").replace(/\.js$/i,"").replace(/lang$/i,"")}function ss(e){const n=ve(e);for(const[a,o]of Object.entries(be))if(ve(a)===n)return o;for(const[a,o]of Object.entries(be)){const l=ve(a);if(n.includes(l)||l.includes(n))return o}const r={node:"nodejs",js:"javascript",ts:"typescript",py:"python",rb:"ruby",cpp:"cplusplus",cxx:"cplusplus",cs:"csharp",postgres:"postgresql",mongo:"mongodb",k8s:"kubernetes",tf:"terraform",vue:"vuejs",react:"react",ng:"angularjs",angular:"angularjs",next:"nextjs",nuxt:"nuxtjs",tailwind:"tailwindcss",tw:"tailwindcss",bs:"bootstrap",electron:"electron",deno:"denojs",bun:"bun",aws:"amazonwebservices",gcloud:"googlecloud",gc:"googlecloud",az:"azure",gh:"github",gl:"gitlab",vsc:"vscode",code:"vscode",vim:"vim",nvim:"neovim",neovim:"neovim",intellij:"intellij",idea:"intellij",pycharm:"pycharm",webstorm:"webstorm"};if(r[n])return r[n];let t,i=1/0;for(const[a,o]of Object.entries(be)){const l=cs(n,ve(a));l<i&&l<=2&&(i=l,t=o)}return t}function cs(e,n){if(e.length===0)return n.length;if(n.length===0)return e.length;const r=[];for(let t=0;t<=n.length;t++)r[t]=[t];for(let t=0;t<=e.length;t++)r[0][t]=t;for(let t=1;t<=n.length;t++)for(let i=1;i<=e.length;i++)n.charAt(t-1)===e.charAt(i-1)?r[t][i]=r[t-1][i-1]:r[t][i]=Math.min(r[t-1][i-1]+1,r[t][i-1]+1,r[t-1][i]+1);return r[n.length][e.length]}const us=new Set(["unknown","none","null","undefined","","n/a","na","no-img","placeholder","autonomy","autonomie","creativity","créativité","creativite","teamwork","travail d'équipe","travail equipe","communication","leadership","problem-solving","problem solving","résolution de problèmes","adaptability","adaptabilité","adaptabilite","time-management","time management","gestion du temps","critical-thinking","critical thinking","pensée critique","collaboration","motivation","organization","organisation","flexibility","flexibilité","flexibilite","patience","empathy","empathie","curiosity","curiosité","curiosite","rigor","rigueur","initiative","perseverance","persévérance","perseverance","soft skill","soft skills"]);function Ur(e){if(!e)return!0;const n=e.toLowerCase().trim();return n.length===0?!0:us.has(n)}function ps(e,n="original"){if(Ur(e))return;let r=be[e.toLowerCase()];if(r||(r=ss(e)),!!r)return`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${r}/${r}-${n}.svg`}function ds(e){if(Ur(e))return{light:ie,dark:ie,fallback:ie};const n=ps(e);if(n)return{light:n,dark:n,fallback:ie};const t=`https://cdn.simpleicons.org/${e.toLowerCase().replace(/[^a-z0-9]/g,"")}`;return{light:t,dark:t,fallback:ie}}const ae={AWS:u("aws.svg"),Bootstrap:u("bootstrap.svg"),C:u("c.svg"),Cpp:u("cpp.svg"),Celery:u("celery.svg"),Django:u("django.svg"),FastApi:u("fastapi"),Flask:u("flask.svg"),Go:u("go.svg"),Kafka:u("kafka.svg"),Neo4j:u("neo4j.svg"),Nginx:u("nginx.svg"),Numpy:u("numpy.svg"),Pandas:u("pandas.svg"),RabbitMQ:u("rabbitmq.svg"),Rust:u("rust.svg"),Scrapy:u("scrapy.png"),Selenium:u("selenium.svg"),Docker:u("docker.svg"),Kubernetes:u("kubernetes.svg"),Csharp:u("csharp.svg"),CSharp:u("csharp.svg"),Xamarin:u("xamarin.svg"),TypeScript:u("typescript-original.svg"),VueJs:u("vuejs-original.svg"),ReactJs:u("react.svg"),Dart:u("dart.png"),Kotlin:u("kotlin-original.svg"),Python:u("python.png"),NodeJs:u("nodejs-original.svg"),Deno:u("deno.svg"),Svelte:u("svelte.svg"),ExpressJs:u("express.png"),Express:u("express.png"),JavaScript:u("javascript-original.svg"),Fastify:u("fastify.svg"),NestJs:u("nest.svg"),Quasar:u("quasar.svg"),SolidJs:u("solid.svg"),Electron:u("electron.png"),Flutter:u("flutter.svg"),Java:u("java.png"),AdonisJs:u("adonis.png"),Android:u("android.png"),Angular:u("angular.png"),PostgreSQL:u("postgresql-original.svg"),Firebase:u("firebase.png"),Sass:u("sass.png"),Unknown:u("no-img.svg"),MongoDB:u("mongodb.svg"),Redis:u("redis.svg"),Tailwind:u("tailwind.svg"),TailwindCSS:u("tailwindcss-original.svg"),HTML:u("html.svg"),Premiere:u("premiere.svg"),Photoshop:u("photoshop.svg"),CSS:u("css.svg"),AfterEffects:u("after-effects.svg"),Illustrator:u("illustrator.svg"),Nuxt:u("nuxt.png"),Vite:u("vite.png"),Vitest:u("vitest.svg"),Jest:u("jest.png"),Unocss:u("unocss.svg"),Ruvy:u("ruvy.svg"),Postcss:u("postcss.svg"),Soleil:u("soleil.png"),AGH:u("agh.png"),InTech:u("intech.png"),ESIEA:u("esiea.png"),PMF:u("pmf.png"),Git:u("git-original.svg"),Linux:u("linux-original.svg"),SQLite:u("sqlite-original.svg"),CICD:u("cicd.svg"),Arduino:u("arduino-original.svg"),DotNet:u("dotnet-original.svg"),Grafana:u("grafana-original.svg"),Hugo:u("hugo-original.svg"),Ionic:u("ionic-original.svg"),MariaDB:u("mariadb-original.svg"),MySQL:u("mysql-original.svg"),OpenCV:u("opencv-original.svg"),Oracle:u("oracle-original.svg"),PHP:u("php-original.svg"),Postman:u("postman-original.svg"),Spring:u("spring-original.svg"),TensorFlow:u("tensorflow-original.svg"),Unity:u("unity-original.svg"),Apache:u("apache-original.svg"),Apache2:u("apache-original.svg"),Playwright:u("playwright-original.svg"),Streamlit:u("streamlit-original.svg"),RedisDB:u("redis-original.svg"),PaperMC:u("papermc.svg"),Velocity:u("velocity.svg"),BungeeCord:u("bungeecord.svg"),Spigot:u("spigot.svg"),Skript:u("skript.svg"),OpenXR:u("openxr.svg"),IntelliJ:u("intellij-original.svg"),PyCharm:u("pycharm-original.svg"),WebStorm:u("webstorm-original.svg"),CLion:u("clion-original.svg"),Rider:u("rider-original.svg"),DataGrip:u("datagrip-original.svg"),AndroidStudio:u("androidstudio-original.svg"),VSCode:u("vscode-original.svg"),Excel:u("excel.svg"),PowerPoint:u("powerpoint.svg"),Word:u("word.svg"),Jira:u("jira-original.svg"),Confluence:u("confluence-original.svg"),Teamwork:u("no-img.svg"),Autonomy:u("no-img.svg"),Creativity:u("no-img.svg"),MiniArticle:u("mini-article.png")};var M=(e=>(e.FullTime="Full-time",e.PartTime="Part-time",e.SelfEmployed="Self-employed",e.Freelance="Freelance",e.Contract="Contract",e.Internship="Internship",e.Apprenticeship="Apprenticeship",e))(M||{}),C=(e=>(e.Image="image",e.PDF="pdf",e.Document="document",e.Archive="archive",e.Video="video",e.Audio="audio",e.Code="code",e.Link="link",e.Other="other",e))(C||{});function Te(e,n=new Date){if(e instanceof Date&&!isNaN(e.getTime()))return e;if(typeof e=="string"){const r=e.match(/^(\d{4})-(\d{2})-(\d{2})$/);if(r){const[,i,a,o]=r;return new Date(parseInt(i),parseInt(a)-1,parseInt(o))}const t=new Date(e);if(!isNaN(t.getTime()))return t}return console.log("[parseDate] Failed to parse:",e,"- using fallback"),n}function Ee(e){if(e){if(e instanceof Date&&!isNaN(e.getTime()))return e;if(typeof e=="string"){const n=e.match(/^(\d{4})-(\d{2})-(\d{2})$/);if(n){const[,t,i,a]=n;return new Date(parseInt(t),parseInt(i)-1,parseInt(a))}const r=new Date(e);if(!isNaN(r.getTime()))return r}}}function Re(e){return e.light.includes("no-img")||e.light===ae.Unknown.light}function Z(e){if(!e)return ae.Unknown;let n=ae[e];if(n&&!Re(n))return n;const r=[e,e.charAt(0).toUpperCase()+e.slice(1),e.toUpperCase(),e.toLowerCase(),e.replace(/(?:^|[-_])(\w)/g,(o,l)=>l?l.toUpperCase():"")];for(const o of r)if(n=ae[o],n&&!Re(n))return n;const t={react:"ReactJs",node:"NodeJs",js:"JavaScript",ts:"TypeScript",vue:"VueJs",express:"ExpressJs",postgres:"PostgreSQL",postgresql:"PostgreSQL",mongo:"MongoDB",tailwindcss:"Tailwind"},i=e.toLowerCase();return t[i]&&(n=ae[t[i]],n&&!Re(n))?n:ds(e)}function on(e){return e?e.replace(/^#{1,6}\s+/gm,"").replace(/\*\*([^*]+)\*\*/g,"$1").replace(/\*([^*]+)\*/g,"$1").replace(/__([^_]+)__/g,"$1").replace(/_([^_]+)_/g,"$1").replace(/\[([^\]]+)\]\([^)]+\)/g,"$1").replace(/!\[[^\]]*\]\([^)]+\)/g,"").replace(/```[\s\S]*?```/g,"").replace(/`([^`]+)`/g,"$1").replace(/^[\s]*[-*+]\s+/gm,"").replace(/^[\s]*\d+\.\s+/gm,"").replace(/^>\s+/gm,"").replace(/^[-*_]{3,}$/gm,"").replace(/\n{2,}/g," ").replace(/\n/g," ").replace(/\s{2,}/g," ").trim():""}function Le(e){return Array.isArray(e)?e.map(n=>({to:n.to||"",label:n.label||"",newTab:n.newTab??!0})):[]}function fs(e){return Array.isArray(e)?e.map(n=>({src:n.src||"",label:n.label||""})):[]}function Hn(e){const n=e.toLowerCase();return/\.(jpg|jpeg|png|gif|webp|svg|bmp|ico)(\?.*)?$/i.test(n)||n.includes("unsplash.com")||n.includes("imgur.com")?C.Image:/\.pdf(\?.*)?$/i.test(n)?C.PDF:/\.(doc|docx|odt|rtf|txt|xls|xlsx|ppt|pptx)(\?.*)?$/i.test(n)?C.Document:/\.(zip|rar|7z|tar|gz|bz2)(\?.*)?$/i.test(n)?C.Archive:/\.(mp4|webm|avi|mov|mkv)(\?.*)?$/i.test(n)||n.includes("youtube.com")||n.includes("youtu.be")||n.includes("vimeo.com")?C.Video:/\.(mp3|wav|ogg|flac|aac)(\?.*)?$/i.test(n)?C.Audio:/\.(js|ts|py|java|c|cpp|cs|go|rs|rb|php|html|css|json|xml|yaml|yml|sh|bash)(\?.*)?$/i.test(n)||n.includes("github.com")||n.includes("gitlab.com")||n.includes("gist.github.com")?C.Code:n.startsWith("http://")||n.startsWith("https://")?C.Link:C.Other}function gs(e){return{[C.Image]:"i-carbon-image",[C.PDF]:"i-carbon-document-pdf",[C.Document]:"i-carbon-document",[C.Archive]:"i-carbon-zip",[C.Video]:"i-carbon-video",[C.Audio]:"i-carbon-music",[C.Code]:"i-carbon-code",[C.Link]:"i-carbon-link",[C.Other]:"i-carbon-attachment"}[e]||"i-carbon-attachment"}function je(e){return Array.isArray(e)?e.map(n=>{const r=n.src||n.url||"",t=n.type&&C[n.type]||Hn(r),i=r.startsWith("http://")||r.startsWith("https://");return{label:n.label||n.name||"Pièce jointe",src:r,type:t,description:n.description||void 0,size:n.size||void 0,icon:n.icon||gs(t),newTab:n.newTab??i}}):[]}function ms(e){return{FullTime:M.FullTime,"Full-time":M.FullTime,PartTime:M.PartTime,"Part-time":M.PartTime,SelfEmployed:M.SelfEmployed,"Self-employed":M.SelfEmployed,Freelance:M.Freelance,Contract:M.Contract,Internship:M.Internship,Apprenticeship:M.Apprenticeship}[e||""]||M.Contract}function me(e){return(e.split("/").pop()||"").replace(/\.(md|yaml|yml)$/,"")}function ee(e,n){const r=e.replace(/\r\n/g,`
`).replace(/\r/g,`
`),t=/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/,i=r.match(t);if(!i)return console.log(`[parseMarkdownFile] No frontmatter found for ${n}, raw starts with:`,r.substring(0,50)),{meta:{slug:n},content:r};const[,a,o]=i;try{const l=ge.load(a);return console.log(`[parseMarkdownFile] Parsed ${n}:`,JSON.stringify(l)),{meta:{...l,slug:n},content:o.trim()}}catch(l){return console.error(`Error parsing frontmatter for ${n}:`,l),{meta:{slug:n},content:(o==null?void 0:o.trim())||r}}}const Ke=[{name:"Programming Languages",slug:"pro-lang"},{name:"Frameworks",slug:"framework"},{name:"Libraries",slug:"library"},{name:"Languages",slug:"lang"},{name:"Databases",slug:"db"},{name:"ORMs",slug:"orm"},{name:"DevOps",slug:"devops"},{name:"Testing",slug:"test"},{name:"Dev Tools",slug:"devtools"},{name:"Markup & Style",slug:"markup-style"},{name:"Design",slug:"design"},{name:"Soft Skills",slug:"soft"}];function hs(e){if(e)return Ke.find(n=>n.slug===e)}const vs=Object.assign({"/content/blog/blog-platform-demo.md":Wi,"/content/blog/georges-le-chat.md":Qi,"/content/blog/getting-started-with-svelte.md":Xi,"/content/blog/mini-article.md":Zi,"/content/blog/modern-css-techniques.md":et,"/content/blog/sveltekit-full-stack-framework.md":nt,"/content/blog/typescript-best-practices.md":rt}),bs=Object.assign({"/content/projects/nano-pong.md":it,"/content/projects/template-project.md":tt,"/content/projects/template-svelte.md":ot}),Gn=Object.assign({"/content/skills/android-studio.md":at,"/content/skills/apache2.md":lt,"/content/skills/arduino.md":st,"/content/skills/autonomy.md":ct,"/content/skills/bungeecord.md":ut,"/content/skills/c.md":pt,"/content/skills/ci-cd.md":dt,"/content/skills/clion.md":ft,"/content/skills/confluence.md":gt,"/content/skills/creativity.md":mt,"/content/skills/csharp.md":ht,"/content/skills/css.md":vt,"/content/skills/dart.md":bt,"/content/skills/datagrip.md":_t,"/content/skills/docker-swarm.md":yt,"/content/skills/docker.md":xt,"/content/skills/dotnet.md":St,"/content/skills/electron.md":At,"/content/skills/excel.md":wt,"/content/skills/expressjs.md":kt,"/content/skills/firebase.md":Ct,"/content/skills/flask.md":Tt,"/content/skills/flutter.md":Et,"/content/skills/git.md":Lt,"/content/skills/grafana.md":jt,"/content/skills/html.md":Pt,"/content/skills/hugo.md":It,"/content/skills/intellij.md":Dt,"/content/skills/ionic.md":Ft,"/content/skills/java.md":Mt,"/content/skills/javafx.md":Nt,"/content/skills/javascript.md":Ot,"/content/skills/jee.md":qt,"/content/skills/jira.md":Rt,"/content/skills/kotlin.md":Bt,"/content/skills/kubernetes.md":Ht,"/content/skills/linux.md":Gt,"/content/skills/mariadb.md":Ut,"/content/skills/minikube.md":Jt,"/content/skills/mongodb.md":zt,"/content/skills/mysql.md":Vt,"/content/skills/nginx.md":Yt,"/content/skills/nodejs.md":$t,"/content/skills/opencv.md":Kt,"/content/skills/openxr.md":Wt,"/content/skills/oracle.md":Qt,"/content/skills/pandas.md":Xt,"/content/skills/papermc.md":Zt,"/content/skills/photoshop.md":eo,"/content/skills/php.md":no,"/content/skills/playwright.md":ro,"/content/skills/postgresql.md":io,"/content/skills/postman.md":to,"/content/skills/powerpoint.md":oo,"/content/skills/pycharm.md":ao,"/content/skills/python.md":lo,"/content/skills/reactjs.md":so,"/content/skills/redis.md":co,"/content/skills/rider.md":uo,"/content/skills/rust.md":po,"/content/skills/sass.md":fo,"/content/skills/selenium.md":go,"/content/skills/skript.md":mo,"/content/skills/spigot.md":ho,"/content/skills/spring.md":vo,"/content/skills/springboot.md":bo,"/content/skills/sqlite.md":_o,"/content/skills/streamlit.md":yo,"/content/skills/svelte.md":xo,"/content/skills/tailwind.md":So,"/content/skills/teamwork.md":Ao,"/content/skills/tensorflow.md":wo,"/content/skills/typescript.md":ko,"/content/skills/unity.md":Co,"/content/skills/velocity.md":To,"/content/skills/vscode.md":Eo,"/content/skills/vuejs.md":Lo,"/content/skills/webstorm.md":jo,"/content/skills/word.md":Po}),_s=Object.assign({"/content/experience/agh-batiment.md":Io,"/content/experience/synchrotron-soleil.md":Do}),ys=Object.assign({"/content/education/esiea.md":Fo,"/content/education/intech.md":Mo,"/content/education/pmf.md":No});let Be=null;function an(){if(Be)return Be;console.log("[loadAllSkills] Starting to load skills..."),console.log("[loadAllSkills] skillFiles keys:",Object.keys(Gn));const e=[];for(const[n,r]of Object.entries(Gn)){const t=me(n),{meta:i,content:a}=ee(r,t);if(i.published===!1){console.log(`[loadAllSkills] Skipping ${t} (published: false)`);continue}console.log(`[loadAllSkills] Processing ${t}:`,{name:i.name,logo:i.logo,rawLogoType:typeof i.logo}),e.push({slug:i.slug||t,name:i.name||t,logo:Z(i.logo),description:a||i.name||"",color:i.color||"gray",category:hs(i.category)})}return Be=e,e}function Jr(...e){const n=an();return e.length===0?n:n.filter(r=>e.includes(r.slug))}function zs(e=""){const n=an(),r=[],t=[];return n.forEach(i=>{if(e.trim()&&!i.name.toLowerCase().includes(e.trim().toLowerCase()))return;if(!i.category){t.push(i);return}let a=r.find(o=>{var l;return o.category.slug===((l=i.category)==null?void 0:l.slug)});a||(a={items:[],category:i.category},r.push(a)),a.items.push(i)}),t.length!==0&&r.push({category:{name:"Others",slug:"others"},items:t}),r.sort((i,a)=>{const o=Ke.findIndex(s=>s.slug===i.category.slug),l=Ke.findIndex(s=>s.slug===a.category.slug);return o===-1?1:l===-1?-1:o-l}),r.forEach(i=>{i.items.sort((a,o)=>a.name.localeCompare(o.name))}),r}function xs(){const e=[];for(const[n,r]of Object.entries(vs)){const t=me(n),{meta:i,content:a}=ee(r,t);i.published!==!1&&e.push({slug:i.slug||t,name:i.name||i.title||t,title:i.title||i.name||t,logo:Z(i.logo),excerpt:i.excerpt||"",shortDescription:i.excerpt||"",description:a,content:a,author:i.author||"Anonymous",publishedAt:Te(i.publishedAt),updatedAt:Ee(i.updatedAt),tags:i.tags||[],coverImage:i.coverImage?Z(i.coverImage):void 0,readingTime:i.readingTime||Math.ceil(a.split(/\s+/).length/200),color:i.color,links:Le(i.links),pinned:i.pinned||!1})}return e.sort((n,r)=>r.publishedAt.getTime()-n.publishedAt.getTime())}function Ss(){var n,r;const e=[];for(const[t,i]of Object.entries(bs)){const a=me(t),{meta:o,content:l}=ee(i,a);o.published!==!1&&e.push({slug:o.slug||a,name:o.name||a,logo:Z(o.logo),shortDescription:on(l).substring(0,200),description:l,color:o.color||"gray",type:o.type||"Project",period:{from:Te((n=o.period)==null?void 0:n.from),to:Ee((r=o.period)==null?void 0:r.to)},skills:Jr(...o.skills||[]),links:Le(o.links),screenshots:fs(o.screenshots),attachments:je(o.attachments)})}return e.sort((t,i)=>i.period.from.getTime()-t.period.from.getTime())}function As(){var n,r,t;const e=[];for(const[i,a]of Object.entries(_s)){const o=me(i),{meta:l,content:s}=ee(a,o);l.published!==!1&&(console.log(`[loadAllExperiences] ${o}:`,{name:l.name,shortDescription:(n=l.shortDescription)==null?void 0:n.substring(0,50),period:l.period}),e.push({slug:l.slug||o,name:l.name||o,logo:Z(l.logo),shortDescription:l.shortDescription||on(s).substring(0,200),description:s,company:l.company||"",location:l.location||"",contract:ms(l.contract),type:l.type||"Development",color:l.color||"gray",period:{from:Te((r=l.period)==null?void 0:r.from),to:Ee((t=l.period)==null?void 0:t.to)},skills:Jr(...l.skills||[]),links:Le(l.links),attachments:je(l.attachments)}))}return e.sort((i,a)=>a.period.from.getTime()-i.period.from.getTime())}function ws(){var n,r;const e=[];for(const[t,i]of Object.entries(ys)){const a=me(t),{meta:o,content:l}=ee(i,a);o.published!==!1&&e.push({slug:o.slug||a,name:o.name||a,logo:Z(o.logo),shortDescription:o.shortDescription||on(l).substring(0,200),description:l,degree:o.degree||"",organization:o.organization||"",location:o.location||"",color:o.color,period:{from:Te((n=o.period)==null?void 0:n.from),to:Ee((r=o.period)==null?void 0:r.to)},subjects:o.subjects||[],links:Le(o.links),attachments:je(o.attachments)})}return e.sort((t,i)=>i.period.from.getTime()-t.period.from.getTime())}const ks=Object.assign({"/content/about.md":Oo});function Cs(){const e=Object.values(ks)[0];if(!e)return console.log("[loadAboutPage] No about.md file found"),{title:"À propos",content:"",attachments:[]};const{meta:n,content:r}=ee(e,"about");return{title:n.title||"À propos",content:r,attachments:je(n.attachments)}}const Ts=Object.assign({"/content/site.yaml":qo}),Es=Object.assign({"/content/pages/home.yaml":Ro}),Ls=Object.assign({"/content/pages/resume.yaml":Bo}),js=Object.assign({"/content/pages/contact.yaml":Ho});function ln(){const e=Object.values(Ts)[0];if(!e)return{firstName:"Prénom",lastName:"NOM",jobTitle:"Développeur",email:"contact@example.com",socialLinks:[],inConstruction:{enabled:!1,title:"",message:""}};const n=e.replace(/\r\n/g,`
`).replace(/\r/g,`
`),r=ge.load(n),t=r.inConstruction;return{firstName:r.firstName||"Prénom",lastName:r.lastName||"NOM",jobTitle:r.jobTitle||"Développeur",email:r.email||"contact@example.com",socialLinks:(r.socialLinks||[]).map(i=>({label:i.label,href:i.href,icon:i.icon})),inConstruction:{enabled:(t==null?void 0:t.enabled)??!1,title:(t==null?void 0:t.title)||"",message:(t==null?void 0:t.message)||""}}}function Ps(){const e=ln(),n=Object.values(Es)[0];let r="Accueil",t="";if(n){const i=n.replace(/\r\n/g,`
`).replace(/\r/g,`
`),a=ge.load(i);r=a.title||"Accueil";const o=a.hero;t=(o==null?void 0:o.description)||""}return{title:r,heroDescription:t,socialLinks:e.socialLinks,fullName:`${e.firstName} ${e.lastName}`}}function Is(){const e=Object.values(Ls)[0];if(!e)return{title:"CV",pdfPath:"/pdf/cv.pdf",downloadLabel:"Télécharger",fullscreenLabel:"Plein écran"};const n=e.replace(/\r\n/g,`
`).replace(/\r/g,`
`),r=ge.load(n);return{title:r.title||"CV",pdfPath:r.pdfPath||"/pdf/cv.pdf",downloadLabel:r.downloadLabel||"Télécharger",fullscreenLabel:r.fullscreenLabel||"Plein écran"}}function Ds(){const e=ln(),n=Object.values(js)[0],r={title:"Contact",description:"N'hésitez pas à me contacter.",email:e.email,form:{nameLabel:"Nom",namePlaceholder:"Votre nom",emailLabel:"Email",emailPlaceholder:"votre@email.com",messageLabel:"Message",messagePlaceholder:"Votre message...",submitLabel:"Envoyer",sendingLabel:"Envoi en cours..."},messages:{success:"Message envoyé avec succès !",error:"Une erreur est survenue.",validationError:"Veuillez remplir tous les champs."}};if(!n)return r;const t=n.replace(/\r\n/g,`
`).replace(/\r/g,`
`),i=ge.load(t),a=i.form,o=i.messages;return{title:i.title||r.title,description:i.description||r.description,email:i.email||r.email,form:{nameLabel:(a==null?void 0:a.nameLabel)||r.form.nameLabel,namePlaceholder:(a==null?void 0:a.namePlaceholder)||r.form.namePlaceholder,emailLabel:(a==null?void 0:a.emailLabel)||r.form.emailLabel,emailPlaceholder:(a==null?void 0:a.emailPlaceholder)||r.form.emailPlaceholder,messageLabel:(a==null?void 0:a.messageLabel)||r.form.messageLabel,messagePlaceholder:(a==null?void 0:a.messagePlaceholder)||r.form.messagePlaceholder,submitLabel:(a==null?void 0:a.submitLabel)||r.form.submitLabel,sendingLabel:(a==null?void 0:a.sendingLabel)||r.form.sendingLabel},messages:{success:(o==null?void 0:o.success)||r.messages.success,error:(o==null?void 0:o.error)||r.messages.error,validationError:(o==null?void 0:o.validationError)||r.messages.validationError}}}const Un=ln(),Vs=Ps(),Ys=Is(),$s=Ds(),Ks=Cs(),Ws={title:"Blog",items:xs()},Qs={title:"Projets",items:Ss()},Xs={title:"Skills",items:an()},Zs={title:"Expérience",items:As()},ec={title:"Formation",items:ws()},Fs=`${Un.firstName} ${Un.lastName}`,Ms={title:Fs,icon:"i-carbon-code"},Ns=[{title:"À Propos",icon:"i-carbon-user",href:"/about"},{title:"Skills",icon:"i-carbon-assembly-cluster",href:"/skills"},{title:"Projets",icon:"i-carbon-cube",href:"/projects"},{title:"Experience",icon:"i-carbon-development",href:"/experience"},{title:"Formation",icon:"i-carbon-education",href:"/education"},{title:"Blog",icon:"i-carbon-blog",href:"/blog"},{title:"CV",icon:"i-carbon-document",href:"/resume"},{title:"Contact",icon:"i-carbon-email",href:"/contact"}],nc={left:Ms,items:Ns};export{ae as A,Ws as B,$s as C,Zs as E,Vs as H,nc as N,Qs as P,Ys as R,Xs as S,Bs as a,Us as b,ec as c,zs as d,Hs as e,Gi as f,Jr as g,Ks as h,Js as i,C as j,Ri as k,Un as l,Ui as m,re as n,Gs as o,qi as p,zi as r,ye as s};
