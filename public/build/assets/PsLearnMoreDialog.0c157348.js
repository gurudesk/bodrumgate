import{d as h,i as f,o as k,f as x,w as t,a,b as l,q as _,t as v,h as y,r}from"./app.0e502cc5.js";import b from"./PsModal.20834757.js";import C from"./PsLabel.3cf95094.js";import w from"./PsButton.bc5ed803.js";import $ from"./PsIcon.dc31c2db.js";import{_ as S}from"./plugin-vue_export-helper.21dcd24c.js";import"./vue-neat-modal.d03c5dee.js";import"./PsLine.4597488d.js";const M=h({name:"PsFaqDialog",components:{PsModal:b,PsLabel:C,PsButton:w,PsIcon:$},setup(){const e=f(),o=f(),i=f();let p,m;function u(s){s=="yes"?p():m(),e.value.toggle(!1)}function n(s,c){o.value=s,i.value=c,e.value.toggle(!0)}function d(){e.value.toggle(!1)}return{psmodal:e,openModal:n,actionClicked:u,close:d,data:i,title:o}}}),P={class:"flex justify-between shadow p-6 dark:bg-feSecondary-800"},B={class:"h-52 overflow-y-auto my-6 ps-6 pe-10"},L=["innerHTML"],D={class:"flex justify-end p-4"};function N(e,o,i,p,m,u){const n=r("ps-label"),d=r("ps-icon"),s=r("ps-button"),c=r("ps-modal");return k(),x(c,{ref:"psmodal",maxWidth:"868px",line:"hidden",isClickOut:!1,theme:"rounded-lg shadow-xl overflow-hidden dark:bg-feSecondary-800",class:"z-20"},{title:t(()=>[a("div",P,[l(n,{textColor:"text-2xl font-semibold text-feSecondary-800 dark:text-feSecondary-50"},{default:t(()=>[_(v(e.$t(e.title)),1)]),_:1}),l(d,{name:"close",class:"text-feAchromatic-400 hover:cursor-pointer",onClick:o[0]||(o[0]=y(g=>e.psmodal.toggle(!1),["prevent"]))})])]),body:t(()=>[a("div",B,[l(n,{class:"text-base font-normal text-feSecondary-700 dark:text-feSecondary-400"},{default:t(()=>[a("div",{innerHTML:e.data},null,8,L)]),_:1})])]),footer:t(()=>[a("div",D,[l(s,{onClick:o[1]||(o[1]=g=>e.close())},{default:t(()=>[_(v(e.$t("Close")),1)]),_:1})])]),_:1},512)}var I=S(M,[["render",N]]);export{I as default};
