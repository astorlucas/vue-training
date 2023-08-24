<template>
  <MyButton color="white" background="darkslateblue" :disabled="!valid" />
  <MyInput />
</template>

<script>
import MyButton from './components/MyButton.vue'
import MyInput from './components/MyInput.vue'


export default {
  name: 'App',
  components: {
    MyButton,
    MyInput
  },
  data(){
    return {
      valid: true
    }
  }
}
</script>

<style>
body{
  font-family: 'Times New Roman', Times, serif;
}
</style>
