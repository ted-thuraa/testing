<template>
    <div class="py-2">
        <Switch
            v-model="isActive"
            :class="isActive ? 'bg-teal-900' : 'bg-teal-700'"
            class="relative inline-flex h-[28px] w-[64px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
            <span class="sr-only">Use setting</span>
            <span
                aria-hidden="true"
                :class="isActive ? 'translate-x-9' : 'translate-x-0'"
                class="pointer-events-none inline-block h-[24px] w-[24px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out"
            />
        </Switch>
    </div>
</template>

<script setup>
import { Switch } from "@headlessui/vue";
import { watch, ref, onMounted, toRefs } from "vue";

const props = defineProps({
    isActive: Boolean,
});

const { isActive } = toRefs(props);

const emit = defineEmits([
    "updateNameActive, updateEmailActive, updateMobileActive, updateMessageActive, updateCountryActive",
]);

const enabled = ref(false);
</script>
