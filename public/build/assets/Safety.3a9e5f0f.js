import{Z as _,o as p,c as s,b as o,w as a,a as u,q as d,t as f,g as b,F as y,r as m}from"./app.0e502cc5.js";import S from"./PsContentContainer.26532414.js";import x from"./PsLabelTitle.41617619.js";import V from"./PsLabel.3cf95094.js";import{u as g}from"./AboutUsStore.6b1b061c.js";import U from"./PsFrontendLayout.64b287f7.js";import{P as L}from"./PsValueStore.a232cbb1.js";import{_ as P}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsApiService.98e573c3.js";import"./PsObject.a17ef38f.js";import"./DefaultPhoto.cc755f93.js";import"./PsSepetetedStore.9a31ac47.js";import"./FooterView.1e68f849.js";import"./FooterLinkSection.714178c6.js";import"./PsLink.555685fa.js";import"./PsRouteLink.8f7df026.js";import"./PsLabelCaption.a33ce9c4.js";import"./PsIcon.dc31c2db.js";import"./ProductParameterHolder.4354be0b.js";import"./ps_constants.0e2a11f9.js";import"./AppInfoStore.266a6525.js";import"./CustomFieldStore.b038b00e.js";import"./PsStore.f4ecabdb.js";import"./PsNavTabBar.634541ec.js";import"./PsDropdown.f31a931d.js";import"./PsDropdownSelect.8d0bad23.js";import"./PsIconToggle.5f73bff4.js";import"./PsInputWithLeftIcon.ae1f5479.js";import"./ItemLocationTownshipStore.d4fe0c18.js";import"./ItemLocation.d1b92a80.js";import"./LocationParameterHolder.a5eab253.js";import"./PsUtils.78b0d4de.js";import"./AppInfoParameterHolder.e24d894d.js";import"./PsNavBar.0669b7b7.js";import"./UserStore.ecd89ebd.js";import"./User.0c3ba1a8.js";import"./RatingDetail.291ad5d1.js";import"./ProductRelation.0b376978.js";import"./UserListParameterHolder.d110b747.js";import"./ApiStatus.5720ba0b.js";import"./index.esm.159b9749.js";import"./auth.esm.925cebae.js";import"./UserUnReadMessageParameterHolder.181142c1.js";import"./AddToCartStore.3ffc08d4.js";import"./PsLine.4597488d.js";import"./PsButton.bc5ed803.js";import"./PsNotificationBox.8f065d5d.js";import"./ProductStore.279e879d.js";import"./Phone.45f97258.js";import"./Product.29c94914.js";import"./Category.7c65464b.js";import"./DefaultIcon.e76b39a5.js";import"./SubCategory.1b4176e0.js";import"./ItemCurrency.91c8ce91.js";import"./Vendor.d946ee87.js";import"./UserDeleteItemParameterHolder.5d816aba.js";import"./NotificationStore.656ac75f.js";import"./NotiUnRegisterHolder.eefb692e.js";import"https://unpkg.com/delayed-scroll-restoration-polyfill@0.1.1/index.js";const C={name:"SafetyView",components:{PsContentContainer:S,PsLabelTitle:x,PsLabel:V,Head:_},layout:U,setup(r){const e=g(),t=L().getLoginUserId();return e.loadAboutUs(t),{aboutUsStore:e}}},H={class:"sm:mt-32 lg:mt-36 mt-28 mb-16"},T={key:0,class:"mt-4"};function h(r,e,n,t,k,N){const l=m("Head"),i=m("ps-label"),c=m("ps-content-container");return p(),s(y,null,[o(l,{title:r.$t("safety__safety_tips")},null,8,["title"]),o(c,null,{content:a(()=>[u("div",H,[o(i,{class:"text-center font-semibold text-2xl sm:text-3xl"},{default:a(()=>[d(f(r.$t("safety__safety_tips")),1)]),_:1}),t.aboutUsStore.aboutus.data!=null?(p(),s("p",T,[o(i,{class:"ck-content",innerHTML:t.aboutUsStore.aboutus.data.safetyTips},null,8,["innerHTML"])])):b("",!0)])]),_:1})],64)}var At=P(C,[["render",h]]);export{At as default};
