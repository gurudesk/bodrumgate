import{d as t,bI as l,i as a,o as c,f as p,r as i}from"./app.0e502cc5.js";import{_ as d}from"./plugin-vue_export-helper.21dcd24c.js";const m=t({name:"PsLazyImage",components:{VLazyImage:l},props:{src:{type:String,default:""},srcPlaceholder:{type:String,default:""},error:{type:String,default:""}},setup(r){const e=a(r.src),o=a(!1);function s(){o.value=!0}return{imgSrc:e,isError:o,handleError:s}}});function f(r,e,o,s,u,g){const n=i("v-lazy-image");return c(),p(n,{src:r.isError?r.error:r.src,"src-placeholder":r.srcPlaceholder,onError:e[0]||(e[0]=y=>r.handleError())},null,8,["src","src-placeholder"])}var h=d(m,[["render",f]]);export{h as default};
