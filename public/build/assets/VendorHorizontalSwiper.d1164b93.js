import{S as f,a as w,b as v}from"./vue-splide.esm.9c0b6177.js";/* empty css                   */import S from"./VendorHorizontalVendor.8a92a791.js";import h from"./PsRouteLink.8f7df026.js";import k from"./PsButton.bc5ed803.js";import b from"./PsIcon.dc31c2db.js";import{_ as x}from"./plugin-vue_export-helper.21dcd24c.js";import{o as t,c as l,b as e,w as a,F as y,s as P,f as V,a as n,n as z,r as o}from"./app.0e502cc5.js";import"./PsValueStore.a232cbb1.js";import"./PsCard.ba2c0a4b.js";import"./PsLabel.3cf95094.js";import"./ps_constants.0e2a11f9.js";import"./PsUtils.78b0d4de.js";import"./PsLazyImage.38e4a2ae.js";const B={name:"VendorHorizontalSwiper",components:{Splide:f,SplideSlide:w,SplideTrack:v,PsRouteLink:h,PsButton:k,PsIcon:b,VendorHorizontalVendor:S},props:{itemList:Object},setup(){const s={rewind:!0,gap:"1.5rem",perPage:4,focus:0,omitEnd:!0,pagination:!1,direction:r(),breakpoints:{1536:{perPage:4,gap:"1.5rem"},1280:{perPage:4,gap:".75rem"},1024:{perPage:3,gap:".75rem"},768:{perPage:2,gap:".75rem"},640:{perPage:2,gap:".5rem"},200:{perPage:2}}};function r(){return localStorage.activeLanguage!=null&&localStorage.activeLanguage!=null&&localStorage.activeLanguage=="ar"?"rtl":"ltr"}return{options:s,getDir:r}}},L={class:""},C={class:"bg-feSecondary-50 dark:bg-feSecondary-800 w-10 h-10 rounded shadow-sm p-2 splide__arrow--prev",type:"button","aria-label":"Previous slide","aria-controls":"splide01-track"},N={class:"bg-feSecondary-50 dark:bg-feSecondary-800 w-10 h-10 rounded shadow-sm p-2 splide__arrow--next",type:"button","aria-label":"Next slide","aria-controls":"splide01-track"};function H(s,r,c,i,R,D){const _=o("vendor-horizontal-vendor"),m=o("splide-slide"),u=o("splide-track"),d=o("ps-icon"),g=o("splide");return t(),l("div",L,[e(g,{options:i.options,"has-track":!1},{default:a(()=>[e(u,null,{default:a(()=>[(t(!0),l(y,null,P(c.itemList,p=>(t(),V(m,{key:p.id},{default:a(()=>[e(_,{vendor:p},null,8,["vendor"])]),_:2},1024))),128))]),_:1}),n("div",{class:z("splide__arrows splide__arrows--"+i.getDir())},[n("button",C,[e(d,{textColor:"dark:text-feSecondary-200",name:"arrowNarrowRight",h:"23",w:"23",viewBox:"0 -3 9 20"})]),n("button",N,[e(d,{textColor:"dark:text-feSecondary-200",name:"arrowNarrowRight",h:"23",w:"23",viewBox:"0 -3 9 20"})])],2)]),_:1},8,["options"])])}var U=x(B,[["render",H],["__scopeId","data-v-1397ecb2"]]);export{U as default};
