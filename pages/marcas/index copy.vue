<template>
  <AdminTemplate>
    <div slot="body">
      <div class="row">
        <div class="col-md-12">
          <div class="card data-tables">
            <div
              class="
                card-body
                table-striped table-no-bordered table-hover
                dataTable
                dtr-inline
                table-full-width
              "
            >
              <div class="toolbar">
                <!--        Here you can write extra buttons/actions for the toolbar              -->

              </div>
              <div class="fresh-datatables">
                <table
                  id="datatables"
                  class="table table-striped table-no-bordered table-hover"
                  cellspacing="0"
                  width="100%"
                  style="width: 100%"

                >
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Nombre</th>
                      <th>Email</th>
                      <th>Trabajo</th>
                      <th class="disabled-sorting text-right">Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                  <tr v-for="user in users" :key="user.id">
                    <td>{{user.id}}</td>
                    <td>{{user.name}}</td>
                    <td>{{user.email}}</td>
                    <td>{{user.job_title}}</td>
                    <td class="text-right">
                        <a href="#" class="btn btn-link btn-info like"><i class="fa fa-heart"></i></a>
                        <a href="#" class="btn btn-link btn-warning edit"><i class="fa fa-edit"></i></a>
                        <a href="#" class="btn btn-link btn-danger remove"><i class="fa fa-times"></i></a>
                    </td>
                  </tr>
                </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </AdminTemplate>
</template>

<script>

//import 'jquery/dist/jquery.min.js';
//Datatable Modules
//import "datatables.net-dt/js/dataTables.dataTables"
//import "datatables.net-dt/css/jquery.dataTables.min.css"
//import $ from 'jquery';
import axios from 'axios';
export default {

  mounted(){
    //API Call
    axios
    .get("https://therichpost.com/testjsonapi/users/")
    .then((res)=>
    {
      this.users = res.data;
      setTimeout(function(){
      $('#datatables').DataTable({
            "pagingType": "full_numbers",

            "lengthMenu": [
                [10, 25, 50, -1],
                [10, 25, 50, "Todos"]
            ],
            responsive: true,
            language: {
                search: "_INPUT_",
                searchPlaceholder: "Buscar",
                infoFiltered: "(Filtrado de _MAX_ total entradas)",
                lengthMenu: "Mostrar _MENU_ Entradas",
                emptyTable: "No hay información",
                paginate: {
                  "first": "Primero",
                  "last": "Ultimo",
                  "next": "Siguiente",
                  "previous": "Anterior"
              }

            },
        });
      }, 0);
    })
  },
  data: function() {
        return {
            users:[]
        }
    },
}
</script>
