<template>
  <div id="appp" class="mx-auto">
    <div class="wrapper-stepper flex flex-col items-center justify-between">
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
        <div class="stepper-pane" v-if="step == index + 1">
          <div>
            <p>
              <span class="text-black text-[0.9rem] font-medium md:text-lg">{{
                item.question
              }}</span>
            </p>
          </div>
          <div v-if="item.type === 'text'" class="col-span-full">
            <div class="mt-4">
              <textarea
                id="about"
                name="about"
                :value="answers[item.id]"
                @input="
                  updateAnswers(item.id, item.question, $event.target.value)
                "
                placeholder="type your answer here"
                rows="3"
                class="block w-full border-white bg-gray-50 font-medium !text-[0.98rem] focus:bg-gray-100 focus:border-opacity-0 focus:border-gray-100 text-gray-900 text-sm rounded-lg focus:ring-blue-50"
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
                          ? 'bg-purple-600  text-white '
                          : 'bg-gray-200/50 ',
                      ]"
                      class="relative flex cursor-pointer rounded-lg px-4 py-3 focus:outline-none"
                    >
                      <div class="flex w-full items-center justify-between">
                        <div class="flex items-center">
                          <div class="text-sm">
                            <RadioGroupLabel
                              as="p"
                              :class="checked ? 'text-white' : 'text-gray-900'"
                              class="font-medium"
                            >
                              {{ plan.text }}
                            </RadioGroupLabel>
                          </div>
                        </div>
                        <div v-show="checked" class="shrink-0 text-white">
                          <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none">
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
                  class="h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-600"
                />
              </div>
              <div class="text-sm leading-6">
                <label for="candidates" class="font-medium text-gray-900">{{
                  option.text
                }}</label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="controls w-full mt-4 items-center justify-end">
        <button
          class="btn rounded-2xl"
          @click="decrementStep"
          :disabled="step == 1"
        >
          Previous
        </button>
        <button
          v-if="step != link.data.customformquestions.length"
          class="btn bg-black text-white ml-1 rounded-2xl"
          @click="incrementStep"
          :disabled="step == link.data.customformquestions.length"
        >
          Next
        </button>
        <button
          v-else-if="step == link.data.customformquestions.length"
          class="btn btn--green-1"
          @click="submitSurvey"
        >
          Submit
        </button>
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
import { watch, ref, onMounted, toRefs, computed } from "vue";
import { useStore } from "vuex";
const store = useStore();
let plans = ref([]);
const answersModel = ref({});
const answers = ref([]);
let answers_data = ref({});

const selected = ref(plans[0]);

const props = defineProps({
  link: Object,
});
const { link } = toRefs(props);

const step = ref(1);

const stepperProgress = computed(() => `${(100 / 3) * (step.value - 1)}%`);

const incrementStep = () => {
  if (step.value < 4) {
    step.value++;
    answers.value.push(answers_data.value);
  }
};

const decrementStep = () => {
  if (step.value > 1) {
    step.value--;
  }
};

onMounted(async () => {
  console.log(link);
  //step.value = props.link.data?.customformquestions?.length - 1 || 0;
  console.log(step.value);
});

const updateAnswers = (itemId, question, value) => {
  answers_data.value = {
    question: question,
    question_answers: value,
  };

  //answers.value[itemId] = value;
  console.log(answers_data.value);

  console.log(answers);
};

//will be used for checkbox types
let checkboxmodel = ref({});

function onCheckboxChange(id, question) {
  console.log(id);
  const selectedOptions = [];
  for (let text in checkboxmodel.value) {
    if (checkboxmodel.value[text]) {
      selectedOptions.push(text);
    }
  }
  console.log(selectedOptions);
  updateAnswers(id, question, selectedOptions);
}

function submitSurvey() {
  answers.value.push(answers_data.value);
  //console.log(store.state.guestpagedata.data.page.id);
  //console.log(JSON.stringify(answers.value, undefined, 2));
  answersModel.value = {
    page_id: store.state.guestpagedata.data.page.id,
    form_id: link.value.id,
    type: "Custom",
    data: answers.value,
  };
  console.log(answersModel.value.data);
  store.dispatch("saveSurveyAnswer", answersModel.value).then((response) => {
    console.log(response);
    if (response.status === 201) {
      surveyFinished.value = true;
    }
  });
}
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
  background-color: #fff;
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
