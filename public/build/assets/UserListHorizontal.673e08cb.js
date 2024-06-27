import{aJ as P,bC as L,i as h,o as u,c as k,b as r,w as s,a as i,g as v,q as n,t as l,f as b,n as N,F,B as C,O as H,r as d}from"./app.0e502cc5.js";import V from"./PsCard.ba2c0a4b.js";import z from"./PsLabel.3cf95094.js";import A from"./PsButton.bc5ed803.js";import B from"./PsIcon.dc31c2db.js";import D from"./RatingShow.a9e8b6e2.js";import O from"./PsLabelCaption.a33ce9c4.js";import R from"./PsRouteLink.8f7df026.js";import j from"./PsLazyImage.38e4a2ae.js";import{U as E}from"./User.0c3ba1a8.js";import{u as T}from"./UserListStore.2cdb4d6a.js";import{U,u as q}from"./UserStore.ecd89ebd.js";import{P as M}from"./PsValueStore.a232cbb1.js";import{U as W}from"./UserFollowHolder.8b598f9e.js";import{P as G}from"./ps_constants.0e2a11f9.js";import{u as J}from"./ProductStore.279e879d.js";import{P as K}from"./PsUtils.78b0d4de.js";import{_ as Q}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsObject.a17ef38f.js";import"./RatingDetail.291ad5d1.js";import"./ProductRelation.0b376978.js";import"./PsApiService.98e573c3.js";import"./UserListParameterHolder.d110b747.js";import"./PsSepetetedStore.9a31ac47.js";import"./DefaultPhoto.cc755f93.js";import"./ApiStatus.5720ba0b.js";import"./ProductParameterHolder.4354be0b.js";import"./Phone.45f97258.js";import"./Product.29c94914.js";import"./Category.7c65464b.js";import"./DefaultIcon.e76b39a5.js";import"./SubCategory.1b4176e0.js";import"./ItemCurrency.91c8ce91.js";import"./ItemLocation.d1b92a80.js";import"./Vendor.d946ee87.js";import"./UserDeleteItemParameterHolder.5d816aba.js";const X=P(()=>L(()=>import("./PsLoadingDialog.e4058754.js"),["assets/PsLoadingDialog.e4058754.js","assets/PsModal.20834757.js","assets/PsModal.d437d3a8.css","assets/vue-neat-modal.d03c5dee.js","assets/vue-neat-modal.29af7d11.css","assets/app.0e502cc5.js","assets/app.aef5a90c.css","assets/PsLine.4597488d.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/PsLabelTitle.41617619.js","assets/PsLabel.3cf95094.js"])),Y={name:"UserListHorizontal",components:{PsCard:V,PsLabel:z,PsButton:A,PsIcon:B,Rating:D,PsLabelCaption:O,PsRouteLink:R,PsLoadingDialog:X,PsLazyImage:j},props:{user:{type:E},onClick:Function,storeName:{type:String,default:""},color:{type:String,default:"bg-feAchromatic-50"}},setup(o){const m=J("detail"),t=M().getLoginUserId(),f=h(),S=h(!1),_=new W,w=new U().getFollowerUsers(),c=new U().getFollowingUsers();w.loginUserId=t,c.loginUserId=t;const a=T(o.storeName),g=q(o.storeName);async function p(y){t&&t!=G.NO_LOGIN_USER?(S.value=!0,await K.waitingComponent(f),f.value.openModal(),y.isFollowed=="1"?f.value.message=C("other_profile__removing_user_from_follower_list"):f.value.message=C("other_profile__adding_user_to_follower_list"),_.userId=t,_.followedUserId=y.userId,await g.postUserFollow(_),x(),f.value.closeModal()):H.get(route("login"))}async function x(){o.storeName=="profile-follower"?await a.refleshUserFollowerFollowingList(t,w):o.storeName=="profile-following"?await a.refleshUserFollowerFollowingList(t,c):o.storeName=="top_rated_seller"?await a.refleshTopRatedSellerList(t):o.storeName=="userSearch"?await g.refleshUserSearchList(t,g.userparamHolder):await m.loadItem(o.storeName,t)}return{userListStore:a,followClick:p,LoginUserId:t,psloading:f,showLoadingDialog:S}}},Z={class:"items-center justify-center shadow-sm relative border border-feSecondary-50 dark:border-feSecondary-800 rounded-lg flex flex-col gap-4 p-4"},$={class:"flex gap-4"},ee={class:"w-20 h-20 relative cursor-pointer"},oe={key:0,class:"w-8 h-8 bg-feInfo-500 rounded-full p-1 absolute bottom-0 right-0"},te=i("div",{class:"self-center hidden"},null,-1),re={class:"flex items-center justify-center"},se={class:"grow flex flex-col gap-2 items-center justify-center truncate"},ae={class:"flex items-center justify-between w-full mx-auto"},le={class:"flex items-center gap-1 col-span-1 md:col-span-2 lg:col-span-1"},ne={class:"h-9"};function ie(o,m,e,t,f,S){const _=d("ps-lazy-image"),w=d("ps-icon"),c=d("ps-route-link"),a=d("ps-label"),g=d("rating"),p=d("ps-button"),x=d("ps-card"),y=d("ps-loading-dialog");return u(),k(F,null,[r(x,{class:N(["flex w-full flex-col lg:rounded-lg shadow-sm",e.color]),enabledHover:!0},{default:s(()=>[i("div",Z,[i("div",$,[r(c,{to:{name:"fe_other_profile",params:{userId:e.user.userId}}},{default:s(()=>[i("div",ee,[r(_,{class:"w-full h-full rounded-full object-cover",src:o.$page.props.thumb1xUrl+"/"+e.user.userCoverPhoto,srcPlaceholder:o.$page.props.thumb1xUrl+"/"+e.user.userCoverPhoto,error:o.$page.props.sysImageUrl+"/default_profile.png"},null,8,["src","srcPlaceholder","error"]),e.user.isVerifybluemark=="1"?(u(),k("div",oe,[r(w,{name:"bluemark",textColor:"text-feSecondary-50",w:"24",h:"24"})])):v("",!0)])]),_:1},8,["to"]),te]),i("div",re,[i("div",se,[r(c,{to:{name:"fe_other_profile",params:{userId:e.user.userId}},class:"cursor-pointer"},{default:s(()=>[r(a,{textColor:"text-lg font-semibold text-feSecondary-800 dark:text-feSecondary-50"},{default:s(()=>[n(l(e.user.userName.length>17?e.user.userName.slice(0,17)+"...":e.user.userName),1)]),_:1})]),_:1},8,["to"]),r(c,{to:{name:"fe_review_list",query:{user_id:e.user.userId}}},{default:s(()=>[i("div",ae,[r(g,{rating:e.user?Number(e.user.overallRating):0,maxStars:5,iconColor:"text-feWarning-500 dark:text-feWarning-500",size:"1x"},null,8,["rating"]),r(a,{textColor:"text-sm font-medium text-feSecondary-500 dark:text-feSecondary-50"},{default:s(()=>[n(l("(")+l(e.user.ratingCount)+l(")"),1)]),_:1})])]),_:1},8,["to"]),i("div",le,[r(a,{textColor:"text-sm mr-1 font-medium font-semibold text-feSecondary-800 dark:text-feSecondary-50"},{default:s(()=>[n(l(e.user?e.user.followerCount:"0"),1)]),_:1}),r(a,{textColor:"text-sm mr-1 font-medium text-feSecondary-800 dark:text-feSecondary-50"},{default:s(()=>[n(l(o.$t("profile__followers")),1)]),_:1}),r(a,{textColor:"text-sm mr-1 font-medium text-feSecondary-200 dark:text-feSecondary-50"},{default:s(()=>[n(l(o.$t("|")),1)]),_:1}),r(a,{textColor:"text-sm mr-1 font-medium font-semibold text-feSecondary-800 dark:text-feSecondary-50"},{default:s(()=>[n(l(e.user?e.user.activeItemCount:"0"),1)]),_:1}),r(a,{textColor:"text-sm font-medium text-feSecondary-800 dark:text-feSecondary-50"},{default:s(()=>[n(l(o.$t("user__item")),1)]),_:1})])])]),i("div",ne,[e.user.userId==t.LoginUserId?(u(),b(p,{key:0,border:"border border-feSecondary-200 dark:border-feSecondary-600",colors:"bg-feAchromatic-50 text-feSecondary-800 dark:bg-feSecondary-800 dark:text-feSecondary-200",class:"'w-full absolute bottom-4 right-4 left-4",disabled:""},{default:s(()=>[n(l(o.$t("other_profile__follow")),1)]),_:1})):e.user.isFollowed=="0"?(u(),b(p,{key:1,border:"border border-feSecondary-200 dark:border-feSecondary-600",colors:"bg-feAchromatic-50 text-feSecondary-800 dark:bg-feSecondary-800 dark:text-feSecondary-200",class:"'w-full absolute bottom-4 right-4 left-4",onClick:m[0]||(m[0]=I=>t.LoginUserId==e.user.userId?"":t.followClick(e.user))},{default:s(()=>[n(l(o.$t("other_profile__follow")),1)]),_:1})):(u(),b(p,{key:2,border:"border border-feSecondary-200 dark:border-feSecondary-600",colors:"bg-feAchromatic-50 text-feSecondary-800 dark:bg-feSecondary-800 dark:text-feSecondary-200",class:"'w-full absolute bottom-4 right-4 left-4",onClick:m[1]||(m[1]=I=>t.followClick(e.user))},{default:s(()=>[n(l(o.$t("other_profile__following")),1)]),_:1}))])])]),_:1},8,["class"]),t.showLoadingDialog?(u(),b(y,{key:0,ref:"psloading",isClickOut:!1},null,512)):v("",!0)],64)}var We=Q(Y,[["render",ie]]);export{We as default};