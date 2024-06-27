import{P as Z}from"./PsObject.a17ef38f.js";import{D as e}from"./DefaultPhoto.cc755f93.js";import{C as a}from"./Category.7c65464b.js";import{S as n}from"./SubCategory.1b4176e0.js";import{I as o}from"./ItemCurrency.91c8ce91.js";import{a as r,I as d}from"./ItemLocation.d1b92a80.js";import{P as h}from"./ProductRelation.0b376978.js";import{U as u}from"./User.0c3ba1a8.js";import{V as p}from"./Vendor.d946ee87.js";class m extends Z{constructor(){super(...arguments),this.id="",this.catId="",this.subCatId="",this.itemCurrencyId="",this.itemLocationId="",this.itemLocationTownshipId="",this.description="",this.price="",this.percent="",this.phone="",this.isSoldOut="",this.title="",this.lat="",this.lng="",this.status="",this.addedDate="",this.addedUserId="",this.isDiscount="",this.touchCount="",this.favouriteCount="",this.isPaid="",this.dynamicLink="",this.addedDateStr="",this.paidStatus="",this.photoCount="",this.defaultPhoto=new e,this.video=new e,this.videoThumbnail=new e,this.category=new a,this.subCategory=new n,this.itemCurrency=new o,this.itemLocation=new r,this.itemLocationTownship=new d,this.user=new u,this.vendor=new p,this.isFavourited="",this.isOwner="",this.originalPrice="",this.adType="",this.productRelation=[new h]}init(t,i,s,c,_,l,w,f,y,g,M,v,C,I,L,P,T,D,S,O,R,k,U,F,x,V,K,q,z,A,B,E,G,H,J,N,Q,W,X,Y){return this.id=t,this.catId=i,this.subCatId=s,this.itemCurrencyId=c,this.itemLocationId=_,this.itemLocationTownshipId=l,this.description=w,this.price=f,this.percent=y,this.phone=g,this.isSoldOut=M,this.title=v,this.lat=C,this.lng=I,this.status=L,this.addedDate=P,this.addedUserId=T,this.isDiscount=D,this.touchCount=S,this.favouriteCount=O,this.isPaid=R,this.dynamicLink=k,this.addedDateStr=U,this.paidStatus=F,this.photoCount=x,this.defaultPhoto=V,this.video=K,this.videoThumbnail=q,this.category=z,this.subCategory=A,this.itemCurrency=B,this.itemLocation=E,this.itemLocationTownship=G,this.user=H,this.vendor=J,this.isFavourited=N,this.isOwner=Q,this.originalPrice=W,this.adType=X,this.productRelation=Y,this}getPrimaryKey(){return this.id}toMap(t){const i={};return i.id=t.id,i.category_id=t.catId,i.subcategory_id=t.subCatId,i.currency_id=t.itemCurrencyId,i.location_city_id=t.itemLocationId,i.location_township_id=t.itemLocationTownshipId,i.description=t.description,i.price=t.price,i.percent=t.percent,i.phone=t.phone,i.is_sold_out=t.isSoldOut,i.title=t.title,i.lat=t.lat,i.lng=t.lng,i.status=t.status,i.added_date=t.addedDate,i.added_user_id=t.addedUserId,i.is_discount=t.isDiscount,i.item_touch_count=t.touchCount,i.favourite_count=t.favouriteCount,i.is_paid=t.isPaid,i.dynamic_link=t.dynamicLink,i.added_date_str=t.addedDateStr,i.paid_status=t.paidStatus,i.photo_count=t.photoCount,i.default_photo=new e().toMap(t.defaultPhoto),i.default_video=new e().toMap(t.video),i.default_video_icon=new e().toMap(t.videoThumbnail),i.category=new a().toMap(t.category),i.sub_category=new n().toMap(t.subCategory),i.item_currency=new o().toMap(t.itemCurrency),i.item_location=new r().toMap(t.itemLocation),i.item_location_township=new d().toMap(t.itemLocationTownship),i.user=new u().toMap(t.user),i.vendor=new p().toMap(t.vendor),i.is_favourited=t.isFavourited,i.is_owner=t.isOwner,i.original_price=t.originalPrice,i.ad_type=t.adType,i.productRelation=new h().toMapList(t.productRelation),i}toMapList(t){const i=[];for(let s=0;s<t.length;s++)t[s]!=null&&i.push(this.toMap(t[s]));return i}fromMap(t){return new m().init(t.id,t.category_id,t.subcategory_id,t.currency_id,t.location_city_id,t.location_township_id,t.description,t.price,t.percent,t.phone,t.is_sold_out,t.title,t.lat,t.lng,t.status,t.added_date,t.added_user_id,t.is_discount,t.item_touch_count,t.favourite_count,t.is_paid,t.dynamic_link,t.added_date_str,t.paid_status,t.photo_count,new e().fromMap(t.default_photo),new e().fromMap(t.default_video),new e().fromMap(t.default_video_icon),new a().fromMap(t.category),new n().fromMap(t.sub_category),new o().fromMap(t.item_currency),new r().fromMap(t.item_location),new d().fromMap(t.item_location_township),new u().fromMap(t.user),new p().fromMap(t.vendor),t.is_favourited,t.is_owner,t.original_price,t.ad_type,new h().fromMapList(t.productRelation))}fromMapList(t){const i=[];for(const s of t)s!=null&&i.push(this.fromMap(s));return i}}export{m as P};