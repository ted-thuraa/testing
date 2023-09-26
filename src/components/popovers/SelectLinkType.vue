<template>
  <!-- eslint-disable -->

  <TransitionRoot appear :show="isSelectLinkTypeOpen" as="template">
    <Dialog
      as="div"
      @close="$emit('closeSelectLinkTypeModal')"
      class="relative z-10"
    >
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
            enter="transition ease-out duration-200"
            enter-from="opacity-0 translate-y-1"
            enter-to="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leave-from="opacity-100 translate-y-0"
            leave-to="opacity-0 translate-y-1"
          >
            <DialogPanel
              class="relative w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-2 text-left align-middle shadow-xl transition-all ring-1 ring-black ring-opacity-5"
            >
              <div v-if="saving" class="absolute z-20 inset-0">
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
              <div class="overflow-hidden rounded-lg">
                <div class="relative gap-8 bg-white p-7">
                  <button
                    @click="
                      $emit('AddLink', {
                        category: 'Link',
                      })
                    "
                    class="group relative flex w-full rounded-lg p-4 hover:bg-gray-50"
                  >
                    <div
                      class="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        class="h-6 w-6 text-gray-900 group-hover:text-indigo-600"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                        />
                      </svg>
                    </div>
                    <div class="w-56 text-left ml-6">
                      <p class="font-semibold text-gray-900">
                        Link
                        <span class="absolute inset-0" />
                      </p>
                      <p class="mt-1 text-gray-600">Add any link</p>
                    </div>
                    <div class="text-purple-700 font-semibold ml-4">Add</div>
                  </button>
                  <button
                    @click="
                      AddItem({
                        category: 'Header',
                      })
                    "
                    class="group relative flex w-full rounded-lg p-4 hover:bg-gray-50"
                  >
                    <div
                      class="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        class="h-6 w-6 text-gray-900 group-hover:text-indigo-600"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                        />
                      </svg>
                    </div>
                    <div class="w-56 text-left ml-6">
                      <p class="font-semibold text-gray-900">
                        Header
                        <span class="absolute inset-0" />
                      </p>
                      <p class="mt-1 text-gray-600">Organize your pag</p>
                    </div>
                    <div class="text-purple-700 font-semibold ml-4">Add</div>
                  </button>
                  <button
                    @click="
                      $emit('AddLink', {
                        category: 'SaaS',
                      })
                    "
                    class="group relative flex w-full rounded-lg p-4 hover:bg-gray-50"
                  >
                    <div
                      class="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        class="h-6 w-6 text-gray-900 group-hover:text-indigo-600"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                        />
                      </svg>
                    </div>
                    <div class="w-56 text-left ml-6">
                      <p class="font-semibold text-gray-900">
                        Startup/website
                        <span class="absolute inset-0" />
                      </p>
                      <p class="mt-1 text-gray-600">
                        Indie hackers showcase your portfolio
                      </p>
                    </div>
                    <div class="text-purple-700 font-semibold ml-4">Add</div>
                  </button>
                  <button
                    @click="
                      AddItem({
                        category: 'Text',
                      })
                    "
                    class="group relative flex w-full rounded-lg p-4 hover:bg-gray-50"
                  >
                    <div
                      class="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        class="h-6 w-6 text-gray-900 group-hover:text-indigo-600"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                        />
                      </svg>
                    </div>
                    <div class="w-56 text-left ml-6">
                      <p class="font-semibold text-gray-900">
                        Text/Quote
                        <span class="absolute inset-0" />
                      </p>
                      <p class="mt-1 text-gray-600">Got something to say</p>
                    </div>
                    <div class="text-purple-700 font-semibold ml-4">Add</div>
                  </button>
                  <button
                    @click="
                      AddItem({
                        category: 'Portfolio',
                      })
                    "
                    class="group relative flex w-full rounded-lg p-4 hover:bg-gray-50"
                  >
                    <div
                      class="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        class="h-6 w-6 text-gray-900 group-hover:text-indigo-600"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                        />
                      </svg>
                    </div>
                    <div class="w-56 text-left ml-6">
                      <p class="font-semibold text-gray-900">
                        Portfolio/project
                        <span class="absolute inset-0" />
                      </p>
                      <p class="mt-1 text-gray-600">Showcase your projects</p>
                    </div>
                    <div class="text-purple-700 font-semibold ml-4">Add</div>
                  </button>
                  <button
                    @click="
                      AddItem({
                        category: 'Image',
                      })
                    "
                    class="group relative flex w-full rounded-lg p-4 hover:bg-gray-50"
                  >
                    <div
                      class="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        class="h-6 w-6 text-gray-900 group-hover:text-indigo-600"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                        />
                      </svg>
                    </div>
                    <div class="w-56 text-left ml-6">
                      <p class="font-semibold text-gray-900">
                        Image
                        <span class="absolute inset-0" />
                      </p>
                      <p class="mt-1 text-gray-600">Showcase your images</p>
                    </div>
                    <div class="text-purple-700 font-semibold ml-4">Add</div>
                  </button>
                  <button
                    @click="
                      AddItem({
                        category: 'Form',
                      })
                    "
                    class="group relative flex w-full rounded-lg p-4 hover:bg-gray-50"
                  >
                    <div
                      class="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        class="h-6 w-6 text-gray-900 group-hover:text-indigo-600"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                        />
                      </svg>
                    </div>
                    <div class="w-56 text-left ml-6">
                      <p class="font-semibold text-gray-900">
                        Form
                        <span class="absolute inset-0" />
                      </p>
                      <p class="mt-1 text-gray-600">Collect data with forms</p>
                    </div>
                    <div class="text-purple-700 font-semibold ml-4">Add</div>
                  </button>
                  <button
                    @click="
                      AddItem({
                        category: 'Video',
                      })
                    "
                    class="group relative flex w-full rounded-lg p-4 hover:bg-gray-50"
                  >
                    <div
                      class="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        class="h-6 w-6 text-gray-900 group-hover:text-indigo-600"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                        />
                      </svg>
                    </div>
                    <div class="w-56 text-left ml-6">
                      <p class="font-semibold text-gray-900">
                        Video
                        <span class="absolute inset-0" />
                      </p>
                      <p class="mt-1 text-gray-600">
                        Share youtube and vimeo videos
                      </p>
                    </div>
                    <div class="text-purple-700 font-semibold ml-4">Add</div>
                  </button>
                  <button
                    @click="
                      AddItem({
                        category: 'DigitalProduct',
                      })
                    "
                    class="group relative flex w-full rounded-lg p-4 hover:bg-gray-50"
                  >
                    <div
                      class="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        class="h-6 w-6 text-gray-900 group-hover:text-indigo-600"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                        />
                      </svg>
                    </div>
                    <div class="w-56 text-left ml-6">
                      <p class="font-semibold text-gray-900">
                        Digital Products
                        <span class="absolute inset-0" />
                      </p>
                      <p class="mt-1 text-gray-600">Sell Digital products</p>
                    </div>
                    <div class="text-purple-700 font-semibold ml-4">Add</div>
                  </button>
                  <button
                    @click="
                      AddItem({
                        category: 'Store',
                      })
                    "
                    class="group relative flex w-full rounded-lg p-4 hover:bg-gray-50"
                  >
                    <div
                      class="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        class="h-6 w-6 text-gray-900 group-hover:text-indigo-600"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                        />
                      </svg>
                    </div>
                    <div class="w-56 text-left ml-6">
                      <p class="font-semibold text-gray-900">
                        Store
                        <span class="absolute inset-0" />
                      </p>
                      <p class="mt-1 text-gray-600">Sell products</p>
                    </div>
                    <div class="text-purple-700 font-semibold ml-4">Add</div>
                  </button>
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
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/vue";
import { ChevronDownIcon } from "@heroicons/vue/20/solid";
import { ref, watch, computed, onMounted, toRefs } from "vue";
import { useStore } from "vuex";
const store = useStore();

const emit = defineEmits(["AddLink, closeSelectLinkTypeModal"]);

const props = defineProps({
  isSelectLinkTypeOpen: Boolean,
});

const { isSelectLinkTypeOpen } = toRefs(props);

//each linkc item needs to have this fields
let model = ref({
  name: "",
  url: null,
  redirect_link: null,
  description: null,
  category: null,
  active: null,
  clicks: null,
  icon: null,
  thumbnailimage: null,
  layout: null,
  data: {},
  bg_color: null,
  text_color: null,
  btn_color: null,
});
let name = ref("");
let category = ref("");
let url = ref("");
let saving = ref(false);
let errors = ref(null);

const AddItem = async (payload) => {
  saving.value = true;
  console.log(payload);
  model.value.category = payload.category;
  try {
    await store.dispatch("addLink", model.value);
    await store.dispatch("getAllLinks");
    saving.value = false;
    setTimeout(() => {
      emit("closeSelectLinkTypeModal");
      name.value = "";
      category.value = "";
      url.value = "";
    }, 100);
  } catch (error) {
    saving.value = false;
    store.commit("notify", {
      type: "error",
      message: "Failed",
    });
    console.log(error);
    errors.value = error.response.data.errors;
  }
};

const solutions = [
  {
    name: "Link",
    description: "Measure actions your users take",
    href: "'AddLink', { category: 'Link' }",
    icon: `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"  class="w-6 h-6 stroke-black">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
        </svg>
      `,
  },
  {
    name: "Automations",
    description: "Create your own targeted content",
    href: "",
    icon: `
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="48" height="48" rx="8" fill="#FFEDD5" />
          <path
            d="M28.0413 20L23.9998 13L19.9585 20M32.0828 27.0001L36.1242 34H28.0415M19.9585 34H11.8755L15.9171 27"
            stroke="#FB923C"
            stroke-width="2"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M18.804 30H29.1963L24.0001 21L18.804 30Z"
            stroke="#FDBA74"
            stroke-width="2"
          />
        </svg>
      `,
  },
  {
    name: "Reports",
    description: "Keep track of your growth",
    href: "",
    icon: `
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="48" height="48" rx="8" fill="#FFEDD5" />
          <rect x="13" y="32" width="2" height="4" fill="#FDBA74" />
          <rect x="17" y="28" width="2" height="8" fill="#FDBA74" />
          <rect x="21" y="24" width="2" height="12" fill="#FDBA74" />
          <rect x="25" y="20" width="2" height="16" fill="#FDBA74" />
          <rect x="29" y="16" width="2" height="20" fill="#FB923C" />
          <rect x="33" y="12" width="2" height="24" fill="#FB923C" />
        </svg>
      `,
  },
];
</script>
