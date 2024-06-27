import{d as j,Z as B,i as s,B as a,o as i,c as C,b as o,w as r,f as b,q as m,t as f,g as d,F as D,O as $,r as n}from"./app.0e502cc5.js";import{P as L}from"./PsLayout.7915dd73.js";import{P as R}from"./PsBreadcrumb2.ad6b6d6d.js";import{P as A}from"./PsTable2.4916fb62.js";import{P as N}from"./PsIcon.8dbf90d4.js";import{P as T}from"./PsButton.ed5c0dad.js";import{c as V,d as I}from"./PsDangerDialog.195b6d73.js";import{P}from"./PsLabel.6d5b1b0c.js";import{_ as E}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsDropdown.a0b3bb4c.js";import"./PsDropdownSelect.063a4178.js";import"./PsToggle.1bec2c80.js";import"./toggle.284f64a6.js";import"./PsWarningDialog.db1ec62c.js";import"./PsModal.0f9f6579.js";import"./vue-neat-modal.d03c5dee.js";import"./index.esm.159b9749.js";import"./auth.esm.925cebae.js";import"./SidebarMenuItem.15e6d48b.js";import"./SidebarSubTab.31b29583.js";import"./PsErrorDialog.3227ce3c.js";import"./PsInputWithRightIcon.c0b01b6c.js";import"./PsSuccessDialog.9e44e7fb.js";import"./PsLoading.0f9a761a.js";import"./PsInput.6fad3d25.js";import"./PsLabelCaption.3e68d19d.js";import"./PsBannerIcon.82d105ba.js";import"./PsIcon1.3db40a94.js";import"./Icons.c01eddd9.js";import"./PsLoadingCircleDialog.65ae0069.js";import"./PsTableSearch.46f5341d.js";import"./moment.9709ab41.js";const q=j({name:"Index",components:{Head:B,PsBreadcrumb2:R,PsTable2:A,PsIcon:N,PsButton:T,PsTextButton:V,PsLabel:P,PsDangerDialog:I},layout:L,props:{vendorList:Object,showVendorCols:Object,showCoreAndCustomFieldArr:Object,hideShowFieldForFilterArr:Object,can:Object,status:Object,sort_field:{type:String,default:""},sort_order:{type:String,default:"desc"},search:String},setup(e){console.log(e.vendorList);let c=s(!1);const O=s(),h=s();let v=e.search?s(e.search):s(""),g=e.sort_field?s(e.sort_field):s(""),p=e.sort_order?s(e.sort_order):s("desc");const w=[{label:a("core__be_action_label"),field:"action",type:"String"},{label:a("core__be_vendor_user_name"),field:"owner_name",relation:"owner",relationField:"name",type:"String"},{label:a("core__be_vendor_user_email"),field:"email",type:"String"},{label:a("core__be_vendor_phone"),field:"phone",type:"String"},{label:a("core__be_vendor_name"),field:"name",type:"String"},{label:a("core__be_total_products"),field:"total_products",type:"String",sort:!1},{label:a("detail_label"),field:"detail",type:"Action",sort:!1}];function y(t){g.value=t.field,p.value=t.sort_order,_()}function S(t){v.value=t,_(1)}function k(t){h.value.openModal(a("core__be_delete_vendor"),a("core__be_delete_vendor_info"),a("core__be_btn_confirm"),a("core__be_btn_cancel"),()=>{$.delete(route("vendor.destroy",t),{onSuccess:()=>{c.value=!0,setTimeout(()=>{c.value=!1},3e3)},onError:()=>{c.value=!0,setTimeout(()=>{c.value=!1},3e3)}})},()=>{})}function x(t){_(1,t)}function _(t=null,u=null){$.get(route("vendor.index"),{sort_field:g.value,sort_order:p.value,page:t!=null?t:e.vendorList.meta.current_page,row:u!=null?u:e.vendorList.meta.per_page,search:v.value},{preserveScroll:!0,preserveState:!0})}return{visible:c,ps_danger_dialog:h,columns:w,colFilterOptions:O,sort_field:g,sort_order:p,handleSorting:y,handleSearching:S,handleSearchingSorting:_,confirmDeleteClicked:k,handleRow:x}},computed:{breadcrumb(){return[{label:a("core__be_dashboard_label"),url:route("admin.index")},{label:a("vendor_list_module"),color:"text-primary-500"}]}},methods:{handleDetail(e){this.$inertia.get(route("vendor.show",e))}}}),z={key:0,class:"flex flex-row"},M={key:0,class:"flex flex-row mb-2"};function Z(e,c,O,h,v,g){const p=n("Head"),w=n("ps-breadcrumb-2"),y=n("ps-banner-icon"),S=n("ps-icon"),k=n("ps-button"),x=n("ps-danger-dialog"),_=n("ps-text-button"),t=n("ps-label"),u=n("ps-table2"),F=n("ps-layout");return i(),C(D,null,[o(p,{title:e.$t("item_module")},null,8,["title"]),o(F,null,{default:r(()=>[o(w,{items:e.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),e.visible?(i(),b(y,{key:0,visible:e.visible,theme:e.status.flag=="danger"?"bg-red-500":e.status.flag=="warning"?"bg-yellow-500":"bg-green-500",iconName:e.status.flag=="danger"?"close-circle":e.status.flag=="warning"?"alert-triangle":"rightalert",class:"text-white mb-5 sm:mb-6 lg:mb-8",iconColor:"white"},{default:r(()=>[m(f(e.status.msg),1)]),_:1},8,["visible","theme","iconName"])):d("",!0),o(u,{object:this.vendorList,columns:e.columns,colFilterOptions:e.colFilterOptions,eye_filter:!1,onHandleRow:e.handleRow,onHandleSort:e.handleSorting,onHandleSearch:e.handleSearching,sort_field:e.sort_field,sort_order:e.sort_order},{tableActionRow:r(l=>[l.field=="action"?(i(),C("div",z,[o(k,{disabled:!l.row.authorizations.delete,onClick:H=>e.confirmDeleteClicked(l.row.id),colors:"bg-red-400 text-white",padding:"p-1.5",hover:"hover:outline-none hover:ring hover:ring-red-100",focus:"focus:outline-none focus:ring focus:ring-red-200"},{default:r(()=>[o(S,{theme:"text-white dark:text-primary-900",name:"trash",w:"16",h:"16"})]),_:2},1032,["disabled","onClick"]),o(x,{ref:"ps_danger_dialog"},null,512)])):d("",!0)]),tableRow:r(l=>[l.field=="detail"?(i(),C("div",M,[o(_,{onClick:H=>e.handleDetail(l.row.id)},{default:r(()=>[m(f(e.$t("core__be_btn_detail")),1)]),_:2},1032,["onClick"])])):d("",!0),l.field=="total_products"?(i(),b(t,{key:1},{default:r(()=>[o(t,{class:"whitespace-nowrap dark:text-white"},{default:r(()=>[o(t,{class:"flex flex-row"},{default:r(()=>[m(f(l.row.product_count),1)]),_:2},1024)]),_:2},1024)]),_:2},1024)):d("",!0),l.field=="status"&&l.row.status==0?(i(),b(t,{key:2},{default:r(()=>[o(t,{class:"whitespace-nowrap dark:text-white"},{default:r(()=>[o(t,{class:"flex flex-row",textColor:"text-yellow-500"},{default:r(()=>[o(t,{class:"w-2 h-2 my-auto rounded-full me-2",textColor:"bg-yellow-500"}),m(" "+f(e.$t("core__be_inactive")),1)]),_:1})]),_:1})]),_:1})):d("",!0),l.field=="status"&&l.row.status==1?(i(),b(t,{key:3},{default:r(()=>[o(t,{class:"whitespace-nowrap dark:text-white"},{default:r(()=>[o(t,{class:"flex flex-row",textColor:"text-green-600"},{default:r(()=>[o(t,{class:"w-2 h-2 my-auto rounded-full me-2",textColor:"bg-green-600"}),m(" "+f(e.$t("core__be_active")),1)]),_:1})]),_:1})]),_:1})):d("",!0),l.field=="status"&&l.row.status==2?(i(),b(t,{key:4},{default:r(()=>[o(t,{class:"whitespace-nowrap dark:text-white"},{default:r(()=>[o(t,{class:"flex flex-row",textColor:"text-red-500"},{default:r(()=>[o(t,{class:"w-2 h-2 my-auto rounded-full me-2",textColor:"bg-red-500"}),m(" "+f(e.$t("core__be_terminated")),1)]),_:1})]),_:1})]),_:1})):d("",!0)]),_:1},8,["object","columns","colFilterOptions","onHandleRow","onHandleSort","onHandleSearch","sort_field","sort_order"])]),_:1})],64)}var xe=E(q,[["render",Z]]);export{xe as default};
