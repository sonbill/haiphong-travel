<template>
  <div class="w-full">
    <vueper-slides>
      <vueper-slide
        v-for="(slide, i) in slides"
        :dragging-distance="40"
        :image="slide.img"
        :key="i"
        :title="slide.title"
        :content="slide.content"
      >
      </vueper-slide>
    </vueper-slides>

  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import Search from "./Search.vue";
import "vueperslides/dist/vueperslides.css";

export default {
  components: { VueperSlides, VueperSlide, Search },
  setup() {
    const slides = [
      {
        title: "New York, USA",
        content: "Times Square.",
        img: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
      },
      {
        title: "Qui Nhơn, Bình Định",
        content: "Kỳ Co.",
        img: "https://images.unsplash.com/photo-1598001981130-4c026f1a537b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
      },
    ];
    return { slides };
  },
};
</script>

<style>
.vueperslide__title {
  font-size: 2.5em;
  margin-bottom: 0.5em;
  opacity: 0.7;
}
.vueperslide__content {
  font-size: 1.5em;
  margin-bottom: 0.5em;
  opacity: 0.7;
  color: black;
}
.vueperslide__image {
  opacity: 0.7;
}
</style>