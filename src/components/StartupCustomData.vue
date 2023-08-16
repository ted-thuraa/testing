<template>
    <div>
        <div class="mt-4 flex flex-col">
            <div class="sm:col-span-4">
                <label
                    for="username"
                    class="block text-sm font-medium leading-6 text-gray-900"
                    >Category</label
                >
                <div class="mt-2">
                    <div class="flex">
                        <select
                            id="category"
                            name="category"
                            v-model="category"
                            @change="dataChange"
                            autocomplete="category"
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                        >
                            <option
                                v-for="option in categories"
                                :key="option.value"
                                :value="option.value"
                            >
                                {{ option.label }}
                            </option>
                        </select>
                    </div>
                </div>
            </div>

            <div class="col-span-full">
                <label
                    for="about"
                    class="block text-sm font-medium leading-6 text-gray-900"
                    >Status</label
                >
                <div class="mt-2">
                    <select
                        id="status"
                        name="status"
                        v-model="status"
                        @change="dataChange"
                        autocomplete="status"
                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                        <option
                            v-for="option in startupstatus"
                            :key="option.value"
                            :value="option.value"
                        >
                            {{ option.label }}
                        </option>
                    </select>
                </div>
            </div>
            <div class="relative flex gap-x-3 mt-4">
                <div class="flex h-6 items-center">
                    <input
                        id="comments"
                        name="comments"
                        type="checkbox"
                        v-model="showstatus"
                        @change="dataChange"
                        value="true"
                        checked=""
                        class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                </div>
                <div class="text-sm leading-6">
                    <label for="comments" class="font-medium text-gray-900"
                        >Show startup status on My profile</label
                    >
                </div>
            </div>
            <div class="col-span-full mt-6">
                <label
                    for="about"
                    class="block text-sm font-medium leading-6 text-gray-900"
                    >Curret MRR$</label
                >
                <div class="mt-2">
                    <input
                        id="mrr"
                        name="mrr"
                        v-model="currentmrr"
                        @change="dataChange"
                        type="number"
                        placeholder="100"
                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
                <p class="mt-3 text-sm leading-6 text-gray-600">
                    Write a few sentences about yourself.
                </p>
            </div>
            <div class="relative flex gap-x-3">
                <div class="flex h-6 items-center">
                    <input
                        id="showmrr"
                        name="showmrr"
                        type="checkbox"
                        v-model="showcurrentmrr"
                        @change="dataChange"
                        value="true"
                        checked=""
                        class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                </div>
                <div class="text-sm leading-6">
                    <label for="comments" class="font-medium text-gray-900"
                        >Show MRR</label
                    >
                </div>
            </div>
        </div>

        <div class="ml-[48px] mr-[64px] mt-2 border-t border-neutral pt-2">
            <div class="flex flex-col gap-2">
                <div class="text-gray-950 divider my-2 text-sm">OR</div>
                <p
                    class="text-gray-950 text-sm text-base-content-secondary text-center mb-2"
                >
                    Automated MRR computation, Stripe badge, and revenue chart!
                </p>
                <div class="w-full">
                    <button
                        class="btn btn-block bg-[#635bff] active:bg-[#735bff] hover:bg-[#735bff] focus:bg-[#735bff] text-white"
                    >
                        Connect with
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            x="0"
                            y="0"
                            viewBox="0 0 468 222.5"
                            xml:space="preserve"
                            class="w-14 fill-white"
                        >
                            <path
                                class="st0"
                                d="M414 113.4c0-25.6-12.4-45.8-36.1-45.8-23.8 0-38.2 20.2-38.2 45.6 0 30.1 17 45.3 41.4 45.3 11.9 0 20.9-2.7 27.7-6.5v-20c-6.8 3.4-14.6 5.5-24.5 5.5-9.7 0-18.3-3.4-19.4-15.2h48.9c0-1.3.2-6.5.2-8.9zm-49.4-9.5c0-11.3 6.9-16 13.2-16 6.1 0 12.6 4.7 12.6 16h-25.8zM301.1 67.6c-9.8 0-16.1 4.6-19.6 7.8l-1.3-6.2h-22v116.6l25-5.3.1-28.3c3.6 2.6 8.9 6.3 17.7 6.3 17.9 0 34.2-14.4 34.2-46.1-.1-29-16.6-44.8-34.1-44.8zm-6 68.9c-5.9 0-9.4-2.1-11.8-4.7l-.1-37.1c2.6-2.9 6.2-4.9 11.9-4.9 9.1 0 15.4 10.2 15.4 23.3 0 13.4-6.2 23.4-15.4 23.4zM223.8 61.7l25.1-5.4V36l-25.1 5.3zM223.8 69.3h25.1v87.5h-25.1zM196.9 76.7l-1.6-7.4h-21.6v87.5h25V97.5c5.9-7.7 15.9-6.3 19-5.2v-23c-3.2-1.2-14.9-3.4-20.8 7.4zM146.9 47.6l-24.4 5.2-.1 80.1c0 14.8 11.1 25.7 25.9 25.7 8.2 0 14.2-1.5 17.5-3.3V135c-3.2 1.3-19 5.9-19-8.9V90.6h19V69.3h-19l.1-21.7zM79.3 94.7c0-3.9 3.2-5.4 8.5-5.4 7.6 0 17.2 2.3 24.8 6.4V72.2c-8.3-3.3-16.5-4.6-24.8-4.6C67.5 67.6 54 78.2 54 95.9c0 27.6 38 23.2 38 35.1 0 4.6-4 6.1-9.6 6.1-8.3 0-18.9-3.4-27.3-8v23.8c9.3 4 18.7 5.7 27.3 5.7 20.8 0 35.1-10.3 35.1-28.2-.1-29.8-38.2-24.5-38.2-35.7z"
                            ></path>
                        </svg>
                    </button>
                    <p
                        class="flex items-center justify-center gap-2 text-sm text-base-content-secondary mt-3"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            class="w-4 h-4"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                                clip-rule="evenodd"
                            ></path></svg
                        ><span
                            ><a
                                class="link hover:link-primary"
                                href="/admin/upgrade"
                                >Upgrade</a
                            >
                            to show verified revenue</span
                        >
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import debounce from "lodash/debounce";
import { watch, ref, onMounted, toRefs } from "vue";
import { useStore } from "vuex";
const store = useStore();

const props = defineProps({
    link: Object,
    //selectedId: { type: Number, default: 0 },
    //selectedStr: { type: String, default: "" },
});

const { link } = toRefs(props);
const model = ref(JSON.parse(JSON.stringify(props.link)));

let category = ref("");
let status = ref("");
let showstatus = ref(false);
let currentmrr = ref("");
let showcurrentmrr = ref(false);

onMounted(() => {
    category.value = props.link.data?.category || "";
    status.value = props.link.data?.status || "";
    showstatus.value = props.link.data?.showstatus || false;
    currentmrr.value = props.link.data?.currentmrr || "";
    showcurrentmrr.value = props.link.data?.showcurrentmrr || false;
});

const categories = [
    {
        label: "artificial-intelligence",
        value: "🤖&nbsp;&nbsp;Artificial Intelligence",
    },
    {
        label: "productivity",
        value: "✍️&nbsp;&nbsp;Productivity",
    },
    {
        label: "education",
        value: "📚&nbsp;&nbsp;Education",
    },
    {
        label: "no-code",
        value: "🐲&nbsp;&nbsp;No Code",
    },
    {
        label: "social-media",
        value: "💬&nbsp;&nbsp;Social Media",
    },
    {
        label: "e-commerce",
        value: "🛍️&nbsp;&nbsp;E-Commerce",
    },
    {
        label: "analytics",
        value: "&nbsp;&nbsp;Analytics",
    },
    {
        label: "web3",
        value: "🦇&nbsp;&nbsp;Web 3",
    },
    {
        label: "design-tools",
        value: "👓&nbsp;&nbsp;Design Tools",
    },
    {
        label: "developer-tools",
        value: "🧑‍💻&nbsp;&nbsp;Developer Tools",
    },
    {
        label: "marketing",
        value: "📊&nbsp;&nbsp;Marketing",
    },
    {
        label: "finance",
        value: "💰&nbsp;&nbsp;Finance",
    },
    {
        label: "other",
        value: "🔮&nbsp;&nbsp;Others",
    },
];

const startupstatus = [
    {
        label: "building",
        value: "🏗️ Building...",
    },
    {
        label: "active",
        value: "🟢 Active",
    },
    {
        label: "break",
        value: "☕️ On hold",
    },
    {
        label: "for-sale",
        value: "🤝 For Sale",
    },
    {
        label: "acquired",
        value: "💰 Acquired",
    },
    {
        label: "discontinued",
        value: "❌ Discontinued",
    },
];

const dataChange = async () => {
    console.log(model.value.data);

    model.value.data = {
        category: category.value,
        status: status.value,
        showstatus: showstatus.value,
        currentmrr: currentmrr.value,
        showcurrentmrr: showcurrentmrr.value,
    };
    console.log(model);
    try {
        await store.dispatch("updateStartupData", model.value);
        await store.dispatch("getAllLinks");
    } catch (error) {
        console.log(error);
    }
};
</script>

<style></style>
