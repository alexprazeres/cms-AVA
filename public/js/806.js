"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[806],{2806:(t,e,s)=>{s.r(e),s.d(e,{default:()=>c});var i=s(6486),n=s.n(i),o=s(9680),a=s(3764),r=s(6687);const m={name:"AdminCrmFormSubmissionIndex",components:{InputGroup:a.Z,SelectGroup:r.Z},layout:"admin-layout",props:{searchOptions:{required:!0,type:Object|Array},formSubmissions:{required:!0,type:Object},forms:{required:!0,type:Object|Array}},data:function(){return{editableSearchOptions:{per_page:15,form_id:""},isInitialised:!1}},computed:{showPagination:function(){try{return this.formSubmissions.pagination.last_page>1}catch(t){return!1}},showActions:function(){return this.userCan("cms_advanced.edit")||this.userCan("cms_advanced.delete")},formSubmissionsData:function(){return!(!this.formSubmissions||!this.formSubmissions.data||this.formSubmissions.data.length<1)&&this.formSubmissions.data}},mounted:function(){this.setSearchOptions(this.searchOptions)},methods:{onSearchOptionsUpdate:n().debounce((function(){!this.isInitialised&&(this.isInitialised=!0,this.formSubmissionsData)||o.Inertia.get(this.$route("admin.crm.form-submissions.index"),this.editableSearchOptions,{only:["formSubmissions"],preserveState:!0})}),500),setSearchOptions:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e={per_page:15,form_id:""};try{n().forEach(t,(function(t,s){e[s]=t}))}catch(t){console.log(t)}this.editableSearchOptions=n().cloneDeep(e)}},watch:{editableSearchOptions:{deep:!0,handler:"onSearchOptionsUpdate"}}};const c=(0,s(1900).Z)(m,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",[t._m(0),t._v(" "),s("div",{staticClass:"bg-white py-6 shadow-subtle rounded-lg"},[s("h1",{staticClass:"font-semibold px-6 text-gray-850"},[t._v("\n            Search\n            "),s("button",{staticClass:"\n                    text-sm text-theme-base-subtle-contrast\n                    focus:outline-none focus:text-theme-primary\n                    hover:text-theme-primary\n                ",on:{click:t.setSearchOptions}},[t._v("\n                (Clear)\n            ")])]),t._v(" "),s("div",{staticClass:"\n                flex flex-col items-center mt-4 px-6 space-y-4\n                md:flex-row md:space-y-0 md:space-x-8\n            "},[s("div",{staticClass:"w-full md:w-1/2"},[s("select-group",{attrs:{"label-hidden":!0,"label-text":"Form","input-any-option-enabled":!0,"input-any-option-label":"Form","input-class":"form-control form-control-short","input-id":"form_id","input-name":"form_id","input-option-label-key":"name","input-option-value-key":"id","input-options":t.forms},model:{value:t.editableSearchOptions.form_id,callback:function(e){t.$set(t.editableSearchOptions,"form_id",e)},expression:"editableSearchOptions.form_id"}})],1)]),t._v(" "),t.formSubmissionsData?[s("div",{staticClass:"block mt-8 overflow-x-auto w-full"},[s("table",{staticClass:"table table-hover table-striped w-full"},[s("thead",[s("tr",[s("th",[t._v("Contact")]),t._v(" "),s("th",[t._v("Form")]),t._v(" "),s("th",[t._v("Submitted At")]),t._v(" "),t.showActions?s("th"):t._e()])]),t._v(" "),s("tbody",t._l(t.formSubmissionsData,(function(e){return s("tr",{key:"template-"+e.id},[s("td",[e.contact_id?e.contact.name_with_title?s("div",[s("span",[t._v(t._s(e.contact.name_with_title))]),t._v(" "),s("br"),t._v(" "),s("span",{staticClass:"text-sm text-theme-base-subtle-contrast"},[t._v("\n                                    "+t._s(e.contact.email)+"\n                                ")])]):s("div",[t._v("\n                                "+t._s(e.contact.email)+"\n                            ")]):s("div",[t._v("\n                                -\n                            ")])]),t._v(" "),s("td",[t._v("\n                            "+t._s(e.form.name?e.form.name:e.form_id)+"\n                        ")]),t._v(" "),s("td",[t._v("\n                            "+t._s(t._f("humanFriendlyDateTime")(e.submitted_at))+"\n                        ")]),t._v(" "),t.showActions?s("td",[s("div",{staticClass:"flex flex-row items-center justify-end -mx-1"},[t.userCan("crm_form_submissions.view")?s("inertia-link",{staticClass:"\n                                        flex flex-row items-center inline-flex mx-1 px-2 py-1 rounded text-theme-base-subtle-contrast text-sm tracking-wide\n                                        focus:outline-none focus:ring\n                                        hover:bg-theme-info hover:text-theme-info-contrast\n                                    ",attrs:{href:t.$route("admin.crm.form-submissions.show",e.id),title:"View Submission"}},[s("icon-eye",{staticClass:"w-4"})],1):t._e()],1)]):t._e()])})),0)])]),t._v(" "),t.showPagination?s("div",{staticClass:"flex flex-row justify-center mt-12 px-6"},[s("pagination",{attrs:{pagination:t.formSubmissions.pagination}})],1):t._e()]:s("p",{staticClass:"bg-theme-base-subtle mt-8 mx-6 px-6 py-4 rounded text-center text-theme-base-subtle-contrast"},[t._v("\n            No form submissions\n        ")])],2)])}),[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"flex flex-row items-center mb-6"},[s("h1",{staticClass:"font-medium mr-auto text-lg"},[t._v("\n            Form Submissions\n        ")])])}],!1,null,null,null).exports}}]);