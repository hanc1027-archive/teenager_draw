<template>
  <v-app>
    <v-app-bar
      app
      color="teal accent-4"
      dark
    >
      <v-spacer></v-spacer>
      一夏禪悅 - 抽籤系統
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
