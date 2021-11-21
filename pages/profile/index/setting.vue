<template>
  <div>
    <v-card>
      <v-card-text
        :class="$vuetify.theme.dark ? 'white--text' : 'black--text'"
        class="pa-5"
      >
        <h3 class="ft-18 font-weight-bold pt-3">Interface</h3>
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
            <span class="ft-14">Language</span>
          </div>

          <div>
            <v-select
              :items="['English', 'French', 'Spanish']"
              v-model="selectedLanguage"
              hide-details
              height="40px"
              outlined
              style="max-width: 200px"
            ></v-select>
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
          <div>
            <span class="ft-14">Dark Mode</span>
          </div>

          <div>
            <v-switch v-model="darkMode" inset hide-details class="mt-0">
            </v-switch>
          </div>
        </div>
        <v-divider class="mt-2"></v-divider>

        <!-- 2nd -->
        <h3 class="ft-18 font-weight-bold py-5">Notification</h3>
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
            <span class="ft-14">Activity</span>
          </div>

          <div>
            <v-switch inset hide-details class="mt-0"> </v-switch>
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
          <div>
            <span class="ft-14">Trade</span>
          </div>

          <div>
            <v-switch inset hide-details class="mt-0"> </v-switch>
          </div>
        </div>
        <v-divider class="mt-2"></v-divider>

        <!-- 3rd -->
        <h3 class="ft-18 font-weight-bold py-5">Email push</h3>
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
            <span class="ft-14">Activity</span>
          </div>

          <div>
            <v-switch inset hide-details class="mt-0"> </v-switch>
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
          <div>
            <span class="ft-14">News</span>
          </div>

          <div>
            <v-switch inset hide-details class="mt-0"> </v-switch>
          </div>
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedLanguage: "English",
    };
  },
  computed: {
    darkMode: {
      get() {
        return this.$store.getters['global/darkMode'];
      },
      set(val) {
        this.$store.dispatch('global/toggleDarkMode', val);
      }
    }
  },
  watch: {
    darkMode(val) {
      this.toggleDarkMode(val);
    },
  },
  methods: {
    toggleDarkMode(val) {
      this.$vuetify.theme.dark = val;
      localStorage.setItem("theme", this.$vuetify.theme.dark.toString());
    },
  },
};
</script>

<style>
</style>