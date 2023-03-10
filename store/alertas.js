export const state = () => ({
    pregunta: {
        title: '¿Está seguro?',
        text: "Confirma si desea guardar el registro!",
        showCancelButton: true,
        type: 'question',
        confirmButtonColor: '#78b414',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, Guardar!'
      },
      elimina: {
        title: '¿Está seguro?',
        text: "Confirma si desea eliminar el registro!",
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, Eliminar!'
      },
      cuerpo_elimina: {
        guardado: 'Eliminado!',
        descripcion: 'Tu registro ha sido eliminado satisfactoriamente!.',
        tipo: 'success'
     },
      guardado: {
        title: 'Guardado!',
        text: 'Su registro fue guarado exitosamente!.',
        type: 'success',
        confirmButtonClass: 'btn btn-success btn-fill',
        buttonsStyling: false
      }
});

export const getters = {
    getAlerta(state) { return state.pregunta && state.guardado },
}

export const mutations = {
    
}

export const actions = {
    async alerta({ getters }) {
        return getters.getAlerta
      },
}
