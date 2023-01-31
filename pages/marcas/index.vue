<template>
  <AdminTemplate>
    <div slot="body">
      <div class="col-2">
        <nuxtLink
          to="/marcas/agregar"
          class="btn btn-dark btn-sm w-100"
        >
          <i class="fas fa-plus"></i> Agregar
        </nuxtLink>
      </div>
      <div class="vld-parent col-lg-6">
        <div class="card">
          <div class="card-header">
            <h4 class="card-title">Marcas</h4>
            <p class="card-category">Lista de Marcas</p>
          </div>

          <div class="card-body table-full-width table-responsive">
            <table class="table table-hover">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th class="text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="marca in marcas" :key="marca.id">
                  <td>{{ marca.nombre }}</td>
                  <td class="td-actions text-right">
                    <a
                      href="#"
                      rel="tooltip"
                      title="View Profile"
                      class="btn btn-info btn-link btn-xs"
                    >
                      <i class="fa fa-user"></i>
                    </a>
                    <a
                      href="#"
                      rel="tooltip"
                      title="Edit Profile"
                      class="btn btn-success btn-link btn-xs"
                    >
                      <i class="fa fa-edit"></i>
                    </a>
                    <a
                      href="#"
                      rel="tooltip"
                      title="Remove"
                      class="btn btn-danger btn-link btn-xs"
                    >
                      <i class="fa fa-times"></i>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div
          slot="footer"
          class="
            col-12
            d-flex
            justify-content-center justify-content-sm-between
            flex-wrap
          "
        >
          <div class=""></div>
          <div class="card-body">
            <Paginacion class="pagination" module="marcas" collection="getMarcas" estado="marcas"/>
          </div>
        </div>
      </div>
    </div>
  </AdminTemplate>
</template>
<script>
import { mapActions, mapGetters } from "vuex";

export default {
   mounted() {
    this.loadMarcas(1);
  },
  computed: {
    ...mapGetters({
      marcas: "marcas/getMarcas",
      paginacion: "marcas/getPaginacion",
    }),
  },
  methods: {
    ...mapActions({
      loadMarcas: "marcas/loadMarcas", // Trae todas las marcas
    }),
  },
};
</script>

<style>
td {
  font-size: 16px;
}
</style>
