(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[203],{4363:function(e,r,t){var s={"./cn.json":[7137,137],"./cz.json":[6214,214],"./de.json":[3275,275],"./en.json":[3365,365],"./es.json":[4660,660],"./fr.json":[1796,796],"./it.json":[3889,889],"./jp.json":[1632,632],"./kg.json":[192,192],"./kz.json":[1164,164],"./pl.json":[5727,727],"./ru.json":[549,549],"./tr.json":[7819,819],"./ua.json":[7501,501],"./uz.json":[8729,729]};function n(e){if(!t.o(s,e))return Promise.resolve().then(function(){var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r});var r=s[e],n=r[0];return t.e(r[1]).then(function(){return t.t(n,19)})}n.keys=function(){return Object.keys(s)},n.id=4363,e.exports=n},648:function(e,r,t){Promise.resolve().then(t.bind(t,1845)),Promise.resolve().then(t.bind(t,7388)),Promise.resolve().then(t.bind(t,6016)),Promise.resolve().then(t.t.bind(t,1749,23)),Promise.resolve().then(t.t.bind(t,5250,23)),Promise.resolve().then(t.t.bind(t,5935,23)),Promise.resolve().then(t.t.bind(t,6974,23)),Promise.resolve().then(t.t.bind(t,3385,23)),Promise.resolve().then(t.bind(t,7994)),Promise.resolve().then(t.bind(t,7660)),Promise.resolve().then(t.bind(t,3888))},7994:function(e,r,t){"use strict";t.r(r),t.d(r,{LanguageDropdown:function(){return d}});var s=t(7437),n=t(7907),l=t(3167),o=t(365);let i=[{name:"Deutsch",locale:"de"},{locale:"en",name:"English"},{locale:"ru",name:"Русский"}];(0,o.cF)(async e=>{let{locale:r}=e;return i.map(e=>e.locale).includes(r)||(0,n.notFound)(),{messages:(await t(4363)("./".concat(r,".json"))).default}});var a=t(8792);let d=e=>{let{locale:r,changeLanguage:t,language:o}=e;return(0,n.useRouter)(),(0,n.usePathname)(),(0,s.jsxs)("div",{title:t,className:"dropdown dropdown-end",children:[(0,s.jsxs)("div",{tabIndex:0,role:"button",className:"btn btn-ghost p-0 hover:bg-transparent","aria-label":o,children:[(0,s.jsxs)("svg",{className:"h-5 w-5 fill-current",xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 512 512",children:[(0,s.jsx)("path",{d:"M363,176,246,464h47.24l24.49-58h90.54l24.49,58H480ZM336.31,362,363,279.85,389.69,362Z"}),(0,s.jsx)("path",{d:"M272,320c-.25-.19-20.59-15.77-45.42-42.67,39.58-53.64,62-114.61,71.15-143.33H352V90H214V48H170V90H32v44H251.25c-9.52,26.95-27.05,69.5-53.79,108.36-32.68-43.44-47.14-75.88-47.33-76.22L143,152l-38,22,6.87,13.86c.89,1.56,17.19,37.9,54.71,86.57.92,1.21,1.85,2.39,2.78,3.57-49.72,56.86-89.15,79.09-89.66,79.47L64,368l23,36,19.3-11.47c2.2-1.67,41.33-24,92-80.78,24.52,26.28,43.22,40.83,44.3,41.67L255,362Z"})]})," ",(0,s.jsx)("span",{className:"font-[sans-serif]",children:r.toUpperCase()})," "]})," ",(0,s.jsx)("div",{tabIndex:0,className:"dropdown-content top-px mt-16 max-h-[calc(100vh-10rem)] w-56 overflow-y-auto rounded-box border border-white/5 bg-base-200 text-base-content shadow-2xl outline outline-1 outline-black/5",children:(0,s.jsx)("ul",{className:"menu menu-sm gap-1",children:i.map(e=>(0,s.jsx)("li",{children:(0,s.jsxs)(a.default,{className:(0,l.Z)(e.locale===r&&"active"),href:"/".concat(e.locale),children:[(0,s.jsx)("span",{className:"badge badge-outline badge-sm !pl-1.5 !pr-1 pt-px font-mono !text-[.6rem] font-bold tracking-widest opacity-50",children:e.locale.toUpperCase()}),(0,s.jsx)("span",{className:"font-[sans-serif]",children:e.name})]})},e.locale))})})]})}},7660:function(e,r,t){"use strict";t.r(r),t.d(r,{AnswersList:function(){return h}});var s=t(7437),n=t(2265),l=t(3167);let o="lid-pagination",i=()=>{localStorage.removeItem(o)},a=()=>{let e=localStorage.getItem(o);if(e)try{return JSON.parse(e)}catch(e){console.error(e);return}},d=e=>{localStorage.setItem(o,JSON.stringify(e))},c=(e,r,t)=>{let s=a()||{lid:[]},n=s.lid.find(e=>e.c===t)||{c:t,q:[]},l=n.q.filter(e=>e.id!==r);l.push({id:r,a:e});let o={...n,q:l},i=s.lid.filter(e=>e.c!==t);i.push(o),d({lid:i})};var u=t(8792);let m=e=>{let{answerId:r,questionId:t,chapterId:o,allChapterQuestions:d,chapterUrl:m,locale:h,progressTitleTranslated:p,clearProgressButtonTitleTranslated:x}=e,[b,j]=(0,n.useState)();(0,n.useEffect)(()=>{a()&&j(a())},[]),(0,n.useEffect)(()=>{r&&(c(r,t,o),a()&&j(a()))},[r,o,t]);let f=(0,n.useCallback)((e,r)=>{if(!b)return;let t=b.lid.find(e=>e.c===o);if(!t)return;let s=t.q.find(r=>r.id===e);if(s)return s.a===r},[b,o]);return(0,s.jsxs)(s.Fragment,{children:[b&&(0,s.jsxs)("div",{className:"ml-5 flex items-center justify-start",children:[(0,s.jsx)("div",{className:"mr-2 text-xl text-primary",children:p}),(0,s.jsx)("button",{className:"btn btn-sm tooltip","data-tip":x,onClick:()=>{j(void 0),i()},children:"✕"})]}),(0,s.jsx)("div",{className:"my-5 overflow-x-auto",children:(0,s.jsx)("ul",{className:"steps pb-3",children:d.map(e=>{let r=f(e.id,e.correctAnswerId),n=e.id===t;return(0,s.jsx)("li",{className:(0,l.Z)("step",!1===r&&"step-error",!0===r&&"step-primary"),"data-content":void 0===r?"●":r?"✓":"✕",children:n?(0,s.jsx)("span",{className:"w-8 rounded-full border bg-info text-white",children:e.order}):(0,s.jsx)(u.default,{href:"/".concat(h,"/").concat(m,"/").concat(e.url),className:"w-8 rounded-full border border-primary hover:border-secondary",children:e.order})},"pagination-"+e.id)})})})]})},h=e=>{let{answers:r,name:t,questionExplanationOriginal:o,questionExplanationTranslated:i,locale:a,questionId:d,chapterId:c,chapterUrl:u,allChapterQuestions:h,progressTitleTranslated:p,clearProgressButtonTitleTranslated:x,hideExplanationTranslated:b,showExplanationTranslated:j,correctTranslated:f,incorrectTranslated:g}=e,[v,N]=(0,n.useState)(),[w,k]=(0,n.useState)(!1),y=r.find(e=>e.isCorrect);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:"w-full",children:[(0,s.jsx)("ul",{children:r.map(e=>(0,s.jsx)("li",{className:"form-control",children:(0,s.jsxs)("label",{className:"label cursor-pointer justify-start",htmlFor:e.id.toString(),children:[(0,s.jsxs)("span",{className:"mr-3 font-bold",children:[e.order,"."]}),(0,s.jsx)("input",{type:"radio",id:e.id.toString(),name:t,value:e.id,className:(0,l.Z)("radio mr-3",v===e.id&&e.isCorrect&&"border-green-500 checked:bg-green-500",v===e.id&&!e.isCorrect&&"border-red-500 checked:bg-red-500"),onChange:()=>N(e.id),checked:v===e.id}),(0,s.jsx)("div",{className:(0,l.Z)("tooltip tooltip-warning rounded border px-1 text-left text-xl",v===e.id&&e.isCorrect&&"border-green-500 bg-green-50",v===e.id&&!e.isCorrect&&"border-red-500 bg-red-50"),"data-tip":e.descriptionTranslated,children:e.descriptionOriginal}),(0,s.jsx)("div",{className:"hidden",children:e.descriptionTranslated})]})},e.id))}),v&&(0,s.jsx)("div",{className:(0,l.Z)("tooltip tooltip-right mt-6 md:mt-10",!w&&"tooltip-open"),"data-tip":w?b:j,children:(0,s.jsx)("div",{className:(0,l.Z)("stats cursor-pointer rounded-md shadow",v===(null==y?void 0:y.id)?"bg-green-50":"bg-red-50"),onClick:()=>k(!w),children:(0,s.jsxs)("div",{className:"stat",children:[(0,s.jsx)("div",{className:"stat-figure text-secondary",children:(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",className:(0,l.Z)("inline-block h-8 w-8 stroke-current",v===(null==y?void 0:y.id)?"text-green-500":"text-red-500"),children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})}),(0,s.jsx)("div",{className:(0,l.Z)("stat-value text-2xl",v===(null==y?void 0:y.id)?"text-green-500":"text-red-500"),children:v===(null==y?void 0:y.id)?f:g})]})})}),(0,s.jsxs)("div",{className:(0,l.Z)("my-6 border-b border-t border-blue-500 bg-blue-100 px-4 py-3",v&&w?"block":"hidden"),role:"alert",children:[(0,s.jsx)("span",{className:"badge badge-outline badge-sm relative top-[-2px] mr-2 !pl-1.5 !pr-1 pt-px font-mono !text-[.6rem] font-bold tracking-widest opacity-50",children:"DE"}),(0,s.jsx)("p",{className:"inline text-black",children:o}),"de"!==a&&(0,s.jsxs)("div",{className:"mt-4 border-t-[1px] border-gray-400 pt-4 text-blue-700",children:[(0,s.jsx)("span",{className:"badge badge-outline badge-sm relative top-[-2px] mr-2 !pl-1.5 !pr-1 pt-px font-mono !text-[.6rem] font-bold tracking-widest opacity-50",children:a.toUpperCase()}),(0,s.jsx)("p",{className:"inline",children:i})]})]})]}),(0,s.jsx)("div",{className:"divider"}),(0,s.jsx)(m,{answerId:v,questionId:d,chapterId:c,chapterUrl:u,allChapterQuestions:h,locale:a,progressTitleTranslated:p,clearProgressButtonTitleTranslated:x})]})}},3888:function(e,r,t){"use strict";t.r(r),t.d(r,{QuestionPageSelector:function(){return l}});var s=t(7437),n=t(7907);let l=e=>{let{selectedQuestionOrder:r,questions:t,chapterUrl:l}=e,o=(0,n.useRouter)();return(0,s.jsx)("select",{value:r,className:"ml-2 flex rounded border border-gray-200 px-2 py-1",onChange:e=>{let r=t.find(r=>r.id===Number(e.target.value));r&&o.replace("".concat(l,"/").concat(r.url))},children:t.map(e=>(0,s.jsx)("option",{value:e.order,children:e.order},e.id))})}},3385:function(){}},function(e){e.O(0,[782,332,974,825,971,69,744],function(){return e(e.s=648)}),_N_E=e.O()}]);