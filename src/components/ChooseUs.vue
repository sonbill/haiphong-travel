<template>
  <div class="p-10 md:p-20 bg-[#f6f8fb]">
    <div
      class="
        grid grid-cols-1
        md:grid-cols-2
        max-w-screen-2xl
        mx-auto
        gap-7
        md:gap-5
      "
    >
      <!-- COL 1 -->
      <div class="col-span-1">
        <div class="max-w-[540px] md:max-w-[680px] rounded-md">
          <img
            src="https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt=""
            class="w-full h-full rounded-md"
          />
        </div>
      </div>
      <!-- COL 2 -->
      <div class="col-span-1 space-y-10">
        <!-- COL -2 - ITEM - 1 -->
        <div class="space-y-10">
          <p class="text-md font-bold">WHY CHOOSE US</p>
          <h1 class="text-5xl font-bold">
            Our Experiences Meet High Quality Standards
          </h1>
          <div class="flex space-x-10">
            <p>----------------------------------------</p>
            <p class="max-w-2xl italic text-zinc-500 text-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
        </div>
        <!-- COL -2 - ITEM - 2 -->
        <div class="space-y-10">
          <!-- LIST -->
          <div>
            <ul class="space-y-5">
              <!-- ITEM - 1 -->
              <li class="flex items-center space-x-4">
                <span class="material-icons text-[50px] text-[#FB923C]">
                  expand_circle_down
                </span>
                <span class="text-[20px] italic"> Professional Tour Guide</span>
              </li>
              <!-- ITEM - 2 -->
              <li class="flex items-center space-x-4">
                <span class="material-icons text-[50px] text-[#FB923C]">
                  expand_circle_down
                </span>
                <span class="text-[20px] italic">Exceptional flexibility </span>
              </li>
              <!-- ITEM - 3 -->
              <li class="flex items-center space-x-4">
                <span class="material-icons text-[50px] text-[#FB923C]">
                  expand_circle_down
                </span>
                <span class="text-[20px] italic">Quality you can trust</span>
              </li>
              <!-- ITEM - 4 -->
              <li class="flex items-center space-x-4">
                <span class="material-icons text-[50px] text-[#FB923C]">
                  expand_circle_down
                </span>
                <span class="text-[20px] italic">Award-winning support </span>
              </li>
            </ul>
          </div>
          <!-- BUTTON -->
          <div>
            <button
              @click="$router.push('contact')"
              class="
                group
                relative
                h-12
                w-48
                overflow-hidden
                rounded-lg
                bg-white
                text-lg
                shadow
              "
            >
              <div
                class="
                  absolute
                  inset-0
                  w-3
                  bg-[#FB923C]
                  transition-all
                  duration-[250ms]
                  ease-out
                  group-hover:w-full
                "
              ></div>
              <span class="relative text-black group-hover:text-white"
                >Contact us!</span
              >
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>