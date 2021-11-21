<template>
  <v-footer min-height="350" color="#191C24">
    <v-row no-gutters dense justify="center">
      <v-col align="left" :cols="$vuetify.breakpoint.xsOnly ? '12' : '6'" md="6" sm="12">
        <v-row no-gutters dense class="white--text text-center">
          <v-col align="center" :cols="$vuetify.breakpoint.xsOnly ? '12' : '4'">
            <h3 class="my-3 ft-20 font_wght700 white--text">ABOUT</h3>

            <div class="robotoFont ft-16 font_wght500">
              <div class="py-1">
                <NuxtLink to="#"> About us </NuxtLink>
              </div>

              <div class="py-1">
                <NuxtLink to="#"> Anouncements </NuxtLink>
              </div>

              <div class="py-1">
                <NuxtLink to="#"> FAQs </NuxtLink>
              </div>

              <div class="py-1">
                <NuxtLink to="#"> Support </NuxtLink>
              </div>

              <div class="py-1">
                <NuxtLink to="#"> Careers </NuxtLink>
              </div>
            </div>
          </v-col>

          <v-col align="center" :cols="$vuetify.breakpoint.xsOnly ? '12' : '4'" >
            <h3 class="my-3 ft-20 font_wght700 white--text">TRADE</h3>

            <div class="robotoFont ft-16 font_wght500">
              <div class="py-1">
                <NuxtLink to="#"> API </NuxtLink>
              </div>

              <div class="py-1">
                <NuxtLink to="#"> Fees </NuxtLink>
              </div>

              <div class="py-1">
                <NuxtLink to="#"> Trading Fees & Rules </NuxtLink>
              </div>

              <div class="py-1">
                <NuxtLink to="#"> Apply For Listing </NuxtLink>
              </div>

              <div class="py-1">
                <NuxtLink to="#"> Apply For Launchpad </NuxtLink>
              </div>
            </div>
          </v-col>

          <v-col align="center" :cols="$vuetify.breakpoint.xsOnly ? '12' : '4'">
            <h3 class="my-3 ft-20 font_wght700 white--text">LEGAL</h3>

            <div class="robotoFont ft-16 font_wght500">
              <div class="py-1">
                <NuxtLink to="#"> Privacy </NuxtLink>
              </div>

              <div class="py-1">
                <NuxtLink to="#"> Terms Of Service </NuxtLink>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-col>

      <v-col align="center" :cols="$vuetify.breakpoint.xsOnly ? '12' : '6'" md="4" align-self="center">
        <v-img
          max-width="279px"
          height="56px"
          class="my-2"
          src="/img/binanceLogo.png"
        ></v-img>

        <v-row class="mx-width">
          <v-col :align="icon.align" v-for="icon in socialIcons" :key="icon.id">
            <v-img
              class="ma-2"
              :width="icon.width"
              :height="icon.height"
              :src="icon.imgURL"
            ></v-img>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      fixed: false,
      socialIcons: [
        {
          id: 1,
          imgURL: "/img/facebook.png",
          width: "48px",
          height: "48px",
          align: "left",
        },
        {
          id: 2,
          imgURL: "/img/twitter.png",
          width: "48px",
          height: "48px",
          align: "center",
        },
        {
          id: 3,
          imgURL: "/img/telegram.png",
          width: "48px",
          height: "48px",
          align: "right",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.mx-width {
  max-width: 279px !important;
}

</style>