<template>
  <v-dialog
    persistent
    overlay-color="transparent"
    v-model="twofaDialog"
    width="440"
    fill-height
  >
    <v-card outlined >
      <v-card-title>
        Enter TWOFA Code
        <v-spacer></v-spacer>
        <v-btn @click="close" icon><v-icon>mdi-close</v-icon></v-btn>
      </v-card-title>
      <v-card-text class="pa-7 text-center">
        <v-img
          height="auto"
          width="270"
          src="/img/authImg.png"
          lazy-src="/img/authImg.png"
          class="mx-auto"
          alt="authImg"
        ></v-img>


        <v-text-field
          label="Enter code"
          class="mt-3"
          dense
          filled
          v-model="code"
        >
        </v-text-field>

        <v-btn
          height="42px"
          depressed
          class="px-6"
          color="primary"
          @click="submit"
        >
          Submit
        </v-btn>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  props: ["twofa"],
  data() {
    return {
      code: null,
    };
  },
  watch: {
    user(val) {
      if (val && val.google2fa_secret) {
        this.code = val.google2fa_secret;
      }
    },
  },
  computed: {
    ...mapGetters("auth", ["twofaDialog"]),
    ...mapGetters("global", ["user"]),
  },
  methods: {
    ...mapActions("auth", ["initTwofaDialog"]),
    close() {
      this.initTwofaDialog(false);
      this.code = null;
    },
    submit() {
      this.$api.userService
        .twofa({
          twofa_code: this.code,
        })
        .then((response) => {
          console.log("Response", response);
          if (response && response.status && response.status == 200) {
            this.initTwofaDialog(false);
          }
        });
    },
  },
};
</script>

<style>
</style>