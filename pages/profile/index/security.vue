<template>
  <v-container fluid class="pa-0">
    <v-card flat>
      <v-card-text
        :class="$vuetify.theme.dark ? 'white--text' : 'black--text'"
        class="pa-5"
      >
        <!-- <v-btn text class="outlined"> Change password </v-btn> -->
        <AuthChangePassDialog />

        <h1
          class="ft-18 py-5"
          :class="$vuetify.theme.dark ? 'white--text' : 'black--text'"
        >
          Two - Factor Verification (2FA)
        </h1>
        <div
          class="
            d-flex
            flex-row
            justify-space-between
            align-center
            flex-wrap
            py-5
          "
        >
          <div>
            <span id="googleAuth" class="ft-14">Google Authentication</span>
          </div>

          <div>
            <v-switch v-model="googleAuth" inset hide-details class="mt-0">
            </v-switch>
          </div>
        </div>
        <v-divider class="mt-2"></v-divider>

        <div
          class="
            d-flex
            flex-row
            justify-space-between
            align-center
            flex-wrap
            py-5
          "
        >
          <div
            class="
              d-flex
              flex-row
              justify-space-between
              align-center
              flex-wrap
              py-5
            "
          >
            <span style="width: 200px" class="ft-14"
              >Verify by phone number</span
            >

            <v-btn
              v-if="$vuetify.breakpoint.smAndUp"
              height="40px"
              text
              outlined
              color="primary"
              class="mx-2 px-2"
            >
              <v-icon medium>mdi-plus</v-icon>
              <span class="font-weight-light">Add phone number</span>
            </v-btn>
          </div>

          <div>
            <v-switch v-model="verifyPhone" inset hide-details class="mt-0">
            </v-switch>
          </div>

          <!-- For Mobile View -->
          <div v-if="!$vuetify.breakpoint.smAndUp">
            <v-btn
              height="40px"
              text
              outlined
              color="primary"
              class="mx-2 px-2"
            >
              <v-icon medium>mdi-plus</v-icon>
              <span class="font-weight-light">Add phone number</span>
            </v-btn>
          </div>
        </div>
        <v-divider class="mt-2"></v-divider>

        <div
          class="
            d-flex
            flex-row
            justify-space-between
            align-center
            flex-wrap
            py-5
          "
        >
          <div class="d-flex flex-row flex-wrap align-center">
            <span style="width: 200px" class="ft-14">Verify by email</span>

            <v-text-field
              v-if="$vuetify.breakpoint.smAndUp"
              placeholder="Email"
              class="mx-2"
              value="vietanh@vutatech.vn"
              filled
              hide-details
              dense
              style="max-width: 250px"
              height="40px"
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

          <div>
            <v-switch v-model="verifyEmail" inset hide-details class="mt-0">
            </v-switch>
          </div>

          <!-- For Mobile View -->
          <div class="mt-3" v-if="!$vuetify.breakpoint.smAndUp">
            <v-text-field
              placeholder="Email"
              class="mx-2"
              value="vietanh@vutatech.vn"
              filled
              hide-details
              dense
              style="max-width: 250px"
              height="40px"
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
        </div>
      </v-card-text>
    </v-card>

    <v-card flat class="my-2">
      <v-card-text class="pb-0">
        <v-row
          justify="space-between"
          style="max-width: 1180px"
          class="mx-auto py-2 align-center"
        >
          <h3 class="font_wght700 ft-18">Log in activity</h3>

          <v-btn plain>
            <span
              class="ft-14 px-1"
              :class="$vuetify.theme.dark ? 'white--text' : 'black--text'"
              >View all</span
            >
            <!-- Caret Right SVG -->
            <svg
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.00391 3L11.0039 8L6.00391 13"
                :stroke="$vuetify.theme.dark ? 'white' : 'black'"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </v-btn>
        </v-row>

        <v-data-table
          :headers="loginActivityHeaders"
          :items="activity"
          disable-sort
          hide-default-footer
        >
          <template v-slot:item="{ item }">
            <tr>
              <td class="text-left">
                {{ item.time }}
              </td>

              <td class="text-right">
                {{ item.ipAddress }}
              </td>
              <td class="text-right">
                {{ item.location }}
              </td>
              <td class="text-right">
                {{ item.isp }}
              </td>
              <td class="text-right">
                {{ item.browser }}
              </td>
              <td class="text-right">
                {{ item.device }}
              </td>
            </tr>
          </template>
        </v-data-table>
      </v-card-text>
      <v-card-actions>
        <v-row no-gutters justify="end">
          <v-btn
            height="40px"
            text
            class="px-4 py-3 outlined"
            @click="deactivateAcc"
          >
            Deactivate the account
          </v-btn>
        </v-row>
      </v-card-actions>
    </v-card>

    <v-dialog v-model="verifyDialog" width="480">
      <AuthVerifyAccDetails
        :verifyPhone="verifyPhone"
        @close="closeVerifyDialog"
      />
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      googleAuth: false,
      verifyEmail: false,
      verifyPhone: false,
      verifyDialog: false,
      activity: [
        {
          time: "10:22:16 09.08.2021",
          ipAddress: "14.186.192.9",
          location: "Ho Chi Minh City, Viet Nam",
          isp: "M247 Ltd",
          browser: "Edge",
          device: "Dell Vostro",
        },
        {
          time: "10:22:16 09.08.2021",
          ipAddress: "14.186.192.9",
          location: "Ho Chi Minh City, Viet Nam",
          isp: "M247 Ltd",
          browser: "Edge",
          device: "Dell Vostro",
        },
        {
          time: "10:22:16 09.08.2021",
          ipAddress: "14.186.192.9",
          location: "Ho Chi Minh City, Viet Nam",
          isp: "M247 Ltd",
          browser: "Edge",
          device: "Dell Vostro",
        },
        {
          time: "10:22:16 09.08.2021",
          ipAddress: "14.186.192.9",
          location: "Ho Chi Minh City, Viet Nam",
          isp: "M247 Ltd",
          browser: "Edge",
          device: "Dell Vostro",
        },
        {
          time: "10:22:16 09.08.2021",
          ipAddress: "14.186.192.9",
          location: "Ho Chi Minh City, Viet Nam",
          isp: "M247 Ltd",
          browser: "Edge",
          device: "Dell Vostro",
        },
        {
          time: "10:22:16 09.08.2021",
          ipAddress: "14.186.192.9",
          location: "Ho Chi Minh City, Viet Nam",
          isp: "M247 Ltd",
          browser: "Edge",
          device: "Dell Vostro",
        },
      ],
      loginActivityHeaders: [
        { text: "Time", align: "left", value: "time" },
        { text: "IP Address", align: "right", value: "ipAdress" },
        { text: "Location", align: "right", value: "location" },
        { text: "ISP", align: "right", value: "isp" },
        { text: "Browser", align: "right", value: "browser" },
        { text: "Device", align: "right", value: "device" },
      ],
    };
  },
  watch: {
    verifyPhone(val) {
      if (val) this.verifyDialog = true;
    },
    verifyEmail(val) {
      if (val) this.verifyDialog = true;
    },
  },
  methods: {
    closeVerifyDialog() {
      // closing dialog box.
      this.verifyDialog = false;

      this.verifyPhone = false;
      this.verifyEmail = false;
    },
    deactivateAcc() {},
  },
};
</script>

<style>
</style>