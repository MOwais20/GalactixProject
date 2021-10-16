<template class="bg-temp">
  <v-container>
    <v-row class="py-2">
      <v-col cols="4" align="center">
        <v-card flat width="420" min-height="860">
          <v-card-text class="black--text mx-auto primary">
            <v-col align="center">
              <v-avatar size="150px" class="ma-3">
                <img
                  src="/img/profile.png"
                  lazy-src="/img/profile.png"
                  alt="Profile_Picture"
                  max-height="150px"
                  max-width="150px"
                />
              </v-avatar>

              <div class="font-weight-bold pa-2 ft-20">Pham Viet Anh</div>

              <div
                class="
                  d-flex
                  flex-row flex-wrap
                  justify-center
                  align-center
                  ft-14
                  font-weight-medium
                  pa-1
                "
              >
                <span class="mx-1">Ref ID: #9849167613</span>

                <v-btn icon>
                  <v-img
                    alt="copy"
                    src="/icons/Copy.png"
                    height="24px"
                    max-width="24px"
                  ></v-img>
                </v-btn>
              </div>
            </v-col>
          </v-card-text>

          <v-card-text>
            <div class="d-flex flex-wrap flex-row justify-center black--text">
              <v-avatar class="outlined mx-3">
                <v-icon> mdi-email-outline </v-icon>
              </v-avatar>

              <v-avatar class="outlined mx-3">
                <v-icon> mdi-phone-outline </v-icon>
              </v-avatar>

              <v-avatar class="outlined mx-3">
                <span class="ft-16 font-weight-regular">2FA</span>
              </v-avatar>
            </div>
          </v-card-text>

          <v-card-text class="ml-4">
            <div class="d-flex flex-column">
              <div class="d-flex flex-column flex-wrap align-start">
                <v-btn
                  to="account"
                  plain
                  nuxt
                  text
                  class="ma-1"
                >
                  <v-img
                    alt="copy"
                    src="/icons/UserCircle.png"
                    height="24px"
                    max-width="24px"
                  ></v-img>
                  <span class="px-2">Account</span>
                </v-btn>

                <v-btn plain to="kyc" nuxt text class="ma-1">
                  <v-img
                    alt="copy"
                    src="/icons/ShieldCheck.png"
                    height="24px"
                    max-width="24px"
                  ></v-img>
                  <span class="px-2">KYC</span>
                </v-btn>

                <v-btn plain to="security" nuxt text class="ma-1">
                  <v-img
                    alt="copy"
                    src="/icons/LockSimple.png"
                    height="24px"
                    max-width="24px"
                  ></v-img>
                  <span class="px-2">Security</span>
                </v-btn>

                <v-btn plain to="setting" nuxt text class="ma-1">
                  <v-img
                    alt="copy"
                    src="/icons/GearSix.png"
                    height="24px"
                    max-width="24px"
                  ></v-img>
                  <span class="px-2">Setting</span>
                </v-btn>

                <v-btn to="referral" nuxt plain text class="ma-1">
                  <v-img
                    alt="copy"
                    src="/icons/Gift.png"
                    height="24px"
                    max-width="24px"
                  ></v-img>
                  <span class="px-2">Referral</span>
                </v-btn>
              </div>

              <div class="d-flex align-start flex-column mt-15">
                <v-btn active-class="primary" nuxt plain text class="ma-1">
                  <v-img
                    alt="copy"
                    src="/icons/SignOut.png"
                    height="24px"
                    max-width="24px"
                  ></v-img>
                  <span class="px-2">Log Out</span>
                </v-btn>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="8">
        <div>
          <!-- Child Components -->
          <nuxt-child> </nuxt-child>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  middleware({ route, redirect, from }) {
    if (route.path == "/profile" || route.path == "/profile/") {
      return redirect("/profile/account");
    }
  },
};
</script>

<style lang="scss" scoped>


.v-btn--active {
  background-color: transparent !important;
}

</style>