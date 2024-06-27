import{_ as o}from"./plugin-vue_export-helper.21dcd24c.js";import{o as c,c as f,a as r,n as l,l as i}from"./app.0e502cc5.js";const u={name:"PsInputWithRightIcon",props:{className:{type:String,default:"bg-transparent  w-full text-sm shadow-sm"},value:{type:String,default:""},type:{type:String,default:"text"},theme:{type:String,default:"text-feSecondary-500 dark:text-feSecondary-400"},rounded:{type:String,default:"rounded-lg"},maxlength:{type:Number,default:99999999},placeholder:{type:String,default:""},placeholderColor:{type:String,default:"placeholder-feSecondary-500 dark:placeholder-feSecondary-400"},onInput:Function,disabled:{type:Boolean,default:!1},padding:{type:String,default:"py-2.5 px-4"},disabledTheme:{type:String,default:" text-feSecondary-300 border-feSecondary-300 dark:border-feSecondary-800 dark:text-feSecondary-700 shadow-none placeholder-feSecondary-300 dark:placeholder-feSecondary-600"},defaultBorder:{type:String,default:"border border-feSecondary-200 hover:border-feSecondary-400 dark:border-feSecondary-400 hover:dark:border-feSecondary-50 focus:outline-none focus:border-none focus:ring-2 focus:ring-fePrimary-300 ring-fePrimary-300 placeholder-feSecondary-500 dark:placeholder-feSecondary-400"}},setup(d,{emit:t}){function e(a){t("update:value",a)}return{handleInput:e}}},s={class:"relative"},y=["disabled","type","value","maxlength","placeholder"];function h(d,t,e,a,m,S){return c(),f("div",s,[r("input",{class:l(e.disabled?[e.rounded,e.disabledTheme,e.padding,e.className]:[e.theme,e.rounded,e.defaultBorder,e.placeholderColor,e.padding,e.className]),disabled:e.disabled,type:e.type,value:e.value,maxlength:e.maxlength,onInput:t[0]||(t[0]=n=>a.handleInput(n.target.value)),placeholder:e.placeholder},null,42,y),r("div",{class:l(["absolute inset-y-0 flex items-center ltr:ms-2 ltr:me-3.5 ltr:right-0 rtl:me-2 rtl:ms-3.5 rtl:left-0",e.theme])},[i(d.$slots,"icon")],2)])}var b=o(u,[["render",h]]);export{b as default};
