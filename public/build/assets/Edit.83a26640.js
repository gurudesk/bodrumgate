import{d as M,Z as N,i as u,y as U,H as j,B as b,o as _,c as p,b as t,w as s,a as o,q as l,t as i,h as J,g as h,F as z,s as H,n as I,f as q,r as a}from"./app.0e502cc5.js";import{P as O}from"./PsLayout.7915dd73.js";import{u as K}from"./Validators.cb85894a.js";import{P as Z}from"./PsInput.6fad3d25.js";import{P as A}from"./PsLabel.6d5b1b0c.js";import{P as G}from"./PsButton.ed5c0dad.js";import{P as Q}from"./PsTextarea.51895c08.js";import{P as W}from"./PsLabelHeader4.a6c530e5.js";import{P as X}from"./PsLabelCaption.3e68d19d.js";import{P as Y}from"./PsCheckbox.22cb2e2f.js";import{P as ee}from"./PsCheckboxValue.d227357b.js";import{P as te}from"./PsBreadcrumb2.ad6b6d6d.js";import{P as oe}from"./PsDropdown.a0b3bb4c.js";import{P as se}from"./PsDropdownSelect.063a4178.js";import{P as ne}from"./PsIcon.8dbf90d4.js";import{P as re}from"./PsLoading.0f9a761a.js";import{P as ae}from"./PsTooltip.61544209.js";import{P as le}from"./PsTooltips.6001d734.js";import{P as ie}from"./PsLoadingCircleDialog.65ae0069.js";import{P as de}from"./PsSuccessDialog.9e44e7fb.js";import{_ as ce}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsDangerDialog.195b6d73.js";import"./PsModal.0f9f6579.js";import"./vue-neat-modal.d03c5dee.js";import"./PsToggle.1bec2c80.js";import"./toggle.284f64a6.js";import"./PsWarningDialog.db1ec62c.js";import"./index.esm.159b9749.js";import"./auth.esm.925cebae.js";import"./SidebarMenuItem.15e6d48b.js";import"./SidebarSubTab.31b29583.js";import"./PsErrorDialog.3227ce3c.js";import"./PsInputWithRightIcon.c0b01b6c.js";import"./PsBannerIcon.82d105ba.js";import"./PsIcon1.3db40a94.js";import"./Icons.c01eddd9.js";const _e=M({name:"Edit",components:{PsIcon:ne,PsLoading:re,Head:N,PsInput:Z,PsLabel:A,PsButton:G,PsTextarea:Q,PsLabelHeader4:W,PsLabelCaption:X,PsCheckbox:Y,PsCheckboxValue:ee,PsBreadcrumb2:te,PsDropdown:oe,PsDropdownSelect:se,PsTooltips:le,PsTooltip:ae,PsLoadingCircleDialog:ie,PsSuccessDialog:de},layout:O,props:["errors","status","backend_setting","vendor_subscription"],setup(e){const n=u(!1),$=u(!1),w=u(),D=u();u(e.frontendColors);const E=u(),x=u(),{isEmpty:B,isNum:L}=K(),m=(c,C)=>{e.errors[c]=C?L(c,C):B(c,C),c=="notic_days"&&(E.value.isError=e.errors.notic_days!=""),c=="vendor_checkout_setting"&&(x.value.isError=e.errors.vendor_checkout_setting!="")},f=[{label:"core__be_vendor_feature_on_off",docu:"https://doc.clickup.com/24312566/p/h/q5yqp-175202/4fc3a8c00ffc0ba"},{label:"core__lang_refresh_setting",docu:"https://doc.clickup.com/24312566/p/h/q5yqp-175242/5c613e184364a09"},{label:"core__be_subscriptions_setting",docu:"https://doc.clickup.com/24312566/p/h/q5yqp-179742/8be0d3082e8aac6"}],y=u(f[0].label),d=u(f[0].docu);function k(c){y.value=c.label,d.value=c.docu}let P=JSON.parse(e.vendor_subscription.ref_selection),v=JSON.parse(e.vendor_subscription.setting);const g=U(j({vendor_setting:e.backend_setting.vendor_setting==1,vendor_subscription:v.subscription_plan[0].id,notic_days:v.notic_days,vendor_checkout_setting:v.vendor_checkout_setting==1,_method:"put"}));console.log(P),console.log(v);function F(c){this.$inertia.post(route("vendor_setting.update",c),g,{forceFormData:!0,onBefore:()=>{n.value=!0},onSuccess:()=>{n.value=!1,$.value=!0,setTimeout(()=>{$.value=!1},1e3)},onError:()=>{n.value=!1}})}function S(){this.$inertia.get(route("vendor_setting.languageRefresh"),{key:"refresh"},{onBefore:()=>{w.value.openModal(b("core__be_updating_title"),b("core__be_lang_refreshing_desc"))},onSuccess:()=>{},onError:()=>{w.value.closeModal()}})}function R(){D.value.openModal(b("core__be_awesome_title"),b("core__be_lang_refresh_success_desc"),b("core__be_btn_back"),()=>{},!0)}function V(){g.vendor_setting||(g.vendor_checkout_setting=0)}return{handleSubmit:F,validateEmptyInput:m,form:g,title:y,settingColumn:f,changeSection:k,loading:n,success:$,docu:d,handleFeLangRefresh:S,ps_loading_circle_dialog:w,langRefreshSuccessDialog:R,ps_success_dialog:D,ref_subscriptions:P,notic_days:E,vendor_checkout_setting:x,handleVendorSettingCheckbox:V}},computed:{breadcrumb(){return[{label:b("core__be_dashboard_label"),url:route("admin.index")},{label:b("vendor_setting_module"),color:"text-primary-500"}]}},mounted(){this.status.flag=="langSuccess"&&this.langRefreshSuccessDialog()}}),ue={class:"bg-background dark:bg-secondaryDark-black rounded-lg"},pe={class:"bg-primary-50 dark:bg-primary-900"},me={class:"bg-primary-50 flex items-center dark:bg-primary-900 py-2.5 ps-4 rounded-t-lg"},fe={class:"h-8 flex items-center"},be=l(" For more details: "),he=["href"],ve={class:"grid grid-cols-1 md:grid-cols-2 gap-2 mt-4"},ge={key:0},ye={class:"px-4 pt-3"},ke={class:"flex items-center"},Pe=l(" For more details: "),Ce=o("a",{target:"_blank",href:"https://doc.clickup.com/24312566/p/h/q5yqp-175222/be600340120429c",class:"underline"},"Refer to this doc",-1),$e={class:"px-4 pb-3"},we={class:"px-4 pt-3"},xe={class:"flex items-center"},Se=l(" For more details: "),qe=o("a",{target:"_blank",href:"https://doc.clickup.com/24312566/p/h/q5yqp-175222/be600340120429c",class:"underline"},"Refer to this doc",-1),De={class:"px-4 pb-3"},Ee={key:1},Be={class:"rounded-xl"},Le={class:"mt-6"},Fe={class:""},Re={class:"border border-1 rounded p-4"},Ve={class:"h-auto"},ze={class:"flex flex-row justify-start mt-6"},Te={key:2},He={class:"px-4 py-3"},Ie={class:"flex items-center"},Me={class:"rounded-md shadow-xs"},Ne={class:"pt-2 z-30"},Ue=["onClick"],je={class:"px-4 py-3"},Je={class:"flex flex-row justify-end mt-6 mb-2.5"},Oe={class:"px-4"},Ke=["onClick"];function Ze(e,n,$,w,D,E){const x=a("Head"),B=a("ps-breadcrumb-2"),L=a("ps-label-header-6"),m=a("ps-icon"),f=a("ps-tooltip"),y=a("ps-checkbox-value"),d=a("ps-label"),k=a("ps-button"),P=a("ps-card"),v=a("ps-dropdown-select"),g=a("ps-dropdown"),F=a("ps-input"),S=a("ps-label-caption"),R=a("ps-loading"),V=a("ps-loading-circle-dialog"),c=a("ps-success-dialog"),C=a("ps-layout");return _(),p(z,null,[t(x,{title:e.$t("vendor_setting_module")},null,8,["title"]),t(C,null,{default:s(()=>[t(B,{items:e.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),t(P,{class:"w-full h-auto"},{default:s(()=>[o("div",ue,[o("div",pe,[o("div",me,[t(L,{textColor:"text-secondary-800 dark:text-secondary-100"},{default:s(()=>[l(i(e.$t(e.title)),1)]),_:1}),t(f,{tooltiptext:"absolute z-50 bottom-full ms-0.5"},{content:s(()=>[o("div",fe,[t(m,{name:"info",w:"20",h:"20",class:"ms-2.5 transition-all duration-300 text-primary-500"})])]),tooltips:s(()=>[be,o("a",{target:"_blank",href:e.docu,class:"underline"},"Refer to this doc",8,he)]),_:1})])]),o("form",{onSubmit:n[8]||(n[8]=J(r=>e.handleSubmit(this.backend_setting.id),["prevent"]))},[o("div",ve,[o("div",null,[e.title==e.settingColumn[0].label?(_(),p("div",ge,[o("div",ye,[o("div",ke,[t(y,{onChange:n[0]||(n[0]=r=>e.handleVendorSettingCheckbox()),value:e.form.vendor_setting,"onUpdate:value":n[1]||(n[1]=r=>e.form.vendor_setting=r),class:"font-normal",title:e.$t("core__be_is_vendor_feature_on")},null,8,["value","title"]),t(f,{tooltiptext:"absolute z-50 bottom-full mb-2 -ms-2.5"},{content:s(()=>[t(m,{name:"info",w:"20",h:"20",class:"-ms-1 transition-all duration-300 text-primary-500"})]),tooltips:s(()=>[Pe,Ce]),_:1})])]),o("div",$e,[t(d,{class:"ms-2 text-xs",textColor:"text-secondary-400"},{default:s(()=>[l(i(e.$t("core__be_vendor_feature_on_off_desc")),1)]),_:1})]),o("div",we,[o("div",xe,[t(y,{disabled:!e.form.vendor_setting,value:e.form.vendor_checkout_setting,"onUpdate:value":n[2]||(n[2]=r=>e.form.vendor_checkout_setting=r),class:"font-normal",title:e.$t("core__be_is_vendor_checkout_setting_on")},null,8,["disabled","value","title"]),t(f,{tooltiptext:"absolute z-50 bottom-full mb-2 -ms-2.5"},{content:s(()=>[t(m,{name:"info",w:"20",h:"20",class:"-ms-1 transition-all duration-300 text-primary-500"})]),tooltips:s(()=>[Se,qe]),_:1})])]),o("div",De,[t(d,{class:"ms-2 text-xs",textColor:"text-secondary-400"},{default:s(()=>[l(i(e.$t("core__be_vendor_checkout_setting_on_off_desc")),1)]),_:1})])])):h("",!0),e.title==e.settingColumn[1].label?(_(),p("div",Ee,[t(P,{class:"w-full h-auto"},{default:s(()=>[o("div",Be,[o("div",Le,[o("div",Fe,[o("div",Re,[o("div",Ve,[o("div",null,[t(d,{class:"dark:text-white text-secondary-800 font-normal"},{default:s(()=>[l(i(e.$t("fe_lang_refresh_desc")),1)]),_:1})]),o("div",ze,[t(k,{type:"button",onClick:n[3]||(n[3]=r=>e.handleFeLangRefresh()),rounded:"rounded",class:"flex flex-wrap items-center"},{default:s(()=>[t(m,{name:"refresh",class:"me-2 font-semibold"}),t(d,{textColor:"text-white dark:text-secondary-800"},{default:s(()=>[l(i(e.$t("core__be_lang_refresh")),1)]),_:1})]),_:1})])])])])])])]),_:1})])):h("",!0),e.title==e.settingColumn[2].label?(_(),p("div",Te,[o("div",He,[o("div",Ie,[t(d,{class:"text-base"},{default:s(()=>[l(i(e.$t("core__be_subscription_setting")),1)]),_:1})]),t(g,{align:"left",class:"lg:mt-2 mt-1 w-full"},{select:s(()=>[t(v,{placeholder:e.$t("core__be_select_subscription_plan"),selectedValue:e.form.vendor_subscription==""?"":e.ref_subscriptions.subscription_plans.filter(r=>r.id==e.form.vendor_subscription)[0].value},null,8,["placeholder","selectedValue"])]),list:s(()=>[o("div",Me,[o("div",Ne,[(_(!0),p(z,null,H(e.ref_subscriptions.subscription_plans,(r,T)=>(_(),p("div",{key:T,class:"flex py-4 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center",onClick:Ae=>[e.form.vendor_subscription=r.id]},[t(d,{class:I(["ms-2",r.id==e.form.vendor_subscription?" font-bold":""])},{default:s(()=>[l(i(r.value),1)]),_:2},1032,["class"])],8,Ue))),128))])])]),_:1})]),o("div",je,[t(d,{class:"text-base mb-1"},{default:s(()=>[l(i(e.$t("core_be__notic_days")),1)]),_:1}),t(F,{type:"text",ref:"notic_days",value:e.form.notic_days,"onUpdate:value":n[4]||(n[4]=r=>e.form.notic_days=r),placeholder:"core_be__notic_days",onKeyup:n[5]||(n[5]=r=>e.validateEmptyInput("notic_days",e.form.notic_days)),onBlur:n[6]||(n[6]=r=>e.validateEmptyInput("notic_days",e.form.notic_days))},null,8,["value"]),t(S,{textColor:"text-red-500 ",class:"mt-2 block"},{default:s(()=>[l(i(e.errors.notic_days),1)]),_:1}),t(S,{textColor:"text-secondary-400 mt-1"},{default:s(()=>[l(i(e.$t("core_be__notic_days_note")),1)]),_:1})])])):h("",!0),o("div",Je,[t(k,{onClick:n[7]||(n[7]=r=>e.handleCancel()),textSize:"text-base",type:"reset",class:"me-4",colors:"text-primary-500",focus:"",hover:""},{default:s(()=>[l(i(e.$t("core__be_btn_cancel")),1)]),_:1}),t(k,{class:"transition-all duration-300 min-w-3xs",padding:"px-7 py-2",rounded:"rounded",hover:"",focus:""},{default:s(()=>[e.loading?(_(),q(R,{key:0,theme:"border-2 border-t-2 border-text-8 border-t-primary-500",loadingSize:"h-5 w-5"})):h("",!0),e.success?(_(),q(m,{key:1,name:"check",w:"20",h:"20",class:"me-1.5 transition-all duration-300"})):h("",!0),e.success?(_(),q(d,{key:2,class:"transition-all duration-300",textColor:"text-white dark:text-secondaryDark-black"},{default:s(()=>[l(i(e.$t("core__be_btn_saved")),1)]),_:1})):h("",!0),!e.loading&&!e.success?(_(),q(d,{key:3,textColor:"text-white dark:text-secondaryDark-black"},{default:s(()=>[l(i(e.$t("core__be_btn_save")),1)]),_:1})):h("",!0)]),_:1})])]),o("div",Oe,[(_(!0),p(z,null,H(e.settingColumn,r=>(_(),p("div",{key:r.id},[o("div",{onClick:T=>e.changeSection(r),class:I([e.title==r.label?"border-l border-s-primary-500":"border-l border-s-secondary-300","px-2 py-3 cursor-pointer"])},[t(d,{textColor:e.title==r.label?"text-primary-500 dark:text-primary-500":"text-secondary-800 dark:text-white"},{default:s(()=>[l(i(e.$t(r.label)),1)]),_:2},1032,["textColor"])],10,Ke)]))),128))])])],32)])]),_:1}),t(V,{ref:"ps_loading_circle_dialog"},null,512),t(c,{ref:"ps_success_dialog"},null,512)]),_:1})],64)}var Bt=ce(_e,[["render",Ze]]);export{Bt as default};
