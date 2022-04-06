<template>
    <form
        class="max-w-5xl mx-auto"
        autocomplete="off"
        @submit.prevent="submit"
    >
        <!-- Header -->
        <div
            v-if="userCan('crm_contacts.edit')"
            class="flex flex-row items-center mb-6"
        >
            <h1 class="font-medium mr-auto text-lg">
                Ver Contato
                <span class="ml-2 opacity-75 text-sm">
                    {{ contact.name }}
                </span>
            </h1>

            <inertia-link
                v-if="userCan('crm_contacts.view')"
                class="
                    button button-default-responsive button-primary-subtle
                    flex flex-row items-center mr-2
                "
                :href="$route('admin.crm.contacts.index')"
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

        </div>

        <!-- Contact Details -->
        <div class="bg-white py-6 shadow-subtle rounded-lg">
            <div class="block px-6 w-full">



                <input-group
                    class="mt-4"
                    :error-message="getPageErrorMessage('first_name')"
                    input-autocomplete="first_name"
                    input-id="first_name"
                    input-name="first_name"
                    input-type="text"
                    label-text="Nome"
                    @errorHidden="clearPageErrorMessage('first_name')"
                    v-model="formData.first_name"
                />


                <input-group
                    class="mt-4"
                    :error-message="getPageErrorMessage('email')"
                    input-autocomplete="email"
                    input-id="email"
                    input-name="email"
                    input-type="email"
                    label-text="Email"
                    @errorHidden="clearPageErrorMessage('email')"
                    v-model="formData.email"
                />

                <input-group
                    class="mt-4"
                    :error-message="getPageErrorMessage('telephone')"
                    input-autocomplete="telephone"
                    input-id="telephone"
                    input-max-length="20"
                    input-name="telephone"
                    input-type="telephone"
                    label-text="Celular/Whatsapp"
                    @errorHidden="clearPageErrorMessage('telephone')"
                    v-model="formData.telephone"
                />


                <input-group
                    class="mt-4"
                    :error-message="getPageErrorMessage('last_name')"
                    input-autocomplete="last_name"
                    input-id="last_name"
                    input-name="last_name"
                    input-type="text"
                    label-text="Estado"
                    @errorHidden="clearPageErrorMessage('last_name')"
                    v-model="formData.last_name"
                />

            </div>
        </div>

        <!-- Marketing Preferences -->
        <div class="bg-white mt-6 py-6 shadow-subtle rounded-lg">
            <div class="block px-6 w-full">
                <p class="font-medium mb-4 text-theme-base-contrast tracking-wider">
                    Mensagem
                </p>

                <div class="space-y-4">
                 <p>{{contact.message }}</p>
                </div>
            </div>
        </div>
    </form>
</template>

<script>
    import _ from "lodash";
    import InlineCheckboxGroup from "../../../../components/core/forms/InlineCheckboxGroup";
    import InputGroup from "../../../../components/core/forms/InputGroup";

    export default {
        name: "AdminCrmContactEdit",
        components: {
            InlineCheckboxGroup,
            InputGroup,
        },
        layout: 'admin-layout',
        props: {
            contact: {
                required: true,
                type: Object,
            },
        },
        data() {
            return {
                formData: null,
            }
        },
        created() {
            this.formData =  {
                email: this.contact.email,
                first_name: this.contact.first_name,
                last_name: this.contact.last_name,
                telephone: this.contact.telephone,
                title: this.contact.title,
                marketing_email: !!this.contact.marketing_email,
                marketing_sms: !!this.contact.marketing_sms,
                marketing_telephone: !!this.contact.marketing_telephone,
            }
        },
        methods: {
            submit() {
                this.$inertia.put(
                    this.$route('admin.crm.contacts.update', this.contact.id),
                    this.formData
                );
            }
        }
    }
</script>
