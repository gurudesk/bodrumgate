import{J as f}from"./ActionSection.5efe2241.js";import{J as _}from"./ConfirmationModal.56eac901.js";import{J as p}from"./DangerButton.40f9a195.js";import{J as u}from"./SecondaryButton.00f0c5a5.js";import{_ as h}from"./plugin-vue_export-helper.21dcd24c.js";import{d as g,f as T,w as e,r as a,o as y,a as r,b as s,n as D,q as o}from"./app.0e502cc5.js";import"./SectionTitle.cd6b8165.js";import"./Modal.e649211e.js";const C=g({props:["team"],components:{JetActionSection:f,JetConfirmationModal:_,JetDangerButton:p,JetSecondaryButton:u},data(){return{confirmingTeamDeletion:!1,deleting:!1,form:this.$inertia.form()}},methods:{confirmTeamDeletion(){this.confirmingTeamDeletion=!0},deleteTeam(){this.form.delete(route("teams.destroy",this.team),{errorBag:"deleteTeam"})}}}),w=o(" Delete Team "),b=o(" Permanently delete this team. "),j=r("div",{class:"max-w-xl text-sm text-gray-600"}," Once a team is deleted, all of its resources and data will be permanently deleted. Before deleting this team, please download any data or information regarding this team that you wish to retain. ",-1),J={class:"mt-5"},k=o(" Delete Team "),B=o(" Delete Team "),$=o(" Are you sure you want to delete this team? Once a team is deleted, all of its resources and data will be permanently deleted. "),v=o(" Cancel "),N=o(" Delete Team ");function V(t,n,x,A,O,S){const i=a("jet-danger-button"),m=a("jet-secondary-button"),l=a("jet-confirmation-modal"),d=a("jet-action-section");return y(),T(d,null,{title:e(()=>[w]),description:e(()=>[b]),content:e(()=>[j,r("div",J,[s(i,{onClick:t.confirmTeamDeletion},{default:e(()=>[k]),_:1},8,["onClick"])]),s(l,{show:t.confirmingTeamDeletion,onClose:n[1]||(n[1]=c=>t.confirmingTeamDeletion=!1)},{title:e(()=>[B]),content:e(()=>[$]),footer:e(()=>[s(m,{onClick:n[0]||(n[0]=c=>t.confirmingTeamDeletion=!1)},{default:e(()=>[v]),_:1}),s(i,{class:D(["ms-3",{"opacity-25":t.form.processing}]),onClick:t.deleteTeam,disabled:t.form.processing},{default:e(()=>[N]),_:1},8,["onClick","class","disabled"])]),_:1},8,["show"])]),_:1})}var I=h(C,[["render",V]]);export{I as default};
