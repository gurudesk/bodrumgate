import{bD as rr,y as P,i as $,d as tr,G as er,j as or,o as g,f as M,w as b,a as _,b as y,q as k,t as a,c as A,s as X,F as Y,B as Z,r as v}from"./app.0e502cc5.js";import sr from"./PsContentContainer.26532414.js";import ar from"./PsFrontendLayout.64b287f7.js";import ir from"./PsBreadcrumb2.00bc7c75.js";import dr from"./PsLabel.3cf95094.js";import nr from"./OrderListNavBar.d9bca50a.js";import mr from"./OrderItem.cc92db53.js";import lr from"./PsButton.bc5ed803.js";import ur from"./PsIcon.dc31c2db.js";import{m as pr}from"./PsSepetetedStore.9a31ac47.js";import{a as cr,P as D}from"./PsApiService.98e573c3.js";import{A as fr}from"./ApiStatus.5720ba0b.js";import{P as j}from"./PsObject.a17ef38f.js";import{I as B}from"./ItemInfo.399287ec.js";import{P as hr}from"./PsValueStore.a232cbb1.js";import{_ as _r}from"./plugin-vue_export-helper.21dcd24c.js";import"./FooterView.1e68f849.js";import"./FooterLinkSection.714178c6.js";import"./PsLink.555685fa.js";import"./PsRouteLink.8f7df026.js";import"./PsLabelCaption.a33ce9c4.js";import"./ProductParameterHolder.4354be0b.js";import"./ps_constants.0e2a11f9.js";import"./AppInfoStore.266a6525.js";import"./DefaultPhoto.cc755f93.js";import"./CustomFieldStore.b038b00e.js";import"./PsStore.f4ecabdb.js";import"./PsNavTabBar.634541ec.js";import"./PsDropdown.f31a931d.js";import"./PsDropdownSelect.8d0bad23.js";import"./PsIconToggle.5f73bff4.js";import"./PsInputWithLeftIcon.ae1f5479.js";import"./ItemLocationTownshipStore.d4fe0c18.js";import"./ItemLocation.d1b92a80.js";import"./LocationParameterHolder.a5eab253.js";import"./PsUtils.78b0d4de.js";import"./AppInfoParameterHolder.e24d894d.js";import"./PsNavBar.0669b7b7.js";import"./UserStore.ecd89ebd.js";import"./User.0c3ba1a8.js";import"./RatingDetail.291ad5d1.js";import"./ProductRelation.0b376978.js";import"./UserListParameterHolder.d110b747.js";import"./index.esm.159b9749.js";import"./auth.esm.925cebae.js";import"./UserUnReadMessageParameterHolder.181142c1.js";import"./AddToCartStore.3ffc08d4.js";import"./PsLine.4597488d.js";import"./PsNotificationBox.8f065d5d.js";import"./ProductStore.279e879d.js";import"./Phone.45f97258.js";import"./Product.29c94914.js";import"./Category.7c65464b.js";import"./DefaultIcon.e76b39a5.js";import"./SubCategory.1b4176e0.js";import"./ItemCurrency.91c8ce91.js";import"./Vendor.d946ee87.js";import"./UserDeleteItemParameterHolder.5d816aba.js";import"./NotificationStore.656ac75f.js";import"./NotiUnRegisterHolder.eefb692e.js";import"https://unpkg.com/delayed-scroll-restoration-polyfill@0.1.1/index.js";class S extends j{constructor(){super(...arguments),this.paymentStatus="",this.paymentStatusColor="",this.orderStatus="",this.orderStatusColor="",this.orderDate="",this.vendorName="",this.itemInfo=[new B]}init(r,t,o,d,l,i,p,c,n,s,m){return this.id=r,this.orderCode=t,this.paymentStatus=o,this.paymentStatusColor=d,this.orderStatus=l,this.orderStatusColor=i,this.orderDate=p,this.vendorName=c,this.itemInfo=n,this.itemCount=s,this.total=m,this}getPrimaryKey(){return""}toMap(r){const t={};return t.id=r.id,t.order_code=r.orderCode,t.payment_status=r.paymentStatus,t.payment_status_color=r.paymentStatusColor,t.order_status=r.orderStatus,t.order_status_color=r.orderStatusColor,t.order_date=r.orderDate,t.vendor_name=r.vendorName,t.item_info=new B().toMapList(r.itemInfo),t.item_count=r.itemCount,t.total=r.total,t}toMapList(r){const t=[];for(let o=0;o<r.length;o++)r[o]!=null&&t.push(this.toMap(r[o]));return t}fromMap(r){return new S().init(r.id,r.order_code,r.payment_status,r.payment_status_color,r.order_status,r.order_status_color,r.order_date,r.vendor_name,new B().fromMapList(r.item_info),r.item_count,r.total)}fromMapList(r){const t=[];for(const o of r)o!=null&&t.push(this.fromMap(o));return t}}class I extends j{constructor(){super(...arguments),this.allOrderCount="",this.pendingOrderCount="",this.approvedOrderCount="",this.deliveringOrderCount="",this.deliveredOrderCount="",this.orderHistory=[new S]}init(r,t,o,d,l,i,p){return this.allOrderCount=r,this.pendingOrderCount=t,this.approvedOrderCount=o,this.deliveringOrderCount=d,this.deliveredOrderCount=l,this.orderHistory=i,this.meta=p,this}getPrimaryKey(){return""}fromMap(r){return console.log(r),new I().init(r.all_order_count,r.pending_order_count,r.approved_order_count,r.delivering_order_count,r.delivered_order_count,new S().fromMapList(r.order_history),r.meta)}toMap(r){const t={};return t.all_order_count=r.allOrderCount,t.pending_order_count=r.pendingOrderCount,t.approved_order_count=r.approvedOrderCount,t.delivering_order_count=r.deliveringOrderCount,t.delivered_order_count=r.deliveredOrderCount,t.order_history=new S().toMapList(r.orderHistory),t.meta=r.meta,t}fromMapList(r){const t=[];for(const o of r)o!=null&&t.push(this.fromMap(o));return t}toMapList(r){const t=[];for(let o=0;o<r.length;o++)r[o]!=null&&t.push(this.toMap(r[o]));return t}}class yr{constructor(){this.orderStatus="",this.orderBy="",this.orderType="",this.page=""}OrderHistoryParameterHolder(){this.orderStatus="",this.orderBy="",this.orderType="",this.page=""}toMap(){const r={};return r.order_status=this.orderStatus,r.order_by=this.orderBy,r.order_type=this.orderType,r.page=this.page,r}}const gr=pr(e=>rr(`orderHistoryStore/${e}`,()=>{const r=P(new cr),t=P(new yr),o=P({value:!1});let d=$(10),l=0;const i=P({value:!1});function p(s){var m,u;r!=null&&r.data!=null&&r.data.length>0&&l!=0?(s.data!=null&&s.data.length>0?(((m=s.data)==null?void 0:m.length)<d.value?i.value=!0:i.value=!1,r.data.push(...s.data)):i.value=!0,r.code=s.code,r.status=s.status,r.message=s.message):(((u=s.data)==null?void 0:u.length)<d.value||s.data==null?i.value=!0:i.value=!1,r.data=s.data,r.code=s.code,r.status=s.status,r.message=s.message),r!=null&&r.data!=null&&(l=r.data.length)}async function c(s,m){o.value=!0;const u=await D.postOrderHistoryList(new I,s,d.value,l,m.toMap());return r.data=u.data,r.code=u.code,r.status=u.status,r.message=u.message,o.value=!1,r}async function n(s,m){o.value=!0;const u=await D.downloadOrderHistory(new fr,s,m);return o.value=!1,u}return{orderHistoryList:r,loading:o,limit:d,offset:l,isNoMoreRecord:i,holder:t,updateOrderHistoryList:p,resetOrderHistoryList:c,downloadOrderHistory:n}})),vr=tr({name:"OrderList",components:{PsContentContainer:sr,PsBreadcrumb2:ir,PsLabel:dr,OrderListNavBarVue:nr,OrderItem:mr,PsButton:lr,PsIcon:ur},layout:ar,setup(){const e=gr(),r=e.holder,o=hr().getLoginUserId(),d=$([]);$();const l=er(()=>[{label:Z("ps_nav_bar__home"),url:route("dashboard")},{label:Z("core_fe__my_orders"),color:"text-fePrimary-500"}]);or(async()=>{c()});function i(n,s){r.orderStatus=n,r.orderBy=s.orderBy,r.orderType=s.type,r.page=1,c()}function p(n){r.page=n,c()}async function c(){var n;await e.resetOrderHistoryList(o,r),d.value=(n=e.orderHistoryList)==null?void 0:n.data}return{breadcrumb:l,orderHistoryStore:e,orderHistoryList:d,getOrderHistory:p,changeOrderStatus:i}}}),br={class:"sm:mt-32 lg:mt-36 mt-28 mb-6"},kr={class:"flex flex-col sm:flex-row mb-6"},Hr={class:"flex flex-row sm:mt-0 mt-6"},Lr={class:"flex flex-col sm:flex-row sm:justify-between sm:items-center mt-5 sm:mt-6 lg:mt-8 gap-4"},Or={class:"font-medium"},Cr={class:"font-medium"},wr={class:"font-medium"},Sr={class:"sm:mt-4 flex justify-center align-middle rtl:space-x-reverse space-x-1"},Pr={class:"flex"};function Mr(e,r,t,o,d,l){const i=v("ps-breadcrumb-2"),p=v("ps-label"),c=v("order-list-nav-bar-vue"),n=v("order-item"),s=v("ps-icon"),m=v("ps-button"),u=v("ps-content-container");return g(),M(u,null,{content:b(()=>{var N,x;return[_("div",br,[_("div",kr,[_("div",Hr,[y(i,{items:e.breadcrumb},null,8,["items"])])]),y(p,{textColor:"text-2xl font-semibold text-feAchromatic-800 dark:text-feAchromatic-50 mb-6"},{default:b(()=>[k(a(e.$t("core_fe__my_orders")),1)]),_:1}),y(c,{orderHistoryList:e.orderHistoryList,onChangeOrderStatus:e.changeOrderStatus},null,8,["orderHistoryList","onChangeOrderStatus"]),(g(!0),A(Y,null,X(e.orderHistoryList.orderHistory,(f,h)=>(g(),A("div",{class:"mt-4",key:h},[y(n,{order:f},null,8,["order"])]))),128)),_("div",Lr,[y(p,{class:"text-secondary-600 text-base font-normal"},{default:b(()=>{var f,h,H,L,O,C,w,V,T,R,F,K,U,q,E,G,z,J,Q,W;return[k(a(e.$t("core__be_table_showing"))+" "+a(" ")+" ",1),_("span",Or,a(((h=(f=e.orderHistoryList)==null?void 0:f.meta)==null?void 0:h.total)>0?(((L=(H=e.orderHistoryList)==null?void 0:H.meta)==null?void 0:L.current_page)-1)*((C=(O=e.orderHistoryList)==null?void 0:O.meta)==null?void 0:C.per_page)+1:0),1),k(" "+a(" ")+" "+a(e.$t("core__be_table_to"))+" "+a(" ")+" ",1),_("span",Cr,a(((V=(w=e.orderHistoryList)==null?void 0:w.meta)==null?void 0:V.current_page)*((R=(T=e.orderHistoryList)==null?void 0:T.meta)==null?void 0:R.per_page)>((K=(F=e.orderHistoryList)==null?void 0:F.meta)==null?void 0:K.total)?(q=(U=e.orderHistoryList)==null?void 0:U.meta)==null?void 0:q.total:((G=(E=e.orderHistoryList)==null?void 0:E.meta)==null?void 0:G.current_page)*((J=(z=e.orderHistoryList)==null?void 0:z.meta)==null?void 0:J.per_page)),1),k(" "+a(" ")+" "+a(e.$t("core__be_table_of"))+" "+a(" ")+" ",1),_("span",wr,a((W=(Q=e.orderHistoryList)==null?void 0:Q.meta)==null?void 0:W.total),1),k(" "+a(" ")+" "+a(e.$t("core__be_table_entries")),1)]}),_:1}),_("div",Sr,[(g(!0),A(Y,null,X((x=(N=e.orderHistoryList)==null?void 0:N.meta)==null?void 0:x.links,(f,h)=>{var H,L;return g(),A("span",{key:h,class:"h-8 rounded bg-white dark:bg-secondaryDark-black"},[_("div",Pr,[h==0?(g(),M(m,{key:0,hover:"",focus:"",onClick:O=>e.getOrderHistory(h),colors:"bg-background dark:text-feAchromatic-50 dark:bg-backgroundDark hover:bg-secondary-100",class:"mt-0.5",padding:"py-2 px-2",border:"border border-feAchromatic-200 dark:border-feAchromatic-700 "},{default:b(()=>[y(s,{class:"block rtl:hidden",name:"doubleArrowLeft",w:"16",h:"16"}),y(s,{class:"hidden rtl:block",name:"doubleArrowRight",w:"16",h:"16"})]),_:2},1032,["onClick"])):h==Object.keys((L=(H=e.orderHistoryList)==null?void 0:H.meta)==null?void 0:L.links).length-1?(g(),M(m,{key:1,onClick:r[0]||(r[0]=O=>{var C,w;return e.getOrderHistory((w=(C=e.orderHistoryList)==null?void 0:C.meta)==null?void 0:w.last_page)}),colors:"bg-background dark:text-feAchromatic-50 dark:bg-backgroundDark hover:bg-secondary-100",class:"mt-0.5",padding:"py-2 px-2",hover:"",focus:"",border:"border border-feAchromatic-200  dark:border-feAchromatic-700"},{default:b(()=>[y(s,{class:"block rtl:hidden",name:"doubleArrowRight",w:"16",h:"16"}),y(s,{class:"hidden rtl:block",name:"doubleArrowLeft",w:"16",h:"16"})]),_:1})):(g(),M(m,{key:2,rounded:"rounded dark:text-feAchromatic-50",onClick:O=>e.getOrderHistory(f.label),border:f.active?"border border-fePrimary-500 rounded":"border border-secondary-200  dark:border-feAchromatic-700 rounded",colors:f.active?"bg-fePrimary-500 dark:bg-fePrimary-500 text-white dark:text-feAchromatic-50":"bg-background dark:bg-backgroundDark hover:bg-secondary-100 dark:hover-bg-fePrimary-600",hover:"",padding:"py-2 px-4"},{default:b(()=>[k(a(f.label),1)]),_:2},1032,["onClick","border","colors"]))])])}),128))])])])]}),_:1})}var Tt=_r(vr,[["render",Mr]]);export{Tt as default};
