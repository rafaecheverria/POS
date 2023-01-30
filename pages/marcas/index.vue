<template>
 <AdminTemplate>
    <div slot="body">
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
          <div class="card-body table-full-width table-responsive">
            <table class="table table-hover">
              <thead>
                <tr>
                  <th class="text-center">#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Job Position</th>
                  <th class="text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="user in users" :key="user.id">
                  <td class="text-center">{{ user.id }}</td>
                  <td>{{ user.name }}</td>
                  <td>{{ user.email }}</td>
                  <td>{{ user.job_title }}</td>
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
              <p>Paginación</p>
          </div>
        </div>
      </div>
    </div>
  </AdminTemplate>
</template>
<script>

  import { mapActions, mapGetters } from "vuex";

  export default {
    computed: {
      ...mapGetters({
        users: 'users/getUsers'
      })
    },
    methods: {
      ...mapActions({
        loadUsers: 'users/loadUsers' // Trae todos los usuarios
      }),
    },

    mounted(){
      this.loadUsers()
    }
  }
</script>

<style>
  td {
    font-size: 18px;
  }

</style>
