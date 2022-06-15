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

      <v-app-bar-title class="mx-5 pr-15">
        <nuxt-link to="/" class="pa-0 ma-0">
          <!-- <svg
            class="d-flex align-center"
            width="120"
            height="27"
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
              :fill="$vuetify.theme.dark ? 'white' : '#231F20'"
            />
            <path
              d="M262.479 68.65H226.309V8H262.129V17.27H237.739V33.74H259.419V42.92H237.739V59.39H262.479V68.65Z"
              :fill="$vuetify.theme.dark ? 'white' : '#231F20'"
            />
            <path
              d="M283.988 68.68H270.398L289.658 38L271.298 8H284.528L296.128 27.92L307.378 8.03H321.128L302.778 38.03L322.658 68.71H309.188L296.318 47.71L283.988 68.68Z"
              :fill="$vuetify.theme.dark ? 'white' : '#231F20'"
            />
          </svg> -->

          <v-img
            class="mx-2"
            contain
            :src="
              $vuetify.theme.dark
                ? '/img/GooexLogoWhite-2.png'
                : '/img/GooexLogo-2.png'
            "
            height="27px"
            width="120px"
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
          <v-btn class="mx-1" color="primary" outlined nuxt to="/login">
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
                    Balance:
                    <span class="font-weight-bold">{{
                      getBalance.toFixed(2)
                    }}</span>
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
                      <!-- <v-img
                        position="center"
                        class="pointer mx-2"
                        max-width="20px"
                        height="20px"
                        :src="item.icon"
                      /> -->

                      <!-- SVG ICONS using to change color dynamically in dark mode -->
                      <div class="d-flex align-center mr-2 pointer">
                        <svg
                          v-if="item.name == 'Withdraw'"
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
                            d="M7.34766 10.4736L9.9993 13.1253L12.6509 10.4736"
                            stroke="inherit"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M10 6.875V13.125"
                            stroke="inherit"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>

                        <svg
                          v-if="item.name == 'Deposit'"
                          width="20"
                          :stroke="$vuetify.theme.dark ? 'white' : 'black'"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z"
                            stroke="inherit"
                            stroke-miterlimit="10"
                          />
                          <path
                            d="M7.34766 9.52664L9.9993 6.875L12.6509 9.52664"
                            stroke="inherit"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M10 13.125V6.875"
                            stroke="inherit"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>

                        <svg
                          v-if="item.name == 'Transaction History'"
                          width="20"
                          :stroke="$vuetify.theme.dark ? 'white' : 'black'"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10 6.25V10"
                            stroke="inherit"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M13.2476 11.875L10 10"
                            stroke="inherit"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M5.61328 7.79004H2.48828V4.66504"
                            stroke="inherit"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M5.13993 14.8614C6.10142 15.8228 7.32643 16.4776 8.66004 16.7429C9.99366 17.0082 11.376 16.872 12.6322 16.3517C13.8885 15.8313 14.9622 14.9501 15.7176 13.8195C16.4731 12.689 16.8763 11.3597 16.8763 10C16.8763 8.64026 16.4731 7.31104 15.7176 6.18046C14.9622 5.04987 13.8885 4.16868 12.6322 3.64833C11.376 3.12798 9.99366 2.99183 8.66004 3.2571C7.32643 3.52238 6.10142 4.17716 5.13993 5.13864L2.48828 7.79029"
                            stroke="inherit"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>

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
                      v-if="user && user.avatar"
                      class="pointer mx-2"
                      width="40px"
                      height="40px"
                      :src="user && user.avatar"
                    />

                    <v-icon
                      size="40"
                      v-else
                      :color="$vuetify.theme.dark ? 'white' : 'black'"
                      >mdi-account-circle</v-icon
                    >
                  </v-avatar>

                  <span
                    class="header-btn-font"
                    :class="$vuetify.theme.dark ? 'white--text' : 'black--text'"
                    >{{ getUserName }}</span
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
                      <span
                        class="px-2 error--text"
                        :class="
                          user && user.is_actived
                            ? 'success--text'
                            : 'error--text'
                        "
                      >
                        {{
                          user && user.is_actived ? "Verified" : "Unverified"
                        }}</span
                      >
                      <v-icon
                        :color="user && user.is_actived ? 'success' : 'error'"
                        size="20"
                      >
                        {{
                          user && user.is_actived
                            ? "mdi-check-circle"
                            : "mdi-close-circle"
                        }}
                      </v-icon>
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
                      <!-- <v-img
                        position="center"
                        class="pointer mx-2"
                        max-width="20px"
                        height="20px"
                        :src="item.icon"
                      /> -->

                     <div class="d-flex align-center mr-2 pointer">
                        <!-- Account Circle SVG -->
                      <svg
                        v-if="item.name == 'Account'"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                         :stroke="$vuetify.theme.dark ? 'white' : 'black'"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 15.375C14.2782 15.375 16.125 13.5282 16.125 11.25C16.125 8.97183 14.2782 7.125 12 7.125C9.72183 7.125 7.875 8.97183 7.875 11.25C7.875 13.5282 9.72183 15.375 12 15.375Z"
                          fill="inherit"
                        />
                        <path
                          d="M12 2.25C10.0716 2.25 8.18657 2.82183 6.58319 3.89317C4.97982 4.96451 3.73013 6.48726 2.99218 8.26884C2.25422 10.0504 2.06114 12.0108 2.43735 13.9021C2.81355 15.7934 3.74215 17.5307 5.10571 18.8943C6.46928 20.2579 8.20656 21.1865 10.0979 21.5627C11.9892 21.9389 13.9496 21.7458 15.7312 21.0078C17.5127 20.2699 19.0355 19.0202 20.1068 17.4168C21.1782 15.8134 21.75 13.9284 21.75 12C21.7471 9.41504 20.7189 6.93679 18.8911 5.10894C17.0632 3.28109 14.585 2.25293 12 2.25ZM18.1648 17.476C17.5628 16.6037 16.782 15.8695 15.8744 15.3221C14.8308 16.3188 13.4432 16.875 12 16.875C10.5569 16.875 9.16923 16.3188 8.12558 15.3221C7.218 15.8695 6.43724 16.6037 5.83516 17.476C4.77814 16.2874 4.08725 14.8186 3.84568 13.2464C3.60411 11.6743 3.82217 10.0658 4.4736 8.6147C5.12502 7.16361 6.18204 5.93177 7.51737 5.06752C8.85269 4.20327 10.4094 3.74346 12 3.74346C13.5906 3.74346 15.1473 4.20327 16.4826 5.06752C17.8179 5.93177 18.875 7.16361 19.5264 8.6147C20.1778 10.0658 20.3959 11.6743 20.1543 13.2464C19.9127 14.8186 19.2218 16.2874 18.1648 17.476Z"
                          fill="inherit"
                        />
                      </svg>

                      <!-- KYC SVG -->
                      <svg
                        v-if="item.name == 'KYC'"
                        width="24"
                        height="24"
                         :stroke="$vuetify.theme.dark ? 'white' : 'black'"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19.5 3H4.5C4.10233 3.00052 3.7211 3.15872 3.43991 3.43991C3.15872 3.7211 3.00052 4.10233 3 4.5V9.99976C3 18.3867 10.1082 21.1677 11.5342 21.6401C11.8363 21.7427 12.1637 21.7427 12.4658 21.6401C13.8911 21.1677 21 18.3875 21 9.99976V4.5C20.9995 4.10233 20.8413 3.7211 20.5601 3.43991C20.2789 3.15872 19.8977 3.00052 19.5 3ZM16.6428 9.54272L11.1423 14.7927C11.0028 14.9258 10.8173 15 10.6245 15C10.4317 15 10.2463 14.9258 10.1067 14.7927L7.35718 12.1677C7.2858 12.0997 7.22853 12.0184 7.18862 11.9282C7.14871 11.8381 7.12696 11.741 7.1246 11.6425C7.12224 11.5439 7.13933 11.4459 7.17488 11.354C7.21043 11.262 7.26375 11.178 7.33179 11.1067C7.39983 11.0354 7.48126 10.9782 7.57142 10.9384C7.66158 10.8985 7.7587 10.8769 7.85724 10.8746C7.95578 10.8723 8.0538 10.8895 8.1457 10.9251C8.2376 10.9608 8.32157 11.0142 8.39282 11.0823L10.6245 13.2129L15.6072 8.45728C15.6784 8.38917 15.7624 8.33578 15.8543 8.30014C15.9462 8.26451 16.0442 8.24734 16.1428 8.24961C16.2413 8.25188 16.3384 8.27354 16.4286 8.31337C16.5187 8.35319 16.6002 8.4104 16.6682 8.48171C16.7363 8.55302 16.7896 8.63705 16.8251 8.72898C16.8607 8.82091 16.8778 8.91894 16.8754 9.01748C16.873 9.11602 16.8513 9.21312 16.8114 9.30325C16.7715 9.39337 16.7142 9.47475 16.6428 9.54272H16.6428Z"
                        />
                      </svg>

                      <!-- Security SVG -->
                      <svg
                        width="24"
                        v-if="item.name == 'Security'"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                         :stroke="$vuetify.theme.dark ? 'white' : 'black'"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19.5 8.25H4.5C4.08579 8.25 3.75 8.58579 3.75 9V19.5C3.75 19.9142 4.08579 20.25 4.5 20.25H19.5C19.9142 20.25 20.25 19.9142 20.25 19.5V9C20.25 8.58579 19.9142 8.25 19.5 8.25Z"
                          stroke="inherit"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M8.625 8.25V4.875C8.625 3.97989 8.98058 3.12145 9.61351 2.48851C10.2465 1.85558 11.1049 1.5 12 1.5C12.8951 1.5 13.7535 1.85558 14.3865 2.48851C15.0194 3.12145 15.375 3.97989 15.375 4.875V8.25"
                          stroke="inherit"
                          fill="transparent"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>

                      <!-- Setting -->
                      <svg
                        v-if="item.name == 'Setting'"
                        width="24"
                        height="24"
                         :stroke="$vuetify.theme.dark ? 'white' : 'black'"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.90432 8.58641C5.07307 8.23016 5.26994 7.89266 5.49494 7.56453L5.45744 5.12703C5.45744 4.90203 5.55119 4.68641 5.72932 4.53641C6.60119 3.80516 7.59494 3.21453 8.69182 2.82078C8.90744 2.74578 9.14182 2.76453 9.32932 2.88641L11.4199 4.14266C11.8137 4.11453 12.2074 4.11453 12.6012 4.14266L14.6918 2.88641C14.8887 2.77391 15.1231 2.74578 15.3387 2.82078C16.4074 3.20516 17.4106 3.77703 18.3012 4.52703C18.4699 4.66766 18.5731 4.89266 18.5637 5.11766L18.5262 7.55516C18.7512 7.88328 18.9481 8.22078 19.1168 8.57703L21.2449 9.75828C21.4418 9.87078 21.5824 10.0583 21.6199 10.2833C21.8168 11.3989 21.8262 12.5614 21.6199 13.6958C21.5824 13.9208 21.4418 14.1083 21.2449 14.2208L19.1168 15.402C18.9481 15.7583 18.7512 16.0958 18.5262 16.4239L18.5637 18.8614C18.5637 19.0864 18.4699 19.302 18.2918 19.452C17.4199 20.1833 16.4262 20.7739 15.3293 21.1677C15.1137 21.2427 14.8793 21.2239 14.6918 21.102L12.6012 19.8458C12.2074 19.8739 11.8137 19.8739 11.4199 19.8458L9.32932 21.102C9.13244 21.2145 8.89807 21.2427 8.68244 21.1677C7.61369 20.7833 6.61057 20.2114 5.71994 19.4614C5.55119 19.3208 5.44807 19.0958 5.45744 18.8708L5.49494 16.4333C5.26994 16.1052 5.07307 15.7677 4.90432 15.4114L2.77619 14.2302C2.57932 14.1177 2.43869 13.9302 2.40119 13.7052C2.20432 12.5895 2.19494 11.427 2.40119 10.2927C2.43869 10.0677 2.57932 9.88016 2.77619 9.76766L4.90432 8.58641Z"
                          stroke="inherit"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5 9.51472 14.4853 7.5 12 7.5C9.51472 7.5 7.5 9.51472 7.5 12C7.5 14.4853 9.51472 16.5 12 16.5Z"
                          stroke="inherit"
                          :fill="$vuetify.theme.dark ? '#1E1E1E' : '#FFFFFF'"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>

                      <!-- Referral SVG -->
                      <svg
                        v-if="item.name == 'Referral'"
                        width="24"
                        height="24"
                         :stroke="$vuetify.theme.dark ? 'white' : 'black'"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20.25 6.75033H16.9718C17.4599 6.1548 17.7004 5.39439 17.6434 4.62651C17.5864 3.85862 17.2363 3.14205 16.6656 2.62513C16.0949 2.10821 15.3472 1.83053 14.5775 1.84956C13.8077 1.86859 13.0747 2.18288 12.5303 2.72736C12.3131 2.95367 12.134 3.21364 12 3.49718C11.8659 3.21363 11.6868 2.95365 11.4696 2.72732C10.9252 2.18284 10.1922 1.86857 9.42243 1.84955C8.65266 1.83053 7.90506 2.10822 7.33437 2.62515C6.76368 3.14207 6.4136 3.85864 6.35661 4.62653C6.29961 5.39441 6.54006 6.15482 7.02818 6.75033H3.75C3.35231 6.75078 2.97104 6.90896 2.68984 7.19017C2.40863 7.47137 2.25045 7.85264 2.25 8.25033V11.2503C2.25045 11.648 2.40863 12.0293 2.68984 12.3105C2.97104 12.5917 3.35231 12.7499 3.75 12.7503V18.7503C3.75045 19.148 3.90864 19.5293 4.18984 19.8105C4.47105 20.0917 4.85231 20.2499 5.25 20.2503H18.75C19.1477 20.2499 19.529 20.0917 19.8102 19.8105C20.0914 19.5293 20.2495 19.148 20.25 18.7503V12.7503C20.6477 12.7499 21.029 12.5917 21.3102 12.3105C21.5914 12.0293 21.7495 11.648 21.75 11.2503V8.25033C21.7495 7.85264 21.5914 7.47137 21.3102 7.19017C21.029 6.90896 20.6477 6.75078 20.25 6.75033ZM13.5909 3.78803C13.7302 3.64868 13.8955 3.53813 14.0776 3.4627C14.2596 3.38727 14.4546 3.34843 14.6517 3.34841C14.8487 3.34838 15.0438 3.38716 15.2258 3.46255C15.4078 3.53793 15.5732 3.64843 15.7125 3.78774C15.8518 3.92705 15.9623 4.09244 16.0377 4.27446C16.1131 4.45649 16.1519 4.65158 16.1519 4.84859C16.1519 5.04561 16.113 5.24069 16.0376 5.4227C15.9622 5.6047 15.8516 5.77007 15.7123 5.90935C15.2491 6.37258 13.9099 6.63271 12.782 6.71835C12.8676 5.59033 13.1277 4.25121 13.5909 3.78803ZM8.28763 3.78803C8.56917 3.50715 8.95062 3.34941 9.34831 3.3494C9.746 3.3494 10.1275 3.50713 10.409 3.788C10.8723 4.25124 11.1324 5.59047 11.218 6.71833C10.09 6.63266 8.75089 6.37254 8.28772 5.90935C8.00684 5.62782 7.8491 5.24638 7.84908 4.84871C7.84906 4.45103 8.00678 4.06958 8.28763 3.78803ZM20.25 11.2503H12.75V18.0003C12.75 18.1992 12.671 18.39 12.5303 18.5307C12.3897 18.6713 12.1989 18.7503 12 18.7503C11.8011 18.7503 11.6103 18.6713 11.4697 18.5307C11.329 18.39 11.25 18.1992 11.25 18.0003V11.2503H3.75V8.25033H11.25V11.2503H12.75V8.25033H20.25L20.2509 11.2503L20.25 11.2503Z"
                          fill="inherit"
                        />
                      </svg>
                     </div>

                      

                      {{ item.name }}
                    </div>
                  </v-list-item-title>
                </v-list-item>

                <v-list-item link @click="logout" class="mt-15">
                  <v-list-item-title class="ft-14">
                    <div class="d-flex flex-row align-center font_wght400">
                      <!-- <v-img
                        position="center"
                        class="pointer mx-2"
                        max-width="20px"
                        height="20px"
                        src="/icons/SignOut.png"
                      /> -->

                      <svg
                        width="24"
                        height="24"
                        class="pointer mx-2"
                        viewBox="0 0 24 24"
                         :stroke="$vuetify.theme.dark ? 'white' : 'black'"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.3125 8.0625L20.249 12L16.3125 15.9375"
                          stroke="inherit"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M9.75 12H20.2472"
                          stroke="inherit"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M9.75 20.25H4.5C4.30109 20.25 4.11032 20.171 3.96967 20.0303C3.82902 19.8897 3.75 19.6989 3.75 19.5V4.5C3.75 4.30109 3.82902 4.11032 3.96967 3.96967C4.11032 3.82902 4.30109 3.75 4.5 3.75H9.75"
                          stroke="inherit"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>

                      Log out
                    </div>
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </div>
        </div>

        <v-btn icon @click="toggleDarkMode">
          <fa
            :icon="['far', 'moon']"
            style="width: 17px; height: 17px"
            :color="$vuetify.theme.dark ? 'white' : 'black'"
          />
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
    ...mapGetters("wallet", ["getBalance"]),
    ...mapGetters("global", ["user"]),
    loginToken() {
      return localStorage.getItem("token");
    },
    getUserName() {
      if (!this.user) this.$store.dispatch("global/setUser");
      let fullName =
        this.user && this.user.firstName + this.user && this.user.lastName;
      return fullName ? fullName : "";
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