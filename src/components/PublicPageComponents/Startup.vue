<template>
  <!-- eslint-disable -->
  <div class="relative min-w-[288px] w-full">
    <div
      class="relative w-full mb-4 p-4 overflow-hidden rounded-[1.5rem] shadow md:flex md:flex-row md:flex-nowrap md:justify-between"
      :class="theme.cardsBg"
    >
      <div class="md:w-[50%] mr-2">
        <div
          class="relative w-full z-10 flex flex-row flex-nowrap items-center justify-between"
        >
          <div
            v-if="link.data.isShowStatus"
            class="relative z-10 rounded-full px-3 py-[0.275rem] font-medium text-xs"
            :class="theme.tagIsland"
          >
            <span>{{ link.data.status }}</span>
          </div>
        </div>

        <div class="my-2">
          <div>
            <div class="flex items-center rounded-lg">
              <div
                v-if="link.image"
                class="shadow-xl p-1 rounded-[0.5rem]"
                :class="theme.faviconbg"
              >
                <img
                  loading="lazy"
                  :src="link.image"
                  alt=""
                  class="h-6 rounded-[0.5rem] object-cover"
                />
              </div>
              <div
                v-else-if="!link.image && link.faviconurl"
                class="shadow-xl p-1 rounded-[0.5rem]"
                :class="theme.faviconbg"
              >
                <img
                  loading="lazy"
                  :src="link.faviconurl"
                  alt=""
                  class="h-6 rounded-[0.5rem] object-cover"
                />
              </div>
              <div
                v-else-if="!link.image && !link.faviconurl"
                class="h-6 p-1 rounded-[0.5rem]"
              ></div>

              <p
                class="max-w-[10rem] overflow-hidden flex-1 ml-3 text-lg md:text-xl font-bold whitespace-nowrap"
                :class="theme.cardsHtext"
              >
                {{ link.name }}
              </p>
              <div class="ml-9 md:ml-6">
                <div
                  v-if="link.data.isShowMetrics"
                  class="rounded-[1rem] flex items-center px-2 flex-row border text-xs"
                  :class="theme.tagIsland"
                >
                  <div class="inline-flex items-center mr-1">
                    <span class="relative flex items-center">
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          width="20"
                          height="20"
                          rx="5"
                          fill="url(#paint0_linear_855_162)"
                        />
                        <path
                          d="M9.656 16.6C9.53867 16.6 9.44267 16.5627 9.368 16.488C9.29333 16.4133 9.256 16.3173 9.256 16.2V15.096C8.43467 14.9893 7.74667 14.7813 7.192 14.472C6.648 14.1627 6.23733 13.7893 5.96 13.352C5.68267 12.904 5.53333 12.4347 5.512 11.944C5.512 11.8587 5.544 11.784 5.608 11.72C5.68267 11.6453 5.768 11.608 5.864 11.608H7.88C8.02933 11.608 8.14133 11.6347 8.216 11.688C8.29067 11.7413 8.36533 11.8107 8.44 11.896C8.52533 12.056 8.64267 12.2107 8.792 12.36C8.952 12.5093 9.15467 12.632 9.4 12.728C9.656 12.8133 9.97067 12.856 10.344 12.856C10.9627 12.856 11.4267 12.76 11.736 12.568C12.056 12.376 12.216 12.1147 12.216 11.784C12.216 11.5493 12.1307 11.3573 11.96 11.208C11.7893 11.048 11.512 10.9093 11.128 10.792C10.7547 10.664 10.2533 10.536 9.624 10.408C8.81333 10.2373 8.12 10.0187 7.544 9.752C6.97867 9.47467 6.54667 9.11733 6.248 8.68C5.94933 8.232 5.8 7.67733 5.8 7.016C5.8 6.16267 6.104 5.43733 6.712 4.84C7.33067 4.24267 8.17867 3.86933 9.256 3.72V2.6C9.256 2.48267 9.29333 2.38667 9.368 2.312C9.44267 2.23733 9.53867 2.2 9.656 2.2H10.984C11.0907 2.2 11.1813 2.23733 11.256 2.312C11.3413 2.38667 11.384 2.48267 11.384 2.6V3.752C12.12 3.88 12.7387 4.10933 13.24 4.44C13.7413 4.77067 14.12 5.144 14.376 5.56C14.6427 5.976 14.7813 6.376 14.792 6.76C14.792 6.84533 14.76 6.92533 14.696 7C14.632 7.064 14.552 7.096 14.456 7.096H12.344C12.2267 7.096 12.1253 7.07467 12.04 7.032C11.9547 6.98933 11.88 6.92 11.816 6.824C11.752 6.58933 11.5813 6.38667 11.304 6.216C11.0267 6.03467 10.6693 5.944 10.232 5.944C9.77333 5.944 9.41067 6.02933 9.144 6.2C8.87733 6.36 8.744 6.61067 8.744 6.952C8.744 7.16533 8.81333 7.352 8.952 7.512C9.10133 7.672 9.34667 7.81067 9.688 7.928C10.0293 8.04533 10.4933 8.168 11.08 8.296C12.0507 8.47733 12.8347 8.70667 13.432 8.984C14.0293 9.25067 14.4667 9.60267 14.744 10.04C15.0213 10.4667 15.16 11.0053 15.16 11.656C15.16 12.2853 15 12.84 14.68 13.32C14.3707 13.8 13.9333 14.1893 13.368 14.488C12.8027 14.7867 12.1413 14.984 11.384 15.08V16.2C11.384 16.3173 11.3413 16.4133 11.256 16.488C11.1813 16.5627 11.0907 16.6 10.984 16.6H9.656Z"
                          fill="white"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_855_162"
                            x1="3.22911"
                            y1="1.58761"
                            x2="21.3026"
                            y2="9.6467"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#8D2DE1" />
                            <stop offset="1" stop-color="#6313FF" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </span>
                  </div>
                  <div class="">
                    <span
                      class="font-medium rounded-[4rem]"
                      :class="theme.cardsPtext"
                      >{{ link.data.currentArr_formated
                      }}<!-- -->/mo</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="my-2">
          <span
            class="mr-1 inline-flex items-center rounded-xl px-2 py-1 text-xs font-medium"
            :class="theme.tagIsland"
            >{{ link.data.type }}</span
          >
          <span
            class="mr-1 inline-flex items-center rounded-xl px-2 py-1 text-xs font-medium ing-1"
            :class="theme.tagIsland"
            >{{ link.data.category }}</span
          >
        </div>

        <div class="p-2 md:mb-4">
          <p
            class="inline-flex max-h-[5rem] items-start overflow-hidden text-base leading-7 line-clamp-3 font-medium"
            :class="theme.cardsPtext"
          >
            {{ link.description }}
          </p>
        </div>
      </div>
      <div class="md:w-[50%]">
        <div class="h-full">
          <div v-if="link.thumbnailimage" class="h-full">
            <img
              class="rounded-xl shadow-md drop-shadow-md w-full h-full object-cover"
              :src="link.thumbnailimage"
              alt=""
            />
          </div>
          <div v-if="!link.thumbnailimage && link.thumbnailurl" class="h-full">
            <img
              class="rounded-xl drop-shadow-sm w-full h-full object-cover"
              :src="link.thumbnailurl"
              alt=""
            />
          </div>
          <div v-if="!link.thumbnailurl && !link.thumbnailimage" class=""></div>
        </div>
      </div>

      <div class="absolute bottom-[0.5rem] left-0 right-0">
        <div class="px-12 md:px-48">
          <div class="p-0.5 flex items-center justify-center rounded-[2rem]">
            <button
              v-if="link.data.website_blog.length"
              @click="openMoreInfoModal()"
              class="flex flex-row items-center px-2 py-1 text-xs rounded-[2rem] mr-10"
              :class="theme.islandBtns"
            >
              <span>Learn more</span>
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
                  d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                />
              </svg>
            </button>
            <a
              @click="visitLink"
              class="flex flex-row items-center px-2 py-1 text-xs rounded-[2rem]"
              :class="theme.islandBtns"
            >
              <span>Visit</span>
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
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <SidePanelPop
    :isMoreInfoOpen="isMoreInfoOpen"
    :link="link"
    @closeMoreInfoModal="closeMoreInfoModal"
  />
</template>

<script setup>
import SidePanelPop from "../popovers/SidePanelPop.vue";
import { watch, ref, onMounted, toRefs } from "vue";
import { useStore } from "vuex";
const store = useStore();

const props = defineProps({
  link: Object,
  theme: Object,
});
const { link, theme } = toRefs(props);

let data = ref(null);
let isMoreInfoOpen = ref(false);

function closeMoreInfoModal() {
  isMoreInfoOpen.value = false;
}
function openMoreInfoModal() {
  isMoreInfoOpen.value = true;
}

async function gotchYa() {
  data.value = {
    page_id: store.state.guestpagedata.data.page.id,
    link_id: link.value.id,
  };
  try {
    const res = await store.dispatch("gotchYaClicks", data.value);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}

function visitLink() {
  //window. link.url
  gotchYa();
  console.log(link.value.url);
  window.location.href = link.value.url;
}
console.log(link);
</script>

<style lang="scss" scoped></style>
