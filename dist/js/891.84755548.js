"use strict";(self["webpackChunkshop_store"]=self["webpackChunkshop_store"]||[]).push([[891],{1891:function(a,s,t){t.r(s),t.d(s,{default:function(){return N}});var o=t(3396);const n={class:"container-fluid"};function e(a,s,t,e,l,r){const c=(0,o.up)("navbar"),i=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(c),(0,o._)("div",n,[(0,o.Wm)(i)])],64)}t(7658);var l=t(9242);const r={class:"navbar navbar-expand-lg bg-light"},c={class:"container-fluid"},i=(0,o._)("a",{class:"navbar-brand",href:"#"},"Navbar",-1),u=(0,o._)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,o._)("span",{class:"navbar-toggler-icon"})],-1),v={class:"collapse navbar-collapse",id:"navbarNav"},h={class:"navbar-nav"},p=(0,o._)("li",{class:"nav-item"},[(0,o._)("a",{class:"nav-link active","aria-current":"page",href:"#"},"Home")],-1),d=(0,o._)("li",{class:"nav-item"},[(0,o._)("a",{class:"nav-link",href:"#"},"Features")],-1),g={class:"nav-item"};function b(a,s,t,n,e,b){return(0,o.wg)(),(0,o.iD)("nav",r,[(0,o._)("div",c,[i,u,(0,o._)("div",v,[(0,o._)("ul",h,[p,d,(0,o._)("li",g,[(0,o._)("a",{class:"nav-link",href:"#",onClick:s[0]||(s[0]=(0,l.iM)(((...a)=>b.logout&&b.logout(...a)),["prevent"]))},"登出")])])])])])}var f={methods:{logout(){const a="https://vue3-course-api.hexschool.io/logout";this.$http.post(a).then((a=>{console.log("logout",a.data.success),a.data.success&&this.$router.push("/login")}))}}},_=t(89);const k=(0,_.Z)(f,[["render",b]]);var m=k,w={components:{navbar:m},created(){const a=document.cookie.split("; ").find((a=>a.startsWith("loginToken=")))?.split("=")[1];console.log(a),this.$http.defaults.headers.common.Authorization=a;const s="https://vue3-course-api.hexschool.io/api/user/check";this.axios.post(s).then((a=>{console.log("dash",a.data.success),a.data.success||this.$router.push("/login")}))}};const x=(0,_.Z)(w,[["render",e]]);var N=x}}]);
//# sourceMappingURL=891.84755548.js.map