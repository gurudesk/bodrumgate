import{P as c}from"./PsLabel.6d5b1b0c.js";import{o as s,c as d,s as m,m as h,u,a as p,b as f,w as _,q as b,t as x,F as v,r as y}from"./app.0e502cc5.js";import{_ as C}from"./plugin-vue_export-helper.21dcd24c.js";const k={name:"CheckBox",component:{PsLabel:c},props:["permissions","customizeHeader","module_id","oldData"],data(){return{arr:[],error:""}},mounted(){if(Array.isArray(this.oldData)&&this.oldData.map(e=>{if(e!==void 0){let t=e.permission_id.split(",");this.arr=t}}),this.oldData){let e=this.oldData.split(",");this.arr=e}},methods:{handleChange(e){this.$emit("toParent",{data:e})},handleError(){}}},D=["id","value"];function g(e,t,l,B,r,n){const i=y("ps-label");return s(!0),d(v,null,m(l.permissions,a=>(s(),d("div",{class:"me-2",key:a.id},[h(p("input",{"onUpdate:modelValue":t[0]||(t[0]=o=>r.arr=o),onChange:t[1]||(t[1]=o=>n.handleChange(r.arr)),class:"me-2 border-1 border-secondary-200 rounded",type:"checkbox",id:a.id,value:a.id},null,40,D),[[u,r.arr]]),f(i,{class:"text-base font-light",for:a.id},{default:_(()=>[b(x(a.title?a.title:a.name),1)]),_:2},1032,["for"])]))),128)}var P=C(k,[["render",g]]);export{P as default};
