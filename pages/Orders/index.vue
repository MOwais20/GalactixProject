<template>
  <div>
    <v-tabs
      hide-slider
      active-class="active-tab"
      v-model="tab"
      centered
      color="black"
      :background-color="$vuetify.theme.dark ? '#1D2027' : '#FFFFFF'"
    >
      <v-tab class="grey--text ft-16 noCapitalize inActive-font mb-2">
        Open orders
      </v-tab>

      <v-tab class="grey--text ft-16 noCapitalize inActive-font mb-2">
        Order history
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab" style="background: transparent">
      <v-tab-item class="mb-6">
        <OpenOrder />
      </v-tab-item>
      <v-tab-item class="mb-6">
        <OrderHistory />
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import OpenOrder from "./OpenOrder/index.vue";
import OrderHistory from "./OrderHistory/index.vue";
export default {
  components: {
    OpenOrder,
    OrderHistory,
  },
  data() {
    return {
      tab: null,
    };
  },
};
</script>

<style  scoped>
.active-tab {
  background: #ffe89d !important;
  color: black !important;
  padding: 10px 16px;
  border-radius: 5px;

  font-family: IBM Plex Sans;
  font-size: 16px !important;
  font-style: normal !important;
  font-weight: 600 !important;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: center;
}

.inActive-font {
  font-family: IBM Plex Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: center;
}
</style>