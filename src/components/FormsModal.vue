<template>
    <div>forms</div>
</template>

<script setup>
import { ref, watch, computed, onMounted, toRefs } from "vue";
import { useStore } from "vuex";
const store = useStore();

const emit = defineEmits(["closeMoreInfoModal"]);

const props = defineProps({
    isFormModalOpen: Boolean,
});

const { isMoreInfoOpen } = toRefs(props);
</script>

<style lang="scss" scoped></style>
