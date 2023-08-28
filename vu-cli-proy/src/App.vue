<template>
  <form @submit.prevent="enviar" class="form">
  <MyButton 
    color="white" 
    background="darkslateblue" 
    :disabled="!valid" 
  />
  <MyInput 
    name="Usuario" 
    :rules="{ required: true, min: 33 }" 
    :value="usuario.value"
    @update="update" 
  />
  <MyInput 
    name="Password"
    :rules="{ required: true, min: 2 }" 
    :value="password.value" 
    @update="update"
    type="password"
  />
</form>
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
  data() {
    return {
      usuario: {
        value: '',
        valid: false
      },
      password: {
        value: '',
        valid: false
      }
    }
  },
  computed: {
    valid(){
      return this.usuario.valid && this.password.valid
    }
  },
  methods: {
    enviar(){
      console.log('Enviar');

      //Codigo para validar el formulario
    },
    update(payload){
      this[payload.name.toLowerCase()] = {
        value: payload.value,
        valid: payload.valid
      };
    }
  }
}
</script>

<style>
body {
  font-family: 'Times New Roman', Times, serif;
}

.form {
  max-width: 400px;
  width: 50%;
}
</style>
