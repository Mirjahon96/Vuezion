import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// Initial state
// if (window.matchMedia('(prefers-color-scheme: light)').matches) {
//   window.localStorage.setItem('darkMode', 'false');
// }

// const userSelectedDarkMode = window.localStorage.getItem('darkMode') === 'true';

const state = {
  darkMode: false
};

// // Getters
const getters = {
  darkMode() {
    return state.darkMode;
  }
};

// Mutations
const mutations = {
  toggleDarkMode() {
    if (state.darkMode === true) {
      state.darkMode = false;
      document.querySelector('.sidebar').style.background = '#fff';
      document.querySelector('.navbar').style.background = '#f3f3f3';
      // window.localStorage.setItem('darkMode', 'false');
    } else {
      state.darkMode = true;
      document.querySelector('.sidebar').style.background =
        'linear-gradient(176deg, rgba(71,31,189,1) 0%, rgba(120,224,229,1) 100%)';
      document.querySelector('.navbar').style.background =
        'linear-gradient(176deg, rgba(71,31,189,1) 0%, rgba(120,224,229,1) 100%)';
      // window.localStorage.setItem('darkMode', 'true');
    }
  }
};

// // Actions
const actions = {
  triggerDarkMode(context) {
    context.commit('toggleDarkMode');
  }
};

export default new Vuex.Store({
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions
});
