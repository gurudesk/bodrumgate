import{i as d,j as m,k as h,o as c,c as f,a as i,l as a,b as p,w as k,n as u,g as y,T as w}from"./app.0e502cc5.js";import{P as x}from"./PsValueStore.a232cbb1.js";import{_}from"./plugin-vue_export-helper.21dcd24c.js";const b={name:"PsDropdown",props:{horizontalAlign:{type:String,default:"left"},h:{type:String,default:" h-36"},rounded:{type:String,default:"rounded"},isPopup:{type:Boolean,default:!1},shadow:{type:String,default:"shadow-lg"},isFixed:{type:Boolean,default:!1},boxPositioning:{type:String,default:""}},emits:["on-click"],setup(n,{emit:o}){const t=x(),e=d(!1);function s(){e.value&&(e.value=!e.value)}const r=d();function l(v){r.value.contains(v.target)||s()}m(()=>{document.addEventListener("click",l)}),h(()=>{document.removeEventListener("click",l)});function g(){e.value=!e.value,o("on-click")}return{isMenuOpen:e,dropdown:r,hide:s,clicked:g,psValueStore:t}}},P={class:"relative inline-block text-left text-feSecondary-500",ref:"dropdown"},S={class:"flex flex-col"},z={class:"overflow-hidden"},A={class:"relative"};function B(n,o,t,e,s,r){return c(),f("div",P,[i("div",{onClick:o[0]||(o[0]=(...l)=>e.clicked&&e.clicked(...l))},[a(n.$slots,"select")]),p(w,{"enter-active-class":"transition ease-out duration-100","enter-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:k(()=>[e.isMenuOpen?(c(),f("div",{key:0,class:u(["text-sm overflow-hidden z-20 bg-feAchromatic-50 dark:bg-feAchromatic-900",[t.rounded,t.shadow,t.horizontalAlign=="right"?"ltr:origin-top-right ltr:right-0 rtl:origin-top-left rtl:left-0":t.horizontalAlign=="left"?"ltr:origin-top-left ltr:left-0 rtl:origin-top-right rtl:right-0":"ltr:origin-top-right ltr:right-0 rtl:origin-top-right rtl:right-0",t.isPopup?"bottom-12":"mt-2",t.isFixed?`fixed ${t.boxPositioning}`:`absolute ${t.boxPositioning}`]])},[i("div",S,[i("div",z,[a(n.$slots,"filter")]),i("div",{class:u(["overflow-y-auto overflow-x-hidden",t.h])},[i("div",A,[i("div",{onClick:o[1]||(o[1]=l=>e.isMenuOpen=!e.isMenuOpen)},[a(n.$slots,"list")]),a(n.$slots,"loadmore")])],2)])],2)):y("",!0)]),_:3})],512)}var O=_(b,[["render",B]]);export{O as default};
