<template>
    <main
        id="website-layout"
    >
        <slot />
    </main>
</template>

<script>
    export default {
        name: "WebsiteLayout",
        metaInfo() {
            return {
                title: 'Gerenciador AVA',
                meta: [
                    {
                        name: 'description',
                        content: 'Gerenciador AVA',
                    }
                ]
            }
        },
    }
</script>
