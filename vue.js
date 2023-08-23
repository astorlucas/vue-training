const app = Vue.createApp({
    data() {
        return {
            contador: 0,
            utiles: [
            
            //"10 cuadernos", 
            //"15 lapices", 
            //"3 mujeres hermosas"
        ],
            newUtil: '',
            estado: 'default'
        }
    },
    methods: {
        addElement() {
            this.utiles.push(this.newUtil)
            this.newUtil = ''
        },
        cambiarEstado(newState) {
            this.estado = newState,
            this.newUtil = '' 
        }
    }
}).mount('#lista-compras');

