import{d as N,Z as U,H as M,i as p,y as I,I as E,B as _,o as f,c as h,b as r,w as a,q as l,t as c,a as w,F as L,s as T,f as J,g as P,r as t}from"./app.0e502cc5.js";import{S as q,P as Z}from"./PsVendorLayout.6fffe38e.js";import{P as A}from"./PsBreadcrumb2.ad6b6d6d.js";import{P as G}from"./PsDangerDialog.195b6d73.js";import{P as K}from"./PsButton.ed5c0dad.js";import Q from"./VendorDetailVendorInfo.24a9077b.js";import R from"./VendorDetailSubscriptionNotification.6213c3b1.js";import W from"./VendorDetailStoreBranches.7b423885.js";import{P as X}from"./PsLabel.6d5b1b0c.js";import{P as Y}from"./PsLoadingCircleDialog.65ae0069.js";import{P as ee}from"./PsSuccessDialog.9e44e7fb.js";import{P as oe}from"./PsIcon.8dbf90d4.js";import{_ as re}from"./plugin-vue_export-helper.21dcd24c.js";import"./TitleBar.015ef081.js";import"./PsDropdown.a0b3bb4c.js";import"./PsDropdownSelect.063a4178.js";import"./PsToggle.1bec2c80.js";import"./toggle.284f64a6.js";import"./PsWarningDialog.db1ec62c.js";import"./PsModal.0f9f6579.js";import"./vue-neat-modal.d03c5dee.js";import"./index.esm.159b9749.js";import"./auth.esm.925cebae.js";import"./Icons.c01eddd9.js";import"./SidebarMenu.f29b87a4.js";import"./SidebarMenuItem.15e6d48b.js";import"./SidebarSubTab.31b29583.js";import"./PsErrorDialog.3227ce3c.js";import"./PsInputWithRightIcon.c0b01b6c.js";import"./PsIcon1.3db40a94.js";import"./PsInput.6fad3d25.js";import"./PsTextarea.51895c08.js";import"./PsImageUpload2.872ef651.js";import"./DatePicker.f67cbc2b.js";import"./main.1827f372.js";import"./index.edd1d404.js";import"./CheckBox.f17a8ffe.js";import"./PsRadioValue.c2353e7c.js";import"./PsLabelCaption.3e68d19d.js";import"./psApiService.dcb4bcd2.js";import"./moment.9709ab41.js";import"./PsImageUpload.b7aa8768.js";import"./PsLabelTitle3.7f097e1a.js";import"./PsDraggable.2eac7eeb.js";import"./PsLoading.0f9a761a.js";const te=N({name:"Index",components:{Head:U,PsBreadcrumb2:A,PsLabelHeader6:G,PsButton:K,VendorDetailVendorInfo:Q,VendorDetailStoreBranches:W,VendorDetailSubscriptionNotification:R,PsLabel:X,PsSuccessDialog:ee,PsLoadingCircleDialog:Y,PsIcon:oe,SetDefaultVendorCurrencyModal:q},layout:Z,props:{storeCan:Object,errors:Object,vendor:Object,coreFieldFilterSettings:Object,branchesCoreFieldFilterSettings:Object,customizeHeaders:Object,customizeDetails:Object,validation:Object,authUser:Object},setup(e){var B,S,k;let o=M({id:e.vendor.id,name:e.vendor.name,email:e.vendor.email,phone:e.vendor.phone,address:e.vendor.address,description:e.vendor.description,website:e.vendor.website,facebook:e.vendor.facebook,instagram:e.vendor.instagram,logo:(B=e.vendor.logo)==null?void 0:B.img_path,banner_1:(S=e.vendor.banner_1)==null?void 0:S.img_path,banner_2:(k=e.vendor.banner_2)==null?void 0:k.img_path,vendor_relation:{},vendorBranches:e.vendor.vendorBranches,_method:"put"});const n=p(0),s=p(!0),D=p(!0),m=I({data:[]}),u=p(),y=p(),$=p(),d={id:"",vendor_id:"",name:"",email:"",phone:"",address:"",description:"",added_user_id:"",added_date_str:"",is_empty_object:1};E(()=>e.vendor,(v,i)=>{var C,j,O;s.value=!1,g(),o.name=e.vendor.name,o.id=e.vendor.id,o.phone=e.vendor.phone,o.address=e.vendor.address,o.description=e.vendor.description,o.website=e.vendor.website,o.facebook=e.vendor.facebook,o.instagram=e.vendor.instagram,o.logo=(C=e.vendor.logo)==null?void 0:C.img_path,o.banner_1=(j=e.vendor.banner_1)==null?void 0:j.img_path,o.banner_2=(O=e.vendor.banner_2)==null?void 0:O.img_path,e.vendor.currency_id==""||e.vendor.currency_id==null,setTimeout(()=>{s.value=!0},200),e.customizeHeaders.map((H,me)=>{e.vendor.vendor_relation.map(z=>{if(H.core_keys_id===z.core_keys_id){let V=z.value;o.vendor_relation[H.core_keys_id]=V==="1"?!0:V==="0"?!1:V}})})}),g();function g(){e.vendor.vendorBranches.length==1&&e.vendor.vendorBranches[0].is_empty_object=="1"?(n.value=0,m.data=[],o.vendorBranches=[]):(n.value=e.vendor.vendorBranches.length,m.data=e.vendor.vendorBranches,o.vendorBranches=e.vendor.vendorBranches)}function F(v){n.value=n.value-1,m.data.splice(v,1)}function b(){n.value=n.value+1,m.data.push(JSON.parse(JSON.stringify(d)))}function x(v){o.vendorBranches=m.data,this.$inertia.post(route("vendor_info.update",v),o,{forceFormData:!0,onBefore:()=>{u.value.openModal(_("core_vendor__update_vendor_title"),_("core_vendor__update_vendor_note"))},onSuccess:()=>{u.value.closeModal(),y.value.openModal(_("core_vendor__update_vendor_success"),_("core_vendor__update_vendor_success_message"),_("core__vendor_btn_ok"),()=>{},!1)},onError:()=>{u.value.closeModal()}})}return{form:o,showNoti:D,vendorShow:n,removeVendorBranch:F,addVendorBranch:b,vendorStatus:s,vendorList:m,handleSubmit:x,ps_loading_circle_dialog:u,ps_success_dialog:y,set_default_vendor_currency_modal:$}},computed:{breadcrumb(){return[{label:_("core__vendor_my_store_module")},{label:_("core_vendor__edit_vendor_info"),color:"text-primary-500"}]}},methods:{handleCancel(){this.$inertia.get(route("vendor_info.index"))}},created(){this.customizeHeaders.map((e,o)=>{this.vendor.vendor_relation.map(n=>{if(e.core_keys_id===n.core_keys_id){let s=n.value;this.form.vendor_relation[e.core_keys_id]=s==="1"?!0:s==="0"?!1:s}})})}}),ne={class:"rounded-md border border-secondary-200 px-6 py-8 mb-8"},ae={key:0,class:"rounded-md border border-secondary-200 px-6 py-8 mb-8"},de={class:"mt-6"},se={class:"flex flex-row justify-end space-x-4"},ie={key:1,class:"flex"},le={class:"mb-2.5 flex flex-row justify-end"};function ce(e,o,n,s,D,m){const u=t("Head"),y=t("ps-breadcrumb-2"),$=t("vendor-detail-subscription-notification"),d=t("ps-label"),g=t("vendor-detail-vendor-info"),F=t("vendor-detail-store-branches"),b=t("ps-icon"),x=t("ps-button"),B=t("ps-loading-circle-dialog"),S=t("ps-success-dialog"),k=t("set-default-vendor-currency-modal"),v=t("ps-layout");return f(),h(L,null,[r(u,{title:e.$t("core__vendor_my_store_module")},null,8,["title"]),r(v,null,{default:a(()=>[r(y,{items:e.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),r($,{expiredStatus:e.vendor.expire_status,expiredDate:e.vendor.expired_date},null,8,["expiredStatus","expiredDate"]),r(d,{class:"mb-8 text-xl lg:text-3xl font-semibold"},{default:a(()=>[l(c(e.$t("core_vendor__vendor_info")),1)]),_:1}),w("div",ne,[r(d,{class:"text-xl lg:text-2xl font-semibold"},{default:a(()=>[l(c(e.$t("core_vendor__basic_info")),1)]),_:1}),r(g,{class:"mt-8",validation:e.validation,errors:e.errors,form:e.form,coreFieldFilterSettings:e.coreFieldFilterSettings,customizeHeaders:e.customizeHeaders,authUser:e.authUser,customizeDetails:e.customizeDetails},null,8,["validation","errors","form","coreFieldFilterSettings","customizeHeaders","authUser","customizeDetails"])]),e.vendorStatus&&e.vendorShow>0?(f(),h("div",ae,[r(d,{class:"text-xl lg:text-2xl font-semibold flex flex-col space-y-8"},{default:a(()=>[l(c(e.$t("core_vendor__vendor_branches")),1)]),_:1}),(f(!0),h(L,null,T(e.vendorShow,i=>(f(),h("div",{key:i},[r(F,{class:"mt-8",storeBranches:e.vendorList.data[i-1],authUser:e.authUser,coreFieldFilterSettings:e.branchesCoreFieldFilterSettings},null,8,["storeBranches","authUser","coreFieldFilterSettings"]),w("div",de,[w("div",se,[i==e.vendorShow?(f(),J(d,{key:0,onClick:o[0]||(o[0]=C=>e.addVendorBranch()),class:"flex flex-row text-base cursor-pointer px-4 py-2 border border-primary-500 rounded text-primary-500",textColor:"text-primary-500"},{default:a(()=>[r(b,{name:"plus",class:"me-1"}),l(" "+c(e.$t("core_vendor__add_branch")),1)]),_:1})):P("",!0),r(d,{class:"flex flex-row px-4 py-2 border border-primary-500 rounded text-base cursor-pointer text-primary-500",textColor:"text-primary-500",onClick:C=>e.removeVendorBranch(i-1)},{default:a(()=>[r(b,{name:"minus",class:"me-1"}),l(" "+c(e.$t("core_vendor__remove_branch")),1)]),_:2},1032,["onClick"])])])]))),128))])):P("",!0),e.vendorShow==0?(f(),h("div",ie,[r(d,{onClick:o[1]||(o[1]=i=>e.addVendorBranch()),class:"flex flex-row mb-8 text-base cursor-pointer px-4 py-2 border border-primary-500 rounded text-primary-500",textColor:"text-primary-500"},{default:a(()=>[r(b,{name:"plus",class:"me-1"}),l(" "+c(e.$t("core_vendor__add_branch")),1)]),_:1})])):P("",!0),w("div",le,[r(x,{onClick:o[2]||(o[2]=i=>e.handleCancel()),type:"reset",class:"me-4",colors:"text-primary-500",hover:""},{default:a(()=>[l(c(e.$t("core__vendor_btn_cancel")),1)]),_:1}),r(x,{disabled:!e.storeCan.updateMyVendor,onClick:o[3]||(o[3]=i=>e.handleSubmit(e.vendor.id)),class:"transition-all duration-300 min-w-3xs",padding:"px-7 py-2",rounded:"rounded",hover:"",focus:""},{default:a(()=>[r(d,{textColor:"text-white dark:text-secondaryDark-black"},{default:a(()=>[l(c(e.$t("core__vendor_btn_update")),1)]),_:1})]),_:1},8,["disabled"])]),r(B,{ref:"ps_loading_circle_dialog"},null,512),r(S,{ref:"ps_success_dialog"},null,512),r(k,{ref:"set_default_vendor_currency_modal"},null,512)]),_:1})],64)}var to=re(te,[["render",ce]]);export{to as default};
