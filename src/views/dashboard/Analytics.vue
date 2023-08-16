<template>
    <div id="AnalyticsPage" class="flex h-[100vh] overflow-y-scroll bg-white">
        <div class="w-full md:pt-20 pt-14">
            <div class="mx-12 mt-6 pb-24">
                <div
                    class="block md:grid md:grid-cols-1 lg:grid-cols-2 gap-4 mb-4"
                >
                    <div
                        class="flex pt-8 justify-center h-auto overflow-x-hidden shadow-sm rounded-lg bg-gray-800"
                    >
                        <div
                            className="block w-full h-full overflow-x-auto px-5  sm:rounded-lg"
                        >
                            <div
                                className="flex justify-between items-center mb-4"
                            >
                                <div>
                                    <p className="font-semibold text-gray-100">
                                        Monthly Overview
                                    </p>
                                </div>
                            </div>
                            <div className="h-auto w-full inline-block">
                                <Statistics />
                            </div>
                        </div>
                    </div>
                    <div
                        class="flex pt-8 justify-center h-auto overflow-x-hidden shadow-sm rounded-lg bg-gray-800"
                    >
                        <div
                            className="block w-full h-full overflow-x-auto px-5  sm:rounded-lg"
                        >
                            <div
                                className="flex justify-between items-center mb-4"
                            >
                                <div>
                                    <p className="font-semibold text-gray-100">
                                        Top Locations
                                    </p>
                                </div>
                            </div>
                            <div className="h-auto w-full inline-block">
                                <MapStats />
                            </div>
                        </div>
                    </div>
                    <div
                        class="flex pt-8 justify-center h-auto overflow-x-hidden shadow-sm rounded-lg bg-gray-800 min-h-[300px]"
                    >
                        <div
                            className="block w-full overflow-x-auto px-5  sm:rounded-lg"
                        >
                            <div
                                className="flex justify-between items-center mb-4"
                            >
                                <div>
                                    <p className="font-semibold text-gray-100">
                                        Top performing links
                                    </p>
                                </div>
                            </div>
                            <div className="h-auto w-full inline-block">
                                <TopLinks />
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
            </div>
        </div>
    </div>
</template>

<script setup>
import Statistics from "../../components/stats/Statistics.vue";
import MapStats from "../../components/stats/MapStats.vue";
import TopLinks from "../../components/stats/TopLinks.vue";

import TopLinksVue from "../../components/stats/TopLinks.vue";
import { useStore } from "vuex";
const store = useStore();
</script>
