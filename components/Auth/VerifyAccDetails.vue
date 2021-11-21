<template>
  <v-card>
    <v-card-title>
      <v-spacer></v-spacer>
      <v-icon @click="$emit('close'), reset()">mdi-close</v-icon>
    </v-card-title>

    <div class="px-10 pt-5 text-center">
      <div
        v-if="!showVerifiedScreen"
        class="text-center text-h5 font-weight-bold"
      >
        Verify new {{ verifyPhone ? "phone number" : "email" }}
      </div>
      <v-card-text v-if="getDetails" class="py-10">
        <div class="py-2" v-if="verifyPhone">
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
                type="number"
                width="202px"
                hide-details
                placeholder="Phone number"
              ></v-text-field>
            </v-col>
          </v-row>
        </div>

        <div class="py-2" v-else>
          <span class="py-1 font_wght400">Email</span>
          <v-text-field
            class="py-1"
            filled
            width="332px"
            dense
            placeholder="Email"
          ></v-text-field>
        </div>
      </v-card-text>

      <v-card-text class="py-10" v-else-if="confirmScreen">
        <div>
          We have sent your verification code
          {{ verifyPhone ? "to" : "your email" }}<br />
          <span class="font-weight-bold black--text">
            {{ verifyPhone ? "07*********81" : "vi*******@vutatech.vn" }}
          </span>
        </div>

        <v-text-field
          placeholder="Enter verification code"
          class="verify_box mx-auto pt-7 text-xs-center"
          error-messages="Wrong verification code"
          filled
          rounded
          style="width: 314px"
          max-height="40px"
        >
        </v-text-field>

        <v-btn
          class="outlined pa-4 py-5"
          text
          v-if="reSendCode"
          @click="sendCode"
        >
          <span class="font-weight-medium grey--text px-1">Resend in </span>
          00:30
        </v-btn>

        <v-btn class="outlined pa-4 py-5" text v-else @click="sendCode">
          Send
        </v-btn>
      </v-card-text>

      <v-card-text class="pb-10 pt-0" v-else-if="showVerifiedScreen">
        <div>
          <v-img
            height="106.44px"
            width="106.44px"
            class="mx-auto"
            src="/img/CheckCircle.svg"
          ></v-img>

          <h3 class="py-5 font-weight-black black--text ft-25">
            {{ verifyPhone ? "Phone number" : "Email" }} verification successful
          </h3>
        </div>
      </v-card-text>

      <v-card-actions v-if="!showVerifiedScreen" class="py-10">
        <v-spacer></v-spacer>
        <v-btn
          v-if="getDetails"
          depressed
          height="42px"
          color="primary"
          class="px-10 py-3"
          @click="(getDetails = false), (confirmScreen = true)"
        >
          Get verification code
        </v-btn>
        <v-btn
          v-else-if="confirmScreen"
          depressed
          height="42px"
          color="primary"
          class="px-5 py-3"
          @click="confirm"
        >
          Confirm
        </v-btn>
        <v-spacer></v-spacer>
      </v-card-actions>
    </div>
  </v-card>
</template>

<script>
export default {
  props: ["verifyPhone"],
  data() {
    return {
      getDetails: true,
      confirmScreen: false,
      reSendCode: false,
      selectedPhoneNumber: null,
      showVerifiedScreen: false,
    };
  },
  destroyed() {
    this.reset();
  },
  methods: {
    sendCode() {
      this.reSendCode = true;
    },
    confirm() {
      this.showVerifiedScreen = true;
      this.confirmScreen = false;
    },
    reset() {
      this.getDetails = true;
      this.confirmScreen = false;
      this.reSendCode = false;
      this.selectedPhoneNumber = null;
      this.showVerifiedScreen = false;
    },
  },
};
</script>

<style scoped>
.verify_box {
  width: 314px !important;
  border-radius: 5px;
}

.verify_box >>> input {
  text-align: center !important;
}
</style>