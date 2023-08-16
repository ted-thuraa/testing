<template>
    <TransitionRoot as="template" :show="isMoreInfoOpen">
        <Dialog as="div" class="relative z-[100]">
            <div class="fixed inset-0 overflow-hidden">
                <div class="absolute inset-0 overflow-hidden">
                    <div
                        class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full"
                    >
                        <TransitionChild
                            as="template"
                            enter="transform transition ease-in-out duration-500 sm:duration-700"
                            enter-from="translate-x-full"
                            enter-to="translate-x-0"
                            leave="transform transition ease-in-out duration-500 sm:duration-700"
                            leave-from="translate-x-0"
                            leave-to="translate-x-full"
                        >
                            <DialogPanel
                                class="pointer-events-auto relative w-screen max-w-md"
                            >
                                <div
                                    class="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl"
                                >
                                    <div
                                        class="px-4 sm:px-6 relative flex items-start"
                                    >
                                        <button
                                            type="button"
                                            class="p-1 flex items-center shadow-lg relative rounded-md bg-gray-200 text-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                                            @click="$emit('closeMoreInfoModal')"
                                        >
                                            <span class="absolute -inset-2.5" />
                                            <span class="sr-only"
                                                >Close panel</span
                                            >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke-width="1.5"
                                                stroke="currentColor"
                                                class="w-5 h-5"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    d="M15.75 19.5L8.25 12l7.5-7.5"
                                                />
                                            </svg>
                                        </button>
                                    </div>

                                    <div class="px-4 sm:px-6">
                                        <DialogTitle
                                            class="mt-6 text-[2rem] font-bold leading-6 text-gray-900"
                                            >{{ link.name }}</DialogTitle
                                        >
                                    </div>
                                    <div
                                        class="relative mt-6 flex-1 px-4 sm:px-6 h-screen overflow-y-auto"
                                    >
                                        <!-- Your content -->
                                        <div
                                            class="mb-4 flex h-[198px] w-full overflow-hidden flex-1 whitespace-break-spaces"
                                            style="
                                                box-shadow: 0 2px 4px
                                                    rgba(0, 0, 0, 0.04);
                                            "
                                        >
                                            <img
                                                :src="link.thumbnailimage"
                                                alt=""
                                                class="w-full h-full rounded-[1rem] object-cover"
                                            />
                                        </div>

                                        <div class="blog relative mt-2">
                                            <TiptapReadOnly :link="link" />
                                            <!-- <div
                                                v-html="
                                                    link.data.portfolio_blog
                                                "
                                            ></div> -->
                                            <p class="text-sm text-gray-500">
                                                Your payment has been
                                                successfully submitted. We’ve
                                                sent you an email with all of
                                                the details of your order.
                                            </p>
                                        </div>

                                        <div class="mt-4">
                                            <button
                                                type="button"
                                                class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                                @click="
                                                    $emit('closeMoreInfoModal')
                                                "
                                            >
                                                Got it, thanks!
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>

<script setup>
import TiptapReadOnly from "../TiptapReadOnly.vue";
import { ref, watch, computed, onMounted, toRefs } from "vue";
import {
    Dialog,
    DialogPanel,
    DialogTitle,
    TransitionChild,
    TransitionRoot,
} from "@headlessui/vue";
import { XMarkIcon } from "@heroicons/vue/24/outline";
import { useStore } from "vuex";
const store = useStore();

const emit = defineEmits(["closeMoreInfoModal"]);

const props = defineProps({
    link: Object,
    isMoreInfoOpen: Boolean,
});

const { link } = toRefs(props);

const { isMoreInfoOpen } = toRefs(props);
</script>
<style lang="scss">
.blog {
    color: rgb(24, 24, 24);
    > * + * {
        margin-top: 0.75em;
    }
}
</style>
