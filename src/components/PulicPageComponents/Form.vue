<template>
    <div class="relative">
        <div></div>
        <div
            class="p-4 overflow-hidden bg-white mb-4 h-auto text-[#1e2330] rounded-[1.5rem]"
        >
            <a
                class="relative flex flex-col items-center justify-center h-auto w-full appearance-none cursor-pointer"
            >
                <h2
                    class="text-[26px] text-center leading-[32px] sm:text-3xl md:text-5xl md:leading-[55px] font-bold text-black"
                >
                    Discover ideas that make money
                </h2>
                <p
                    class="text-base text-center md:text-lg font-medium text-gray-600"
                >
                    Get our 5 minute email newslettter packed with business
                    ideas and money-making opportunities, backed by real-life
                    case studies.
                </p>
                <button
                    @click="openFormOpen"
                    class="mt-4 flex items-center p-4 px-16 rounded-[4rem] text-white bg-indigo-900"
                >
                    <span>subscribe</span>
                </button>
            </a>
        </div>
    </div>
</template>

<script setup>
import { watch, ref, onMounted, toRefs } from "vue";
import { useStore } from "vuex";
const store = useStore();

const props = defineProps({
    link: Object,
});
const { link } = toRefs(props);
</script>

<style lang="scss" scoped></style>
