<template>
  <v-container fluid fill-height class="pa-0 Homebg-color">
    <v-col tag="div" class="pa-0" align-self="start">
      <v-img
        max-height="1106px"
        width="100%"
        position="top"
        :src="'/banners/homeban.png'"
      >
        <v-container fill-height>
          <v-row justify="start" style="max-width: 1180px" class="mx-auto">
            <v-col align-self="center">
              <div>
                <h1 class="white--text py-3 display-2">
                  Buy & sell cryptocurrency easily
                </h1>
                <span class="grey--text"
                  >Trade Bitcoin, Etherium, USDT and other cryptocurrencies on a
                  fast <br />
                  and highly secure crypto trading platform</span
                >
              </div>

              <v-btn
                width="152px"
                height="48px"
                class="mt-10 black--text"
                depressed
                color="primary"
                href="/signUp"
              >
                Sign up now
              </v-btn>
            </v-col>

            <v-col align-self="center">
              <v-img
                height="335px"
                width="580px"
                src="/banners/dice.png"
              ></v-img>
            </v-col>
          </v-row>
        </v-container>
      </v-img>

      <!-- Stats Card on Front Cover -->
      <v-container fill-height class="statsCard">
        <v-row justify="center" dense style="max-width: 1180px" class="mx-auto">
          <v-col align-self="center">
            <v-card class="elevation-15">
              <v-card-text>
                <v-row class="pa-5">
                  <v-col>
                    <v-row no-gutters justify="center" align="center">
                      <v-img
                        src="/img/Bitcoin.png"
                        max-height="40px"
                        max-width="40px"
                      ></v-img>

                      <span class="font_wght400 px-3">BTC/USDT</span>

                      <v-chip color="success" class="white--text">
                        0,02%
                      </v-chip>
                    </v-row>

                    <v-row
                      class="my-3"
                      no-gutters
                      justify="center"
                      align="center"
                    >
                      <div class="font_wght700 ft-20 ml-15 mr-2">
                        40,335.25 <br />
                        <span class="font_wght500 ft-14 grey--text"
                          >$40,335.25</span
                        >
                      </div>

                      <v-img
                        src="/img/SuccesslinearChart.svg"
                        max-height="47.5px"
                        max-width="157px"
                      ></v-img>
                    </v-row>
                  </v-col>

                  <v-col>
                    <v-row no-gutters justify="center" align="center">
                      <v-img
                        src="/img/Ethereum.png"
                        max-height="40px"
                        max-width="40px"
                      ></v-img>

                      <span class="font_wght400 px-3">ETH/USDT</span>

                      <v-chip color="error" class="white--text"> 0,02% </v-chip>
                    </v-row>

                    <v-row
                      class="my-3"
                      no-gutters
                      justify="center"
                      align="center"
                    >
                      <div class="font_wght700 ft-20 ml-15 mr-2">
                        40,335.25 <br />
                        <span class="font_wght500 ft-14 grey--text"
                          >$40,335.25</span
                        >
                      </div>

                      <v-img
                        src="/img/WarningLinearChart.svg"
                        max-height="47.5px"
                        max-width="157px"
                      ></v-img>
                    </v-row>
                  </v-col>

                  <v-col>
                    <v-row no-gutters justify="center" align="center">
                      <v-img
                        src="/img/Tether.png"
                        max-height="40px"
                        max-width="40px"
                      ></v-img>

                      <span class="font_wght400 px-3">USDT/USDT</span>

                      <v-chip color="success" class="white--text">
                        0,02%
                      </v-chip>
                    </v-row>

                    <v-row
                      class="my-3"
                      no-gutters
                      justify="center"
                      align="center"
                    >
                      <div class="font_wght700 ft-20 ml-15 mr-2">
                        40,335.25 <br />
                        <span class="font_wght500 ft-14 grey--text"
                          >$40,335.25</span
                        >
                      </div>

                      <v-img
                        src="/img/SuccesslinearChart.svg"
                        max-height="47.5px"
                        max-width="157px"
                      ></v-img>
                    </v-row>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

      <v-container fill-height>
        <v-row
          justify="space-between"
          style="max-width: 1180px"
          class="mx-auto py-2"
        >
          <h3 class="font_wght700 ft-30">Market</h3>

          <v-btn to="/market" text plain>
            <v-subheader class="font_wght700 ft-14 black--text"
              >View all</v-subheader
            >
            <svg
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.00391 3L11.0039 8L6.00391 13"
                :stroke="$vuetify.theme.dark ? 'white' : 'black'"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </v-btn>
        </v-row>

        <v-row style="width: 80%" dense>
          <v-col class="pa-0" align="center">
            <v-card max-width="1180" class="round elevation-0">
              <v-card-text>
                <v-data-table
                  dense
                  :headers="headers"
                  :items="coinsList"
                  hide-default-footer
                >
                  <template v-slot:item="{ item }">
                    <tr>
                      <td>
                        <div class="d-flex flex-row align-center">
                          <v-img
                            :src="item.coinImg"
                            max-height="40px"
                            max-width="40px"
                            class="mx-2"
                          ></v-img>

                          <span class="font-weight-black ft-18">{{
                            item.label
                          }}</span>
                          <span
                            class="font-weight-bold grey--text ft-18 mx-2"
                            >{{ item.name }}</span
                          >
                        </div>
                      </td>
                      <td class="text-right">
                        <span
                          :class="item.market ? 'success--text' : 'error--text'"
                        >
                          {{ item.price }}</span
                        >
                      </td>
                      <td class="text-right">
                        <span class="success--text"> {{ item.change }}% </span>
                      </td>
                      <td>
                        <v-img
                          v-if="item.market"
                          class="float-right"
                          src="/img/SuccesslinearChart.svg"
                          max-height="47.5px"
                          max-width="157px"
                        ></v-img>

                        <v-img
                          v-else
                          class="float-right"
                          src="/img/WarningLinearChart.svg"
                          max-height="47.5px"
                          max-width="157px"
                        ></v-img>
                      </td>
                      <td class="text-right">
                        <v-btn class="mx-5" color="primary" depressed>
                          BUY
                        </v-btn>
                      </td>
                    </tr>
                  </template>
                </v-data-table>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <v-row
          justify="space-between"
          style="max-width: 1180px"
          class="mx-auto pt-15"
        >
          <h3 class="font_wght700 ft-30">Trusted partner for your journey</h3>
        </v-row>

        <v-row
          justify="center"
          style="max-width: 1180px"
          class="mx-auto pt-2 pb-15"
        >
          <v-col align="center">
            <v-img
              height="122px"
              width="122px"
              class="mx-auto"
              alt="Sandglass&Bitcoin"
              src="/img/Sandglass&Bitcoin-3.png"
            ></v-img>

            <span class="font_wght600"
              >Buy and sell cryptocurrencies fast <br />
              <small class="font_wght400 sm-line"
                >Buy and sell crypto with just 1 click</small
              >
            </span>
          </v-col>

          <v-col align="center">
            <v-img
              height="122px"
              width="122px"
              class="mx-auto"
              alt="Sandglass&Bitcoin"
              src="/img/Safe-3.png"
            ></v-img>

            <span class="font_wght600"
              >High Security<br />
              <small class="font_wght400 sm-line"
                >Advanced security measures effectively <br />
                protect your assets</small
              >
            </span>
          </v-col>

          <v-col align="center">
            <v-img
              height="122px"
              max-width="150px"
              class="mx-auto"
              alt="coins"
              src="/img/coins.png"
            ></v-img>

            <span class="font_wght600"
              >Cryptocurrency diversity <br />
              <small class="font_wght400 sm-line"
                >Trade over 740 crypto and fiat currency pairs</small
              >
            </span>
          </v-col>
        </v-row>

        <v-row
          justify="center"
          style="max-width: 1180px"
          class="mx-auto pt-2 pb-15"
        >
          <v-col align-self="center">
            <v-row>
              <v-col>
                <h2>Trade anywhere</h2>
                <span
                  >Trade on you device anytime and anywhere <br />
                  Download now</span
                >
              </v-col>
            </v-row>

            <v-row justify="start">
              <v-col
                :align="$vuetify.breakpoint.mdAndDown ? 'center' : 'start'"
              >
                <!-- <v-img
                  :max-width="$vuetify.breakpoint.mdAndDown ? '30vh' : '480px'"
                  max-height="149px"
                  alt="coins"
                  src="/img/appstore.png"
                ></v-img> -->

                <div
                  class="
                    d-flex
                    flex-row flex-wrap
                    align-start
                    justify-space-between
                  "
                >
                  <div class="d-flex flex-column">
                    <v-img
                      width="234px"
                      height="70px"
                      class="my-2"
                      alt="downloadOnPlaystore"
                      src="/icons/playstore.png"
                    ></v-img>

                    <v-img
                      width="234px"
                      height="70px"
                      class="my-2"
                      alt="downloadOnPlaystore"
                      src="/icons/downloadAppstore.png"
                    ></v-img>
                  </div>

                  <div class="d-flex align-self-center">
                    <span>Or</span>
                  </div>

                  <div>
                    <v-img
                      width="116px"
                      height="116px"
                      class="my-2"
                      alt="downloadOnPlaystore"
                      :src="
                        $vuetify.theme.dark
                          ? '/icons/QRDownload-Dark.png'
                          : '/icons/QRDownload-Light.png'
                      "
                    ></v-img>

                    <span class="ft-14 font_wght400">Scan to download</span>
                  </div>
                </div>
              </v-col>
            </v-row>
          </v-col>

          <v-col align="center">
            <v-img
              :max-width="$vuetify.breakpoint.mdAndDown ? '30vh' : '404px'"
              max-height="435px"
              alt="coins"
              src="/img/mobile.png"
            ></v-img>
          </v-col>
        </v-row>
      </v-container>

      <div class="account-banner my-15" :style="{background: $vuetify.theme.dark ? '#1d2027' : '#fffaeb'}">
        <v-container fill-height class="mx-auto">
          <v-row wrap justify="center" style="width: 1180px">
            <v-col align="start">
              <h2 class="font_wght700">Start trading just in 4 step</h2>

              <v-img
                max-height="auto"
                width="auto"
                class="my-10"
                alt="accountCreate"
                src="/img/accountCreate.png"
              />

              <v-row wrap justify="center">
                <v-btn
                  width="107px"
                  height="40px"
                  depressed
                  nuxt
                  to="/trade"
                  class="mx-1 outlined"
                >
                  Trade now
                </v-btn>

                <v-btn
                  width="137px"
                  height="40px"
                  depressed
                  nuxt
                  to="/signUp"
                  class="mx-1"
                  color="primary"
                >
                  Create account
                </v-btn>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
      </div>

      <v-row
        justify="space-between"
        style="max-width: 1180px"
        class="mx-auto py-2"
      >
        <h3 class="font_wght700 ft-30">
          Update news, learn about cryptocurrency
        </h3>

        <v-btn text plain>
          <v-subheader class="font_wght700 ft-14 black--text"
            >View all</v-subheader
          >
          <svg
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.00391 3L11.0039 8L6.00391 13"
                :stroke="$vuetify.theme.dark ? 'white' : 'black'"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
        </v-btn>
      </v-row>

      <BlogWidget />
    </v-col>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        {
          text: "Coin",
          align: "start",
          sortable: false,
          value: "name",
        },
        {
          text: "Price",
          align: "right",
          sortable: false,
          value: "name",
        },
        {
          text: "24h Change",
          align: "right",
          sortable: false,
          value: "name",
        },
        {
          text: "Market",
          align: "right",
          sortable: false,
          value: "name",
        },
        {
          text: "",
          align: "start",
          sortable: false,
          value: "name",
        },
      ],
      coinsList: [
        {
          coinImg: "/img/Bitcoin.png",
          name: "Bitcoin",
          label: "BTC",
          price: "42,226.8",
          change: 1.45,
          market: true,
        },
        {
          coinImg: "/icons/Litecoin.png",
          price: "3.405.81",
          name: "Litecoin",
          label: "LTH",
          change: 1.45,
          market: false,
        },
        {
          coinImg: "/img/Ethereum.png",
          price: "182",
          name: "Etherium",
          label: "ETH",
          change: 1.45,
          market: true,
        },
        {
          coinImg: "/icons/Neo.png",
          price: "51.5",
          name: "NEO",
          label: "NEO",
          change: 1.45,
          market: false,
        },
        {
          coinImg: "/icons/BNB.png",
          price: "442.6",
          name: "BNB",
          label: "BNB",
          change: 1.45,
          market: true,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.statsCard {
  position: relative !important;
  bottom: 100px !important;
}

// .Homebg-color {
//   background-color: #e5e5e5;
// }

.account-banner {
  width: 100%;
  height: 360px;
}

/* Ellipse */
.Ellipse {
  width: 80px;
  height: 80px;
  left: 391px;
  top: 2621px;
  border-radius: 50%;
  background: #ffc407;
}
</style>



