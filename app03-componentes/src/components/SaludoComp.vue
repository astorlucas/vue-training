<template>
  <div>
    <h1>{{ titulo }}</h1>
  </div>
</template>

<script>
export default {
  name: 'SaludoComp',
  data() {
    return {
      titulo: 'Hola soy el msg por defecto'
    }
  },
  props: {
    msg: String
  }
}
</script>

<style scoped>
</style>
