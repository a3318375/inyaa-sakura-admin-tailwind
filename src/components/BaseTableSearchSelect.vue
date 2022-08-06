<script setup>
import { Listbox, ListboxButton, ListboxLabel, ListboxOption, ListboxOptions } from '@headlessui/vue'
import { CheckIcon, SelectorIcon } from '@heroicons/vue/solid'
const props = defineProps({
  field: String,
  datas: Array,
})
console.log(3333, props.datas)
const baseSelectValue = ref({})
defineExpose({
  baseSelectValue,
})
if (props.datas)
  baseSelectValue.va = props.datas[0]
</script>

<template>
  <div>
    <Listbox v-model="baseSelectValue" as="div">
      <div class="mt-1 relative">
        <ListboxButton class="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
          <span class="block truncate">{{ baseSelectValue.name }}</span>
          <span class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <SelectorIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
          </span>
        </ListboxButton>

        <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
          <ListboxOptions class="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
            <ListboxOption v-for="person in props.datas" :key="person.id" v-slot="{ active, selected }" as="template" :value="person">
              <li class="cursor-default select-none relative py-2 pl-8 pr-4" :class="[active ? 'text-white bg-indigo-600' : 'text-gray-900']">
                <span class="block truncate" :class="[selected ? 'font-semibold' : 'font-normal']">
                  {{ person.name }}
                </span>

                <span v-if="selected" class="absolute inset-y-0 left-0 flex items-center pl-1.5" :class="[active ? 'text-white' : 'text-indigo-600']">
                  <CheckIcon class="h-5 w-5" aria-hidden="true" />
                </span>
              </li>
            </ListboxOption>
          </ListboxOptions>
        </transition>
      </div>
    </Listbox>
  </div>
</template>
