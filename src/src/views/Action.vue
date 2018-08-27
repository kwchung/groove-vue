<template>
    <v-container grid-list-md text-xs-center>
        <v-layout row wrap>
            <v-flex xs6 v-for="(action, index) in actions" :key="index">
                <v-card>
                    <v-card-media
                        class="white--text"
                        height="200px"
                        :src="action.src"
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
                <v-btn
                    color="success"
                    @click="$router.push('/intensity')"
                >開始測試最大肌力</v-btn>
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
          src: 'https://www.oxygenmag.com/.image/ar_3:2%2Cc_limit%2Ccs_srgb%2Cq_80%2Cw_640/MTUxNTQyMjY1OTA5NjgzNDY4/barbell-deadlift.jpg',
          src1: '@/assets/HardLift.png',
        },
        {
          name: '深蹲',
          src: 'http://s3.amazonaws.com/iguanasportsproducao/images/wp-content/uploads/sites/2/2017/07/24151255/Dor-na-lombar-durante-o-agachamento-2.jpg',
          src1: '@/assets/Squat.png',
        },
        {
          name: '臥推',
          src: 'https://marcypro.files.wordpress.com/2017/12/bench-press.jpg?w=800',
          src1: '@/assets/BenchPress.png',
        },
      ],
    };
  },
};
</script>

<style>
</style>
