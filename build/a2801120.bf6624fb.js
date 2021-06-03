(window.webpackJsonp=window.webpackJsonp||[]).push([[959],{1032:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),o=(n(0),n(1583)),l={id:"Column",title:"Column"},i={unversionedId:"Column",id:"version-3.0.0-next.27/Column",isDocsHomePage:!1,title:"Column",description:"The mandatory wrapper for building Column Layouts",source:"@site/versioned_docs/version-3.0.0-next.27/column.md",slug:"/Column",permalink:"/3.0.0-next.27/Column",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.27/column.md",version:"3.0.0-next.27",sidebar:"version-3.0.0-next.27/componentsSidebar",previous:{title:"Center",permalink:"/3.0.0-next.27/center"},next:{title:"Container",permalink:"/3.0.0-next.27/container"}},c=[{value:"Implements",id:"implements",children:[]},{value:"Example",id:"example",children:[]},{value:"Extra props",id:"extra-props",children:[]},{value:"Implements",id:"implements-1",children:[]},{value:"Example",id:"example-1",children:[]},{value:"Props",id:"props",children:[{value:"Column",id:"column-1",children:[]}]}],b={toc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The mandatory wrapper for building Column Layouts"),Object(o.b)("h2",{id:"implements"},"Implements"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"View")," from ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://reactnative.dev/docs/view"}),"react-native")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://styled-system.com/api/#color"}),Object(o.b)("inlineCode",{parentName:"a"},"color")),", ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://styled-system.com/api/#space"}),Object(o.b)("inlineCode",{parentName:"a"},"space")),", ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://styled-system.com/api/#layout"}),Object(o.b)("inlineCode",{parentName:"a"},"layout")),", ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://styled-system.com/api/#flexbox"}),Object(o.b)("inlineCode",{parentName:"a"},"flexbox"))," & ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://styled-system.com/api/#border"}),Object(o.b)("inlineCode",{parentName:"a"},"border"))," from ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://styled-system.com/api/"}),Object(o.b)("inlineCode",{parentName:"a"},"style-system")))),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("div",{className:"snack-player","data-snack-name":"Columns Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%3B%0Aimport%20%7B%20Column%2C%20Text%2C%20NativeBaseProvider%20%7D%20from%20%22native-base%22%3B%0Afunction%20ColumnComponent()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CColumn%20borderRadius%3D%7B4%7D%20flexGrow%3D%7B1%7D%20bg%3D%22green.500%22%3E%0A%20%20%20%20%20%20%3CText%3ETest%20Text%3C%2FText%3E%0A%20%20%20%20%20%20%3CText%3ETesting%20this%20text%20with%20HStacks%3C%2FText%3E%0A%20%20%20%20%3C%2FColumn%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CColumnComponent%20%2F%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(o.b)("h2",{id:"extra-props"},"Extra props"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"children")," : Renders components as ",Object(o.b)("inlineCode",{parentName:"li"},"Box")," children. Accepts a ",Object(o.b)("inlineCode",{parentName:"li"},"JSX.Element")," or an array of ",Object(o.b)("inlineCode",{parentName:"li"},"JSX.Element"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"space")," : Adds space between the children. Accepts a number.")),Object(o.b)("h1",{id:"column"},"Column"),Object(o.b)("p",null,"This is the Box to be used inside Columns."),Object(o.b)("h2",{id:"implements-1"},"Implements"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"VStack")," from nativebase")),Object(o.b)("h2",{id:"example-1"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"<Columns space={3} height={100} mb={3}>\n    <Column borderRadius={4} shadow={1} flexGrow={1} bg='green.500' />\n    <Column borderRadius={4} shadow={1} width={1 / 2.5} bg='pink.300' />\n    <Column borderRadius={4} shadow={1} flexGrow={1.5} bg='indigo.800' />\n</Columns>\n")),Object(o.b)("h2",{id:"props"},"Props"),Object(o.b)("h3",{id:"column-1"},"Column"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Default"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"shadow"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"number"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Applies column shadow and accepts a number from 0 to 9 ."),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-")))))}p.isMDXComponent=!0},1583:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),p=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),s=p(n),u=a,d=s["".concat(l,".").concat(u)]||s[u]||m[u]||o;return n?r.a.createElement(d,i(i({ref:t},b),{},{components:n})):r.a.createElement(d,i({ref:t},b))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var b=2;b<o;b++)l[b]=n[b];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);