import { getField, updateField } from 'vuex-map-fields';
import Swal from 'sweetalert2';

export const state = () => ({
  marcas: {},
  modulo: 'marcas',
  paginacion: {},
  offset: 2,
  buscar: '',
  loading: true,
  load: { loading: false, fullPage: false },
  formulario: {}
})

//Actions
export const actions = {
  async loadMarcas({ commit, state }, page) { // Obtiene todas las marcas y los carga a la tabla
    let url = '/marcas?page=' + page + '&buscar=' + state.buscar
    await this.$api.get(url)
      .then((response) => {
       // console.log(response)
        commit('setMarcas', response.data.marcas.data)
        commit('setPaginacion', response.data.pagination)
        commit('loading/setLoading', state.load, { root: true })
      })
      .catch(function (error) {
        console.log("se cerro la sesion")
      })
  },

  async saveMarca({commit, state}) { // Guarda las marcas
    let url = 'marcas'
    await this.$api.post(url, state.formulario)
      .then((response) => {
        commit('loading/setLoading', state.load, { root: true })
        }).catch(error => {
          console.log(error)
      })
  }
}

//Getters
export const getters = {
  getField,
  getMarcas(state) { return state.marcas },
  getModulo(state) { return state.modulo },
  getPaginacion(state) { return state.paginacion },
}

//Mutations
export const mutations = {
  updateField,
  setMarcas(state, marcas) { state.marcas = marcas },
  setPaginacion(state, accion) { state.paginacion = accion }, //setea los datos desde la api a la variable paginación del state
  setPagina: (state, payload) => { state.paginacion.current_page = payload }, // cambia el numero de la pagina al hacer click
  setFormulario: (state, payload) => { state.formulario = payload } // cambia el numero de la pagina al hacer click
}

