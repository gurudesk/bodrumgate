import{P as g}from"./PsLayout.7915dd73.js";import{d as y,Z as v,H as C,B as m,o as d,c,b as t,w as e,a as s,q as o,t as n,F as _,s as u,f as w,x as P,g as $,r}from"./app.0e502cc5.js";import{P as S}from"./PsInput.6fad3d25.js";import{P as T}from"./PsLabel.6d5b1b0c.js";import{P as B}from"./PsButton.ed5c0dad.js";import{P as D}from"./PsTextarea.51895c08.js";import{P as N}from"./PsLabelHeader4.a6c530e5.js";import{P as k}from"./PsLabelCaption.3e68d19d.js";import{P as A}from"./PsBreadcrumb2.ad6b6d6d.js";import{_ as I}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsIcon.8dbf90d4.js";import"./Icons.c01eddd9.js";import"./PsDropdown.a0b3bb4c.js";import"./PsDropdownSelect.063a4178.js";import"./PsDangerDialog.195b6d73.js";import"./PsModal.0f9f6579.js";import"./vue-neat-modal.d03c5dee.js";import"./PsToggle.1bec2c80.js";import"./toggle.284f64a6.js";import"./PsWarningDialog.db1ec62c.js";import"./index.esm.159b9749.js";import"./auth.esm.925cebae.js";import"./SidebarMenuItem.15e6d48b.js";import"./SidebarSubTab.31b29583.js";import"./PsErrorDialog.3227ce3c.js";import"./PsInputWithRightIcon.c0b01b6c.js";import"./PsSuccessDialog.9e44e7fb.js";import"./PsLoading.0f9a761a.js";import"./PsBannerIcon.82d105ba.js";import"./PsIcon1.3db40a94.js";import"./PsLoadingCircleDialog.65ae0069.js";const H=y({name:"Edit",components:{Head:v,PsInput:S,PsLabel:T,PsButton:B,PsTextarea:D,PsLabelHeader4:N,PsLabelCaption:k,PsBreadcrumb2:A},layout:g,props:["errors","transaction","transaction_statuses","payment_statuses"],data(){return{form:C({transaction_status_id:this.transaction.transaction_status_id,payment_status_id:this.transaction.payment_status_id,_method:"put"})}},methods:{handleSubmit(l){this.$inertia.post(route("transaction.update",l),this.form,{forceFormData:!0})}},computed:{breadcrumb(){return[{label:m("core__be_dashboard_label"),url:route("admin.index")},{label:m("transaction_history_module"),url:route("transaction.index")},{label:"Transaction Detail",color:"text-primary-500"}]}}}),L={class:""},V={class:"w-full mt-8 pb-4 rounded-lg bg-white shadow-sm"},q=o("Transaction Details"),E={class:"px-4 grid grid-cols-2 gap-x-8 mt-8"},F={class:"grid grid-cols-3 mt-4"},M=s("span",{class:"me-2"}," :",-1),O={class:"grid grid-cols-3 mt-2"},U=o(" Shop ID "),z=s("span",{class:"me-2"}," :",-1),Q={class:"grid grid-cols-3 mt-2"},Z=s("span",{class:"me-2"}," :",-1),j=o(" Invoice "),G={class:"grid grid-cols-3 mt-4"},J=o(" Invoice Number "),K=s("span",{class:"me-2"}," :",-1),R={class:"grid grid-cols-3 mt-2"},W=o(" Date "),X=s("span",{class:"me-2"}," :",-1),Y={class:"grid grid-cols-3 mt-2"},ss=o(" Status "),ts=s("span",{class:"me-2"}," :",-1),es={class:"grid grid-cols-2 gap-x-8 mt-6 px-4"},as=o(" Billing Address "),os={class:"grid grid-cols-3 mt-4"},ls=s("span",{class:"me-2"}," :",-1),ns={class:"grid grid-cols-3 mt-2"},is=s("span",{class:"me-2"}," :",-1),ds={class:"grid grid-cols-3 mt-2"},cs=s("span",{class:"me-2"}," :",-1),rs={class:"grid grid-cols-3 mt-2"},_s=s("span",{class:"me-2"}," :",-1),ps=o(" Shipping Address "),ms={class:"grid grid-cols-3 mt-4"},us=o(" Name "),hs=s("span",{class:"me-2"}," :",-1),bs={class:"grid grid-cols-3 mt-2"},fs=s("span",{class:"me-2"}," :",-1),xs={class:"grid grid-cols-3 mt-2"},gs=s("span",{class:"me-2"}," :",-1),ys={class:"grid grid-cols-3 mt-2"},vs=s("span",{class:"me-2"}," :",-1),Cs={class:"w-full mt-8 py-4 px-4 rounded-lg bg-white shadow-sm"},ws=o(" Product Details "),Ps={class:"w-full mt-4"},$s={class:""},Ss={scope:"col",class:"bg-primary-500 py-2"},Ts=o(" No "),Bs={scope:"col",class:"bg-primary-500 py-2"},Ds=o(" Product Name "),Ns={scope:"col",class:"bg-primary-500 py-2"},ks=o(" Product Unit "),As={scope:"col",class:"bg-primary-500 py-2"},Is=o(" Item Price "),Hs={scope:"col",class:"bg-primary-500 py-2"},Ls=o(" Quantity "),Vs={scope:"col",class:"bg-primary-500 py-2"},qs=o(" Discount "),Es={scope:"col",class:"bg-green-500 py-2"},Fs=o(" Amount "),Ms={class:""},Os={class:""},Us={class:""},zs={class:""},Qs={class:""},Zs={class:""},js={class:""},Gs={class:"w-full mt-8 py-4 px-4 rounded-lg bg-white shadow-sm"},Js={class:"grid grid-cols-2 gap-x-4"},Ks=o(" Payment "),Rs={class:"grid grid-cols-2 mt-2 py-2 shadow-sm"},Ws=o(" Payment Method "),Xs=s("span",{class:"me-2"}," :",-1),Ys={class:"grid grid-cols-2 py-2 shadow-sm"},st=o(" Overall Tax "),tt=s("span",{class:"me-2"}," :",-1),et={class:"grid grid-cols-2 py-2 shadow-sm"},at=o(" Shipping Tax "),ot=s("span",{class:"me-2"}," :",-1),lt={class:"py-2"},nt=o(" Memo "),it=o(" Total Amount "),dt={class:"grid grid-cols-4 mt-2 py-2 px-4 shadow-sm"},ct=o(" Coupon Discount Amount (-) "),rt=s("span",{class:"me-2"}," :",-1),_t={class:"grid grid-cols-4 mt-2 py-2 px-4 shadow-sm"},pt=o(" Item Subtotal "),mt=s("span",{class:"me-2"}," :",-1),ut={class:"grid grid-cols-4 mt-2 py-2 px-4 shadow-sm"},ht=s("span",{class:"me-2"}," :",-1),bt={class:"grid grid-cols-4 mt-2 py-2 px-4 shadow-sm"},ft=s("span",{class:"me-2"}," :",-1),xt={class:"grid grid-cols-4 mt-2 py-2 px-4 shadow-sm"},gt=s("span",{class:"me-2"}," :",-1),yt={class:"grid grid-cols-4 mt-2 py-2 px-4 shadow-sm bg-primary-50"},vt=o(" Total Balance Amount "),Ct=s("span",{class:"me-2"}," :",-1);function wt(l,p,Pt,$t,St,Tt){const h=r("Head"),b=r("ps-breadcrumb-2"),a=r("ps-label"),f=r("ps-textarea"),x=r("ps-layout");return d(),c(_,null,[t(h,{title:l.$t("edit_transaction")},null,8,["title"]),t(x,null,{default:e(()=>[s("div",L,[t(b,{items:l.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),s("div",V,[t(a,{class:"text-lg px-4 py-2.5 bg-primary-50"},{default:e(()=>[q]),_:1}),s("div",E,[s("div",null,[t(a,{class:"font-semibold text-lg"},{default:e(()=>[o(n(l.transaction.shop.name),1)]),_:1}),s("div",F,[t(a,{class:"text-base",textColor:"text-secondary-500"},{default:e(()=>[o(" Shop "+n(l.$t("address_label")),1)]),_:1}),t(a,{class:"text-base col-span-2"},{default:e(()=>[M,o(n(l.transaction.address),1)]),_:1})]),s("div",O,[t(a,{class:"text-base",textColor:"text-secondary-500"},{default:e(()=>[U]),_:1}),t(a,{class:"text-base col-span-2"},{default:e(()=>[z,o(n(l.transaction.shop_id),1)]),_:1})]),s("div",Q,[t(a,{class:"text-base",textColor:"text-secondary-500"},{default:e(()=>[o(n(l.$t("email_label")),1)]),_:1}),t(a,{class:"text-base col-span-2"},{default:e(()=>[Z,o(n(l.transaction.shop.email),1)]),_:1})])]),s("div",null,[t(a,{class:"font-semibold text-lg"},{default:e(()=>[j]),_:1}),s("div",G,[t(a,{class:"text-base",textColor:"text-secondary-500"},{default:e(()=>[J]),_:1}),t(a,{class:"text-base col-span-2"},{default:e(()=>[K,o(n(l.transaction.trans_code),1)]),_:1})]),s("div",R,[t(a,{class:"text-base",textColor:"text-secondary-500"},{default:e(()=>[W]),_:1}),t(a,{class:"text-base col-span-2"},{default:e(()=>[X,o(n(l.transaction.created_date),1)]),_:1})]),s("div",Y,[t(a,{class:"text-base",textColor:"text-secondary-500"},{default:e(()=>[ss]),_:1}),s("div",null,[(d(!0),c(_,null,u(l.transaction_statuses,i=>(d(),w(a,{class:"text-base col-span-2",key:i.id},{default:e(()=>[i.id==l.transaction.transaction_status_id?(d(),c("div",{key:0,style:P({color:i.color_value})},[ts,o(" "+n(i.title),1)],4)):$("",!0)]),_:2},1024))),128))])])])]),s("div",es,[s("div",null,[t(a,{class:"font-semibold text-lg"},{default:e(()=>[as]),_:1}),s("div",os,[t(a,{class:"text-base",textColor:"text-secondary-500"},{default:e(()=>[o(n(l.$t("name_label")),1)]),_:1}),t(a,{class:"text-base col-span-2"},{default:e(()=>[ls,o(n(l.transaction.billing_first_name)+" "+n(l.transaction.billing_last_name),1)]),_:1})]),s("div",ns,[t(a,{class:"text-base",textColor:"text-secondary-500"},{default:e(()=>[o(n(l.$t("address_1_label")),1)]),_:1}),t(a,{class:"text-base col-span-2"},{default:e(()=>[is,o(n(l.transaction.billing_address_1),1)]),_:1})]),s("div",ds,[t(a,{class:"text-base",textColor:"text-secondary-500"},{default:e(()=>[o(n(l.$t("address_2_label")),1)]),_:1}),t(a,{class:"text-base col-span-2"},{default:e(()=>[cs,o(n(l.transaction.billing_address_2),1)]),_:1})]),s("div",rs,[t(a,{class:"text-base",textColor:"text-secondary-500"},{default:e(()=>[o(n(l.$t("email_label")),1)]),_:1}),t(a,{class:"text-base col-span-2"},{default:e(()=>[_s,o(n(l.transaction.billing_email),1)]),_:1})])]),s("div",null,[t(a,{class:"font-semibold text-lg"},{default:e(()=>[ps]),_:1}),s("div",ms,[t(a,{class:"text-base",textColor:"text-secondary-500"},{default:e(()=>[us]),_:1}),t(a,{class:"text-base col-span-2"},{default:e(()=>[hs,o(n(l.transaction.shipping_first_name)+" "+n(l.transaction.shipping_last_name),1)]),_:1})]),s("div",bs,[t(a,{class:"text-base",textColor:"text-secondary-500"},{default:e(()=>[o(n(l.$t("address_1_label")),1)]),_:1}),t(a,{class:"text-base col-span-2"},{default:e(()=>[fs,o(n(l.transaction.shipping_address_1),1)]),_:1})]),s("div",xs,[t(a,{class:"text-base",textColor:"text-secondary-500"},{default:e(()=>[o(n(l.$t("address_2_label")),1)]),_:1}),t(a,{class:"text-base col-span-2"},{default:e(()=>[gs,o(n(l.transaction.shipping_address_2),1)]),_:1})]),s("div",ys,[t(a,{class:"text-base",textColor:"text-secondary-500"},{default:e(()=>[o(n(l.$t("email_label")),1)]),_:1}),t(a,{class:"text-base col-span-2"},{default:e(()=>[vs,o(n(l.transaction.shipping_email),1)]),_:1})])])])]),s("div",Cs,[t(a,{class:"font-semibold text-lg"},{default:e(()=>[ws]),_:1}),s("table",Ps,[s("thead",$s,[s("tr",null,[s("th",Ss,[t(a,{textColor:"text-white",class:"text-sm font-semibold text-left px-4"},{default:e(()=>[Ts]),_:1})]),s("th",Bs,[t(a,{textColor:"text-white",class:"text-sm font-semibold text-left px-4"},{default:e(()=>[Ds]),_:1})]),s("th",Ns,[t(a,{textColor:"text-white",class:"text-sm font-semibold text-left px-4"},{default:e(()=>[ks]),_:1})]),s("th",As,[t(a,{textColor:"text-white",class:"text-sm font-semibold text-left px-4"},{default:e(()=>[Is]),_:1})]),s("th",Hs,[t(a,{textColor:"text-white",class:"text-sm font-semibold text-left px-4"},{default:e(()=>[Ls]),_:1})]),s("th",Vs,[t(a,{textColor:"text-white",class:"text-sm font-semibold text-left px-4"},{default:e(()=>[qs]),_:1})]),s("th",Es,[t(a,{textColor:"text-white",class:"text-sm font-semibold text-left ps-4 pe-8"},{default:e(()=>[Fs]),_:1})])])]),s("tbody",null,[(d(!0),c(_,null,u(l.transaction.transaction_detail,i=>(d(),c("tr",{key:i.id,class:"bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"},[s("td",Ms,[t(a,{class:"text-sm py-3 px-4"},{default:e(()=>[o(n(i.id),1)]),_:2},1024)]),s("td",Os,[t(a,{class:"text-sm py-3 px-4"},{default:e(()=>[o(n(i.item_name),1)]),_:2},1024)]),s("td",Us,[t(a,{class:"text-sm py-3 px-4"},{default:e(()=>[o(n(i.item_unit),1)]),_:2},1024)]),s("td",zs,[t(a,{class:"text-sm py-3 px-4"},{default:e(()=>[o(n(i.price)+" "+n(l.transaction.currency_symbol),1)]),_:2},1024)]),s("td",Qs,[t(a,{class:"text-sm py-3 px-4"},{default:e(()=>[o(n(i.qty),1)]),_:2},1024)]),s("td",Zs,[t(a,{class:"text-sm py-3 px-4"},{default:e(()=>[o(" -"+n(i.discount_amount)+" "+n(l.transaction.currency_symbol),1)]),_:2},1024)]),s("td",js,[t(a,{class:"text-sm py-3 px-4"},{default:e(()=>[o(n(i.original_price*i.qty)+" "+n(l.transaction.currency_symbol),1)]),_:2},1024)])]))),128))])])]),s("div",Gs,[s("div",Js,[s("div",null,[t(a,{class:"font-semibold text-lg"},{default:e(()=>[Ks]),_:1}),s("div",Rs,[t(a,{class:"text-base",textColor:"text-secondary-500"},{default:e(()=>[Ws]),_:1}),t(a,{class:"text-base"},{default:e(()=>[Xs,o(n(l.transaction.payment_method),1)]),_:1})]),s("div",Ys,[t(a,{class:"text-base",textColor:"text-secondary-500"},{default:e(()=>[st]),_:1}),t(a,{class:"text-base"},{default:e(()=>[tt,o(n(l.transaction.tax_percent*100)+" % ",1)]),_:1})]),s("div",et,[t(a,{class:"text-base",textColor:"text-secondary-500"},{default:e(()=>[at]),_:1}),t(a,{class:"text-base"},{default:e(()=>[ot,o(n(l.transaction.shipping_tax_percent),1)]),_:1})]),s("div",lt,[t(a,{class:"text-base",textColor:"text-secondary-500"},{default:e(()=>[nt]),_:1}),t(f,{rows:"3",placeholder:"Placeholder",disabled:!0,class:"w-full rounded text-base",value:l.transaction.memo,"onUpdate:value":p[0]||(p[0]=i=>l.transaction.memo=i)},null,8,["value"])])]),s("div",null,[t(a,{class:"font-semibold text-lg"},{default:e(()=>[it]),_:1}),s("div",dt,[t(a,{class:"col-span-3",textColor:"text-secondary-500"},{default:e(()=>[ct]),_:1}),t(a,{class:""},{default:e(()=>[rt,o(n(l.transaction.coupon_discount_amount)+" "+n(l.transaction.currency_symbol),1)]),_:1})]),s("div",_t,[t(a,{class:"col-span-3",textColor:"text-secondary-500"},{default:e(()=>[pt]),_:1}),t(a,{class:""},{default:e(()=>[mt,o(n(l.transaction.sub_total_amount)+" "+n(l.transaction.currency_symbol),1)]),_:1})]),s("div",ut,[t(a,{class:"col-span-3",textColor:"text-secondary-500"},{default:e(()=>[o(" Overall Tax ("+n(l.transaction.tax_percent*100)+"%) (+) ",1)]),_:1}),t(a,{class:""},{default:e(()=>[ht,o(n(l.transaction.tax_amount)+" "+n(l.transaction.currency_symbol),1)]),_:1})]),s("div",bt,[t(a,{class:"col-span-3",textColor:"text-secondary-500"},{default:e(()=>[o(" Shipping Cost ("+n(l.transaction.shipping_method_name)+") (+) ",1)]),_:1}),t(a,{class:""},{default:e(()=>[ft,o(" "+n(l.transaction.shipping_amount)+" "+n(l.transaction.currency_symbol),1)]),_:1})]),s("div",xt,[t(a,{class:"col-span-3",textColor:"text-secondary-500"},{default:e(()=>[o(" Shipping Tax ("+n(l.transaction.shipping_tax_percent*100)+"%) (+)",1)]),_:1}),t(a,{class:""},{default:e(()=>[gt,o(" "+n(l.transaction.shipping_amount*l.transaction.shipping_tax_percent)+" "+n(l.transaction.currency_symbol),1)]),_:1})]),s("div",yt,[t(a,{class:"col-span-3 font-semibold",textColor:"text-secondary-500"},{default:e(()=>[vt]),_:1}),t(a,{class:"font-semibold"},{default:e(()=>[Ct,o(" "+n(l.transaction.sub_total_amount+(l.transaction.tax_amount+l.transaction.shipping_amount+l.transaction.shipping_amount*l.transaction.shipping_tax_percent))+" "+n(l.transaction.currency_symbol),1)]),_:1})])])])])])]),_:1})],64)}var le=I(H,[["render",wt]]);export{le as default};
