<template>
    <v-row
        no-gutters
        justify="center"
        align="center"
    >
        <v-card
            width="100%"
            height="100%"
            max-width="800"
            max-height="600"
            theme="dark"
            class="d-flex flex-column"
        >
            <v-card-title>
                <v-row
                    align="center"
                    no-gutters
                >
                    <div>
                        <v-btn
                            color="error"
                            icon
                            size="12"
                        />

                        <v-btn
                            color="warning"
                            icon
                            size="12"
                            class="mx-2"
                        />

                        <v-btn
                            color="success"
                            icon
                            size="12"
                        />
                    </div>
                    <v-spacer />
                    <span class="text-caption"> liyuanjun@Jimmy-Lee:~/resume </span>
                    <v-spacer />
                
                    <v-tooltip
                        v-for="(info, index) in info_list"
                        :key="index"
                        :text="info.name"
                        location="bottom"
                    >
                        <template #activator="{ props }">
                            <v-icon 
                                v-bind="props"
                                size="20" 
                                class="info-btn mr-2"
                                :color="info.color"
                                @click="change_current_info(info)"
                            >
                                {{ info.icon }}
                            </v-icon>
                        </template>
                    </v-tooltip>
                </v-row>
            </v-card-title>

            <v-card-text
                class="pb-0 flex-grow-0"
            >
                <v-row
                    align="center"
                    no-gutters
                >
                    <v-icon> mdi-arrow-right-thin </v-icon>
                    <span> resume </span>
                    <vue-typer-next
                        class="ml-3"
                        :data="terminal_instruction"
                        cursor-char="|"
                        @complete="show_pending_cursor = true;"
                        @start="show_pending_cursor = false"
                    />
                    <span
                        v-show="show_pending_cursor"
                        class="cusorChar blink"
                    >|</span>
                </v-row>
            </v-card-text>

            <div
                v-show="show_pending_cursor"
                class="px-4 pt-2 overflow-y-auto"
            >
                <div v-show="current_info === 'about me'">
                    <div class="px-4">
                        我是李垣峻，台科畢業後已有5-6年Vue開發經驗，在公司擔任 mentor、前端主管、窗口、工程師四種角色。從高職、科大一直到畢業，我都是在做資訊相關的學習、工作，平常閒暇之餘也有學習新的技術、知識，即使是我沒有碰到過的框架、語言，我有自信我能舉一反三、很快上手。
                    </div>

                    <v-list
                        lines="one"
                        density="compact"
                    >
                        <v-list-item
                            v-for="(title, index) in self_introductions"
                            :key="index"
                            :title="title"
                        />
                    </v-list>
                </div>

                <div v-show="current_info === 'work experience'">
                    <div class="px-4">
                        <p> 專案框架使用 Vue2、Vue3 開發，套件管理工具舊案子使用 Webpack，新案子則改使用速度更快的 Vite，並使用 Vuetify 提供的 UI Component 來設計版型，按照不同案子有使用過 Echarts、vuedraggable、vue-grid-layout 等 vue 套件。 </p>
                        <p class="mt-2">
                            在公司除了工程師的身份，由於主管發現我有溝通的天賦，因此也被安排了一些管理、溝通相關的職務：
                            <v-list
                                lines="one"
                                density="compact"
                            >
                                <v-list-item
                                    v-for="(title, index) in job_titles"
                                    :key="index"
                                    :title="title"
                                />
                            </v-list>

                            需要溝通的工作大多使用 notion 進行討論，無論是追蹤案子進度、開 API 格式、組內每週的技術分享也會將同仁所準備的內容放至 notion 上。
                        </p>
                    </div>
                </div>

                <div v-show="current_info === 'projects'">
                    <div
                        v-for="(project, index) in projects"
                        :key="index"
                    >
                        <v-row no-gutters>
                            <v-col
                                align-self="center"
                                cols="12"
                                sm="6"
                            >
                                <v-img
                                    :src="project.image"
                                    :lazy-src="project.image"
                                    cover
                                >
                                    <template #placeholder>
                                        <v-row
                                            class="fill-height ma-0"
                                            align="center"
                                            justify="center"
                                        >
                                            <v-progress-circular
                                                indeterminate
                                                color="grey-lighten-5"
                                            />
                                        </v-row>
                                    </template>
                                </v-img>
                            </v-col>

                            <v-col
                                class="px-4"
                                cols="12"
                                sm="6"
                            >
                                <h4> {{ project.title }} </h4>
                                <div class="mt-1">
                                    {{ project.subtitle }}

                                    <v-list
                                        lines="one"
                                        density="compact"
                                    >
                                        <v-list-item
                                            v-for="(title, index) in project.list"
                                            :key="index"
                                            :title="title"
                                        />
                                    </v-list>
                                </div>
                            </v-col>
                        </v-row>

                        <v-divider
                            v-if="index < projects.length - 1"
                            class="py-1"
                        />
                    </div>
                </div>
            </div>
        </v-card>
    </v-row>
</template>

<script setup>
    import { ref, computed, onMounted, reactive } from "vue";
    import { vueTyperNext } from "vue-typer-next";
    import "vue-typer-next/dist/style.css";
  
    // data
    const terminal_instruction = ref(['cat self-introductions.txt']);
    const current_info = ref("about me");
    const show_pending_cursor = ref(false);

    const info_list = ref([
        { icon: "mdi-face-man-shimmer", color: "yellow", name: "about me", instruction: "cat self-introductions.txt" },
        { icon: "mdi-briefcase", color: "white", name: "work experience", instruction: "cat work-experience.txt" },
        { icon: "mdi-web-box", color: "white", name: "projects", instruction: "qlmanage -p 1.png; cat projects.txt" },
    ]);

    const self_introductions = ref([
        "- 熟悉 Vue生態系：Vue2、Vue3、Vite、Vue-Router、Vuex", 
        "- 熟悉 HTML5、CSS3、RWD響應式設計", 
        "- 熟悉 JS 與 ES8 知識",
        "- 熟悉 Vuetify(主要)、Bootstrap、Tailwind 等 CSS framework",
        "- 使用 Axios 串接 api",
        "- 使用 Echarts 開發多種圖表",
        "- 熟悉 Git 指令並按照 Git Flow 進行版本控管",
    ]);

    const job_titles = ref([
        "- 前端主管：負責分派工項給前端工程師、每週 code review 以及技術分享",
        "- 專案窗口：工程師與客戶之間的溝通、追蹤案子進度",
        "- mentor：新人教育訓練（練習題、code review、熟悉業務邏輯）、將新人手把手培養成戰力。",
    ]);

    const projects = ref([
        { 
            image: new URL('@/assets/images/WPPS.png', import.meta.url).href, 
            title: "風雨預報整合系統", 
            subtitle: "將風力跟雨量資訊呈現在 echarts 地圖上，地圖一次顯示多個時刻，且位置、縮放比例隨時保持同步。",
            list: [
                "- 系統使用 Vue2 進行開發",
                "- 從 Webpack 改為使用 Vite，Hot reload 的速度快上許多",
                "- 將地圖從 Leaflet 改成由 Echarts 實作，效能顯著提升、套件擴充性的表現也較佳"
            ]
        },
        { 
            image: new URL('@/assets/images/Metwatch.png', import.meta.url).href, 
            title: "客製化氣象情資服務整合平台", 
            subtitle: "此平台整合多個客製化氣象 APP 至同一網站，上傳之 APP 會以 widget 的形式出現在網頁上，每個 widget 可自由更換位置以及大小。",
            list: [
                "- 系統使用 Vue2 進行開發",
                "- 從 Webpack 改為使用 Vite，並將 Vuetify 1 升級成 Vuetify 2，專案開發速度上提升許多",
                "- 將使用 Vue Grid Layout 開發網站上的 widgets"
            ]
        },
        { 
            image: new URL('@/assets/images/Dockerflow.png', import.meta.url).href, 
            title: "Dockerflow", 
            subtitle: "將多個不同的 docker service 整合至同一平台顯示，可在網站上取得 service 的 log、status、run config 等資訊。",
            list: [
                "- 系統使用 Vue2 搭配 Vite、Vuetify 進行開發",
                "- 使用 dagre-d3 實作可拖曳、放大縮小之 docker task 樹狀圖",
                "- 利用 Vuex 儲存跨元件之 config"
            ]
        },
    ]);

    // methods
    const change_current_info = (info) => {
        if (terminal_instruction.value == info.instruction) 
            return;
        info_list.value.forEach(info => info.color = 'white');
        current_info.value = info.name;
        terminal_instruction.value = info.instruction;
        show_pending_cursor.value = false;
        info.color = 'yellow';
    };
</script>


<style scoped>
    .blink {
        animation: blink 1s step-start infinite;
    }
    
    @keyframes blink {
        0%, 100% {
            opacity: 1;
        }
        50% {
            opacity: 0;
        }
    }
    
    .info-btn:hover {
        filter: brightness(80%);
    }

    :deep(.v-list-item-title) {
        white-space: pre-line;
    }

</style>