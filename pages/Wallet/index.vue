<template>
  <v-container fluid class="px-3 mb-10">
    <v-row dense class="mx-auto">
      <v-col cols="12" sm="12" md="12" lg="9" xl="9">
        <v-card flat class="mt-6 mb-6" width="1459px" height="auto">
          <v-row class="px-5" align="center" justify="space-between" no-gutters>
            <v-text-field
              style="max-width: 407px"
              class="px-0 py-2"
              placeholder="Search"
              filled
              hide-details
              rounded
              dense
            >
              <template v-slot:prepend-inner>
                <!-- MagnifyingGlass SVG -->
                <svg
                  class="mx-2"
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.25391 13C10.1534 13 12.5039 10.6495 12.5039 7.75C12.5039 4.85051 10.1534 2.5 7.25391 2.5C4.35441 2.5 2.00391 4.85051 2.00391 7.75C2.00391 10.6495 4.35441 13 7.25391 13Z"
                    :stroke="$vuetify.theme.dark ? 'white' : 'black'"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.9648 11.4609L14.0024 14.4985"
                    :stroke="$vuetify.theme.dark ? 'white' : 'black'"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </template>
            </v-text-field>

            <v-checkbox
              class="text-right"
              v-model="checkbox"
              label="Hide small balance"
            ></v-checkbox>
          </v-row>

          <v-data-table :headers="headers" :items="market" hide-default-footer>
            <template v-slot:item="{ item }">
              <tr class="font_wght400 ft-16 text-right">
                <td class="d-flex align-center text-left">
                  <v-img
                    :src="item.CoinImg"
                    max-height="36px"
                    max-width="36px"
                  ></v-img>
                  <span class="font_wght600 ft-16 px-2"> {{ item.Coin }}</span>
                </td>
                <td>
                  <span
                    :class="$vuetify.theme.dark ? 'white--text' : 'black--text'"
                    >{{ item.Total }}</span
                  >
                </td>
                <td>
                  <span
                    :class="$vuetify.theme.dark ? 'white--text' : 'black--text'"
                    class="px-2"
                    >{{ item.assets }}</span
                  >
                </td>
                <td>
                  <span
                    :class="$vuetify.theme.dark ? 'white--text' : 'black--text'"
                    >{{ item.orders }}</span
                  >
                </td>
                <td>
                  <span
                    :class="$vuetify.theme.dark ? 'white--text' : 'black--text'"
                    >{{ item.Value }}</span
                  >
                </td>
                <td class="">
                  <template>
                    <v-btn text outlined class="font_wght400 my-1"
                      >Deposit</v-btn
                    >
                    <v-btn text outlined class="font_wght400 my-1"
                      >Withdraw</v-btn
                    >
                    <v-btn
                      @click.stop="tradeDialog = true"
                      text
                      outlined
                      class="font_wght400 my-1"
                      >Trade</v-btn
                    >
                  </template>
                </td>
              </tr>
            </template>
            <template v-slot:footer="{ options }">
              <v-pagination
                v-model="pagination"
                :length="5"
                color="primary"
                class="pa-2"
                prev-icon="mdi-menu-left"
                next-icon="mdi-menu-right"
              ></v-pagination>
            </template>
          </v-data-table>
        </v-card>
      </v-col>

      <v-col cols="12" sm="12" md="12" lg="3" xl="3" class="mt-6">
        <v-row dense>
          <v-col align="left">
            <v-card flat min-height="auto">
              <v-card-text>
                <v-card-title style="font-size: 18px">
                  <span class="font_wght600 ft-18">Overview</span>
                  <v-btn outlined text small class="ml-4">
                    <!-- EYE SVG -->
                    <svg
                      class="mr-2"
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.00391 3.5C3.00391 3.5 1.00391 8.00049 1.00391 8.00049C1.00391 8.00049 3.00391 12.5 8.00391 12.5C13.0039 12.5 15.0039 8.00049 15.0039 8.00049C15.0039 8.00049 13.0039 3.5 8.00391 3.5Z"
                        :stroke="$vuetify.theme.dark ? 'white' : 'black'"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M8.00391 10.5C9.38462 10.5 10.5039 9.38071 10.5039 8C10.5039 6.61929 9.38462 5.5 8.00391 5.5C6.62319 5.5 5.50391 6.61929 5.50391 8C5.50391 9.38071 6.62319 10.5 8.00391 10.5Z"
                        :stroke="$vuetify.theme.dark ? 'white' : 'black'"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>

                    <span class="font-weight-light ft-12">Hide balance</span>
                  </v-btn>
                </v-card-title>

                <v-row no-gutters class="px-4">
                  <v-col align-self="start">
                    <span class="ft-14 grey--text">Estimated balance</span>
                    <p class="font_wght600 ft-25">
                      0,00001567
                      <span class="font-weight-light ft-14 grey--text"
                        >BTC</span
                      >
                    </p>
                    <p class="font_wght600 ft-14 grey--text">~$0,22</p>
                  </v-col>
                  <v-col>
                    <span class="ft-14 grey--text">Yesterday’s PNL</span>
                    <p class="font_wght600 ft-25">+ $0.2</p>

                    <div class="d-flex flex-row align-center">
                      <v-img
                        alt="TrendUp"
                        src="/icons/TrendUp.png"
                        max-width="16px"
                        height="16px"
                      ></v-img>
                      <span class="font_wght600 ft-14 success--text px-2"
                        >2,25%</span
                      >
                    </div>
                  </v-col>
                </v-row>

                <div class="d-flex flex-row flex-wrap align-center pa-5">
                  <apexchart
                    width="100%"
                    :options="chartOptions"
                    :series="series"
                  ></apexchart>
                </div>

                <!-- 
                  class="
                    d-flex
                    flex-row flex-wrap
                    align-center
                    justify-space-between
                    px-5
                  "
                  :class="$vuetify.breakpoint.smAndDown ? 'flex-wrap' : ''"
                >
                  <v-btn
                    text
                    outlined
                    :width="$vuetify.breakpoint.width < 1700 ? 'auto' : '190px'"
                    height="40"
                    class="font_wght600 ft-14"
                    >Withdraw</v-btn
                  >

                  <v-btn
                    color="primary"
                    :width="$vuetify.breakpoint.width < 1700 ? 'auto' : '190px'"
                    height="40"
                    depressed
                    class="font_wght600 ft-14"
                  >
                    Deposit
                  </v-btn>
                </div> -->
              </v-card-text>
              <v-card-actions>
                <v-btn
                  text
                  outlined
                  :width="$vuetify.breakpoint.width < 1700 ? '40%' : '190px'"
                  height="40"
                  class="font_wght600 ft-14"
                  >Withdraw</v-btn
                >
                <v-spacer></v-spacer>
                <v-btn
                  color="primary"
                  :width="$vuetify.breakpoint.width < 1700 ? '40%' : '190px'"
                  height="40"
                  depressed
                  class="font_wght600 ft-14"
                >
                  Deposit
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>

          <v-col>
            <v-card flat height="auto">
              <v-card-text>
                <v-card-title>
                  <v-row justify="space-between" align="center" class="py-2">
                    <h3 class="font_weight-bold ft-18">Last Transaction</h3>

                    <v-btn text plain>
                      <v-subheader
                        :class="
                          $vuetify.theme.dark ? 'white--text' : 'black--text'
                        "
                        class="font-weight-bold font_wght400"
                        >View all</v-subheader
                      >

                      <!-- Caret Right SVG -->
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
                </v-card-title>

                <v-row
                  class="py-2"
                  no-gutters
                  v-for="(item, index) in lastTransaction"
                  :key="index"
                >
                  <v-col align-self="center" align="start">
                    <div class="d-flex flex-row align-center">
                      <svg
                        class="mx-2"
                        width="29"
                        height="28"
                        viewBox="0 0 29 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        v-if="item.loss"
                      >
                        <path
                          d="M14.0039 2.625C11.7541 2.625 9.55491 3.29213 7.6843 4.54203C5.81369 5.79193 4.35573 7.56847 3.49478 9.64698C2.63383 11.7255 2.40857 14.0126 2.84748 16.2192C3.28639 18.4257 4.36975 20.4525 5.96057 22.0433C7.55139 23.6342 9.57822 24.7175 11.7848 25.1564C13.9913 25.5953 16.2784 25.3701 18.3569 24.5091C20.4354 23.6482 22.212 22.1902 23.4619 20.3196C24.7118 18.449 25.3789 16.2498 25.3789 14C25.3754 10.9842 24.1759 8.09298 22.0434 5.96051C19.9109 3.82804 17.0197 2.62849 14.0039 2.625ZM18.3345 13.9556C18.2532 14.0368 18.1568 14.1013 18.0507 14.1453C17.9445 14.1893 17.8307 14.2119 17.7158 14.2119C17.6009 14.2119 17.4871 14.1893 17.381 14.1453C17.2748 14.1013 17.1784 14.0368 17.0972 13.9556L14.8789 11.7373V18.375C14.8789 18.6071 14.7867 18.8296 14.6226 18.9937C14.4585 19.1578 14.236 19.25 14.0039 19.25C13.7718 19.25 13.5493 19.1578 13.3852 18.9937C13.2211 18.8296 13.1289 18.6071 13.1289 18.375V11.7373L10.9106 13.9556C10.7465 14.1194 10.5241 14.2113 10.2922 14.2112C10.0603 14.211 9.83797 14.1189 9.674 13.9549C9.51004 13.7909 9.41787 13.5686 9.41775 13.3367C9.41762 13.1048 9.50956 12.8824 9.67334 12.7183L13.3842 9.00742C13.5487 8.84334 13.7716 8.75121 14.0039 8.75121C14.2363 8.75121 14.4591 8.84334 14.6236 9.00742L18.3345 12.7183C18.4157 12.7995 18.4802 12.8959 18.5242 13.0021C18.5682 13.1082 18.5908 13.222 18.5908 13.3369C18.5908 13.4518 18.5682 13.5656 18.5242 13.6717C18.4802 13.7779 18.4157 13.8743 18.3345 13.9556Z"
                          :fill="item.loss ? '#00E392' : '#FFC407'"
                        />
                      </svg>

                      <svg
                        class="mx-2"
                        width="29"
                        height="28"
                        viewBox="0 0 29 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        v-else
                      >
                        <path
                          d="M14.0039 2.625C11.7541 2.625 9.55491 3.29213 7.6843 4.54203C5.81369 5.79193 4.35573 7.56847 3.49478 9.64698C2.63383 11.7255 2.40857 14.0126 2.84748 16.2192C3.28639 18.4257 4.36975 20.4525 5.96057 22.0433C7.55139 23.6342 9.57823 24.7175 11.7848 25.1564C13.9913 25.5953 16.2784 25.3701 18.3569 24.5091C20.4354 23.6482 22.212 22.1902 23.4619 20.3196C24.7118 18.449 25.3789 16.2498 25.3789 14C25.3754 10.9842 24.1759 8.09298 22.0434 5.96051C19.9109 3.82804 17.0197 2.62849 14.0039 2.625V2.625ZM18.3345 15.2817L14.6236 18.9926C14.4591 19.1567 14.2363 19.2488 14.0039 19.2488C13.7716 19.2488 13.5487 19.1567 13.3842 18.9926L9.67334 15.2817C9.50956 15.1176 9.41763 14.8952 9.41775 14.6633C9.41787 14.4314 9.51004 14.2091 9.674 14.0451C9.83797 13.8811 10.0603 13.789 10.2922 13.7888C10.5241 13.7887 10.7465 13.8806 10.9106 14.0444L13.1289 16.2627V9.625C13.1289 9.39294 13.2211 9.17038 13.3852 9.00628C13.5493 8.84219 13.7718 8.75 14.0039 8.75C14.236 8.75 14.4585 8.84219 14.6226 9.00628C14.7867 9.17038 14.8789 9.39294 14.8789 9.625V16.2627L17.0972 14.0444C17.2613 13.8806 17.4838 13.7887 17.7156 13.7888C17.9475 13.789 18.1699 13.8811 18.3338 14.0451C18.4978 14.2091 18.5899 14.4314 18.5901 14.6633C18.5902 14.8952 18.4983 15.1176 18.3345 15.2817V15.2817Z"
                          fill="#FFC407"
                        />
                      </svg>

                      <div class="d-flex flex-column align-left">
                        <span
                          class="ft-14 font-weight-bold"
                          :class="
                            $vuetify.theme.dark ? 'white--text' : 'black--text'
                          "
                          >{{ item.coin }}</span
                        >
                        <small class="ft-14 font_wght400 grey--text"
                          >10:03:05 20.09.2021</small
                        >
                      </div>
                    </div>
                  </v-col>

                  <v-col align-self="center" align="end">
                    <span
                      :class="item.loss ? 'success--text' : 'error--text'"
                      class="font_wght500 ft-16 px-5"
                      >+{{ item.value }}</span
                    >
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <v-dialog v-model="tradeDialog" persistent width="480">
      <v-card width="480" max-height="527">
        <v-card-text class="px-10 py-5">
          <v-row dense class="py-3" justify="center">
            <v-col class="px-0" cols="6" align="end">
              <v-btn
                :width="$vuetify.breakpoint.smAndDown ? 'auto' : '155.89px'"
                height="36px"
                :text="!showBuy"
                :color="showBuy ? '#FFE89D' : ''"
                class="text-capitalize black--text font-weight-bold"
                depressed
                @click.stop.prevent="showBuy = true"
              >
                <span class="font-weight-bold">Buy</span>
              </v-btn>
            </v-col>

            <v-col class="px-0" cols="6" align="start">
              <v-btn
                :width="$vuetify.breakpoint.smAndDown ? 'auto' : '153.89px'"
                height="36px"
                :text="showBuy"
                :color="showBuy ? '' : '#FFE89D'"
                class="text-capitalize black--text"
                depressed
                @click.stop.prevent="showBuy = false"
              >
                <span class="font-weight-bold">Sell</span>
              </v-btn>
            </v-col>
          </v-row>

          <div class="text-center black--text font-weight-bold py-5">
            1 BTC ≈ 1,038,855,396.55 VND
          </div>

         <div v-if="!showBuy">
            <div>
            <span class="py-1 font_wght400">Spend</span>
            <v-row dense wrap class="py-1">
              <v-col cols="5">
                <v-select
                  v-model="selectedSpendVal"
                  :items="['BTC', 'XOR']"
                  menu-props="auto"
                  placeholder="Select"
                  hide-details
                  width="120px"
                  single-line
                  class="phoneSelector"
                  outlined
                >
                  <template v-slot:prepend-inner>
                    <Cryptoicon :symbol="'btc'" size="20" class="mx-2" />
                  </template>
                  <template v-slot:selection="{ item }">
                    {{ item }}
                  </template>
                  <template v-slot:append>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13 6L8 11L3 6"
                        :stroke="$vuetify.theme.dark ? 'white' : 'black'"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </template>
                </v-select>
              </v-col>

              <v-col cols="7">
                <v-text-field
                  filled
                  type="number"
                  width="202px"
                  hide-details
                  placeholder="Enter quantity"
                ></v-text-field>
              </v-col>
            </v-row>
            <span class="caption d-flex flex-row justify-end">{{
              balance
            }}</span>
          </div>

          <div class="d-flex flex-row align-center py-5">
            <v-divider />

            <svg
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="25" cy="25" r="24.5" stroke="#FFC407" />
              <path
                d="M25 16.75V33.25"
                :stroke="$vuetify.theme.dark ? 'white' : 'black'"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M18.25 26.5L25 33.25L31.75 26.5"
                :stroke="$vuetify.theme.dark ? 'white' : 'black'"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <v-divider />
          </div>

          <div>
            <span class="py-1 font_wght400">Take</span>
            <v-row dense wrap class="py-1">
              <v-col cols="5">
                <v-select
                  v-model="selectedTakeVal"
                  :items="['VND', 'XOR']"
                  menu-props="auto"
                  placeholder="Select"
                  hide-details
                  width="120px"
                  single-line
                  class="phoneSelector"
                  outlined
                >
                  <template v-slot:prepend-inner>
                    <Cryptoicon :symbol="'cdn'" size="20" class="mx-2" />
                  </template>
                  <template v-slot:selection="{ item }">
                    {{ item }}
                  </template>
                  <template v-slot:append>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13 6L8 11L3 6"
                        :stroke="$vuetify.theme.dark ? 'white' : 'black'"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </template>
                </v-select>
              </v-col>

              <v-col cols="7">
                <v-text-field
                  filled
                  type="number"
                  width="202px"
                  hide-details
                  placeholder="Enter quantity"
                ></v-text-field>
              </v-col>
            </v-row>
          </div>
         </div>

         <div v-else>
            <div>
            <span class="py-1 font_wght400">Spend</span>
            <v-row dense wrap class="py-1">
              <v-col cols="5">
                <v-select
                  v-model="selectedTakeVal"
                  :items="['BTC', 'XOR', 'VND']"
                  menu-props="auto"
                  placeholder="Select"
                  hide-details
                  width="120px"
                  single-line
                  class="phoneSelector"
                  outlined
                >
                  <template v-slot:prepend-inner>
                    <Cryptoicon :symbol="'cdn'" size="20" class="mx-2" />
                  </template>
                  <template v-slot:selection="{ item }">
                    {{ item }}
                  </template>
                  <template v-slot:append>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13 6L8 11L3 6"
                        :stroke="$vuetify.theme.dark ? 'white' : 'black'"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </template>
                </v-select>
              </v-col>

              <v-col cols="7">
                <v-text-field
                  filled
                  type="number"
                  width="202px"
                  hide-details
                  placeholder="Enter quantity"
                ></v-text-field>
              </v-col>
            </v-row>
            <span class="caption d-flex flex-row justify-end">
              Minimum 200,000 VND
            </span>
          </div>

          <div class="d-flex flex-row align-center py-5">
            <v-divider />

            <svg
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="25" cy="25" r="24.5" stroke="#FFC407" />
              <path
                d="M25 16.75V33.25"
                :stroke="$vuetify.theme.dark ? 'white' : 'black'"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M18.25 26.5L25 33.25L31.75 26.5"
                :stroke="$vuetify.theme.dark ? 'white' : 'black'"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <v-divider />
          </div>

          <div>
            <span class="py-1 font_wght400">Take</span>
            <v-row dense wrap class="py-1">
              <v-col cols="5">
                <v-select
                  v-model="selectedSpendVal"
                  :items="['VND', 'XOR']"
                  menu-props="auto"
                  placeholder="Select"
                  hide-details
                  width="120px"
                  single-line
                  class="phoneSelector"
                  outlined
                >
                  <template v-slot:prepend-inner>
                    <Cryptoicon :symbol="'btc'" size="20" class="mx-2" />
                  </template>
                  <template v-slot:selection="{ item }">
                    {{ item }}
                  </template>
                  <template v-slot:append>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13 6L8 11L3 6"
                        :stroke="$vuetify.theme.dark ? 'white' : 'black'"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </template>
                </v-select>
              </v-col>

              <v-col cols="7">
                <v-text-field
                  filled
                  type="number"
                  width="202px"
                  hide-details
                  placeholder="Enter quantity"
                ></v-text-field>
              </v-col>
            </v-row>
          </div>
         </div>
        </v-card-text>

        <v-card-actions class="pb-5">
          <v-spacer></v-spacer>
          <v-btn
            width="172px"
            height="42px"
            depressed
            color="primary"
            class="px-5 py-3"
            @click="tradeDialog = false"
          >
            Continue
          </v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    showBuy: false,
    selectedSpendVal: "BTC",
    selectedTakeVal: "VND",
    tradeDialog: false,
    series: [
      {
        name: "series1",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
    chartOptions: {
      chart: {
        height: 350,
        width: '100%',
        type: "area",
        toolbar: {
          show: false,
        },
      },
      colors: ["#FFC407"],
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
      },
      annotations: {
        yaxis: [
          {
            strokeDashArray: 1,
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
    checkbox: false,
    pagination: 1,
    headers: [
      { text: "Coin", align: "left", value: "Coin" },
      { text: "Total", align: "right", class: "px-1", value: "Tổng" },
      { text: "Available assets", align: "right", value: "TSKD" },
      { text: "Placing orders", align: "right", value: "DDL" },
      { text: "Value of BTC", align: "right", value: "GrcBTC" },
      { text: "", value: "btn" },
    ],
    market: [
      {
        CoinImg: "/img/Bitcoin.png",
        Coin: "BTC",
        Total: "0,00000138",
        assets: "0,00000138",
        orders: "0,00000138",
        Value: "0,00000138",
        btn: "",
      },
      {
        CoinImg: "/img/Ethereum.png",
        Coin: "ETH",
        Total: "0,00000138",
        assets: "0,00000138",
        orders: "0,00000138",
        Value: "0,00000138",
        btn: "",
      },
      {
        CoinImg: "/icons/XRP.png",
        Coin: "XRP",
        Total: "0,00000138",
        assets: "0,00000138",
        orders: "0,00000138",
        Value: "0,00000138",
        btn: "",
      },
      {
        CoinImg: "/icons/BNB.png",
        Coin: "BNB",
        Total: "0,00000138",
        assets: "0,00000138",
        orders: "0,00000138",
        Value: "0,00000138",
        btn: "",
      },
      {
        CoinImg: "/icons/TRX.png",
        Coin: "TRX",
        Total: "0,00000138",
        assets: "0,00000138",
        orders: "0,00000138",
        Value: "0,00000138",
        btn: "",
      },
      {
        CoinImg: "/img/Tether.png",
        Coin: "USDT",
        Total: "0,00000138",
        assets: "0,00000138",
        orders: "0,00000138",
        Value: "0,00000138",
        btn: "",
      },
      {
        CoinImg: "/icons/SOL.png",
        Coin: "LINK",
        Total: "0,00000138",
        assets: "0,00000138",
        orders: "0,00000138",
        Value: "0,00000138",
        btn: "",
      },
      {
        CoinImg: "/icons/EOS.png",
        Coin: "EOS",
        Total: "0,00000138",
        assets: "0,00000138",
        orders: "0,00000138",
        Value: "0,00000138",
        btn: "",
      },
      {
        CoinImg: "/icons/ADA.png",
        Coin: "ADA",
        Total: "0,00000138",
        assets: "0,00000138",
        orders: "0,00000138",
        Value: "0,00000138",
        btn: "",
      },
      {
        CoinImg: "/icons/ONT.png",
        Coin: "ONT",
        Total: "0,00000138",
        assets: "0,00000138",
        orders: "0,00000138",
        Value: "0,00000138",
        btn: "",
      },
      {
        CoinImg: "/icons/SAND.png",
        Coin: "SAND",
        Total: "0,00000138",
        assets: "0,00000138",
        orders: "0,00000138",
        Value: "0,00000138",
        btn: "",
      },
      {
        CoinImg: "/icons/MFTS.png",
        Coin: "MFT",
        Total: "0,00000138",
        assets: "0,00000138",
        orders: "0,00000138",
        Value: "0,00000138",
        btn: "",
      },
      {
        CoinImg: "/icons/EOS.png",
        Coin: "EOS",
        Total: "0,00000138",
        assets: "0,00000138",
        orders: "0,00000138",
        Value: "0,00000138",
        btn: "",
      },
      {
        CoinImg: "/icons/ADA.png",
        Coin: "ADA",
        Total: "0,00000138",
        assets: "0,00000138",
        orders: "0,00000138",
        Value: "0,00000138",
        btn: "",
      },
      {
        CoinImg: "/icons/ONT.png",
        Coin: "ONT",
        Total: "0,00000138",
        assets: "0,00000138",
        orders: "0,00000138",
        Value: "0,00000138",
        btn: "",
      },
      {
        CoinImg: "/icons/SAND.png",
        Coin: "SAND",
        Total: "0,00000138",
        assets: "0,00000138",
        orders: "0,00000138",
        Value: "0,00000138",
        btn: "",
      },
      {
        CoinImg: "/icons/MFTS.png",
        Coin: "MFT",
        Total: "0,00000138",
        assets: "0,00000138",
        orders: "0,00000138",
        Value: "0,00000138",
        btn: "",
      },
    ],
    lastTransaction: [
      {
        coin: "ETH",
        icon: "/icons/ArrowCircleUp.png",
        value: "0.00000025",
        loss: true,
      },
      {
        coin: "BTC",
        icon: "/icons/ArrowCircleUp.png",
        value: "0.00000025",
        loss: false,
      },
      {
        coin: "BTC",
        icon: "/icons/ArrowCircleUp.png",
        value: "0.00000025",
        loss: true,
      },
      {
        coin: "LNK",
        icon: "/icons/ArrowCircleUp.png",
        value: "0.00000025",
        loss: true,
      },
      {
        coin: "XPR",
        icon: "/icons/ArrowCircleUp.png",
        value: "0.00000025",
        loss: false,
      },
    ],
  }),
  computed: {
    balance() {
      let val = 0;
      return `Balance: ${val} BTC`;
    },
  },
};
</script>

<style lang="scss" scoped>
.row-MaxWidth {
  // max-width: 1920px;
}

.graph_maxWidth {
  max-width: 400px !important;
}
</style>