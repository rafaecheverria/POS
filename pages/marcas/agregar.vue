<template>
  <div>
    <AdminTemplate>
      <div slot="body">
        <CrudCreate :formulario="titulo" :categoria="categoria">
          <div slot="form">
            <form @submit.prevent='guardar()'>
              
              <div class="form-group col-12">
                <label for="">Ingresar Marca</label>
                <input type="text" class="form-control" name="nombre" v-model="form.nombre"/>
              </div>

                <div class="row">
                  <div class="col-6">
                    <button class="btn btn-primary w-100">Guardar</button>
                  </div>
                  <div class="col-6">
                    <button class="btn btn-danger w-100" @click="$router.back()">
                      Regresar
                    </button>
                  </div>
                </div>
    
          </form>

          {{ form.nombre }}
          </div>
        </CrudCreate>
      </div>
    </AdminTemplate>
  </div>
</template>
<script>
import { mapActions, mapMutations } from 'vuex';
import { mapFields } from 'vuex-map-fields'
import Swal from 'sweetalert2';
export default {

  computed: {
    ...mapFields('marcas', ['formulario']),
  },
  data() {
    return {
      titulo: "Ingresar Marca",
      categoria: "Llena este formulario para registrar una marca",
      form: {
        nombre:''
      }
    };
  },
  methods: {
    ...mapActions({
          saveMarca: 'marcas/saveMarca',
        }),
    ...mapMutations({
      setFormulario: 'marcas/setFomulario',
    }),

    async guardar(){
      //
     /* Swal.fire({
            title: 'Are you sure?',
            text: `You won't be able to revert this!`,
            type: 'warning',
            showCancelButton: true,
            confirmButtonClass: 'btn btn-success btn-fill',
            cancelButtonClass: 'btn btn-danger btn-fill',
            confirmButtonText: 'Yes, delete it!',
            buttonsStyling: false
          }).then(function () {
              this.saveMarca()
              this.$router.back()
            Swal.fire({
              title: 'Deleted!',
              text: 'Your file has been deleted.',
              type: 'success',
              confirmButtonClass: 'btn btn-success btn-fill',
              buttonsStyling: false
            })
          })*/

          Swal.fire({
            title: '¿Esta seguro de guardar este registro?',
            text: `No podra revertir los cambios!`,
            type: 'question',
            showCancelButton: true,
            confirmButtonClass: 'btn btn-success btn-fill',
            cancelButtonClass: 'btn btn-danger btn-fill',
            confirmButtonText: 'Yes, delete it!',
            buttonsStyling: false,
          }).then((result) => {
            console.log(result)
          if (result.value) {
            this.$store.commit('marcas/setFormulario', this.form)
            this.saveMarca().then(() =>{
              this.$router.back()
              Swal.fire({
              title: 'Guardado!',
              text: 'Su registro fue guarado exitosamente!.',
              type: 'success',
              confirmButtonClass: 'btn btn-success btn-fill',
              buttonsStyling: false
            })
              }).catch((err) => {
              console.log(err)
            })
          }
        })

      
      
    }
  }
};
</script>
<style >
.btn {
  margin: 0 6px;
}
</style>
