(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[593],{983:function(e,t,i){"use strict";i.d(t,{M:function(){return l}});var n=i(7294),a=i(9205),o="titleOffset_2I3u",r="iconContainer_1xRA",l=function(e){var t=e.title?n.createElement("div",{className:"card__header"},n.createElement("span",{className:r},e.icon&&n.createElement(a.A,{icon:e.icon,link:e.link,active:"true"})),n.createElement("h3",{className:e.icon&&o},e.title)):"";return n.createElement("div",{className:"card-demo",style:{margin:"2rem"}},n.createElement("div",{className:"card"},t,n.createElement("div",{className:"card__body"},n.createElement("p",null," ",e.children," "))))}},9205:function(e,t,i){"use strict";i.d(t,{A:function(){return d}});var n=i(7294),a="hidden_2JtY",o="iconContainer_2Rnc",r="visible_2147",l="link_Lh4h",s="clickable_3vcc",d=function(e){var t=" "+(e.active?r:a),i=l+" "+(e.link&&s);return n.createElement("div",{className:o+t},n.createElement("a",{href:e.link,className:i},e.icon||"\ud83d\ude80"))}},4848:function(e,t,i){"use strict";i.r(t),i.d(t,{frontMatter:function(){return s},metadata:function(){return d},toc:function(){return c},default:function(){return m}});var n=i(2122),a=i(9756),o=(i(7294),i(3905)),r=i(983),l=["components"],s={title:"Getting started",sidebar_position:1},d={unversionedId:"Guide/Getting started",id:"Guide/Getting started",isDocsHomePage:!1,title:"Getting started",description:"Understanding IFC.js",source:"@site/docs/Guide/Getting started.mdx",sourceDirName:"Guide",slug:"/Guide/Getting started",permalink:"/info/docs/Guide/Getting started",version:"current",sidebarPosition:1,frontMatter:{title:"Getting started",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Hello world",permalink:"/info/docs/Hello world"},next:{title:"Introduction",permalink:"/info/docs/Guide/web-ifc/Introduction"}},c=[{value:"Understanding IFC.js",id:"understanding-ifcjs",children:[]}],u={toc:c};function m(e){var t=e.components,i=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"understanding-ifcjs"},"Understanding IFC.js"),(0,o.kt)("p",null,"  \ud83d\udc1f\ud83d\udc20\ud83d\udc21\nIFC.js is not just a library: it is an ecosystem of libraries and projects that make creating BIM tools trivial. There are two reasons for this modularity:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"To be able to use in our applications only what we need."),(0,o.kt)("li",{parentName:"ul"},"To make the library more maintainable.")),(0,o.kt)("p",null,"It is important to understand which pieces make it up in order to know what to use in each case. IFC.js is essentially composed of 3 layers, each with a unique responsibility."),(0,o.kt)(r.M,{icon:"\ud83e\udde9",title:"web-ifc",link:"http://localhost:3000/info/docs/Guide/web-ifc/Introduction",mdxType:"IfcCard"},(0,o.kt)("div",{style:{margin:"1rem 0"}},"An IFC file parser. It is able to read all information from an IFC, edit it and write new files. It has no 3d viewer, it only works with data."),(0,o.kt)("div",{style:{margin:"1rem 0"}}),(0,o.kt)("div",null,(0,o.kt)("b",null,"When to use:")),(0,o.kt)("div",{style:{margin:"1rem 0"}},"When you want to read or write IFC files without any viewer. This library gives full power over the data, but requires more understanding of the IFC schema to use it."),(0,o.kt)("div",null,(0,o.kt)("b",null,"Depends on: "),"-")),(0,o.kt)(r.M,{icon:"\ud83e\udde9",title:"web-ifc-three",link:"http://localhost:3000/info/docs/Guide/web-ifc-three/Introduction",mdxType:"IfcCard"},(0,o.kt)("div",{style:{margin:"1rem 0"}},"A 3D BIM viewer. It allows to view and navigate the 3d model at 60 fps, select elements and easily read all the IFC data to display it to the end user. It is the official IFC Loader of three.js."),(0,o.kt)("div",null,(0,o.kt)("b",null,"When to use:")),(0,o.kt)("div",{style:{margin:"1rem 0"}},"When you want to make a BIM viewer for your application and you want to have full control over all implemented functionalities"),(0,o.kt)("div",null,(0,o.kt)("b",null,"Depends on: "),"web-ifc")),(0,o.kt)(r.M,{icon:"\ud83e\udde9",title:"web-ifc-viewer",link:"http://localhost:3000/info/docs/Guide/web-ifc-viewer/Introduction",mdxType:"IfcCard"},(0,o.kt)("div",{style:{margin:"1rem 0"}},"A 3D BIM viewer with many tools and functionalities already implemented (section drawings, dimensions, etc.), allowing you to create BIM tools with very little effort."),(0,o.kt)("div",null,(0,o.kt)("b",null,"When to use:")),(0,o.kt)("div",{style:{margin:"1rem 0"}},"When you want to create a BIM viewer and you don't want to spend time implementing all the model navigation tools you would like to have."),(0,o.kt)("div",null,(0,o.kt)("b",null,"Depends on: "),"web-ifc-three")))}m.isMDXComponent=!0}}]);