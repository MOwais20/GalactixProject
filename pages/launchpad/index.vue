<template>
  <div>
    <section class="launchpad-header-bg"></section>
    <v-container class="py-15 card-mx-wd">
      <v-row justify="center" class="py-10">
        <v-col align-self="center" class="position-absolute">
          <h1 class="ft-40 font-weight-bold white--text line-h-head">
            Ready to kick off <br />
            your project?
          </h1>
          <div class="grey--text ft-16 py-5">
            Provide a network of marketing partners to make your project the
            best, <br />
            reach investors to buy tokens fastest
          </div>

          <v-btn
            width="194px"
            height="48px"
            color="primary"
            depressed
            to="/signUp"
          >
            <span class="black--text">Sign up to start</span>
          </v-btn>
        </v-col>

        <v-col cols="12" sm="6" md="4" lg="4" xl="4">
          <v-img
            src="/img/launchpad-rocket.png"
            contain
            height="640px"
            width="auto"
          />
        </v-col>
      </v-row>

      <v-row dense class="mx-auto">
        <v-col
          align="center"
          v-for="(data, index) in launcpadCards"
          :key="index"
          cols="12"
          sm="4"
          md="4"
          lg="4"
          xl="4"
        >
          <v-card max-width="420" min-height="300">
            <v-card-text class="text-center">
              <v-avatar size="90px" color="primary">
                <v-img :src="data.icon" contain height="60px" width="56px" />
              </v-avatar>

              <h3 class="pa-5 ft-16 black--text">{{ data.title }}</h3>

              <p class="ft-14 black--text">
                {{ data.text }}
              </p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <div class="my-2">
        <h2 class="ft-40 font_wght700">List</h2>

        <v-card flat color="transparent">
          <v-container class="pa-0" fluid>
            <v-card-text class="py-2 px-0">
              <div
                class="
                  d-flex
                  flex-row flex-wrap
                  align-center
                  justify-space-between
                "
              >
                <div>
                  <v-btn
                    nuxt
                    to="/launchpad/ongoing"
                    plain
                    text
                    class="text-capitalize font-weight-normal"
                  >
                    Ongoing
                  </v-btn>
                  <v-btn
                    to="/launchpad/comingSoon"
                    plain
                    text
                    class="text-capitalize font-weight-normal"
                  >
                    Coming soon
                  </v-btn>
                  <v-btn
                    to="/launchpad/finished"
                    plain
                    text
                    class="text-capitalize font-weight-normal"
                  >
                    Finished
                  </v-btn>
                </div>
              </div>
            </v-card-text>
          </v-container>
        </v-card>

        <!-- Child Components -->
        <nuxt-child> </nuxt-child>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  middleware({ route, redirect, from }) {
    if (route.path == "/launchpad" || route.path == "/launchpad/") {
      return redirect("/launchpad/ongoing");
    }
  },
  data() {
    return {
      params: "611cc4d5ef226006913f27fd",

      launcpadCards: [
        {
          icon: "/svg/lp-icon1.svg",
          title: "Carefully selected",
          text: "We select projects carefully, reviewing and verifying the origin and legitimacy of the project team, the innovation of the idea and its growth potential.",
        },
        {
          icon: "/svg/networking.svg",
          title: "Fast delivery",
          text: "Your token will have access to a large user database.",
        },
        {
          icon: "/svg/handshake.svg",
          title: "Future support",
          text: "The project will receive extensive support and advice even after listing, having access to all areas of the ecosystem.",
        },
      ],
    };
  },
  mounted() {
    this.getLauncpadProject();
  },
  methods: {
    getLauncpadProject() {
      this.$api.launchService
        .getLaunchpad(this.params)
        .then((response) => {
          console.log("LaunchPadddddd", response);
          return response;
        })
        .catch((error) => {
          throw error;
        });
    },
  },
};
</script>


<style lang="scss" scoped>
.launchpad-header-bg {
  border-bottom-left-radius: 50% 20%;
  border-bottom-right-radius: 50% 20%;
  position: absolute;
  width: 100%;
  height: 50%;

  //   left: -859px;
  //   top: -331px;
  background: #181a20;
}

@media only screen and (max-width: 900px) {
  .launchpad-header-bg {
    height: 40%;
  }
}

@media only screen and (max-width: 500px) {
  .launchpad-header-bg {
    height: 25%;
  }
}

.card-mx-wd {
  max-width: 1260px !important;
}

.line-h-head {
  line-height: 52px;
}
</style>