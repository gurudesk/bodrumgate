import{P as h}from"./PsButton.ed5c0dad.js";import{P as C}from"./PsLabel.6d5b1b0c.js";import{_ as g}from"./plugin-vue_export-helper.21dcd24c.js";import{d as k,o as s,c as i,a as p,b as l,w as o,q as n,t,f as P,g as $,r as x}from"./app.0e502cc5.js";const w=k({name:"SubscriptionPlanHorizontalPlan",components:{PsButton:h,PsLabel:C},props:{plan:Object},setup(e,{emit:r}){function d(c,u,m){r("purchaseClick",c,u,m)}return{purchaseClick:d}}}),B={class:"border rounded-lg"},N={class:"py-10 flex flex-col items-center justify-center bg-secondary-100"},V={class:"mb-3 flex gap-3"},S={key:0,class:"flex items-end gap-2"},j={key:1,class:"flex items-end gap-2"},z={class:"px-4 py-8 flex flex-col items-center"};function H(e,r,d,c,u,m){var _,f;const a=x("ps-label"),v=x("ps-button");return s(),i("div",B,[p("div",N,[p("div",null,[p("div",V,[l(a,{textColor:"text-base text-secondary-500 font-medium"},{default:o(()=>[n(t(e.$t("vendor_panel__price")),1)]),_:1}),((_=e.plan)==null?void 0:_.is_most_popular_plan)==1?(s(),P(a,{key:0,textColor:"text-sm text-white font-medium bg-primary-500 px-2 py-[2px] rounded"},{default:o(()=>[n(t(e.$t("vendor_panel__most_popular")),1)]),_:1})):$("",!0)]),((f=e.plan)==null?void 0:f.discount_price)=="Unavailable"?(s(),i("div",S,[l(a,{textColor:"lg:text-5xl text-primary-500 font-semibold"},{default:o(()=>[n(t(e.plan.currency_symbol)+t(e.plan.sale_price),1)]),_:1})])):(s(),i("div",j,[l(a,{textColor:"lg:text-5xl text-primary-500 font-semibold"},{default:o(()=>[n(t(e.plan.currency_symbol)+t(e.plan.discount_price),1)]),_:1}),l(a,{textColor:"text-base text-secondary-500 font-medium line-through"},{default:o(()=>[n(t(e.plan.currency_symbol)+t(e.plan.sale_price),1)]),_:1})]))])]),p("div",z,[l(a,{textColor:"lg:text-2xl text-secondary-500 font-semibold"},{default:o(()=>[n(t(e.plan.value),1)]),_:1}),l(a,{textColor:"text-sm text-secondary-500 font-medium mt-3 mb-8"},{default:o(()=>[n(t(e.plan.duration),1)]),_:1}),l(v,{onClick:r[0]||(r[0]=U=>{var b,y;return e.purchaseClick(e.plan.id,((b=e.plan)==null?void 0:b.discount_price)=="Unavailable"?e.plan.sale_price:(y=e.plan)==null?void 0:y.discount_price,e.plan.currency_id)}),rounded:"rounded",colors:"w-full",border:"border",hover:"hover:bg-primary-500 hover:text-white"},{default:o(()=>[n(t(e.$t("vendor_panel__purchase")),1)]),_:1})])])}var O=g(w,[["render",H]]);export{O as default};