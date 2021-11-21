<template>
  <v-container>
    <Breadcrumbs :items="items" />

    <v-card flat height="auto">
      <v-card-text>
        <v-row no-gutters justify="start">
          <v-select
            :items="[]"
            menu-props="auto"
            placeholder="Form"
            class="mx-2"
            single-line
            style="max-width: 163px"
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

          <v-select
            :items="[]"
            menu-props="auto"
            placeholder="Time"
            class="mx-2"
            style="max-width: 163px"
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

          <v-select
            :items="[]"
            menu-props="auto"
            placeholder="Asset"
            class="mx-2"
            style="max-width: 163px"
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
        </v-row>
        <v-data-table :headers="headers" :items="market" hide-default-footer>
          <template v-slot:item="{ item }">
            <tr class="ft-16 font_wght400">
              <td>
                <span > {{ item.time }}</span>
              </td>
              <td class="text-right">
                <span >{{ item.ht }}</span>
              </td>
              <td class="text-right">
                <span >{{ item.ts }}</span>
              </td>
              <td class="text-right">
                <span>{{ item.amount }}</span>
              </td>
              <td class="text-right">
                <v-btn
                  text
                  width="91px"
                  v-if="item.status == true"
                  class="success--text table-btn ft-14"
                  style="background: #d9f9ea"
                  >Success</v-btn
                >
                <v-btn
                  text
                  v-else-if="item.status == 'processing'"
                  width="91px"
                  class="table-btn"
                  style="background: #ffe5c1; color: #c99400 !important"
                  >Processing</v-btn
                >
                <v-btn
                  text
                  width="91px"
                  v-else
                  class="red--text table-btn"
                  style="background: #ffe7eb"
                  >Cancel</v-btn
                >
              </td>
            </tr>
          </template>
          <template v-slot:footer="{ options }">
            <v-pagination
              v-model="pagination"
              :length="5"
              color="primary"
              prev-icon="mdi-menu-left"
              next-icon="mdi-menu-right"
            ></v-pagination>
          </template>
        </v-data-table>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    pagination: 1,
    items: [
      {
        text: "Wallet",
        disabled: false,
        href: "/",
      },
      {
        text: "Transaction history",
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
      { text: "Form", align: "right", value: "ht" },
      { text: "Asset", align: "right", value: "ts" },
      { text: "Amount", align: "right", value: "amount" },
      { text: "Status", align: "right", value: "status" },
    ],
    market: [
      {
        time: "14:59 18.08.2021",
        ht: "Load",
        ts: "ETH",
        amount: "0,00000000",
        status: "processing",
      },
      {
        time: "14:59 18.08.2021",
        ht: "Withdraw",
        ts: "ETH",
        amount: "0,00000000",
        status: true,
      },
      {
        time: "14:59 18.08.2021",
        ht: "Load",
        ts: "ETH",
        amount: "+0.00000025",
        status: false,
      },
      {
        time: "14:59 18.08.2021",
        ht: "Load",
        ts: "ETH",
        amount: "+0.00000025",
        status: true,
      },
      {
        time: "14:59 18.08.2021",
        ht: "Load",
        ts: "ETH",
        amount: "+0.00000025",
        status: true,
      },
      {
        time: "14:59 18.08.2021",
        ht: "Load",
        ts: "ETH",
        amount: "+0.00000025",
        status: true,
      },
      {
        time: "14:59 18.08.2021",
        ht: "Load",
        ts: "ETH",
        amount: "+0.00000025",
        status: true,
      },
      {
        time: "14:59 18.08.2021",
        ht: "Load",
        ts: "ETH",
        amount: "+0.00000025",
        status: true,
      },
      {
        time: "14:59 18.08.2021",
        ht: "Load",
        ts: "ETH",
        amount: "+0.00000025",
        status: true,
      },
      {
        time: "14:59 18.08.2021",
        ht: "Load",
        ts: "ETH",
        amount: "+0.00000025",
        status: true,
      },
      {
        time: "14:59 18.08.2021",
        ht: "Load",
        ts: "ETH",
        amount: "+0.00000025",
        status: true,
      },
      {
        time: "14:59 18.08.2021",
        ht: "Load",
        ts: "ETH",
        amount: "+0.00000025",
        status: true,
      },
    ],
  }),
};
</script>

<style scoped>
.table-btn {
  font-family: IBM Plex Sans;
  font-size: 14px !important;
  font-style: normal !important;
  font-weight: 500 !important;
  line-height: 18px !important;
  letter-spacing: 0em !important;
  text-align: right !important;
}
</style>