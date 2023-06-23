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
              <div class="form-group col-12">
                <button v-if="tipoAccion == 1" type="submit" class="btn btn-success btn-fill pull-right">Guardar Usuario</button>
                <button v-else class="btn btn-info btn-fill pull-right">Actualizar Usuario</button>
                <button @click=$router.back() class="btn btn-danger btn-fill pull-right">Volver</button>
              </div>           
              <div class="clearfix"></div>

              {{ form }} {{ formulario }}
            </form>
              
          </div>
        </CrudCreate>
      </div>
    </AdminTemplate>
  </div>
</template>
<script>
import { mapFields } from 'vuex-map-fields'
import { mapActions, mapState} from 'vuex';
export default {
  computed: {
    ...mapFields("marcas", [ "formulario"]),
    ...mapState("alertas", ["pregunta", "guardado"]),
    ...mapState("marcas", ["tipoAccion", "formulario"]),
  },
  mounted(){
    if(this.tipoAccion === 0)
      this.$router.back()
    else if(this.tipoAccion === 2)
      this.formuario = this.form
      console.log(this.formulario)
      //this.formulario == this.form
  },
  data() {
    return {
      titulo: "Ingresar Marca",
      categoria: "Llena este formulario para registrar una marca",
      form: {},
    };
  },
  methods: {
    ...mapActions({
        saveMarca: 'marcas/saveMarca',
    }),
     guardar(){
        this.$swal.fire(this.pregunta).then((result) => {
        if (result.value) {
            this.saveMarca({ data: this.form , accion: this.tipoAccion }).then(() =>{
            this.$swal.fire(this.guardado)
            }).catch((err) => {
            console.log(err)
          })
        }
      })
    }
  },
};
</script>
<style>
.btn {
  margin: 0 6px;
}
</style>