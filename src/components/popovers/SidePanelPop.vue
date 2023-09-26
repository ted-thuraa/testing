<template>
  <TransitionRoot as="template" :show="isMoreInfoOpen">
    <Dialog as="div" class="relative z-[100]">
      <div class="fixed inset-0 overflow-hidden">
        <div class="absolute inset-0 overflow-hidden">
          <div
            class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full"
          >
            <TransitionChild
              as="template"
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enter-from="translate-x-full"
              enter-to="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leave-from="translate-x-0"
              leave-to="translate-x-full"
            >
              <DialogPanel
                class="pointer-events-auto relative w-screen max-w-md lg:max-w-xl"
              >
                <div
                  class="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl"
                >
                  <div class="absolute top-0 left-0 right-0">
                    <div class="px-4 sm:px-6 relative flex items-start">
                      <button
                        type="button"
                        class="mt-5 p-1 flex items-center rounded-md shadow ring-1 ring-slate-900/10 relative bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                        @click="$emit('closeMoreInfoModal')"
                      >
                        <span class="absolute -inset-2.5" />
                        <span class="sr-only">Close panel</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-5 h-5"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M15.75 19.5L8.25 12l7.5-7.5"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div
                    class="relative mt-6 flex-1 px-4 sm:px-6 h-screen overflow-y-auto"
                  >
                    <!-- Your content -->
                    <div class="">
                      <!-- <DialogTitle
                        class="mt-3 mb-8 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
                        >{{ link.name }}</DialogTitle
                      > -->
                    </div>
                    <div v-if="link.category === 'SaaS'">
                      <div
                        class="mb-4 flex h-[198px] w-full overflow-hidden flex-1 whitespace-break-spaces"
                        style="box-shadow: 0 2px 4px rgba(0, 0, 0, 0.04)"
                      >
                        <img
                          :src="link.thumbnailurl"
                          alt=""
                          class="w-full shadow-xl shadow-black/5 ring-1 ring-slate-700/10 h-full rounded-[1rem] object-cover"
                        />
                      </div>

                      <div
                        class="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8"
                      >
                        <div class="lg:pr-4 md:col-span-2">
                          <div
                            class="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg"
                          >
                            <TiptapReadOnly
                              :portfolio_blog="link.data.website_blog"
                            />

                            <div v-if="link.data.isShowMetrics">
                              <h2
                                class="mt-16 text-2xl font-bold tracking-tight text-gray-900"
                              >
                                Metrics
                              </h2>
                              <h3
                                class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600"
                              >
                                {{ link.name }}'s metrics
                              </h3>
                              <div class="mx-auto py-1 px-4 max-w-[80rem]">
                                <div>
                                  <div class="grid mt-5 gap-5 grid-cols-1">
                                    <div
                                      class="py-8 px-4 rounded-[1rem] bg-white p-4 shadow-xl shadow-black/5 ring-1 ring-slate-700/10 overflow-hidden"
                                    >
                                      <p
                                        class="text-gray-600 font-medium text-sm overflow-hidden text-ellipsis whitespace-nowrap"
                                      >
                                        Mrr
                                      </p>
                                      <p
                                        class="text-gray-900 font-semibold text-3xl tracking-tight mt-1"
                                      >
                                        {{ link.data.currentMrr_formated }}
                                      </p>
                                    </div>
                                    <div
                                      class="py-8 px-4 rounded-[1rem] bg-white p-4 shadow-xl shadow-black/5 ring-1 ring-slate-700/10 overflow-hidden"
                                    >
                                      <p
                                        class="text-gray-600 font-medium text-sm overflow-hidden text-ellipsis whitespace-nowrap"
                                      >
                                        Arr
                                      </p>
                                      <p
                                        class="text-gray-900 font-semibold text-3xl tracking-tight mt-1"
                                      >
                                        {{ link.data.currentArr_formated }}
                                      </p>
                                    </div>
                                    <div
                                      class="py-8 px-4 rounded-[1rem] bg-white p-4 shadow-xl shadow-black/5 ring-1 ring-slate-700/10 overflow-hidden"
                                    >
                                      <p
                                        class="text-gray-600 font-medium text-sm overflow-hidden text-ellipsis whitespace-nowrap"
                                      >
                                        Users
                                      </p>
                                      <p
                                        class="text-gray-900 font-semibold text-3xl tracking-tight mt-1"
                                      >
                                        {{ link.data.customers_formated }}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div v-if="link.category === 'DigitalProduct'">
                      <div
                        class="mb-4 flex h-[198px] w-full overflow-hidden flex-1 whitespace-break-spaces"
                        style="box-shadow: 0 2px 4px rgba(0, 0, 0, 0.04)"
                      >
                        <img
                          :src="link.thumbnailimage"
                          alt=""
                          class="w-full h-full rounded-[1rem] object-cover"
                        />
                      </div>

                      <div class="p-2 lg:mt-0 w-full">
                        <div
                          class="rounded-2xl py-2 px-4 text-center lg:flex lg:flex-col lg:justify-center lg:py-10"
                        >
                          <div class="mx-2">
                            <div
                              class="flex flex-row flex-nowrap items-start justify-between"
                            >
                              <h2
                                class="mb-4 text-3xl md:text-4xl text-left overflow-hidden max-w-[10rem] font-bold tracking-tight text-gray-900"
                              >
                                {{ link.data.product_name }}
                              </h2>
                              <p
                                class="flex items-baseline justify-center gap-x-2"
                              >
                                <span
                                  class="text-2xl md:text-5xl font-bold tracking-tight text-gray-900"
                                  >${{ link.data.product_price }}</span
                                >
                                <span
                                  class="text-sm font-semibold leading-6 tracking-wide text-gray-600"
                                  >USD</span
                                >
                              </p>
                            </div>

                            <a
                              href="#"
                              class="mt-8 block w-full rounded-full bg-purple-700 px-3 py-2 md:py-4 text-center text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                              >Buy {{ link.data.product_name }} for ${{
                                link.data.product_price
                              }}</a
                            >
                            <a
                              class="group w-full block mt-4 py-2 md:py-4 px-5 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-400 hover:bg-gray-100 hover:text-purple-700 focus:z-10 focus:ring-4 focus:ring-gray-200 transition ease-in-out duration-200"
                              ><div
                                class="flex flex-row items-center justify-center"
                              >
                                <span class="text-sm font-semibold">Visit</span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke-width="1.5"
                                  stroke="currentColor"
                                  class="ml-1 w-5 h-5"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                                  />
                                </svg>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div
                        class="mt-4 lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8"
                      >
                        <div class="lg:pr-4 md:col-span-2">
                          <div
                            class="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg"
                          >
                            <TiptapReadOnly
                              :portfolio_blog="link.data.product_desc"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div v-if="link.category === 'Portfolio'">
                      <div
                        class="mb-4 flex h-[198px] w-full overflow-hidden flex-1 whitespace-break-spaces"
                        style="box-shadow: 0 2px 4px rgba(0, 0, 0, 0.04)"
                      >
                        <img
                          :src="link.thumbnailimage"
                          alt=""
                          class="w-full h-full rounded-[1rem] object-cover"
                        />
                      </div>

                      <div
                        class="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8"
                      >
                        <div class="lg:pr-4">
                          <div
                            class="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg"
                          >
                            <TiptapReadOnly
                              :portfolio_blog="link.data.portfolio_blog"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- <component
                      :is="getComponentItem(link.category)"
                      :link="link"
                      class=""
                    /> -->
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import TiptapReadOnly from "../TiptapReadOnly.vue";
import { ref, watch, computed, onMounted, toRefs } from "vue";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { XMarkIcon } from "@heroicons/vue/24/outline";
import PortfolioMoreData from "../PublicPageComponents/PortfolioMoreData.vue";
import StartupMoreDataVue from "../PublicPageComponents/StartupMoreData.vue";
import DigitalProductData from "../PublicPageComponents/DigitalProductData.vue";

import { useStore } from "vuex";
const store = useStore();

const emit = defineEmits(["closeMoreInfoModal"]);

const props = defineProps({
  link: Object,
  isMoreInfoOpen: Boolean,
});

const { link } = toRefs(props);

const { isMoreInfoOpen } = toRefs(props);

function getComponentItem(category) {
  switch (category) {
    case "SaaS":
      return PortfolioMoreData;
    case "Portfolio":
      return StartupMoreDataVue;
    case "DigitalProduct":
      return DigitalProductData;

    // Handle other categories here if needed
    default:
      return; // Replace 'DefaultComponent' with a fallback component name
  }
}
</script>
<style lang="scss">
.blog {
  color: rgb(24, 24, 24);
  > * + * {
    margin-top: 0.75em;
  }
}
</style>
