import{P as r}from"./PsObject.a17ef38f.js";class h extends r{constructor(){super(...arguments),this.id="",this.cityId="",this.townshipName="",this.odering="",this.lat="",this.lng="",this.status="",this.addedDate="",this.addedDateStr=""}getPrimaryKey(){return this.id}init(t,a,s,d,i,e,n,l,m){return this.id=t,this.cityId=a,this.townshipName=s,this.odering=d,this.lat=i,this.lng=e,this.status=n,this.addedDate=l,this.addedDateStr=m,this}fromMap(t){return new h().init(t.id,t.city_id,t.name,t.odering,t.lat,t.lng,t.status,t.added_date,t.added_date_str)}fromMapList(t){const a=[];for(const s in t)s!=null&&a.push(this.fromMap(s));return a}toMap(t){const a={};return a.id=t.id,a.city_id=t.cityId,a.name=t.townshipName,a.odering=t.odering,a.lat=t.lat,a.lng=t.lng,a.status=t.status,a.added_date=t.addedDate,a.added_date_str=t.addedDateStr,a}toMapList(t){const a=[];for(let s=0;s<t.length;s++)t[s]!=null&&a.push(this.toMap(t[s]));return a}}class u extends r{constructor(){super(...arguments),this.id="",this.name="",this.lat="",this.lng="",this.status="",this.addedDate="",this.addedDateStr=""}getPrimaryKey(){return this.id}init(t,a,s,d,i,e,n){return this.id=t,this.name=a,this.lat=s,this.lng=d,this.status=i,this.addedDate=e,this.addedDateStr=n,this}fromMap(t){return new u().init(t.id,t.name,t.lat,t.lng,t.status,t.added_date,t.added_date_str)}fromMapList(t){const a=[];for(const s in t)s!=null&&a.push(this.fromMap(s));return a}toMap(t){const a={};return a.id=t.id,a.name=t.name,a.lat=t.lat,a.lng=t.lng,a.status=t.status,a.added_date=t.addedDate,a.added_date_str=t.addedDateStr,a}toMapList(t){const a=[];for(let s=0;s<t.length;s++)t[s]!=null&&a.push(this.toMap(t[s]));return a}}export{h as I,u as a};
