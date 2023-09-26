<template>
  <div class="w-full relative">
    <div class="mt-4 flex flex-col">
      <div class="sm:col-span-4">
        <label
          for="username"
          class="block text-sm font-medium leading-6 text-gray-900"
          >Type</label
        >
        <div class="mt-2">
          <div class="flex">
            <select
              id="category"
              name="category"
              v-model="type"
              autocomplete="category"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
            >
              <option
                v-for="option in types"
                :key="option.value"
                :value="option.value"
              >
                {{ option.label }}
              </option>
            </select>
          </div>
        </div>
      </div>
      <div class="sm:col-span-4">
        <label
          for="username"
          class="block text-sm font-medium leading-6 text-gray-900"
          >Category</label
        >
        <div class="mt-2">
          <div class="flex">
            <select
              id="category"
              name="category"
              v-model="category"
              autocomplete="category"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
            >
              <option
                v-for="option in categories"
                :key="option.value"
                :value="option.value"
              >
                {{ option.label }}
              </option>
            </select>
          </div>
        </div>
      </div>

      <div class="relative flex gap-x-3 my-8">
        <div class="flex h-6 items-center">
          <input
            id="comments"
            name="comments"
            type="checkbox"
            v-model="isShowStatus"
            value="true"
            checked=""
            class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
          />
        </div>
        <div class="text-sm leading-6">
          <label for="comments" class="font-medium text-gray-900"
            >Show startup status on My profile</label
          >
        </div>
      </div>
      <div class="col-span-full" v-if="isShowStatus">
        <label
          for="about"
          class="block text-sm font-medium leading-6 text-gray-900"
          >Status</label
        >
        <div class="mt-2">
          <select
            id="status"
            name="status"
            v-model="status"
            autocomplete="status"
            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
          >
            <option
              v-for="option in startupstatus"
              :key="option.value"
              :value="option.value"
            >
              {{ option.label }}
            </option>
          </select>
        </div>
      </div>
      <div class="my-4 text-sm font-medium text-gray-900">
        <label
          for="message"
          class="block mb-2 text-sm font-medium text-gray-900"
          >Sell your website</label
        >
        <TipTapEditor
          :portfolio_blog="website_blog"
          @change="updateportfolioData($event)"
        />
      </div>

      <p class="text-base font-semibold leading-7 text-gray-900">Metrics</p>
      <div class="relative flex gap-x-3">
        <div class="flex h-6 items-center">
          <input
            id="showmrr"
            name="showmrr"
            type="checkbox"
            v-model="isShowMetrics"
            value="true"
            checked=""
            class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
          />
        </div>
        <div class="text-sm leading-6">
          <label for="comments" class="font-medium text-gray-900"
            >Show metrics</label
          >
        </div>
      </div>
      <div
        class="w-full ml-8 flex flex-row items-center justify-between max-w-[28rem]"
      >
        <div class="col-span-full mt-6 mr-2">
          <label
            for="about"
            class="block text-sm font-medium leading-6 text-gray-900"
            >Customers</label
          >
          <div class="mt-2">
            <input
              id="mrr"
              name="mrr"
              v-model="customers"
              type="number"
              placeholder="0"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div class="col-span-full mt-6 mr-2">
          <label
            for="about"
            class="block text-sm font-medium leading-6 text-gray-900"
            >Current MRR$</label
          >
          <div class="mt-2">
            <input
              id="mrr"
              name="mrr"
              v-model="currentMrr"
              type="number"
              placeholder="0"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div class="col-span-full mt-6 mr-2">
          <label
            for="about"
            class="block text-sm font-medium leading-6 text-gray-900"
            >Current ARR$</label
          >
          <div class="mt-2">
            <input
              id="mrr"
              name="mrr"
              v-model="currentArr"
              type="number"
              placeholder="0"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
      </div>
      <p
        class="w-full text-center text-base font-semibold leading-7 text-gray-900"
      >
        or
      </p>
      <div class="mt-4 w-full flex flex-row items-center justify-center">
        <button
          class="flex flex-row items-center px-8 md:px-14 py-2 bg-purple-700 text-white rounded-[1.5rem] hover:scale-110 active:scale-90 transition-transform ease-in-out duration-200"
        >
          <span>Connect Metrics from chart mogul</span>
        </button>
      </div>
      <div class="mt-8 w-full flex flex-row items-center justify-center">
        <button
          v-if="saving"
          class="text-xl flex items-center justify-center w-full py-3 rounded-full text-white font-semibold bg-purple-600 hover:bg-purple-800"
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
          @click="dataChange"
          class="flex flex-row items-center px-6 md:px-56 py-3 bg-purple-700 text-white rounded-[1.5rem] hover:scale-110 active:scale-90 transition-transform ease-in-out duration-200"
        >
          <span>Save</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import TipTapEditor from "./TipTapEditor.vue";
import debounce from "lodash/debounce";
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

let category = ref("");
let type = ref("");
let website_blog = ref("");
let status = ref("");
let isShowMetrics = ref(false);
let customers = ref("");
let currentArr = ref("");
let currentMrr = ref("");
let isShowStatus = ref(false);
let saving = ref(false);
let errors = ref(null);

onMounted(() => {
  category.value = props.link.data?.category || "";
  type.value = props.link.data?.type || "";
  status.value = props.link.data?.status || "";
  website_blog.value = props.link.data?.website_blog || "";
  isShowMetrics.value = props.link.data?.isShowMetrics || false;
  currentMrr.value = props.link.data?.currentMrr || "";
  currentArr.value = props.link.data?.currentArr || "";
  customers.value = props.link.data?.customers || "";
  isShowStatus.value = props.link.data?.isShowStatus || false;
});

const updateportfolioData = async ($event) => {
  errors.value = null;
  website_blog.value = $event.data;
  console.log($event.data);
  console.log(website_blog.value);
};

const types = [
  {
    label: "SaaS",
    value: "SaaS",
  },
  {
    label: "Content",
    value: "Content",
  },
  {
    label: "Marketplaces",
    value: "Marketplaces",
  },
  {
    label: "App",
    value: "App",
  },
];

const categories = [
  {
    label: "artificial-intelligence",
    value: "🤖Artificial Intelligence",
  },
  {
    label: "productivity",
    value: "✍️Productivity",
  },
  {
    label: "education",
    value: "📚Education",
  },
  {
    label: "no-code",
    value: "🐲No Code",
  },
  {
    label: "social-media",
    value: "💬Social Media",
  },
  {
    label: "e-commerce",
    value: "🛍️E-Commerce",
  },
  {
    label: "analytics",
    value: "Analytics",
  },
  {
    label: "web3",
    value: "🦇Web 3",
  },
  {
    label: "design-tools",
    value: "👓Design Tools",
  },
  {
    label: "developer-tools",
    value: "🧑‍💻Developer Tools",
  },
  {
    label: "marketing",
    value: "📊Marketing",
  },
  {
    label: "finance",
    value: "💰Finance",
  },
  {
    label: "other",
    value: "🔮Others",
  },
];

const startupstatus = [
  {
    label: "building",
    value: "🏗️ Building...",
  },
  {
    label: "active",
    value: "🟢 Active",
  },
  {
    label: "break",
    value: "☕️ On hold",
  },
  {
    label: "for-sale",
    value: "🤝 For Sale",
  },
  {
    label: "acquired",
    value: "💰 Acquired",
  },
  {
    label: "discontinued",
    value: "❌ Discontinued",
  },
];

function formatNumber(input) {
  if (input >= 1000) {
    const formattedNumber = (input / 1000).toFixed(1);
    return `$${formattedNumber}k`;
  } else {
    return `$${input}`;
  }
}
function formatcustomersNumber(input) {
  if (input >= 1000) {
    const formattedNumber = (input / 1000).toFixed(1);
    return `${formattedNumber}k`;
  } else {
    return `${input}`;
  }
}

const dataChange = async () => {
  saving.value = true;
  console.log(model.value.data);

  model.value.data = {
    category: category.value,
    type: type.value,
    status: status.value,
    website_blog: website_blog.value,
    isShowMetrics: isShowMetrics.value,
    currentMrr: currentMrr.value,
    currentArr: currentArr.value,
    customers: customers.value,
    currentMrr_formated: formatNumber(currentMrr.value),
    currentArr_formated: formatNumber(currentArr.value),
    customers_formated: formatcustomersNumber(customers.value),
    isShowStatus: isShowStatus.value,
  };
  console.log(model);
  try {
    await store.dispatch("updateStartupData", model.value).then(({ data }) => {
      store.commit("notify", {
        type: "success",
        message: "Saved",
      });
    });
    await store.dispatch("getAllLinks");
    saving.value = false;
  } catch (error) {
    store.commit("notify", {
      type: "error",
      message: "Failed",
    });
    saving.value = false;
    console.log(error);
  }
};
</script>

<style></style>
