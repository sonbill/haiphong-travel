<template>
  <div class="grid grid-cols-1 md:grid-cols-2">
    <!-- Sign Up for Our Newsletter -->
    <div class="col-span-1">
      <div class="mx-auto w-full bg-orange-500 p-5">
        <div class="grid gap-5 md:grid-cols-2 md:gap-10 lg:gap-20">
          <div class="flex justify-center md:justify-end">
            <img
              class="w-full max-w-sm"
              src="https://ouch-cdn2.icons8.com/sKnF2PmYhkmP28DzIm6KqWSknT03UVWjg3FLlGYIOp4/rs:fit:684:456/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvOTI3/L2U4OWQ2NmZiLTg0/NzEtNDc3NS1hNTA0/LTMwNWRiYmJkNzg0/MC5zdmc.png"
              alt="Marketing newsletter via computer Illustration in PNG, SVG"
            />
          </div>
          <div class="flex items-center">
            <div class="mx-auto md:mx-0">
              <h3 class="text-4xl font-bold text-white">Subscribe</h3>
              <p class="mt-2 max-w-[20rem] text-lg text-white/80">
                Save up to 50% on tours and trips. Get instant access to lower
                prices.
              </p>
              <form action="" class="mt-4 flex flex-col">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  class="
                    w-full
                    rounded
                    border border-white/50
                    bg-transparent
                    px-3
                    py-2
                    text-white
                    placeholder:text-white
                    md:max-w-[18rem]
                  "
                />
                <button
                  type="submit"
                  class="
                    mt-4
                    w-full
                    max-w-[14rem]
                    rounded
                    bg-white/30
                    px-14
                    py-2
                    text-center text-white
                  "
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Customer Support -->
    <div class="col-span-1 bg-[#fb923c]">
      <div class="p-5 md:p-10 flex justify-between items-center space-x-5">
        <!-- CONTENT - 1 -->
        <div class="space-y-5">
          <h1 class="font-bold text-3xl text-white">24/7 Customer Support</h1>
          <!-- IMG -->
          <div>
            <img
              src="https://images.unsplash.com/photo-1603714228681-b399854b8f80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y2FsbCUyMHN1cHBvcnJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
              class="w-[64px] h-[64px] object-cover rounded-full"
            />
          </div>
        </div>
        <!-- CONTENT - 2 -->
        <div class="space-y-3">
          <p class="italic text-white text-lg">
            Contact us now to have all of your tour-related question answered.
          </p>
          <h1 class="font-bold text-3xl text-white">078334777</h1>
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