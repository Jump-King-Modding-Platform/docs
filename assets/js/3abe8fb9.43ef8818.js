"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[521],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var g=o.createContext({}),s=function(e){var t=o.useContext(g),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(g.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,g=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(n),d=i,m=p["".concat(g,".").concat(d)]||p[d]||u[d]||r;return n?o.createElement(m,a(a({ref:t},c),{},{components:n})):o.createElement(m,a({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=p;var l={};for(var g in t)hasOwnProperty.call(t,g)&&(l[g]=t[g]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<r;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3810:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return g},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var o=n(7462),i=n(3366),r=(n(7294),n(3905)),a=["components"],l={title:"Logging",sidebar_position:5},g=void 0,s={unversionedId:"logging",id:"logging",title:"Logging",description:"Introduction",source:"@site/docs/logging.md",sourceDirName:".",slug:"/logging",permalink:"/logging",draft:!1,editUrl:"https://github.com/Jump-King-Modding-Platform/docs/tree/main/docs/logging.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Logging",sidebar_position:5},sidebar:"docs",previous:{title:"Content",permalink:"/content"},next:{title:"Input",permalink:"/input"}},c={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Logging types",id:"logging-types",level:2},{value:"1. Contextual logger",id:"1-contextual-logger",level:3},{value:"2. Temporary logger",id:"2-temporary-logger",level:3},{value:"Log configuration",id:"log-configuration",level:2}],p={toc:u};function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Core uses ",(0,r.kt)("a",{parentName:"p",href:"https://serilog.net"},"Serilog")," for logging. It is a simple, yet powerful logging framework."),(0,r.kt)("p",null,"Log messages are displayed in the console and appended to a log file located in the ",(0,r.kt)("inlineCode",{parentName:"p"},"JKMP\\Logs")," directory."),(0,r.kt)("p",null,"This guide will only cover basic usage, but if you want to learn more you should check out the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/serilog/serilog/wiki"},"Serilog wiki"),"."),(0,r.kt)("h2",{id:"logging-types"},"Logging types"),(0,r.kt)("p",null,"There are two methods of logging you can choose from:"),(0,r.kt)("h3",{id:"1-contextual-logger"},"1. Contextual logger"),(0,r.kt)("p",null,"Mainly used for logging messages that should be included with the released plugin. Should not be used for temporary debugging messages."),(0,r.kt)("p",null,"To get started, you need to add a logger to your class. This should be done for each class (and optionally context) that needs to log something."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Do not use a single logger for the entire plugin unless the plugin is very simple."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"title=MyPlugin.cs",title:"MyPlugin.cs"},'using JKMP.Core.Logging;\nusing Serilog;\n\npublic class MyPlugin : JKMP.Core.Plugins.Plugin\n{\n    private static readonly ILogger Logger = LogManager.CreateLogger<MyPlugin>();\n\n    public MyPlugin()\n    {\n        Logger.Info("Hello world!");\n    }\n}\n')),(0,r.kt)("h3",{id:"2-temporary-logger"},"2. Temporary logger"),(0,r.kt)("p",null,"Mainly used for logging messages that are temporary and not meant to be included with the released plugin."),(0,r.kt)("p",null,"It is just a static readonly ",(0,r.kt)("inlineCode",{parentName:"p"},"ILogger")," called ",(0,r.kt)("inlineCode",{parentName:"p"},"LogManager.TempLogger"),"."),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Refrain from including this in a release as it would be difficult to locate the source of the message."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"title=MyPlugin.cs",title:"MyPlugin.cs"},'using JKMP.Core.Logging;\nusing Serilog;\n\npublic class MyPlugin : JKMP.Core.Plugins.Plugin\n{\n    public MyPlugin()\n    {\n        LogManager.TempLogger.Info("Hello world!");\n    }\n}\n')),(0,r.kt)("h2",{id:"log-configuration"},"Log configuration"),(0,r.kt)("p",null,"If you want to change the format of the output message, or change the minimum visible logging level, you can do so by modifying the ",(0,r.kt)("inlineCode",{parentName:"p"},"LogConfig.json")," file located in the ",(0,r.kt)("inlineCode",{parentName:"p"},"JKMP")," directory."),(0,r.kt)("p",null,"The documentation for the template format can be ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/serilog/serilog/wiki/Formatting-Output"},"found here"),"."),(0,r.kt)("p",null,"The default log configuration ignores verbose messages. If you want to show verbose messages, you can do so by changing ",(0,r.kt)("inlineCode",{parentName:"p"},"MinimumLogLevel")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"Verbose"),"."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Changing the log configuration only affects your installation. Therefore changing it is only useful for development purposes."))))}d.isMDXComponent=!0}}]);