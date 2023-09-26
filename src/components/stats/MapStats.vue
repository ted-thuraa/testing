<template>
  <div ref="chartdiv" style="width: 100%; height: 350px"></div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, toRefs } from "vue";
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import { useStore } from "vuex";

const store = useStore();

const props = defineProps({
  mapdata: Object,
});
const { mapdata } = toRefs(props);

const chartdiv = ref(null);
let root = null;
let chart = null;
let polygonSeries = null;

const getcountriesData = async (username) => {
  try {
    const res = await store.dispatch("getcountriesData");
    console.log(res.data);
    mapdata.value = res.data;
  } catch (error) {
    console.log(error);
  }
};

onMounted(async () => {
  root = am5.Root.new(chartdiv.value);

  root.setThemes([am5themes_Animated.new(root)]);

  chart = root.container.children.push(
    am5map.MapChart.new(root, {
      panX: "rotateX",
      panY: "none",
      projection: am5map.geoNaturalEarth1(),
    })
  );

  // Create polygon series
  polygonSeries = chart.series.push(
    am5map.MapPolygonSeries.new(root, {
      geoJSON: am5geodata_worldLow,
      valueField: "value",
      calculateAggregates: true,
      exclude: ["AQ"],
    })
  );

  polygonSeries.mapPolygons.template.set("fill", am5.color(0xe8e9eb));
  polygonSeries.mapPolygons.template.setAll({
    tooltipText: "{name}: {value}",
  });

  polygonSeries.set("heatRules", [
    {
      target: polygonSeries.mapPolygons.template,
      dataField: "value",
      min: am5.color(0x2013ee),
      max: am5.color(0x2013ee),
      key: "fill",
    },
  ]);

  // Fetch data from your database
  // Replace this with your own data fetching code
  console.log(mapdata.value);
  polygonSeries.data.setAll(mapdata.value);
  // polygonSeries.data.setAll([
  //   { id: "US", value: 44 },
  //   { id: "ES", value: 62 },
  //   { id: "KE", value: 51 },
  //   { id: "ZA", value: 6 },
  //   { id: "AU", value: 33 },
  //   { id: "BE", value: 13 },
  //   { id: "BR", value: 73 },
  // ]);
});

onBeforeUnmount(() => {
  if (root) {
    root.dispose();
  }
});
</script>
