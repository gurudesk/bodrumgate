import{J}from"./ActionSection.5efe2241.js";import{J as y}from"./Button.9470cce6.js";import{d as b,o as t,c as r,a as n,l as P,b as s,w as e,q as i,t as u,Y as T,n as g,r as a,f as _,g as m,F as S,s as R}from"./app.0e502cc5.js";import{J as A}from"./DialogModal.271057c9.js";import{J as B}from"./Input.6e2e8bc7.js";import{J as E}from"./InputError.eadd8787.js";import{J as C}from"./SecondaryButton.00f0c5a5.js";import{_ as v}from"./plugin-vue_export-helper.21dcd24c.js";import{J as M}from"./DangerButton.40f9a195.js";import"./SectionTitle.cd6b8165.js";import"./Modal.e649211e.js";const V=b({emits:["confirmed"],props:{title:{default:"Confirm Password"},content:{default:"For your security, please confirm your password to continue."},button:{default:"Confirm"}},components:{JetButton:y,JetDialogModal:A,JetInput:B,JetInputError:E,JetSecondaryButton:C},data(){return{confirmingPassword:!1,form:{password:"",error:""}}},methods:{startConfirmingPassword(){axios.get(route("password.confirmation")).then(o=>{o.data.confirmed?this.$emit("confirmed"):(this.confirmingPassword=!0,setTimeout(()=>this.$refs.password.focus(),250))})},confirmPassword(){this.form.processing=!0,axios.post(route("password.confirm"),{password:this.form.password}).then(()=>{this.form.processing=!1,this.closeModal(),this.$nextTick(()=>this.$emit("confirmed"))}).catch(o=>{this.form.processing=!1,this.form.error=o.response.data.errors.password[0],this.$refs.password.focus()})},closeModal(){this.confirmingPassword=!1,this.form.password="",this.form.error=""}}}),q={class:"mt-4"};function D(o,l,k,$,j,F){const p=a("jet-input"),d=a("jet-input-error"),f=a("jet-secondary-button"),h=a("jet-button"),w=a("jet-dialog-modal");return t(),r("span",null,[n("span",{onClick:l[0]||(l[0]=(...c)=>o.startConfirmingPassword&&o.startConfirmingPassword(...c))},[P(o.$slots,"default")]),s(w,{show:o.confirmingPassword,onClose:o.closeModal},{title:e(()=>[i(u(o.title),1)]),content:e(()=>[i(u(o.content)+" ",1),n("div",q,[s(p,{type:"password",class:"mt-1 block w-3/4",placeholder:"Password",ref:"password",modelValue:o.form.password,"onUpdate:modelValue":l[1]||(l[1]=c=>o.form.password=c),onKeyup:T(o.confirmPassword,["enter"])},null,8,["modelValue","onKeyup"]),s(d,{message:o.form.error,class:"mt-2"},null,8,["message"])])]),footer:e(()=>[s(f,{onClick:o.closeModal},{default:e(()=>[i(u(o.$t("core__be_btn_cancel")),1)]),_:1},8,["onClick"]),s(h,{class:g(["ms-3",{"opacity-25":o.form.processing}]),onClick:o.confirmPassword,disabled:o.form.processing},{default:e(()=>[i(u(o.button),1)]),_:1},8,["onClick","class","disabled"])]),_:1},8,["show","onClose"])])}var N=v(V,[["render",D]]);const Y=b({components:{JetActionSection:J,JetButton:y,JetConfirmsPassword:N,JetDangerButton:M,JetSecondaryButton:C},data(){return{enabling:!1,disabling:!1,qrCode:null,recoveryCodes:[]}},methods:{enableTwoFactorAuthentication(){this.enabling=!0,this.$inertia.post("/user/two-factor-authentication",{},{preserveScroll:!0,onSuccess:()=>Promise.all([this.showQrCode(),this.showRecoveryCodes()]),onFinish:()=>this.enabling=!1})},showQrCode(){return axios.get("/user/two-factor-qr-code").then(o=>{this.qrCode=o.data.svg})},showRecoveryCodes(){return axios.get("/user/two-factor-recovery-codes").then(o=>{this.recoveryCodes=o.data})},regenerateRecoveryCodes(){axios.post("/user/two-factor-recovery-codes").then(o=>{this.showRecoveryCodes()})},disableTwoFactorAuthentication(){this.disabling=!0,this.$inertia.delete("/user/two-factor-authentication",{preserveScroll:!0,onSuccess:()=>this.disabling=!1})}},computed:{twoFactorEnabled(){return!this.enabling&&this.$page.props.user.two_factor_enabled}}}),K=i(" Two Factor Authentication "),L=i(" Add additional security to your account using two factor authentication. "),Q={key:0,class:"text-lg font-medium text-gray-900"},H={key:1,class:"text-lg font-medium text-gray-900"},I=n("div",{class:"mt-3 max-w-xl text-sm text-gray-600"},[n("p",null," When two factor authentication is enabled, you will be prompted for a secure, random token during authentication. You may retrieve this token from your phone's Google Authenticator application. ")],-1),z={key:2},G={key:0},U=n("div",{class:"mt-4 max-w-xl text-sm text-gray-600"},[n("p",{class:"font-semibold"}," Two factor authentication is now enabled. Scan the following QR code using your phone's authenticator application. ")],-1),W=["innerHTML"],O={key:1},X=n("div",{class:"mt-4 max-w-xl text-sm text-gray-600"},[n("p",{class:"font-semibold"}," Store these recovery codes in a secure password manager. They can be used to recover access to your account if your two factor authentication device is lost. ")],-1),Z={class:"grid gap-1 max-w-xl mt-4 px-4 py-4 font-mono text-sm bg-gray-100 rounded-lg"},x={class:"mt-5"},oo={key:0},eo=i(" Enable "),to={key:1},so=i(" Regenerate Recovery Codes "),no=i(" Show Recovery Codes "),ro=i(" Disable ");function ao(o,l,k,$,j,F){const p=a("jet-button"),d=a("jet-confirms-password"),f=a("jet-secondary-button"),h=a("jet-danger-button"),w=a("jet-action-section");return t(),_(w,null,{title:e(()=>[K]),description:e(()=>[L]),content:e(()=>[o.twoFactorEnabled?(t(),r("h3",Q," You have enabled two factor authentication. ")):(t(),r("h3",H," You have not enabled two factor authentication. ")),I,o.twoFactorEnabled?(t(),r("div",z,[o.qrCode?(t(),r("div",G,[U,n("div",{class:"mt-4",innerHTML:o.qrCode},null,8,W)])):m("",!0),o.recoveryCodes.length>0?(t(),r("div",O,[X,n("div",Z,[(t(!0),r(S,null,R(o.recoveryCodes,c=>(t(),r("div",{key:c},u(c),1))),128))])])):m("",!0)])):m("",!0),n("div",x,[o.twoFactorEnabled?(t(),r("div",to,[s(d,{onConfirmed:o.regenerateRecoveryCodes},{default:e(()=>[o.recoveryCodes.length>0?(t(),_(f,{key:0,class:"me-3"},{default:e(()=>[so]),_:1})):m("",!0)]),_:1},8,["onConfirmed"]),s(d,{onConfirmed:o.showRecoveryCodes},{default:e(()=>[o.recoveryCodes.length===0?(t(),_(f,{key:0,class:"me-3"},{default:e(()=>[no]),_:1})):m("",!0)]),_:1},8,["onConfirmed"]),s(d,{onConfirmed:o.disableTwoFactorAuthentication},{default:e(()=>[s(h,{class:g({"opacity-25":o.disabling}),disabled:o.disabling},{default:e(()=>[ro]),_:1},8,["class","disabled"])]),_:1},8,["onConfirmed"])])):(t(),r("div",oo,[s(d,{onConfirmed:o.enableTwoFactorAuthentication},{default:e(()=>[s(p,{type:"button",class:g({"opacity-25":o.enabling}),disabled:o.enabling},{default:e(()=>[eo]),_:1},8,["class","disabled"])]),_:1},8,["onConfirmed"])]))])]),_:1})}var yo=v(Y,[["render",ao]]);export{yo as default};
