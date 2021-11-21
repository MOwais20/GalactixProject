<template>
  <v-dialog persistent v-model="modal" width="267">
    <v-card flat width="267" height="228">
      <v-card-text class="pa-5">
        <div class="d-flex flex-column align-center pt-2">
          <v-img
            class="pointer mx-2"
            width="49px"
            height="49px"
            src="/icons/WarningOctagon.png"
          />

          <h3 class="my-2" :class="$vuetify.theme.dark ? 'white--text' : 'black--text'">Your balance is not enough</h3>
        </div>
      </v-card-text>

      <v-card-actions>
        <v-row
          dense
          :class="$vuetify.theme.dark ? 'white--text' : 'black--text'"
        >
          <v-col align="end">
            <v-btn
              @click="$emit('close')"
              text
              class="outlined my-3"
              width="86px"
            >
              Cancel
            </v-btn>
          </v-col>

          <v-col align="start">
            <v-btn depressed class="my-3" color="primary" width="86px">
              Recharge
            </v-btn>
          </v-col>
        </v-row>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ["modal"],
};
</script>

<style>
</style>