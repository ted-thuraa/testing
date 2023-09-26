<template>
  <div class="bg-white py-24 sm:py-32 h-screen overflow-y-auto">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl sm:text-center">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Simple no-tricks pricing
        </h2>
        <p class="mt-6 text-lg leading-8 text-gray-600">
          Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et
          quasi iusto modi velit ut non voluptas in. Explicabo id ut laborum.
        </p>
      </div>
      <div
        class="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none"
      >
        <div class="p-8 sm:p-10 lg:flex-auto">
          <h3 class="text-2xl font-bold tracking-tight text-gray-900">
            Lifetime membership
          </h3>
          <p class="mt-6 text-base leading-7 text-gray-600">
            Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque
            amet indis perferendis blanditiis repellendus etur quidem assumenda.
          </p>
          <div class="mt-10 flex items-center gap-x-4">
            <h4
              class="flex-none text-sm font-semibold leading-6 text-indigo-600"
            >
              What’s included
            </h4>
            <div class="h-px flex-auto bg-gray-100" />
          </div>
          <ul
            role="list"
            class="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
          >
            <li
              v-for="feature in includedFeatures"
              :key="feature"
              class="flex gap-x-3"
            >
              <CheckIcon
                class="h-6 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              {{ feature }}
            </li>
          </ul>
        </div>
        <div class="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
          <div
            class="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16"
          >
            <div class="mx-auto max-w-xs px-8">
              <p class="text-base font-semibold text-gray-600">
                Pay once, own it forever
              </p>
              <p class="mt-6 flex items-baseline justify-center gap-x-2">
                <span class="text-5xl font-bold tracking-tight text-gray-900"
                  >$349</span
                >
                <span
                  class="text-sm font-semibold leading-6 tracking-wide text-gray-600"
                  >USD</span
                >
              </p>
              <a
                :href="checkoutUrl"
                target="_blank"
                class="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >Get access</a
              >
              <p class="mt-6 text-xs leading-5 text-gray-600">
                Invoices and receipts available for easy company reimbursement
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { CheckIcon } from "@heroicons/vue/20/solid";
import { ref, watch, computed, onMounted, isProxy, toRaw, nextTick } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const store = useStore();

//let ouid = ref(""); // Replace with your dynamic value
//let email = ref("");
let baseUrl =
  "https://siteai.lemonsqueezy.com/checkout/buy/1f75473e-ea55-4467-b1ec-4a20ac16e882";
const includedFeatures = [
  "Private forum access",
  "Member resources",
  "Entry to annual conference",
  "Official member t-shirt",
];

async function setDefaults() {
  await store.dispatch("getAllLinks");
  await store.dispatch("getUser");
  await store.dispatch("getAllSocialIcons");
}

onMounted(async () => {
  await setDefaults();
});

const ouid = computed(() => store.state.user.uuid);
const email = computed(() => store.state.user.email);

console.log(ouid.value);
console.log(email.value);

const checkoutUrl = computed(() => {
  return `${baseUrl}?checkout[email]=${email.value}&checkout[custom][ouid]=${ouid.value}`;
});

console.log(checkoutUrl);
const buyPlan = async () => {
  try {
    //let res = await store.subscribe();
    //console.log(res);
  } catch (error) {
    console.log(error);
  }
};
</script>
