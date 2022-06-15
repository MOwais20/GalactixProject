<template>
  <div class="my-6 px-5">
    <v-card flat>
      <v-row no-gutters class="pa-3" justify="space-between">
        <v-menu
          ref="menu"
          v-model="menu"
          :close-on-content-click="false"
          :return-value.sync="dates"
          transition="scale-transition"
          offset-y
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              class="mt-4"
              outlined
              hide-details
              v-model="dateRangeText"
              readonly
              dense
              v-bind="attrs"
              v-on="on"
            >
              <template v-slot:append>
                <img
                  class="pointer mx-2"
                  width="20"
                  height="20"
                  src="/icons/Calendar.png"
                />
              </template>
            </v-text-field>
          </template>
          <v-date-picker color="primary" v-model="dates" multiple no-title scrollable>
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click="menu = false"> Cancel </v-btn>
            <v-btn text color="primary" @click="$refs.menu.save(dates)">
              OK
            </v-btn>
          </v-date-picker>
        </v-menu>

        <v-spacer />

        
          <span :class="$vuetify.breakpoint.mdAndUp ? 'pb-5' : 'pb-0'" class="d-flex align-center pa-2 ">Pair</span>
        <v-select
          v-model="selectedCoin"
          :items="['Coin', 'Coin']"
          menu-props="auto"
          placeholder="Select"
          hide-details
          dense
          style="max-width: 163px"
          class="mt-4"
          outlined
        >
        </v-select>
        <v-select
          v-model="selectedCoin"
          :items="['Coin', 'Coin']"
          menu-props="auto"
          placeholder="Select"
          hide-detail
          single-line
          style="max-width: 163px"
          class="ml-1 mt-4"
          outlined
        >
        </v-select>
        
        <v-spacer />
        <v-select
          v-model="selectedSide"
          :items="['Side']"
          menu-props="auto"
          style="max-width: 163px"
          placeholder="Select"
          hide-details
          single-line
          class="mt-4"
          outlined
        >
        </v-select>

        <v-spacer />

        <v-btn text class="outlined mr-16 mt-4">Reset</v-btn>

        <v-checkbox
          v-model="hideAllCancel"
          :label="`Hide all canceled orders`"
        ></v-checkbox>
      </v-row>
    </v-card>
    <v-card flat>
      <v-data-table
        :headers="headers"
        :items="market"
        hide-default-footer
      >
        <template v-slot:item="{ item }">
          <tr class="text-right">
            <td class="text-left">
              <span>{{ item.time }}</span>
            </td>
            <td>
              <span>{{ item.pair }}</span>
            </td>
            <td>
              <span>{{ item.type }}</span>
            </td>
            <td>
              <span class="red--text">{{ item.side }}</span>
            </td>
            <td>
              <span>{{ item.avg }}</span>
            </td>
            <td>
              <span>{{ item.price }}</span>
            </td>
            <td>
              <span>{{ item.executed }}</span>
            </td>
            <td>
              <span>{{ item.amount }}</span>
            </td>
            <td>
              <span>{{ item.total }}</span>
            </td>
            <td>
              <span class="float-right">{{
                item.TriggerCondition
              }}</span>
            </td>
            <td class="">
              <v-btn
                text
                v-if="item.status"
                class="success--text"
                style="background: #d9f9ea; width: 120px"
                >Completed</v-btn
              >
              <v-btn text v-else class="red--text" style="background: #ffe7eb; width: 120px"
                >Canceled</v-btn
              >
            </td>
          </tr>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    dates: ["2019-09-10", "2019-09-20"],
    selectedCoin: "Coin",
    selectedSide: "Side",
    menu: false,
    hideAllCancel: false,
    headers: [
      ,
      { text: "Time", align: "left", value: "time" },
      { text: "Pair", align: "right", value: "pair" },
      { text: "Type", align: "right", value: "type" },
      { text: "Side", align: "right", value: "side" },
      { text: "Average", align: "right", value: "avg" },
      { text: "Price", align: "right", value: "price" },
      { text: "Executed", align: "right", value: "executed" },
      { text: "Amount", align: "right", value: "amount" },
      { text: "Total", align: "right", value: "total" },
      { text: "Trigger Condition", align: "right", value: "TriggerCondition" },
      { text: "Status", align: "right", value: "status" },
    ],
    market: [
      {
        time: "11.08.2021 11:15:20",
        pair: "APECOIN/BTC",
        type: "Limit",
        side: "Sell",
        avg: "988,00000000",
        price: "Thị trường",
        executed: "0,000538",
        amount: "0,000538",
        total: "242,2535 USDT",
        TriggerCondition: "-",
        status: true,
      },
      {
        time: "11.08.2021 11:15:20",
        pair: "APECOIN/BTC",
        type: "Limit",
        side: "Sell",
        avg: "988,00000000",
        price: "Thị trường",
        executed: "0,000538",
        amount: "0,000538",
        total: "242,2535 USDT",
        TriggerCondition: "-",
        status: false,
      },
      {
        time: "11.08.2021 11:15:20",
        pair: "APECOIN/BTC",
        type: "Limit",
        side: "Sell",
        avg: "988,00000000",
        price: "Thị trường",
        executed: "0,000538",
        amount: "0,000538",
        total: "242,2535 USDT",
        TriggerCondition: "-",
        status: true,
      },
      {
        time: "11.08.2021 11:15:20",
        pair: "APECOIN/BTC",
        type: "Limit",
        side: "Sell",
        avg: "988,00000000",
        price: "Thị trường",
        executed: "0,000538",
        amount: "0,000538",
        total: "242,2535 USDT",
        TriggerCondition: "-",
        status: true,
      },
      {
        time: "11.08.2021 11:15:20",
        pair: "APECOIN/BTC",
        type: "Limit",
        side: "Sell",
        avg: "988,00000000",
        price: "Thị trường",
        executed: "0,000538",
        amount: "0,000538",
        total: "242,2535 USDT",
        TriggerCondition: "-",
        status: true,
      },
      {
        time: "11.08.2021 11:15:20",
        pair: "APECOIN/BTC",
        type: "Limit",
        side: "Sell",
        avg: "988,00000000",
        price: "Thị trường",
        executed: "0,000538",
        amount: "0,000538",
        total: "242,2535 USDT",
        TriggerCondition: "-",
        status: true,
      },
      {
        time: "11.08.2021 11:15:20",
        pair: "APECOIN/BTC",
        type: "Limit",
        side: "Sell",
        avg: "988,00000000",
        price: "Thị trường",
        executed: "0,000538",
        amount: "0,000538",
        total: "242,2535 USDT",
        TriggerCondition: "-",
        status: true,
      },
    ],
  }),
  computed: {
    dateRangeText() {
      return this.dates.join(" ");
    },
  },
  mounted() {
    this.getOrderHistory();
  },
  methods: {
    getOrderHistory() {
      this.$api.orderService.order_history()
        .then((response) => {
          this.market = response.data;
        });
    }
  }
};
</script>

<style scoped>
/* .dates {
  height: 30px;
  border-radius: 4px;
} */
</style>