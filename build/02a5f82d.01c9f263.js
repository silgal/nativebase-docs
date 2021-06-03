(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{1583:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return A}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(n),b=a,A=d["".concat(r,".").concat(b)]||d[b]||m[b]||i;return n?o.a.createElement(A,s(s({ref:t},l),{},{components:n})):o.a.createElement(A,s({ref:t},l))}));function A(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var l=2;l<i;l++)r[l]=n[l];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},93:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(3),o=n(7),i=(n(0),n(1583)),r={id:"actionSheet",title:"ActionSheet"},s={unversionedId:"actionSheet",id:"actionSheet",isDocsHomePage:!1,title:"ActionSheet",description:"An Action Sheet is a dialog that displays a set of options. It appears on top of the app's content.",source:"@site/docs/actionSheet.md",slug:"/actionSheet",permalink:"/next/actionSheet",editUrl:"https://github.com/nativebase/website/tree/main/docs/actionSheet.md",version:"current",sidebar:"componentsSidebar",previous:{title:"Tooltip",permalink:"/next/tooltip"},next:{title:"Avatar",permalink:"/next/avatar"}},c=[{value:"Import",id:"import",children:[]},{value:"Examples",id:"examples",children:[{value:"Usage",id:"usage",children:[]},{value:"Composition",id:"composition",children:[]},{value:"DisableOverlay",id:"disableoverlay",children:[]},{value:"Icons",id:"icons",children:[]}]},{value:"Props",id:"props",children:[{value:"Actionsheet",id:"actionsheet",children:[]},{value:"Actionsheet.Content",id:"actionsheetcontent",children:[]},{value:"Actionsheet.Item",id:"actionsheetitem",children:[]}]},{value:"Accessibility",id:"accessibility",children:[]}],l={toc:c};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"An Action Sheet is a dialog that displays a set of options. It appears on top of the app's content."),Object(i.b)("h2",{id:"import"},"Import"),Object(i.b)("p",null,"NativeBase exports 3 modal-related components:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Actionsheet"),": Provides the context and state for all components."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Actionsheet.Content"),": Wrapper for the\xa0",Object(i.b)("strong",{parentName:"li"},"Actionsheet.Header and Actionsheet.Item"),"\xa0components."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Actionsheet.Item"),": A button to wrap the options of the Actionsheet.")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"import { Actionsheet } from 'native-base';\n")),Object(i.b)("h2",{id:"examples"},"Examples"),Object(i.b)("h3",{id:"usage"},"Usage"),Object(i.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Button%2C%20Actionsheet%2C%20useDisclose%2C%20Center%2C%20NativeBaseProvider%20%7D%20from%20'native-base'%3B%0Aexport%20function%20Example()%20%7B%0A%20%20const%20%7B%0A%20%20%20%20isOpen%2C%0A%20%20%20%20onOpen%2C%0A%20%20%20%20onClose%0A%20%20%7D%20%3D%20useDisclose()%3B%0A%20%20return%20%3C%3E%0A%20%20%20%20%20%20%3CButton%20onPress%3D%7BonOpen%7D%3EActionsheet%3C%2FButton%3E%0A%0A%20%20%20%20%20%20%3CActionsheet%20isOpen%3D%7BisOpen%7D%20onClose%3D%7BonClose%7D%3E%0A%20%20%20%20%20%20%20%20%3CActionsheet.Content%3E%0A%20%20%20%20%20%20%20%20%20%20%3CActionsheet.Item%3EOption%201%3C%2FActionsheet.Item%3E%0A%20%20%20%20%20%20%20%20%20%20%3CActionsheet.Item%3EOption%202%3C%2FActionsheet.Item%3E%0A%20%20%20%20%20%20%20%20%20%20%3CActionsheet.Item%3EOption%203%3C%2FActionsheet.Item%3E%0A%20%20%20%20%20%20%20%20%3C%2FActionsheet.Content%3E%0A%20%20%20%20%20%20%3C%2FActionsheet%3E%0A%20%20%20%20%3C%2F%3E%3B%0A%7D%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20%20%20)%3B%0A%7D%3B%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons","data-snack-sdkversion":"40.0.0"}),Object(i.b)("h3",{id:"composition"},"Composition"),Object(i.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Button%2C%20Actionsheet%2C%20useDisclose%2C%20HStack%2C%20Box%2C%20VStack%2C%20Center%2C%20NativeBaseProvider%20%7D%20from%20'native-base'%3B%0Aexport%20function%20Example()%20%7B%0A%20%20const%20%7B%0A%20%20%20%20isOpen%2C%0A%20%20%20%20onOpen%2C%0A%20%20%20%20onClose%0A%20%20%7D%20%3D%20useDisclose()%3B%0A%20%20return%20%3C%3E%0A%20%20%20%20%20%20%3CButton%20onPress%3D%7BonOpen%7D%3EActionsheet%3C%2FButton%3E%0A%20%20%20%20%20%20%3CActionsheet%20isOpen%3D%7BisOpen%7D%20onClose%3D%7BonClose%7D%3E%0A%20%20%20%20%20%20%20%20%3CActionsheet.Content%3E%0A%20%20%20%20%20%20%20%20%20%20%3CVStack%20space%3D%7B2%7D%20width%3D%22100%25%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CHStack%20width%3D%22100%25%22%20justifyContent%3D%22space-around%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CBox%3E%F0%9F%98%81%3C%2FBox%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CBox%3E%F0%9F%98%8D%3C%2FBox%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CBox%3E%F0%9F%98%8E%3C%2FBox%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FHStack%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CVStack%20justifyContent%3D%22flex-start%22%20width%3D%22100%25%22%20space%3D%7B2%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CActionsheet.Item%3EReply%3C%2FActionsheet.Item%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CActionsheet.Item%3ECopy%20Text%3C%2FActionsheet.Item%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CActionsheet.Item%3EProfile%3C%2FActionsheet.Item%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CActionsheet.Item%3EMark%20Read%3C%2FActionsheet.Item%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FVStack%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FVStack%3E%0A%20%20%20%20%20%20%20%20%3C%2FActionsheet.Content%3E%0A%20%20%20%20%20%20%3C%2FActionsheet%3E%0A%20%20%20%20%3C%2F%3E%3B%0A%7D%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20%20%20)%3B%0A%7D%3B%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons","data-snack-sdkversion":"40.0.0"}),Object(i.b)("h3",{id:"disableoverlay"},"DisableOverlay"),Object(i.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Button%2C%20Actionsheet%2C%20useDisclose%2C%20Center%2C%20NativeBaseProvider%20%7D%20from%20'native-base'%3B%0Aexport%20function%20Example()%20%7B%0A%20%20const%20%7B%0A%20%20%20%20isOpen%2C%0A%20%20%20%20onOpen%2C%0A%20%20%20%20onClose%0A%20%20%7D%20%3D%20useDisclose()%3B%0A%20%20return%20%3C%3E%0A%20%20%20%20%20%20%3CButton%20onPress%3D%7BonOpen%7D%3EActionsheet%3C%2FButton%3E%0A%0A%20%20%20%20%20%20%3CActionsheet%20isOpen%3D%7BisOpen%7D%20onClose%3D%7BonClose%7D%20disableOverlay%3E%0A%20%20%20%20%20%20%20%20%3CActionsheet.Content%3E%0A%20%20%20%20%20%20%20%20%20%20%3CActionsheet.Item%3EOption%201%3C%2FActionsheet.Item%3E%0A%20%20%20%20%20%20%20%20%20%20%3CActionsheet.Item%3EOption%202%3C%2FActionsheet.Item%3E%0A%20%20%20%20%20%20%20%20%20%20%3CActionsheet.Item%3EOption%203%3C%2FActionsheet.Item%3E%0A%20%20%20%20%20%20%20%20%3C%2FActionsheet.Content%3E%0A%20%20%20%20%20%20%3C%2FActionsheet%3E%0A%20%20%20%20%3C%2F%3E%3B%0A%7D%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20%20%20)%3B%0A%7D%3B%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons","data-snack-sdkversion":"40.0.0"}),Object(i.b)("h3",{id:"icons"},"Icons"),Object(i.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Button%2C%20Actionsheet%2C%20useDisclose%2C%20Icon%2C%20Center%2C%20NativeBaseProvider%20%7D%20from%20'native-base'%3B%0Aimport%20%7B%20MaterialIcons%2C%20MaterialCommunityIcons%20%7D%20from%20'%40expo%2Fvector-icons'%3B%0Aexport%20function%20Example()%20%7B%0A%20%20const%20%7B%0A%20%20%20%20isOpen%2C%0A%20%20%20%20onOpen%2C%0A%20%20%20%20onClose%0A%20%20%7D%20%3D%20useDisclose()%3B%0A%20%20return%20%3C%3E%0A%20%20%20%20%20%20%3CButton%20onPress%3D%7BonOpen%7D%3EActionsheet%3C%2FButton%3E%0A%0A%20%20%20%20%20%20%3CActionsheet%20isOpen%3D%7BisOpen%7D%20onClose%3D%7BonClose%7D%20size%3D%22full%22%3E%0A%20%20%20%20%20%20%20%20%3CActionsheet.Content%3E%0A%20%20%20%20%20%20%20%20%20%20%3CActionsheet.Item%20startIcon%3D%7B%3CIcon%20as%3D%7BMaterialIcons%7D%20name%3D%22share%22%20color%3D%22muted.500%22%20mr%3D%7B3%7D%20%2F%3E%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20Share%0A%20%20%20%20%20%20%20%20%20%20%3C%2FActionsheet.Item%3E%0A%20%20%20%20%20%20%20%20%20%20%3CActionsheet.Item%20startIcon%3D%7B%3CIcon%20as%3D%7BMaterialCommunityIcons%7D%20name%3D%22link%22%20color%3D%22muted.500%22%20mr%3D%7B3%7D%20%2F%3E%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20Link%0A%20%20%20%20%20%20%20%20%20%20%3C%2FActionsheet.Item%3E%0A%20%20%20%20%20%20%20%20%20%20%3CActionsheet.Item%20startIcon%3D%7B%3CIcon%20as%3D%7BMaterialIcons%7D%20name%3D%22edit%22%20color%3D%22muted.500%22%20mr%3D%7B3%7D%20%2F%3E%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20Edit%20name%0A%20%20%20%20%20%20%20%20%20%20%3C%2FActionsheet.Item%3E%0A%20%20%20%20%20%20%20%20%20%20%3CActionsheet.Item%20startIcon%3D%7B%3CIcon%20as%3D%7BMaterialIcons%7D%20name%3D%22delete%22%20color%3D%22muted.500%22%20mr%3D%7B3%7D%20%2F%3E%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20Delete%20Collection%0A%20%20%20%20%20%20%20%20%20%20%3C%2FActionsheet.Item%3E%0A%20%20%20%20%20%20%20%20%3C%2FActionsheet.Content%3E%0A%20%20%20%20%20%20%3C%2FActionsheet%3E%0A%20%20%20%20%3C%2F%3E%3B%0A%7D%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20%20%20)%3B%0A%7D%3B%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons","data-snack-sdkversion":"40.0.0"}),Object(i.b)("h2",{id:"props"},"Props"),Object(i.b)("h3",{id:"actionsheet"},"Actionsheet"),Object(i.b)("undefined",null,Object(i.b)("table",null,"\n  ",Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},"\n    ",Object(i.b)("th",{parentName:"tr"},"\n      Name\n    "),"\n    ",Object(i.b)("th",{parentName:"tr"},"\n      Type\n    "),"\n    ",Object(i.b)("th",{parentName:"tr"},"\n      Description\n    "),"\n    ",Object(i.b)("th",{parentName:"tr"},"\n      Default\n    "),"\n  "),"\n  ",Object(i.b)("tr",{parentName:"tbody"},"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        isOpen\n      "),"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        boolean\n      "),"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        If true, the ActionSheet will open. Useful for controllable state behaviour\n      "),"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(i.b)("tr",{parentName:"tbody"},"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        onClose\n      "),"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        any\n      "),"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        Callback invoked when the modal is closed\n      "),"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(i.b)("tr",{parentName:"tbody"},"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        disableOverlay\n      "),"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        boolean\n      "),"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        If true, disables the overlay.\n      "),"\n      ",Object(i.b)("td",{parentName:"tr"},"\n        false\n      "),"\n    "))),"\n ",Object(i.b)("p",null,"Actionsheet implements ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"box#props"}),"Box"))),Object(i.b)("h3",{id:"actionsheetcontent"},"Actionsheet.Content"),Object(i.b)("p",null,"ActionsheetContent implements ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"box#props"}),"Box")),Object(i.b)("h3",{id:"actionsheetitem"},"Actionsheet.Item"),Object(i.b)("p",null,"ActionsheetItem implements ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/next/button#props"}),"Button")),Object(i.b)("h2",{id:"accessibility"},"Accessibility"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"ActionSheet has ",Object(i.b)("inlineCode",{parentName:"li"},"aria-modal")," set to true."),Object(i.b)("li",{parentName:"ul"},"ActionSheet has ",Object(i.b)("inlineCode",{parentName:"li"},"role")," set to ",Object(i.b)("inlineCode",{parentName:"li"},"dialog"),"."),Object(i.b)("li",{parentName:"ul"},"When the ActionSheet opens, focus is trapped within it."),Object(i.b)("li",{parentName:"ul"},"Pressing Esc closes the ActionSheet."),Object(i.b)("li",{parentName:"ul"},"When the ActionSheet opens, focus is automatically set to the first enabled element."),Object(i.b)("li",{parentName:"ul"},"Clicking on the overlay closes the ActionSheet."),Object(i.b)("li",{parentName:"ul"},"Scrolling is blocked on the elements behind the ActionSheet.")))}p.isMDXComponent=!0}}]);