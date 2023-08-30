<template>
  <div></div>
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

let fullname = ref("");
let email = ref("");
let message = ref("");
let phone = ref("");
let country = ref("");
</script>

<style lang="scss"></style>
