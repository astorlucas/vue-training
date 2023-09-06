<template>
    <div class="card my-5">
        <div class="card-body">
            <h5 class="text-center card-title">{{ MyProducto.titulo }}</h5>
            <img class="text-center" :src="MyProducto.imagen" width="220" height="150" alt="TETAAAAAS">
            <p class="text-center text-muted card-text display-3">$ {{ Number(MyProducto.precio).toFixed() }}</p>
            <button @click="agregarCarrito(MyProducto)" class="btn btn-primary form-control" :disabled="estaAgregado">
                {{ estaAgregado ? 'Ya agregado hijo de la watona' : 'Agregar al carrito'}}
            </button>
        </div>
    </div>
</template>
  
<script>


export default {
    name: 'MyProducto',
    props: ['MyProducto', 'estaAgregado'],
    methods: {
        agregarCarrito(MyProducto) {
            this.$emit('agregar-carro', MyProducto);
        }
    }
}
</script>
  
<style></style>