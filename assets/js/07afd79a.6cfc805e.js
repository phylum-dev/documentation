"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[7784],{6128:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var t=i(4848),s=i(8453);const o={},l="GitLab CI Integration",a={id:"phylum-ci/gitlab_ci",title:"GitLab CI Integration",description:"Overview",source:"@site/../docs/phylum-ci/gitlab_ci.md",sourceDirName:"phylum-ci",slug:"/phylum-ci/gitlab_ci",permalink:"/phylum-ci/gitlab_ci",draft:!1,unlisted:!1,editUrl:"https://github.com/phylum-dev/phylum-ci/edit/main/docs/integrations/gitlab_ci.md",tags:[],version:"current",lastUpdatedBy:"Charles Coggins",lastUpdatedAt:1733424272e3,frontMatter:{},sidebar:"docsSidebar",previous:{title:"GitHub App Integration",permalink:"/integrations/github_app"},next:{title:"Jenkins Pipelines Integration",permalink:"/phylum-ci/jenkins"}},r={},c=[{value:"Overview",id:"overview",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configure <code>.gitlab-ci.yml</code>",id:"configure-gitlab-ciyml",level:2},{value:"Stage and Job names",id:"stage-and-job-names",level:3},{value:"Job control",id:"job-control",level:3},{value:"Docker image selection",id:"docker-image-selection",level:3},{value:"Variables",id:"variables",level:3},{value:"Script arguments",id:"script-arguments",level:3},{value:"Exit Codes",id:"exit-codes",level:3},{value:"Alternatives",id:"alternatives",level:2}];function h(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"gitlab-ci-integration",children:"GitLab CI Integration"})}),"\n",(0,t.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsx)(n.p,{children:"Once configured for a repository, the GitLab CI integration will provide analysis of project dependencies from\nmanifests and lockfiles. This can happen in a branch pipeline as a result of a commit or in a Merge Request (MR)\npipeline."}),"\n",(0,t.jsx)(n.p,{children:"For MR pipelines, analyzed dependencies will include any that are added/modified in the MR."}),"\n",(0,t.jsxs)(n.p,{children:["For branch pipelines, the analyzed dependencies will be determined by comparing dependency files in the branch to\nthe default branch. ",(0,t.jsx)(n.strong,{children:"All"})," dependencies will be analyzed when the branch pipeline is run on the default branch."]}),"\n",(0,t.jsx)(n.p,{children:"The results will be provided in the pipeline logs and provided as a note (comment) on the MR unless the option to skip\ncomments is provided. The CI job will return an error (i.e., fail the build) if any of the analyzed dependencies fail\nto meet the established policy unless audit mode is specified."}),"\n",(0,t.jsxs)(n.p,{children:["There will be no note if no dependencies were added or modified for a given MR.\nIf one or more dependencies are still processing (no results available), then the note will make that clear and\nthe CI job will only fail if dependencies that have ",(0,t.jsx)(n.em,{children:"completed analysis results"})," do not meet the active policy."]}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(n.p,{children:["The GitLab CI environment is primarily supported through the use of a Docker image. GitLab ",(0,t.jsx)(n.a,{href:"https://docs.gitlab.com/ee/subscriptions/gitlab_com/",children:"SaaS subscriptions"}),"\nhosted on ",(0,t.jsx)(n.a,{href:"https://gitlab.com",children:"https://gitlab.com"})," are supported. ",(0,t.jsx)(n.a,{href:"https://docs.gitlab.com/ee/subscriptions/self_managed/",children:"Self-managed subscriptions"}),' are\nsupported for "on-premises" installs which still have access to the internet. Self-hosted "offline" (e.g., air-gapped networks) installs of GitLab may work but have not been confirmed.']}),"\n",(0,t.jsx)(n.p,{children:"The prerequisites for using this image are:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Access to the ",(0,t.jsxs)(n.a,{href:"https://hub.docker.com/r/phylumio/phylum-ci/tags",children:[(0,t.jsx)(n.code,{children:"phylumio/phylum-ci"})," Docker image"]})]}),"\n",(0,t.jsxs)(n.li,{children:["A ",(0,t.jsx)(n.a,{href:"https://docs.gitlab.com/ee/security/token_overview.html",children:"GitLab token"})," with API access\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["This is only required when:\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Using the integration in merge request pipelines"}),"\n",(0,t.jsx)(n.li,{children:"Comment generation has not been skipped"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["The token needs the ",(0,t.jsx)(n.code,{children:"api"})," scope"]}),"\n",(0,t.jsxs)(n.li,{children:["Tokens that specify a role will work with any role ",(0,t.jsx)(n.em,{children:"other than"})," ",(0,t.jsx)(n.code,{children:"Guest"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["A ",(0,t.jsx)(n.a,{href:"/knowledge_base/api-keys",children:"Phylum token"})," with API access\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://phylum.io/contact-us/",children:"Contact Phylum"})," or ",(0,t.jsx)(n.a,{href:"https://app.phylum.io/register",children:"register"})," to gain access\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["See also ",(0,t.jsx)(n.a,{href:"/cli/commands/phylum_auth_register",children:(0,t.jsx)(n.code,{children:"phylum auth register"})})," command documentation"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"Consider using a bot or group account for this token"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Access to the Phylum API endpoints\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"That usually means a connection to the internet, optionally via a proxy"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.h2,{id:"configure-gitlab-ciyml",children:["Configure ",(0,t.jsx)(n.code,{children:".gitlab-ci.yml"})]}),"\n",(0,t.jsx)(n.p,{children:"Phylum analysis of dependencies can be added to existing CI workflows or on it's own with this minimal configuration:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'stages:\n  - QA\n\nanalyze_MR_with_Phylum:\n  stage: QA\n  rules:\n    - if: $CI_PIPELINE_SOURCE == "merge_request_event"\n  image: phylumio/phylum-ci:latest\n  variables:\n    GIT_STRATEGY: clone\n    GITLAB_TOKEN: $GITLAB_TOKEN_VARIABLE_OR_SECRET_HERE\n    PHYLUM_API_KEY: $PHYLUM_TOKEN_VARIABLE_OR_SECRET_HERE\n  script:\n    - phylum-ci -vv\n'})}),"\n",(0,t.jsxs)(n.p,{children:["This configuration contains a single Quality Assurance stage named QA and will only run in merge request pipelines.\nIt provides debug output but otherwise does not override any of the ",(0,t.jsx)(n.code,{children:"phylum-ci"})," arguments, which are all either\noptional or default to secure values. Let's take a deeper dive into each part of the configuration:"]}),"\n",(0,t.jsx)(n.h3,{id:"stage-and-job-names",children:"Stage and Job names"}),"\n",(0,t.jsx)(n.p,{children:"The stage and job names can be named differently or included in existing stages/jobs."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"stages:\n  - QA  # Name this what you like\n\nanalyze_MR_with_Phylum:  # Name this what you like\n  stage: QA  # Change the stage where the job will run here\n"})}),"\n",(0,t.jsx)(n.h3,{id:"job-control",children:"Job control"}),"\n",(0,t.jsxs)(n.p,{children:["Choose when to run the job. The Phylum integration can run in the context of branch pipelines or merge request\npipelines but ",(0,t.jsx)(n.a,{href:"https://docs.gitlab.com/ee/ci/pipelines/merge_request_pipelines.html",children:"merge request pipelines"})," are given preferential treatment so care should be taken to\n",(0,t.jsx)(n.a,{href:"https://docs.gitlab.com/ee/ci/jobs/job_control.html#avoid-duplicate-pipelines",children:"avoid duplicate pipelines"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"There are several ways to accomplish this goal. The first is to create a rule at the job level to specify that\nthe job should only run for merge request pipelines. Branch pipelines are the default type and will run when new\ncommits are pushed to a branch. If the desire is to only run the job for branch pipelines, then no rule limiting\nthe pipeline source should be specified."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'  # This optional rule specifies to run the job for merge request pipelines only.\n  # Remove these lines entirely to run the job for branch pipelines instead.\n  rules:\n    - if: $CI_PIPELINE_SOURCE == "merge_request_event"\n'})}),"\n",(0,t.jsxs)(n.p,{children:["It is also possible to allow for both pipeline types while ensuring only one runs at a time by using workflow\nrules to automatically ",(0,t.jsx)(n.a,{href:"https://docs.gitlab.com/ee/ci/yaml/workflow.html#switch-between-branch-pipelines-and-merge-request-pipelines",children:"switch between branch pipelines and merge request pipelines"}),". To do so, remove\nany ",(0,t.jsx)(n.em,{children:"job"})," level rules related to pipeline sources and add the following ",(0,t.jsx)(n.em,{children:"workflow"})," level rules to the configuration:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'workflow:\n  rules:\n    - if: $CI_PIPELINE_SOURCE == "merge_request_event"\n    - if: $CI_COMMIT_BRANCH && $CI_OPEN_MERGE_REQUESTS\n      when: never\n      # This next rule will trigger for pushes to any branch\n    - if: $CI_COMMIT_BRANCH\n'})}),"\n",(0,t.jsx)(n.p,{children:"It is recommended to allow branch pipelines for pushes to the default branch, to ensure the Phylum analysis results for\nthat branch are current. This modification to the previous example will allow for merge request pipelines and pushes\nspecifically to the default branch:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'workflow:\n  rules:\n    - if: $CI_PIPELINE_SOURCE == "merge_request_event"\n    - if: $CI_COMMIT_BRANCH && $CI_OPEN_MERGE_REQUESTS\n      when: never\n      # This next rule will trigger for pushes only to the default branch\n    - if: $CI_COMMIT_BRANCH == $CI_DEFAULT_BRANCH\n'})}),"\n",(0,t.jsxs)(n.p,{children:["See the ",(0,t.jsx)(n.a,{href:"https://docs.gitlab.com/ee/ci/jobs/job_control.html",children:"GitLab CI/CD Job Control"})," documentation for more detail."]}),"\n",(0,t.jsx)(n.h3,{id:"docker-image-selection",children:"Docker image selection"}),"\n",(0,t.jsxs)(n.p,{children:["Choose the Docker image tag to match your comfort level with image dependencies. ",(0,t.jsx)(n.code,{children:"latest"}),' is a "rolling" tag that\nwill point to the image created for the latest released ',(0,t.jsx)(n.code,{children:"phylum-ci"})," Python package. A particular version tag\n(e.g., ",(0,t.jsx)(n.code,{children:"0.42.4-CLIv6.1.2"}),") is created for each release of the ",(0,t.jsx)(n.code,{children:"phylum-ci"})," Python package and ",(0,t.jsx)(n.em,{children:"should"})," not change\nonce published."]}),"\n",(0,t.jsxs)(n.p,{children:["However, to be certain that the image does not change...or be warned when it does because it won't be available\nanymore...use the SHA256 digest of the tag. The digest can be found by looking at the ",(0,t.jsx)(n.code,{children:"phylumio/phylum-ci"}),"\n",(0,t.jsx)(n.a,{href:"https://hub.docker.com/r/phylumio/phylum-ci/tags",children:"tags on Docker Hub"})," or with the command:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:'# NOTE: The command-line JSON processor `jq` is used here for the sake of a one line example. It is not required.\n\u276f docker manifest inspect --verbose phylumio/phylum-ci:0.42.4-CLIv6.1.2 | jq .Descriptor.digest\n"sha256:77b761ccef10edc28b0f009a40fbeab240bf004522edaaea05572dc3728b6ca6"\n'})}),"\n",(0,t.jsx)(n.p,{children:"For instance, at the time of this writing, all of these tag references pointed to the same image:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"  # NOTE: These are examples. Only one image line for `phylum-ci` is expected.\n\n  # Not specifying a tag means a default of `latest`\n  image: phylumio/phylum-ci\n\n  # Be more explicit about wanting the `latest` tag\n  image: phylumio/phylum-ci:latest\n\n  # Use a specific release version of the `phylum-ci` package\n  image: phylumio/phylum-ci:0.42.4-CLIv6.1.2\n\n  # Use a specific image with it's SHA256 digest\n  image: phylumio/phylum-ci@sha256:77b761ccef10edc28b0f009a40fbeab240bf004522edaaea05572dc3728b6ca6\n"})}),"\n",(0,t.jsx)(n.p,{children:"Only the last tag reference, by SHA256 digest, is guaranteed to not have the underlying image it points to change."}),"\n",(0,t.jsxs)(n.p,{children:["The default ",(0,t.jsx)(n.code,{children:"phylum-ci"})," Docker image contains ",(0,t.jsx)(n.code,{children:"git"})," and the installed ",(0,t.jsx)(n.code,{children:"phylum"})," Python package. It also contains an\ninstalled version of the Phylum CLI and all required tools needed for ",(0,t.jsx)(n.a,{href:"/cli/lockfile_generation",children:"lockfile generation"}),".\nAn advantage of using the default Docker image is that the complete environment is packaged and made available\nwith components that are known to work together."]}),"\n",(0,t.jsxs)(n.p,{children:["One disadvantage to the default image is it's size. It can take a while to download and may provide more\ntools than required for your specific use case. Special ",(0,t.jsx)(n.code,{children:"slim"})," tags of the ",(0,t.jsx)(n.code,{children:"phylum-ci"})," image are provided as\nan alternative. These tags differ from the default image in that they do not contain the required tools needed\nfor ",(0,t.jsx)(n.a,{href:"/cli/lockfile_generation",children:"lockfile generation"})," (with the exception of the ",(0,t.jsx)(n.code,{children:"pip"})," tool). The ",(0,t.jsx)(n.code,{children:"slim"})," tags are\nsignificantly smaller and allow for faster action run times. They are useful for those instances where ",(0,t.jsx)(n.strong,{children:"no"}),"\nmanifest files are present and/or ",(0,t.jsx)(n.strong,{children:"only"})," lockfiles are used."]}),"\n",(0,t.jsx)(n.p,{children:"Here are examples of using the slim image tags:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"  # NOTE: These are examples. Only one image line for `phylum-ci` is expected.\n\n  # Use the most current release of *both* `phylum-ci` and the Phylum CLI\n  image: phylumio/phylum-ci:slim\n\n  # Use the `slim` image with a specific release version of `phylum-ci` and Phylum CLI\n  image: phylumio/phylum-ci:0.42.4-CLIv6.1.2-slim\n"})}),"\n",(0,t.jsx)(n.h3,{id:"variables",children:"Variables"}),"\n",(0,t.jsxs)(n.p,{children:["The job variables are used to ensure the ",(0,t.jsx)(n.code,{children:"phylum-ci"})," tool is able to perform it's job."]}),"\n",(0,t.jsxs)(n.p,{children:["For instance, ",(0,t.jsx)(n.code,{children:"git"})," is used within the ",(0,t.jsx)(n.code,{children:"phylum-ci"})," package to do things like determine if there was a dependency file\nchange and, when specified, report on new dependencies only. Therefore, a clone of the repository is required to\nensure that the local working copy is always pristine and history is available to pull the requested information.\nIt ",(0,t.jsx)(n.em,{children:"may"})," also be necessary to specify the depth of cloning if/when there is not enough info."]}),"\n",(0,t.jsxs)(n.p,{children:["A GitLab token with API access is required to use the API (e.g., to post notes/comments). This can be a personal,\nproject, or group access token. The account used to create the token will be the one that appears to post the\nnotes/comments on the MR. Therefore, it might be worth looking into using a bot account, which is available for\nproject and group access tokens. See the ",(0,t.jsx)(n.a,{href:"https://docs.gitlab.com/ee/security/token_overview.html",children:"GitLab Token Overview"})," documentation for more info.\nThe token needs the ",(0,t.jsx)(n.code,{children:"api"})," scope. Project or Group access tokens should specify a role ",(0,t.jsx)(n.em,{children:"other than"})," ",(0,t.jsx)(n.code,{children:"Guest"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Note, the GitLab token is only required when this Phylum integration is used in ",(0,t.jsx)(n.a,{href:"https://docs.gitlab.com/ee/ci/pipelines/merge_request_pipelines.html",children:"merge request pipelines"}),"\nwhere comment generation is not skipped. It is not required when used in branch pipelines."]}),"\n",(0,t.jsxs)(n.p,{children:["Note, using ",(0,t.jsx)(n.code,{children:"$CI_JOB_TOKEN"}),' as the value will work in some situations because "API authentication uses the job token,\nby using the authorization of the user triggering the job." This is not recommended for anything other than temporary\npersonal use in private repositories as there is a chance that depending on it will cause failures when attempting to\ndo the same thing in different scenarios.']}),"\n",(0,t.jsxs)(n.p,{children:["A ",(0,t.jsx)(n.a,{href:"/knowledge_base/api-keys",children:"Phylum token"})," with API access is required to perform analysis on project dependencies.\n",(0,t.jsx)(n.a,{href:"https://phylum.io/contact-us/",children:"Contact Phylum"})," or ",(0,t.jsx)(n.a,{href:"https://app.phylum.io/register",children:"register"})," to gain access.\nSee also ",(0,t.jsx)(n.a,{href:"/cli/commands/phylum_auth_register",children:(0,t.jsx)(n.code,{children:"phylum auth register"})})," command documentation and consider using a bot or group account\nfor this token."]}),"\n",(0,t.jsxs)(n.p,{children:["Values for the ",(0,t.jsx)(n.code,{children:"GITLAB_TOKEN"})," and ",(0,t.jsx)(n.code,{children:"PHYLUM_API_KEY"})," variables can come from a ",(0,t.jsx)(n.a,{href:"https://docs.gitlab.com/ee/ci/variables/index.html",children:"CI/CD Variable"})," or an\n",(0,t.jsx)(n.a,{href:"https://docs.gitlab.com/ee/ci/secrets/index.html",children:"External Secret"}),". Since they are sensitive, ",(0,t.jsx)(n.strong,{children:"care should be taken to protect them appropriately"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'  variables:\n    # References:\n    # GIT_STRATEGY - https://docs.gitlab.com/ee/ci/runners/configure_runners.html#git-strategy\n    # GIT_DEPTH - https://docs.gitlab.com/ee/ci/runners/configure_runners.html#shallow-cloning\n    GIT_STRATEGY: clone\n    # GIT_DEPTH: "50"\n\n    # References for GitLab tokens:\n    # All tokens - https://docs.gitlab.com/ee/security/token_overview.html\n    # Personal - https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html\n    # Project - https://docs.gitlab.com/ee/user/project/settings/project_access_tokens.html\n    # Group - https://docs.gitlab.com/ee/user/group/settings/group_access_tokens.html\n    GITLAB_TOKEN: $GITLAB_TOKEN_VARIABLE_OR_SECRET_HERE\n\n    # Contact Phylum (phylum.io/contact-us) or register (app.phylum.io/register)\n    # to gain access. Consider using a bot or group account for this token.\n    # See https://docs.phylum.io/knowledge_base/api-keys\n    PHYLUM_API_KEY: $PHYLUM_TOKEN_VARIABLE_OR_SECRET_HERE\n'})}),"\n",(0,t.jsx)(n.h3,{id:"script-arguments",children:"Script arguments"}),"\n",(0,t.jsxs)(n.p,{children:["The script arguments to the Docker image are the way to exert control over the execution of the Phylum analysis.\nThe ",(0,t.jsx)(n.code,{children:"phylum-ci"})," script entry point is expected to be called. It has a number of arguments that are all optional\nand defaulted to secure values. To view the arguments, their description, and default values,\nrun the script with ",(0,t.jsx)(n.code,{children:"--help"})," output as specified in the ",(0,t.jsx)(n.a,{href:"https://github.com/phylum-dev/phylum-ci/blob/main/README.md#usage",children:"Usage section of the top-level README.md"})," or\nview the ",(0,t.jsx)(n.a,{href:"https://github.com/phylum-dev/phylum-ci/blob/main/docs/script_options.md",children:"script options output"})," for the latest release."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'  # NOTE: These are examples. Only one script entry line for `phylum-ci` is expected.\n  script:\n    # Use the defaults for all the arguments.\n    # The default behavior is to only analyze newly added dependencies\n    # against the active policy set at the Phylum project level.\n    - phylum-ci\n\n    # Provide debug level output. Highly recommended.\n    - phylum-ci -vv\n\n    # Consider all dependencies in analysis results instead of just the newly added ones.\n    # The default is to only analyze newly added dependencies, which can be useful for\n    # existing code bases that may not meet established policy rules yet,\n    # but don\'t want to make things worse. Specifying `--all-deps` can be useful for\n    # casting the widest net for strict adherence to Quality Assurance (QA) standards.\n    - phylum-ci --all-deps\n\n    # Some lockfile types (e.g., Python/pip `requirements.txt`) are ambiguous in\n    # that they can be named differently and may or may not contain strict\n    # dependencies. In these cases it is best to specify an explicit path, either\n    # with the `--depfile` option or in a `.phylum_project` file. For more, see:\n    # https://docs.phylum.io/knowledge_base/phylum_project_files\n    - phylum-ci --depfile requirements-prod.txt\n\n    # Specify multiple explicit dependency file paths.\n    - phylum-ci --depfile requirements-prod.txt Cargo.toml path/to/dependency.file\n\n    # Exclude dependency files by gitignore-style pattern.\n    - phylum-ci --exclude "requirements-*.txt"\n\n    # Specify multiple exclusion patterns.\n    - phylum-ci --exclude "build.gradle" "tests/fixtures/"\n    - |\n      phylum-ci \\\n        --exclude "/requirements-*.txt" \\\n        --exclude "build.gradle" "fixtures/"\n\n    # Force analysis for all dependencies in a manifest file. This is especially useful\n    # for *workspace* manifest files where there is no companion lockfile (e.g., libraries).\n    - phylum-ci --force-analysis --all-deps --depfile Cargo.toml\n\n    # Perform analysis as part of an organization and/or group-owned project.\n    # When an org is specified, a group name must also be specified.\n    # A paid account is needed to use orgs or groups: https://phylum.io/pricing\n    - phylum-ci --org my_org --group my_group\n    - phylum-ci --group my_group\n\n    # Analyze all dependencies in audit mode, to gain insight without failing builds.\n    - phylum-ci --all-deps --audit\n\n    # Ensure the latest Phylum CLI is installed.\n    - phylum-ci --force-install\n\n    # Install a specific version of the Phylum CLI.\n    - phylum-ci --phylum-release 4.8.0 --force-install\n\n    # Mix and match for your specific use case.\n    # Long commands: https://docs.gitlab.com/ee/ci/yaml/script.html#split-long-commands\n    - |\n      phylum-ci \\\n        -vv \\\n        --org my_org \\\n        --group my_group \\\n        --depfile requirements-dev.txt \\\n        --depfile requirements-prod.txt path/to/dependency.file \\\n        --depfile Cargo.toml \\\n        --force-analysis \\\n        --all-deps\n'})}),"\n",(0,t.jsx)(n.h3,{id:"exit-codes",children:"Exit Codes"}),"\n",(0,t.jsxs)(n.p,{children:["The Phylum analysis job will return a zero (0) exit code when it completes successfully and a non-zero code otherwise.\nThe full and current list of exit codes is ",(0,t.jsx)(n.a,{href:"https://github.com/phylum-dev/phylum-ci#exit-codes",children:"documented here"}),' and "Output Modification"\n',(0,t.jsx)(n.a,{href:"https://github.com/phylum-dev/phylum-ci/blob/main/docs/script_options.md",children:"options exist"})," to be strict or loose with setting them."]}),"\n",(0,t.jsx)(n.h2,{id:"alternatives",children:"Alternatives"}),"\n",(0,t.jsxs)(n.p,{children:["It is also possible to make direct use of the ",(0,t.jsxs)(n.a,{href:"https://pypi.org/project/phylum/",children:[(0,t.jsx)(n.code,{children:"phylum"})," Python package"]})," within CI.\nThis may be necessary if the Docker image is unavailable or undesirable for some reason.\nTo use the ",(0,t.jsx)(n.code,{children:"phylum"})," package, install it and call the desired entry points from a script under your control.\nSee the ",(0,t.jsx)(n.a,{href:"https://github.com/phylum-dev/phylum-ci/blob/main/README.md#installation",children:"Installation"})," and ",(0,t.jsx)(n.a,{href:"https://github.com/phylum-dev/phylum-ci/blob/main/README.md#usage",children:"Usage"})," sections of the ",(0,t.jsx)(n.a,{href:"https://github.com/phylum-dev/phylum-ci/blob/main/README.md",children:"README file"})," for more detail."]})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>a});var t=i(6540);const s={},o=t.createContext(s);function l(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);