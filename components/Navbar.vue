<template>
  <div>
    <div class="relative flex flex-col w-full">
      <div class="flex flex-row justify-between items-center">
        <div class="py-3">
          <button @click="isOpen = !isOpen" class="focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="stroke-current stroke-2 fill-current text-palette-dark dark:text-palette-light h-8 w-6"
              viewBox="0 0 24 24"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
        <div class="py-3">
          <ColorChoice />
        </div>
      </div>
      <div>
        <transition name="fade">
          <div v-if="isOpen">
            <div class="flex flex-col pb-5">
              <nuxt-link to="/">
                <div class="flex items-center">
                  <svg
                    class="fill-current h-5 text-palette-dark dark:text-palette-light"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                  <span class="px-5 text-lg font-semibold">Home</span>
                </div>
              </nuxt-link>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>