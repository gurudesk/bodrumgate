import{P as F}from"./PsLabel.6d5b1b0c.js";import{P as O}from"./PsIcon.8dbf90d4.js";import{P as A}from"./PsButton.ed5c0dad.js";import{_ as C}from"./plugin-vue_export-helper.21dcd24c.js";import{o as c,c as _,b as n,w as i,q as p,t as o,a,F as w,s as P,f as j,n as D,g as y,r as g,i as R,j as M,k as S,l as k,T as L}from"./app.0e502cc5.js";import{P as $}from"./PsDropdown.a0b3bb4c.js";import{P as z}from"./PsDropdownSelect.063a4178.js";import{c as B,P as T}from"./PsDangerDialog.195b6d73.js";const V={name:"PsPagination",components:{PsLabel:F,PsIcon:O,PsButton:A},props:["totalRecords","perPageOptions"],data(){return{page:1,perPage:this.perPageOptions[0]}},computed:{pages(){return this.totalRecords%this.perPage>0?Math.floor(this.totalRecords/this.perPage)+1:this.totalRecords/this.perPage}},methods:{changePage(e){e=="prev"?this.page=this.page>1?this.page-1:this.page:e=="next"?this.page=this.page<this.pages?this.page+1:this.page:this.page=e,this.$emit("update:value",{page:this.page,perPage:this.perPage})},setPerPage(e){this.perPage=e,this.page=1,this.$emit("update:value",{page:this.page,perPage:this.perPage})}}},N={class:"flex justify-between mt-10"},E={class:"font-medium"},U={class:"font-medium"},q={class:"font-medium"},H={key:0,class:"flex items-center rtl:space-x-reverse space-x-1"},I={key:1,class:"inline-flex items-center py-2 px-4 bg-white text-sm font-medium text-gray-700"};function G(e,s,l,f,t,d){const h=g("ps-label"),b=g("ps-icon"),v=g("ps-button");return c(),_("div",N,[n(h,{class:"text-secondary-600 text-base font-normal"},{default:i(()=>[p(o(e.$t("ps_pagination__showing"))+" "+o(" ")+" ",1),a("span",E,o(l.totalRecords>0?(t.page-1)*t.perPage+1:0),1),p(" "+o(" ")+" "+o(e.$t("ps_pagination__to"))+" "+o(" ")+" ",1),a("span",U,o(t.page*t.perPage>l.totalRecords?l.totalRecords:t.page*t.perPage),1),p(" "+o(" ")+" "+o(e.$t("ps_pagination__of"))+" "+o(" ")+" ",1),a("span",q,o(l.totalRecords),1),p(" "+o(" ")+" "+o(e.$t("ps_pagination__entries")),1)]),_:1}),l.totalRecords>t.perPage?(c(),_("div",H,[n(v,{class:"h-8",rounded:"rounded",colors:"bg-white dark:bg-secondaryDark-black",border:"border border-gray-200 rounded",disabled:t.page==1,onClick:s[0]||(s[0]=u=>d.changePage("prev"))},{default:i(()=>[n(b,{name:"doubleArrowLeft",w:"16",h:"16"})]),_:1},8,["disabled"]),(c(!0),_(w,null,P(d.pages,u=>(c(),_("div",{key:u},[u<=5?(c(),j(v,{key:0,rounded:"rounded",colors:"bg-white",border:"border border-gray-200 rounded",class:D(u==t.page?"bg-indigo-500 text-white":"hover:text-gray-500 hover:bg-gray-200"),onClick:r=>d.changePage(u)},{default:i(()=>[p(o(u),1)]),_:2},1032,["class","onClick"])):y("",!0),u<d.pages&&u==t.page+5&&u<d.pages?(c(),_("span",I," ... ")):y("",!0)]))),128)),n(v,{class:"h-8",rounded:"rounded",colors:"bg-white",border:"border border-gray-200 rounded",disabled:t.page==d.pages,onClick:s[1]||(s[1]=u=>d.changePage("next"))},{default:i(()=>[n(b,{name:"doubleArrowRight",w:"16",h:"16"})]),_:1},8,["disabled"])])):y("",!0)])}var Oe=C(V,[["render",G]]);const J={name:"Dropdown",components:{PsButton:A,PsTextButton:B,PsLabelHeader6:T,PsLabel:F,PsIcon:O},props:{horizontalAlign:{type:String,default:"right"},h:{type:String,default:" h-auto"},verticalAlign:{type:String,default:""},colFilterOptions:{type:Object}},emits:["on-click"],data(){return{colFilters:{}}},created(){this.colFilterOptions.map((e,s)=>{this.colFilters[e.key]=e.hidden})},methods:{showAll(){let e=this.colFilterOptions.filter(s=>s.hidden===!0);for(let s of e)this.colFilters[s.key]=!1},hideAll(){let e=this.colFilterOptions.filter(s=>s.hidden===!1);for(let s of e)this.colFilters[s.key]=!0},changeFilter(){for(let e of this.colFilterOptions)e.hidden=this.colFilters[e.key];this.$emit("update:colFilterOptions",this.colFilterOptions)},clearFilter(){this.colFilterOptions.map((e,s)=>{this.colFilters[e.key]=e.hidden})}},setup(e,{emit:s}){const l=R(!1);function f(){l.value&&(l.value=!l.value)}const t=R();function d(b){t.value.contains(b.target)||f()}M(()=>{document.addEventListener("click",d)}),S(()=>{document.removeEventListener("click",d)});function h(){l.value=!l.value,s("on-click")}return{isMenuOpen:l,dropdown:t,hide:f,clicked:h}}},K={class:"relative inline-block",ref:"dropdown"},Q={class:"flex flex-col w-68 gap-8"},W={class:"mt-2.5"},X={class:"py-8 px-2.5 z-30"},Y={key:0},Z={class:"flex justify-between"},ee=["onClick"],te={key:1,class:"mt-8.5"},se={class:"flex justify-between"},oe=["onClick"],re={class:"px-2.5"};function le(e,s,l,f,t,d){const h=g("ps-label"),b=g("ps-icon"),v=g("ps-button"),u=g("ps-text-button");return c(),_("div",K,[a("div",{onClick:s[0]||(s[0]=(...r)=>f.clicked&&f.clicked(...r))},[k(e.$slots,"select")]),n(L,{"enter-active-class":"transition ease-out duration-100","enter-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:i(()=>[f.isMenuOpen?(c(),_("div",{key:0,class:D(["absolute mt-2 rounded-md shadow-lg text-sm overflow-visible border z-20 bg-background dark:bg-backgroundDark",[l.horizontalAlign=="right"?"origin-top-right right-0 rtl:origin-top-left rtl:left-0":"origin-top-left left-0 rtl:origin-top-right rtl:right-0",l.verticalAlign,l.h]])},[a("div",Q,[a("div",W,[n(h,{class:"ms-2.5 font-semibold"},{default:i(()=>[p(o(e.$t("ps_dropdown_modal__filter_option")),1)]),_:1}),k(e.$slots,"list",{},()=>[a("div",X,[l.colFilterOptions.filter(r=>r.hidden===!1).length>0?(c(),_("div",Y,[a("div",Z,[n(h,{class:"font-semibold",textColor:"text-gray-300"},{default:i(()=>[p(o(e.$t("ps_dropdown_modal__shown")),1)]),_:1}),n(h,{class:"font-semibold cursor-pointer",textColor:"text-primary-500",onClick:d.hideAll},{default:i(()=>[p(o(e.$t("ps_dropdown_modal__hide_all")),1)]),_:1},8,["onClick"])]),(c(!0),_(w,null,P(l.colFilterOptions.filter(r=>r.hidden===!1),(r,m)=>(c(),_("div",{key:m,class:"flex justify-between font-semibold mt-5 dark:hover:bg-primary-900"},[n(h,null,{default:i(()=>[p(o(r.label),1)]),_:2},1024),a("div",{class:"cursor-pointer",onClick:x=>t.colFilters[r.key]=!t.colFilters[r.key]},[n(b,{theme:"font-semibold",name:t.colFilters[r.key]?"eyeOff":"eye-on"},null,8,["name"])],8,ee)]))),128))])):y("",!0),l.colFilterOptions.filter(r=>r.hidden===!0).length>0?(c(),_("div",te,[a("div",se,[n(h,{class:"font-semibold",textColor:"text-gray-300"},{default:i(()=>[p(o(e.$t("ps_dropdown_modal__hidden")),1)]),_:1}),n(h,{class:"font-semibold cursor-pointer",textColor:"text-primary-500",onClick:d.showAll},{default:i(()=>[p(o(e.$t("ps_dropdown_modal__show_all")),1)]),_:1},8,["onClick"])]),(c(!0),_(w,null,P(l.colFilterOptions.filter(r=>r.hidden===!0),(r,m)=>(c(),_("div",{key:m,class:"flex justify-between font-semibold mt-5 dark:hover:bg-primary-900"},[n(h,{class:"ms-2"},{default:i(()=>[p(o(r.label),1)]),_:2},1024),a("div",{class:"cursor-pointer",onClick:x=>t.colFilters[r.key]=!t.colFilters[r.key]},[n(b,{theme:"font-semibold",name:t.colFilters[r.key]?"eyeOff":"eye-on"},null,8,["name"])],8,oe)]))),128))])):y("",!0)])]),a("div",re,[n(v,{onClick:s[1]||(s[1]=r=>[d.changeFilter(),f.isMenuOpen=!f.isMenuOpen]),rounded:"rounded",class:"w-full"},{default:i(()=>[p(o(e.$t("core__be_btn_confirm")),1)]),_:1}),n(u,{onClick:s[2]||(s[2]=r=>[d.clearFilter(),f.isMenuOpen=!f.isMenuOpen]),class:"w-full mt-5",border:"",focus:"",hover:"",colors:"text-gray-900"},{default:i(()=>[p(o(e.$t("core__be_btn_cancel")),1)]),_:1})])])])],2)):y("",!0)]),_:3})],512)}var ne=C(J,[["render",le]]);const ie={name:"PsTableSearch",components:{PsDropdown:$,PsDropdownSelect:z,PsIcon:O,Dropdown:ne,PsLabel:F},props:["perPageOptions","colFilterOptions"],data(e){return{page:1,perPage:this.perPageOptions[0],psColFilterOptions:e.colFilterOptions?e.colFilterOptions:""}}},ae={class:"flex justify-between mt-10"},ce={class:"flex"},de={class:"flex flex-row"},pe={class:"rounded-md shadow-xs w-24"},_e={class:"z-30"},he=["onClick"],ue={class:"flex gap-2"},fe={class:"me-2 relative flex justify-center items-center rounded w-10 h-10 bg-primary-500"};function ge(e,s,l,f,t,d){const h=g("ps-label"),b=g("ps-dropdown-select"),v=g("ps-dropdown"),u=g("ps-icon"),r=g("dropdown");return c(),_(w,null,[a("div",ae,[a("div",ce,[n(v,{align:"left",class:"me-4",h:"h-46"},{select:i(()=>[a("div",de,[n(h,{class:"my-auto font-bold me-2"},{default:i(()=>[p(o(e.$t("core__be_show"))+":\xA0",1)]),_:1}),n(b,{placeholder:e.$t("core__be_show"),selectedValue:t.perPage+" "+e.$t("core__be_rows"),class:"text-red-600 light:font-bold w-29 h-10"},null,8,["placeholder","selectedValue"])])]),list:i(()=>[a("div",pe,[a("div",_e,[(c(!0),_(w,null,P(l.perPageOptions,(m,x)=>(c(),_("div",{key:x,class:D(t.perPage!=m?"w-32 flex py-4 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center":""),onClick:me=>[t.perPage=m,e.setPerPage(m)]},[t.perPage!=m?(c(),j(h,{key:0,class:"ms-2"},{default:i(()=>[p(o(m)+" "+o(e.$t("core__be_rows")),1)]),_:2},1024)):y("",!0)],10,he))),128))])])]),_:1}),k(e.$slots,"searchLeft")]),a("div",ue,[k(e.$slots,"searchRight"),n(r,{align:"left",colFilterOptions:t.psColFilterOptions,"onUpdate:colFilterOptions":s[0]||(s[0]=m=>t.psColFilterOptions=m)},{select:i(()=>[a("div",fe,[n(u,{name:"eye-on",class:"cursor-pointer text-white dark:text-secondaryDark-black"})])]),_:1},8,["colFilterOptions"])])]),k(e.$slots,"searchOption",{class:"mt-4"})],64)}var Ce=C(ie,[["render",ge]]);export{ne as D,Oe as P,Ce as a};
