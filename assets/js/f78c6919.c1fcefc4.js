"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[2508],{5001:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var o=n(4848),a=n(8453);const i={},r="Remote Executable",s={id:"analytics/remote_exe_ref_or_run",title:"Remote Executable",description:"Description",source:"@site/../docs/analytics/remote_exe_ref_or_run.md",sourceDirName:"analytics",slug:"/analytics/remote_exe_ref_or_run",permalink:"/analytics/remote_exe_ref_or_run",draft:!1,unlisted:!1,editUrl:"https://github.com/phylum-dev/documentation/edit/main/docs/analytics/remote_exe_ref_or_run.md",tags:[],version:"current",lastUpdatedBy:"Charles Coggins",lastUpdatedAt:1705602214e3,frontMatter:{},sidebar:"docsSidebar",previous:{title:"Python Build Hook",permalink:"/analytics/python_build_hook"},next:{title:"Ruby Install Hooks",permalink:"/analytics/ruby_install_hooks"}},c={},l=[{value:"Description",id:"description",level:2},{value:"Importance",id:"importance",level:2},{value:"Examples",id:"examples",level:2}];function u(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"remote-executable",children:"Remote Executable"}),"\n",(0,o.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,o.jsxs)(t.p,{children:["An ",(0,o.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Executable",children:"executable file"})," is simply a compiled binary file intended to be run or executed on a host machine that performs tasks according to the encoded instructions."]}),"\n",(0,o.jsx)(t.h2,{id:"importance",children:"Importance"}),"\n",(0,o.jsx)(t.p,{children:"Executables on their own are not inherently dangerous. In fact, most software running on your machine right now are probably executable files in action. However, it is highly unusual for packages found in the open source ecosystem to contain references to URLs that point to executable files and it could be indicative of a malware dropper. It is even more unusual, and certainly highly suspicious, if a package reaches out to a URL containing an executable, proceeds to write that file to your disk, and then attempts to execute it."}),"\n",(0,o.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,o.jsxs)(t.p,{children:["In August of 2022, researchers discovered a dozen malicious packages on the PyPI repository attempting a typosquatting attack. If installed, these packages would grab an executable payload from a malicious URL, save it to disk, and then execute the file--all from within the ",(0,o.jsx)(t.code,{children:"setup.py"}),". In one observed case the executable would then recruit the host machine into a DDoS campaign against a Russian Counter-Strike server."]})]})}function d(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>s});var o=n(6540);const a={},i=o.createContext(a);function r(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);