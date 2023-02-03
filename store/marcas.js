export const state = () => ({
    marcas: {},
    modulo: 'marcas',
    paginacion: {},
    offset: 2,
    buscar: ''
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
    getMarcas(state){ return state.marcas },
    getModulo(state){ return state.modulo },
    getPaginacion(state){ return state.paginacion }
  }

  //Mutations
  export const mutations = {
    setMarcas(state, marcas){
      state.marcas = marcas
    },
    setPaginacion(state, accion) { //setea los datos desde la api a la variable paginaciòn del state
      state.paginacion = accion
    },
    setPagina: (state, payload) => { // cambia el numero de la pagina
      state.paginacion.current_page = payload
    }
  }

