import axios from "axios";
import store from "./store";
import { useRouter } from "vue-router";

//const router = useRouter();

const axiosClient = axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`,
});

// on every request the auth token will be passed
axiosClient.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${store.state.user.token}`;
    return config;
});

axiosClient.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        switch (error.response.status) {
            case 401: // Not logged in
                store.commit("setToken", null);
            //window.location.href = "/login";

            // window.location.href = "/";
            //case 419: // Session expired
            //case 503: // Down for maintenance
            // Bounce the user to the login screen with a redirect back
            //this.resetState();
            //window.location.href = "/";
            //break;
            //case 500:
            //alert("Oops, something went wrong!  The team has been notified.");
            //break;
            default:
                // Allow individual requests to handle other errors
                throw error;
            //return Promise.reject(error);
        }
        // if (error.response.status === 401) {
        //     store.commit("setToken", null);
        //     router.push({ name: "login" });
        // }
        // throw error;
    }
);

export default axiosClient;
