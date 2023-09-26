<template>
  <div v-if="loading" class="w-full h-screen">
    <div class="relative w-full h-full rounded-lg">
      <div class="w-full h-full bg-transparent p-0.5 px-2 absolute z-50">
        <div class="flex items-center justify-center rounded-lg h-full">
          <div class="" role="status">
            <svg
              aria-hidden="true"
              class="w-10 h-10 mr-2 text-gray-200 animate-spin fill-gray-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else id="ApperancePage" class="flex h-[100vh] pl-4 overflow-y-scroll">
    <div
      class="lg:w-[calc(100%-500px)] md:w-[calc(100%-330px)] w-full md:pt-2 pt-1"
    >
      <div class="max-w-[750px] mx-auto pb-24">
        <div id="FontSection">
          <div
            class="mt-8 md:text-lg md:mt-8 text-xl font-semibold pb-4 text-gray-900"
          >
            Fonts
          </div>
          <!-- eslint-disable -->
          <div class="w-full card-light-shadow rounded-3xl p-6">
            <div class="">
              <div class="w-[20rem]">
                <label
                  for="username"
                  class="text-sm font-medium leading-7 text-gray-900"
                  >Font</label
                >
                <div class="mt-2 text-gray-900">
                  <Listbox
                    v-model="page_font"
                    @update:modelValue="(value) => dataChange()"
                  >
                    <div class="relative mt-1">
                      <ListboxButton
                        class="relative w-full min-h-[40px] cursor-default rounded-lg bg-gray-50 py-2 pl-3 pr-10 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"
                      >
                        <span class="block truncate">{{ page_font }}</span>
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
                          class="absolute z-[20] mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                        >
                          <ListboxOption
                            v-slot="{ active, selected }"
                            v-for="font in fonts"
                            :key="font.name"
                            :value="font.name"
                            as="template"
                          >
                            <li
                              :class="[
                                active
                                  ? 'bg-amber-100 text-amber-900'
                                  : 'text-gray-900',
                                'relative cursor-default select-none py-2 pl-10 pr-4',
                              ]"
                            >
                              <span
                                :class="[
                                  selected ? 'font-medium' : 'font-normal',
                                  'block truncate',
                                ]"
                                >{{ font.name }}</span
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
            </div>
          </div>
        </div>

        <div id="LayoutSection">
          <div
            class="mt-8 md:text-lg md:mt-8 text-xl font-semibold pb-4 text-gray-900"
          >
            Layouts
          </div>
          <!-- eslint-disable -->
          <div class="w-full card-light-shadow rounded-3xl p-6">
            <div class="">
              <RadioGroup v-model="page_layout" class="mt-4">
                <RadioGroupLabel class="sr-only">Choose Layout</RadioGroupLabel>
                <span class="grid md:grid-cols-2 grid-cols-1 gap-4">
                  <RadioGroupOption
                    as="template"
                    value="LunarLabyrinth"
                    v-slot="{ active, checked }"
                  >
                    <div>
                      <div>
                        <div
                          class="relative border rounded-lg aspect-[16/9] border-dashed cursor-pointer"
                          :class="[
                            checked && active
                              ? 'border-purple-700'
                              : 'border-gray-500',
                          ]"
                        >
                          <div class="absolute z-10 top-0 left-0 right-0">
                            <div
                              class="p-1 flex justify-end text-purple-700"
                              :class="[
                                page_layout == 'LunarLabyrinth'
                                  ? 'block'
                                  : 'hidden',
                              ]"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                class="w-6 h-6"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                                  clip-rule="evenodd"
                                />
                              </svg>
                            </div>
                          </div>
                          <div
                            class="relative bg-gray-200 rounded-lg w-full h-full mx-auto"
                            :class="
                              checked && active
                                ? 'transition-all duration-150 ease-in p-2.5'
                                : 'transition-all duration-150 ease-out p-2'
                            "
                          >
                            <div
                              class="w-full h-full bg-white rounded-md flex flex-row flex-nowrap overflow-hidden"
                            >
                              <div class="p-3 w-1/2 block">
                                <div class="mt-4 mb-1 flex">
                                  <div
                                    class="bg-gray-300 rounded-full h-10 w-10"
                                  ></div>
                                </div>
                                <div class="mt-2 pr-8">
                                  <div
                                    class="mb-1 rounded-md bg-gray-300 h-2 w-full"
                                  ></div>
                                  <div
                                    class="mb-1 rounded-md bg-gray-300 h-1.5 w-[60%]"
                                  ></div>
                                  <div
                                    class="mb-1 rounded-md bg-gray-300 h-[0.2rem] w-[40%]"
                                  ></div>
                                </div>
                              </div>
                              <div
                                class="px-3 py-4 w-1/2 grid grid-cols-2 gap-1 auto-rows-min"
                              >
                                <div
                                  class="bg-gray-300 rounded-lg col-span-1 h-8"
                                ></div>
                                <div
                                  class="bg-gray-300 rounded-lg col-span-1 h-8"
                                ></div>
                                <div
                                  class="bg-gray-300 rounded-lg col-span-2 h-10"
                                ></div>
                                <div
                                  class="bg-gray-300 rounded-lg col-span-2 h-4"
                                ></div>
                                <div
                                  class="bg-gray-300 rounded-lg col-span-2 h-4"
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="text-center text-white"></div>
                      </div>
                    </div>
                  </RadioGroupOption>
                  <RadioGroupOption
                    as="template"
                    value="PanoramaPassage"
                    v-slot="{ active, checked }"
                  >
                    <div>
                      <div>
                        <div
                          class="relative border rounded-lg aspect-[16/9] border-dashed cursor-pointer"
                          :class="[
                            checked && active
                              ? 'border-purple-700'
                              : 'border-gray-500',
                          ]"
                        >
                          <div class="absolute z-10 top-0 left-0 right-0">
                            <div
                              class="p-1 flex justify-end text-purple-700"
                              :class="[
                                page_layout == 'PanoramaPassage'
                                  ? 'block'
                                  : 'hidden',
                              ]"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                class="w-6 h-6"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                                  clip-rule="evenodd"
                                />
                              </svg>
                            </div>
                          </div>
                          <div
                            class="relative bg-gray-200 rounded-lg w-full h-full mx-auto"
                            :class="
                              checked && active
                                ? 'transition-all duration-150 ease-in p-2.5'
                                : 'transition-all duration-150 ease-out p-2'
                            "
                          >
                            <div
                              class="w-full px-8 h-full bg-white rounded-md flex flex-col overflow-hidden"
                            >
                              <div class="px-12 w-full block">
                                <div class="mt-4 mb-1 flex justify-center">
                                  <div
                                    class="bg-gray-300 rounded-full h-10 w-10"
                                  ></div>
                                </div>
                                <div
                                  class="mt-2 flex flex-col items-center justify-center"
                                >
                                  <div
                                    class="mb-1 rounded-md bg-gray-300 h-2 w-full"
                                  ></div>
                                  <div
                                    class="mb-1 rounded-md bg-gray-300 h-1.5 w-[60%]"
                                  ></div>
                                  <div
                                    class="mb-1 rounded-md bg-gray-300 h-[0.2rem] w-[40%]"
                                  ></div>
                                </div>
                              </div>
                              <div
                                class="px-8 py-4 w-full grid grid-cols-2 gap-1 auto-rows-min"
                              >
                                <div
                                  class="bg-gray-300 rounded-lg col-span-1 h-8"
                                ></div>
                                <div
                                  class="bg-gray-300 rounded-lg col-span-1 h-8"
                                ></div>
                                <div
                                  class="bg-gray-300 rounded-lg col-span-2 h-10"
                                ></div>
                                <div
                                  class="bg-gray-300 rounded-lg col-span-2 h-4"
                                ></div>
                                <div
                                  class="bg-gray-300 rounded-lg col-span-2 h-4"
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="text-center text-white"></div>
                      </div>
                    </div>
                  </RadioGroupOption>
                </span>
              </RadioGroup>
            </div>
          </div>
        </div>
        <div id="ThemeSection">
          <div
            class="mt-8 md:text-lg md:mt-8 text-xl font-semibold pb-4 text-gray-900"
          >
            Themes
          </div>
          <!-- eslint-disable -->
          <div class="w-full card-light-shadow rounded-3xl p-6">
            <div
              class="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-2 gap-x-4 auto-rows-min"
            >
              <div v-for="item in store.state.user.colors">
                <div
                  class="relative h-24 overflow-hidden border border-gray-500 rounded-lg border-dashed cursor-pointer"
                  :class="
                    store.state.user.theme_id == item.id
                      ? 'transition-all duration-150 ease-in p-2'
                      : 'transition-all duration-150 ease-out p-0'
                  "
                >
                  <div class="absolute z-10 top-0 left-0 right-0">
                    <div
                      v-if="store.state.user.theme_id == item.id"
                      class="p-1 flex justify-start text-purple-700"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div
                    @click="updateTheme(item.id)"
                    class="relative rounded-xl h-full mx-auto"
                  >
                    <div
                      class="h-24 w-full grid grid-cols-4 bg-transparent rounded-lg shadow"
                    >
                      <div
                        class="h-full rounded-l-lg"
                        :class="item.pageBg"
                      ></div>
                      <div class="h-full" :class="item.cardsBg"></div>
                      <div class="h-full" :class="item.htext"></div>
                      <div
                        class="h-full rounded-r-lg"
                        :class="item.buttonVariations.btnVar1"
                      ></div>
                    </div>
                  </div>
                </div>
                <div class="text-center text-white">
                  {{ item.name }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="HideLogoSection">
          <div
            class="mt-8 md:text-lg md:mt-8 text-xl font-semibold pb-4 text-gray-900"
          >
            Hide logo
          </div>
          <!-- eslint-disable -->
          <div class="w-full card-light-shadow rounded-3xl p-6">
            <div class="">
              <div class="w-full">
                <div class="flex justify-between items-center w-full pt-2 pr-2">
                  <div>
                    <div class="">
                      <p class="mt-1 text-sm leading-6 text-gray-600">
                        Hide creatorpage logo
                      </p>
                    </div>
                  </div>
                  <div class="">
                    <div>
                      <label
                        class="relative inline-flex items-center mb-5 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          v-model="isActive"
                          @change="updateLink"
                          value="true"
                          class="sr-only peer"
                        />
                        <div
                          class="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-purple-600"
                        ></div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Iphone14Display />
    <CropperModal
      v-if="openCropper"
      @data="data = $event"
      @close="openCropper = false"
    />
  </div>
</template>

<script setup>
import {
  Dialog,
  DialogPanel,
  RadioGroup,
  RadioGroupLabel,
  RadioGroupOption,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import {
  Listbox,
  ListboxLabel,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/vue";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/vue/20/solid";
import Iphone14Display from "../../components/Iphone14Display.vue";
import debounce from "lodash/debounce";
import { ref, watch, computed, onMounted } from "vue";
import { useStore } from "vuex";
const store = useStore();

let name = ref("");
let page_font = ref("");
let page_layout = ref("");
let data = ref(null);
let errors = ref("");
let loading = ref(false);
let openCropper = ref(false);

async function setDefaults() {
  await store.dispatch("getUser");
  await store.dispatch("getAllLinks");
  await store.dispatch("getAllSocialIcons");
  page_font.value = store.state.user.page_font;
  page_layout.value = store.state.user.page_layout;
  loading.value = false;
}

onMounted(async () => {
  loading.value = true;
  await setDefaults();
});

//page_font.value = computed(() => store.state.user.page_font);
//page_layout.value = computed(() => store.state.user.page_layout);
console.log(page_font);
const updateTheme = async (themeId) => {
  try {
    await store.dispatch("updateTheme", themeId);
  } catch (error) {
    console.log(error);
  }
};

const dataChange = async () => {
  try {
    await store.dispatch("updatePage", {
      page_font: page_font.value,
      page_layout: page_layout.value,
    });
    await store.dispatch("getUser");
  } catch (error) {
    console.log(error);
    //errors.value = error.response.data.errors;
  }
};

const bioLengthComputed = computed(() => {
  return !bio.value ? 0 : bio.value.length;
});

watch(
  () => page_layout.value,
  async () => await dataChange()
);

const fonts = [
  {
    name: "Inter",
  },
  {
    name: "Roboto",
  },
  {
    name: "Rubik",
  },
  {
    name: "Courgette",
  },
  {
    name: "Dancing Script",
  },
  {
    name: "Fredoka",
  },
  {
    name: "Pacifico",
  },
  {
    name: "Satisfy",
  },
  {
    name: "DM Mono",
  },
  {
    name: "Space Mono",
  },
];
</script>
