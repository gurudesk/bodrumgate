import{a as v,P as n}from"./PsApiService.98e573c3.js";import{C as l}from"./ChatHistory.c3f26661.js";import{S as U}from"./SyncChatHistoryParameterHolder.24ffbfbb.js";import{bD as C,y as m,i as M}from"./app.0e502cc5.js";import{m as k}from"./PsSepetetedStore.9a31ac47.js";class b{constructor(){this.itemId="",this.buyerUserId="",this.sellerUserId=""}MarkAsSoldParameterHolder(){this.itemId="",this.buyerUserId="",this.sellerUserId=""}toMap(){const a={};return a.item_id=this.itemId,a.buyer_user_id=this.buyerUserId,a.seller_user_id=this.sellerUserId,a}}const D=k(c=>C(`getChatHistoryStore/${c}`,()=>{const a=m(new v),t=m({value:!1});let y=M(30),p=0;function f(e){a.data=e.data}async function h(e,r){t.value=!0;const i=await n.getChatHistory(new l,r,e.toMap());f(i),t.value=!1}async function S(e,r,i,d,o,u){const s=new U;s.itemId=e,s.buyerUserId=r,s.sellerUserId=i,s.type=d,s.isUserOnline=o,s.message=u,await n.syncChatHistory(new l,s.toMap())}async function I(e,r){t.value=!0,await n.acceptedOffer(new l,e,r.toMap()),t.value=!1}async function H(e,r){t.value=!0,await n.rejectedOffer(new l,e,r.toMap()),t.value=!1}async function w(e,r,i,d){const o=new b;o.itemId=r.toString(),o.buyerUserId=i.toString(),o.sellerUserId=d.toString(),t.value=!0;const u=await n.makeMarkAsSold(new l,e,o.toMap());return t.value=!1,u}return{chatHistory:a,loading:t,limit:y,offset:p,updateChatHistory:f,loadChatHistory:h,postChatHistory:S,postAcceptedOffer:I,postRejectedOffer:H,makeMarkAsSold:w}}));export{D as u};
