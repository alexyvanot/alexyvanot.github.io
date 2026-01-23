import{al as Pe,w as Yt,aY as zn,q as I,at as Ie,aH as Wt,v as Kt,g as le,aq as $t,ar as Qt,as as vn,au as oe,an as ve,aB as Xt,aZ as Zt,a_ as hn,ah as ei,a$ as U,am as ue,ap as ni,G as ti,a8 as Jn,b0 as Qe,b1 as ii,b2 as si,m as ri,T as bn,b3 as ai,ai as Yn,ak as Wn,b4 as De,I as Kn,b5 as oi,b6 as li,aj as ye,aC as ui,b7 as $n,C as Qn,b8 as ci,J as pi,b9 as di,ba as mi,bb as gi,bc as fi,bd as vi,D as hi,be as bi,bf as yi,bg as xi,bh as qi,bi as _i,bj as Si,bk as Ai,bl as Ci,bm as Li,a7 as ki,av as ji,B as yn,o as wi,bn as Ti,a5 as xn,l as Pi,Y as Ii,bo as Di}from"./C1Sid17B.js";import{b as Ei,r as Mi}from"./Ddx-oxvI.js";function cu(e,n){return n}function Ni(e,n,t){for(var s=[],i=n.length,a,r=n.length,o=0;o<i;o++){let p=n[o];Wn(p,()=>{if(a){if(a.pending.delete(p),a.done.add(p),a.pending.size===0){var m=e.outrogroups;Be(Qe(a.done)),m.delete(a),m.size===0&&(e.outrogroups=null)}}else r-=1},!1)}if(r===0){var l=s.length===0&&t!==null;if(l){var u=t,d=u.parentNode;li(d),d.append(u),e.items.clear()}Be(n,!l)}else a={pending:new Set(n),done:new Set},(e.outrogroups??(e.outrogroups=new Set)).add(a)}function Be(e,n=!0){for(var t=0;t<e.length;t++)ye(e[t],n)}var qn;function pu(e,n,t,s,i,a=null){var r=e,o=new Map,l=(n&zn)!==0;if(l){var u=e;r=I?Ie(Wt(u)):u.appendChild(Pe())}I&&Kt();var d=null,p=ti(()=>{var h=t();return Jn(h)?h:h==null?[]:Qe(h)}),m,f=!0;function b(){g.fallback=d,Fi(g,m,r,n,s),d!==null&&(m.length===0?(d.f&U)===0?Yn(d):(d.f^=U,re(d,null,r)):Wn(d,()=>{d=null}))}var y=Yt(()=>{m=le(p);var h=m.length;let x=!1;if(I){var N=$t(r)===Qt;N!==(h===0)&&(r=vn(),Ie(r),oe(!1),x=!0)}for(var A=new Set,F=ei,_=ni(),q=0;q<h;q+=1){I&&ve.nodeType===Xt&&ve.data===Zt&&(r=ve,x=!0,oe(!1));var C=m[q],E=s(C,q),S=f?null:o.get(E);S?(S.v&&hn(S.v,C),S.i&&hn(S.i,q),_&&F.skipped_effects.delete(S.e)):(S=Ri(o,f?r:qn??(qn=Pe()),C,E,q,i,n,t),f||(S.e.f|=U),o.set(E,S)),A.add(E)}if(h===0&&a&&!d&&(f?d=ue(()=>a(r)):(d=ue(()=>a(qn??(qn=Pe()))),d.f|=U)),I&&h>0&&Ie(vn()),!f)if(_){for(const[J,Y]of o)A.has(J)||F.skipped_effects.add(Y.e);F.oncommit(b),F.ondiscard(()=>{})}else b();x&&oe(!0),le(p)}),g={effect:y,items:o,outrogroups:null,fallback:d};f=!1,I&&(r=ve)}function Fi(e,n,t,s,i){var S,J,Y,un,cn,pn,dn,mn,gn;var a=(s&oi)!==0,r=n.length,o=e.items,l=e.effect.first,u,d=null,p,m=[],f=[],b,y,g,h;if(a)for(h=0;h<r;h+=1)b=n[h],y=i(b,h),g=o.get(y).e,(g.f&U)===0&&((J=(S=g.nodes)==null?void 0:S.a)==null||J.measure(),(p??(p=new Set)).add(g));for(h=0;h<r;h+=1){if(b=n[h],y=i(b,h),g=o.get(y).e,e.outrogroups!==null)for(const O of e.outrogroups)O.pending.delete(g),O.done.delete(g);if((g.f&U)!==0)if(g.f^=U,g===l)re(g,null,t);else{var x=d?d.next:l;g===e.effect.last&&(e.effect.last=g.prev),g.prev&&(g.prev.next=g.next),g.next&&(g.next.prev=g.prev),G(e,d,g),G(e,g,x),re(g,x,t),d=g,m=[],f=[],l=d.next;continue}if((g.f&De)!==0&&(Yn(g),a&&((un=(Y=g.nodes)==null?void 0:Y.a)==null||un.unfix(),(p??(p=new Set)).delete(g))),g!==l){if(u!==void 0&&u.has(g)){if(m.length<f.length){var N=f[0],A;d=N.prev;var F=m[0],_=m[m.length-1];for(A=0;A<m.length;A+=1)re(m[A],N,t);for(A=0;A<f.length;A+=1)u.delete(f[A]);G(e,F.prev,_.next),G(e,d,F),G(e,_,N),l=N,d=_,h-=1,m=[],f=[]}else u.delete(g),re(g,l,t),G(e,g.prev,g.next),G(e,g,d===null?e.effect.first:d.next),G(e,d,g),d=g;continue}for(m=[],f=[];l!==null&&l!==g;)(u??(u=new Set)).add(l),f.push(l),l=l.next;if(l===null)continue}(g.f&U)===0&&m.push(g),d=g,l=g.next}if(e.outrogroups!==null){for(const O of e.outrogroups)O.pending.size===0&&(Be(Qe(O.done)),(cn=e.outrogroups)==null||cn.delete(O));e.outrogroups.size===0&&(e.outrogroups=null)}if(l!==null||u!==void 0){var q=[];if(u!==void 0)for(g of u)(g.f&De)===0&&q.push(g);for(;l!==null;)(l.f&De)===0&&l!==e.fallback&&q.push(l),l=l.next;var C=q.length;if(C>0){var E=(s&zn)!==0&&r===0?t:null;if(a){for(h=0;h<C;h+=1)(dn=(pn=q[h].nodes)==null?void 0:pn.a)==null||dn.measure();for(h=0;h<C;h+=1)(gn=(mn=q[h].nodes)==null?void 0:mn.a)==null||gn.fix()}Ni(e,q,E)}}a&&Kn(()=>{var O,fn;if(p!==void 0)for(g of p)(fn=(O=g.nodes)==null?void 0:O.a)==null||fn.apply()})}function Ri(e,n,t,s,i,a,r,o){var l=(r&ii)!==0?(r&si)===0?ri(t,!1,!1):bn(t):null,u=(r&ai)!==0?bn(i):null;return{v:l,i:u,e:ue(()=>(a(n,l??t,u??i,o),()=>{e.delete(s)}))}}function re(e,n,t){if(e.nodes)for(var s=e.nodes.start,i=e.nodes.end,a=n&&(n.f&U)===0?n.nodes.start:t;s!==null;){var r=ui(s);if(a.before(s),s===i)return;s=r}}function G(e,n,t){n===null?e.effect.first=t:n.next=t,t===null?e.effect.last=n:t.prev=n}function Oi(e,n){var t=void 0,s;$n(()=>{t!==(t=n())&&(s&&(ye(s),s=null),t&&(s=ue(()=>{Qn(()=>t(e))})))})}function Xn(e){var n,t,s="";if(typeof e=="string"||typeof e=="number")s+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(n=0;n<i;n++)e[n]&&(t=Xn(e[n]))&&(s&&(s+=" "),s+=t)}else for(t in e)e[t]&&(s&&(s+=" "),s+=t);return s}function Ui(){for(var e,n,t=0,s="",i=arguments.length;t<i;t++)(e=arguments[t])&&(n=Xn(e))&&(s&&(s+=" "),s+=n);return s}function Bi(e){return typeof e=="object"?Ui(e):e??""}const _n=[...` 	
\r\f \v\uFEFF`];function Gi(e,n,t){var s=e==null?"":""+e;if(n&&(s=s?s+" "+n:n),t){for(var i in t)if(t[i])s=s?s+" "+i:i;else if(s.length)for(var a=i.length,r=0;(r=s.indexOf(i,r))>=0;){var o=r+a;(r===0||_n.includes(s[r-1]))&&(o===s.length||_n.includes(s[o]))?s=(r===0?"":s.substring(0,r))+s.substring(o+1):r=o}}return s===""?null:s}function Sn(e,n=!1){var t=n?" !important;":";",s="";for(var i in e){var a=e[i];a!=null&&a!==""&&(s+=" "+i+": "+a+t)}return s}function Ee(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function Vi(e,n){if(n){var t="",s,i;if(Array.isArray(n)?(s=n[0],i=n[1]):s=n,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var a=!1,r=0,o=!1,l=[];s&&l.push(...Object.keys(s).map(Ee)),i&&l.push(...Object.keys(i).map(Ee));var u=0,d=-1;const y=e.length;for(var p=0;p<y;p++){var m=e[p];if(o?m==="/"&&e[p-1]==="*"&&(o=!1):a?a===m&&(a=!1):m==="/"&&e[p+1]==="*"?o=!0:m==='"'||m==="'"?a=m:m==="("?r++:m===")"&&r--,!o&&a===!1&&r===0){if(m===":"&&d===-1)d=p;else if(m===";"||p===y-1){if(d!==-1){var f=Ee(e.substring(u,d).trim());if(!l.includes(f)){m!==";"&&p++;var b=e.substring(u,p).trim();t+=" "+b+";"}}u=p+1,d=-1}}}}return s&&(t+=Sn(s)),i&&(t+=Sn(i,!0)),t=t.trim(),t===""?null:t}return e==null?null:String(e)}function Hi(e,n,t,s,i,a){var r=e.__className;if(I||r!==t||r===void 0){var o=Gi(t,s,a);(!I||o!==e.getAttribute("class"))&&(o==null?e.removeAttribute("class"):n?e.className=o:e.setAttribute("class",o)),e.__className=t}else if(a&&i!==a)for(var l in a){var u=!!a[l];(i==null||u!==!!i[l])&&e.classList.toggle(l,u)}return a}function Me(e,n={},t,s){for(var i in t){var a=t[i];n[i]!==a&&(t[i]==null?e.style.removeProperty(i):e.style.setProperty(i,a,s))}}function zi(e,n,t,s){var i=e.__style;if(I||i!==n){var a=Vi(n,s);(!I||a!==e.getAttribute("style"))&&(a==null?e.removeAttribute("style"):e.style.cssText=a),e.__style=n}else s&&(Array.isArray(s)?(Me(e,t==null?void 0:t[0],s[0]),Me(e,t==null?void 0:t[1],s[1],"important")):Me(e,t,s));return s}function Ge(e,n,t=!1){if(e.multiple){if(n==null)return;if(!Jn(n))return di();for(var s of e.options)s.selected=n.includes(An(s));return}for(s of e.options){var i=An(s);if(ci(i,n)){s.selected=!0;return}}(!t||n!==void 0)&&(e.selectedIndex=-1)}function Ji(e){var n=new MutationObserver(()=>{Ge(e,e.__value)});n.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),pi(()=>{n.disconnect()})}function An(e){return"__value"in e?e.__value:e.value}const te=Symbol("class"),ie=Symbol("style"),Zn=Symbol("is custom element"),et=Symbol("is html");function Yi(e){if(I){var n=!1,t=()=>{if(!n){if(n=!0,e.hasAttribute("value")){var s=e.value;xe(e,"value",null),e.value=s}if(e.hasAttribute("checked")){var i=e.checked;xe(e,"checked",null),e.checked=i}}};e.__on_r=t,Kn(t),qi()}}function du(e,n){var t=Xe(e);t.value===(t.value=n??void 0)||e.value===n&&(n!==0||e.nodeName!=="PROGRESS")||(e.value=n??"")}function Wi(e,n){n?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function xe(e,n,t,s){var i=Xe(e);I&&(i[n]=e.getAttribute(n),n==="src"||n==="srcset"||n==="href"&&e.nodeName==="LINK")||i[n]!==(i[n]=t)&&(n==="loading"&&(e[Ai]=t),t==null?e.removeAttribute(n):typeof t!="string"&&nt(e).includes(n)?e[n]=t:e.setAttribute(n,t))}function Ki(e,n,t,s,i=!1,a=!1){if(I&&i&&e.tagName==="INPUT"){var r=e,o=r.type==="checkbox"?"defaultChecked":"defaultValue";o in t||Yi(r)}var l=Xe(e),u=l[Zn],d=!l[et];let p=I&&u;p&&oe(!1);var m=n||{},f=e.tagName==="OPTION";for(var b in n)b in t||(t[b]=null);t.class?t.class=Bi(t.class):(s||t[te])&&(t.class=null),t[ie]&&(t.style??(t.style=null));var y=nt(e);for(const _ in t){let q=t[_];if(f&&_==="value"&&q==null){e.value=e.__value="",m[_]=q;continue}if(_==="class"){var g=e.namespaceURI==="http://www.w3.org/1999/xhtml";Hi(e,g,q,s,n==null?void 0:n[te],t[te]),m[_]=q,m[te]=t[te];continue}if(_==="style"){zi(e,q,n==null?void 0:n[ie],t[ie]),m[_]=q,m[ie]=t[ie];continue}var h=m[_];if(!(q===h&&!(q===void 0&&e.hasAttribute(_)))){m[_]=q;var x=_[0]+_[1];if(x!=="$$")if(x==="on"){const C={},E="$$"+_;let S=_.slice(2);var N=Ci(S);if(fi(S)&&(S=S.slice(0,-7),C.capture=!0),!N&&h){if(q!=null)continue;e.removeEventListener(S,m[E],C),m[E]=null}if(q!=null)if(N)e[`__${S}`]=q,hi([S]);else{let J=function(Y){m[_].call(this,Y)};m[E]=vi(S,e,J,C)}else N&&(e[`__${S}`]=void 0)}else if(_==="style")xe(e,_,q);else if(_==="autofocus")bi(e,!!q);else if(!u&&(_==="__value"||_==="value"&&q!=null))e.value=e.__value=q;else if(_==="selected"&&f)Wi(e,q);else{var A=_;d||(A=yi(A));var F=A==="defaultValue"||A==="defaultChecked";if(q==null&&!u&&!F)if(l[_]=null,A==="value"||A==="checked"){let C=e;const E=n===void 0;if(A==="value"){let S=C.defaultValue;C.removeAttribute(A),C.defaultValue=S,C.value=C.__value=E?S:null}else{let S=C.defaultChecked;C.removeAttribute(A),C.defaultChecked=S,C.checked=E?S:!1}}else e.removeAttribute(_);else F||y.includes(A)&&(u||typeof q!="string")?(e[A]=q,A in l&&(l[A]=xi)):typeof q!="function"&&xe(e,A,q)}}}return p&&oe(!0),m}function mu(e,n,t=[],s=[],i=[],a,r=!1,o=!1){mi(i,t,s,l=>{var u=void 0,d={},p=e.nodeName==="SELECT",m=!1;if($n(()=>{var b=n(...l.map(le)),y=Ki(e,u,b,a,r,o);m&&p&&"value"in b&&Ge(e,b.value);for(let h of Object.getOwnPropertySymbols(d))b[h]||ye(d[h]);for(let h of Object.getOwnPropertySymbols(b)){var g=b[h];h.description===gi&&(!u||g!==u[h])&&(d[h]&&ye(d[h]),d[h]=ue(()=>Oi(e,()=>g))),y[h]=g}u=y}),p){var f=e;Qn(()=>{Ge(f,u.value,!0),Ji(f)})}m=!0})}function Xe(e){return e.__attributes??(e.__attributes={[Zn]:e.nodeName.includes("-"),[et]:e.namespaceURI===_i})}var Cn=new Map;function nt(e){var n=e.getAttribute("is")||e.nodeName,t=Cn.get(n);if(t)return t;Cn.set(n,t=[]);for(var s,i=e,a=Element.prototype;a!==i;){s=Li(i);for(var r in s)s[r].set&&t.push(r);i=Si(i)}return t}function gu(e=!1){const n=ki,t=n.l.u;if(!t)return;let s=()=>Pi(n.s);if(e){let i=0,a={};const r=Ii(()=>{let o=!1;const l=n.s;for(const u in l)l[u]!==a[u]&&(a[u]=l[u],o=!0);return o&&i++,i});s=()=>le(r)}t.b.length&&ji(()=>{Ln(n,s),xn(t.b)}),yn(()=>{const i=wi(()=>t.m.map(Ti));return()=>{for(const a of i)typeof a=="function"&&a()}}),t.a.length&&yn(()=>{Ln(n,s),xn(t.a)})}function Ln(e,n){if(e.l.s)for(const t of e.l.s)le(t);n()}const $i="";function Qi(...e){return Ei+$i+Mi(e[0],e[1])}Di();const Xi=`---
title: "Travailler en alternance au Synchrotron SOLEIL : Bilan et perspectives"
slug: alternance-synchrotron-soleil-bilan
published: true
excerpt: "Retour sur deux années d'alternance dans un centre de recherche scientifique. Les projets, l'environnement unique, les apprentissages techniques et humains, et ce que cette expérience m'a apporté pour la suite."
author: Alexy VANOT
publishedAt: 2025-06-20
tags:
  - projet-entreprise
  - synchrotron-soleil
  - alternance
  - carriere
  - bilan
logo: Java
readingTime: 18
color: "#1E3A5F"
---

::toc

# Travailler en alternance au Synchrotron SOLEIL : Bilan et perspectives

Deux années d'alternance dans un synchrotron. Dit comme ça, cela semble inhabituel pour un étudiant en informatique. Quand on pense développeur junior, on imagine plutôt une startup, une ESN, ou une grande entreprise du numérique. Et pourtant, cette expérience dans un centre de recherche scientifique a été déterminante dans mon parcours professionnel.

## Qu'est-ce qu'un synchrotron ?

Avant de parler de mon expérience, une brève explication s'impose pour ceux qui ne connaissent pas ces installations.

### Un accélérateur de particules au service de la science

Un synchrotron est un type d'accélérateur de particules circulaire qui produit un rayonnement électromagnétique extrêmement intense appelé lumière synchrotron. À SOLEIL, des électrons circulent à une vitesse proche de celle de la lumière dans un anneau de 354 mètres de circonférence.

Quand ces électrons sont déviés par des aimants, ils émettent un rayonnement très brillant. Ce rayonnement est capté par des lignes de lumière (29 à SOLEIL) où les scientifiques mènent leurs expériences.

### Des applications concrètes

La lumière synchrotron permet d'observer la matière à l'échelle atomique. Les applications sont variées :
- **Biologie** : structure des protéines, développement de médicaments
- **Chimie** : catalyse, nouveaux matériaux
- **Physique** : propriétés des semi-conducteurs
- **Patrimoine** : analyse de tableaux anciens, manuscrits
- **Environnement** : dépollution des sols, stockage du CO2

Chaque année, des milliers de chercheurs du monde entier viennent à SOLEIL pour mener leurs expériences.

## Découvrir le monde de la recherche scientifique

### Un environnement unique

Le Synchrotron SOLEIL n'est pas une entreprise classique. C'est un Très Grand Équipement (TGE) au service de la communauté scientifique. Le financement vient principalement du CNRS et du CEA. Les "utilisateurs" (les scientifiques) viennent du monde entier pour mener des expériences, souvent pendant quelques jours seulement.

Cette mission de service public crée une culture particulière :
- **Rigueur scientifique** : les données doivent être fiables, les systèmes reproductibles
- **Partage des connaissances** : publication, documentation, open source
- **Vision long terme** : les équipements sont conçus pour durer des décennies
- **Excellence technique** : le synchrotron est un concentré de technologies de pointe

### L'informatique au service de la science

Le service informatique où j'ai travaillé, rattaché à la Division Informatique, supporte l'ensemble des besoins numériques de l'installation :

**Contrôle-commande**
Piloter les équipements du synchrotron : aimants, détecteurs, motorisations. Ces systèmes doivent être disponibles 24h/24 pendant les périodes de fonctionnement.

**Acquisition et stockage des données**
Les expériences génèrent des téraoctets de données. Il faut les acquérir en temps réel, les stocker de manière pérenne, et permettre leur exploitation par les scientifiques.

**Applications métier**
Gestion des utilisateurs, planification des expériences, suivi des échantillons, inventaire du matériel. Chaque aspect de la vie du synchrotron a son logiciel dédié.

**Infrastructure**
Réseau, serveurs, sécurité, postes de travail. L'informatique de base mais à l'échelle d'une installation critique.

C'est un terrain de jeu vaste avec des problématiques variées, de l'embarqué temps réel au développement web en passant par le traitement de données scientifiques.

## Mon intégration dans l'équipe

### Les premières semaines

Arriver dans un environnement aussi technique peut être intimidant. La quantité de choses à comprendre est immense : l'architecture des systèmes existants, les processus internes, le vocabulaire métier, les interlocuteurs.

Mes premières semaines ont été consacrées à :
- **Observer** : assister aux réunions, lire la documentation, explorer le code existant
- **Poser des questions** : aucune n'est stupide quand on découvre un domaine
- **Contribuer modestement** : corriger des bugs simples, améliorer de la documentation
- **Construire ma carte mentale** : qui fait quoi, quel système interagit avec quel autre

Mon tuteur a joué un rôle clé en me guidant vers les bonnes ressources et en m'intégrant progressivement aux projets.

### Trouver ma place

En tant qu'alternant, on occupe une position particulière : ni vraiment étudiant, ni vraiment salarié à temps plein. Cette ambiguïté peut être inconfortable mais aussi libératrice.

J'ai choisi de :
- **Être proactif** : proposer des idées, signaler des problèmes, ne pas attendre qu'on me dise quoi faire
- **Être fiable** : respecter les délais, prévenir en cas de difficulté, documenter mon travail
- **Être humble** : accepter de ne pas tout comprendre, demander de l'aide quand nécessaire

Avec le temps, la confiance s'est installée et j'ai pu prendre des responsabilités croissantes.

## Les projets marquants

### SUN Auto : Gérer le cycle de vie des applications

Mon premier projet d'envergure. SUN Auto (SOLEIL Unified Notification Auto) est un système qui surveille l'ensemble des applications de l'organisation, détecte celles qui arrivent en fin de vie (obsolètes, non maintenues, problèmes de sécurité), et orchestre leur traitement.

**Ce que j'ai appris :**
- Penser cycle de vie, pas seulement développement. Une application ne s'arrête pas une fois déployée.
- L'importance de l'automatisation. Les tâches répétitives doivent être mécanisées.
- Concevoir des systèmes résilients. Le code doit gérer les cas d'erreur gracieusement.

Ce projet m'a donné une vision plus mature du développement logiciel.

### TAP : Une plateforme de tests automatisés

Le projet le plus ambitieux de mon alternance. TAP (Test Automation Platform) centralise l'exécution des tests automatisés et génère des rapports Allure.

**Défis techniques relevés :**
- Orchestration de tests parallèles
- Streaming temps réel des résultats via WebSockets
- Intégration avec divers frameworks (JUnit, pytest)
- Génération et hébergement des rapports

**Impact concret :**
TAP a changé les pratiques de test de plusieurs équipes. Voir les collègues adopter un outil que j'ai développé et en tirer bénéfice est une satisfaction professionnelle profonde.

### Contributions diverses

Au-delà des projets principaux, une part significative de mon temps a été consacrée à des activités moins glamour mais tout aussi formatrices :

**Maintenance d'applications existantes**
Corriger des bugs, ajouter des fonctionnalités mineures, adapter à de nouvelles versions de dépendances. C'est confrontant : on travaille sur du code écrit par d'autres, parfois depuis des années, avec des choix qu'on n'aurait pas faits.

**Support aux utilisateurs**
Répondre aux questions, diagnostiquer des problèmes, former à l'utilisation des outils. Cela développe la patience et la pédagogie.

**Documentation technique**
Rédiger des guides, des READMEs, des commentaires dans le code. La documentation est souvent négligée mais elle est essentielle pour la pérennité des systèmes.

**Revues de code**
Participer aux revues de merge requests, d'abord en observateur puis en contributeur. C'est un excellent moyen d'apprendre des pratiques des collègues plus expérimentés.

Ces activités "annexes" sont formatrices car elles confrontent à la réalité du métier : du code legacy, des utilisateurs avec des besoins réels et parfois contradictoires, de la dette technique accumulée.

## Ce que l'alternance m'a apporté

### Compétences techniques approfondies

**Java et l'écosystème Spring**
J'ai dépassé le niveau académique pour atteindre une maîtrise pratique : Spring Boot, Spring Data, Spring Security, Spring Batch. Je sais maintenant structurer une application professionnelle.

**Bases de données relationnelles**
PostgreSQL principalement. Au-delà du SQL basique, j'ai appris l'optimisation des requêtes, la conception de schémas, l'analyse des plans d'exécution.

**DevOps et CI/CD**
GitLab CI, Docker, déploiement sur serveurs Linux. La chaîne complète du code au déploiement.

**Architecture logicielle**
Patterns de conception, architecture hexagonale, microservices vs monolithe. Je comprends maintenant les compromis et quand utiliser quoi.

**Qualité logicielle**
Tests unitaires, tests d'intégration, analyse statique. La qualité n'est pas une option.

### Compétences transverses développées

**Communication avec des interlocuteurs variés**
Chercheurs, administratifs, techniciens, managers. Chacun a son vocabulaire, ses préoccupations, son niveau technique. Adapter son discours est essentiel.

**Gestion de projet et priorisation**
Avec des ressources limitées (mon temps est partagé avec l'école), il faut savoir dire non, négocier les délais, livrer le plus important d'abord.

**Autonomie et prise d'initiative**
Personne ne va me dire exactement quoi faire à chaque instant. Il faut identifier les problèmes, proposer des solutions, avancer sans supervision constante.

**Documentation et transmission**
Quand je suis à l'école, mes collègues doivent pouvoir reprendre mon travail. Documenter devient naturel.

### Vision professionnelle élargie

L'alternance m'a montré la réalité du travail en entreprise, bien différente des projets scolaires :

**Les compromis sont constants**
Le temps est limité, le budget aussi. On ne peut pas toujours faire les choses "bien". Il faut choisir ses batailles.

**La maintenance domine**
La majorité du travail n'est pas de créer du neuf mais de maintenir l'existant. Aimer ça (ou au moins l'accepter) est nécessaire.

**Les personnes comptent autant que le code**
Les meilleures solutions techniques échouent si elles ne sont pas adoptées par les utilisateurs. La dimension humaine est centrale.

**Le long terme existe**
Contrairement aux projets scolaires qui s'arrêtent à la soutenance, le code en entreprise vit des années. Les décisions d'aujourd'hui ont des conséquences lointaines.

## Les défis de l'alternance

### Jongler entre deux mondes

Le rythme d'alternance (2 semaines école / 2 semaines entreprise dans mon cas) impose une gymnastique mentale constante.

À chaque retour en entreprise :
- Se remettre dans le contexte des projets
- Rattraper ce qui s'est passé pendant l'absence
- Être productif rapidement

À chaque retour à l'école :
- Lâcher prise sur les projets professionnels en cours
- Se reconcentrer sur les cours et examens
- Résister à la tentation de travailler le soir pour l'entreprise

J'ai développé des stratégies :
- **Notes détaillées** avant chaque départ : où j'en suis, ce qu'il reste à faire
- **Tâches découpées** en morceaux réalisables sur une période
- **Communication régulière** avec l'équipe même pendant les périodes école

### Gérer la fatigue

L'alternance est exigeante. Combiner études et travail, avec les déplacements associés, peut être épuisant. J'ai appris à :
- Protéger mes week-ends autant que possible
- Dire non aux engagements non essentiels
- Reconnaître les signes de surmenage

### Accepter l'incomplétude

Face à des systèmes complexes et un historique de plusieurs années, il est impossible de tout comprendre immédiatement. Les premières semaines, cette ignorance peut être frustrante.

J'ai appris à être efficace malgré une connaissance partielle :
- Identifier ce qui est nécessaire pour la tâche en cours
- Savoir où chercher l'information quand on en a besoin
- Accepter les zones d'ombre temporaires

## Conseils aux futurs alternants

Fort de cette expérience, voici ce que je conseillerais à ceux qui s'apprêtent à commencer une alternance :

### Avant de commencer

**Choisissez bien votre entreprise**
L'alternance est longue (2 ans dans mon cas). Autant que le poste soit intéressant et l'environnement agréable. Renseignez-vous, posez des questions en entretien.

**Clarifiez les attentes**
Quels projets ? Quel niveau d'autonomie ? Quel accompagnement ? Plus c'est clair au départ, moins il y aura de déceptions.

### Pendant l'alternance

**Soyez proactif**
N'attendez pas qu'on vous donne du travail. Proposez des améliorations, posez des questions, montrez votre intérêt. L'alternant qui attend dans son coin ne progressera pas.

**Documentez votre travail**
Pour vous (reprendre après une absence) et pour les autres (continuité). Cela facilite la vie de tous et valorise votre contribution.

**Construisez un réseau**
Les collègues que vous côtoyez sont une ressource précieuse. Ils peuvent devenir des références professionnelles, des contacts pour la suite, voire des amis.

**Demandez du feedback**
Comment je m'en sors ? Qu'est-ce que je pourrais améliorer ? Le feedback régulier est plus utile que l'évaluation annuelle.

**Prenez du recul**
L'alternance est aussi un moment d'observation. Notez ce qui fonctionne bien dans l'organisation, ce qui pourrait être amélioré, les pratiques que vous voudriez reproduire ou éviter dans votre future carrière.

### Pour la fin

**Préparez la transition**
Documentez ce que vous laissez, formez vos successeurs si possible, remerciez ceux qui vous ont aidé.

**Gardez le contact**
Le monde professionnel est petit. Les relations construites pendant l'alternance peuvent se révéler précieuses des années plus tard.

## Et après ?

Mon alternance au Synchrotron SOLEIL se termine, mais elle a façonné ma vision professionnelle.

### Ce que je recherche maintenant

- **Des projets techniques stimulants** où je peux continuer à apprendre
- **Un environnement bienveillant** où l'erreur est permise
- **Un impact concret** : voir mon travail utilisé et utile
- **Un équilibre** entre vie professionnelle et personnelle

### Ce que j'éviterai

- Les environnements où la qualité est sacrifiée systématiquement pour la vitesse
- Les postes sans autonomie où on exécute sans comprendre
- Les cultures toxiques où la compétition prime sur la collaboration

L'alternance m'a donné suffisamment d'expérience pour savoir ce que je veux et ce que je ne veux pas.

## Conclusion

Mon alternance au Synchrotron SOLEIL restera une étape fondatrice de ma carrière. Elle m'a donné une expérience concrète sur des projets réels, des compétences techniques valorisables, et surtout une meilleure compréhension de ce que signifie être développeur au quotidien.

L'environnement de recherche scientifique, avec ses exigences de rigueur et sa culture de partage, a été un cadre d'apprentissage idéal. Les projets sur lesquels j'ai travaillé, SUN Auto et TAP en tête, m'ont permis de contribuer de manière tangible tout en développant mes compétences.

À ceux qui hésitent sur l'alternance : c'est un format exigeant mais extrêmement formateur. Le temps investi, les sacrifices parfois nécessaires, sont largement rentabilisés par l'expérience acquise et les portes qu'elle ouvre.

Merci au Synchrotron SOLEIL, à mon tuteur et à toute l'équipe pour ces deux années.
`,Zi=`---
title: "Démonstration de la plateforme de blog"
slug: blog-platform-demo
published: false
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
pinned: false
links:
  - label: SvelteKit
    to: https://kit.svelte.dev/
    newTab: true
  - label: TailwindCSS
    to: https://tailwindcss.com/
    newTab: true
---

::toc

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
`,es=`---
title: "Créer son portfolio avec SvelteKit : Pourquoi et comment"
slug: creer-portfolio-sveltekit
published: true
excerpt: "Retour d'expérience complet sur la création de ce portfolio avec SvelteKit. Architecture, choix techniques, système de contenu Markdown, composants UI, et toutes les leçons tirées de ce projet personnel."
author: Alexy VANOT
publishedAt: 2025-06-25
tags:
  - projet-personnel
  - sveltekit
  - portfolio
  - frontend
  - svelte
logo: Svelte
readingTime: 20
color: "#FF3E00"
pinned: true
---

::toc

# Créer son portfolio avec SvelteKit : Pourquoi et comment

Vous êtes sur ce portfolio. Il représente plusieurs semaines de travail intensif, de nombreuses itérations, et quelques nuits blanches. Ce n'est pas qu'une vitrine professionnelle : c'est un projet technique à part entière qui m'a permis d'explorer SvelteKit en profondeur. Voici l'histoire complète de sa création.

## Pourquoi un portfolio custom

### Les alternatives écartées

J'aurais pu utiliser une solution existante. Avant de me lancer dans le développement, j'ai évalué plusieurs options :

**LinkedIn**
Le profil LinkedIn est incontournable, mais il est limité : format rigide, personnalisation quasi nulle, noyé parmi des millions d'autres profils. Un recruteur passe quelques secondes sur un profil LinkedIn.

**GitHub Pages avec un template**
Des templates Jekyll ou Hugo existent, souvent de qualité. Mais utiliser un template, c'est accepter les choix de quelqu'un d'autre. La personnalisation profonde demande de comprendre le code du template, parfois aussi complexe que de partir de zéro.

**Plateformes no-code (Notion, Webflow)**
Rapides à mettre en œuvre, mais avec une dépendance totale à la plateforme. Si elle ferme ou change ses prix, tout est à refaire. Et pour un développeur, utiliser du no-code pour se présenter est... curieux.

**Templates payants**
Beaux, professionnels, mais impersonnels. Et quelle légitimité à présenter comme "mon portfolio" quelque chose que je n'ai pas créé ?

### L'argument du projet lui-même

Un portfolio de développeur qui n'est pas développé par le développeur, c'est paradoxal. Créer ce site from scratch est en soi une démonstration de compétences :
- **Maîtrise d'un framework moderne** (SvelteKit)
- **Compétences frontend** (HTML, CSS, JavaScript)
- **Sens du design** et de l'UX
- **Capacité à mener un projet de A à Z**

Si un recruteur me demande "qu'avez-vous développé récemment ?", ce portfolio est une réponse tangible et immédiatement vérifiable.

## Choix de SvelteKit

### Pourquoi pas React ou Vue

J'ai utilisé React dans plusieurs projets professionnels et scolaires. C'est un excellent framework, mature et bien documenté. Mais pour ce portfolio, plusieurs points m'ont fait hésiter :

**La verbosité**
Un composant React avec du state, des effets, du CSS-in-JS, ça fait vite beaucoup de code pour peu de fonctionnalité. Pour un site relativement simple, cette complexité me semblait excessive.

**Le runtime**
React embarque un runtime conséquent. Pour un portfolio où la performance est importante (première impression du visiteur), c'est du poids inutile.

**L'envie d'apprendre**
Je connaissais déjà React. Ce projet personnel était l'occasion d'explorer quelque chose de nouveau.

### Ce qui m'a séduit chez Svelte

Svelte propose une approche fondamentalement différente :

**Compilation plutôt que runtime**
Svelte compile les composants en JavaScript vanilla optimisé. Pas de Virtual DOM, pas de framework embarqué. Le code livré est minimal.

**Syntaxe naturelle**
Un composant Svelte ressemble à du HTML avec des superpouvers. Pas de JSX, pas de template strings, juste une syntaxe intuitive :

\`\`\`svelte
<script>
    let count = 0;
    
    function increment() {
        count += 1;
    }
<\/script>

<button on:click={increment}>
    Clics : {count}
</button>

<style>
    button {
        padding: 0.5rem 1rem;
        border-radius: 0.25rem;
    }
</style>
\`\`\`

Tout est au même endroit, clairement séparé.

**Réactivité simple**
La réactivité est intégrée au langage. Une variable modifiée déclenche automatiquement la mise à jour de l'UI. Pas besoin de \`useState\`, \`useEffect\`, ou d'autres hooks.

\`\`\`svelte
<script>
    let firstName = 'Alexy';
    let lastName = 'VANOT';
    
    // $: déclare une valeur réactive dérivée
    $: fullName = \`\${firstName} \${lastName}\`;
<\/script>

<p>Bonjour, {fullName}</p>
\`\`\`

**Transitions natives**
Les animations et transitions sont intégrées, pas besoin de bibliothèque externe :

\`\`\`svelte
<script>
    import { fade, fly } from 'svelte/transition';
    let visible = true;
<\/script>

{#if visible}
    <div transition:fade={{ duration: 300 }}>
        Contenu qui apparaît/disparaît en fondu
    </div>
{/if}
\`\`\`

### SvelteKit : le framework full-stack

Svelte est le langage de composants, SvelteKit est le framework applicatif qui l'accompagne. Il apporte :

**Routing basé sur le système de fichiers**
Chaque fichier dans \`src/routes\` devient une page. \`src/routes/about/+page.svelte\` crée la route \`/about\`. Simple et intuitif.

**Rendu côté serveur (SSR) et génération statique (SSG)**
SvelteKit peut pré-rendre les pages au build time (idéal pour un portfolio) ou les rendre dynamiquement côté serveur.

**Data loading intégré**
Les fichiers \`+page.ts\` ou \`+page.server.ts\` permettent de charger des données avant le rendu :

\`\`\`typescript
// src/routes/projects/+page.ts
import type { PageLoad } from './$types';
import { getProjects } from '$lib/data/projects';

export const load: PageLoad = async () => {
    const projects = await getProjects();
    return { projects };
};
\`\`\`

**Adapter système**
SvelteKit s'adapte à différentes cibles de déploiement (Vercel, Netlify, Node.js, static) via des adapters.

## Architecture du projet

### Organisation des fichiers

J'ai structuré le projet de manière à séparer clairement les responsabilités :

\`\`\`
src/
├── lib/
│   ├── components/          # Composants réutilisables
│   │   ├── common/          # Composants génériques
│   │   ├── projects/        # Composants spécifiques aux projets
│   │   ├── education/       # Composants pour la section formation
│   │   ├── experience/      # Composants pour l'expérience
│   │   └── ui/              # Composants UI de base (shadcn-svelte)
│   ├── data/                # Données et configuration
│   │   ├── projects.ts      # Définition des projets
│   │   ├── skills.ts        # Compétences
│   │   ├── education.ts     # Formation
│   │   └── experience.ts    # Expériences professionnelles
│   ├── utils/               # Fonctions utilitaires
│   └── types/               # Types TypeScript
├── routes/                  # Pages du site
│   ├── +layout.svelte       # Layout global
│   ├── +page.svelte         # Page d'accueil
│   ├── projects/            # Section projets
│   │   ├── +page.svelte     # Liste des projets
│   │   └── [slug]/          # Page détail d'un projet
│   ├── skills/              # Section compétences
│   ├── education/           # Section formation
│   ├── experience/          # Section expérience
│   ├── blog/                # Section blog
│   └── about/               # Page À propos
└── app.css                  # Styles globaux

content/
├── projects/                # Fichiers Markdown des projets
└── blog/                    # Articles de blog en Markdown
\`\`\`

### Le système de contenu Markdown

Une des décisions structurantes : stocker le contenu (projets, articles) en Markdown avec un frontmatter YAML. Cette approche offre plusieurs avantages majeurs.

**Structure d'un fichier de contenu :**

\`\`\`markdown
---
title: "Mon super projet"
slug: mon-super-projet
published: true
excerpt: "Description courte du projet"
technologies: ["SvelteKit", "TypeScript", "Tailwind"]
category: technique
startDate: 2024-01
endDate: 2024-03
thumbnail: /images/projects/mon-projet.png
color: "#FF3E00"
---

# Mon super projet

Le contenu détaillé du projet en Markdown...

## Fonctionnalités

- Feature 1
- Feature 2

## Code exemple

\\\`\\\`\\\`typescript
const hello = "world";
\\\`\\\`\\\`
\`\`\`

**Avantages de cette approche :**

1. **Édition simple** : Ajouter un projet = créer un fichier Markdown. Pas besoin de toucher au code.

2. **Versioning naturel** : Tout est versionné avec Git. Je peux voir l'historique des modifications, revenir en arrière, brancher.

3. **Portabilité** : Si je décide de migrer vers un autre framework, le contenu reste exploitable.

4. **Séparation contenu/présentation** : Le Markdown contient le contenu, les composants Svelte s'occupent de l'affichage.

**Parsing du contenu :**

J'utilise la bibliothèque \`gray-matter\` pour extraire le frontmatter et \`marked\` pour convertir le Markdown en HTML :

\`\`\`typescript
// lib/utils/content.ts
import matter from 'gray-matter';
import { marked } from 'marked';

export async function parseMarkdown(content: string) {
    const { data: frontmatter, content: markdown } = matter(content);
    const html = await marked(markdown);
    
    return {
        frontmatter,
        html
    };
}

export async function getProjects() {
    const projectFiles = import.meta.glob('/content/projects/*.md', { 
        query: '?raw', 
        import: 'default' 
    });
    
    const projects = await Promise.all(
        Object.entries(projectFiles).map(async ([path, loader]) => {
            const content = await loader() as string;
            const { frontmatter, html } = await parseMarkdown(content);
            const slug = path.split('/').pop()?.replace('.md', '');
            
            return {
                ...frontmatter,
                slug,
                content: html
            };
        })
    );
    
    return projects
        .filter(p => p.published)
        .sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime());
}
\`\`\`

### Système de composants avec shadcn-svelte

Pour les composants UI de base (boutons, cartes, badges), j'utilise shadcn-svelte, un portage de shadcn/ui pour Svelte. L'avantage : des composants bien conçus que je peux copier dans mon projet et personnaliser librement, plutôt qu'une dépendance externe figée.

\`\`\`svelte
<!-- lib/components/common/project-card.svelte -->
<script lang="ts">
    import { Badge } from '$lib/components/ui/badge';
    import { Card } from '$lib/components/ui/card';
    import type { Project } from '$lib/types';
    
    export let project: Project;
<\/script>

<Card class="group hover:shadow-lg transition-shadow">
    <a href="/projects/{project.slug}">
        <img 
            src={project.thumbnail} 
            alt={project.title}
            class="w-full h-48 object-cover rounded-t-lg"
        />
        <div class="p-4">
            <h3 class="font-semibold text-lg group-hover:text-primary transition-colors">
                {project.title}
            </h3>
            <p class="text-muted-foreground mt-2 line-clamp-2">
                {project.excerpt}
            </p>
            <div class="flex flex-wrap gap-2 mt-4">
                {#each project.technologies.slice(0, 3) as tech}
                    <Badge variant="secondary">{tech}</Badge>
                {/each}
            </div>
        </div>
    </a>
</Card>
\`\`\`

## Fonctionnalités implémentées

### Système de recherche

Une recherche full-text permet de trouver rapidement des projets, compétences ou articles. L'implémentation est entièrement côté client :

\`\`\`typescript
// lib/utils/search.ts
export function searchItems<T extends { title: string; excerpt?: string; tags?: string[] }>(
    items: T[],
    query: string
): T[] {
    if (!query.trim()) return items;
    
    const normalizedQuery = query.toLowerCase().trim();
    const terms = normalizedQuery.split(/\\s+/);
    
    return items.filter(item => {
        const searchableText = [
            item.title,
            item.excerpt || '',
            ...(item.tags || [])
        ].join(' ').toLowerCase();
        
        return terms.every(term => searchableText.includes(term));
    });
}
\`\`\`

**Pourquoi côté client ?**
Le volume de données est faible (quelques dizaines d'items maximum). Une recherche serveur ajouterait de la latence sans bénéfice. Les données sont préchargées, la recherche est instantanée.

### Catégorisation des projets

Les projets sont classés selon deux axes :

**Par type (humain/technique)**
- Projets techniques : accent sur le code, les algorithmes, l'architecture
- Projets humains : accent sur la collaboration, la gestion, la pédagogie

**Par technologies utilisées**
Chaque projet est tagué avec les technologies employées. Un système de filtres permet de n'afficher que les projets utilisant une technologie donnée.

\`\`\`svelte
<!-- routes/projects/+page.svelte -->
<script lang="ts">
    import { page } from '$app/stores';
    
    export let data;
    
    let selectedCategory = 'all';
    let selectedTech = 'all';
    
    $: filteredProjects = data.projects.filter(project => {
        if (selectedCategory !== 'all' && project.category !== selectedCategory) {
            return false;
        }
        if (selectedTech !== 'all' && !project.technologies.includes(selectedTech)) {
            return false;
        }
        return true;
    });
    
    $: allTechnologies = [...new Set(data.projects.flatMap(p => p.technologies))].sort();
<\/script>

<div class="filters">
    <select bind:value={selectedCategory}>
        <option value="all">Tous les types</option>
        <option value="technique">Technique</option>
        <option value="humain">Humain</option>
    </select>
    
    <select bind:value={selectedTech}>
        <option value="all">Toutes les technologies</option>
        {#each allTechnologies as tech}
            <option value={tech}>{tech}</option>
        {/each}
    </select>
</div>
\`\`\`

### Mode sombre

Le mode sombre est implémenté via CSS custom properties et respecte la préférence système :

\`\`\`css
/* app.css */
:root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --primary: 221.2 83.2% 53.3%;
    /* ... autres variables */
}

.dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    --primary: 217.2 91.2% 59.8%;
    /* ... autres variables */
}
\`\`\`

\`\`\`typescript
// lib/utils/theme.ts
import { writable } from 'svelte/store';
import { browser } from '$app/environment';

type Theme = 'light' | 'dark' | 'system';

function createThemeStore() {
    const stored = browser ? localStorage.getItem('theme') as Theme : 'system';
    const { subscribe, set } = writable<Theme>(stored || 'system');
    
    return {
        subscribe,
        set: (value: Theme) => {
            if (browser) {
                localStorage.setItem('theme', value);
                applyTheme(value);
            }
            set(value);
        }
    };
}

function applyTheme(theme: Theme) {
    const isDark = theme === 'dark' || 
        (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
    
    document.documentElement.classList.toggle('dark', isDark);
}

export const theme = createThemeStore();
\`\`\`

### Responsive design

J'ai adopté une approche mobile-first : concevoir d'abord pour les petits écrans, puis enrichir progressivement pour les grands écrans.

Tailwind CSS facilite cette approche avec ses breakpoints préfixés :

\`\`\`svelte
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {#each projects as project}
        <ProjectCard {project} />
    {/each}
</div>
\`\`\`

Cette classe signifie :
- Mobile (défaut) : 1 colonne
- Tablette (md: 768px+) : 2 colonnes
- Desktop (lg: 1024px+) : 3 colonnes

### Section À propos interactive

La page À propos utilise des animations et un système de slides pour présenter différents aspects de ma personnalité :

\`\`\`svelte
<script>
    import { fly, fade } from 'svelte/transition';
    
    const slides = [
        { id: 'developer', title: 'Développeur', content: '...' },
        { id: 'learner', title: 'Apprenant', content: '...' },
        { id: 'collaborator', title: 'Collaborateur', content: '...' }
    ];
    
    let currentSlide = 0;
<\/script>

<div class="slides-container">
    {#key currentSlide}
        <div
            in:fly={{ x: 100, duration: 300 }}
            out:fly={{ x: -100, duration: 300 }}
            class="slide"
        >
            <h2>{slides[currentSlide].title}</h2>
            <p>{slides[currentSlide].content}</p>
        </div>
    {/key}
    
    <nav class="slide-nav">
        {#each slides as slide, i}
            <button
                class:active={i === currentSlide}
                on:click={() => currentSlide = i}
            >
                {slide.title}
            </button>
        {/each}
    </nav>
</div>
\`\`\`

## Défis rencontrés

### Performance des images

Les images de projets peuvent être lourdes et impacter la performance. J'ai implémenté plusieurs optimisations :

**Lazy loading natif**
\`\`\`svelte
<img src={project.thumbnail} alt={project.title} loading="lazy" />
\`\`\`

**Formats modernes**
Conversion des images en WebP pour un meilleur ratio qualité/poids.

**Images responsive avec srcset**
\`\`\`svelte
<img
    srcset="
        {project.thumbnail}?w=400 400w,
        {project.thumbnail}?w=800 800w,
        {project.thumbnail}?w=1200 1200w
    "
    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
    src={project.thumbnail}
    alt={project.title}
/>
\`\`\`

### SEO et accessibilité

Un portfolio doit être trouvable et accessible à tous :

**Balises meta dynamiques**
\`\`\`svelte
<!-- routes/projects/[slug]/+page.svelte -->
<svelte:head>
    <title>{project.title} | Alexy VANOT</title>
    <meta name="description" content={project.excerpt} />
    <meta property="og:title" content={project.title} />
    <meta property="og:description" content={project.excerpt} />
    <meta property="og:image" content={project.thumbnail} />
</svelte:head>
\`\`\`

**Accessibilité**
- Hiérarchie de titres logique (h1 > h2 > h3)
- Textes alternatifs pour toutes les images
- Contraste suffisant (vérifié avec l'outil WAVE)
- Navigation au clavier fonctionnelle
- Labels pour les champs de formulaire

### Déploiement continu

Le site est déployé sur GitHub Pages via GitHub Actions. Chaque push sur \`main\` déclenche automatiquement :

\`\`\`yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages

on:
  push:
    branches: ['main']

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      
      - run: npm ci
      - run: npm run build
      
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: \${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./build
\`\`\`

La configuration SvelteKit utilise l'adapter static :

\`\`\`javascript
// svelte.config.js
import adapter from '@sveltejs/adapter-static';

export default {
    kit: {
        adapter: adapter({
            pages: 'build',
            assets: 'build',
            fallback: '404.html'
        }),
        paths: {
            base: process.env.NODE_ENV === 'production' ? '' : ''
        }
    }
};
\`\`\`

## Ce que j'ai appris

### Svelte est un plaisir à utiliser

La courbe d'apprentissage est douce. Venant de React, j'ai été productif en quelques jours. La syntaxe est intuitive, le compilateur donne des messages d'erreur clairs, et la documentation est excellente.

Les stores réactifs et les transitions intégrées simplifient énormément de patterns courants. Ce qui demandait une bibliothèque externe en React est natif en Svelte.

### TypeScript apporte de la sérénité

J'ai hésité à utiliser TypeScript pour un projet personnel. "C'est juste un portfolio, pas besoin de typage strict." Erreur. Le typage a :
- Évité de nombreux bugs
- Facilité le refactoring
- Servi de documentation
- Amélioré l'autocomplétion dans VS Code

### Le perfectionnisme est un piège

J'ai passé trop de temps sur des détails que personne ne remarquera. L'animation parfaite au pixel près, le dégradé idéal, le micro-ajustement de spacing. À un moment, il faut accepter que c'est "assez bien" et publier.

La version actuelle n'est pas parfaite. Elle ne le sera jamais. Et c'est normal.

### Un projet personnel est un terrain d'expérimentation

Sans contraintes externes, j'ai pu :
- Tester des approches nouvelles
- Faire des erreurs sans conséquence
- Recommencer des parties entières
- Prendre le temps de comprendre

C'est un luxe qui n'existe pas toujours en contexte professionnel. J'en ai profité pour explorer en profondeur.

### L'importance du design system

Avoir défini des tokens de design (couleurs, espacements, typographie) dès le début a énormément facilité le développement. Chaque nouveau composant utilise ces tokens, garantissant la cohérence visuelle sans effort.

## Évolutions futures

Le portfolio continuera d'évoluer avec ma carrière :

**Court terme**
- Ajout de nouveaux projets au fil de leur réalisation
- Amélioration continue des performances
- Tests d'accessibilité plus poussés

**Moyen terme**
- Internationalisation (version anglaise)
- Section blog plus développée
- Intégration d'analytics respectueux de la vie privée

**Long terme**
- Migration vers de nouvelles versions de SvelteKit
- Exploration de Svelte 5 et ses runes
- Refonte visuelle éventuelle

## Conclusion

Créer ce portfolio a été un exercice formateur sur plusieurs plans. Techniquement, j'ai approfondi SvelteKit, TypeScript et les bonnes pratiques frontend. Personnellement, j'ai appris à arbitrer entre perfectionnisme et pragmatisme.

Au-delà de l'aspect vitrine professionnelle, ce projet est un espace d'expression et d'expérimentation. C'est gratifiant de voir le résultat en ligne, accessible à tous, et de savoir que chaque ligne de code est de ma main.

Si vous êtes développeur et hésitez à créer votre propre portfolio : lancez-vous. Le processus d'apprentissage est aussi précieux que le résultat final. Et vous aurez quelque chose de concret à montrer, qui vous ressemble vraiment.
`,ns=`---
title: "Développement mobile avec Flutter : Retour sur mes premiers projets"
slug: developpement-mobile-flutter
published: true
excerpt: "De la découverte de Flutter à la mise en production d'applications fonctionnelles. Les défis, les bonnes pratiques et les erreurs à éviter en développement mobile cross-platform."
author: Alexy VANOT
publishedAt: 2025-04-25
tags:
  - projet-technique
  - flutter
  - mobile
  - dart
  - application
logo: Flutter
readingTime: 16
color: "#02569B"
---

::toc

# Développement mobile avec Flutter : Retour sur mes premiers projets

Flutter m'a été présenté comme le framework miracle qui permet de développer pour iOS et Android avec une seule base de code, sans compromis sur les performances ni sur l'expérience utilisateur. Sceptique face à ces promesses marketing, j'ai voulu vérifier par moi-même en développant deux applications complètes : une to-do list et une application de découverte de films.

## Contexte et motivations

### Le projet académique

Pour un module de développement mobile en troisième année, nous devions créer une application fonctionnelle en équipe de deux. Le choix du framework était libre, ce qui a déclenché un débat intéressant avec mon binôme : React Native ou Flutter ?

### Le choix de Flutter

Après recherche, plusieurs facteurs ont fait pencher la balance vers Flutter :

**Performance native**
Flutter ne passe pas par un bridge JavaScript comme React Native. Le code Dart est compilé directement en code ARM natif, offrant des performances comparables aux applications natives pures.

**Consistency visuelle**
Flutter dessine ses propres widgets plutôt que d'utiliser les composants natifs de chaque plateforme. Résultat : une interface identique au pixel près sur iOS et Android.

**Hot reload**
La possibilité de voir instantanément les modifications de code sans recompilation accélère drastiquement le développement et l'expérimentation.

**Documentation et communauté**
La documentation officielle de Flutter est exceptionnelle : claire, exhaustive, avec des exemples concrets. La communauté est active et les ressources abondantes.

### Premier contact avec Dart

Dart était un langage nouveau pour moi. Venant de Java et Python, j'ai trouvé la syntaxe familière et intuitive. Quelques particularités notables :

**Null safety**
Depuis Dart 2.12, la distinction entre types nullables et non-nullables est explicite et vérifiée à la compilation.

\`\`\`dart
String name = "Alexy";        // Ne peut pas être null
String? nickname;             // Peut être null

// Le compilateur force à gérer le cas null
print(nickname?.toUpperCase() ?? "No nickname");
\`\`\`

**Programmation asynchrone**
Les mots-clés \`async\`/\`await\` rendent le code asynchrone aussi lisible que du code synchrone.

\`\`\`dart
Future<User> fetchUser(int id) async {
  final response = await http.get(Uri.parse('$baseUrl/users/$id'));
  return User.fromJson(jsonDecode(response.body));
}
\`\`\`

**Classes et mixins**
Le système de classes est classique mais les mixins permettent une forme de réutilisation de code élégante.

## Projet 1 : Application To-Do List

### Objectifs pédagogiques

Cette première application visait à maîtriser les fondamentaux de Flutter :
- Création et composition de widgets
- Gestion de l'état local et global
- Navigation entre écrans
- Persistance des données localement
- Design responsive

### Architecture adoptée

J'ai structuré le projet en couches distinctes, inspiré de la Clean Architecture :

\`\`\`
lib/
├── main.dart
├── models/
│   └── task.dart
├── providers/
│   └── task_provider.dart
├── repositories/
│   └── task_repository.dart
├── screens/
│   ├── home_screen.dart
│   └── task_detail_screen.dart
├── widgets/
│   ├── task_card.dart
│   ├── task_form.dart
│   └── priority_selector.dart
└── utils/
    └── date_formatter.dart
\`\`\`

Cette séparation facilite les tests, la maintenance et l'évolution du code.

### Gestion de l'état : de setState à Provider

**Première approche naïve avec setState**

Au début, j'utilisais \`setState\` pour chaque modification d'état :

\`\`\`dart
class _HomeScreenState extends State<HomeScreen> {
  List<Task> _tasks = [];
  
  void _addTask(Task task) {
    setState(() {
      _tasks.add(task);
    });
  }
  
  void _deleteTask(int index) {
    setState(() {
      _tasks.removeAt(index);
    });
  }
}
\`\`\`

Cette approche fonctionne pour des cas simples mais devient vite problématique :
- L'état est lié à un widget spécifique
- Partager l'état entre widgets nécessite du "prop drilling"
- Les rebuilds sont difficiles à optimiser

**Migration vers Provider**

Provider est la solution recommandée par l'équipe Flutter pour la gestion d'état. Le principe : séparer l'état de l'UI et le rendre accessible partout dans l'arbre de widgets.

\`\`\`dart
class TaskProvider extends ChangeNotifier {
  final TaskRepository _repository;
  List<Task> _tasks = [];
  
  List<Task> get tasks => List.unmodifiable(_tasks);
  List<Task> get completedTasks => _tasks.where((t) => t.isCompleted).toList();
  List<Task> get pendingTasks => _tasks.where((t) => !t.isCompleted).toList();
  
  Future<void> loadTasks() async {
    _tasks = await _repository.getAllTasks();
    notifyListeners();
  }
  
  Future<void> addTask(Task task) async {
    await _repository.insertTask(task);
    _tasks.add(task);
    notifyListeners();
  }
  
  Future<void> toggleTask(String id) async {
    final index = _tasks.indexWhere((t) => t.id == id);
    if (index != -1) {
      _tasks[index] = _tasks[index].copyWith(
        isCompleted: !_tasks[index].isCompleted
      );
      await _repository.updateTask(_tasks[index]);
      notifyListeners();
    }
  }
}
\`\`\`

L'utilisation dans les widgets devient élégante :

\`\`\`dart
// Écouter et reconstruire automatiquement
Consumer<TaskProvider>(
  builder: (context, provider, child) {
    return ListView.builder(
      itemCount: provider.pendingTasks.length,
      itemBuilder: (context, index) => TaskCard(task: provider.pendingTasks[index]),
    );
  },
)

// Déclencher une action sans reconstruire
context.read<TaskProvider>().addTask(newTask);
\`\`\`

### Persistance avec Hive

Pour la persistance locale, j'ai choisi Hive plutôt que SQLite. Hive est une base NoSQL légère, rapide et facile à utiliser avec Flutter.

\`\`\`dart
@HiveType(typeId: 0)
class Task extends HiveObject {
  @HiveField(0)
  final String id;
  
  @HiveField(1)
  final String title;
  
  @HiveField(2)
  final String? description;
  
  @HiveField(3)
  final DateTime createdAt;
  
  @HiveField(4)
  final bool isCompleted;
  
  @HiveField(5)
  final Priority priority;
}

class TaskRepository {
  final Box<Task> _box;
  
  TaskRepository(this._box);
  
  Future<List<Task>> getAllTasks() async {
    return _box.values.toList();
  }
  
  Future<void> insertTask(Task task) async {
    await _box.put(task.id, task);
  }
}
\`\`\`

### Fonctionnalités implémentées

L'application finale incluait :
- Liste des tâches avec filtres (toutes, en cours, terminées)
- Création/édition de tâches avec titre, description, priorité, date limite
- Swipe pour supprimer ou marquer comme terminée
- Notifications de rappel (via flutter_local_notifications)
- Thème clair/sombre avec persistance de la préférence
- Animations de transition entre écrans

## Projet 2 : Application de films

### Montée en complexité

Fort de l'expérience de la to-do list, j'ai abordé un projet plus ambitieux intégrant :
- Appels API REST externes (TMDb API)
- Gestion des images avec cache et placeholders
- Recherche avec debounce
- Pagination infinie
- Liste de favoris synchronisée localement
- Gestion des états d'erreur et de chargement

### Intégration de l'API TMDb

The Movie Database (TMDb) offre une API REST gratuite et bien documentée pour accéder à un catalogue de films.

\`\`\`dart
class MovieService {
  final Dio _dio;
  final String _apiKey;
  
  MovieService({required String apiKey}) 
    : _apiKey = apiKey,
      _dio = Dio(BaseOptions(
        baseUrl: 'https://api.themoviedb.org/3',
        connectTimeout: Duration(seconds: 10),
        receiveTimeout: Duration(seconds: 10),
      ));
  
  Future<List<Movie>> getPopularMovies({int page = 1}) async {
    try {
      final response = await _dio.get(
        '/movie/popular',
        queryParameters: {
          'api_key': _apiKey,
          'language': 'fr-FR',
          'page': page,
        },
      );
      
      return (response.data['results'] as List)
          .map((json) => Movie.fromJson(json))
          .toList();
    } on DioException catch (e) {
      throw _handleError(e);
    }
  }
  
  Future<List<Movie>> searchMovies(String query, {int page = 1}) async {
    if (query.isEmpty) return [];
    
    try {
      final response = await _dio.get(
        '/search/movie',
        queryParameters: {
          'api_key': _apiKey,
          'language': 'fr-FR',
          'query': query,
          'page': page,
        },
      );
      
      return (response.data['results'] as List)
          .map((json) => Movie.fromJson(json))
          .toList();
    } on DioException catch (e) {
      throw _handleError(e);
    }
  }
  
  AppException _handleError(DioException e) {
    switch (e.type) {
      case DioExceptionType.connectionTimeout:
      case DioExceptionType.receiveTimeout:
        return NetworkException('Connexion trop lente');
      case DioExceptionType.connectionError:
        return NetworkException('Pas de connexion internet');
      default:
        return ApiException('Erreur serveur: \${e.response?.statusCode}');
    }
  }
}
\`\`\`

### Recherche avec debounce

La recherche en temps réel ne doit pas déclencher une requête API à chaque caractère tapé. Le debounce permet d'attendre que l'utilisateur ait fini de taper.

\`\`\`dart
class SearchProvider extends ChangeNotifier {
  Timer? _debounceTimer;
  final MovieService _service;
  
  String _query = '';
  List<Movie> _results = [];
  bool _isLoading = false;
  String? _error;
  
  void search(String query) {
    _query = query;
    _error = null;
    
    _debounceTimer?.cancel();
    
    if (query.isEmpty) {
      _results = [];
      notifyListeners();
      return;
    }
    
    _debounceTimer = Timer(Duration(milliseconds: 500), () async {
      _isLoading = true;
      notifyListeners();
      
      try {
        _results = await _service.searchMovies(query);
        _error = null;
      } catch (e) {
        _error = e.toString();
        _results = [];
      } finally {
        _isLoading = false;
        notifyListeners();
      }
    });
  }
}
\`\`\`

### Gestion des images

Les affiches de films peuvent être lourdes. Une stratégie de cache est essentielle pour les performances et l'économie de données.

\`\`\`dart
CachedNetworkImage(
  imageUrl: movie.posterUrl,
  placeholder: (context, url) => Container(
    color: Colors.grey[300],
    child: Center(child: CircularProgressIndicator()),
  ),
  errorWidget: (context, url, error) => Container(
    color: Colors.grey[300],
    child: Icon(Icons.movie, size: 50),
  ),
  fadeInDuration: Duration(milliseconds: 200),
)
\`\`\`

Le package \`cached_network_image\` gère automatiquement :
- Le cache disque des images téléchargées
- L'affichage de placeholders pendant le chargement
- Les widgets d'erreur en cas d'échec
- Les transitions animées

### Pagination infinie

Pour les listes longues, charger tous les résultats d'un coup n'est pas viable. La pagination infinie charge les pages suivantes au fur et à mesure du scroll.

\`\`\`dart
class MovieListScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return NotificationListener<ScrollNotification>(
      onNotification: (notification) {
        if (notification is ScrollEndNotification) {
          final metrics = notification.metrics;
          if (metrics.pixels >= metrics.maxScrollExtent - 200) {
            // Proche du bas, charger la page suivante
            context.read<MovieProvider>().loadNextPage();
          }
        }
        return false;
      },
      child: ListView.builder(
        itemCount: provider.movies.length + (provider.hasMore ? 1 : 0),
        itemBuilder: (context, index) {
          if (index == provider.movies.length) {
            return Center(child: CircularProgressIndicator());
          }
          return MovieCard(movie: provider.movies[index]);
        },
      ),
    );
  }
}
\`\`\`

## Ce que j'ai appris

### Le widget tree et les rebuilds

Comprendre comment Flutter construit et reconstruit son arbre de widgets est fondamental pour les performances.

**Règle d'or** : un rebuild de widget parent reconstruit tous ses enfants. Il faut donc :
- Utiliser \`const\` constructors quand possible pour éviter les rebuilds inutiles
- Placer les Consumers/Selectors au plus près des widgets qui en ont besoin
- Extraire les widgets statiques hors des builders

\`\`\`dart
// Mauvais : tout se reconstruit à chaque changement
Consumer<Provider>(
  builder: (context, provider, _) {
    return Column(
      children: [
        Text('Static title'),  // Se reconstruit inutilement
        Text(provider.dynamicValue),
      ],
    );
  },
)

// Bon : seul le widget dynamique se reconstruit
Column(
  children: [
    const Text('Static title'),  // Ne se reconstruit pas
    Consumer<Provider>(
      builder: (context, provider, _) => Text(provider.dynamicValue),
    ),
  ],
)
\`\`\`

### La qualité des packages

La communauté Flutter publie des milliers de packages sur pub.dev. Tous ne sont pas de qualité égale.

**Critères de sélection :**
- Score pub.dev (maintenance, popularité, santé)
- Date de dernière mise à jour
- Nombre et nature des issues ouvertes
- Compatibilité null safety
- Présence de tests et documentation

Un package abandonné peut devenir une dette technique significative.

### Le design system

Flutter encourage la création d'un design system cohérent via les \`ThemeData\`. Définir les couleurs, typographies et espacements en un seul endroit facilite la maintenance et assure la cohérence visuelle.

\`\`\`dart
final appTheme = ThemeData(
  useMaterial3: true,
  colorScheme: ColorScheme.fromSeed(
    seedColor: Colors.indigo,
    brightness: Brightness.light,
  ),
  textTheme: TextTheme(
    headlineLarge: GoogleFonts.poppins(fontWeight: FontWeight.bold),
    bodyMedium: GoogleFonts.roboto(),
  ),
  cardTheme: CardTheme(
    elevation: 2,
    shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
  ),
);
\`\`\`

## Comparaison avec d'autres approches

| Aspect | Flutter | React Native | Natif (Swift/Kotlin) |
|--------|---------|--------------|----------------------|
| Performance | Excellente | Bonne | Optimale |
| UI consistency | Parfaite cross-platform | Variable | Par plateforme |
| Courbe d'apprentissage | Moyenne | Moyenne (si JS connu) | Longue |
| Taille de l'app | ~5-10 MB de base | ~3-5 MB | Minimale |
| Hot reload | Excellent | Bon | Limité |
| Accès APIs natives | Via plugins | Via modules | Direct |

**Verdict** : Flutter est un excellent compromis pour le développement mobile cross-platform, particulièrement quand la cohérence visuelle entre plateformes est importante.

## Conclusion

Ces deux projets m'ont convaincu de la maturité de Flutter. Le framework est production-ready et permet de créer des applications de qualité professionnelle avec une productivité remarquable.

Les concepts appris (gestion d'état, architecture en couches, appels API, persistance locale) sont fondamentaux et transférables à d'autres frameworks ou plateformes.

Je continue à utiliser Flutter pour mes projets personnels. La productivité offerte par le hot reload, la qualité du rendu visuel et la richesse de l'écosystème en font mon choix par défaut pour le développement mobile. C'est un outil que je recommande à tout développeur souhaitant se lancer dans le mobile sans investir dans l'apprentissage de deux plateformes distinctes.
`,ts=`---
title: "Petit Georges vs Gros Georges 🐾"
slug: georges-le-chat
published: false
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
pinned: false
links:
  - label: Mon site personnel
    to: https://www.alexyvanot.com
    newTab: true
---

::toc

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
`,is=`---
title: "Commencer avec Svelte : Un guide pour débutants"
slug: getting-started-with-svelte
published: false
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
pinned: false
links:
  - label: Site officiel Svelte
    to: https://svelte.dev/
    newTab: true
  - label: Tutoriel officiel
    to: https://svelte.dev/tutorial
    newTab: true
---

::toc

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
`,ss=`---
title: "Mini Article"
slug: mini-article
published: false
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

::toc

La technologie évolue rapidement, transformant notre quotidien. Rester curieux et apprendre en continu permet de s'adapter à ce monde en mouvement.
`,rs=`---
title: "Techniques CSS modernes : Grid, Flexbox et plus"
slug: modern-css-techniques
published: false
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

::toc

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
`,as=`---
title: "Deep Learning et classification d'images : Mon expérience avec CIFAR-10"
slug: projet-cifar10-deep-learning
published: true
excerpt: "Implémentation et comparaison de différentes architectures de réseaux de neurones pour la classification d'images sur le dataset CIFAR-10. De la théorie à la pratique avec PyTorch."
author: Alexy VANOT
publishedAt: 2025-05-15
tags:
  - projet-technique
  - deep-learning
  - classification
  - pytorch
  - cnn
logo: PyTorch
readingTime: 18
color: "#EE4C2C"
pinned: true
---

::toc

# Deep Learning et classification d'images : Mon expérience avec CIFAR-10

CIFAR-10 est un classique incontournable de l'apprentissage automatique. Avec ses 60 000 images couleur de 32x32 pixels réparties en 10 classes, c'est le terrain d'entraînement idéal pour comprendre les réseaux de neurones convolutifs avant de s'attaquer à des problèmes plus complexes.

Ce projet, réalisé dans le cadre d'un cours de Deep Learning, m'a permis de passer de la théorie à la pratique et de développer une intuition concrète pour le fonctionnement des CNN.

## Présentation de CIFAR-10

### Le dataset

CIFAR-10 (Canadian Institute For Advanced Research) est composé de :
- 50 000 images d'entraînement
- 10 000 images de test
- 10 classes équilibrées : avion, automobile, oiseau, chat, cerf, chien, grenouille, cheval, bateau, camion

Chaque image fait 32x32 pixels en RGB, soit 3072 valeurs par image. Cette faible résolution est à la fois un avantage (entraînement rapide) et une limitation (détails peu visibles).

### Pourquoi CIFAR-10

Ce dataset occupe une place particulière dans l'histoire du deep learning :
- Suffisamment petit pour être traité sur un GPU modeste
- Suffisamment complexe pour nécessiter des architectures non triviales
- Benchmark standardisé avec des résultats publiés pour comparaison
- Disponible directement dans PyTorch et TensorFlow

## Objectifs du projet

Le travail pratique définissait plusieurs objectifs progressifs :

1. **Implémenter un CNN from scratch** : comprendre chaque couche, chaque paramètre
2. **Comparer différentes architectures** : mesurer l'impact de la profondeur et de la complexité
3. **Maîtriser les techniques de régularisation** : lutter contre l'overfitting
4. **Analyser les erreurs** : comprendre les limites du modèle

L'évaluation portait autant sur la démarche méthodologique que sur les performances brutes.

## Architecture de base

### Le premier modèle naïf

Mon premier modèle était volontairement minimaliste : deux couches convolutives suivies de deux couches fully connected.

\`\`\`python
class SimpleConvNet(nn.Module):
    def __init__(self):
        super().__init__()
        self.conv1 = nn.Conv2d(3, 32, kernel_size=3, padding=1)
        self.conv2 = nn.Conv2d(32, 64, kernel_size=3, padding=1)
        self.pool = nn.MaxPool2d(2, 2)
        self.fc1 = nn.Linear(64 * 8 * 8, 512)
        self.fc2 = nn.Linear(512, 10)
    
    def forward(self, x):
        x = self.pool(F.relu(self.conv1(x)))  # 32x32 -> 16x16
        x = self.pool(F.relu(self.conv2(x)))  # 16x16 -> 8x8
        x = x.view(-1, 64 * 8 * 8)
        x = F.relu(self.fc1(x))
        x = self.fc2(x)
        return x
\`\`\`

**Résultat** : 65% d'accuracy sur le test set après 20 époques.

C'est un point de départ, pas une destination. Ce score de base sert de référence pour mesurer l'apport de chaque amélioration.

### Analyse de ce premier modèle

Le gap entre train accuracy (95%) et test accuracy (65%) révèle un overfitting massif. Le modèle mémorise les exemples d'entraînement sans généraliser.

Causes identifiées :
- Capacité du modèle trop grande par rapport à la régularisation
- Pas d'augmentation de données
- Pas de dropout ni de batch normalization

## Évolution progressive de l'architecture

### Ajout de profondeur

La profondeur d'un réseau détermine sa capacité à apprendre des features hiérarchiques. J'ai progressivement ajouté des couches :

\`\`\`python
class DeeperConvNet(nn.Module):
    def __init__(self):
        super().__init__()
        # Block 1
        self.conv1_1 = nn.Conv2d(3, 64, 3, padding=1)
        self.conv1_2 = nn.Conv2d(64, 64, 3, padding=1)
        # Block 2
        self.conv2_1 = nn.Conv2d(64, 128, 3, padding=1)
        self.conv2_2 = nn.Conv2d(128, 128, 3, padding=1)
        # Block 3
        self.conv3_1 = nn.Conv2d(128, 256, 3, padding=1)
        self.conv3_2 = nn.Conv2d(256, 256, 3, padding=1)
        
        self.pool = nn.MaxPool2d(2, 2)
        self.fc1 = nn.Linear(256 * 4 * 4, 512)
        self.fc2 = nn.Linear(512, 10)
        self.dropout = nn.Dropout(0.5)
\`\`\`

Avec cette architecture plus profonde et du dropout : 74% d'accuracy.

### Batch Normalization

L'ajout de BatchNorm après chaque convolution a été une révélation. Les bénéfices sont multiples :

**Stabilisation de l'entraînement**
Les activations restent dans une plage raisonnable, évitant les problèmes de gradient vanishing/exploding.

**Régularisation implicite**
Le bruit introduit par les statistiques de batch agit comme une forme de régularisation.

**Learning rates plus élevés**
Avec BatchNorm, le modèle tolère des learning rates plus agressifs, accélérant la convergence.

\`\`\`python
self.bn1_1 = nn.BatchNorm2d(64)
self.bn1_2 = nn.BatchNorm2d(64)
# ...
x = F.relu(self.bn1_1(self.conv1_1(x)))
\`\`\`

Avec BatchNorm : 79% d'accuracy. Un gain significatif pour un ajout simple.

### Architecture finale optimisée

Après de nombreuses itérations, mon architecture personnalisée atteignait :

\`\`\`python
class OptimizedConvNet(nn.Module):
    def __init__(self):
        super().__init__()
        # Block 1: 32x32 -> 16x16
        self.block1 = nn.Sequential(
            nn.Conv2d(3, 64, 3, padding=1),
            nn.BatchNorm2d(64),
            nn.ReLU(inplace=True),
            nn.Conv2d(64, 64, 3, padding=1),
            nn.BatchNorm2d(64),
            nn.ReLU(inplace=True),
            nn.MaxPool2d(2, 2),
            nn.Dropout2d(0.25)
        )
        # Block 2: 16x16 -> 8x8
        self.block2 = nn.Sequential(
            nn.Conv2d(64, 128, 3, padding=1),
            nn.BatchNorm2d(128),
            nn.ReLU(inplace=True),
            nn.Conv2d(128, 128, 3, padding=1),
            nn.BatchNorm2d(128),
            nn.ReLU(inplace=True),
            nn.MaxPool2d(2, 2),
            nn.Dropout2d(0.25)
        )
        # Block 3: 8x8 -> 4x4
        self.block3 = nn.Sequential(
            nn.Conv2d(128, 256, 3, padding=1),
            nn.BatchNorm2d(256),
            nn.ReLU(inplace=True),
            nn.Conv2d(256, 256, 3, padding=1),
            nn.BatchNorm2d(256),
            nn.ReLU(inplace=True),
            nn.MaxPool2d(2, 2),
            nn.Dropout2d(0.25)
        )
        # Classifier
        self.classifier = nn.Sequential(
            nn.Linear(256 * 4 * 4, 512),
            nn.BatchNorm1d(512),
            nn.ReLU(inplace=True),
            nn.Dropout(0.5),
            nn.Linear(512, 10)
        )
\`\`\`

**Résultat** : 82% d'accuracy avec environ 1.2M de paramètres.

## Les techniques qui font la différence

### Data Augmentation

Sans augmentation, le modèle overfitte inévitablement sur les 50 000 images d'entraînement. L'augmentation crée artificiellement de la variété :

\`\`\`python
transform_train = transforms.Compose([
    transforms.RandomCrop(32, padding=4),
    transforms.RandomHorizontalFlip(p=0.5),
    transforms.ColorJitter(brightness=0.2, contrast=0.2, saturation=0.2),
    transforms.RandomRotation(15),
    transforms.ToTensor(),
    transforms.Normalize(
        mean=[0.4914, 0.4822, 0.4465],
        std=[0.2470, 0.2435, 0.2616]
    )
])

transform_test = transforms.Compose([
    transforms.ToTensor(),
    transforms.Normalize(
        mean=[0.4914, 0.4822, 0.4465],
        std=[0.2470, 0.2435, 0.2616]
    )
])
\`\`\`

**Important** : l'augmentation ne s'applique qu'à l'entraînement, pas au test. Les métriques de test doivent refléter la performance sur des données réelles, non augmentées.

**Impact** : +3-4 points d'accuracy et réduction significative de l'overfitting.

### Learning Rate Scheduling

Un learning rate constant n'est pas optimal. Au début, on veut avancer vite ; vers la fin, on veut des ajustements fins.

J'ai testé plusieurs stratégies :

**StepLR**
Division par 10 tous les N epochs. Simple mais brutal.
\`\`\`python
scheduler = optim.lr_scheduler.StepLR(optimizer, step_size=30, gamma=0.1)
\`\`\`

**CosineAnnealingLR**
Décroissance douce suivant une courbe cosinus.
\`\`\`python
scheduler = optim.lr_scheduler.CosineAnnealingLR(optimizer, T_max=100)
\`\`\`

**ReduceLROnPlateau**
Réduction automatique quand la loss stagne. Ma préférée pour sa nature adaptive.
\`\`\`python
scheduler = optim.lr_scheduler.ReduceLROnPlateau(
    optimizer, mode='min', factor=0.5, patience=5, verbose=True
)
\`\`\`

ReduceLROnPlateau a donné les meilleurs résultats sur ce dataset : le scheduler s'adapte à la dynamique réelle de l'apprentissage plutôt que de suivre un calendrier fixe.

### Optimiseur

J'ai comparé SGD avec momentum et Adam :

**SGD + Momentum**
\`\`\`python
optimizer = optim.SGD(model.parameters(), lr=0.1, momentum=0.9, weight_decay=5e-4)
\`\`\`

**Adam**
\`\`\`python
optimizer = optim.Adam(model.parameters(), lr=0.001, weight_decay=5e-4)
\`\`\`

Résultat surprenant : SGD avec un bon scheduling atteint de meilleures performances finales qu'Adam, bien qu'il converge plus lentement au début. Ce constat est cohérent avec la littérature académique sur les benchmarks d'images.

## Comparaison des architectures

Au-delà de mon CNN personnalisé, j'ai implémenté et comparé des architectures classiques :

### VGG-11 adapté

VGG utilise uniquement des convolutions 3x3 empilées. J'ai adapté VGG-11 pour les images 32x32 de CIFAR-10 :

\`\`\`python
class VGG11_CIFAR(nn.Module):
    def __init__(self):
        super().__init__()
        self.features = nn.Sequential(
            # Conv block 1
            nn.Conv2d(3, 64, 3, padding=1), nn.BatchNorm2d(64), nn.ReLU(True),
            nn.MaxPool2d(2, 2),
            # Conv block 2
            nn.Conv2d(64, 128, 3, padding=1), nn.BatchNorm2d(128), nn.ReLU(True),
            nn.MaxPool2d(2, 2),
            # Conv block 3
            nn.Conv2d(128, 256, 3, padding=1), nn.BatchNorm2d(256), nn.ReLU(True),
            nn.Conv2d(256, 256, 3, padding=1), nn.BatchNorm2d(256), nn.ReLU(True),
            nn.MaxPool2d(2, 2),
            # Conv block 4
            nn.Conv2d(256, 512, 3, padding=1), nn.BatchNorm2d(512), nn.ReLU(True),
            nn.Conv2d(512, 512, 3, padding=1), nn.BatchNorm2d(512), nn.ReLU(True),
            nn.MaxPool2d(2, 2),
            # Conv block 5
            nn.Conv2d(512, 512, 3, padding=1), nn.BatchNorm2d(512), nn.ReLU(True),
            nn.Conv2d(512, 512, 3, padding=1), nn.BatchNorm2d(512), nn.ReLU(True),
            nn.MaxPool2d(2, 2),
        )
        self.classifier = nn.Sequential(
            nn.Linear(512, 512), nn.ReLU(True), nn.Dropout(0.5),
            nn.Linear(512, 10)
        )
\`\`\`

### ResNet-18 adapté

ResNet introduit les connexions résiduelles qui permettent d'entraîner des réseaux beaucoup plus profonds :

\`\`\`python
class BasicBlock(nn.Module):
    def __init__(self, in_channels, out_channels, stride=1):
        super().__init__()
        self.conv1 = nn.Conv2d(in_channels, out_channels, 3, stride, 1, bias=False)
        self.bn1 = nn.BatchNorm2d(out_channels)
        self.conv2 = nn.Conv2d(out_channels, out_channels, 3, 1, 1, bias=False)
        self.bn2 = nn.BatchNorm2d(out_channels)
        
        self.shortcut = nn.Sequential()
        if stride != 1 or in_channels != out_channels:
            self.shortcut = nn.Sequential(
                nn.Conv2d(in_channels, out_channels, 1, stride, bias=False),
                nn.BatchNorm2d(out_channels)
            )
    
    def forward(self, x):
        out = F.relu(self.bn1(self.conv1(x)))
        out = self.bn2(self.conv2(out))
        out += self.shortcut(x)  # Skip connection
        out = F.relu(out)
        return out
\`\`\`

### Résultats comparatifs

| Architecture | Test Accuracy | Paramètres | Temps/époque |
|-------------|---------------|------------|--------------|
| CNN simple | 65% | 0.4M | 15s |
| CNN optimisé | 82% | 1.2M | 25s |
| VGG-11 | 89% | 9.8M | 45s |
| ResNet-18 | 93% | 11.2M | 50s |

**Observations :**
- La profondeur et les skip connections de ResNet apportent un gain significatif
- VGG atteint de bonnes performances mais avec beaucoup plus de paramètres
- Mon CNN personnalisé offre un bon ratio performance/complexité

## Analyse des erreurs

### Matrice de confusion

La matrice de confusion révèle les patterns d'erreur :

\`\`\`python
from sklearn.metrics import confusion_matrix
import seaborn as sns

def plot_confusion_matrix(model, test_loader):
    model.eval()
    all_preds, all_labels = [], []
    
    with torch.no_grad():
        for images, labels in test_loader:
            outputs = model(images.cuda())
            _, predicted = outputs.max(1)
            all_preds.extend(predicted.cpu().numpy())
            all_labels.extend(labels.numpy())
    
    cm = confusion_matrix(all_labels, all_preds)
    plt.figure(figsize=(10, 8))
    sns.heatmap(cm, annot=True, fmt='d', 
                xticklabels=classes, yticklabels=classes)
    plt.xlabel('Predicted')
    plt.ylabel('True')
\`\`\`

### Classes les plus confondues

Les paires de classes problématiques sont prévisibles et instructives :

**Chat / Chien** : 15% de confusion mutuelle
Deux animaux à quatre pattes, souvent photographiés de face. La faible résolution (32x32) ne permet pas de distinguer finement les traits du visage.

**Automobile / Camion** : 12% de confusion
Véhicules de forme similaire. La distinction repose sur des proportions subtiles difficiles à capturer en basse résolution.

**Oiseau / Avion** : 8% de confusion
Formes parfois proches (ailes étendues). Le contexte (ciel) est souvent similaire.

**Cerf / Cheval** : 7% de confusion
Quadrupèdes de profil, morphologie comparable à cette résolution.

### Ce que révèle l'analyse des erreurs

Le modèle a appris des features pertinentes mais manque de granularité pour les distinctions fines. C'est une limitation inhérente à la résolution des images plus qu'à l'architecture du modèle.

Cette analyse suggère que pour améliorer significativement les performances, il faudrait :
- Des images de plus haute résolution
- Des features supplémentaires (texture, contexte)
- Des mécanismes d'attention pour se focaliser sur les régions discriminantes

## Visualisation des features

### Feature maps

Pour comprendre ce que le modèle "voit", j'ai visualisé les activations des couches intermédiaires :

\`\`\`python
def visualize_feature_maps(model, image, layer_name):
    activation = {}
    
    def hook(model, input, output):
        activation['output'] = output.detach()
    
    layer = dict(model.named_modules())[layer_name]
    handle = layer.register_forward_hook(hook)
    
    model(image.unsqueeze(0).cuda())
    handle.remove()
    
    features = activation['output'].squeeze().cpu()
    
    fig, axes = plt.subplots(8, 8, figsize=(12, 12))
    for idx, ax in enumerate(axes.flat):
        if idx < features.shape[0]:
            ax.imshow(features[idx], cmap='viridis')
        ax.axis('off')
\`\`\`

**Observations :**
- Les premières couches détectent des edges et des gradients de couleur
- Les couches intermédiaires capturent des textures et des motifs répétitifs
- Les couches profondes activent des patterns plus abstraits, spécifiques aux classes

### Grad-CAM

Gradient-weighted Class Activation Mapping montre quelles régions de l'image influencent la prédiction :

Les visualisations Grad-CAM confirment que le modèle se focalise sur les régions pertinentes : la tête et le corps pour les animaux, la carrosserie pour les véhicules.

## Leçons apprises

### L'importance de la méthodologie

Modifier plusieurs hyperparamètres simultanément rend l'analyse impossible. Chaque expérience doit isoler une variable :
- Une seule modification par run
- Logging systématique des paramètres et résultats
- Reproductibilité via seeds fixées

\`\`\`python
torch.manual_seed(42)
torch.cuda.manual_seed(42)
np.random.seed(42)
\`\`\`

### Les limites du dataset

CIFAR-10 reste un dataset "jouet". Ses images de 32x32 pixels limitent la complexité des features extractibles. Les architectures qui excellent sur CIFAR-10 ne sont pas nécessairement optimales pour des problèmes réels avec des images haute résolution.

C'est un outil d'apprentissage précieux, pas une représentation fidèle des défis industriels.

### L'importance de la reproductibilité

Fixer les seeds aléatoires, documenter chaque expérience, sauvegarder les checkpoints : ces pratiques semblent fastidieuses mais deviennent vite indispensables.

Un résultat non reproductible n'a pas de valeur scientifique.

## Conclusion

Ce projet m'a donné une compréhension intuitive et pratique des CNN. Au-delà des formules mathématiques, j'ai compris pourquoi certaines techniques fonctionnent (BatchNorm stabilise les distributions, skip connections permettent le flux de gradient) et quand les utiliser.

Les 93% d'accuracy atteints avec ResNet-18 sont proches de l'état de l'art publié sur ce dataset. Plus important que ce chiffre, c'est le chemin parcouru depuis les 65% du premier modèle naïf qui constitue l'apprentissage réel.

Cette expérience a posé les fondations pour des projets plus complexes : détection d'objets (YOLO), segmentation sémantique (U-Net), et au-delà. Les principes restent les mêmes ; seule la complexité augmente.
`,os=`---
title: "Comet Learning : Enseigner la programmation par le jeu Minecraft"
slug: projet-comet-learning-formation-minecraft
published: true
excerpt: "Comment nous avons utilisé Minecraft comme support pédagogique pour initier des débutants à la programmation et à l'administration de serveurs. Une expérience de formation innovante."
author: Alexy VANOT
publishedAt: 2025-05-20
tags:
  - projet-humain
  - formation
  - minecraft
  - pedagogie
logo: Java
readingTime: 14
color: "#62B47A"
---

::toc

# Comet Learning : Enseigner la programmation par le jeu Minecraft

Le projet Comet Learning, mené avec Brimal MARTIN, partait d'une intuition contre-intuitive : Minecraft, un jeu vidéo souvent perçu comme une simple distraction, peut être un formidable outil pédagogique pour enseigner la programmation et l'administration système. Nous avons voulu vérifier cette hypothèse en organisant des formations tout public, et les résultats ont dépassé nos attentes.

## L'idée fondatrice

### Pourquoi Minecraft

Minecraft n'est pas qu'un jeu de construction. C'est un écosystème complet avec :
- Une communauté de millions de joueurs actifs
- Un système de serveurs multijoueurs
- Une architecture extensible via des plugins
- Des langages de scripting accessibles

Cette combinaison en fait un terrain d'apprentissage idéal. Les participants ne découvrent pas un environnement abstrait et intimidant : ils manipulent un univers qu'ils connaissent déjà, souvent depuis l'enfance.

### Le déclic pédagogique

L'idée nous est venue en observant des jeunes joueurs. Beaucoup avaient déjà tenté de créer leurs propres serveurs, de modifier des configurations, d'installer des plugins. Ils faisaient de l'administration système sans le savoir, motivés par l'envie de jouer avec leurs amis dans des conditions personnalisées.

Pourquoi ne pas structurer cet apprentissage informel ? Pourquoi ne pas l'enrichir pour aller plus loin ?

## Le programme de formation

### Module 1 : Fondamentaux système

**Durée : 2 heures**

Avant même de parler de Minecraft, nous posions les bases :

**Introduction au terminal**
Pour beaucoup de participants, c'était la première rencontre avec une interface en ligne de commande. Nous expliquions pourquoi les serveurs n'ont pas d'interface graphique, pourquoi le terminal reste l'outil de prédilection des administrateurs.

Les commandes de base : \`cd\`, \`ls\`, \`mkdir\`, \`cp\`, \`mv\`, \`rm\`. Chaque commande était illustrée par son équivalent dans l'explorateur de fichiers Windows, pour créer des ponts avec le connu.

**Comprendre les fichiers et permissions**
Qu'est-ce qu'un fichier de configuration ? Qu'est-ce que le format YAML ? Pourquoi certains fichiers sont-ils protégés en écriture ? Ces questions, anodines pour un informaticien, représentent des concepts fondamentaux pour un débutant.

**Notions réseau de base**
Qu'est-ce qu'une adresse IP ? Un port ? Pourquoi faut-il "ouvrir un port" pour que des amis puissent rejoindre le serveur ? Nous utilisions des analogies simples : l'IP comme adresse postale, le port comme numéro d'appartement.

### Module 2 : Installation et configuration d'un serveur

**Durée : 3 heures**

**Choix du logiciel serveur**
Nous présentions les différentes options : Vanilla (serveur officiel Mojang), Spigot, Paper, Fabric. Chaque option avec ses avantages et inconvénients. Pour la formation, nous utilisions PaperMC pour sa compatibilité plugin et ses optimisations de performance.

**Installation pas à pas**
Téléchargement du JAR, création du script de lancement, première exécution, acceptation de l'EULA, configuration de base. Chaque étape était effectuée par les participants sur leur propre machine.

\`\`\`bash
# Script de lancement que nous faisions créer
#!/bin/bash
java -Xmx2G -Xms1G -jar paper-1.20.4.jar nogui
\`\`\`

Ce simple script était l'occasion d'expliquer les arguments JVM, la gestion de la mémoire, et pourquoi \`nogui\` permet d'économiser des ressources.

**Configuration du server.properties**
Chaque paramètre était expliqué : \`max-players\`, \`difficulty\`, \`pvp\`, \`spawn-protection\`. Les participants personnalisaient leur serveur selon leurs préférences, comprenant l'impact concret de chaque option.

**Les permissions avec LuckPerms**
Introduction au concept de groupes et permissions. Création d'un groupe "Modérateur" avec des droits étendus. Explication de pourquoi on n'accorde jamais tous les droits à tout le monde, même dans un jeu.

### Module 3 : Introduction à Skript

**Durée : 4 heures (2 sessions)**

**Pourquoi Skript et pas Java**

Un choix délibéré et assumé. Java est le langage natif des plugins Minecraft, mais sa complexité (compilation, gestion des dépendances, OOP stricte) aurait découragé les débutants.

Skript est un langage de scripting conçu pour Minecraft. Sa syntaxe proche de l'anglais naturel permet aux débutants de comprendre ce qu'ils écrivent :

\`\`\`
on join:
    send "Bienvenue %player% sur le serveur !" to player
    give player 5 bread
    set player's gamemode to survival
\`\`\`

Même quelqu'un qui n'a jamais programmé peut lire ce code et comprendre son effet. Cette lisibilité immédiate crée un sentiment de compétence qui motive la poursuite de l'apprentissage.

**Concepts progressifs**

Nous introduisions les concepts de programmation un par un :

*Les événements* : "Quand un joueur fait X, alors Y se produit"
\`\`\`
on break of diamond ore:
    send "Tu as trouvé du diamant !" to player
\`\`\`

*Les conditions* : "Si telle condition est vraie, alors..."
\`\`\`
on join:
    if player has permission "vip":
        send "Bienvenue VIP %player% !" to player
    else:
        send "Bienvenue %player% !" to player
\`\`\`

*Les variables* : stocker et manipuler des informations
\`\`\`
on kill of zombie:
    add 1 to {kills::%player%}
    send "Tu as tué %{kills::%player%}% zombies au total !" to player
\`\`\`

*Les boucles* : répéter des actions
\`\`\`
command /fireworks:
    trigger:
        loop 10 times:
            launch firework at player's location
            wait 0.5 seconds
\`\`\`

**Mini-projets guidés**

Chaque session se terminait par un mini-projet que les participants réalisaient avec notre aide :
- Un système de téléportation au spawn
- Un kit de démarrage pour les nouveaux joueurs
- Un système de points d'expérience personnalisé
- Un mini-jeu de chasse au trésor

### Module 4 : Projet final

**Durée : 3 heures**

Les participants concevaient et implémentaient leur propre système de jeu. Exemples réalisés :
- Un système d'économie avec boutique
- Un plugin de duels entre joueurs
- Un générateur de quêtes aléatoires
- Un système de clans avec territoires

Ce projet final validait l'acquisition des compétences et donnait aux participants une réalisation concrète à montrer.

## Les défis pédagogiques

### L'hétérogénéité des niveaux

Notre public allait de 10 à 50 ans, avec des niveaux techniques radicalement différents. Certains avaient déjà administré des serveurs, d'autres découvraient que l'ordinateur pouvait faire autre chose que naviguer sur le web.

**Solutions adoptées :**
- Exercices à plusieurs niveaux de difficulté
- Système de parrainage entre participants avancés et débutants
- Ressources complémentaires pour ceux qui voulaient aller plus loin
- Patience et répétition pour les concepts fondamentaux

### La gestion du temps

Une session de 3 heures passe vite quand on doit à la fois expliquer des concepts, faire pratiquer, et résoudre les problèmes individuels.

**Ce qui fonctionnait :**
- Un planning précis mais flexible
- Des checkpoints clairs ("À ce stade, tout le monde doit avoir...")
- L'acceptation que tout le monde ne finisse pas au même point
- Des supports écrits pour continuer à la maison

### Les problèmes techniques imprévisibles

Chaque session apportait son lot de surprises :
- Antivirus bloquant le serveur
- Pare-feu mal configuré
- Version Java incompatible
- Erreurs de syntaxe dans les fichiers YAML

Ces problèmes, frustrants sur le moment, étaient en réalité des opportunités pédagogiques. Chercher une erreur dans un fichier de configuration, lire un message d'erreur, diagnostiquer un problème : autant de compétences essentielles que les tutoriels lisses ne permettent pas d'acquérir.

## Les enseignements tirés

### L'apprentissage par l'erreur

Les moments les plus formateurs n'étaient pas ceux où tout fonctionnait du premier coup. C'étaient ceux où un script refusait de se charger, où le serveur crashait, où un comportement inattendu se produisait.

Chercher l'erreur ensemble, comprendre pourquoi le serveur refusait de démarrer, lire et interpréter un log : ces compétences de débogage sont cruciales pour tout informaticien et s'acquièrent uniquement par la pratique.

### La documentation comme outil d'autonomie

Nous avons créé des guides pas-à-pas que les participants pouvaient emmener. Mais plus important, nous leur avons appris à consulter la documentation officielle de Skript, à chercher des solutions sur les forums, à formuler une question technique de manière claire.

L'objectif n'était pas de créer une dépendance envers nous, mais de donner les outils pour continuer seul.

### Le jeu comme vecteur de motivation

L'engagement des participants était incomparable avec celui observé dans des formations classiques. Personne ne regardait l'heure. Personne ne bâillait. L'envie de voir son script fonctionner dans le jeu, de tester sa création avec les autres, maintenait une motivation constante.

Cette observation rejoint les travaux sur la ludification (gamification) de l'apprentissage, mais avec une nuance importante : nous n'avions pas ajouté des éléments de jeu à un cours. Nous avions construit le cours autour d'un jeu existant et maîtrisé par les apprenants.

## Résultats et impact

### Les chiffres

Sur six mois :
- 8 sessions de formation
- 24 participants au total
- 100% de taux de complétion (aucun abandon en cours de session)
- 5 participants ont ensuite créé leurs propres serveurs publics

### Les témoignages

Un participant de 14 ans : "J'ai toujours voulu programmer mais je pensais que c'était trop dur. Maintenant je comprends que c'est juste une question de pratique."

Un parent de 42 ans, venu accompagner son fils : "Je pensais venir juste pour surveiller, et finalement j'ai appris plus que lui. Je n'aurais jamais imaginé toucher à un terminal un jour."

Un participant devenu enseignant : trois mois après la formation, l'un des participants a reproduit notre concept dans son collège, organisant un club Minecraft éducatif.

### Les limites observées

Skript reste un langage de niche. Les compétences acquises ne sont pas directement transférables vers un emploi en développement. Nous étions transparents sur ce point : Comet Learning enseigne les concepts fondamentaux de la programmation, pas un langage professionnel.

Pour ceux qui voulaient aller plus loin, nous orientions vers des ressources Python ou Java, en soulignant les ponts avec ce qu'ils avaient appris.

## Réflexions sur la pédagogie informatique

### Le mythe de l'apprentissage difficile

"La programmation, c'est dur." Ce préjugé empêche beaucoup de gens de se lancer. Notre expérience montre que le problème n'est pas la difficulté intrinsèque, mais le manque de contexte motivant et d'accompagnement bienveillant.

Un enfant qui modifie un script pour changer la couleur d'un message fait de la programmation. Il ne le sait pas toujours, et ce "ne pas savoir" le libère de l'anxiété de performance.

### L'importance du feedback immédiat

En programmation classique, le cycle écriture-compilation-test peut être long et décourageant. Avec Skript, le feedback est quasi instantané : modifier un fichier, recharger, tester dans le jeu. Ce cycle court maintient l'engagement et permet d'itérer rapidement.

### Repenser les parcours d'initiation

Les cursus informatiques traditionnels commencent souvent par des concepts abstraits (algorithmique, structures de données) avant d'arriver aux applications concrètes. Notre approche inverse ce paradigme : partir du concret, du motivant, du ludique, puis remonter vers l'abstrait quand le besoin s'en fait sentir.

## Conclusion

Comet Learning m'a convaincu de l'importance de la pédagogie par le projet. Donner un objectif concret et motivant, fournir les outils pour l'atteindre, accompagner sans faire à la place : c'est une approche que je continue d'appliquer dans tous les contextes de transmission.

Ce projet m'a aussi rappelé pourquoi j'aime l'informatique : la possibilité de créer, de partager, et de voir les autres s'approprier ces outils pour leurs propres projets.

Chaque participant qui a quitté nos sessions avec un serveur fonctionnel et quelques scripts de sa création emportait plus qu'un savoir technique. Il emportait la conviction qu'il était capable d'apprendre, de créer, de comprendre. C'est peut-être le plus beau résultat d'une formation.
`,ls=`---
title: "Analyse d'images et Computer Vision : Retour sur le projet Foot AI"
slug: projet-foot-ai-computer-vision
published: true
excerpt: "Comment j'ai développé un système de détection et segmentation des pieds en temps réel avec YOLOv8. Les défis de la création d'un dataset personnalisé et du fine-tuning d'un modèle de deep learning."
author: Alexy VANOT
publishedAt: 2025-06-01
tags:
  - projet-technique
  - computer-vision
  - yolo
  - deep-learning
  - python
logo: Python
readingTime: 16
color: "#FF6F00"
---

::toc

# Analyse d'images et Computer Vision : Retour sur le projet Foot AI

Le projet Foot AI est né d'une question apparemment simple : peut-on entraîner un modèle de deep learning à détecter et segmenter des pieds dans une image ? Ce qui semblait trivial au premier abord s'est révélé être un excellent exercice d'apprentissage, couvrant l'intégralité du pipeline d'un projet de Computer Vision moderne.

## Contexte et objectifs

### Le cadre académique

Ce projet s'inscrivait dans le cadre d'un cours de Vision par Ordinateur en dernière année d'études. L'objectif pédagogique était ambitieux : maîtriser le pipeline complet d'un projet de vision par ordinateur, de la collecte des données au déploiement d'un modèle fonctionnel.

Les étapes à couvrir :
1. Définition du problème et collecte des données
2. Annotation et préparation du dataset
3. Choix et configuration de l'architecture
4. Entraînement et validation du modèle
5. Évaluation et analyse des erreurs
6. Déploiement pour l'inférence en temps réel

### Pourquoi la détection de pieds

Le choix du sujet peut sembler incongru. En réalité, il répondait à plusieurs critères pédagogiques :
- Classe unique (simplifie l'analyse des résultats)
- Variabilité importante (chaussures, angles, éclairages)
- Applications potentielles (podologie, sport, essayage virtuel)
- Absence de dataset public existant (obligation de créer le sien)

Ce dernier point était crucial : l'objectif n'était pas de reproduire un tutoriel avec un dataset tout prêt, mais de vivre l'expérience complète de la création d'un système de vision sur mesure.

## La création du dataset

### Stratégie de collecte

La qualité d'un modèle de machine learning dépend fondamentalement de la qualité de ses données d'entraînement. J'ai donc consacré un temps significatif à la réflexion sur la stratégie de collecte.

**Sources d'images utilisées :**
- Photos personnelles prises spécifiquement pour le projet
- Images libres de droits de banques d'images
- Captures d'écran de vidéos YouTube (tutoriels de danse, sport)
- Photos de proches ayant donné leur consentement

**Critères de diversité :**
- Types de chaussures : baskets, talons, sandales, chaussures de ville, pieds nus
- Environnements : intérieur, extérieur, sols variés
- Conditions d'éclairage : lumière naturelle, artificielle, ombres portées
- Angles de vue : face, profil, plongée, contre-plongée
- Nombre de pieds : un seul, deux, groupe de personnes
- Occlusions : partielles (herbe, vêtements) ou pieds entièrement visibles

Au total, j'ai collecté 247 images répondant à ces critères de diversité.

### L'annotation avec Roboflow

L'annotation est la phase la plus chronophage d'un projet de Computer Vision. Pour la segmentation (contrairement à la simple détection par boîtes englobantes), il faut délimiter précisément les contours de chaque objet.

**Choix de l'outil**
J'ai utilisé Roboflow pour plusieurs raisons :
- Interface intuitive pour l'annotation polygonale
- Génération automatique des formats d'export (YOLO, COCO, etc.)
- Fonctionnalités d'augmentation de données intégrées
- Versioning du dataset

**Le processus d'annotation**
Chaque image nécessitait :
1. Identification de tous les pieds présents
2. Traçage du contour précis de chaque pied (20-30 points par objet)
3. Vérification et ajustement des polygones

En moyenne, une image prenait 3 à 5 minutes à annoter correctement. Soit environ 15 heures de travail pour les 247 images.

### Les erreurs du premier dataset

Ma première version du dataset présentait plusieurs biais que j'ai identifiés a posteriori :

**Biais de source**
Trop d'images provenaient du même environnement (mon appartement). Le modèle apprenait à reconnaître mon parquet autant que les pieds.

**Biais de distribution**
80% des images montraient des baskets. Le modèle échouait systématiquement sur les pieds nus et les talons.

**Annotations incohérentes**
Au début, j'hésitais sur les cas limites : inclure ou non la cheville ? Où s'arrête le pied quand la chaussure monte ? L'absence de convention claire créait de l'inconsistance.

**Corrections apportées**
- Diversification des sources d'images
- Rééquilibrage des types de chaussures
- Rédaction d'un guide d'annotation avec règles explicites
- Ré-annotation des cas ambigus

Cette phase de correction a ajouté une semaine au projet mais a significativement amélioré les résultats finaux.

## L'entraînement avec YOLOv8

### Pourquoi YOLO

YOLO (You Only Look Once) est devenu la référence pour la détection d'objets en temps réel. Sa version 8, développée par Ultralytics, apporte :
- Architecture modernisée (backbone CSPDarknet, neck PANet)
- Support natif de la segmentation d'instance
- API Python simple et bien documentée
- Poids pré-entraînés sur COCO (80 classes, millions d'images)

Le transfer learning depuis ces poids pré-entraînés est la clé : le modèle sait déjà extraire des features générales des images. Il suffit de l'adapter à notre classe spécifique.

### Choix de la taille du modèle

YOLOv8 existe en plusieurs variantes :

| Modèle | Paramètres | mAP (COCO) | Vitesse (FPS) |
|--------|------------|------------|---------------|
| YOLOv8n | 3.2M | 37.3 | 480 |
| YOLOv8s | 11.2M | 44.9 | 230 |
| YOLOv8m | 25.9M | 50.2 | 120 |
| YOLOv8l | 43.7M | 52.9 | 80 |
| YOLOv8x | 68.2M | 53.9 | 45 |

J'ai opté pour YOLOv8n (nano) pour plusieurs raisons :
- Ressources GPU limitées (GTX 1060 6GB)
- Objectif d'inférence temps réel sur hardware modeste
- Classe unique ne nécessitant pas une capacité de représentation énorme

### Configuration de l'entraînement

\`\`\`python
from ultralytics import YOLO

# Charger le modèle pré-entraîné
model = YOLO('yolov8n-seg.pt')

# Entraînement
results = model.train(
    data='foot_dataset.yaml',
    epochs=100,
    imgsz=640,
    batch=16,
    patience=20,
    lr0=0.01,
    lrf=0.01,
    augment=True,
    mosaic=1.0,
    mixup=0.1,
    copy_paste=0.1
)
\`\`\`

**Hyperparamètres clés :**

*Learning rate (lr0, lrf)*
Trop élevé : le modèle diverge et la loss explose
Trop bas : l'apprentissage est lent et peut rester coincé dans un minimum local
J'ai commencé à 0.01 et utilisé un scheduler cosine pour décroître progressivement.

*Patience*
Nombre d'époques sans amélioration avant arrêt anticipé. 20 époques permettent de s'assurer qu'une stagnation n'est pas temporaire.

*Augmentations*
Mosaic (assemblage de 4 images), MixUp (superposition d'images), Copy-Paste (copie d'objets d'une image à l'autre). Ces techniques augmentent artificiellement la diversité du dataset.

### Suivi de l'entraînement

YOLOv8 génère automatiquement des courbes de loss et métriques dans TensorBoard. J'ai surveillé :

**Box loss et Segmentation loss**
Les deux doivent diminuer. Une divergence suggère un problème d'architecture ou d'hyperparamètres.

**Precision et Recall**
Le compromis entre les deux est crucial. Une precision élevée avec recall faible signifie que le modèle est trop conservateur (manque des détections). L'inverse signifie trop de faux positifs.

**mAP50 et mAP50-95**
Mean Average Precision à IoU 50% et sur la plage 50-95%. Ces métriques standards permettent la comparaison avec d'autres travaux.

## Résultats et analyse

### Performances finales

Après 73 époques (arrêt anticipé), le modèle atteignait :

| Métrique | Valeur |
|----------|--------|
| mAP50 (boxes) | 0.924 |
| mAP50-95 (boxes) | 0.789 |
| mAP50 (masks) | 0.912 |
| mAP50-95 (masks) | 0.756 |
| Inference time | 12ms/image |

Ces résultats sont satisfaisants pour un dataset de cette taille et une classe unique.

### Analyse des succès

Le modèle excelle sur :
- Pieds de face ou de profil avec éclairage correct
- Chaussures de sport (sur-représentées dans le dataset)
- Images sans occlusion majeure
- Résolutions moyennes à élevées

### Analyse des échecs

Les cas d'erreur révèlent les limites du modèle et du dataset :

**Faux négatifs (pieds non détectés)**
- Pieds partiellement occultés (moins de 30% visibles)
- Images très sombres ou surexposées
- Pieds flous (mouvement rapide)
- Angles de vue extrêmes (vue du dessus pure)

**Faux positifs (détections erronées)**
- Objets oblongs de couleur chair (mains parfois)
- Chaussures posées au sol sans pied dedans
- Reflets dans des surfaces brillantes

**Segmentation imprécise**
- Contours imprécis sur les chaussures noires (faible contraste)
- Confusion cheville/pied sur les images serrées
- Artefacts sur les bords d'occlusion

### Visualisation des erreurs

J'ai implémenté un outil de visualisation pour analyser systématiquement les cas d'erreur :

\`\`\`python
def analyze_errors(model, test_dataset, iou_threshold=0.5):
    false_positives = []
    false_negatives = []
    
    for image, gt_boxes in test_dataset:
        predictions = model(image)
        
        for pred in predictions:
            if not matches_any_gt(pred, gt_boxes, iou_threshold):
                false_positives.append((image, pred))
        
        for gt in gt_boxes:
            if not matched_by_any_pred(gt, predictions, iou_threshold):
                false_negatives.append((image, gt))
    
    return false_positives, false_negatives
\`\`\`

Cette analyse systématique a guidé les améliorations du dataset pour des itérations futures.

## Ce que j'ai appris

### La donnée est reine

C'est un adage répété dans le machine learning, mais l'expérimenter concrètement marque durablement. J'ai passé plus de temps sur le dataset que sur l'entraînement lui-même. Et c'est le temps le mieux investi.

Un bon modèle avec des données médiocres donnera des résultats médiocres. Un modèle basique avec d'excellentes données peut surpasser un modèle sophistiqué mal nourri.

### L'importance des métriques multiples

Regarder uniquement l'accuracy globale est trompeur. Elle masque les biais de distribution et les cas limites. Une analyse complète inclut :
- Courbes precision-recall
- Matrice de confusion
- Distribution des erreurs par catégorie d'images
- Inspection visuelle des cas limites

### Le transfer learning change la donne

Partir d'un modèle pré-entraîné sur COCO a énormément accéléré l'apprentissage. Le modèle savait déjà détecter des contours, des textures, des formes. Il n'avait qu'à adapter ces features générales à notre classe spécifique.

Entraîner from scratch avec seulement 247 images aurait produit un modèle très pauvre.

### L'augmentation de données est puissante

Les techniques d'augmentation (rotations, changements de luminosité, miroir, mosaic) multiplient virtuellement la taille du dataset. Elles permettent au modèle de généraliser au-delà des exemples vus exactement.

Mais attention aux augmentations qui n'ont pas de sens pour le problème : une rotation de 180° peut être pertinente pour des objets quelconques, moins pour des pieds qui ont généralement une orientation verticale.

## Application pratique

### Interface de démonstration

Pour concrétiser le projet au-delà des métriques abstraites, j'ai développé une interface de démonstration avec Gradio :

\`\`\`python
import gradio as gr
from ultralytics import YOLO

model = YOLO('best.pt')

def detect_feet(image):
    results = model(image)
    annotated = results[0].plot()
    return annotated

demo = gr.Interface(
    fn=detect_feet,
    inputs=gr.Image(type="pil"),
    outputs=gr.Image(type="pil"),
    title="Foot AI - Détection et segmentation de pieds",
    description="Uploadez une image pour détecter les pieds présents."
)

demo.launch()
\`\`\`

Cette interface permet de :
- Tester le modèle sur des images uploadées
- Utiliser la webcam pour de l'inférence en direct
- Visualiser les masques de segmentation superposés

### Démonstration en direct

La démo en temps réel via webcam était particulièrement impressionnante. Le modèle détectait et segmentait les pieds à 30+ FPS sur un laptop standard, suivant les mouvements en temps réel.

Cette capacité temps réel ouvre des perspectives d'applications concrètes :
- Analyse de la foulée pour le sport
- Aide au diagnostic en podologie
- Essayage virtuel de chaussures

## Perspectives d'amélioration

### À court terme

- Augmenter le dataset à 500+ images
- Ajouter des sous-classes (pied gauche/droit, type de chaussure)
- Tester des architectures plus grandes (YOLOv8s)
- Implémenter du tracking pour suivre les pieds dans une vidéo

### À long terme

- Collecter un dataset à grande échelle avec crowdsourcing
- Entraîner un modèle multi-tâches (détection + estimation de pose du pied)
- Déployer comme API pour intégration dans d'autres applications

## Conclusion

Ce projet Foot AI m'a donné une compréhension solide et pratique du pipeline Computer Vision. Les concepts appris (annotation, augmentation, fine-tuning, évaluation, déploiement) sont directement transférables à n'importe quel autre problème de détection d'objets ou de segmentation.

Au-delà des compétences techniques, j'ai développé une intuition pour les pièges courants : biais de dataset, surapprentissage, métriques trompeuses. Cette expérience pratique est impossible à acquérir par la seule lecture de tutoriels.

C'est aussi un rappel salutaire que derrière les performances impressionnantes des modèles de vision modernes, il y a un travail considérable et souvent ingrat de préparation des données. Le deep learning n'est pas de la magie : c'est de l'ingénierie rigoureuse.
`,us=`---
title: "Projet InVR : Organiser une initiation à la réalité virtuelle sur un campus"
slug: projet-invr-initiation-realite-virtuelle
published: true
excerpt: "Retour d'expérience sur l'organisation d'un événement d'initiation à la réalité virtuelle destiné aux étudiants et aux familles. Les défis humains et logistiques d'un projet de médiation technologique."
author: Alexy VANOT
publishedAt: 2025-06-15
tags:
  - projet-humain
  - realite-virtuelle
  - mediation
  - evenementiel
logo: Unity
readingTime: 12
color: "#6366F1"
pinned: true
---

::toc

# Projet InVR : Organiser une initiation à la réalité virtuelle sur un campus

En 2023, avec Pierre GERVAIS, nous avons lancé le projet InVR : une série de sessions d'initiation à la réalité virtuelle sur notre campus universitaire. Ce qui a commencé comme une idée simple, presque naïve, s'est transformé en une aventure humaine riche d'enseignements qui a durablement marqué ma vision du rôle d'un ingénieur dans la société.

## Genèse du projet

### Le constat initial

L'idée est née d'un constat frappant : beaucoup de personnes autour de nous, y compris des étudiants en informatique, n'avaient jamais essayé la réalité virtuelle. Les casques VR restaient cantonnés aux cercles de passionnés et de gamers, alors que cette technologie a le potentiel de transformer de nombreux domaines : formation professionnelle, médecine, architecture, patrimoine culturel.

La démocratisation de la VR passe par l'accès. Or, le prix des équipements et la complexité perçue de leur utilisation constituent des barrières significatives pour le grand public.

### L'opportunité

Notre école disposait de plusieurs casques Meta Quest 2 et d'un HTC Vive Pro, utilisés principalement pour des projets de recherche. Le reste du temps, ce matériel dormait dans un placard. Avec Pierre, nous avons proposé à l'administration de l'utiliser pour des sessions d'initiation ouvertes à tous : étudiants, personnels, mais aussi familles lors de journées portes ouvertes.

La réponse a été positive, à condition que nous prenions en charge l'intégralité de l'organisation.

## La préparation : plus complexe qu'il n'y paraît

### Définir le programme

Nous avons rapidement compris qu'une session VR réussie ne s'improvise pas. Il fallait définir un parcours progressif adapté à des novices complets :

**Phase 1 : Découverte passive (5 minutes)**
Première mise du casque avec une expérience contemplative. Nous avons choisi "Wander", une application de visite virtuelle basée sur Google Street View. Le participant reste assis, se familiarise avec le casque, et découvre la sensation d'immersion sans stress.

**Phase 2 : Interaction basique (10 minutes)**
Introduction des contrôleurs avec "First Steps", le tutoriel officiel de Meta. Manipulation d'objets virtuels, découverte du tracking des mains, premiers pas dans un environnement contrôlé.

**Phase 3 : Expérience immersive (15 minutes)**
Selon les préférences du participant, nous proposions plusieurs options :
- "Beat Saber" pour les amateurs de rythme et de mouvement
- "Tilt Brush" pour les créatifs souhaitant dessiner en 3D
- "Nature Treks VR" pour ceux préférant une expérience relaxante
- "Job Simulator" pour une approche humoristique de l'interaction

### Logistique matérielle

L'organisation pratique a soulevé des défis concrets :

**L'espace physique**
La VR en room-scale nécessite un espace dégagé d'au moins 2x2 mètres par utilisateur. Nous avons négocié l'accès à une salle de réunion modulable, déplaçant tables et chaises avant chaque session.

**L'hygiène**
Question souvent négligée mais cruciale : les casques VR touchent le visage. Nous avons mis en place un protocole de nettoyage entre chaque participant avec des lingettes désinfectantes, et proposé des masques hygiéniques jetables pour le confort.

**La technique**
Chaque casque devait être chargé, mis à jour, et les applications préinstallées. Nous avons créé une checklist de préparation et arrivions une heure avant chaque session pour tout vérifier.

**Les imprévus**
Un contrôleur déchargé, une mise à jour système obligatoire, une application qui plante. Nous avons appris à avoir toujours un plan B, voire un plan C.

## L'accompagnement humain : le coeur du projet

### Gérer l'appréhension

Certains participants arrivaient enthousiastes, d'autres anxieux. Les craintes les plus fréquentes :
- La peur du ridicule devant les autres
- L'appréhension du mal des transports (motion sickness)
- La claustrophobie liée au casque sur le visage
- La crainte de "casser quelque chose"

Nous avons développé un discours rassurant et factuel. Expliquer le fonctionnement technique démystifie l'objet. Préciser que le mal des transports touche principalement les expériences avec déplacement artificiel rassure. Garantir que le participant peut retirer le casque à tout moment donne le contrôle.

### Les publics variés

La diversité des participants a été l'une des richesses du projet :

**Les enfants (8-12 ans)**
Enthousiastes mais parfois imprudents. Ils oublient l'environnement réel et peuvent percuter des obstacles. Une surveillance constante est nécessaire, mais leur capacité d'adaptation est impressionnante.

**Les adolescents et jeunes adultes**
Le public le plus simple à gérer. Familiers avec les interfaces numériques, ils comprennent intuitivement les contrôles. Leur principale demande : "Est-ce qu'on peut jouer à Beat Saber ?"

**Les adultes non technophiles**
Le public le plus intéressant à accompagner. Leur émerveillement devant des expériences que les jeunes trouvent banales rappelle la magie de cette technologie. Certains ont été émus aux larmes en "visitant" virtuellement des lieux de leur enfance via Street View.

**Les seniors**
Peu nombreux mais mémorables. Leur patience et leur curiosité contrastent avec la précipitation des plus jeunes. Une participante de 72 ans a passé 30 minutes à explorer Florence virtuellement, ville qu'elle rêvait de visiter mais ne pouvait plus atteindre physiquement.

### Le cas particulier du motion sickness

Le mal des transports virtuel est un phénomène réel qui touche environ 20% des utilisateurs, plus fréquemment les femmes et les personnes de plus de 50 ans. Nous avons appris à le détecter précocement :
- Pâleur soudaine
- Transpiration
- Réponses verbales plus lentes
- Mouvements hésitants

Au moindre signe, nous proposions une pause. L'immense majorité des cas se résout en quelques minutes à l'air libre. Aucun incident sérieux n'a été à déplorer sur l'ensemble du projet.

## Les sessions marquantes

### La journée portes ouvertes

Notre plus grande session : 8 heures consécutives, plus de 60 participants. Une organisation quasi industrielle avec des créneaux de 30 minutes, une file d'attente gérée par QR code, et trois postes VR en parallèle.

L'épuisement physique et mental à la fin de cette journée nous a fait réaliser l'ampleur du travail d'animation. Mais les retours des familles, les photos partagées sur les réseaux sociaux, et les remerciements des responsables de la communication de l'école ont confirmé la valeur de l'effort.

### La session avec le club senior

À la demande d'une association locale, nous avons organisé une session dédiée aux retraités du quartier. L'enjeu était différent : rythme plus lent, explications plus détaillées, choix d'expériences contemplatives plutôt que ludiques.

Cette session m'a particulièrement marqué. Voir des personnes de 70 ou 80 ans s'émerveiller devant une technologie qu'ils pensaient réservée aux jeunes a été profondément gratifiant. Plusieurs ont exprimé le souhait de faire découvrir cela à leurs petits-enfants.

## Les enseignements

### La vulgarisation technique est un métier

Expliquer la VR à un enfant de 10 ans et à un adulte de 50 ans demande des approches radicalement différentes. Les analogies pertinentes changent, le vocabulaire s'adapte, le rythme varie. J'ai appris à observer mon interlocuteur, à détecter ses zones de confort et d'inconfort, à ajuster mon discours en temps réel.

Cette compétence de vulgarisation est transférable à de nombreux contextes professionnels : présentations clients, documentation utilisateur, formations internes.

### L'importance des détails logistiques

Une session techniquement parfaite mais mal organisée échoue. Une session avec quelques bugs mais une logistique fluide réussit. J'ai appris à accorder autant d'attention aux aspects pratiques qu'aux aspects techniques :
- La signalétique pour trouver la salle
- La gestion des temps d'attente
- Le confort des participants (sièges, température, lumière)
- La communication avant et après l'événement

### Le facteur humain prime toujours

Ce qui a rendu ces sessions mémorables, ce n'est pas la résolution des casques ou la qualité graphique des jeux. C'est l'échange humain : les questions posées, les réactions partagées, les discussions qui se prolongent après le retrait du casque.

La technologie est un moyen, pas une fin. Cette leçon, évidente une fois formulée, est facile à oublier quand on est passionné par la technique.

## Impact et bilan

### Les chiffres

Sur une année scolaire :
- 12 sessions organisées
- Plus de 80 personnes initiées à la VR
- 3 événements spéciaux (portes ouvertes, club senior, séminaire pédagogique)
- 0 incident matériel ou humain sérieux

### Les retombées qualitatives

Plusieurs participants ont ensuite acquis leur propre casque VR. D'autres ont intégré la VR dans leurs projets académiques. Le club senior a sollicité une collaboration régulière pour l'année suivante.

Pour l'école, InVR a été un argument de communication valorisant l'engagement étudiant et l'ouverture vers le territoire.

### Ce que j'en retire personnellement

InVR m'a confirmé que la transmission de connaissances est aussi gratifiante que l'acquisition de compétences techniques. Voir quelqu'un comprendre, découvrir, s'émerveiller grâce à votre accompagnement procure une satisfaction difficilement égalable.

Ce projet m'a aussi appris à travailler en binôme de manière efficace. Avec Pierre, nous avons développé une complémentarité naturelle : il excellait dans la relation avec les participants, j'étais plus à l'aise sur les aspects techniques et logistiques.

## Conclusion

InVR restera pour moi un projet fondateur. Il m'a appris qu'un ingénieur ne doit pas seulement savoir coder ou concevoir des systèmes. Il doit aussi savoir communiquer, partager, et rendre la technologie accessible à tous.

La médiation scientifique et technique est un enjeu de société. Dans un monde où la technologie imprègne tous les aspects de la vie quotidienne, ceux qui savent l'expliquer, la démystifier, et la rendre humaine ont un rôle crucial à jouer.

C'est une leçon que j'applique encore aujourd'hui dans mon parcours professionnel. Chaque fois que je rédige une documentation, que je présente un projet, ou que je forme un collègue, je repense aux sessions InVR et à ce qu'elles m'ont enseigné sur l'art de la transmission.
`,cs=`---
title: "SUN Auto : Automatisation de la gestion des applications en fin de vie au Synchrotron SOLEIL"
slug: sun-auto-automatisation-synchrotron-soleil
published: true
excerpt: "Comment j'ai conçu et développé un système automatisé pour gérer le cycle de vie des applications internes, de la détection à l'archivage. Une mission d'alternance au coeur de l'infrastructure IT d'un grand instrument scientifique."
author: Alexy VANOT
publishedAt: 2025-06-10
tags:
  - projet-entreprise
  - automatisation
  - synchrotron-soleil
  - java
  - devops
logo: Java
readingTime: 18
color: "#FF8C00"
---

::toc

# SUN Auto : Automatisation de la gestion des applications en fin de vie au Synchrotron SOLEIL

Au Synchrotron SOLEIL, comme dans toute grande infrastructure de recherche scientifique, des dizaines d'applications internes coexistent, chacune répondant à un besoin spécifique. Avec le temps, certaines deviennent obsolètes, d'autres ne sont plus maintenues, d'autres encore continuent de tourner alors que personne ne les utilise. Le projet SUN Auto vise à automatiser la gestion de ces applications en fin de vie, un enjeu crucial pour la sécurité, la performance et la maintenabilité du système d'information.

## Contexte

### Le Synchrotron SOLEIL

SOLEIL (Source Optimisée de Lumière d'Énergie Intermédiaire du LURE) est un accélérateur de particules de troisième génération situé sur le plateau de Saclay. Il produit un rayonnement synchrotron, une lumière extrêmement intense utilisée par des chercheurs du monde entier pour des expériences dans des domaines variés : biologie structurale, science des matériaux, chimie, patrimoine culturel, environnement.

L'infrastructure informatique qui supporte cette activité scientifique est considérable :
- **Contrôle-commande** : pilotage des équipements de l'accélérateur et des lignes de lumière
- **Acquisition de données** : collecte et stockage des téraoctets de données expérimentales
- **Applications métier** : outils pour les scientifiques, les administratifs, la maintenance
- **Infrastructure** : réseau, sécurité, serveurs, stockage

C'est au sein du service informatique, plus précisément dans l'équipe en charge des applications métier, que j'ai effectué mon alternance.

### La problématique des applications "sunset"

Au fil des années, des applications ont été développées pour répondre à des besoins spécifiques : un outil de suivi pour une expérience particulière, un dashboard pour un chef de projet, une interface pour une procédure administrative temporaire.

Ces applications posent plusieurs problèmes quand elles ne sont plus activement utilisées ou maintenues :

**Consommation de ressources**
Chaque application tournant sur un serveur consomme de la mémoire, du CPU, et de l'espace disque. Même inactive, elle représente un coût.

**Risques de sécurité**
Une application non maintenue ne reçoit plus de correctifs de sécurité. Elle devient une porte d'entrée potentielle pour des attaquants.

**Complexité de maintenance**
Plus le parc applicatif est grand, plus la maintenance est complexe. Les dépendances entre applications créent des contraintes lors des mises à jour d'infrastructure.

**Dette technique**
Des applications utilisant des technologies obsolètes (Java 6, PHP 5, bases de données legacy) bloquent parfois la modernisation de l'ensemble.

**Perte de connaissance**
Quand le développeur d'origine a quitté l'organisation et qu'aucune documentation n'existe, l'application devient une boîte noire que personne n'ose toucher.

### Le processus manuel existant

Avant SUN Auto, l'identification des applications candidates au décommissionnement était un processus manuel et chronophage :

1. Un membre de l'équipe devait périodiquement passer en revue la liste des applications
2. Pour chaque application suspecte, il fallait contacter le responsable présumé
3. Des échanges de mails s'ensuivaient pour déterminer si l'application était encore utilisée
4. Si non, un processus d'archivage manuel était enclenché
5. L'application était finalement éteinte

Ce processus prenait plusieurs semaines par application et dépendait entièrement de la disponibilité et de la bonne volonté des interlocuteurs.

## Objectifs du projet SUN Auto

SUN Auto devait répondre à plusieurs besoins identifiés avec mon tuteur et l'équipe :

### Inventaire automatique
Découvrir et maintenir à jour la liste des applications déployées sur l'infrastructure, sans dépendre de déclarations manuelles.

### Détection d'inactivité
Identifier automatiquement les applications qui ne sont plus utilisées en se basant sur des métriques objectives (logs d'accès, connexions réseau, utilisation CPU).

### Workflow de notification
Alerter les responsables d'applications quand certains seuils sont atteints, avec un processus graduel (avertissement, rappel, escalade).

### Archivage automatisé
Procéder à l'archivage propre des applications décommissionnées : sauvegarde des données, documentation de l'état final, extinction contrôlée.

### Tableau de bord
Offrir une visibilité sur l'état du parc applicatif aux responsables informatiques.

## Architecture technique

### Stack technologique

Après analyse des contraintes et des compétences de l'équipe, j'ai retenu :

- **Backend** : Java 17 avec Spring Boot 3
- **Base de données** : PostgreSQL 15
- **Orchestration** : Spring Scheduler pour les tâches périodiques
- **API** : REST avec OpenAPI/Swagger pour la documentation
- **Frontend** : Dashboard développé par un collègue, consommant l'API

Ce choix s'alignait avec les standards de l'équipe et facilitait la maintenance future.

### Architecture modulaire

Le système est découpé en modules indépendants, chacun avec une responsabilité claire :

\`\`\`
sun-auto/
├── sun-auto-core/          # Modèles et interfaces communes
├── sun-auto-discovery/     # Module de découverte des applications
├── sun-auto-metrics/       # Collecte des métriques d'usage
├── sun-auto-notification/  # Système de notification
├── sun-auto-archive/       # Processus d'archivage
├── sun-auto-api/           # API REST
└── sun-auto-scheduler/     # Orchestration des tâches
\`\`\`

Cette modularité permet de faire évoluer ou remplacer un module sans impacter les autres.

### Module Discovery

Le module de découverte scanne l'infrastructure pour identifier les applications déployées. Plusieurs techniques sont combinées :

**Scan réseau**
Identification des ports ouverts sur les serveurs applicatifs. Chaque port correspond potentiellement à une application.

\`\`\`java
@Service
public class NetworkScanner {
    
    public List<DiscoveredEndpoint> scanServer(String host) {
        List<DiscoveredEndpoint> endpoints = new ArrayList<>();
        
        for (int port : commonAppPorts) {
            try (Socket socket = new Socket()) {
                socket.connect(new InetSocketAddress(host, port), TIMEOUT_MS);
                endpoints.add(new DiscoveredEndpoint(host, port, detectProtocol(host, port)));
            } catch (IOException e) {
                // Port fermé, pas d'application
            }
        }
        
        return endpoints;
    }
    
    private String detectProtocol(String host, int port) {
        // Tentative HTTP/HTTPS, détection de headers
        // Identification du framework (Spring, Express, etc.)
    }
}
\`\`\`

**Analyse des processus**
Via des agents SSH sur les serveurs, récupération de la liste des processus Java, Python, Node.js avec leurs arguments de lancement.

**Parsing des fichiers de configuration**
Lecture des fichiers nginx, Apache, systemd pour identifier les applications configurées.

**Intégration avec l'existant**
Synchronisation avec la CMDB (Configuration Management Database) existante pour enrichir les informations.

### Module Metrics

Une fois les applications identifiées, il faut mesurer leur activité. Le module Metrics collecte plusieurs types de données :

**Logs d'accès web**
Parsing des logs Apache/Nginx pour extraire le nombre de requêtes, les codes de retour, les adresses IP sources.

\`\`\`java
@Service
public class AccessLogAnalyzer {
    
    private static final Pattern LOG_PATTERN = Pattern.compile(
        "^(\\\\S+) - - \\\\[(.+?)\\\\] \\"(\\\\S+) (\\\\S+) (\\\\S+)\\" (\\\\d+) (\\\\d+)"
    );
    
    public AccessStats analyzeLog(Path logFile, LocalDate date) {
        try (Stream<String> lines = Files.lines(logFile)) {
            return lines
                .map(LOG_PATTERN::matcher)
                .filter(Matcher::matches)
                .filter(m -> parseDate(m.group(2)).equals(date))
                .collect(Collectors.teeing(
                    Collectors.counting(),
                    Collectors.groupingBy(m -> m.group(6), Collectors.counting()),
                    AccessStats::new
                ));
        }
    }
}
\`\`\`

**Métriques système**
Utilisation CPU, mémoire, I/O disque par processus, collectées via des commandes système (ps, top) ou des agents de monitoring existants.

**Connexions réseau**
Analyse des connexions actives (netstat, ss) pour identifier les clients connectés.

**Activité base de données**
Pour les applications avec base de données dédiée, requêtes sur les statistiques PostgreSQL (pg_stat_activity, pg_stat_user_tables).

Les métriques sont agrégées quotidiennement et stockées pour analyse de tendance.

### Module Notification

Le système de notification implémente un workflow graduel :

**Niveau 1 : Avertissement** (après 30 jours d'inactivité)
Email au responsable déclaré de l'application signalant la faible activité et demandant confirmation de l'utilité.

**Niveau 2 : Rappel** (après 60 jours)
Relance avec copie au responsable hiérarchique. Le ton devient plus pressant.

**Niveau 3 : Escalade** (après 90 jours)
Notification à la direction informatique. Proposition de date de décommissionnement.

**Niveau 4 : Décommissionnement programmé** (après 120 jours sans réponse)
Annonce de la date d'extinction définitive, 2 semaines à l'avance.

\`\`\`java
@Service
public class NotificationWorkflow {
    
    public void processApplication(Application app) {
        int inactiveDays = calculateInactiveDays(app);
        NotificationLevel currentLevel = app.getNotificationLevel();
        
        NotificationLevel requiredLevel = determineRequiredLevel(inactiveDays);
        
        if (requiredLevel.isHigherThan(currentLevel)) {
            sendNotification(app, requiredLevel);
            app.setNotificationLevel(requiredLevel);
            app.setLastNotificationDate(LocalDate.now());
            applicationRepository.save(app);
        }
    }
    
    private void sendNotification(Application app, NotificationLevel level) {
        NotificationTemplate template = templateRepository.findByLevel(level);
        List<String> recipients = determineRecipients(app, level);
        
        emailService.send(
            recipients,
            template.getSubject().replace("{APP_NAME}", app.getName()),
            template.getBody()
                .replace("{APP_NAME}", app.getName())
                .replace("{INACTIVE_DAYS}", String.valueOf(app.getInactiveDays()))
                .replace("{LAST_ACCESS}", app.getLastAccessDate().toString())
        );
        
        notificationHistoryRepository.save(new NotificationHistory(app, level, recipients));
    }
}
\`\`\`

### Module Archive

Quand une application est validée pour décommissionnement, le module Archive prend le relais :

**Sauvegarde des données**
- Export de la base de données si applicable
- Copie des fichiers de configuration
- Snapshot des logs récents
- Capture d'écran de l'interface si disponible

**Documentation automatique**
Génération d'un document récapitulatif : historique de l'application, technologies utilisées, responsables successifs, raison du décommissionnement.

**Extinction propre**
- Arrêt du service applicatif
- Désactivation des configurations (nginx, systemd)
- Suppression des entrées DNS internes
- Archivage des sauvegardes vers un stockage long terme

**Notification finale**
Email de confirmation à tous les intervenants avec lien vers l'archive.

## Défis rencontrés

### Hétérogénéité des environnements

Les applications ciblées utilisent des technologies extrêmement variées :
- Java 6 à Java 17
- Python 2 et Python 3
- PHP 5.x et 7.x
- Applications legacy en C
- Scripts Perl d'une autre époque

Le module Discovery devait être suffisamment générique pour tous les détecter, ce qui a nécessité de nombreuses heuristiques et cas particuliers.

### Faux positifs

Une application peut sembler inactive alors qu'elle est utilisée ponctuellement :
- Traitements batch mensuels (paie, reporting)
- Applications de gestion de crise (utilisées uniquement en cas d'incident)
- Outils saisonniers (campagnes d'expériences)

J'ai dû affiner les critères de détection et implémenter un système de "whitelist" pour les applications à usage ponctuel connu.

### Résistance au changement

Certains utilisateurs étaient réticents à voir leurs applications décommissionnées, même inutilisées. "On ne sait jamais, ça pourrait servir."

Le processus de notification graduel avec escalade hiérarchique a permis de débloquer la plupart des situations. La documentation automatique et l'archivage rassurent : les données ne sont pas perdues, juste archivées.

### Gestion des propriétaires fantômes

Pour certaines applications anciennes, le responsable déclaré avait quitté l'organisation depuis longtemps. Il a fallu implémenter une logique de recherche de propriétaire de substitution (chef de service, dernière personne ayant modifié l'application, etc.).

## Résultats

Après six mois de déploiement progressif :

### Métriques quantitatives

| Indicateur | Valeur |
|------------|--------|
| Applications inventoriées | 47 |
| Candidates au décommissionnement identifiées | 12 |
| Applications archivées proprement | 8 |
| Ressources serveur libérées | ~40 GB RAM, 500 GB disque |
| Temps de gestion réduit | -80% |

### Gains qualitatifs

**Visibilité accrue**
Pour la première fois, l'équipe dispose d'une vue complète et à jour du parc applicatif.

**Processus objectif**
Les décisions de décommissionnement sont basées sur des données, pas sur des impressions ou des rapports de force.

**Traçabilité**
Chaque notification, chaque décision est historisée et auditable.

**Réactivité**
Les applications problématiques sont identifiées en jours plutôt qu'en mois.

## Ce que j'ai appris

### L'importance de la communication

Un système automatisé qui impacte le travail des autres nécessite une communication soignée. J'ai passé presque autant de temps à rédiger les templates d'emails qu'à coder le module de notification.

Le ton, les informations fournies, les délais accordés : tout influe sur l'acceptation du système par les utilisateurs.

### La valeur des métriques

Sans données quantitatives, les discussions tournent en rond. "Je pense que cette application est encore utilisée" contre "Je pense que non" ne mène nulle part.

Avec des métriques objectives (0 requête depuis 90 jours), la discussion devient factuelle et les décisions plus rapides.

### Le pragmatisme technique

Face à l'hétérogénéité des systèmes, j'ai dû accepter que certaines solutions ne seraient pas élégantes. Un script bash ad hoc pour une application legacy particulière n'est pas glorieux, mais s'il fonctionne de manière fiable, c'est ce qui compte.

La perfection technique est un luxe quand on doit livrer dans les temps.

### La gestion du changement

Introduire un nouveau système dans une organisation établie demande de la diplomatie. Présenter SUN Auto comme un outil d'aide plutôt que comme un outil de contrôle a facilité son adoption.

## Conclusion

SUN Auto illustre comment l'automatisation peut apporter de la valeur dans des processus organisationnels, pas seulement techniques. Ce projet m'a donné une vision concrète de la gestion du cycle de vie des applications en entreprise, un sujet rarement abordé dans les cursus académiques mais crucial en production.

C'est une expérience que je valorise particulièrement car elle combine développement logiciel, compréhension de l'infrastructure, et gestion des aspects humains. Un système parfait techniquement mais rejeté par les utilisateurs est un échec. Un système imparfait mais adopté et utilisé est une réussite.

Cette leçon m'accompagne dans tous mes projets professionnels depuis.
`,ps=`---
title: "SvelteKit : Le framework full-stack pour Svelte"
slug: sveltekit-full-stack-framework
published: false
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
pinned: false
links:
  - label: Site officiel SvelteKit
    to: https://kit.svelte.dev/
    newTab: true
  - label: Documentation SvelteKit
    to: https://kit.svelte.dev/docs
    newTab: true
---

::toc

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
`,ds=`---
title: "TAP : Construire une plateforme de tests automatisés avec génération de rapports Allure"
slug: tap-plateforme-tests-automatises-allure
published: true
excerpt: "Conception et développement d'une plateforme de tests automatisés intégrant la génération de rapports Allure, le suivi des campagnes et le streaming temps réel des résultats. Un projet d'envergure au Synchrotron SOLEIL."
author: Alexy VANOT
publishedAt: 2025-05-28
tags:
  - projet-entreprise
  - tests-automatises
  - allure
  - synchrotron-soleil
  - java
  - qualite-logicielle
logo: Java
readingTime: 20
color: "#00B8A9"
pinned: true
---

::toc

# TAP : Construire une plateforme de tests automatisés avec génération de rapports Allure

La qualité logicielle passe par les tests. Cette affirmation, devenue un lieu commun, se heurte souvent à la réalité du terrain : tests éparpillés, résultats difficiles à consulter, absence de traçabilité, pratiques hétérogènes entre équipes. Au Synchrotron SOLEIL, j'ai eu l'opportunité de travailler sur TAP (Test Automation Platform), une plateforme visant à centraliser et professionnaliser les pratiques de test automatisé de l'organisation.

## Contexte et genèse du projet

### L'existant fragmenté

Avant TAP, les tests automatisés existaient au sein de plusieurs équipes, mais de manière dispersée et hétérogène :

**Côté développement**
- Tests unitaires JUnit ou pytest intégrés aux projets
- Exécution locale par les développeurs ou via Jenkins
- Résultats visibles uniquement dans les logs de CI

**Côté intégration**
- Scripts de test fonctionnels ad hoc
- Exécution manuelle ou semi-automatisée
- Résultats consignés dans des fichiers Excel ou des emails

**Côté métier**
- Tests de non-régression en partie manuels
- Documentation des cas de test dans Confluence
- Aucune traçabilité formelle de l'exécution

Cette fragmentation posait plusieurs problèmes :
- **Pas de vision globale** : impossible de répondre à "quel est le niveau de qualité de notre SI ?"
- **Duplication d'efforts** : chaque équipe réinventait ses outils
- **Perte de connaissance** : les résultats n'étaient pas historisés de manière exploitable
- **Faible adoption** : la complexité décourageait les équipes moins techniques

### L'ambition de TAP

TAP devait fournir une plateforme unique répondant aux besoins de toutes les équipes :

**Pour les développeurs**
- Intégration facile avec les frameworks existants (JUnit, pytest, etc.)
- Exécution automatisée dans la CI
- Rapports détaillés accessibles sans effort

**Pour les testeurs et intégrateurs**
- Interface pour configurer et lancer des campagnes de tests
- Visualisation temps réel de l'exécution
- Historique et tendances

**Pour les managers**
- Tableaux de bord synthétiques
- Indicateurs de qualité objectifs
- Comparaison entre projets et équipes

## Architecture de TAP

### Vue d'ensemble

TAP est architecturée en plusieurs composants :

\`\`\`
┌─────────────────────────────────────────────────────────────┐
│                     TAP Frontend                             │
│   (Configuration, lancement, monitoring, consultation)       │
└──────────────────────────┬──────────────────────────────────┘
                           │ REST / WebSocket
┌──────────────────────────▼──────────────────────────────────┐
│                     TAP Backend                              │
│   (Orchestration, gestion des campagnes, API)               │
└────────┬─────────────────┬──────────────────┬───────────────┘
         │                 │                  │
         ▼                 ▼                  ▼
┌─────────────┐   ┌─────────────┐   ┌─────────────────────────┐
│ Test Runners│   │ PostgreSQL  │   │ Allure Report Server    │
│ (Agents)    │   │ (Metadata)  │   │ (Rapports HTML)         │
└─────────────┘   └─────────────┘   └─────────────────────────┘
\`\`\`

### Choix technologiques

**Backend : Spring Boot 3 + Java 17**
Le choix naturel compte tenu de l'écosystème SOLEIL et des compétences de l'équipe. Spring Boot offre un excellent support pour les API REST, les WebSockets, et l'intégration avec divers systèmes.

**Base de données : PostgreSQL**
Stockage des métadonnées des campagnes, historique des exécutions, configuration des tests.

**Rapports : Allure Framework**
Après évaluation de plusieurs solutions (Allure, ExtentReports, ReportPortal), Allure s'est imposé :
- Rapports visuels et interactifs
- Support natif de nombreux frameworks (JUnit, pytest, TestNG, Cucumber)
- Catégorisation riche (features, stories, epics)
- Historique et tendances intégrés
- Open source et communauté active

**Communication temps réel : WebSocket (STOMP)**
Pour le streaming des résultats pendant l'exécution des tests.

### Le backend en détail

#### Modèle de données

\`\`\`java
@Entity
public class Campaign {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;
    
    private String name;
    private String description;
    
    @OneToMany(mappedBy = "campaign", cascade = CascadeType.ALL)
    private List<TestSuite> testSuites;
    
    @Enumerated(EnumType.STRING)
    private CampaignStatus status;
    
    private LocalDateTime createdAt;
    private LocalDateTime startedAt;
    private LocalDateTime completedAt;
    
    @ManyToOne
    private User createdBy;
    
    private String allureReportUrl;
}

@Entity
public class TestSuite {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;
    
    private String name;
    private String path;
    
    @Enumerated(EnumType.STRING)
    private TestFramework framework;
    
    @ManyToOne
    private Campaign campaign;
    
    @OneToMany(mappedBy = "suite")
    private List<TestResult> results;
}

@Entity
public class TestResult {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;
    
    private String testName;
    
    @Enumerated(EnumType.STRING)
    private TestStatus status;
    
    private Long durationMs;
    
    @Column(columnDefinition = "TEXT")
    private String errorMessage;
    
    @Column(columnDefinition = "TEXT")
    private String stackTrace;
    
    private LocalDateTime executedAt;
    
    @ManyToOne
    private TestSuite suite;
}
\`\`\`

#### Orchestration des tests

Le service d'orchestration coordonne l'exécution des campagnes :

\`\`\`java
@Service
@Transactional
public class CampaignOrchestrator {
    
    private final CampaignRepository campaignRepository;
    private final TestRunnerRegistry runnerRegistry;
    private final AllureReportGenerator reportGenerator;
    private final WebSocketNotifier notifier;
    
    @Async
    public void executeCampaign(UUID campaignId) {
        Campaign campaign = campaignRepository.findById(campaignId)
            .orElseThrow(() -> new CampaignNotFoundException(campaignId));
        
        campaign.setStatus(CampaignStatus.RUNNING);
        campaign.setStartedAt(LocalDateTime.now());
        campaignRepository.save(campaign);
        
        notifier.notifyCampaignStarted(campaign);
        
        Path resultsDir = createResultsDirectory(campaignId);
        
        try {
            for (TestSuite suite : campaign.getTestSuites()) {
                executeSuite(suite, resultsDir);
            }
            
            String reportUrl = reportGenerator.generate(resultsDir, campaignId);
            campaign.setAllureReportUrl(reportUrl);
            campaign.setStatus(CampaignStatus.COMPLETED);
            
        } catch (Exception e) {
            campaign.setStatus(CampaignStatus.FAILED);
            log.error("Campaign {} failed", campaignId, e);
        } finally {
            campaign.setCompletedAt(LocalDateTime.now());
            campaignRepository.save(campaign);
            notifier.notifyCampaignCompleted(campaign);
        }
    }
    
    private void executeSuite(TestSuite suite, Path resultsDir) {
        TestRunner runner = runnerRegistry.getRunner(suite.getFramework());
        
        runner.execute(suite, new TestResultCallback() {
            @Override
            public void onTestCompleted(TestResult result) {
                result.setSuite(suite);
                suite.getResults().add(result);
                
                // Notification temps réel
                notifier.notifyTestCompleted(suite.getCampaign().getId(), result);
            }
        }, resultsDir);
    }
}
\`\`\`

#### Streaming temps réel avec WebSocket

L'une des fonctionnalités les plus appréciées de TAP est la possibilité de voir les tests s'exécuter en direct. Chaque test qui passe, échoue ou est ignoré est immédiatement remonté à l'interface.

\`\`\`java
@Controller
public class CampaignWebSocketController {
    
    private final SimpMessagingTemplate messagingTemplate;
    
    public void notifyTestCompleted(UUID campaignId, TestResult result) {
        TestResultDTO dto = TestResultDTO.from(result);
        messagingTemplate.convertAndSend(
            "/topic/campaign/" + campaignId + "/results",
            dto
        );
    }
    
    public void notifyCampaignCompleted(Campaign campaign) {
        CampaignSummaryDTO summary = CampaignSummaryDTO.from(campaign);
        messagingTemplate.convertAndSend(
            "/topic/campaign/" + campaign.getId() + "/completed",
            summary
        );
    }
}
\`\`\`

Côté client, la connexion WebSocket permet une mise à jour instantanée de l'interface :

\`\`\`javascript
const socket = new SockJS('/ws');
const stompClient = Stomp.over(socket);

stompClient.connect({}, () => {
    stompClient.subscribe(\`/topic/campaign/\${campaignId}/results\`, (message) => {
        const result = JSON.parse(message.body);
        updateTestResultUI(result);
    });
    
    stompClient.subscribe(\`/topic/campaign/\${campaignId}/completed\`, (message) => {
        const summary = JSON.parse(message.body);
        showCampaignSummary(summary);
    });
});
\`\`\`

### Génération des rapports Allure

Allure fonctionne en deux phases :
1. **Pendant l'exécution** : les frameworks de test génèrent des fichiers JSON décrivant chaque test
2. **Après l'exécution** : le CLI Allure agrège ces fichiers et génère un rapport HTML statique

\`\`\`java
@Service
public class AllureReportGenerator {
    
    private final AllureConfig config;
    
    public String generate(Path resultsDir, UUID campaignId) throws IOException, InterruptedException {
        Path reportDir = config.getReportBasePath().resolve(campaignId.toString());
        
        ProcessBuilder pb = new ProcessBuilder(
            config.getAllureCliPath(),
            "generate",
            resultsDir.toString(),
            "-o", reportDir.toString(),
            "--clean"
        );
        
        pb.inheritIO();
        Process process = pb.start();
        int exitCode = process.waitFor();
        
        if (exitCode != 0) {
            throw new ReportGenerationException("Allure CLI failed with code " + exitCode);
        }
        
        return config.getReportBaseUrl() + "/" + campaignId;
    }
}
\`\`\`

Les rapports générés sont servis par un serveur web statique (nginx) et accessibles via une URL dédiée.

### Fonctionnalités du rapport Allure

Les rapports Allure offrent une richesse d'informations :

**Vue d'ensemble**
- Taux de succès global
- Répartition par statut (passed, failed, broken, skipped)
- Durée totale et par suite

**Détail par test**
- Étapes d'exécution (si le code utilise les annotations Allure)
- Screenshots en cas d'échec (pour les tests UI)
- Logs et messages d'erreur
- Stack traces complètes

**Catégorisation**
- Par features et stories (BDD)
- Par sévérité (critical, major, minor, trivial)
- Par package ou classe

**Tendances**
- Comparaison avec les exécutions précédentes
- Évolution du nombre de tests
- Taux de réussite dans le temps

## Défis techniques rencontrés

### Gestion de la concurrence

Plusieurs utilisateurs peuvent lancer des campagnes simultanément. Le système doit gérer cette concurrence sans dégradation de performance ni conflits.

**Solution implémentée :**
- Pool de threads configurables pour l'exécution parallèle
- Queue avec priorités pour les campagnes en attente
- Isolation des répertoires de résultats par campagne
- Verrous en base de données pour les ressources partagées

\`\`\`java
@Configuration
public class AsyncConfig {
    
    @Bean
    public TaskExecutor campaignExecutor() {
        ThreadPoolTaskExecutor executor = new ThreadPoolTaskExecutor();
        executor.setCorePoolSize(4);
        executor.setMaxPoolSize(8);
        executor.setQueueCapacity(100);
        executor.setThreadNamePrefix("campaign-");
        executor.setRejectedExecutionHandler(new ThreadPoolExecutor.CallerRunsPolicy());
        return executor;
    }
}
\`\`\`

### Isolation des environnements de test

Les tests ne doivent pas interférer entre eux. Deux campagnes exécutant des tests sur la même application pourraient produire des résultats faussés.

**Approche retenue :**
- Variables d'environnement spécifiques par campagne
- Préfixage des bases de données de test
- Ports dynamiques pour les services mockés
- Documentation des prérequis d'isolation pour les rédacteurs de tests

### Performance des WebSockets sous charge

Avec de nombreux tests en parallèle, le volume de messages WebSocket peut devenir problématique.

**Optimisations :**
- Batching des messages (envoi groupé toutes les 500ms)
- Compression des payloads JSON
- Utilisation de Server-Sent Events (SSE) pour les cas simples
- Limitation du nombre de connexions simultanées par utilisateur

\`\`\`java
@Component
public class BatchingNotifier {
    
    private final Map<UUID, List<TestResultDTO>> pendingNotifications = new ConcurrentHashMap<>();
    private final SimpMessagingTemplate messagingTemplate;
    
    @Scheduled(fixedRate = 500)
    public void flushNotifications() {
        pendingNotifications.forEach((campaignId, results) -> {
            if (!results.isEmpty()) {
                List<TestResultDTO> batch;
                synchronized (results) {
                    batch = new ArrayList<>(results);
                    results.clear();
                }
                messagingTemplate.convertAndSend(
                    "/topic/campaign/" + campaignId + "/results-batch",
                    batch
                );
            }
        });
    }
    
    public void queueNotification(UUID campaignId, TestResultDTO result) {
        pendingNotifications
            .computeIfAbsent(campaignId, k -> Collections.synchronizedList(new ArrayList<>()))
            .add(result);
    }
}
\`\`\`

### Intégration avec les frameworks de test existants

TAP devait s'intégrer avec les frameworks déjà utilisés sans modification majeure du code de test existant.

**Pour JUnit 5 :**
Ajout d'une dépendance \`allure-junit5\` et configuration du listener dans le \`pom.xml\` ou \`build.gradle\`.

**Pour pytest :**
Installation de \`allure-pytest\` et activation via \`--alluredir\`.

**Pour les tests legacy :**
Développement d'adaptateurs custom convertissant les sorties vers le format Allure.

## Impact sur l'organisation

### Adoption par les équipes

Le déploiement de TAP a été progressif, équipe par équipe, avec accompagnement :

**Phase pilote (2 mois)**
Une équipe volontaire a utilisé TAP pour ses tests d'intégration. Retours d'expérience, ajustements de l'interface, corrections de bugs.

**Déploiement élargi (3 mois)**
Extension à trois autres équipes. Formation des testeurs et développeurs. Documentation et tutoriels.

**Adoption généralisée**
TAP devient l'outil de référence pour les tests automatisés. Intégration dans le processus de release.

### Changement culturel

Au-delà de l'outil, TAP a contribué à faire évoluer les pratiques :

**Visibilité accrue**
Les tableaux de bord rendent la qualité visible à tous, y compris aux non-techniciens. Cela crée une pression positive pour maintenir de bons taux de réussite.

**Gamification informelle**
Les équipes comparent leurs scores. "L'équipe X a 98% de succès, on peut faire mieux." Cette compétition amicale stimule l'attention portée aux tests.

**Documentation implicite**
Les rapports Allure, avec leurs étapes détaillées, constituent une forme de documentation du comportement attendu des applications.

**Réduction des régressions**
La détection précoce des échecs de tests permet d'identifier les régressions avant la mise en production.

## Ce que j'ai appris

### L'UX des outils internes compte

Un outil interne mal conçu ne sera pas utilisé, même s'il est obligatoire. Les utilisateurs trouveront des contournements.

J'ai investi du temps sur l'interface pour la rendre intuitive et agréable. Le streaming temps réel, par exemple, n'était pas strictement nécessaire d'un point de vue fonctionnel. Mais il a fortement amélioré l'adoption : les utilisateurs aiment voir leurs tests défiler en direct.

### Les tests de tests

Tester une plateforme de tests est méta mais nécessaire. J'ai écrit des tests d'intégration pour valider le bon fonctionnement de TAP elle-même :
- Création et exécution de campagnes
- Génération correcte des rapports
- Notifications WebSocket reçues
- Gestion des erreurs et cas limites

### L'importance des standards

Adopter Allure plutôt que créer un format propriétaire a facilité l'intégration avec les outils existants et réduit la courbe d'apprentissage pour les utilisateurs. Les standards ouverts ont une valeur qui dépasse leur qualité technique intrinsèque.

### La valeur du feedback utilisateur

Les meilleures fonctionnalités de TAP sont venues des retours utilisateurs, pas de mes spécifications initiales. Le batching des notifications, les filtres avancés sur l'historique, l'export des résultats : autant d'ajouts suggérés par les utilisateurs en situation réelle.

## Conclusion

TAP représente le projet le plus complet de mon alternance. Il combine développement backend avec Spring Boot, communication temps réel avec WebSockets, intégration avec des outils tiers (Allure), et une attention particulière à l'expérience utilisateur.

Voir les équipes adopter l'outil et améliorer leurs pratiques de test est une satisfaction professionnelle majeure. Quand un développeur me dit "grâce à TAP, on a détecté une régression avant la mise en prod", je sais que le projet a de la valeur.

Ce projet m'a confirmé mon intérêt pour les outils d'ingénierie logicielle. Construire des outils qui rendent d'autres développeurs plus efficaces est une forme de démultiplication d'impact particulièrement gratifiante.
`,ms=`---
title: "Ce que les projets de groupe m'ont appris sur le travail en équipe"
slug: travail-equipe-projets-scolaires
published: true
excerpt: "Réflexions sur les dynamiques d'équipe, la gestion des conflits et la répartition des tâches à travers plusieurs années de projets scolaires. Des leçons applicables en entreprise."
author: Alexy VANOT
publishedAt: 2025-04-10
tags:
  - projet-humain
  - travail-equipe
  - soft-skills
  - gestion-projet
logo: https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg
readingTime: 15
color: "#0052CC"
---

::toc

# Ce que les projets de groupe m'ont appris sur le travail en équipe

Au cours de mes études en informatique, j'ai participé à des dizaines de projets de groupe. Des projets de quelques semaines à d'autres s'étalant sur un semestre entier. Des équipes de deux à des groupes de huit personnes. Des réussites éclatantes et des échecs instructifs.

Avec le recul, je réalise que ces expériences m'ont autant appris sur le travail en équipe que mes cours techniques. Les compétences relationnelles, organisationnelles et communicationnelles acquises sont celles que j'utilise quotidiennement en entreprise, parfois plus que mes connaissances algorithmiques.

## Le mythe de l'équipe parfaite

### L'illusion de l'harmonie

Pendant longtemps, j'ai pensé qu'une bonne équipe était une équipe où tout le monde s'entend bien, partage la même vision, et travaille harmonieusement vers un objectif commun. Cette vision idéaliste s'est heurtée à la réalité dès mes premiers projets.

Les personnalités différentes créent des frictions. Les approches techniques divergentes génèrent des débats. Les niveaux d'implication inégaux provoquent des frustrations. C'est normal. C'est même sain.

### Le conflit constructif

Les meilleures équipes ne sont pas celles sans conflits, mais celles qui savent les gérer de manière constructive. Un désaccord technique sur l'architecture d'un projet, exprimé respectueusement et argumenté, pousse chacun à justifier ses choix et souvent à trouver une solution meilleure que les propositions initiales.

J'ai vu des projets échouer non pas à cause de conflits, mais à cause de leur absence. Quand personne n'ose contredire une mauvaise décision par peur de créer des tensions, l'équipe fonce collectivement dans le mur.

### Les rôles naturels

Dans toute équipe, des rôles informels émergent naturellement :
- Le leader technique qui tranche les débats d'architecture
- L'organisateur qui planifie et suit l'avancement
- Le médiateur qui désamorce les tensions
- Le perfectionniste qui relève les détails que les autres ignorent
- Le pragmatique qui rappelle les contraintes de temps

Reconnaître ces rôles et les valoriser plutôt que les combattre améliore significativement la dynamique de groupe.

## La répartition des tâches

### Le piège de la spécialisation excessive

La répartition par couche technique est tentante : "Toi tu fais le front, moi le back, lui la base de données, et on se retrouve à la fin." Cette approche semble efficace sur le papier. En pratique, elle pose de nombreux problèmes :

**Personne ne comprend l'ensemble du projet**
Chaque membre ne connaît que sa partie. Les décisions d'interface entre composants deviennent des négociations diplomatiques plutôt que des discussions techniques informées.

**L'intégration devient un cauchemar**
Quand les différentes parties se rencontrent enfin, les incompatibilités apparaissent. Le format de données attendu par le front ne correspond pas à ce que renvoie le back. Les migrations de base de données ne fonctionnent pas avec le code de l'application.

**La vulnérabilité aux absences**
Si le responsable du back est malade pendant une semaine, son travail est bloqué. Personne ne peut prendre le relais efficacement.

**L'apprentissage limité**
Chacun reste dans sa zone de confort. Les projets scolaires sont censés être des occasions d'apprentissage. Se cantonner à ce qu'on maîtrise déjà est une opportunité gâchée.

### L'approche par fonctionnalités

J'ai appris à préférer une répartition par fonctionnalités plutôt que par couches techniques. Chaque membre réalise une fonctionnalité complète, de l'interface utilisateur à la persistance en base de données.

Cette approche demande plus de polyvalence mais produit :
- Une équipe plus résiliente aux absences
- Une meilleure compréhension collective du projet
- Des développeurs plus complets techniquement
- Des intégrations plus fluides (moins d'interfaces à coordonner)

### Le dimensionnement des tâches

Une tâche bien dimensionnée respecte plusieurs critères :
- Réalisable en quelques jours maximum (pas plusieurs semaines)
- Testable indépendamment
- Livrable de manière autonome
- Clairement définie avec des critères d'acceptation

Des tâches trop grosses deviennent des tunnels où l'avancement est invisible. Des tâches trop petites génèrent une surcharge de coordination. Trouver le bon granulome demande de l'expérience et s'affine au fil des projets.

## La communication

### Les réunions : nécessaires mais coûteuses

Trop de réunions tue la productivité. Le temps passé en réunion est du temps non passé à coder. Mais pas assez de communication crée des silos, des malentendus, des efforts dupliqués.

J'ai trouvé un équilibre avec un format en trois niveaux :

**Le point quotidien (stand-up)**
Maximum 10-15 minutes, idéalement debout pour décourager les digressions. Chacun répond à trois questions :
- Qu'ai-je fait hier ?
- Que vais-je faire aujourd'hui ?
- Ai-je des blocages ?

Ce format simple permet de détecter rapidement les problèmes et d'ajuster les priorités.

**La réunion hebdomadaire**
30 minutes à 1 heure pour les décisions importantes : choix techniques structurants, arbitrages de scope, planification de la semaine suivante. Cette réunion nécessite une préparation et un ordre du jour.

**La communication asynchrone**
Pour tout le reste : messages instantanés, documentation partagée, commentaires dans les pull requests. Cette communication ne bloque personne et laisse une trace écrite.

### Documenter les décisions

Combien de fois ai-je assisté à des débats sur des sujets déjà tranchés, simplement parce que personne ne se souvenait de la décision prise ? La mémoire collective est courte et sélective.

J'ai pris l'habitude de documenter systématiquement :
- Les décisions d'architecture avec leur justification
- Les choix technologiques avec les alternatives considérées
- Les conventions d'équipe (style de code, processus de review, etc.)

Un simple fichier \`DECISIONS.md\` à la racine du projet suffit. L'important est que l'information soit accessible et maintenue à jour.

### La communication non violente

Un feedback mal formulé peut blesser et créer des blocages durables. J'ai appris à utiliser un format structuré :

1. **Observation** : faits objectifs, sans jugement
2. **Sentiment** : impact émotionnel ressenti
3. **Besoin** : ce qui serait nécessaire pour améliorer la situation
4. **Demande** : action concrète proposée

Exemple : "J'ai remarqué que tes commits de la semaine dernière n'ont pas de tests (observation). Je suis inquiet car j'ai peur que des bugs passent en production (sentiment). J'aurais besoin que le code soit couvert pour être serein (besoin). Pourrais-tu ajouter des tests unitaires sur tes prochaines modifications ? (demande)"

Ce format évite les attaques personnelles et favorise le dialogue constructif.

## Gérer les inégalités d'implication

### Le constat universel

C'est le sujet qui fâche, celui dont on parle entre deux portes mais rarement en réunion. Dans presque tous les projets de groupe, certains travaillent plus que d'autres. Les raisons sont multiples :
- Intérêt inégal pour le sujet
- Charge de travail variable selon les matières
- Problèmes personnels non partagés
- Différences de niveau technique
- Procrastination ou mauvaise organisation

Ignorer ce problème ne le fait pas disparaître. Il grandit jusqu'à créer des ressentiments durables.

### Ce qui ne fonctionne pas

**L'évitement**
Espérer que le problème se résolve seul. Spoiler : il ne se résout jamais seul.

**La compensation silencieuse**
Faire le travail des autres pour "sauver" le projet. On se retrouve épuisé et amer, tandis que l'autre n'a même pas conscience du problème.

**La plainte passive**
Se plaindre à tout le monde sauf à la personne concernée. Le message ne passe pas et l'ambiance se dégrade.

**L'escalade prématurée**
Aller voir l'encadrant avant d'avoir tenté de résoudre le problème en interne. Perçu comme de la délation, cela casse la confiance au sein de l'équipe.

### Ce qui fonctionne mieux

**Aborder le sujet directement mais sans agressivité**
"J'ai remarqué que tu n'as pas poussé de code depuis deux semaines. Est-ce que tout va bien ? Y a-t-il quelque chose qui te bloque ?"

Cette approche ouverte laisse la porte à des explications (problèmes personnels, surcharge dans une autre matière, incompréhension technique) plutôt que de présupposer de la mauvaise volonté.

**Comprendre avant de juger**
Parfois, le "passager clandestin" perçu est en réalité quelqu'un qui n'ose pas demander de l'aide, qui ne comprend pas sa tâche, ou qui vit une situation personnelle difficile.

**Réajuster la répartition**
Si quelqu'un ne peut objectivement pas contribuer autant que les autres (job étudiant prenant, problème de santé), mieux vaut l'accepter et adapter que de maintenir une fiction d'égalité.

**Documenter les contributions**
Un historique Git ne ment pas. Sans être dans une logique punitive, pouvoir montrer objectivement qui a fait quoi permet d'avoir des conversations factuelles plutôt qu'émotionnelles.

**En dernier recours, escalader**
Si toutes les tentatives internes ont échoué, impliquer l'encadrement devient légitime. Mais en arrivant avec un historique des tentatives de résolution, pas avec une simple plainte.

## Les outils de collaboration

### Git : non négociable

À ce stade de mes études, l'utilisation de Git était acquise. Mais les conventions d'utilisation variaient énormément d'une équipe à l'autre.

**Les bonnes pratiques qui font la différence :**
- Commits atomiques avec messages explicites
- Branches de feature plutôt que commits directs sur main
- Pull requests avec revue de code avant merge
- Protection de la branche principale

Ces pratiques semblent lourdes au début mais préviennent de nombreux problèmes : code cassé en production, modifications perdues, conflits de merge ingérables.

### Gestion de projet : Trello, Jira, ou simple tableau

L'outil importe peu. Ce qui compte, c'est d'avoir une visibilité sur :
- Les tâches à faire, en cours, et terminées
- Qui travaille sur quoi
- Les blocages identifiés
- L'avancement global du projet

Un tableau Kanban simple (To Do / In Progress / Done) suffit pour la plupart des projets scolaires. Jira est puissant mais son overhead n'est justifié que pour des projets complexes et longs.

**Le piège du tableau abandonné**
L'outil le plus sophistiqué ne sert à rien s'il n'est pas maintenu. Mieux vaut un tableau simple actualisé quotidiennement qu'un Jira détaillé que personne ne consulte.

### Communication : Discord, Slack, ou équivalent

La messagerie instantanée est devenue incontournable. Quelques conventions utiles :
- Canaux thématiques (général, technique, off-topic)
- Utilisation des threads pour les discussions longues
- Mentions @everyone utilisées avec parcimonie
- Réponses attendues sous 24h (pas besoin d'être instantané)

### Documentation : Notion, Confluence, ou simple Markdown

Un wiki d'équipe pour centraliser :
- La documentation technique
- Les décisions d'architecture
- Les procédures (comment installer le projet, comment déployer, etc.)
- Les comptes-rendus de réunion

J'ai une préférence pour les fichiers Markdown directement dans le repo Git : ils sont versionnés avec le code et ne dépendent pas d'un outil externe.

## Les moments critiques

### Le démarrage de projet

Les premiers jours sont déterminants. C'est le moment où :
- La dynamique d'équipe s'établit
- Les méthodes de travail se négocient
- Les non-dits s'installent (ou pas)

Investir du temps dans une réunion de lancement structurée paie sur toute la durée du projet. Sujets à aborder :
- Objectifs et critères de succès
- Répartition des rôles
- Outils utilisés et conventions
- Fréquence et format des points d'équipe
- Gestion des conflits potentiels

### La phase de rush final

À l'approche de la deadline, le stress monte. Les bonnes intentions s'effondrent. Les raccourcis techniques se multiplient. Les tensions interpersonnelles ressurgissent.

**Stratégies de survie :**
- Prioriser impitoyablement (qu'est-ce qui est vraiment nécessaire pour la livraison ?)
- Accepter de livrer imparfait plutôt que de ne pas livrer
- Maintenir la communication malgré la pression
- Éviter les all-nighters qui détruisent la qualité et le moral

### L'après-projet

Une fois le projet rendu, la tentation est de passer immédiatement à autre chose. C'est une erreur. Un temps de rétrospective permet de :
- Célébrer les réussites
- Identifier ce qui a fonctionné pour le reproduire
- Analyser les échecs pour les éviter à l'avenir
- Clore proprement les éventuelles tensions

Cette pratique de rétrospective, issue des méthodes agiles, est l'un des meilleurs outils d'amélioration continue que je connaisse.

## Ce que je retiens

### Les soft skills sont des hard skills

Le travail en équipe est une compétence qui s'apprend et se perfectionne. Elle n'est pas innée. Les projets scolaires, malgré leurs imperfections et leurs frustrations, sont un terrain d'entraînement précieux.

Les compétences acquises (communication, gestion de conflits, organisation, leadership) sont transférables à n'importe quel contexte professionnel. Elles sont peut-être plus importantes que les compétences techniques pures pour l'évolution de carrière.

### L'humilité face à la complexité humaine

Chaque nouvelle équipe est une aventure. Les dynamiques qui fonctionnent avec certaines personnes échouent avec d'autres. Les méthodes qui marchent pour un projet s'avèrent inadaptées au suivant.

Cette variabilité oblige à rester humble et adaptatif. Ce qui compte n'est pas d'appliquer une méthode parfaite, mais de savoir ajuster son approche aux circonstances.

### La valeur des échecs

Mes projets de groupe les plus formatifs n'ont pas été les plus réussis académiquement. Ce sont ceux où des difficultés majeures (conflit d'équipe, départ d'un membre, erreur technique majeure) ont forcé l'adaptation et la remise en question.

L'échec, quand il est analysé honnêtement, enseigne plus que le succès facile.

## Conclusion

Chaque projet de groupe m'a appris quelque chose. Les projets réussis m'ont montré ce qui fonctionne. Les projets difficiles m'ont appris ce qu'il faut éviter. Les deux types d'expériences ont leur valeur.

Aujourd'hui, quand je rejoins une nouvelle équipe professionnelle, j'applique ces leçons accumulées :
- Communiquer clairement et régulièrement
- Documenter les décisions importantes
- Aborder les problèmes tôt plutôt qu'espérer qu'ils disparaissent
- Accepter que le travail en équipe demande des compromis
- Valoriser les différences de perspectives plutôt que les subir

Le travail en équipe n'est jamais parfait. Mais avec de la méthode, de la bonne volonté, et un peu d'expérience, il peut devenir une force plutôt qu'une contrainte.
`,gs=`---
title: "Meilleures pratiques TypeScript en 2024"
slug: typescript-best-practices
published: false
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

::toc

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
`,fs=`---
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
`,vs=`---
name: Flutter Movie App
slug: flutter-movie-manip
category: technique
type: Mobile Development
color: "#02569B"
published: true
logo: https://raw.githubusercontent.com/alexyvanot/flutter_movie_manip/main/assets/images/HomePage.png
period:
  from: 2024-10-18
  to: 2024-10-18
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
`,hs=`---
name: Flutter Todo List
slug: flutter-todo-list
category: technique
type: Mobile Development
color: "#02569B"
published: true
logo: https://raw.githubusercontent.com/alexyvanot/flutter_todo_list/main/assets/images/README/appshow.png
period:
  from: 2024-10-04
  to: 2024-10-17
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
`,bs=`---
name: Foot AI
slug: foot-ai
category: technique
type: Computer Vision & Machine Learning
color: "#4CAF50"
published: true
logo: https://raw.githubusercontent.com/alexyvanot/foot-ai/main/tactical%20map.jpg
period:
  from: 2025-07-12
  to: 2025-07-12
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
`,ys=`---
name: HR Data Analytics
slug: hr-data-analytics
category: technique
type: Data Science & Machine Learning
color: "#E91E63"
published: true
logo: https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg
period:
  from: 2025-12-04
  to: 2025-12-04
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
`,xs=`---
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
`,qs=`---
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
`,_s=`---
name: Quiz AI
slug: quiz-ai
category: technique
type: AI & Web Application
color: "#7C3AED"
published: true
pinned: true
logo: https://raw.githubusercontent.com/alexyvanot/quiz-ai/main/src/lib/assets/demo_init.png
period:
  from: 2025-09-26
  to: 2025-09-29
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
`,Ss=`---
name: Snake Game AI
slug: snake-game-ai
published: true
pinned: true
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
`,As=`---
name: Squat Counter IA
slug: squat-counter-ia
category: technique
type: Computer Vision & Pose Estimation
color: "#FF5722"
published: true
logo: https://raw.githubusercontent.com/alexyvanot/squat-counter-ia/main/resources/images/demo.png
period:
  from: 2025-06-27
  to: 2025-06-27
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
`,Cs=`---
name: SUN Auto - Gestion automatisée du cycle de vie applicatif
slug: sun-auto
category: technique
type: DevOps & Automation
color: "#1E3A5F"
published: true
pinned: true
logo: https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg
period:
  from: 2024-01-01
  to: 2024-12-01
skills:
  - java
  - spring
  - postgresql
  - gitlab
  - docker
team:
  - name: Alexy VANOT
    role: Développeur principal
---

# SUN Auto - SOLEIL Unified Notification Auto

**SUN Auto** est un système développé durant mon alternance au **Synchrotron SOLEIL** pour automatiser la gestion du cycle de vie des applications. Le projet surveille l'ensemble du parc applicatif et orchestre le traitement des applications en fin de vie.

# 🎯 Problématique adressée

Le Synchrotron SOLEIL maintient des centaines d'applications internes. Avec le temps, certaines deviennent :
- **Obsolètes** : technologies ou dépendances plus supportées
- **Non maintenues** : plus de développeur référent
- **Vulnérables** : failles de sécurité non corrigées

Sans processus automatisé, ces applications "zombies" s'accumulent, consommant des ressources et représentant des risques de sécurité.

# 🏗️ Architecture du système

SUN Auto est structuré en modules spécialisés :

## Module Discovery
- Scan automatique de l'infrastructure (GitLab, Jenkins, serveurs)
- Inventaire dynamique des applications et leurs métadonnées
- Détection des liens entre composants

## Module Metrics
- Collecte des indicateurs de santé de chaque application
- Analyse des dépendances et leur état (EOL, vulnérabilités)
- Calcul d'un score de santé global

## Module Notification
- Système d'alerte multi-niveau (développeur → responsable → direction)
- Escalade automatique selon l'urgence et le temps écoulé
- Templates d'emails personnalisés par contexte

## Module Archive
- Workflow d'archivage pour les applications en fin de vie
- Sauvegarde documentée avant désactivation
- Traçabilité complète des décisions

# 🛠️ Technologies utilisées

| Technologie | Utilisation |
|-------------|-------------|
| **Java 17** | Langage principal |
| **Spring Boot 3** | Framework applicatif |
| **Spring Data JPA** | Accès aux données |
| **PostgreSQL** | Base de données |
| **GitLab API** | Intégration avec les dépôts |
| **Docker** | Conteneurisation |

# 📊 Résultats obtenus

| Indicateur | Avant | Après |
|------------|-------|-------|
| Applications non maintenues identifiées | Manuel (incomplet) | 100% automatisé |
| Temps de détection d'une anomalie | Semaines/mois | < 24h |
| Couverture du parc applicatif | ~60% | 100% |
| Notifications d'alerte envoyées | Manuelles | Automatiques |

# 💡 Apprentissages clés

Ce projet m'a enseigné l'importance de :
- **Penser cycle de vie** : une application ne s'arrête pas au déploiement
- **Automatiser la surveillance** : ce qui n'est pas mesuré n'est pas géré
- **Concevoir des systèmes résilients** : gérer gracieusement les erreurs et cas limites
- **Documenter pour la pérennité** : le code vit plus longtemps que ses auteurs

# 🔗 Contexte

Projet réalisé dans le cadre de mon alternance au **Synchrotron SOLEIL**, un centre de recherche scientifique utilisant le rayonnement synchrotron. Le service informatique supporte l'ensemble des besoins numériques de cette grande infrastructure de recherche.
`,Ls=`---
name: Svelte Static Blog
slug: svelte-blog
category: technique
type: Web Development
color: "#FF3E00"
published: true
logo: https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/svelte/svelte-original.svg
period:
  from: 2025-07-03
  to: 2025-07-15
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
`,ks=`---
name: TAP - Test Automation Platform
slug: tap
category: technique
type: Quality Assurance & DevOps
color: "#00B8A9"
published: true
pinned: true
logo: https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg
period:
  from: 2024-03-01
  to: 2025-01-01
skills:
  - java
  - spring
  - postgresql
  - docker
  - junit
team:
  - name: Alexy VANOT
    role: Développeur principal
---

# TAP - Test Automation Platform

**TAP** (Test Automation Platform) est une plateforme de centralisation et d'exécution des tests automatisés développée au **Synchrotron SOLEIL**. Elle intègre la génération de rapports Allure, le streaming temps réel des résultats et la gestion des campagnes de tests.

# 🎯 Problématique adressée

Avant TAP, les tests automatisés au Synchrotron SOLEIL étaient :
- **Dispersés** : chaque équipe avait ses propres scripts et outils
- **Non centralisés** : pas de vision globale de la qualité
- **Difficiles à consulter** : résultats dans les logs de CI uniquement
- **Sans historique** : pas de traçabilité des exécutions passées

# 🏗️ Architecture de la plateforme

\`\`\`
┌─────────────────────────────────────────────┐
│             TAP Frontend                     │
│  (Configuration, lancement, monitoring)      │
└─────────────────────┬───────────────────────┘
                      │ REST / WebSocket
┌─────────────────────▼───────────────────────┐
│             TAP Backend                      │
│  (Orchestration, gestion des campagnes)      │
└────────┬────────────┬───────────┬───────────┘
         │            │           │
         ▼            ▼           ▼
┌────────────┐  ┌──────────┐  ┌────────────┐
│ Test       │  │PostgreSQL│  │ Allure     │
│ Runners    │  │(Metadata)│  │ Reports    │
└────────────┘  └──────────┘  └────────────┘
\`\`\`

# ✨ Fonctionnalités principales

## Orchestration des tests
- Configuration de campagnes multi-suites
- Exécution parallèle avec gestion de la concurrence
- Support multi-frameworks (JUnit, pytest, TestNG)

## Streaming temps réel
- Visualisation en direct de l'exécution via WebSockets
- Notification instantanée des succès et échecs
- Batching intelligent pour optimiser les performances

## Rapports Allure
- Génération automatique de rapports interactifs
- Catégorisation par features, stories et sévérité
- Historique et tendances d'exécution
- Screenshots et logs en cas d'échec

## Gestion des campagnes
- Historique complet des exécutions
- Comparaison entre campagnes
- Métriques de qualité (taux de succès, durée, tendances)

# 🛠️ Stack technique

| Technologie | Utilisation |
|-------------|-------------|
| **Java 17** | Backend principal |
| **Spring Boot 3** | Framework applicatif |
| **Spring WebSocket** | Communication temps réel |
| **PostgreSQL** | Stockage des métadonnées |
| **Allure Framework** | Génération de rapports |
| **STOMP** | Protocole WebSocket |
| **Docker** | Conteneurisation |

# 📊 Impact sur l'organisation

TAP a transformé les pratiques de test au Synchrotron SOLEIL :

| Aspect | Avant TAP | Avec TAP |
|--------|-----------|----------|
| Visibilité des tests | Logs CI uniquement | Dashboard centralisé |
| Temps d'accès aux résultats | Minutes de recherche | Instantané |
| Comparaison historique | Impossible | Intégrée |
| Adoption par les équipes | Variable | Généralisée |

# 💡 Défis techniques relevés

## Gestion de la concurrence
Plusieurs utilisateurs peuvent lancer des campagnes simultanément. Implémentation d'un pool de threads et d'une queue avec priorités.

## Isolation des environnements
Chaque exécution de test doit être isolée pour éviter les interférences. Variables d'environnement et préfixage des ressources par campagne.

## Performance WebSocket
Optimisation via batching des messages (envoi groupé toutes les 500ms) et compression des payloads.

# 💭 Apprentissages

Ce projet m'a confirmé l'importance de :
- **L'UX des outils internes** : un outil mal conçu ne sera pas adopté
- **Les standards ouverts** : Allure plutôt qu'un format propriétaire
- **Le feedback utilisateur** : les meilleures fonctionnalités viennent des retours terrain
- **Les tests de tests** : tester une plateforme de tests est méta mais nécessaire

# 🔗 Contexte

Projet phare de mon alternance au **Synchrotron SOLEIL**. TAP représente le projet le plus complet que j'ai développé, combinant backend, temps réel, intégration avec des outils tiers et attention particulière à l'expérience utilisateur.
`,js=`---
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
`,ws=`---
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
`,Ts=`---
name: TP VPO CIFAR-10
slug: tpvpocifar
category: technique
type: Deep Learning & Computer Vision
color: "#673AB7"
published: true
logo: https://raw.githubusercontent.com/alexyvanot/tpvpocifar/main/Figure_1.png
period:
  from: 2025-05-23
  to: 2025-05-23
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
`,Ps=`---
name: Android Studio
slug: android-studio
published: true
category: devtools
color: green
logo: AndroidStudio
---

IDE officiel pour le développement Android. Émulateur, débogage et outils de build Gradle intégrés.
`,Is=`---
name: Apache2
slug: apache2
published: true
category: devops
color: red
logo: Apache
---

Serveur web HTTP open-source. Configuration de virtual hosts, reverse proxy et modules.
`,Ds=`---
name: Arduino
slug: arduino
published: true
category: devtools
color: teal
logo: Arduino
---

Programmation de microcontrôleurs pour des projets IoT et électronique embarquée.
`,Es=`---
name: Autonomie & apprentissage
slug: autonomy
published: true
category: soft
color: blue
logo: Autonomy
---

Capacité à apprendre par moi-même, à m'auto-former rapidement, et à être force de proposition.
`,Ms=`---
name: BungeeCord / Waterfall
slug: bungeecord
published: true
category: devtools
color: yellow
logo: BungeeCord
---

Proxy Minecraft pour connecter plusieurs serveurs. Waterfall est un fork optimisé avec corrections de bugs.
`,Ns=`---
name: C
slug: c
published: true
category: pro-lang
color: gray
logo: C
---

Langage bas niveau utilisé pour la programmation système et les performances critiques.
`,Fs=`---
name: CI/CD
slug: ci-cd
published: true
category: devops
color: gray
logo: CICD
---

Mise en place de pipelines CI/CD via GitLab. Automatisation des tests et déploiement.
`,Rs=`---
name: CLion
slug: clion
published: true
category: devtools
color: green
logo: CLion
---

IDE JetBrains pour C et C++. CMake intégré, debugging avancé et analyse de code statique.
`,Os=`---
name: Confluence
slug: confluence
published: true
category: devtools
color: blue
logo: Confluence
---

Plateforme de documentation collaborative Atlassian. Wiki d'équipe, knowledge base et documentation projet.
`,Us=`---
name: Créativité
slug: creativity
published: true
category: soft
color: purple
logo: Creativity
---

Création d'expériences originales, notamment en réalité virtuelle ou dans la conception d'UI.
`,Bs=`---
name: C#
slug: csharp
published: true
category: pro-lang
color: purple
logo: CSharp
---

Langage orienté objet de Microsoft, utilisé pour le développement .NET et Unity.
`,Gs=`---
name: CSS
slug: css
published: true
category: markup-style
color: blue
logo: CSS
---

Mise en forme des interfaces. Utilisé avec Sass ou Tailwind selon les projets.
`,Vs=`---
name: Dart
slug: dart
published: true
category: pro-lang
color: cyan
logo: Dart
---

Langage de Google utilisé principalement avec Flutter pour le développement mobile cross-platform.
`,Hs=`---
name: DataGrip
slug: datagrip
published: true
category: devtools
color: purple
logo: DataGrip
---

IDE JetBrains pour bases de données. Support multi-SGBD, requêtes SQL et administration.
`,zs=`---
name: Docker Swarm
slug: docker-swarm
published: true
category: devops
color: blue
logo: Docker
---

Orchestration native de Docker pour le clustering et le déploiement de services distribués.
`,Js=`---
name: Docker
slug: docker
published: true
category: devops
color: blue
logo: Docker
---

Conteneurisation d'applications. Utilisé pour créer des environnements de test ou déployer des apps.
`,Ys=`---
name: .NET
slug: dotnet
published: true
category: framework
color: purple
logo: DotNet
---

Framework Microsoft pour le développement d'applications web, desktop et cloud.
`,Ws=`---
name: Electron
slug: electron
published: true
category: framework
color: cyan
logo: Electron
---

Framework pour créer des applications desktop cross-platform avec les technologies web.
`,Ks=`---
name: Microsoft Excel
slug: excel
published: true
category: devtools
color: green
logo: Excel
---

Tableur avancé pour l'analyse de données, formules complexes, macros VBA et visualisation.
`,$s=`---
name: Express.js
slug: expressjs
published: true
category: framework
color: gray
logo: Express
---

Framework minimaliste pour Node.js, utilisé pour créer des APIs REST et des serveurs web.
`,Qs=`---
name: Firebase
slug: firebase
published: true
category: devops
color: orange
logo: Firebase
---

Plateforme Google pour le backend-as-a-service : authentification, base de données temps réel, hosting.
`,Xs=`---
name: Flask
slug: flask
published: true
category: framework
color: gray
logo: Flask
---

Micro-framework Python léger pour le développement web et d'APIs.
`,Zs=`---
name: Flutter
slug: flutter
published: true
category: framework
color: cyan
logo: Flutter
---

Framework UI de Google pour créer des applications mobiles, web et desktop à partir d'une seule codebase.
`,er=`---
name: Git
slug: git
published: true
category: devtools
color: orange
logo: Git
---

Système de versionnement utilisé dans tous mes projets. Workflow GitLab et GitHub.
`,nr=`---
name: Grafana
slug: grafana
published: true
category: devops
color: orange
logo: Grafana
---

Plateforme de visualisation et monitoring pour métriques et logs.
`,tr=`---
name: HTML
slug: html
published: true
category: markup-style
color: orange
logo: HTML
---

Structure des pages web. Maîtrisé depuis mes débuts.
`,ir=`---
name: Hugo
slug: hugo
published: true
category: framework
color: pink
logo: Hugo
---

Générateur de sites statiques ultra-rapide écrit en Go.
`,sr=`---
name: IntelliJ IDEA
slug: intellij
published: true
category: devtools
color: pink
logo: IntelliJ
---

IDE JetBrains puissant pour Java, Kotlin et développement polyglotte. Refactoring et analyse de code avancés.
`,rr=`---
name: Ionic
slug: ionic
published: true
category: framework
color: blue
logo: Ionic
---

Framework pour créer des applications mobiles hybrides avec les technologies web.
`,ar=`---
name: Java
slug: java
published: true
category: pro-lang
color: red
logo: Java
---

Langage orienté objet utilisé principalement dans mes projets backend chez Synchrotron SOLEIL.
`,or=`---
name: JavaFX
slug: javafx
published: true
category: framework
color: orange
logo: Java
---

Framework Java pour créer des interfaces graphiques modernes et des applications desktop riches.
`,lr=`---
name: JavaScript
slug: js
published: true
category: pro-lang
color: yellow
logo: JavaScript
---

Langage de programmation principal utilisé pour les interfaces interactives, côté client comme côté serveur avec Node.js.
`,ur=`---
name: Java EE
slug: jee
published: true
category: framework
color: red
logo: Java
---

Plateforme Java pour le développement d'applications d'entreprise. Servlets, JSP, EJB, JPA et services web.
`,cr=`---
name: Jira
slug: jira
published: true
category: devtools
color: blue
logo: Jira
---

Outil de gestion de projet Agile. Suivi des issues, sprints, Kanban et workflows personnalisés.
`,pr=`---
name: Kotlin
slug: kotlin
published: true
category: pro-lang
color: purple
logo: Kotlin
---

Langage moderne sur JVM, concis et interopérable avec Java. Développement Android et backend.
`,dr=`---
name: Kubernetes
slug: kubernetes
published: true
category: devops
color: blue
logo: Kubernetes
---

Orchestration de conteneurs pour le déploiement, la mise à l'échelle et la gestion d'applications.
`,mr=`---
name: Linux
slug: linux
published: true
category: devtools
color: gray
logo: Linux
---

Utilisation quotidienne de serveurs Debian et Red Hat au Synchrotron.
`,gr=`---
name: MariaDB
slug: mariadb
published: true
category: db
color: brown
logo: MariaDB
---

Base de données relationnelle open-source, fork de MySQL.
`,fr=`---
name: Minikube
slug: minikube
published: true
category: devops
color: blue
logo: Kubernetes
---

Kubernetes local pour le développement et les tests. Environnement de cluster complet sur une seule machine.
`,vr=`---
name: MongoDB
slug: mongodb
published: true
category: db
color: green
logo: MongoDB
---

Base de données NoSQL orientée documents, idéale pour les données flexibles et le scaling horizontal.
`,hr=`---
name: MySQL
slug: mysql
published: true
category: db
color: blue
logo: MySQL
---

Système de gestion de base de données relationnelle open-source très répandu.
`,br=`---
name: Nginx
slug: nginx
published: true
category: devops
color: green
logo: Nginx
---

Serveur web haute performance, reverse proxy et load balancer.
`,yr=`---
name: Node.js
slug: nodejs
published: true
category: framework
color: green
logo: NodeJs
---

Runtime JavaScript côté serveur pour créer des applications backend scalables.
`,xr=`---
name: OpenCV
slug: opencv
published: true
category: library
color: blue
logo: OpenCV
---

Bibliothèque de vision par ordinateur pour le traitement d'images et la détection d'objets.
`,qr=`---
name: OpenXR
slug: openxr
published: true
category: library
color: blue
logo: OpenXR
---

Standard ouvert pour le développement d'applications VR/AR. Utilisé pour créer des expériences immersives cross-platform.
`,_r=`---
name: Oracle
slug: oracle
published: true
category: db
color: red
logo: Oracle
---

Système de gestion de base de données relationnelle d'entreprise.
`,Sr=`---
name: Pandas
slug: pandas
published: true
category: library
color: blue
logo: Pandas
---

Bibliothèque Python pour la manipulation et l'analyse de données structurées.
`,Ar=`---
name: PaperMC
slug: papermc
published: true
category: devtools
color: gray
logo: PaperMC
---

Fork haute performance de Spigot pour serveurs Minecraft. Optimisation et API étendue pour plugins.
`,Cr=`---
name: Photoshop
slug: photoshop
published: true
category: design
color: blue
logo: Photoshop
---

Logiciel de retouche d'image et de création graphique d'Adobe.
`,Lr=`---
name: PHP
slug: php
published: true
category: pro-lang
color: purple
logo: PHP
---

Langage de script côté serveur très utilisé pour le développement web.
`,kr=`---
name: Playwright
slug: playwright
published: true
category: test
color: green
logo: Playwright
---

Framework de test end-to-end moderne pour applications web. Support multi-navigateurs et automatisation avancée.
`,jr=`---
name: PostgreSQL
slug: postgresql
published: true
category: db
color: blue
logo: PostgreSQL
---

Base de données relationnelle open-source avancée avec support JSON et extensions.
`,wr=`---
name: Postman
slug: postman
published: true
category: devtools
color: orange
logo: Postman
---

Outil de test et documentation d'APIs REST et GraphQL.
`,Tr=`---
name: Microsoft PowerPoint
slug: powerpoint
published: true
category: devtools
color: orange
logo: PowerPoint
---

Création de présentations professionnelles, animations et supports de communication visuels.
`,Pr=`---
name: PyCharm
slug: pycharm
published: true
category: devtools
color: green
logo: PyCharm
---

IDE JetBrains dédié au développement Python. Support Django, Flask, data science et debugging avancé.
`,Ir=`---
name: Python
slug: python
published: true
category: pro-lang
color: yellow
logo: Python
---

Langage polyvalent utilisé pour le scripting, le data science, le machine learning et le web.
`,Dr=`---
name: React.js
slug: reactjs
published: true
category: library
color: cyan
logo: ReactJs
---

Bibliothèque JavaScript pour créer des interfaces utilisateur réactives. Utilisé professionnellement.
`,Er=`---
name: Redis
slug: redis
published: true
category: db
color: red
logo: Redis
---

Base de données in-memory ultra-rapide. Cache, pub/sub, et structures de données avancées.
`,Mr=`---
name: Rider
slug: rider
published: true
category: devtools
color: red
logo: Rider
---

IDE JetBrains pour .NET et Unity. Développement C#, ASP.NET et game development.
`,Nr=`---
name: Rust
slug: rust
published: true
category: pro-lang
color: orange
logo: Rust
---

Langage système performant avec gestion mémoire sécurisée sans garbage collector.
`,Fr=`---
name: Sass
slug: sass
published: true
category: markup-style
color: pink
logo: Sass
---

Préprocesseur CSS qui facilite la factorisation et la gestion de grands projets.
`,Rr=`---
name: Selenium
slug: selenium
published: true
category: test
color: green
logo: Selenium
---

Framework d'automatisation de tests pour navigateurs web.
`,Or=`---
name: Skript
slug: skript
published: true
category: devtools
color: orange
logo: Skript
---

Langage de scripting simplifié pour créer des plugins Minecraft sans Java. Syntaxe proche de l'anglais naturel.
`,Ur=`---
name: Spigot
slug: spigot
published: true
category: devtools
color: orange
logo: Spigot
---

Serveur Minecraft modifié avec API pour plugins. Base de nombreux serveurs communautaires.
`,Br=`---
name: Spring
slug: spring
published: true
category: framework
color: green
logo: Spring
---

Framework Java pour le développement d'applications enterprise et microservices.
`,Gr=`---
name: Spring Boot
slug: springboot
published: false
category: framework
color: green
logo: Spring
---

Framework Java pour créer rapidement des applications Spring autonomes et prêtes pour la production.
`,Vr=`---
name: SQLite
slug: sqlite
published: true
category: db
color: gray
logo: SQLite
---

Base de données légère intégrée. Idéale pour des projets locaux ou embarqués.
`,Hr=`---
name: Streamlit
slug: streamlit
published: true
category: framework
color: red
logo: Streamlit
---

Framework Python pour créer rapidement des applications web de data science et machine learning.
`,zr=`---
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
`,Jr=`---
name: Tailwind CSS
slug: tailwind
published: true
category: markup-style
color: cyan
logo: TailwindCSS
---

Framework CSS utility-first pour créer des interfaces rapidement sans quitter le HTML.
`,Yr=`---
name: Travail en équipe
slug: teamwork
published: true
category: soft
color: green
logo: Teamwork
---

Collaboration efficace dans des équipes pluridisciplinaires. Communication claire et partage de responsabilités.
`,Wr=`---
name: TensorFlow
slug: tensorflow
published: true
category: library
color: orange
logo: TensorFlow
---

Bibliothèque de machine learning et deep learning de Google.
`,Kr=`---
name: TypeScript
slug: ts
published: true
category: pro-lang
color: blue
logo: TypeScript
---

Superset de JavaScript typé statiquement. Utilisé pour des projets robustes avec des IDE performants.
`,$r=`---
name: Unity
slug: unity
published: true
category: devtools
color: gray
logo: Unity
---

Moteur de jeu multiplateforme pour le développement de jeux 2D/3D et expériences VR/AR.
`,Qr=`---
name: Velocity
slug: velocity
published: true
category: devtools
color: cyan
logo: Velocity
---

Proxy Minecraft moderne et performant. Gestion de réseaux de serveurs avec API plugin avancée.
`,Xr=`---
name: VS Code
slug: vscode
published: true
category: devtools
color: blue
logo: VSCode
---

Éditeur de code léger et extensible de Microsoft. Extensions, debugging intégré et terminal.
`,Zr=`---
name: Vue.js
slug: vuejs
published: true
category: framework
color: green
logo: VueJs
---

Framework JavaScript progressif pour construire des interfaces utilisateur réactives.
`,ea=`---
name: WebStorm
slug: webstorm
published: true
category: devtools
color: cyan
logo: WebStorm
---

IDE JetBrains pour le développement JavaScript et TypeScript. Support React, Vue, Angular et Node.js.
`,na=`---
name: Microsoft Word
slug: word
published: true
category: devtools
color: blue
logo: Word
---

Traitement de texte pour documentation technique, rapports et rédaction professionnelle.
`,ta=`---
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
`,ia=`---
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
`,sa=`---
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
`,ra=`---
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
`,aa=`---
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
`,oa=`---
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
`,la=`# Site Configuration
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
`,ua=`# Page d'accueil
# Personnalise le contenu de ta page d'accueil ici

title: Accueil

hero:
  description: >
    Développeur Full-Stack passionné, je crée des applications web modernes
    et performantes. Actuellement en alternance au Synchrotron SOLEIL et 
    en Master à l'ESIEA.
`,ca=`# Page CV
# Personnalise le contenu de ta page CV ici

title: CV
pdfPath: /pdf/CV_Alexy_Vanot.pdf
downloadLabel: Télécharger
fullscreenLabel: Plein écran
`,pa=`# Page Contact
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
`;/*! js-yaml 4.1.1 https://github.com/nodeca/js-yaml @license MIT */function tt(e){return typeof e>"u"||e===null}function da(e){return typeof e=="object"&&e!==null}function ma(e){return Array.isArray(e)?e:tt(e)?[]:[e]}function ga(e,n){var t,s,i,a;if(n)for(a=Object.keys(n),t=0,s=a.length;t<s;t+=1)i=a[t],e[i]=n[i];return e}function fa(e,n){var t="",s;for(s=0;s<n;s+=1)t+=e;return t}function va(e){return e===0&&Number.NEGATIVE_INFINITY===1/e}var ha=tt,ba=da,ya=ma,xa=fa,qa=va,_a=ga,j={isNothing:ha,isObject:ba,toArray:ya,repeat:xa,isNegativeZero:qa,extend:_a};function it(e,n){var t="",s=e.reason||"(unknown reason)";return e.mark?(e.mark.name&&(t+='in "'+e.mark.name+'" '),t+="("+(e.mark.line+1)+":"+(e.mark.column+1)+")",!n&&e.mark.snippet&&(t+=`

`+e.mark.snippet),s+" "+t):s}function ce(e,n){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=n,this.message=it(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}ce.prototype=Object.create(Error.prototype);ce.prototype.constructor=ce;ce.prototype.toString=function(n){return this.name+": "+it(this,n)};var P=ce;function Ne(e,n,t,s,i){var a="",r="",o=Math.floor(i/2)-1;return s-n>o&&(a=" ... ",n=s-o+a.length),t-s>o&&(r=" ...",t=s+o-r.length),{str:a+e.slice(n,t).replace(/\t/g,"→")+r,pos:s-n+a.length}}function Fe(e,n){return j.repeat(" ",n-e.length)+e}function Sa(e,n){if(n=Object.create(n||null),!e.buffer)return null;n.maxLength||(n.maxLength=79),typeof n.indent!="number"&&(n.indent=1),typeof n.linesBefore!="number"&&(n.linesBefore=3),typeof n.linesAfter!="number"&&(n.linesAfter=2);for(var t=/\r?\n|\r|\0/g,s=[0],i=[],a,r=-1;a=t.exec(e.buffer);)i.push(a.index),s.push(a.index+a[0].length),e.position<=a.index&&r<0&&(r=s.length-2);r<0&&(r=s.length-1);var o="",l,u,d=Math.min(e.line+n.linesAfter,i.length).toString().length,p=n.maxLength-(n.indent+d+3);for(l=1;l<=n.linesBefore&&!(r-l<0);l++)u=Ne(e.buffer,s[r-l],i[r-l],e.position-(s[r]-s[r-l]),p),o=j.repeat(" ",n.indent)+Fe((e.line-l+1).toString(),d)+" | "+u.str+`
`+o;for(u=Ne(e.buffer,s[r],i[r],e.position,p),o+=j.repeat(" ",n.indent)+Fe((e.line+1).toString(),d)+" | "+u.str+`
`,o+=j.repeat("-",n.indent+d+3+u.pos)+`^
`,l=1;l<=n.linesAfter&&!(r+l>=i.length);l++)u=Ne(e.buffer,s[r+l],i[r+l],e.position-(s[r]-s[r+l]),p),o+=j.repeat(" ",n.indent)+Fe((e.line+l+1).toString(),d)+" | "+u.str+`
`;return o.replace(/\n$/,"")}var Aa=Sa,Ca=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],La=["scalar","sequence","mapping"];function ka(e){var n={};return e!==null&&Object.keys(e).forEach(function(t){e[t].forEach(function(s){n[String(s)]=t})}),n}function ja(e,n){if(n=n||{},Object.keys(n).forEach(function(t){if(Ca.indexOf(t)===-1)throw new P('Unknown option "'+t+'" is met in definition of "'+e+'" YAML type.')}),this.options=n,this.tag=e,this.kind=n.kind||null,this.resolve=n.resolve||function(){return!0},this.construct=n.construct||function(t){return t},this.instanceOf=n.instanceOf||null,this.predicate=n.predicate||null,this.represent=n.represent||null,this.representName=n.representName||null,this.defaultStyle=n.defaultStyle||null,this.multi=n.multi||!1,this.styleAliases=ka(n.styleAliases||null),La.indexOf(this.kind)===-1)throw new P('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')}var w=ja;function kn(e,n){var t=[];return e[n].forEach(function(s){var i=t.length;t.forEach(function(a,r){a.tag===s.tag&&a.kind===s.kind&&a.multi===s.multi&&(i=r)}),t[i]=s}),t}function wa(){var e={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},n,t;function s(i){i.multi?(e.multi[i.kind].push(i),e.multi.fallback.push(i)):e[i.kind][i.tag]=e.fallback[i.tag]=i}for(n=0,t=arguments.length;n<t;n+=1)arguments[n].forEach(s);return e}function Ve(e){return this.extend(e)}Ve.prototype.extend=function(n){var t=[],s=[];if(n instanceof w)s.push(n);else if(Array.isArray(n))s=s.concat(n);else if(n&&(Array.isArray(n.implicit)||Array.isArray(n.explicit)))n.implicit&&(t=t.concat(n.implicit)),n.explicit&&(s=s.concat(n.explicit));else throw new P("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");t.forEach(function(a){if(!(a instanceof w))throw new P("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(a.loadKind&&a.loadKind!=="scalar")throw new P("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(a.multi)throw new P("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),s.forEach(function(a){if(!(a instanceof w))throw new P("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var i=Object.create(Ve.prototype);return i.implicit=(this.implicit||[]).concat(t),i.explicit=(this.explicit||[]).concat(s),i.compiledImplicit=kn(i,"implicit"),i.compiledExplicit=kn(i,"explicit"),i.compiledTypeMap=wa(i.compiledImplicit,i.compiledExplicit),i};var st=Ve,rt=new w("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return e!==null?e:""}}),at=new w("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return e!==null?e:[]}}),ot=new w("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return e!==null?e:{}}}),lt=new st({explicit:[rt,at,ot]});function Ta(e){if(e===null)return!0;var n=e.length;return n===1&&e==="~"||n===4&&(e==="null"||e==="Null"||e==="NULL")}function Pa(){return null}function Ia(e){return e===null}var ut=new w("tag:yaml.org,2002:null",{kind:"scalar",resolve:Ta,construct:Pa,predicate:Ia,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function Da(e){if(e===null)return!1;var n=e.length;return n===4&&(e==="true"||e==="True"||e==="TRUE")||n===5&&(e==="false"||e==="False"||e==="FALSE")}function Ea(e){return e==="true"||e==="True"||e==="TRUE"}function Ma(e){return Object.prototype.toString.call(e)==="[object Boolean]"}var ct=new w("tag:yaml.org,2002:bool",{kind:"scalar",resolve:Da,construct:Ea,predicate:Ma,represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"});function Na(e){return 48<=e&&e<=57||65<=e&&e<=70||97<=e&&e<=102}function Fa(e){return 48<=e&&e<=55}function Ra(e){return 48<=e&&e<=57}function Oa(e){if(e===null)return!1;var n=e.length,t=0,s=!1,i;if(!n)return!1;if(i=e[t],(i==="-"||i==="+")&&(i=e[++t]),i==="0"){if(t+1===n)return!0;if(i=e[++t],i==="b"){for(t++;t<n;t++)if(i=e[t],i!=="_"){if(i!=="0"&&i!=="1")return!1;s=!0}return s&&i!=="_"}if(i==="x"){for(t++;t<n;t++)if(i=e[t],i!=="_"){if(!Na(e.charCodeAt(t)))return!1;s=!0}return s&&i!=="_"}if(i==="o"){for(t++;t<n;t++)if(i=e[t],i!=="_"){if(!Fa(e.charCodeAt(t)))return!1;s=!0}return s&&i!=="_"}}if(i==="_")return!1;for(;t<n;t++)if(i=e[t],i!=="_"){if(!Ra(e.charCodeAt(t)))return!1;s=!0}return!(!s||i==="_")}function Ua(e){var n=e,t=1,s;if(n.indexOf("_")!==-1&&(n=n.replace(/_/g,"")),s=n[0],(s==="-"||s==="+")&&(s==="-"&&(t=-1),n=n.slice(1),s=n[0]),n==="0")return 0;if(s==="0"){if(n[1]==="b")return t*parseInt(n.slice(2),2);if(n[1]==="x")return t*parseInt(n.slice(2),16);if(n[1]==="o")return t*parseInt(n.slice(2),8)}return t*parseInt(n,10)}function Ba(e){return Object.prototype.toString.call(e)==="[object Number]"&&e%1===0&&!j.isNegativeZero(e)}var pt=new w("tag:yaml.org,2002:int",{kind:"scalar",resolve:Oa,construct:Ua,predicate:Ba,represent:{binary:function(e){return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){return e>=0?"0o"+e.toString(8):"-0o"+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),Ga=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function Va(e){return!(e===null||!Ga.test(e)||e[e.length-1]==="_")}function Ha(e){var n,t;return n=e.replace(/_/g,"").toLowerCase(),t=n[0]==="-"?-1:1,"+-".indexOf(n[0])>=0&&(n=n.slice(1)),n===".inf"?t===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:n===".nan"?NaN:t*parseFloat(n,10)}var za=/^[-+]?[0-9]+e/;function Ja(e,n){var t;if(isNaN(e))switch(n){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(n){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(n){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(j.isNegativeZero(e))return"-0.0";return t=e.toString(10),za.test(t)?t.replace("e",".e"):t}function Ya(e){return Object.prototype.toString.call(e)==="[object Number]"&&(e%1!==0||j.isNegativeZero(e))}var dt=new w("tag:yaml.org,2002:float",{kind:"scalar",resolve:Va,construct:Ha,predicate:Ya,represent:Ja,defaultStyle:"lowercase"}),mt=lt.extend({implicit:[ut,ct,pt,dt]}),gt=mt,ft=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),vt=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function Wa(e){return e===null?!1:ft.exec(e)!==null||vt.exec(e)!==null}function Ka(e){var n,t,s,i,a,r,o,l=0,u=null,d,p,m;if(n=ft.exec(e),n===null&&(n=vt.exec(e)),n===null)throw new Error("Date resolve error");if(t=+n[1],s=+n[2]-1,i=+n[3],!n[4])return new Date(Date.UTC(t,s,i));if(a=+n[4],r=+n[5],o=+n[6],n[7]){for(l=n[7].slice(0,3);l.length<3;)l+="0";l=+l}return n[9]&&(d=+n[10],p=+(n[11]||0),u=(d*60+p)*6e4,n[9]==="-"&&(u=-u)),m=new Date(Date.UTC(t,s,i,a,r,o,l)),u&&m.setTime(m.getTime()-u),m}function $a(e){return e.toISOString()}var ht=new w("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:Wa,construct:Ka,instanceOf:Date,represent:$a});function Qa(e){return e==="<<"||e===null}var bt=new w("tag:yaml.org,2002:merge",{kind:"scalar",resolve:Qa}),Ze=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function Xa(e){if(e===null)return!1;var n,t,s=0,i=e.length,a=Ze;for(t=0;t<i;t++)if(n=a.indexOf(e.charAt(t)),!(n>64)){if(n<0)return!1;s+=6}return s%8===0}function Za(e){var n,t,s=e.replace(/[\r\n=]/g,""),i=s.length,a=Ze,r=0,o=[];for(n=0;n<i;n++)n%4===0&&n&&(o.push(r>>16&255),o.push(r>>8&255),o.push(r&255)),r=r<<6|a.indexOf(s.charAt(n));return t=i%4*6,t===0?(o.push(r>>16&255),o.push(r>>8&255),o.push(r&255)):t===18?(o.push(r>>10&255),o.push(r>>2&255)):t===12&&o.push(r>>4&255),new Uint8Array(o)}function eo(e){var n="",t=0,s,i,a=e.length,r=Ze;for(s=0;s<a;s++)s%3===0&&s&&(n+=r[t>>18&63],n+=r[t>>12&63],n+=r[t>>6&63],n+=r[t&63]),t=(t<<8)+e[s];return i=a%3,i===0?(n+=r[t>>18&63],n+=r[t>>12&63],n+=r[t>>6&63],n+=r[t&63]):i===2?(n+=r[t>>10&63],n+=r[t>>4&63],n+=r[t<<2&63],n+=r[64]):i===1&&(n+=r[t>>2&63],n+=r[t<<4&63],n+=r[64],n+=r[64]),n}function no(e){return Object.prototype.toString.call(e)==="[object Uint8Array]"}var yt=new w("tag:yaml.org,2002:binary",{kind:"scalar",resolve:Xa,construct:Za,predicate:no,represent:eo}),to=Object.prototype.hasOwnProperty,io=Object.prototype.toString;function so(e){if(e===null)return!0;var n=[],t,s,i,a,r,o=e;for(t=0,s=o.length;t<s;t+=1){if(i=o[t],r=!1,io.call(i)!=="[object Object]")return!1;for(a in i)if(to.call(i,a))if(!r)r=!0;else return!1;if(!r)return!1;if(n.indexOf(a)===-1)n.push(a);else return!1}return!0}function ro(e){return e!==null?e:[]}var xt=new w("tag:yaml.org,2002:omap",{kind:"sequence",resolve:so,construct:ro}),ao=Object.prototype.toString;function oo(e){if(e===null)return!0;var n,t,s,i,a,r=e;for(a=new Array(r.length),n=0,t=r.length;n<t;n+=1){if(s=r[n],ao.call(s)!=="[object Object]"||(i=Object.keys(s),i.length!==1))return!1;a[n]=[i[0],s[i[0]]]}return!0}function lo(e){if(e===null)return[];var n,t,s,i,a,r=e;for(a=new Array(r.length),n=0,t=r.length;n<t;n+=1)s=r[n],i=Object.keys(s),a[n]=[i[0],s[i[0]]];return a}var qt=new w("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:oo,construct:lo}),uo=Object.prototype.hasOwnProperty;function co(e){if(e===null)return!0;var n,t=e;for(n in t)if(uo.call(t,n)&&t[n]!==null)return!1;return!0}function po(e){return e!==null?e:{}}var _t=new w("tag:yaml.org,2002:set",{kind:"mapping",resolve:co,construct:po}),en=gt.extend({implicit:[ht,bt],explicit:[yt,xt,qt,_t]}),H=Object.prototype.hasOwnProperty,qe=1,St=2,At=3,_e=4,Re=1,mo=2,jn=3,go=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,fo=/[\x85\u2028\u2029]/,vo=/[,\[\]\{\}]/,Ct=/^(?:!|!!|![a-z\-]+!)$/i,Lt=/^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;function wn(e){return Object.prototype.toString.call(e)}function R(e){return e===10||e===13}function z(e){return e===9||e===32}function D(e){return e===9||e===32||e===10||e===13}function Q(e){return e===44||e===91||e===93||e===123||e===125}function ho(e){var n;return 48<=e&&e<=57?e-48:(n=e|32,97<=n&&n<=102?n-97+10:-1)}function bo(e){return e===120?2:e===117?4:e===85?8:0}function yo(e){return 48<=e&&e<=57?e-48:-1}function Tn(e){return e===48?"\0":e===97?"\x07":e===98?"\b":e===116||e===9?"	":e===110?`
`:e===118?"\v":e===102?"\f":e===114?"\r":e===101?"\x1B":e===32?" ":e===34?'"':e===47?"/":e===92?"\\":e===78?"":e===95?" ":e===76?"\u2028":e===80?"\u2029":""}function xo(e){return e<=65535?String.fromCharCode(e):String.fromCharCode((e-65536>>10)+55296,(e-65536&1023)+56320)}function kt(e,n,t){n==="__proto__"?Object.defineProperty(e,n,{configurable:!0,enumerable:!0,writable:!0,value:t}):e[n]=t}var jt=new Array(256),wt=new Array(256);for(var W=0;W<256;W++)jt[W]=Tn(W)?1:0,wt[W]=Tn(W);function qo(e,n){this.input=e,this.filename=n.filename||null,this.schema=n.schema||en,this.onWarning=n.onWarning||null,this.legacy=n.legacy||!1,this.json=n.json||!1,this.listener=n.listener||null,this.implicitTypes=this.schema.compiledImplicit,this.typeMap=this.schema.compiledTypeMap,this.length=e.length,this.position=0,this.line=0,this.lineStart=0,this.lineIndent=0,this.firstTabInLine=-1,this.documents=[]}function Tt(e,n){var t={name:e.filename,buffer:e.input.slice(0,-1),position:e.position,line:e.line,column:e.position-e.lineStart};return t.snippet=Aa(t),new P(n,t)}function v(e,n){throw Tt(e,n)}function Se(e,n){e.onWarning&&e.onWarning.call(null,Tt(e,n))}var Pn={YAML:function(n,t,s){var i,a,r;n.version!==null&&v(n,"duplication of %YAML directive"),s.length!==1&&v(n,"YAML directive accepts exactly one argument"),i=/^([0-9]+)\.([0-9]+)$/.exec(s[0]),i===null&&v(n,"ill-formed argument of the YAML directive"),a=parseInt(i[1],10),r=parseInt(i[2],10),a!==1&&v(n,"unacceptable YAML version of the document"),n.version=s[0],n.checkLineBreaks=r<2,r!==1&&r!==2&&Se(n,"unsupported YAML version of the document")},TAG:function(n,t,s){var i,a;s.length!==2&&v(n,"TAG directive accepts exactly two arguments"),i=s[0],a=s[1],Ct.test(i)||v(n,"ill-formed tag handle (first argument) of the TAG directive"),H.call(n.tagMap,i)&&v(n,'there is a previously declared suffix for "'+i+'" tag handle'),Lt.test(a)||v(n,"ill-formed tag prefix (second argument) of the TAG directive");try{a=decodeURIComponent(a)}catch{v(n,"tag prefix is malformed: "+a)}n.tagMap[i]=a}};function V(e,n,t,s){var i,a,r,o;if(n<t){if(o=e.input.slice(n,t),s)for(i=0,a=o.length;i<a;i+=1)r=o.charCodeAt(i),r===9||32<=r&&r<=1114111||v(e,"expected valid JSON character");else go.test(o)&&v(e,"the stream contains non-printable characters");e.result+=o}}function In(e,n,t,s){var i,a,r,o;for(j.isObject(t)||v(e,"cannot merge mappings; the provided source object is unacceptable"),i=Object.keys(t),r=0,o=i.length;r<o;r+=1)a=i[r],H.call(n,a)||(kt(n,a,t[a]),s[a]=!0)}function X(e,n,t,s,i,a,r,o,l){var u,d;if(Array.isArray(i))for(i=Array.prototype.slice.call(i),u=0,d=i.length;u<d;u+=1)Array.isArray(i[u])&&v(e,"nested arrays are not supported inside keys"),typeof i=="object"&&wn(i[u])==="[object Object]"&&(i[u]="[object Object]");if(typeof i=="object"&&wn(i)==="[object Object]"&&(i="[object Object]"),i=String(i),n===null&&(n={}),s==="tag:yaml.org,2002:merge")if(Array.isArray(a))for(u=0,d=a.length;u<d;u+=1)In(e,n,a[u],t);else In(e,n,a,t);else!e.json&&!H.call(t,i)&&H.call(n,i)&&(e.line=r||e.line,e.lineStart=o||e.lineStart,e.position=l||e.position,v(e,"duplicated mapping key")),kt(n,i,a),delete t[i];return n}function nn(e){var n;n=e.input.charCodeAt(e.position),n===10?e.position++:n===13?(e.position++,e.input.charCodeAt(e.position)===10&&e.position++):v(e,"a line break is expected"),e.line+=1,e.lineStart=e.position,e.firstTabInLine=-1}function k(e,n,t){for(var s=0,i=e.input.charCodeAt(e.position);i!==0;){for(;z(i);)i===9&&e.firstTabInLine===-1&&(e.firstTabInLine=e.position),i=e.input.charCodeAt(++e.position);if(n&&i===35)do i=e.input.charCodeAt(++e.position);while(i!==10&&i!==13&&i!==0);if(R(i))for(nn(e),i=e.input.charCodeAt(e.position),s++,e.lineIndent=0;i===32;)e.lineIndent++,i=e.input.charCodeAt(++e.position);else break}return t!==-1&&s!==0&&e.lineIndent<t&&Se(e,"deficient indentation"),s}function Le(e){var n=e.position,t;return t=e.input.charCodeAt(n),!!((t===45||t===46)&&t===e.input.charCodeAt(n+1)&&t===e.input.charCodeAt(n+2)&&(n+=3,t=e.input.charCodeAt(n),t===0||D(t)))}function tn(e,n){n===1?e.result+=" ":n>1&&(e.result+=j.repeat(`
`,n-1))}function _o(e,n,t){var s,i,a,r,o,l,u,d,p=e.kind,m=e.result,f;if(f=e.input.charCodeAt(e.position),D(f)||Q(f)||f===35||f===38||f===42||f===33||f===124||f===62||f===39||f===34||f===37||f===64||f===96||(f===63||f===45)&&(i=e.input.charCodeAt(e.position+1),D(i)||t&&Q(i)))return!1;for(e.kind="scalar",e.result="",a=r=e.position,o=!1;f!==0;){if(f===58){if(i=e.input.charCodeAt(e.position+1),D(i)||t&&Q(i))break}else if(f===35){if(s=e.input.charCodeAt(e.position-1),D(s))break}else{if(e.position===e.lineStart&&Le(e)||t&&Q(f))break;if(R(f))if(l=e.line,u=e.lineStart,d=e.lineIndent,k(e,!1,-1),e.lineIndent>=n){o=!0,f=e.input.charCodeAt(e.position);continue}else{e.position=r,e.line=l,e.lineStart=u,e.lineIndent=d;break}}o&&(V(e,a,r,!1),tn(e,e.line-l),a=r=e.position,o=!1),z(f)||(r=e.position+1),f=e.input.charCodeAt(++e.position)}return V(e,a,r,!1),e.result?!0:(e.kind=p,e.result=m,!1)}function So(e,n){var t,s,i;if(t=e.input.charCodeAt(e.position),t!==39)return!1;for(e.kind="scalar",e.result="",e.position++,s=i=e.position;(t=e.input.charCodeAt(e.position))!==0;)if(t===39)if(V(e,s,e.position,!0),t=e.input.charCodeAt(++e.position),t===39)s=e.position,e.position++,i=e.position;else return!0;else R(t)?(V(e,s,i,!0),tn(e,k(e,!1,n)),s=i=e.position):e.position===e.lineStart&&Le(e)?v(e,"unexpected end of the document within a single quoted scalar"):(e.position++,i=e.position);v(e,"unexpected end of the stream within a single quoted scalar")}function Ao(e,n){var t,s,i,a,r,o;if(o=e.input.charCodeAt(e.position),o!==34)return!1;for(e.kind="scalar",e.result="",e.position++,t=s=e.position;(o=e.input.charCodeAt(e.position))!==0;){if(o===34)return V(e,t,e.position,!0),e.position++,!0;if(o===92){if(V(e,t,e.position,!0),o=e.input.charCodeAt(++e.position),R(o))k(e,!1,n);else if(o<256&&jt[o])e.result+=wt[o],e.position++;else if((r=bo(o))>0){for(i=r,a=0;i>0;i--)o=e.input.charCodeAt(++e.position),(r=ho(o))>=0?a=(a<<4)+r:v(e,"expected hexadecimal character");e.result+=xo(a),e.position++}else v(e,"unknown escape sequence");t=s=e.position}else R(o)?(V(e,t,s,!0),tn(e,k(e,!1,n)),t=s=e.position):e.position===e.lineStart&&Le(e)?v(e,"unexpected end of the document within a double quoted scalar"):(e.position++,s=e.position)}v(e,"unexpected end of the stream within a double quoted scalar")}function Co(e,n){var t=!0,s,i,a,r=e.tag,o,l=e.anchor,u,d,p,m,f,b=Object.create(null),y,g,h,x;if(x=e.input.charCodeAt(e.position),x===91)d=93,f=!1,o=[];else if(x===123)d=125,f=!0,o={};else return!1;for(e.anchor!==null&&(e.anchorMap[e.anchor]=o),x=e.input.charCodeAt(++e.position);x!==0;){if(k(e,!0,n),x=e.input.charCodeAt(e.position),x===d)return e.position++,e.tag=r,e.anchor=l,e.kind=f?"mapping":"sequence",e.result=o,!0;t?x===44&&v(e,"expected the node content, but found ','"):v(e,"missed comma between flow collection entries"),g=y=h=null,p=m=!1,x===63&&(u=e.input.charCodeAt(e.position+1),D(u)&&(p=m=!0,e.position++,k(e,!0,n))),s=e.line,i=e.lineStart,a=e.position,Z(e,n,qe,!1,!0),g=e.tag,y=e.result,k(e,!0,n),x=e.input.charCodeAt(e.position),(m||e.line===s)&&x===58&&(p=!0,x=e.input.charCodeAt(++e.position),k(e,!0,n),Z(e,n,qe,!1,!0),h=e.result),f?X(e,o,b,g,y,h,s,i,a):p?o.push(X(e,null,b,g,y,h,s,i,a)):o.push(y),k(e,!0,n),x=e.input.charCodeAt(e.position),x===44?(t=!0,x=e.input.charCodeAt(++e.position)):t=!1}v(e,"unexpected end of the stream within a flow collection")}function Lo(e,n){var t,s,i=Re,a=!1,r=!1,o=n,l=0,u=!1,d,p;if(p=e.input.charCodeAt(e.position),p===124)s=!1;else if(p===62)s=!0;else return!1;for(e.kind="scalar",e.result="";p!==0;)if(p=e.input.charCodeAt(++e.position),p===43||p===45)Re===i?i=p===43?jn:mo:v(e,"repeat of a chomping mode identifier");else if((d=yo(p))>=0)d===0?v(e,"bad explicit indentation width of a block scalar; it cannot be less than one"):r?v(e,"repeat of an indentation width identifier"):(o=n+d-1,r=!0);else break;if(z(p)){do p=e.input.charCodeAt(++e.position);while(z(p));if(p===35)do p=e.input.charCodeAt(++e.position);while(!R(p)&&p!==0)}for(;p!==0;){for(nn(e),e.lineIndent=0,p=e.input.charCodeAt(e.position);(!r||e.lineIndent<o)&&p===32;)e.lineIndent++,p=e.input.charCodeAt(++e.position);if(!r&&e.lineIndent>o&&(o=e.lineIndent),R(p)){l++;continue}if(e.lineIndent<o){i===jn?e.result+=j.repeat(`
`,a?1+l:l):i===Re&&a&&(e.result+=`
`);break}for(s?z(p)?(u=!0,e.result+=j.repeat(`
`,a?1+l:l)):u?(u=!1,e.result+=j.repeat(`
`,l+1)):l===0?a&&(e.result+=" "):e.result+=j.repeat(`
`,l):e.result+=j.repeat(`
`,a?1+l:l),a=!0,r=!0,l=0,t=e.position;!R(p)&&p!==0;)p=e.input.charCodeAt(++e.position);V(e,t,e.position,!1)}return!0}function Dn(e,n){var t,s=e.tag,i=e.anchor,a=[],r,o=!1,l;if(e.firstTabInLine!==-1)return!1;for(e.anchor!==null&&(e.anchorMap[e.anchor]=a),l=e.input.charCodeAt(e.position);l!==0&&(e.firstTabInLine!==-1&&(e.position=e.firstTabInLine,v(e,"tab characters must not be used in indentation")),!(l!==45||(r=e.input.charCodeAt(e.position+1),!D(r))));){if(o=!0,e.position++,k(e,!0,-1)&&e.lineIndent<=n){a.push(null),l=e.input.charCodeAt(e.position);continue}if(t=e.line,Z(e,n,At,!1,!0),a.push(e.result),k(e,!0,-1),l=e.input.charCodeAt(e.position),(e.line===t||e.lineIndent>n)&&l!==0)v(e,"bad indentation of a sequence entry");else if(e.lineIndent<n)break}return o?(e.tag=s,e.anchor=i,e.kind="sequence",e.result=a,!0):!1}function ko(e,n,t){var s,i,a,r,o,l,u=e.tag,d=e.anchor,p={},m=Object.create(null),f=null,b=null,y=null,g=!1,h=!1,x;if(e.firstTabInLine!==-1)return!1;for(e.anchor!==null&&(e.anchorMap[e.anchor]=p),x=e.input.charCodeAt(e.position);x!==0;){if(!g&&e.firstTabInLine!==-1&&(e.position=e.firstTabInLine,v(e,"tab characters must not be used in indentation")),s=e.input.charCodeAt(e.position+1),a=e.line,(x===63||x===58)&&D(s))x===63?(g&&(X(e,p,m,f,b,null,r,o,l),f=b=y=null),h=!0,g=!0,i=!0):g?(g=!1,i=!0):v(e,"incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"),e.position+=1,x=s;else{if(r=e.line,o=e.lineStart,l=e.position,!Z(e,t,St,!1,!0))break;if(e.line===a){for(x=e.input.charCodeAt(e.position);z(x);)x=e.input.charCodeAt(++e.position);if(x===58)x=e.input.charCodeAt(++e.position),D(x)||v(e,"a whitespace character is expected after the key-value separator within a block mapping"),g&&(X(e,p,m,f,b,null,r,o,l),f=b=y=null),h=!0,g=!1,i=!1,f=e.tag,b=e.result;else if(h)v(e,"can not read an implicit mapping pair; a colon is missed");else return e.tag=u,e.anchor=d,!0}else if(h)v(e,"can not read a block mapping entry; a multiline key may not be an implicit key");else return e.tag=u,e.anchor=d,!0}if((e.line===a||e.lineIndent>n)&&(g&&(r=e.line,o=e.lineStart,l=e.position),Z(e,n,_e,!0,i)&&(g?b=e.result:y=e.result),g||(X(e,p,m,f,b,y,r,o,l),f=b=y=null),k(e,!0,-1),x=e.input.charCodeAt(e.position)),(e.line===a||e.lineIndent>n)&&x!==0)v(e,"bad indentation of a mapping entry");else if(e.lineIndent<n)break}return g&&X(e,p,m,f,b,null,r,o,l),h&&(e.tag=u,e.anchor=d,e.kind="mapping",e.result=p),h}function jo(e){var n,t=!1,s=!1,i,a,r;if(r=e.input.charCodeAt(e.position),r!==33)return!1;if(e.tag!==null&&v(e,"duplication of a tag property"),r=e.input.charCodeAt(++e.position),r===60?(t=!0,r=e.input.charCodeAt(++e.position)):r===33?(s=!0,i="!!",r=e.input.charCodeAt(++e.position)):i="!",n=e.position,t){do r=e.input.charCodeAt(++e.position);while(r!==0&&r!==62);e.position<e.length?(a=e.input.slice(n,e.position),r=e.input.charCodeAt(++e.position)):v(e,"unexpected end of the stream within a verbatim tag")}else{for(;r!==0&&!D(r);)r===33&&(s?v(e,"tag suffix cannot contain exclamation marks"):(i=e.input.slice(n-1,e.position+1),Ct.test(i)||v(e,"named tag handle cannot contain such characters"),s=!0,n=e.position+1)),r=e.input.charCodeAt(++e.position);a=e.input.slice(n,e.position),vo.test(a)&&v(e,"tag suffix cannot contain flow indicator characters")}a&&!Lt.test(a)&&v(e,"tag name cannot contain such characters: "+a);try{a=decodeURIComponent(a)}catch{v(e,"tag name is malformed: "+a)}return t?e.tag=a:H.call(e.tagMap,i)?e.tag=e.tagMap[i]+a:i==="!"?e.tag="!"+a:i==="!!"?e.tag="tag:yaml.org,2002:"+a:v(e,'undeclared tag handle "'+i+'"'),!0}function wo(e){var n,t;if(t=e.input.charCodeAt(e.position),t!==38)return!1;for(e.anchor!==null&&v(e,"duplication of an anchor property"),t=e.input.charCodeAt(++e.position),n=e.position;t!==0&&!D(t)&&!Q(t);)t=e.input.charCodeAt(++e.position);return e.position===n&&v(e,"name of an anchor node must contain at least one character"),e.anchor=e.input.slice(n,e.position),!0}function To(e){var n,t,s;if(s=e.input.charCodeAt(e.position),s!==42)return!1;for(s=e.input.charCodeAt(++e.position),n=e.position;s!==0&&!D(s)&&!Q(s);)s=e.input.charCodeAt(++e.position);return e.position===n&&v(e,"name of an alias node must contain at least one character"),t=e.input.slice(n,e.position),H.call(e.anchorMap,t)||v(e,'unidentified alias "'+t+'"'),e.result=e.anchorMap[t],k(e,!0,-1),!0}function Z(e,n,t,s,i){var a,r,o,l=1,u=!1,d=!1,p,m,f,b,y,g;if(e.listener!==null&&e.listener("open",e),e.tag=null,e.anchor=null,e.kind=null,e.result=null,a=r=o=_e===t||At===t,s&&k(e,!0,-1)&&(u=!0,e.lineIndent>n?l=1:e.lineIndent===n?l=0:e.lineIndent<n&&(l=-1)),l===1)for(;jo(e)||wo(e);)k(e,!0,-1)?(u=!0,o=a,e.lineIndent>n?l=1:e.lineIndent===n?l=0:e.lineIndent<n&&(l=-1)):o=!1;if(o&&(o=u||i),(l===1||_e===t)&&(qe===t||St===t?y=n:y=n+1,g=e.position-e.lineStart,l===1?o&&(Dn(e,g)||ko(e,g,y))||Co(e,y)?d=!0:(r&&Lo(e,y)||So(e,y)||Ao(e,y)?d=!0:To(e)?(d=!0,(e.tag!==null||e.anchor!==null)&&v(e,"alias node should not have any properties")):_o(e,y,qe===t)&&(d=!0,e.tag===null&&(e.tag="?")),e.anchor!==null&&(e.anchorMap[e.anchor]=e.result)):l===0&&(d=o&&Dn(e,g))),e.tag===null)e.anchor!==null&&(e.anchorMap[e.anchor]=e.result);else if(e.tag==="?"){for(e.result!==null&&e.kind!=="scalar"&&v(e,'unacceptable node kind for !<?> tag; it should be "scalar", not "'+e.kind+'"'),p=0,m=e.implicitTypes.length;p<m;p+=1)if(b=e.implicitTypes[p],b.resolve(e.result)){e.result=b.construct(e.result),e.tag=b.tag,e.anchor!==null&&(e.anchorMap[e.anchor]=e.result);break}}else if(e.tag!=="!"){if(H.call(e.typeMap[e.kind||"fallback"],e.tag))b=e.typeMap[e.kind||"fallback"][e.tag];else for(b=null,f=e.typeMap.multi[e.kind||"fallback"],p=0,m=f.length;p<m;p+=1)if(e.tag.slice(0,f[p].tag.length)===f[p].tag){b=f[p];break}b||v(e,"unknown tag !<"+e.tag+">"),e.result!==null&&b.kind!==e.kind&&v(e,"unacceptable node kind for !<"+e.tag+'> tag; it should be "'+b.kind+'", not "'+e.kind+'"'),b.resolve(e.result,e.tag)?(e.result=b.construct(e.result,e.tag),e.anchor!==null&&(e.anchorMap[e.anchor]=e.result)):v(e,"cannot resolve a node with !<"+e.tag+"> explicit tag")}return e.listener!==null&&e.listener("close",e),e.tag!==null||e.anchor!==null||d}function Po(e){var n=e.position,t,s,i,a=!1,r;for(e.version=null,e.checkLineBreaks=e.legacy,e.tagMap=Object.create(null),e.anchorMap=Object.create(null);(r=e.input.charCodeAt(e.position))!==0&&(k(e,!0,-1),r=e.input.charCodeAt(e.position),!(e.lineIndent>0||r!==37));){for(a=!0,r=e.input.charCodeAt(++e.position),t=e.position;r!==0&&!D(r);)r=e.input.charCodeAt(++e.position);for(s=e.input.slice(t,e.position),i=[],s.length<1&&v(e,"directive name must not be less than one character in length");r!==0;){for(;z(r);)r=e.input.charCodeAt(++e.position);if(r===35){do r=e.input.charCodeAt(++e.position);while(r!==0&&!R(r));break}if(R(r))break;for(t=e.position;r!==0&&!D(r);)r=e.input.charCodeAt(++e.position);i.push(e.input.slice(t,e.position))}r!==0&&nn(e),H.call(Pn,s)?Pn[s](e,s,i):Se(e,'unknown document directive "'+s+'"')}if(k(e,!0,-1),e.lineIndent===0&&e.input.charCodeAt(e.position)===45&&e.input.charCodeAt(e.position+1)===45&&e.input.charCodeAt(e.position+2)===45?(e.position+=3,k(e,!0,-1)):a&&v(e,"directives end mark is expected"),Z(e,e.lineIndent-1,_e,!1,!0),k(e,!0,-1),e.checkLineBreaks&&fo.test(e.input.slice(n,e.position))&&Se(e,"non-ASCII line breaks are interpreted as content"),e.documents.push(e.result),e.position===e.lineStart&&Le(e)){e.input.charCodeAt(e.position)===46&&(e.position+=3,k(e,!0,-1));return}if(e.position<e.length-1)v(e,"end of the stream or a document separator is expected");else return}function Pt(e,n){e=String(e),n=n||{},e.length!==0&&(e.charCodeAt(e.length-1)!==10&&e.charCodeAt(e.length-1)!==13&&(e+=`
`),e.charCodeAt(0)===65279&&(e=e.slice(1)));var t=new qo(e,n),s=e.indexOf("\0");for(s!==-1&&(t.position=s,v(t,"null byte is not allowed in input")),t.input+="\0";t.input.charCodeAt(t.position)===32;)t.lineIndent+=1,t.position+=1;for(;t.position<t.length-1;)Po(t);return t.documents}function Io(e,n,t){n!==null&&typeof n=="object"&&typeof t>"u"&&(t=n,n=null);var s=Pt(e,t);if(typeof n!="function")return s;for(var i=0,a=s.length;i<a;i+=1)n(s[i])}function Do(e,n){var t=Pt(e,n);if(t.length!==0){if(t.length===1)return t[0];throw new P("expected a single document in the stream, but found more")}}var Eo=Io,Mo=Do,It={loadAll:Eo,load:Mo},Dt=Object.prototype.toString,Et=Object.prototype.hasOwnProperty,sn=65279,No=9,pe=10,Fo=13,Ro=32,Oo=33,Uo=34,He=35,Bo=37,Go=38,Vo=39,Ho=42,Mt=44,zo=45,Ae=58,Jo=61,Yo=62,Wo=63,Ko=64,Nt=91,Ft=93,$o=96,Rt=123,Qo=124,Ot=125,T={};T[0]="\\0";T[7]="\\a";T[8]="\\b";T[9]="\\t";T[10]="\\n";T[11]="\\v";T[12]="\\f";T[13]="\\r";T[27]="\\e";T[34]='\\"';T[92]="\\\\";T[133]="\\N";T[160]="\\_";T[8232]="\\L";T[8233]="\\P";var Xo=["y","Y","yes","Yes","YES","on","On","ON","n","N","no","No","NO","off","Off","OFF"],Zo=/^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;function el(e,n){var t,s,i,a,r,o,l;if(n===null)return{};for(t={},s=Object.keys(n),i=0,a=s.length;i<a;i+=1)r=s[i],o=String(n[r]),r.slice(0,2)==="!!"&&(r="tag:yaml.org,2002:"+r.slice(2)),l=e.compiledTypeMap.fallback[r],l&&Et.call(l.styleAliases,o)&&(o=l.styleAliases[o]),t[r]=o;return t}function nl(e){var n,t,s;if(n=e.toString(16).toUpperCase(),e<=255)t="x",s=2;else if(e<=65535)t="u",s=4;else if(e<=4294967295)t="U",s=8;else throw new P("code point within a string may not be greater than 0xFFFFFFFF");return"\\"+t+j.repeat("0",s-n.length)+n}var tl=1,de=2;function il(e){this.schema=e.schema||en,this.indent=Math.max(1,e.indent||2),this.noArrayIndent=e.noArrayIndent||!1,this.skipInvalid=e.skipInvalid||!1,this.flowLevel=j.isNothing(e.flowLevel)?-1:e.flowLevel,this.styleMap=el(this.schema,e.styles||null),this.sortKeys=e.sortKeys||!1,this.lineWidth=e.lineWidth||80,this.noRefs=e.noRefs||!1,this.noCompatMode=e.noCompatMode||!1,this.condenseFlow=e.condenseFlow||!1,this.quotingType=e.quotingType==='"'?de:tl,this.forceQuotes=e.forceQuotes||!1,this.replacer=typeof e.replacer=="function"?e.replacer:null,this.implicitTypes=this.schema.compiledImplicit,this.explicitTypes=this.schema.compiledExplicit,this.tag=null,this.result="",this.duplicates=[],this.usedDuplicates=null}function En(e,n){for(var t=j.repeat(" ",n),s=0,i=-1,a="",r,o=e.length;s<o;)i=e.indexOf(`
`,s),i===-1?(r=e.slice(s),s=o):(r=e.slice(s,i+1),s=i+1),r.length&&r!==`
`&&(a+=t),a+=r;return a}function ze(e,n){return`
`+j.repeat(" ",e.indent*n)}function sl(e,n){var t,s,i;for(t=0,s=e.implicitTypes.length;t<s;t+=1)if(i=e.implicitTypes[t],i.resolve(n))return!0;return!1}function Ce(e){return e===Ro||e===No}function me(e){return 32<=e&&e<=126||161<=e&&e<=55295&&e!==8232&&e!==8233||57344<=e&&e<=65533&&e!==sn||65536<=e&&e<=1114111}function Mn(e){return me(e)&&e!==sn&&e!==Fo&&e!==pe}function Nn(e,n,t){var s=Mn(e),i=s&&!Ce(e);return(t?s:s&&e!==Mt&&e!==Nt&&e!==Ft&&e!==Rt&&e!==Ot)&&e!==He&&!(n===Ae&&!i)||Mn(n)&&!Ce(n)&&e===He||n===Ae&&i}function rl(e){return me(e)&&e!==sn&&!Ce(e)&&e!==zo&&e!==Wo&&e!==Ae&&e!==Mt&&e!==Nt&&e!==Ft&&e!==Rt&&e!==Ot&&e!==He&&e!==Go&&e!==Ho&&e!==Oo&&e!==Qo&&e!==Jo&&e!==Yo&&e!==Vo&&e!==Uo&&e!==Bo&&e!==Ko&&e!==$o}function al(e){return!Ce(e)&&e!==Ae}function ae(e,n){var t=e.charCodeAt(n),s;return t>=55296&&t<=56319&&n+1<e.length&&(s=e.charCodeAt(n+1),s>=56320&&s<=57343)?(t-55296)*1024+s-56320+65536:t}function Ut(e){var n=/^\n* /;return n.test(e)}var Bt=1,Je=2,Gt=3,Vt=4,K=5;function ol(e,n,t,s,i,a,r,o){var l,u=0,d=null,p=!1,m=!1,f=s!==-1,b=-1,y=rl(ae(e,0))&&al(ae(e,e.length-1));if(n||r)for(l=0;l<e.length;u>=65536?l+=2:l++){if(u=ae(e,l),!me(u))return K;y=y&&Nn(u,d,o),d=u}else{for(l=0;l<e.length;u>=65536?l+=2:l++){if(u=ae(e,l),u===pe)p=!0,f&&(m=m||l-b-1>s&&e[b+1]!==" ",b=l);else if(!me(u))return K;y=y&&Nn(u,d,o),d=u}m=m||f&&l-b-1>s&&e[b+1]!==" "}return!p&&!m?y&&!r&&!i(e)?Bt:a===de?K:Je:t>9&&Ut(e)?K:r?a===de?K:Je:m?Vt:Gt}function ll(e,n,t,s,i){e.dump=(function(){if(n.length===0)return e.quotingType===de?'""':"''";if(!e.noCompatMode&&(Xo.indexOf(n)!==-1||Zo.test(n)))return e.quotingType===de?'"'+n+'"':"'"+n+"'";var a=e.indent*Math.max(1,t),r=e.lineWidth===-1?-1:Math.max(Math.min(e.lineWidth,40),e.lineWidth-a),o=s||e.flowLevel>-1&&t>=e.flowLevel;function l(u){return sl(e,u)}switch(ol(n,o,e.indent,r,l,e.quotingType,e.forceQuotes&&!s,i)){case Bt:return n;case Je:return"'"+n.replace(/'/g,"''")+"'";case Gt:return"|"+Fn(n,e.indent)+Rn(En(n,a));case Vt:return">"+Fn(n,e.indent)+Rn(En(ul(n,r),a));case K:return'"'+cl(n)+'"';default:throw new P("impossible error: invalid scalar style")}})()}function Fn(e,n){var t=Ut(e)?String(n):"",s=e[e.length-1]===`
`,i=s&&(e[e.length-2]===`
`||e===`
`),a=i?"+":s?"":"-";return t+a+`
`}function Rn(e){return e[e.length-1]===`
`?e.slice(0,-1):e}function ul(e,n){for(var t=/(\n+)([^\n]*)/g,s=(function(){var u=e.indexOf(`
`);return u=u!==-1?u:e.length,t.lastIndex=u,On(e.slice(0,u),n)})(),i=e[0]===`
`||e[0]===" ",a,r;r=t.exec(e);){var o=r[1],l=r[2];a=l[0]===" ",s+=o+(!i&&!a&&l!==""?`
`:"")+On(l,n),i=a}return s}function On(e,n){if(e===""||e[0]===" ")return e;for(var t=/ [^ ]/g,s,i=0,a,r=0,o=0,l="";s=t.exec(e);)o=s.index,o-i>n&&(a=r>i?r:o,l+=`
`+e.slice(i,a),i=a+1),r=o;return l+=`
`,e.length-i>n&&r>i?l+=e.slice(i,r)+`
`+e.slice(r+1):l+=e.slice(i),l.slice(1)}function cl(e){for(var n="",t=0,s,i=0;i<e.length;t>=65536?i+=2:i++)t=ae(e,i),s=T[t],!s&&me(t)?(n+=e[i],t>=65536&&(n+=e[i+1])):n+=s||nl(t);return n}function pl(e,n,t){var s="",i=e.tag,a,r,o;for(a=0,r=t.length;a<r;a+=1)o=t[a],e.replacer&&(o=e.replacer.call(t,String(a),o)),(B(e,n,o,!1,!1)||typeof o>"u"&&B(e,n,null,!1,!1))&&(s!==""&&(s+=","+(e.condenseFlow?"":" ")),s+=e.dump);e.tag=i,e.dump="["+s+"]"}function Un(e,n,t,s){var i="",a=e.tag,r,o,l;for(r=0,o=t.length;r<o;r+=1)l=t[r],e.replacer&&(l=e.replacer.call(t,String(r),l)),(B(e,n+1,l,!0,!0,!1,!0)||typeof l>"u"&&B(e,n+1,null,!0,!0,!1,!0))&&((!s||i!=="")&&(i+=ze(e,n)),e.dump&&pe===e.dump.charCodeAt(0)?i+="-":i+="- ",i+=e.dump);e.tag=a,e.dump=i||"[]"}function dl(e,n,t){var s="",i=e.tag,a=Object.keys(t),r,o,l,u,d;for(r=0,o=a.length;r<o;r+=1)d="",s!==""&&(d+=", "),e.condenseFlow&&(d+='"'),l=a[r],u=t[l],e.replacer&&(u=e.replacer.call(t,l,u)),B(e,n,l,!1,!1)&&(e.dump.length>1024&&(d+="? "),d+=e.dump+(e.condenseFlow?'"':"")+":"+(e.condenseFlow?"":" "),B(e,n,u,!1,!1)&&(d+=e.dump,s+=d));e.tag=i,e.dump="{"+s+"}"}function ml(e,n,t,s){var i="",a=e.tag,r=Object.keys(t),o,l,u,d,p,m;if(e.sortKeys===!0)r.sort();else if(typeof e.sortKeys=="function")r.sort(e.sortKeys);else if(e.sortKeys)throw new P("sortKeys must be a boolean or a function");for(o=0,l=r.length;o<l;o+=1)m="",(!s||i!=="")&&(m+=ze(e,n)),u=r[o],d=t[u],e.replacer&&(d=e.replacer.call(t,u,d)),B(e,n+1,u,!0,!0,!0)&&(p=e.tag!==null&&e.tag!=="?"||e.dump&&e.dump.length>1024,p&&(e.dump&&pe===e.dump.charCodeAt(0)?m+="?":m+="? "),m+=e.dump,p&&(m+=ze(e,n)),B(e,n+1,d,!0,p)&&(e.dump&&pe===e.dump.charCodeAt(0)?m+=":":m+=": ",m+=e.dump,i+=m));e.tag=a,e.dump=i||"{}"}function Bn(e,n,t){var s,i,a,r,o,l;for(i=t?e.explicitTypes:e.implicitTypes,a=0,r=i.length;a<r;a+=1)if(o=i[a],(o.instanceOf||o.predicate)&&(!o.instanceOf||typeof n=="object"&&n instanceof o.instanceOf)&&(!o.predicate||o.predicate(n))){if(t?o.multi&&o.representName?e.tag=o.representName(n):e.tag=o.tag:e.tag="?",o.represent){if(l=e.styleMap[o.tag]||o.defaultStyle,Dt.call(o.represent)==="[object Function]")s=o.represent(n,l);else if(Et.call(o.represent,l))s=o.represent[l](n,l);else throw new P("!<"+o.tag+'> tag resolver accepts not "'+l+'" style');e.dump=s}return!0}return!1}function B(e,n,t,s,i,a,r){e.tag=null,e.dump=t,Bn(e,t,!1)||Bn(e,t,!0);var o=Dt.call(e.dump),l=s,u;s&&(s=e.flowLevel<0||e.flowLevel>n);var d=o==="[object Object]"||o==="[object Array]",p,m;if(d&&(p=e.duplicates.indexOf(t),m=p!==-1),(e.tag!==null&&e.tag!=="?"||m||e.indent!==2&&n>0)&&(i=!1),m&&e.usedDuplicates[p])e.dump="*ref_"+p;else{if(d&&m&&!e.usedDuplicates[p]&&(e.usedDuplicates[p]=!0),o==="[object Object]")s&&Object.keys(e.dump).length!==0?(ml(e,n,e.dump,i),m&&(e.dump="&ref_"+p+e.dump)):(dl(e,n,e.dump),m&&(e.dump="&ref_"+p+" "+e.dump));else if(o==="[object Array]")s&&e.dump.length!==0?(e.noArrayIndent&&!r&&n>0?Un(e,n-1,e.dump,i):Un(e,n,e.dump,i),m&&(e.dump="&ref_"+p+e.dump)):(pl(e,n,e.dump),m&&(e.dump="&ref_"+p+" "+e.dump));else if(o==="[object String]")e.tag!=="?"&&ll(e,e.dump,n,a,l);else{if(o==="[object Undefined]")return!1;if(e.skipInvalid)return!1;throw new P("unacceptable kind of an object to dump "+o)}e.tag!==null&&e.tag!=="?"&&(u=encodeURI(e.tag[0]==="!"?e.tag.slice(1):e.tag).replace(/!/g,"%21"),e.tag[0]==="!"?u="!"+u:u.slice(0,18)==="tag:yaml.org,2002:"?u="!!"+u.slice(18):u="!<"+u+">",e.dump=u+" "+e.dump)}return!0}function gl(e,n){var t=[],s=[],i,a;for(Ye(e,t,s),i=0,a=s.length;i<a;i+=1)n.duplicates.push(t[s[i]]);n.usedDuplicates=new Array(a)}function Ye(e,n,t){var s,i,a;if(e!==null&&typeof e=="object")if(i=n.indexOf(e),i!==-1)t.indexOf(i)===-1&&t.push(i);else if(n.push(e),Array.isArray(e))for(i=0,a=e.length;i<a;i+=1)Ye(e[i],n,t);else for(s=Object.keys(e),i=0,a=s.length;i<a;i+=1)Ye(e[s[i]],n,t)}function fl(e,n){n=n||{};var t=new il(n);t.noRefs||gl(e,t);var s=e;return t.replacer&&(s=t.replacer.call({"":s},"",s)),B(t,0,s,!0,!0)?t.dump+`
`:""}var vl=fl,hl={dump:vl};function rn(e,n){return function(){throw new Error("Function yaml."+e+" is removed in js-yaml 4. Use yaml."+n+" instead, which is now safe by default.")}}var bl=w,yl=st,xl=lt,ql=mt,_l=gt,Sl=en,Al=It.load,Cl=It.loadAll,Ll=hl.dump,kl=P,jl={binary:yt,float:dt,map:ot,null:ut,pairs:qt,set:_t,timestamp:ht,bool:ct,int:pt,merge:bt,omap:xt,seq:at,str:rt},wl=rn("safeLoad","load"),Tl=rn("safeLoadAll","loadAll"),Pl=rn("safeDump","dump"),ge={Type:bl,Schema:yl,FAILSAFE_SCHEMA:xl,JSON_SCHEMA:ql,CORE_SCHEMA:_l,DEFAULT_SCHEMA:Sl,load:Al,loadAll:Cl,dump:Ll,YAMLException:kl,types:jl,safeLoad:wl,safeLoadAll:Tl,safeDump:Pl};const We=e=>Qi(`/logos/${e}`),Il="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",se=We("no-img.svg"),c=(e,n=e)=>({light:We(e),dark:We(n),fallback:Il}),be={javascript:"javascript",typescript:"typescript",python:"python",java:"java",c:"c",cpp:"cplusplus","c++":"cplusplus",csharp:"csharp","c#":"csharp",go:"go",rust:"rust",kotlin:"kotlin",dart:"dart",php:"php",ruby:"ruby",swift:"swift",r:"r",scala:"scala",perl:"perl",lua:"lua",haskell:"haskell",elixir:"elixir",clojure:"clojure",matlab:"matlab",bash:"bash",powershell:"powershell",react:"react",reactjs:"react",vue:"vuejs",vuejs:"vuejs",angular:"angularjs",svelte:"svelte",nextjs:"nextjs",nuxt:"nuxtjs",nuxtjs:"nuxtjs",gatsby:"gatsby",ember:"ember",backbone:"backbonejs",jquery:"jquery",bootstrap:"bootstrap",tailwind:"tailwindcss",tailwindcss:"tailwindcss",materialui:"materialui",sass:"sass",less:"less",css:"css3",html:"html5",nodejs:"nodejs",node:"nodejs",express:"express",expressjs:"express",nestjs:"nestjs",fastify:"fastify",django:"django",flask:"flask",fastapi:"fastapi",spring:"spring",rails:"rails",laravel:"laravel",dotnet:"dotnetcore",".net":"dotnetcore",aspnet:"dotnetcore",postgresql:"postgresql",postgres:"postgresql",mysql:"mysql",mongodb:"mongodb",redis:"redis",sqlite:"sqlite",oracle:"oracle",mariadb:"mariadb",cassandra:"cassandra",neo4j:"neo4j",firebase:"firebase",dynamodb:"dynamodb",docker:"docker",kubernetes:"kubernetes",aws:"amazonwebservices",azure:"azure",gcp:"googlecloud",googlecloud:"googlecloud",heroku:"heroku",nginx:"nginx",apache:"apache",jenkins:"jenkins",circleci:"circleci",travisci:"travis",terraform:"terraform",ansible:"ansible",vagrant:"vagrant",git:"git",github:"github",gitlab:"gitlab",bitbucket:"bitbucket",vscode:"vscode",vim:"vim",jetbrains:"jetbrains",intellij:"intellij",webpack:"webpack",vite:"vitejs",babel:"babel",eslint:"eslint",npm:"npm",yarn:"yarn",pnpm:"pnpm",gradle:"gradle",maven:"maven",cmake:"cmake",jest:"jest",mocha:"mocha",jasmine:"jasmine",selenium:"selenium",cypress:"cypressio",pytest:"pytest",playwright:"playwright",streamlit:"streamlit",android:"android",flutter:"flutter",reactnative:"react",ionic:"ionic",xamarin:"xamarin",linux:"linux",ubuntu:"ubuntu",debian:"debian",centos:"centos",windows:"windows8",apple:"apple",macos:"apple",raspberrypi:"raspberrypi",graphql:"graphql",kafka:"apachekafka",rabbitmq:"rabbitmq",electron:"electron",figma:"figma",sketch:"sketch",photoshop:"photoshop",illustrator:"illustrator",blender:"blender",unity:"unity",unrealengine:"unrealengine",threejs:"threejs",opencv:"opencv",tensorflow:"tensorflow",pytorch:"pytorch",pandas:"pandas",numpy:"numpy",jupyter:"jupyter",anaconda:"anaconda",markdown:"markdown",latex:"latex",wordpress:"wordpress",drupal:"drupal",jira:"jira",confluence:"confluence",trello:"trello",slack:"slack",postman:"postman",insomnia:"insomnia",swagger:"swagger"};function he(e){return e.toLowerCase().replace(/[.\-_\s]/g,"").replace(/js$/i,"").replace(/\.js$/i,"").replace(/lang$/i,"")}function Dl(e){const n=he(e);for(const[a,r]of Object.entries(be))if(he(a)===n)return r;for(const[a,r]of Object.entries(be)){const o=he(a);if(n.includes(o)||o.includes(n))return r}const t={node:"nodejs",js:"javascript",ts:"typescript",py:"python",rb:"ruby",cpp:"cplusplus",cxx:"cplusplus",cs:"csharp",postgres:"postgresql",mongo:"mongodb",k8s:"kubernetes",tf:"terraform",vue:"vuejs",react:"react",ng:"angularjs",angular:"angularjs",next:"nextjs",nuxt:"nuxtjs",tailwind:"tailwindcss",tw:"tailwindcss",bs:"bootstrap",electron:"electron",deno:"denojs",bun:"bun",aws:"amazonwebservices",gcloud:"googlecloud",gc:"googlecloud",az:"azure",gh:"github",gl:"gitlab",vsc:"vscode",code:"vscode",vim:"vim",nvim:"neovim",neovim:"neovim",intellij:"intellij",idea:"intellij",pycharm:"pycharm",webstorm:"webstorm"};if(t[n])return t[n];let s,i=1/0;for(const[a,r]of Object.entries(be)){const o=El(n,he(a));o<i&&o<=2&&(i=o,s=r)}return s}function El(e,n){if(e.length===0)return n.length;if(n.length===0)return e.length;const t=[];for(let s=0;s<=n.length;s++)t[s]=[s];for(let s=0;s<=e.length;s++)t[0][s]=s;for(let s=1;s<=n.length;s++)for(let i=1;i<=e.length;i++)n.charAt(s-1)===e.charAt(i-1)?t[s][i]=t[s-1][i-1]:t[s][i]=Math.min(t[s-1][i-1]+1,t[s][i-1]+1,t[s-1][i]+1);return t[n.length][e.length]}const Ml=new Set(["unknown","none","null","undefined","","n/a","na","no-img","placeholder","autonomy","autonomie","creativity","créativité","creativite","teamwork","travail d'équipe","travail equipe","communication","leadership","problem-solving","problem solving","résolution de problèmes","adaptability","adaptabilité","adaptabilite","time-management","time management","gestion du temps","critical-thinking","critical thinking","pensée critique","collaboration","motivation","organization","organisation","flexibility","flexibilité","flexibilite","patience","empathy","empathie","curiosity","curiosité","curiosite","rigor","rigueur","initiative","perseverance","persévérance","perseverance","soft skill","soft skills"]);function Ht(e){if(!e)return!0;const n=e.toLowerCase().trim();return n.length===0?!0:Ml.has(n)}function Nl(e,n="original"){if(Ht(e))return;let t=be[e.toLowerCase()];if(t||(t=Dl(e)),!!t)return`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${t}/${t}-${n}.svg`}function Fl(e){if(Ht(e))return{light:se,dark:se,fallback:se};const n=Nl(e);if(n)return{light:n,dark:n,fallback:se};const s=`https://cdn.simpleicons.org/${e.toLowerCase().replace(/[^a-z0-9]/g,"")}`;return{light:s,dark:s,fallback:se}}const $={AWS:c("aws.svg"),Bootstrap:c("bootstrap.svg"),C:c("c.svg"),Cpp:c("cpp.svg"),Celery:c("celery.svg"),Django:c("django.svg"),FastApi:c("fastapi"),Flask:c("flask.svg"),Go:c("go.svg"),Kafka:c("kafka.svg"),Neo4j:c("neo4j.svg"),Nginx:c("nginx.svg"),Numpy:c("numpy.svg"),Pandas:c("pandas.svg"),RabbitMQ:c("rabbitmq.svg"),Rust:c("rust.svg"),Scrapy:c("scrapy.png"),Selenium:c("selenium.svg"),Docker:c("docker.svg"),Kubernetes:c("kubernetes.svg"),Csharp:c("csharp.svg"),CSharp:c("csharp.svg"),Xamarin:c("xamarin.svg"),TypeScript:c("typescript-original.svg"),VueJs:c("vuejs-original.svg"),ReactJs:c("react.svg"),Dart:c("dart.png"),Kotlin:c("kotlin-original.svg"),Python:c("python.png"),NodeJs:c("nodejs-original.svg"),Deno:c("deno.svg"),Svelte:c("svelte.svg"),ExpressJs:c("express.png"),Express:c("express.png"),JavaScript:c("javascript-original.svg"),Fastify:c("fastify.svg"),NestJs:c("nest.svg"),Quasar:c("quasar.svg"),SolidJs:c("solid.svg"),Electron:c("electron.png"),Flutter:c("flutter.svg"),Java:c("java.png"),AdonisJs:c("adonis.png"),Android:c("android.png"),Angular:c("angular.png"),PostgreSQL:c("postgresql-original.svg"),Firebase:c("firebase.png"),Sass:c("sass.png"),Unknown:c("no-img.svg"),MongoDB:c("mongodb.svg"),Redis:c("redis.svg"),Tailwind:c("tailwind.svg"),TailwindCSS:c("tailwindcss-original.svg"),HTML:c("html.svg"),Premiere:c("premiere.svg"),Photoshop:c("photoshop.svg"),CSS:c("css.svg"),AfterEffects:c("after-effects.svg"),Illustrator:c("illustrator.svg"),Nuxt:c("nuxt.png"),Vite:c("vite.png"),Vitest:c("vitest.svg"),Jest:c("jest.png"),Unocss:c("unocss.svg"),Ruvy:c("ruvy.svg"),Postcss:c("postcss.svg"),Soleil:c("soleil.png"),AGH:c("agh.png"),InTech:c("intech.png"),ESIEA:c("esiea.png"),PMF:c("pmf.png"),Git:c("git-original.svg"),Linux:c("linux-original.svg"),SQLite:c("sqlite-original.svg"),CICD:c("cicd.svg"),Arduino:c("arduino-original.svg"),DotNet:c("dotnet-original.svg"),Grafana:c("grafana-original.svg"),Hugo:c("hugo-original.svg"),Ionic:c("ionic-original.svg"),MariaDB:c("mariadb-original.svg"),MySQL:c("mysql-original.svg"),OpenCV:c("opencv-original.svg"),Oracle:c("oracle-original.svg"),PHP:c("php-original.svg"),Postman:c("postman-original.svg"),Spring:c("spring-original.svg"),TensorFlow:c("tensorflow-original.svg"),Unity:c("unity-original.svg"),Apache:c("apache-original.svg"),Apache2:c("apache-original.svg"),Playwright:c("playwright-original.svg"),Streamlit:c("streamlit-original.svg"),RedisDB:c("redis-original.svg"),PaperMC:c("papermc.svg"),Velocity:c("velocity.svg"),BungeeCord:c("bungeecord.svg"),Spigot:c("spigot.svg"),Skript:c("skript.svg"),OpenXR:c("openxr.svg"),IntelliJ:c("intellij-original.svg"),PyCharm:c("pycharm-original.svg"),WebStorm:c("webstorm-original.svg"),CLion:c("clion-original.svg"),Rider:c("rider-original.svg"),DataGrip:c("datagrip-original.svg"),AndroidStudio:c("androidstudio-original.svg"),VSCode:c("vscode-original.svg"),Excel:c("excel.svg"),PowerPoint:c("powerpoint.svg"),Word:c("word.svg"),Jira:c("jira-original.svg"),Confluence:c("confluence-original.svg"),Teamwork:c("no-img.svg"),Autonomy:c("no-img.svg"),Creativity:c("no-img.svg"),MiniArticle:c("mini-article.png")};var M=(e=>(e.FullTime="Full-time",e.PartTime="Part-time",e.SelfEmployed="Self-employed",e.Freelance="Freelance",e.Contract="Contract",e.Internship="Internship",e.Apprenticeship="Apprenticeship",e))(M||{}),L=(e=>(e.Image="image",e.PDF="pdf",e.Document="document",e.Archive="archive",e.Video="video",e.Audio="audio",e.Code="code",e.Link="link",e.Other="other",e))(L||{});function ke(e,n=new Date){if(e instanceof Date&&!isNaN(e.getTime()))return e;if(typeof e=="string"){const t=e.match(/^(\d{4})-(\d{2})-(\d{2})$/);if(t){const[,i,a,r]=t;return new Date(parseInt(i),parseInt(a)-1,parseInt(r))}const s=new Date(e);if(!isNaN(s.getTime()))return s}return console.log("[parseDate] Failed to parse:",e,"- using fallback"),n}function je(e){if(e){if(e instanceof Date&&!isNaN(e.getTime()))return e;if(typeof e=="string"){const n=e.match(/^(\d{4})-(\d{2})-(\d{2})$/);if(n){const[,s,i,a]=n;return new Date(parseInt(s),parseInt(i)-1,parseInt(a))}const t=new Date(e);if(!isNaN(t.getTime()))return t}}}function Oe(e){return e.light.includes("no-img")||e.light===$.Unknown.light}function ee(e){if(!e)return $.Unknown;if(e.startsWith("http://")||e.startsWith("https://"))return{light:e,dark:e,fallback:$.Unknown.light};let n=$[e];if(n&&!Oe(n))return n;const t=[e,e.charAt(0).toUpperCase()+e.slice(1),e.toUpperCase(),e.toLowerCase(),e.replace(/(?:^|[-_])(\w)/g,(r,o)=>o?o.toUpperCase():"")];for(const r of t)if(n=$[r],n&&!Oe(n))return n;const s={react:"ReactJs",node:"NodeJs",js:"JavaScript",ts:"TypeScript",vue:"VueJs",express:"ExpressJs",postgres:"PostgreSQL",postgresql:"PostgreSQL",mongo:"MongoDB",tailwindcss:"Tailwind"},i=e.toLowerCase();return s[i]&&(n=$[s[i]],n&&!Oe(n))?n:Fl(e)}function an(e){return e?e.replace(/<[^>]*>/g,"").replace(/^#{1,6}\s+/gm,"").replace(/\*\*([^*]+)\*\*/g,"$1").replace(/\*([^*]+)\*/g,"$1").replace(/__([^_]+)__/g,"$1").replace(/_([^_]+)_/g,"$1").replace(/\[([^\]]+)\]\([^)]+\)/g,"$1").replace(/!\[[^\]]*\]\([^)]+\)/g,"").replace(/```[\s\S]*?```/g,"").replace(/`([^`]+)`/g,"$1").replace(/^[\s]*[-*+]\s+/gm,"").replace(/^[\s]*\d+\.\s+/gm,"").replace(/^>\s+/gm,"").replace(/^[-*_]{3,}$/gm,"").replace(/\n{2,}/g," ").replace(/\n/g," ").replace(/\s{2,}/g," ").trim():""}function we(e){return Array.isArray(e)?e.map(n=>({to:n.to||"",label:n.label||"",newTab:n.newTab??!0})):[]}function Rl(e){return Array.isArray(e)?e.map(n=>({src:n.src||"",label:n.label||""})):[]}function Gn(e){const n=e.toLowerCase();return/\.(jpg|jpeg|png|gif|webp|svg|bmp|ico)(\?.*)?$/i.test(n)||n.includes("unsplash.com")||n.includes("imgur.com")?L.Image:/\.pdf(\?.*)?$/i.test(n)?L.PDF:/\.(doc|docx|odt|rtf|txt|xls|xlsx|ppt|pptx)(\?.*)?$/i.test(n)?L.Document:/\.(zip|rar|7z|tar|gz|bz2)(\?.*)?$/i.test(n)?L.Archive:/\.(mp4|webm|avi|mov|mkv)(\?.*)?$/i.test(n)||n.includes("youtube.com")||n.includes("youtu.be")||n.includes("vimeo.com")?L.Video:/\.(mp3|wav|ogg|flac|aac)(\?.*)?$/i.test(n)?L.Audio:/\.(js|ts|py|java|c|cpp|cs|go|rs|rb|php|html|css|json|xml|yaml|yml|sh|bash)(\?.*)?$/i.test(n)||n.includes("github.com")||n.includes("gitlab.com")||n.includes("gist.github.com")?L.Code:n.startsWith("http://")||n.startsWith("https://")?L.Link:L.Other}function Ol(e){return{[L.Image]:"i-carbon-image",[L.PDF]:"i-carbon-document-pdf",[L.Document]:"i-carbon-document",[L.Archive]:"i-carbon-zip",[L.Video]:"i-carbon-video",[L.Audio]:"i-carbon-music",[L.Code]:"i-carbon-code",[L.Link]:"i-carbon-link",[L.Other]:"i-carbon-attachment"}[e]||"i-carbon-attachment"}function Te(e){return Array.isArray(e)?e.map(n=>{const t=n.src||n.url||"",s=n.type&&L[n.type]||Gn(t),i=t.startsWith("http://")||t.startsWith("https://");return{label:n.label||n.name||"Pièce jointe",src:t,type:s,description:n.description||void 0,size:n.size||void 0,icon:n.icon||Ol(s),newTab:n.newTab??i}}):[]}function Ul(e){return{FullTime:M.FullTime,"Full-time":M.FullTime,PartTime:M.PartTime,"Part-time":M.PartTime,SelfEmployed:M.SelfEmployed,"Self-employed":M.SelfEmployed,Freelance:M.Freelance,Contract:M.Contract,Internship:M.Internship,Apprenticeship:M.Apprenticeship}[e||""]||M.Contract}function fe(e){return(e.split("/").pop()||"").replace(/\.(md|yaml|yml)$/,"")}function ne(e,n){const t=e.replace(/\r\n/g,`
`).replace(/\r/g,`
`),s=/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/,i=t.match(s);if(!i)return console.log(`[parseMarkdownFile] No frontmatter found for ${n}, raw starts with:`,t.substring(0,50)),{meta:{slug:n},content:t};const[,a,r]=i;try{const o=ge.load(a);return console.log(`[parseMarkdownFile] Parsed ${n}:`,JSON.stringify(o)),{meta:{...o,slug:n},content:r.trim()}}catch(o){return console.error(`Error parsing frontmatter for ${n}:`,o),{meta:{slug:n},content:(r==null?void 0:r.trim())||t}}}const Ke=[{name:"Programming Languages",slug:"pro-lang"},{name:"Frameworks",slug:"framework"},{name:"Libraries",slug:"library"},{name:"Languages",slug:"lang"},{name:"Databases",slug:"db"},{name:"ORMs",slug:"orm"},{name:"DevOps",slug:"devops"},{name:"Testing",slug:"test"},{name:"Dev Tools",slug:"devtools"},{name:"Markup & Style",slug:"markup-style"},{name:"Design",slug:"design"},{name:"Soft Skills",slug:"soft"}];function Bl(e){if(e)return Ke.find(n=>n.slug===e)}const Gl=Object.assign({"/content/blog/alternance-synchrotron-soleil-bilan.md":Xi,"/content/blog/blog-platform-demo.md":Zi,"/content/blog/creer-portfolio-sveltekit.md":es,"/content/blog/developpement-mobile-flutter.md":ns,"/content/blog/georges-le-chat.md":ts,"/content/blog/getting-started-with-svelte.md":is,"/content/blog/mini-article.md":ss,"/content/blog/modern-css-techniques.md":rs,"/content/blog/projet-cifar10-deep-learning.md":as,"/content/blog/projet-comet-learning-formation-minecraft.md":os,"/content/blog/projet-foot-ai-computer-vision.md":ls,"/content/blog/projet-invr-initiation-realite-virtuelle.md":us,"/content/blog/sun-auto-automatisation-synchrotron-soleil.md":cs,"/content/blog/sveltekit-full-stack-framework.md":ps,"/content/blog/tap-plateforme-tests-automatises-allure.md":ds,"/content/blog/travail-equipe-projets-scolaires.md":ms,"/content/blog/typescript-best-practices.md":gs}),Vl=Object.assign({"/content/projects/comet-learning.md":fs,"/content/projects/flutter-movie-manip.md":vs,"/content/projects/flutter-todo-list.md":hs,"/content/projects/foot-ai.md":bs,"/content/projects/hr-data-analytics.md":ys,"/content/projects/invr.md":xs,"/content/projects/nano-pong.md":qs,"/content/projects/quiz-ai.md":_s,"/content/projects/snake-game-ai.md":Ss,"/content/projects/squat-counter-ia.md":As,"/content/projects/sun-auto.md":Cs,"/content/projects/svelte-blog.md":Ls,"/content/projects/tap.md":ks,"/content/projects/template-project.md":js,"/content/projects/template-svelte.md":ws,"/content/projects/tpvpocifar.md":Ts}),Vn=Object.assign({"/content/skills/android-studio.md":Ps,"/content/skills/apache2.md":Is,"/content/skills/arduino.md":Ds,"/content/skills/autonomy.md":Es,"/content/skills/bungeecord.md":Ms,"/content/skills/c.md":Ns,"/content/skills/ci-cd.md":Fs,"/content/skills/clion.md":Rs,"/content/skills/confluence.md":Os,"/content/skills/creativity.md":Us,"/content/skills/csharp.md":Bs,"/content/skills/css.md":Gs,"/content/skills/dart.md":Vs,"/content/skills/datagrip.md":Hs,"/content/skills/docker-swarm.md":zs,"/content/skills/docker.md":Js,"/content/skills/dotnet.md":Ys,"/content/skills/electron.md":Ws,"/content/skills/excel.md":Ks,"/content/skills/expressjs.md":$s,"/content/skills/firebase.md":Qs,"/content/skills/flask.md":Xs,"/content/skills/flutter.md":Zs,"/content/skills/git.md":er,"/content/skills/grafana.md":nr,"/content/skills/html.md":tr,"/content/skills/hugo.md":ir,"/content/skills/intellij.md":sr,"/content/skills/ionic.md":rr,"/content/skills/java.md":ar,"/content/skills/javafx.md":or,"/content/skills/javascript.md":lr,"/content/skills/jee.md":ur,"/content/skills/jira.md":cr,"/content/skills/kotlin.md":pr,"/content/skills/kubernetes.md":dr,"/content/skills/linux.md":mr,"/content/skills/mariadb.md":gr,"/content/skills/minikube.md":fr,"/content/skills/mongodb.md":vr,"/content/skills/mysql.md":hr,"/content/skills/nginx.md":br,"/content/skills/nodejs.md":yr,"/content/skills/opencv.md":xr,"/content/skills/openxr.md":qr,"/content/skills/oracle.md":_r,"/content/skills/pandas.md":Sr,"/content/skills/papermc.md":Ar,"/content/skills/photoshop.md":Cr,"/content/skills/php.md":Lr,"/content/skills/playwright.md":kr,"/content/skills/postgresql.md":jr,"/content/skills/postman.md":wr,"/content/skills/powerpoint.md":Tr,"/content/skills/pycharm.md":Pr,"/content/skills/python.md":Ir,"/content/skills/reactjs.md":Dr,"/content/skills/redis.md":Er,"/content/skills/rider.md":Mr,"/content/skills/rust.md":Nr,"/content/skills/sass.md":Fr,"/content/skills/selenium.md":Rr,"/content/skills/skript.md":Or,"/content/skills/spigot.md":Ur,"/content/skills/spring.md":Br,"/content/skills/springboot.md":Gr,"/content/skills/sqlite.md":Vr,"/content/skills/streamlit.md":Hr,"/content/skills/svelte.md":zr,"/content/skills/tailwind.md":Jr,"/content/skills/teamwork.md":Yr,"/content/skills/tensorflow.md":Wr,"/content/skills/typescript.md":Kr,"/content/skills/unity.md":$r,"/content/skills/velocity.md":Qr,"/content/skills/vscode.md":Xr,"/content/skills/vuejs.md":Zr,"/content/skills/webstorm.md":ea,"/content/skills/word.md":na}),Hl=Object.assign({"/content/experience/agh-batiment.md":ta,"/content/experience/synchrotron-soleil.md":ia}),zl=Object.assign({"/content/education/esiea.md":sa,"/content/education/intech.md":ra,"/content/education/pmf.md":aa});let Ue=null;function on(){if(Ue)return Ue;console.log("[loadAllSkills] Starting to load skills..."),console.log("[loadAllSkills] skillFiles keys:",Object.keys(Vn));const e=[];for(const[n,t]of Object.entries(Vn)){const s=fe(n),{meta:i,content:a}=ne(t,s);if(i.published===!1){console.log(`[loadAllSkills] Skipping ${s} (published: false)`);continue}console.log(`[loadAllSkills] Processing ${s}:`,{name:i.name,logo:i.logo,rawLogoType:typeof i.logo}),e.push({slug:i.slug||s,name:i.name||s,logo:ee(i.logo),description:a||i.name||"",color:i.color||"gray",category:Bl(i.category)})}return Ue=e,e}function zt(...e){const n=on();return e.length===0?n:n.filter(t=>e.includes(t.slug))}function fu(e=""){const n=on(),t=[],s=[];return n.forEach(i=>{if(e.trim()&&!i.name.toLowerCase().includes(e.trim().toLowerCase()))return;if(!i.category){s.push(i);return}let a=t.find(r=>{var o;return r.category.slug===((o=i.category)==null?void 0:o.slug)});a||(a={items:[],category:i.category},t.push(a)),a.items.push(i)}),s.length!==0&&t.push({category:{name:"Others",slug:"others"},items:s}),t.sort((i,a)=>{const r=Ke.findIndex(l=>l.slug===i.category.slug),o=Ke.findIndex(l=>l.slug===a.category.slug);return r===-1?1:o===-1?-1:r-o}),t.forEach(i=>{i.items.sort((a,r)=>a.name.localeCompare(r.name))}),t}function Jl(){const e=[];for(const[n,t]of Object.entries(Gl)){const s=fe(n),{meta:i,content:a}=ne(t,s);i.published!==!1&&e.push({slug:i.slug||s,name:i.name||i.title||s,title:i.title||i.name||s,logo:ee(i.logo),excerpt:i.excerpt||"",shortDescription:i.excerpt||"",description:a,content:a,author:i.author||"Anonymous",publishedAt:ke(i.publishedAt),updatedAt:je(i.updatedAt),tags:i.tags||[],coverImage:i.coverImage?ee(i.coverImage):void 0,readingTime:i.readingTime||Math.ceil(a.split(/\s+/).length/200),color:i.color,links:we(i.links),pinned:i.pinned||!1})}return e.sort((n,t)=>t.publishedAt.getTime()-n.publishedAt.getTime())}function Jt(){var n,t;const e=[];for(const[s,i]of Object.entries(Vl)){const a=fe(s),{meta:r,content:o}=ne(i,a);r.published!==!1&&e.push({slug:r.slug||a,name:r.name||a,logo:ee(r.logo),shortDescription:r.shortDescription||an(o).substring(0,200),description:o,color:r.color||"gray",type:r.type||"Project",category:r.category?Yl(r.category):void 0,period:{from:ke((n=r.period)==null?void 0:n.from),to:je((t=r.period)==null?void 0:t.to)},skills:zt(...r.skills||[]),links:we(r.links),screenshots:Rl(r.screenshots),attachments:Te(r.attachments),pinned:r.pinned||!1})}return e.sort((s,i)=>{const a=i.period.from.getTime()-s.period.from.getTime();return a!==0?a:s.name.localeCompare(i.name)})}const $e=[{slug:"technique",name:"💻 Projets Techniques"},{slug:"humain",name:"🤝 Projets Humains"}];function Yl(e){return $e.find(t=>t.slug===e.toLowerCase())||{name:e,slug:e.toLowerCase()}}function vu(e="",n=[]){const t=Jt(),s=[],i=[];return t.forEach(a=>{if(e.trim()&&!a.name.toLowerCase().includes(e.trim().toLowerCase())||n.length>0&&!a.skills.some(o=>n.includes(o.slug)))return;if(!a.category){i.push(a);return}let r=s.find(o=>{var l;return o.category.slug===((l=a.category)==null?void 0:l.slug)});r||(r={items:[],category:a.category},s.push(r)),r.items.push(a)}),i.length!==0&&s.push({category:{name:"📁 Autres",slug:"others"},items:i}),s.sort((a,r)=>{const o=$e.findIndex(u=>u.slug===a.category.slug),l=$e.findIndex(u=>u.slug===r.category.slug);return o===-1?1:l===-1?-1:o-l}),s}function Wl(){var n,t,s;const e=[];for(const[i,a]of Object.entries(Hl)){const r=fe(i),{meta:o,content:l}=ne(a,r);o.published!==!1&&(console.log(`[loadAllExperiences] ${r}:`,{name:o.name,shortDescription:(n=o.shortDescription)==null?void 0:n.substring(0,50),period:o.period}),e.push({slug:o.slug||r,name:o.name||r,logo:ee(o.logo),shortDescription:o.shortDescription||an(l).substring(0,200),description:l,company:o.company||"",location:o.location||"",contract:Ul(o.contract),type:o.type||"Development",color:o.color||"gray",period:{from:ke((t=o.period)==null?void 0:t.from),to:je((s=o.period)==null?void 0:s.to)},skills:zt(...o.skills||[]),links:we(o.links),attachments:Te(o.attachments)}))}return e.sort((i,a)=>a.period.from.getTime()-i.period.from.getTime())}function Kl(){var n,t;const e=[];for(const[s,i]of Object.entries(zl)){const a=fe(s),{meta:r,content:o}=ne(i,a);r.published!==!1&&e.push({slug:r.slug||a,name:r.name||a,logo:ee(r.logo),shortDescription:r.shortDescription||an(o).substring(0,200),description:o,degree:r.degree||"",organization:r.organization||"",location:r.location||"",color:r.color,period:{from:ke((n=r.period)==null?void 0:n.from),to:je((t=r.period)==null?void 0:t.to)},subjects:r.subjects||[],links:we(r.links),attachments:Te(r.attachments)})}return e.sort((s,i)=>i.period.from.getTime()-s.period.from.getTime())}const $l=Object.assign({"/content/about.md":oa});function Ql(){const e=Object.values($l)[0];if(!e)return console.log("[loadAboutPage] No about.md file found"),{title:"À propos",content:"",attachments:[]};const{meta:n,content:t}=ne(e,"about");return{title:n.title||"À propos",content:t,attachments:Te(n.attachments)}}const Xl=Object.assign({"/content/site.yaml":la}),Zl=Object.assign({"/content/pages/home.yaml":ua}),eu=Object.assign({"/content/pages/resume.yaml":ca}),nu=Object.assign({"/content/pages/contact.yaml":pa});function ln(){const e=Object.values(Xl)[0];if(!e)return{firstName:"Prénom",lastName:"NOM",jobTitle:"Développeur",email:"contact@example.com",socialLinks:[],inConstruction:{enabled:!1,title:"",message:""}};const n=e.replace(/\r\n/g,`
`).replace(/\r/g,`
`),t=ge.load(n),s=t.inConstruction;return{firstName:t.firstName||"Prénom",lastName:t.lastName||"NOM",jobTitle:t.jobTitle||"Développeur",email:t.email||"contact@example.com",socialLinks:(t.socialLinks||[]).map(i=>({label:i.label,href:i.href,icon:i.icon})),inConstruction:{enabled:(s==null?void 0:s.enabled)??!1,title:(s==null?void 0:s.title)||"",message:(s==null?void 0:s.message)||""}}}function tu(){const e=ln(),n=Object.values(Zl)[0];let t="Accueil",s="";if(n){const i=n.replace(/\r\n/g,`
`).replace(/\r/g,`
`),a=ge.load(i);t=a.title||"Accueil";const r=a.hero;s=(r==null?void 0:r.description)||""}return{title:t,heroDescription:s,socialLinks:e.socialLinks,fullName:`${e.firstName} ${e.lastName}`}}function iu(){const e=Object.values(eu)[0];if(!e)return{title:"CV",pdfPath:"/pdf/cv.pdf",downloadLabel:"Télécharger",fullscreenLabel:"Plein écran"};const n=e.replace(/\r\n/g,`
`).replace(/\r/g,`
`),t=ge.load(n);return{title:t.title||"CV",pdfPath:t.pdfPath||"/pdf/cv.pdf",downloadLabel:t.downloadLabel||"Télécharger",fullscreenLabel:t.fullscreenLabel||"Plein écran"}}function su(){const e=ln(),n=Object.values(nu)[0],t={title:"Contact",description:"N'hésitez pas à me contacter.",email:e.email,form:{nameLabel:"Nom",namePlaceholder:"Votre nom",emailLabel:"Email",emailPlaceholder:"votre@email.com",messageLabel:"Message",messagePlaceholder:"Votre message...",submitLabel:"Envoyer",sendingLabel:"Envoi en cours..."},messages:{success:"Message envoyé avec succès !",error:"Une erreur est survenue.",validationError:"Veuillez remplir tous les champs."}};if(!n)return t;const s=n.replace(/\r\n/g,`
`).replace(/\r/g,`
`),i=ge.load(s),a=i.form,r=i.messages;return{title:i.title||t.title,description:i.description||t.description,email:i.email||t.email,form:{nameLabel:(a==null?void 0:a.nameLabel)||t.form.nameLabel,namePlaceholder:(a==null?void 0:a.namePlaceholder)||t.form.namePlaceholder,emailLabel:(a==null?void 0:a.emailLabel)||t.form.emailLabel,emailPlaceholder:(a==null?void 0:a.emailPlaceholder)||t.form.emailPlaceholder,messageLabel:(a==null?void 0:a.messageLabel)||t.form.messageLabel,messagePlaceholder:(a==null?void 0:a.messagePlaceholder)||t.form.messagePlaceholder,submitLabel:(a==null?void 0:a.submitLabel)||t.form.submitLabel,sendingLabel:(a==null?void 0:a.sendingLabel)||t.form.sendingLabel},messages:{success:(r==null?void 0:r.success)||t.messages.success,error:(r==null?void 0:r.error)||t.messages.error,validationError:(r==null?void 0:r.validationError)||t.messages.validationError}}}const Hn=ln(),hu=tu(),bu=iu(),yu=su(),xu=Ql(),qu={title:"Blog",items:Jl()},_u={title:"Projets",items:Jt()},Su={title:"Skills",items:on()},Au={title:"Expérience",items:Wl()},Cu={title:"Formation",items:Kl()},ru=`${Hn.firstName} ${Hn.lastName}`,au={title:ru,icon:"i-carbon-code"},ou=[{title:"À Propos",icon:"i-carbon-user",href:"/about"},{title:"Skills",icon:"i-carbon-assembly-cluster",href:"/skills"},{title:"Projets",icon:"i-carbon-cube",href:"/projects"},{title:"Experience",icon:"i-carbon-development",href:"/experience"},{title:"Formation",icon:"i-carbon-education",href:"/education"},{title:"Blog",icon:"i-carbon-blog",href:"/blog"},{title:"CV",icon:"i-carbon-document",href:"/resume"},{title:"Contact",icon:"i-carbon-email",href:"/contact"}],Lu={left:au,items:ou};export{$ as A,qu as B,yu as C,Au as E,hu as H,Lu as N,_u as P,bu as R,Su as S,cu as a,mu as b,Cu as c,fu as d,pu as e,Hi as f,zt as g,xu as h,gu as i,L as j,vu as k,Bi as l,Hn as m,zi as n,ie as o,du as p,Ui as q,Yi as r,xe as s};
