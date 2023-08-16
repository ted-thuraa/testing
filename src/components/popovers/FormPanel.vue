<template>
    <TransitionRoot as="template" :show="isFormOpen">
        <Dialog as="div" class="relative z-10">
            <TransitionChild
                as="template"
                enter="ease-out duration-300"
                enter-from="opacity-0"
                enter-to="opacity-100"
                leave="ease-in duration-200"
                leave-from="opacity-100"
                leave-to="opacity-0"
            >
                <div
                    class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
                />
            </TransitionChild>
            <div class="fixed inset-0 overflow-hidden">
                <div class="absolute inset-0 overflow-hidden">
                    <div
                        class="pointer-events-none fixed bottom-0 top-[4rem] right-0 flex max-w-full"
                    >
                        <TransitionChild
                            as="template"
                            enter="transform transition ease-in-out duration-500 sm:duration-700"
                            enter-from="translate-y-full"
                            enter-to="translate-y-0"
                            leave="transform transition ease-in-out duration-500 sm:duration-700"
                            leave-from="translate-y-0"
                            leave-to="translate-y-full"
                        >
                            <DialogPanel
                                class="pointer-events-auto relative w-screen max-w-md"
                            >
                                <div
                                    class="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl"
                                >
                                    <button
                                        type="button"
                                        class="px-4 sm:px-6 relative rounded-md text-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                                        @click="$emit('closeFormOpen')"
                                    >
                                        <span class="absolute -inset-2.5" />
                                        <span class="sr-only">Close panel</span>
                                        <XMarkIcon
                                            class="h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    </button>
                                    <div class="px-4 sm:px-6">
                                        <DialogTitle
                                            class="text-base font-semibold leading-6 text-gray-900"
                                            >forms</DialogTitle
                                        >
                                    </div>
                                    <div
                                        class="relative mt-6 flex-1 px-4 sm:px-6"
                                    >
                                        <!-- Your content -->
                                        <div
                                            class="max-w-xl lg:max-w-lg text-center"
                                        >
                                            <h2
                                                class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
                                            >
                                                Subscribe to our newsletter.
                                            </h2>
                                            <p
                                                class="mt-4 text-lg leading-8 text-gray-900"
                                            >
                                                Nostrud amet eu ullamco nisi
                                                aute in ad minim nostrud
                                                adipisicing velit quis. Duis
                                                tempor incididunt dolore.
                                            </p>
                                            <div
                                                class="mt-6 flex max-w-md gap-x-4"
                                            >
                                                <label
                                                    for="email-address"
                                                    class="sr-only"
                                                    >Email address</label
                                                >
                                                <input
                                                    id="email-address"
                                                    v-model="clientmail"
                                                    name="email"
                                                    type="email"
                                                    autocomplete="email"
                                                    required=""
                                                    class="min-w-0 flex-auto rounded-md border-0 bg-gray-200 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                                                    placeholder="Enter your email"
                                                />
                                                <button
                                                    @click="joinMailingList"
                                                    type="submit"
                                                    class="flex-none rounded-md bg-indigo-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                                                >
                                                    Subscribe
                                                </button>
                                            </div>
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

const emit = defineEmits(["closeFormOpen"]);

const props = defineProps({
    isFormOpen: Boolean,
});

const { isFormOpen } = toRefs(props);

let clientmail = ref("");
let errors = ref(null);

const joinMailingList = async () => {
    try {
        console.log(clientmail.value);
        //await store.dispatch("joinMailingList", clientmail.value);
    } catch (error) {
        console.log(error);
        errors.value = error.response.data.errors;
    }
};
</script>
