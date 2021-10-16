<template>
  <v-container class="mb-6">
    <v-row align="start" no-gutters style="height: 150px">
      <v-col>
        <div class="text-center">
          <h1 class="py-5 font-weight-black">Verification</h1>

          <div>
            <h4 class="subtitle-1 grey--text">
              Chúng tôi đã gửi mã xác minh của bạn đến số
            </h4>
            <span class="d-inline-block text-truncate font-weight-medium">
              vi********@vutatech.vn
            </span>
          </div>

          <div>
            <v-text-field
              placeholder="Nhập mã xác minh"
              class="verify_box mx-auto py-7 text-xs-center"
              filled
              rounded
              max-height="40px"
            >
            </v-text-field>
          </div>

          <v-card outlined width="177px" class="mx-auto">
            <v-card-text class="timer-area">
              Gửi lại trong <span class="font-weight-bold">00:30</span>
            </v-card-text>
          </v-card>

          <v-btn
            width="118px"
            height="42px"
            depressed
            color="primary"
            class="black--text text-capitalize font-weight-bold my-12"
            to="newPassword"
          >
            Continue
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  layout: "Blank",
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