"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[8110],{7318:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var n=t(5893),s=t(1151);const a={},r="IP Address Identification",o={id:"analytics/ip_identification",title:"IP Address Identification",description:"Description",source:"@site/../docs/analytics/ip_identification.md",sourceDirName:"analytics",slug:"/analytics/ip_identification",permalink:"/analytics/ip_identification",draft:!1,unlisted:!1,editUrl:"https://github.com/phylum-dev/documentation/edit/main/docs/analytics/ip_identification.md",tags:[],version:"current",lastUpdatedBy:"Charles Coggins",lastUpdatedAt:1704321212,formattedLastUpdatedAt:"Jan 3, 2024",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Invokes Native Code",permalink:"/analytics/invokes_native_code"},next:{title:"Minimal Code",permalink:"/analytics/minimal_code"}},c={},d=[{value:"Description",id:"description",level:2},{value:"Importance",id:"importance",level:2},{value:"Examples",id:"examples",level:2}];function l(e){const i={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",p:"p",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"ip-address-identification",children:"IP Address Identification"}),"\n",(0,n.jsx)(i.h2,{id:"description",children:"Description"}),"\n",(0,n.jsxs)(i.p,{children:["An ",(0,n.jsx)(i.a,{href:"https://en.wikipedia.org/wiki/IP_address",children:"IP address"})," (",(0,n.jsx)(i.a,{href:"https://en.wikipedia.org/wiki/Internet_Protocol",children:"Internet Protocol"})," address) that is found in source code should raise suspicion, because it is a common technique that evades the usual ",(0,n.jsx)(i.a,{href:"https://en.wikipedia.org/wiki/Domain_Name_System",children:"DNS"})," lookup for a network resource. The particular IP address and the context in which it is found determines whether or not it is malicious."]}),"\n",(0,n.jsx)(i.p,{children:"IP addresses appearing in source code should be carefully scrutinized to insure that a nefarious actor is not reaching out to a network resource that could deliver harmful material."}),"\n",(0,n.jsx)(i.h2,{id:"importance",children:"Importance"}),"\n",(0,n.jsxs)(i.p,{children:["IP addresses ",(0,n.jsx)(i.em,{children:"may"})," have legitimate uses, but they are commonly found in malware."]}),"\n",(0,n.jsx)(i.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(i.p,{children:"While there can be legitimate uses for IP addresses appearing in source code, it is uncommon for a software developer to include direct IP addresses in source code."}),"\n",(0,n.jsxs)(i.p,{children:["An example of a legitimate use is a developer directly including the IP address for a DNS server, such as Google at ",(0,n.jsx)(i.code,{children:"8.8.8.8"}),"."]}),"\n",(0,n.jsxs)(i.p,{children:["On the other hand, direct IP addresses in source code can be indicative of malicious intent. Analysis of a 2017 malware campaign (see ",(0,n.jsx)(i.a,{href:"https://www.cisa.gov/uscert/ncas/alerts/TA17-318B",children:"this report"})," from ",(0,n.jsx)(i.a,{href:"https://www.cisa.gov/uscert",children:"US-CERT"}),") revealed actors ",(0,n.jsx)(i.a,{href:"https://en.wikipedia.org/wiki/Hard_coding",children:"hard coding"})," IP addresses that were used to connect victims to their malicious network infrastructure."]}),"\n",(0,n.jsx)(i.p,{children:"IP addresses that do not have a clear and obvious connection to the primary functionality of source code should be treated with suspicion until their legitimacy can be established."})]})}function h(e={}){const{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},1151:(e,i,t)=>{t.d(i,{Z:()=>o,a:()=>r});var n=t(7294);const s={},a=n.createContext(s);function r(e){const i=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(a.Provider,{value:i},e.children)}}}]);