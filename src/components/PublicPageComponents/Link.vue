<template>
  <div
    v-if="link.layout === 'Cube'"
    class="relative overflow-hidden w-full aspect-[1/1.1] md:aspect-[1/0.8] mb-4 rounded-[1.5rem]"
    :class="theme.cardsBg"
  >
    <a @click="visitLink" class="h-auto w-full appearance-none cursor-pointer">
      <div
        class="flex flex-col flex-nowrap h-auto w-full p-1 justify-between items-center appearance-none m-0 cursor-pointer break-words bg-transparent whitespace-normal"
      >
        <div
          v-if="link.thumbnailimage"
          class="w-full overflow-hidden rounded-[0.5rem]"
        >
          <img
            loading="lazy"
            :src="link.thumbnailimage"
            alt=""
            class="w-full h-[6.5rem] md:h-[10rem] rounded-[1.5rem] object-cover"
          />
        </div>
        <div
          v-if="!link.thumbnailimage && link.thumbnailurl"
          class="w-full overflow-hidden rounded-[0.5rem]"
        >
          <img
            loading="lazy"
            :src="link.thumbnailurl"
            alt=""
            class="w-full h-[6.5rem] md:h-[10rem] rounded-[1.5rem] object-cover"
          />
        </div>
        <div
          v-if="!link.thumbnailurl && !link.thumbnailimage"
          class="w-full overflow-hidden rounded-[0.5rem]"
        ></div>

        <p
          class="my-2 px-1 md:px-4 mb-2 w-full text-sm md:text-base font-medium pr-1 overflow-hidden line-clamp-3"
          :class="theme.cardsPtext"
        >
          {{ link.name }}
        </p>

        <!-- <button
            class="my-auto mx-0 flex h-[40px] w-[40px] items-center justify-center rounded-[4rem]"
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
                d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </button> -->
      </div>
    </a>
  </div>
  <div
    v-if="link.layout === 'Horizontalbar'"
    class="relative overflow-hidden w-full h-[168px] mb-4 rounded-[1.5rem]"
    :class="theme.cardsBg"
  >
    <a @click="visitLink" class="h-auto w-full appearance-none cursor-pointer">
      <div
        class="flex flex-row flex-nowrap h-auto w-full justify-between items-center appearance-none m-0 cursor-pointer break-words bg-transparent whitespace-normal"
      >
        <div class="flex flex-1 items-start flex-col py-3 pl-3">
          <div
            class="p-1 w-[40px] h-[40px] shadow-md rounded-[0.5rem]"
            :class="link.faviconurl ? 'bg-gray-50' : ''"
          >
            <img
              loading="lazy"
              :src="link.faviconurl"
              alt=""
              class="aspect-square rounded-[0.5rem] object-cover"
            />
          </div>
          <p
            class="overflow-hidden my-4 w-[125px] text-sm leading-6 font-medium line-clamp-3 pr-1"
            :class="theme.ptext"
          >
            {{ link.name }}
          </p>
        </div>

        <div
          class="ml-2 p-1 aspect-[1.3] h-full overflow-hidden rounded-[0.2rem]"
        >
          <img
            loading="lazy"
            :src="link.thumbnailurl"
            alt=""
            class="w-full h-full rounded-[1.3rem] object-cover"
          />
        </div>

        <!-- <button
            class="my-auto mx-0 flex h-[40px] w-[40px] items-center justify-center rounded-[4rem]"
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
                d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </button> -->
      </div>
    </a>
  </div>
  <div v-if="link.layout === 'Block'" class="relative w-full">
    <div
      class="relative w-full mb-4 p-4 sm:p-6 overflow-hidden rounded-[1.5rem] shadow"
      :class="theme.cardsBg"
    >
      <a
        @click="visitLink"
        class="relative w-full md:flex md:flex-row md:flex-nowrap md:justify-between"
      >
        <div class="">
          <div class="my-1">
            <div>
              <div
                class="flex items-center md:items-start md:flex-col md:gap-4 rounded-lg"
              >
                <div class="shadow-xl p-1 rounded-[0.5rem] bg-gray-50">
                  <img
                    loading="lazy"
                    :src="link.faviconurl"
                    alt=""
                    class="h-6 rounded-[0.5rem] object-cover"
                  />
                </div>

                <p
                  class="w-[16rem] overflow-hidden line-clamp-2 flex-1 ml-3 md:ml-0 text-lg md:text-xl font-bold"
                  :class="theme.cardsHtext"
                >
                  {{ link.name }}
                </p>
              </div>
            </div>
          </div>

          <div class="my-2">
            <p
              class="pt-6 inline-flex max-h-[4rem] overflow-hidden text-ellipsis items-center text-[0.9rem] font-medium md:text-lg text-gray-600"
              :class="theme.cardsPtext"
            >
              {{ link.description }}
            </p>
          </div>
        </div>
        <div class="w-[55%]">
          <div class="mt-4">
            <div class="w-full h-full">
              <img
                class="rounded-xl shadow-md w-full h-auto object-cover"
                :src="link.thumbnailurl"
                decoding="async"
                loading="lazy"
                alt=""
              />
            </div>
          </div>
        </div>
        <!-- <div class="my-1">
            <div>
              <div class="flex items-center rounded-lg">
                <div class="shadow-xl p-1 rounded-[0.5rem] bg-gray-50">
                  <img
                    loading="lazy"
                    :src="link.faviconurl"
                    alt=""
                    class="h-6 rounded-[0.5rem] object-cover"
                  />
                </div>

                <p
                  class="w-[16rem] overflow-hidden line-clamp-2 flex-1 ml-3 text-lg md:text-xl font-bold"
                  :class="theme.htext"
                >
                  {{ link.name }}
                </p>
              </div>
            </div>
          </div>

          <div class="my-2">
            <p
              class="pt-6 inline-flex max-h-[4rem] overflow-hidden text-ellipsis items-center text-[0.9rem] font-medium md:text-lg text-gray-600"
              :class="theme.ptext"
            >
              {{ link.description }}
            </p>
          </div>

          <div class="mt-4">
            <div class="w-full h-full">
              <img
                class="rounded-xl shadow-md w-full h-auto object-cover"
                :src="link.thumbnailurl"
                decoding="async"
                loading="lazy"
                alt=""
              />
            </div>
          </div> -->
      </a>
    </div>
  </div>
  <div
    v-if="link.layout === 'Verticalbar'"
    class="relative overflow-hidden mb-4 w-full h-auto rounded-[1.5rem]"
    :class="theme.cardsBg"
  >
    <a @click="visitLink" class="h-auto w-full appearance-none cursor-pointer">
      <div
        class="flex flex-row flex-nowrap h-auto w-full justify-between items-center py-2 px-2 appearance-none m-0 cursor-pointer break-words bg-transparent whitespace-normal"
      >
        <div
          class="p-1 h-6 shadow-xl rounded-[0.5rem]"
          :class="link.faviconurl ? theme.cardsBg : ''"
        >
          <img
            loading="lazy"
            :src="link.faviconurl"
            alt=""
            class="h-6 rounded-[0.5rem] object-cover"
          />
        </div>

        <p
          class="p-0 m-0 w-full text-base text-center font-medium pr-1 max-w-[220px]"
          :class="theme.cardsHtext"
        >
          {{ link.name }}
        </p>
        <button
          class="my-auto mx-0 flex h-[40px] w-[40px] items-center justify-center rounded-[4rem]"
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
              d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
        </button>
      </div>
    </a>
  </div>
  <div
    v-if="!link.layout"
    class="relative overflow-hidden mb-4 w-full min-h-[56px] h-auto rounded-[4rem] md:rounded-[4.5rem] col-span-2"
    :class="theme.cardsBg"
  >
    <a @click="visitLink" class="h-auto w-full appearance-none cursor-pointer">
      <div
        class="flex flex-row flex-nowrap h-auto w-full justify-between items-center py-2 px-2 appearance-none m-0 cursor-pointer break-words bg-transparent whitespace-normal"
      >
        <div
          class="p-1 rounded-[2.5rem]"
          :class="link.faviconurl ? theme.faviconbg : 'w-8'"
        >
          <img
            loading="lazy"
            :src="link.faviconurl"
            alt=""
            class="h-6 md:h-8 rounded-[0.5rem] object-cover"
          />
        </div>

        <p
          class="p-0 m-0 w-full text-base text-center font-medium line-clamp-2 pr-1 max-w-[220px]"
          :class="theme.cardsHtext"
        >
          {{ link.name }}
        </p>
        <button
          class="my-auto mx-0 flex h-[40px] w-[40px] items-center justify-center rounded-[4rem]"
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
              d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
        </button>
      </div>
    </a>
  </div>
</template>

<script setup>
import { watch, ref, onMounted, toRefs } from "vue";
import { useStore } from "vuex";
const store = useStore();

const props = defineProps({
  link: Object,
  theme: Object,
});
const { link, theme } = toRefs(props);
let data = ref({});

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
