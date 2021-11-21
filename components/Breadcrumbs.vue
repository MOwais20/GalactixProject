<template>
  <v-breadcrumbs class="px-0" :items="items">
    <template v-slot:divider>
      <v-icon>mdi-chevron-right</v-icon>
    </template>
    <template v-slot:item="{ item }">
      <v-breadcrumbs-item v-if="item.text" class="grey--text">
        {{ item.text }}
      </v-breadcrumbs-item>
    </template>
  </v-breadcrumbs>
</template>

<script>
export default {
    props: ['items']
};
</script>

<style>
</style>