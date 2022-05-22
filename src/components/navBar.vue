<template>
 
      <v-card
        color="grey lighten-4"
        flat
      >
        <v-toolbar
          color="purple"
          dark
        >
          <v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon>
          <v-toolbar-title>application</v-toolbar-title>
          <v-spacer></v-spacer>
          
          <v-btn icon>
            <v-icon>mdi-exit-to-app</v-icon>
          </v-btn>
          
        </v-toolbar>
        <v-navigation-drawer flat app class="success" v-model="drawer">
        <v-list>

          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="text-h6">
                select option
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>


         <v-list>
            <v-list-item v-for="i in links" :key="i.icon" router :to="i.route">
            <v-list-item-icon>
                <v-icon class="white--text">{{i.icon}}</v-icon>
            </v-list-item-icon>
        
            <v-list-item-content>
            <v-list-item-title class="white--text">{{i.text}} </v-list-item-title>
            </v-list-item-content>
        
            </v-list-item>
         </v-list>
       
        </v-navigation-drawer>
      </v-card>
</template>

<script>
export default {
    name:'navBar',
    data(){
        return{
            drawer: false,
            links:[
                {icon:'mdi-login', text:'login', route:'/'},
                {icon:'mdi-folder', text:'my project', route:'/project'},
            ]
        }
    }

}
</script>

<style>

</style>