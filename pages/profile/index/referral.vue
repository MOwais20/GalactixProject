<template>
  <v-card>
    <v-img width="auto" height="249" src="/banners/referralBanner.png">
      
    </v-img>

    <v-img
        class="mx-auto text-center"
        width="200"
        height="200"
        style="bottom: 50px;"
        lazy-src="/img/QRCode.png"
        alt="qrCode"
        src="/img/QRCode.png"
      >
      </v-img>

    <v-card-text class="pb-10">
      <div class="d-flex flex-column align-center align-self-start">
        <div class="d-flex flex-row flex-wrap align-center black--text">
          <span class="ft-16 font-weight-bold" :class="$vuetify.theme.dark ? 'white--text' : 'black--text'" style="width: 80px"
            >Ref ID:
          </span>
          <v-text-field
            placeholder="Ref ID"
            style="width: 333px"
            filled
            v-model="refId"
            hide-details
            dense
            append-outer-icon="mdi-content-copy outlined rounded pa-1"
            @click:append-outer="copyText(refId)"
          ></v-text-field>
        </div>

        <div class="d-flex flex-row flex-wrap align-center black--text py-5">
          <span class="ft-16 font-weight-bold" :class="$vuetify.theme.dark ? 'white--text' : 'black--text'" style="width: 80px"
            >Ref Link:
          </span>
          <v-text-field
            placeholder="Ref Link"
            v-model="refLink"
            style="width: 333px"
            filled
            hide-details
            dense
            append-outer-icon="mdi-content-copy outlined rounded pa-1"
            @click:append-outer="copyText(refLink)"
          ></v-text-field>
        </div>

        <v-btn
          :class="$vuetify.breakpoint.mdAndUp ? 'ml-13' : ''"
          style="min-width: 300px"
          depressed
          color="primary"
          height="42px"
        >
          Refer now
        </v-btn>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      refId: "#9849167613",
      refLink: "https://accounts.vutatech.com/vi/register..",
    };
  },
  methods: {
    copyText(val) {
      if (val) {
        navigator.clipboard.writeText(val);
      }
    },
  },
};
</script>

<style>
</style>