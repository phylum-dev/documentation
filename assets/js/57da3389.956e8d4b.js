"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[5493],{292:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>d,frontMatter:()=>t,metadata:()=>a,toc:()=>c});var i=s(4848),l=s(8453);const t={},r="Quickstart",a={id:"cli/quickstart",title:"Quickstart",description:"The Phylum command line interface (CLI) allows users to submit their project package dependencies to Phylum's API for analysis. Currently pre-built binaries for Linux and macOS are available. On Windows, we recommend using the Linux binaries under WSL. See the alternate installation methods for more options.",source:"@site/../docs/cli/quickstart.md",sourceDirName:"cli",slug:"/cli/quickstart",permalink:"/cli/quickstart",draft:!1,unlisted:!1,editUrl:"https://github.com/phylum-dev/cli/edit/main/docs/quickstart.md",tags:[],version:"current",lastUpdatedBy:"Charles Coggins",lastUpdatedAt:1709142576e3,frontMatter:{},sidebar:"docsSidebar",previous:{title:"Changelog",permalink:"/home/changelog"},next:{title:"Alternate Installation Methods",permalink:"/cli/alternate_install"}},o={},c=[{value:"Install <code>phylum</code> CLI",id:"install-phylum-cli",level:2},{value:"Install on Linux",id:"install-on-linux",level:3},{value:"Install on macOS",id:"install-on-macos",level:3},{value:"Quickstart for Linux or macOS",id:"quickstart-for-linux-or-macos",level:2},{value:"License",id:"license",level:2},{value:"Discord",id:"discord",level:2},{value:"Questions/Issues",id:"questionsissues",level:2}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"quickstart",children:"Quickstart"}),"\n",(0,i.jsxs)(n.p,{children:["The Phylum command line interface (CLI) allows users to submit their project package dependencies to ",(0,i.jsx)(n.a,{href:"https://phylum.io",children:"Phylum's"})," API for analysis. Currently ",(0,i.jsx)(n.a,{href:"https://github.com/phylum-dev/cli/releases",children:"pre-built binaries"})," for Linux and macOS are available. On Windows, we recommend using the Linux binaries under ",(0,i.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/windows/wsl/",children:"WSL"}),". See the ",(0,i.jsx)(n.a,{href:"/cli/alternate_install",children:"alternate installation methods"})," for more options."]}),"\n",(0,i.jsxs)(n.h2,{id:"install-phylum-cli",children:["Install ",(0,i.jsx)(n.code,{children:"phylum"})," CLI"]}),"\n",(0,i.jsx)(n.h3,{id:"install-on-linux",children:"Install on Linux"}),"\n",(0,i.jsx)(n.p,{children:"Install on Linux with the following command:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"curl https://sh.phylum.io/ | sh -\n"})}),"\n",(0,i.jsx)(n.h3,{id:"install-on-macos",children:"Install on macOS"}),"\n",(0,i.jsxs)(n.p,{children:["On macOS, we recommend installing phylum with ",(0,i.jsx)(n.a,{href:"https://brew.sh/",children:"Homebrew"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"brew install phylum\n"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note:"})," When using Homebrew, ",(0,i.jsx)(n.a,{href:"https://github.com/phylum-dev/cli/tree/main/extensions",children:"official extensions"})," must be installed separately."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"quickstart-for-linux-or-macos",children:"Quickstart for Linux or macOS"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/cli/commands/phylum_auth_register",children:"Register"})," for an account (if you don't already have one)"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"phylum auth register\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/cli/commands/phylum_auth_login",children:"Authenticate"})," with Phylum"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"phylum auth login\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/cli/commands/phylum_init",children:"Setup your Phylum project"})," in your project directory"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"phylum init\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/cli/commands/phylum_analyze",children:"Submit your lockfiles and manifests"})," to ",(0,i.jsx)(n.a,{href:"/cli/analyzing_dependencies",children:"analyze dependencies"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"phylum analyze\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["(Optional) View the analysis results in the ",(0,i.jsx)(n.a,{href:"https://app.phylum.io/auth/login",children:"Phylum UI"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"license",children:"License"}),"\n",(0,i.jsx)(n.p,{children:"Copyright (C) 2022  Phylum, Inc."}),"\n",(0,i.jsx)(n.p,{children:"This program is free software: you can redistribute it and/or modify it under\nthe terms of the GNU General Public License as published by the Free Software\nFoundation, either version 3 of the License or any later version."}),"\n",(0,i.jsx)(n.p,{children:"This program is distributed in the hope that it will be useful, but WITHOUT\nANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\nFOR A PARTICULAR PURPOSE. See the GNU General Public License for more details."}),"\n",(0,i.jsxs)(n.p,{children:["You should have received a copy of the GNU General Public License along with\nthis program. If not, see ",(0,i.jsx)(n.a,{href:"https://www.gnu.org/licenses/gpl.html",children:"https://www.gnu.org/licenses/gpl.html"})," or write to\n",(0,i.jsx)(n.code,{children:"phylum@phylum.io"})," or ",(0,i.jsx)(n.code,{children:"engineering@phylum.io"})]}),"\n",(0,i.jsx)(n.h2,{id:"discord",children:"Discord"}),"\n",(0,i.jsxs)(n.p,{children:["Join us on the ",(0,i.jsx)(n.a,{href:"https://discord.gg/c9QnknWxm3",children:"Phylum Community Discord"}),"!"]}),"\n",(0,i.jsx)(n.h2,{id:"questionsissues",children:"Questions/Issues"}),"\n",(0,i.jsx)(n.p,{children:"Please contact Phylum with any questions or issues using the CLI tool."}),"\n",(0,i.jsxs)(n.p,{children:["Email: ",(0,i.jsx)(n.a,{href:"mailto:support@phylum.io",children:"support@phylum.io"})]})]})}function d(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>a});var i=s(6540);const l={},t=i.createContext(l);function r(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);