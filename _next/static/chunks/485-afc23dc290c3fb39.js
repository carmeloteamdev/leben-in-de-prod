(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[485],{4363:function(e,t,r){var n={"./cn.json":[7137,137],"./cz.json":[6214,214],"./de.json":[3275,275],"./en.json":[3365,365],"./es.json":[4660,660],"./fr.json":[1796,796],"./it.json":[3889,889],"./jp.json":[1632,632],"./kg.json":[192,192],"./kz.json":[1164,164],"./pl.json":[5727,727],"./ru.json":[549,549],"./tr.json":[7819,819],"./ua.json":[7501,501],"./uz.json":[8729,729]};function s(e){if(!r.o(n,e))return Promise.resolve().then(function(){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t});var t=n[e],s=t[0];return r.e(t[1]).then(function(){return r.t(s,19)})}s.keys=function(){return Object.keys(n)},s.id=4363,e.exports=s},5485:function(e,t,r){Promise.resolve().then(r.t.bind(r,1749,23)),Promise.resolve().then(r.t.bind(r,5250,23)),Promise.resolve().then(r.bind(r,7994)),Promise.resolve().then(r.bind(r,7660)),Promise.resolve().then(r.bind(r,3888))},365:function(e,t,r){"use strict";var n=r(110);n.getFormatter,n.getLocale,n.getMessages,n.getNow,t.cF=n.getRequestConfig,n.getTimeZone,n.getTranslations,n.unstable_setRequestLocale},110:function(e,t){"use strict";function r(e){return()=>{throw Error("`".concat(e,"` is not supported in Client Components."))}}Object.defineProperty(t,"__esModule",{value:!0});let n=r("getFormatter"),s=r("getNow"),o=r("getTimeZone"),a=r("getMessages"),l=r("getLocale"),i=r("getTranslations"),d=r("unstable_setRequestLocale");t.getFormatter=n,t.getLocale=l,t.getMessages=a,t.getNow=s,t.getRequestConfig=function(){return r("getRequestConfig")},t.getTimeZone=o,t.getTranslations=i,t.unstable_setRequestLocale=d},7907:function(e,t,r){"use strict";var n=r(5313);r.o(n,"notFound")&&r.d(t,{notFound:function(){return n.notFound}}),r.o(n,"usePathname")&&r.d(t,{usePathname:function(){return n.usePathname}}),r.o(n,"useRouter")&&r.d(t,{useRouter:function(){return n.useRouter}})},7994:function(e,t,r){"use strict";r.r(t),r.d(t,{LanguageDropdown:function(){return i}});var n=r(7437),s=r(7907),o=r(3167),a=r(365);let l=[{name:"Deutsch",locale:"de"},{locale:"en",name:"English"},{locale:"ru",name:"Русский"}];(0,a.cF)(async e=>{let{locale:t}=e;return(l.map(e=>e.locale).includes(t)||(0,s.notFound)(),"de"===t)?{messages:(await r.e(365).then(r.t.bind(r,3365,19))).default}:{messages:(await r(4363)("./".concat(t,".json"))).default}});let i=e=>{let{locale:t,changeLanguage:r,language:a}=e,i=(0,s.useRouter)(),d=(0,s.usePathname)(),c=e=>{let r=d.replace("/".concat(t),"/".concat(e));i.push(r)};return(0,n.jsxs)("div",{title:r,className:"dropdown dropdown-end",children:[(0,n.jsxs)("div",{tabIndex:0,role:"button",className:"btn btn-ghost p-0 hover:bg-transparent","aria-label":a,children:[(0,n.jsxs)("svg",{className:"h-5 w-5 fill-current",xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 512 512",children:[(0,n.jsx)("path",{d:"M363,176,246,464h47.24l24.49-58h90.54l24.49,58H480ZM336.31,362,363,279.85,389.69,362Z"}),(0,n.jsx)("path",{d:"M272,320c-.25-.19-20.59-15.77-45.42-42.67,39.58-53.64,62-114.61,71.15-143.33H352V90H214V48H170V90H32v44H251.25c-9.52,26.95-27.05,69.5-53.79,108.36-32.68-43.44-47.14-75.88-47.33-76.22L143,152l-38,22,6.87,13.86c.89,1.56,17.19,37.9,54.71,86.57.92,1.21,1.85,2.39,2.78,3.57-49.72,56.86-89.15,79.09-89.66,79.47L64,368l23,36,19.3-11.47c2.2-1.67,41.33-24,92-80.78,24.52,26.28,43.22,40.83,44.3,41.67L255,362Z"})]})," ",(0,n.jsx)("span",{className:"font-[sans-serif]",children:t.toUpperCase()})," "]})," ",(0,n.jsx)("div",{tabIndex:0,className:"dropdown-content top-px mt-16 max-h-[calc(100vh-10rem)] w-56 overflow-y-auto rounded-box border border-white/5 bg-base-200 text-base-content shadow-2xl outline outline-1 outline-black/5",children:(0,n.jsx)("ul",{className:"menu menu-sm gap-1",children:l.map(e=>(0,n.jsx)("li",{children:(0,n.jsxs)("button",{className:(0,o.Z)(e.locale===t&&"active"),onClick:()=>c(e.locale),children:[(0,n.jsx)("span",{className:"badge badge-outline badge-sm !pl-1.5 !pr-1 pt-px font-mono !text-[.6rem] font-bold tracking-widest opacity-50",children:e.locale.toUpperCase()}),(0,n.jsx)("span",{className:"font-[sans-serif]",children:e.name})]})},e.locale))})})]})}},7660:function(e,t,r){"use strict";r.r(t),r.d(t,{AnswersList:function(){return p}});var n=r(7437),s=r(2265),o=r(3167);let a="lid-pagination",l=()=>{localStorage.removeItem(a)},i=()=>{let e=localStorage.getItem(a);if(e)try{return JSON.parse(e)}catch(e){console.error(e);return}},d=e=>{localStorage.setItem(a,JSON.stringify(e))},c=(e,t,r)=>{let n=i()||{lid:[]},s=n.lid.find(e=>e.c===r)||{c:r,q:[]},o=s.q.filter(e=>e.id!==t);o.push({id:t,a:e});let a={...s,q:o},l=n.lid.filter(e=>e.c!==r);l.push(a),d({lid:l})};var u=r(8792);let m=e=>{let{answerId:t,questionId:r,chapterId:a,allChapterQuestions:d,chapterUrl:m,locale:p,progressTitleTranslated:h,clearProgressButtonTitleTranslated:g}=e,[x,f]=(0,s.useState)();(0,s.useEffect)(()=>{i()&&f(i())},[]),(0,s.useEffect)(()=>{t&&(c(t,r,a),i()&&f(i()))},[t,a,r]);let b=(0,s.useCallback)((e,t)=>{if(!x)return;let r=x.lid.find(e=>e.c===a);if(!r)return;let n=r.q.find(t=>t.id===e);if(n)return n.a===t},[x,a]);return(0,n.jsxs)(n.Fragment,{children:[x&&(0,n.jsxs)("div",{className:"ml-5 flex items-center justify-start",children:[(0,n.jsx)("div",{className:"mr-2 text-xl text-primary",children:h}),(0,n.jsx)("button",{className:"btn btn-sm tooltip","data-tip":g,onClick:()=>{f(void 0),l()},children:"✕"})]}),(0,n.jsx)("div",{className:"my-5 overflow-x-auto",children:(0,n.jsx)("ul",{className:"steps pb-3",children:d.map(e=>{let t=b(e.id,e.correctAnswerId),s=e.id===r;return(0,n.jsx)("li",{className:(0,o.Z)("step",!1===t&&"step-error",!0===t&&"step-primary"),"data-content":void 0===t?"●":t?"✓":"✕",children:s?(0,n.jsx)("span",{className:"w-8 rounded-full border bg-info text-white",children:e.order}):(0,n.jsx)(u.default,{href:"/".concat(p,"/").concat(m,"/").concat(e.url),className:"w-8 rounded-full border border-primary hover:border-secondary",children:e.order})},"pagination-"+e.id)})})})]})},p=e=>{let{answers:t,name:r,questionExplanationOriginal:a,questionExplanationTranslated:l,locale:i,questionId:d,chapterId:c,chapterUrl:u,allChapterQuestions:p,progressTitleTranslated:h,clearProgressButtonTitleTranslated:g,hideExplanationTranslated:x,showExplanationTranslated:f,correctTranslated:b,incorrectTranslated:j}=e,[v,N]=(0,s.useState)(),[w,y]=(0,s.useState)(!1),k=t.find(e=>e.isCorrect);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"w-full",children:[(0,n.jsx)("ul",{children:t.map(e=>(0,n.jsx)("li",{className:"form-control",children:(0,n.jsxs)("label",{className:"label cursor-pointer justify-start",htmlFor:e.id.toString(),children:[(0,n.jsxs)("span",{className:"mr-3 font-bold",children:[e.order,"."]}),(0,n.jsx)("input",{type:"radio",id:e.id.toString(),name:r,value:e.id,className:(0,o.Z)("radio mr-3",v===e.id&&e.isCorrect&&"border-green-500 checked:bg-green-500",v===e.id&&!e.isCorrect&&"border-red-500 checked:bg-red-500"),onChange:()=>N(e.id),checked:v===e.id}),(0,n.jsx)("div",{className:(0,o.Z)("tooltip tooltip-warning rounded border px-1 text-left text-xl",v===e.id&&e.isCorrect&&"border-green-500 bg-green-50",v===e.id&&!e.isCorrect&&"border-red-500 bg-red-50"),"data-tip":e.descriptionTranslated,children:e.descriptionOriginal}),(0,n.jsx)("div",{className:"hidden",children:e.descriptionTranslated})]})},e.id))}),v&&(0,n.jsx)("div",{className:(0,o.Z)("tooltip tooltip-right mt-6 md:mt-10",!w&&"tooltip-open"),"data-tip":w?x:f,children:(0,n.jsx)("div",{className:(0,o.Z)("stats cursor-pointer rounded-md shadow",v===(null==k?void 0:k.id)?"bg-green-50":"bg-red-50"),onClick:()=>y(!w),children:(0,n.jsxs)("div",{className:"stat",children:[(0,n.jsx)("div",{className:"stat-figure text-secondary",children:(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",className:(0,o.Z)("inline-block h-8 w-8 stroke-current",v===(null==k?void 0:k.id)?"text-green-500":"text-red-500"),children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})}),(0,n.jsx)("div",{className:(0,o.Z)("stat-value text-2xl",v===(null==k?void 0:k.id)?"text-green-500":"text-red-500"),children:v===(null==k?void 0:k.id)?b:j})]})})}),(0,n.jsxs)("div",{className:(0,o.Z)("my-6 border-b border-t border-blue-500 bg-blue-100 px-4 py-3",v&&w?"block":"hidden"),role:"alert",children:[(0,n.jsx)("span",{className:"badge badge-outline badge-sm relative top-[-2px] mr-2 !pl-1.5 !pr-1 pt-px font-mono !text-[.6rem] font-bold tracking-widest opacity-50",children:"DE"}),(0,n.jsx)("p",{className:"inline text-black",children:a}),"de"!==i&&(0,n.jsxs)("div",{className:"mt-4 border-t-[1px] border-gray-400 pt-4 text-blue-700",children:[(0,n.jsx)("span",{className:"badge badge-outline badge-sm relative top-[-2px] mr-2 !pl-1.5 !pr-1 pt-px font-mono !text-[.6rem] font-bold tracking-widest opacity-50",children:i.toUpperCase()}),(0,n.jsx)("p",{className:"inline",children:l})]})]})]}),(0,n.jsx)("div",{className:"divider"}),(0,n.jsx)(m,{answerId:v,questionId:d,chapterId:c,chapterUrl:u,allChapterQuestions:p,locale:i,progressTitleTranslated:h,clearProgressButtonTitleTranslated:g})]})}},3888:function(e,t,r){"use strict";r.r(t),r.d(t,{QuestionPageSelector:function(){return o}});var n=r(7437),s=r(7907);let o=e=>{let{selectedQuestionOrder:t,questions:r,chapterUrl:o}=e,a=(0,s.useRouter)();return(0,n.jsx)("select",{value:t,className:"ml-2 flex rounded border border-gray-200 px-2 py-1",onChange:e=>{let t=r.find(t=>t.id===Number(e.target.value));t&&a.replace("".concat(o,"/").concat(t.url))},children:r.map(e=>(0,n.jsx)("option",{value:e.order,children:e.order},e.id))})}},3167:function(e,t,r){"use strict";t.Z=function(){for(var e,t,r=0,n="",s=arguments.length;r<s;r++)(e=arguments[r])&&(t=function e(t){var r,n,s="";if("string"==typeof t||"number"==typeof t)s+=t;else if("object"==typeof t){if(Array.isArray(t)){var o=t.length;for(r=0;r<o;r++)t[r]&&(n=e(t[r]))&&(s&&(s+=" "),s+=n)}else for(n in t)t[n]&&(s&&(s+=" "),s+=n)}return s}(e))&&(n&&(n+=" "),n+=t);return n}}}]);