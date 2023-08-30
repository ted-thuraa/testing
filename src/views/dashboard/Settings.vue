<template>
  <div id="settingspage" class="flex flex-col h-[100vh] pl-4 overflow-y-scroll">
    <div
      class="lg:w-[calc(100%-500px)] md:w-[calc(100%-330px)] w-full md:pt-20 pt-14"
    >
      <div class="space-y-6">
        <div>
          <h2
            for="email"
            class="block text-[1.5rem] font-bold leading-6 text-gray-900"
          >
            Integrations
          </h2>
        </div>

        <div class="mt-20">
          <div
            class="flex w-full card-light-shadow rounded-[0.5rem] p-4 items-center justify-between"
          >
            <div class="flex items-center">
              <img
                src="../../assets/images/googlesheets.png"
                alt=""
                class="w-8 h-8 rounded-[0.4rem] object-cover"
              />
              <div class="text-black font-medium ml-4">
                <h3>Authorize Googlesheets</h3>
              </div>
            </div>

            <div>
              <button
                v-if="!store.state.user.isGooglesheetsAuthorized"
                @click="authorizeGoogleSheets"
                type="button"
                class="bg-indigo-600 rounded-[0.5rem] px-6 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
              <button
                v-else
                @click="authorizeGoogleSheets"
                type="button"
                class="bg-indigo-600 rounded-[0.5rem] px-6 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
        <div class="mt-20">
          <div
            class="flex w-full card-light-shadow rounded-[0.5rem] p-4 items-center justify-between"
          >
            <div class="flex items-center">
              <img
                src="../../assets/images/mailchimp.jpeg"
                alt=""
                class="w-8 h-8 rounded-[0.4rem] object-cover"
              />
              <div class="text-black font-medium ml-4">
                <h3>Connect Mailchimp</h3>
              </div>
            </div>

            <div>
              <button
                v-if="!store.state.user.isMailchimpAuthorized"
                @click="authorizeMailchimp"
                type="button"
                class="bg-indigo-600 rounded-[0.5rem] px-6 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
              <button
                v-else
                @click="authorizeMailchimp"
                type="button"
                class="bg-indigo-600 rounded-[0.5rem] px-6 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import debounce from "lodash/debounce";
import { ref, watch, computed, onMounted } from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
const store = useStore();
const router = useRouter();
const route = useRoute();

let name = ref("");
let bio = ref("");
let data = ref(null);
let errors = ref("");
let loading = ref(false);
let isBioFocused = ref(false);
let openCropper = ref(false);

async function authorizeGoogleSheets() {
  try {
    const res = await store.dispatch("authenticateGooglesheets");
    console.log(res.data);
    window.location.href = res.data;
  } catch (error) {
    console.error("Google Sheets authentication error:", error);
  }
}
async function authorizeMailchimp() {
  try {
    const res = await store.dispatch("authorizeMailchimp");
    console.log(res.data);
    window.location.href = res.data;
  } catch (error) {
    console.error("mailchimp authentication error:", error);
  }
}

async function setTokens(code, type) {
  if (type === "googlesheets") {
    try {
      let res = await store.dispatch("setGoogleSheeetsTkn", code);
      console.log(res);
    } catch (error) {
      console.error("Google Sheets authentication error:", error);
    }
  } else if (!type) {
    try {
      let res = await store.dispatch("getMailchimpAccessToken", code);
      console.log(res);
    } catch (error) {
      console.error("getMailchimpAccessToken error:", error);
    }
  } else {
    return;
  }
}

async function setGoogletoken(code) {}
async function getSheets() {
  try {
    await store.dispatch("getSheets");
  } catch (error) {
    console.error("Google Sheets get error:", error);
  }
}

async function setDefaults() {
  await store.dispatch("getAllLinks");
  await store.dispatch("getUser");
  await store.dispatch("getAllSocialIcons");
}

onMounted(async () => {
  if (route.query.code) {
    const code = route.query.code;
    const type = route.query.type;
    if (code) {
      // Save the token or use it as needed
      // For example, you might store it in Vuex or localStorage
      console.log(code);
      console.log(type);
      //setGoogletoken(code);
      setTokens(code, type);
    }
  }
  await setDefaults();
});
</script>
