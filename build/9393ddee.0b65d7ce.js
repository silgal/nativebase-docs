(window.webpackJsonp=window.webpackJsonp||[]).push([[867],{1583:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,u=d["".concat(o,".").concat(m)]||d[m]||b[m]||i;return n?r.a.createElement(u,c(c({ref:t},l),{},{components:n})):r.a.createElement(u,c({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},940:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),i=(n(0),n(1583)),o={id:"center",title:"Center"},c={unversionedId:"center",id:"version-3.0.0-next.21/center",isDocsHomePage:!1,title:"Center",description:"Center is a layout component that centers its child within itself.",source:"@site/versioned_docs/version-3.0.0-next.21/center.md",slug:"/center",permalink:"/3.0.0-next.21/center",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.21/center.md",version:"3.0.0-next.21",sidebar:"version-3.0.0-next.21/componentsSidebar",previous:{title:"Box",permalink:"/3.0.0-next.21/box"},next:{title:"Column",permalink:"/3.0.0-next.21/Column"}},s=[{value:"Implements",id:"implements",children:[]},{value:"<strong>Import</strong>",id:"import",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Examples",id:"examples",children:[{value:"Icon frames",id:"icon-frames",children:[]},{value:"Square and Circle",id:"square-and-circle",children:[]}]},{value:"Props",id:"props",children:[]}],l={toc:s};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Center")," is a layout component that centers its child within itself."),Object(i.b)("h2",{id:"implements"},"Implements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Box")," from native-base/Box")),Object(i.b)("h2",{id:"import"},Object(i.b)("strong",{parentName:"h2"},"Import")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"import { Center, Square, Circle } from 'native-base';\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Center:"),"\xa0Centers its child, pass\xa0",Object(i.b)("inlineCode",{parentName:"li"},"width"),"\xa0and\xa0",Object(i.b)("inlineCode",{parentName:"li"},"height")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Square:"),"\xa0",Object(i.b)("inlineCode",{parentName:"li"},"Center")," but we need to pass\xa0",Object(i.b)("inlineCode",{parentName:"li"},"size"),"\xa0(width and height"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Circle:"),"\xa0",Object(i.b)("inlineCode",{parentName:"li"},"Center"),"\xa0with round\xa0",Object(i.b)("inlineCode",{parentName:"li"},"borderRadius"),", pass ",Object(i.b)("inlineCode",{parentName:"li"},"size")," (width and height)")),Object(i.b)("h2",{id:"usage"},"Usage"),Object(i.b)("p",null,"Put any child element inside it, give it any width or/and height. It'll ensure the child is centered."),Object(i.b)("div",{className:"snack-player","data-snack-name":"Center Usage","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Center%2C%20NativeBaseProvider%20%7D%20from%20'native-base'%3B%0Afunction%20CenterComponent()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CCenter%20bg%3D%22red.400%22%20height%3D%7B200%7D%20width%3D%7B200%7D%3E%0A%20%20%20%20%20%20This%20is%20the%20Center%0A%20%20%20%20%3C%2FCenter%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenterComponent%20%2F%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(i.b)("h2",{id:"examples"},"Examples"),Object(i.b)("h3",{id:"icon-frames"},"Icon frames"),Object(i.b)("p",null,"Center can be used to nicely position icons in the center and add frames around them."),Object(i.b)("div",{className:"snack-player","data-snack-name":"Center IconFrames","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%3B%0Aimport%20%7B%20Center%2C%20Box%2C%20HStack%2C%20Icon%2C%20NativeBaseProvider%20%7D%20from%20%22native-base%22%3B%0Afunction%20CenterComponent()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CHStack%3E%0A%20%20%20%20%20%20%3CCenter%20w%3D%2240px%22%20h%3D%2240px%22%20bg%3D%22blue.200%22%20color%3D%22white%22%3E%0A%20%20%20%20%20%20%20%20%3CIcon%0A%20%20%20%20%20%20%20%20%20%20name%3D%22audiotrack%22%0A%20%20%20%20%20%20%20%20%20%20type%3D%22MaterialIcons%22%0A%20%20%20%20%20%20%20%20%20%20color%3D%22red.300%22%0A%20%20%20%20%20%20%20%20%20%20boxSize%3D%7B6%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%20%20%3CCenter%20w%3D%2240px%22%20h%3D%2240px%22%20bg%3D%22tomato%22%3E%0A%20%20%20%20%20%20%20%20%3CBox%20fontWeight%3D%22bold%22%20fontSize%3D%22lg%22%20color%3D%22white%22%3E%0A%20%20%20%20%20%20%20%20%20%2020%0A%20%20%20%20%20%20%20%20%3C%2FBox%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FHStack%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenterComponent%20%2F%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(i.b)("h3",{id:"square-and-circle"},"Square and Circle"),Object(i.b)("p",null,"Square and Circle automatically centers its children."),Object(i.b)("div",{className:"snack-player","data-snack-name":"Center Square and Circle","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%3B%0Aimport%20%7B%0A%20%20Circle%2C%0A%20%20Square%2C%0A%20%20Box%2C%0A%20%20HStack%2C%0A%20%20Icon%2C%0A%20%20NativeBaseProvider%2C%0A%7D%20from%20%22native-base%22%3B%0Afunction%20CenterComponent()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CHStack%3E%0A%20%20%20%20%20%20%3CCircle%20size%3D%7B98%7D%20bg%3D%22tomato%22%3E%0A%20%20%20%20%20%20%20%20%3CIcon%0A%20%20%20%20%20%20%20%20%20%20name%3D%22audiotrack%22%0A%20%20%20%20%20%20%20%20%20%20type%3D%22MaterialIcons%22%0A%20%20%20%20%20%20%20%20%20%20color%3D%22white%22%0A%20%20%20%20%20%20%20%20%20%20boxSize%3D%7B8%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCircle%3E%0A%20%20%20%20%20%20%3CSquare%20size%3D%22lg%22%20bg%3D%22blue.300%22%3E%0A%20%20%20%20%20%20%20%20%3CBox%20fontWeight%3D%22bold%22%20fontSize%3D%22lg%22%20color%3D%22white%22%3E%0A%20%20%20%20%20%20%20%20%20%2020%0A%20%20%20%20%20%20%20%20%3C%2FBox%3E%0A%20%20%20%20%20%20%3C%2FSquare%3E%0A%20%20%20%20%3C%2FHStack%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenterComponent%20%2F%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(i.b)("h2",{id:"props"},"Props"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Center")," implements ",Object(i.b)("strong",{parentName:"p"},"Box")," , so all the ",Object(i.b)("inlineCode",{parentName:"p"},"Box Props")," can be passed to ",Object(i.b)("strong",{parentName:"p"},"Center.")))}p.isMDXComponent=!0}}]);