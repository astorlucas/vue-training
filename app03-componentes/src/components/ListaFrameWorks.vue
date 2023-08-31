<template>
  <ul>
    <FrameWork v-for="fra in frameworks" :key="fra.id">{{ fra.Titulo }}</FrameWork>
  </ul>
</template>

<script>
import FrameWork from './FrameWork.vue'

export default {
  name: 'ListaFrameWorks',
  components: {
    FrameWork
  },
  data() {
    return {
      frameworks: [
        { id: 1, Titulo: 'Vue' },
        { id: 2, Titulo: 'Angulo' },
        { id: 3, Titulo: 'Reactor' }
      ]
    }
  }
}
</script>

<style></style>
