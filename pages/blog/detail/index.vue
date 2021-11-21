<template>
  <div>
    <v-img width="100%" height="580px" src="/banners/blog.png" />
    <v-container fill-height class="statsCard">
      <v-card class="elevation-15 mx-auto" width="1081">
        <v-row justify="center" class="mx-auto" no-gutters>
          <v-col cols="12" class="py-4" align-self="center">
            <span class="blue--text px-6 font-weight-bold">News</span>
            <span class="grey--text float-end px-6">4 mintes ago</span>
          </v-col>
        </v-row>
        <v-row justify="center" class="mx-auto">
          <v-col cols="12" align-self="center">
            <h1 class="px-6 font_wght700">
              Vietnam leads crypto adoption in Finder's 27-country survey
            </h1>
          </v-col>
        </v-row>
        <v-row justify="center" class="mx-auto">
          <v-col cols="12" align-self="center">
            <p class="px-6">
              Financial product comparison website Finder.com has released its
              latest crypto report, where it evaluated adoption trends across 27
              countries in Europe, Asia and the Americas.
            </p>
          </v-col>
        </v-row>
        <v-row justify="center" class="mx-auto">
          <v-col cols="12" align-self="center">
            <p class="px-6">
              Emerging economies like Vietnam, India and Indonesia are leading
              the charge when it comes to cryptocurrency adoption, underscoring
              important use cases for digital assets tied to remittances and
              financial inclusion.
            </p>
          </v-col>
        </v-row>
        <v-row justify="center" class="mx-auto">
          <v-col cols="12" align-self="center">
            <p class="px-6">
              Finder’s survey of 42,000 people across 27 countries revealed that
              Vietnam had the highest adoption rate, with 41% of respondents
              claiming they had purchased cryptocurrency. Twenty percent of
              Vietnamese said they had purchased Bitcoin (BTC), which was the
              highest among all countries polled.
            </p>
          </v-col>
        </v-row>
        <v-row justify="center" class="mx-auto">
          <v-col cols="12" align-self="center">
            <p class="px-6">
              Although Vietnam’s strong outperformance may appear surprising at
              the surface, Finder’s survey corroborated other data showing that
              the southeast Asian country is punching above its weight when it
              comes to crypto adoption. As Cointelegraph reported in June,
              Vietnam ranked 13th in realized Bitcon gains for 2020 — despite
              having only the 53rd largest economy based on gross domestic
              product.
            </p>
          </v-col>
        </v-row>
        <v-row justify="center" class="mx-auto">
          <v-col cols="12" align-self="center" align="center" class="px-9">
            <v-img width="1081px" min-height="711px" src="/banners/blog.png" />
          </v-col>
        </v-row>
        <v-row justify="center" class="mx-auto">
          <v-col cols="12" align-self="center">
            <p class="px-6">
              Financial product comparison website Finder.com has released its
              latest crypto report, where it evaluated adoption trends across 27
              countries in Europe, Asia and the Americas.
            </p>
          </v-col>
        </v-row>
        <v-row justify="center" class="mx-auto">
          <v-col cols="12" align-self="center">
            <p class="px-6">
              Emerging economies like Vietnam, India and Indonesia are leading
              the charge when it comes to cryptocurrency adoption, underscoring
              important use cases for digital assets tied to remittances and
              financial inclusion.
            </p>
          </v-col>
        </v-row>
        <v-row justify="center" class="mx-auto">
          <v-col cols="12" align-self="center">
            <p class="px-6">
              Finder’s survey of 42,000 people across 27 countries revealed that
              Vietnam had the highest adoption rate, with 41% of respondents
              claiming they had purchased cryptocurrency. Twenty percent of
              Vietnamese said they had purchased Bitcoin (BTC), which was the
              highest among all countries polled.
            </p>
          </v-col>
        </v-row>
        <v-row justify="center" class="mx-auto">
          <v-col cols="12" align-self="center">
            <p class="px-6">
              Although Vietnam’s strong outperformance may appear surprising at
              the surface, Finder’s survey corroborated other data showing that
              the southeast Asian country is punching above its weight when it
              comes to crypto adoption. As Cointelegraph reported in June,
              Vietnam ranked 13th in realized Bitcon gains for 2020 — despite
              having only the 53rd largest economy based on gross domestic
              product.
            </p>
          </v-col>
        </v-row>
        <v-row class="socaialmx-width my-2" justify="center" no-gutters>
          <v-col align-self="center">
            <div class="d-flex flex-row justify-center">
              <v-avatar size="40px" class="ma-5">
                <v-img
                  class="ma-2"
                  width="42px"
                  height="42px"
                  src="/img/FacebookOrg.png"
                ></v-img>
              </v-avatar>

              <div class="outlined ma-5 rounded-xl">
                <v-img
                  class="ma-2"
                  width="auto"
                  height="auto"
                  src="/img/twitterOrg.png"
                ></v-img>
              </div>

              <div class="outlined ma-5 rounded-xl">
                <v-img
                  class="ma-2"
                  width="24px"
                  height="24px"
                  src="/img/ShareNetwork.png"
                ></v-img>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-card>

      <div class="d-flex flex-column mx-auto">
        <h1 class="font-weight-bold pt-10 pl-5">Related Post</h1>
        <BlogWidget />
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fixed: false,
      socialIcons: [
        {
          id: 1,
          imgURL: "/img/FacebookOrg.png",
          width: "24px",
          height: "24px",
          align: "right",
        },
        {
          id: 2,
          imgURL: "/img/twitterOrg.png",
          width: "40px",
          height: "40px",
          align: "center",
        },
        {
          id: 3,
          imgURL: "/img/ShareNetwork.png",
          width: "40px",
          height: "40px",
          align: "left",
        },
      ],
    };
  },
};
</script>

<style scoped>
.elevation-15 {
  width: 100%;
}
.v-sheet.v-card {
  border-radius: 3px;
  padding: 19px;
}
.statsCard {
  position: relative;
  bottom: 300px;
}
.v-sheet.v-card {
  border-radius: 3px;
  padding: 0px;
}

.socaialmx-width {
  /* width: 100px; */
}
</style>