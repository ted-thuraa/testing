<template>
  <div class="max-w-xl lg:max-w-lg py-2">
    <h2
      class="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
    >
      {{ link.name }}
    </h2>
    <p class="text-center mt-4 text-base leading-7 text-gray-700">
      {{ link.data.additionaldescription }}
    </p>
    <div class="mt-6 flex flex-col max-w-md gap-x-4">
      <label for="email-address" class="sr-only">Email address</label>
      <input
        v-model="email"
        id="email-address"
        name="email"
        type="email"
        autocomplete="email"
        required=""
        class="min-w-0 flex-auto rounded-md border-0 bg-gray-500/5 px-3.5 my-4 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-purple-500 sm:text-sm sm:leading-6"
        placeholder="Enter your email"
      />
      <button
        @click="submitSurvey"
        type="submit"
        class="flex-none rounded-md bg-purple-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-lg hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
      >
        Subscribe
      </button>
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
console.log(link);

let fullname = ref("");
let email = ref("");
let answersModel = ref({});
let message = ref("");
let phone = ref("");
let country = ref("");

function submitSurvey() {
  //console.log(store.state.guestpagedata.data.page.id);
  //console.log(JSON.stringify(answers.value, undefined, 2));
  answersModel.value = {
    page_id: store.state.guestpagedata.data.page.id,
    form_id: link.value.id,
    type: "Mailing List",
    data: email.value,
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
