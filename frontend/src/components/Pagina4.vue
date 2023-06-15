<template>
    <div style="height: 100vh; overflow-y: auto;"> 
      <NavBar />
      <div class="container mt-5">
        <h2>Contacto</h2>
        <form class="mb-4">
          <div class="mb-3">
            <label for="nombre" class="form-label">Nombre</label>
            <input type="text" class="form-control" id="nombre" placeholder="Tu nombre">
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="email" class="form-control" id="email" placeholder="tuemail@example.com">
          </div>
          <div class="mb-3">
            <label for="comentario" class="form-label">Comentario</label>
            <textarea class="form-control" id="comentario" rows="3" placeholder="Tu comentario"></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Enviar</button>
        </form>
    
        <div class="mt-5 mb-5">
          <h2>Nos puedes encontrar aquí:</h2>
          <div class="google-maps">
            <iframe src="https://www.google.com/maps/embed?pb=YOUR_MAP_EMBED_URL" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
          </div>
        </div>
    
        <div class="mt-5">
          <h2>Síguenos en redes sociales:</h2>
          <div class="d-flex gap-2">
            <button type="button" class="btn btn-primary"><i class="fab fa-facebook-f"></i> Facebook</button>
            <button type="button" class="btn btn-info"><i class="fab fa-twitter"></i> Twitter</button>
            <button type="button" class="btn btn-danger"><i class="fab fa-instagram"></i> Instagram</button>
            <button type="button" class="btn btn-light"><i class="fab fa-linkedin-in"></i> LinkedIn</button>
          </div>
        </div>
      </div>
    </div>
  </template>
    
  <script>
  import NavBar from '@/components/NavBar.vue';
  export default {
    name: 'RegistrarProductoxddddddD',
    components: {
      NavBar
    }
  }
  </script>
    
  <style scoped>
  .container {
    max-width: 960px;
  }
  
  .google-maps {
    overflow: hidden;
    padding-bottom: 56.25%;
    position: relative;
    height: 0;
  }
  
  .google-maps iframe {
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    position: absolute;
  }
  
  .gap-2 {
    gap: 1rem;
  }
  </style>
  