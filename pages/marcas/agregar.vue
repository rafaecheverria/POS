<template>
  <div>
    <AdminTemplate>
      <div slot="body">
        <div class="row justify-content-center">
          <div class="col-sm-6 col-12">
            <div class="card">
              <div class="card-header">
                <h3>Formulario Agregar</h3>
              </div>
              <div class="card-body">
                <CrudCreate>
                  <div slot="form" class="row">
                    <div class="form-group col-12">
                      <label for="">Ingresar Marca</label>
                      <input type="text" name="" class="form-control" id="" />
                    </div>
                  </div>
                </CrudCreate>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminTemplate>
  </div>
</template>
<script>
export default {};
</script>
