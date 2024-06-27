import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{i as l,o as s,c,a as u,n as i}from"./app.0e502cc5.js";const f={name:"PsTextArea",props:{rows:{type:Number,default:3},placeholder:{type:String,default:""},value:{type:String,default:""},theme:{type:String,default:"text-secondary-500"},rounded:{type:String,default:"rounded"},disabled:{type:Boolean,default:!1},disabledTheme:{type:String,default:"bg-none text-secondary-300 border-secondary-200 dark:border-secondary-800 dark:text-secondary-700 shadow-none placeholder-secondary-300 dark:placeholder-secondary-700"},defaultBorder:{type:String,default:"border border-secondary-200 dark:border-secondary-700 focus:outline-none focus:ring-1 focus:ring-primary-500"},errorBorder:{type:String,default:"border border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"}},setup(o,{emit:r}){const e=l(!1);function d(a){r("update:value",a)}return{handleInput:d,isError:e}}},y={class:"w-full block"},b=["disabled","rows","value","placeholder"];function h(o,r,e,d,a,m){return s(),c("div",y,[u("textarea",{disabled:e.disabled,class:i(["w-full px-4 py-2 text-sm shadow-sm dark:bg-secondaryDark-black placeholder-secondary-500",e.disabled?[e.rounded,e.disabledTheme]:d.isError?[e.theme,e.rounded,e.errorBorder]:[e.theme,e.rounded,e.defaultBorder]]),rows:e.rows,value:e.value,placeholder:e.placeholder,onInput:r[0]||(r[0]=t=>d.handleInput(t.target.value))},null,42,b)])}var x=n(f,[["render",h]]);export{x as P};
