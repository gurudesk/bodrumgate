import{P as B}from"./PsModal.0f9f6579.js";import{P as N}from"./PsLabel.6d5b1b0c.js";import{P as $}from"./PsButton.ed5c0dad.js";import{d as V,i as t,B as g,r,o as h,f as y,w as s,g as j,a,b as c,q as v,t as x}from"./app.0e502cc5.js";import{P as I}from"./PsIcon.8dbf90d4.js";import{_ as S}from"./plugin-vue_export-helper.21dcd24c.js";const z=V({components:{PsModal:B,PsLabel:N,PsButton:$,PsIcon:I},setup(){const e=t(),o=t(g("ps_success_dialog__success")),i=t(g("ps_success_dialog__success_message")),u=t(g("ps_confirm_dialog__yes")),d=t("checkCircle"),m=t(),n=t(!0);function l(){e.value.toggle(!1)}function f(){e.value.toggle(!1)}function p(_,k,w,C,P=!0,b){o.value=_,i.value=k.toString(),u.value=w,e.value.toggle(!0),m.value=C,n.value=P,d.value=b}return{psmodal:e,title:o,message:i,routeName:m,openModal:p,actionClicked:l,okButton:u,close:f,showIcon:n,icon:d}}}),D={class:"flex flex-col text-center justify-center items-center text-gray-300"},M={class:"w-full text-center mt-4"},q={class:"flex justify-center mt-6"},L={class:"flex-grow-0"},O=["href"];function R(e,o,i,u,d,m){const n=r("ps-icon"),l=r("ps-label"),f=r("ps-button"),p=r("ps-modal");return h(),y(p,{ref:"psmodal",maxWidth:"450px",line:"hidden",isClickOut:!1,theme:" px-6 py-7 rounded-lg shadow-xl",class:"z-20"},{title:s(()=>[e.showIcon?(h(),y(n,{key:0,onClick:o[0]||(o[0]=_=>e.close()),name:"close",class:"text-sm text-secondary-400 ms-auto my-auto focus:shadow-none hover:text-purple-500 flex justify-end"})):j("",!0),a("div",D,[c(n,{class:"flex-grow-0",name:e.icon,w:"86",h:"86"},null,8,["name"]),c(l,{class:"font-medium text-xl lg:text-2xl mt-3"},{default:s(()=>[v(x(e.title),1)]),_:1})])]),body:s(()=>[a("div",M,[c(l,{class:"font-light text-sm text-secondary-700 lg:text-base"},{default:s(()=>[v(x(e.message),1)]),_:1})])]),footer:s(()=>[a("div",q,[a("div",L,[a("a",{href:e.route(e.routeName)},[c(f,{onClick:o[1]||(o[1]=_=>e.actionClicked()),rounded:"rounded",textSize:"text-sm",class:"",colors:"bg-primary-500 text-white",hover:"hover:outline-none hover:ring hover:ring-green-100",focus:"focus:outline-none focus:ring focus:ring-green-300"},{default:s(()=>[v(x(e.okButton),1)]),_:1})],8,O)])])]),_:1},512)}var H=S(z,[["render",R]]);export{H as P};
