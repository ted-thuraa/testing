<template>
    <div class="relative">
        <div></div>
        <div
            class="overflow-hidden bg-white mb-4 h-auto text-[#1e2330] rounded-[1.5rem]"
        >
            <a
                :href="link.url"
                target="_blank"
                class="h-auto w-full appearance-none cursor-pointer"
            >
                <div
                    class="flex flex-row flex-nowrap h-auto w-full justify-between items-center py-2 px-2 appearance-none m-0 cursor-pointer break-words bg-transparent whitespace-normal"
                >
                    <div
                        class="p-1 shadow-xl rounded-[0.5rem]"
                        :class="link.image ? 'bg-gray-100' : ''"
                    >
                        <img
                            loading="lazy"
                            :src="link.image"
                            alt=""
                            class="h-6 rounded-[0.5rem] object-cover"
                        />
                    </div>

                    <p
                        class="p-0 m-0 w-full text-base text-center font-medium pr-1 max-w-[220px]"
                    >
                        {{ link.name }}
                    </p>
                    <button
                        class="my-auto mx-0 flex h-[40px] w-[40px] items-center justify-center rounded-[4rem]"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-6 h-6"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                            />
                        </svg>
                    </button>
                </div>
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
console.log(link);
</script>

<style lang="scss" scoped></style>
