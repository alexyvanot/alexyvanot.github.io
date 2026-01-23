import{ag as Fe,k as Yr,b7 as zn,i as I,at as Ie,aB as Vr,j as $r,g as se,aV as Jr,ac as Kr,au as gn,aL as ae,aa as he,ab as Wr,aQ as Qr,ar as hn,aS as Zr,b8 as B,ad as ce,aU as Xr,x as ei,a0 as Yn,aO as We,b9 as ni,ba as ri,m as ii,J as vn,bb as ti,aT as Vn,af as $n,bc as Pe,z as Jn,bd as oi,aN as li,as as ye,aJ as ai,be as Kn,q as Wn,bf as si,A as ci,bg as ui,bh as pi,bi as di,bj as fi,bk as mi,bl as gi,bm as hi,bn as vi,bo as bi,bp as yi,_ as _i,a2 as xi,v as bn,h as Si,bq as Ai,Y as yn,e as wi,O as ki,br as Ci}from"./CrEmclJz.js";import{o as Ti,p as Li,d as Ei,q as ji,v as Fi}from"./B5sLhNz6.js";import{b as Ii,r as Pi}from"./iXiWYASh.js";function Ss(e,n){return n}function Di(e,n,r){for(var t=[],i=n.length,l,o=n.length,a=0;a<i;a++){let u=n[a];$n(u,()=>{if(l){if(l.pending.delete(u),l.done.add(u),l.pending.size===0){var f=e.outrogroups;He(We(l.done)),f.delete(l),f.size===0&&(e.outrogroups=null)}}else o-=1},!1)}if(o===0){var s=t.length===0&&r!==null;if(s){var c=r,d=c.parentNode;li(d),d.append(c),e.items.clear()}He(n,!s)}else l={pending:new Set(n),done:new Set},(e.outrogroups??(e.outrogroups=new Set)).add(l)}function He(e,n=!0){for(var r=0;r<e.length;r++)ye(e[r],n)}var _n;function As(e,n,r,t,i,l=null){var o=e,a=new Map,s=(n&zn)!==0;if(s){var c=e;o=I?Ie(Vr(c)):c.appendChild(Fe())}I&&$r();var d=null,u=ei(()=>{var v=r();return Yn(v)?v:v==null?[]:We(v)}),f,g=!0;function b(){m.fallback=d,Oi(m,f,o,n,t),d!==null&&(f.length===0?(d.f&B)===0?Vn(d):(d.f^=B,te(d,null,o)):$n(d,()=>{d=null}))}var y=Yr(()=>{f=se(u);var v=f.length;let _=!1;if(I){var N=Jr(o)===Kr;N!==(v===0)&&(o=gn(),Ie(o),ae(!1),_=!0)}for(var w=new Set,M=Zr,S=Xr(),x=0;x<v;x+=1){I&&he.nodeType===Wr&&he.data===Qr&&(o=he,_=!0,ae(!1));var k=f[x],D=t(k,x),A=g?null:a.get(D);A?(A.v&&hn(A.v,k),A.i&&hn(A.i,x),S&&M.skipped_effects.delete(A.e)):(A=Ni(a,g?o:_n??(_n=Fe()),k,D,x,i,n,r),g||(A.e.f|=B),a.set(D,A)),w.add(D)}if(v===0&&l&&!d&&(g?d=ce(()=>l(o)):(d=ce(()=>l(_n??(_n=Fe()))),d.f|=B)),I&&v>0&&Ie(gn()),!g)if(S){for(const[V,$]of a)w.has(V)||M.skipped_effects.add($.e);M.oncommit(b),M.ondiscard(()=>{})}else b();_&&ae(!0),se(u)}),m={effect:y,items:a,outrogroups:null,fallback:d};g=!1,I&&(o=he)}function Oi(e,n,r,t,i){var A,V,$,sn,cn,un,pn,dn,fn;var l=(t&oi)!==0,o=n.length,a=e.items,s=e.effect.first,c,d=null,u,f=[],g=[],b,y,m,v;if(l)for(v=0;v<o;v+=1)b=n[v],y=i(b,v),m=a.get(y).e,(m.f&B)===0&&((V=(A=m.nodes)==null?void 0:A.a)==null||V.measure(),(u??(u=new Set)).add(m));for(v=0;v<o;v+=1){if(b=n[v],y=i(b,v),m=a.get(y).e,e.outrogroups!==null)for(const R of e.outrogroups)R.pending.delete(m),R.done.delete(m);if((m.f&B)!==0)if(m.f^=B,m===s)te(m,null,r);else{var _=d?d.next:s;m===e.effect.last&&(e.effect.last=m.prev),m.prev&&(m.prev.next=m.next),m.next&&(m.next.prev=m.prev),G(e,d,m),G(e,m,_),te(m,_,r),d=m,f=[],g=[],s=d.next;continue}if((m.f&Pe)!==0&&(Vn(m),l&&((sn=($=m.nodes)==null?void 0:$.a)==null||sn.unfix(),(u??(u=new Set)).delete(m))),m!==s){if(c!==void 0&&c.has(m)){if(f.length<g.length){var N=g[0],w;d=N.prev;var M=f[0],S=f[f.length-1];for(w=0;w<f.length;w+=1)te(f[w],N,r);for(w=0;w<g.length;w+=1)c.delete(g[w]);G(e,M.prev,S.next),G(e,d,M),G(e,S,N),s=N,d=S,v-=1,f=[],g=[]}else c.delete(m),te(m,s,r),G(e,m.prev,m.next),G(e,m,d===null?e.effect.first:d.next),G(e,d,m),d=m;continue}for(f=[],g=[];s!==null&&s!==m;)(c??(c=new Set)).add(s),g.push(s),s=s.next;if(s===null)continue}(m.f&B)===0&&f.push(m),d=m,s=m.next}if(e.outrogroups!==null){for(const R of e.outrogroups)R.pending.size===0&&(He(We(R.done)),(cn=e.outrogroups)==null||cn.delete(R));e.outrogroups.size===0&&(e.outrogroups=null)}if(s!==null||c!==void 0){var x=[];if(c!==void 0)for(m of c)(m.f&Pe)===0&&x.push(m);for(;s!==null;)(s.f&Pe)===0&&s!==e.fallback&&x.push(s),s=s.next;var k=x.length;if(k>0){var D=(t&zn)!==0&&o===0?r:null;if(l){for(v=0;v<k;v+=1)(pn=(un=x[v].nodes)==null?void 0:un.a)==null||pn.measure();for(v=0;v<k;v+=1)(fn=(dn=x[v].nodes)==null?void 0:dn.a)==null||fn.fix()}Di(e,x,D)}}l&&Jn(()=>{var R,mn;if(u!==void 0)for(m of u)(mn=(R=m.nodes)==null?void 0:R.a)==null||mn.apply()})}function Ni(e,n,r,t,i,l,o,a){var s=(o&ni)!==0?(o&ri)===0?ii(r,!1,!1):vn(r):null,c=(o&ti)!==0?vn(i):null;return{v:s,i:c,e:ce(()=>(l(n,s??r,c??i,a),()=>{e.delete(t)}))}}function te(e,n,r){if(e.nodes)for(var t=e.nodes.start,i=e.nodes.end,l=n&&(n.f&B)===0?n.nodes.start:r;t!==null;){var o=ai(t);if(l.before(t),t===i)return;t=o}}function G(e,n,r){n===null?e.effect.first=r:n.next=r,r===null?e.effect.last=n:r.prev=n}function Mi(e,n){var r=void 0,t;Kn(()=>{r!==(r=n())&&(t&&(ye(t),t=null),r&&(t=ce(()=>{Wn(()=>r(e))})))})}function Qn(e){var n,r,t="";if(typeof e=="string"||typeof e=="number")t+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(n=0;n<i;n++)e[n]&&(r=Qn(e[n]))&&(t&&(t+=" "),t+=r)}else for(r in e)e[r]&&(t&&(t+=" "),t+=r);return t}function qi(){for(var e,n,r=0,t="",i=arguments.length;r<i;r++)(e=arguments[r])&&(n=Qn(e))&&(t&&(t+=" "),t+=n);return t}function Ri(e){return typeof e=="object"?qi(e):e??""}const xn=[...` 	
\r\f \v\uFEFF`];function Bi(e,n,r){var t=e==null?"":""+e;if(n&&(t=t?t+" "+n:n),r){for(var i in r)if(r[i])t=t?t+" "+i:i;else if(t.length)for(var l=i.length,o=0;(o=t.indexOf(i,o))>=0;){var a=o+l;(o===0||xn.includes(t[o-1]))&&(a===t.length||xn.includes(t[a]))?t=(o===0?"":t.substring(0,o))+t.substring(a+1):o=a}}return t===""?null:t}function Sn(e,n=!1){var r=n?" !important;":";",t="";for(var i in e){var l=e[i];l!=null&&l!==""&&(t+=" "+i+": "+l+r)}return t}function De(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function Hi(e,n){if(n){var r="",t,i;if(Array.isArray(n)?(t=n[0],i=n[1]):t=n,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var l=!1,o=0,a=!1,s=[];t&&s.push(...Object.keys(t).map(De)),i&&s.push(...Object.keys(i).map(De));var c=0,d=-1;const y=e.length;for(var u=0;u<y;u++){var f=e[u];if(a?f==="/"&&e[u-1]==="*"&&(a=!1):l?l===f&&(l=!1):f==="/"&&e[u+1]==="*"?a=!0:f==='"'||f==="'"?l=f:f==="("?o++:f===")"&&o--,!a&&l===!1&&o===0){if(f===":"&&d===-1)d=u;else if(f===";"||u===y-1){if(d!==-1){var g=De(e.substring(c,d).trim());if(!s.includes(g)){f!==";"&&u++;var b=e.substring(c,u).trim();r+=" "+b+";"}}c=u+1,d=-1}}}}return t&&(r+=Sn(t)),i&&(r+=Sn(i,!0)),r=r.trim(),r===""?null:r}return e==null?null:String(e)}function Gi(e,n,r,t,i,l){var o=e.__className;if(I||o!==r||o===void 0){var a=Bi(r,t,l);(!I||a!==e.getAttribute("class"))&&(a==null?e.removeAttribute("class"):n?e.className=a:e.setAttribute("class",a)),e.__className=r}else if(l&&i!==l)for(var s in l){var c=!!l[s];(i==null||c!==!!i[s])&&e.classList.toggle(s,c)}return l}function Oe(e,n={},r,t){for(var i in r){var l=r[i];n[i]!==l&&(r[i]==null?e.style.removeProperty(i):e.style.setProperty(i,l,t))}}function Ui(e,n,r,t){var i=e.__style;if(I||i!==n){var l=Hi(n,t);(!I||l!==e.getAttribute("style"))&&(l==null?e.removeAttribute("style"):e.style.cssText=l),e.__style=n}else t&&(Array.isArray(t)?(Oe(e,r==null?void 0:r[0],t[0]),Oe(e,r==null?void 0:r[1],t[1],"important")):Oe(e,r,t));return t}function Ge(e,n,r=!1){if(e.multiple){if(n==null)return;if(!Yn(n))return ui();for(var t of e.options)t.selected=n.includes(An(t));return}for(t of e.options){var i=An(t);if(si(i,n)){t.selected=!0;return}}(!r||n!==void 0)&&(e.selectedIndex=-1)}function zi(e){var n=new MutationObserver(()=>{Ge(e,e.__value)});n.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),ci(()=>{n.disconnect()})}function An(e){return"__value"in e?e.__value:e.value}const ne=Symbol("class"),re=Symbol("style"),Zn=Symbol("is custom element"),Xn=Symbol("is html");function Yi(e){if(I){var n=!1,r=()=>{if(!n){if(n=!0,e.hasAttribute("value")){var t=e.value;_e(e,"value",null),e.value=t}if(e.hasAttribute("checked")){var i=e.checked;_e(e,"checked",null),e.checked=i}}};e.__on_r=r,Jn(r),gi()}}function ws(e,n){var r=Qe(e);r.value===(r.value=n??void 0)||e.value===n&&(n!==0||e.nodeName!=="PROGRESS")||(e.value=n??"")}function Vi(e,n){n?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function _e(e,n,r,t){var i=Qe(e);I&&(i[n]=e.getAttribute(n),n==="src"||n==="srcset"||n==="href"&&e.nodeName==="LINK")||i[n]!==(i[n]=r)&&(n==="loading"&&(e[bi]=r),r==null?e.removeAttribute(n):typeof r!="string"&&er(e).includes(n)?e[n]=r:e.setAttribute(n,r))}function $i(e,n,r,t,i=!1,l=!1){if(I&&i&&e.tagName==="INPUT"){var o=e,a=o.type==="checkbox"?"defaultChecked":"defaultValue";a in r||Yi(o)}var s=Qe(e),c=s[Zn],d=!s[Xn];let u=I&&c;u&&ae(!1);var f=n||{},g=e.tagName==="OPTION";for(var b in n)b in r||(r[b]=null);r.class?r.class=Ri(r.class):(t||r[ne])&&(r.class=null),r[re]&&(r.style??(r.style=null));var y=er(e);for(const S in r){let x=r[S];if(g&&S==="value"&&x==null){e.value=e.__value="",f[S]=x;continue}if(S==="class"){var m=e.namespaceURI==="http://www.w3.org/1999/xhtml";Gi(e,m,x,t,n==null?void 0:n[ne],r[ne]),f[S]=x,f[ne]=r[ne];continue}if(S==="style"){Ui(e,x,n==null?void 0:n[re],r[re]),f[S]=x,f[re]=r[re];continue}var v=f[S];if(!(x===v&&!(x===void 0&&e.hasAttribute(S)))){f[S]=x;var _=S[0]+S[1];if(_!=="$$")if(_==="on"){const k={},D="$$"+S;let A=S.slice(2);var N=Fi(A);if(Ti(A)&&(A=A.slice(0,-7),k.capture=!0),!N&&v){if(x!=null)continue;e.removeEventListener(A,f[D],k),f[D]=null}if(x!=null)if(N)e[`__${A}`]=x,Ei([A]);else{let V=function($){f[S].call(this,$)};f[D]=Li(A,e,V,k)}else N&&(e[`__${A}`]=void 0)}else if(S==="style")_e(e,S,x);else if(S==="autofocus")fi(e,!!x);else if(!c&&(S==="__value"||S==="value"&&x!=null))e.value=e.__value=x;else if(S==="selected"&&g)Vi(e,x);else{var w=S;d||(w=ji(w));var M=w==="defaultValue"||w==="defaultChecked";if(x==null&&!c&&!M)if(s[S]=null,w==="value"||w==="checked"){let k=e;const D=n===void 0;if(w==="value"){let A=k.defaultValue;k.removeAttribute(w),k.defaultValue=A,k.value=k.__value=D?A:null}else{let A=k.defaultChecked;k.removeAttribute(w),k.defaultChecked=A,k.checked=D?A:!1}}else e.removeAttribute(S);else M||y.includes(w)&&(c||typeof x!="string")?(e[w]=x,w in s&&(s[w]=mi)):typeof x!="function"&&_e(e,w,x)}}}return u&&ae(!0),f}function ks(e,n,r=[],t=[],i=[],l,o=!1,a=!1){pi(i,r,t,s=>{var c=void 0,d={},u=e.nodeName==="SELECT",f=!1;if(Kn(()=>{var b=n(...s.map(se)),y=$i(e,c,b,l,o,a);f&&u&&"value"in b&&Ge(e,b.value);for(let v of Object.getOwnPropertySymbols(d))b[v]||ye(d[v]);for(let v of Object.getOwnPropertySymbols(b)){var m=b[v];v.description===di&&(!c||m!==c[v])&&(d[v]&&ye(d[v]),d[v]=ce(()=>Mi(e,()=>m))),y[v]=m}c=y}),u){var g=e;Wn(()=>{Ge(g,c.value,!0),zi(g)})}f=!0})}function Qe(e){return e.__attributes??(e.__attributes={[Zn]:e.nodeName.includes("-"),[Xn]:e.namespaceURI===hi})}var wn=new Map;function er(e){var n=e.getAttribute("is")||e.nodeName,r=wn.get(n);if(r)return r;wn.set(n,r=[]);for(var t,i=e,l=Element.prototype;l!==i;){t=yi(i);for(var o in t)t[o].set&&r.push(o);i=vi(i)}return r}function Cs(e=!1){const n=_i,r=n.l.u;if(!r)return;let t=()=>wi(n.s);if(e){let i=0,l={};const o=ki(()=>{let a=!1;const s=n.s;for(const c in s)s[c]!==l[c]&&(l[c]=s[c],a=!0);return a&&i++,i});t=()=>se(o)}r.b.length&&xi(()=>{kn(n,t),yn(r.b)}),bn(()=>{const i=Si(()=>r.m.map(Ai));return()=>{for(const l of i)typeof l=="function"&&l()}}),r.a.length&&bn(()=>{kn(n,t),yn(r.a)})}function kn(e,n){if(e.l.s)for(const r of e.l.s)se(r);n()}const Ji="";function Ki(...e){return Ii+Ji+Pi(e[0],e[1])}Ci();const Wi=`---
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
`,Zi=`---
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
`,Xi=`---
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
name: Apache2
slug: apache2
published: true
category: devops
color: red
logo: Apache
---

Serveur web HTTP open-source. Configuration de virtual hosts, reverse proxy et modules.
`,lt=`---
name: Arduino
slug: arduino
published: true
category: devtools
color: teal
logo: Arduino
---

Programmation de microcontrôleurs pour des projets IoT et électronique embarquée.
`,at=`---
name: Autonomie & apprentissage
slug: autonomy
published: true
category: soft
color: blue
logo: Autonomy
---

Capacité à apprendre par moi-même, à m'auto-former rapidement, et à être force de proposition.
`,st=`---
name: BungeeCord / Waterfall
slug: bungeecord
published: true
category: devtools
color: yellow
logo: BungeeCord
---

Proxy Minecraft pour connecter plusieurs serveurs. Waterfall est un fork optimisé avec corrections de bugs.
`,ct=`---
name: C
slug: c
published: true
category: pro-lang
color: gray
logo: C
---

Langage bas niveau utilisé pour la programmation système et les performances critiques.
`,ut=`---
name: CI/CD
slug: ci-cd
published: true
category: devops
color: gray
logo: CICD
---

Mise en place de pipelines CI/CD via GitLab. Automatisation des tests et déploiement.
`,pt=`---
name: Créativité
slug: creativity
published: true
category: soft
color: purple
logo: Creativity
---

Création d'expériences originales, notamment en réalité virtuelle ou dans la conception d'UI.
`,dt=`---
name: C#
slug: csharp
published: true
category: pro-lang
color: purple
logo: CSharp
---

Langage orienté objet de Microsoft, utilisé pour le développement .NET et Unity.
`,ft=`---
name: CSS
slug: css
published: true
category: markup-style
color: blue
logo: CSS
---

Mise en forme des interfaces. Utilisé avec Sass ou Tailwind selon les projets.
`,mt=`---
name: Dart
slug: dart
published: true
category: pro-lang
color: cyan
logo: Dart
---

Langage de Google utilisé principalement avec Flutter pour le développement mobile cross-platform.
`,gt=`---
name: Docker Swarm
slug: docker-swarm
published: true
category: devops
color: blue
logo: Docker
---

Orchestration native de Docker pour le clustering et le déploiement de services distribués.
`,ht=`---
name: Docker
slug: docker
published: true
category: devops
color: blue
logo: Docker
---

Conteneurisation d'applications. Utilisé pour créer des environnements de test ou déployer des apps.
`,vt=`---
name: .NET
slug: dotnet
published: true
category: framework
color: purple
logo: DotNet
---

Framework Microsoft pour le développement d'applications web, desktop et cloud.
`,bt=`---
name: Electron
slug: electron
published: true
category: framework
color: cyan
logo: Electron
---

Framework pour créer des applications desktop cross-platform avec les technologies web.
`,yt=`---
name: Express.js
slug: expressjs
published: true
category: framework
color: gray
logo: Express
---

Framework minimaliste pour Node.js, utilisé pour créer des APIs REST et des serveurs web.
`,_t=`---
name: Firebase
slug: firebase
published: true
category: devops
color: orange
logo: Firebase
---

Plateforme Google pour le backend-as-a-service : authentification, base de données temps réel, hosting.
`,xt=`---
name: Flask
slug: flask
published: true
category: framework
color: gray
logo: Flask
---

Micro-framework Python léger pour le développement web et d'APIs.
`,St=`---
name: Flutter
slug: flutter
published: true
category: framework
color: cyan
logo: Flutter
---

Framework UI de Google pour créer des applications mobiles, web et desktop à partir d'une seule codebase.
`,At=`---
name: Git
slug: git
published: true
category: devtools
color: orange
logo: Git
---

Système de versionnement utilisé dans tous mes projets. Workflow GitLab et GitHub.
`,wt=`---
name: Grafana
slug: grafana
published: true
category: devops
color: orange
logo: Grafana
---

Plateforme de visualisation et monitoring pour métriques et logs.
`,kt=`---
name: HTML
slug: html
published: true
category: markup-style
color: orange
logo: HTML
---

Structure des pages web. Maîtrisé depuis mes débuts.
`,Ct=`---
name: Hugo
slug: hugo
published: true
category: framework
color: pink
logo: Hugo
---

Générateur de sites statiques ultra-rapide écrit en Go.
`,Tt=`---
name: Ionic
slug: ionic
published: true
category: framework
color: blue
logo: Ionic
---

Framework pour créer des applications mobiles hybrides avec les technologies web.
`,Lt=`---
name: Java
slug: java
published: true
category: pro-lang
color: red
logo: Java
---

Langage orienté objet utilisé principalement dans mes projets backend chez Synchrotron SOLEIL.
`,Et=`---
name: JavaScript
slug: js
published: true
category: pro-lang
color: yellow
logo: JavaScript
---

Langage de programmation principal utilisé pour les interfaces interactives, côté client comme côté serveur avec Node.js.
`,jt=`---
name: Kubernetes
slug: kubernetes
published: true
category: devops
color: blue
logo: Kubernetes
---

Orchestration de conteneurs pour le déploiement, la mise à l'échelle et la gestion d'applications.
`,Ft=`---
name: Linux
slug: linux
published: true
category: devtools
color: gray
logo: Linux
---

Utilisation quotidienne de serveurs Debian et Red Hat au Synchrotron.
`,It=`---
name: MariaDB
slug: mariadb
published: true
category: db
color: brown
logo: MariaDB
---

Base de données relationnelle open-source, fork de MySQL.
`,Pt=`---
name: Minikube
slug: minikube
published: true
category: devops
color: blue
logo: Kubernetes
---

Kubernetes local pour le développement et les tests. Environnement de cluster complet sur une seule machine.
`,Dt=`---
name: MongoDB
slug: mongodb
published: true
category: db
color: green
logo: MongoDB
---

Base de données NoSQL orientée documents, idéale pour les données flexibles et le scaling horizontal.
`,Ot=`---
name: MySQL
slug: mysql
published: true
category: db
color: blue
logo: MySQL
---

Système de gestion de base de données relationnelle open-source très répandu.
`,Nt=`---
name: Nginx
slug: nginx
published: true
category: devops
color: green
logo: Nginx
---

Serveur web haute performance, reverse proxy et load balancer.
`,Mt=`---
name: Node.js
slug: nodejs
published: true
category: framework
color: green
logo: NodeJs
---

Runtime JavaScript côté serveur pour créer des applications backend scalables.
`,qt=`---
name: OpenCV
slug: opencv
published: true
category: library
color: blue
logo: OpenCV
---

Bibliothèque de vision par ordinateur pour le traitement d'images et la détection d'objets.
`,Rt=`---
name: OpenXR
slug: openxr
published: true
category: library
color: blue
logo: OpenXR
---

Standard ouvert pour le développement d'applications VR/AR. Utilisé pour créer des expériences immersives cross-platform.
`,Bt=`---
name: Oracle
slug: oracle
published: true
category: db
color: red
logo: Oracle
---

Système de gestion de base de données relationnelle d'entreprise.
`,Ht=`---
name: Pandas
slug: pandas
published: true
category: library
color: blue
logo: Pandas
---

Bibliothèque Python pour la manipulation et l'analyse de données structurées.
`,Gt=`---
name: PaperMC
slug: papermc
published: true
category: devtools
color: gray
logo: PaperMC
---

Fork haute performance de Spigot pour serveurs Minecraft. Optimisation et API étendue pour plugins.
`,Ut=`---
name: Photoshop
slug: photoshop
published: true
category: design
color: blue
logo: Photoshop
---

Logiciel de retouche d'image et de création graphique d'Adobe.
`,zt=`---
name: PHP
slug: php
published: true
category: pro-lang
color: purple
logo: PHP
---

Langage de script côté serveur très utilisé pour le développement web.
`,Yt=`---
name: Playwright
slug: playwright
published: true
category: test
color: green
logo: Playwright
---

Framework de test end-to-end moderne pour applications web. Support multi-navigateurs et automatisation avancée.
`,Vt=`---
name: PostgreSQL
slug: postgresql
published: true
category: db
color: blue
logo: PostgreSQL
---

Base de données relationnelle open-source avancée avec support JSON et extensions.
`,$t=`---
name: Postman
slug: postman
published: true
category: devtools
color: orange
logo: Postman
---

Outil de test et documentation d'APIs REST et GraphQL.
`,Jt=`---
name: Python
slug: python
published: true
category: pro-lang
color: yellow
logo: Python
---

Langage polyvalent utilisé pour le scripting, le data science, le machine learning et le web.
`,Kt=`---
name: React.js
slug: reactjs
published: true
category: library
color: cyan
logo: ReactJs
---

Bibliothèque JavaScript pour créer des interfaces utilisateur réactives. Utilisé professionnellement.
`,Wt=`---
name: Redis
slug: redis
published: true
category: db
color: red
logo: Redis
---

Base de données in-memory ultra-rapide. Cache, pub/sub, et structures de données avancées.
`,Qt=`---
name: Rust
slug: rust
published: true
category: pro-lang
color: orange
logo: Rust
---

Langage système performant avec gestion mémoire sécurisée sans garbage collector.
`,Zt=`---
name: Sass
slug: sass
published: true
category: markup-style
color: pink
logo: Sass
---

Préprocesseur CSS qui facilite la factorisation et la gestion de grands projets.
`,Xt=`---
name: Selenium
slug: selenium
published: true
category: test
color: green
logo: Selenium
---

Framework d'automatisation de tests pour navigateurs web.
`,eo=`---
name: Skript
slug: skript
published: true
category: devtools
color: orange
logo: Skript
---

Langage de scripting simplifié pour créer des plugins Minecraft sans Java. Syntaxe proche de l'anglais naturel.
`,no=`---
name: Spigot
slug: spigot
published: true
category: devtools
color: orange
logo: Spigot
---

Serveur Minecraft modifié avec API pour plugins. Base de nombreux serveurs communautaires.
`,ro=`---
name: Spring
slug: spring
published: true
category: framework
color: green
logo: Spring
---

Framework Java pour le développement d'applications enterprise et microservices.
`,io=`---
name: SQLite
slug: sqlite
published: true
category: db
color: gray
logo: SQLite
---

Base de données légère intégrée. Idéale pour des projets locaux ou embarqués.
`,to=`---
name: Streamlit
slug: streamlit
published: true
category: framework
color: red
logo: Streamlit
---

Framework Python pour créer rapidement des applications web de data science et machine learning.
`,oo=`---
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
`,lo=`---
name: Tailwind CSS
slug: tailwind
published: true
category: markup-style
color: cyan
logo: TailwindCSS
---

Framework CSS utility-first pour créer des interfaces rapidement sans quitter le HTML.
`,ao=`---
name: Travail en équipe
slug: teamwork
published: true
category: soft
color: green
logo: Teamwork
---

Collaboration efficace dans des équipes pluridisciplinaires. Communication claire et partage de responsabilités.
`,so=`---
name: TensorFlow
slug: tensorflow
published: true
category: library
color: orange
logo: TensorFlow
---

Bibliothèque de machine learning et deep learning de Google.
`,co=`---
name: TypeScript
slug: ts
published: true
category: pro-lang
color: blue
logo: TypeScript
---

Superset de JavaScript typé statiquement. Utilisé pour des projets robustes avec des IDE performants.
`,uo=`---
name: Unity
slug: unity
published: true
category: devtools
color: gray
logo: Unity
---

Moteur de jeu multiplateforme pour le développement de jeux 2D/3D et expériences VR/AR.
`,po=`---
name: Velocity
slug: velocity
published: true
category: devtools
color: cyan
logo: Velocity
---

Proxy Minecraft moderne et performant. Gestion de réseaux de serveurs avec API plugin avancée.
`,fo=`---
name: Vue.js
slug: vuejs
published: true
category: framework
color: green
logo: VueJs
---

Framework JavaScript progressif pour construire des interfaces utilisateur réactives.
`,mo=`---
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
`,go=`---
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
`,ho=`---
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
`,vo=`---
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
`,bo=`---
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
`,yo=`---
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
`,_o=`# Site Configuration
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
`,xo=`# Page d'accueil
# Personnalise le contenu de ta page d'accueil ici

title: Accueil

hero:
  description: >
    Développeur Full-Stack passionné, je crée des applications web modernes
    et performantes. Actuellement en alternance au Synchrotron SOLEIL et 
    en Master à l'ESIEA.
`,So=`# Page CV
# Personnalise le contenu de ta page CV ici

title: CV
pdfPath: /pdf/CV_Alexy_Vanot.pdf
downloadLabel: Télécharger
fullscreenLabel: Plein écran
`,Ao=`# Page Contact
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
`;/*! js-yaml 4.1.1 https://github.com/nodeca/js-yaml @license MIT */function nr(e){return typeof e>"u"||e===null}function wo(e){return typeof e=="object"&&e!==null}function ko(e){return Array.isArray(e)?e:nr(e)?[]:[e]}function Co(e,n){var r,t,i,l;if(n)for(l=Object.keys(n),r=0,t=l.length;r<t;r+=1)i=l[r],e[i]=n[i];return e}function To(e,n){var r="",t;for(t=0;t<n;t+=1)r+=e;return r}function Lo(e){return e===0&&Number.NEGATIVE_INFINITY===1/e}var Eo=nr,jo=wo,Fo=ko,Io=To,Po=Lo,Do=Co,L={isNothing:Eo,isObject:jo,toArray:Fo,repeat:Io,isNegativeZero:Po,extend:Do};function rr(e,n){var r="",t=e.reason||"(unknown reason)";return e.mark?(e.mark.name&&(r+='in "'+e.mark.name+'" '),r+="("+(e.mark.line+1)+":"+(e.mark.column+1)+")",!n&&e.mark.snippet&&(r+=`

`+e.mark.snippet),t+" "+r):t}function ue(e,n){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=n,this.message=rr(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}ue.prototype=Object.create(Error.prototype);ue.prototype.constructor=ue;ue.prototype.toString=function(n){return this.name+": "+rr(this,n)};var F=ue;function Ne(e,n,r,t,i){var l="",o="",a=Math.floor(i/2)-1;return t-n>a&&(l=" ... ",n=t-a+l.length),r-t>a&&(o=" ...",r=t+a-o.length),{str:l+e.slice(n,r).replace(/\t/g,"→")+o,pos:t-n+l.length}}function Me(e,n){return L.repeat(" ",n-e.length)+e}function Oo(e,n){if(n=Object.create(n||null),!e.buffer)return null;n.maxLength||(n.maxLength=79),typeof n.indent!="number"&&(n.indent=1),typeof n.linesBefore!="number"&&(n.linesBefore=3),typeof n.linesAfter!="number"&&(n.linesAfter=2);for(var r=/\r?\n|\r|\0/g,t=[0],i=[],l,o=-1;l=r.exec(e.buffer);)i.push(l.index),t.push(l.index+l[0].length),e.position<=l.index&&o<0&&(o=t.length-2);o<0&&(o=t.length-1);var a="",s,c,d=Math.min(e.line+n.linesAfter,i.length).toString().length,u=n.maxLength-(n.indent+d+3);for(s=1;s<=n.linesBefore&&!(o-s<0);s++)c=Ne(e.buffer,t[o-s],i[o-s],e.position-(t[o]-t[o-s]),u),a=L.repeat(" ",n.indent)+Me((e.line-s+1).toString(),d)+" | "+c.str+`
`+a;for(c=Ne(e.buffer,t[o],i[o],e.position,u),a+=L.repeat(" ",n.indent)+Me((e.line+1).toString(),d)+" | "+c.str+`
`,a+=L.repeat("-",n.indent+d+3+c.pos)+`^
`,s=1;s<=n.linesAfter&&!(o+s>=i.length);s++)c=Ne(e.buffer,t[o+s],i[o+s],e.position-(t[o]-t[o+s]),u),a+=L.repeat(" ",n.indent)+Me((e.line+s+1).toString(),d)+" | "+c.str+`
`;return a.replace(/\n$/,"")}var No=Oo,Mo=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],qo=["scalar","sequence","mapping"];function Ro(e){var n={};return e!==null&&Object.keys(e).forEach(function(r){e[r].forEach(function(t){n[String(t)]=r})}),n}function Bo(e,n){if(n=n||{},Object.keys(n).forEach(function(r){if(Mo.indexOf(r)===-1)throw new F('Unknown option "'+r+'" is met in definition of "'+e+'" YAML type.')}),this.options=n,this.tag=e,this.kind=n.kind||null,this.resolve=n.resolve||function(){return!0},this.construct=n.construct||function(r){return r},this.instanceOf=n.instanceOf||null,this.predicate=n.predicate||null,this.represent=n.represent||null,this.representName=n.representName||null,this.defaultStyle=n.defaultStyle||null,this.multi=n.multi||!1,this.styleAliases=Ro(n.styleAliases||null),qo.indexOf(this.kind)===-1)throw new F('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')}var E=Bo;function Cn(e,n){var r=[];return e[n].forEach(function(t){var i=r.length;r.forEach(function(l,o){l.tag===t.tag&&l.kind===t.kind&&l.multi===t.multi&&(i=o)}),r[i]=t}),r}function Ho(){var e={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},n,r;function t(i){i.multi?(e.multi[i.kind].push(i),e.multi.fallback.push(i)):e[i.kind][i.tag]=e.fallback[i.tag]=i}for(n=0,r=arguments.length;n<r;n+=1)arguments[n].forEach(t);return e}function Ue(e){return this.extend(e)}Ue.prototype.extend=function(n){var r=[],t=[];if(n instanceof E)t.push(n);else if(Array.isArray(n))t=t.concat(n);else if(n&&(Array.isArray(n.implicit)||Array.isArray(n.explicit)))n.implicit&&(r=r.concat(n.implicit)),n.explicit&&(t=t.concat(n.explicit));else throw new F("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");r.forEach(function(l){if(!(l instanceof E))throw new F("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(l.loadKind&&l.loadKind!=="scalar")throw new F("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(l.multi)throw new F("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),t.forEach(function(l){if(!(l instanceof E))throw new F("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var i=Object.create(Ue.prototype);return i.implicit=(this.implicit||[]).concat(r),i.explicit=(this.explicit||[]).concat(t),i.compiledImplicit=Cn(i,"implicit"),i.compiledExplicit=Cn(i,"explicit"),i.compiledTypeMap=Ho(i.compiledImplicit,i.compiledExplicit),i};var ir=Ue,tr=new E("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return e!==null?e:""}}),or=new E("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return e!==null?e:[]}}),lr=new E("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return e!==null?e:{}}}),ar=new ir({explicit:[tr,or,lr]});function Go(e){if(e===null)return!0;var n=e.length;return n===1&&e==="~"||n===4&&(e==="null"||e==="Null"||e==="NULL")}function Uo(){return null}function zo(e){return e===null}var sr=new E("tag:yaml.org,2002:null",{kind:"scalar",resolve:Go,construct:Uo,predicate:zo,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function Yo(e){if(e===null)return!1;var n=e.length;return n===4&&(e==="true"||e==="True"||e==="TRUE")||n===5&&(e==="false"||e==="False"||e==="FALSE")}function Vo(e){return e==="true"||e==="True"||e==="TRUE"}function $o(e){return Object.prototype.toString.call(e)==="[object Boolean]"}var cr=new E("tag:yaml.org,2002:bool",{kind:"scalar",resolve:Yo,construct:Vo,predicate:$o,represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"});function Jo(e){return 48<=e&&e<=57||65<=e&&e<=70||97<=e&&e<=102}function Ko(e){return 48<=e&&e<=55}function Wo(e){return 48<=e&&e<=57}function Qo(e){if(e===null)return!1;var n=e.length,r=0,t=!1,i;if(!n)return!1;if(i=e[r],(i==="-"||i==="+")&&(i=e[++r]),i==="0"){if(r+1===n)return!0;if(i=e[++r],i==="b"){for(r++;r<n;r++)if(i=e[r],i!=="_"){if(i!=="0"&&i!=="1")return!1;t=!0}return t&&i!=="_"}if(i==="x"){for(r++;r<n;r++)if(i=e[r],i!=="_"){if(!Jo(e.charCodeAt(r)))return!1;t=!0}return t&&i!=="_"}if(i==="o"){for(r++;r<n;r++)if(i=e[r],i!=="_"){if(!Ko(e.charCodeAt(r)))return!1;t=!0}return t&&i!=="_"}}if(i==="_")return!1;for(;r<n;r++)if(i=e[r],i!=="_"){if(!Wo(e.charCodeAt(r)))return!1;t=!0}return!(!t||i==="_")}function Zo(e){var n=e,r=1,t;if(n.indexOf("_")!==-1&&(n=n.replace(/_/g,"")),t=n[0],(t==="-"||t==="+")&&(t==="-"&&(r=-1),n=n.slice(1),t=n[0]),n==="0")return 0;if(t==="0"){if(n[1]==="b")return r*parseInt(n.slice(2),2);if(n[1]==="x")return r*parseInt(n.slice(2),16);if(n[1]==="o")return r*parseInt(n.slice(2),8)}return r*parseInt(n,10)}function Xo(e){return Object.prototype.toString.call(e)==="[object Number]"&&e%1===0&&!L.isNegativeZero(e)}var ur=new E("tag:yaml.org,2002:int",{kind:"scalar",resolve:Qo,construct:Zo,predicate:Xo,represent:{binary:function(e){return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){return e>=0?"0o"+e.toString(8):"-0o"+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),el=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function nl(e){return!(e===null||!el.test(e)||e[e.length-1]==="_")}function rl(e){var n,r;return n=e.replace(/_/g,"").toLowerCase(),r=n[0]==="-"?-1:1,"+-".indexOf(n[0])>=0&&(n=n.slice(1)),n===".inf"?r===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:n===".nan"?NaN:r*parseFloat(n,10)}var il=/^[-+]?[0-9]+e/;function tl(e,n){var r;if(isNaN(e))switch(n){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(n){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(n){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(L.isNegativeZero(e))return"-0.0";return r=e.toString(10),il.test(r)?r.replace("e",".e"):r}function ol(e){return Object.prototype.toString.call(e)==="[object Number]"&&(e%1!==0||L.isNegativeZero(e))}var pr=new E("tag:yaml.org,2002:float",{kind:"scalar",resolve:nl,construct:rl,predicate:ol,represent:tl,defaultStyle:"lowercase"}),dr=ar.extend({implicit:[sr,cr,ur,pr]}),fr=dr,mr=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),gr=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function ll(e){return e===null?!1:mr.exec(e)!==null||gr.exec(e)!==null}function al(e){var n,r,t,i,l,o,a,s=0,c=null,d,u,f;if(n=mr.exec(e),n===null&&(n=gr.exec(e)),n===null)throw new Error("Date resolve error");if(r=+n[1],t=+n[2]-1,i=+n[3],!n[4])return new Date(Date.UTC(r,t,i));if(l=+n[4],o=+n[5],a=+n[6],n[7]){for(s=n[7].slice(0,3);s.length<3;)s+="0";s=+s}return n[9]&&(d=+n[10],u=+(n[11]||0),c=(d*60+u)*6e4,n[9]==="-"&&(c=-c)),f=new Date(Date.UTC(r,t,i,l,o,a,s)),c&&f.setTime(f.getTime()-c),f}function sl(e){return e.toISOString()}var hr=new E("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:ll,construct:al,instanceOf:Date,represent:sl});function cl(e){return e==="<<"||e===null}var vr=new E("tag:yaml.org,2002:merge",{kind:"scalar",resolve:cl}),Ze=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function ul(e){if(e===null)return!1;var n,r,t=0,i=e.length,l=Ze;for(r=0;r<i;r++)if(n=l.indexOf(e.charAt(r)),!(n>64)){if(n<0)return!1;t+=6}return t%8===0}function pl(e){var n,r,t=e.replace(/[\r\n=]/g,""),i=t.length,l=Ze,o=0,a=[];for(n=0;n<i;n++)n%4===0&&n&&(a.push(o>>16&255),a.push(o>>8&255),a.push(o&255)),o=o<<6|l.indexOf(t.charAt(n));return r=i%4*6,r===0?(a.push(o>>16&255),a.push(o>>8&255),a.push(o&255)):r===18?(a.push(o>>10&255),a.push(o>>2&255)):r===12&&a.push(o>>4&255),new Uint8Array(a)}function dl(e){var n="",r=0,t,i,l=e.length,o=Ze;for(t=0;t<l;t++)t%3===0&&t&&(n+=o[r>>18&63],n+=o[r>>12&63],n+=o[r>>6&63],n+=o[r&63]),r=(r<<8)+e[t];return i=l%3,i===0?(n+=o[r>>18&63],n+=o[r>>12&63],n+=o[r>>6&63],n+=o[r&63]):i===2?(n+=o[r>>10&63],n+=o[r>>4&63],n+=o[r<<2&63],n+=o[64]):i===1&&(n+=o[r>>2&63],n+=o[r<<4&63],n+=o[64],n+=o[64]),n}function fl(e){return Object.prototype.toString.call(e)==="[object Uint8Array]"}var br=new E("tag:yaml.org,2002:binary",{kind:"scalar",resolve:ul,construct:pl,predicate:fl,represent:dl}),ml=Object.prototype.hasOwnProperty,gl=Object.prototype.toString;function hl(e){if(e===null)return!0;var n=[],r,t,i,l,o,a=e;for(r=0,t=a.length;r<t;r+=1){if(i=a[r],o=!1,gl.call(i)!=="[object Object]")return!1;for(l in i)if(ml.call(i,l))if(!o)o=!0;else return!1;if(!o)return!1;if(n.indexOf(l)===-1)n.push(l);else return!1}return!0}function vl(e){return e!==null?e:[]}var yr=new E("tag:yaml.org,2002:omap",{kind:"sequence",resolve:hl,construct:vl}),bl=Object.prototype.toString;function yl(e){if(e===null)return!0;var n,r,t,i,l,o=e;for(l=new Array(o.length),n=0,r=o.length;n<r;n+=1){if(t=o[n],bl.call(t)!=="[object Object]"||(i=Object.keys(t),i.length!==1))return!1;l[n]=[i[0],t[i[0]]]}return!0}function _l(e){if(e===null)return[];var n,r,t,i,l,o=e;for(l=new Array(o.length),n=0,r=o.length;n<r;n+=1)t=o[n],i=Object.keys(t),l[n]=[i[0],t[i[0]]];return l}var _r=new E("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:yl,construct:_l}),xl=Object.prototype.hasOwnProperty;function Sl(e){if(e===null)return!0;var n,r=e;for(n in r)if(xl.call(r,n)&&r[n]!==null)return!1;return!0}function Al(e){return e!==null?e:{}}var xr=new E("tag:yaml.org,2002:set",{kind:"mapping",resolve:Sl,construct:Al}),Xe=fr.extend({implicit:[hr,vr],explicit:[br,yr,_r,xr]}),z=Object.prototype.hasOwnProperty,xe=1,Sr=2,Ar=3,Se=4,qe=1,wl=2,Tn=3,kl=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,Cl=/[\x85\u2028\u2029]/,Tl=/[,\[\]\{\}]/,wr=/^(?:!|!!|![a-z\-]+!)$/i,kr=/^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;function Ln(e){return Object.prototype.toString.call(e)}function q(e){return e===10||e===13}function Y(e){return e===9||e===32}function P(e){return e===9||e===32||e===10||e===13}function W(e){return e===44||e===91||e===93||e===123||e===125}function Ll(e){var n;return 48<=e&&e<=57?e-48:(n=e|32,97<=n&&n<=102?n-97+10:-1)}function El(e){return e===120?2:e===117?4:e===85?8:0}function jl(e){return 48<=e&&e<=57?e-48:-1}function En(e){return e===48?"\0":e===97?"\x07":e===98?"\b":e===116||e===9?"	":e===110?`
`:e===118?"\v":e===102?"\f":e===114?"\r":e===101?"\x1B":e===32?" ":e===34?'"':e===47?"/":e===92?"\\":e===78?"":e===95?" ":e===76?"\u2028":e===80?"\u2029":""}function Fl(e){return e<=65535?String.fromCharCode(e):String.fromCharCode((e-65536>>10)+55296,(e-65536&1023)+56320)}function Cr(e,n,r){n==="__proto__"?Object.defineProperty(e,n,{configurable:!0,enumerable:!0,writable:!0,value:r}):e[n]=r}var Tr=new Array(256),Lr=new Array(256);for(var J=0;J<256;J++)Tr[J]=En(J)?1:0,Lr[J]=En(J);function Il(e,n){this.input=e,this.filename=n.filename||null,this.schema=n.schema||Xe,this.onWarning=n.onWarning||null,this.legacy=n.legacy||!1,this.json=n.json||!1,this.listener=n.listener||null,this.implicitTypes=this.schema.compiledImplicit,this.typeMap=this.schema.compiledTypeMap,this.length=e.length,this.position=0,this.line=0,this.lineStart=0,this.lineIndent=0,this.firstTabInLine=-1,this.documents=[]}function Er(e,n){var r={name:e.filename,buffer:e.input.slice(0,-1),position:e.position,line:e.line,column:e.position-e.lineStart};return r.snippet=No(r),new F(n,r)}function h(e,n){throw Er(e,n)}function Ae(e,n){e.onWarning&&e.onWarning.call(null,Er(e,n))}var jn={YAML:function(n,r,t){var i,l,o;n.version!==null&&h(n,"duplication of %YAML directive"),t.length!==1&&h(n,"YAML directive accepts exactly one argument"),i=/^([0-9]+)\.([0-9]+)$/.exec(t[0]),i===null&&h(n,"ill-formed argument of the YAML directive"),l=parseInt(i[1],10),o=parseInt(i[2],10),l!==1&&h(n,"unacceptable YAML version of the document"),n.version=t[0],n.checkLineBreaks=o<2,o!==1&&o!==2&&Ae(n,"unsupported YAML version of the document")},TAG:function(n,r,t){var i,l;t.length!==2&&h(n,"TAG directive accepts exactly two arguments"),i=t[0],l=t[1],wr.test(i)||h(n,"ill-formed tag handle (first argument) of the TAG directive"),z.call(n.tagMap,i)&&h(n,'there is a previously declared suffix for "'+i+'" tag handle'),kr.test(l)||h(n,"ill-formed tag prefix (second argument) of the TAG directive");try{l=decodeURIComponent(l)}catch{h(n,"tag prefix is malformed: "+l)}n.tagMap[i]=l}};function U(e,n,r,t){var i,l,o,a;if(n<r){if(a=e.input.slice(n,r),t)for(i=0,l=a.length;i<l;i+=1)o=a.charCodeAt(i),o===9||32<=o&&o<=1114111||h(e,"expected valid JSON character");else kl.test(a)&&h(e,"the stream contains non-printable characters");e.result+=a}}function Fn(e,n,r,t){var i,l,o,a;for(L.isObject(r)||h(e,"cannot merge mappings; the provided source object is unacceptable"),i=Object.keys(r),o=0,a=i.length;o<a;o+=1)l=i[o],z.call(n,l)||(Cr(n,l,r[l]),t[l]=!0)}function Q(e,n,r,t,i,l,o,a,s){var c,d;if(Array.isArray(i))for(i=Array.prototype.slice.call(i),c=0,d=i.length;c<d;c+=1)Array.isArray(i[c])&&h(e,"nested arrays are not supported inside keys"),typeof i=="object"&&Ln(i[c])==="[object Object]"&&(i[c]="[object Object]");if(typeof i=="object"&&Ln(i)==="[object Object]"&&(i="[object Object]"),i=String(i),n===null&&(n={}),t==="tag:yaml.org,2002:merge")if(Array.isArray(l))for(c=0,d=l.length;c<d;c+=1)Fn(e,n,l[c],r);else Fn(e,n,l,r);else!e.json&&!z.call(r,i)&&z.call(n,i)&&(e.line=o||e.line,e.lineStart=a||e.lineStart,e.position=s||e.position,h(e,"duplicated mapping key")),Cr(n,i,l),delete r[i];return n}function en(e){var n;n=e.input.charCodeAt(e.position),n===10?e.position++:n===13?(e.position++,e.input.charCodeAt(e.position)===10&&e.position++):h(e,"a line break is expected"),e.line+=1,e.lineStart=e.position,e.firstTabInLine=-1}function T(e,n,r){for(var t=0,i=e.input.charCodeAt(e.position);i!==0;){for(;Y(i);)i===9&&e.firstTabInLine===-1&&(e.firstTabInLine=e.position),i=e.input.charCodeAt(++e.position);if(n&&i===35)do i=e.input.charCodeAt(++e.position);while(i!==10&&i!==13&&i!==0);if(q(i))for(en(e),i=e.input.charCodeAt(e.position),t++,e.lineIndent=0;i===32;)e.lineIndent++,i=e.input.charCodeAt(++e.position);else break}return r!==-1&&t!==0&&e.lineIndent<r&&Ae(e,"deficient indentation"),t}function Ce(e){var n=e.position,r;return r=e.input.charCodeAt(n),!!((r===45||r===46)&&r===e.input.charCodeAt(n+1)&&r===e.input.charCodeAt(n+2)&&(n+=3,r=e.input.charCodeAt(n),r===0||P(r)))}function nn(e,n){n===1?e.result+=" ":n>1&&(e.result+=L.repeat(`
`,n-1))}function Pl(e,n,r){var t,i,l,o,a,s,c,d,u=e.kind,f=e.result,g;if(g=e.input.charCodeAt(e.position),P(g)||W(g)||g===35||g===38||g===42||g===33||g===124||g===62||g===39||g===34||g===37||g===64||g===96||(g===63||g===45)&&(i=e.input.charCodeAt(e.position+1),P(i)||r&&W(i)))return!1;for(e.kind="scalar",e.result="",l=o=e.position,a=!1;g!==0;){if(g===58){if(i=e.input.charCodeAt(e.position+1),P(i)||r&&W(i))break}else if(g===35){if(t=e.input.charCodeAt(e.position-1),P(t))break}else{if(e.position===e.lineStart&&Ce(e)||r&&W(g))break;if(q(g))if(s=e.line,c=e.lineStart,d=e.lineIndent,T(e,!1,-1),e.lineIndent>=n){a=!0,g=e.input.charCodeAt(e.position);continue}else{e.position=o,e.line=s,e.lineStart=c,e.lineIndent=d;break}}a&&(U(e,l,o,!1),nn(e,e.line-s),l=o=e.position,a=!1),Y(g)||(o=e.position+1),g=e.input.charCodeAt(++e.position)}return U(e,l,o,!1),e.result?!0:(e.kind=u,e.result=f,!1)}function Dl(e,n){var r,t,i;if(r=e.input.charCodeAt(e.position),r!==39)return!1;for(e.kind="scalar",e.result="",e.position++,t=i=e.position;(r=e.input.charCodeAt(e.position))!==0;)if(r===39)if(U(e,t,e.position,!0),r=e.input.charCodeAt(++e.position),r===39)t=e.position,e.position++,i=e.position;else return!0;else q(r)?(U(e,t,i,!0),nn(e,T(e,!1,n)),t=i=e.position):e.position===e.lineStart&&Ce(e)?h(e,"unexpected end of the document within a single quoted scalar"):(e.position++,i=e.position);h(e,"unexpected end of the stream within a single quoted scalar")}function Ol(e,n){var r,t,i,l,o,a;if(a=e.input.charCodeAt(e.position),a!==34)return!1;for(e.kind="scalar",e.result="",e.position++,r=t=e.position;(a=e.input.charCodeAt(e.position))!==0;){if(a===34)return U(e,r,e.position,!0),e.position++,!0;if(a===92){if(U(e,r,e.position,!0),a=e.input.charCodeAt(++e.position),q(a))T(e,!1,n);else if(a<256&&Tr[a])e.result+=Lr[a],e.position++;else if((o=El(a))>0){for(i=o,l=0;i>0;i--)a=e.input.charCodeAt(++e.position),(o=Ll(a))>=0?l=(l<<4)+o:h(e,"expected hexadecimal character");e.result+=Fl(l),e.position++}else h(e,"unknown escape sequence");r=t=e.position}else q(a)?(U(e,r,t,!0),nn(e,T(e,!1,n)),r=t=e.position):e.position===e.lineStart&&Ce(e)?h(e,"unexpected end of the document within a double quoted scalar"):(e.position++,t=e.position)}h(e,"unexpected end of the stream within a double quoted scalar")}function Nl(e,n){var r=!0,t,i,l,o=e.tag,a,s=e.anchor,c,d,u,f,g,b=Object.create(null),y,m,v,_;if(_=e.input.charCodeAt(e.position),_===91)d=93,g=!1,a=[];else if(_===123)d=125,g=!0,a={};else return!1;for(e.anchor!==null&&(e.anchorMap[e.anchor]=a),_=e.input.charCodeAt(++e.position);_!==0;){if(T(e,!0,n),_=e.input.charCodeAt(e.position),_===d)return e.position++,e.tag=o,e.anchor=s,e.kind=g?"mapping":"sequence",e.result=a,!0;r?_===44&&h(e,"expected the node content, but found ','"):h(e,"missed comma between flow collection entries"),m=y=v=null,u=f=!1,_===63&&(c=e.input.charCodeAt(e.position+1),P(c)&&(u=f=!0,e.position++,T(e,!0,n))),t=e.line,i=e.lineStart,l=e.position,Z(e,n,xe,!1,!0),m=e.tag,y=e.result,T(e,!0,n),_=e.input.charCodeAt(e.position),(f||e.line===t)&&_===58&&(u=!0,_=e.input.charCodeAt(++e.position),T(e,!0,n),Z(e,n,xe,!1,!0),v=e.result),g?Q(e,a,b,m,y,v,t,i,l):u?a.push(Q(e,null,b,m,y,v,t,i,l)):a.push(y),T(e,!0,n),_=e.input.charCodeAt(e.position),_===44?(r=!0,_=e.input.charCodeAt(++e.position)):r=!1}h(e,"unexpected end of the stream within a flow collection")}function Ml(e,n){var r,t,i=qe,l=!1,o=!1,a=n,s=0,c=!1,d,u;if(u=e.input.charCodeAt(e.position),u===124)t=!1;else if(u===62)t=!0;else return!1;for(e.kind="scalar",e.result="";u!==0;)if(u=e.input.charCodeAt(++e.position),u===43||u===45)qe===i?i=u===43?Tn:wl:h(e,"repeat of a chomping mode identifier");else if((d=jl(u))>=0)d===0?h(e,"bad explicit indentation width of a block scalar; it cannot be less than one"):o?h(e,"repeat of an indentation width identifier"):(a=n+d-1,o=!0);else break;if(Y(u)){do u=e.input.charCodeAt(++e.position);while(Y(u));if(u===35)do u=e.input.charCodeAt(++e.position);while(!q(u)&&u!==0)}for(;u!==0;){for(en(e),e.lineIndent=0,u=e.input.charCodeAt(e.position);(!o||e.lineIndent<a)&&u===32;)e.lineIndent++,u=e.input.charCodeAt(++e.position);if(!o&&e.lineIndent>a&&(a=e.lineIndent),q(u)){s++;continue}if(e.lineIndent<a){i===Tn?e.result+=L.repeat(`
`,l?1+s:s):i===qe&&l&&(e.result+=`
`);break}for(t?Y(u)?(c=!0,e.result+=L.repeat(`
`,l?1+s:s)):c?(c=!1,e.result+=L.repeat(`
`,s+1)):s===0?l&&(e.result+=" "):e.result+=L.repeat(`
`,s):e.result+=L.repeat(`
`,l?1+s:s),l=!0,o=!0,s=0,r=e.position;!q(u)&&u!==0;)u=e.input.charCodeAt(++e.position);U(e,r,e.position,!1)}return!0}function In(e,n){var r,t=e.tag,i=e.anchor,l=[],o,a=!1,s;if(e.firstTabInLine!==-1)return!1;for(e.anchor!==null&&(e.anchorMap[e.anchor]=l),s=e.input.charCodeAt(e.position);s!==0&&(e.firstTabInLine!==-1&&(e.position=e.firstTabInLine,h(e,"tab characters must not be used in indentation")),!(s!==45||(o=e.input.charCodeAt(e.position+1),!P(o))));){if(a=!0,e.position++,T(e,!0,-1)&&e.lineIndent<=n){l.push(null),s=e.input.charCodeAt(e.position);continue}if(r=e.line,Z(e,n,Ar,!1,!0),l.push(e.result),T(e,!0,-1),s=e.input.charCodeAt(e.position),(e.line===r||e.lineIndent>n)&&s!==0)h(e,"bad indentation of a sequence entry");else if(e.lineIndent<n)break}return a?(e.tag=t,e.anchor=i,e.kind="sequence",e.result=l,!0):!1}function ql(e,n,r){var t,i,l,o,a,s,c=e.tag,d=e.anchor,u={},f=Object.create(null),g=null,b=null,y=null,m=!1,v=!1,_;if(e.firstTabInLine!==-1)return!1;for(e.anchor!==null&&(e.anchorMap[e.anchor]=u),_=e.input.charCodeAt(e.position);_!==0;){if(!m&&e.firstTabInLine!==-1&&(e.position=e.firstTabInLine,h(e,"tab characters must not be used in indentation")),t=e.input.charCodeAt(e.position+1),l=e.line,(_===63||_===58)&&P(t))_===63?(m&&(Q(e,u,f,g,b,null,o,a,s),g=b=y=null),v=!0,m=!0,i=!0):m?(m=!1,i=!0):h(e,"incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"),e.position+=1,_=t;else{if(o=e.line,a=e.lineStart,s=e.position,!Z(e,r,Sr,!1,!0))break;if(e.line===l){for(_=e.input.charCodeAt(e.position);Y(_);)_=e.input.charCodeAt(++e.position);if(_===58)_=e.input.charCodeAt(++e.position),P(_)||h(e,"a whitespace character is expected after the key-value separator within a block mapping"),m&&(Q(e,u,f,g,b,null,o,a,s),g=b=y=null),v=!0,m=!1,i=!1,g=e.tag,b=e.result;else if(v)h(e,"can not read an implicit mapping pair; a colon is missed");else return e.tag=c,e.anchor=d,!0}else if(v)h(e,"can not read a block mapping entry; a multiline key may not be an implicit key");else return e.tag=c,e.anchor=d,!0}if((e.line===l||e.lineIndent>n)&&(m&&(o=e.line,a=e.lineStart,s=e.position),Z(e,n,Se,!0,i)&&(m?b=e.result:y=e.result),m||(Q(e,u,f,g,b,y,o,a,s),g=b=y=null),T(e,!0,-1),_=e.input.charCodeAt(e.position)),(e.line===l||e.lineIndent>n)&&_!==0)h(e,"bad indentation of a mapping entry");else if(e.lineIndent<n)break}return m&&Q(e,u,f,g,b,null,o,a,s),v&&(e.tag=c,e.anchor=d,e.kind="mapping",e.result=u),v}function Rl(e){var n,r=!1,t=!1,i,l,o;if(o=e.input.charCodeAt(e.position),o!==33)return!1;if(e.tag!==null&&h(e,"duplication of a tag property"),o=e.input.charCodeAt(++e.position),o===60?(r=!0,o=e.input.charCodeAt(++e.position)):o===33?(t=!0,i="!!",o=e.input.charCodeAt(++e.position)):i="!",n=e.position,r){do o=e.input.charCodeAt(++e.position);while(o!==0&&o!==62);e.position<e.length?(l=e.input.slice(n,e.position),o=e.input.charCodeAt(++e.position)):h(e,"unexpected end of the stream within a verbatim tag")}else{for(;o!==0&&!P(o);)o===33&&(t?h(e,"tag suffix cannot contain exclamation marks"):(i=e.input.slice(n-1,e.position+1),wr.test(i)||h(e,"named tag handle cannot contain such characters"),t=!0,n=e.position+1)),o=e.input.charCodeAt(++e.position);l=e.input.slice(n,e.position),Tl.test(l)&&h(e,"tag suffix cannot contain flow indicator characters")}l&&!kr.test(l)&&h(e,"tag name cannot contain such characters: "+l);try{l=decodeURIComponent(l)}catch{h(e,"tag name is malformed: "+l)}return r?e.tag=l:z.call(e.tagMap,i)?e.tag=e.tagMap[i]+l:i==="!"?e.tag="!"+l:i==="!!"?e.tag="tag:yaml.org,2002:"+l:h(e,'undeclared tag handle "'+i+'"'),!0}function Bl(e){var n,r;if(r=e.input.charCodeAt(e.position),r!==38)return!1;for(e.anchor!==null&&h(e,"duplication of an anchor property"),r=e.input.charCodeAt(++e.position),n=e.position;r!==0&&!P(r)&&!W(r);)r=e.input.charCodeAt(++e.position);return e.position===n&&h(e,"name of an anchor node must contain at least one character"),e.anchor=e.input.slice(n,e.position),!0}function Hl(e){var n,r,t;if(t=e.input.charCodeAt(e.position),t!==42)return!1;for(t=e.input.charCodeAt(++e.position),n=e.position;t!==0&&!P(t)&&!W(t);)t=e.input.charCodeAt(++e.position);return e.position===n&&h(e,"name of an alias node must contain at least one character"),r=e.input.slice(n,e.position),z.call(e.anchorMap,r)||h(e,'unidentified alias "'+r+'"'),e.result=e.anchorMap[r],T(e,!0,-1),!0}function Z(e,n,r,t,i){var l,o,a,s=1,c=!1,d=!1,u,f,g,b,y,m;if(e.listener!==null&&e.listener("open",e),e.tag=null,e.anchor=null,e.kind=null,e.result=null,l=o=a=Se===r||Ar===r,t&&T(e,!0,-1)&&(c=!0,e.lineIndent>n?s=1:e.lineIndent===n?s=0:e.lineIndent<n&&(s=-1)),s===1)for(;Rl(e)||Bl(e);)T(e,!0,-1)?(c=!0,a=l,e.lineIndent>n?s=1:e.lineIndent===n?s=0:e.lineIndent<n&&(s=-1)):a=!1;if(a&&(a=c||i),(s===1||Se===r)&&(xe===r||Sr===r?y=n:y=n+1,m=e.position-e.lineStart,s===1?a&&(In(e,m)||ql(e,m,y))||Nl(e,y)?d=!0:(o&&Ml(e,y)||Dl(e,y)||Ol(e,y)?d=!0:Hl(e)?(d=!0,(e.tag!==null||e.anchor!==null)&&h(e,"alias node should not have any properties")):Pl(e,y,xe===r)&&(d=!0,e.tag===null&&(e.tag="?")),e.anchor!==null&&(e.anchorMap[e.anchor]=e.result)):s===0&&(d=a&&In(e,m))),e.tag===null)e.anchor!==null&&(e.anchorMap[e.anchor]=e.result);else if(e.tag==="?"){for(e.result!==null&&e.kind!=="scalar"&&h(e,'unacceptable node kind for !<?> tag; it should be "scalar", not "'+e.kind+'"'),u=0,f=e.implicitTypes.length;u<f;u+=1)if(b=e.implicitTypes[u],b.resolve(e.result)){e.result=b.construct(e.result),e.tag=b.tag,e.anchor!==null&&(e.anchorMap[e.anchor]=e.result);break}}else if(e.tag!=="!"){if(z.call(e.typeMap[e.kind||"fallback"],e.tag))b=e.typeMap[e.kind||"fallback"][e.tag];else for(b=null,g=e.typeMap.multi[e.kind||"fallback"],u=0,f=g.length;u<f;u+=1)if(e.tag.slice(0,g[u].tag.length)===g[u].tag){b=g[u];break}b||h(e,"unknown tag !<"+e.tag+">"),e.result!==null&&b.kind!==e.kind&&h(e,"unacceptable node kind for !<"+e.tag+'> tag; it should be "'+b.kind+'", not "'+e.kind+'"'),b.resolve(e.result,e.tag)?(e.result=b.construct(e.result,e.tag),e.anchor!==null&&(e.anchorMap[e.anchor]=e.result)):h(e,"cannot resolve a node with !<"+e.tag+"> explicit tag")}return e.listener!==null&&e.listener("close",e),e.tag!==null||e.anchor!==null||d}function Gl(e){var n=e.position,r,t,i,l=!1,o;for(e.version=null,e.checkLineBreaks=e.legacy,e.tagMap=Object.create(null),e.anchorMap=Object.create(null);(o=e.input.charCodeAt(e.position))!==0&&(T(e,!0,-1),o=e.input.charCodeAt(e.position),!(e.lineIndent>0||o!==37));){for(l=!0,o=e.input.charCodeAt(++e.position),r=e.position;o!==0&&!P(o);)o=e.input.charCodeAt(++e.position);for(t=e.input.slice(r,e.position),i=[],t.length<1&&h(e,"directive name must not be less than one character in length");o!==0;){for(;Y(o);)o=e.input.charCodeAt(++e.position);if(o===35){do o=e.input.charCodeAt(++e.position);while(o!==0&&!q(o));break}if(q(o))break;for(r=e.position;o!==0&&!P(o);)o=e.input.charCodeAt(++e.position);i.push(e.input.slice(r,e.position))}o!==0&&en(e),z.call(jn,t)?jn[t](e,t,i):Ae(e,'unknown document directive "'+t+'"')}if(T(e,!0,-1),e.lineIndent===0&&e.input.charCodeAt(e.position)===45&&e.input.charCodeAt(e.position+1)===45&&e.input.charCodeAt(e.position+2)===45?(e.position+=3,T(e,!0,-1)):l&&h(e,"directives end mark is expected"),Z(e,e.lineIndent-1,Se,!1,!0),T(e,!0,-1),e.checkLineBreaks&&Cl.test(e.input.slice(n,e.position))&&Ae(e,"non-ASCII line breaks are interpreted as content"),e.documents.push(e.result),e.position===e.lineStart&&Ce(e)){e.input.charCodeAt(e.position)===46&&(e.position+=3,T(e,!0,-1));return}if(e.position<e.length-1)h(e,"end of the stream or a document separator is expected");else return}function jr(e,n){e=String(e),n=n||{},e.length!==0&&(e.charCodeAt(e.length-1)!==10&&e.charCodeAt(e.length-1)!==13&&(e+=`
`),e.charCodeAt(0)===65279&&(e=e.slice(1)));var r=new Il(e,n),t=e.indexOf("\0");for(t!==-1&&(r.position=t,h(r,"null byte is not allowed in input")),r.input+="\0";r.input.charCodeAt(r.position)===32;)r.lineIndent+=1,r.position+=1;for(;r.position<r.length-1;)Gl(r);return r.documents}function Ul(e,n,r){n!==null&&typeof n=="object"&&typeof r>"u"&&(r=n,n=null);var t=jr(e,r);if(typeof n!="function")return t;for(var i=0,l=t.length;i<l;i+=1)n(t[i])}function zl(e,n){var r=jr(e,n);if(r.length!==0){if(r.length===1)return r[0];throw new F("expected a single document in the stream, but found more")}}var Yl=Ul,Vl=zl,Fr={loadAll:Yl,load:Vl},Ir=Object.prototype.toString,Pr=Object.prototype.hasOwnProperty,rn=65279,$l=9,pe=10,Jl=13,Kl=32,Wl=33,Ql=34,ze=35,Zl=37,Xl=38,ea=39,na=42,Dr=44,ra=45,we=58,ia=61,ta=62,oa=63,la=64,Or=91,Nr=93,aa=96,Mr=123,sa=124,qr=125,j={};j[0]="\\0";j[7]="\\a";j[8]="\\b";j[9]="\\t";j[10]="\\n";j[11]="\\v";j[12]="\\f";j[13]="\\r";j[27]="\\e";j[34]='\\"';j[92]="\\\\";j[133]="\\N";j[160]="\\_";j[8232]="\\L";j[8233]="\\P";var ca=["y","Y","yes","Yes","YES","on","On","ON","n","N","no","No","NO","off","Off","OFF"],ua=/^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;function pa(e,n){var r,t,i,l,o,a,s;if(n===null)return{};for(r={},t=Object.keys(n),i=0,l=t.length;i<l;i+=1)o=t[i],a=String(n[o]),o.slice(0,2)==="!!"&&(o="tag:yaml.org,2002:"+o.slice(2)),s=e.compiledTypeMap.fallback[o],s&&Pr.call(s.styleAliases,a)&&(a=s.styleAliases[a]),r[o]=a;return r}function da(e){var n,r,t;if(n=e.toString(16).toUpperCase(),e<=255)r="x",t=2;else if(e<=65535)r="u",t=4;else if(e<=4294967295)r="U",t=8;else throw new F("code point within a string may not be greater than 0xFFFFFFFF");return"\\"+r+L.repeat("0",t-n.length)+n}var fa=1,de=2;function ma(e){this.schema=e.schema||Xe,this.indent=Math.max(1,e.indent||2),this.noArrayIndent=e.noArrayIndent||!1,this.skipInvalid=e.skipInvalid||!1,this.flowLevel=L.isNothing(e.flowLevel)?-1:e.flowLevel,this.styleMap=pa(this.schema,e.styles||null),this.sortKeys=e.sortKeys||!1,this.lineWidth=e.lineWidth||80,this.noRefs=e.noRefs||!1,this.noCompatMode=e.noCompatMode||!1,this.condenseFlow=e.condenseFlow||!1,this.quotingType=e.quotingType==='"'?de:fa,this.forceQuotes=e.forceQuotes||!1,this.replacer=typeof e.replacer=="function"?e.replacer:null,this.implicitTypes=this.schema.compiledImplicit,this.explicitTypes=this.schema.compiledExplicit,this.tag=null,this.result="",this.duplicates=[],this.usedDuplicates=null}function Pn(e,n){for(var r=L.repeat(" ",n),t=0,i=-1,l="",o,a=e.length;t<a;)i=e.indexOf(`
`,t),i===-1?(o=e.slice(t),t=a):(o=e.slice(t,i+1),t=i+1),o.length&&o!==`
`&&(l+=r),l+=o;return l}function Ye(e,n){return`
`+L.repeat(" ",e.indent*n)}function ga(e,n){var r,t,i;for(r=0,t=e.implicitTypes.length;r<t;r+=1)if(i=e.implicitTypes[r],i.resolve(n))return!0;return!1}function ke(e){return e===Kl||e===$l}function fe(e){return 32<=e&&e<=126||161<=e&&e<=55295&&e!==8232&&e!==8233||57344<=e&&e<=65533&&e!==rn||65536<=e&&e<=1114111}function Dn(e){return fe(e)&&e!==rn&&e!==Jl&&e!==pe}function On(e,n,r){var t=Dn(e),i=t&&!ke(e);return(r?t:t&&e!==Dr&&e!==Or&&e!==Nr&&e!==Mr&&e!==qr)&&e!==ze&&!(n===we&&!i)||Dn(n)&&!ke(n)&&e===ze||n===we&&i}function ha(e){return fe(e)&&e!==rn&&!ke(e)&&e!==ra&&e!==oa&&e!==we&&e!==Dr&&e!==Or&&e!==Nr&&e!==Mr&&e!==qr&&e!==ze&&e!==Xl&&e!==na&&e!==Wl&&e!==sa&&e!==ia&&e!==ta&&e!==ea&&e!==Ql&&e!==Zl&&e!==la&&e!==aa}function va(e){return!ke(e)&&e!==we}function oe(e,n){var r=e.charCodeAt(n),t;return r>=55296&&r<=56319&&n+1<e.length&&(t=e.charCodeAt(n+1),t>=56320&&t<=57343)?(r-55296)*1024+t-56320+65536:r}function Rr(e){var n=/^\n* /;return n.test(e)}var Br=1,Ve=2,Hr=3,Gr=4,K=5;function ba(e,n,r,t,i,l,o,a){var s,c=0,d=null,u=!1,f=!1,g=t!==-1,b=-1,y=ha(oe(e,0))&&va(oe(e,e.length-1));if(n||o)for(s=0;s<e.length;c>=65536?s+=2:s++){if(c=oe(e,s),!fe(c))return K;y=y&&On(c,d,a),d=c}else{for(s=0;s<e.length;c>=65536?s+=2:s++){if(c=oe(e,s),c===pe)u=!0,g&&(f=f||s-b-1>t&&e[b+1]!==" ",b=s);else if(!fe(c))return K;y=y&&On(c,d,a),d=c}f=f||g&&s-b-1>t&&e[b+1]!==" "}return!u&&!f?y&&!o&&!i(e)?Br:l===de?K:Ve:r>9&&Rr(e)?K:o?l===de?K:Ve:f?Gr:Hr}function ya(e,n,r,t,i){e.dump=(function(){if(n.length===0)return e.quotingType===de?'""':"''";if(!e.noCompatMode&&(ca.indexOf(n)!==-1||ua.test(n)))return e.quotingType===de?'"'+n+'"':"'"+n+"'";var l=e.indent*Math.max(1,r),o=e.lineWidth===-1?-1:Math.max(Math.min(e.lineWidth,40),e.lineWidth-l),a=t||e.flowLevel>-1&&r>=e.flowLevel;function s(c){return ga(e,c)}switch(ba(n,a,e.indent,o,s,e.quotingType,e.forceQuotes&&!t,i)){case Br:return n;case Ve:return"'"+n.replace(/'/g,"''")+"'";case Hr:return"|"+Nn(n,e.indent)+Mn(Pn(n,l));case Gr:return">"+Nn(n,e.indent)+Mn(Pn(_a(n,o),l));case K:return'"'+xa(n)+'"';default:throw new F("impossible error: invalid scalar style")}})()}function Nn(e,n){var r=Rr(e)?String(n):"",t=e[e.length-1]===`
`,i=t&&(e[e.length-2]===`
`||e===`
`),l=i?"+":t?"":"-";return r+l+`
`}function Mn(e){return e[e.length-1]===`
`?e.slice(0,-1):e}function _a(e,n){for(var r=/(\n+)([^\n]*)/g,t=(function(){var c=e.indexOf(`
`);return c=c!==-1?c:e.length,r.lastIndex=c,qn(e.slice(0,c),n)})(),i=e[0]===`
`||e[0]===" ",l,o;o=r.exec(e);){var a=o[1],s=o[2];l=s[0]===" ",t+=a+(!i&&!l&&s!==""?`
`:"")+qn(s,n),i=l}return t}function qn(e,n){if(e===""||e[0]===" ")return e;for(var r=/ [^ ]/g,t,i=0,l,o=0,a=0,s="";t=r.exec(e);)a=t.index,a-i>n&&(l=o>i?o:a,s+=`
`+e.slice(i,l),i=l+1),o=a;return s+=`
`,e.length-i>n&&o>i?s+=e.slice(i,o)+`
`+e.slice(o+1):s+=e.slice(i),s.slice(1)}function xa(e){for(var n="",r=0,t,i=0;i<e.length;r>=65536?i+=2:i++)r=oe(e,i),t=j[r],!t&&fe(r)?(n+=e[i],r>=65536&&(n+=e[i+1])):n+=t||da(r);return n}function Sa(e,n,r){var t="",i=e.tag,l,o,a;for(l=0,o=r.length;l<o;l+=1)a=r[l],e.replacer&&(a=e.replacer.call(r,String(l),a)),(H(e,n,a,!1,!1)||typeof a>"u"&&H(e,n,null,!1,!1))&&(t!==""&&(t+=","+(e.condenseFlow?"":" ")),t+=e.dump);e.tag=i,e.dump="["+t+"]"}function Rn(e,n,r,t){var i="",l=e.tag,o,a,s;for(o=0,a=r.length;o<a;o+=1)s=r[o],e.replacer&&(s=e.replacer.call(r,String(o),s)),(H(e,n+1,s,!0,!0,!1,!0)||typeof s>"u"&&H(e,n+1,null,!0,!0,!1,!0))&&((!t||i!=="")&&(i+=Ye(e,n)),e.dump&&pe===e.dump.charCodeAt(0)?i+="-":i+="- ",i+=e.dump);e.tag=l,e.dump=i||"[]"}function Aa(e,n,r){var t="",i=e.tag,l=Object.keys(r),o,a,s,c,d;for(o=0,a=l.length;o<a;o+=1)d="",t!==""&&(d+=", "),e.condenseFlow&&(d+='"'),s=l[o],c=r[s],e.replacer&&(c=e.replacer.call(r,s,c)),H(e,n,s,!1,!1)&&(e.dump.length>1024&&(d+="? "),d+=e.dump+(e.condenseFlow?'"':"")+":"+(e.condenseFlow?"":" "),H(e,n,c,!1,!1)&&(d+=e.dump,t+=d));e.tag=i,e.dump="{"+t+"}"}function wa(e,n,r,t){var i="",l=e.tag,o=Object.keys(r),a,s,c,d,u,f;if(e.sortKeys===!0)o.sort();else if(typeof e.sortKeys=="function")o.sort(e.sortKeys);else if(e.sortKeys)throw new F("sortKeys must be a boolean or a function");for(a=0,s=o.length;a<s;a+=1)f="",(!t||i!=="")&&(f+=Ye(e,n)),c=o[a],d=r[c],e.replacer&&(d=e.replacer.call(r,c,d)),H(e,n+1,c,!0,!0,!0)&&(u=e.tag!==null&&e.tag!=="?"||e.dump&&e.dump.length>1024,u&&(e.dump&&pe===e.dump.charCodeAt(0)?f+="?":f+="? "),f+=e.dump,u&&(f+=Ye(e,n)),H(e,n+1,d,!0,u)&&(e.dump&&pe===e.dump.charCodeAt(0)?f+=":":f+=": ",f+=e.dump,i+=f));e.tag=l,e.dump=i||"{}"}function Bn(e,n,r){var t,i,l,o,a,s;for(i=r?e.explicitTypes:e.implicitTypes,l=0,o=i.length;l<o;l+=1)if(a=i[l],(a.instanceOf||a.predicate)&&(!a.instanceOf||typeof n=="object"&&n instanceof a.instanceOf)&&(!a.predicate||a.predicate(n))){if(r?a.multi&&a.representName?e.tag=a.representName(n):e.tag=a.tag:e.tag="?",a.represent){if(s=e.styleMap[a.tag]||a.defaultStyle,Ir.call(a.represent)==="[object Function]")t=a.represent(n,s);else if(Pr.call(a.represent,s))t=a.represent[s](n,s);else throw new F("!<"+a.tag+'> tag resolver accepts not "'+s+'" style');e.dump=t}return!0}return!1}function H(e,n,r,t,i,l,o){e.tag=null,e.dump=r,Bn(e,r,!1)||Bn(e,r,!0);var a=Ir.call(e.dump),s=t,c;t&&(t=e.flowLevel<0||e.flowLevel>n);var d=a==="[object Object]"||a==="[object Array]",u,f;if(d&&(u=e.duplicates.indexOf(r),f=u!==-1),(e.tag!==null&&e.tag!=="?"||f||e.indent!==2&&n>0)&&(i=!1),f&&e.usedDuplicates[u])e.dump="*ref_"+u;else{if(d&&f&&!e.usedDuplicates[u]&&(e.usedDuplicates[u]=!0),a==="[object Object]")t&&Object.keys(e.dump).length!==0?(wa(e,n,e.dump,i),f&&(e.dump="&ref_"+u+e.dump)):(Aa(e,n,e.dump),f&&(e.dump="&ref_"+u+" "+e.dump));else if(a==="[object Array]")t&&e.dump.length!==0?(e.noArrayIndent&&!o&&n>0?Rn(e,n-1,e.dump,i):Rn(e,n,e.dump,i),f&&(e.dump="&ref_"+u+e.dump)):(Sa(e,n,e.dump),f&&(e.dump="&ref_"+u+" "+e.dump));else if(a==="[object String]")e.tag!=="?"&&ya(e,e.dump,n,l,s);else{if(a==="[object Undefined]")return!1;if(e.skipInvalid)return!1;throw new F("unacceptable kind of an object to dump "+a)}e.tag!==null&&e.tag!=="?"&&(c=encodeURI(e.tag[0]==="!"?e.tag.slice(1):e.tag).replace(/!/g,"%21"),e.tag[0]==="!"?c="!"+c:c.slice(0,18)==="tag:yaml.org,2002:"?c="!!"+c.slice(18):c="!<"+c+">",e.dump=c+" "+e.dump)}return!0}function ka(e,n){var r=[],t=[],i,l;for($e(e,r,t),i=0,l=t.length;i<l;i+=1)n.duplicates.push(r[t[i]]);n.usedDuplicates=new Array(l)}function $e(e,n,r){var t,i,l;if(e!==null&&typeof e=="object")if(i=n.indexOf(e),i!==-1)r.indexOf(i)===-1&&r.push(i);else if(n.push(e),Array.isArray(e))for(i=0,l=e.length;i<l;i+=1)$e(e[i],n,r);else for(t=Object.keys(e),i=0,l=t.length;i<l;i+=1)$e(e[t[i]],n,r)}function Ca(e,n){n=n||{};var r=new ma(n);r.noRefs||ka(e,r);var t=e;return r.replacer&&(t=r.replacer.call({"":t},"",t)),H(r,0,t,!0,!0)?r.dump+`
`:""}var Ta=Ca,La={dump:Ta};function tn(e,n){return function(){throw new Error("Function yaml."+e+" is removed in js-yaml 4. Use yaml."+n+" instead, which is now safe by default.")}}var Ea=E,ja=ir,Fa=ar,Ia=dr,Pa=fr,Da=Xe,Oa=Fr.load,Na=Fr.loadAll,Ma=La.dump,qa=F,Ra={binary:br,float:pr,map:lr,null:sr,pairs:_r,set:xr,timestamp:hr,bool:cr,int:ur,merge:vr,omap:yr,seq:or,str:tr},Ba=tn("safeLoad","load"),Ha=tn("safeLoadAll","loadAll"),Ga=tn("safeDump","dump"),me={Type:Ea,Schema:ja,FAILSAFE_SCHEMA:Fa,JSON_SCHEMA:Ia,CORE_SCHEMA:Pa,DEFAULT_SCHEMA:Da,load:Oa,loadAll:Na,dump:Ma,YAMLException:qa,types:Ra,safeLoad:Ba,safeLoadAll:Ha,safeDump:Ga};const Je=e=>Ki(`/logos/${e}`),Ua="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",ie=Je("no-img.svg"),p=(e,n=e)=>({light:Je(e),dark:Je(n),fallback:Ua}),be={javascript:"javascript",typescript:"typescript",python:"python",java:"java",c:"c",cpp:"cplusplus","c++":"cplusplus",csharp:"csharp","c#":"csharp",go:"go",rust:"rust",kotlin:"kotlin",dart:"dart",php:"php",ruby:"ruby",swift:"swift",r:"r",scala:"scala",perl:"perl",lua:"lua",haskell:"haskell",elixir:"elixir",clojure:"clojure",matlab:"matlab",bash:"bash",powershell:"powershell",react:"react",reactjs:"react",vue:"vuejs",vuejs:"vuejs",angular:"angularjs",svelte:"svelte",nextjs:"nextjs",nuxt:"nuxtjs",nuxtjs:"nuxtjs",gatsby:"gatsby",ember:"ember",backbone:"backbonejs",jquery:"jquery",bootstrap:"bootstrap",tailwind:"tailwindcss",tailwindcss:"tailwindcss",materialui:"materialui",sass:"sass",less:"less",css:"css3",html:"html5",nodejs:"nodejs",node:"nodejs",express:"express",expressjs:"express",nestjs:"nestjs",fastify:"fastify",django:"django",flask:"flask",fastapi:"fastapi",spring:"spring",rails:"rails",laravel:"laravel",dotnet:"dotnetcore",".net":"dotnetcore",aspnet:"dotnetcore",postgresql:"postgresql",postgres:"postgresql",mysql:"mysql",mongodb:"mongodb",redis:"redis",sqlite:"sqlite",oracle:"oracle",mariadb:"mariadb",cassandra:"cassandra",neo4j:"neo4j",firebase:"firebase",dynamodb:"dynamodb",docker:"docker",kubernetes:"kubernetes",aws:"amazonwebservices",azure:"azure",gcp:"googlecloud",googlecloud:"googlecloud",heroku:"heroku",nginx:"nginx",apache:"apache",jenkins:"jenkins",circleci:"circleci",travisci:"travis",terraform:"terraform",ansible:"ansible",vagrant:"vagrant",git:"git",github:"github",gitlab:"gitlab",bitbucket:"bitbucket",vscode:"vscode",vim:"vim",jetbrains:"jetbrains",intellij:"intellij",webpack:"webpack",vite:"vitejs",babel:"babel",eslint:"eslint",npm:"npm",yarn:"yarn",pnpm:"pnpm",gradle:"gradle",maven:"maven",cmake:"cmake",jest:"jest",mocha:"mocha",jasmine:"jasmine",selenium:"selenium",cypress:"cypressio",pytest:"pytest",playwright:"playwright",streamlit:"streamlit",android:"android",flutter:"flutter",reactnative:"react",ionic:"ionic",xamarin:"xamarin",linux:"linux",ubuntu:"ubuntu",debian:"debian",centos:"centos",windows:"windows8",apple:"apple",macos:"apple",raspberrypi:"raspberrypi",graphql:"graphql",kafka:"apachekafka",rabbitmq:"rabbitmq",electron:"electron",figma:"figma",sketch:"sketch",photoshop:"photoshop",illustrator:"illustrator",blender:"blender",unity:"unity",unrealengine:"unrealengine",threejs:"threejs",opencv:"opencv",tensorflow:"tensorflow",pytorch:"pytorch",pandas:"pandas",numpy:"numpy",jupyter:"jupyter",anaconda:"anaconda",markdown:"markdown",latex:"latex",wordpress:"wordpress",drupal:"drupal",jira:"jira",confluence:"confluence",trello:"trello",slack:"slack",postman:"postman",insomnia:"insomnia",swagger:"swagger"};function ve(e){return e.toLowerCase().replace(/[.\-_\s]/g,"").replace(/js$/i,"").replace(/\.js$/i,"").replace(/lang$/i,"")}function za(e){const n=ve(e);for(const[l,o]of Object.entries(be))if(ve(l)===n)return o;for(const[l,o]of Object.entries(be)){const a=ve(l);if(n.includes(a)||a.includes(n))return o}const r={node:"nodejs",js:"javascript",ts:"typescript",py:"python",rb:"ruby",cpp:"cplusplus",cxx:"cplusplus",cs:"csharp",postgres:"postgresql",mongo:"mongodb",k8s:"kubernetes",tf:"terraform",vue:"vuejs",react:"react",ng:"angularjs",angular:"angularjs",next:"nextjs",nuxt:"nuxtjs",tailwind:"tailwindcss",tw:"tailwindcss",bs:"bootstrap",electron:"electron",deno:"denojs",bun:"bun",aws:"amazonwebservices",gcloud:"googlecloud",gc:"googlecloud",az:"azure",gh:"github",gl:"gitlab",vsc:"vscode",code:"vscode",vim:"vim",nvim:"neovim",neovim:"neovim",intellij:"intellij",idea:"intellij",pycharm:"pycharm",webstorm:"webstorm"};if(r[n])return r[n];let t,i=1/0;for(const[l,o]of Object.entries(be)){const a=Ya(n,ve(l));a<i&&a<=2&&(i=a,t=o)}return t}function Ya(e,n){if(e.length===0)return n.length;if(n.length===0)return e.length;const r=[];for(let t=0;t<=n.length;t++)r[t]=[t];for(let t=0;t<=e.length;t++)r[0][t]=t;for(let t=1;t<=n.length;t++)for(let i=1;i<=e.length;i++)n.charAt(t-1)===e.charAt(i-1)?r[t][i]=r[t-1][i-1]:r[t][i]=Math.min(r[t-1][i-1]+1,r[t][i-1]+1,r[t-1][i]+1);return r[n.length][e.length]}const Va=new Set(["unknown","none","null","undefined","","n/a","na","no-img","placeholder","autonomy","autonomie","creativity","créativité","creativite","teamwork","travail d'équipe","travail equipe","communication","leadership","problem-solving","problem solving","résolution de problèmes","adaptability","adaptabilité","adaptabilite","time-management","time management","gestion du temps","critical-thinking","critical thinking","pensée critique","collaboration","motivation","organization","organisation","flexibility","flexibilité","flexibilite","patience","empathy","empathie","curiosity","curiosité","curiosite","rigor","rigueur","initiative","perseverance","persévérance","perseverance","soft skill","soft skills"]);function Ur(e){if(!e)return!0;const n=e.toLowerCase().trim();return n.length===0?!0:Va.has(n)}function $a(e,n="original"){if(Ur(e))return;let r=be[e.toLowerCase()];if(r||(r=za(e)),!!r)return`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${r}/${r}-${n}.svg`}function Ja(e){if(Ur(e))return{light:ie,dark:ie,fallback:ie};const n=$a(e);if(n)return{light:n,dark:n,fallback:ie};const t=`https://cdn.simpleicons.org/${e.toLowerCase().replace(/[^a-z0-9]/g,"")}`;return{light:t,dark:t,fallback:ie}}const le={AWS:p("aws.svg"),Bootstrap:p("bootstrap.svg"),C:p("c.svg"),Cpp:p("cpp.svg"),Celery:p("celery.svg"),Django:p("django.svg"),FastApi:p("fastapi"),Flask:p("flask.svg"),Go:p("go.svg"),Kafka:p("kafka.svg"),Neo4j:p("neo4j.svg"),Nginx:p("nginx.svg"),Numpy:p("numpy.svg"),Pandas:p("pandas.svg"),RabbitMQ:p("rabbitmq.svg"),Rust:p("rust.svg"),Scrapy:p("scrapy.png"),Selenium:p("selenium.svg"),Docker:p("docker.svg"),Kubernetes:p("kubernetes.svg"),Csharp:p("csharp.svg"),CSharp:p("csharp.svg"),Xamarin:p("xamarin.svg"),TypeScript:p("typescript-original.svg"),VueJs:p("vuejs-original.svg"),ReactJs:p("react.svg"),Dart:p("dart.png"),Kotlin:p("kotlin.png"),Python:p("python.png"),NodeJs:p("nodejs-original.svg"),Deno:p("deno.svg"),Svelte:p("svelte.svg"),ExpressJs:p("express.png"),Express:p("express.png"),JavaScript:p("javascript-original.svg"),Fastify:p("fastify.svg"),NestJs:p("nest.svg"),Quasar:p("quasar.svg"),SolidJs:p("solid.svg"),Electron:p("electron.png"),Flutter:p("flutter.svg"),Java:p("java.png"),AdonisJs:p("adonis.png"),Android:p("android.png"),Angular:p("angular.png"),PostgreSQL:p("postgresql-original.svg"),Firebase:p("firebase.png"),Sass:p("sass.png"),Unknown:p("no-img.svg"),MongoDB:p("mongodb.svg"),Redis:p("redis.svg"),Tailwind:p("tailwind.svg"),TailwindCSS:p("tailwindcss-original.svg"),HTML:p("html.svg"),Premiere:p("premiere.svg"),Photoshop:p("photoshop.svg"),CSS:p("css.svg"),AfterEffects:p("after-effects.svg"),Illustrator:p("illustrator.svg"),Nuxt:p("nuxt.png"),Vite:p("vite.png"),Vitest:p("vitest.svg"),Jest:p("jest.png"),Unocss:p("unocss.svg"),Ruvy:p("ruvy.svg"),Postcss:p("postcss.svg"),Soleil:p("soleil.png"),AGH:p("agh.png"),InTech:p("intech.png"),ESIEA:p("esiea.png"),PMF:p("pmf.png"),Git:p("git-original.svg"),Linux:p("linux-original.svg"),SQLite:p("sqlite-original.svg"),CICD:p("cicd.svg"),Arduino:p("arduino-original.svg"),DotNet:p("dotnet-original.svg"),Grafana:p("grafana-original.svg"),Hugo:p("hugo-original.svg"),Ionic:p("ionic-original.svg"),MariaDB:p("mariadb-original.svg"),MySQL:p("mysql-original.svg"),OpenCV:p("opencv-original.svg"),Oracle:p("oracle-original.svg"),PHP:p("php-original.svg"),Postman:p("postman-original.svg"),Spring:p("spring-original.svg"),TensorFlow:p("tensorflow-original.svg"),Unity:p("unity-original.svg"),Apache:p("apache-original.svg"),Apache2:p("apache-original.svg"),Playwright:p("playwright-original.svg"),Streamlit:p("streamlit-original.svg"),RedisDB:p("redis-original.svg"),PaperMC:p("papermc.svg"),Velocity:p("velocity.svg"),BungeeCord:p("bungeecord.svg"),Spigot:p("spigot.svg"),Skript:p("skript.svg"),OpenXR:p("openxr.svg"),Teamwork:p("no-img.svg"),Autonomy:p("no-img.svg"),Creativity:p("no-img.svg"),MiniArticle:p("mini-article.png")};var O=(e=>(e.FullTime="Full-time",e.PartTime="Part-time",e.SelfEmployed="Self-employed",e.Freelance="Freelance",e.Contract="Contract",e.Internship="Internship",e.Apprenticeship="Apprenticeship",e))(O||{}),C=(e=>(e.Image="image",e.PDF="pdf",e.Document="document",e.Archive="archive",e.Video="video",e.Audio="audio",e.Code="code",e.Link="link",e.Other="other",e))(C||{});function Te(e,n=new Date){if(e instanceof Date&&!isNaN(e.getTime()))return e;if(typeof e=="string"){const r=e.match(/^(\d{4})-(\d{2})-(\d{2})$/);if(r){const[,i,l,o]=r;return new Date(parseInt(i),parseInt(l)-1,parseInt(o))}const t=new Date(e);if(!isNaN(t.getTime()))return t}return console.log("[parseDate] Failed to parse:",e,"- using fallback"),n}function Le(e){if(e){if(e instanceof Date&&!isNaN(e.getTime()))return e;if(typeof e=="string"){const n=e.match(/^(\d{4})-(\d{2})-(\d{2})$/);if(n){const[,t,i,l]=n;return new Date(parseInt(t),parseInt(i)-1,parseInt(l))}const r=new Date(e);if(!isNaN(r.getTime()))return r}}}function Re(e){return e.light.includes("no-img")||e.light===le.Unknown.light}function X(e){if(!e)return le.Unknown;let n=le[e];if(n&&!Re(n))return n;const r=[e,e.charAt(0).toUpperCase()+e.slice(1),e.toUpperCase(),e.toLowerCase(),e.replace(/(?:^|[-_])(\w)/g,(o,a)=>a?a.toUpperCase():"")];for(const o of r)if(n=le[o],n&&!Re(n))return n;const t={react:"ReactJs",node:"NodeJs",js:"JavaScript",ts:"TypeScript",vue:"VueJs",express:"ExpressJs",postgres:"PostgreSQL",postgresql:"PostgreSQL",mongo:"MongoDB",tailwindcss:"Tailwind"},i=e.toLowerCase();return t[i]&&(n=le[t[i]],n&&!Re(n))?n:Ja(e)}function on(e){return e?e.replace(/^#{1,6}\s+/gm,"").replace(/\*\*([^*]+)\*\*/g,"$1").replace(/\*([^*]+)\*/g,"$1").replace(/__([^_]+)__/g,"$1").replace(/_([^_]+)_/g,"$1").replace(/\[([^\]]+)\]\([^)]+\)/g,"$1").replace(/!\[[^\]]*\]\([^)]+\)/g,"").replace(/```[\s\S]*?```/g,"").replace(/`([^`]+)`/g,"$1").replace(/^[\s]*[-*+]\s+/gm,"").replace(/^[\s]*\d+\.\s+/gm,"").replace(/^>\s+/gm,"").replace(/^[-*_]{3,}$/gm,"").replace(/\n{2,}/g," ").replace(/\n/g," ").replace(/\s{2,}/g," ").trim():""}function Ee(e){return Array.isArray(e)?e.map(n=>({to:n.to||"",label:n.label||"",newTab:n.newTab??!0})):[]}function Ka(e){return Array.isArray(e)?e.map(n=>({src:n.src||"",label:n.label||""})):[]}function Hn(e){const n=e.toLowerCase();return/\.(jpg|jpeg|png|gif|webp|svg|bmp|ico)(\?.*)?$/i.test(n)||n.includes("unsplash.com")||n.includes("imgur.com")?C.Image:/\.pdf(\?.*)?$/i.test(n)?C.PDF:/\.(doc|docx|odt|rtf|txt|xls|xlsx|ppt|pptx)(\?.*)?$/i.test(n)?C.Document:/\.(zip|rar|7z|tar|gz|bz2)(\?.*)?$/i.test(n)?C.Archive:/\.(mp4|webm|avi|mov|mkv)(\?.*)?$/i.test(n)||n.includes("youtube.com")||n.includes("youtu.be")||n.includes("vimeo.com")?C.Video:/\.(mp3|wav|ogg|flac|aac)(\?.*)?$/i.test(n)?C.Audio:/\.(js|ts|py|java|c|cpp|cs|go|rs|rb|php|html|css|json|xml|yaml|yml|sh|bash)(\?.*)?$/i.test(n)||n.includes("github.com")||n.includes("gitlab.com")||n.includes("gist.github.com")?C.Code:n.startsWith("http://")||n.startsWith("https://")?C.Link:C.Other}function Wa(e){return{[C.Image]:"i-carbon-image",[C.PDF]:"i-carbon-document-pdf",[C.Document]:"i-carbon-document",[C.Archive]:"i-carbon-zip",[C.Video]:"i-carbon-video",[C.Audio]:"i-carbon-music",[C.Code]:"i-carbon-code",[C.Link]:"i-carbon-link",[C.Other]:"i-carbon-attachment"}[e]||"i-carbon-attachment"}function je(e){return Array.isArray(e)?e.map(n=>{const r=n.src||n.url||"",t=n.type&&C[n.type]||Hn(r),i=r.startsWith("http://")||r.startsWith("https://");return{label:n.label||n.name||"Pièce jointe",src:r,type:t,description:n.description||void 0,size:n.size||void 0,icon:n.icon||Wa(t),newTab:n.newTab??i}}):[]}function Qa(e){return{FullTime:O.FullTime,"Full-time":O.FullTime,PartTime:O.PartTime,"Part-time":O.PartTime,SelfEmployed:O.SelfEmployed,"Self-employed":O.SelfEmployed,Freelance:O.Freelance,Contract:O.Contract,Internship:O.Internship,Apprenticeship:O.Apprenticeship}[e||""]||O.Contract}function ge(e){return(e.split("/").pop()||"").replace(/\.(md|yaml|yml)$/,"")}function ee(e,n){const r=e.replace(/\r\n/g,`
`).replace(/\r/g,`
`),t=/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/,i=r.match(t);if(!i)return console.log(`[parseMarkdownFile] No frontmatter found for ${n}, raw starts with:`,r.substring(0,50)),{meta:{slug:n},content:r};const[,l,o]=i;try{const a=me.load(l);return console.log(`[parseMarkdownFile] Parsed ${n}:`,JSON.stringify(a)),{meta:{...a,slug:n},content:o.trim()}}catch(a){return console.error(`Error parsing frontmatter for ${n}:`,a),{meta:{slug:n},content:(o==null?void 0:o.trim())||r}}}const Ke=[{name:"Programming Languages",slug:"pro-lang"},{name:"Frameworks",slug:"framework"},{name:"Libraries",slug:"library"},{name:"Languages",slug:"lang"},{name:"Databases",slug:"db"},{name:"ORMs",slug:"orm"},{name:"DevOps",slug:"devops"},{name:"Testing",slug:"test"},{name:"Dev Tools",slug:"devtools"},{name:"Markup & Style",slug:"markup-style"},{name:"Design",slug:"design"},{name:"Soft Skills",slug:"soft"}];function Za(e){if(e)return Ke.find(n=>n.slug===e)}const Xa=Object.assign({"/content/blog/blog-platform-demo.md":Wi,"/content/blog/georges-le-chat.md":Qi,"/content/blog/getting-started-with-svelte.md":Zi,"/content/blog/mini-article.md":Xi,"/content/blog/modern-css-techniques.md":et,"/content/blog/sveltekit-full-stack-framework.md":nt,"/content/blog/typescript-best-practices.md":rt}),es=Object.assign({"/content/projects/template-project.md":it,"/content/projects/template-svelte.md":tt}),Gn=Object.assign({"/content/skills/apache2.md":ot,"/content/skills/arduino.md":lt,"/content/skills/autonomy.md":at,"/content/skills/bungeecord.md":st,"/content/skills/c.md":ct,"/content/skills/ci-cd.md":ut,"/content/skills/creativity.md":pt,"/content/skills/csharp.md":dt,"/content/skills/css.md":ft,"/content/skills/dart.md":mt,"/content/skills/docker-swarm.md":gt,"/content/skills/docker.md":ht,"/content/skills/dotnet.md":vt,"/content/skills/electron.md":bt,"/content/skills/expressjs.md":yt,"/content/skills/firebase.md":_t,"/content/skills/flask.md":xt,"/content/skills/flutter.md":St,"/content/skills/git.md":At,"/content/skills/grafana.md":wt,"/content/skills/html.md":kt,"/content/skills/hugo.md":Ct,"/content/skills/ionic.md":Tt,"/content/skills/java.md":Lt,"/content/skills/javascript.md":Et,"/content/skills/kubernetes.md":jt,"/content/skills/linux.md":Ft,"/content/skills/mariadb.md":It,"/content/skills/minikube.md":Pt,"/content/skills/mongodb.md":Dt,"/content/skills/mysql.md":Ot,"/content/skills/nginx.md":Nt,"/content/skills/nodejs.md":Mt,"/content/skills/opencv.md":qt,"/content/skills/openxr.md":Rt,"/content/skills/oracle.md":Bt,"/content/skills/pandas.md":Ht,"/content/skills/papermc.md":Gt,"/content/skills/photoshop.md":Ut,"/content/skills/php.md":zt,"/content/skills/playwright.md":Yt,"/content/skills/postgresql.md":Vt,"/content/skills/postman.md":$t,"/content/skills/python.md":Jt,"/content/skills/reactjs.md":Kt,"/content/skills/redis.md":Wt,"/content/skills/rust.md":Qt,"/content/skills/sass.md":Zt,"/content/skills/selenium.md":Xt,"/content/skills/skript.md":eo,"/content/skills/spigot.md":no,"/content/skills/spring.md":ro,"/content/skills/sqlite.md":io,"/content/skills/streamlit.md":to,"/content/skills/svelte.md":oo,"/content/skills/tailwind.md":lo,"/content/skills/teamwork.md":ao,"/content/skills/tensorflow.md":so,"/content/skills/typescript.md":co,"/content/skills/unity.md":uo,"/content/skills/velocity.md":po,"/content/skills/vuejs.md":fo}),ns=Object.assign({"/content/experience/agh-batiment.md":mo,"/content/experience/synchrotron-soleil.md":go}),rs=Object.assign({"/content/education/esiea.md":ho,"/content/education/intech.md":vo,"/content/education/pmf.md":bo});let Be=null;function ln(){if(Be)return Be;console.log("[loadAllSkills] Starting to load skills..."),console.log("[loadAllSkills] skillFiles keys:",Object.keys(Gn));const e=[];for(const[n,r]of Object.entries(Gn)){const t=ge(n),{meta:i,content:l}=ee(r,t);if(i.published===!1){console.log(`[loadAllSkills] Skipping ${t} (published: false)`);continue}console.log(`[loadAllSkills] Processing ${t}:`,{name:i.name,logo:i.logo,rawLogoType:typeof i.logo}),e.push({slug:i.slug||t,name:i.name||t,logo:X(i.logo),description:l||i.name||"",color:i.color||"gray",category:Za(i.category)})}return Be=e,e}function zr(...e){const n=ln();return e.length===0?n:n.filter(r=>e.includes(r.slug))}function Ts(e=""){const n=ln(),r=[],t=[];return n.forEach(i=>{if(e.trim()&&!i.name.toLowerCase().includes(e.trim().toLowerCase()))return;if(!i.category){t.push(i);return}let l=r.find(o=>{var a;return o.category.slug===((a=i.category)==null?void 0:a.slug)});l||(l={items:[],category:i.category},r.push(l)),l.items.push(i)}),t.length!==0&&r.push({category:{name:"Others",slug:"others"},items:t}),r.sort((i,l)=>{const o=Ke.findIndex(s=>s.slug===i.category.slug),a=Ke.findIndex(s=>s.slug===l.category.slug);return o===-1?1:a===-1?-1:o-a}),r.forEach(i=>{i.items.sort((l,o)=>l.name.localeCompare(o.name))}),r}function is(){const e=[];for(const[n,r]of Object.entries(Xa)){const t=ge(n),{meta:i,content:l}=ee(r,t);i.published!==!1&&e.push({slug:i.slug||t,name:i.name||i.title||t,title:i.title||i.name||t,logo:X(i.logo),excerpt:i.excerpt||"",shortDescription:i.excerpt||"",description:l,content:l,author:i.author||"Anonymous",publishedAt:Te(i.publishedAt),updatedAt:Le(i.updatedAt),tags:i.tags||[],coverImage:i.coverImage?X(i.coverImage):void 0,readingTime:i.readingTime||Math.ceil(l.split(/\s+/).length/200),color:i.color,links:Ee(i.links),pinned:i.pinned||!1})}return e.sort((n,r)=>r.publishedAt.getTime()-n.publishedAt.getTime())}function ts(){var n,r;const e=[];for(const[t,i]of Object.entries(es)){const l=ge(t),{meta:o,content:a}=ee(i,l);o.published!==!1&&e.push({slug:o.slug||l,name:o.name||l,logo:X(o.logo),shortDescription:on(a).substring(0,200),description:a,color:o.color||"gray",type:o.type||"Project",period:{from:Te((n=o.period)==null?void 0:n.from),to:Le((r=o.period)==null?void 0:r.to)},skills:zr(...o.skills||[]),links:Ee(o.links),screenshots:Ka(o.screenshots),attachments:je(o.attachments)})}return e.sort((t,i)=>i.period.from.getTime()-t.period.from.getTime())}function os(){var n,r,t;const e=[];for(const[i,l]of Object.entries(ns)){const o=ge(i),{meta:a,content:s}=ee(l,o);a.published!==!1&&(console.log(`[loadAllExperiences] ${o}:`,{name:a.name,shortDescription:(n=a.shortDescription)==null?void 0:n.substring(0,50),period:a.period}),e.push({slug:a.slug||o,name:a.name||o,logo:X(a.logo),shortDescription:a.shortDescription||on(s).substring(0,200),description:s,company:a.company||"",location:a.location||"",contract:Qa(a.contract),type:a.type||"Development",color:a.color||"gray",period:{from:Te((r=a.period)==null?void 0:r.from),to:Le((t=a.period)==null?void 0:t.to)},skills:zr(...a.skills||[]),links:Ee(a.links),attachments:je(a.attachments)}))}return e.sort((i,l)=>l.period.from.getTime()-i.period.from.getTime())}function ls(){var n,r;const e=[];for(const[t,i]of Object.entries(rs)){const l=ge(t),{meta:o,content:a}=ee(i,l);o.published!==!1&&e.push({slug:o.slug||l,name:o.name||l,logo:X(o.logo),shortDescription:o.shortDescription||on(a).substring(0,200),description:a,degree:o.degree||"",organization:o.organization||"",location:o.location||"",color:o.color,period:{from:Te((n=o.period)==null?void 0:n.from),to:Le((r=o.period)==null?void 0:r.to)},subjects:o.subjects||[],links:Ee(o.links),attachments:je(o.attachments)})}return e.sort((t,i)=>i.period.from.getTime()-t.period.from.getTime())}const as=Object.assign({"/content/about.md":yo});function ss(){const e=Object.values(as)[0];if(!e)return console.log("[loadAboutPage] No about.md file found"),{title:"À propos",content:"",attachments:[]};const{meta:n,content:r}=ee(e,"about");return{title:n.title||"À propos",content:r,attachments:je(n.attachments)}}const cs=Object.assign({"/content/site.yaml":_o}),us=Object.assign({"/content/pages/home.yaml":xo}),ps=Object.assign({"/content/pages/resume.yaml":So}),ds=Object.assign({"/content/pages/contact.yaml":Ao});function an(){const e=Object.values(cs)[0];if(!e)return{firstName:"Prénom",lastName:"NOM",jobTitle:"Développeur",email:"contact@example.com",socialLinks:[],inConstruction:{enabled:!1,title:"",message:""}};const n=e.replace(/\r\n/g,`
`).replace(/\r/g,`
`),r=me.load(n),t=r.inConstruction;return{firstName:r.firstName||"Prénom",lastName:r.lastName||"NOM",jobTitle:r.jobTitle||"Développeur",email:r.email||"contact@example.com",socialLinks:(r.socialLinks||[]).map(i=>({label:i.label,href:i.href,icon:i.icon})),inConstruction:{enabled:(t==null?void 0:t.enabled)??!1,title:(t==null?void 0:t.title)||"",message:(t==null?void 0:t.message)||""}}}function fs(){const e=an(),n=Object.values(us)[0];let r="Accueil",t="";if(n){const i=n.replace(/\r\n/g,`
`).replace(/\r/g,`
`),l=me.load(i);r=l.title||"Accueil";const o=l.hero;t=(o==null?void 0:o.description)||""}return{title:r,heroDescription:t,socialLinks:e.socialLinks,fullName:`${e.firstName} ${e.lastName}`}}function ms(){const e=Object.values(ps)[0];if(!e)return{title:"CV",pdfPath:"/pdf/cv.pdf",downloadLabel:"Télécharger",fullscreenLabel:"Plein écran"};const n=e.replace(/\r\n/g,`
`).replace(/\r/g,`
`),r=me.load(n);return{title:r.title||"CV",pdfPath:r.pdfPath||"/pdf/cv.pdf",downloadLabel:r.downloadLabel||"Télécharger",fullscreenLabel:r.fullscreenLabel||"Plein écran"}}function gs(){const e=an(),n=Object.values(ds)[0],r={title:"Contact",description:"N'hésitez pas à me contacter.",email:e.email,form:{nameLabel:"Nom",namePlaceholder:"Votre nom",emailLabel:"Email",emailPlaceholder:"votre@email.com",messageLabel:"Message",messagePlaceholder:"Votre message...",submitLabel:"Envoyer",sendingLabel:"Envoi en cours..."},messages:{success:"Message envoyé avec succès !",error:"Une erreur est survenue.",validationError:"Veuillez remplir tous les champs."}};if(!n)return r;const t=n.replace(/\r\n/g,`
`).replace(/\r/g,`
`),i=me.load(t),l=i.form,o=i.messages;return{title:i.title||r.title,description:i.description||r.description,email:i.email||r.email,form:{nameLabel:(l==null?void 0:l.nameLabel)||r.form.nameLabel,namePlaceholder:(l==null?void 0:l.namePlaceholder)||r.form.namePlaceholder,emailLabel:(l==null?void 0:l.emailLabel)||r.form.emailLabel,emailPlaceholder:(l==null?void 0:l.emailPlaceholder)||r.form.emailPlaceholder,messageLabel:(l==null?void 0:l.messageLabel)||r.form.messageLabel,messagePlaceholder:(l==null?void 0:l.messagePlaceholder)||r.form.messagePlaceholder,submitLabel:(l==null?void 0:l.submitLabel)||r.form.submitLabel,sendingLabel:(l==null?void 0:l.sendingLabel)||r.form.sendingLabel},messages:{success:(o==null?void 0:o.success)||r.messages.success,error:(o==null?void 0:o.error)||r.messages.error,validationError:(o==null?void 0:o.validationError)||r.messages.validationError}}}const Un=an(),Ls=fs(),Es=ms(),js=gs(),Fs=ss(),Is={title:"Blog",items:is()},Ps={title:"Projets",items:ts()},Ds={title:"Skills",items:ln()},Os={title:"Expérience",items:os()},Ns={title:"Formation",items:ls()},hs=`${Un.firstName} ${Un.lastName}`,vs={title:hs,icon:"i-carbon-code"},bs=[{title:"À Propos",icon:"i-carbon-user",href:"/about"},{title:"Skills",icon:"i-carbon-assembly-cluster",href:"/skills"},{title:"Projets",icon:"i-carbon-cube",href:"/projects"},{title:"Experience",icon:"i-carbon-development",href:"/experience"},{title:"Formation",icon:"i-carbon-education",href:"/education"},{title:"Blog",icon:"i-carbon-blog",href:"/blog"},{title:"CV",icon:"i-carbon-document",href:"/resume"},{title:"Contact",icon:"i-carbon-email",href:"/contact"}],Ms={left:vs,items:bs};export{le as A,Is as B,js as C,Os as E,Ls as H,Ms as N,Ps as P,Es as R,Ds as S,Ss as a,ks as b,Ns as c,Ts as d,As as e,Gi as f,zr as g,Fs as h,Cs as i,C as j,Ri as k,Un as l,Ui as m,re as n,ws as o,qi as p,Yi as r,_e as s};
