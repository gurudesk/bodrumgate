import d from"./PsLabel.3cf95094.js";import u from"./PsNavMenu.173cb171.js";import m from"./PsLabelCaption.a33ce9c4.js";import{_ as p}from"./plugin-vue_export-helper.21dcd24c.js";import{i as f,o as h,c as k,b as e,w as o,q as a,r as l}from"./app.0e502cc5.js";import"./PsRouteLink.8f7df026.js";const b={components:{PsLabel:d,PsNavMenu:u,PsLabelCaption:m},setup(){function n(){return{userId:2222}}const s=f(!0);r();function r(){localStorage.isDarkMode!=null&&localStorage.isDarkMode=="true"?($("html").addClass("dark"),s.value=!0):($("html").removeClass("dark"),s.value=!1)}function c(){localStorage.isDarkMode!=null&&localStorage.isDarkMode=="true"?(localStorage.isDarkMode="false",s.value=!1):(localStorage.isDarkMode="true",s.value=!0),r()}return{aboutUsParmas:n,isDarkMode:s,toggleDarkMode:c}}},v={class:"flex items-center px-5 border-b py-3"},M=a(" Profile "),g=a(" Messages "),D=a(" Blog "),x=a(" Notification "),S=a(" Contact Us "),C=a(" Setting ");function P(n,s,r,c,N,B){const i=l("ps-nav-menu"),t=l("ps-label-caption"),_=l("ps-label");return h(),k("div",v,[e(i,{name:"dashboard",title:"Dashboard"}),e(t,{class:"ms-4"},{default:o(()=>[M]),_:1}),e(t,{class:"ms-4"},{default:o(()=>[g]),_:1}),e(t,{class:"ms-4"},{default:o(()=>[D]),_:1}),e(t,{class:"ms-4"},{default:o(()=>[x]),_:1}),e(t,{class:"ms-4"},{default:o(()=>[S]),_:1}),e(_,{class:"ms-4"},{default:o(()=>[C]),_:1})])}var y=p(b,[["render",P]]);export{y as default};