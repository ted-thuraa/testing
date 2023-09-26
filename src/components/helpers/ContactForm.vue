<template>
  <div class="w-full flex justify-center">
    <div class="hidden md:block">
      <button
        @click="isDesktopFormOpen = true"
        type="button"
        class="px-10 py-3.5 text-base font-medium inline-flex items-center focus:ring-4 focus:outline-none rounded-[2.5rem] text-center"
        :class="theme.buttonVariations.btnVar1"
      >
        <svg
          class="w-4 h-4 mr-2"
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
        Contact me
      </button>
    </div>
    <div class="block md:hidden">
      <button
        @click="isPhoneFormOpen = true"
        type="button"
        class="px-10 py-4 text-base rounded-[2.5rem] font-medium text-center inline-flex items-center shadow-lg focus:ring-4 focus:outline-none"
        :class="theme.buttonVariations.btnVar1"
      >
        <svg
          class="w-3 h-3 mr-2"
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
        Contact me
      </button>
    </div>
    <FormPanelDesktop
      :link="link"
      :isDesktopFormOpen="isDesktopFormOpen"
      :theme="theme"
      @closeDesktopForm="isDesktopFormOpen = false"
    />
    <FormPanelPhone
      :link="link"
      :isPhoneFormOpen="isPhoneFormOpen"
      :theme="theme"
      @closePhoneForm="isPhoneFormOpen = false"
    />
  </div>
</template>

<script setup>
import FormPanelPhone from "../popovers/FormPanelPhone.vue";
import FormPanelDesktop from "../popovers/FormPanelDesktop.vue";
import { ChevronDownIcon } from "@heroicons/vue/20/solid";
import { Switch, SwitchGroup, SwitchLabel } from "@headlessui/vue";
import { watch, ref, onMounted, toRefs } from "vue";
import { useStore } from "vuex";
const store = useStore();

const props = defineProps({
  link: Object,
  theme: Object,
});
const { link, theme } = toRefs(props);
console.log(link);
let isPhoneFormOpen = ref(false);
let isDesktopFormOpen = ref(false);

let agreed = ref(false);
let fullname = ref("");
let email = ref("");
let message = ref("");
let phone = ref("");
let country = ref("");
const contactFormModel = ref({});
const answersModel = ref({});
const answers = ref([]);

function submitContactForm() {
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
    {
      question: "phone",
      question_answers: phone.value,
    },
    {
      question: "country",
      question_answers: country.value,
    },
    {
      question: "message",
      question_answers: message.value,
    },
  ];

  answersModel.value = {
    uid: store.state.guestpagedata.data.page.id,
    form_id: link.value.id,
    type: "Contact form",
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
