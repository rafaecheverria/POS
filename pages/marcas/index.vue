<template>
  <AdminTemplate>
    <div slot="body">
      <div class="vld-parent col-lg-6">
        <div class="card">
          <CrudCabecera title="Marcas" category="Table de Lista de Marcas"/> <!-- Componente cabecera de la tabla Marcas-->
          <div class="card-body">
            <Buscar/> <!-- Componente buscar marcas-->
            <ListarMarcas /> <!-- Componente listar marcas-->
          </div>
        </div>
        <BaseLoading />
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
