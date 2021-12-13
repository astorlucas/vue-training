const app = Vue.createApp({
    data() {
        return {
            msg: 'test vue 3',
            pp: {
                nombre: 'soy nombre',
                edad: 22
            }
        }
    }
}).mount('#app');