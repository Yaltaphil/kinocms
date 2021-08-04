import Vue from "vue";
import VueToast from "vue-toast-notification";
// import "vue-toast-notification/dist/theme-default.css";
import "vue-toast-notification/dist/theme-sugar.css";
Vue.use(VueToast);

export default {
    install(Vue) {
        Vue.prototype.$successMessage = function (message) {
            Vue.$toast.open({
                message,
                type: "success",
                position: "bottom-right",
                duration: 7000,
            });
        };
        Vue.prototype.$errorMessage = function (message) {
            Vue.$toast.open({
                message: `Ошибка: ${message}`,
                type: "error",
                position: "bottom-right",
                duration: 5000,
            });
        };
    },
};
