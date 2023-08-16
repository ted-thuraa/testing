<template>
    <div ref="chartdiv" style="width: 100%; height: 250px"></div>
</template>

<script>
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

export default {
    name: "MapStats",
    mounted() {
        let root = am5.Root.new(this.$refs.chartdiv);

        root.setThemes([am5themes_Animated.new(root)]);

        let chart = root.container.children.push(
            am5map.MapChart.new(root, {
                panX: "rotateX",
                panY: "none",
                projection: am5map.geoNaturalEarth1(),
            })
        );

        // Create polygon series
        let polygonSeries = chart.series.push(
            am5map.MapPolygonSeries.new(root, {
                geoJSON: am5geodata_worldLow,
                valueField: "value",
                calculateAggregates: true,
                exclude: ["AQ"],
            })
        );

        polygonSeries.mapPolygons.template.set("fill", am5.color(0xf5fff3));
        polygonSeries.mapPolygons.template.setAll({
            tooltipText: "{name}: {value}",
        });

        polygonSeries.set("heatRules", [
            {
                target: polygonSeries.mapPolygons.template,
                dataField: "value",
                min: am5.color(0xaeff9e),
                max: am5.color(0x35ff07),
                key: "fill",
            },
        ]);

        // Fetch data from your database
        // Replace this with your own data fetching code
        polygonSeries.data.setAll([
            { id: "US", value: 44 },
            { id: "ES", value: 62 },
            { id: "KE", value: 51 },
            { id: "ZA", value: 6 },
            { id: "AU", value: 33 },
            { id: "BE", value: 13 },
            { id: "BR", value: 73 },
        ]);

        this.root = root;
    },

    beforeDestroy() {
        if (this.root) {
            this.root.dispose();
        }
    },
};
</script>
