<template>
  <v-app>
    <!-- toll bar -->
    <v-toolbar
      app
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title 
      v-text="$route.meta.title"></v-toolbar-title>
    </v-toolbar>

    <!-- content -->
    <v-content>
      <router-view/>
    </v-content>

    <!-- bottom navigation -->
    <v-bottom-nav
      :active.sync="bottomNav"
      :value="true"
      absolute
      color="transparent"
      fixed
    >
      <v-btn
        color="teal"
        flat
        value="recent"
      >
        <span>歷史紀錄</span>
        <v-icon>fas fa-history</v-icon>
      </v-btn>
      <v-btn
        color="teal"
        flat
        value="favorites"
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
