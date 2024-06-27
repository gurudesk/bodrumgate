import{d as C,Z as D,i,H as E,B as k,o as w,c as B,b as e,w as a,a as n,q as o,t as r,h as S,F as I,r as d}from"./app.0e502cc5.js";import{P as L}from"./PsLayout.7915dd73.js";import{P as F}from"./PsBreadcrumb2.ad6b6d6d.js";import{u as H}from"./Validators.cb85894a.js";import{P as T}from"./PsInput.6fad3d25.js";import{P as V}from"./PsLabel.6d5b1b0c.js";import{P as j}from"./PsButton.ed5c0dad.js";import{P as x,d as A}from"./PsDangerDialog.195b6d73.js";import{P as M}from"./PsCard.42327b0b.js";import{P as q}from"./PsIcon.8dbf90d4.js";import{P as N}from"./PsLoading.0f9a761a.js";import{P as O}from"./PsCheckboxValue.d227357b.js";import{a as R,P as U}from"./PsActionModal.279e9046.js";import{P as W}from"./PsImageUpload.b7aa8768.js";import{P as Z}from"./PsLabelCaption.3e68d19d.js";import{P as z}from"./PsLabelTitle3.7f097e1a.js";import{P as G}from"./PsTextarea.51895c08.js";import{P as J}from"./PsDropdown.a0b3bb4c.js";import{P as K}from"./PsDropdownSelect.063a4178.js";import{D as Q}from"./DatePicker.f67cbc2b.js";import{h as X}from"./moment.9709ab41.js";import{_ as Y}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsToggle.1bec2c80.js";import"./toggle.284f64a6.js";import"./PsWarningDialog.db1ec62c.js";import"./PsModal.0f9f6579.js";import"./vue-neat-modal.d03c5dee.js";import"./index.esm.159b9749.js";import"./auth.esm.925cebae.js";import"./SidebarMenuItem.15e6d48b.js";import"./SidebarSubTab.31b29583.js";import"./PsErrorDialog.3227ce3c.js";import"./PsInputWithRightIcon.c0b01b6c.js";import"./PsSuccessDialog.9e44e7fb.js";import"./PsBannerIcon.82d105ba.js";import"./PsIcon1.3db40a94.js";import"./Icons.c01eddd9.js";import"./PsLoadingCircleDialog.65ae0069.js";import"./PsLabelHeader4.a6c530e5.js";import"./PsDraggable.2eac7eeb.js";import"./main.1827f372.js";import"./index.edd1d404.js";const tt=C({name:"Edit",components:{Head:D,PsBreadcrumb2:F,PsImageUpload:W,PsInput:T,PsLabel:V,PsButton:j,PsLabelHeader6:x,PsCard:M,PsIcon:q,PsLoading:N,PsCheckboxValue:O,PsActionModal:R,PsImageIconModal:U,PsDangerDialog:A,PsLabelCaption:Z,PsLabelTitle3:z,PsTextarea:G,PsDropdown:J,PsDropdownSelect:K,DatePicker:Q},data(){return{moment:X}},layout:L,props:["errors","transaction","packages"],setup(t){const l=i(!1),c=i(!1),y=i(),v=i(),h=i(),_=i(),u=i();let p=i(t.transaction.user.user_relation.filter(m=>m.core_keys_id==="ps-usr00004")),s=i(0);Object.keys(p.value).length>0&&(s.value=p.value[0].value);const{isEmpty:g}=H(),b=(m,$)=>{t.errors[m]=$?"":g(m,$),m=="payment_status"&&(u.value.isError=t.errors.payment_status!="")};let f=E({package_id:t.transaction.package_id,user_id:t.transaction.user_id,status:String(t.transaction.status),payment_method:"offline",_method:"put"});function P(m){this.$inertia.post(route("package_report.update",m),f,{forceFormData:!0,onBefore:()=>{l.value=!0},onSuccess:()=>{l.value=!1,c.value=!0,setTimeout(()=>{c.value=!1},2e3)},onError:()=>{_.value.isError=t.errors.date_range!="",u.value.isError=t.errors.payment_status!="",l.value=!1}})}return{types:[{id:"0",name:"Waiting For Approval"},{id:"1",name:"Approved"},{id:"2",name:"Rejected"}],date_range:_,payment_status:u,validateEmptyInput:b,handleSubmit:P,ps_action_modal:y,form:f,loading:l,success:c,ps_danger_dialog:h,ps_image_icon_modal:v,post_count_filter:p,post_count:s}},computed:{breadcrumb(){return[{label:k("core__be_dashboard_label"),url:route("admin.index")},{label:k("package_report_module"),url:route("package_report.index")},{label:k("package_report_detail"),color:"text-primary-500"}]}},methods:{handleCancel(){this.$inertia.get(route("package_report.index"))}}}),et={class:"rounded-lg"},at={class:"bg-primary-50 dark:bg-primary-900 py-2.5 ps-4"},ot={class:"px-4 pt-6 dark:bg-backgroundDark"},rt={class:"grid grid-cols-2 gap-6"},st={class:"grid grid-cols-2 gap-3 mt-6"},nt={class:"grid grid-cols-2 gap-3 mt-6"},lt={class:"mb-2.5 flex flex-row justify-end"};function it(t,l,c,y,v,h){const _=d("Head"),u=d("ps-breadcrumb-2"),p=d("ps-label-header6"),s=d("ps-label"),g=d("ps-button"),b=d("ps-card"),f=d("ps-layout");return w(),B(I,null,[e(_,{title:t.$t("package_detail")},null,8,["title"]),e(f,null,{default:a(()=>[e(u,{items:t.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),e(b,{class:"w-full h-auto"},{default:a(()=>[n("div",et,[n("div",at,[e(p,null,{default:a(()=>[o(r(t.$t("package_detail")),1)]),_:1})]),n("div",ot,[n("form",{onSubmit:l[1]||(l[1]=S(P=>t.handleSubmit(t.transaction.id),["prevent"]))},[n("div",rt,[n("div",null,[e(p,null,{default:a(()=>[o(r(t.$t("package_info")),1)]),_:1}),n("div",st,[e(s,{textColor:"text-secondary-400"},{default:a(()=>[o(r(t.$t("package_name")),1)]),_:1}),e(s,null,{default:a(()=>[o(" : "+r(t.transaction.package.value),1)]),_:1}),e(s,{textColor:"text-secondary-400"},{default:a(()=>[o(r(t.$t("package_price")),1)]),_:1}),e(s,null,{default:a(()=>[o(" : "+r(t.transaction.price),1)]),_:1}),e(s,{textColor:"text-secondary-400"},{default:a(()=>[o(r(t.$t("package_posts")),1)]),_:1}),e(s,null,{default:a(()=>[o(" : "+r(t.post_count),1)]),_:1}),e(s,{textColor:"text-secondary-400"},{default:a(()=>[o(r(t.$t("package_payment")),1)]),_:1}),e(s,null,{default:a(()=>[o(" : "+r(t.transaction.payment_method),1)]),_:1})])]),n("div",null,[e(p,null,{default:a(()=>[o(r(t.$t("package_transition_info")),1)]),_:1}),n("div",nt,[e(s,{textColor:"text-secondary-400"},{default:a(()=>[o(r(t.$t("package_user_name")),1)]),_:1}),e(s,null,{default:a(()=>[o(" : "+r(t.transaction.user.name),1)]),_:1}),e(s,{textColor:"text-secondary-400"},{default:a(()=>[o(r(t.$t("package_amount")),1)]),_:1}),e(s,null,{default:a(()=>[o(" : "+r(t.transaction.price),1)]),_:1}),e(s,{textColor:"text-secondary-400"},{default:a(()=>[o(r(t.$t("package_payment")),1)]),_:1}),e(s,null,{default:a(()=>[o(" : "+r(t.transaction.payment_method),1)]),_:1}),e(s,{textColor:"text-secondary-400"},{default:a(()=>[o(r(t.$t("package_date")),1)]),_:1}),e(s,null,{default:a(()=>[o(" : "+r(t.moment(t.transaction.added_date).format(t.$page.props.dateFormat)),1)]),_:1})])])]),n("div",lt,[e(g,{type:"button",onClick:l[0]||(l[0]=P=>t.handleCancel())},{default:a(()=>[o(r(t.$t("core_be_btn_back")),1)]),_:1})])],32)])])]),_:1})]),_:1})],64)}var Xt=Y(tt,[["render",it]]);export{Xt as default};