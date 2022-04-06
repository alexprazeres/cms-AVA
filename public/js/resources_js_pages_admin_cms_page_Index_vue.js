"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_admin_cms_page_Index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/cms/page/Index.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/cms/page/Index.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "AdminCmsPageIndex",
  components: {
    ConfirmationModal: _components_core_modals_ConfirmationModal__WEBPACK_IMPORTED_MODULE_2__["default"],
    InputGroup: _components_core_forms_InputGroup__WEBPACK_IMPORTED_MODULE_3__["default"],
    SelectGroup: _components_core_forms_SelectGroup__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  layout: 'admin-layout',
  props: {
    layouts: {
      required: true,
      type: Object | Array
    },
    pages: {
      required: true,
      type: Object
    },
    searchOptions: {
      required: true,
      type: Object | Array
    },
    templates: {
      required: true,
      type: Object | Array
    }
  },
  data: function data() {
    return {
      editableSearchOptions: {
        layout_id: '',
        per_page: 15,
        page_name: '',
        page_slug: '',
        template_id: ''
      },
      isInitialised: false,
      isLoadingDelete: false,
      showDeleteModal: false,
      pageToDelete: null
    };
  },
  mounted: function mounted() {
    this.setSearchOptions(this.searchOptions);
  },
  computed: {
    deleteModalText: function deleteModalText() {
      try {
        return 'Do you really want to delete \'' + this.pageToDelete.name + '\'?';
      } catch (e) {
        return 'Do you really want to delete this page?';
      }
    },
    isLayouts: function isLayouts() {
      try {
        return Object.keys(this.layouts).length;
      } catch (e) {
        return false;
      }
    },
    isTemplates: function isTemplates() {
      try {
        return Object.keys(this.templates).length;
      } catch (e) {
        return false;
      }
    },
    showPagination: function showPagination() {
      try {
        return this.pages.pagination.last_page > 1;
      } catch (e) {
        return false;
      }
    },
    showPageActions: function showPageActions() {
      return this.userCan('cms.edit') || this.userCan('cms.delete');
    },
    pagesData: function pagesData() {
      if (!this.pages || !this.pages.data || this.pages.data.length < 1) {
        return false;
      }

      return this.pages.data;
    }
  },
  methods: {
    cancelDelete: function cancelDelete() {
      if (!this.isLoadingDelete) {
        this.showDeleteModal = false;
        this.pageToDelete = null;
      }
    },
    checkDelete: function checkDelete(page) {
      this.showDeleteModal = true;
      this.pageToDelete = page;
    },
    confirmDelete: function confirmDelete() {
      if (this.isLoadingDelete) {
        return this.$errorToast('It\'s only possible to delete one page at a time.');
      }

      this.$inertia["delete"](this.$route('admin.cms.pages.destroy', this.pageToDelete.id), {
        only: ['flash', 'pages']
      });
      this.pageToDelete = null;
      this.showDeleteModal = false;
    },
    onSearchOptionsUpdate: lodash__WEBPACK_IMPORTED_MODULE_0___default().debounce(function () {
      if (!this.isInitialised) {
        this.isInitialised = true; // If there are already search results, don't attempt search

        if (this.pagesData) {
          return;
        }
      }

      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__.Inertia.get(this.$route('admin.cms.pages.index'), this.editableSearchOptions, {
        only: ['pages'],
        preserveState: true
      });
    }, 500),
    setSearchOptions: function setSearchOptions() {
      var new_options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var options = {
        layout_id: '',
        per_page: 15,
        page_name: '',
        page_slug: '',
        template_type: ''
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

/***/ "./resources/js/pages/admin/cms/page/Index.vue":
/*!*****************************************************!*\
  !*** ./resources/js/pages/admin/cms/page/Index.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Index_vue_vue_type_template_id_acf41d3e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=acf41d3e& */ "./resources/js/pages/admin/cms/page/Index.vue?vue&type=template&id=acf41d3e&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/pages/admin/cms/page/Index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_acf41d3e___WEBPACK_IMPORTED_MODULE_0__.render,
  _Index_vue_vue_type_template_id_acf41d3e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/admin/cms/page/Index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/admin/cms/page/Index.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/pages/admin/cms/page/Index.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/cms/page/Index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/admin/cms/page/Index.vue?vue&type=template&id=acf41d3e&":
/*!************************************************************************************!*\
  !*** ./resources/js/pages/admin/cms/page/Index.vue?vue&type=template&id=acf41d3e& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_acf41d3e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_acf41d3e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_acf41d3e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=template&id=acf41d3e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/cms/page/Index.vue?vue&type=template&id=acf41d3e&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/cms/page/Index.vue?vue&type=template&id=acf41d3e&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/cms/page/Index.vue?vue&type=template&id=acf41d3e& ***!
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
          _vm._v("\n             Page\n        "),
        ]),
        _vm._v(" "),
        _vm.userCan("cms.create")
          ? _c(
              "inertia-link",
              {
                staticClass:
                  "\n                button button-default-responsive button-primary\n                flex flex-row items-center\n            ",
                attrs: { href: _vm.$route("admin.cms.pages.create") },
              },
              [
                _c("icon-plus", { staticClass: "w-5 md:mr-2" }),
                _vm._v(" "),
                _c("span", { staticClass: "hidden md:inline" }, [
                  _vm._v("\n                Create Page\n            "),
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
              "\n                flex flex-row flex-wrap items-center -mx-4 -my-2 pt-4 px-6\n            ",
          },
          [
            _c(
              "div",
              {
                staticClass:
                  "\n                    my-2 w-full\n                    sm:w-1/2\n                    lg:w-1/4\n                ",
              },
              [
                _c("input-group", {
                  staticClass: "mx-4",
                  attrs: {
                    "input-autocomplete": "page_name_search",
                    "input-class": "form-control form-control-short",
                    "input-id": "page_name",
                    "input-name": "page_name",
                    "input-placeholder": "Page Name",
                    "input-type": "text",
                    "label-hidden": true,
                    "label-text": "Page Name",
                  },
                  model: {
                    value: _vm.editableSearchOptions.page_name,
                    callback: function ($$v) {
                      _vm.$set(_vm.editableSearchOptions, "page_name", $$v)
                    },
                    expression: "editableSearchOptions.page_name",
                  },
                }),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "\n                    my-2 w-full\n                    sm:w-1/2\n                    lg:w-1/4\n                ",
              },
              [
                _c("input-group", {
                  staticClass: "mx-4",
                  attrs: {
                    "input-autocomplete": "page_slug_search",
                    "input-class": "form-control form-control-short",
                    "input-id": "page_slug",
                    "input-name": "page_slug",
                    "input-placeholder": "Page Slug",
                    "input-type": "text",
                    "label-hidden": true,
                    "label-text": "Page Slug",
                  },
                  model: {
                    value: _vm.editableSearchOptions.page_slug,
                    callback: function ($$v) {
                      _vm.$set(_vm.editableSearchOptions, "page_slug", $$v)
                    },
                    expression: "editableSearchOptions.page_slug",
                  },
                }),
              ],
              1
            ),
            _vm._v(" "),
            _vm.isLayouts
              ? _c(
                  "div",
                  {
                    staticClass:
                      "\n                    my-2 w-full\n                    sm:w-1/2\n                    lg:w-1/4\n                ",
                  },
                  [
                    _c("select-group", {
                      staticClass: "mx-4",
                      attrs: {
                        "label-hidden": true,
                        "label-text": "Layout",
                        "input-any-option-enabled": true,
                        "input-any-option-label": "Layout",
                        "input-class": "form-control form-control-short",
                        "input-id": "template_id",
                        "input-name": "template_id",
                        "input-option-label-key": "name",
                        "input-option-value-key": "id",
                        "input-options": _vm.layouts,
                      },
                      model: {
                        value: _vm.editableSearchOptions.layout_id,
                        callback: function ($$v) {
                          _vm.$set(_vm.editableSearchOptions, "layout_id", $$v)
                        },
                        expression: "editableSearchOptions.layout_id",
                      },
                    }),
                  ],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.isTemplates
              ? _c(
                  "div",
                  {
                    staticClass:
                      "\n                    my-2 w-full\n                    sm:w-1/2\n                    lg:w-1/4\n                ",
                  },
                  [
                    _c("select-group", {
                      staticClass: "mx-4",
                      attrs: {
                        "label-hidden": true,
                        "label-text": "Template",
                        "input-any-option-enabled": true,
                        "input-any-option-label": "Template",
                        "input-class": "form-control form-control-short",
                        "input-id": "template_id",
                        "input-name": "template_id",
                        "input-option-label-key": "name",
                        "input-option-value-key": "id",
                        "input-options": _vm.templates,
                      },
                      model: {
                        value: _vm.editableSearchOptions.template_id,
                        callback: function ($$v) {
                          _vm.$set(
                            _vm.editableSearchOptions,
                            "template_id",
                            $$v
                          )
                        },
                        expression: "editableSearchOptions.template_id",
                      },
                    }),
                  ],
                  1
                )
              : _vm._e(),
          ]
        ),
        _vm._v(" "),
        !_vm.pagesData
          ? _c(
              "p",
              {
                staticClass:
                  "bg-theme-base-subtle mt-8 mx-6 px-6 py-4 rounded text-center text-theme-base-subtle-contrast",
              },
              [_vm._v("\n            No pages\n        ")]
            )
          : [
              _c("div", { staticClass: "block mt-8 overflow-x-auto w-full" }, [
                _c(
                  "table",
                  { staticClass: "table table-hover table-striped w-full" },
                  [
                    _c("thead", [
                      _c("tr", [
                        _c("th", { staticClass: "indicator-column" }),
                        _vm._v(" "),
                        _c("th", [_vm._v("Name")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("URL")]),
                        _vm._v(" "),
                        _c("th", { staticClass: "text-center" }, [
                          _vm._v("Enabled"),
                        ]),
                        _vm._v(" "),
                        _c("th", { staticClass: "text-center" }, [
                          _vm._v("Publish / Expiry Date"),
                        ]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Layout / Template")]),
                        _vm._v(" "),
                        _vm.showPageActions ? _c("th") : _vm._e(),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c(
                      "tbody",
                      _vm._l(_vm.pagesData, function (page, index) {
                        return _c("tr", { key: "page-" + page.id }, [
                          _c("td", { staticClass: "indicator-column" }, [
                            _c("div", {
                              staticClass: "h-3 rounded-full w-3",
                              class: {
                                "bg-theme-success-contrast": page.url.is_live,
                                "bg-theme-danger-contrast": !page.url.is_live,
                              },
                            }),
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              "\n                            " +
                                _vm._s(page.name) +
                                "\n                            "
                            ),
                            _c("br"),
                            _vm._v(" "),
                            _c(
                              "span",
                              {
                                staticClass:
                                  "text-sm text-theme-base-subtle-contrast",
                              },
                              [
                                _vm._v(
                                  "\n                                " +
                                    _vm._s(page.slug) +
                                    "\n                            "
                                ),
                              ]
                            ),
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "text-sm" }, [
                            _vm._v(
                              "\n                            " +
                                _vm._s(page.url.url_full) +
                                "\n                        "
                            ),
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _c(
                              "div",
                              { staticClass: "flex flex-row justify-center" },
                              [
                                page.url.is_enabled
                                  ? _c("icon-check", { staticClass: "h-4 w-4" })
                                  : _c("icon-x", { staticClass: "h-4 w-4" }),
                              ],
                              1
                            ),
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "text-sm" }, [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "flex flex-col opacity-75 space-y-1",
                              },
                              [
                                _c(
                                  "span",
                                  { staticClass: "text-center" },
                                  [
                                    page.url.published_at
                                      ? [
                                          _vm._v(
                                            "\n                                        " +
                                              _vm._s(
                                                _vm._f("humanFriendlyDateTime")(
                                                  page.url.published_at
                                                )
                                              ) +
                                              "\n                                    "
                                          ),
                                        ]
                                      : [
                                          _vm._v(
                                            "\n                                        -\n                                    "
                                          ),
                                        ],
                                  ],
                                  2
                                ),
                                _vm._v(" "),
                                _c(
                                  "span",
                                  { staticClass: "text-center" },
                                  [
                                    page.url.expired_at
                                      ? [
                                          _vm._v(
                                            "\n                                        " +
                                              _vm._s(
                                                _vm._f("humanFriendlyDateTime")(
                                                  page.url.expired_at
                                                )
                                              ) +
                                              "\n                                    "
                                          ),
                                        ]
                                      : [
                                          _vm._v(
                                            "\n                                        -\n                                    "
                                          ),
                                        ],
                                  ],
                                  2
                                ),
                              ]
                            ),
                          ]),
                          _vm._v(" "),
                          _c(
                            "td",
                            {
                              staticClass:
                                "text-sm text-theme-base-subtle-contrast",
                            },
                            [
                              _vm._v(
                                "\n                            " +
                                  _vm._s(page.layout.name) +
                                  "\n                            "
                              ),
                              _c("br"),
                              _vm._v(
                                "\n                            " +
                                  _vm._s(page.template.name) +
                                  "\n                        "
                              ),
                            ]
                          ),
                          _vm._v(" "),
                          _vm.showPageActions
                            ? _c("td", [
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "flex flex-row items-center justify-end -mx-1",
                                  },
                                  [
                                    _vm.userCan("cms.edit")
                                      ? _c(
                                          "inertia-link",
                                          {
                                            staticClass:
                                              "\n                                        flex flex-row items-center inline-flex mx-1 px-2 py-1 rounded text-theme-base-subtle-contrast text-sm tracking-wide\n                                        focus:outline-none focus:ring\n                                        hover:bg-theme-info hover:text-theme-info-contrast\n                                    ",
                                            attrs: {
                                              href: _vm.$route(
                                                "admin.cms.pages.edit",
                                                page.id
                                              ),
                                              title: "Edit Page",
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
                                    _vm.userCan("cms.delete")
                                      ? _c(
                                          "button",
                                          {
                                            staticClass:
                                              "\n                                        flex flex-row items-center inline-flex mx-1 px-2 py-1 rounded text-theme-base-subtle-contrast text-sm tracking-wide\n                                        focus:outline-none focus:ring\n                                        hover:bg-theme-danger hover:text-theme-danger-contrast\n                                    ",
                                            attrs: { title: "Delete Page" },
                                            on: {
                                              click: function ($event) {
                                                return _vm.checkDelete(page)
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
                        attrs: { pagination: _vm.pages.pagination },
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