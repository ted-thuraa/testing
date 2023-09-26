<template>
  <div class="bg-white h-full">
    <swiper
      :modules="modules"
      :space-between="20"
      :loop="true"
      :pagination="{ clickable: true }"
      :autoplay="{
        delay: 7000,
        disableOnIntreracton: false,
        pauseOnMouseEnter: true,
      }"
    >
      <swiper-slide v-for="text in swiperTextBase" :key="text.description">
        <div class="bg-gray-300">
          <h1>{{ text.author }}</h1>
          <p>{{ text.description }}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { ref } from "vue";

export default {
  components: { Swiper, SwiperSlide },
  setup() {
    const swiperTextBase = ref([
      {
        author: "Elon musk",
        description: "blablalbla",
      },
      {
        author: "Jeff bezos",
        description: "blablalbla",
      },
      {
        author: "TED",
        description: "Shit just got clear",
      },
    ]);
    return { modules: [Pagination, Autoplay], swiperTextBase };
  },
};
</script>

<style></style>
