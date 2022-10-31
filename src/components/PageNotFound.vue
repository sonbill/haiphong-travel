<template>
  <div class="flex flex-col items-center mt-10">
    <h1 class="text-3xl mb-3">Sorry, this page does not exist!</h1>
    <router-link :to="{ name: 'home' }">Back to Home</router-link>
  </div>
</template>

<script>
export default {
  name: "page-not-found",
  setup() {},
};
</script>
