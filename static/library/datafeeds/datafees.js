/**
 * JS API
 */
import dataUpdater from './dataUpdater'
class datafeeds {

  /**
   * JS API
   * @param {*Object} vue
   */
  constructor(vue) {
    this.self = vue
    this.barsUpdater = new dataUpdater(this)
  }

  /**
   * @param {*Function} callback
   * `onReady` should return result asynchronously.
   */
  onReady(callback) {
    return new Promise((resolve, reject) => {
      let configuration = this.defaultConfiguration()
      if (this.self.getConfig) {
        configuration = Object.assign(this.defaultConfiguration(), this.self.getConfig())
      }
      resolve(configuration)
    }).then(data => callback(data))
  }

  /**
   * @param {*String} symbolName ticker
   * @param {*Function} onSymbolResolvedCallback
   * @param {*Function} onResolveErrorCallback
   * `resolveSymbol` should return result asynchronously.
   */
  resolveSymbol(symbolName, onSymbolResolvedCallback, onResolveErrorCallback) {
    return new Promise((resolve, reject) => {
      let symbolInfo = this.defaultSymbol(symbolName)
      if (this.self.getSymbol) {
        symbolInfo = Object.assign(this.defaultSymbol(symbolName), this.self.getSymbol())
      }
      resolve(symbolInfo)
    }).then(data => onSymbolResolvedCallback(data)).catch(err => onResolveErrorCallback(err))
  }

  /**
   * @param {*Object} symbolInfo
   * @param {*String} resolution
   * @param {*Number} rangeStartDate
   * @param {*Number} rangeEndDate
   * @param {*Function} onDataCallback
   * @param {*Function} onErrorCallback
   */
  getBars(symbolInfo, resolution, rangeStartDate, rangeEndDate, onDataCallback, onErrorCallback) {
    const onLoadedCallback = data => {
      data && data.length ? onDataCallback(data, { noData: true }) : onDataCallback([], { noData: true })
    }
    this.self.getBars(symbolInfo, resolution, rangeStartDate, rangeEndDate, onLoadedCallback)
  }

  /**
   * onRealtimeCallback
   * @param {*Object} symbolInfo
   * @param {*String} resolution
   * @param {*Function} onRealtimeCallback
   * @param {*String} subscriberUID
   * @param {*Function} onResetCacheNeededCallback
   */
  subscribeBars(symbolInfo, resolution, onRealtimeCallback, subscriberUID, onResetCacheNeededCallback) {
    this.barsUpdater.subscribeBars(symbolInfo, resolution, onRealtimeCallback, subscriberUID, onResetCacheNeededCallback)
  }

  /**
   *
   * @param {*String} subscriberUID
   */
  unsubscribeBars(subscriberUID) {
    this.barsUpdater.unsubscribeBars(subscriberUID)
  }

  /**
   *
   */
  defaultConfiguration() {
    return {
      supports_search: true,
      supports_group_request: false,
      // supported_resolutions: ['1', '5', '15', '30', '60', '1D', '2D', '3D', '1W', '1M'],
      supported_resolutions: ['1'],
      supports_marks: true,
      supports_timescale_marks: true,
      supports_time: true
    }
  }

  /**
   *
   */
  defaultSymbol(symbolName) {
    var symbol_stub = {
      name: symbolName,
      description: `${symbolName}`,
      type: 'crypto',
      // session: '24x7',
      // 'timezone': 'America/New_York',
      timezone: 'UTC',
      ticker: symbolName,
      minmov: 1,
      pricescale: 10000,
      has_intraday: true,
      supported_resolution: [],
      volume_precision: 8,
      data_status: 'streaming',

      // 'volume_precision': 8,
      'exchange': 'BlockOption ',
      'pointvalue': 1,
      'fractional': false,
      'has_no_volume': false,
    }

    if (symbolName) {
      if (symbolName.includes('BTC')) {
        symbol_stub.pricescale = 100;
      } 
    } else {
      symbol_stub.pricescale = 100000000;
    }

    return symbol_stub;
  }
}

export default datafeeds