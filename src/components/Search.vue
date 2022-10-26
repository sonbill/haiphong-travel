<template>
  <div>
    
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