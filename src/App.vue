<template>
  <v-app color="blue">
    <v-main>
       <navBar/>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import navBar from '@/components/navBar.vue';
export default {
  name: 'App',
  components:{navBar},

  data(){
    return{
      
    }
  },
};
</script>
