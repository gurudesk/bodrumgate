import{o as d,c as n,F as m,s as u,m as f,u as _,a as c,t as p}from"./app.0e502cc5.js";import{_ as g}from"./plugin-vue_export-helper.21dcd24c.js";const v={name:"CheckBox",props:["customizeDetails","customizeHeader","oldData","index"],data(){return{arr:[],error:""}},mounted(){if(this.oldData){let s=this.oldData.split(",");this.arr=s}},methods:{handleChange(s,r){this.$emit("toParent",{data:s,id:r})},handleError(){}}},x={class:"grid grid-cols-1 sm:grid-cols-2"},k=["id","value"],y=["for"];function C(s,r,o,B,t,h){var i;return d(),n("div",x,[(d(!0),n(m,null,u((i=o.customizeDetails)==null?void 0:i.filter(e=>{var a;return(e==null?void 0:e.coreKeysId)===((a=o.customizeHeader)==null?void 0:a.coreKeysId)}),e=>(d(),n("div",{class:"col-span-1",key:e.id},[f(c("input",{"onUpdate:modelValue":r[0]||(r[0]=a=>t.arr=a),onChange:r[1]||(r[1]=a=>{var l;return h.handleChange(t.arr,(l=o.customizeHeader)==null?void 0:l.coreKeysId)}),class:"me-2",type:"checkbox",id:e.id,value:e.id},null,40,k),[[_,t.arr]]),c("label",{for:e.id},p(e.name),9,y)]))),128))])}var I=g(v,[["render",C]]);export{I as default};