<template>
  <div>
    <div class="row">
      <div class="col-md-9 col-xs-12">
        <input type="text" class="form-control" placeholder="Buscar" v-model="buscar" @keyup="search(1)" />
      </div>

      <div class="col-md-3">
       
          <button type="button" @click="agregar()" class="btn btn-wd btn-primary">
            <span class="btn-label">
              <i class="fa fa-plus"></i>
            </span>
            Añadir Marca
          </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { mapFields } from "vuex-map-fields";
export default {
  data() {
    return {
      cargando: {
        loading: true,
        fullPage: false,
      },
    };
  },
  computed: {
    ...mapFields("marcas", ["buscar"]),
  },
  methods: {
    ...mapActions({
      loadMarcas: "marcas/loadMarcas", // Trae todos los usuarios
      tipoAccion:  "marcas/cambiarAccion",
      limpiarFormulario: "marcas/clearFormulario",
      loading: "loading/loading"
    }),
    search(page) {
      this.loading(this.cargando);
      this.loadMarcas(page);
    },
     agregar() {
          this.tipoAccion(1)
          this.limpiarFormulario()
          this.$router.push("marcas/form")
      },
  },
};
</script>
