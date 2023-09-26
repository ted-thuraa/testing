<template>
  <TransitionRoot as="template" :show="isPhoneFormOpen">
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
                class="pointer-events-auto relative w-screen max-w-md bg-white rounded-t-[1.5rem]"
              >
                <button
                  type="button"
                  class="mx-4 my-2 p-1 relative rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                  @click="$emit('closePhoneForm')"
                >
                  <span class="absolute -inset-2.5" />
                  <span class="sr-only">Close panel</span>
                  <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                </button>
                <div
                  class="max-w-md h-[740px] pb-10 overflow-hidden overflow-x-hidden mb-4 rounded-[24px] transition-all duration-500 ease-in"
                >
                  <div
                    class="flex flex-col items-center relative h-full overflow-auto pb-1 w-full"
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
                        <div class="mx-auto mt-10 max-w-xl sm:mt-20">
                          <div
                            class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2"
                          >
                            <div
                              v-if="link.data.get_name"
                              class="sm:col-span-2"
                            >
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
                            <div
                              v-if="link.data.get_email"
                              class="sm:col-span-2"
                            >
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
                                <a
                                  href="#"
                                  class="font-semibold text-indigo-600"
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
                      <div class="isolate bg-white py-2">
                        <div class="mx-auto max-w-2xl text-center">
                          <h2
                            class="text-2xl font-bold tracking-tight text-gray-900"
                          >
                            Hire me
                          </h2>
                          <p class="mt-2 text-lg leading-8 text-gray-600">
                            {{ link.data.description }}
                          </p>
                        </div>
                        <div class="mx-auto mt-4 max-w-xl">
                          <div
                            class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2"
                          >
                            <div class="w-full py-1">
                              <div class="mx-auto w-full max-w-md">
                                <RadioGroup>
                                  <RadioGroupLabel class="sr-only"
                                    >work</RadioGroupLabel
                                  >
                                  <div class="space-y-2">
                                    <RadioGroupOption
                                      v-if="
                                        link.data.hireformdata.freelance_work
                                      "
                                      as="template"
                                      value="Freelance"
                                      v-slot="{ active, checked }"
                                    >
                                      <div
                                        :class="[
                                          active
                                            ? ' ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300'
                                            : '',
                                          checked
                                            ? 'bg-purple-700 text-white bg-opacity-75 '
                                            : 'bg-gray-50 ',
                                        ]"
                                        class="relative flex cursor-pointer border border-gray-200 rounded-[20rem] px-5 py-2 focus:outline-none"
                                      >
                                        <div
                                          class="flex w-full items-center justify-between"
                                        >
                                          <div class="flex items-center">
                                            <div class="text-sm">
                                              <RadioGroupLabel
                                                as="p"
                                                :class="
                                                  checked
                                                    ? 'text-white'
                                                    : 'text-gray-900'
                                                "
                                                class="font-medium"
                                              >
                                                Hire for freelance
                                              </RadioGroupLabel>
                                            </div>
                                          </div>
                                          <div
                                            v-show="checked"
                                            class="shrink-0 text-white"
                                          >
                                            <svg
                                              class="h-6 w-6"
                                              viewBox="0 0 24 24"
                                              fill="none"
                                            >
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
                                          </div>
                                        </div>
                                      </div>
                                    </RadioGroupOption>
                                    <RadioGroupOption
                                      v-if="
                                        link.data.hireformdata.fulltime_work
                                      "
                                      as="template"
                                      value="Full time"
                                      v-slot="{ active, checked }"
                                    >
                                      <div
                                        :class="[
                                          active
                                            ? ' ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300'
                                            : '',
                                          checked
                                            ? 'bg-purple-700 text-white bg-opacity-75 '
                                            : 'bg-gray-50 ',
                                        ]"
                                        class="relative flex cursor-pointer border border-gray-200 rounded-[20rem] px-5 py-2 focus:outline-none"
                                      >
                                        <div
                                          class="flex w-full items-center justify-between"
                                        >
                                          <div class="flex items-center">
                                            <div class="text-sm">
                                              <RadioGroupLabel
                                                as="p"
                                                :class="
                                                  checked
                                                    ? 'text-white'
                                                    : 'text-gray-900'
                                                "
                                                class="font-medium"
                                              >
                                                Hire full-time
                                              </RadioGroupLabel>
                                            </div>
                                          </div>
                                          <div
                                            v-show="checked"
                                            class="shrink-0 text-white"
                                          >
                                            <svg
                                              class="h-6 w-6"
                                              viewBox="0 0 24 24"
                                              fill="none"
                                            >
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
                                          </div>
                                        </div>
                                      </div>
                                    </RadioGroupOption>
                                  </div>
                                </RadioGroup>
                              </div>
                            </div>
                            <div class="col-span-full">
                              <h2
                                class="text-base font-semibold leading-7 text-gray-900"
                              >
                                Describe what you're looking for
                              </h2>
                              <div class="mt-1">
                                <textarea
                                  id="about"
                                  name="about"
                                  rows="3"
                                  placeholder=""
                                  class="block w-full rounded-md bg-gray-50 border border-gray-100 focus:border-purple-500 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                ></textarea>
                              </div>
                              <p
                                class="mt-3 text-base font-semibold leading-7 text-gray-900"
                              >
                                Timeline.
                              </p>
                              <div class="flex w-full">
                                <div class="ml-1 w-full">
                                  <Listbox>
                                    <div class="relative mt-1">
                                      <ListboxButton
                                        class="relative w-full min-h-[40px] cursor-default rounded-lg bg-gray-50 py-2 pl-3 pr-10 text-left border-2 border-gray-100 focus:border-purple-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"
                                      >
                                        <span
                                          class="min-w-[60px] pl-6 block truncate"
                                        >
                                          {{ scale }}</span
                                        >
                                        <span
                                          class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
                                        >
                                          <ChevronUpDownIcon
                                            class="h-5 w-5 text-gray-400"
                                            aria-hidden="true"
                                          />
                                        </span>
                                      </ListboxButton>

                                      <transition
                                        leave-active-class="transition duration-100 ease-in"
                                        leave-from-class="opacity-100"
                                        leave-to-class="opacity-0"
                                      >
                                        <ListboxOptions
                                          class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                                        >
                                          <ListboxOption
                                            v-slot="{ active, selected }"
                                            v-for="timeline in hiretimeline"
                                            :key="timeline"
                                            :value="timeline.timeline"
                                            as="template"
                                          >
                                            <li
                                              :class="[
                                                active
                                                  ? 'bg-amber-100 text-amber-900'
                                                  : 'text-gray-900',
                                                'relative cursor-default select-none py-2 pl-10 pr-4',
                                              ]"
                                            >
                                              <span
                                                :class="[
                                                  selected
                                                    ? 'font-medium'
                                                    : 'font-normal',
                                                  'block truncate',
                                                ]"
                                              >
                                                {{ timeline.timeline }}</span
                                              >
                                              <span
                                                v-if="selected"
                                                class="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600"
                                              >
                                                <CheckIcon
                                                  class="h-5 w-5"
                                                  aria-hidden="true"
                                                />
                                              </span>
                                            </li>
                                          </ListboxOption>
                                        </ListboxOptions>
                                      </transition>
                                    </div>
                                  </Listbox>
                                </div>
                              </div>
                              <p
                                v-if="link.data.hireformdata.show_availability"
                                class="mt-2 text-sm leading-6 text-gray-600"
                              >
                                Available to start
                                {{ link.data.hireformdata.availability }}.
                              </p>
                              <p
                                class="mt-3 text-base font-semibold leading-7 text-gray-900"
                              >
                                Budget.
                              </p>
                              <div class="relative mt-1">
                                <div
                                  class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
                                >
                                  <span class="w-4 h-4 text-gray-500"> $ </span>
                                </div>

                                <input
                                  id="budget"
                                  name="budget"
                                  placeholder=""
                                  class="block w-full rounded-md bg-gray-50 border border-gray-100 focus:border-purple-500 pl-6 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                />
                              </div>
                              <p
                                v-if="link.data.hireformdata.show_minimumrate"
                                class="mt-2 text-sm leading-6 text-gray-600"
                              >
                                minimum rate is
                                {{
                                  link.data.hireformdata.formated_minimum_rate
                                }}.
                              </p>
                            </div>
                            <div
                              v-if="link.data.get_name"
                              class="sm:col-span-2"
                            >
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
                            <div
                              v-if="link.data.get_email"
                              class="sm:col-span-2"
                            >
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
                                <a
                                  href="#"
                                  class="font-semibold text-indigo-600"
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
      </div>
    </Dialog>
  </TransitionRoot>
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
import {
  RadioGroup,
  RadioGroupLabel,
  RadioGroupDescription,
  RadioGroupOption,
} from "@headlessui/vue";
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

const emit = defineEmits(["closePhoneForm"]);

const props = defineProps({
  link: Object,
  theme: Object,
  isPhoneFormOpen: Boolean,
});

//const { isFormOpen } = toRefs(props);
const { link, isPhoneFormOpen } = toRefs(props);
console.log(isPhoneFormOpen);
console.log(link);

let clientmail = ref("");
let errors = ref(null);

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

const hiretimeline = [
  { timeline: "Immediately" },
  { timeline: "Within next week" },
  { timeline: "Within next two weeks" },
  { timeline: "Next month" },
];
</script>
