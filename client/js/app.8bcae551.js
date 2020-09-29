(function(t){function e(e){for(var a,r,n=e[0],c=e[1],l=e[2],d=0,p=[];d<n.length;d++)r=n[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&p.push(i[r][0]),i[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(p.length)p.shift()();return o.push.apply(o,l||[]),s()}function s(){for(var t,e=0;e<o.length;e++){for(var s=o[e],a=!0,n=1;n<s.length;n++){var c=s[n];0!==i[c]&&(a=!1)}a&&(o.splice(e--,1),t=r(r.s=s[0]))}return t}var a={},i={app:0},o=[];function r(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=a,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(s,a,function(e){return t[e]}.bind(null,a));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],c=n.push.bind(n);n.push=e,n=n.slice();for(var l=0;l<n.length;l++)e(n[l]);var u=c;o.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"0383":function(t,e,s){"use strict";var a=s("7505"),i=s.n(a);i.a},"05d0":function(t,e,s){"use strict";var a=s("f5f5"),i=s.n(a);i.a},"0c31":function(t,e,s){"use strict";var a=s("b933"),i=s.n(a);i.a},3151:function(t,e,s){},"416c":function(t,e,s){t.exports=s.p+"img/Bug_Tracker_Emblem.82954323.png"},5366:function(t,e,s){"use strict";var a=s("a0d1"),i=s.n(a);i.a},"56d7":function(t,e,s){"use strict";s.r(e);var a=s("2b0e"),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("navbar"),s("router-view")],1)},o=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light"},[a("router-link",{staticClass:"navbar-brand",attrs:{to:{name:"Bugs"}}},[a("img",{attrs:{src:s("416c"),height:"40px",alt:""}})]),t._m(0),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarText"}},[a("ul",{staticClass:"navbar-nav mr-auto"},[a("li",{staticClass:"nav-item",class:{active:"Bugs"==t.$route.name}},[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"Bugs"}}},[a("b",[t._v("Bugs")])])],1),t.$auth.isAuthenticated?a("li",{staticClass:"nav-item",class:{active:"Profile"==t.$route.name}},[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"Profile"}}},[t._v("Profile")])],1):t._e()]),a("span",{staticClass:"navbar-text"},[t.$auth.isAuthenticated?a("button",{staticClass:"btn btn-danger",on:{click:t.logout}},[t._v("logout")]):a("button",{staticClass:"btn btn-success",on:{click:t.login}},[t._v(" Login ")])])])],1)},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"}},[s("span",{staticClass:"navbar-toggler-icon"})])}],c=s("bc3a"),l=s.n(c),u=s("335d"),d={name:"Navbar",methods:{async login(){await this.$auth.loginWithPopup(),this.$auth.isAuthenticated&&(this.$store.dispatch("setBearer",this.$auth.bearer),this.$store.dispatch("getProfile"))},async logout(){this.$store.dispatch("resetBearer"),await this.$auth.logout({returnTo:window.location.origin})}}},p=d,g=(s("5366"),s("2877")),v=Object(g["a"])(p,r,n,!1,null,"53ef2ced",null),f=v.exports,h={name:"App",async beforeCreate(){await Object(u["c"])(),this.$auth.isAuthenticated&&(this.$store.dispatch("setBearer",this.$auth.bearer),this.$store.dispatch("getProfile"))},components:{Navbar:f}},m=h,b=(s("5c0b"),Object(g["a"])(m,i,o,!1,null,null,null)),C=b.exports,_=s("8c4f"),w=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"Bugs text-light text-center"},[t._m(0),s("form",{staticClass:"d-flex",on:{submit:function(e){return e.preventDefault(),t.addBug(e)}}},[s("div",{staticClass:"row col-10 justify-content-end"},[s("div",{staticClass:"col-2"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.newBug.title,expression:"newBug.title"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Bug Title...",required:""},domProps:{value:t.newBug.title},on:{input:function(e){e.target.composing||t.$set(t.newBug,"title",e.target.value)}}})]),s("div",{staticClass:"col-2"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.newBug.description,expression:"newBug.description"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Bug Description...",required:""},domProps:{value:t.newBug.description},on:{input:function(e){e.target.composing||t.$set(t.newBug,"description",e.target.value)}}})])]),s("button",{staticClass:"btn btn-success",attrs:{type:"submit"}},[t._v("REPORT!")])]),t._m(1),s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"row d-flex justify-content-around"},[s("div",{staticClass:"card col-10"},[s("div",{staticClass:"row"},t._l(t.bugs,(function(t){return s("bugs-component",{key:t.id,staticClass:"bugRow",attrs:{bugProp:t}})})),1)])])])])},y=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row d-flex"},[s("div",{staticClass:"col-12"},[s("h1",{staticClass:"spcHeader"},[t._v("All Bugs")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row d-flex justify-content-around boarder"},[s("div",{staticClass:"col-3 textShadow"},[s("h4",{staticClass:"spcText"},[s("b",[t._v("Title")])])]),s("div",{staticClass:"col-3 textShadow"},[s("h4",{staticClass:"spcText"},[s("b",[t._v("Reported by")])])]),s("div",{staticClass:"col-3 textShadow"},[s("h4",{staticClass:"spcText"},[s("b",[t._v("Status")])])]),s("div",{staticClass:"col-3 textShadow"},[s("h4",{staticClass:"spcText"},[s("b",[t._v("Last Modified")])])])])}],B=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"BugComponent col-12 border"},[s("div",{staticClass:"text-dark justify-content-around pointer row mb-1 grow",on:{click:t.setActive}},[s("div",{staticClass:"col-3"},[s("h3",[s("b",[t._v(t._s(t.bugProp.title))])])]),s("div",{staticClass:"col-3"},[s("h3",[s("b",[t._v(t._s(t.bugProp.creatorEmail))])])]),s("div",{staticClass:"col-3 textShadow"},[t.bugProp.closed?s("h3",{staticClass:"redI"},[s("b",[t._v("Closed")])]):t._e(),t.bugProp.closed?t._e():s("h3",{staticClass:"greenI"},[s("b",[t._v("Open")])])]),s("div",{staticClass:"col-3"},[s("h5",[s("i",[t._v(t._s(t.bugProp.updatedAt))])])])])])},x=[],$={name:"BugComponent",data(){return{bugData:{}}},computed:{},methods:{setActive(){this.$store.dispatch("getActiveBug",this.bugProp.id)},addBug(){this.$store.dispatch("createBug",{title:this.bugData.title,description:this.bugData.description})}},components:{},props:["bugProp"]},P=$,A=(s("05d0"),Object(g["a"])(P,B,x,!1,null,"14402a50",null)),j=A.exports,E={name:"Bugs",mounted(){this.$store.dispatch("getAllBugs")},data(){return{newBug:{title:"",description:""}}},computed:{bugs(){return this.$store.state.bugs}},methods:{addBug(){this.$store.dispatch("createBug",this.newBug),this.newBug={title:"",description:""}}},components:{bugsComponent:j}},N=E,T=(s("8e39"),Object(g["a"])(N,w,y,!1,null,"34c17454",null)),O=T.exports,k=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"about text-center"},[s("h1",[t._v("Welcome "+t._s(t.profile.name))]),s("img",{staticClass:"rounded",attrs:{src:t.profile.picture,alt:""}}),s("p",[t._v(t._s(t.profile.email))])])},S=[],D={name:"Profile",computed:{profile(){return this.$store.state.profile}}},I=D,M=(s("0383"),Object(g["a"])(I,k,S,!1,null,"59c2bb44",null)),q=M.exports,L=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"ActiveBugComponent"},[s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"row d-flex justify-content-around mt-1"},[s("div",{staticClass:"card col-11 border spcbkg"},[t._m(0),s("div",{staticClass:"card-body"},[s("h1",{},[t._v(t._s(t.bug.title))])]),t._m(1),s("div",{staticClass:"card-body"},[s("h1",[t._v(t._s(t.bug.creatorEmail))])]),t._m(2),s("div",{staticClass:"card-body d-flex flex-row-reverse"},[t.bug.closed?s("h1",{staticClass:"redI textShadow"},[s("b",[t._v("CLOSED")])]):t._e(),t.bug.closed?t._e():s("h1",{staticClass:"greenI textShadow"},[s("b",[t._v("OPEN")])])]),s("div",{staticClass:"card-body d-flex justify-content-center word-break"},[s("h1",{},[t._v(t._s(t.bug.description))])]),t.bug.closed?t._e():s("button",{staticClass:"btn btn-danger col-1 mx-1 mb-1",on:{click:t.changeStatus}},[t._v(" Change Status ")]),t.editToggle?s("form",{staticClass:"d-flex my-1",on:{submit:function(e){return e.preventDefault(),t.editBug(e)}}},[s("div",{staticClass:"row justify-content-end"},[s("div",{staticClass:"col-12 form-inline"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.bug.title,expression:"bug.title"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Edit Title...",required:""},domProps:{value:t.bug.title},on:{input:function(e){e.target.composing||t.$set(t.bug,"title",e.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.bug.description,expression:"bug.description"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Edit Description...",required:""},domProps:{value:t.bug.description},on:{input:function(e){e.target.composing||t.$set(t.bug,"description",e.target.value)}}})])]),t._m(3)]):t._e(),t.editToggle||t.bug.closed?t._e():s("button",{staticClass:"btn btn-info col-1 mx-1 mb-1",on:{click:function(e){t.editToggle=!t.editToggle}}},[t._v(" Edit Bug "),s("i",{staticClass:"fa fa-plus-circle",attrs:{"aria-hidden":"true"}})])])])]),s("div",{staticClass:"row d-flex justify-content-around"},[s("div",{staticClass:"col-10"},[s("form",{staticClass:"d-flex justify-content-end my-1",on:{submit:function(e){return e.preventDefault(),t.addNote(e)}}},[s("div",{staticClass:"row col-9 justify-content-end"},[s("div",{staticClass:"col-3"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.content,expression:"formData.content"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Bug Notes...",required:""},domProps:{value:t.formData.content},on:{input:function(e){e.target.composing||t.$set(t.formData,"content",e.target.value)}}})])]),t._m(4)]),s("div",{staticClass:"card border"},[t._m(5),s("div",{staticClass:"row"}),s("div",{staticClass:"row justify-content-between boarder"},[s("div",{staticClass:"card-body"},t._l(t.notes,(function(t){return s("note-component",{key:t.id,attrs:{noteProp:t}})})),1)])])])])])},R=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h5",[s("i",[t._v("Title:")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h5",{},[s("i",[t._v("Created By:")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"d-flex flex-row-reverse"},[s("h5",[s("i",[t._v("Status")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{staticClass:"btn btn-info col-1 mx-1 mb-1",attrs:{type:"submit"}},[t._v(" Edit Bug "),s("i",{staticClass:"fa fa-plus-circle",attrs:{"aria-hidden":"true"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{staticClass:"btn btn-warning",attrs:{type:"submit"}},[t._v(" Note "),s("i",{staticClass:"fa fa-plus-circle",attrs:{"aria-hidden":"true"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row d-flex justify-content-between boarder text-center"},[s("div",{staticClass:"col-3"},[s("h3",[t._v("Name")])]),s("div",{staticClass:"col-3"},[s("h3",[t._v("Message")])]),s("div",{staticClass:"col-3"},[s("h3",[t._v("Delete")])])])}],U=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"NoteComponent"},[s("div",{staticClass:"card d-flex flex-row justify-content-center border"},[s("div",{staticClass:"card-body col-3"},[s("h2",[t._v(t._s(t.noteProp.creatorEmail))])]),s("div",{staticClass:"card-body col-8"},[s("h4",[t._v(t._s(t.noteProp.content))])]),t.isOwner?s("div",{staticClass:"card-body col-1 justify-content-e"},[s("button",{staticClass:"btn btn-danger border",on:{click:t.deleteNote}},[s("i",{staticClass:"fa fa-trash",attrs:{"aria-hidden":"true"}})])]):t._e()])])},z=[],H={name:"noteComponent",props:["noteProp"],data(){return{}},computed:{isOwner(){return this.noteProp.creatorEmail==this.$auth.userInfo.email}},methods:{deleteNote(){this.$store.dispatch("deleteNote",this.noteProp)}},components:{}},J=H,W=(s("90d3"),Object(g["a"])(J,U,z,!1,null,"5b2cc9bb",null)),Y=W.exports,F={name:"component",mounted(){this.$store.dispatch("getAllNotesByBugId",this.$route.params.id),this.$store.dispatch("getActiveBug",this.$route.params.id)},data(){return{formData:{content:""},editToggle:!1}},computed:{bug(){return this.$store.state.activeBug},notes(){return this.$store.state.notes}},methods:{addNote(){this.$store.dispatch("createNote",{content:this.formData.content,bug:this.$route.params.id}),this.formData={content:""}},editBug(){this.$store.dispatch("editBug",this.bug),this.editToggle=!this.editToggle},changeStatus(){this.$store.dispatch("changeStatus",{closed:!0,id:this.$route.params.id})}},components:{noteComponent:Y}},G=F,V=(s("0c31"),Object(g["a"])(G,L,R,!1,null,"08d9edb1",null)),K=V.exports;a["a"].use(_["a"]);const Q=[{path:"/",name:"Bugs",component:O},{path:"/profile",name:"Profile",component:q,beforeEnter:u["b"]},{path:"/bugs/:id",name:"ActiveBug",component:K,beforeEnter:u["b"]},{path:"*",redirect:"/"}],X=new _["a"]({routes:Q});var Z=X,tt=s("2f62");let et=location.host.includes("localhost")?"http://localhost:3000/":"/";const st=l.a.create({baseURL:et+"api",timeout:5e3,withCredentials:!0});var at=s("3d20"),it=s.n(at);class ot{static async confirmAction(t="Are you sure",e="You won't be able to revert this!"){try{let s=await it.a.fire({title:t,text:e,icon:"warning",showCancelButton:!0,confirmButtonColor:"green",cancelButtonColor:"red",confirmButtonText:"Yes, delete it!"});return!!s.value}catch(s){}}static toast(t="Default Toast",e=5e3,s="info"){it.a.fire({title:t,icon:s,iconHtml:'<img\n        src="https://media.giphy.com/media/9Ai5dIk8xvBm0/giphy.gif"\n        style="width: 50px"\n        alt\n      />',timer:e,toast:!0,position:"top-right",showConfirmButton:!1,timerProgressBar:!0})}}a["a"].use(tt["a"]);var rt=new tt["a"].Store({state:{profile:{},bugs:[],activeBug:{},notes:[]},mutations:{setProfile(t,e){t.profile=e},setBugs(t,e){t.bugs=e},setActiveBug(t,e){t.activeBug=e},addBug(t,e){t.bugs.push(e)},editBug(t,e){let s=t.bugs.findIndex(t=>t.id==e.id);t.bugs.splice(s,1,e)},setNotes(t,e){t.notes=e}},actions:{setBearer({},t){st.defaults.headers.authorization=t},resetBearer(){st.defaults.headers.authorization=""},async getProfile({commit:t}){try{let e=await st.get("profile");t("setProfile",e.data)}catch(e){console.error(e)}},async getAllBugs({commit:t}){try{let e=await st.get("bugs");t("setBugs",e.data)}catch(e){console.error(e)}},async createBug({commit:t,dispatch:e},s){let a=await st.post("bugs",s);t("addbug",a.data),e("getAllBugs"),e("getActiveBug",a.data.id),ot.toast("Bug Created",3e3,"success")},async getActiveBug({commit:t},e){try{let s=await st.get("bugs/"+e);t("setActiveBug",s.data),Z.push({name:"ActiveBug",params:{id:s.data.id}})}catch(s){console.error(s)}},async editBug({commit:t},e){try{let s=await st.put("bugs/"+e.id,e);t("editBug",s.data)}catch(s){console.error(s)}},async changeStatus({dispatch:t},e){try{if(await ot.confirmAction("Are you sure you want to close this Bug?","Alright Fine Its Closed")){await st.put("bugs/"+e.id,{closed:e.closed});t("getActiveBug",e.id)}}catch(s){console.error(s)}},async getAllNotesByBugId({commit:t},e){try{let s=await st.get("bugs/"+e+"/notes");console.log(s),t("setNotes",s.data)}catch(s){console.error(s)}},async createNote({dispatch:t},e){try{await st.post("/notes",e),t("getAllNotesByBugId",e.bug)}catch(s){console.error(s)}},async deleteNote({dispatch:t},e){try{await ot.confirmAction("Do you want to delete this note?","Delorted")&&(await st.delete("/notes/"+e.id),t("getAllNotesByBugId",e.bug))}catch(s){console.error(s)}}}});const nt="dev-0rjifp8b.us.auth0.com",ct="https://Bug-Loger.com",lt="LVM14j00vi0wp5Acu2sGy3r3k5oSmU0q";a["a"].use(u["a"],{domain:nt,clientId:lt,audience:ct,onRedirectCallback:t=>{Z.push(t&&t.targetUrl?t.targetUrl:window.location.pathname)}}),new a["a"]({router:Z,store:rt,render:function(t){return t(C)}}).$mount("#app")},"5c0b":function(t,e,s){"use strict";var a=s("9c0c"),i=s.n(a);i.a},7505:function(t,e,s){},"8e39":function(t,e,s){"use strict";var a=s("a2ab"),i=s.n(a);i.a},"90d3":function(t,e,s){"use strict";var a=s("3151"),i=s.n(a);i.a},"9c0c":function(t,e,s){},a0d1:function(t,e,s){},a2ab:function(t,e,s){},b933:function(t,e,s){},f5f5:function(t,e,s){}});