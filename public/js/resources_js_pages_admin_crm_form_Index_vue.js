"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_admin_crm_form_Index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/crm/form/Index.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/crm/form/Index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
  name: "AdminCrmFormIndex",
  components: {
    ConfirmationModal: _components_core_modals_ConfirmationModal__WEBPACK_IMPORTED_MODULE_2__["default"],
    InputGroup: _components_core_forms_InputGroup__WEBPACK_IMPORTED_MODULE_3__["default"],
    SelectGroup: _components_core_forms_SelectGroup__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  layout: 'admin-layout',
  props: {
    searchOptions: {
      required: true,
      type: Object | Array
    },
    forms: {
      required: true,
      type: Object
    }
  },
  data: function data() {
    return {
      editableSearchOptions: {
        per_page: 15,
        form_name: '',
        form_slug: ''
      },
      isInitialised: false,
      isLoadingDelete: false,
      showDeleteModal: false,
      formToDelete: null
    };
  },
  computed: {
    deleteModalText: function deleteModalText() {
      try {
        return 'Do you really want to delete \'' + this.formToDelete.name + '\'?';
      } catch (e) {
        return 'Do you really want to delete this form?';
      }
    },
    showPagination: function showPagination() {
      try {
        return this.forms.pagination.last_page > 1;
      } catch (e) {
        return false;
      }
    },
    showFormActions: function showFormActions() {
      return this.userCan('crm_forms.edit') || this.userCan('crm_forms.delete');
    },
    formsData: function formsData() {
      if (!this.forms || !this.forms.data || this.forms.data.length < 1) {
        return false;
      }

      return this.forms.data;
    }
  },
  mounted: function mounted() {
    this.setSearchOptions(this.searchOptions);
  },
  methods: {
    cancelDelete: function cancelDelete() {
      if (!this.isLoadingDelete) {
        this.showDeleteModal = false;
        this.formToDelete = null;
      }
    },
    checkDelete: function checkDelete(form) {
      this.showDeleteModal = true;
      this.formToDelete = form;
    },
    confirmDelete: function confirmDelete() {
      if (this.isLoadingDelete) {
        return this.$errorToast('It\'s only possible to delete one form at a time.');
      }

      this.$inertia["delete"](this.$route('admin.crm.forms.destroy', this.formToDelete.id), {
        only: ['flash', 'forms']
      });
      this.formToDelete = null;
      this.showDeleteModal = false;
    },
    onSearchOptionsUpdate: lodash__WEBPACK_IMPORTED_MODULE_0___default().debounce(function () {
      if (!this.isInitialised) {
        this.isInitialised = true; // If there are already search results, don't attempt search

        if (this.formsData) {
          return;
        }
      }

      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__.Inertia.get(this.$route('admin.crm.forms.index'), this.editableSearchOptions, {
        only: ['forms'],
        preserveState: true
      });
    }, 500),
    setSearchOptions: function setSearchOptions() {
      var new_options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var options = {
        per_page: 15,
        form_name: '',
        form_slug: ''
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

/***/ "./resources/js/pages/admin/crm/form/Index.vue":
/*!*****************************************************!*\
  !*** ./resources/js/pages/admin/crm/form/Index.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Index_vue_vue_type_template_id_27b44021___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=27b44021& */ "./resources/js/pages/admin/crm/form/Index.vue?vue&type=template&id=27b44021&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/pages/admin/crm/form/Index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_27b44021___WEBPACK_IMPORTED_MODULE_0__.render,
  _Index_vue_vue_type_template_id_27b44021___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/admin/crm/form/Index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/admin/crm/form/Index.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/pages/admin/crm/form/Index.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/crm/form/Index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/admin/crm/form/Index.vue?vue&type=template&id=27b44021&":
/*!************************************************************************************!*\
  !*** ./resources/js/pages/admin/crm/form/Index.vue?vue&type=template&id=27b44021& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_27b44021___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_27b44021___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_27b44021___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=template&id=27b44021& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/crm/form/Index.vue?vue&type=template&id=27b44021&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/crm/form/Index.vue?vue&type=template&id=27b44021&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/crm/form/Index.vue?vue&type=template&id=27b44021& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
          _vm._v("\n            Forms\n        "),
        ]),
        _vm._v(" "),
        _vm.userCan("crm_forms.create")
          ? _c(
              "inertia-link",
              {
                staticClass:
                  "\n                button button-default-responsive button-primary\n                flex flex-row items-center\n            ",
                attrs: { href: _vm.$route("admin.crm.forms.create") },
              },
              [
                _c("icon-plus", { staticClass: "w-5 md:mr-2" }),
                _vm._v(" "),
                _c("span", { staticClass: "hidden md:inline" }, [
                  _vm._v("\n                Create Form\n            "),
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
          _vm._v("\n            Search\n            "),
          _c(
            "button",
            {
              staticClass:
                "\n                    text-sm text-theme-base-subtle-contrast\n                    focus:outline-none focus:text-theme-primary\n                    hover:text-theme-primary\n                ",
              on: { click: _vm.setSearchOptions },
            },
            [_vm._v("\n                (Clear)\n            ")]
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
              { staticClass: "w-full md:w-1/2" },
              [
                _c("input-group", {
                  attrs: {
                    "input-autocomplete": "form_name_search",
                    "input-class": "form-control form-control-short",
                    "input-id": "form_name",
                    "input-name": "form_name",
                    "input-placeholder": "Form Name",
                    "input-type": "text",
                    "label-hidden": true,
                    "label-text": "Form Name",
                  },
                  model: {
                    value: _vm.editableSearchOptions.form_name,
                    callback: function ($$v) {
                      _vm.$set(_vm.editableSearchOptions, "form_name", $$v)
                    },
                    expression: "editableSearchOptions.form_name",
                  },
                }),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "w-full md:w-1/2" },
              [
                _c("input-group", {
                  attrs: {
                    "input-autocomplete": "form_slug_search",
                    "input-class": "form-control form-control-short",
                    "input-id": "form_slug",
                    "input-name": "form_slug",
                    "input-placeholder": "Form Slug",
                    "input-type": "text",
                    "label-hidden": true,
                    "label-text": "Form Slug",
                  },
                  model: {
                    value: _vm.editableSearchOptions.form_slug,
                    callback: function ($$v) {
                      _vm.$set(_vm.editableSearchOptions, "form_slug", $$v)
                    },
                    expression: "editableSearchOptions.form_slug",
                  },
                }),
              ],
              1
            ),
          ]
        ),
        _vm._v(" "),
        !_vm.formsData
          ? _c(
              "p",
              {
                staticClass:
                  "bg-theme-base-subtle mt-8 mx-6 px-6 py-4 rounded text-center text-theme-base-subtle-contrast",
              },
              [_vm._v("\n            No forms\n        ")]
            )
          : [
              _c("div", { staticClass: "block mt-8 overflow-x-auto w-full" }, [
                _c(
                  "table",
                  { staticClass: "table table-hover table-striped w-full" },
                  [
                    _c("thead", [
                      _c("tr", [
                        _c("th", [_vm._v("Name")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Slug")]),
                        _vm._v(" "),
                        _vm.showFormActions ? _c("th") : _vm._e(),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c(
                      "tbody",
                      _vm._l(_vm.formsData, function (form) {
                        return _c("tr", { key: "template-" + form.id }, [
                          _c("td", [
                            _vm._v(
                              "\n                            " +
                                _vm._s(form.name) +
                                "\n                        "
                            ),
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              "\n                            " +
                                _vm._s(form.slug) +
                                "\n                        "
                            ),
                          ]),
                          _vm._v(" "),
                          _vm.showFormActions
                            ? _c("td", [
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "flex flex-row items-center justify-end -mx-1",
                                  },
                                  [
                                    _vm.userCan("crm_forms.edit")
                                      ? _c(
                                          "inertia-link",
                                          {
                                            staticClass:
                                              "\n                                        flex flex-row items-center inline-flex mx-1 px-2 py-1 rounded text-theme-base-subtle-contrast text-sm tracking-wide\n                                        focus:outline-none focus:ring\n                                        hover:bg-theme-info hover:text-theme-info-contrast\n                                    ",
                                            attrs: {
                                              href: _vm.$route(
                                                "admin.crm.forms.edit",
                                                form.id
                                              ),
                                              title: "Edit Form",
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
                                    _vm.userCan("crm_forms.delete")
                                      ? _c(
                                          "button",
                                          {
                                            staticClass:
                                              "\n                                        flex flex-row items-center inline-flex mx-1 px-2 py-1 rounded text-theme-base-subtle-contrast text-sm tracking-wide\n                                        focus:outline-none focus:ring\n                                        hover:bg-theme-danger hover:text-theme-danger-contrast\n                                    ",
                                            attrs: { title: "Delete Template" },
                                            on: {
                                              click: function ($event) {
                                                return _vm.checkDelete(form)
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
                        attrs: { pagination: _vm.forms.pagination },
                      }),
                    ],
                    1
                  )
                : _vm._e(),
            ],
        _vm._v(" "),
        _c("confirmation-modal", {
          attrs: {
            "confirm-text": "Delete",
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