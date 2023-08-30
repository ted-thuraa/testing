<template>
  <!-- eslint-disable -->
  <div
    class="mb-4 flex h-[198px] w-full overflow-hidden flex-1 whitespace-break-spaces"
    style="box-shadow: 0 2px 4px rgba(0, 0, 0, 0.04)"
  >
    <img
      :src="link.thumbnailimage"
      alt=""
      class="w-full h-full rounded-[1rem] object-cover"
    />
  </div>
  <div class="blog relative mt-2">
    <TiptapReadOnly :link="link" />

    <p class="text-sm text-gray-500">
      Your payment has been successfully submitted. We’ve sent you an email with
      all of the details of your order.
    </p>
  </div>
</template>

<script setup>
import TiptapReadOnly from "../TiptapReadOnly.vue";
import { ref, watch, computed, onMounted, toRefs } from "vue";

import { useStore } from "vuex";
const store = useStore();

const emit = defineEmits(["closeMoreInfoModal"]);

const props = defineProps({
  link: Object,
  isMoreInfoOpen: Boolean,
});
</script>

<style lang="scss" scoped></style>
