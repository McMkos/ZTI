<template>
    <div class="welcomeForm">
        <h1>Welcome to TRENBL</h1>
        <h1 v-if="loggedIn" style="color: green;">{{ name }}</h1>
        <div v-if="!loggedIn" @click="location.refresh" class="button" ><router-link to="/singup" class="r-link">Sing up</router-link></div>
        <div v-if="!loggedIn" class="button"><router-link to="/singin" class="r-link">Sing in</router-link></div>
        <div v-if="loggedIn" class="button"><router-link to="/dashboard" class="r-link">Dashboard</router-link></div>
        <div v-if="loggedIn" class="button" @click="logOut">Sing out</div>
        <span style="display:block; margin-top: 50px;">App by Michał Kosiba</span>
    </div>
</template>

<script>
import axios from '../../api/axios'

export default{
    methods:{
        singUp(){
            this.$emit('singUp')
            axios.get('/users').then(res => {
              console.log(res.data)
            })
        },
        singIn(){
            this.$emit('singIn')
        },
        logOut(){
          localStorage.removeItem('name')
          localStorage.removeItem('accessToken')
          this.loggedIn = false
        }
    },
    mounted() {
      if(localStorage.getItem('name')){
        this.name = localStorage.getItem('name')
        console.log(localStorage.getItem('name'))
        this.loggedIn = true;
      } else {
        this.loggedIn = false
      }
          
    },
    data(){
        return{
            name: "",
            loggedIn: false
        }
    }
  }
</script>

<style>
  .welcomeForm{
    width: 600px;
    height: fit-content;

    padding: 20px;
    position: absolute;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(255,255,255,0.5);
    text-align: center;
    border-radius: 10px;
  }
  h1{
    background-color: white;
    padding: 7px 40px 0 40px;
    width: fit-content;
    border-radius: 10px;
    margin: 10px auto;
    border-style: solid;
    border-color: #2c3e50;
  }
  .button{
    padding: 7px 20px 0 20px;
    width: fit-content;
    height: fit-content;
    border-radius: 10px;
    margin: 20px ;
    border-color: white;
    border-width: 2px;
    background: rgba(44, 62, 80,0.5);
    color: white;
    border-style: solid;
    display: inline-block;
    font-size:30px;
    transition: 0.3s;
  }
  .button:hover{
    border-color: #2c3e50;
    color: #2c3e50;
    background: rgba(255, 255, 255, 0.5);
    cursor: pointer;
  }
  .r-link{
    text-decoration: none;
    color: white;
    transition: 0.3s;
    width: 100%;
    height: 100%;
  }
  .r-link:hover{
    color: #2c3e50;
  }
</style>