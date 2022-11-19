<template>
  <div class="flex space-x-5 max-h-96">
    <div v-for="tour in tours" :key="tour.id" class="relative max-w-md">
      <!-- CARD - IMG -->
      <div class="rounded overflow-hidden shadow-lg w-full h-64">
        <img
          :src="tour.image"
          alt=""
          class="relative w-full h-full object-cover"
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
        <div class="text-white space-y-3">
          <p class="text-sm font-bold text-gray-200">{{ tour.tourPlace }}</p>
          <h3 class="text-2xl font-extrabold">{{ tour.tourName }}</h3>
          <div class="flex items-center space-x-3">
            <span class="material-icons"> schedule </span>
            <p>{{ tour.time }}</p>
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
    </div>
  </div>
</template>

<script>
import { collection, getDocs } from "firebase/firestore";
import { ref, onMounted } from "vue";
import { db } from "@/firebase";
export default {
  setup() {
    const tours = ref([]);

    onMounted(async () => {
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
    });

    return { tours };
  },
};
</script>

<style>
</style>