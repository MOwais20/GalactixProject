<template>
  <div>
    <v-divider></v-divider>
    <v-card flat>
      <v-container class="pa-0">
        <v-card-text class="py-2">
          <div
            class="d-flex flex-row flex-wrap align-center justify-space-between"
          >
            <div>
              <v-btn
                nuxt
                to="/blog/all"
                plain
                text
                class="text-capitalize font-weight-normal"
              >
                All
              </v-btn>
              <v-btn plain text class="text-capitalize font-weight-normal">
                News
              </v-btn>
              <v-btn plain text class="text-capitalize font-weight-normal">
                Knowledge
              </v-btn>
              <v-btn plain text class="text-capitalize font-weight-normal">
                Investment
              </v-btn>
            </div>

            <div>
              <v-text-field
                style="max-width: 300px"
                placeholder="Search post"
                filled
                hide-details
                dense
                v-model="search"
              >
                <template v-slot:prepend-inner>
                  <!-- MagnifyingGlass SVG -->
                  <svg
                    class="mx-2"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    :stroke="$vuetify.theme.dark ? 'white' : 'black'"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.0625 15.625C12.6869 15.625 15.625 12.6869 15.625 9.0625C15.625 5.43813 12.6869 2.5 9.0625 2.5C5.43813 2.5 2.5 5.43813 2.5 9.0625C2.5 12.6869 5.43813 15.625 9.0625 15.625Z"
                      stroke="inherit"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M13.7031 13.7031L17.5 17.5"
                      stroke="inherit"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </template>
              </v-text-field>
            </div>
          </div>
        </v-card-text>
      </v-container>
    </v-card>

    <!-- Child Components -->
    <nuxt-child> </nuxt-child>
  </div>
</template>

<script>
export default {
  middleware({ route, redirect, from }) {
    if (route.path == "/blog" || route.path == "/blog/") {
      return redirect("/blog/all");
    }
  },
  data() {
    return {
      clipped: false,
      search: null,
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