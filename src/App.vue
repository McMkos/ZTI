<template>
  <div class="bg">
    <router-view/>
  </div>
</template>

<script>
import Welcome from './components/Welcome.vue'
import SingIn from './components/SingIn.vue'
import LoggedIn from './components/LoggedIn.vue'
export default {
  name: 'App',
  data(){
    return{
      welcome: true,
      singup: false,
      singin: false,
      loggedin: false,
      email: ""
    }
  },
  components: {
    Welcome, SingIn, LoggedIn
  },
  methods:{
    singIn(){
      this.singin = true;
      this.welcome = false;
    },
    singUp(){
      this.singup = true;
      this.welcome = false;
    },
    logIn(email){
      this.email = email
      this.singin = false;
      this.loggedin = true;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* The image used */
  background-image: url("./assets/background.jpg");
  /* Full height */
  height: 100%;
  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
body, html {
  height: 100%;
  margin: 0px;
}

</style>
