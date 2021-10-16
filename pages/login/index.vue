<template>
  <v-container fill-height>
    <v-row
      justify="center"
      :class="$vuetify.breakpoint.mdAndUp ? 'outlined' : ''"
      align="center"
      class="bg-white"
      no-gutters
    >
      <v-col
        md="6"
        align-self="center"
        class="pa-0"
        v-if="renderColumn"
      >
        <v-img
          alt="signUp_img"
          lazy-src="/img/signIn.png"
          width="100%"
          height="850px"
          min-height="fit-content"
          src="/img/signIn.png"
        />
      </v-col>

      <v-col class="pa-0 full-height" align-self="center">
        <v-container fill-height class="pa-0 login_fields">
          <v-layout column justify-start>
            <span class="subtitle grey--text text-center py-3"
              >Login in with</span
            >

            <v-row class="py-3" justify="center">
              <v-col cols="6" align="end">
                <v-btn
                  :width="$vuetify.breakpoint.smAndDown ? 'auto' : '155.89px'"
                  height="36px"
                  :text="!showEmail"
                  :color="showEmail ? '#FFE89D' : ''"
                  class="text-capitalize black--text font-weight-bold"
                  depressed
                  @click.stop.prevent="showEmail = true"
                >
                  <span class="font-weight-bold">Email</span>
                </v-btn>
              </v-col>

              <v-col cols="6" align="start">
                <v-btn
                  :width="$vuetify.breakpoint.smAndDown ? 'auto' : '153.89px'"
                  height="36px"
                  :text="showEmail"
                  :color="showEmail ? '' : '#FFE89D'"
                  class="text-capitalize black--text"
                  depressed
                  @click.stop.prevent="showEmail = false"
                >
                  <span class="font-weight-bold">Mobile</span>
                </v-btn>
              </v-col>
            </v-row>

            <div v-if="showEmail">
              <span class="py-1 font_wght400">Email</span>
              <v-text-field
                class="py-1"
                filled
                width="332px"
                dense
                placeholder="Email"
              ></v-text-field>
            </div>

            <div v-else class="py-2">
              <span class="py-1 font_wght400">Phone number</span>
              <v-row dense wrap class="py-1">
                <v-col cols="5">
                  <v-select
                    v-model="selectedPhoneNumber"
                    :items="['+82', '+75']"
                    menu-props="auto"
                    placeholder="Select"
                    hide-details
                    width="120px"
                    single-line
                    class="phoneSelector"
                    outlined
                  >
                    <template v-slot:prepend-inner>
                      <img
                        class="pointer mx-2"
                        width="20"
                        height="20"
                        src="../../static/flagIcons/vietnam.png"
                      />
                    </template>
                    <template v-slot:selection="{ item }">
                      {{ item }}
                    </template>
                    <template v-slot:append>
                      <img
                        class="pointer"
                        width="16"
                        height="16"
                        src="../../static/img/CaretDown.png"
                      />
                    </template>
                  </v-select>
                </v-col>

                <v-col cols="7">
                  <v-text-field
                    filled
                    type="number"
                    width="202px"
                    hide-details
                    placeholder="Phone number"
                  ></v-text-field>
                </v-col>
              </v-row>
            </div>

            <span class="py-1 font_wght400">Password </span>
            <v-text-field
              :rules="[rules.required, rules.min]"
              :type="showPassword ? 'text' : 'password'"
              name="input-10-2"
              placeholder="Password"
              hint="At least 8 characters"
              value="1346"
              width="332px"
              filled
            >
              <template v-slot:append>
                <v-icon
                  color="black"
                  @click="showPassword = !showPassword"
                  v-if="showPassword"
                  >mdi-eye</v-icon
                >
                <img
                  @click="showPassword = !showPassword"
                  v-else
                  class="pointer"
                  width="20"
                  height="20"
                  src="../../static/img/EyeClosed.png"
                />
              </template>
            </v-text-field>

            <nuxt-link
              class="text-right py-4 pb-6 black--text font-weight-light"
              to="/forgot-password"
              >Forgot password ?</nuxt-link
            >

            <v-btn
              color="primary"
              block
              max-width="332px"
              height="42px"
              depressed
              class="text-capitalize black--text mb-6"
            >
              Log in
            </v-btn>

            <small class="py-2 text-center caption grey--text"
              >Or continue with</small
            >
            <v-row>
              <v-col align="end">
                <svg
                  width="60"
                  height="40"
                  viewBox="0 0 60 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width="59"
                    height="39"
                    rx="4.5"
                    fill="#F4F4F4"
                    stroke=""
                  />
                  <path
                    d="M42 20C42 13.3726 36.6274 8 30 8C23.3726 8 18 13.3726 18 20C18 25.9895 22.3882 30.954 28.125 31.8542V23.4688H25.0781V20H28.125V17.3563C28.125 14.3488 29.9166 12.6875 32.6576 12.6875C33.9701 12.6875 35.3438 12.9219 35.3438 12.9219V15.875H33.8306C32.34 15.875 31.875 16.8001 31.875 17.75V20H35.2031L34.6711 23.4688H31.875V31.8542C37.6118 30.954 42 25.9895 42 20Z"
                    fill="#1877F2"
                  />
                  <path
                    d="M34.6711 23.4688L35.2031 20H31.875V17.75C31.875 16.801 32.34 15.875 33.8306 15.875H35.3438V12.9219C35.3438 12.9219 33.9705 12.6875 32.6576 12.6875C29.9166 12.6875 28.125 14.3488 28.125 17.3563V20H25.0781V23.4688H28.125V31.8542C29.3674 32.0486 30.6326 32.0486 31.875 31.8542V23.4688H34.6711Z"
                    fill="white"
                  />
                </svg>
              </v-col>

              <v-col align="start">
                <svg
                  width="60"
                  height="40"
                  viewBox="0 0 60 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width="59"
                    height="39"
                    rx="4.5"
                    fill="#F4F4F4"
                    stroke=""
                  />
                  <g clip-path="url(#clip0)">
                    <path
                      d="M41.766 20.2763C41.766 19.4605 41.6999 18.6404 41.5588 17.8379H30.24V22.4589H36.7217C36.4528 23.9492 35.5885 25.2676 34.323 26.1054V29.1037H38.19C40.4608 27.0137 41.766 23.9272 41.766 20.2763Z"
                      fill="#4285F4"
                    />
                    <path
                      d="M30.2401 32.0008C33.4766 32.0008 36.2059 30.9382 38.1945 29.1039L34.3276 26.1055C33.2517 26.8375 31.8627 27.252 30.2445 27.252C27.1139 27.252 24.4595 25.1399 23.507 22.3003H19.5166V25.3912C21.5537 29.4434 25.7029 32.0008 30.2401 32.0008Z"
                      fill="#34A853"
                    />
                    <path
                      d="M23.5025 22.3002C22.9999 20.8099 22.9999 19.196 23.5025 17.7057V14.6147H19.5165C17.8145 18.0055 17.8145 22.0004 19.5165 25.3912L23.5025 22.3002Z"
                      fill="#FBBC04"
                    />
                    <path
                      d="M30.2401 12.7497C31.9509 12.7232 33.6044 13.367 34.8434 14.5487L38.2695 11.1226C36.1001 9.0855 33.2208 7.96553 30.2401 8.00081C25.7029 8.00081 21.5537 10.5582 19.5166 14.6148L23.5026 17.7058C24.4506 14.8617 27.1095 12.7497 30.2401 12.7497Z"
                      fill="#EA4335"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="translate(18 8)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </v-col>
            </v-row>

            <div class="py-2 text-center font-weight-bold">
              Doesn’t have account ?
              <a href="/signUp" @click.stop class="font-weight-bold">
                Sign Up
              </a>
            </div>
          </v-layout>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import EyeIcon from "../../static/img/EyeClosed.png";

export default {
  layout: "Blank",
  computed: {
    icon() {
      return EyeIcon;
    },
  },
  data() {
    return {
      isMounted: false,
      showEmail: false,
      checkbox: null,
      selectedPhoneNumber: "+82",
      showPassword: false,
      rules: {
        required: (value) => !!value || "Required.",
        min: (v) => v.length >= 8 || "Min 8 characters",
      },
    };
  },
  mounted() {
    this.isMounted = true;
  },
  computed: {
    renderColumn() {
      if (!this.isMounted) return true;
      return this.$vuetify.breakpoint.mdAndUp;
    }
  },
};
</script>

<style lang="scss" scoped>
.bg-color {
  background-color: #f4f4f4 !important;
}

.login_fields {
  max-width: 332px !important;
}

.phoneSelector > .theme--light.v-text-field--filled > .v-input__control > .v-input__slot {
  background: #FFFFFF !important;
}

</style>

