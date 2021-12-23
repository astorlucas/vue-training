const app = Vue.createApp({
    template: `
        <button v-on:click="increment()">Incrementar contador</button>
        <p>{{contador}}</p>
        <div v-if="contador % 2 === 0">
            Es par
        </div>
    `,
    data() {
        return {
            contador: 0
        }
    },
    methods: {
        increment() {
            this.contador += 1;
        }
    }
}).mount('#app');