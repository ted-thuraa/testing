<template>
  <!-- eslint-disable -->
  <div class="mb-4 bg-white card-light-shadow rounded-[24px] shadow">
    <div class="flex flex-col relative h-min pb-1 w-full">
      <div v-if="link && link.data && link.data.formtype" class="m-0 py-2 px-6">
        <component
          :is="getFormComponent(link.data.formtype)"
          :link="link"
          class=""
        />
      </div>
    </div>
  </div>
  <FormPanel
    :link="link"
    :isFormOpen="isFormOpen"
    @closeFormOpen="closeFormPanel"
  />
</template>

<script setup>
import MailingList from "../helpers/MailingList.vue";
import Poll from "../helpers/PollForm.vue";
import Rating from "../helpers/RatingForm.vue";
import Hire from "../helpers/HireForm.vue";
import Contact from "../helpers/ContactForm.vue";
import Custom from "../helpers/CustomForm.vue";
import FormPanel from "../popovers/FormPanel.vue";
import { watch, ref, onMounted, toRefs } from "vue";
import { useStore } from "vuex";
const store = useStore();

const props = defineProps({
  link: Object,
});
const { link } = toRefs(props);
console.log(link);

let isFormOpen = ref(false);

function openFormPanel() {
  isFormOpen.value = true;
}
function closeFormPanel() {
  isFormOpen.value = false;
}

function getFormComponent(category) {
  switch (category) {
    case "Mailing List":
      return MailingList;
    case "Waiting List":
      return MailingList;
    case "Poll":
      return Poll;
    case "Rating":
      return Rating;
    case "Hire me":
      return Hire;
    case "Custom":
      return Custom;
    //case "Contact form":
    //  return Contact;
    // Handle other categories here if needed
    default:
      return; // Replace 'DefaultComponent' with a fallback component name
  }
}
</script>

<style lang="scss" scoped></style>
