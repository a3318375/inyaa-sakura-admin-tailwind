<script setup>
import { ref } from 'vue'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'
import { ChevronDownIcon, ChevronUpIcon, ClockIcon, HomeIcon, MenuAlt1Icon, ViewListIcon, XIcon } from '@heroicons/vue/outline'
import { ChevronRightIcon, DotsVerticalIcon, SearchIcon, SelectorIcon } from '@heroicons/vue/solid'

const navigation = [
  { name: 'Home', href: '#', icon: HomeIcon, current: true },
  { name: 'My tasks', href: '#', icon: ViewListIcon, current: false },
  { name: 'Recent', href: '#', icon: ClockIcon, current: false },
]
const teams = [
  { name: 'Engineering', href: '#', bgColorClass: 'bg-indigo-500' },
  { name: 'Human Resources', href: '#', bgColorClass: 'bg-green-500' },
  { name: 'Customer Success', href: '#', bgColorClass: 'bg-yellow-500' },
]
const pages = [
  { name: 'Projects', href: '#', current: false },
  { name: 'Project Nero', href: '#', current: true },
]
const projects = [
  {
    id: 1,
    title: 'GraphQL API',
    initials: 'GA',
    team: 'Engineering',
    members: [
      {
        name: 'Dries Vincent',
        handle: 'driesvincent',
        imageUrl:
          'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        name: 'Lindsay Walton',
        handle: 'lindsaywalton',
        imageUrl:
          'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        name: 'Courtney Henry',
        handle: 'courtneyhenry',
        imageUrl:
          'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        name: 'Tom Cook',
        handle: 'tomcook',
        imageUrl:
          'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    ],
    totalMembers: 12,
    lastUpdated: 'March 17, 2020',
    pinned: true,
    bgColorClass: 'bg-pink-600',
  },
  // More projects...
]
const pinnedProjects = projects.filter(project => project.pinned)

const sidebarOpen = ref(false)

const navigation2 = [
  { name: 'Dashboard', href: '#', current: true, icon: HomeIcon },
  {
    name: 'Team',
    current: false,
    icon: HomeIcon,
    children: [
      { name: 'Overview', href: '#', icon: HomeIcon },
      { name: 'Members', href: '#', icon: ViewListIcon },
      { name: 'Calendar', href: '#', icon: HomeIcon },
      { name: 'Settings', href: '#', icon: ViewListIcon },
    ],
  },
  {
    name: 'Projects',
    current: false,
    icon: HomeIcon,
    children: [
      { name: 'Overview', href: '#', icon: HomeIcon },
      { name: 'Members', href: '#', icon: ViewListIcon },
      { name: 'Calendar', href: '#', icon: HomeIcon },
      { name: 'Settings', href: '#', icon: ViewListIcon },
    ],
  },
  {
    name: 'Calendar',
    current: false,
    icon: HomeIcon,
    children: [
      { name: 'Overview', href: '#', icon: HomeIcon },
      { name: 'Members', href: '#', icon: ViewListIcon },
      { name: 'Calendar', href: '#', icon: HomeIcon },
      { name: 'Settings', href: '#', icon: ViewListIcon },
    ],
  },
  {
    name: 'Documents',
    current: false,
    icon: HomeIcon,
    children: [
      { name: 'Overview', href: '#', icon: ViewListIcon },
      { name: 'Members', href: '#', icon: HomeIcon },
      { name: 'Calendar', href: '#', icon: ViewListIcon },
      { name: 'Settings', href: '#', icon: HomeIcon },
    ],
  },
  {
    name: 'Reports',
    current: false,
    icon: HomeIcon,
    children: [
      { name: 'Overview', href: '#', icon: HomeIcon },
      { name: 'Members', href: '#', icon: ViewListIcon },
      { name: 'Calendar', href: '#', icon: HomeIcon },
      { name: 'Settings', href: '#', icon: ViewListIcon },
    ],
  },
]
const tabs = [
  { name: 'My Account', href: '#', current: false },
  { name: 'Company', href: '#', current: false },
  { name: 'Team Members', href: '#', current: true },
  { name: 'Billing', href: '#', current: false },
]
</script>

<template>
  <!--
    This example requires updating your template:

    ```
    <html class="h-full bg-white">
    <body class="h-full">
    ```
  -->
  <div class="min-h-full">
    <TransitionRoot as="template" :show="sidebarOpen">
      <Dialog as="div" class="relative z-40 lg:hidden" @close="sidebarOpen = false">
        <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100" leave-to="opacity-0">
          <div class="fixed inset-0 bg-gray-600 bg-opacity-75" />
        </TransitionChild>

        <div class="fixed inset-0 flex z-40">
          <TransitionChild as="template" enter="transition ease-in-out duration-300 transform" enter-from="-translate-x-full" enter-to="translate-x-0" leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0" leave-to="-translate-x-full">
            <DialogPanel class="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-white">
              <TransitionChild as="template" enter="ease-in-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in-out duration-300" leave-from="opacity-100" leave-to="opacity-0">
                <div class="absolute top-0 right-0 -mr-12 pt-2">
                  <button type="button" class="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" @click="sidebarOpen = false">
                    <span class="sr-only">Close sidebar</span>
                    <XIcon class="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </TransitionChild>
              <div class="flex-shrink-0 flex items-center px-4">
                <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-purple-500-mark-gray-700-text.svg" alt="Workflow">
              </div>
              <div class="mt-5 flex-1 h-0 overflow-y-auto">
                <nav class="px-2">
                  <div class="space-y-1">
                    <a v-for="item in navigation" :key="item.name" :href="item.href" class="group flex items-center px-2 py-2 text-base leading-5 font-medium rounded-md" :class="[item.current ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50']" :aria-current="item.current ? 'page' : undefined">
                      <component :is="item.icon" class="mr-3 flex-shrink-0 h-6 w-6" :class="[item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500']" aria-hidden="true" />
                      {{ item.name }}
                    </a>
                  </div>
                  <div class="mt-8">
                    <h3 id="mobile-teams-headline" class="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Teams
                    </h3>
                    <div class="mt-1 space-y-1" role="group" aria-labelledby="mobile-teams-headline">
                      <a v-for="team in teams" :key="team.name" :href="team.href" class="group flex items-center px-3 py-2 text-base leading-5 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">
                        <span class="w-2.5 h-2.5 mr-4 rounded-full" :class="[team.bgColorClass]" aria-hidden="true" />
                        <span class="truncate">
                          {{ team.name }}
                        </span>
                      </a>
                    </div>
                  </div>
                </nav>
              </div>
            </DialogPanel>
          </TransitionChild>
          <div class="flex-shrink-0 w-14" aria-hidden="true">
            <!-- Dummy element to force sidebar to shrink to fit close icon -->
          </div>
        </div>
      </Dialog>
    </TransitionRoot>

    <!-- Static sidebar for desktop -->
    <div class="hidden lg:flex lg:flex-col lg:w-64 lg:fixed lg:inset-y-0 lg:border-r lg:border-gray-200 lg:pt-5 lg:pb-4 lg:bg-gray-100">
      <div class="flex items-center flex-shrink-0 px-6">
        <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-purple-500-mark-gray-700-text.svg" alt="Workflow">
      </div>
      <!--      <div class="mt-6 h-0 flex-1 flex flex-col "> -->
      <div class="mt-6 flex flex-shrink-0 flex-col">
        <!-- User account dropdown -->
        <Menu as="div" class="px-3 relative inline-block text-left">
          <div>
            <MenuButton class="group w-full bg-gray-100 rounded-md px-3.5 py-2 text-sm text-left font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-purple-500">
              <span class="flex w-full justify-between items-center">
                <span class="flex min-w-0 items-center justify-between space-x-3">
                  <img class="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0" src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" alt="">
                  <span class="flex-1 flex flex-col min-w-0">
                    <span class="text-gray-900 text-sm font-medium truncate">Jessy Schwarz</span>
                    <span class="text-gray-500 text-sm truncate">@jessyschwarz</span>
                  </span>
                </span>
                <SelectorIcon class="flex-shrink-0 h-5 w-5 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
              </span>
            </MenuButton>
          </div>
          <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
            <MenuItems class="z-10 mx-3 origin-top absolute right-0 left-0 mt-1 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200 focus:outline-none">
              <div class="py-1">
                <MenuItem v-slot="{ active }">
                  <a href="#" class="block px-4 py-2 text-sm" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700']">View profile</a>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <a href="#" class="block px-4 py-2 text-sm" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700']">Settings</a>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <a href="#" class="block px-4 py-2 text-sm" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700']">Notifications</a>
                </MenuItem>
              </div>
              <div class="py-1">
                <MenuItem v-slot="{ active }">
                  <a href="#" class="block px-4 py-2 text-sm" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700']">Get desktop app</a>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <a href="#" class="block px-4 py-2 text-sm" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700']">Support</a>
                </MenuItem>
              </div>
              <div class="py-1">
                <MenuItem v-slot="{ active }">
                  <a href="#" class="block px-4 py-2 text-sm" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700']">Logout</a>
                </MenuItem>
              </div>
            </MenuItems>
          </transition>
        </Menu>
        <!-- Sidebar Search -->
        <div class="px-3 mt-5">
          <label for="search" class="sr-only">Search</label>
          <div class="mt-1 relative rounded-md shadow-sm">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none" aria-hidden="true">
              <SearchIcon class="mr-3 h-4 w-4 text-gray-400" aria-hidden="true" />
            </div>
            <input id="search" type="text" name="search" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-9 sm:text-sm border-gray-300 rounded-md" placeholder="Search">
          </div>
        </div>
      </div>
      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <div class="h-0 flex-1 flex flex-col overflow-y-auto" scrollbar="~ w-4px">
        <!-- Navigation -->
        <nav class="px-3 mt-6">
          <div class="space-y-1">
            <!--            <a v-for="item in navigation" :key="item.name" :href="item.href" class="group flex items-center px-2 py-2 text-sm font-medium rounded-md" :class="[item.current ? 'bg-gray-200 text-gray-900' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50']" :aria-current="item.current ? 'page' : undefined"> -->
            <!--              <component :is="item.icon" class="mr-3 flex-shrink-0 h-6 w-6" :class="[item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500']" aria-hidden="true" /> -->
            <!--              {{ item.name }} -->
            <!--            </a> -->
            <template v-for="item in navigation2" :key="item.name">
              <div v-if="!item.children">
                <a :href="item.href" class="group w-full flex items-center px-2 py-2 text-sm font-medium rounded-md" :class="[item.current ? 'bg-gray-200 text-gray-900' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50']" >
                  {{ item.name }}
                </a>
              </div>
              <Disclosure v-else v-slot="{ open }" as="div" class="space-y-1">
                <DisclosureButton class="group w-full items-center pr-2 py-2 text-left text-sm font-medium rounded-md" :class="[item.current ? 'bg-gray-200 text-gray-900' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50']" >
                  {{ item.name }}
                  <svg class="inline float-right h-5 w-5 transform group-hover:text-gray-400 transition-colors ease-in-out duration-150" :class="[open ? 'text-gray-400 rotate-90' : 'text-gray-300']" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M6 6L14 10L6 14V6Z" fill="currentColor" />
                  </svg>
                </DisclosureButton>
                <DisclosurePanel class="space-y-1">
                  <DisclosureButton v-for="subItem in item.children" :key="subItem.name" as="a" :href="subItem.href" class="group w-full flex items-center pl-10 pr-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">
                    {{ subItem.name }}
                  </DisclosureButton>
                </DisclosurePanel>
              </Disclosure>
            </template>
          </div>
          <div class="mt-8">
            <!-- Secondary navigation -->
            <h3 id="desktop-teams-headline" class="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Teams
            </h3>
            <div class="mt-1 space-y-1" role="group" aria-labelledby="desktop-teams-headline">
              <a v-for="team in teams" :key="team.name" :href="team.href" class="group flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50">
                <span class="w-2.5 h-2.5 mr-4 rounded-full" :class="[team.bgColorClass]" aria-hidden="true" />
                <span class="truncate">
                  {{ team.name }}
                </span>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
    <!-- Main column -->
    <div class="lg:pl-64 flex flex-col">
      <!-- Search header -->
      <div class="sticky top-0 z-10 flex-shrink-0 flex h-16 bg-white border-b border-gray-200 lg:hidden">
        <button type="button" class="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500 lg:hidden" @click="sidebarOpen = true">
          <span class="sr-only">Open sidebar</span>
          <MenuAlt1Icon class="h-6 w-6" aria-hidden="true" />
        </button>
        <div class="flex-1 flex justify-between px-4 sm:px-6 lg:px-8">
          <div class="flex-1 flex">
            <form class="w-full flex md:ml-0" action="#" method="GET">
              <label for="search-field" class="sr-only">Search</label>
              <div class="relative w-full text-gray-400 focus-within:text-gray-600">
                <div class="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                  <SearchIcon class="h-5 w-5" aria-hidden="true" />
                </div>
                <input id="search-field" name="search-field" class="block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-transparent focus:placeholder-gray-400 sm:text-sm" placeholder="Search" type="search">
              </div>
            </form>
          </div>
          <div class="flex items-center">
            <!-- Profile dropdown -->
            <Menu as="div" class="ml-3 relative">
              <div>
                <MenuButton class="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                  <span class="sr-only">Open user menu</span>
                  <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
                </MenuButton>
              </div>
              <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                <MenuItems class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200 focus:outline-none">
                  <div class="py-1">
                    <MenuItem v-slot="{ active }">
                      <a href="#" class="block px-4 py-2 text-sm" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700']">View profile</a>
                    </MenuItem>
                    <MenuItem v-slot="{ active }">
                      <a href="#" class="block px-4 py-2 text-sm" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700']">Settings</a>
                    </MenuItem>
                    <MenuItem v-slot="{ active }">
                      <a href="#" class="block px-4 py-2 text-sm" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700']">Notifications</a>
                    </MenuItem>
                  </div>
                  <div class="py-1">
                    <MenuItem v-slot="{ active }">
                      <a href="#" class="block px-4 py-2 text-sm" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700']">Get desktop app</a>
                    </MenuItem>
                    <MenuItem v-slot="{ active }">
                      <a href="#" class="block px-4 py-2 text-sm" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700']">Support</a>
                    </MenuItem>
                  </div>
                  <div class="py-1">
                    <MenuItem v-slot="{ active }">
                      <a href="#" class="block px-4 py-2 text-sm" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700']">Logout</a>
                    </MenuItem>
                  </div>
                </MenuItems>
              </transition>
            </Menu>
          </div>
        </div>
      </div>
      <main class="flex-1">
        <div class="sm:hidden">
          <label for="tabs" class="sr-only">Select a tab</label>
          <!-- Use an "onChange" listener to redirect the user to the selected tab URL. -->
          <select id="tabs" name="tabs" class="block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md">
            <option v-for="tab in tabs" :key="tab.name" :selected="tab.current">{{ tab.name }}</option>
          </select>
        </div>
        <div class="hidden sm:block">
          <nav class="flex space-x-4" aria-label="Tabs">
            <a v-for="tab in tabs" :key="tab.name" :href="tab.href" :class="[tab.current ? 'bg-indigo-100 text-indigo-700' : 'text-gray-500 hover:text-gray-700', 'px-3 py-2 font-medium text-sm rounded-md']" :aria-current="tab.current ? 'page' : undefined">
              {{ tab.name }}
            </a>
          </nav>
        </div>
        <nav class="bg-white border-b border-gray-200 flex" aria-label="Breadcrumb">
          <ol role="list" class="max-w-screen-xl w-full mx-auto px-4 flex space-x-4 sm:px-6 lg:px-8">
            <li class="flex">
              <div class="flex items-center">
                <a href="#" class="text-gray-400 hover:text-gray-500">
                  <HomeIcon class="flex-shrink-0 h-5 w-5" aria-hidden="true" />
                  <span class="sr-only">Home</span>
                </a>
              </div>
            </li>
            <li v-for="page in pages" :key="page.name" class="flex">
              <div class="flex items-center">
                <svg class="flex-shrink-0 w-6 h-full text-gray-200" viewBox="0 0 24 44" preserveAspectRatio="none" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
                </svg>
                <a :href="page.href" class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700" :aria-current="page.current ? 'page' : undefined">{{ page.name }}</a>
              </div>
            </li>
          </ol>
        </nav>
        <!-- Page title & actions -->
        <div class="border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <div class="flex-1 min-w-0">
            <h1 class="text-lg font-medium leading-6 text-gray-900 sm:truncate">
              Home
            </h1>
          </div>
          <div class="mt-4 flex sm:mt-0 sm:ml-4">
            <button type="button" class="order-1 ml-3 inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:order-0 sm:ml-0">
              Share
            </button>
            <button type="button" class="order-0 inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:order-1 sm:ml-3">
              Create
            </button>
          </div>
        </div>
        <!-- Pinned projects -->
        <div class="px-4 mt-6 sm:px-6 lg:px-8">
          <h2 class="text-gray-500 text-xs font-medium uppercase tracking-wide">
            Pinned Projects
          </h2>
          <ul role="list" class="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 xl:grid-cols-4 mt-3">
            <li v-for="project in pinnedProjects" :key="project.id" class="relative col-span-1 flex shadow-sm rounded-md">
              <div class="flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md" :class="[project.bgColorClass]">
                {{ project.initials }}
              </div>
              <div class="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
                <div class="flex-1 px-4 py-2 text-sm truncate">
                  <a href="#" class="text-gray-900 font-medium hover:text-gray-600">
                    {{ project.title }}
                  </a>
                  <p class="text-gray-500">
                    {{ project.totalMembers }} Members
                  </p>
                </div>
                <Menu as="div" class="flex-shrink-0 pr-2">
                  <MenuButton class="w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                    <span class="sr-only">Open options</span>
                    <DotsVerticalIcon class="w-5 h-5" aria-hidden="true" />
                  </MenuButton>
                  <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                    <MenuItems class="z-10 mx-3 origin-top-right absolute right-10 top-3 w-48 mt-1 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200 focus:outline-none">
                      <div class="py-1">
                        <MenuItem v-slot="{ active }">
                          <a href="#" class="block px-4 py-2 text-sm" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700']">View</a>
                        </MenuItem>
                      </div>
                      <div class="py-1">
                        <MenuItem v-slot="{ active }">
                          <a href="#" class="block px-4 py-2 text-sm" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700']">Removed from pinned</a>
                        </MenuItem>
                        <MenuItem v-slot="{ active }">
                          <a href="#" class="block px-4 py-2 text-sm" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700']">Share</a>
                        </MenuItem>
                      </div>
                    </MenuItems>
                  </transition>
                </Menu>
              </div>
            </li>
          </ul>
        </div>

        <!-- Projects list (only on smallest breakpoint) -->
        <div class="mt-10 sm:hidden">
          <div class="px-4 sm:px-6">
            <h2 class="text-gray-500 text-xs font-medium uppercase tracking-wide">
              Projects
            </h2>
          </div>
          <ul role="list" class="mt-3 border-t border-gray-200 divide-y divide-gray-100">
            <li v-for="project in projects" :key="project.id">
              <a href="#" class="group flex items-center justify-between px-4 py-4 hover:bg-gray-50 sm:px-6">
                <span class="flex items-center truncate space-x-3">
                  <span class="w-2.5 h-2.5 flex-shrink-0 rounded-full" :class="[project.bgColorClass]" aria-hidden="true" />
                  <span class="font-medium truncate text-sm leading-6">
                    {{ project.title }}
                    {{ ' ' }}
                    <span class="truncate font-normal text-gray-500">in {{ project.team }}</span>
                  </span>
                </span>
                <ChevronRightIcon class="ml-4 h-5 w-5 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
              </a>
            </li>
          </ul>
        </div>

        <!-- Projects table (small breakpoint and up) -->
        <div class="hidden mt-8 sm:block">
          <div class="align-middle inline-block min-w-full border-b border-gray-200">
            <table class="min-w-full">
              <thead>
                <tr class="border-t border-gray-200">
                  <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" scope="col">
                    <span class="lg:pl-2">Project</span>
                  </th>
                  <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" scope="col">
                    Members
                  </th>
                  <th class="hidden md:table-cell px-6 py-3 border-b border-gray-200 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider" scope="col">
                    Last updated
                  </th>
                  <th class="pr-6 py-3 border-b border-gray-200 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider" scope="col" />
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-100">
                <tr v-for="project in projects" :key="project.id">
                  <td class="px-6 py-3 max-w-0 w-full whitespace-nowrap text-sm font-medium text-gray-900">
                    <div class="flex items-center space-x-3 lg:pl-2">
                      <div class="flex-shrink-0 w-2.5 h-2.5 rounded-full" :class="[project.bgColorClass]" aria-hidden="true" />
                      <a href="#" class="truncate hover:text-gray-600">
                        <span>
                          {{ project.title }}
                          {{ ' ' }}
                          <span class="text-gray-500 font-normal">in {{ project.team }}</span>
                        </span>
                      </a>
                    </div>
                  </td>
                  <td class="px-6 py-3 text-sm text-gray-500 font-medium">
                    <div class="flex items-center space-x-2">
                      <div class="flex flex-shrink-0 -space-x-1">
                        <img v-for="member in project.members" :key="member.handle" class="max-w-none h-6 w-6 rounded-full ring-2 ring-white" :src="member.imageUrl" :alt="member.name">
                      </div>
                      <span v-if="project.totalMembers > project.members.length" class="flex-shrink-0 text-xs leading-5 font-medium">+{{ project.totalMembers - project.members.length }}</span>
                    </div>
                  </td>
                  <td class="hidden md:table-cell px-6 py-3 whitespace-nowrap text-sm text-gray-500 text-right">
                    {{ project.lastUpdated }}
                  </td>
                  <td class="px-6 py-3 whitespace-nowrap text-right text-sm font-medium">
                    <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
