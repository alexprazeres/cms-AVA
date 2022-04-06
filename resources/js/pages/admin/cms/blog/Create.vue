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
                Criar publicação
            </h1>

            <inertia-link
                v-if="userCan('cms_advanced.view')"
                class="
                    button button-default-responsive button-primary-subtle
                    flex flex-row items-center mr-2
                "
                :href="$route('admin.cms.blogs.index')"
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

                <input-group
                    class="mt-4"
                    :error-message="getPageErrorMessage('description')"
                    input-autocomplete="layout_slug"
                    input-id="description"
                    input-name="description"
                    :input-required="true"
                    input-type="text"
                    label-text="Descrição"
                    @errorHidden="clearPageErrorMessage('description')"
                    v-model="formData.description"
                />

                <select-group
                    class="mt-4"
                    :error-message="getPageErrorMessage('category_id')"
                    label-text="Categoria"
                    :input-any-option-enabled="true"
                    input-any-option-label="Selecione a categoria"
                    :input-autofocus="true"
                    input-id="category_id"
                    input-name="category_id"
                    :input-options="isCategories ? categories : {}"
                    input-option-label-key="title"
                    input-option-value-key="id"

                    @errorHidden="clearPageErrorMessage('category_id')"
                    v-model="formData.category_id"
                />

                <div class="extraOutline bg-white w-max bg-whtie rounded-lg mt-5">
                    <p class="text-lg mb-2">Imagem de capa</p>
                    <div class="file_upload p-5 relative border-4 border-dotted border-gray-300 rounded-lg previewBlock" :style="{ 'background-image': `url(${filePreview})` }">
                        <div class="input_field flex flex-col w-max mx-auto text-center" v-if="filePreview==null">
                        <svg class="text-indigo-500 w-24 mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
                            <label>
                                <input class="text-sm cursor-pointer w-36 hidden" ref="fileInput"
                                    type="file"
                                    id="formFileLg"
                                    @input="selectImgFile">
                                <div class="text bg-indigo-600 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-indigo-500">Selecione</div>
                            </label>

                            <div class="title text-indigo-500 uppercase">ou arraste uma imagem.</div>
                        </div>
                    </div>
                    <label v-if="filePreview != null">
                        <input class="text-sm cursor-pointer w-36 hidden" ref="fileInput"
                            type="file"
                            id="formFileLg"
                            @input="selectImgFile">
                        <div class="text bg-indigo-600 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-indigo-500">Selecione</div>
                    </label>
                </div>

            </div>
        </div>

        <div
            class="bg-white mt-6 px-4 py-6 shadow-subtle rounded-lg"
        >
            <p class="text-lg">Conteúdo</p>
            <vue-editor v-model="formData.text"></vue-editor>

        </div>
        <div class="mb-8">
            <label class="text-xl text-gray-600">Content <span class="text-red-500">*</span></label>
            <textarea name="content" class="border-2 border-gray-500">

            </textarea>
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
            categories: {
                type: Object | Array,
                required: true
            },
        },
        data() {
            return {
                filePreview: null,
                fileData:null,
                autoUpdateSlug: true,
                formData: {
                    title: '',
                    description: '',
                    text: '',
                    category_id:null,
                    image_preview:null
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
                    this.$route('admin.cms.blogs.store'),
                    this.formData
                );
            },
            chooseFile () {
              this.$refs.fileInput.click()
          },
          selectImgFile () {
            let fileInput = this.$refs.fileInput
            let imgFile = fileInput.files

            if (imgFile && imgFile[0]) {
              let reader = new FileReader
              reader.onload = e => {
                this.filePreview = e.target.result
              }
              reader.readAsDataURL(imgFile[0])
              this.$emit('fileInput', imgFile[0])
              this.formData.image_preview = imgFile[0];
            }
          }
        },
        watch: {
            selectedTemplateId: {
                handler: 'onSelectedTemplateIdChange'
            }
        }
    }
</script>
<style scoped lang="css">
    .container {
        max-width: 600px;
    }
    .previewBlock {
        display: block;
        cursor: pointer;
        width: 300px;
        height: 280px;
        margin: 0 auto 20px;
        background-position: center center;
        background-size: cover;
    }
</style>
