<template>
  <div class="relative">
    <div v-if="loading" class="w-full h-screen">
      <div class="relative w-full h-full rounded-lg">
        <div class="w-full h-full bg-transparent p-0.5 px-2 absolute z-50">
          <div class="flex items-center justify-center rounded-lg h-full">
            <div class="" role="status">
              <svg
                aria-hidden="true"
                class="w-16 h-16 mr-2 text-gray-200 animate-spin fill-gray-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span class="sr-only">Loading...</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="mx-8 pt-6 flex flex-row text-black">
        <router-link
          :to="{
            path: `/app/analytics/${route.params.formid}/results`,
            hash: '#summary',
            //params: { formid: Form.id },
          }"
          class="font-semibold"
        >
          <div
            class="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-gray-900 after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-bottom-left hover:after:scale-x-100"
            :class="
              currentFragment === 'summary'
                ? 'relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full  after:bg-gray-900 after:transition-transform after:duration-300 after:ease-in-out after:origin-bottom-left after:scale-x-100'
                : ''
            "
          >
            Summary
          </div>
        </router-link>
        <router-link
          :to="{
            path: `/app/analytics/${route.params.formid}/results`,
            hash: '#responce',
            //params: { formid: Form.id },
          }"
          class="ml-4 font-semibold"
        >
          <div
            class="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-gray-900 after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-bottom-left hover:after:scale-x-100"
            :class="
              currentFragment === 'responce'
                ? 'relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full  after:bg-gray-900 after:transition-transform after:duration-300 after:ease-in-out after:origin-bottom-left after:scale-x-100'
                : ''
            "
          >
            Responce
          </div>
        </router-link>
      </div>
      <div
        v-if="currentFragment === 'summary'"
        id="summary"
        class="mt-8 flex min-w-[375px] h-[100vh] overflow-y-scroll"
      >
        <div class="w-full md:pt-2 pt-6">
          <div class="mx-2 md:mx-8 mt-6 pb-24">
            <div
              v-for="(form, index) in formssummarydata?.form_summary"
              :key="index"
              class="p-5 md:p-8 mb-8 flex justify-center w-full h-auto overflow-x-hidden shadow-sm rounded-[1.5rem] card-light-shadow"
            >
              <div
                className="block w-full h-full overflow-x-auto   sm:rounded-lg"
              >
                <div className="h-auto w-full inline-block text-black">
                  <h3 class="text-base font-semibold leading-7 text-gray-900">
                    <span class="">{{ index + 1 }}</span>
                    {{ form.question_text }}
                  </h3>

                  <p
                    class="ml-3 mt-2 mb-8 max-w-2xl text-sm leading-6 text-gray-500"
                  >
                    {{ form.total_questionRespondents }} out of
                    {{ form.total_responses }} anwered this question.
                  </p>
                  <div
                    v-if="
                      form.question_type == 'radio' ||
                      form.question_type == 'checkbox' ||
                      form.question_type == 'select'
                    "
                    class="w-[20rem] md:w-[40rem] flex flex-col flex-nowrap items-center mb-2"
                  >
                    <div
                      v-for="(key, index) in Object.keys(
                        form.option_percentages
                      )"
                      :key="index"
                      class="relative w-full mb-4 bg-gray-100 rounded-[5rem] dark:bg-gray-700"
                    >
                      <div
                        class="bg-[#BDD4FD] h-6 text-xs font-medium text-black text-center leading-none rounded-[5rem]"
                        :style="{ width: form.option_percentages[key] + '%' }"
                      ></div>
                      <p class="absolute top-0 left-4">
                        {{ key }}
                      </p>
                      <p class="absolute top-0 right-0">
                        ({{ Math.round(form.option_percentages[key]) }}%)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        v-if="currentFragment === 'responce'"
        id="responces"
        class="md:pt-2 p-6 min-w-[375px] h-[100vh] overflow-scroll"
      >
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table
            class="w-[390px] overflow-x-auto md:w-full text-sm text-left text-gray-500 dark:text-gray-400"
          >
            <thead
              class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
            >
              <tr>
                <th scope="col" class="px-6 py-3">ip</th>
                <th scope="col" class="px-6 py-3">Date</th>
                <th
                  v-for="question in questions"
                  :key="question"
                  scope="col"
                  class="px-6 py-3"
                >
                  {{ question }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="answer in answers"
                :key="answer"
                class="bg-white border-b"
              >
                <td class="px-2 py-2 h-10 overflow-x-auto border-r">
                  {{ answer.ip }}
                </td>
                <td class="px-2 py-2 h-10 overflow-x-auto border-r">
                  {{ answer.date }}
                </td>
                <td
                  v-for="ans in answer.ans"
                  :key="ans"
                  class="px-2 py-2 h-10 overflow-x-auto border-r"
                >
                  {{ ans.question_answers }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, computed, onMounted, isProxy, toRaw } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useStore } from "vuex";

const store = useStore();
const router = useRouter();
const route = useRoute();
let form_id = ref(null);
let formssummarydata = ref([]);
let responces = ref([]);
let loading = ref(false);
let currentFragment = ref("");
let errors = ref(null);
let questions = ref([]);
let answers = ref([]);
const getFormSummary = async () => {
  try {
    const res = await store.dispatch("fetchFormSummary", form_id.value);
    console.log(res.data);
    formssummarydata.value = res.data.summaryData;
    responces.value = res.data.responces;
    questions.value = res.data.questions;
    answers.value = res.data.responcesanswers;
    //formdata.value = res.data;
    console.log(formssummarydata.value);
  } catch (error) {
    console.log(error);
    errors.value = error.response.data.errors;
  }
};
onMounted(async () => {
  form_id.value = route.params.formid;
  currentFragment.value = window.location.hash.slice(1);
  console.log(currentFragment.value);
  await getFormSummary();
});

console.log(route.hash);
watch(
  () => route.hash,
  () => {
    console.log("changed");
    currentFragment.value = window.location.hash.slice(1);
  }
);

const links = ref([
  { name: "Links", url: "/app/dashboard" },
  {
    name: "Apperance",
    url: "/app/appearance",
  },
  {
    name: "Analytics",
    url: "/app/analytics",
  },
  {
    name: "Settings",
    url: "/app/settings",
  },
]);
</script>

<style lang="scss" scoped></style>
