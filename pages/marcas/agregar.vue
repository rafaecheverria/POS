<template>
  <div>
    <AdminTemplate>
      <div slot="body">
        <CrudCreate :formulario="formulario" :categoria="categoria">
          <div slot="form">
            <form @submit.prevent='guardar()'>
              
              <div class="form-group col-12">
                <label for="">Ingresar Marca</label>
                <input type="text" class="form-control" id="" v-model="form.nombre"/>
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
          </div>
        </CrudCreate>
      </div>
    </AdminTemplate>
  </div>
</template>
<script>
import { mapFields } from 'vuex-map-fields';
export default {

  computed: {
    ...mapFields('marcas', ['form']),
  },
  data() {
    return {
      formulario: "Ingresar Marca",
      categoria: "Llena este formulario para registrar una marca"
    };
  },
  methods: {
      guardar(){
      this.$store.commit('marcas/setFormulario', this.form)
      console.log(this.form)
    }
    }
};
</script>
