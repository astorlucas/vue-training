<template>
    <div class="container">
    <table class="table table-bordered table-dark">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">TITULO</th>
          <th scope="col">BOOTY</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="frame in frameworks" :key="frame.id">
          <th scope="row">{{ frame.id }}</th>
          <td>{{ frame.Titulo }}</td>
          <td>{{ frame.culo }}</td>
        </tr>
      </tbody>
    </table>
  </div>
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
        { id: 1, Titulo: 'Vue', culo: 'GRANDE' },
        { id: 2, Titulo: 'Angulo', culo: 'BIG' },
        { id: 3, Titulo: 'Reactor', culo: 'perfeito' }
      ]
    }
  }
}
</script>

<style></style>
