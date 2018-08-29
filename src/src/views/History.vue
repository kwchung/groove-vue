<template>
    <v-container>
        <v-layout>
            <v-flex>
                <v-date-picker
                    full-width
                    scrollable
                    @input="eventSelect"
                    v-model="history"
                    :events="historyEvents"
                    :event-color="date => date[9] % 2 ? 'red' : 'yellow'"
                ></v-date-picker>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
  data() {
    return {
      history: null,
      historyEvents: null,
    };
  },
  mounted() {
    this.historyEvents = [...Array(6)].map(() => {
      const day = Math.floor(Math.random() * 30);
      const d = new Date();
      d.setDate(day);
      return d.toISOString().substr(0, 10);
    });
  },
  methods: {
    eventSelect() {
      this.$router.push({
        name: 'HistoryList',
        params: {
          date: this.history,
        },
      });
    },
  },
};
</script>

<style>
</style>
