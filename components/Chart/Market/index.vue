<template>
  <!-- <apexchart
      :options="chartOptions"
      :series="series"
    ></apexchart> -->

  <div id="chart">
    <apexchart
      type="area"
      height="185"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>

<script>
export default {
  props: ["color"],
  data() {
    return {
      series: [
        {
          name: "series1",
          data: [31, 40, 28, 51, 42, 109, 100],
        },
      ],
      chartOptions: {
        chart: {
          id: "marketGraph",
          height: "185",
          width: "10",
          type: "area",
          toolbar: {
            show: false,
          },
          zoom: {
            enabled: false,
          },
        },
        colors: [this.color],
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
        },
        yaxis: {
          labels: {
            show: false,
          },
          show: false,
          showAlways: false,
        },
        annotations: {
          yaxis: [
            {
              strokeDashArray: 0,
              borderColor: "#c2c2c2",
            },
          ],
        },
        grid: {
          show: false,
          borderColor: "#90A4AE",
          xaxis: {
            lines: {
              show: false,
            },
          },
        },
        xaxis: {
          labels: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
          type: "datetime",
          axisBorder: {
            show: false,
          },
          categories: [
            "2018-09-19T08:09:00.000Z",
            "2018-09-19T09:09:00.000Z",
            "2018-09-19T10:09:00.000Z",
            "2018-09-19T11:09:00.000Z",
            "2018-09-19T12:09:00.000Z",
            "2018-09-19T13:09:00.000Z",
            "2018-09-19T14:09:00.000Z",
          ],
        },
        tooltip: {
          x: {
            format: "dd.MM.yy",
          },
          style: {
            fontSize: "12px",
            fontFamily: "IBM Plex Sans",
            textAlign: "center",
          },
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped>
#SvgjsG9949 {
  transform: none !important;
  bottom: 105px !important;
}

#apexchartsmarketGraph {
  svg {
    width: 300px !important;
  }
}
</style>