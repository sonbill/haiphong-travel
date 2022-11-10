<template>
  <div class="mx-auto max-w-7xl px-4 sm:px-6">
    <!-- PAGE TITLE -->
    <h1 class="font-bold text-5xl mb-10">{{ PageTitle }}</h1>
    <!-- CONTACT - CONTENT -->
    <div class="flex md:flex-row flex-col">
      <!-- CONTACT - FORM -->
      <div class="w-full md:w-[60%] mx-auto px-5 mb-10 md:mb-0">
        <!-- FORM - TITLE -->
        <div class="mb-7">
          <h2 class="text-2xl font-bold mb-2">Email us</h2>
          <p class="font-medium text-sm text-gray-600 italic">
            Hãy để lại Email và chúng tôi sẽ liên hệ lại bạn sau 24 giờ tới
          </p>
        </div>
        <!-- FORM -->
        <form action="" class="space-y-5">
          <!-- ROW 1 -->
          <div class="flex space-x-5">
            <!-- FULLNAME -->
            <div class="flex-1">
              <label for="fullname" class="sr-only">Full name</label>
              <input
                id="fullname"
                name="fullname"
                type="text"
                autocomplete="current-fullname"
                required
                class="
                  block
                  w-full
                  appearance-none
                  rounded-md
                  border border-gray-300
                  px-4
                  py-3
                  text-gray-900
                  placeholder-gray-500
                  focus:z-10
                  focus:border-[#f97316]
                  focus:outline-none
                  focus:ring-[#f97316]
                  sm:text-sm
                "
                placeholder="Fullname"
              />
            </div>
            <!-- EMAIL -->
            <div class="flex-1">
              <label for="email" class="sr-only">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                autocomplete="current-email"
                required
                class="
                  block
                  w-full
                  appearance-none
                  rounded-md
                  border border-gray-300
                  px-4
                  py-3
                  text-gray-900
                  placeholder-gray-500
                  focus:z-10
                  focus:border-[#f97316]
                  focus:outline-none
                  focus:ring-[#f97316]
                  sm:text-sm
                "
                placeholder="someone@example.com"
              />
            </div>
          </div>
          <!-- ROW 2 -->
          <div>
            <div>
              <label for="ct-number" class="sr-only">Contact Number</label>
              <input
                id="ct-number"
                name="ct-number"
                type="number"
                autocomplete="current-ct-number"
                required
                class="
                  block
                  w-full
                  appearance-none
                  rounded-md
                  border border-gray-300
                  px-4
                  py-3
                  text-gray-900
                  placeholder-gray-500
                  focus:z-10
                  focus:border-[#f97316]
                  focus:outline-none
                  focus:ring-[#f97316]
                  sm:text-sm
                "
                placeholder="123 456 789"
              />
            </div>
          </div>
          <!-- ROW 3 -->
          <div>
            <div>
              <label for="message" class="sr-only">What's you message?</label>
              <textarea
                name="message"
                id="message"
                type="text"
                required
                class="
                  block
                  w-full
                  appearance-none
                  rounded-md
                  border border-gray-300
                  px-4
                  py-3
                  text-gray-900
                  placeholder-gray-500
                  focus:z-10
                  focus:border-[#f97316]
                  focus:outline-none
                  focus:ring-[#f97316]
                  sm:text-sm
                "
                placeholder="Your message..."
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              class="
                px-3
                py-2
                border border-1-solid
                rounded-md
                inline-flex
                items-center
                justify-center
                whitespace-nowrap
                border-transparent
                bg-[#fb923c]
                text-base
                font-medium
                text-white
                shadow-sm
                hover:bg-[#f97316]
              "
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <!-- CONTACT - INFO -->
      <div class="w-full md:w-[30%] mx-auto px-5 space-y-5">
        <h4 class="text-2xl font-semibold">Trip Querries</h4>
        <!-- HOTLINE -->
        <div>
          <p class="font-medium text-sm text-gray-600">Emergency Helpline</p>
          <h5 class="text-2xl font-extrabold text-[#f97316]">078 456 789</h5>
        </div>
        <!-- CONTACTABLE HOURS -->
        <div>
          <p class="font-medium text-sm text-gray-600">Contactable Hours</p>
          <h5 class="text-lg font-bold">Mon - Sun: 24 HOURS</h5>
        </div>
        <!-- CONTACT EMAIL -->
        <div>
          <p class="font-medium text-sm text-gray-600">
            Require information about trip?
          </p>
          <h5 class="text-lg font-bold">hptravel@hptravel.com.vn</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactView",

  setup() {
    const PageTitle = "Need to contact us?";

    return { PageTitle };
  },
};
</script>

<style>
</style>