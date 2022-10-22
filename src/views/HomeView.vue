<template>
  <div>
    <Header />
    <Section1 />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Section1 from "../components/Section1.vue";
export default {
  components: { Header, Section1 },
  name: "home",
  setup() {
    return {};
  },
};
</script>

<style>
</style>