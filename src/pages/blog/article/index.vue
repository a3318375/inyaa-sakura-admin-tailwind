<script setup>
import { columns, formColumns, visibleColumns } from './article.data'
import { blogApi } from '~/api/blog'
const tableDatas = ref([])
async function findDatas(pageParams) {
  if (!pageParams)
    pageParams = { size: 7 }
  const resp = await blogApi.findBlogListPage(pageParams)
  if (resp.code === 200)
    tableDatas.value = resp.data.content
}
const tableParams = ref({
  columns,
  formColumns,
  visibleColumns,
  datas: tableDatas,
  infoUrl: '/blog/info',
  pages: false,
  pagination: {
    sortBy: 'desc',
    descending: false,
    page: 1,
    rowsPerPage: 10,
    rowsNumber: 10,
  },
})
findDatas()
</script>

<template>
  <div>
    <BaseTable :datas="tableParams" />
  </div>
</template>

<route lang="yaml">
meta:
  layout: tailwind
  title: 博客列表
  keepAlive: true
</route>
