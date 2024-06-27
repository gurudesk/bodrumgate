import{a as te,P as ie}from"./PsApiService.98e573c3.js";import{P as L}from"./PsObject.a17ef38f.js";import{D as o}from"./DefaultPhoto.cc755f93.js";import{P as ne}from"./PsValueStore.a232cbb1.js";import{P as s}from"./ps_constants.0e2a11f9.js";import{bD as re,y as R}from"./app.0e502cc5.js";class F extends L{constructor(){super(...arguments),this.latitude="",this.longitude="",this.isSubLocation="",this.isThumbnailGenerate="",this.isPaidApp="",this.isBlockUser="",this.isSubcatSubscription="",this.maxImgUploadOfItem="",this.oneDay="",this.SelectedPriceType="",this.SelectedChatType="",this.SoldOutFeatureSetting="",this.hidePricesetting=""}init(e,t,n,h,d,g,m,f,c,y,S,P,w){return this.latitude=e,this.longitude=t,this.isSubLocation=n,this.isThumbnailGenerate=h,this.isPaidApp=d,this.isBlockUser=g,this.isSubcatSubscription=m,this.maxImgUploadOfItem=f,this.oneDay=c,this.SelectedPriceType=y,this.SelectedChatType=S,this.SoldOutFeatureSetting=P,this.hidePricesetting=w,this}getPrimaryKey(){return this.latitude}toMap(e){const t={};return t.lat=e.latitude,t.lng=e.longitude,t.is_sub_locati_on=e.isSubLocation,t.is_thumb2x_3xgenerate=e.isThumbnailGenerate,t.is_paid_app=e.isPaidApp,t.is_block_user=e.isBlockUser,t.is_sub_subscription=e.isSubcatSubscription,t.max_img_upload_of_item=e.maxImgUploadOfItem,t.one_day_per_price=e.oneDay,t.selected_price_type=e.SelectedPriceType,t.selected_chat_type=e.SelectedChatType,t.soldout_feature_setting=e.SoldOutFeatureSetting,t.hide_price_setting=e.hidePricesetting,t}toMapList(e){const t=[];for(let n=0;n<e.length;n++)e[n]!=null&&t.push(this.toMap(e[n]));return t}fromMap(e){return new F().init(e.lat,e.lng,e.is_sub_location,e.is_thumb2x_3x_generate,e.is_paid_app,e.is_block_user,e.is_sub_subscription,e.max_img_upload_of_item,e.one_day_per_price,e.selected_price_type,e.selected_chat_type,e.soldout_feature_setting,e.hide_price_setting)}fromMapList(e){const t=[];for(const n in e)n!=null&&t.push(this.fromMap(n));return t}}class _ extends L{constructor(){super(...arguments),this.languageCode="",this.countryCode="",this.name=""}init(e,t,n){return this.languageCode=e,this.countryCode=t,this.name=n,this}getPrimaryKey(){return this.languageCode}toMap(e){const t={};return t.language_code=e.languageCode,t.country_code=e.countryCode,t.name=e.name,t}toMapList(e){const t=[];for(let n=0;n<e.length;n++)e[n]!=null&&t.push(this.toMap(e[n]));return t}fromMap(e){return new _().init(e.language_code,e.country_code,e.name)}fromMapList(e){const t=[];for(const n of e)n!=null&&t.push(this.fromMap(n));return t}}class U extends L{constructor(){super(...arguments),this.mapKey="",this.isDemoForPayment="",this.isEnableVideoSetting="",this.showUserProfile="",this.noFilterWithLocationOnMap="",this.priceFormat="",this.enableNotification="",this.fcmServerKey="",this.firebaseWebPushKeyPair="",this.firebaseConfig="",this.adClient="",this.adSlot="",this.copyRight="",this.googlePlayUrl="",this.appStoreUrl="",this.googleSetting="",this.appStoreSetting="",this.facebook_url="",this.linkedin_url="",this.twitter_url="",this.instagram_url="",this.pinterest_url="",this.youtube_url="",this.facebook_setting="",this.linkedin_setting="",this.twitter_setting="",this.instagram_setting="",this.pinterest_setting="",this.youtube_setting="",this.bannerSrc="",this.googleMap="",this.openStreetMap="",this.mile="",this.promoteFirstChoiceDay="",this.promoteSecondChoiceDay="",this.promoteThirdChoiceDay="",this.promoteFourthChoiceDay="",this.itemUploadUi1=!1,this.itemUploadUi2=!1,this.defaultLanguage=new _,this.excludeLanguage=[new _],this.frontendLogo=new o,this.frontendIcon=new o,this.frontendBanner=new o,this.appBrandingImage=new o}init(e,t,n,h,d,g,m,f,c,y,S,P,w,M,k,E,C,O,v,A,D,r,a,l,u,p,x,I,N,T,B,V,G,W,Z,b,q,H,J,Q,X,Y,$,j,ee){return this.mapKey=e,this.isDemoForPayment=t,this.isEnableVideoSetting=n,this.showUserProfile=h,this.noFilterWithLocationOnMap=d,this.priceFormat=g,this.enableNotification=m,this.fcmServerKey=f,this.firebaseWebPushKeyPair=c,this.firebaseConfig=y,this.adClient=S,this.adSlot=P,this.copyRight=w,this.googlePlayUrl=M,this.appStoreUrl=k,this.googleSetting=E,this.appStoreSetting=C,this.facebook_url=O,this.linkedin_url=v,this.twitter_url=A,this.instagram_url=D,this.pinterest_url=r,this.youtube_url=a,this.facebook_setting=l,this.linkedin_setting=u,this.twitter_setting=p,this.instagram_setting=x,this.pinterest_setting=I,this.youtube_setting=N,this.bannerSrc=T,this.googleMap=B,this.openStreetMap=V,this.mile=G,this.promoteFirstChoiceDay=W,this.promoteSecondChoiceDay=Z,this.promoteThirdChoiceDay=b,this.promoteFourthChoiceDay=q,this.itemUploadUi1=H,this.itemUploadUi2=J,this.defaultLanguage=Q,this.excludeLanguage=X,this.frontendLogo=Y,this.frontendIcon=$,this.frontendBanner=j,this.appBrandingImage=ee,this}getPrimaryKey(){return this.mapKey}toMap(e){const t={};return t.map_key=e.mapKey,t.is_demo_for_payment=e.isDemoForPayment,t.is_enable_video_setting=e.isEnableVideoSetting,t.show_user_profile=e.showUserProfile,t.no_filter_with_location_on_map=e.noFilterWithLocationOnMap,t.price_format=e.priceFormat,t.enable_notification=e.enableNotification,t.fcm_server_key=e.fcmServerKey,t.firebase_web_push_key_pair=e.firebaseWebPushKeyPair,t.firebase_config=e.firebaseConfig,t.ad_client=e.adClient,t.ad_slot=e.adSlot,t.copyright=e.copyRight,t.google_playstore_url=e.googlePlayUrl,t.app_store_url=e.appStoreUrl,t.google_setting=e.googleSetting,t.app_store_setting=e.appStoreSetting,t.facebook_url=e.facebook_url,t.linkedin_url=e.linkedin_url,t.twitter_url=e.twitter_url,t.instagram_url=e.instagram_url,t.pinterest_url=e.pinterest_url,t.youtube_url=e.youtube_url,t.facebook_setting=e.facebook_setting,t.linkedin_setting=e.linkedin_setting,t.twitter_setting=e.twitter_setting,t.instagram_setting=e.instagram_setting,t.pinterest_setting=e.pinterest_setting,t.youtube_setting=e.youtube_setting,t.banner_src=e.bannerSrc,t.google_map=e.googleMap,t.open_street_map=e.openStreetMap,t.mile=e.mile,t.promote_first_choice_day=e.promoteFirstChoiceDay,t.promote_second_choice_day=e.promoteSecondChoiceDay,t.promote_third_choice_day=e.promoteThirdChoiceDay,t.promote_fourth_choice_day=e.promoteFourthChoiceDay,t.item_upload_ui1=e.itemUploadUi1,t.item_upload_ui2=e.itemUploadUi2,t.default_language=new _().toMap(e.defaultLanguage),t.exclude_language=new _().toMapList(e.excludeLanguage),t.frontend_logo=new o().toMap(e.frontendLogo),t.frontend_icon=new o().toMap(e.frontendIcon),t.frontend_banner=new o().toMap(e.frontendBanner),t.app_branding_image=new o().toMap(e.appBrandingImage),t}toMapList(e){const t=[];for(let n=0;n<e.length;n++)e[n]!=null&&t.push(this.toMap(e[n]));return t}fromMap(e){return new U().init(e.map_key,e.is_demo_for_payment,e.is_enable_video_setting,e.show_user_profile,e.no_filter_with_location_on_map,e.price_format,e.enable_notification,e.fcm_server_key,e.firebase_web_push_key_pair,e.firebase_config,e.ad_client,e.ad_slot,e.copyright,e.google_playstore_url,e.app_store_url,e.google_setting,e.app_store_setting,e.facebook_url,e.linkedin_url,e.twitter_url,e.instagram_url,e.pinterest_url,e.youtube_url,e.facebook_setting,e.linkedin_setting,e.twitter_setting,e.instagram_setting,e.pinterest_setting,e.youtube_setting,e.banner_src,e.google_map,e.open_street_map,e.mile,e.promote_first_choice_day,e.promote_second_choice_day,e.promote_third_choice_day,e.promote_fourth_choice_day,e.item_upload_ui1,e.item_upload_ui2,new _().fromMap(e.default_language),new _().fromMapList(e.exclude_language),new o().fromMap(e.frontend_logo),new o().fromMap(e.frontend_icon),new o().fromMap(e.frontend_banner),new o().fromMap(e.app_branding_image))}fromMapList(e){const t=[];for(const n in e)n!=null&&t.push(this.fromMap(n));return t}}class K extends L{constructor(){super(...arguments),this.userStatus=""}init(e){return this.userStatus=e,this}getPrimaryKey(){return this.userStatus}toMap(e){const t={};return t.user_status=e.userStatus,t}toMapList(e){const t=[];for(let n=0;n<e.length;n++)e[n]!=null&&t.push(this.toMap(e[n]));return t}fromMap(e){return new K().init(e.id)}fromMapList(e){const t=[];for(const n in e)n!=null&&t.push(this.fromMap(n));return t}}class z extends L{constructor(){super(...arguments),this.psAppSetting=new F,this.userInfo=new K,this.oneDay="",this.currencySymbol="",this.currencyShortForm="",this.stripePublishableKey="",this.paypalEnable="",this.stripeEnable="",this.razorEnable="",this.razorKey="",this.offlineEnabled="",this.flutterwaveEnabled="",this.flutterwavePublicKey="",this.depositPercent="",this.cooldownPeriod="",this.membershipDuration="",this.membershipAmount="",this.bidFee="",this.uploadFee="",this.payStackEnabled="",this.payStackKey="",this.inAppPurchasedEnabled="",this.inAppPurchasedPrdIdAndroid="",this.inAppPurchasedPrdIdIOS="",this.frontendConfigSetting=new U,this.verificationEnable="",this.uploadSetting=""}init(e,t,n,h,d,g,m,f,c,y,S,P,w,M,k,E,C,O,v,A,D,r,a,l,u,p,x,I,N,T){return this.psAppSetting=e,this.userInfo=t,this.oneDay=n,this.currencySymbol=h,this.currencyShortForm=d,this.stripePublishableKey=g,this.paypalEnable=m,this.razorEnable=c,this.razorKey=y,this.depositPercent=M,this.cooldownPeriod=k,this.membershipDuration=E,this.membershipAmount=C,this.bidFee=O,this.uploadFee=v,this.stripeEnable=f,this.offlineEnabled=S,this.flutterwaveEnabled=P,this.flutterwavePublicKey=w,this.payStackEnabled=A,this.payStackKey=D,this.inAppPurchasedEnabled=r,this.inAppPurchasedPrdIdAndroid=a,this.inAppPurchasedPrdIdIOS=l,this.frontendConfigSetting=u,this.mobileSetting=p,this.defaultPhoneCountryCode=x,this.verificationEnable=I,this.uploadSetting=N,this.vendorConfig=T,this}getPrimaryKey(){return this.oneDay}toMap(e){const t={};return t.app_setting=new F().toMap(e.psAppSetting),t.user_info=new K().toMap(e.userInfo),t.oneday=e.oneDay,t.currency_symbol=e.currencySymbol,t.currency_short_form=e.currencyShortForm,t.stripe_publishable_key=e.stripePublishableKey,t.paypal_enabled=e.paypalEnable,t.razor_enabled=e.stripeEnable,t.razor_enabled=e.razorEnable,t.razor_key=e.razorKey,t.deposit_percent=e.depositPercent,t.cooldown_period=e.cooldownPeriod,t.membership_duration=e.membershipDuration,t.membership_amount=e.membershipAmount,t.bid_fee=e.bidFee,t.upload_fee=e.uploadFee,t.stripe_enabled=e.stripeEnable,t.offline_enabled=e.offlineEnabled,t.flutterwave_enabled=e.flutterwaveEnabled,t.flutterwave_public_key=e.flutterwavePublicKey,t.paystack_enabled=e.payStackEnabled,t.paystack_key=e.payStackKey,t.in_app_purchased_enabled=e.inAppPurchasedEnabled,t.in_app_purchased_prd_id_android=e.inAppPurchasedPrdIdAndroid,t.in_app_purchased_prd_id_ios=e.inAppPurchasedPrdIdIOS,t.frontend_config_setting=new U().toMap(e.frontendConfigSetting),t.mobile_config_setting=e.mobileSetting,t.default_phone_country_code=e.defaultPhoneCountryCode,t.verification_enable=e.verificationEnable,t.upload_setting=e.uploadSetting,t.vendor_config=e.vendorConfig,t}toMapList(e){const t=[];for(let n=0;n<e.length;n++)e[n]!=null&&t.push(this.toMap(e[n]));return t}fromMap(e){return new z().init(new F().fromMap(e.app_setting),new K().fromMap(e.user_info),e.oneday,e.currency_symbol,e.currency_short_form,e.stripe_publishable_key,e.paypal_enabled,e.stripe_enabled,e.razor_enabled,e.razor_key,e.offline_enabled,e.flutterwave_enabled,e.flutterwave_public_key,e.deposit_percent,e.cooldown_period,e.membership_duration,e.membership_amount,e.bid_fee,e.upload_fee,e.paystack_enabled,e.paystack_key,e.in_app_purchased_enabled,e.in_app_purchased_prd_id_android,e.in_app_purchased_prd_id_ios,new U().fromMap(e.frontend_config_setting),e.mobile_config_setting,e.default_phone_country_code,e.verification_enable,e.upload_setting,e.vendor_config)}fromMapList(e){const t=[];for(const n in e)n!=null&&t.push(this.fromMap(n));return t}}const _e=re("AppInfoStore",()=>{let i=R(new te),e=R({value:!1}),t=!1,n="",h="0",d="0";async function g(r){var p;e.value=!0;let a=s.NO_LOGIN_USER;r&&(a=r.userId);const l=ne(),u=await ie.postPsAppInfo(new z,a);return i.data=u.data,i.code=u.code,i.status=u.status,i.message=u.message,((p=i.psAppSetting)==null?void 0:p.isThumbnailGenerate)==s.ONE&&(t=!0),l.replacePublishKey(i.data.stripePublishableKey),e.value=!1,i}function m(){var r,a;return((a=(r=i==null?void 0:i.data)==null?void 0:r.psAppSetting)==null?void 0:a.isPaidApp)==s.ONE}function f(){var r,a;return((a=(r=i==null?void 0:i.data)==null?void 0:r.psAppSetting)==null?void 0:a.SelectedPriceType)==s.NO_PRICE}function c(){return i.data.mobileSetting.is_show_item_video==s.ONE}function y(){return(i==null?void 0:i.data)!=null&&(i==null?void 0:i.data.inAppPurchasedEnabled)==s.ZERO&&(i==null?void 0:i.data.stripeEnable)==s.ZERO&&(i==null?void 0:i.data.paypalEnable)==s.ZERO&&(i==null?void 0:i.data.payStackEnabled)==s.ZERO&&(i==null?void 0:i.data.razorEnable)==s.ZERO&&(i==null?void 0:i.data.offlineEnabled)==s.ZERO}function S(r,a){var l,u,p;return((l=i.data)==null?void 0:l.uploadSetting)=="admin"?r==s.ONE:((u=i.data)==null?void 0:u.uploadSetting)=="admin-bluemark"?r==s.ONE||a==s.ONE:(((p=i.data)==null?void 0:p.uploadSetting)=="all",!0)}function P(){return i.data.psAppSetting.maxImgUploadOfItem}function w(){var r;return((r=i==null?void 0:i.data)==null?void 0:r.mobileSetting.is_show_subcategory)==s.ONE}function M(){var r,a;return((a=(r=i.data)==null?void 0:r.mobileSetting)==null?void 0:a.is_show_discount)==s.ONE}function k(){var r,a;return((a=(r=i.data)==null?void 0:r.psAppSetting)==null?void 0:a.isSubLocation)==s.ONE}function E(){var r,a;return((a=(r=i.data)==null?void 0:r.mobileSetting)==null?void 0:a.no_filter_with_location_on_map)==s.ONE}function C(r){var a,l;return((l=(a=i.data)==null?void 0:a.psAppSetting)==null?void 0:l.SelectedPriceType)==r}function O(){var r;return((r=i.data)==null?void 0:r.vendorConfig.vendor_feature_setting)==1}function v(){var r;return((r=i.data)==null?void 0:r.vendorConfig.vendor_checkout_setting)==1}function A(){var r;return(r=i.data)==null?void 0:r.vendorConfig.vendor_subscription_setting}function D(){var r;return((r=i.data)==null?void 0:r.psAppSetting.SoldOutFeatureSetting)==1}return{appInfo:i,loading:e,id:n,isThumbnailGenerate:t,realStartDate:h,realEndDate:d,maxImgUploadOfItem:P,loadAppInfo:g,isShowItemVideo:c,isAllPaymentDisable:y,isSubmitButtonShow:S,isShowSubCategory:w,isShowDiscount:M,selectPriceType:C,isPaidAppOn:m,isShowSubLocation:k,isFilterLocationOn:E,isNoPriceSettingOn:f,isVendorSettingOn:O,vendorSubScriptionSetting:A,isVendorCheckoutSettingOn:v,isSoldOutFeatureSettingOn:D}});export{_e as u};
