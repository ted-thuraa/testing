<template>
  <div class="relative px-4 w-full">
    <div class="relative w-full">
      <form
        @submit.prevent="updateFormData"
        class="relative flex flex-col mb-3 w-full h-full text-gray-950"
      >
        <div class="mb-5">
          <div>
            <div>
              <legend class="text-sm font-semibold leading-6 text-gray-900">
                Form type
              </legend>
              <p class="mt-1 text-sm leading-6 text-gray-600">
                These are delivered via SMS to your mobile phone.
              </p>
            </div>
          </div>
        </div>
        <listbox :formtype="formtype" @updateformtype="updateformtype" />

        <div v-if="formtype === 'Contact form'" class="mt-10">
          <div class="mb-2">
            <p class="p-0 m-0 font-semibold text-base">Contact form</p>
          </div>
          <div class="mb-5">
            <p class="p-0 text-[14px] text-slate-700">
              Receive messages in your inbox
            </p>
          </div>
          <div class="mb-5">
            <div class="relative overflow-x-auto sm:rounded-lg mb-4">
              <table class="w-full text-sm text-left text-gray-500">
                <caption
                  class="text-lg font-semibold text-left text-gray-900 bg-white"
                >
                  Fields
                  <p class="mt-1 text-sm font-normal text-gray-500">
                    Use fields to collect a specific type of information. Mark a
                    field required to make it mandatory for visitors to
                    complete.
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
                        checked
                        id="checked-checkbox"
                        type="checkbox"
                        value="true"
                        class="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500"
                      />
                    </td>
                    <td class="px-6 py-4">
                      <label
                        class="relative inline-flex items-center cursor-pointer"
                      >
                        <input
                          v-model="get_name"
                          type="checkbox"
                          value="true"
                          class="sr-only peer"
                          checked
                        />
                        <div
                          class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"
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
                        checked
                        id="checked-checkbox"
                        type="checkbox"
                        value=""
                        class="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 focus:ring-2"
                      />
                    </td>
                    <td class="px-6 py-4">
                      <label
                        class="relative inline-flex items-center cursor-pointer"
                      >
                        <input
                          v-model="get_email"
                          type="checkbox"
                          value="true"
                          class="sr-only peer"
                          checked
                        />
                        <div
                          class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-purple-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"
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
                        checked
                        id="checked-checkbox"
                        type="checkbox"
                        value=""
                        class="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 focus:ring-2"
                      />
                    </td>
                    <td class="px-6 py-4">
                      <label
                        class="relative inline-flex items-center cursor-pointer"
                      >
                        <input
                          v-model="get_mobile"
                          type="checkbox"
                          value="true"
                          class="sr-only peer"
                          checked
                        />
                        <div
                          class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-purple-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"
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
                        checked
                        id="checked-checkbox"
                        type="checkbox"
                        value=""
                        class="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 focus:ring-2"
                      />
                    </td>
                    <td class="px-6 py-4">
                      <label
                        class="relative inline-flex items-center cursor-pointer"
                      >
                        <input
                          v-model="get_message"
                          type="checkbox"
                          value="true"
                          class="sr-only peer"
                          checked
                        />
                        <div
                          class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-purple-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"
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
                        checked
                        id="checked-checkbox"
                        type="checkbox"
                        value=""
                        class="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 focus:ring-2"
                      />
                    </td>
                    <td class="px-6 py-4">
                      <label
                        class="relative inline-flex items-center cursor-pointer"
                      >
                        <input
                          v-model="get_country"
                          type="checkbox"
                          value="true"
                          class="sr-only peer"
                          checked
                        />
                        <div
                          class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-purple-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"
                        ></div>
                      </label>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div v-if="formtype === 'Hire'" class="mt-10">
          <HireFormDataEditor :link="link" @change="updateHireFormData" />
        </div>
        <div v-if="formtype === 'Poll'" class="mt-10">
          <PollFormDataEditor
            :poll_data="poll_data"
            @pollDataChange="pollDataChange"
          />
        </div>
        <div v-if="formtype === 'Waiting List'" class="mt-10">
          <div class="mb-2">
            <p class="p-0 m-0 font-semibold text-base">Waiting list</p>
          </div>
          <div class="mb-5">
            <p class="p-0 text-[14px] text-slate-700">
              Validate new ideas by receiving interested clients right in your
              inbox or google sheets
            </p>
          </div>
          <div class="mb-5">
            <div class="relative overflow-x-auto sm:rounded-lg mb-4">
              <table class="w-full text-sm text-left text-gray-500">
                <caption
                  class="text-lg font-semibold text-left text-gray-900 bg-white"
                >
                  Fields
                  <p class="mt-1 text-sm font-normal text-gray-500">
                    Use fields to collect a specific type of information. Mark a
                    field required to make it mandatory for visitors to
                    complete.
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
                        checked
                        id="checked-checkbox"
                        type="checkbox"
                        value="true"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                      />
                    </td>
                    <td class="px-6 py-4">
                      <label
                        class="relative inline-flex items-center cursor-pointer"
                      >
                        <input
                          v-model="get_name"
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
                        checked
                        id="checked-checkbox"
                        type="checkbox"
                        value=""
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                      />
                    </td>
                    <td class="px-6 py-4">
                      <label
                        class="relative inline-flex items-center cursor-pointer"
                      >
                        <input
                          v-model="get_email"
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
        <div v-if="formtype === 'Feedback form'" class="mt-10">
          <feedbackFormDataEditor
            :link="link"
            @change="updateFeedbackFormData"
          />
        </div>
        <div v-if="formtype === 'Mailing List'" class="mt-10">
          <div class="mb-2">
            <p class="p-0 m-0 font-semibold text-base">Mailinglist</p>
          </div>
          <div class="mb-5">
            <p class="p-0 text-[14px] text-slate-700">
              Let your audience subscribe to your mailing list
            </p>
          </div>
          <div class="mb-5">
            <div class="relative overflow-x-auto sm:rounded-lg mb-4">
              <table class="w-full text-sm text-left text-gray-500">
                <caption
                  class="text-lg font-semibold text-left text-gray-900 bg-white"
                >
                  Fields
                  <p class="mt-1 text-sm font-normal text-gray-500">
                    Use fields to collect a specific type of information. Mark a
                    field required to make it mandatory for visitors to
                    complete.
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
                        checked
                        id="checked-checkbox"
                        type="checkbox"
                        value="true"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                      />
                    </td>
                    <td class="px-6 py-4">
                      <label
                        class="relative inline-flex items-center cursor-pointer"
                      >
                        <input
                          v-model="get_name"
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
                        checked
                        id="checked-checkbox"
                        type="checkbox"
                        value=""
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                      />
                    </td>
                    <td class="px-6 py-4">
                      <label
                        class="relative inline-flex items-center cursor-pointer"
                      >
                        <input
                          v-model="get_email"
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
        <div v-if="formtype === 'Rating'" class="mt-10">
          <RatingFormeditor :link="link" @change="updateRatingFormData" />
        </div>
        <div v-if="formtype === 'Custom'" class="mt-10">
          <h3 class="text-2xl font-semibold flex items-center justify-between">
            Questions

            <!-- Add new question -->

            <button
              v-if="!questions.length"
              @click="addQuestion()"
              class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-[0.8rem] group bg-purple-600 group-hover:purple-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
            >
              <span
                class="relative inline-flex items-center justify-center px-5 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-[0.6rem] group-hover:bg-opacity-0"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                    clip-rule="evenodd"
                  />
                </svg>
                Add Question
              </span>
            </button>
            <!--/ Add new question -->
          </h3>
          <div v-if="!questions.length" class="mt-4 text-center text-gray-600">
            You don't have any questions created
          </div>
          <div v-for="(question, index) in questions" :key="question.id">
            <CustomFormEditor
              :question="question"
              :index="index"
              @change="questionChange"
              @addQuestion="addQuestion"
              @deleteQuestion="deleteQuestion"
            />
          </div>
        </div>

        <div class="mt-12 mb-5">
          <p class="p-0 m-0 font-semibold text-base"></p>
          <p class="p-0 text-[14px] text-slate-700"></p>
          <div class="mt-4">
            <label
              for="message"
              class="block mb-2 text-sm font-medium text-gray-900"
              >Aditional description(optional)</label
            >
            <textarea
              v-model="additionaldescription"
              id="message"
              rows="4"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              placeholder="more description..."
            ></textarea>
            <label
              for="message"
              class="block mt-4 mb-2 text-sm font-medium text-gray-900"
              >Thankyou message(optional)</label
            >
            <input
              v-model="thankyoutext"
              type="text"
              id="email-address-icon"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Thanks for Subscribing"
            />
          </div>
        </div>
        <div class="mb-5">
          <p class="p-0 m-0 font-semibold text-base">Storage</p>
          <p class="p-0 text-[14px] text-slate-700">
            Where do you want to send responses to?
          </p>
          <div class="mx-auto w-full max-w-md">
            {{ storage }}
            <RadioGroup v-model="storage">
              <RadioGroupLabel class="sr-only">choose</RadioGroupLabel>
              <div class="space-x-2 flex flex-row items-center">
                <RadioGroupOption
                  as="template"
                  v-for="plan in responsesOptions"
                  :key="plan.name"
                  :value="plan.name"
                  v-slot="{ active, checked }"
                >
                  <div
                    :class="[
                      active
                        ? 'ring-2 ring-white ring-opacity-60 ring-offset-2 '
                        : '',
                      checked ? 'border-[3px] border-purple-700 ' : ' ',
                    ]"
                    class="relative w-[60px] h-[60px] overflow-hidden flex items-center cursor-pointer rounded-lg focus:outline-none"
                  >
                    <div class="flex w-full items-center justify-center">
                      <div class="flex items-center">
                        <div class="text-sm">
                          <RadioGroupLabel
                            as="p"
                            :class="checked ? 'text-white' : 'text-gray-900'"
                            class="font-medium"
                          >
                            <div class="">
                              <img
                                :src="plan.icon"
                                :alt="plan.name"
                                class="w-[52px] h-[52px] object-cover rounded-[5px]"
                              />
                            </div>
                          </RadioGroupLabel>
                        </div>
                      </div>
                      <!-- <div v-show="checked" class="shrink-0 text-white">
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
                      </div> -->
                    </div>
                  </div>
                </RadioGroupOption>
              </div>
            </RadioGroup>
          </div>
          <div
            id="emailSection"
            class="overflow-hidden mt-4"
            :class="
              storage === 'Email'
                ? 'max-h-[80px] transition-all duration-300 ease-in mt-10'
                : 'max-h-0 transition-all duration-200 ease-out'
            "
          >
            <label
              for="email-address-icon"
              class="block mb-2 text-sm font-medium text-gray-900 d"
              >Your Email</label
            >
            <div class="relative">
              <div
                class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none"
              >
                <svg
                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
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
              </div>
              <input
                v-model="responcesEmail"
                type="text"
                id="email-address-icon"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
                placeholder="name@flowbite.com"
              />
            </div>
          </div>
          <div
            id="MailchimpSection"
            class="overflow-hidden mt-4"
            :class="
              storage === 'Mailchimp'
                ? 'max-h-[180px] transition-all duration-300 ease-in mt-10'
                : 'max-h-0 transition-all duration-200 ease-out'
            "
          >
            <p class="p-0 m-0 font-semibold text-base">Mailchimp</p>
            <p class="p-0 text-[14px] text-slate-700">
              Send responses to Mailchimp
            </p>
            <div class="mt-4">
              <label
                for="email-address-icon"
                class="block mb-2 text-sm font-medium text-gray-900"
                >Your Mailchimp listid</label
              >
              <div class="relative">
                <input
                  v-model="mailchimplistid"
                  type="text"
                  id="email-address-icon"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="XAiOiJKV1QiLCJ..."
                />
              </div>
            </div>
          </div>
          <div
            id="googleSection"
            class="overflow-hidden mt-4"
            :class="
              storage === 'Googlesheets'
                ? 'max-h-[180px] transition-all duration-300 ease-in mt-10'
                : 'max-h-0 transition-all duration-200 ease-out'
            "
          >
            <p class="p-0 m-0 font-semibold text-base">Google Sheets</p>
            <p class="p-0 text-[14px] text-slate-700">
              Send responses to google sheets
            </p>
            <div class="mt-4">
              <label
                for="email-address-icon"
                class="block mb-2 text-sm font-medium text-gray-900"
                >Your google sheets url</label
              >
              <div class="relative">
                <input
                  v-model="googlesheetsToken"
                  type="text"
                  id="email-address-icon"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="XAiOiJKV1QiLCJ..."
                />
              </div>
            </div>
          </div>
        </div>

        <!-- expirydate -->
        <div class="mb-5">
          <label
            for="formexpiry_date"
            class="block text-sm font-medium text-gray-700"
          >
            Expiry Date
          </label>
          <input
            type="date"
            name="expiry_date"
            id="expiry_date"
            v-model="formexpiry_date"
            autocomplete=""
            class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        <!-- expirydate -->

        <button
          v-if="saving"
          class="mt-8 text-xl flex items-center justify-center w-full py-3 rounded-full text-white font-semibold bg-purple-600 hover:bg-purple-800"
        >
          <div class="m-auto text-gray-200">
            <!-- Animation Snippet -->
            <div>
              <span
                class="w-2 h-2 ml-2 rounded-full bg-gray-200 inline-block animate-flash"
              ></span
              ><span
                class="w-2 h-2 ml-2 rounded-full bg-gray-200 inline-block animate-flash [animation-delay:0.2s]"
              ></span
              ><span
                class="w-2 h-2 ml-2 rounded-full bg-gray-200 inline-block animate-flash [animation-delay:0.4s]"
              ></span>
            </div>
          </div>
        </button>
        <button
          v-else
          type="submit"
          class="mt-8 text-xl flex items-center justify-center w-full py-3 rounded-full text-white font-semibold bg-purple-600 hover:bg-purple-800"
        >
          <span>Save</span>
        </button>
      </form>
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
import HireFormDataEditor from "./HireFormDataEditor.vue";
import mailchimpicon from "../assets/images/mailchimp.jpeg";
import googlesheetsicon from "../assets/images/googlesheets.png";
import Emailsvg from "../assets/svg/Emailisvg.vue";
import Listbox from "./Listbox.vue";
import RatingFormeditor from "./RatingFormeditor.vue";
import feedbackFormDataEditor from "./feedbackFormDataEditor.vue";
import CustomFormEditor from "./CustomFormEditor.vue";
import PollFormDataEditor from "./PollFormDataEditor.vue";
import ToggleSwitch from "./ToggleSwitch.vue";
import { v4 as uuidv4 } from "uuid";
import { watch, ref, onMounted, toRefs } from "vue";
import { useStore } from "vuex";
const store = useStore();

const props = defineProps({
  link: Object,
  //selectedId: { type: Number, default: 0 },
  //selectedStr: { type: String, default: "" },
});

const { link } = toRefs(props);
const model = ref(JSON.parse(JSON.stringify(props.link)));

let description = ref("");
let formtype = ref("");
let formexpiry_date = ref(null);
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
let poll_data = ref({ poll_question: "", poll_options: [] });
let ratingformdata = ref([]);
let feedbackformdata = ref([]);
let hireformdata = ref([]);
let questions = ref([]);

let responcesEmail = ref("");
let googlesheetsToken = ref("");
let mailchimplistid = ref("");
let additionaldescription = ref("");
let thankyoutext = ref("");
let errors = ref(null);
let saving = ref(false);
const responsesOptions = [
  {
    name: "Email",
    icon: "",
  },
  {
    name: "Googlesheets",
    icon: googlesheetsicon,
  },
  {
    name: "Mailchimp",
    icon: mailchimpicon,
  },
];
//let selectedResoption = ref(responsesOptions[0]);

let storage = ref(responsesOptions[0]);

function updateformtype(payload) {
  console.log(payload.name);
  formtype.value = payload.name;
}

function updateRatingFormData(payload) {
  console.log(payload);
  ratingformdata.value = payload;
}
function updateFeedbackFormData(payload) {
  console.log(payload);
  feedbackformdata.value = payload;
}
function updateHireFormData(payload) {
  console.log(payload);
  hireformdata.value = payload;
}

function addQuestion(index) {
  const newQuestion = {
    id: uuidv4(),
    type: "text",
    question: "",
    description: null,
    data: {},
  };
  questions.value.splice(index, 0, newQuestion);
}

function deleteQuestion(question) {
  questions.value = questions.value.filter((q) => q !== question);
}

function questionChange(question) {
  questions.value = questions.value.map((q) => {
    if (q.id === question.id) {
      return JSON.parse(JSON.stringify(question));
    }
    return q;
  });
  console.log(questions);
}
function pollDataChange(poll) {
  poll_data.value = JSON.parse(JSON.stringify(poll));
  console.log(poll_data);
}

onMounted(async () => {
  console.log(link.value);
  description.value = props.link.data?.description || "";
  formtype.value = props.link.data?.formtype || "";
  formexpiry_date.value = props.link.data?.formexpiry_date || null;
  isNameRequired.value = props.link.data?.isNameRequired || false;
  get_name.value = props.link.data?.get_name || false;
  isEmailRequired.value = props.link.data?.isEmailRequired || false;
  get_email.value = props.link.data?.get_email || false;
  isMobileRequired.value = props.link.data?.isMobileRequired || false;
  get_mobile.value = props.link.data?.get_mobile || false;
  isMessageRequired.value = props.link.data?.isMessageRequired || false;
  get_message.value = props.link.data?.get_message || false;
  isCountryRequired.value = props.link.data?.isCountryRequired || false;
  get_country.value = props.link.data?.get_country || false;
  responcesEmail.value = props.link.data?.responcesEmail || "";
  googlesheetsToken.value = props.link.data?.googlesheetsToken || "";
  additionaldescription.value = props.link.data?.additionaldescription || "";
  thankyoutext.value = props.link.data?.thankyoutext || "";
  poll_data.value = props.link.data?.poll_data || {
    poll_question: "",
    poll_options: [],
  };
  hireformdata.value = props.link.data?.hireformdata || [];
  ratingformdata.value = props.link.data?.ratingformdata || [];
  feedbackformdata.value = props.link.data?.feedbackformdata || [];
  questions.value = props.link.data?.customformquestions || [];

  googlesheetsToken.value = props.link.google_sheets_url;
  mailchimplistid.value = props.link.mailchimplistid;
  responcesEmail.value = props.link.responces_email;
  storage.value = props.link.responces_storage;
});

const updateFormData = async () => {
  saving.value = true;
  cleanUnwantedData(formtype.value);
  console.log(model.value.data);
  model.value.data = {
    description: description.value,
    formtype: formtype.value,
    formexpiry_date: formexpiry_date.value,
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
    //responcesEmail: responcesEmail.value,
    //googlesheetsToken: googlesheetsToken.value,
    thankyoutext: thankyoutext.value,
    additionaldescription: additionaldescription.value,
    poll_data: poll_data.value,
    ratingformdata: ratingformdata.value,
    feedbackformdata: feedbackformdata.value,
    hireformdata: hireformdata.value,
    customformquestions: questions.value,
  };
  model.value.google_sheets_url = googlesheetsToken.value;
  model.value.mailchimplistid = mailchimplistid.value;
  model.value.responces_email = responcesEmail.value;
  model.value.responces_storage = storage.value;
  console.log(model.value);
  try {
    await store.dispatch("updateFormData", model.value).then(({ data }) => {
      store.commit("notify", {
        type: "success",
        message: "Saved",
      });
    });
    await store.dispatch("getAllLinks");
    saving.value = false;
  } catch (error) {
    console.log(error);
    saving.value = false;
    store.commit("notify", {
      type: "error",
      message: "Failed",
    });
  }
};

async function cleanUnwantedData(category) {
  switch (category) {
    case "Contact form":
      questions.value = [];
      ratingformdata.value = [];
      feedbackformdata.value = [];
      hireformdata = [];
      poll_data.value = { poll_question: "", poll_options: [] };
      return;
    case "Poll":
      questions.value = [];
      ratingformdata.value = [];
      feedbackformdata.value = [];
      hireformdata = [];
      return;
    case "Waiting List":
      questions.value = [];
      ratingformdata.value = [];
      feedbackformdata.value = [];
      hireformdata = [];
      poll_data.value = { poll_question: "", poll_options: [] };
      return;
    case "Feedback form":
      questions.value = [];
      ratingformdata.value = [];

      hireformdata = [];
      poll_data.value = { poll_question: "", poll_options: [] };
      return;
    case "Mailing List":
      questions.value = [];
      ratingformdata.value = [];
      feedbackformdata.value = [];
      hireformdata = [];
      poll_data.value = { poll_question: "", poll_options: [] };
      return;
    case "Rating":
      poll_data.value = { poll_question: "", poll_options: [] };
      questions.value = [];
      feedbackformdata.value = [];
      hireformdata = [];
      return;
    case "Hire":
      poll_data.value = { poll_question: "", poll_options: [] };
      questions.value = [];
      ratingformdata.value = [];
      feedbackformdata.value = [];
      return;
    case "Custom":
      poll_data.value = { poll_question: "", poll_options: [] };
      ratingformdata.value = [];
      feedbackformdata.value = [];
      hireformdata = [];
      return;
    // Handle other categories here if needed
    default:
      return; // Replace 'DefaultComponent' with a fallback component name
  }
}
</script>

<style></style>
