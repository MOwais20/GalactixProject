<template>
  <v-container>
    <v-row align="start" no-gutters style="height: 150px">
      <v-col align="center">
        <div class="text-center layout_box">
          <div v-if="!passwordChanged">
            <h1 class="py-5 font-weight-black">New Password</h1>

            <v-text-field
              :type="showPassword ? 'text' : 'password'"
              name="input-10-2"
              placeholder="New password"
              hint="At least 8 characters"
              max-width="332px"
              v-model.trim="password"
              filled
            >
              <template v-slot:append>
                <v-icon
                  color="black"
                  @click="showPassword = !showPassword"
                  v-if="showPassword"
                  >mdi-eye</v-icon
                >
                <v-img
                  @click="showPassword = !showPassword"
                  v-else
                  class="pointer"
                  width="20"
                  height="20"
                  src="/img/EyeClosed.png"
                />
              </template>
            </v-text-field>

            <v-text-field
              :type="showConfirmPassword ? 'text' : 'password'"
              name="input-10-2"
              placeholder="Confirm new password"
              hint="At least 8 characters"
              max-width="332px"
              v-model.trim="confirmPassword"
              filled
            >
              <template v-slot:append>
                <v-icon
                  color="black"
                  @click="showConfirmPassword = !showConfirmPassword"
                  v-if="showConfirmPassword"
                  >mdi-eye</v-icon
                >
                <v-img
                  @click="showConfirmPassword = !showConfirmPassword"
                  v-else
                  class="pointer"
                  width="20"
                  height="20"
                  lazy-src="/img/EyeClosed.png"
                  src="/img/EyeClosed.png"
                />
              </template>
            </v-text-field>

            <v-btn
              width="172px"
              height="42px"
              depressed
              color="primary"
              class="black--text text-capitalize font-weight-bold my-12"
              @click.stop.prevent="resetPass"
            >
              Change Password
            </v-btn>
          </div>

          <!-- Verfication Screen -->
          <div v-else>
            <h1 class="py-5 font-weight-black">Change password success !</h1>

            <v-img
              height="106.44px"
              width="106.44px"
              class="mx-auto"
              src="/img/CheckCircle.svg"
            ></v-img>
          </div>
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
      code: null,
      password: "",
      confirmPassword: "",
      showPassword: false,
      showConfirmPassword: false,
      passwordChanged: false,
      rules: {
        //required: (value) => !!value || "Required.",
        min: (v) => v.length >= 8 || "Min 8 characters",
      },
    };
  },
  created() {
    // doing temporary
    this.passwordChanged = false;

    // Route Params
    if (this.$route.params && this.$route.params.code) {
      this.code = this.$route.params.code;
    }
  },
  computed: {
    ...mapGetters("auth", [
      "getEmail",
      "getPhoneNumber",
      "getCountryCode",
      "emailSelected",
    ]),
  },
  methods: {
    resetPass() {
      let params = {
        auth: this.emailSelected ? "email" : "phone_number",
        code: this.code,
        password: this.password.toString(),
        password_confirmation: this.confirmPassword.toString()
      };

      // Check code sent from email or phoneNumber
      if (this.emailSelected) params.email = this.userEmail;
      else {
        params.country_code = this.getCountryCode;
        params.phone_number = parseInt(this.getPhoneNumber);
      }

      this.$api.authService
        .resetPassword(params)
        .then((response) => {
          console.log("Reset PAss Response", response);
          if (response && response.status == 200) {
            this.passwordChanged = true;

            setTimeout(() => {
              this.$router.push('/')
            }, 3000);
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
.layout_box {
  max-width: 500px !important;
}

.v-text-field {
  max-width: 332px !important;
  margin: auto;
}
</style>