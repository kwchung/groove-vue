<template>
    <v-container grid-list-md text-xs-center>
        <v-layout row wrap align-start justify-center>
            <v-flex xs6>
                <v-btn class="blue darken-4 white--text" large @click="_se()">肌肥大</v-btn>
            </v-flex>
            <v-flex xs6>
                <v-btn class="blue darken-2 white--text" large @click="_hy()">肌耐力</v-btn>
            </v-flex>
            <v-flex xs6>
                <v-btn class="blue darken-1 white--text" large @click="_ms()">肌力</v-btn>
            </v-flex>
            <v-flex xs6>
                <v-btn class="blue lighten-3 white--text" large @click="_power()">爆發力</v-btn>
            </v-flex>
            <v-flex xs12>
                <v-layout row>
                    <v-flex xs6>
                        <v-subheader style="padding-top: 20px; font-size: 17px;">今日最大肌力</v-subheader>
                    </v-flex>
                    <v-flex xs6>
                        <v-text-field
                            :value="rm"
                            type="number"
                            suffix="公斤"
                        ></v-text-field>
                    </v-flex>
                </v-layout>
            </v-flex>
            <v-flex xs12>
                <v-layout row>
                    <v-flex xs4>
                        <h3 class="mb-2">組數</h3>
                        <scroll-picker :options="set" />
                    </v-flex>
                    <v-flex xs4>
                        <h3 class="mb-2">次數</h3>
                        <scroll-picker :options="repetition" />
                    </v-flex>
                    <v-flex xs4>
                        <h3 class="mb-2">重量</h3>
                        <scroll-picker :options="load" />
                    </v-flex>
                </v-layout>
            </v-flex>
            <v-flex xs12>
                <v-btn color="success" @click="$router.push('/start')">開始</v-btn>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
  data() {
    return {
      rm: 70,
      set: [
        { value: 1, name: "1" },
        { value: 2, name: "2" },
        { value: 3, name: "3" },
        { value: 4, name: "4" },
        { value: 5, name: "5" },
        { value: 6, name: "6" },
        { value: 7, name: "7" }
      ],
      repetition: [
        { value: 1, name: "1" },
        { value: 2, name: "2" },
        { value: 3, name: "3" },
        { value: 4, name: "4" },
        { value: 5, name: "5" },
        { value: 6, name: "6" },
        { value: 7, name: "7" },
        { value: 8, name: "8" },
        { value: 9, name: "9" },
      ],
      load: [
        { value: 40, name: "40KG" },
        { value: 50, name: "50KG" },
        { value: 60, name: "60KG" },
        { value: 70, name: "70KG" },
        { value: 80, name: "80KG" },
        { value: 90, name: "90KG" },
        { value: 100, name: "100KG" },
      ]
    };
  },
  methods: {
    _se() {
      this.set = [];
      this.repetition = [];
      this.load = [];
      for (let rep = 12; rep <= 40; rep++) {
        this.repetition.push({
          value: rep,
          name: `${rep}`
        });
      }
      for (let set = 2; set <= 3; set++) {
        this.set.push({
          value: set,
          name: `${set}`
        });
      }
      for (let load = 67; load > 0; load -= 10) {
        this.load.push({
          value: load,
          name: `${load}KG`
        });
      }
    },
    _hy() {
      this.set = [];
      this.repetition = [];
      this.load = [];
      for (let rep = 6; rep <= 12; rep++) {
        this.repetition.push({
          value: rep,
          name: `${rep}`
        });
      }
      for (let set = 3; set <= 6; set++) {
        this.set.push({
          value: set,
          name: `${set}`
        });
      }
      for (let load = 67; load <= 85; load += 10) {
        this.load.push({
          value: load,
          name: `${load}KG`
        });
      }
    },
    _ms() {
      this.set = [];
      this.repetition = [];
      this.load = [];
      for (let rep = 1; rep <= 6; rep++) {
        this.repetition.push({
          value: rep,
          name: `${rep}`
        });
      }
      for (let set = 2; set <= 6; set++) {
        this.set.push({
          value: set,
          name: `${set}`
        });
      }
      for (let load = 85; load <= 200; load += 10) {
        this.load.push({
          value: load,
          name: `${load}KG`
        });
      }
    },
    _power() {
      this.set = [];
      this.repetition = [];
      this.load = [];
      for (let rep = 1; rep <= 2; rep++) {
        this.repetition.push({
          value: rep,
          name: `${rep}`
        });
      }
      for (let set = 3; set <= 5; set++) {
        this.set.push({
          value: set,
          name: `${set}`
        });
      }
      for (let load = 80; load <= 90; load += 10) {
        this.load.push({
          value: load,
          name: `${load}KG`
        });
      }
    }
  }
};
</script>

<style lang="scss">
.vue-scroll-picker-item-placeholder.-selected {
  color: #17a2b8;
}
.vie-scroll-picker-layer {
  .top {
    height: 38%;
  }
  .bottom {
    height: 38%;
  }
}
.vue-scroll-picker-item {
  font-size: 2rem;
}
.vue-scroll-picker-item.-selected {
  color: #007bff;
}
.blue.white--text.v-btn.v-btn--large {
  height: 10rem;
  width: 100%;
}
</style>
