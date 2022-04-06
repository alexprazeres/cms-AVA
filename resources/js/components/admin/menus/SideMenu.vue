<template>
    <nav
        :key="url"
        class="side-menu"
        :class="{
            'side-menu-open': isMobileSideMenuOpen
        }"
    >
        <!-- Header -->
        <div class="relative">
            <div
                class="
                    absolute flex flex-row items-center justify-start
                    bottom-0 left-0 top-0
                    transition-default transition-colors
                    lg:hidden
                "
            >
                <button
                    class="menu-toggle"
                    type="button"
                    @click="hideMobileSideMenu"
                >
                    <icon-close />
                </button>
            </div>
            <logo-light class="mr-2 w-full p-10"/>
        </div>

        <div
            v-for="(menuSection, menuSectionKey) in visibleMenu"
            :key="menuSectionKey"
            class="menu-section"
        >
            <p
                v-if="menuSection.showLabel"
                class="menu-subheading"
            >
                {{ menuSection.label }}
            </p>

            <ul class="root-menu">
                <side-menu-item
                    v-for="(menuItem, menuItemKey) in menuSection.children"
                    :key="`${menuSectionKey}.${menuItemKey}`"
                    class="root-menu-item"
                    :menu-item="menuItem"
                    :menu-item-key="`${menuSectionKey}.${menuItemKey}`"
                    :toggled-items="toggledItems"
                    @openItem="onMenuItemOpened"
                    @toggleItem="onMenuItemToggled"
                />
            </ul>

            <div
                v-if="menuSectionKey !== lastMenuSection"
                 class="menu-separator"
            ></div>
        </div>
    </nav>
</template>

<script>

    import _ from 'lodash';
    import SideMenuItem from "./SideMenuItem";

    export default {
        name: "SideMenu",
        components: {SideMenuItem},
        props: {
            url: String,
        },
        data() {
            return {
                menu: {
                    main: {
                        children: {
                            dashboard: {
                                children: false,
                                icon: "icon-home",
                                label: "Dashboard",
                                requiresAllPermissions: [],
                                requiresAnyPermissions: [],
                                route: "admin.index",
                            },
                        },
                        label: "Main",
                        requiresAllPermissions: [],
                        requiresAnyPermissions: [],
                        showLabel: false,
                    },
                    cms: {
                        children : {
                            blogs: {
                                activeRoutes: ["admin.cms.blogs.index", "admin.cms.blogs.create", "admin.cms.blogs.edit"],
                                children: {
                                    index: {
                                        icon: false,
                                        label: "Publicações",
                                        requiresAllPermissions: ["cms.view"],
                                        requiresAnyPermissions: [],
                                        route: "admin.cms.blogs.index",
                                    },
                                    indexCat: {
                                        icon: false,
                                        label: "Categorias",
                                        requiresAllPermissions: ["cms.view"],
                                        requiresAnyPermissions: [],
                                        route: "admin.cms.categories.index",
                                    },
                                },
                                icon: "icon-layout-navbar",
                                label: "Blog",
                                requiresAllPermissions: [],
                                requiresAnyPermissions: ["cms.create", "cms.view"],
                            },
                            funcionarios: {
                                activeRoutes: ["admin.cms.funcionarios.index", "admin.cms.funcionarios.create", "admin.cms.funcionarios.edit"],
                                children: {
                                    index: {
                                        icon: false,
                                        label: "Ver Funcionarios",
                                        requiresAllPermissions: ["cms.view"],
                                        requiresAnyPermissions: [],
                                        route: "admin.cms.funcionarios.index",
                                    },
                                    create: {
                                        children: false,
                                        icon: false,
                                        label: "Cadastrar Funcionarios",
                                        requiresAllPermissions: ["cms.create"],
                                        requiresAnyPermissions: [],
                                        route: "admin.cms.funcionarios.create",
                                    },
                                },
                                icon: "icon-users",
                                label: "Funcionários",
                                requiresAllPermissions: [],
                                requiresAnyPermissions: ["cms.create", "cms.view"],
                            },
                        },
                        label: "CMS",
                        requiresAllPermissions: [],
                        requiresAnyPermissions: ["cms.edit", "cms.create", "cms.view"],
                        showLabel: true,
                    },
                    crm: {
                        children: {
                            contacts: {
                                activeRoutes: ["admin.crm.contacts.index", "admin.crm.contacts.create", "admin.crm.contacts.edit"],
                                children: {
                                    index: {
                                        icon: false,
                                        label: "Ver Contatos",
                                        requiresAllPermissions: ["crm_contacts.view"],
                                        requiresAnyPermissions: [],
                                        route: "admin.crm.contacts.index",
                                    },
                                },
                                icon: "icon-id",
                                label: "Contatos",
                                requiresAllPermissions: [],
                                requiresAnyPermissions: ["crm_contacts.create", "crm_contacts.view"],
                            }
                        },
                        label: "CRM",
                        requiresAllPermissions: [],
                        requiresAnyPermissions: ["crm_forms.create", "crm_forms.view", "crm_contacts.create", "crm_contacts.view"],
                        showLabel: true,
                    },
                    utilities: {
                        children : {
                            file_manager: {
                                children: false,
                                icon: "icon-folders",
                                label: "Gerenciador de arquivos",
                                requiresAllPermissions: [],
                                requiresAnyPermissions: ["file_manager.view"],
                                route: 'admin.file_manager.index',
                            }
                        },
                        label: "Utilidades",
                        requiresAllPermissions: [],
                        requiresAnyPermissions: ["file_manager.view"],
                        showLabel: true,
                    },
                    settings: {
                        children : {
                            users: {
                                activeRoutes: ["admin.users.index", "admin.users.create", "admin.users.edit"],
                                children: {
                                    index: {
                                        icon: false,
                                        label: "View Users",
                                        requiresAllPermissions: ["users.view"],
                                        requiresAnyPermissions: [],
                                        route: "admin.users.index",
                                    },
                                    create: {
                                        children: false,
                                        icon: false,
                                        label: "Create User",
                                        requiresAllPermissions: ["users.create"],
                                        requiresAnyPermissions: [],
                                        route: "admin.users.create",
                                    },
                                },
                                icon: "icon-users",
                                label: "Usuários",
                                requiresAllPermissions: [],
                                requiresAnyPermissions: ["users.view", "users.create"],
                                route: false,
                            }
                        },
                        label: "Configurações",
                        requiresAllPermissions: [],
                        requiresAnyPermissions: ["users.view", "users.create"],
                        showLabel: true,
                    },
                },
                mountedItems: {},
                toggledItems: {}
            }
        },
        computed: {
            isMobileSideMenuOpen() {
                return this.$store.getters.isMobileSideMenuOpen;
            },
            lastMenuSection() {
                let keys = Object.keys(this.visibleMenu);
                return keys[keys.length - 1];
            },
            visibleMenu() {
                let visibleMenu = {};

                _.forEach(this.menu, (menuItem, key) => {
                    let item = this.getVisibleMenuWithChildren(menuItem);
                    if (item) {
                        visibleMenu[key] = item;
                    }
                });

                return visibleMenu;
            }
        },
        methods: {
            canViewMenu(menu) {
                // If there is a route, ensure it exists
                if (menu.route && menu.route.length && !this.$routeCheck(menu.route)) {
                    return false;
                }

                return this.userCanAny(menu.requiresAnyPermissions) && this.userCanAll(menu.requiresAllPermissions);
            },
            getVisibleMenuWithChildren(menu) {
                if (!menu) {
                    return false;
                }

                // Ensure the menu is valid and the user has permission to view it
                if (!this.canViewMenu(menu)) {
                    return false;
                }

                // If the menu has no children and the user has permission to view it, then show it
                if (!menu.children) {
                    return menu;
                }

                // Menu has children so only show visible children
                let visibleMenu = _.cloneDeep(menu);
                visibleMenu.children = {};

                _.forEach(menu.children, (child, key) => {
                    child = this.getVisibleMenuWithChildren(child);

                    if (child) {
                        visibleMenu.children[key] = child;
                    }
                });

                return visibleMenu;
            },
            hideMobileSideMenu() {
                this.$store.commit('hideMobileSideMenu');
            },
            onMenuItemOpened(itemKey) {
                this.$set(this.toggledItems, itemKey, true);
            },
            onMenuItemToggled(itemKey) {
                if (this.toggledItems[itemKey]) {
                    this.$set(this.toggledItems, itemKey, false);
                } else {
                    this.$set(this.toggledItems, itemKey, true);
                }
            },
        }
    }
</script>
