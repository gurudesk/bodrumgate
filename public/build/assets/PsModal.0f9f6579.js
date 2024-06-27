import{M as f}from"./vue-neat-modal.d03c5dee.js";import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";import{o as c,c as g,n,G as _,i as p,f as k,w as v,a as r,l as s,D as b,r as h}from"./app.0e502cc5.js";const y={name:"PsLine",props:{theme:{type:String,default:"bg-secondary-700 dark:bg-white"}}};function M(a,o,e,t,l,d){return c(),g("div",{class:n(["h-0.5",e.theme])},null,2)}var x=i(y,[["render",M]]);const S={name:"PsModal",components:{Modal:f,PsLine:x},props:{maxWidth:{type:String,default:"500px"},bodyHeight:{type:String,default:"max-h-80"},isBackdropRemoved:{type:Boolean,default:!1},isMotionDisabled:{type:Boolean,default:!1},isClickOut:{type:Boolean,default:!0},modalTransition:{type:String,default:"scale"},isFullscreen:{type:Boolean,default:!1},theme:{type:String,default:" p-6 border lg:rounded-2xl rounded-xl  "},line:{type:String,default:"mt-4 "}},setup(){const a=b();a.dispatch("loadIsDarkMode");const o=_(()=>a.getters.isDarkMode),e=p();function t(d){e.value=d}function l(){return localStorage.activeLanguage!=null&&localStorage.activeLanguage!=null&&localStorage.activeLanguage=="ar"?"rtl":"ltr"}return{isOpen:e,toggle:t,store:a,isDarkMode:o,getDir:l}}},B=["dir"];function D(a,o,e,t,l,d){const u=h("Modal");return c(),k(u,{modelValue:t.isOpen,"onUpdate:modelValue":o[0]||(o[0]=m=>t.isOpen=m),fullscreen:e.isFullscreen,"modal-transition":e.modalTransition,"click-out":e.isClickOut,"disable-motion":e.isMotionDisabled,teleportTarget:"#mainbody","max-width":e.isFullscreen?void 0:e.maxWidth,"remove-backdrop":e.isBackdropRemoved},{default:v(()=>[r("div",{class:n(t.isDarkMode?"dark":""),dir:t.getDir()},[r("div",{class:n([e.theme,"max-h-auto bg-background dark:bg-backgroundDark"])},[s(a.$slots,"title",{},void 0,!0),r("div",{class:n(["mb-4",e.bodyHeight])},[s(a.$slots,"body",{},void 0,!0)],2),s(a.$slots,"footer",{},void 0,!0)],2)],10,B)]),_:3},8,["modelValue","fullscreen","modal-transition","click-out","disable-motion","max-width","remove-backdrop"])}var L=i(S,[["render",D],["__scopeId","data-v-0f89cda0"]]);export{L as P,x as a};
