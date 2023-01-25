<template>
  <div>
    <div class="sidebar" data-color="black">

      <BaseSidebar />
    </div>

    <div class="main-panel">
      <BaseNavbar />
      <div class="content">
        <div class="container-fluid">
          <slot name="body" />
        </div>
      </div>
      <BaseFooter />
    </div>
  </div>
</template>
<script>
export default {
  name: "AdminTemplate",
};
</script>
<style scoped>
  .sidebar {
    background-image: url("/assets/img/sidebar-1.jpg");
  }
</style>

