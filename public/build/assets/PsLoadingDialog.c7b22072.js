import{P as u}from"./PsModal.0f9f6579.js";import{P as g}from"./PsLabelTitle.4b6d4222.js";import{P as b}from"./PsLabel.6d5b1b0c.js";import{d as P,i as r,B as v,o as x,f as $,w as e,b as i,q as _,t as c,r as a}from"./app.0e502cc5.js";import{_ as C}from"./plugin-vue_export-helper.21dcd24c.js";const M=P({components:{PsModal:u,PsLabel:b,PsLabelTitle:g},setup(){const o=r(),s=r(v("core.ps_loading_dialog__loading"));function t(){o.value.toggle(!1)}function l(){o.value.toggle(!1)}function n(p){s.value=p}return{psmodal:o,openModal:t,closeModal:l,message:s,setMessage:n}}});function h(o,s,t,l,n,p){const d=a("ps-label-title"),m=a("ps-label"),f=a("ps-modal");return x(),$(f,{ref:"psmodal",maxWidth:"450px",isClickOut:!1,class:"z-50"},{title:e(()=>[i(d,null,{default:e(()=>[_(c(o.$t("ps_loading_dialog__please_wait")),1)]),_:1})]),body:e(()=>[i(m,null,{default:e(()=>[_(c(o.message),1)]),_:1})]),footer:e(()=>[]),_:1},512)}var D=C(M,[["render",h]]);export{D as P};