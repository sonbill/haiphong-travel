<template>
  <div>
    <input
      type="text"
      v-model="searchQuery"
      placeholder="Search place to go..."
      class="py-2 px-1 w-full bg-white border-"
    />
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const searchQuery = ref("");
    const queryTimeout = ref(null);

    const getSearchResult = () => {
      queryTimeout.value = setTimeout(async () => {
        if (searchQuery.value !== "") {
          const result = await axios.get("");
        }
      });
    };
  },
};
</script>

<style>
</style>