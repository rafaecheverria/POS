<template>
  <AdminTemplate>
    <div slot="body">
      <div class="vld-parent col-lg-6">
        <div class="card">
          <CrudCabecera title="Marcas" category="Tabla de Lista de Marcas"/> <!-- Componente cabecera de la tabla Marcas-->
          <div class="card-body">
            <Buscar/> <!-- Componente buscar marcas-->
            <hr>
            <ListarMarcas /> <!-- Componente listar marcas-->
          </div>
        </div>
        <BaseLoading /> <!-- Componente Loading -->
      </div>
    </div>
  </AdminTemplate>
</template>
<script>
import ListarMarcas from "./listarMarcas";
import Buscar from "./Buscar";
import { mapFields } from 'vuex-map-fields';

export default {
  components: {
    ListarMarcas,
    Buscar,
  },
  computed: {
      ...mapFields('marcas', [ 'buscar']),
    },
};
</script>

<style>
</style>
