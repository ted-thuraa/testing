<template>
  <TransitionRoot appear :show="isDesktopFormOpen" as="template">
    <Dialog as="div" @close="$emit('closeDesktopForm')" class="relative z-20">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black bg-opacity-25" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div
          class="flex min-h-full items-center justify-center p-4 text-center"
        >
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="relative w-full max-w-3xl transform overflow-y-auto overflow-x-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
            >
              <div class="absolute top-0 left-0 right-0">
                <div class="px-4 py-2 flex justify-end">
                  <button @click="$emit('closeDesktopForm')">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="text-gray-900 w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div
                class="mb-4 rounded-[24px] transition-all duration-500 ease-in"
              >
                <div
                  class="flex flex-col items-center relative h-min pb-1 w-full"
                >
                  <div
                    v-if="link.data.formtype == 'Contact form'"
                    class="m-0 py-2 px-6"
                  >
                    <div class="isolate bg-white px-6 py-2">
                      <div class="mx-auto max-w-2xl text-center">
                        <h2
                          class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
                        >
                          {{ link.name }}
                        </h2>
                        <p class="mt-2 text-lg leading-8 text-gray-600">
                          Aute magna irure deserunt veniam aliqua magna enim
                          voluptate.
                        </p>
                      </div>
                      <div class="mx-auto mt-16 max-w-xl sm:mt-20">
                        <div
                          class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2"
                        >
                          <div v-if="link.data.get_name" class="sm:col-span-2">
                            <label
                              for="first-name"
                              class="block text-sm font-semibold leading-6 text-gray-900"
                              >Full name</label
                            >
                            <div class="mt-2.5">
                              <input
                                v-model="fullname"
                                :required="link.data.isNameRequired"
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
                                :required="link.data.isEmailRequired"
                                type="email"
                                name="email"
                                id="email"
                                autocomplete="email"
                                class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              />
                            </div>
                          </div>
                          <div
                            v-if="link.data.get_country"
                            class="sm:col-span-2"
                          >
                            <label
                              for="Country"
                              class="block text-sm font-semibold leading-6 text-gray-900"
                              >Country</label
                            >
                            <div class="mt-2.5">
                              <input
                                v-model="country"
                                :required="link.data.isCountryRequired"
                                type="text"
                                name="Country"
                                id="Country"
                                autocomplete="Country"
                                class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              />
                            </div>
                          </div>

                          <div
                            v-if="link.data.get_mobile"
                            class="sm:col-span-2"
                          >
                            <label
                              for="phone-number"
                              class="block text-sm font-semibold leading-6 text-gray-900"
                              >Phone number</label
                            >
                            <div class="relative mt-2.5">
                              <input
                                v-model="phone"
                                :required="link.data.isMobileRequired"
                                type="tel"
                                name="phone-number"
                                id="phone-number"
                                autocomplete="tel"
                                class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              />
                            </div>
                          </div>
                          <div
                            v-if="link.data.get_message"
                            class="sm:col-span-2"
                          >
                            <label
                              for="message"
                              class="block text-sm font-semibold leading-6 text-gray-900"
                              >Message</label
                            >
                            <div class="mt-2.5">
                              <textarea
                                v-model="message"
                                :required="link.data.isMessageRequired"
                                name="message"
                                id="message"
                                rows="4"
                                class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              />
                            </div>
                          </div>
                          <SwitchGroup
                            as="div"
                            class="flex gap-x-4 sm:col-span-2"
                          >
                            <div class="flex h-6 items-center">
                              <Switch
                                v-model="tcagreed"
                                :class="[
                                  tcagreed ? 'bg-indigo-600' : 'bg-gray-200',
                                  'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600',
                                ]"
                              >
                                <span class="sr-only">Agree to policies</span>
                                <span
                                  aria-hidden="true"
                                  :class="[
                                    tcagreed
                                      ? 'translate-x-3.5'
                                      : 'translate-x-0',
                                    'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out',
                                  ]"
                                />
                              </Switch>
                            </div>
                            <SwitchLabel
                              class="text-sm leading-6 text-gray-600"
                            >
                              By submitting your contact details, you are
                              providing your data to tedflux who may contact
                              you.
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
                  </div>
                  <div
                    v-if="link.data.formtype == 'Hire'"
                    class="m-0 py-2 px-6"
                  >
                    <div class="isolate bg-white px-6 py-2">
                      <div class="mx-auto max-w-2xl text-center">
                        <h2
                          class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
                        >
                          Hire me
                        </h2>
                        <p class="mt-2 text-lg leading-8 text-gray-600">
                          Aute magna irure deserunt veniam aliqua magna enim
                          voluptate.
                        </p>
                      </div>
                      <div class="mx-auto mt-16 max-w-xl sm:mt-20">
                        <div
                          class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2"
                        >
                          <div v-if="link.data.get_name" class="sm:col-span-2">
                            <label
                              for="first-name"
                              class="block text-sm font-semibold leading-6 text-gray-900"
                              >Full name</label
                            >
                            <div class="mt-2.5">
                              <input
                                v-model="fullname"
                                :required="link.data.isNameRequired"
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
                                :required="link.data.isEmailRequired"
                                type="email"
                                name="email"
                                id="email"
                                autocomplete="email"
                                class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              />
                            </div>
                          </div>
                          <div
                            v-if="link.data.get_country"
                            class="sm:col-span-2"
                          >
                            <label
                              for="Country"
                              class="block text-sm font-semibold leading-6 text-gray-900"
                              >Country</label
                            >
                            <div class="mt-2.5">
                              <input
                                v-model="country"
                                :required="link.data.isCountryRequired"
                                type="text"
                                name="Country"
                                id="Country"
                                autocomplete="Country"
                                class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              />
                            </div>
                          </div>

                          <div
                            v-if="link.data.get_mobile"
                            class="sm:col-span-2"
                          >
                            <label
                              for="phone-number"
                              class="block text-sm font-semibold leading-6 text-gray-900"
                              >Phone number</label
                            >
                            <div class="relative mt-2.5">
                              <input
                                v-model="phone"
                                :required="link.data.isMobileRequired"
                                type="tel"
                                name="phone-number"
                                id="phone-number"
                                autocomplete="tel"
                                class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              />
                            </div>
                          </div>
                          <div
                            v-if="link.data.get_message"
                            class="sm:col-span-2"
                          >
                            <label
                              for="message"
                              class="block text-sm font-semibold leading-6 text-gray-900"
                              >Message</label
                            >
                            <div class="mt-2.5">
                              <textarea
                                v-model="message"
                                :required="link.data.isMessageRequired"
                                name="message"
                                id="message"
                                rows="4"
                                class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              />
                            </div>
                          </div>
                          <SwitchGroup
                            as="div"
                            class="flex gap-x-4 sm:col-span-2"
                          >
                            <div class="flex h-6 items-center">
                              <Switch
                                v-model="tcagreed"
                                :class="[
                                  tcagreed ? 'bg-indigo-600' : 'bg-gray-200',
                                  'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600',
                                ]"
                              >
                                <span class="sr-only">Agree to policies</span>
                                <span
                                  aria-hidden="true"
                                  :class="[
                                    tcagreed
                                      ? 'translate-x-3.5'
                                      : 'translate-x-0',
                                    'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out',
                                  ]"
                                />
                              </Switch>
                            </div>
                            <SwitchLabel
                              class="text-sm leading-6 text-gray-600"
                            >
                              By submitting your contact details, you are
                              providing your data to tedflux who may contact
                              you.
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
                  </div>
                </div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import { ref, watch, computed, onMounted, toRefs } from "vue";
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/vue";
import { Switch } from "@headlessui/vue";
import { XMarkIcon } from "@heroicons/vue/24/outline";
import { useStore } from "vuex";
const store = useStore();

const emit = defineEmits(["closeDesktopForm"]);

const props = defineProps({
  link: Object,
  theme: Object,
  isDesktopFormOpen: Boolean,
});

//const { isFormOpen } = toRefs(props);
const { link, isDesktopFormOpen } = toRefs(props);

let tcagreed = ref(false);
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
    {
      question: "Agree to terms and conditions",
      question_answers: tcagreed.value,
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

<style lang="scss" scoped></style>
