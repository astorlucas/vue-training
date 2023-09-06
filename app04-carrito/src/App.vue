<template>
  <div>
    <div class="row">
      <div class="col-md-7">
        <div class="row">
          <div class="col-md-6" v-for="prod in Productos" :key="prod.id">
            <my-producto :MyProducto="prod" v-on:agregar-carro="agregarProdCarro" :estaAgregado="estaAgregado(prod)">
            </my-producto>
          </div>
        </div>
        <div class="col-md5">
          <my-carrito :items="carrito" @quitar-item="quitarItem " @pagar-todo="pagarTodo()"></my-carrito>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MyProducto from './components/MyProducto.vue'
import MyCarrito from './components/MyCarrito.vue'
import Productos from './productos.json'

export default {
  name: 'App',
  components: {
    MyProducto,
    MyCarrito
  },
  data() {
    return {
      Productos,
      carrito: []
    }
  },
  methods: {
    agregarProdCarro(producto) {
      this.carrito.push(producto);
    },
    estaAgregado(producto) {
      const item = this.carrito.find(item => item.id === producto.id);
      if (item) {
        return true;
      } else {
        return false;
      }
    },
    quitarItem(producto) {
      console.log(producto)
      this.carrito = this.carrito.filter(item => item.id != producto.id)
    },
    pagarTodo(){
      this.carrito = []
      alert('Venta sexualizada !!!')
    }
  }
}
</script>

<style>
@import "../node_modules/bootstrap/dist/css/bootstrap.css"
</style>
