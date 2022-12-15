<template>
  <div class="max-w-7xl mx-auto">
    <h1 class="font-bold text-3xl my-10">PROFILE</h1>
    <div>
      <div
        class="
          relative
          max-w-md
          mx-auto
          md:max-w-2xl
          min-w-0
          break-words
          bg-white
          w-full
          mb-6
          shadow-lg
          rounded-xl
          mt-16
        "
      >
        <div class="px-6">
          <div class="flex flex-wrap justify-center">
            <div class="w-full flex justify-center">
              <div class="relative">
                <img
                  src="https://github.com/creativetimofficial/soft-ui-dashboard-tailwind/blob/main/build/assets/img/team-2.jpg?raw=true"
                  class="
                    shadow-xl
                    rounded-full
                    align-middle
                    border-none
                    absolute
                    -m-16
                    -ml-20
                    lg:-ml-16
                    max-w-[150px]
                  "
                />
              </div>
            </div>
          </div>
          <div class="text-center mt-24">
            <h3 class="text-2xl text-slate-700 font-bold leading-normal mb-1">
              {{ user.displayName || name }}
            </h3>
            <div class="text-xs mt-0 mb-2 text-slate-400 font-bold uppercase">
              <form>
                <input
                  type="email"
                  placeholder="Email"
                  :value="user.email"
                  disabled
                  class="
                    relative
                    block
                    w-full
                    appearance-none
                    rounded-none rounded-t-md
                    border border-gray-300
                    px-3
                    py-2
                    text-gray-900
                    placeholder-gray-500
                    focus:z-10
                    focus:border-[#f97316]
                    focus:outline-none
                    focus:ring-[#f97316]
                    sm:text-sm
                  "
                />
                <input
                  type="text"
                  placeholder="name"
                  :value="user.displayName || 'Username'"
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
                    focus:border-[#f97316]
                    focus:outline-none
                    focus:ring-[#f97316]
                    sm:text-sm
                  "
                />
                <input
                  type="number"
                  placeholder="Phone"
                  class="
                    relative
                    block
                    w-full
                    appearance-none
                    rounded-none rounded-b-md
                    border border-gray-300
                    px-3
                    py-2
                    text-gray-900
                    placeholder-gray-500
                    focus:z-10
                    focus:border-[#f97316]
                    focus:outline-none
                    focus:ring-[#f97316]
                    sm:text-sm
                  "
                />
              </form>
              <button
                type="submit"
                class="
                  block
                  font-bold
                  mt-5
                  mx-auto
                  bg-blue-500
                  hover:bg-blue-600
                  focus:shadow-outline focus:outline-none
                  text-white text-xs
                  py-3
                  px-10
                  rounded
                "
              >
                Save Changed
              </button>
            </div>
          </div>
          <div class="mt-6 py-6 border-t border-slate-200 text-center">
            <div class="flex flex-wrap justify-center">
              <div class="w-full px-4">
                <TabsWrapper>
                  <Tab title="Change Password">
                    <form action="">
                      <input
                        type="password"
                        placeholder="New password"
                        class="
                          relative
                          block
                          w-full
                          appearance-none
                          rounded-none rounded-t-md
                          border border-gray-300
                          px-3
                          py-2
                          text-gray-900
                          placeholder-gray-500
                          focus:z-10
                          focus:border-[#f97316]
                          focus:outline-none
                          focus:ring-[#f97316]
                          sm:text-sm
                        "
                      />
                      <input
                        type="password"
                        placeholder="Old password"
                        class="
                          relative
                          block
                          w-full
                          appearance-none
                          rounded-none rounded-b-md
                          border border-gray-300
                          px-3
                          py-2
                          text-gray-900
                          placeholder-gray-500
                          focus:z-10
                          focus:border-[#f97316]
                          focus:outline-none
                          focus:ring-[#f97316]
                          sm:text-sm
                        "
                      />
                      <button
                        type="submit"
                        class="
                          block
                          font-bold
                          mt-5
                          mx-auto
                          bg-blue-500
                          hover:bg-blue-600
                          focus:shadow-outline focus:outline-none
                          text-white text-xs
                          py-3
                          px-10
                          rounded
                        "
                      >
                        Change Password
                      </button>
                    </form>
                  </Tab>
                  <Tab title="History">
                    <table class="min-w-full">
                      <thead class="bg-white border-b">
                        <tr>
                          <th
                            scope="col"
                            class="
                              text-sm
                              font-medium
                              text-gray-900
                              px-6
                              py-4
                              text-left
                            "
                          >
                            #
                          </th>
                          <th
                            scope="col"
                            class="
                              text-sm
                              font-medium
                              text-gray-900
                              px-6
                              py-4
                              text-left
                            "
                          >
                            First
                          </th>
                          <th
                            scope="col"
                            class="
                              text-sm
                              font-medium
                              text-gray-900
                              px-6
                              py-4
                              text-left
                            "
                          >
                            Last
                          </th>
                          <th
                            scope="col"
                            class="
                              text-sm
                              font-medium
                              text-gray-900
                              px-6
                              py-4
                              text-left
                            "
                          >
                            Handle
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr class="bg-gray-100 border-b">
                          <td
                            class="
                              px-6
                              py-4
                              whitespace-nowrap
                              text-sm
                              font-medium
                              text-gray-900
                            "
                          >
                            1
                          </td>
                          <td
                            class="
                              text-sm text-gray-900
                              font-light
                              px-6
                              py-4
                              whitespace-nowrap
                            "
                          >
                            Mark
                          </td>
                          <td
                            class="
                              text-sm text-gray-900
                              font-light
                              px-6
                              py-4
                              whitespace-nowrap
                            "
                          >
                            Otto
                          </td>
                          <td
                            class="
                              text-sm text-gray-900
                              font-light
                              px-6
                              py-4
                              whitespace-nowrap
                            "
                          >
                            @mdo
                          </td>
                        </tr>
                        <tr class="bg-white border-b">
                          <td
                            class="
                              px-6
                              py-4
                              whitespace-nowrap
                              text-sm
                              font-medium
                              text-gray-900
                            "
                          >
                            2
                          </td>
                          <td
                            class="
                              text-sm text-gray-900
                              font-light
                              px-6
                              py-4
                              whitespace-nowrap
                            "
                          >
                            Jacob
                          </td>
                          <td
                            class="
                              text-sm text-gray-900
                              font-light
                              px-6
                              py-4
                              whitespace-nowrap
                            "
                          >
                            Dillan
                          </td>
                          <td
                            class="
                              text-sm text-gray-900
                              font-light
                              px-6
                              py-4
                              whitespace-nowrap
                            "
                          >
                            @fat
                          </td>
                        </tr>
                        <tr class="bg-gray-100 border-b">
                          <td
                            class="
                              px-6
                              py-4
                              whitespace-nowrap
                              text-sm
                              font-medium
                              text-gray-900
                            "
                          >
                            3
                          </td>
                          <td
                            class="
                              text-sm text-gray-900
                              font-light
                              px-6
                              py-4
                              whitespace-nowrap
                            "
                          >
                            Mark
                          </td>
                          <td
                            class="
                              text-sm text-gray-900
                              font-light
                              px-6
                              py-4
                              whitespace-nowrap
                            "
                          >
                            Twen
                          </td>
                          <td
                            class="
                              text-sm text-gray-900
                              font-light
                              px-6
                              py-4
                              whitespace-nowrap
                            "
                          >
                            @twitter
                          </td>
                        </tr>
                        <tr class="bg-white border-b">
                          <td
                            class="
                              px-6
                              py-4
                              whitespace-nowrap
                              text-sm
                              font-medium
                              text-gray-900
                            "
                          >
                            4
                          </td>
                          <td
                            class="
                              text-sm text-gray-900
                              font-light
                              px-6
                              py-4
                              whitespace-nowrap
                            "
                          >
                            Bob
                          </td>
                          <td
                            class="
                              text-sm text-gray-900
                              font-light
                              px-6
                              py-4
                              whitespace-nowrap
                            "
                          >
                            Dillan
                          </td>
                          <td
                            class="
                              text-sm text-gray-900
                              font-light
                              px-6
                              py-4
                              whitespace-nowrap
                            "
                          >
                            @fat
                          </td>
                        </tr>
                        <tr class="bg-gray-100 border-b">
                          <td
                            class="
                              px-6
                              py-4
                              whitespace-nowrap
                              text-sm
                              font-medium
                              text-gray-900
                            "
                          >
                            5
                          </td>
                          <td
                            colspan="2"
                            class="
                              text-sm text-gray-900
                              font-light
                              px-6
                              py-4
                              whitespace-nowrap
                              text-center
                            "
                          >
                            Larry the Bird
                          </td>
                          <td
                            class="
                              text-sm text-gray-900
                              font-light
                              px-6
                              py-4
                              whitespace-nowrap
                            "
                          >
                            @twitter
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </Tab>
                </TabsWrapper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref, onBeforeMount } from "vue";
import TabsWrapper from "../../components/Tours/DetailTour/TabsWrapper.vue";
import Tab from "../../components/Tours/DetailTour/Tab.vue";
import { useStore } from "vuex";
import { auth } from "../../firebase/index";

export default {
  name: "Profile",
  components: { Tab, TabsWrapper },
  setup() {
    const store = useStore();
    const name = ref("");
    const user = computed(() => store.getters.user);

    onBeforeMount(() => {
      const detailUser = auth.currentUser;
      if (detailUser) {
        name.value = detailUser.email.split("@")[0];
      }
    });

    return { user, name };
  },
};
</script>

<style>
</style>