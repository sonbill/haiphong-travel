<template>
  <div>
    <Header />
    <Section1 />
    <Search />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Section1 from "../components/Section1.vue";
import Search from "../components/Search.vue";
export default {
  components: { Header, Section1, Search },
  name: "home",
  setup() {
    return {};
  },
};
</script>

<style>
</style>