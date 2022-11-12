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
                  class="ml-5 w-full text-[#B9BEC7]"
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
                  class="ml-5 w-ful text-[#B9BEC7]"
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
          <div
            class="relative w-full h-16 md:h-full"
            v-click-outside-element="hideDropdown"
          >
            <button
              type="button"
              class="flex grow-1 w-full h-16 md:h-full"
              @click="toggleShowGuests"
            >
              <!-- DROPDOWN TITLE -->
              <div class="px-5 h-full w-full">
                <div class="flex items-center h-full">
                  <div class="text-lg font-bold">Guests</div>
                  <span class="ml-5 text-[#B9BEC7]">
                    {{ totalGuestCount }}
                  </span>
                </div>
              </div>
            </button>
            <!-- SHOW DROPDOWN -->
            <div
              v-show="showGuests"
              class="
                absolute
                bg-[#fff]
                left-0
                top-[100%]
                w-full
                z-40
                md:w-full
                border
                shadow-md
                p-5
                space-y-5
              "
            >
              <!-- ADULT -->
              <div class="flex justify-between items-center">
                <span class="select-guests-value">{{ adultNumber }}</span>
                <span class="select-guests-title">Adult</span>
                <!-- BUTTONS -->
                <div class="flex border rounded-lg">
                  <!-- BUTTON PLUS + -->
                  <button
                    type="button"
                    class="
                      material-icons
                      text-[#71717a]
                      hover:text-[#fff]
                      bg-[#fff]
                      hover:bg-[#fb923c]
                      rounded-tl-lg rounded-bl-lg
                    "
                    :disabled="adultNumber >= 25"
                    @click="adultNumber += 1"
                  >
                    add
                  </button>
                  <!-- BUTTON MINUS - -->
                  <button
                    type="button"
                    class="
                      material-icons
                      text-[#71717a]
                      hover:text-[#fff]
                      bg-[#fff]
                      hover:bg-[#fb923c]
                      rounded-tr-lg rounded-br-lg
                    "
                    :disabled="adultNumber <= 0"
                    @click="adultNumber -= 1"
                  >
                    remove
                  </button>
                </div>
              </div>
              <!-- YOUTH -->
              <div class="flex justify-between items-center">
                <span class="select-guests-value">{{ youthNumber }}</span>
                <span class="select-guests-title">Youth</span>
                <!-- BUTTONS -->
                <div class="flex border rounded-lg">
                  <!-- BUTTON PLUS + -->
                  <button
                    type="button"
                    class="
                      material-icons
                      text-[#71717a]
                      hover:text-[#fff]
                      bg-[#fff]
                      hover:bg-[#fb923c]
                      rounded-tl-lg rounded-bl-lg
                    "
                    :disabled="youthNumber >= 25"
                    @click="youthNumber += 1"
                  >
                    add
                  </button>
                  <!-- BUTTON MINUS - -->
                  <button
                    type="button"
                    class="
                      material-icons
                      text-[#71717a]
                      hover:text-[#fff]
                      bg-[#fff]
                      hover:bg-[#fb923c]
                      rounded-tr-lg rounded-br-lg
                    "
                    :disabled="youthNumber <= 0"
                    @click="youthNumber -= 1"
                  >
                    remove
                  </button>
                </div>
              </div>
              <!-- CHILDREN -->
              <div class="flex justify-between items-center">
                <span class="select-guests-value">{{ childrenNumber }}</span>
                <span class="select-guests-title">Children</span>
                <!-- BUTTONS -->
                <div class="flex border rounded-lg">
                  <!-- BUTTON PLUS + -->
                  <button
                    type="button"
                    class="
                      material-icons
                      text-[#71717a]
                      hover:text-[#fff]
                      bg-[#fff]
                      hover:bg-[#fb923c]
                      rounded-tl-lg rounded-bl-lg
                    "
                    :disabled="childrenNumber >= 25"
                    @click="childrenNumber += 1"
                  >
                    add
                  </button>
                  <!-- BUTTON MINUS - -->
                  <button
                    type="button"
                    class="
                      material-icons
                      text-[#71717a]
                      hover:text-[#fff]
                      bg-[#fff]
                      hover:bg-[#fb923c]
                      rounded-tr-lg rounded-br-lg
                    "
                    :disabled="childrenNumber <= 0"
                    @click="childrenNumber -= 1"
                  >
                    remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- SUBMIT BUTTON -->
        <div class="flex">
          <button
            name="submit"
            class="
              rounded-sm
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
import { ref, computed } from "vue";
import "@vuepic/vue-datepicker/dist/main.css";
import ClickOutside from "vue-click-outside";

export default {
  directives: { ClickOutside },
  setup() {
    const searchQuery = ref("");
    const queryTimeout = ref(null);
    const date = ref();
    const datepicker = ref(null);
    const showGuests = ref(false);
    // ADD GUESTS
    const adultNumber = ref(0);
    const youthNumber = ref(0);
    const childrenNumber = ref(0);
    const totalGuest = [adultNumber, youthNumber, childrenNumber];

    // CALCULATE TOTAL GUEST BOOKING
    const totalGuestCount = computed(() => {
      return totalGuest
        .map((item) => item.value)
        .reduce((total, guest) => total + guest);
    });
    // TOGGLE SHOW DROPDOWN
    const toggleShowGuests = () => {
      showGuests.value = !showGuests.value;
    };
    // HIDE DROPDOWN WHEN CLICK OUTSIDE
    const hideDropdown = () => {
      showGuests.value = false;
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

    return {
      date,
      toggleShowGuests,
      showGuests,
      adultNumber,
      hideDropdown,
      childrenNumber,
      youthNumber,
      totalGuestCount,
    };
  },
};
</script>

<style>
</style>