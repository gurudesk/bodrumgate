import{d as c,o,c as f,a as m,f as a,g as t,w as n,q as s,t as i,b,n as _,O as g,r as p}from"./app.0e502cc5.js";import{P as k}from"./PsLabel.6d5b1b0c.js";import{P as w}from"./PsIcon.8dbf90d4.js";import{P as S}from"./PsButton.ed5c0dad.js";import{h}from"./moment.9709ab41.js";import{_ as v}from"./plugin-vue_export-helper.21dcd24c.js";import"./Icons.c01eddd9.js";const y=c({name:"VendorDetailSubscriptionNotification",components:{PsLabel:k,PsIcon:w,PsButton:S},props:{expiredStatus:Number,expiredDate:String},setup(e){function r(){g.get(route("upgrade_subscription.index"))}return{moment:h,upgradeClick:r}}}),C={class:"w-6 h-6"};function $(e,r,x,D,N,B){const d=p("ps-icon"),l=p("ps-label"),u=p("ps-button");return e.expiredStatus!=0?(o(),f("div",{key:0,class:_(["flex p-4 rounded-lg border gap-4 mb-8",e.expiredStatus==1?"border-yellow-400 bg-yellow-50":"border-red-400 bg-red-50"])},[m("div",C,[e.expiredStatus==1?(o(),a(d,{key:0,theme:"text-yellow-500",name:"warning-triangle",w:"24",h:"24"})):t("",!0),e.expiredStatus==2?(o(),a(d,{key:1,theme:"text-red-500",name:"close-fill",w:"24",h:"24",viewBox:"0 0 16 16"})):t("",!0)]),m("div",null,[e.expiredStatus==1?(o(),a(l,{key:0,textColor:"font-semibold"},{default:n(()=>[s(i(e.$t("core_vendor__subscription_plan_warning_info",{attribute:e.moment(e.expiredDate).format(e.$page.props.dateFormat)})),1)]),_:1})):t("",!0),e.expiredStatus==2?(o(),a(l,{key:1,textColor:"font-semibold"},{default:n(()=>[s(i(e.$t("core_vendor__subscription_plan_expired_info",{attribute:e.moment(e.expiredDate).format(e.$page.props.dateFormat)})),1)]),_:1})):t("",!0),b(u,{onClick:r[0]||(r[0]=P=>e.upgradeClick()),class:"mt-4",rounded:"rounded",colors:"bg-red-500 text-white dark:text-secondaryDark-black"},{default:n(()=>[s(i(e.$t("core_vendor__purchase_now")),1)]),_:1})])],2)):t("",!0)}var L=v(y,[["render",$]]);export{L as default};
