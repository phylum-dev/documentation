"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[9813],{9385:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>a,frontMatter:()=>r,metadata:()=>d,toc:()=>o});var t=s(4848),i=s(8453);const r={},l="Dependency File Exclusion",d={id:"knowledge_base/dependency_file_exclusion",title:"Dependency File Exclusion",description:"Analyzing dependencies with Phylum is possible with one of four primary solutions:",source:"@site/../docs/knowledge_base/dependency_file_exclusion.md",sourceDirName:"knowledge_base",slug:"/knowledge_base/dependency_file_exclusion",permalink:"/knowledge_base/dependency_file_exclusion",draft:!1,unlisted:!1,editUrl:"https://github.com/phylum-dev/documentation/edit/main/docs/knowledge_base/dependency_file_exclusion.md",tags:[],version:"current",lastUpdatedBy:"Charles Coggins",lastUpdatedAt:1725462381e3,frontMatter:{},sidebar:"docsSidebar",previous:{title:"Analyzing Dependencies",permalink:"/cli/analyzing_dependencies"},next:{title:"Account Federation",permalink:"/knowledge_base/federate_account"}},c={},o=[{value:"Phylum CLI",id:"phylum-cli",level:2},{value:"Phylum-CI",id:"phylum-ci",level:2},{value:"GitHub App",id:"github-app",level:2},{value:"Phylum Web App",id:"phylum-web-app",level:2},{value:"Examples",id:"examples",level:2}];function h(e){const n={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"dependency-file-exclusion",children:"Dependency File Exclusion"})}),"\n",(0,t.jsx)(n.p,{children:"Analyzing dependencies with Phylum is possible with one of four primary solutions:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.a,{href:"/cli/quickstart",children:"Phylum CLI"})]}),"\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsxs)(n.a,{href:"https://pypi.org/project/phylum/",children:[(0,t.jsx)(n.code,{children:"phylum-ci"})," tool"]}),", usually in the form of ",(0,t.jsx)(n.a,{href:"/integrations/integrations_overview",children:"integrations"})]}),"\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.a,{href:"/integrations/github_app",children:"Phylum GitHub app"})]}),"\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.a,{href:"https://app.phylum.io",children:"Phylum web app"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Each of these solutions take dependency files (lockfiles and manifests) as input to produce analysis outputs. This page describes the methods in place to allow for excluding dependency files so they won't be included in the analysis."}),"\n",(0,t.jsx)(n.p,{children:"Dependency file exclusion may be desired for any number of reasons:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"A repository containing test fixtures that should not be considered"}),"\n",(0,t.jsx)(n.li,{children:"A monorepo incrementally adopting Phylum, adding one sub-repo at a time"}),"\n",(0,t.jsx)(n.li,{children:"Vendored dependencies with their own manifests"}),"\n",(0,t.jsxs)(n.li,{children:["Manifests that fail the ",(0,t.jsx)(n.a,{href:"/cli/lockfile_generation",children:"lockfile generation"})," process"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Whatever the reason, Phylum seeks to provide exclusion methods."}),"\n",(0,t.jsx)(n.h2,{id:"phylum-cli",children:"Phylum CLI"}),"\n",(0,t.jsxs)(n.p,{children:["Dependency analysis with the ",(0,t.jsx)(n.a,{href:"/cli/quickstart",children:"Phylum CLI"})," is accomplished with the ",(0,t.jsxs)(n.a,{href:"/cli/commands/phylum_analyze",children:[(0,t.jsx)(n.code,{children:"phylum analyze"})," command"]}),". The command uses the following priority order to determine which dependency files will be analyzed:"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"DEPENDENCY_FILE"})," argument value(s)"]}),"\n",(0,t.jsxs)(n.li,{children:["Dependency files in ",(0,t.jsxs)(n.a,{href:"/knowledge_base/phylum_project_files",children:["the ",(0,t.jsx)(n.code,{children:".phylum_project"})," file"]})]}),"\n",(0,t.jsx)(n.li,{children:"Recursive filesystem search"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The first method from the list yielding dependency files will be used and no further search will be done. The recursive filesystem search will look up to five (5) levels deep and takes common ignore files like ",(0,t.jsx)(n.code,{children:".gitignore"})," and ",(0,t.jsx)(n.code,{children:".ignore"})," into account. See the ",(0,t.jsx)(n.a,{href:"https://git-scm.com/docs/gitignore#_pattern_format",children:"gitignore-style pattern formats"})," to use in these files and the ",(0,t.jsx)(n.a,{href:"https://docs.rs/ignore/latest/ignore/struct.WalkBuilder.html#ignore-rules",children:"full ignore rules documented here"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["See the ",(0,t.jsx)(n.a,{href:"#examples",children:"examples section"})," for more detailed use case scenarios and patterns to use in ignore files recognized by the Phylum CLI."]}),"\n",(0,t.jsx)(n.h2,{id:"phylum-ci",children:"Phylum-CI"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"phylum-ci"})," script entry point of the ",(0,t.jsxs)(n.a,{href:"https://pypi.org/project/phylum/",children:[(0,t.jsx)(n.code,{children:"phylum"})," Python package"]})," allows for wrapping the functionality of the ",(0,t.jsx)(n.a,{href:"/cli/quickstart",children:"Phylum CLI"}),", but with an eye towards operating in CI environments and allowing for a more fully automated experience. Like the ",(0,t.jsx)(n.a,{href:"#phylum-cli",children:"Phylum CLI described already"}),", the ",(0,t.jsx)(n.code,{children:"phylum-ci"})," tool makes use of a priority ordering of methods to determine which dependency files to analyze:"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"--depfile"})," argument value(s)"]}),"\n",(0,t.jsxs)(n.li,{children:["Dependency files in ",(0,t.jsxs)(n.a,{href:"/knowledge_base/phylum_project_files",children:["the ",(0,t.jsx)(n.code,{children:".phylum_project"})," file"]})]}),"\n",(0,t.jsx)(n.li,{children:"Recursive filesystem search"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The first of these methods to yield dependency file will be used and no further search will be done."}),"\n",(0,t.jsxs)(n.p,{children:["An ",(0,t.jsx)(n.code,{children:"--exclude"})," option exists to filter the list of dependency files detected (methods 2 and 3) when they aren't specified explicitly by argument (method 1). This option takes ",(0,t.jsx)(n.a,{href:"https://git-scm.com/docs/gitignore#_pattern_format",children:"gitignore-style exclusion patterns"})," and can be specified multiple times. The ",(0,t.jsx)(n.code,{children:"EXCLUDE"})," patterns should be specified in quotes to prevent shell globbing. The patterns are applied relative to the current ",(0,t.jsx)(n.code,{children:"phylum-ci"})," working directory."]}),"\n",(0,t.jsxs)(n.p,{children:["There are the various ways exclusions can be provided, shown here with the ",(0,t.jsx)(n.code,{children:"phylum-ci"})," tool used locally:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:'## Specify a single gitignore-style exclusion pattern\nphylum-ci -vv --all-deps --force-analysis --exclude "requirements-*.txt"\n\n## The same command can be written with short options\nphylum-ci -vvafe "requirements-*.txt"\n\n## Specify multiple exclusion patterns with the same option\nphylum-ci -vvafe "build.gradle" "tests/fixtures/"\n\n## Specify multiple exclusion patterns with multiple options\nphylum-ci -vvafe "/requirements-*.txt" -e "build.gradle" "fixtures/"\n'})}),"\n",(0,t.jsxs)(n.p,{children:["There are slight variations in how to format these commands for each environment where ",(0,t.jsx)(n.code,{children:"phylum-ci"})," is used. See the ",(0,t.jsx)(n.a,{href:"/integrations/integrations_overview",children:"integrations documentation"})," for your specific use case. See the ",(0,t.jsx)(n.a,{href:"#examples",children:"examples section"})," for more detailed use case scenarios and patterns."]}),"\n",(0,t.jsx)(n.h2,{id:"github-app",children:"GitHub App"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.a,{href:"/integrations/github_app",children:"Phylum GitHub app"})," does not currently offer a flexible method for identifying dependency file exclusions. It does account for the existence of ",(0,t.jsxs)(n.a,{href:"/knowledge_base/phylum_project_files",children:["a ",(0,t.jsx)(n.code,{children:".phylum_project"})," file"]}),". The downside of this approach is that it is an allowlist, with no current mechanism for specifying exclusions. Every file to be included in analysis has to be listed in the ",(0,t.jsx)(n.code,{children:".phylum_project"})," file in order to ensure those not listed are not included."]}),"\n",(0,t.jsx)(n.h2,{id:"phylum-web-app",children:"Phylum Web App"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.a,{href:"https://app.phylum.io",children:"Phylum web app"})," can be used to specify individual lockfiles (it does not handle manifests) to analyze. Lockfile selection is a manual process so excluding files means simply not selecting them."]}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.p,{children:"This section contains examples applied against a completely fictitious repository, which has the following directory and file structure:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:" src/\n \u251c\u2500 build.gradle\n \u2514\u2500 requirements-dev.txt\n sub_repo_1/\n \u251c\u2500 fixtures/\n \u2502  \u2514\u2500 package.json\n \u251c\u2500 requirements.txt\n \u2514\u2500 sub_repo_bom.xml\n sub_repo_2/\n \u251c\u2500 build.gradle.kts\n \u251c\u2500 Cargo.lock\n \u2514\u2500 Cargo.toml\n tests/\n \u251c\u2500 fixtures/\n \u2502  \u251c\u2500 a/\n \u2502  \u2502  \u251c\u2500 Gemfile\n \u2502  \u2502  \u2514\u2500 go.mod\n \u2502  \u251c\u2500 b/\n \u2502  \u2502  \u2514\u2500 example.csproj\n \u2502  \u251c\u2500 build.gradle\n \u2502  \u251c\u2500 effective-pom.xml\n \u2502  \u2514\u2500 pyproject.toml\n \u2514\u2500 requirements-test.txt\n vendor/\n \u251c\u2500 package.json\n \u2514\u2500 yarn.lock\n poetry.lock\n project_bom.spdx.json\n pyproject.toml\n requirements.txt\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Without any filtering in place, the ",(0,t.jsx)(n.a,{href:"/cli/quickstart",children:"Phylum CLI"})," identifies the following dependency files from the example repository:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shellsession",children:"\u276f phylum status\nProject: null\nGroup: null\nProject Root: null\nDependency Files:\n - path: ./sub_repo_1/requirements.txt\n   type: pip\n - path: ./sub_repo_1/sub_repo_bom.xml\n   type: cyclonedx\n - path: ./requirements.txt\n   type: pip\n - path: ./tests/requirements-test.txt\n   type: pip\n - path: ./tests/fixtures/effective-pom.xml\n   type: mvn\n - path: ./tests/fixtures/b/example.csproj\n   type: msbuild\n - path: ./sub_repo_2/Cargo.lock\n   type: cargo\n - path: ./project_bom.spdx.json\n   type: spdx\n - path: ./poetry.lock\n   type: poetry\n - path: ./vendor/yarn.lock\n   type: yarn\n - path: ./src/requirements-dev.txt\n   type: pip\n - path: ./tests/fixtures/a/go.mod\n   type: gomod\n - path: ./sub_repo_1/fixtures/package.json\n   type: npm\n - path: ./tests/fixtures/a/Gemfile\n   type: gem\n - path: ./tests/fixtures/build.gradle\n   type: gradle\n - path: ./src/build.gradle\n   type: gradle\n - path: ./sub_repo_2/build.gradle.kts\n   type: gradle\n"})}),"\n",(0,t.jsx)(n.p,{children:"Here are some ignore patterns that can be applied against this example repository, along with the effect they have:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Pattern / Effect"}),(0,t.jsx)(n.th,{children:"Excluded Files"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"requirements*.txt"})," ",(0,t.jsx)(n.br,{})," Exclude all Python lockifests anywhere"]}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"requirements.txt"})," ",(0,t.jsx)(n.br,{})," ",(0,t.jsx)(n.code,{children:"src/requirements-dev.txt"})," ",(0,t.jsx)(n.br,{})," ",(0,t.jsx)(n.code,{children:"sub_repo_1/requirements.txt"})," ",(0,t.jsx)(n.br,{})," ",(0,t.jsx)(n.code,{children:"tests/requirements-test.txt"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"requirements-*.txt"})," ",(0,t.jsx)(n.br,{})," Exclude Python lockifests anywhere in the repo matching a specific pattern"]}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"src/requirements-dev.txt"})," ",(0,t.jsx)(n.br,{})," ",(0,t.jsx)(n.code,{children:"tests/requirements-test.txt"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"requirements.txt"})," ",(0,t.jsx)(n.br,{}),' Exclude Python lockifests anywhere when specifically named "requirements.txt"']}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"requirements.txt"})," ",(0,t.jsx)(n.br,{})," ",(0,t.jsx)(n.code,{children:"sub_repo_1/requirements.txt"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"/requirements.txt"})," ",(0,t.jsx)(n.br,{})," Exclude the Python lockifest at the root of the repo and nowhere else"]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"requirements.txt"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"build.gradle*"})," ",(0,t.jsx)(n.br,{})," Exclude all Gradle manifests anywhere"]}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"src/build.gradle"})," ",(0,t.jsx)(n.br,{})," ",(0,t.jsx)(n.code,{children:"sub_repo_2/build.gradle.kts"})," ",(0,t.jsx)(n.br,{})," ",(0,t.jsx)(n.code,{children:"tests/fixtures/build.gradle"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"build.gradle"})," ",(0,t.jsx)(n.br,{}),' Exclude Gradle manifests anywhere when specifically named "build.gradle"']}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"src/build.gradle"})," ",(0,t.jsx)(n.br,{})," ",(0,t.jsx)(n.code,{children:"tests/fixtures/build.gradle"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"sub_repo_2/"})," ",(0,t.jsx)(n.br,{}),' Exclude the entire "sub_repo_2" directory']}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"sub_repo_2/build.gradle.kts"})," ",(0,t.jsx)(n.br,{})," ",(0,t.jsx)(n.code,{children:"sub_repo_2/Cargo.lock"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"vendor/"})," ",(0,t.jsx)(n.br,{}),' Exclude an entire directory of vendored dependencies named "vendor"']}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"vendor/yarn.lock"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"fixtures/"})," ",(0,t.jsx)(n.br,{}),' Exclude all dependency files under any directory named "fixtures"']}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"sub_repo_1/fixtures/package.json"})," ",(0,t.jsx)(n.br,{})," ",(0,t.jsx)(n.code,{children:"tests/fixtures/build.gradle"})," ",(0,t.jsx)(n.br,{})," ",(0,t.jsx)(n.code,{children:"tests/fixtures/effective-pom.xml"})," ",(0,t.jsx)(n.br,{})," ",(0,t.jsx)(n.code,{children:"tests/fixtures/a/Gemfile"})," ",(0,t.jsx)(n.br,{})," ",(0,t.jsx)(n.code,{children:"tests/fixtures/a/go.mod"})," ",(0,t.jsx)(n.br,{})," ",(0,t.jsx)(n.code,{children:"tests/fixtures/b/example.csproj"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"sub_repo_*/fixtures/"})," ",(0,t.jsx)(n.br,{}),' Exclude "fixtures" directories located at the "root" of any sub repo']}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"sub_repo_1/fixtures/package.json"})})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.a,{href:"https://git-scm.com/docs/gitignore#_pattern_format",children:"gitignore-style exclusion patterns"})," are applied relative to the directory in which they are specified. That could be the location of an ignore file or the working directory in the case of patterns supplied as command arguments."]})]})}function a(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>d});var t=s(6540);const i={},r=t.createContext(i);function l(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);