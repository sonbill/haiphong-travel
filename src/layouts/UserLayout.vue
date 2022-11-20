<template>
  <div>
    <Header />
    <div>
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