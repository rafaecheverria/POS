<template>
  <div>
    <div class="row">
      <div class="col-md-9">
        <input type="text" class="form-control" placeholder="Buscar" v-model="buscar" @keyup="search(1)" />
      </div>

      <div class="col-col-md-2 col-md-3">
        <nuxtLink to="/marcas/agregar">
          <button type="button" class="btn btn-wd btn-primary">
            <span class="btn-label">
              <i class="fa fa-plus"></i>
            </span>
            Agregar
          </button>
        </nuxtLink>
      </div>
    </div>
  </div>
</template>

<script>

import { mapActions } from 'vuex';
import { mapFields } from 'vuex-map-fields';
export default {
  data(){
    return {
      cargando: {
          loading: true,
          fullPage: false,
        }
    }
  },
  computed: {
      ...mapFields('marcas', [ 'buscar']),
    },
  methods: {
    ...mapActions({
      loadMarcas: "marcas/loadMarcas", // Trae todos los usuarios
      loading: 'loading/loading'
    }),
    search(page) {
      this.loading(this.cargando)
      this.loadMarcas(page);
    },
  },
};
</script>
