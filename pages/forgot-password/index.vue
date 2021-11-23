<template>
  <v-container>
    <v-row dense>
      <v-col align="center">
        <h1 class="py-5 mx-auto font-weight-bold text-center">
          Reset password
        </h1>

        <!-- <v-container class="cont_layout"> -->
        <v-row no-gutters class="py-3" justify="center">
          <v-col sm="4" align="end">
            <v-btn
              :width="$vuetify.breakpoint.smAndDown ? 'auto' : '175.89px'"
              height="36px"
              :text="!showEmail"
              :color="showEmail ? '#FFE89D' : ''"
              class="text-capitalize black--text font-weight-bold"
              depressed
              @click.stop.prevent="showEmail = true"
            >
              Email
            </v-btn>
          </v-col>

          <v-col sm="4" align="start">
            <v-btn
              :width="$vuetify.breakpoint.smAndDown ? 'auto' : '175.89px'"
              height="36px"
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

        <v-text-field
          v-if="showEmail"
          placeholder="Email"
          v-model="userEmail"
          class="verify_box mx-auto py-7 text-xs-center"
          filled
          rounded
          max-height="40px"
          max-width="332px"
        >
        </v-text-field>

        <v-row
          wrap
          dense
          justify="center"
          align-content="center"
          class="py-1 cont_layout"
          v-else
        >
          <v-col cols="5">
            <v-select
              v-model="countryCode"
              :items="['+82', '+75']"
              menu-props="auto"
              placeholder="Select"
              hide-details
              max-width="100px"
              single-line
              class="phoneSelector"
              outlined
            >
              <template v-slot:prepend-inner>
                <img
                  @click="showPassword = !showPassword"
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
                <!-- Caret Down -->
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
              </template>
            </v-select>
          </v-col>

          <v-col cols="7">
            <v-text-field
              filled
              v-model="phoneNumber"
              max-width="202px"
              placeholder="Phone number"
            ></v-text-field>
          </v-col>
        </v-row>
        <!-- </v-container> -->

        <v-btn
          width="118px"
          height="42px"
          depressed
          color="primary"
          class="black--text text-capitalize font-weight-bold"
          @click.stop.prevent="sendCode"
        >
          Continue
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  layout: "Blank",
  data() {
    return {
      
    };
  },
  computed: {
    ...mapGetters("auth", [
      "getEmail",
      "getPhoneNumber",
      "getCountryCode",
      "emailSelected",
    ]),
    userEmail: {
      get() {
        return this.getEmail;
      },
      set(newValue) {
        this.$store.dispatch("auth/setEmail", newValue);
      },
    },
    phoneNumber: {
      get() {
        return this.getPhoneNumber;
      },
      set(newValue) {
        this.$store.dispatch("auth/setPhoneNumber", newValue);
      },
    },
    countryCode: {
      get() {
        return this.getCountryCode;
      },
      set(newValue) {
        this.$store.dispatch("auth/setCountryCode", newValue);
      },
    },
    showEmail: {
      get() {
        return this.emailSelected;
      },
      set(newValue) {
        this.$store.dispatch("auth/setEmailSelected", newValue);
      },
    },
  },
  methods: {
    sendCode() {
      let params = {
        auth: this.showEmail ? "email" : "phone_number",
        // type: "forgotPassword",
      };

      // Check code sent from email or phoneNumber
      if (this.showEmail) params.email = this.userEmail;
      else {
        params.country_code = this.getCountryCode;
        params.phone_number = parseInt(this.getPhoneNumber);
      }

      this.$api.authService
        .forgotPassword(params)
        .then((response) => {
          if (response && response.message == "SENT_RESET_PASS_SUCCESS") {
            this.$router.push("forgot-password/verification");
          }
        })
        .catch((error) => {
          throw error;
        });
    },
  },
};
</script>

<style scoped>
.verify_box {
  width: 385px !important;
  border-radius: 5px;
}

.phone_field {
  max-width: 332px !important;
}

.cont_layout {
  max-width: 500px !important;
}
</style>