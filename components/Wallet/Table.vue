<template>
  <v-card flat height="auto">
    <v-card-text class="pa-1">
      <v-card-title v-if="title" class="font-weight-bold ft-18" :class="$vuetify.theme.dark ? 'white--text' : 'black--text'"
        >{{ title }}</v-card-title
      >
      <v-data-table :headers="headers" hide-default-footer :items="dataItems">
        <template v-slot:item="{ item }">
          <tr class="ft-16 font_wght400" :class="$vuetify.theme.dark ? 'white--text' : 'black--text'">
            <td class="text-left">
              <span> {{ item.time }}</span>
            </td>
            <td class="text-right d-flex flex-row justify-end align-center">
              <v-img
                src="/img/Bitcoin.png"
                class="mx-2"
                max-height="24px"
                max-width="24px"
              ></v-img>
              <span class="font-weight-bold">{{ item.coin1 }}</span>
              <span class="px-1 grey--text">-</span>
              <span class="grey--text">{{ item.coin2 }}</span>
            </td>
            <td class="text-right">
              <span
                >{{ item.amount }}
                <span class="grey--text">{{ item.coin1 }}</span></span
              >
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
                width="91px"
                v-else-if="item.status == false"
                class="red--text table-btn"
                style="background: #ffe7eb"
                >Cancel</v-btn
              >
              <v-btn
                text
                v-else
                width="91px"
                class="table-btn"
                style="background: #ffe5c1; color: #c99400 !important"
                >Processing</v-btn
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
</template>

<script>
export default {
  props: ['headers', 'dataItems', 'title'],
  data() {
    return {
      pagination: 1,
    }
  }
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