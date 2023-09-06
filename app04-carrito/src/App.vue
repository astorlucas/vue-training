<template>
  <div>
    <div class="row">
      <div class="col-md-7">
        <div class="row">
          <div class="col-md-6" v-for="prod in Productos" :key="prod.id">
          <my-producto :MyProducto="prod"></my-producto>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MyProducto from './components/MyProducto.vue'
import Productos from './productos.json'

export default {
  name: 'App',
  components: {
    MyProducto
  },
  data(){
    return{
      Productos
    }
  }
}
</script>

<style>
@import "../node_modules/bootstrap/dist/css/bootstrap.css"
</style>
