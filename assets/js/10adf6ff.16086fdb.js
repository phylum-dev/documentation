"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[8531],{2545:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>a,frontMatter:()=>c,metadata:()=>d,toc:()=>t});var s=i(4848),l=i(8453);const c={},r="Lockfile Generation",d={id:"cli/lockfile_generation",title:"Lockfile Generation",description:"Lockfiles can be directly parsed and analyzed by Phylum's CLI. However, since",source:"@site/../docs/cli/lockfile_generation.md",sourceDirName:"cli",slug:"/cli/lockfile_generation",permalink:"/cli/lockfile_generation",draft:!1,unlisted:!1,editUrl:"https://github.com/phylum-dev/cli/edit/main/docs/lockfile_generation.md",tags:[],version:"current",lastUpdatedBy:"Christian D\xfcrr",lastUpdatedAt:1707509941e3,frontMatter:{},sidebar:"docsSidebar",previous:{title:"Supported Lockfiles",permalink:"/cli/supported_lockfiles"},next:{title:"Analyzing Dependencies",permalink:"/cli/analyzing_dependencies"}},o={},t=[{value:"Lockfile generators",id:"lockfile-generators",level:2},{value:"Lockfile detection",id:"lockfile-detection",level:2},{value:"Lockifests",id:"lockifests",level:2},{value:"Sandboxing",id:"sandboxing",level:2},{value:"Example scenario",id:"example-scenario",level:2}];function h(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"lockfile-generation",children:"Lockfile Generation"}),"\n",(0,s.jsx)(n.p,{children:"Lockfiles can be directly parsed and analyzed by Phylum's CLI. However, since\nmanifest files only specify loose version requirements, it is necessary for the\nCLI to internally generate the corresponding lockfile."}),"\n",(0,s.jsxs)(n.p,{children:["No lockfile generation will take place if the ",(0,s.jsx)(n.code,{children:"--no-generation"})," CLI flag is\npassed to ",(0,s.jsx)(n.a,{href:"/cli/commands/phylum_parse",children:(0,s.jsx)(n.code,{children:"phylum parse"})})," or ",(0,s.jsx)(n.a,{href:"/cli/commands/phylum_analyze",children:(0,s.jsx)(n.code,{children:"phylum analyze"})}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"lockfile-generators",children:"Lockfile generators"}),"\n",(0,s.jsx)(n.p,{children:"The following table shows the supported manifest files for each lockfile type\nand which tools must be installed to facilitate automatic lockfile generation:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Lockfile type"}),(0,s.jsx)(n.th,{children:"Manifests"}),(0,s.jsx)(n.th,{children:"Required tool"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"npm"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"package.json"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"https://nodejs.org",children:(0,s.jsx)(n.code,{children:"npm"})})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"yarn"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"package.json"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"https://yarnpkg.com",children:(0,s.jsx)(n.code,{children:"yarn"})})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"pnpm"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"package.json"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"https://pnpm.io",children:(0,s.jsx)(n.code,{children:"pnpm"})})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"pip"})}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"requirements*.txt"})," ",(0,s.jsx)(n.br,{})," ",(0,s.jsx)(n.code,{children:"requirements.in"})," ",(0,s.jsx)(n.br,{})," ",(0,s.jsx)(n.code,{children:"setup.py"})," ",(0,s.jsx)(n.br,{})," ",(0,s.jsx)(n.code,{children:"pyproject.toml"})]}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.a,{href:"https://pip.pypa.io",children:(0,s.jsx)(n.code,{children:"pip"})})," version 23.0.0+"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"pipenv"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"Pipfile"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"https://github.com/pypa/pipenv",children:(0,s.jsx)(n.code,{children:"pipenv"})})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"poetry"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"pyproject.toml"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"https://python-poetry.org",children:(0,s.jsx)(n.code,{children:"poetry"})})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"gem"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"Gemfile"})}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"bundle"})," (from ",(0,s.jsx)(n.a,{href:"https://bundler.io",children:"Bundler"}),")"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"mvn"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"pom.xml"})}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"mvn"})," (from ",(0,s.jsx)(n.a,{href:"https://maven.apache.org",children:"Maven"}),")"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"gradle"})}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"build.gradle"})," ",(0,s.jsx)(n.br,{})," ",(0,s.jsx)(n.code,{children:"build.gradle.kts"})]}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"https://gradle.org",children:(0,s.jsx)(n.code,{children:"gradle"})})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"go"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"go.mod"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"https://go.dev",children:(0,s.jsx)(n.code,{children:"go"})})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"cargo"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"Cargo.toml"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"https://www.rust-lang.org",children:(0,s.jsx)(n.code,{children:"cargo"})})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"nugetlock"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"*.csproj"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"https://dotnet.microsoft.com",children:(0,s.jsx)(n.code,{children:"dotnet"})})})]})]})]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"TIP:"})}),"\n",(0,s.jsx)(n.p,{children:"If no type is specified for files which can be handled by multiple generators,\nthe most common tool will be used:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"package.json"})," will use ",(0,s.jsx)(n.code,{children:"npm"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"pyproject.toml"})," will use ",(0,s.jsx)(n.code,{children:"pip"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["This can be overridden on the command line with the ",(0,s.jsx)(n.code,{children:"--type"})," (",(0,s.jsx)(n.code,{children:"-t"}),") option. For example:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"phylum analyze -t yarn package.json\n"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"lockfile-detection",children:"Lockfile detection"}),"\n",(0,s.jsx)(n.p,{children:"The Phylum CLI prefers to work directly with lockfiles if they are available. So in a few cases, the CLI will\nautomatically switch and use the corresponding lockfile."}),"\n",(0,s.jsxs)(n.p,{children:["First, if a user runs ",(0,s.jsx)(n.code,{children:"parse"})," or ",(0,s.jsx)(n.code,{children:"analyze"})," on a manifest file without specifying a lockfile type, the Phylum CLI will\nopportunistically switch to the lockfile if it is available in the same directory. For example, ",(0,s.jsx)(n.code,{children:"phylum analyze go.mod"}),"\nwill automatically switch to ",(0,s.jsx)(n.code,{children:"go.sum"})," if available. To override this, simply specify a lockfile type (i.e., ",(0,s.jsx)(n.code,{children:"phylum analyze -t go go.mod"}),")"]}),"\n",(0,s.jsxs)(n.p,{children:["Second, without explicitly specifying dependency files, manifest files will only be used if there is no corresponding\nlockfile in the same directory or any parent directory. For example, a single ",(0,s.jsx)(n.code,{children:"Cargo.lock"})," file at the root of the\nrepository will be used instead of looking at any ",(0,s.jsx)(n.code,{children:"Cargo.toml"})," files anywhere in the repository. To avoid this, run\n",(0,s.jsx)(n.code,{children:"phylum init"})," and specify all files that you want analyzed."]}),"\n",(0,s.jsx)(n.h2,{id:"lockifests",children:"Lockifests"}),"\n",(0,s.jsxs)(n.p,{children:["Special handling is given to manifests that, for historical reasons, can also be used as lockfiles. Specifically,\nPython's ",(0,s.jsx)(n.code,{children:"requirements.txt"})," is a manifest file. But in some scenarios it may be fully specified and effectively becomes\na lockfile (e.g., ",(0,s.jsx)(n.code,{children:"pip freeze > requirements.txt"}),")."]}),"\n",(0,s.jsx)(n.p,{children:"Phylum handles these files by first attempting to analyze them as a lockfile. If anything in the file is not fully\nspecified, this will fail, and Phylum will silence the error and proceed to lockfile generation."}),"\n",(0,s.jsx)(n.h2,{id:"sandboxing",children:"Sandboxing"}),"\n",(0,s.jsx)(n.p,{children:"It is necessary for Phylum's CLI to sandbox lockfile generation, since some\necosystems can execute arbitrary code when generating a lockfile with malicious\ndependencies. This sandbox only has limited filesystem access, based on what\necosystem tools commonly need to generate lockfiles."}),"\n",(0,s.jsx)(n.p,{children:"While this sandbox should work on most systems, there are some scenarios in\nwhich it can cause lockfile generation to fail. One common example is the\npresence of another sandbox like Docker, which prevents Phylum's CLI from\nsetting up its own sandbox."}),"\n",(0,s.jsxs)(n.p,{children:["If you're already running a sandbox designed to combat malicious code, you can\ndisable the lockfile generation sandbox using ",(0,s.jsx)(n.code,{children:"--skip-sandbox"}),". This is ",(0,s.jsx)(n.strong,{children:"NOT\nSAFE"})," without a sandbox in place and will harm the system when run on a\ncompromised project."]}),"\n",(0,s.jsx)(n.h2,{id:"example-scenario",children:"Example scenario"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["A user runs ",(0,s.jsx)(n.code,{children:"phylum analyze package.json"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The CLI checks for the existence of a matching lockfile\n(i.e., ",(0,s.jsx)(n.code,{children:"package-lock.json"}),", ",(0,s.jsx)(n.code,{children:"npm-shrinkwrap.json"}),", or ",(0,s.jsx)(n.code,{children:"yarn.lock"}),")"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"If a matching lockfile is found, that file will be used instead"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"If no matching lockfile is found, proceed to manifest file generation"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Since no ",(0,s.jsx)(n.code,{children:"--type"})," was specified, the fallback will be used (in this case, ",(0,s.jsx)(n.code,{children:"npm"}),")"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"The lockfile generator runs this command to generate a lockfile:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"npm install --package-lock-only --ignore-scripts\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The output lockfile (",(0,s.jsx)(n.code,{children:"package-lock.json"}),") is ",(0,s.jsx)(n.a,{href:"/cli/analyzing_dependencies",children:"analyzed"})]}),"\n"]}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>d});var s=i(6540);const l={},c=s.createContext(l);function r(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);