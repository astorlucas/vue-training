<template>
  <div>
    <ul class="list-group">
      <li class="list-group-item" v-for="item in items" :key="item.id">
        {{ item.titulo }} - ${{ item.precio }}
        <button @click="quitarItem(item)">Eliminar producto</button>
      </li>
    </ul>
    <div class="card p-3 my-5">
      <h4 class="text-center"> Total: ${{ total }}</h4>
    </div>
    <button :disabled="items.length === 0" @click="$emit('pagar-todo')" class="btn btn-info  ">Pagar con zetrso</button>
  </div>
</template>

<script>
export default {
  name: 'MyCarrito',
  props: ['items'],
  computed: {
    total() {
      return this.items.reduce((acumulador, item) => acumulador + Number(item.precio),0);
    }
  },
  methods: {
    quitarItem(item) {
      console.log(item)
      this.$emit('quitar-item', item);
    }
  }
}
</script>


<style></style>
