<template>
  <v-container>
    <Breadcrumbs :items="items" />

    <WalletUnionArrow :unionText="unionText" />
    <v-row dense>
      <v-col cols="12" sm="12" md="4" lg="4" xl="4">
        <v-card flat width="auto" max-height="705px">
          <v-card-text>
            <div class="pb-10 d-flex flex-column align-self-center">
              <div>
                <v-select
                  :items="[]"
                  menu-props="auto"
                  placeholder="Select coin"
                  width="350px"
                  single-line
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

              <div>
                <h5>Receiver address</h5>
                <v-text-field
                  placeholder="Receiver address"
                  filled
                  dense
                ></v-text-field>
              </div>

              <div class="py-2">
                <v-select
                  :items="[]"
                  menu-props="auto"
                  placeholder="Select chain"
                  width="350px"
                  single-line
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

              <div class="py-2">
                <h5>Amount</h5>
                <v-text-field placeholder="Amount" outlined filled>
                  <template v-slot:append>
                    <span class="secondary--text ft-14 font_wght500 pointer"
                      >Max</span
                    >
                  </template>
                </v-text-field>
              </div>
            </div>

            <div class="ft-14" :class="$vuetify.theme.dark ? 'white--text' : 'black--text'">
              <div
                class="
                  d-flex
                  flex-row flex-wrap
                  justify-space-between
                  align-center
                  py-2
                "
              >
                <span class="grey--text">Fee:</span>
                <h5 class="FS">0.00000000 BTC</h5>
              </div>

              <div
                class="
                  d-flex
                  flex-row flex-wrap
                  justify-space-between
                  align-center
                  py-2
                "
              >
                <span class="grey--text">Available balances:</span>
                <h5 class="FS">0.00000000 BTC</h5>
              </div>

              <div
                class="
                  d-flex
                  flex-row flex-wrap
                  justify-space-between
                  align-center
                  py-2
                "
              >
                <span class="grey--text">Minimum withdrawal amount:</span>
                <h5 class="FS">0.00000000 BTC</h5>
              </div>

              <div
                class="
                  d-flex
                  flex-row flex-wrap
                  justify-space-between
                  align-center
                  py-7
                "
              >
                <span class="grey--text">You will get:</span>
                <h5 class="FS">0.00000000 BTC</h5>
              </div>
            </div>
          </v-card-text>
          <v-card-actions class="d-flex align-self-end">
            <v-btn
              color="primary"
              block
              depressed
              class="text-capitalize black--text font-weight-bold"
            >
              Send
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <v-col cols="12" sm="12" md="8" lg="8" xl="8">
        <WalletTable
          :headers="headers"
          :dataItems="market"
          :title="'Withdraw history'"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    unionText: {
      first: {
        text: "Receiving address",
        subtitle: "Select cryptocurrency and enter receiving address",
      },
      second: {
        text: "Select chain",
        subtitle: "Select withdrawal network",
      },
      third: {
        text: "Input amount",
        subtitle: "Enter the amount to withdraw and wait for confirmation",
      },
      fourth: {
        text: "Withdraw success",
        subtitle:
          "The deposit has been successfully sent to the recipient's address",
      },
    },
    items: [
      {
        text: "Wallet",
        disabled: false,
        href: "/",
      },
      {
        text: "Withdraw",
        disabled: false,
        href: "/wallet",
      },
    ],
    headers: [
      {
        text: "Time",
        align: "start",
        value: "time",
      },
      { text: "Coin", align: "right", value: "coin" },
      { text: "Amount", align: "right", value: "amount" },
      { text: "Status", align: "right", value: "status" },
    ],
    market: [
      {
        time: "14:59 18.08.2021",
        coin1: "BTC",
        coin2: "Bitcoin",
        amount: "0,00000000",
        status: null,
      },
      {
        time: "14:59 18.08.2021",
        coin1: "BTC",
        coin2: "Bitcoin",
        amount: "0,00000000",
        status: false,
      },
      {
        time: "14:59 18.08.2021",
        coin1: "BTC",
        coin2: "Bitcoin",
        amount: "0,00000000",
        status: true,
      },
      {
        time: "14:59 18.08.2021",
        coin1: "BTC",
        coin2: "Bitcoin",
        amount: "0,00000000",
        status: true,
      },
      {
        time: "14:59 18.08.2021",
        coin1: "BTC",
        coin2: "Bitcoin",
        amount: "0,00000000",
        status: true,
      },
      {
        time: "14:59 18.08.2021",
        coin1: "BTC",
        coin2: "Bitcoin",
        amount: "0,00000000",
        status: true,
      },
      {
        time: "14:59 18.08.2021",
        coin1: "BTC",
        coin2: "Bitcoin",
        amount: "0,00000000",
        status: true,
      },
      {
        time: "14:59 18.08.2021",
        coin1: "BTC",
        coin2: "Bitcoin",
        amount: "0,00000000",
        status: true,
      },
      {
        time: "14:59 18.08.2021",
        coin1: "BTC",
        coin2: "Bitcoin",
        amount: "0,00000000",
        status: true,
      },
      {
        time: "14:59 18.08.2021",
        coin1: "BTC",
        coin2: "Bitcoin",
        amount: "0,00000000",
        status: true,
      },
      {
        time: "14:59 18.08.2021",
        coin1: "BTC",
        coin2: "Bitcoin",
        amount: "0,00000000",
        status: true,
      },
      {
        time: "14:59 18.08.2021",
        coin1: "BTC",
        coin2: "Bitcoin",
        amount: "0,00000000",
        status: true,
      },
      {
        time: "14:59 18.08.2021",
        coin1: "BTC",
        coin2: "Bitcoin",
        amount: "0,00000000",
        status: true,
      },
    ],
  }),
};
</script>

<style scoped>
</style>