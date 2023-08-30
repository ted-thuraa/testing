<template>
  <!-- eslint-disable -->

  <div class="relative bg-white flex flex-col overflow-x-hidden h-screen">
    <div
      class="relative flex-1 py-2 mb-2 flex overflow-y-hidden overflow-x-hidden"
    >
      <!-- <div class="absolute top-0 right-0 bottom-0 left-0 bg-[#595959]">
        <div
          class="w-[200%] -translate-x-1/4 opacity-[0.7] blur-[30px] inline-block bg-transparent"
        >
          <img
            loading="lazy"
            :src="image"
            alt=""
            class="h-auto w-[100%] block m-auto"
          />
        </div>
        <div
          class="absolute top-0 bottom-0 left-0 right-0"
          style="
            background: linear-gradient(
              to bottom,
              rgba(89, 89, 89, 0.8) 0%,
              rgba(89, 89, 89, 0.298) 33%,
              rgba(15, 15, 15, 1) 100%
            );
          "
        ></div>
      </div> -->
      <div class="relative flex-1 overflow-y-auto overflow-x-hidden">
        <div class="w-full flex flex-col mb-20">
          <!-- <div
                        class="relative overflow-visible opacity-100 flex items-start flex-none flex-col flex-nowrap gap-[24px] h-min justify-start px-6 pt-6 pb-10 w-full rounded-xl"
                    >
                        <div
                            class="relative flex-none h-[80px] w-[80px] overflow-visible"
                        >
                            <img
                                loading="lazy"
                                src="../assets/images/ted.jpg"
                                alt=""
                                class="h-[80px] w-[80px] rounded-full object-cover"
                            />
                        </div>
                        <div class="relative h-[99px] w-[289px] flex-none">
                            <div
                                class="flex justify-start flex-col outline-none text-white text-[32px] font-bold leading-[120%] tracking-[-1px] xl:text-[44px] xl:tracking-[-2px]"
                            >
                                <div
                                    class="break-words whitespace-break-spaces"
                                >
                                    <p>@tedflux</p>
                                </div>
                            </div>
                            <div
                                class="flex flex-col justify-start h-auto mt-3 text-[#d3d3d3] xl:mt-3 xl:text-xl"
                            >
                                <div
                                    class="break-words whitespace-break-spaces"
                                >
                                    <p>
                                        I solve business problems through
                                        human-centered design, with a focus on
                                        simplicity, sophistication, and
                                        efficiency.
                                    </p>
                                </div>
                            </div>
                            <div></div>
                        </div>
                    </div> -->
          <div
            class="relative block px-2 overflow-visible opacity-100 pt-1 pb-2 w-full rounded-xl"
          >
            <div class="w-full flex items-center justify-end px-4 pb-2">
              <button
                class="p-2 rounded-full text-white bg-gray-950/50 btn-sm"
                aria-label="Share this page"
              >
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
                    d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
                  />
                </svg>
              </button>
            </div>

            <div
              class="flex flex-none flex-row flex-nowrap h-min justify-between pl-8 pr-16"
            >
              <div class="relative flex flex-none overflow-visible">
                <img
                  loading="lazy"
                  :src="image"
                  alt=""
                  class="h-[100px] w-[100px] rounded-full object-cover"
                />
              </div>
              <div class="ml-2.5 relative h-auto flex flex-col items-center">
                <div class="space-y-1 flex-1">
                  <h1
                    class="text-2xl font-bold leading-9 tracking-tight text-gray-900"
                  >
                    {{ fullname }}
                  </h1>
                  <h2 class="">
                    <span class="text-sm font-semibold leading-6 text-gray-600"
                      >Developer Advocate</span
                    >
                  </h2>
                  <h2 class="">
                    📍<!-- -->
                    <span class="text-black">@{{ usersname }}</span>
                  </h2>
                  <div>
                    <div class="text-base text-black flex gap-1 items-center">
                      <span class="whitespace-nowrap"
                        ><span>🟩</span><span>🟩</span><span>🟩</span
                        ><span>🟧</span><span>⬜️</span></span
                      >
                      <p class="text-black whitespace-nowrap">$5k/mo</p>
                    </div>
                  </div>
                </div>

                <div></div>
              </div>
            </div>
          </div>
          <div class="w-full px-6 my-6 flex items-center">
            <p
              class="text-[0.9rem] font-medium md:text-lg text-gray-900 pb-4 border-b border-gray-200"
            >
              {{ bio }}
            </p>
          </div>
          <!-- <div
                        class="relative overflow-visible opacity-100 flex items-start flex-none flex-col flex-nowrap gap-[24px] h-min justify-center px-4 pt-6 pb-10 w-full rounded-xl"
                    >
                        <div
                            class="relative flex items-center justify-center flex-none overflow-visible h-auto w-full"
                        >
                            <img
                                loading="lazy"
                                src="../assets/images/ted.jpg"
                                alt=""
                                class="h-[100px] w-[100px] rounded-full object-cover"
                            />
                        </div>
                        <div class="relative flex-none">
                            <div
                                class="flex items-center flex-col outline-none text-center text-white text-[32px] font-bold leading-[120%] tracking-[-1px] xl:text-[44px] xl:tracking-[-2px]"
                            >
                                <div
                                    class="break-words whitespace-break-spaces"
                                >
                                    <p>@tedflux</p>
                                </div>
                            </div>
                            <div
                                class="flex items-center h-auto mt-3 text-center text-[#dbdbdb] xl:mt-3 xl:text-xl"
                            >
                                <div
                                    class="break-words whitespace-break-spaces"
                                >
                                    <p>
                                        I solve business problems through
                                        human-centered design, with a focus on
                                        simplicity, sophistication, and
                                        efficiency.
                                    </p>
                                </div>
                            </div>
                            <div></div>
                        </div>
                    </div> -->
          <div class="flex flex-col relative h-min px-4 pb-10 w-full">
            <div v-for="link in allLinks" :key="link" class="m-0 p-0">
              <component
                :is="getComponentItem(link.category)"
                :link="link"
                class=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <SidePanelPop
    :isMoreInfoOpen="isMoreInfoOpen"
    @closeMoreInfoModal="closeMoreInfoModal"
  />
  <FormPanel :isFormOpen="isFormOpen" @closeFormOpen="closeFormOpen" />
</template>

<script setup>
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/vue";
import LinkItem from "../components/PublicPageComponents/Link.vue";
import StartupItem from "../components/PublicPageComponents/Startup.vue";
import ImageItem from "../components/PublicPageComponents/Image.vue";
import TextItem from "../components/PublicPageComponents/Text.vue";
import HeaderItem from "../components/PublicPageComponents/SectionHeader.vue";
import FormItem from "../components/PublicPageComponents/Form.vue";
import PortfolioItem from "../components/PublicPageComponents/Portfolio.vue";
import VideoItem from "../components/PublicPageComponents/Video.vue";
import StoreItem from "../components/PublicPageComponents/Store.vue";
import SidePanelPop from "../components/popovers/SidePanelPop.vue";
import FormPanel from "../components/popovers/FormPanel.vue";
import DigitalProduct from "../components/PublicPageComponents/DigitalProductData.vue";
import MoreInfo from "../components/popovers/MoreInfo.vue";
import FormsModal from "../components/FormsModal.vue";
//import DefaultPage from "~/layouts/LinkPage/DefaultPage.vue";
//import IndiePage from "~/layouts/LinkPage/IndiePage.vue";
//import MarkettingPage from "~/layouts/LinkPage/MarkettingPage.vue";
//import ParcelPage from "~/layouts/LinkPage/ParcelPage.vue";
import { ref, watch, computed, onMounted, isProxy, toRaw } from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
import FormsModalVue from "../components/FormsModal.vue";

const store = useStore();

const router = useRouter();
const route = useRoute();

const linkitems = computed(() => store.state.linkitems);

let fullname = ref("");
let usersname = ref("");
let username = ref("");
let bio = ref("");
let theme_id = ref("");
let image = ref("");
let theme = ref(null);
let data = ref(null);
let errors = ref(null);
let colors = ref(null);
let allLinks = ref(null);
let isMoreInfoOpen = ref(false);
let currentInfoblog = ref(null);
let isFormOpen = ref(false);
let currentForm = ref(null);

console.log(route.params.username);

function closeMoreInfoModal() {
  isMoreInfoOpen.value = false;
}
function openMoreInfoModal() {
  isMoreInfoOpen.value = true;
}
function closeFormOpen() {
  isFormOpen.value = false;
}
function openFormOpen() {
  isFormOpen.value = true;
}

const getLinkTheme = (theme_id) => {
  colors.value.forEach((color) => {
    if (theme_id === color.id) {
      theme.value = color;
    }
  });
};

const getPageData = async (username) => {
  try {
    console.log(username.value);
    await store.dispatch("getPage", username.value);
    // console.log(res);
    // bio.value = res.data.page.linkbio;
    // theme_id.value = res.data.page.theme_id;
    // image.value = res.data.page.linkbioimage;
    // allLinks.value = res.data.links;
    getLinkTheme(theme_id.value);
    store.dispatch("triggerAnalytics", username.value);
  } catch (error) {
    console.log(error);
    errors.value = error.response.data.errors;
  }
};

const gottYa = async (link_id) => {
  console.log(link_id);
  console.log(username.value);
  try {
    const res = await store.dispatch("gottYaClicks", link_id, username.value);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

onMounted(() => {
  colors.value = store.state.user.colors;
  username.value = route.params.username;
  theme.value = null;
  getPageData(username);
  //getPageLinks(username);
});

function setPageData() {
  console.log(store.state.guestpagedata.data);
  fullname.value = store.state.guestpagedata.data.page.owner_fullname;
  usersname.value = store.state.guestpagedata.data.page.linkname;
  bio.value = store.state.guestpagedata.data.page.linkbio;
  theme_id.value = store.state.guestpagedata.data.page.theme_id;
  image.value = store.state.guestpagedata.data.page.linkbioimage;
  allLinks.value = store.state.guestpagedata.data.links;
  console.log(allLinks.value);
}
function getComponentItem(category) {
  switch (category) {
    case "Link":
      return LinkItem;
    case "SaaS":
      return StartupItem;
    case "Image":
      return ImageItem;
    case "Text":
      return TextItem;
    case "Header":
      return HeaderItem;
    case "Form":
      return FormItem;
    case "Portfolio":
      return PortfolioItem;
    case "Video":
      return VideoItem;
    case "Map":
      return MapItem;
    case "Store":
      return StoreItem;
    case "DigitalProduct":
      return DigitalProduct;
    // Handle other categories here if needed
    default:
      return LinkItem; // Replace 'DefaultComponent' with a fallback component name
  }
}

watch(
  () => store.state.guestpagedata.data,
  async () => setPageData()
);
</script>
