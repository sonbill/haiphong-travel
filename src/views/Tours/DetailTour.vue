<template>
  <div class="w-full" v-if="pokes">
    <p>{{ pokes.name }}</p>
  </div>
</template>

<script>
import axios from "axios";
import { ref, onMounted, computed } from "vue";
import { useStore } from "vuex";
export default {
  name: "DetailTour",

  setup() {
    const store = useStore();
    const pokes = computed(() => {
      return store.getters.poke;
    });
    onMounted(() => {
      store.dispatch("getPoke");
    });

    return { pokes };
    // GET https://triplocator.net/api/rest/get/tour/{tour_id}
  },
};
</script>

<style>
</style>