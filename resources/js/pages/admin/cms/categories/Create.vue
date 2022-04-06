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
                Criar categoria
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
                    Salvar categoria
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
        data() {
            return {
                autoUpdateSlug: true,
                formData: {
                    title: ''
                },
                isLoadingTemplate: false,
                selectedTemplate: null,
            }
        },
        computed: {
            isCategories() {
                try {
                    return Object.keys(this.categories).length;
                } catch (e) {
                    return false;
                }
            },
        },
        methods: {
            submit() {
                this.$inertia.post(
                    this.$route('admin.cms.categories.store'),
                    this.formData
                );
            }
        },
        watch: {
            selectedTemplateId: {
                handler: 'onSelectedTemplateIdChange'
            }
        }
    }
</script>
