<template>
  <div class="col-span-full">
    <div class="mb-2">
      <p class="p-0 m-0 font-semibold text-base">Feedback form</p>
    </div>
    <div class="mb-5">
      <p class="p-0 text-[14px] text-slate-700">
        Receive feedback in your inbox
      </p>
    </div>
    <div class="mb-5 col-span-full">
      <h2 class="text-base font-semibold leading-7 text-gray-900">Question</h2>
      <div class="mt-2">
        <textarea
          v-model="feedback_question"
          @change="dataChange"
          id="about"
          name="about"
          rows="3"
          placeholder="Your question here"
          class="block w-full rounded-md bg-gray-50 border border-gray-100 focus:border-purple-500 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
        ></textarea>
      </div>
    </div>
    <div class="mb-5">
      <div class="relative overflow-x-auto sm:rounded-lg mb-4">
        <table class="w-full text-sm text-left text-gray-500">
          <caption
            class="text-lg font-semibold text-left text-gray-900 bg-white"
          >
            Fields
            <p class="mt-1 text-sm font-normal text-gray-500">
              Use fields to collect a specific type of information. Mark a field
              required to make it mandatory for visitors to complete.
            </p>
          </caption>
          <thead class="text-xs text-gray-700 uppercase">
            <tr>
              <th scope="col" class="px-6 py-3">Field</th>
              <th scope="col" class="px-6 py-3">required?</th>
              <th scope="col" class="px-6 py-3">status</th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                Name
              </th>
              <td class="px-6 py-4">
                <input
                  v-model="isNameRequired"
                  @change="dataChange"
                  checked
                  id="checked-checkbox"
                  type="checkbox"
                  value="true"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                />
              </td>
              <td class="px-6 py-4">
                <label class="relative inline-flex items-center cursor-pointer">
                  <input
                    v-model="get_name"
                    @change="dataChange"
                    type="checkbox"
                    value="true"
                    class="sr-only peer"
                    checked
                  />
                  <div
                    class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"
                  ></div>
                </label>
              </td>
            </tr>
            <tr class="bg-white border-b">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                Email address
              </th>
              <td class="px-6 py-4">
                <input
                  v-model="isEmailRequired"
                  @change="dataChange"
                  checked
                  id="checked-checkbox"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                />
              </td>
              <td class="px-6 py-4">
                <label class="relative inline-flex items-center cursor-pointer">
                  <input
                    v-model="get_email"
                    @change="dataChange"
                    type="checkbox"
                    value="true"
                    class="sr-only peer"
                    checked
                  />
                  <div
                    class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"
                  ></div>
                </label>
              </td>
            </tr>
            <tr class="bg-white border-b">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                Mobile
              </th>
              <td class="px-6 py-4">
                <input
                  v-model="isMobileRequired"
                  @change="dataChange"
                  checked
                  id="checked-checkbox"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                />
              </td>
              <td class="px-6 py-4">
                <label class="relative inline-flex items-center cursor-pointer">
                  <input
                    v-model="get_mobile"
                    @change="dataChange"
                    type="checkbox"
                    value="true"
                    class="sr-only peer"
                    checked
                  />
                  <div
                    class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"
                  ></div>
                </label>
              </td>
            </tr>
            <tr class="bg-white border-b">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                Message
              </th>
              <td class="px-6 py-4">
                <input
                  v-model="isMessageRequired"
                  @change="dataChange"
                  checked
                  id="checked-checkbox"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                />
              </td>
              <td class="px-6 py-4">
                <label class="relative inline-flex items-center cursor-pointer">
                  <input
                    v-model="get_message"
                    @change="dataChange"
                    type="checkbox"
                    value="true"
                    class="sr-only peer"
                    checked
                  />
                  <div
                    class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"
                  ></div>
                </label>
              </td>
            </tr>
            <tr class="bg-white border-b">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                Country
              </th>
              <td class="px-6 py-4">
                <input
                  v-model="isCountryRequired"
                  @change="dataChange"
                  checked
                  id="checked-checkbox"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                />
              </td>
              <td class="px-6 py-4">
                <label class="relative inline-flex items-center cursor-pointer">
                  <input
                    v-model="get_country"
                    @change="dataChange"
                    type="checkbox"
                    value="true"
                    class="sr-only peer"
                    checked
                  />
                  <div
                    class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"
                  ></div>
                </label>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  Listbox,
  ListboxLabel,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/vue";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/vue/20/solid";
import { v4 as uuidv4 } from "uuid";
import { watch, ref, onMounted, toRefs } from "vue";
import { useStore } from "vuex";
const store = useStore();

const props = defineProps({
  link: Object,
  //selectedId: { type: Number, default: 0 },
  //selectedStr: { type: String, default: "" },
});
const emit = defineEmits(["change"]);

const { link } = toRefs(props);
const model = ref(JSON.parse(JSON.stringify(props.link)));

let isNameRequired = ref(false);
let get_name = ref(false);
let isEmailRequired = ref(false);
let get_email = ref(false);
let isMobileRequired = ref(false);
let get_mobile = ref(false);
let isMessageRequired = ref(false);
let get_message = ref(false);
let isCountryRequired = ref(false);
let get_country = ref(false);
let feedback_question = ref("");

//Emit the data change
function dataChange() {
  const data = {
    feedback_question: feedback_question.value,
    isNameRequired: isNameRequired.value,
    get_name: get_name.value,
    isEmailRequired: isEmailRequired.value,
    get_email: get_email.value,
    isMobileRequired: isMobileRequired.value,
    get_mobile: get_mobile.value,
    isMessageRequired: isMessageRequired.value,
    get_message: get_message.value,
    isCountryRequired: isCountryRequired.value,
    get_country: get_country.value,
    feedback_question: feedback_question.value,
  };
  console.log(data);

  emit("change", data);
}
</script>

<style></style>
