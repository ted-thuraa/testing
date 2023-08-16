<template>
    <router-view></router-view>
</template>

<script setup>
import { ref, watch, computed, onMounted } from "vue";
//import store from "./store";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
const store = useStore();
let show = ref(false);

watch(
    () => store.state.user.id,
    () => {
        if (!store.state.colors) {
            store.commit("setColors", colors());
        }
    }
);

onMounted(async () => {
    store.commit("setColors", colors());
    store.commit("setDefaults");
    // store.state.updatedLinkId.value = 0;
    // store.state.addLinkOverlay.value = false;
    // store.state.isPreviewOverlay.value = false;
    // store.state.isMobile.value = false;

    try {
        if (store.state.user.id) {
            await store.dispatch("getUser");
            await store.dispatch("getAllLinks");
        }
    } catch (error) {
        console.log(error);
    }

    setTimeout(() => (show.value = true), 1);
});

const colors = () => {
    return [
        {
            id: 1,
            color: "",
            glossybackground: true,
            text: "text-black",
            button: "bg-[#EFF0EA]",
            glossybutton: false,
            name: "Air White",
        },

        {
            id: 2,
            color: "bg-gray-800",
            text: "text-white",
            button: "bg-[#EFF0EA]",
            glossybutton: false,
            name: "Lake Black",
        },

        {
            id: 3,
            color: "bg-gradient-to-b from-[#F09819] to-[#FF512F]",
            text: "text-white",
            button: "bg-[#EFF0EA]",
            glossybutton: false,
            name: "Purple Pie",
        },

        {
            id: 4,
            color: "bg-gradient-to-b from-[#ad5389] to-[#3c1053]",
            text: "text-white",
            button: "bg-[#EFF0EA]",
            glossybutton: false,
            name: "Expresso",
        },
        {
            id: 5,
            color: "bg-gradient-to-b from-[black] to-[black]",
            text: "text-white",
            button: "bg-[#e8ff00]",
            buttontext: "text-black",
            glossybutton: false,
            name: "Digital product",
        },
        {
            id: 6,
            color: "bg-gradient-to-b from-[#4389A2] to-[#5C258D]",
            text: "text-white",
            button: "bg-white",
            buttontext: "text-black",
            glossybutton: false,
            name: "Digital product",
        },
        {
            id: 7,
            color: "bg-gradient-to-b from-[#240b36] to-[#c31432]",
            text: "text-white",
            button: "bg-white",
            buttontext: "text-black",
            glossybutton: false,
            name: "Digital product",
        },
        {
            id: 8,
            color: "bg-gradient-to-b from-[#ff9966] to-[#ff5e62]",
            text: "text-white",
            button: "bg-white",
            buttontext: "text-black",
            glossybutton: false,
            name: "Digital product",
        },
        {
            id: 9,
            color: "bg-gradient-to-b from-[#7F00FF] to-[#E100FF]",
            text: "text-white",
            button: "bg-white",
            buttontext: "text-black",
            glossybutton: false,
            name: "Digital product",
        },
        {
            id: 10,
            color: "bg-gradient-to-b from-[#0575E6] to-[#021B79]",
            text: "text-white",
            button: "bg-white",
            buttontext: "text-black",
            glossybutton: false,
            name: "Digital product",
        },
        {
            id: 11,
            color: "bg-gradient-to-b from-[#ee0979] to-[#ff6a00]",
            text: "text-white",
            button: "bg-white",
            buttontext: "text-black",
            name: "Digital product",
        },
        {
            id: 12,
            color: "bg-gradient-to-b from-[#41295a] to-[#2F0743]",
            text: "text-white",
            button: "bg-white",
            buttontext: "text-black",
            glossybutton: false,
            name: "Digital product",
        },
        {
            id: 13,
            color: "bg-gradient-to-b from-[#434343] to-[ #000000]",
            text: "text-white",
            button: "bg-white",
            buttontext: "text-black",
            glossybutton: false,
            name: "Digital product",
        },
        {
            id: 14,
            color: "bg-black",
            text: "text-white",
            button: "bg-gray-950",
            buttontext: "text-white",
            glossybutton: true,
            name: "Digital product",
        },
        {
            id: 15,
            color: "bg-gradient-to-b from-[#434343] to-[ #000000]",
            text: "text-white",
            button: "bg-gray-500",
            glossybutton: false,
            buttontext: "text-black",
            name: "Digital product",
        },
    ];
};
</script>
<style></style>
