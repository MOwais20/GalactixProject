<template>
  <div>
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn text class="outlined" v-bind="attrs" v-on="on">
          Change password
        </v-btn>
      </template>

      <v-card class="pa-10">
        <div class="text-center text-h4 font-weight-bold">Change password</div>

        <v-card-text class="py-5">
          <v-text-field
            :type="showOldPassword ? 'text' : 'password'"
            name="input-10-2"
            placeholder="Old password"
            hint="At least 8 characters"
            max-width="332px"
            v-model="credentials.old_pass"
            filled
          >
            <template v-slot:append>
              <v-icon
                :color="$vuetify.theme.dark ? 'white' : 'black'"
                @click="showOldPassword = !showOldPassword"
                v-if="showOldPassword"
                >mdi-eye</v-icon
              >
              <v-img
                @click="showOldPassword = !showOldPassword"
                v-else
                class="pointer"
                width="20"
                height="20"
                src="/img/EyeClosed.png"
              />
            </template>
          </v-text-field>

          <v-text-field
            :type="showNewPassword ? 'text' : 'password'"
            name="input-10-2"
            placeholder="New password"
            hint="At least 8 characters"
            max-width="332px"
             v-model="credentials.password"
            filled
          >
            <template v-slot:append>
              <v-icon
                :color="$vuetify.theme.dark ? 'white' : 'black'"
                @click="showNewPassword = !showNewPassword"
                v-if="showNewPassword"
                >mdi-eye</v-icon
              >
              <v-img
                @click="showNewPassword = !showNewPassword"
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
            placeholder="Confirm password"
            hint="At least 8 characters"
            max-width="332px"
            v-model="credentials.password_confirmation"
            filled
          >
            <template v-slot:append>
              <v-icon
               :color="$vuetify.theme.dark ? 'white' : 'black'"
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
                src="/img/EyeClosed.png"
              />
            </template>
          </v-text-field>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            width="172px"
            height="42px"
            depressed
            color="primary"
            class="px-5 py-3"
            @click="changePass"
          >
            Change password
          </v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="enableGoogleAuth" width="440" fill-height>
      <v-card>
        <v-card-text class="pa-7 text-center">
          <v-img
            height="auto"
            width="270"
            src="/img/authImg.png"
            class="mx-auto"
            alt="authImg"
          ></v-img>

          <div class="py-4 ft-14 black--text">
            Please turn on <span class="primary--text">2FA</span>, include
            <span class="primary--text">Google Authenticator</span>
          </div>

          <v-btn
            height="42px"
            depressed
            class="px-6"
            color="primary"
            @click="enableGoogleAuth = false"
          >
            Security
          </v-btn>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "change-password-dialog",
  data() {
    return {
      dialog: false,
      showOldPassword: false,
      showNewPassword: false,
      showConfirmPassword: false,
      enableGoogleAuth: false,
      credentials: {
        old_pass: '',
        password: '',
        password_confirmation: ''
      }
    };
  },
  methods: {
    closeDialog() {
      this.dialog = false;
      // enableGoogleAuth Dialog
      this.enableGoogleAuth = true;
    },
    changePass() {
      this.$api.userService
        .changePassword(this.credentials)
        .then((response) => {
          if (response.status == 200) this.closeDialog();
          return response;
        })
        .catch((error) => {
          throw error;
        });
    },
  },
};
</script>

<style>
</style>