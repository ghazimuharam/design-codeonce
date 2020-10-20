<template >
  <div class="container mx-auto px-8 text-palette-dark dark:text-palette-light">
    <div>
      <Navbar />
    </div>
    <div class="text-center pt-12">
      <h1
        class="text-palette-dark dark:text-palette-light text-4xl sm:text-5xl font-semibold capitalize"
      >
        Ghazimuharam's Portofolio
      </h1>
    </div>
    <div>
      <ProjectList />
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Home | Design Implementation",
    };
  },
};
</script>

<style>
</style>