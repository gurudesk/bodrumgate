import{aJ as w,bC as v,d as g,i as _,o as f,c as x,a as o,b as t,w as s,q as a,t as r,m as y,f as P,g as V,F as C,O as A,r as n,E as k}from"./app.0e502cc5.js";import{P as $}from"./PsValueStore.a232cbb1.js";import{P as N}from"./ps_constants.0e2a11f9.js";import S from"./PsLabel.3cf95094.js";import L from"./PsLabelHeader3.7f8e1b17.js";import D from"./PsLabelHeader6.d6849b88.js";import I from"./PsButton.bc5ed803.js";import{P as B}from"./PsUtils.78b0d4de.js";import{_ as E}from"./plugin-vue_export-helper.21dcd24c.js";const O=w(()=>v(()=>import("./VendorApplicationModal.e88cf736.js"),["assets/VendorApplicationModal.e88cf736.js","assets/app.0e502cc5.js","assets/app.aef5a90c.css","assets/AppInfoStore.266a6525.js","assets/PsApiService.98e573c3.js","assets/PsObject.a17ef38f.js","assets/DefaultPhoto.cc755f93.js","assets/PsValueStore.a232cbb1.js","assets/ps_constants.0e2a11f9.js","assets/UserStore.ecd89ebd.js","assets/User.0c3ba1a8.js","assets/RatingDetail.291ad5d1.js","assets/ProductRelation.0b376978.js","assets/PsSepetetedStore.9a31ac47.js","assets/UserListParameterHolder.d110b747.js","assets/ApiStatus.5720ba0b.js","assets/VendorStore.41422017.js","assets/Vendor.d946ee87.js","assets/ItemCurrencyStore.9dfb59f8.js","assets/ItemCurrency.91c8ce91.js","assets/PsModal.20834757.js","assets/PsModal.d437d3a8.css","assets/vue-neat-modal.d03c5dee.js","assets/vue-neat-modal.29af7d11.css","assets/PsLine.4597488d.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/PsIcon.dc31c2db.js","assets/PsLabel.3cf95094.js","assets/PsButton.bc5ed803.js","assets/PsInput.e5044849.js","assets/PsTextarea.96959cd1.js","assets/PsFileUpload.23d0c532.js","assets/PsLoadingDialog.e4058754.js","assets/PsLabelTitle.41617619.js","assets/PsDropdown.f31a931d.js","assets/PsDropdownSelect.8d0bad23.js","assets/PsDropdownSelect.4888174d.css","assets/PsUtils.78b0d4de.js"])),U=g({name:"DashboardHowItWorksCard",components:{PsLabel:S,PsLabelHeader3:L,PsLabelHeader6:D,PsButton:I,VendorApplicationModal:O},setup(){const e=_(),d=$().getLoginUserId(),c=_(!1);async function i(){d&&d!=N.NO_LOGIN_USER?(c.value=!0,await B.waitingComponent(e),e.value.openModal()):A.get(route("login"))}return{vendor_application_modal:e,addNewVendor:i,showVendorApplicationModal:c}}}),M={class:"mt-5 w-full mb-10"},H={class:"border rounded-lg mx-auto py-0 mb-5 sm:mb-10 bg-feAchromatic-50 dark:bg-feAchromatic-800"},j={class:"w-full h-full flex flex-wrap sm:flex-none"},z={class:"w-full h-full sm:w-full md:w-1/2 lg:w-1/2"},F={class:"flex flex-col mt-12 pl-8 pr-3"},R={class:"w-full h-full sm:w-full md:w-1/2 lg:w-1/2 bg-fePrimary-300"},T={class:"h-full w-full mx-auto flex justify-center items-center"},q={alt:"",class:"w-full h-80 object-contain"};function G(e,l,d,c,i,J){const m=n("ps-label"),p=n("ps-label-header6"),u=n("ps-button"),b=n("vendor-application-modal"),h=k("lazy");return f(),x(C,null,[o("div",M,[o("div",H,[o("div",j,[o("div",z,[o("div",F,[t(m,{class:"text-sm",textColor:"text-fePrimary-500"},{default:s(()=>[a(r(e.$t("core__fe_empower_bussiness")),1)]),_:1}),t(p,{class:"text-xl font-semibold tracking-wide mt-2 mb-3",textColor:"text-feAchromatic-700 dark:text-feAchromatic-50"},{default:s(()=>[a(r(e.$t("core__fe_dashboard_become_vendor")),1)]),_:1}),t(m,{class:"text-feAchromatic-400 text-md mt-2 dark:text-feSecondary-50"},{default:s(()=>[a(r(e.$t("core__fe_dashboard_vendor_text")),1)]),_:1}),t(u,{class:"w-48 flex flex-row mt-5",padding:"p-2 sm:px-4 sm:py-2",shadow:"shadow-sm",rounded:"rounded",hover:"",focus:"",border:"border border-feSecondary-200 dark:border-feSecondary-800",onClick:l[0]||(l[0]=W=>e.addNewVendor()),colors:"bg-fePrimary-500 text-feAchromatic-100 mb-10"},{default:s(()=>[a(r(e.$t("core__fe_button_become_a_vendor")),1)]),_:1})])]),o("div",R,[o("div",T,[y(o("img",q,null,512),[[h,{src:e.$page.props.sysImageUrl+"/vendorAnnouncement.png"}]])])])])])]),e.showVendorApplicationModal?(f(),P(b,{key:0,ref:"vendor_application_modal"},null,512)):V("",!0)],64)}var ae=E(U,[["render",G]]);export{ae as default};