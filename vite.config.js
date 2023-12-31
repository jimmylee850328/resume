import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import vuetify from 'vite-plugin-vuetify';

// https://vitejs.dev/config/
export default defineConfig({
    base: './',
    server: {
        port: 5566,
        open: true
    },
    plugins: [
        vue(), 
        vueJsx(), 
        vuetify({ autoImport: true })
    ],
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
    },
});
