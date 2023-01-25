<template>
  <div class="row">
    <div class="col-sm-12">
      <div class="vld-parent">
        <div class="card table-with-links">
          <div class="card-header">
            <h4 class="card-title">Table with Links</h4>
            <p class="card-category">Here is a subtitle for this table</p>
          </div>
          <div class="card-body table-full-width">
            <table class="table">
              <thead>
                <tr>
                  <th class="text-center">#</th>
                  <th>Name</th>
                  <th>Job Position</th>
                  <th class="text-right">Salary</th>
                  <th class="text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="user in users" :key="user.id">
                  <td>{{ user.id }}</td>
                  <td>{{ user.name }}</td>
                  <td>{{ user.email }}</td>
                  <td>{{ user.job_title }}</td>
                  <td class="text-right">
                    <a href="#" class="btn btn-link btn-info like"
                      ><i class="fa fa-heart"></i
                    ></a>
                    <a href="#" class="btn btn-link btn-warning edit"
                      ><i class="fa fa-edit"></i
                    ></a>
                    <a href="#" class="btn btn-link btn-danger remove"
                      ><i class="fa fa-times"></i
                    ></a>
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
            <l-paginacion
              class="pagination"
              module="users"
              collection="getUsers"
              estado="usersState"
            />
          </div>
        </div>
        <Load />
      </div>
    </div>
  </div>
</template>
<script>
//import { Table, TableColumn } from 'element-ui'
import { mapActions, mapState } from "vuex";
//import { Paginacion as LPaginacion } from "src/components/index";
//import { Load } from 'src/components/index'
//import Swal from 'sweetalert2'

export default {
  data() {
    return {
      vacio: "Sin información",
    };
  },
  components: {
    Load,
    LPaginacion,
    [Table.name]: Table,
    [TableColumn.name]: TableColumn,
  },
  computed: {
    ...mapState("users", ["usersState", "pagination"]),
    ...mapState("alerta", ["delete"]),
  },
  methods: {
    ...mapActions({
      getUsers: "users/getUsers", // Trae todos los usuarios
      getUser: "users/getUser", //Trae 1 usuario para editar
      cambiarAccion: "users/cambiarAccion", // Cambia la accion del boton agregar o actualizar en el form usuario
      eliminarUser: "users/eliminarUsuario",
      getRolUsuario: "users/obtenerRoles",
    }),

    obtenerUser(id) {
      this.cambiarAccion(2); //activa el boton actualizar usuario
      this.getUser(id);
      this.$router.push("/configuracion/user/form");
    },

    obtenerRolUsuario(id) {
      this.getRolUsuario(id);
      this.$router.push("/configuracion/user/form/asignar");
    },

    eliminarUsuario(id) {
      // Swal.fire(this.delete).then((result) => {
      //   if (result.isConfirmed) {
      //     this.eliminarUser(id)
      //   }
      // })
    },
  },

  mounted() {
    this.getUsers(this.pagination.current_page);
  },
};
</script>
