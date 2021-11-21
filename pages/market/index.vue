<template>
  <v-container fill-height class="my-5 pa-2">
    <v-row>
      <v-col
        :cols="$vuetify.breakpoint.smAndUp ? '3' : '12'"
        v-for="(data, index) in marketCards"
        :key="index"
      >
        <v-card
          flat
          width="auto"
          min-height="200px"
          :height="$vuetify.breakpoint.smAndUp ? 'fit-content' : 'auto'"
          :class="data.chart ? '' : 'elevation-5'"
        >
          <v-row
            no-gutters
            class="justify-space-between align-center px-5 py-3"
          >
            <span class="font_wght700">{{ data.coin }}</span>

            <v-chip
              :color="data.chart ? 'success' : 'error'"
              class="white--text"
              width="52px"
              height="24px"
            >
              0,02%
            </v-chip>
          </v-row>
          <div class="px-5">
            <span
              class="font-weight-bold"
              :class="data.chart ? 'success--text' : 'error--text'"
              >{{ data.value }}</span
            >
            <span class="grey--text ml-2" style="font-size: 14px">{{
              data.amount
            }}</span>
            <br />
            <span class="font_wght500 ft-14 grey--text">{{ data.label }}</span>
          </div>
          <!-- <v-img
            :src="
              data.chart
                ? '/img/SuccesslinearChart.svg'
                : '/img/WarninglinearChart.svg'
            "
            height="auto"
            width="auto"
          ></v-img> -->

          <!-- <ChartMarket :color="data.chart ? '#00D673' : '#FF315A'" /> -->

          <v-sparkline
            id="marketChart"
            height="100%"
            :fill="true"
            :gradient="data.chart ? ['#49db92', '#ffffff'] : ['#FF315A', '#ffffff']"
            :line-width="5"
            :padding="1"
            :smooth="20"
            type="trend"
            :value="[0, 2, 5, 9, 5, 3, 5, 15, 0, 1, 8, 2, 9, 0]"
            auto-draw
          ></v-sparkline>
        </v-card>
      </v-col>
    </v-row>

    <v-row class="pt-10" no-gutters justify="start">
      <v-col>
        <h1 class="ft-40 font-weight-black">
          Market <span class="subtitle-2 grey--text">(24h)</span>
        </h1>
      </v-col>
    </v-row>

    <v-card class="mb-15" width="100%">
      <v-card-text>
        <v-tabs slider-size="4" v-model="tab" active-class="active-tabs">
          <v-tab
            v-for="item in marketTabs"
            :key="item"
            class="font_wght400 ft-16 noCapitalize"
          >
            {{ item }}
          </v-tab>

          <v-spacer />
          <v-text-field
            style="max-width: 300px"
            placeholder="Search for coins"
            filled
            hide-details
            rounded
            dense
          >
            <template v-slot:prepend-inner>
              <v-img
                class="pointer mx-2"
                max-width="20"
                height="20"
                lazy-src="/icons/MagnifyingGlass.png"
                src="/icons/MagnifyingGlass.png"
              />
            </template>
          </v-text-field>
        </v-tabs>
        <v-divider></v-divider>

        <v-tabs-items v-model="tab">
          <v-tab-item v-for="item in marketTabs" :key="item">
            <v-data-table
              :headers="headers"
              :items="market"
              hide-default-footer
            >
              <template v-slot:item="{ item }">
                <tr>
                  <td>
                    <div class="d-flex flex-row flex-wrap">
                      <v-img
                        class="pointer mx-2"
                        max-width="20"
                        height="20"
                        src="/icons/Star.png"
                      />
                      <span class="dark--text font-weight-bold"
                        >{{ item.pair1 }}
                        <span class="grey--text font-weight-light">{{
                          item.Pair2
                        }}</span></span
                      >
                    </div>
                  </td>
                  <td class="text-right">
                    <span class="dark--text text-right">{{ item.price }}</span>
                  </td>
                  <td class="text-right">
                    <span class="success--text">{{ item.change }}</span>
                  </td>
                  <td class="text-right">
                    <span class="dark--text">{{ item.high }}</span>
                  </td>
                  <td class="text-right">
                    <span class="dark--text">{{ item.low }}</span>
                  </td>
                  <td class="text-right">
                    <span class="dark++ --text">{{ item.volume }}</span>
                  </td>
                  <td class="text-right">
                    <v-btn text class="outlined">
                      <span class="font_wght500 ft-14 trade-btn"
                        >Trade now</span
                      >
                    </v-btn>
                  </td>
                </tr>
              </template>
            </v-data-table>
          </v-tab-item>
        </v-tabs-items>

        <!-- <v-row no-gutters style="max-height: 70px">
          <v-col class="mt-2 d-flex flex-wrap">
            <v-btn
              plain
              text
              class="text-capitalize font-weight-normal justify-lg-start"
              width="150px"
            >
              Favorite
            </v-btn>
            <v-btn
              plain
              text
              class="text-capitalize font-weight-normal justify-lg-start"
              width="150px"
            >
              BTC Market
            </v-btn>
            <v-btn
              plain
              text
              class="text-capitalize font-weight-normal justify-lg-start"
              width="150px"
            >
              ETH Market
            </v-btn>
            <v-btn
              plain
              text
              class="text-capitalize font-weight-normal justify-lg-start"
              width="150px"
            >
              USDT Market
            </v-btn>
            <v-spacer />
            <v-text-field
              style="max-width: 300px"
              placeholder="Search for coins"
              filled
              hide-details
              rounded
              dense
            >
              <template v-slot:prepend-inner>
                <v-img
                  class="pointer px-0"
                  width="20"
                  height="20"
                  src="/icons/MagnifyingGlass.png"
                />
              </template>
            </v-text-field>
          </v-col>
        </v-row> -->
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      tab: null,
      marketTabs: ["Favorite", "BTC Market", "ETH Market", "USDT Market"],
      marketCards: [
        {
          coin: "ETH/BTC",
          value: 0.065552,
          amount: "$2,519.21",
          label: "KL: 254.20 BTC",
          chart: true,
        },
        {
          coin: "BTC/USDT",
          value: 0.065552,
          amount: "$2,519.21",
          label: "KL: 254.20 BTC",
          chart: false,
        },
        {
          coin: "ETH/BTC",
          value: 0.065552,
          amount: "$2,519.21",
          label: "KL: 254.20 BTC",
          chart: true,
        },
        {
          coin: "ETH/BTC",
          value: 0.065552,
          amount: "$2,519.21",
          label: "KL: 254.20 BTC",
          chart: true,
        },
      ],
      headers: [
        {
          text: "Pair",
          align: "start",
          value: "name",
        },
        { text: "Price", align: "right", value: "calories" },
        { text: "Change", align: "right", value: "fat" },
        { text: "High", align: "right", value: "carbs" },
        { text: "Low", align: "right", value: "protein" },
        { text: "Volume", align: "right", value: "iron" },
        { text: "", value: "" },
      ],
      market: [
        {
          pair1: "ETH/",
          Pair2: "BTC",
          price: "0.06552 / $3,105.33",
          change: "0.70%",
          high: "0,071529",
          low: "0,067076",
          volume: "282,33492862",
        },
        {
          pair1: "ETH/",
          Pair2: "BTC",
          price: "0.06552 / $3,105.33",
          change: "0.70%",
          high: "0,071529",
          low: "0,067076",
          volume: "282,33492862",
        },
        {
          pair1: "ETH/",
          Pair2: "BTC",
          price: "0.06552 / $3,105.33",
          change: "0.70%",
          high: "0,071529",
          low: "0,067076",
          volume: "282,33492862",
        },
        {
          pair1: "ETH/",
          Pair2: "BTC",
          price: "0.06552 / $3,105.33",
          change: "0.70%",
          high: "0,071529",
          low: "0,067076",
          volume: "282,33492862",
        },
        {
          pair1: "ETH/",
          Pair2: "BTC",
          price: "0.06552 / $3,105.33",
          change: "0.70%",
          high: "0,071529",
          low: "0,067076",
          volume: "282,33492862",
        },
        {
          pair1: "ETH/",
          Pair2: "BTC",
          price: "0.06552 / $3,105.33",
          change: "0.70%",
          high: "0,071529",
          low: "0,067076",
          volume: "282,33492862",
        },
        {
          pair1: "ETH/",
          Pair2: "BTC",
          price: "0.06552 / $3,105.33",
          change: 0.2,
          high: "0,071529",
          low: "0,067076",
          volume: "282,33492862",
        },
        {
          pair1: "ETH/",
          Pair2: "BTC",
          price: "0.06552 / $3,105.33",
          change: "0.70%",
          high: "0,071529",
          low: "0,067076",
          volume: "282,33492862",
        },
        {
          pair1: "ETH/",
          Pair2: "BTC",
          price: "0.06552 / $3,105.33",
          change: "0.70%",
          high: "0,071529",
          low: "0,067076",
          volume: "282,33492862",
        },
        {
          pair1: "ETH/",
          Pair2: "BTC",
          price: "0.06552 / $3,105.33",
          change: "0.70%",
          high: "0,071529",
          low: "0,067076",
          volume: "282,33492862",
        },
      ],
    };
  },
  created() {
    
  },
  methods: {
    // clickTO() {
    //   var circle1 = document.getElementById("marketChart").getElementsByTagName('path')[0].attributes[2].value = "red"; 
    //   // circle1.style.stroke="blue";
    //   //circle1.setAttribute("fill", "red")
    //   console.log('dadas',circle1);
    // }
  }
};
</script>

<style lang="scss" scoped>
.v-tabs {
  color: grey !important;
}

.v-tab--active {
  color: white !important;
  font-family: IBM Plex Sans !important;
  font-size: 16px !important;
  font-style: normal !important;
  font-weight: 600 !important;
  line-height: 19px !important;
  letter-spacing: 0em !important;
  text-align: center !important;
}

.v-tabs-slider-wrapper {
  .v-tabs-slider {
    width: 62px !important;
  }
}

.trade-btn {
  color: #c99400 !important;
}

.chartColor {
  background: linear-gradient(180deg, rgba(69, 217, 148, 0.747) 0%, rgb(69, 217, 148) 100%);
}
</style>