<template>
  <div
    class="flex z-0 flex-col overflow-hidden rounded-lg shadow-2xl transform transition duration-1000 hover:scale-105"
  >
    <div class="relative flex-shrink-0 dark:bg-palette-light bg-palette-dark">
      <img
        v-if="$colorMode.value == 'light'"
        class="object-cover w-full h-64 pl-1 pr-1 pt-1 rounded-t-mobile"
        :src="data.img.imglight"
        alt=""
      />
      <img
        v-if="$colorMode.value == 'dark'"
        class="object-cover w-full h-64 pl-1 pr-1 pt-1 rounded-t-mobile"
        :src="data.img.imgdark"
        alt=""
      />
      <span
        class="absolute bottom-0 right-0 inline-flex items-center px-3 py-1 mr-4 -mb-3 text-xs font-medium leading-tight text-palette-dark bg-palette-light shadow-2xl rounded-full"
        >{{ data.reviews }} reviews</span
      >
    </div>
    <div class="flex flex-col justify-between flex-1">
      <div
        class="flex flex-col justify-between flex-1 p-6 bg-palette-dark dark:bg-palette-light"
      >
        <div>
          <nuxt-link
            :to="data.link"
            class="block text-xl font-semibold leading-7 text-palette-light dark:text-palette-dark"
            >{{ data.title }}</nuxt-link
          >
          <p
            class="mt-3 text-base leading-6 text-palette-light dark:text-palette-dark"
          >
            {{ data.desc }}
          </p>
        </div>
        <p class="mt-3 text-sm font-medium leading-5">
          <span
            v-for="tech in data.techs"
            :key="tech.idx"
            class="inline-flex items-center px-3 py-1 text-xs font-medium leading-tight text-blue-800 bg-blue-100 rounded-full mr-2"
            >{{ tech }}</span
          >
        </p>
      </div>
      <div class="flex items-center p-6 bg-palette-darkblue dark:bg-gray-200">
        <div class="flex-shrink-0">
          <a href="#">
            <img
              class="w-10 h-10 rounded-full"
              src="https://avatars0.githubusercontent.com/u/22569688?s=460&u=f7e7efb766bb7434cb0f48739db59bfadf328ab2&v=4"
              alt=""
            />
          </a>
        </div>
        <div class="ml-3">
          <p
            class="text-sm font-medium leading-5 text-palette-light dark:text-gray-900"
          >
            <a href="#" class="hover:underline">Ghazi Muharam</a>
          </p>
          <div class="text-xs leading-5 text-gray-300 dark:text-gray-700">
            <time>August, 2020</time>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"],
};
</script>

<style>
</style>