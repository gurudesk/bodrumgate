import{u as S}from"./CategoryStore.8359ddd4.js";import x from"./PsIcon.dc31c2db.js";import k from"./PsLabel.3cf95094.js";import L from"./PsLoadingDialog.e4058754.js";import{P}from"./PsValueStore.a232cbb1.js";import{i as u,j as I,o as n,c,a as d,b as m,w as _,q as f,t as h,F as y,s as N,m as V,g as $,O as D,r as b,E as U}from"./app.0e502cc5.js";import{_ as B}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsApiService.98e573c3.js";import"./Category.7c65464b.js";import"./DefaultIcon.e76b39a5.js";import"./PsObject.a17ef38f.js";import"./DefaultPhoto.cc755f93.js";import"./PsStore.f4ecabdb.js";import"./PsSepetetedStore.9a31ac47.js";import"./PsModal.20834757.js";import"./vue-neat-modal.d03c5dee.js";import"./PsLine.4597488d.js";import"./PsLabelTitle.41617619.js";const M={name:"ChooseCategory",components:{PsLabel:k,PsIcon:x,PsLoadingDialog:L},props:["mobileSetting"],setup(a){var s,e;const r=S("cat");r.limit=(e=(s=a.mobileSetting)==null?void 0:s.default_loading_limit)!=null?e:12;const l=u(),t=u(!1),v=P().getLoginUserId(),o=u(!0);setTimeout(async()=>{await p()},1e3);async function p(){t.value=!0,await r.resetCategoryList(v,r.paramHolder),l.value.closeModal(),t.value=!1,o.value=!1}function g(i,C){D.get(route("fe_item_entry",{categoryId:i,categoryName:C}))}return I(()=>{var i;o.value==!0&&((i=r.itemList)==null?void 0:i.data)==null&&l.value.openModal()}),{categoryStore:r,ps_loading_dialog:l,loading:t,clickCategory:g,initial:o}}},j={class:"text-center sm:mt-32 lg:mt-36 mt-28 w-mobile sm:w-median lg:w-large mx-auto mb-10"},z={key:0,class:"mt-8 grid md:grid-cols-2 sm:grid-cols-1 gap-4"},E=["onClick"],F={class:"w-16 h-16 rounded-full shadow-md border-2 border-white overflow-hidden"},O={class:"transform transition duration-500 hover:scale-110 w-full h-full object-cover",alt:""};function T(a,r,l,t,w,v){var s;const o=b("ps-label"),p=b("ps-loading-dialog"),g=U("lazy");return n(),c(y,null,[d("div",j,[m(o,{class:"font-semibold text-4xl"},{default:_(()=>[f(h(a.$t("category__choose")),1)]),_:1}),m(o,{class:"text-xl text-gray-600 mt-5"},{default:_(()=>[f(h(a.$t("category__choose_description")),1)]),_:1}),((s=t.categoryStore.itemList)==null?void 0:s.data)!=null?(n(),c("div",z,[(n(!0),c(y,null,N(t.categoryStore.itemList.data,e=>(n(),c("div",{key:e.catId,class:"p-3"},[d("div",{class:"w-full h-62 bg-feSecondary-50 dark:bg-feAchromatic-900 p-6 relative flex items-center rounded-lg border-2 border-transparent hover:border-fePrimary-500 cursor-pointer",onClick:i=>t.clickCategory(e.catId,e.catName)},[d("div",F,[V(d("img",O,null,512),[[g,{src:a.$page.props.thumb2xUrl+"/"+e.defaultPhoto.imgPath,error:a.$page.props.sysImageUrl+"/default_photo.png"}]])]),m(o,{class:"text-lg ml-6 font-bold"},{default:_(()=>[f(h(e.catName),1)]),_:2},1024)],8,E)]))),128))])):$("",!0)]),m(p,{ref:"ps_loading_dialog"},null,512)],64)}var ie=B(M,[["render",T]]);export{ie as default};
