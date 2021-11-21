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

              <div>
                <h5>Receiver address</h5>
                <v-text-field
                  placeholder="Receiver address"
                  filled
                  value="f5as4dfas5dfw54v"
                  dense
                  append-outer-icon="mdi-content-copy outlined rounded pa-1"
                  @click:append-outer="copyText('f5as4dfas5dfw54v')"
                ></v-text-field>
              </div>

              <div class="d-flex flex-column align-center font_wght400">
                <span class="pb-5 ft-12">or</span>

                <v-img
                  class="mx-auto"
                  height="148px"
                  width="148px"
                  src="/img/QRCode.png"
                />

                <span class="pt-5 ft-14">Scan this code</span>
              </div>
            </div>
          </v-card-text>
          <v-card-actions class="py-7">
            <div class="d-flex flex-column align-self-start mx-auto">
              <div class="py-1 d-flex flex-row flex-wrap ft-14">
                <v-icon color="primary" small class="mx-2"
                  >mdi-information</v-icon
                >
                <span class="text-right">Only send BTC to this address</span>
              </div>

              <div class="py-1 d-flex flex-row flex-wrap ft-14">
                <v-icon color="primary" small class="mx-2"
                  >mdi-information</v-icon
                >
                <span class="text-right"
                  >Make sure the correct chain is selected</span
                >
              </div>
            </div>
          </v-card-actions>
        </v-card>
      </v-col>

      <v-col cols="12" sm="12" md="8" lg="8" xl="8">
        <WalletTable
          :headers="headers"
          :dataItems="market"
          :title="'Deposit history'"
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
        text: "Copy address",
        subtitle:
          "Select the same cryptocurrency of the network, then copy the deposit address.",
      },
      second: {
        text: "Proceed to withdraw",
        subtitle:
          "Conduct a withdrawal transaction on the withdrawal platform.",
      },
      third: {
        text: "Wait for confirmation",
        subtitle: "Wait for the blockchain network to confirm your transfer.",
      },
      fourth: {
        text: "Deposit success",
        subtitle:
          "After confirmation, we will transfer the cryptocurrency to you.",
      },
    },
    items: [
      {
        text: "Wallet",
        disabled: false,
        exact: true,
        to: "/wallet",
      },
      {
        text: "Deposit",
        disabled: false,
        exact: true,
        to: "/wallet/deposit",
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
        coin2: "-Bitcoin",
        amount: "0,00000000",
        status: null,
      },
      {
        time: "14:59 18.08.2021",
        coin1: "BTC",
        coin2: "-Bitcoin",
        amount: "0,00000000",
        status: false,
      },
      {
        time: "14:59 18.08.2021",
        coin1: "BTC",
        coin2: "-Bitcoin",
        amount: "0,00000000",
        status: true,
      },
      {
        time: "14:59 18.08.2021",
        coin1: "BTC",
        coin2: "-Bitcoin",
        amount: "0,00000000",
        status: true,
      },
      {
        time: "14:59 18.08.2021",
        coin1: "BTC",
        coin2: "-Bitcoin",
        amount: "0,00000000",
        status: true,
      },
      {
        time: "14:59 18.08.2021",
        coin1: "BTC",
        coin2: "-Bitcoin",
        amount: "0,00000000",
        status: true,
      },
      {
        time: "14:59 18.08.2021",
        coin1: "BTC",
        coin2: "-Bitcoin",
        amount: "0,00000000",
        status: true,
      },
      {
        time: "14:59 18.08.2021",
        coin1: "BTC",
        coin2: "-Bitcoin",
        amount: "0,00000000",
        status: true,
      },
      {
        time: "14:59 18.08.2021",
        coin1: "BTC",
        coin2: "-Bitcoin",
        amount: "0,00000000",
        status: true,
      },
      {
        time: "14:59 18.08.2021",
        coin1: "BTC",
        coin2: "-Bitcoin",
        amount: "0,00000000",
        status: true,
      },
      {
        time: "14:59 18.08.2021",
        coin1: "BTC",
        coin2: "-Bitcoin",
        amount: "0,00000000",
        status: true,
      },
      {
        time: "14:59 18.08.2021",
        coin1: "BTC",
        coin2: "-Bitcoin",
        amount: "0,00000000",
        status: true,
      },
      {
        time: "14:59 18.08.2021",
        coin1: "BTC",
        coin2: "-Bitcoin",
        amount: "0,00000000",
        status: true,
      },
    ],
  }),
  methods: {
    copyText(val) {
      if (val) {
        navigator.clipboard.writeText(val);
      }
    },
  },
};
</script>

<style scoped>
.FS {
  font-size: 14px;
}

.rowsize {
  background-size: inherit;
  width: 160px;
  height: 160px;
}
</style>