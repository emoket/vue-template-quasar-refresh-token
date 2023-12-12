<template>
  <div>
    <q-card class="no-shadow" bordered>
      <q-card-section class="text-h6"> Pie Chart </q-card-section>
      <q-card-section>
        <VChart
          :option="option"
          class="q-mt-md"
          :resizable="true"
          autoresize
          style="height: 285px"
        />
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup lang="ts">
import { use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { PieChart } from 'echarts/charts';
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
} from 'echarts/components';
import VChart, { THEME_KEY } from 'vue-echarts';
import { ref, provide } from 'vue';

use([
  CanvasRenderer,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
]);

provide(THEME_KEY, 'light');

const option = ref({
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b}: {c} ({d}%)',
  },
  legend: {
    top: 'bottom',
    bottom: '5%',
    left: 'center',
  },
  series: [
    {
      name: 'Access source',
      type: 'pie',
      radius: ['40%', '70%'],
      center: ['50%', '35%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 2,
      },
      label: {
        show: false,
        position: 'center',
      },
      emphasis: {
        label: {
          show: true,
          fontSize: '40',
          fontWeight: 'bold',
        },
      },
      labelLine: {
        show: false,
      },
      data: [
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct access' },
        { value: 580, name: 'Email marketing' },
        { value: 484, name: 'Affiliate Advertising' },
        { value: 300, name: 'Video ad' },
      ],
    },
  ],
});
</script>

<style scoped></style>
