<template>
  <div class="max-w-7xl mx-auto px-5 md:px-10 lg:px-0">
    <!-- TITLE -->
    <div class="my-10" v-if="tours">
      <h1 class="font-bold text-5xl">Tours</h1>
    </div>
    <h1 class="font-bold text-5xl" v-else>Search...</h1>
    <!-- ITEMS -->
    <div
      class="
        grid grid-cols-1
        md:grid-cols-2
        lg:grid-cols-3
        gap-3
        md:gap-4
        lg:gap-5
      "
      v-if="tours !== null"
    >
      <div
        v-for="tour in tours"
        :key="tour.id"
        class="
          mx-auto
          col-span-1
          bg-white
          shadow-md
          rounded-lg
          max-w-sm
          dark:bg-gray-800 dark:border-gray-700
        "
      >
        <router-link :to="{ name: 'DetailTour', params: { tourID: tour.id } }">
          <div class="w-[384px] h-[220px]">
            <img
              class="rounded-t-lg w-full h-full object-cover"
              :src="tour.image"
              alt="tour image"
            />
          </div>
        </router-link>
        <div class="px-4 pb-4 mt-4">
          <div class="flex justify-between">
            <!-- ITEM - NAME -->
            <div class="max-w-[270px]">
              <router-link
                :to="{ name: 'DetailTour', params: { tourID: tour.id } }"
              >
                <h3
                  class="
                    text-gray-900
                    font-semibold
                    text-xl
                    tracking-tight
                    dark:text-white
                  "
                >
                  {{ tour.tourName }}
                </h3>
                <p class="text-zinc-500">{{ tour.tourPlace }}</p>
              </router-link>
            </div>
            <!-- ITEM - TIME -->
            <div
              v-if="tour.time > 1"
              class="text-zinc-500 flex space-x-1 items-center"
            >
              <span class="material-icons"> schedule </span>
              <p>{{ tour.time }} days</p>
            </div>
            <div v-else class="text-zinc-500 flex space-x-1 items-center">
              <span class="material-icons"> schedule </span>
              <p>{{ tour.time }} day</p>
            </div>
          </div>
          <!-- ITEM - RATING -->
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
          <div class="flex items-center justify-between">
            <div v-if="tour.saleOff" class="space-x-3">
              <span class="text-xl font-bold text-gray-900 dark:text-white">
                {{ tour.discount }}</span
              >
              <span class="line-through text-gray-700 text-medium">
                {{ tour.price }}
              </span>
            </div>

            <div v-else>
              <span class="text-xl font-bold text-gray-900 dark:text-white">{{
                tour.price
              }}</span>
            </div>
            <router-link
              :to="{ name: 'DetailTour', params: { tourID: tour.id } }"
              class="
                text-white
                bg-blue-700
                hover:bg-blue-800
                focus:ring-4 focus:ring-blue-300
                font-medium
                rounded-lg
                text-sm
                px-5
                py-2.5
                text-center
                dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800
              "
              >Book now</router-link
            >
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <h1>Not Found</h1>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "AllTours",
  setup() {
    const store = useStore();
    onMounted(async () => {
      await store.dispatch("getTours");
    });
    const tours = computed(() => store.getters.tours);

    return { tours };
  },
};
</script>

<style>
</style>