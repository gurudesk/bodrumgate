import{Z as D,i as y,j as R,B,o as i,c as p,b as n,w as c,a as l,Y as E,f as h,F as A,s as V,n as M,t as v,g as N,q as F,r as a}from"./app.0e502cc5.js";import j from"./PsContentContainer.26532414.js";import{u as K}from"./CategoryStore.8359ddd4.js";import{u as U}from"./TouchCountStore.0d2b8ef3.js";import{u as Z}from"./AppInfoStore.266a6525.js";import{A as q}from"./AppInfoParameterHolder.e24d894d.js";import{T as G}from"./TouchCountParameterHolder.9ce47d98.js";import O from"./PsRouteLink.8f7df026.js";import W from"./PsBreadcrumb2.00bc7c75.js";import Y from"./PsIcon.dc31c2db.js";import J from"./PsButton.bc5ed803.js";import Q from"./PsLabel.3cf95094.js";import X from"./PsInput.e5044849.js";import $ from"./PsDropdown.f31a931d.js";import oo from"./PsDropdownSelect.8d0bad23.js";import to from"./PsLabelHeader4.fc9d9bf1.js";import eo from"./CategoryHorizontalItem.154a0537.js";import{P as z}from"./ps_constants.0e2a11f9.js";import ro from"./PsLoadingDialog.e4058754.js";import ao from"./PsFrontendLayout.64b287f7.js";import{P as io}from"./PsValueStore.a232cbb1.js";import no from"./PsInputWithRightIcon.f020751b.js";import so from"./PsNoResult.b11e5131.js";import{_ as lo}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsApiService.98e573c3.js";import"./Category.7c65464b.js";import"./DefaultIcon.e76b39a5.js";import"./PsObject.a17ef38f.js";import"./DefaultPhoto.cc755f93.js";import"./PsStore.f4ecabdb.js";import"./PsSepetetedStore.9a31ac47.js";import"./ApiStatus.5720ba0b.js";import"./PsLazyImage.38e4a2ae.js";import"./PsModal.20834757.js";import"./vue-neat-modal.d03c5dee.js";import"./PsLine.4597488d.js";import"./PsLabelTitle.41617619.js";import"./FooterView.1e68f849.js";import"./FooterLinkSection.714178c6.js";import"./PsLink.555685fa.js";import"./PsLabelCaption.a33ce9c4.js";import"./ProductParameterHolder.4354be0b.js";import"./CustomFieldStore.b038b00e.js";import"./PsNavTabBar.634541ec.js";import"./PsIconToggle.5f73bff4.js";import"./PsInputWithLeftIcon.ae1f5479.js";import"./ItemLocationTownshipStore.d4fe0c18.js";import"./ItemLocation.d1b92a80.js";import"./LocationParameterHolder.a5eab253.js";import"./PsUtils.78b0d4de.js";import"./PsNavBar.0669b7b7.js";import"./UserStore.ecd89ebd.js";import"./User.0c3ba1a8.js";import"./RatingDetail.291ad5d1.js";import"./ProductRelation.0b376978.js";import"./UserListParameterHolder.d110b747.js";import"./index.esm.159b9749.js";import"./auth.esm.925cebae.js";import"./UserUnReadMessageParameterHolder.181142c1.js";import"./AddToCartStore.3ffc08d4.js";import"./PsNotificationBox.8f065d5d.js";import"./ProductStore.279e879d.js";import"./Phone.45f97258.js";import"./Product.29c94914.js";import"./SubCategory.1b4176e0.js";import"./ItemCurrency.91c8ce91.js";import"./Vendor.d946ee87.js";import"./UserDeleteItemParameterHolder.5d816aba.js";import"./NotificationStore.656ac75f.js";import"./NotiUnRegisterHolder.eefb692e.js";import"https://unpkg.com/delayed-scroll-restoration-polyfill@0.1.1/index.js";const mo={name:"CategoryListView",components:{PsButton:J,PsContentContainer:j,PsBreadcrumb2:W,PsLabel:Q,PsLabelHeader4:to,CategoryHorizontalItem:eo,PsRouteLink:O,PsIcon:Y,PsInput:X,PsNoResult:so,PsDropdown:$,PsDropdownSelect:oo,PsLoadingDialog:ro,PsInputWithRightIcon:no,Head:D},props:["mobileSetting"],layout:ao,setup(s){var g,t;const e=K("cat"),I=Z(),o=new q;e.limit=(t=(g=s.mobileSetting)==null?void 0:g.default_loading_limit)!=null?t:12;const S=y(),u=y(!1);let C=y(""),b=y("");const m=io().getLoginUserId(),x=U(),d=new G,L=[{id:"0",orderBy:"name",orderType:z.FILTERING__ASC,name:"A to Z"},{id:"1",orderBy:"name",orderType:z.FILTERING__DESC,name:"Z to A"}],_=y(!0);setTimeout(async()=>{await f()},1e3);function H(r){C.value=r.id,b.value=r.name,e.paramHolder.orderBy=r.orderBy,e.paramHolder.orderType=r.orderType,f()}function k(){f()}async function f(){u.value=!0,await e.resetCategoryList(m,e.paramHolder),S.value.closeModal(),u.value=!1,_.value=!1}function T(){e.loadItemList(m,e.paramHolder)}async function w(r){d.typeName="category",d.typeId=r,d.userId=m,await x.postTouchCount(m,d)}return R(()=>{var r;o.userId=m,I.loadAppInfo(o),_.value==!0&&((r=e.itemList)==null?void 0:r.data)==null&&S.value.closeModal()}),{categoryStore:e,loadMore:T,currentsorting:L,sortingFilterClicked:H,activeSortingId:C,activeSortingName:b,ps_loading_dialog:S,searchClicked:k,loading:u,updateCategoryTouchCount:w,initial:_,appInfoStore:I}},computed:{breadcrumb(){return[{label:B("item_list__home"),url:route("dashboard")},{label:B("category_list__title"),color:"text-fePrimary-500"}]}}},co={class:"sm:mt-32 lg:mt-36 mt-28"},po={class:"flex flex-col sm:flex-row sm:justify-between items-start sm:items-center"},uo={class:"mb-6 sm:mb-0"},_o={class:"flex justify-end content-center items-center w-full"},fo={class:"bg-feAchromatic-50 dark:bg-feSecondary-800 shadow-xs w-44",role:"menu","aria-orientation":"vertical","aria-labelledby":"options-menu"},go=["onClick"],yo={class:"flex flex-row mb-8 mt-8"},ho={class:"w-full"},So={key:0,class:"grid grid-cols-4 sm:grid-cols-4 md:grid-cols-9 lg:grid-cols-12 xl:gap-6 gap-4 sm:gap-6"};function Co(s,e,I,o,S,u){const C=a("Head"),b=a("ps-breadcrumb-2"),P=a("ps-icon"),m=a("ps-input-with-right-icon"),x=a("ps-dropdown-select"),d=a("ps-dropdown"),L=a("category-horizontal-item"),_=a("ps-route-link"),H=a("ps-no-result"),k=a("ps-button"),f=a("ps-loading-dialog"),T=a("ps-content-container");return i(),p(A,null,[n(C,{title:s.$t("category_list__title")},null,8,["title"]),n(T,null,{content:c(()=>{var w,g;return[l("div",co,[l("div",po,[l("div",uo,[n(b,{items:u.breadcrumb,class:""},null,8,["items"])]),l("div",_o,[n(m,{onKeyup:E(o.searchClicked,["enter"]),value:o.categoryStore.paramHolder.keyword,"onUpdate:value":e[1]||(e[1]=t=>o.categoryStore.paramHolder.keyword=t),class:"sm:w-80 w-full",padding:"py-2 px-4 h-10",placeholder:s.$t("category__fe_search")},{icon:c(()=>[o.categoryStore.paramHolder.keyword==""?(i(),h(P,{key:0,name:"search",class:"cursor-pointer"})):(i(),h(P,{key:1,onClick:e[0]||(e[0]=t=>[o.categoryStore.paramHolder.keyword="",o.searchClicked()]),name:"cross",class:"cursor-pointer"}))]),_:1},8,["onKeyup","value","placeholder"]),n(d,{horizontalAlign:"right",h:"h-auto",class:"ms-4",rounded:"rounded-lg"},{select:c(()=>[n(x,{class:"h-10 w-10 sm:w-auto sm:ps-4 ps-2.5",border:"border border-1 border-feSecondary-200 dark:border-feSecondary-400",text:"text-sm font-medium text-feAchromatic-800 dark:text-feAchromatic-100 hidden sm:inline",iconTheme:"text-feAchromatic-800 ms-2 hidden sm:inline",leftIcon:"filter",leftIconTheme:"inline sm:hidden",selectedValue:o.activeSortingName,placeholder:s.$t("sort_by")},null,8,["selectedValue","placeholder"])]),list:c(()=>[l("div",fo,[(i(!0),p(A,null,V(o.currentsorting,t=>(i(),p("div",{key:t.id,class:"flex py-4 px-2 hover:bg-fePrimary-50 dark:hover:bg-feSecondary-500 cursor-pointer items-center",onClick:r=>o.sortingFilterClicked(t)},[l("span",{class:M(["ms-2 text-feSecondary-800 dark:text-feSecondary-200",t.id==o.activeSortingId?"font-semibold":""])},v(s.$t("core__fe_name"))+": "+v(t.name),3)],8,go))),128))])]),_:1})])]),l("div",yo,[l("div",ho,[((w=o.categoryStore.itemList)==null?void 0:w.data)!=null?(i(),p("div",So,[(i(!0),p(A,null,V(o.categoryStore.itemList.data,t=>{var r;return i(),p("div",{class:"w-full col-span-4 sm:col-span-2 md:col-span-3 lg:col-span-4 xl:col-span-3",key:t.catId},[n(_,{to:{name:(r=o.appInfoStore)!=null&&r.isShowSubCategory()?"fe_sub_category":"fe_item_list",query:{cat_id:t.catId,cat_name:t.catName,status:1}},onClick:bo=>o.updateCategoryTouchCount(t.catId)},{default:c(()=>[n(L,{category:t},null,8,["category"])]),_:2},1032,["to","onClick"])])}),128))])):N("",!0),o.categoryStore.loading.value==!1&&((g=o.categoryStore.itemList)==null?void 0:g.data)==null&&o.initial==!1?(i(),h(H,{key:1,onOnClick:o.loadMore},null,8,["onOnClick"])):N("",!0),o.categoryStore.loading.value==!1&&o.initial==!1?(i(),h(k,{key:2,class:M(["font-medium mx-auto mt-6",o.categoryStore.isNoMoreRecord.value?"hidden":""]),onClick:o.loadMore},{default:c(()=>[F(v(s.$t("category_list__load_more")),1)]),_:1},8,["onClick","class"])):o.initial==!1?(i(),h(k,{key:3,class:"font-medium mx-auto mt-8",onClick:o.loadMore,disabled:!0},{default:c(()=>[F(v(s.$t("category_list__loading")),1)]),_:1},8,["onClick"])):N("",!0)])])]),n(f,{ref:"ps_loading_dialog",class:"z-40"},null,512)]}),_:1})],64)}var Rt=lo(mo,[["render",Co]]);export{Rt as default};
