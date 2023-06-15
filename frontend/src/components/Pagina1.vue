<template>
  <div>
    <div style="height: 100vh; overflow-y: auto;"> 
    <!-- Navbar -->
    <NavBar />
    <!-- Slider -->
 
      <div class="info-boxes">
        <h1>Ezequiel Gomez Gastroentrologia</h1>
      
      </div>
    <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="https://www.shutterstock.com/image-photo/gastroenterologist-consultation-treatment-stomach-diseases-260nw-2118765434.jpg" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
          <img src="https://media.istockphoto.com/id/1339090452/es/foto/m%C3%A9dico-irreconocible-sosteniendo-el-est%C3%B3mago-resaltado-en-las-manos-ilustraci%C3%B3n-m%C3%A9dica.jpg?s=612x612&w=0&k=20&c=d7wN1j1g-jYySv-a0-vYvnkJJMrIQxYL8fuvlKdLGnc=" class="d-block w-100" alt="...">
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>

    <!-- Título de servicios -->
    <h1 class="text-center my-4">Servicios</h1>

    <!-- Imágenes de servicios -->
    <div class="container">
      <div class="row">
        <div class="col-lg-4">
          <img src="https://img.freepik.com/vector-premium/vector-concepto-gastroenterologia-medicos-intestino-grueso-delgado-examinan-tratamiento-disbiosis-gastroenterologo-analiza-bacterias-daninas_163674-631.jpg" class="img-fluid" alt="Imagen Servicio 1">
        </div>
        <div class="col-lg-4">
          <img src="https://www.sanpablo.com.pe/wp-content/uploads/2021/05/04-gastro.jpg" class="img-fluid" alt="Imagen Servicio 2">
        </div>
        <div class="col-lg-4">
          <img src="https://confiasalud.pe/wp-content/uploads/2022/12/Gastroenterologia-900x500.jpg" class="img-fluid" alt="Imagen Servicio 3">
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
export default {
  name: 'MiComponente',
  components: {
      NavBar,
      // etc.
    },
};
</script>

<style scoped>
.carousel-item img {
  height: 500px; 
  object-fit: cover; 
}

.info-boxes {
  display: flex;
  justify-content: center;
  gap: 10px;
  max-width: 80%;  /* Esto limitará el ancho de los info-boxes a un 80% del contenedor */
  margin: 0 auto;  /* Esto centrará el contenedor de info-boxes */
}
</style>