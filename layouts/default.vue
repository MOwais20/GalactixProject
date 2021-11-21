<template>
  <v-app
    max-height="64px"
    :style="{ background: $vuetify.theme.dark ? '#181a20' : '#e5e5e5' }"
  >
    <Header />

    <v-main class="main-bg">
      <Nuxt />
    </v-main>

    <Footer />
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-apps",
          title: "Welcome",
          to: "/",
        },
        {
          icon: "mdi-chart-bubble",
          title: "Inspire",
          to: "/inspire",
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Binance",
    };
  },
  mounted() {
    const theme = localStorage.getItem("theme");
    if (theme == "true") {
      this.$vuetify.theme.dark = true;
      this.darkMode = true;
    } else {
      this.$vuetify.theme.dark = false;
      this.darkMode = false;
    }
  },
  computed: {
    darkMode: {
      get() {
        return this.$store.getters["global/darkMode"];
      },
      set(val) {
        this.$store.dispatch("global/toggleDarkMode", val);
      },
    },
  },
};
</script>

<style scoped>
/* .v-application {
  background-color: #e5e5e5;
} */

/* @media (prefers-color-scheme: dark) {
  .v-application {
    background: #181a20;
  }
} */
</style>