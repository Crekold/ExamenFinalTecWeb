<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">Pagina Gastroenterologia</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link active" to="/">Inicio</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/pagina2">instrumental</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/pagina3">Registro Paciente</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/pagina4">Contactos</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
</template>

<script>
export default {}
</script>

<style scoped>
.top-navbar {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 9999;
}

.offcanvas {
  width: 250px;
}
.menu-button {
  font-size: 1.2em;
  padding: 10px 20px;
  border-radius: 5px;
}
</style>
