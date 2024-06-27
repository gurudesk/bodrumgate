import X from"./PsLabel.3cf95094.js";import Y from"./PsIcon.dc31c2db.js";import{u as Z}from"./ProductStore.279e879d.js";import{u as $}from"./CustomFieldStore.b038b00e.js";import{o,c as r,b as d,w as i,q as s,t as l,a as f,F as u,s as p,g as y,f as ee,r as W}from"./app.0e502cc5.js";import{_ as te}from"./plugin-vue_export-helper.21dcd24c.js";import"./ProductParameterHolder.4354be0b.js";import"./ps_constants.0e2a11f9.js";import"./Phone.45f97258.js";import"./PsObject.a17ef38f.js";import"./PsApiService.98e573c3.js";import"./Product.29c94914.js";import"./DefaultPhoto.cc755f93.js";import"./Category.7c65464b.js";import"./DefaultIcon.e76b39a5.js";import"./SubCategory.1b4176e0.js";import"./ItemCurrency.91c8ce91.js";import"./ItemLocation.d1b92a80.js";import"./ProductRelation.0b376978.js";import"./User.0c3ba1a8.js";import"./RatingDetail.291ad5d1.js";import"./Vendor.d946ee87.js";import"./ApiStatus.5720ba0b.js";import"./UserDeleteItemParameterHolder.5d816aba.js";import"./PsSepetetedStore.9a31ac47.js";import"./PsStore.f4ecabdb.js";const oe={name:"ItemDetailInfoCard",components:{PsLabel:X,PsIcon:Y},props:{productRelation:[],isSoldOutFeatureSettingOn:{type:Boolean,default:!0}},setup(){const m=Z("detail"),x=$("detail");return{productStore:m,itemCustomFieldStore:x}}},re={key:0,class:"flex items-center gap-3 mt-4"},de={key:1,class:"flex items-center gap-3 mt-4"},ae={key:2,class:"bg-feSecondary-50 dark:bg-feSecondary-800 rounded-lg px-2 py-4 lg:p-4 mt-6"},ie={class:"grid grid-cols-2 sm:grid-cols-4 gap-6"},se={key:0,class:""},le={class:"mt-6 px-2 py-4 lg:p-4 rounded-lg bg-feSecondary-50 dark:bg-feSecondary-800"},ce={class:"mt-6"},me={key:3},ne={class:"col-span-8 mt-6"},fe={class:"bg-feSecondary-50 dark:bg-feSecondary-800 rounded-lg px-2 py-4 lg:p-4 flex flex-col"},ue={key:0},ye={class:"grid grid-cols-2 sm:grid-cols-1 whitespace-pre-line h-full"},_e={key:0},pe={class:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3"};function xe(m,x,_,t,Se,ge){var g,k,h,I,K,b,v,C,V,F,O,P,w,R,B,N,D,L,q,E,T,j,z,A,G,H,J,M,Q;const S=W("ps-icon"),a=W("ps-label");return o(),r(u,null,[((k=(g=t.productStore.item)==null?void 0:g.data)==null?void 0:k.productRelation.filter(e=>e.coreKeysId=="ps-itm00008").length)!=0&&((b=(K=(I=(h=t.productStore.item)==null?void 0:h.data)==null?void 0:I.productRelation.filter(e=>e.coreKeysId=="ps-itm00008")[0])==null?void 0:K.selectedValue[0])==null?void 0:b.value)!=""?(o(),r("div",re,[d(S,{textColor:"text-fePrimary-500 dark:text-fePrimary-500",name:"case",w:"24",h:"24"}),d(a,{textColor:"text-base font-semibold text-feSecondary-600 dark:text-feSecondary-50"},{default:i(()=>[s(l(m.$t("item_detail__multi_item")),1)]),_:1})])):(o(),r("div",de,[d(S,{textColor:"text-fePrimary-500 dark:text-fePrimary-500",name:"case",w:"24",h:"24"}),d(a,{textColor:"text-base font-semibold text-feSecondary-600 dark:text-feSecondary-50"},{default:i(()=>[s(l(m.$t("item_detail__single_item")),1)]),_:1})])),_.productRelation.length>0||_.isSoldOutFeatureSettingOn?(o(),r("div",ae,[d(a,{textColor:"text-xl font-semibold text-feSecondary-800 dark:text-feSecondary-50"},{default:i(()=>[s(l(m.$t("item_detail__details")),1)]),_:1}),f("div",ie,[(o(!0),r(u,null,p(_.productRelation,e=>(o(),r("div",{key:e.id,class:""},[d(a,{textColor:"text-base font-medium text-feSecondary-800 dark:text-feSecondary-50"},{default:i(()=>{var c,n;return[s(l((n=(c=t.itemCustomFieldStore.customField.data)==null?void 0:c.customList.filter(U=>U.coreKeysId==e.coreKeysId&&U.isVisible=="1")[0])==null?void 0:n.name),1)]}),_:2},1024),d(a,{textColor:"text-sm font-normal text-feSecondary-600 dark:text-feSecondary-200"},{default:i(()=>[s(l(e.selectedValue[0].value),1)]),_:2},1024)]))),128)),_.isSoldOutFeatureSettingOn?(o(),r("div",se,[d(a,{textColor:"text-base font-medium text-feSecondary-800 dark:text-feSecondary-50"},{default:i(()=>[s(l(m.$t("item_detail__stock")),1)]),_:1}),d(a,{textColor:"text-sm font-normal text-feSecondary-600 dark:text-feSecondary-200"},{default:i(()=>{var e,c;return[s(l(((c=(e=t.productStore.item)==null?void 0:e.data)==null?void 0:c.isSoldOut)=="1"?m.$t("item_list__sold_item"):m.$t("item_detail__available")),1)]}),_:1})])):y("",!0)])])):y("",!0),f("div",le,[d(a,{textColor:"text-xl font-semibold text-feSecondary-800 dark:text-feSecondary-50"},{default:i(()=>[s(l(m.$t("item_detail__description")),1)]),_:1}),f("div",ce,[d(a,{textColor:"text-sm font-normal text-feSecondary-600 whitespace-pre-line dark:text-feSecondary-200"},{default:i(()=>{var e,c,n;return[s(l((e=t.productStore.item)!=null&&e.data?(n=(c=t.productStore.item)==null?void 0:c.data)==null?void 0:n.description:""),1)]}),_:1})])]),((C=(v=t.productStore.item)==null?void 0:v.data)==null?void 0:C.productRelation.filter(e=>e.coreKeysId=="ps-itm-rpt00005"||e.coreKeysId=="ps-itm00003").lenght)!=0&&((P=(O=(F=(V=t.productStore.item)==null?void 0:V.data)==null?void 0:F.productRelation.filter(e=>e.coreKeysId=="ps-itm-rpt00005"||e.coreKeysId=="ps-itm00003")[0])==null?void 0:O.selectedValue[0])==null?void 0:P.value)!=""||((R=(w=t.productStore.item)==null?void 0:w.data)==null?void 0:R.productRelation.filter(e=>e.coreKeysId!="ps-itm-rpt00005"&&e.coreKeysId!="ps-itm00003"&&e.coreKeysId!="ps-itm00002"&&e.coreKeysId!="ps-itm00004"&&e.coreKeysId!="ps-itm00007"&&e.coreKeysId!="ps-itm00008"&&e.coreKeysId!="ps-itm00009").length)!=0&&((L=(D=(N=(B=t.productStore.item)==null?void 0:B.data)==null?void 0:N.productRelation.filter(e=>e.coreKeysId!="ps-itm-rpt00005"&&e.coreKeysId!="ps-itm00003"&&e.coreKeysId!="ps-itm00002"&&e.coreKeysId!="ps-itm00004"&&e.coreKeysId!="ps-itm00007"&&e.coreKeysId!="ps-itm00008"&&e.coreKeysId!="ps-itm00009")[0])==null?void 0:D.selectedValue[0])==null?void 0:L.value)!=""||((E=(q=t.productStore.item)==null?void 0:q.data)==null?void 0:E.phone)!=null&&((j=(T=t.productStore.item)==null?void 0:T.data)==null?void 0:j.phone)!=""?(o(),r("div",me,[f("div",ne,[f("div",fe,[d(a,{textColor:"text-xl font-semibold text-feSecondary-800 dark:text-feSecondary-50"},{default:i(()=>[s(l(m.$t("item_detail__other_info")),1)]),_:1}),(o(!0),r(u,null,p((A=(z=t.productStore.item)==null?void 0:z.data)==null?void 0:A.productRelation.filter(e=>e.coreKeysId!="ps-itm00002"&&e.coreKeysId!="ps-itm00004"&&e.coreKeysId!="ps-itm00007"&&e.coreKeysId!="ps-itm00046"),e=>(o(),r("div",{key:e.id},[e.isVisible=="1"&&e.isDelete=="0"?(o(),r("div",ue,[d(a,{textColor:"text-base font-medium text-feSecondary-800 dark:text-feSecondary-50 mt-6"},{default:i(()=>[s(l(e.coreKeyName),1)]),_:2},1024),f("div",ye,[(o(!0),r(u,null,p(e.selectedValue,(c,n)=>(o(),ee(a,{key:n,textColor:"text-sm font-normal text-feSecondary-600 dark:text-feSecondary-200 mt-2"},{default:i(()=>[s(l(c.value),1)]),_:2},1024))),128))])])):y("",!0)]))),128)),((H=(G=t.productStore.item)==null?void 0:G.data)==null?void 0:H.phone)!=null&&((M=(J=t.productStore.item)==null?void 0:J.data)==null?void 0:M.phone)!=""?(o(),r("div",_e,[d(a,{textColor:"text-base font-medium text-feSecondary-800 dark:text-feSecondary-50 mt-6"},{default:i(()=>[s(l(m.$t("item_detail__contact_numbers")),1)]),_:1}),f("div",pe,[(o(!0),r(u,null,p((Q=t.productStore.item)==null?void 0:Q.data.phone.split("#"),(e,c)=>(o(),r("div",{key:c},[d(a,{textColor:"text-sm font-normal text-feSecondary-600 dark:text-feSecondary-200 mt-2"},{default:i(()=>[s(l(e),1)]),_:2},1024)]))),128))])])):y("",!0)])])])):y("",!0)],64)}var Me=te(oe,[["render",xe]]);export{Me as default};
