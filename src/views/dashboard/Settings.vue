<template>
    <div
        id="settingspage"
        class="flex flex-col h-[100vh] pl-4 overflow-y-scroll bg-white"
    >
        <div
            class="lg:w-[calc(100%-500px)] md:w-[calc(100%-330px)] w-full md:pt-20 pt-14"
        >
            <div class="space-y-6">
                <div>
                    <label
                        for="email"
                        class="block text-sm font-medium leading-6 text-gray-900"
                        >Authorize google sheets</label
                    >
                </div>

                <div>
                    <button
                        @click="authorizeGoogleSheets"
                        type="button"
                        class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Authorize
                    </button>
                </div>
                <div class="mt-20">
                    <button
                        @click="getSheets"
                        type="button"
                        class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        get sheets
                    </button>
                </div>
            </div>
        </div>
        <div
            class="lg:w-[calc(100%-500px)] md:w-[calc(100%-330px)] w-full md:pt-20 pt-14"
        >
            <div class="space-y-6">
                <div>
                    <label
                        for="email"
                        class="block text-sm font-medium leading-6 text-gray-900"
                        >Authorize Mailchimp</label
                    >
                </div>

                <div>
                    <button
                        @click="authorizeMailchimp"
                        type="button"
                        class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Authorize Mailchimp
                    </button>
                </div>
            </div>
            <div class="mt-20">
                <button
                    @click="getMailchimpAccessToken"
                    type="button"
                    class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    get token testing
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import debounce from "lodash/debounce";
import { ref, watch, computed, onMounted } from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
const store = useStore();
const router = useRouter();
const route = useRoute();

let name = ref("");
let bio = ref("");
let data = ref(null);
let errors = ref("");
let isBioFocused = ref(false);
let openCropper = ref(false);

async function authorizeGoogleSheets() {
    try {
        const res = await store.dispatch("authenticateGooglesheets");
        console.log(res.data);
        window.location.href = res.data;
    } catch (error) {
        console.error("Google Sheets authentication error:", error);
    }
}
async function authorizeMailchimp() {
    try {
        const res = await store.dispatch("authorizeMailchimp");
        console.log(res.data);
        //window.location.href = res.data;
    } catch (error) {
        console.error("mailchimp authentication error:", error);
    }
}

async function getMailchimpAccessToken(code) {
    try {
        await store.dispatch("getMailchimpAccessToken", code);
    } catch (error) {
        console.error("getMailchimpAccessToken error:", error);
    }
}

async function setGoogletoken(code) {
    try {
        await store.dispatch("setGoogleSheeetsTkn", code);
        console.log(res.data);
    } catch (error) {
        console.error("Google Sheets authentication error:", error);
    }
}
async function getSheets() {
    try {
        await store.dispatch("getSheets");
    } catch (error) {
        console.error("Google Sheets get error:", error);
    }
}

onMounted(() => {
    if (route.query.code) {
        const code = route.query.code;
        if (code) {
            // Save the token or use it as needed
            // For example, you might store it in Vuex or localStorage
            console.log(code);
            //setGoogletoken(code);
            getMailchimpAccessToken(code);
        }
    }
});
</script>
