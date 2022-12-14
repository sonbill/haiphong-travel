<template>
  <div class="h-[300px] space-y-10">
    <div class="flex space-x-5">
      <button
        v-for="title in tabTitles"
        :key="title.id"
        @click="selectedTitle = title"
        :class="[selectedTitle == title ? 'focusTab' : '']"
        class="
          p-3
          cursor-pointer
          rounded-md
          border border-dashed
          font-bold
          hover:bg-[#fb923c] hover:text-white
          active:bg-[#f97316]
          transition
          ease-out
        "
      >
        {{ title }}
      </button>
    </div>
    <slot />
  </div>
</template>

<script>
import { ref, provide } from "vue";
export default {
  // context has 3 props: context.attrs, context.emit, context.slots
  setup(props, { slots }) {
    const tabTitles = ref(slots.default().map((tab) => tab.props.title));
    const selectedTitle = ref(tabTitles.value[0]);

    provide("selectedTitle", selectedTitle);

    return { tabTitles, selectedTitle };
  },
};
</script>

<style>
.focusTab {
  background-color: #f97316;
  color: white;
  border-style: solid !important;
}
</style>