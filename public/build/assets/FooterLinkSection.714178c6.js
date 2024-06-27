import{i as xt,j as gt,o as n,c as i,a as l,b as t,w as a,q as f,t as c,F as _,s as x,m as S,g as b,O as I,r as C,E as ut}from"./app.0e502cc5.js";import ht from"./PsLabel.3cf95094.js";import St from"./PsLink.555685fa.js";import bt from"./PsRouteLink.8f7df026.js";import Ct from"./PsLabelCaption.a33ce9c4.js";import It from"./PsIcon.dc31c2db.js";import{P as _t}from"./ProductParameterHolder.4354be0b.js";import{P as yt}from"./PsValueStore.a232cbb1.js";import{u as vt}from"./AppInfoStore.266a6525.js";import{u as wt}from"./CustomFieldStore.b038b00e.js";import{_ as kt}from"./plugin-vue_export-helper.21dcd24c.js";import"./ps_constants.0e2a11f9.js";import"./PsApiService.98e573c3.js";import"./PsObject.a17ef38f.js";import"./DefaultPhoto.cc755f93.js";import"./PsStore.f4ecabdb.js";import"./PsSepetetedStore.9a31ac47.js";const At={components:{PsLabel:ht,PsIcon:It,PsLink:St,PsRouteLink:bt,PsLabelCaption:Ct},setup(){const r=yt();xt(r.locationId);const u=wt(),y="1.0.1",e=r.getLoginUserId(),v=vt();gt(async()=>{await u.loadFeSettingCustomFieldList(e)}),console.log(u);function w(){I.get(route("dashboard"))}function s(){const g=new _t().getLatestParameterHolder().getUrlParamsAndQuery();I.get(route("fe_item_list",g.query))}function m(){const g=new _t().getPopularParameterHolder().getUrlParamsAndQuery();I.get(route("fe_item_list",g.query))}return{gotToHome:w,viewAllPopularItemList:m,viewAllRecentItemList:s,versionNo:y,appInfoStore:v,customFieldStore:u}}},Ft={class:"h-auto text-100 bg-feSecondary-900 flex flex-col justify-between"},Lt={class:"lg:w-large xl:w-feLarge flex flex-col lg:justify-between xl:justify-center xl:gap-20 sm:flex-row md:flex-col lg:flex-row mx-auto mt-6"},zt={class:"flex sm:flex-col md:flex-row gap-10"},Pt={class:"flex flex-col sm:grid sm:grid-cols-3 gap-10 sm:hidden md:grid md:grid-cols-2"},Ut={class:"flex flex-col gap-6"},Vt={class:"flex flex-col gap-2 sm:gap-4"},Nt={class:"flex flex-col gap-6"},Bt={class:"flex flex-col gap-2 sm:gap-4 cursor-pointer"},jt={class:"grid sm:grid-cols-3 md:grid-cols-1 gap-8 md:mx-auto"},qt={class:"flex flex-col hidden sm:block md:hidden"},Rt={class:"flex flex-col gap-2 sm:gap-4 mt-6"},Ht={class:"flex flex-col col-span-2 hidden sm:block md:hidden"},Dt={class:"flex flex-col gap-2 sm:gap-4 mt-6"},Et={class:"flex flex-col gap-6"},Ot={class:"flex flex-col gap-2 sm:gap-4"},Qt={class:"col-span-2 hidden sm:block md:hidden"},Tt={class:"flex flex-col items-center sm:items-start mt-8 sm:mt-0"},Mt={class:"flex items-center gap-6 mt-2.5"},Gt=["href"],Jt=["href"],Kt=["href"],Wt=["href"],Xt=["href"],Yt=["href"],Zt={class:"flex justify-center sm:justify-start gap-6 h-8 sm:h-10 mt-8 sm:mt-6"},$t={key:0,class:"w-40 h-15"},te={class:"w-full h-full cursor-pointer object-cover",alt:"goole play store",width:"50px",height:"50px"},ee={key:1,class:"w-40 h-15"},oe={class:"w-full h-full cursor-pointer object-cover",alt:"goole play store",width:"50px",height:"50px"},ae={class:"flex flex-col items-center sm:items-start mt-8 sm:mt-0 md:mt-8 block sm:hidden md:flex md:flex-row md:gap-8 lg:flex-col lg:mt-0 lg:gap-10"},re={class:""},le={class:"flex items-center gap-6 mt-2.5 lg:mt-4"},se=["href"],ne=["href"],ie=["href"],fe=["href"],ce=["href"],de=["href"],me={class:"flex justify-center sm:justify-start gap-6 h-8 sm:h-10 mt-8 sm:mt-6 lg:mt-0"},pe={key:0,class:"w-40 h-15.5"},_e={class:"w-full h-full cursor-pointer object-cover",alt:"goole play store",width:"50px",height:"50px"},xe={key:1,class:"w-40 h-15.5"},ge={class:"w-full h-full cursor-pointer object-cover",alt:"goole play store",width:"50px",height:"50px"},ue={class:"mb-6 flex justify-center items-center mt-8 sm:mt-6"};function he(r,u,y,e,v,w){var k,A,F,L,z,P,U,V,N,B,j,q,R,H,D,E,O,Q,T,M,G,J,K,W,X,Y,Z,$,tt,et,ot,at,rt,lt,st,nt,it,ft,ct,dt;const s=C("ps-label"),m=C("ps-route-link"),p=C("ps-icon"),g=C("ps-link"),h=ut("lazy");return n(),i("div",Ft,[l("div",Lt,[l("div",zt,[l("div",Pt,[l("div",Ut,[t(s,{textColor:"text-feAchromatic-50",class:"font-semibold text-xl sm:text-2xl"},{default:a(()=>[f(c(r.$t("footer__shop")),1)]),_:1}),l("div",Vt,[t(s,{class:"font-normal text-base cursor-pointer"},{default:a(()=>[t(m,{to:{name:"fe_category.index"},textColor:"text-feAchromatic-50",textSize:"text-base font-normal"},{default:a(()=>[f(c(r.$t("footer__categories")),1)]),_:1},8,["to"])]),_:1}),t(s,{class:"font-normal text-base cursor-pointer",onClick:e.viewAllRecentItemList,textColor:"text-feAchromatic-50",textSize:"font-normal text-base"},{default:a(()=>[f(c(r.$t("footer__latest_posts")),1)]),_:1},8,["onClick"]),t(s,{class:"font-normal text-base cursor-pointer",onClick:e.viewAllPopularItemList,textColor:"text-feAchromatic-50",textSize:"font-normal text-base"},{default:a(()=>[f(c(r.$t("footer__popular_posts")),1)]),_:1},8,["onClick"]),t(m,{to:{name:"fe_user_list"}},{default:a(()=>[t(s,{class:"font-normal text-base cursor-pointer",textColor:"text-feAchromatic-50",textSize:"font-normal text-base"},{default:a(()=>[f(c(r.$t("footer__user_list")),1)]),_:1})]),_:1})])]),l("div",Nt,[t(s,{textColor:"text-feAchromatic-50",class:"font-semibold text-xl sm:text-2xl"},{default:a(()=>[f(c(r.$t("footer__support")),1)]),_:1}),l("div",Bt,[t(s,{class:"font-normal text-base"},{default:a(()=>[t(m,{to:{name:"fe_contact_us"},textColor:"text-feAchromatic-50",textSize:"font-normal text-base"},{default:a(()=>[f(c(r.$t("footer__contact_us")),1)]),_:1})]),_:1}),t(s,{class:"font-normal text-base cursor-pointer"},{default:a(()=>[t(m,{to:{name:"fe_safety_tips"},textColor:"text-feAchromatic-50",textSize:"font-normal text-base"},{default:a(()=>[f(c(r.$t("footer__safety_tips")),1)]),_:1})]),_:1}),t(s,{class:"font-normal text-base cursor-pointer"},{default:a(()=>[t(m,{to:{name:"fe_privacy"},textColor:"text-feAchromatic-50",textSize:"font-normal text-base"},{default:a(()=>[f(c(r.$t("footer__privacy_policy")),1)]),_:1})]),_:1}),t(s,{class:"font-normal text-base cursor-pointer hyphens-none ..."},{default:a(()=>[t(m,{to:{name:"fe_terms_and_conditions"},textColor:"text-feAchromatic-50",textSize:"font-normal text-base"},{default:a(()=>[f(c(r.$t("term_and_condition__term_and_condition")),1)]),_:1})]),_:1}),t(s,{class:"font-normal text-base cursor-pointer"},{default:a(()=>[t(m,{to:{name:"fe_faq"},textColor:"text-feAchromatic-50",textSize:"font-normal text-base"},{default:a(()=>[f(c(r.$t("faq_page__faq_page")),1)]),_:1})]),_:1})])])]),l("div",jt,[l("div",qt,[t(s,{textColor:"text-feAchromatic-50",class:"font-semibold text-xl sm:text-2xl"},{default:a(()=>[f(c(r.$t("footer__shop")),1)]),_:1}),l("div",Rt,[t(s,{class:"font-normal text-base cursor-pointer"},{default:a(()=>[t(m,{to:{name:"fe_category.index"},textColor:"text-feAchromatic-50",textSize:"text-base font-normal"},{default:a(()=>[f(c(r.$t("footer__categories")),1)]),_:1},8,["to"])]),_:1}),t(s,{class:"font-normal text-base cursor-pointer",onClick:e.viewAllRecentItemList,textColor:"text-feAchromatic-50",textSize:"font-normal text-base"},{default:a(()=>[f(c(r.$t("footer__latest_posts")),1)]),_:1},8,["onClick"]),t(s,{class:"font-normal text-base cursor-pointer",onClick:e.viewAllPopularItemList,textColor:"text-feAchromatic-50",textSize:"font-normal text-base"},{default:a(()=>[f(c(r.$t("footer__popular_posts")),1)]),_:1},8,["onClick"])])]),l("div",Ht,[t(s,{textColor:"text-feAchromatic-50",class:"font-semibold text-xl sm:text-2xl"},{default:a(()=>[f(c(r.$t("footer__support")),1)]),_:1}),l("div",Dt,[t(s,{class:"font-normal text-base cursor-pointer"},{default:a(()=>[t(m,{to:{name:"fe_contact_us"},textColor:"text-feAchromatic-50",textSize:"font-normal text-base"},{default:a(()=>[f(c(r.$t("footer__contact_us")),1)]),_:1})]),_:1}),t(s,{class:"font-normal text-base cursor-pointer"},{default:a(()=>[t(m,{to:{name:"fe_safety_tips"},textColor:"text-feAchromatic-50",textSize:"font-normal text-base"},{default:a(()=>[f(c(r.$t("footer__safety_tips")),1)]),_:1})]),_:1}),t(s,{class:"font-normal text-base cursor-pointer"},{default:a(()=>[t(m,{to:{name:"fe_privacy"},textColor:"text-feAchromatic-50",textSize:"font-normal text-base"},{default:a(()=>[f(c(r.$t("footer__privacy_policy")),1)]),_:1})]),_:1}),t(s,{class:"font-normal text-base cursor-pointer hyphens-none ..."},{default:a(()=>[t(m,{to:{name:"fe_terms_and_conditions"},textColor:"text-feAchromatic-50",textSize:"font-normal text-base"},{default:a(()=>[f(c(r.$t("term_and_condition__term_and_condition")),1)]),_:1})]),_:1}),t(s,{class:"font-normal text-base cursor-pointer"},{default:a(()=>[t(m,{to:{name:"fe_faq"},textColor:"text-feAchromatic-50",textSize:"font-normal text-base"},{default:a(()=>[f(c(r.$t("faq_page__faq_page")),1)]),_:1})]),_:1})])]),l("div",Et,[t(s,{textColor:"text-feAchromatic-50",class:"font-semibold text-xl sm:text-2xl"},{default:a(()=>[f(c(r.$t("footer__company")),1)]),_:1}),l("div",Ot,[t(s,{class:"font-normal text-base cursor-pointer"},{default:a(()=>[t(m,{to:{name:"fe_about_us"},textColor:"text-feAchromatic-50",textSize:"font-normal text-base"},{default:a(()=>[f(c(r.$t("footer__about_us")),1)]),_:1})]),_:1}),t(s,{class:"font-normal text-base cursor-pointer"},{default:a(()=>[t(m,{to:{name:"fe_blog"},textColor:"text-feAchromatic-50",textSize:"font-normal text-base"},{default:a(()=>[f(c(r.$t("footer__blogs")),1)]),_:1})]),_:1})])]),l("div",Qt,[l("div",Tt,[t(s,{textColor:"text-feAchromatic-50",class:"font-semibold text-xl sm:text-2xl"},{default:a(()=>[f(c(r.$t("footer__follow_us")),1)]),_:1}),l("div",Mt,[(n(!0),i(_,null,x((A=(k=e.customFieldStore.customField)==null?void 0:k.data)==null?void 0:A.coreList.filter(o=>o.fieldName==="facebook_url"&&o.isVisible==="1"&&e.appInfoStore.appInfo.data.frontendConfigSetting.facebook_url),(o,d)=>(n(),i("div",{class:"",key:d},[l("a",{class:"h-10",textColor:"text-feAchromatic-50",href:e.appInfoStore.appInfo.data.frontendConfigSetting.facebook_url,target:"_blank"},[t(p,{class:"cursor-pointer",textColor:"text-feAchromatic-50",name:"facebook",h:"20",w:"20",viewBox:"0 0 20 20"})],8,Gt)]))),128)),(n(!0),i(_,null,x((L=(F=e.customFieldStore.customField)==null?void 0:F.data)==null?void 0:L.coreList.filter(o=>o.fieldName==="linkedin_url"&&o.isVisible==="1"&&e.appInfoStore.appInfo.data.frontendConfigSetting.linkedin_url),(o,d)=>(n(),i("div",{class:"",key:d},[l("a",{class:"h-10",textColor:"text-feAchromatic-50",href:e.appInfoStore.appInfo.data.frontendConfigSetting.linkedin_url,target:"_blank"},[t(p,{class:"cursor-pointer",textColor:"text-feAchromatic-50",name:"linkedIn",h:"20",w:"20",viewBox:"0 0 20 20"})],8,Jt)]))),128)),(n(!0),i(_,null,x((P=(z=e.customFieldStore.customField)==null?void 0:z.data)==null?void 0:P.coreList.filter(o=>o.fieldName==="twitter_url"&&o.isVisible==="1"&&e.appInfoStore.appInfo.data.frontendConfigSetting.twitter_url),(o,d)=>(n(),i("div",{class:"",key:d},[l("a",{class:"h-10",textColor:"text-feAchromatic-50",href:e.appInfoStore.appInfo.data.frontendConfigSetting.twitter_url,target:"_blank"},[t(p,{class:"cursor-pointer",textColor:"text-feAchromatic-50",name:"twitter",h:"20",w:"20",viewBox:"0 0 20 20"})],8,Kt)]))),128)),(n(!0),i(_,null,x((V=(U=e.customFieldStore.customField)==null?void 0:U.data)==null?void 0:V.coreList.filter(o=>o.fieldName==="instagram_url"&&o.isVisible==="1"&&e.appInfoStore.appInfo.data.frontendConfigSetting.instagram_url),(o,d)=>(n(),i("div",{class:"",key:d},[l("a",{class:"h-10",textColor:"text-feAchromatic-50",href:e.appInfoStore.appInfo.data.frontendConfigSetting.instagram_url,target:"_blank"},[t(p,{class:"cursor-pointer",textColor:"text-feAchromatic-50",name:"instagram",h:"20",w:"20",viewBox:"0 0 20 20"})],8,Wt)]))),128)),(n(!0),i(_,null,x((B=(N=e.customFieldStore.customField)==null?void 0:N.data)==null?void 0:B.coreList.filter(o=>o.fieldName==="pinterest_url"&&o.isVisible==="1"&&e.appInfoStore.appInfo.data.frontendConfigSetting.pinterest_url),(o,d)=>(n(),i("div",{class:"",key:d},[l("a",{class:"h-10",textColor:"text-feAchromatic-50",href:e.appInfoStore.appInfo.data.frontendConfigSetting.pinterest_url,target:"_blank"},[t(p,{class:"cursor-pointer",textColor:"text-feAchromatic-50",name:"pinterest",h:"20",w:"20",viewBox:"0 0 20 20"})],8,Xt)]))),128)),(n(!0),i(_,null,x((q=(j=e.customFieldStore.customField)==null?void 0:j.data)==null?void 0:q.coreList.filter(o=>o.fieldName==="youtube_url"&&o.isVisible==="1"&&e.appInfoStore.appInfo.data.frontendConfigSetting.youtube_url),(o,d)=>(n(),i("div",{class:"",key:d},[l("a",{class:"h-10",textColor:"text-feAchromatic-50",href:e.appInfoStore.appInfo.data.frontendConfigSetting.youtube_url,target:"_blank"},[t(p,{class:"cursor-pointer",textColor:"text-feAchromatic-50",name:"youtube",h:"20",w:"20",viewBox:"0 0 20 20"})],8,Yt)]))),128))]),l("div",Zt,[((E=(D=(H=(R=e.appInfoStore)==null?void 0:R.appInfo)==null?void 0:H.data)==null?void 0:D.frontendConfigSetting)==null?void 0:E.googleSetting)=="1"?(n(),i("div",$t,[t(g,{class:"h-10",textColor:"text-feAchromatic-50",url:e.appInfoStore.appInfo.data.frontendConfigSetting.googlePlayUrl},{default:a(()=>[S(l("img",te,null,512),[[h,{src:r.$page.props.sysImageUrl+"/get_on_google_play_white.png",loading:r.$page.props.sysImageUrl+"/loading_gif.gif",error:r.$page.props.sysImageUrl+"/default_photo.png"}]])]),_:1},8,["url"])])):b("",!0),((M=(T=(Q=(O=e.appInfoStore)==null?void 0:O.appInfo)==null?void 0:Q.data)==null?void 0:T.frontendConfigSetting)==null?void 0:M.appStoreSetting)=="1"?(n(),i("div",ee,[t(g,{class:"h-10",textColor:"text-feAchromatic-50",url:e.appInfoStore.appInfo.data.frontendConfigSetting.appStoreUrl},{default:a(()=>[S(l("img",oe,null,512),[[h,{src:r.$page.props.sysImageUrl+"/get_on_apple_store_white.png",loading:r.$page.props.sysImageUrl+"/loading_gif.gif",error:r.$page.props.sysImageUrl+"/default_photo.png"}]])]),_:1},8,["url"])])):b("",!0)])])])])]),l("div",ae,[l("div",re,[t(s,{textColor:"text-feAchromatic-50",class:"font-semibold text-xl sm:text-2xl"},{default:a(()=>[f(c(r.$t("footer__follow_us")),1)]),_:1}),l("div",le,[(n(!0),i(_,null,x((J=(G=e.customFieldStore.customField)==null?void 0:G.data)==null?void 0:J.coreList.filter(o=>o.fieldName==="facebook_url"&&o.isVisible==="1"&&e.appInfoStore.appInfo.data.frontendConfigSetting.facebook_url),(o,d)=>(n(),i("div",{class:"",key:d},[l("a",{class:"h-10",textColor:"text-feAchromatic-50",href:e.appInfoStore.appInfo.data.frontendConfigSetting.facebook_url,target:"_blank"},[t(p,{class:"cursor-pointer",textColor:"text-feAchromatic-50",name:"facebook",h:"20",w:"20",viewBox:"0 0 20 20"})],8,se)]))),128)),(n(!0),i(_,null,x((W=(K=e.customFieldStore.customField)==null?void 0:K.data)==null?void 0:W.coreList.filter(o=>o.fieldName==="linkedin_url"&&o.isVisible==="1"&&e.appInfoStore.appInfo.data.frontendConfigSetting.linkedin_url),(o,d)=>(n(),i("div",{class:"",key:d},[l("a",{class:"h-10",textColor:"text-feAchromatic-50",href:e.appInfoStore.appInfo.data.frontendConfigSetting.linkedin_url,target:"_blank"},[t(p,{class:"cursor-pointer",textColor:"text-feAchromatic-50",name:"linkedIn",h:"20",w:"20",viewBox:"0 0 20 20"})],8,ne)]))),128)),(n(!0),i(_,null,x((Y=(X=e.customFieldStore.customField)==null?void 0:X.data)==null?void 0:Y.coreList.filter(o=>o.fieldName==="twitter_url"&&o.isVisible==="1"&&e.appInfoStore.appInfo.data.frontendConfigSetting.twitter_url),(o,d)=>(n(),i("div",{class:"",key:d},[l("a",{class:"h-10",textColor:"text-feAchromatic-50",href:e.appInfoStore.appInfo.data.frontendConfigSetting.twitter_url,target:"_blank"},[t(p,{class:"cursor-pointer",textColor:"text-feAchromatic-50",name:"twitter",h:"20",w:"20",viewBox:"0 0 20 20"})],8,ie)]))),128)),(n(!0),i(_,null,x(($=(Z=e.customFieldStore.customField)==null?void 0:Z.data)==null?void 0:$.coreList.filter(o=>o.fieldName==="instagram_url"&&o.isVisible==="1"&&e.appInfoStore.appInfo.data.frontendConfigSetting.instagram_url),(o,d)=>(n(),i("div",{class:"",key:d},[l("a",{class:"h-10",textColor:"text-feAchromatic-50",href:e.appInfoStore.appInfo.data.frontendConfigSetting.instagram_url,target:"_blank"},[t(p,{class:"cursor-pointer",textColor:"text-feAchromatic-50",name:"instagram",h:"20",w:"20",viewBox:"0 0 20 20"})],8,fe)]))),128)),(n(!0),i(_,null,x((et=(tt=e.customFieldStore.customField)==null?void 0:tt.data)==null?void 0:et.coreList.filter(o=>o.fieldName==="pinterest_url"&&o.isVisible==="1"&&e.appInfoStore.appInfo.data.frontendConfigSetting.pinterest_url),(o,d)=>(n(),i("div",{class:"",key:d},[l("a",{class:"h-10",textColor:"text-feAchromatic-50",href:e.appInfoStore.appInfo.data.frontendConfigSetting.pinterest_url,target:"_blank"},[t(p,{class:"cursor-pointer",textColor:"text-feAchromatic-50",name:"pinterest",h:"20",w:"20",viewBox:"0 0 20 20"})],8,ce)]))),128)),(n(!0),i(_,null,x((at=(ot=e.customFieldStore.customField)==null?void 0:ot.data)==null?void 0:at.coreList.filter(o=>o.fieldName==="youtube_url"&&o.isVisible==="1"&&e.appInfoStore.appInfo.data.frontendConfigSetting.youtube_url),(o,d)=>(n(),i("div",{class:"",key:d},[l("a",{class:"h-10",textColor:"text-feAchromatic-50",href:e.appInfoStore.appInfo.data.frontendConfigSetting.youtube_url,target:"_blank"},[t(p,{class:"cursor-pointer",textColor:"text-feAchromatic-50",name:"youtube",h:"20",w:"20",viewBox:"0 0 20 20"})],8,de)]))),128))])]),l("div",me,[((nt=(st=(lt=(rt=e.appInfoStore)==null?void 0:rt.appInfo)==null?void 0:lt.data)==null?void 0:st.frontendConfigSetting)==null?void 0:nt.googleSetting)=="1"?(n(),i("div",pe,[t(g,{class:"h-10",textColor:"text-feAchromatic-50",url:e.appInfoStore.appInfo.data.frontendConfigSetting.googlePlayUrl},{default:a(()=>[S(l("img",_e,null,512),[[h,{src:r.$page.props.sysImageUrl+"/get_on_google_play_white.png",loading:r.$page.props.sysImageUrl+"/loading_gif.gif",error:r.$page.props.sysImageUrl+"/default_photo.png"}]])]),_:1},8,["url"])])):b("",!0),((dt=(ct=(ft=(it=e.appInfoStore)==null?void 0:it.appInfo)==null?void 0:ft.data)==null?void 0:ct.frontendConfigSetting)==null?void 0:dt.appStoreSetting)=="1"?(n(),i("div",xe,[t(g,{class:"h-10",textColor:"text-feAchromatic-50",url:e.appInfoStore.appInfo.data.frontendConfigSetting.appStoreUrl},{default:a(()=>[S(l("img",ge,null,512),[[h,{src:r.$page.props.sysImageUrl+"/get_on_apple_store_white.png",loading:r.$page.props.sysImageUrl+"/loading_gif.gif",error:r.$page.props.sysImageUrl+"/default_photo.png"}]])]),_:1},8,["url"])])):b("",!0)])])]),l("div",ue,[t(s,{textColor:"text-feAchromatic-50",class:"font-medium text-sm"},{default:a(()=>{var o,d,mt,pt;return[f(c((pt=(mt=(d=(o=e.appInfoStore)==null?void 0:o.appInfo)==null?void 0:d.data)==null?void 0:mt.frontendConfigSetting)==null?void 0:pt.copyRight),1)]}),_:1})])])}var je=kt(At,[["render",he]]);export{je as default};
