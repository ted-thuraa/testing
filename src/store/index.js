import { createStore } from "vuex";
import axiosClient from "../axios";

const store = createStore({
    state: {
        user: {
            id: "",
            uuid: "",
            currentplan: "",
            userCategory: "",
            isAdmin: null,
            theme_id: "",
            fullname: "",
            username: "",
            email: "",
            image: "",
            bio: "",
            theme: null,
            colors: null,
            allLinks: {
                loading: false,
                data: [],
            },
            socialLinks: {
                loading: false,
                //links:[],
                data: [],
            },

            isMobile: false,
            updatedLinkId: 0,
            addLinkOverlay: false,
            isPreviewOverlay: false,
            //token: null,
            isAdmin: sessionStorage.getItem("isAdmin"),
            token: sessionStorage.getItem("TOKEN"),
            //token: 124,
        },
        linkitems: {
            loading: false,
            data: [],
        },
        questionTypes: ["text", "select", "radio", "checkbox", "textarea"],

        //guest
        guestpagedata: {
            loading: false,
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
        plan: {
            loading: false,
            data: [],
        },
        orders: {
            loading: false,
            data: [],
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

                return data;
            });
        },
        async register({ commit }, user) {
            return axiosClient
                .post("/register", user)
                .then(({ data }) => {
                    commit("setUser", data.user);
                    commit("setIsAdmin", data.user.isAdmin);
                    commit("setToken", data.token);

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
        async getUser({ commit }) {
            return axiosClient.get("/user").then(({ data }) => {
                commit("setUser", data.data);
                //commit("setIsAdmin", data.user.isAdmin);
                //commit("setToken", data.token);
                this.dispatch("getUserPage");

                return data;
            });
        },

        async getUserPage({ commit }) {
            let res = await axiosClient.get("/page");

            commit("setThemeid", res);

            this.dispatch("getUserTheme");
        },

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
            //this.$state.allLinks = res.data;
            //this.$state.socialLinks = socialLinks.data;
        },

        async updatePageDetails({ commit }, payload) {
            await axiosClient.post(`/page/update`, {
                username: payload.username,
                fullname: payload.fullname,
                bio: payload.bio,
                //userCategory: userCategory,
            });
        },

        async updateTheme({ state }, themeId) {
            let res = await axiosClient.patch("/themes", {
                theme_id: themeId,
            });
            state.user.theme_id = res.data.theme_id;
            this.dispatch("getUserTheme");
        },

        async fetchchartData(username) {
            let data = await axiosClient.post("/chartdata", {
                username: username,
            });

            return data.data;
        },

        async fetchTopLinks(username) {
            let data = await axiosClient.post("/toplinks", {
                username: username,
            });

            return data;
        },

        async addLink({ commit }, payload) {
            let res = await axiosClient.post("/links", payload);
        },

        async updateLink({ commit }, payload) {
            await axiosClient.patch(`/links/${payload.id}`, {
                name: payload.name,
                description: payload.description,
                url: payload.url,
            });
        },

        async updateUserImage({ commit }, data) {
            await axiosClient.post("/user-image", data);
        },

        async updateLinkImage({ commit }, data) {
            await axiosClient.post(`/link-image`, data);
        },

        async updateThumbnailLinkImage({ commit }, data) {
            await axiosClient.post(`/link-thumbimage`, data);
        },
        async updatePortfolioThumbnail({ commit }, data) {
            await axiosClient.post(`/link-portfoliothumbimage`, data);
        },

        async updateItemLayout({ commit }, payload) {
            await axiosClient.post(`links/data/layout`, {
                Layout: payload.Layout,
                link_id: payload.id,
            });
        },
        async updateStartupData({ commit }, payload) {
            await axiosClient.post(`links/data/startup`, payload);
        },
        async updateFormData({ commit }, payload) {
            await axiosClient.post(`links/data/form`, {
                id: payload.id,
                description: payload.description,
                formtype: payload.formtype,
                isNameRequired: payload.isNameRequired,
                get_name: payload.get_name,
                isEmailRequired: payload.isEmailRequired,
                get_email: payload.get_email,
                isMobileRequired: payload.isMobileRequired,
                get_mobile: payload.get_mobile,
                isMessageRequired: payload.isMessageRequired,
                get_message: payload.get_message,
                isCountryRequired: payload.isCountryRequired,
                get_country: payload.get_country,
                responcesEmail: payload.responcesEmail,
                googlesheetsToken: payload.googlesheetsToken,
                thankyoutext: payload.thankyoutext,
            });
        },

        async updateportfolioData({ commit }, payload) {
            await axiosClient.post(`links/data/portfolio`, {
                id: payload.id,
                title: payload.title,
                portfolio_blog: payload.portfolio_blog,
                portfolio_tags: payload.portfolio_tags,
                category: payload.category,
                portfolio_thumbnail: payload.portfolio_thumbnail,
            });
        },

        async AddEcomItem({ commit }, payload) {
            await axiosClient.post(`links/data/store/items`, {
                ecom_id: payload.ecom_id,
                price: payload.price,
                productname: payload.productname,
            });
        },

        async updateQuoteAlignment({ commit }, payload) {
            await axiosClient.post(`links/data/quote`, {
                id: payload.id,
                textAlignment: payload.textAlignment,
            });
        },
        async updateQuotePosition({ commit }, payload) {
            await axiosClient.post(`links/data/quote`, {
                id: payload.id,

                textPosition: payload.textPosition,
            });
        },

        async updateLinksOrder({ commit }, payload) {
            await axiosClient.post(`links/order`, {
                payload: payload,
            });
            this.dispatch("getAllLinks");
        },

        async deleteLink(id) {
            await axiosClient.delete(`/links/${id}`);
        },

        async getPage({ commit }, linkname) {
            let res = await axiosClient.get(`/guestview/${linkname}`);

            commit("setGuestdata", res.data);
            return;
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
            state.user.id = user.id;
            state.user.uuid = user.uuid;
            state.user.currentplan = user.currentplan;
            state.user.userCategory = user.creator_category;
            state.user.fullname = user.fullname;
            state.user.username = user.username;
            state.user.bio = user.bio;
            state.user.image = user.image;
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
        },

        resetState: (state) => {
            state.user.id = "";
            state.user.name = "";
            state.user.email = "";
            state.user.image = "";
            state.user.bio = "";
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
