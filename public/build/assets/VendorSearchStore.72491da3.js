import{P as S}from"./ProductRelation.0b376978.js";import{a as y,P as V}from"./PsApiService.98e573c3.js";import{V as g}from"./Vendor.d946ee87.js";import{bD as w,y as l,i}from"./app.0e502cc5.js";import{m as P}from"./PsSepetetedStore.9a31ac47.js";class R{constructor(){this.searchterm="",this.ownerUserId="",this.orderBy="",this.orderType="",this.status="2",this.productRelation=[new S]}VendorSearchParameterHolder(){this.searchterm="",this.ownerUserId="",this.orderBy="",this.orderType="",this.status="2",this.productRelation=[]}getAllVendorParameterHolder(){return this.searchterm="",this.ownerUserId="",this.orderBy="added_date",this.orderType="desc",this.status="2",this.productRelation=[],this}toMap(){const e={};return e.searchterm=this.searchterm,e.owner_user_id=this.ownerUserId,e.order_by=this.orderBy,e.order_type=this.orderType,e.status=this.status,e.product_relation=this.productRelation,e}}const L=P(n=>w(`vendorSearchStore/${n}`,()=>{const e=l(new y);let h=l(new R().getAllVendorParameterHolder());const u=l({value:!1}),c=i(!1),m=i(""),f=i("");let s=i(10),a=0;const r=l({value:!1});function p(t){var o,d;e!=null&&e.data!=null&&e.data.length>0&&a!=0?(t.data!=null&&t.data.length>0?(((o=t.data)==null?void 0:o.length)<s.value?r.value=!0:r.value=!1,e.data.push(...t.data)):r.value=!0,e.code=t.code,e.status=t.status,e.message=t.message):(((d=t.data)==null?void 0:d.length)<s.value||t.data==null?r.value=!0:r.value=!1,e.data=t.data,e.code=t.code,e.status=t.status,e.message=t.message),e!=null&&e.data!=null&&(a=e.data.length)}async function v(t,o){a=0,u.value=!0;const d=await V.postVendorSearchList(new g,t,s.value,a,o.toMap());p(d),u.value=!1}return{vendorSearchList:e,paramHolder:h,loading:u,sortByValue:m,ViewByValue:f,limit:s,offset:a,isNoMoreRecord:r,getVendorSearchList:v,showPopUpFilter:c}}));export{R as V,L as u};
