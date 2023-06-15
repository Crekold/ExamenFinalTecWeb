<template>
    <NavBar />
    <div class="container mt-5">
      <h2>Registrar Cliente</h2>
      <form @submit.prevent="submitForm">
        <div class="mb-3">
          <label for="ci" class="form-label">CI</label>
          <input type="text" class="form-control" id="ci" v-model="cliente.ci" required>
        </div>
        <div class="mb-3">
          <label for="nombre" class="form-label">Nombre</label>
          <input type="text" class="form-control" id="nombre" v-model="cliente.nombre" required>
        </div>
        
        <div class="mb-3">
          <label for="sangre" class="form-label">Tipo de sangre</label>
          <input type="text" class="form-control" id="sangre" v-model="cliente.sangre" required>
        </div>
        <button type="submit" class="btn btn-primary">Registrar</button>
      </form>

      <h2 class="mt-5">Clientes Registrados</h2>
      <table class="table mt-3">
        <thead>
          <tr>
            <th scope="col">CI</th>
            <th scope="col">Nombre</th>
            <th scope="col">Tipo de sangre</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(cliente, index) in clientes" :key="index">
            <td>{{ cliente.ci }}</td>
            <td>{{ cliente.nombre }}</td>
            <td>{{ cliente.sangre }}</td>
            <td>
              <button class="btn btn-danger" @click="deleteCliente(cliente.id_cliente)">Eliminar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
</template>
  
<script>
import axios from 'axios';
import NavBar from '@/components/NavBar.vue';

export default {
  name: 'RegistrarProductoxddd',
  data() {
    return {
      cliente: {
        nombre: '',
        ci: '',
        sangre: ''
      },
      clientes: []
    };
  },
  async created() {
    const response = await axios.get('http://localhost:3000/clientes');
    this.clientes = response.data;
  },
  methods: {
    async submitForm() {
      try {
        const response = await axios.post('http://localhost:3000/clientes', this.cliente);
        this.clientes.push(response.data);
        this.$swal('Cliente registrado!', 'El cliente ha sido registrado con éxito!', 'success');
      } catch (error) {
        console.error(error);
      }
    },
    async deleteCliente(id) {
      try {
        await axios.delete(`http://localhost:3000/clientes/${id}`);
        this.clientes = this.clientes.filter(cliente => cliente.id_cliente !== id);
        this.$swal('paciente eliminado!', 'se elimino al paciende de forma exitosa', 'success');
      } catch (error) {
        console.error(error);
      }
    }
  },
  components: {
    NavBar
  }
};
</script>

  