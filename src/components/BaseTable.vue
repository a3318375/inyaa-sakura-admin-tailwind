<script setup lang="ts">
const props = defineProps({
  datas: Object,
})
const editOpen = ref<any>()
const columns = props.datas.columns
const formColumns = props.datas.formColumns

const openEdit = () => {
  editOpen.value.openEdit()
}
</script>

<template>
  <div>
    <div class="px-4 sm:px-6 lg:px-8">
      <div class="sm:flex sm:items-center">
        <div class="sm:flex-auto">
          <h1 class="text-xl font-semibold text-gray-900">
            Users
          </h1>
          <p class="mt-2 text-sm text-gray-700">
            A list of all the users in your account including their name, title, email and role.
          </p>
        </div>
        <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <button type="button" class="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">
            Add user
          </button>
        </div>
      </div>
      <div class="mt-8 flex flex-col">
        <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div class="flex justify-between items-center pb-4">
              <label for="table-search" class="sr-only">Search</label>
              <div class="relative">
                <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" /></svg>
                </div>
                <input id="table-search" type="text" class="block p-2 pl-10 w-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for items">
              </div>
              <BaseFieldShow />
            </div>
            <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table class="min-w-full table-auto divide-y divide-gray-300">
                <thead class="bg-gray-50">
                  <tr>
                    <th v-for="(column, cIndex) in columns" :key="cIndex" scope="col" :class="column.class" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 break-all">
                      {{ column.label }}
                    </th>
                    <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6">
                      <span class="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200 bg-white">
                  <tr v-for="(blog, index) in props.datas.datas" :key="index">
                    <td v-for="(column, cIndex) in columns" :key="cIndex" :class="column.class" class="px-3 py-4 text-sm text-gray-500">
                      {{ blog[column.field] }}
                    </td>
                    <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                      <a href="javascript:void(0)" class="text-indigo-600 hover:text-indigo-900" @click="openEdit">Edit<span class="sr-only">, {{ blog.title }}</span></a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <BasePagination />
    </div>
    <BaseTableEdit ref="editOpen" :form-columns="formColumns" />
  </div>
</template>
