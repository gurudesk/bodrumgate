import{d as P,i as y,y as C,H as L,o as l,f as k,w as r,a as s,b as n,q as h,t as i,h as M,c as m,s as S,g as f,F as B,r as u}from"./app.0e502cc5.js";import{P as E}from"./PsModal.0f9f6579.js";import{P as N}from"./PsLabel.6d5b1b0c.js";import{P as T}from"./PsButton.ed5c0dad.js";import{P as V}from"./PsToggle.1bec2c80.js";import{P as j}from"./PsIcon.8dbf90d4.js";import{P as z}from"./PsInput.6fad3d25.js";import{P as F}from"./PsLoading.0f9a761a.js";import{_ as U}from"./plugin-vue_export-helper.21dcd24c.js";import"./vue-neat-modal.d03c5dee.js";import"./toggle.284f64a6.js";import"./Icons.c01eddd9.js";const D=P({name:"LanguageEditModal",components:{PsModal:E,PsLabel:N,PsButton:T,PsToggle:V,PsIcon:j,PsInput:z,PsLoading:F},setup(){const e=y(),t=C({data:{}}),c=y(!1),_=y(!1);let d=L({key:"",values:[]});function w(){e.value.toggle(!1)}function p(a){d.key=a,axios.post(route("language_string.getLanguageString",d)).then(b=>{t.data=b.data,e.value.toggle(!0)}).catch(b=>{})}function g(){for(let a=0;a<t.data.length;a++)d.values.push({value:t.data[a].value,id:t.data[a].id,language_id:t.data[a].language.id});this.$inertia.post(route("language_string.updateLanguageStrings"),d,{forceFormData:!0,onBefore:()=>{c.value=!0},onSuccess:()=>{c.value=!1,_.value=!0,setTimeout(()=>{_.value=!1,e.value.toggle(!1),window.location.reload()},1e3)},onError:()=>{c.value=!1}})}function v(){e.value.toggle(!1)}return{loading:c,success:_,psmodal:e,openModal:p,form:d,languageStrings:t,handleCancel:w,handleSubmit:g,closeModal:v}}}),H={class:"px-2 w-full flex flex-row justify-between"},I={class:"w-full flex flex-col mt-4 mb-4"},q={class:"px-2 mt-6"},O={class:"w=full after:flex flex-col items-start justify-start space-y-6"},W=s("span",{class:"text-red-800 font-medium ms-1"},"*",-1),A={key:0},G=s("span",{class:"text-red-800 font-medium ms-1"},"*",-1),J={class:"flex flex-row justify-end mb-2.5"},K={key:2,class:"transition-all duration-300"},Q={key:3,class:""};function R(e,t,c,_,d,w){const p=u("ps-label"),g=u("ps-icon"),v=u("ps-input"),a=u("ps-button"),b=u("ps-loading"),x=u("ps-modal");return l(),k(x,{ref:"psmodal",maxWidth:"560px",bodyHeight:"max-h-full",line:"hidden",isClickOut:!1,theme:" px-6 py-6 rounded-lg shadow-xl",class:"z-50 h-56 bg-white"},{title:r(()=>[s("div",H,[n(p,{class:"text-lg font-semibold"},{default:r(()=>[h(i(e.$t("core__be_language_string_label")),1)]),_:1}),n(g,{onClick:t[0]||(t[0]=o=>e.closeModal()),name:"cross",class:"me-1 font-semibold",theme:"text-secondary-400"})])]),body:r(()=>[s("div",I,[s("div",q,[s("form",{onSubmit:t[3]||(t[3]=M(o=>e.handleSubmit(),["prevent"]))},[s("div",O,[s("div",null,[n(p,null,{default:r(()=>[h(i(e.$t("core__be_key_label")),1),W]),_:1}),n(v,{type:"text",disabled:!0,value:e.form.key,"onUpdate:value":t[1]||(t[1]=o=>e.form.key=o),placeholder:e.$t("core__be_key_placeholder")},null,8,["value","placeholder"])]),(l(!0),m(B,null,S(e.languageStrings.data,o=>(l(),m("div",{key:o.id},[o.language!=null?(l(),m("div",A,[n(p,{class:"text-base mb-2"},{default:r(()=>[h(i(o.language.name),1),G]),_:2},1024)])):f("",!0),n(v,{type:"text",value:o.value,"onUpdate:value":$=>o.value=$,placeholder:e.$t("core__be_value_placeholder")},null,8,["value","onUpdate:value","placeholder"])]))),128)),s("div",J,[n(a,{onClick:t[2]||(t[2]=o=>e.handleCancel()),textSize:"text-base",type:"reset",class:"me-4",colors:"text-primary-500",focus:"",hover:""},{default:r(()=>[h(i(e.$t("core__be_btn_cancel")),1)]),_:1}),n(a,{class:"transition-all duration-300 min-w-3xs",padding:"px-7 py-2",rounded:"rounded",hover:"",focus:""},{default:r(()=>[e.loading?(l(),k(b,{key:0,theme:"border-2 border-t-2 border-text-8 border-t-primary-500",loadingSize:"h-5 w-5"})):f("",!0),e.success?(l(),k(g,{key:1,name:"check",w:"20",h:"20",class:"me-1.5 transition-all duration-300"})):f("",!0),e.success?(l(),m("span",K,i(e.$t("core__be_btn_saved")),1)):f("",!0),!e.loading&&!e.success?(l(),m("span",Q,i(e.$t("core__be_btn_save")),1)):f("",!0)]),_:1})])])],32)])])]),_:1},512)}var ie=U(D,[["render",R]]);export{ie as default};
