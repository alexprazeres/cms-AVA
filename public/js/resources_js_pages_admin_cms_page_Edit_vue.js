"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_admin_cms_page_Edit_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/cms/metadata/MetadataEditor.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/cms/metadata/MetadataEditor.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_forms_InputGroup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/forms/InputGroup */ "./resources/js/components/core/forms/InputGroup.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'MetadataEditor',
  components: {
    InputGroup: _core_forms_InputGroup__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  model: {
    prop: 'metadata'
  },
  props: {
    metadata: {
      required: true,
      type: Object | null
    }
  },
  data: function data() {
    return {
      editableMetadata: {
        canonical: '',
        description: '',
        title: '',
        og_description: '',
        og_image: '',
        og_title: '',
        og_type: '',
        og_url: ''
      },
      tab_key_meta: 'meta',
      tab_key_open_graph: 'og',
      tab_selected: 'meta'
    };
  },
  created: function created() {
    try {
      if (this.metadata && Object.keys(this.metadata).length) {
        this.editableMetadata = lodash__WEBPACK_IMPORTED_MODULE_0___default().cloneDeep(this.metadata);
      }
    } catch (e) {
      return;
    }
  },
  methods: {
    getTabClass: function getTabClass(key) {
      var tabClass = 'border-b-2 border-white pb-1 text-lg focus:outline-none ';

      if (this.tab_selected === key) {
        tabClass += 'text-theme-primary focus:border-theme-primary hover:border-theme-primary';
      } else {
        tabClass += 'text-theme-base-subtle-contrast focus:border-theme-base-subtle-contrast hover:border-theme-base-subtle-contrast';
      }

      return tabClass;
    },
    onEditableMetadataUpdate: lodash__WEBPACK_IMPORTED_MODULE_0___default().debounce(function () {
      this.$emit('input', this.editableMetadata);
    }, 100),
    onOgImageFileManagerFileSelected: function onOgImageFileManagerFileSelected(file) {
      try {
        this.editableMetadata.og_image = file.url;
      } catch (e) {
        this.$errorToast(e);
      }
    },
    openOgImageFileManagerModal: function openOgImageFileManagerModal() {
      this.$store.commit('openFileManagerModel', this.onOgImageFileManagerFileSelected);
    },
    selectTab: function selectTab(key) {
      this.tab_selected = key;
    }
  },
  watch: {
    editableMetadata: {
      deep: true,
      handler: 'onEditableMetadataUpdate'
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/cms/urls/UrlEditor.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/cms/urls/UrlEditor.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var slugify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! slugify */ "./node_modules/slugify/slugify.js");
/* harmony import */ var slugify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(slugify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_forms_DateTimePickerGroup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/forms/DateTimePickerGroup */ "./resources/js/components/core/forms/DateTimePickerGroup.vue");
/* harmony import */ var _core_forms_InlineCheckboxGroup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/forms/InlineCheckboxGroup */ "./resources/js/components/core/forms/InlineCheckboxGroup.vue");
/* harmony import */ var _core_forms_InputGroup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/forms/InputGroup */ "./resources/js/components/core/forms/InputGroup.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
var urlCheckCancelToken = CancelToken.source();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "UrlEditor",
  components: {
    DateTimePickerGroup: _core_forms_DateTimePickerGroup__WEBPACK_IMPORTED_MODULE_2__["default"],
    InlineCheckboxGroup: _core_forms_InlineCheckboxGroup__WEBPACK_IMPORTED_MODULE_3__["default"],
    InputGroup: _core_forms_InputGroup__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  model: {
    prop: 'urlData'
  },
  props: {
    computedUrl: {
      "default": '',
      type: String
    },
    parentUrl: {
      "default": null,
      type: String | null
    },
    urlData: {
      required: true,
      type: Object | null
    }
  },
  data: function data() {
    return {
      autoUpdateUrl: true,
      editableUrlData: {
        expired_at: null,
        is_enabled: false,
        published_at: null,
        url_main: ''
      },
      isUrlChecked: false,
      isUrlCheckLoading: false,
      isUrlAvailable: false,
      urlInput: ''
    };
  },
  computed: {
    urlFull: function urlFull() {
      var url = '';

      if (this.parentUrl && this.parentUrl.length) {
        url += this.parentUrl;
      }

      url += this.urlInputSlugified;
      return url.split('//').join('/');
    },
    urlInputSlugified: function urlInputSlugified() {
      if (!this.urlInput) {
        return '/';
      }

      var url = this.urlInput;
      url.trim();

      if (!url.length) {
        return '/';
      }

      url = slugify__WEBPACK_IMPORTED_MODULE_1___default()(url, {
        lower: true
      });

      if (url.indexOf('/') !== 0) {
        url = '/' + url;
      }

      return url;
    }
  },
  created: function created() {
    try {
      if (this.urlData && Object.keys(this.urlData).length) {
        var _this$editableUrlData;

        this.editableUrlData = lodash__WEBPACK_IMPORTED_MODULE_0___default().cloneDeep(this.urlData);
        this.urlInput = (_this$editableUrlData = this.editableUrlData.url_main) !== null && _this$editableUrlData !== void 0 ? _this$editableUrlData : '';
      }

      if (this.urlInput && this.urlInput !== '') {
        this.autoUpdateUrl = false;
      }
    } catch (e) {
      return;
    }
  },
  methods: {
    cancelUrlCheck: function cancelUrlCheck() {
      if (this.isUrlCheckLoading) {
        urlCheckCancelToken.cancel('URL check cancelled');
        urlCheckCancelToken = CancelToken.source();
      }
    },
    checkUrlIsAvailable: lodash__WEBPACK_IMPORTED_MODULE_0___default().debounce(function () {
      var _this = this;

      this.isUrlChecked = false;
      this.cancelUrlCheck();
      this.isUrlChecked = false;
      this.isUrlAvailable = false;

      if (!this.urlInput.length) {
        return;
      }

      this.isUrlCheckLoading = true;
      var params = {
        url: this.urlFull,
        url_id: this.urlData.id ? this.urlData.id : null
      };
      axios.get(this.$route('admin.api.cms.urls.available'), {
        params: params,
        cancelToken: urlCheckCancelToken.token
      }).then(function (response) {
        _this.isUrlCheckLoading = false;
        _this.isUrlChecked = true;
        _this.isUrlAvailable = response.data;
      })["catch"](function (error) {
        if (!axios.isCancel(error)) {
          _this.isUrlCheckLoading = false;

          _this.$errorToast('Failed to check URL availability');
        }
      });
    }, 500),
    onComputedUrlUpdate: function onComputedUrlUpdate() {
      if (!this.autoUpdateUrl) {
        return;
      }

      this.updateUrl(this.computedUrl);
    },
    onEditableUrlUpdate: lodash__WEBPACK_IMPORTED_MODULE_0___default().debounce(function () {
      this.$emit('input', this.editableUrlData);
    }, 100),
    onIsUrlAvailableUpdate: function onIsUrlAvailableUpdate() {
      this.$emit('isAvailable', this.isUrlAvailable);
    },
    onUrlInputInput: function onUrlInputInput() {
      this.autoUpdateUrl = false;
      this.isUrlChecked = false;
    },
    onUrlInputUpdate: lodash__WEBPACK_IMPORTED_MODULE_0___default().debounce(function () {
      if (!this.urlInput.length) {
        return;
      }

      this.updateUrl(this.urlInput);
    }, 100),
    updateUrl: function updateUrl(url) {
      var formatted = url;
      var startsWithSlash = formatted.charAt(0) === '/';
      formatted = slugify__WEBPACK_IMPORTED_MODULE_1___default()(formatted);

      if (startsWithSlash) {
        formatted = '/' + formatted;
      }

      if (this.urlInput !== formatted) {
        this.urlInput = formatted;
        this.isUrlChecked = false;
      }

      this.$set(this.editableUrlData, 'url_main', formatted);
      this.checkUrlIsAvailable();
    }
  },
  watch: {
    computedUrl: {
      handler: 'onComputedUrlUpdate'
    },
    editableUrlData: {
      deep: true,
      handler: 'onEditableUrlUpdate'
    },
    isUrlAvailable: {
      handler: 'onIsUrlAvailableUpdate'
    },
    urlFull: {
      handler: 'checkUrlIsAvailable'
    },
    urlInput: {
      handler: 'onUrlInputUpdate'
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/core/forms/DateTimePickerGroup.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/core/forms/DateTimePickerGroup.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mixins_admin_cms_forms_base_form_group__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../mixins/admin/cms/forms/base-form-group */ "./resources/js/mixins/admin/cms/forms/base-form-group.js");
/* harmony import */ var _partials_FormFieldError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./partials/FormFieldError */ "./resources/js/components/core/forms/partials/FormFieldError.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "DateTimePickerGroup",
  mixins: [_mixins_admin_cms_forms_base_form_group__WEBPACK_IMPORTED_MODULE_0__.baseFormGroupMixin],
  components: {
    FormFieldError: _partials_FormFieldError__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: {
    inputClass: {
      "default": '',
      type: String
    },
    inputFormat: {
      "default": 'DD/MM/YYYY HH:mm',
      type: String
    },
    inputPlaceholder: {
      "default": 'Please select a date',
      type: String
    },
    inputTimeTitleFormat: {
      "default": 'DD/MM/YYYY HH:mm',
      type: String
    },
    inputTitleFormat: {
      "default": 'DD/MM/YYYY HH:mm',
      type: String
    },
    inputType: {
      "default": 'datetime',
      type: String
    },
    inputValueType: {
      "default": 'YYYY-MM-DD HH:mm',
      type: String
    }
  },
  data: function data() {
    return {
      editableInput: '',
      isInitialised: false
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.editableInput = this.inputValue;
    this.$nextTick(function () {
      _this.isInitialised = true;
    });
  },
  methods: {
    onInput: function onInput() {
      if (!this.isInitialised) {
        return;
      }

      this.$emit('input', this.editableInput);

      if (this.errorHideOnInput) {
        this.hideError = true;
      }
    },
    onInputValueChange: function onInputValueChange() {
      if (this.inputValue !== this.editableInput) {
        this.editableInput = this.inputValue;
      }
    }
  },
  watch: {
    editableInput: {
      handler: "onInput"
    },
    inputValue: {
      handler: "onInputValueChange"
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/core/forms/InlineCheckboxGroup.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/core/forms/InlineCheckboxGroup.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mixins_admin_cms_forms_base_form_group__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../mixins/admin/cms/forms/base-form-group */ "./resources/js/mixins/admin/cms/forms/base-form-group.js");
/* harmony import */ var _mixins_admin_cms_forms_checkbox_form_group__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../mixins/admin/cms/forms/checkbox-form-group */ "./resources/js/mixins/admin/cms/forms/checkbox-form-group.js");
/* harmony import */ var _partials_FormFieldError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./partials/FormFieldError */ "./resources/js/components/core/forms/partials/FormFieldError.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "InlineCheckboxGroup",
  mixins: [_mixins_admin_cms_forms_base_form_group__WEBPACK_IMPORTED_MODULE_0__.baseFormGroupMixin, _mixins_admin_cms_forms_checkbox_form_group__WEBPACK_IMPORTED_MODULE_1__.checkboxFormGroupMixin],
  components: {
    FormFieldError: _partials_FormFieldError__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  props: {
    inputClass: {
      "default": 'cursor-pointer form-checkbox h-5 mr-2 rounded text-theme-primary w-5 focus:border-theme-primary focus:outline-none focus:ring focus:ring-primary',
      type: String
    },
    labelClass: {
      "default": 'cursor-pointer flex-1 font-medium select-none text-theme-base-contrast text-sm tracking-wider',
      type: String
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/cms/page/Edit.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/cms/page/Edit.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var slugify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! slugify */ "./node_modules/slugify/slugify.js");
/* harmony import */ var slugify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(slugify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_core_forms_InputGroup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/core/forms/InputGroup */ "./resources/js/components/core/forms/InputGroup.vue");
/* harmony import */ var _components_admin_cms_metadata_MetadataEditor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/admin/cms/metadata/MetadataEditor */ "./resources/js/components/admin/cms/metadata/MetadataEditor.vue");
/* harmony import */ var _components_core_forms_SelectGroup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/core/forms/SelectGroup */ "./resources/js/components/core/forms/SelectGroup.vue");
/* harmony import */ var _components_admin_cms_urls_UrlEditor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/admin/cms/urls/UrlEditor */ "./resources/js/components/admin/cms/urls/UrlEditor.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "AdminCmsPageEdit",
  components: {
    InputGroup: _components_core_forms_InputGroup__WEBPACK_IMPORTED_MODULE_2__["default"],
    MetadataEditor: _components_admin_cms_metadata_MetadataEditor__WEBPACK_IMPORTED_MODULE_3__["default"],
    SelectGroup: _components_core_forms_SelectGroup__WEBPACK_IMPORTED_MODULE_4__["default"],
    UrlEditor: _components_admin_cms_urls_UrlEditor__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  layout: 'admin-layout',
  props: {
    'layouts': {
      type: Object,
      required: true
    },
    'page': {
      type: Object,
      required: true
    },
    'parentPages': {
      type: Object | Array | null,
      required: true
    },
    'templates': {
      type: Object,
      required: true
    }
  },
  data: function data() {
    return {
      autoUpdateSlug: false,
      formData: {},
      isInitialisedTemplate: false,
      isInitialisedContent: false,
      isInitialised_url: false,
      isLoadingTemplate: false,
      isUrlAvailable: false,
      selectedTemplate: null
    };
  },
  computed: {
    parentPagesUrls: function parentPagesUrls() {
      try {
        if (!Object.keys(this.parentPages).length) {
          return null;
        }

        var pages = {};

        lodash__WEBPACK_IMPORTED_MODULE_0___default().forEach(this.parentPages, function (page, key) {
          pages[key] = {
            id: page.id,
            label: page.name + ' => ' + page.url.url_full,
            url_full: page.url.url_full,
            url_main: page.url.url_main
          };
        });

        return pages;
      } catch (e) {
        return null;
      }
    },
    parentPagesMap: function parentPagesMap() {
      try {
        if (!Object.keys(this.parentPages).length) {
          return null;
        }

        var map = {};

        lodash__WEBPACK_IMPORTED_MODULE_0___default().forEach(this.parentPages, function (page, key) {
          map[page.id] = key;
        });

        return map;
      } catch (e) {
        return null;
      }
    },
    selectedParentPage: function selectedParentPage() {
      try {
        if (!this.formData.parent_id) {
          return null;
        }

        return this.parentPages[this.parentPagesMap[this.formData.parent_id]];
      } catch (e) {
        return null;
      }
    },
    selectedParentPageUrl: function selectedParentPageUrl() {
      try {
        return this.selectedParentPage.url.url_full;
      } catch (e) {
        return null;
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
  created: function created() {
    this.formData = {
      content: {},
      id: this.page.id,
      layout_id: this.page.layout_id,
      metadata: lodash__WEBPACK_IMPORTED_MODULE_0___default().cloneDeep(this.page.metadata),
      name: this.page.name,
      parent_id: this.page.parent_id,
      slug: this.page.slug,
      template_id: this.page.template_id,
      url: {}
    };
    this.selectedTemplate = lodash__WEBPACK_IMPORTED_MODULE_0___default().cloneDeep(this.page.template);
    this.setInitialContent();
    this.setInitialUrl();
  },
  methods: {
    cancelLoadTemplate: function cancelLoadTemplate() {
      if (this.isLoadingTemplate) {
        templateCancelToken.cancel('Template load cancelled');
        templateCancelToken = CancelToken.source();
      }
    },
    doesObjectHaveKeys: function doesObjectHaveKeys(obj) {
      try {
        return Object.keys(obj).length;
      } catch (e) {
        return false;
      }
    },
    pageHasContentField: function pageHasContentField(template_field_id) {
      try {
        return this.page.content.hasOwnProperty(template_field_id);
      } catch (e) {
        return false;
      }
    },
    onNameInput: function onNameInput() {
      if (!this.autoUpdateSlug) {
        return;
      }

      this.formData.slug = this.slugify(this.formData.name);
    },
    onSelectedTemplateIdChange: lodash__WEBPACK_IMPORTED_MODULE_0___default().debounce(function () {
      var _this = this;

      // The template id is set by default, so no need to re-load initially
      if (!this.isInitialisedTemplate) {
        this.isInitialisedTemplate = true;
        return;
      }

      this.selectedTemplate = null;
      this.cancelLoadTemplate();

      if (!this.selectedTemplateId) {
        return;
      }

      this.isLoadingTemplate = true;
      axios.get(this.$route('admin.api.cms.templates.show', this.selectedTemplateId)).then(function (response) {
        _this.selectedTemplate = lodash__WEBPACK_IMPORTED_MODULE_0___default().cloneDeep(response.data.data);

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
    onUrlIsAvailableEvent: function onUrlIsAvailableEvent(isAvailable) {
      this.isUrlAvailable = isAvailable;
    },
    setInitialContent: function setInitialContent() {
      var _this2 = this;

      // This is a fix / hack to prevent an empty object from becoming an array.
      var content = {};

      if (this.doesObjectHaveKeys(this.page.content)) {
        content = lodash__WEBPACK_IMPORTED_MODULE_0___default().cloneDeep(this.page.content);
      } // Set the defaults for any missing content


      lodash__WEBPACK_IMPORTED_MODULE_0___default().forEach(this.selectedTemplate.template_fields, function (templateField) {
        if (!_this2.pageHasContentField(templateField.id)) {
          content[templateField.id] = {
            data: '',
            template_field_id: templateField.id
          };
        }
      });

      this.formData.content = lodash__WEBPACK_IMPORTED_MODULE_0___default().cloneDeep(content);
      this.isInitialisedContent = true;
    },
    setInitialUrl: function setInitialUrl() {
      // This is a fix / hack to prevent an empty object from becoming an array.
      var url = {};

      if (this.doesObjectHaveKeys(this.page.url)) {
        url = lodash__WEBPACK_IMPORTED_MODULE_0___default().cloneDeep(this.page.url);
      }

      this.formData.url = lodash__WEBPACK_IMPORTED_MODULE_0___default().cloneDeep(url);
      this.isInitialised_url = true;
    },
    setNewTemplateContent: function setNewTemplateContent() {
      if (!this.selectedTemplateHasFields) {
        this.formData.content = {};
      } // Get all fields from the template and set the default data


      var new_content = {};

      lodash__WEBPACK_IMPORTED_MODULE_0___default().forEach(this.selectedTemplate.template_fields, function (templateField) {
        new_content[templateField.id] = {
          data: '',
          template_field_id: templateField.id
        };
      }); // Replace the existing content


      this.$set(this.formData, 'content', lodash__WEBPACK_IMPORTED_MODULE_0___default().cloneDeep(new_content));
    },
    slugify: function slugify(value) {
      if (!value || !value.length) {
        return '';
      }

      return slugify__WEBPACK_IMPORTED_MODULE_1___default()(value, {
        lower: true
      });
    },
    submit: function submit() {
      if (!this.isUrlAvailable) {
        this.$errorToast('Unable to save page. URL is unavailable');
        return;
      }

      this.$inertia.put(this.$route('admin.cms.pages.update', this.page.id), this.formData);
    }
  },
  watch: {
    selectedTemplateId: {
      handler: 'onSelectedTemplateIdChange'
    }
  }
});

/***/ }),

/***/ "./resources/js/mixins/admin/cms/forms/checkbox-form-group.js":
/*!********************************************************************!*\
  !*** ./resources/js/mixins/admin/cms/forms/checkbox-form-group.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkboxFormGroupMixin": () => (/* binding */ checkboxFormGroupMixin)
/* harmony export */ });
var checkboxFormGroupMixin = {
  props: {
    inputValue: {
      "default": false,
      type: String | Number | Boolean
    },
    inputValueFalse: {
      "default": false,
      type: String | Number | Boolean
    },
    inputValueTrue: {
      "default": true,
      type: String | Number | Boolean
    }
  },
  data: function data() {
    return {
      editableValue: false
    };
  },
  computed: {
    isChecked: function isChecked() {
      return this.editableValue === this.inputValueTrue;
    }
  },
  mounted: function mounted() {
    this.editableValue = this.inputValue;
    this.autofocus();
  },
  methods: {
    onInput: function onInput() {
      this.$emit('input', this.isChecked ? this.inputValueTrue : this.inputValueFalse);

      if (this.errorHideOnInput) {
        this.hideError = true;
      }
    }
  }
};

/***/ }),

/***/ "./resources/js/components/admin/cms/metadata/MetadataEditor.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/components/admin/cms/metadata/MetadataEditor.vue ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MetadataEditor_vue_vue_type_template_id_e03ef98a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MetadataEditor.vue?vue&type=template&id=e03ef98a& */ "./resources/js/components/admin/cms/metadata/MetadataEditor.vue?vue&type=template&id=e03ef98a&");
/* harmony import */ var _MetadataEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MetadataEditor.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/cms/metadata/MetadataEditor.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MetadataEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MetadataEditor_vue_vue_type_template_id_e03ef98a___WEBPACK_IMPORTED_MODULE_0__.render,
  _MetadataEditor_vue_vue_type_template_id_e03ef98a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/cms/metadata/MetadataEditor.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/cms/urls/UrlEditor.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/admin/cms/urls/UrlEditor.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UrlEditor_vue_vue_type_template_id_40670842___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UrlEditor.vue?vue&type=template&id=40670842& */ "./resources/js/components/admin/cms/urls/UrlEditor.vue?vue&type=template&id=40670842&");
/* harmony import */ var _UrlEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UrlEditor.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/cms/urls/UrlEditor.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UrlEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UrlEditor_vue_vue_type_template_id_40670842___WEBPACK_IMPORTED_MODULE_0__.render,
  _UrlEditor_vue_vue_type_template_id_40670842___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/cms/urls/UrlEditor.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/core/forms/DateTimePickerGroup.vue":
/*!********************************************************************!*\
  !*** ./resources/js/components/core/forms/DateTimePickerGroup.vue ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DateTimePickerGroup_vue_vue_type_template_id_689a1cde___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DateTimePickerGroup.vue?vue&type=template&id=689a1cde& */ "./resources/js/components/core/forms/DateTimePickerGroup.vue?vue&type=template&id=689a1cde&");
/* harmony import */ var _DateTimePickerGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DateTimePickerGroup.vue?vue&type=script&lang=js& */ "./resources/js/components/core/forms/DateTimePickerGroup.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DateTimePickerGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DateTimePickerGroup_vue_vue_type_template_id_689a1cde___WEBPACK_IMPORTED_MODULE_0__.render,
  _DateTimePickerGroup_vue_vue_type_template_id_689a1cde___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/core/forms/DateTimePickerGroup.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/core/forms/InlineCheckboxGroup.vue":
/*!********************************************************************!*\
  !*** ./resources/js/components/core/forms/InlineCheckboxGroup.vue ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _InlineCheckboxGroup_vue_vue_type_template_id_5460ad7e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InlineCheckboxGroup.vue?vue&type=template&id=5460ad7e& */ "./resources/js/components/core/forms/InlineCheckboxGroup.vue?vue&type=template&id=5460ad7e&");
/* harmony import */ var _InlineCheckboxGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InlineCheckboxGroup.vue?vue&type=script&lang=js& */ "./resources/js/components/core/forms/InlineCheckboxGroup.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _InlineCheckboxGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _InlineCheckboxGroup_vue_vue_type_template_id_5460ad7e___WEBPACK_IMPORTED_MODULE_0__.render,
  _InlineCheckboxGroup_vue_vue_type_template_id_5460ad7e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/core/forms/InlineCheckboxGroup.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/admin/cms/page/Edit.vue":
/*!****************************************************!*\
  !*** ./resources/js/pages/admin/cms/page/Edit.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Edit_vue_vue_type_template_id_667201cb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=667201cb& */ "./resources/js/pages/admin/cms/page/Edit.vue?vue&type=template&id=667201cb&");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js& */ "./resources/js/pages/admin/cms/page/Edit.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Edit_vue_vue_type_template_id_667201cb___WEBPACK_IMPORTED_MODULE_0__.render,
  _Edit_vue_vue_type_template_id_667201cb___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/admin/cms/page/Edit.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/cms/metadata/MetadataEditor.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/admin/cms/metadata/MetadataEditor.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MetadataEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MetadataEditor.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/cms/metadata/MetadataEditor.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MetadataEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/cms/urls/UrlEditor.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/admin/cms/urls/UrlEditor.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UrlEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UrlEditor.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/cms/urls/UrlEditor.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UrlEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/core/forms/DateTimePickerGroup.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/core/forms/DateTimePickerGroup.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DateTimePickerGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DateTimePickerGroup.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/core/forms/DateTimePickerGroup.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DateTimePickerGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/core/forms/InlineCheckboxGroup.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/core/forms/InlineCheckboxGroup.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InlineCheckboxGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./InlineCheckboxGroup.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/core/forms/InlineCheckboxGroup.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InlineCheckboxGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/admin/cms/page/Edit.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/pages/admin/cms/page/Edit.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/cms/page/Edit.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/cms/metadata/MetadataEditor.vue?vue&type=template&id=e03ef98a&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/admin/cms/metadata/MetadataEditor.vue?vue&type=template&id=e03ef98a& ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MetadataEditor_vue_vue_type_template_id_e03ef98a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MetadataEditor_vue_vue_type_template_id_e03ef98a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MetadataEditor_vue_vue_type_template_id_e03ef98a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MetadataEditor.vue?vue&type=template&id=e03ef98a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/cms/metadata/MetadataEditor.vue?vue&type=template&id=e03ef98a&");


/***/ }),

/***/ "./resources/js/components/admin/cms/urls/UrlEditor.vue?vue&type=template&id=40670842&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/admin/cms/urls/UrlEditor.vue?vue&type=template&id=40670842& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UrlEditor_vue_vue_type_template_id_40670842___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UrlEditor_vue_vue_type_template_id_40670842___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UrlEditor_vue_vue_type_template_id_40670842___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UrlEditor.vue?vue&type=template&id=40670842& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/cms/urls/UrlEditor.vue?vue&type=template&id=40670842&");


/***/ }),

/***/ "./resources/js/components/core/forms/DateTimePickerGroup.vue?vue&type=template&id=689a1cde&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/core/forms/DateTimePickerGroup.vue?vue&type=template&id=689a1cde& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DateTimePickerGroup_vue_vue_type_template_id_689a1cde___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DateTimePickerGroup_vue_vue_type_template_id_689a1cde___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DateTimePickerGroup_vue_vue_type_template_id_689a1cde___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DateTimePickerGroup.vue?vue&type=template&id=689a1cde& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/core/forms/DateTimePickerGroup.vue?vue&type=template&id=689a1cde&");


/***/ }),

/***/ "./resources/js/components/core/forms/InlineCheckboxGroup.vue?vue&type=template&id=5460ad7e&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/core/forms/InlineCheckboxGroup.vue?vue&type=template&id=5460ad7e& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InlineCheckboxGroup_vue_vue_type_template_id_5460ad7e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InlineCheckboxGroup_vue_vue_type_template_id_5460ad7e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InlineCheckboxGroup_vue_vue_type_template_id_5460ad7e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./InlineCheckboxGroup.vue?vue&type=template&id=5460ad7e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/core/forms/InlineCheckboxGroup.vue?vue&type=template&id=5460ad7e&");


/***/ }),

/***/ "./resources/js/pages/admin/cms/page/Edit.vue?vue&type=template&id=667201cb&":
/*!***********************************************************************************!*\
  !*** ./resources/js/pages/admin/cms/page/Edit.vue?vue&type=template&id=667201cb& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_667201cb___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_667201cb___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_667201cb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Edit.vue?vue&type=template&id=667201cb& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/cms/page/Edit.vue?vue&type=template&id=667201cb&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/cms/metadata/MetadataEditor.vue?vue&type=template&id=e03ef98a&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/cms/metadata/MetadataEditor.vue?vue&type=template&id=e03ef98a& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
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
    "div",
    [
      _c("div", { staticClass: "flex flex-row space-x-4" }, [
        _c(
          "button",
          {
            class: _vm.getTabClass(_vm.tab_key_meta),
            attrs: { type: "button" },
            on: {
              click: function ($event) {
                return _vm.selectTab(_vm.tab_key_meta)
              },
            },
          },
          [_vm._v("\n            Metadata\n        ")]
        ),
        _vm._v(" "),
        _c(
          "button",
          {
            class: _vm.getTabClass(_vm.tab_key_open_graph),
            attrs: { type: "button" },
            on: {
              click: function ($event) {
                return _vm.selectTab(_vm.tab_key_open_graph)
              },
            },
          },
          [_vm._v("\n            Open Graph Data\n        ")]
        ),
      ]),
      _vm._v(" "),
      _c("transition", { attrs: { name: "slide-left", mode: "out-in" } }, [
        _vm.tab_selected === _vm.tab_key_meta
          ? _c(
              "div",
              { key: "tab_key_meta" },
              [
                _c("input-group", {
                  staticClass: "mt-4",
                  attrs: {
                    "error-message": _vm.getPageErrorMessage("metadata.title"),
                    "input-id": "metadata_title",
                    "input-name": "metadata_title",
                    "input-type": "text",
                    "label-text": "Title",
                  },
                  on: {
                    errorHidden: function ($event) {
                      return _vm.clearPageErrorMessage("metadata.title")
                    },
                  },
                  model: {
                    value: _vm.editableMetadata.title,
                    callback: function ($$v) {
                      _vm.$set(_vm.editableMetadata, "title", $$v)
                    },
                    expression: "editableMetadata.title",
                  },
                }),
                _vm._v(" "),
                _c("input-group", {
                  staticClass: "mt-4",
                  attrs: {
                    "error-message": _vm.getPageErrorMessage(
                      "metadata.description"
                    ),
                    "input-id": "metadata_description",
                    "input-name": "metadata_description",
                    "input-type": "text",
                    "label-text": "Meta Description",
                  },
                  on: {
                    errorHidden: function ($event) {
                      return _vm.clearPageErrorMessage("metadata.description")
                    },
                  },
                  model: {
                    value: _vm.editableMetadata.description,
                    callback: function ($$v) {
                      _vm.$set(_vm.editableMetadata, "description", $$v)
                    },
                    expression: "editableMetadata.description",
                  },
                }),
                _vm._v(" "),
                _c("input-group", {
                  staticClass: "mt-4",
                  attrs: {
                    "error-message":
                      _vm.getPageErrorMessage("metadata.canonical"),
                    "input-id": "metadata_canonical",
                    "input-name": "metadata_canonical",
                    "input-type": "text",
                    "label-text": "Canonical",
                  },
                  on: {
                    errorHidden: function ($event) {
                      return _vm.clearPageErrorMessage("metadata.canonical")
                    },
                  },
                  model: {
                    value: _vm.editableMetadata.canonical,
                    callback: function ($$v) {
                      _vm.$set(_vm.editableMetadata, "canonical", $$v)
                    },
                    expression: "editableMetadata.canonical",
                  },
                }),
              ],
              1
            )
          : _vm._e(),
        _vm._v(" "),
        _vm.tab_selected === _vm.tab_key_open_graph
          ? _c(
              "div",
              { key: "tab_key_open_graph" },
              [
                _c("input-group", {
                  staticClass: "mt-4",
                  attrs: {
                    "error-message":
                      _vm.getPageErrorMessage("metadata.og_title"),
                    "input-id": "metadata_og_title",
                    "input-name": "metadata_og_title",
                    "input-type": "text",
                    "label-text": "OG Title",
                  },
                  on: {
                    errorHidden: function ($event) {
                      return _vm.clearPageErrorMessage("metadata.og_title")
                    },
                  },
                  model: {
                    value: _vm.editableMetadata.og_title,
                    callback: function ($$v) {
                      _vm.$set(_vm.editableMetadata, "og_title", $$v)
                    },
                    expression: "editableMetadata.og_title",
                  },
                }),
                _vm._v(" "),
                _c("input-group", {
                  staticClass: "mt-4",
                  attrs: {
                    "error-message": _vm.getPageErrorMessage(
                      "metadata.og_description"
                    ),
                    "input-id": "metadata_og_description",
                    "input-name": "metadata_og_description",
                    "input-type": "text",
                    "label-text": "OG Description",
                  },
                  on: {
                    errorHidden: function ($event) {
                      return _vm.clearPageErrorMessage(
                        "metadata.og_description"
                      )
                    },
                  },
                  model: {
                    value: _vm.editableMetadata.og_description,
                    callback: function ($$v) {
                      _vm.$set(_vm.editableMetadata, "og_description", $$v)
                    },
                    expression: "editableMetadata.og_description",
                  },
                }),
                _vm._v(" "),
                _c("input-group", {
                  staticClass: "mt-4",
                  attrs: {
                    "error-message":
                      _vm.getPageErrorMessage("metadata.og_type"),
                    "input-id": "metadata_og_type",
                    "input-name": "metadata_og_type",
                    "input-type": "text",
                    "label-text": "OG Type",
                  },
                  on: {
                    errorHidden: function ($event) {
                      return _vm.clearPageErrorMessage("metadata.og_type")
                    },
                  },
                  model: {
                    value: _vm.editableMetadata.og_type,
                    callback: function ($$v) {
                      _vm.$set(_vm.editableMetadata, "og_type", $$v)
                    },
                    expression: "editableMetadata.og_type",
                  },
                }),
                _vm._v(" "),
                _c("input-group", {
                  staticClass: "mt-4",
                  attrs: {
                    "error-message": _vm.getPageErrorMessage("metadata.og_url"),
                    "input-id": "metadata_og_url",
                    "input-name": "metadata_og_url",
                    "input-type": "text",
                    "label-text": "OG URL",
                  },
                  on: {
                    errorHidden: function ($event) {
                      return _vm.clearPageErrorMessage("metadata.og_url")
                    },
                  },
                  model: {
                    value: _vm.editableMetadata.og_url,
                    callback: function ($$v) {
                      _vm.$set(_vm.editableMetadata, "og_url", $$v)
                    },
                    expression: "editableMetadata.og_url",
                  },
                }),
                _vm._v(" "),
                _c("input-group", {
                  staticClass: "mt-4",
                  attrs: {
                    "error-message":
                      _vm.getPageErrorMessage("metadata.og_image"),
                    "input-class":
                      "border border-theme-base-subtle font-medium px-3 py-2 rounded-l w-full focus:border-theme-primary focus:outline-none focus:ring-0",
                    "input-id": "metadata_og_image",
                    "input-name": "metadata_og_image",
                    "input-type": "text",
                    "input-wrapper-class": "flex flex-row items-center",
                    "label-text": "OG Image",
                  },
                  on: {
                    errorHidden: function ($event) {
                      return _vm.clearPageErrorMessage("metadata.og_image")
                    },
                  },
                  scopedSlots: _vm._u(
                    [
                      {
                        key: "inputAppend",
                        fn: function () {
                          return [
                            _c(
                              "button",
                              {
                                staticClass:
                                  "border border-l-0 border-theme-primary-subtle button button-primary-subtle rounded-l-none",
                                attrs: { type: "button" },
                                on: { click: _vm.openOgImageFileManagerModal },
                              },
                              [
                                _vm._v(
                                  "\n                        Browse...\n                    "
                                ),
                              ]
                            ),
                          ]
                        },
                        proxy: true,
                      },
                    ],
                    null,
                    false,
                    343214399
                  ),
                  model: {
                    value: _vm.editableMetadata.og_image,
                    callback: function ($$v) {
                      _vm.$set(_vm.editableMetadata, "og_image", $$v)
                    },
                    expression: "editableMetadata.og_image",
                  },
                }),
              ],
              1
            )
          : _vm._e(),
      ]),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/cms/urls/UrlEditor.vue?vue&type=template&id=40670842&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/cms/urls/UrlEditor.vue?vue&type=template&id=40670842& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
    "div",
    [
      _c("input-group", {
        attrs: {
          "error-message": _vm.getPageErrorMessage("url.url_main"),
          "input-id": "url_input",
          "input-name": "url_input",
          "input-required": true,
          "input-type": "text",
          "label-text": "URL",
        },
        on: {
          errorHidden: function ($event) {
            return _vm.clearPageErrorMessage("url.url_main")
          },
          input: _vm.onUrlInputInput,
        },
        model: {
          value: _vm.urlInput,
          callback: function ($$v) {
            _vm.urlInput = $$v
          },
          expression: "urlInput",
        },
      }),
      _vm._v(" "),
      _c(
        "input-group",
        {
          staticClass: "mt-4",
          attrs: {
            "error-message": _vm.getPageErrorMessage("url.url_full"),
            "input-disabled": true,
            "input-id": "url_full",
            "input-name": "url_full",
            "input-type": "text",
            "label-text": "Formatted URL",
          },
          on: {
            errorHidden: function ($event) {
              return _vm.clearPageErrorMessage("url.url_full")
            },
          },
          model: {
            value: _vm.urlFull,
            callback: function ($$v) {
              _vm.urlFull = $$v
            },
            expression: "urlFull",
          },
        },
        [
          _c(
            "span",
            { staticClass: "flex flex-row items-center" },
            [
              _c("span", { staticClass: "flex flex-row items-baseline" }, [
                _vm._v("\n                Formatted URL\n                "),
                _c("sup", { staticClass: "text-theme-danger-contrast" }, [
                  _vm._v("*"),
                ]),
              ]),
              _vm._v(" "),
              _vm.isUrlCheckLoading
                ? _c("icon-loader-circle", {
                    staticClass:
                      "animate-spin-slow h-4 ml-3 text-theme-base-subtle-contrast w-4",
                  })
                : _vm.isUrlChecked && this.urlInput.length
                ? _c(
                    "span",
                    {
                      staticClass:
                        "flex flex-row font-normal items-center ml-3",
                      class: {
                        "text-theme-success-contrast": _vm.isUrlAvailable,
                        "text-theme-danger-contrast": !_vm.isUrlAvailable,
                      },
                    },
                    [
                      _vm.isUrlAvailable
                        ? [
                            _c("icon-check", { staticClass: "h-4 mr-1 w-4" }),
                            _vm._v(" "),
                            _c("span", [_vm._v("URL is available")]),
                          ]
                        : !_vm.isUrlAvailable
                        ? [
                            _c("icon-x", { staticClass: "h-4 mr-1 w-4" }),
                            _vm._v(" "),
                            _c("span", [_vm._v("URL is unavailable")]),
                          ]
                        : _vm._e(),
                    ],
                    2
                  )
                : _vm._e(),
            ],
            1
          ),
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "bg-theme-base-subtle h-px my-6" }),
      _vm._v(" "),
      _c("inline-checkbox-group", {
        staticClass: "mt-4",
        attrs: {
          "error-message": _vm.getPageErrorMessage("url.is_enabled"),
          "input-id": "url_is_enabled",
          "input-name": "url_is_enabled",
          "label-text": "Enabled?",
        },
        on: {
          errorHidden: function ($event) {
            return _vm.clearPageErrorMessage("url.is_enabled")
          },
        },
        model: {
          value: _vm.editableUrlData.is_enabled,
          callback: function ($$v) {
            _vm.$set(_vm.editableUrlData, "is_enabled", $$v)
          },
          expression: "editableUrlData.is_enabled",
        },
      }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "flex flex-col md:flex-row md:mt-2 md:space-x-4" },
        [
          _c("date-time-picker-group", {
            staticClass: "mt-4 md:flex-1",
            attrs: {
              "error-message": _vm.getPageErrorMessage("url.published_at"),
              "input-id": "url_published_at",
              "input-name": "url_published_at",
              "label-text": "Publish Date",
            },
            on: {
              errorHidden: function ($event) {
                return _vm.clearPageErrorMessage("url.published_at")
              },
            },
            model: {
              value: _vm.editableUrlData.published_at,
              callback: function ($$v) {
                _vm.$set(_vm.editableUrlData, "published_at", $$v)
              },
              expression: "editableUrlData.published_at",
            },
          }),
          _vm._v(" "),
          _c("date-time-picker-group", {
            staticClass: "mt-4 md:flex-1",
            attrs: {
              "error-message": _vm.getPageErrorMessage("url.expired_at"),
              "input-id": "url_expired_at",
              "input-name": "url_expired_at",
              "label-text": "Expiry Date",
            },
            on: {
              errorHidden: function ($event) {
                return _vm.clearPageErrorMessage("url.expired_at")
              },
            },
            model: {
              value: _vm.editableUrlData.expired_at,
              callback: function ($$v) {
                _vm.$set(_vm.editableUrlData, "expired_at", $$v)
              },
              expression: "editableUrlData.expired_at",
            },
          }),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/core/forms/DateTimePickerGroup.vue?vue&type=template&id=689a1cde&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/core/forms/DateTimePickerGroup.vue?vue&type=template&id=689a1cde& ***!
  \******************************************************************************************************************************************************************************************************************************************/
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
    "div",
    { staticClass: "flex flex-col" },
    [
      _c(
        "label",
        { class: _vm.formattedLabelClass, attrs: { for: _vm.inputId } },
        [
          _vm._t("default", function () {
            return [
              _c("span", { staticClass: "flex flex-row items-baseline" }, [
                _c("span", [_vm._v(_vm._s(_vm.labelText))]),
                _vm._v(" "),
                _vm.inputRequired
                  ? _c("sup", { staticClass: "text-theme-danger-contrast" }, [
                      _vm._v("\n                    *\n                "),
                    ])
                  : _vm._e(),
              ]),
            ]
          }),
        ],
        2
      ),
      _vm._v(" "),
      _c("date-picker", {
        class: _vm.formattedInputClass,
        attrs: {
          id: _vm.inputId,
          disabled: _vm.inputDisabled,
          format: _vm.inputFormat,
          placeholder: _vm.inputPlaceholder,
          required: _vm.inputRequired,
          "time-title-format": _vm.inputTimeTitleFormat,
          "title-format": _vm.inputTitleFormat,
          type: _vm.inputType,
          "value-type": _vm.inputValueType,
        },
        model: {
          value: _vm.editableInput,
          callback: function ($$v) {
            _vm.editableInput = $$v
          },
          expression: "editableInput",
        },
      }),
      _vm._v(" "),
      _c("form-field-error", {
        attrs: {
          "error-class": _vm.errorClass,
          "error-message": _vm.errorMessage,
          "is-error": _vm.isError,
        },
      }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/core/forms/InlineCheckboxGroup.vue?vue&type=template&id=5460ad7e&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/core/forms/InlineCheckboxGroup.vue?vue&type=template&id=5460ad7e& ***!
  \******************************************************************************************************************************************************************************************************************************************/
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
    "div",
    { staticClass: "flex flex-col" },
    [
      _c("div", { staticClass: "flex flex-row" }, [
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.editableValue,
              expression: "editableValue",
            },
          ],
          ref: _vm.inputId,
          class: _vm.formattedInputClass,
          attrs: {
            id: _vm.inputId,
            disabled: _vm.inputDisabled,
            "false-value": _vm.inputValueFalse,
            name: _vm.inputName,
            required: _vm.inputRequired,
            "true-value": _vm.inputValueTrue,
            type: "checkbox",
          },
          domProps: {
            checked: Array.isArray(_vm.editableValue)
              ? _vm._i(_vm.editableValue, null) > -1
              : _vm._q(_vm.editableValue, _vm.inputValueTrue),
          },
          on: {
            change: [
              function ($event) {
                var $$a = _vm.editableValue,
                  $$el = $event.target,
                  $$c = $$el.checked ? _vm.inputValueTrue : _vm.inputValueFalse
                if (Array.isArray($$a)) {
                  var $$v = null,
                    $$i = _vm._i($$a, $$v)
                  if ($$el.checked) {
                    $$i < 0 && (_vm.editableValue = $$a.concat([$$v]))
                  } else {
                    $$i > -1 &&
                      (_vm.editableValue = $$a
                        .slice(0, $$i)
                        .concat($$a.slice($$i + 1)))
                  }
                } else {
                  _vm.editableValue = $$c
                }
              },
              _vm.onInput,
            ],
            keyup: function ($event) {
              if (
                !$event.type.indexOf("key") &&
                _vm._k($event.keyCode, "esc", 27, $event.key, ["Esc", "Escape"])
              ) {
                return null
              }
              return _vm.blurInput.apply(null, arguments)
            },
          },
        }),
        _vm._v(" "),
        _c("label", { class: _vm.labelClass, attrs: { for: _vm.inputId } }, [
          _c("span", { staticClass: "flex flex-row items-baseline" }, [
            _c("span", [_vm._v(_vm._s(_vm.labelText))]),
            _vm._v(" "),
            _vm.inputRequired
              ? _c("sup", { staticClass: "text-theme-danger-contrast" }, [
                  _vm._v("\n                    *\n                "),
                ])
              : _vm._e(),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c("form-field-error", {
        attrs: {
          "error-class": _vm.errorClass,
          "error-message": _vm.errorMessage,
          "is-error": _vm.isError,
        },
      }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/cms/page/Edit.vue?vue&type=template&id=667201cb&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/cms/page/Edit.vue?vue&type=template&id=667201cb& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
      _vm.userCan("cms.edit")
        ? _c(
            "div",
            { staticClass: "flex flex-row items-center mb-6" },
            [
              _c("h1", { staticClass: "font-medium mr-auto text-lg" }, [
                _vm._v("\n            Edit Page\n        "),
              ]),
              _vm._v(" "),
              _vm.userCan("cms.view")
                ? _c(
                    "inertia-link",
                    {
                      staticClass:
                        "\n                button button-default-responsive button-primary-subtle\n                flex flex-row items-center mr-2\n            ",
                      attrs: { href: _vm.$route("admin.cms.pages.index") },
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
                    _vm._v("\n                Save Changes\n            "),
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
                "error-message": _vm.getPageErrorMessage("layout_id"),
                "label-text": "Layout",
                "input-any-option-enabled": true,
                "input-any-option-label": "Please select a Layout",
                "input-autofocus": true,
                "input-id": "layout_id",
                "input-name": "layout_id",
                "input-options": _vm.layouts,
                "input-option-label-key": "name",
                "input-option-value-key": "id",
                "input-required": true,
              },
              on: {
                errorHidden: function ($event) {
                  return _vm.clearPageErrorMessage("layout_id")
                },
              },
              model: {
                value: _vm.formData.layout_id,
                callback: function ($$v) {
                  _vm.$set(_vm.formData, "layout_id", $$v)
                },
                expression: "formData.layout_id",
              },
            }),
            _vm._v(" "),
            _c("select-group", {
              staticClass: "mt-4",
              attrs: {
                "error-message": _vm.getPageErrorMessage("template_id"),
                "label-text": "Template",
                "input-any-option-enabled": true,
                "input-any-option-label": "Please select a template",
                "input-id": "template_id",
                "input-name": "template_id",
                "input-options": _vm.templates,
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
            _vm.parentPagesUrls
              ? _c("select-group", {
                  staticClass: "mt-4",
                  attrs: {
                    "error-message": _vm.getPageErrorMessage("parent_id"),
                    "label-text": "Parent Page",
                    "input-any-option-enabled": true,
                    "input-any-option-label":
                      "Please select a parent (optional)",
                    "input-id": "parent_id",
                    "input-name": "parent_id",
                    "input-options": _vm.parentPagesUrls,
                    "input-option-label-key": "label",
                    "input-option-value-key": "id",
                  },
                  on: {
                    errorHidden: function ($event) {
                      return _vm.clearPageErrorMessage("parent_id")
                    },
                  },
                  model: {
                    value: _vm.formData.parent_id,
                    callback: function ($$v) {
                      _vm.$set(_vm.formData, "parent_id", $$v)
                    },
                    expression: "formData.parent_id",
                  },
                })
              : _vm._e(),
            _vm._v(" "),
            _c("input-group", {
              staticClass: "mt-4",
              attrs: {
                "error-message": _vm.getPageErrorMessage("name"),
                "input-autocomplete": "page_name",
                "input-id": "name",
                "input-name": "name",
                "input-required": true,
                "input-type": "text",
                "label-text": "Page Name",
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
                "input-autocomplete": "page_slug",
                "input-id": "slug",
                "input-name": "slug",
                "input-required": true,
                "input-type": "text",
                "label-text": "Page Slug",
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
      _c(
        "div",
        {
          staticClass:
            "bg-white mt-6 overflow-x-hidden px-6 py-6 shadow-subtle rounded-lg",
        },
        [
          _c("metadata-editor", {
            model: {
              value: _vm.formData.metadata,
              callback: function ($$v) {
                _vm.$set(_vm.formData, "metadata", $$v)
              },
              expression: "formData.metadata",
            },
          }),
        ],
        1
      ),
      _vm._v(" "),
      _vm.isInitialised_url
        ? _c(
            "div",
            { staticClass: "bg-white mt-6 px-6 py-6 shadow-subtle rounded-lg" },
            [
              _c("url-editor", {
                attrs: { "parent-url": _vm.selectedParentPageUrl },
                on: { isAvailable: _vm.onUrlIsAvailableEvent },
                model: {
                  value: _vm.formData.url,
                  callback: function ($$v) {
                    _vm.$set(_vm.formData, "url", $$v)
                  },
                  expression: "formData.url",
                },
              }),
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      !this.isLoadingTemplate &&
      _vm.selectedTemplateHasFields &&
      _vm.isInitialisedContent
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