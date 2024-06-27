import{P as p}from"./PsObject.a17ef38f.js";import{D as r}from"./DefaultPhoto.cc755f93.js";import{P as o}from"./ProductRelation.0b376978.js";class s extends p{constructor(){super(...arguments),this.id="",this.vendorId="",this.userId="",this.document="",this.coverLetter="",this.addedDateStr=""}init(t,e,i,a,d,n){return this.id=t,this.vendorId=e,this.userId=i,this.document=a,this.coverLetter=d,this.addedDateStr=n,this}getPrimaryKey(){return"vendor"}toMap(t){const e={};return e.id=t.id,e.vendor_id=t.vendorId,e.user_id=t.userId,e.document=t.document,e.cover_letter=t.coverLetter,e.added_date_str=t.addedDateStr,e}toMapList(t){const e=[];for(let i=0;i<t.length;i++)t[i]!=null&&e.push(this.toMap(t[i]));return e}fromMap(t){return new s().init(t.id,t.vendor_id,t.user_id,t.document,t.cover_letter,t.added_date_str)}fromMapList(t){const e=[];for(const i of t)i!=null&&e.push(this.fromMap(i));return e}}class h extends p{constructor(){super(...arguments),this.id="",this.ownerUserId="",this.status="",this.name="",this.phone="",this.email="",this.address="",this.description="",this.website="",this.facebook="",this.instagram="",this.productCount="",this.currencyId="",this.addedDate="",this.expiredDate="",this.expireStatus="",this.logo=new r,this.banner1=new r,this.banner2=new r,this.vendorApplication=new s,this.addedDateStr="",this.updatedFlag="",this.vendorRelation=[new o]}init(t,e,i,a,d,n,u,m,l,_,f,c,w,v,M,g,D,x,I,y,L,S,P){return this.id=t,this.ownerUserId=e,this.status=i,this.name=a,this.phone=d,this.email=n,this.address=u,this.description=m,this.website=l,this.facebook=_,this.instagram=f,this.productCount=c,this.currencyId=w,this.addedDate=v,this.expiredDate=M,this.expireStatus=g,this.logo=D,this.banner1=x,this.banner2=I,this.vendorApplication=y,this.addedDateStr=L,this.updatedFlag=S,this.vendorRelation=P,this}getPrimaryKey(){return this.id}toMap(t){const e={};return e.id=t.id,e.owner_user_id=t.ownerUserId,e.status=t.status,e.name=t.name,e.phone=t.phone,e.email=t.email,e.address=t.address,e.description=t.description,e.website=t.website,e.facebook=t.facebook,e.instagram=t.instagram,e.product_count=t.productCount,e.currency_id=t.currencyId,e.added_date=t.addedDate,e.expired_date=t.expiredDate,e.expire_status=t.expireStatus,e.logo=new r().toMap(t.logo),e.banner_1=new r().toMap(t.banner1),e.banner_2=new r().toMap(t.banner2),e.vendor_application=new s().toMap(t.vendorApplication),e.added_date_str=t.addedDateStr,e.updated_flag=t.updatedFlag,e.vendorRelation=new o().toMapList(t.vendorRelation),e}toMapList(t){const e=[];for(let i=0;i<t.length;i++)t[i]!=null&&e.push(this.toMap(t[i]));return e}fromMap(t){return new h().init(t.id,t.owner_user_id,t.status,t.name,t.phone,t.email,t.address,t.description,t.website,t.facebook,t.instagram,t.product_count,t.currency_id,t.added_date,t.expired_date,t.expire_status,new r().fromMap(t.logo),new r().fromMap(t.banner_1),new r().fromMap(t.banner_2),new s().fromMap(t.vendor_application),t.added_date_str,t.updated_flag,new o().fromMapList(t.vendorRelation))}fromMapList(t){const e=[];for(const i of t)i!=null&&e.push(this.fromMap(i));return e}}export{h as V};