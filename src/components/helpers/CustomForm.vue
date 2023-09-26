<template>
  <div
    class="w-full h-min max-h-[520px] mb-4 rounded-[24px] shadow transition-all duration-500 ease-in"
    :class="theme.cardsBg"
  >
    <div class="flex flex-col items-center relative h-min pb-1 w-full">
      <div class="m-0 py-2 px-6">
        <div id="appp" class="mx-auto lg:px-10">
          <div
            class="wrapper-stepper flex flex-col items-center justify-between"
          >
            <div class="stepper w-full justify-center">
              <!-- <div class="stepper-progress">
          <div
            class="stepper-progress-bar"
            :style="{ width: stepperProgress }"
          ></div>
        </div> -->

              <div
                class="stepper-item px-1"
                :class="{ current: step == item, success: step > item }"
                v-for="item in link.data.customformquestions.length"
                :key="item"
              >
                <div class="stepper-item-counter"></div>
              </div>
            </div>

            <div
              class="stepper-content w-full"
              v-for="(item, index) in link.data?.customformquestions"
              :key="index"
            >
              <div
                class="stepper-pane flex flex-col justify-center"
                v-if="step == index + 1"
              >
                <div class="relative">
                  <h3
                    class="text-lg font-semibold leading-6"
                    :class="theme.cardsHtext"
                  >
                    {{ item.question }}
                  </h3>
                </div>

                <div class="mt-3">
                  <p
                    class="line-clamp-3 text-sm leading-6"
                    :class="theme.cardsPtext"
                  >
                    {{ item.description }}
                  </p>
                </div>
                <div v-if="item.type === 'input'" class="col-span-full">
                  <div class="mt-4">
                    <input
                      :value="answers[item.id]"
                      @input="
                        updateAnswers(
                          item.id,
                          item.question,
                          $event.target.value
                        )
                      "
                      id="text"
                      name="text"
                      type="text"
                      autocomplete="text"
                      required=""
                      class="min-w-0 w-full flex-auto rounded-md border-0 px-3.5 my-4 pr-10 py-2 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                      :class="theme.inputs"
                      placeholder="type here"
                    />
                  </div>
                </div>
                <div v-if="item.type === 'email'" class="col-span-full">
                  <div class="relative mb-6">
                    <div
                      class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none"
                    >
                      <svg
                        class="w-4 h-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 16"
                      >
                        <path
                          d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"
                        />
                        <path
                          d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"
                        />
                      </svg>
                    </div>
                    <input
                      :value="answers[item.id]"
                      @input="
                        updateAnswers(
                          item.id,
                          item.question,
                          $event.target.value
                        )
                      "
                      id="input-group-1"
                      name="text"
                      type="text"
                      autocomplete="text"
                      required=""
                      class="min-w-0 w-full flex-auto rounded-md border-0 px-3.5 my-4 pl-10 py-2 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                      :class="theme.inputs"
                      placeholder="youremail@gmail.com"
                    />
                  </div>
                </div>
                <div
                  v-if="item.type === 'text' || item.type === 'textarea'"
                  class="col-span-full"
                >
                  <div class="mt-4">
                    <textarea
                      id="about"
                      name="about"
                      :value="answers[item.id]"
                      @input="
                        updateAnswers(
                          item.id,
                          item.question,
                          $event.target.value
                        )
                      "
                      placeholder="type your answer here"
                      rows="3"
                      class="block w-full font-medium !text-[0.98rem] focus:border-opacity-0 text-sm rounded-lg"
                      :class="theme.inputs"
                    />
                  </div>
                </div>
                <div v-if="item.type === 'date'" class="col-span-full">
                  <div class="relative mt-4 max-w-lg mx-16">
                    <div
                      class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
                    >
                      <svg
                        class="w-4 h-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"
                        />
                      </svg>
                    </div>

                    <input
                      ref="datepickerRef"
                      type="date"
                      name="date"
                      autocomplete=""
                      :value="answers[item.id]"
                      @input="
                        updateAnswers(
                          item.id,
                          item.question,
                          $event.target.value
                        )
                      "
                      class="block font-medium !text-[0.98rem] focus:border-opacity-0 text-sm rounded-lg w-full pl-10"
                      :class="theme.inputs"
                    />
                  </div>
                </div>
                <div v-if="item.type === 'radio'">
                  <div class="mx-auto mt-4 w-full max-w-md">
                    <RadioGroup
                      v-model="selected"
                      @update:modelValue="
                        (value) => updateAnswers(item.id, item.question, value)
                      "
                    >
                      <RadioGroupLabel class="sr-only">choose</RadioGroupLabel>
                      <div class="space-y-2">
                        <RadioGroupOption
                          as="template"
                          v-for="plan in item.data.options"
                          :key="plan.text"
                          :value="plan.text"
                          v-slot="{ active, checked }"
                        >
                          <div
                            :class="[
                              active
                                ? 'ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-purple-300'
                                : '',
                              checked
                                ? theme.radioBtns.checked
                                : theme.radioBtns.notChecked,
                            ]"
                            class="relative flex cursor-pointer rounded-lg px-4 py-3 focus:outline-none"
                          >
                            <div
                              class="flex w-full items-center justify-between"
                            >
                              <div class="flex items-center">
                                <div class="text-sm">
                                  <RadioGroupLabel
                                    as="p"
                                    :class="
                                      checked
                                        ? theme.radioBtns.checked_label
                                        : theme.radioBtns.notchecked_label
                                    "
                                    class="font-medium"
                                  >
                                    {{ plan.text }}
                                  </RadioGroupLabel>
                                </div>
                              </div>
                              <div
                                v-show="checked"
                                class="shrink-0"
                                :class="theme.radioBtns.checked_label"
                              >
                                <svg
                                  class="h-6 w-6"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <circle
                                    cx="12"
                                    cy="12"
                                    r="12"
                                    fill="#fff"
                                    fill-opacity="0.2"
                                  />
                                  <path
                                    d="M7 13l3 3 7-7"
                                    stroke="#fff"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </RadioGroupOption>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
                <div v-if="item.type === 'checkbox'">
                  <div
                    v-for="(option, ind) in item.data.options"
                    :key="option.id"
                    class="relative flex gap-x-3 mt-4"
                  >
                    <div class="flex h-6 items-center">
                      <input
                        :id="option.id"
                        v-model="checkboxmodel[option.text]"
                        @change="onCheckboxChange(item.id, item.question)"
                        name="candidates"
                        type="checkbox"
                        class="h-4 w-4 rounded border-gray-300"
                        :class="theme.checkboxBtns.checked"
                      />
                    </div>
                    <div class="text-sm leading-6">
                      <label
                        for="candidates"
                        class="font-medium text-gray-900"
                        :class="theme.ptext"
                        >{{ option.text }}</label
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="controls w-full mt-4 items-center justify-end">
              <button
                class="px-4 py-1 rounded-3xl"
                :class="theme.buttonVariations.btnVar2"
                @click="decrementStep"
                :disabled="step == 1"
              >
                Previous
              </button>
              <button
                v-if="step != link.data.customformquestions.length"
                class="px-4 py-1 ml-2 rounded-3xl"
                :class="theme.buttonVariations.btnVar1"
                @click="incrementStep"
                :disabled="step == link.data.customformquestions.length"
              >
                Next
              </button>
              <button
                v-else-if="step == link.data.customformquestions.length"
                class="px-4 py-1 ml-2 rounded-3xl"
                :class="theme.buttonVariations.btnVar1"
                @click="submitSurvey"
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
import {
  RadioGroup,
  RadioGroupLabel,
  RadioGroupDescription,
  RadioGroupOption,
} from "@headlessui/vue";
import Datepicker from "flowbite-datepicker/Datepicker";
import { watch, ref, onMounted, onBeforeUnmount, toRefs, computed } from "vue";
import { useStore } from "vuex";
const store = useStore();
let plans = ref([]);
const answersModel = ref({});
const answers = ref([]);
let answers_data = ref({});
let formStarted = ref(false);

const selected = ref(plans[0]);

const props = defineProps({
  link: Object,
  theme: Object,
});
const { link, theme } = toRefs(props);
const datepicker = ref(null);
const datepickerRef = ref(null);
let datepickerroot = null;

const step = ref(1);
let data = ref({});
const responses = ref({});

async function setResponceobj() {
  responses.value = getResponseObj();
}

function getResponseObj() {
  const question = {};
  console.log(link.value.data?.customformquestions);

  // Assuming you have a 'link' object available
  for (let i = 0; i < link.value.data?.customformquestions.length; i++) {
    const q = link.value.data.customformquestions[i];
    console.log(q);
    let qa = {
      question: q.question,
      question_answers: "",
    };
    question[q.id] = qa;
  }
  return question;
}

console.log(responses.value);

const stepperProgress = computed(() => `${(100 / 3) * (step.value - 1)}%`);

const incrementStep = () => {
  //formStarted.value = true;
  console.log(link.value.data?.customformquestions.length);
  if (step.value < link.value.data?.customformquestions.length) {
    step.value++;
    //answers.value.push(answers_data.value);
  }
  console.log(responses.value);
};

const decrementStep = () => {
  if (step.value > 1) {
    step.value--;
  }
};

// console.log(datepicker.value);
// if (datepickerRef.value) {
//   console.log(datepickerRef.value);
//   new Datepicker(datepickerRef.value);
// }
onMounted(async () => {
  await setResponceobj();
  console.log(datepickerRef.value);
  if (datepickerRef.value) {
    console.log(datepickerRef.value);
    new Datepicker(datepickerRef.value);
  }
});

const updateAnswers = (itemId, question, value) => {
  responses.value[itemId].question_answers = value;
  //answers_data.value = {
  //  question: question,
  //  question_answers: value,
  //};

  //answers.value[itemId] = value;
};

//will be used for checkbox types
let checkboxmodel = ref({});

function onCheckboxChange(id, question) {
  const selectedOptions = [];
  for (let text in checkboxmodel.value) {
    if (checkboxmodel.value[text]) {
      selectedOptions.push(text);
    }
  }

  updateAnswers(id, question, selectedOptions);
}

function submitSurvey() {
  //   for (let i = 0; i < responses.value.length; i++) {
  //     const qa = responses.value[i];
  //     answers.value.push(qa);
  //   }

  for (const key in responses.value) {
    if (responses.value.hasOwnProperty(key)) {
      const qa = responses.value[key];
      answers.value.push(qa);
    }
  }

  //answers.value.push(responses.value);

  //console.log(store.state.guestpagedata.data.page.id);
  //console.log(JSON.stringify(answers.value, undefined, 2));
  answersModel.value = {
    uid: store.state.guestpagedata.data.page.id,
    form_id: link.value.id,
    type: "Custom",
    data: answers.value,
  };

  store.dispatch("saveSurveyAnswer", answersModel.value).then((response) => {
    if (response.status === 201) {
      surveyFinished.value = true;
    }
  });
  checkboxmodel = ref({});
  selected = [];
  answersModel.value = {};
  answers.value = [];
  answers_data.value = {};
}

async function updateFormStarted() {
  data.value = {
    page_id: store.state.guestpagedata.data.page.id,
    link_id: link.value.id,
  };
  try {
    const res = await store.dispatch("gotchYaClicks", data.value);
  } catch (error) {}
}

watch(
  () => formStarted.value,
  async () => {
    if (formStarted.value == true) {
      updateFormStarted();
    }
  }
);
</script>

<style lang="scss">
$default: #c5c5c5;
$green-1: #535353;
$transiton: all 500ms ease;

.tx-green-1 {
  color: $green-1;
  font-weight: 600;
}

.wrapper-stepper {
  //background-color: #fff;
  border-radius: 32px;
  box-shadow: rgba($color: #000000, $alpha: 0.09);
}

.stepper {
  display: flex;
  // align-items: center;

  // width: 300px;
  position: relative;
  z-index: 0;
  margin-bottom: 24px;
}

.stepper-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: $default;
  transition: $transiton;

  &-counter {
    height: 2px;
    width: 24px;
    display: grid;
    place-items: center;
    background-color: #fff;
    border-radius: 0.1rem;
    border: 1px solid $default;
    position: relative;

    .icon-success {
      position: absolute;
      opacity: 0;
      transform: scale(0);
      width: 24px;
      transition: $transiton;
    }

    .number {
      font-size: 22px;
      transition: $transiton;
    }
  }

  &-title {
    position: absolute;
    font-size: 14px;
    bottom: -24px;
  }
}

.stepper-item.success {
  .stepper-item-counter {
    border-color: $green-1;
    background-color: #464646;
    color: #fff;
    font-weight: 600;

    .icon-success {
      opacity: 1;
      transform: scale(1);
    }

    .number {
      opacity: 0;
      transform: scale(0);
    }
  }

  .stepper-item-title {
    color: $green-1;
  }
}

.stepper-item.current {
  .stepper-item-counter {
    border-color: $green-1;
    background-color: $green-1;
    color: #fff;
    font-weight: 600;
  }

  .stepper-item-title {
    color: #818181;
  }
}

.stepper-pane {
  color: #333;
}

.controls {
  display: flex;
}

.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px 16px;
  border: 1px solid;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  line-height: 1.5;
  transition: all 150ms;
  border-radius: 4px;
  width: fit-content;
  font-size: 0.75rem;
  color: #333;
  background-color: #f0f0f0;
  border-color: #f0f0f0;

  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }

  &--green-1 {
    background-color: $green-1;
    border-color: $green-1;
    color: #fff;
  }
}
</style>
