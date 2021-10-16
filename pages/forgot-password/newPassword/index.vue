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
              @click.stop.prevent="passwordChanged = true"
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
            src="/img/CheckCircle.svg"></v-img>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  layout: "Blank",
  data() {
    return {
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