<template>
  <div class="col-span-full">
    <h2 class="text-base font-semibold leading-7 text-gray-900">Question</h2>
    <div class="mt-2">
      <textarea
        v-model="rating_question"
        @change="dataChange"
        id="about"
        name="about"
        rows="3"
        placeholder="Your question here"
        class="block w-full rounded-md bg-gray-50 border border-gray-100 focus:border-purple-500 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
      ></textarea>
    </div>
    <p class="mt-3 text-sm leading-6 text-gray-600">Choose a scale.</p>
    <div class="flex w-full">
      <div class="ml-4">
        <Listbox v-model="scale">
          <div class="relative mt-1">
            <ListboxButton
              class="relative w-full min-h-[40px] cursor-default rounded-lg bg-gray-50 py-2 pl-3 pr-10 text-left border-2 border-gray-100 focus:border-purple-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"
            >
              <span class="min-w-[60px] pl-6 block truncate"> {{ scale }}</span>
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
                class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
              >
                <ListboxOption
                  v-slot="{ active, selected }"
                  v-for="scale in ratescale"
                  :key="scale"
                  :value="scale.weight"
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
                      {{ scale.weight }}</span
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
      <div class="ml-4">
        <Listbox v-model="shape" @change="dataChange">
          <div class="relative mt-1">
            <ListboxButton
              class="relative w-full min-h-[40px] cursor-default rounded-lg bg-gray-50 py-2 pl-3 pr-10 text-left border-2 border-gray-100 focus:border-purple-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"
            >
              <span
                class="pointer-events-none absolute inset-y-0 left-0 flex items-center px-2"
              >
                <div class="w-5 h-5 text-gray-400" v-html="shape.shape_icon" />
              </span>
              <span class="min-w-[60px] pl-6 block truncate">{{
                shape.shape
              }}</span>
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
                class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
              >
                <ListboxOption
                  v-slot="{ active, selected }"
                  v-for="shape in shapes"
                  :key="shape.shape"
                  :value="shape"
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
                      >{{ shape.shape }}</span
                    >
                    <span
                      class="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600"
                    >
                      <div class="w-6 h-6" v-html="shape.shape_icon" />
                    </span>
                  </li>
                </ListboxOption>
              </ListboxOptions>
            </transition>
          </div>
        </Listbox>
      </div>
    </div>
    <!-- <p class="mt-3 text-sm leading-6 text-gray-600">Add rating label.</p>
    <div class="">
      
      <div>
        <div class="mb-8">
          <h4
            class="text-sm font-semibold mb-1 flex justify-between items-center"
          >
            Options

           
            <button
              type="button"
              @click="addLabel()"
              class="flex items-center text-xs py-1 px-2 rounded-sm text-white bg-gray-600 hover:bg-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                  clip-rule="evenodd"
                />
              </svg>
              Add Option
            </button>
           
          </h4>

          <div
            v-if="!labels.length"
            class="text-xs text-gray-600 text-center py-3"
          >
            You don't have any labels defined
          </div>
         
          <div
            v-for="(label, index) in labels"
            :key="label.uuid"
            class="flex items-center mb-1"
          >
            <span class="w-6 text-sm"> {{ index + 1 }}.</span>
            <input
              v-model="label.label"
              @change="dataChange"
              type="text"
              tabindex="1"
              class="w-full rounded-sm py-1 px-2 text-xs border border-gray-300 focus:border-indigo-500"
            />
           
            <button
              type="button"
              @click="removeLabel(label)"
              class="h-6 w-6 rounded-full flex items-center justify-center border border-transparent transition-colors hover:border-red-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-3 w-3 text-red-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
           
          </div>
          
        </div>
      </div>
     
    </div> -->
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
  //selectedId: { type: Number, default: 0 },
  //selectedStr: { type: String, default: "" },
});
const emit = defineEmits(["change"]);

const { link } = toRefs(props);
const model = ref(JSON.parse(JSON.stringify(props.link)));

let rating_question = ref("");
let scale = ref(0);
let shape = ref("");
let currentshape = ref("");
let labels = ref([]);

onMounted(async () => {
  console.log(link.value);
  rating_question.value = props.link.data?.ratingformdata.rating_question || "";
  scale.value = props.link.data?.ratingformdata.scale || 0;
  currentshape.value = props.link.data?.ratingformdata.shape || "";
  if (currentshape) {
    shape.value = getShape(currentshape.value);
  }
});

//options getter
function getLabel() {
  return labels.value;
}

//options setter
function setLabel(Labels) {
  labels.value = Labels;
}

//add option
function addLabel() {
  setLabel([...getLabel(), { uuid: uuidv4(), label: "" }]);
  console.log(labels.value);
  dataChange();
}

//remove option
function removeLabel(op) {
  setLabel(getLabel().filter((opt) => opt !== op));
  dataChange();
}

//Emit the data change
function ratingquestionChange() {
  //const data = JSON.parse(JSON.stringify(model.value));
  console.log(scale.value);
  console.log(shape.value);
  console.log(labels.value);
  console.log(rating_question.value);

  //emit("change", data);
}
//Emit the data change
function dataChange() {
  const data = {
    rating_question: rating_question.value,
    scale: scale.value,
    shape: shape.value.shape,
    labels: labels.value,
  };
  console.log(data);

  emit("change", data);
}

watch(
  () => shape.value,
  () => {
    dataChange();
  }
);
watch(
  () => scale.value,
  () => {
    dataChange();
  }
);

watch(
  () => scale.value,
  (newVal, oldVal) => {
    const currentLabels = getLabel();
    const numLabels = currentLabels.length;

    if (numLabels === 0) {
      // If labels array is empty, add items equal to the new value of scale
      for (let i = 0; i < newVal; i++) {
        addLabel();
      }
    } else if (newVal < numLabels) {
      // If the new value of scale is less than the number of items in the labels array,
      // delete the extra number of items.
      for (let i = numLabels - 1; i >= newVal; i--) {
        removeLabel(currentLabels[i]);
      }
    } else if (newVal > numLabels) {
      // If the new value of scale is more than the number of items in the labels array,
      // add the extra items required to equate the number of labels array items to the value of scale.
      for (let i = numLabels; i < newVal; i++) {
        addLabel();
      }
    }
  }
);

const ratescale = [
  { weight: 1 },
  { weight: 2 },
  { weight: 3 },
  { weight: 4 },
  { weight: 5 },
  { weight: 6 },
  { weight: 7 },
  { weight: 8 },
  { weight: 9 },
  { weight: 10 },
];
const shapes = [
  {
    shape: "Smiley",
    shape_icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="">
  <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 00-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 01-.189-.866c0-.298.059-.605.189-.866zm2.023 6.828a.75.75 0 10-1.06-1.06 3.75 3.75 0 01-5.304 0 .75.75 0 00-1.06 1.06 5.25 5.25 0 007.424 0z" clip-rule="evenodd" />
</svg>

`,
  },
  {
    shape: "Star",
    shape_icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="">
  <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
</svg>

`,
  },
  {
    shape: "Thumb",
    shape_icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="">
  <path d="M7.493 18.75c-.425 0-.82-.236-.975-.632A7.48 7.48 0 016 15.375c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75 2.25 2.25 0 012.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23h-.777zM2.331 10.977a11.969 11.969 0 00-.831 4.398 12 12 0 00.52 3.507c.26.85 1.084 1.368 1.973 1.368H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 01-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227z" />
</svg>
`,
  },
  {
    shape: "Heart",
    shape_icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="">
  <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
</svg>
`,
  },
  {
    shape: "Thunderbolt",
    shape_icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="">
  <path fill-rule="evenodd" d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z" clip-rule="evenodd" />
</svg>
`,
  },
];

function getShape(shape) {
  switch (shape) {
    case "Smiley":
      return {
        shape: "Smiley",
        shape_icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="">
  <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 00-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 01-.189-.866c0-.298.059-.605.189-.866zm2.023 6.828a.75.75 0 10-1.06-1.06 3.75 3.75 0 01-5.304 0 .75.75 0 00-1.06 1.06 5.25 5.25 0 007.424 0z" clip-rule="evenodd" />
</svg>

`,
      };
    case "Star":
      return {
        shape: "Star",
        shape_icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="">
  <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
</svg>

`,
      };
    case "Thumb":
      return {
        shape: "Thumb",
        shape_icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="">
  <path d="M7.493 18.75c-.425 0-.82-.236-.975-.632A7.48 7.48 0 016 15.375c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75 2.25 2.25 0 012.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23h-.777zM2.331 10.977a11.969 11.969 0 00-.831 4.398 12 12 0 00.52 3.507c.26.85 1.084 1.368 1.973 1.368H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 01-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227z" />
</svg>
`,
      };
    case "Heart":
      return {
        shape: "Heart",
        shape_icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="">
  <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
</svg>
`,
      };
    case "Thunderbolt":
      return {
        shape: "Thunderbolt",
        shape_icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="">
  <path fill-rule="evenodd" d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z" clip-rule="evenodd" />
</svg>
`,
      };

    // Handle other categories here if needed
    default:
      return; // Replace 'DefaultComponent' with a fallback component name
  }
}
</script>

<style></style>
