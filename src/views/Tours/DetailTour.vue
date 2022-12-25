<template>
  <div class="max-w-7xl mx-auto" v-if="tour">
    <Modal
      :modalTitle="modalContent.title"
      :modalContent="modalContent.msg"
      :modalActive="modalActive"
      @close="toggleModal"
      @book="bookTour"
    />
    <Popup
      :bookedID="bookedID"
      :popupTitle="popupContent.title"
      :popupContent="popupContent.msg"
      @close="setNullBookedID"
    />
    <div class="flex flex-col md:flex-row justify-between">
      <!-- ITEM - 1 -->
      <div>
        <!-- HEADER -->
        <div class="my-10">
          <!-- TOUR PLACE -->
          <h5 class="text-zinc-500 mb-5">{{ tour.tourPlace }}</h5>
          <!-- TOUR NAME -->
          <h1 class="text-3xl">{{ tour.tourName }}</h1>
          <!-- TOUR DETAIL -->
          <div
            class="
              grid grid-cols-1
              md:grid-cols-2
              divide-x-2 divide-y-2
              md:divide-y-0
            "
          >
            <!-- TOUR DETAIL ROWS - 1 -->
            <div class="grid grid-cols-2 col-span-1 divide-x-2">
              <!-- TOUR DETAIL ITEM -->
              <!-- PRICE -->
              <div class="col-span-1">
                <div class="flex flex-col py-2">
                  <span class="text-zinc-500">From</span>
                  <span class="font-bold">{{ tour.price }}</span>
                </div>
              </div>
              <!-- TOUR DETAIL ITEM -->
              <!-- TIME -->
              <div class="col-span-1">
                <div class="flex flex-col px-5 py-2">
                  <span class="text-zinc-500">From</span>
                  <span class="font-bold"> {{ tour.time }} days </span>
                </div>
              </div>
            </div>
            <!-- TOUR DETAIL ROWS - 2 -->
            <div class="grid grid-cols-2 col-span-1 divide-x-2">
              <!-- TOUR DETAIL ITEM -->
              <!-- TOUR TYPE -->
              <div class="col-span-1">
                <div class="flex flex-col px-0 md:px-5 py-2">
                  <span class="text-zinc-500">Tour Type</span>
                  <div class="flex space-x-2">
                    <p
                      v-for="(type, index) in tour.tourType"
                      :key="index"
                      class="font-bold"
                    >
                      {{ type }}
                    </p>
                  </div>
                </div>
              </div>
              <!-- TOUR DETAIL ITEM -->
              <!-- RATING -->
              <div class="col-span-1">
                <div class="px-5 py-2">
                  <span class="text-zinc-500">Reviews</span>
                  <div class="flex items-center">
                    <svg
                      class="w-5 h-5 text-yellow-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      ></path>
                    </svg>
                    <svg
                      class="w-5 h-5 text-yellow-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      ></path>
                    </svg>
                    <svg
                      class="w-5 h-5 text-yellow-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      ></path>
                    </svg>
                    <svg
                      class="w-5 h-5 text-yellow-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      ></path>
                    </svg>
                    <svg
                      class="w-5 h-5 text-yellow-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      ></path>
                    </svg>
                    <span
                      class="
                        bg-blue-100
                        text-blue-800 text-xs
                        font-semibold
                        mr-2
                        px-2.5
                        py-0.5
                        rounded
                        dark:bg-blue-200 dark:text-blue-800
                        ml-3
                      "
                      >5.0</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- IMAGE -->
        <div>
          <!-- CURRENT SLIDE IMAGE -->
          <div class="w-full my-10">
            <img
              :src="currentImg || tour.image"
              alt=""
              class="w-[837px] h-[540px] object-cover mx-auto rounded-sm"
            />
          </div>
          <!-- SLIDE LOOP IMAGES -->
          <div class="h-[150px]">
            <carousel :items-to-show="3" class="max-w-2xl mx-auto py-5">
              <slide
                v-for="(img, index) in tour.image"
                :key="index"
                class="mx-3 md:mx-0"
              >
                <img
                  :src="img"
                  @mouseover="changeActivePicture(img, index)"
                  alt=""
                  class="
                    w-[158px]
                    h-[112px]
                    object-cover
                    rounded-sm
                    transition-all
                    hover:scale-125 hover:w-[w-200px] hover:h-[130px]
                  "
                />
              </slide>
            </carousel>
          </div>
        </div>
        <!-- DETAIL TOUR INFORMATION -->
        <div class="mt-10">
          <!-- DETAIL TOUR INFORMATION TABS WRAPPER -->
          <div class="flex space-x-5">
            <TabsWrapper>
              <Tab title="Overview">
                <span class="block text-xl mb-3">DESCRIPTION</span>
                <p class="text-gray-500 text-md">
                  {{ tour.description }}
                </p>
              </Tab>
              <Tab title="Tour Plan">
                <p class="text-xl mb-3">TOUR PLAN</p>
                <ul
                  v-for="plan in tour.tourPlan"
                  :key="plan.id"
                  class="list-inside"
                >
                  <li class="font-bold text-lg list-disc mb-3">{{ plan }}</li>
                </ul>
              </Tab>
              <Tab title="Reviews">
                <div class="w-full">
                  <div class="flex items-center mb-3">
                    <svg
                      aria-hidden="true"
                      class="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>First star</title>
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      ></path>
                    </svg>
                    <svg
                      aria-hidden="true"
                      class="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Second star</title>
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      ></path>
                    </svg>
                    <svg
                      aria-hidden="true"
                      class="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Third star</title>
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      ></path>
                    </svg>
                    <svg
                      aria-hidden="true"
                      class="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Fourth star</title>
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      ></path>
                    </svg>
                    <svg
                      aria-hidden="true"
                      class="w-5 h-5 text-gray-300 dark:text-gray-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Fifth star</title>
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      ></path>
                    </svg>
                    <p
                      class="
                        ml-2
                        text-sm
                        font-medium
                        text-gray-900
                        dark:text-white
                      "
                    >
                      4.95 out of 5
                    </p>
                  </div>
                  <p
                    class="text-sm font-medium text-gray-500 dark:text-gray-400"
                  >
                    1,745 global ratings
                  </p>
                  <div class="flex items-center mt-4">
                    <span
                      class="
                        text-sm
                        font-medium
                        text-blue-600
                        dark:text-blue-500
                      "
                      >5 star</span
                    >
                    <div
                      class="
                        w-4/6
                        h-5
                        mx-4
                        bg-gray-200
                        rounded
                        dark:bg-gray-700
                      "
                    >
                      <div
                        class="h-5 bg-yellow-400 rounded"
                        style="width: 70%"
                      ></div>
                    </div>
                    <span
                      class="
                        text-sm
                        font-medium
                        text-blue-600
                        dark:text-blue-500
                      "
                      >70%</span
                    >
                  </div>
                  <div class="flex items-center mt-4">
                    <span
                      class="
                        text-sm
                        font-medium
                        text-blue-600
                        dark:text-blue-500
                      "
                      >4 star</span
                    >
                    <div
                      class="
                        w-4/6
                        h-5
                        mx-4
                        bg-gray-200
                        rounded
                        dark:bg-gray-700
                      "
                    >
                      <div
                        class="h-5 bg-yellow-400 rounded"
                        style="width: 17%"
                      ></div>
                    </div>
                    <span
                      class="
                        text-sm
                        font-medium
                        text-blue-600
                        dark:text-blue-500
                      "
                      >17%</span
                    >
                  </div>
                  <div class="flex items-center mt-4">
                    <span
                      class="
                        text-sm
                        font-medium
                        text-blue-600
                        dark:text-blue-500
                      "
                      >3 star</span
                    >
                    <div
                      class="
                        w-4/6
                        h-5
                        mx-4
                        bg-gray-200
                        rounded
                        dark:bg-gray-700
                      "
                    >
                      <div
                        class="h-5 bg-yellow-400 rounded"
                        style="width: 8%"
                      ></div>
                    </div>
                    <span
                      class="
                        text-sm
                        font-medium
                        text-blue-600
                        dark:text-blue-500
                      "
                      >8%</span
                    >
                  </div>
                  <div class="flex items-center mt-4">
                    <span
                      class="
                        text-sm
                        font-medium
                        text-blue-600
                        dark:text-blue-500
                      "
                      >2 star</span
                    >
                    <div
                      class="
                        w-4/6
                        h-5
                        mx-4
                        bg-gray-200
                        rounded
                        dark:bg-gray-700
                      "
                    >
                      <div
                        class="h-5 bg-yellow-400 rounded"
                        style="width: 4%"
                      ></div>
                    </div>
                    <span
                      class="
                        text-sm
                        font-medium
                        text-blue-600
                        dark:text-blue-500
                      "
                      >4%</span
                    >
                  </div>
                  <div class="flex items-center mt-4">
                    <span
                      class="
                        text-sm
                        font-medium
                        text-blue-600
                        dark:text-blue-500
                      "
                      >1 star</span
                    >
                    <div
                      class="
                        w-4/6
                        h-5
                        mx-4
                        bg-gray-200
                        rounded
                        dark:bg-gray-700
                      "
                    >
                      <div
                        class="h-5 bg-yellow-400 rounded"
                        style="width: 1%"
                      ></div>
                    </div>
                    <span
                      class="
                        text-sm
                        font-medium
                        text-blue-600
                        dark:text-blue-500
                      "
                      >1%</span
                    >
                  </div>
                </div>
              </Tab>
            </TabsWrapper>
          </div>

          <!-- <div>
            <iframe
              v-show="isShowing"
              src="http://www.weather.gov/"
              frameborder="0"
            ></iframe>
          </div> -->
        </div>
      </div>
      <!-- ITEM - 2 -->
      <!-- BOOKING -->
      <!-- AUTH -->
      <div class="px-3 mt-10 md:mt-0 py-10 border bg-[#f8fafc]" v-if="auth">
        <h1 class="text-xl font-bold mb-10">Booking Tour</h1>
        <form class="space-y-6" @submit.prevent="bookTour">
          <!-- SELECT DATE -->
          <div>
            <h3 class="mb-2 font-bold">Choose Date</h3>
            <div class="border rounded-md">
              <Datepicker v-model="dateBooking" range :partial-range="false" />
            </div>
          </div>

          <!-- GUESTS -->
          <div>
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
                  <div
                    class="
                      flex
                      items-center
                      justify-around
                      h-full
                      border
                      p-3
                      rounded-md
                      bg-white
                    "
                  >
                    <div class="text-md font-bold text-gray-500">Guests</div>
                    <span class="font-bold text-lg">
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
          <!-- PICK TIMES -->
          <div>
            <h3 class="mb-2 font-bold">Time</h3>
            <div class="flex">
              <!-- 7:00 AM -->
              <div class="flex items-center mr-4">
                <input
                  id="inline-radio"
                  type="radio"
                  v-model="dataBooked.time"
                  value="7:00"
                  name="inline-radio-group"
                  class="
                    w-4
                    h-4
                    text-blue-600
                    bg-gray-100
                    border-gray-300
                    focus:ring-blue-500
                    dark:focus:ring-blue-600 dark:ring-offset-gray-800
                    focus:ring-2
                    dark:bg-gray-700 dark:border-gray-600
                  "
                />
                <label
                  for="inline-radio"
                  class="
                    ml-2
                    text-sm
                    font-medium
                    text-gray-900
                    dark:text-gray-300
                  "
                  >7:00 AM</label
                >
              </div>
              <!-- 15:00 PM -->
              <div class="flex items-center mr-4">
                <input
                  v-model="dataBooked.time"
                  id="inline-checked-radio"
                  type="radio"
                  value="15:00"
                  name="inline-radio-group"
                  class="
                    w-4
                    h-4
                    text-blue-600
                    bg-gray-100
                    border-gray-300
                    focus:ring-blue-500
                    dark:focus:ring-blue-600 dark:ring-offset-gray-800
                    focus:ring-2
                    dark:bg-gray-700 dark:border-gray-600
                  "
                />
                <label
                  for="inline-checked-radio"
                  class="
                    ml-2
                    text-sm
                    font-medium
                    text-gray-900
                    dark:text-gray-300
                  "
                  >15:00 PM</label
                >
              </div>
            </div>
          </div>
          <!-- BUTTON -->
          <button
            @click="toggleModal()"
            type="button"
            class="
              block
              uppercase
              mx-auto
              shadow
              bg-indigo-800
              hover:bg-indigo-700
              focus:shadow-outline focus:outline-none
              text-white text-xs
              py-3
              px-10
              rounded
            "
          >
            BOOK
          </button>
        </form>
      </div>
      <!-- NOT AUTH -->
      <div class="px-3 mt-10 md:mt-0 py-10 border bg-[#f8fafc]" v-else>
        <div class="flex flex-col items-center">
          <p class="text-gray-500 text-sm">
            Please login your account for booking
          </p>
          <router-link
            :to="{ name: 'login' }"
            class="font-medium text-orange-600 hover:text-orange-500 underline"
          >
            Login here
          </router-link>
        </div>
      </div>
    </div>
    <!-- HIGHLIGHTS -->
    <div
      class="
        grid grid-cols-1
        gap-5
        md:gap-0 md:grid-cols-2
        bg-[#f1f5f9]
        p-10
        rounded-md
        max-w-4xl
        mx-auto
        mt-16
      "
    >
      <!-- IMG -->
      <div class="flex items-center justify-center">
        <img src="../../../src/assets/img/img_single_tour_1.webp" alt="" />
      </div>
      <!-- CONTENT -->
      <div>
        <h1 class="text-2xl mb-5">Highlights</h1>
        <div>
          <ul class="space-y-3">
            <li class="flex items-center space-x-3">
              <span class="material-icons text-green-700"> done </span>
              <span class="text-gray-500">Nepal most popular climb.</span>
            </li>
            <li class="flex items-center space-x-3">
              <span class="material-icons text-green-700"> done </span>
              <span class="text-gray-500"
                >Outstanding views of Mt. Everest, Mt. Lhotse, Mt. Makalu from
                the summit.</span
              >
            </li>
            <li class="flex items-center space-x-3">
              <span class="material-icons text-green-700"> done </span>
              <span class="text-gray-500"
                >The perfect experience for adventurers!</span
              >
            </li>
            <li class="flex items-center space-x-3">
              <span class="material-icons text-green-700"> done </span>
              <span class="text-gray-500"
                >5-day Prince Edward Island trip from Halifax</span
              >
            </li>
            <li class="flex items-center space-x-3">
              <span class="material-icons text-green-700"> done </span>
              <span class="text-gray-500"
                >Explore scenic Prince Edward Island National Park</span
              >
            </li>
            <li class="flex items-center space-x-3">
              <span class="material-icons text-green-700"> done </span>
              <span class="text-gray-500">
                Overnight accommodation and all transport included</span
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- ALSO LIKE / RECOMMENDED -->
    <div>
      <h1 class="text-3xl mt-24 mb-10">You May Also Like</h1>
      <div>
        <carousel
          class="flex space-x-5 max-h-72 w-full"
          :autoplay="5000"
          :breakpoints="breakpoints"
          :wrap-around="true"
        >
          <slide
            v-for="(tour, index) in recommendedTours"
            :key="index"
            class="relative w-full mx-0 md:mx-5"
          >
            <!-- CARD - IMG -->
            <div class="rounded overflow-hidden shadow-lg w-full h-72">
              <img
                :src="tour.image"
                alt=""
                class="relative w-full h-full object-cover px-5 md:px-0"
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
            <div
              class="
                absolute
                w-full
                h-full
                space-y-5
                flex flex-col
                z-10
                top-0
                p-10
              "
            >
              <!-- ITEM - TEXT - TOP -->
              <div class="flex justify-end">
                <div v-if="tour.saleOff" class="flex space-x-3">
                  <p class="space-x-2">
                    <span class="text-gray-100 text-medium">From</span>
                    <span class="font-extrabold text-white">
                      {{ tour.discount }}</span
                    >
                    <span class="line-through text-gray-100 text-medium">{{
                      tour.price
                    }}</span>
                  </p>
                </div>
                <div v-else>
                  <p class="text-white font-medium">
                    From <span class="font-extrabold">{{ tour.price }}</span>
                  </p>
                </div>
              </div>
              <!-- ITEM - TEXT - BOTTOM -->
              <div class="text-white space-y-3 text-left">
                <div class="flex items-center">
                  <span class="material-icons"> location_on </span>
                  <p class="text-sm font-bold text-gray-100">
                    {{ tour.tourPlace }}
                  </p>
                </div>
                <h3 class="text-2xl font-extrabold">{{ tour.tourName }}</h3>
                <div class="flex items-center space-x-2">
                  <span class="material-icons"> schedule </span>
                  <p>{{ tour.time }} days</p>
                </div>
              </div>
              <!-- ITEM - BUTTON LINK -->
              <div class="absolute inset-x-0 bottom-5">
                <!-- BUTTON -->
                <a
                  :href="
                    $router.resolve({
                      name: 'DetailTour',
                      params: { tourID: tour.id },
                    }).href
                  "
                  class="
                    text-white
                    hover:text-white
                    border border-white
                    hover:border-[#fb923c] hover:bg-[#f97316]
                    focus:ring-4 focus:outline-none focus:ring-[#f97316]
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
                </a>
              </div>
            </div>
          </slide>
        </carousel>
      </div>
    </div>
  </div>
</template>

<script>
import TabsWrapper from "../../components/Tours/DetailTour/TabsWrapper.vue";
import Tab from "../../components/Tours/DetailTour/Tab.vue";
import Modal from "../../components/Modal.vue";
import Popup from "../../components/Popup.vue";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import axios from "axios";
import { ref, onMounted, computed, reactive } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useStore } from "vuex";
import "@vuepic/vue-datepicker/dist/main.css";
import ClickOutside from "vue-click-outside";

export default {
  name: "DetailTour",
  directives: { ClickOutside },
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
    Tab,
    TabsWrapper,
    Modal,
    Popup,
  },

  setup() {
    const store = useStore();
    const route = useRoute();
    const currentImg = ref(null);
    const tourID = computed(() => route.params.tourID);
    const indexOfActive = ref(0);
    const tourCountry = computed(() => store.getters.tour.country);
    // GUESTS
    const adultNumber = ref(0);
    const youthNumber = ref(0);
    const childrenNumber = ref(0);
    // const totalGuests = reactive({
    //   adultNumber: 0,
    //   youthNumber: 0,
    //   childrenNumber: 0,
    // });
    const totalGuest = computed(() => [
      adultNumber.value,
      youthNumber.value,
      childrenNumber.value,
    ]);
    const showGuests = ref(false);
    const dateBooking = ref("");

    // DATA BOOK
    const dataBooked = computed(() => ({
      bookedID: Math.random().toString(36).substring(2, 7),
      tourID: tourID.value,
      date: dateBooking,
      time: "",
      guests: totalGuest.value,
    }));

    // const bookTour = () => {
    //   store.dispatch("bookTour", dataBooked);
    // };
    const bookTour = () => {
      store.dispatch("bookTour", dataBooked);
      modalActive.value = false;
    };

    // const formatTotalGuest = computed(() => {
    //   return totalGuest.map((item) => item.value);
    // });
    // CALCULATE TOTAL GUEST BOOKING
    const totalGuestCount = computed(() => {
      return totalGuest.value
        .map((item) => item)
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

    onMounted(async () => {
      await store.dispatch("getTour", tourID.value);
      await store.dispatch("recommended", tourCountry.value);
    });

    const tour = computed(() => {
      return store.getters.tour;
    });

    const auth = computed(() => {
      return store.getters.user;
    });

    const recommendedTours = computed(() => {
      return store.getters.recommended;
    });

    const changeActivePicture = (img, index) => {
      currentImg.value = img;
      indexOfActive.value = index;
    };

    // MODAL
    const modalContent = reactive({
      title: "Booking confirm",
      msg: "Are you sure you want to book?",
    });
    const modalActive = ref(false);

    const toggleModal = () => {
      modalActive.value = !modalActive.value;
    };
    // POPUP
    const popupContent = reactive({
      title: "Successfully Booked",
      msg: "Booking ID",
    });

    const bookedID = computed(() => {
      return store.getters.bookedID;
    });
    const setNullBookedID = () => {
      store.state.bookedID = null;
    };

    const breakpoints = {
      // 700px and up
      800: {
        itemsToShow: 1,
        snapAlign: "center",
      },
      // 1024 and up
      1024: {
        itemsToShow: 3,
        snapAlign: "start",
      },
    };

    return {
      dateBooking,
      childrenNumber,
      youthNumber,
      adultNumber,
      totalGuestCount,
      toggleShowGuests,
      hideDropdown,
      showGuests,
      tour,
      auth,
      currentImg,
      changeActivePicture,
      indexOfActive,
      recommendedTours,
      breakpoints,
      dataBooked,
      bookTour,
      totalGuest,
      modalActive,
      modalContent,
      toggleModal,
      bookedID,
      popupContent,
      setNullBookedID,
    };
    // GET https://triplocator.net/api/rest/get/tour/{tour_id}
  },
};
</script>

<style>
.dp__pointer {
  border-radius: 0.375rem;
}
</style>