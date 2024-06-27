import{d as H,Z as L,i as g,H as V,B as f,o as d,c as h,b as t,w as n,a,q as u,t as s,h as x,f as C,g as v,F as D,r}from"./app.0e502cc5.js";import{P as F}from"./PsLayout.7915dd73.js";import{P as T}from"./PsBreadcrumb2.ad6b6d6d.js";import{u as z}from"./Validators.cb85894a.js";import{P as K}from"./PsInput.6fad3d25.js";import{P as U}from"./PsLabel.6d5b1b0c.js";import{P as j}from"./PsButton.ed5c0dad.js";import{P as q}from"./PsDangerDialog.195b6d73.js";import{P as M}from"./PsCard.42327b0b.js";import{P as N}from"./PsLoading.0f9a761a.js";import{P as Z}from"./PsIcon.8dbf90d4.js";import{P as A}from"./PsLabelCaption.3e68d19d.js";import{_ as G}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsDropdown.a0b3bb4c.js";import"./PsDropdownSelect.063a4178.js";import"./PsToggle.1bec2c80.js";import"./toggle.284f64a6.js";import"./PsWarningDialog.db1ec62c.js";import"./PsModal.0f9f6579.js";import"./vue-neat-modal.d03c5dee.js";import"./index.esm.159b9749.js";import"./auth.esm.925cebae.js";import"./SidebarMenuItem.15e6d48b.js";import"./SidebarSubTab.31b29583.js";import"./PsErrorDialog.3227ce3c.js";import"./PsInputWithRightIcon.c0b01b6c.js";import"./PsSuccessDialog.9e44e7fb.js";import"./PsBannerIcon.82d105ba.js";import"./PsIcon1.3db40a94.js";import"./Icons.c01eddd9.js";import"./PsLoadingCircleDialog.65ae0069.js";const J=H({name:"Create",components:{Head:L,PsInput:K,PsLabel:U,PsButton:j,PsLabelHeader6:q,PsCard:M,PsLoading:N,PsIcon:Z,PsBreadcrumb2:T,PsLabelCaption:A},layout:F,props:["errors","mobile_language"],setup(e){const o=g(!1),p=g(!1),_=g(),b=g(),{isEmpty:$}=z(),y=(i,m)=>{e.errors[i]=m?"":$(i,m),i=="key"&&(_.value.isError=!!Boolean(e.errors.key)),i=="value"&&(b.value.isError=!!Boolean(e.errors.value))};let c=V({symbol:"",name:"",language_id:e.mobile_language.id});function k(){this.$inertia.post(route("mobile_language_string.store",e.mobile_language),c,{forceFormData:!0,onBefore:()=>{o.value=!0},onSuccess:()=>{o.value=!1,p.value=!0,setTimeout(()=>{p.value=!1},2e3),this.$inertia.get(route("mobile_language_string.index",e.mobile_language.id))},onError:()=>{o.value=!1,_.value.isError=!!Boolean(e.errors.key),b.value.isError=!!Boolean(e.errors.value)}})}return{validateEmptyInput:y,handleSubmit:k,loading:o,success:p,value:b,key:_,form:c}},computed:{breadcrumb(){return[{label:f("core__be_dashboard_label"),url:route("admin.index")},{label:f("mobile_language_module"),url:route("mobile_language.index")},{label:f("mobile_language_string_module"),url:route("mobile_language_string.index",this.mobile_language.id)},{label:f("core__be_add_mobile_language_string"),color:"text-primary-500"}]}},methods:{handleCancel(){this.$inertia.get(route("mobile_language_string.index",this.mobile_language.id))}}}),O={class:"rounded-xl"},Q={class:"bg-primary-50 dark:bg-primary-900 py-2.5 ps-4 rounded-t-xl"},R={class:"px-4 pt-6 dark:bg-backgroundDark"},W={class:"grid w-full sm:w-1/2 gap-6"},X={class:"text-primary-500"},Y=a("span",{class:"text-red-800 font-medium ms-1"},"*",-1),ee=a("span",{class:"text-red-800 font-medium ms-1"},"*",-1),oe={class:"flex flex-row justify-end mb-2.5"},te={key:2,class:"transition-all duration-300"},ae={key:3,class:""};function re(e,o,p,_,b,$){const y=r("Head"),c=r("ps-breadcrumb-2"),k=r("ps-label-header-6"),i=r("ps-label"),m=r("ps-input"),P=r("ps-label-caption"),B=r("ps-button"),E=r("ps-loading"),w=r("ps-icon"),I=r("ps-card"),S=r("ps-layout");return d(),h(D,null,[t(y,{title:e.$t("core__be_add_mobile_language_string")},null,8,["title"]),t(S,null,{default:n(()=>[t(c,{items:e.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),t(I,{class:"w-full h-auto"},{default:n(()=>[a("div",O,[a("div",Q,[t(k,{textColor:"text-secondary-800 dark:text-secondary-100"},{default:n(()=>[u(s(e.$t("create_language_string")),1)]),_:1})]),a("div",R,[a("form",{onSubmit:o[7]||(o[7]=x(l=>e.handleSubmit(),["prevent"]))},[a("div",W,[a("div",null,[u(s(e.$t("core__be_selected_language"))+" : ",1),a("span",X,s(e.mobile_language.name),1)]),a("div",null,[t(i,{class:"text-base mb-1"},{default:n(()=>[u(s(e.$t("core__be_key_label")),1),Y]),_:1}),t(m,{type:"text",value:e.form.key,"onUpdate:value":o[0]||(o[0]=l=>e.form.key=l),placeholder:e.$t("core__be_key_placeholder"),onKeyup:o[1]||(o[1]=l=>e.validateEmptyInput("key",e.form.key)),onBlur:o[2]||(o[2]=l=>e.validateEmptyInput("key",e.form.key))},null,8,["value","placeholder"]),t(P,{textColor:"text-red-500 ",class:"mt-2 block"},{default:n(()=>[u(s(e.errors.key),1)]),_:1})]),a("div",null,[t(i,{class:"text-base mb-1"},{default:n(()=>[u(s(e.$t("core__be_value_label")),1),ee]),_:1}),t(m,{type:"text",value:e.form.value,"onUpdate:value":o[3]||(o[3]=l=>e.form.value=l),placeholder:e.$t("core__be_value_placeholder"),onKeyup:o[4]||(o[4]=l=>e.validateEmptyInput("value",e.form.value)),onBlur:o[5]||(o[5]=l=>e.validateEmptyInput("value",e.form.value))},null,8,["value","placeholder"]),t(P,{textColor:"text-red-500 ",class:"mt-2 block"},{default:n(()=>[u(s(e.errors.value),1)]),_:1})]),a("div",oe,[t(B,{onClick:o[6]||(o[6]=l=>e.handleCancel()),textSize:"text-base",type:"reset",class:"me-4",colors:"text-primary-500",focus:"",hover:""},{default:n(()=>[u(s(e.$t("core__be_btn_cancel")),1)]),_:1}),t(B,{class:"transition-all duration-300 min-w-3xs",padding:"px-7 py-2",rounded:"rounded",hover:"",focus:""},{default:n(()=>[e.loading?(d(),C(E,{key:0,theme:"border-2 border-t-2 border-text-8 border-t-primary-500",loadingSize:"h-5 w-5"})):v("",!0),e.success?(d(),C(w,{key:1,name:"check",w:"20",h:"20",class:"me-1.5 transition-all duration-300"})):v("",!0),e.success?(d(),h("span",te,s(e.$t("core__be_btn_saved")),1)):v("",!0),!e.loading&&!e.success?(d(),h("span",ae,s(e.$t("core__be_btn_save")),1)):v("",!0)]),_:1})])])],32)])])]),_:1})]),_:1})],64)}var Te=G(J,[["render",re]]);export{Te as default};
