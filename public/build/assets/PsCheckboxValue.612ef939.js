import n from"./PsLabel.3cf95094.js";import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";import{o as c,f as i,w as s,a as f,n as u,q as b,t as m,r as y}from"./app.0e502cc5.js";const h={name:"PsCheckboxValue",components:{PsLabel:n},props:{value:Boolean,title:{type:String,default:"N.A"},theme:{type:String,default:"me-2 w-4 h-4 rounded"},disabledTheme:{type:String,default:"bg-feSecondary-100 text-feSecondary-300 dark:text-feSecondary-600 dark:bg-feSecondary-700 cursor-not-allowed opacity-90"},colors:{type:String,default:"checked:bg-fePrimary-500 dark:checked:bg-fePrimary-500"},border:{type:String,default:"border border-feSecondary-200 dark:border-feSecondary-400"},textColor:{type:String,default:"text-fePrimary-500 dark:text-fePrimary-500"},focus:{type:String,default:"focus:ring-2 focus:ring-fePrimary-300"},hover:{type:String,default:"hover:bg-fePrimary-500 dark:hover:bg-fePrimary-500"},disabled:{type:Boolean,default:!1}},setup(r,{emit:t}){function e(a){t("update:value",a)}return{handleInput:e}}},g=["disabled","id","checked"];function k(r,t,e,a,x,S){const d=y("ps-label");return c(),i(d,{class:"select-none inline-flex items-center"},{default:s(()=>[f("input",{type:"checkbox",disabled:e.disabled,class:u(["bg-transparent",e.disabled?[e.disabledTheme,e.theme,e.border]:[e.theme,e.border,e.colors,e.textColor,e.focus,e.hover]]),id:e.title,checked:e.value,onInput:t[0]||(t[0]=o=>a.handleInput(o.target.checked))},null,42,g),b(" "+m(e.title),1)]),_:1})}var p=l(h,[["render",k]]);export{p as default};
