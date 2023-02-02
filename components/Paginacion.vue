<template>
  <ul class="pagination">
    <li
      class="page-item"
      v-if="$store.state[modulo].paginacion.current_page > 1"
    >
      <a
        class="page-link"
        href="#"
        @click.prevent="
          cambiarPagina(
            $store.state[modulo].paginacion.current_page - 1,
            $store.state[modulo].buscar
          )
        "
        >«</a
      >
    </li>
    <li class="page-item disabled" v-else>
      <a class="page-link" disabled="disabled">«</a>
    </li>
    <li
      class="page-item"
      v-for="page in pagesNumber"
      :key="page"
      :class="[page == isActived ? 'active' : '']"
    >
      <a
        class="page-link"
        href="#"
        @click.prevent="cambiarPagina(page, $store.state[modulo].buscar)"
        v-text="page"
      ></a>
    </li>
    <li
      class="page-item"
      v-if="
        $store.state[modulo].paginacion.current_page <
        $store.state[modulo].paginacion.last_page
      "
    >
      <a
        class="page-link"
        href="#"
        @click.prevent="
          cambiarPagina(
            $store.state[modulo].paginacion.current_page + 1,
            $store.state[modulo].buscar
          )
        "
        >»</a
      >
    </li>
    <li class="page-item disabled" v-else>
      <a class="page-link" disabled="disabled">»</a>
    </li>
  </ul>
</template>
<script>
export default {
  name: "l-paginacion",
  props: ["module", "funcion"],

  data() {
    return {
      modulo: this.module,
      loadFunction: this.module + "/" + this.funcion,
    };
  },

  computed: {
    isActived: function () {
      return this.$store.state[this.module].paginacion.current_page;
    },
    //Calcula los elementos de la paginación
    pagesNumber: function () {
      if (!this.$store.state[this.module].paginacion.to) {
        return [];
      }

      var from =
        this.$store.state[this.module].paginacion.current_page -
        this.$store.state[this.module].offset;

      if (from < 1) {
        from = 1;
      }

      var to = from + this.$store.state[this.module].offset * 2;

      if (to >= this.$store.state[this.module].paginacion.last_page) {
        to = this.$store.state[this.module].paginacion.last_page;
      }

      var pagesArray = [];
      while (from <= to) {
        pagesArray.push(from);
        from++;
      }
      return pagesArray;
    },

    change: {
      get() {
        return [];
      },
      set(value) {
        let obj = {value: value, modulo: this.modulo}
        this.$store.commit("setPagina", obj, { root:true })
      },
    },
  },
  methods: {
    cambiarPagina(payload) {
      this.change = payload;
      //this.$store.state[this.module].paginacion.current_page = page;
      this.$store.dispatch(
        this.loadFunction,
        this.$store.state[this.module].paginacion.current_page
      );
      // this.$store.dispatch('loading/loading', this.load);
    },
  },
};
</script>
