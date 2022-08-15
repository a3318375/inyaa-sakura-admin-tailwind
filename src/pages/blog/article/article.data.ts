export const visibleColumns = ref(['title', 'desc', 'status', 'views', 'comments', 'type', 'calcium', 'createTime', 'btn'])

export const columns = [
  { name: 'title', align: 'left', label: '标题', field: 'title', class: 'w-80', check: true, isParams: true, paramsType: 0 },
  { name: 'status', align: 'center', label: '发布状态', field: 'status', check: true, sortable: true },
  { name: 'views', align: 'center', label: '访问量', field: 'views', check: true },
  { name: 'comments', align: 'center', label: '评论量', field: 'comments', check: true },
  { name: 'type', align: 'center', label: '分类', field: 'type', check: true },
  { name: 'calcium', align: 'center', label: '标签', field: 'calcium', check: true },
  { name: 'createTime', align: 'center', label: '发布时间', field: 'createTime', check: true, sortable: true },
]

export const formColumns = [
  {
    field: 'title',
    label: '标题',
    fieldType: 0,
    ruleType: 0,
  },
  {
    field: 'type',
    label: '分类',
    fieldType: 2,
    apiConfig: {
      url: 'type/list',
      valueField: 'id',
      labelField: 'name',
    },
  },
  {
    field: 'context',
    label: '文章',
    fieldType: 1,
  },
]
