<template>
    <div class="relative" v-if="link.category == 'Text'">
        <div
            class="mb-4 flex h-[265px] w-full p-[1.5rem] flex-1 bg-[#f6c823] rounded-[24px]"
            style="box-shadow: 0 2px 4px rgba(0, 0, 0, 0.04)"
        >
            <div
                class="w-full mb-6 text-left text-[#000] font-medium text-lg break-words"
            >
                <p class="h-full">
                    {{ link.description }}
                </p>
                <span class="text-sm font-normal">Feb 21, 2023</span>
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
</script>

<style lang="scss" scoped></style>
