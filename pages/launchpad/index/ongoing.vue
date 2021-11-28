<template>
  <div>
      <LaunchpadListCard />
  </div>
</template>

<script>
export default {
  data() {
    return {
      params: 'launching',
    }
  },
  mounted() {
    this.onGoing()
  },
  methods: {
    onGoing() {
      this.$api.launchService
          .getListlaunch(this.params)
          .then((response) => {
            console.log("Ongoingggg", response)
            return response;
          })
          .catch((error) => {
            throw error;
          });
    }
  }
}
</script>

<style>

</style>