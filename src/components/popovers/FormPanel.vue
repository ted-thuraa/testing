<template>
  <TransitionRoot as="template" :show="isFormOpen">
    <Dialog as="div" class="relative z-10">
      <TransitionChild
        as="template"
        enter="ease-out duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in duration-200"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div
          class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        />
      </TransitionChild>
      <div class="fixed inset-0 overflow-hidden">
        <div class="absolute inset-0 overflow-hidden">
          <div
            class="pointer-events-none fixed bottom-0 top-[4rem] right-0 flex max-w-full"
          >
            <TransitionChild
              as="template"
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enter-from="translate-y-full"
              enter-to="translate-y-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leave-from="translate-y-0"
              leave-to="translate-y-full"
            >
              <DialogPanel
                class="pointer-events-auto relative w-screen max-w-md"
              >
                <div
                  class="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl"
                >
                  <button
                    type="button"
                    class="px-4 sm:px-6 relative rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                    @click="$emit('closeFormOpen')"
                  >
                    <span class="absolute -inset-2.5" />
                    <span class="sr-only">Close panel</span>
                    <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                  </button>
                  <div class="px-4 sm:px-6"></div>
                  <div class="relative mt-2 flex-1 px-4 sm:px-6">
                    <!-- Your content -->
                    <div class="flex flex-col relative h-min pb-10 w-full">
                      <div
                        v-if="link && link.data && link.data.formtype"
                        class="m-0 p-0"
                      >
                        <component
                          :is="getFormComponent(link.data.formtype)"
                          :link="link"
                          class=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import { ref, watch, computed, onMounted, toRefs } from "vue";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import MailingList from "../helpers/MailingList.vue";
import Poll from "../helpers/PollForm.vue";
import Rating from "../helpers/RatingForm.vue";
import Hire from "../helpers/HireForm.vue";
import Contact from "../helpers/ContactForm.vue";
import Custom from "../helpers/CustomForm.vue";
import { XMarkIcon } from "@heroicons/vue/24/outline";
import { useStore } from "vuex";
const store = useStore();

const emit = defineEmits(["closeFormOpen"]);

const props = defineProps({
  link: Object,
  isFormOpen: Boolean,
});

//const { isFormOpen } = toRefs(props);
const { link, isFormOpen } = toRefs(props);
console.log(isFormOpen);
console.log(link);

let clientmail = ref("");
let errors = ref(null);

const joinMailingList = async () => {
  try {
    console.log(clientmail.value);
    //await store.dispatch("joinMailingList", clientmail.value);
  } catch (error) {
    console.log(error);
    errors.value = error.response.data.errors;
  }
};

function getFormComponent(category) {
  switch (category) {
    case "Mailing List":
      return MailingList;
    case "Waiting List":
      return MailingList;
    case "Poll":
      return Poll;
    case "Rating":
      return Rating;
    case "Hire me":
      return Hire;
    case "Custom":
      return Custom;
    case "Contact form":
      return Contact;
    // Handle other categories here if needed
    default:
      return; // Replace 'DefaultComponent' with a fallback component name
  }
}
</script>
