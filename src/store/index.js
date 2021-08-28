import Vue from "vue";
import Vuex from "vuex";
import auth from "./auth";
import dbOperations from "./dbOperations";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        siteLanguage: "ru",
    },

    mutations: {
        changeSiteLanguage(state, language) {
            state.siteLanguage = language;
        },
    },

    actions: {},

    modules: {
        auth,
        dbOperations,
    },
});
