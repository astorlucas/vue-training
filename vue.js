const app = Vue.createApp({
    template: `
        <button v-on:click="increment()">Incrementar contador</button>
        <p>{{contador}}</p>
        <div v-if="esPar(contador)">
            Es par
        </div>
        <div v-else>
            No es par   
        </div>
        <div>
            {{charla[contador]}}
        </div>
    `,
    data() {
        return {
            contador: 0,
            charla: ["hola", "como", "estas", "bebe", "?"]
        }
    },
    methods: {
        increment() {
            this.contador += 1;
        },
        esPar(num) {
            return num % 2 === 0;
        }
    }
}).mount('#app');