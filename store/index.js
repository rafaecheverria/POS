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
    cambiarPagina: ({ commit }, payload) => {
      let modulo = payload.modulo
      commit(modulo+"/setPagina", payload.value, { root: true })
      }
}
