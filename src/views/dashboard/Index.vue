<template>
    <div id="AdminPage" class="flex h-[100vh] pl-4 bg-white overflow-y-auto">
        <div class="md:w-[calc(100%-500px)] w-full md:pt-10 pt-14">
            <div class="items max-w-[750px] mx-auto pb-24">
                <div id="ProfileSection">
                    <div class="w-full">
                        <h2 class="text-black text-[2rem] font-bold">
                            Dashboard
                        </h2>
                    </div>
                    <div
                        class="font-semibold pb-4 text-gray-700"
                        :class="
                            store.state.isMobile
                                ? 'mt-8 text-2xl'
                                : 'mt-20 md:mt-8 text-xl'
                        "
                    >
                        Profile
                    </div>

                    <div class="w-full rounded-[20px] card-light-shadow p-6">
                        <div class="flex gap-4">
                            <div class="relative inline-flex group">
                                <div class="w-[100px] h-[100px]">
                                    <img
                                        class="rounded-[100%] w-full h-full object-cover"
                                        :src="store.state.user.image"
                                    />
                                </div>

                                <div
                                    class="w-full absolute inset-0 flex justify-center items-center rounded-full bg-transparent group-hover:bg-gray-300/50 duration-200 cursor-pointer"
                                >
                                    <button
                                        @click="openCropper = true"
                                        class="flex items-center justify-center p-2 rounded-md bg-neutral-400/50 border-neutral/50 group-hover:bg-neutral-800/50 group-hover:border-neutral"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="currentColor"
                                            class="w-6 h-6"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
                                            />
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            <!-- eslint-disable -->
                            <div class="flex flex-col">
                                <div
                                    class="w-full mt-4 font-semibold text-[6rem] text-black"
                                >
                                    <input
                                        class="inputs !text-[1.5rem] bg-transparent focus:bg-gray-50 focus:border-opacity-0 focus:border-gray-100 text-gray-900 text-sm rounded-lg focus:ring-blue-50 block pl-4 p-2.5"
                                        placeholder="Full name"
                                        v-model="fullname"
                                        @change="updateUserDetails"
                                        inputType="text"
                                        :max="25"
                                    />
                                </div>
                                <div class="mt-2 pl-4">
                                    <span
                                        class="font-medium text-sm text-gray-600"
                                        >@{{ username }}</span
                                    >
                                </div>
                            </div>
                        </div>

                        <div class="mt-4">
                            <textarea
                                v-model="bio"
                                @change="updateUserDetails"
                                rows="4"
                                maxlength="80"
                                placeholder="Type your bio here ..."
                                class="w-full inputs font-medium !text-[0.98rem] bg-transparent focus:bg-gray-50 focus:border-opacity-0 focus:border-gray-100 text-gray-900 text-sm rounded-lg focus:ring-blue-50 block pl-4 p-2.5 resize-none"
                            ></textarea>
                        </div>

                        <div
                            class="flex items-center justify-end text-[#676B5F] text-[13px]"
                        >
                            {{ bioLengthComputed }}/80
                        </div>
                        <div></div>

                        <div
                            class="mt-6"
                            v-for="link in store.state.socialLinks"
                            :key="link"
                        >
                            <SocialLinkbox
                                v-if="link"
                                :link="link"
                                :selectedId="selectedInput.id"
                                :selectedStr="selectedInput.str"
                                @updatedInput="updatedInput"
                            />
                        </div>
                    </div>
                </div>
                <button
                    v-if="store.state.user.isMobile || !showAddLink"
                    @click="openSelectLinkTypeModal"
                    class="flex items-center justify-center w-full py-3 rounded-full text-white font-semibold bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300"
                    :class="
                        store.state.user.isMobile
                            ? 'mt-8 text-xl'
                            : 'mt-20 md:mt-8'
                    "
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        v-if="!store.state.isMobile"
                        class="w-6 h-6"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 6v12m6-6H6"
                        />
                    </svg>

                    <!-- <Icon
                        v-if="!store.state.isMobile"
                        name="mdi:plus"
                        class="mr-0.5"
                        size="25"
                    /> -->
                    <span v-if="!store.state.isMobile">Add</span>
                    <span v-if="store.state.isMobile">Add new</span>
                </button>
                <!-- <button
                    type="button"
                    @click="openSelectLinkTypeModal"
                    class="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                >
                    Open dialog
                </button> -->

                <SelectLinkType
                    :isSelectLinkTypeOpen="isSelectLinkTypeOpen"
                    @closeSelectLinkTypeModal="closeSelectLinkTypeModal"
                    @AddLink="handleSelectedItem"
                />

                <AddLink
                    v-if="!store.state.user.isMobile"
                    :category="category"
                    @close="showAddLink = false"
                    :class="[
                        {
                            'mt-20 md:mt-8 mb-12 max-h-[1000px] transition-all duration-300 ease-in':
                                showAddLink,
                        },
                        {
                            'max-h-0 transition-all duration-300 ease-out':
                                !showAddLink,
                        },
                    ]"
                />

                <draggable
                    v-model="sortedLinkItems"
                    tag="transition-group"
                    :component-data="{ name: 'flip-list', type: 'transition' }"
                    @end="onEnd"
                    ghost-class="ghost"
                    class="list-group"
                >
                    <template #item="{ element }" class="sortable">
                        <div class="list-group-item">
                            <component
                                :is="getComponentName(element.category)"
                                :link="element"
                                :selectedId="selectedInput.id"
                                :selectedStr="selectedInput.str"
                                @updatedInput="updatedInput"
                                class="mt-6"
                            />
                        </div>
                    </template>
                </draggable>
                <div class="text-black">{{ oldIndex }}</div>
                <div class="text-black">{{ newIndex }}</div>
            </div>
        </div>

        <Iphone14Display />
    </div>
    <CropperModal
        v-if="openCropper"
        @data="data = $event"
        @close="openCropper = false"
    />
</template>

<script setup>
import draggable from "vuedraggable";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import { ChevronDownIcon } from "@heroicons/vue/20/solid";
import SelectLinkType from "../../components/popovers/SelectLinkType.vue";
import Iphone14Display from "../../components/Iphone14Display.vue";
import AddLink from "../../components/AddLink.vue";
import LinkBox from "../../components/Linkbox.vue";
import ImageLinkbox from "../../components/ImageLinkbox.vue";
import QuoteLinkbox from "../../components/QuoteLinkbox.vue";
import HeaderLinkbox from "../../components/HeaderLinkbox.vue";
import FormLinkbox from "../../components/FormLinkbox.vue";
import PortfolioLinkbox from "../../components/PortfolioLinkbox.vue";
import VideoLinkbox from "../../components/VideoLinkbox.vue";
import MapLinkbox from "../../components/MapLinkbox.vue";
import StoreLinkbox from "../../components/StoreLinkbox.vue";
import TextInput from "../../components/TextInput.vue";
import SocialLinkbox from "../../components/SocialLinkbox.vue";
import SocialIconBox from "../../components/SocialIconBox.vue";
import StartupLinkbox from "../../components/StartupLinkBox.vue";
import CropperModal from "../../components/CropperModal.vue";
import SelectSocialIcon from "../../components/SelectSocialIcon.vue";
import debounce from "lodash/debounce";
import { ref, watch, computed, onMounted, isProxy, toRaw, nextTick } from "vue";
import { useStore } from "vuex";

import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
} from "@headlessui/vue";
import MapLinkboxVue from "../../components/MapLinkbox.vue";

const store = useStore();

const linkitems = computed(() =>
    store.state.linkitems.data.slice().sort((a, b) => a.order - b.order)
);

store.dispatch("getAllLinks");

let fullname = ref("");
let username = ref("");
let description = ref("");
let url = ref("");
let bio = ref("");
let data = ref(null);
let errors = ref("");
let isBioFocused = ref(false);
let openCropper = ref(false);
let isOpen = ref(false);
let Links = ref([]);
let socialLinks = ref([]);
let selectedIconName = ref(null);
let selectedInput = ref({ id: 0, str: "" });
let showAddLink = ref(false);
let showAddSocialIconLink = ref(false);
let isSelectLinkTypeOpen = ref(false);
let category = ref("");
let sortedLinkItems = ref([]);
let oldIndex = ref("");
let newIndex = ref("");

function onEnd(event) {
    console.log(event);

    // Get the new order of the dragged skill
    const newOrder = event.newIndex;
    // Get the index of the skill that was dragged
    const oldIndex = event.oldIndex;
    // Get the skill that was dragged
    //const draggedSkill = skills.value[oldIndex];

    // Reorder the skills array to reflect the new order
    //skills.value.splice(newOrder, 0, skills.value.splice(oldIndex, 1)[0]);

    // Update the order property of all skills based on their index
    console.log(sortedLinkItems);
    sortedLinkItems.value.forEach((link, index) => {
        link.order = index;
    });
    console.log(sortedLinkItems.value);
    updateLinksOrder();
    //store.dispatch("updateLinksOrder", linkitems.value.data);
    //await store.dispatch("getUser");
}

const onDragEnd = (evt) => {};

function updateLinksOrder() {
    store.dispatch("updateLinksOrder", sortedLinkItems.value);
}
function closeSelectLinkTypeModal() {
    isSelectLinkTypeOpen.value = false;
}
function openSelectLinkTypeModal() {
    isSelectLinkTypeOpen.value = true;
}

function closeModal() {
    isOpen.value = false;
}

function openModal() {
    console.log("clicked");
    isOpen.value = true;
    console.log(isOpen.value);
}

function handleSelectedItem(payload) {
    showAddLink.value = true;
    isSelectLinkTypeOpen.value = false;
    console.log(payload.category);
    category.value = payload.category;
}

async function setDefaults() {
    await store.dispatch("getAllLinks");
    await store.dispatch("getUser");
}

onMounted(async () => {
    await setDefaults();
    fullname.value = store.state.user.fullname;
    username.value = store.state.user.username;
    bio.value = store.state.user.bio;
    const linkitems = computed(() =>
        store.state.linkitems.data.slice().sort((a, b) => a.order - b.order)
    );
    sortedLinkItems.value = linkitems.value;
    console.log(fullname.value);
});

//fullname.value = computed(() => store.state.user.fullname);
//username.value = computed(() => store.state.user.username);
//bio.value = computed(() => store.state.user.bio);
if (isProxy(store.state.user.allLinks)) {
    Links = toRaw(store.state.user.allLinks);
}
//Links = computed(() => store.state.user.allLinks);
socialLinks = computed(() => store.state.user.socialLinks);
console.log(fullname.value);
console.log(store.state.user.name);

const updateUserDetails = debounce(async () => {
    try {
        console.log(bio.value);

        await store.dispatch("updatePageDetails", {
            fullname: fullname.value,
            username: username.value,
            bio: bio.value,
        });
        //await store.dispatch("getUser");
    } catch (error) {
        console.log(error);
        errors.value = error.response.data.errors;
    }
}, 1000);

const updateLink = debounce(async () => {
    try {
        await store.dispatch(
            "updateLink",
            link.value.id,
            name.value,
            description.value,
            url.value
        );
        await store.dispatch("getAllLinks");
    } catch (error) {
        console.log(error);
        errors.value = error.response.data.errors;
    }
}, 500);

const bioLengthComputed = computed(() => {
    return !bio.value ? 0 : bio.value.length;
});

const updateUserImage = async () => {
    try {
        await store.dispatch("updateUserImage", data.value);
        await store.dispatch("getUser");
        setTimeout(() => (openCropper.value = false), 300);
    } catch (error) {
        openCropper.value = false;
        alert(error);
        console.log(error);
    }
};

const updateNewData = () => {
    const linkitems = computed(() =>
        store.state.linkitems.data.slice().sort((a, b) => a.order - b.order)
    );
    sortedLinkItems.value = linkitems.value;
};

watch(
    () => data.value,
    async () => await updateUserImage()
);
watch(
    () => store.state.linkitems.data,
    () => {
        updateNewData();
    }
);

const updatedInput = (e) => {
    selectedInput.value.id = e.id;
    selectedInput.value.str = e.str;
};

const showAddLinkFunc = () => {
    if (store.state.isMobile) {
        store.state.addLinkOverlay = true;
    } else {
        showAddLink.value = true;
    }
};

const AddIcon = (iconname) => {
    console.log(iconname);
    if (iconname) {
        console.log(iconname);
        selectedIconName.value = iconname;
        showAddSocialIconLink.value = true;
    } else {
        selectedIconName.value = null;
        showAddSocialIconLink.value = false;
    }
};

function getComponentName(category) {
    switch (category) {
        case "Link":
            return LinkBox;
        case "SaaS":
            return StartupLinkbox;
        case "Image/Video":
            return ImageLinkbox;
        case "Text":
            return QuoteLinkbox;
        case "Header":
            return HeaderLinkbox;
        case "Form":
            return FormLinkbox;
        case "Portfolio":
            return PortfolioLinkbox;
        case "Video":
            return VideoLinkbox;
        case "Map":
            return MapLinkbox;
        case "Store":
            return StoreLinkbox;
        // Handle other categories here if needed
        default:
            return LinkBox; // Replace 'DefaultComponent' with a fallback component name
    }
}
</script>

<style lang="scss">
.items .sortable-drag {
    background: rgb(255, 255, 255);
    opacity: 1;
    border-radius: 1.5rem;
}
.flip-list-move {
    transition: transform 0.8s;
}

.ghost {
    opacity: 0.7;
    background: #f3f3f3;
    box-shadow: 10px 10px 5px -1px rgba(0, 0, 0, 0.14);
    border-radius: 1.5rem;
}
</style>
