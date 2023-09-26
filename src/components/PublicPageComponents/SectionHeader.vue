<template>
  <div class="relative min-w-[358px] md:w-[654px] my-4">
    <div class="">
      <h3
        :class="[
          {
            'text-left': link.data.textAlignment === 'left',
          },
          {
            'text-center': link.data.textAlignment === 'center',
          },
          {
            'text-right': link.data.textAlignment === 'right',
          },
          theme.htext,
        ]"
        class="text-center font-bold text-lg md:text-xl"
      >
        {{ link.name }}
      </h3>
    </div>
  </div>
</template>

<script setup>
import { watch, ref, onMounted, toRefs } from "vue";
import { useStore } from "vuex";
const store = useStore();

const props = defineProps({
  link: Object,
  theme: Object,
});
const { link, theme } = toRefs(props);
console.log(link);
</script>

<style lang="scss" scoped></style>
