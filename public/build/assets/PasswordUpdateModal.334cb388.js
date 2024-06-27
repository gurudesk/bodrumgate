import O from"./PsModal.20834757.js";import U from"./PsLabel.3cf95094.js";import I from"./PsLabelCaption.a33ce9c4.js";import E from"./PsLabelTitle.41617619.js";import B from"./PsButton.bc5ed803.js";import D from"./PsSecondaryButton.d0a9ccd7.js";import L from"./PsErrorDialog.cf13beac.js";import N from"./PsSuccessDialog.0e8a212b.js";import V from"./PsLoadingDialog.ab0b3af1.js";import q from"./PsInput.e5044849.js";import{C as z}from"./ChangePasswordParameterHolder.4af4401a.js";import{u as R}from"./UserStore.ecd89ebd.js";import{P as K}from"./PsValueStore.a232cbb1.js";import{b as M}from"./PsApiService.98e573c3.js";import{d as j,i as d,y as F,o as T,c as W,b as s,w as a,q as p,t as i,a as f,F as A,B as m,O as G,r as n}from"./app.0e502cc5.js";import J from"./PsIcon.dc31c2db.js";import Q from"./PsInputWithRightIcon.f020751b.js";import{_ as X}from"./plugin-vue_export-helper.21dcd24c.js";import"./vue-neat-modal.d03c5dee.js";import"./PsLine.4597488d.js";import"./User.0c3ba1a8.js";import"./PsObject.a17ef38f.js";import"./RatingDetail.291ad5d1.js";import"./ProductRelation.0b376978.js";import"./DefaultPhoto.cc755f93.js";import"./ps_constants.0e2a11f9.js";import"./PsSepetetedStore.9a31ac47.js";import"./UserListParameterHolder.d110b747.js";import"./ApiStatus.5720ba0b.js";const Y=j({name:"PasswordUpdateModal",components:{PsModal:O,PsLabel:U,PsButton:B,PsErrorDialog:L,PsLoadingDialog:V,PsInput:q,PsLabelTitle:E,PsSuccessDialog:N,PsSecondaryButton:D,PsIcon:J,PsInputWithRightIcon:Q,PsLabelCaption:I},setup(){const o=K().getLoginUserId(),S=d(!0),h=d(!0),C=d(!0),w=d(),t=d(),u=d(),_=d(),c=d(""),v=d(""),y=d(""),l=F(new z),g=R();async function b(){t.value.openModal(),await g.loadUser(o),t.value.closeModal()}async function P(){w.value.toggle(!0),await b()}function r(){w.value.toggle(!1)}async function x(){var H,$;if(l.userPassword.trim()==""){v.value=m("password_update_modal__psw_required_error");return}if(l.confPassword.trim()==""){y.value=m("password_update_modal__confirm_psw_required_error");return}if(l.userOldPassword.trim()==""){c.value=m("password_update_modal__old_psw_required_error");return}if(l.userPassword.trim()!=l.confPassword.trim()){y.value=m("password_update_modal__psws_not_same_error");return}t.value.openModal(),l.userId=($=(H=g.user)==null?void 0:H.data)==null?void 0:$.userId;const k=await g.postChangePassword(l,o);t.value.closeModal(),k.status==M.ERROR?u.value.openModal(m("password_update_modal__error"),k.message,m("password_update_modal__ok"),()=>{}):k.status==M.SUCCESS&&(_.value.openModal(m("password_update_modal__success"),m("password_update_modal__psw_update_success"),m("password_update_modal__continue"),()=>{G.get(route("login"))}),w.value.toggle(!1))}return{psmodal:w,openModal:P,submitClicked:x,psloading:t,ps_error_dialog:u,paramHolder:l,ps_success_dialog:_,closeModal:r,isHide:S,isHide1:h,isHide2:C,conf_psw_error:y,old_psw_error:c,new_psw_error:v}}}),Z={class:"flex justify-between w-68 sm:w-80 mx-auto"},ee={class:"flex flex-col w-full mt-5"},oe=f("span",{style:{"font-size":"17px",color:"red"}},"*",-1),se=f("span",{style:{"font-size":"17px",color:"red"}},"*",-1),re=f("span",{style:{"font-size":"17px",color:"red"}},"*",-1),ae={class:"flex mt-8 flex-col w-68 sm:w-80 mx-auto"};function te(e,o,S,h,C,w){const t=n("ps-icon"),u=n("ps-label"),_=n("ps-input-with-right-icon"),c=n("ps-label-caption"),v=n("ps-button"),y=n("ps-secondary-button"),l=n("ps-modal"),g=n("ps-loading-dialog"),b=n("ps-error-dialog"),P=n("ps-success-dialog");return T(),W(A,null,[s(l,{ref:"psmodal",theme:"p-2 dark:bg-feAchromatic-50 dark:bg-feSecondary-900 border rounded-xl",maxWidth:"408px",visibleLine:!1,isClickOut:!0,class:"z-50"},{title:a(()=>[s(t,{onClick:o[0]||(o[0]=r=>e.closeModal()),name:"close",class:"text-sm text-feSecondary-400 ms-auto my-auto focus:shadow-none hover:text-purple-500 flex justify-end"}),s(u,{class:"text-center text-xl font-semibold"},{default:a(()=>[p(i(e.$t("password_update_modal__update_password")),1)]),_:1})]),body:a(()=>[f("div",Z,[f("div",ee,[s(u,{class:"mt-5 mb-2 text-sm"},{default:a(()=>[p(i(e.$t("password_update_modal__old_password"))+" ",1),oe]),_:1}),s(_,{onKeypress:o[2]||(o[2]=r=>e.old_psw_error=""),value:e.paramHolder.userOldPassword,"onUpdate:value":o[3]||(o[3]=r=>e.paramHolder.userOldPassword=r),className:"dark:bg-feSecondary-900 w-full text-sm shadow-sm",placeholderColor:" placeholder-feSecondary-800 dark:placeholder-feSecondary-500",type:e.isHide?"password":"text",placeholder:e.$t("password_update_modal__old_password_placeholder")},{icon:a(()=>[s(t,{h:24,w:24,onClick:o[1]||(o[1]=r=>e.isHide=!e.isHide),class:"cursor-pointer",theme:" text-feSecondary-800 dark:text-feSecondary-300",name:e.isHide?"eyeOff":"eye-on"},null,8,["name"])]),_:1},8,["value","type","placeholder"]),s(c,{textColor:"text-feError-500 ",class:"mt-1 block"},{default:a(()=>[p(i(e.old_psw_error),1)]),_:1}),s(u,{class:"mt-5 mb-2 text-sm"},{default:a(()=>[p(i(e.$t("password_update_modal__password"))+" ",1),se]),_:1}),s(_,{className:"dark:bg-feSecondary-900 w-full text-sm shadow-sm",onKeypress:o[5]||(o[5]=r=>e.new_psw_error=""),value:e.paramHolder.userPassword,"onUpdate:value":o[6]||(o[6]=r=>e.paramHolder.userPassword=r),placeholderColor:" placeholder-feSecondary-800 dark:placeholder-feSecondary-500",type:e.isHide1?"password":"text",placeholder:e.$t("password_update_modal__password_placeholder")},{icon:a(()=>[s(t,{h:24,w:24,onClick:o[4]||(o[4]=r=>e.isHide1=!e.isHide1),class:"cursor-pointer",theme:" text-feSecondary-800 dark:text-feSecondary-300",name:e.isHide1?"eyeOff":"eye-on"},null,8,["name"])]),_:1},8,["value","type","placeholder"]),s(c,{textColor:"text-feError-500 ",class:"mt-1 block"},{default:a(()=>[p(i(e.new_psw_error),1)]),_:1}),s(u,{class:"mt-5 mb-2 text-sm"},{default:a(()=>[p(i(e.$t("password_update_modal__confirm_password"))+" ",1),re]),_:1}),s(_,{className:"dark:bg-feSecondary-900 w-full text-sm shadow-sm",onKeypress:o[8]||(o[8]=r=>e.conf_psw_error=""),value:e.paramHolder.confPassword,"onUpdate:value":o[9]||(o[9]=r=>e.paramHolder.confPassword=r),placeholderColor:" placeholder-feSecondary-800 dark:placeholder-feSecondary-500",type:e.isHide2?"password":"text",placeholder:e.$t("password_update_modal__confirm_password_placeholder")},{icon:a(()=>[s(t,{h:24,w:24,onClick:o[7]||(o[7]=r=>e.isHide2=!e.isHide2),class:"cursor-pointer",theme:" text-feSecondary-800 dark:text-feSecondary-300",name:e.isHide2?"eyeOff":"eye-on"},null,8,["name"])]),_:1},8,["value","type","placeholder"]),s(c,{textColor:"text-feError-500 ",class:"mt-1 block"},{default:a(()=>[p(i(e.conf_psw_error),1)]),_:1})])])]),footer:a(()=>[f("div",ae,[s(v,{class:"text-center",onClick:e.submitClicked},{default:a(()=>[p(i(e.$t("password_update_modal__update")),1)]),_:1},8,["onClick"]),s(y,{class:"mt-4 mb-2 text-center",onClick:o[10]||(o[10]=r=>e.closeModal())},{default:a(()=>[p(i(e.$t("password_update_modal__cancel")),1)]),_:1})])]),_:1},512),s(g,{ref:"psloading",isClickOut:!1},null,512),s(b,{ref:"ps_error_dialog"},null,512),s(P,{ref:"ps_success_dialog"},null,512)],64)}var De=X(Y,[["render",te]]);export{De as default};
