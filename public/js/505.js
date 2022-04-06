"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[505],{6505:(t,e,a)=>{a.r(e),a.d(e,{default:()=>d});var i=a(6486),s=a.n(i),o=a(9680),n=a(7441),l=a(4989),r=a(2618);const c={name:"AdminCmsLayoutIndex",components:{ConfirmationModal:n.Z,InputGroup:l.Z,SelectGroup:r.Z},layout:"admin-layout",props:{blogs:{required:!0,type:Object},categories:{type:Object|Array},searchOptions:{required:!0,type:Object|Array}},data:function(){return{editableSearchOptions:{per_page:15,title:""},isInitialised:!1,isLoadingDelete:!1,showDeleteModal:!1,rowToDelete:null}},mounted:function(){this.setSearchOptions(this.searchOptions)},computed:{deleteModalText:function(){try{return"Você deseja deletar '"+this.rowToDelete.title+"'?"}catch(t){return"Você realmente deseja deletar este registro?"}},showPagination:function(){try{return this.blogs.pagination.last_page>1}catch(t){return!1}},showLayoutActions:function(){return this.userCan("cms_advanced.edit")||this.userCan("cms_advanced.delete")},blogsData:function(){return!(!this.blogs||!this.blogs.data||this.blogs.data.length<1)&&this.blogs.data}},methods:{categoryName:function(t){try{return this.categories[t].title}catch(t){return""}},cancelDelete:function(){this.isLoadingDelete||(this.showDeleteModal=!1,this.rowToDelete=null)},checkDelete:function(t){this.showDeleteModal=!0,this.rowToDelete=t},confirmDelete:function(){if(this.isLoadingDelete)return this.$errorToast("It's only possible to delete one blogs at a time.");this.$inertia.delete(this.$route("admin.cms.blogs.destroy",this.rowToDelete.id),{only:["flash","blogs"]}),this.rowToDelete=null,this.showDeleteModal=!1},onSearchOptionsUpdate:s().debounce((function(){!this.isInitialised&&(this.isInitialised=!0,this.blogsData)||o.Inertia.get(this.$route("admin.cms.blogs.index"),this.editableSearchOptions,{only:["blogs"],preserveState:!0})}),500),setSearchOptions:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e={per_page:15,title:""};try{s().forEach(t,(function(t,a){e[a]=t}))}catch(t){console.log(t)}this.editableSearchOptions=s().cloneDeep(e)}},watch:{editableSearchOptions:{deep:!0,handler:"onSearchOptionsUpdate"}}};const d=(0,a(1900).Z)(c,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("div",{staticClass:"flex flex-row items-center mb-6"},[a("h1",{staticClass:"font-medium mr-auto text-lg"},[t._v("Blog")]),t._v(" "),t.userCan("cms_advanced.create")?a("inertia-link",{staticClass:"button button-default-responsive button-primary flex flex-row items-center",attrs:{href:t.$route("admin.cms.blogs.create")}},[a("icon-plus",{staticClass:"w-5 md:mr-2"}),t._v(" "),a("span",{staticClass:"hidden md:inline"},[t._v("Criar publicação")])],1):t._e()],1),t._v(" "),a("div",{staticClass:"bg-white py-6 shadow-subtle rounded-lg"},[a("h1",{staticClass:"font-semibold px-6 text-gray-850"},[t._v("\n      Buscar\n      "),a("button",{staticClass:"text-sm text-theme-base-subtle-contrast focus:outline-none focus:text-theme-primary hover:text-theme-primary",on:{click:t.setSearchOptions}},[t._v("\n        (Limpar)\n      ")])]),t._v(" "),a("div",{staticClass:"flex flex-col items-center mt-4 px-6 space-y-4 md:flex-row md:space-y-0 md:space-x-8"},[a("div",{staticClass:"w-full md:w-1/3"},[a("input-group",{attrs:{"input-autocomplete":"layout_name_search","input-class":"form-control form-control-short","input-id":"layout_name","input-name":"layout_name","input-placeholder":"Titulo","input-type":"text","label-text":"Título"},model:{value:t.editableSearchOptions.title,callback:function(e){t.$set(t.editableSearchOptions,"title",e)},expression:"editableSearchOptions.title"}})],1),t._v(" "),a("div",{staticClass:"w-full sm:w-1/2 lg:w-1/4"},[a("select-group",{attrs:{"label-text":"Categoria","input-any-option-enabled":!0,"input-any-option-label":"Selecione a categoria","input-autofocus":!0,"input-id":"category_id","input-name":"category_id","input-options":t.categories,"input-option-label-key":"title","input-option-value-key":"id"},model:{value:t.editableSearchOptions.category_id,callback:function(e){t.$set(t.editableSearchOptions,"category_id",e)},expression:"editableSearchOptions.category_id"}})],1)]),t._v(" "),t.blogsData?[a("div",{staticClass:"block mt-8 overflow-x-auto w-full"},[a("table",{staticClass:"table table-hover table-striped w-full"},[a("thead",[a("tr",[a("th",[t._v("Titulo")]),t._v(" "),a("th",[t._v("Descrição")]),t._v(" "),a("th",[t._v("Categoria")]),t._v(" "),a("th",[t._v("Criado em")]),t._v(" "),t.showLayoutActions?a("th"):t._e()])]),t._v(" "),a("tbody",t._l(t.blogsData,(function(e){return a("tr",{key:"layout-"+e.id},[a("td",[t._v("\n                "+t._s(e.title)+"\n              ")]),t._v(" "),a("td",[t._v("\n                "+t._s(e.description)+"\n              ")]),t._v(" "),a("td",[t._v("\n                "+t._s(t.categoryName(e.category_id))+"\n              ")]),t._v(" "),a("td",[t._v("\n                "+t._s(t._f("smallDateTime")(e.created_at))+"\n              ")]),t._v(" "),t.showLayoutActions?a("td",[a("div",{staticClass:"flex flex-row items-center justify-end -mx-1"},[t.userCan("cms_advanced.edit")?a("inertia-link",{staticClass:"flex flex-row items-center inline-flex mx-1 px-2 py-1 rounded text-theme-base-subtle-contrast text-sm tracking-wide focus:outline-none focus:ring hover:bg-theme-info hover:text-theme-info-contrast",attrs:{href:t.$route("admin.cms.blogs.edit",e.id),title:"Editar"}},[a("icon-edit",{staticClass:"w-4"})],1):t._e(),t._v(" "),t.userCan("cms_advanced.delete")?a("button",{staticClass:"flex flex-row items-center inline-flex mx-1 px-2 py-1 rounded text-theme-base-subtle-contrast text-sm tracking-wide focus:outline-none focus:ring hover:bg-theme-danger hover:text-theme-danger-contrast",attrs:{title:"Deletar"},on:{click:function(a){return t.checkDelete(e)}}},[a("icon-trash",{staticClass:"w-4"})],1):t._e()],1)]):t._e()])})),0)])]),t._v(" "),t.showPagination?a("div",{staticClass:"flex flex-row justify-center mt-12 px-6"},[a("pagination",{attrs:{pagination:t.blogs.pagination}})],1):t._e()]:a("p",{staticClass:"bg-theme-base-subtle mt-8 mx-6 px-6 py-4 rounded text-center text-theme-base-subtle-contrast"},[t._v("\n      Nenhum registro\n    ")]),t._v(" "),a("confirmation-modal",{attrs:{"confirm-text":"Deletar","confirm-type":"danger","show-modal":t.showDeleteModal,"message-text":t.deleteModalText},on:{cancelAction:t.cancelDelete,closeModal:t.cancelDelete,confirmAction:t.confirmDelete}})],2)])}),[],!1,null,null,null).exports}}]);