import c from"./PsLabel.3cf95094.js";import{_ as d}from"./plugin-vue_export-helper.21dcd24c.js";import{o as i,f as s,w as r,a as u,q as f,t as m,r as _}from"./app.0e502cc5.js";const g={name:"PsRadio",components:{PsLabel:c},props:{value:{type:Object},selectedValue:{type:Object},title:{type:String,default:"N.A"},onChange:Function},setup(e,{emit:a}){function n(){let t=!1;return e.selectedValue!=null&&e.value!=null&&e.selectedValue.id==e.value.id&&(t=!0),t}function l(){const t=e.selectedValue;Object.assign(t,e.value),a("update:selectedValue",t),e.onChange!=null&&e.onChange(t)}return{getValue:n,handleInput:l}}},h=["id","checked"];function b(e,a,n,l,t,v){const o=_("ps-label");return i(),s(o,{class:"select-none items-center"},{default:r(()=>[u("input",{type:"radio",class:"border-1 form-radio me-1 checked:bg-fePrimary-500 checked:dark:bg-fePrimary-500 dark:bg-feSecondary-800",id:n.title,checked:l.getValue(),onChange:a[0]||(a[0]=V=>l.handleInput())},null,40,h),f(" "+m(n.title),1)]),_:1})}var C=d(g,[["render",b]]);export{C as default};