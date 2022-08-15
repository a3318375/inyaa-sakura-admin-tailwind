<!-- This example requires Tailwind CSS v2.0+ -->
<script setup>
import { ref } from 'vue'
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/vue'
import { SelectorIcon, XIcon } from '@heroicons/vue/solid'
const route = useRoute()
const { tagList } = useTagStore()

const selected = ref(tagList[0])
const myClose = () => {
  console.log('close', 1111111)
}
const myClick = () => {
  console.log('myclick', 22222)
}
</script>

<template>
  <Listbox v-model="selected" as="div">
    <div class="mt-1 relative pl-2">
      <ListboxButton class="bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
        <span class="block truncate">{{ selected.title }}</span>
        <span class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
          <SelectorIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
        </span>
      </ListboxButton>

      <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
        <ListboxOptions class="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
          <ListboxOption v-for="person in tagList" :key="person.name" v-slot="{ active, selected }" as="template" :value="person" @click="myClick">
            <li class="cursor-default select-none relative py-2 pl-3 pr-9" :class="[active ? 'text-white bg-indigo-600' : 'text-gray-900']">
              <span class="block truncate" :class="[selected ? 'font-semibold' : 'font-normal']">
                {{ person.title }}
              </span>

              <button class="absolute inset-y-0 right-0 flex items-center pr-4" @click="myClose">
                <XIcon class="h-5 w-5" aria-hidden="true" />
              </button>
            </li>
          </ListboxOption>
        </ListboxOptions>
      </transition>
    </div>
  </Listbox>
</template>
