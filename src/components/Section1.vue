<template>
  <carousel
    class="w-full"
    :autoplay="5000"
    :breakpoints="breakpoints"
    :wrap-around="true"
  >
    <!-- v-for="(slideItem, index) in slides" :key="index" -->
    <slide
      v-for="(slideItem, index) in slides"
      :key="index"
      class="w-screen h-[600px] max-h-[700px]"
    >
      <div class="relative w-full h-full">
        <div class="absolute w-full h-full">
          <img :src="slideItem.img" alt="" class="w-full h-full object-cover" />
          <div
            class="
              absolute
              top-0
              right-0
              bottom-0
              left-0
              bg-gradient-to-b
              from-transparent
              to-gray-900
            "
          ></div>
        </div>
        <div class="absolute z-20 inset-x-0 bottom-60 space-y-10">
          <h5 class="font-bold text-3xl text-[#fafafa]">
            {{ slideItem.title }}
          </h5>
          <h1 class="font-extrabold text-7xl text-white">
            {{ slideItem.content }}
          </h1>
          <div>
            <router-link
              :to="{ name: 'register' }"
              class="
                text-white
                hover:text-white
                border border-white
                hover:border-yellow-400 hover:bg-yellow-500
                focus:ring-4 focus:outline-none focus:ring-yellow-300
                font-medium
                rounded-lg
                text-sm
                px-5
                py-2.5
                text-center
                dark:border-yellow-300
                dark:text-yellow-300
                dark:hover:text-white
                dark:hover:bg-yellow-400
              "
            >
              More information
            </router-link>
          </div>
        </div>
      </div>
    </slide>
    <template #addons>
      <navigation class="text-white" />
    </template>
  </carousel>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

import Search from "./Search.vue";

export default {
  components: { Carousel, Slide, Pagination, Navigation, Search },
  setup() {
    // const options = {
    //   itemsToShow: 1,
    // };
    const breakpoints = {
      // 700px and up
      700: {
        itemsToShow: 1,
        snapAlign: "center",
      },
      // 1024 and up
      1024: {
        itemsToShow: 1,
        snapAlign: "start",
      },
    };
    const slides = [
      {
        title: "New York, USA",
        content: "Times Square.",
        img: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
      },
      {
        title: "Qui Nhơn, Bình Định",
        content: "Kỳ Co",
        img: "https://images.unsplash.com/photo-1598001981130-4c026f1a537b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
      },
    ];
    return { slides, breakpoints };
  },
};
</script>
