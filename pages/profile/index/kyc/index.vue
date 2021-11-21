<template>
  <v-container fluid class="pa-0">
    <v-row no-gutters justify="center">
      <v-col align-self="center">
        <v-card flat min-height="860">
          <div>
            <v-stepper color="secondary" flat v-model="e1">
              <v-stepper-header class="ft-14">
                <v-divider></v-divider>

                <v-stepper-step step="1" :complete="e1 > 1">
                  <span>Personal information</span>
                </v-stepper-step>

                <v-divider></v-divider>

                <v-stepper-step step="2" :complete="e1 > 2">
                  <span>Identity verification</span>
                </v-stepper-step>

                <v-divider></v-divider>

                <v-stepper-step step="3" :complete="e1 > 3">
                  <span>Complete</span>
                </v-stepper-step>

                <v-divider></v-divider>
              </v-stepper-header>
              <v-divider></v-divider>

              <v-stepper-items>
                <v-stepper-content step="1">
                  <v-container fill-height style="max-width: 300px">
                    <div>
                      <v-select
                        :items="[]"
                        menu-props="auto"
                        placeholder="Nationality"
                        single-line
                        outlined
                      >
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

                      <div class="d-flex flex-row flex-wrap align-self-center">
                        <v-radio-group row class="mx-auto">
                          <v-radio
                            label="Identity card"
                            value="radio-1"
                          ></v-radio>
                          <v-radio
                            label="Passport"
                            value="radio-2"
                            class=""
                          ></v-radio>
                        </v-radio-group>
                      </div>

                      <div>
                        <h5>Last Name</h5>
                        <v-text-field
                          class="mt-2"
                          placeholder="Last name"
                          filled
                          value="Pham"
                        ></v-text-field>
                      </div>

                      <div>
                        <h5>First Name</h5>
                        <v-text-field
                          class="mt-2"
                          placeholder="First Name"
                          filled
                          value="Viet Anh"
                        ></v-text-field>
                      </div>

                      <div>
                        <h5>Day of birth</h5>
                        <v-menu
                          ref="menu1"
                          v-model="menu1"
                          :close-on-content-click="false"
                          transition="scale-transition"
                          offset-y
                          max-width="290px"
                          min-width="auto"
                        >
                          <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                              v-model="dateFormatted"
                              label=""
                              persistent-hint
                              prepend-icon="mdi-calendar"
                              v-bind="attrs"
                              @blur="date = parseDate(dateFormatted)"
                              v-on="on"
                            ></v-text-field>
                          </template>
                          <v-date-picker
                            v-model="date"
                            no-title
                            class="outlined"
                            @input="menu1 = false"
                          ></v-date-picker>
                        </v-menu>
                      </div>

                      <div>
                        <h5>Address</h5>
                        <v-text-field
                          class="mt-2"
                          placeholder="Enter address"
                          filled
                        ></v-text-field>
                      </div>

                      <div>
                        <h5>Province / City</h5>
                        <v-text-field
                          class="mt-2"
                          placeholder="Enter the name of the province/city"
                          filled
                        ></v-text-field>
                      </div>

                      <div class="d-flex flex-row justify-center">
                        <v-btn
                          depressed
                          color="primary"
                          height="42"
                          class="ft-14 py-3 px-8"
                          @click="e1 = 2"
                        >
                          Continue
                        </v-btn>
                      </div>
                    </div>
                  </v-container>
                </v-stepper-content>

                <v-stepper-content step="2">
                  <v-card>
                    <v-card-text>
                      <v-row no-gutters justify="center">
                        <v-col>
                          <v-img
                            src="/img/IdCard.png"
                            lazy-src="/img/IdCard.png"
                            height="155.69px"
                            width="252px"
                            alt="idCard"
                            class="mx-auto"
                          />
                        </v-col>

                        <v-col class="font_wght400">
                          <div class="d-flex">
                            <v-icon size="16.5" class="mx-2" color="success"
                              >mdi-checkbox-marked-circle</v-icon
                            >

                            <span class="my-1">Granted by the government</span>
                          </div>
                          <div class="d-flex">
                            <v-icon size="16.5" class="mx-2" color="success"
                              >mdi-checkbox-marked-circle</v-icon
                            >

                            <span class="my-1"
                              >Original, full-sized, unedited</span
                            >
                          </div>
                          <div class="d-flex">
                            <v-icon size="16.5" class="mx-2" color="success"
                              >mdi-checkbox-marked-circle</v-icon
                            >

                            <span class="my-1"
                              >Set of papers on a monochrome background</span
                            >
                          </div>
                          <div class="d-flex">
                            <v-icon size="16.5" class="mx-2" color="success"
                              >mdi-checkbox-marked-circle</v-icon
                            >

                            <span class="my-1"
                              >Colored, well-lit, readable images</span
                            >
                          </div>
                          <div class="d-flex">
                            <v-icon size="16.5" class="mx-2" color="error"
                              >mdi-close-circle</v-icon
                            >
                            <span class="my-1"
                              >Black and white images are not accepted</span
                            >
                          </div>
                          <div class="d-flex">
                            <v-icon size="16.5" class="mx-2" color="error"
                              >mdi-close-circle</v-icon
                            >
                            <span class="my-1">
                              Modified or expired documents are not accepted
                            </span>
                          </div>
                        </v-col>
                      </v-row>

                      <v-row no-gutters justify="center" class="font_wght400">
                        <v-col align="center">
                          <v-img
                            width="32px"
                            height="32px"
                            src="/img/PlaceHolderImage.png"
                            class="mx-auto"
                            style="top: 110px; z-index: 1"
                          />
                          <v-file-input
                            v-model="file1"
                            color="primary"
                            multiple
                            prepend-icon=""
                            filled
                            height="179"
                            style="max-width: 300px"
                          >
                          </v-file-input>

                          <span class="content_font"
                            >Upload photo of the front of ID card</span
                          >
                        </v-col>

                        <v-col align="center">
                          <v-img
                            width="32px"
                            height="32px"
                            src="/img/PlaceHolderImage.png"
                            class="mx-auto"
                            style="top: 110px; z-index: 1"
                          />
                          <v-file-input
                            v-model="file2"
                            color="primary"
                            multiple
                            prepend-icon=""
                            filled
                            height="179"
                            style="max-width: 300px"
                          >
                          </v-file-input>
                          <span class="content_font"
                            >Upload photo of the back of ID card</span
                          >
                        </v-col>
                      </v-row>

                      <div class="d-flex flex-row justify-center my-10"></div>
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn
                        depressed
                        color="primary"
                        height="42"
                        class="ft-14 py-3 px-8"
                        @click="(e1 = 3), activateAccount()"
                      >
                        Continue
                      </v-btn>
                      <v-spacer></v-spacer>
                    </v-card-actions>
                  </v-card>
                </v-stepper-content>

                <v-stepper-content :value="false" step="3">
                  <v-container>
                    <div class="my-15">
                      <v-img
                        src="/img/Gears.png"
                        max-width="136px"
                        height="136px"
                        alt="processing"
                        lazy-src="/img/Gears.png"
                        class="mx-auto"
                      >
                      </v-img>

                      <div class="mx-auto py-5 text-center">
                        <h5 class="ft-16">
                          Your application is being processed...<br />
                          Please wait 3-5 working days. Thank you !
                        </h5>
                      </div>
                    </div>
                  </v-container>
                </v-stepper-content>
              </v-stepper-items>
            </v-stepper>
          </div>

          <v-container v-if="e1 > 3">
            <div class="my-15">
              <v-img
                src="/icons/ShieldCheckSuccess.png"
                max-width="198px"
                height="198px"
                alt="accountVerified"
                lazy-src="/icons/ShieldCheckSuccess.png"
                class="mx-auto"
              >
              </v-img>

              <!-- <v-icon color="success" size="198px">mdi-shield-check-outline</v-icon> -->

              <div class="mx-auto py-5 text-center">
                <h3 class="ft-30 font_wght600">
                  Your account has been verified
                </h3>
              </div>

              <div class="d-flex flex-row justify-center">
                <v-btn
                  height="42"
                  class="ft-14 py-3 px-8"
                  depressed
                  color="primary"
                  to="/trade"
                >
                  Trade now
                </v-btn>
              </div>
            </div>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      kycComplete: false,
      file1: [],
      file2: [],
      e1: 1,
      date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      dateFormatted: new Date(
        Date.now() - new Date().getTimezoneOffset() * 60000
      ),

      menu1: false,
      menu2: false,
    };
  },

  computed: {
    computedDateFormatted() {
      return this.formatDate(this.date);
    },
  },

  watch: {
    date(val) {
      this.dateFormatted = this.formatDate(this.date);
    },
  },

  methods: {
    activateAccount() {
      setTimeout(() => {
        this.e1 = 4;
      }, 3000);
    },
    formatDate(date) {
      if (!date) return null;

      const [year, month, day] = date.split("-");
      return `${month}/${day}/${year}`;
    },
    parseDate(date) {
      if (!date) return null;

      const [month, day, year] = date.split("/");
      return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.content_font {
  color: #c99400;
}
</style>