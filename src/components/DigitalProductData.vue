<template>
  <div class="relative px-4 w-full">
    <div class="relative w-full">
      <div class="flex flex-col mb-3 w-full h-full text-gray-950">
        <div class="mb-2">
          <p class="p-0 m-0 font-semibold text-base">Digital product</p>
        </div>
        <div class="mt-4">
          <label
            for="message"
            class="block mb-2 text-sm font-medium text-gray-900"
            >Product Name</label
          >

          <input
            v-model="product_name"
            type="text"
            id="email-address-icon"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
            placeholder="SaaS theme"
          />
        </div>
        <div class="mt-4">
          <label
            for="message"
            class="block mb-2 text-sm font-medium text-gray-900"
            >Product Price</label
          >
          <div class="relative w-[10rem] font-medium">
            <input
              type="number"
              v-model="product_price"
              id="input-group-1"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-5 p-2.5"
              placeholder="25"
            />
            <div
              class="absolute inset-y-0 left-0 flex items-center pr-3.5 pointer-events-none"
            >
              <span class="pl-2">$</span>
            </div>
          </div>
        </div>

        <div class="mb-5">
          <p class="p-0 m-0 font-semibold text-base"></p>
          <p class="p-0 text-[14px] text-slate-700"></p>
          <div class="mt-4">
            <label
              for="message"
              class="block mb-2 text-sm font-medium text-gray-900"
              >Describe your product</label
            >

            <TipTapEditor
              :portfolio_blog="product_desc"
              @change="updateProductDescData($event)"
            />
          </div>
        </div>
        <div class="mb-5">
          <p class="p-0 m-0 font-semibold text-base">Checkout</p>
          <p class="p-0 text-[14px] text-slate-700">
            Enter your prefered checkout option?
          </p>
          <div class="mx-auto mt-3 w-full max-w-md">
            <RadioGroup v-model="selectedcheckout">
              <RadioGroupLabel class="sr-only">choose</RadioGroupLabel>
              <div class="space-x-2 flex flex-row items-center">
                <RadioGroupOption
                  as="template"
                  v-for="plan in checkoutOptions"
                  :key="plan.name"
                  :value="plan.name"
                  v-slot="{ active, checked }"
                >
                  <div
                    :class="[
                      active
                        ? 'ring-2 ring-white ring-opacity-60 ring-offset-2 '
                        : '',
                      checked ? 'border-[3px] border-purple-700 ' : ' ',
                    ]"
                    class="relative w-[60px] h-[60px] overflow-hidden flex items-center cursor-pointer rounded-lg focus:outline-none"
                  >
                    <div class="flex w-full items-center justify-center">
                      <div class="flex items-center">
                        <div class="text-sm">
                          <RadioGroupLabel
                            as="p"
                            :class="checked ? 'text-white' : 'text-gray-900'"
                            class="font-medium"
                          >
                            <div class="p-">
                              <img
                                :src="plan.icon"
                                :alt="plan.name"
                                class="w-[52px] h-[52px] object-cover rounded-[5px]"
                              />
                            </div>
                          </RadioGroupLabel>
                        </div>
                      </div>
                    </div>
                  </div>
                </RadioGroupOption>
              </div>
            </RadioGroup>
          </div>
        </div>
        <div
          id="LemonSection"
          class="overflow-hidden mt-4"
          :class="
            selectedcheckout === 'Lemonsqueezy'
              ? 'max-h-[180px] transition-all duration-300 ease-in mt-10'
              : 'max-h-0 transition-all duration-200 ease-out'
          "
        >
          <p class="p-0 m-0 font-semibold text-base">LemonSqueezy</p>
          <p class="p-0 text-[14px] text-slate-700">
            Send users to LemonSqueezy checkout
          </p>
          <div class="mt-4">
            <label
              for="email-address-icon"
              class="block mb-2 text-sm font-medium text-gray-900"
              >Your LemonSqueezy checkout url</label
            >
            <div class="relative">
              <input
                v-model="lemonurl"
                type="text"
                id="email-address-icon"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="url"
              />
            </div>
          </div>
        </div>
        <div
          id="googleSection"
          class="overflow-hidden mt-4"
          :class="
            selectedcheckout === 'Gumroad'
              ? 'max-h-[180px] transition-all duration-300 ease-in mt-10'
              : 'max-h-0 transition-all duration-200 ease-out'
          "
        >
          <p class="p-0 m-0 font-semibold text-base">Gumroad</p>
          <p class="p-0 text-[14px] text-slate-700">
            Send users to Gumroadcheckout
          </p>
          <div class="mt-4">
            <label
              for="email-address-icon"
              class="block mb-2 text-sm font-medium text-gray-900"
              >Your Gumroad url</label
            >
            <div class="relative">
              <input
                v-model="gumurl"
                type="text"
                id="email-address-icon"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="url"
              />
            </div>
          </div>
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
        class="mt-8 text-xl flex items-center justify-center w-full py-2 md:py-3 rounded-full text-white font-semibold bg-purple-600 hover:bg-purple-800"
      >
        <span>Save</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import {
  RadioGroup,
  RadioGroupLabel,
  RadioGroupDescription,
  RadioGroupOption,
} from "@headlessui/vue";
import Lemonsqueezy from "../assets/images/lemonsqueezy.png";
import Gumroad from "../assets/images/gumroad.png";
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
let product_desc = ref("");
let product_name = ref("");
let product_price = ref("");
let selectedcheckout = ref("");
let gumurl = ref("");
let lemonurl = ref("");
let category = ref("");
let product_thumbnail = ref("");
let errors = ref(null);
let saving = ref(false);

const checkoutOptions = [
  {
    name: "Lemonsqueezy",
    icon: Lemonsqueezy,
  },
  {
    name: "Gumroad",
    icon: Gumroad,
  },
  {
    name: "Other",
    icon: "",
  },
];

const updateProductDescData = async ($event) => {
  errors.value = null;
  product_desc.value = $event.data;
  console.log($event.data);
  console.log(product_desc.value);
};
const updateportfolioBlog = async ($event) => {
  saving.value = true;
  errors.value = null;

  model.value.data = {
    title: title.value,
    product_desc: product_desc.value,
    product_name: product_name.value,
    product_price: product_price.value,
    selectedcheckout: selectedcheckout.value,
    gumurl: gumurl.value,
    lemonurl: lemonurl.value,
    category: category.value,
    product_thumbnail: product_thumbnail.value,
  };

  try {
    console.log($event.data);
    console.log(link.value.id);

    await store.dispatch("updateStartupData", model.value);
    await store.dispatch("getAllLinks");
    saving.value = false;
  } catch (error) {
    console.log(error);
    saving.value = false;
    store.commit("notify", {
      type: "error",
      message: "Failed",
    });
    //errors.value = error.response.data.errors;
  }
};

onMounted(async () => {
  console.log(link.value.portfolio_data);
  product_desc.value = props.link.data?.product_desc || "";
  product_name.value = props.link.data?.product_name || "";
  product_price.value = props.link.data?.product_price || "";
  selectedcheckout.value = props.link.data?.selectedcheckout || "";
  gumurl.value = props.link.data?.gumurl || "";
  lemonurl.value = props.link.data?.lemonurl || "";
  title.value = props.link.data?.title || "";
  category.value = props.link.data?.category || "";
  product_thumbnail.value = props.link.data?.product_thumbnail || "";
});
</script>

<style></style>
