"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[827],{668:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>x,frontMatter:()=>o,metadata:()=>a,toc:()=>r});var i=t(4848),s=t(8453);const o={},l="Extension Quickstart",a={id:"cli/extensions/extension_quickstart",title:"Extension Quickstart",description:"Creating an extension",source:"@site/../docs/cli/extensions/extension_quickstart.md",sourceDirName:"cli/extensions",slug:"/cli/extensions/extension_quickstart",permalink:"/cli/extensions/extension_quickstart",draft:!1,unlisted:!1,editUrl:"https://github.com/phylum-dev/cli/edit/main/docs/extensions/extension_quickstart.md",tags:[],version:"current",lastUpdatedBy:"Charles Coggins",lastUpdatedAt:1703279877e3,frontMatter:{},sidebar:"docsSidebar",previous:{title:"Phylum CLI Extensions",permalink:"/cli/extensions/extension_overview"},next:{title:"Extension Manifest Format",permalink:"/cli/extensions/extension_manifest"}},c={},r=[{value:"Creating an extension",id:"creating-an-extension",level:2},{value:"Extension structure",id:"extension-structure",level:2},{value:"Installation",id:"installation",level:2},{value:"Execution",id:"execution",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"extension-quickstart",children:"Extension Quickstart"}),"\n",(0,i.jsx)(n.h2,{id:"creating-an-extension",children:"Creating an extension"}),"\n",(0,i.jsxs)(n.p,{children:["The best way to get started with writing your own Phylum CLI extension, is to\ngenerate an extension skeleton using the ",(0,i.jsx)(n.code,{children:"phylum extension new"})," subcommand.\nWe'll use ",(0,i.jsx)(n.code,{children:"my-extension"})," as an example in this guide:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"phylum extension new my-extension\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Once finished, we should find a new directory called ",(0,i.jsx)(n.code,{children:"my-extension"})," in our\ncurrent working directory, containing the files ",(0,i.jsx)(n.code,{children:"main.ts"})," and ",(0,i.jsx)(n.code,{children:"PhylumExt.toml"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"extension-structure",children:"Extension structure"}),"\n",(0,i.jsxs)(n.p,{children:["Extensions always contain at least two files, the manifest describing the\nextension (",(0,i.jsx)(n.code,{children:"PhylumExt.toml"}),"), and the entrypoint where the extension's execution\nwill begin. Any additional source files can be included in the extension\ndirectory and imported from the entrypoint."]}),"\n",(0,i.jsxs)(n.p,{children:["The manifest file contains metadata about the extension beyond its executable\nsource code. All available options can be found in ",(0,i.jsx)(n.a,{href:"/cli/extensions/extension_manifest",children:"the manifest format"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,i.jsx)(n.p,{children:"Since the generated extension skeleton is a fully functional extension, we can\ngo ahead and install it right away:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"phylum extension install ./my-extension\n"})}),"\n",(0,i.jsx)(n.h2,{id:"execution",children:"Execution"}),"\n",(0,i.jsx)(n.p,{children:"Once successfully installed, our extension can be executed by using its name as\na subcommand for the phylum CLI:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shellsession",children:"$ phylum my-extension\nHello, World!\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"Hello, World!"})," message confirms that our extension is working correctly."]})]})}function x(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>a});var i=t(6540);const s={},o=i.createContext(s);function l(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);