<template>
  <div>
    <div class="row justify-content-center">
      <div class="col-sm-6 col-12">
        <div class="card">
          <div class="card-header">
            <h4 class="card-title text-white">{{ formulario }}</h4>
            <p class="card-category">{{ categoria }}</p>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-12">
                
                <slot name="form"> 
                  <!-- Insertar el formulario desde las pages de la aplicación -->
                </slot>
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
      categoria: String,
    },
    
};
</script>
<style>
.card-header:first-child {
  background: #122038;
  padding: 10px;
  width: 100%;
}
</style>
