import{d as N,p as R,Z as V,i,H as I,B as d,O as H,o as p,c as k,b as s,w as r,f as v,q as m,t as l,g,a as y,F as D,s as E,n as J,r as a}from"./app.0e502cc5.js";import{d as L,c as z}from"./PsDangerDialog.195b6d73.js";import{P as M}from"./PsLayout.7915dd73.js";import{P as U}from"./PsLabel.6d5b1b0c.js";import{P as q}from"./PsButton.ed5c0dad.js";import{P as Z}from"./PsTable2.4916fb62.js";import{P as G}from"./PsAlert.24717dd2.js";import{P as K}from"./PsBreadcrumb2.ad6b6d6d.js";import{P as Q}from"./PsToggle.1bec2c80.js";import{P as W}from"./PsIcon.8dbf90d4.js";import{P as X}from"./PsCsvModal.f6d6857d.js";import{P as Y}from"./PsBannerIcon.82d105ba.js";import{D as x}from"./PsTableSearch.46f5341d.js";import{P as ee}from"./PsIconButton.acc39cbd.js";import{J as oe}from"./DialogModal.271057c9.js";import{J as te}from"./Checkbox.0ab8992f.js";import{_ as se}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsModal.0f9f6579.js";import"./vue-neat-modal.d03c5dee.js";import"./PsDropdown.a0b3bb4c.js";import"./PsDropdownSelect.063a4178.js";import"./PsWarningDialog.db1ec62c.js";import"./index.esm.159b9749.js";import"./auth.esm.925cebae.js";import"./SidebarMenuItem.15e6d48b.js";import"./SidebarSubTab.31b29583.js";import"./PsErrorDialog.3227ce3c.js";import"./PsInputWithRightIcon.c0b01b6c.js";import"./PsSuccessDialog.9e44e7fb.js";import"./PsLoading.0f9a761a.js";import"./PsInput.6fad3d25.js";import"./PsLabelCaption.3e68d19d.js";import"./PsLoadingCircleDialog.65ae0069.js";import"./moment.9709ab41.js";import"./PsIcon1.3db40a94.js";import"./Icons.c01eddd9.js";import"./toggle.284f64a6.js";import"./PsLabelHeader4.a6c530e5.js";import"./PsLink1.88c7c7c9.js";import"./PsDraggable.2eac7eeb.js";import"./Modal.e649211e.js";const re=N({name:"Index",components:{Link:R,Head:V,PsLabel:U,PsButton:q,PsTable2:Z,PsAlert:G,PsBreadcrumb2:K,PsDangerDialog:L,PsToggle:Q,PsIcon:W,PsCsvModal:X,PsBannerIcon:Y,Dropdown:x,PsIconButton:ee,PsTextButton:z,JetDialogModal:oe,JetCheckbox:te},layout:M,props:{can:Object,status:Object,apiTokens:Object,hideShowFieldForFilterArr:Object,showCoreAndCustomFieldArr:Object,sort_field:{type:String,default:""},sort_order:{type:String,default:"desc"},search:String,availablePermissions:Object},setup(e){let n=e.search?i(e.search):i(""),w=e.sort_field?i(e.sort_field):i(""),C=e.sort_order?i(e.sort_order):i("desc");const P=i();let c=i(!1);const F=i(),S=i();function T(t){P.value.openModal(d("core__be_delete_api_token"),d("core__be_delete_api_token_info"),d("core__be_btn_confirm"),d("core__be_btn_cancel"),()=>{this.$inertia.delete(route("api_token.destroy",t),{onSuccess:()=>{c.value=!0,setTimeout(()=>{c.value=!1},3e3)},onError:()=>{c.value=!0,setTimeout(()=>{c.value=!1},3e3)}})},()=>{})}function b(t){w.value=t.field,C.value=t.sort_order,_()}function u(t){n.value=t,_(1)}function $(t){_(1,t)}function _(t=null,o=null){H.get(route("api_token.index"),{sort_field:w.value,sort_order:C.value,page:t!=null?t:e.apiTokens.meta.current_page,row:o!=null?o:e.apiTokens.meta.per_page,search:n.value},{preserveScroll:!0,preserveState:!0})}let f=I({permissions:[]}),A=i(null);function j(t){this.updateApiTokenForm.permissions=t.abilities,this.selectedToken=t,this.managingPermissionsFor=!0}const O=i(!1);function B(t){f.put(route("api_token.update",t),{preserveScroll:!0,preserveState:!0,onSuccess:()=>(this.managingPermissionsFor=!1,this.selectedToken=null),onError:()=>{}})}return{handleRow:$,handleSearchingSorting:_,handleSearching:u,handleSorting:b,visible:c,columns:S,ps_danger_dialog:P,confirmDeleteClicked:T,colFilterOptions:F,updateApiToken:B,updateApiTokenForm:f,selectedToken:A,managingPermissionsFor:O,manageApiTokenPermissions:j}},computed:{breadcrumb(){return[{label:d("core__be_dashboard_label"),url:route("admin.index")},{label:d("api_tokens_module"),color:"text-primary-500"}]}},created(){this.columns=this.showCoreAndCustomFieldArr.map(e=>({action:e.action,field:e.field,label:d(e.label),sort:e.sort,type:e.type})),this.colFilterOptions=this.hideShowFieldForFilterArr.map(e=>({hidden:e.hidden,id:e.id,key:d(e.key),key_id:e.key_id,label:d(e.label),module_name:e.module_name}))},methods:{handleCreate(){this.$inertia.get(route("api_token.create"))},handleEdit(e){this.$inertia.get(route("api_token.edit",e))},FilterOptionshandle(e){H.put(route("api_token.screenDisplayUiSetting.store"),{value:e,sort_field:this.sort_field,sort_order:this.sort_order,row:this.apiTokens.per_page,search:this.search.value,current_page:this.apiTokens.current_page},{preserveScroll:!0,preserveState:!0})}}}),ne={key:0,class:"flex flex-row"},ae={class:"grid grid-cols-1 md:grid-cols-2 gap-4"},ie={class:"flex items-center"},le={class:"ms-2 text-sm text-gray-600"},de={class:"flex flex-row justify-end mb-2.5 mt-4"};function me(e,n,w,C,P,c){const F=a("Head"),S=a("ps-breadcrumb-2"),T=a("ps-banner-icon"),b=a("ps-icon"),u=a("ps-button"),$=a("ps-danger-dialog"),_=a("ps-text-button"),f=a("ps-label"),A=a("ps-toggle"),j=a("ps-table2"),O=a("jet-checkbox"),B=a("jet-dialog-modal"),t=a("ps-layout");return p(),k(D,null,[s(F,{title:e.$t("api_tokens_module")},null,8,["title"]),s(t,null,{default:r(()=>[s(S,{items:e.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),e.visible?(p(),v(T,{key:0,visible:e.visible,theme:e.status.flag=="danger"?"bg-red-500":e.status.flag=="warning"?"bg-yellow-500":"bg-green-500",iconName:e.status.flag=="danger"?"close-circle":e.status.flag=="warning"?"alert-triangle":"rightalert",class:"text-white mb-5 sm:mb-6 lg:mb-8",iconColor:"white"},{default:r(()=>[m(l(e.status.msg),1)]),_:1},8,["visible","theme","iconName"])):g("",!0),s(j,{actionColName:"core__be_delete_col",row:e.row,search:e.search,object:this.apiTokens,colFilterOptions:e.colFilterOptions,columns:e.columns,sort_field:e.sort_field,sort_order:e.sort_order,onFilterOptionshandle:e.FilterOptionshandle,onHandleSort:e.handleSorting,onHandleSearch:e.handleSearching,onHandleRow:e.handleRow,globalSearchPlaceholder:e.$t("core__be_search_api_token")},{button:r(()=>[s(u,{onClick:n[0]||(n[0]=o=>e.handleCreate()),rounded:"rounded-lg",type:"button",class:"flex flex-wrap items-center"},{default:r(()=>[s(b,{name:"plus",class:"font-semibold"}),m(l(e.$t("core__add_api_token")),1)]),_:1})]),responsive_button:r(()=>[s(u,{onClick:n[1]||(n[1]=o=>e.handleCreate()),rounded:"rounded-lg",type:"button",class:"flex flex-wrap items-center"},{default:r(()=>[s(b,{name:"plus",class:"font-semibold"}),m(l(e.$t("core__add_api_token")),1)]),_:1})]),tableActionRow:r(o=>[o.field=="action"?(p(),k("div",ne,[s(u,{disabled:!o.row.authorization.delete,onClick:h=>e.confirmDeleteClicked(o.row.id),colors:"bg-red-400 text-white",padding:"p-1",hover:"hover:outline-none hover:ring hover:ring-red-100",focus:"focus:outline-none focus:ring focus:ring-red-200"},{default:r(()=>[s(b,{theme:"text-white dark:text-primary-900",name:"trash",w:"16",h:"16"})]),_:2},1032,["disabled","onClick"]),s($,{ref:"ps_danger_dialog"},null,512)])):g("",!0)]),tableRow:r(o=>[o.field=="permission"&&e.availablePermissions.length>0?(p(),v(_,{key:0,disabled:!o.row.authorization.update,onClick:h=>e.manageApiTokenPermissions(o.row)},{default:r(()=>[m(l(e.$t("core__be_permissions")),1)]),_:2},1032,["disabled","onClick"])):g("",!0),o.field=="last_used_at"?(p(),v(f,{key:1},{default:r(()=>[m(l(o.row.last_used_at),1)]),_:2},1024)):g("",!0),o.field=="status"?(p(),v(A,{key:2,selectedValue:o.row.status==1,onClick:h=>e.handlePublish(o.row.id)},null,8,["selectedValue","onClick"])):g("",!0)]),_:1},8,["row","search","object","colFilterOptions","columns","sort_field","sort_order","onFilterOptionshandle","onHandleSort","onHandleSearch","onHandleRow","globalSearchPlaceholder"]),s(f,{class:"mt-4"},{default:r(()=>[m(l(e.$t("core__be_api_token_note")),1)]),_:1}),s(B,{showFooter:!1,show:e.managingPermissionsFor,onClose:n[5]||(n[5]=o=>e.managingPermissionsFor=!1)},{title:r(()=>[m(l(e.$t("core__be_api_token_permissions")),1)]),content:r(()=>[y("div",ae,[(p(!0),k(D,null,E(e.availablePermissions,o=>(p(),k("div",{key:o},[y("label",ie,[s(O,{value:o,checked:e.updateApiTokenForm.permissions,"onUpdate:checked":n[2]||(n[2]=h=>e.updateApiTokenForm.permissions=h)},null,8,["value","checked"]),y("span",le,l(o),1)])]))),128))]),y("div",de,[s(u,{onClick:n[3]||(n[3]=o=>e.managingPermissionsFor=!1),colors:"bg-white text-secondary-900 dark:text-white dark:bg-secondary-900",border:"boder-1 border-secondary-900 dark:border-whites"},{default:r(()=>[m(l(e.$t("core__be_cancel_btn")),1)]),_:1}),s(u,{class:J(["ms-3",{"opacity-25":e.updateApiTokenForm.processing}]),onClick:n[4]||(n[4]=o=>e.updateApiToken(this.selectedToken)),disabled:e.updateApiTokenForm.processing},{default:r(()=>[m(l(e.$t("core__be_save_btn")),1)]),_:1},8,["class","disabled"])])]),_:1},8,["show"])]),_:1})],64)}var Ye=se(re,[["render",me]]);export{Ye as default};
