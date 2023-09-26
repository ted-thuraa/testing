<template>
  <!-- eslint-disable -->

  <div ref="targetElement" v-if="link && link.data && link.data.formtype">
    <component
      :is="getFormComponent(link.data.formtype)"
      :link="link"
      :theme="theme"
      class=""
    />
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

import { watch, ref, onMounted, toRefs } from "vue";
import { useStore } from "vuex";
const store = useStore();

const props = defineProps({
  link: Object,
  theme: Object,
});
const { link, theme } = toRefs(props);
console.log(link);

let data = ref({});

const isVisible = ref(false);
const viewRecorded = ref(false);

const handleIntersection = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      isVisible.value = true;
      if (targetElement.value) {
        observer.unobserve(targetElement.value);
      }
      //observer.unobserve(targetElement);
    }
  });
};

const targetElement = ref(null);

let observer;

onMounted(() => {
  observer = new IntersectionObserver(handleIntersection, {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  });

  observer.observe(targetElement.value);
});

async function updateAnaltics() {
  if (isVisible.value == true && viewRecorded.value == false) {
    data.value = {
      page_id: store.state.guestpagedata.data.page.id,
      link_id: link.value.id,
    };
    try {
      const res = await store.dispatch("gotchYaFormViews", data.value);
      console.log(res);
      viewRecorded.value == true;
    } catch (error) {
      console.log(error);
    }
  }
}

watch(
  () => isVisible.value,
  async () => {
    console.log(isVisible.value);
    updateAnaltics();
  }
);

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
    case "Hire":
      return Hire;
    case "Custom":
      return Custom;
    case "Contact form":
      return Contact;
    // Handle other categories here if needed
    default:
      return; // Replace 'DefaultComponent' with a fallback component name
  }
}
</script>

<style lang="scss" scoped></style>
