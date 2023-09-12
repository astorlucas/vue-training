<template>
  <div>
    <div class="container">

      <ul class="nav justify-content-center">
        <li class="nav-item">
          <router-link to="/" class="nav-link active">Home</router-link> 
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link">About</router-link> 
        </li>
        <li class="nav-item">
          <router-link to="/users" class="nav-link">Perfil</router-link> 
        </li>
        <li class="nav-item">
          <router-link to="/contact" class="nav-link">Contact</router-link> 
        </li>
        <li class="nav-item">
          <router-link to="/login" class="nav-link">Login</router-link> 
        </li>
        <li class="nav-item">
          <router-link to="/signup" class="nav-link">SignUp</router-link>
        </li>
      </ul>

      
      
      
      
     
      
    </div>
    <div>
      <router-view />
    </div>
  </div>
</template>

<style>
@import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
</style>
