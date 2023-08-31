<template>
  <div>
    <SaludoComp msg="Saludando sexualmente"/>
  </div>
  <div>
    <FrameWorks />
  </div>
  <div>
    <ListaFrameWorks />
  </div>
</template>

<script>
import SaludoComp from './components/SaludoComp.vue'
import FrameWorks from './components/FrameWorks.vue'
import ListaFrameWorks from './components/ListaFrameWorks.vue'

export default {
  name: 'App',
  components: {
    SaludoComp,
    FrameWorks,
    ListaFrameWorks
  }
}
</script>

<style>
@import "../node_modules/bootstrap/dist/css/bootstrap.css"
</style>
