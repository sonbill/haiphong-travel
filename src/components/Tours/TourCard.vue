<template>
  <carousel
    class="flex space-x-5 max-h-96 w-full"
    :autoplay="5000"
    :breakpoints="breakpoints"
    :wrap-around="true"
  >
    <slide
      v-for="(tour, index) in tours"
      :key="index"
      class="relative w-full mx-0 md:mx-5"
    >
      <!-- CARD - IMG -->
      <div class="rounded overflow-hidden shadow-lg w-full h-72">
        <img
          :src="tour.image"
          alt=""
          class="relative w-full h-full object-cover px-5 md:px-0"
        />
      </div>
      <!-- OVERLAY -->
      <div
        class="
          absolute
          top-0
          right-0
          bottom-0
          left-0
          bg-gradient-to-b
          from-transparent
          to-zinc-800
        "
      ></div>
      <!-- CARD - TEXT -->
      <div
        class="absolute w-full h-full space-y-5 flex flex-col z-10 top-0 p-10"
      >
        <!-- ITEM - TEXT - TOP -->
        <div class="flex justify-end">
          <div v-if="tour.saleOff" class="flex space-x-3">
            <p class="space-x-2">
              <span class="text-gray-100 text-medium">From</span>
              <span class="font-extrabold text-white">
                {{ tour.discount }}</span
              >
              <span class="line-through text-gray-100 text-medium">{{
                tour.price
              }}</span>
            </p>
          </div>
          <div v-else>
            <p class="text-white font-medium">
              From <span class="font-extrabold">{{ tour.price }}</span>
            </p>
          </div>
        </div>
        <!-- ITEM - TEXT - BOTTOM -->
        <div class="text-white space-y-3 text-left">
          <div class="flex items-center">
            <span class="material-icons"> location_on </span>
            <p class="text-sm font-bold text-gray-100">
              {{ tour.tourPlace }}
            </p>
          </div>
          <h3 class="text-2xl font-extrabold">{{ tour.tourName }}</h3>
          <div class="flex items-center space-x-2">
            <span class="material-icons"> schedule </span>
            <p>{{ tour.time }} days</p>
          </div>
        </div>
        <!-- ITEM - BUTTON LINK -->
        <div class="absolute inset-x-0 bottom-5">
          <!-- BUTTON -->
          <router-link
            :to="{ name: 'register' }"
            class="
              text-white
              hover:text-white
              border border-white
              hover:border-[#fb923c] hover:bg-[#f97316]
              focus:ring-4 focus:outline-none focus:ring-[#f97316]
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
    </slide>
  </carousel>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

import { ref, onMounted, computed } from "vue";
import { useStore } from "vuex";

export default {
  components: { Carousel, Slide, Pagination, Navigation },
  setup() {
    // const options = {
    //   itemsToShow: 1,
    // };
    const breakpoints = {
      // 700px and up
      800: {
        itemsToShow: 1,
        snapAlign: "center",
      },
      // 1024 and up
      1024: {
        itemsToShow: 4,
        snapAlign: "start",
      },
    };

    const store = useStore();
    // const tours = ref([]);

    // const getTours = async () => {
    //   const querySnapshot = await getDocs(collection(db, "tours"));
    //   let fbTours = [];
    //   querySnapshot.forEach((doc) => {
    //     // doc.data() is never undefined for query doc snapshots
    //     console.log(doc.id, " => ", doc.data());
    //     const tour = {
    //       id: doc.id,
    //       city: doc.data().city,
    //       continents: doc.data().continents,
    //       country: doc.data().country,
    //       description: doc.data().description,
    //       image: doc.data().image,
    //       price: doc.data().price,
    //       saleOff: doc.data().saleOff,
    //       time: doc.data().time,
    //       tourName: doc.data().tourName,
    //       tourPlace: doc.data().tourPlace,
    //       tourPlan: doc.data().tourPlan,
    //       tourType: doc.data().tourType,
    //       discount:
    //         doc.data().price - (doc.data().price * doc.data().saleOff) / 100,
    //     };
    //     let discount = computed(() => {
    //       tour.price
    //     });
    //     fbTours.push(tour);
    //   });
    //   tours.value = fbTours;
    //   console.log(tours._rawValue);
    // };

    onMounted(async () => {
      await store.dispatch("getTours");
    });

    const tours = computed(() => store.getters.tours);

    return { tours, breakpoints };
  },
};
</script>

<style>
</style>