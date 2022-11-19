<template>
  <div>
    <Section1 />
    <Search />
    <div class="my-10">
      <!-- SECTION TITLE -->
      <div class="space-y-5 flex flex-col items-center">
        <p class="text-sm font-bold">EXPLORE OUR TOURS</p>
        <h2 class="text-2xl font-bold">New and Most Popular Tours</h2>
        <span>-</span>
      </div>
      <TourCard />
    </div>
  </div>
</template>

<script>
import TourCard from "../components/Tours/TourCard.vue";
import Section1 from "../components/Section1.vue";
import Search from "../components/Search.vue";
export default {
  components: { Section1, Search, TourCard },
  name: "home",
  setup() {
    return {};
  },
};
</script>

<style>
</style>