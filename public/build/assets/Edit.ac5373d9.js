import{P as y}from"./PsLayout.7915dd73.js";import{d as g,Z as k,H as C,B as p,o as w,c as U,b as o,w as t,a,q as n,t as d,F as B,r as s}from"./app.0e502cc5.js";import{P as L}from"./PsBreadcrumb2.ad6b6d6d.js";import{P as H}from"./PsInput.6fad3d25.js";import{P as D}from"./PsLabel.6d5b1b0c.js";import{P as I}from"./PsButton.ed5c0dad.js";import{P as T,d as V}from"./PsDangerDialog.195b6d73.js";import{P as x}from"./PsCard.42327b0b.js";import{P as E}from"./PsIcon.8dbf90d4.js";import{P as M}from"./PsLoading.0f9a761a.js";import{P as N}from"./PsCheckboxValue.d227357b.js";import{a as S,P as F}from"./PsActionModal.279e9046.js";import{P as j}from"./PsLabelCaption.3e68d19d.js";import{P as q}from"./PsLabelTitle3.7f097e1a.js";import{P as A}from"./PsTextarea.51895c08.js";import R from"./RoleCheckbox.4e205f47.js";import{_ as Z}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsDropdown.a0b3bb4c.js";import"./PsDropdownSelect.063a4178.js";import"./PsToggle.1bec2c80.js";import"./toggle.284f64a6.js";import"./PsWarningDialog.db1ec62c.js";import"./PsModal.0f9f6579.js";import"./vue-neat-modal.d03c5dee.js";import"./index.esm.159b9749.js";import"./auth.esm.925cebae.js";import"./SidebarMenuItem.15e6d48b.js";import"./SidebarSubTab.31b29583.js";import"./PsErrorDialog.3227ce3c.js";import"./PsInputWithRightIcon.c0b01b6c.js";import"./PsSuccessDialog.9e44e7fb.js";import"./PsBannerIcon.82d105ba.js";import"./PsIcon1.3db40a94.js";import"./Icons.c01eddd9.js";import"./PsLoadingCircleDialog.65ae0069.js";import"./PsLabelHeader4.a6c530e5.js";import"./PsDraggable.2eac7eeb.js";const z=g({name:"Edit",components:{Head:k,PsBreadcrumb2:L,PsInput:H,PsLabel:D,PsButton:I,PsLabelHeader6:T,PsCard:x,PsIcon:E,PsLoading:M,PsCheckboxValue:N,PsActionModal:S,PsImageIconModal:F,PsDangerDialog:V,PsLabelCaption:j,PsLabelTitle3:q,PsTextarea:A,RoleCheckbox:R},layout:y,props:["errors","user"],setup(e){let r=C({name:e.user.name,email:e.user.email,user_phone:e.user.user_phone,user_address:e.user.user_address,user_about_me:e.user.user_about_me,role_id:e.user.role.name,permissions:""});function i({data:_}){r.permissions=_.toString()}return{handleUserMultiSelect:i,form:r}},computed:{breadcrumb(){return[{label:p("core__be_dashboard_label"),url:route("admin.index")},{label:p("seller_report_module"),url:route("seller_report.index")},{label:p("core__be_seller_report_detail"),color:"text-primary-500"}]}},methods:{handleCancel(){this.$inertia.get(route("seller_report.index"))}}}),G={class:"rounded-xl"},J={class:"bg-primary-50 dark:bg-primary-900 py-2.5 ps-4 rounded-t-xl"},K={class:"px-4 pt-6 dark:bg-backgroundDark"},O={class:"grid w-full sm:w-1/2 gap-6"},Q={class:"mb-2.5 flex flex-row justify-end"};function W(e,r,i,_,X,Y){const f=s("Head"),c=s("ps-breadcrumb-2"),v=s("ps-label-header-6"),m=s("ps-label"),u=s("ps-input"),b=s("ps-textarea"),P=s("ps-button"),h=s("ps-card"),$=s("ps-layout");return w(),U(B,null,[o(f,{title:e.$t("core__be_seller_report_detail")},null,8,["title"]),o($,null,{default:t(()=>[o(c,{items:e.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),o(h,{class:"w-full h-auto"},{default:t(()=>[a("div",G,[a("div",J,[o(v,{textColor:"text-secondary-800 dark:text-secondary-100"},{default:t(()=>[n(d(e.$t("core__be_seller_info_lbl")),1)]),_:1})]),a("div",K,[a("form",null,[a("div",O,[a("div",null,[o(m,{class:"text-base"},{default:t(()=>[n(d(e.$t("user_name_label")),1)]),_:1}),o(u,{disabled:!0,type:"text",value:e.form.name,"onUpdate:value":r[0]||(r[0]=l=>e.form.name=l),placeholder:e.$t("user_name_label")},null,8,["value","placeholder"])]),a("div",null,[o(m,{class:"text-base"},{default:t(()=>[n(d(e.$t("email_label")),1)]),_:1}),o(u,{disabled:!0,type:"text",value:e.form.email,"onUpdate:value":r[1]||(r[1]=l=>e.form.email=l),placeholder:e.$t("email_label")},null,8,["value","placeholder"])]),a("div",null,[o(m,{class:"text-base"},{default:t(()=>[n(d(e.$t("phone_label")),1)]),_:1}),o(u,{disabled:!0,type:"text",value:e.form.user_phone,"onUpdate:value":r[2]||(r[2]=l=>e.form.user_phone=l),placeholder:e.$t("phone_label")},null,8,["value","placeholder"])]),a("div",null,[o(m,{class:"text-base"},{default:t(()=>[n(d(e.$t("core__be_address_label")),1)]),_:1}),o(b,{disabled:!0,rows:"3",value:e.form.user_address,"onUpdate:value":r[3]||(r[3]=l=>e.form.user_address=l),placeholder:e.$t("core__be_address_label")},null,8,["value","placeholder"])]),a("div",null,[o(m,{class:"text-base"},{default:t(()=>[n(d(e.$t("core__be_user_role_label")),1)]),_:1}),o(u,{disabled:!0,type:"text",value:e.form.role_id,"onUpdate:value":r[4]||(r[4]=l=>e.form.role_id=l),placeholder:e.$t("role_lable")},null,8,["value","placeholder"])]),a("div",null,[o(m,{class:"text-base"},{default:t(()=>[n(d(e.$t("core__be_about_me")),1)]),_:1}),o(b,{disabled:!0,rows:"3",value:e.form.user_about_me,"onUpdate:value":r[5]||(r[5]=l=>e.form.user_about_me=l),placeholder:e.$t("about_me")},null,8,["value","placeholder"])]),a("div",Q,[o(P,{type:"button",onClick:r[6]||(r[6]=l=>e.handleCancel())},{default:t(()=>[n(d(e.$t("core__be_btn_back")),1)]),_:1})])])])])])]),_:1})]),_:1})],64)}var Ne=Z(z,[["render",W]]);export{Ne as default};