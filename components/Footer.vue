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
        <!-- <v-img
          max-width="279px"
          height="56px"
          class="my-2"
          src="/img/binanceLogo.png"
        ></v-img> -->

        <nuxt-link to="/" class="pa-0 ma-0">
          <!-- <svg
            class="d-flex align-center"
            width="279"
            height="56"
            viewBox="0 0 323 77"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M178.949 0C173.958 -0.0105024 169.054 0.978629 164.444 2.89076C159.833 4.8029 155.648 7.6101 152.129 11.15L147.989 15.49L144.569 19.08L112.759 52.43L112.559 52.66C109.678 55.4819 106.029 57.3906 102.068 58.1468C98.1065 58.9029 94.0104 58.4728 90.2927 56.9104C86.5751 55.348 83.4015 52.7229 81.1698 49.3642C78.938 46.0054 77.7475 42.0626 77.7475 38.03C77.7475 33.9974 78.938 30.0546 81.1698 26.6958C83.4015 23.3371 86.5751 20.712 90.2927 19.1496C94.0104 17.5872 98.1065 17.1571 102.068 17.9132C106.029 18.6694 109.678 20.5781 112.559 23.4L108.009 27.94L130.489 29.09L129.339 6.61L124.949 11C119.611 5.72313 112.83 2.14534 105.461 0.717964C98.0915 -0.709412 90.4648 0.0775621 83.5425 2.97961C76.6202 5.88167 70.7123 10.7688 66.5642 17.0245C62.4162 23.2802 60.2136 30.6243 60.2345 38.1303C60.2554 45.6363 62.4988 52.968 66.6816 59.2005C70.8644 65.4331 76.7994 70.2872 83.7378 73.1507C90.6761 76.0142 98.3071 76.7587 105.668 75.2903C113.029 73.822 119.79 70.2065 125.099 64.9L144.959 44.07L156.519 31.94L164.519 23.5C167.383 20.6545 171.024 18.7194 174.985 17.9379C178.945 17.1564 183.049 17.5635 186.778 19.1079C190.508 20.6524 193.698 23.2653 195.947 26.618C198.196 29.9706 199.403 33.9134 199.417 37.9504C199.431 41.9874 198.251 45.9384 196.025 49.3064C193.799 52.6745 190.627 55.3092 186.908 56.8792C183.189 58.4492 179.088 58.8845 175.123 58.1302C171.157 57.3759 167.502 55.4658 164.619 52.64L164.329 52.34L168.799 47.88L146.319 46.73L147.469 69.21L151.929 64.75L152.069 64.9C156.49 69.3114 161.931 72.565 167.909 74.373C173.887 76.181 180.219 76.4875 186.344 75.2656C192.469 74.0436 198.198 71.3307 203.025 67.3671C207.852 63.4034 211.627 58.3111 214.017 52.5408C216.407 46.7705 217.338 40.5001 216.727 34.2843C216.116 28.0686 213.983 22.0992 210.516 16.9044C207.048 11.7096 202.354 7.44944 196.848 4.50096C191.342 1.55248 185.195 0.00656436 178.949 0Z"
              fill="#FFC512"
            />
            <path
              d="M50.8887 62.23C45.5887 66.0233 38.9688 67.92 31.0288 67.92C21.8288 67.92 14.3921 65.2533 8.71876 59.92C3.04543 54.5867 0.212095 47.3067 0.218762 38.08C0.218762 29.1 3.13871 21.85 8.97871 16.33C14.8187 10.81 22.2021 8.03333 31.1287 8C37.7487 8 43.4154 9.24 48.1287 11.72V22.85C43.0579 19.7508 37.2316 18.1074 31.2887 18.1C25.482 18.1 20.7921 19.9133 17.2188 23.54C13.6454 27.1667 11.8621 32 11.8687 38.04C11.8687 44.2 13.6088 49.05 17.0888 52.59C20.5688 56.13 25.3621 57.9 31.4688 57.9C34.4419 57.9035 37.3916 57.3752 40.1787 56.34V42.62H29.4787V33.3H50.8887V61.3H50.7987L50.8887 62.23Z"
              :fill="'white'"
            />
            <path
              d="M262.479 68.65H226.309V8H262.129V17.27H237.739V33.74H259.419V42.92H237.739V59.39H262.479V68.65Z"
              :fill="'white'"
            />
            <path
              d="M283.988 68.68H270.398L289.658 38L271.298 8H284.528L296.128 27.92L307.378 8.03H321.128L302.778 38.03L322.658 68.71H309.188L296.318 47.71L283.988 68.68Z"
              :fill="'white'"
            />
          </svg> -->

          <v-img
            class="ma-2"
            contain
            src="/img/GooexLogoWhite-2.png"
            height="56px"
            width="279px"
          />
        </nuxt-link>

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