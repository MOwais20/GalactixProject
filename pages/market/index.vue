<template>
  <v-container fill-height class="my-5 pa-0">
    <v-row class="py-5">
      <v-col cols="3" v-for="(data, index) in marketCards" :key="index">
        <v-card
          flat
          width="auto"
          height="200"
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
          <v-img
            :src="
              data.chart
                ? '/img/SuccesslinearChart.svg'
                : '/img/WarninglinearChart.svg'
            "
            min-height="109.5px"
            width="auto"
          ></v-img>
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
        <v-row no-gutters style="max-height: 70px">
          <v-col class="mt-2 d-flex">
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
              placeholder="Tìm kiếm coin"
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
        </v-row>
      </v-card-text>
      <v-data-table
        fixed-header
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
              <v-btn text class="primary--text outlined">
                <span class="font-weight-light ft-14">Trade now</span>
              </v-btn>
            </td>
          </tr>
        </template>
      </v-data-table>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
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
};
</script>

<style scoped>
</style>