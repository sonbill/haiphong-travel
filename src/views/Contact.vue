<template>
  <div>
    <h1>Need to contact us?</h1>
    <div class="w-[500px]">
      <div>
        <h2>Email us</h2>
        <p>Hãy để lại Email và chúng tôi sẽ liên hệ lại bạn sau 24 giờ tới</p>
      </div>
      <form action="" class="space-y-5">
        <!-- ROW 1 -->
        <div class="flex space-x-5">
          <!-- FULLNAME -->
          <div>
            <label for="fullname" class="sr-only">Full name</label>
            <input
              id="fullname"
              name="fullname"
              type="text"
              autocomplete="current-fullname"
              required
              class="
                relative
                block
                w-full
                appearance-none
                rounded-none
                border border-gray-300
                px-3
                py-2
                text-gray-900
                placeholder-gray-500
                focus:z-10
                focus:border-indigo-500
                focus:outline-none
                focus:ring-indigo-500
                sm:text-sm
              "
              placeholder="Fullname"
            />
          </div>
          <!-- EMAIL -->
          <div>
            <label for="email" class="sr-only">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              autocomplete="current-email"
              required
              class="
                relative
                block
                w-full
                appearance-none
                rounded-none
                border border-gray-300
                px-3
                py-2
                text-gray-900
                placeholder-gray-500
                focus:z-10
                focus:border-indigo-500
                focus:outline-none
                focus:ring-indigo-500
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
                relative
                block
                w-full
                appearance-none
                rounded-none
                border border-gray-300
                px-3
                py-2
                text-gray-900
                placeholder-gray-500
                focus:z-10
                focus:border-indigo-500
                focus:outline-none
                focus:ring-indigo-500
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
                relative
                block
                w-full
                appearance-none
                rounded-none
                border border-gray-300
                px-3
                py-2
                text-gray-900
                placeholder-gray-500
                focus:z-10
                focus:border-indigo-500
                focus:outline-none
                focus:ring-indigo-500
                sm:text-sm
              "
              placeholder="Your message..."
            />
          </div>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactView",

  setup() {},
};
</script>

<style>
</style>