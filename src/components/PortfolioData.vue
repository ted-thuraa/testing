<template>
  <div class="relative px-4 w-full">
    <div class="relative w-full">
      <div class="flex flex-col mb-3 w-full h-full text-gray-950">
        <div class="mb-2">
          <p class="p-0 m-0 font-semibold text-base">Portfolio</p>
        </div>
        <div class="mb-5">
          <p class="p-0 text-[14px] text-slate-700">
            Describe your portfolio in depth
          </p>
        </div>
        <div class="mb-5">
          <p class="p-0 m-0 font-semibold text-base"></p>
          <p class="p-0 text-[14px] text-slate-700"></p>
          <div class="mt-4">
            <label
              for="message"
              class="block mb-2 text-sm font-medium text-gray-900"
              >Sell your portfolio</label
            >
            <!-- <textarea
                            v-model="portfolio_blog"
                            id="message"
                            rows="4"
                            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="more description of what you did..."
                        ></textarea> -->
            <TipTapEditor
              :portfolio_blog="portfolio_blog"
              @change="updateportfolioData($event)"
            />
          </div>
        </div>

        <button
          v-if="saving"
          class="mt-8 text-xl flex items-center justify-center w-full py-3 rounded-full text-white font-semibold bg-purple-600 hover:bg-purple-800"
        >
          <div class="m-auto text-gray-200">
            <!-- Animation Snippet -->
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
          </div>
        </button>
        <button
          v-else
          type="submit"
          @click="updateportfolioBlog"
          class="mt-8 text-xl flex items-center justify-center w-full py-3 rounded-full text-white font-semibold bg-purple-600 hover:bg-purple-800"
        >
          <span>Save</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import TipTapEditor from "./TipTapEditor.vue";
import { watch, ref, onMounted, toRefs } from "vue";
import { useStore } from "vuex";
const store = useStore();

const props = defineProps({
  link: Object,
  //selectedId: { type: Number, default: 0 },
  //selectedStr: { type: String, default: "" },
});

const { link } = toRefs(props);
const model = ref(JSON.parse(JSON.stringify(props.link)));

let title = ref("");
let portfolio_blog = ref("");
let portfolio_tags = ref("");
let category = ref("");
let portfolio_thumbnail = ref("");
let saving = ref(false);
let errors = ref(null);

const updateportfolioData = async ($event) => {
  errors.value = null;
  portfolio_blog.value = $event.data;
  console.log($event.data);
  console.log(portfolio_blog.value);
};
const updateportfolioBlog = async ($event) => {
  saving.value = true;
  errors.value = null;

  model.value.data = {
    title: title.value,
    portfolio_blog: portfolio_blog.value,
    portfolio_tags: portfolio_tags.value,
    category: category.value,
    portfolio_thumbnail: portfolio_thumbnail.value,
  };

  try {
    console.log($event.data);
    console.log(link.value.id);

    await store.dispatch("updateStartupData", model.value).then(({ data }) => {
      store.commit("notify", {
        type: "success",
        message: "Saved",
      });
    });
    await store.dispatch("getAllLinks");
    saving.value = false;
  } catch (error) {
    saving.value = false;
    store.commit("notify", {
      type: "error",
      message: "Failed",
    });
    console.log(error);
    //errors.value = error.response.data.errors;
  }
};

onMounted(async () => {
  portfolio_blog.value = props.link.data?.portfolio_blog || "";
  title.value = props.link.data?.title || "";
  portfolio_tags.value = props.link.data?.portfolio_tags || "";
  category.value = props.link.data?.category || "";
  portfolio_thumbnail.value = props.link.data?.portfolio_thumbnail || "";
});
console.log(portfolio_blog.value);
</script>

<style></style>
