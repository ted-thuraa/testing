<template>
  <div v-if="link.layout === 'Cube'" class="relative aspect-[1/1.2]">
    <div
      class="mb-4 h-auto w-full p-[0.5rem] rounded-[24px]"
      :class="{
        [link.data.background_color]: link.data.background_color,
      }"
      style="box-shadow: 0 2px 4px rgba(0, 0, 0, 0.04)"
    >
      <div
        class="w-full min-h-[150px] flex flex-col text-left text-[#000] font-medium break-words"
        :class="[
          {
            'items-start': link.data.textPosition === 'top',
          },
          {
            'items-center': link.data.textPosition === 'middle',
          },
          {
            'items-end': link.data.textPosition === 'Bottom',
          },

          {
            'items-start': !link.data.textPosition,
          },
        ]"
      >
        <p
          class="h-full font-semibold text-base"
          :style="{ fontFamily: link.data.font }"
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

            {
              'text-left': !link.data.textAlignment,
            },
          ]"
        >
          {{ link.description }}
        </p>
      </div>
      <span class="text-sm text-gray-600 font-normal">Feb 21, 2023 </span>
    </div>
  </div>
  <div v-if="link.layout === 'Horizontalbar'" class="relative w-full">
    <div
      class="card-light-shadow mb-4 flex h-[265px] w-full p-[1.5rem] flex-1 !bg-[#f6c823] rounded-[24px]"
      style="box-shadow: 0 2px 4px rgba(0, 0, 0, 0.04)"
    >
      <div
        class="w-full mb-6 text-left text-[#000] font-medium text-lg break-words"
      >
        <p class="h-full" style="font-family: 'Dancing Script'">
          {{ link.description }}
        </p>
        <span class="text-sm font-normal">Feb 21, 2023</span>
      </div>
    </div>
  </div>
  <div v-if="link.layout === 'Block'" class="relative w-full">
    <div
      class="card-light-shadow mb-4 flex h-[265px] w-full p-[1.5rem] flex-1 !bg-[#f6c823] rounded-[24px]"
      style="box-shadow: 0 2px 4px rgba(0, 0, 0, 0.04)"
    >
      <div
        class="w-full mb-6 text-left text-[#000] font-medium text-lg break-words"
      >
        <p class="h-full" style="font-family: 'Dancing Script'">
          {{ link.description }}
        </p>
        <span class="text-sm font-normal">Feb 21, 2023</span>
      </div>
    </div>
  </div>
  <div v-if="link.layout === 'Verticalbar'" class="relative w-full">
    <div
      class="card-light-shadow mb-4 flex h-[265px] w-full p-[1.5rem] flex-1 !bg-[#f6c823] rounded-[24px]"
      style="box-shadow: 0 2px 4px rgba(0, 0, 0, 0.04)"
    >
      <div
        class="w-full mb-6 text-left text-[#000] font-medium text-lg break-words"
        :class="[
          {
            'items-start': link.data.textPosition === 'top',
          },
          {
            'items-center': link.data.textPosition === 'middle',
          },
          {
            'items-end': link.data.textPosition === 'Bottom',
          },

          {
            'items-start': !link.data.textPosition,
          },
        ]"
      >
        <p
          class="h-full"
          :style="{ fontFamily: link.data.font }"
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

            {
              'text-left': !link.data.textAlignment,
            },
          ]"
        >
          {{ link.description }}
        </p>
        <span class="text-sm font-normal">Feb 21, 2023</span>
      </div>
    </div>
  </div>
  <div v-if="!link.layout" class="relative w-full">
    <div
      class="mb-4 flex h-[265px] w-full p-[1.5rem] flex-1 rounded-[24px]"
      :class="{
        [link.data.background_color]: link.data.background_color,
      }"
      style="box-shadow: 0 2px 4px rgba(0, 0, 0, 0.04)"
    >
      <div
        class="w-full mb-6 text-left text-[#000] font-medium text-lg break-words"
        :class="[
          {
            'items-start': link.data.textPosition === 'top',
          },
          {
            'items-center': link.data.textPosition === 'middle',
          },
          {
            'items-end': link.data.textPosition === 'Bottom',
          },

          {
            'items-start': !link.data.textPosition,
          },
        ]"
      >
        <p
          class="h-full"
          :style="{ fontFamily: link.data.font }"
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

            {
              'text-left': !link.data.textAlignment,
            },
          ]"
        >
          {{ link.description }} {{ link.category }}
        </p>
        <span class="text-sm font-normal">Feb 21, 2023</span>
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
