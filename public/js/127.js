"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[127],{6127:(e,t,a)=>{a.r(t),a.d(t,{default:()=>c});var n=a(6486),l=a.n(n),s=a(9680),i=a(7441),o=a(4989),r=a(2618);const p={name:"AdminCmsTemplateIndex",components:{ConfirmationModal:i.Z,InputGroup:o.Z,SelectGroup:r.Z},layout:"admin-layout",props:{searchOptions:{required:!0,type:Object|Array},templates:{required:!0,type:Object},templateTypes:{required:!0,type:Object}},data:function(){return{editableSearchOptions:{per_page:15,template_name:"",template_slug:"",template_type:""},isInitialised:!1,isLoadingDelete:!1,showDeleteModal:!1,templateToDelete:null}},computed:{deleteModalText:function(){try{return"Do you really want to delete '"+this.templateToDelete.name+"'?"}catch(e){return"Do you really want to delete this template?"}},showPagination:function(){try{return this.templates.pagination.last_page>1}catch(e){return!1}},showTemplateActions:function(){return this.userCan("cms_advanced.edit")||this.userCan("cms_advanced.delete")},templatesData:function(){return!(!this.templates||!this.templates.data||this.templates.data.length<1)&&this.templates.data}},mounted:function(){this.setSearchOptions(this.searchOptions)},methods:{cancelDelete:function(){this.isLoadingDelete||(this.showDeleteModal=!1,this.templateToDelete=null)},checkDelete:function(e){this.showDeleteModal=!0,this.templateToDelete=e},confirmDelete:function(){if(this.isLoadingDelete)return this.$errorToast("It's only possible to delete one template at a time.");this.$inertia.delete(this.$route("admin.cms.templates.destroy",this.templateToDelete.id),{only:["flash","templates"]}),this.templateToDelete=null,this.showDeleteModal=!1},getTemplateTypeLabel:function(e){try{return this.templateTypes.hasOwnProperty(e)?this.templateTypes[e]:e}catch(t){return e}},onSearchOptionsUpdate:l().debounce((function(){!this.isInitialised&&(this.isInitialised=!0,this.templatesData)||s.Inertia.get(this.$route("admin.cms.templates.index"),this.editableSearchOptions,{only:["templates"],preserveState:!0})}),500),setSearchOptions:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t={per_page:15,template_name:"",template_slug:"",template_type:""};try{l().forEach(e,(function(e,a){t[a]=e}))}catch(e){console.log(e)}this.editableSearchOptions=l().cloneDeep(t)}},watch:{editableSearchOptions:{deep:!0,handler:"onSearchOptionsUpdate"}}};const c=(0,a(1900).Z)(p,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",[a("div",{staticClass:"flex flex-row items-center mb-6"},[a("h1",{staticClass:"font-medium mr-auto text-lg"},[e._v("\n             Templates\n        ")]),e._v(" "),e.userCan("cms_advanced.create")?a("inertia-link",{staticClass:"\n                button button-default-responsive button-primary\n                flex flex-row items-center\n            ",attrs:{href:e.$route("admin.cms.templates.create")}},[a("icon-plus",{staticClass:"w-5 md:mr-2"}),e._v(" "),a("span",{staticClass:"hidden md:inline"},[e._v("\n                Create Template\n            ")])],1):e._e()],1),e._v(" "),a("div",{staticClass:"bg-white py-6 shadow-subtle rounded-lg"},[a("h1",{staticClass:"font-semibold px-6 text-gray-850"},[e._v("\n            Search\n            "),a("button",{staticClass:"\n                    text-sm text-theme-base-subtle-contrast\n                    focus:outline-none focus:text-theme-primary\n                    hover:text-theme-primary\n                ",on:{click:e.setSearchOptions}},[e._v("\n                (Clear)\n            ")])]),e._v(" "),a("div",{staticClass:"\n                flex flex-col items-center mt-4 px-6 space-y-4\n                md:flex-row md:space-y-0 md:space-x-8\n            "},[a("div",{staticClass:"w-full md:w-1/3"},[a("input-group",{attrs:{"input-autocomplete":"template_name_search","input-class":"form-control form-control-short","input-id":"template_name","input-name":"template_name","input-placeholder":"Template Name","input-type":"text","label-hidden":!0,"label-text":"Template Name"},model:{value:e.editableSearchOptions.template_name,callback:function(t){e.$set(e.editableSearchOptions,"template_name",t)},expression:"editableSearchOptions.template_name"}})],1),e._v(" "),a("div",{staticClass:"w-full md:w-1/3"},[a("input-group",{attrs:{"input-autocomplete":"template_slug_search","input-class":"form-control form-control-short","input-id":"template_slug","input-name":"template_slug","input-placeholder":"Template Slug","input-type":"text","label-hidden":!0,"label-text":"Template Slug"},model:{value:e.editableSearchOptions.template_slug,callback:function(t){e.$set(e.editableSearchOptions,"template_slug",t)},expression:"editableSearchOptions.template_slug"}})],1),e._v(" "),a("div",{staticClass:"w-full md:w-1/3"},[a("select-group",{attrs:{"label-hidden":!0,"label-text":"Template Type","input-any-option-enabled":!0,"input-any-option-label":"Template Type","input-class":"form-control form-control-short","input-id":"template_type","input-name":"template_type","input-options":e.templateTypes},model:{value:e.editableSearchOptions.template_type,callback:function(t){e.$set(e.editableSearchOptions,"template_type",t)},expression:"editableSearchOptions.template_type"}})],1)]),e._v(" "),e.templatesData?[a("div",{staticClass:"block mt-8 overflow-x-auto w-full"},[a("table",{staticClass:"table table-hover table-striped w-full"},[a("thead",[a("tr",[a("th",[e._v("Name")]),e._v(" "),a("th",[e._v("Slug")]),e._v(" "),a("th",[e._v("Type")]),e._v(" "),e.showTemplateActions?a("th"):e._e()])]),e._v(" "),a("tbody",e._l(e.templatesData,(function(t,n){return a("tr",{key:"template-"+t.id},[a("td",[e._v("\n                            "+e._s(t.name)+"\n                        ")]),e._v(" "),a("td",[e._v("\n                            "+e._s(t.slug)+"\n                        ")]),e._v(" "),a("td",[e._v("\n                            "+e._s(e.getTemplateTypeLabel(t.type))+"\n                        ")]),e._v(" "),e.showTemplateActions?a("td",[a("div",{staticClass:"flex flex-row items-center justify-end -mx-1"},[e.userCan("cms_advanced.edit")?a("inertia-link",{staticClass:"\n                                        flex flex-row items-center inline-flex mx-1 px-2 py-1 rounded text-theme-base-subtle-contrast text-sm tracking-wide\n                                        focus:outline-none focus:ring\n                                        hover:bg-theme-info hover:text-theme-info-contrast\n                                    ",attrs:{href:e.$route("admin.cms.templates.edit",t.id),title:"Edit Template"}},[a("icon-edit",{staticClass:"w-4"})],1):e._e(),e._v(" "),e.userCan("cms_advanced.delete")?a("button",{staticClass:"\n                                        flex flex-row items-center inline-flex mx-1 px-2 py-1 rounded text-theme-base-subtle-contrast text-sm tracking-wide\n                                        focus:outline-none focus:ring\n                                        hover:bg-theme-danger hover:text-theme-danger-contrast\n                                    ",attrs:{title:"Delete Template"},on:{click:function(a){return e.checkDelete(t)}}},[a("icon-trash",{staticClass:"w-4"})],1):e._e()],1)]):e._e()])})),0)])]),e._v(" "),e.showPagination?a("div",{staticClass:"flex flex-row justify-center mt-12 px-6"},[a("pagination",{attrs:{pagination:e.templates.pagination}})],1):e._e()]:a("p",{staticClass:"bg-theme-base-subtle mt-8 mx-6 px-6 py-4 rounded text-center text-theme-base-subtle-contrast"},[e._v("\n            No templates\n        ")]),e._v(" "),a("confirmation-modal",{attrs:{"confirm-text":"Delete","confirm-type":"danger","show-modal":e.showDeleteModal,"message-text":e.deleteModalText},on:{cancelAction:e.cancelDelete,closeModal:e.cancelDelete,confirmAction:e.confirmDelete}})],2)])}),[],!1,null,null,null).exports}}]);