import v from"./PsCard.ba2c0a4b.js";import y from"./PsLabel.3cf95094.js";import w from"./PsButton.bc5ed803.js";import S from"./PsIcon.dc31c2db.js";import C from"./Rating.6f6d6629.js";import B from"./PsLabelCaption.a33ce9c4.js";import I from"./PsRouteLink.8f7df026.js";import{B as k}from"./BlockedUser.0d78d6f8.js";import{_ as P}from"./plugin-vue_export-helper.21dcd24c.js";import{o as d,c as h,a as o,b as t,w as r,m as N,g as m,q as a,t as s,f as x,r as n,E as U}from"./app.0e502cc5.js";import"./PsObject.a17ef38f.js";import"./RatingDetail.291ad5d1.js";const L={name:"UserListHorizontal",components:{PsCard:v,PsLabel:y,Rating:C,PsLabelCaption:B,PsButton:w,PsIcon:S,PsRouteLink:I},props:{block:{type:k,default:new k},onClick:Function},setup(){return{}}},V={class:"shadow-sm relative bg-feSecondary-50 dark:bg-feSecondary-800 rounded-lg flex flex-col gap-4 p-4"},z={class:"flex gap-4"},E={class:"w-20 h-20 relative cursor-pointer"},R={alt:"Placeholder",width:"15px",height:"10px",class:"w-full h-full rounded-full object-cover"},D={key:0,class:"w-8 h-8 bg-feInfo-500 rounded-full p-1 absolute bottom-0 right-0"},j={class:"grow flex flex-col gap-2 justify-center truncate"},q={class:"flex flex-col"},H={class:"self-center hidden"},F={class:"grid grid-cols-2"},T={class:"flex items-center gap-1"},A={class:"flex items-center gap-1"},G={class:"h-9"};function J(l,_,e,K,M,O){const i=n("ps-icon"),f=n("ps-route-link"),c=n("ps-label"),b=n("rating"),u=n("router-link"),g=n("ps-button"),p=U("lazy");return d(),h("div",V,[o("div",z,[t(f,{to:{name:"fe_other_profile",params:{userId:e.block.userId}}},{default:r(()=>[o("div",E,[N(o("img",R,null,512),[[p,{src:l.$page.props.thumb2xUrl+"/"+e.block.userCoverPhoto,loading:l.$page.props.sysImageUrl+"/loading_gif.gif",error:l.$page.props.sysImageUrl+"/default_profile.png"}]]),e.block.isVerifybluemark=="1"?(d(),h("div",D,[t(i,{name:"bluemark",textColor:"text-feSecondary-50",w:"24",h:"24"})])):m("",!0)])]),_:1},8,["to"]),o("div",j,[t(f,{to:{name:"fe_other_profile",params:{userId:e.block.userId}},class:"cursor-pointer"},{default:r(()=>[t(c,{textColor:"text-lg font-semibold text-feSecondary-800 dark:text-feSecondary-50"},{default:r(()=>[a(s(e.block.userName.length>17?e.block.userName.slice(0,17)+"...":e.block.userName),1)]),_:1})]),_:1},8,["to"]),t(f,{to:{name:"fe_review_list",query:{user_id:e.block.userId}}},{default:r(()=>[t(b,{class:"h-4",grade:e.block?e.block.overallRating:0,maxStars:5,hasCounter:!0},null,8,["grade"])]),_:1},8,["to"]),o("div",q,[o("div",null,[e.block.isShowPhone=="1"?(d(),x(u,{key:0,class:"cursor-pointer"},{default:r(()=>[t(c,{textColor:"text-sm font-normal text-feSecondary-800 dark:text-feSecondary-50"},{default:r(()=>[a(s(e.block.userPhone),1)]),_:1})]),_:1})):m("",!0)]),o("div",null,[e.block.isShowEmail=="1"?(d(),x(u,{key:0,class:"cursor-pointer"},{default:r(()=>[t(c,{textColor:"text-sm font-normal text-feSecondary-800 dark:text-feSecondary-50"},{default:r(()=>[a(s(e.block.userEmail),1)]),_:1})]),_:1})):m("",!0)])])]),o("div",H,[t(u,null,{default:r(()=>[t(i,{textColor:"text-feSecondary-800",name:"arrowNarrowRight",w:"24",h:"24",viewBox:"0 -3 9 20"})]),_:1})])]),o("div",F,[o("div",T,[t(i,{class:"text-feSecondary-800 dark:text-feSecondary-50",name:"user-group-fill",w:"24",h:"24",viewBox:"0 0 24 24"}),t(c,{textColor:"text-sm font-medium text-feSecondary-800 dark:text-feSecondary-50"},{default:r(()=>[a(s(l.user?e.block.followerCount:"0")+" "+s(l.$t("profile__followers")),1)]),_:1})]),o("div",A,[t(i,{class:"text-feSecondary-800 dark:text-feSecondary-50",name:"shoppingCart-fill",w:"24",h:"24",viewBox:"0 0 24 24"}),t(c,{textColor:"text-sm font-medium text-feSecondary-800 dark:text-feSecondary-50"},{default:r(()=>[a(s(l.user?e.block.activeItemCount:"0")+" "+s(l.$t("user__item")),1)]),_:1})])]),o("div",G,[t(g,{onClick:_[0]||(_[0]=Q=>e.onClick!=null?e.onClick(e.block):null),class:"absolute bottom-4 right-4 left-4"},{default:r(()=>[a(s(l.$t("blocked_user_list__unblock")),1)]),_:1})])])}var ne=P(L,[["render",J]]);export{ne as default};
