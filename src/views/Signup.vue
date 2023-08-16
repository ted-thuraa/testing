<template>
    <div class="w-full bg-white rounded-lg py-4 px-8 max-w-lg space-y-8">
        <div class="flex flex-col items-center">
            <a
                href="/"
                class="flex-shrink-0 inline-flex items-center text-xl py-2 font-bold text-gray-900"
            >
                <img
                    class="h-8 w-8 mr-3"
                    src="../assets/svg/logoblack.svg"
                    alt="Your Company"
                />
                Rezmay
            </a>
            <h2
                class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900"
            >
                Sign up
            </h2>
            <p class="mt-2 text-center text-sm text-gray-600">
                Have an account?
                {{ " " }}
                <router-link
                    :to="{ name: 'Login' }"
                    class="font-medium text-indigo-600 hover:text-indigo-500"
                    >Login</router-link
                >
            </p>
        </div>
        <form class="mt-8 space-y-6" @submit.prevent="register">
            <div v-if="errorMsg" class="px-8">
                <div
                    v-for="error in errorMsg"
                    :key="error"
                    id="toast-warning"
                    class="flex items-center w-full p-4 text-gray-900 bg-gray-50 rounded-lg shadow"
                    role="alert"
                >
                    <div
                        class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-orange-500 bg-orange-100 rounded-lg dark:bg-orange-700 dark:text-orange-200"
                    >
                        <svg
                            aria-hidden="true"
                            class="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                                clip-rule="evenodd"
                            ></path>
                        </svg>
                        <span class="sr-only">Warning icon</span>
                    </div>
                    <div class="ml-3 text-sm font-normal">
                        {{ error }}
                    </div>
                    <button
                        @click="errorMsg = ''"
                        type="button"
                        class="ml-auto -mx-1.5 -my-1.5 bg-gray-100 text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-200 inline-flex h-8 w-8"
                        data-dismiss-target="#toast-warning"
                        aria-label="Close"
                    >
                        <span class="sr-only">Close</span>
                        <svg
                            aria-hidden="true"
                            class="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clip-rule="evenodd"
                            ></path>
                        </svg>
                    </button>
                </div>
            </div>
            <input type="hidden" name="remember" value="true" />
            <div class="-space-y-px rounded-md shadow-sm">
                <div>
                    <label for="fullname" class="sr-only">Full name</label>
                    <input
                        type="text"
                        v-model="user.username"
                        name="username"
                        id="username"
                        required=""
                        autocomplete="name"
                        placeholder="name"
                        class="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
                <div>
                    <label for="email-address" class="sr-only"
                        >Email address</label
                    >
                    <input
                        v-model="user.email"
                        type="email"
                        name="email"
                        autocomplete="email"
                        required=""
                        id="email"
                        placeholder="exampleaddress"
                        class="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
                <div>
                    <label for="password" class="sr-only">Password</label>
                    <input
                        v-model="user.password"
                        type="password"
                        name="password"
                        id="password"
                        autocomplete="current-password"
                        required=""
                        placeholder="password"
                        class="relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
                <div>
                    <label for="password" class="sr-only"
                        >Confirm Password</label
                    >
                    <input
                        type="password"
                        v-model="user.password_confirmation"
                        name="confirmPassword"
                        id="confirmpassword"
                        required=""
                        autocomplete="current-password_confirm"
                        placeholder="Confirm password"
                        class="relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
            </div>

            <div class="flex items-center justify-between">
                <div class="flex items-center">
                    <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        v-model="user.remember"
                        class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label
                        for="remember-me"
                        class="ml-2 block text-sm text-gray-900"
                        >Remember me</label
                    >
                </div>

                <div class="text-sm">
                    <a
                        href="#"
                        class="font-medium text-indigo-600 hover:text-indigo-500"
                        >Forgot your password?</a
                    >
                </div>
            </div>

            <div>
                <button
                    v-if="!loading"
                    type="submit"
                    class="group relative flex w-full justify-center rounded-md bg-gray-900 px-3 py-3 text-sm font-semibold text-white hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
                >
                    <span
                        class="absolute inset-y-0 left-0 flex items-center pl-3"
                    >
                        <LockClosedIcon
                            class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                            aria-hidden="true"
                        />
                    </span>
                    Sign in
                </button>
                <button
                    v-else
                    class="group relative flex w-full justify-center rounded-md bg-gray-900 px-3 py-2 text-sm font-semibold text-white hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
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
    </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";
import store from "../store";

const router = useRouter();
let errorMsg = ref([]);
let loading = ref(false);

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

    try {
        //await userStore.getTokens();
        await store.dispatch("register", user);
        await store.dispatch("getUser");
        loading.value = false;
        router.push({
            name: "Dashboard",
        });
    } catch (error) {
        console.log(error);
        errorMsg.value = error.response.data.errors;
    }
};

// async function register(ev) {
//     loading.value = true;
//     errorMsg.value = null;
//     ev.preventDefault();
//     //send to store for some action
//     await store.dispatch("register", user).then((res) => {
//         console.log(res);
//         //navigate user to dashboard
//         loading.value = false;
//         if (res && res.user) {
//             store.dispatch("getUser");
//             router.push({
//                 name: "Dashboard",
//             });
//         } else if (res && res.response.status == 422) {
//             const response = res.response;
//             if (response.data.errors) {
//                 const errors = response.data.errors;
//                 for (const key in errors) {
//                     // Do something with each error object
//                     console.log(errors[key]);
//                     errorMsg.value = errors[key];
//                 }
//             } else if (response.data.error.length > 0) {
//                 console.log(response.data.error);
//                 errorMsg.value = response.data.error;
//                 //errorMsg.value = response.data.error;
//             }
//         }
//     });
// }
</script>

<style></style>
