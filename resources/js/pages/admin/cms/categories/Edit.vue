<template>
    <form
        class="max-w-7xl mx-auto"
        autocomplete="off"
        @submit.prevent="submit"
    >
        <div
            v-if="userCan('cms_advanced.create')"
            class="flex flex-row items-center mb-6"
        >
            <h1 class="font-medium mr-auto text-lg">
                Atualizar categoria
            </h1>

            <inertia-link
                v-if="userCan('cms_advanced.view')"
                class="
                    button button-default-responsive button-primary-subtle
                    flex flex-row items-center mr-2
                "
                :href="$route('admin.cms.categories.index')"
            >
                <icon-chevron-left
                    class="w-5 md:mr-2"
                />
                <span
                    class="hidden md:inline"
                >
                    Voltar
                </span>
            </inertia-link>

            <button
                class="
                    button button-default-responsive button-primary
                    flex flex-row items-center
                "
                type="submit"
            >
                <icon-save class="w-5 md:mr-2"/>

                <span
                    class="hidden md:inline"
                >
                    Salvar publicação
                </span>
            </button>
        </div>


        <div class="bg-white py-6 shadow-subtle rounded-lg">
            <div class="block px-6 w-full">
                <input-group
                    class="mt-4"
                    :error-message="getPageErrorMessage('title')"
                    input-autocomplete="layout_name"
                    input-id="title"
                    input-name="title"
                    :input-required="true"
                    input-type="text"
                    label-text="Título"
                    @errorHidden="clearPageErrorMessage('title')"
                    v-model="formData.title"
                />

            </div>
        </div>
    </form>
</template>

<script>
    import { VueEditor } from "vue2-editor";
    import InputGroup from "../../../../components/core/forms/InputGroup";
    import SelectGroup from "../../../../components/core/forms/SelectGroup";
    export default {
        name: "AdminCmsLayoutCreate",
        components: {
            InputGroup,
            SelectGroup,
            VueEditor
        },
        layout: 'admin-layout',
        props: {
            'category': {
                type: Object,
                required: true
            }
        },
        data() {
            return {
                autoUpdateSlug: true,
                formData: {
                    title: ''
                },
                isLoadingTemplate: false,
                selectedTemplate: null,
                isInitialisedTemplate: false,
                isInitialisedContent: false,
                isLoadingTemplate: false
            }
        },
        created() {

            this.formData = {
                title: this.category.title
            };
        },
        methods: {
            submit() {
                this.$inertia.put(
                     this.$route('admin.cms.categories.update', this.categories.id),
                    this.formData
                );
            },
        },
        watch: {
            selectedTemplateId: {
                handler: 'onSelectedTemplateIdChange'
            }
        }
    }
</script>
