<template>
    <TransitionRoot appear :show="isMoreInfoOpen" as="template">
        <Dialog
            as="div"
            @close="$emit('closeMoreInfoModal')"
            class="relative z-10"
        >
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
                    class="flex min-h-full items-center justify-center text-center"
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
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>

<script setup>
import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
} from "@headlessui/vue";
import { ref, watch, computed, onMounted, toRefs } from "vue";
import { useStore } from "vuex";
const store = useStore();

const emit = defineEmits(["closeMoreInfoModal"]);

const props = defineProps({
    isMoreInfoOpen: Boolean,
});

const { isMoreInfoOpen } = toRefs(props);
</script>
