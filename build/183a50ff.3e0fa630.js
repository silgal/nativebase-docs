(window.webpackJsonp=window.webpackJsonp||[]).push([[156],{1583:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),m=n,f=u["".concat(o,".").concat(m)]||u[m]||d[m]||i;return r?a.a.createElement(f,c(c({ref:t},p),{},{components:r})):a.a.createElement(f,c({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var p=2;p<i;p++)o[p]=r[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},226:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(7),i=(r(0),r(1583)),o={id:"appDrawer",title:"Making App drawer"},c={unversionedId:"appDrawer",id:"version-3.0.0-next.35/appDrawer",isDocsHomePage:!1,title:"Making App drawer",description:"Creating an app drawer like layout is very common and with NativeBase's SimpleGrid make this extremely simple while still keeping it extremely customisable. Here is an example to illustrate it.",source:"@site/versioned_docs/version-3.0.0-next.35/appDrawer.md",slug:"/appDrawer",permalink:"/3.0.0-next.35/appDrawer",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.35/appDrawer.md",version:"3.0.0-next.35",sidebar:"version-3.0.0-next.35/componentsSidebar",previous:{title:"Building a form with Validation",permalink:"/3.0.0-next.35/form"},next:{title:"Accordion",permalink:"/3.0.0-next.35/migration/Accordion"}},s=[],p={toc:s};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Creating an app drawer like layout is very common and with NativeBase's SimpleGrid make this extremely simple while still keeping it extremely customisable. Here is an example to illustrate it."),Object(i.b)("div",{className:"snack-player","data-snack-name":"AppDrawer","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%3B%0Aimport%20%7B%20IconButton%2C%20SimpleGrid%2C%20Icon%2C%20NativeBaseProvider%20%7D%20from%20%22native-base%22%3B%0A%0Afunction%20AppDrawer()%7B%0A%20%20const%20icons%20%3D%20%5B%0A%20%20%20%20%22bolt%22%2C%0A%20%20%20%20%22build%22%2C%0A%20%20%20%20%22cloud%22%2C%0A%20%20%20%20%22delivery-dining%22%2C%0A%20%20%20%20%22favorite%22%2C%0A%20%20%20%20%22music-note%22%2C%0A%20%20%20%20%22invert-colors-on%22%2C%0A%20%20%20%20%22navigation%22%2C%0A%20%20%20%20%22settings%22%2C%0A%20%20%20%20%22sports-esports%22%2C%0A%20%20%20%20%22shield%22%2C%0A%20%20%20%20%22photo-camera%22%2C%0A%20%20%20%20%22network-wifi%22%2C%0A%20%20%20%20%22nightlight-round%22%2C%0A%20%20%20%20%22flight%22%2C%0A%20%20%20%20%22extension%22%2C%0A%20%20%20%20%22duo%22%2C%0A%20%20%20%20%22album%22%2C%0A%20%20%20%20%22access-alarm%22%2C%0A%20%20%20%20%22forum%22%2C%0A%20%20%5D%3B%0A%20%20return%20%3CSimpleGrid%20columns%3D%7B5%7D%20spacingY%3D%7B4%7D%20spacingX%3D%7B4%7D%3E%0A%20%20%20%20%20%20%7Bicons.map((icon)%20%3D%3E%20(%0A%20%20%20%20%20%20%20%20%3CIconButton%0A%20%20%20%20%20%20%20%20%20%20borderRadius%3D%22full%22%0A%20%20%20%20%20%20%20%20%20%20colorScheme%3D%22indigo%22%0A%20%20%20%20%20%20%20%20%20%20variant%3D%22solid%22%0A%20%20%20%20%20%20%20%20%20%20p%3D%7B4%7D%0A%20%20%20%20%20%20%20%20%20%20icon%3D%7B%3CIcon%20name%3D%7Bicon%7D%20type%3D%22MaterialIcons%22%20size%3D%7B6%7D%20%2F%3E%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20))%7D%0A%20%20%20%20%3C%2FSimpleGrid%3E%0A%7D%0A%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%3CAppDrawer%2F%3E%0A%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}))}l.isMDXComponent=!0}}]);