<template>
  <v-app :style="{ background: $vuetify.theme.dark ? '#181a20' : '#e5e5e5' }">
    <v-main>
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {
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

<style>
</style>