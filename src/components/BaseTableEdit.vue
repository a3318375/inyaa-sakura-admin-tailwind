<script setup>
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { XIcon } from '@heroicons/vue/outline'
import { sysApi } from '~/api/sys'
const props = defineProps({
  isCreate: Boolean,
  formColumns: Array,
  datas: Object,
})

const open = ref(false)
const blogInfo = ref({
  isHot: false,
  isComment: true,
  status: true,
  context: '',
})
function saveInfo() {
  console.log(111111112222, blogInfo)
}
const openEdit = async (id, url) => {
  open.value = true
  if (id) {
    const infoResp = await sysApi.getByUrl(url, { id })
    blogInfo.value = infoResp.data
    blogInfo.value.context = infoResp.data.article.context
  }
  initData()
}
async function initData() {
  for (const item of props.formColumns) {
    if (item.fieldType === 2) {
      item.apiData = []
      if (item.apiConfig.method && item.apiConfig.method === 'post') {
        const fieldApiResp = await sysApi.postByUrl(item.url)
        if (fieldApiResp && fieldApiResp.code === 200)
          item.apiData = fieldApiResp.data
      }
      else {
        const fieldApiResp = await sysApi.getByUrl(item.apiConfig.url)
        if (fieldApiResp && fieldApiResp.code === 200)
          item.apiData = fieldApiResp.data
      }
    }
  }
}
defineExpose({
  openEdit,
})
</script>

<template>
  <div>
    <TransitionRoot as="template" :show="open">
      <Dialog as="div" class="relative z-10" @close="open = false">
        <div class="fixed inset-0" />

        <div class="fixed inset-0 overflow-hidden">
          <div class="absolute inset-0 overflow-hidden">
            <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
              <TransitionChild as="template" enter="transform transition ease-in-out duration-500 sm:duration-700" enter-from="translate-x-full" enter-to="translate-x-0" leave="transform transition ease-in-out duration-500 sm:duration-700" leave-from="translate-x-0" leave-to="translate-x-full">
                <DialogPanel class="pointer-events-auto w-screen max-w-2xl">
                  <form class="flex h-full flex-col divide-y divide-gray-200 bg-white shadow-xl">
                    <div class="h-0 flex-1 overflow-y-auto">
                      <div class="bg-indigo-700 py-6 px-4 sm:px-6">
                        <div class="flex items-center justify-between">
                          <DialogTitle class="text-lg font-medium text-white">
                            New Project
                          </DialogTitle>
                          <div class="ml-3 flex h-7 items-center">
                            <button type="button" class="rounded-md bg-indigo-700 text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white" @click="open = false">
                              <span class="sr-only">Close panel</span>
                              <XIcon class="h-6 w-6" aria-hidden="true" />
                            </button>
                          </div>
                        </div>
                        <div class="mt-1">
                          <p class="text-sm text-indigo-300">
                            Get started by filling in the information below to create your new project.
                          </p>
                        </div>
                      </div>
                      <div class="flex flex-1 flex-col justify-between">
                        <div class="divide-y divide-gray-200 px-4 sm:px-6">
                          <div class="space-y-6 pt-6 pb-5">
                            <div v-for="(item, index) in props.formColumns" :key="index">
                              <label :for="item.field" class="block text-sm font-medium text-gray-900"> {{ item.label }} </label>
                              <div class="mt-1">
                                <input v-if="item.fieldType === 0" :id="item.field" v-model="blogInfo[item.field]" type="text" name="project-name" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                <v-md-editor v-if="item.fieldType === 1" :id="item.field" v-model="blogInfo[item.field]" height="400px" class="block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                                <BaseTableSearchSelect v-if="item.fieldType === 2" :ref="blogInfo[item.field]" :field="item.field" :datas="item.apiData" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="flex flex-shrink-0 justify-end px-4 py-4">
                      <button type="button" class="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" @click="open = false">
                        Cancel
                      </button>
                      <button type="button" class="ml-4 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" @click="saveInfo">
                        Save
                      </button>
                    </div>
                  </form>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </div>
</template>
