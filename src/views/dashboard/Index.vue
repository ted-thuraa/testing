<template>
  <div class="relative">
    <div v-if="loading" class="w-full h-screen">
      <div class="relative w-full h-full rounded-lg">
        <div class="w-full h-full bg-transparent p-0.5 px-2 absolute z-50">
          <div class="flex items-center justify-center rounded-lg h-full">
            <div class="" role="status">
              <svg
                aria-hidden="true"
                class="w-16 h-16 mr-2 text-gray-200 animate-spin fill-gray-600"
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
    <div v-else>
      <div
        id="AdminPage"
        class="relative block md:flex w-[425px] md:w-full h-[100vh] md:pl-4 overflow-y-auto"
      >
        <div class="md:hidden bg-white">
          <div class="w-full px-2 py-4 relative">
            <ul
              class="w-full bg-gray-50 rounded-2xl px-0.5 py-1.5 font-medium flex flex-row items-center justify-center"
            >
              <li v-for="link in links" :key="link" class="w-[8rem]">
                <router-link
                  :to="link.url"
                  tag="li"
                  class="flex flex-col justify-center items-center p-2 mx-2 bg-white text-gray-300 rounded-lg hover:text-white"
                >
                  <div
                    class="rounded-md group-hover:shadow group-hover:ring-slate-900/10 group-hover:shadow-indigo-300"
                  >
                    <component
                      :is="link.icon"
                      class="w-5 h-5"
                      size="18"
                      :color="
                        route.fullPath == link.url ? '#000000' : '#676B5F'
                      "
                    ></component>
                  </div>

                  <span
                    class=""
                    :class="
                      route.fullPath == link.url
                        ? 'font-bold text-[#000000]'
                        : 'text-[#676B5F] font-normal'
                    "
                  >
                    {{ link.name }}</span
                  >
                </router-link>
              </li>
            </ul>
          </div>
        </div>
        <div
          class="w-[390px] md:w-[calc(100%-100px)] lg:w-[calc(100%-500px)] px-4 md:pt-6 pt-14"
        >
          <div class="">
            <div></div>
          </div>
          <div class="items max-w-[750px] mx-auto pb-24">
            <div id="ProfileSection">
              <div class="w-full">
                <h2 class="text-black text-[2rem] font-bold">Dashboard</h2>
              </div>
              <div class="font-semibold pb-4 text-gray-700 mt-4">Profile</div>

              <div
                class="relative w-full overflow-hidden rounded-[20px] card-light-shadow p-6"
              >
                <div class="flex items-center md:gap-4">
                  <div
                    class="relative mr-2 w-[40px] h-[40px] md:w-[80px] md:h-[80px] inline-flex group"
                  >
                    <div class="">
                      <img
                        class="rounded-[100%] w-full h-full object-cover"
                        :src="store.state.user.image"
                      />
                    </div>

                    <div
                      class="w-full md:absolute inset-0 flex justify-center items-center rounded-full bg-transparent group-hover:bg-gray-100/50 duration-200 cursor-pointer"
                    >
                      <button
                        @click="openCropper = true"
                        class="flex items-center justify-center p-2 rounded-md bg-neutral-400/50 border-neutral/50 group-hover:bg-neutral-800/50 group-hover:border-neutral"
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
                            d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
                          />
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <!-- eslint-disable -->
                  <div class="flex flex-col">
                    <div
                      class="w-full mt-4 font-semibold text-[6rem] text-black"
                    >
                      <input
                        class="inputs bg-gray-50 font-medium md:!text-[1.5rem] focus:bg-gray-100 focus:border-opacity-0 focus:border-gray-100 text-gray-900 text-sm rounded-lg focus:ring-blue-50 block pl-4"
                        placeholder="Full name"
                        v-model="fullname"
                        @change="updateUserDetails"
                        inputType="text"
                        :max="25"
                      />
                    </div>
                    <div class="mt-2 pl-4">
                      <span class="font-medium text-sm text-gray-600"
                        >@{{ username }}</span
                      >
                    </div>
                  </div>
                </div>

                <div class="mt-4">
                  <textarea
                    v-model="bio"
                    @change="updateUserDetails"
                    rows="4"
                    maxlength="80"
                    placeholder="Type your bio here ..."
                    class="w-full inputs bg-gray-50 font-medium !text-[0.98rem] focus:bg-gray-100 focus:border-opacity-0 focus:border-gray-100 text-gray-900 text-sm rounded-lg focus:ring-blue-50 block pl-4 p-2.5 resize-none"
                  ></textarea>
                </div>

                <div
                  class="flex items-center justify-end text-[#676B5F] text-[13px]"
                >
                  {{ bioLengthComputed }}/80
                </div>
                <div>
                  <button
                    @click="openAddSocialIconModal()"
                    type="button"
                    class="text-white bg-purple-700 hover:bg-purple-800 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-[1.5rem] text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2"
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
                        d="M12 6v12m6-6H6"
                      />
                    </svg>
                    <span>Add Icon</span>
                  </button>
                </div>

                <div class="">
                  <SelectSocialIcon
                    :showAddSocialIconLink="showAddSocialIconLink"
                    @closeAddSocialIconModal="closeAddSocialIconModal"
                  />
                </div>
                <div class="">
                  <div class="">
                    <SocialMediaLinkbox
                      :socialicons="store.state.socialicons.data"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="mt-4 w-full flex flex-row items-center justify-center">
              <button
                v-if="!showAddLink"
                @click="openSelectLinkTypeModal"
                class="flex flex-row items-center px-8 md:px-48 py-3 bg-purple-700 text-white rounded-[1.5rem] hover:scale-110 active:scale-90 transition-transform ease-in-out duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  v-if="!store.state.isMobile"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 6v12m6-6H6"
                  />
                </svg>

                <span>Add</span>
              </button>
            </div>

            <SelectLinkType
              :isSelectLinkTypeOpen="isSelectLinkTypeOpen"
              @closeSelectLinkTypeModal="closeSelectLinkTypeModal"
              @AddLink="handleSelectedItem"
            />

            <AddLink
              v-if="!store.state.user.isMobile"
              :category="category"
              @close="showAddLink = false"
              :class="[
                {
                  'mt-20 md:mt-8 mb-12 max-h-[1000px] transition-all duration-300 ease-in':
                    showAddLink,
                },
                {
                  'max-h-0 transition-all duration-300 ease-out': !showAddLink,
                },
              ]"
            />

            <draggable
              v-model="sortedLinkItems"
              tag="transition-group"
              :component-data="{ name: 'flip-list', type: 'transition' }"
              @end="onEnd"
              ghost-class="ghost"
              class="list-group"
            >
              <template #item="{ element }" class="sortable">
                <div class="list-group-item">
                  <component
                    :is="getComponentName(element.category)"
                    :link="element"
                    @updatedInput="updatedInput"
                    class="mt-6"
                  />
                </div>
              </template>
            </draggable>
            <div class="text-black">{{ oldIndex }}</div>
            <div class="text-black">{{ newIndex }}</div>
          </div>
        </div>

        <div
          class="lg:hidden fixed z-[50] flex justify-center bottom-0 left-0 right-0 px-6"
        >
          <button
            class="text-white bg-purple-700 hover:bg-purple-800 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-[1.5rem] text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2"
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
                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span>Preview</span>
          </button>
        </div>
        <div class="hidden lg:block">
          <Iphone14Display />
        </div>
      </div>
      <CropperModal
        v-if="openCropper"
        @data="data = $event"
        @close="openCropper = false"
      />
    </div>
  </div>
</template>

<script setup>
import draggable from "vuedraggable";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import { ChevronDownIcon } from "@heroicons/vue/20/solid";
import SelectLinkType from "../../components/popovers/SelectLinkType.vue";
import Iphone14Display from "../../components/Iphone14Display.vue";
import AddLink from "../../components/AddLink.vue";
import LinkBox from "../../components/Linkbox.vue";
import ImageLinkbox from "../../components/ImageLinkbox.vue";
import QuoteLinkbox from "../../components/QuoteLinkbox.vue";
import HeaderLinkbox from "../../components/HeaderLinkbox.vue";
import FormLinkbox from "../../components/FormLinkbox.vue";
import PortfolioLinkbox from "../../components/PortfolioLinkbox.vue";
import VideoLinkbox from "../../components/VideoLinkbox.vue";
import MapLinkbox from "../../components/MapLinkbox.vue";
import StoreLinkbox from "../../components/StoreLinkbox.vue";
import TextInput from "../../components/TextInput.vue";
import SocialLinkbox from "../../components/SocialLinkbox.vue";
import SocialIconBox from "../../components/SocialIconBox.vue";
import StartupLinkbox from "../../components/StartupLinkBox.vue";
import CropperModal from "../../components/CropperModal.vue";
import SelectSocialIcon from "../../components/popovers/SelectSocialIcon.vue";
import SocialMediaLinkbox from "../../components/SocialMediaLinkbox.vue";
import DigitalProductLinkbox from "../../components/DigitalProductLinkbox.vue";
import debounce from "lodash/debounce";
import Dash from "../../assets/svg/Dash.vue";
import Analytics from "../../assets/svg/Analytics.vue";
import Theme from "../../assets/svg/Theme.vue";
import Settings from "../../assets/svg/Settings.vue";
import { ref, watch, computed, onMounted, isProxy, toRaw, nextTick } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/vue";
import MapLinkboxVue from "../../components/MapLinkbox.vue";

const store = useStore();

const linkitems = computed(() =>
  store.state.linkitems.data.slice().sort((a, b) => a.order - b.order)
);

store.dispatch("getAllLinks");

let fullname = ref("");
let username = ref("");
let description = ref("");
let url = ref("");
let bio = ref("");
let data = ref(null);
let errors = ref("");
let loading = ref(false);
let openCropper = ref(false);
let isOpen = ref(false);
let Links = ref([]);
let socialLinks = ref([]);
let selectedIconName = ref(null);
let showAddLink = ref(false);
let showAddSocialIconLink = ref(false);
let isSelectLinkTypeOpen = ref(false);
let category = ref("");
let sortedLinkItems = ref([]);
let oldIndex = ref("");
let newIndex = ref("");

function onEnd(event) {
  console.log(event);

  // Get the new order of the dragged skill
  const newOrder = event.newIndex;
  // Get the index of the skill that was dragged
  const oldIndex = event.oldIndex;
  // Get the skill that was dragged
  //const draggedSkill = skills.value[oldIndex];

  // Reorder the skills array to reflect the new order
  //skills.value.splice(newOrder, 0, skills.value.splice(oldIndex, 1)[0]);

  // Update the order property of all skills based on their index
  console.log(sortedLinkItems);
  sortedLinkItems.value.forEach((link, index) => {
    link.order = index;
  });
  console.log(sortedLinkItems.value);
  updateLinksOrder();
  //store.dispatch("updateLinksOrder", linkitems.value.data);
  //await store.dispatch("getUser");
}

const onDragEnd = (evt) => {};

function updateLinksOrder() {
  store.dispatch("updateLinksOrder", sortedLinkItems.value);
}
function closeSelectLinkTypeModal() {
  isSelectLinkTypeOpen.value = false;
}
function openSelectLinkTypeModal() {
  isSelectLinkTypeOpen.value = true;
}

function closeAddSocialIconModal() {
  showAddSocialIconLink.value = false;
}
function openAddSocialIconModal() {
  showAddSocialIconLink.value = true;
}

function closeModal() {
  isOpen.value = false;
}

function openModal() {
  console.log("clicked");
  isOpen.value = true;
  console.log(isOpen.value);
}

function handleSelectedItem(payload) {
  showAddLink.value = true;
  isSelectLinkTypeOpen.value = false;
  console.log(payload.category);
  category.value = payload.category;
}

async function setDefaults() {
  await store.dispatch("getAllLinks");
  await store.dispatch("getUser");
  await store.dispatch("getAllSocialIcons");
}

onMounted(async () => {
  loading.value = true;
  await setDefaults();
  fullname.value = store.state.user.fullname;
  username.value = store.state.user.username;
  bio.value = store.state.user.bio;
  const linkitems = computed(() =>
    store.state.linkitems.data.slice().sort((a, b) => a.order - b.order)
  );
  sortedLinkItems.value = linkitems.value;
  console.log(fullname.value);
  loading.value = false;
});

//fullname.value = computed(() => store.state.user.fullname);
//username.value = computed(() => store.state.user.username);
//bio.value = computed(() => store.state.user.bio);
if (isProxy(store.state.user.allLinks)) {
  Links = toRaw(store.state.user.allLinks);
}
//Links = computed(() => store.state.user.allLinks);
socialLinks = computed(() => store.state.user.socialLinks);
console.log(fullname.value);
console.log(store.state.user.name);

const updateUserDetails = debounce(async () => {
  try {
    console.log(bio.value);

    await store.dispatch("updatePageDetails", {
      fullname: fullname.value,
      username: username.value,
      bio: bio.value,
    });
    //await store.dispatch("getUser");
  } catch (error) {
    console.log(error);
    errors.value = error.response.data.errors;
  }
}, 1000);

const updateLink = debounce(async () => {
  try {
    await store.dispatch(
      "updateLink",
      link.value.id,
      name.value,
      description.value,
      url.value
    );
    await store.dispatch("getAllLinks");
  } catch (error) {
    console.log(error);
    errors.value = error.response.data.errors;
  }
}, 500);

const bioLengthComputed = computed(() => {
  return !bio.value ? 0 : bio.value.length;
});

const updateUserImage = async () => {
  try {
    await store.dispatch("updateUserImage", data.value);
    await store.dispatch("getUser");
    setTimeout(() => (openCropper.value = false), 300);
  } catch (error) {
    openCropper.value = false;
    alert(error);
    console.log(error);
  }
};

const updateNewData = () => {
  const linkitems = computed(() =>
    store.state.linkitems.data.slice().sort((a, b) => a.order - b.order)
  );
  sortedLinkItems.value = linkitems.value;
};

watch(
  () => data.value,
  async () => await updateUserImage()
);
watch(
  () => store.state.linkitems.data,
  () => {
    updateNewData();
  }
);

const updatedInput = (e) => {
  selectedInput.value.id = e.id;
  selectedInput.value.str = e.str;
};

function getComponentName(category) {
  switch (category) {
    case "Link":
      return LinkBox;
    case "SaaS":
      return StartupLinkbox;
    case "Image/Video":
      return ImageLinkbox;
    case "Text":
      return QuoteLinkbox;
    case "Header":
      return HeaderLinkbox;
    case "Form":
      return FormLinkbox;
    case "Portfolio":
      return PortfolioLinkbox;
    case "Video":
      return VideoLinkbox;
    case "Map":
      return MapLinkbox;
    case "DigitalProduct":
      return DigitalProductLinkbox;
    case "Store":
      return StoreLinkbox;
    // Handle other categories here if needed
    default:
      return LinkBox; // Replace 'DefaultComponent' with a fallback component name
  }
}

const links = ref([
  { name: "Links", url: "/app/dashboard", icon: Dash },
  {
    name: "Apperance",
    url: "/app/appearance",
    icon: Theme,
  },
  {
    name: "Analytics",
    url: "/app/analytics",
    icon: Analytics,
  },
  {
    name: "Settings",
    url: "/app/settings",
    icon: Settings,
  },
  //{ name: "Settings", url: "/", icon: "material-symbols:settings" },
]);
</script>

<style lang="scss">
.items .sortable-drag {
  background: rgb(255, 255, 255);
  opacity: 1;
  border-radius: 1.5rem;
}
.flip-list-move {
  transition: transform 0.8s;
}

.ghost {
  opacity: 0.7;
  background: #f3f3f3;
  box-shadow: 10px 10px 5px -1px rgba(0, 0, 0, 0.14);
  border-radius: 1.5rem;
}
</style>
