<template>
  <v-container fluid class="pa-0">
    <v-app-bar
      flat
      :color="$vuetify.theme.dark ? '#1D2027' : '#FFFFFF'"
      :clipped-left="clipped"
      fixed
      app
    >
      <v-app-bar-nav-icon
        @click="drawer = true"
        v-if="$vuetify.breakpoint.mdAndDown"
      ></v-app-bar-nav-icon>

      <v-app-bar-title>
        <nuxt-link to="/" class="pr-15">
          <img
            class="mx-2"
            src="../static/img/binanceLogo.png"
            height="38"
            width="189"
          />
        </nuxt-link>
      </v-app-bar-title>

      <div v-if="!$vuetify.breakpoint.mdAndDown" class="full-height nav-btns">
        <v-btn icon>
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            :fill="$vuetify.theme.dark ? 'white' : 'black'"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14 5H6C5.44772 5 5 5.44772 5 6V14C5 14.5523 5.44772 15 6 15H14C14.5523 15 15 14.5523 15 14V6C15 5.44772 14.5523 5 14 5Z"
              fill="inherit"
            />
            <path
              d="M26 5H18C17.4477 5 17 5.44772 17 6V14C17 14.5523 17.4477 15 18 15H26C26.5523 15 27 14.5523 27 14V6C27 5.44772 26.5523 5 26 5Z"
              fill="inherit"
            />
            <path
              d="M14 17H6C5.44772 17 5 17.4477 5 18V26C5 26.5523 5.44772 27 6 27H14C14.5523 27 15 26.5523 15 26V18C15 17.4477 14.5523 17 14 17Z"
              fill="inherit"
            />
            <path
              d="M26 17H18C17.4477 17 17 17.4477 17 18V26C17 26.5523 17.4477 27 18 27H26C26.5523 27 27 26.5523 27 26V18C27 17.4477 26.5523 17 26 17Z"
              fill="inherit"
            />
          </svg>
        </v-btn>

        <v-btn
          nuxt
          to="/trade"
          plain
          text
          class="text-capitalize font-weight-normal full-height"
        >
          Trade
        </v-btn>

        <v-btn
          nuxt
          to="/market"
          plain
          text
          class="text-capitalize font-weight-normal full-height"
        >
          Market
        </v-btn>

        <v-btn
          nuxt
          to="/launchpad"
          plain
          text
          class="text-capitalize font-weight-normal full-height"
        >
          Launchpad
        </v-btn>

        <v-btn
          plain
          text
          nuxt
          to="/blog"
          class="text-capitalize font-weight-normal full-height"
        >
          Blog
        </v-btn>
      </div>

      <v-spacer />

      <div
        class="d-flex flex-row align-center"
        v-if="!$vuetify.breakpoint.smAndDown"
      >
        <div class="d-flex flex-row" v-if="!loginToken">
          <v-btn
            class="mx-1"
            color="primary"
            outlined
            nuxt
            to="/login"
          >
            <span :class="$vuetify.theme.dark ? 'white--text' : 'black--text'"
              >Login</span
            >
          </v-btn>

          <v-btn
            nuxt
            to="/signUp"
            class="mx-1 black--text"
            color="primary"
            depressed
          >
            Sign Up
          </v-btn>

          <div class="d-flex flex-row justify-space-between align-center">
            <v-avatar size="20px" class="px-5">
              <img alt="Avatar" src="@/static/flagIcons/vietnam.png" />
            </v-avatar>

            <span class="subtitle-2 px-2">VI</span>
          </div>

          <!-- <v-row align="center" class="spacer language-box" no-gutters>
        <v-col align="end">
          <v-avatar size="20px">
            <img alt="Avatar" src="@/static/flagIcons/vietnam.png" />
          </v-avatar>
        </v-col>

        <v-col align="center">
          <span class="subtitle-2">VI</span>
        </v-col>
      </v-row> -->
        </div>

        <div
          class="
            d-flex
            flex-row
            justify-space-between
            align-center
            font_wght400
            ft-14
          "
          v-else
        >
          <div>
            <v-menu rounded="rounded-lg" offset-y close-on-content-click>
              <template v-slot:activator="{ attrs, on }">
                <v-btn
                  text
                  class="white--text font-weight-light mx-1 px-2"
                  v-bind="attrs"
                  v-on="on"
                >
                  <svg
                    class="mx-2"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    :stroke="$vuetify.theme.dark ? 'white' : 'black'"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.75 6V18C3.75 18.3978 3.90804 18.7794 4.18934 19.0607C4.47064 19.342 4.85218 19.5 5.25 19.5H20.25C20.4489 19.5 20.6397 19.421 20.7803 19.2803C20.921 19.1397 21 18.9489 21 18.75V8.25C21 8.05109 20.921 7.86032 20.7803 7.71967C20.6397 7.57902 20.4489 7.5 20.25 7.5H5.25C4.85218 7.5 4.47064 7.34196 4.18934 7.06066C3.90804 6.77936 3.75 6.39782 3.75 6ZM3.75 6C3.75 5.60218 3.90804 5.22064 4.18934 4.93934C4.47064 4.65804 4.85218 4.5 5.25 4.5H18"
                      stroke="inherit"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M16.875 14.625C17.4963 14.625 18 14.1213 18 13.5C18 12.8787 17.4963 12.375 16.875 12.375C16.2537 12.375 15.75 12.8787 15.75 13.5C15.75 14.1213 16.2537 14.625 16.875 14.625Z"
                      fill="inherit"
                    />
                  </svg>

                  <span
                    class="header-btn-font"
                    :class="$vuetify.theme.dark ? 'white--text' : 'black--text'"
                    >Wallet</span
                  >

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
                </v-btn>
              </template>

              <v-list class="font_wght400">
                <v-list-item link to="/wallet">
                  <v-list-item-title class="ft-14">
                    Balance: <span class="font-weight-bold">0.00000000</span>
                    <span class="grey--text">BTC</span>
                  </v-list-item-title>
                </v-list-item>

                <v-list-item
                  v-for="(item, index) in walletItems"
                  :key="index"
                  link
                  :to="item.route"
                >
                  <v-list-item-title class="ft-14">
                    <div class="d-flex flex-row align-center font_wght400">
                      <v-img
                        position="center"
                        class="pointer mx-2"
                        max-width="20px"
                        height="20px"
                        :src="item.icon"
                      />

                      {{ item.name }}
                    </div>
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </div>

          <div class="d-flex flex-row justify-space-between align-center">
            <v-btn text depressed nuxt to="/orders" class="px-2">
              <!-- Orders SVG / Notebook -->
              <svg
                class="mx-2"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.5 10.5H16.5"
                  :stroke="$vuetify.theme.dark ? 'white' : 'black'"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.5 13.5H16.5"
                  :stroke="$vuetify.theme.dark ? 'white' : 'black'"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M19.5 3.75H4.5C4.08579 3.75 3.75 4.08579 3.75 4.5V19.5C3.75 19.9142 4.08579 20.25 4.5 20.25H19.5C19.9142 20.25 20.25 19.9142 20.25 19.5V4.5C20.25 4.08579 19.9142 3.75 19.5 3.75Z"
                  :stroke="$vuetify.theme.dark ? 'white' : 'black'"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.5 3.75V20.25"
                  :stroke="$vuetify.theme.dark ? 'white' : 'black'"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <span class="header-btn-font">Order</span>
            </v-btn>
          </div>

          <div class="pr-5">
            <v-menu
              max-width="280"
              rounded="rounded-lg"
              offset-y
              close-on-content-click
            >
              <template v-slot:activator="{ attrs, on }">
                <v-btn
                  icon
                  class="white--text font-weight-light mx-1 px-2"
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-img
                    class="pointer mx-2"
                    width="24px"
                    height="24px"
                    src="/icons/BellNotify.png"
                    v-if="!$vuetify.theme.dark"
                  />

                  <v-img
                    v-else
                    class="pointer mx-2"
                    width="24px"
                    height="24px"
                    src="/icons/bellDark.png"
                  />
                </v-btn>
              </template>

              <v-list>
                <v-list-item
                  v-for="(item, index) in Notifications"
                  :key="index"
                  link
                  three-line
                >
                  <v-list-item-icon class="d-flex align-end">
                    <svg
                      width="24"
                      height="24"
                      class="mx-2"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20.25 6.75008H16.9718C17.4599 6.15456 17.7004 5.39415 17.6434 4.62626C17.5864 3.85837 17.2363 3.1418 16.6656 2.62489C16.0949 2.10797 15.3472 1.83028 14.5775 1.84931C13.8077 1.86834 13.0747 2.18263 12.5303 2.72712C12.3131 2.95342 12.134 3.21339 12 3.49694C11.8659 3.21339 11.6868 2.95341 11.4696 2.72707C10.9252 2.1826 10.1922 1.86832 9.42243 1.8493C8.65266 1.83029 7.90506 2.10798 7.33437 2.6249C6.76368 3.14183 6.4136 3.8584 6.35661 4.62628C6.29961 5.39417 6.54006 6.15457 7.02818 6.75008H3.75C3.35231 6.75054 2.97104 6.90872 2.68984 7.18992C2.40863 7.47113 2.25045 7.8524 2.25 8.25008V11.2501C2.25045 11.6478 2.40863 12.029 2.68984 12.3102C2.97104 12.5915 3.35231 12.7496 3.75 12.7501V18.7501C3.75045 19.1478 3.90864 19.529 4.18984 19.8102C4.47105 20.0914 4.85231 20.2496 5.25 20.2501H18.75C19.1477 20.2496 19.529 20.0914 19.8102 19.8102C20.0914 19.529 20.2495 19.1478 20.25 18.7501V12.7501C20.6477 12.7496 21.029 12.5915 21.3102 12.3102C21.5914 12.029 21.7495 11.6478 21.75 11.2501V8.25008C21.7495 7.8524 21.5914 7.47113 21.3102 7.18992C21.029 6.90872 20.6477 6.75054 20.25 6.75008ZM13.5909 3.78778C13.7302 3.64843 13.8955 3.53789 14.0776 3.46246C14.2596 3.38703 14.4546 3.34819 14.6517 3.34816C14.8487 3.34813 15.0438 3.38692 15.2258 3.4623C15.4078 3.53768 15.5732 3.64818 15.7125 3.78749C15.8518 3.92681 15.9623 4.09219 16.0377 4.27422C16.1131 4.45624 16.1519 4.65133 16.1519 4.84835C16.1519 5.04537 16.113 5.24045 16.0376 5.42245C15.9622 5.60446 15.8516 5.76982 15.7123 5.9091C15.2491 6.37234 13.9099 6.63246 12.782 6.71811C12.8676 5.59009 13.1277 4.25097 13.5909 3.78778ZM8.28763 3.78778C8.56917 3.5069 8.95062 3.34916 9.34831 3.34916C9.746 3.34915 10.1275 3.50689 10.409 3.78776C10.8723 4.25099 11.1324 5.59023 11.218 6.71809C10.09 6.63242 8.75089 6.37229 8.28772 5.9091C8.00684 5.62758 7.8491 5.24614 7.84908 4.84846C7.84906 4.45078 8.00678 4.06933 8.28763 3.78778ZM20.25 11.2501H12.75V18.0001C12.75 18.199 12.671 18.3898 12.5303 18.5304C12.3897 18.6711 12.1989 18.7501 12 18.7501C11.8011 18.7501 11.6103 18.6711 11.4697 18.5304C11.329 18.3898 11.25 18.199 11.25 18.0001V11.2501H3.75V8.25008H11.25V11.2501H12.75V8.25008H20.25L20.2509 11.25L20.25 11.2501Z"
                        :fill="$vuetify.theme.dark ? 'white' : 'black'"
                      />
                    </svg>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title
                      v-text="item.title"
                      class="font_wght600 ft-14"
                    ></v-list-item-title>
                    <v-list-item-subtitle
                      v-text="item.subtitle"
                      class="font_wght500 ft-12 black--text"
                    >
                    </v-list-item-subtitle>
                    <v-list-item-subtitle class="ft-10 font_wght400 grey--text">
                      {{ item.time }} min ago
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-menu>
          </div>

          <div class="pr-5">
            <v-menu rounded="rounded-lg" offset-y close-on-content-click>
              <template v-slot:activator="{ attrs, on }">
                <v-btn
                  text
                  class="white--text font-weight-light px-1 py-6"
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-avatar>
                    <v-img
                      class="pointer mx-2"
                      width="40px"
                      height="40px"
                      src="/img/avatar.png"
                    />
                  </v-avatar>

                  <span
                    class="header-btn-font"
                    :class="$vuetify.theme.dark ? 'white--text' : 'black--text'"
                    >Viet Anh</span
                  >

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
                </v-btn>
              </template>

              <v-list class="font_wght400" width="280px">
                <v-list-item link>
                  <v-list-item-title class="ft-14">
                    <div class="d-flex flex-row align-center font_wght400">
                      Account type:
                      <span class="px-2 error--text">Unverified</span>
                      <v-img
                        src="/icons/XCircle.png"
                        alt="unverified"
                        max-width="20px"
                        height="20px"
                      />
                    </div>
                  </v-list-item-title>
                </v-list-item>

                <v-list-item
                  v-for="(item, index) in AcctItem"
                  :key="index"
                  link
                  :to="item.route"
                >
                  <v-list-item-title class="ft-14">
                    <div class="d-flex flex-row align-center font_wght400">
                      <v-img
                        position="center"
                        class="pointer mx-2"
                        max-width="20px"
                        height="20px"
                        :src="item.icon"
                      />

                      {{ item.name }}
                    </div>
                  </v-list-item-title>
                </v-list-item>

                <v-list-item link @click="logout" class="mt-15">
                  <v-list-item-title class="ft-14">
                    <div class="d-flex flex-row align-center font_wght400">
                      <v-img
                        position="center"
                        class="pointer mx-2"
                        max-width="20px"
                        height="20px"
                        src="/icons/SignOut.png"
                      />

                      Log out
                    </div>
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </div>
        </div>

        <v-btn icon @click="toggleDarkMode">
          <fa :icon="['far', 'moon']" style="width: 17px; height: 17px" />
        </v-btn>
      </div>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list-item>
        <v-list-item-title>
          <div class="d-flex flex-row my-5" v-if="!loginToken">
            <v-btn to="/login" class="mx-1" color="primary" outlined>
              <span :class="$vuetify.theme.dark ? 'white--text' : 'black--text'"
                >Login</span
              >
            </v-btn>

            <v-btn
              nuxt
              to="/signup"
              class="mx-1 black--text"
              color="primary"
              depressed
            >
              Sign Up
            </v-btn>

            <v-btn icon @click="toggleDarkMode">
              <fa :icon="['far', 'moon']" style="width: 17px; height: 17px" />
            </v-btn>
          </div>
        </v-list-item-title>
      </v-list-item>

      <v-list nav dense>
        <v-list-item>
          <v-list-item-title>
            <nuxt-link to="/trade"> Trade </nuxt-link>
          </v-list-item-title>
        </v-list-item>

        <v-list-item>
          <v-list-item-title>
            <nuxt-link to="/market"> Market </nuxt-link>
          </v-list-item-title>
        </v-list-item>

        <v-list-item>
          <v-list-item-title>
            <nuxt-link to="/launchpad"> Launchpad </nuxt-link>
          </v-list-item-title>
        </v-list-item>

        <v-list-item>
          <v-list-item-title>
            <nuxt-link to="/blog"> Blog </nuxt-link>
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      drawer: false,
      clipped: false,
      walletItems: [
        {
          name: "Deposit",
          icon: "/icons/ArrowCircleUp.png",
          route: "/wallet/deposit",
        },
        {
          name: "Withdraw",
          icon: "/icons/ArrowCircleDown.png",
          route: "/wallet/withdraw",
        },
        {
          name: "Transaction History",
          icon: "/icons/ClockCounterClockwise.png",
          route: "/wallet/history",
        },
      ],
      Notifications: [
        {
          title: "Referral Bonus",
          subtitle: "You just received $1 for refer......",
          time: 1,
        },
        {
          title: "Referral Bonus",
          subtitle: "You just received $1 for refer......",
          time: 1,
        },
        {
          title: "Referral Bonus",
          subtitle: "You just received $1 for refer......",
          time: 1,
        },
        {
          title: "Referral Bonus",
          subtitle: "You just received $1 for refer......",
          time: 1,
        },
      ],
      AcctItem: [
        {
          name: "Account",
          icon: "/icons/UserCircle.png",
          route: "/profile/account",
        },
        {
          name: "KYC",
          icon: "/icons/ShieldCheck.png",
          route: "/profile/kyc",
        },
        {
          name: "Security",
          icon: "/icons/LockSimple.png",
          route: "/profile/security",
        },
        {
          name: "Setting",
          icon: "/icons/GearSix.png",
          route: "/profile/setting",
        },
        {
          name: "Referral",
          icon: "/icons/Gift.png",
          route: "/profile/referral",
        },
      ],
    };
  },
  methods: {
    ...mapActions("auth", ["logout", "refreshToken"]),
    toggleDarkMode(val) {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      // updating in state
      this.darkMode = this.$vuetify.theme.dark;
      localStorage.setItem("theme", this.$vuetify.theme.dark.toString());
    },
  },
  computed: {
    ...mapActions("global", ["getLoginDetails"]),
    loginToken() {
      return localStorage.getItem("token");
    },
    darkMode: {
      get() {
        return this.$store.getters["global/darkMode"];
      },
      set(val) {
        this.$store.dispatch("global/toggleDarkMode", val);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.header-btn-font {
  font-family: IBM Plex Sans !important;
  font-size: 14px !important;
  font-style: normal !important;
  font-weight: 400 !important;
  line-height: 18px !important;
  letter-spacing: 0em !important;
  text-align: center !important;
}

.language-box {
  max-width: 87px;
}

.wallet_style {
  width: 110px !important;
  font-size: 14px !important;
  color: black !important;
}

.avatar_style {
  width: 130px !important;
  font-size: 14px !important;
}

#input-88 {
  color: black !important;
}

.v-select__slot {
  align-self: center !important;
  margin-top: 0px !important;
}

.v-list-item__icon {
  align-self: center !important;
}

// Button
.nav-btns {
  .v-btn--active {
    height: 100% !important;
    padding-bottom: 0px !important;
    border-radius: 0;
    background-color: transparent !important;
    border-bottom: 5px solid #ffc407;
  }
}
</style>