<!-- This example requires Tailwind CSS v2.0+ -->
<script setup>
import { ArrowSmDownIcon, ArrowSmUpIcon } from '@heroicons/vue/solid'
import { CountTo } from 'vue3-count-to'
import { use } from 'echarts/core'
import { LineChart } from 'echarts/charts'
import { GridComponent, TitleComponent, TooltipComponent, VisualMapComponent } from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'
import VChart from 'vue-echarts'
import { option } from './index'
use([TitleComponent, CanvasRenderer, GridComponent, LineChart, VisualMapComponent, TooltipComponent])
const stats = [
  { name: '网站浏览量', stat: 71897, previousStat: '70,946', change: '12%', changeType: 'increase' },
  { name: '文章浏览量', stat: 71897, previousStat: '70,946', change: '2.02%', changeType: 'increase' },
  { name: '评论数', stat: 71897, previousStat: '70,946', change: '4.05%', changeType: 'decrease' },
]
</script>

<template>
  <div>
    <div class="mt-2">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-lg leading-6 font-medium text-gray-900">
          最近30天
        </h2>
        <div class="mt-2 grid grid-cols-1 gap-5 rounded-lg bg-white shadow divide-y divide-gray-200 sm:grid-cols-2 lg:grid-cols-3 md:divide-y-0 md:divide-x">
          <!-- Card -->
          <div v-for="item in stats" :key="item.name" class="px-4 py-5 sm:p-6">
            <dt class="text-base font-normal text-gray-900">
              {{ item.name }}
            </dt>
            <dd class="mt-1 flex justify-between items-baseline md:block lg:flex">
              <div class="flex items-baseline text-2xl font-semibold text-indigo-600">
                <CountTo :start-val="0" :end-val="item.stat" :duration="1500" />
                <span class="ml-2 text-sm font-medium text-gray-500"> from {{ item.previousStat }} </span>
              </div>

              <div class="inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium md:mt-2 lg:mt-0" :class="[item.changeType === 'increase' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800']">
                <ArrowSmUpIcon v-if="item.changeType === 'increase'" class="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-green-500" aria-hidden="true" />
                <ArrowSmDownIcon v-else class="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-red-500" aria-hidden="true" />
                <span class="sr-only"> {{ item.changeType === 'increase' ? 'Increased' : 'Decreased' }} by </span>
                {{ item.change }}
              </div>
            </dd>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-8 h-600px">
      <VChart :option="option" autoresize />
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: tailwind
  title: 首页
  keepAlive: true
</route>
