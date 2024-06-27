import{P as s}from"./PsIcon.8dbf90d4.js";import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";import{o as a,c as n,a as l,f as u,n as t,g as y,t as o,b as c,r as f}from"./app.0e502cc5.js";const m={name:"PsDropdownSelect",components:{PsIcon:s},props:{selectedValue:{type:String,default:""},bgColor:{type:String,default:""},w:{type:String,default:"w-full"},h:{type:String,default:"10"},id:{type:String},rounded:{type:String,default:" rounded"},text:{type:String,default:"text-xs lg:text-sm font-medium text-secondary-600 dark:text-secondary-100"},iconTheme:{type:String,default:"text-secondary-500 dark:text-secondary-200 "},padding:{type:String,default:" px-4 py-2 "},border:{type:String,default:"border border-1 border-secondary-200 dark:border-secondary-800"},shadow:{type:String,default:"shadow-sm"},justify:{type:String,default:"flex justify-between "},hover:{type:String,default:""},focus:{type:String,default:" focus:outline-none focus:shadow-outline-blue text-secondary-800 dark:text-secondary-400 active:bg-primary-200 active:text-secondary-800 dark:active:bg-primary-200 dark:active:text-secondary-800"},cursor:{type:String,default:"cursor-pointer"},opacity:{type:String,default:"opacity-100"},leftIcon:{type:String,default:""},leftIconTheme:{type:String,default:"me-1"},placeholder:{type:String,default:""},disabled:{type:Boolean,default:!1}},setup(){}},x=["disabled","id"],g={class:"flex flex-row"};function _(r,h,e,b,S,k){const d=f("ps-icon");return a(),n("button",{type:"button",disabled:e.disabled,class:t(["parent inline-flex items-center leading-5 transition ease-in-out duration-150 btn-focus",[e.bgColor,e.w,e.h,e.padding,e.shadow,e.rounded,e.border,e.hover,e.focus,e.cursor,e.opacity]]),id:e.id,"aria-haspopup":"true","aria-expanded":"true"},[l("div",{class:t(["w-full flex flex-row child items-center",e.justify])},[l("div",g,[e.leftIcon!=""?(a(),u(d,{key:0,name:e.leftIcon,class:t(e.leftIconTheme)},null,8,["name","class"])):y("",!0),e.placeholder==""?(a(),n("p",{key:1,class:t(e.disabled?"text-xs lg:text-sm font-medium text-secondary-300 dark:text-secondary-100":e.text)},o(e.selectedValue?e.selectedValue:r.$t("core.ps_dropdown_select__chooseone")),3)):(a(),n("p",{key:2,class:t(e.disabled?"text-xs lg:text-sm font-medium text-secondary-300 dark:text-secondary-100":e.text)},o(e.selectedValue?e.selectedValue:e.placeholder),3))]),c(d,{name:"downChervon",class:t(["child1",e.disabled?"text-secondary-300 dark:text-secondary-100":e.iconTheme])},null,8,["class"]),c(d,{name:"upChervon",class:t(["child2",e.disabled?"text-secondary-300 dark:text-secondary-100":e.iconTheme])},null,8,["class"])],2)],10,x)}var p=i(m,[["render",_],["__scopeId","data-v-50a5200d"]]);export{p as P};
