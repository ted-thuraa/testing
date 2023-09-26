<template>
  <div>
    <div class="col-span-full">
      <h2 class="text-base font-semibold leading-7 text-gray-900">Question</h2>
      <div class="mt-2">
        <textarea
          v-model="model.poll_question"
          @change="pollDataChange"
          id="about"
          name="about"
          rows="3"
          placeholder="Type in your question"
          class="block w-full bg-gray-50 rounded-md border border-gray-100 focus:border-purple-500 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
        ></textarea>
      </div>
      <p class="mt-3 text-sm leading-6 text-gray-600">
        Write a few sentences about yourself.
      </p>
    </div>
    <!--options Data -->
    <div>
      <div class="mb-8">
        <h4
          class="text-sm font-semibold mb-1 flex justify-between items-center"
        >
          Options

          <!-- Add new option -->
          <button
            type="button"
            @click="addOption()"
            class="flex items-center text-xs py-1 px-2 rounded-sm text-purple-700 bg-transparent"
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
          <!--/ Add new option -->
        </h4>

        <div
          v-if="!model.poll_options.length"
          class="text-xs text-gray-600 text-center py-3"
        >
          You don't have any options defined
        </div>
        <!-- Option list -->
        <div
          v-for="(option, index) in model.poll_options"
          :key="option.uuid"
          class="flex items-center mb-1"
        >
          <span class="w-6 text-sm"> {{ index + 1 }}.</span>
          <input
            v-model="option.text"
            @change="pollDataChange"
            type="text"
            tabindex="1"
            class="w-full rounded-sm py-1 px-2 text-xs border border-gray-300 focus:border-indigo-500"
          />
          <!-- Delete Option -->
          <button
            type="button"
            @click="removeOption(option)"
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
          <!--/ Delete Option -->
        </div>
        <!--/ Option list -->
      </div>
    </div>
    <!--/options Data -->
  </div>
</template>

<script setup>
import { v4 as uuidv4 } from "uuid";
import { watch, ref, onMounted, toRefs } from "vue";
import { useStore } from "vuex";
const store = useStore();

const props = defineProps({
  poll_data: Object,
});

// tells the parent component that this component emits the following
const emit = defineEmits(["pollDataChange"]);

//re-create the whole question data to avoid unintentional reference change
const model = ref(JSON.parse(JSON.stringify(props.poll_data)));
console.log(model.value.poll_question);

let poll_question = ref("");
let poll_options = ref([]);

//options getter
function getOptions() {
  return model.value.poll_options;
}

//options setter
function setOptions(options) {
  model.value.poll_options = options;
}

//add option
function addOption() {
  setOptions([...getOptions(), { uuid: uuidv4(), text: "" }]);
  console.log(model.value.poll_options);
}

//remove option
function removeOption(op) {
  setOptions(getOptions().filter((opt) => opt !== op));
  pollDataChange();
}

//Emit the data change
function pollDataChange() {
  const data = JSON.parse(JSON.stringify(model.value));

  console.log(data);
  emit("pollDataChange", data);
}
</script>

<style lang="scss" scoped></style>
