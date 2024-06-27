import{P as _}from"./ps_constants.0e2a11f9.js";import y from"./PsLabel.3cf95094.js";import k from"./PsRouteLink.8f7df026.js";import b from"./PsDropdown.f31a931d.js";import S from"./PsDropdownSelect.8d0bad23.js";import{_ as P}from"./plugin-vue_export-helper.21dcd24c.js";import{d as w,i as f,o as h,c as v,a as m,b as o,w as a,q as d,t as s,F as O,s as x,n as $,r as g}from"./app.0e502cc5.js";import"./PsValueStore.a232cbb1.js";import"./PsIcon.dc31c2db.js";const L=w({name:"OrderListNavBar",components:{PsLabel:y,PsRouteLink:k,PsDropdown:b,PsDropdownSelect:S},props:{orderHistoryList:Object},setup(e,{emit:t}){const c=f(0),u=f({id:0,title:"core_fe__most_recent",orderBy:"added_date",type:"desc"}),A="px-3 py-2 flex gap-3 items-center cursor-pointer border-b-4",C=[{id:0,title:"core_fe__most_recent",orderBy:"added_date",type:"desc"},{id:1,title:"core_fe__oldest",orderBy:"added_date",type:"asc"},{id:2,title:"core_fe__price_high_to_low",orderBy:"total_price",type:"desc"},{id:3,title:"core_fe__price_low_to_high",orderBy:"total_price",type:"asc"}],r=f(0),l=f("core_fe__most_recent");function p(n){c.value=n,t("changeOrderStatus",n,u.value)}function i(n){u.value=n,l.value=n.title,t("changeOrderStatus",c.value,n)}return{sortingArr:C,activeSortingArrId:r,changeOrderStatus:p,activeStatus:c,orderingFilterClicked:i,activeSortingName:l,PsConst:_,navThemes:A}}}),B={class:"w-full flex sm:justify-between flex-col md:flex-row gap-4"},j={class:"overflow-x-auto"},D={class:"flex"},N={class:""},T={class:"rounded-md shadow-xs w-56 pt-2 z-30"},H=["onClick"];function V(e,t,c,u,A,C){const r=g("ps-label"),l=g("ps-dropdown-select"),p=g("ps-dropdown");return h(),v("div",B,[m("div",j,[m("div",D,[o(r,{onClick:t[0]||(t[0]=i=>e.changeOrderStatus(0)),textColor:[e.navThemes,e.activeStatus==0?"border-fePrimary-500 text-fePrimary-500":"dark:border-feAchromatic-700 text-feAchromatic-800 dark:text-feAchromatic-400"]},{default:a(()=>[d(s(e.$t("core_fe__all"))+" ",1),o(r,{textColor:"w-5 h-5 text-feAchromatic-800 dark:text-feAchromatic-400 rounded-full bg-feAchromatic-200 dark:bg-feAchromatic-700 flex items-center justify-center"},{default:a(()=>[d(s(e.orderHistoryList.allOrderCount),1)]),_:1})]),_:1},8,["textColor"]),o(r,{onClick:t[1]||(t[1]=i=>e.changeOrderStatus(e.PsConst.OrderPendingStatus)),textColor:[e.navThemes,e.activeStatus==e.PsConst.OrderPendingStatus?"border-fePrimary-500 text-fePrimary-500":"dark:border-feAchromatic-700 text-feAchromatic-800 dark:text-feAchromatic-400"]},{default:a(()=>[d(s(e.$t("core_fe__pending"))+" ",1),o(r,{textColor:"w-5 h-5 text-feAchromatic-800 dark:text-feAchromatic-400 rounded-full bg-feAchromatic-200 dark:bg-feAchromatic-700 flex items-center justify-center"},{default:a(()=>[d(s(e.orderHistoryList.pendingOrderCount),1)]),_:1})]),_:1},8,["textColor"]),o(r,{onClick:t[2]||(t[2]=i=>e.changeOrderStatus(e.PsConst.OrderApprovedStatus)),textColor:[e.navThemes,e.activeStatus==e.PsConst.OrderApprovedStatus?"border-fePrimary-500 text-fePrimary-500":"dark:border-feAchromatic-700 text-feAchromatic-800 dark:text-feAchromatic-400"]},{default:a(()=>[d(s(e.$t("core_fe__approved"))+" ",1),o(r,{textColor:"w-5 h-5 text-feAchromatic-800 dark:text-feAchromatic-400 rounded-full bg-feAchromatic-200 dark:bg-feAchromatic-700 flex items-center justify-center"},{default:a(()=>[d(s(e.orderHistoryList.approvedOrderCount),1)]),_:1})]),_:1},8,["textColor"]),o(r,{onClick:t[3]||(t[3]=i=>e.changeOrderStatus(e.PsConst.OrderDeliveringStatus)),textColor:[e.navThemes,e.activeStatus==e.PsConst.OrderDeliveringStatus?"border-fePrimary-500 text-fePrimary-500":"dark:border-feAchromatic-700 text-feAchromatic-800 dark:text-feAchromatic-400"]},{default:a(()=>[d(s(e.$t("core_fe__delivering"))+" ",1),o(r,{textColor:"w-5 h-5 text-feAchromatic-800 dark:text-feAchromatic-400 rounded-full bg-feAchromatic-200 dark:bg-feAchromatic-700 flex items-center justify-center"},{default:a(()=>[d(s(e.orderHistoryList.deliveringOrderCount),1)]),_:1})]),_:1},8,["textColor"]),o(r,{onClick:t[4]||(t[4]=i=>e.changeOrderStatus(e.PsConst.OrderDeliveredStatus)),textColor:[e.navThemes,e.activeStatus==e.PsConst.OrderDeliveredStatus?"border-fePrimary-500 text-fePrimary-500":"dark:border-feAchromatic-700 text-feAchromatic-800 dark:text-feAchromatic-400"]},{default:a(()=>[d(s(e.$t("core_fe__delivered"))+" ",1),o(r,{textColor:"w-5 h-5 text-feAchromatic-800 dark:text-feAchromatic-400 rounded-full bg-feAchromatic-200 dark:bg-feAchromatic-700 flex items-center justify-center"},{default:a(()=>[d(s(e.orderHistoryList.deliveredOrderCount),1)]),_:1})]),_:1},8,["textColor"])])]),m("div",N,[o(p,{horizontalAlign:"right",class:"lg:mt-2 mt-1 md:w-full dark:bg-feAchromatic-800"},{select:a(()=>[o(l,{showCenter:!0,selectedValue:e.$t(e.activeSortingName)},null,8,["selectedValue"])]),list:a(()=>[m("div",T,[(h(!0),v(O,null,x(e.sortingArr,i=>(h(),v("div",{key:i.id,class:"w-72 flex py-4 px-2 hover:bg-fePrimary-50 dark:hover:bg-feSecondary-500 cursor-pointer items-center",onClick:n=>e.orderingFilterClicked(i)},[o(r,{class:$(["ms-2",i.id==e.activeSortingArrId?" font-medium":"font-light"])},{default:a(()=>[d(s(e.$t(i.title)),1)]),_:2},1032,["class"])],8,H))),128))])]),_:1})])])}var M=P(L,[["render",V]]);export{M as default};
