"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[2106],{9606:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var i=a(5893),n=a(1151);const o={},s="Webhook Exfil",r={id:"analytics/webhook_exfil",title:"Webhook Exfil",description:"Description",source:"@site/../docs/analytics/webhook_exfil.md",sourceDirName:"analytics",slug:"/analytics/webhook_exfil",permalink:"/analytics/webhook_exfil",draft:!1,unlisted:!1,editUrl:"https://github.com/phylum-dev/documentation/edit/main/docs/analytics/webhook_exfil.md",tags:[],version:"current",lastUpdatedBy:"Charles Coggins",lastUpdatedAt:1704321212,formattedLastUpdatedAt:"Jan 3, 2024",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Typosquatting",permalink:"/analytics/typosquatting"},next:{title:"Threat Feed",permalink:"/knowledge_base/threat_feed"}},c={},l=[{value:"Description",id:"description",level:2},{value:"Importance",id:"importance",level:2},{value:"Examples",id:"examples",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"webhook-exfil",children:"Webhook Exfil"}),"\n",(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(t.p,{children:["A ",(0,i.jsx)(t.a,{href:"https://discord.com/developers/docs/resources/webhook",children:"Discord webhook"})," allows an external service to send automated messages or notifications directly to a specific channel in a Discord server. This is a commonly used exfiltration technique used by a lot of recent stealer malware."]}),"\n",(0,i.jsx)(t.h2,{id:"importance",children:"Importance"}),"\n",(0,i.jsxs)(t.p,{children:["Discovering a hard-coded webhook within an open-source software package is an indication of potential malicious activity. When combined with a POST request to that webhook, it is highly likely to be a variant of credential-stealing malware. It's worth noting that most stealers are intended to operate during package installation. This means that if a user were to execute a ",(0,i.jsx)(t.code,{children:"pip install <package>"})," command in the case of PyPI, the malware would be triggered, making it critical to be aware of any attempts at webhook exfiltration before installing the package."]}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsxs)(t.p,{children:["The use of a Discord webhook as a method for data exfiltration is a relatively new technique that has been widely observed and previously documented in ",(0,i.jsx)(t.a,{href:"https://threatpost.com/malware-discord-webhooks/179605/",children:"publications"}),". Generally, these stealers are activated during package installation and easily spotted by a cursory glance at the code. However, in March 2023, Phylum released ",(0,i.jsx)(t.a,{href:"https://blog.phylum.io/phylum-discovers-npm-package-mathjs-min-contains-discord-token-grabber",children:"an article"})," outlining how attackers are now utilizing this method in a more subtle manner by concealing the stealer code deep within existing packages."]})]})}function h(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,t,a)=>{a.d(t,{Z:()=>r,a:()=>s});var i=a(7294);const n={},o=i.createContext(n);function s(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);