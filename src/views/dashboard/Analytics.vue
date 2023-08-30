<template>
  <div class="relative">
    <div v-if="loading" class="w-full h-screen">
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
    <div v-else>
      <div id="AnalyticsPage" class="flex h-[100vh] overflow-y-scroll">
        <div class="w-full md:pt-2 pt-6">
          <div class="mx-12 mt-6 pb-24">
            <div
              class="flex pt-8 mb-8 justify-center w-full h-auto overflow-x-hidden shadow-sm rounded-lg card-light-shadow"
            >
              <div
                className="block w-full h-full overflow-x-auto px-5  sm:rounded-lg"
              >
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <p className="font-semibold text-gray-700">
                      Monthly Overview
                    </p>
                  </div>
                </div>
                <div className="h-auto w-full inline-block">
                  <Statistics :LinkData="LinkData" />
                </div>
              </div>
            </div>
            <div class="block md:grid md:grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
              <div
                class="flex pt-8 justify-center h-auto overflow-x-hidden shadow-sm rounded-lg card-light-shadow min-h-[300px]"
              >
                <div
                  className="block w-full overflow-x-auto px-5  sm:rounded-lg"
                >
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <p className="font-semibold text-gray-700">
                        Top performing links
                      </p>
                    </div>
                  </div>
                  <div className="h-auto w-full inline-block">
                    <TopLinks :topLinkData="topLinkData" />
                  </div>
                </div>
              </div>
              <div
                class="flex pt-8 justify-center h-auto overflow-x-hidden shadow-sm rounded-lg card-light-shadow"
              >
                <div
                  className="block w-full h-full overflow-x-auto px-5  sm:rounded-lg"
                >
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <p className="font-semibold text-gray-700">
                        Top Locations
                      </p>
                    </div>
                  </div>
                  <div className="h-auto w-full inline-block">
                    <MapStats :mapdata="mapdata" />
                  </div>
                </div>
              </div>

              <!-- <div
                class="flex items-center justify-center h-auto overflow-x-hidden shadow-sm rounded-lg bg-white"
              >
                <div
                  class="relative w-full overflow-x-auto p-5 sm:rounded-lg"
                ></div>
              </div> -->
            </div>
            <div class="block md:grid md:grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
              <div
                class="flex pt-8 justify-center h-auto overflow-x-hidden shadow-sm rounded-lg card-light-shadow min-h-[300px]"
              >
                <div
                  className="block w-full overflow-x-auto px-5  sm:rounded-lg"
                >
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <p className="font-semibold text-gray-700">Top Forms</p>
                    </div>
                  </div>
                  <div className="h-auto w-full inline-block">
                    <!-- <TopLinks /> -->
                    <FormSubmissions :formdata="formdata" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import FormSubmissions from "../../components/stats/FormSubmissions.vue";
import Statistics from "../../components/stats/Statistics.vue";
import MapStats from "../../components/stats/MapStats.vue";
import TopLinks from "../../components/stats/TopLinks.vue";

import TopLinksVue from "../../components/stats/TopLinks.vue";
import { ref, watch, computed, onMounted, isProxy, toRaw } from "vue";

import { useStore } from "vuex";
const store = useStore();

let username = ref("");
let errors = ref(null);
let LinkData = ref(null);
const mapdata = ref(null);
const formdata = ref(null);
let topLinkData = ref(null);

const getTopforms = async () => {
  try {
    const res = await store.dispatch("fetchTopForms");
    console.log(res.data);
    formdata.value = res.data;
  } catch (error) {
    console.log(error);
    errors.value = error.response.data.errors;
  }
};

const getTopLinks = async () => {
  try {
    const res = await store.dispatch("fetchTopLinks");
    console.log(res.data);
    topLinkData.value = res.data;
  } catch (error) {
    console.log(error);
    errors.value = error.response.data.errors;
  }
};

const getChartData = async (username) => {
  try {
    const res = await store.dispatch("fetchchartData", username.value);
    console.log(res.data);
    LinkData.value = res.data;
  } catch (error) {
    console.log(error);
    errors.value = error.response.data.errors;
  }
};

const getcountriesData = async (username) => {
  try {
    const res = await store.dispatch("getcountriesData");
    console.log(res.data);
    mapdata.value = res.data;
  } catch (error) {
    console.log(error);
  }
};

let loading = ref(false);

onMounted(async () => {
  loading.value = true;
  username.value = store.state.user.name;
  await getChartData(username);
  await getTopLinks();
  await getTopforms();
  await getcountriesData();
  loading.value = false;
});
</script>
