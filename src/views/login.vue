<template>
  <div class="relative w-full rounded-lg py-4 px- max-w-md space-y-8">
    <div class="absolute top-0 left-0 right-0">
      <div v-if="errorMsg">
        <div
          id="toast-danger"
          class="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
          role="alert"
        >
          <div
            class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200"
          >
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z"
              />
            </svg>
            <span class="sr-only">Error icon</span>
          </div>
          <div class="ml-3 text-sm font-normal">{{ errorMsg }}.</div>
          <button
            @click="errorMsg = null"
            type="button"
            class="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
            data-dismiss-target="#toast-danger"
            aria-label="Close"
          >
            <span class="sr-only">Close</span>
            <svg
              class="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
          </button>
        </div>
        <!-- <div
          id="toast-warning"
          class="flex items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
          role="alert"
        >
          <div
            class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-orange-500 bg-orange-100 rounded-lg dark:bg-orange-700 dark:text-orange-200"
          >
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM10 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-4a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0v5Z"
              />
            </svg>
            <span class="sr-only">Warning icon</span>
          </div>
          <div class="ml-3 text-sm font-normal">
            Improve password difficulty.
          </div>
          <button
            type="button"
            class="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
            data-dismiss-target="#toast-warning"
            aria-label="Close"
          >
            <span class="sr-only">Close</span>
            <svg
              class="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
          </button>
        </div> -->
      </div>
    </div>
    <div class="flex flex-col items-center">
      <h2
        class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900"
      >
        Welcome back! 👋
      </h2>
      <p class="mt-2 text-center text-sm text-gray-600">
        Not registered?
        {{ " " }}
        <router-link
          :to="{ name: 'Signup' }"
          class="font-medium text-indigo-600 hover:text-indigo-500"
          >Sign Up</router-link
        >
      </p>
    </div>
    <form class="mt-8 space-y-6" @submit.prevent="login">
      <input type="hidden" name="remember" value="true" />
      <div class="-space-y-px rounded-md shadow-sm">
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
                placeholder="youremail@gmail.com"
                class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
          </div>
        </div>
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
      </div>

      <div class="flex items-center justify-between">
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

        <div class="text-sm">
          <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500"
            >Forgot your password?</a
          >
        </div>
      </div>

      <div>
        <button
          v-if="!loading"
          type="submit"
          class="group relative flex w-full justify-center rounded-[1.5rem] bg-purple-700 px-3 py-4 text-sm font-semibold text-white hover:bg-purple-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
        >
          <span class="absolute inset-y-0 left-0 flex items-center pl-3">
            <LockClosedIcon
              class="h-5 w-5 text-purple-500 group-hover:text-purple-400"
              aria-hidden="true"
            />
          </span>
          Sign in
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
    </form>
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
      <span> Login with google </span>
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
const store = useStore();
const router = useRouter();
const route = useRoute();

let errorMsg = ref();
let loading = ref(false);

const user = {
  email: "",
  password: "",
  remember: false,
};

const login = async (ev) => {
  loading.value = true;
  errorMsg.value = null;
  ev.preventDefault();
  //await userStore.getTokens();
  await store
    .dispatch("login", user)
    .then((data) => {
      console.log(data);
      store.dispatch("getUser");
      store.dispatch("getAllLinks");
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
const googlelogintoken = async (code) => {
  //loading.value = true;
  errorMsg.value = null;

  try {
    //await userStore.getTokens();
    let res = await store.dispatch("googlelogintoken", code);
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
    errorMsg.value = error.response.data.errors;
  }
};

const verifyemailtoken = async (code) => {
  //loading.value = true;
  errorMsg.value = null;

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
    errorMsg.value = error.response.data.errors;
  }
};

onMounted(async () => {
  if (route.query.code) {
    const code = route.query.code;
    if (code) {
      // Save the token or use it as needed
      // For example, you might store it in Vuex or localStorage
      console.log(code);
      const currentUrl = window.location.href;
      console.log(currentUrl);
      googlelogintoken(code);
    }
  } else if (route.query.emailcode) {
    const emailcode = route.query.emailcode;

    if (emailcode) {
      console.log(emailcode);
      verifyemailtoken(emailcode);
    }
  }
});

// function login(ev) {
//     loading.value = true;
//     errorMsg.value = null;
//     ev.preventDefault();

//     store
//         .dispatch("login", user)
//         .then((res) => {
//             console.log(res);
//             loading.value = false;
//             router.push({
//                 name: "Dashboard",
//             });
//         })
//         .catch((err) => {
//             console.log(err);
//             loading.value = false;
//             const response = err.response;
//             console.log(response);
//             if (response && response.status == 422) {
//                 if (response.data.errors) {
//                     const errors = response.data.errors;
//                     for (const key in errors) {
//                         // Do something with each error object
//                         console.log(errors[key]);
//                         errorMsg.value = errors[key];
//                     }
//                 } else if (response.data.error.length > 0) {
//                     console.log(response.data.error);
//                     errorMsg.value = response.data.error;
//                     //errorMsg.value = response.data.error;
//                 }
//             }
//         });
// }
</script>

<style></style>
