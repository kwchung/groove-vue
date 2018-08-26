<template>
  <v-app>
    <v-navigation-drawer
      persistent
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      enable-resize-watcher
      fixed
      app
    >
      <v-list>
        <v-list-tile
          value="true"
          v-for="(item, i) in items"
          :key="i"
          slot="extension"
        >
        <v-spacer></v-spacer>
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
              <v-btn icon>
      <v-icon>more_vert</v-icon>
    </v-btn>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <!-- toll bar -->
    <v-toolbar
      app
      :clipped-left="clipped"
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
      clipped: false,
      drawer: true,
      fixed: false,
      items: [{
        icon: 'bubble_chart',
        title: 'Inspire'
      }],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: '健身數據',
      bottomNav: 0,
    }
  },
}
</script>
