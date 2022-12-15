<template>
  <div class="flex flex-col justify-between">
    <Header />
    <!-- CONTENT -->
    <div>
      <slot />
    </div>
    <Footer class="mt-[150px]" />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
export default {
  components: { Header, Footer },
};
</script>

<style>
</style>