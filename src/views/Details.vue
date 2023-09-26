<template>
  <div
    class="grid w-full h-screen bg-white grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8"
  >
    <div
      class="hidden overflow-hidden rounded-lg md:block bg-gray-100 sm:col-span-4 lg:col-span-5"
    >
      <img
        src="../assets/images/creator.jpg"
        alt=""
        class="w-full h-screen object-cover object-center"
      />
    </div>
    <div class="sm:col-span-8 lg:col-span-7">
      <section
        aria-labelledby="options-heading"
        class="flex items-start flex-col mt-20 p-10"
      >
        <h2 class="text-4xl font-extrabold tracking-tight text-gray-900">
          Enter your username to get started
        </h2>
        <form @submit.prevent="saveUsername">
          <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div class="sm:col-span-4">
              <label
                for="username"
                class="block text-sm font-medium leading-6 text-gray-900"
                >Username</label
              >
              <div class="mt-2 overflow-hidden">
                <div
                  class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md"
                >
                  <span
                    class="flex select-none items-center pl-3 text-gray-500 sm:text-sm"
                    >creatorpa.ge/</span
                  >
                  <input
                    v-model="user.username"
                    type="text"
                    name="username"
                    id="username"
                    autocomplete="username"
                    class="inputs block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 focus:border-white sm:text-sm sm:leading-6"
                    placeholder="your unique username"
                  />
                </div>
              </div>
            </div>
          </div>

          <button
            type="submit"
            class="w-[20rem] mt-6 text-white bg-purple-700 hover:bg-purple-800 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-[1.5rem] text-sm p py-3 text-center mr-2 mb-2"
          >
            Create
          </button>
        </form>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, computed, onMounted, isProxy, toRaw, nextTick } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const store = useStore();

store.dispatch("getAllLinks");

let username = ref("");
let loading = ref("");
let errorMsg = ref("");

const user = {
  username: "",
};

onMounted(async () => {
  if (store.state.user.username) {
    router.push({
      name: "Dashboard",
    });
  }
});

const saveUsername = async (ev) => {
  loading.value = true;
  errorMsg.value = null;
  ev.preventDefault();

  try {
    //await userStore.getTokens();
    await store.dispatch("saveUsername", user);
    await store.dispatch("getUser");
    await store.dispatch("getAllLinks");

    loading.value = false;
    router.push({
      name: "Dashboard",
    });
  } catch (error) {
    console.log(error);
    errorMsg.value = error.response.data.errors;
  }
};
</script>

<style lang="scss" scoped></style>
