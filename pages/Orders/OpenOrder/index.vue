<template>
  <v-container fluid class="my-6 px-5">
    <v-card flat style="z-index: 3">
      <v-row>
        <v-col class="text-right">
          <v-btn text class="mr-4 outlined">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              :stroke="$vuetify.theme.dark ? 'white' : 'black'"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z"
                stroke="inherit"
                stroke-miterlimit="10"
              />
              <path
                d="M12.5 7.5L7.5 12.5"
                stroke="inherit"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12.5 12.5L7.5 7.5"
                stroke="inherit"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <span class="px-1">Cancel all</span>
          </v-btn>
        </v-col>
      </v-row>
    </v-card>
    <v-card flat>
      <v-data-table :headers="headers" :items="market" hide-default-footer>
        <template v-slot:item="{ item }">
          <tr class="text-right">
            <td class="text-left">
              {{ item.ThoiGian }}
            </td>
            <td>
              {{ item.cap }}
            </td>
            <td>
              {{ item.Loai }}
            </td>
            <td>
              <span class="success--text">{{ item.Ben }}</span>
            </td>
            <td>
              {{ item.Gia }}
            </td>
            <td>
              {{ item.SoLong }}
            </td>
            <td>
              {{ item.DaKhop }}
            </td>
            <td>
              {{ item.Tong }}
            </td>
            <td class="text-right">
              {{ item.DKKH }}
            </td>
            <td>
              <v-btn text class="float-end outlined"> Cancel all </v-btn>
            </td>
          </tr>
        </template>
      </v-data-table>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    headers: [
      {
        text: "Time",
        align: "left",
        value: "name",
      },
      { text: "Bag", align: "right" },
      { text: "Type", align: "right" },
      { text: "Beside", align: "right" },
      { text: "Price", align: "right" },
      { text: "Quantity", align: "right" },
      { text: "Matched", align: "right" },
      { text: "Total", align: "right" },
      { text: "Activation conditions", align: "right" },
      { text: "", value: "", sortable: false },
    ],
    market: [
      {
        ThoiGian: "17:42:30 19:09:2021",
        cap: "XRP/BTC",
        Loai: "Giới hạn",
        Ben: "Mua",
        Gia: "0.00002244",
        SoLong: "0.00002244",
        DaKhop: "0.00%",
        Tong: "0.00002244 BTC",
        DKKH: "-",
      },
      {
        ThoiGian: "17:42:30 19:09:2021",
        cap: "XRP/BTC",
        Loai: "Giới hạn",
        Ben: "Mua",
        Gia: "0.00002244",
        SoLong: "0.00002244",
        DaKhop: "0.00%",
        Tong: "0.00002244 BTC",
        DKKH: "-",
      },
      {
        ThoiGian: "17:42:30 19:09:2021",
        cap: "XRP/BTC",
        Loai: "Giới hạn",
        Ben: "Mua",
        Gia: "0.00002244",
        SoLong: "0.00002244",
        DaKhop: "0.00%",
        Tong: "0.00002244 BTC",
        DKKH: "-",
      },
      {
        ThoiGian: "17:42:30 19:09:2021",
        cap: "XRP/BTC",
        Loai: "Giới hạn",
        Ben: "Mua",
        Gia: "0.00002244",
        SoLong: "0.00002244",
        DaKhop: "0.00%",
        Tong: "0.00002244 BTC",
        DKKH: "-",
      },
      {
        ThoiGian: "17:42:30 19:09:2021",
        cap: "XRP/BTC",
        Loai: "Giới hạn",
        Ben: "Mua",
        Gia: "0.00002244",
        SoLong: "0.00002244",
        DaKhop: "0.00%",
        Tong: "0.00002244 BTC",
        DKKH: "-",
      },
      {
        ThoiGian: "17:42:30 19:09:2021",
        cap: "XRP/BTC",
        Loai: "Giới hạn",
        Ben: "Mua",
        Gia: "0.00002244",
        SoLong: "0.00002244",
        DaKhop: "0.00%",
        Tong: "0.00002244 BTC",
        DKKH: "-",
      },
      {
        ThoiGian: "17:42:30 19:09:2021",
        cap: "XRP/BTC",
        Loai: "Giới hạn",
        Ben: "Mua",
        Gia: "0.00002244",
        SoLong: "0.00002244",
        DaKhop: "0.00%",
        Tong: "0.00002244 BTC",
        DKKH: "-",
      },
      {
        ThoiGian: "17:42:30 19:09:2021",
        cap: "XRP/BTC",
        Loai: "Giới hạn",
        Ben: "Mua",
        Gia: "0.00002244",
        SoLong: "0.00002244",
        DaKhop: "0.00%",
        Tong: "0.00002244 BTC",
        DKKH: "-",
      },
      {
        ThoiGian: "17:42:30 19:09:2021",
        cap: "XRP/BTC",
        Loai: "Giới hạn",
        Ben: "Mua",
        Gia: "0.00002244",
        SoLong: "0.00002244",
        DaKhop: "0.00%",
        Tong: "0.00002244 BTC",
        DKKH: "-",
      },
      {
        ThoiGian: "17:42:30 19:09:2021",
        cap: "XRP/BTC",
        Loai: "Giới hạn",
        Ben: "Mua",
        Gia: "0.00002244",
        SoLong: "0.00002244",
        DaKhop: "0.00%",
        Tong: "0.00002244 BTC",
        DKKH: "-",
      },
    ],
  }),
};
</script>

<style scoped>
.theme--dark.v-btn.v-btn--text {
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: normal !important;
  font-size: 14px !important;
  line-height: 18px;
  background: #3b4150 !important;
}
</style>