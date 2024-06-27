import U from"./PsCard.ba2c0a4b.js";import D from"./PsIcon.dc31c2db.js";import A from"./PsLabel.3cf95094.js";import{u as k}from"./AppInfoStore.266a6525.js";import{A as H}from"./AppInfoParameterHolder.e24d894d.js";import{u as V}from"./PsValueHolder.a0cf6b69.js";import{P as x}from"./PsValueStore.a232cbb1.js";import{P as w}from"./ps_constants.0e2a11f9.js";import{C as O}from"./ChatHistory.c3f26661.js";import{o as g,c as _,a as r,m as y,b as i,w as d,q as c,t as l,n as j,B as z,O as T,r as I,E as B}from"./app.0e502cc5.js";import{h as P}from"./moment.9709ab41.js";import{f as E}from"./format.min.502eec0f.js";import{_ as F}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsApiService.98e573c3.js";import"./PsObject.a17ef38f.js";import"./DefaultPhoto.cc755f93.js";import"./Product.29c94914.js";import"./Category.7c65464b.js";import"./DefaultIcon.e76b39a5.js";import"./SubCategory.1b4176e0.js";import"./ItemCurrency.91c8ce91.js";import"./ItemLocation.d1b92a80.js";import"./ProductRelation.0b376978.js";import"./User.0c3ba1a8.js";import"./RatingDetail.291ad5d1.js";import"./Vendor.d946ee87.js";const L={name:"ChatHorizontalItem",components:{PsIcon:D,PsLabel:A,PsCard:U},props:{chathistory:{type:O},dateFormat:{type:String}},setup(o){x.psValueStore=V();const t=x().getLoginUserId(),n=new H;n.userId=t;const f=k();function b(e){return e.toString()=="0"?z("item_price__free"):E(f.appInfo.data.mobileSetting.price_format,e)}function a(e){T.get(route("fe_chat"),{buyer_user_id:e.buyerUserId,seller_user_id:e.sellerUserId,item_id:e.itemId,chat_flag:w.CHAT_FROM_SELLER.toString()})}function u(e){let m=e.split(" ")[0],s=e.split(" ")[1],S=new Date().toISOString().split("T")[0];s=s.split(":"),s.pop(),s=s.join(":");let v=new Date,p=new Date(v);p.setDate(p.getDate()-1);let C=p.toISOString().split("T")[0];switch(!0){case m==S:return s;case m==C:return"Yesterday";default:return P(m).format(o.dateFormat)}}return{formatPrice:b,PsConst:w,appInfoStore:f,gotoDetail:a,chatTimeHistory:u,moment:P}}},N={class:"flex h-full"},M={class:"h-full p-2 sm:w-[100px] relative flex items-center"},R={alt:"Placeholder",class:"rounded-full bg-transparent h-16 w-16 sm:h-full sm:w-full border-2 border-feAchromatic-300"},Y={class:"absolute left-9 top-12 w-6 h-6 block sm:hidden"},q={alt:"Placeholder",class:"rounded-full w-full h-full border-2 border-feAchromatic-100"},G={class:"grow px-3 py-3"},J={class:"flex justify-between items-center w-full"},K={class:"flex justify-between w-full"},Q={key:0,class:"flex justify-center items-center font-normal text-sm rounded-full w-5 h-5 bg-fePrimary-600 text-feAchromatic-200"},W={key:1,class:"w-10 h-10 flex justify-center items-center"},X={class:"h-full hidden sm:block w-36 p-2"},Z={alt:"Placeholder",class:"rounded w-full h-full"};function $(o,h,t,n,f,b){const a=I("ps-label"),u=I("ps-icon"),e=B("lazy");return g(),_("div",{class:"cursor-pointer",onClick:h[0]||(h[0]=m=>n.gotoDetail(t.chathistory))},[r("div",{class:j(`h-[80px] sm:h-[100px] rounded-lg shadow-sm overflow-hidden  ${t.chathistory.buyerUnreadCount>0?"bg-feAchromatic-100 dark:bg-feSecondary-700":""} dark:bg-Archromatic-900`)},[r("div",N,[r("div",M,[y(r("img",R,null,512),[[e,{src:o.$page.props.thumb1xUrl+"/"+t.chathistory.seller.userCoverPhoto,loading:o.$page.props.sysImageUrl+"/loading_gif.gif",error:o.$page.props.sysImageUrl+"/default_photo.png"}]]),r("div",Y,[y(r("img",q,null,512),[[e,{src:o.$page.props.thumb1xUrl+"/"+t.chathistory.item.defaultPhoto.imgPath,loading:o.$page.props.sysImageUrl+"/loading_gif.gif",error:o.$page.props.sysImageUrl+"/default_photo.png"}]])])]),r("div",G,[i(a,{textColor:"font-medium text-fePrimary-600 text-xs sm:text-lg"},{default:d(()=>[c(l(t.chathistory?t.chathistory.seller.userName:""),1)]),_:1}),r("div",J,[i(a,{class:"font-medium text-xs sm:text-lg truncate"},{default:d(()=>[c(l(t.chathistory?t.chathistory.item.title:""),1)]),_:1}),i(a,{class:"text-xs truncate"},{default:d(()=>[c(l(t.chathistory.addedDateStr.includes("months")||t.chathistory.addedDateStr.includes("years")?n.moment(t.chathistory.addedDate).format(t.dateFormat):t.chathistory.addedDateStr),1)]),_:1})]),r("div",K,[i(a,{class:"font-normal text-sm text-feAchromatic-400",textColor:"text-feAchromatic-600"},{default:d(()=>[c(l(t.chathistory?t.chathistory.latestChatMessage:""),1)]),_:1}),t.chathistory.buyerUnreadCount>0?(g(),_("span",Q,l(t.chathistory?t.chathistory.buyerUnreadCount:"0"),1)):(g(),_("div",W,[i(u,{name:"done_all",class:"text-feAchromatic-400",w:"24",h:"24"})]))])]),r("div",X,[y(r("img",Z,null,512),[[e,{src:o.$page.props.thumb1xUrl+"/"+t.chathistory.item.defaultPhoto.imgPath,loading:o.$page.props.sysImageUrl+"/loading_gif.gif",error:o.$page.props.sysImageUrl+"/default_photo.png"}]])])])],2)])}var Ct=F(L,[["render",$]]);export{Ct as default};
