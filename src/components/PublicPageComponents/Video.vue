<template>
  <div
    class="group mb-4 relative min-w-[288px] w-full h-auto bg-gray-50 rounded-2xl"
  >
    <div class="flex h-[258px] md:h-[300px] w-full overflow-hidden rounded-2xl">
      <div class="w-full h-full">
        <vue-plyr>
          <div class="plyr__video-embed">
            <iframe
              :src="link.url"
              allowfullscreen
              allowtransparency
              allow="autoplay"
            ></iframe>
          </div>
        </vue-plyr>
      </div>
    </div>
  </div>
</template>

<script setup>
import { watch, ref, onMounted, toRefs } from "vue";
import { useStore } from "vuex";
const store = useStore();

const props = defineProps({
  link: Object,
});
const { link } = toRefs(props);
</script>

<style lang="scss" scoped></style>
