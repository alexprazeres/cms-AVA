"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_admin_cms_blog_categories_Index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/cms/blog_categories/Index.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/cms/blog_categories/Index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var _components_core_modals_ConfirmationModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/core/modals/ConfirmationModal */ "./resources/js/components/core/modals/ConfirmationModal.vue");
/* harmony import */ var _components_core_forms_InputGroup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/core/forms/InputGroup */ "./resources/js/components/core/forms/InputGroup.vue");
/* harmony import */ var _components_core_forms_SelectGroup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/core/forms/SelectGroup */ "./resources/js/components/core/forms/SelectGroup.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "AdminCmsLayoutIndex",
  components: {
    ConfirmationModal: _components_core_modals_ConfirmationModal__WEBPACK_IMPORTED_MODULE_2__["default"],
    InputGroup: _components_core_forms_InputGroup__WEBPACK_IMPORTED_MODULE_3__["default"],
    SelectGroup: _components_core_forms_SelectGroup__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  layout: 'admin-layout',
  props: {
    blogs: {
      required: true,
      type: Object
    },
    searchOptions: {
      required: true,
      type: Object | Array
    }
  },
  data: function data() {
    return {
      editableSearchOptions: {
        per_page: 15,
        title: ''
      },
      isInitialised: false,
      isLoadingDelete: false,
      showDeleteModal: false,
      rowToDelete: null
    };
  },
  mounted: function mounted() {
    this.setSearchOptions(this.searchOptions);
  },
  computed: {
    deleteModalText: function deleteModalText() {
      try {
        return 'Você deseja deletar \'' + this.rowToDelete.title + '\'?';
      } catch (e) {
        return 'Você realmente deseja deletar este registro?';
      }
    },
    showPagination: function showPagination() {
      try {
        return this.blogs.pagination.last_page > 1;
      } catch (e) {
        return false;
      }
    },
    showLayoutActions: function showLayoutActions() {
      return this.userCan('cms_advanced.edit') || this.userCan('cms_advanced.delete');
    },
    blogsData: function blogsData() {
      console.log(this.blogs);

      if (!this.blogs || !this.blogs.data || this.blogs.data.length < 1) {
        return false;
      }

      return this.blogs.data;
    }
  },
  methods: {
    cancelDelete: function cancelDelete() {
      if (!this.isLoadingDelete) {
        this.showDeleteModal = false;
        this.rowToDelete = null;
      }
    },
    checkDelete: function checkDelete(data) {
      this.showDeleteModal = true;
      this.rowToDelete = data;
    },
    confirmDelete: function confirmDelete() {
      if (this.isLoadingDelete) {
        return this.$errorToast('It\'s only possible to delete one blogs at a time.');
      }

      this.$inertia["delete"](this.$route('admin.cms.blogs.destroy', this.rowToDelete.id), {
        only: ['flash', 'blogs']
      });
      this.rowToDelete = null;
      this.showDeleteModal = false;
    },
    onSearchOptionsUpdate: lodash__WEBPACK_IMPORTED_MODULE_0___default().debounce(function () {
      if (!this.isInitialised) {
        this.isInitialised = true; // If there are already search results, don't attempt search

        if (this.blogsData) {
          return;
        }
      }

      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__.Inertia.get(this.$route('admin.cms.blogs.index'), this.editableSearchOptions, {
        only: ['blogs'],
        preserveState: true
      });
    }, 500),
    setSearchOptions: function setSearchOptions() {
      var new_options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var options = {
        per_page: 15,
        title: ''
      };

      try {
        // Overwrite the defaults with any new options
        lodash__WEBPACK_IMPORTED_MODULE_0___default().forEach(new_options, function (option, key) {
          options[key] = option;
        });
      } catch (e) {
        console.log(e);
      }

      this.editableSearchOptions = lodash__WEBPACK_IMPORTED_MODULE_0___default().cloneDeep(options);
    }
  },
  watch: {
    editableSearchOptions: {
      deep: true,
      handler: 'onSearchOptionsUpdate'
    }
  }
});

/***/ }),

/***/ "./resources/js/pages/admin/cms/blog_categories/Index.vue":
/*!****************************************************************!*\
  !*** ./resources/js/pages/admin/cms/blog_categories/Index.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Index_vue_vue_type_template_id_c25548c6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=c25548c6& */ "./resources/js/pages/admin/cms/blog_categories/Index.vue?vue&type=template&id=c25548c6&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/pages/admin/cms/blog_categories/Index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_c25548c6___WEBPACK_IMPORTED_MODULE_0__.render,
  _Index_vue_vue_type_template_id_c25548c6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/admin/cms/blog_categories/Index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/admin/cms/blog_categories/Index.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/pages/admin/cms/blog_categories/Index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/cms/blog_categories/Index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/admin/cms/blog_categories/Index.vue?vue&type=template&id=c25548c6&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/pages/admin/cms/blog_categories/Index.vue?vue&type=template&id=c25548c6& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_c25548c6___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_c25548c6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_c25548c6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=template&id=c25548c6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/cms/blog_categories/Index.vue?vue&type=template&id=c25548c6&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/cms/blog_categories/Index.vue?vue&type=template&id=c25548c6&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/cms/blog_categories/Index.vue?vue&type=template&id=c25548c6& ***!
  \**************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("section", [
    _c(
      "div",
      { staticClass: "flex flex-row items-center mb-6" },
      [
        _c("h1", { staticClass: "font-medium mr-auto text-lg" }, [
          _vm._v("\n             Layout\n        "),
        ]),
        _vm._v(" "),
        _vm.userCan("cms_advanced.create")
          ? _c(
              "inertia-link",
              {
                staticClass:
                  "\n                button button-default-responsive button-primary\n                flex flex-row items-center\n            ",
                attrs: { href: _vm.$route("admin.cms.blogs.create") },
              },
              [
                _c("icon-plus", { staticClass: "w-5 md:mr-2" }),
                _vm._v(" "),
                _c("span", { staticClass: "hidden md:inline" }, [
                  _vm._v("\n                Criar publicação\n            "),
                ]),
              ],
              1
            )
          : _vm._e(),
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "bg-white py-6 shadow-subtle rounded-lg" },
      [
        _c("h1", { staticClass: "font-semibold px-6 text-gray-850" }, [
          _vm._v("\n            Buscar\n            "),
          _c(
            "button",
            {
              staticClass:
                "\n                    text-sm text-theme-base-subtle-contrast\n                    focus:outline-none focus:text-theme-primary\n                    hover:text-theme-primary\n                ",
              on: { click: _vm.setSearchOptions },
            },
            [_vm._v("\n                (Limpar)\n            ")]
          ),
        ]),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "\n                flex flex-col items-center mt-4 px-6 space-y-4\n                md:flex-row md:space-y-0 md:space-x-8\n            ",
          },
          [
            _c(
              "div",
              { staticClass: "w-full md:w-1/3" },
              [
                _c("input-group", {
                  attrs: {
                    "input-autocomplete": "layout_name_search",
                    "input-class": "form-control form-control-short",
                    "input-id": "layout_name",
                    "input-name": "layout_name",
                    "input-placeholder": "Titulo",
                    "input-type": "text",
                    "label-hidden": true,
                    "label-text": "Título",
                  },
                  model: {
                    value: _vm.editableSearchOptions.title,
                    callback: function ($$v) {
                      _vm.$set(_vm.editableSearchOptions, "title", $$v)
                    },
                    expression: "editableSearchOptions.title",
                  },
                }),
              ],
              1
            ),
          ]
        ),
        _vm._v(" "),
        !_vm.blogsData
          ? _c(
              "p",
              {
                staticClass:
                  "bg-theme-base-subtle mt-8 mx-6 px-6 py-4 rounded text-center text-theme-base-subtle-contrast",
              },
              [_vm._v("\n            Nenhum registro\n        ")]
            )
          : [
              _c("div", { staticClass: "block mt-8 overflow-x-auto w-full" }, [
                _c(
                  "table",
                  { staticClass: "table table-hover table-striped w-full" },
                  [
                    _c("thead", [
                      _c("tr", [
                        _c("th", [_vm._v("Titulo")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Descrição")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Criado em")]),
                        _vm._v(" "),
                        _vm.showLayoutActions ? _c("th") : _vm._e(),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c(
                      "tbody",
                      _vm._l(_vm.blogsData, function (blog) {
                        return _c("tr", { key: "layout-" + blog.id }, [
                          _c("td", [
                            _vm._v(
                              "\n                            " +
                                _vm._s(blog.title) +
                                "\n                        "
                            ),
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              "\n                            " +
                                _vm._s(blog.description) +
                                "\n                        "
                            ),
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              "\n                            " +
                                _vm._s(
                                  _vm._f("smallDateTime")(blog.created_at)
                                ) +
                                "\n                        "
                            ),
                          ]),
                          _vm._v(" "),
                          _vm.showLayoutActions
                            ? _c("td", [
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "flex flex-row items-center justify-end -mx-1",
                                  },
                                  [
                                    _vm.userCan("cms_advanced.edit")
                                      ? _c(
                                          "inertia-link",
                                          {
                                            staticClass:
                                              "\n                                        flex flex-row items-center inline-flex mx-1 px-2 py-1 rounded text-theme-base-subtle-contrast text-sm tracking-wide\n                                        focus:outline-none focus:ring\n                                        hover:bg-theme-info hover:text-theme-info-contrast\n                                    ",
                                            attrs: {
                                              href: _vm.$route(
                                                "admin.cms.blogs.edit",
                                                blog.id
                                              ),
                                              title: "Editar",
                                            },
                                          },
                                          [
                                            _c("icon-edit", {
                                              staticClass: "w-4",
                                            }),
                                          ],
                                          1
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _vm.userCan("cms_advanced.delete")
                                      ? _c(
                                          "button",
                                          {
                                            staticClass:
                                              "\n                                        flex flex-row items-center inline-flex mx-1 px-2 py-1 rounded text-theme-base-subtle-contrast text-sm tracking-wide\n                                        focus:outline-none focus:ring\n                                        hover:bg-theme-danger hover:text-theme-danger-contrast\n                                    ",
                                            attrs: { title: "Deletar" },
                                            on: {
                                              click: function ($event) {
                                                return _vm.checkDelete(blog)
                                              },
                                            },
                                          },
                                          [
                                            _c("icon-trash", {
                                              staticClass: "w-4",
                                            }),
                                          ],
                                          1
                                        )
                                      : _vm._e(),
                                  ],
                                  1
                                ),
                              ])
                            : _vm._e(),
                        ])
                      }),
                      0
                    ),
                  ]
                ),
              ]),
              _vm._v(" "),
              _vm.showPagination
                ? _c(
                    "div",
                    { staticClass: "flex flex-row justify-center mt-12 px-6" },
                    [
                      _c("pagination", {
                        attrs: { pagination: _vm.blogs.pagination },
                      }),
                    ],
                    1
                  )
                : _vm._e(),
            ],
        _vm._v(" "),
        _c("confirmation-modal", {
          attrs: {
            "confirm-text": "Deletar",
            "confirm-type": "danger",
            "show-modal": _vm.showDeleteModal,
            "message-text": _vm.deleteModalText,
          },
          on: {
            cancelAction: _vm.cancelDelete,
            closeModal: _vm.cancelDelete,
            confirmAction: _vm.confirmDelete,
          },
        }),
      ],
      2
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);