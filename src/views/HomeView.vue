<template>
  <div>
    <Section1 />
    <Search />
    <div class="my-20">
      <!-- SECTION TITLE -->
      <div class="space-y-7 flex flex-col items-center mb-20">
        <p class="text-md font-bold">EXPLORE OUR TOURS</p>
        <h2 class="text-4xl font-bold">New and Most Popular Tours</h2>
        <p class="border w-24"></p>
      </div>
      <TourCard />
    </div>
    <Section2 class="mt-[150px]" />
    <TopDescriptions class="mt-[150px]" />
    <ChooseUs class="mt-[150px]" />
    <SubscribeToNewsletter class="mt-[150px]" />
  </div>
</template>

<script>
import TourCard from "../components/Tours/TourCard.vue";
import Section1 from "../components/Section1.vue";
import Section2 from "../components/Section2.vue";
import Search from "../components/Search.vue";
import TopDescriptions from "../components/TopDestinations.vue";
import ChooseUs from "../components/ChooseUs.vue";
import SubscribeToNewsletter from "../components/SubscribeToNewsletter.vue";
export default {
  components: {
    Section1,
    Section2,
    Search,
    TourCard,
    TopDescriptions,
    ChooseUs,
    SubscribeToNewsletter,
  },
  name: "home",
  setup() {
    return {};
  },
};
</script>

<style>
</style>