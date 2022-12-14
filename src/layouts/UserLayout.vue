<template>
  <div>
    <Header />
    <div>
      <slot />
    </div>
  </div>
  <Footer class="mt-[150px]" />
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