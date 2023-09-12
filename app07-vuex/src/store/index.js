import { createStore } from 'vuex'

export default createStore({
  state: {
    msg: 'Hello enviando desde sotres',
    nombre: 'Penarol',
    apellido: 'Sos minusculo',
    amigos: ['Avril', 'Carolina', 'Kamila']
  },
  getters: {
    mensaje (state) {
      return state.msg
    },
    nombreCompleto(state){
      return `${state.nombre} ${state.apellido}`
    }
  },
  mutations: {
    addAmigo(state, amigo) {
      state.amigos = [amigo,...state.amigos] 
    },
    elAmigos(state,index) {
      state.amigos.splice(index, 1);
    }
  },
  actions: {
    addAmigoAction(context, amigo) {
      context.commit('addAmigo',amigo);
    },
    elAmigosAction(context,index) {
      context.commit('elAmigos',index);
    }
  },
  modules: {
  }
})
