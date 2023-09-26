import { createApp } from "vue";
import store from "./store";
import router from "./router";
import "./style.css";
import App from "./App.vue";
import VuePlyr from "vue-plyr";
import "vue-plyr/dist/vue-plyr.css";
import VueSocialSharing from "vue-social-sharing";

createApp(App)
  .use(store)
  .use(router)
  .use(VueSocialSharing)
  .use(VuePlyr, {
    plyr: {},
  })
  .mount("#app");
