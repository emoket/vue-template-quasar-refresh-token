<template>
  <q-page class="q-pa-sm">
    <div class="row q-col-gutter-sm q-py-sm">
      <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <BarChart />
      </div>
      <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <LineChart />
      </div>
      <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <ScatterPlot />
      </div>
      <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <PieChart />
      </div>
      <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <AreaChart />
      </div>
      <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <GuageChart />
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue';

const PieChart = defineAsyncComponent(
  () => import('@/components/charts/PieChart.vue'),
);
const ScatterPlot = defineAsyncComponent(
  () => import('@/components/charts/ScatterPlot.vue'),
);
const LineChart = defineAsyncComponent(
  () => import('@/components/charts/LineChart.vue'),
);
const BarChart = defineAsyncComponent(
  () => import('@/components/charts/BarChart.vue'),
);
const AreaChart = defineAsyncComponent(
  () => import('@/components/charts/AreaChart.vue'),
);
const GuageChart = defineAsyncComponent(
  () => import('@/components/charts/GuageChart.vue'),
);
</script>

<style scoped></style>
