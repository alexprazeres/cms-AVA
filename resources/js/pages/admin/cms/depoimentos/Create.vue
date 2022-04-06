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
                Criar depoimento
            </h1>

            <inertia-link
                v-if="userCan('cms_advanced.view')"
                class="
                    button button-default-responsive button-primary-subtle
                    flex flex-row items-center mr-2
                "
                :href="$route('admin.cms.depoimentos.index')"
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
                    Salvar depoimento
                </span>
            </button>
        </div>


        <div class="bg-white py-6 shadow-subtle rounded-lg">
            <div class="block px-6 w-full">
                <input-group
                    class="mt-4"
                    :error-message="getPageErrorMessage('name')"
                    input-id="name"
                    input-name="name"
                    :input-required="true"
                    input-type="text"
                    label-text="Nome"
                    @errorHidden="clearPageErrorMessage('name')"
                    v-model="formData.name"
                />

                <input-group
                    class="mt-4"
                    :error-message="getPageErrorMessage('priority')"
                    input-id="priority"
                    input-name="priority"
                    :input-required="true"
                    input-type="text"
                    label-text="Prioridade de exibição."
                    @errorHidden="clearPageErrorMessage('priority')"
                    v-model="formData.priority"
                />

                <div class="mt-4">
                    <label class="text-xl text-gray-600">Mensagem <span class="text-red-500">*</span></label>
                    <textarea v-model="formData.message" name="content" class="border rounded-md border-gray-300 w-full mt-2">

                    </textarea>
                </div>
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
                    name: '',
                    message:'',
                    priority:1
                },
                isLoadingTemplate: false,
                selectedTemplate: null,
            }
        },
        computed: {
            isdepoimentos() {
                try {
                    return Object.keys(this.depoimentos).length;
                } catch (e) {
                    return false;
                }
            },
        },
        methods: {
            submit() {
                this.$inertia.post(
                    this.$route('admin.cms.depoimentos.store'),
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
