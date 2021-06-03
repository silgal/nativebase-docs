(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{1583:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=r.a.createContext({}),b=function(e){var t=r.a.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},s=function(e){var t=b(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),s=b(a),m=n,u=s["".concat(i,".").concat(m)]||s[m]||p[m]||l;return a?r.a.createElement(u,c(c({ref:t},d),{},{components:a})):r.a.createElement(u,c({ref:t},d))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=m;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var d=2;d<l;d++)i[d]=a[d];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},92:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return o})),a.d(t,"default",(function(){return b}));var n=a(3),r=a(7),l=(a(0),a(1583)),i={id:"slider",title:"Slider"},c={unversionedId:"slider",id:"version-3.0.0-next.25/slider",isDocsHomePage:!1,title:"Slider",description:"The Slider is used to allow users to make selections from a range of values.",source:"@site/versioned_docs/version-3.0.0-next.25/slider.md",slug:"/slider",permalink:"/3.0.0-next.25/slider",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.25/slider.md",version:"3.0.0-next.25",sidebar:"version-3.0.0-next.25/componentsSidebar",previous:{title:"Select",permalink:"/3.0.0-next.25/select"},next:{title:"Switch",permalink:"/3.0.0-next.25/switch"}},o=[{value:"Import",id:"import",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Color",id:"color",children:[]},{value:"Value",id:"value",children:[]},{value:"Size",id:"size",children:[]},{value:"Customised",id:"customised",children:[]},{value:"Form Controlled",id:"form-controlled",children:[]},{value:"Props",id:"props",children:[{value:"Slider",id:"slider",children:[]},{value:"Child <strong>components</strong>",id:"child-components",children:[]}]}],d={toc:o};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"Slider")," is used to allow users to make selections from a range of values."),Object(l.b)("h2",{id:"import"},"Import"),Object(l.b)("p",null,"NativeBase exports 4 slider-related components:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"Slider"),": The wrapper that provides context and functionality for all children."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"Slider.Track"),": The empty part of the slider that shows the track."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"Slider.FilledTrack"),": The filled part of the slider."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"Slider.Thumb"),": The handle that's used to change the slider value.")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"import { Slider } from 'native-base';\n")),Object(l.b)("h2",{id:"usage"},"Usage"),Object(l.b)("div",{className:"snack-player","data-snack-name":"Slider Usage","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%0A%20%20Slider%2C%0A%20%20Box%2C%0A%20%20NativeBaseProvider%0A%7D%20from%20'native-base'%3B%0A%0Afunction%20SliderComponent%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CBox%20mx%3D%7B5%7D%3E%0A%20%20%20%20%20%20%3CSlider%20defaultValue%3D%7B70%7D%3E%0A%20%20%20%20%20%20%20%20%3CSlider.Track%3E%0A%20%20%20%20%20%20%20%20%20%20%3CSlider.FilledTrack%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FSlider.Track%3E%0A%20%20%20%20%20%20%20%20%3CSlider.Thumb%20%2F%3E%0A%20%20%20%20%20%20%3C%2FSlider%3E%0A%20%20%20%20%3C%2FBox%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CSliderComponent%20%2F%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(l.b)("h2",{id:"color"},"Color"),Object(l.b)("div",{className:"snack-player","data-snack-name":"Slider Color","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%0A%20%20Slider%2C%0A%20%20Box%2C%0A%20%20NativeBaseProvider%0A%7D%20from%20'native-base'%3B%0A%0Afunction%20SliderComponent%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CBox%20mx%3D%7B5%7D%3E%0A%20%20%20%20%20%20%3CSlider%20defaultValue%3D%7B70%7D%20colorScheme%3D%22pink.200%22%3E%0A%20%20%20%20%20%20%20%20%3CSlider.Track%3E%0A%20%20%20%20%20%20%20%20%20%20%3CSlider.FilledTrack%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FSlider.Track%3E%0A%20%20%20%20%20%20%20%20%3CSlider.Thumb%20%2F%3E%0A%20%20%20%20%20%20%3C%2FSlider%3E%0A%20%20%20%20%3C%2FBox%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CSliderComponent%20%2F%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(l.b)("h2",{id:"value"},"Value"),Object(l.b)("div",{className:"snack-player","data-snack-name":"Slider Value","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%0A%20%20Slider%2C%0A%20%20Stack%2C%0A%20%20Text%2C%0A%20%20NativeBaseProvider%0A%7D%20from%20'native-base'%3B%0A%0Afunction%20SliderComponent%20()%20%7B%0A%20%20const%20%5BonChangeValue%2C%20setOnChangeValue%5D%20%3D%20React.useState(70)%3B%0A%20%20const%20%5BonChangeEndValue%2C%20setOnChangeEndValue%5D%20%3D%20React.useState(70)%3B%0A%20%20return%20(%0A%20%20%20%20%3CStack%20mx%3D%7B5%7D%20space%3D%7B4%7D%20alignItems%3D%22center%22%3E%0A%20%20%20%20%20%20%3CText%3EonChangeValue%20-%20%7BonChangeValue%7D%3C%2FText%3E%0A%20%20%20%20%20%20%3CText%3EonChangeEndValue%20-%20%7BonChangeEndValue%7D%3C%2FText%3E%0A%20%20%20%20%20%20%3CSlider%0A%20%20%20%20%20%20%20%20defaultValue%3D%7B70%7D%0A%20%20%20%20%20%20%20%20colorScheme%3D%22cyan%22%0A%20%20%20%20%20%20%20%20onChange%3D%7B(v)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20setOnChangeValue(Math.floor(v))%3B%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20onChangeEnd%3D%7B(v)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20v%20%26%26%20setOnChangeEndValue(Math.floor(v))%3B%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%3CSlider.Track%3E%0A%20%20%20%20%20%20%20%20%20%20%3CSlider.FilledTrack%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FSlider.Track%3E%0A%20%20%20%20%20%20%20%20%3CSlider.Thumb%20%2F%3E%0A%20%20%20%20%20%20%3C%2FSlider%3E%0A%20%20%20%20%3C%2FStack%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CSliderComponent%20%2F%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(l.b)("h2",{id:"size"},"Size"),Object(l.b)("div",{className:"snack-player","data-snack-name":"Slider Size","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%0A%20%20Slider%2C%0A%20%20VStack%2C%0A%20%20NativeBaseProvider%0A%7D%20from%20'native-base'%3B%0A%0Afunction%20SliderComponent%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CVStack%20space%3D%7B4%7D%20mx%3D%7B10%7D%3E%0A%20%20%20%20%20%20%3CSlider%20defaultValue%3D%7B40%7D%20colorScheme%3D%22red%22%20size%3D%22lg%22%3E%0A%20%20%20%20%20%20%20%20%3CSlider.Track%3E%0A%20%20%20%20%20%20%20%20%20%20%3CSlider.FilledTrack%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FSlider.Track%3E%0A%20%20%20%20%20%20%20%20%3CSlider.Thumb%20%2F%3E%0A%20%20%20%20%20%20%3C%2FSlider%3E%0A%20%20%20%20%20%20%3CSlider%20defaultValue%3D%7B60%7D%20colorScheme%3D%22purple%22%3E%0A%20%20%20%20%20%20%20%20%3CSlider.Track%3E%0A%20%20%20%20%20%20%20%20%20%20%3CSlider.FilledTrack%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FSlider.Track%3E%0A%20%20%20%20%20%20%20%20%3CSlider.Thumb%20%2F%3E%0A%20%20%20%20%20%20%3C%2FSlider%3E%0A%20%20%20%20%20%20%3CSlider%20defaultValue%3D%7B80%7D%20colorScheme%3D%22green%22%20size%3D%22sm%22%3E%0A%20%20%20%20%20%20%20%20%3CSlider.Track%3E%0A%20%20%20%20%20%20%20%20%20%20%3CSlider.FilledTrack%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FSlider.Track%3E%0A%20%20%20%20%20%20%20%20%3CSlider.Thumb%20%2F%3E%0A%20%20%20%20%20%20%3C%2FSlider%3E%0A%20%20%20%20%3C%2FVStack%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CSliderComponent%20%2F%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(l.b)("h2",{id:"customised"},"Customised"),Object(l.b)("div",{className:"snack-player","data-snack-name":"Slider Customized","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%0A%20%20Slider%2C%0A%20%20Icon%2C%0A%20%20NativeBaseProvider%0A%7D%20from%20'native-base'%3B%0A%0Afunction%20SliderComponent%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CSlider%20defaultValue%3D%7B70%7D%20colorScheme%3D%22purple%22%3E%0A%20%20%20%20%20%20%3CSlider.Track%20bg%3D%22orange.100%22%3E%0A%20%20%20%20%20%20%20%20%3CSlider.FilledTrack%20bg%3D%22orange.400%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2FSlider.Track%3E%0A%20%20%20%20%20%20%3CSlider.Thumb%3E%0A%20%20%20%20%20%20%20%20%3CIcon%20name%3D%22circle%22%20type%3D%22MaterialIcons%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2FSlider.Thumb%3E%0A%20%20%20%20%3C%2FSlider%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CSliderComponent%20%2F%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(l.b)("h2",{id:"form-controlled"},"Form Controlled"),Object(l.b)("div",{className:"snack-player","data-snack-name":"Slider Form Controlled","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%0A%20%20FormControl%2C%0A%20%20Slider%2C%0A%20%20VStack%2C%0A%20%20NativeBaseProvider%0A%7D%20from%20'native-base'%3B%0A%0Afunction%20SliderComponent%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CVStack%20space%3D%7B4%7D%20mx%3D%7B10%7D%3E%0A%20%20%20%20%20%20%3CFormControl%20isRequired%20isInvalid%20isDisabled%3E%0A%20%20%20%20%20%20%20%20%3CFormControl.Label%3EJust%20Slide%3C%2FFormControl.Label%3E%0A%20%20%20%20%20%20%20%20%3CSlider%20defaultValue%3D%7B50%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CSlider.Track%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CSlider.FilledTrack%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FSlider.Track%3E%0A%20%20%20%20%20%20%20%20%20%20%3CSlider.Thumb%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FSlider%3E%0A%20%20%20%20%20%20%20%20%3CFormControl.HelperText%3EWe'll%20keep%20this%20between%20us.%3C%2FFormControl.HelperText%3E%0A%20%20%20%20%20%20%20%20%3CFormControl.ErrorMessage%3EDon't%20worry%2C%20it's%20just%20an%20example.%3C%2FFormControl.ErrorMessage%3E%0A%20%20%20%20%20%20%3C%2FFormControl%3E%0A%20%20%20%20%3C%2FVStack%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CSliderComponent%20%2F%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(l.b)("h2",{id:"props"},"Props"),Object(l.b)("h3",{id:"slider"},"Slider"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"value"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The value of the slider in controlled mode"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"defaultValue"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The initial value of the slider in uncontrolled mode"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"min"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The minimum allowed value of the slider. Cannot be greater than max."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"max"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The maximum allowed value of the slider. Cannot be less than min."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"100")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"step"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The step in which increments/decrements have to be made"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"colorScheme"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'The color of the radio when it\'s checked. This should be one of the color keys in the theme (e.g."green", "red").'),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"default")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"size"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"lg, md, sm"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The size (width and height) of the slider."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"md")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"id"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The base id to use for the slider and its components"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"isDisabled"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If true, the slider will be disabled"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"isReadOnly"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If true, the slider will be in read-only state"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"isReversed"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If true, the value will be incremented or decremented in reverse."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"icon"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"JSX.Element"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If given, will use this icon instead of the default."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"isInvalid"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If true, the checkbox is marked as invalid. Changes style of unchecked state."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"onChange"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"function"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"function gets called whenever the slider handle is being dragged or clicked"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"onChangeEnd"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"function"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"function gets called whenever the user stops dragging the slider handle."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"aria-label"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The static string to use used for aria-label if no visible label is used."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"aria-labelledby"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The static string aria-labelledby that points to the ID of the element that serves as label for the slider"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"aria-valuetext"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The static string to use used for aria-valuetext"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"orientation"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"horizontal, vertical"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Sets the orientation of the slider."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"horizontal")))),Object(l.b)("h3",{id:"child-components"},"Child ",Object(l.b)("strong",{parentName:"h3"},"components")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"Slider.Track"),",\xa0",Object(l.b)("inlineCode",{parentName:"li"},"Slider.FilledTrack"),",\xa0and\xa0",Object(l.b)("inlineCode",{parentName:"li"},"Slider.Thumb"),"\xa0composes the\xa0",Object(l.b)("inlineCode",{parentName:"li"},"Box"),"\xa0component.")))}b.isMDXComponent=!0}}]);