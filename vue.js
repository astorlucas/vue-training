const app = Vue.createApp({
    data() {
        return {
            contador: 0,
            utiles: [
            {
                util: '1 cosa',
                comprado: true
            },
            {
                util: '1 Avril',
                comprado: false
            }
        ],
            newUtil: '',
            estado: 'default'
        }
    },
    computed: {
        listaRever() {
            return this.utiles.slice(0).reverse()
        }
    },
    methods: {
        addElement() {
            this.utiles.push({
                util: this.newUtil,
                comprado: false
            })
            this.newUtil = ''
        },
        cambiarEstado(newState) {
            this.estado = newState,
            this.newUtil = '' 
        },
        comprar(util){
            util.comprado = !util.comprado
        }
    }
}).mount('#lista-compras');

