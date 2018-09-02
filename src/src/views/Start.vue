<template>
    <v-container grid-list-md text-xs-center>
        <v-layout row wrap>
            <v-flex xs12>
                <v-card>
                        <v-container grid-list-md text-xs-center>
        <v-layout row wrap>

                    <v-flex xs12>
                        <h1>深蹲 - 爆發力</h1>
                        <h2>負重<span style="font-size: 3rem;">{{ load }}</span>公斤</h2>
                    </v-flex>
                    <v-flex xs6>
                        <span class="g-word">組數</span>
                        <v-progress-circular
                        :rotate="180"
                        :size="100"
                        :width="15"
                        :value="cCurrentSet"
                        color="teal"
                        >
                        {{ currentSet }}/{{ totalSet }}
                        </v-progress-circular>
                    </v-flex>
                    <v-flex xs6>
                        <span class="g-word">次數</span>
                        <v-progress-circular
                        :rotate="180"
                        :size="140"
                        :width="15"
                        :value="cCurrentRep"
                        color="primary"
                        >
                        {{ currentRep }}/{{ totalRep }}
                        </v-progress-circular>
                    </v-flex>
        </v-layout>
                        </v-container>

                </v-card>
            </v-flex>
            <v-flex xs12>
                <v-card>
                    <ve-line :data="chartData" height="35vh" :settings="chartSettings"></ve-line>
                </v-card>
            </v-flex>
            <v-flex xs12>
                <v-btn color="success" @click="$router.push('/purpose')">繼續</v-btn>
                <v-btn color="primary" @click="$router.push('/action')">完成</v-btn>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
  data() {
    this.chartSettings = {
        // stack: { '用户': ['访问用户', '下单用户'] },
        // area: true,
    }
    return {
      load: 70,
      cCurrentSet: 50,
      currentSet: 1,
      totalSet: 2,
      cCurrentRep: 36,
      currentRep: 6,
      totalRep: 15,
      interval: {},
      chartData: {
          columns: ['次數', '速度'],
          rows: [
            { '次數': '1', '速度': 0.55 },
            { '次數': '2', '速度': 0.57 },
            { '次數': '3', '速度': 0.52 },
            { '次數': '4', '速度': 0.54 },
            { '次數': '5', '速度': 0.53 },
            { '次數': '6', '速度': 0.41 },
            // { '次數': '7', '速度': 0.45 },
            // { '次數': '8', '速度': 0.42 },
            // { '次數': '9', '速度': 0.47 },
            // { '次數': '10', '速度': 0.43 },
            // { '次數': '11', '速度': 0.42 },
            // { '次數': '12', '速度': 0.32 },
            // { '次數': '13', '速度': 0.37 },
            // { '次數': '14', '速度': 0.45 },
            // { '次數': '15', '速度': 0.49 },
          ]
        }
    };
  },
  beforeDestroy() {
    // clearInterval(this.interval);
  },
  mounted() {
    // this.interval = setInterval(() => {
    //   if (this.currentSet === this.totalSet) {
    //     return (this.currentSet = this.cCurrentSet = 0);
    //   }
    //   this.currentSet += 1;
    //   this.cCurrentSet = (this.currentSet / this.totalSet) * 100;
    // }, 1000);
  }
};
</script>

<style scope lang="scss">
.g-word{
    position: absolute;
}
.v-progress-circular {
  margin: 1rem;
}
</style>
