import{Z as S,B as k,o as e,c as r,b as s,w as d,a as o,q as f,t as v,F as g,s as x,f as y,n as z,r as i}from"./app.0e502cc5.js";import B from"./PsContentContainer.26532414.js";import V from"./PsLabelHeader4.fc9d9bf1.js";import N from"./PsLabel.3cf95094.js";import R from"./PsButton.bc5ed803.js";import M from"./PsNoDataList.2ab5e9f7.js";import j from"./PsIcon.dc31c2db.js";import F from"./PsRouteLink.8f7df026.js";import U from"./ItemHorizontalItem.9fe729d0.js";import A from"./ItemHorizontalSkeletorItem.d3fa3697.js";import{P as D}from"./PsValueStore.a232cbb1.js";import{u as q}from"./ProductStore.279e879d.js";import{P as E}from"./ProductParameterHolder.4354be0b.js";import T from"./PsFrontendLayout.64b287f7.js";/* empty css                     */import Z from"./PsBreadcrumb2.00bc7c75.js";import{_ as G}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsLabelTitle4.438736dc.js";import"./PsCard.ba2c0a4b.js";import"./ps_constants.0e2a11f9.js";import"./PsAdSense.d6d1ce67.js";import"./AppInfoStore.266a6525.js";import"./PsApiService.98e573c3.js";import"./PsObject.a17ef38f.js";import"./DefaultPhoto.cc755f93.js";import"./AppInfoParameterHolder.e24d894d.js";import"./format.min.502eec0f.js";import"./PsLazyImage.38e4a2ae.js";import"./Product.29c94914.js";import"./Category.7c65464b.js";import"./DefaultIcon.e76b39a5.js";import"./SubCategory.1b4176e0.js";import"./ItemCurrency.91c8ce91.js";import"./ItemLocation.d1b92a80.js";import"./ProductRelation.0b376978.js";import"./User.0c3ba1a8.js";import"./RatingDetail.291ad5d1.js";import"./Vendor.d946ee87.js";import"./PsValueHolder.a0cf6b69.js";import"./FavouriteItemStore.46fa4312.js";import"./PsSepetetedStore.9a31ac47.js";import"./FollowItemParameterHolder.5bc5189c.js";import"./PsUtils.78b0d4de.js";import"./moment.9709ab41.js";import"./Phone.45f97258.js";import"./ApiStatus.5720ba0b.js";import"./UserDeleteItemParameterHolder.5d816aba.js";import"./vue-skeletor.esm.de6e6d28.js";import"./FooterView.1e68f849.js";import"./FooterLinkSection.714178c6.js";import"./PsLink.555685fa.js";import"./PsLabelCaption.a33ce9c4.js";import"./CustomFieldStore.b038b00e.js";import"./PsStore.f4ecabdb.js";import"./PsNavTabBar.634541ec.js";import"./PsDropdown.f31a931d.js";import"./PsDropdownSelect.8d0bad23.js";import"./PsIconToggle.5f73bff4.js";import"./PsInputWithLeftIcon.ae1f5479.js";import"./ItemLocationTownshipStore.d4fe0c18.js";import"./LocationParameterHolder.a5eab253.js";import"./PsNavBar.0669b7b7.js";import"./UserStore.ecd89ebd.js";import"./UserListParameterHolder.d110b747.js";import"./index.esm.159b9749.js";import"./auth.esm.925cebae.js";import"./UserUnReadMessageParameterHolder.181142c1.js";import"./AddToCartStore.3ffc08d4.js";import"./PsLine.4597488d.js";import"./PsNotificationBox.8f065d5d.js";import"./NotificationStore.656ac75f.js";import"./NotiUnRegisterHolder.eefb692e.js";import"https://unpkg.com/delayed-scroll-restoration-polyfill@0.1.1/index.js";const J={name:"ActiveItemListView",components:{PsContentContainer:B,PsLabelHeader4:V,PsLabel:N,ItemHorizontalItem:U,PsButton:R,PsIcon:j,ItemHorizontalSkeletorItem:A,PsRouteLink:F,PsBreadcrumb2:Z,PsNoData:M,Head:S},props:["mobileSetting"],layout:T,setup(m){var n,c;const l=D().getLoginUserId(),t=q("active");t.limit=(c=(n=m.mobileSetting)==null?void 0:n.default_loading_limit)!=null?c:12;const a=new E().resetParameterHolder();a.addedUserId=l,t.resetProductList(l,a);function _(){t.loadItemList(l,a)}function u(){t.resetProductList(l,a)}return{itemactiveProvider:t,loadMore:_,handleRefresh:u}},computed:{breadcrumb(){return[{label:k("ps_nav_bar__profile"),url:route("fe_profile")},{label:k("list__active_items_list"),color:"text-fePrimary-500"}]}}},K={class:"mt-32"},O={class:""},Q={class:"lg:flex md:flex lg:justify-between md:justify-between mt-6"},W={class:"flex flex-col mt-6"},X={class:"flex flex-row mb-8"},Y={class:"w-full flex flex-col"},$={key:0},tt={class:"grid grid-cols-4 sm:grid-cols-4 md:grid-cols-9 lg:grid-cols-12 md:gap-6 gap-4"},ot={key:1},et={class:"w-full grid lg:grid-cols-12 sm:grid-cols-8 grid-cols-4 gap-4 sm:gap-3.5 lg:gap-4"},it={key:2,class:"flex justify-center flex flex-col"},rt={class:"mb-10"};function st(m,L,l,t,a,_){const u=i("Head"),n=i("ps-breadcrumb-2"),c=i("ps-label-header-4"),w=i("item-horizontal-item"),I=i("item-horizontal-skeletor-item"),H=i("ps-no-data"),h=i("ps-button"),C=i("ps-content-container");return e(),r(g,null,[s(u,{title:m.$t("list__active_items_list")},null,8,["title"]),s(C,null,{content:d(()=>{var b,P;return[o("div",K,[o("div",O,[s(n,{items:_.breadcrumb,class:""},null,8,["items"])]),o("div",Q,[s(c,{class:"font-medium"},{default:d(()=>[f(v(m.$t("active_item_list__active_item_list")),1)]),_:1})]),o("div",W,[o("div",X,[o("div",Y,[((b=t.itemactiveProvider.itemList)==null?void 0:b.data)!=null?(e(),r("div",$,[o("div",tt,[(e(!0),r(g,null,x(t.itemactiveProvider.itemList.data,p=>(e(),r("div",{class:"w-full col-span-4 sm:col-span-2 md:col-span-3 lg:col-span-4 xl:col-span-3",key:p.id},[s(w,{item:p,storeName:"active"},null,8,["item"])]))),128))])])):t.itemactiveProvider.loading.value==!0?(e(),r("div",ot,[o("div",et,[(e(),r(g,null,x(3,p=>o("div",{class:"w-full col-span-2 lg:col-span-3",key:p},[s(I)])),64))])])):(e(),r("div",it,[s(H,{onHandleRefresh:t.handleRefresh,name:"list__active_items_no_result"},null,8,["onHandleRefresh"])]))])]),o("div",rt,[t.itemactiveProvider.loading.value==!1?(e(),y(h,{key:0,class:z(["w-60 mx-auto mt-8",t.itemactiveProvider.isNoMoreRecord.value==!0||((P=t.itemactiveProvider.itemList)==null?void 0:P.data)==null?"hidden":""]),onClick:t.loadMore},{default:d(()=>[f(v(m.$t("list__load_more")),1)]),_:1},8,["onClick","class"])):(e(),y(h,{key:1,class:"w-60 mx-auto mt-8",onClick:t.loadMore,disabled:!0},{default:d(()=>[f(v(m.$t("list__loading")),1)]),_:1},8,["onClick"]))])])])]}),_:1})],64)}var Io=G(J,[["render",st]]);export{Io as default};
