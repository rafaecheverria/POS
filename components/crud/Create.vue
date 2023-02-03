<template>
  <div>
    <div class="row justify-content-center">
      <div class="col-sm-6 col-12">
        <div class="card">
          <div class="card-header">
            <h3>{{ formulario }}</h3>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-12">
                <slot name="form"> 
                  <!-- Insertar el formulario desde las pages de la aplicación -->
                </slot>
              </div>
              <div class="col-12">
                <div class="row">
                  <div class="col-6">
                    <button class="btn btn-info w-100" @click="$router.back()">
                      Regresar
                    </button>
                  </div>
                  <div class="col-6">
                    <button class="btn btn-dark w-100">Guardar</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
    name: "Create",
    props: {
      formulario: String,
    },
};
</script>
