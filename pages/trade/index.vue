<template>
  <v-container fluid>
    <v-row dense class="row-maxWidth">
      <v-col cols="12" sm="12" md="12" lg="3" xl="3">
        <v-card
          flat
          :width="$vuetify.breakpoint.mobile ? 'auto' : '440px'"
          height="440"
        >
          <v-card-text style="height: 440px">
            <div class="py-1">
              <v-text-field
                class="px-0"
                placeholder="Search"
                filled
                hide-details
                rounded
                dense
                style="height: 40px"
              >
                <template v-slot:prepend-inner>
                  <!-- MagnifyingGlass SVG -->
                  <svg
                    class="mx-2"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    :stroke="$vuetify.theme.dark ? 'white' : 'black'"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.0625 15.625C12.6869 15.625 15.625 12.6869 15.625 9.0625C15.625 5.43813 12.6869 2.5 9.0625 2.5C5.43813 2.5 2.5 5.43813 2.5 9.0625C2.5 12.6869 5.43813 15.625 9.0625 15.625Z"
                      stroke="inherit"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M13.7031 13.7031L17.5 17.5"
                      stroke="inherit"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </template>
              </v-text-field>
            </div>

            <div style="height: 376px; overflow: auto">
              <v-tabs fixed-tabs v-model="tab" active-class="active-tabs">
                <v-tab
                  v-for="item in favoutiteTabs"
                  :key="item"
                  class="font_wght400 ft-16 noCapitalize grey--text"
                >
                  <span v-if="item == 'Favorite'">
                    <v-img
                      class="pointer mx-2"
                      max-width="20"
                      height="20"
                      src="/icons/Star.png"
                    />
                  </span>
                  {{ item }}
                </v-tab>
              </v-tabs>
              <v-divider></v-divider>

              <v-tabs-items v-model="tab">
                <v-tab-item v-for="item in favoutiteTabs" :key="item">
                  <v-data-table
                    :headers="headers"
                    :items="favoutiteItems"
                    hide-default-footer
                    dense
                  >
                    <template v-slot:item="{ item }">
                      <tr class="text-right ft-12">
                        <td>
                          <div class="d-flex flex-row">
                            <v-img
                              class="pointer mx-2"
                              max-width="20"
                              height="20"
                              src="/icons/Star.png"
                            />
                            <span class="ft-12 font-weight-bold"
                              >{{ item.pair }}
                            </span>
                          </div>
                        </td>
                        <td class="text-right">
                          <span class="text-right">{{ item.price }}</span>
                        </td>
                        <td class="text-right">
                          <span>{{ item.change }}</span>
                        </td>

                        <td class="text-right">
                          <span>{{ item.volume }}</span>
                        </td>
                      </tr>
                    </template>
                  </v-data-table>
                </v-tab-item>
              </v-tabs-items>
            </div>
          </v-card-text>
        </v-card>

        <!-- Market Trade Table -->
        <div class="mt-2">
          <v-card
            class="rounded-md"
            height="479"
            :width="$vuetify.breakpoint.mobile ? 'auto' : '440px'"
            flat
          >
            <v-tabs fixed-tabs v-model="tradeTab" active-class="active-tabs">
              <v-tab
                v-for="item in tradeMktTabs"
                :key="item"
                class="font_wght400 ft-16 noCapitalize grey--text"
              >
                <span v-if="item == 'Favorite'">
                  <v-img
                    class="pointer mx-2"
                    max-width="20"
                    height="20"
                    src="/icons/Star.png"
                  />
                </span>
                {{ item }}
              </v-tab>
            </v-tabs>
            <v-divider></v-divider>

            <v-tabs-items v-model="tradeTab">
              <v-tab-item v-for="item in tradeMktTabs" :key="item">
                <v-data-table
                  :headers="tradeMarketHeads"
                  :items="tradeMarketItems"
                  hide-default-footer
                  class="px-2"
                  dense
                >
                  <template v-slot:item="{ item }">
                    <tr class="text-right ft-12">
                      <td class="text-left" v-if="item.price">
                        <span class="ft-12">{{ item.price }} </span>
                      </td>
                      <td class="text-right" v-if="item.quantity">
                        <span class="text-right">{{ item.quantity }}</span>
                      </td>
                      <td class="text-right" v-if="item.time">
                        <span>{{ item.time }}</span>
                      </td>
                    </tr>
                  </template>
                </v-data-table>
              </v-tab-item>
            </v-tabs-items>
          </v-card>
        </div>
      </v-col>

      <v-col cols="12" sm="12" md="12" lg="6" xl="6">
        <v-card
          flat
          :width="$vuetify.breakpoint.mobile ? '100%' : '902px'"
          class="mb-3"
          :class="$vuetify.breakpoint.mobile ? 'mt-10' : ''"
          min-height="82"
        >
          <v-card-text>
            <v-row no-gutters justify="space-between">
              <div class="d-flex flex-row flex-wrap align-center">
                <v-img
                  class="pointer mx-1"
                  width="40px"
                  height="auto"
                  src="/icons/XRP.png"
                />
                <span
                  class="ft-20 font-weight-bold"
                  :class="$vuetify.theme.dark ? 'white--text' : 'black--text'"
                  >XRP/BTC</span
                >
              </div>

              <div class="d-flex flex-row flex-wrap align-center">
                <div
                  class="d-flex flex-column align-end"
                  :class="$vuetify.theme.dark ? 'white--text' : 'black--text'"
                >
                  <span class="ft-16 font-weight-bold">0.00002236</span>
                  <span class="ft-12">$1.07</span>
                </div>
                <v-divider class="px-2" vertical></v-divider>
              </div>

              <div
                class="d-flex flex-row flex-wrap align-center"
                :class="$vuetify.theme.dark ? 'white--text' : 'black--text'"
              >
                <div class="d-flex flex-column align-end">
                  <span class="ft-12 font-weight-normal grey--text"
                    >24h Change</span
                  >
                  <span class="ft-14">-0.00000006</span>
                </div>
                <v-divider class="px-2" vertical></v-divider>
              </div>

              <div
                class="d-flex flex-row flex-wrap align-center"
                :class="$vuetify.theme.dark ? 'white--text' : 'black--text'"
              >
                <div class="d-flex flex-column align-end">
                  <span class="ft-12 font-weight-normal grey--text">High</span>
                  <span class="ft-14">0.00002260</span>
                </div>
                <v-divider class="px-2" vertical></v-divider>
              </div>

              <div
                class="d-flex flex-row flex-wrap align-center"
                :class="$vuetify.theme.dark ? 'white--text' : 'black--text'"
              >
                <div class="d-flex flex-column align-end">
                  <span class="ft-12 font-weight-normal grey--text"
                    >24h VOL (XRP)</span
                  >
                  <span class="ft-14">18,281,451.00</span>
                </div>
                <v-divider class="px-2" vertical></v-divider>
              </div>

              <div
                class="d-flex flex-row flex-wrap align-center"
                :class="$vuetify.theme.dark ? 'white--text' : 'black--text'"
              >
                <div class="d-flex flex-column align-end">
                  <span class="ft-12 font-weight-normal grey--text"
                    >24h VOL (BTC)</span
                  >
                  <span class="ft-14">408.66</span>
                </div>
              </div>
            </v-row>
          </v-card-text>
        </v-card>

        <!-- Chart -->

        <v-card
          flat
          class="mb-3"
          :width="$vuetify.breakpoint.mobile ? 'auto' : '900px'"
          height="480"
        >
          <!-- <v-card-text> </v-card-text> -->
          <!-- Temporary -->
          <client-only>
            <Chart
              class="pointer mx-1 auto-width full-height"
              contain
              alt="chart"
            />
          </client-only>
        </v-card>

        <v-card
          class="rounded-md my-2"
          :width="$vuetify.breakpoint.mobile ? 'auto' : '900px'"
          flat
          min-height="339"
        >
          <v-tabs grow v-model="limitTabs" active-class="active-tabs">
            <v-tab
              v-for="item in limitTabsText"
              :key="item"
              class="font_wght400 ft-16 noCapitalize grey--text"
            >
              {{ item }}
            </v-tab>
          </v-tabs>
          <v-divider></v-divider>

          <v-tabs-items v-model="limitTabs">
            <v-tab-item v-for="item in limitTabsText" :key="item">
              <v-row dense>
                <v-col>
                  <div class="pa-5 pr-2">
                    <v-text-field
                      filled
                      class="my-2"
                      width="405px"
                      value="0.00002244"
                      hide-details
                      placeholder="Price"
                    >
                      <template v-slot:append>
                        <span
                          :class="
                            $vuetify.theme.dark ? 'white--text' : 'black--text'
                          "
                          class="ft-14 font_wght500 pointer"
                          >BTC</span
                        >
                      </template>
                    </v-text-field>

                    <v-text-field
                      filled
                      class="my-2"
                      width="405px"
                      hide-details
                      placeholder="Amount"
                    >
                      <template v-slot:append>
                        <span
                          :class="
                            $vuetify.theme.dark ? 'white--text' : 'black--text'
                          "
                          class="ft-14 font_wght500 pointer"
                          >XRP</span
                        >
                      </template>
                    </v-text-field>

                    <v-text-field
                      filled
                      class="my-2"
                      width="405px"
                      hide-details
                      placeholder="Total"
                    >
                      <template v-slot:append>
                        <span
                          :class="
                            $vuetify.theme.dark ? 'white--text' : 'black--text'
                          "
                          class="ft-14 font_wght500 pointer"
                          >XRP</span
                        >
                      </template>
                    </v-text-field>

                    <v-slider
                      v-model="sliderValueBuy"
                      :max="4"
                      tick-size="15"
                      :tick-labels="sliderPercentage"
                      class="mt-10 mb-3 mx-2 custom_thumb"
                      ticks
                      hide-details
                      track-color="#DDDDDD"
                      track-fill-color="primary"
                    ></v-slider>

                    <v-btn depressed block color="success">
                      <span class="white--text font-weight-light">Buy</span>
                    </v-btn>
                  </div>
                </v-col>

                <v-col>
                  <div class="pa-5 pl-2">
                    <v-text-field
                      filled
                      class="my-2"
                      width="405px"
                      value="0.00002244"
                      hide-details
                      placeholder="Price"
                    >
                      <template v-slot:append>
                        <span
                          :class="
                            $vuetify.theme.dark ? 'white--text' : 'black--text'
                          "
                          class="ft-14 font_wght500 pointer"
                          >BTC</span
                        >
                      </template>
                    </v-text-field>

                    <v-text-field
                      filled
                      class="my-2"
                      width="405px"
                      hide-details
                      placeholder="Amount"
                    >
                      <template v-slot:append>
                        <span
                          :class="
                            $vuetify.theme.dark ? 'white--text' : 'black--text'
                          "
                          class="ft-14 font_wght500 pointer"
                          >XRP</span
                        >
                      </template>
                    </v-text-field>

                    <v-text-field
                      filled
                      class="my-2"
                      width="405px"
                      hide-details
                      placeholder="Total"
                    >
                      <template v-slot:append>
                        <span
                          :class="
                            $vuetify.theme.dark ? 'white--text' : 'black--text'
                          "
                          class="ft-14 font_wght500 pointer"
                          >XRP</span
                        >
                      </template>
                    </v-text-field>

                    <v-slider
                      v-model="sliderValueSell"
                      :max="4"
                      tick-size="15"
                      :tick-labels="sliderPercentage"
                      class="mt-10 mb-3 mx-2 custom_thumb"
                      ticks
                      hide-details
                      track-color="#DDDDDD"
                      track-fill-color="primary"
                    ></v-slider>

                    <v-btn depressed block color="error">
                      <span class="white--text font-weight-light">Sell</span>
                    </v-btn>
                  </div>
                </v-col>
              </v-row>
            </v-tab-item>
          </v-tabs-items>
        </v-card>
      </v-col>

      <v-col cols="12" sm="12" md="12" lg="3" xl="3">
        <v-card
          flat
          height="749"
          :width="$vuetify.breakpoint.mobile ? 'auto' : '440px'"
          :class="$vuetify.breakpoint.mobile ? 'mt-2' : ''"
          style="overflow: auto"
        >
          <v-card-text>
            <div class="d-flex flex-row justify-space-between align-center">
              <div class="d-flex align-center">
                <v-menu
                  class="rounded-xl"
                  width="250px"
                  max-height="363px"
                  v-model="coinMenu"
                  offset-y
                  close-on-content-click
                >
                  <template v-slot:activator="{ attrs, on }">
                    <v-btn
                      text
                      icon
                      :class="{ coinMenuClass: coinMenu }"
                      class="white--text font-weight-light"
                      v-bind="attrs"
                      v-on="on"
                    >
                      <v-img
                        class="pointer mx-1"
                        max-width="24px"
                        height="24px"
                        src="/icons/List.png"
                        lazy-src="/icons/List.png"
                      />
                    </v-btn>
                  </template>

                  <v-list class="font_wght400" width="280px">
                    <v-list-item link>
                      <v-list-item-title class="ft-14">
                        <div class="py-1">
                          <v-text-field
                            class="px-2"
                            placeholder="Find coin name"
                            filled
                            hide-details
                            rounded
                            dense
                            style="height: 40px"
                          >
                            <template v-slot:prepend-inner>
                              <!-- MagnifyingGlass SVG -->
                              <svg
                                class="mx-2"
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                :stroke="
                                  $vuetify.theme.dark ? 'white' : 'black'
                                "
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M9.0625 15.625C12.6869 15.625 15.625 12.6869 15.625 9.0625C15.625 5.43813 12.6869 2.5 9.0625 2.5C5.43813 2.5 2.5 5.43813 2.5 9.0625C2.5 12.6869 5.43813 15.625 9.0625 15.625Z"
                                  stroke="inherit"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M13.7031 13.7031L17.5 17.5"
                                  stroke="inherit"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                            </template>
                          </v-text-field>
                        </div>
                      </v-list-item-title>
                    </v-list-item>

                    <v-list-item
                      v-for="(item, index) in coinNames"
                      :key="index"
                      link
                      :to="item.route"
                    >
                      <v-list-item-title class="ft-14">
                        <div
                          class="
                            d-flex
                            flex-row
                            align-center
                            ft-14
                            font-weight-bold
                          "
                        >
                          <cryptoicon
                            v-if="item.icon"
                            :symbol="item.icon"
                            size="24"
                            class="mx-2"
                          />

                          <v-img
                            v-else
                            position="center"
                            class="pointer mx-2"
                            max-width="24px"
                            height="24px"
                            :src="item.img"
                          />

                          {{ item.title }}
                          <span class="px-2 grey--text font-weight-light">{{
                            item.subtitle
                          }}</span>
                        </div>
                      </v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>

                <v-img
                  class="pointer mx-1"
                  max-width="24px"
                  height="24px"
                  src="/icons/List2.png"
                />

                <v-img
                  class="pointer mx-1"
                  max-width="24px"
                  height="24px"
                  src="/icons/List3.png"
                />
              </div>

              <div>
                <v-select
                  :items="[]"
                  menu-props="auto"
                  placeholder="100"
                  hide-details=""
                  class="mx-2"
                  single-line
                  style="max-width: 74px"
                  outlined
                >
                  <template v-slot:selection="{ item }">
                    {{ item }}
                  </template>
                  <template v-slot:append>
                    <!-- Caret Down -->
                    <svg
                      class="mx-2"
                      width="12"
                      height="7"
                      viewBox="0 0 12 7"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11 1L6 6L1 1"
                        :stroke="$vuetify.theme.dark ? 'white' : 'black'"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </template>
                </v-select>
              </div>
            </div>

            <v-data-table
              :headers="otherDataHeaders"
              :items="otherDataItems"
              hide-default-footer
              :items-per-page="20"
              class="price-table"
              dense
            >
              <template v-slot:item="{ item }">
                <tr v-if="item.bigAmount" class="bigAmount table-font-weight">
                  <td></td>
                  <td>
                    <div class="d-flex flex-row align-center justify-center">
                      <span class="ft-20 success--text font-weight-bold">{{
                        item.bigAmount
                      }}</span>
                      <v-img
                        class="pointer mx-2"
                        alt="arrowUp"
                        max-width="24px"
                        height="24px"
                        lazy-src="/icons/ArrowCircleUpRight.png"
                        src="/icons/ArrowCircleUpRight.png"
                      />

                      <span class="ft-14 font-weight-bold grey--text">{{
                        item.value
                      }}</span>
                    </div>
                  </td>
                  <td></td>
                </tr>

                <tr v-else class="text-right ft-12">
                  <td class="text-left">
                    <span class="ft-12">{{ item.price }}</span>
                  </td>
                  <td class="text-right">
                    <span class="text-right">{{ item.amount }}</span>
                  </td>
                  <td class="text-right">
                    <span>{{ item.total }}</span>
                  </td>
                </tr>
              </template>
            </v-data-table>
          </v-card-text>
        </v-card>

        <v-card
          class="mt-2"
          flat
          min-height="180"
          :width="$vuetify.breakpoint.mobile ? 'auto' : '440px'"
        >
          <v-card-title class="font-weight-bold ft-14"
            >Your property</v-card-title
          >
          <v-card-text class="pb-0">
            <v-row
              no-gutters
              dense
              :class="$vuetify.theme.dark ? 'white--text' : 'black--text'"
            >
              <v-col align="start">
                <span class="grey--text ft-14 font_wght400">BTC Balance</span>
                <h3 class="ft-16">0.00000000</h3>
                <v-btn
                  depressed
                  class="my-3"
                  color="primary"
                  :width="$vuetify.breakpoint.width < 1700 ? 'auto' : '190px'"
                >
                  Deposit
                </v-btn>
              </v-col>

              <v-col align="start">
                <span class="grey--text ft-14 font_wght400">USDT Balance</span>
                <h3 class="ft-16">0.00000000</h3>
                <v-btn
                  @click="popUpDepositMsg = true"
                  text
                  class="outlined my-3"
                  :width="$vuetify.breakpoint.width < 1700 ? 'auto' : '190px'"
                >
                  Withdraw
                </v-btn>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row no-gutters dense class="my-5 row-maxWidth">
      <v-col align="center">
        <v-card flat min-height="494">
          <v-card-text class="py-0">
            <v-tabs
              class="pt-5"
              slider-size="4"
              v-model="openOrdersTab"
              active-class="active-tabs"
            >
              <v-tab
                v-for="item in openOrdersText"
                :key="item"
                class="font_wght400 ft-16 noCapitalize grey--text"
              >
                {{ item }}
              </v-tab>

              <v-spacer />
              <v-checkbox
                class="d-flex align-center font-weight-light ft-12 mx-10"
                :class="$vuetify.theme.dark ? 'white--text' : 'black--text'"
                label="Hide another pair"
              >
              </v-checkbox>

              <v-btn text plain class="outlined py-5 rounded-lg">
                <v-img
                  class="mx-1"
                  src="/icons/XCircleBlack.png"
                  height="20px"
                  width="20px"
                />
                Cancel all
              </v-btn>
            </v-tabs>
            <v-divider></v-divider>

            <v-tabs-items v-model="openOrdersTab">
              <v-tab-item v-for="item in openOrdersText" :key="item">
                <v-data-table
                  :headers="openOrderHeaders"
                  :items="openOrderItems"
                  hide-default-footer
                  dense
                >
                  <template v-slot:item="{ item }">
                    <tr class="text-right table-font-weight ft-12">
                      <td class="text-left">{{ item.time }}</td>
                      <td>{{ item.pair }}</td>
                      <td>{{ item.type }}</td>
                      <td
                        class="font-weight-medium"
                        :class="item.loss ? 'error--text' : 'success--text'"
                      >
                        {{ item.side }}
                      </td>
                      <td>{{ item.price }}</td>
                      <td>{{ item.amount }}</td>
                      <td>{{ item.executed }}%</td>
                      <td>{{ item.total }} BTC</td>
                      <td>{{ item.triggerCondition }}</td>

                      <td class="text-right">
                        <v-btn text class="outlined">
                          <span
                            class="font_wght500 ft-14"
                            :class="
                              $vuetify.theme.dark
                                ? 'white--text'
                                : 'black--text'
                            "
                            >Cancel</span
                          >
                        </v-btn>
                      </td>
                    </tr>
                  </template>
                </v-data-table>
              </v-tab-item>
            </v-tabs-items>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <TradeDepositModal
      @close="popUpDepositMsg = false"
      :modal="popUpDepositMsg"
    />
  </v-container>
</template>

<script>
import Chart from "@/components/Chart/Trading.vue";
export default {
  components: {
    Chart,
  },
  data() {
    return {
      popUpDepositMsg: false,
      coinMenu: false,
      sliderPercentage: ["25", "35", "50", "75", "100%"],
      sliderValueBuy: 0,
      sliderValueSell: 0,
      tab: null,
      tradeTab: null,
      limitTabs: null,
      openOrdersTab: null,
      openOrdersText: [
        "Open Orders",
        "Order History",
        "Trade History",
        "Funds",
      ],
      coinNames: [
        {
          icon: "ont",
          title: "ONT",
          subtitle: "Ontology",
        },
        {
          icon: "bts",
          title: "BTS",
          subtitle: "BTS BitShares",
        },
        {
          icon: null,
          img: "/coins/Vai.png",
          title: "VAI",
          subtitle: "VAI Vai",
        },
        {
          icon: "vrsc",
          title: "VRSC",
          subtitle: "VRSC VerusCoin",
        },
        {
          icon: "dth",
          title: "DTH",
          subtitle: "DTH Dether",
        },
        {
          icon: "pink",
          title: "PINK",
          subtitle: "PINK Pinkcoin",
        },
        {
          icon: "plr",
          title: "PIR",
          subtitle: "PIR Pillar",
        },
      ],
      limitTabsText: ["Limit", "Market"],
      tradeMktTabs: ["Market Trade", "My Trade"],
      tradeMarketItems: [
        {
          price: "0.00023",
          quantity: "0.00023",
          time: "11:33:28",
        },
        {
          price: "0.00023",
          quantity: "0.00023",
          time: "11:33:28",
        },
        {
          price: "0.00023",
          quantity: "0.00023",
          time: "11:33:28",
        },
        {
          price: "0.00023",
          quantity: "0.00023",
          time: "11:33:28",
        },
        {
          price: "0.00023",
          quantity: "0.00023",
          time: "11:33:28",
        },
        {
          price: "0.00023",
          quantity: "0.00023",
          time: "11:33:28",
        },
        {
          price: "0.00023",
          quantity: "0.00023",
          time: "11:33:28",
        },
        {
          price: "0.00023",
          quantity: "0.00023",
          time: "11:33:28",
        },
        {
          price: "0.00023",
          quantity: "0.00023",
          time: "11:33:28",
        },
        {
          price: "0.00023",
          quantity: "0.00023",
          time: "11:33:28",
        },
        {
          price: "0.00023",
          quantity: "0.00023",
          time: "11:33:28",
        },
      ],
      tradeMarketHeads: [
        {
          text: "Price (BTC)",
          align: "left",
        },
        {
          text: "Quantity (XRP)",
          align: "right",
        },
        {
          text: "Time",
          align: "right",
        },
      ],
      favoutiteTabs: ["Favorite", "BTC", "ETH", "USDT"],
      favoutiteItems: [
        {
          pair: "ALPACA/BTC",
          price: "0.00002336",
          change: "-3.25%",
          volume: "5,988",
        },
        {
          pair: "ALPACA/BTC",
          price: "0.00002336",
          change: "-3.25%",
          volume: "5,988",
        },
        {
          pair: "ALPACA/BTC",
          price: "0.00002336",
          change: "-3.25%",
          volume: "5,988",
        },
        {
          pair: "ALPACA/BTC",
          price: "0.00002336",
          change: "-3.25%",
          volume: "5,988",
        },
        {
          pair: "ALPACA/BTC",
          price: "0.00002336",
          change: "-3.25%",
          volume: "5,988",
        },
        {
          pair: "ALPACA/BTC",
          price: "0.00002336",
          change: "-3.25%",
          volume: "5,988",
        },
        {
          pair: "ALPACA/BTC",
          price: "0.00002336",
          change: "-3.25%",
          volume: "5,988",
        },
        {
          pair: "ALPACA/BTC",
          price: "0.00002336",
          change: "-3.25%",
          volume: "5,988",
        },

        {
          pair: "ALPACA/BTC",
          price: "0.00002336",
          change: "-3.25%",
          volume: "5,988",
        },
        {
          pair: "ALPACA/BTC",
          price: "0.00002336",
          change: "-3.25%",
          volume: "5,988",
        },
      ],
      otherDataItems: [
        {
          price: "50000",
          amount: "255.12416",
          total: "12,449,449",
        },
        {
          price: "50000",
          amount: "255.12416",
          total: "12,449,449",
        },
        {
          price: "50000",
          amount: "255.12416",
          total: "12,449,449",
        },
        {
          price: "50000",
          amount: "255.12416",
          total: "12,449,449",
        },
        {
          price: "50000",
          amount: "255.12416",
          total: "12,449,449",
        },
        {
          price: "50000",
          amount: "255.12416",
          total: "12,449,449",
        },
        {
          price: "50000",
          amount: "255.12416",
          total: "12,449,449",
        },
        {
          price: "50000",
          amount: "255.12416",
          total: "12,449,449",
        },
        {
          price: "50000",
          amount: "255.12416",
          total: "12,449,449",
        },
        {
          price: "50000",
          amount: "255.12416",
          total: "12,449,449",
        },
        {
          bigAmount: "0.00002240",
          value: "$1.08",
        },
        {
          price: "50000",
          amount: "255.12416",
          total: "12,449,449",
        },
        {
          price: "50000",
          amount: "255.12416",
          total: "12,449,449",
        },
        {
          price: "50000",
          amount: "255.12416",
          total: "12,449,449",
        },
        {
          price: "50000",
          amount: "255.12416",
          total: "12,449,449",
        },
        {
          price: "50000",
          amount: "255.12416",
          total: "12,449,449",
        },
        {
          price: "50000",
          amount: "255.12416",
          total: "12,449,449",
        },
        {
          price: "50000",
          amount: "255.12416",
          total: "12,449,449",
        },
        {
          price: "50000",
          amount: "255.12416",
          total: "12,449,449",
        },
        {
          price: "50000",
          amount: "255.12416",
          total: "12,449,449",
        },
        {
          price: "50000",
          amount: "255.12416",
          total: "12,449,449",
        },
      ],
      otherDataHeaders: [
        {
          text: "Price (BTC)",
          align: "start",
          value: "name",
        },
        {
          text: "Amount (XRP)",
          align: "right",
          value: "name",
        },
        {
          text: "Total",
          align: "right",
          value: "name",
        },
      ],
      openOrderHeaders: [
        {
          text: "Time",
          align: "left",
        },
        {
          text: "Pair",
          align: "right",
        },
        {
          text: "Type",
          align: "right",
        },
        {
          text: "Side",
          align: "right",
        },
        {
          text: "Price",
          align: "right",
        },
        {
          text: "Amount",
          align: "right",
        },
        {
          text: "Executed",
          align: "right",
        },
        {
          text: "Total",
          align: "right",
        },
        {
          text: "Trigger Condition",
          align: "right",
        },
        {
          text: "",
          align: "right",
        },
      ],
      openOrderItems: [
        {
          time: "17:42:30 19.09.2021",
          pair: "XRP/BTC",
          type: "Limit",
          side: "Buying",
          price: "0.00002244",
          amount: "0.00002244",
          executed: "0.00",
          total: "0.00002244",
          triggerCondition: "-",
          loss: false,
        },
        {
          time: "17:42:30 19.09.2021",
          pair: "XRP/BTC",
          type: "Limit",
          side: "Sell",
          price: "0.00002244",
          amount: "0.00002244",
          executed: "0.00",
          total: "0.00002244",
          triggerCondition: "-",
          loss: true,
        },
        {
          time: "17:42:30 19.09.2021",
          pair: "XRP/BTC",
          type: "Limit",
          side: "Buying",
          price: "0.00002244",
          amount: "0.00002244",
          executed: "0.00",
          total: "0.00002244",
          triggerCondition: "-",
          loss: false,
        },
        {
          time: "17:42:30 19.09.2021",
          pair: "XRP/BTC",
          type: "Limit",
          side: "Buying",
          price: "0.00002244",
          amount: "0.00002244",
          executed: "0.00",
          total: "0.00002244",
          triggerCondition: "-",
          loss: false,
        },
        {
          time: "17:42:30 19.09.2021",
          pair: "XRP/BTC",
          type: "Limit",
          side: "Buying",
          price: "0.00002244",
          amount: "0.00002244",
          executed: "0.00",
          total: "0.00002244",
          triggerCondition: "-",
          loss: false,
        },
        {
          time: "17:42:30 19.09.2021",
          pair: "XRP/BTC",
          type: "Limit",
          side: "Buying",
          price: "0.00002244",
          amount: "0.00002244",
          executed: "0.00",
          total: "0.00002244",
          triggerCondition: "-",
          loss: false,
        },
        {
          time: "17:42:30 19.09.2021",
          pair: "XRP/BTC",
          type: "Limit",
          side: "Sell",
          price: "0.00002244",
          amount: "0.00002244",
          executed: "0.00",
          total: "0.00002244",
          triggerCondition: "-",
          loss: true,
        },
        {
          time: "17:42:30 19.09.2021",
          pair: "XRP/BTC",
          type: "Limit",
          side: "Buying",
          price: "0.00002244",
          amount: "0.00002244",
          executed: "0.00",
          total: "0.00002244",
          triggerCondition: "-",
          loss: false,
        },
        {
          time: "17:42:30 19.09.2021",
          pair: "XRP/BTC",
          type: "Limit",
          side: "Buying",
          price: "0.00002244",
          amount: "0.00002244",
          executed: "0.00",
          total: "0.00002244",
          triggerCondition: "-",
          loss: false,
        },
        {
          time: "17:42:30 19.09.2021",
          pair: "XRP/BTC",
          type: "Limit",
          side: "Buying",
          price: "0.00002244",
          amount: "0.00002244",
          executed: "0.00",
          total: "0.00002244",
          triggerCondition: "-",
          loss: false,
        },
      ],
      headers: [
        {
          text: "Pair",
          align: "start",
          value: "name",
        },
        {
          text: "Price",
          align: "right",
          value: "name",
        },
        {
          text: "Change",
          align: "right",
          value: "name",
          class: "px-2",
        },
        {
          text: "Vol",
          align: "right",
          value: "name",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.row-maxWidth {
  max-width: 1920px;
}

.transpated_tb {
  .theme--light.v-data-table {
    background-color: #e5e5e5;
    color: rgba(0, 0, 0, 0.87);
  }
}

.table-font-weight {
  font-family: IBM Plex Sans Condensed;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;
}

.active-tabs {
  font-family: IBM Plex Sans !important;
  font-size: 16px !important;
  font-style: normal !important;
  font-weight: 600 !important;
  line-height: 19px !important;
  letter-spacing: 0em !important;
  text-align: center !important;
}

.price-table {
  td {
    padding-bottom: 1px !important;
    padding-top: 1px !important;
  }
  .bigAmount {
    td {
      padding: 10px !important;
    }
  }
}

.coinMenuClass {
  border: 1px solid #ffc407 !important;
  box-sizing: border-box;
  border-radius: 5px;
}

// Scroll Bar Styling
::-webkit-scrollbar {
  width: 5px;
  height: 5px !important;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgb(192, 192, 192);
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: rgb(170, 170, 170);
}
</style>