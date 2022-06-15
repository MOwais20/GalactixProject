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
              :items="languages"
              v-model="selectedLanguage"
              hide-details
              placeholder="Language"
              height="40px"
              item-text="name"
              item-value="value"
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
            <v-switch
              inset
              hide-details
              v-model="notification.activity"
              class="mt-0"
            >
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
          <div>
            <span class="ft-14">Trade</span>
          </div>

          <div>
            <v-switch
              inset
              hide-details
              v-model="notification.trade"
              class="mt-0"
            >
            </v-switch>
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
            <v-switch
              inset
              v-model="emailPush.activity"
              hide-details
              class="mt-0"
            >
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
          <div>
            <span class="ft-14">News</span>
          </div>

          <div>
            <v-switch v-model="emailPush.news" inset hide-details class="mt-0">
            </v-switch>
          </div>
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      selectedLanguage: null,
      notification: {
        activity: 0,
        trade: 0,
      },
      emailPush: {
        activity: 0,
        news: 0,
      },
      languages: [
        {
          name: "English",
          value: "en",
        },
        {
          name: "Vietnamese",
          value: "vi",
        },
      ],
    };
  },
  mounted() {
    this.loadSettings();
  },
  computed: {
    ...mapGetters("global", ["user"]),
    darkMode: {
      get() {
        return this.$store.getters["global/darkMode"];
      },
      set(val) {
        let obj = {
          type: "theme_mode",
          value: val ? "dark" : "light",
        };
        this.saveSettings(obj);
        this.$store.dispatch("global/toggleDarkMode", val);
      },
    },
    notify_activities() {
      return this.notification.activity;
    },
    notify_trade() {
      return this.notification.trade;
    },
    email_news() {
      return this.emailPush.news;
    },
    email_activity() {
      return this.emailPush.activity;
    },
  },
  watch: {
    email_news(val) {
      let obj = {
        type: "is_email_news",
        value: val ? 1 : 0,
      };
      this.saveSettings(obj);
    },
    email_activity(val) {
      let obj = {
        type: "is_email_activities",
        value: val ? 1 : 0,
      };
      this.saveSettings(obj);
    },
    notify_activities(val) {
      let obj = {
        type: "is_notify_activities",
        value: val ? 1 : 0,
      };
      this.saveSettings(obj);
    },
    notify_trade(val) {
      let obj = {
        type: "is_notify_trade",
        value: val ? 1 : 0,
      };
      this.saveSettings(obj);
    },
    darkMode(val) {
      this.toggleDarkMode(val);
    },
  },
  methods: {
    saveSettings(obj) {
      this.$api.userService.profileSettings(obj).then((response) => {
        if (response.data) {
          // // notifications
          // this.notification.activity = response.data.is_notify_activities;
          // this.notification.trade = response.data.is_notify_trade;

          // // Email push
          // this.emailPush.activity = response.data.is_email_activities;
          // this.emailPush.news = response.data.is_email_news;

          this.$store.commit("global/setUser", response.data);
        }
      });
    },
    loadSettings() {
      if (this.user) {
        this.selectedLanguage = this.languages.find(
          (el) => el.value == this.user.language
        );
        this.darkMode = this.user.theme_mode == 'dark' ? true : false;

        // notifications
        this.notification.activity = this.user.is_notify_activities;
        this.notification.trade = this.user.is_notify_trade;

        // Email push
        this.emailPush.activity = this.user.is_email_activities;
        this.emailPush.news = this.user.is_email_news;
      }
    },
    toggleDarkMode(val) {
      this.$vuetify.theme.dark = val;
      localStorage.setItem("theme", this.$vuetify.theme.dark.toString());
    },
  },
};
</script>

<style>
</style>