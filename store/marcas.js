import { getField, updateField } from 'vuex-map-fields';

export const state = () => ({
    marcas: {},
    modulo: 'marcas',
    paginacion: {},
    offset: 2,
    buscar: '',
    loading: true,
    load: { loading: false, fullPage: false },
  })

  //Actions
  export const actions = {
    async loadMarcas({ commit, state }, page) { // Obtiene todas las marcas y los carga a la tabla
        let url = '/marcas?page='+ page + '&buscar='+ state.buscar
        await this.$api.get(url)
        .then((response) => {
          console.log(response)
          commit('setMarcas', response.data.marcas.data)
          commit('setPaginacion', response.data.pagination)
          commit('loading/setLoading', state.load, { root: true })
        })
        .catch(function(error){
          console.log("se cerro la sesion")
        })
      },

      cambiarPagina({ commit }, payload) {
            commit('cambiarPagina', payload)
      }
  }

  //Getters
  export const getters = {
    getField,
    
    getMarcas(state){ return state.marcas },
    getModulo(state){ return state.modulo },
    getPaginacion(state){ return state.paginacion }
  }

  //Mutations
  export const mutations = {
    updateField,

    setMarcas(state, marcas){
      state.marcas = marcas
    },
    setPaginacion(state, accion) { //setea los datos desde la api a la variable paginación del state
      state.paginacion = accion
    },
    setPagina: (state, payload) => { // cambia el numero de la pagina al hacer click
      state.paginacion.current_page = payload
    }
  }

