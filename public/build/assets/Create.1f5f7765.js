import{d as M,Z as G,p as N,i as h,H as j,B as K,o as t,c as a,b as n,w as s,a as l,q as d,t as u,h as q,F as c,s as g,g as p,f as $,n as L,r as _}from"./app.0e502cc5.js";import{P as Z}from"./PsLayout.7915dd73.js";import{u as A}from"./Validators.cb85894a.js";import{P as J}from"./PsInput.6fad3d25.js";import{P as O}from"./PsLabel.6d5b1b0c.js";import{P as Q}from"./PsButton.ed5c0dad.js";import{P as R}from"./PsTextarea.51895c08.js";import{P as W}from"./PsLabelHeader4.a6c530e5.js";import{P as X}from"./PsLabelCaption.3e68d19d.js";import{P as Y}from"./PsIcon.8dbf90d4.js";import{P as F}from"./PsLoading.0f9a761a.js";import{c as x}from"./PsDangerDialog.195b6d73.js";import{P as ee}from"./PsBreadcrumb2.ad6b6d6d.js";import{P as oe}from"./PsDropdown.a0b3bb4c.js";import{P as ne}from"./PsDropdownSelect.063a4178.js";import{P as re}from"./PsCheckboxValue.d227357b.js";import{_ as se}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsToggle.1bec2c80.js";import"./toggle.284f64a6.js";import"./PsWarningDialog.db1ec62c.js";import"./PsModal.0f9f6579.js";import"./vue-neat-modal.d03c5dee.js";import"./index.esm.159b9749.js";import"./auth.esm.925cebae.js";import"./SidebarMenuItem.15e6d48b.js";import"./SidebarSubTab.31b29583.js";import"./PsErrorDialog.3227ce3c.js";import"./PsInputWithRightIcon.c0b01b6c.js";import"./PsSuccessDialog.9e44e7fb.js";import"./PsBannerIcon.82d105ba.js";import"./PsIcon1.3db40a94.js";import"./Icons.c01eddd9.js";import"./PsLoadingCircleDialog.65ae0069.js";const te=M({name:"Create",components:{Head:G,PsInput:J,PsLabel:O,PsButton:Q,PsTextarea:R,PsLabelHeader4:W,PsLabelCaption:X,PsIcon:Y,PsLoading:F,PsTextButton:x,Link:N,PsBreadcrumb2:ee,PsDropdown:oe,PsDropdownSelect:ne,PsCheckboxValue:re},layout:Z,props:["errors","menu_groups","coreFieldFilterSettings","modules","icons"],setup(e){const{isEmpty:r,minLength:z}=A(),w=h(!1),P=h(!1),V=h(!1),E=h(!1),I=h(!1),B=h(!1);let m=j({sub_menu_name:"",sub_menu_desc:"",sub_menu_lang_key:"",icon_id:"",module_id:"",ordering:"",core_menu_group_id:"",is_show_on_menu:1,is_dropdown:1});const k=(f,y)=>{e.errors[f]=y?z(f,y,3):r(f,y)},v=(f,y,S="")=>{e.errors[f]=y?"":r(f,y,S)};function C(){this.$inertia.post(route("vendor_sub_menu_group.store"),m,{forceFormData:!0,onBefore:()=>{w.value=!0},onSuccess:()=>{w.value=!1,P.value=!0,setTimeout(()=>{P.value=!1},2e3)},onError:()=>{w.value=!1,e.errors.sub_menu_name!=null&&e.errors.sub_menu_name!=""&&(I.value.isError=!0),e.errors.sub_menu_desc!=null&&e.errors.sub_menu_desc!=""&&(B.value.isError=!0),e.errors.sub_menu_icon!=null&&e.errors.sub_menu_icon!=""&&(E.value.isError=!0),e.errors.sub_menu_lang_key!=null&&e.errors.sub_menu_lang_key!=""&&(V.value.isError=!0)}})}return{validateNameInput:k,validateEmptyInput:v,route,form:m,handleSubmit:C,loading:w,success:P,input_name:I,input_icon:E,input_lang:V,input_desc:B}},computed:{breadcrumb(){return[{label:K("core__be_dashboard_label"),url:route("admin.index")},{label:K("vendor_sub_menu_group_module"),url:route("vendor_sub_menu_group.index")},{label:K("add_vendor_sub_menu_group"),color:"text-primary-500"}]},moduleId(){if(this.form.is_dropdown)return this.form.module_id=0}},methods:{handleCancel(){this.$inertia.get(route("vendor_sub_menu_group.index"))}}}),le={class:"rounded-xl"},ae={class:"bg-primary-50 dark:bg-primary-900 py-2.5 ps-4 rounded-t-xl"},ue={class:"px-4 pt-6 dark:bg-backgroundDark"},de={class:"grid w-full sm:w-1/2 gap-6"},me={key:0,class:"text-red-800 font-medium ms-1"},ie=d("Select Menu Group"),_e=l("span",{class:"text-red-800 font-medium ms-1"},"*",-1),pe={class:"rounded-md shadow-xs w-56"},fe={class:"pt-2 z-30"},be=["onClick"],ve={key:0,class:"text-red-800 font-medium ms-1"},ye={key:0,class:"text-red-800 font-medium ms-1"},ce=l("span",{class:"text-red-800 font-medium ms-1"},"*",-1),ge={class:"rounded-md shadow-xs w-56"},ke={class:"pt-2 z-30"},he=["onClick"],$e={key:0,class:"text-red-800 font-medium ms-1"},we={key:0},Ce=l("span",{class:"text-red-800 font-medium ms-1"},"*",-1),Pe={class:"rounded-md shadow-xs w-56"},Ee={class:"pt-2 z-30"},Ie=d("Select Sub Menu Group"),Be=["onClick"],Se={class:"mb-2.5 flex flex-row justify-end"},Ve={key:2,class:"transition-all duration-300"},Ke={key:3,class:""};function Le(e,r,z,w,P,V){const E=_("Head"),I=_("ps-breadcrumb-2"),B=_("ps-label-header-6"),m=_("ps-label"),k=_("ps-input"),v=_("ps-label-caption"),C=_("ps-dropdown-select"),f=_("ps-dropdown"),y=_("ps-checkbox-value"),S=_("ps-button"),U=_("ps-loading"),D=_("ps-icon"),H=_("ps-card"),T=_("ps-layout");return t(),a(c,null,[n(E,{title:e.$t("add_vendor_sub_menu_group")},null,8,["title"]),n(T,null,{default:s(()=>[n(I,{items:e.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),n(H,{class:"w-full h-auto"},{default:s(()=>[l("div",le,[l("div",ae,[n(B,{textColor:"text-secondary-800 dark:text-secondary-100"},{default:s(()=>[d(u(e.$t("core__vendor_sub_menu_group_info")),1)]),_:1})]),l("div",ue,[l("form",{onSubmit:r[14]||(r[14]=q((...o)=>e.handleSubmit&&e.handleSubmit(...o),["prevent"]))},[l("div",de,[l("div",null,[(t(!0),a(c,null,g(e.coreFieldFilterSettings.filter(o=>o.original_field_name==="sub_menu_name"&&o.enable===1&&o.is_delete===0),(o,b)=>(t(),a("div",{key:b},[n(m,{class:"text-base mb-2"},{default:s(()=>[d(u(e.$t(o.label_name))+" ",1),(o.mandatory=1)?(t(),a("span",me,"*")):p("",!0)]),_:2},1024),n(k,{ref_for:!0,ref:"sub_menu_name",type:"text",value:e.form.sub_menu_name,"onUpdate:value":r[0]||(r[0]=i=>e.form.sub_menu_name=i),placeholder:e.$t(o.placeholder),onKeyup:i=>o.mandatory==1?e.validateEmptyInput("sub_menu_name",e.form.sub_menu_name):"",onBlur:i=>o.mandatory==1?e.validateEmptyInput("sub_menu_name",e.form.sub_menu_name):""},null,8,["value","placeholder","onKeyup","onBlur"]),o.mandatory==1?(t(),$(v,{key:0,textColor:"text-red-500 ",class:"mt-2 block"},{default:s(()=>[d(u(e.errors.sub_menu_name),1)]),_:1})):p("",!0)]))),128))]),l("div",null,[n(m,{class:"text-base mb-2"},{default:s(()=>[ie,_e]),_:1}),n(f,{align:"left",class:"w-full"},{select:s(()=>[n(C,{placeholder:"Select Menu Group",selectedValue:e.form.core_menu_group_id==""?"":e.menu_groups.filter(o=>o.id==e.form.core_menu_group_id)[0].group_name,onChange:r[1]||(r[1]=o=>e.validateEmptyInput("core_menu_group_id",e.form.core_menu_group_id)),onBlur:r[2]||(r[2]=o=>e.validateEmptyInput("core_menu_group_id",e.form.core_menu_group_id))},null,8,["selectedValue"])]),list:s(()=>[l("div",pe,[l("div",fe,[(t(!0),a(c,null,g(e.menu_groups,o=>(t(),a("div",{key:o.id,class:"w-56 flex py-4 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center",onClick:b=>[e.form.core_menu_group_id=o.id,e.validateEmptyInput("core_menu_group_id",e.form.core_menu_group_id)]},[n(m,{class:L(["ms-2",o.id==e.form.core_menu_group_id?" font-bold":""])},{default:s(()=>[d(u(o.group_name),1)]),_:2},1032,["class"])],8,be))),128))])])]),_:1}),n(v,{textColor:"text-red-500 ",class:"mt-2 block"},{default:s(()=>[d(u(e.errors.core_menu_group_id),1)]),_:1})]),l("div",null,[(t(!0),a(c,null,g(e.coreFieldFilterSettings.filter(o=>o.original_field_name==="sub_menu_desc"&&o.enable===1&&o.is_delete===0),(o,b)=>(t(),a("div",{key:b},[n(m,{class:"text-base mb-2"},{default:s(()=>[d(u(e.$t(o.label_name))+" ",1),(o.mandatory=1)?(t(),a("span",ve,"*")):p("",!0)]),_:2},1024),n(k,{ref_for:!0,ref:"sub_menu_desc",type:"text",value:e.form.sub_menu_desc,"onUpdate:value":r[3]||(r[3]=i=>e.form.sub_menu_desc=i),placeholder:e.$t(o.placeholder),onKeyup:i=>o.mandatory==1?e.validateEmptyInput("sub_menu_desc",e.form.sub_menu_desc):"",onBlur:i=>o.mandatory==1?e.validateEmptyInput("sub_menu_desc",e.form.sub_menu_desc):""},null,8,["value","placeholder","onKeyup","onBlur"]),o.mandatory==1?(t(),$(v,{key:0,textColor:"text-red-500 ",class:"mt-2 block"},{default:s(()=>[d(u(e.errors.sub_menu_desc),1)]),_:1})):p("",!0)]))),128))]),l("div",null,[(t(!0),a(c,null,g(e.coreFieldFilterSettings.filter(o=>o.original_field_name==="sub_menu_lang_key"&&o.enable===1&&o.is_delete===0),(o,b)=>(t(),a("div",{key:b},[n(m,{class:"text-base"},{default:s(()=>[d(u(e.$t(o.label_name))+" ",1),(o.mandatory=1)?(t(),a("span",ye,"*")):p("",!0)]),_:2},1024),n(k,{ref_for:!0,ref:"sub_menu_lang_key",type:"text",value:e.form.sub_menu_lang_key,"onUpdate:value":r[4]||(r[4]=i=>e.form.sub_menu_lang_key=i),placeholder:e.$t(o.placeholder),onKeyup:i=>o.mandatory==1?e.validateEmptyInput("sub_menu_lang_key",e.form.sub_menu_lang_key):"",onBlur:i=>o.mandatory==1?e.validateEmptyInput("sub_menu_lang_key",e.form.sub_menu_lang_key):""},null,8,["value","placeholder","onKeyup","onBlur"]),o.mandatory==1?(t(),$(v,{key:0,textColor:"text-red-500 ",class:"mt-2 block"},{default:s(()=>[d(u(e.errors.sub_menu_lang_key),1)]),_:1})):p("",!0)]))),128))]),l("div",null,[n(m,{class:"text-base"},{default:s(()=>[d(u(e.$t("select_icon")),1),ce]),_:1}),n(f,{align:"left",class:"lg:mt-2 mt-1 w-full"},{select:s(()=>[n(C,{placeholder:e.$t("select_icon"),selectedValue:e.form.icon_id==""?"":e.icons.filter(o=>o.id==e.form.icon_id)[0].icon_name,onChange:r[5]||(r[5]=o=>e.validateEmptyInput("icon_id",e.form.icon_id)),onBlur:r[6]||(r[6]=o=>e.validateEmptyInput("icon_id",e.form.icon_id))},null,8,["placeholder","selectedValue"])]),list:s(()=>[l("div",ge,[l("div",ke,[(t(!0),a(c,null,g(e.icons,o=>(t(),a("div",{key:o.id,class:"w-56 flex py-4 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center",onClick:b=>[e.form.icon_id=o.id,e.validateEmptyInput("icon_id",e.form.icon_id)]},[n(m,{class:L(["ms-2",o.id==e.form.icon_id?" font-bold":""])},{default:s(()=>[d(u(o.icon_name),1)]),_:2},1032,["class"])],8,he))),128))])])]),_:1}),n(v,{textColor:"text-red-500 ",class:"mt-2 block"},{default:s(()=>[d(u(e.errors.icon_id),1)]),_:1})]),l("div",null,[(t(!0),a(c,null,g(e.coreFieldFilterSettings.filter(o=>o.original_field_name==="ordering"&&o.enable===1&&o.is_delete===0),(o,b)=>(t(),a("div",{key:b},[n(m,{class:"text-base"},{default:s(()=>[d(u(e.$t(o.label_name))+" ",1),(o.mandatory=1)?(t(),a("span",$e,"*")):p("",!0)]),_:2},1024),n(k,{ref_for:!0,ref:"ordering",type:"number",value:e.form.ordering,"onUpdate:value":r[7]||(r[7]=i=>e.form.ordering=i),placeholder:e.$t(o.placeholder),onKeyup:i=>o.mandatory==1?e.validateEmptyInput("ordering",e.form.ordering):"",onBlur:i=>o.mandatory==1?e.validateEmptyInput("ordering",e.form.ordering):""},null,8,["value","placeholder","onKeyup","onBlur"]),o.mandatory==1?(t(),$(v,{key:0,textColor:"text-red-500 ",class:"mt-2 block"},{default:s(()=>[d(u(e.errors.ordering),1)]),_:1})):p("",!0)]))),128))]),l("div",null,[n(m,{class:"text-base mb-2"},{default:s(()=>[d(u(e.$t("has_child_label")),1)]),_:1}),n(y,{value:e.form.is_dropdown,"onUpdate:value":r[8]||(r[8]=o=>e.form.is_dropdown=o),class:"font-normal",title:e.$t("has_child")},null,8,["value","title"])]),e.form.is_dropdown?p("",!0):(t(),a("div",we,[n(m,{class:"text-base mb-2"},{default:s(()=>[d(u(e.$t("select_module")),1),Ce]),_:1}),n(f,{align:"left",class:"w-full"},{select:s(()=>[n(C,{placeholder:e.$t("select_module"),selectedValue:e.form.module_id==""?"":e.modules.filter(o=>o.id==e.form.module_id)[0].title,onChange:r[9]||(r[9]=o=>e.validateEmptyInput("module_id",e.form.module_id)),onBlur:r[10]||(r[10]=o=>e.validateEmptyInput("module_id",e.form.module_id))},null,8,["placeholder","selectedValue"])]),list:s(()=>[l("div",Pe,[l("div",Ee,[l("div",{class:"w-56 flex py-4 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center",onClick:r[11]||(r[11]=o=>[e.form.module_id="",e.validateEmptyInput("module_id",e.form.module_id)])},[n(m,{class:"text-gray-200"},{default:s(()=>[Ie]),_:1})]),(t(!0),a(c,null,g(e.modules,o=>(t(),a("div",{key:o.id,class:"w-56 flex py-4 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center",onClick:b=>[e.form.module_id=o.id,e.validateEmptyInput("module_id",e.form.module_id)]},[n(m,{class:L(["ms-2",o.id==e.form.module_id?" font-bold":""])},{default:s(()=>[d(u(o.title),1)]),_:2},1032,["class"])],8,Be))),128))])])]),_:1}),n(v,{textColor:"text-red-500 ",class:"mt-2 block"},{default:s(()=>[d(u(e.errors.module_id),1)]),_:1})])),l("div",null,[n(m,{class:"text-base mb-2"},{default:s(()=>[d(u(e.$t("status")),1)]),_:1}),n(y,{value:e.form.is_show_on_menu,"onUpdate:value":r[12]||(r[12]=o=>e.form.is_show_on_menu=o),class:"font-normal",title:e.$t("publish")},null,8,["value","title"])]),l("div",Se,[n(S,{onClick:r[13]||(r[13]=o=>e.handleCancel()),textSize:"text-base",type:"reset",class:"me-4",colors:"text-primary-500",focus:"",hover:""},{default:s(()=>[d(u(e.$t("core__be_btn_cancel")),1)]),_:1}),n(S,{class:"transition-all duration-300 min-w-3xs",padding:"px-5 py-2",rounded:"rounded",hover:"",focus:""},{default:s(()=>[e.loading?(t(),$(U,{key:0,theme:"border-2 border-t-2 border-text-8 border-t-primary-500",loadingSize:"h-5 w-5"})):p("",!0),e.success?(t(),$(D,{key:1,name:"check",viewBox:"0 0 18 14",w:"14",h:"10",class:"me-1.5 transition-all duration-300"})):p("",!0),e.success?(t(),a("span",Ve,u(e.$t("core__be_btn_saved")),1)):p("",!0),!e.loading&&!e.success?(t(),a("span",Ke,u(e.$t("core__be_btn_save")),1)):p("",!0)]),_:1})])])],32)])])]),_:1})]),_:1})],64)}var po=se(te,[["render",Le]]);export{po as default};
