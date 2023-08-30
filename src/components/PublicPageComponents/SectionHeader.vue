<template>
    <div v-if="link.category == 'Header'">
        <div class="w-full mb-4 mt-8">
            <h3 class="text-white text-center font-semibold text-lg md:text-xl">
                {{ link.name }}
            </h3>
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
