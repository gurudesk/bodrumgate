import{d as P,Z as v,i as g,o as x,c as S,b as t,w as s,a as C,q as d,t as f,F as $,B as m,O as U,r as e}from"./app.0e502cc5.js";import{P as h}from"./PsValueStore.a232cbb1.js";import{u as y}from"./UserStore.ecd89ebd.js";import{U as w}from"./UserDeleteItemParameterHolder.5d816aba.js";import{b}from"./PsApiService.98e573c3.js";import B from"./PsContentContainer.26532414.js";import L from"./PsFrontendLayout.64b287f7.js";import V from"./PsButton.bc5ed803.js";import A from"./PsLabel.3cf95094.js";import F from"./PsConfirmDialog.6612fba4.js";import H from"./PsLoadingDialog.e4058754.js";import{_ as I}from"./plugin-vue_export-helper.21dcd24c.js";import"./User.0c3ba1a8.js";import"./PsObject.a17ef38f.js";import"./RatingDetail.291ad5d1.js";import"./ProductRelation.0b376978.js";import"./DefaultPhoto.cc755f93.js";import"./ps_constants.0e2a11f9.js";import"./PsSepetetedStore.9a31ac47.js";import"./UserListParameterHolder.d110b747.js";import"./ApiStatus.5720ba0b.js";import"./FooterView.1e68f849.js";import"./FooterLinkSection.714178c6.js";import"./PsLink.555685fa.js";import"./PsRouteLink.8f7df026.js";import"./PsLabelCaption.a33ce9c4.js";import"./PsIcon.dc31c2db.js";import"./ProductParameterHolder.4354be0b.js";import"./AppInfoStore.266a6525.js";import"./CustomFieldStore.b038b00e.js";import"./PsStore.f4ecabdb.js";import"./PsNavTabBar.634541ec.js";import"./PsDropdown.f31a931d.js";import"./PsDropdownSelect.8d0bad23.js";import"./PsIconToggle.5f73bff4.js";import"./PsInputWithLeftIcon.ae1f5479.js";import"./ItemLocationTownshipStore.d4fe0c18.js";import"./ItemLocation.d1b92a80.js";import"./LocationParameterHolder.a5eab253.js";import"./PsUtils.78b0d4de.js";import"./AppInfoParameterHolder.e24d894d.js";import"./PsNavBar.0669b7b7.js";import"./index.esm.159b9749.js";import"./auth.esm.925cebae.js";import"./UserUnReadMessageParameterHolder.181142c1.js";import"./AddToCartStore.3ffc08d4.js";import"./PsLine.4597488d.js";import"./PsNotificationBox.8f065d5d.js";import"./ProductStore.279e879d.js";import"./Phone.45f97258.js";import"./Product.29c94914.js";import"./Category.7c65464b.js";import"./DefaultIcon.e76b39a5.js";import"./SubCategory.1b4176e0.js";import"./ItemCurrency.91c8ce91.js";import"./Vendor.d946ee87.js";import"./NotificationStore.656ac75f.js";import"./NotiUnRegisterHolder.eefb692e.js";import"https://unpkg.com/delayed-scroll-restoration-polyfill@0.1.1/index.js";import"./PsModal.20834757.js";import"./vue-neat-modal.d03c5dee.js";import"./PsLabelTitle.41617619.js";const O=P({name:"DataDeletionRequestForm",components:{PsContentContainer:B,Head:v,PsButton:V,PsLabel:A,PsConfirmDialog:F,PsLoadingDialog:H},layout:L,setup(){const o=h(),r=y(),u=o.getLoginUserId(),p=new w,l=g(),i=g();function c(){l.value.openModal(m("core_fe__data_deletion_confirm_title"),m("core_fe__data_deletion_confirm_message"),m("core_fe__data_deletion_confirm_ok"),m("core_fe__cancel"),()=>{n(u)},()=>{})}async function n(_){p.userId=_,i.value.openModal();const a=await r.postDeleteUser(p);i.value.closeModal(),a.status!=b.ERROR&&a.status==b.SUCCESS&&U.post(route("logout"))}return{ps_confirm_dialog:l,psloading:i,deleteClick:c}}}),R={class:"mt-32 mb-10 grid grid-cols-8"},E={class:"w-full sm:col-start-2 sm:col-span-6 col-span-8 rounded border p-4 flex flex-col gap-3 dark:bg-feAchromatic-800 dark:border-feAchromatic-600"};function M(o,r,u,p,l,i){const c=e("Head"),n=e("ps-label"),_=e("ps-button"),a=e("ps-content-container"),k=e("ps-confirm-dialog"),D=e("ps-loading-dialog");return x(),S($,null,[t(c,{title:o.$t("user_list__users")},null,8,["title"]),t(a,null,{content:s(()=>[C("div",R,[C("div",E,[t(n,{textColor:"text-xl font-semibold text-feSecondary-800 dark:text-feAchromatic-200"},{default:s(()=>[d(f(o.$t("core_fe__data_deletion_title")),1)]),_:1}),t(n,{textColor:"text-feSecondary-800 dark:text-feAchromatic-200"},{default:s(()=>[d(f(o.$t("core_fe__data_deletion_description")),1)]),_:1}),t(_,{onClick:r[0]||(r[0]=N=>o.deleteClick())},{default:s(()=>[d(f(o.$t("core_fe__data_deletion_delete")),1)]),_:1})])])]),_:1}),t(k,{ref:"ps_confirm_dialog"},null,512),t(D,{ref:"psloading",isClickOut:!1},null,512)],64)}var Wo=I(O,[["render",M]]);export{Wo as default};