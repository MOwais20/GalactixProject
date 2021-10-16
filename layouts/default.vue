<template>
  <v-app max-height="64px">
    
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
};
</script>

<style scoped>
.v-application {
  background-color: #E5E5E5;
}
</style>