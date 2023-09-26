<template>
  <div
    class="min-w-[288px] w-full min-h-[236px] max-h-[520px] mb-4 rounded-[24px] shadow transition-all duration-500 ease-in"
    :class="theme.cardsBg"
  >
    <div class="flex flex-col items-center relative h-min pb-1 w-full">
      <div class="m-0 py-6 px-5">
        <div class="">
          <div class="mx-auto max-w-2xl">
            <div class="flex max-w-xl flex-col items-center justify-between">
              <div class="flex items-center gap-x- text-xs"></div>
              <div class="relative px-4">
                <h3 class="text-lg font-semibold leading-6 text-gray-900">
                  {{ link.data.poll_data.poll_question }}
                </h3>
              </div>
              <div class="mt-3 px-5">
                <p class="line-clamp-3 text-sm leading-6 text-gray-600">
                  Illo sint voluptas. Error voluptates culpa eligendi. Hic vel
                  totam vitae illo. Non aliquid explicabo necessitatibus unde.
                  Sed exercitationem placeat consectetur nulla deserunt vel.
                  Iusto corrupti dicta.
                </p>
              </div>
              <div
                class="relative w-full my-8 flex items-center justify-between gap-x-4"
              >
                <div class="w-full px-4 py-1">
                  <div class="mx-auto w-full max-w-md">
                    <RadioGroup v-model="selected">
                      <RadioGroupLabel class="sr-only">poll</RadioGroupLabel>
                      <div class="space-y-2">
                        <RadioGroupOption
                          as="template"
                          v-for="plan in link.data.poll_data.poll_options"
                          :key="plan.text"
                          :value="plan"
                          v-slot="{ active, checked }"
                        >
                          <div
                            :class="[
                              active
                                ? ' ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300'
                                : '',
                              checked
                                ? 'bg-purple-700 text-white bg-opacity-75 '
                                : 'bg-gray-50 ',
                            ]"
                            class="relative flex cursor-pointer border border-gray-200 rounded-lg px-5 py-4 focus:outline-none"
                          >
                            <div
                              class="flex w-full items-center justify-between"
                            >
                              <div class="flex items-center">
                                <div class="text-sm">
                                  <RadioGroupLabel
                                    as="p"
                                    :class="
                                      checked ? 'text-white' : 'text-gray-900'
                                    "
                                    class="font-medium"
                                  >
                                    {{ plan.text }}
                                  </RadioGroupLabel>
                                </div>
                              </div>
                              <div v-show="checked" class="shrink-0 text-white">
                                <svg
                                  class="h-6 w-6"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <circle
                                    cx="12"
                                    cy="12"
                                    r="12"
                                    fill="#fff"
                                    fill-opacity="0.2"
                                  />
                                  <path
                                    d="M7 13l3 3 7-7"
                                    stroke="#fff"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </RadioGroupOption>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                class="relative block w-80 rounded-md bg-purple-700 text-white shadow-lg hover:bg-purple-800 focus-visible:outline-purple-500 px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
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

import { watch, ref, onMounted, toRefs } from "vue";
import { useStore } from "vuex";
const store = useStore();

const props = defineProps({
  link: Object,
  theme: Object,
});
const { link } = toRefs(props);
console.log(link);

let fullname = ref("");
let email = ref("");
let message = ref("");
let phone = ref("");
let country = ref("");
let plans = ref([]);

const selected = ref(plans[0]);

onMounted(async () => {
  console.log(link.value);
  plans.value = props.link.data?.poll_data.poll_options || [];
});
</script>

<style lang="scss"></style>
