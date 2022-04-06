"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_admin_cms_layout_Create_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/cms/layout/Create.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/cms/layout/Create.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var slugify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! slugify */ "./node_modules/slugify/slugify.js");
/* harmony import */ var slugify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(slugify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_core_forms_InputGroup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components/core/forms/InputGroup */ "./resources/js/components/core/forms/InputGroup.vue");
/* harmony import */ var _components_core_forms_SelectGroup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/core/forms/SelectGroup */ "./resources/js/components/core/forms/SelectGroup.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



var CancelToken = axios.CancelToken;
var templateCancelToken = CancelToken.source();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "AdminCmsLayoutCreate",
  components: {
    InputGroup: _components_core_forms_InputGroup__WEBPACK_IMPORTED_MODULE_1__["default"],
    SelectGroup: _components_core_forms_SelectGroup__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  layout: 'admin-layout',
  props: {
    templates: {
      type: Object | Array,
      required: true
    }
  },
  data: function data() {
    return {
      autoUpdateSlug: true,
      formData: {
        name: '',
        slug: '',
        template_id: ''
      },
      isLoadingTemplate: false,
      selectedTemplate: null
    };
  },
  computed: {
    isTemplates: function isTemplates() {
      try {
        return Object.keys(this.templates).length;
      } catch (e) {
        return false;
      }
    },
    selectedTemplateHasFields: function selectedTemplateHasFields() {
      try {
        if (!this.selectedTemplate) {
          return false;
        }

        return this.selectedTemplate.template_fields.length;
      } catch (e) {
        return false;
      }
    },
    selectedTemplateId: function selectedTemplateId() {
      var _this$formData$templa;

      return (_this$formData$templa = this.formData.template_id) !== null && _this$formData$templa !== void 0 ? _this$formData$templa : '';
    }
  },
  methods: {
    cancelLoadTemplate: function cancelLoadTemplate() {
      if (this.isLoadingTemplate) {
        templateCancelToken.cancel('Template load cancelled');
        templateCancelToken = CancelToken.source();
      }
    },
    onNameInput: function onNameInput() {
      if (!this.autoUpdateSlug) {
        return;
      }

      this.formData.slug = this.slugify(this.formData.name);
    },
    onSelectedTemplateIdChange: _.debounce(function () {
      var _this = this;

      this.selectedTemplate = null;
      this.cancelLoadTemplate();

      if (!this.selectedTemplateId) {
        return;
      }

      this.isLoadingTemplate = true;
      axios.get(this.$route('admin.api.cms.templates.show', this.selectedTemplateId)).then(function (response) {
        _this.selectedTemplate = _.cloneDeep(response.data.data);

        _this.setNewTemplateContent();
      })["catch"](function (e) {
        if (!axios.isCancel(e)) {
          _this.$errorToast('Failed to load selected template');

          console.log(e); // TODO: This should go through to a log tracker once available
        }
      })["finally"](function () {
        _this.isLoadingTemplate = false;
      });
    }, 500),
    onSlugBlur: function onSlugBlur() {
      this.formData.slug = this.slugify(this.formData.slug);
    },
    onSlugInput: function onSlugInput() {
      this.autoUpdateSlug = false;
    },
    setNewTemplateContent: function setNewTemplateContent() {
      if (!this.selectedTemplateHasFields) {
        this.formData.content = {};
      } // Get all fields from the template and set the default data


      var new_content = {};

      _.forEach(this.selectedTemplate.template_fields, function (templateField) {
        new_content[templateField.id] = {
          data: '',
          template_field_id: templateField.id
        };
      }); // Replace the existing content


      this.$set(this.formData, 'content', _.cloneDeep(new_content));
    },
    slugify: function slugify(value) {
      if (!value || !value.length) {
        return '';
      }

      return slugify__WEBPACK_IMPORTED_MODULE_0___default()(value, {
        lower: true
      });
    },
    submit: function submit() {
      this.$inertia.post(this.$route('admin.cms.layouts.store'), this.formData);
    }
  },
  watch: {
    selectedTemplateId: {
      handler: 'onSelectedTemplateIdChange'
    }
  }
});

/***/ }),

/***/ "./resources/js/pages/admin/cms/layout/Create.vue":
/*!********************************************************!*\
  !*** ./resources/js/pages/admin/cms/layout/Create.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Create_vue_vue_type_template_id_33ae1fc2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Create.vue?vue&type=template&id=33ae1fc2& */ "./resources/js/pages/admin/cms/layout/Create.vue?vue&type=template&id=33ae1fc2&");
/* harmony import */ var _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Create.vue?vue&type=script&lang=js& */ "./resources/js/pages/admin/cms/layout/Create.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Create_vue_vue_type_template_id_33ae1fc2___WEBPACK_IMPORTED_MODULE_0__.render,
  _Create_vue_vue_type_template_id_33ae1fc2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/admin/cms/layout/Create.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/admin/cms/layout/Create.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/pages/admin/cms/layout/Create.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/cms/layout/Create.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/admin/cms/layout/Create.vue?vue&type=template&id=33ae1fc2&":
/*!***************************************************************************************!*\
  !*** ./resources/js/pages/admin/cms/layout/Create.vue?vue&type=template&id=33ae1fc2& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_33ae1fc2___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_33ae1fc2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_33ae1fc2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Create.vue?vue&type=template&id=33ae1fc2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/cms/layout/Create.vue?vue&type=template&id=33ae1fc2&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/cms/layout/Create.vue?vue&type=template&id=33ae1fc2&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/cms/layout/Create.vue?vue&type=template&id=33ae1fc2& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "form",
    {
      staticClass: "max-w-5xl mx-auto",
      attrs: { autocomplete: "off" },
      on: {
        submit: function ($event) {
          $event.preventDefault()
          return _vm.submit.apply(null, arguments)
        },
      },
    },
    [
      _vm.userCan("cms_advanced.create")
        ? _c(
            "div",
            { staticClass: "flex flex-row items-center mb-6" },
            [
              _c("h1", { staticClass: "font-medium mr-auto text-lg" }, [
                _vm._v("\n            Create Layout\n        "),
              ]),
              _vm._v(" "),
              _vm.userCan("cms_advanced.view")
                ? _c(
                    "inertia-link",
                    {
                      staticClass:
                        "\n                button button-default-responsive button-primary-subtle\n                flex flex-row items-center mr-2\n            ",
                      attrs: { href: _vm.$route("admin.cms.layouts.index") },
                    },
                    [
                      _c("icon-chevron-left", { staticClass: "w-5 md:mr-2" }),
                      _vm._v(" "),
                      _c("span", { staticClass: "hidden md:inline" }, [
                        _vm._v("\n                Back\n            "),
                      ]),
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass:
                    "\n                button button-default-responsive button-primary\n                flex flex-row items-center\n            ",
                  attrs: { type: "submit" },
                },
                [
                  _c("icon-save", { staticClass: "w-5 md:mr-2" }),
                  _vm._v(" "),
                  _c("span", { staticClass: "hidden md:inline" }, [
                    _vm._v("\n                Create Layout\n            "),
                  ]),
                ],
                1
              ),
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _c("div", { staticClass: "bg-white py-6 shadow-subtle rounded-lg" }, [
        _c(
          "div",
          { staticClass: "block px-6 w-full" },
          [
            _c("select-group", {
              attrs: {
                "error-message": _vm.getPageErrorMessage("template_id"),
                "label-text": "Template",
                "input-any-option-enabled": true,
                "input-any-option-label": "Please select a template",
                "input-autofocus": true,
                "input-id": "template_id",
                "input-name": "template_id",
                "input-options": _vm.isTemplates ? _vm.templates : {},
                "input-option-label-key": "name",
                "input-option-value-key": "id",
                "input-required": true,
              },
              on: {
                errorHidden: function ($event) {
                  return _vm.clearPageErrorMessage("template_id")
                },
              },
              model: {
                value: _vm.formData.template_id,
                callback: function ($$v) {
                  _vm.$set(_vm.formData, "template_id", $$v)
                },
                expression: "formData.template_id",
              },
            }),
            _vm._v(" "),
            _c("input-group", {
              staticClass: "mt-4",
              attrs: {
                "error-message": _vm.getPageErrorMessage("name"),
                "input-autocomplete": "layout_name",
                "input-id": "name",
                "input-name": "name",
                "input-required": true,
                "input-type": "text",
                "label-text": "Layout Name",
              },
              on: {
                errorHidden: function ($event) {
                  return _vm.clearPageErrorMessage("name")
                },
                input: _vm.onNameInput,
              },
              model: {
                value: _vm.formData.name,
                callback: function ($$v) {
                  _vm.$set(_vm.formData, "name", $$v)
                },
                expression: "formData.name",
              },
            }),
            _vm._v(" "),
            _c("input-group", {
              staticClass: "mt-4",
              attrs: {
                "error-message": _vm.getPageErrorMessage("slug"),
                "input-autocomplete": "layout_slug",
                "input-id": "slug",
                "input-name": "slug",
                "input-required": true,
                "input-type": "text",
                "label-text": "Layout Slug",
              },
              on: {
                blur: _vm.onSlugBlur,
                errorHidden: function ($event) {
                  return _vm.clearPageErrorMessage("slug")
                },
                input: _vm.onSlugInput,
              },
              model: {
                value: _vm.formData.slug,
                callback: function ($$v) {
                  _vm.$set(_vm.formData, "slug", $$v)
                },
                expression: "formData.slug",
              },
            }),
          ],
          1
        ),
      ]),
      _vm._v(" "),
      !this.isLoadingTemplate && _vm.selectedTemplateHasFields
        ? _c(
            "div",
            { staticClass: "bg-white mt-6 px-4 py-6 shadow-subtle rounded-lg" },
            [
              _c("p", { staticClass: "text-lg" }, [_vm._v("Fields")]),
              _vm._v(" "),
              _c("content-editor", {
                staticClass: "mt-4",
                attrs: {
                  "template-fields": _vm.selectedTemplate.template_fields,
                },
                model: {
                  value: _vm.formData.content,
                  callback: function ($$v) {
                    _vm.$set(_vm.formData, "content", $$v)
                  },
                  expression: "formData.content",
                },
              }),
            ],
            1
          )
        : _vm._e(),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);