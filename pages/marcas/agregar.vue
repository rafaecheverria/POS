<template>
  <div>
    <AdminTemplate>
      <div slot="body">
        <CrudCreate :formulario="formulario">
          <div slot="form" class="row">
            <div class="form-group col-12">
              <label for="">Ingresar Marca</label>
              <input type="text" name="" class="form-control" id="" />
            </div>
          </div>
        </CrudCreate>
      </div>
    </AdminTemplate>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formulario: "Agregar Marcas",
    };
  },
};
</script>
