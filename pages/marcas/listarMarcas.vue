<template>
  <div>
    <!-- Caja de texto buscar -->

    <table class="table table-hover table-full-width table-responsive">
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th class="text-right">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in marcas" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ item.nombre }}</td>
          <td class="td-actions text-right">
            <a href="#" rel="tooltip" title="View Profile" class="btn btn-info btn-link btn-xs">
              <i class="fa fa-user"></i>
            </a>
            <a href="#" rel="tooltip" title="Edit Profile" class="btn btn-success btn-link btn-xs">
              <i class="fa fa-edit"></i>
            </a>
            <a href="#" rel="tooltip" title="Remove" class="btn btn-danger btn-link btn-xs">
              <i class="fa fa-times"></i>
            </a>
          </td>
        </tr>
      </tbody>
    </table>

    <div slot="footer" class="
      col-12
      d-flex
      justify-content-center justify-content-sm-between
      flex-wrap
    ">
      <div class=""></div>
      <div class="card-body">
        <Paginacion class="pagination" :module="modulo" funcion="loadMarcas" estado="marcas" />
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";

export default {
  mounted() {
    //console.log(this.paginacion.current_page);
    this.loadMarcas(this.paginacion.current_page);
  },
  computed: {
    ...mapGetters({
      marcas: "marcas/getMarcas",
      paginacion: "marcas/getPaginacion",
      modulo: "marcas/getModulo",
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
