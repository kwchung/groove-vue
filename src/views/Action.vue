<template>
    <v-container grid-list-md text-xs-center>
        <v-layout row wrap>
            <v-flex xs6 v-for="(action, index) in actions" :key="index">
                <v-card>
                    <v-card-media
                        class="white--text"
                        height="200px"
                        src="@/assets/logo.png"
                        >
                        <v-container fill-height fluid>
                            <v-layout fill-height>
                                <v-flex xs12 align-end flexbox>
                                    <span class="headline">{{ action.name }}</span>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-card-media>
                </v-card>
            </v-flex>
            <v-flex xs12>
                <v-btn color="success">開始測試最大肌力</v-btn>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
  data() {
    return {
      actions: [
        {
          name: '硬舉',
          src: '@/assets/HardLift.png'
        },
        {
          name: '深蹲',
          src: '@/assets/Squat.png'
        },
        {
          name: '臥推',
          src: '@/assets/BenchPress.png'
        }
      ]
    };
  }
};
</script>

<style>
</style>
