import{i as u,j as f,B as g,o as b,f as h,w as I,a as t,b as n,r as i}from"./app.0e502cc5.js";import P from"./PsContentContainer.26532414.js";import U from"./PsFrontendLayout.64b287f7.js";import v from"./PsBreadcrumb2.00bc7c75.js";import S from"./OtherUserProfileInfoCard.9cb5364d.js";import w from"./ProfileLatestItemGrid.58250cf1.js";import x from"./OtherUserActionSection.46b32ea0.js";import{u as y,U as V}from"./UserStore.ecd89ebd.js";import{P as B}from"./PsValueStore.a232cbb1.js";import{_ as C}from"./plugin-vue_export-helper.21dcd24c.js";import"./FooterView.1e68f849.js";import"./FooterLinkSection.714178c6.js";import"./PsLabel.3cf95094.js";import"./PsLink.555685fa.js";import"./PsRouteLink.8f7df026.js";import"./PsLabelCaption.a33ce9c4.js";import"./PsIcon.dc31c2db.js";import"./ProductParameterHolder.4354be0b.js";import"./ps_constants.0e2a11f9.js";import"./AppInfoStore.266a6525.js";import"./PsApiService.98e573c3.js";import"./PsObject.a17ef38f.js";import"./DefaultPhoto.cc755f93.js";import"./CustomFieldStore.b038b00e.js";import"./PsStore.f4ecabdb.js";import"./PsSepetetedStore.9a31ac47.js";import"./PsNavTabBar.634541ec.js";import"./PsDropdown.f31a931d.js";import"./PsDropdownSelect.8d0bad23.js";import"./PsIconToggle.5f73bff4.js";import"./PsInputWithLeftIcon.ae1f5479.js";import"./ItemLocationTownshipStore.d4fe0c18.js";import"./ItemLocation.d1b92a80.js";import"./LocationParameterHolder.a5eab253.js";import"./PsUtils.78b0d4de.js";import"./AppInfoParameterHolder.e24d894d.js";import"./PsNavBar.0669b7b7.js";import"./index.esm.159b9749.js";import"./auth.esm.925cebae.js";import"./UserUnReadMessageParameterHolder.181142c1.js";import"./AddToCartStore.3ffc08d4.js";import"./ApiStatus.5720ba0b.js";import"./PsLine.4597488d.js";import"./PsButton.bc5ed803.js";import"./User.0c3ba1a8.js";import"./RatingDetail.291ad5d1.js";import"./ProductRelation.0b376978.js";import"./UserListParameterHolder.d110b747.js";import"./PsNotificationBox.8f065d5d.js";import"./ProductStore.279e879d.js";import"./Phone.45f97258.js";import"./Product.29c94914.js";import"./Category.7c65464b.js";import"./DefaultIcon.e76b39a5.js";import"./SubCategory.1b4176e0.js";import"./ItemCurrency.91c8ce91.js";import"./Vendor.d946ee87.js";import"./UserDeleteItemParameterHolder.5d816aba.js";import"./NotificationStore.656ac75f.js";import"./NotiUnRegisterHolder.eefb692e.js";import"https://unpkg.com/delayed-scroll-restoration-polyfill@0.1.1/index.js";import"./moment.9709ab41.js";import"./PsCard.ba2c0a4b.js";import"./RatingShow.a9e8b6e2.js";import"./PsLabelHeader4.fc9d9bf1.js";import"./PsAdSense.d6d1ce67.js";import"./ItemHorizontalItem.9fe729d0.js";import"./PsLabelTitle4.438736dc.js";import"./format.min.502eec0f.js";import"./PsLazyImage.38e4a2ae.js";import"./PsValueHolder.a0cf6b69.js";import"./FavouriteItemStore.46fa4312.js";import"./FollowItemParameterHolder.5bc5189c.js";import"./ItemHorizontalSkeletorItem.d3fa3697.js";import"./vue-skeletor.esm.de6e6d28.js";/* empty css                     */import"./PsLoadingDialog.e4058754.js";import"./PsModal.20834757.js";import"./vue-neat-modal.d03c5dee.js";import"./PsLabelTitle.41617619.js";import"./PsConfirmDialog.cd272747.js";import"./UserFollowHolder.8b598f9e.js";import"./UserBlockParameterHolder.5aa06675.js";const L={name:"OtherProfileView",components:{PsBreadcrumb2:v,PsContentContainer:P,ProfileCard:S,LatestItemListing:w,OtherUserActionSection:x},layout:U,props:["query"],setup(c){var p,s;const a=(s=(p=c.query)==null?void 0:p.userId)==null?void 0:s.toString(),o=B().getLoginUserId(),r=y("other"),m=new V().getOtherUserData();m.loginUserId=o,m.id=a;let e=u([]);return f(async()=>{await r.loadOtherUser(o,m),e.value=[{label:g("fe__other_profile"),url:route("fe_profile")},{label:r.user.data?r.user.data.userName:"",color:"text-fePrimary-500"}]}),{userStore:r,userId:a,breadcrumb:e}}},O={class:"mt-32 mb-10"},N={class:"xl:mb-7 lg:mb-11 sm:mb-7 mb-9"},k={class:"grid lg:grid-cols-12 sm:grid-cols-8 grid-cols-4 gap-4 sm:gap-3.5 lg:gap-4"},q={class:"w-full col-span-4 sm:col-span-2 lg:col-span-3 mt-2"};function H(c,a,l,o,r,m){const e=i("ps-breadcrumb-2"),p=i("profile-card"),s=i("other-user-action-section"),d=i("latest-item-listing"),_=i("ps-content-container");return b(),h(_,null,{content:I(()=>[t("div",O,[t("div",N,[n(e,{items:o.breadcrumb,class:""},null,8,["items"])]),t("div",null,[t("div",k,[t("div",q,[n(p),n(s,{userId:o.userId},null,8,["userId"])]),n(d,{userId:o.userId},null,8,["userId"])])])])]),_:1})}var dr=C(L,[["render",H]]);export{dr as default};