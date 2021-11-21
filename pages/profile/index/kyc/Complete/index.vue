<template>
  <v-container>
    <v-row>
      <v-col cols="4" align="center">
        <v-card flat width="420" min-height="860">
          <v-card-text class="black--text mx-auto primary">
            <v-col align="center">
              <v-avatar size="150px" class="ma-3">
                <img
                  src="https://cdn.vuetifyjs.com/images/john.jpg"
                  alt="Profile_Picture"
                  height="150px"
                  width="150px"
                />
              </v-avatar>

              <div class="font-weight-bold pa-2 ft-20">Pham Viet Anh</div>

              <div class="ft-14 font-weight-medium pa-1">
                Ref ID: #9849167613
              </div>
            </v-col>
          </v-card-text>

          <v-card-text>
            <div class="d-flex flex-row justify-center">
              <v-avatar class="outlined mx-3">
                <v-icon> mdi-email-outline </v-icon>
              </v-avatar>

              <v-avatar class="outlined mx-3">
                <v-icon> mdi-phone-outline </v-icon>
              </v-avatar>

              <v-avatar class="outlined mx-3">
                <span class="font-wght400 ft-16">2FA</span>
              </v-avatar>
            </div>
          </v-card-text>

          <v-card-text class="ml-4">
            <div class="d-flex flex-row justify-space-between">
              <div class="d-flex flex-column align-start">
                <v-btn text class="ma-1">
                  <v-icon left color="grey"> mdi-account </v-icon>
                  Account
                </v-btn>

                <v-btn text class="ma-1">
                  <v-icon left color="primary"> mdi-pencil </v-icon>
                  KYC
                </v-btn>

                <v-btn text class="ma-1">
                  <v-icon left color="grey"> mdi-pencil </v-icon>
                  Security
                </v-btn>

                <v-btn text class="ma-1">
                  <v-icon left color="grey"> mdi-pencil </v-icon>
                  Setting
                </v-btn>

                <v-btn text class="ma-1">
                  <v-icon left color="grey"> mdi-pencil </v-icon>
                  Referral
                </v-btn>
              </div>
            </div>
          </v-card-text>
          <v-card-text class="ml-4 mt-16">
            <div class="d-flex flex-row justify-space-between mt-16">
              <div class="d-flex flex-column align-start">
                <v-btn text class="mt-8">
                  <img src="/img/SignOut.png" />
                  <span class="grey--text">Log out</span>
                </v-btn>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="8">
        <v-card flat width="860" min-height="860">
          <v-stepper alt-labels>
            <v-stepper-header>
              <v-divider></v-divider>

              <v-stepper-step step="1" color="success"
                ><span style="font-size: 13px"
                  >Personal information</span
                ></v-stepper-step
              >

              <v-divider></v-divider>

              <v-stepper-step step="2">
                <span style="font-size: 13px">Identity verification</span>
              </v-stepper-step>

              <v-divider></v-divider>

              <v-stepper-step step="3">
                <span style="font-size: 13px">Complete</span>
              </v-stepper-step>

              <v-divider></v-divider>
            </v-stepper-header>
            <!-- <hr class="p-2"/> -->
          </v-stepper>
          <div class="parent-div">
            <div class="child-div">
              <img src="/img/Settings.png" width="136" height="136" />
              <p class="--text">Your application is being processed...</p>
              <p class="fs">Please wait 3-5 working days. Thank you !</p>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style scoped>
.parent-div {
  text-align: center;
  align-items: center;
}
.parent-div .child-div {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%); 
}
</style>