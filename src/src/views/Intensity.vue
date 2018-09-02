<template>
    <v-container class="text-xs-center">
        <v-layout>
            <v-flex xs12>
                <h1>最大肌力測試</h1>
                <v-layout row>
                    <v-flex xs6>
                        <v-subheader style="padding-top: 20px; font-size: 17px;">負重</v-subheader>
                    </v-flex>
                    <v-flex xs6>
                        <v-text-field
                            :value="rm"
                            type="number"
                            suffix="公斤"
                        ></v-text-field>
                    </v-flex>
                </v-layout>
                <v-flex xs12>
                    <v-progress-circular
                        v-if="show"
                        :size="70"
                        :width="7"
                        color="purple"
                        indeterminate
                        ></v-progress-circular>
                    <ve-scatter v-if="!show" :data="chartData" :legend-visible="false"></ve-scatter>
                </v-flex>
                <v-flex xs12>
                    <v-btn
                        v-if="show"
                        color="success"
                        @click="_finish"
                    >測試完成</v-btn>
                    <v-btn
                        v-if="!show"
                        color="success"
                        @click="$router.push('/purpose')"
                    >選擇健身目標</v-btn>
                </v-flex>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
// import * as Firebase from 'firebase/app';
// import 'firebase/database';
// const msgRef = Firebase.database().ref("/actions/");

export default {
  data() {
    return {
      show: true,
      finish: false,
      rm: 30,
      actions: [],
      chartData: {
        columns: ["重量", "速度", "速度2"],
        rows: [
          { 重量: "30", 速度: 0.74, 速度2: 0.7 },
          { 重量: "40", 速度: 0.65, 速度2: 0.68 },
          { 重量: "50", 速度: 0.6, 速度2: 0.58 },
          { 重量: "60", 速度: 0.52, 速度2: 0.5 },
          { 重量: "70", 速度: 0.43, 速度2: 0.4 }
        ]
      }
    };
  },
  mounted() {
    // for (let i = 0; i < 5; i++) {
    //   msgRef.push({
    //     name: `name${i}`,
    //     type: "text",
    //   });
    // }
    // msgRef.on("value", function(snapshot) {
    //   const val = snapshot.val();
    //   vm.actions = val;
    // });
  },
  methods: {
    _finish() {
      this.show = false;
      this.finish = true;
    }
  }
};
</script>

<style>
</style>
