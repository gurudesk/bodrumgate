import{aJ as R,bC as Z,d as G,Z as Q,p as W,i as $,H as j,B as _,o,c as s,b as t,w as r,a as c,f as b,q as i,t as d,g as p,F as v,s as w,m as O,x as X,r as u,E as Y}from"./app.0e502cc5.js";import{P as x}from"./PsLayout.7915dd73.js";import F from"./FlashMessage.9190a5bd.js";import{u as ee}from"./Validators.cb85894a.js";import{P as ae}from"./PsInput.6fad3d25.js";import{P as oe}from"./PsLabel.6d5b1b0c.js";import{P as le}from"./PsButton.ed5c0dad.js";import{P as te}from"./PsTextarea.51895c08.js";import{P as ne}from"./PsCheckboxValue.d227357b.js";import{P as re}from"./PsLabelHeader4.a6c530e5.js";import{P as se}from"./PsLabelCaption.3e68d19d.js";import{P as ie}from"./PsLabelTitle3.7f097e1a.js";import{P as de}from"./PsIcon.8dbf90d4.js";import{P as pe}from"./PsLoading.0f9a761a.js";import{P as me}from"./PsBreadcrumb2.ad6b6d6d.js";import{a as ue,P as _e}from"./PsActionModal.279e9046.js";import{d as fe}from"./PsDangerDialog.195b6d73.js";import{P as ge}from"./PsImageUpload.b7aa8768.js";import{_ as ye}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsDropdown.a0b3bb4c.js";import"./PsDropdownSelect.063a4178.js";import"./PsToggle.1bec2c80.js";import"./toggle.284f64a6.js";import"./PsWarningDialog.db1ec62c.js";import"./PsModal.0f9f6579.js";import"./vue-neat-modal.d03c5dee.js";import"./index.esm.159b9749.js";import"./auth.esm.925cebae.js";import"./SidebarMenuItem.15e6d48b.js";import"./SidebarSubTab.31b29583.js";import"./PsErrorDialog.3227ce3c.js";import"./PsInputWithRightIcon.c0b01b6c.js";import"./PsSuccessDialog.9e44e7fb.js";import"./PsBannerIcon.82d105ba.js";import"./PsIcon1.3db40a94.js";import"./Icons.c01eddd9.js";import"./PsLoadingCircleDialog.65ae0069.js";import"./PsDraggable.2eac7eeb.js";const be=R(()=>Z(()=>import("./PsColorPickerModal.755cf350.js"),["assets/PsColorPickerModal.755cf350.js","assets/PsColorPickerModal.76387501.css","assets/PsModal.0f9f6579.js","assets/PsModal.e8088e6e.css","assets/vue-neat-modal.d03c5dee.js","assets/vue-neat-modal.29af7d11.css","assets/app.0e502cc5.js","assets/app.aef5a90c.css","assets/plugin-vue_export-helper.21dcd24c.js","assets/PsLabelHeader4.a6c530e5.js","assets/PsLabel.6d5b1b0c.js","assets/PsButton.ed5c0dad.js","assets/PsIcon1.3db40a94.js","assets/Icons.c01eddd9.js"])),ce=G({name:"Edit",components:{FlashMessage:F,Head:Q,PsInput:ae,PsLabel:oe,PsButton:le,PsTextarea:te,PsCheckboxValue:ne,PsLabelHeader4:re,PsLabelCaption:se,PsIcon:de,PsLoading:pe,PsBreadcrumb2:me,Link:W,PsActionModal:ue,PsImageIconModal:_e,PsDangerDialog:fe,PsImageUpload:ge,PsLabelTitle3:ie,PsColorPickerModal:be},layout:x,props:["errors","status","coreFieldFilterSettings","landing_page","checkEditPermission","validation"],setup(e){const l=$(!1),P=$(!1),q=$(),U=$(),K=$(),I=$(),D=$(),B=$(e.landing_page.default_landing_page_color);let T=$(!1),f=j({title:e.landing_page.title,gps_link:e.landing_page.gps_link,ios_link:e.landing_page.ios_link,description:e.landing_page.description,yt_link:e.landing_page.yt_link,fb_link:e.landing_page.fb_link,tw_link:e.landing_page.tw_link,default_landing_page_color:e.landing_page.default_landing_page_color,cover:"",logo:"",_method:"put"});const{isEmail:C,isEmpty:k}=ee(),z=(m,g,h="")=>{e.errors[m]=g?"":k(m,g,h)},M=(m,g,h="",A="")=>{e.errors[m]=g?C(m,g,A):k(m,g,h)},S=m=>{let g=m.keyCode?m.keyCode:m.which;(g<48||g>57)&&m.preventDefault()};function E(){this.$inertia.get(route("admin.index"))}function L(){this.$inertia.post(route("landing_page.update",e.landing_page.id),f,{forceFormData:!0,onBefore:()=>{l.value=!0},onSuccess:()=>{l.value=!1,P.value=!0,setTimeout(()=>{P.value=!1},2e3)},onError:()=>{l.value=!1}})}function H(m){D.value.openModal(m,g=>{B.value=g,f.default_landing_page_color=B.value},()=>{})}function N(m){U.value.openModal(_("conf_modal_label"),_("core__be_replace_img_label"),_("core__be_remove_img_label"),"imagePlus","cross","24","24",()=>{K.value.openModal(_("core__be_upload_photo"),"cloudUpload",g=>{let h=j({image:g,_method:"put"});this.$inertia.post(route("image.replace",m),h)})},()=>{I.value.openModal(_("core__be_remove_label"),_("core__be_are_u_sure_remove_photo"),_("core__be_btn_confirm"),_("core__be_btn_cancel"),()=>{this.$inertia.delete(route("image.destroy",m),{onBefore:()=>{l.value=!0},onSuccess:()=>{l.value=!1,P.value=!0,setTimeout(()=>{P.value=!1},2e3)},onError:()=>{l.value=!1}})},()=>{})},!e.validation.includes("cover"))}function V(m){U.value.openModal(_("conf_modal_label"),_("core__be_replace_logo_label"),_("core__be_remove_logo_label"),"image","trash","24","24",()=>{K.value.openModal(_("core__be_upload_icon"),"cloudUpload",g=>{let h=j({image:g,_method:"put"});this.$inertia.post(route("image.replace",m),h)})},()=>{I.value.openModal(_("core__be_remove_label"),_("core__be_are_u_sure_remove_logo"),_("core__be_btn_confirm"),_("core__be_btn_cancel"),()=>{this.$inertia.delete(route("image.destroy",m),{onBefore:()=>{l.value=!0},onSuccess:()=>{l.value=!1,P.value=!0,setTimeout(()=>{P.value=!1},2e3)},onError:()=>{l.value=!1}})},()=>{})},!e.validation.includes("logo"))}return{validateEmailInput:M,handleCancel:E,onlyNumber:S,form:f,handleSubmit:L,loading:l,success:P,ps_image_icon_modal:K,ps_action_modal:U,visible:T,validateEmptyInput:z,email:q,replaceImageClicked:N,replaceLogoClicked:V,ps_danger_dialog:I,colorPickerClicked:H,ps_color_picker_modal:D,current_color:B}},computed:{breadcrumb(){return[{label:_("core__be_dashboard_label"),url:route("admin.index")},{label:_("landing_page_module_entry"),color:"text-primary-500"}]}}}),ke={class:""},ve={class:"bg-background dark:bg-secondaryDark-black rounded-lg"},he={class:"bg-primary-50 dark:bg-primary-900 py-2.5 ps-4 rounded-t-lg"},$e={class:"w-full sm:w-1/2"},we={key:0,class:"text-red-800 font-medium ms-1"},Pe={key:0,class:"text-red-800 font-medium ms-1"},Ce={key:0,class:"text-red-800 font-medium ms-1"},Ee={key:0,class:"text-red-800 font-medium ms-1"},Ie={key:0,class:"text-red-800 font-medium ms-1"},Be={key:0,class:"text-red-800 font-medium ms-1"},Se={key:0,class:"text-red-800 font-medium ms-1"},Ue={key:0,class:"text-red-800 font-medium ms-1"},Ke={key:1,class:"flex items-end pt-4"},De={class:"w-56 h-56",alt:"landing_page logo"},Me={key:0,class:"text-red-800 font-medium ms-1"},Le={key:1,class:"flex items-end pt-4"},Te={class:"w-96 h-96",alt:"landing_page cover"},ze={class:"px-4 py-3"},He={class:"grid grid-cols-2"},Ne={class:"flex flex-row p-1"},Ve={class:"w-6 h-6 m-1 rounded shadow-sm cursor-pointer"},Ae={class:"flex flex-row px-4 py-3 justify-end mb-2.5 mt-4"};function je(e,l,P,q,U,K){const I=u("Head"),D=u("ps-breadcrumb-2"),B=u("ps-banner-icon"),T=u("ps-label-header-6"),f=u("ps-label"),C=u("ps-input"),k=u("ps-label-caption"),z=u("ps-textarea"),M=u("ps-label-title-3"),S=u("ps-icon"),E=u("ps-button"),L=u("ps-image-upload"),H=u("ps-loading"),N=u("ps-card"),V=u("ps-image-icon-modal"),m=u("ps-action-modal"),g=u("ps-danger-dialog"),h=u("PsColorPickerModal"),A=u("ps-layout"),J=Y("lazy");return o(),s(v,null,[t(I,{title:e.$t("landing_page_module_entry")},null,8,["title"]),t(A,null,{default:r(()=>[c("div",ke,[t(D,{items:e.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),e.visible?(o(),b(B,{key:0,visible:e.visible,theme:e.status.flag=="danger"?"bg-red-500":e.status.flag=="warning"?"bg-yellow-500":"bg-green-500",iconName:e.status.flag=="danger"?"close-circle":e.status.flag=="warning"?"alert-triangle":"rightalert",class:"text-white mb-5 sm:mb-6 lg:mb-8",iconColor:"white"},{default:r(()=>[i(d(e.status.msg),1)]),_:1},8,["visible","theme","iconName"])):p("",!0),t(N,{class:"w-full h-auto"},{default:r(()=>[c("div",ve,[c("div",he,[t(T,{textColor:"text-secondary-800 dark:text-secondary-100"},{default:r(()=>[i(d(e.$t("core__be_landing_page_info")),1)]),_:1})]),c("div",null,[c("div",$e,[c("div",null,[(o(!0),s(v,null,w(e.coreFieldFilterSettings.filter(a=>a.original_field_name==="title"&&a.enable===1&&a.is_delete===0),(a,y)=>(o(),s("div",{class:"px-4 py-3",key:y},[t(f,{class:"text-base flex flex-row"},{default:r(()=>[i(d(e.$t(a.label_name))+" ",1),(a.mandatory=1)?(o(),s("span",we,"*")):p("",!0)]),_:2},1024),t(C,{ref_for:!0,ref:"title",type:"text",value:e.form.title,"onUpdate:value":l[0]||(l[0]=n=>e.form.title=n),placeholder:e.$t(a.placeholder),onKeyup:n=>a.mandatory==1?e.validateEmptyInput("title",e.form.title):"",onBlur:n=>a.mandatory==1?e.validateEmptyInput("title",e.form.title):""},null,8,["value","placeholder","onKeyup","onBlur"]),a.mandatory==1?(o(),b(k,{key:0,textColor:"text-red-500 ",class:"mt-2 block"},{default:r(()=>[i(d(e.errors.title),1)]),_:1})):p("",!0)]))),128)),(o(!0),s(v,null,w(e.coreFieldFilterSettings.filter(a=>a.original_field_name==="description"&&a.enable===1&&a.is_delete===0),(a,y)=>(o(),s("div",{class:"px-4 py-3",key:y},[t(f,{class:"text-base"},{default:r(()=>[i(d(e.$t(a.label_name))+" ",1),(a.mandatory=1)?(o(),s("span",Pe,"*")):p("",!0)]),_:2},1024),t(z,{rows:"4",ref_for:!0,ref:"description",value:e.form.description,"onUpdate:value":l[1]||(l[1]=n=>e.form.description=n),placeholder:e.$t(a.placeholder),onKeyup:n=>a.mandatory==1?e.validateEmptyInput("description",e.form.description):"",onBlur:n=>a.mandatory==1?e.validateEmptyInput("description",e.form.description):""},null,8,["value","placeholder","onKeyup","onBlur"]),a.mandatory==1?(o(),b(k,{key:0,textColor:"text-red-500 ",class:"mt-2 block"},{default:r(()=>[i(d(e.errors.description),1)]),_:1})):p("",!0)]))),128)),(o(!0),s(v,null,w(e.coreFieldFilterSettings.filter(a=>a.original_field_name==="gps_link"&&a.enable===1&&a.is_delete===0),(a,y)=>(o(),s("div",{class:"px-4 py-3",key:y},[t(f,{class:"text-base flex flex-row"},{default:r(()=>[i(d(e.$t(a.label_name))+" ",1),(a.mandatory=1)?(o(),s("span",Ce,"*")):p("",!0)]),_:2},1024),t(C,{ref_for:!0,ref:"gps_link",type:"text",value:e.form.gps_link,"onUpdate:value":l[2]||(l[2]=n=>e.form.gps_link=n),placeholder:e.$t(a.placeholder),onKeyup:n=>a.mandatory==1?e.validateEmptyInput("gps_link",e.form.gps_link):"",onBlur:n=>a.mandatory==1?e.validateEmptyInput("gps_link",e.form.gps_link):""},null,8,["value","placeholder","onKeyup","onBlur"]),a.mandatory==1?(o(),b(k,{key:0,textColor:"text-red-500 ",class:"mt-2 block"},{default:r(()=>[i(d(e.errors.gps_link),1)]),_:1})):p("",!0)]))),128)),(o(!0),s(v,null,w(e.coreFieldFilterSettings.filter(a=>a.original_field_name==="ios_link"&&a.enable===1&&a.is_delete===0),(a,y)=>(o(),s("div",{class:"px-4 py-3",key:y},[t(f,{class:"text-base flex flex-row"},{default:r(()=>[i(d(e.$t(a.label_name))+" ",1),(a.mandatory=1)?(o(),s("span",Ee,"*")):p("",!0)]),_:2},1024),t(C,{ref_for:!0,ref:"ios_link",type:"text",value:e.form.ios_link,"onUpdate:value":l[3]||(l[3]=n=>e.form.ios_link=n),placeholder:e.$t(a.placeholder),onKeyup:n=>a.mandatory==1?e.validateEmptyInput("ios_link",e.form.ios_link):"",onBlur:n=>a.mandatory==1?e.validateEmptyInput("ios_link",e.form.ios_link):""},null,8,["value","placeholder","onKeyup","onBlur"]),a.mandatory==1?(o(),b(k,{key:0,textColor:"text-red-500 ",class:"mt-2 block"},{default:r(()=>[i(d(e.errors.ios_link),1)]),_:1})):p("",!0)]))),128)),(o(!0),s(v,null,w(e.coreFieldFilterSettings.filter(a=>a.original_field_name==="yt_link"&&a.enable===1&&a.is_delete===0),(a,y)=>(o(),s("div",{class:"px-4 py-3",key:y},[t(f,{class:"text-base flex flex-row"},{default:r(()=>[i(d(e.$t(a.label_name))+" ",1),(a.mandatory=1)?(o(),s("span",Ie,"*")):p("",!0)]),_:2},1024),t(C,{ref_for:!0,ref:"yt_link",type:"text",value:e.form.yt_link,"onUpdate:value":l[4]||(l[4]=n=>e.form.yt_link=n),placeholder:e.$t(a.placeholder),onKeyup:n=>a.mandatory==1?e.validateEmptyInput("yt_link",e.form.yt_link):"",onBlur:n=>a.mandatory==1?e.validateEmptyInput("yt_link",e.form.yt_link):""},null,8,["value","placeholder","onKeyup","onBlur"]),a.mandatory==1?(o(),b(k,{key:0,textColor:"text-red-500 ",class:"mt-2 block"},{default:r(()=>[i(d(e.errors.yt_link),1)]),_:1})):p("",!0)]))),128)),(o(!0),s(v,null,w(e.coreFieldFilterSettings.filter(a=>a.original_field_name==="fb_link"&&a.enable===1&&a.is_delete===0),(a,y)=>(o(),s("div",{class:"px-4 py-3",key:y},[t(f,{class:"text-base flex flex-row"},{default:r(()=>[i(d(e.$t(a.label_name))+" ",1),(a.mandatory=1)?(o(),s("span",Be,"*")):p("",!0)]),_:2},1024),t(C,{ref_for:!0,ref:"fb_link",type:"text",value:e.form.fb_link,"onUpdate:value":l[5]||(l[5]=n=>e.form.fb_link=n),placeholder:e.$t(a.placeholder),onKeyup:n=>a.mandatory==1?e.validateEmptyInput("fb_link",e.form.fb_link):"",onBlur:n=>a.mandatory==1?e.validateEmptyInput("fb_link",e.form.fb_link):""},null,8,["value","placeholder","onKeyup","onBlur"]),a.mandatory==1?(o(),b(k,{key:0,textColor:"text-red-500 ",class:"mt-2 block"},{default:r(()=>[i(d(e.errors.fb_link),1)]),_:1})):p("",!0)]))),128)),(o(!0),s(v,null,w(e.coreFieldFilterSettings.filter(a=>a.original_field_name==="tw_link"&&a.enable===1&&a.is_delete===0),(a,y)=>(o(),s("div",{class:"px-4 py-3",key:y},[t(f,{class:"text-base flex flex-row"},{default:r(()=>[i(d(e.$t(a.label_name))+" ",1),a.mandatory==1?(o(),s("span",Se,"*")):p("",!0)]),_:2},1024),t(C,{ref_for:!0,ref:"tw_link",type:"text",value:e.form.tw_link,"onUpdate:value":l[6]||(l[6]=n=>e.form.tw_link=n),placeholder:e.$t(a.placeholder),onKeyup:n=>a.mandatory==1?e.validateEmptyInput("tw_link",e.form.tw_link):"",onBlur:n=>a.mandatory==1?e.validateEmptyInput("tw_link",e.form.tw_link):""},null,8,["value","placeholder","onKeyup","onBlur"]),a.mandatory==1?(o(),b(k,{key:0,textColor:"text-red-500 ",class:"mt-2 block"},{default:r(()=>[i(d(e.errors.tw_link),1)]),_:1})):p("",!0)]))),128)),(o(!0),s(v,null,w(e.coreFieldFilterSettings.filter(a=>a.original_field_name==="landing-icon"&&a.enable===1&&a.is_delete===0),(a,y)=>(o(),s("div",{class:"px-4 py-3",key:y},[t(f,{class:"text-base flex flex-row"},{default:r(()=>[i(d(e.$t(a.label_name))+" ",1),a.mandatory==1?(o(),s("span",Ue,"*")):p("",!0)]),_:2},1024),e.landing_page.landing_logo[0]?p("",!0):(o(),b(M,{key:0},{default:r(()=>[i(d(e.$t("core__be_recommended_size_200_200")),1)]),_:1})),e.landing_page.landing_logo[0]?(o(),s("div",Ke,[O(c("img",De,null,512),[[J,{src:e.$page.props.uploadUrl+"/"+e.landing_page.landing_logo[0].img_path,loading:e.$page.props.sysImageUrl+"/loading_gif.gif",error:e.$page.props.sysImageUrl+"/default_photo.png"}]]),t(E,{type:"button",onClick:l[7]||(l[7]=n=>e.replaceLogoClicked(e.landing_page.landing_logo[0].id)),rounded:"rounded-full",shadow:"drop-shadow-2xl",class:"-ms-10 mb-2",colors:"bg-white text-primary-500 dark:bg-secondaryDark-black",border:"border border-1 dark:border-secondary-700 border-secondary-300",padding:"p-1.5",hover:"",focus:""},{default:r(()=>[t(S,{name:"pencil-btn",w:"21",h:"21"})]),_:1})])):(o(),b(L,{key:2,class:"w-56",uploadType:"icon",imageFile:e.form.logo,"onUpdate:imageFile":l[8]||(l[8]=n=>e.form.logo=n)},null,8,["imageFile"])),t(k,{textColor:"text-red-500 ",class:"m-2"},{default:r(()=>[i(d(e.errors.logo),1)]),_:1})]))),128)),(o(!0),s(v,null,w(e.coreFieldFilterSettings.filter(a=>a.original_field_name==="landing-cover"&&a.enable===1&&a.is_delete===0),(a,y)=>(o(),s("div",{class:"px-4 py-3",key:y},[t(f,{class:"text-base flex flex-row"},{default:r(()=>[i(d(e.$t(a.label_name))+" ",1),a.mandatory==1?(o(),s("span",Me,"*")):p("",!0)]),_:2},1024),e.landing_page.landing_cover[0]?p("",!0):(o(),b(M,{key:0},{default:r(()=>[i(d(e.$t("core__be_recommended_size_630_660")),1)]),_:1})),e.landing_page.landing_cover[0]?(o(),s("div",Le,[O(c("img",Te,null,512),[[J,{src:e.$page.props.uploadUrl+"/"+e.landing_page.landing_cover[0].img_path,loading:e.$page.props.sysImageUrl+"/loading_gif.gif",error:e.$page.props.sysImageUrl+"/default_photo.png"}]]),t(E,{type:"button",onClick:l[9]||(l[9]=n=>e.replaceImageClicked(e.landing_page.landing_cover[0].id)),rounded:"rounded-full",shadow:"drop-shadow-2xl",class:"-ms-10 mb-2",colors:"bg-white text-primary-500 dark:bg-secondaryDark-black",border:"border border-1 dark:border-secondary-700 border-secondary-300",padding:"p-1.5",hover:"",focus:""},{default:r(()=>[t(S,{name:"pencil-btn",w:"21",h:"21"})]),_:1})])):(o(),b(L,{key:2,uploadType:"image",imageFile:e.form.cover,"onUpdate:imageFile":l[10]||(l[10]=n=>e.form.cover=n)},null,8,["imageFile"])),t(k,{textColor:"text-red-500 ",class:"mt-2 block"},{default:r(()=>[i(d(e.errors.cover),1)]),_:1})]))),128)),c("div",ze,[t(f,{class:"text-base flex flex-row"},{default:r(()=>[i(d(e.$t("core_fe__default_landing_page_color")),1)]),_:1}),c("div",He,[c("div",null,[c("div",Ne,[c("div",Ve,[c("div",{onClick:l[11]||(l[11]=a=>e.colorPickerClicked(e.current_color)),class:"w-6 h-6 rounded shadow-sm cursor-pointer",style:X({"background-color":e.current_color})},null,4)]),t(f,{class:"leading-7"},{default:r(()=>[i(d(e.current_color),1)]),_:1})])])])]),c("div",Ae,[t(E,{onClick:l[12]||(l[12]=a=>e.handleCancel()),textSize:"text-base",type:"reset",class:"me-4",colors:"text-primary-500",focus:"",hover:""},{default:r(()=>[i(d(e.$t("core__be_btn_cancel")),1)]),_:1}),t(E,{disabled:!e.checkEditPermission,onClick:l[13]||(l[13]=a=>e.handleSubmit()),class:"transition-all duration-300 min-w-3xs me-4",padding:"px-8 py-0",rounded:"rounded",hover:"",focus:""},{default:r(()=>[e.loading?(o(),b(H,{key:0,theme:"border-2 border-t-2 border-text-8 border-t-primary-500",loadingSize:"h-5 w-5"})):p("",!0),e.success?(o(),b(S,{key:1,name:"check",w:"20",h:"20",class:"me-1.5 transition-all duration-300"})):p("",!0),e.success?(o(),b(f,{key:2,class:"transition-all duration-300",textColor:"text-white dark:text-secondaryDark-black"},{default:r(()=>[i(d(e.$t("core__be_btn_saved")),1)]),_:1})):p("",!0),!e.loading&&!e.success?(o(),b(f,{key:3,textColor:"text-white dark:text-secondaryDark-black"},{default:r(()=>[i(d(e.$t("core__be_btn_save")),1)]),_:1})):p("",!0)]),_:1},8,["disabled"])])])])])])]),_:1})]),t(V,{ref:"ps_image_icon_modal"},null,512),t(m,{ref:"ps_action_modal"},null,512),t(g,{ref:"ps_danger_dialog"},null,512),t(h,{ref:"ps_color_picker_modal"},null,512)]),_:1})],64)}var Ea=ye(ce,[["render",je]]);export{Ea as default};