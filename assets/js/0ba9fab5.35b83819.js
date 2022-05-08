"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[305],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=u(n),m=l,h=c["".concat(p,".").concat(m)]||c[m]||d[m]||i;return n?a.createElement(h,r(r({ref:t},s),{},{components:n})):a.createElement(h,r({ref:t},s))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var u=2;u<i;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},364:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return d}});var a=n(7462),l=n(3366),i=(n(7294),n(3905)),r=["components"],o={sidebar_position:1,title:"Create a plugin using a template"},p=void 0,u={unversionedId:"getting-started/project-setup/using-a-template",id:"getting-started/project-setup/using-a-template",title:"Create a plugin using a template",description:"Install project templates",source:"@site/docs/getting-started/project-setup/using-a-template.md",sourceDirName:"getting-started/project-setup",slug:"/getting-started/project-setup/using-a-template",permalink:"/getting-started/project-setup/using-a-template",draft:!1,editUrl:"https://github.com/Jump-King-Modding-Platform/docs/tree/main/docs/getting-started/project-setup/using-a-template.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Create a plugin using a template"},sidebar:"docs",previous:{title:"Project Setup",permalink:"/getting-started/project-setup/"},next:{title:"Create a plugin manually",permalink:"/getting-started/project-setup/manual-setup"}},s={},d=[{value:"Install project templates",id:"install-project-templates",level:2},{value:"Create the project",id:"create-the-project",level:2},{value:"Setting up the project",id:"setting-up-the-project",level:2},{value:"Configure the path to the Jump King game directory",id:"configure-the-path-to-the-jump-king-game-directory",level:3},{value:"Configure plugin meta data",id:"configure-plugin-meta-data",level:3},{value:"Build the project",id:"build-the-project",level:2},{value:"Run the project",id:"run-the-project",level:2},{value:"Advanced configuration",id:"advanced-configuration",level:2},{value:"Dependencies",id:"dependencies",level:3},{value:"Content files",id:"content-files",level:3},{value:"Publishing",id:"publishing",level:2}],c={toc:d};function m(e){var t=e.components,n=(0,l.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"install-project-templates"},"Install project templates"),(0,i.kt)("p",null,"To make developing plugins easier there is a template package available that offers JKMP related project templates."),(0,i.kt)("p",null,"To proceed, you'll need to install the ",(0,i.kt)("a",{parentName:"p",href:"https://dotnet.microsoft.com/en-us/download"},".NET SDK"),"."),(0,i.kt)("p",null,"Next, open a command prompt/terminal and type the following command. It will install the templates globally on your computer. The same command can be used to update to the latest version."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-powershell"},"dotnet new --install JKMP.ProjectTemplates\n")),(0,i.kt)("h2",{id:"create-the-project"},"Create the project"),(0,i.kt)("p",null,"Open a command prompt/terminal in the folder that you want to create the project, and then type the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-powershell"},"dotnet new jkmp-plugin -n <NameOfPlugin>\n")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Replace ",(0,i.kt)("inlineCode",{parentName:"p"},"<NameOfPlugin>")," with the name of your plugin (without the angled brackets)."),(0,i.kt)("p",{parentName:"div"},"Note that the name will automatically be prefixed with ",(0,i.kt)("inlineCode",{parentName:"p"},"JKMP.Plugin.<NameOfPlugin>"),". This is due to how Core looks for plugins to load."))),(0,i.kt)("p",null,"Now you should have a solution in the current folder with a project called ",(0,i.kt)("inlineCode",{parentName:"p"},"JKMP.Plugin.<NameOfPlugin>"),"."),(0,i.kt)("h2",{id:"setting-up-the-project"},"Setting up the project"),(0,i.kt)("h3",{id:"configure-the-path-to-the-jump-king-game-directory"},"Configure the path to the Jump King game directory"),(0,i.kt)("p",null,"If you want to copy the plugin to the game's directory when you build it, you'll need to set the path to the game directory."),(0,i.kt)("p",null,"You should see a file called ",(0,i.kt)("inlineCode",{parentName:"p"},"DevVars.targets.example")," in the root of your project. Copy and paste this to a new file called ",(0,i.kt)("inlineCode",{parentName:"p"},"DevVars.targets"),"."),(0,i.kt)("p",null,"Open the file and replace the example ",(0,i.kt)("inlineCode",{parentName:"p"},"<GameDirectory />")," items with the path to the game directory. Multiple directories can be used by adding multiple entries."),(0,i.kt)("p",null,"So for example, if your game is located in the following directory: ",(0,i.kt)("inlineCode",{parentName:"p"},"C:\\Steam\\steamapps\\common\\Jump King\\")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="utf-8"?>\n<Project xmlns="http://schemas.microsoft.com/developer/msbuild/2003">\n    <ItemGroup>\n        <GameDirectory Include="C:\\Steam\\steamapps\\common\\Jump King" />\n    </ItemGroup>\n</Project>\n')),(0,i.kt)("p",null,"UNC paths are supported as well, such as: ",(0,i.kt)("inlineCode",{parentName:"p"},"\\\\server\\games\\Jump King")),(0,i.kt)("h3",{id:"configure-plugin-meta-data"},"Configure plugin meta data"),(0,i.kt)("p",null,"Open the ",(0,i.kt)("inlineCode",{parentName:"p"},"JKMP.Plugin.<NameOfPlugin>.csproj")," file in your preferred text editor."),(0,i.kt)("p",null,"Near the top you should see ",(0,i.kt)("inlineCode",{parentName:"p"},"\x3c!-- Package/plugin properties --\x3e")),(0,i.kt)("p",null,"The properties under this section are used to configure the plugin. Set them as you see fit."),(0,i.kt)("p",null,"Here is a list of the properties you can set:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"PackageId")),(0,i.kt)("td",{parentName:"tr",align:null},"The package ID of the plugin. Only used if you're building and publishing a nuget package.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"PluginId")),(0,i.kt)("td",{parentName:"tr",align:null},"The unique identifier of the plugin. It's generally not changed since the template sets it automatically. It should match your ",(0,i.kt)("inlineCode",{parentName:"td"},"<NameOfPlugin>"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Version")),(0,i.kt)("td",{parentName:"tr",align:null},"The version of the plugin. This is used to determine the version of the plugin when you publish it. The version should follow the ",(0,i.kt)("a",{parentName:"td",href:"https://semver.org"},"semantic versioning scheme"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Title")),(0,i.kt)("td",{parentName:"tr",align:null},"The name of the plugin. This is the UI version that the users who install your plugin will see.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"PackageDescription")),(0,i.kt)("td",{parentName:"tr",align:null},"The description of the plugin. This will be shown to users who install your plugin, and also people who look up your nuget package if you decide to publish it.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Authors")),(0,i.kt)("td",{parentName:"tr",align:null},"The authors of the plugin. This currently isn't shown anywhere, but it will in the future. It will also show up on your nuget package if you decide to publish it.")))),(0,i.kt)("h2",{id:"build-the-project"},"Build the project"),(0,i.kt)("p",null,"Open the project in your preferred IDE by opening the ",(0,i.kt)("inlineCode",{parentName:"p"},"JKMP.Plugin.<NameOfPlugin>.sln")," file."),(0,i.kt)("p",null,"Build the project and verify that there's no errors or warnings."),(0,i.kt)("p",null,"Open the game's directory and check if there's a folder called ",(0,i.kt)("inlineCode",{parentName:"p"},"JKMP\\Plugins\\<NameOfPlugin>\\")," with two files:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"JKMP.Plugin.<NameOfPlugin>.dll")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"plugin.json"),".")),(0,i.kt)("p",null,"If there is, you're done. If you have Core installed, you should be able to start the game and have your plugin loaded."),(0,i.kt)("h2",{id:"run-the-project"},"Run the project"),(0,i.kt)("p",null,"The simplest way to run the project is to just launch Jump King. Just make sure you have Core installed."),(0,i.kt)("p",null,"However if you want a more streamlined experience, you should add a launch configuration that opens the Jump King executable. This process depends on the IDE you're using. We won't be covering that in this guide, but you can probably find it by using your preferred search engine."),(0,i.kt)("p",null,"Attaching a debugger also works as expected if you add ",(0,i.kt)("inlineCode",{parentName:"p"},"--debug")," to the launch parameters. You can add breakpoints and step through the code, etc."),(0,i.kt)("p",null,"Launch parameters can be specified, such as ",(0,i.kt)("inlineCode",{parentName:"p"},"--console")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"-c")," to attach a console to the game for debugging. Logs are also saved in the game's ",(0,i.kt)("inlineCode",{parentName:"p"},"JKMP\\Logs\\")," directory regardless of this flag."),(0,i.kt)("h2",{id:"advanced-configuration"},"Advanced configuration"),(0,i.kt)("h3",{id:"dependencies"},"Dependencies"),(0,i.kt)("p",null,"If your plugin has extra dependencies, you can configure the project to automatically copy them to the game and publish directory as well."),(0,i.kt)("p",null,"Open the ",(0,i.kt)("inlineCode",{parentName:"p"},"JKMP.Plugin.<NameOfPlugin>.csproj")," file in your preferred text editor."),(0,i.kt)("p",null,"Look for the following lines:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'\x3c!-- Add your dependency files here following the example below --\x3e\n\x3c!-- <DependencyFiles Include="$(TargetDir)MyDependency.dll" /> --\x3e\n')),(0,i.kt)("p",null,"Add your dependencies below."),(0,i.kt)("p",null,"For reference, ",(0,i.kt)("inlineCode",{parentName:"p"},"$(TargetDir)")," is the project's build output folder."),(0,i.kt)("p",null,"The files will be copied to ",(0,i.kt)("inlineCode",{parentName:"p"},"Jump King\\JKMP\\Plugins\\<NameOfPlugin>\\Dependencies\\"),"."),(0,i.kt)("h3",{id:"content-files"},"Content files"),(0,i.kt)("p",null,"If your plugin has content files such as textures or audio files, they will be automatically copied to the game and published directory."),(0,i.kt)("p",null,"Any files that exist in the project's build output ",(0,i.kt)("inlineCode",{parentName:"p"},"Content")," folder will be copied to ",(0,i.kt)("inlineCode",{parentName:"p"},"Jump King\\JKMP\\Plugins\\<NameOfPlugin>\\Content\\"),"."),(0,i.kt)("p",null,"If you want to finetune this process, open the ",(0,i.kt)("inlineCode",{parentName:"p"},"JKMP.Plugin.<NameOfPlugin>.csproj")," file in your preferred text editor."),(0,i.kt)("p",null,"Look for the following lines:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'\x3c!-- Add your content files here. By default all files in the project output\'s Content directory will be copied to the game directory --\x3e\n<ContentFiles Include="$(TargetDir)Content\\**\\*.*" />\n')),(0,i.kt)("p",null,"Modify the include pattern to match the files you want to copy. You can also add more lines."),(0,i.kt)("h2",{id:"publishing"},"Publishing"),(0,i.kt)("p",null,"When you want to publish your plugin, you'll need to open a command prompt/terminal and run the publish command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-powershell"},"dotnet publish -c Release\n")),(0,i.kt)("p",null,"If the command runs successfully, you should now have a folder called ",(0,i.kt)("inlineCode",{parentName:"p"},"JKMP.Plugin.<NameOfPlugin>\\bin\\published_plugin\\<NameOfPlugin>\\")," with the following files:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"JKMP.Plugin.<NameOfPlugin>.dll")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"plugin.json"))),(0,i.kt)("p",null,"And of course any other files you've added to the project, such as content or dependencies."),(0,i.kt)("p",null,"Generally you should be able to just zip up the folder and distribute it to your users, instructing them to extract it in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Jump King\\JKMP\\Plugins\\")," folder."),(0,i.kt)("p",null,"At the moment there is no official source for plugins."))}m.isMDXComponent=!0}}]);