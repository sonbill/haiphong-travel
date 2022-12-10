<template>
  <div class="max-w-7xl mx-auto" v-if="tour">
    <!-- HEADER -->
    <div class="my-10">
      <!-- TOUR PLACE -->
      <h5 class="text-zinc-500 mb-5">{{ tour.tourPlace }}</h5>
      <!-- TOUR NAME -->
      <h1 class="text-3xl">{{ tour.tourName }}</h1>
      <!-- TOUR DETAIL -->
      <div
        class="
          grid grid-cols-1
          md:grid-cols-2
          divide-x-2 divide-y-2
          md:divide-y-0
        "
      >
        <!-- TOUR DETAIL ROWS - 1 -->
        <div class="grid grid-cols-2 col-span-1 divide-x-2">
          <!-- TOUR DETAIL ITEM -->
          <!-- PRICE -->
          <div class="col-span-1">
            <div class="flex flex-col py-2">
              <span class="text-zinc-500">From</span>
              <span class="font-bold">{{ tour.price }}</span>
            </div>
          </div>
          <!-- TOUR DETAIL ITEM -->
          <!-- TIME -->
          <div class="col-span-1">
            <div class="flex flex-col px-5 py-2">
              <span class="text-zinc-500">From</span>
              <span class="font-bold">{{ tour.time }}</span>
            </div>
          </div>
        </div>
        <!-- TOUR DETAIL ROWS - 2 -->
        <div class="grid grid-cols-2 col-span-1 divide-x-2">
          <!-- TOUR DETAIL ITEM -->
          <!-- TOUR TYPE -->
          <div class="col-span-1">
            <div class="flex flex-col px-0 md:px-5 py-2">
              <span class="text-zinc-500">Tour Type</span>
              <div class="flex space-x-2">
                <p
                  v-for="(type, index) in tour.tourType"
                  :key="index"
                  class="font-bold"
                >
                  {{ type }}
                </p>
              </div>
            </div>
          </div>
          <!-- TOUR DETAIL ITEM -->
          <!-- RATING -->
          <div class="col-span-1">
            <div class="px-5 py-2">
              <span class="text-zinc-500">Reviews</span>
              <div class="flex items-center mt-2.5 mb-5">
                <svg
                  class="w-5 h-5 text-yellow-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  ></path>
                </svg>
                <svg
                  class="w-5 h-5 text-yellow-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  ></path>
                </svg>
                <svg
                  class="w-5 h-5 text-yellow-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  ></path>
                </svg>
                <svg
                  class="w-5 h-5 text-yellow-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  ></path>
                </svg>
                <svg
                  class="w-5 h-5 text-yellow-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  ></path>
                </svg>
                <span
                  class="
                    bg-blue-100
                    text-blue-800 text-xs
                    font-semibold
                    mr-2
                    px-2.5
                    py-0.5
                    rounded
                    dark:bg-blue-200 dark:text-blue-800
                    ml-3
                  "
                  >5.0</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- IMAGE -->
    <div>
      <!-- CURRENT SLIDE IMAGE -->
      <div class="w-full my-10">
        <img
          :src="currentImg || tour.image"
          alt=""
          class="w-[837px] h-[540px] object-cover mx-auto rounded-sm"
        />
      </div>
      <!-- SLIDE LOOP IMAGES -->
      <div>
        <carousel :items-to-show="3" class="max-w-2xl mx-auto py-5">
          <slide
            v-for="(img, index) in tour.image"
            :key="index"
            class="mx-3 md:mx-0"
          >
            <img
              :src="img"
              @mouseover="changeActivePicture(img, index)"
              alt=""
              class="
                w-[158px]
                h-[112px]
                object-cover
                rounded-sm
                transition-all
                hover:scale-125 hover:w-[w-200px] hover:h-[130px]
              "
            />
          </slide>
        </carousel>
      </div>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import axios from "axios";
import { ref, onMounted, computed } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useStore } from "vuex";
export default {
  name: "DetailTour",
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },

  setup() {
    const store = useStore();
    const route = useRoute();
    const currentImg = ref(null);
    const tourID = computed(() => route.params.tourID);
    const indexOfActive = ref(0);

    onMounted(() => {
      store.dispatch("getTour", tourID.value);
    });
    const tour = computed(() => {
      return store.getters.tour;
    });

    const changeActivePicture = (img, index) => {
      currentImg.value = img;
      indexOfActive.value = index;
    };

    return {
      tour,
      currentImg,
      changeActivePicture,
      indexOfActive,
    };
    // GET https://triplocator.net/api/rest/get/tour/{tour_id}
  },
};
</script>

<style>
</style>