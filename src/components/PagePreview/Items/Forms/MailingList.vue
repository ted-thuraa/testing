<template>
  <div
    class="w-full min-h-[236px] max-h-[520px] mb-4 rounded-[24px] shadow transition-all duration-500 ease-in"
    :class="theme.cardsBg"
  >
    <div class="flex flex-col items-center relative h-min pb-1 w-full">
      <div class="m-0 py-2 px-6">
        <div class="max-w-xl lg:max-w-lg py-2">
          <h2
            class="text-center text-2xl font-bold tracking-tight"
            :class="theme.cardsHtext"
          >
            {{ link.name }}
          </h2>
          <p
            class="text-center mt-4 text-base leading-7"
            :class="theme.cardsPtext"
          >
            {{ link.data.additionaldescription }}
          </p>
          <div
            class="mt-4 flex flex-col items-center justify-center md:flex-row gap-x-4"
          >
            <label for="email-address" class="sr-only">Email address</label>
            <div class="relative mb- w-60">
              <div class="">
                <input
                  v-model="email"
                  id="email-address"
                  name="email"
                  type="email"
                  autocomplete="email"
                  required=""
                  class="min-w-0 flex-auto rounded-xl border-0 px-3.5 my-4 pr-14 py-3 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                  :class="theme.inputs"
                  placeholder="Enter your email"
                />
              </div>
              <div
                class="absolute z-50 inset-y-0 right-0 flex items-center pl-3.5 cursor-pointer"
              >
                <button
                  type="submit"
                  class="flex-none cursor-pointer rounded-lg mr-2 px-3.5 py-2.5 text-sm font-semibold shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                  :class="theme.buttonVariations.btnVar1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="none"
                    class="w-3 h-3"
                  >
                    <path
                      d="M.5 1.163A1 1 0 0 1 1.97.28l12.868 6.837a1 1 0 0 1 0 1.766L1.969 15.72A1 1 0 0 1 .5 14.836V10.33a1 1 0 0 1 .816-.983L8.5 8 1.316 6.653A1 1 0 0 1 .5 5.67V1.163Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </button>
              </div>
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
const { link, theme } = toRefs(props);
console.log(link);

let fullname = ref("");
let email = ref("");
let answersModel = ref({});
let message = ref("");
let phone = ref("");
let country = ref("");
let answers = ref([]);

function submitSurvey() {
  //console.log(store.state.guestpagedata.data.page.id);
  //console.log(JSON.stringify(answers.value, undefined, 2));
  answers.value = [
    {
      question: "name",
      question_answers: fullname.value,
    },
    {
      question: "email",
      question_answers: email.value,
    },
  ];

  answersModel.value = {
    uid: store.state.guestpagedata.data.page.id,
    form_id: link.value.id,
    type: "Mailing List",
    data: answers.value,
  };
  console.log(answersModel.value);
  store.dispatch("saveSurveyAnswer", answersModel.value).then((response) => {
    console.log(response);
    if (response.status === 201) {
      surveyFinished.value = true;
    }
  });
}
</script>

<style lang="scss"></style>
