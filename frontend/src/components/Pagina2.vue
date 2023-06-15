<template>
    <NavBar />

    <div class="container mt-5">
      <h1>Registrar Producto</h1>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="nombre">Codigo</label>
          <input type="text" class="form-control" id="nombre" v-model="producto.nombre">
        </div>

        <div class="form-group">
          <label for="descripcion">Descripcion</label>
          <textarea class="form-control" id="descripcion" v-model="producto.descripcion"></textarea>
        </div>

        <div class="form-group">
          <label for="precio">Precio</label>
          <input type="number" class="form-control" id="precio" v-model="producto.precio">
        </div>

        <div class="form-group">
          <label for="unidades">Años de uso</label>
          <input type="number" class="form-control" id="Unidades" v-model="producto.Unidades">
        </div>

        <button type="submit" class="btn btn-primary">Registrar</button>
      </form>

      <h2 class="mt-5">Lista de Productos</h2>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Codigo</th>
            <th>Descripcion</th>
            <th>Precio Original</th>
            <th>Años de uso</th>
            <th>Descuento</th>
            <th>Precio con Descuento</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="prod in productos" :key="prod.nombre">
            <td>{{ prod.nombre }}</td>
            <td>{{ prod.descripcion }}</td>
            <td>{{ prod.precio }}</td>
            <td>{{ prod.Unidades }}</td>
            <td>{{ calcularDescuento(prod.Unidades) }}%</td>
            <td>{{ prod.precio * (1 - calcularDescuento(prod.Unidades) / 100) }}</td>
          </tr>
        </tbody>
      </table>
    </div>
</template>
  
<script>

import NavBar from '@/components/NavBar.vue';

export default {
  name: 'RegistrarProducto',
  data() {
    return {
      producto: {
        nombre: '',
        precio: '',
        descripcion: '',
        Unidades: '',
      },
      productos: [],
    };
  },
  methods: {
    submitForm() {
      this.productos.push({...this.producto});
      this.producto.nombre = '';
      this.producto.precio = '';
      this.producto.descripcion = '';
      this.producto.Unidades = '';
      this.$swal('Producto registrado!', 'Se registro con exito!', 'success');
    },
    calcularDescuento(aniosUso) {
      let descuento = aniosUso * 10;
      return Math.min(descuento, 100);
    },
  },
  components: {
    NavBar,
  },
};
</script>

