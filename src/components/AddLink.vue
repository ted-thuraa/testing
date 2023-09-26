<template>
  <div id="AddLink" class="w-full bg-[#FFCA7B] rounded-3xl overflow-hidden">
    <div class="flex items-center justify-between pb-2 p-6">
      <div class="text-[19px] font-semibold text-gray-900">Enter URL</div>
      <button
        @click="$emit('close')"
        class="flex items-center rounded-full p-1.5 hover:bg-[#EFF0EA]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6 text-gray-900"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>

    <!-- eslint-disable -->
    <form
      @submit.prevent="addLink()"
      class="flex items-center gap-4 w-full pt-2 p-6"
    >
      <div class="w-full">
        <!-- <TextInput
                    class="w-full"
                    placeholder="Name"
                    v-model:input="name"
                    inputType="text"
                    :error="errors && errors.name ? errors.name[0] : ''"
                /> -->

        <div class="py-1" />

        <TextInput
          class="w-full"
          placeholder="URL"
          v-model:input="url"
          inputType="text"
          :error="errors && errors.url ? errors.url[0] : ''"
        />
      </div>

      <button
        v-if="!loading"
        type="submit"
        :disabled="!url"
        class="rounded-full p-3 px-2 w-28"
        :class="
          url
            ? 'bg-purple-700 hover:bg-purple-800 text-white'
            : 'bg-[#EFF0EA] text-[#A7AAA2]'
        "
      >
        Add
      </button>
      <button
        v-else
        type="submit"
        class="rounded-full m-auto p-3 px-2 w-28 bg-purple-700 text-white"
      >
        <div>
          <span
            class="w-2 h-2 ml-2 rounded-full bg-gray-200 inline-block animate-flash"
          ></span
          ><span
            class="w-2 h-2 ml-2 rounded-full bg-gray-200 inline-block animate-flash [animation-delay:0.2s]"
          ></span
          ><span
            class="w-2 h-2 ml-2 rounded-full bg-gray-200 inline-block animate-flash [animation-delay:0.4s]"
          ></span>
        </div>
      </button>
    </form>
  </div>
</template>

<script setup>
import TextInput from "./TextInput.vue";
import { ref, watch, computed, onMounted, toRefs } from "vue";
import { useStore } from "vuex";
const store = useStore();
const props = defineProps({
  category: { type: String, default: "" },
});
const { category } = toRefs(props);

const emit = defineEmits(["close"]);
let loading = ref(false);

let model = ref({
  name: "",
  url: null,
  redirect_link: null,
  description: null,
  category: null,
  active: null,
  clicks: null,
  icon: null,
  thumbnailimage: null,
  layout: null,
  data: {},
  bg_color: null,
  text_color: null,
  btn_color: null,
});

let name = ref("");

let url = ref("");
let errors = ref(null);

const addLink = async () => {
  loading.value = true;
  try {
    console.log(category.value);
    model.value.category = category.value;
    model.value.url = url.value;
    await store.dispatch("addLink", model.value);
    await store.dispatch("getAllLinks");
    loading.value = false;
    setTimeout(() => {
      emit("close");
      name.value = "";
      url.value = "";
    }, 100);
  } catch (error) {
    loading.value = false;
    store.commit("notify", {
      type: "error",
      message: "Failed",
    });
    console.log(error);
    errors.value = error.response.data.errors;
  }
};
</script>
