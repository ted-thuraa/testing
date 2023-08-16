<template>
    <div
        id="AdminLayout"
        class="relative w-full h-screen flex overflow-y-hidden"
    >
        <aside
            id="sidebar"
            class="w-52 flex-none bg-[#F3F3F1] transition-transform -translate-x-full sm:translate-x-0"
            aria-label="Sidebar"
        >
            <div class="px-3 py-4">
                <router-link
                    to="/admin"
                    class="flex-shrink-0 inline-flex items-center font-bold text-gray-900 mt-8"
                >
                    <img class="h-10 w-10 mr-3" src="" alt="" />
                    Linkhub
                </router-link>
            </div>
            <div class="flex flex-col justify-between h-[35rem]">
                <div class="h-auto px-3 py-4 relative overflow-y-auto">
                    <ul class="font-medium">
                        <li v-for="link in links" :key="link">
                            <router-link
                                :to="link.url"
                                tag="li"
                                class="flex items-center p-2 text-gray-300 rounded-lg hover:text-white"
                            >
                                <div
                                    class="mr-2 p-1 rounded-md ring-1 ring-slate-900/5 shadow-sm group-hover:shadow group-hover:ring-slate-900/10 group-hover:shadow-indigo-300"
                                >
                                    <component
                                        :is="link.icon"
                                        class="w-5 h-5 mr-0.5"
                                        size="18"
                                        :color="
                                            route.fullPath == link.url
                                                ? '#000000'
                                                : '#676B5F'
                                        "
                                    ></component>
                                </div>

                                <span
                                    class="ml-3 text-black"
                                    :class="
                                        route.fullPath == link.url
                                            ? 'text-[#000000]'
                                            : 'text-[#676B5F]'
                                    "
                                >
                                    {{ link.name }}</span
                                >
                            </router-link>
                        </li>
                    </ul>
                </div>
                <div class="px-3">
                    <a
                        @click="logout"
                        class="cursor-pointer flex items-center p-2 text-gray-400 rounded-lg hover:text-white"
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
                    <div class="py-4 border-t-[1px] border-gray-300">
                        <div class="inline-flex items-center">
                            <div class="">
                                <img
                                    :src="store.state.user.image"
                                    alt=""
                                    class="rounded-[2rem] w-[25px] h-[25px] object-cover"
                                />
                            </div>
                            <span class="ml-2 text-black font-medium">{{
                                fullname
                            }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </aside>

        <div class="w-full flex-auto">
            <!-- <Navbar /> -->
            <router-view></router-view>
        </div>
    </div>
</template>

<script setup>
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
    { name: "Links", url: "/app/dashboard", icon: Dash },
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
