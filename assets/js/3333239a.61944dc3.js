"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[8252],{6165:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var t=n(4848),s=n(8453);const o={},r="Phylum PyPI Registry",a={id:"artifact_repositories/pypi",title:"Phylum PyPI Registry",description:"The Phylum PyPI registry is based on Python's [Simple repository API].",source:"@site/../docs/artifact_repositories/pypi.md",sourceDirName:"artifact_repositories",slug:"/artifact_repositories/pypi",permalink:"/artifact_repositories/pypi",draft:!1,unlisted:!1,editUrl:"https://github.com/phylum-dev/documentation/edit/main/docs/artifact_repositories/pypi.md",tags:[],version:"current",lastUpdatedBy:"Christian D\xfcrr",lastUpdatedAt:1730741225e3,frontMatter:{},sidebar:"docsSidebar",previous:{title:"Phylum NuGet Registry",permalink:"/artifact_repositories/nuget"},next:{title:"Phylum RubyGems Registry",permalink:"/artifact_repositories/rubygems"}},l={},c=[{value:"Configuration",id:"configuration",level:2},{value:"<code>pip</code>",id:"pip",level:3},{value:"<code>poetry</code>",id:"poetry",level:3}];function p(e){const i={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.header,{children:(0,t.jsx)(i.h1,{id:"phylum-pypi-registry",children:"Phylum PyPI Registry"})}),"\n",(0,t.jsxs)(i.p,{children:["The Phylum PyPI registry is based on Python's ",(0,t.jsx)(i.a,{href:"https://packaging.python.org/en/latest/specifications/simple-repository-api/",children:"Simple repository API"}),"."]}),"\n",(0,t.jsx)(i.h2,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsxs)(i.p,{children:["All configuration options will require a Phylum API key, since Phylum requires\nauthentication. You can find out how to generate one in our\n",(0,t.jsx)(i.a,{href:"/knowledge_base/api-keys#generate-an-api-key",children:"API Keys documentation"}),"."]}),"\n",(0,t.jsxs)(i.p,{children:["In the following examples, all API keys will be represented as\n",(0,t.jsx)(i.code,{children:"<PHYLUM_API_KEY>"}),", so make sure to replace them with your generated key."]}),"\n",(0,t.jsxs)(i.p,{children:["Additionally, if the default policy is not sufficient, a group can be passed to\nevaluate all packages against the group's policy. To do this, just replace\n",(0,t.jsx)(i.code,{children:"<PHYLUM_ORG>"})," and ",(0,t.jsx)(i.code,{children:"<PHYLUM_GROUP>"})," with the desired org and group name. The\nsupplied API key ",(0,t.jsx)(i.strong,{children:"must"})," have access to this group."]}),"\n",(0,t.jsxs)(i.p,{children:["If Phylum's default ",(0,t.jsx)(i.a,{href:"/knowledge_base/policy",children:"policy"})," is sufficient, you can omit the username from the\nauthentication details."]}),"\n",(0,t.jsx)(i.h3,{id:"pip",children:(0,t.jsx)(i.code,{children:"pip"})}),"\n",(0,t.jsxs)(i.p,{children:["The easiest way to install a package using the Phylum PyPI registry is using\n",(0,t.jsx)(i.code,{children:"pip"}),"'s ",(0,t.jsx)(i.code,{children:"--index-url"})," option:"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-sh",children:"pip install --index-url https://<PHYLUM_ORG>%2F<PHYLUM_GROUP>:<PHYLUM_API_KEY>@pypi.phylum.io/simple/ <requirement specifier>\n"})}),"\n",(0,t.jsxs)(i.p,{children:["To make this permanent for all ",(0,t.jsx)(i.code,{children:"pip"})," invocations, you can add it to the ",(0,t.jsx)(i.code,{children:"pip"}),"\nconfiguration:"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-sh",children:"pip config set global.index-url https://<PHYLUM_ORG>%2F<PHYLUM_GROUP>:<PHYLUM_API_KEY>@pypi.phylum.io/simple/\n"})}),"\n",(0,t.jsxs)(i.blockquote,{children:["\n",(0,t.jsxs)(i.p,{children:["\u26a0\ufe0f ",(0,t.jsx)(i.strong,{children:"WARNING"})," \u26a0\ufe0f"]}),"\n",(0,t.jsx)(i.p,{children:"Do not accidentally save your token into your shell history."}),"\n"]}),"\n",(0,t.jsxs)(i.p,{children:["A blocked package will show up in ",(0,t.jsx)(i.code,{children:"pip"})," output as missing:"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-text",children:"ERROR: Could not find a version that satisfies the requirement <malicious> (from versions: none)\nERROR: No matching distribution found for <malicious>\n"})}),"\n",(0,t.jsx)(i.p,{children:"If a version range is accepted by the manifest, the package manager will\nautomatically attempt to use a version that passes Phylum's policy."}),"\n",(0,t.jsx)(i.h3,{id:"poetry",children:(0,t.jsx)(i.code,{children:"poetry"})}),"\n",(0,t.jsxs)(i.p,{children:["With Poetry, the source URL can be configured per-project in the\n",(0,t.jsx)(i.code,{children:"pyproject.toml"})," file by using the following commands from within the project\ndirectory:"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-sh",children:'poetry source add phylum https://pypi.phylum.io/simple/\npoetry config http-basic.phylum "<PHYLUM_ORG>%2F<PHYLUM_GROUP>" "<PHYLUM_API_KEY>"\n'})}),"\n",(0,t.jsxs)(i.blockquote,{children:["\n",(0,t.jsxs)(i.p,{children:["\u26a0\ufe0f ",(0,t.jsx)(i.strong,{children:"WARNING"})," \u26a0\ufe0f"]}),"\n",(0,t.jsx)(i.p,{children:"Do not accidentally save your token into your shell history."}),"\n"]}),"\n",(0,t.jsxs)(i.p,{children:["A blocked package will show up in ",(0,t.jsx)(i.code,{children:"poetry"})," output as missing:"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-text",children:"Could not find a matching version of package <malicious>\n"})}),"\n",(0,t.jsx)(i.p,{children:"If a version range is accepted by the manifest, the package manager will\nautomatically attempt to use a version that passes Phylum's policy."})]})}function d(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},8453:(e,i,n)=>{n.d(i,{R:()=>r,x:()=>a});var t=n(6540);const s={},o=t.createContext(s);function r(e){const i=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(o.Provider,{value:i},e.children)}}}]);