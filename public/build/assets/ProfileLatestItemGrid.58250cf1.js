import{j as y,o as e,c as i,a as m,b as l,w as n,q as c,t as d,F as f,s as g,f as h,h as P,g as L,r as a}from"./app.0e502cc5.js";import I from"./PsLabelHeader4.fc9d9bf1.js";import H from"./PsLabel.3cf95094.js";import z from"./PsButton.bc5ed803.js";import C from"./PsRouteLink.8f7df026.js";import N from"./PsAdSense.d6d1ce67.js";import A from"./ItemHorizontalItem.9fe729d0.js";import j from"./ItemHorizontalSkeletorItem.d3fa3697.js";import{u as B}from"./ProductStore.279e879d.js";import{u as M}from"./UserStore.ecd89ebd.js";import{P as V}from"./ProductParameterHolder.4354be0b.js";import{_ as D}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsValueStore.a232cbb1.js";import"./AppInfoStore.266a6525.js";import"./PsApiService.98e573c3.js";import"./PsObject.a17ef38f.js";import"./DefaultPhoto.cc755f93.js";import"./ps_constants.0e2a11f9.js";import"./AppInfoParameterHolder.e24d894d.js";import"./PsLabelTitle4.438736dc.js";import"./PsCard.ba2c0a4b.js";import"./PsIcon.dc31c2db.js";import"./format.min.502eec0f.js";import"./PsLazyImage.38e4a2ae.js";import"./Product.29c94914.js";import"./Category.7c65464b.js";import"./DefaultIcon.e76b39a5.js";import"./SubCategory.1b4176e0.js";import"./ItemCurrency.91c8ce91.js";import"./ItemLocation.d1b92a80.js";import"./ProductRelation.0b376978.js";import"./User.0c3ba1a8.js";import"./RatingDetail.291ad5d1.js";import"./Vendor.d946ee87.js";import"./PsValueHolder.a0cf6b69.js";import"./FavouriteItemStore.46fa4312.js";import"./PsSepetetedStore.9a31ac47.js";import"./FollowItemParameterHolder.5bc5189c.js";import"./PsUtils.78b0d4de.js";import"./moment.9709ab41.js";import"./Phone.45f97258.js";import"./ApiStatus.5720ba0b.js";import"./UserDeleteItemParameterHolder.5d816aba.js";import"./vue-skeletor.esm.de6e6d28.js";/* empty css                     */import"./UserListParameterHolder.d110b747.js";const F={name:"ProfileLatestItemGrid",components:{PsLabelHeader4:I,PsLabel:H,PsButton:z,PsRouteLink:C,PsAdSense:N,ItemHorizontalItem:A,ItemHorizontalSkeletorItem:j},props:{userId:{type:String}},setup(o){const r=B();let p=M("other");r.paramHolder=new V().getLatestParameterHolder(),r.paramHolder.addedUserId=o.userId;function t(){r.loadItemList(o.userId,r.paramHolder)}return y(async()=>{setTimeout(async()=>{window.popStateDetected?window.popStateDetected=!1:r.resetProductList(o.userId,r.paramHolder)},1e3)}),{itemStore:r,userStore:p,loadMoreActivePost:t}}},q={key:0,class:"w-full col-span-4 sm:col-span-6 lg:col-span-9"},R={class:"w-full sm:mt-2"},T={class:"w-full h-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6"},U={key:0,class:"flex justify-center mt-6 mb-4"},E={class:"mx-auto"},G={key:1,class:"w-full col-span-4 sm:col-span-6 lg:col-span-9 mt-4 mb-6"},J={class:"w-full"},K={class:"grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6"},O={key:2,class:"col-span-4 sm:col-span-6 lg:col-span-9 mt-2 mb-6 w-full flex justify-center"};function Q(o,r,p,t,W,X){var u;const k=a("ps-label-header-4"),x=a("item-horizontal-item"),v=a("ps-route-link"),_=a("ps-button"),w=a("ps-ad-sense"),S=a("item-horizontal-skeletor-item"),b=a("ps-label");return((u=t.itemStore.itemList)==null?void 0:u.data)!=null?(e(),i("div",q,[m("div",R,[l(k,{class:"mt-8 mb-6 sm:mt-0 font-medium"},{default:n(()=>[c(d(t.userStore.user.data?t.userStore.user.data.userName+"'s":"")+" "+d(o.$t("other_profile__active_post")),1)]),_:1}),m("div",T,[(e(!0),i(f,null,g(t.itemStore.itemList.data,s=>(e(),i("div",{class:"w-full h-full",key:s.id},[l(v,{to:{name:"item",params:{itemName:s.title.split(" ").join("-").toLowerCase(),imgName:s.defaultPhoto.imgPath},query:{item_id:s.id,item_name:s.title.split(" ").join("-").toLowerCase()}}},{default:n(()=>[l(x,{item:s},null,8,["item"])]),_:2},1032,["to"])]))),128))])]),t.itemStore.isNoMoreRecord.value==!1?(e(),i("div",U,[t.itemStore.loading.value==!1?(e(),h(_,{key:0,onClick:P(t.loadMoreActivePost,["prevent"]),class:"flex flex-row",theme:"bg-fePrimary-500 dark:bg-feAccent-500 text-feAchromatic-50 dark:text-feAchromatic-900 capitalize px-4 py-1"},{default:n(()=>[c(d(o.$t("blog_list__load_more")),1)]),_:1},8,["onClick"])):(e(),h(_,{key:1,class:"mx-auto mt-8",disabled:!0},{default:n(()=>[c(d(o.$t("list__loading")),1)]),_:1}))])):L("",!0),m("div",E,[l(w,{adFormat:"horizontal"})])])):t.itemStore.itemList!=null&&t.itemStore.loading.value?(e(),i("div",G,[m("div",J,[m("div",K,[(e(),i(f,null,g(6,s=>m("div",{class:"w-full",key:s},[l(S)])),64))])])])):(e(),i("div",O,[l(b,{textColor:"text-feSecondary-500 dark:text-feAchromatic-50 lg:text-xl sm:text-lg text-base font-medium",class:"mt-10 flex-grow-0 mx-auto"},{default:n(()=>[c(d(o.$t("list__no_result")),1)]),_:1})]))}var Et=D(F,[["render",Q]]);export{Et as default};
