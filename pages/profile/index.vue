<template class="bg-temp">
  <v-container>
    <v-row class="py-2">
      <v-col :cols="$vuetify.breakpoint.smAndDown ? '12' : '4'" align="center">
        <v-card flat min-height="860">
          <v-card-text class="black--text mx-auto primary">
            <v-col align="center">
              <v-avatar size="150px" class="ma-3">
                <v-img
                  :src="profilePic"
                  :lazy-src="profilePic"
                  alt="Profile_Picture"
                  max-height="150px"
                  max-width="150px"
                >
                </v-img>
              </v-avatar>

              <div>
                <v-menu
                  max-width="280"
                  rounded="rounded-lg"
                  offset-y
                  close-on-content-click
                >
                  <template v-slot:activator="{ attrs, on }">
                    <div class="circle">
                      <v-icon
                        v-bind="attrs"
                        v-on="on"
                        class="pointer white mx-auto rounded-xl pa-1"
                        :dark="true"
                        :color="$vuetify.theme.dark ? '#000000' : 'black'"
                        medium
                        >mdi-pencil</v-icon
                      >
                    </div>
                  </template>

                  <v-list>
                    <v-list-item>
                      <v-list-item-content>
                        <v-list-item-title>
                          <v-file-input
                            accept="image/png, image/jpeg, image/jpg, image/gif, image/svg"
                            v-model="avatarImage"
                            placeholder="Change Avatar"
                            persistent-placeholder
                            hide-details
                            solo
                            flat
                            dense
                          >
                          </v-file-input>
                        </v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </div>

              <div class="font-weight-bold pa-2 ft-20 black-font">
                {{ getUserName ? getUserName : getUserId }}
              </div>

              <div
                class="
                  d-flex
                  flex-row flex-wrap
                  justify-center
                  align-center
                  ft-14
                  font-weight-medium
                  pa-1
                "
              >
                <span class="mx-1 black-font">Ref ID: #9849167613</span>

                <v-btn icon>
                  <v-img
                    alt="copy"
                    src="/icons/Copy.png"
                    height="24px"
                    max-width="24px"
                  ></v-img>
                </v-btn>
              </div>
            </v-col>
          </v-card-text>

          <v-card-text>
            <div
              class="d-flex flex-wrap flex-row justify-center"
              :class="$vuetify.theme.dark ? 'white--text' : 'black--text'"
            >
              <v-avatar class="outlined mx-3">
                <v-icon> mdi-email-outline </v-icon>
              </v-avatar>

              <v-avatar class="outlined mx-3">
                <v-icon> mdi-phone-outline </v-icon>
              </v-avatar>

              <v-avatar class="outlined mx-3">
                <span class="ft-16 font-weight-regular">2FA</span>
              </v-avatar>
            </div>
          </v-card-text>

          <v-card-text class="ml-4">
            <div class="d-flex flex-column">
              <div class="d-flex flex-column flex-wrap align-start">
                <v-btn to="account" plain nuxt text class="ma-1">
                  <!-- Account Circle SVG -->
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 15.375C14.2782 15.375 16.125 13.5282 16.125 11.25C16.125 8.97183 14.2782 7.125 12 7.125C9.72183 7.125 7.875 8.97183 7.875 11.25C7.875 13.5282 9.72183 15.375 12 15.375Z"
                      fill="inherit"
                    />
                    <path
                      d="M12 2.25C10.0716 2.25 8.18657 2.82183 6.58319 3.89317C4.97982 4.96451 3.73013 6.48726 2.99218 8.26884C2.25422 10.0504 2.06114 12.0108 2.43735 13.9021C2.81355 15.7934 3.74215 17.5307 5.10571 18.8943C6.46928 20.2579 8.20656 21.1865 10.0979 21.5627C11.9892 21.9389 13.9496 21.7458 15.7312 21.0078C17.5127 20.2699 19.0355 19.0202 20.1068 17.4168C21.1782 15.8134 21.75 13.9284 21.75 12C21.7471 9.41504 20.7189 6.93679 18.8911 5.10894C17.0632 3.28109 14.585 2.25293 12 2.25ZM18.1648 17.476C17.5628 16.6037 16.782 15.8695 15.8744 15.3221C14.8308 16.3188 13.4432 16.875 12 16.875C10.5569 16.875 9.16923 16.3188 8.12558 15.3221C7.218 15.8695 6.43724 16.6037 5.83516 17.476C4.77814 16.2874 4.08725 14.8186 3.84568 13.2464C3.60411 11.6743 3.82217 10.0658 4.4736 8.6147C5.12502 7.16361 6.18204 5.93177 7.51737 5.06752C8.85269 4.20327 10.4094 3.74346 12 3.74346C13.5906 3.74346 15.1473 4.20327 16.4826 5.06752C17.8179 5.93177 18.875 7.16361 19.5264 8.6147C20.1778 10.0658 20.3959 11.6743 20.1543 13.2464C19.9127 14.8186 19.2218 16.2874 18.1648 17.476Z"
                      fill="inherit"
                    />
                  </svg>

                  <span class="px-2">Account</span>
                </v-btn>

                <v-btn plain to="kyc" nuxt text class="ma-1">
                  <!-- KYC SVG -->
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.5 3H4.5C4.10233 3.00052 3.7211 3.15872 3.43991 3.43991C3.15872 3.7211 3.00052 4.10233 3 4.5V9.99976C3 18.3867 10.1082 21.1677 11.5342 21.6401C11.8363 21.7427 12.1637 21.7427 12.4658 21.6401C13.8911 21.1677 21 18.3875 21 9.99976V4.5C20.9995 4.10233 20.8413 3.7211 20.5601 3.43991C20.2789 3.15872 19.8977 3.00052 19.5 3ZM16.6428 9.54272L11.1423 14.7927C11.0028 14.9258 10.8173 15 10.6245 15C10.4317 15 10.2463 14.9258 10.1067 14.7927L7.35718 12.1677C7.2858 12.0997 7.22853 12.0184 7.18862 11.9282C7.14871 11.8381 7.12696 11.741 7.1246 11.6425C7.12224 11.5439 7.13933 11.4459 7.17488 11.354C7.21043 11.262 7.26375 11.178 7.33179 11.1067C7.39983 11.0354 7.48126 10.9782 7.57142 10.9384C7.66158 10.8985 7.7587 10.8769 7.85724 10.8746C7.95578 10.8723 8.0538 10.8895 8.1457 10.9251C8.2376 10.9608 8.32157 11.0142 8.39282 11.0823L10.6245 13.2129L15.6072 8.45728C15.6784 8.38917 15.7624 8.33578 15.8543 8.30014C15.9462 8.26451 16.0442 8.24734 16.1428 8.24961C16.2413 8.25188 16.3384 8.27354 16.4286 8.31337C16.5187 8.35319 16.6002 8.4104 16.6682 8.48171C16.7363 8.55302 16.7896 8.63705 16.8251 8.72898C16.8607 8.82091 16.8778 8.91894 16.8754 9.01748C16.873 9.11602 16.8513 9.21312 16.8114 9.30325C16.7715 9.39337 16.7142 9.47475 16.6428 9.54272H16.6428Z"
                    />
                  </svg>

                  <span class="px-2">KYC</span>
                </v-btn>

                <v-btn plain to="security" nuxt text class="ma-1">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.5 8.25H4.5C4.08579 8.25 3.75 8.58579 3.75 9V19.5C3.75 19.9142 4.08579 20.25 4.5 20.25H19.5C19.9142 20.25 20.25 19.9142 20.25 19.5V9C20.25 8.58579 19.9142 8.25 19.5 8.25Z"
                      stroke="inherit"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8.625 8.25V4.875C8.625 3.97989 8.98058 3.12145 9.61351 2.48851C10.2465 1.85558 11.1049 1.5 12 1.5C12.8951 1.5 13.7535 1.85558 14.3865 2.48851C15.0194 3.12145 15.375 3.97989 15.375 4.875V8.25"
                      stroke="inherit"
                      fill="transparent"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <span class="px-2">Security</span>
                </v-btn>

                <v-btn plain to="setting" nuxt text class="ma-1">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.90432 8.58641C5.07307 8.23016 5.26994 7.89266 5.49494 7.56453L5.45744 5.12703C5.45744 4.90203 5.55119 4.68641 5.72932 4.53641C6.60119 3.80516 7.59494 3.21453 8.69182 2.82078C8.90744 2.74578 9.14182 2.76453 9.32932 2.88641L11.4199 4.14266C11.8137 4.11453 12.2074 4.11453 12.6012 4.14266L14.6918 2.88641C14.8887 2.77391 15.1231 2.74578 15.3387 2.82078C16.4074 3.20516 17.4106 3.77703 18.3012 4.52703C18.4699 4.66766 18.5731 4.89266 18.5637 5.11766L18.5262 7.55516C18.7512 7.88328 18.9481 8.22078 19.1168 8.57703L21.2449 9.75828C21.4418 9.87078 21.5824 10.0583 21.6199 10.2833C21.8168 11.3989 21.8262 12.5614 21.6199 13.6958C21.5824 13.9208 21.4418 14.1083 21.2449 14.2208L19.1168 15.402C18.9481 15.7583 18.7512 16.0958 18.5262 16.4239L18.5637 18.8614C18.5637 19.0864 18.4699 19.302 18.2918 19.452C17.4199 20.1833 16.4262 20.7739 15.3293 21.1677C15.1137 21.2427 14.8793 21.2239 14.6918 21.102L12.6012 19.8458C12.2074 19.8739 11.8137 19.8739 11.4199 19.8458L9.32932 21.102C9.13244 21.2145 8.89807 21.2427 8.68244 21.1677C7.61369 20.7833 6.61057 20.2114 5.71994 19.4614C5.55119 19.3208 5.44807 19.0958 5.45744 18.8708L5.49494 16.4333C5.26994 16.1052 5.07307 15.7677 4.90432 15.4114L2.77619 14.2302C2.57932 14.1177 2.43869 13.9302 2.40119 13.7052C2.20432 12.5895 2.19494 11.427 2.40119 10.2927C2.43869 10.0677 2.57932 9.88016 2.77619 9.76766L4.90432 8.58641Z"
                      stroke="inherit"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5 9.51472 14.4853 7.5 12 7.5C9.51472 7.5 7.5 9.51472 7.5 12C7.5 14.4853 9.51472 16.5 12 16.5Z"
                      stroke="inherit"
                      :fill="$vuetify.theme.dark ? '#1E1E1E' : '#FFFFFF'"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <span class="px-2">Setting</span>
                </v-btn>

                <v-btn to="referral" nuxt plain text class="ma-1">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.25 6.75033H16.9718C17.4599 6.1548 17.7004 5.39439 17.6434 4.62651C17.5864 3.85862 17.2363 3.14205 16.6656 2.62513C16.0949 2.10821 15.3472 1.83053 14.5775 1.84956C13.8077 1.86859 13.0747 2.18288 12.5303 2.72736C12.3131 2.95367 12.134 3.21364 12 3.49718C11.8659 3.21363 11.6868 2.95365 11.4696 2.72732C10.9252 2.18284 10.1922 1.86857 9.42243 1.84955C8.65266 1.83053 7.90506 2.10822 7.33437 2.62515C6.76368 3.14207 6.4136 3.85864 6.35661 4.62653C6.29961 5.39441 6.54006 6.15482 7.02818 6.75033H3.75C3.35231 6.75078 2.97104 6.90896 2.68984 7.19017C2.40863 7.47137 2.25045 7.85264 2.25 8.25033V11.2503C2.25045 11.648 2.40863 12.0293 2.68984 12.3105C2.97104 12.5917 3.35231 12.7499 3.75 12.7503V18.7503C3.75045 19.148 3.90864 19.5293 4.18984 19.8105C4.47105 20.0917 4.85231 20.2499 5.25 20.2503H18.75C19.1477 20.2499 19.529 20.0917 19.8102 19.8105C20.0914 19.5293 20.2495 19.148 20.25 18.7503V12.7503C20.6477 12.7499 21.029 12.5917 21.3102 12.3105C21.5914 12.0293 21.7495 11.648 21.75 11.2503V8.25033C21.7495 7.85264 21.5914 7.47137 21.3102 7.19017C21.029 6.90896 20.6477 6.75078 20.25 6.75033ZM13.5909 3.78803C13.7302 3.64868 13.8955 3.53813 14.0776 3.4627C14.2596 3.38727 14.4546 3.34843 14.6517 3.34841C14.8487 3.34838 15.0438 3.38716 15.2258 3.46255C15.4078 3.53793 15.5732 3.64843 15.7125 3.78774C15.8518 3.92705 15.9623 4.09244 16.0377 4.27446C16.1131 4.45649 16.1519 4.65158 16.1519 4.84859C16.1519 5.04561 16.113 5.24069 16.0376 5.4227C15.9622 5.6047 15.8516 5.77007 15.7123 5.90935C15.2491 6.37258 13.9099 6.63271 12.782 6.71835C12.8676 5.59033 13.1277 4.25121 13.5909 3.78803ZM8.28763 3.78803C8.56917 3.50715 8.95062 3.34941 9.34831 3.3494C9.746 3.3494 10.1275 3.50713 10.409 3.788C10.8723 4.25124 11.1324 5.59047 11.218 6.71833C10.09 6.63266 8.75089 6.37254 8.28772 5.90935C8.00684 5.62782 7.8491 5.24638 7.84908 4.84871C7.84906 4.45103 8.00678 4.06958 8.28763 3.78803ZM20.25 11.2503H12.75V18.0003C12.75 18.1992 12.671 18.39 12.5303 18.5307C12.3897 18.6713 12.1989 18.7503 12 18.7503C11.8011 18.7503 11.6103 18.6713 11.4697 18.5307C11.329 18.39 11.25 18.1992 11.25 18.0003V11.2503H3.75V8.25033H11.25V11.2503H12.75V8.25033H20.25L20.2509 11.2503L20.25 11.2503Z"
                      fill="inherit"
                    />
                  </svg>

                  <span class="px-2">Referral</span>
                </v-btn>
              </div>

              <div class="d-flex align-start flex-column mt-15 logout-btn">
                <v-btn
                  nuxt
                  @click="logout"
                  active-class="primary"
                  plain
                  text
                  class="ma-1"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.3125 8.0625L20.249 12L16.3125 15.9375"
                      stroke="inherit"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9.75 12H20.2472"
                      stroke="inherit"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9.75 20.25H4.5C4.30109 20.25 4.11032 20.171 3.96967 20.0303C3.82902 19.8897 3.75 19.6989 3.75 19.5V4.5C3.75 4.30109 3.82902 4.11032 3.96967 3.96967C4.11032 3.82902 4.30109 3.75 4.5 3.75H9.75"
                      stroke="inherit"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <span class="px-2">Log Out</span>
                </v-btn>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col :cols="$vuetify.breakpoint.smAndDown ? '12' : '8'">
        <div>
          <!-- Child Components -->
          <nuxt-child> </nuxt-child>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      avatarImage: null,
      uploadFile: false,
    };
  },
  middleware({ route, redirect, from }) {
    if (route.path == "/profile" || route.path == "/profile/") {
      return redirect("/profile/account");
    }
  },
  watch: {
    avatarImage(val) {
      if (val) {
        this.uploadPicture();
      }
    },
  },
  methods: {
    ...mapActions("global", ["setAvatar"]),
    ...mapActions("auth", ["logout"]),
    uploadPicture() {
      let data = new FormData();
      data.append("avatar", this.avatarImage);

      this.$api.userService.uploadAvatar(data).then((response) => {
        // update avatar
        this.setAvatar(response && response.data);
        this.$toast.success(response && response.message);
        // reset Input
        this.avatarImage = null;
      });
    },
  },
  computed: {
    ...mapGetters("global", ["user"]),
    profilePic() {
      if (this.user && this.user.avatar) return this.user.avatar;
      return "/img/userImage.png";
    },
    getUserName() {
      if (!this.user) this.$store.dispatch("global/setUser");
      let fullName =
        this.user && this.user.firstName + this.user && this.user.lastName;
      return fullName ? fullName : "";
    },
    getUserId() {
      if (this.user && this.user._id) {
        if (this.user._id.length > 24) return this.user._id.substring(0, 24);
        return this.user._id;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.theme--dark.v-btn--active,
.theme--light.v-btn--active {
  background: transparent !important;
}

.v-btn--active {
  svg {
    stroke: $primary;
    fill: $primary;
  }
}
// In active color
svg {
  stroke: #6f6f6f;
}

.circle {
  position: relative;
  /* z-index: 99; */
  width: 36px;
  height: 36px;
  top: -30px;
  left: 25px;
  border-radius: 50%;

  .v-text-field {
    padding-top: 0px;
    margin-top: 0px;
  }
}

.logout-btn {
  position: absolute !important;
  bottom: 15px !important;
}
</style>