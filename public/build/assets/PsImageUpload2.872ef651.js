import{P as C}from"./PsButton.ed5c0dad.js";import{P}from"./PsIcon.8dbf90d4.js";import{P as S}from"./PsLabel.6d5b1b0c.js";import{_ as w}from"./plugin-vue_export-helper.21dcd24c.js";import{d as I,y as N,i as u,r as g,o as $,c as B,a as F,b as i,w as f,q as h,t as _}from"./app.0e502cc5.js";const T=I({name:"PsImageUpload2",components:{PsButton:C,PsIcon:P,PsLabel:S},props:{imageFile:{type:Object},title:{type:String,default:""},placeholder:String,disabled:{type:Boolean,default:!1},disabledTheme:{type:String,default:"text-secondary-300 dark:text-secondary-700 placeholder-secondary-300 dark:placeholder-secondary-700"},defaultTheme:{type:String,default:"text-secondary-800 dark:text-secondary-100 placeholder-secondary-800 dark:placeholder-secondary-100"}},setup(e,{emit:a}){const t=N({data:[]}),c=u();let o;function b(){c.value.click()}function p(){return t.data[0]}let r=u(),s=u();function d(v){const n=v.target.files;console.log(n),t.data=[];for(let l=0;l<n.length;l++){const y=new FileReader;y.onload=m=>{t.data.push(m.target&&m.target.result?m.target.result.toString():"")},y.readAsDataURL(n[l]),o=n[l],r.value=o.name,s.value=o.size*(1/8)*(1/1e3),a("update:imageFile",o)}}function k(){t.data=[]}return{imageClick:b,image:c,onImageSelected:d,previewImage:t,getImageUrl:p,imageName:r,imageSize:s,cancel:k}}}),U={class:"border-dashed border-2 border-secondary-200 dark:border-secondary-800 rounded p-2 flex gap-2 items-center"};function V(e,a,t,c,o,b){const p=g("ps-icon"),r=g("ps-label"),s=g("ps-button");return $(),B("div",U,[F("input",{type:"file",accept:"image/*",ref:"image",style:{display:"none"},onChange:a[0]||(a[0]=d=>e.onImageSelected(d))},null,544),i(s,{disabled:e.disabled,onClick:a[1]||(a[1]=d=>e.imageClick()),colors:"bg-transparent",border:"border border-secondary-300 dark:border-secondary-800",shadow:"shadow",rounded:"rounded"},{default:f(()=>[i(p,{name:"fileUpload2",w:"24",h:"24"}),i(r,{class:"ms-2"},{default:f(()=>[h(_(e.$t("core_be__upload_files")),1)]),_:1})]),_:1},8,["disabled"]),i(r,{textColor:e.disabled?e.disabledTheme:e.defaultTheme},{default:f(()=>[h(_(e.imageName?e.imageName:e.title),1)]),_:1},8,["textColor"])])}var j=w(T,[["render",V]]);export{j as P};