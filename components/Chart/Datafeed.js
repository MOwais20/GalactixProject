const supportedResolutions = ["1", "5", "15", "30", "60", "240", "D"];
// const supportedResolutions = ['1']

// config
const config = {
  supports_search: false,
  supports_group_request: false,
  supports_marks: false,
  supports_timescale_marks: false,
  supports_time: false,
  supported_resolutions: supportedResolutions
};

export default class Datafeed {
  constructor(socket, context) {
    this.socket = socket;
    this.context = context;
  }
  onReady = cb => {
    setTimeout(() => cb(config), 0);
    // this.socket.emit("join", "btcusdt");
  };
  searchSymbols = (
    userInput,
    exchange,
    symbolType,
    onResultReadyCallback
  ) => {};
  resolveSymbol = (
    symbolName,
    onSymbolResolvedCallback,
    onResolveErrorCallback
  ) => {
    // console.log("resolveSymbol = symbolName xx>>", symbolName);

    if (symbolName) {
      // console.log(`resolveSymbol = symbolName xx>>`, !!symbolName);
      setTimeout(() => {
        // console.log(
        //   `resolveSymbol = setTimeout onSymbolResolvedCallback ...xx>>`
        // );

        onSymbolResolvedCallback({
          name: symbolName,
          description: "",
          type: "crypto",
          session: "24x7",
          timezone: "America/Chicago",
          ticker: symbolName,
          exchange: "",
          minmov: 1,
          pricescale: 1000000000,
          has_intraday: true,
          supported_resolution: supportedResolutions,
          volume_precision: 8,
          data_status: "streaming"
        });
      }, 0);

      return;
    }

    onResolveErrorCallback("Not found.");
  };
  getBars = (
    symbolInfo,
    resolution,
    from,
    to,
    onHistoryCallback,
    onErrorCallback,
    firstDataRequest
  ) => {
    if (firstDataRequest) {
      // console.log(`getBars = firstDataRequest xx>>`, !!firstDataRequest);
      this.socket.on("join", (res, cb) => {
        // console.log(`getBars = ON join xx>>`, res);
        const data = res.candles.map(candle => {
          const close = candle.c;
          const open = candle.o;
          const high = candle.h;
          const low = candle.l;
          const volume = candle.v;
          const time = candle.t * 1000;

          return { close, open, high, low, volume, time };
        });
        // console.log(`getBars = data 11xx>>`, data);
        if (data.length) {
          // console.log(`getBars = data.length 11xx>>`, !!data.length);
          onHistoryCallback(data, { noData: false });
        } else {
          // console.log(`getBars = data.length 11xx>>`, !!data.length);
          onHistoryCallback(data, { noData: true });
        }
      });
    }
  };
  subscribeBars = (
    symbolInfo,
    resolution,
    onRealtimeCallback,
    subscribeUID,
    onResetCacheNeededCallback
  ) => {
    // console.log("subscribeBars = =====subscribeBars running xx>>");
    this.socket.on("candles", candle => {
      // console.log(`subscribeBars = on candles xx>>`);
      try {

        let lastK = {
          time: candle.t * 1000,
          close: candle.c,
          open: candle.o,
          high: candle.h,
          low: candle.l,
          volume: candle.v || 0
        };
        // console.log(`subscribeBars = lastK`, lastK.close);

        onRealtimeCallback(lastK);
      } catch (e) {
        console.error(e);
      }
    });
  };
  unsubscribeBars = subscriberUID => {
    this.socket.off('chart')
  };

  /* optional methods */
  getServerTime = cb => {};
  calculateHistoryDepth = (resolution, resolutionBack, intervalBack) => {
    switch (resolution) {
      case "D":
        return {
          resolutionBack: "D",
          intervalBack: 120
        };

      case "240":
        return {
          resolutionBack: "D",
          intervalBack: 100
        };

      case "60":
        return {
          resolutionBack: "D",
          intervalBack: 150
        };

      case "30":
        return {
          resolutionBack: "D",
          intervalBack: 300
        };

      default:
        return {
          resolutionBack: "D",
          intervalBack: 3
        };
    }
  };
  getMarks = (symbolInfo, startDate, endDate, onDataCallback, resolution) => {};
  getTimeScaleMarks = (
    symbolInfo,
    startDate,
    endDate,
    onDataCallback,
    resolution
  ) => {};
}
