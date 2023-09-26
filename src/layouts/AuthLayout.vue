<template>
  <div
    class="w-[390px] md:w-full px-6 flex flex-col bg-white h-screen items-center justify-center mx-auto py-2 sm:px-6 lg:px-8"
  >
    <router-view></router-view>
    <footer class="pt-20">
      <p class="text-center text-xs font-medium text-gray-500">
        © 2023 Creatorpa.ge - All Rights Reserved
      </p>
    </footer>
  </div>
</template>

<script setup>
import { LockClosedIcon } from "@heroicons/vue/20/solid";
</script>
