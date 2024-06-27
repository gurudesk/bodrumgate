import{J}from"./ActionMessage.bac6152f.js";import{J as $}from"./ActionSection.5efe2241.js";import{J as B}from"./Button.9470cce6.js";import{J as S}from"./ConfirmationModal.56eac901.js";import{J as L}from"./DangerButton.40f9a195.js";import{J as A}from"./DialogModal.271057c9.js";import{J as P}from"./FormSection.516353d5.js";import{J as z}from"./Input.6e2e8bc7.js";import{J as V}from"./InputError.eadd8787.js";import{J as I}from"./Label.ea264e7b.js";import{J as N}from"./SecondaryButton.00f0c5a5.js";import{J as D}from"./SectionBorder.bfadae94.js";import{_ as E}from"./plugin-vue_export-helper.21dcd24c.js";import{d as O,c as a,b as n,w as t,g as d,r as l,o as r,a as s,F as b,s as v,n as u,t as p,q as i}from"./app.0e502cc5.js";import"./SectionTitle.cd6b8165.js";import"./Modal.e649211e.js";const q=O({components:{JetActionMessage:J,JetActionSection:$,JetButton:B,JetConfirmationModal:S,JetDangerButton:L,JetDialogModal:A,JetFormSection:P,JetInput:z,JetInputError:V,JetLabel:I,JetSecondaryButton:N,JetSectionBorder:D},props:["team","availableRoles","userPermissions"],data(){return{addTeamMemberForm:this.$inertia.form({email:"",role:null}),updateRoleForm:this.$inertia.form({role:null}),leaveTeamForm:this.$inertia.form(),removeTeamMemberForm:this.$inertia.form(),currentlyManagingRole:!1,managingRoleFor:null,confirmingLeavingTeam:!1,teamMemberBeingRemoved:null}},methods:{addTeamMember(){this.addTeamMemberForm.post(route("team-members.store",this.team),{errorBag:"addTeamMember",preserveScroll:!0,onSuccess:()=>this.addTeamMemberForm.reset()})},cancelTeamInvitation(e){this.$inertia.delete(route("team-invitations.destroy",e),{preserveScroll:!0})},manageRole(e){this.managingRoleFor=e,this.updateRoleForm.role=e.membership.role,this.currentlyManagingRole=!0},updateRole(){this.updateRoleForm.put(route("team-members.update",[this.team,this.managingRoleFor]),{preserveScroll:!0,onSuccess:()=>this.currentlyManagingRole=!1})},confirmLeavingTeam(){this.confirmingLeavingTeam=!0},leaveTeam(){this.leaveTeamForm.delete(route("team-members.destroy",[this.team,this.$page.props.user]))},confirmTeamMemberRemoval(e){this.teamMemberBeingRemoved=e},removeTeamMember(){this.removeTeamMemberForm.delete(route("team-members.destroy",[this.team,this.teamMemberBeingRemoved]),{errorBag:"removeTeamMember",preserveScroll:!0,preserveState:!0,onSuccess:()=>this.teamMemberBeingRemoved=null})},displayableRole(e){return this.availableRoles.find(m=>m.key===e).name}}}),U={key:0},G=i(" Add Team Member "),H=i(" Add a new team member to your team, allowing them to collaborate with you. "),K=s("div",{class:"col-span-6"},[s("div",{class:"max-w-xl text-sm text-gray-600"}," Please provide the email address of the person you would like to add to this team. ")],-1),Q={class:"col-span-6 sm:col-span-4"},W={key:0,class:"col-span-6 lg:col-span-4"},X={class:"relative z-0 mt-1 border border-gray-200 rounded-lg cursor-pointer"},Y=["onClick"],Z={class:"flex items-center"},x={key:0,class:"ms-2 h-5 w-5 text-green-400",fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",stroke:"currentColor",viewBox:"0 0 24 24"},ee=s("path",{d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),oe=[ee],te={class:"mt-2 text-xs text-gray-600 text-left"},se=i(" Added. "),ne=i(" Add "),ae={key:1},re=i(" Pending Team Invitations "),ie=i(" These people have been invited to your team and have been sent an invitation email. They may join the team by accepting the email invitation. "),me={class:"space-y-6"},le={class:"text-gray-600"},de={class:"flex items-center"},ce=["onClick"],ue={key:2},pe=i(" Team Members "),be=i(" All of the people that are part of this team. "),ve={class:"space-y-6"},ge={class:"flex items-center"},he=["src","alt"],_e={class:"ms-4"},fe={class:"flex items-center"},ye=["onClick"],ke={key:1,class:"ms-2 text-sm text-gray-400"},Te=["onClick"],Me=i(" Manage Role "),Re={key:0},Fe={class:"relative z-0 mt-1 border border-gray-200 rounded-lg cursor-pointer"},Ce=["onClick"],je={class:"flex items-center"},we={key:0,class:"ms-2 h-5 w-5 text-green-400",fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",stroke:"currentColor",viewBox:"0 0 24 24"},Je=s("path",{d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),$e=[Je],Be={class:"mt-2 text-xs text-gray-600"},Se=i(" Cancel "),Le=i(" Save "),Ae=i(" Leave Team "),Pe=i(" Are you sure you would like to leave this team? "),ze=i(" Cancel "),Ve=i(" Leave "),Ie=i(" Remove Team Member "),Ne=i(" Are you sure you would like to remove this person from the team? "),De=i(" Cancel "),Ee=i(" Remove ");function Oe(e,m,qe,Ue,Ge,He){const g=l("jet-section-border"),_=l("jet-label"),R=l("jet-input"),f=l("jet-input-error"),F=l("jet-action-message"),y=l("jet-button"),C=l("jet-form-section"),k=l("jet-action-section"),h=l("jet-secondary-button"),j=l("jet-dialog-modal"),T=l("jet-danger-button"),M=l("jet-confirmation-modal");return r(),a("div",null,[e.userPermissions.canAddTeamMembers?(r(),a("div",U,[n(g),n(C,{onSubmitted:e.addTeamMember},{title:t(()=>[G]),description:t(()=>[H]),form:t(()=>[K,s("div",Q,[n(_,{for:"email",value:"Email"}),n(R,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:e.addTeamMemberForm.email,"onUpdate:modelValue":m[0]||(m[0]=o=>e.addTeamMemberForm.email=o)},null,8,["modelValue"]),n(f,{message:e.addTeamMemberForm.errors.email,class:"mt-2"},null,8,["message"])]),e.availableRoles.length>0?(r(),a("div",W,[n(_,{for:"roles",value:"Role"}),n(f,{message:e.addTeamMemberForm.errors.role,class:"mt-2"},null,8,["message"]),s("div",X,[(r(!0),a(b,null,v(e.availableRoles,(o,c)=>(r(),a("button",{type:"button",class:u(["relative px-4 py-3 inline-flex w-full rounded-lg focus:z-10 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200",{"border-t border-gray-200 rounded-t-none":c>0,"rounded-b-none":c!=Object.keys(e.availableRoles).length-1}]),onClick:w=>e.addTeamMemberForm.role=o.key,key:o.key},[s("div",{class:u({"opacity-50":e.addTeamMemberForm.role&&e.addTeamMemberForm.role!=o.key})},[s("div",Z,[s("div",{class:u(["text-sm text-gray-600",{"font-semibold":e.addTeamMemberForm.role==o.key}])},p(o.name),3),e.addTeamMemberForm.role==o.key?(r(),a("svg",x,oe)):d("",!0)]),s("div",te,p(o.description),1)],2)],10,Y))),128))])])):d("",!0)]),actions:t(()=>[n(F,{on:e.addTeamMemberForm.recentlySuccessful,class:"me-3"},{default:t(()=>[se]),_:1},8,["on"]),n(y,{class:u({"opacity-25":e.addTeamMemberForm.processing}),disabled:e.addTeamMemberForm.processing},{default:t(()=>[ne]),_:1},8,["class","disabled"])]),_:1},8,["onSubmitted"])])):d("",!0),e.team.team_invitations.length>0&&e.userPermissions.canAddTeamMembers?(r(),a("div",ae,[n(g),n(k,{class:"mt-10 sm:mt-0"},{title:t(()=>[re]),description:t(()=>[ie]),content:t(()=>[s("div",me,[(r(!0),a(b,null,v(e.team.team_invitations,o=>(r(),a("div",{class:"flex items-center justify-between",key:o.id},[s("div",le,p(o.email),1),s("div",de,[e.userPermissions.canRemoveTeamMembers?(r(),a("button",{key:0,class:"cursor-pointer ms-6 text-sm text-red-500 focus:outline-none",onClick:c=>e.cancelTeamInvitation(o)}," Cancel ",8,ce)):d("",!0)])]))),128))])]),_:1})])):d("",!0),e.team.users.length>0?(r(),a("div",ue,[n(g),n(k,{class:"mt-10 sm:mt-0"},{title:t(()=>[pe]),description:t(()=>[be]),content:t(()=>[s("div",ve,[(r(!0),a(b,null,v(e.team.users,o=>(r(),a("div",{class:"flex items-center justify-between",key:o.id},[s("div",ge,[s("img",{class:"w-8 h-8 rounded-full",src:o.profile_photo_url,alt:o.name},null,8,he),s("div",_e,p(o.name),1)]),s("div",fe,[e.userPermissions.canAddTeamMembers&&e.availableRoles.length?(r(),a("button",{key:0,class:"ms-2 text-sm text-gray-400 underline",onClick:c=>e.manageRole(o)},p(e.displayableRole(o.membership.role)),9,ye)):e.availableRoles.length?(r(),a("div",ke,p(e.displayableRole(o.membership.role)),1)):d("",!0),e.$page.props.user.id===o.id?(r(),a("button",{key:2,class:"cursor-pointer ms-6 text-sm text-red-500",onClick:m[1]||(m[1]=(...c)=>e.confirmLeavingTeam&&e.confirmLeavingTeam(...c))}," Leave ")):d("",!0),e.userPermissions.canRemoveTeamMembers?(r(),a("button",{key:3,class:"cursor-pointer ms-6 text-sm text-red-500",onClick:c=>e.confirmTeamMemberRemoval(o)}," Remove ",8,Te)):d("",!0)])]))),128))])]),_:1})])):d("",!0),n(j,{show:e.currentlyManagingRole,onClose:m[3]||(m[3]=o=>e.currentlyManagingRole=!1)},{title:t(()=>[Me]),content:t(()=>[e.managingRoleFor?(r(),a("div",Re,[s("div",Fe,[(r(!0),a(b,null,v(e.availableRoles,(o,c)=>(r(),a("button",{type:"button",class:u(["relative px-4 py-3 inline-flex w-full rounded-lg focus:z-10 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200",{"border-t border-gray-200 rounded-t-none":c>0,"rounded-b-none":c!==Object.keys(e.availableRoles).length-1}]),onClick:w=>e.updateRoleForm.role=o.key,key:o.key},[s("div",{class:u({"opacity-50":e.updateRoleForm.role&&e.updateRoleForm.role!==o.key})},[s("div",je,[s("div",{class:u(["text-sm text-gray-600",{"font-semibold":e.updateRoleForm.role===o.key}])},p(o.name),3),e.updateRoleForm.role===o.key?(r(),a("svg",we,$e)):d("",!0)]),s("div",Be,p(o.description),1)],2)],10,Ce))),128))])])):d("",!0)]),footer:t(()=>[n(h,{onClick:m[2]||(m[2]=o=>e.currentlyManagingRole=!1)},{default:t(()=>[Se]),_:1}),n(y,{class:u(["ms-3",{"opacity-25":e.updateRoleForm.processing}]),onClick:e.updateRole,disabled:e.updateRoleForm.processing},{default:t(()=>[Le]),_:1},8,["onClick","class","disabled"])]),_:1},8,["show"]),n(M,{show:e.confirmingLeavingTeam,onClose:m[5]||(m[5]=o=>e.confirmingLeavingTeam=!1)},{title:t(()=>[Ae]),content:t(()=>[Pe]),footer:t(()=>[n(h,{onClick:m[4]||(m[4]=o=>e.confirmingLeavingTeam=!1)},{default:t(()=>[ze]),_:1}),n(T,{class:u(["ms-3",{"opacity-25":e.leaveTeamForm.processing}]),onClick:e.leaveTeam,disabled:e.leaveTeamForm.processing},{default:t(()=>[Ve]),_:1},8,["onClick","class","disabled"])]),_:1},8,["show"]),n(M,{show:e.teamMemberBeingRemoved,onClose:m[7]||(m[7]=o=>e.teamMemberBeingRemoved=null)},{title:t(()=>[Ie]),content:t(()=>[Ne]),footer:t(()=>[n(h,{onClick:m[6]||(m[6]=o=>e.teamMemberBeingRemoved=null)},{default:t(()=>[De]),_:1}),n(T,{class:u(["ms-3",{"opacity-25":e.removeTeamMemberForm.processing}]),onClick:e.removeTeamMember,disabled:e.removeTeamMemberForm.processing},{default:t(()=>[Ee]),_:1},8,["onClick","class","disabled"])]),_:1},8,["show"])])}var lo=E(q,[["render",Oe]]);export{lo as default};
