<template>
    <div class="relative w-72">
        <Listbox v-model="selectedapp">
            <div class="relative mt-1">
                <ListboxButton
                    class="relative w-full cursor-default rounded-lg bg-gray-900 py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"
                >
                    <span class="block truncate text-white">{{
                        selectedapp.name
                    }}</span>
                    <span
                        class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
                    >
                        <!-- <ChevronUpDownIcon
                class="h-5 w-5 text-gray-400"
                aria-hidden="true"
              /> -->
                    </span>
                </ListboxButton>

                <transition
                    leave-active-class="transition duration-100 ease-in"
                    leave-from-class="opacity-100"
                    leave-to-class="opacity-0"
                >
                    <ListboxOptions
                        class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-gray-900 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                    >
                        <ListboxOption
                            v-slot="{ active, selected }"
                            v-for="app in socialApps"
                            :key="app.name"
                            :value="app"
                            as="template"
                        >
                            <li
                                :class="[
                                    active
                                        ? 'bg-gray-600 text-gray-100'
                                        : 'text-gray-200',
                                    'relative cursor-default select-none py-2 pl-10 pr-4',
                                ]"
                            >
                                <button
                                    v-if="app.name === 'Twitter'"
                                    class="flex flex-row items-center btn btn-square fill-primary btn-ghost"
                                >
                                    <svg
                                        enable-background="new 0 0 24 24"
                                        viewBox="0 0 24 24"
                                        class="w-6 h-6 mr-3"
                                        fill="currenColor"
                                    >
                                        <path
                                            d="M8.1,21.034A12.717,12.717,0,0,1,1.23,19.019a.5.5,0,0,1,.329-.917,8.273,8.273,0,0,0,4.992-1,4.807,4.807,0,0,1-3.173-3.13.5.5,0,0,1,.348-.636A4.821,4.821,0,0,1,1.843,9.523a.548.548,0,0,1,.247-.458.506.506,0,0,1,.5-.034l.091.049A4.816,4.816,0,0,1,2.529,4a.507.507,0,0,1,.393-.247.5.5,0,0,1,.427.183,11.781,11.781,0,0,0,7.9,4.27c-.013-.144-.02-.289-.02-.435a4.81,4.81,0,0,1,8.116-3.493,8.157,8.157,0,0,0,2.32-.93.5.5,0,0,1,.73.583,4.781,4.781,0,0,1-.662,1.32c.191-.067.378-.143.563-.225a.5.5,0,0,1,.585.135.5.5,0,0,1,.034.6,9.2,9.2,0,0,1-2.057,2.2c0,.1,0,.208,0,.313A12.636,12.636,0,0,1,8.1,21.034ZM3.527,19.105a11.72,11.72,0,0,0,4.577.929A11.645,11.645,0,0,0,19.863,8.275c0-.179,0-.357-.012-.533a.5.5,0,0,1,.207-.43,8.181,8.181,0,0,0,.959-.81,9.068,9.068,0,0,1-.932.16.5.5,0,0,1-.316-.925,3.857,3.857,0,0,0,.977-.837,9.013,9.013,0,0,1-1.465.418.5.5,0,0,1-.461-.148,3.812,3.812,0,0,0-6.491,3.473.5.5,0,0,1-.1.434.489.489,0,0,1-.409.179A12.772,12.772,0,0,1,3.09,5.167,3.812,3.812,0,0,0,4.573,9.591a.5.5,0,0,1,.2.569.523.523,0,0,1-.491.347,4.772,4.772,0,0,1-1.36-.242A3.813,3.813,0,0,0,5.9,13.257a.5.5,0,0,1,.033.972,6.63,6.63,0,0,1-1.279.17,3.809,3.809,0,0,0,3.236,1.914.5.5,0,0,1,.3.894A9.081,9.081,0,0,1,3.527,19.105Z"
                                        ></path>
                                    </svg>
                                    <span
                                        :class="[
                                            selected
                                                ? 'font-medium'
                                                : 'font-normal',
                                            'block truncate',
                                        ]"
                                        >{{ app.name }}</span
                                    ></button
                                ><button
                                    v-if="app.name === 'Github'"
                                    class="flex flex-row items-center btn btn-square fill-base-content btn-ghost"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="w-6 h-6 mr-3"
                                        fill="currenColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                                        ></path>
                                    </svg>
                                    <span
                                        :class="[
                                            selected
                                                ? 'font-medium'
                                                : 'font-normal',
                                            'block truncate',
                                        ]"
                                        >{{ app.name }}</span
                                    ></button
                                ><button
                                    v-if="app.name === 'Youtube'"
                                    class="flex flex-row items-center btn btn-square fill-base-content btn-ghost"
                                >
                                    <svg
                                        viewBox="0 0 24 24"
                                        class="w-6 h-6 mr-3"
                                        fill="currenColor"
                                    >
                                        <path
                                            d="M12,20.55c-.3,0-7.279-.006-9.115-.5A3.375,3.375,0,0,1,.5,17.665,29.809,29.809,0,0,1,0,12,29.824,29.824,0,0,1,.5,6.334,3.375,3.375,0,0,1,2.885,3.948c1.836-.492,8.819-.5,9.115-.5s7.279.006,9.115.5A3.384,3.384,0,0,1,23.5,6.334,29.97,29.97,0,0,1,24,12a29.97,29.97,0,0,1-.5,5.666,3.384,3.384,0,0,1-2.388,2.386C19.279,20.544,12.3,20.55,12,20.55Zm0-16.1c-.072,0-7.146.006-8.857.464A2.377,2.377,0,0,0,1.464,6.593,29.566,29.566,0,0,0,1,12a29.566,29.566,0,0,0,.464,5.407,2.377,2.377,0,0,0,1.679,1.679c1.711.458,8.785.464,8.857.464s7.146-.006,8.857-.464a2.377,2.377,0,0,0,1.679-1.679A29.66,29.66,0,0,0,23,12a29.66,29.66,0,0,0-.464-5.407h0a2.377,2.377,0,0,0-1.679-1.679C19.146,4.456,12.071,4.45,12,4.45ZM9.7,15.95a.5.5,0,0,1-.5-.5V8.55a.5.5,0,0,1,.75-.433l5.975,3.45a.5.5,0,0,1,0,.866L9.95,15.883A.5.5,0,0,1,9.7,15.95Zm.5-6.534v5.168L14.675,12Z"
                                        ></path></svg
                                    ><span
                                        :class="[
                                            selected
                                                ? 'font-medium'
                                                : 'font-normal',
                                            'block truncate',
                                        ]"
                                        >{{ app.name }}</span
                                    ></button
                                ><button
                                    v-if="app.name === 'Linkedin'"
                                    class="flex flex-row items-center btn btn-square fill-base-content btn-ghost"
                                >
                                    <svg
                                        viewBox="0 0 24 24"
                                        class="w-6 h-6 mr-3"
                                        fill="currenColor"
                                    >
                                        <path
                                            d="M4.425,1.671A2.738,2.738,0,0,0,1.5,4.4,2.71,2.71,0,0,0,4.369,7.128H4.4a2.734,2.734,0,1,0,.028-5.457ZM4.4,6.128H4.369a1.736,1.736,0,1,1,.056-3.457A1.737,1.737,0,1,1,4.4,6.128Z"
                                        ></path>
                                        <path
                                            d="M6.541,8.431H2.253a.5.5,0,0,0-.5.5v12.9a.5.5,0,0,0,.5.5H6.541a.5.5,0,0,0,.5-.5V8.931A.5.5,0,0,0,6.541,8.431Zm-.5,12.9H2.753V9.431H6.041Z"
                                        ></path>
                                        <path
                                            d="M17.064,8.128A4.691,4.691,0,0,0,13.7,9.362V8.931a.5.5,0,0,0-.5-.5H8.914a.5.5,0,0,0-.5.523c.053,1.183,0,12.756,0,12.873a.5.5,0,0,0,.5.5H13.2a.5.5,0,0,0,.5-.5v-7.2a2.749,2.749,0,0,1,.1-.86,1.869,1.869,0,0,1,1.737-1.254c.413,0,1.671,0,1.671,2.417v6.9a.5.5,0,0,0,.5.5H22a.5.5,0,0,0,.5-.5v-7.4C22.5,10.485,20.467,8.128,17.064,8.128Zm4.436,13.2H18.213v-6.4c0-2.973-1.673-3.417-2.671-3.417a2.83,2.83,0,0,0-2.664,1.878,3.253,3.253,0,0,0-.177,1.236v6.7H9.416c.009-2.058.04-9.654.009-11.9H12.7v1.328a.5.5,0,0,0,.92.272,3.769,3.769,0,0,1,3.443-1.9c2.819,0,4.436,1.934,4.436,5.305Z"
                                        ></path></svg
                                    ><span
                                        :class="[
                                            selected
                                                ? 'font-medium'
                                                : 'font-normal',
                                            'block truncate',
                                        ]"
                                        >{{ app.name }}</span
                                    ></button
                                ><button
                                    v-if="app.name === 'Email'"
                                    class="flex flex-row items-center btn btn-square fill-base-content btn-ghost"
                                >
                                    <svg
                                        viewBox="0 0 24 24"
                                        class="w-6 h-6 mr-3"
                                        fill="currenColor"
                                    >
                                        <path
                                            d="M18.821,20.5H5.179A3.683,3.683,0,0,1,1.5,16.821V7.179A3.683,3.683,0,0,1,5.179,3.5H18.821A3.683,3.683,0,0,1,22.5,7.179v9.642A3.683,3.683,0,0,1,18.821,20.5ZM5.179,4.5A2.682,2.682,0,0,0,2.5,7.179v9.642A2.682,2.682,0,0,0,5.179,19.5H18.821A2.682,2.682,0,0,0,21.5,16.821V7.179A2.682,2.682,0,0,0,18.821,4.5Z"
                                        ></path>
                                        <path
                                            d="M12,14.209a.5.5,0,0,1-.346-.138L4.286,7.028a.5.5,0,0,1,.691-.723L12,13.018l7.023-6.713a.5.5,0,1,1,.691.723l-7.368,7.043A.5.5,0,0,1,12,14.209Z"
                                        ></path>
                                        <path
                                            d="M4.7,17.833a.5.5,0,0,1-.347-.86l5.54-5.31a.5.5,0,0,1,.692.722L5.048,17.694A.5.5,0,0,1,4.7,17.833Z"
                                        ></path>
                                        <path
                                            d="M19.3,17.832a.5.5,0,0,1-.346-.139l-5.538-5.308a.5.5,0,0,1,.692-.722l5.538,5.308a.5.5,0,0,1-.346.861Z"
                                        ></path>
                                    </svg>
                                    <span
                                        :class="[
                                            selected
                                                ? 'font-medium'
                                                : 'font-normal',
                                            'block truncate',
                                        ]"
                                        >{{ app.name }}</span
                                    >
                                </button>

                                <span
                                    v-if="selected"
                                    class="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600"
                                >
                                    <!-- <CheckIcon class="h-5 w-5" aria-hidden="true" /> -->
                                </span>
                            </li>
                        </ListboxOption>
                    </ListboxOptions>
                </transition>
            </div>
        </Listbox>
    </div>
</template>

<script setup>
import { ref, watch, computed, onMounted, toRefs } from "vue";

import {
    Listbox,
    ListboxLabel,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
} from "@headlessui/vue";

const socialApps = [
    { name: "Add Icon" },
    { name: "Twitter" },
    { name: "Github" },
    { name: "Youtube" },
    { name: "Linkedin" },
    { name: "Email" },
];
const selectedapp = ref(socialApps[0]);
const iconSelected = ref(null);

const emit = defineEmits(["iconSelected"]);

watch(
    () => selectedapp.value,
    (newValue) => {
        console.log(newValue.name);
        iconSelected.value = newValue.name;

        emit("iconSelected", iconSelected.value);
        iconSelected.value = null;
    }
);
</script>
