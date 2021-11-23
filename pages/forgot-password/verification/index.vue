<template>
  <v-container class="mb-6">
    <v-row align="start" no-gutters style="height: 150px">
      <v-col>
        <div class="text-center">
          <h1 class="py-5 font-weight-black">Verification</h1>

          <div>
            <h4 class="subtitle-1 grey--text">
              We have sent your verification code to
            </h4>
            <span class="d-inline-block text-truncate font-weight-medium">
              {{ authData }}
            </span>
          </div>

          <div>
            <v-text-field
              placeholder="Enter verification code"
              class="verify_box mx-auto py-7 text-xs-center"
              filled
              v-model="code"
              rounded
              max-height="40px"
            >
            </v-text-field>
          </div>       

          <div v-if="countDown <= 0">
            <v-btn @click.stop.prevent="resendCode" width="177px" class="py-7 mx-auto" depressed color="white">
            <span class="font-weight-light">Resend</span>
          </v-btn>
          </div>

           <v-card v-else outlined width="177px" class="mx-auto">
            <v-card-text class="timer-area">
              <div>
                Resend in
                <span class="font-weight-bold">00:{{ countDown }}</span>
              </div>
            </v-card-text>
          </v-card>

          <v-btn
            width="118px"
            height="42px"
            depressed
            :disabled="code && code.length == 0"
            color="primary"
            class="black--text text-capitalize font-weight-bold my-12"
            @click.stop.prevent="verifyCode"
          >
            Continue
          </v-btn>
        </div>
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
      code: '',
      countDown: 30,
    };
  },
  created() {
    this.countDownTimer();
  },
  computed: {
    ...mapGetters("auth", [
      "getEmail",
      "getPhoneNumber",
      "getCountryCode",
      "emailSelected",
    ]),
    authData() {
      if (this.emailSelected) return this.getEmail;
      return `${this.getCountryCode} ${this.getPhoneNumber}`;
    },
  },
  methods: {
    countDownTimer() {
      if (this.countDown > 0) {
        setTimeout(() => {
          this.countDown -= 1;
          this.countDownTimer();
        }, 1000);
      }
    },
    verifyCode() {
      let params = {
        auth: this.emailSelected ? "email" : "phone_number",
        type: "forgotPassword",
        code: this.code,
      };

      // Check code sent from email or phoneNumber
      if (this.emailSelected) params.email = this.userEmail;
      else {
        params.country_code = this.getCountryCode;
        params.phone_number = parseInt(this.getPhoneNumber);
      }

      this.$api.authService
        .verify_code(params)
        .then((response) => {
          console.log("Verify Response", response);
          if (response && response.status == 200) {
            this.$router.push({
              name: 'forgot-password-newPassword',
              params: {
                code: this.code
              }
            });
          }
        })
        .catch((error) => {
          throw error;
        });
    },
    resendCode() {
      let params = {
        auth: this.emailSelected ? "email" : "phone_number",
        type: "forgotPassword",
      };

      // Check code sent from email or phoneNumber
      if (this.emailSelected) params.email = this.userEmail;
      else {
        params.country_code = this.getCountryCode;
        params.phone_number = parseInt(this.getPhoneNumber);
      }

      this.$api.authService
        .resend_code(params)
        .then((response) => response)
        .catch((error) => {
          throw error;
        });
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