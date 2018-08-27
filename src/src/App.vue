<template>
  <v-app>
    <!-- toll bar -->
    <v-toolbar app>
      <v-btn icon v-show="$route.meta.back" @click="$router.back()">
        <v-icon>fas fa-arrow-left</v-icon>
      </v-btn>
      <v-toolbar-title
      v-text="$route.meta.title"></v-toolbar-title>
    </v-toolbar>

    <!-- content -->
    <v-content style="margin-bottom: 56px;">
      <router-view/>
    </v-content>

    <!-- bottom navigation -->
    <v-bottom-nav
      :active.sync="bottomNav"
      :value="true"
      color="white"
      fixed
    >
      <v-btn
        color="teal"
        flat
        value="recent"
        dark
      >
        <span>歷史紀錄</span>
        <v-icon>fas fa-history</v-icon>
      </v-btn>
      <v-btn
        color="teal"
        flat
        value="favorites"
        @click="$router.push('/action')"
      >
        <span>開始健身</span>
        <v-icon>fas fa-dumbbell</v-icon>
      </v-btn>
      <v-btn
        color="teal"
        flat
        value="nearby"
      >
        <span>個人資料</span>
        <v-icon>fas fa-user</v-icon>
      </v-btn>
    </v-bottom-nav>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      bottomNav: 0,
    }
  },
}
</script>

<style lang="scss">
body{
  font-family: 'Microsoft JhengHei' !important;
}
</style>
