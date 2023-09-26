<template>
  <div
    id="AdminLayout"
    class="relative md:w-full h-screen flex md:overflow-y-hidden bgdash"
  >
    <Notification />
    <aside
      id="sidebar"
      class="relative bg-gray-50 hidden md:block w-0 md:w-52 flex-none transition-transform -translate-x-full sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div class="px-3 py-4">
        <router-link
          to="/admin"
          class="flex-shrink-0 inline-flex items-center font-bold text-gray-950 mt-8"
        >
          <img class="h-10 w-10 mr-3" src="" alt="" />
          Creatorpage
        </router-link>
      </div>
      <div class="flex flex-col justify-between h-[35rem]">
        <div class="h-auto px-3 py-4 relative overflow-y-auto">
          <ul class="font-medium">
            <li v-for="link in links" :key="link">
              <router-link
                :to="link.url"
                tag="li"
                class="flex items-center p-2 text-gray-700 rounded-lg hover:text-white"
              >
                <div
                  class="mr-2 p-1 rounded-md ring-1 ring-slate-900/5 shadow-sm group-hover:shadow group-hover:ring-slate-900/10 group-hover:shadow-indigo-300"
                >
                  <component
                    :is="link.icon"
                    class="w-5 h-5 mr-0.5"
                    size="18"
                    :color="route.fullPath == link.url ? '#000000' : '#676B5F'"
                  ></component>
                </div>

                <span
                  class="ml-3"
                  :class="
                    route.fullPath == link.url
                      ? 'font-bold text-[#000000]'
                      : 'text-[#303030] font-normal'
                  "
                >
                  {{ link.name }}</span
                >
              </router-link>
            </li>
          </ul>
        </div>
        <div class="px-3">
          <router-link
            to="/app/upgrade"
            class="flex items-center text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 text-yellow-100"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
              />
            </svg>

            <Span class="ml-2">Upgrade</Span>
          </router-link>

          <a
            @click="logout"
            class="cursor-pointer flex items-center p-2 rounded-lg text-gray-900 bg-gray-50 hover:bg-gray-100 border border-gray-200"
          >
            <span
              class="flex-1 ml-2 text-gray-900 font-semibold whitespace-nowrap"
              >Log out</span
            >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5 stroke-gray-900 stroke-2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </a>
          <div class="mt-2 py-4 border-t-[1px] border-gray-300">
            <div class="inline-flex items-center">
              <div class="">
                <img
                  :src="store.state.user.image"
                  alt=""
                  class="rounded-[2rem] w-[25px] h-[25px] object-cover"
                />
              </div>
              <span class="ml-2 text-black font-medium">{{
                store.state.user.fullname
              }}</span>
            </div>
          </div>
        </div>
      </div>
    </aside>

    <div class="w-full flex-auto">
      <!-- <Navbar /> -->
      <div class="relative bg-[#ffffff] w-[390px] md:w-full mx-16 md:mx-0">
        <div class="md:hidden bg-white px-1">
          <div class="w-full px-3 py-4 relative">
            <ul
              class="w-full bg-gray-50 rounded-[0.5rem] p-1 font-medium flex flex-row items-center justify-center"
            >
              <li v-for="link in links" :key="link" class="w-[6rem]">
                <router-link
                  :to="link.url"
                  tag="li"
                  class="flex flex-col justify-center items-center py-1 rounded-[0.5rem]"
                  :class="
                    route.fullPath == link.url ? 'bg-white shadow-md' : ''
                  "
                >
                  <div
                    class="rounded-md group-hover:shadow group-hover:ring-slate-900/10 group-hover:shadow-indigo-300"
                  >
                    <component
                      :is="link.icon"
                      class="w-5 h-5"
                      size="18"
                      :color="
                        route.fullPath == link.url ? '#000000' : '#676B5F'
                      "
                    ></component>
                  </div>

                  <span
                    class="text-xs"
                    :class="
                      route.fullPath == link.url
                        ? 'font-bold text-[#000000]'
                        : 'text-[#676B5F] font-normal'
                    "
                  >
                    {{ link.name }}</span
                  >
                </router-link>
              </li>
            </ul>
          </div>
        </div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script setup>
import Notification from "../components/popovers/notification.vue";
import Dash from "../assets/svg/Dash.vue";
import Analytics from "../assets/svg/Analytics.vue";
import Theme from "../assets/svg/Theme.vue";
import Settings from "../assets/svg/Settings.vue";
import { ref, watch, computed, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import store from "../store";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";

const route = useRoute();
const router = useRouter();

let isTopNav = ref(false);
let windowWidth = ref(window.innerWidth ? window.innerWidth : "");
let isSecondaryTopNav = ref(false);
let username = ref("");
let fullname = ref("");

onMounted(() => {
  username.value = store.state.user.username;
  fullname.value = store.state.user.fullname;
  window.addEventListener("resize", function () {
    windowWidth.value = window.innerWidth;
  });
});

const links = ref([
  { name: "Page", url: "/app/dashboard", icon: Dash },
  {
    name: "Apperance",
    url: "/app/appearance",
    icon: Theme,
  },
  {
    name: "Analytics",
    url: "/app/analytics",
    icon: Analytics,
  },
  {
    name: "Settings",
    url: "/app/settings",
    icon: Settings,
  },
  //{ name: "Settings", url: "/", icon: "material-symbols:settings" },
]);

//   const linksSecondaryNav = ref([
//     { name: "Links", url: "/admin", icon: "Dash" },
//     {
//       name: "Apperance",
//       url: "/admin/apperance",
//       icon: "Theme",
//     },
//     {
//       name: "Analytics",
//       url: "/admin/analytics",
//       icon: "Analytics",
//     },
//     { name: "More", url: "/admin/more", icon: "", img: userStore.image },
//   ]);

//   const linksMobile = ref([
//     {
//       name: "Links",
//       url: "/app/dashboard",
//       icon: "",
//       img: "",
//     },
//     {
//       name: "Apperance",
//       url: "/app/apperance",
//       icon: "",
//       img: "",
//     },
//     {
//       name: "Analytics",
//       url: "/app/analytics",
//       icon: "",
//       img: "",
//     },
//     // {
//     //   name: "Preview",
//     //   url: "/admin/preview",
//     //   icon: "",
//     //   img: "",
//     // },

//     //{ name: "More", url: "/admin/more", icon: "", img: userStore.image },
//   ]);

//   const currentMobilePage = () => {
//     switch (route.fullPath) {
//       case "/admin":
//         return "Links";
//         break;
//       case "/admin/apperance":
//         return "Apperance";
//         break;
//       case "/admin/analytics":
//         return "Analytics";
//         break;
//       case "/admin/preview":
//         return "Preview";
//         break;
//       case "/admin/more":
//         return "More";
//         break;
//     }
//   };

//   const openMenu = (str) => {
//     if (str === "TopNav") {
//       isTopNav.value = true;
//     } else if (str === "SecondaryTopNav") {
//       isSecondaryTopNav.value = true;
//     } else {
//       router.push("/admin/settings");
//     }
//   };

//   const getProfileLink = (username) => {
//     return `/${(username = username)}`;
//   };

const logout = async () => {
  let res = confirm("Are you sure you want to sign out?");
  try {
    if (res) {
      await store.dispatch("logout");
      router.push("/");
      return;
    }
    isTopNav.value = false;
  } catch (error) {
    console.log(error);
  }
};

//   watch(
//     () => windowWidth.value,
//     () => {
//       if (windowWidth.value <= 767) {
//         isTopNav.value = false;
//       }
//     }
//   );
</script>
