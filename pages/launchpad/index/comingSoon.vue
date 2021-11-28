<template>
  <div>
      <LaunchpadListCard />
  </div>
</template>

<script>
export default {
  data() {
    return {
      params: 'upcoming',
    }
  },
  mounted() {
    this.upComing()
  },
  methods: {
    upComing() {
      this.$api.launchService
          .getListlaunch(this.params)
          .then((response) => {
            console.log("upcominggggg", response)
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