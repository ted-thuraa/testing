<template>
    <div class="relative">
        <div
            class="relative w-full mb-4 p-4 bg-white border border-gray-200 rounded-[2rem] shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700"
        >
            <div
                class="relative w-max z-10 rounded-full bg-gray-50 px-3 py-[0.275rem] font-medium text-xs text-gray-600 hover:bg-gray-100"
            >
                <span>{{ link.data.status }}</span>
            </div>

            <div class="my-2">
                <div>
                    <div class="flex items-center rounded-lg">
                        <div class="shadow-xl rounded-[0.5rem] bg-gray-100">
                            <img
                                loading="lazy"
                                :src="link.image"
                                alt=""
                                class="h-6 rounded-[0.5rem] object-cover"
                            />
                        </div>

                        <span
                            class="flex-1 ml-3 text-lg md:text-xl font-bold text-black whitespace-nowrap"
                            >{{ link.name }}</span
                        >

                        <div
                            v-if="link.data.showcurrentmrr"
                            class="rounded-[1rem] py-[0.1rem] flex items-center flex-row border border-gray-800 text-[0.6875rem]"
                        >
                            <div class="inline-flex items-center px-[0.4rem]">
                                <span class="mr-1 text-gray-600">Verified</span>
                                <span class="relative flex items-center">
                                    <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <rect
                                            width="20"
                                            height="20"
                                            rx="5"
                                            fill="url(#paint0_linear_855_162)"
                                        />
                                        <path
                                            d="M9.656 16.6C9.53867 16.6 9.44267 16.5627 9.368 16.488C9.29333 16.4133 9.256 16.3173 9.256 16.2V15.096C8.43467 14.9893 7.74667 14.7813 7.192 14.472C6.648 14.1627 6.23733 13.7893 5.96 13.352C5.68267 12.904 5.53333 12.4347 5.512 11.944C5.512 11.8587 5.544 11.784 5.608 11.72C5.68267 11.6453 5.768 11.608 5.864 11.608H7.88C8.02933 11.608 8.14133 11.6347 8.216 11.688C8.29067 11.7413 8.36533 11.8107 8.44 11.896C8.52533 12.056 8.64267 12.2107 8.792 12.36C8.952 12.5093 9.15467 12.632 9.4 12.728C9.656 12.8133 9.97067 12.856 10.344 12.856C10.9627 12.856 11.4267 12.76 11.736 12.568C12.056 12.376 12.216 12.1147 12.216 11.784C12.216 11.5493 12.1307 11.3573 11.96 11.208C11.7893 11.048 11.512 10.9093 11.128 10.792C10.7547 10.664 10.2533 10.536 9.624 10.408C8.81333 10.2373 8.12 10.0187 7.544 9.752C6.97867 9.47467 6.54667 9.11733 6.248 8.68C5.94933 8.232 5.8 7.67733 5.8 7.016C5.8 6.16267 6.104 5.43733 6.712 4.84C7.33067 4.24267 8.17867 3.86933 9.256 3.72V2.6C9.256 2.48267 9.29333 2.38667 9.368 2.312C9.44267 2.23733 9.53867 2.2 9.656 2.2H10.984C11.0907 2.2 11.1813 2.23733 11.256 2.312C11.3413 2.38667 11.384 2.48267 11.384 2.6V3.752C12.12 3.88 12.7387 4.10933 13.24 4.44C13.7413 4.77067 14.12 5.144 14.376 5.56C14.6427 5.976 14.7813 6.376 14.792 6.76C14.792 6.84533 14.76 6.92533 14.696 7C14.632 7.064 14.552 7.096 14.456 7.096H12.344C12.2267 7.096 12.1253 7.07467 12.04 7.032C11.9547 6.98933 11.88 6.92 11.816 6.824C11.752 6.58933 11.5813 6.38667 11.304 6.216C11.0267 6.03467 10.6693 5.944 10.232 5.944C9.77333 5.944 9.41067 6.02933 9.144 6.2C8.87733 6.36 8.744 6.61067 8.744 6.952C8.744 7.16533 8.81333 7.352 8.952 7.512C9.10133 7.672 9.34667 7.81067 9.688 7.928C10.0293 8.04533 10.4933 8.168 11.08 8.296C12.0507 8.47733 12.8347 8.70667 13.432 8.984C14.0293 9.25067 14.4667 9.60267 14.744 10.04C15.0213 10.4667 15.16 11.0053 15.16 11.656C15.16 12.2853 15 12.84 14.68 13.32C14.3707 13.8 13.9333 14.1893 13.368 14.488C12.8027 14.7867 12.1413 14.984 11.384 15.08V16.2C11.384 16.3173 11.3413 16.4133 11.256 16.488C11.1813 16.5627 11.0907 16.6 10.984 16.6H9.656Z"
                                            fill="white"
                                        />
                                        <defs>
                                            <linearGradient
                                                id="paint0_linear_855_162"
                                                x1="3.22911"
                                                y1="1.58761"
                                                x2="21.3026"
                                                y2="9.6467"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop stop-color="#8D2DE1" />
                                                <stop
                                                    offset="1"
                                                    stop-color="#6313FF"
                                                />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </span>
                            </div>
                            <div>
                                <span
                                    class="p-[0.19rem] rounded-[4rem] text-black"
                                    >$<!-- -->{{ link.data.currentmrr
                                    }}<!-- -->/mo</span
                                >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="my-2">
                <span
                    class="mr-1 inline-flex items-center rounded-xl bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10"
                    >SaaS</span
                >
                <span
                    class="mr-1 inline-flex items-center rounded-xl bg-gray-50 px-2 py-1 text-xs font-medium text-gray-700 ring-1 ring-inset ring-gray-600/10"
                    >{{ link.data.category }}</span
                >
            </div>
            <!-- <div class="my-2">
                <div class="inline-flex items-center">
                    <div class="mr-2">
                        <h2
                            class="text-xs font-semibold leading-7 text-gray-900"
                        >
                            Type
                        </h2>
                        <p class="mt-0.5 text-xs leading-6 text-gray-600">
                            SaaS
                        </p>
                    </div>
                    <div class="mr-2">
                        <h2
                            class="text-xs font-semibold leading-7 text-gray-900"
                        >
                            Industry
                        </h2>
                        <p class="mt-0.5 text-xs leading-6 text-gray-600">Ai</p>
                    </div>
                </div>
            </div> -->
            <div class="my-2">
                <p
                    class="inline-flex items-center text-base font-medium md:text-lg text-gray-600"
                >
                    {{ link.description }}
                </p>
            </div>
            <div class="my-2">
                <div class="inline-flex items-center justify-center w-full">
                    <button
                        class="inline-block rounded-[4rem] border border-transparent bg-indigo-700 px-8 py-1.5 text-center font-medium text-white hover:bg-indigo-700"
                    >
                        Feedback
                    </button>
                </div>
            </div>
            <div class="my-4">
                <div class="w-full">
                    <img
                        class="rounded-xl shadow-md drop-shadow-md w-full h-auto object-cover"
                        :src="link.thumbnailimage"
                        alt=""
                    />
                </div>
            </div>
            <div class="absolute bottom-[1.1rem] left-[7.1rem]">
                <div
                    class="flex items-center bg-black/50 ring-1 ring-inset ring-black/20 rounded-[2rem]"
                >
                    <div class="p-2 bg-black rounded-[2rem] mr-10">
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
                                d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                            />
                        </svg>
                    </div>
                    <a
                        :href="link.url"
                        target="_blank"
                        class="p-2 bg-black rounded-[2rem]"
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
                                d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                            />
                        </svg>
                    </a>
                </div>
            </div>
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
