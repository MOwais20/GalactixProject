<template>
  <v-container>
    <h1 class="font_wght700 ft-40">Latest</h1>

    <v-row justify="center">
      <v-col align-self="center">
        <v-card
          class="pointer"
          @click="$router.push('/blog/detail')"
          flat
          height="580px"
          :width="$vuetify.breakpoint.width <= 1024 ? '100%' : '580px'"
        >
          <v-img height="580px" src="/banners/blog.png">
            <div class="cardbody">
              <v-card-title class="ft-16 pb-0 white--text">News</v-card-title>
              <div class="pa-5 pt-0">
                <span
                  style="line-height: 39px"
                  class="ft-30 font_wght700 white--text"
                >
                  Vietnam leads crypto adoption in Finder’s 27-country survey
                </span>
                <br />
                <span class="ft-16 font_wght400 white--text">
                  Financial product comarision website Finder.com has released
                  its latest cypto report, where it evaluated adoption...
                </span>
                <br />
                <span class="mt-2 white--text ft-14">4 mintues ago</span>
              </div>
            </div>
          </v-img>
        </v-card>
      </v-col>

      <v-col>
        <v-card
          v-for="list in blogData"
          :key="list.id"
          flat
          class="my-4 pointer"
          @click="$router.push('/blog/detail')"
          :max-width="$vuetify.breakpoint.width <= 1024 ? '100%' : '580px'"
          min-height="170"
        >
          <v-row dense no-gutters>
            <v-col
              cols="12"
              sm="4"
              md="4"
              lg="4"
              xl="4"
              align-self="center"
              align="center"
            >
              <v-img
                height="160px"
                min-width="160px"
                class="rounded"
                :class="!$vuetify.breakpoint.xsOnly ? 'mx-2' : ''"
                :src="list.img"
              />
            </v-col>

            <v-col
              cols="12"
              sm="8"
              md="8"
              lg="8"
              xl="8"
              align-self="start"
              class="mt-2 pa-2"
            >
              <h3
                :style="{ color: list.color }"
                class="my-1 font-weight-bold ft-14"
              >
                {{ list.category }}
              </h3>

              <div class="d-flex flex-column">
                <span class="black--text blog-list py-1">
                  {{ list.title }}
                </span>
                <p class="ft-14 mb-0">
                  {{ list.info }}
                </p>
                <small class="mt-2 ft-14 grey--text">{{
                  list.datePublished
                }}</small>
              </div>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>

    <v-col>
      <div class="my-15">
        <h1 class="px-4 font_wght700 ft-40">Highlights</h1>
        <BlogWidget />
      </div>

      <div class="my-15">
        <h1 class="px-4 font_wght700 ft-40">Post</h1>
        <BlogWidget />
        <BlogWidget />
        <BlogWidget />
        <BlogWidget />
      </div>
    </v-col>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      blogData: [
        {
          id: 1,
          img: "/banners/sample3.png",
          color: "#0085FF",
          category: "News",
          title:
            "Elon Mask has quickly become one of the most famous enterpreneurs to promote cryptocurrencies",
          info: "The popular video sharping app TikTok has itroduced new restrictions that will prevent it users...",
          datePublished: "8 minutes ago",
        },
        {
          id: 2,
          img: "/banners/sample1.png",
          color: "#FF8A00",
          category: "Investment",
          title:
            "Elon Mask has quickly become one of the most famous enterpreneurs to promote cryptocurrencies",
          info: "The popular video sharping app TikTok has itroduced new restrictions that will prevent it users...",

          datePublished: "16 minutes ago",
        },
        {
          id: 3,
          img: "/banners/sample2.png",
          color: "#088264",
          category: "Knowledge",
          title:
            "Elon Mask has quickly become one of the most famous enterpreneurs to promote cryptocurrencies",
          info: "The popular video sharping app TikTok has itroduced new restrictions that will prevent it users...",

          datePublished: "24 minutes ago",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.language-box {
  max-width: 87px;
}

.cardbody {
  bottom: 0;
  position: absolute;
  background: #00000095;
  width: 100%;
  height: 226px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

.blog-list {
  font-family: IBM Plex Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 21px !important;
  letter-spacing: 0em !important;
  text-align: left;
}

.container {
  max-width: 1250px !important;
}
</style>