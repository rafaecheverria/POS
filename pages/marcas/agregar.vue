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
                  <div class="col-12">
                    <button class="btn btn-primary w-100">Guardar</button>
                  </div>
                 
                </div>
          </form>

          <div class="row">
            <div class="col-12">
              <button class="btn btn-danger w-100" @click="$router.back()">
                Regresar
              </button>
            </div>
          </div>

          {{ form.nombre }}
          </div>
        </CrudCreate>
      </div>
    </AdminTemplate>
  </div>
</template>
<script>
import { mapActions, mapMutations, mapState} from 'vuex';
export default {

  computed: {
    ...mapState('alertas', ['pregunta', 'guardado']),
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

     guardar(){
      this.$swal.fire(this.pregunta).then((result) => {
        if (result.value) {
            this.$store.commit('marcas/setFormulario', this.form)
            this.saveMarca().then(() =>{
            this.$router.back()
          this.$swal.fire(this.guardado)
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
