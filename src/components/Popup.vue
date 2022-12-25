<template>
  <div>
    <div
      v-if="bookedID"
      class="
        overflow-x-hidden overflow-y-auto
        fixed
        inset-0
        z-50
        outline-none
        focus:outline-none
        justify-center
        items-center
        flex
      "
    >
      <div class="relative my-6 mx-auto w-2/6">
        <!--content-->
        <div
          class="
            border-0
            rounded-lg
            shadow-lg
            relative
            flex flex-col
            w-full
            bg-white
            outline-none
            focus:outline-none
          "
        >
          <!--body-->
          <div class="relative p-6 mx-auto">
            <div class="flex flex-col justify-center items-center">
              <!-- IMG -->
              <div class="w-32">
                <img src="../../src/assets/img/successfully.png" alt="" />
              </div>
              <!-- TITLE -->
              <h1 class="font-bold text-2xl text-gray-500">
                Booking Succesful!
              </h1>
              <!-- CONTENT -->
              <div class="flex space-x-1">
                <p class="my-4 text-slate-500 text-lg leading-relaxed">
                  {{ popupContent }}
                </p>
                <p
                  class="
                    my-4
                    font-bold
                    text-slate-500
                    uppercase
                    text-lg
                    leading-relaxed
                  "
                >
                  {{ bookedID }}
                </p>
              </div>
              <!-- BUTTON -->
              <button
                class="
                  w-1/2
                  text-[#f97316]
                  bg-transparent
                  border border-solid border-[#f97316]
                  hover:bg-[#f97316] hover:text-white
                  active:bg-[#f97316]
                  font-bold
                  uppercase
                  text-sm
                  px-6
                  py-3
                  rounded
                  outline-none
                  focus:outline-none
                  mr-1
                  mb-1
                  ease-linear
                  transition-all
                  duration-150
                "
                type="button"
                @click="close()"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="bookedID" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  props: ["popupTitle", "popupContent", "bookedID"],
  setup(props, context) {
    const close = () => {
      context.emit("close");
    };
    return { close };
  },
};
</script>

<style>
</style>