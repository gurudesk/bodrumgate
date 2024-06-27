import{Z as K,i as _,o as v,c as R,b as t,a as p,f as k,w as o,q as r,t as s,g as M,Y as b,F as I,B as c,r as d}from"./app.0e502cc5.js";import V from"./PsLabel.3cf95094.js";import j from"./PsButton.bc5ed803.js";import W from"./PsInput.e5044849.js";import{u as L}from"./UserProvider.e751e685.js";import{P as N}from"./PsValueStore.a232cbb1.js";import Z from"./PsCheckboxValue.612ef939.js";import D from"./PsErrorDialog.092191b2.js";import F from"./PsSuccessDialog2.6772f7b4.js";import H from"./PsRouteLink.8f7df026.js";import q from"./PrivacyModal.3e09b552.js";import G from"./PsLine.4597488d.js";import{b as E}from"./PsApiService.98e573c3.js";import{_ as T}from"./plugin-vue_export-helper.21dcd24c.js";import"./User.0c3ba1a8.js";import"./PsObject.a17ef38f.js";import"./RatingDetail.291ad5d1.js";import"./ProductRelation.0b376978.js";import"./UserListParameterHolder.d110b747.js";import"./DefaultPhoto.cc755f93.js";import"./ps_constants.0e2a11f9.js";import"./UserRegisterParameterHolder.c0325365.js";import"./PhoneLoginParameterHolder.e6dad0ed.js";import"./ApiStatus.5720ba0b.js";import"./PsModal.20834757.js";import"./vue-neat-modal.d03c5dee.js";import"./PsLabelTitle.41617619.js";import"./AboutUsStore.6b1b061c.js";import"./PsSepetetedStore.9a31ac47.js";import"./PsIcon.dc31c2db.js";const Y={name:"RegisterView",components:{PsButton:j,PsLine:G,PsInput:W,PsLabel:V,PsCheckboxValue:Z,PsErrorDialog:D,PsRouteLink:H,PrivacyModal:q,PsSuccessDialog2:F,Head:K},setup(){N.psValueStore.isUserLoggedIn();const l=_(""),n=_(""),h=_(""),e=_(""),y=_(!1),g=_(!1),u=_(),i=_(),f=_(),a=L();a.userResource.message="";function w(U){/^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$/.test(U.target.value)?y.value=!1:y.value=!0}async function C(){n.value==h.value?g.value==!0?await a.signUpWithEmailId(e.value,l.value,n.value,()=>{},()=>{}):u.value.openModal("",c("register__select_privacy_policy")):u.value.openModal("",c("register__passwords_not_match_error"))}function x(){}function P(U){g.value=U}function S(){g.value==!0||u.value.openModal(c("login__privacy_policy"),c("login__need_to_agree_privacy"))}function A(){f.value.openModal(P)}async function m(){g.value==!0?(await a.loginWithFacebookId(),a.userResource.status==E.SUCCESS&&i.value.openModal(c("register__success"),c("register__login_success"),c("register_ok"),()=>{})):u.value.openModal("",c("register__select_privacy_policy"))}async function z(){g.value==!0?(await a.loginWithAppleSignIn(),a.userResource.status==E.SUCCESS):u.value.openModal(c("register__privacy_policy"),c("register__need_to_agree_privacy"))}async function B(){g.value==!0?(await a.loginWithGoogleId(),a.userResource.status==E.SUCCESS&&i.value.openModal(c("register__success"),c("register__login_success"),c("register_ok"),()=>{})):u.value.openModal("",c("register__select_privacy_policy"))}return{clicked:C,email:l,password:n,confirmPassword:h,name:e,userProvider:a,checkedterms:g,ps_error_dialog:u,ps_success_dialog:i,loginClicked:x,agreePrivacyPolicyClicked:A,privacy_modal:f,facebookloginclicked:m,googleloginclicked:B,phoneloginclicked:S,validateEmail:w,validationEmail:y,appleloginclicked:z}}},J={class:"sm:mt-32 lg:mt-36 mt-28 flex flex-col"},O={class:"content-center mx-auto w-96"},Q={class:"w-55 lg:w-80 flex flex-col mx-auto rounded-lg"},X={class:"w-full"},$={class:"flex flex-row items-start mt-2 lg:mt-3"},ee={class:"flex flex-auto justify-center mt-3"},te={class:"flex flex-row justify-center mt-4"},le=p("div",{class:"my-4"},null,-1);function oe(l,n,h,e,y,g){const u=d("Head"),i=d("ps-label"),f=d("ps-input"),a=d("ps-button"),w=d("ps-checkbox-value"),C=d("ps-route-link"),x=d("ps-line"),P=d("ps-error-dialog"),S=d("ps-success-dialog-2"),A=d("privacy-modal");return v(),R(I,null,[t(u,{title:l.$t("register__register_title")},null,8,["title"]),p("div",null,[p("div",J,[p("div",O,[e.userProvider.userResource.message!=""?(v(),k(i,{key:0,class:"content-center bg-feAchromatic-50 text-general-200 px-4 py-4 rounded-md"},{default:o(()=>[r(s(e.userProvider.userResource.message),1)]),_:1})):M("",!0)]),p("div",Q,[t(i,{class:"font-medium text-2xl mt-8 mx-auto lg:text-3xl mb-4"},{default:o(()=>[r(s(l.$t("register__register_title")),1)]),_:1}),p("form",X,[t(i,{class:"mt-4 lg:mt-5 font-medium text-base lg:text-xl w-full"},{default:o(()=>[r(s(l.$t("register__user_name")),1)]),_:1}),t(f,{class:"lg:mt-2 mt-1 w-full",type:"email",placeholder:l.$t("register__user_name"),onKeyup:b(e.clicked,["enter"]),value:e.name,"onUpdate:value":n[0]||(n[0]=m=>e.name=m)},null,8,["placeholder","onKeyup","value"]),t(i,{class:"mt-4 lg:mt-5 font-medium text-base lg:text-xl w-full"},{default:o(()=>[r(s(l.$t("register__email")),1)]),_:1}),t(f,{class:"lg:mt-2 mt-1 w-full",type:"email",placeholder:l.$t("register__email"),onKeyup:b(e.clicked,["enter"]),value:e.email,"onUpdate:value":n[1]||(n[1]=m=>e.email=m),onBlur:e.validateEmail},null,8,["placeholder","onKeyup","value","onBlur"]),e.validationEmail?(v(),k(i,{key:0,class:"lg:mt-2 mt-1 w-full",textColor:"text-fePrimary-500"},{default:o(()=>[r(s(l.$t("login__email_required_error")),1)]),_:1})):M("",!0),t(i,{class:"mt-4 lg:mt-5 font-medium text-base lg:text-xl w-full"},{default:o(()=>[r(s(l.$t("register__password")),1)]),_:1}),t(f,{class:"lg:mt-2 mt-1 w-full",type:"password",placeholder:l.$t("register__password"),onKeyup:b(e.clicked,["enter"]),value:e.password,"onUpdate:value":n[2]||(n[2]=m=>e.password=m),autocomplete:"off"},null,8,["placeholder","onKeyup","value"]),t(i,{class:"mt-4 lg:mt-5 font-medium text-base lg:text-xl w-full"},{default:o(()=>[r(s(l.$t("register__confirm_password")),1)]),_:1}),t(f,{class:"lg:mt-2 mt-1 w-full",type:"password",placeholder:l.$t("register__confirm_password"),onKeyup:b(e.clicked,["enter"]),value:e.confirmPassword,"onUpdate:value":n[3]||(n[3]=m=>e.confirmPassword=m),autocomplete:"off"},null,8,["placeholder","onKeyup","value"])]),e.userProvider.loading.value?(v(),k(a,{key:0,textSize:"text-xs lg:text-base",class:"mt-4 lg:mt-5 w-full py-3",disabled:!0},{default:o(()=>[r(s(l.$t("register__loading")),1)]),_:1})):(v(),k(a,{key:1,textSize:"text-xs lg:text-base",class:"mt-4 lg:mt-5 py-3",onClick:e.clicked,disabled:!1},{default:o(()=>[r(s(l.$t("register__register")),1)]),_:1},8,["onClick"])),p("div",$,[t(w,{title:"",onClick:e.agreePrivacyPolicyClicked,class:"lg:mt-1 mt-0.5",value:e.checkedterms,"onUpdate:value":n[4]||(n[4]=m=>e.checkedterms=m)},null,8,["onClick","value"]),t(i,{class:"me-2 font-medium text-sm lg:text-base"},{default:o(()=>[r(s(l.$t("register__check_privacy_policy")),1)]),_:1}),t(C,{to:{name:"privacy"},class:"underline cursor-pointer text-sm",url:"https://www.panacea-soft.com/privacy"},{default:o(()=>[t(i,{class:"font-medium text-sm lg:text-base"},{default:o(()=>[r(s(l.$t("register__privacy_policy")),1)]),_:1})]),_:1})]),p("div",ee,[t(i,{textColor:"text-feSecondary-400 dark:text-feAchromatic-500",class:"cursor-pointer font-light text-xs lg:text-sm",onClick:e.loginClicked},{default:o(()=>[r(s(l.$t("register__already_member_login")),1)]),_:1},8,["onClick"])]),p("div",te,[t(x,{class:"w-full lg:h-3 h-2 border border-s-0 border-e-0 border-feSecondary-400 dark:border-feAchromatic-500"}),t(i,{class:"px-1 font-medium text-sm lg:text-base"},{default:o(()=>[r(s(l.$t("login__or")),1)]),_:1}),t(x,{class:"w-full lg:h-3 h-2 border border-s-0 border-e-0 border-feSecondary-400 dark:border-feAchromatic-500"})]),t(a,{textSize:"text-xs lg:text-base",class:"mt-3 lg:mt-4 py-3 flex justify-center",onClick:e.phoneloginclicked},{default:o(()=>[r(s(l.$t("register__register_with_phone")),1)]),_:1},8,["onClick"]),t(a,{textSize:"text-xs lg:text-base",class:"mt-3 lg:mt-4 py-3 flex justify-center",theme:"bg-feInfo-600 hover:bg-feInfo-700 text-feAchromatic-50 px-4 py-2",onClick:e.facebookloginclicked},{default:o(()=>[r(s(l.$t("register__register_with_facebook")),1)]),_:1},8,["onClick"]),t(a,{textSize:"text-xs lg:text-base",class:"mt-3 lg:mt-4 py-3 flex justify-center mb-2",theme:"bg-feWarning-600 hover:bg-feWarning-700 text-feAchromatic-50 px-4 py-2",id:"signinBtn",onClick:e.googleloginclicked},{default:o(()=>[r(s(l.$t("register__register_with_google")),1)]),_:1},8,["onClick"]),t(a,{textSize:"text-xs lg:text-base",class:"mt-3 lg:mt-4 py-3 flex justify-center mb-5",theme:"bg-feAchromatic-900 hover:bg-feAchromatic-700 text-feAchromatic-50 px-4 py-2",onClick:e.appleloginclicked},{default:o(()=>[r(s(l.$t("register__register_with_apple")),1)]),_:1},8,["onClick"]),le]),t(P,{ref:"ps_error_dialog"},null,512),t(S,{ref:"ps_success_dialog"},null,512)]),t(A,{ref:"privacy_modal"},null,512)])],64)}var Ve=T(Y,[["render",oe]]);export{Ve as default};