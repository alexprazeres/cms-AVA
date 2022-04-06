"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[235],{6235:(t,e,a)=>{a.r(e),a.d(e,{default:()=>s});const n={name:"AdminProfileIndex",layout:"admin-layout",components:{InputGroup:a(4989).Z},props:{auth:Object,profile:Object},data:function(){return{formData:{email:null,first_name:null,last_name:null}}},mounted:function(){this.formData.email=this.profile.email,this.formData.first_name=this.profile.first_name,this.formData.last_name=this.profile.last_name},methods:{submit:function(){this.$inertia.put(this.$route("admin.profile.update"),this.formData)}}};const s=(0,a(1900).Z)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",{staticClass:"max-w-5xl mx-auto",on:{submit:function(e){return e.preventDefault(),t.submit.apply(null,arguments)}}},[a("div",{staticClass:"flex flex-row items-center mb-6"},[a("h1",{staticClass:"font-medium mr-auto text-lg"},[t._v("\n            Edit Profile\n        ")]),t._v(" "),t.userCan("profile.view")?a("inertia-link",{staticClass:"\n                button button-default-responsive button-primary-subtle\n                flex flex-row items-center mr-2\n            ",attrs:{href:t.$route("admin.profile.index")}},[a("icon-chevron-left",{staticClass:"w-5 md:mr-2"}),t._v(" "),a("span",{staticClass:"hidden md:inline"},[t._v("\n                Back\n            ")])],1):t._e(),t._v(" "),a("button",{staticClass:"\n                button button-default-responsive button-primary\n                flex flex-row items-center\n            ",attrs:{type:"submit"}},[a("icon-save",{staticClass:"w-5 md:mr-2"}),t._v(" "),a("span",{staticClass:"hidden md:inline"},[t._v("\n                Save Changes\n            ")])],1)],1),t._v(" "),a("div",{staticClass:"bg-white py-6 shadow-subtle rounded-lg"},[a("div",{staticClass:"block px-6 w-full"},[a("input-group",{attrs:{"error-message":t.getPageErrorMessage("first_name"),"input-autocomplete":"first_name","input-autofocus":!0,"input-id":"first_name","input-name":"first_name","input-required":!0,"input-type":"text","label-text":"First Name"},on:{errorHidden:function(e){return t.clearPageErrorMessage("first_name")}},model:{value:t.formData.first_name,callback:function(e){t.$set(t.formData,"first_name",e)},expression:"formData.first_name"}}),t._v(" "),a("input-group",{staticClass:"mt-4",attrs:{"error-message":t.getPageErrorMessage("last_name"),"input-autocomplete":"last_name","input-id":"last_name","input-name":"last_name","input-required":!0,"input-type":"text","label-text":"Last Name"},on:{errorHidden:function(e){return t.clearPageErrorMessage("last_name")}},model:{value:t.formData.last_name,callback:function(e){t.$set(t.formData,"last_name",e)},expression:"formData.last_name"}}),t._v(" "),a("input-group",{staticClass:"mt-4",attrs:{"error-message":t.getPageErrorMessage("email"),"input-autocomplete":"new_email","input-id":"email","input-name":"email","input-required":!0,"input-type":"email","label-text":"Email"},on:{errorHidden:function(e){return t.clearPageErrorMessage("email")}},model:{value:t.formData.email,callback:function(e){t.$set(t.formData,"email",e)},expression:"formData.email"}})],1)])])}),[],!1,null,null,null).exports}}]);