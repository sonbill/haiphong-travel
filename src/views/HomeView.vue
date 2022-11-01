<template>
  <div>
    <Section1 />
    <Search />
  </div>
</template>

<script>
import Section1 from "../components/Section1.vue";
import Search from "../components/Search.vue";
export default {
  components: { Section1, Search },
  name: "home",
  setup() {
    return {};
  },
};
</script>

<style>
</style>