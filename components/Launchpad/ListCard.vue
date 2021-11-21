<template>
  <v-container class="pa-0" fluid>
    <v-row dense no-gutters justify="center">
      <v-col
      align="center"
        v-for="data in blogData"
        :key="data.id"
        cols="12"
        sm="6"
        md="4"
        lg="4"
        xl="4"
      >
        <v-card
          flat
          class="mx-1 my-6 rounded-lg"
          max-width="420"
          max-height="420"
        >
          <v-img height="180px" max-width="420px" :src="data.img"></v-img>

          <v-card-text>
            <div class="d-flex flex-row justify-space-between mb-3">
              <div>
                <h2 class="font-weight-bold ft-20 black--text">
                  {{ data.title }}
                </h2>
                <small>{{ data.caption }}</small>
              </div>

              <cryptoicon :symbol="data.icon" size="40" class="mx-2" />
            </div>

            <div
              v-for="(detail, index) in data.details"
              :key="index"
              class="d-flex flex-row justify-space-between"
            >
              <small>{{ detail.text }}</small>

              <small class="black--text font-weight-bold">{{
                detail.value
              }}</small>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      blogData: [
        {
          id: 1,
          img: "/img/axie.png",
          title: "Axie Infinity",
          caption: "Axie Infinity - A Digital Pet Universe",
          icon: "btc",
          details: [
            {
              text: "Quantity supplied",
              value: "50,000,000.0000 AXS",
            },
            {
              text: "Price",
              value: "1 AXS = 0.00377358 BTC",
            },
            {
              text: "Participants",
              value: "22,096",
            },
            {
              text: "Total",
              value: "50,000,000.0000 BTC",
            },
            {
              text: "End time",
              value: "17 . 09 . 2021",
            },
          ],
        },
        {
          id: 2,
          img: "/img/coin98.png",
          title: "Coin 98",
          caption: "A Multichain DeFi Platform",
          icon: "eth",
          details: [
            {
              text: "Quantity supplied",
              value: "50,000,000.0000 AXS",
            },
            {
              text: "Price",
              value: "1 AXS = 0.00377358 BTC",
            },
            {
              text: "Participants",
              value: "22,096",
            },
            {
              text: "Total",
              value: "50,000,000.0000 BTC",
            },
            {
              text: "End time",
              value: "17 . 09 . 2021",
            },
          ],
        },
        {
          id: 3,
          img: "/img/tokocrypto.png",
          title: "Tokocrypto",
          caption: "Indonesia's Leading Crypto Exchange",
          icon: "btc",
          details: [
            {
              text: "Quantity supplied",
              value: "50,000,000.0000 AXS",
            },
            {
              text: "Price",
              value: "1 AXS = 0.00377358 BTC",
            },
            {
              text: "Participants",
              value: "22,096",
            },
            {
              text: "Total",
              value: "50,000,000.0000 BTC",
            },
            {
              text: "End time",
              value: "17 . 09 . 2021",
            },
          ],
        },
        {
          id: 4,
          img: "/img/lina.png",
          title: "Axie Infinity",
          caption: "Axie Infinity - A Digital Pet Universe",
          icon: "btc",
          details: [
            {
              text: "Quantity supplied",
              value: "50,000,000.0000 AXS",
            },
            {
              text: "Price",
              value: "1 AXS = 0.00377358 BTC",
            },
            {
              text: "Participants",
              value: "22,096",
            },
            {
              text: "Total",
              value: "50,000,000.0000 BTC",
            },
            {
              text: "End time",
              value: "17 . 09 . 2021",
            },
          ],
        },
        {
          id: 5,
          img: "/img/dego.png",
          title: "Dego",
          caption: "A Multichain DeFi Platform",
          icon: "btc",
          details: [
            {
              text: "Quantity supplied",
              value: "50,000,000.0000 AXS",
            },
            {
              text: "Price",
              value: "1 AXS = 0.00377358 BTC",
            },
            {
              text: "Participants",
              value: "22,096",
            },
            {
              text: "Total",
              value: "50,000,000.0000 BTC",
            },
            {
              text: "End time",
              value: "17 . 09 . 2021",
            },
          ],
        },
        {
          id: 6,
          img: "/img/safepal.png",
          title: "SafePal",
          caption: "Indonesia's Leading Crypto Exchange",
          icon: "btc",
          details: [
            {
              text: "Quantity supplied",
              value: "50,000,000.0000 AXS",
            },
            {
              text: "Price",
              value: "1 AXS = 0.00377358 BTC",
            },
            {
              text: "Participants",
              value: "22,096",
            },
            {
              text: "Total",
              value: "50,000,000.0000 BTC",
            },
            {
              text: "End time",
              value: "17 . 09 . 2021",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.mx-w1180 {
  max-width: 1260px;
}
</style>