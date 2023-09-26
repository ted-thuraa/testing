<template>
  <div class="w-full bg-white rounded-lg dark:bg-gray-800">
    <div class="flex justify-between p-4 md:p-6 pb-0 md:pb-0">
      <div></div>
    </div>
    <div ref="forms_chart" class=""></div>
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
        <router-link
          :to="{
            path: `/app/analytics/${Form.id}/results`,
            hash: '#summary',
            //params: { formid: Form.id },
          }"
          class="text-white px-4 bg-purple-700 hover:bg-purple-800 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-[1.5rem] text-sm md:px-5 py-2 text-center inline-flex items-center mr-2 mb-2"
        >
          <div
            class="group text-gray-200 hover:text-white transition ease-in-out duration-200"
          >
            Summary
            <span
              aria-hidden="true"
              class="hidden md:inline-block translate-x-0 group-hover:translate-x-1 transition-transform ease-in-out duration-200"
              >→</span
            >
          </div>
        </router-link>
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
  Form: Object,
});
const { Form } = toRefs(props);

const salesAmount = ref("$12,423");
const salesPercentage = ref(23);
const showDropdown = ref(false);
const forms_chart = ref(null);
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
  console.log(Form.value);
  if (Form) {
    console.log(Form);
    let options = {
      // set the labels option to true to show the labels on the X and Y axis
      xaxis: {
        show: true,

        categories: Form.value.formanalytics.map(({ date }) => date),
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
          //formatter: function (value) {
          //  return "$" + value;
          //},
        },
      },
      series: [
        {
          name: "Views ",
          //data: [150, 141, 145, 152, 135, 125],
          data: Form.value.formanalytics.map(({ views }) => views),
          color: "#1A56DB",
        },
        {
          name: "Clicks ",
          //data: [43, 13, 65, 12, 42, 73],
          data: Form.value.formanalytics.map(({ clicks }) => clicks),
          color: "#7E3BF2",
        },
        {
          name: "Responces ",
          //data: [43, 13, 65, 12, 42, 73],
          data: Form.value.formanalytics.map(({ responces }) => responces),
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
          opacityFrom: 0.55,
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
      //   document.getElementById("forms_chart") &&
      typeof ApexCharts !== "undefined"
    ) {
      const chart = new ApexCharts(forms_chart.value, options);
      chart.render();
    }
  }
});
</script>
