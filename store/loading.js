export const state = () => ({
    loading: true,
    fullPage: false,

});

export const getters = {

}

export const mutations = {
    setLoading(state, parametro) {
        state.loading = parametro.loading;
        state.fullPage = parametro.fullPage;
      },
}

export const actions = {
    loading({ commit }, parametro) {
        commit('setLoading', parametro)
      },
}
