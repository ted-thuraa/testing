<template>
    <div>
        <div class="w-full h-auto text-sm text-left text-gray-500">
            <div class="flex flex-col">
                <div class="w-full text-right text-gray-200"><p>clicks</p></div>
                <div
                    v-for="link in LinkData"
                    :key="link.id"
                    class="bg-gray-700 text-gray-200 w-full rounded-md my-1 flex flex-row items-center justify-between"
                >
                    <p class="px-2 py-1">{{ link.name }}</p>
                    <p class="px-2 py-1">{{ link.clicks }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, watch, computed, onMounted } from "vue";

import { useStore } from "vuex";
const store = useStore();
let username = ref("");
let LinkData = ref(null);
let errors = ref(null);

const getTopLinks = async (username) => {
    try {
        const res = await store.dispatch("fetchTopLinks", username.value);
        console.log(res.data);
        LinkData.value = res.data;
    } catch (error) {
        console.log(error);
        errors.value = error.response.data.errors;
    }
};

onMounted(async () => {
    username.value = store.state.user.name;
    await getTopLinks(username);
});
</script>
