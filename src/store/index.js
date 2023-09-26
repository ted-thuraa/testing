import { createStore } from "vuex";
import axiosClient from "../axios";

const store = createStore({
  state: {
    user: {
      id: "",
      uuid: "",
      currentplan: "",
      isAdmin: null,
      page_font: "",
      theme_id: "",
      fullname: "",
      username: "",
      page_layout: "",
      email: "",
      image: "",
      bio: "",
      location: "",
      creator_category: "",
      colors: null,
      isMailchimpAuthorized: false,
      isGooglesheetsAuthorized: false,
      isMobile: false,
      updatedLinkId: 0,
      addLinkOverlay: false,
      isPreviewOverlay: false,
      isAdmin: sessionStorage.getItem("isAdmin"),
      token: sessionStorage.getItem("TOKEN"),
      //token: 124,
    },

    socialicons: {
      loading: false,
      data: [],
    },

    linkitems: {
      loading: false,
      data: [],
    },
    questionTypes: [
      "text",
      "select",
      "radio",
      "checkbox",
      "input",
      "textarea",
      "email",
      "date",
    ],

    //guest
    guestpagedata: {
      loading: false,
      themeId: "",
      data: [],
    },

    //Admin
    clients: {
      loading: false,
      data: [],
    },
    userToEdit: {
      loading: false,
      data: [],
    },
    plans: {
      loading: false,
      data: [],
    },

    orders: {
      loading: false,
      data: [],
    },

    //loading and toasts
    notification: {
      show: false,
      type: null,
      message: null,
    },
  },
  getters: {},
  actions: {
    //auth
    async login({ commit }, user) {
      await axiosClient.post("/login", user).then(({ data }) => {
        commit("setUser", data.user);
        commit("setIsAdmin", data.user.isAdmin);
        commit("setToken", data.token);
        this.dispatch("getUserTheme");
        return data;
      });
    },
    async googleloginredirect({ commit }) {
      let res = await axiosClient.get("/google-login").then(({ data }) => {
        console.log(data);
        return data;
      });
      return res;
    },
    async googlelogintoken({ commit }, code) {
      let res = await axiosClient.post("/google-login-token", {
        code: code,
      });
      console.log(res);
      commit("setUser", res.data.user);
      //commit("setIsAdmin", res.user.isAdmin);
      commit("setToken", res.data.token);

      this.dispatch("getUserTheme");
      return res;
    },
    async verifyemailtoken({ commit }, code) {
      return axiosClient
        .post("/verify-email-token", { code: code })
        .then(({ data }) => {
          commit("setUser", data.user);
          commit("setIsAdmin", data.user.isAdmin);
          commit("setToken", data.token);
          console.log(data.user);
          this.dispatch("getUserTheme");
          return data;
        })
        .catch((error) => {
          console.log(error);
          //throw error;
          return error;
        });
    },
    async register({ commit }, user) {
      return axiosClient
        .post("/register", user)
        .then(({ data }) => {
          //commit("setUser", data.user);
          //commit("setIsAdmin", data.user.isAdmin);
          //commit("setToken", data.token);
          //console.log(data.user);
          //this.dispatch("getUserTheme");
          return data;
        })
        .catch((error) => {
          console.log(error);
          //throw error;
          return error;
        });
    },
    async logout({ commit }) {
      return axiosClient.post("/logout").then((response) => {
        commit("setToken", null);
        commit("setIsAdmin", null);
        commit("resetState");
        return response;
      });
    },
    async saveUsername({ commit }, user) {
      await axiosClient.post("/username", user).then(({ data }) => {
        commit("setUser", data.user);
        this.dispatch("getUserTheme");
        return data;
      });
    },
    async getUser({ commit }) {
      return axiosClient.get("/user").then(({ data }) => {
        commit("setUser", data.data);
        //commit("setIsAdmin", data.user.isAdmin);
        //commit("setToken", data.token);
        console.log(data.data);
        this.dispatch("getUserTheme");

        return data;
      });
    },

    // async getUserPage({ commit }) {
    //   let res = await axiosClient.get("/page");

    //   commit("setThemeid", res);

    //   this.dispatch("getUserTheme");
    //   return res;
    // },

    getUserTheme({ state }) {
      state.user.colors.forEach((color) => {
        if (state.user.theme_id === color.id) {
          state.user.theme = color;
        }
      });
    },

    async getAllLinks({ commit }) {
      let res = await axiosClient.get("/links");

      //let socialLinks = await axiosClient.get("/sociallinks");

      commit("setLinks", res);
      return res;
      //this.$state.allLinks = res.data;
      //this.$state.socialLinks = socialLinks.data;
    },

    async addLink({ commit }, payload) {
      let res = await axiosClient.post("/links", payload);
      return res;
    },

    async updateLink({ commit }, payload) {
      let res = await axiosClient.patch(`/links/${payload.id}`, {
        name: payload.name,
        description: payload.description,
        category: payload.category,
        url: payload.url,
        layout: payload.layout,
        active: payload.active,
      });

      return res;
    },

    async deleteLink({ commit }, id) {
      let res = await axiosClient.delete(`/links/${id}`);
      this.dispatch("getAllLinks");
      return res;
    },

    async getAllSocialIcons({ commit }) {
      let res = await axiosClient.get("/socialicon");
      commit("setSocialIcons", res);
      return res;
    },

    async addSocialIcon({ commit }, payload) {
      let res = await axiosClient.post("/socialicon", payload);
      return res;
    },

    async updateSocialIcon({ commit }, payload) {
      let res = await axiosClient.patch(`/socialicon/${payload.id}`, {
        id: payload.id,
        url: payload.url,
        active: payload.active,
      });
      return res;
    },

    async deleteSocialIcon({ commit }, payload) {
      let res = await axiosClient.post(`/socialicon/${payload.id}`, {
        id: payload.id,
      });
      this.dispatch("getAllSocialIcons");
      return res;
    },

    async updatePageDetails({ commit }, payload) {
      let res = await axiosClient.post(`/page/update`, {
        username: payload.username,
        fullname: payload.fullname,
        bio: payload.bio,
        location: payload.location,
        creator_category: payload.creator_category,
        //userCategory: userCategory,
      });
      return res;
    },

    async updateTheme({ state }, themeId) {
      let res = await axiosClient.patch("/themes", {
        theme_id: themeId,
      });
      state.user.theme_id = res.data.theme_id;
      this.dispatch("getUserTheme");
      return res;
    },
    async updatePage({ state }, payload) {
      let res = await axiosClient.patch("/page/appearance", payload);
      return res;
    },

    async fetchchartData(username) {
      let data = await axiosClient.post("/chartdata", {
        username: username,
      });

      return data.data;
    },

    async getcountriesData() {
      let data = await axiosClient.get("/countrydata");

      return data;
    },

    async fetchTopLinks() {
      let data = await axiosClient.post("/toplinks");

      return data;
    },
    async fetchTopForms() {
      let data = await axiosClient.post("/topforms");

      return data;
    },
    async fetchFormSummary({ state }, Id) {
      let res = await axiosClient.post("/formsummary", {
        form_id: Id,
      });

      return res;
    },

    async updateUserImage({ commit }, data) {
      let res = await axiosClient.post("/user-image", data);
      return res;
    },

    async updateLinkImage({ commit }, data) {
      let res = await axiosClient.post(`/link-image`, data);
      return res;
    },

    async updateThumbnailLinkImage({ commit }, data) {
      let res = await axiosClient.post(`/link-thumbimage`, data);
      return res;
    },
    async updatePortfolioThumbnail({ commit }, data) {
      let res = await axiosClient.post(`/link-portfoliothumbimage`, data);
      return res;
    },

    async updateItemLayout({ commit }, payload) {
      const res = await axiosClient.post(`links/data/layout`, {
        Layout: payload.Layout,
        link_id: payload.id,
      });

      return res;
    },
    async updateStartupData({ commit }, payload) {
      const res = await axiosClient.post(`links/data/startup`, payload);
      return res;
    },
    async updateFormData({ commit }, payload) {
      let res = await axiosClient.post(`links/data/form`, payload);
      return res;
    },

    async updateportfolioData({ commit }, payload) {
      let res = await axiosClient.post(`links/data/portfolio`, {
        id: payload.id,
        title: payload.title,
        portfolio_blog: payload.portfolio_blog,
        portfolio_tags: payload.portfolio_tags,
        category: payload.category,
        portfolio_thumbnail: payload.portfolio_thumbnail,
      });
      return res;
    },

    async AddEcomItem({ commit }, payload) {
      let res = await axiosClient.post(`links/data/store/items`, {
        ecom_id: payload.ecom_id,
        price: payload.price,
        productname: payload.productname,
      });
      return res;
    },

    async updateQuoteAlignment({ commit }, payload) {
      let res = await axiosClient.post(`links/data/quote`, {
        id: payload.id,
        textAlignment: payload.textAlignment,
      });
      return res;
    },
    async updateQuotePosition({ commit }, payload) {
      let res = await axiosClient.post(`links/data/quote`, {
        id: payload.id,

        textPosition: payload.textPosition,
      });
      return res;
    },

    async updateLinksOrder({ commit }, payload) {
      let res = await axiosClient.post(`links/order`, {
        payload: payload,
      });
      this.dispatch("getAllLinks");
      return res;
    },

    async getPage({ commit }, linkname) {
      let res = await axiosClient.get(`/guestview/${linkname}`);

      commit("setGuestdata", res.data);
      return res;
    },

    async saveSurveyAnswer({ commit }, payload) {
      let res = await axiosClient.post(`/form/answer`, payload);
      return res;
    },

    async authenticateGooglesheets({ commit }) {
      let res = await axiosClient.get(`/googleAuth/authuri`);

      return res;
    },
    async authorizeMailchimp({ commit }) {
      let res = await axiosClient.get(`/mailchimpAuth/authuri`);

      return res;
    },

    async setGoogleSheeetsTkn({ commit }, code) {
      let res = await axiosClient.post(`/googleAuth/setCode`, {
        code: code,
      });

      return res;
    },

    async getMailchimpAccessToken({ commit }, code) {
      let res = await axiosClient.post(`/mailchimpAuth/getToken`, {
        code: code,
      });

      return res;
    },
    async getSheets({ commit }) {
      let res = await axiosClient.get(`/googleAuth/getsheet`);

      return res;
    },

    async gotchYaClicks({ commit }, payload) {
      let res = await axiosClient.post(`linkactivity`, payload);
      return res;
    },

    async gotchYaFormViews({ commit }, payload) {
      let res = await axiosClient.post(`formviewed`, payload);
      return res;
    },

    async triggerAnalytics({ commit }, username) {
      let data = await axiosClient.post("/analytics", {
        username: username,
      });

      return data;
    },

    allLowerCaseNoCaps(str) {
      return str.split(" ").join("").toLowerCase();
    },
  },
  mutations: {
    logout: (state) => {
      state.user.data = {};
      state.user.token = null;
      state.user.isAdmin = false;
      //sessionStorage.setItem("isAdmin", false);
      //sessionStorage.setItem("TOKEN", null);
    },
    setUser: (state, user) => {
      console.log(user);
      state.user.id = user.id;
      state.user.uuid = user.id;
      state.user.email = user.email;
      state.user.location = user.location;
      state.user.creator_category = user.creator_category;
      state.user.currentplan = user.currentplan;

      state.user.page_font = user.page_font;
      state.user.page_layout = user.page_layout;
      state.user.theme_id = user.theme_id;
      state.user.fullname = user.fullname;
      state.user.username = user.username;
      state.user.bio = user.bio;
      state.user.image = user.image;
      state.user.isMailchimpAuthorized = user.isMailchimpAuthorized;
      state.user.isGooglesheetsAuthorized = user.isGooglesheetsAuthorized;
    },
    setIsAdmin: (state, isAdmin) => {
      state.user.isAdmin = isAdmin;
      if (isAdmin) {
        sessionStorage.setItem("isAdmin", isAdmin);
      } else {
        sessionStorage.removeItem("isAdmin");
      }
    },
    setToken: (state, token) => {
      state.user.token = token;
      if (token) {
        sessionStorage.setItem("TOKEN", token);
      } else {
        sessionStorage.removeItem("TOKEN");
      }
    },

    setThemeid: (state, res) => {
      state.user.theme_id = res.data.theme_id;
    },

    setLinks: (state, payload) => {
      state.linkitems.data = payload.data;
    },

    setSocialIcons: (state, payload) => {
      state.socialicons.data = payload.data;
    },

    setColors: (state, colors) => {
      state.user.colors = colors;
    },

    setDefaults: (state) => {
      state.user.updatedLinkId = 0;
      state.user.addLinkOverlay = false;
      state.user.isPreviewOverlay = false;
      state.user.isMobile = false;
    },

    setGuestdata: (state, data) => {
      state.guestpagedata.loading = false;
      state.guestpagedata.data = data;
      console.log(data);
      state.guestpagedata.themeId = data.page.theme_id;
    },

    notify: (state, { message, type }) => {
      state.notification.show = true;
      state.notification.type = type;
      state.notification.message = message;
      setTimeout(() => {
        state.notification.show = false;
      }, 3000);
    },

    resetState: (state) => {
      state.user.id = "";
      state.user.name = "";
      state.user.email = "";
      state.user.image = "";
      state.user.bio = "";
      state.user.page_font = "";
      state.user.page_layout = "";
      state.user.theme_id = "";
      state.user.theme = null;
      state.user.colors = null;
      state.user.allLinks = null;
      state.user.isMobile = false;
      state.user.updatedLinkId = 0;
      state.user.addLinkOverlay = false;
      state.user.isPreviewOverlay = false;
    },
  },
  persist: true,
  modules: {},
});

export default store;
