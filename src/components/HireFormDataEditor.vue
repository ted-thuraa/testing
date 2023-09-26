<template>
  <div>
    <div class="mb-4 space-y-10">
      <fieldset>
        <legend class="text-sm font-semibold leading-6 text-gray-900">
          Freelance or Fulltime
        </legend>
        <p class="mt-1 text-sm leading-6 text-gray-600">
          Receive gig offers for freelance or full-time work. Tick both to
          receive offers for both options.
        </p>
        <div class="mt-4 space-y-4">
          <div class="relative flex gap-x-3">
            <div class="flex h-6 items-center">
              <input
                v-model="freelance_work"
                @change="dataChange"
                value="true"
                id="Freelance"
                name="Freelance"
                type="checkbox"
                class="h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-600"
              />
            </div>
            <div class="text-sm leading-6">
              <label for="comments" class="font-medium text-gray-900"
                >Freelance</label
              >
            </div>
          </div>
          <div class="relative flex gap-x-3">
            <div class="flex h-6 items-center">
              <input
                v-model="fulltime_work"
                @change="dataChange"
                value="true"
                id="Fulltime"
                name="Fulltime"
                type="checkbox"
                class="h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-600"
              />
            </div>
            <div class="text-sm leading-6">
              <label for="candidates" class="font-medium text-gray-900"
                >Fulltime</label
              >
            </div>
          </div>
        </div>
      </fieldset>
    </div>
    <div class="mb-4 sm:col-span-3">
      <div class="">
        <div class="relative flex gap-x-3">
          <div class="flex h-6 items-center">
            <div class="text-sm leading-6">
              <p class="text-sm font-semibold leading-6 text-gray-900">
                Show availability?
              </p>
            </div>
          </div>
          <label class="relative inline-flex items-center mb-5 cursor-pointer">
            <input
              type="checkbox"
              v-model="show_availability"
              @change="dataChange"
              value="true"
              class="sr-only peer"
            />
            <div
              class="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-purple-600"
            ></div>
          </label>
        </div>
      </div>
      <div
        id="availabilityeditor"
        class="ml-4"
        :class="[
          {
            'max-h-[280px]  transition-all duration-300 ease-in ':
              show_availability,
          },
          {
            'overflow-hidden max-h-0 transition-all duration-200 ease-out':
              !show_availability,
          },
        ]"
      >
        <div class="text-sm leading-6">
          <label for="comments" class="font-medium text-gray-900"
            >Choose an option</label
          >
        </div>
        <Listbox v-model="availability">
          <div class="relative mt-1">
            <ListboxButton
              class="relative w-full min-h-[40px] cursor-default rounded-lg bg-gray-50 py-2 pl-3 pr-10 text-left border-2 border-gray-100 focus:border-purple-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"
            >
              <span class="min-w-[60px] pl-6 block truncate">
                {{ availability }}</span
              >
              <span
                class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
              >
                <ChevronUpDownIcon
                  class="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </ListboxButton>

            <transition
              leave-active-class="transition duration-100 ease-in"
              leave-from-class="opacity-100"
              leave-to-class="opacity-0"
            >
              <ListboxOptions
                class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
              >
                <ListboxOption
                  v-slot="{ active, selected }"
                  v-for="option in availability_options"
                  :key="option"
                  :value="option.option"
                  as="template"
                >
                  <li
                    :class="[
                      active ? 'bg-amber-100 text-amber-900' : 'text-gray-900',
                      'relative cursor-default select-none py-2 pl-10 pr-4',
                    ]"
                  >
                    <span
                      :class="[
                        selected ? 'font-medium' : 'font-normal',
                        'block truncate',
                      ]"
                    >
                      {{ option.option }}</span
                    >
                    <span
                      v-if="selected"
                      class="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600"
                    >
                      <CheckIcon class="h-5 w-5" aria-hidden="true" />
                    </span>
                  </li>
                </ListboxOption>
              </ListboxOptions>
            </transition>
          </div>
        </Listbox>
      </div>
    </div>
    <div class="mb-4 sm:col-span-3">
      <div class="">
        <div class="relative flex gap-x-3">
          <div class="flex h-6 items-center">
            <div class="text-sm leading-6">
              <p class="text-sm font-semibold leading-6 text-gray-900">
                Show minimum rate?
              </p>
            </div>
          </div>
          <label class="relative inline-flex items-center mb-5 cursor-pointer">
            <input
              type="checkbox"
              v-model="show_minimumrate"
              @change="dataChange"
              value="true"
              class="sr-only peer"
            />
            <div
              class="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"
            ></div>
          </label>
        </div>
      </div>
      <div
        id="availabilityeditor"
        class="overflow-hidden ml-4"
        :class="[
          {
            'max-h-[280px]  transition-all duration-300 ease-in ':
              show_minimumrate,
          },
          {
            'max-h-0 transition-all duration-200 ease-out': !show_minimumrate,
          },
        ]"
      >
        <div>
          <label
            for="input-group-1"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Your minimum rate</label
          >
          <div class="relative mb-6">
            <div
              class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none"
            >
              <span class="w-4 font-bold text-gray-600 dark:text-gray-400">
                $
              </span>
            </div>
            <div class="inline-flex items-center">
              <input
                v-model="minimum_rate"
                @change="dataChange"
                type="number"
                id="input-group-1"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-32 pl-6 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="10"
              />
              <div class="flex items-center pl-3.5 pointer-events-none">
                <span class="w-4 font-bold text-gray-600 dark:text-gray-400">
                  /hr
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  Listbox,
  ListboxLabel,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/vue";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/vue/20/solid";
import { v4 as uuidv4 } from "uuid";
import { watch, ref, onMounted, toRefs } from "vue";
import { useStore } from "vuex";
const store = useStore();

const props = defineProps({
  link: Object,
});
const emit = defineEmits(["change"]);

const { link } = toRefs(props);
//const model = ref(JSON.parse(JSON.stringify(props.link)));

let show_availability = ref(false);
let show_minimumrate = ref(false);
let minimum_rate = ref(null);
let availability = ref("");
let freelance_work = ref(false);
let fulltime_work = ref(false);

onMounted(async () => {
  console.log(link.value);
  show_availability.value =
    props.link.data?.hireformdata.show_availability || false;
  show_minimumrate.value =
    props.link.data?.hireformdata.show_minimumrate || false;
  minimum_rate.value = props.link.data?.hireformdata.minimum_rate || null;
  availability.value = props.link.data?.hireformdata.availability || "";
  freelance_work.value = props.link.data?.hireformdata.freelance_work || false;
  fulltime_work.value = props.link.data?.hireformdata.fulltime_work || false;
});

function getFormatedrate(rate) {
  const numericValue = parseFloat(rate);
  console.log(numericValue);
  if (isNaN(numericValue)) {
    return ""; // Return an empty string if the input is not a valid number
  }

  if (numericValue < 1000) {
    return `$${numericValue.toFixed(2)}/hr`;
  } else if (numericValue >= 1000 && numericValue < 1000000) {
    return `$${(numericValue / 1000).toFixed(1)}k/hr`;
  } else {
    return `$${(numericValue / 1000000).toFixed(1)}M/hr`;
  }
}

//Emit the data change
async function dataChange() {
  const formated_minrate = await getFormatedrate(minimum_rate.value);
  const data = {
    freelance_work: freelance_work.value,
    fulltime_work: fulltime_work.value,
    show_availability: show_availability.value,
    show_minimumrate: show_minimumrate.value,
    minimum_rate: minimum_rate.value,
    formated_minimum_rate: formated_minrate,
    availability: availability.value,
  };
  console.log(data);

  emit("change", data);
}

watch(
  () => availability.value,
  () => {
    dataChange();
  }
);

const availability_options = [
  { option: "immediately" },
  { option: "next week" },
  { option: "next 2 weeks" },
  { option: "next month" },
];
</script>

<style lang="scss" scoped></style>
