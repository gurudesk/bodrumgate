import{d as S,Z as D,H as L,i as x,B as C,o as c,c as E,b as t,w as a,a as l,q as s,t as n,h as H,f as y,g as v,F,r as o}from"./app.0e502cc5.js";import{P as T}from"./PsLayout.7915dd73.js";import{u as V}from"./Validators.cb85894a.js";import{P as I}from"./PsInput.6fad3d25.js";import{P as N}from"./PsLabel.6d5b1b0c.js";import{P as z}from"./PsButton.ed5c0dad.js";import{P as U}from"./PsTextarea.51895c08.js";import{P as j}from"./PsDangerDialog.195b6d73.js";import{P as q}from"./PsLabelHeader4.a6c530e5.js";import{P as M}from"./PsLabelCaption.3e68d19d.js";import{E as Z}from"./Editor.bc21b57b.js";import{P as A}from"./PsBreadcrumb2.ad6b6d6d.js";import{P as G}from"./PsIcon.8dbf90d4.js";import{P as J}from"./PsLoading.0f9a761a.js";import{P as K}from"./PsLink1.88c7c7c9.js";import{_ as O}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsDropdown.a0b3bb4c.js";import"./PsDropdownSelect.063a4178.js";import"./PsToggle.1bec2c80.js";import"./toggle.284f64a6.js";import"./PsWarningDialog.db1ec62c.js";import"./PsModal.0f9f6579.js";import"./vue-neat-modal.d03c5dee.js";import"./index.esm.159b9749.js";import"./auth.esm.925cebae.js";import"./SidebarMenuItem.15e6d48b.js";import"./SidebarSubTab.31b29583.js";import"./PsErrorDialog.3227ce3c.js";import"./PsInputWithRightIcon.c0b01b6c.js";import"./PsSuccessDialog.9e44e7fb.js";import"./PsBannerIcon.82d105ba.js";import"./PsIcon1.3db40a94.js";import"./Icons.c01eddd9.js";import"./PsLoadingCircleDialog.65ae0069.js";import"./ckeditor.038706df.js";const Q=S({name:"Create",components:{Head:D,Editor:Z,PsIcon:G,PsLoading:J,PsInput:I,PsLabel:N,PsButton:z,PsTextarea:U,PsLabelHeader4:q,PsLabelCaption:M,PsBreadcrumb2:A,PsLabelHeader6:j,PsLink1:K},layout:T,props:["errors","domain","dir"],setup(e){let r=L({content:"",url:""});const p=x(!1),u=x(!1),{isEmpty:g}=V();let k=e.domain,_=e.dir,m="";_?m=k+_+"/":m=k;const P=m+"app_content/privacy",i=(b,d)=>{e.errors[b]=d?"":g(b,d)};function h(){this.$inertia.post(route("privacy_policy.store"),r,{forceFormData:!0,onBefore:()=>{p.value=!0},onSuccess:()=>{p.value=!1,u.value=!0,setTimeout(()=>{u.value=!1},2e3)},onError:()=>{p.value=!1}})}return{validateEmptyInput:i,form:r,handleSubmit:h,loading:p,success:u,privacyurl:P}},computed:{breadcrumb(){return[{label:C("core__be_dashboard_label"),url:route("admin.index")},{label:C("privacy_policy_module"),color:"text-primary-500"}]}}}),R={class:"w-full mt-8 rounded-lg bg-white dark:bg-secondaryDark-black shadow-sm"},W={class:"bg-primary-50 dark:bg-primary-900 py-2.5 ps-4 rounded-t-xl"},X={class:"px-4 py-3"},Y={class:"px-4 py-3"},ee=l("br",null,null,-1),te={class:"flex flex-row px-4 py-3 justify-end mb-2.5 mt-4"};function oe(e,r,p,u,g,k){const _=o("Head"),m=o("ps-breadcrumb-2"),P=o("ps-label-header-6"),i=o("ps-label"),h=o("editor"),b=o("ps-link-1"),d=o("ps-button"),$=o("ps-loading"),w=o("ps-icon"),B=o("ps-layout");return c(),E(F,null,[t(_,{title:e.$t("privacy_policy_module")},null,8,["title"]),t(B,null,{default:a(()=>[t(m,{items:e.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),l("div",R,[l("div",W,[t(P,{textColor:"text-secondary-800 dark:text-secondary-100"},{default:a(()=>[s(n(e.$t("core__be_privacy_policy")),1)]),_:1})]),l("form",{onSubmit:r[2]||(r[2]=H((...f)=>e.handleSubmit&&e.handleSubmit(...f),["prevent"]))},[l("div",X,[t(i,{class:"text-base"},{default:a(()=>[s(n(e.$t("core__be_content")),1)]),_:1}),t(h,{class:"dark:bg-secondaryDark:black",value:e.form.content,"onUpdate:value":r[0]||(r[0]=f=>e.form.content=f)},null,8,["value"])]),l("div",Y,[t(i,{class:"text-base mb-1"},{default:a(()=>[s(n(e.$t("core__be_privacy_policy_url")),1)]),_:1}),t(b,{target:"_blank",url:e.privacyurl,textColor:"text-blue-500"},{default:a(()=>[s(n(e.privacyurl),1)]),_:1},8,["url"]),ee]),l("div",te,[t(d,{onClick:r[1]||(r[1]=f=>e.handleCancel()),textSize:"text-base",type:"reset",class:"me-4",colors:"text-primary-500",focus:"",hover:""},{default:a(()=>[s(n(e.$t("core__be_btn_cancel")),1)]),_:1}),t(d,{class:"transition-all duration-300 min-w-3xs",padding:"px-6 py-2",rounded:"rounded",hover:"",focus:""},{default:a(()=>[e.loading?(c(),y($,{key:0,theme:"border-2 border-t-2 border-text-8 border-t-primary-500",loadingSize:"h-5 w-5"})):v("",!0),e.success?(c(),y(w,{key:1,name:"check",w:"20",h:"20",class:"me-1.5 transition-all duration-300"})):v("",!0),e.success?(c(),y(i,{key:2,class:"transition-all duration-300",textColor:"text-white dark:text-secondaryDark-black"},{default:a(()=>[s(n(e.$t("core__be_btn_saved")),1)]),_:1})):v("",!0),!e.loading&&!e.success?(c(),y(i,{key:3,textColor:"text-white dark:text-secondaryDark-black"},{default:a(()=>[s(n(e.$t("core__be_btn_save")),1)]),_:1})):v("",!0)]),_:1})])],32)])]),_:1})],64)}var ze=O(Q,[["render",oe]]);export{ze as default};
