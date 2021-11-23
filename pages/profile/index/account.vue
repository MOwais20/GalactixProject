<template>
  <div>
    <v-img
      src="/banners/banner-2.png"
      lazy-src="/banners/banner-2.png"
      min-width="auto"
      height="120"
      alt="kyc-banner"
    >
      <v-row dense no-gutters class="fill-height">
        <v-col align="center" align-self="center">
          <h3 class="white--text">Complete KYC to start trading</h3>
        </v-col>

        <v-col align="center" align-self="center">
          <v-btn> Verify Account </v-btn>
        </v-col>
      </v-row>
    </v-img>

    <v-card flat class="my-5" width="auto">
      <v-card-text
        class="pa-10"
        :class="$vuetify.theme.dark ? 'white--text' : 'black--text'"
      >
        <v-row>
          <v-col>
            <div>
              <span class="ft-14 font-weight-medium pa-1">Referred User</span>
              <v-text-field
                placeholder="Referral ID"
                class="mt-2"
                style="width: 256px"
                filled
                v-model="refID"
                hide-details
                dense
                append-outer-icon="mdi-plus primary rounded pa-1"
                @click:append-outer="addReferralId = true"
                v-if="!addReferralId"
              ></v-text-field>

              <div class="d-flex flex-row" v-else>
                <v-card flat color="#F4F4F4" min-width="300">
                  <v-card-text class="pa-2">
                    <div class="d-flex flex-row flex-wrap">
                      <v-avatar tile class="mr-3">
                        <v-img
                          class="pointer mx-2"
                          width="48px"
                          height="48px"
                          src="/img/referralId.png"
                          @click="addReferralId = false"
                        >
                        </v-img>
                      </v-avatar>

                      <div class="d-flex flex-column align-self-center">
                        <h4 class="ft-14 black--text">Win Win</h4>

                        <span class="caption">Ref ID: #312313</span>
                      </div>
                    </div>
                  </v-card-text>
                </v-card>
              </div>
            </div>

            <v-row dense class="my-10">
              <v-col class="px-3">
                <span class="ft-14 font-weight-medium pa-1"
                  >Join date
                  <span class="px-2 grey--text caption">21.09.2021</span></span
                >

                <div class="py-5 ft-14 font_wght400">
                  <span class="py-1">Last name</span>
                  <v-text-field
                    filled
                    placeholder="Last name"
                    v-model="lastName"
                    width="300px"
                  ></v-text-field>
                </div>

                <div>
                  <span class="ft-14 font-weight-medium pa-1">Email</span>
                  <v-text-field
                    placeholder="Email"
                    class="mt-2"
                    v-model="userEmail"
                    filled
                    hide-details
                    dense
                    append-outer-icon="pa-1"
                  >
                    <template v-slot:append-outer>
                      <v-img
                        src="/icons/CheckCircle.png"
                        alt="verified"
                        max-width="20px"
                        height="20px"
                      />

                      <!-- <v-img
                        src="/icons/XCircle.png"
                        alt="unverified"
                        max-width="20px"
                        height="20px"
                      /> -->
                    </template>
                  </v-text-field>
                </div>
              </v-col>

              <v-col class="ft-14 font-weight-medium px-3">
                <div class="d-flex flex-row align-center justify-start">
                  <span> Account type:</span>

                  <span
                    class="px-2"
                    :class="accountVerified ? 'success--text' : 'error--text'"
                  >
                    {{ accountVerified ? "Verified" : "Unverified" }}
                  </span>

                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 0.25C8.07164 0.25 6.18657 0.821828 4.58319 1.89317C2.97982 2.96451 1.73013 4.48726 0.992179 6.26884C0.254225 8.05042 0.061142 10.0108 0.437348 11.9021C0.813554 13.7934 1.74215 15.5307 3.10571 16.8943C4.46928 18.2579 6.20656 19.1865 8.09787 19.5627C9.98919 19.9389 11.9496 19.7458 13.7312 19.0078C15.5127 18.2699 17.0355 17.0202 18.1068 15.4168C19.1782 13.8134 19.75 11.9284 19.75 10C19.747 7.41506 18.7188 4.93684 16.891 3.10901C15.0632 1.28118 12.5849 0.252988 10 0.25ZM14.6436 8.29272L9.14307 13.5427C9.00322 13.6758 8.81756 13.75 8.62452 13.75C8.43147 13.75 8.24582 13.6758 8.10596 13.5427L5.35645 10.9177C5.2128 10.7801 5.12965 10.5911 5.12524 10.3923C5.12084 10.1934 5.19555 10.0009 5.33297 9.8571C5.47038 9.71328 5.65927 9.62989 5.85813 9.62523C6.05699 9.62058 6.24956 9.69504 6.39356 9.83228L8.62452 11.9629L13.6064 7.20728C13.7504 7.07004 13.943 6.99558 14.1419 7.00023C14.3407 7.00489 14.5296 7.08828 14.667 7.2321C14.8045 7.37592 14.8792 7.56841 14.8748 7.76727C14.8704 7.96614 14.7872 8.15513 14.6436 8.29272Z"
                      :fill="accountVerified ? '#00E392' : '#FF315A'"
                    />
                  </svg>
                </div>

                <div class="py-5 ft-14 font_wght400">
                  <span class="py-1">First name</span>
                  <v-text-field
                    filled
                    placeholder="First name"
                    v-model="firstName"
                  ></v-text-field>
                </div>

                <div>
                  <span class="ft-14 font-weight-medium pa-1"
                    >Phone number</span
                  >
                  <v-spacer class="my-2" />
                  <v-btn text outlined color="primary">
                    <v-icon medium>mdi-plus</v-icon>
                    <span class="font-weight-light">Add phone number</span>
                  </v-btn>
                </div>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      profileData: {
        avatar: null,
        email: "",
        first_name: null,
        google2fa_enable: 0,
        google2fa_secret: "",
        is_actived: 0,
        is_banned: 0,
        is_deposit: 0,
        is_email_activities: 0,
        is_email_news: 0,
        is_kyc: 0,
        is_notify_activities: 0,
        is_notify_trade: 0,
        is_trade: 0,
        is_verify_login_email: 0,
        is_verify_login_phone: 0,
        is_withdraw: 0,
        language: "en",
        last_name: null,
        sponsor_id: "",
        theme_mode: "",
        _id: "",
      },
      addReferralId: false,
      userEmail: null,
      firstName: "",
      lastName: "",
      refID: null,
      accountVerified: false,
    };
  },
  mounted() {
    this.getAccountDetails();
  },
  methods: {
    getAccountDetails() {
      this.$api.userService
        .getUserProfile()
        .then((response) => {
          this.profileData = response.data;
          console.log("response", response);
          if (response && response.data) {
            this.userEmail = response.data.email;
            this.firstName = response.data.first_name;
            this.refID = response.data.sponsor_id;
            this.accountVerified = response.data.is_actived;
          }
        })
        .catch((error) => {
          throw error;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>