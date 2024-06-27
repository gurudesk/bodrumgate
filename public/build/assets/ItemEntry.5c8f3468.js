import{d,Z as u,i as p,o as m,c as y,b as c,f as e,g as a,F as g,r as i}from"./app.0e502cc5.js";import I from"./ItemUpload1.d1620062.js";import f from"./PsFrontendLayout.64b287f7.js";import h from"./ChooseCategory.6562b9f7.js";import{_ as U}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsLabel.3cf95094.js";import"./PsButton.bc5ed803.js";import"./PsLabelCaption.a33ce9c4.js";import"./PsLabelCaption2.0e4c53b3.js";import"./PsInput.e5044849.js";import"./PsInputWithRightIcon.f020751b.js";import"./PsIcon.dc31c2db.js";import"./PsDropdown.f31a931d.js";import"./PsValueStore.a232cbb1.js";import"./PsDropdownSelect.8d0bad23.js";import"./PsTextarea.96959cd1.js";import"./PsLoadingDialog.e4058754.js";import"./PsModal.20834757.js";import"./vue-neat-modal.d03c5dee.js";import"./PsLine.4597488d.js";import"./PsLabelTitle.41617619.js";import"./PsErrorDialog.092191b2.js";import"./PsSuccessDialog.17d4939f.js";import"./PsSuccessDialog2.6772f7b4.js";import"./PsConfirmDialog.cd272747.js";import"./PsWarningDialog.7907cd63.js";import"./PsCheckboxValue.612ef939.js";import"./LimitItemModal.5c60e25a.js";import"https://checkout.razorpay.com/v1/checkout.js";import"./PsRadio.3dac062e.js";import"./PsRadio2.bd18197c.js";import"./PsErrorDialog.cf13beac.js";import"./PsWarningDialog2.c788b92c.js";import"./StripePaymentModal.e7165d18.js";import"./stripe.esm.2a0d6725.js";import"./PsLabelHeader4.fc9d9bf1.js";import"./PaypalPaymentModal.04fe35bc.js";import"./TokenStore.222ad207.js";import"./PsApiService.98e573c3.js";import"./ApiStatus.5720ba0b.js";import"./PsObject.a17ef38f.js";import"./PsSepetetedStore.9a31ac47.js";import"./dropin.4ee2cd7a.js";import"./OfflinePaymentModal.bcd67836.js";import"./PsLabelTitle3.bf9bb1e2.js";import"./PsLabelHeader6.d6849b88.js";import"./OfflinePaymentStore.12bcb16f.js";import"./DefaultIcon.e76b39a5.js";import"./InputEmailModal.a3d18bf5.js";import"./AppInfoStore.266a6525.js";import"./DefaultPhoto.cc755f93.js";import"./ps_constants.0e2a11f9.js";import"./UserStore.ecd89ebd.js";import"./User.0c3ba1a8.js";import"./RatingDetail.291ad5d1.js";import"./ProductRelation.0b376978.js";import"./UserListParameterHolder.d110b747.js";import"./PackageStore.da95ec7c.js";import"./Package.5254ef20.js";import"./PaymentInfo.5aa268a0.js";import"./ItemLimitParameterHolder.6c72602a.js";import"./AppInfoParameterHolder.e24d894d.js";import"./LimitAdItemStore.a425d616.js";import"./LimitAdTransaction.68a62e95.js";import"./ItemPromotionStore.cb9e40e2.js";import"./Product.29c94914.js";import"./Category.7c65464b.js";import"./SubCategory.1b4176e0.js";import"./ItemCurrency.91c8ce91.js";import"./ItemLocation.d1b92a80.js";import"./Vendor.d946ee87.js";import"./inline.d0ef9675.js";import"./PsUtils.78b0d4de.js";import"./format.min.502eec0f.js";import"./DatePicker.03e0ceef.js";import"./main.1827f372.js";import"./index.edd1d404.js";import"./PsRadioValue2.76c6940e.js";import"./CheckBox.ab0bb4df.js";import"./CategoryStore.8359ddd4.js";import"./PsStore.f4ecabdb.js";import"./SubCategoryStore.60daf9d9.js";import"./ItemCurrencyStore.9dfb59f8.js";import"./LocationParameterHolder.a5eab253.js";import"./ItemLocationTownshipStore.d4fe0c18.js";import"./ProductStore.279e879d.js";import"./ProductParameterHolder.4354be0b.js";import"./Phone.45f97258.js";import"./UserDeleteItemParameterHolder.5d816aba.js";import"./PhoneStore.27ee55d2.js";import"./GalleryStore.a9a9e731.js";import"./CustomFieldStore.b038b00e.js";import"./CustomizeUiStore.68ca0820.js";import"./ItemEntryParameterHolder.87e7bb8d.js";import"./DropZone.9c12edfa.js";import"./dropzone.0e7a43e0.js";import"./PsBannerIcon.82d105ba.js";import"./PsIcon1.3db40a94.js";import"./Icons.c01eddd9.js";import"./FooterView.1e68f849.js";import"./FooterLinkSection.714178c6.js";import"./PsLink.555685fa.js";import"./PsRouteLink.8f7df026.js";import"./PsNavTabBar.634541ec.js";import"./PsIconToggle.5f73bff4.js";import"./PsInputWithLeftIcon.ae1f5479.js";import"./PsNavBar.0669b7b7.js";import"./index.esm.159b9749.js";import"./auth.esm.925cebae.js";import"./UserUnReadMessageParameterHolder.181142c1.js";import"./AddToCartStore.3ffc08d4.js";import"./PsNotificationBox.8f065d5d.js";import"./NotificationStore.656ac75f.js";import"./NotiUnRegisterHolder.eefb692e.js";import"https://unpkg.com/delayed-scroll-restoration-polyfill@0.1.1/index.js";const b=d({name:"ItemEntry",components:{ItemUpload1:I,Head:u,ChooseCategory:h},props:["query","backendSetting","categoryId","categoryName","mobileSetting"],layout:f,setup(t){const r=p("0"),o=p();return t.query&&t.query.itemId&&(r.value=t.query.itemId),t.query.categoryId===void 0?o.value=!1:o.value=!0,{itemId:r,isShow:o}}});function $(t,r,o,S,_,q){const n=i("Head"),s=i("item-upload-1"),l=i("choose-category");return m(),y(g,null,[c(n,{title:t.$t("item_entry__title")},null,8,["title"]),t.isShow||t.itemId!="0"?(m(),e(s,{key:0,authUser:t.$page.props.authUser,thumb2xUrl:t.$page.props.thumb2xUrl,dir:t.$page.props.dir,sysImageUrl:t.$page.props.sysImageUrl,itemId:t.itemId,categoryId:t.query.categoryId,categoryName:t.query.categoryName},null,8,["authUser","thumb2xUrl","dir","sysImageUrl","itemId","categoryId","categoryName"])):a("",!0),!t.isShow&&t.itemId=="0"?(m(),e(l,{key:1,mobileSetting:t.mobileSetting},null,8,["mobileSetting"])):a("",!0)],64)}var Ho=U(b,[["render",$]]);export{Ho as default};
