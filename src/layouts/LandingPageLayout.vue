<template>
  <div class="w-full bg-[#ffff] flex-auto">
    <HeaderNav />
    <router-view></router-view>
  </div>
</template>

<script setup>
import HeaderNav from "../components/HeaderNav.vue";
import { ref, watch, computed, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import store from "../store";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";

const route = useRoute();
const router = useRouter();
</script>

<style></style>
