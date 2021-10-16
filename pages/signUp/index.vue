<template>
  <v-container fill-height>
    <v-row
      justify="center"
      :class="$vuetify.breakpoint.mdAndUp ? 'outlined' : ''"
      align="center"
      no-gutters
      class="bg-white"
    >
      <v-col
        md="6"
        align-self="center"
        class="pa-0"
        v-if="renderColumn"
      >
        <v-img
          alt="signUp_img"
          lazy-src="/img/signUp-bg.png"
          width="100%"
          height="850px"
          min-height="fit-content"
          src="/img/signUp-bg.png"
        />
      </v-col>

      <v-col class="pa-0" align-self="center">
        <v-container fill-height class="pa-0" style="max-width: 332px">
          <v-col align-self="center" class="pa-0">
            <span class="d-flex flex-column grey--text text-center"
              >Create account by</span
            >

            <v-row class="py-3" justify="center">
              <v-col cols="6" align="end">
                <v-btn
                  block
                  height="36px"
                  :width="$vuetify.breakpoint.smAndDown ? 'auto' : '156px'"
                  :text="!showEmail"
                  :color="showEmail ? '#FFE89D' : ''"
                  class="text-capitalize black--text font-weight-bold"
                  depressed
                  @click.stop.prevent="showEmail = true"
                >
                  Email
                </v-btn>
              </v-col>

              <v-col cols="6" align="start">
                <v-btn
                  block
                  height="36px"
                  :width="$vuetify.breakpoint.smAndDown ? 'auto' : '156px'"
                  :text="showEmail"
                  :color="showEmail ? '' : '#FFE89D'"
                  class="text-capitalize black--text font-weight-bold"
                  depressed
                  @click.stop.prevent="showEmail = false"
                >
                  Mobile
                </v-btn>
              </v-col>
            </v-row>

            <div>
              <span class="py-1">Name</span>
              <v-text-field
                style="max-width: 332px"
                filled
                hide-details
                placeholder="Your name"
              ></v-text-field>
            </div>

            <div v-if="showEmail" class="py-2">
              <span class="py-1">Email</span>
              <v-text-field
                style="max-width: 332px"
                filled
                hide-details
                placeholder="Email"
              ></v-text-field>
            </div>

            <div class="py-2" v-else>
              <span>Phone number</span>
              <v-row dense wrap style="max-width: 332px">
                <v-col cols="5" align="left">
                  <v-select
                    v-model="selectedPhoneNumber"
                    :items="['+82', '+75']"
                    menu-props="auto"
                    placeholder="Select"
                    hide-details
                    style="max-width: 120px"
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

                <v-col align="left">
                  <v-text-field
                    filled
                    hide-details
                    type="number"
                    style="max-width: 202px"
                    placeholder="Phone number"
                  ></v-text-field>
                </v-col>
              </v-row>
            </div>

            <div class="py-2">
              <span >Password</span>
              <v-text-field
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="[rules.required, rules.min]"
                :type="showPassword ? 'text' : 'password'"
                name="input-10-2"
                placeholder="Password"
                hint="At least 8 characters"
                value="1346"
                class="input-group--focused"
                style="max-width: 332px"
                filled
                dense
                @click:append="showPassword = !showPassword"
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
            </div>

            <span class="py-1">Referral ID (Option)</span>
            <v-text-field
              style="max-width: 332px"
              filled
              hide-details
              placeholder="Referral ID"
            ></v-text-field>

            <v-checkbox v-model="checkbox">
              <template v-slot:label>
                <div class="font-weight-regular black--text">
                  I accept with
                  <a target="_blank" href="#"> Privacy Policy </a>
                  of
                </div>
              </template>
            </v-checkbox>

            <v-btn
              color="primary"
              block
              max-width="332"
              height="42px"
              depressed
              class="text-capitalize black--text mb-6 font-weight-bold"
            >
              Sign <span class="text-lowercase">up</span>
            </v-btn>

            <small
              class="d-flex flex-column py-2 text-center caption grey--text"
              >Or continue with</small
            >
            <v-row dense>
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
              Have a account ?
              <a href="/login" @click.stop> Log in </a>
            </div>
          </v-col>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  layout: "Blank",
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
</style>
