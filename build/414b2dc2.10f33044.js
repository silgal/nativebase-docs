(window.webpackJsonp=window.webpackJsonp||[]).push([[409],{1583:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),d=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=d(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,b=u["".concat(o,".").concat(m)]||u[m]||p[m]||i;return n?a.a.createElement(b,c(c({ref:t},l),{},{components:n})):a.a.createElement(b,c({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},480:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return d}));var r=n(3),a=n(7),i=(n(0),n(1583)),o={id:"buildingCard",title:"Building Card"},c={unversionedId:"buildingCard",id:"version-3.0.0-next.30/buildingCard",isDocsHomePage:!1,title:"Building Card",description:"A card is a flexible and extensible content container. It comes in caries shapes and sizes and here we'll make few of them.",source:"@site/versioned_docs/version-3.0.0-next.30/builldingCard.md",slug:"/buildingCard",permalink:"/3.0.0-next.30/buildingCard",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.30/builldingCard.md",version:"3.0.0-next.30",sidebar:"version-3.0.0-next.30/componentsSidebar",previous:{title:"nativebase-formik-ui",permalink:"/3.0.0-next.30/nativebase-formik-ui"},next:{title:"Building SearchBar",permalink:"/3.0.0-next.30/buildingSearchBar"}},s=[{value:"1. Most Commonly used design:",id:"1-most-commonly-used-design",children:[]}],l={toc:s};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"A card is a flexible and extensible content container. It comes in caries shapes and sizes and here we'll make few of them."),Object(i.b)("h2",{id:"1-most-commonly-used-design"},"1. Most Commonly used design:"),Object(i.b)("p",null,"This card design widely used where the Header consist of Avatar, accompanied by the Title and Sub-title."),Object(i.b)("p",null,"Followed by the image which flows till the very edge."),Object(i.b)("p",null,"And lastly a description."),Object(i.b)("div",{className:"snack-player","data-snack-name":"Card","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%3B%0Aimport%20%7B%20VStack%2C%20HStack%2C%20Avatar%2C%20Image%2C%20Text%2C%20NativeBaseProvider%2C%20Center%20%7D%20from%20%22native-base%22%3B%0A%0Afunction%20CardComponent()%7B%0A%20return%3CVStack%20m%3D%7B4%7D%20space%3D%7B4%7D%20border%3D%7B1%7D%20borderRadius%3D%22lg%22%3E%0A%20%20%20%20%20%20%3CHStack%20alignItems%3D%22center%22%20px%3D%7B4%7D%20pt%3D%7B4%7D%3E%0A%20%20%20%20%20%20%20%20%3CAvatar%20borderWidth%3D%7B1%7D%20size%3D%22lg%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CVStack%20ml%3D%7B2%7D%20space%3D%7B2%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CText%20fontSize%3D%22lg%22%20bold%20underline%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20Title%0A%20%20%20%20%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%3CText%3ESub%20Title%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3C%2FVStack%3E%0A%20%20%20%20%20%20%3C%2FHStack%3E%0A%20%20%20%20%20%20%3CImage%0A%20%20%20%20%20%20%20%20w%3D%22100%25%22%0A%20%20%20%20%20%20%20%20height%3D%7B72%7D%0A%20%20%20%20%20%20%20%20source%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20uri%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%22https%3A%2F%2Fimages.pexels.com%2Fphotos%2F5199154%2Fpexels-photo-5199154.jpeg%3Fcs%3Dsrgb%26dl%3Dpexels-tamara-velazquez-5199154.jpg%26fm%3Djpg%22%2C%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20alt%3D%22NativeBase%20logo%22%0A%20%20%20%20%20%20%3E%3C%2FImage%3E%0A%20%20%20%20%20%20%3CVStack%20px%3D%7B4%7D%20pb%3D%7B4%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%3E%0A%20%20%20%20%20%20%20%20%20%20NativeBase%20%3CText%20bold%3Ev3%3C%2FText%3E%20a%20universal%20Design%20System%20for%20Mobile%20%26%0A%20%20%20%20%20%20%20%20%20%20Web%20built%20for%20React%20Native%20and%20React%20with%20the%20same%20API.%20Ships%20a%20bunch%0A%20%20%20%20%20%20%20%20%20%20of%20components%20for%20most%20of%20the%20use-cases%20that%20includes%20Button%2C%20AppBar%2C%0A%20%20%20%20%20%20%20%20%20%20Dialog%2C%20Modal%20and%20what%20not.%0A%20%20%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FVStack%3E%0A%20%20%20%20%3C%2FVStack%3E%0A%7D%0A%0A%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%3CCardComponent%2F%3E%0A%20%20%20%20%3C%2FCenter%3E%0A%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}))}d.isMDXComponent=!0}}]);