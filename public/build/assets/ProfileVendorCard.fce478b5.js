import d from"./PsLabel.3cf95094.js";import _ from"./PsLabelHeader3.7f8e1b17.js";import f from"./PsLabelHeader6.d6849b88.js";import u from"./PsButton.bc5ed803.js";import v from"./VendorApplicationModal.e88cf736.js";import{_ as h}from"./plugin-vue_export-helper.21dcd24c.js";import{d as b,i as g,o as w,c as x,a as o,m as $,b as r,w as i,q as n,t as a,F as V,r as s,E as k}from"./app.0e502cc5.js";import"./AppInfoStore.266a6525.js";import"./PsApiService.98e573c3.js";import"./PsObject.a17ef38f.js";import"./DefaultPhoto.cc755f93.js";import"./PsValueStore.a232cbb1.js";import"./ps_constants.0e2a11f9.js";import"./UserStore.ecd89ebd.js";import"./User.0c3ba1a8.js";import"./RatingDetail.291ad5d1.js";import"./ProductRelation.0b376978.js";import"./PsSepetetedStore.9a31ac47.js";import"./UserListParameterHolder.d110b747.js";import"./ApiStatus.5720ba0b.js";import"./VendorStore.41422017.js";import"./Vendor.d946ee87.js";import"./ItemCurrencyStore.9dfb59f8.js";import"./ItemCurrency.91c8ce91.js";import"./PsModal.20834757.js";import"./vue-neat-modal.d03c5dee.js";import"./PsLine.4597488d.js";import"./PsIcon.dc31c2db.js";import"./PsInput.e5044849.js";import"./PsTextarea.96959cd1.js";import"./PsFileUpload.23d0c532.js";import"./PsLoadingDialog.e4058754.js";import"./PsLabelTitle.41617619.js";import"./PsDropdown.f31a931d.js";import"./PsDropdownSelect.8d0bad23.js";import"./PsUtils.78b0d4de.js";const y=b({name:"DashboardHowItWorksCard",components:{PsLabel:d,PsLabelHeader3:_,PsLabelHeader6:f,PsButton:u,VendorApplicationModal:v},setup(){const t=g();function e(){t.value.openModal()}return{vendor_application_modal:t,addNewVendor:e}}}),C={class:"w-full"},A={class:"w-full bg-feWarning-100 rounded-lg mx-auto py-0 p-3 mb-4 dark:bg-feWarning-700"},N={class:"w-full grid grid-cols-4 p-5"},P={class:"w-full h-full flex justify-center items-center col-span-4 md:col-span-1 lg:col-span-1"},B={alt:"",class:"w-36 object-contain"},D={class:"w-full col-span-4 md:col-span-3 lg:col-span-3"},H={class:"space-y-2 flex flex-col items-center md:items-start pt-3"},L={class:"text-feAchromatic-500 whitespace-wrap text-center md:text-left dark:text-feAchromatic-200"},W={class:"mt-4"};function j(t,e,z,E,F,I){const p=s("ps-label-header6"),l=s("ps-button"),m=s("vendor-application-modal"),c=k("lazy");return w(),x(V,null,[o("div",C,[o("div",A,[o("div",N,[o("div",P,[$(o("img",B,null,512),[[c,{src:t.$page.props.sysImageUrl+"/VendorAnnouement-2.png"}]])]),o("div",D,[o("div",H,[r(p,{textColor:"text-feAchromatic-800 dark:text-feAchromatic-100"},{default:i(()=>[n(a(t.$t("core__fe_profile_vendor_header")),1)]),_:1}),o("span",L,a(t.$t("core__fe_profile_vendor_text")),1),o("div",W,[r(l,{onClick:e[0]||(e[0]=M=>t.addNewVendor())},{default:i(()=>[n(a(t.$t("core__fe_button_become_a_vendor")),1)]),_:1})])])])])])]),r(m,{ref:"vendor_application_modal"},null,512)],64)}var ko=h(y,[["render",j]]);export{ko as default};