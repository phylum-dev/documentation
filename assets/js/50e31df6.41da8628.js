"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[8171],{2930:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var s=t(4848),i=t(8453);const r={},o="Phylum NuGet Registry",a={id:"artifact_repositories/nuget",title:"Phylum NuGet Registry",description:"The Phylum NuGet registry is based on NuGet's [Server API].",source:"@site/../docs/artifact_repositories/nuget.md",sourceDirName:"artifact_repositories",slug:"/artifact_repositories/nuget",permalink:"/artifact_repositories/nuget",draft:!1,unlisted:!1,editUrl:"https://github.com/phylum-dev/documentation/edit/main/docs/artifact_repositories/nuget.md",tags:[],version:"current",lastUpdatedBy:"Christian D\xfcrr",lastUpdatedAt:1732046764e3,frontMatter:{},sidebar:"docsSidebar",previous:{title:"Phylum NPM Registry",permalink:"/artifact_repositories/npm"},next:{title:"Phylum PyPI Registry",permalink:"/artifact_repositories/pypi"}},l={},c=[{value:"Configuration",id:"configuration",level:2},{value:"<code>dotnet</code>",id:"dotnet",level:3},{value:"<code>nuget</code>",id:"nuget",level:3}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"phylum-nuget-registry",children:"Phylum NuGet Registry"})}),"\n",(0,s.jsxs)(n.p,{children:["The Phylum NuGet registry is based on NuGet's ",(0,s.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/nuget/api/overview",children:"Server API"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,s.jsxs)(n.p,{children:["All configuration options will require a Phylum API key, since Phylum requires\nauthentication. You can find out how to generate one in our\n",(0,s.jsx)(n.a,{href:"/knowledge_base/api-keys#generate-an-api-key",children:"API Keys documentation"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["In the following examples, all API keys will be represented as\n",(0,s.jsx)(n.code,{children:"<PHYLUM_API_KEY>"}),", so make sure to replace them with your generated key."]}),"\n",(0,s.jsxs)(n.p,{children:["Additionally, if the default policy is not sufficient, a group can be passed to\nevaluate all packages against the group's policy. To do this, just replace\n",(0,s.jsx)(n.code,{children:"<PHYLUM_ORG>"})," and ",(0,s.jsx)(n.code,{children:"<PHYLUM_GROUP>"})," with the desired org and group name. The\nsupplied API key ",(0,s.jsx)(n.strong,{children:"must"})," have access to this group."]}),"\n",(0,s.jsxs)(n.p,{children:["If Phylum's default ",(0,s.jsx)(n.a,{href:"/knowledge_base/policy",children:"policy"})," is sufficient, you can omit the username from the\nauthentication details."]}),"\n",(0,s.jsx)(n.h3,{id:"dotnet",children:(0,s.jsx)(n.code,{children:"dotnet"})}),"\n",(0,s.jsx)(n.p,{children:"To use the Phylum NuGet registry, the original nuget.org registry first needs to\nbe disabled:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"dotnet nuget disable source nuget.org\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Once the official registry is disabled, the Phylum source can be added. If\nyou're not running Windows, you'll also have to add the\n",(0,s.jsx)(n.code,{children:"--store-password-in-clear-text"})," flag."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"dotnet nuget add source https://nuget.phylum.io/v3/index.json \\\n    --protocol-version 3 \\\n    --name Phylum \\\n    --valid-authentication-types basic \\\n    --username <PHYLUM_ORG>/<PHYLUM_GROUP> \\\n    --password <PHYLUM_API_KEY>\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u26a0\ufe0f ",(0,s.jsx)(n.strong,{children:"WARNING"})," \u26a0\ufe0f"]}),"\n",(0,s.jsx)(n.p,{children:"Do not accidentally save your token into your shell history."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["A blocked package will show up in ",(0,s.jsx)(n.code,{children:"dotnet"})," output as missing:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"/Demo.csproj : error NU1102: Unable to find package Example.Vulnerable with version (= 1.2.3)\n/Demo.csproj : error NU1102:   - Found 42 version(s) in Phylum [ Nearest version: 2.0.0 ]\n"})}),"\n",(0,s.jsx)(n.p,{children:"If a version range is accepted by the manifest, the package manager will\nautomatically attempt to use a version that passes Phylum's policy."}),"\n",(0,s.jsx)(n.h3,{id:"nuget",children:(0,s.jsx)(n.code,{children:"nuget"})}),"\n",(0,s.jsx)(n.p,{children:"To use the Phylum NuGet registry, the original nuget.org registry first needs to\nbe disabled:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"nuget sources Disable -Name nuget.org\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Once the official registry is disabled, the Phylum source can be added. If\nyou're not running Windows, you'll also have to add the\n",(0,s.jsx)(n.code,{children:"--store-password-in-clear-text"})," flag."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"nuget sources Add \\\n    -Source https://nuget.phylum.io/v3/index.json\\\n    -ProtocolVersion 3 \\\n    -Name Phylum\n    -UserName <PHYLUM_ORG>/<PHYLUM_GROUP>\n    -Password <PHYLUM_API_KEY>\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u26a0\ufe0f ",(0,s.jsx)(n.strong,{children:"WARNING"})," \u26a0\ufe0f"]}),"\n",(0,s.jsx)(n.p,{children:"Do not accidentally save your token into your shell history."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["A blocked package will show up in ",(0,s.jsx)(n.code,{children:"nuget"})," output as missing:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"Package 'Example.Vulnerable 1.2.3' is not found in the following primary source(s): 'https://nuget.phylum.io/v3/index.json'. Please verify all your online package sources are available (OR) package id, version are specified correctly.\n"})}),"\n",(0,s.jsx)(n.p,{children:"If a version range is accepted by the manifest, the package manager will\nautomatically attempt to use a version that passes Phylum's policy."})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var s=t(6540);const i={},r=s.createContext(i);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);