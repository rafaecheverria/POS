import { getField, updateField } from 'vuex-map-fields';
import Swal from 'sweetalert2';

export const state = () => ({
  marcas: {},
  modulo: 'marcas',
  tipoAccion: 0,
  paginacion: {},
  offset: 2,
  buscar: '',
  loading: true,
  load: { loading: false, fullPage: false },
  formulario: {}
})

//Actions
export const actions = {
  async loadMarcas({ commit, state, dispatch}, page) { // Obtiene todas las marcas y los carga a la tabla
    let url = '/marcas?page=' + page + '&buscar=' + state.buscar
    await this.$api.get(url)
      .then((response) => {
       // console.log(response)
        commit('setMarcas', response.data.marcas.data)
        commit('setPaginacion', response.data.pagination)
        dispatch('loading/loading', state.load, { root: true })
      })
      .catch(function (error) {
        console.log("se cerro la sesion")
      })
  },

    async saveMarca({commit, dispatch, state},marcaData) { // Guarda las marcas
      // commit('setFormulario', marcaData.data)
        let url = ''
        let enviar = ''
        if(marcaData.accion != 1){
          url = `/marcas/update/${marcaData.formulario.id}`
          enviar = await this.$api.put
        } else {
          url = '/marcas/add'
          enviar = await this.$api.post
        }
    enviar(url, marcaData.data)
      .then((response) => {
        dispatch('loading/loading', state.load, { root: true })
        commit('clearFormulario')
        this.$router.back()
        }).catch(error => {
          if(error.response.status == 422){
            let data = error.response.data.errors
            Object.keys(data).forEach(
              key=>{
                Swal.fire({
                  icon: 'error',
                  title: 'Error',
                  text: data[key][0],
                })
              }
            )
          }
      })
  },

  async getMarca( { commit, dispatch, state}, id) { // Obtiene la marca y las carga al formulario
    let url = `/marcas/${id}`
    await this.$api.get(url)
      .then((response) => {
        commit('getMarcas', response.data.marca)
        dispatch('loading/loading', state.load, { root: true })
        }).catch(error => {
          console.log(error)
      })
  },

  clearFormulario({ commit }) { commit('clearFormulario') },
  cambiarAccion({ commit }, accion) { commit('cambiarAccion', accion) },

}

//Getters
export const getters = {
  getField,
  getMarcas(state) { return state.marcas },
  getModulo(state) { return state.modulo },
  getPaginacion(state) { return state.paginacion },
  getFormulario(state) { return state.formulario },
}

//Mutations
export const mutations = {
  updateField,
  setMarcas(state, marcas) { state.marcas = marcas },
  getMarcas(state, data) { state.formulario = data },
  setPaginacion(state, accion) { state.paginacion = accion }, //setea los datos desde la api a la variable paginación del state
  setPagina: (state, payload) => { state.paginacion.current_page = payload }, // cambia el numero de la pagina al hacer click
  setFormulario: (state, payload) => { state.formulario = payload }, // cambia el numero de la pagina al hacer click
  clearFormulario(state) { state.formulario = {} },
  cambiarAccion(state, accion) { state.tipoAccion = accion },
}

