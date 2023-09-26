<template>
  <div class="relative w-full h-screen bg-white">
    <!-- <div v-if="loading" class="w-full h-screen">
      <div class="relative w-full h-full rounded-lg">
        <div class="w-full h-full bg-transparent p-0.5 px-2 absolute z-50">
          <div class="flex items-center justify-center rounded-lg h-full">
            <div class="" role="status">
              <svg
                aria-hidden="true"
                class="w-16 h-16 mr-2 text-gray-200 animate-spin fill-gray-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span class="sr-only">Loading...</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="px-10 py-20">
      <div
        v-if="!emailcode"
        class="flex flex-col items-center justify-center relative h-min pb-1 w-full"
      >
        <p class="text-xl text-gray-900">Welcome to Creatorpage</p>
        <p class="text-md text-gray-600">
          Your account has been created. We sent a verification link to
          {{ email }}. Please verify to proceed
        </p>
      </div>
      <div
        v-else
        class="flex flex-col items-center justify-center relative h-min pb-1 w-full"
      >
        <p class="text-xl text-gray-900">Email verified</p>
        <p class="text-md text-gray-600">You will be redirected shortly</p>
      </div>
    </div> -->
  </div>
</template>

<script setup>
import { ref, watch, computed, onMounted, toRefs } from "vue";

import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";

const store = useStore();
const router = useRouter();
const route = useRoute();

let loading = ref(true);
let email = ref("");
let emailcode = ref("");

const verifyemailtoken = async (code) => {
  try {
    //await userStore.getTokens();
    let res = await store.dispatch("verifyemailtoken", code);
    console.log(res);
    await store.dispatch("getUser");
    await store.dispatch("getAllLinks");
    if (store.state.user.username) {
      loading.value = false;
      router.push({
        name: "Dashboard",
      });
    } else {
      loading.value = false;
      router.push({
        name: "SetUsername",
      });
    }
  } catch (error) {
    console.log(error);
    //errorMsg.value = error.response.data.errors;
  }
};

console.log(router);
console.log(route);

onMounted(async () => {
  //if (route.query.email) {
  //  console.log(route.query.email);
  //  email.value = route.query.email;
  //}

  if (route.query.emailcode) {
    //verifyemailtoken(route.query.emailcode);
  }
  loading.value = false;
});
</script>

<style lang="scss" scoped></style>
