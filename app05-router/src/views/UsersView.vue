<template>
  <div class="container">
    <h1>User profile</h1>
    <user-comp />
    <router-link :to="{ name: 'users', params: { id: usr } }" v-for="(usr, index) of  arrayUsuarios " :key="index">
      <button>{{ usr }}</button>
    </router-link>
  </div>
</template>

<script>
import UserComp from '@/components/UserComp.vue'

export default {
  components: {
    UserComp
  },
  data() {
    return {
      arrayUsuarios: ['iNVE14', 'Arzew', 'JeeKill', 'JeeUvs']
    }
  }
}
</script>