<template>
  <div>
    <div
      v-if="modalActive"
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
          <!--header-->
          <div
            class="
              flex
              items-start
              justify-between
              p-5
              mt-3
              border-b border-solid border-slate-200
              rounded-t
            "
          >
            <h3 class="text-3xl font-semibold">{{ modalTitle }}</h3>
            <!-- X button -->
            <!-- <button
              class="
                p-1
                ml-auto
                border-0
                text-gray-500
                float-right
                text-3xl
                leading-none
                font-semibold
                outline-none
                focus:outline-none
              "
              v-on:click="toggleModal()"
            >
              <span
                class="
                  text-gray-500
                  opacity-100
                  h-6
                  w-6
                  text-2xl
                  block
                  outline-none
                  focus:outline-none
                "
              >
                ×
              </span>
            </button> -->
          </div>
          <!--body-->
          <div class="relative p-6 flex-auto">
            <p class="my-4 text-slate-500 text-lg leading-relaxed">
              {{ modalContent }}
            </p>
          </div>
          <!--footer-->
          <div
            class="
              flex
              items-center
              justify-end
              p-6
              border-t border-solid border-slate-200
              rounded-b
            "
          >
            <button
              class="
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
              @click="book()"
            >
              Book
            </button>
            <button
              class="
                text-[#f97316]
                background-transparent
                font-bold
                uppercase
                px-6
                py-2
                text-sm
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
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="modalActive"
      class="opacity-25 fixed inset-0 z-40 bg-black"
    ></div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { ref } from "vue";

export default {
  name: "small-modal",
  props: ["modalActive", "modalTitle", "modalContent"],
  setup(props, context) {
    const close = () => {
      context.emit("close");
    };
    const book = () => {
      context.emit("book");
    };

    return { close, book };
  },
};
</script>