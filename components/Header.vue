<template>
  <v-app-bar color="#FFFFFF" :clipped-left="clipped" fixed app>
    <nuxt-link to="/" class="pr-15">
      <img
        class="mx-2"
        src="../static/img/binanceLogo.png"
        height="38"
        width="189"
      />
    </nuxt-link>

    <v-btn icon text>
      <img contain height="32" width="32" src="@/static/img/SquaresFour.png" />
    </v-btn>

    <v-btn plain text class="text-capitalize font-weight-normal"> Trade </v-btn>

    <v-btn
      nuxt
      to="/market"
      plain
      text
      class="text-capitalize font-weight-normal"
    >
      Market
    </v-btn>

    <v-btn
      plain
      text
      nuxt
      to="/blog/detail"
      class="text-capitalize font-weight-normal"
    >
      Blog
    </v-btn>

    <v-spacer />

    <div class="d-flex flex-row" v-if="!loginToken">
      <v-btn @click="loginToken = true" class="mx-1" color="primary" outlined>
        <span class="black--text">Login</span>
      </v-btn>

      <v-btn
        nuxt
        to="/signUp"
        class="mx-1 black--text"
        color="primary"
        depressed
      >
        Sign Up
      </v-btn>

      <div class="d-flex flex-row justify-space-between align-center">
        <v-avatar size="20px" class="px-5">
          <img alt="Avatar" src="@/static/flagIcons/vietnam.png" />
        </v-avatar>

        <span class="subtitle-2 px-2">VI</span>
      </div>

      <!-- <v-row align="center" class="spacer language-box" no-gutters>
        <v-col align="end">
          <v-avatar size="20px">
            <img alt="Avatar" src="@/static/flagIcons/vietnam.png" />
          </v-avatar>
        </v-col>

        <v-col align="center">
          <span class="subtitle-2">VI</span>
        </v-col>
      </v-row> -->
    </div>

    <div
      class="
        d-flex
        flex-row
        justify-space-between
        align-center
        font_wght400
        ft-14
      "
      v-else
    >
      <div class="px-5">
        <v-select
          :items="walletItems"
          class="wallet_style"
          single-line
          placeholder="Wallet"
          hide-details
          dense
          v-model="selectedWallet"
        >
          <template v-slot:prepend-inner class="mt-0">
            <v-img
              position="center"
              class="pointer mx-2"
              width="24px"
              height="24px"
              src="/icons/Wallet.png"
            />
          </template>
          <template v-slot:selection="{ item }">
            {{ item }}
          </template>
          <template v-slot:append style="align-self: center">
            <img
              class="pointer"
              width="16px"
              height="16px"
              src="/img/CaretDown.png"
            />
          </template>
        </v-select>
      </div>

      <div class="d-flex flex-row justify-space-between align-center pr-5">
        <v-img
          class="pointer mx-2"
          width="24px"
          height="24px"
          src="/icons/Notebook.png"
        />

        <span>Order</span>
      </div>

      <div class="pr-5">
        <v-img
          class="pointer mx-2"
          width="24px"
          height="24px"
          src="/icons/BellNotify.png"
        />
      </div>

      <div class="pr-5">
        <v-select
          :items="AcctItem"
          class="avatar_style"
          single-line
          hide-details
          hide-selected
          dense
          v-model="selectedAccItem"
        >
          <template v-slot:prepend-inner class="mt-0">
            <v-avatar>
              <v-img
                class="pointer mx-2"
                width="40px"
                height="40px"
                src="/img/avatar.png"
              />
            </v-avatar>
          </template>
          <template v-slot:selection="{ item }">
            {{ item }}
          </template>
          <template v-slot:append>
            <img
              class="pointer"
              width="16px"
              height="16px"
              src="/img/CaretDown.png"
            />
          </template>
        </v-select>
      </div>
    </div>

    <v-btn icon>
      <img src="../static/img/Moon.png" />
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      loginToken: false,
      walletItems: ["Wallet"],
      selectedWallet: "Wallet",
      selectedAccItem: "Viet Anh",
      AcctItem: ["Viet Anh"],
    };
  },
};
</script>

<style lang="scss" scoped>
.language-box {
  max-width: 87px;
}

.wallet_style {
  width: 110px !important;
  font-size: 14px !important;
  color: black !important;
}

.avatar_style {
  width: 130px !important;
  font-size: 14px !important;
}

#input-88 {
  color: black !important;
}

.v-select__slot {
  align-self: center !important;
  margin-top: 0px !important;
}
</style>