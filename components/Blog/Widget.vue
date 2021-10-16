<template>
  <v-container fill-height>
    <div class="d-flex flex-row mx-auto">
      <v-card
        v-for="data in blogData"
        :key="data.id"
        flat
        class="mx-1 my-6"
        max-width="381"
        max-height="414"
      >
        <template slot="progress">
          <v-progress-linear
            color="deep-purple"
            height="10"
            indeterminate
          ></v-progress-linear>
        </template>

        <v-img height="200" :src="data.img"></v-img>

        <v-subheader
          :style="{ color: data.color, height: '32px' }"
          class="font_wght500 ft-14"
          >{{ data.category }}</v-subheader
        >

        <v-card-title class="font_wght700 ft-18 py-1">{{
          data.title
        }}</v-card-title>

        <v-card-text>
          <div class="font_wght400 ft-14">
            {{ data.info }}
          </div>
        </v-card-text>

        <v-card-actions>
          <v-img
            src="/img/eye.png"
            alt="views"
            max-height="16px"
            max-width="16px"
            class="mx-2 grey--text"
          />

          <small class="pb-1 font_wght400 ft-14 grey--text"
            >{{ data.views }} views</small
          >

          <v-spacer></v-spacer>

          <span class="font_wght400 ft-14 mx-2 grey--text">
            {{ data.datePublished }}
          </span>
        </v-card-actions>
      </v-card>
    </div>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      blogData: [
        {
          id: 1,
          img: "/banners/sample2.png",
          color: "#0085FF",
          category: "News",
          title: "Learn about Crust Network & Take a Short Quiz to Earn $CRU",
          info: "The popular video sharing app TikTok has introduced new restrictions that will prevent its users…",
          views: 120,
          datePublished: "4 phút trước",
        },
        {
          id: 2,
          img: "/banners/sample3.png",
          color: "#FF8A00",
          category: "Investment",
          title: "Learn about Crust Network & Take a Short Quiz to Earn $CRU",
          info: "The popular video sharing app TikTok has introduced new restrictions that will prevent its users…",
          views: 120,
          datePublished: "8 phút trước",
        },
        {
          id: 3,
          img: "/banners/sample1.png",
          color: "#088264",
          category: "Knowledge",
          title: "Learn about Crust Network & Take a Short Quiz to Earn $CRU",
          info: "The popular video sharing app TikTok has introduced new restrictions that will prevent its users…",
          views: 120,
          datePublished: "12 phút trước",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.mx-w1180 {
  max-width: 1200px;
}
</style>