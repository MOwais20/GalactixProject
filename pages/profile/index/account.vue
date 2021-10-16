<template>
  <div>
    <v-img
      src="/banners/banner-2.png"
      lazy-src="/banners/banner-2.png"
      max-width="860px"
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

    <v-card flat class="my-5" max-width="860px">
      <v-card-text class="pa-10 black--text">
        <v-row>
          <v-col>
            <div>
              <span class="ft-14 font-weight-medium pa-1">Referred User</span>
              <v-text-field
                placeholder="Referral ID"
                class="mt-2"
                style="width: 256px"
                filled
                hide-details
                dense
                append-outer-icon="mdi-plus primary rounded pa-1"
              ></v-text-field>
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
                    value="Pham"
                    width="300px"
                  ></v-text-field>
                </div>

                <div>
                  <span class="ft-14 font-weight-medium pa-1">Email</span>
                  <v-text-field
                    placeholder="Email"
                    class="mt-2"
                    value="vietanh@vutatech.vn"
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

                  <span class="px-2 error--text">Unverified</span>

                  <v-img
                    src="/icons/XCircle.png"
                    alt="unverified"
                    max-width="20px"
                    height="20px"
                  />
                </div>

                <div class="py-5 ft-14 font_wght400">
                  <span class="py-1">First name</span>
                  <v-text-field
                    filled
                    placeholder="First name"
                    value="Viet Anh"
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
export default {};
</script>

<style>
</style>