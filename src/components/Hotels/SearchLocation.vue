<template>
  <div>
    <h1>SEARCH LOCATION</h1>
    <form @submit.prevent="submitInput">
      <input type="text" class="border" v-model="hotels" />
      <button type="submit">Submit</button>
    </form>

    <p>{{ hotels }}</p>
  </div>
</template>

<script>
import { ref, onMounted, computed } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    const hotels = ref(0);
    const submitInput = async () => {
      await store.dispatch("getHotels", hotels);
    };
    return { hotels, submitInput };
  },
};
</script>

<style>
</style>