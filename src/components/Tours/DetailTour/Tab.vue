<template>
  <div
    v-show="title == selectedTitle"
    class="max-w-4xl tracking-normal text-justify leading-6"
  >
    <slot />
  </div>
</template>

<script>
import { inject } from "vue";

export default {
  props: ["title"],
  setup() {
    const selectedTitle = inject("selectedTitle");

    return { selectedTitle };
  },
};
</script>

<style>
</style>