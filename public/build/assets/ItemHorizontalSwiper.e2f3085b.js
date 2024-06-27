import{S as k,a as h,b as y}from"./vue-splide.esm.9c0b6177.js";/* empty css                        */import b from"./ItemHorizontalItem.9fe729d0.js";import v from"./PsRouteLink.8f7df026.js";import x from"./PsIcon.dc31c2db.js";import L from"./ItemHorizontalSkeletorItem.d3fa3697.js";import{u as I}from"./AppInfoStore.266a6525.js";import{_ as P}from"./plugin-vue_export-helper.21dcd24c.js";import{o as t,c as f,b as o,w as r,f as i,g as m,F as z,s as N,a as d,n as B,r as a}from"./app.0e502cc5.js";import"./PsLabel.3cf95094.js";import"./PsLabelTitle4.438736dc.js";import"./PsCard.ba2c0a4b.js";import"./ps_constants.0e2a11f9.js";import"./PsAdSense.d6d1ce67.js";import"./PsValueStore.a232cbb1.js";import"./AppInfoParameterHolder.e24d894d.js";import"./PsApiService.98e573c3.js";import"./PsObject.a17ef38f.js";import"./DefaultPhoto.cc755f93.js";import"./format.min.502eec0f.js";import"./PsLazyImage.38e4a2ae.js";import"./Product.29c94914.js";import"./Category.7c65464b.js";import"./DefaultIcon.e76b39a5.js";import"./SubCategory.1b4176e0.js";import"./ItemCurrency.91c8ce91.js";import"./ItemLocation.d1b92a80.js";import"./ProductRelation.0b376978.js";import"./User.0c3ba1a8.js";import"./RatingDetail.291ad5d1.js";import"./Vendor.d946ee87.js";import"./PsValueHolder.a0cf6b69.js";import"./ProductStore.279e879d.js";import"./ProductParameterHolder.4354be0b.js";import"./Phone.45f97258.js";import"./ApiStatus.5720ba0b.js";import"./UserDeleteItemParameterHolder.5d816aba.js";import"./PsSepetetedStore.9a31ac47.js";import"./FavouriteItemStore.46fa4312.js";import"./FollowItemParameterHolder.5bc5189c.js";import"./PsUtils.78b0d4de.js";import"./moment.9709ab41.js";import"./vue-skeletor.esm.de6e6d28.js";/* empty css                     */const C={name:"ItemHorizontalSwiper",components:{Splide:k,SplideSlide:h,SplideTrack:y,ItemHorizontalItem:b,ItemHorizontalSkeletorItem:L,PsRouteLink:v,PsIcon:x},props:{itemList:Object,filteredList:Object,notShowTitle:{type:Boolean,default:!1},storeName:{type:String,default:""},isLoading:{type:Boolean,default:!1}},setup(g){const c=I(),e={rewind:!0,gap:"1.5rem",perPage:4,focus:0,omitEnd:!0,pagination:!1,direction:n(),breakpoints:{1536:{perPage:4},1280:{perPage:3},1024:{perPage:3},768:{perPage:2},640:{perPage:1},200:{perPage:1}}};function n(){return localStorage.activeLanguage!=null&&localStorage.activeLanguage!=null&&localStorage.activeLanguage=="ar"?"rtl":"ltr"}return{options:e,getDir:n,appInfoStore:c}}},H={class:"bg-feSecondary-50 dark:bg-feSecondary-800 w-10 h-10 rounded shadow-sm p-2 arrow splide__arrow--prev",type:"button","aria-label":"Previous slide","aria-controls":"splide01-track"},T={class:"bg-feSecondary-50 dark:bg-feSecondary-800 w-10 h-10 rounded shadow-sm p-2 arrow splide__arrow--next",type:"button","aria-label":"Next slide","aria-controls":"splide01-track"};function R(g,c,e,n,V,j){const p=a("item-horizontal-skeletor-item"),s=a("splide-slide"),_=a("item-horizontal-item"),w=a("splide-track"),u=a("ps-icon"),S=a("splide");return t(),f("div",null,[o(S,{options:n.options,"has-track":!1},{default:r(()=>[o(w,null,{default:r(()=>[e.isLoading?(t(),i(s,{key:0},{default:r(()=>[o(p)]),_:1})):m("",!0),e.isLoading?(t(),i(s,{key:1},{default:r(()=>[o(p)]),_:1})):m("",!0),e.isLoading?(t(),i(s,{key:2},{default:r(()=>[o(p)]),_:1})):m("",!0),e.isLoading?(t(),i(s,{key:3},{default:r(()=>[o(p)]),_:1})):m("",!0),(t(!0),f(z,null,N(e.itemList,l=>(t(),i(s,{key:l.id},{default:r(()=>[l.title==""?(t(),i(_,{key:0,item:l},null,8,["item"])):(t(),i(_,{key:1,item:l,notShowTitle:e.notShowTitle,storeName:e.storeName},null,8,["item","notShowTitle","storeName"]))]),_:2},1024))),128))]),_:1}),d("div",{class:B("splide__arrows splide__arrows--"+n.getDir())},[d("button",H,[o(u,{textColor:"dark:text-feSecondary-200",name:"arrowNarrowRight",h:"23",w:"23",viewBox:"0 -3 9 20"})]),d("button",T,[o(u,{textColor:"dark:text-feSecondary-200",name:"arrowNarrowRight",h:"23",w:"23",viewBox:"0 -3 9 20"})])],2)]),_:1},8,["options"])])}var Pe=P(C,[["render",R],["__scopeId","data-v-518a5854"]]);export{Pe as default};