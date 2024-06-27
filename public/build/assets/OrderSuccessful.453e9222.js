import{Z as J,i as S,j as K,o as x,c as _,a as r,b as e,w as m,q as c,t as n,F as R,s as W,m as X,g as Y,O as ee,r as h,E as te}from"./app.0e502cc5.js";import oe from"./PsLabel.3cf95094.js";import re from"./PsIcon.dc31c2db.js";import ae from"./PsButton.bc5ed803.js";import se from"./OrderSuccessTitleAndValue.f383e4a7.js";import le from"./PsFrontendLayout.64b287f7.js";import{P as Z}from"./PsValueStore.a232cbb1.js";import{u as ie}from"./AppInfoStore.266a6525.js";import{u as de}from"./VendorCheckoutStore.d9c6e010.js";import{u as me}from"./GalleryStore.a9a9e731.js";import"./ps_constants.0e2a11f9.js";import{_ as ce}from"./plugin-vue_export-helper.21dcd24c.js";import"./FooterView.1e68f849.js";import"./FooterLinkSection.714178c6.js";import"./PsLink.555685fa.js";import"./PsRouteLink.8f7df026.js";import"./PsLabelCaption.a33ce9c4.js";import"./ProductParameterHolder.4354be0b.js";import"./CustomFieldStore.b038b00e.js";import"./PsApiService.98e573c3.js";import"./PsObject.a17ef38f.js";import"./DefaultPhoto.cc755f93.js";import"./PsStore.f4ecabdb.js";import"./PsSepetetedStore.9a31ac47.js";import"./PsNavTabBar.634541ec.js";import"./PsDropdown.f31a931d.js";import"./PsDropdownSelect.8d0bad23.js";import"./PsIconToggle.5f73bff4.js";import"./PsInputWithLeftIcon.ae1f5479.js";import"./ItemLocationTownshipStore.d4fe0c18.js";import"./ItemLocation.d1b92a80.js";import"./LocationParameterHolder.a5eab253.js";import"./PsUtils.78b0d4de.js";import"./AppInfoParameterHolder.e24d894d.js";import"./PsNavBar.0669b7b7.js";import"./UserStore.ecd89ebd.js";import"./User.0c3ba1a8.js";import"./RatingDetail.291ad5d1.js";import"./ProductRelation.0b376978.js";import"./UserListParameterHolder.d110b747.js";import"./ApiStatus.5720ba0b.js";import"./index.esm.159b9749.js";import"./auth.esm.925cebae.js";import"./UserUnReadMessageParameterHolder.181142c1.js";import"./AddToCartStore.3ffc08d4.js";import"./PsLine.4597488d.js";import"./PsNotificationBox.8f065d5d.js";import"./ProductStore.279e879d.js";import"./Phone.45f97258.js";import"./Product.29c94914.js";import"./Category.7c65464b.js";import"./DefaultIcon.e76b39a5.js";import"./SubCategory.1b4176e0.js";import"./ItemCurrency.91c8ce91.js";import"./Vendor.d946ee87.js";import"./UserDeleteItemParameterHolder.5d816aba.js";import"./NotificationStore.656ac75f.js";import"./NotiUnRegisterHolder.eefb692e.js";import"https://unpkg.com/delayed-scroll-restoration-polyfill@0.1.1/index.js";import"./ShippingAndBillingParameterHolder.153fda1f.js";import"./ItemInfo.399287ec.js";const ne={name:"OrderSuccessfulPage",components:{PsIcon:re,PsLabel:oe,PsButton:ae,OrderSuccessTitleAndValue:se,Head:J},layout:le,props:["query"],setup(o){const b=Z();me("detail");const v=ie(),s=b.getLoginUserId(),f=de();let y=S();const p=S(),a=S();K(async()=>{await u()});function g(){ee.get(route("dashboard"))}async function u(){y.value=await f.loadOrderSummary(o.query.orderId,s);let l=f.orderSummary.data.orderSummary;p.value=[l.shippingFirstName+" "+l.shippingLastName,l.shippingPhoneNo,l.shippingEmail,l.shippingAddress,l.shippingCountry+", "+l.shippingState+", "+l.shippingCity+", "+l.shippingPostalCode],a.value=[l.billingFirstName+" "+l.billingLastName,l.billingPhoneNo,l.billingEmail,l.billingAddress,l.billingCountry+", "+l.billingState+", "+l.billingCity+", "+l.billingPostalCode]}return{appInfoStore:v,PsValueStore:Z,vendorCheckoutStore:f,orderSummary:y,continueShopping:g,loginUserId:s,shippingAddress:p,billingAddress:a}}},ue={class:"mt-24 w-full"},fe={class:"w-full h-[380px] bg-feSuccess-50 dark:bg-feSuccess-900 flex flex-col justify-center items-center"},pe={class:"w-20 h-20 mb-5 flex bg-feSuccess-500 dark:bg-feSuccess-500 rounded-full items-center justify-center"},xe={class:"xl:w-feLarge lg:w-large px-8 sm:px-8 md:w-full md:px-6 lg:px-0 mx-auto"},_e={class:"flex flex-col px-6 py-4 rounded-lg border dark:border-feAchromatic-700 mt-8"},he={class:"flex flex-col md:flex-row lg:flex-row justify-between w-full"},ye={class:"w-full md:w-1/2 lg:w-1/2 flex flex-col justify-start"},ge={class:"w-full md:w-1/2 lg:w-1/2 flex flex-col justify-start"},Se={class:"flex flex-row mb-4"},be={class:"w-50 bg-feSuccess-50 px-3 rounded"},ve={class:"flex flex-col mb-8 rounded-lg border dark:border-feAchromatic-700 px-6 py-4 mt-8"},we={class:"flex justify-between w-full"},Ae={class:"container"},Ce={class:"h-32 w-32 rounded object-cover overflow-hidden mr-2"},ke={class:"flex flex-col"},Pe={class:"max-w-auto overflow-hidden whitespace-nowrap mb-2"},Ne={class:"flex flex-row items-center mb-1"},je={key:0},Ie=r("div",{class:"my-6 border-t border-feAchromatic-100 dark:border-feAchromatic-700"},null,-1),Fe={class:"flex flex-row items-center justify-between mt-6"},Le={class:"flex flex-row items-center justify-between mt-5"},Ve={class:"flex flex-row items-center justify-between mt-5"},De=r("div",{class:"my-6 border-t border-feAchromatic-100 dark:border-feAchromatic-700"},null,-1),$e={class:"flex flex-row items-center justify-between my-5"};function Oe(o,b,v,s,f,y){var w,A,C,k,P,N,j,I,F,L,V,D,$,O,E,U,q,B,T,z,M,G,H,Q;const p=h("ps-icon"),a=h("ps-label"),g=h("ps-button"),u=h("order-success-title-and-value"),l=te("lazy");return x(),_("div",ue,[r("div",fe,[r("div",pe,[e(p,{name:"bluemark",textColor:"text-feSecondary-50",w:"60",h:"60"})]),e(a,{class:"text-2xl font-bold mb-5",textColor:"text-feAchromatic-800 dark:text-feAchromatic-50"},{default:m(()=>[c(n(o.$t("order_successfully_completed")),1)]),_:1}),e(a,{class:"w-100 mx-10 text-center md:w-140 lg:w-144 mb-5",textColor:"text-feAchromatic-700 dark:text-feAchromatic-200"},{default:m(()=>[c(n(o.$t("order_successfully_completed_descripition")),1)]),_:1}),e(g,{onClick:s.continueShopping},{default:m(()=>[c(n(o.$t("continue_shopping")),1)]),_:1},8,["onClick"])]),r("div",xe,[r("div",_e,[e(a,{class:"font-semibold text-xl mb-6",textColor:"text-feAchromatic-900 dark:text-feAchromatic-50"},{default:m(()=>[c(n(o.$t("order_summary")),1)]),_:1}),r("div",he,[r("div",ye,[e(u,{title:o.$t("order_id"),value:(C=(A=(w=s.orderSummary)==null?void 0:w.data)==null?void 0:A.orderSummary)==null?void 0:C.orderCode},null,8,["title","value"]),e(u,{title:o.$t("order_date"),value:(N=(P=(k=s.orderSummary)==null?void 0:k.data)==null?void 0:P.orderSummary)==null?void 0:N.paymentDate},null,8,["title","value"]),e(u,{title:o.$t("success_name"),value:((F=(I=(j=s.orderSummary)==null?void 0:j.data)==null?void 0:I.orderSummary)==null?void 0:F.shippingFirstName)+" "+((D=(V=(L=s.orderSummary)==null?void 0:L.data)==null?void 0:V.orderSummary)==null?void 0:D.shippingLastName)},null,8,["title","value"]),e(u,{title:o.$t("success_email"),value:(E=(O=($=s.orderSummary)==null?void 0:$.data)==null?void 0:O.orderSummary)==null?void 0:E.shippingEmail},null,8,["title","value"]),e(u,{title:o.$t("shipping__address"),value:s.shippingAddress},null,8,["title","value"])]),r("div",ge,[e(u,{title:o.$t("success_payment_method"),value:(B=(q=(U=s.orderSummary)==null?void 0:U.data)==null?void 0:q.orderSummary)==null?void 0:B.paymentMethod},null,8,["title","value"]),r("div",Se,[e(a,{class:"w-1/2",textColor:"text-feAchromatic-600 dark:text-feAchromatic-400"},{default:m(()=>[c(n(o.$t("success_payment_status")),1)]),_:1}),r("div",be,[e(a,{class:"w-1/2",textColor:"text-feSuccess-500 dark:bg-feSuccess-100"},{default:m(()=>{var t,d,i;return[c(n((i=(d=(t=s.orderSummary)==null?void 0:t.data)==null?void 0:d.orderSummary)==null?void 0:i.paymentStatus),1)]}),_:1})])]),e(u,{title:o.$t("success_total_order_amount"),value:(M=(z=(T=s.orderSummary)==null?void 0:T.data)==null?void 0:z.orderSummary)==null?void 0:M.total},null,8,["title","value"]),e(u,{title:o.$t("success_billing_address"),value:s.billingAddress},null,8,["title","value"])])])]),r("div",ve,[e(a,{class:"font-semibold text-xl mb-6",textColor:"text-feAchromatic-900 dark:text-feAchromatic-50"},{default:m(()=>{var t,d,i;return[c(n((i=(d=(t=s.orderSummary)==null?void 0:t.data)==null?void 0:d.orderSummary)==null?void 0:i.vendorName),1)]}),_:1}),r("div",we,[r("div",Ae,[(x(!0),_(R,null,W((Q=(H=(G=s.orderSummary)==null?void 0:G.data)==null?void 0:H.orderSummary)==null?void 0:Q.itemInfo,(t,d)=>{var i;return x(),_("div",{key:d,class:"flex items-start mb-5"},[X(r("img",Ce,null,512),[[l,{src:o.$page.props.thumb2xUrl+"/"+((i=t==null?void 0:t.defaultPhoto)==null?void 0:i.imgPath),loading:o.$page.props.sysImageUrl+"/loading_gif.gif",error:o.$page.props.sysImageUrl+"/default_photo.png"}]]),r("div",ke,[r("div",Pe,[e(a,{class:"font-normal overflow-ellipsis",textColor:"text-feSecondary-500 dark:text-feAchromatic-400"},{default:m(()=>[c(n(t.itemName),1)]),_:2},1024)]),r("div",Ne,[t.discountPrice!=""?(x(),_("div",je,[e(a,{textColor:"line-through font-sm font-semibold text-feAchromatic-700 dark:text-feAchromatic-50"},{default:m(()=>[c(n(t.originalPrice),1)]),_:2},1024)])):Y("",!0),e(a,{textColor:"font-semibold text-xl text-fePrimary-500 ml-1"},{default:m(()=>[c(n(t.salePrice),1)]),_:2},1024)]),e(a,{class:"font-base mb-1",textColor:"text-feSecondary-600 dark:text-feAchromatic-400"},{default:m(()=>[c("Qty: "+n(t.quantity)+"x",1)]),_:2},1024)])])}),128)),Ie,r("div",Fe,[e(a,{class:"text-normal",textColor:"text-feSecondary-800 dark:text-feAchromatic-200"},{default:m(()=>[c(n(o.$t("subtotal")),1)]),_:1}),e(a,{class:"text-normal",textColor:"text-feSecondary-800 dark:text-feAchromatic-200"},{default:m(()=>{var t,d,i;return[c(n((i=(d=(t=s.orderSummary)==null?void 0:t.data)==null?void 0:d.orderSummary)==null?void 0:i.subTotal),1)]}),_:1})]),r("div",Le,[e(a,{class:"text-normal",textColor:"text-feSecondary-800 dark:text-feAchromatic-200"},{default:m(()=>[c(n(o.$t("discount")),1)]),_:1}),e(a,{class:"text-normal",textColor:"text-fePrimary-500"},{default:m(()=>{var t,d,i;return[c("-"+n((i=(d=(t=s.orderSummary)==null?void 0:t.data)==null?void 0:d.orderSummary)==null?void 0:i.totalDiscount),1)]}),_:1})]),r("div",Ve,[e(a,{class:"text-normal",textColor:"text-feSecondary-800 dark:text-feAchromatic-200"},{default:m(()=>[c(n(o.$t("delivery_charges")),1)]),_:1}),e(a,{class:"text-normal",textColor:"text-feSecondary-800 dark:text-feAchromatic-200"},{default:m(()=>{var t,d,i;return[c(n((i=(d=(t=s.orderSummary)==null?void 0:t.data)==null?void 0:d.orderSummary)==null?void 0:i.deliveryFee),1)]}),_:1})]),De,r("div",$e,[e(a,{class:"text-lg font-bold",textColor:"text-feSecondary-800 dark:text-feSecondary-50"},{default:m(()=>[c(n(o.$t("success_total")),1)]),_:1}),e(a,{class:"text-lg font-bold",textColor:"text-feSecondary-800 dark:text-feSecondary-50"},{default:m(()=>{var t,d,i;return[c(n((i=(d=(t=s.orderSummary)==null?void 0:t.data)==null?void 0:d.orderSummary)==null?void 0:i.total),1)]}),_:1})])])])])])])}var Gt=ce(ne,[["render",Oe]]);export{Gt as default};
