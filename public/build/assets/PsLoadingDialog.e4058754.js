import u from"./PsModal.20834757.js";import g from"./PsLabelTitle.41617619.js";import b from"./PsLabel.3cf95094.js";import{d as $,i as r,B as v,o as x,f as C,w as e,b as i,q as _,t as m,r as a}from"./app.0e502cc5.js";import{_ as M}from"./plugin-vue_export-helper.21dcd24c.js";import"./vue-neat-modal.d03c5dee.js";import"./PsLine.4597488d.js";const P=$({components:{PsModal:u,PsLabel:b,PsLabelTitle:g},setup(){const o=r(),t=r(v("ps_loading_dialog__loading"));function s(){o.value.toggle(!0)}function l(){o.value.toggle(!1)}function n(p){t.value=p}return{psmodal:o,openModal:s,closeModal:l,message:t,setMessage:n}}});function h(o,t,s,l,n,p){const c=a("ps-label-title"),d=a("ps-label"),f=a("ps-modal");return x(),C(f,{ref:"psmodal",maxWidth:"350px",isClickOut:!1,class:"z-50"},{title:e(()=>[i(c,null,{default:e(()=>[_(m(o.$t("ps_loading_dialog__please_wait")),1)]),_:1})]),body:e(()=>[i(d,null,{default:e(()=>[_(m(o.$t(o.message)),1)]),_:1})]),footer:e(()=>[]),_:1},512)}var T=M(P,[["render",h]]);export{T as default};
