"use strict";(self["webpackChunkshop_store"]=self["webpackChunkshop_store"]||[]).push([[214],{3214:function(s,e,o){o.r(e),o.d(e,{default:function(){return f}});var n=o(3396),t=o(9242);const r={class:"container mt-5"},a={class:"col-md-6"},i=(0,n._)("h1",{class:"h3 mb-3 font-weight-normal"},"請先登入",-1),l={class:"mb-2"},u=(0,n._)("label",{for:"inputEmail",class:"sr-only"},"Email address",-1),c={class:"mb-2"},d=(0,n._)("label",{for:"inputPassword",class:"sr-only"},"Password",-1),p=(0,n._)("div",{class:"text-end mt-4"},[(0,n._)("button",{class:"btn btn-lg btn-primary btn-block",type:"submit"},"登入")],-1);function m(s,e,o,m,h,b){return(0,n.wg)(),(0,n.iD)("div",r,[(0,n._)("form",{class:"row justify-content-center",onSubmit:e[2]||(e[2]=(0,t.iM)(((...s)=>b.signIn&&b.signIn(...s)),["prevent"]))},[(0,n._)("div",a,[i,(0,n._)("div",l,[u,(0,n.wy)((0,n._)("input",{type:"email",id:"inputEmail",class:"form-control",placeholder:"Email address",required:"",autofocus:"","onUpdate:modelValue":e[0]||(e[0]=s=>h.user.username=s)},null,512),[[t.nr,h.user.username]])]),(0,n._)("div",c,[d,(0,n.wy)((0,n._)("input",{type:"password",id:"inputPassword",class:"form-control",placeholder:"Password",required:"","onUpdate:modelValue":e[1]||(e[1]=s=>h.user.password=s)},null,512),[[t.nr,h.user.password]])]),p])],32)])}o(7658);var h={data(){return{user:{username:"",password:""}}},methods:{signIn(){console.log("login");const s="https://vue3-course-api.hexschool.io/admin/signin";this.axios.post(s,this.user).then((s=>{if(console.log("login",s.data.success),s.data.success){const e=s.data.token,o=s.data.expired;document.cookie=`loginToken=${e}; expires=${new Date(o)}; SameSite=None; Secure`,this.$router.push("/dashboard/products")}}))}}},b=o(89);const w=(0,b.Z)(h,[["render",m]]);var f=w}}]);
//# sourceMappingURL=214.c8c7e12a.js.map