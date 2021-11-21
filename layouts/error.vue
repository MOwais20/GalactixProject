<template>
  <v-app>
    <h1 v-if="error.statusCode === 404">
      {{ pageNotFound }}
    </h1>
    <h1 v-else>
      {{ otherError }}
    </h1>
    <NuxtLink to="/"> Home page </NuxtLink>
  </v-app>
</template>

<script>
export default {
  layout: "empty",
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: "404 Not Found",
      otherError: "An error occurred",
    };
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError;
    return {
      title,
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
h1 {
  font-size: 20px;
}
</style>
