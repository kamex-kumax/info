(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[14],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return p}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),p=i,m=u["".concat(l,".").concat(p)]||u[p]||h[p]||r;return n?a.createElement(m,o(o({ref:t},d),{},{components:n})):a.createElement(m,o({ref:t},d))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3878:function(e,t,n){"use strict";n.d(t,{r:function(){return o}});var a=n(7294),i="icon_1PGw",r=n(9205),o=function(e){return a.createElement("div",{className:"alert alert--primary",role:"alert",style:{margin:"2rem"}},a.createElement("div",{className:i},a.createElement(r.A,{icon:"\ud83d\udca1",active:"true"})),e.children)}},983:function(e,t,n){"use strict";n.d(t,{M:function(){return s}});var a=n(7294),i=n(9205),r="titleOffset_2I3u",o="iconContainer_1xRA",s=function(e){var t=e.title?a.createElement("div",{className:"card__header"},a.createElement("span",{className:o},e.icon&&a.createElement(i.A,{icon:e.icon,link:e.link,active:"true"})),a.createElement("h3",{className:e.icon&&r},e.title)):"";return a.createElement("div",{className:"card-demo",style:{margin:"2rem"}},a.createElement("div",{className:"card"},t,a.createElement("div",{className:"card__body"},a.createElement("p",null," ",e.children," "))))}},9205:function(e,t,n){"use strict";n.d(t,{A:function(){return c}});var a=n(7294),i="hidden_2JtY",r="iconContainer_2Rnc",o="visible_2147",s="link_Lh4h",l="clickable_3vcc",c=function(e){var t=" "+(e.active?o:i),n=s+" "+(e.link&&l);return a.createElement("div",{className:r+t},a.createElement("a",{href:e.link,className:n},e.icon||"\ud83d\ude80"))}},6649:function(e,t,n){"use strict";n.d(t,{x:function(){return r}});var a=n(7294),i="threeScene_3QXR",r=function(e){return a.createElement("iframe",{className:i,width:"100%",height:"300",key:Math.random(),src:e.link,frameBorder:"0"})}},4061:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return I},frontMatter:function(){return y},metadata:function(){return w},toc:function(){return k}});var a=n(2122),i=n(9756),r=n(7294),o=n(3905),s=n(983),l=n(3878),c=n(6649),d="ifcTabItem_3jhz",h="ifcTabContent_2OBh",u="linkContainer_2bzd",p="iconSpacing_2WTy",m=n(9205),f=function(e){var t,n=0,a=(0,r.useState)(e.items.map((function(e){return{name:e.name,selected:0===n,content:e.content,key:n++,icon:e.icon,link:e.link}}))),i=a[0],o=a[1],s=(0,r.useState)(!1),l=s[0],c=s[1];function f(e){return e.selected?" tabs__item--active ":""}function b(){return i.find((function(e){return e.selected}))}return r.createElement("div",null,r.createElement("ul",{className:"tabs ifc-tab"},i.map((function(e){return r.createElement("li",{onClick:function(){return t=e.key,(n=[].concat(i)).forEach((function(e){return e.selected=!1})),n.find((function(e){return e.key===t})).selected=!0,void o(n);var t,n},className:"tabs__item "+d+f(e),key:e.key},function(e){return e.icon?r.createElement("div",{className:p},r.createElement(m.A,{icon:e.icon,active:"true"})):e.name}(e))}))),r.createElement("div",{className:h,onMouseEnter:function(){return c(!0)},onMouseLeave:function(){return c(!1)}},b().content,(t=b()).link?r.createElement("div",{className:u},r.createElement(m.A,{link:t.link,active:t.link&&l})):null))},b=["components"],y={title:"Introduction",sidebar_position:1},w={unversionedId:"Introduction",id:"Introduction",isDocsHomePage:!1,title:"Introduction",description:"\ud83c\udfae",source:"@site/docs/Introduction.mdx",sourceDirName:".",slug:"/Introduction",permalink:"/info/docs/Introduction",version:"current",sidebarPosition:1,frontMatter:{title:"Introduction",sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Hello world",permalink:"/info/docs/Hello world"}},k=[{value:"What is this library?",id:"what-is-this-library",children:[{value:"What is IFC?",id:"what-is-ifc",children:[]},{value:"The problem of IFC",id:"the-problem-of-ifc",children:[]},{value:"IFC.js to the rescue",id:"ifcjs-to-the-rescue",children:[]}]},{value:"IFC.js in a nutshell",id:"ifcjs-in-a-nutshell",children:[]},{value:"Who is this library for",id:"who-is-this-library-for",children:[]},{value:"Why is IFC.js different?",id:"why-is-ifcjs-different",children:[{value:"Multiplatform",id:"multiplatform",children:[]},{value:"Speed",id:"speed",children:[]},{value:"Features",id:"features",children:[]}]},{value:"Source code",id:"source-code",children:[]},{value:"Contribute",id:"contribute",children:[]}],g={toc:k};function I(e){var t=e.components,n=(0,i.Z)(e,b);return(0,o.kt)("wrapper",(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"  \ud83c\udfae\nIFC.js is a JavaScript library to load, display and edit IFC models in the browser. Try the ",(0,o.kt)("a",{parentName:"p",href:"https://ifcjs.github.io/web-ifc-viewer/examples/simple-html/"},"live demo")," with your IFC model and discover the power of IFC.js."),(0,o.kt)("h2",{id:"what-is-this-library"},"What is this library?"),(0,o.kt)("h3",{id:"what-is-ifc"},"What is IFC?"),(0,o.kt)("p",null,"  \ud83c\udfe0\nArchitects no longer draw building plans one by one, but create 3D models of buildings, much like the houses modelled in ",(0,o.kt)("a",{parentName:"p",href:"https://www.ea.com/es-es/games/the-sims"},"The SIMS"),". This way of working is called BIM (Building Information Model), because the models created contain both geometry and information."),(0,o.kt)("p",null,"  \ud83d\udd25\nHowever, a building is so complex that there is no single application that can create these models in their entirety. Each application has a specific mission: modelling geometry, calculating structures, making energy simulations, creating project documents, and so on."),(0,o.kt)("p",null,"  \ud83d\udc40\nThese tools come from multiple developers around the world and each one works in its format. In other words, the structural model created by a structural calculation application cannot be read by energy simulation software and vice versa. So how is it possible to create a model of a building from multiple tools?"),(0,o.kt)("p",null,"  \ud83c\udf89\nThe answer is ",(0,o.kt)("a",{parentName:"p",href:"https://www.buildingsmart.org/standards/bsi-standards/industry-foundation-classes/"},(0,o.kt)("strong",{parentName:"a"},"IFC")),", a format created by BuildingSMART to contain these 3D models of buildings. It is open, so anyone can read and write it. Yay!"),(0,o.kt)(l.r,{mdxType:"IfcAlert"},"Thanks to IFC any developer can freely create BIM apps that can communicate with the apps of the big development companies in the construction sector."),(0,o.kt)("h3",{id:"the-problem-of-ifc"},"The problem of IFC"),(0,o.kt)("p",null,"Anyone who wants to make a BIM application ",(0,o.kt)("strong",{parentName:"p"},"needs to read and write IFC files")," to be able to import and export information from other tools. Unfortunately, IFC is a format that is difficult to read and write. There are thousands of pages of documentation and creating and maintaining a self-made IFC parser is a huge task."),(0,o.kt)(s.M,{title:"\nCan you afford IFC?",mdxType:"IfcCard"},"\ud83d\udcb8 This is something only companies with several developers working full time on this could afford. It doesn't sound that open anymore, does it?"),(0,o.kt)("p",null,"In case you are curious about how an IFC looks like inside, here you have an example. Imagine parsing hundreds of thousands of lines like these:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"#6699= IFCCARTESIANPOINT((0.,-1.7053025E-13));\n#6701= IFCAXIS2PLACEMENT2D(#6699,#23);\n#6703= IFCCARTESIANPOINT((892.,-253.399999,150.));\n#6705= IFCAXIS2PLACEMENT3D(#6703,#15,#19);\n#6706= IFCEXTRUDEDAREASOLID(#6702,#6705,#19,506.8);\n#6707= IFCCOLOURRGB($,0.50196,0.501913,0.501960);\n")),(0,o.kt)("p",null,"  \ud83d\udc80\nEven if you are willing to create a parser from scratch and maintain it with every change in the IFC schema, there are several non-trivial questions to tackle this problem. How to manage memory in very large files? How to implement geometric generation efficiently? What to do when an IFC has not been defined correctly?"),(0,o.kt)("h3",{id:"ifcjs-to-the-rescue"},"IFC.js to the rescue"),(0,o.kt)("p",null,"It wouldn't make sense for all developers to have to implement their own IFC file reader and writer for their applications. Especially when we all want the same thing: ",(0,o.kt)("strong",{parentName:"p"},"importing and exporting geometry and data"),"."),(0,o.kt)(s.M,{mdxType:"IfcCard"},"IFC.js is a JavaScript library that makes it super easy to ",(0,o.kt)("b",null,"read and write IFC files"),"."),(0,o.kt)("p",null,"This allows developers of architecture and construction applications to work in IFC effortlessly and focus on the functionalities that add value to their business."),(0,o.kt)("h2",{id:"ifcjs-in-a-nutshell"},"IFC.js in a nutshell"),(0,o.kt)("p",null,"IFC.js has two focuses:"),(0,o.kt)(s.M,{icon:"\ud83d\udc8e",title:"Geometry",mdxType:"IfcCard"}," IFC.js can generate 3D scenes because it is compatible with 3D libraries such as Three.js or Babylon.js. This means that you can create 3D BIM tools right away."),(0,o.kt)(s.M,{icon:"\ud83d\udd17",title:"Data",mdxType:"IfcCard"}," High-level access to all the properties associated with that geometry. This means easy access to data on the building components, their materials, thermal characteristics, structural strength, etc."),(0,o.kt)("p",null,"Creating BIM applications with IFC.js is as easy as creating a webpage with JavaScript, HTML and CSS."),(0,o.kt)(c.x,{link:"https://ifcjs.github.io/hello-world/examples/web-ifc-three/introduction/",mdxType:"Scene"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { IfcLoader } from 'web-ifc-three';\nimport { Scene } from 'three';\n\n// Creates THREE.js scene\nconst scene = new Scene();\n\n// ...\n\n// Loads IFC and adds it to the scene\nconst ifcLoader = new IfcLoader();\nifcLoader.load(ifcURL, (geometry) => scene.add(geometry));\n")),(0,o.kt)("h2",{id:"who-is-this-library-for"},"Who is this library for"),(0,o.kt)("p",null,"This library is for anyone who wants to develop BIM applications. This includes both developers creating applications for the construction industry and architects and other professionals who want to take advantage of the data in their IFC files."),(0,o.kt)("p",null,"To use this library it is necessary to have a basic knowledge of JavaScript, HTML and CSS. This knowledge is beyond the scope of this documentation. You'll also need to use some 3D libraries to display the geometry of the IFC (Three.js or Babylon.js)."),(0,o.kt)("p",null,"  \ud83d\ude0a\nIf you don't know where to start, we suggest you take a look ",(0,o.kt)("a",{parentName:"p",href:"https://threejsfundamentals.org/"},"here")," or just join the ",(0,o.kt)("a",{parentName:"p",href:"https://discord.com/invite/g7Uzn2KSwB"},"Discord Channel")," and say hi."),(0,o.kt)("h2",{id:"why-is-ifcjs-different"},"Why is IFC.js different?"),(0,o.kt)("p",null,"IFC.js is a library written by and for JavaScript, arguably one of the most ubiquitous languages. This means that it is compatible with web browsers, desktop and mobile applications. JavaScript is also one of the easiest languages to learn and allows you to build user interfaces with HTML and CSS. In other words, creating BIM applications with IFC.js is as easy as creating a web page."),(0,o.kt)("h3",{id:"multiplatform"},"Multiplatform"),(0,o.kt)("p",null,"You can use IFC.js to create open BIM applications for any platform:"),(0,o.kt)(f,{items:[{icon:"\ud83c\udf0f",content:(0,o.kt)("p",null,(0,o.kt)("b",null,"Frontend web applications")," that read and write IFC files and display 3D without relying on server communication can be created using ",(0,o.kt)("b",null,"vanilla JavaScript")," or other tools such as ",(0,o.kt)("b",null,"React, Vue, Angular, Svelte, etc"),". That is, ",(0,o.kt)("i",null,"with IFC.js we can turn any web browser into an open BIM app."))},{icon:"\ud83c\udfe2",content:(0,o.kt)("p",null,"There are cases where the IFC file cannot be processed by the client. For example, a mobile  device may not have the power to display several medium or large IFCs. In this case, it is possible to ",(0,o.kt)("b",null,"use IFC.js on the server")," via ",(0,o.kt)("a",{href:"https://nodejs.org/en/"},"Node.js")," and send the Three.js scene already prepared to the client.")},{icon:"\ud83d\udcbb",content:(0,o.kt)("p",null,"Sometimes we don't want to create web applications, but ",(0,o.kt)("b",null,"native desktop applications that run on Windows, iOS and Linux"),". This is possible thanks to technologies like ",(0,o.kt)("a",{href:"https://www.electronjs.org/"},"Electron"),". These native applications will be programmed in the same way as web applications; HTML, CSS, JavaScript, React, Vue, etc.")},{icon:"\ud83d\udcf1",content:(0,o.kt)("p",null,"IFC.js also supports ",(0,o.kt)("a",{href:"https://reactnative.dev/"},"React Native"),", which maps WebGL code to native OpenGL. This means that you can create IFC-compatible ",(0,o.kt)("b",null,"Open BIM apps that run on Android and iOS")," easily.")}],mdxType:"IfcTab"}),(0,o.kt)("h3",{id:"speed"},"Speed"),(0,o.kt)("p",null,"  \u26a1\ufe0f\nIf you have experience with web applications, you might be thinking that the weak point of a JavaScript-based IFC library is performance. However, the core of the library is developed in C++ combined with WebAssembly and ",(0,o.kt)("a",{parentName:"p",href:"https://emscripten.org/"},"Emscripten"),". It is designed specifically for ",(0,o.kt)("strong",{parentName:"p"},"maximum performance"),", allowing IFC.js to approach the speed and performance of desktop applications while running directly in the browser."),(0,o.kt)("h3",{id:"features"},"Features"),(0,o.kt)(s.M,{mdxType:"IfcCard"},"\ud83d\udc53 IFC.js can ",(0,o.kt)("b",null,"read")," IFC files seamlessly."),(0,o.kt)(s.M,{mdxType:"IfcCard"},"\ud83c\udfd0 Generate ",(0,o.kt)("b",null,"3D geometry")," that runs on 60 fps in a browser."),(0,o.kt)(s.M,{mdxType:"IfcCard"},"\ud83c\udfa8 Easily edit geometry ",(0,o.kt)("b",null,"appearance")," with the power of Three.js."),(0,o.kt)(s.M,{mdxType:"IfcCard"},"\ud83c\udfe0\ud83c\udfe0\ud83c\udfe0 Load ",(0,o.kt)("b",null,"multiple")," federated IFC models."),(0,o.kt)(s.M,{mdxType:"IfcCard"},"\ud83d\udcc3 Retrieve ",(0,o.kt)("b",null,"IFC properties")," for reports and databases."),(0,o.kt)(s.M,{mdxType:"IfcCard"},"\u270d IFC.js also can ",(0,o.kt)("b",null,"edit and write")," IFC files from scratch."),(0,o.kt)("h2",{id:"source-code"},"Source code"),(0,o.kt)("p",null,"IFC.js is a large, multi-language library (C++, TypeScript JavaScript, etc). Having it in a single repository would be difficult and unwieldy. For that reason, the library exists in multiple repositories, where each one has its purpose. You can find them ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/IFCjs"},"here"),"."),(0,o.kt)(f,{items:[{name:"web-ifc",link:"https://ifcjs.github.io/info/docs/Guide/web-ifc/Introduction",content:(0,o.kt)("p",null,"The core of the library: an IFC ",(0,o.kt)("b",null,"parser and geometry generator")," written from scratch in C++ and compiled via Emscripten to WebAssembly. This repository encapsulates the complexity of reading IFC files and loading their data into memory.")},{name:"web-ifc-three",link:"https://ifcjs.github.io/info/docs/Guide/web-ifc-three/Introduction",content:(0,o.kt)("p",null,"This library adapts web-ifc to Three.js, generating an ",(0,o.kt)("b",null,"optimized 3D scene where users can directly interact with the IFC"),". This library is ",(0,o.kt)("a",{href:"https://threejs.org/examples/webgl_loader_ifc.html"},"the official Three.js IFC Loader"),". Thanks to this adapter open BIM applications can be created with Three.js in just two lines of code.")},{name:"web-ifc-viewer",link:"https://ifcjs.github.io/info/docs/Guide/web-ifc-viewer/Introduction",content:(0,o.kt)("p",null,"This is a browser-based ",(0,o.kt)("a",{href:"https://ifcjs.github.io/web-ifc-viewer/examples/simple-html/"},"IFC viewer")," with ",(0,o.kt)("b",null,"many examples of what can be done with IFC.js"),". Scene navigation, material changes, element selection by clicking on them, section plans, etc. There is an example of all these functionalities in this repository, so it can be reused in open BIM applications out of the box.")}],mdxType:"IfcTab"}),(0,o.kt)("h2",{id:"contribute"},"Contribute"),(0,o.kt)("p",null,"Do you want to help us keep improving the world of Open BIM development with IFC.js? The library is big, so you will have to choose where you want to participate."),(0,o.kt)(s.M,{icon:"\ud83e\udd1d",title:"I can't code, but I want to get in",mdxType:"IfcCard"},"That's great! There are tons of things you can do aside from coding. Get into the ",(0,o.kt)("a",{href:"https://discord.com/invite/g7Uzn2KSwB"},"Discord channel")," to find out how."),(0,o.kt)(s.M,{icon:"\ud83e\udde0",title:"Parsing, geometry and C++",mdxType:"IfcCard"},"If you are passionate about C++, WebAssembly, parsing or the nitty-gritty of IFC, you can help us with the fastest open source BIM parser in the industry: ",(0,o.kt)("a",{href:"https://github.com/tomvandig/web-ifc"},"web-ifc"),"."),(0,o.kt)(s.M,{icon:"\u2728",title:"Three.js, geometry and Typescript",mdxType:"IfcCard"},"If you are a Three.js developer, you can help us with ",(0,o.kt)("a",{href:"https://github.com/IFCjs/web-ifc-three"},"web-ifc-three"),", which is ",(0,o.kt)("a",{href:"https://threejs.org/examples/webgl_loader_ifc.html"},"the official Three.js IFC Loader"),"."),(0,o.kt)(s.M,{icon:"\ud83c\udf08",title:"BIM tools, brainstorming and UX",mdxType:"IfcCard"},"If you are interested in creating cool open BIM applications and you have great ideas for BIM tools or user interfaces, help us make ",(0,o.kt)("a",{href:"https://github.com/IFCjs/web-ifc-viewer"},"web-ifc-viewer")," the best IFC viewer on the market."),(0,o.kt)("p",null,"In any case, we encourage you to stop by the ",(0,o.kt)("a",{parentName:"p",href:"https://discord.com/invite/g7Uzn2KSwB"},"Discord channel"),", say hello and tell us what's on your mind, so we can give you some guidance."))}I.isMDXComponent=!0}}]);