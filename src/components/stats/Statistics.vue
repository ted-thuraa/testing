<template>
  <div>
    <canvas style="width: 100%; height: 250px" ref="chart" />
  </div>
</template>

<script setup>
import { ref, watch, computed, onMounted, toRefs } from "vue";
import { Chart, registerables } from "chart.js";
import { useStore } from "vuex";
const store = useStore();

const props = defineProps({
  LinkData: Object,
});
const { LinkData } = toRefs(props);

let username = ref("");
let errors = ref(null);
//let LinkData = ref(null);
const chart = ref(null);
Chart.register(...registerables);

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

onMounted(async () => {
  //username.value = store.state.user.name;
  //await getChartData(username);
  const ctx = chart.value.getContext("2d");
  renderChart();
});

watch(LinkData, () => {
  renderChart();
});

const renderChart = () => {
  if (LinkData.value) {
    const ctx = chart.value.getContext("2d");
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, "rgba(141,137,255,100%)");
    gradient.addColorStop(1, "rgba(255,255,255,5%)");
    const gradient1 = ctx.createLinearGradient(0, 0, 0, 400);
    gradient1.addColorStop(0, "rgba(255,228,132,100%)");
    gradient1.addColorStop(1, "rgba(255,255,255,5%)");
    const gradient2 = ctx.createLinearGradient(0, 0, 0, 400);
    gradient2.addColorStop(0, "rgba(143,91,192,100%)");
    gradient2.addColorStop(1, "rgba(255,255,255,5%)");
    const chartData = {
      type: "line",
      data: {
        labels: LinkData.value.map(({ date }) => date),
        datasets: [
          {
            label: "Views",
            data: LinkData.value.map(({ views }) => views),
            //backgroundColor: "rgba(51,200,99,.1)",
            backgroundColor: gradient,
            borderColor: "rgba(141,137,255,100%)",
            fill: true,
            lineTension: 0.2,
            borderWidth: 1.5,
          },
          {
            label: "Clicks",
            data: LinkData.value.map(({ clicks }) => clicks),
            backgroundColor: gradient1,
            borderColor: "rgba(255,228,132,100%)",
            fill: true,
            lineTension: 0.2,
            borderWidth: 1.5,
          },
          {
            label: "Uniquevisitors",
            data: LinkData.value.map(({ uniquevisitors }) => uniquevisitors),
            backgroundColor: gradient2,
            borderColor: "rgba(143,91,192,100%)",
            fill: true,
            lineTension: 0.3,
            borderWidth: 1.5,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        interaction: {
          mode: "index",
          intersect: false,
          axis: "x",
        },
        plugins: {
          tooltip: {
            enabled: true,
          },
          legend: false,
        },
        scales: {
          y: {
            min: 0,
            grid: {
              drawOnChartArea: false,
              drawBorder: false,
            },
          },
          x: {
            grid: {
              drawBorder: false,
              borderDash: [6],
              border: false,
            },
            ticks: {
              font: {
                family: "'Mulish', sans-serif",
                size: "10px",
              },
            },
          },
        },
      },
    };

    if (chart.value && chart.value.data) {
      chart.value.data.destroy();
    }

    chart.value = new Chart(ctx, chartData);
  }
};
</script>
