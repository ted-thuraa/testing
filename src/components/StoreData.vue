<template>
    <div class="relative px-4 w-full">
        <div class="relative w-full">
            <form
                @submit.prevent="updateFormData"
                class="flex flex-col mb-3 w-full h-full text-gray-950"
            >
                <div class="mb-5">
                    <div class="relative overflow-x-auto sm:rounded-lg mb-4">
                        <table class="w-full text-sm text-left text-gray-500">
                            <caption
                                class="text-lg font-semibold text-left text-gray-900 bg-white"
                            >
                                Products
                                <p
                                    class="mt-1 text-sm font-normal text-gray-500"
                                >
                                    Add upto 6 products.
                                </p>
                            </caption>
                            <thead class="text-xs text-gray-700 uppercase">
                                <tr>
                                    <th scope="col" class="px-6 py-3">
                                        Product
                                    </th>
                                    <th scope="col" class="px-6 py-3">Price</th>
                                    <th scope="col" class="px-6 py-3">Image</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr
                                    v-for="item in link.ecom_data.storeitems"
                                    :key="item"
                                    class="bg-white border-b"
                                >
                                    <td class="px-6 py-4">
                                        <div
                                            class="group relative w-full bg-gray-200 rounded-2xl"
                                        >
                                            <div
                                                class="flex h-[50px] w-full overflow-hidden rounded-2xl"
                                            >
                                                <img
                                                    class="w-full h-full object-cover"
                                                    :src="item.productimage"
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                    </td>

                                    <td
                                        scope="row"
                                        class="px-4 py-2 font-medium text-sm text-gray-900 whitespace-nowrap"
                                    >
                                        {{ item.productname }}
                                    </td>
                                    <td
                                        class="px-4 py-2 font-medium text-sm text-gray-900 whitespace-nowrap"
                                    >
                                        {{ item.price }}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <button
                            @click="openModal"
                            class="flex items-center justify-center w-full py-3 rounded-full text-white font-semibold bg-gray-800 hover:bg-gray-950"
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
                                    d="M12 6v12m6-6H6"
                                />
                            </svg>

                            <span>Add new</span>
                        </button>
                    </div>
                </div>
            </form>
        </div>
        <Addproduct
            :link="link"
            :isOpenAddproduct="isOpenAddproduct"
            @closeModal="closeModal"
        />
        <!-- <CropperModal
            v-if="openitem1Cropper"
            :linkId="link.id"
            @data="openitem1data = $event"
            @close="openitem1Cropper = false"
        />
        <CropperModal
            v-if="openitem2Cropper"
            :linkId="link.id"
            @data="openitem2data = $event"
            @close="openitem2Cropper = false"
        />
        <CropperModal
            v-if="openitem3Cropper"
            :linkId="link.id"
            @data="openitem3data = $event"
            @close="openitem3Cropper = false"
        />
        <CropperModal
            v-if="openitem4Cropper"
            :linkId="link.id"
            @data="openitem4data = $event"
            @close="openitem4Cropper = false"
        />
        <CropperModal
            v-if="openitem5Cropper"
            :linkId="link.id"
            @data="openitem5data = $event"
            @close="openitem5Cropper = false"
        />
        <CropperModal
            v-if="openitem6Cropper"
            :linkId="link.id"
            @data="openitem6data = $event"
            @close="openitem6Cropper = false"
        /> -->
    </div>
</template>

<script setup>
import CropperModal from "./CropperModal.vue";
import Addproduct from "./popovers/AddProduct.vue";
import ToggleSwitch from "./ToggleSwitch.vue";
import { watch, ref, onMounted, toRefs } from "vue";
import { useStore } from "vuex";
const store = useStore();

const props = defineProps({
    link: Object,
    //selectedId: { type: Number, default: 0 },
    //selectedStr: { type: String, default: "" },
});

const { link } = toRefs(props);

let description = ref("");
let openitem1data = ref(null);
let openitem2data = ref(null);
let openitem3data = ref(null);
let openitem4data = ref(null);
let openitem5data = ref(null);
let openitem6data = ref(null);

let item1_name = ref("");
let item1_price = ref("");
let openitem1Cropper = ref(false);

let item2_name = ref("");
let item2_price = ref("");
let openitem2Cropper = ref(false);

let item3_name = ref("");
let item3_price = ref("");
let openitem3Cropper = ref(false);

let item4_name = ref("");
let item4_price = ref("");
let openitem4Cropper = ref(false);

let item5_name = ref("");
let item5_price = ref("");
let openitem5Cropper = ref(false);

let item6_name = ref("");
let item6_price = ref("");
let openitem6Cropper = ref(false);

let store_desc = ref("");
let errors = ref(null);

const isOpenAddproduct = ref(false);

function closeModal() {
    isOpenAddproduct.value = false;
}
function openModal() {
    isOpenAddproduct.value = true;
}

const updateFormData = async () => {
    errors.value = null;

    try {
        console.log();
        console.log(link.id);

        await store.dispatch("updateFormData", {});
        await store.dispatch("getAllLinks");
    } catch (error) {
        console.log(error);
        //errors.value = error.response.data.errors;
    }
};

onMounted(async () => {});

// watch(
//     [
//         description,
//         formtype,
//         isNameRequired,
//         get_name,
//         isEmailRequired,
//         get_email,
//         isMobileRequired,
//         get_mobile,
//         isMessageRequired,
//         get_message,
//         isCountryRequired,
//         get_country,
//         responcesEmail,
//         googlesheetsToken,
//         thankyoutext,
//     ],
//     () => {
//         // Call the updateBackend function whenever any of the values change
//         console.log(thankyoutext.value);
//         updateFormData();
//     },
//     { deep: true } // This enables deep watching of nested properties in objects
// );
</script>

<style></style>
