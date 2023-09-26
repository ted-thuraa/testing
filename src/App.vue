<template>
  <div class="max-w-[1440px] flex items-center justify-center">
    <router-view></router-view>
  </div>
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
      await store.dispatch("getAllSocialIcons");
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
      pageBg: "bg-white",
      profilePic_ring: "ring-white",
      profileSec_divider: "bg-gray-200",
      hasusercustombgImg: false,
      hasthemecustombgImg: false,
      bgImgWithOverlay: false,
      themecustombgImg: "",
      bgImgOverlay: "",
      htext: "text-gray-900",
      ptext: "text-gray-600",
      profileAreaBg: "bg-transparent",
      cardsBg: "card-light-shadow",
      cardsHtext: "text-gray-900",
      cardsPtext: "text-gray-600",
      faviconbg: "bg-white",
      islandBtns: "bg-purple-700 text-white shadow-lg hover:bg-purple-500",
      tagIsland: "bg-gray-50 text-gray-600 ring-gray-500/10 hover:bg-gray-100",
      inputs:
        "bg-gray-500/5 focus:bg-[#efefef] caret-purple-500 text-gray-700 ring-white/10 focus:ring-purple-500 border-white focus:border-purple-200",
      buttonVariations: {
        btnVar1:
          "bg-purple-700 text-white shadow-lg hover:bg-purple-500 focus-visible:outline-purple-500",
        btnVar2: "bg-gray-100 text-gray-800",
        btnVar3: "",
      },
      radioBtns: {
        checked: "bg-purple-600  text-white",
        notChecked: "bg-gray-200/50",
        checked_label: "text-white",
        notchecked_label: "text-gray-700",
      },
      checkboxBtns: {
        checked: " text-purple-600 focus:ring-purple-600",
        notChecked: "bg-gray-200/50",
        checked_label: "text-white",
        notchecked_label: "text-white",
      },
      name: "Air White",
    },
    {
      id: 2,
      pageBg: "bg-[#F0F1F3]",
      profilePic_ring: "ring-transparent",
      profileSec_divider: "bg-gray-200",
      hasusercustombgImg: false,
      hasthemecustombgImg: false,
      bgImgWithOverlay: false,
      themecustombgImg: "",
      bgImgOverlay: "",
      htext: "text-gray-900",
      ptext: "text-gray-600",
      profileAreaBg: "bg-transparent",
      cardsBg: "bg-[#FEFEFE]",
      cardsHtext: "text-gray-900",
      cardsPtext: "text-gray-600",
      faviconbg: "bg-white",
      tagIsland: "bg-[#EEF3F9] text-gray-600 ring-gray-500/10 ",
      islandBtns: "bg-blue-700 text-white shadow-lg hover:bg-blue-500",
      inputs:
        "bg-gray-500/5 focus:bg-[#efefef] caret-blue-500 text-gray-700 ring-white/10 focus:ring-blue-500 border-white focus:border-blue-200",
      buttonVariations: {
        btnVar1:
          "bg-blue-700 text-white shadow-lg hover:bg-blue-500 focus-visible:outline-blue-500",
        btnVar2: "bg-gray-100 text-gray-800",
        btnVar3: "",
      },
      radioBtns: {
        checked: "bg-blue-600  text-white",
        notChecked: "bg-gray-200/50",
        checked_label: "text-white",
        notchecked_label: "text-gray-600",
      },
      checkboxBtns: {
        checked: " text-blue-600 focus:ring-blue-600",
      },
      name: "Apple White",
    },
    {
      id: 3,
      pageBg: "bg-white",
      profilePic_ring: "ring-gray-100",
      profileSec_divider: "bg-gray-200",
      hasusercustombgImg: false,
      hasthemecustombgImg: false,
      bgImgWithOverlay: false,
      themecustombgImg: "",
      bgImgOverlay: "",
      htext: "text-gray-900",
      ptext: "text-gray-600",
      profileAreaBg: "bg-transparent",
      cardsBg: "bg-black/5 backdrop-blur",
      cardsHtext: "text-gray-900",
      cardsPtext: "text-gray-600",
      faviconbg: "bg-white",
      islandBtns: "bg-indigo-700 text-white shadow-lg hover:bg-indigo-500",
      tagIsland: "bg-black/10 text-gray-600 ring-gray-500/10 ",
      inputs:
        "bg-[#f8f8f8] focus:bg-[#fafafa] caret-indigo-500 text-gray-700 ring-black/10 focus:ring-indigo-500 border-black/5 focus:border-indigo-200",
      buttonVariations: {
        btnVar1:
          "bg-indigo-700 text-white shadow-lg hover:bg-indigo-500 focus-visible:outline-indigo-500",
        btnVar2: "bg-gray-200/60 hover:bg-gray-300 text-gray-600",
        btnVar3: "",
      },
      radioBtns: {
        checked: "bg-indigo-600  text-white",
        notChecked: "bg-gray-200/50",
        checked_label: "text-white",
        notchecked_label: "text-gray-600",
      },
      checkboxBtns: {
        checked: " text-indigo-600 focus:ring-indigo-600",
      },
      name: "white brown patch",
    },
    {
      id: 4,
      pageBg: "bg-[#131313]",
      profilePic_ring: "ring-[#1e1e1e]",
      profileSec_divider: "bg-gray-200",
      hasusercustombgImg: false,
      hasthemecustombgImg: false,
      bgImgWithOverlay: false,
      themecustombgImg: "",
      bgImgOverlay: "",
      htext: "text-[#fff]",
      ptext: "text-[#a5a5a5]",
      profileAreaBg: "bg-transparent",
      cardsBg: "bg-[#1e1e1e] backdrop-blur",
      cardsHtext: "text-[#fff]",
      cardsPtext: "text-[#a5a5a5]",
      faviconbg: "bg-[#272727]",
      islandBtns: "bg-gray-100 text-[#161616] shadow-lg hover:bg-gray-50",
      tagIsland:
        "bg-[#272727] text-[#e7e7e7] border border-[#272727] ring-gray-500/10 ",
      inputs:
        "bg-[#272727] focus:bg-[#272727] caret-white text-white ring-[#272727] focus:ring-indigo-600 border border-[#272727] focus:border-transparent",
      buttonVariations: {
        btnVar1:
          "bg-[#d1f225] text-[#161616] shadow-lg hover focus-visible:outline-blue-500",
        btnVar2: "bg-[#272727] text-[#e7e7e7]",
        btnVar3: "",
      },
      radioBtns: {
        checked: "bg-[#d1f225] text-[#131313]",
        notChecked: "bg-[#272727]",
        checked_label: "text-[#131313]",
        notchecked_label: "text-white",
      },
      checkboxBtns: {
        checked: " text-indigo-600 focus:ring-indigo-600",
      },
      name: "white brown patch",
    },
    {
      id: 5,
      pageBg: "bg-[#595959]",
      profilePic_ring: "ring-transparent",
      profileSec_divider: "bg-gray-200",
      hasusercustombgImg: true,
      hasthemecustombgImg: false,
      bgImgWithOverlay: true,
      themecustombgImg: "",
      bgImgOverlay: "imageoverlaygray",
      htext: "text-gray-50",
      ptext: "text-gray-200",
      profileAreaBg: "bg-transparent",
      cardsBg: "bg-black/60 backdrop-blur",
      cardsHtext: "text-gray-50",
      cardsPtext: "text-gray-300",
      faviconbg: "bg-gray-700/20",
      islandBtns: "bg-gray-200 text-gray-800 shadow-lg hover:bg-gray-50",
      tagIsland:
        "bg-gray-700/20 text-gray-100 border border-gray-800 ring-gray-500/10 ",
      inputs:
        "bg-[#222] focus:bg-[#222] caret-white text-white ring-white/10 focus:ring-gray-600 border border-[#272727] focus:border-[#fff]",
      buttonVariations: {
        btnVar1:
          "bg-white text-gray-800 shadow-lg  focus-visible:outline-gray-500",
        btnVar2: "bg-gray-700/40 text-gray-100",
        btnVar3: "",
      },
      radioBtns: {
        checked: "bg-gray-200  text-gray-800",
        notChecked: "bg-gray-700/20",
        checked_label: "text-gray-800",
        notchecked_label: "text-white",
      },
      checkboxBtns: {
        checked: " text-purple-600 focus:ring-purple-600",
        notChecked: "bg-gray-700/20",
        checked_label: "text-white",
        notchecked_label: "text-white",
      },
      name: "Custom bg",
    },
    {
      id: 6,
      pageBg: "bg-[#010101]",
      profileSec_divider: "bg-gray-200",
      profilePic_ring: "ring-transparent",
      hasusercustombgImg: false,
      hasthemecustombgImg: true,
      bgImgWithOverlay: false,
      themecustombgImg: "bg-[url('src/assets/backgrounds/whitepatches.png')]",
      bgImgOverlay: "",
      htext: "text-[#fff]",
      ptext: "text-[#a5a5a5]",
      profileAreaBg: "bg-transparent",
      cardsBg: "bg-[#1e1e1e] backdrop-blur",
      cardsHtext: "text-gray-50",
      cardsPtext: "text-gray-100",
      faviconbg: "bg-[#272727]",
      islandBtns: "bg-white text-black shadow-lg hover:bg-gray-50",
      tagIsland:
        "bg-[#272727] text-[#e7e7e7] border border-[#272727] ring-gray-500/10 ",
      inputs:
        "bg-[#272727] focus:bg-[#272727] caret-white text-white ring-white/10 focus:ring-gray-600 border border-[#272727] focus:border-[#fff]",
      buttonVariations: {
        btnVar1:
          "bg-purple-600 text-white shadow-lg hover focus-visible:outline-blue-500",
        btnVar2: "bg-[#272727] text-[#e7e7e7]",
        btnVar3: "",
      },
      radioBtns: {
        checked: "bg-purple-600  text-white",
        notChecked: "bg-[#272727]",
        checked_label: "text-white",
        notchecked_label: "text-white",
      },
      checkboxBtns: {
        checked: " text-purple-600 focus:ring-purple-600",
        notChecked: "bg-gray-200/50",
        checked_label: "text-white",
        notchecked_label: "text-white",
      },
      name: "white brown patch",
    },
    {
      id: 7,
      pageBg: "bg-[#18181E]",
      profilePic_ring: "ring-transparent",

      profileSec_divider: "bg-gray-200",
      hasusercustombgImg: false,
      hasthemecustombgImg: true,
      bgImgWithOverlay: false,
      themecustombgImg: "bg-[url('src/assets/backgrounds/diagnalcircles.png')]",
      bgImgOverlay: "",
      htext: "text-gray-50",
      ptext: "text-gray-300",
      profileAreaBg: "bg-transparent",
      cardsBg: "bg-transparent border border-[#303543] backdrop-blur",
      cardsHtext: "text-gray-50",
      cardsPtext: "text-gray-300",
      faviconbg: "bg-[#1A1A1D]",
      islandBtns: "bg-[#252934] text-white shadow-lg ",
      tagIsland:
        "bg-[#1A1A1D] text-[#e7e7e7] border border-[#252934] ring-gray-500/10 ",
      inputs:
        "bg-[#252934] focus:bg-[#252934] caret-white text-white ring-white/10 focus:ring-gray-600 border border-[#272727] focus:border-[#fff]",
      buttonVariations: {
        btnVar1:
          "bg-[#226CF7] text-white shadow-lg hover focus-visible:outline-blue-500",
        btnVar2: "bg-[#252934] text-[#e7e7e7]",
        btnVar3: "",
      },
      radioBtns: {
        checked: "bg-[#226CF7]  text-white",
        notChecked: "bg-[#252934]",
        checked_label: "text-white",
        notchecked_label: "text-white",
      },
      checkboxBtns: {
        checked: " text-purple-600 focus:ring-purple-600",
        notChecked: "bg-gray-200/50",
        checked_label: "text-white",
        notchecked_label: "text-white",
      },
      name: "white brown patch",
    },
    {
      id: 8,
      pageBg: "bg-[#0B1120]",
      profilePic_ring: "ring-[#131826]",
      profileSec_divider: "bg-gray-200",
      hasusercustombgImg: false,
      hasthemecustombgImg: true,
      bgImgWithOverlay: false,
      themecustombgImg: "bg-[url('src/assets/backgrounds/raybeams.png')]",
      bgImgOverlay: "",
      htext: "text-[#fff]",
      ptext: "text-[#a5a5a5]",
      profileAreaBg: "bg-transparent",
      cardsBg: "bg-[#111B34]/50 border border-[#293043] backdrop-blur",
      cardsHtext: "text-gray-50",
      cardsPtext: "text-gray-100",
      faviconbg: "bg-[#131826]",
      islandBtns: "bg-[#131826] text-white shadow-lg hover:bg-indigo-500",
      tagIsland:
        "bg-[#131826] text-[#e7e7e7] border border-[#232A3C] ring-gray-500/10 ",
      inputs:
        "bg-[#131826] focus:bg-[#131826] caret-white text-white ring-white/10 focus:ring-gray-600 border border-[#272727] focus:border-[#fff]",
      buttonVariations: {
        btnVar1:
          "bg-gradient-to-r from-[#5F69D8] to-[#8683EE] text-gray-50 shadow-lg hover focus-visible:outline-blue-500",
        btnVar2: "bg-[#131826] text-[#e7e7e7]",
        btnVar3: "",
      },
      radioBtns: {
        checked: "bg-purple-600  text-white",
        notChecked: "bg-[#131826]",
        checked_label: "text-white",
        notchecked_label: "text-white",
      },
      checkboxBtns: {
        checked: " text-purple-600 focus:ring-purple-600",
        notChecked: "bg-gray-200/50",
        checked_label: "text-white",
        notchecked_label: "text-white",
      },
      name: "white brown patch",
    },
    {
      id: 9,
      pageBg: "deepspacegradiet",
      profilePic_ring: "ring-[#5C6164]",
      profileSec_divider: "bg-gray-200",
      hasusercustombgImg: false,
      hasthemecustombgImg: false,
      bgImgWithOverlay: false,
      themecustombgImg: "",
      bgImgOverlay: "",
      htext: "text-[#fff]",
      ptext: "text-[#a5a5a5]",
      profileAreaBg: "bg-transparent",
      cardsBg: "bg-[#2B2F35] backdrop-blur",
      cardsHtext: "text-gray-50",
      cardsPtext: "text-gray-100",
      faviconbg: "bg-[#373D41]",
      islandBtns: "bg-[#66AEE5] text-white shadow-lg hover:bg-[#66AEE5]",
      tagIsland:
        "bg-[#373D41] text-[#e7e7e7] border border-[#373D41] ring-gray-500/10 ",
      inputs:
        "bg-[#373D41] focus:bg-[#373D41] caret-white text-white ring-white/10 focus:ring-gray-600 border border-[#272727] focus:border-[#fff]",
      buttonVariations: {
        btnVar1:
          "bg-[#0092E5] text-white shadow-lg hover focus-visible:outline-blue-500",
        btnVar2: "bg-[#373D41] text-[#e7e7e7]",
        btnVar3: "",
      },
      radioBtns: {
        checked: "bg-[#0092E5]  text-white",
        notChecked: "bg-[#373D41]",
        checked_label: "text-white",
        notchecked_label: "text-white",
      },
      checkboxBtns: {
        checked: " text-purple-600 focus:ring-purple-600",
        notChecked: "bg-gray-200/50",
        checked_label: "text-white",
        notchecked_label: "text-white",
      },
      name: "white brown patch",
    },
    {
      id: 10,
      pageBg: "twitchgradiet",
      profilePic_ring: "ring-gray-200",
      profileSec_divider: "bg-gray-200",
      hasusercustombgImg: false,
      hasthemecustombgImg: false,
      bgImgWithOverlay: false,
      themecustombgImg: "",
      bgImgOverlay: "",
      htext: "text-[#fff]",
      ptext: "text-gray-200",
      profileAreaBg: "bg-transparent",
      cardsBg: "bg-white backdrop-blur",
      cardsHtext: "text-gray-900",
      cardsPtext: "text-gray-700",
      faviconbg: "bg-white",
      islandBtns: "bg-[#272727] text-white shadow-lg hover:bg-indigo-500",
      tagIsland:
        "bg-transparent text-gray-800 border border-gray-200 ring-gray-500/10 ",
      inputs:
        "bg-gray-50 focus:bg-gray-100 caret-white text-gray-800 ring-white/10 focus:ring-purple-600 border border-gray-100 focus:border-purple-700",
      buttonVariations: {
        btnVar1:
          "bg-[#ffd375] text-gray-900 shadow-lg hover focus-visible:outline-blue-500",
        btnVar2: "bg-[#272727] text-[#e7e7e7]",
        btnVar3: "",
      },
      radioBtns: {
        checked: "bg-black  text-white",
        notChecked: "bg-gray-200/50",
        checked_label: "text-white",
        notchecked_label: "text-gray-800",
      },
      checkboxBtns: {
        checked: " text-purple-600 focus:ring-purple-600",
      },
      name: "white brown patch",
    },
    {
      id: 11,
      pageBg: "darkskiesgradiet",
      profilePic_ring: "ring-transparent",
      profileSec_divider: "bg-gray-200",
      hasusercustombgImg: false,
      hasthemecustombgImg: false,
      bgImgWithOverlay: false,
      themecustombgImg: "",
      bgImgOverlay: "",
      htext: "text-[#fff]",
      ptext: "text-gray-200",
      profileAreaBg: "bg-transparent",
      cardsBg: "bg-white/10 border border-gray-300/20 backdrop-blur",
      cardsHtext: "text-gray-50",
      cardsPtext: "text-gray-300",
      faviconbg: "bg-white/20",
      islandBtns: "bg-gray-700 text-white shadow-lg hover:bg-indigo-500",
      tagIsland: "bg-white/20 text-[#e7e7e7]  ring-gray-500/10 ",
      inputs:
        "bg-white/40 focus:bg-white/50 caret-white text-white ring-white/10 focus:ring-gray-600 border border-[#272727] focus:border-[#fff]",
      buttonVariations: {
        btnVar1:
          "bg-white text-black shadow-lg hover focus-visible:outline-blue-500",
        btnVar2: "bg-white/20 text-[#e7e7e7]",
        btnVar3: "",
      },
      radioBtns: {
        checked: "bg-white  ",
        notChecked: "bg-white/40",
        checked_label: "text-black",
        notchecked_label: "text-white",
      },
      checkboxBtns: {
        checked: " text-purple-600 focus:ring-purple-600",
      },
      name: "white brown patch",
    },
    {
      id: 12,
      pageBg: "bg-gradient-to-b from-[#99C6C3] to-[#AAD497]",
      profilePic_ring: "ring-white/40",

      profileSec_divider: "bg-gray-200",
      hasusercustombgImg: false,
      hasthemecustombgImg: false,
      bgImgWithOverlay: false,
      themecustombgImg: "",
      bgImgOverlay: "",
      htext: "text-white",
      ptext: "text-gray-100",
      profileAreaBg: "bg-transparent",
      cardsBg: "bg-white backdrop-blur",
      cardsHtext: "text-black",
      cardsPtext: "text-gray-700",
      faviconbg: "bg-gray-50",
      islandBtns: "bg-black text-white shadow-lg hover:bg-gray-700",
      tagIsland:
        "bg-gray-50 text-gray-700 border border-gray-100 ring-gray-500/10 ",
      inputs:
        "bg-gray-50 focus:bg-gray-100 caret-white text-gray-800 ring-white/10 focus:ring-[#99C6C3] border border-white focus:border-[#99C6C3]",
      buttonVariations: {
        btnVar1:
          "bg-black text-white shadow-lg hover focus-visible:outline-blue-500",
        btnVar2: "bg-gray-200 text-gray-700",
        btnVar3: "",
      },
      radioBtns: {
        checked: "bg-gray-700  text-white",
        notChecked: "bg-gray-200/50",
        checked_label: "text-white",
        notchecked_label: "text-gray-700",
      },
      checkboxBtns: {
        checked: " text-purple-600 focus:ring-purple-600",
      },
      name: "swift",
    },
    {
      id: 13,
      pageBg: "bg-[#FAF7EE]",
      profilePic_ring: "ring-transparent",

      profileSec_divider: "bg-gray-200",
      hasusercustombgImg: false,
      hasthemecustombgImg: false,
      bgImgWithOverlay: false,
      themecustombgImg: "",
      bgImgOverlay: "",
      htext: "text-[#191611]",
      ptext: "text-[#0F110E]",
      profileAreaBg: "bg-transparent",
      cardsBg: "bg-transparent border border-gray-200 backdrop-blur",
      cardsHtext: "text-[#191611]",
      cardsPtext: "text-[#0F110E]",
      faviconbg: "bg-[#FAF7EE]",
      islandBtns: "bg-white text-[#191611] shadow-lg ",
      tagIsland:
        "bg-transparent text-[#0F110E] border border-gray-200 ring-gray-500/10 ",
      inputs:
        "bg-transparent text-[#0F110E] border border-gray-200 caret-[#0F110E]  ring-white/10 focus:ring-gray-300 ",
      buttonVariations: {
        btnVar1:
          "bg-[#191611] text-white shadow-lg hover focus-visible:outline-blue-500",
        btnVar2: "bg-[#272727] text-[#e7e7e7]",
        btnVar3: "",
      },
      radioBtns: {
        checked: "bg-[#0F110E]  text-white",
        notChecked: "bg-transparent  border border-gray-200",
        checked_label: "text-white",
        notchecked_label: "text-[#0F110E]",
      },
      checkboxBtns: {
        checked: " text-purple-600 focus:ring-purple-600",
      },
      name: "swift",
    },
    {
      id: 14,
      pageBg: "bg-[#161A23]",
      profilePic_ring: "ring-[#F49032]",
      profileSec_divider: "bg-[#242D36]",
      hasusercustombgImg: false,
      hasthemecustombgImg: false,
      bgImgWithOverlay: false,
      themecustombgImg: "",
      bgImgOverlay: "",
      htext: "text-[#F5F5F7]",
      ptext: "text-[#EDF1F3]",
      profileAreaBg: "bg-transparent",
      cardsBg: "bg-[#242D36]   backdrop-blur",
      cardsHtext: "text-gray-50",
      cardsPtext: "text-gray-100",
      faviconbg: "bg-[#242D36]",
      islandBtns: "bg-white text-[#161A23] shadow-lg hover:bg-indigo-500",
      tagIsland:
        "bg-[#F49032]/5 text-[#F49032] border border-[#F49032]/5 ring-gray-500/10 ",
      inputs:
        "bg-[#161A23]/40 focus:bg-[#161A23]/60 caret-white text-white ring-white/10 focus:ring-gray-600 border border-[#272727] focus:border-[#fff]",
      buttonVariations: {
        btnVar1:
          "bg-[#F49032] text-[#0C0100] shadow-lg hover focus-visible:outline-blue-500",
        btnVar2: "bg-[#161A23]/40 text-[#e7e7e7]",
        btnVar3: "",
      },
      radioBtns: {
        checked: "bg-[#F49032]  text-white",
        notChecked: "bg-[#161A23]/40",
        checked_label: "text-white",
        notchecked_label: "text-white",
      },
      checkboxBtns: {
        checked: " text-purple-600 focus:ring-purple-600",
      },
      name: "swift",
    },
    {
      id: 15,
      pageBg: "bg-[#000000]",
      profilePic_ring: "ring-transparent",
      profileSec_divider: "bg-gray-200",
      hasusercustombgImg: false,
      hasthemecustombgImg: false,
      bgImgWithOverlay: false,
      themecustombgImg: "",
      bgImgOverlay: "",
      htext: "text-[#ffffff]",
      ptext: "text-[#E8E8E8]",
      profileAreaBg: "bg-transparent",
      cardsBg: "bg-transparent border border-[#262626] backdrop-blur",
      cardsHtext: "text-gray-50",
      cardsPtext: "text-gray-100",
      faviconbg: "bg-black",
      islandBtns: "bg-[#222] text-white shadow-lg ",
      tagIsland:
        "bg-[#222] text-gray-100 border border-[#262626] ring-gray-500/10 ",
      inputs:
        "bg-[#222] focus:bg-[#222] caret-white text-white ring-white/10 focus:ring-gray-600 border border-[#272727] focus:border-[#fff]",
      buttonVariations: {
        btnVar1:
          "bg-white text-black shadow-lg hover focus-visible:outline-blue-500",
        btnVar2: "bg-[#272727] text-[#e7e7e7]",
        btnVar3: "",
      },
      radioBtns: {
        checked: "bg-white  ",
        notChecked: "bg-[#222]",
        checked_label: "text-black",
        notchecked_label: "text-white",
      },
      checkboxBtns: {
        checked: " text-purple-600 focus:ring-purple-600",
      },
      name: "swift",
    },
    {
      id: 16,
      pageBg: "bg-gradient-to-r from-[#091622] to-[#142B37]",
      profilePic_ring: "",
      profilePic_ring: "ring-[#091622]/50",
      profileSec_divider: "bg-gray-200",
      hasusercustombgImg: false,
      hasthemecustombgImg: true,
      bgImgWithOverlay: false,
      themecustombgImg:
        "bg-[url('src/assets/backgrounds/Ellipselightgreen.png')]",
      bgImgOverlay: "",
      htext: "text-[#E3E4E2]",
      ptext: "text-[#B8C1AE]",
      profileAreaBg: "bg-transparent",
      cardsBg: "bg-[#091622]/50  ring-1 ring-white/10",
      cardsHtext: "text-gray-50",
      cardsPtext: "text-gray-100",
      faviconbg: "bg-[#213C41]",
      islandBtns: "bg-gray-50 text-gray-800 shadow-lg hover:bg-gray-100",
      tagIsland:
        "bg-[#213C41] text-[#e7e7e7] border border-[#091622]/50 ring-white/10 ",
      inputs:
        "bg-[#213C41] focus:bg-[#222] caret-white text-white ring-white/10 focus:ring-gray-600 border border-[#272727] focus:border-[#fff]",
      buttonVariations: {
        btnVar1:
          "bg-gradient-to-r from-[#ADDC3B] to-[#CBFF4B] text-[#161616] shadow-lg ",
        btnVar2: "bg-[#272727] text-[#e7e7e7]",
        btnVar3: "",
      },
      radioBtns: {
        checked: "bg-gradient-to-r from-[#ADDC3B] to-[#CBFF4B]",
        notChecked: "bg-[#213C41]",
        checked_label: "text-[#161616]",
        notchecked_label: "text-white",
      },
      checkboxBtns: {
        checked: " text-purple-600 focus:ring-purple-600",
        notChecked: "bg-[#213C41]",
        checked_label: "text-white",
        notchecked_label: "text-white",
      },
      name: "white brown patch",
    },
  ];
};
// const colors = () => {
//   return [
//     {
//       id: 1,
//       color: "",
//       glossybackground: true,
//       text: "text-black",
//       button: "bg-[#EFF0EA]",
//       glossybutton: false,
//       name: "Air White",
//     },

//     {
//       id: 2,
//       color: "bg-gray-800",
//       text: "text-white",
//       button: "bg-[#EFF0EA]",
//       glossybutton: false,
//       name: "Lake Black",
//     },

//     {
//       id: 3,
//       color: "bg-gradient-to-b from-[#F09819] to-[#FF512F]",
//       text: "text-white",
//       button: "bg-[#EFF0EA]",
//       glossybutton: false,
//       name: "Purple Pie",
//     },

//     {
//       id: 4,
//       color: "bg-gradient-to-b from-[#ad5389] to-[#3c1053]",
//       text: "text-white",
//       button: "bg-[#EFF0EA]",
//       glossybutton: false,
//       name: "Expresso",
//     },
//     {
//       id: 5,
//       color: "bg-gradient-to-b from-[black] to-[black]",
//       text: "text-white",
//       button: "bg-[#e8ff00]",
//       buttontext: "text-black",
//       glossybutton: false,
//       name: "Digital product",
//     },
//     {
//       id: 6,
//       color: "bg-gradient-to-b from-[#4389A2] to-[#5C258D]",
//       text: "text-white",
//       button: "bg-white",
//       buttontext: "text-black",
//       glossybutton: false,
//       name: "Digital product",
//     },
//     {
//       id: 7,
//       color: "bg-gradient-to-b from-[#240b36] to-[#c31432]",
//       text: "text-white",
//       button: "bg-white",
//       buttontext: "text-black",
//       glossybutton: false,
//       name: "Digital product",
//     },
//     {
//       id: 8,
//       color: "bg-gradient-to-b from-[#ff9966] to-[#ff5e62]",
//       text: "text-white",
//       button: "bg-white",
//       buttontext: "text-black",
//       glossybutton: false,
//       name: "Digital product",
//     },
//     {
//       id: 9,
//       color: "bg-gradient-to-b from-[#7F00FF] to-[#E100FF]",
//       text: "text-white",
//       button: "bg-white",
//       buttontext: "text-black",
//       glossybutton: false,
//       name: "Digital product",
//     },
//     {
//       id: 10,
//       color: "bg-gradient-to-b from-[#0575E6] to-[#021B79]",
//       text: "text-white",
//       button: "bg-white",
//       buttontext: "text-black",
//       glossybutton: false,
//       name: "Digital product",
//     },
//     {
//       id: 11,
//       color: "bg-gradient-to-b from-[#ee0979] to-[#ff6a00]",
//       text: "text-white",
//       button: "bg-white",
//       buttontext: "text-black",
//       name: "Digital product",
//     },
//     {
//       id: 12,
//       color: "bg-gradient-to-b from-[#41295a] to-[#2F0743]",
//       text: "text-white",
//       button: "bg-white",
//       buttontext: "text-black",
//       glossybutton: false,
//       name: "Digital product",
//     },
//     {
//       id: 13,
//       color: "bg-gradient-to-b from-[#434343] to-[ #000000]",
//       text: "text-white",
//       button: "bg-white",
//       buttontext: "text-black",
//       glossybutton: false,
//       name: "Digital product",
//     },
//     {
//       id: 14,
//       color: "bg-black",
//       text: "text-white",
//       button: "bg-gray-950",
//       buttontext: "text-white",
//       glossybutton: true,
//       name: "Digital product",
//     },
//     {
//       id: 15,
//       color: "bg-gradient-to-b from-[#434343] to-[ #000000]",
//       text: "text-white",
//       button: "bg-gray-500",
//       glossybutton: false,
//       buttontext: "text-black",
//       name: "Digital product",
//     },
//   ];
// };
</script>
<style></style>
