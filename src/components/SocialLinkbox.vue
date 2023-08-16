<template>
    <Disclosure v-slot="{ open }">
        <DisclosureButton
            class="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
        >
            <button
                v-if="link.name === 'Twitter'"
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
                <span class="'font-medium' 'font-normal' 'block truncate'">{{
                    link.name
                }}</span>
            </button>

            <button
                v-if="link.name === 'Instagram'"
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
                <span class="'font-medium' 'font-normal' 'block truncate'">{{
                    link.name
                }}</span>
            </button>

            <button
                v-if="link.name === 'Github'"
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
                <span class="'font-medium' 'font-normal' 'block truncate'">{{
                    link.name
                }}</span>
            </button>

            <button
                v-if="link.name === 'Facebook'"
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
                <span class="'font-medium' 'font-normal' 'block truncate'">{{
                    link.name
                }}</span>
            </button>

            <ChevronUpIcon
                :class="open ? 'rotate-180 transform' : ''"
                class="h-5 w-5 text-purple-500"
            />
        </DisclosureButton>
        <DisclosurePanel class="px-4 pt-4 pb-2 text-sm text-gray-500">
            <div class="flex items-center w-full">
                <input
                    v-if="editLink(selectedId, selectedStr)"
                    :id="`editLinkInput-${link.id}`"
                    type="text"
                    v-model="url"
                    class="w-full text-sm focus:outline-none"
                />
                <div v-else class="flex items-center w-[calc(100%-2px)]">
                    <div
                        @click="
                            url = link.url;
                            $emit('updatedInput', {
                                id: link.id,
                                str: 'isLink',
                            });
                        "
                        class="mr-2 truncate cursor-pointer"
                        :class="isMobile ? 'text-lg' : 'text-sm'"
                    >
                        {{ link.url }}
                    </div>
                    <Icon
                        @click="
                            $emit('updatedInput', {
                                id: link.id,
                                str: 'isLink',
                            })
                        "
                        class="cursor-pointer min-w-[17px]"
                        :class="isMobile ? 'min-w-[23px]' : 'min-w-[17px]'"
                        name="octicon:pencil-24"
                        :size="isMobile ? '23' : '17'"
                        color="#676B5F"
                    />
                </div>
            </div>
        </DisclosurePanel>
    </Disclosure>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";

import { useStore } from "vuex";
const store = useStore();

const props = defineProps({
    link: Object,
    selectedId: { type: Number, default: 0 },
    selectedStr: { type: String, default: "" },
});
const { link, selectedId, selectedStr } = toRefs(props);

const emit = defineEmits(["updatedInput"]);

let name = ref("");
let url = ref("");
let data = ref(null);
let isDelete = ref(false);
let openCropper = ref(false);
let isUploadImage = ref(false);
let errors = ref(null);

onMounted(() => {
    name.value = link.value.name;
    url.value = link.value.url;

    document.addEventListener("mouseup", function (e) {
        let editNameInput = document.getElementById(
            `editNameInput-${link.value.id}`
        );
        if (
            editNameInput &&
            !editNameInput.contains(e.target) &&
            selectedStr.value == "isName" &&
            link.value.id == selectedId.value
        ) {
            editNameInput.blur();
            emit("updatedInput", { id: 0, str: "" });
        }
    });

    document.addEventListener("mouseup", function (e) {
        let editLinkInput = document.getElementById(
            `editLinkInput-${link.value.id}`
        );
        if (
            editLinkInput &&
            !editLinkInput.contains(e.target) &&
            selectedStr.value == "isLink" &&
            link.value.id == selectedId.value
        ) {
            editLinkInput.blur();
            emit("updatedInput", { id: 0, str: "" });
        }
    });
});

const updateLink = useDebounce(async () => {
    try {
        await store.dispatch(
            "updateLink",
            link.value.id,
            name.value,
            url.value
        );
        await store.dispatch("getAllLinks");
    } catch (error) {
        console.log(error);
        errors.value = error.response.data.errors;
    }
}, 500);

const changeInput = (str, linkIdNameString) => {
    if (selectedId.value == link.value.id && selectedStr.value == str) {
        setTimeout(() => {
            document
                .getElementById(`${linkIdNameString}-${link.value.id}`)
                .focus();
            return;
        }, 100);
    }
};

const editName = (selectedId, selectedStr) => {
    if (store.state.user.isMobile) {
        store.state.user.updatedLinkId = selectedId;
        return false;
    } else if (selectedId == link.value.id && selectedStr == "isName") {
        return true;
    }
    return false;
};

const editLink = (selectedId, selectedStr) => {
    if (store.state.user.isMobile) {
        store.state.user.updatedLinkId = selectedId;
        return false;
    } else if (selectedId == link.value.id && selectedStr == "isLink") {
        return true;
    }
    return false;
};

const editImage = () => {
    if (store.state.user.isMobile) {
        store.state.user.updatedLinkId = link.value.id;
    } else {
        isUploadImage.value = true;
        isDelete.value = false;
    }
};

const updateLinkImage = async () => {
    try {
        await store.dispatch("updateLinkImage", data.value);
        await store.dispatch("getAllLinks");
        setTimeout(() => (openCropper.value = false), 300);
    } catch (error) {
        console.log(error);
    }
};

const deleteLink = async () => {
    let res = confirm("Are you sure you want to delete this link?");
    try {
        if (res) {
            await store.dispatch("deleteLink", link.value.id);
            await store.dispatch("getAllLinks");
        }
    } catch (error) {
        console.log(error);
    }
};

watch(
    () => name.value,
    () => {
        if (name.value && name.value !== link.value.name) {
            updateLink();
        }
    }
);

watch(
    () => url.value,
    () => {
        if (url.value && url.value !== link.value.url) {
            updateLink();
        }
    }
);

watch(
    () => selectedId.value,
    () => {
        if (selectedId.value) {
            changeInput("isName", "editNameInput");
            changeInput("isLink", "editLinkInput");
        }
    }
);

watch(
    () => selectedStr.value,
    () => {
        if (selectedStr.value) {
            changeInput("isName", "editNameInput");
            changeInput("isLink", "editLinkInput");
        }
    }
);

watch(
    () => updatedLinkId.value,
    (val) => {
        if (!val) {
            emit("updatedInput", { id: 0, str: "" });
        }
    }
);

watch(
    () => data.value,
    async () => await updateLinkImage()
);
</script>
