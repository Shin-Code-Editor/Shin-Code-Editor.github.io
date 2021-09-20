import{o as e,c as t,b as a,d as o}from"./app.321f7f21.js";import{_ as l}from"./cloning.db5a299c.js";const n='{"title":"GIT Guide","description":"","frontmatter":{},"headers":[{"level":2,"title":"Cloning a Repo","slug":"cloning-a-repo"},{"level":3,"title":"Public Repo","slug":"public-repo"},{"level":3,"title":"Private Repo","slug":"private-repo"},{"level":2,"title":"Local Repo","slug":"local-repo"},{"level":2,"title":"Connecting a Local Repo to a Remote","slug":"connecting-a-local-repo-to-a-remote"},{"level":2,"title":"Pushing Repo to Remote","slug":"pushing-repo-to-remote"},{"level":3,"title":"Authentication Error","slug":"authentication-error"},{"level":2,"title":"Check Out Branch","slug":"check-out-branch"},{"level":2,"title":"Creating a Branch","slug":"creating-a-branch"},{"level":2,"title":"Switching Branches","slug":"switching-branches"},{"level":2,"title":"Pushing a Local Branch to Remote","slug":"pushing-a-local-branch-to-remote"},{"level":2,"title":"Deleting a Branch","slug":"deleting-a-branch"},{"level":2,"title":"File Diffs","slug":"file-diffs"},{"level":2,"title":"Viewing Diffs","slug":"viewing-diffs"}],"relativePath":"git-guide.md","lastUpdated":1632140614410}',r={},i=[a("h1",{id:"git-guide",tabindex:"-1"},[o("GIT Guide "),a("a",{class:"header-anchor",href:"#git-guide","aria-hidden":"true"},"#")],-1),a("p",null,"GIT is one of the main ways of exporting projects from the editor. GIT support is available for popular GIT hosting (i.e. Github, Gitlab, Bitbucket).",-1),a("ul",null,[a("li",null,[a("a",{href:"#cloning-a-repo"},"Cloning a Repo")]),a("li",null,[a("a",{href:"#local-repo"},"Init a Repo Locally")]),a("li",null,[a("a",{href:"#connecting-a-local-repo-to-a-remote"},"Connecting a Local Repo to a Remote")]),a("li",null,[a("a",{href:"#pushing-repo-to-remote"},"Pushing Repo to Remote")]),a("li",null,[a("a",{href:"#check-out-branch"},"Check Out Branch")]),a("li",null,[a("a",{href:"#creating-a-branch"},"Creating a Branch")]),a("li",null,[a("a",{href:"#switching-branches"},"Switching Branches")]),a("li",null,[a("a",{href:"#pushing-a-local-branch-to-remote"},"Pushing a Local Branch to Remote")]),a("li",null,[a("a",{href:"#deleting-a-branch"},"Deleting a Branch")]),a("li",null,[a("a",{href:"#merge-conflicts"},"Merge Conflicts")]),a("li",null,[a("a",{href:"#viewing-diffs"},"Viewing Diffs")])],-1),a("hr",null,null,-1),a("h2",{id:"cloning-a-repo",tabindex:"-1"},[o("Cloning a Repo "),a("a",{class:"header-anchor",href:"#cloning-a-repo","aria-hidden":"true"},"#")],-1),a("h3",{id:"public-repo",tabindex:"-1"},[o("Public Repo "),a("a",{class:"header-anchor",href:"#public-repo","aria-hidden":"true"},"#")],-1),a("p",null,"Cloning a public repo does not require any credentials.",-1),a("ol",null,[a("li",null,[a("p",null,"Open the Clone Repo dialog. Click the ⑂ button on the Projects tab."),a("p",null,[a("img",{src:"/assets/clone-repo.424580da.png",alt:"./img/git-features/clone-repo.png"})])]),a("li",null,[a("p",null,[o("Enter the Repo URL (i.e. "),a("code",null,"https://github.com/arturkot/the-house-game.git"),o(")")]),a("p",null,[a("img",{src:"/assets/clone-repo-1.df15698b.png",alt:"./img/git-features/clone-repo-1.png"})])]),a("li",null,[a("p",null,"Click OK and the cloning should begin. You can access your cloned project from the Project menu tab."),a("p",null,[a("video",{width:"300",autoplay:"",loop:"",muted:"",playsinline:"",src:l})])])],-1),a("h3",{id:"private-repo",tabindex:"-1"},[o("Private Repo "),a("a",{class:"header-anchor",href:"#private-repo","aria-hidden":"true"},"#")],-1),a("p",null,[o("To clone a private repo, you need to set up GIT credentials first. See "),a("a",{href:"/create-app-token.html"},"Creating an App Token"),o(" page for more details.")],-1),a("p",null,[a("a",{href:"#git-guide"},"Back to Top")],-1),a("hr",null,null,-1),a("h2",{id:"local-repo",tabindex:"-1"},[o("Local Repo "),a("a",{class:"header-anchor",href:"#local-repo","aria-hidden":"true"},"#")],-1),a("p",null,"Turn a local project (no remote repo in Github, Gitlab, etc.) for keeping track of history and gain access to git features like diffing, reverting, commiting, etc.",-1),a("ol",null,[a("li",null,[o("Create a project. See "),a("code",null,"Creating a Project"),o(" for more details.")]),a("li",null,[o("Tap to tab "),a("code",null,"Git"),o(" and click "),a("code",null,"Initial Repo")])],-1),a("p",null,[a("a",{href:"#git-guide"},"Back to Top")],-1),a("hr",null,null,-1),a("h2",{id:"connecting-a-local-repo-to-a-remote",tabindex:"-1"},[o("Connecting a Local Repo to a Remote "),a("a",{class:"header-anchor",href:"#connecting-a-local-repo-to-a-remote","aria-hidden":"true"},"#")],-1),a("p",null,"To connect a local repostiory to a remote one (BitBucket/Gitlab/Github), follow the steps below. Connecting to a remote repository allows backing up and sharing your work with others that have access to that repository.",-1),a("ol",null,[a("li",null,[a("p",null,[o("Create a new repository with a remote provider (i.e. "),a("a",{href:"https://github.com/new",target:"_blank",rel:"noopener noreferrer"},"Github"),o(") If you already have an empty repository created, then skip this step.")]),a("h4",{id:"example-with-github",tabindex:"-1"},[o("Example with Github "),a("a",{class:"header-anchor",href:"#example-with-github","aria-hidden":"true"},"#")]),a("p",null,[o("a. Go to "),a("a",{href:"https://github.com/new",target:"_blank",rel:"noopener noreferrer"},"Create Repo"),o(") page. Enter a repository name.")]),a("p",null,[a("img",{src:"/assets/create-remote-1.8eb9e05e.png",alt:"./img/git-features/create-remote-1.png"})]),a("p",null,[o("b. Select if the repo will be public or private. For private repo you would need to create an app token to access it. See "),a("a",{href:"/create-app-token.html"},"Creating an App Token"),o(" for more details.")]),a("p",null,[a("img",{src:"/assets/create-remote-2.c7907380.png",alt:"./img/git-features/create-remote-2.png"})]),a("p",null,[o("c. DO NOT initialize the repository with a README as this will create a first commit that will be different from your local repository. The repo must be empty to not have any conflicts with the local one. Click "),a("strong",null,"Create repository"),o(" button. "),a("img",{src:"/assets/create-remote-3.a3f5bcfd.png",alt:"./img/git-features/create-remote-3.png"})]),a("p",null,"d. Save the HTTPS remote repository URL for your remote. You will need this later.")]),a("li",null,[a("p",null,"Create an initial commit for your repo. If your local repo already has commits, then skip this step."),a("p",null,[a("video",{width:"300",autoplay:"",loop:"",muted:"",playsinline:"",src:"/assets/commit.de8fa071.mp4"})])]),a("li",null,[a("p",null,"Create your Remote in your project that links to your Remote Repo URL created in step 1."),a("p",null,[a("video",{width:"300",autoplay:"",loop:"",muted:"",playsinline:"",src:"/assets/create-remote-link.a5052c62.mp4"})])]),a("li",null,[a("p",null,"You can now push your commits to your remote repository. See the next section for details on how to do this.")])],-1),a("p",null,[a("a",{href:"#git-guide"},"Back to Top")],-1),a("hr",null,null,-1),a("h2",{id:"pushing-repo-to-remote",tabindex:"-1"},[o("Pushing Repo to Remote "),a("a",{class:"header-anchor",href:"#pushing-repo-to-remote","aria-hidden":"true"},"#")],-1),a("p",null,"If you want to sync your commits to your remote repository, you can do so pushing the Push feature. To push commits to your remote, follow the steps below:",-1),a("ol",null,[a("li",null,[a("p",null,[o("You need to have created an app token to push. You must be the owner of the public repo to push to public repos. To create an app token please see "),a("a",{href:"/create-app-token.html"},"Creating an App Token"),o(" page.")])]),a("li",null,[a("p",null,"Open the GIT menu on the Git menu tab, and Click Push to push any unpushed commits.")])],-1),a("h3",{id:"authentication-error",tabindex:"-1"},[o("Authentication Error "),a("a",{class:"header-anchor",href:"#authentication-error","aria-hidden":"true"},"#")],-1),a("p",null,[o("If you get an authentication error message the token that you created is not valid for the repo that you are pushing to. Check that the provider is set correctly for the token, and that your token has the proper repository access permissions. See "),a("a",{href:"/create-app-token.html"},"Creating an App Token"),o(" page for more details. "),a("img",{src:"/assets/authentication-error.f4801bf7.png",alt:"./img/git-features/authentication-error.png"})],-1),a("p",null,[a("a",{href:"#git-guide"},"Back to Top")],-1),a("hr",null,null,-1),a("h2",{id:"check-out-branch",tabindex:"-1"},[o("Check Out Branch "),a("a",{class:"header-anchor",href:"#check-out-branch","aria-hidden":"true"},"#")],-1),a("p",null,"Branches are a great way to keep separate versions of your code base separate. To checkout a different branch, access the checkout option from the GIT menu.",-1),a("p",null,[a("a",{href:"#git-guide"},"Back to Top")],-1),a("hr",null,null,-1),a("h2",{id:"creating-a-branch",tabindex:"-1"},[o("Creating a Branch "),a("a",{class:"header-anchor",href:"#creating-a-branch","aria-hidden":"true"},"#")],-1),a("p",null,"You can use the + Button in the Branches modal to create a new branch. See the following example below on creating a local branch.",-1),a("p",null,[a("video",{width:"300",autoplay:"",loop:"",muted:"",playsinline:"",src:"/assets/create-branch.05db209b.mp4"})],-1),a("p",null,[a("a",{href:"#git-guide"},"Back to Top")],-1),a("hr",null,null,-1),a("h2",{id:"switching-branches",tabindex:"-1"},[o("Switching Branches "),a("a",{class:"header-anchor",href:"#switching-branches","aria-hidden":"true"},"#")],-1),a("p",null,"To switch branches, follow the steps below:",-1),a("ol",null,[a("li",null,[a("p",null,"Open Branches modal to see a list of branches.")]),a("li",null,[a("p",null,"Click the Checkout button to checkout either a Local or Remote branch.")])],-1),a("p",null,[a("a",{href:"#git-guide"},"Back to Top")],-1),a("hr",null,null,-1),a("h2",{id:"pushing-a-local-branch-to-remote",tabindex:"-1"},[o("Pushing a Local Branch to Remote "),a("a",{class:"header-anchor",href:"#pushing-a-local-branch-to-remote","aria-hidden":"true"},"#")],-1),a("ol",null,[a("li",null,[o("Create a local branch. See instructions in "),a("a",{href:"#creating-a-branch"},"Creating a Branch"),o(".")]),a("li",null,"Checkout the local branch."),a("li",null,[o("Set up a remote to push to. See instructions in "),a("a",{href:"#connecting-a-local-repo-to-a-remote"},"Connecting a Local Repo to a Remote"),o(".")]),a("li",null,[o("Push the local branch to the remote. See instructions in "),a("a",{href:"#pushing-repo-to-remote"},"Pushing Repo to Remote"),o(".")])],-1),a("p",null,[a("a",{href:"#git-guide"},"Back to Top")],-1),a("hr",null,null,-1),a("h2",{id:"deleting-a-branch",tabindex:"-1"},[o("Deleting a Branch "),a("a",{class:"header-anchor",href:"#deleting-a-branch","aria-hidden":"true"},"#")],-1),a("p",null,'You can delete local branches but not remote branches. Remote branch deleting will be supported in the future. To delete a branch click on the "Trash" icon in Branches modal. You cannot delete the current active branch, so be sure to switch to another branch to before deleting the current branch.',-1),a("p",null,[a("a",{href:"#git-guide"},"Back to Top")],-1),a("hr",null,null,-1),a("h2",{id:"file-diffs",tabindex:"-1"},[o("File Diffs "),a("a",{class:"header-anchor",href:"#file-diffs","aria-hidden":"true"},"#")],-1),a("p",null,"Sometimes you need to see changes between your local repository and the remote repository; this is when a diff viewer is needed. Wecde has a built-in diff viewer for files that have changed from the remote repo.",-1),a("p",null,[a("a",{href:"#git-guide"},"Back to Top")],-1),a("hr",null,null,-1),a("h2",{id:"viewing-diffs",tabindex:"-1"},[o("Viewing Diffs "),a("a",{class:"header-anchor",href:"#viewing-diffs","aria-hidden":"true"},"#")],-1),a("p",null,[o("To view changes that have occurred, select a file marked in "),a("span",{style:{color:"#f1d292",background:"#232c35"}},"yellow"),o(" or "),a("span",{style:{color:"#4b88f3"}},"blue"),o(' depending on if the editor is in "dark" or "light" mode.')],-1),a("p",null,[o("You can open the diff by clicking on the filename in the Source Control section of the file menu tab. You can also open the diff by from the Options menu in the Files section and selecting the "),a("strong",null,"View Diff"),o(" option.")],-1),a("p",null,[a("a",{href:"#git-guide"},"Back to Top")],-1)];r.render=function(a,o,l,n,r,h){return e(),t("div",null,i)};export{n as __pageData,r as default};
