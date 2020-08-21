<template >
  <div class="container px-8 text-palette-dark dark:text-palette-light sm:hidden">
    <div class="flex flex-col">
      <div>
        <Navbar/>
      </div>
      <div class="text-2xl font-title pb-2">
        <p class="">Explore<span class="block py-1">the Destination</span></p>
      </div>
      <div class="flex items-center bg-palette-lightwhite dark:bg-palette-darkblue rounded-full shadow-3xl py-1">
        <div class="ml-1 p-3">
            <svg class="fill-current text-palette-dark dark:text-palette-light h-3 w-3" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 192.904 192.904" style="enable-background:new 0 0 192.904 192.904;" xml:space="preserve">
          <path d="M190.707,180.101l-47.078-47.077c11.702-14.072,18.752-32.142,18.752-51.831C162.381,36.423,125.959,0,81.191,0
            C36.422,0,0,36.423,0,81.193c0,44.767,36.422,81.187,81.191,81.187c19.688,0,37.759-7.049,51.831-18.751l47.079,47.078
            c1.464,1.465,3.384,2.197,5.303,2.197c1.919,0,3.839-0.732,5.304-2.197C193.637,187.778,193.637,183.03,190.707,180.101z M15,81.193
            C15,44.694,44.693,15,81.191,15c36.497,0,66.189,29.694,66.189,66.193c0,36.496-29.692,66.187-66.189,66.187
            C44.693,147.38,15,117.689,15,81.193z"/>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          </svg>
        </div>
        <div class="w-full pr-3 p-1">
            <input class="leading-normal font-bold bg-palette-lightwhite placeholder-opacity-75 placeholder-palette-dark dark-placeholder:placeholder-palette-light dark:bg-palette-darkblue focus:outline-none w-full" type="text" placeholder="Search">
        </div>
      </div>
      <div class="flex justify-between px-1 font-medium text-palette-dark dark:text-palette-light py-6">
        <div>
          <span class="text-palette-dark dark:text-palette-light underline">All</span>
        </div>
        <div>
          <span class="text-palette-dark text-opacity-50 dark:text-palette-light dark:text-opacity-75">Popular</span>
        </div>
        <div>
          <span class="text-palette-dark text-opacity-50 dark:text-palette-light dark:text-opacity-75">Recommendation</span>
        </div>
      </div>
      <ItemsHorizontal/>
    </div>
  </div>
</template>

<script>
export default {
  head(){
    return {
        title: 'Design',
    }
  }
}
</script>

<style>

</style>