<template>
  <div>
    <div class="col-2">
      <nuxtLink to="/marcas/agregar" class="btn btn-dark btn-sm w-100">
        <i class="fas fa-plus"></i> Agregar
      </nuxtLink>
    </div>
    <div class="vld-parent">
      <div class="card">
        <div class="card-header">
          <h4 class="card-title">Table with Links</h4>
          <p class="card-category">Here is a subtitle for this table</p>
        </div>

        <slot name="tabla">
         
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

