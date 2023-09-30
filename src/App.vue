<script setup>
</script>

<template>
    <v-app class="main ma-0 pa-0">
        <router-view />
        <v-footer
            app
            class="bg-transparent d-flex justify-end mb-2"
        >
            <v-btn
                class="text-none"
                size="small"
                @click="view_on_github"
            > 
                <v-icon class="pr-2">
                    mdi-github
                </v-icon>
                View on Github
            </v-btn>
        </v-footer>
    </v-app>
</template>

<script setup>
    const view_on_github = () => {
        open("https://github.com/jimmylee850328/resume", "_blank");
    };
</script>

<style scoped>
    .main {
        background: radial-gradient(circle at 10% 20%, rgb(90, 92, 106) 0%, rgb(32, 45, 58) 81.3%);
        padding: 20px 0px;
        margin: 0px;
        height: 100dvh;
        width: 100dvw;
    }
</style>
