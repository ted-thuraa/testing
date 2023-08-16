<template>
    <div
        class="flex flex-col bg-slate-50 h-screen items-center justify-center px-4 py-12 sm:px-6 lg:px-8"
    >
        <router-view></router-view>
        <footer class="pt-20">
            <p class="text-center text-xs font-medium text-gray-500">
                © 2023 Rezmay - All Rights Reserved
            </p>
        </footer>
    </div>
</template>

<script setup>
import { LockClosedIcon } from "@heroicons/vue/20/solid";
</script>
