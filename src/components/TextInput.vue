<template>
  <!-- eslint-disable -->
  <div>
    <!-- <client-only> -->
    <input
      :id="placeholder"
      :placeholder="placeholder"
      :maxlength="String(max)"
      class="w-full bg-gray-50 text-gray-900 border text-sm border-[#EFF0EB] rounded-xl py-3.5 px-3 placeholder-gray-500 focus:outline-none"
      @focus="isFocused = true"
      @blur="isFocused = false"
      :class="isFocused ? 'border-gray-900' : ''"
      :type="inputType"
      v-model="inputComputed"
      autocomplete="off"
    />
    <!-- </client-only> -->
    <span v-if="message" class="text-green-500 text-[14px] font-semibold">
      {{ message }}
    </span>
    <span v-if="error" class="text-red-500 text-[14px] font-semibold">
      {{ error }}
    </span>
  </div>
</template>

<script setup>
import { ref, watch, computed, onMounted, toRefs } from "vue";

const emit = defineEmits(["update:input"]);
const props = defineProps([
  "input",
  "placeholder",
  "max",
  "inputType",
  "error",
  "message",
]);
const { input, placeholder, max, inputType, error, message } = toRefs(props);

let isFocused = ref(false);

const inputComputed = computed({
  get: () => input.value,
  set: (val) => emit("update:input", val),
});

watch(
  () => inputComputed,
  (val) => {
    console.log(val);
  }
);

// watch([error, message], () => {
//   if (error.value && message.value) {
//     console.log(true);
//     emit("refresh");
//   } else {
//     console.log(false);
//   }
// });
</script>
