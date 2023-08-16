<template>
    <div class="col-span-full">
        <label
            for="about"
            class="block text-sm font-medium leading-6 text-gray-900"
            >Question</label
        >
        <div class="mt-2">
            <textarea
                v-model="rating_question"
                @change="dataChange"
                id="about"
                name="about"
                rows="3"
                placeholder="Type in your question"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            ></textarea>
        </div>
        <p class="mt-3 text-sm leading-6 text-gray-600">Choose a scale.</p>
        <div class="flex">
            <div>
                <label for="states" class="sr-only">Choose a scale</label>
                <select
                    v-model="scale"
                    @change="dataChange"
                    id="states"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-r-lg border-l-gray-100 dark:border-l-gray-700 border-l-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                    <option selected>Choose a scale</option>
                    <option
                        v-for="scale in ratescale"
                        :key="scale"
                        :value="scale.weight"
                    >
                        {{ scale.weight }}
                    </option>
                </select>
            </div>
            <div>
                <label for="states" class="sr-only">Choose a scale</label>
                <select
                    v-model="shape"
                    @change="dataChange"
                    id="shape"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-r-lg border-l-gray-100 dark:border-l-gray-700 border-l-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                    <option selected>Choose a shape</option>
                    <option
                        v-for="shape in shapes"
                        :key="shape"
                        :value="shape.shape"
                    >
                        {{ shape.shape }}
                    </option>
                </select>
            </div>
        </div>
        <p class="mt-3 text-sm leading-6 text-gray-600">Add rating label.</p>
        <div class="">
            <!--label Data -->
            <div>
                <div class="mb-8">
                    <h4
                        class="text-sm font-semibold mb-1 flex justify-between items-center"
                    >
                        Options

                        <!-- Add new option -->
                        <button
                            type="button"
                            @click="addOption()"
                            class="flex items-center text-xs py-1 px-2 rounded-sm text-white bg-gray-600 hover:bg-gray-700"
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
                            Add Option
                        </button>
                        <!--/ Add new label -->
                    </h4>

                    <div
                        v-if="!labels.length"
                        class="text-xs text-gray-600 text-center py-3"
                    >
                        You don't have any labels defined
                    </div>
                    <!-- label list -->
                    <div
                        v-for="(label, index) in labels"
                        :key="label.uuid"
                        class="flex items-center mb-1"
                    >
                        <span class="w-6 text-sm"> {{ index + 1 }}.</span>
                        <input
                            v-model="label.label"
                            @change="dataChange"
                            type="text"
                            tabindex="1"
                            class="w-full rounded-sm py-1 px-2 text-xs border border-gray-300 focus:border-indigo-500"
                        />
                        <!-- Delete label -->
                        <button
                            type="button"
                            @click="removeLabel(label)"
                            class="h-6 w-6 rounded-full flex items-center justify-center border border-transparent transition-colors hover:border-red-100"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-3 w-3 text-red-500"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                        </button>
                        <!--/ Delete label -->
                    </div>
                    <!--/ label list -->
                </div>
            </div>
            <!--/label Data -->
        </div>
    </div>
</template>

<script setup>
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

let rating_question = ref("");
let scale = ref(0);
let shape = ref("");
let labels = ref([]);

//options getter
function getLabel() {
    return labels.value;
}

//options setter
function setLabel(Labels) {
    labels.value = Labels;
}

//add option
function addLabel() {
    setLabel([...getLabel(), { uuid: uuidv4(), label: "" }]);
    console.log(labels.value);
    dataChange();
}

//remove option
function removeLabel(op) {
    setLabel(getLabel().filter((opt) => opt !== op));
    dataChange();
}

//Emit the data change
function ratingquestionChange() {
    //const data = JSON.parse(JSON.stringify(model.value));
    console.log(scale.value);
    console.log(shape.value);
    console.log(labels.value);
    console.log(rating_question.value);

    //emit("change", data);
}
//Emit the data change
function dataChange() {
    const data = {
        rating_question: rating_question.value,
        scale: scale.value,
        shape: shape.value,
        labels: labels.value,
    };

    emit("change", data);
}

watch(
    () => scale.value,
    (newVal, oldVal) => {
        const currentLabels = getLabel();
        const numLabels = currentLabels.length;

        if (numLabels === 0) {
            // If labels array is empty, add items equal to the new value of scale
            for (let i = 0; i < newVal; i++) {
                addLabel();
            }
        } else if (newVal < numLabels) {
            // If the new value of scale is less than the number of items in the labels array,
            // delete the extra number of items.
            for (let i = numLabels - 1; i >= newVal; i--) {
                removeLabel(currentLabels[i]);
            }
        } else if (newVal > numLabels) {
            // If the new value of scale is more than the number of items in the labels array,
            // add the extra items required to equate the number of labels array items to the value of scale.
            for (let i = numLabels; i < newVal; i++) {
                addLabel();
            }
        }
    }
);

const ratescale = [
    { weight: 1 },
    { weight: 2 },
    { weight: 3 },
    { weight: 4 },
    { weight: 5 },
    { weight: 6 },
    { weight: 7 },
    { weight: 8 },
    { weight: 9 },
    { weight: 10 },
];
const shapes = [
    { shape: "smiley" },
    { shape: "star" },
    { shape: "thumb" },
    { shape: "heart" },
];
</script>

<style></style>
