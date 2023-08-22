const app = Vue.createApp({
    data() {
        return {
            contador: 0,
            utiles: ["10 cuadernos", "15 lapices", "3 mujeres hermosas"],
            newUtil: ''
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
}).mount('#lista-compras');

