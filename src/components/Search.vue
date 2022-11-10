<template>
  <div
    class="max-w-4xl mx-auto md:h-16 md:border md:border-solid-[1px] rounded-sm"
  >
    <form action="" class="w-full h-full">
      <div class="flex bg-[#fff] h-full flex-col md:flex-row">
        <div
          class="
            w-full
            h-full
            flex flex-col
            md:flex-row
            justify-center
            items-center
            divide-y divide-slate-200
            md:divide-y-0
          "
        >
          <!-- ITEM - 1 -->
          <div
            class="flex grow-1 w-full md:max-w-[30%] border-r h-16 md:h-full"
          >
            <div class="flex items-center md:px-2 px-5 h-full">
              <div class="flex w-full">
                <div class="text-lg font-bold">Where</div>
                <select
                  class="w-full text-[#B9BEC7]"
                  name="state"
                  placeholder="Destination"
                >
                  <option value="">- All where -</option>
                  <optgroup label="Africa">
                    <option value="">Morocco</option>
                    <option value="">Tanzania</option>
                  </optgroup>
                  <optgroup label="Americas">
                    <option value="">Argentina</option>
                    <option value="">Canada</option>
                    <option value="">Colombia</option>
                    <option value="">Costa Rica</option>
                    <option value="">United States</option>
                  </optgroup>
                </select>
              </div>
            </div>
          </div>
          <!-- ITEM - 2 -->
          <div
            class="
              flex
              grow-1
              w-full
              md:max-w-[30%]
              divide-y divide-slate-200
              md:border-r
              h-16
              md:h-full
            "
          >
            <div class="flex items-center px-5 h-full">
              <div class="flex">
                <div class="text-lg font-bold">Type</div>
                <select
                  class="w-ful text-[#B9BEC7]"
                  name="state"
                  placeholder="Destination"
                >
                  <option value="">- All Type -</option>
                  <option value="">Adventure</option>
                  <option value="">Beaches</option>
                  <option value="">City Tours</option>
                  <option value="">Hiking</option>
                  <option value="">Honeymoon</option>
                  <option value="">Museum Tours</option>
                </select>
              </div>
            </div>
          </div>
          <!-- ITEM - 3 -->
          <div
            class="
              flex
              grow-1
              w-full
              md:max-w-[30%]
              border-0
              md:border-r
              h-16
              md:h-full
            "
          >
            <div class="h-full w-full">
              <div class="flex items-center px-5 h-full">
                <div class="text-lg font-bold">When</div>
                <Datepicker
                  v-model="date"
                  ref="datepicker"
                  placeholder="Date..."
                  class="w-full"
                />
              </div>
            </div>
          </div>
          <!-- ITEM - 4 -->
          <button
            type="button"
            class="flex grow-1 w-full h-16 md:h-full"
            @click="toggleShowGuests"
          >
            <div class="px-5 h-full w-full relative">
              <div class="flex items-center h-full">
                <div class="text-lg font-bold">Guests</div>
                <span class="ml-1 text-[#B9BEC7]"> 0 </span>
                <!-- SHOW DROPDOWN -->
                <div
                  v-show="showGuests"
                  class="absolute left-0 top-[100%] w-full border p-10"
                >
                  <div class="input-select-feild-guest" data-name="guests[2]">
                    <span class="select-guests-value">0</span>
                    <span class="select-guests-title">Adult</span>
                    <span class="search-guests-plus btn-guests-change">
                      <i class="fa-solid fa-plus"></i>
                    </span>
                    <span class="search-guests-minus btn-guests-change">
                      <i class="fa-solid fa-minus"></i>
                    </span>
                    <input
                      type="hidden"
                      class="select_guests_input_value"
                      name="guest[2]"
                      value="0"
                    />
                  </div>
                  <div class="input-select-feild-guest" data-name="guests[3]">
                    <span class="select-guests-value">0</span>
                    <span class="select-guests-title">Youth</span>
                    <span class="search-guests-plus btn-guests-change">
                      <i class="fa-solid fa-plus"></i>
                    </span>
                    <span class="search-guests-minus btn-guests-change">
                      <i class="fa-solid fa-minus"></i>
                    </span>
                  </div>
                  <div class="input-select-feild-guest" data-name="guests[4]">
                    <span class="select-guests-value">0</span>
                    <span class="select-guests-title">Children</span>
                    <span class="search-guests-plus btn-guests-change">
                      <i class="fa-solid fa-plus"></i>
                    </span>
                    <span class="search-guests-minus btn-guests-change">
                      <i class="fa-solid fa-minus"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </button>
        </div>
        <!-- SUBMIT BUTTON -->
        <div class="flex">
          <button
            name="submit"
            class="
              w-full
              items-center
              justify-center
              whitespace-nowrap
              border border-transparent
              bg-[#fb923c]
              px-4
              py-2
              text-base
              font-medium
              text-white
              shadow-sm
              hover:bg-[#f97316]
            "
            value="1"
          >
            <span>Search</span>
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import "@vuepic/vue-datepicker/dist/main.css";

export default {
  setup() {
    const searchQuery = ref("");
    const queryTimeout = ref(null);
    const date = ref();
    const datepicker = ref(null);
    const showGuests = ref(false);

    const toggleShowGuests = () => {
      showGuests.value = !showGuests.value;
    };

    const yourCustomMethod = () => {
      if (datepicker) {
        // Close the menu programmatically
        datepicker.value.closeMenu();
      }
    };

    const getSearchResult = () => {
      queryTimeout.value = setTimeout(async () => {
        if (searchQuery.value !== "") {
          const result = await axios.get("");
        }
      });
    };

    return { date, toggleShowGuests, showGuests };
  },
};
</script>

<style>
</style>