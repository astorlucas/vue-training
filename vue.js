const app = Vue.createApp({
    template: `
        <button v-on:mousemove="increment()">Incrementar contador</button>
        <p>{{contador}}</p>
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