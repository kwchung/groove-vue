<template>
    <v-container>
        <v-layout>
            <v-flex>
                <v-card>
                    <ve-line :data="chartData" height="35vh" :settings="chartSettings"></ve-line>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
  data() {
    return {
      chartData: {
        columns: ['次數', '速度'],
        rows: [
          { 次數: '1', 速度: 0.55 },
          { 次數: '2', 速度: 0.57 },
          { 次數: '3', 速度: 0.52 },
          { 次數: '4', 速度: 0.54 },
          { 次數: '5', 速度: 0.53 },
          { 次數: '6', 速度: 0.41 },
          { 次數: '7', 速度: 0.45 },
          { 次數: '8', 速度: 0.42 },
          { 次數: '9', 速度: 0.47 },
          { 次數: '10', 速度: 0.43 },
          { 次數: '11', 速度: 0.42 },
          { 次數: '12', 速度: 0.32 },
          { 次數: '13', 速度: 0.37 },
          { 次數: '14', 速度: 0.45 },
          { 次數: '15', 速度: 0.49 },
        ],
      },
    };
  },
};
</script>

<style>
</style>
