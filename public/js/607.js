"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[607],{1607:(t,s,e)=>{e.r(s),e.d(s,{default:()=>o});var n=e(6486),i=e.n(n);const a={name:"AdminCrmFormSubmissionShow",layout:"admin-layout",props:{formSubmission:{required:!0,type:Object}},data:function(){return{marketingFields:{marketing_email:"Email",marketing_sms:"SMS",marketing_telephone:"Telephone"}}},computed:{enabledFormMarketingFields:function(){var t=this,s={};try{return i().forEach(this.marketingFields,(function(e,n){t.formSubmission.form.hasOwnProperty(n)?s[n]=t.formSubmission.form[n]:s[n]=!1})),s}catch(t){return s}}},methods:{getFormSubmissionDataField:function(t){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"-";try{return this.formSubmission.data[t]}catch(t){return s}},getFormSubmissionMarketingField:function(t){try{return Boolean(this.getFormSubmissionDataField(t,!1))?"Enabled":"Disabled"}catch(t){return"An error occurred."}}}};const o=(0,e(1900).Z)(a,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",{staticClass:"max-w-5xl mx-auto"},[e("div",{staticClass:"flex flex-row items-center mb-6"},[e("h1",{staticClass:"font-medium mr-auto text-lg"},[t._v("\n            Form Submission\n        ")]),t._v(" "),e("inertia-link",{staticClass:"\n                button button-default-responsive button-primary-subtle\n                flex flex-row items-center\n            ",attrs:{href:t.$route("admin.crm.form-submissions.index")}},[e("icon-chevron-left",{staticClass:"w-5 md:mr-2"}),t._v(" "),e("span",{staticClass:"hidden md:inline"},[t._v("\n                All Submissions\n            ")])],1)],1),t._v(" "),e("div",{staticClass:"bg-white py-6 shadow-subtle rounded-lg"},[e("div",{staticClass:"block px-6 w-full"},[e("h2",{staticClass:"font-semibold"},[t._v("\n                Submission Details\n            ")]),t._v(" "),e("p",{staticClass:"mt-2"},[e("span",{staticClass:"block font-semibold text-theme-base-subtle-contrast text-xs"},[t._v("\n                    Form Name\n                ")]),t._v("\n                "+t._s(t.formSubmission.form.name)+"\n            ")]),t._v(" "),e("p",{staticClass:"mt-2"},[e("span",{staticClass:"block font-semibold text-theme-base-subtle-contrast text-xs"},[t._v("\n                    Submitted At\n                ")]),t._v("\n                "+t._s(t._f("humanFriendlyDateTime")(t.formSubmission.submitted_at))+"\n            ")])])]),t._v(" "),t.formSubmission.contact?e("div",{staticClass:"bg-white mt-6 py-6 shadow-subtle rounded-lg"},[e("div",{staticClass:"block px-6 w-full"},[e("h2",{staticClass:"font-semibold"},[t._v("\n                Contact Details\n\n                "),t._v(" "),t.userCan("crm_contacts.edit")?e("inertia-link",{staticClass:"text-sm text-theme-base-subtle-contrast",attrs:{href:t.$route("admin.crm.contacts.edit",t.formSubmission.contact_id)}},[t._v("\n                    (View Contact)\n                ")]):t._e()],1),t._v(" "),e("p",{staticClass:"mt-2"},[e("span",{staticClass:"block font-semibold text-theme-base-subtle-contrast text-xs"},[t._v("\n                    Name\n                ")]),t._v("\n                "+t._s(t.formSubmission.contact.name_with_title?t.formSubmission.contact.name_with_title:"-")+"\n            ")]),t._v(" "),e("p",{staticClass:"mt-2"},[e("span",{staticClass:"block font-semibold text-theme-base-subtle-contrast text-xs"},[t._v("\n                    Email\n                ")]),t._v("\n                "+t._s(t.formSubmission.contact.email)+"\n            ")])])]):t._e(),t._v(" "),e("div",{staticClass:"bg-white mt-6 py-6 shadow-subtle rounded-lg"},[e("div",{staticClass:"block px-6 w-full"},[e("h2",{staticClass:"font-semibold"},[t._v("\n                Marketing Preference Data\n            ")]),t._v(" "),t._l(t.enabledFormMarketingFields,(function(s,n){return e("p",{key:"marketing-field-"+n,staticClass:"mt-2"},[e("span",{staticClass:"block font-semibold text-theme-base-subtle-contrast text-xs"},[t._v("\n                    "+t._s(t.marketingFields[n])+"\n                ")]),t._v(" "),s?[t._v("\n                    "+t._s(t.getFormSubmissionMarketingField(n))+"\n                ")]:[t._v("\n                    The "+t._s(t.marketingFields[n])+" field is not tracked for this form.\n                ")]],2)}))],2)]),t._v(" "),e("div",{staticClass:"bg-white mt-6 py-6 shadow-subtle rounded-lg"},[e("div",{staticClass:"block px-6 w-full"},[e("h2",{staticClass:"font-semibold"},[t._v("\n                Form Submission Data\n            ")]),t._v(" "),t._l(t.formSubmission.form.form_fields,(function(s){return e("p",{key:"form-field-"+s.slug,staticClass:"mt-2"},[e("span",{staticClass:"block font-semibold text-theme-base-subtle-contrast text-xs"},[t._v("\n                    "+t._s(s.name)+"\n                ")]),t._v("\n                "+t._s(t.getFormSubmissionDataField(s.slug))+"\n            ")])}))],2)])])}),[],!1,null,null,null).exports}}]);