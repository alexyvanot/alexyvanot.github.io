import{A as e}from"./D-Vfbwy0.js";const p=(o,...n)=>{const r={...o};return Object.keys(r).forEach(a=>{n.includes(a)&&delete r[a]}),r},m=`# Svelte

---

[\`Svelte\`](https://svelte.dev/) is a free and open-source front end component framework or language created by Rich Harris and maintained by the Svelte core team members. Svelte is not a monolithic JavaScript library imported by applications: instead, Svelte compiles HTML templates to specialized code that manipulates the DOM directly, which may reduce the size of transferred files and give better client performance. Application code is also processed by the compiler, inserting calls to automatically recompute data and re-render UI elements when the data they depend on is modified. This also avoids the overhead associated with runtime intermediate representations, such as virtual DOM, unlike traditional frameworks (such as React and Vue) which carry out the bulk of their work at runtime, i.e. in the browser.

The compiler itself is written in TypeScript. Its source code is licensed under MIT License and hosted on GitHub.

<br/>

Svelte is :

- compiled : Svelte shifts as much work as possible out of the browser and into your build step. No more manual optimisations — just faster, more efficient apps.
- compact : Write breathtakingly concise components using languages you already know — HTML, CSS and JavaScript. Oh, and your application bundles will be tiny as well.
- complete : Built-in scoped styling, state management, motion primitives, form bindings and more — don't waste time trawling npm for the bare essentials. It's all here.

<br/>

## Example

\`\`\`ts
<script>
    let count = 1;
    $: doubled = count * 2;
<\/script>

<p>{count} * 2 = {doubled}</p>

<button on:click={() => count = count + 1}>Count</button>

// comment here
\`\`\`

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

> Svelte is a free and open-source front end component framework or language created by Rich Harris and maintained by the Svelte core team members.
`,s=o=>o,d=[s({name:"Programming Languages",slug:"pro-lang"}),s({name:"Frameworks",slug:"framework"}),s({name:"Libraries",slug:"library"}),s({name:"Languages",slug:"lang"}),s({name:"Databases",slug:"db"}),s({name:"ORMs",slug:"orm"}),s({name:"DevOps",slug:"devops"}),s({name:"Testing",slug:"test"}),s({name:"Dev Tools",slug:"devtools"}),s({name:"Markup & Style",slug:"markup-style"}),s({name:"Design",slug:"design"}),s({name:"Soft Skills",slug:"soft"})],t=o=>{const n=p(o,"category");return o.category&&(n.category=d.find(r=>r.slug===o.category)),n},h=(...o)=>g.filter(n=>o.length===0?!0:o.includes(n.slug)),v=o=>{const n=[],r=[];return g.forEach(a=>{if(o.trim()&&!a.name.toLowerCase().includes(o.trim().toLowerCase()))return;if(!a.category){r.push(a);return}let i=n.find(l=>{var c;return l.category.slug===((c=a.category)==null?void 0:c.slug)});i||(i={items:[],category:a.category},n.push(i)),i.items.push(a)}),r.length!==0&&n.push({category:{name:"Others",slug:"others"},items:r}),n.sort((a,i)=>{const l=d.findIndex(u=>u.slug===a.category.slug),c=d.findIndex(u=>u.slug===i.category.slug);return l===-1?1:c===-1?-1:l-c}),n.forEach(a=>{a.items.sort((i,l)=>i.name.localeCompare(l.name))}),n},y="Skills",g=[t({slug:"js",color:"yellow",description:"Langage de programmation principal utilisé pour les interfaces interactives, côté client comme côté serveur avec Node.js.",logo:e.JavaScript,name:"JavaScript",category:"pro-lang"}),t({slug:"ts",color:"blue",description:"Superset de JavaScript typé statiquement. Utilisé pour des projets robustes avec des IDE performants.",logo:e.TypeScript,name:"TypeScript",category:"pro-lang"}),t({slug:"java",color:"red",description:"Langage orienté objet utilisé principalement dans mes projets backend chez Synchrotron SOLEIL.",logo:e.Java,name:"Java",category:"pro-lang"}),t({slug:"svelte",color:"orange",description:m,logo:e.Svelte,name:"Svelte",category:"framework"}),t({slug:"reactjs",color:"cyan",description:"Bibliothèque JavaScript pour créer des interfaces utilisateur réactives. Utilisé professionnellement.",logo:e.ReactJs,name:"React.js",category:"library"}),t({slug:"sqlite",color:"gray",description:"Base de données légère intégrée. Idéale pour des projets locaux ou embarqués.",logo:e.SQLite,name:"SQLite",category:"db"}),t({slug:"docker",color:"blue",description:"Conteneurisation d’applications. Utilisé pour créer des environnements de test ou déployer des apps.",logo:e.Docker,name:"Docker",category:"devops"}),t({slug:"ci-cd",color:"gray",description:"Mise en place de pipelines CI/CD via GitLab. Automatisation des tests et déploiement.",logo:e.CICD,name:"CI/CD",category:"devops"}),t({slug:"html",color:"orange",description:"Structure des pages web. Maîtrisé depuis mes débuts.",logo:e.HTML,name:"HTML",category:"markup-style"}),t({slug:"css",color:"blue",description:"Mise en forme des interfaces. Utilisé avec Sass ou Tailwind selon les projets.",logo:e.CSS,name:"CSS",category:"markup-style"}),t({slug:"sass",color:"pink",description:"Préprocesseur CSS qui facilite la factorisation et la gestion de grands projets.",logo:e.Sass,name:"Sass",category:"markup-style"}),t({slug:"git",color:"orange",description:"Système de versionnement utilisé dans tous mes projets. Workflow GitLab et GitHub.",logo:e.Git,name:"Git",category:"devtools"}),t({slug:"linux",color:"gray",description:"Utilisation quotidienne de serveurs Debian et Red Hat au Synchrotron.",logo:e.Linux,name:"Linux",category:"devtools"}),t({slug:"teamwork",color:"green",description:"Collaboration efficace dans des équipes pluridisciplinaires. Communication claire et partage de responsabilités.",logo:e.Teamwork,name:"Travail en équipe",category:"soft"}),t({slug:"autonomy",color:"blue",description:"Capacité à apprendre par moi-même, à m’auto-former rapidement, et à être force de proposition.",logo:e.Autonomy,name:"Autonomie & apprentissage",category:"soft"}),t({slug:"creativity",color:"purple",description:"Création d’expériences originales, notamment en réalité virtuelle ou dans la conception d’UI.",logo:e.Creativity,name:"Créativité",category:"soft"})],b={title:y,items:g};export{b as S,h as a,v as g};
