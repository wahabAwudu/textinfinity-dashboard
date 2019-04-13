
const state = {
  authUser: null,
};

const mutations = {
  SET_AUTHUSER (state, userPayload) {
    state.authUser = userPayload;
  },

  REMOVE_AUTHUSER (state) {
    state.authUser = null;
  }
};

const actions = {
  setAuthUser ({ commit }, userPayload) {
    commit('SET_AUTHUSER', userPayload);
  },

  removeAuthUser ({ commit }) {
    commit('REMOVE_AUTHUSER');
  }
};

export default {
  state: state,
  mutations: mutations,
  actions: actions,
};
