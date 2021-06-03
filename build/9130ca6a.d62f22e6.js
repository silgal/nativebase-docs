(window.webpackJsonp=window.webpackJsonp||[]).push([[845],{1583:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return u}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),d=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=d(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(n),m=a,u=p["".concat(o,".").concat(m)]||p[m]||b[m]||r;return n?i.a.createElement(u,c(c({ref:t},l),{},{components:n})):i.a.createElement(u,c({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<r;l++)o[l]=n[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},918:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return d}));var a=n(3),i=n(7),r=(n(0),n(1583)),o={id:"link",title:"Link"},c={unversionedId:"link",id:"version-3.0.0-next.27/link",isDocsHomePage:!1,title:"Link",description:"Links are accessible elements used primarily for navigation. This component is styled to resemble a hyperlink.",source:"@site/versioned_docs/version-3.0.0-next.27/link.md",slug:"/link",permalink:"/3.0.0-next.27/link",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.27/link.md",version:"3.0.0-next.27",sidebar:"version-3.0.0-next.27/componentsSidebar",previous:{title:"NumberInput",permalink:"/3.0.0-next.27/numberInput"},next:{title:"PinInput",permalink:"/3.0.0-next.27/pinInput"}},s=[{value:"<strong>Import</strong>",id:"import",children:[]},{value:"Implements",id:"implements",children:[]},{value:"Usage",id:"usage",children:[]},{value:"External Link",id:"external-link",children:[]},{value:"Link without Underline",id:"link-without-underline",children:[]},{value:"Link custom OnClick",id:"link-custom-onclick",children:[]},{value:"Link around containers",id:"link-around-containers",children:[]},{value:"Props",id:"props",children:[{value:"Link",id:"link",children:[]}]}],l={toc:s};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Links are accessible elements used primarily for navigation. This component is styled to resemble a hyperlink."),Object(r.b)("h2",{id:"import"},Object(r.b)("strong",{parentName:"h2"},"Import")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"import { Link } from 'native-base';\n")),Object(r.b)("h2",{id:"implements"},"Implements"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"View"),", ",Object(r.b)("inlineCode",{parentName:"li"},"Linking"),", ",Object(r.b)("inlineCode",{parentName:"li"},"TouchableWithoutFeedback")," from react-native")),Object(r.b)("h2",{id:"usage"},"Usage"),Object(r.b)("div",{className:"snack-player","data-snack-name":"Link Usage","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%3B%0Aimport%20%7B%0A%20%20Heading%2C%0A%20%20Link%2C%0A%20%20View%2C%0A%20%20Text%2C%0A%20%20Box%2C%0A%20%20NativeBaseProvider%2C%0A%7D%20from%20%22native-base%22%3B%0A%0Afunction%20LinkComponent()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CView%3E%0A%20%20%20%20%20%20%3CHeading%3EThis%20is%20default%20Link%3C%2FHeading%3E%0A%20%20%20%20%20%20%3CLink%20mt%3D%7B4%7D%20fontSize%3D%22xl%22%3E%0A%20%20%20%20%20%20%20%20Default%20Link%0A%20%20%20%20%20%20%3C%2FLink%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CLinkComponent%20%2F%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(r.b)("h2",{id:"external-link"},"External Link"),Object(r.b)("div",{className:"snack-player","data-snack-name":"Link External link","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%3B%0Aimport%20%7B%0A%20%20Heading%2C%0A%20%20Link%2C%0A%20%20View%2C%0A%20%20Text%2C%0A%20%20Box%2C%0A%20%20NativeBaseProvider%2C%0A%7D%20from%20%22native-base%22%3B%0A%0Afunction%20LinkComponent()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CView%3E%0A%20%20%20%20%20%20%3CHeading%3EExternal%20Link%3C%2FHeading%3E%0A%20%20%20%20%20%20%3CLink%20href%3D%22https%3A%2F%2Fnativebase.io%22%20isExternal%20mt%3D%7B4%7D%3E%0A%20%20%20%20%20%20%20%20https%3A%2F%2Fnativebase.io%0A%20%20%20%20%20%20%3C%2FLink%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CLinkComponent%20%2F%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(r.b)("h2",{id:"link-without-underline"},"Link without Underline"),Object(r.b)("div",{className:"snack-player","data-snack-name":"Link Link without Underline","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%3B%0Aimport%20%7B%0A%20%20Heading%2C%0A%20%20Link%2C%0A%20%20View%2C%0A%20%20Text%2C%0A%20%20Box%2C%0A%20%20NativeBaseProvider%2C%0A%7D%20from%20%22native-base%22%3B%0A%0Afunction%20LinkComponent()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CView%3E%0A%20%20%20%20%20%20%3CHeading%3ELink%20without%20underline%3C%2FHeading%3E%0A%20%20%20%20%20%20%3CLink%20isUnderlined%3D%7Bfalse%7D%20mt%3D%7B4%7D%3E%0A%20%20%20%20%20%20%20%20www.google.com%0A%20%20%20%20%20%20%3C%2FLink%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CLinkComponent%20%2F%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(r.b)("h2",{id:"link-custom-onclick"},"Link custom OnClick"),Object(r.b)("div",{className:"snack-player","data-snack-name":"Link Link custom OnClick","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%3B%0Aimport%20%7B%0A%20%20Heading%2C%0A%20%20Link%2C%0A%20%20View%2C%0A%20%20Text%2C%0A%20%20Box%2C%0A%20%20NativeBaseProvider%2C%0A%7D%20from%20%22native-base%22%3B%0A%0Afunction%20LinkComponent()%20%7B%0A%20%20const%20%5Bstate%2C%20setState%5D%20%3D%20React.useState(false)%3B%0A%20%20const%20toggleState%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20setState(!state)%3B%0A%20%20%7D%3B%0A%20%20return%20(%0A%20%20%20%20%3CView%3E%0A%20%20%20%20%20%20%3CHeading%3ECustom%20onClick%20Functionality%3C%2FHeading%3E%0A%20%20%20%20%20%20%3CLink%20onClick%3D%7BtoggleState%7D%20mt%3D%7B4%7D%3E%0A%20%20%20%20%20%20%20%20Click%20here%20to%20toggle%20the%20color%20of%20box.%0A%20%20%20%20%20%20%3C%2FLink%3E%0A%20%20%20%20%20%20%3CBox%20h%3D%22100%22%20w%3D%22100%22%20bg%3D%7Bstate%20%3F%20%22orange.300%22%20%3A%20%22blue.300%22%7D%20%2F%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CLinkComponent%20%2F%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(r.b)("h2",{id:"link-around-containers"},"Link around containers"),Object(r.b)("div",{className:"snack-player","data-snack-name":"Link Link around containers","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%3B%0Aimport%20%7B%0A%20%20Heading%2C%0A%20%20Link%2C%0A%20%20View%2C%0A%20%20Text%2C%0A%20%20Box%2C%0A%20%20NativeBaseProvider%2C%0A%7D%20from%20%22native-base%22%3B%0A%0Afunction%20LinkComponent()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CView%3E%0A%20%20%20%20%20%20%3CHeading%3EComposite%20Link%20Example%3C%2FHeading%3E%0A%20%20%20%20%20%20%3CLink%20href%3D%22https%3A%2F%2Fnativebase.io%22%20isExternal%20mt%3D%7B4%7D%3E%0A%20%20%20%20%20%20%20%20%3CBox%20my%3D%7B3%7D%20p%3D%7B8%7D%20bg%3D%22seagreen%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3CText%20color%3D%22white%22%20fontSize%3D%7B16%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20Box%0A%20%20%20%20%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3C%2FBox%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7B%7B%20color%3A%20%22gray%22%20%7D%7D%3E%0A%20%20%20%20%20%20%20%20%20%20Clicking%20anywhere%20will%20trigger%20the%20link%0A%20%20%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CBox%20my%3D%7B3%7D%20p%3D%7B8%7D%20bg%3D%22blue.300%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3CText%20color%3D%22white%22%20fontSize%3D%7B16%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20Box%0A%20%20%20%20%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3C%2FBox%3E%0A%20%20%20%20%20%20%3C%2FLink%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CLinkComponent%20%2F%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(r.b)("h2",{id:"props"},"Props"),Object(r.b)("p",null,"Apart from these all the ",Object(r.b)("inlineCode",{parentName:"p"},"Box")," component props can be passed."),Object(r.b)("h3",{id:"link"},"Link"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"isExternal"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"boolean"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"If true, the link will open in a browser."),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"onClick"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"function"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Function called when the link is clicked."),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-")))))}d.isMDXComponent=!0}}]);