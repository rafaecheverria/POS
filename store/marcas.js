export const state = () => ({
    _marcas: [],
    _modulo: 'marcas',
    _pagination: {},
    _buscar: ''
  })
  
  //Actions
  export const actions = {
    async loadMarcas({ commit, state }, page) { // Obtiene todos los usuarios y los carga a la tabla
        let url = '/marcas?page='+ page + '&buscar='+ state.buscar
        let    data   = await this.$api.get(url)
      console.log(data)
      commit('setMarcas', data.data)
      commit('setPaginacion', data.data.pagination)
    }
  }
  
  //Getters
  export const getters = {
    getMarcas(state){
      return state._marcas
    },
    getModulo(state){ return state._modulo },
    getPaginacion(state){ return state._paginacion }
  }

  //Mutations
  export const mutations = {
    setMarcas(state, marcas){
      state._marcas = marcas
    },
    setPaginacion(state, accion) {
        state.pagination = accion
      },
  }

  