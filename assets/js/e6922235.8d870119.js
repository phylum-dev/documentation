"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[9843],{7798:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>h});var s=i(4848),t=i(8453);const o={},r="Phylum CLI Extensions",l={id:"cli/extensions/extension_overview",title:"Phylum CLI Extensions",description:"Overview",source:"@site/../docs/cli/extensions/extension_overview.md",sourceDirName:"cli/extensions",slug:"/cli/extensions/extension_overview",permalink:"/cli/extensions/extension_overview",draft:!1,unlisted:!1,editUrl:"https://github.com/phylum-dev/cli/edit/main/docs/extensions/extension_overview.md",tags:[],version:"current",lastUpdatedBy:"Charles Coggins",lastUpdatedAt:1703279877e3,frontMatter:{},sidebar:"docsSidebar",previous:{title:"phylum version",permalink:"/cli/commands/phylum_version"},next:{title:"Extension Quickstart",permalink:"/cli/extensions/extension_quickstart"}},c={},h=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2},{value:"Writing Extensions",id:"writing-extensions",level:2},{value:"Official Extensions",id:"official-extensions",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"phylum-cli-extensions",children:"Phylum CLI Extensions"})}),"\n",(0,s.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(n.p,{children:"Phylum CLI extensions are optional plugins for the CLI which provide additional\nfunctionality in a modular fashion."}),"\n",(0,s.jsxs)(n.p,{children:["Extensions are executed in a ",(0,s.jsx)(n.a,{href:"https://deno.land/",children:"Deno"})," JavaScript runtime and have access to\nPhylum's API for commonly used operations. The capability-based permission\nsystem, together with Deno's sandbox, ensures that extensions can only do what\nthey're supposed to."]}),"\n",(0,s.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsxs)(n.p,{children:["If you're interested in using existing Phylum CLI extensions, you can take a\nlook at the ",(0,s.jsx)(n.a,{href:"/cli/commands/phylum_extension",children:"CLI's extension documentation"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"writing-extensions",children:"Writing Extensions"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/cli/extensions/extension_quickstart",children:"Quickstart"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/cli/extensions/extension_manifest",children:"Manifest Format"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/cli/extensions/extension_api",children:"Extension API"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/cli/extensions/extension_example",children:"Example"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/cli/extensions/extension_sandboxing",children:"Extension Sandboxing"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/cli/extensions/extension_rest_api",children:"Direct Phylum API Requests"})}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"TIP:"})," More info"]}),"\n",(0,s.jsxs)(n.p,{children:["Additional how-to articles for the extension framework can be found\n",(0,s.jsx)(n.a,{href:"https://dev.to/phylum",children:"here"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"official-extensions",children:"Official Extensions"}),"\n",(0,s.jsxs)(n.p,{children:["Official Phylum CLI extensions can be found ",(0,s.jsx)(n.a,{href:"https://github.com/phylum-dev/cli/tree/main/extensions",children:"on GitHub"}),". These are a great place\nto get started if you want to try out some CLI extensions or write your own."]}),"\n",(0,s.jsx)(n.p,{children:"Additionally, many of the official extensions are distributed with the Phylum\nCLI and should already be available for use. The pre-installed extensions are:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/phylum-dev/cli/tree/main/extensions/npm",children:(0,s.jsx)(n.code,{children:"npm"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/phylum-dev/cli/tree/main/extensions/pip",children:(0,s.jsx)(n.code,{children:"pip"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/phylum-dev/cli/tree/main/extensions/poetry",children:(0,s.jsx)(n.code,{children:"poetry"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/phylum-dev/cli/tree/main/extensions/yarn",children:(0,s.jsx)(n.code,{children:"yarn"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/phylum-dev/cli/tree/main/extensions/bundle",children:(0,s.jsx)(n.code,{children:"bundle"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/phylum-dev/cli/tree/main/extensions/cargo",children:(0,s.jsx)(n.code,{children:"cargo"})})}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>l});var s=i(6540);const t={},o=s.createContext(t);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);