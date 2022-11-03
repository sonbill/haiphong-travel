<template>
  <div>
    <Header />
    <div class="mt-10">
      <slot />
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
export default {
  components: { Header },
};
</script>

<style>
</style>