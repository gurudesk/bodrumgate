import b from"./PsModal.20834757.js";import v from"./PsLabelTitle.41617619.js";import P from"./PsLabel.3cf95094.js";import k from"./PsButton.bc5ed803.js";import{d as x,i as c,B as m,o as B,f as C,w as e,b as p,q as i,t as u,a as $,r as a}from"./app.0e502cc5.js";import{_ as h}from"./plugin-vue_export-helper.21dcd24c.js";import"./vue-neat-modal.d03c5dee.js";import"./PsLine.4597488d.js";const y=x({name:"PsSuccessDialog",components:{PsModal:b,PsLabel:P,PsLabelTitle:v,PsButton:k},setup(){const s=c(),o=c(m("ps_success_dialog__success")),n=c(m("ps_success_dialog__success_message"));function r(l,t){l!=null&&l.trim()!=""&&(o.value=l),t!=null&&t.trim()!=""&&(n.value=t),s.value.toggle(!0)}function _(){s.value.toggle(!1)}return{psmodal:s,openModal:r,closeModal:_,title:o,message:n}}}),D={class:"flex justify-end"},M=i(" Ok ");function N(s,o,n,r,_,l){const t=a("ps-label-title"),d=a("ps-label"),f=a("ps-button"),g=a("ps-modal");return B(),C(g,{ref:"psmodal",maxWidth:"350px",isClickOut:!1,theme:"rounded-lg p-6",class:"z-50"},{title:e(()=>[p(t,null,{default:e(()=>[i(u(s.title),1)]),_:1})]),body:e(()=>[p(d,null,{default:e(()=>[i(u(s.message),1)]),_:1})]),footer:e(()=>[$("div",D,[p(f,{onClick:o[0]||(o[0]=V=>s.psmodal.toggle(!1))},{default:e(()=>[M]),_:1})])]),_:1},512)}var A=h(y,[["render",N]]);export{A as default};
