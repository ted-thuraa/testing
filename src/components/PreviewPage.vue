<template>
  <div :class="store.state.user.theme">
    <Temp2
      v-if="store.state.user.page_layout == 'LunarLabyrinth'"
      :theme="store.state.user.theme"
    />
    <Temp1 v-else :theme="store.state.user.theme" />
  </div>
</template>

<script setup>
import Temp1 from "./PagePreview/Temp1.vue";
import Temp2 from "./PagePreview/Temp2.vue";
import { ref, watch, computed, onMounted, isProxy, toRaw, toRefs } from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";

const store = useStore();

const router = useRouter();
const route = useRoute();

let theme = ref(null);
let colors = ref(null);

function getLinkTheme(theme_id) {
  colors.value.forEach((color) => {
    if (theme_id === color.id) {
      theme.value = color;
    }
  });
}

onMounted(() => {
  colors.value = store.state.user.colors;
  getLinkTheme(store.state.user.theme_id);
  //getPageLinks(username);
});
</script>

<style lang="scss" scoped></style>
