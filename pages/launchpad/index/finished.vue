<template>
  <div>
      <LaunchpadListCard />
  </div>
</template>

<script>
export default {
  data() {
    return {
      params: 'ended'
    }
  },
  mounted() {
    this.ended()
  },
  methods: {
    ended() {
      this.$api.launchService
          .getListlaunch(this.params)
          .then((response) => {
            console.log("Endedddddddd", response)
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