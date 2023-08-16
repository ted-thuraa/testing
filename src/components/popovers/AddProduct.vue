<template>
    <TransitionRoot appear :show="isOpenAddproduct" as="template">
        <Dialog as="div" @close="$emit('closeModal')" class="relative z-10">
            <TransitionChild
                as="template"
                enter="duration-300 ease-out"
                enter-from="opacity-0"
                enter-to="opacity-100"
                leave="duration-200 ease-in"
                leave-from="opacity-100"
                leave-to="opacity-0"
            >
                <div class="fixed inset-0 bg-black bg-opacity-25" />
            </TransitionChild>

            <div class="fixed inset-0 overflow-y-auto">
                <div
                    class="flex min-h-full items-center justify-center p-4 text-center"
                >
                    <TransitionChild
                        as="template"
                        enter="duration-300 ease-out"
                        enter-from="opacity-0 scale-95"
                        enter-to="opacity-100 scale-100"
                        leave="duration-200 ease-in"
                        leave-from="opacity-100 scale-100"
                        leave-to="opacity-0 scale-95"
                    >
                        <div
                            class="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4"
                        >
                            <TransitionChild
                                as="template"
                                enter="ease-out duration-300"
                                enter-from="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
                                enter-to="opacity-100 translate-y-0 md:scale-100"
                                leave="ease-in duration-200"
                                leave-from="opacity-100 translate-y-0 md:scale-100"
                                leave-to="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
                            >
                                <DialogPanel
                                    class="flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl"
                                >
                                    <div
                                        class="relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8"
                                    >
                                        <button
                                            type="button"
                                            class="absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-4"
                                            @click="$emit('closeModal')"
                                        >
                                            <span class="sr-only">Close</span>
                                            <XMarkIcon
                                                class="h-6 w-6"
                                                aria-hidden="true"
                                            />
                                        </button>

                                        <div class="mt-6">
                                            <div
                                                class="relative inline-flex group w-full"
                                            >
                                                <div
                                                    class="h-[15rem] overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5"
                                                >
                                                    <img
                                                        class="w-full h-full object-cover object-center"
                                                        src="../../assets/images/samplestartup.jpg"
                                                    />
                                                </div>

                                                <div
                                                    class="w-full absolute inset-0 flex justify-center items-center bg-transparent group-hover:bg-gray-300/50 duration-200 cursor-pointer"
                                                >
                                                    <button
                                                        @click="
                                                            openCropper = true
                                                        "
                                                        class="flex items-center justify-center p-2 bg-neutral-400/50 border-neutral/50 group-hover:bg-neutral-800/50 group-hover:border-neutral"
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
                                                                d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
                                                            />
                                                            <path
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                                d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
                                                            />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                            <!-- <div
                                                class="aspect-h-3 aspect-w-2 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5"
                                            >
                                                <img
                                                    :src="product.imageSrc"
                                                    :alt="product.imageAlt"
                                                    class="object-cover object-center"
                                                />
                                            </div> -->
                                            <div
                                                class="sm:col-span-8 lg:col-span-7"
                                            >
                                                <section
                                                    aria-labelledby="options-heading"
                                                    class="mt-10"
                                                >
                                                    <h3
                                                        id="options-heading"
                                                        class="sr-only"
                                                    >
                                                        Product options
                                                    </h3>

                                                    <form
                                                        @submit.prevent="
                                                            AddEcomItem
                                                        "
                                                    >
                                                        <div class="mt-4">
                                                            <label
                                                                for="price"
                                                                class="block text-sm font-medium leading-6 text-gray-900"
                                                                >name</label
                                                            >
                                                            <div
                                                                class="relative mt-2 rounded-md shadow-sm"
                                                            >
                                                                <input
                                                                    type="text"
                                                                    v-model="
                                                                        productname
                                                                    "
                                                                    name="name"
                                                                    id="name"
                                                                    class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                                    placeholder="name"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div class="mt-4">
                                                            <label
                                                                for="price"
                                                                class="block text-sm font-medium leading-6 text-gray-900"
                                                                >Price</label
                                                            >
                                                            <div
                                                                class="relative mt-2 rounded-md shadow-sm"
                                                            >
                                                                <div
                                                                    class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
                                                                >
                                                                    <span
                                                                        class="text-gray-500 sm:text-sm"
                                                                        >$</span
                                                                    >
                                                                </div>
                                                                <input
                                                                    type="text"
                                                                    v-model="
                                                                        price
                                                                    "
                                                                    name="price"
                                                                    id="price"
                                                                    class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                                    placeholder="0.00"
                                                                />
                                                            </div>
                                                        </div>

                                                        <button
                                                            type="submit"
                                                            class="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                                        >
                                                            Add item
                                                        </button>
                                                    </form>
                                                </section>
                                            </div>
                                        </div>
                                    </div>
                                </DialogPanel>
                            </TransitionChild>
                        </div>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>

<script setup>
import { ref, watch, computed, onMounted, toRefs } from "vue";
import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
    RadioGroup,
    RadioGroupLabel,
    RadioGroupOption,
} from "@headlessui/vue";
import { XMarkIcon } from "@heroicons/vue/24/outline";
import { StarIcon } from "@heroicons/vue/20/solid";
import { useStore } from "vuex";
const store = useStore();

const emit = defineEmits(["closeModal"]);

const props = defineProps({
    link: Object,
    isOpenAddproduct: { type: Boolean, required: false },
});
const { link, isOpenAddproduct } = toRefs(props);

const price = ref("");
const productname = ref("");
const open = ref(false);
const errors = ref(null);

const isOpen = ref(true);

function closeModal() {
    isOpen.value = false;
}
function openModal() {
    isOpen.value = true;
}

const AddEcomItem = async () => {
    errors.value = null;

    try {
        console.log();
        console.log(link.id);

        await store.dispatch("AddEcomItem", {
            ecom_id: link.value.ecom_data.id,
            price: price.value,
            productname: productname.value,
        });
        await store.dispatch("getAllLinks");
    } catch (error) {
        console.log(error);
        //errors.value = error.response.data.errors;
    }
};
</script>
