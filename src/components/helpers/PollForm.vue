<template>
  <div class="px-4">
    <div
      class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3"
    >
      <div class="flex max-w-xl flex-col items-center justify-between">
        <div class="flex items-center gap-x-4 text-xs"></div>
        <div class="group relative">
          <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900">
            {{ link.data.poll_data.poll_question }}
          </h3>
        </div>
        <div
          class="relative w-full mt-8 flex items-center justify-between gap-x-4"
        >
          <div class="w-full px-4 py-16">
            <div class="mx-auto w-full max-w-md">
              <RadioGroup v-model="selected">
                <RadioGroupLabel class="sr-only">Server size</RadioGroupLabel>
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
                          ? 'ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300'
                          : '',
                        checked
                          ? 'bg-sky-900 bg-opacity-75 text-white '
                          : 'bg-white ',
                      ]"
                      class="relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none"
                    >
                      <div class="flex w-full items-center justify-between">
                        <div class="flex items-center">
                          <div class="text-sm">
                            <RadioGroupLabel
                              as="p"
                              :class="checked ? 'text-white' : 'text-gray-900'"
                              class="font-medium"
                            >
                              {{ plan.text }}
                            </RadioGroupLabel>
                          </div>
                        </div>
                        <div v-show="checked" class="shrink-0 text-white">
                          <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none">
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
          class="relative block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Submit
        </button>
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
