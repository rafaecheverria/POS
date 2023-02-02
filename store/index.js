// Este sera nuestro almacenamiento central
export const state = () => ({
   
});

// Accesores o getters
// Normalmente se llaman desde las propiedas computed de los componentes
export const getters = {
   
}

// Acciones
// Estas funciones o metodos sirven para llamar a las mutaciones
// A diferencia de las mutaciones pueden ser asincornas (llamadas a las APIs)
// Pueden contener algo de logica de negocio y ademas pueden llamar a varias mutaciones
export const actions = {

    cambiarPagina: ({ commit, rootState }, payload) => {
        //let current_page = [rootState.payload.modulo.paginacion.current_page
        let current_page = rootState[payload.modulo].paginacion.current_page
        commit('setPagina', { current_page: current_page, page: payload.value })
        //console.log(this.$store.commit("cambiarPagina", obj))
       // this.$store.commit("cambiarPagina", obj);
       // state[payload.modulo].paginacion.current_page = payload.value;
        //current_page = payload.value
      }

   /*async nuxtServerInit({ dispatch }, context) {
        await dispatch('users/loadUsers')
        await dispatch('marcas/loadMarcas')
    }*/
    
}

// Mutadores
// El unico fin de los mutadores es mutar o modificar el state o almacenamiento
export const mutations = {

    setPagina( {rootState}, payload){
       // payload.current_page = payload.page
       //let current_page = rootState[payload.modulo].paginacion.current_page

       console.log(rootState[payload.modulo])
        //commit('setPagina', { current_page: current_page, page: payload.value })
       // commit("cambiarPagina", obj);
    }

    }

