<template>
    <section>
        <div
            class="flex flex-row items-center mb-6"
        >
            <h1 class="font-medium mr-auto text-lg">
                 Depoimentos
            </h1>

            <inertia-link
                v-if="userCan('cms_advanced.create')"
                class="
                    button button-default-responsive button-primary
                    flex flex-row items-center
                "
                :href="$route('admin.cms.depoimentos.create')"
            >
                <icon-plus class="w-5 md:mr-2"/>

                <span
                    class="hidden md:inline"
                >
                    Criar depoimento
                </span>
            </inertia-link>
        </div>

        <div class="bg-white py-6 shadow-subtle rounded-lg">
            <h1 class="font-semibold px-6 text-gray-850">
                Buscar
                <button
                    class="
                        text-sm text-theme-base-subtle-contrast
                        focus:outline-none focus:text-theme-primary
                        hover:text-theme-primary
                    "
                    @click="setSearchOptions"
                >
                    (Limpar)
                </button>
            </h1>

            <!--Search Panel -->
            <div
                class="
                    flex flex-col items-center mt-4 px-6 space-y-4
                    md:flex-row md:space-y-0 md:space-x-8
                "
            >
                <div class="w-full md:w-1/3">
                    <input-group
                        input-autocomplete="layout_name_search"
                        input-class="form-control form-control-short"
                        input-id="layout_name"
                        input-name="layout_name"
                        input-placeholder="Titulo"
                        input-type="text"
                        :label-hidden="true"
                        label-text="Nome"
                        v-model="editableSearchOptions.name"
                    />
                </div>

            </div>

            <p
                v-if="!depoimentosData"
                class="bg-theme-base-subtle mt-8 mx-6 px-6 py-4 rounded text-center text-theme-base-subtle-contrast"
            >
                Nenhum registro
            </p>

            <template v-else>

                <!-- Search Results -->
                <div class="block mt-8 overflow-x-auto w-full">
                    <table class="table table-hover table-striped w-full">
                        <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Criado em</th>
                            <th v-if="showLayoutActions"></th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr
                            v-for="(blog) in depoimentosData"
                            :key="`layout-${blog.id}`"
                        >
                            <td>
                                {{ blog.name }}
                            </td>
                            <td>
                                {{  blog.created_at | smallDateTime }}
                            </td>
                            <td v-if="showLayoutActions">
                                <div class="flex flex-row items-center justify-end -mx-1">
                                    <inertia-link
                                        v-if="userCan('cms_advanced.edit')"
                                        class="
                                            flex flex-row items-center inline-flex mx-1 px-2 py-1 rounded text-theme-base-subtle-contrast text-sm tracking-wide
                                            focus:outline-none focus:ring
                                            hover:bg-theme-info hover:text-theme-info-contrast
                                        "
                                        :href="$route('admin.cms.depoimentos.edit', blog.id)"
                                        title="Editar"
                                    >
                                        <icon-edit
                                            class="w-4"
                                        />
                                    </inertia-link>

                                    <button
                                        v-if="userCan('cms_advanced.delete')"
                                        class="
                                            flex flex-row items-center inline-flex mx-1 px-2 py-1 rounded text-theme-base-subtle-contrast text-sm tracking-wide
                                            focus:outline-none focus:ring
                                            hover:bg-theme-danger hover:text-theme-danger-contrast
                                        "
                                        title="Deletar"
                                        @click="checkDelete(blog)"
                                    >
                                        <icon-trash
                                            class="w-4"
                                        />
                                    </button>
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>

                <!-- Pagination -->
                <div
                    v-if="showPagination"
                    class="flex flex-row justify-center mt-12 px-6"
                >
                    <pagination :pagination="depoimentos.pagination" />
                </div>
            </template>

            <confirmation-modal
                confirm-text="Deletar"
                confirm-type="danger"
                :show-modal="showDeleteModal"
                :message-text="deleteModalText"
                @cancelAction="cancelDelete"
                @closeModal="cancelDelete"
                @confirmAction="confirmDelete"
            />
        </div>
    </section>
</template>

<script>
    import _ from 'lodash';
    import { Inertia } from '@inertiajs/inertia'
    import ConfirmationModal from "../../../../components/core/modals/ConfirmationModal";
    import InputGroup from "../../../../components/core/forms/InputGroup";
    import SelectGroup from "../../../../components/core/forms/SelectGroup";

    export default {
        name: "AdminCmsLayoutIndex",
        components: {
            ConfirmationModal,
            InputGroup,
            SelectGroup
        },
        layout: 'admin-layout',
        props: {
            depoimentos: {
                required: true,
                type: Object,
            },
            searchOptions: {
                required: true,
                type: Object | Array,
            }
        },
        data() {
            return {
                editableSearchOptions: {
                    per_page        : 15,
                    name   : ''
                },
                isInitialised: false,
                isLoadingDelete: false,
                showDeleteModal: false,
                rowToDelete: null,
            }
        },
        mounted() {
            this.setSearchOptions(this.searchOptions);
        },
        computed: {
            deleteModalText() {
                try {
                    return 'Você deseja deletar \'' + this.rowToDelete.title + '\'?';
                } catch (e) {
                    return 'Você realmente deseja deletar este registro?'
                }
            },
            showPagination() {
                try {
                    return this.depoimentos.pagination.last_page > 1;
                } catch (e) {
                    return false;
                }
            },
            showLayoutActions() {
                return this.userCan('cms_advanced.edit') || this.userCan('cms_advanced.delete');
            },
            depoimentosData() {
                console.log(this.depoimentos);
                if (!this.depoimentos || !this.depoimentos.data || this.depoimentos.data.length < 1) {
                    return false;
                }

                return this.depoimentos.data;
            }
        },
        methods: {
            cancelDelete() {
                if (!this.isLoadingDelete) {
                    this.showDeleteModal = false;
                    this.rowToDelete = null;
                }
            },
            checkDelete(data) {
                this.showDeleteModal = true;
                this.rowToDelete = data;
            },
            confirmDelete() {
                if (this.isLoadingDelete) {
                    return this.$errorToast('It\'s only possible to delete one depoimentos at a time.');
                }
                this.$inertia.delete(
                    this.$route('admin.cms.depoimentos.destroy', this.rowToDelete.id),
                    {
                        only: [
                            'flash',
                            'depoimentos'
                        ]
                    }
                );
                this.rowToDelete = null;
                this.showDeleteModal = false;
            },
            onSearchOptionsUpdate: _.debounce(function () {
                if (!this.isInitialised) {
                    this.isInitialised = true;

                    // If there are already search results, don't attempt search
                    if (this.depoimentosData) {
                        return;
                    }
                }

                Inertia.get(
                    this.$route('admin.cms.depoimentos.index'),
                    this.editableSearchOptions,
                    {
                        only: ['depoimentos'],
                        preserveState: true,
                    }
                );
            }, 500),
            setSearchOptions(new_options = {}) {
                let options = {
                    per_page      : 15,
                    name   : ''
                }

                try {
                    // Overwrite the defaults with any new options
                    _.forEach(new_options, (option, key) => {
                        options[key] = option;
                    })
                } catch (e) {
                    console.log(e);
                }

                this.editableSearchOptions = _.cloneDeep(options);
            }
        },
        watch: {
            editableSearchOptions: {
                deep: true,
                handler: 'onSearchOptionsUpdate'
            }
        }
    }
</script>
