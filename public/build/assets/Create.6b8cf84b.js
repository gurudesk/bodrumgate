import{a as se,P as oe}from"./PsLayout.7915dd73.js";import{d as te,Z as ae,i as f,H as Z,j as le,B as y,o as p,c as w,b as o,w as r,a,q as u,t as d,F as K,s as A,n as G,g as b,f as P,r as c}from"./app.0e502cc5.js";import{u as re}from"./Validators.cb85894a.js";import{P as ie}from"./PsInput.6fad3d25.js";import{P as ne}from"./PsInputWithRightIcon.c0b01b6c.js";import{P as de}from"./PsLabel.6d5b1b0c.js";import{P as ue}from"./PsButton.ed5c0dad.js";import{P as _e}from"./PsTextarea.51895c08.js";import{P as ce}from"./PsLabelHeader3.288b0591.js";import{P as me}from"./PsLabelHeader5.f7cab69f.js";import{P as pe}from"./PsLabelCaption.3e68d19d.js";import{P as fe}from"./PsIcon.8dbf90d4.js";import{P as ge}from"./PsLoading.0f9a761a.js";import{P as he}from"./PsBreadcrumb2.ad6b6d6d.js";import{P as be}from"./PsDropdown.a0b3bb4c.js";import{P as ve}from"./PsDropdownSelect.063a4178.js";import{P as ye}from"./PsCheckboxValue.d227357b.js";import{P as we}from"./PsToggle.1bec2c80.js";import{P as ke}from"./PsRadioValue.c2353e7c.js";import{P as Se}from"./PsErrorDialog.3227ce3c.js";import{P as Ce}from"./PsSuccessDialog.9e44e7fb.js";import $e from"./LanguageUpdateModal.ba4e2df5.js";import{P as Pe}from"./PsLoadingCircleDialog.65ae0069.js";import{_ as Ie}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsDangerDialog.195b6d73.js";import"./PsModal.0f9f6579.js";import"./vue-neat-modal.d03c5dee.js";import"./PsWarningDialog.db1ec62c.js";import"./index.esm.159b9749.js";import"./auth.esm.925cebae.js";import"./SidebarMenuItem.15e6d48b.js";import"./SidebarSubTab.31b29583.js";import"./PsBannerIcon.82d105ba.js";import"./PsIcon1.3db40a94.js";import"./Icons.c01eddd9.js";import"./toggle.284f64a6.js";const Le=te({name:"create",components:{Head:ae,PsInput:ie,PsLabel:de,PsButton:ue,PsTextarea:_e,PsLabelHeader3:ce,PsLabelCaption:pe,PsIcon:fe,PsLoading:ge,PsBreadcrumb2:he,PsDropdown:be,PsDropdownSelect:ve,PsCheckboxValue:ye,PsToggle:we,PsRadioValue:ke,PsConfirmDialog:se,PsSuccessDialog:Ce,PsErrorDialog:Se,LanguageUpdateModal:$e,PsLoadingCircleDialog:Pe,PsInputWithRightIcon:ne,PsLabelHeader5:me},layout:oe,props:["languages","errors","status","selectedClientTable","uiTypes","categories"],setup(e){const s=f(!1),N=f(!1),B=f(),W=f(),F=f(),g=f(),h=f(),S=f(),_=f(!1),I=f(""),L=f(""),T=f(!1),E=f(!1),k=f(!1),C=f(!1),M=f("");let n=Z({table_id:e.selectedClientTable.id,name:"",ordering:"",is_show_sorting:"",is_show_in_filter:"",placeholder:"",ui_type_id:"",is_core_field:"",mandatory:"0",is_show:"",is_include_in_hideshow:"",category_id:"",name_str:"",placeholder_str:""});const{isEmpty:D,minLength:j}=re(),H=(l,i)=>{e.errors[l]=i?j(l,i,3):D(l,i)},O=(l,i)=>{e.errors[l]=i?"":D(l,i)},q=l=>{let i=l.keyCode?l.keyCode:l.which;(i<48||i>57)&&l.preventDefault()};function U(){n.is_include_in_hideshow==0?n.is_include_in_hideshow=1:(n.is_include_in_hideshow=0,n.is_show=0,n.is_show_in_filter=0)}function z(){n.is_show==0?n.is_show=1:n.is_show=0}function R(){n.is_show_sorting==0?n.is_show_sorting=1:n.is_show_sorting=0}function t(){n.is_show_in_filter==0?n.is_show_in_filter=1:n.is_show_in_filter=0}function V(){var i,m;let l=!0;if(n.ui_type_id==""&&(T.value=!0,l=!1),(n.ordering==""||isNaN(n.ordering))&&(E.value=!0,l=!1),g.value.form.values.length==0)k.value=!0,l=!1;else{let v=!1;for(let $=0;$<g.value.form.values.length;$++)if(((i=g.value.form.values[$])==null?void 0:i.value.length)!==0){v=!0;break}v||(k.value=!0,l=!1)}if(h.value.form.values.length==0)C.value=!0,l=!1;else{let v=!1;for(let $=0;$<h.value.form.values.length;$++)if(((m=h.value.form.values[$])==null?void 0:m.value.length)!==0){v=!0;break}v||(C.value=!0,l=!1)}if(l!=!0){window.scrollTo(0,0);return}n.placeholder_str=L.value,n.name_str=I.value,this.$inertia.post(route("tables.fields.store",[e.selectedClientTable.id]),Z({nameForm:g.value.form,form:n,placeholderForm:h.value.form}),{forceFormData:!0,onBefore:()=>{s.value=!0,_.value=!0,S.value.openModal(y("core__be_custom_creating_title"),y("core__be_custom_creating_message"))},onSuccess:()=>{s.value=!1,N.value=!0,setTimeout(()=>{N.value=!1},2e3)},onError:()=>{s.value=!1}})}function J(){this.submit()}function Q(l="error"){S.value.closeModal(),_.value&&(_.value=!1,F.value.openModal(y("ps_error_dialog__error"),l,y("core__be_btn_ok"),()=>{}))}function X(l){S.value.closeModal(),_.value=!1,B.value.openModal(y("core__be_awesome_title"),l,y("core__be_btn_back_to_list"),()=>{this.$inertia.get(route("tables.fields.index",[this.selectedClientTable.id]),{symbol:localStorage.activeLanguage?localStorage.activeLanguage:"en"})})}function Y(l){g.value.languageStrings.data.length==0&&e.languages.forEach(i=>{let m={};m.language=i,m.key=l,m.value="",m.language_id=i.id,g.value.languageStrings.data.push(m)}),g.value.form.key==""&&(g.value.form.key="_name"),g.value.openModal(l,i=>{k.value=!1;const m=localStorage.activeLanguage?localStorage.activeLanguage:"en";i.values.forEach(v=>{v.symbol==m&&(I.value=v.value)})},!0)}function x(l){h.value.languageStrings.data.length==0&&e.languages.forEach(i=>{let m={};m.language=i,m.key=l,m.value="",m.language_id=i.id,h.value.languageStrings.data.push(m)}),h.value.form.key==""&&(h.value.form.key="_placeholder"),h.value.openModal(l,i=>{C.value=!1;const m=localStorage.activeLanguage?localStorage.activeLanguage:"en";i.values.forEach(v=>{v.symbol==m&&(L.value=v.value)})},!0)}function ee(l){E.value=!1;const i=String.fromCharCode(l.keyCode);if(/^[0-9]+$/.test(i))return!0;l.preventDefault()}return le(async()=>{const l=localStorage.activeLanguage?localStorage.activeLanguage:"en";e.languages.forEach(i=>{i.symbol==l&&(M.value=i.name)})}),{ps_success_dialog:B,showdialog:_,activeLanguageName:M,validateNumber:ee,validiteUIType:T,validiteOrdering:E,validitePlaceholder:C,validiteName:k,nameString:I,placeholderString:L,nameLanguageClicked:Y,placeholderLanguageClicked:x,language_update_modal_name:g,language_update_modal_placeholder:h,ps_loading_circle_dialog:S,submit:V,ps_confirm_dialog:W,ps_error_dialog:F,showErrorDialog:Q,showSuccessDialog:X,validateModuleNameInput:H,validateEmptyInput:O,onlyNumber:q,form:n,handleSubmit:J,loading:s,success:N,handleEnableFilter:U,handleHideShow:z,handleIsShowSorting:R,handleIsShowInFilter:t}},computed:{breadcrumb(){return[{label:y("core__be_dashboard_label"),url:route("admin.index")},{label:y("table_setting_group"),url:route("table.index")},{label:y("core__be_custom_fields"),url:route("tables.fields.index",[this.selectedClientTable.id],{symbol:localStorage.activeLanguage?localStorage.activeLanguage:"en"})},{label:y("core__be_create_custom_field_label"),color:"text-primary-500"}]}},methods:{handleCancel(){this.$inertia.get(route("tables.fields.index",[this.selectedClientTable.id]),{symbol:localStorage.activeLanguage?localStorage.activeLanguage:"en"})},handleIsInclude(){this.form.is_include_in_hideshow||(this.form.is_show=0)}},mounted(){this.status&&this.status.flag=="success"&&(sessionStorage.setItem("custom_field_reloading","true"),sessionStorage.setItem("custom_field_flag",this.status.flag),sessionStorage.setItem("custom_field_message",this.status.msg),window.location.reload()),this.status&&this.status.flag=="error"&&this.showErrorDialog(this.status.msg);const e=sessionStorage.getItem("custom_field_flag"),s=sessionStorage.getItem("custom_field_message");e&&e=="success"&&(sessionStorage.removeItem("custom_field_flag"),sessionStorage.removeItem("custom_field_message"),this.showSuccessDialog(s)),this.status.isDupicate&&(console.log(this.status.msg),this.handleSubmit())},beforeUpdate(){this.status&&this.status.flag=="success"&&(sessionStorage.setItem("custom_field_reloading","true"),sessionStorage.setItem("custom_field_flag",this.status.flag),sessionStorage.setItem("custom_field_message",this.status.msg),window.location.reload()),this.status&&this.status.flag=="error"&&this.showErrorDialog(this.status.msg),this.status.isDupicate&&(console.log(this.status.msg),this.handleSubmit())}}),Te={class:"w-full md:w-196 xl:196"},Ee={key:0,class:"mt-8 rounded-lg bg-secondary-50 dark:bg-secondary-900 border border-secondary-200 dark:bprder-secondary-900 shadow-md ps-6 pe-6 md:ps-8 md:pe-24 py-6"},De=a("span",{class:"text-red-500"},"*",-1),Ve={class:"mt-4 md:mt-6 grid grid-cols-3 items-center"},Ne={class:"rounded-md shadow-xs w-56"},Me={class:"pt-2 z-30"},Ue=["onClick"],Be=a("span",{class:"text-red-500"},"*",-1),Fe=a("span",{class:"text-red-500"},"*",-1),je={class:"mt-10"},He={class:"bg-white dark:bg-secondary-900 rounded-lg border border-secondary-200 dark:bprder-secondary-900 shadow-lg"},Oe=a("span",{class:"text-red-500"},"*",-1),qe=a("hr",{class:""},null,-1),ze={class:"py-6 ps-6 pe-6 md:ps-8 md:pe-24 flex flex-col space-y-6"},Re={class:"grid grid-cols-3 items-center"},Ke=a("span",{class:"text-red-500 font-medium ms-1"},"*",-1),We={class:"w-full col-span-2"},Ze={class:"grid grid-cols-3 items-center"},Ae=a("span",{class:"text-red-500 font-medium ms-1"},"*",-1),Ge={class:"w-full col-span-2"},Je={class:"grid grid-cols-3 items-center"},Qe=a("span",{class:"text-red-500 font-medium ms-1"},"*",-1),Xe={class:"rounded-md shadow-xs w-56"},Ye={class:"pt-2 z-30"},xe=["onClick"],es={class:"grid grid-cols-3 items-center"},ss=a("span",{class:"text-red-500 font-medium ms-1"},"*",-1),os={class:"grid grid-cols-3 items-center"},ts=a("span",{class:"text-red-500 font-medium ms-1"},"*",-1),as={class:"mt-6 md:mt-8 bg-white dark:bg-secondary-900 rounded-lg border border-secondary-200 dark:bprder-secondary-900 shadow-lg"},ls=a("span",{class:"text-red-500"},"*",-1),rs=a("hr",{class:""},null,-1),is={class:"py-6 ps-6 pe-6 md:ps-8 md:pe-24 flex flex-col space-y-6"},ns={class:"flex justify-between"},ds={class:"flex justify-between"},us={key:0,class:"flex justify-between"},_s={key:1,class:"flex justify-between"},cs={class:"mt-6 md:mt-8 mb-2.5 flex flex-row justify-end"},ms={key:2,class:"transition-all duration-300",textColor:"text-white"},ps={key:3,class:"",textColor:"text-white"};function fs(e,s,N,B,W,F){const g=c("Head"),h=c("ps-breadcrumb-2"),S=c("ps-label-header-5"),_=c("ps-label"),I=c("ps-dropdown-select"),L=c("ps-dropdown"),T=c("ps-icon"),E=c("ps-input-with-right-icon"),k=c("ps-label-caption"),C=c("ps-radio-value"),M=c("ps-input"),n=c("ps-toggle"),D=c("ps-button"),j=c("ps-loading"),H=c("ps-success-dialog"),O=c("ps-confirm-dialog"),q=c("ps-error-dialog"),U=c("language-update-modal"),z=c("ps-loading-circle-dialog"),R=c("ps-layout");return p(),w(K,null,[o(g,{title:e.$t("core__be_create_custom_field_label")},null,8,["title"]),o(R,null,{default:r(()=>[o(h,{items:e.breadcrumb,class:"mt-4 mb-7"},null,8,["items"]),a("div",Te,[e.selectedClientTable.core_key_type_id==1?(p(),w("div",Ee,[o(S,{textColor:" text-secondary-800 dark:text-secondary-100"},{default:r(()=>[u(d(e.$t("core__be_choose_category_for_custom_field"))+" ",1),De]),_:1}),a("div",Ve,[o(_,{class:"text-base"},{default:r(()=>[u(d(e.$t("core__category_label")),1)]),_:1}),o(L,{align:"left",class:"col-span-2 w-full border-red-500"},{select:r(()=>{var t;return[o(I,{placeholder:e.$t("core_be_select_category"),selectedValue:e.form.category_id==""?e.$t("core__be_general_for_all_category"):(t=e.categories.filter(V=>V.id===e.form.category_id)[0])==null?void 0:t.name},null,8,["placeholder","selectedValue"])]}),list:r(()=>[a("div",Ne,[a("div",Me,[a("div",{class:"w-56 flex py-4 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center",onClick:s[0]||(s[0]=t=>[e.form.category_id=""])},[o(_,{class:"ms-2"},{default:r(()=>[u(d(e.$t("core__be_general_for_all_category")),1)]),_:1})]),(p(!0),w(K,null,A(e.categories,t=>(p(),w("div",{key:t.id,class:"w-56 flex py-4 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center",onClick:V=>[e.form.category_id=t.id]},[o(_,{class:G(["ms-2",t.id==e.form.category_id?" font-bold":""])},{default:r(()=>[u(d(t.name),1)]),_:2},1032,["class"])],8,Ue))),128))])])]),_:1})])])):b("",!0),e.selectedClientTable.core_key_type_id==1?(p(),P(_,{key:1,class:"px-6 mt-4 text-sm md:text-base"},{default:r(()=>[Be,u(d(e.$t("core__be_choose_category_for_custom_field_desc"))+" ",1),Fe]),_:1})):b("",!0),a("div",je,[a("div",null,[a("div",He,[o(S,{textColor:"py-4 ps-6 pe-6 md:ps-8 md:pe-24 text-secondary-800 dark:text-secondary-100"},{default:r(()=>[u(d(e.$t("core_be_field_configuration"))+" ",1),Oe]),_:1}),qe,a("div",ze,[a("div",Re,[o(_,{class:"text-base"},{default:r(()=>[u(d(e.$t("core_custom__name_label")),1),Ke]),_:1}),a("div",We,[o(E,{class:"w-full text-base",disabled:!0,value:e.nameString,"onUpdate:value":s[2]||(s[2]=t=>e.nameString=t),placeholder:e.$t("core_custom__name_placeholder")+" ("+e.activeLanguageName+")"},{icon:r(()=>[o(T,{class:"cursor-pointer",onClick:s[1]||(s[1]=t=>e.nameLanguageClicked(e.form.name)),name:"editPencil"})]),_:1},8,["value","placeholder"])]),e.validiteName?(p(),P(k,{key:0,textColor:"text-red-500 ",class:"col-span-3 mt-2 block"},{default:r(()=>[u(d(e.$t("core__be_name_required")),1)]),_:1})):b("",!0)]),a("div",Ze,[o(_,{class:"text-base"},{default:r(()=>[u(d(e.$t("core_custom__placeholder_label")),1),Ae]),_:1}),a("div",Ge,[o(E,{class:"w-full text-base",disabled:!0,value:e.placeholderString,"onUpdate:value":s[4]||(s[4]=t=>e.placeholderString=t),placeholder:e.$t("core_custom__placeholder_placeholder")+" ("+e.activeLanguageName+")"},{icon:r(()=>[o(T,{class:"cursor-pointer",onClick:s[3]||(s[3]=t=>e.placeholderLanguageClicked(e.form.name)),name:"editPencil"})]),_:1},8,["value","placeholder"])]),e.validitePlaceholder?(p(),P(k,{key:0,textColor:"text-red-500 ",class:"col-span-3 mt-2 block"},{default:r(()=>[u(d(e.$t("core__be_placeholder_required")),1)]),_:1})):b("",!0)]),a("div",Je,[o(_,{class:"text-base"},{default:r(()=>[u(d(e.$t("core_custom__ui_type_label")),1),Qe]),_:1}),o(L,{align:"left",class:"col-span-2 w-full"},{select:r(()=>[o(I,{placeholder:e.$t("core_custom__select_ui_type_label"),selectedValue:e.form.ui_type_id==""?"":e.uiTypes.filter(t=>t.core_keys_id===e.form.ui_type_id)[0].name,onChange:s[5]||(s[5]=t=>e.validateEmptyInput("ui_type_id",e.form.ui_type_id)),onBlur:s[6]||(s[6]=t=>e.validateEmptyInput("ui_type_id",e.form.ui_type_id))},null,8,["placeholder","selectedValue"])]),list:r(()=>[a("div",Xe,[a("div",Ye,[a("div",{class:"w-56 flex py-4 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center",onClick:s[7]||(s[7]=t=>[e.form.ui_type_id="",e.validateEmptyInput("ui_type_id",e.form.ui_type_id)])},[o(_,{class:"text-gray-200"},{default:r(()=>[u(d(e.$t("core_custom__select_ui_type_label")),1)]),_:1})]),(p(!0),w(K,null,A(e.uiTypes,t=>(p(),w("div",{key:t.core_keys_id,class:"w-56 flex py-4 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center",onClick:V=>[e.validiteUIType=!1,e.form.ui_type_id=t.core_keys_id,e.validateEmptyInput("ui_type_id",e.form.ui_type_id)]},[o(_,{class:G(["ms-2",t.core_keys_id==e.form.ui_type_id?" font-bold":""])},{default:r(()=>[u(d(t.name),1)]),_:2},1032,["class"])],8,xe))),128))])])]),_:1}),e.validiteUIType?(p(),P(k,{key:0,textColor:"text-red-500 ",class:"col-span-3 mt-2 block"},{default:r(()=>[u(d(e.$t("core__be_ui_type_is_required")),1)]),_:1})):b("",!0)]),a("div",es,[o(_,{class:"text-base"},{default:r(()=>[u(d(e.$t("core__custom_type_of_conditions_label")),1),ss]),_:1}),o(C,{class:"",value:e.form.mandatory,"onUpdate:value":s[8]||(s[8]=t=>e.form.mandatory=t),title:"1",title_label:e.$t("core__custom_mandatory_label")},null,8,["value","title_label"]),o(C,{value:e.form.mandatory,"onUpdate:value":s[9]||(s[9]=t=>e.form.mandatory=t),title:"0",title_label:e.$t("core__custom_optional_label")},null,8,["value","title_label"])]),a("div",os,[o(_,{class:"text-base"},{default:r(()=>[u(d(e.$t("core__custom_column_order_label")),1),ts]),_:1}),o(M,{class:"col-span-2",type:"number",value:e.form.ordering,"onUpdate:value":s[10]||(s[10]=t=>e.form.ordering=t),valueModifiers:{number:!0},placeholder:e.$t("column_order_placeholder"),onKeypress:s[11]||(s[11]=t=>e.validateNumber(t))},null,8,["value","placeholder"]),e.validiteOrdering?(p(),P(k,{key:0,textColor:"text-red-500 ",class:"col-span-3 mt-2 block"},{default:r(()=>[u(d(e.$t("core__be_ordering_required")),1)]),_:1})):b("",!0)])])]),a("div",as,[o(S,{textColor:"py-4 ps-6 pe-6 md:ps-8 md:pe-24 text-secondary-800 dark:text-secondary-100"},{default:r(()=>[u(d(e.$t("core__custom_display_setting_label"))+" ",1),ls]),_:1}),rs,a("div",is,[a("div",ns,[o(_,{class:"text-base"},{default:r(()=>[u(d(e.$t("core__custom_enable_sorting_this_field")),1)]),_:1}),o(n,{selectedValue:e.form.is_show_sorting==1,onClick:s[12]||(s[12]=t=>e.handleIsShowSorting()),toggleOnTheme:"bg-primary-500 border-primary-500 "},null,8,["selectedValue"])]),a("div",ds,[o(_,{class:"text-base"},{default:r(()=>[u(d(e.$t("core__custom_enable_shown_in_table_for_field_label")),1)]),_:1}),o(n,{selectedValue:e.form.is_include_in_hideshow==1,onClick:s[13]||(s[13]=t=>e.handleEnableFilter()),toggleOnTheme:"bg-primary-500 border-primary-500 "},null,8,["selectedValue"])]),e.form.is_include_in_hideshow?(p(),w("div",us,[o(_,{class:"text-base"},{default:r(()=>[u(d(e.$t("core__custom_enable_shown_in_table_label")),1)]),_:1}),o(n,{selectedValue:e.form.is_show==1,disabled:e.form.is_include_in_hideshow==0,onClick:s[14]||(s[14]=t=>e.handleHideShow()),toggleOnTheme:"bg-primary-500 border-primary-500 "},null,8,["selectedValue","disabled"])])):b("",!0),e.form.is_include_in_hideshow?(p(),w("div",_s,[o(_,{class:"text-base"},{default:r(()=>[u(d(e.$t("core__custom_is_show_in_filter_label")),1)]),_:1}),o(n,{selectedValue:e.form.is_show_in_filter==1,disabled:e.form.is_include_in_hideshow==0,onClick:s[15]||(s[15]=t=>e.handleIsShowInFilter()),toggleOnTheme:"bg-primary-500 border-primary-500 "},null,8,["selectedValue","disabled"])])):b("",!0)])]),a("div",cs,[o(D,{onClick:s[16]||(s[16]=t=>e.handleCancel()),textSize:"text-base",type:"reset",class:"me-4",colors:"text-primary-500",focus:"",hover:""},{default:r(()=>[u(d(e.$t("core__be_btn_cancel")),1)]),_:1}),o(D,{onClick:s[17]||(s[17]=t=>e.handleSubmit()),class:"transition-all duration-300 min-w-3xs",padding:"px-8.5 py-2.5",rounded:"rounded",hover:"",focus:""},{default:r(()=>[e.loading?(p(),P(j,{key:0,theme:"me-2 border-2 border-t-2 border-text-8 border-t-primary-500",loadingSize:"h-5 w-5"})):b("",!0),e.success?(p(),P(T,{key:1,name:"check",class:"me-1.5 transition-all duration-300"})):b("",!0),e.success?(p(),w("span",ms,d(e.$t("core__be_btn_saved")),1)):b("",!0),!e.loading&&!e.success?(p(),w("span",ps,d(e.$t("core__be_btn_save")),1)):b("",!0)]),_:1})])])])]),o(H,{ref:"ps_success_dialog"},null,512),o(O,{ref:"ps_confirm_dialog"},null,512),o(q,{ref:"ps_error_dialog"},null,512),o(U,{ref:"language_update_modal_name"},null,512),o(U,{ref:"language_update_modal_placeholder"},null,512),o(z,{ref:"ps_loading_circle_dialog"},null,512)]),_:1})],64)}var Ys=Ie(Le,[["render",fs]]);export{Ys as default};
