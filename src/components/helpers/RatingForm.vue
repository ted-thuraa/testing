<template>
  <div
    class="min-w-[288px] w-full min-h-[236px] max-h-[520px] mb-4 rounded-[24px] shadow transition-all duration-500 ease-in"
    :class="theme.cardsBg"
  >
    <div class="flex flex-col items-center relative h-min pb-1 w-full">
      <div class="m-0 py-2 px-6">
        <div class="px-4">
          <div class="mx-auto max-w-2xl">
            <div class="flex max-w-xl flex-col items-center justify-between">
              <div class="flex items-center gap-x-4 text-xs"></div>
              <div class="group relative">
                <h3
                  class="mt-3 text-lg font-semibold leading-6"
                  :class="theme.cardsHtext"
                >
                  {{ link.data.ratingformdata.rating_question }}
                </h3>
              </div>
              <div
                class="text-black relative lg:min-w-[20rem] lg:max-w-[40rem] mt-8 flex items-center justify-between gap-x-4"
              >
                <div
                  v-for="(star, index) in link.data?.ratingformdata.labels"
                  :key="star"
                  @mouseover="highlightStars(index)"
                  @mouseleave="resetStars()"
                  @click="selectRating(index)"
                  class="star relative mb-16 text-gray-400"
                  :class="[
                    {
                      '!text-amber-400': index <= selectedRating,
                    },
                    {
                      '!text-amber-400': index <= hoveredRating,
                    },

                    '',
                  ]"
                >
                  <div class="p-2">
                    <div
                      class="w-8 h-8 lg:w-10 lg:h-10"
                      v-html="getShape(link.data.ratingformdata.shape)"
                    />

                    <p class="text-gray-800">
                      <span>{{ star.label }}</span>
                    </p>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                class="relative block w-80 rounded-md px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                :class="theme.buttonVariations.btnVar1"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
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
  theme: Object,
});
const { link } = toRefs(props);

let fullname = ref("");
let email = ref("");
let message = ref("");
let phone = ref("");
let country = ref("");
const ratingScale = ref(null);
const selectedRating = ref(-1);
const hoveredRating = ref(-1);

const selectRating = (rating) => {
  console.log(rating);
  selectedRating.value = rating;
};

const highlightStars = (index) => {
  console.log(index);
  hoveredRating.value = index;
};

const resetStars = () => {
  hoveredRating.value = -1; // Reset to default value when mouse leaves
};

function getShape(shape) {
  switch (shape) {
    case "Smiley":
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="">
  <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 00-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 01-.189-.866c0-.298.059-.605.189-.866zm2.023 6.828a.75.75 0 10-1.06-1.06 3.75 3.75 0 01-5.304 0 .75.75 0 00-1.06 1.06 5.25 5.25 0 007.424 0z" clip-rule="evenodd" />
</svg>

`;
    case "Star":
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="">
  <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
</svg>

`;
    case "Thumb":
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="">
  <path d="M7.493 18.75c-.425 0-.82-.236-.975-.632A7.48 7.48 0 016 15.375c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75 2.25 2.25 0 012.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23h-.777zM2.331 10.977a11.969 11.969 0 00-.831 4.398 12 12 0 00.52 3.507c.26.85 1.084 1.368 1.973 1.368H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 01-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227z" />
</svg>
`;
    case "Heart":
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="">
  <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
</svg>
`;
    case "Thunderbolt":
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="">
  <path fill-rule="evenodd" d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z" clip-rule="evenodd" />
</svg>
`;

    // Handle other categories here if needed
    default:
      return; // Replace 'DefaultComponent' with a fallback component name
  }
}
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
