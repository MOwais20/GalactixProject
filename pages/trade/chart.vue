<template>
  <div class="view-chart">
    <div class="trade-view" id="trade-view"></div>
  </div>
</template>

<script>
import { widget } from "@/static/library/tradeview/charting_library/charting_library.min.js";
import datafeeds from "@/static/library/datafeeds/datafees";
import { mapState, mapMutations, mapActions } from "vuex";
import moment from "moment";

export default {
  props: ["chart"],
  data() {
    return {
	  isReady: false,
      mountedCount: 0,
      widget: null,
      shapes: {},
      datafeeds: new datafeeds(this),
      symbol: null,
      interval: 10,
      cacheData: {},
      lastTime: null,
      getBarTimer: null,
      isLoading: true,
      containerId: {
        default: "tv_chart_container",
        type: String
      },
      barSpacing: 10,
      isConnected: false,
      timeDisconnect: 0,
      timeOutDisconnect: false,
    };
  },

  computed: {
    ...mapState("market", ['market_active']),
    ...mapState("trading", ["chartmode", 'orders', 'chart_data', 'chart_update_data']),
  },
  mounted() {
    // console.error("mounted");
      //
    this.$socket.emit("join", this.market_active.market_name, this.interval+"s");
    this.init(this.market_active.market_name);
    // let chartType = null;
    // if(this.chartmode == 'advance') {
    //   chartType = 1;
    // }else{
    //   chartType = 1;
    // }
    // let self = this;
    // this.widget.onChartReady(function () {
    //   self.widget.chart().setChartType(chartType);
    // });
  },
  destroyed() {
	  this.shapes = {};
    this.$socket.emit("leave", this.market_active.market_name);
  },
  watch: {

    chartmode(val, oldval) {
      this.isReady = false;
      this._change_chartmode(val);
    },
    market_active(val, oldval) {
      this.isReady = false;
      this.$socket.emit("leave", oldval.market_name);
      this.$socket.emit("join", val.market_name, this.interval+"s");
      this.symbol = val.market_name;
      let self = this;
      this.widget.onChartReady(function () {
        self.widget.chart().setSymbol(val.market_name);
      });
    },
    orders(newVal, oldVal) {
		  this.drawOrders(newVal);
    },
    chart_data(data, oldVal) {
      if(data != undefined && data.length > 0) {
        const list = [];
        const ticker = `${this.market_active.market_name}-${this.interval}`;
        data.forEach(order => {
          list.push({
            close: Number(order.c),
            open: Number(order.o),
            high: Number(order.h),
            low: Number(order.l),
            // volume: Number(order.v),
            time: Number(Number(order.t) * 1000)
          });
          this.cacheData[ticker] = list;
          this.lastTime = list[list.length - 1].time;
        });
        this.datafeeds.barsUpdater.updateData();
      }
		this.isReady = true;
    },
    chart_update_data(data, oldVal) {
		if(this.isReady){
			this.onDataChart(data);
		}
    }
  },

  methods: {
    ...mapMutations("trading", ["change_chartmode", "removeOrders"]),
    ...mapActions("market", ["getBlurs"]),
    ...mapActions("trading", ["getPendingOrder"]),

    init(symbol) {
      this.widget = new widget({
        fullscreen: false,
        autosize: true,
        symbol: symbol,
        container_id: "trade-view",
        datafeed: this.datafeeds,
        library_path: "tradeview/charting_library/",
        locale: "en",
        theme: "Dark",
        timezone: "UTC",
        pricescale: 8,
        charts_storage_api_version: "1.1",
        client_id: "tradingview.com",
        user_id: "public_user_id",
        debug: false,
        save_image: false,
        loading_screen: {
          backgroundColor: "#181E2F",
          foregroundColor: "#181E2F"
        },
        interval: this.interval,
        toolbar_bg: "rgba(0,0,0, 0)",
        background: "#181E2F",
        disabled_features: [
            "chart_property_page_trading",
            "chart_crosshair_menu",
            "create_volume_indicator_by_default",
            "create_volume_indicator_by_default_once",
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

        enabled_features: [
            "right_bar_stays_on_scroll",
            "minimalistic_logo",
            "move_logo_to_main_pane",
            "narrow_chart_enabled",
            "show_logo_on_all_charts",
        ],
        overrides: {
          "timeScale.barSpacing": this.barSpacing,
          "paneProperties.legendProperties.showSeriesTitle": false,
          "paneProperties.legendProperties.showSeriesOHLC": false,
          "mainSeriesProperties.style": 1,
          "mainSeriesProperties.priceLineWidth": 2,
          "symbolWatermarkProperties.color": "#944",
          "volumePaneSize": "small",
          "paneProperties.background": "#181e2f",
          "paneProperties.vertGridProperties.color": "#212737",
          "paneProperties.horzGridProperties.color": "#212737",
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
        custom_css_url: "chart.css"
      });
      this.symbol = symbol;
    },

	drawOrders(newVal){
      if(this.chartmode == 'advance') {
        let self = this;
        let newOrders = [];
        let removeShapes = [];
        for(var i=0; i < newVal.length; i++){
            let isContain = false;
            for (const n in self.shapes) {
              if(n == newVal[i].orderid){
                isContain = true;
              }
            }
            if(!isContain){
              newOrders.push(newVal[i]);
            }
        };
        for (const n in self.shapes) {
            let isContain = false;
            for(var i=0; i < newVal.length; i++){
              if(n == newVal[i].orderid){
                isContain = true;
              }
            }
            if(!isContain){
              removeShapes.push(n);
            }
        };
        newOrders.forEach(order => {
          if(self.market_active.market_name == order.market_name){
            self.newLineChart(order.orderid, order.action, order.round, order.expired,  order.open_price, order.amount);
          }
        });
        removeShapes.forEach(shape => {
          this.widget.onChartReady(function () {
              self.widget.chart().removeEntity(self.shapes[shape].arrowId);
              self.shapes[shape].remove();
          });
          delete self.shapes[shape];
        });
      }
	},
    updateLineText(){
      if(this.chartmode != 'advance'){
        return;
      }
      let self = this;
      let removeOrders = [];
      this.orders.forEach((order, index) => {
        if(!(order.orderid in self.shapes)){
          return;
        }
        let second = moment.utc(order.expired_at,"YYYY-MM-DD HH:mm:ss").diff(moment().utc(),'seconds');
        if(second <= 0){
          removeOrders.push(order);
        }else{
          let time = new Date(second * 1000).toISOString().substr(14, 5);
          self.shapes[order.orderid].setQuantity(time);
        }
      });
      if(removeOrders.length > 0){
        this.removeOrders(removeOrders);
      }
    },

    onDataChart(data) {
      if (data && data.s == this.market_active.market_name) {
        const ticker = `${data.s}-${this.interval}`;
        const ss = this.interval;

        if(this.cacheData[ticker] != undefined) {
          let op = this.cacheData[ticker][
            this.cacheData[ticker].length - 1
          ];
          if(this.chartmode == 'advance'){
            let isExist = Math.ceil(data.t/ss)*ss * 1000 == op.time;
            if(!isExist){
              this.cacheData[ticker].push({
                close: Number(data.c),
                open: Number(op.close),
                high: Number(data.h),
                low: Number(data.l),
                time: Number(Math.ceil(data.t/ss)*ss * 1000),
              });
            }else{
              this.cacheData[ticker].push({
                close: Number(data.c),
                open: Number(op.open),
                high: Number(Math.max(data.h,op.high)),
                low: Number(Math.min(data.l,op.low)),
                time: Number(Math.ceil(data.t/ss)*ss * 1000),
              });
            }
          }else{
            this.cacheData[ticker].push({
              close: Number(data.c),
              open: Number(data.o),
              high: Number(data.h),
              low: Number(data.l),
              time: Number(data.t * 1000),
            });
          }
          this.lastTime = this.cacheData[ticker][
            this.cacheData[ticker].length - 1
          ].time;
          this.datafeeds.barsUpdater.updateData();
          this.updateLineText();
        }
      }
    },
    getBars( symbolInfo, resolution, rangeStartDate, rangeEndDate, onLoadedCallback) {
      // if (this.interval !== (resolution)) {
      //   // this.interval = resolution;
      //   let self = this;
      //   this.widget.onChartReady(function () {
      //     self.widget.chart().setSymbol(self.market_active.market_name);
      //   });
      //   this.$socket.emit("leave", this.market_active.market_name);
      //   this.$socket.emit("join", this.market_active.market_name, this.interval+"s");
      // }
      // console.error(`${resolution} ${rangeStartDate} ${rangeEndDate}`);
      const ticker = `${this.symbol}-${this.interval}`;
      if (this.cacheData[ticker] && this.cacheData[ticker].length) {
        this.isLoading = false;
        const newBars = [];
        this.cacheData[ticker].forEach(item => {
          if (
            item.time >= rangeStartDate * 1000 &&
            item.time <= rangeEndDate * 1000
          ) {
            newBars.push(item);
          }
        });
        onLoadedCallback(newBars);
      } else {
        const self = this;
        this.getBarTimer = setTimeout(function() {
          self.getBars(
            symbolInfo,
            resolution,
            rangeStartDate,
            rangeEndDate,
            onLoadedCallback
          );
        }, 10);
      }
    },

    newLineChart(orderid, orderType, round, expired, price, amount){
      let self = this;
      this.widget.onChartReady(function () {
		    var ids = null;
        let option = {
            disableSelection: true,
            disableSave: false,
            disableUndo: true,
            // lock: true,
            text: self.$format.currency(amount),
            zOrder: "top",
        };
        ids = self.widget.chart().createPositionLine();
        if(orderType == 'BUY') {//set color
          option.shape = "arrow_up";
          option.overrides = {
            fontsize: 11,
            color: "#6fcf97",
            backgroundColor: "#6fcf97",
            borderColor: "#6fcf97"
          }
        } else {
          option.shape = "arrow_down";
          option.overrides = {
            fontsize: 11,
            color: "#eb5757",
            backgroundColor: "#eb5757",
            borderColor: "#eb5757"
          }
        }
        ids.setQuantity(Number(expired)*60).
            setText("").
            setLineWidth(2).
            setLineLength(3).
            setPrice(price).
            setBodyFont("bold 14pt Verdana");
        if(orderType == 'BUY') {//set color
          ids.setLineColor('#2DAE40').
            setQuantityBorderColor('#2DAE40').
            setQuantityBackgroundColor('#2DAE40');
        } else {
          ids.setLineColor('#DC4B2C').
            setQuantityBorderColor('#DC4B2C').
            setQuantityBackgroundColor('#DC4B2C');
        }

		    let roundTmp = Math.ceil(Number(round)/Number(self.interval))*Number(self.interval);
        ids.arrowId = self.widget.chart().createShape({time: roundTmp, price: price}, option);
        self.shapes[orderid] = ids;
      });
    },
  }
};
</script>

<style lang="scss">

@media screen and (min-width: 992px) {
  #trade-view {
    height: 100%;
    // height: calc(85vh - 85px);
  }
}
@media screen and (max-width: 992px) {
  #trade-view {
    // height: calc(50vh - 50px);
    height: 100%;
  }
}
/* Landscape */
@media only screen
  and (min-device-width: 375px)
  and (max-device-width: 812px)
  and (-webkit-min-device-pixel-ratio: 3)
  and (orientation: portrait) {
    .btn_value_basic {
      width: 25%!important;
    }
    #trade-view {
      // height: 40vh !important;
      height: 100%;
    }
}
@media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: landscape) {

  .ipad_portrait_footer {
    flex-direction: row!important;
    > div:first-child {
      width: 50%!important;
    }
    > div:last-child {
      width: 50%!important;
    }
  }
  .ipad_portrait_head {
    flex-direction: row!important;
    > div:first-child {
      width: 50%!important;
    }
    > div:last-child {
      width: 50%!important;
    }
    .game {
      .col {
        .item {
          width: 15px;
          height: 15px;
        }
      }
    }
  }

  .footer-trade {
    display: none !important;
  }
  .widget {
    .amount-current:first-child {
      border: 0;
    }
    .mobile {
      flex-wrap: wrap;
      background: #020d18;
      border-radius: 10px;
      .item {
        flex: 1 0 100%;
        border: 0 !important;
      }
      .profit {
        padding-left: 0.75rem !important;
        padding-right: 0.75rem !important;
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
        border-top: 1px solid red !important;
        flex-direction: row;
        * {
          display: block;
          padding: 0;
        }
        .profit-head {
          width: 50%;
          float: left;
          color: red;
          font-weight: bold;
          margin-top: 10px !important;
          justify-content: unset !important;
          align-items: unset !important;
        }
        .profit-data {
          width: 50%;
          float: left;
          justify-content: unset !important;
          align-items: unset !important;
        }
      }
    }
  }
  .buy_sale {
    padding: 0 !important;
  }
  #trade-view {
    // height: 80vh !important;
    height: 100%;
  }
  .widget-db {
    display: none !important;
  }
  .widget-mobile {
    display: block !important;
    max-width: 33.3333333333%;
  }
  // .card-trade {
  //   width: 66.6666666667% !important;
  //   max-width: 66.6666666667% !important;
  // }
  #trade-view {
    max-width: 100%;
    // height: 70vh !important;
    height: 100%;
    flex: 0 0 100%;
  }
  .btn_value_basic {
      width: 25%!important;
      padding-left: 0!important;
      p {
        padding: 2px!important;
      }
  }
}

@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) and (-webkit-min-device-pixel-ratio: 2) {

  .ipad_portrait_footer {
    flex-direction: column;
    > div:first-child {
      width: 100%;
    }
    > div:last-child {
      width: 100%;
    }
  }
  .ipad_portrait_head {
    flex-direction: column;
    > div:first-child {
      width: 100%;
    }
    > div:last-child {
      width: 100%;
    }
    .game {
      .col {
        .item {
          width: 15px;
          height: 15px;
        }
      }
    }
  }

}

@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 2) {
  .card-trade {
    width: 100% !important;
    max-width: 75%;
    flex: 0 0 100%;
  }
  .ipad_portrait_footer {
    flex-direction: column!important;
    > div:first-child {
      width: 100%;
    }
    > div:last-child {
      width: 100%;
    }
  }
  .ipad_portrait_head {
    flex-direction: column!important;
    > div:first-child {
      width: 100%;
    }
    > div:last-child {
      width: 100%;
    }
    .game {
      .col {
        .item {
          width: 15px;
          height: 15px;
        }
      }
    }
  }
  #trade-view {
    max-width: 100%;
    // height: 60vh !important;
    height: 100%!important;
    flex: 0 0 100%;
  }
  .widget-view {
    display: block !important;
  }
  .widget-db {
    width: 100%;
    max-width: 100%;
  }
  .flex-wrapper {
    flex-wrap: wrap;
  }
  .widget-mobile {
    width: 100%;
    max-width: 100%;
    flex: 0 0 100%;
  }
  .widget {
    flex-direction: row;
  }
}
.view-chart #trade-view {
  border: unset;
}
</style>
