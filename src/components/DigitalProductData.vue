<template>
  <div class="relative px-4 w-full">
    <div class="relative w-full">
      <div class="flex flex-col mb-3 w-full h-full text-gray-950">
        <div class="mb-2">
          <p class="p-0 m-0 font-semibold text-base">Diigital product</p>
        </div>
        <div class="mb-5">
          <p class="p-0 text-[14px] text-slate-700">Describe your product</p>
        </div>
        <div class="mb-5">
          <p class="p-0 m-0 font-semibold text-base"></p>
          <p class="p-0 text-[14px] text-slate-700"></p>
          <div class="mt-4">
            <label
              for="message"
              class="block mb-2 text-sm font-medium text-gray-900"
              >Sell your product</label
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
        type="submit"
        @click="updateportfolioBlog"
        class="mt-8 text-xl flex items-center justify-center w-full py-3 rounded-full text-white font-semibold bg-purple-700 hover:bg-gray-950"
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
let selectedcheckout = ref("");
let gumurl = ref("");
let lemonurl = ref("");
let category = ref("");
let product_thumbnail = ref("");
let errors = ref(null);

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
  errors.value = null;

  model.value.data = {
    title: title.value,
    product_desc: product_desc.value,
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
  } catch (error) {
    console.log(error);
    //errors.value = error.response.data.errors;
  }
};

onMounted(async () => {
  console.log(link.value.portfolio_data);
  product_desc.value = props.link.data?.product_desc || "";
  selectedcheckout.value = props.link.data?.selectedcheckout || "";
  gumurl.value = props.link.data?.gumurl || "";
  lemonurl.value = props.link.data?.lemonurl || "";
  title.value = props.link.data?.title || "";
  category.value = props.link.data?.category || "";
  product_thumbnail.value = props.link.data?.product_thumbnail || "";
});
</script>

<style></style>
