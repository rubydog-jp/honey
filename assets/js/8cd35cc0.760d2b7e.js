"use strict";(self.webpackChunkhome_page=self.webpackChunkhome_page||[]).push([[69],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,f=u["".concat(p,".").concat(d)]||u[d]||s[d]||o;return n?r.createElement(f,i(i({ref:t},m),{},{components:n})):r.createElement(f,i({ref:t},m))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8132:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={position:106,title:"\u624b\u98066. \u30b3\u30df\u30c3\u30c8"},i="6. \u30b3\u30df\u30c3\u30c8",l={unversionedId:"commit",id:"commit",title:"\u624b\u98066. \u30b3\u30df\u30c3\u30c8",description:"image",source:"@site/tab_tutorial/106_commit.md",sourceDirName:".",slug:"/commit",permalink:"/hunny/tutorial/commit",draft:!1,tags:[],version:"current",sidebarPosition:106,frontMatter:{position:106,title:"\u624b\u98066. \u30b3\u30df\u30c3\u30c8"},sidebar:"tutorialSidebar",previous:{title:"\u624b\u98065. \u672c\u4f5c\u696d",permalink:"/hunny/tutorial/work"},next:{title:"\u624b\u98067. \u30d7\u30eb\u30ea\u30af\u30a8\u30b9\u30c8",permalink:"/hunny/tutorial/pull-req"}},p={},c=[{value:"Commit",id:"commit",level:2},{value:"Pull",id:"pull",level:2}],m={toc:c},u="wrapper";function s(e){let{components:t,...o}=e;return(0,a.kt)(u,(0,r.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"6-\u30b3\u30df\u30c3\u30c8"},"6. \u30b3\u30df\u30c3\u30c8"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:n(848).Z,width:"1643",height:"122"})),(0,a.kt)("p",null,"\u4f5c\u696d\u304c\u7d42\u308f\u3063\u305f\u3089\u30d5\u30a1\u30a4\u30eb\u3092\u4fdd\u5b58\u3057\u305f\u3042\u3068\u3001",(0,a.kt)("strong",{parentName:"p"},"commit(\u30b3\u30df\u30c3\u30c8)")," \u3092\u3057\u307e\u3059\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"gif",src:n(6934).Z,width:"1280",height:"720"})),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"commit"},"Commit"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'$ git add data/cells.json\n$ git commit -m "feat: new cell <\u30e6\u30fc\u30b6\u30fcID> #<issue\u756a\u53f7>"\n')),(0,a.kt)("details",null,(0,a.kt)("summary",null," \u4f8b "),(0,a.kt)("pre",null,"$ git add data/cells.json ",(0,a.kt)("br",null),'$ git commit -m "feat: new cell rbdog #2"')),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"pull"},"Pull"),(0,a.kt)("p",null,"\u30b3\u30df\u30c3\u30c8\u304c\u5b8c\u4e86\u3057\u305f\u3089\u3001\u6700\u65b0\u306e\u30cf\u30cb\u30fc\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u304b\u3089\u30c7\u30fc\u30bf\u3092\u53d6\u308a\u8fbc\u3093\u3067\u304a\u304d\u307e\u3057\u3087\u3046\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ git pull --rebase upstream main\n")),(0,a.kt)("admonition",{title:"Conflict \u306b\u3064\u3044\u3066",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"\u3053\u306e\u3068\u304d\u3001\u904b\u60aa\u304f\u4ed6\u306e\u4f5c\u696d\u8005\u304c\u81ea\u5206\u3068\u540c\u3058\u30c7\u30fc\u30bf\u3092 ",(0,a.kt)("strong",{parentName:"p"},"\u5148\u306b")," \u7de8\u96c6\u3057\u3066\u3044\u305f\u3068\u304d\u306f ",(0,a.kt)("strong",{parentName:"p"},"conflict(\u7af6\u5408)")," \u304c\u767a\u751f\u3057\u307e\u3059\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u7af6\u5408\u3092\u8d77\u3053\u3057\u3066\u3057\u307e\u3046\u3053\u3068\u306f\u60aa\u3044\u3053\u3068\u3067\u306f\u306a\u3044\u306e\u3067\u5b89\u5fc3\u3057\u3066\u304f\u3060\u3055\u3044\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u305d\u3093\u306a\u3068\u304d\u306f\u3082\u3046\u4e00\u5ea6 ",(0,a.kt)("inlineCode",{parentName:"p"},"hunny")," > ",(0,a.kt)("inlineCode",{parentName:"p"},"data")," > ",(0,a.kt)("inlineCode",{parentName:"p"},"cells.json")," \u3092\u958b\u3044\u3066",(0,a.kt)("br",{parentName:"p"}),"\n","\u76f8\u624b\u306e\u5909\u66f4\u304c\u6b8b\u308b\u3088\u3046\u306b\u76f4\u3057\u3066\u3042\u3052\u3066\u304f\u3060\u3055\u3044\u3002\u8b72\u308a\u5408\u3044\u306e\u7cbe\u795e\u304c\u5927\u5207\u3067\u3059\u3002\n\u30d5\u30a1\u30a4\u30eb\u3092\u4fdd\u5b58\u3057\u305f\u3089\u3001"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},"$ git add data/cells.json\n$ git rebase --continue\n")),(0,a.kt)("p",{parentName:"admonition"},"\u3067\u89e3\u6c7a\u3057\u307e\u3059\u3002\n\u81ea\u5206\u304c\u4f5c\u3063\u305f\u5909\u66f4\u306f\u6d88\u3048\u3066\u3057\u307e\u3046\u306e\u3067\u3001\u3082\u3046\u4e00\u5ea6\u524d\u306e\u624b\u9806 ",(0,a.kt)("inlineCode",{parentName:"p"},"5.\u672c\u4f5c\u696d")," \u3078\u623b\u3063\u3066\u3084\u308a\u76f4\u3057\u3066\u304f\u3060\u3055\u3044\u3002")),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("p",null,"\u7279\u306b\u554f\u984c\u306a\u304f\u3053\u3053\u307e\u3067\u6765\u308c\u305f\u3089\u3001\u30b4\u30fc\u30eb\u306f\u3042\u3068\u5c11\u3057\u3067\u3059\uff01"))}s.isMDXComponent=!0},6934:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/eye-commit-789de5345c61738b6fa24a9d76bb5cef.gif"},848:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/stepper-6-2da913d493114ed4884336ac8449e125.png"}}]);