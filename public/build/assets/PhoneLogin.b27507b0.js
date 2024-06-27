import{d as ne,Z as se,p as ie,G as Z,i as m,H as le,j as de,c as S,b as r,a as d,w as s,h as pe,f as V,g as D,Y as me,n as R,F as G,O as $,B as J,q as i,r as h,o as g,t as l,s as ce,D as ue}from"./app.0e502cc5.js";import{f as I}from"./index.esm.159b9749.js";import"./auth.esm.925cebae.js";import{P as fe}from"./PsDropdown.a0b3bb4c.js";import{P as _e}from"./PsDropdownSelect.063a4178.js";import he from"./PsLabel.3cf95094.js";import"./PsLabelHeader3.7f8e1b17.js";import ge from"./PsLabelTitle.41617619.js";import ve from"./PsLabelCaption.a33ce9c4.js";import ye from"./PsButton.bc5ed803.js";import{P as be}from"./PsInput.6fad3d25.js";import{P as ke}from"./PsCard.42327b0b.js";import{d as we}from"./PsDangerDialog.195b6d73.js";import Ce from"./UserPhoneLoginVerificationModal.8e963576.js";import Pe from"./PsFrontendLayout.64b287f7.js";import"./PsLayout.7915dd73.js";import{W as Se}from"./WelcomeImage.ec614cda.js";import{u as $e}from"./AppInfoStore.266a6525.js";import{A as Ne}from"./AppInfoParameterHolder.e24d894d.js";import xe from"./PsErrorDialog.092191b2.js";import{u as Ae}from"./AuthStore.f5c18b5c.js";import{P as Le}from"./PhoneLoginParameterHolder.e6dad0ed.js";import{_ as Ve}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsIcon.8dbf90d4.js";import"./Icons.c01eddd9.js";import"./PsLabel.6d5b1b0c.js";import"./PsModal.0f9f6579.js";import"./vue-neat-modal.d03c5dee.js";import"./PsButton.ed5c0dad.js";import"./PsModal.20834757.js";import"./PsLine.4597488d.js";import"./PsInput.e5044849.js";import"./FooterView.1e68f849.js";import"./FooterLinkSection.714178c6.js";import"./PsLink.555685fa.js";import"./PsRouteLink.8f7df026.js";import"./PsIcon.dc31c2db.js";import"./ProductParameterHolder.4354be0b.js";import"./ps_constants.0e2a11f9.js";import"./PsValueStore.a232cbb1.js";import"./CustomFieldStore.b038b00e.js";import"./PsApiService.98e573c3.js";import"./PsObject.a17ef38f.js";import"./DefaultPhoto.cc755f93.js";import"./PsStore.f4ecabdb.js";import"./PsSepetetedStore.9a31ac47.js";import"./PsNavTabBar.634541ec.js";import"./PsDropdown.f31a931d.js";import"./PsDropdownSelect.8d0bad23.js";import"./PsIconToggle.5f73bff4.js";import"./PsInputWithLeftIcon.ae1f5479.js";import"./ItemLocationTownshipStore.d4fe0c18.js";import"./ItemLocation.d1b92a80.js";import"./LocationParameterHolder.a5eab253.js";import"./PsUtils.78b0d4de.js";import"./PsNavBar.0669b7b7.js";import"./UserStore.ecd89ebd.js";import"./User.0c3ba1a8.js";import"./RatingDetail.291ad5d1.js";import"./ProductRelation.0b376978.js";import"./UserListParameterHolder.d110b747.js";import"./ApiStatus.5720ba0b.js";import"./UserUnReadMessageParameterHolder.181142c1.js";import"./AddToCartStore.3ffc08d4.js";import"./PsNotificationBox.8f065d5d.js";import"./ProductStore.279e879d.js";import"./Phone.45f97258.js";import"./Product.29c94914.js";import"./Category.7c65464b.js";import"./DefaultIcon.e76b39a5.js";import"./SubCategory.1b4176e0.js";import"./ItemCurrency.91c8ce91.js";import"./Vendor.d946ee87.js";import"./UserDeleteItemParameterHolder.5d816aba.js";import"./NotificationStore.656ac75f.js";import"./NotiUnRegisterHolder.eefb692e.js";import"https://unpkg.com/delayed-scroll-restoration-polyfill@0.1.1/index.js";import"./PsToggle.1bec2c80.js";import"./toggle.284f64a6.js";import"./PsWarningDialog.db1ec62c.js";import"./SidebarMenuItem.15e6d48b.js";import"./SidebarSubTab.31b29583.js";import"./PsErrorDialog.3227ce3c.js";import"./PsInputWithRightIcon.c0b01b6c.js";import"./PsSuccessDialog.9e44e7fb.js";import"./PsLoading.0f9a761a.js";import"./PsLabelCaption.3e68d19d.js";import"./PsBannerIcon.82d105ba.js";import"./PsIcon1.3db40a94.js";import"./PsLoadingCircleDialog.65ae0069.js";const Me=ne({name:"PhoneLoginView",components:{Head:se,Link:ie,PsLabel:he,PsLabelTitle:ge,PsButton:ye,PsInput:be,UserPhoneLoginVerificationModal:Ce,PsErrorDialog:xe,PsLabelCaption:ve,PsCard:ke,PsDangerDialog:we,WelcomeImage:Se,PsDropdown:fe,PsDropdownSelect:_e},props:{backendSetting:Object,status:String,error:String,errors:Object,phoneCodes:Object,firebaseConfig:String},layout:Pe,setup(e){var K,F,q,W;const t=Ae(),b=new Le,j=ue(),H=Z(()=>j.getters.isDarkMode),z=Z(()=>j.getters.dir),N=m(),x=m(),v=m(),w=m(),A=m(),p=$e();let o=le({email:"",password:"",remember:!1,deviceToken:"",headerToken:"",loginMethod:"",google_id:"",profile_photo_url:"",name:"",displayName:"",registerMethod:"",user_phone:"",username:"",phone_id:"",phone_code:(W=(q=(F=(K=p==null?void 0:p.appInfo)==null?void 0:K.data)==null?void 0:F.defaultPhoneCountryCode)==null?void 0:q.id)!=null?W:"1",phone_string:""});const B=JSON.parse(e.firebaseConfig);I.apps.length<1&&I.initializeApp(B);const u=m(),k=m(),C=m(),M=m(),n=m(!1),E=m(!1),U=m(),O=m(),Y=m(!1);let L,c,T;t.loading.value=!1;function Q(){t.loading.value=!0,setTimeout(()=>{window.recaptchaVerifier=new I.auth.RecaptchaVerifier("recaptcha-container",{size:"invisible",callback:a=>{console.log("Callback"),console.log(a)},"expired-callback":()=>{console.log("expiry callback")}}),T=window.recaptchaVerifier,t.loading.value=!1},1e3)}de(async()=>{var y,f,_,P;Q();const a=new Ne;a.userId="nologinuser",await p.loadAppInfo(a),o.phone_code=(P=(_=(f=(y=p==null?void 0:p.appInfo)==null?void 0:y.data)==null?void 0:f.defaultPhoneCountryCode)==null?void 0:_.id)!=null?P:"1"});function X(){$.get(route("login"))}async function ee(){w.value="",L!=null&&await L.confirm(M.value).then(async a=>{if(a!=null&&a.user!=null&&a.user.uid!=null&&a.user.uid!=""){const y=a.user;b.phoneId=y.uid,t.loading.value=!0,c.data.message.user_isexisted=="2"&&(o.loginMethod="phone",o.username=u.value,o.user_phone=k.value,o.phone_id=y.uid,$.post(route("CreateLogin"),o,{})),c.data.message.user_isexisted=="1"&&(o.loginMethod="phone",o.username=u.value,o.email="admin@gmail.com",o.user_phone=k.value,o.password="admin@123",o.phone_id=y.uid,o.name=u.value,$.post(route("login"),o,{}))}else t.setLoading(!1)}).catch(a=>{t.setLoading(!1),w.value=a==null?void 0:a.message})}async function oe(){let a=e.phoneCodes.filter(f=>f.id==o.phone_code)[0].country_code;k.value=a+o.phone_string,C.value=a+"-"+o.phone_string,b.userName=u.value,b.userPhone=C.value,b.displayName=o.displayName,t.loading.value=!0;const y=T;c=await t.existUser(b),c.data.status=="error"&&(N.value="",x.value="",v.value="",N.value=c.data.message.username?c.data.message.username[0]:"",x.value=c.data.message.user_phone?c.data.message.user_phone[0]:"",v.value=c.data.message.displayName?c.data.message.displayName[0]:"",t.loading.value=!1),c.data.status=="success"&&(L=await I.auth().signInWithPhoneNumber(k.value,y).catch(f=>{t.loading.value=!1,w.value=f==null?void 0:f.message}),L!=null&&U.value.openModal(J("phone_no_verification_modal__title"),"","Submit","Cancel",async f=>{t.loading.value=!0,await L.confirm(f).then(async _=>{if(_!=null&&_.user!=null&&_.user.uid!=null&&_.user.uid!=""){const P=_.user;b.phoneId=P.uid,U.value.actionClicked("no"),c.data.message.user_isexisted=="2"&&(o.loginMethod="phone",o.username=u.value,o.user_phone=C.value,o.phone_id=P.uid,$.post(route("CreateLogin"),o,{})),c.data.message.user_isexisted=="1"&&(o.loginMethod="phone",o.username=u.value,o.email="admin@gmail.com",o.user_phone=C.value,o.password="admin@123",o.phone_id=P.uid,o.name=u.value,$.post(route("login"),o,{}))}else t.setLoading(!1)}).catch(_=>{t.setLoading(!1),O.value.openModal(J("phone_login__error_in_sign_in"),_==null?void 0:_.message)})},()=>{console.log("Cancel")}))}function te(){$.post(route("login"))}function ae(a){/^\/$|(\/[a-zA-Z_0-9-]+)+$/.test(a.target.value)?n.value=!0:n.value=!1}function re(a){/^\/$|(\/[a-zA-Z_0-9-]+)+$/.test(a.target.value)?E.value=!0:E.value=!1}return{authStore:t,clicked:oe,name:u,phone:k,user_phone_login_verification_modal:U,ps_error_dialog:O,loginClicked:X,isValidUserName:n,validateName:ae,validatePhone:re,isValidPhone:E,dir:z,isDarkMode:H,test:te,usernameError:N,phoneError:x,ps_danger_dialog:A,code:M,code_data_ready:Y,codeClicked:ee,codeError:w,form:o,displayNameError:v}},watch:{async errors(e){this.errors.user_ban&&(this.authStore.loading.value=!1)}}}),Ee={class:"mb-6 bg-feAchromatic-50 dark:bg-feAchromatic-900 flex flex-row mt-28 min-h-screen items-center justify-center"},De={class:"h-176 my-6 flex flex-row w-98 lg:w-202 rounded-md overflow-hidden shadow-md"},Ie={class:"hidden w-100 h-auto bg-feSecondary-900 lg:flex flex-col items-center justify-center"},je={class:"w-65 h-50"},Be={class:"flex-grow bg-feAchromatic-50 dark:bg-feSecondary-800 px-10 pb-10"},Ue={class:"px-6"},He={class:"flex"},ze={class:"rounded-md shadow-xs w-16 bg-feAchromatic-50 dark:bg-feAchromatic-900"},Oe={class:"pt-2 z-20"},Te={key:0},Ke={key:1},Fe=["onClick"],qe=d("div",{id:"recaptcha-container"},null,-1),We=i(),Ze=d("br",null,null,-1),Re={class:"flex items-center justify-center mb-4 lg:mt-56"},Ge={class:"flex flex-auto justify-center mt-4 mb-10"},Je={key:0};function Ye(e,t,b,j,H,z){const N=h("Head"),x=h("welcome-image"),v=h("ps-label"),w=h("ps-label-title"),A=h("ps-input"),p=h("ps-label-caption"),o=h("ps-dropdown-select"),B=h("ps-dropdown"),u=h("ps-button"),k=h("user-phone-login-verification-modal"),C=h("ps-error-dialog"),M=h("ps-danger-dialog");return g(),S(G,null,[r(N,{title:e.$t("core__fe_sign_in")},null,8,["title"]),d("div",{class:R(e.isDarkMode?"dark":"")},[d("div",Ee,[d("div",De,[d("div",Ie,[d("div",je,[r(x)]),r(v,{class:"text-lg font-semibold mt-6 mb-2",textColor:"text-feSecondary-50"},{default:s(()=>[i(l(e.$t("login__fe_title_best_deal")),1)]),_:1}),r(v,{class:"text-base font-normal text-center mb-2 mx-10",textColor:"text-feSecondary-200"},{default:s(()=>[i(l(e.$t("login__fe_description_best_deal")),1)]),_:1})]),d("div",Be,[d("form",{onSubmit:t[4]||(t[4]=pe((...n)=>e.clicked&&e.clicked(...n),["prevent"]))},[d("div",Ue,[r(w,{class:"text-center m-auto pb-8 pt-2 mt-10",textColor:"text-feSecondary-600 dark:text-feSecondary-50"},{default:s(()=>[i(l(e.$t("phone_login__phone_login")),1)]),_:1}),r(v,{class:"mt-4"},{default:s(()=>[i(l(e.$t("core__fe_phone_login__display_name"))+" : ",1)]),_:1}),r(A,{class:"mt-2 placeholder-feSecondary-800 dark:placeholder-feSecondary-500",type:"text",placeholder:e.$t("core__fe_phone_login__display_name_placeholder"),theme:"text-feSecondary-500 dark:bg-feSecondary-800",defaultBorder:"border border-feSecondary-200 dark:border-feSecondary-400 focus:outline-none focus:ring-1 focus:ring-fePrimary-500",value:e.form.displayName,"onUpdate:value":t[0]||(t[0]=n=>e.form.displayName=n)},null,8,["placeholder","value"]),e.isValidUserName?(g(),V(p,{key:0,class:"mt-2 mx-8",textColor:"text-fePrimary-500 dark:text-feAccent-500"},{default:s(()=>[i(l(e.$t("phone_login__user_name_required")),1)]),_:1})):D("",!0),r(p,{textColor:"text-feError-500 ",class:"mt-2 block"},{default:s(()=>[i(l(e.displayName),1)]),_:1}),r(v,{class:"mt-4"},{default:s(()=>[i(l(e.$t("phone_label"))+" : ",1)]),_:1}),d("div",He,[r(B,{align:"left",class:"mt-2 w-20"},{select:s(()=>[r(o,{border:"border border-feSecondary-200 dark:border-feSecondary-400 focus:outline-none focus:ring-1 focus:ring-fePrimary-500",placeholder:"phone",showCenter:!0,selectedValue:e.form.phone_code==""?"":e.phoneCodes.filter(n=>n.id==e.form.phone_code)[0].country_code,onChange:t[1]||(t[1]=n=>[e.form.phone_code=e.phoneCode.id])},null,8,["selectedValue"])]),list:s(()=>[d("div",ze,[d("div",Oe,[e.phoneCodes.length===0?(g(),S("div",Te,[r(v,{class:"p-2 flex cursor-pointer"},{default:s(()=>[i(l(e.$t("core_fe_empty_phone_list")),1)]),_:1})])):(g(),S("div",Ke,[(g(!0),S(G,null,ce(e.phoneCodes,n=>(g(),S("div",{key:n.id,class:"w-96 flex py-4 px-2 hover:bg-fePrimary-50 dark:hover:bg-feSecondary-700 cursor-pointer items-center",onClick:E=>[e.form.phone_code=n.id]},[r(v,{class:R(["ms-2",n.id==e.form.phone_code?" font-bold":""])},{default:s(()=>[i(l(n.country_code),1)]),_:2},1032,["class"])],8,Fe))),128))]))])])]),_:1}),r(A,{class:"mt-2",onKeyup:me(e.clicked,["enter"]),onKeypress:e.validatePhone,type:"text",theme:"text-feSecondary-500 dark:bg-feSecondary-800",defaultBorder:"border border-feSecondary-200 dark:border-feSecondary-400 focus:outline-none focus:ring-1 focus:ring-fePrimary-500",placeholder:e.$t("phone_login__fe_phone_number_placeholderv2"),value:e.form.phone_string,"onUpdate:value":t[2]||(t[2]=n=>e.form.phone_string=n)},null,8,["onKeyup","onKeypress","placeholder","value"])]),r(p,{textColor:"text-feError-500 ",class:"mt-2 block"},{default:s(()=>[i(l(e.errors.user_ban),1)]),_:1}),e.isValidPhone?(g(),V(p,{key:1,class:"mt-2 mx-8",textColor:"text-fePrimary-500 dark:text-feAccent-500"},{default:s(()=>[i(l(e.$t("phone_login__phone_required")),1)]),_:1})):D("",!0),r(p,{textColor:"text-feError-500 ",class:"mt-2 block"},{default:s(()=>[i(l(e.phoneError),1)]),_:1}),e.code_data_ready?(g(),V(A,{key:2,class:"mt-4",type:"text",placeholder:e.$t("phone_login__code"),value:e.code,"onUpdate:value":t[3]||(t[3]=n=>e.code=n)},null,8,["placeholder","value"])):D("",!0),r(p,{textColor:"text-feError-500 ",class:"mt-2 block"},{default:s(()=>[i(l(e.codeError),1)]),_:1}),qe,We,Ze,d("div",Re,[e.authStore.loading.value?(g(),V(u,{key:0,class:"mt-6 w-full",disabled:!0},{default:s(()=>[i(l(e.$t("phone_login__loading")),1)]),_:1})):(g(),V(u,{key:1,class:"mt-6 w-full",onClick:e.clicked,disabled:!1},{default:s(()=>[i(l(e.$t("phone_login__login")),1)]),_:1},8,["onClick"]))]),d("div",Ge,[r(u,{colors:"bg-feAchromatic-50 dark:bg-feSecondary-800 dark:text-feSecondary-50 ",border:"border",class:"mt-6 w-full",onClick:e.loginClicked,disabled:!1},{default:s(()=>[i(l(e.$t("core__fe_btn_cancel")),1)]),_:1},8,["onClick"])])]),e.code_data_ready?(g(),S("div",Je)):D("",!0)],32)])])])],2),r(k,{ref:"user_phone_login_verification_modal"},null,512),r(C,{ref:"ps_error_dialog"},null,512),r(M,{ref:"ps_danger_dialog"},null,512)],64)}var It=Ve(Me,[["render",Ye]]);export{It as default};