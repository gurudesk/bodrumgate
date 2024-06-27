import{d as T,Z as N,i as L,H as V,B as S,o,c as n,b as r,w as u,a as y,q as d,t as i,h as z,F as v,s as c,g as f,f as k,r as p}from"./app.0e502cc5.js";import{P as M}from"./PsLayout.7915dd73.js";import{u as j}from"./Validators.cb85894a.js";import{P as q}from"./PsInput.6fad3d25.js";import{P as Z}from"./PsLabel.6d5b1b0c.js";import{P as A}from"./PsButton.ed5c0dad.js";import{P as G}from"./PsTextarea.51895c08.js";import{P as J}from"./PsLabelHeader4.a6c530e5.js";import{P as O}from"./PsLabelCaption.3e68d19d.js";import{P as Q}from"./PsIcon.8dbf90d4.js";import{P as R}from"./PsLoading.0f9a761a.js";import{P as W}from"./PsBreadcrumb2.ad6b6d6d.js";import{P as X}from"./PsDropdown.a0b3bb4c.js";import{P as Y}from"./PsDropdownSelect.063a4178.js";import{P as x}from"./PsCheckboxValue.d227357b.js";import{_ as F}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsDangerDialog.195b6d73.js";import"./PsModal.0f9f6579.js";import"./vue-neat-modal.d03c5dee.js";import"./PsToggle.1bec2c80.js";import"./toggle.284f64a6.js";import"./PsWarningDialog.db1ec62c.js";import"./index.esm.159b9749.js";import"./auth.esm.925cebae.js";import"./SidebarMenuItem.15e6d48b.js";import"./SidebarSubTab.31b29583.js";import"./PsErrorDialog.3227ce3c.js";import"./PsInputWithRightIcon.c0b01b6c.js";import"./PsSuccessDialog.9e44e7fb.js";import"./PsBannerIcon.82d105ba.js";import"./PsIcon1.3db40a94.js";import"./Icons.c01eddd9.js";import"./PsLoadingCircleDialog.65ae0069.js";const ee=T({name:"Create",components:{Head:N,PsInput:q,PsLabel:Z,PsButton:A,PsTextarea:G,PsLabelHeader4:J,PsLabelCaption:O,PsIcon:Q,PsLoading:R,PsBreadcrumb2:W,PsDropdown:X,PsDropdownSelect:Y,PsCheckboxValue:x},layout:M,props:["errors","coreFieldFilterSettings"],setup(e){const a=L(!1),g=L(!1);let h=V({title:"",lang_key:"",route_name:"",status:!0,is_not_from_sidebar:!1});const{isEmpty:P,minLength:w}=j(),$=(s,m)=>{e.errors[s]=m?w(s,m,3):P(s,m)},C=(s,m)=>{e.errors[s]=m?"":P(s,m)},B=s=>{let m=s.keyCode?s.keyCode:s.which;(m<48||m>57)&&s.preventDefault()};function b(){this.$inertia.post(route("module.store"),h,{forceFormData:!0,onBefore:()=>{a.value=!0},onSuccess:()=>{a.value=!1,g.value=!0,setTimeout(()=>{g.value=!1},2e3)},onError:()=>{a.value=!1}})}return{validateModuleNameInput:$,validateEmptyInput:C,onlyNumber:B,form:h,handleSubmit:b,loading:a,success:g}},computed:{breadcrumb(){return[{label:S("core__be_dashboard_label"),url:route("admin.index")},{label:S("module_registering_module"),url:route("module.index")},{label:S("create_module"),color:"text-primary-500"}]}},methods:{handleCancel(){this.$inertia.get(route("module.index"))}}}),te={class:"rounded-xl"},oe={class:"bg-primary-50 dark:bg-primary-900 py-2.5 ps-4 rounded-t-xl"},ae={class:"px-4 pt-6 dark:bg-backgroundDark"},re={class:"grid w-1/2 gap-6"},ne={key:0,class:"text-red-800 font-medium ms-1"},se={key:0,class:"text-red-800 font-medium ms-1"},le={key:0,class:"text-red-800 font-medium ms-1"},me={class:"mb-2.5 flex flex-row justify-end"},ue={key:2,class:"transition-all duration-300"},ie={key:3,class:""};function pe(e,a,g,h,P,w){const $=p("Head"),C=p("ps-breadcrumb-2"),B=p("ps-label-header-6"),b=p("ps-label"),s=p("ps-input"),m=p("ps-label-caption"),E=p("ps-checkbox-value"),I=p("ps-button"),D=p("ps-loading"),K=p("ps-icon"),H=p("ps-card"),U=p("ps-layout");return o(),n(v,null,[r($,{title:e.$t("create_module")},null,8,["title"]),r(U,null,{default:u(()=>[r(C,{items:e.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),r(H,{class:"w-full h-auto"},{default:u(()=>[y("div",te,[y("div",oe,[r(B,{textColor:"text-secondary-800 dark:text-secondary-100"},{default:u(()=>[d(i(e.$t("core__module_info")),1)]),_:1})]),y("div",ae,[y("form",{onSubmit:a[6]||(a[6]=z(t=>e.handleSubmit(),["prevent"]))},[y("div",re,[(o(!0),n(v,null,c(e.coreFieldFilterSettings.filter(t=>t.original_field_name==="title"&&t.enable===1&&t.is_delete===0),(t,_)=>(o(),n("div",{key:_},[r(b,{class:"text-base"},{default:u(()=>[d(i(e.$t(t.label_name))+" ",1),(t.mandatory=1)?(o(),n("span",ne,"*")):f("",!0)]),_:2},1024),r(s,{ref_for:!0,ref:"title",type:"text",value:e.form.title,"onUpdate:value":a[0]||(a[0]=l=>e.form.title=l),placeholder:e.$t(t.placeholder),onKeyup:l=>t.mandatory==1?e.validateEmptyInput("title",e.form.title):"",onBlur:l=>t.mandatory==1?e.validateEmptyInput("title",e.form.title):""},null,8,["value","placeholder","onKeyup","onBlur"]),t.mandatory==1?(o(),k(m,{key:0,textColor:"text-red-500 ",class:"mt-2 block"},{default:u(()=>[d(i(e.errors.title),1)]),_:1})):f("",!0)]))),128)),(o(!0),n(v,null,c(e.coreFieldFilterSettings.filter(t=>t.original_field_name==="lang_key"&&t.enable===1&&t.is_delete===0),(t,_)=>(o(),n("div",{key:_},[r(b,{class:"text-base"},{default:u(()=>[d(i(e.$t(t.label_name))+" ",1),(t.mandatory=1)?(o(),n("span",se,"*")):f("",!0)]),_:2},1024),r(s,{ref_for:!0,ref:"lang_key",type:"text",value:e.form.lang_key,"onUpdate:value":a[1]||(a[1]=l=>e.form.lang_key=l),placeholder:e.$t(t.placeholder),onKeyup:l=>t.mandatory==1?e.validateEmptyInput("lang_key",e.form.lang_key):"",onBlur:l=>t.mandatory==1?e.validateEmptyInput("lang_key",e.form.lang_key):""},null,8,["value","placeholder","onKeyup","onBlur"]),t.mandatory==1?(o(),k(m,{key:0,textColor:"text-red-500 ",class:"mt-2 block"},{default:u(()=>[d(i(e.errors.lang_key),1)]),_:1})):f("",!0)]))),128)),(o(!0),n(v,null,c(e.coreFieldFilterSettings.filter(t=>t.original_field_name==="route_name"&&t.enable===1&&t.is_delete===0),(t,_)=>(o(),n("div",{key:_},[r(b,{class:"text-base"},{default:u(()=>[d(i(e.$t(t.label_name))+" ",1),(t.mandatory=1)?(o(),n("span",le,"*")):f("",!0)]),_:2},1024),r(s,{ref_for:!0,ref:"route_name",type:"text",value:e.form.route_name,"onUpdate:value":a[2]||(a[2]=l=>e.form.route_name=l),placeholder:e.$t(t.placeholder),onKeyup:l=>t.mandatory==1?e.validateEmptyInput("route_name",e.form.route_name):"",onBlur:l=>t.mandatory==1?e.validateEmptyInput("route_name",e.form.route_name):""},null,8,["value","placeholder","onKeyup","onBlur"]),t.mandatory==1?(o(),k(m,{key:0,textColor:"text-red-500 ",class:"mt-2 block"},{default:u(()=>[d(i(e.errors.route_name),1)]),_:1})):f("",!0)]))),128)),(o(!0),n(v,null,c(e.coreFieldFilterSettings.filter(t=>t.original_field_name==="status"&&t.enable===1&&t.is_delete===0),(t,_)=>(o(),n("div",{key:_},[r(b,{class:"text-base"},{default:u(()=>[d(i(e.$t(t.label_name)),1)]),_:2},1024),r(E,{value:e.form.status,"onUpdate:value":a[3]||(a[3]=l=>e.form.status=l),class:"font-normal",title:e.$t(t.placeholder)},null,8,["value","title"])]))),128)),(o(!0),n(v,null,c(e.coreFieldFilterSettings.filter(t=>t.original_field_name==="is_not_from_sidebar"&&t.enable===1&&t.is_delete===0),(t,_)=>(o(),n("div",{key:_},[r(b,{class:"text-base"},{default:u(()=>[d(i(e.$t(t.label_name)),1)]),_:2},1024),r(E,{value:e.form.is_not_from_sidebar,"onUpdate:value":a[4]||(a[4]=l=>e.form.is_not_from_sidebar=l),class:"font-normal",title:e.$t(t.placeholder)},null,8,["value","title"])]))),128)),y("div",me,[r(I,{onClick:a[5]||(a[5]=t=>e.handleCancel()),textSize:"text-base",type:"reset",class:"me-4",colors:"text-primary-500",focus:"",hover:""},{default:u(()=>[d(i(e.$t("core__be_btn_cancel")),1)]),_:1}),r(I,{class:"transition-all duration-300 min-w-3xs",padding:"px-5 py-2",rounded:"rounded",hover:"",focus:""},{default:u(()=>[e.loading?(o(),k(D,{key:0,theme:"border-2 border-t-2 border-text-8 border-t-primary-500",loadingSize:"h-5 w-5"})):f("",!0),e.success?(o(),k(K,{key:1,name:"check",viewBox:"0 0 18 14",w:"14",h:"10",class:"me-1.5 transition-all duration-300"})):f("",!0),e.success?(o(),n("span",ue,i(e.$t("core__be_btn_saved")),1)):f("",!0),!e.loading&&!e.success?(o(),n("span",ie,i(e.$t("core__be_btn_save")),1)):f("",!0)]),_:1})])])],32)])])]),_:1})]),_:1})],64)}var Je=F(ee,[["render",pe]]);export{Je as default};
