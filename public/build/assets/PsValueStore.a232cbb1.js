import{bD as s,i as e}from"./app.0e502cc5.js";const n=s("PsValueStore ",{state:()=>({loginExpiryTime:e(0),loginUserId:e(""),locationId:e(""),locationName:e(""),subLocationId:e(""),subLocationName:e(""),locationLat:e(""),locationLng:e(""),loginUserName:e(""),userIdToVerify:e(""),userNameToVerify:e(""),userEmailToVerify:e(""),userPasswordToVerify:e(""),deviceToken:e(""),notiSetting:e("true"),isCustomCamera:e(!0),overAllTaxLabel:e(""),overAllTaxValue:e(""),shippingTaxLabel:e(""),shopId:e(""),messenger:e(""),whatsApp:e(""),phone:e(""),shippingTaxValue:e(""),appInfoVersionNo:e(""),appInfoForceUpdate:e(!1),appInfoForceUpdateTitle:e(""),appInfoForceUpdateMsg:e(""),startDate:e(""),endDate:e(""),paypalEnabled:e(""),stripeEnabled:e(""),codEnabled:e(""),bankEnabled:e(""),publishKey:e(""),depositPercent:e(""),coolDownPeriod:e(""),bidFee:e(""),uploadFee:e(""),memberShipDuration:e(""),membershipAmount:e(""),shippingId:e(""),standardShippingEnable:e(""),zoneShippingEnable:e(""),noShippingEnable:e(""),creditCardNo:e(""),creditCardMonth:e(""),creditCardYear:e(""),creditCardCVC:e(""),creditCardName:e(""),creditCardValid:e(!1),resultStartTime:e(0),userPassword:e(""),languageCode:e(""),showProfile:e("")}),actions:{loadData(){this.loginExpiryTime=localStorage.loginExpiryTime,this.locationId=localStorage.locationId,this.locationName=localStorage.locationName,this.subLocationId=localStorage.subLocationId,this.subLocationName=localStorage.subLocationName,this.locationLat=localStorage.locationLat,this.locationLng=localStorage.locationLng,this.loginUserId=localStorage.loginUserId,this.loginUserName=localStorage.loginUserName,this.userIdToVerify=localStorage.userIdToVerify,this.userNameToVerify=localStorage.userNameToVerify,this.userEmailToVerify=localStorage.userEmailToVerify,this.userPasswordToVerify=localStorage.userPasswordToVerify,this.deviceToken=localStorage.deviceToken,this.notiSetting=localStorage.notiSetting,this.isCustomCamera=localStorage.isCustomCamera,this.overAllTaxLabel=localStorage.overAllTaxLabel,this.overAllTaxValue=localStorage.overAllTaxValue,this.shippingTaxLabel=localStorage.shippingTaxLabel,this.shopId=localStorage.shopId,this.messenger=localStorage.messenger,this.whatsApp=localStorage.whatsApp,this.phone=localStorage.phone,this.shippingTaxValue=localStorage.shippingTaxValue,this.appInfoVersionNo=localStorage.appInfoVersionNo,this.appInfoForceUpdate=localStorage.appInfoForceUpdate,this.appInfoForceUpdateTitle=localStorage.appInfoForceUpdateTitle,this.appInfoForceUpdateMsg=localStorage.appInfoForceUpdateMsg,this.startDate=localStorage.startDate,this.endDate=localStorage.endDate,this.paypalEnabled=localStorage.paypalEnabled,this.stripeEnabled=localStorage.stripeEnabled,this.codEnabled=localStorage.codEnabled,this.bankEnabled=localStorage.bankEnabled,this.publishKey=localStorage.publishKey,this.depositPercent=localStorage.depositPercent,this.coolDownPeriod=localStorage.coolDownPeriod,this.bidFee=localStorage.bidFee,this.uploadFee=localStorage.uploadFee,this.memberShipDuration=localStorage.memberShipDuration,this.membershipAmount=localStorage.membershipAmount,this.depositPercent=localStorage.depositPercent,this.shippingId=localStorage.shippingId,this.standardShippingEnable=localStorage.standardShippingEnable,this.zoneShippingEnable=localStorage.zoneShippingEnable,this.noShippingEnable=localStorage.noShippingEnable,this.creditCardNo=localStorage.creditCardNo,this.creditCardValid=localStorage.creditCardValid,this.creditCardMonth=localStorage.creditCardMonth,this.creditCardYear=localStorage.creditCardYear,this.creditCardCVC=localStorage.creditCardCVC,this.creditCardName=localStorage.creditCardName,this.resultStartTime=localStorage.resultStartTime,this.userPassword=localStorage.userPassword,this.languageCode=localStorage.languageCode,this.showProfile=localStorage.showProfile},replacelanguageCode(a){localStorage.languageCode=a,this.languageCode=a},replaceshowProfile(a){localStorage.showProfile=a,this.showProfile=a,localStorage.showProfile=a},replaceCreditCard(a,o,t,i,l,r){localStorage.creditCardNo=a,localStorage.creditCardMonth=o,localStorage.creditCardYear=t,localStorage.creditCardCVC=i,localStorage.creditCardName=l,localStorage.creditCardValid=r,this.creditCardNo=a,this.creditCardMonth=o,this.creditCardYear=t,this.creditCardCVC=i,this.creditCardName=l,this.creditCardValid=r},replaceLoginUserId(a){localStorage.loginUserId=a,this.loginUserId=a},replaceNotiSetting(a){localStorage.notiSetting=a,this.notiSetting=a},replacedeviceToken(a){localStorage.deviceToken=a,this.deviceToken=a},replaceLoginUserName(a){localStorage.loginUserName=a,this.loginUserName=a},replaceLoginExpiryTime(a){this.loginExpiryTime=a,localStorage.loginExpiryTime=this.loginExpiryTime},replaceUserIdToVerify(a){localStorage.userIdToVerify=a,this.userIdToVerify=a},replaceUserNameToVerify(a){localStorage.userNameToVerify=a,this.userNameToVerify=a},replaceUserEmailToVerify(a){localStorage.userEmailToVerify=a,this.userEmailToVerify=a},replaceUserPasswordToVerify(a){localStorage.userPasswordToVerify=a,this.userPasswordToVerify=a},replaceLocation(a,o,t,i){localStorage.locationId=a,this.locationId=a,localStorage.locationName=o,this.locationName=o,localStorage.locationLat=t,this.locationLat=t,localStorage.locationLng=i,this.locationLng=i},replaceSubLocation(a,o){localStorage.subLocationId=a,this.subLocationId=a,localStorage.subLocationName=o,this.subLocationName=o},replacePublishKey(a){localStorage.publishKey=a,this.publishKey=a},updateLoginExpiryTime(){const a=new Date;a.setDate(a.getDate()+1),this.replaceLoginExpiryTime(a.getTime())},getLoginUserId(){return this.loginUserId=localStorage.loginUserId,this.loginUserId!=null&&this.loginUserId!=""?this.loginUserId:"nologinuser"},getPublishedKey(){return this.publishKey=localStorage.publishKey,this.publishKey}}});export{n as P};
