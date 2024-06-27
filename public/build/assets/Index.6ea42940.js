import{P as C}from"./PsLayout.7915dd73.js";import{d as S,Z as A,p as $,i as B,y as D,B as t,o as s,c as f,b as n,w as o,f as c,q as m,t as r,g as d,a as y,x as h,F,r as l}from"./app.0e502cc5.js";import{P as I}from"./PsInput.6fad3d25.js";import{P as N}from"./PsLabel.6d5b1b0c.js";import{P as T}from"./PsButton.ed5c0dad.js";import{c as H,d as L}from"./PsDangerDialog.195b6d73.js";import{P as O}from"./PsTextarea.51895c08.js";import{P as V}from"./PsLabelHeader4.a6c530e5.js";import{P as E}from"./PsIcon.8dbf90d4.js";import{P as R}from"./PsAlert.24717dd2.js";import{P as q}from"./PsDataTable.261b1403.js";import{P as z}from"./PsBannerIcon.82d105ba.js";import{P as M}from"./PsBreadcrumb2.ad6b6d6d.js";import{_ as Z}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsDropdown.a0b3bb4c.js";import"./PsDropdownSelect.063a4178.js";import"./PsToggle.1bec2c80.js";import"./toggle.284f64a6.js";import"./PsWarningDialog.db1ec62c.js";import"./PsModal.0f9f6579.js";import"./vue-neat-modal.d03c5dee.js";import"./index.esm.159b9749.js";import"./auth.esm.925cebae.js";import"./SidebarMenuItem.15e6d48b.js";import"./SidebarSubTab.31b29583.js";import"./PsErrorDialog.3227ce3c.js";import"./PsInputWithRightIcon.c0b01b6c.js";import"./PsSuccessDialog.9e44e7fb.js";import"./PsLoading.0f9a761a.js";import"./PsLabelCaption.3e68d19d.js";import"./PsLoadingCircleDialog.65ae0069.js";import"./Icons.c01eddd9.js";import"./PsTableSearch.46f5341d.js";import"./moment.9709ab41.js";import"./ps_constants.0e2a11f9.js";import"./PsIcon1.3db40a94.js";const j=S({name:"Index",components:{Head:A,Link:$,PsInput:I,PsLabel:N,PsTextButton:H,PsButton:T,PsTextarea:O,PsLabelHeader4:V,PsIcon:E,PsAlert:R,PsBreadcrumb2:M,PsDangerDialog:L,PsDataTable:q,PsBannerIcon:z},layout:C,props:["transactions","status"],setup(){const e=B(),_=D([{label:t("user_name_label"),key:"contact_name",hidden:!1},{label:"Amount",key:"balance_amount",hidden:!1},{label:t("phone_label"),key:"contact_phone",hidden:!0},{label:"Item Count",key:"total_item_count",hidden:!1},{label:"Payment",key:"payment_method",hidden:!1},{label:"Transaction Status",key:"transaction_status",hidden:!1},{label:t("owner_label"),key:"added_user_id",hidden:!0},{label:t("added_date_label"),key:"added_date",hidden:!0},{label:t("updated_user_label"),key:"updated_user_id",hidden:!0},{label:t("updated_date_label"),key:"updated_date",hidden:!0}]),u=[{label:t("action_label"),field:"action",type:"action"},{label:t("user_name_label"),field:"contact_name",type:"String",action:"Action"},{label:"Amount",field:"balance_amount",type:"String",action:"Action"},{label:t("phone_label"),field:"contact_phone",type:"String",action:"Action"},{label:"Item Count",field:"total_item_count",type:"String",action:"Action"},{label:"Payment",field:"payment_method",type:"String",action:"Action"},{label:"Transaction Status",field:"transaction_status",type:"String",action:"Action"},{label:t("owner_label"),field:"added_user_id",relation:"owner",type:"String",relationField:"name"},{label:t("added_date_label"),field:"added_date",type:"Date"},{label:t("updated_date_label"),field:"updated_date",type:"Date"},{label:t("updated_user_label"),field:"updated_user_id",relation:"editor",type:"String",relationField:"name"}];function p(b){e.value.openModal(t("core__be_transaction_history"),t("delete_transaction_history"),t("core__be_btn_confirm"),t("core__be_btn_cancel"),()=>{this.$inertia.delete(route("transaction.destroy",b))},()=>{})}return{columns:u,ps_danger_dialog:e,confirmDeleteClicked:p,colFilterOptions:_}},computed:{breadcrumb(){return[{label:t("core__be_dashboard_label"),url:route("admin.index")},{label:t("transaction_history_module"),color:"text-primary-500"}]}},methods:{handleEdit(e){this.$inertia.get(route("transaction.edit",e))},handlePublish(e){this.$inertia.put(route("transaction.statusChange",e))},handleDefault(e){this.$inertia.put(route("transaction.defaultChange",e))}}}),G={key:0,class:"flex flex-row mb-2"},J=m(" Detail ");function K(e,_,u,p,b,Q){const g=l("Head"),k=l("ps-breadcrumb-2"),w=l("ps-banner-icon"),P=l("ps-text-button"),i=l("ps-label"),x=l("ps-data-table"),v=l("ps-layout");return s(),f(F,null,[n(g,{title:e.$t("transaction_module")},null,8,["title"]),n(v,null,{default:o(()=>[n(k,{items:e.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),e.visible?(s(),c(w,{key:0,visible:e.visible,theme:e.status.flag=="danger"?"bg-red-500":e.status.flag=="warning"?"bg-yellow-500":"bg-green-500",iconName:e.status.flag=="danger"?"close-circle":e.status.flag=="warning"?"alert-triangle":"rightalert",class:"text-white mb-5 sm:mb-6 lg:mb-8",iconColor:"white"},{default:o(()=>[m(r(e.status.msg),1)]),_:1},8,["visible","theme","iconName"])):d("",!0),n(x,{rows:e.transactions,columns:e.columns,colFilterOptions:e.colFilterOptions},{tableActionRow:o(a=>[a.field=="action"?(s(),f("div",G,[n(P,{onClick:U=>e.handleEdit(a.row.id)},{default:o(()=>[J]),_:2},1032,["onClick"])])):d("",!0)]),tableRow:o(a=>[a.field=="balance_amount"?(s(),c(i,{key:0,class:"flex"},{default:o(()=>[n(i,{class:"mb-2 text-sm whitespace-nowrap"},{default:o(()=>[m(r(a.row.currency_symbol)+" "+r(a.row.balance_amount),1)]),_:2},1024)]),_:2},1024)):d("",!0),a.field=="payment_method"?(s(),c(i,{key:1,class:"flex"},{default:o(()=>[n(i,{class:"mb-2 px-1 py-0.5 text-xs font-semibold bg-yellow-50 rounded whitespace-nowrap",textColor:"text-yellow-500"},{default:o(()=>[m(r(a.row.payment_method),1)]),_:2},1024)]),_:2},1024)):d("",!0),a.field=="transaction_status"?(s(),c(i,{key:2},{default:o(()=>[n(i,{class:"mb-2 whitespace-nowrap dark:text-white"},{default:o(()=>[y("span",{class:"flex flex-row",style:h({color:a.row.transaction_status.color_value})},[y("div",{class:"w-2 h-2 my-auto rounded-full me-2",style:h({background:a.row.transaction_status.color_value})},null,4),m(" "+r(a.row.transaction_status.title),1)],4)]),_:2},1024)]),_:2},1024)):d("",!0)]),_:1},8,["rows","columns","colFilterOptions"])]),_:1})],64)}var Ne=Z(j,[["render",K]]);export{Ne as default};
