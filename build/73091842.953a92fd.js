(window.webpackJsonp=window.webpackJsonp||[]).push([[664],{1583:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=r.a.createContext({}),b=function(e){var t=r.a.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=b(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),s=b(a),m=n,u=s["".concat(c,".").concat(m)]||s[m]||p[m]||i;return a?r.a.createElement(u,l(l({ref:t},d),{},{components:a})):r.a.createElement(u,l({ref:t},d))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,c=new Array(i);c[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var d=2;d<i;d++)c[d]=a[d];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},736:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return o})),a.d(t,"default",(function(){return b}));var n=a(3),r=a(7),i=(a(0),a(1583)),c={id:"text",title:"Text"},l={unversionedId:"text",id:"version-3.0.0-next.34/text",isDocsHomePage:!1,title:"Text",description:"Text is used to render text and paragraphs within an interface.",source:"@site/versioned_docs/version-3.0.0-next.34/text.md",slug:"/text",permalink:"/3.0.0-next.34/text",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.34/text.md",version:"3.0.0-next.34",sidebar:"version-3.0.0-next.34/componentsSidebar",previous:{title:"Toast",permalink:"/3.0.0-next.34/toast"},next:{title:"Heading",permalink:"/3.0.0-next.34/heading"}},o=[{value:"Implements",id:"implements",children:[]},{value:"Import",id:"import",children:[]},{value:"Examples",id:"examples",children:[{value:"ChangingFontSize",id:"changingfontsize",children:[]},{value:"Truncated",id:"truncated",children:[]},{value:"Nested",id:"nested",children:[]},{value:"Overridden",id:"overridden",children:[]}]},{value:"Props",id:"props",children:[]}],d={toc:o};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Text")," is used to render text and paragraphs within an interface."),Object(i.b)("h2",{id:"implements"},"Implements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://reactnative.dev/docs/text"}),Object(i.b)("inlineCode",{parentName:"a"},"Text"))," from ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://reactnative.dev"}),"React Native"))),Object(i.b)("h2",{id:"import"},"Import"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"import { Text } from 'native-base';\n")),Object(i.b)("h2",{id:"examples"},"Examples"),Object(i.b)("h3",{id:"changingfontsize"},"ChangingFontSize"),Object(i.b)("div",{className:"snack-player","data-snack-name":"Text ChangingFontSize","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Text%2C%20VStack%2C%20NativeBaseProvider%2C%20Center%20%7D%20from%20'native-base'%3B%0A%0Afunction%20TextComponent%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CVStack%20space%3D%7B2%7D%20alignItems%3D%22center%22%3E%0A%20%20%20%20%20%20%3CText%20fontSize%3D%22xs%22%3EExtra%20Small%3C%2FText%3E%0A%20%20%20%20%20%20%3CText%20fontSize%3D%22sm%22%3ESmall%3C%2FText%3E%0A%20%20%20%20%20%20%3CText%20fontSize%3D%22md%22%3EMedium%3C%2FText%3E%0A%20%20%20%20%20%20%3CText%20fontSize%3D%22lg%22%3ELarge%3C%2FText%3E%0A%20%20%20%20%20%20%3CText%20fontSize%3D%22xl%22%3EExtra%20Large%3C%2FText%3E%0A%20%20%20%20%20%20%3CText%20fontSize%3D%222xl%22%3E2%20Extra%20Large%3C%2FText%3E%0A%20%20%20%20%20%20%3CText%20fontSize%3D%223xl%22%3E3%20Extra%20Large%3C%2FText%3E%0A%20%20%20%20%20%20%3CText%20fontSize%3D%224xl%22%3E4%20Extra%20Large%3C%2FText%3E%0A%20%20%20%20%20%20%3CText%20fontSize%3D%225xl%22%3E5%20Extra%20Large%3C%2FText%3E%0A%20%20%20%20%20%20%3CText%20fontSize%3D%226xl%22%3E6%20Extra%20Large%3C%2FText%3E%0A%20%20%20%20%3C%2FVStack%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CTextComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(i.b)("h3",{id:"truncated"},"Truncated"),Object(i.b)("div",{className:"snack-player","data-snack-name":"Text Truncated","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Text%2C%20VStack%2C%20Heading%2C%20NativeBaseProvider%2C%20Center%20%7D%20from%20'native-base'%3B%0A%0Afunction%20TextComponent%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CVStack%20space%3D%7B2%7D%20alignItems%3D%22center%22%3E%0A%20%20%20%20%20%20%3CHeading%20mt%3D%7B3%7D%3ETruncated%20%3C%2FHeading%3E%0A%20%20%20%20%20%20%3CText%20isTruncated%3E%0A%20%20%20%20%20%20%20%20Lorem%20ipsum%20is%20placeholder%20text%20commonly%20used%20in%20the%20graphic%2C%20print%2C%20and%0A%20%20%20%20%20%20%20%20publishing%20industries%20for%20previewing%20layouts%20and%20visual%20mockups.%0A%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%3CHeading%20mt%3D%7B3%7D%3EWith%20Two%20lines%20%3C%2FHeading%3E%0A%20%20%20%20%20%20%3CText%20noOfLines%3D%7B2%7D%3E%0A%20%20%20%20%20%20%20%20%22The%20quick%20brown%20fox%20jumps%20over%20the%20lazy%20dog%22%20is%20an%20English-language%0A%20%20%20%20%20%20%20%20pangram%E2%80%94a%20sentence%20that%20contains%20all%20of%20the%20letters%20of%20the%20English%0A%20%20%20%20%20%20%20%20alphabet.%20Owing%20to%20its%20existence%2C%20Chakra%20was%20created.%0A%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%3C%2FVStack%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CTextComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(i.b)("h3",{id:"nested"},"Nested"),Object(i.b)("div",{className:"snack-player","data-snack-name":"Text Nested","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Text%2C%20VStack%2C%20NativeBaseProvider%2C%20Center%20%7D%20from%20'native-base'%3B%0A%0Afunction%20TextComponent%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CVStack%20space%3D%7B2%7D%20alignItems%3D%22center%22%3E%0A%20%20%20%20%20%20%3CText%3E%0A%20%20%20%20%20%20%20%20This%20is%20the%20%3CText%20bold%3Enested%3C%2FText%3E%20example.%0A%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%3C%2FVStack%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CTextComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(i.b)("h3",{id:"overridden"},"Overridden"),Object(i.b)("div",{className:"snack-player","data-snack-name":"Text Overridden","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Text%2C%20VStack%2C%20NativeBaseProvider%2C%20Center%20%7D%20from%20'native-base'%3B%0A%0Afunction%20TextComponent%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CVStack%20space%3D%7B2%7D%20alignItems%3D%22center%22%3E%0A%20%20%20%20%20%20%3CText%20fontSize%3D%7B20%7D%3ECustom%20font-size%20value%20for%20this%20text%3C%2FText%3E%0A%20%20%20%20%20%20%3CText%20bold%3EBold%3C%2FText%3E%0A%20%20%20%20%20%20%3CText%20italic%3EItalic%3C%2FText%3E%0A%20%20%20%20%20%20%3CText%20underline%3EUnderline%3C%2FText%3E%0A%20%20%20%20%20%20%3CText%20highlight%3EHighlighted%3C%2FText%3E%0A%20%20%20%20%20%20%3CText%3E%0A%20%20%20%20%20%20%20%20H%3CText%20sub%3E2%3C%2FText%3EO%0A%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%3CText%20underline%3EUnderline%3C%2FText%3E%0A%20%20%20%20%20%20%3CText%20strikeThrough%3EStrikeThrough%3C%2FText%3E%0A%20%20%20%20%20%20%3CText%20bold%20italic%20underline%3E%0A%20%20%20%20%20%20%20%20Bold%2C%20Italic%20%26%20Underline%0A%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%3C%2FVStack%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CTextComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(i.b)("h2",{id:"props"},"Props"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"fontSize"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"2xl"),", ",Object(i.b)("inlineCode",{parentName:"td"},"lg"),", ",Object(i.b)("inlineCode",{parentName:"td"},"md"),", ",Object(i.b)("inlineCode",{parentName:"td"},"sm"),", ",Object(i.b)("inlineCode",{parentName:"td"},"xl"),", ",Object(i.b)("inlineCode",{parentName:"td"},"xs"),", number"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The size of font."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"noOfLines"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Used to truncate text at a specific number of lines"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"isTruncated"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If true, it'll render an ellipsis when the text exceeds the width of the viewport or maxWidth set."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"bold"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Make the text bold."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"italic"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Make the text italic."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"underline"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Underline the text ."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"strikeThrough"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"a horizontal line through its center."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"sub"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"text will have smaller font size."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"highlight"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Highlight the text with a yellow background."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")))))}b.isMDXComponent=!0}}]);