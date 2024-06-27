import I from"./PsCard.ba2c0a4b.js";import L from"./PsLabel.3cf95094.js";import N from"./PsButton.bc5ed803.js";import F from"./Rating.6f6d6629.js";import V from"./PsRouteLink.8f7df026.js";import{P as z}from"./PsValueStore.a232cbb1.js";import{U as A}from"./User.0c3ba1a8.js";import{i as B,o as a,c as g,a as t,b as s,w as r,m as D,q as n,t as u,f as y,g as w,F as E,B as U,O as H,r as m,E as M}from"./app.0e502cc5.js";import{u as O}from"./UserStore.ecd89ebd.js";import R from"./PsLoadingDialog.e4058754.js";import{U as j}from"./UserFollowHolder.8b598f9e.js";import{P as q}from"./ps_constants.0e2a11f9.js";import{_ as G}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsIcon.dc31c2db.js";import"./PsObject.a17ef38f.js";import"./RatingDetail.291ad5d1.js";import"./ProductRelation.0b376978.js";import"./PsApiService.98e573c3.js";import"./DefaultPhoto.cc755f93.js";import"./PsSepetetedStore.9a31ac47.js";import"./UserListParameterHolder.d110b747.js";import"./ApiStatus.5720ba0b.js";import"./PsModal.20834757.js";import"./vue-neat-modal.d03c5dee.js";import"./PsLine.4597488d.js";import"./PsLabelTitle.41617619.js";const T={name:"UserListHorizontal",components:{PsCard:I,PsLabel:L,Rating:F,PsRouteLink:V,PsButton:N,PsLoadingDialog:R},props:{user:{type:A},onClick:Function,storeName:{type:String,default:"storeName"}},setup(l){const e=z().getLoginUserId(),o=B(),f=new j,c=O(l.storeName);async function i(_){e&&e!=q.NO_LOGIN_USER?(o.value.openModal(),_.isFollowed=="1"?o.value.message=U("other_profile__removing_user_from_follower_list"):o.value.message=U("other_profile__adding_user_to_follower_list"),f.userId=e,f.followedUserId=_.userId,await c.postUserFollow(f),x(),o.value.closeModal()):H.get(route("login"))}async function x(){await c.refleshUserSearchList(e,c.userparamHolder)}return{userStore:c,LoginUserId:e,followClick:i,psloading:o}}},J={class:"p-4 bg-fePrimary-50 dark:bg-feAchromatic-800 rounded-xl lg:rounded-2xl"},K={class:"flex items-start justify-between leading-none"},Q={class:"flex items-start no-underline text-feAchromatic-900 cursor-pointer"},W={class:"flex mt-2 w-10"},X={alt:"admin",class:"rounded-full bg-transparent mx-1 w-10 h-10 object-cover",width:"15",height:"10"},Y={class:"flex flex-col ms-4 w-28 sm:w-32"},Z={class:"flex"},$={class:"flex items-center mt-1.5"},ee={key:0,class:"flex ms-2 mt-2"},te={key:1,class:"flex ms-2 mt-2"};function oe(l,d,e,o,f,c){const i=m("ps-label"),x=m("rating"),_=m("ps-route-link"),v=m("ps-button"),P=m("ps-card"),S=m("ps-loading-dialog"),C=M("lazy");return a(),g(E,null,[t("div",{class:"cursor-pointer h-full w-full",onClick:d[1]||(d[1]=h=>e.onClick!=null?e.onClick(e.user):null)},[s(P,{class:"flex-col h-full bg-fePrimary-50 dark:bg-feAchromatic-800"},{default:r(()=>{var h,k,b;return[t("div",J,[t("div",K,[t("div",Q,[t("div",W,[D(t("img",X,null,512),[[C,{src:l.$page.props.thumb1xUrl+"/"+e.user.userProfilePhoto,loading:l.$page.props.sysImageUrl+"/loading_gif.gif",error:l.$page.props.sysImageUrl+"/default_photo.png"}]])]),t("div",Y,[s(_,{to:{name:"fe_other_profile",query:{userId:(h=e.user)==null?void 0:h.userId}}},{default:r(()=>[t("div",Z,[s(i,{class:"font-medium lg:text-base text-sm"},{default:r(()=>[n(u(e.user?e.user.userName:""),1)]),_:1})]),t("div",$,[s(x,{grade:e.user?e.user.overallRating:0,maxStars:5,hasCounter:!0},null,8,["grade"])]),e.user&&e.user.isShowEmail=="1"?(a(),y(i,{key:0,class:"font-light text-xxs lg:text-xs mt-0.5"},{default:r(()=>[n(u(e.user?e.user.userEmail:""),1)]),_:1})):w("",!0),e.user&&e.user.isShowPhone=="1"?(a(),y(i,{key:1,class:"font-light text-xxs lg:text-xs mt-0.5"},{default:r(()=>[n(u(e.user?e.user.userPhone:""),1)]),_:1})):w("",!0),s(i,{class:"font-light text-xxs lg:text-xs mt-1.5"},{default:r(()=>{var p;return[n(u(e.user?e.user.userAboutMe.length>20?e.user.userAboutMe.slice(0,20)+" ....":(p=e.user)==null?void 0:p.userAboutMe:""),1)]}),_:1})]),_:1},8,["to"])]),((k=e.user)==null?void 0:k.userId)!=o.LoginUserId?(a(),g("div",{key:0,onClick:d[0]||(d[0]=p=>o.followClick(e.user))},[((b=e.user)==null?void 0:b.isFollowed)=="0"?(a(),g("div",ee,[s(v,{rounded:"rounded-2xl",textSize:"text-xxs lg:text-xs"},{default:r(()=>[n(u(l.$t("other_profile__follow")),1)]),_:1})])):(a(),g("div",te,[s(v,{rounded:"rounded-2xl",textSize:"text-xxs lg:text-xs"},{default:r(()=>[n(u(l.$t("other_profile__unfollow")),1)]),_:1})]))])):w("",!0)])])])]}),_:1})]),s(S,{ref:"psloading",isClickOut:!1},null,512)],64)}var Le=G(T,[["render",oe]]);export{Le as default};