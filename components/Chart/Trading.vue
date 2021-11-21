<template>
  <div ref="chart">
    <div :id="id" class="full-width full-height" />
  </div>
</template>
<script>
import { mapState, mapActions, mapMutations } from "vuex";
import { DataFeed, widget as TvWidget } from "./tradingview-api";

const supported_resolutions = ["1", "5", "15", "30", "60", "240", "D", "W", "M"];

const intervalMap = {"1min": "1", "5min": "5", "15min": "15", "30min": "30", "60min": "60", "4hour": "240", "1day": "D", "1week": "W", "1mon": "M"};

export default {
  props: {
    id: {
      type: String,
      default: "tv-chart",
    },
    interval: {
      type: String,
      default: "1min",
    },
    libraryPath: {
      type: String,
      default: "/charting_library/",
    },
    clientId: {
      type: String,
      default: "tradingview.com",
    },
  },
  data() {
    return {
      reconnectInterval: null,
      pong: false,
      symbol: "BTCUSDT",
      widgetOptions: {},
      width: window.innerWidth,
      height: window.innerHeight,
      widget: null,
      barSpacing: 0,
      datafeed: new DataFeed({
        getBars: ({
          symbolInfo,
          resolution,
          from,
          to,
          firstDataRequest,
          onHistoryCallback,
          onErrorCallback,
          contextChart,
        }) => {
          this.getBars(
            symbolInfo,
            resolution,
            from,
            to,
            onHistoryCallback,
            onErrorCallback,
            firstDataRequest,
            contextChart
          );
        },
        fetchResolveSymbol: () => this.resolveSymbol(),
        fetchConfiguration: () => {
          return new Promise((resolve) => {
            resolve({
              supported_resolutions: supported_resolutions,
            });
          });
        },
      }),
      chartData: [],
    };
  },
  computed: {
    // ...mapState("trading", ["market_list", "market_active", "is_mobile"]),
  },
  watch: {
    market_active(value, old) {
      if (
        value &&
        value.market_name != undefined &&
        value.market_name != this.symbol
      ) {
        this.setSymbol(value.market_name);
      }
    },
  },
  methods: {
    // ...mapActions("trading", ["GET_BAR_HISTORY"]),
    // ...mapMutations("trading", ["SET_DISCONNECT"]),
    async InitFromBinnace(){
          var x = await this.$axios.get("https://www.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1m");
          var tempList = []
          x.data.forEach(p=>{
          //   let newData = {
          //       // c: parseFloat(p[4]),
          //       // h: parseFloat(p[2]),
          //       // l: parseFloat(p[3]),
          //       // o: parseFloat(p[1]),
          //       // s: parseFloat(0),
          //       // v: parseFloat(p[5]),
          //       // t: parseFloat(p[0])
          //   };
            var listData = [];
            listData.push(parseFloat(p[0]),parseFloat(p[4]),parseFloat(p[1]),parseFloat(p[2]),parseFloat(p[3]), parseFloat(p[5]))
            tempList.push(listData)
          })
        return tempList;
    },
    resolveSymbol() {
      return new Promise((resolve) => {
        const symbol = this.symbol;
        resolve({
          name: symbol.toLocaleUpperCase(),
          full_name: symbol.toLocaleUpperCase(),
          description: symbol.toLocaleUpperCase(),
          type: symbol,
          session: "24x7",
          exchange: "",
          listed_exchange: symbol,
          timezone: "Etc/UTC",
          minmov: 1,
          pricescale: 100,
          has_intraday: true,
          volume_precision: 2,
          data_status: "streaming",
          supported_resolutions: supported_resolutions,
        });
      });
    },
    getBars( symbolInfo, resolution, from, to, onHistoryCallback, onErrorCallback, firstDataRequest, contextChart) {
      const symbol = this.symbol;
      // this.$socket.emit("join", symbol);
      // this.$socket.on("join", (res, cb) => {
        this.$nextTick(async ()=> {
          var initData = await this.InitFromBinnace();
          contextChart.requesting = false;
          const data = initData.map((candle) => {
            const close = Number(candle[1]);
            const open = Number(candle[2]);
            const high = Number(candle[3]);
            const low = Number(candle[4]);
            const volume = Number(candle[5]);
            const time = Number(candle[0]);

            return { close, open, high, low, volume, time };
          });
        // })
        

        if (data.length) {
          this.chartData = _.sortedUniq(
            _.takeRight(_.map(data, "time"), 200000)
          );
          onHistoryCallback(_.takeRight(data, 200000), { noData: false });
        } else {
          this.chartData = [];
          onHistoryCallback(data, { noData: true });
        }
      });

      // this.subscribeKLine();
    },
    subscribeKLine() {
      const symbol = this.symbol;
      this.$socket.on("candles", (candle) => {
        let lastK = {
          time: Number(candle.t) * 1000,
          close: Number(candle.c),
          open: Number(candle.o),
          high: Number(candle.h),
          low: Number(candle.l),
          volume: Number(candle.v) || 0,
        };
        this.datafeed.updateKLine(lastK);
      });
    },
    unsubscribeKLine() {
      const symbol = this.symbol;
      this.$socket.emit("leave", symbol);
    },
    initTradingView() {
      const symbol = this.symbol;
      this.widget = new TvWidget({
        // debug: true,
        fullscreen: false,
        autosize: true,
        symbol: symbol.toLocaleUpperCase(),
        interval: intervalMap[this.interval],
        container_id: this.id,
        datafeed: this.datafeed,
        library_path: this.libraryPath,
        locale: "en",
        theme: "Dark",
        timezone: "Etc/UTC",
        client_id: this.clientId,
        toolbar_bg: "#00000000",
        disabled_features: [
          "chart_property_page_trading",
            "chart_crosshair_menu",
            // "create_volume_indicator_by_default",
            // "create_volume_indicator_by_default_once",
            "display_market_status",
            "show_chart_property_page",
            "symbol_info",
            "countdown",
            "header_interval_dialog_button",
            "study_templates",
            "save_chart_properties_to_local_storage",
            "volume_force_overlay",
            "move_logo_to_main_pane",
            "header_symbol_search",
            "symbol_search_hot_key",
            "compare_symbol",
            "timezone_menu",
            "go_to_date",
            "control_bar",
            "main_series_scale_menu",
            "header_compare",
            "timeframes_toolbar",
            "edit_buttons_in_legend",
            "use_localstorage_for_settings",
            "volume_force_overlay",
            "link_to_tradingview",
            "header_fullscreen_button",
            "study_templates",
            "header_resolutions",
            "header_settings"
        ],
        studies_overrides: {
          "volume.volume.visible": true,
          "volume.volume.color.0": "#FE0150",
          "volume.volume.color.1": "#01C36D"
        },
        enabled_features: [
          "chart_style_hilo",
          "dont_show_boolean_study_arguments",
          "hide_last_na_study_output",
          "move_logo_to_main_pane",
          "same_data_requery",
          "side_toolbar_in_fullscreen_mode",
          // "disable_resolution_rebuild"
        ],
        overrides: {
          volumePaneSize: "small",
          "timeScale.barSpacing": this.barSpacing,
          "paneProperties.legendProperties.showSeriesTitle": true,
          "paneProperties.legendProperties.showSeriesOHLC": true,
          "mainSeriesProperties.style": 1,
          "mainSeriesProperties.priceLineWidth": 2,
          "symbolWatermarkProperties.color": "#944",
          "volumePaneSize": "small",
          "paneProperties.background": "#ffffff",
          "paneProperties.vertGridProperties.color": "#fff",
          "paneProperties.horzGridProperties.color": "#eaecef",
          "symbolWatermarkProperties.transparency": 100,
          "scalesProperties.textColor": "#AAA",
          "mainSeriesProperties.areaStyle.color1": "#d4d2d2",
          "mainSeriesProperties.areaStyle.color2": "#a6a6a6",
          "mainSeriesProperties.areaStyle.linecolor": "#ffffff",
          "mainSeriesProperties.areaStyle.linestyle": 0,
          "mainSeriesProperties.areaStyle.linewidth": 2,
          "mainSeriesProperties.candleStyle.wickUpColor": '#2CAC3E',
          "mainSeriesProperties.candleStyle.upColor": '#2CAC3E',
          "mainSeriesProperties.candleStyle.downColor": '#DB4931',
          "mainSeriesProperties.candleStyle.wickDownColor": '#DB4931',
          "mainSeriesProperties.showCountdown": false,
          "mainSeriesProperties.statusViewStyle.symbolTextSource": 'ticker'
        },
        custom_css_url: "/chart.css",
      });
      this.addIndicator();
    },
    setSymbol(symbol) {
      this.unsubscribeKLine();
      this.symbol = symbol;
      this.widget?.setSymbol(symbol, intervalMap[this.interval], () => {
        console.log("------setSymbol---------", this.symbol);
      });
    },
    onResize() {
      this.width = this.$refs.chart.clientWidth;
      this.height = this.$refs.chart.clientHeight;
    },
    addIndicator() {
      let self = this;
      this.widget.onChartReady(function () {
        self.widget
          .activeChart()
          .createStudy("Moving Average", false, false, [5, "close", 0], {
            "plot.color": "#D71A1D",
            "plot.linewidth": 2,
          });
        self.widget
          .activeChart()
          .createStudy("Moving Average", false, false, [10, "close", 0], {
            "plot.color": "#2177ff",
            "plot.linewidth": 2,
          });
        let chart = self.widget.activeChart();
        // chart
        //   .selection()
        //   .onChanged()
        //   .subscribe(null, s => console.log(chart.selection().allSources()));

        if (self.is_mobile || self.$vuetify.breakpoint.mobile) {
          chart.setVisibleRange(
            {
              from: self.chartData[self.chartData.length - 21] / 1000,
              to: self.chartData[self.chartData.length - 1] / 1000,
            },
            { percentRightMargin: 0 }
          );
        } else {
          chart.setVisibleRange(
            {
              from: self.chartData[self.chartData.length - 63] / 1000,
              to: self.chartData[self.chartData.length - 1] / 1000,
            },
            { percentRightMargin: 0 }
          );
        }
      });
    },
    initSocket() {
      let vm = this;
      this.$socket.on("disconnect", (res) => {
        // vm.SET_DISCONNECT(true);
        vm.pong = false;
        if (res === "io server disconnect") {
          vm.$socket.connect();
        }
      });

      this.$socket.on("connect", (res) => {
        vm.SET_DISCONNECT(false);
        vm.$socket.emit("join", vm.symbol);
      });

      this.$socket.on("pong", (latency) => {
        vm.pong = true;
      });

      vm.reconnectInterval = setInterval(() => {
        if (vm.pong == false) {
          vm.$socket.connect();
        }
      }, 2000);
    },
  },
  mounted() {
    this.initTradingView();
    // this.initSocket();
    this.onResize();
    window.addEventListener("resize", this.onResize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  },
};
</script>
