<template>
  <v-card flat height="138" class="mb-3" v-if="$vuetify.breakpoint.lgAndUp">
    <v-card-text class="ml-10 pr-0" style="width: inherit">
      <div class="d-flex flex-row align-center" no-gutters>
        <div>
          <v-img
            src="/img/Union.png"
            lazy-src="/img/Union.png"
            height="34px"
            max-width="224px"
          >
            <span class="arrow-text ft-12 font_wght600">{{
              unionText.first.text
            }}</span>
          </v-img>
        </div>

        <div class="line"></div>
        <div>
          <v-img
            src="/img/Union.png"
            style="right: 23px"
            height="34px"
            max-width="224px"
          >
            <span class="arrow-text ft-12 font_wght600">{{
              unionText.second.text
            }}</span>
          </v-img>
        </div>

        <div class="line" style="right: 30px"></div>
        <div>
          <v-img
            src="/img/Union.png"
            style="right: 50px"
            height="34px"
            max-width="224px"
          >
            <span class="arrow-text ft-12 font_wght600">{{
              unionText.third.text
            }}</span>
          </v-img>
        </div>

        <div class="line" style="right: 65px"></div>
        <div>
          <v-img
            src="/img/Union.png"
            style="right: 85px"
            height="34px"
            max-width="224px"
          >
            <span class="arrow-text ft-12 font_wght600">{{
              unionText.fourth.text
            }}</span>
           
          </v-img>
        </div>
      </div>

      <div class="d-flex flex-row justify-space-around align-center mr-10 black--text">
        <div :class="$vuetify.breakpoint.lgAndUp ? 'mr-15 pr-15' : ''" style="max-width: 199px">
          <p>
            {{ unionText.first.subtitle }}
          </p>
        </div>

        <div style="max-width: 199px">
          <p>
            {{ unionText.second.subtitle }}
          </p>
        </div>

        <div style="max-width: 199px;">
          <p>
            {{ unionText.third.subtitle }}
          </p>
        </div>

        <div style="max-width: 199px;">
          <p>
            {{ unionText.fourth.subtitle }}
          </p>
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: ["unionText"],
};
</script>

<style lang="scss" scoped>
.line {
  position: relative;
  width: 350px;
  height: 0px;
  right: 5px;

  /* Primary */

  border: 4px solid #ffc407;
}

.arrow-text {
  justify-content: center;
  display: flex;
  padding-top: 5px;
}

.union-left {
  right: 20px;
}

p {
  font-family: IBM Plex Sans;
  font-size: 12px;
  font-style: normal;
  font-weight: bold;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: center;
  padding: 10px;
  margin-top: 10px;
}
</style>