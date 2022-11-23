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
      <div class="absolute w-full space-y-5 flex flex-col z-10 top-0 p-10">
        <!-- ITEM - TOP -->
        <div class="flex justify-end">
          <p class="text-white font-medium">
            From <span class="font-bold">{{ tour.price }}</span>
          </p>
        </div>
        <!-- ITEM BOTTOM -->
        <div class="text-white space-y-3 text-left">
          <p class="text-sm font-bold text-gray-200">
            {{ tour.tourPlace }}
          </p>
          <h3 class="text-2xl font-extrabold">{{ tour.tourName }}</h3>
          <div class="flex items-center space-x-2">
            <span class="material-icons"> schedule </span>
            <p>{{ tour.time }} days</p>
          </div>
        </div>
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
    </slide>
  </carousel>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase";
import { ref, onMounted } from "vue";
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
    const tours = ref([]);

    const getTours = async () => {
      const querySnapshot = await getDocs(collection(db, "tours"));
      let fbTours = [];
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        const tour = {
          id: doc.id,
          city: doc.data().city,
          continents: doc.data().continents,
          country: doc.data().country,
          description: doc.data().description,
          image: doc.data().image,
          price: doc.data().price,
          saleOff: doc.data().saleOff,
          time: doc.data().time,
          tourName: doc.data().tourName,
          tourPlace: doc.data().tourPlace,
          tourPlan: doc.data().tourPlan,
          tourType: doc.data().tourType,
        };
        fbTours.push(tour);
      });
      tours.value = fbTours;
      console.log(tours._rawValue);
    };

    onMounted(async () => {
      await getTours();
    });

    return { tours, breakpoints };
  },
};
</script>

<style>
</style>