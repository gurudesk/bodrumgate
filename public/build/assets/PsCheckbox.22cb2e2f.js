import{P as r}from"./PsLabel.6d5b1b0c.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";import{o as f,f as b,w as y,a as u,n as o,t as x,r as g}from"./app.0e502cc5.js";const h={name:"PsCheckbox",components:{PsLabel:r},props:{value:{type:Object,default:{}},selectedValue:{type:Array,default:[]},title:{type:String,default:"N.A"},w:{type:String,default:"w-5"},h:{type:String,default:"h-5"},rounded:{type:String,default:"rounded"},color:{type:String,default:"text-secondary-800 dark:text-secondary-100"},disabled:{type:Boolean,default:!1},disabledColor:{type:String,default:"text-secondary-300"},disabledTextColor:{type:String,default:"text-secondary-300 dark:text-secondaryDark-white"},font:{type:String,default:"font-normal"},padding:{type:String,default:""},textColor:{type:String,default:"text-secondary-800 dark:text-secondary-100"}},setup(a,{emit:n}){function e(){let d=!1;if(a.selectedValue!=null){for(let t=0;t<a.selectedValue.length;t++)if(a.selectedValue[t].id==a.value.id){d=!0;break}}return d}function i(d){const t=a.selectedValue;let c=!1;for(let l=0;l<t.length;l++)if(t[l].name==a.value.name){c=!0,d||t.splice(l,1);break}c||t.push(a.value),n("update:selectedValue",t)}return{getValue:e,handleInput:i}}},k=["disabled","id","checked"];function m(a,n,e,i,d,t){const c=g("ps-label");return f(),b(c,{class:o(["text-base inline-flex items-center",e.disabled?[e.font,e.disabledTextColor]:[e.font,e.textColor]])},{default:y(()=>[u("input",{type:"checkbox",class:o(["form-check-input dark:bg-secondaryDark-black",e.disabled?[e.w,e.h,e.disabledColor]:[e.w,e.h,e.color,e.rounded]]),disabled:e.disabled,id:e.title,checked:i.getValue(),onInput:n[0]||(n[0]=l=>i.handleInput(l.target.checked))},null,42,k),u("label",{class:o(e.disabled?[e.padding,e.font,e.disabledColor]:[e.padding,e.font,e.textColor])},x(e.title),3)]),_:1},8,["class"])}var V=s(h,[["render",m]]);export{V as P};
