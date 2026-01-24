import{al as we,w as Qt,aY as zn,q as I,at as Ie,aH as Kt,v as Wt,g as le,aq as Yt,ar as $t,as as vn,au as ae,an as ve,aB as Xt,aZ as Zt,a_ as hn,ah as ei,a$ as U,am as ue,ap as ni,G as ti,a8 as Hn,b0 as $e,b1 as ii,b2 as si,m as ri,T as bn,b3 as oi,ai as Qn,ak as Kn,b4 as De,I as Wn,b5 as ai,b6 as li,aj as qe,aC as ui,b7 as Yn,C as $n,b8 as ci,J as pi,b9 as di,ba as mi,bb as gi,bc as fi,bd as vi,D as hi,be as bi,bf as qi,bg as xi,bh as yi,bi as Si,bj as Ci,bk as ji,bl as Ai,bm as Li,a7 as Pi,av as ki,B as qn,o as _i,bn as Ti,a5 as xn,l as wi,Y as Ii,bo as Di}from"./_vsrSwkU.js";import{b as Mi,r as Ei}from"./16nJmpNK.js";function mu(e,n){return n}function Ri(e,n,t){for(var i=[],s=n.length,o,r=n.length,a=0;a<s;a++){let p=n[a];Kn(p,()=>{if(o){if(o.pending.delete(p),o.done.add(p),o.pending.size===0){var m=e.outrogroups;Ve($e(o.done)),m.delete(o),m.size===0&&(e.outrogroups=null)}}else r-=1},!1)}if(r===0){var l=i.length===0&&t!==null;if(l){var u=t,d=u.parentNode;li(d),d.append(u),e.items.clear()}Ve(n,!l)}else o={pending:new Set(n),done:new Set},(e.outrogroups??(e.outrogroups=new Set)).add(o)}function Ve(e,n=!0){for(var t=0;t<e.length;t++)qe(e[t],n)}var yn;function gu(e,n,t,i,s,o=null){var r=e,a=new Map,l=(n&zn)!==0;if(l){var u=e;r=I?Ie(Kt(u)):u.appendChild(we())}I&&Wt();var d=null,p=ti(()=>{var h=t();return Hn(h)?h:h==null?[]:$e(h)}),m,f=!0;function b(){g.fallback=d,Oi(g,m,r,n,i),d!==null&&(m.length===0?(d.f&U)===0?Qn(d):(d.f^=U,re(d,null,r)):Kn(d,()=>{d=null}))}var q=Qt(()=>{m=le(p);var h=m.length;let x=!1;if(I){var R=Yt(r)===$t;R!==(h===0)&&(r=vn(),Ie(r),ae(!1),x=!0)}for(var j=new Set,O=ei,S=ni(),y=0;y<h;y+=1){I&&ve.nodeType===Xt&&ve.data===Zt&&(r=ve,x=!0,ae(!1));var A=m[y],M=i(A,y),C=f?null:a.get(M);C?(C.v&&hn(C.v,A),C.i&&hn(C.i,y),S&&O.skipped_effects.delete(C.e)):(C=Ni(a,f?r:yn??(yn=we()),A,M,y,s,n,t),f||(C.e.f|=U),a.set(M,C)),j.add(M)}if(h===0&&o&&!d&&(f?d=ue(()=>o(r)):(d=ue(()=>o(yn??(yn=we()))),d.f|=U)),I&&h>0&&Ie(vn()),!f)if(S){for(const[H,Q]of a)j.has(H)||O.skipped_effects.add(Q.e);O.oncommit(b),O.ondiscard(()=>{})}else b();x&&ae(!0),le(p)}),g={effect:q,items:a,outrogroups:null,fallback:d};f=!1,I&&(r=ve)}function Oi(e,n,t,i,s){var C,H,Q,un,cn,pn,dn,mn,gn;var o=(i&ai)!==0,r=n.length,a=e.items,l=e.effect.first,u,d=null,p,m=[],f=[],b,q,g,h;if(o)for(h=0;h<r;h+=1)b=n[h],q=s(b,h),g=a.get(q).e,(g.f&U)===0&&((H=(C=g.nodes)==null?void 0:C.a)==null||H.measure(),(p??(p=new Set)).add(g));for(h=0;h<r;h+=1){if(b=n[h],q=s(b,h),g=a.get(q).e,e.outrogroups!==null)for(const F of e.outrogroups)F.pending.delete(g),F.done.delete(g);if((g.f&U)!==0)if(g.f^=U,g===l)re(g,null,t);else{var x=d?d.next:l;g===e.effect.last&&(e.effect.last=g.prev),g.prev&&(g.prev.next=g.next),g.next&&(g.next.prev=g.prev),J(e,d,g),J(e,g,x),re(g,x,t),d=g,m=[],f=[],l=d.next;continue}if((g.f&De)!==0&&(Qn(g),o&&((un=(Q=g.nodes)==null?void 0:Q.a)==null||un.unfix(),(p??(p=new Set)).delete(g))),g!==l){if(u!==void 0&&u.has(g)){if(m.length<f.length){var R=f[0],j;d=R.prev;var O=m[0],S=m[m.length-1];for(j=0;j<m.length;j+=1)re(m[j],R,t);for(j=0;j<f.length;j+=1)u.delete(f[j]);J(e,O.prev,S.next),J(e,d,O),J(e,S,R),l=R,d=S,h-=1,m=[],f=[]}else u.delete(g),re(g,l,t),J(e,g.prev,g.next),J(e,g,d===null?e.effect.first:d.next),J(e,d,g),d=g;continue}for(m=[],f=[];l!==null&&l!==g;)(u??(u=new Set)).add(l),f.push(l),l=l.next;if(l===null)continue}(g.f&U)===0&&m.push(g),d=g,l=g.next}if(e.outrogroups!==null){for(const F of e.outrogroups)F.pending.size===0&&(Ve($e(F.done)),(cn=e.outrogroups)==null||cn.delete(F));e.outrogroups.size===0&&(e.outrogroups=null)}if(l!==null||u!==void 0){var y=[];if(u!==void 0)for(g of u)(g.f&De)===0&&y.push(g);for(;l!==null;)(l.f&De)===0&&l!==e.fallback&&y.push(l),l=l.next;var A=y.length;if(A>0){var M=(i&zn)!==0&&r===0?t:null;if(o){for(h=0;h<A;h+=1)(dn=(pn=y[h].nodes)==null?void 0:pn.a)==null||dn.measure();for(h=0;h<A;h+=1)(gn=(mn=y[h].nodes)==null?void 0:mn.a)==null||gn.fix()}Ri(e,y,M)}}o&&Wn(()=>{var F,fn;if(p!==void 0)for(g of p)(fn=(F=g.nodes)==null?void 0:F.a)==null||fn.apply()})}function Ni(e,n,t,i,s,o,r,a){var l=(r&ii)!==0?(r&si)===0?ri(t,!1,!1):bn(t):null,u=(r&oi)!==0?bn(s):null;return{v:l,i:u,e:ue(()=>(o(n,l??t,u??s,a),()=>{e.delete(i)}))}}function re(e,n,t){if(e.nodes)for(var i=e.nodes.start,s=e.nodes.end,o=n&&(n.f&U)===0?n.nodes.start:t;i!==null;){var r=ui(i);if(o.before(i),i===s)return;i=r}}function J(e,n,t){n===null?e.effect.first=t:n.next=t,t===null?e.effect.last=n:t.prev=n}function Fi(e,n){var t=void 0,i;Yn(()=>{t!==(t=n())&&(i&&(qe(i),i=null),t&&(i=ue(()=>{$n(()=>t(e))})))})}function Xn(e){var n,t,i="";if(typeof e=="string"||typeof e=="number")i+=e;else if(typeof e=="object")if(Array.isArray(e)){var s=e.length;for(n=0;n<s;n++)e[n]&&(t=Xn(e[n]))&&(i&&(i+=" "),i+=t)}else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}function Ui(){for(var e,n,t=0,i="",s=arguments.length;t<s;t++)(e=arguments[t])&&(n=Xn(e))&&(i&&(i+=" "),i+=n);return i}function Vi(e){return typeof e=="object"?Ui(e):e??""}const Sn=[...` 	
\r\f \v\uFEFF`];function Ji(e,n,t){var i=e==null?"":""+e;if(n&&(i=i?i+" "+n:n),t){for(var s in t)if(t[s])i=i?i+" "+s:s;else if(i.length)for(var o=s.length,r=0;(r=i.indexOf(s,r))>=0;){var a=r+o;(r===0||Sn.includes(i[r-1]))&&(a===i.length||Sn.includes(i[a]))?i=(r===0?"":i.substring(0,r))+i.substring(a+1):r=a}}return i===""?null:i}function Cn(e,n=!1){var t=n?" !important;":";",i="";for(var s in e){var o=e[s];o!=null&&o!==""&&(i+=" "+s+": "+o+t)}return i}function Me(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function Bi(e,n){if(n){var t="",i,s;if(Array.isArray(n)?(i=n[0],s=n[1]):i=n,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var o=!1,r=0,a=!1,l=[];i&&l.push(...Object.keys(i).map(Me)),s&&l.push(...Object.keys(s).map(Me));var u=0,d=-1;const q=e.length;for(var p=0;p<q;p++){var m=e[p];if(a?m==="/"&&e[p-1]==="*"&&(a=!1):o?o===m&&(o=!1):m==="/"&&e[p+1]==="*"?a=!0:m==='"'||m==="'"?o=m:m==="("?r++:m===")"&&r--,!a&&o===!1&&r===0){if(m===":"&&d===-1)d=p;else if(m===";"||p===q-1){if(d!==-1){var f=Me(e.substring(u,d).trim());if(!l.includes(f)){m!==";"&&p++;var b=e.substring(u,p).trim();t+=" "+b+";"}}u=p+1,d=-1}}}}return i&&(t+=Cn(i)),s&&(t+=Cn(s,!0)),t=t.trim(),t===""?null:t}return e==null?null:String(e)}function Gi(e,n,t,i,s,o){var r=e.__className;if(I||r!==t||r===void 0){var a=Ji(t,i,o);(!I||a!==e.getAttribute("class"))&&(a==null?e.removeAttribute("class"):n?e.className=a:e.setAttribute("class",a)),e.__className=t}else if(o&&s!==o)for(var l in o){var u=!!o[l];(s==null||u!==!!s[l])&&e.classList.toggle(l,u)}return o}function Ee(e,n={},t,i){for(var s in t){var o=t[s];n[s]!==o&&(t[s]==null?e.style.removeProperty(s):e.style.setProperty(s,o,i))}}function zi(e,n,t,i){var s=e.__style;if(I||s!==n){var o=Bi(n,i);(!I||o!==e.getAttribute("style"))&&(o==null?e.removeAttribute("style"):e.style.cssText=o),e.__style=n}else i&&(Array.isArray(i)?(Ee(e,t==null?void 0:t[0],i[0]),Ee(e,t==null?void 0:t[1],i[1],"important")):Ee(e,t,i));return i}function Je(e,n,t=!1){if(e.multiple){if(n==null)return;if(!Hn(n))return di();for(var i of e.options)i.selected=n.includes(jn(i));return}for(i of e.options){var s=jn(i);if(ci(s,n)){i.selected=!0;return}}(!t||n!==void 0)&&(e.selectedIndex=-1)}function Hi(e){var n=new MutationObserver(()=>{Je(e,e.__value)});n.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),pi(()=>{n.disconnect()})}function jn(e){return"__value"in e?e.__value:e.value}const te=Symbol("class"),ie=Symbol("style"),Zn=Symbol("is custom element"),et=Symbol("is html");function Qi(e){if(I){var n=!1,t=()=>{if(!n){if(n=!0,e.hasAttribute("value")){var i=e.value;xe(e,"value",null),e.value=i}if(e.hasAttribute("checked")){var s=e.checked;xe(e,"checked",null),e.checked=s}}};e.__on_r=t,Wn(t),yi()}}function fu(e,n){var t=Xe(e);t.value===(t.value=n??void 0)||e.value===n&&(n!==0||e.nodeName!=="PROGRESS")||(e.value=n??"")}function Ki(e,n){n?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function xe(e,n,t,i){var s=Xe(e);I&&(s[n]=e.getAttribute(n),n==="src"||n==="srcset"||n==="href"&&e.nodeName==="LINK")||s[n]!==(s[n]=t)&&(n==="loading"&&(e[ji]=t),t==null?e.removeAttribute(n):typeof t!="string"&&nt(e).includes(n)?e[n]=t:e.setAttribute(n,t))}function Wi(e,n,t,i,s=!1,o=!1){if(I&&s&&e.tagName==="INPUT"){var r=e,a=r.type==="checkbox"?"defaultChecked":"defaultValue";a in t||Qi(r)}var l=Xe(e),u=l[Zn],d=!l[et];let p=I&&u;p&&ae(!1);var m=n||{},f=e.tagName==="OPTION";for(var b in n)b in t||(t[b]=null);t.class?t.class=Vi(t.class):(i||t[te])&&(t.class=null),t[ie]&&(t.style??(t.style=null));var q=nt(e);for(const S in t){let y=t[S];if(f&&S==="value"&&y==null){e.value=e.__value="",m[S]=y;continue}if(S==="class"){var g=e.namespaceURI==="http://www.w3.org/1999/xhtml";Gi(e,g,y,i,n==null?void 0:n[te],t[te]),m[S]=y,m[te]=t[te];continue}if(S==="style"){zi(e,y,n==null?void 0:n[ie],t[ie]),m[S]=y,m[ie]=t[ie];continue}var h=m[S];if(!(y===h&&!(y===void 0&&e.hasAttribute(S)))){m[S]=y;var x=S[0]+S[1];if(x!=="$$")if(x==="on"){const A={},M="$$"+S;let C=S.slice(2);var R=Ai(C);if(fi(C)&&(C=C.slice(0,-7),A.capture=!0),!R&&h){if(y!=null)continue;e.removeEventListener(C,m[M],A),m[M]=null}if(y!=null)if(R)e[`__${C}`]=y,hi([C]);else{let H=function(Q){m[S].call(this,Q)};m[M]=vi(C,e,H,A)}else R&&(e[`__${C}`]=void 0)}else if(S==="style")xe(e,S,y);else if(S==="autofocus")bi(e,!!y);else if(!u&&(S==="__value"||S==="value"&&y!=null))e.value=e.__value=y;else if(S==="selected"&&f)Ki(e,y);else{var j=S;d||(j=qi(j));var O=j==="defaultValue"||j==="defaultChecked";if(y==null&&!u&&!O)if(l[S]=null,j==="value"||j==="checked"){let A=e;const M=n===void 0;if(j==="value"){let C=A.defaultValue;A.removeAttribute(j),A.defaultValue=C,A.value=A.__value=M?C:null}else{let C=A.defaultChecked;A.removeAttribute(j),A.defaultChecked=C,A.checked=M?C:!1}}else e.removeAttribute(S);else O||q.includes(j)&&(u||typeof y!="string")?(e[j]=y,j in l&&(l[j]=xi)):typeof y!="function"&&xe(e,j,y)}}}return p&&ae(!0),m}function vu(e,n,t=[],i=[],s=[],o,r=!1,a=!1){mi(s,t,i,l=>{var u=void 0,d={},p=e.nodeName==="SELECT",m=!1;if(Yn(()=>{var b=n(...l.map(le)),q=Wi(e,u,b,o,r,a);m&&p&&"value"in b&&Je(e,b.value);for(let h of Object.getOwnPropertySymbols(d))b[h]||qe(d[h]);for(let h of Object.getOwnPropertySymbols(b)){var g=b[h];h.description===gi&&(!u||g!==u[h])&&(d[h]&&qe(d[h]),d[h]=ue(()=>Fi(e,()=>g))),q[h]=g}u=q}),p){var f=e;$n(()=>{Je(f,u.value,!0),Hi(f)})}m=!0})}function Xe(e){return e.__attributes??(e.__attributes={[Zn]:e.nodeName.includes("-"),[et]:e.namespaceURI===Si})}var An=new Map;function nt(e){var n=e.getAttribute("is")||e.nodeName,t=An.get(n);if(t)return t;An.set(n,t=[]);for(var i,s=e,o=Element.prototype;o!==s;){i=Li(s);for(var r in i)i[r].set&&t.push(r);s=Ci(s)}return t}function hu(e=!1){const n=Pi,t=n.l.u;if(!t)return;let i=()=>wi(n.s);if(e){let s=0,o={};const r=Ii(()=>{let a=!1;const l=n.s;for(const u in l)l[u]!==o[u]&&(o[u]=l[u],a=!0);return a&&s++,s});i=()=>le(r)}t.b.length&&ki(()=>{Ln(n,i),xn(t.b)}),qn(()=>{const s=_i(()=>t.m.map(Ti));return()=>{for(const o of s)typeof o=="function"&&o()}}),t.a.length&&qn(()=>{Ln(n,i),xn(t.a)})}function Ln(e,n){if(e.l.s)for(const t of e.l.s)le(t);n()}const Yi="";function $i(...e){return Mi+Yi+Ei(e[0],e[1])}Di();const Xi=`---
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
`,os=`---
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
`,as=`---
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
title: "Refonte complète du portfolio : 36 articles rédigés en une session"
slug: refonte-complete-portfolio-2026
published: true
excerpt: "Retour sur une session de rédaction marathon : 22 articles de compétences, 14 projets réécrits, et de nouvelles fonctionnalités markdown. Comment j'ai structuré mon portfolio pour répondre aux critères d'évaluation académique."
author: Alexy VANOT
publishedAt: 2026-01-23
tags:
  - portfolio
  - rédaction
  - bilan
  - documentation
logo: Portfolio
readingTime: 8
color: "#6366F1"
pinned: true
---

::toc

# Refonte complète du portfolio : 36 articles rédigés en une session

Aujourd'hui marque l'aboutissement d'un travail de fond sur ce portfolio. En une session intensive, j'ai entièrement restructuré le contenu pour qu'il réponde aux exigences d'évaluation de mon parcours académique. Voici le bilan de cette refonte.

## Le contexte : un portfolio à faire évoluer

Mon portfolio existait déjà techniquement, mais le contenu était lacunaire. Les pages de compétences affichaient simplement un logo et quelques lignes. Les projets manquaient de profondeur analytique. Pour une évaluation académique sérieuse, il fallait passer à la vitesse supérieure.

### Les critères d'évaluation à respecter

Chaque article devait répondre à une structure précise :

1. **Définition personnelle** — Qu'est-ce que cette compétence/ce projet représente pour moi ?
2. **Réalisations concrètes** — Où et comment l'ai-je mobilisée ?
3. **Autocritique honnête** — Quel est mon niveau réel ? Mes lacunes ?
4. **Évolution et objectifs** — Comment je compte progresser ?

Cette structure transforme un simple CV en véritable portfolio réflexif.

---

## 22 articles de compétences techniques

### Les compétences techniques couvertes

J'ai rédigé des articles complets pour chacune de ces technologies :

**Langages et frameworks**
- **Java** et **Spring** — Mon socle backend historique
- **Python** — Data science et automatisation
- **JavaScript** et **TypeScript** — Développement web moderne
- **C** — Programmation système et embarqué
- **PHP** — Développement web classique
- **Dart/Flutter** — Applications mobiles cross-platform

**Bases de données**
- **PostgreSQL** — SGBD relationnel principal
- **MariaDB** — Alternative MySQL performante
- **Oracle** — Environnement entreprise
- **Redis** — Cache et données temps réel

**DevOps et outils**
- **Docker** — Conteneurisation
- **Nginx** — Reverse proxy et serveur web
- **Jira** — Gestion de projet agile
- **VS Code** — Environnement de développement

**Testing**
- **Playwright** — Tests end-to-end modernes
- **Selenium** — Automatisation web historique

**Technologies spécialisées**
- **TensorFlow** — Machine learning et deep learning
- **Unity** — Développement de jeux
- **OpenXR** — Réalité virtuelle
- **Arduino** — Électronique embarquée
- **JavaFX** — Interfaces graphiques desktop

**Frontend**
- **Tailwind CSS** — Utilitaires CSS
- **Streamlit** — Dashboards Python rapides

### Structure type d'un article

Chaque article de compétence suit ce schéma :

\`\`\`markdown
## Ma définition
> Citation personnelle résumant ma vision de la compétence

## Contexte d'apprentissage
Comment et pourquoi j'ai découvert cette technologie

## Réalisations et mises en pratique
Tableau récapitulatif + détails des projets

## Autocritique : mon niveau actuel
Honnêteté sur les forces et faiblesses

## Évolution et objectifs
Plan de progression concret
\`\`\`

---

## 14 projets entièrement réécrits

### La nouvelle structure des projets

Les articles de projets ont été repensés avec **7 sections obligatoires** :

1. **Mon regard critique** — Analyse personnelle et valeur ajoutée
2. **Présentation du projet** — Contexte et objectifs
3. **Objectifs, contexte et enjeux** — Problématique détaillée
4. **Approche et méthodologie** — Comment j'ai travaillé
5. **Réalisations techniques** — Ce que j'ai produit concrètement
6. **Résultats et impact** — Bilan mesurable
7. **Compétences mobilisées** — Liens vers les compétences

### Les projets documentés

| Projet | Domaine | Technos principales |
|--------|---------|---------------------|
| Comet Learning | Formation | Java, Minecraft |
| SUN Auto | Automatisation | Java, Spring |
| TAP | Testing | Java, Playwright |
| Foot AI | IA/Vision | Python, TensorFlow |
| CIFAR-10 | Deep Learning | Python, CNN |
| InVR | Réalité virtuelle | Unity, OpenXR |
| Quiz AI | Web IA | Svelte, OpenAI |
| Snake AI | IA | Python, Q-Learning |
| HR Analytics | Data Science | Python, Pandas |
| Squat Counter | Computer Vision | Python, MediaPipe |
| Flutter Todo | Mobile | Dart, Flutter |
| Flutter Movies | Mobile | Dart, API REST |
| Nano Pong | Embarqué | C, Arduino |
| Svelte Blog | Web | SvelteKit |

---

## Nouvelles fonctionnalités markdown

### Les boutons de navigation

J'ai développé un système de boutons markdown pour lier les contenus entre eux :

\`\`\`markdown
:::buttons
::button[Java]{link=/skills/java icon=i-logos-java}
::button[Autonomie]{link=/skills/autonomy icon=i-carbon-user-certification}
:::
\`\`\`

Ces boutons permettent de naviguer directement vers les compétences mentionnées, créant un réseau de liens entre projets et compétences.

### Améliorations techniques

- **Parsing des directives** \`:::buttons\` et \`::button\` dans le composant markdown
- **Support des icônes UnoCSS** (logos de technologies) et emojis
- **Styles personnalisés** : ghost, default, outline
- **Configuration UnoCSS** étendue pour les icônes dynamiques

---

## 2 expériences professionnelles restructurées

### Synchrotron SOLEIL

L'article sur mon alternance au Synchrotron SOLEIL a été enrichi avec :
- Tableau "Mon poste" (dates, durée, tuteur, équipe)
- Description de l'entreprise et son contexte scientifique
- Mon positionnement dans l'organisation
- Missions détaillées avec résultats
- Compétences développées

### AGH Bâtiment

Même traitement pour mon expérience chez AGH Bâtiment :
- Contexte de l'entreprise (BTP, rénovation)
- Missions d'été en tant qu'aide-maçon
- Apprentissages transversaux (rigueur, travail physique)

---

## Bilan quantitatif

| Catégorie | Nombre d'articles | Estimation mots |
|-----------|-------------------|-----------------|
| Compétences techniques | 22 | ~22 000 |
| Projets | 14 | ~21 000 |
| Expériences | 2 | ~2 000 |
| **Total** | **38** | **~45 000** |

C'est l'équivalent d'un petit livre, entièrement rédigé pour documenter mon parcours.

---

## Ce que j'en retiens

### L'exercice de l'autocritique

Rédiger une autocritique honnête sur chaque compétence est difficile. On a tendance soit à se survendre, soit à se dévaloriser. Trouver le juste équilibre demande de la réflexion.

### La valeur de la documentation

Ce travail de rédaction m'a obligé à formaliser des choses que je "savais" de manière implicite. Expliquer pourquoi j'ai choisi telle approche, quels problèmes j'ai rencontrés, ce que j'aurais fait différemment... C'est un exercice de métacognition précieux.

### Un portfolio vivant

Ce n'est pas une version finale figée. Chaque nouveau projet, chaque nouvelle compétence acquise viendra enrichir ce portfolio. La structure est maintenant en place pour accueillir ces évolutions.

---

## Prochaines étapes

1. **Relecture et corrections** — Vérifier la cohérence globale
2. **Ajout de visuels** — Screenshots, diagrammes, schémas
3. **Feedback externe** — Faire relire par des pairs
4. **Itérations continues** — Améliorer au fil du temps

---

*Ce portfolio est désormais prêt pour l'évaluation. Il représente non seulement mes compétences techniques, mais aussi ma capacité à documenter, analyser et communiquer sur mon travail.*
`,ps=`---
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
`,ds=`---
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
`,ms=`---
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
`,gs=`---
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
`,fs=`---
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
`,vs=`---
name: Comet Learning - Plateforme de formation gamifiée
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
    role: Co-formateur, expert serveur
  - name: Alexy VANOT
    role: Co-formateur, développement
  - name: Participants
    role: Apprenants (20+ personnes)
---

::toc

## Mon regard critique

> Comet Learning m'a révélé une passion que je ne soupçonnais pas : **la transmission de connaissances**. Voir des participants qui n'avaient jamais codé réussir leur premier script a été une des expériences les plus gratifiantes de mon parcours. Ma valeur ajoutée ? Avoir su vulgariser des concepts techniques complexes pour les rendre accessibles à un public de 10 à 77 ans.

**Mes apports principaux :**
- Conception du programme pédagogique progressif (du simple au complexe)
- Accompagnement personnalisé des participants en difficulté
- Création de supports de cours visuels et interactifs

**Ce que j'en retire :** J'ai compris que "le meilleur moyen d'apprendre, c'est d'enseigner". Expliquer un concept m'oblige à le comprendre en profondeur. Ce projet a aussi développé ma patience et mon adaptabilité : chaque apprenant avance à son rythme.

---

## Présentation du projet

**Comet Learning** est un projet de formation tout public que j'ai co-animé avec **Brimal MARTIN**. L'objectif : apprendre à créer son propre serveur Minecraft et découvrir les bases du développement de plugins, le tout dans une ambiance ludique et bienveillante.

Minecraft n'est pas qu'un jeu : c'est une plateforme d'apprentissage où le code produit des effets visibles immédiatement, ce qui motive les débutants.

---

## Objectifs, Contexte et Enjeux

### Contexte du projet

Ce projet est né d'un constat : beaucoup de personnes veulent apprendre à coder mais sont intimidées par les tutoriels traditionnels. Minecraft offre un contexte familier où l'erreur n'est pas grave — on peut toujours recommencer.

**Public cible :**
- Débutants complets sans aucune connaissance technique
- Joueurs Minecraft curieux de comprendre "l'envers du décor"
- Personnes de tout âge souhaitant une première approche du code

### Objectifs pédagogiques

| Objectif | Contenu |
|----------|---------|
| Administrer un serveur | Installation, configuration, gestion des joueurs |
| Découvrir la programmation | Variables, conditions, boucles via Skript |
| Développer l'autonomie | Chaque participant repart avec son propre serveur |
| Créer une communauté | Entraide et partage entre apprenants |

### Enjeux et défis

**Enjeux :**
- **Accessibilité** : rendre la programmation accessible à tous, sans jargon
- **Motivation** : maintenir l'engagement sur plusieurs semaines
- **Résultats concrets** : chaque participant doit repartir avec quelque chose de fonctionnel

**Défis anticipés :**
- Hétérogénéité des niveaux (certains n'avaient jamais ouvert un terminal)
- Problèmes techniques variés (Windows, Mac, configurations différentes)
- Maintien de l'attention sur des sessions de 2-3 heures

---

## Étapes de réalisation

### Phase 1 : Conception du programme (2 semaines)

- Définition des objectifs pédagogiques avec Brimal
- Découpage en 3 modules progressifs
- Création des supports de cours et exercices pratiques
- Test du programme sur quelques volontaires

### Phase 2 : Module 1 — Création d'un serveur (4 sessions)

- Installation de Java et configuration de l'environnement
- Installation de PaperMC (serveur Minecraft performant)
- Configuration : paramètres, permissions, whitelist
- Mise en réseau : rendre son serveur accessible aux amis

**Point clé :** Chaque participant avait son propre serveur fonctionnel à la fin de ce module.

### Phase 3 : Module 2 — Introduction au développement avec Skript (6 sessions)

- Découverte de Skript : un langage simplifié pour Minecraft
- Premiers scripts : commandes personnalisées, messages automatiques
- Mini-jeux basiques : systèmes de points, téléportation
- Événements et déclencheurs : réagir aux actions des joueurs

**Approche :** Learning by doing — chaque concept était immédiatement mis en pratique.

### Phase 4 : Module 3 — Aller plus loin (2 sessions)

- Installation et configuration de plugins communautaires
- Personnalisation avancée : créer une identité unique
- Gestion de communauté : modération, règles, animation

### Phase 5 : Clôture et suivi

- Session finale de présentation des projets personnels
- Création d'un groupe Discord pour l'entraide post-formation
- Recueil des feedbacks pour améliorer les prochaines sessions

---

## Acteurs et interactions

| Acteur | Rôle | Interactions |
|--------|------|--------------|
| **Brimal MARTIN** | Co-formateur, expert serveur | Coordination, sessions sur l'administration |
| **Moi (Alexy)** | Co-formateur, développement | Conception pédagogique, sessions sur Skript |
| **Participants (20+)** | Apprenants | Questions, feedback, projets personnels |

### Dynamique de groupe

- **Entraide entre participants** : les plus avancés aidaient les débutants
- **Ambiance bienveillante** : pas de jugement sur les erreurs
- **Flexibilité** : adaptation du rythme selon les besoins du groupe

---

## Résultats obtenus

### Métriques du projet

| Indicateur | Résultat |
|------------|----------|
| **Participants formés** | 20+ personnes |
| **Serveurs créés** | Chaque participant reparti avec le sien |
| **Scripts développés** | Dizaines de mini-projets personnels |
| **Taux de complétion** | ~85% ont suivi jusqu'au bout |

### Pour les participants

- Première expérience de programmation réussie
- Serveur Minecraft personnel fonctionnel
- Communauté d'entraide créée

### Pour moi

- Confirmation de ma passion pour la pédagogie
- Développement de compétences en vulgarisation technique
- Expérience d'animation de groupe

---

## Lendemains du projet

### Immédiatement après

Un groupe Discord a été créé pour maintenir le contact. Plusieurs participants ont continué à développer leurs serveurs et à s'entraider.

### Aujourd'hui

Certains participants sont allés plus loin : apprentissage de Java "pur", création de vrais plugins, voire orientation vers des études en informatique. Le projet a planté des graines.

### Et demain ?

J'aimerais reproduire ce format sur d'autres sujets : initiation à Python, création de sites web, voire introduction à l'IA. Le principe reste le même : apprendre par le plaisir.

---

## Compétences mobilisées

Ce projet m'a permis de mobiliser et développer les compétences suivantes :

:::buttons
::button[Java]{link=/skills/java icon=i-logos-java}
::button[Travail d'équipe]{link=/skills/teamwork icon=i-carbon-group}
::button[Créativité]{link=/skills/creativity icon=i-carbon-idea}
:::
`,hs=`---
name: Flutter Movie App - Découverte des API REST
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
    to: https://github.com/alexyvanot/flutter_movie_manip
skills:
  - flutter
  - dart
attachments:
  - label: Page d'accueil
    src: https://raw.githubusercontent.com/alexyvanot/flutter_movie_manip/main/assets/images/HomePage.png
  - label: Détail d'un film
    src: https://raw.githubusercontent.com/alexyvanot/flutter_movie_manip/main/assets/images/MovieDetail.png
team:
  - name: Alexy VANOT
    role: Développeur unique
---

::toc

## Mon regard critique

> Ce projet m'a permis de **maîtriser les fondamentaux de Flutter** tout en construisant quelque chose de concret. Ma valeur ajoutée ? Avoir structuré le code de manière propre dès le départ, avec une séparation claire entre les appels HTTP, les modèles de données et l'interface utilisateur.

**Mes apports principaux :**
- Architecture modulaire avec séparation des responsabilités
- Gestion sécurisée des clés API via \`flutter_dotenv\`
- Code documenté et réutilisable

**Ce que j'en retire :** Ce projet m'a appris l'importance de la gestion d'état dans Flutter. La différence entre Stateless et Stateful widgets est devenue concrète quand j'ai dû mettre à jour la liste des films dynamiquement.

---

## Présentation du projet

**Flutter Movie App** est une application mobile qui récupère et affiche les films à venir depuis l'API **The Movie Database (TMDb)**. Ce projet a été conçu dans le cadre d'un cours de Flutter pour pratiquer les concepts fondamentaux du framework.

L'application permet de parcourir une liste de films avec leurs affiches, titres et descriptions, et d'accéder aux détails de chaque film.

![Page d'accueil|clean](https://raw.githubusercontent.com/alexyvanot/flutter_movie_manip/main/assets/images/HomePage.png)

---

## Objectifs, Contexte et Enjeux

### Contexte académique

Ce projet a été réalisé dans le cadre d'un **cours de développement mobile Flutter**. L'objectif pédagogique était de mettre en pratique les concepts théoriques vus en cours sur un cas d'usage réel.

### Objectifs pédagogiques

| Objectif | Concept Flutter associé |
|----------|-------------------------|
| Comprendre les widgets | Stateless vs Stateful Widgets |
| Consommer une API REST | Package \`http\`, appels asynchrones |
| Gérer l'état de l'application | \`setState()\` et cycle de vie |
| Afficher des listes dynamiques | \`ListView.builder\` |
| Sécuriser les données sensibles | \`flutter_dotenv\` pour les clés API |

### Enjeux et défis

**Enjeux :**
- **Apprentissage** : comprendre le paradigme déclaratif de Flutter
- **Bonnes pratiques** : structurer le code dès le début
- **Performance** : gérer efficacement les listes longues

**Défis rencontrés :**
- Gestion des états de chargement (loading, erreur, succès)
- Parsing du JSON retourné par l'API
- Affichage des images avec gestion du cache

---

## Étapes de réalisation

### Phase 1 : Mise en place du projet (1h)

- Création du projet Flutter avec structure de dossiers organisée
- Configuration de \`flutter_dotenv\` pour les variables d'environnement
- Obtention d'une clé API sur TMDb

### Phase 2 : Modèle de données et appels HTTP (2h)

**Création du modèle Movie :**
- Classe Dart représentant un film
- Factory \`fromJson()\` pour le parsing automatique

**Helper HTTP :**
- Classe utilitaire pour les appels à l'API TMDb
- Gestion des erreurs et des timeouts

### Phase 3 : Interface utilisateur (3h)

**Page principale (StatefulWidget) :**
- Liste des films avec \`ListView.builder\`
- Appel à l'API au \`initState()\`
- Mise à jour de l'UI via \`setState()\`

**Page de détail :**
- Affichage complet des informations du film
- Navigation entre les écrans

### Phase 4 : Polissage et tests (1h)

- Ajout d'indicateurs de chargement
- Gestion des erreurs réseau
- Tests sur différents appareils (émulateur, physique)

---

## Acteurs et interactions

| Acteur | Rôle | Interactions |
|--------|------|--------------|
| **Moi (développeur)** | Conception et développement | Projet individuel |
| **Enseignant Flutter** | Cadrage et évaluation | Consignes, feedback |
| **API TMDb** | Source de données | Appels REST |

---

## Résultats obtenus

### Fonctionnalités livrées

- ✅ Récupération des films à venir depuis TMDb
- ✅ Affichage en liste avec affiches et descriptions
- ✅ Navigation vers les détails d'un film
- ✅ Gestion sécurisée de la clé API

### Pour moi

- **Maîtrise des fondamentaux Flutter** : widgets, état, navigation
- **Compréhension des appels HTTP** en Dart
- **Bonnes pratiques** : architecture et sécurité

---

## Lendemains du projet

### Aujourd'hui

Le projet est disponible sur GitHub et sert de référence pour mes futurs développements Flutter.

### Améliorations envisagées

- Ajout d'une barre de recherche
- Système de favoris avec persistance locale
- Amélioration du design avec des animations

### Ce que j'ai réinvesti

Les compétences acquises sur ce projet m'ont servi pour développer des applications Flutter plus complexes comme [Georges le Chat](/projects/georges-le-chat) et la [Todo List](/projects/flutter-todo-list).

---

## Compétences mobilisées

Ce projet m'a permis de mobiliser et développer les compétences suivantes :

:::buttons
::button[Autonomie]{link=/skills/autonomy icon=i-carbon-user-certification}
::button[Créativité]{link=/skills/creativity icon=i-carbon-idea}
:::
`,bs=`---
name: Flutter Todo List - Gestion d'état avec Provider
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
    to: https://github.com/alexyvanot/flutter_todo_list
skills:
  - flutter
  - dart
attachments:
  - label: Aperçu de l'application
    src: https://raw.githubusercontent.com/alexyvanot/flutter_todo_list/main/assets/images/README/appshow.png
team:
  - name: Alexy VANOT
    role: Développeur unique
---

::toc

## Mon regard critique

> Ce projet représente ma **montée en compétence sur la gestion d'état avancée** en Flutter. Ma valeur ajoutée ? Avoir implémenté une architecture propre avec Provider pour la réactivité et SharedPreferences pour la persistance, tout en maintenant une UX fluide et intuitive.

**Mes apports principaux :**
- Architecture Provider pour une gestion d'état propre et testable
- Persistance automatique des données sans action utilisateur
- Interface Cupertino soignée avec interactions tactiles naturelles

**Ce que j'en retire :** J'ai compris l'importance de séparer la logique métier de l'interface utilisateur. Provider m'a permis de gérer l'état de manière centralisée, rendant le code plus maintenable et les tests plus faciles à écrire.

---

## Présentation du projet

**Flutter Todo List** est une application de gestion de tâches complète développée en Flutter. Elle permet d'ajouter, compléter, filtrer et supprimer des tâches, avec une **sauvegarde automatique** locale grâce à SharedPreferences.

L'application utilise le pattern **Provider** pour une gestion d'état réactive et un design **Cupertino** pour une expérience iOS native.

![Aperçu de l'application|clean](https://raw.githubusercontent.com/alexyvanot/flutter_todo_list/main/assets/images/README/appshow.png)

---

## Objectifs, Contexte et Enjeux

### Contexte académique

Ce projet a été réalisé sur **2 semaines** dans le cadre d'un cours de développement mobile avancé. L'objectif était d'aller au-delà du simple \`setState()\` pour explorer des patterns de gestion d'état plus robustes.

### Objectifs pédagogiques

| Objectif | Concept Flutter associé |
|----------|-------------------------|
| Gestion d'état avancée | Pattern Provider |
| Persistance locale | SharedPreferences |
| UI réactive | Widgets Cupertino |
| Interactions utilisateur | Swipe-to-delete, filtres |

### Enjeux et défis

**Enjeux :**
- **Architecture** : séparation claire entre logique et UI
- **UX** : interactions fluides et feedback immédiat
- **Persistance** : sauvegarde transparente pour l'utilisateur

**Défis rencontrés :**
- Synchronisation entre Provider et SharedPreferences
- Gestion des confirmations de suppression
- Animation fluide des transitions d'état

---

## Étapes de réalisation

### Phase 1 : Architecture et setup (2 jours)

- Mise en place de la structure Provider
- Configuration de SharedPreferences
- Création du modèle de données \`Task\`

### Phase 2 : Logique métier (3 jours)

**TaskProvider :**
- Méthodes CRUD pour les tâches
- Persistance automatique à chaque modification
- Gestion des filtres (toutes, complètes, incomplètes)

### Phase 3 : Interface utilisateur (5 jours)

**Fonctionnalités implémentées :**
- ➕ Ajout de nouvelles tâches avec validation
- ✅ Toggle de complétion avec feedback visuel
- 🗑️ Suppression par swipe avec confirmation
- 🔍 Filtrage dynamique des tâches

### Phase 4 : Polissage (3 jours)

- Animations de transition
- Gestion des cas limites (liste vide, erreurs)
- Tests sur différents appareils

---

## Acteurs et interactions

| Acteur | Rôle | Interactions |
|--------|------|--------------|
| **Moi (développeur)** | Conception et développement | Projet individuel |
| **Enseignant Flutter** | Cadrage et évaluation | Consignes, feedback |

---

## Résultats obtenus

### Fonctionnalités livrées

- ✅ Ajout, modification, suppression de tâches
- ✅ Persistance locale automatique
- ✅ Filtrage par état (toutes/complètes/incomplètes)
- ✅ Interface Cupertino responsive
- ✅ Swipe-to-delete avec confirmation

### Pour moi

- **Maîtrise de Provider** pour la gestion d'état
- **Compréhension de la persistance** avec SharedPreferences
- **Amélioration de mes compétences UX** mobile

---

## Lendemains du projet

### Aujourd'hui

L'application est fonctionnelle et disponible sur GitHub. Elle me sert de référence pour les patterns de gestion d'état Flutter.

### Améliorations envisagées

- Migration vers Riverpod (évolution de Provider)
- Ajout de catégories et priorités
- Synchronisation cloud avec Firebase
- Notifications de rappel

### Ce que j'ai réinvesti

Ce projet m'a donné les bases pour des applications Flutter plus complexes nécessitant une gestion d'état robuste.

---

## Compétences mobilisées

Ce projet m'a permis de mobiliser et développer les compétences suivantes :

:::buttons
::button[Autonomie]{link=/skills/autonomy icon=i-carbon-user-certification}
::button[Créativité]{link=/skills/creativity icon=i-carbon-idea}
:::

# Technologies utilisées

| Technologie | Utilisation |
|-------------|-------------|
| **Flutter** | Framework UI cross-platform |
| **Dart** | Langage de programmation |
| **Provider** | Gestion de l'état global |
| **SharedPreferences** | Persistance locale des données |
| **Cupertino Widgets** | Style iOS natif |
`,qs=`---
name: Foot AI - Analyse tactique par vision par ordinateur
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
    to: https://github.com/alexyvanot/foot-ai
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
team:
  - name: Alexy VANOT
    role: Développeur unique
---

::toc

## Mon regard critique

> Foot AI illustre ma capacité à **combiner plusieurs technologies** (OpenCV, MediaPipe, Streamlit) pour résoudre un problème concret. Ma valeur ajoutée ? Avoir créé un pipeline complet de la vidéo brute à la visualisation tactique, avec une interface utilisateur accessible aux non-techniciens.

**Mes apports principaux :**
- Architecture modulaire séparant traitement vidéo, détection et visualisation
- Interface Streamlit intuitive pour les utilisateurs finaux
- Documentation technique et notebook Jupyter pour la reproductibilité

**Ce que j'en retire :** Ce projet m'a confirmé que la computer vision est un domaine passionnant où les résultats sont immédiatement visibles. J'ai aussi appris l'importance de gérer les cas limites (occlusions, qualité vidéo variable, mouvements rapides).

---

## Présentation du projet

**Foot AI** est un projet Python qui utilise la vision par ordinateur et le machine learning pour analyser des vidéos de football. Le système détecte les positions des joueurs frame par frame et génère une **carte tactique** en temps réel.

L'application combine OpenCV pour le traitement vidéo, MediaPipe pour la détection de pose, et Streamlit pour l'interface web interactive.

![Démo de l'application|clean](https://raw.githubusercontent.com/alexyvanot/foot-ai/main/images/demo.gif)

---

## Objectifs, Contexte et Enjeux

### Contexte académique

Ce projet a été réalisé dans le cadre de mes études en **Computer Vision**. L'objectif était d'appliquer les concepts théoriques (traitement d'images, détection d'objets, tracking) à un cas concret et ludique.

### Objectifs techniques

| Objectif | Réalisation |
|----------|-------------|
| Traiter des vidéos de football | Pipeline OpenCV fonctionnel |
| Détecter les joueurs | Intégration MediaPipe |
| Générer une carte tactique | Projection sur un terrain 2D |
| Interface utilisateur | Application Streamlit |

### Enjeux et défis

**Enjeux :**
- **Performance** : traitement vidéo en temps quasi-réel
- **Précision** : détection fiable malgré les occlusions et mouvements rapides
- **Utilisabilité** : interface accessible aux non-techniciens

**Défis techniques :**
- Gestion des occlusions (joueurs se chevauchant)
- Qualité vidéo variable selon les sources
- Calibration de la projection terrain

---

## Étapes de réalisation

### Phase 1 : Recherche et exploration (1 semaine)

- Étude des approches existantes (YOLO, MediaPipe, OpenPose)
- Analyse des datasets de football disponibles
- Choix de MediaPipe pour sa simplicité d'intégration et ses performances
- Définition du workflow de traitement

![Workflow du projet|clean](https://raw.githubusercontent.com/alexyvanot/foot-ai/main/workflow%20diagram.png)

### Phase 2 : Développement du pipeline de traitement (2 semaines)

**Traitement vidéo (OpenCV) :**
- Extraction frame par frame
- Prétraitement (redimensionnement, normalisation)
- Gestion des différents formats vidéo

**Détection des joueurs (MediaPipe) :**
- Configuration du modèle de détection de pose
- Extraction des points clés (position, posture)
- Filtrage des faux positifs

### Phase 3 : Génération de la carte tactique (1 semaine)

- Définition du mapping vidéo → terrain 2D
- Algorithme de projection des positions
- Visualisation avec Matplotlib/Plotly

### Phase 4 : Interface utilisateur (1 semaine)

**Application Streamlit :**
- Upload de vidéos par l'utilisateur
- Paramètres de configuration (seuils de détection, FPS)
- Affichage temps réel de la carte tactique
- Export des résultats

### Phase 5 : Documentation et tests

- Notebook Jupyter pour l'analyse détaillée
- README complet avec instructions d'installation
- Tests sur différentes vidéos sources

---

## Acteurs et interactions

| Acteur | Rôle | Interactions |
|--------|------|--------------|
| **Moi (développeur)** | Conception et développement complet | Projet individuel |
| **Enseignant CV** | Cadrage et évaluation | Suivi du projet, feedback |
| **Communauté open-source** | Ressources et support | Documentation MediaPipe, forums |

---

## Résultats obtenus

### Fonctionnalités livrées

- ✅ Upload et traitement de vidéos de football
- ✅ Détection des positions des joueurs
- ✅ Génération de cartes tactiques en temps réel
- ✅ Interface web interactive (Streamlit)
- ✅ Notebook Jupyter pour l'analyse

### Performance

| Métrique | Résultat |
|----------|----------|
| FPS de traitement | ~15 FPS sur GPU moyen |
| Précision détection | ~85% dans de bonnes conditions |
| Temps de génération carte | < 2 secondes par frame |

### Pour moi

- **Maîtrise d'OpenCV** et du traitement vidéo
- **Expérience MediaPipe** pour la détection de pose
- **Compétences Streamlit** pour le prototypage rapide d'interfaces

---

## Lendemains du projet

### Aujourd'hui

Le projet est disponible sur GitHub et peut être utilisé pour analyser des vidéos de football amateur ou professionnel.

### Améliorations envisagées

- Intégration de YOLO pour une détection multi-joueurs plus robuste
- Tracking temporel pour suivre les trajectoires
- Analyse tactique automatique (formations, zones de jeu)
- Export vers des formats utilisés par les entraîneurs

### Applications potentielles

- Analyse post-match pour les entraîneurs
- Création de highlights automatiques
- Statistiques de positionnement des joueurs

---

## Compétences mobilisées

Ce projet m'a permis de mobiliser et développer les compétences suivantes :

:::buttons
::button[Python]{link=/skills/python icon=i-logos-python}
::button[Autonomie]{link=/skills/autonomy icon=i-carbon-user-certification}
::button[Créativité]{link=/skills/creativity icon=i-carbon-idea}
:::
`,xs=`---
name: HR Data Analytics - Prédiction de contrats par ML
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
    to: https://github.com/alexyvanot/hr-data-analytics
  - label: Notebook
    to: https://github.com/alexyvanot/hr-data-analytics/blob/main/ProjetFinal_DataCrafting_Mining.ipynb
skills:
  - python
  - pandas
  - numpy
  - matplotlib
  - scikitlearn
  - jupyter
team:
  - name: Alexy VANOT
    role: Data Scientist
---

::toc

## Mon regard critique

> Ce projet m'a appris une leçon fondamentale en data science : **la qualité des données prime sur la complexité des algorithmes**. Ma valeur ajoutée ? Avoir documenté honnêtement les limites du modèle et analysé pourquoi les performances étaient limitées, plutôt que de maquiller les résultats.

**Mes apports principaux :**
- Pipeline de nettoyage de données robuste (doublons, anomalies, valeurs manquantes)
- Feature engineering pertinent (création de la variable "Ancienneté")
- Analyse critique des résultats avec identification des causes d'échec

**Ce que j'en retire :** J'ai compris que le machine learning n'est pas magique — un modèle ne peut pas prédire ce que les données ne permettent pas de distinguer. Ce projet m'a aussi appris l'importance du feature engineering et de l'analyse exploratoire.

---

## Présentation du projet

**HR Data Analytics** est un projet de Machine Learning visant à prédire le **type de contrat** (Stage, Alternance, CDD, CDI) d'un employé à partir de ses caractéristiques RH. Le projet couvre l'ensemble du pipeline : nettoyage des données, feature engineering, entraînement et évaluation.

Le projet a été réalisé sur un dataset RH synthétique dans le cadre du module **DataCrafting & Data Mining**.

---

## Objectifs, Contexte et Enjeux

### Contexte académique

Ce projet a été réalisé dans le cadre d'un **module de Data Science** portant sur le nettoyage de données et le machine learning. L'objectif pédagogique était de pratiquer l'ensemble du pipeline ML sur un cas concret.

### Objectifs du projet

| Objectif | Livrable |
|----------|----------|
| Nettoyer un dataset réaliste | Script de prétraitement documenté |
| Détecter et traiter les anomalies | Rapport d'analyse exploratoire |
| Construire un modèle prédictif | RandomForestClassifier optimisé |
| Évaluer et critiquer les résultats | Rapport de classification + analyse |

### Enjeux et défis

**Enjeux :**
- **Qualité des données** : le dataset contenait de nombreuses anomalies
- **Prédiction multi-classe** : 4 types de contrats à distinguer
- **Interprétabilité** : comprendre pourquoi le modèle fonctionne (ou non)

**Défis rencontrés :**
- Données synthétiques avec peu de features discriminantes
- Déséquilibre des classes (plus de CDI que de stages)
- Similarité des profils entre stages et alternances

---

## Étapes de réalisation

### Phase 1 : Exploration et nettoyage (3h)

**Analyse exploratoire :**
- Distribution des variables numériques et catégorielles
- Détection des valeurs aberrantes (âges négatifs, salaires incohérents)
- Identification des valeurs manquantes

**Nettoyage effectué :**
- Suppression des doublons
- Correction des âges incohérents (< 16 ou > 70)
- Imputation des valeurs manquantes
- Standardisation des champs catégoriels (genre, éducation)

### Phase 2 : Feature Engineering (2h)

**Transformations appliquées :**
- Encodage one-hot des variables catégorielles
- Normalisation des features numériques (salaire, âge)
- Création de la feature "Ancienneté" à partir des dates

### Phase 3 : Modélisation (3h)

**Choix du modèle :**
- RandomForestClassifier pour sa robustesse et interprétabilité
- GridSearchCV pour l'optimisation des hyperparamètres

**Paramètres optimisés :**
- Nombre d'arbres
- Profondeur maximale
- Critère de split

### Phase 4 : Évaluation et analyse (2h)

- Rapport de classification (précision, recall, F1-score)
- Matrice de confusion
- Analyse des erreurs et identification des limites

---

## Acteurs et interactions

| Acteur | Rôle | Interactions |
|--------|------|--------------|
| **Moi (data scientist)** | Analyse et modélisation | Projet individuel |
| **Enseignant Data Mining** | Cadrage et évaluation | Consignes, dataset, feedback |

---

## Résultats obtenus

### Performance du modèle

| Métrique | Valeur |
|----------|--------|
| **Précision globale** | ~22-45% selon le split |
| **Meilleure classe (CDI)** | ~60% recall |
| **Pire classe (Stage)** | ~10% recall |

### Analyse des résultats

**Pourquoi les performances sont limitées ?**
- Le dataset synthétique manque de features RH spécifiques (expérience, diplôme détaillé)
- Les profils Stage et Alternance sont très similaires dans les données
- Déséquilibre des classes impactant l'apprentissage

**Ce qui fonctionne :**
- Le modèle distingue relativement bien CDI vs autres contrats
- Le pipeline de prétraitement est robuste et réutilisable

### Pour moi

- **Compétences en data cleaning** : gestion des cas limites
- **Maîtrise de scikit-learn** : pipeline complet
- **Esprit critique** : savoir reconnaître les limites d'un modèle

---

## Lendemains du projet

### Aujourd'hui

Le notebook est disponible sur GitHub et documente l'ensemble du processus, y compris les échecs et leurs analyses.

### Améliorations envisagées

- Enrichissement avec des données réelles (si disponibles)
- Test d'autres algorithmes (XGBoost, SVM)
- Techniques de rééquilibrage des classes (SMOTE)

### Leçons apprises

Ce projet m'a appris que **documenter les échecs est aussi important que célébrer les succès**. Un modèle à 45% de précision sur un problème mal posé apprend plus qu'un 95% sur un dataset trivial.

---

## Compétences mobilisées

Ce projet m'a permis de mobiliser et développer les compétences suivantes :

:::buttons
::button[Python]{link=/skills/python icon=i-logos-python}
::button[Autonomie]{link=/skills/autonomy icon=i-carbon-user-certification}
:::
├── ProjetFinal_DataCrafting_Mining.ipynb  # Notebook principal
├── dataset_rh.csv                          # Dataset RH synthétique
├── requirements.txt                        # Dépendances Python
└── LICENCE                                 # Licence MIT
\`\`\`
`,ys=`---
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
    role: Co-organisateur, expert technique VR
  - name: Alexy VANOT
    role: Co-organisateur, médiation et développement
  - name: Participants
    role: Public initié (50+ personnes)
---

::toc

## Mon regard critique

> InVR m'a fait découvrir la **médiation scientifique** — l'art de rendre une technologie complexe accessible à tous. Ma plus grande satisfaction ? Voir les yeux émerveillés d'un senior qui découvre la VR pour la première fois, ou l'enthousiasme d'un enfant qui comprend qu'il peut "toucher" des objets virtuels. Ce projet m'a montré que la tech n'a de sens que si elle est partagée.

**Mes apports principaux :**
- Organisation logistique des sessions (planning, matériel, sécurité)
- Adaptation du discours selon le public (enfants, adultes, seniors)
- Création de démonstrations interactives pour les curieux de développement VR

**Ce que j'en retire :** J'ai appris à vulgariser sans simplifier à l'excès. Expliquer la VR à quelqu'un qui n'a jamais mis de casque demande de partir de son vécu, pas du jargon technique. Ce projet a renforcé ma conviction que la technologie doit être inclusive.

---

## Présentation du projet

**InVR** est un projet d'initiation et de médiation autour de la **réalité virtuelle** que j'ai co-organisé avec **Pierre GERVAIS**. L'objectif : faire découvrir la VR au plus grand nombre — étudiants, parents, curieux de tous horizons — dans un cadre encadré et bienveillant.

Au-delà de l'aspect ludique, nous voulions sensibiliser aux applications concrètes de la VR dans la société : formation, santé, industrie, culture.

---

## Objectifs, Contexte et Enjeux

### Contexte du projet

La réalité virtuelle souffre souvent d'une image réductrice : "un truc de gamers". Pourtant, ses applications sont bien plus larges. Nous avons voulu montrer cette diversité à un public qui n'aurait jamais eu l'occasion de tester la VR autrement.

**Public cible :**
- Étudiants du campus
- Parents et familles lors de journées portes ouvertes
- Personnel administratif et enseignant
- Curieux de tous âges et horizons

### Objectifs du projet

| Objectif | Indicateur de succès |
|----------|----------------------|
| Faire découvrir la VR | 50+ personnes initiées |
| Sensibiliser aux métiers | Présentations des carrières VR |
| Montrer les applications concrètes | Exemples santé, formation, industrie |
| Créer un moment de partage | Retours positifs, échanges |

### Enjeux et défis

**Enjeux :**
- **Accessibilité** : la VR peut provoquer inconfort (motion sickness) chez certains
- **Sécurité** : encadrement nécessaire pour éviter les accidents
- **Pédagogie** : expliquer sans jargon technique

**Défis anticipés :**
- Gestion de groupes hétérogènes (enfants impatients, seniors prudents)
- Logistique du matériel (casques, PC, espace suffisant)
- Hygiène des casques partagés (post-COVID)

---

## Étapes de réalisation

### Phase 1 : Préparation (1 mois)

- Inventaire du matériel disponible (casques Quest, PC VR)
- Sélection d'expériences adaptées à tous les publics
- Création du planning des sessions
- Communication : affiches, mailing, réseaux sociaux

### Phase 2 : Sessions de découverte (plusieurs semaines)

**Déroulement type d'une session :**
1. **Introduction** (5 min) : qu'est-ce que la VR ? Comment ça marche ?
2. **Briefing sécurité** (2 min) : consignes, espace de jeu, signaux d'alerte
3. **Expérience immersive** (10-15 min) : découverte accompagnée
4. **Debriefing** (5 min) : impressions, questions, échanges

**Adaptation au public :**
- Enfants : jeux colorés, interactions simples, sessions courtes
- Adultes : applications variées (voyage, art, simulation)
- Seniors : progression très douce, vigilance motion sickness

### Phase 3 : Initiations au développement VR

Pour les plus curieux, nous avons proposé des sessions complémentaires :
- Présentation des outils (Unity, OpenXR)
- Démonstration de création de scènes simples
- Explication des concepts : tracking, interactions, locomotion

### Phase 4 : Conférences et échanges

Sessions thématiques sur les apports de la VR :
- **Formation** : simulations médicales, apprentissage immersif
- **Santé** : thérapies par exposition, rééducation
- **Industrie** : prototypage, formation aux gestes métiers
- **Culture** : visites virtuelles, expériences artistiques

---

## Acteurs et interactions

| Acteur | Rôle | Interactions |
|--------|------|--------------|
| **Pierre GERVAIS** | Co-organisateur, expert VR | Configuration technique, démonstrations avancées |
| **Moi (Alexy)** | Co-organisateur, médiation | Accueil, accompagnement, vulgarisation |
| **Participants (50+)** | Public initié | Découverte, questions, feedback |
| **Administration campus** | Support logistique | Mise à disposition des salles |

### Moments clés

- **Journée portes ouvertes** : afflux important, gestion de file d'attente, rotations rapides
- **Session seniors** : rythme adapté, accompagnement renforcé, moments très touchants
- **Atelier développement** : public motivé, questions techniques pointues

---

## Résultats obtenus

### Métriques du projet

| Indicateur | Résultat |
|------------|----------|
| **Participants initiés** | 50+ personnes |
| **Sessions organisées** | Plusieurs sur le semestre |
| **Public touché** | Étudiants, parents, personnel |
| **Retours** | Très positifs, forte demande |

### Pour les participants

- Première expérience VR dans un cadre sécurisé
- Découverte des applications au-delà du jeu vidéo
- Démystification de la technologie

### Pour moi

- **Compétences en médiation scientifique** : rendre la tech accessible
- **Gestion d'événements** : logistique, planning, coordination
- **Adaptabilité** : ajuster le discours au public

---

## Lendemains du projet

### Immédiatement après

Forte demande pour renouveler l'expérience. Plusieurs participants ont exprimé l'envie d'aller plus loin (achat de casque personnel, exploration des métiers VR).

### Aujourd'hui

Le format a inspiré d'autres initiatives sur le campus. La VR est mieux connue et moins perçue comme "un gadget de geek".

### Et demain ?

J'aimerais développer un atelier plus poussé : création d'une expérience VR simple de A à Z. Le potentiel pédagogique de la VR est immense, notamment pour les formations techniques où la pratique est difficile à organiser (médical, industriel).

---

## Compétences mobilisées

Ce projet m'a permis de mobiliser et développer les compétences suivantes :

:::buttons
::button[Créativité]{link=/skills/creativity icon=i-carbon-idea}
::button[Travail d'équipe]{link=/skills/teamwork icon=i-carbon-group}
::button[Autonomie]{link=/skills/autonomy icon=i-carbon-user-certification}
:::
`,Ss=`---
name: Nano Pong - Jeu rétro sur Arduino
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
team:
  - name: Alexy VANOT
    role: Développeur
  - name: Sandro Bakuradze
    role: Développeur
  - name: Pierre Gervais
    role: Développeur
  - name: Brice Nyamsi
    role: Développeur
---

::toc

## Mon regard critique

> Ce projet a été ma **première expérience de programmation embarquée**, et aussi ma première expérience de **travail en équipe de 4 sur du code**. Ma valeur ajoutée ? Avoir contribué à la logique de jeu (calcul des angles de rebond) et à la coordination de l'équipe pour intégrer les différents modules.

**Mes apports principaux :**
- Implémentation de la physique des rebonds (angles selon la zone de la raquette)
- Participation à l'intégration des différents modules
- Tests et débogage sur le matériel réel

**Ce que j'en retire :** J'ai découvert les contraintes de la programmation embarquée : ressources limitées, timing critique, débogage difficile. Ce projet m'a aussi appris la coordination en équipe sur un projet technique avec du matériel partagé.

---

## Présentation du projet

**Nano Pong** est une réplique du célèbre jeu Pong développée sur microcontrôleur **Arduino Nano**. Le jeu s'affiche sur une matrice LED 8x8 et se joue à deux joueurs, chacun contrôlant sa raquette via un potentiomètre.

Ce projet étudiant réalisé en équipe de 4 reproduit l'expérience classique du tennis de table en version électronique miniature.

<img src="https://raw.githubusercontent.com/alexyvanot/nano-pong/main/resources/images/breadboard/t_main3.png" alt="Circuit Nano Pong" width="400" />

---

## Objectifs, Contexte et Enjeux

### Contexte académique

Ce projet a été réalisé dans le cadre d'un **module de systèmes embarqués** à l'ESIEA. L'objectif était de mettre en pratique les concepts de programmation bas niveau sur un microcontrôleur réel.

### Objectifs du projet

| Objectif | Réalisation |
|----------|-------------|
| Programmer un Arduino | Code C avec bibliothèques Arduino |
| Interfacer des composants | LEDs, potentiomètres, matrice MAX7219 |
| Créer un jeu interactif | Gameplay Pong complet |
| Travailler en équipe | Répartition des tâches, intégration |

### Enjeux et défis

**Enjeux :**
- **Contraintes hardware** : mémoire et puissance limitées de l'Arduino Nano
- **Temps réel** : rafraîchissement fluide de l'affichage
- **Ergonomie** : contrôles réactifs et gameplay agréable

**Défis rencontrés :**
- Synchronisation de l'affichage avec la logique de jeu
- Gestion du bruit des potentiomètres
- Coordination du travail à 4 sur un seul prototype physique

---

## Étapes de réalisation

### Phase 1 : Conception et montage (2 semaines)

- Choix des composants (Arduino Nano, MAX7219, potentiomètres)
- Conception du circuit sur breadboard
- Premiers tests de chaque composant individuellement

### Phase 2 : Développement par modules (4 semaines)

**Module Affichage :**
- Pilotage de la matrice LED MAX7219
- Rendu de la balle et des raquettes

**Module Contrôles :**
- Lecture des potentiomètres
- Mapping des valeurs sur la position des raquettes

**Module Logique de jeu :**
- Déplacement de la balle avec rebonds
- Calcul des angles selon la zone de la raquette touchée
- Détection des points marqués

**Module Score :**
- Affichage du score sur LEDs dédiées
- Détection de la victoire (premier à 3 points)

### Phase 3 : Intégration et tests (2 semaines)

- Assemblage des modules
- Tests de gameplay intensifs
- Ajustements de la difficulté (vitesse de la balle)

---

## Acteurs et interactions

| Acteur | Rôle | Contribution |
|--------|------|--------------|
| **Alexy VANOT** | Développeur | Logique de jeu, physique des rebonds |
| **Sandro Bakuradze** | Développeur | Module affichage |
| **Pierre Gervais** | Développeur | Module contrôles |
| **Brice Nyamsi** | Développeur | Module score, intégration |
| **Enseignant ESIEA** | Encadrement | Consignes, validation |

### Dynamique d'équipe

- **Répartition par modules** : chacun responsable d'une partie
- **Intégration régulière** : sessions communes pour assembler
- **Matériel partagé** : rotation pour les tests sur le prototype

---

## Résultats obtenus

### Spécifications techniques

| Composant | Description |
|-----------|-------------|
| Microcontrôleur | Arduino Nano |
| Affichage | Matrice LED 8x8 MAX7219 |
| Contrôleurs | 2 potentiomètres |
| Indicateurs de score | 6 LEDs (3 par joueur) |
| Langage | C avec bibliothèques Arduino |

### Règles du jeu implémentées

- Balle rebondissant à **45° vers le haut/bas** selon la zone de la raquette
- Rebond **horizontal** si la balle touche le centre
- **Premier à 3 points** gagne la partie
- Possibilité de relancer sans reset

### Pour l'équipe

- Projet fonctionnel présenté devant le jury
- Bonne note et retours positifs sur la qualité du gameplay

### Pour moi

- **Découverte de l'embarqué** et de ses contraintes
- **Travail en équipe** sur un projet technique
- **Compétences en C** et programmation bas niveau

---

## Lendemains du projet

### Aujourd'hui

Le code et les schémas sont disponibles sur GitHub. Le projet peut être reproduit par d'autres étudiants.

### Améliorations envisagées

- Ajout de niveaux de difficulté
- Effets sonores avec buzzer
- Mode solo contre une IA basique

### Ce que j'ai réinvesti

Ce projet m'a donné goût à l'électronique et aux systèmes embarqués, même si mon orientation s'est ensuite tournée vers le développement logiciel.

---

## Compétences mobilisées

Ce projet m'a permis de mobiliser et développer les compétences suivantes :

:::buttons
::button[Travail d'équipe]{link=/skills/teamwork icon=i-carbon-group}
::button[Créativité]{link=/skills/creativity icon=i-carbon-idea}
:::
`,Cs=`---
name: Quiz AI - Générateur de quiz intelligent
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
    to: https://github.com/alexyvanot/quiz-ai
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
team:
  - name: Alexy VANOT
    role: Développeur full-stack
---

::toc

## Mon regard critique

> Quiz AI représente ma **capacité à combiner IA et développement web** pour créer un produit utilisable. Ma valeur ajoutée ? Avoir conçu une expérience utilisateur fluide de bout en bout : coller un texte → configurer → jouer → voir ses résultats, le tout en quelques secondes grâce au prompt engineering optimisé.

**Mes apports principaux :**
- Architecture full-stack propre (SvelteKit + Express + Ollama)
- Prompt engineering pour générer des quiz cohérents et de qualité
- UX soignée avec feedback instantané et thème sombre moderne

**Ce que j'en retire :** Ce projet m'a appris l'importance du **prompt engineering** — la qualité des quiz dépend directement de la façon dont on formule les instructions à l'IA. J'ai aussi expérimenté le déploiement Docker avec support GPU.

---

## Présentation du projet

**Quiz AI** est un générateur de quiz intelligent qui utilise l'IA pour créer des questionnaires interactifs à partir de n'importe quel texte. Collez un article, un cours ou une documentation, et l'application génère automatiquement des questions à choix multiples pertinentes.

Le projet a été réalisé dans le cadre de mes études en **Prompt Engineering**.

![Démo de l'application|clean](https://raw.githubusercontent.com/alexyvanot/quiz-ai/main/src/lib/assets/demo_quiz.gif)

---

## Objectifs, Contexte et Enjeux

### Contexte académique

Ce projet a été réalisé en **4 jours** dans le cadre d'un module de **Prompt Engineering**. L'objectif était de créer une application concrète exploitant les capacités des LLMs (Large Language Models).

### Objectifs du projet

| Objectif | Réalisation |
|----------|-------------|
| Générer du contenu via IA | Intégration Ollama (llama3.2, gemma:2b) |
| Créer une interface utilisateur | SvelteKit + Tailwind CSS |
| Construire une API backend | Express.js REST API |
| Déployer facilement | Docker & Docker Compose |

### Enjeux et défis

**Enjeux :**
- **Qualité des quiz** : générer des questions pertinentes et des distracteurs crédibles
- **Performance** : temps de génération acceptable pour l'utilisateur
- **Configurabilité** : adapter le nombre de questions et de choix

**Défis rencontrés :**
- Prompt engineering pour éviter les questions ambiguës
- Parsing du JSON retourné par le LLM (parfois mal formaté)
- Gestion du temps de génération (10-30 secondes selon le modèle)

---

## Étapes de réalisation

### Phase 1 : Architecture et setup (1 jour)

- Choix de la stack : SvelteKit pour le frontend, Express pour l'API, Ollama pour l'IA
- Configuration Docker avec support GPU optionnel
- Structure du projet avec séparation claire des responsabilités

### Phase 2 : Intégration IA et prompt engineering (1,5 jours)

**Prompt engineering :**
- Conception du prompt système pour générer des quiz structurés
- Format JSON strict pour faciliter le parsing
- Gestion des cas limites (textes courts, langues mixtes)

**Backend Express :**
- Route \`/generate\` pour la création de quiz
- Gestion des timeouts et erreurs
- Support de plusieurs modèles Ollama

### Phase 3 : Interface utilisateur (1 jour)

**Fonctionnalités implémentées :**
- Zone de saisie pour coller le texte source
- Configuration (nombre de questions, choix, modèle IA)
- Lecteur de quiz interactif avec feedback instantané
- Écran de résultats avec détail des réponses

**Design :**
- Thème sombre inspiré de Discord
- Animations et transitions fluides
- Responsive design

### Phase 4 : Docker et documentation (0,5 jour)

- Dockerfile optimisé avec multi-stage build
- Docker Compose avec 3 profils (default, GPU, local)
- Téléchargement automatique des modèles au premier lancement
- README complet avec instructions d'installation

---

## Acteurs et interactions

| Acteur | Rôle | Interactions |
|--------|------|--------------|
| **Moi (développeur)** | Conception et développement full-stack | Projet individuel |
| **Enseignant Prompt Engineering** | Cadrage et évaluation | Consignes, feedback |
| **Ollama** | Moteur IA | Appels API pour la génération |

---

## Résultats obtenus

### Fonctionnalités livrées

- ✅ Génération de quiz à partir de n'importe quel texte
- ✅ Support de plusieurs modèles IA (llama3.2, gemma:2b)
- ✅ Configuration flexible (3-10 questions, 2-4 choix)
- ✅ Interface interactive avec scoring en temps réel
- ✅ Déploiement Docker one-command

### Performance

| Métrique | Valeur |
|----------|--------|
| Temps de génération (llama3.2) | 15-30 secondes |
| Temps de génération (gemma:2b) | 5-10 secondes |
| Qualité des questions | ~85% pertinentes |

### Pour moi

- **Maîtrise du prompt engineering** pour la génération structurée
- **Compétences full-stack** SvelteKit + Express
- **Expérience Docker** avec support GPU

---

## Lendemains du projet

### Aujourd'hui

Le projet est disponible sur GitHub et peut être déployé en une commande. Il sert de démonstration de mes compétences en IA et développement web.

### Améliorations envisagées

- Support de l'upload de fichiers (PDF, Word)
- Historique des quiz générés
- Mode multijoueur en temps réel
- Export des quiz (JSON, PDF)

### Ce que j'ai réinvesti

Les techniques de prompt engineering apprises ici me servent pour d'autres projets intégrant des LLMs.

---

## Compétences mobilisées

Ce projet m'a permis de mobiliser et développer les compétences suivantes :

:::buttons
::button[Svelte]{link=/skills/svelte icon=i-logos-svelte-icon}
::button[Autonomie]{link=/skills/autonomy icon=i-carbon-user-certification}
::button[Créativité]{link=/skills/creativity icon=i-carbon-idea}
:::
`,js=`---
name: Snake Game AI - Apprentissage par algorithmes génétiques
slug: snake-game-ai
published: true
pinned: true
category: technique
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
team:
  - name: Alexy VANOT
    role: Développeur ML
---

::toc

## Mon regard critique

> Ce projet m'a fait comprendre la puissance et les limites de l'**apprentissage par renforcement** via algorithmes génétiques. Ma valeur ajoutée ? Avoir optimisé les paramètres d'entraînement pour atteindre **98% de performance** sur le modèle horizontal, et avoir documenté l'ensemble du processus d'expérimentation.

**Mes apports principaux :**
- Optimisation des hyperparamètres (taux de mutation, taille de population)
- Visualisation de l'apprentissage en temps réel
- Analyse comparative des modèles vertical et horizontal

**Ce que j'en retire :** J'ai compris que l'apprentissage par algorithmes génétiques est fascinant mais coûteux en temps de calcul. La convergence peut prendre des milliers de générations. Ce projet m'a aussi appris à être patient et à laisser l'entraînement tourner pendant des heures.

---

## Présentation du projet

**Snake Game AI** est un projet de Machine Learning qui entraîne une intelligence artificielle à jouer au jeu classique Snake. L'IA utilise des **algorithmes génétiques** combinés à des **réseaux de neurones** pour apprendre à jouer sans aucune programmation explicite des règles.

Le snake apprend en évoluant sur plusieurs générations : les meilleurs individus sont sélectionnés et leurs "gènes" (poids du réseau neuronal) sont transmis à la génération suivante.

<img src="https://raw.githubusercontent.com/alexyvanot/Snake-Game-AI/main/assets/animfull.gif" alt="Snake Game AI" width="350" />

---

## Objectifs, Contexte et Enjeux

### Contexte académique

Ce projet a été réalisé dans le cadre d'un module **Machine Learning** à l'ESIEA. Il s'appuie sur un codebase fourni par l'enseignant, que j'ai amélioré et optimisé.

### Objectifs du projet

| Objectif | Réalisation |
|----------|-------------|
| Comprendre les algorithmes génétiques | Implémentation complète |
| Entraîner un réseau neuronal | Sans TensorFlow (NumPy only) |
| Optimiser les performances | 98% de score maximal |
| Visualiser l'apprentissage | Pygame pour le rendu |

### Enjeux et défis

**Enjeux :**
- **Convergence** : trouver les bons hyperparamètres pour que l'IA apprenne
- **Performance** : temps d'entraînement raisonnable
- **Généralisation** : IA capable de jouer dans différentes configurations

**Défis rencontrés :**
- Équilibre exploration/exploitation dans l'algorithme génétique
- Éviter les minima locaux (snake qui tourne en rond)
- Optimisation du temps de calcul

---

## Étapes de réalisation

### Phase 1 : Compréhension et setup (3 jours)

- Analyse du codebase fourni
- Compréhension de l'architecture du réseau neuronal
- Configuration de l'environnement (Python 3.13, NumPy, Pygame)

### Phase 2 : Expérimentation des hyperparamètres (1 semaine)

**Paramètres testés :**
- Taille de la population (50, 100, 200)
- Taux de mutation (0.01, 0.05, 0.1)
- Nombre de générations (500, 1000, 2000)
- Architecture du réseau (nombre de couches, neurones)

**Méthode :**
- Tests systématiques avec logging des résultats
- Comparaison des scores moyens et maximaux

### Phase 3 : Entraînement des modèles finaux (2 jours)

**Modèle Vertical :**
- 573 itérations d'entraînement
- Score maximal : 96%

**Modèle Horizontal :**
- 1000 itérations d'entraînement
- Score maximal : 98%

### Phase 4 : Documentation et analyse (2 jours)

- Sauvegarde des modèles entraînés (.txt)
- Création des GIFs de démonstration
- Rédaction de la documentation

---

## Acteurs et interactions

| Acteur | Rôle | Interactions |
|--------|------|--------------|
| **Moi (développeur ML)** | Optimisation et entraînement | Projet individuel |
| **Enseignant ML** | Fourniture du codebase initial | Consignes, évaluation |

---

## Résultats obtenus

### Performance des modèles

| Modèle | Itérations | Meilleur score |
|--------|------------|----------------|
| **Vertical** | 573/1000 | 96.00% |
| **Horizontal** | 1000/1000 | 98.00% |

### Observations

- Le modèle horizontal converge mieux (espace de recherche plus adapté ?)
- Les premières générations sont chaotiques, puis l'apprentissage s'accélère
- Les modèles évitent généralement les murs mais peuvent se coincer

### Pour moi

- **Compréhension profonde** des algorithmes génétiques
- **Expérience en optimisation** d'hyperparamètres
- **Patience** : l'entraînement peut prendre des heures

---

## Lendemains du projet

### Aujourd'hui

Les modèles entraînés sont disponibles sur GitHub. Le projet peut servir de base pour d'autres expérimentations en apprentissage par renforcement.

### Améliorations envisagées

- Migration vers PyTorch pour plus de flexibilité
- Ajout du Q-Learning pour comparaison
- Entraînement sur GPU pour accélérer la convergence
- Visualisation des poids du réseau neuronal

### Ce que j'ai réinvesti

Ce projet m'a donné une bonne base pour comprendre l'apprentissage par renforcement, que j'ai pu approfondir dans d'autres contextes.

---

## Compétences mobilisées

Ce projet m'a permis de mobiliser et développer les compétences suivantes :

:::buttons
::button[Python]{link=/skills/python icon=i-logos-python}
::button[Autonomie]{link=/skills/autonomy icon=i-carbon-user-certification}
:::
`,As=`---
name: Squat Counter IA - Détection de pose avec MediaPipe
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
    to: https://github.com/alexyvanot/squat-counter-ia
skills:
  - python
  - opencv
  - mediapipe
  - streamlit
  - numpy
attachments:
  - label: Démo de l'application
    src: https://raw.githubusercontent.com/alexyvanot/squat-counter-ia/main/resources/images/demo.png
team:
  - name: Alexy VANOT
    role: Développeur
---

::toc

## Mon regard critique

> Ce mini-projet réalisé en une journée m'a démontré la **puissance des outils de vision par ordinateur modernes**. Grâce à MediaPipe, j'ai pu implémenter une détection de pose en temps réel en quelques heures seulement.

**Mes apports principaux :**
- Configuration fine des seuils de détection (angles, positions)
- Interface utilisateur intuitive avec jauge visuelle
- Architecture modulaire et configurable

**Ce que j'en retire :** J'ai découvert MediaPipe et sa simplicité d'utilisation. En une journée de TP, j'ai pu créer une application fonctionnelle avec détection de pose en temps réel. Cela m'a donné envie d'explorer davantage la computer vision.

---

## Présentation du projet

**Squat Counter IA** est une application de **computer vision** qui compte automatiquement les squats en analysant la pose de l'utilisateur via la webcam. Elle utilise **MediaPipe** pour la détection du squelette et **Streamlit** pour l'interface.

![Démo de l'application|clean](https://raw.githubusercontent.com/alexyvanot/squat-counter-ia/main/resources/images/demo.png)

---

## Objectifs, Contexte et Enjeux

### Contexte académique

Ce projet a été réalisé dans le cadre d'un **TP universitaire** donné par Ilyes Talbi avec la consigne suivante :

> "Construire un compteur de squats utilisant l'estimation de pose humaine. Utiliser MediaPipe pour extraire les positions des articulations, calculer les angles et distances pour détecter les squats, et afficher le tout avec une UI Streamlit."

### Objectifs du projet

| Objectif | Réalisation |
|----------|-------------|
| Détection de pose en temps réel | MediaPipe Pose |
| Calcul des angles articulaires | NumPy |
| Interface utilisateur intuitive | Streamlit + jauge visuelle |
| Configuration des seuils | Fichier de config dédié |

### Enjeux et défis

**Enjeux :**
- **Précision** : détecter correctement les squats sans faux positifs
- **Temps réel** : traitement fluide de la vidéo webcam
- **Ergonomie** : interface simple et informative

**Défis rencontrés :**
- Calibrer les seuils pour différentes morphologies
- Gérer les cas limites (mauvais éclairage, angle de caméra)

---

## Étapes de réalisation

### Phase 1 : Configuration MediaPipe (2h)

- Installation et configuration de MediaPipe Pose
- Test de détection des points clés du squelette
- Extraction des coordonnées des articulations (genoux, hanches)

### Phase 2 : Logique de détection (2h)

**Algorithme implémenté :**

| État | Angle des genoux | Position des hanches |
|------|------------------|----------------------|
| **Debout** | > 150° | Haute (< 0.60) |
| **Squat** | < 100° | Basse (> 0.70) |

- Calcul des angles entre les articulations
- Machine à états pour compter les répétitions
- Système de validation anti-rebond

### Phase 3 : Interface Streamlit (2h)

- Affichage de la vidéo avec overlay du squelette
- Jauge visuelle dynamique (vert → rouge selon la position)
- Compteur de squats en temps réel
- Configuration des seuils ajustable

### Phase 4 : Tests et ajustements (1h)

- Tests avec différents utilisateurs
- Ajustement des seuils de détection
- Documentation du projet

---

## Acteurs et interactions

| Acteur | Rôle | Interactions |
|--------|------|--------------|
| **Moi (développeur)** | Développement complet | Projet individuel |
| **Ilyes Talbi** | Enseignant, consignes du TP | Fourniture du sujet |

---

## Résultats obtenus

### Application fonctionnelle

- **Détection en temps réel** de la pose humaine
- **Comptage précis** des squats (99%+ de précision dans de bonnes conditions)
- **Interface intuitive** avec feedback visuel
- **Configuration flexible** des seuils

### Pour moi

- **Découverte de MediaPipe** et de ses capacités
- **Expérience en Streamlit** pour le prototypage rapide
- **Compréhension de la pose estimation** et des calculs d'angles

---

## Lendemains du projet

### Aujourd'hui

Le projet est disponible sur GitHub et peut servir de base pour d'autres applications de fitness tracking.

### Améliorations envisagées

- Ajout d'autres exercices (pompes, fentes, etc.)
- Analyse de la qualité du mouvement (feedback correctif)
- Version mobile avec TensorFlow Lite
- Historique des entraînements

### Ce que j'ai réinvesti

La maîtrise de MediaPipe m'a été utile pour d'autres projets de computer vision.

---

## Compétences mobilisées

Ce projet m'a permis de mobiliser et développer les compétences suivantes :

:::buttons
::button[Python]{link=/skills/python icon=i-logos-python}
::button[Autonomie]{link=/skills/autonomy icon=i-carbon-user-certification}
:::
`,Ls=`---
name: SUN Auto - Automatisation du cycle de vie applicatif
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
  - name: Tuteur entreprise
    role: Responsable technique
---

::toc

## Mon regard critique

> Ce projet représente **ma plus grande fierté technique** de mon alternance. En partant d'une feuille blanche, j'ai conçu et développé seul un système qui répond à un vrai besoin métier. Ma valeur ajoutée ? Avoir su transformer un problème organisationnel flou ("on a trop d'applications obsolètes") en une solution technique concrète et automatisée.

**Mes apports principaux :**
- Architecture modulaire que j'ai pensée dès le départ pour l'évolutivité
- Intégration avec les outils existants (GitLab, Jenkins) sans perturber les équipes
- Documentation technique complète pour assurer la pérennité

**Ce que j'en retire :** Ce projet m'a appris à gérer un cycle de développement complet en autonomie, de l'analyse du besoin à la mise en production. J'ai aussi compris l'importance de **penser "maintenance" dès la conception** — le code que j'écris vivra après moi.

---

## Présentation du projet

**SUN Auto** (SOLEIL Unified Notification Auto) est un système que j'ai développé durant mon alternance au **Synchrotron SOLEIL** pour automatiser la surveillance et la gestion du cycle de vie des applications internes.

Le Synchrotron SOLEIL maintient un parc de plusieurs centaines d'applications. Avec le temps, certaines deviennent obsolètes, non maintenues ou vulnérables. SUN Auto détecte automatiquement ces situations et orchestre le processus de notification et d'archivage.

---

## Objectifs, Contexte et Enjeux

### Contexte organisationnel

Le Synchrotron SOLEIL est un grand instrument de recherche scientifique. Son service informatique supporte l'ensemble des besoins numériques : applications métier, outils de pilotage des lignes de lumière, infrastructure réseau.

Avant SUN Auto, la gestion des applications en fin de vie était **manuelle et incomplète** :
- Pas de vision exhaustive du parc applicatif
- Détection des problèmes au cas par cas
- Notifications manuelles, souvent oubliées

### Objectifs du projet

| Objectif | Indicateur de succès |
|----------|----------------------|
| Inventorier 100% des applications | Scan automatique complet |
| Détecter les anomalies en < 24h | Métriques de santé automatisées |
| Automatiser les notifications | Escalade multi-niveau sans intervention |
| Archiver proprement les applications EOL | Workflow documenté et traçable |

### Enjeux et risques

**Enjeux :**
- **Sécurité** : applications vulnérables = portes d'entrée pour attaques
- **Ressources** : applications "zombies" consomment serveurs et temps de support
- **Conformité** : traçabilité exigée par les audits

**Risques identifiés :**
- Résistance au changement des équipes habituées au manuel
- Faux positifs pouvant générer des alertes inutiles
- Complexité d'intégration avec l'existant hétérogène

---

## Étapes de réalisation

### Phase 1 : Analyse et conception (2 mois)

- Interviews des responsables d'équipe pour comprendre les besoins
- Cartographie des outils existants (GitLab, Jenkins, bases de données)
- Rédaction d'un document d'architecture validé par mon tuteur
- Choix technologiques : Java 17 + Spring Boot 3 pour la cohérence avec l'existant

### Phase 2 : Développement du cœur (4 mois)

**Module Discovery :**
- Scan automatique de l'infrastructure GitLab via API
- Extraction des métadonnées de chaque application
- Détection des liens entre composants (dépendances, sous-modules)

**Module Metrics :**
- Collecte des indicateurs de santé (dernière mise à jour, dépendances EOL, vulnérabilités)
- Algorithme de scoring pour prioriser les applications à risque

### Phase 3 : Système de notification (3 mois)

**Module Notification :**
- Chaîne d'escalade : développeur → responsable → direction
- Templates d'emails contextualisés par niveau d'urgence
- Historique des notifications pour éviter le spam

### Phase 4 : Archivage et mise en production (3 mois)

**Module Archive :**
- Workflow d'archivage avec sauvegarde documentée
- Traçabilité complète des décisions

**Mise en production :**
- Déploiement Docker sur l'infrastructure SOLEIL
- Formation des administrateurs
- Période de rodage avec ajustements

---

## Acteurs et interactions

| Acteur | Rôle | Interactions |
|--------|------|--------------|
| **Moi (développeur)** | Conception, développement, documentation | Autonomie sur le code, points hebdo avec tuteur |
| **Tuteur entreprise** | Validation technique, accès ressources | Revue d'architecture, déblocages administratifs |
| **Équipe infrastructure** | Mise à disposition des serveurs | Coordination pour le déploiement |
| **Responsables d'équipe** | Utilisateurs finaux des notifications | Recueil des besoins, feedback sur les alertes |
| **Direction informatique** | Sponsor du projet | Validation des objectifs, présentation finale |

---

## Résultats obtenus

### Pour l'entreprise

| Indicateur | Avant | Après |
|------------|-------|-------|
| Applications non maintenues identifiées | Manuel (~60% couverture) | 100% automatisé |
| Temps de détection d'une anomalie | Semaines/mois | < 24h |
| Notifications d'alerte | Manuelles, oubliées | Automatiques, traçables |
| Archivage des applications EOL | Ad hoc | Processus structuré |

### Pour moi

- **Montée en compétence Java/Spring Boot** sur un projet de grande envergure
- **Expérience DevOps** : CI/CD, Docker, intégration avec GitLab
- **Soft skills** : communication avec des profils non-techniques, gestion de projet en autonomie

---

## Lendemains du projet

### Aujourd'hui

SUN Auto est en **production active** au Synchrotron SOLEIL. Le système tourne quotidiennement et a déjà permis d'identifier et traiter une vingtaine d'applications obsolètes.

### Évolutions prévues

- Intégration avec le système de ticketing pour créer automatiquement des demandes d'archivage
- Dashboard de visualisation du parc applicatif
- Extension aux applications hébergées hors infrastructure principale

### Mon implication future

Même après mon alternance, la documentation que j'ai rédigée permettra aux équipes de maintenir et faire évoluer le système. J'ai formé un collègue pour assurer la transition.

---

## Compétences mobilisées

Ce projet m'a permis de mobiliser et développer les compétences suivantes :

:::buttons
::button[Java]{link=/skills/java icon=i-logos-java}
::button[Autonomie]{link=/skills/autonomy icon=i-carbon-user-certification}
::button[Travail d'équipe]{link=/skills/teamwork icon=i-carbon-group}
:::
`,Ps=`---
name: Svelte Static Blog - Mon premier projet Svelte
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
    to: https://github.com/alexyvanot/testing-blog
  - label: Demo
    to: https://alexyvanot.github.io/testing-blog/
skills:
  - svelte
  - typescript
  - javascript
  - html
  - css
  - markdown
team:
  - name: Alexy VANOT
    role: Développeur
---

::toc

## Mon regard critique

> Ce projet marque ma **découverte de Svelte** et le début d'une passion ! En créant ce générateur de blog statique, j'ai été convaincu par la simplicité et l'élégance du framework. C'est d'ailleurs pourquoi **ce portfolio est aussi construit avec Svelte**.

**Mes apports principaux :**
- Architecture modulaire pour la gestion des articles Markdown
- Pipeline CI/CD complet avec GitHub Actions
- Design minimaliste orienté contenu

**Ce que j'en retire :** Ce projet m'a fait découvrir l'écosystème Svelte et SvelteKit. La courbe d'apprentissage douce et les performances exceptionnelles m'ont convaincu. J'ai aussi approfondi mes connaissances en génération de sites statiques et en CI/CD.

---

## Présentation du projet

**Svelte Static Blog** est un générateur de blog statique moderne et minimaliste. Il permet de créer des articles en **Markdown** qui sont automatiquement convertis en pages HTML statiques, déployables partout.

Ce projet m'a servi de terrain d'apprentissage pour explorer **SvelteKit** et comprendre comment construire un système de gestion de contenu léger et performant.

---

## Objectifs, Contexte et Enjeux

### Contexte personnel

Premier projet Svelte, réalisé en **autoformation** pour découvrir le framework et son écosystème.

### Objectifs du projet

| Objectif | Réalisation |
|----------|-------------|
| Découvrir Svelte et SvelteKit | Mission accomplie ✅ |
| Créer un blog statique | Générateur fonctionnel |
| Implémenter un pipeline CI/CD | GitHub Actions |
| Maîtriser le déploiement statique | GitHub Pages |

### Enjeux et défis

**Enjeux :**
- **Apprentissage** : comprendre la philosophie Svelte
- **Performance** : site statique ultra-rapide
- **Maintenabilité** : architecture claire et évolutive

**Défis rencontrés :**
- Comprendre le système de routing de SvelteKit
- Configurer correctement l'adapter statique
- Mettre en place le déploiement automatisé

---

## Étapes de réalisation

### Phase 1 : Découverte de Svelte (3 jours)

- Tutoriel officiel Svelte
- Compréhension du système de réactivité
- Premiers composants basiques

### Phase 2 : Setup SvelteKit (2 jours)

- Initialisation du projet SvelteKit
- Configuration TypeScript
- Mise en place de la structure de fichiers

\`\`\`
svelte-blog/
├── posts/              # Articles en Markdown
├── src/
│   ├── routes/         # Pages Svelte
│   └── lib/            # Composants réutilisables
├── static/             # Assets statiques
└── svelte.config.js    # Configuration SvelteKit
\`\`\`

### Phase 3 : Système de blog (4 jours)

- Parsing des fichiers Markdown avec frontmatter
- Génération dynamique des pages d'articles
- Liste des articles avec tri par date
- Navigation entre articles

### Phase 4 : Déploiement et CI/CD (3 jours)

- Configuration de l'adapter statique
- Workflow GitHub Actions pour le build automatique
- Déploiement sur GitHub Pages

---

## Acteurs et interactions

| Acteur | Rôle | Interactions |
|--------|------|--------------|
| **Moi (développeur)** | Développement complet | Projet personnel |
| **Communauté Svelte** | Ressources et documentation | Discord, docs officielles |

---

## Résultats obtenus

### Application fonctionnelle

- **Support Markdown complet** avec frontmatter
- **Génération statique** ultra-performante
- **Design minimaliste** orienté contenu
- **SEO-friendly** par défaut
- **Déploiement automatique** à chaque push

### Pour moi

| Concept appris | Description |
|----------------|-------------|
| **Réactivité Svelte** | Système simple et intuitif |
| **SvelteKit** | Framework full-stack moderne |
| **Static Adapter** | Génération de sites statiques |
| **Markdown Processing** | Parsing et rendu de fichiers |
| **GitHub Actions** | Workflows CI/CD |

---

## Lendemains du projet

### Aujourd'hui

Le projet est accessible en démo et a servi de **base d'apprentissage** pour créer ce portfolio.

### Impact sur mes projets suivants

Ce premier projet Svelte m'a tellement convaincu que :
- **Ce portfolio** est construit avec SvelteKit
- J'ai adopté Svelte comme framework frontend principal
- J'explore maintenant les fonctionnalités avancées (runes Svelte 5, etc.)

### Ce que j'ai réinvesti

Les connaissances acquises m'ont permis de créer ce portfolio bien plus élaboré, avec des composants custom et une architecture plus complexe.

---

## Compétences mobilisées

Ce projet m'a permis de mobiliser et développer les compétences suivantes :

:::buttons
::button[Svelte]{link=/skills/svelte icon=i-logos-svelte-icon}
::button[Autonomie]{link=/skills/autonomy icon=i-carbon-user-certification}
::button[Créativité]{link=/skills/creativity icon=i-carbon-idea}
:::
`,ks=`---
name: TAP - Plateforme de Tests Automatisés
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
  - name: Tuteur entreprise
    role: Responsable technique
  - name: Équipes scientifiques
    role: Utilisateurs finaux
---

::toc

## Mon regard critique

> TAP est le projet **le plus complet** de mon alternance. Il combine backend robuste, communication temps réel, intégration avec des outils tiers et une vraie attention à l'UX. Ma plus grande fierté ? Avoir créé un outil que les équipes **utilisent vraiment** — un outil interne mal conçu finit toujours abandonné.

**Mes apports principaux :**
- Architecture WebSocket avec batching intelligent pour le streaming temps réel
- Choix d'Allure (standard ouvert) plutôt qu'un format propriétaire
- UX soignée qui a favorisé l'adoption par les équipes

**Ce que j'en retire :** J'ai appris que **tester une plateforme de tests est méta mais nécessaire**. J'ai aussi compris l'importance du feedback utilisateur : les meilleures fonctionnalités sont venues des retours terrain, pas de mes suppositions initiales.

---

## Présentation du projet

**TAP** (Test Automation Platform) est une plateforme de centralisation et d'exécution des tests automatisés que j'ai développée au **Synchrotron SOLEIL**. Elle permet aux équipes de lancer des campagnes de tests, de suivre leur exécution en temps réel et de consulter des rapports Allure interactifs.

Le projet répond à un besoin concret : avant TAP, les tests étaient dispersés, difficiles à consulter et sans historique exploitable.

---

## Objectifs, Contexte et Enjeux

### Contexte organisationnel

Au Synchrotron SOLEIL, les équipes scientifiques et techniques maintiennent de nombreuses applications critiques. La qualité logicielle est essentielle : un bug dans un outil de pilotage peut compromettre des expériences scientifiques coûteuses.

**Situation avant TAP :**
- Tests dispersés : chaque équipe avait ses propres scripts et outils
- Résultats dans les logs CI uniquement, difficiles à consulter
- Pas de vision globale de la qualité ni d'historique

### Objectifs du projet

| Objectif | Indicateur de succès |
|----------|----------------------|
| Centraliser tous les tests | Interface unique multi-frameworks |
| Visibilité temps réel | Streaming WebSocket fonctionnel |
| Rapports exploitables | Intégration Allure avec historique |
| Adoption par les équipes | Utilisation quotidienne effective |

### Enjeux et risques

**Enjeux :**
- **Qualité logicielle** : détecter les régressions avant la production
- **Productivité** : réduire le temps d'analyse des résultats de tests
- **Standardisation** : uniformiser les pratiques de test

**Risques identifiés :**
- Performance : gestion de nombreuses exécutions simultanées
- Adoption : résistance si l'outil est plus complexe que les scripts existants
- Maintenance : dépendance à un framework de reporting (Allure)

---

## Étapes de réalisation

### Phase 1 : Étude et architecture (1,5 mois)

- Benchmark des solutions existantes (Jenkins, GitLab CI, outils spécialisés)
- Recueil des besoins auprès des équipes utilisatrices
- Conception de l'architecture : séparation frontend/backend, choix WebSocket pour le temps réel
- Validation technique avec mon tuteur

### Phase 2 : Développement du backend (4 mois)

**Orchestration des tests :**
- API REST pour la configuration et le lancement des campagnes
- Pool de threads avec queue de priorités pour la gestion de la concurrence
- Support multi-frameworks (JUnit, pytest, TestNG)

**Streaming temps réel :**
- Implémentation WebSocket avec protocole STOMP
- Batching intelligent (envoi groupé toutes les 500ms) pour optimiser les performances
- Gestion de la reconnexion automatique côté client

### Phase 3 : Intégration Allure et frontend (3 mois)

**Rapports Allure :**
- Génération automatique après chaque campagne
- Catégorisation par features, stories et sévérité
- Historique et tendances d'exécution

**Interface utilisateur :**
- Dashboard de monitoring des campagnes
- Visualisation en direct des résultats
- Comparaison entre campagnes

### Phase 4 : Tests, déploiement et formation (1,5 mois)

- Tests de charge pour valider la tenue sous plusieurs exécutions simultanées
- Déploiement Docker sur l'infrastructure SOLEIL
- Rédaction de la documentation utilisateur
- Sessions de formation pour les équipes

---

## Acteurs et interactions

| Acteur | Rôle | Interactions |
|--------|------|--------------|
| **Moi (développeur)** | Conception, développement, documentation | Responsabilité technique complète |
| **Tuteur entreprise** | Validation, orientation technique | Points réguliers, revue d'architecture |
| **Équipes scientifiques** | Utilisateurs finaux | Recueil besoins, feedback, tests beta |
| **Équipe infrastructure** | Support déploiement | Mise à disposition des ressources |

### Interactions clés

- **Feedback loop** avec les utilisateurs : j'ai organisé des sessions de démonstration régulières pour recueillir les retours et ajuster les fonctionnalités
- **Collaboration avec l'équipe infra** : coordination pour l'intégration avec les runners de tests existants

---

## Résultats obtenus

### Pour l'entreprise

| Aspect | Avant TAP | Avec TAP |
|--------|-----------|----------|
| Visibilité des tests | Logs CI uniquement | Dashboard centralisé |
| Temps d'accès aux résultats | Minutes de recherche | Instantané |
| Comparaison historique | Impossible | Intégrée |
| Adoption par les équipes | Variable | Généralisée |

**Impact concret :** Réduction du temps d'analyse des échecs de tests de **70%** grâce aux rapports Allure détaillés et à la navigation intuitive.

### Pour moi

- **Maîtrise des WebSockets** et de la communication temps réel
- **Compétences en UX** : comprendre que l'adoption dépend de la facilité d'utilisation
- **Gestion de projet** : coordination entre développement et besoins utilisateurs

---

## Lendemains du projet

### Aujourd'hui

TAP est **en production active** et utilisé quotidiennement par plusieurs équipes du Synchrotron. Le système a traité des milliers de campagnes de tests depuis son lancement.

### Évolutions prévues

- Intégration avec Slack pour les notifications d'échec
- Support de nouveaux frameworks de tests (Robot Framework)
- Tableaux de bord de métriques qualité pour la direction

### Pérennité

J'ai documenté l'architecture et les choix techniques pour faciliter la maintenance future. Un collègue a été formé pour reprendre le projet après mon départ.

---

## Compétences mobilisées

Ce projet m'a permis de mobiliser et développer les compétences suivantes :

:::buttons
::button[Java]{link=/skills/java icon=i-logos-java}
::button[Autonomie]{link=/skills/autonomy icon=i-carbon-user-certification}
::button[Créativité]{link=/skills/creativity icon=i-carbon-idea}
:::
`,_s=`---
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
`,Ts=`---
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
`,ws=`---
name: CIFAR-10 - Classification d'images par Deep Learning
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
    to: https://github.com/alexyvanot/tpvpocifar
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
team:
  - name: Alexy VANOT
    role: Développeur unique
---

::toc

## Mon regard critique

> Ce projet m'a permis de comprendre le **pipeline complet du machine learning** : de l'exploration des données à l'inférence en production. Ma valeur ajoutée ? Avoir créé non seulement un modèle fonctionnel, mais aussi une API Flask et une interface Streamlit pour le rendre utilisable par n'importe qui.

**Mes apports principaux :**
- Architecture CNN optimisée pour CIFAR-10 (2 couches convolutives + denses)
- API REST pour l'inférence en temps réel
- Interface utilisateur permettant de tester ses propres images

**Ce que j'en retire :** J'ai appris que l'entraînement d'un modèle n'est que la moitié du travail — le déploiement et l'interfaçage sont tout aussi importants. Ce projet m'a aussi montré l'importance de la visualisation pour comprendre le comportement d'un réseau de neurones.

---

## Présentation du projet

**TPVPOCIFAR** est un projet de vision par ordinateur qui implémente un pipeline complet de classification d'images sur le dataset **CIFAR-10**. Il couvre l'ensemble du processus : exploration des données, prétraitement, entraînement d'un CNN, évaluation et déploiement via API.

Le projet inclut une interface Streamlit permettant à n'importe qui de tester le modèle avec ses propres images.

![Courbes d'entraînement|clean](https://raw.githubusercontent.com/alexyvanot/tpvpocifar/main/Figure_1.png)

---

## Objectifs, Contexte et Enjeux

### Contexte académique

Ce projet a été réalisé dans le cadre d'un TP de **Vision Par Ordinateur** (VPO). L'objectif pédagogique était de mettre en pratique les concepts de deep learning sur un dataset classique et bien documenté.

### Le dataset CIFAR-10

CIFAR-10 est un benchmark standard en computer vision contenant **60 000 images** couleur 32×32 pixels réparties en 10 classes :

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

### Objectifs techniques

| Objectif | Réalisation |
|----------|-------------|
| Explorer et prétraiter les données | Notebook Jupyter |
| Entraîner un CNN | TensorFlow/Keras |
| Évaluer les performances | Métriques et visualisations |
| Déployer le modèle | API Flask + Interface Streamlit |

### Enjeux et défis

**Enjeux :**
- **Apprentissage** : comprendre le fonctionnement des CNN en pratique
- **Généralisation** : éviter l'overfitting sur un petit dataset
- **Déploiement** : rendre le modèle accessible

**Défis techniques :**
- Images de faible résolution (32×32) limitant la complexité des features
- Équilibre entre complexité du modèle et temps d'entraînement
- Gestion des images utilisateur (format, dimensions)

---

## Étapes de réalisation

### Phase 1 : Exploration des données (1 jour)

- Chargement du dataset via \`tensorflow.keras.datasets\`
- Visualisation d'exemples de chaque classe
- Analyse de la distribution des données
- Normalisation des valeurs de pixels (0-1)

### Phase 2 : Construction du modèle CNN (1 jour)

**Architecture choisie :**
\`\`\`
Input (32×32×3)
    ↓
Conv2D (32 filtres, 3×3) + ReLU
    ↓
MaxPooling2D (2×2)
    ↓
Conv2D (64 filtres, 3×3) + ReLU
    ↓
MaxPooling2D (2×2)
    ↓
Flatten
    ↓
Dense (64) + ReLU
    ↓
Dense (10) + Softmax → Output
\`\`\`

**Choix techniques :**
- 2 couches de convolution : suffisant pour des images 32×32
- MaxPooling pour réduire la dimensionnalité
- Dropout pour limiter l'overfitting

### Phase 3 : Entraînement et évaluation (1 jour)

- Entraînement sur 50 epochs avec early stopping
- Validation sur 20% des données d'entraînement
- Visualisation des courbes loss/accuracy
- Matrice de confusion pour analyser les erreurs

### Phase 4 : Déploiement (1 jour)

**API Flask :**
- Endpoint POST \`/predict\` acceptant une image
- Prétraitement automatique (redimensionnement 32×32)
- Retour JSON avec classe prédite et confiance

**Interface Streamlit :**
- Upload d'image par l'utilisateur
- Appel à l'API Flask
- Affichage du résultat avec probabilités par classe

---

## Acteurs et interactions

| Acteur | Rôle | Interactions |
|--------|------|--------------|
| **Moi (développeur)** | Conception et développement complet | Projet individuel |
| **Enseignant VPO** | Cadrage et évaluation | Consignes, feedback |
| **Dataset CIFAR-10** | Source de données | Toronto University |

---

## Résultats obtenus

### Performance du modèle

| Métrique | Valeur |
|----------|--------|
| Accuracy (test set) | ~78% |
| Loss finale | ~0.65 |
| Temps d'entraînement | ~10 min (GPU) |

### Fonctionnalités livrées

- ✅ Notebook d'exploration et entraînement
- ✅ Modèle sauvegardé (\`.h5\`)
- ✅ API Flask pour l'inférence
- ✅ Interface Streamlit
- ✅ Documentation complète

### Pour moi

- **Maîtrise de TensorFlow/Keras** pour les CNN
- **Compréhension du pipeline ML** end-to-end
- **Compétences en déploiement** (Flask, Streamlit)

---

## Lendemains du projet

### Aujourd'hui

Le projet est disponible sur GitHub et peut servir de base pour d'autres expérimentations en classification d'images.

### Améliorations envisagées

- Data augmentation pour améliorer la généralisation
- Architectures plus profondes (ResNet, VGG)
- Transfer learning depuis des modèles pré-entraînés
- Déploiement cloud (Heroku, AWS Lambda)

### Apprentissages à réinvestir

Ce projet m'a donné les bases pour aborder des problèmes de computer vision plus complexes : détection d'objets, segmentation, etc.

---

## Compétences mobilisées

Ce projet m'a permis de mobiliser et développer les compétences suivantes :

:::buttons
::button[Python]{link=/skills/python icon=i-logos-python}
::button[Autonomie]{link=/skills/autonomy icon=i-carbon-user-certification}
::button[Créativité]{link=/skills/creativity icon=i-carbon-idea}
:::
`,Is=`---
name: Android Studio
slug: android-studio
published: true
category: devtools
color: green
logo: AndroidStudio
---

IDE officiel pour le développement Android. Émulateur, débogage et outils de build Gradle intégrés.
`,Ds=`---
name: Apache2
slug: apache2
published: true
category: devops
color: red
logo: Apache
---

Serveur web HTTP open-source. Configuration de virtual hosts, reverse proxy et modules.
`,Ms=`---
name: Arduino
slug: arduino
published: true
category: devtools
color: teal
logo: Arduino
---

::toc

# Arduino : l'électronique accessible

## 📌 Définition et contexte professionnel

**Arduino** est une plateforme open-source de **prototypage électronique** combinant des cartes microcontrôleurs et un environnement de développement (IDE). Créée en 2005, elle a démocratisé l'accès à l'embarqué et à l'IoT.

L'importance d'Arduino dans l'industrie et l'éducation :

- **Prototypage rapide** : idéal pour les POC et les MVPs hardware
- **Éducation** : porte d'entrée vers l'électronique et la programmation
- **IoT** : base de nombreux projets connectés
- **Communauté** : énorme bibliothèque de composants et de tutoriels
- **Interopérabilité** : compatible avec des centaines de capteurs et actionneurs

Même dans un contexte professionnel, Arduino reste pertinent pour le **prototypage** avant passage à des solutions industrielles.

---

## 🔍 Mes réalisations concrètes

### Nano Pong : jeu rétro sur Arduino Nano

J'ai développé **Nano Pong**, un jeu Pong complet fonctionnant sur Arduino Nano avec un écran OLED.

**Ma contribution** :
- **Conception du circuit** : Arduino Nano + écran OLED + potentiomètres + LEDs
- Programmation en **C/Arduino** avec optimisation mémoire
- Gestion des **entrées analogiques** pour les contrôles
- Implémentation d'une **IA** pour le mode solo

**Résultat** : jeu jouable avec un boîtier imprimé 3D, présenté en cours.

→ [Voir le projet Nano Pong](/projects/nano-pong)

### Projets personnels IoT

Plusieurs projets personnels m'ont permis d'explorer l'écosystème Arduino :

- **Station météo** : capteurs température/humidité + écran LCD
- **Automatisation** : contrôle de LEDs via Bluetooth
- **Détecteur de mouvement** : capteur PIR + buzzer

---

## 🎯 Autocritique et positionnement

### Niveau de maîtrise

| Domaine | Niveau |
|---------|--------|
| Programmation Arduino (C) | ★★★★☆ Avancé |
| Capteurs et actionneurs | ★★★★☆ Avancé |
| Protocoles (I2C, SPI, UART) | ★★★☆☆ Intermédiaire |
| Électronique (soudure, PCB) | ★★☆☆☆ Débutant |

### Marge de progression

- **ESP32/ESP8266** : Arduino Wi-Fi pour l'IoT connecté
- **Électronique** : conception de PCB, soudure CMS
- **Protocoles industriels** : CAN, Modbus

### Place dans mon profil

Arduino représente ma **porte d'entrée vers l'embarqué**. C'est une compétence complémentaire à mon profil principal (développement web/backend) qui me permet d'aborder des projets IoT.

### Conseils tirés de mon expérience

> *"Arduino est parfait pour apprendre. Mais n'hésitez pas à passer à l'ESP32 pour les projets nécessitant du Wi-Fi ou plus de puissance."*

- Commencer par les **exemples inclus** dans l'IDE Arduino
- Investir dans un **kit de capteurs** pour expérimenter
- Documenter ses montages avec des **schémas Fritzing**

---

## 📈 Évolution et perspectives

### Objectif à moyen terme

Explorer l'**ESP32** pour des projets IoT connectés et apprendre les bases de l'électronique (PCB, soudure).


`,Es=`---
name: Autonomie
slug: autonomy
published: true
category: soft
color: blue
logo: Autonomy
---

::toc

## Ma définition

L'autonomie, dans un contexte professionnel, désigne la capacité à prendre des initiatives, à résoudre des problèmes sans supervision constante, et à s'auto-former face à de nouvelles technologies ou méthodologies. Ce n'est pas travailler seul dans son coin, mais plutôt être capable de **porter un sujet de bout en bout** tout en sachant quand solliciter de l'aide.

Dans le monde tech actuel, cette compétence est devenue indispensable. Avec l'émergence de nouveaux frameworks chaque année, l'explosion des outils d'IA, et le travail à distance généralisé post-COVID, les entreprises recherchent des profils capables de **s'adapter rapidement** sans attendre une formation formelle. Selon une étude LinkedIn de 2024, l'autonomie figure dans le top 5 des soft skills les plus demandées par les recruteurs IT.

---

## Mes éléments de preuve

### 1. SUN Auto — Développement solo d'une plateforme complète

Lors de mon alternance au **Synchrotron SOLEIL**, j'ai développé seul la plateforme [SUN Auto](/projects/sun-auto) sur une période de 2 ans. Mon tuteur, responsable d'une équipe technique très occupée, ne pouvait me consacrer que quelques heures par semaine.

**Le défi** : Créer un outil d'automatisation pour les scientifiques sans spécifications détaillées, en partant de besoins exprimés oralement lors de réunions sporadiques.

**Mon approche autonome** :
- Organisation de mes propres sprints de 2 semaines avec des objectifs clairs
- Veille technologique indépendante sur Java/Spring Boot, les APIs REST et l'intégration Python
- Rédaction proactive de documentation technique pour les utilisateurs
- Mise en place d'un système de tests automatisés sans qu'on me le demande

**Résultat concret** : La plateforme est aujourd'hui utilisée quotidiennement par une dizaine de scientifiques, et mon tuteur m'a félicité pour ma capacité à "avancer sans qu'on ait besoin de me tenir la main".

### 2. Auto-formation Flutter — Du zéro au projet fonctionnel

En 2023, j'ai décidé d'explorer le développement mobile alors que ce n'était pas au programme de mon cursus. Sans cours ni tuteur, j'ai appris **Flutter et Dart** en autodidacte pour développer l'application [Georges le Chat](/projects/georges-le-chat).

**Ma méthode d'apprentissage** :
- Suivi du cours officiel Flutter (codelabs.developers.google.com)
- Création d'exercices personnels progressifs
- Lecture de code source de projets open-source
- Participation à des communautés Discord pour débloquer mes problèmes

**Résultat** : En 3 mois, j'ai livré une application complète avec assistant IA intégré, gestion de médias et interface fluide. Cette auto-formation a été plus efficace que beaucoup de cours magistraux que j'ai suivis.

### 3. Plateforme TAP — Initiative technique non demandée

Sur le projet [TAP (Tests Automatisés avec Allure)](/projects/tap), j'ai pris l'initiative d'intégrer une fonctionnalité que personne n'avait demandée : un système de **notifications Slack automatiques** en cas d'échec de tests critiques.

J'avais observé que les scientifiques découvraient souvent les erreurs de configuration plusieurs heures après, perdant un temps précieux. Sans attendre de validation, j'ai :
- Développé le module d'intégration Slack
- Testé avec un groupe pilote de 3 utilisateurs
- Présenté les résultats lors d'une réunion d'équipe

**Résultat** : La fonctionnalité a été adoptée et le temps de détection des erreurs est passé de plusieurs heures à quelques minutes.

---

## Mon autocritique

### Niveau de maîtrise actuel

| Critère | Évaluation | Commentaire |
|---------|------------|-------------|
| Prise d'initiative | ⭐⭐⭐⭐⭐ | Je propose régulièrement des améliorations |
| Auto-formation | ⭐⭐⭐⭐⭐ | Capable d'apprendre un nouveau framework en quelques semaines |
| Organisation personnelle | ⭐⭐⭐⭐ | Bonnes pratiques mais perfectible sous pression |
| Savoir demander de l'aide | ⭐⭐⭐ | Parfois je m'obstine trop longtemps seul |

### Marge de progression

Mon principal axe d'amélioration est de **mieux calibrer quand demander de l'aide**. L'autonomie ne signifie pas tout faire seul — j'ai parfois perdu du temps sur des blocages qu'un collègue aurait pu résoudre en 5 minutes. Je travaille sur la règle des "30 minutes" : si je bloque plus de 30 minutes, je sollicite quelqu'un.

### Place dans mon profil

L'autonomie est **la compétence centrale** de mon profil. Elle me permet de m'adapter aux environnements variés (alternance, projets personnels, travail d'équipe) et de monter rapidement en compétence sur de nouvelles technologies. C'est ce qui m'a permis de réussir mon alternance de 2 ans dans un environnement scientifique exigeant.

### Vitesse d'acquisition

Cette compétence s'est construite progressivement depuis le lycée, où j'ai commencé à coder seul. Elle s'est vraiment structurée pendant mes études supérieures, notamment grâce à des projets comme la création de ce portfolio ou mes expérimentations en réalité virtuelle.

### Conseil pour développer cette compétence

**Créez des projets personnels ambitieux.** La meilleure façon de développer son autonomie est de se lancer dans des projets où personne ne vous guidera. Fixez-vous des objectifs concrets (une app, un site, un outil) et obligez-vous à les terminer. Documentez vos apprentissages dans un journal ou un blog — cela structure la réflexion et renforce la rétention.

---

## Mon évolution

### Objectifs à moyen terme

- **Devenir référent technique** sur un projet d'équipe, capable de débloquer les autres
- **Structurer ma veille technologique** avec des outils comme Feedly et des alertes GitHub
- **Partager mes apprentissages** via des articles techniques ou des présentations internes

### Formations et actions prévues

- Mettre en place un système de prise de notes structuré (méthode Zettelkasten)
- Contribuer à des projets open-source pour me confronter à du code inconnu
- Lire "The Pragmatic Programmer" et "Deep Work" pour améliorer ma productivité autonome

L'autonomie restera un pilier de ma carrière — je vise des postes où l'on me confie des responsabilités et où je peux apporter ma valeur ajoutée sans micro-management.
`,Rs=`---
name: BungeeCord / Waterfall
slug: bungeecord
published: true
category: devtools
color: yellow
logo: BungeeCord
---

Proxy Minecraft pour connecter plusieurs serveurs. Waterfall est un fork optimisé avec corrections de bugs.
`,Os=`---
name: C
slug: c
published: true
category: pro-lang
color: gray
logo: C
---

::toc

# C : les fondations de la programmation système

## 📌 Définition et contexte professionnel

**C** est un langage de programmation **bas niveau** créé en 1972 par Dennis Ritchie. Souvent considéré comme le "père des langages modernes", C reste **incontournable** pour la programmation système, l'embarqué et les performances critiques.

L'importance de C dans l'industrie :

- **Systèmes d'exploitation** : Linux, Windows, macOS sont écrits en C
- **Embarqué** : microcontrôleurs, IoT, automobile
- **Performance** : jeux vidéo, bases de données, compilateurs
- **Portabilité** : compilateurs disponibles pour toutes les architectures
- **Fondation** : comprendre C aide à comprendre tous les autres langages

Dans un contexte où les langages haut niveau dominent, C reste essentiel pour comprendre **comment fonctionne réellement un ordinateur** : mémoire, pointeurs, allocation.

---

## 🔍 Mes réalisations concrètes

### Nano Pong : jeu embarqué sur Arduino

Le projet **Nano Pong** m'a permis de programmer un jeu Pong en C sur Arduino Nano.

**Ma contribution** :
- Programmation **bas niveau** en C pour Arduino
- Gestion de l'**écran OLED** via protocole I2C
- Lecture des **entrées analogiques** (potentiomètres)
- Optimisation pour les **contraintes mémoire** de l'Arduino (2KB RAM)

**Résultat** : jeu Pong fonctionnel sur un microcontrôleur avec seulement 32KB de flash.

→ [Voir le projet Nano Pong](/projects/nano-pong)

### Formation ESIEA : programmation système

Dans le cadre de ma formation à l'**ESIEA**, j'ai réalisé plusieurs projets en C :

- **Shell Unix** : implémentation d'un shell basique avec pipes et redirections
- **Allocation mémoire** : recréation d'un \`malloc\` simplifié
- **Structures de données** : listes chaînées, arbres binaires, tables de hachage

Ces projets m'ont permis de comprendre les **mécanismes internes** des systèmes.

---

## 🎯 Autocritique et positionnement

### Niveau de maîtrise

| Domaine | Niveau |
|---------|--------|
| Syntaxe et structures de base | ★★★★☆ Avancé |
| Pointeurs et mémoire | ★★★☆☆ Intermédiaire |
| Programmation système (POSIX) | ★★★☆☆ Intermédiaire |
| Embarqué / Arduino | ★★★★☆ Avancé |
| Optimisation bas niveau | ★★☆☆☆ Débutant |

### Marge de progression

- **Programmation système avancée** : threads POSIX, IPC, sockets
- **Debugging** : GDB, Valgrind pour la détection de fuites mémoire
- **Sécurité** : buffer overflows, programmation défensive

### Place dans mon profil

C est une **compétence fondamentale** qui m'aide à comprendre les langages de plus haut niveau. Je ne l'utilise pas quotidiennement mais il est précieux pour les projets embarqués et la compréhension des performances.

### Conseils tirés de mon expérience

> *"Apprendre C, c'est comprendre comment fonctionne vraiment un ordinateur. Même si vous ne l'utilisez jamais en production, ces connaissances vous serviront toujours."*

- **Dessiner la mémoire** pour comprendre les pointeurs
- Compiler avec **tous les warnings activés** (\`-Wall -Wextra\`)
- Utiliser **Valgrind** pour détecter les fuites mémoire

---

## 📈 Évolution et perspectives

### Objectif à moyen terme

Maintenir mes compétences C pour les projets embarqués et approfondir la **programmation système Linux**.


`,Ns=`---
name: CI/CD
slug: ci-cd
published: true
category: devops
color: gray
logo: CICD
---

Mise en place de pipelines CI/CD via GitLab. Automatisation des tests et déploiement.
`,Fs=`---
name: CLion
slug: clion
published: true
category: devtools
color: green
logo: CLion
---

IDE JetBrains pour C et C++. CMake intégré, debugging avancé et analyse de code statique.
`,Us=`---
name: Confluence
slug: confluence
published: true
category: devtools
color: blue
logo: Confluence
---

Plateforme de documentation collaborative Atlassian. Wiki d'équipe, knowledge base et documentation projet.
`,Vs=`---
name: Créativité
slug: creativity
published: true
category: soft
color: purple
logo: Creativity
---

::toc

## Ma définition

La créativité en développement, ce n'est pas être un artiste — c'est la capacité à **trouver des solutions originales** à des problèmes techniques, à concevoir des expériences utilisateur innovantes, et à voir des connexions là où d'autres voient des impasses.

Dans le monde tech, la créativité se manifeste de plusieurs façons : une architecture logicielle élégante, une interface utilisateur intuitive, un algorithme optimisé de manière inattendue, ou la combinaison de technologies qui ne semblaient pas faites pour aller ensemble.

Avec l'arrivée de l'IA générative (ChatGPT, GitHub Copilot), la créativité humaine devient un **avantage compétitif majeur**. Les tâches répétitives sont automatisables, mais la capacité à imaginer de nouveaux produits, à anticiper les besoins utilisateurs et à concevoir des expériences mémorables reste profondément humaine. Les développeurs créatifs ne seront pas remplacés par l'IA — ils l'utiliseront comme un outil pour amplifier leur créativité.

---

## Mes éléments de preuve

### 1. Ce portfolio — Design et interactions sur mesure

Ce portfolio que vous consultez est ma démonstration la plus visible de créativité technique. Plutôt que d'utiliser un template existant, j'ai choisi de **tout concevoir de zéro** avec des choix de design personnalisés.

**Éléments créatifs notables** :
- **Animation d'écriture manuscrite** sur la page d'accueil (effet "signature")
- **Composants Markdown personnalisés** : grilles de valeurs, boutons stylisés, tags interactifs avec popups
- **Effets de parallaxe et transitions fluides** entre les pages
- **Mode sombre/clair** avec des palettes de couleurs soigneusement choisies

**Le défi créatif** : Comment présenter mon parcours de manière mémorable sans tomber dans le "CV en ligne" banal ? Ma réponse : raconter une histoire visuelle cohérente avec des micro-interactions qui donnent vie au contenu.

**Résultat** : Un portfolio qui se démarque et reflète ma personnalité, pas juste mes compétences techniques.

### 2. Georges le Chat — Assistant IA avec personnalité

L'application [Georges le Chat](/projects/georges-le-chat) illustre ma créativité dans la conception produit. Au lieu de créer "encore un chatbot IA", j'ai voulu créer un **assistant avec une vraie personnalité**.

**Mes choix créatifs** :
- Nom et identité visuelle travaillés (Georges, un chat roux stylisé)
- Ton de conversation défini : bienveillant, un peu sarcastique, toujours encourageant
- Easter eggs cachés dans les réponses (références culturelles, blagues contextuelles)
- Onboarding gamifié pour les nouveaux utilisateurs

**L'approche** : Je suis parti des questions "Qu'est-ce qui rendrait cet assistant attachant ?" et "Comment éviter l'effet 'robot froid' ?" plutôt que de simplement plugger une API OpenAI à une interface basique.

### 3. Projet INVR — Scénarisation d'une expérience VR

Le projet [INVR](/projects/invr) m'a permis d'explorer la créativité dans un domaine totalement différent : la **conception d'expériences immersives**.

**Le contexte** : Créer une expérience de réalité virtuelle éducative pour initier des novices à la VR.

**Mon apport créatif** :
- **Scénarisation narrative** : plutôt qu'un tutoriel technique, j'ai proposé un parcours sous forme d'histoire (exploration d'un monde fantastique avec des défis progressifs)
- **Progression ludique** : chaque nouvelle interaction VR est introduite par un besoin narratif (pas "appuie sur ce bouton" mais "ouvre ce coffre pour trouver l'indice")
- **Feedback sensoriel** : utilisation créative des retours haptiques et sonores pour renforcer l'immersion

**Ce que j'ai appris** : La créativité en VR ne vient pas de la technique (Unity/Unreal) mais de la compréhension de l'expérience humaine — comment guider quelqu'un dans un monde où les règles physiques n'existent plus ?

---

## Mon autocritique

### Niveau de maîtrise actuel

| Critère | Évaluation | Commentaire |
|---------|------------|-------------|
| Design d'interface | ⭐⭐⭐⭐ | Bon sens esthétique, je m'améliore en UX |
| Résolution créative de problèmes | ⭐⭐⭐⭐⭐ | Je trouve souvent des angles inattendus |
| Conception produit | ⭐⭐⭐⭐ | Je pense "utilisateur" naturellement |
| Prise de risque créatif | ⭐⭐⭐ | Parfois trop prudent sur les idées audacieuses |

### Marge de progression

Ma principale limite est parfois de **m'autocensurer** par peur que l'idée soit "trop différente" ou rejetée. Je dois oser proposer mes idées les plus audacieuses, quitte à les affiner ensuite. La créativité s'épanouit dans un climat de confiance — y compris envers soi-même.

Je veux aussi développer ma créativité **en équipe** : animer des brainstormings efficaces, utiliser des techniques comme le design thinking ou le crazy 8s.

### Place dans mon profil

La créativité est ce qui **donne du sens** à mes compétences techniques. Savoir coder n'est qu'un outil — la créativité permet de décider *quoi* coder et *comment* le présenter. C'est elle qui me pousse vers des projets comme la VR ou les assistants IA plutôt que du CRUD basique.

### Vitesse d'acquisition

La créativité n'est pas une compétence qu'on "acquiert" — c'est plutôt un muscle qu'on entraîne. J'ai toujours eu une sensibilité créative (j'ai fait du dessin et de la musique étant plus jeune), mais c'est en l'appliquant à la tech que j'ai vraiment développé une créativité utile professionnellement.

### Conseil pour développer cette compétence

**Exposez-vous à des domaines variés.** La créativité naît souvent de la collision d'idées provenant de domaines différents. Lisez des articles de design, regardez des conférences UX, jouez à des jeux vidéo innovants, visitez des musées. Ensuite, demandez-vous : "Comment cette idée pourrait s'appliquer à mon projet ?"

Et surtout : **créez des side projects sans contrainte commerciale**. C'est dans ces espaces de liberté que les idées les plus originales émergent.

---

## Mon évolution

### Objectifs à moyen terme

- **Maîtriser les outils de prototypage** (Figma avancé, Framer) pour donner vie à mes idées plus rapidement
- **Développer une expertise en UX writing** pour que mes interfaces "parlent" mieux aux utilisateurs
- **Explorer l'IA générative comme outil créatif** (génération d'images, musique, code)

### Formations et actions prévues

- Suivre le cours "Design Thinking" de l'IDEO sur Coursera
- Participer à des hackathons pour stimuler la créativité sous contrainte
- Tenir un "journal d'idées" pour capturer et développer mes concepts

La créativité est un avantage compétitif que je compte cultiver tout au long de ma carrière — c'est ce qui me distinguera des développeurs qui se contentent d'exécuter sans imaginer.
`,Js=`---
name: C#
slug: csharp
published: true
category: pro-lang
color: purple
logo: CSharp
---

Langage orienté objet de Microsoft, utilisé pour le développement .NET et Unity.
`,Bs=`---
name: CSS
slug: css
published: true
category: markup-style
color: blue
logo: CSS
---

Mise en forme des interfaces. Utilisé avec Sass ou Tailwind selon les projets.
`,Gs=`---
name: Dart
slug: dart
published: true
category: pro-lang
color: cyan
logo: Dart
---

Langage de Google utilisé principalement avec Flutter pour le développement mobile cross-platform.
`,zs=`---
name: DataGrip
slug: datagrip
published: true
category: devtools
color: purple
logo: DataGrip
---

IDE JetBrains pour bases de données. Support multi-SGBD, requêtes SQL et administration.
`,Hs=`---
name: Docker Swarm
slug: docker-swarm
published: true
category: devops
color: blue
logo: Docker
---

Orchestration native de Docker pour le clustering et le déploiement de services distribués.
`,Qs=`---
name: Docker
slug: docker
published: true
category: devops
color: blue
logo: Docker
---

::toc

# Docker : la conteneurisation au cœur du DevOps

## 📌 Définition et contexte professionnel

**Docker** est une plateforme de **conteneurisation** qui permet d'empaqueter une application avec toutes ses dépendances dans un **conteneur** portable. Lancé en 2013, Docker a révolutionné le déploiement logiciel en résolvant le fameux problème *"ça marche sur ma machine"*.

Docker est devenu **incontournable** dans l'industrie :

- **Portabilité** : même comportement en dev, test et production
- **Isolation** : chaque conteneur est indépendant
- **Reproductibilité** : Dockerfile versionné = infrastructure as code
- **Scalabilité** : orchestration avec Kubernetes ou Docker Swarm
- **CI/CD** : intégration native dans les pipelines

Au **Synchrotron SOLEIL**, Docker est utilisé pour **standardiser les environnements de développement** et faciliter les déploiements.

---

## 🔍 Mes réalisations concrètes

### SUN Auto : containerisation complète

Le projet **SUN Auto** est entièrement conteneurisé avec Docker.

**Ma contribution** :
- Rédaction du **Dockerfile multi-stage** (build Maven + runtime JRE)
- Configuration de **Docker Compose** pour l'environnement complet (app + PostgreSQL + Redis)
- Optimisation de l'image (< 200 MB en production)
- Intégration dans le **pipeline CI/CD** GitLab

**Résultat** : déploiement reproductible en une commande \`docker-compose up\`.

→ [Voir le projet SUN Auto](/projects/sun-auto)

### TAP : environnement de test isolé

Pour **TAP**, j'ai utilisé Docker pour créer des **environnements de test isolés**.

**Ma contribution** :
- **Testcontainers** : bases de données éphémères pour les tests d'intégration
- Images custom pour les **agents de test** (Selenium, Playwright)
- **Docker-in-Docker** pour les tests nécessitant Docker

→ [Voir le projet TAP](/projects/tap)

### Ce portfolio : déploiement Docker

Ce portfolio dispose d'un **Dockerfile** et d'un **docker-compose.yml** pour un déploiement simplifié.

---

## 🎯 Autocritique et positionnement

### Niveau de maîtrise

| Domaine | Niveau |
|---------|--------|
| Dockerfile / images | ★★★★★ Expert |
| Docker Compose | ★★★★★ Expert |
| Volumes / réseaux | ★★★★☆ Avancé |
| Docker Swarm | ★★★☆☆ Intermédiaire |
| Sécurité conteneurs | ★★★☆☆ Intermédiaire |

### Marge de progression

- **Kubernetes** : orchestration à grande échelle (en cours d'apprentissage)
- **Sécurité** : scan d'images, rootless containers, secrets management
- **Buildkit** : fonctionnalités avancées de build (cache, multi-platform)

### Place dans mon profil

Docker est une **compétence fondamentale** de mon profil. Je l'utilise quotidiennement, que ce soit pour le développement local ou le déploiement en production. C'est le socle de ma pratique DevOps.

### Vitesse d'acquisition

J'ai appris Docker **rapidement** grâce à son adoption massive et à l'abondance de ressources. En quelques semaines, j'étais capable de conteneuriser n'importe quelle application.

### Conseils tirés de mon expérience

> *"Un bon Dockerfile multi-stage peut diviser la taille de vos images par 10. Investissez du temps dans l'optimisation."*

- Toujours utiliser des **images de base officielles** et les pinned versions
- **Ne pas exécuter en root** dans les conteneurs
- Utiliser \`.dockerignore\` pour éviter de copier des fichiers inutiles
- **Layer caching** : ordonnez les instructions du moins au plus changeant

---

## 📈 Évolution et perspectives

### Objectif à moyen terme

Maîtriser **Kubernetes** pour l'orchestration à grande échelle et obtenir une certification **CKA** (Certified Kubernetes Administrator).

### Formations prévues

| Formation | Statut |
|-----------|--------|
| Kubernetes (CKA) | Prévu 2026 |
| Docker Security | En veille |


`,Ks=`---
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
`,Ys=`---
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
`,Xs=`---
name: Firebase
slug: firebase
published: true
category: devops
color: orange
logo: Firebase
---

Plateforme Google pour le backend-as-a-service : authentification, base de données temps réel, hosting.
`,Zs=`---
name: Flask
slug: flask
published: true
category: framework
color: gray
logo: Flask
---

Micro-framework Python léger pour le développement web et d'APIs.
`,er=`---
name: Flutter
slug: flutter
published: true
category: framework
color: cyan
logo: Flutter
---

::toc

# Flutter : le développement mobile cross-platform

## :i[pin] Définition et contexte professionnel

**Flutter** est un framework UI open-source de Google permettant de créer des applications **natives pour mobile, web et desktop** à partir d'une **codebase unique** en Dart. Lancé en 2018, il est devenu le framework cross-platform le plus populaire.

L'attrait de Flutter pour l'industrie :

- **Codebase unique** : un seul code pour iOS, Android, web et desktop
- **Performance native** : compilation AOT, pas de bridge JavaScript
- **Hot Reload** : itération ultra-rapide pendant le développement
- **UI expressive** : widgets personnalisables, animations fluides
- **Écosystème mature** : pub.dev regorge de packages

De grandes entreprises comme **Google, BMW, Alibaba, eBay** utilisent Flutter en production. Le framework gagne aussi du terrain dans les startups grâce à sa productivité.

---

## :i[search] Mes réalisations concrètes

### Flutter Movie App : gestion de films

Dans le cadre d'un **TP universitaire**, j'ai développé une application de gestion de films avec Flutter.

**Ma contribution** :
- Architecture **MVVM** avec provider pour la gestion d'état
- Intégration d'une **API REST** (TMDb) pour les données de films
- UI responsive avec **widgets custom** et animations
- Persistance locale avec **SharedPreferences**

**Résultat** : application fonctionnelle permettant de parcourir, rechercher et sauvegarder des films favoris.

→ [Voir le projet Flutter Movie App](/projects/flutter-movie-manip)

### Flutter Todo List : gestion de tâches

Un autre **TP universitaire** m'a permis de créer une application de gestion de tâches.

**Ma contribution** :
- Implémentation **CRUD complet** des tâches
- **Persistance SQLite** avec le package sqflite
- Gestion des **catégories** et des **priorités**
- Interface intuitive avec swipe-to-delete

→ [Voir le projet Flutter Todo List](/projects/flutter-todo-list)

---

## :i[target] Autocritique et positionnement

### Niveau de maîtrise

| Domaine | Niveau |
|---------|--------|
| Widgets et UI | ★★★★☆ Avancé |
| Gestion d'état (Provider) | ★★★☆☆ Intermédiaire |
| Navigation et routing | ★★★☆☆ Intermédiaire |
| Intégration API | ★★★★☆ Avancé |
| Tests (unit, widget) | ★★☆☆☆ Débutant |

### Marge de progression

- **Bloc/Riverpod** : gestion d'état plus avancée que Provider
- **Tests** : widget tests, integration tests avec Flutter Driver
- **Performance** : optimisation du rendu, profiling avec DevTools
- **Déploiement** : publication sur App Store et Play Store

### Place dans mon profil

Flutter est ma **compétence mobile principale**. Bien que je privilégie le web (SvelteKit), Flutter me permet de répondre aux besoins mobiles quand nécessaire.

### Conseils tirés de mon expérience

> *"Flutter brille par sa productivité. Profitez du Hot Reload pour expérimenter rapidement avec l'UI."*

- Commencer par **comprendre les widgets** avant les patterns d'état
- Utiliser **Flutter DevTools** pour déboguer et optimiser
- Structurer le code en **couches** dès le début (UI, logic, data)

---

## :i[growth] Évolution et perspectives

### Objectif à moyen terme

Publier une application complète sur les stores et maîtriser **Riverpod** pour la gestion d'état.

### Formations prévues

| Formation | Statut |
|-----------|--------|
| Flutter Avanced (Udemy) | En veille |
| Riverpod 2.0 | Prévu |


`,nr=`---
name: Git
slug: git
published: true
category: devtools
color: orange
logo: Git
---

Système de versionnement utilisé dans tous mes projets. Workflow GitLab et GitHub.
`,tr=`---
name: Grafana
slug: grafana
published: true
category: devops
color: orange
logo: Grafana
---

Plateforme de visualisation et monitoring pour métriques et logs.
`,ir=`---
name: HTML
slug: html
published: true
category: markup-style
color: orange
logo: HTML
---

Structure des pages web. Maîtrisé depuis mes débuts.
`,sr=`---
name: Hugo
slug: hugo
published: true
category: framework
color: pink
logo: Hugo
---

Générateur de sites statiques ultra-rapide écrit en Go.
`,rr=`---
name: IntelliJ IDEA
slug: intellij
published: true
category: devtools
color: pink
logo: IntelliJ
---

IDE JetBrains puissant pour Java, Kotlin et développement polyglotte. Refactoring et analyse de code avancés.
`,or=`---
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

::toc

# Java : le socle de mes développements backend

## :i[pin] Définition et contexte professionnel

**Java** est un langage de programmation orienté objet créé par Sun Microsystems en 1995, aujourd'hui maintenu par Oracle. Sa philosophie *"Write Once, Run Anywhere"* (WORA) et sa robustesse en font le langage de prédilection pour les **applications d'entreprise critiques**.

Dans le contexte du **Synchrotron SOLEIL**, où je réalise mon alternance depuis 2023, Java représente **le standard pour le développement backend**. L'infrastructure informatique du synchrotron repose sur des centaines d'applications Java, certaines en production depuis plus de 15 ans. Le choix de Java s'explique par plusieurs facteurs :

- **Stabilité à long terme** : les API Java évoluent en maintenant une compatibilité ascendante
- **Écosystème mature** : frameworks éprouvés (Spring, Hibernate), outils de build (Maven, Gradle)
- **Performance et scalabilité** : la JVM optimise l'exécution en temps réel
- **Maintenabilité** : le typage statique et les conventions strictes facilitent la reprise de code

Avec la sortie de **Java 21 LTS** en septembre 2023 et l'arrivée des **Virtual Threads** (Project Loom), Java connaît un renouveau significatif. Ces évolutions répondent aux besoins modernes de programmation concurrente, rendant le langage plus pertinent que jamais face à des alternatives comme Go ou Kotlin.

---

## :i[search] Mes réalisations concrètes

### SUN Auto : orchestration du cycle de vie applicatif

Lors de mon alternance, j'ai développé **SUN Auto** (SOLEIL Unified Notification Auto), un système Java/Spring Boot qui automatise la gestion du cycle de vie des applications du synchrotron.

**Le défi** : le parc applicatif comptait des dizaines d'applications sans suivi de leur état (maintenues, obsolètes, à décommissionner). Les équipes perdaient du temps à maintenir des applications que plus personne n'utilisait.

**Ma contribution** :
- Architecture d'un **backend Spring Boot** avec API REST complète
- Implémentation d'un **système de workflows** pour les états des applications (découverte → analyse → notification → archivage)
- Développement de **jobs schedulés** (Spring Scheduler) pour le scan automatique des dépôts GitLab
- Intégration avec **PostgreSQL** via Spring Data JPA avec requêtes optimisées

**Résultat** : identification automatique de **23 applications obsolètes** dès le premier mois de déploiement, économisant environ 40h/mois de maintenance inutile.

→ [Voir le projet SUN Auto](/projects/sun-auto)

### TAP : plateforme de tests automatisés

**TAP** (Test Automation Platform) centralise l'exécution et le reporting des tests automatisés au Synchrotron SOLEIL.

**Le défi** : les tests étaient dispersés dans chaque projet, sans vision globale de la qualité logicielle. Les résultats se perdaient dans les logs Jenkins.

**Ma contribution** :
- Conception d'une **architecture modulaire** en Java 17 avec injection de dépendances Spring
- Développement d'un **streaming temps réel** des résultats de tests via WebSocket
- Intégration du framework **Allure** pour la génération de rapports visuels
- Mise en place de **tests d'intégration** avec JUnit 5 et Testcontainers

**Résultat** : temps de diagnostic des échecs de tests réduit de **70%** grâce à la centralisation et aux rapports Allure. L'équipe QA a adopté la plateforme pour tous les nouveaux projets.

→ [Voir le projet TAP](/projects/tap)

### Projets Minecraft : apprentissage par la passion

Avant mon parcours professionnel, j'ai développé plusieurs **plugins Minecraft** en Java, notamment pour le serveur **Comet Learning**. Ces projets m'ont permis d'acquérir les fondamentaux :

- Programmation orientée objet (héritage, interfaces, design patterns)
- Gestion d'événements et programmation asynchrone
- Manipulation de bases de données (MySQL, SQLite)
- Travail collaboratif avec Git

Cette expérience autodidacte, bien que non professionnelle, a posé les bases solides qui me servent aujourd'hui.

→ [Voir le projet Comet Learning](/projects/comet-learning)

---

## :i[target] Autocritique et positionnement

### Niveau de maîtrise

Je situe ma compétence Java à un **niveau avancé**, sans prétendre à l'expertise. Je maîtrise :

| Domaine | Niveau |
|---------|--------|
| Syntaxe et concepts OOP | ★★★★★ Expert |
| Spring Boot / Spring Data | ★★★★☆ Avancé |
| Tests (JUnit, Mockito) | ★★★★☆ Avancé |
| Performance / JVM tuning | ★★★☆☆ Intermédiaire |
| Architectures distribuées | ★★★☆☆ Intermédiaire |

### Marge de progression

Mes axes d'amélioration identifiés :

- **Optimisation JVM** : je sais que la JVM offre des leviers de performance (GC tuning, JIT), mais je n'ai pas encore eu l'occasion de les exploiter en profondeur
- **Reactive Programming** : Spring WebFlux et la programmation réactive restent à approfondir
- **Microservices avancés** : patterns comme CQRS, Event Sourcing, Saga

### Contextualisation

Ma compétence Java fonctionne particulièrement bien dans un **contexte d'applications métier structurées** avec des besoins de maintenabilité long terme. En revanche, pour du prototypage rapide ou des scripts one-shot, je privilégie Python.

### Place dans mon profil

Java constitue **le pilier central** de mon profil technique. C'est le langage sur lequel je suis le plus productif pour des projets backend d'envergure. Il complète mon expertise frontend (SvelteKit/TypeScript) pour proposer un profil **full-stack polyvalent**.

### Vitesse d'acquisition

Mon apprentissage de Java s'est fait en **deux phases** :
1. **Autodidacte (2018-2021)** : plugins Minecraft, projets personnels → acquisition des fondamentaux
2. **Professionnel (2023-présent)** : frameworks entreprise, bonnes pratiques → montée en compétence rapide grâce aux bases solides

### Conseils tirés de mon expérience

> *"Apprenez Java par la pratique sur des projets qui vous passionnent. Les concepts abstraits (interfaces, generics, design patterns) prennent tout leur sens quand vous en avez besoin pour résoudre un vrai problème."*

Mes recommandations :
- **Commencer par les fondamentaux OOP** avant de toucher aux frameworks
- **Maîtriser Maven ou Gradle** : la gestion de dépendances est cruciale en Java
- **Écrire des tests dès le début** : JUnit s'apprend facilement et change la qualité du code
- **Ne pas ignorer les nouveautés** : Java évolue vite depuis Java 8 (streams, records, pattern matching)

---

## :i[growth] Évolution et perspectives

### Mon objectif à moyen terme

D'ici 2 ans, je vise le niveau **d'architecte technique Java**, capable de :
- Concevoir des architectures microservices robustes
- Optimiser les performances critiques (profiling, tuning JVM)
- Accompagner des développeurs juniors sur les bonnes pratiques

### Formations en cours et à venir

| Formation | Statut | Objectif |
|-----------|--------|----------|
| Spring Certified Professional | Prévu 2026 | Certification officielle |
| Java 21 : Virtual Threads | En cours (autoformation) | Maîtriser la concurrence moderne |
| Architecture microservices | Prévu | Patterns avancés (Saga, CQRS) |

### Veille technologique

Je suis activement :
- Les releases Java via les JEPs (JDK Enhancement Proposals)
- Le blog de Baeldung pour les tutoriels Spring
- Les conférences Devoxx et Spring I/O (replay YouTube)
`,lr=`---
name: JavaFX
slug: javafx
published: true
category: framework
color: orange
logo: Java
---

::toc

# JavaFX : les interfaces graphiques Java modernes

## 📌 Définition et contexte professionnel

**JavaFX** est le framework officiel de Java pour créer des **interfaces graphiques (GUI)** modernes. Successeur de Swing, il offre une approche plus moderne avec support du **CSS**, des **animations** et du **FXML** (XML déclaratif pour l'UI).

L'utilisation de JavaFX dans l'industrie :

- **Applications desktop enterprise** : outils internes, tableaux de bord
- **Outils scientifiques** : visualisation de données, interfaces de contrôle
- **Enseignement** : apprentissage de la programmation événementielle
- **Cross-platform** : même code pour Windows, macOS, Linux

Bien que les applications web dominent aujourd'hui, JavaFX reste pertinent pour les **applications desktop lourdes** nécessitant performance et accès système.

---

## 🔍 Mes réalisations concrètes

### Projets académiques IN'TECH

Durant ma formation à **IN'TECH**, j'ai développé plusieurs applications JavaFX :

**Application de gestion de bibliothèque** :
- Interface complète avec **FXML** et **Scene Builder**
- Pattern **MVC** pour la séparation des responsabilités
- Connexion **base de données** MySQL
- Fonctionnalités : CRUD livres, gestion des emprunts, recherche

**Jeu de plateau** :
- Interface graphique avec **Canvas** pour le rendu
- Gestion des événements souris et clavier
- Animations de transitions entre les tours

**Résultat** : bonnes notes aux projets et compréhension solide du pattern MVC.

---

## 🎯 Autocritique et positionnement

### Niveau de maîtrise

| Domaine | Niveau |
|---------|--------|
| Composants UI (Layouts, Controls) | ★★★★☆ Avancé |
| FXML et Scene Builder | ★★★★☆ Avancé |
| CSS JavaFX | ★★★☆☆ Intermédiaire |
| Animations | ★★★☆☆ Intermédiaire |
| Packaging (jlink, jpackage) | ★★☆☆☆ Débutant |

### Marge de progression

- **Packaging** : création d'installateurs natifs avec jpackage
- **Performances** : optimisation du rendu, virtualisation des listes
- **Frameworks** : ControlsFX, JFoenix pour des composants avancés

### Place dans mon profil

JavaFX est une compétence **secondaire** dans mon profil. Je privilégie le web (SvelteKit) pour les interfaces, mais JavaFX reste utile pour les rares cas nécessitant une application desktop native.

### Conseils tirés de mon expérience

> *"Utilisez Scene Builder pour le design visuel, mais comprenez le FXML généré. Cela aide au débogage."*

- **Scene Builder** est indispensable pour le développement rapide
- Séparer la **logique métier** de l'UI (pattern MVC/MVVM)
- Tester sur **plusieurs OS** : le rendu peut varier

---

## 📈 Évolution et perspectives

### Objectif à moyen terme

Maintenir mes compétences JavaFX pour les cas d'usage spécifiques (applications desktop) tout en privilégiant le web pour les interfaces.


`,ur=`---
name: JavaScript
slug: js
published: true
category: pro-lang
color: yellow
logo: JavaScript
---

::toc

# JavaScript : le langage universel du web

## 📌 Définition et contexte professionnel

**JavaScript** est le langage de programmation du web, exécutable dans tous les navigateurs. Créé en 1995, il est devenu **incontournable** : c'est le seul langage natif du navigateur et, avec Node.js, il s'étend au backend.

L'importance de JavaScript dans l'industrie :

- **Ubiquité** : 100% des sites web interactifs utilisent JavaScript
- **Full-stack** : frontend (React, Vue, Svelte) ET backend (Node.js, Deno, Bun)
- **Écosystème** : npm compte +2 millions de packages
- **Évolution** : ES6+ apporte des fonctionnalités modernes (async/await, modules, classes)
- **Diversité** : web, mobile (React Native), desktop (Electron), serveur, IoT

JavaScript est régulièrement classé **#1 des langages les plus utilisés** dans les enquêtes Stack Overflow.

---

## 🔍 Mes réalisations concrètes

### Ce portfolio : SvelteKit full JavaScript

Ce portfolio est entièrement construit avec **SvelteKit**, un framework JavaScript/TypeScript.

**Ma contribution** :
- Développement de **composants Svelte** réactifs
- Utilisation des **runes Svelte 5** ($state, $derived, $effect)
- Manipulation du **DOM** pour les animations et interactions
- **Preprocessing Markdown** custom avec des composants interactifs

### Svelte Blog : premier projet JavaScript moderne

Mon **Svelte Static Blog** m'a permis d'apprendre JavaScript moderne avec les modules ES6+.

→ [Voir le projet Svelte Blog](/projects/svelte-blog)

### Scripts et automatisation

J'utilise régulièrement JavaScript/Node.js pour des **scripts d'automatisation** :
- Download de ressources (icons, fonts)
- Transformation de données (JSON, Markdown)
- Build tools et configuration (Vite, Rollup)

---

## 🎯 Autocritique et positionnement

### Niveau de maîtrise

| Domaine | Niveau |
|---------|--------|
| ES6+ (arrow, destructuring, spread) | ★★★★★ Expert |
| Async/await, Promises | ★★★★★ Expert |
| DOM manipulation | ★★★★☆ Avancé |
| Node.js | ★★★☆☆ Intermédiaire |
| Testing (Jest, Vitest) | ★★★☆☆ Intermédiaire |

### Marge de progression

- **Node.js avancé** : streams, workers, performance
- **Testing** : coverage complète, TDD
- **Runtime alternatifs** : Deno, Bun

### Place dans mon profil

JavaScript est une **compétence fondamentale** de mon profil. Couplé à TypeScript et Svelte, il forme la base de mon expertise frontend. Je le maîtrise également pour le backend léger avec Node.js.

### Conseils tirés de mon expérience

> *"Maîtrisez JavaScript vanilla avant de vous lancer dans les frameworks. Comprendre le langage vous rendra plus efficace avec n'importe quel framework."*

- Apprendre les **fondamentaux** : closures, prototype, event loop
- **Lire la documentation MDN**, c'est la référence
- Utiliser **TypeScript** pour les projets sérieux

---

## 📈 Évolution et perspectives

### Objectif à moyen terme

Continuer à suivre l'évolution de JavaScript (TC39 proposals) et approfondir Node.js pour des cas d'usage backend.


`,cr=`---
name: Java EE
slug: jee
published: true
category: framework
color: red
logo: Java
---

Plateforme Java pour le développement d'applications d'entreprise. Servlets, JSP, EJB, JPA et services web.
`,pr=`---
name: Jira
slug: jira
published: true
category: devtools
color: blue
logo: Jira
---

::toc

# Jira : la gestion de projet Agile

## 📌 Définition et contexte professionnel

**Jira** est un outil de gestion de projet développé par Atlassian, conçu pour les équipes de développement logiciel. Il est devenu le **standard de l'industrie** pour la gestion Agile (Scrum, Kanban).

L'importance de Jira dans l'industrie :

- **Standard Agile** : utilisé par +65 000 entreprises dans le monde
- **Workflows personnalisables** : adaptés à chaque processus d'équipe
- **Intégrations** : Confluence, Bitbucket, GitHub, Slack, etc.
- **Reporting** : burndown charts, velocity, rapports sprint
- **Planification** : backlog, sprints, roadmaps

Jira est souvent critiqué pour sa **complexité**, mais reste incontournable dans les environnements professionnels structurés.

---

## 🔍 Mes réalisations concrètes

### Synchrotron SOLEIL : gestion quotidienne

Au **Synchrotron SOLEIL**, Jira est l'outil central de gestion de projet.

**Mon utilisation** :
- **Suivi des tickets** : création, estimation, suivi de progression
- **Sprints bi-hebdomadaires** : planification et retrospective
- **Boards Kanban** : visualisation du flux de travail
- **Liens avec Confluence** : documentation liée aux tickets
- **Filtres JQL** : requêtes personnalisées pour le reporting

### SUN Auto : projet géré via Jira

Le projet **SUN Auto** a été géré entièrement dans Jira avec un workflow custom.

**Ma contribution** :
- Découpage en **épiques et user stories**
- Estimation en **story points**
- Suivi du **burndown** et ajustement des sprints
- Documentation des **décisions techniques** dans les tickets

→ [Voir le projet SUN Auto](/projects/sun-auto)

---

## 🎯 Autocritique et positionnement

### Niveau de maîtrise

| Domaine | Niveau |
|---------|--------|
| Utilisation quotidienne | ★★★★★ Expert |
| JQL (Jira Query Language) | ★★★★☆ Avancé |
| Workflows et boards | ★★★☆☆ Intermédiaire |
| Administration | ★★☆☆☆ Débutant |
| Automatisations | ★★☆☆☆ Débutant |

### Marge de progression

- **Administration Jira** : configuration de projets, workflows custom
- **Automatisations** : règles d'automation pour réduire le travail répétitif
- **Intégrations avancées** : API Jira, webhooks

### Place dans mon profil

Jira est une **compétence transversale** essentielle. Tout développeur professionnel doit savoir utiliser un outil de gestion de projet. Jira étant le plus répandu, le maîtriser est un atout.

### Conseils tirés de mon expérience

> *"Un bon ticket Jira est un ticket bien rédigé. Prenez le temps de décrire le contexte, les critères d'acceptation et les dépendances."*

- **Apprenez JQL** : c'est puissant pour les recherches complexes
- Utilisez les **étiquettes** (labels) pour catégoriser
- **Liez les tickets** entre eux (blocks, is blocked by, relates to)

---

## 📈 Évolution et perspectives

### Objectif à moyen terme

Explorer les fonctionnalités d'**administration** et d'**automatisation** de Jira pour améliorer les processus d'équipe.


`,dr=`---
name: Kotlin
slug: kotlin
published: true
category: pro-lang
color: purple
logo: Kotlin
---

Langage moderne sur JVM, concis et interopérable avec Java. Développement Android et backend.
`,mr=`---
name: Kubernetes
slug: kubernetes
published: true
category: devops
color: blue
logo: Kubernetes
---

Orchestration de conteneurs pour le déploiement, la mise à l'échelle et la gestion d'applications.
`,gr=`---
name: Linux
slug: linux
published: true
category: devtools
color: gray
logo: Linux
---

Utilisation quotidienne de serveurs Debian et Red Hat au Synchrotron.
`,fr=`---
name: MariaDB
slug: mariadb
published: true
category: db
color: brown
logo: MariaDB
---

::toc

# MariaDB : l'alternative open-source à MySQL

## 📌 Définition et contexte professionnel

**MariaDB** est un système de gestion de bases de données relationnelles **open-source**, créé en 2009 comme fork de MySQL par ses fondateurs originaux. Suite au rachat de MySQL par Oracle, MariaDB garantit une **licence véritablement libre** et une **gouvernance communautaire**.

Dans le contexte professionnel, MariaDB est privilégiée pour :

- **Compatibilité MySQL** : migration transparente depuis MySQL
- **Performance** : optimisations spécifiques (Aria, thread pool)
- **Fonctionnalités avancées** : colonnes virtuelles, JSON, temporal tables
- **Licence libre** : pas de coûts de licence, pas de vendor lock-in

De nombreuses distributions Linux (Debian, Red Hat) ont remplacé MySQL par MariaDB comme base de données par défaut, témoignant de son adoption massive.

---

## 🔍 Mes réalisations concrètes

### Comet Learning : base de données du serveur Minecraft

Pour le projet **Comet Learning**, j'ai utilisé MariaDB pour stocker toutes les données du serveur éducatif Minecraft.

**Ma contribution** :
- Conception du **schéma de données** pour les joueurs, progressions et formations
- Développement de **requêtes optimisées** pour le leaderboard temps réel
- Mise en place de **sauvegardes automatiques** quotidiennes
- Intégration avec les plugins Java via **HikariCP** (connection pooling)

**Résultat** : base de données stable supportant **+200 joueurs simultanés** sans dégradation de performance.

→ [Voir le projet Comet Learning](/projects/comet-learning)

---

## 🎯 Autocritique et positionnement

### Niveau de maîtrise

| Domaine | Niveau |
|---------|--------|
| SQL (SELECT, JOIN, etc.) | ★★★★★ Expert |
| Modélisation relationnelle | ★★★★☆ Avancé |
| Optimisation de requêtes | ★★★★☆ Avancé |
| Administration | ★★★☆☆ Intermédiaire |

### Marge de progression

- **Réplication** : master-slave, Galera Cluster
- **Spécificités MariaDB** : moteurs de stockage (Aria, ColumnStore), fonctionnalités absentes de MySQL

### Place dans mon profil

MariaDB est **interchangeable avec MySQL** dans mon profil. Je la préfère pour les projets personnels (licence libre) mais j'utilise indifféremment l'une ou l'autre selon le contexte. Aujourd'hui, je privilégie **PostgreSQL** pour les nouveaux projets.

### Conseils tirés de mon expérience

> *"MariaDB est un excellent choix pour remplacer MySQL sans effort de migration. Profitez-en pour explorer ses fonctionnalités exclusives."*

---

## 📈 Évolution et perspectives

### Objectif à moyen terme

Maintenir ma compétence MariaDB/MySQL tout en privilégiant **PostgreSQL** pour les nouveaux développements.


`,vr=`---
name: Minikube
slug: minikube
published: true
category: devops
color: blue
logo: Kubernetes
---

Kubernetes local pour le développement et les tests. Environnement de cluster complet sur une seule machine.
`,hr=`---
name: MongoDB
slug: mongodb
published: true
category: db
color: green
logo: MongoDB
---

Base de données NoSQL orientée documents, idéale pour les données flexibles et le scaling horizontal.
`,br=`---
name: MySQL
slug: mysql
published: true
category: db
color: blue
logo: MySQL
---

Système de gestion de base de données relationnelle open-source très répandu.
`,qr=`---
name: Nginx
slug: nginx
published: true
category: devops
color: green
logo: Nginx
---

::toc

# Nginx : le serveur web haute performance

## 📌 Définition et contexte professionnel

**Nginx** (prononcé "engine-x") est un serveur web **haute performance** créé en 2004, devenu le serveur web le plus utilisé au monde devant Apache. Il excelle dans trois rôles clés :

- **Serveur web** : service de fichiers statiques avec des performances exceptionnelles
- **Reverse proxy** : répartition de charge entre serveurs backend
- **Load balancer** : distribution du trafic et haute disponibilité

Dans l'industrie, Nginx est **omniprésent** : Netflix, Cloudflare, WordPress.com et des millions de sites l'utilisent. Sa légèreté et son architecture événementielle lui permettent de gérer des **milliers de connexions simultanées** avec une empreinte mémoire minimale.

Au **Synchrotron SOLEIL**, Nginx sert de **reverse proxy** devant les applications web, gérant le SSL/TLS, le routage et la mise en cache.

---

## 🔍 Mes réalisations concrètes

### TAP : reverse proxy et load balancing

Pour la plateforme **TAP**, j'ai configuré Nginx comme **point d'entrée unique** vers l'application.

**Ma contribution** :
- Configuration du **reverse proxy** vers le backend Spring Boot
- Mise en place du **SSL/TLS** avec Let's Encrypt
- **Load balancing** entre plusieurs instances de l'application
- **Caching** des assets statiques et des rapports Allure

**Résultat** : architecture robuste supportant les pics de charge lors des exécutions massives de tests.

→ [Voir le projet TAP](/projects/tap)

### Ce portfolio : configuration production

Ce portfolio utilise Nginx pour servir le **build statique SvelteKit** avec une configuration optimisée.

**Configuration clé** :
- Compression gzip/brotli des assets
- Headers de cache agressifs pour les fichiers immutables
- Redirection HTTP → HTTPS
- Configuration CSP (Content Security Policy)

---

## 🎯 Autocritique et positionnement

### Niveau de maîtrise

| Domaine | Niveau |
|---------|--------|
| Serveur web / fichiers statiques | ★★★★★ Expert |
| Reverse proxy | ★★★★☆ Avancé |
| SSL/TLS / Let's Encrypt | ★★★★☆ Avancé |
| Load balancing avancé | ★★★☆☆ Intermédiaire |
| Modules Lua / OpenResty | ★★☆☆☆ Débutant |

### Marge de progression

- **Rate limiting avancé** : protection DDoS, throttling par IP
- **OpenResty** : scripting Lua pour logique custom
- **Nginx Plus** : fonctionnalités enterprise (health checks actifs, dashboard)

### Place dans mon profil

Nginx est un **outil essentiel** de ma stack DevOps. Je l'utilise systématiquement en production, que ce soit devant Docker, Kubernetes ou directement sur un serveur.

### Conseils tirés de mon expérience

> *"Nginx est simple à configurer pour les cas basiques, mais investissez du temps pour comprendre les directives de performance (worker_connections, keepalive)."*

- Toujours tester les configurations avec \`nginx -t\` avant reload
- Utiliser des **includes** pour organiser les configurations
- Activer le **gzip** mais attention au CRIME attack sur HTTPS

---

## 📈 Évolution et perspectives

### Objectif à moyen terme

Maîtriser les configurations **haute disponibilité** et l'intégration avec Kubernetes (Ingress Controller).


`,xr=`---
name: Node.js
slug: nodejs
published: true
category: framework
color: green
logo: NodeJs
---

Runtime JavaScript côté serveur pour créer des applications backend scalables.
`,yr=`---
name: OpenCV
slug: opencv
published: true
category: library
color: blue
logo: OpenCV
---

Bibliothèque de vision par ordinateur pour le traitement d'images et la détection d'objets.
`,Sr=`---
name: OpenXR
slug: openxr
published: true
category: library
color: blue
logo: OpenXR
---

::toc

# OpenXR : le standard ouvert de la VR/AR

## 📌 Définition et contexte professionnel

**OpenXR** est un standard ouvert défini par le **Khronos Group** (créateurs d'OpenGL et Vulkan) pour le développement d'applications de **réalité virtuelle (VR)** et **réalité augmentée (AR)**. Il offre une API unifiée compatible avec tous les casques VR majeurs.

L'importance d'OpenXR dans l'industrie :

- **Cross-platform** : un seul code pour Meta Quest, HTC Vive, Windows MR, etc.
- **Standard industriel** : adopté par tous les fabricants de casques
- **Performance** : accès direct au runtime, moins de couches d'abstraction
- **Pérennité** : standard ouvert vs APIs propriétaires éphémères
- **Écosystème** : Unity, Unreal Engine, moteurs custom supportent OpenXR

La VR/AR est en pleine expansion avec des applications dans le **gaming**, la **formation professionnelle**, la **médecine** et l'**industrie**.

---

## 🔍 Mes réalisations concrètes

### InVR : expérience VR d'initiation

Le projet **InVR** utilise OpenXR via Unity pour créer une expérience VR accessible aux débutants.

**Ma contribution** :
- Configuration d'**OpenXR dans Unity** pour une compatibilité multi-casques
- Implémentation des **interactions XR** (grab, teleport, UI)
- Optimisation des **performances** pour le Meta Quest 2 standalone
- Tests sur plusieurs casques pour valider la portabilité

**Résultat** : application fonctionnelle sur Quest 2, Rift S et Windows MR avec une seule codebase.

→ [Voir le projet InVR](/projects/invr)

---

## 🎯 Autocritique et positionnement

### Niveau de maîtrise

| Domaine | Niveau |
|---------|--------|
| OpenXR via Unity | ★★★☆☆ Intermédiaire |
| Interactions XR (grab, teleport) | ★★★☆☆ Intermédiaire |
| Optimisation VR | ★★☆☆☆ Débutant |
| OpenXR natif (C/C++) | ★☆☆☆☆ Découverte |

### Marge de progression

- **Hand tracking** : suivi des mains sans contrôleurs
- **AR / Mixed Reality** : fonctionnalités de réalité mixte
- **Optimisation** : techniques spécifiques VR (foveated rendering, LOD)
- **OpenXR natif** : utilisation directe de l'API sans Unity

### Place dans mon profil

OpenXR est une compétence **émergente** dans mon profil, découverte via le projet InVR. La VR/AR m'intéresse et je souhaite approfondir ce domaine.

### Conseils tirés de mon expérience

> *"Utilisez OpenXR dès le départ plutôt que des APIs propriétaires. Vous gagnerez en portabilité et en pérennité."*

- Commencer par les **XR Interaction Toolkit** d'Unity, puis explorer OpenXR
- **Tester sur plusieurs casques** dès le début du projet
- Attention aux **performances** : la VR est exigeante (90 FPS minimum)

---

## 📈 Évolution et perspectives

### Objectif à moyen terme

Approfondir le développement VR/AR et explorer les applications professionnelles (formation, visualisation de données).


`,Cr=`---
name: Oracle
slug: oracle
published: true
category: db
color: red
logo: Oracle
---

::toc

# Oracle Database : la base de données enterprise

## 📌 Définition et contexte professionnel

**Oracle Database** est un système de gestion de bases de données relationnelles (SGBDR) développé par Oracle Corporation depuis 1979. C'est le **leader historique** des bases de données d'entreprise.

L'importance d'Oracle dans l'industrie :

- **Marché enterprise** : banques, assurances, télécoms, gouvernements
- **Fonctionnalités avancées** : RAC (cluster), Data Guard (haute dispo), Partitioning
- **Performance** : optimisé pour les charges transactionnelles massives
- **Sécurité** : encryption, audit, compliance réglementaire
- **Support** : SLA enterprise avec assistance 24/7

Oracle reste incontournable dans les **grandes entreprises** avec des besoins critiques, malgré la montée des alternatives open-source.

---

## 🔍 Mes réalisations concrètes

### Synchrotron SOLEIL : bases de données legacy

Au **Synchrotron SOLEIL**, plusieurs applications historiques utilisent Oracle Database.

**Mes interactions avec Oracle** :
- **Requêtes SQL** sur des bases Oracle pour l'analyse de données
- Compréhension des **spécificités Oracle** (séquences, packages PL/SQL)
- Migration de données d'Oracle vers **PostgreSQL** pour certains projets

### Formation académique

Durant ma formation, j'ai appris les bases d'Oracle Database :
- **PL/SQL** : procédures stockées, triggers, packages
- **SQL*Plus** : interface en ligne de commande
- **Oracle SQL Developer** : IDE graphique

---

## 🎯 Autocritique et positionnement

### Niveau de maîtrise

| Domaine | Niveau |
|---------|--------|
| SQL standard | ★★★★★ Expert |
| Spécificités Oracle (PL/SQL) | ★★★☆☆ Intermédiaire |
| Administration Oracle | ★★☆☆☆ Débutant |
| RAC / Data Guard | ★☆☆☆☆ Découverte |

### Contextualisation

Oracle est pertinent pour les **grands comptes** avec des budgets conséquents et des besoins de support enterprise. Pour les projets plus modestes, **PostgreSQL** offre des fonctionnalités comparables sans les coûts de licence.

### Place dans mon profil

Oracle est une compétence **complémentaire** dans mon profil. Je peux travailler sur des projets utilisant Oracle, mais je recommande PostgreSQL pour les nouveaux développements.

### Conseils tirés de mon expérience

> *"Évaluez vraiment si vous avez besoin d'Oracle. PostgreSQL couvre 90% des cas d'usage sans les coûts de licence."*

- Maîtriser le **SQL standard** : la majorité est portable entre SGBDR
- Connaître les **spécificités Oracle** (ROWNUM, NVL, séquences) pour la maintenance
- **Oracle XE** (Express Edition) est gratuit pour l'apprentissage

---

## 📈 Évolution et perspectives

### Objectif à moyen terme

Maintenir mes compétences Oracle pour les projets legacy tout en continuant à privilégier **PostgreSQL** pour les nouveaux développements.


`,jr=`---
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
`,Lr=`---
name: Photoshop
slug: photoshop
published: true
category: design
color: blue
logo: Photoshop
---

Logiciel de retouche d'image et de création graphique d'Adobe.
`,Pr=`---
name: PHP
slug: php
published: true
category: pro-lang
color: purple
logo: PHP
---

::toc

# PHP : le langage du web dynamique

## 📌 Définition et contexte professionnel

**PHP** (Hypertext Preprocessor) est un langage de script côté serveur créé en 1995, spécifiquement conçu pour le **développement web**. Malgré les critiques, PHP reste le langage le plus utilisé pour le web : **~77% des sites** l'utilisent, notamment via WordPress, Drupal et Laravel.

L'importance de PHP dans l'industrie :

- **Hébergement universel** : disponible sur tous les hébergeurs web
- **CMS majeurs** : WordPress, Drupal, Magento, PrestaShop
- **Frameworks modernes** : Laravel, Symfony offrent une expérience de développement moderne
- **Évolution continue** : PHP 8.x apporte typage strict, JIT compiler, attributes
- **Communauté massive** : ressources et packages abondants (Composer/Packagist)

PHP a longtemps souffert d'une mauvaise réputation, mais les versions modernes (7.x, 8.x) ont considérablement amélioré le langage.

---

## 🔍 Mes réalisations concrètes

### Formation IN'TECH : applications web dynamiques

Durant ma formation à **IN'TECH**, PHP était le langage principal pour apprendre le développement web côté serveur.

**Projets réalisés** :
- **Site e-commerce** : panier, authentification, paiement (simulé)
- **Blog avec CMS custom** : CRUD articles, commentaires, administration
- **API REST** : endpoints JSON pour une application mobile

**Ma contribution** :
- Architecture **MVC** sans framework puis avec **Laravel**
- Gestion des **sessions** et de l'authentification
- Requêtes **PDO** préparées contre les injections SQL
- Intégration de **Composer** pour la gestion des dépendances

**Résultat** : compréhension solide du développement web côté serveur et des bonnes pratiques de sécurité.

---

## 🎯 Autocritique et positionnement

### Niveau de maîtrise

| Domaine | Niveau |
|---------|--------|
| Syntaxe et OOP | ★★★★☆ Avancé |
| Laravel | ★★★☆☆ Intermédiaire |
| Sécurité (XSS, CSRF, SQL injection) | ★★★★☆ Avancé |
| Composer / Packagist | ★★★☆☆ Intermédiaire |
| PHP 8.x (features modernes) | ★★☆☆☆ Débutant |

### Marge de progression

- **PHP 8.x** : attributes, named arguments, match expression, JIT
- **Symfony** : framework enterprise-grade
- **Tests** : PHPUnit, Pest

### Place dans mon profil

PHP est une compétence **historique** dans mon parcours. Je l'ai appris en formation mais je privilégie aujourd'hui **Java/Spring** pour le backend et **SvelteKit** pour le full-stack. Néanmoins, je peux intervenir sur des projets PHP si nécessaire.

### Conseils tirés de mon expérience

> *"Le PHP moderne (8.x avec Laravel ou Symfony) n'a rien à voir avec le PHP d'il y a 10 ans. Donnez-lui une chance si vous le jugez uniquement sur sa réputation."*

- **Toujours** utiliser les **requêtes préparées** (PDO)
- Activer le **typage strict** avec \`declare(strict_types=1)\`
- Utiliser **Composer** dès le début du projet

---

## 📈 Évolution et perspectives

### Objectif à moyen terme

Maintenir mes compétences PHP pour pouvoir intervenir sur des projets legacy ou WordPress, sans en faire ma technologie principale.


`,kr=`---
name: Playwright
slug: playwright
published: true
category: test
color: green
logo: Playwright
---

::toc

# Playwright : l'automatisation de tests nouvelle génération

## 📌 Définition et contexte professionnel

**Playwright** est un framework d'automatisation de tests **end-to-end** développé par Microsoft, conçu pour tester les applications web modernes. Lancé en 2020, il s'est rapidement imposé comme le **successeur de Selenium** pour les tests automatisés.

Les avantages de Playwright dans l'industrie :

- **Multi-navigateurs** : Chromium, Firefox, WebKit avec une API unifiée
- **Auto-waiting** : attente automatique des éléments, fini les \`sleep()\`
- **Isolation** : contextes de navigateur isolés, parallélisation native
- **Debugging** : trace viewer, screenshots, vidéos intégrés
- **Modern web** : support natif des SPA, Shadow DOM, iframes

Playwright représente l'état de l'art du **testing E2E**, remplacant Selenium dans de nombreux projets.

---

## 🔍 Mes réalisations concrètes

### TAP : intégration dans la plateforme de tests

Dans le cadre du projet **TAP** au Synchrotron SOLEIL, j'ai intégré Playwright comme moteur d'exécution de tests E2E.

**Ma contribution** :
- Intégration de **Playwright dans Docker** pour exécution headless
- Configuration du **reporting vers Allure** pour la visualisation des résultats
- Écriture de tests pour les applications web internes du synchrotron
- Documentation des **bonnes pratiques** pour les équipes

**Résultat** : Playwright est devenu le standard recommandé pour les nouveaux tests E2E, remplaçant progressivement Selenium.

→ [Voir le projet TAP](/projects/tap)

### Tests de ce portfolio

Ce portfolio utilise Playwright pour les tests E2E, vérifiant que toutes les pages se chargent correctement et que la navigation fonctionne.

---

## 🎯 Autocritique et positionnement

### Niveau de maîtrise

| Domaine | Niveau |
|---------|--------|
| API de base (locators, actions) | ★★★★★ Expert |
| Configuration et setup | ★★★★☆ Avancé |
| Page Object Model | ★★★★☆ Avancé |
| Debugging (traces, screenshots) | ★★★★☆ Avancé |
| Tests API | ★★★☆☆ Intermédiaire |

### Marge de progression

- **Tests visuels** : comparaison de screenshots, régression visuelle
- **Tests API** : utilisation de Playwright pour les tests d'API REST
- **Component testing** : tests de composants isolés

### Vitesse d'acquisition

Venant de Selenium, j'ai adopté Playwright **très rapidement** grâce à son API intuitive et sa documentation excellente. En quelques jours, j'étais plus productif qu'après des mois de Selenium.

### Place dans mon profil

Playwright est mon **outil principal** pour les tests E2E. Il complète parfaitement mon profil de développeur en y ajoutant une compétence QA indispensable.

### Conseils tirés de mon expérience

> *"Si vous faites encore du Selenium, migrez vers Playwright. L'expérience développeur est incomparable."*

- Utiliser les **locators semantiques** (\`getByRole\`, \`getByText\`) plutôt que CSS/XPath
- Activer le **trace viewer** pour déboguer les tests qui échouent
- Implémenter le **Page Object Model** dès le début

---

## 📈 Évolution et perspectives

### Objectif à moyen terme

Maîtriser les **tests visuels** et le **component testing** pour une couverture de tests complète.


`,_r=`---
name: PostgreSQL
slug: postgres
published: true
category: db
color: blue
logo: PostgreSQL
---

::toc

# PostgreSQL : la base de données relationnelle de référence

## 📌 Définition et contexte professionnel

**PostgreSQL** (souvent abrégé "Postgres") est un système de gestion de bases de données relationnelles **open-source** reconnu pour sa **robustesse**, son **respect des standards SQL** et ses fonctionnalités avancées. Créé en 1986, il est aujourd'hui utilisé par des géants comme Apple, Instagram, Spotify et la NASA.

Dans le contexte professionnel actuel, PostgreSQL s'impose comme **le choix par défaut** pour les nouvelles applications, détrônant progressivement MySQL. Les raisons de cette adoption massive :

- **Conformité ACID complète** : garantie d'intégrité des données même en cas de crash
- **Fonctionnalités avancées** : JSON natif, full-text search, extensions (PostGIS, TimescaleDB)
- **Performance** : optimiseur de requêtes sophistiqué, indexation avancée (B-tree, GIN, GiST)
- **Évolutivité** : réplication, partitionnement, support de téraoctets de données

Au **Synchrotron SOLEIL**, PostgreSQL est la base de données **standard pour tous les nouveaux développements**. Cette standardisation facilite la maintenance et permet aux équipes de partager leur expertise.

---

## 🔍 Mes réalisations concrètes

### SUN Auto : gestion du cycle de vie applicatif

Pour le projet **SUN Auto**, j'ai conçu et implémenté le **schéma de base de données PostgreSQL** qui stocke toutes les informations sur les applications du synchrotron.

**Le défi** : modéliser efficacement les relations complexes entre applications, responsables, technologies et états du workflow.

**Ma contribution** :
- Conception du **modèle de données relationnel** avec 12 tables interconnectées
- Optimisation des requêtes via des **index stratégiques** et des vues matérialisées
- Implémentation de **contraintes d'intégrité** (foreign keys, check constraints)
- Migration de données depuis l'ancien système (scripts SQL + Spring Batch)

**Résultat** : temps de réponse moyen de **< 50ms** sur les requêtes complexes impliquant plusieurs jointures.

→ [Voir le projet SUN Auto](/projects/sun-auto)

### TAP : stockage des résultats de tests

La plateforme **TAP** utilise PostgreSQL pour stocker l'historique de toutes les exécutions de tests et leurs résultats détaillés.

**Ma contribution** :
- Modélisation du schéma pour les **séries temporelles de tests** (exécutions, résultats, métriques)
- Utilisation du **type JSONB** pour stocker les données de configuration flexibles
- Mise en place de la **rétention automatique** des données anciennes (partitionnement par date)

**Résultat** : capacité de stocker **+100 000 exécutions de tests** avec des requêtes d'agrégation rapides pour les tableaux de bord.

→ [Voir le projet TAP](/projects/tap)

---

## 🎯 Autocritique et positionnement

### Niveau de maîtrise

| Domaine | Niveau |
|---------|--------|
| Modélisation relationnelle | ★★★★☆ Avancé |
| Requêtes SQL (SELECT, JOIN) | ★★★★★ Expert |
| Optimisation / EXPLAIN | ★★★★☆ Avancé |
| Administration (backup, réplication) | ★★★☆☆ Intermédiaire |
| Extensions (PostGIS, etc.) | ★★☆☆☆ Débutant |

### Marge de progression

- **Administration avancée** : réplication streaming, haute disponibilité, failover automatique
- **Tuning performances** : configuration mémoire, vacuum, autovacuum
- **Extensions spécialisées** : PostGIS pour les données géospatiales, TimescaleDB pour les séries temporelles

### Place dans mon profil

PostgreSQL est **ma base de données par défaut** pour tout projet backend. Je l'associe systématiquement à Spring Data JPA en Java ou à Prisma/Drizzle en TypeScript. C'est une compétence **essentielle** pour un développeur backend.

### Conseils tirés de mon expérience

> *"Investissez du temps dans la modélisation avant d'écrire du code. Un bon schéma de données facilite tout le développement qui suit."*

- **Utiliser EXPLAIN ANALYZE** pour comprendre les plans d'exécution
- **Indexer stratégiquement** : trop d'index ralentit les écritures
- **Préférer les contraintes en base** aux validations applicatives pour l'intégrité

---

## 📈 Évolution et perspectives

### Objectif à moyen terme

Maîtriser l'**administration PostgreSQL** pour pouvoir gérer des environnements de production critiques en autonomie.

### Formations prévues

| Formation | Statut | Objectif |
|-----------|--------|----------|
| PostgreSQL Administration | Prévu 2026 | Maîtrise opérationnelle |
| Performance Tuning | En veille | Optimisation avancée |


`,Tr=`---
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
`,Ir=`---
name: Microsoft PowerPoint
slug: powerpoint
published: true
category: devtools
color: orange
logo: PowerPoint
---

Création de présentations professionnelles, animations et supports de communication visuels.
`,Dr=`---
name: PyCharm
slug: pycharm
published: true
category: devtools
color: green
logo: PyCharm
---

IDE JetBrains dédié au développement Python. Support Django, Flask, data science et debugging avancé.
`,Mr=`---
name: Python
slug: python
published: true
category: pro-lang
color: yellow
logo: Python
---

::toc

# Python : ma boîte à outils pour l'IA et le prototypage

## 📌 Définition et contexte professionnel

**Python** est un langage de programmation interprété, créé par Guido van Rossum en 1991. Sa philosophie *"There should be one— and preferably only one —obvious way to do it"* et sa syntaxe épurée en font le langage le plus accessible pour débuter, tout en restant suffisamment puissant pour des applications complexes.

En 2025, Python domine plusieurs domaines clés :

- **Intelligence Artificielle et Machine Learning** : TensorFlow, PyTorch, scikit-learn
- **Data Science** : pandas, NumPy, Matplotlib
- **Computer Vision** : OpenCV, MediaPipe
- **Scripting et automatisation** : remplacement de Bash pour les tâches système
- **Web backend** : Django, Flask, FastAPI

Dans mon parcours, Python occupe une place **complémentaire à Java**. Là où Java excelle pour les applications d'entreprise structurées, Python brille pour le **prototypage rapide**, l'**analyse de données** et les projets d'**intelligence artificielle**. Au Synchrotron SOLEIL, Python est utilisé pour les scripts d'automatisation et l'analyse des données expérimentales des lignes de lumière.

L'écosystème Python connaît une croissance explosive avec l'essor de l'IA générative. Des frameworks comme **LangChain** ou **Hugging Face Transformers** permettent d'intégrer des LLM en quelques lignes de code. Cette actualité renforce l'importance de maîtriser Python pour tout développeur souhaitant travailler dans le domaine de l'IA.

---

## 🔍 Mes réalisations concrètes

### Foot AI : analyse tactique de matchs de football

**Foot AI** est un projet de Computer Vision développé dans le cadre de mes études. L'application analyse des vidéos de football pour générer des cartes tactiques montrant les positions des joueurs.

**Le défi** : extraire automatiquement les positions des joueurs à partir d'une vidéo de match, sans marqueurs ni capteurs, uniquement par analyse d'image.

**Ma contribution** :
- Pipeline complet de traitement vidéo avec **OpenCV** (extraction de frames, filtrage, détection de contours)
- Intégration de **MediaPipe** pour l'estimation de pose et la détection des joueurs
- Algorithme de **tracking** pour suivre les joueurs entre les frames
- Interface web interactive avec **Streamlit** pour upload et visualisation
- Génération de **cartes tactiques 2D** à partir des positions détectées

**Résultat** : application fonctionnelle capable de traiter des clips de 30 secondes et de générer une carte tactique avec une précision de détection de ~85% sur les vidéos de qualité broadcast.

→ [Voir le projet Foot AI](/projects/foot-ai)

### CIFAR-10 : pipeline complet de Deep Learning

Ce projet universitaire couvre l'ensemble du workflow Machine Learning, de l'exploration des données à l'inférence en production.

**Le défi** : construire un modèle de classification d'images capable de reconnaître 10 catégories (avion, voiture, oiseau, chat, etc.) avec une précision acceptable.

**Ma contribution** :
- Exploration et prétraitement du dataset **CIFAR-10** (60 000 images)
- Architecture **CNN** (Convolutional Neural Network) avec TensorFlow/Keras
- Optimisation des hyperparamètres (learning rate, batch size, epochs)
- Visualisation des courbes d'entraînement (loss, accuracy)
- Déploiement via **API Flask** et interface **Streamlit** pour l'inférence

**Résultat** : modèle atteignant **78% de précision** sur le jeu de test, avec une API permettant de classifier n'importe quelle image 32x32 en temps réel.

→ [Voir le projet CIFAR-10](/projects/tpvpocifar)

### Squat Counter : estimation de pose en temps réel

Application de comptage de squats utilisant la webcam et l'estimation de pose humaine.

**Le défi** : détecter et compter les squats en temps réel sans équipement spécial, uniquement avec une webcam standard.

**Ma contribution** :
- Extraction des **landmarks corporels** avec MediaPipe Pose (33 points d'articulation)
- Calcul d'**angles articulaires** (hanches, genoux) pour détecter la phase du squat
- **Machine à états** pour le comptage (debout → descente → bas → remontée → debout)
- Interface Streamlit avec **jauge visuelle** en temps réel
- Optimisation pour maintenir **30 FPS** sur un laptop standard

**Résultat** : compteur fonctionnel avec moins de 5% d'erreur sur des séries de 20 squats, utilisable pour l'entraînement personnel.

→ [Voir le projet Squat Counter](/projects/squat-counter-ia)

---

## 🎯 Autocritique et positionnement

### Niveau de maîtrise

Je situe ma compétence Python à un **niveau avancé**, particulièrement dans les domaines de la data et du ML :

| Domaine | Niveau |
|---------|--------|
| Syntaxe et idiomes Python | ★★★★★ Expert |
| Data manipulation (pandas, NumPy) | ★★★★☆ Avancé |
| Computer Vision (OpenCV, MediaPipe) | ★★★★☆ Avancé |
| Deep Learning (TensorFlow) | ★★★☆☆ Intermédiaire |
| Web backend (Flask, FastAPI) | ★★★☆☆ Intermédiaire |
| MLOps (déploiement modèles) | ★★☆☆☆ Débutant |

### Marge de progression

Mes axes d'amélioration identifiés :

- **PyTorch** : j'utilise principalement TensorFlow, mais PyTorch domine la recherche académique
- **MLOps** : packaging de modèles, versioning (MLflow, DVC), déploiement scalable
- **LLM et IA générative** : LangChain, fine-tuning de modèles, RAG (Retrieval-Augmented Generation)
- **Async Python** : asyncio et programmation asynchrone pour les APIs performantes

### Contextualisation

Ma compétence Python fonctionne particulièrement bien pour :
- **Prototypage rapide** : tester une idée en quelques heures
- **Projets ML/IA** : l'écosystème est imbattable
- **Scripts d'automatisation** : plus lisible et maintenable que Bash

En revanche, pour des applications backend d'entreprise à long terme, je préfère **Java/Spring** pour sa robustesse et son typage statique.

### Place dans mon profil

Python est mon **langage de prédilection pour l'IA et le prototypage**. Combiné à Java pour le backend et TypeScript pour le frontend, il complète un profil full-stack orienté data. Dans mes responsabilités actuelles, Python sert principalement pour :
- Les PoC (Proof of Concept) rapides
- Les analyses de données ponctuelles
- Les projets personnels et universitaires en ML

### Vitesse d'acquisition

Python a été mon **premier langage de programmation** (2017), appris en autodidacte via des tutoriels YouTube et des projets personnels. La courbe d'apprentissage douce m'a permis de produire des scripts utiles dès les premières semaines. La montée en compétence sur les frameworks ML (2023-présent) s'est faite naturellement grâce aux bases solides.

### Conseils tirés de mon expérience

> *"Python pardonne beaucoup d'erreurs de débutant, mais apprenez rapidement les bonnes pratiques (PEP8, typing, virtual environments) pour ne pas accumuler de dette technique."*

Mes recommandations :
- **Toujours utiliser des virtual environments** (venv ou conda) : évite les conflits de dépendances
- **Apprendre pandas et NumPy** avant les frameworks ML : ce sont les fondations
- **Utiliser les type hints** : Python 3.10+ les rend presque indispensables pour la maintenabilité
- **Jupyter pour explorer, .py pour produire** : ne pas confondre notebook et code de production

---

## 📈 Évolution et perspectives

### Mon objectif à moyen terme

D'ici 2 ans, je vise à devenir **opérationnel sur les projets d'IA en entreprise**, capable de :
- Concevoir et déployer des pipelines ML end-to-end
- Intégrer des LLM dans des applications métier
- Mettre en place des pratiques MLOps (monitoring, versioning, CI/CD pour modèles)

### Formations en cours et à venir

| Formation | Statut | Objectif |
|-----------|--------|----------|
| Deep Learning Specialization (Coursera) | En cours | Fondamentaux théoriques solides |
| LangChain & LLM | Prévu 2026 | Maîtriser l'IA générative |
| MLOps avec MLflow | Prévu | Industrialiser les modèles |

### Veille technologique

Je suis activement :
- Les publications de Hugging Face et OpenAI
- La chaîne YouTube de Sentdex pour le ML pratique
- Le subreddit r/MachineLearning pour les dernières recherches
- Les releases Python (3.12, 3.13) pour les nouvelles fonctionnalités
`,Er=`---
name: React.js
slug: reactjs
published: true
category: library
color: cyan
logo: ReactJs
---

Bibliothèque JavaScript pour créer des interfaces utilisateur réactives. Utilisé professionnellement.
`,Rr=`---
name: Redis
slug: redis
published: true
category: db
color: red
logo: Redis
---

::toc

# Redis : le cache haute performance

## 📌 Définition et contexte professionnel

**Redis** (Remote Dictionary Server) est une base de données **in-memory** open-source, utilisée principalement comme **cache**, **broker de messages** et **store de sessions**. Sa rapidité exceptionnelle (opérations en microsecondes) en fait un composant critique des architectures modernes.

Dans l'industrie, Redis est devenu **incontournable** pour :

- **Caching** : réduire la charge sur les bases de données principales
- **Sessions utilisateur** : stockage rapide et distribué
- **Rate limiting** : contrôle du débit des API
- **Pub/Sub** : communication temps réel entre services
- **Files d'attente** : gestion de tâches asynchrones

Au **Synchrotron SOLEIL**, Redis est utilisé pour **optimiser les performances** des applications web en cachant les données fréquemment accédées.

---

## 🔍 Mes réalisations concrètes

### TAP : cache des résultats de tests

Dans la plateforme **TAP**, j'ai implémenté un **système de cache Redis** pour accélérer l'affichage des tableaux de bord.

**Le défi** : les agrégations de résultats de tests (taux de succès, tendances) nécessitaient des requêtes SQL coûteuses.

**Ma contribution** :
- Configuration de **Redis comme cache Spring** avec TTL configurable
- Implémentation d'une **stratégie d'invalidation** intelligente (cache-aside pattern)
- Mise en cache des **rapports Allure** générés

**Résultat** : temps de chargement des dashboards réduit de **3 secondes à 200ms** en moyenne.

→ [Voir le projet TAP](/projects/tap)

---

## 🎯 Autocritique et positionnement

### Niveau de maîtrise

| Domaine | Niveau |
|---------|--------|
| Caching basique | ★★★★☆ Avancé |
| Structures de données | ★★★☆☆ Intermédiaire |
| Pub/Sub | ★★★☆☆ Intermédiaire |
| Cluster / Sentinel | ★★☆☆☆ Débutant |

### Marge de progression

- **Redis Cluster** : déploiement distribué pour la haute disponibilité
- **Streams** : traitement d'événements en temps réel
- **Lua scripting** : opérations atomiques complexes

### Place dans mon profil

Redis est un **outil complémentaire** que j'utilise systématiquement pour optimiser les performances. Couplé à PostgreSQL et Spring Boot, il forme une stack backend performante.

### Conseils tirés de mon expérience

> *"Redis n'est pas une base de données principale. Utilisez-le comme cache avec une stratégie d'invalidation claire."*

- Toujours définir des **TTL (Time To Live)** sur les clés
- Monitorer la **mémoire utilisée** pour éviter les évictions non désirées
- Prévoir un **fallback** si Redis est indisponible

---

## 📈 Évolution et perspectives

### Objectif à moyen terme

Maîtriser **Redis Cluster** pour des architectures distribuées et haute disponibilité.

### Formations prévues

| Formation | Statut |
|-----------|--------|
| Redis University (gratuit) | Prévu 2026 |
| Patterns de caching avancés | En veille |


`,Or=`---
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
`,Ur=`---
name: Selenium
slug: selenium
published: true
category: test
color: green
logo: Selenium
---

::toc

# Selenium : l'automatisation de tests historique

## 📌 Définition et contexte professionnel

**Selenium** est un framework d'automatisation de tests pour navigateurs web, créé en 2004. Pendant près de 20 ans, il a été **le standard de facto** pour les tests end-to-end, utilisé par des milliers d'entreprises.

L'importance historique de Selenium :

- **Standard W3C** : WebDriver est devenu un standard du web
- **Multi-langages** : Java, Python, JavaScript, C#, Ruby
- **Multi-navigateurs** : Chrome, Firefox, Safari, Edge
- **Écosystème mature** : Selenium Grid, Selenium IDE, nombreux frameworks
- **Base installée** : des millions de tests existants dans l'industrie

Aujourd'hui, Selenium est progressivement remplacé par des outils plus modernes (Playwright, Cypress), mais il reste très présent dans les **projets legacy**.

---

## 🔍 Mes réalisations concrètes

### TAP : support des tests Selenium existants

La plateforme **TAP** au Synchrotron SOLEIL gère de nombreux tests Selenium existants.

**Ma contribution** :
- Intégration de **Selenium Grid** dans l'infrastructure TAP
- Configuration des **drivers Chrome et Firefox** en mode headless
- Conversion progressive de tests Selenium vers **Playwright**
- Maintenance des tests legacy jusqu'à leur migration

**Résultat** : continuité de service pour les tests existants tout en migrant vers des technologies plus modernes.

→ [Voir le projet TAP](/projects/tap)

### Formation : apprentissage du testing E2E

J'ai appris les tests E2E avec Selenium avant de découvrir Playwright. Cette expérience m'a permis de comprendre les **difficultés** que les outils modernes cherchent à résoudre.

---

## 🎯 Autocritique et positionnement

### Niveau de maîtrise

| Domaine | Niveau |
|---------|--------|
| WebDriver API | ★★★★☆ Avancé |
| Locators (CSS, XPath) | ★★★★☆ Avancé |
| Selenium Grid | ★★★☆☆ Intermédiaire |
| Waits explicites | ★★★★☆ Avancé |

### Contextualisation

Selenium fonctionne bien pour les applications web **classiques** mais souffre avec les **SPA modernes** (React, Vue, Angular). Les problèmes de **timing** et de **synchronisation** peuvent rendre les tests instables ("flaky tests").

### Place dans mon profil

Selenium est une compétence **historique** que je conserve pour la maintenance de tests legacy, mais je recommande et utilise **Playwright** pour tout nouveau projet.

### Conseils tirés de mon expérience

> *"Si vous maintenez des tests Selenium, planifiez une migration vers Playwright. L'investissement en vaut la peine."*

- **Toujours** utiliser des **waits explicites**, jamais \`Thread.sleep()\`
- Préférer les **ID et data-testid** aux XPath fragiles
- Considérer sérieusement la **migration vers Playwright**

---

## 📈 Évolution et perspectives

### Objectif à moyen terme

Aider à la **migration des tests Selenium vers Playwright** dans les projets que je rejoins.


`,Vr=`---
name: Skript
slug: skript
published: true
category: devtools
color: orange
logo: Skript
---

Langage de scripting simplifié pour créer des plugins Minecraft sans Java. Syntaxe proche de l'anglais naturel.
`,Jr=`---
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

::toc

# Spring : le framework Java enterprise

## 📌 Définition et contexte professionnel

**Spring** est un framework Java complet pour le développement d'applications enterprise. Créé en 2003 comme alternative aux EJB, il est devenu le **standard de facto** pour le développement Java backend.

L'importance de Spring dans l'industrie :

- **Spring Boot** : configuration automatique, démarrage rapide
- **Spring Data** : abstraction de la couche d'accès aux données
- **Spring Security** : authentification et autorisation
- **Spring Cloud** : outils pour les architectures microservices
- **Écosystème complet** : chaque besoin a un module Spring

Selon les enquêtes, **Spring Boot est utilisé par +60% des développeurs Java** pour les nouveaux projets backend.

---

## 🔍 Mes réalisations concrètes

### SUN Auto : backend Spring Boot complet

Le projet **SUN Auto** au Synchrotron SOLEIL est entièrement construit avec Spring Boot.

**Ma contribution** :
- Architecture **Spring Boot 3** avec Java 17
- **API REST** complète avec Spring Web
- **Spring Data JPA** pour l'accès à PostgreSQL
- **Spring Scheduler** pour les jobs planifiés (scan GitLab)
- **Spring Cache** avec Redis pour les performances
- **Tests** avec Spring Test et Testcontainers

**Résultat** : application robuste en production depuis 2024.

→ [Voir le projet SUN Auto](/projects/sun-auto)

### TAP : plateforme de tests

Le backend de **TAP** utilise également Spring Boot.

**Ma contribution** :
- **WebSocket** avec Spring pour le streaming temps réel
- **Spring Security** pour l'authentification
- **Spring Batch** pour le traitement de données

→ [Voir le projet TAP](/projects/tap)

---

## 🎯 Autocritique et positionnement

### Niveau de maîtrise

| Domaine | Niveau |
|---------|--------|
| Spring Boot (Core) | ★★★★★ Expert |
| Spring Web (REST) | ★★★★★ Expert |
| Spring Data JPA | ★★★★☆ Avancé |
| Spring Security | ★★★☆☆ Intermédiaire |
| Spring Cloud | ★★☆☆☆ Débutant |

### Marge de progression

- **Spring Security avancé** : OAuth2, JWT, OIDC
- **Spring Cloud** : microservices, service discovery, config server
- **Spring WebFlux** : programmation réactive

### Place dans mon profil

Spring est mon **framework backend principal**. Couplé à ma maîtrise de Java, il forme le cœur de mon expertise backend. Je suis capable de développer des applications enterprise complètes from scratch.

### Vitesse d'acquisition

Mon apprentissage de Spring s'est fait **progressivement** en alternance. Les bases (Spring Boot, Web, Data) ont été acquises rapidement, les modules avancés (Security, Cloud) prennent plus de temps.

### Conseils tirés de mon expérience

> *"Spring Boot fait beaucoup de magie. Comprenez ce qui se passe derrière l'auto-configuration pour déboguer efficacement."*

- **Commencer par Spring Boot**, pas par Spring Framework brut
- **Lire les logs de démarrage** : ils expliquent l'auto-configuration
- Utiliser **Spring Initializr** pour démarrer un projet
- **Écrire des tests** : Spring Test rend les tests d'intégration simples

---

## 📈 Évolution et perspectives

### Objectif à moyen terme

Obtenir la certification **Spring Certified Professional** et maîtriser **Spring Cloud** pour les architectures microservices.

### Formations prévues

| Formation | Statut |
|-----------|--------|
| Spring Certified Professional | Prévu 2026 |
| Spring Cloud / Microservices | En veille |
| Spring Security avancé | Prévu |


`,Gr=`---
name: Spring Boot
slug: springboot
published: false
category: framework
color: green
logo: Spring
---

Framework Java pour créer rapidement des applications Spring autonomes et prêtes pour la production.
`,zr=`---
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

::toc

# Streamlit : le prototypage web Python ultra-rapide

## 📌 Définition et contexte professionnel

**Streamlit** est un framework Python open-source permettant de créer des **applications web interactives** en quelques lignes de code. Lancé en 2019 et acquis par Snowflake en 2022, il a révolutionné le prototypage en data science.

L'attrait de Streamlit dans l'industrie :

- **Rapidité** : une app fonctionnelle en 10 minutes
- **Pur Python** : pas besoin de connaître HTML/CSS/JavaScript
- **Réactif** : mise à jour automatique quand le code change
- **Widgets** : sliders, boutons, graphiques, tables sans effort
- **Déploiement** : Streamlit Cloud gratuit pour partager ses apps

Streamlit est devenu l'outil de choix pour les **data scientists** qui veulent présenter leurs résultats sans développer un frontend complet.

---

## 🔍 Mes réalisations concrètes

### Squat Counter IA : interface computer vision

Le projet **Squat Counter IA** utilise Streamlit pour son interface utilisateur.

**Ma contribution** :
- **Interface webcam** pour la détection de pose en temps réel
- **Jauge visuelle** dynamique montrant l'état de la pose
- **Configuration** des seuils de détection via sliders
- Affichage du **compteur de squats** en temps réel

**Résultat** : application fonctionnelle développée en une journée grâce à la simplicité de Streamlit.

→ [Voir le projet Squat Counter IA](/projects/squat-counter-ia)

### Quiz AI : interface de quiz

Le projet **Quiz AI** utilise également Streamlit pour présenter les questions et réponses générées par IA.

→ [Voir le projet Quiz AI](/projects/quiz-ai)

---

## 🎯 Autocritique et positionnement

### Niveau de maîtrise

| Domaine | Niveau |
|---------|--------|
| Widgets de base | ★★★★★ Expert |
| Layout et colonnes | ★★★★☆ Avancé |
| Graphiques (Plotly, Altair) | ★★★☆☆ Intermédiaire |
| Caching et performance | ★★★☆☆ Intermédiaire |
| Components custom | ★★☆☆☆ Débutant |

### Marge de progression

- **Components custom** : création de widgets en React
- **Authentification** : gestion des utilisateurs
- **Performance** : caching avancé, session state

### Contextualisation

Streamlit excelle pour le **prototypage rapide** et les **dashboards internes**. Pour des applications publiques avec besoins de performance et de customisation, je privilégie **SvelteKit**.

### Place dans mon profil

Streamlit est mon **outil de prototypage Python**. Quand j'ai besoin de créer rapidement une interface pour un projet ML/data science, c'est mon premier choix.

### Conseils tirés de mon expérience

> *"Streamlit est parfait pour les POC et les démos. Ne cherchez pas à en faire une app production complexe."*

- Utilisez **\`st.cache_data\`** pour les calculs coûteux
- **Session state** pour gérer l'état entre les re-runs
- Déployez sur **Streamlit Cloud** pour partager facilement

---

## 📈 Évolution et perspectives

### Objectif à moyen terme

Continuer à utiliser Streamlit pour le prototypage tout en explorant **Gradio** comme alternative pour les démos ML.


`,Qr=`---
name: Svelte
slug: svelte
published: true
category: framework
color: orange
logo: Svelte
---

::toc

# Svelte & SvelteKit : le renouveau du développement frontend

## 📌 Définition et contexte professionnel

**Svelte** est un framework frontend créé par Rich Harris en 2016, qui se distingue radicalement de ses concurrents (React, Vue, Angular) par son approche **"compile-time"**. Là où React manipule un Virtual DOM à l'exécution, Svelte compile les composants en JavaScript vanilla optimisé lors du build. Résultat : des bundles plus légers et des performances supérieures.

**SvelteKit**, sorti en 2022, est le framework full-stack officiel de Svelte. Il offre :

- **Server-Side Rendering (SSR)** : pages pré-rendues pour le SEO
- **Static Site Generation (SSG)** : sites statiques ultra-performants
- **API Routes** : endpoints backend intégrés
- **File-based routing** : structure de fichiers = structure de routes

En 2024, Svelte a franchi un cap majeur avec la sortie de **Svelte 5** et son nouveau système de réactivité basé sur les **Runes** ($state, $derived, $effect). Cette refonte rapproche Svelte des patterns modernes tout en conservant sa simplicité signature.

Dans le paysage frontend actuel, Svelte gagne du terrain face à React. Les enquêtes développeurs (State of JS 2024) le placent régulièrement en tête de satisfaction. Des entreprises comme **Apple**, **Spotify**, **The New York Times** et **IKEA** l'utilisent en production.

Pour mes projets personnels et ce portfolio, Svelte est devenu mon **framework frontend de prédilection**. Sa courbe d'apprentissage douce, sa syntaxe proche du HTML/CSS/JS natif et ses performances exceptionnelles en font un choix idéal pour des applications web modernes.

---

## 🔍 Mes réalisations concrètes

### Ce portfolio : vitrine de mes compétences

Le site que vous consultez actuellement est lui-même une démonstration de ma maîtrise de Svelte et SvelteKit.

**Le défi** : créer un portfolio professionnel qui soit à la fois performant, maintenable et riche en fonctionnalités (blog, projets, compétences, animations).

**Ma contribution** :
- Architecture **SvelteKit** avec génération statique (adapter-static)
- Système de **chargement de contenu Markdown** avec frontmatter YAML
- Composants réutilisables : \`MarkdownAnimated\`, \`ProfileCard\`, \`ValueGrid\`, \`Tags\` avec animations
- **Syntaxe Markdown personnalisée** : \`:::values-grid\`, \`:::buttons\`, \`:::tags\` avec parsing custom
- Intégration **Tailwind CSS** et **UnoCSS** pour le styling
- **Mode sombre/clair** avec persistance localStorage
- **Animations fluides** avec Svelte transitions et CSS
- Déploiement automatique via **GitHub Pages**

**Résultat** : score Lighthouse de **98/100** en performance, temps de chargement initial < 1.5s, expérience utilisateur fluide sur mobile comme desktop.

→ [Voir le code source sur GitHub](https://github.com/alexyvanot/alexyvanot.github.io)

### Quiz AI : intégration IA avec SvelteKit

**Quiz AI** génère des quiz interactifs à partir de n'importe quel texte grâce à l'intelligence artificielle.

**Le défi** : créer une application full-stack avec frontend réactif, backend API et intégration de modèles LLM, le tout déployable facilement.

**Ma contribution** :
- Frontend **SvelteKit 5** avec les nouvelles Runes ($state, $derived)
- Interface utilisateur inspirée de Discord avec **Tailwind CSS**
- Communication temps réel avec le backend via fetch et gestion d'états
- **Stores Svelte** pour la gestion globale de l'état (quiz en cours, scores)
- Composants réactifs : formulaire de configuration, player de quiz, écran de résultats
- Responsive design et thème sombre natif

**Résultat** : application fonctionnelle permettant de générer et jouer des quiz en moins de 30 secondes, avec une interface moderne et intuitive.

→ [Voir le projet Quiz AI](/projects/quiz-ai)

### Svelte Static Blog : premiers pas avec Svelte

Mon **premier projet Svelte**, un générateur de blog statique minimaliste.

**Le défi** : apprendre Svelte en construisant un outil concret, tout en explorant les capacités de SvelteKit pour la génération de sites statiques.

**Ma contribution** :
- Configuration complète de **SvelteKit avec adapter-static**
- Système de parsing **Markdown** avec mdsvex
- Routing dynamique pour les articles (\`/posts/[slug]\`)
- **Hot reload** en développement pour une DX optimale
- Pipeline **GitHub Actions** pour le déploiement automatique

**Résultat** : blog fonctionnel déployé sur GitHub Pages, servant de base à l'architecture de ce portfolio.

→ [Voir le projet Svelte Blog](/projects/svelte-blog)

---

## 🎯 Autocritique et positionnement

### Niveau de maîtrise

Je situe ma compétence Svelte/SvelteKit à un **niveau avancé** :

| Domaine | Niveau |
|---------|--------|
| Composants et réactivité | ★★★★★ Expert |
| SvelteKit (routing, SSR, SSG) | ★★★★☆ Avancé |
| Svelte 5 Runes | ★★★★☆ Avancé |
| Stores et gestion d'état | ★★★★☆ Avancé |
| Animations et transitions | ★★★★☆ Avancé |
| SvelteKit API routes | ★★★☆☆ Intermédiaire |
| Tests (Playwright, Vitest) | ★★★☆☆ Intermédiaire |

### Marge de progression

Mes axes d'amélioration identifiés :

- **Tests end-to-end** : intégrer systématiquement Playwright dans mes projets
- **Server actions** : les form actions SvelteKit pour moins de JavaScript côté client
- **Accessibilité (a11y)** : Svelte facilite l'accessibilité, mais je dois approfondir les bonnes pratiques
- **Svelte Native** : explorer le développement mobile avec Svelte

### Contextualisation

Ma compétence Svelte fonctionne particulièrement bien pour :
- **Sites vitrines et portfolios** : performance et SEO optimaux
- **Applications web interactives** : réactivité native sans boilerplate
- **Prototypes rapides** : syntaxe concise, moins de code que React

En revanche, pour des applications très complexes avec beaucoup d'équipes, l'écosystème React (plus mature, plus de développeurs disponibles) reste parfois préférable en entreprise.

### Place dans mon profil

Svelte est devenu **le pilier de mon expertise frontend**. Combiné à mon backend Java/Spring et mes compétences Python/IA, il complète un profil full-stack moderne. Je l'utilise pour :
- Tous mes projets personnels web
- Les PoC frontend au travail (quand le choix de techno est libre)
- Ce portfolio, ma carte de visite professionnelle

### Vitesse d'acquisition

Mon apprentissage de Svelte a été **remarquablement rapide** (mi-2025). Venant de Vue.js et ayant des bases solides en HTML/CSS/JS, j'ai pu être productif en **moins de 2 semaines**. La documentation officielle, excellente, et le tutoriel interactif de Svelte ont été mes principales ressources.

La transition vers Svelte 5 et les Runes s'est faite naturellement grâce à la rétrocompatibilité et les guides de migration.

### Conseils tirés de mon expérience

> *"Si vous connaissez HTML, CSS et JavaScript, vous connaissez déjà 80% de Svelte. Le reste s'apprend en construisant."*

Mes recommandations :
- **Commencer par le tutoriel officiel** : [learn.svelte.dev](https://learn.svelte.dev) est le meilleur point d'entrée
- **Passer rapidement à SvelteKit** : même pour des projets simples, la structure imposée facilite la maintenance
- **Adopter Svelte 5 directement** : les Runes sont l'avenir, autant les apprendre maintenant
- **Explorer les transitions natives** : Svelte excelle dans les animations, ne pas s'en priver
- **Utiliser les stores avec parcimonie** : la réactivité composant suffit souvent

---

## 📈 Évolution et perspectives

### Mon objectif à moyen terme

D'ici 2 ans, je vise à devenir **référent Svelte** dans mon environnement professionnel, capable de :
- Architecturer des applications SvelteKit complexes
- Former des collègues à la migration depuis React/Vue
- Contribuer à l'écosystème (packages npm, articles techniques)

### Formations en cours et à venir

| Formation | Statut | Objectif |
|-----------|--------|----------|
| Svelte 5 deep dive | En cours (autoformation) | Maîtriser toutes les Runes |
| Testing avec Playwright | Prévu 2026 | Tests E2E systématiques |
| Svelte Summit (conférence) | Suivi en replay | Veille sur les nouveautés |

### Veille technologique

Je suis activement :
- Le blog officiel Svelte et les RFC
- Rich Harris sur Twitter/X pour les annonces
- La chaîne YouTube de Fireship pour les comparatifs frameworks
- Le Discord Svelte francophone pour les discussions communautaires
- Les releases SvelteKit sur GitHub
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
`,Kr=`---
name: Tailwind CSS
slug: tailwind
published: true
category: markup-style
color: cyan
logo: TailwindCSS
---

::toc

# Tailwind CSS : le CSS utility-first

## 📌 Définition et contexte professionnel

**Tailwind CSS** est un framework CSS **utility-first** qui fournit des classes prédéfinies pour styliser directement dans le HTML. Lancé en 2017, il a révolutionné l'approche du styling en front-end.

L'adoption de Tailwind dans l'industrie :

- **Productivité** : pas besoin de nommer des classes, pas de CSS à maintenir
- **Consistance** : design system intégré avec spacing, couleurs, typo
- **Performance** : purge des classes inutilisées = CSS minimal
- **Responsive** : breakpoints avec préfixes (\`md:\`, \`lg:\`, etc.)
- **Dark mode** : support natif avec le préfixe \`dark:\`
- **Écosystème** : Tailwind UI, Headless UI, daisyUI

Tailwind est devenu le **framework CSS le plus populaire**, dépassant Bootstrap selon les enquêtes récentes.

---

## 🔍 Mes réalisations concrètes

### Ce portfolio : 100% Tailwind (via UnoCSS)

Ce portfolio utilise **UnoCSS** avec la preset Tailwind, offrant la même syntaxe avec des performances améliorées.

**Ma contribution** :
- **Design responsive** du mobile au desktop
- **Dark mode** complètement implémenté
- **Animations** via classes Tailwind et utilitaires custom
- **Composants réutilisables** avec patterns Tailwind
- **Thématisation** : couleurs et spacing personnalisés

### Svelte Blog : premier projet Tailwind

Mon **Svelte Static Blog** m'a permis de découvrir Tailwind dans un contexte réel.

→ [Voir le projet Svelte Blog](/projects/svelte-blog)

---

## 🎯 Autocritique et positionnement

### Niveau de maîtrise

| Domaine | Niveau |
|---------|--------|
| Classes utilitaires | ★★★★★ Expert |
| Responsive design | ★★★★★ Expert |
| Dark mode | ★★★★☆ Avancé |
| Configuration (tailwind.config) | ★★★★☆ Avancé |
| Plugins et extensions | ★★★☆☆ Intermédiaire |

### Marge de progression

- **Plugins custom** : création de plugins Tailwind
- **Design systems** : configuration avancée pour des équipes
- **Animation** : @keyframes custom avec Tailwind

### Vitesse d'acquisition

L'adoption de Tailwind a été **immédiate** une fois passée la résistance initiale ("classes dans le HTML ?"). Après quelques jours, je ne peux plus m'en passer.

### Place dans mon profil

Tailwind est mon **approche CSS par défaut**. Je l'utilise sur tous mes projets frontend. Il complète parfaitement Svelte pour un workflow ultra-productif.

### Conseils tirés de mon expérience

> *"La première réaction à Tailwind est souvent négative. Donnez-lui une semaine, vous ne reviendrez plus au CSS classique."*

- **Installer l'extension VS Code** Tailwind CSS IntelliSense
- Utiliser les **composants** pour éviter la répétition de classes
- **Apprendre les classes** : spacing (m-4, p-2), flexbox (flex, items-center), colors

---

## 📈 Évolution et perspectives

### Objectif à moyen terme

Explorer **Tailwind v4** (en développement) et ses nouvelles fonctionnalités comme le CSS-in-JS runtime.


`,Wr=`---
name: Travail en équipe
slug: teamwork
published: true
category: soft
color: green
logo: Teamwork
---

::toc

## Ma définition

Le travail d'équipe ne se résume pas à "bien s'entendre avec ses collègues". C'est la capacité à **contribuer efficacement à un objectif collectif** en adaptant sa communication, en respectant les rôles de chacun, et en faisant passer la réussite du projet avant son ego personnel.

Dans le développement logiciel moderne, cette compétence est devenue incontournable. Les méthodologies Agile (Scrum, Kanban), le DevOps, et les architectures microservices exigent une **coordination constante** entre développeurs, designers, product owners et ops. Selon le rapport "State of DevOps 2024", les équipes avec une forte collaboration livrent 4 fois plus vite et ont 3 fois moins de bugs critiques.

Avec la généralisation du télétravail et des équipes distribuées géographiquement, savoir collaborer efficacement à distance est devenu aussi important que les compétences techniques.

---

## Mes éléments de preuve

### 1. Comet Learning — Coordination d'une équipe de 6 personnes

Le projet [Comet Learning](/projects/comet-learning) est ma plus grande expérience de travail d'équipe. Nous étions **6 développeurs** avec des niveaux et spécialités différents, et nous devions créer une plateforme de formation gamifiée intégrée à Minecraft en seulement 4 mois.

**Mon rôle** : Développeur backend Java et coordinateur technique informel (sans être officiellement chef de projet).

**Les défis d'équipe rencontrés** :
- Niveaux techniques très hétérogènes (de débutant à confirmé)
- Conflits sur les choix technologiques (base de données, architecture)
- Difficultés de planification avec les contraintes de cours de chacun

**Ma contribution à la cohésion** :
- Organisation de daily meetings de 15 minutes pour synchroniser l'équipe
- Création d'un wiki interne avec des tutoriels pour les moins expérimentés
- Médiation lors d'un désaccord sur l'architecture (j'ai proposé un POC pour trancher)
- Pair programming avec les membres en difficulté

**Résultat** : Projet livré dans les temps, présenté devant un jury avec une note de 17/20. Plusieurs membres m'ont remercié pour mon accompagnement.

### 2. Projet INVR — Collaboration interdisciplinaire

Le projet [INVR (Initiation à la Réalité Virtuelle)](/projects/invr) m'a confronté à un type de collaboration différent : travailler avec des **non-développeurs** (graphistes, game designers, ergonomes).

**Le contexte** : Créer une expérience VR immersive en équipe pluridisciplinaire, avec des personnes qui ne parlaient pas le même "langage" technique.

**Mon adaptation** :
- J'ai appris à **vulgariser** mes explications techniques pour les designers
- J'ai créé des prototypes visuels rapides pour valider les idées avant de coder
- J'ai mis en place un tableau Kanban visuel (Trello) accessible à tous

**Leçon apprise** : La collaboration technique/créatif nécessite de sortir de son jargon et de trouver un vocabulaire commun. J'ai compris que "ça ne fonctionne pas techniquement" n'est pas une réponse acceptable — il faut proposer des alternatives.

### 3. Alternance SOLEIL — Intégration dans une équipe établie

Mon alternance au Synchrotron SOLEIL m'a appris à **m'intégrer dans une équipe existante** avec ses habitudes, ses processus et son historique.

**Le défi** : Arriver dans une équipe de scientifiques et d'ingénieurs qui travaillaient ensemble depuis des années, avec un code legacy et des pratiques établies.

**Mon approche** :
- Période d'**observation active** les premières semaines (assister aux réunions sans intervenir)
- Questions ciblées aux bonnes personnes plutôt que de déranger tout le monde
- Propositions d'améliorations formulées comme des questions ("Et si on essayait...?")
- Respect des conventions de code existantes avant de proposer des changements

**Résultat** : Intégration réussie en moins d'un mois, et mes propositions d'amélioration ont été bien accueillies car j'avais d'abord montré que je comprenais le contexte.

---

## Mon autocritique

### Niveau de maîtrise actuel

| Critère | Évaluation | Commentaire |
|---------|------------|-------------|
| Communication claire | ⭐⭐⭐⭐ | Je sais adapter mon discours à l'interlocuteur |
| Écoute active | ⭐⭐⭐⭐ | Je reformule pour vérifier ma compréhension |
| Gestion des conflits | ⭐⭐⭐ | Je préfère parfois éviter que confronter |
| Partage de connaissances | ⭐⭐⭐⭐⭐ | J'aime transmettre et documenter |

### Marge de progression

Ma principale faiblesse est la **gestion des conflits**. J'ai tendance à éviter les confrontations directes, ce qui peut laisser des tensions non résolues. Je travaille sur ma capacité à exprimer un désaccord de manière constructive, sans agressivité mais sans non plus fuir le sujet.

Je dois aussi améliorer ma capacité à **déléguer** — j'ai parfois le réflexe de faire moi-même plutôt que d'expliquer à quelqu'un d'autre, ce qui n'est pas efficace à long terme.

### Place dans mon profil

Le travail d'équipe **équilibre mon autonomie**. Ces deux compétences se complètent : je sais avancer seul quand c'est nécessaire, mais je sais aussi collaborer efficacement quand le projet l'exige. Cette dualité me permet de m'adapter à différents contextes professionnels.

### Vitesse d'acquisition

Cette compétence s'est développée progressivement à travers les projets scolaires. Le déclic a été le projet Comet Learning, où j'ai vraiment compris l'importance de la coordination et de la communication proactive.

### Conseil pour développer cette compétence

**Participez à des projets collectifs variés** avec des équipes différentes à chaque fois. La diversité des profils et des dynamiques d'équipe est le meilleur terrain d'apprentissage. Et n'hésitez pas à prendre des rôles de coordination (même informels) — c'est en organisant qu'on comprend les défis de la collaboration.

---

## Mon évolution

### Objectifs à moyen terme

- **Maîtriser la facilitation de réunions** (techniques de sprint planning, retrospectives)
- **Développer mon leadership technique** sans être manager
- **Améliorer ma communication écrite** (documentation, RFC, specs techniques)

### Formations et actions prévues

- Lire "The Five Dysfunctions of a Team" de Patrick Lencioni
- Pratiquer la Communication Non Violente (CNV) pour mieux gérer les désaccords
- Prendre le rôle de Scrum Master sur un projet personnel pour expérimenter

Le travail d'équipe est une compétence qui se perfectionne à l'infini — chaque nouvelle équipe apporte ses défis et ses apprentissages.
`,Yr=`---
name: TensorFlow
slug: tensorflow
published: true
category: library
color: orange
logo: TensorFlow
---

::toc

# TensorFlow : le deep learning à grande échelle

## 📌 Définition et contexte professionnel

**TensorFlow** est une bibliothèque open-source de **machine learning et deep learning** développée par Google Brain. Lancée en 2015, elle est devenue l'un des frameworks les plus utilisés pour l'IA.

L'importance de TensorFlow dans l'industrie :

- **Production-ready** : utilisé par Google, Airbnb, Twitter, Intel
- **Écosystème complet** : TensorFlow Lite (mobile), TensorFlow.js (web), TensorFlow Serving
- **TensorBoard** : visualisation des entraînements
- **Keras intégré** : API haut niveau pour le prototypage rapide
- **Déploiement** : du cloud à l'embarqué (Edge TPU)

Bien que PyTorch gagne en popularité dans la recherche, TensorFlow reste très utilisé en **production industrielle**.

---

## 🔍 Mes réalisations concrètes

### CIFAR-10 : classification d'images par deep learning

Le projet **CIFAR-10** m'a permis d'explorer TensorFlow/Keras pour la classification d'images.

**Ma contribution** :
- Implémentation de **CNN** (Convolutional Neural Networks) avec Keras
- Entraînement sur le dataset **CIFAR-10** (60 000 images, 10 classes)
- Expérimentation avec l'**architecture** (convolutions, pooling, dropout)
- Analyse des résultats avec **TensorBoard**

**Résultat** : modèle atteignant **~85% de précision** sur le test set après tuning.

→ [Voir le projet CIFAR-10](/projects/tpvpocifar)

### Snake Game AI : réseaux de neurones from scratch

Le projet **Snake Game AI** utilise des réseaux de neurones (inspirés de TensorFlow) implémentés avec NumPy.

**Ce que j'ai appris** :
- Fonctionnement interne des **réseaux de neurones**
- **Propagation avant** et **rétropropagation**
- Intérêt des frameworks comme TensorFlow qui automatisent ces calculs

→ [Voir le projet Snake Game AI](/projects/snake-game-ai)

---

## 🎯 Autocritique et positionnement

### Niveau de maîtrise

| Domaine | Niveau |
|---------|--------|
| Keras API (Sequential, Functional) | ★★★☆☆ Intermédiaire |
| CNN pour images | ★★★☆☆ Intermédiaire |
| Transfer learning | ★★☆☆☆ Débutant |
| TensorBoard | ★★★☆☆ Intermédiaire |
| Déploiement (TF Serving, TF Lite) | ★☆☆☆☆ Découverte |

### Marge de progression

- **Transfer learning** : utilisation de modèles pré-entraînés (ResNet, VGG)
- **NLP** : transformers, BERT avec TensorFlow
- **Déploiement** : TensorFlow Serving pour la production
- **PyTorch** : framework concurrent à explorer

### Place dans mon profil

TensorFlow représente ma **porte d'entrée vers le ML/DL**. C'est une compétence en développement que je souhaite approfondir pour les projets impliquant de l'IA.

### Conseils tirés de mon expérience

> *"Commencez par Keras pour comprendre les concepts, puis descendez vers l'API TensorFlow basse niveau si nécessaire."*

- Utiliser **Google Colab** pour les GPU gratuits
- Commencer par des **datasets simples** (MNIST, CIFAR-10)
- **TensorBoard** est indispensable pour comprendre l'entraînement

---

## 📈 Évolution et perspectives

### Objectif à moyen terme

Approfondir le **deep learning** et explorer le **NLP** (traitement du langage naturel) avec TensorFlow ou PyTorch.

### Formations prévues

| Formation | Statut |
|-----------|--------|
| Deep Learning Specialization (Coursera) | En veille |
| TensorFlow Developer Certificate | Prévu |


`,$r=`---
name: TypeScript
slug: ts
published: true
category: pro-lang
color: blue
logo: TypeScript
---

::toc

# TypeScript : JavaScript typé pour les projets sérieux

## 📌 Définition et contexte professionnel

**TypeScript** est un superset de JavaScript développé par Microsoft qui ajoute le **typage statique**. Tout code JavaScript valide est du TypeScript valide, mais TypeScript permet de détecter les erreurs à la compilation plutôt qu'à l'exécution.

L'adoption de TypeScript dans l'industrie :

- **Standard de facto** : adopté par Angular, Vue 3, Svelte, Next.js
- **Sécurité** : détection d'erreurs avant l'exécution
- **Maintenabilité** : code auto-documenté grâce aux types
- **Refactoring** : modifications sûre grâce à l'analyse statique
- **IntelliSense** : auto-complétion puissante dans les IDE

Selon l'enquête State of JS 2024, **TypeScript a un taux de satisfaction de 93%** et est utilisé par la majorité des projets professionnels.

---

## 🔍 Mes réalisations concrètes

### Ce portfolio : 100% TypeScript

Ce portfolio est entièrement écrit en **TypeScript** avec SvelteKit.

**Ma contribution** :
- Définition des **interfaces et types** pour le contenu (projets, skills, blog)
- Utilisation des **generics** pour les composants réutilisables
- **Typage strict** (\`strict: true\`) pour une sécurité maximale
- Types utilitaires : \`Pick\`, \`Omit\`, \`Partial\`, \`Record\`

### TAP : API TypeScript

Dans le projet **TAP**, j'ai contribué au frontend TypeScript.

**Ma contribution** :
- **Types pour l'API** : interfaces correspondant aux DTOs Java
- Validation avec **Zod** pour les données externes
- **Type guards** pour le narrowing de types

→ [Voir le projet TAP](/projects/tap)

---

## 🎯 Autocritique et positionnement

### Niveau de maîtrise

| Domaine | Niveau |
|---------|--------|
| Types de base (string, number, etc.) | ★★★★★ Expert |
| Interfaces et types | ★★★★★ Expert |
| Generics | ★★★★☆ Avancé |
| Types utilitaires | ★★★★☆ Avancé |
| Types conditionnels / infer | ★★★☆☆ Intermédiaire |

### Marge de progression

- **Types conditionnels avancés** : \`infer\`, types récursifs
- **Declaration files** : écriture de fichiers \`.d.ts\` pour des libraries
- **Template literal types** : types basés sur des chaînes

### Vitesse d'acquisition

Venant de Java, l'adoption de TypeScript a été **naturelle**. Le système de types de TypeScript est plus flexible et expressif que celui de Java.

### Place dans mon profil

TypeScript est mon **langage principal pour le frontend**. Je ne fais plus de JavaScript pur pour les projets sérieux. Couplé à Svelte, il forme ma stack frontend de prédilection.

### Conseils tirés de mon expérience

> *"Activez le mode strict dès le début de votre projet. C'est plus difficile de l'activer après coup."*

- **Commencer avec \`strict: true\`** même si c'est plus exigeant
- **Éviter \`any\`** : si vous l'utilisez, c'est que vous perdez les bénéfices de TS
- Apprendre les **types utilitaires** built-in : ils couvrent 90% des besoins

---

## 📈 Évolution et perspectives

### Objectif à moyen terme

Maîtriser les **types conditionnels avancés** et contribuer à des définitions de types pour des libraries.


`,Xr=`---
name: Unity
slug: unity
published: true
category: devtools
color: gray
logo: Unity
---

::toc

# Unity : le moteur de jeu universel

## 📌 Définition et contexte professionnel

**Unity** est un moteur de jeu **multiplateforme** créé en 2005, devenu l'un des plus utilisés au monde. Au-delà du gaming, Unity s'étend à la **VR/AR**, l'**architecture**, l'**automobile** et la **simulation**.

L'importance d'Unity dans l'industrie :

- **Cross-platform** : un build pour PC, consoles, mobile, VR, web
- **Accessibilité** : courbe d'apprentissage douce, documentation riche
- **Asset Store** : écosystème massif de ressources prêtes à l'emploi
- **VR/AR leader** : intégration native d'OpenXR, ARFoundation
- **Industrie** : utilisé pour la visualisation architecturale, l'automobile, la santé

Selon Unity, **plus de 50% des jeux mobiles** sont créés avec leur moteur.

---

## 🔍 Mes réalisations concrètes

### InVR : expérience VR d'initiation

Le projet **InVR** a été entièrement développé avec Unity et le XR Interaction Toolkit.

**Ma contribution** :
- Conception des **environnements 3D** avec les outils Unity
- Programmation des **interactions VR** en C# avec le XR Interaction Toolkit
- Intégration d'**OpenXR** pour la compatibilité multi-casques
- Optimisation pour le **Quest 2 standalone** (90 FPS, limité GPU)
- Build et déploiement sur **Meta Quest 2**

**Résultat** : expérience VR fluide et accessible, utilisée pour initier des novices à la réalité virtuelle.

→ [Voir le projet InVR](/projects/invr)

---

## 🎯 Autocritique et positionnement

### Niveau de maîtrise

| Domaine | Niveau |
|---------|--------|
| Interface Unity / Scene | ★★★★☆ Avancé |
| Scripting C# | ★★★★☆ Avancé |
| VR / XR Interaction Toolkit | ★★★☆☆ Intermédiaire |
| Shaders / Rendering | ★★☆☆☆ Débutant |
| Optimisation | ★★★☆☆ Intermédiaire |

### Marge de progression

- **Shaders** : Shader Graph, HLSL pour des effets visuels custom
- **Networking** : multijoueur avec Netcode for GameObjects
- **DOTS** : performance avec le nouveau système ECS d'Unity
- **AR** : ARFoundation pour la réalité augmentée

### Place dans mon profil

Unity est ma **compétence principale en développement 3D/VR**. Bien que mon profil soit orienté web/backend, Unity me permet d'aborder des projets immersifs et interactifs.

### Conseils tirés de mon expérience

> *"Unity est accessible mais profond. Commencez par des tutoriels officiels avant de vous lancer dans un projet ambitieux."*

- Apprendre les **bases du C#** avant de toucher à Unity
- Utiliser le **Profiler** pour détecter les problèmes de performance
- **Version Control** : configurer Git avec le bon .gitignore Unity

---

## 📈 Évolution et perspectives

### Objectif à moyen terme

Approfondir le développement VR/AR avec Unity et explorer les applications non-gaming (visualisation, formation).


`,Zr=`---
name: Velocity
slug: velocity
published: true
category: devtools
color: cyan
logo: Velocity
---

Proxy Minecraft moderne et performant. Gestion de réseaux de serveurs avec API plugin avancée.
`,eo=`---
name: VS Code
slug: vscode
published: true
category: devtools
color: blue
logo: VSCode
---

::toc

# VS Code : l'éditeur de code moderne

## 📌 Définition et contexte professionnel

**Visual Studio Code** (VS Code) est un éditeur de code **open-source** développé par Microsoft, lancé en 2015. Il est devenu l'éditeur le plus utilisé au monde, avec plus de **70% de part de marché** parmi les développeurs.

Les raisons de ce succès :

- **Légèreté** : démarre en quelques secondes, contrairement aux IDE lourds
- **Extensibilité** : marketplace avec +50 000 extensions
- **IntelliSense** : auto-complétion intelligente pour tous les langages
- **Terminal intégré** : workflow complet sans quitter l'éditeur
- **Git intégré** : gestion de version visuelle
- **Remote Development** : développement en SSH, conteneurs, WSL
- **GitHub Copilot** : assistance IA directement intégrée

VS Code a révolutionné le développement en offrant une expérience **proche d'un IDE** dans un éditeur **léger et rapide**.

---

## 🔍 Mes réalisations concrètes

### Mon environnement quotidien

VS Code est mon **éditeur principal** depuis 2019. Je l'utilise pour tous mes projets, quel que soit le langage.

**Ma configuration** :
- **Extensions essentielles** : ESLint, Prettier, GitLens, Svelte, Java Extension Pack
- **Thème** : One Dark Pro avec des polices ligaturées (JetBrains Mono)
- **Raccourcis personnalisés** : navigation rapide, multi-curseurs
- **Settings Sync** : configuration synchronisée entre mes machines

### Utilisation avancée

- **Remote SSH** : développement sur serveurs distants au Synchrotron
- **Dev Containers** : environnements de développement Dockerisés
- **Tasks** : automatisation des builds et tests
- **Debugging** : points d'arrêt, watch expressions pour Java, TypeScript, Python

---

## 🎯 Autocritique et positionnement

### Niveau de maîtrise

| Domaine | Niveau |
|---------|--------|
| Navigation et édition | ★★★★★ Expert |
| Extensions et config | ★★★★★ Expert |
| Debugging multi-langages | ★★★★☆ Avancé |
| Remote Development | ★★★★☆ Avancé |
| Développement d'extensions | ★★☆☆☆ Débutant |

### Marge de progression

- **Développement d'extensions** : créer mes propres extensions VS Code
- **Snippets avancés** : templates de code personnalisés
- **Automation** : tasks.json et launch.json avancés

### Place dans mon profil

VS Code est mon **outil de travail principal**, maîtrisé en profondeur. Un développeur efficace doit maîtriser son éditeur, et j'ai investi du temps pour optimiser mon workflow.

### Vitesse d'acquisition

J'ai migré vers VS Code depuis Atom et Sublime Text. L'adaptation a été **immédiate** grâce à l'UX intuitive, puis j'ai approfondi progressivement.

### Conseils tirés de mon expérience

> *"Investissez du temps pour apprendre les raccourcis clavier de VS Code. Cela multiplie votre productivité."*

- **Ctrl+P** : navigation rapide entre fichiers
- **Ctrl+Shift+P** : palette de commandes (indispensable)
- **Multi-curseurs** (Ctrl+D) : édition simultanée
- Activer **Settings Sync** pour ne jamais perdre sa config

---

## 📈 Évolution et perspectives

### Objectif à moyen terme

Explorer le développement d'**extensions VS Code** et approfondir l'utilisation de **GitHub Copilot**.


`,no=`---
name: Vue.js
slug: vuejs
published: true
category: framework
color: green
logo: VueJs
---

Framework JavaScript progressif pour construire des interfaces utilisateur réactives.
`,to=`---
name: WebStorm
slug: webstorm
published: true
category: devtools
color: cyan
logo: WebStorm
---

IDE JetBrains pour le développement JavaScript et TypeScript. Support React, Vue, Angular et Node.js.
`,io=`---
name: Microsoft Word
slug: word
published: true
category: devtools
color: blue
logo: Word
---

Traitement de texte pour documentation technique, rapports et rédaction professionnelle.
`,so=`---
name: Développeur Web
slug: stagiaire-aghb
published: true
shortDescription: Stage d'un mois dédié à la transformation digitale d'une entreprise du BTP.
company: AGH Bâtiment
type: Développement Web
contract: Stage
location: Île-de-France, France
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

## Mon poste

**Développeur Web** en stage au sein d'une entreprise de rénovation du bâtiment.

| Information | Détail |
|-------------|--------|
| **Période** | Août 2022 (1 mois) |
| **Statut** | Stagiaire |
| **Responsabilité** | Développement web et identité visuelle |
| **Localisation** | Île-de-France |

---

## L'entreprise

**AGH Bâtiment** est une entreprise spécialisée dans les **travaux de rénovation et de construction** en Île-de-France. Entreprise à taille humaine, elle souhaitait moderniser son organisation interne et développer sa présence en ligne.

**Ma vision :** Ce stage m'a permis de découvrir le monde de l'entreprise et de comprendre comment le **numérique peut transformer une PME traditionnelle**. J'ai pu voir l'impact concret de mes développements sur le quotidien de l'équipe.

---

## Mon positionnement

En tant que seul développeur, j'ai eu une **responsabilité complète** sur les projets confiés. J'ai travaillé en autonomie tout en échangeant régulièrement avec le dirigeant pour valider les orientations.

---

## Mes missions principales

### 🌐 Création du site web vitrine

- Conception et développement d'un **site web responsive**
- Mise en valeur des services et réalisations de l'entreprise
- Stack : **HTML, CSS, JavaScript**

### 🎨 Création de l'identité visuelle

- Conception du **logo vectoriel** de l'entreprise (SVG)
- Design adapté à tous les supports (web, print, véhicules)

### 🗂️ Outils de gestion interne

- Création d'**interfaces simples** pour la gestion administrative
- Organisation des documents numériques

---

## Compétences développées

| Domaine | Compétences |
|---------|-------------|
| **Frontend** | HTML, CSS, JavaScript |
| **Design** | Création de logo, UX/UI basique |
| **Transversal** | Autonomie, relation client, gestion de projet |
`,ro=`---
name: Développeur Full-Stack
slug: fullstack-synchrotron-soleil
published: true
shortDescription: Alternant développeur full-stack au sein du service informatique d'un grand équipement scientifique français.
company: Synchrotron SOLEIL
type: Développement Full-Stack
contract: Alternance
location: Saint-Aubin (91), France
color: orange
logo: Soleil
period:
  from: 2023-09-01
skills:
  - java
  - spring
  - reactjs
  - docker
  - ci-cd
  - linux
  - postgres
  - git
  - jira
links:
  - label: Site officiel
    to: https://www.synchrotron-soleil.fr/
    newTab: true
---

## Mon poste

**Développeur Full-Stack** en alternance au sein du **Service Informatique et Électronique (SIE)** du Synchrotron SOLEIL.

| Information | Détail |
|-------------|--------|
| **Période** | Septembre 2023 → Présent (en cours) |
| **Statut** | Alternant (contrat d'apprentissage) |
| **Responsabilité** | Développeur autonome sur projets internes |
| **Localisation** | Saint-Aubin (91), Île-de-France |

---

## L'entreprise

Le **Synchrotron SOLEIL** est un **Très Grand Équipement (TGE)** scientifique français, situé sur le plateau de Saclay. C'est un accélérateur de particules qui produit un rayonnement synchrotron extrêmement brillant, utilisé pour analyser la matière à l'échelle atomique.

**Quelques chiffres :**
- **~500 collaborateurs** permanents
- **29 lignes de lumière** en exploitation
- **~6 000 utilisateurs** scientifiques par an
- Domaines : chimie, biologie, matériaux, patrimoine, environnement, santé

**Ma vision :** Travailler au Synchrotron SOLEIL, c'est évoluer dans un environnement où **la rigueur scientifique rencontre l'innovation informatique**. Le service informatique développe et maintient des applications critiques pour la gestion des expériences, des utilisateurs et des données. C'est un contexte exigeant mais passionnant.

---

## Mon positionnement

Au sein du SIE, je suis rattaché à l'équipe **développement logiciel**. Je travaille en autonomie sur des projets d'amélioration et de création d'outils internes, tout en participant aux rituels Agile de l'équipe (sprints bi-hebdomadaires, daily meetings).

**Mes interlocuteurs :**
- Mon tuteur (architecte logiciel senior)
- Les développeurs de l'équipe
- Les utilisateurs métier (scientifiques, administratifs)
- L'équipe infrastructure pour les déploiements

---

## Mes missions principales

### 🚀 Développement d'applications métier

- Conception et développement de **SUN Auto** (SOLEIL Unified Notification Auto), un système de gestion du cycle de vie applicatif
- Création de **TAP** (Test Automation Platform), une plateforme de centralisation des tests automatisés
- Stack : **Java 17+, Spring Boot 3, React.js, PostgreSQL**

### 🧪 Automatisation et qualité

- Mise en place de **tests automatisés** (JUnit, Playwright, Selenium)
- Amélioration des **pipelines CI/CD** GitLab
- Intégration de **rapports Allure** pour la visualisation des résultats

### 🐧 Administration système

- Gestion de **serveurs Linux** (Debian, Red Hat)
- **Conteneurisation** avec Docker et Docker Compose
- Déploiement et maintenance d'applications en production

---

## Compétences développées

Cette alternance m'a permis de développer et renforcer de nombreuses compétences :

| Domaine | Compétences |
|---------|-------------|
| **Backend** | Java, Spring Boot, API REST, JPA/Hibernate |
| **Frontend** | React.js, TypeScript |
| **DevOps** | Docker, GitLab CI/CD, Linux |
| **Base de données** | PostgreSQL, Redis |
| **Méthodologie** | Agile/Scrum, Jira, Git |
| **Transversal** | Autonomie, communication technique |

---

## Réalisations rattachées

Voici les projets majeurs que j'ai réalisés dans le cadre de cette alternance :

→ [SUN Auto - Gestion du cycle de vie applicatif](/projects/sun-auto)

→ [TAP - Plateforme de tests automatisés](/projects/tap)
`,oo=`---
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

## :i[education] ESIEA – Master en ingénierie informatique

**:i[location] Localisation :** Paris / Ivry-sur-Seine, France  
**:i[calendar] Période :** 2024 – 2026  
**:i[certificate] Niveau :** Bac+5 – RNCP Niveau 7 (31678)  
**:i[link] Site :** [https://www.esiea.fr](https://www.esiea.fr)

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
`,ao=`---
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

## :i[laptop] InTech – Bachelor en ingénierie informatique

**:i[location] Localisation :** Paris, France  
**:i[calendar] Période :** 2021 – 2023  
**:i[certificate] Niveau :** Bac+3  
**:i[link] Site :** [https://intechinfo.fr](https://intechinfo.fr)

InTech est une école orientée projets, spécialisée dans les technologies logicielles. Ce Bachelor m'a permis de développer mes compétences en développement web et mobile via des projets concrets et du travail en équipe.

**Compétences clés :**
- Full-stack JavaScript / TypeScript
- Front-end (React, Svelte)
- Back-end (Node.js)
- Bases de données, intégration continue, UX/UI
`,lo=`---
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

## :i[chemistry] Lycée Pierre Mendès France – Baccalauréat général

**:i[location] Localisation :** Savigny-le-Temple, France  
**:i[calendar] Période :** 2017 – 2020  
**:i[certificate] Spécialités :** Sciences de la Vie et de la Terre (SVT), Sciences Économiques et Sociales (SES)  
**:i[link] Site :** [https://www.lyceepmf-savigny77.fr](https://www.lyceepmf-savigny77.fr)

Obtention du baccalauréat général avec un profil pluridisciplinaire mêlant sciences naturelles, économie et méthodologie. Ce socle m'a donné de la rigueur, une bonne culture scientifique, et l'envie de créer.

**Points forts :**
- Projet personnel encadré (TPE)
- Culture scientifique et raisonnement critique
- Sensibilisation à l'économie et à la société
`,uo=`---
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

**Développeur full-stack** en alternance au **Synchrotron SOLEIL**, actuellement en Master ingénierie informatique à l'**ESIEA**. Passionné par la création de solutions logicielles robustes et l'exploration de nouvelles technologies.

---

## :i[target] Mon projet professionnel

L'objectif à moyen terme : devenir **ingénieur logiciel** spécialisé dans les **systèmes distribués** et le **DevOps**. Le monde du développement évolue constamment, et la capacité à concevoir des architectures scalables et maintenables représente un enjeu majeur pour les entreprises.

L'alternance au Synchrotron SOLEIL permet de travailler sur des **projets d'envergure** : automatisation de processus, développement d'applications internes, mise en place de pipelines CI/CD. Ces expériences forgent une vision complète du cycle de vie logiciel, de la conception au déploiement.

À plus long terme, l'ambition est de contribuer à des **projets open source** et potentiellement de créer une **startup tech** dans le domaine de l'automatisation ou des outils pour développeurs.

---

## :i[idea] Mes valeurs

:::values-grid{cols=2}
::value[Excellence technique]{icon=i-carbon-flash color=blue}
La qualité du code n'est pas négociable. Un code propre, testé et documenté facilite la maintenance et la collaboration. Cette exigence s'applique aussi bien aux projets professionnels qu'aux projets personnels.
::

::value[Partage des connaissances]{icon=i-carbon-collaborate color=green}
Le développement informatique avance grâce à la communauté. Contribuer à des projets open source, rédiger des articles techniques, aider des collègues : ces actions enrichissent l'écosystème.
::

::value[Curiosité et apprentissage]{icon=i-carbon-search color=purple}
Les technologies évoluent rapidement. Rester à jour nécessite une veille constante et une volonté d'expérimenter. Chaque nouveau framework représente une opportunité d'apprentissage.
::

::value[Pragmatisme]{icon=i-carbon-target color=orange}
La meilleure solution technique n'est pas toujours la plus sophistiquée. Savoir choisir l'outil adapté au contexte et livrer de la valeur concrète aux utilisateurs reste la priorité.
::
:::

---

## :i[group] Qualités humaines

:::tags{layout=grid}
::tag[Autonomie]{icon=i-carbon-rocket desc=Initiative full="Face à un bug critique en production un vendredi soir, je préfère creuser la doc, tester des hypothèses et trouver la solution plutôt que d'attendre lundi. Cette approche m'a permis de résoudre des incidents majeurs au Synchrotron SOLEIL en dehors des heures de bureau."}
::tag[Rigueur]{icon=i-carbon-checkmark-filled desc=Méthodologie full="Au Synchrotron, une erreur dans le code peut bloquer des expériences scientifiques. J'ai appris à systématiser les tests unitaires, documenter chaque fonction et faire relire mon code. Résultat : zéro régression en 2 ans sur mes projets."}
::tag[Communication]{icon=i-carbon-chat desc=Collaboration full="Expliquer à un chercheur en physique pourquoi son script Python plante sans utiliser de jargon technique, c'est un exercice quotidien. J'ai aussi rédigé des guides utilisateurs et animé des formations internes sur nos outils."}
::tag[Adaptabilité]{icon=i-carbon-renew desc=Flexibilité full="En 3 ans, je suis passé de Python/Django à Flutter, puis TypeScript/SvelteKit, tout en jonglant avec du legacy Java. Chaque nouveau projet est une occasion d'apprendre une techno, pas un obstacle."}
:::

---

## :i[music] Centres d'intérêt

:::tags{layout=grid}
::tag[Piano]{icon=i-carbon-music desc=Musique full="10 ans de pratique, du classique au jazz. Déchiffrer une partition, c'est comme lire du code : il faut comprendre la structure avant de l'exécuter. La persévérance pour maîtriser un morceau difficile, c'est la même que pour debugger un algo récalcitrant."}
::tag[Science-fiction]{icon=i-carbon-book desc=Lecture full="Asimov, Philip K. Dick, Liu Cixin... La SF pose des questions sur la technologie et son impact sur l'humanité. Ça nourrit ma réflexion sur l'éthique du code et l'IA. Côté productivité : Deep Work de Cal Newport a transformé ma façon de travailler."}
::tag[Stratégie]{icon=i-carbon-game-console desc=Gaming full="Factorio m'a appris l'optimisation de flux et la dette technique (oui, même dans un jeu). Civilization enseigne la planification long terme. Ces jeux développent une pensée systémique directement applicable à l'architecture logicielle."}
::tag[Voyages]{icon=i-carbon-earth desc=Découverte full="Japon, Islande, Portugal... Chaque pays a sa façon d'intégrer la tech au quotidien. Observer comment Tokyo gère ses transports ou comment l'Estonie a digitalisé son administration donne des idées pour nos propres projets."}
:::

---

## :i[send-alt] Contact

Pour discuter d'un projet, d'une opportunité professionnelle ou simplement échanger sur des sujets techniques :

:::buttons{align=center}
::button[Email]{href=mailto:contact@alexyvanot.fr icon=i-carbon-email style=default}
::button[LinkedIn]{href=https://linkedin.com/in/vanot icon=i-carbon-logo-linkedin style=default newTab=true}
::button[GitHub]{href=https://github.com/alexyvanot icon=i-carbon-logo-github style=outline newTab=true}
:::

---

> *"Stay hungry, stay foolish."*
> — **Steve Jobs**, Stanford, 2005
`,co=`# Site Configuration
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
`,po=`# Page d'accueil
# Personnalise le contenu de ta page d'accueil ici

title: Accueil

hero:
  description: >
    Développeur Full-Stack passionné, je crée des applications web modernes
    et performantes. Actuellement en alternance au Synchrotron SOLEIL et 
    en Master à l'ESIEA.
`,mo=`# Page CV
# Personnalise le contenu de ta page CV ici

title: CV
pdfPath: /pdf/CV_Alexy_Vanot.pdf
downloadLabel: Télécharger
fullscreenLabel: Plein écran
`,go=`# Page Contact
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
`;/*! js-yaml 4.1.1 https://github.com/nodeca/js-yaml @license MIT */function tt(e){return typeof e>"u"||e===null}function fo(e){return typeof e=="object"&&e!==null}function vo(e){return Array.isArray(e)?e:tt(e)?[]:[e]}function ho(e,n){var t,i,s,o;if(n)for(o=Object.keys(n),t=0,i=o.length;t<i;t+=1)s=o[t],e[s]=n[s];return e}function bo(e,n){var t="",i;for(i=0;i<n;i+=1)t+=e;return t}function qo(e){return e===0&&Number.NEGATIVE_INFINITY===1/e}var xo=tt,yo=fo,So=vo,Co=bo,jo=qo,Ao=ho,k={isNothing:xo,isObject:yo,toArray:So,repeat:Co,isNegativeZero:jo,extend:Ao};function it(e,n){var t="",i=e.reason||"(unknown reason)";return e.mark?(e.mark.name&&(t+='in "'+e.mark.name+'" '),t+="("+(e.mark.line+1)+":"+(e.mark.column+1)+")",!n&&e.mark.snippet&&(t+=`

`+e.mark.snippet),i+" "+t):i}function ce(e,n){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=n,this.message=it(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}ce.prototype=Object.create(Error.prototype);ce.prototype.constructor=ce;ce.prototype.toString=function(n){return this.name+": "+it(this,n)};var w=ce;function Re(e,n,t,i,s){var o="",r="",a=Math.floor(s/2)-1;return i-n>a&&(o=" ... ",n=i-a+o.length),t-i>a&&(r=" ...",t=i+a-r.length),{str:o+e.slice(n,t).replace(/\t/g,"→")+r,pos:i-n+o.length}}function Oe(e,n){return k.repeat(" ",n-e.length)+e}function Lo(e,n){if(n=Object.create(n||null),!e.buffer)return null;n.maxLength||(n.maxLength=79),typeof n.indent!="number"&&(n.indent=1),typeof n.linesBefore!="number"&&(n.linesBefore=3),typeof n.linesAfter!="number"&&(n.linesAfter=2);for(var t=/\r?\n|\r|\0/g,i=[0],s=[],o,r=-1;o=t.exec(e.buffer);)s.push(o.index),i.push(o.index+o[0].length),e.position<=o.index&&r<0&&(r=i.length-2);r<0&&(r=i.length-1);var a="",l,u,d=Math.min(e.line+n.linesAfter,s.length).toString().length,p=n.maxLength-(n.indent+d+3);for(l=1;l<=n.linesBefore&&!(r-l<0);l++)u=Re(e.buffer,i[r-l],s[r-l],e.position-(i[r]-i[r-l]),p),a=k.repeat(" ",n.indent)+Oe((e.line-l+1).toString(),d)+" | "+u.str+`
`+a;for(u=Re(e.buffer,i[r],s[r],e.position,p),a+=k.repeat(" ",n.indent)+Oe((e.line+1).toString(),d)+" | "+u.str+`
`,a+=k.repeat("-",n.indent+d+3+u.pos)+`^
`,l=1;l<=n.linesAfter&&!(r+l>=s.length);l++)u=Re(e.buffer,i[r+l],s[r+l],e.position-(i[r]-i[r+l]),p),a+=k.repeat(" ",n.indent)+Oe((e.line+l+1).toString(),d)+" | "+u.str+`
`;return a.replace(/\n$/,"")}var Po=Lo,ko=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],_o=["scalar","sequence","mapping"];function To(e){var n={};return e!==null&&Object.keys(e).forEach(function(t){e[t].forEach(function(i){n[String(i)]=t})}),n}function wo(e,n){if(n=n||{},Object.keys(n).forEach(function(t){if(ko.indexOf(t)===-1)throw new w('Unknown option "'+t+'" is met in definition of "'+e+'" YAML type.')}),this.options=n,this.tag=e,this.kind=n.kind||null,this.resolve=n.resolve||function(){return!0},this.construct=n.construct||function(t){return t},this.instanceOf=n.instanceOf||null,this.predicate=n.predicate||null,this.represent=n.represent||null,this.representName=n.representName||null,this.defaultStyle=n.defaultStyle||null,this.multi=n.multi||!1,this.styleAliases=To(n.styleAliases||null),_o.indexOf(this.kind)===-1)throw new w('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')}var _=wo;function Pn(e,n){var t=[];return e[n].forEach(function(i){var s=t.length;t.forEach(function(o,r){o.tag===i.tag&&o.kind===i.kind&&o.multi===i.multi&&(s=r)}),t[s]=i}),t}function Io(){var e={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},n,t;function i(s){s.multi?(e.multi[s.kind].push(s),e.multi.fallback.push(s)):e[s.kind][s.tag]=e.fallback[s.tag]=s}for(n=0,t=arguments.length;n<t;n+=1)arguments[n].forEach(i);return e}function Be(e){return this.extend(e)}Be.prototype.extend=function(n){var t=[],i=[];if(n instanceof _)i.push(n);else if(Array.isArray(n))i=i.concat(n);else if(n&&(Array.isArray(n.implicit)||Array.isArray(n.explicit)))n.implicit&&(t=t.concat(n.implicit)),n.explicit&&(i=i.concat(n.explicit));else throw new w("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");t.forEach(function(o){if(!(o instanceof _))throw new w("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(o.loadKind&&o.loadKind!=="scalar")throw new w("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(o.multi)throw new w("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),i.forEach(function(o){if(!(o instanceof _))throw new w("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var s=Object.create(Be.prototype);return s.implicit=(this.implicit||[]).concat(t),s.explicit=(this.explicit||[]).concat(i),s.compiledImplicit=Pn(s,"implicit"),s.compiledExplicit=Pn(s,"explicit"),s.compiledTypeMap=Io(s.compiledImplicit,s.compiledExplicit),s};var st=Be,rt=new _("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return e!==null?e:""}}),ot=new _("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return e!==null?e:[]}}),at=new _("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return e!==null?e:{}}}),lt=new st({explicit:[rt,ot,at]});function Do(e){if(e===null)return!0;var n=e.length;return n===1&&e==="~"||n===4&&(e==="null"||e==="Null"||e==="NULL")}function Mo(){return null}function Eo(e){return e===null}var ut=new _("tag:yaml.org,2002:null",{kind:"scalar",resolve:Do,construct:Mo,predicate:Eo,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function Ro(e){if(e===null)return!1;var n=e.length;return n===4&&(e==="true"||e==="True"||e==="TRUE")||n===5&&(e==="false"||e==="False"||e==="FALSE")}function Oo(e){return e==="true"||e==="True"||e==="TRUE"}function No(e){return Object.prototype.toString.call(e)==="[object Boolean]"}var ct=new _("tag:yaml.org,2002:bool",{kind:"scalar",resolve:Ro,construct:Oo,predicate:No,represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"});function Fo(e){return 48<=e&&e<=57||65<=e&&e<=70||97<=e&&e<=102}function Uo(e){return 48<=e&&e<=55}function Vo(e){return 48<=e&&e<=57}function Jo(e){if(e===null)return!1;var n=e.length,t=0,i=!1,s;if(!n)return!1;if(s=e[t],(s==="-"||s==="+")&&(s=e[++t]),s==="0"){if(t+1===n)return!0;if(s=e[++t],s==="b"){for(t++;t<n;t++)if(s=e[t],s!=="_"){if(s!=="0"&&s!=="1")return!1;i=!0}return i&&s!=="_"}if(s==="x"){for(t++;t<n;t++)if(s=e[t],s!=="_"){if(!Fo(e.charCodeAt(t)))return!1;i=!0}return i&&s!=="_"}if(s==="o"){for(t++;t<n;t++)if(s=e[t],s!=="_"){if(!Uo(e.charCodeAt(t)))return!1;i=!0}return i&&s!=="_"}}if(s==="_")return!1;for(;t<n;t++)if(s=e[t],s!=="_"){if(!Vo(e.charCodeAt(t)))return!1;i=!0}return!(!i||s==="_")}function Bo(e){var n=e,t=1,i;if(n.indexOf("_")!==-1&&(n=n.replace(/_/g,"")),i=n[0],(i==="-"||i==="+")&&(i==="-"&&(t=-1),n=n.slice(1),i=n[0]),n==="0")return 0;if(i==="0"){if(n[1]==="b")return t*parseInt(n.slice(2),2);if(n[1]==="x")return t*parseInt(n.slice(2),16);if(n[1]==="o")return t*parseInt(n.slice(2),8)}return t*parseInt(n,10)}function Go(e){return Object.prototype.toString.call(e)==="[object Number]"&&e%1===0&&!k.isNegativeZero(e)}var pt=new _("tag:yaml.org,2002:int",{kind:"scalar",resolve:Jo,construct:Bo,predicate:Go,represent:{binary:function(e){return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){return e>=0?"0o"+e.toString(8):"-0o"+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),zo=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function Ho(e){return!(e===null||!zo.test(e)||e[e.length-1]==="_")}function Qo(e){var n,t;return n=e.replace(/_/g,"").toLowerCase(),t=n[0]==="-"?-1:1,"+-".indexOf(n[0])>=0&&(n=n.slice(1)),n===".inf"?t===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:n===".nan"?NaN:t*parseFloat(n,10)}var Ko=/^[-+]?[0-9]+e/;function Wo(e,n){var t;if(isNaN(e))switch(n){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(n){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(n){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(k.isNegativeZero(e))return"-0.0";return t=e.toString(10),Ko.test(t)?t.replace("e",".e"):t}function Yo(e){return Object.prototype.toString.call(e)==="[object Number]"&&(e%1!==0||k.isNegativeZero(e))}var dt=new _("tag:yaml.org,2002:float",{kind:"scalar",resolve:Ho,construct:Qo,predicate:Yo,represent:Wo,defaultStyle:"lowercase"}),mt=lt.extend({implicit:[ut,ct,pt,dt]}),gt=mt,ft=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),vt=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function $o(e){return e===null?!1:ft.exec(e)!==null||vt.exec(e)!==null}function Xo(e){var n,t,i,s,o,r,a,l=0,u=null,d,p,m;if(n=ft.exec(e),n===null&&(n=vt.exec(e)),n===null)throw new Error("Date resolve error");if(t=+n[1],i=+n[2]-1,s=+n[3],!n[4])return new Date(Date.UTC(t,i,s));if(o=+n[4],r=+n[5],a=+n[6],n[7]){for(l=n[7].slice(0,3);l.length<3;)l+="0";l=+l}return n[9]&&(d=+n[10],p=+(n[11]||0),u=(d*60+p)*6e4,n[9]==="-"&&(u=-u)),m=new Date(Date.UTC(t,i,s,o,r,a,l)),u&&m.setTime(m.getTime()-u),m}function Zo(e){return e.toISOString()}var ht=new _("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:$o,construct:Xo,instanceOf:Date,represent:Zo});function ea(e){return e==="<<"||e===null}var bt=new _("tag:yaml.org,2002:merge",{kind:"scalar",resolve:ea}),Ze=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function na(e){if(e===null)return!1;var n,t,i=0,s=e.length,o=Ze;for(t=0;t<s;t++)if(n=o.indexOf(e.charAt(t)),!(n>64)){if(n<0)return!1;i+=6}return i%8===0}function ta(e){var n,t,i=e.replace(/[\r\n=]/g,""),s=i.length,o=Ze,r=0,a=[];for(n=0;n<s;n++)n%4===0&&n&&(a.push(r>>16&255),a.push(r>>8&255),a.push(r&255)),r=r<<6|o.indexOf(i.charAt(n));return t=s%4*6,t===0?(a.push(r>>16&255),a.push(r>>8&255),a.push(r&255)):t===18?(a.push(r>>10&255),a.push(r>>2&255)):t===12&&a.push(r>>4&255),new Uint8Array(a)}function ia(e){var n="",t=0,i,s,o=e.length,r=Ze;for(i=0;i<o;i++)i%3===0&&i&&(n+=r[t>>18&63],n+=r[t>>12&63],n+=r[t>>6&63],n+=r[t&63]),t=(t<<8)+e[i];return s=o%3,s===0?(n+=r[t>>18&63],n+=r[t>>12&63],n+=r[t>>6&63],n+=r[t&63]):s===2?(n+=r[t>>10&63],n+=r[t>>4&63],n+=r[t<<2&63],n+=r[64]):s===1&&(n+=r[t>>2&63],n+=r[t<<4&63],n+=r[64],n+=r[64]),n}function sa(e){return Object.prototype.toString.call(e)==="[object Uint8Array]"}var qt=new _("tag:yaml.org,2002:binary",{kind:"scalar",resolve:na,construct:ta,predicate:sa,represent:ia}),ra=Object.prototype.hasOwnProperty,oa=Object.prototype.toString;function aa(e){if(e===null)return!0;var n=[],t,i,s,o,r,a=e;for(t=0,i=a.length;t<i;t+=1){if(s=a[t],r=!1,oa.call(s)!=="[object Object]")return!1;for(o in s)if(ra.call(s,o))if(!r)r=!0;else return!1;if(!r)return!1;if(n.indexOf(o)===-1)n.push(o);else return!1}return!0}function la(e){return e!==null?e:[]}var xt=new _("tag:yaml.org,2002:omap",{kind:"sequence",resolve:aa,construct:la}),ua=Object.prototype.toString;function ca(e){if(e===null)return!0;var n,t,i,s,o,r=e;for(o=new Array(r.length),n=0,t=r.length;n<t;n+=1){if(i=r[n],ua.call(i)!=="[object Object]"||(s=Object.keys(i),s.length!==1))return!1;o[n]=[s[0],i[s[0]]]}return!0}function pa(e){if(e===null)return[];var n,t,i,s,o,r=e;for(o=new Array(r.length),n=0,t=r.length;n<t;n+=1)i=r[n],s=Object.keys(i),o[n]=[s[0],i[s[0]]];return o}var yt=new _("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:ca,construct:pa}),da=Object.prototype.hasOwnProperty;function ma(e){if(e===null)return!0;var n,t=e;for(n in t)if(da.call(t,n)&&t[n]!==null)return!1;return!0}function ga(e){return e!==null?e:{}}var St=new _("tag:yaml.org,2002:set",{kind:"mapping",resolve:ma,construct:ga}),en=gt.extend({implicit:[ht,bt],explicit:[qt,xt,yt,St]}),G=Object.prototype.hasOwnProperty,ye=1,Ct=2,jt=3,Se=4,Ne=1,fa=2,kn=3,va=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,ha=/[\x85\u2028\u2029]/,ba=/[,\[\]\{\}]/,At=/^(?:!|!!|![a-z\-]+!)$/i,Lt=/^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;function _n(e){return Object.prototype.toString.call(e)}function N(e){return e===10||e===13}function z(e){return e===9||e===32}function D(e){return e===9||e===32||e===10||e===13}function $(e){return e===44||e===91||e===93||e===123||e===125}function qa(e){var n;return 48<=e&&e<=57?e-48:(n=e|32,97<=n&&n<=102?n-97+10:-1)}function xa(e){return e===120?2:e===117?4:e===85?8:0}function ya(e){return 48<=e&&e<=57?e-48:-1}function Tn(e){return e===48?"\0":e===97?"\x07":e===98?"\b":e===116||e===9?"	":e===110?`
`:e===118?"\v":e===102?"\f":e===114?"\r":e===101?"\x1B":e===32?" ":e===34?'"':e===47?"/":e===92?"\\":e===78?"":e===95?" ":e===76?"\u2028":e===80?"\u2029":""}function Sa(e){return e<=65535?String.fromCharCode(e):String.fromCharCode((e-65536>>10)+55296,(e-65536&1023)+56320)}function Pt(e,n,t){n==="__proto__"?Object.defineProperty(e,n,{configurable:!0,enumerable:!0,writable:!0,value:t}):e[n]=t}var kt=new Array(256),_t=new Array(256);for(var K=0;K<256;K++)kt[K]=Tn(K)?1:0,_t[K]=Tn(K);function Ca(e,n){this.input=e,this.filename=n.filename||null,this.schema=n.schema||en,this.onWarning=n.onWarning||null,this.legacy=n.legacy||!1,this.json=n.json||!1,this.listener=n.listener||null,this.implicitTypes=this.schema.compiledImplicit,this.typeMap=this.schema.compiledTypeMap,this.length=e.length,this.position=0,this.line=0,this.lineStart=0,this.lineIndent=0,this.firstTabInLine=-1,this.documents=[]}function Tt(e,n){var t={name:e.filename,buffer:e.input.slice(0,-1),position:e.position,line:e.line,column:e.position-e.lineStart};return t.snippet=Po(t),new w(n,t)}function v(e,n){throw Tt(e,n)}function Ce(e,n){e.onWarning&&e.onWarning.call(null,Tt(e,n))}var wn={YAML:function(n,t,i){var s,o,r;n.version!==null&&v(n,"duplication of %YAML directive"),i.length!==1&&v(n,"YAML directive accepts exactly one argument"),s=/^([0-9]+)\.([0-9]+)$/.exec(i[0]),s===null&&v(n,"ill-formed argument of the YAML directive"),o=parseInt(s[1],10),r=parseInt(s[2],10),o!==1&&v(n,"unacceptable YAML version of the document"),n.version=i[0],n.checkLineBreaks=r<2,r!==1&&r!==2&&Ce(n,"unsupported YAML version of the document")},TAG:function(n,t,i){var s,o;i.length!==2&&v(n,"TAG directive accepts exactly two arguments"),s=i[0],o=i[1],At.test(s)||v(n,"ill-formed tag handle (first argument) of the TAG directive"),G.call(n.tagMap,s)&&v(n,'there is a previously declared suffix for "'+s+'" tag handle'),Lt.test(o)||v(n,"ill-formed tag prefix (second argument) of the TAG directive");try{o=decodeURIComponent(o)}catch{v(n,"tag prefix is malformed: "+o)}n.tagMap[s]=o}};function B(e,n,t,i){var s,o,r,a;if(n<t){if(a=e.input.slice(n,t),i)for(s=0,o=a.length;s<o;s+=1)r=a.charCodeAt(s),r===9||32<=r&&r<=1114111||v(e,"expected valid JSON character");else va.test(a)&&v(e,"the stream contains non-printable characters");e.result+=a}}function In(e,n,t,i){var s,o,r,a;for(k.isObject(t)||v(e,"cannot merge mappings; the provided source object is unacceptable"),s=Object.keys(t),r=0,a=s.length;r<a;r+=1)o=s[r],G.call(n,o)||(Pt(n,o,t[o]),i[o]=!0)}function X(e,n,t,i,s,o,r,a,l){var u,d;if(Array.isArray(s))for(s=Array.prototype.slice.call(s),u=0,d=s.length;u<d;u+=1)Array.isArray(s[u])&&v(e,"nested arrays are not supported inside keys"),typeof s=="object"&&_n(s[u])==="[object Object]"&&(s[u]="[object Object]");if(typeof s=="object"&&_n(s)==="[object Object]"&&(s="[object Object]"),s=String(s),n===null&&(n={}),i==="tag:yaml.org,2002:merge")if(Array.isArray(o))for(u=0,d=o.length;u<d;u+=1)In(e,n,o[u],t);else In(e,n,o,t);else!e.json&&!G.call(t,s)&&G.call(n,s)&&(e.line=r||e.line,e.lineStart=a||e.lineStart,e.position=l||e.position,v(e,"duplicated mapping key")),Pt(n,s,o),delete t[s];return n}function nn(e){var n;n=e.input.charCodeAt(e.position),n===10?e.position++:n===13?(e.position++,e.input.charCodeAt(e.position)===10&&e.position++):v(e,"a line break is expected"),e.line+=1,e.lineStart=e.position,e.firstTabInLine=-1}function P(e,n,t){for(var i=0,s=e.input.charCodeAt(e.position);s!==0;){for(;z(s);)s===9&&e.firstTabInLine===-1&&(e.firstTabInLine=e.position),s=e.input.charCodeAt(++e.position);if(n&&s===35)do s=e.input.charCodeAt(++e.position);while(s!==10&&s!==13&&s!==0);if(N(s))for(nn(e),s=e.input.charCodeAt(e.position),i++,e.lineIndent=0;s===32;)e.lineIndent++,s=e.input.charCodeAt(++e.position);else break}return t!==-1&&i!==0&&e.lineIndent<t&&Ce(e,"deficient indentation"),i}function Le(e){var n=e.position,t;return t=e.input.charCodeAt(n),!!((t===45||t===46)&&t===e.input.charCodeAt(n+1)&&t===e.input.charCodeAt(n+2)&&(n+=3,t=e.input.charCodeAt(n),t===0||D(t)))}function tn(e,n){n===1?e.result+=" ":n>1&&(e.result+=k.repeat(`
`,n-1))}function ja(e,n,t){var i,s,o,r,a,l,u,d,p=e.kind,m=e.result,f;if(f=e.input.charCodeAt(e.position),D(f)||$(f)||f===35||f===38||f===42||f===33||f===124||f===62||f===39||f===34||f===37||f===64||f===96||(f===63||f===45)&&(s=e.input.charCodeAt(e.position+1),D(s)||t&&$(s)))return!1;for(e.kind="scalar",e.result="",o=r=e.position,a=!1;f!==0;){if(f===58){if(s=e.input.charCodeAt(e.position+1),D(s)||t&&$(s))break}else if(f===35){if(i=e.input.charCodeAt(e.position-1),D(i))break}else{if(e.position===e.lineStart&&Le(e)||t&&$(f))break;if(N(f))if(l=e.line,u=e.lineStart,d=e.lineIndent,P(e,!1,-1),e.lineIndent>=n){a=!0,f=e.input.charCodeAt(e.position);continue}else{e.position=r,e.line=l,e.lineStart=u,e.lineIndent=d;break}}a&&(B(e,o,r,!1),tn(e,e.line-l),o=r=e.position,a=!1),z(f)||(r=e.position+1),f=e.input.charCodeAt(++e.position)}return B(e,o,r,!1),e.result?!0:(e.kind=p,e.result=m,!1)}function Aa(e,n){var t,i,s;if(t=e.input.charCodeAt(e.position),t!==39)return!1;for(e.kind="scalar",e.result="",e.position++,i=s=e.position;(t=e.input.charCodeAt(e.position))!==0;)if(t===39)if(B(e,i,e.position,!0),t=e.input.charCodeAt(++e.position),t===39)i=e.position,e.position++,s=e.position;else return!0;else N(t)?(B(e,i,s,!0),tn(e,P(e,!1,n)),i=s=e.position):e.position===e.lineStart&&Le(e)?v(e,"unexpected end of the document within a single quoted scalar"):(e.position++,s=e.position);v(e,"unexpected end of the stream within a single quoted scalar")}function La(e,n){var t,i,s,o,r,a;if(a=e.input.charCodeAt(e.position),a!==34)return!1;for(e.kind="scalar",e.result="",e.position++,t=i=e.position;(a=e.input.charCodeAt(e.position))!==0;){if(a===34)return B(e,t,e.position,!0),e.position++,!0;if(a===92){if(B(e,t,e.position,!0),a=e.input.charCodeAt(++e.position),N(a))P(e,!1,n);else if(a<256&&kt[a])e.result+=_t[a],e.position++;else if((r=xa(a))>0){for(s=r,o=0;s>0;s--)a=e.input.charCodeAt(++e.position),(r=qa(a))>=0?o=(o<<4)+r:v(e,"expected hexadecimal character");e.result+=Sa(o),e.position++}else v(e,"unknown escape sequence");t=i=e.position}else N(a)?(B(e,t,i,!0),tn(e,P(e,!1,n)),t=i=e.position):e.position===e.lineStart&&Le(e)?v(e,"unexpected end of the document within a double quoted scalar"):(e.position++,i=e.position)}v(e,"unexpected end of the stream within a double quoted scalar")}function Pa(e,n){var t=!0,i,s,o,r=e.tag,a,l=e.anchor,u,d,p,m,f,b=Object.create(null),q,g,h,x;if(x=e.input.charCodeAt(e.position),x===91)d=93,f=!1,a=[];else if(x===123)d=125,f=!0,a={};else return!1;for(e.anchor!==null&&(e.anchorMap[e.anchor]=a),x=e.input.charCodeAt(++e.position);x!==0;){if(P(e,!0,n),x=e.input.charCodeAt(e.position),x===d)return e.position++,e.tag=r,e.anchor=l,e.kind=f?"mapping":"sequence",e.result=a,!0;t?x===44&&v(e,"expected the node content, but found ','"):v(e,"missed comma between flow collection entries"),g=q=h=null,p=m=!1,x===63&&(u=e.input.charCodeAt(e.position+1),D(u)&&(p=m=!0,e.position++,P(e,!0,n))),i=e.line,s=e.lineStart,o=e.position,Z(e,n,ye,!1,!0),g=e.tag,q=e.result,P(e,!0,n),x=e.input.charCodeAt(e.position),(m||e.line===i)&&x===58&&(p=!0,x=e.input.charCodeAt(++e.position),P(e,!0,n),Z(e,n,ye,!1,!0),h=e.result),f?X(e,a,b,g,q,h,i,s,o):p?a.push(X(e,null,b,g,q,h,i,s,o)):a.push(q),P(e,!0,n),x=e.input.charCodeAt(e.position),x===44?(t=!0,x=e.input.charCodeAt(++e.position)):t=!1}v(e,"unexpected end of the stream within a flow collection")}function ka(e,n){var t,i,s=Ne,o=!1,r=!1,a=n,l=0,u=!1,d,p;if(p=e.input.charCodeAt(e.position),p===124)i=!1;else if(p===62)i=!0;else return!1;for(e.kind="scalar",e.result="";p!==0;)if(p=e.input.charCodeAt(++e.position),p===43||p===45)Ne===s?s=p===43?kn:fa:v(e,"repeat of a chomping mode identifier");else if((d=ya(p))>=0)d===0?v(e,"bad explicit indentation width of a block scalar; it cannot be less than one"):r?v(e,"repeat of an indentation width identifier"):(a=n+d-1,r=!0);else break;if(z(p)){do p=e.input.charCodeAt(++e.position);while(z(p));if(p===35)do p=e.input.charCodeAt(++e.position);while(!N(p)&&p!==0)}for(;p!==0;){for(nn(e),e.lineIndent=0,p=e.input.charCodeAt(e.position);(!r||e.lineIndent<a)&&p===32;)e.lineIndent++,p=e.input.charCodeAt(++e.position);if(!r&&e.lineIndent>a&&(a=e.lineIndent),N(p)){l++;continue}if(e.lineIndent<a){s===kn?e.result+=k.repeat(`
`,o?1+l:l):s===Ne&&o&&(e.result+=`
`);break}for(i?z(p)?(u=!0,e.result+=k.repeat(`
`,o?1+l:l)):u?(u=!1,e.result+=k.repeat(`
`,l+1)):l===0?o&&(e.result+=" "):e.result+=k.repeat(`
`,l):e.result+=k.repeat(`
`,o?1+l:l),o=!0,r=!0,l=0,t=e.position;!N(p)&&p!==0;)p=e.input.charCodeAt(++e.position);B(e,t,e.position,!1)}return!0}function Dn(e,n){var t,i=e.tag,s=e.anchor,o=[],r,a=!1,l;if(e.firstTabInLine!==-1)return!1;for(e.anchor!==null&&(e.anchorMap[e.anchor]=o),l=e.input.charCodeAt(e.position);l!==0&&(e.firstTabInLine!==-1&&(e.position=e.firstTabInLine,v(e,"tab characters must not be used in indentation")),!(l!==45||(r=e.input.charCodeAt(e.position+1),!D(r))));){if(a=!0,e.position++,P(e,!0,-1)&&e.lineIndent<=n){o.push(null),l=e.input.charCodeAt(e.position);continue}if(t=e.line,Z(e,n,jt,!1,!0),o.push(e.result),P(e,!0,-1),l=e.input.charCodeAt(e.position),(e.line===t||e.lineIndent>n)&&l!==0)v(e,"bad indentation of a sequence entry");else if(e.lineIndent<n)break}return a?(e.tag=i,e.anchor=s,e.kind="sequence",e.result=o,!0):!1}function _a(e,n,t){var i,s,o,r,a,l,u=e.tag,d=e.anchor,p={},m=Object.create(null),f=null,b=null,q=null,g=!1,h=!1,x;if(e.firstTabInLine!==-1)return!1;for(e.anchor!==null&&(e.anchorMap[e.anchor]=p),x=e.input.charCodeAt(e.position);x!==0;){if(!g&&e.firstTabInLine!==-1&&(e.position=e.firstTabInLine,v(e,"tab characters must not be used in indentation")),i=e.input.charCodeAt(e.position+1),o=e.line,(x===63||x===58)&&D(i))x===63?(g&&(X(e,p,m,f,b,null,r,a,l),f=b=q=null),h=!0,g=!0,s=!0):g?(g=!1,s=!0):v(e,"incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"),e.position+=1,x=i;else{if(r=e.line,a=e.lineStart,l=e.position,!Z(e,t,Ct,!1,!0))break;if(e.line===o){for(x=e.input.charCodeAt(e.position);z(x);)x=e.input.charCodeAt(++e.position);if(x===58)x=e.input.charCodeAt(++e.position),D(x)||v(e,"a whitespace character is expected after the key-value separator within a block mapping"),g&&(X(e,p,m,f,b,null,r,a,l),f=b=q=null),h=!0,g=!1,s=!1,f=e.tag,b=e.result;else if(h)v(e,"can not read an implicit mapping pair; a colon is missed");else return e.tag=u,e.anchor=d,!0}else if(h)v(e,"can not read a block mapping entry; a multiline key may not be an implicit key");else return e.tag=u,e.anchor=d,!0}if((e.line===o||e.lineIndent>n)&&(g&&(r=e.line,a=e.lineStart,l=e.position),Z(e,n,Se,!0,s)&&(g?b=e.result:q=e.result),g||(X(e,p,m,f,b,q,r,a,l),f=b=q=null),P(e,!0,-1),x=e.input.charCodeAt(e.position)),(e.line===o||e.lineIndent>n)&&x!==0)v(e,"bad indentation of a mapping entry");else if(e.lineIndent<n)break}return g&&X(e,p,m,f,b,null,r,a,l),h&&(e.tag=u,e.anchor=d,e.kind="mapping",e.result=p),h}function Ta(e){var n,t=!1,i=!1,s,o,r;if(r=e.input.charCodeAt(e.position),r!==33)return!1;if(e.tag!==null&&v(e,"duplication of a tag property"),r=e.input.charCodeAt(++e.position),r===60?(t=!0,r=e.input.charCodeAt(++e.position)):r===33?(i=!0,s="!!",r=e.input.charCodeAt(++e.position)):s="!",n=e.position,t){do r=e.input.charCodeAt(++e.position);while(r!==0&&r!==62);e.position<e.length?(o=e.input.slice(n,e.position),r=e.input.charCodeAt(++e.position)):v(e,"unexpected end of the stream within a verbatim tag")}else{for(;r!==0&&!D(r);)r===33&&(i?v(e,"tag suffix cannot contain exclamation marks"):(s=e.input.slice(n-1,e.position+1),At.test(s)||v(e,"named tag handle cannot contain such characters"),i=!0,n=e.position+1)),r=e.input.charCodeAt(++e.position);o=e.input.slice(n,e.position),ba.test(o)&&v(e,"tag suffix cannot contain flow indicator characters")}o&&!Lt.test(o)&&v(e,"tag name cannot contain such characters: "+o);try{o=decodeURIComponent(o)}catch{v(e,"tag name is malformed: "+o)}return t?e.tag=o:G.call(e.tagMap,s)?e.tag=e.tagMap[s]+o:s==="!"?e.tag="!"+o:s==="!!"?e.tag="tag:yaml.org,2002:"+o:v(e,'undeclared tag handle "'+s+'"'),!0}function wa(e){var n,t;if(t=e.input.charCodeAt(e.position),t!==38)return!1;for(e.anchor!==null&&v(e,"duplication of an anchor property"),t=e.input.charCodeAt(++e.position),n=e.position;t!==0&&!D(t)&&!$(t);)t=e.input.charCodeAt(++e.position);return e.position===n&&v(e,"name of an anchor node must contain at least one character"),e.anchor=e.input.slice(n,e.position),!0}function Ia(e){var n,t,i;if(i=e.input.charCodeAt(e.position),i!==42)return!1;for(i=e.input.charCodeAt(++e.position),n=e.position;i!==0&&!D(i)&&!$(i);)i=e.input.charCodeAt(++e.position);return e.position===n&&v(e,"name of an alias node must contain at least one character"),t=e.input.slice(n,e.position),G.call(e.anchorMap,t)||v(e,'unidentified alias "'+t+'"'),e.result=e.anchorMap[t],P(e,!0,-1),!0}function Z(e,n,t,i,s){var o,r,a,l=1,u=!1,d=!1,p,m,f,b,q,g;if(e.listener!==null&&e.listener("open",e),e.tag=null,e.anchor=null,e.kind=null,e.result=null,o=r=a=Se===t||jt===t,i&&P(e,!0,-1)&&(u=!0,e.lineIndent>n?l=1:e.lineIndent===n?l=0:e.lineIndent<n&&(l=-1)),l===1)for(;Ta(e)||wa(e);)P(e,!0,-1)?(u=!0,a=o,e.lineIndent>n?l=1:e.lineIndent===n?l=0:e.lineIndent<n&&(l=-1)):a=!1;if(a&&(a=u||s),(l===1||Se===t)&&(ye===t||Ct===t?q=n:q=n+1,g=e.position-e.lineStart,l===1?a&&(Dn(e,g)||_a(e,g,q))||Pa(e,q)?d=!0:(r&&ka(e,q)||Aa(e,q)||La(e,q)?d=!0:Ia(e)?(d=!0,(e.tag!==null||e.anchor!==null)&&v(e,"alias node should not have any properties")):ja(e,q,ye===t)&&(d=!0,e.tag===null&&(e.tag="?")),e.anchor!==null&&(e.anchorMap[e.anchor]=e.result)):l===0&&(d=a&&Dn(e,g))),e.tag===null)e.anchor!==null&&(e.anchorMap[e.anchor]=e.result);else if(e.tag==="?"){for(e.result!==null&&e.kind!=="scalar"&&v(e,'unacceptable node kind for !<?> tag; it should be "scalar", not "'+e.kind+'"'),p=0,m=e.implicitTypes.length;p<m;p+=1)if(b=e.implicitTypes[p],b.resolve(e.result)){e.result=b.construct(e.result),e.tag=b.tag,e.anchor!==null&&(e.anchorMap[e.anchor]=e.result);break}}else if(e.tag!=="!"){if(G.call(e.typeMap[e.kind||"fallback"],e.tag))b=e.typeMap[e.kind||"fallback"][e.tag];else for(b=null,f=e.typeMap.multi[e.kind||"fallback"],p=0,m=f.length;p<m;p+=1)if(e.tag.slice(0,f[p].tag.length)===f[p].tag){b=f[p];break}b||v(e,"unknown tag !<"+e.tag+">"),e.result!==null&&b.kind!==e.kind&&v(e,"unacceptable node kind for !<"+e.tag+'> tag; it should be "'+b.kind+'", not "'+e.kind+'"'),b.resolve(e.result,e.tag)?(e.result=b.construct(e.result,e.tag),e.anchor!==null&&(e.anchorMap[e.anchor]=e.result)):v(e,"cannot resolve a node with !<"+e.tag+"> explicit tag")}return e.listener!==null&&e.listener("close",e),e.tag!==null||e.anchor!==null||d}function Da(e){var n=e.position,t,i,s,o=!1,r;for(e.version=null,e.checkLineBreaks=e.legacy,e.tagMap=Object.create(null),e.anchorMap=Object.create(null);(r=e.input.charCodeAt(e.position))!==0&&(P(e,!0,-1),r=e.input.charCodeAt(e.position),!(e.lineIndent>0||r!==37));){for(o=!0,r=e.input.charCodeAt(++e.position),t=e.position;r!==0&&!D(r);)r=e.input.charCodeAt(++e.position);for(i=e.input.slice(t,e.position),s=[],i.length<1&&v(e,"directive name must not be less than one character in length");r!==0;){for(;z(r);)r=e.input.charCodeAt(++e.position);if(r===35){do r=e.input.charCodeAt(++e.position);while(r!==0&&!N(r));break}if(N(r))break;for(t=e.position;r!==0&&!D(r);)r=e.input.charCodeAt(++e.position);s.push(e.input.slice(t,e.position))}r!==0&&nn(e),G.call(wn,i)?wn[i](e,i,s):Ce(e,'unknown document directive "'+i+'"')}if(P(e,!0,-1),e.lineIndent===0&&e.input.charCodeAt(e.position)===45&&e.input.charCodeAt(e.position+1)===45&&e.input.charCodeAt(e.position+2)===45?(e.position+=3,P(e,!0,-1)):o&&v(e,"directives end mark is expected"),Z(e,e.lineIndent-1,Se,!1,!0),P(e,!0,-1),e.checkLineBreaks&&ha.test(e.input.slice(n,e.position))&&Ce(e,"non-ASCII line breaks are interpreted as content"),e.documents.push(e.result),e.position===e.lineStart&&Le(e)){e.input.charCodeAt(e.position)===46&&(e.position+=3,P(e,!0,-1));return}if(e.position<e.length-1)v(e,"end of the stream or a document separator is expected");else return}function wt(e,n){e=String(e),n=n||{},e.length!==0&&(e.charCodeAt(e.length-1)!==10&&e.charCodeAt(e.length-1)!==13&&(e+=`
`),e.charCodeAt(0)===65279&&(e=e.slice(1)));var t=new Ca(e,n),i=e.indexOf("\0");for(i!==-1&&(t.position=i,v(t,"null byte is not allowed in input")),t.input+="\0";t.input.charCodeAt(t.position)===32;)t.lineIndent+=1,t.position+=1;for(;t.position<t.length-1;)Da(t);return t.documents}function Ma(e,n,t){n!==null&&typeof n=="object"&&typeof t>"u"&&(t=n,n=null);var i=wt(e,t);if(typeof n!="function")return i;for(var s=0,o=i.length;s<o;s+=1)n(i[s])}function Ea(e,n){var t=wt(e,n);if(t.length!==0){if(t.length===1)return t[0];throw new w("expected a single document in the stream, but found more")}}var Ra=Ma,Oa=Ea,It={loadAll:Ra,load:Oa},Dt=Object.prototype.toString,Mt=Object.prototype.hasOwnProperty,sn=65279,Na=9,pe=10,Fa=13,Ua=32,Va=33,Ja=34,Ge=35,Ba=37,Ga=38,za=39,Ha=42,Et=44,Qa=45,je=58,Ka=61,Wa=62,Ya=63,$a=64,Rt=91,Ot=93,Xa=96,Nt=123,Za=124,Ft=125,T={};T[0]="\\0";T[7]="\\a";T[8]="\\b";T[9]="\\t";T[10]="\\n";T[11]="\\v";T[12]="\\f";T[13]="\\r";T[27]="\\e";T[34]='\\"';T[92]="\\\\";T[133]="\\N";T[160]="\\_";T[8232]="\\L";T[8233]="\\P";var el=["y","Y","yes","Yes","YES","on","On","ON","n","N","no","No","NO","off","Off","OFF"],nl=/^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;function tl(e,n){var t,i,s,o,r,a,l;if(n===null)return{};for(t={},i=Object.keys(n),s=0,o=i.length;s<o;s+=1)r=i[s],a=String(n[r]),r.slice(0,2)==="!!"&&(r="tag:yaml.org,2002:"+r.slice(2)),l=e.compiledTypeMap.fallback[r],l&&Mt.call(l.styleAliases,a)&&(a=l.styleAliases[a]),t[r]=a;return t}function il(e){var n,t,i;if(n=e.toString(16).toUpperCase(),e<=255)t="x",i=2;else if(e<=65535)t="u",i=4;else if(e<=4294967295)t="U",i=8;else throw new w("code point within a string may not be greater than 0xFFFFFFFF");return"\\"+t+k.repeat("0",i-n.length)+n}var sl=1,de=2;function rl(e){this.schema=e.schema||en,this.indent=Math.max(1,e.indent||2),this.noArrayIndent=e.noArrayIndent||!1,this.skipInvalid=e.skipInvalid||!1,this.flowLevel=k.isNothing(e.flowLevel)?-1:e.flowLevel,this.styleMap=tl(this.schema,e.styles||null),this.sortKeys=e.sortKeys||!1,this.lineWidth=e.lineWidth||80,this.noRefs=e.noRefs||!1,this.noCompatMode=e.noCompatMode||!1,this.condenseFlow=e.condenseFlow||!1,this.quotingType=e.quotingType==='"'?de:sl,this.forceQuotes=e.forceQuotes||!1,this.replacer=typeof e.replacer=="function"?e.replacer:null,this.implicitTypes=this.schema.compiledImplicit,this.explicitTypes=this.schema.compiledExplicit,this.tag=null,this.result="",this.duplicates=[],this.usedDuplicates=null}function Mn(e,n){for(var t=k.repeat(" ",n),i=0,s=-1,o="",r,a=e.length;i<a;)s=e.indexOf(`
`,i),s===-1?(r=e.slice(i),i=a):(r=e.slice(i,s+1),i=s+1),r.length&&r!==`
`&&(o+=t),o+=r;return o}function ze(e,n){return`
`+k.repeat(" ",e.indent*n)}function ol(e,n){var t,i,s;for(t=0,i=e.implicitTypes.length;t<i;t+=1)if(s=e.implicitTypes[t],s.resolve(n))return!0;return!1}function Ae(e){return e===Ua||e===Na}function me(e){return 32<=e&&e<=126||161<=e&&e<=55295&&e!==8232&&e!==8233||57344<=e&&e<=65533&&e!==sn||65536<=e&&e<=1114111}function En(e){return me(e)&&e!==sn&&e!==Fa&&e!==pe}function Rn(e,n,t){var i=En(e),s=i&&!Ae(e);return(t?i:i&&e!==Et&&e!==Rt&&e!==Ot&&e!==Nt&&e!==Ft)&&e!==Ge&&!(n===je&&!s)||En(n)&&!Ae(n)&&e===Ge||n===je&&s}function al(e){return me(e)&&e!==sn&&!Ae(e)&&e!==Qa&&e!==Ya&&e!==je&&e!==Et&&e!==Rt&&e!==Ot&&e!==Nt&&e!==Ft&&e!==Ge&&e!==Ga&&e!==Ha&&e!==Va&&e!==Za&&e!==Ka&&e!==Wa&&e!==za&&e!==Ja&&e!==Ba&&e!==$a&&e!==Xa}function ll(e){return!Ae(e)&&e!==je}function oe(e,n){var t=e.charCodeAt(n),i;return t>=55296&&t<=56319&&n+1<e.length&&(i=e.charCodeAt(n+1),i>=56320&&i<=57343)?(t-55296)*1024+i-56320+65536:t}function Ut(e){var n=/^\n* /;return n.test(e)}var Vt=1,He=2,Jt=3,Bt=4,W=5;function ul(e,n,t,i,s,o,r,a){var l,u=0,d=null,p=!1,m=!1,f=i!==-1,b=-1,q=al(oe(e,0))&&ll(oe(e,e.length-1));if(n||r)for(l=0;l<e.length;u>=65536?l+=2:l++){if(u=oe(e,l),!me(u))return W;q=q&&Rn(u,d,a),d=u}else{for(l=0;l<e.length;u>=65536?l+=2:l++){if(u=oe(e,l),u===pe)p=!0,f&&(m=m||l-b-1>i&&e[b+1]!==" ",b=l);else if(!me(u))return W;q=q&&Rn(u,d,a),d=u}m=m||f&&l-b-1>i&&e[b+1]!==" "}return!p&&!m?q&&!r&&!s(e)?Vt:o===de?W:He:t>9&&Ut(e)?W:r?o===de?W:He:m?Bt:Jt}function cl(e,n,t,i,s){e.dump=(function(){if(n.length===0)return e.quotingType===de?'""':"''";if(!e.noCompatMode&&(el.indexOf(n)!==-1||nl.test(n)))return e.quotingType===de?'"'+n+'"':"'"+n+"'";var o=e.indent*Math.max(1,t),r=e.lineWidth===-1?-1:Math.max(Math.min(e.lineWidth,40),e.lineWidth-o),a=i||e.flowLevel>-1&&t>=e.flowLevel;function l(u){return ol(e,u)}switch(ul(n,a,e.indent,r,l,e.quotingType,e.forceQuotes&&!i,s)){case Vt:return n;case He:return"'"+n.replace(/'/g,"''")+"'";case Jt:return"|"+On(n,e.indent)+Nn(Mn(n,o));case Bt:return">"+On(n,e.indent)+Nn(Mn(pl(n,r),o));case W:return'"'+dl(n)+'"';default:throw new w("impossible error: invalid scalar style")}})()}function On(e,n){var t=Ut(e)?String(n):"",i=e[e.length-1]===`
`,s=i&&(e[e.length-2]===`
`||e===`
`),o=s?"+":i?"":"-";return t+o+`
`}function Nn(e){return e[e.length-1]===`
`?e.slice(0,-1):e}function pl(e,n){for(var t=/(\n+)([^\n]*)/g,i=(function(){var u=e.indexOf(`
`);return u=u!==-1?u:e.length,t.lastIndex=u,Fn(e.slice(0,u),n)})(),s=e[0]===`
`||e[0]===" ",o,r;r=t.exec(e);){var a=r[1],l=r[2];o=l[0]===" ",i+=a+(!s&&!o&&l!==""?`
`:"")+Fn(l,n),s=o}return i}function Fn(e,n){if(e===""||e[0]===" ")return e;for(var t=/ [^ ]/g,i,s=0,o,r=0,a=0,l="";i=t.exec(e);)a=i.index,a-s>n&&(o=r>s?r:a,l+=`
`+e.slice(s,o),s=o+1),r=a;return l+=`
`,e.length-s>n&&r>s?l+=e.slice(s,r)+`
`+e.slice(r+1):l+=e.slice(s),l.slice(1)}function dl(e){for(var n="",t=0,i,s=0;s<e.length;t>=65536?s+=2:s++)t=oe(e,s),i=T[t],!i&&me(t)?(n+=e[s],t>=65536&&(n+=e[s+1])):n+=i||il(t);return n}function ml(e,n,t){var i="",s=e.tag,o,r,a;for(o=0,r=t.length;o<r;o+=1)a=t[o],e.replacer&&(a=e.replacer.call(t,String(o),a)),(V(e,n,a,!1,!1)||typeof a>"u"&&V(e,n,null,!1,!1))&&(i!==""&&(i+=","+(e.condenseFlow?"":" ")),i+=e.dump);e.tag=s,e.dump="["+i+"]"}function Un(e,n,t,i){var s="",o=e.tag,r,a,l;for(r=0,a=t.length;r<a;r+=1)l=t[r],e.replacer&&(l=e.replacer.call(t,String(r),l)),(V(e,n+1,l,!0,!0,!1,!0)||typeof l>"u"&&V(e,n+1,null,!0,!0,!1,!0))&&((!i||s!=="")&&(s+=ze(e,n)),e.dump&&pe===e.dump.charCodeAt(0)?s+="-":s+="- ",s+=e.dump);e.tag=o,e.dump=s||"[]"}function gl(e,n,t){var i="",s=e.tag,o=Object.keys(t),r,a,l,u,d;for(r=0,a=o.length;r<a;r+=1)d="",i!==""&&(d+=", "),e.condenseFlow&&(d+='"'),l=o[r],u=t[l],e.replacer&&(u=e.replacer.call(t,l,u)),V(e,n,l,!1,!1)&&(e.dump.length>1024&&(d+="? "),d+=e.dump+(e.condenseFlow?'"':"")+":"+(e.condenseFlow?"":" "),V(e,n,u,!1,!1)&&(d+=e.dump,i+=d));e.tag=s,e.dump="{"+i+"}"}function fl(e,n,t,i){var s="",o=e.tag,r=Object.keys(t),a,l,u,d,p,m;if(e.sortKeys===!0)r.sort();else if(typeof e.sortKeys=="function")r.sort(e.sortKeys);else if(e.sortKeys)throw new w("sortKeys must be a boolean or a function");for(a=0,l=r.length;a<l;a+=1)m="",(!i||s!=="")&&(m+=ze(e,n)),u=r[a],d=t[u],e.replacer&&(d=e.replacer.call(t,u,d)),V(e,n+1,u,!0,!0,!0)&&(p=e.tag!==null&&e.tag!=="?"||e.dump&&e.dump.length>1024,p&&(e.dump&&pe===e.dump.charCodeAt(0)?m+="?":m+="? "),m+=e.dump,p&&(m+=ze(e,n)),V(e,n+1,d,!0,p)&&(e.dump&&pe===e.dump.charCodeAt(0)?m+=":":m+=": ",m+=e.dump,s+=m));e.tag=o,e.dump=s||"{}"}function Vn(e,n,t){var i,s,o,r,a,l;for(s=t?e.explicitTypes:e.implicitTypes,o=0,r=s.length;o<r;o+=1)if(a=s[o],(a.instanceOf||a.predicate)&&(!a.instanceOf||typeof n=="object"&&n instanceof a.instanceOf)&&(!a.predicate||a.predicate(n))){if(t?a.multi&&a.representName?e.tag=a.representName(n):e.tag=a.tag:e.tag="?",a.represent){if(l=e.styleMap[a.tag]||a.defaultStyle,Dt.call(a.represent)==="[object Function]")i=a.represent(n,l);else if(Mt.call(a.represent,l))i=a.represent[l](n,l);else throw new w("!<"+a.tag+'> tag resolver accepts not "'+l+'" style');e.dump=i}return!0}return!1}function V(e,n,t,i,s,o,r){e.tag=null,e.dump=t,Vn(e,t,!1)||Vn(e,t,!0);var a=Dt.call(e.dump),l=i,u;i&&(i=e.flowLevel<0||e.flowLevel>n);var d=a==="[object Object]"||a==="[object Array]",p,m;if(d&&(p=e.duplicates.indexOf(t),m=p!==-1),(e.tag!==null&&e.tag!=="?"||m||e.indent!==2&&n>0)&&(s=!1),m&&e.usedDuplicates[p])e.dump="*ref_"+p;else{if(d&&m&&!e.usedDuplicates[p]&&(e.usedDuplicates[p]=!0),a==="[object Object]")i&&Object.keys(e.dump).length!==0?(fl(e,n,e.dump,s),m&&(e.dump="&ref_"+p+e.dump)):(gl(e,n,e.dump),m&&(e.dump="&ref_"+p+" "+e.dump));else if(a==="[object Array]")i&&e.dump.length!==0?(e.noArrayIndent&&!r&&n>0?Un(e,n-1,e.dump,s):Un(e,n,e.dump,s),m&&(e.dump="&ref_"+p+e.dump)):(ml(e,n,e.dump),m&&(e.dump="&ref_"+p+" "+e.dump));else if(a==="[object String]")e.tag!=="?"&&cl(e,e.dump,n,o,l);else{if(a==="[object Undefined]")return!1;if(e.skipInvalid)return!1;throw new w("unacceptable kind of an object to dump "+a)}e.tag!==null&&e.tag!=="?"&&(u=encodeURI(e.tag[0]==="!"?e.tag.slice(1):e.tag).replace(/!/g,"%21"),e.tag[0]==="!"?u="!"+u:u.slice(0,18)==="tag:yaml.org,2002:"?u="!!"+u.slice(18):u="!<"+u+">",e.dump=u+" "+e.dump)}return!0}function vl(e,n){var t=[],i=[],s,o;for(Qe(e,t,i),s=0,o=i.length;s<o;s+=1)n.duplicates.push(t[i[s]]);n.usedDuplicates=new Array(o)}function Qe(e,n,t){var i,s,o;if(e!==null&&typeof e=="object")if(s=n.indexOf(e),s!==-1)t.indexOf(s)===-1&&t.push(s);else if(n.push(e),Array.isArray(e))for(s=0,o=e.length;s<o;s+=1)Qe(e[s],n,t);else for(i=Object.keys(e),s=0,o=i.length;s<o;s+=1)Qe(e[i[s]],n,t)}function hl(e,n){n=n||{};var t=new rl(n);t.noRefs||vl(e,t);var i=e;return t.replacer&&(i=t.replacer.call({"":i},"",i)),V(t,0,i,!0,!0)?t.dump+`
`:""}var bl=hl,ql={dump:bl};function rn(e,n){return function(){throw new Error("Function yaml."+e+" is removed in js-yaml 4. Use yaml."+n+" instead, which is now safe by default.")}}var xl=_,yl=st,Sl=lt,Cl=mt,jl=gt,Al=en,Ll=It.load,Pl=It.loadAll,kl=ql.dump,_l=w,Tl={binary:qt,float:dt,map:at,null:ut,pairs:yt,set:St,timestamp:ht,bool:ct,int:pt,merge:bt,omap:xt,seq:ot,str:rt},wl=rn("safeLoad","load"),Il=rn("safeLoadAll","loadAll"),Dl=rn("safeDump","dump"),ge={Type:xl,Schema:yl,FAILSAFE_SCHEMA:Sl,JSON_SCHEMA:Cl,CORE_SCHEMA:jl,DEFAULT_SCHEMA:Al,load:Ll,loadAll:Pl,dump:kl,YAMLException:_l,types:Tl,safeLoad:wl,safeLoadAll:Il,safeDump:Dl};const Ke=e=>$i(`/logos/${e}`),Ml="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",se=Ke("no-img.svg"),c=(e,n=e)=>({light:Ke(e),dark:Ke(n),fallback:Ml}),be={javascript:"javascript",typescript:"typescript",python:"python",java:"java",c:"c",cpp:"cplusplus","c++":"cplusplus",csharp:"csharp","c#":"csharp",go:"go",rust:"rust",kotlin:"kotlin",dart:"dart",php:"php",ruby:"ruby",swift:"swift",r:"r",scala:"scala",perl:"perl",lua:"lua",haskell:"haskell",elixir:"elixir",clojure:"clojure",matlab:"matlab",bash:"bash",powershell:"powershell",react:"react",reactjs:"react",vue:"vuejs",vuejs:"vuejs",angular:"angularjs",svelte:"svelte",nextjs:"nextjs",nuxt:"nuxtjs",nuxtjs:"nuxtjs",gatsby:"gatsby",ember:"ember",backbone:"backbonejs",jquery:"jquery",bootstrap:"bootstrap",tailwind:"tailwindcss",tailwindcss:"tailwindcss",materialui:"materialui",sass:"sass",less:"less",css:"css3",html:"html5",nodejs:"nodejs",node:"nodejs",express:"express",expressjs:"express",nestjs:"nestjs",fastify:"fastify",django:"django",flask:"flask",fastapi:"fastapi",spring:"spring",rails:"rails",laravel:"laravel",dotnet:"dotnetcore",".net":"dotnetcore",aspnet:"dotnetcore",postgresql:"postgresql",postgres:"postgresql",mysql:"mysql",mongodb:"mongodb",redis:"redis",sqlite:"sqlite",oracle:"oracle",mariadb:"mariadb",cassandra:"cassandra",neo4j:"neo4j",firebase:"firebase",dynamodb:"dynamodb",docker:"docker",kubernetes:"kubernetes",aws:"amazonwebservices",azure:"azure",gcp:"googlecloud",googlecloud:"googlecloud",heroku:"heroku",nginx:"nginx",apache:"apache",jenkins:"jenkins",circleci:"circleci",travisci:"travis",terraform:"terraform",ansible:"ansible",vagrant:"vagrant",git:"git",github:"github",gitlab:"gitlab",bitbucket:"bitbucket",vscode:"vscode",vim:"vim",jetbrains:"jetbrains",intellij:"intellij",webpack:"webpack",vite:"vitejs",babel:"babel",eslint:"eslint",npm:"npm",yarn:"yarn",pnpm:"pnpm",gradle:"gradle",maven:"maven",cmake:"cmake",jest:"jest",mocha:"mocha",jasmine:"jasmine",selenium:"selenium",cypress:"cypressio",pytest:"pytest",playwright:"playwright",streamlit:"streamlit",android:"android",flutter:"flutter",reactnative:"react",ionic:"ionic",xamarin:"xamarin",linux:"linux",ubuntu:"ubuntu",debian:"debian",centos:"centos",windows:"windows8",apple:"apple",macos:"apple",raspberrypi:"raspberrypi",graphql:"graphql",kafka:"apachekafka",rabbitmq:"rabbitmq",electron:"electron",figma:"figma",sketch:"sketch",photoshop:"photoshop",illustrator:"illustrator",blender:"blender",unity:"unity",unrealengine:"unrealengine",threejs:"threejs",opencv:"opencv",tensorflow:"tensorflow",pytorch:"pytorch",pandas:"pandas",numpy:"numpy",jupyter:"jupyter",anaconda:"anaconda",markdown:"markdown",latex:"latex",wordpress:"wordpress",drupal:"drupal",jira:"jira",confluence:"confluence",trello:"trello",slack:"slack",postman:"postman",insomnia:"insomnia",swagger:"swagger"};function he(e){return e.toLowerCase().replace(/[.\-_\s]/g,"").replace(/js$/i,"").replace(/\.js$/i,"").replace(/lang$/i,"")}function El(e){const n=he(e);for(const[o,r]of Object.entries(be))if(he(o)===n)return r;for(const[o,r]of Object.entries(be)){const a=he(o);if(n.includes(a)||a.includes(n))return r}const t={node:"nodejs",js:"javascript",ts:"typescript",py:"python",rb:"ruby",cpp:"cplusplus",cxx:"cplusplus",cs:"csharp",postgres:"postgresql",mongo:"mongodb",k8s:"kubernetes",tf:"terraform",vue:"vuejs",react:"react",ng:"angularjs",angular:"angularjs",next:"nextjs",nuxt:"nuxtjs",tailwind:"tailwindcss",tw:"tailwindcss",bs:"bootstrap",electron:"electron",deno:"denojs",bun:"bun",aws:"amazonwebservices",gcloud:"googlecloud",gc:"googlecloud",az:"azure",gh:"github",gl:"gitlab",vsc:"vscode",code:"vscode",vim:"vim",nvim:"neovim",neovim:"neovim",intellij:"intellij",idea:"intellij",pycharm:"pycharm",webstorm:"webstorm"};if(t[n])return t[n];let i,s=1/0;for(const[o,r]of Object.entries(be)){const a=Rl(n,he(o));a<s&&a<=2&&(s=a,i=r)}return i}function Rl(e,n){if(e.length===0)return n.length;if(n.length===0)return e.length;const t=[];for(let i=0;i<=n.length;i++)t[i]=[i];for(let i=0;i<=e.length;i++)t[0][i]=i;for(let i=1;i<=n.length;i++)for(let s=1;s<=e.length;s++)n.charAt(i-1)===e.charAt(s-1)?t[i][s]=t[i-1][s-1]:t[i][s]=Math.min(t[i-1][s-1]+1,t[i][s-1]+1,t[i-1][s]+1);return t[n.length][e.length]}const Ol=new Set(["unknown","none","null","undefined","","n/a","na","no-img","placeholder","autonomy","autonomie","creativity","créativité","creativite","teamwork","travail d'équipe","travail equipe","communication","leadership","problem-solving","problem solving","résolution de problèmes","adaptability","adaptabilité","adaptabilite","time-management","time management","gestion du temps","critical-thinking","critical thinking","pensée critique","collaboration","motivation","organization","organisation","flexibility","flexibilité","flexibilite","patience","empathy","empathie","curiosity","curiosité","curiosite","rigor","rigueur","initiative","perseverance","persévérance","perseverance","soft skill","soft skills"]);function Gt(e){if(!e)return!0;const n=e.toLowerCase().trim();return n.length===0?!0:Ol.has(n)}function Nl(e,n="original"){if(Gt(e))return;let t=be[e.toLowerCase()];if(t||(t=El(e)),!!t)return`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${t}/${t}-${n}.svg`}function Fl(e){if(Gt(e))return{light:se,dark:se,fallback:se};const n=Nl(e);if(n)return{light:n,dark:n,fallback:se};const i=`https://cdn.simpleicons.org/${e.toLowerCase().replace(/[^a-z0-9]/g,"")}`;return{light:i,dark:i,fallback:se}}const Y={AWS:c("aws.svg"),Bootstrap:c("bootstrap.svg"),C:c("c.svg"),Cpp:c("cpp.svg"),Celery:c("celery.svg"),Django:c("django.svg"),FastApi:c("fastapi"),Flask:c("flask.svg"),Go:c("go.svg"),Kafka:c("kafka.svg"),Neo4j:c("neo4j.svg"),Nginx:c("nginx.svg"),Numpy:c("numpy.svg"),Pandas:c("pandas.svg"),RabbitMQ:c("rabbitmq.svg"),Rust:c("rust.svg"),Scrapy:c("scrapy.png"),Selenium:c("selenium.svg"),Docker:c("docker.svg"),Kubernetes:c("kubernetes.svg"),Csharp:c("csharp.svg"),CSharp:c("csharp.svg"),Xamarin:c("xamarin.svg"),TypeScript:c("typescript-original.svg"),VueJs:c("vuejs-original.svg"),ReactJs:c("react.svg"),Dart:c("dart.png"),Kotlin:c("kotlin-original.svg"),Python:c("python.png"),NodeJs:c("nodejs-original.svg"),Deno:c("deno.svg"),Svelte:c("svelte.svg"),ExpressJs:c("express.png"),Express:c("express.png"),JavaScript:c("javascript-original.svg"),Fastify:c("fastify.svg"),NestJs:c("nest.svg"),Quasar:c("quasar.svg"),SolidJs:c("solid.svg"),Electron:c("electron.png"),Flutter:c("flutter.svg"),Java:c("java.png"),AdonisJs:c("adonis.png"),Android:c("android.png"),Angular:c("angular.png"),PostgreSQL:c("postgresql-original.svg"),Firebase:c("firebase.png"),Sass:c("sass.png"),Unknown:c("no-img.svg"),MongoDB:c("mongodb.svg"),Redis:c("redis.svg"),Tailwind:c("tailwind.svg"),TailwindCSS:c("tailwindcss-original.svg"),HTML:c("html.svg"),Premiere:c("premiere.svg"),Photoshop:c("photoshop.svg"),CSS:c("css.svg"),AfterEffects:c("after-effects.svg"),Illustrator:c("illustrator.svg"),Nuxt:c("nuxt.png"),Vite:c("vite.png"),Vitest:c("vitest.svg"),Jest:c("jest.png"),Unocss:c("unocss.svg"),Ruvy:c("ruvy.svg"),Postcss:c("postcss.svg"),Soleil:c("soleil.png"),AGH:c("agh.png"),InTech:c("intech.png"),ESIEA:c("esiea.png"),PMF:c("pmf.png"),Git:c("git-original.svg"),Linux:c("linux-original.svg"),SQLite:c("sqlite-original.svg"),CICD:c("cicd.svg"),Arduino:c("arduino-original.svg"),DotNet:c("dotnet-original.svg"),Grafana:c("grafana-original.svg"),Hugo:c("hugo-original.svg"),Ionic:c("ionic-original.svg"),MariaDB:c("mariadb-original.svg"),MySQL:c("mysql-original.svg"),OpenCV:c("opencv-original.svg"),Oracle:c("oracle-original.svg"),PHP:c("php-original.svg"),Postman:c("postman-original.svg"),Spring:c("spring-original.svg"),TensorFlow:c("tensorflow-original.svg"),Unity:c("unity-original.svg"),Apache:c("apache-original.svg"),Apache2:c("apache-original.svg"),Playwright:c("playwright-original.svg"),Streamlit:c("streamlit-original.svg"),RedisDB:c("redis-original.svg"),PaperMC:c("papermc.svg"),Velocity:c("velocity.svg"),BungeeCord:c("bungeecord.svg"),Spigot:c("spigot.svg"),Skript:c("skript.svg"),OpenXR:c("openxr.svg"),IntelliJ:c("intellij-original.svg"),PyCharm:c("pycharm-original.svg"),WebStorm:c("webstorm-original.svg"),CLion:c("clion-original.svg"),Rider:c("rider-original.svg"),DataGrip:c("datagrip-original.svg"),AndroidStudio:c("androidstudio-original.svg"),VSCode:c("vscode-original.svg"),Excel:c("excel.svg"),PowerPoint:c("powerpoint.svg"),Word:c("word.svg"),Jira:c("jira-original.svg"),Confluence:c("confluence-original.svg"),Teamwork:c("no-img.svg"),Autonomy:c("no-img.svg"),Creativity:c("no-img.svg"),MiniArticle:c("mini-article.png")};var E=(e=>(e.FullTime="Full-time",e.PartTime="Part-time",e.SelfEmployed="Self-employed",e.Freelance="Freelance",e.Contract="Contract",e.Internship="Internship",e.Apprenticeship="Apprenticeship",e))(E||{}),L=(e=>(e.Image="image",e.PDF="pdf",e.Document="document",e.Archive="archive",e.Video="video",e.Audio="audio",e.Code="code",e.Link="link",e.Other="other",e))(L||{});function Pe(e,n=new Date){if(e instanceof Date&&!isNaN(e.getTime()))return e;if(typeof e=="string"){const t=e.match(/^(\d{4})-(\d{2})-(\d{2})$/);if(t){const[,s,o,r]=t;return new Date(parseInt(s),parseInt(o)-1,parseInt(r))}const i=new Date(e);if(!isNaN(i.getTime()))return i}return console.log("[parseDate] Failed to parse:",e,"- using fallback"),n}function ke(e){if(e){if(e instanceof Date&&!isNaN(e.getTime()))return e;if(typeof e=="string"){const n=e.match(/^(\d{4})-(\d{2})-(\d{2})$/);if(n){const[,i,s,o]=n;return new Date(parseInt(i),parseInt(s)-1,parseInt(o))}const t=new Date(e);if(!isNaN(t.getTime()))return t}}}function Fe(e){return e.light.includes("no-img")||e.light===Y.Unknown.light}function ee(e){if(!e)return Y.Unknown;if(e.startsWith("http://")||e.startsWith("https://"))return{light:e,dark:e,fallback:Y.Unknown.light};let n=Y[e];if(n&&!Fe(n))return n;const t=[e,e.charAt(0).toUpperCase()+e.slice(1),e.toUpperCase(),e.toLowerCase(),e.replace(/(?:^|[-_])(\w)/g,(r,a)=>a?a.toUpperCase():"")];for(const r of t)if(n=Y[r],n&&!Fe(n))return n;const i={react:"ReactJs",node:"NodeJs",js:"JavaScript",ts:"TypeScript",vue:"VueJs",express:"ExpressJs",postgres:"PostgreSQL",postgresql:"PostgreSQL",mongo:"MongoDB",tailwindcss:"Tailwind"},s=e.toLowerCase();return i[s]&&(n=Y[i[s]],n&&!Fe(n))?n:Fl(e)}function on(e){return e?e.replace(/^::toc\s*$/gm,"").replace(/^:::[\w-]+\s*$/gm,"").replace(/::button\[[^\]]*\]\{[^}]*\}/g,"").replace(/:i(?:con)?\[[^\]]+\]/g,"").replace(/::[\w-]+(?:\[[^\]]*\])?(?:\{[^}]*\})?/g,"").replace(/<[^>]*>/g,"").replace(/^#{1,6}\s+/gm,"").replace(/\*\*([^*]+)\*\*/g,"$1").replace(/\*([^*]+)\*/g,"$1").replace(/__([^_]+)__/g,"$1").replace(/_([^_]+)_/g,"$1").replace(/\[([^\]]+)\]\([^)]+\)/g,"$1").replace(/!\[[^\]]*\]\([^)]+\)/g,"").replace(/```[\s\S]*?```/g,"").replace(/`([^`]+)`/g,"$1").replace(/^[\s]*[-*+]\s+/gm,"").replace(/^[\s]*\d+\.\s+/gm,"").replace(/^>\s+/gm,"").replace(/^[-*_]{3,}$/gm,"").replace(/\n{2,}/g," ").replace(/\n/g," ").replace(/\s{2,}/g," ").trim():""}function Ul(e,n){const t=e.toLowerCase(),i=n.toLowerCase();if(t.includes("github.com")||i.includes("github"))return"i-carbon-logo-github";if(t.includes("gitlab.com")||i.includes("gitlab"))return"i-carbon-logo-gitlab";if(t.includes("youtube.com")||t.includes("youtu.be")||i.includes("youtube"))return"i-carbon-logo-youtube";if(t.includes("linkedin.com")||i.includes("linkedin"))return"i-carbon-logo-linkedin";if(t.includes("twitter.com")||t.includes("x.com")||i.includes("twitter"))return"i-carbon-logo-x";if(t.includes("discord.com")||t.includes("discord.gg")||i.includes("discord"))return"i-carbon-logo-discord";if(t.includes("slack.com")||i.includes("slack"))return"i-carbon-logo-slack";if(t.includes("medium.com")||i.includes("medium"))return"i-carbon-logo-medium";if(t.includes("figma.com")||i.includes("figma"))return"i-carbon-logo-figma";if(t.includes("npmjs.com")||i.includes("npm"))return"i-carbon-logo-npm";if(i.includes("doc")||i.includes("wiki")||i.includes("readme"))return"i-carbon-document";if(t.includes(".ipynb")||i.includes("notebook")||i.includes("jupyter"))return"i-carbon-notebook";if(i.includes("demo")||i.includes("live")||i.includes("preview"))return"i-carbon-view";if(i.includes("download")||i.includes("télécharger"))return"i-carbon-download";if(i.includes("video")||i.includes("vidéo"))return"i-carbon-video";if(i.includes("api"))return"i-carbon-api"}function _e(e){return Array.isArray(e)?e.map(n=>{const t=n.to||"",i=n.label||"";return{to:t,label:i,newTab:n.newTab??!0,icon:n.icon||Ul(t,i)}}):[]}function Vl(e){return Array.isArray(e)?e.map(n=>({src:n.src||"",label:n.label||""})):[]}function Jn(e){const n=e.toLowerCase();return/\.(jpg|jpeg|png|gif|webp|svg|bmp|ico)(\?.*)?$/i.test(n)||n.includes("unsplash.com")||n.includes("imgur.com")?L.Image:/\.pdf(\?.*)?$/i.test(n)?L.PDF:/\.(doc|docx|odt|rtf|txt|xls|xlsx|ppt|pptx)(\?.*)?$/i.test(n)?L.Document:/\.(zip|rar|7z|tar|gz|bz2)(\?.*)?$/i.test(n)?L.Archive:/\.(mp4|webm|avi|mov|mkv)(\?.*)?$/i.test(n)||n.includes("youtube.com")||n.includes("youtu.be")||n.includes("vimeo.com")?L.Video:/\.(mp3|wav|ogg|flac|aac)(\?.*)?$/i.test(n)?L.Audio:/\.(js|ts|py|java|c|cpp|cs|go|rs|rb|php|html|css|json|xml|yaml|yml|sh|bash)(\?.*)?$/i.test(n)||n.includes("github.com")||n.includes("gitlab.com")||n.includes("gist.github.com")?L.Code:n.startsWith("http://")||n.startsWith("https://")?L.Link:L.Other}function Jl(e){return{[L.Image]:"i-carbon-image",[L.PDF]:"i-carbon-document-pdf",[L.Document]:"i-carbon-document",[L.Archive]:"i-carbon-zip",[L.Video]:"i-carbon-video",[L.Audio]:"i-carbon-music",[L.Code]:"i-carbon-code",[L.Link]:"i-carbon-link",[L.Other]:"i-carbon-attachment"}[e]||"i-carbon-attachment"}function Te(e){return Array.isArray(e)?e.map(n=>{const t=n.src||n.url||"",i=n.type&&L[n.type]||Jn(t),s=t.startsWith("http://")||t.startsWith("https://");return{label:n.label||n.name||"Pièce jointe",src:t,type:i,description:n.description||void 0,size:n.size||void 0,icon:n.icon||Jl(i),newTab:n.newTab??s}}):[]}function Bl(e){return{FullTime:E.FullTime,"Full-time":E.FullTime,PartTime:E.PartTime,"Part-time":E.PartTime,SelfEmployed:E.SelfEmployed,"Self-employed":E.SelfEmployed,Freelance:E.Freelance,Contract:E.Contract,Internship:E.Internship,Apprenticeship:E.Apprenticeship}[e||""]||E.Contract}function fe(e){return(e.split("/").pop()||"").replace(/\.(md|yaml|yml)$/,"")}function ne(e,n){const t=e.replace(/\r\n/g,`
`).replace(/\r/g,`
`),i=/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/,s=t.match(i);if(!s)return console.log(`[parseMarkdownFile] No frontmatter found for ${n}, raw starts with:`,t.substring(0,50)),{meta:{slug:n},content:t};const[,o,r]=s;try{const a=ge.load(o);return console.log(`[parseMarkdownFile] Parsed ${n}:`,JSON.stringify(a)),{meta:{...a,slug:n},content:r.trim()}}catch(a){return console.error(`Error parsing frontmatter for ${n}:`,a),{meta:{slug:n},content:(r==null?void 0:r.trim())||t}}}const We=[{name:"Programming Languages",slug:"pro-lang"},{name:"Frameworks",slug:"framework"},{name:"Libraries",slug:"library"},{name:"Languages",slug:"lang"},{name:"Databases",slug:"db"},{name:"ORMs",slug:"orm"},{name:"DevOps",slug:"devops"},{name:"Testing",slug:"test"},{name:"Dev Tools",slug:"devtools"},{name:"Markup & Style",slug:"markup-style"},{name:"Design",slug:"design"},{name:"Soft Skills",slug:"soft"}];function Gl(e){if(e)return We.find(n=>n.slug===e)}const zl=Object.assign({"/content/blog/alternance-synchrotron-soleil-bilan.md":Xi,"/content/blog/blog-platform-demo.md":Zi,"/content/blog/creer-portfolio-sveltekit.md":es,"/content/blog/developpement-mobile-flutter.md":ns,"/content/blog/georges-le-chat.md":ts,"/content/blog/getting-started-with-svelte.md":is,"/content/blog/mini-article.md":ss,"/content/blog/modern-css-techniques.md":rs,"/content/blog/projet-cifar10-deep-learning.md":os,"/content/blog/projet-comet-learning-formation-minecraft.md":as,"/content/blog/projet-foot-ai-computer-vision.md":ls,"/content/blog/projet-invr-initiation-realite-virtuelle.md":us,"/content/blog/refonte-complete-portfolio-2026.md":cs,"/content/blog/sun-auto-automatisation-synchrotron-soleil.md":ps,"/content/blog/sveltekit-full-stack-framework.md":ds,"/content/blog/tap-plateforme-tests-automatises-allure.md":ms,"/content/blog/travail-equipe-projets-scolaires.md":gs,"/content/blog/typescript-best-practices.md":fs}),Hl=Object.assign({"/content/projects/comet-learning.md":vs,"/content/projects/flutter-movie-manip.md":hs,"/content/projects/flutter-todo-list.md":bs,"/content/projects/foot-ai.md":qs,"/content/projects/hr-data-analytics.md":xs,"/content/projects/invr.md":ys,"/content/projects/nano-pong.md":Ss,"/content/projects/quiz-ai.md":Cs,"/content/projects/snake-game-ai.md":js,"/content/projects/squat-counter-ia.md":As,"/content/projects/sun-auto.md":Ls,"/content/projects/svelte-blog.md":Ps,"/content/projects/tap.md":ks,"/content/projects/template-project.md":_s,"/content/projects/template-svelte.md":Ts,"/content/projects/tpvpocifar.md":ws}),Bn=Object.assign({"/content/skills/android-studio.md":Is,"/content/skills/apache2.md":Ds,"/content/skills/arduino.md":Ms,"/content/skills/autonomy.md":Es,"/content/skills/bungeecord.md":Rs,"/content/skills/c.md":Os,"/content/skills/ci-cd.md":Ns,"/content/skills/clion.md":Fs,"/content/skills/confluence.md":Us,"/content/skills/creativity.md":Vs,"/content/skills/csharp.md":Js,"/content/skills/css.md":Bs,"/content/skills/dart.md":Gs,"/content/skills/datagrip.md":zs,"/content/skills/docker-swarm.md":Hs,"/content/skills/docker.md":Qs,"/content/skills/dotnet.md":Ks,"/content/skills/electron.md":Ws,"/content/skills/excel.md":Ys,"/content/skills/expressjs.md":$s,"/content/skills/firebase.md":Xs,"/content/skills/flask.md":Zs,"/content/skills/flutter.md":er,"/content/skills/git.md":nr,"/content/skills/grafana.md":tr,"/content/skills/html.md":ir,"/content/skills/hugo.md":sr,"/content/skills/intellij.md":rr,"/content/skills/ionic.md":or,"/content/skills/java.md":ar,"/content/skills/javafx.md":lr,"/content/skills/javascript.md":ur,"/content/skills/jee.md":cr,"/content/skills/jira.md":pr,"/content/skills/kotlin.md":dr,"/content/skills/kubernetes.md":mr,"/content/skills/linux.md":gr,"/content/skills/mariadb.md":fr,"/content/skills/minikube.md":vr,"/content/skills/mongodb.md":hr,"/content/skills/mysql.md":br,"/content/skills/nginx.md":qr,"/content/skills/nodejs.md":xr,"/content/skills/opencv.md":yr,"/content/skills/openxr.md":Sr,"/content/skills/oracle.md":Cr,"/content/skills/pandas.md":jr,"/content/skills/papermc.md":Ar,"/content/skills/photoshop.md":Lr,"/content/skills/php.md":Pr,"/content/skills/playwright.md":kr,"/content/skills/postgres.md":_r,"/content/skills/postgresql.md":Tr,"/content/skills/postman.md":wr,"/content/skills/powerpoint.md":Ir,"/content/skills/pycharm.md":Dr,"/content/skills/python.md":Mr,"/content/skills/reactjs.md":Er,"/content/skills/redis.md":Rr,"/content/skills/rider.md":Or,"/content/skills/rust.md":Nr,"/content/skills/sass.md":Fr,"/content/skills/selenium.md":Ur,"/content/skills/skript.md":Vr,"/content/skills/spigot.md":Jr,"/content/skills/spring.md":Br,"/content/skills/springboot.md":Gr,"/content/skills/sqlite.md":zr,"/content/skills/streamlit.md":Hr,"/content/skills/svelte.md":Qr,"/content/skills/tailwind.md":Kr,"/content/skills/teamwork.md":Wr,"/content/skills/tensorflow.md":Yr,"/content/skills/typescript.md":$r,"/content/skills/unity.md":Xr,"/content/skills/velocity.md":Zr,"/content/skills/vscode.md":eo,"/content/skills/vuejs.md":no,"/content/skills/webstorm.md":to,"/content/skills/word.md":io}),Ql=Object.assign({"/content/experience/agh-batiment.md":so,"/content/experience/synchrotron-soleil.md":ro}),Kl=Object.assign({"/content/education/esiea.md":oo,"/content/education/intech.md":ao,"/content/education/pmf.md":lo});let Ue=null;function an(){if(Ue)return Ue;console.log("[loadAllSkills] Starting to load skills..."),console.log("[loadAllSkills] skillFiles keys:",Object.keys(Bn));const e=[];for(const[n,t]of Object.entries(Bn)){const i=fe(n),{meta:s,content:o}=ne(t,i);if(s.published===!1){console.log(`[loadAllSkills] Skipping ${i} (published: false)`);continue}console.log(`[loadAllSkills] Processing ${i}:`,{name:s.name,logo:s.logo,rawLogoType:typeof s.logo}),e.push({slug:s.slug||i,name:s.name||i,logo:ee(s.logo),description:o||s.name||"",color:s.color||"gray",category:Gl(s.category)})}return Ue=e,e}function zt(...e){const n=an();return e.length===0?n:n.filter(t=>e.includes(t.slug))}function bu(e=""){const n=an(),t=[],i=[];return n.forEach(s=>{if(e.trim()&&!s.name.toLowerCase().includes(e.trim().toLowerCase()))return;if(!s.category){i.push(s);return}let o=t.find(r=>{var a;return r.category.slug===((a=s.category)==null?void 0:a.slug)});o||(o={items:[],category:s.category},t.push(o)),o.items.push(s)}),i.length!==0&&t.push({category:{name:"Others",slug:"others"},items:i}),t.sort((s,o)=>{const r=We.findIndex(l=>l.slug===s.category.slug),a=We.findIndex(l=>l.slug===o.category.slug);return r===-1?1:a===-1?-1:r-a}),t.forEach(s=>{s.items.sort((o,r)=>o.name.localeCompare(r.name))}),t}function Wl(){const e=[];for(const[n,t]of Object.entries(zl)){const i=fe(n),{meta:s,content:o}=ne(t,i);s.published!==!1&&e.push({slug:s.slug||i,name:s.name||s.title||i,title:s.title||s.name||i,logo:ee(s.logo),excerpt:s.excerpt||"",shortDescription:s.excerpt||"",description:o,content:o,author:s.author||"Anonymous",publishedAt:Pe(s.publishedAt),updatedAt:ke(s.updatedAt),tags:s.tags||[],coverImage:s.coverImage?ee(s.coverImage):void 0,readingTime:s.readingTime||Math.ceil(o.split(/\s+/).length/200),color:s.color,links:_e(s.links),pinned:s.pinned||!1})}return e.sort((n,t)=>t.publishedAt.getTime()-n.publishedAt.getTime())}function Ht(){var n,t;const e=[];for(const[i,s]of Object.entries(Hl)){const o=fe(i),{meta:r,content:a}=ne(s,o);r.published!==!1&&e.push({slug:r.slug||o,name:r.name||o,logo:ee(r.logo),shortDescription:r.shortDescription||on(a).substring(0,200),description:a,color:r.color||"gray",type:r.type||"Project",category:r.category?Yl(r.category):void 0,period:{from:Pe((n=r.period)==null?void 0:n.from),to:ke((t=r.period)==null?void 0:t.to)},skills:zt(...r.skills||[]),links:_e(r.links),screenshots:Vl(r.screenshots),attachments:Te(r.attachments),pinned:r.pinned||!1})}return e.sort((i,s)=>{const o=s.period.from.getTime()-i.period.from.getTime();return o!==0?o:i.name.localeCompare(s.name)})}const Ye=[{slug:"technique",name:"💻 Projets Techniques"},{slug:"humain",name:"🤝 Projets Humains"}];function Yl(e){return Ye.find(t=>t.slug===e.toLowerCase())||{name:e,slug:e.toLowerCase()}}function qu(e="",n=[]){const t=Ht(),i=[],s=[];return t.forEach(o=>{if(e.trim()&&!o.name.toLowerCase().includes(e.trim().toLowerCase())||n.length>0&&!o.skills.some(a=>n.includes(a.slug)))return;if(!o.category){s.push(o);return}let r=i.find(a=>{var l;return a.category.slug===((l=o.category)==null?void 0:l.slug)});r||(r={items:[],category:o.category},i.push(r)),r.items.push(o)}),s.length!==0&&i.push({category:{name:"📁 Autres",slug:"others"},items:s}),i.sort((o,r)=>{const a=Ye.findIndex(u=>u.slug===o.category.slug),l=Ye.findIndex(u=>u.slug===r.category.slug);return a===-1?1:l===-1?-1:a-l}),i}function $l(){var n,t,i;const e=[];for(const[s,o]of Object.entries(Ql)){const r=fe(s),{meta:a,content:l}=ne(o,r);a.published!==!1&&(console.log(`[loadAllExperiences] ${r}:`,{name:a.name,shortDescription:(n=a.shortDescription)==null?void 0:n.substring(0,50),period:a.period}),e.push({slug:a.slug||r,name:a.name||r,logo:ee(a.logo),shortDescription:a.shortDescription||on(l).substring(0,200),description:l,company:a.company||"",location:a.location||"",contract:Bl(a.contract),type:a.type||"Development",color:a.color||"gray",period:{from:Pe((t=a.period)==null?void 0:t.from),to:ke((i=a.period)==null?void 0:i.to)},skills:zt(...a.skills||[]),links:_e(a.links),attachments:Te(a.attachments)}))}return e.sort((s,o)=>o.period.from.getTime()-s.period.from.getTime())}function Xl(){var n,t;const e=[];for(const[i,s]of Object.entries(Kl)){const o=fe(i),{meta:r,content:a}=ne(s,o);r.published!==!1&&e.push({slug:r.slug||o,name:r.name||o,logo:ee(r.logo),shortDescription:r.shortDescription||on(a).substring(0,200),description:a,degree:r.degree||"",organization:r.organization||"",location:r.location||"",color:r.color,period:{from:Pe((n=r.period)==null?void 0:n.from),to:ke((t=r.period)==null?void 0:t.to)},subjects:r.subjects||[],links:_e(r.links),attachments:Te(r.attachments)})}return e.sort((i,s)=>s.period.from.getTime()-i.period.from.getTime())}const Zl=Object.assign({"/content/about.md":uo});function eu(){const e=Object.values(Zl)[0];if(!e)return console.log("[loadAboutPage] No about.md file found"),{title:"À propos",content:"",attachments:[]};const{meta:n,content:t}=ne(e,"about");return{title:n.title||"À propos",content:t,attachments:Te(n.attachments)}}const nu=Object.assign({"/content/site.yaml":co}),tu=Object.assign({"/content/pages/home.yaml":po}),iu=Object.assign({"/content/pages/resume.yaml":mo}),su=Object.assign({"/content/pages/contact.yaml":go});function ln(){const e=Object.values(nu)[0];if(!e)return{firstName:"Prénom",lastName:"NOM",jobTitle:"Développeur",email:"contact@example.com",socialLinks:[],inConstruction:{enabled:!1,title:"",message:""}};const n=e.replace(/\r\n/g,`
`).replace(/\r/g,`
`),t=ge.load(n),i=t.inConstruction;return{firstName:t.firstName||"Prénom",lastName:t.lastName||"NOM",jobTitle:t.jobTitle||"Développeur",email:t.email||"contact@example.com",socialLinks:(t.socialLinks||[]).map(s=>({label:s.label,href:s.href,icon:s.icon})),inConstruction:{enabled:(i==null?void 0:i.enabled)??!1,title:(i==null?void 0:i.title)||"",message:(i==null?void 0:i.message)||""}}}function ru(){const e=ln(),n=Object.values(tu)[0];let t="Accueil",i="";if(n){const s=n.replace(/\r\n/g,`
`).replace(/\r/g,`
`),o=ge.load(s);t=o.title||"Accueil";const r=o.hero;i=(r==null?void 0:r.description)||""}return{title:t,heroDescription:i,socialLinks:e.socialLinks,fullName:`${e.firstName} ${e.lastName}`}}function ou(){const e=Object.values(iu)[0];if(!e)return{title:"CV",pdfPath:"/pdf/cv.pdf",downloadLabel:"Télécharger",fullscreenLabel:"Plein écran"};const n=e.replace(/\r\n/g,`
`).replace(/\r/g,`
`),t=ge.load(n);return{title:t.title||"CV",pdfPath:t.pdfPath||"/pdf/cv.pdf",downloadLabel:t.downloadLabel||"Télécharger",fullscreenLabel:t.fullscreenLabel||"Plein écran"}}function au(){const e=ln(),n=Object.values(su)[0],t={title:"Contact",description:"N'hésitez pas à me contacter.",email:e.email,form:{nameLabel:"Nom",namePlaceholder:"Votre nom",emailLabel:"Email",emailPlaceholder:"votre@email.com",messageLabel:"Message",messagePlaceholder:"Votre message...",submitLabel:"Envoyer",sendingLabel:"Envoi en cours..."},messages:{success:"Message envoyé avec succès !",error:"Une erreur est survenue.",validationError:"Veuillez remplir tous les champs."}};if(!n)return t;const i=n.replace(/\r\n/g,`
`).replace(/\r/g,`
`),s=ge.load(i),o=s.form,r=s.messages;return{title:s.title||t.title,description:s.description||t.description,email:s.email||t.email,form:{nameLabel:(o==null?void 0:o.nameLabel)||t.form.nameLabel,namePlaceholder:(o==null?void 0:o.namePlaceholder)||t.form.namePlaceholder,emailLabel:(o==null?void 0:o.emailLabel)||t.form.emailLabel,emailPlaceholder:(o==null?void 0:o.emailPlaceholder)||t.form.emailPlaceholder,messageLabel:(o==null?void 0:o.messageLabel)||t.form.messageLabel,messagePlaceholder:(o==null?void 0:o.messagePlaceholder)||t.form.messagePlaceholder,submitLabel:(o==null?void 0:o.submitLabel)||t.form.submitLabel,sendingLabel:(o==null?void 0:o.sendingLabel)||t.form.sendingLabel},messages:{success:(r==null?void 0:r.success)||t.messages.success,error:(r==null?void 0:r.error)||t.messages.error,validationError:(r==null?void 0:r.validationError)||t.messages.validationError}}}const Gn=ln(),xu=ru(),yu=ou(),Su=au(),Cu=eu(),ju={title:"Blog",items:Wl()},Au={title:"Projets",items:Ht()},Lu={title:"Skills",items:an()},Pu={title:"Expérience",items:$l()},ku={title:"Formation",items:Xl()},lu=`${Gn.firstName} ${Gn.lastName}`,uu={title:lu,icon:"i-carbon-code"},cu=[{title:"À Propos",icon:"i-carbon-user",href:"/about"},{title:"Skills",icon:"i-carbon-assembly-cluster",href:"/skills"},{title:"Projets",icon:"i-carbon-cube",href:"/projects"},{title:"Experience",icon:"i-carbon-development",href:"/experience"},{title:"Formation",icon:"i-carbon-education",href:"/education"},{title:"Blog",icon:"i-carbon-blog",href:"/blog"},{title:"CV",icon:"i-carbon-document",href:"/resume"},{title:"Contact",icon:"i-carbon-email",href:"/contact"}],_u={left:uu,items:cu};export{Y as A,ju as B,Su as C,Pu as E,xu as H,_u as N,Au as P,yu as R,Lu as S,mu as a,vu as b,ku as c,bu as d,gu as e,Gi as f,zt as g,Cu as h,hu as i,L as j,qu as k,Vi as l,Gn as m,zi as n,ie as o,fu as p,Ui as q,Qi as r,xe as s};
