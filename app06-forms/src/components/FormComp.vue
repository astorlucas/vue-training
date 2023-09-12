<template>
  <div class="container">
    <h1>Contact form</h1>
    <div class="container mt-5">
      <h2>Contact Us</h2>
      <form>
        <div class="mb-3">
          <label for="name" class="form-label">Name</label>
          <input type="text" class="form-control" id="name" placeholder="Your Name" required
            v-model="datosPersona.nombre">
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input type="email" class="form-control" id="email" placeholder="Your Email" required
            v-model="datosPersona.mail">
        </div>
        <div class="mb-3">
          <label for="message" class="form-label">Message</label>
          <textarea class="form-control" id="message" rows="5" placeholder="Your Message" required
            v-model="msg"></textarea>
        </div>
        <!-- Checkboxes -->
        <div class="mb-3">
          <label class="form-label">Options</label>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="enviarmail" value="enviarmail" v-model="optionMail">
            <label class="form-check-label" for="option1">
              Enviar Email
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="enviarcopia" value="enviarcopia" v-model="optionMail">
            <label class="form-check-label" for="option2">
              Enviar una copia
            </label>
          </div>
        </div>
        <!-- Radio buttons -->
        <div class="mb-3">
          <label class="form-label">Choose an option:</label>
          <div class="form-check">
            <input class="form-check-input" type="radio" id="masculino" v-model="genero" value="femenino">
            <label class="form-check-label" for="option1">
              Masculingo
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" id="femenino" v-model="genero" value="masculino">
            <label class="form-check-label" for="option2">
              Femeningo
            </label>
          </div>
        </div>
        <!-- Dropdown select -->
        <div class="mb-3">
          <label class="form-label">Select an option:</label>
          <select class="form-select" v-model="horario">
            <option v-for="horas in dataHora" :key="horas" :selected="horas == 'Sexo'">{{horas}}</option>
          </select>
        </div>
        <button type="submit" class="btn btn-primary" @click.prevent="enviar">Submit</button>
      </form>
      <div class="row" v-if="enviado">
        <div class="mt-4">
          <div class="panel panel-defualt">
            <div class="panel-heading">
              <h3>Datos ingresexados</h3>
            </div>
            <div class="panel-body">
              <p>Nombre: {{ datosPersona.nombre }}</p>
              <p>Email: {{ datosPersona.mail }}</p>
              <p style="white-space:pre">MSG:<br>{{ msg }}</p>
              <p>Opción de envío:
              <ul>
                <li v-for="item in optionMail" :key="item"> {{ item }} </li>
              </ul>
              </p>
              <p>Genero: {{ genero }}</p>
              <p>Horario: {{ horario }}</p> 
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'FormComp',
  data() {
    return {
      datosPersona: {
        nombre: '',
        mail: ''
      },
      msg: 'PLACE HOLDER SENSUAL',
      optionMail: [],
      genero: 'M',
      horario: 'Tetas',
      dataHora: ['Sexo','Porno','Tetas'],
      enviado: false

    }
  },
  methods: {
    enviar() {
      this.enviado = true;
    }
  }

}
</script>


<style scoped></style>
