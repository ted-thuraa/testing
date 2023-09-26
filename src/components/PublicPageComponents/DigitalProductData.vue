<template>
  <!-- eslint-disable -->
  <div
    class="relative mb-4 min-w-[288px] w-full rounded-[24px]"
    :class="theme.cardsBg"
  >
    <div
      class="relative text-left p-4 h-[258px] md:h-[300px] w-full overflow-hidden rounded-[24px]"
      style="box-shadow: 0 2px 4px rgba(0, 0, 0, 0.04)"
    >
      <p
        class="text-3xl relative z-20 mt-36 md:mt-44 font-bold"
        style="
          --tw-text-opacity: 0.8;
          color: rgb(241 245 249 / var(--tw-text-opacity));
        "
      >
        {{ link.name }}
      </p>
      <p
        class="relative z-20 line-clamp-1"
        style="
          --tw-text-opacity: 1;
          color: rgb(203 213 225 / var(--tw-text-opacity));
        "
      >
        {{ link.description }}
      </p>
      <div
        class="absolute top-0 left-0 z-10 h-full w-full rounded-[24px]"
        style="
          background-image: linear-gradient(to top, var(--tw-gradient-stops));
          --tw-gradient-from: #4f4f4f var(--tw-gradient-from-position);
          --tw-gradient-to: rgb(23 23 23 / 0) var(--tw-gradient-to-position);
          --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
          --tw-gradient-to: rgb(23 23 23 / 0.1) var(--tw-gradient-to-position);
        "
      ></div>
      <img
        :src="link.thumbnailimage"
        alt=""
        class="absolute top-0 bottom-0 left-0 z-0 w-screen h-full object-cover"
      />
    </div>

    <div class="absolute z-10 bottom-[0.5rem] left-0 right-0">
      <div class="px-12 md:px-48">
        <div class="p-0.5 flex items-center justify-between rounded-[2rem]">
          <button
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
            :href="link.url"
            target="_blank"
            class="flex flex-row items-center px-2 py-1 text-xs rounded-[2rem]"
            :class="theme.islandBtns"
          >
            <span>Live demo</span>
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
    <!-- <div
            class="absolute flex items-start flex-row flex-nowrap top-[70%] left-[5%] justify-start"
        >
            <p>Banking App</p>
        </div> -->
  </div>
  <SidePanelPop
    :isMoreInfoOpen="isPortfolioMoreInfoOpen"
    :link="link"
    @closeMoreInfoModal="closeMoreInfoModal"
  />
</template>

<script setup>
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/vue";
import SidePanelPop from "../popovers/SidePanelPop.vue";
import { watch, ref, onMounted, toRefs } from "vue";
import { useStore } from "vuex";
const store = useStore();

const props = defineProps({
  link: Object,
  theme: Object,
});
const { link, theme } = toRefs(props);

let isPortfolioMoreInfoOpen = ref(false);

function closeMoreInfoModal() {
  isPortfolioMoreInfoOpen.value = false;
}
function openMoreInfoModal() {
  isPortfolioMoreInfoOpen.value = true;
}
console.log(link);
</script>

<style lang="scss" scoped></style>
