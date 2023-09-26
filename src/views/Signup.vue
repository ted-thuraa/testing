<template>
  <div class="w-full rounded-lg py-4 px- max-w-md">
    <div class="flex flex-col items-center">
      <h2
        class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900"
      >
        Hi 👋, let’s get started!
      </h2>
      <p class="mt-2 text-center text-sm text-gray-600">
        Have an account?
        {{ " " }}
        <router-link
          :to="{ name: 'Login' }"
          class="font-medium text-indigo-600 hover:text-indigo-500"
          >Sign in</router-link
        >
      </p>
    </div>
    <div class="mt-8 space-y-4" @submit.prevent="register">
      <div class="stepper-content w-full">
        <div class="stepper-pane flex flex-col justify-center" v-if="step == 1">
          <div class="-space-y-px rounded-md shadow-sm">
            <div class="w-full">
              <label
                for="input-group-1"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Username
              </label>
              <div class="relative mb-6">
                <div class="w-full inline-flex items-center">
                  <input
                    type="text"
                    v-model="user.username"
                    name="username"
                    id="username"
                    required=""
                    autocomplete="name"
                    placeholder="name"
                    class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
              </div>
            </div>
            <div class="w-full">
              <label
                for="input-group-1"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Email
              </label>
              <div class="relative mb-6">
                <div class="w-full inline-flex items-center">
                  <input
                    v-model="user.email"
                    type="email"
                    name="email"
                    autocomplete="email"
                    required=""
                    id="email"
                    placeholder="exampleaddress"
                    class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
              </div>
            </div>
          </div>
          <button
            @click="incrementStep"
            class="group relative flex w-full justify-center rounded-[1.5rem] bg-purple-700 px-3 py-4 text-sm font-semibold text-white hover:bg-purple-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
          >
            create account
          </button>
          <div class="my-4 flex items-center justify-center text-gray-600">
            <span>or</span>
          </div>
          <button
            @click="loginwithgoogle"
            type="submit"
            class="group relative inline-flex items-center w-full justify-center rounded-[1.5rem] bg-white border border-gray-100 px-3 py-4 text-sm font-semibold text-gray-900 hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              class="w-6 h-6 mr-4"
            >
              <path
                fill="#FFC107"
                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
              />
              <path
                fill="#FF3D00"
                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
              />
              <path
                fill="#4CAF50"
                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
              />
              <path
                fill="#1976D2"
                d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
              />
            </svg>
            <span> Sign up with google </span>
          </button>
        </div>
        <div class="stepper-pane flex flex-col justify-center" v-if="step == 2">
          <button
            @click="decrementStep"
            class="mb-4 bg-transparent inline-flex items-center text-purple-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5 mr-2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
            <span class="font-bold">Back</span>
          </button>
          <div class="-space-y-px rounded-md">
            <input type="hidden" name="remember" value="true" />
            <div class="w-full">
              <label
                for="input-group-1"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Password</label
              >
              <div class="relative mb-6">
                <div class="w-full inline-flex items-center">
                  <input
                    v-model="user.password"
                    type="password"
                    name="password"
                    id="password"
                    autocomplete="current-password"
                    required=""
                    placeholder="password"
                    class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
              </div>
            </div>
            <div class="w-full">
              <label
                for="input-group-1"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Confirm Password</label
              >
              <div class="relative mb-6">
                <div class="w-full inline-flex items-center">
                  <input
                    type="password"
                    v-model="user.password_confirmation"
                    name="confirmPassword"
                    id="confirmpassword"
                    required=""
                    autocomplete="current-password_confirm"
                    placeholder="Confirm password"
                    class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="mb-4 flex items-center justify-between">
            <div class="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                v-model="user.remember"
                class="h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-600"
              />
              <label for="remember-me" class="ml-2 block text-sm text-gray-900"
                >Remember me</label
              >
            </div>
          </div>
          <div>
            <button
              v-if="!loading"
              @click="register"
              type="submit"
              class="group relative flex w-full justify-center rounded-[1.5rem] bg-purple-700 px-3 py-4 text-sm font-semibold text-white hover:bg-purple-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
            >
              <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                <LockClosedIcon
                  class="h-5 w-5 text-purple-500 group-hover:text-purple-400"
                  aria-hidden="true"
                />
              </span>
              Sign up
            </button>
            <button
              v-else
              type="submit"
              class="group relative flex w-full justify-center rounded-[1.5rem] bg-purple-700 px-3 py-4 text-sm font-semibold text-white hover:bg-purple-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
            >
              <svg
                class="animate-spin h-8 w-8 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  class="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                ></circle>
                <path
                  class="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import EmailConfirmationModal from "../components/popovers/EmailConfirmationModal.vue";
import { useRouter } from "vue-router";
import { ref } from "vue";
import store from "../store";

const router = useRouter();
let errorMsg = ref([]);
let verificationemail = ref("");
let isAccountcreated = ref(false);
let loading = ref(false);
const step = ref(1);

const user = {
  username: "",
  email: "",
  password: "",
  password_confirmation: "",
};

const register = async (ev) => {
  loading.value = true;
  errorMsg.value = null;
  ev.preventDefault();

  await store
    .dispatch("register", user)
    .then((data) => {
      console.log(data);
      loading.value = false;
      router.push({
        path: `/verify/email?email=${data.email}`,
      });
    })
    .catch((error) => {
      console.log(error);
      loading.value = false;
      if (error.response.data.errors) {
        errorMsg.value = error.response.data.message;
      } else {
        errorMsg.value = error.response.data.error;
      }
    });
};

const loginwithgoogle = async (ev) => {
  loading.value = true;
  errorMsg.value = null;
  ev.preventDefault();

  try {
    //await userStore.getTokens();
    let res = await store.dispatch("googleloginredirect");
    console.log(res);
    window.location.href = res;
  } catch (error) {
    console.log(error);
    errorMsg.value = error.response.data.errors;
  }
};

const incrementStep = () => {
  //formStarted.value = true;

  if (step.value < 2) {
    step.value++;
    //answers.value.push(answers_data.value);
  }
};

const decrementStep = () => {
  if (step.value > 1) {
    step.value--;
  }
};
</script>

<style></style>
