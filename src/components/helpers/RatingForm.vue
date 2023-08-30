<template>
  <div class="px-4">
    <div
      class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3"
    >
      <div class="flex max-w-xl flex-col items-center justify-between">
        <div class="flex items-center gap-x-4 text-xs"></div>
        <div class="group relative">
          <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900">
            {{ link.data.ratingformdata.rating_question }}
          </h3>
        </div>
        <div
          class="relative w-full mt-8 flex items-center justify-between gap-x-4"
        >
          <div
            v-for="(star, index) in link.data?.ratingformdata.labels"
            :key="star"
            @click="selectRating(index)"
            class="star relative mb-16"
            :class="index <= selectedRating ? 'filled' : 'text-gray-300'"
          >
            <div class="p-2">
              <svg
                class="w-8 h-8"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path
                  d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                />
              </svg>
              <p class="text-gray-800">
                <span>{{ star.label }}</span>
              </p>
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
import { watch, ref, onMounted, toRefs } from "vue";
import { useStore } from "vuex";
const store = useStore();

const props = defineProps({
  link: Object,
});
const { link } = toRefs(props);

let fullname = ref("");
let email = ref("");
let message = ref("");
let phone = ref("");
let country = ref("");
const ratingScale = ref(null);
const selectedRating = ref(0);

const selectRating = (rating) => {
  console.log(rating);
  selectedRating.value = rating;
};
</script>

<style lang="scss">
.star {
  display: inline-block;
  width: 24px;
  height: 24px;
  cursor: pointer;
  transition: color 0.3s;
}

.filled {
  color: yellow;
}
</style>
