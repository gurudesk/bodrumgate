import{P as x}from"./PsModal.0f9f6579.js";import{P as b}from"./PsLabel.6d5b1b0c.js";import{P}from"./PsLoading.0f9a761a.js";import{d as v,i as l,B as m,o as h,f as y,w as a,a as _,b as r,q as f,t as g,r as i}from"./app.0e502cc5.js";import{P as w}from"./PsButton.ed5c0dad.js";import{_ as B}from"./plugin-vue_export-helper.21dcd24c.js";const C=v({components:{PsModal:x,PsLabel:b,PsLoading:P,PsButton:w},setup(){const e=l(),n=l(m("ps_loading_dialog__please_wait")),s=l(m("ps_loading_dialog__loading"));function c(o,t){n.value=o,s.value=t,e.value.toggle(!1)}function d(){e.value.toggle(!1)}function p(o){s.value=o}return{psmodal:e,openModal:c,closeModal:d,message:s,setMessage:p,title:n}}}),M={class:"flex flex-row justify-center items-center text-center"},$={class:"mt-4 flex flex-col justify-center items-center text-center"};function k(e,n,s,c,d,p){const o=i("ps-loading"),t=i("ps-label"),u=i("ps-modal");return h(),y(u,{ref:"psmodal",maxWidth:"480px",isClickOut:!1,class:"z-50"},{title:a(()=>[_("div",M,[r(o,{theme:"border-6 border-t-6 border-secondary-200 border-t-primary-500",loadingSize:"h-20 w-20"})])]),body:a(()=>[_("div",$,[r(t,{class:"text-2xl mb-4"},{default:a(()=>[f(g(e.title),1)]),_:1}),r(t,{class:"text-base"},{default:a(()=>[f(g(e.message),1)]),_:1})])]),_:1},512)}var S=B(C,[["render",k]]);export{S as P};