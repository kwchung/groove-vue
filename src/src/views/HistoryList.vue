<template>
  <v-list two-line subheader>
    <v-subheader>{{ `${$route.params.date} 訓練紀錄` }}</v-subheader>
    <template v-for="(item, index) in items">
      <v-list-tile
        :key="item.id"
        avatar
        ripple
        @click="goDetail(item.id)"
      >
        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          <v-list-tile-sub-title class="text--primary">{{ item.headline }}</v-list-tile-sub-title>
          <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
        </v-list-tile-content>

        <v-list-tile-action>
          <v-list-tile-action-text>{{ item.action }}</v-list-tile-action-text>
          <v-icon>fas fa-angle-right</v-icon>
        </v-list-tile-action>

      </v-list-tile>
      <v-divider
        v-if="index + 1 < items.length"
        :key="index"
      ></v-divider>
    </template>
  </v-list>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          id: '754e83d7-5db8-4cea-8773-96bd234e8e55',
          action: '15 min',
          headline: '肌耐力',
          title: '硬舉',
          subtitle: '5組 10次 70公斤',
        },
        {
          id: 'dd379793-4eee-4202-bc69-60c2a726e1af',
          action: '2 min',
          headline: '爆發力',
          title: '深蹲',
          subtitle: '1組 13次 80公斤',
        },
        {
          id: '283029c6-6101-4dba-81de-e5509dfee68d',
          action: '6 min',
          headline: '肌肥大',
          title: '臥推',
          subtitle: '5組 10次 90公斤',
        },
        {
          id: '33f9fca1-201c-45ce-97af-9b4431112c4d',
          action: '12 min',
          headline: '肌力',
          title: '硬舉',
          subtitle: '3組 20次 70公斤',
        },
        {
          id: 'a4421c8c-353f-44f1-9fff-aad41a4415ad',
          action: '18 min',
          headline: '肌耐力',
          title: '硬舉',
          subtitle: '2組 15次 80公斤',
        },
      ],
    };
  },
  methods: {
    goDetail(id) {
      this.$router.push({
        name: 'HistoryDetail',
        params: {
          id: id,
        },
      });
    },
  },
};
</script>

<style>
</style>
