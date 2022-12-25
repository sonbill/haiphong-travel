<template>
  <div class="relative z-50 bg-white">
    <div class="mx-auto max-w-7xl px-4 sm:px-6">
      <div
        class="
          flex
          items-center
          justify-between
          border-b-2 border-gray-100
          py-6
          md:justify-start md:space-x-10
        "
      >
        <div class="flex justify-start lg:w-0 lg:flex-1">
          <router-link to="/">
            <span class="sr-only">HP TRAVEL</span>
            <img
              class="h-8 w-auto sm:h-10"
              src="../assets/img/cropped-Vision-Travel-icon.png"
              alt=""
            />
          </router-link>
        </div>
        <div class="-my-2 -mr-2 md:hidden">
          <button
            type="button"
            class="
              inline-flex
              items-center
              justify-center
              rounded-md
              bg-white
              p-2
              text-gray-400
              hover:bg-gray-100 hover:text-gray-500
              focus:outline-none
              focus:ring-2
              focus:ring-inset
              focus:ring-[#f97316]
            "
            aria-expanded="false"
          >
            <span class="sr-only">Open menu</span>
            <!-- Heroicon name: outline/bars-3 -->
            <svg
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        <nav class="hidden space-x-10 md:flex">
          <!-- NAV ITEM - 1 -->
          <div class="relative" v-click-outside-element="hideDropdown">
            <!-- Item active: "text-gray-900", Item inactive: "text-gray-500" -->
            <button
              type="button"
              class="
                text-gray-500
                group
                inline-flex
                items-center
                rounded-md
                bg-white
                text-base
                font-medium
                hover:text-gray-900
                focus:outline-none
                focus:ring-2
                focus:ring-[#f97316]
                focus:ring-offset-2
              "
              @click="toggleDropdown()"
              aria-expanded="false"
            >
              <span>Nước ngoài</span>
              <!--
              Heroicon name: mini/chevron-down

              Item active: "text-gray-600", Item inactive: "text-gray-400"
            -->
              <svg
                class="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>

            <!--
            'Solutions' flyout menu, show/hide based on flyout menu state.

            Entering: "transition ease-out duration-200"
              From: "opacity-0 translate-y-1"
              To: "opacity-100 translate-y-0"
            Leaving: "transition ease-in duration-150"
              From: "opacity-100 translate-y-0"
              To: "opacity-0 translate-y-1"
          -->
            <div
              class="
                absolute
                z-10
                -ml-4
                mt-3
                w-screen
                max-w-sm
                transform
                px-2
                sm:px-0
                lg:left-1/2 lg:ml-0 lg:-translate-x-1/2
              "
              v-show="showDropdown"
            >
              <div
                class="
                  overflow-hidden
                  rounded-lg
                  shadow-lg
                  ring-1 ring-black ring-opacity-5
                "
              >
                <div
                  class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8"
                >
                  <!-- AMERICAS -->
                  <a
                    href="/destinations/USA"
                    class="
                      -m-3
                      flex
                      items-start
                      rounded-lg
                      p-3
                      hover:bg-gray-50
                      text-orange-500
                    "
                  >
                    <!-- Heroicon name: outline/chart-bar -->
                    <span class="material-icons"> emoji_transportation </span>
                    <div class="ml-4">
                      <p class="text-base font-medium text-gray-900">
                        Americas
                      </p>
                      <!-- <p class="mt-1 text-sm text-gray-500">
                        Get an overview of the most interesting places in
                        America with our American Continent tour Packages
                      </p> -->
                    </div>
                  </a>
                  <!-- NEW ZEALAND -->
                  <a
                    href="/destinations/New Zealand"
                    class="
                      -m-3
                      flex
                      items-start
                      rounded-lg
                      p-3
                      hover:bg-gray-50
                      text-orange-500
                    "
                  >
                    <!-- Heroicon name: outline/chart-bar -->
                    <span class="material-icons"> surfing </span>
                    <div class="ml-4">
                      <p class="text-base font-medium text-gray-900">
                        New Zealand
                      </p>
                      <!-- <p class="mt-1 text-sm text-gray-500">
                        From unspoilt, 90 mile beach in the far North to the
                        captivating Milford Sound in the South Island, there’s
                        plenty to see and do.
                      </p> -->
                    </div>
                  </a>
                  <!-- JAPAN -->
                  <a
                    href="/destinations/Japan"
                    class="
                      -m-3
                      flex
                      items-start
                      rounded-lg
                      p-3
                      hover:bg-gray-50
                      text-orange-500
                    "
                  >
                    <!-- Heroicon name: outline/chart-bar -->
                    <span class="material-icons"> deck </span>
                    <div class="ml-4">
                      <p class="text-base font-medium text-gray-900">Japan</p>
                      <!-- <p class="mt-1 text-sm text-gray-500">
                        From unspoilt, 90 mile beach in the far North to the
                        captivating Milford Sound in the South Island, there’s
                        plenty to see and do.
                      </p> -->
                    </div>
                  </a>
                  <!-- ENGLAND -->
                  <a
                    href="/destinations/England"
                    class="
                      -m-3
                      flex
                      items-start
                      rounded-lg
                      p-3
                      hover:bg-gray-50
                      text-orange-500
                    "
                  >
                    <!-- Heroicon name: outline/chart-bar -->
                    <span class="material-icons"> castle </span>
                    <div class="ml-4">
                      <p class="text-base font-medium text-gray-900">England</p>
                      <!-- <p class="mt-1 text-sm text-gray-500">
                        From unspoilt, 90 mile beach in the far North to the
                        captivating Milford Sound in the South Island, there’s
                        plenty to see and do.
                      </p> -->
                    </div>
                  </a>
                  <!-- ITALY -->
                  <a
                    href="/destinations/Italy"
                    class="
                      -m-3
                      flex
                      items-start
                      rounded-lg
                      p-3
                      hover:bg-gray-50
                      text-orange-500
                    "
                  >
                    <!-- Heroicon name: outline/chart-bar -->
                    <span class="material-icons"> nights_stay </span>
                    <div class="ml-4">
                      <p class="text-base font-medium text-gray-900">Italy</p>
                      <!-- <p class="mt-1 text-sm text-gray-500">
                        From unspoilt, 90 mile beach in the far North to the
                        captivating Milford Sound in the South Island, there’s
                        plenty to see and do.
                      </p> -->
                    </div>
                  </a>
                  <!-- KOREA -->
                  <a
                    href="#"
                    class="
                      -m-3
                      flex
                      items-start
                      rounded-lg
                      p-3
                      hover:bg-gray-50
                      text-orange-500
                    "
                  >
                    <!-- Heroicon name: outline/chart-bar -->
                    <span class="material-icons"> location_city </span>
                    <div class="ml-4">
                      <p class="text-base font-medium text-gray-900">Korea</p>
                      <!-- <p class="mt-1 text-sm text-gray-500">
                        From unspoilt, 90 mile beach in the far North to the
                        captivating Milford Sound in the South Island, there’s
                        plenty to see and do.
                      </p> -->
                    </div>
                  </a>
                </div>

                <!-- CONTACT -->
                <div
                  class="
                    space-y-6
                    bg-gray-50
                    px-5
                    py-5
                    sm:flex sm:space-y-0 sm:space-x-10 sm:px-8
                  "
                >
                  <div class="flow-root">
                    <a
                      href="#"
                      class="
                        -m-3
                        flex
                        items-center
                        rounded-md
                        p-3
                        text-base
                        font-medium
                        text-gray-900
                        hover:bg-gray-100
                      "
                    >
                      <!-- Heroicon name: outline/phone -->
                      <svg
                        class="h-6 w-6 flex-shrink-0 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                        />
                      </svg>
                      <span class="ml-3">Contact Sales: 028.38383926 </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- NAV ITEM - 2 -->
          <div class="relative" v-click-outside-element="hideDropdownTwo">
            <!-- Item active: "text-gray-900", Item inactive: "text-gray-500" -->
            <button
              type="button"
              class="
                text-gray-500
                group
                inline-flex
                items-center
                rounded-md
                bg-white
                text-base
                font-medium
                hover:text-gray-900
                focus:outline-none
                focus:ring-2
                focus:ring-[#f97316]
                focus:ring-offset-2
              "
              @click="toggleDropdownTwo()"
              aria-expanded="false"
            >
              <span>Nội địa</span>
              <!--
              Heroicon name: mini/chevron-down

              Item active: "text-gray-600", Item inactive: "text-gray-400"
            -->
              <svg
                class="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>

            <!--
            'More' flyout menu, show/hide based on flyout menu state.

            Entering: "transition ease-out duration-200"
              From: "opacity-0 translate-y-1"
              To: "opacity-100 translate-y-0"
            Leaving: "transition ease-in duration-150"
              From: "opacity-100 translate-y-0"
              To: "opacity-0 translate-y-1"
          -->
            <div
              class="
                absolute
                left-1/2
                z-10
                mt-3
                w-screen
                max-w-md
                -translate-x-1/2
                transform
                px-2
                sm:px-0
              "
              v-show="showDropdownTwo"
            >
              <div
                class="
                  overflow-hidden
                  rounded-lg
                  shadow-lg
                  ring-1 ring-black ring-opacity-5
                "
              >
                <div
                  class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8"
                >
                  <!-- HÀ NỘI -->
                  <a
                    href="/local/Hà Nội"
                    class="
                      -m-3
                      flex
                      items-start
                      rounded-lg
                      p-3
                      hover:bg-gray-50
                      text-orange-500
                    "
                  >
                    <!-- Heroicon name: outline/lifebuoy -->
                    <span class="material-icons"> temple_buddhist </span>
                    <div class="ml-4">
                      <p class="text-base font-medium text-gray-900">Hà Nội</p>
                      <!-- <p class="mt-1 text-sm text-gray-500">
                        Get all of your questions answered in our forums or
                        contact support.
                      </p> -->
                    </div>
                  </a>
                  <!-- ĐÀ NẴNG -->
                  <a
                    href="/local/Đà Nẵng"
                    class="
                      -m-3
                      flex
                      items-start
                      rounded-lg
                      p-3
                      hover:bg-gray-50
                      text-orange-500
                    "
                  >
                    <!-- Heroicon name: outline/bookmark-square -->
                    <span class="material-icons"> synagogue </span>
                    <div class="ml-4">
                      <p class="text-base font-medium text-gray-900">Đà Nẵng</p>
                      <!-- <p class="mt-1 text-sm text-gray-500">
                        Learn how to maximize our platform to get the most out
                        of it.
                      </p> -->
                    </div>
                  </a>
                  <!-- ĐÀ LẠT -->
                  <a
                    href="/local/Đà Lạt"
                    class="
                      -m-3
                      flex
                      items-start
                      rounded-lg
                      p-3
                      hover:bg-gray-50
                      text-orange-500
                    "
                  >
                    <!-- Heroicon name: outline/calendar -->
                    <span class="material-icons"> church </span>
                    <div class="ml-4">
                      <p class="text-base font-medium text-gray-900">Đà Lạt</p>
                      <!-- <p class="mt-1 text-sm text-gray-500">
                        See what meet-ups and other events we might be planning
                        near you.
                      </p> -->
                    </div>
                  </a>
                  <!-- QUI NHƠN -->
                  <a
                    href="/local/Qui Nhơn"
                    class="
                      -m-3
                      flex
                      items-start
                      rounded-lg
                      p-3
                      hover:bg-gray-50
                      text-orange-500
                    "
                  >
                    <!-- Heroicon name: outline/shield-check -->
                    <span class="material-icons"> beach_access </span>
                    <div class="ml-4">
                      <p class="text-base font-medium text-gray-900">
                        Qui Nhơn
                      </p>
                      <!-- <p class="mt-1 text-sm text-gray-500">
                        Understand how we take your privacy seriously.
                      </p> -->
                    </div>
                  </a>
                  <!-- HỒ CHÍ MINH -->
                  <a
                    href="/local/Hồ Chí Minh"
                    class="
                      -m-3
                      flex
                      items-start
                      rounded-lg
                      p-3
                      hover:bg-gray-50
                      text-orange-500
                    "
                  >
                    <!-- Heroicon name: outline/shield-check -->
                    <span class="material-icons"> apartment </span>
                    <div class="ml-4">
                      <p class="text-base font-medium text-gray-900">
                        Hồ Chí Minh
                      </p>
                      <!-- <p class="mt-1 text-sm text-gray-500">
                        Understand how we take your privacy seriously.
                      </p> -->
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <!-- NAV ITEM - 3 -->
          <router-link
            :to="{ name: 'AllTours' }"
            class="text-base font-medium text-gray-500 hover:text-gray-900"
            >Tất cả Tour</router-link
          >
          <!-- NAV ITEM - 4 -->
          <router-link
            :to="{ name: 'ContactView' }"
            class="text-base font-medium text-gray-500 hover:text-gray-900"
            >Liên hệ</router-link
          >
        </nav>
        <div class="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
          <!-- NOT AUTH -->
          <div v-if="user">
            <!-- PROFILE -->
            <router-link
              :to="{ name: 'UserProfile' }"
              class="
                whitespace-nowrap
                text-base
                font-medium
                text-gray-500
                hover:text-gray-900
              "
            >
              {{ user.displayName || name }}
            </router-link>
            <!-- LOGOUT -->
            <button
              @click="logout"
              class="
                ml-8
                inline-flex
                items-center
                justify-center
                whitespace-nowrap
                rounded-md
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
            >
              Đăng xuất
            </button>
          </div>
          <!-- AUTH -->
          <div v-else>
            <router-link
              :to="{ name: 'login' }"
              class="
                whitespace-nowrap
                text-base
                font-medium
                text-gray-500
                hover:text-gray-900
              "
              >Đăng nhập</router-link
            >
            <router-link
              :to="{ name: 'register' }"
              class="
                ml-8
                inline-flex
                items-center
                justify-center
                whitespace-nowrap
                rounded-md
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
              >Đăng ký</router-link
            >
          </div>
        </div>
      </div>
    </div>

    <!--
    Mobile menu, show/hide based on mobile menu state.

    Entering: "duration-200 ease-out"
      From: "opacity-0 scale-95"
      To: "opacity-100 scale-100"
    Leaving: "duration-100 ease-in"
      From: "opacity-100 scale-100"
      To: "opacity-0 scale-95"
  -->
    <div
      class="
        absolute
        inset-x-0
        top-0
        origin-top-right
        transform
        p-2
        transition
        md:hidden
      "
      v-click-outside-element="hideMenu"
    >
      <div
        class="
          divide-y-2 divide-gray-50
          rounded-lg
          bg-white
          shadow-lg
          ring-1 ring-black ring-opacity-5
        "
      >
        <div class="px-5 pt-5 pb-6">
          <div class="flex items-center justify-between">
            <div>
              <img
                class="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt="Your Company"
              />
            </div>
            <div class="-mr-2">
              <button
                type="button"
                class="
                  inline-flex
                  items-center
                  justify-center
                  rounded-md
                  bg-white
                  p-2
                  text-gray-400
                  hover:bg-gray-100 hover:text-gray-500
                  focus:outline-none
                  focus:ring-2
                  focus:ring-inset
                  focus:ring-indigo-500
                "
                @click="closeMenu()"
              >
                <span class="sr-only">Close menu</span>
                <!-- Heroicon name: outline/x-mark -->
                <svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div class="mt-6" v-show="showMenu">
            <nav class="grid gap-y-8">
              <a
                href="#"
                class="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
              >
                <!-- Heroicon name: outline/chart-bar -->
                <svg
                  class="h-6 w-6 flex-shrink-0 text-indigo-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
                  />
                </svg>
                <span class="ml-3 text-base font-medium text-gray-900"
                  >Analytics</span
                >
              </a>

              <a
                href="#"
                class="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
              >
                <!-- Heroicon name: outline/cursor-arrow-rays -->
                <svg
                  class="h-6 w-6 flex-shrink-0 text-indigo-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59"
                  />
                </svg>
                <span class="ml-3 text-base font-medium text-gray-900"
                  >Engagement</span
                >
              </a>

              <a
                href="#"
                class="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
              >
                <!-- Heroicon name: outline/shield-check -->
                <svg
                  class="h-6 w-6 flex-shrink-0 text-indigo-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                  />
                </svg>
                <span class="ml-3 text-base font-medium text-gray-900"
                  >Security</span
                >
              </a>

              <a
                href="#"
                class="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
              >
                <!-- Heroicon name: outline/squares-2x2 -->
                <svg
                  class="h-6 w-6 flex-shrink-0 text-indigo-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
                  />
                </svg>
                <span class="ml-3 text-base font-medium text-gray-900"
                  >Integrations</span
                >
              </a>

              <a
                href="#"
                class="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
              >
                <!-- Heroicon name: outline/arrow-path -->
                <svg
                  class="h-6 w-6 flex-shrink-0 text-indigo-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 12c0-1.232.046-2.453.138-3.662a4.006 4.006 0 013.7-3.7 48.678 48.678 0 017.324 0 4.006 4.006 0 013.7 3.7c.017.22.032.441.046.662M4.5 12l-3-3m3 3l3-3m12 3c0 1.232-.046 2.453-.138 3.662a4.006 4.006 0 01-3.7 3.7 48.657 48.657 0 01-7.324 0 4.006 4.006 0 01-3.7-3.7c-.017-.22-.032-.441-.046-.662M19.5 12l-3 3m3-3l3 3"
                  />
                </svg>
                <span class="ml-3 text-base font-medium text-gray-900"
                  >Automations</span
                >
              </a>
            </nav>
          </div>
        </div>
        <div class="space-y-6 py-6 px-5" v-show="showMenu">
          <div class="grid grid-cols-2 gap-y-4 gap-x-8">
            <a
              href="#"
              class="text-base font-medium text-gray-900 hover:text-gray-700"
              >Pricing</a
            >

            <a
              href="#"
              class="text-base font-medium text-gray-900 hover:text-gray-700"
              >Docs</a
            >

            <a
              href="#"
              class="text-base font-medium text-gray-900 hover:text-gray-700"
              >Help Center</a
            >

            <a
              href="#"
              class="text-base font-medium text-gray-900 hover:text-gray-700"
              >Guides</a
            >

            <a
              href="#"
              class="text-base font-medium text-gray-900 hover:text-gray-700"
              >Events</a
            >

            <a
              href="#"
              class="text-base font-medium text-gray-900 hover:text-gray-700"
              >Security</a
            >
          </div>
          <div>
            <a
              href="#"
              class="
                flex
                w-full
                items-center
                justify-center
                rounded-md
                border border-transparent
                bg-indigo-600
                px-4
                py-2
                text-base
                font-medium
                text-white
                shadow-sm
                hover:bg-indigo-700
              "
              >Sign up</a
            >
            <p class="mt-6 text-center text-base font-medium text-gray-500">
              Existing customer?
              <a href="#" class="text-indigo-600 hover:text-indigo-500"
                >Sign in</a
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase";
import { ref, onMounted, computed, onBeforeMount } from "vue";
import ClickOutside from "vue-click-outside";
import { useStore } from "vuex";
import { auth } from "../firebase/index";

export default {
  directives: { ClickOutside },
  setup() {
    const store = useStore();

    const solutions = [
      {
        name: "Analytics",
        description:
          "Get a better understanding of where your traffic is coming from.",
        href: "#",
        icon: "x",
      },
      {
        name: "Engagement",
        description:
          "Speak directly to your customers in a more meaningful way.",
        href: "#",
        icon: "x",
      },
      {
        name: "Security",
        description: "Your customers' data will be safe and secure.",
        href: "#",
        icon: "x",
      },
      {
        name: "Integrations",
        description:
          "Connect with third-party tools that you're already using.",
        href: "#",
        icon: "x",
      },
      {
        name: "Automations",
        description:
          "Build strategic funnels that will drive your customers to convert",
        href: "#",
        icon: "x",
      },
    ];
    const callsToAction = [
      { name: "Watch Demo", href: "#", icon: "x" },
      { name: "Contact Sales", href: "#", icon: "x" },
    ];
    const resources = [
      {
        name: "Help Center",
        description:
          "Get all of your questions answered in our forums or contact support.",
        href: "#",
        icon: "x",
      },
      {
        name: "Guides",
        description:
          "Learn how to maximize our platform to get the most out of it.",
        href: "#",
        icon: "x",
      },
      {
        name: "Events",
        description:
          "See what meet-ups and other events we might be planning near you.",
        href: "#",
        icon: "x",
      },
      {
        name: "Security",
        description: "Understand how we take your privacy seriously.",
        href: "#",
        icon: "x",
      },
    ];
    const recentPosts = [
      { id: 1, name: "Boost your conversion rate", href: "#" },
      {
        id: 2,
        name: "How to use search engine optimization to drive traffic to your site",
        href: "#",
      },
      { id: 3, name: "Improve your customer experience", href: "#" },
    ];

    const internationalTours = [
      {
        id: 1,
        name: "Asia",
        href: "asia",
        icon: '<span class="material-icons">south_america</span>',
      },
      {
        id: 2,
        name: "Africa",
        href: "africa",
        icon: '<span class="material-icons">south_america</span>',
      },
      {
        id: 3,
        name: "Europe",
        href: "europe",
        icon: '<span class="material-icons">south_america</span>',
      },
      {
        id: 1,
        name: "Asia",
        href: "asia",
        icon: '<span class="material-icons">south_america</span>',
      },
      {
        id: 1,
        name: "Asia",
        href: "asia",
        icon: '<span class="material-icons">south_america</span>',
      },
    ];
    const domesticTours = [];

    const destinations = ref([]);

    const getDestinations = async () => {
      const querySnapshot = await getDocs(collection(db, "destination"));
      let fbDestinations = [];
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        const destination = {
          id: doc.id,
          africa: doc.data().Africa,
          asia: doc.data().Asia,
          europe: doc.data().Europe,
          na: doc.data().NorthAmerica,
          sa: doc.data().SouthAmerica,
        };
        fbDestinations.push(destination);
      });
      destinations.value = fbDestinations;
      console.log(destinations._rawValue);
    };

    onMounted(async () => {
      await getDestinations();
    });

    const showDropdown = ref(false);
    const showDropdownTwo = ref(false);
    const toggleDropdown = () => {
      showDropdown.value = !showDropdown.value;
    };
    const toggleDropdownTwo = () => {
      showDropdownTwo.value = !showDropdownTwo.value;
    };

    const closeDropdown = () => {
      showDropdown.value = false;
      showDropdownTwo.value = false;
    };
    const hideDropdown = () => {
      showDropdown.value = false;
    };
    const hideDropdownTwo = () => {
      showDropdownTwo.value = false;
    };

    const showMenu = ref(false);
    const closeMenu = () => {
      showMenu.value = !showMenu.value;
    };

    const hideMenu = () => {
      showMenu.value = false;
    };

    const user = computed(() => store.getters.user);
    const name = ref("");

    onBeforeMount(() => {
      const detailUser = auth.currentUser;
      if (detailUser) {
        name.value = detailUser.email.split("@")[0];
      }
    });

    const logout = () => {
      store.dispatch("logout");
    };

    return {
      toggleDropdown,
      toggleDropdownTwo,
      closeDropdown,
      hideDropdown,
      hideDropdownTwo,
      closeMenu,
      hideMenu,
      logout,
      showMenu,
      showDropdown,
      showDropdownTwo,
      solutions,
      callsToAction,
      resources,
      recentPosts,
      destinations,
      user,
      name,
    };
  },
};
</script>