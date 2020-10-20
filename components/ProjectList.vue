<template>
  <div
    class="flex flex-col justify-center items-center pt-12 pb-20 sm:py-20 text-palette-dark dark:text-palette-light"
  >
    <div
      v-for="project in projects"
      :key="project"
      class="flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-12 py-3 md:5"
    >
      <div class="md:w-1/2">
        <ProjectGenerate :data="project[0]" />
      </div>
      <div v-if="project[1]" class="md:w-1/2">
        <ProjectGenerate :data="project[1]" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        [
          {
            img: {
              imglight:
                "https://user-images.githubusercontent.com/22569688/96329029-403daf80-1073-11eb-96fa-308a51b11f88.png",
              imgdark:
                "https://user-images.githubusercontent.com/22569688/96329229-07063f00-1075-11eb-8c20-41d9421f775d.png",
            },
            reviews: 3,
            title: "Home Design Travel App",
            link: "/travel",
            desc:
              'This is the implementation of Clavative\'s Travel App Part I, for more information please visit <a class="text-palette-light dark:text-palette-dark underline" href="https://dribbble.com/Clavative" >Clavative\'s Dribble</a>',
            techs: ["TailwindCSS", "NuxtJS"],
          },
          {
            img: {
              imglight:
                "https://user-images.githubusercontent.com/22569688/96329029-403daf80-1073-11eb-96fa-308a51b11f88.png",
              imgdark:
                "https://user-images.githubusercontent.com/22569688/96329229-07063f00-1075-11eb-8c20-41d9421f775d.png",
            },
            reviews: 12,
            title: "Home Design Travel App 1",
            link: "/travel",
            desc:
              'This is the implementation of Clavative\'s Travel App Part I, for more information please visit <a class="text-palette-light dark:text-palette-dark underline" href="https://dribbble.com/Clavative" >Clavative\'s Dribble</a>',
            techs: ["TailwindCSS", "NuxtJS"],
          },
        ],
      ],
    };
  },
};
</script>

<style>
</style>