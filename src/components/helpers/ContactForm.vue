<template>
  <div class="isolate bg-white px-6 py-2 sm:py-32 lg:px-8">
    <div class="mx-auto max-w-2xl text-center">
      <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Contact sales
      </h2>
      <p class="mt-2 text-lg leading-8 text-gray-600">
        Aute magna irure deserunt veniam aliqua magna enim voluptate.
      </p>
    </div>
    <div class="mx-auto mt-16 max-w-xl sm:mt-20">
      <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div v-if="link.data.get_name">
          <label
            for="first-name"
            class="block text-sm font-semibold leading-6 text-gray-900"
            >Full name</label
          >
          <div class="mt-2.5">
            <input
              v-model="fullname"
              type="text"
              name="first-name"
              id="first-name"
              autocomplete="given-name"
              class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div v-if="link.data.get_email" class="sm:col-span-2">
          <label
            for="email"
            class="block text-sm font-semibold leading-6 text-gray-900"
            >Email</label
          >
          <div class="mt-2.5">
            <input
              v-model="email"
              type="email"
              name="email"
              id="email"
              autocomplete="email"
              class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div v-if="link.data.get_country" class="sm:col-span-2">
          <label
            for="Country"
            class="block text-sm font-semibold leading-6 text-gray-900"
            >Country</label
          >
          <div class="mt-2.5">
            <input
              v-model="country"
              type="text"
              name="Country"
              id="Country"
              autocomplete="Country"
              class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div v-if="link.data.get_mobile" class="sm:col-span-2">
          <label
            for="phone-number"
            class="block text-sm font-semibold leading-6 text-gray-900"
            >Phone number</label
          >
          <div class="relative mt-2.5">
            <div class="absolute inset-y-0 left-0 flex items-center">
              <label for="country" class="sr-only">Country</label>
              <select
                id="country"
                name="country"
                class="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
              >
                <option>US</option>
                <option>CA</option>
                <option>EU</option>
              </select>
              <ChevronDownIcon
                class="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400"
                aria-hidden="true"
              />
            </div>
            <input
              v-model="phone"
              type="tel"
              name="phone-number"
              id="phone-number"
              autocomplete="tel"
              class="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div v-if="link.data.get_message" class="sm:col-span-2">
          <label
            for="message"
            class="block text-sm font-semibold leading-6 text-gray-900"
            >Message</label
          >
          <div class="mt-2.5">
            <textarea
              v-model="message"
              name="message"
              id="message"
              rows="4"
              class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <SwitchGroup as="div" class="flex gap-x-4 sm:col-span-2">
          <div class="flex h-6 items-center">
            <Switch
              v-model="agreed"
              :class="[
                agreed ? 'bg-indigo-600' : 'bg-gray-200',
                'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600',
              ]"
            >
              <span class="sr-only">Agree to policies</span>
              <span
                aria-hidden="true"
                :class="[
                  agreed ? 'translate-x-3.5' : 'translate-x-0',
                  'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out',
                ]"
              />
            </Switch>
          </div>
          <SwitchLabel class="text-sm leading-6 text-gray-600">
            By submitting your contact details, you are providing your data to
            tedflux who may contact you.
            {{ " " }}
            <a href="#" class="font-semibold text-indigo-600"
              >privacy&nbsp;policy</a
            >.
          </SwitchLabel>
        </SwitchGroup>
      </div>
      <div class="mt-10">
        <button
          type="submit"
          @click="submitContactForm"
          class="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Let's talk
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ChevronDownIcon } from "@heroicons/vue/20/solid";
import { Switch, SwitchGroup, SwitchLabel } from "@headlessui/vue";
import { watch, ref, onMounted, toRefs } from "vue";
import { useStore } from "vuex";
const store = useStore();

const props = defineProps({
  link: Object,
});
const { link } = toRefs(props);
console.log(link);

let agreed = ref(false);
let fullname = ref("");
let email = ref("");
let message = ref("");
let phone = ref("");
let country = ref("");
const contactFormModel = ref({});
const answersModel = ref({});

function submitContactForm() {
  //console.log(store.state.guestpagedata.data.page.id);
  //console.log(JSON.stringify(answers.value, undefined, 2));
  contactFormModel.value = {
    page_id: store.state.guestpagedata.data.page.id,
    fullname: fullname.value,
    email: email.value,
    phone: phone.value,
    country: country.value,
    message: message.value,
  };

  answersModel.value = {
    page_id: store.state.guestpagedata.data.page.id,
    form_id: link.value.id,
    type: "Contact form",
    data: contactFormModel.value,
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
