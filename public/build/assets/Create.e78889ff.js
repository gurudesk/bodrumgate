import{d as L,Z as H,H as S,i as b,B as P,o as d,c as k,b as o,w as u,a as n,q as m,t as c,h as D,f as w,g as v,F as T,r as s}from"./app.0e502cc5.js";import{P as x}from"./PsLayout.7915dd73.js";import{P as z}from"./PsBreadcrumb2.ad6b6d6d.js";import{u as K}from"./Validators.cb85894a.js";import{P as U}from"./PsInput.6fad3d25.js";import{P as V}from"./PsLabel.6d5b1b0c.js";import{P as j}from"./PsButton.ed5c0dad.js";import{P as q}from"./PsDangerDialog.195b6d73.js";import{P as M}from"./PsCard.42327b0b.js";import{P as Z}from"./PsLoading.0f9a761a.js";import{P as A}from"./PsIcon.8dbf90d4.js";import{P as G}from"./PsLabelCaption.3e68d19d.js";import{_ as J}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsDropdown.a0b3bb4c.js";import"./PsDropdownSelect.063a4178.js";import"./PsToggle.1bec2c80.js";import"./toggle.284f64a6.js";import"./PsWarningDialog.db1ec62c.js";import"./PsModal.0f9f6579.js";import"./vue-neat-modal.d03c5dee.js";import"./index.esm.159b9749.js";import"./auth.esm.925cebae.js";import"./SidebarMenuItem.15e6d48b.js";import"./SidebarSubTab.31b29583.js";import"./PsErrorDialog.3227ce3c.js";import"./PsInputWithRightIcon.c0b01b6c.js";import"./PsSuccessDialog.9e44e7fb.js";import"./PsBannerIcon.82d105ba.js";import"./PsIcon1.3db40a94.js";import"./Icons.c01eddd9.js";import"./PsLoadingCircleDialog.65ae0069.js";const O=L({name:"Create",components:{Head:H,PsInput:U,PsLabel:V,PsButton:j,PsLabelHeader6:q,PsCard:M,PsLoading:Z,PsIcon:A,PsBreadcrumb2:z,PsLabelCaption:G},layout:x,props:["errors"],data(){return{form:S({currency_short_form:"",currency_symbol:"",is_default:!1})}},setup(r){const e=b(!1),p=b(!1),_=b(),y=b(),{isEmpty:h,minLength:$}=K(),g=(t,a)=>{r.errors[t]=a?$(t,a,3):h(t,a),t=="currency_short_form"&&(_.value.isError=r.errors.currency_short_form!="")},C=(t,a)=>{r.errors[t]=a?"":h(t,a),t=="currency_symbol"&&(y.value.isError=r.errors.currency_symbol!="")};let i=S({currency_short_form:"",currency_symbol:"",is_default:!1});function f(){this.$inertia.post(route("currency.store"),i,{forceFormData:!0,onBefore:()=>{e.value=!0},onSuccess:()=>{e.value=!1,p.value=!0,setTimeout(()=>{p.value=!1},2e3)},onError:()=>{_.value.isError=r.errors.currency_short_form!="",y.value.isError=r.errors.currency_symbol!="",e.value=!1}})}return{validateCurerncyShortFormInput:g,validateCurerncySymbolInput:C,handleSubmit:f,form:i,currency_symbol:y,currency_short_form:_,loading:e,success:p}},computed:{breadcrumb(){return[{label:P("core__be_dashboard_label"),url:route("admin.index")},{label:P("currency_module"),url:route("currency.index")},{label:P("core__add_currency"),color:"text-primary-500"}]}},methods:{handleCancel(){this.$inertia.get(route("currency.index"))}}}),Q={class:"rounded-xl"},R={class:"bg-primary-50 dark:bg-primary-900 py-2.5 ps-4 rounded-t-xl"},W={class:"px-4 pt-6 dark:bg-backgroundDark"},X={class:"grid w-full sm:w-1/2 gap-6"},Y=n("span",{class:"text-red-800 font-medium ms-1"},"*",-1),N=n("span",{class:"text-red-800 font-medium ms-1"},"*",-1),rr={class:"flex flex-row justify-end mb-2.5"},er={key:2,class:"transition-all duration-300"},or={key:3,class:""};function tr(r,e,p,_,y,h){const $=s("Head"),g=s("ps-breadcrumb-2"),C=s("ps-label-header-6"),i=s("ps-label"),f=s("ps-input"),t=s("ps-label-caption"),a=s("ps-button"),B=s("ps-loading"),I=s("ps-icon"),E=s("ps-card"),F=s("ps-layout");return d(),k(T,null,[o($,{title:r.$t("core__add_currency")},null,8,["title"]),o(F,null,{default:u(()=>[o(g,{items:r.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),o(E,{class:"w-full h-auto"},{default:u(()=>[n("div",Q,[n("div",R,[o(C,{textColor:"text-secondary-800 dark:text-secondary-100"},{default:u(()=>[m(c(r.$t("core__currency_info")),1)]),_:1})]),n("div",W,[n("form",{onSubmit:e[7]||(e[7]=D(l=>r.handleSubmit(),["prevent"]))},[n("div",X,[n("div",null,[o(i,{class:"text-base mb-2"},{default:u(()=>[m(c(r.$t("core__currency_short_form")),1),Y]),_:1}),o(f,{ref:"currency_short_form",type:"text",value:r.form.currency_short_form,"onUpdate:value":e[0]||(e[0]=l=>r.form.currency_short_form=l),placeholder:r.$t("core__currency_short_form_placeholder"),onKeyup:e[1]||(e[1]=l=>r.validateCurerncyShortFormInput("currency_short_form",r.form.currency_short_form)),onBlur:e[2]||(e[2]=l=>r.validateCurerncyShortFormInput("currency_short_form",r.form.currency_short_form))},null,8,["value","placeholder"]),o(t,{textColor:"text-red-500 ",class:"mt-2 block"},{default:u(()=>[m(c(r.errors.currency_short_form),1)]),_:1})]),n("div",null,[o(i,{class:"text-base mb-2"},{default:u(()=>[m(c(r.$t("core__currency_symbol")),1),N]),_:1}),o(f,{ref:"currency_symbol",type:"text",value:r.form.currency_symbol,"onUpdate:value":e[3]||(e[3]=l=>r.form.currency_symbol=l),placeholder:r.$t("core__currency_symbol_placeholder"),onKeyup:e[4]||(e[4]=l=>r.validateCurerncySymbolInput("currency_symbol",r.form.currency_symbol)),onBlur:e[5]||(e[5]=l=>r.validateCurerncySymbolInput("currency_symbol",r.form.currency_symbol))},null,8,["value","placeholder"]),o(t,{textColor:"text-red-500 ",class:"mt-2 block"},{default:u(()=>[m(c(r.errors.currency_symbol),1)]),_:1})]),n("div",rr,[o(a,{onClick:e[6]||(e[6]=l=>r.handleCancel()),textSize:"text-base",type:"reset",class:"me-4",colors:"text-primary-500",focus:"",hover:""},{default:u(()=>[m(c(r.$t("core__be_btn_cancel")),1)]),_:1}),o(a,{class:"transition-all duration-300 min-w-3xs",padding:"px-7 py-2",rounded:"rounded",hover:"",focus:""},{default:u(()=>[r.loading?(d(),w(B,{key:0,theme:"border-2 border-t-2 border-text-8 border-t-primary-500",loadingSize:"h-5 w-5"})):v("",!0),r.success?(d(),w(I,{key:1,name:"check",w:"20",h:"20",class:"me-1.5 transition-all duration-300"})):v("",!0),r.success?(d(),k("span",er,c(r.$t("core__be_btn_saved")),1)):v("",!0),!r.loading&&!r.success?(d(),k("span",or,c(r.$t("core__be_btn_save")),1)):v("",!0)]),_:1})])])],32)])])]),_:1})]),_:1})],64)}var xr=J(O,[["render",tr]]);export{xr as default};