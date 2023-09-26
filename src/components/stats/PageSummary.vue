<template>
  <div class="w-full bg-white rounded-lg dark:bg-gray-800">
    <div class="flex justify-between p-4 md:px-6 pb-0 md:pb-0">
      <div class="space-y-2">
        <div class="inline-flex items-center text-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <p class="ml-2 text-base font-normal">Traffic</p>
        </div>

        <h5 class="leading-none text-3xl font-bold text-gray-900">
          {{ pageviews }}
        </h5>
      </div>
    </div>
    <div id="labels-chart" class="px-2.5"></div>
    <div
      class="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between mt-5 p-4 md:p-6 pt-0 md:pt-0"
    >
      <div class="flex justify-between items-center pt-5">
        <!-- Button -->
        <button
          id="dropdownDefaultButton"
          @click="toggleDropdown"
          class="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 text-center inline-flex items-center dark:hover:text-white"
          type="button"
        >
          {{ selectedDays }}
          <svg
            class="w-2.5 m-2.5 ml-1.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>
        <!-- Dropdown menu -->
        <div
          v-if="showDropdown"
          id="lastDaysdropdown"
          class="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
        >
          <ul
            class="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDefaultButton"
          >
            <li v-for="days in daysOptions" :key="days">
              <a
                @click="selectDays(days)"
                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >{{ days }}</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ApexCharts from "apexcharts";
import { watch, ref, onMounted, toRefs } from "vue";
import { useStore } from "vuex";
const store = useStore();

const props = defineProps({
  LinkData: Object,
  pageviews: Number,
});
const { LinkData, pageviews } = toRefs(props);

const salesAmount = ref("$12,423");
const salesPercentage = ref(23);
const showDropdown = ref(false);
const selectedDays = ref("Last 7 days");
const daysOptions = [
  "Yesterday",
  "Today",
  "Last 7 days",
  "Last 30 days",
  "Last 90 days",
];

const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value;
};

const selectDays = (days) => {
  selectedDays.value = days;
  showDropdown.value = false;
};

onMounted(() => {
  // ApexCharts options and config
  console.log(LinkData);
  if (LinkData.value) {
    let options = {
      // set the labels option to true to show the labels on the X and Y axis
      xaxis: {
        show: true,

        categories: LinkData.value.map(({ date }) => date),
        // categories: [
        //   "01 Feb",
        //   "02 Feb",
        //   "03 Feb",
        //   "04 Feb",
        //   "05 Feb",
        //   "06 Feb",
        //   "07 Feb",
        // ],
        labels: {
          show: true,
          style: {
            fontFamily: "Inter, sans-serif",
            cssClass: "text-xs font-normal fill-gray-500 dark:fill-gray-400",
          },
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        show: true,
        labels: {
          show: true,
          style: {
            fontFamily: "Inter, sans-serif",
            cssClass: "text-xs font-normal fill-gray-500 dark:fill-gray-400",
          },
          formatter: function (value) {
            return "$" + value;
          },
        },
      },
      series: [
        {
          name: "Views ",
          //data: [150, 141, 145, 152, 135, 125],
          data: LinkData.value.map(({ views }) => views),
          color: "#1A56DB",
        },
        {
          name: "Clicks ",
          //data: [43, 13, 65, 12, 42, 73],
          data: LinkData.value.map(({ clicks }) => clicks),
          color: "#7E3BF2",
        },
        {
          name: "Uniquevisitors ",
          //data: [43, 13, 65, 12, 42, 73],
          data: LinkData.value.map(({ uniquevisitors }) => uniquevisitors),
          color: "#F49032",
        },
      ],
      chart: {
        sparkline: {
          enabled: false,
        },
        height: "100%",
        width: "100%",
        type: "area",
        fontFamily: "Inter, sans-serif",
        dropShadow: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      tooltip: {
        enabled: true,
        x: {
          show: false,
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          opacityFrom: 0.5,
          opacityTo: 0,
          shade: "#1C64F2",
          gradientToColors: ["#1C64F2"],
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 1,
      },
      legend: {
        show: false,
      },
      grid: {
        show: false,
      },
    };

    if (
      document.getElementById("labels-chart") &&
      typeof ApexCharts !== "undefined"
    ) {
      const chart = new ApexCharts(
        document.getElementById("labels-chart"),
        options
      );
      chart.render();
    }
  }
});
</script>
