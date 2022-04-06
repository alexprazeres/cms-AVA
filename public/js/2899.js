"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2899],{2899:(e,t,n)=>{n.r(t),n.d(t,{default:()=>u});var a=n(6486),i=n.n(a),s=n(9680),o=n(7441),r=n(4989),l=n(2618);const c={name:"AdminCmsLayoutIndex",components:{ConfirmationModal:o.Z,InputGroup:r.Z,SelectGroup:l.Z},layout:"admin-layout",props:{funcionarios:{required:!0,type:Object},searchOptions:{required:!0,type:Object|Array}},data:function(){return{editableSearchOptions:{per_page:15,name:""},isInitialised:!1,isLoadingDelete:!1,showDeleteModal:!1,rowToDelete:null}},mounted:function(){this.setSearchOptions(this.searchOptions)},computed:{deleteModalText:function(){try{return"Você deseja deletar '"+this.rowToDelete.name+"'?"}catch(e){return"Você realmente deseja deletar este registro?"}},showPagination:function(){try{return this.funcionarios.pagination.last_page>1}catch(e){return!1}},showLayoutActions:function(){return this.userCan("cms_advanced.edit")||this.userCan("cms_advanced.delete")},funcionariosData:function(){return!(!this.funcionarios||!this.funcionarios.data||this.funcionarios.data.length<1)&&this.funcionarios.data}},methods:{cancelDelete:function(){this.isLoadingDelete||(this.showDeleteModal=!1,this.rowToDelete=null)},checkDelete:function(e){this.showDeleteModal=!0,this.rowToDelete=e},confirmDelete:function(){if(this.isLoadingDelete)return this.$errorToast("It's only possible to delete one funcionarios at a time.");this.$inertia.delete(this.$route("admin.cms.funcionarios.destroy",this.rowToDelete.id),{only:["flash","funcionarios"]}),this.rowToDelete=null,this.showDeleteModal=!1},onSearchOptionsUpdate:i().debounce((function(){!this.isInitialised&&(this.isInitialised=!0,this.funcionariosData)||s.Inertia.get(this.$route("admin.cms.funcionarios.index"),this.editableSearchOptions,{only:["funcionarios"],preserveState:!0})}),500),setSearchOptions:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t={per_page:15,name:""};try{i().forEach(e,(function(e,n){t[n]=e}))}catch(e){console.log(e)}this.editableSearchOptions=i().cloneDeep(t)}},watch:{editableSearchOptions:{deep:!0,handler:"onSearchOptionsUpdate"}}};const u=(0,n(1900).Z)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("div",{staticClass:"flex flex-row items-center mb-6"},[n("h1",{staticClass:"font-medium mr-auto text-lg"},[e._v("Funcionários")]),e._v(" "),e.userCan("cms_advanced.create")?n("inertia-link",{staticClass:"button button-default-responsive button-primary flex flex-row items-center",attrs:{href:e.$route("admin.cms.funcionarios.create")}},[n("icon-plus",{staticClass:"w-5 md:mr-2"}),e._v(" "),n("span",{staticClass:"hidden md:inline"},[e._v("Cadastrar funcionário")])],1):e._e()],1),e._v(" "),n("div",{staticClass:"bg-white py-6 shadow-subtle rounded-lg"},[n("h1",{staticClass:"font-semibold px-6 text-gray-850"},[e._v("\n      Buscar\n      "),n("button",{staticClass:"text-sm text-theme-base-subtle-contrast focus:outline-none focus:text-theme-primary hover:text-theme-primary",on:{click:e.setSearchOptions}},[e._v("\n        (Limpar)\n      ")])]),e._v(" "),n("div",{staticClass:"flex flex-col items-center mt-4 px-6 space-y-4 md:flex-row md:space-y-0 md:space-x-8"},[n("div",{staticClass:"w-full md:w-1/3"},[n("input-group",{attrs:{"input-autocomplete":"layout_name_search","input-class":"form-control form-control-short","input-id":"layout_name","input-name":"layout_name","input-placeholder":"Nome","input-type":"text","label-text":"Nome"},model:{value:e.editableSearchOptions.name,callback:function(t){e.$set(e.editableSearchOptions,"name",t)},expression:"editableSearchOptions.name"}})],1)]),e._v(" "),e.funcionariosData?[n("div",{staticClass:"block mt-8 overflow-x-auto w-full"},[n("table",{staticClass:"table table-hover table-striped w-full"},[n("thead",[n("tr",[n("th",[e._v("Titulo")]),e._v(" "),n("th",[e._v("Descrição")]),e._v(" "),n("th",[e._v("Criado em")]),e._v(" "),e.showLayoutActions?n("th"):e._e()])]),e._v(" "),n("tbody",e._l(e.funcionariosData,(function(t){return n("tr",{key:"layout-"+t.id},[n("td",[e._v("\n                "+e._s(t.name)+"\n              ")]),e._v(" "),n("td",[e._v("\n                "+e._s(t.title)+"\n              ")]),e._v(" "),n("td",[e._v("\n                "+e._s(e._f("smallDateTime")(t.created_at))+"\n              ")]),e._v(" "),e.showLayoutActions?n("td",[n("div",{staticClass:"flex flex-row items-center justify-end -mx-1"},[e.userCan("cms_advanced.edit")?n("inertia-link",{staticClass:"flex flex-row items-center inline-flex mx-1 px-2 py-1 rounded text-theme-base-subtle-contrast text-sm tracking-wide focus:outline-none focus:ring hover:bg-theme-info hover:text-theme-info-contrast",attrs:{href:e.$route("admin.cms.funcionarios.edit",t.id),name:"Editar"}},[n("icon-edit",{staticClass:"w-4"})],1):e._e(),e._v(" "),e.userCan("cms_advanced.delete")?n("button",{staticClass:"flex flex-row items-center inline-flex mx-1 px-2 py-1 rounded text-theme-base-subtle-contrast text-sm tracking-wide focus:outline-none focus:ring hover:bg-theme-danger hover:text-theme-danger-contrast",attrs:{name:"Deletar"},on:{click:function(n){return e.checkDelete(t)}}},[n("icon-trash",{staticClass:"w-4"})],1):e._e()],1)]):e._e()])})),0)])]),e._v(" "),e.showPagination?n("div",{staticClass:"flex flex-row justify-center mt-12 px-6"},[n("pagination",{attrs:{pagination:e.funcionarios.pagination}})],1):e._e()]:n("p",{staticClass:"bg-theme-base-subtle mt-8 mx-6 px-6 py-4 rounded text-center text-theme-base-subtle-contrast"},[e._v("\n      Nenhum registro\n    ")]),e._v(" "),n("confirmation-modal",{attrs:{"confirm-text":"Deletar","confirm-type":"danger","show-modal":e.showDeleteModal,"message-text":e.deleteModalText},on:{cancelAction:e.cancelDelete,closeModal:e.cancelDelete,confirmAction:e.confirmDelete}})],2)])}),[],!1,null,null,null).exports}}]);