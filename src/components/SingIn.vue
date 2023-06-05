<template>
    <div class="singInForm">
        <div class="error" v-if="loginFailed">
          Login failed! {{ error }}
        </div>
        <label style="margin-top: 0px;">Name: </label>
        <input :class="{inputError: loginFailed}" type="email" required v-model="name">
        <label>Password: </label>
        <input :class="{inputError: loginFailed}" type="password" required v-model="password">
        <div style="width: 100%; height: fit-content; overflow: auto;">
          <div class="submitButton" @click="submitLogin">Submit</div>
        </div>
        <span style="text-align: center; display:block; margin-top: 50px;">App by Michał Kosiba</span>
    </div>
</template>

<script>
import axios from '../../api/axios'

export default{
    methods:{
        submitLogin(){
            let user = {
              name: this.name,
              password: this.password
            }
            let that = this

              axios.post('/users/login', user)
              .then(res =>{
                console.log(res)
                that.loginFailed = false
                localStorage.setItem('name', user.name)
                localStorage.setItem('accessToken', res.data.accessToken)
                that.$router.push('/')
              })
              .catch(function (error){
                that.error = error.response.data.message
                that.loginFailed = true
                that.name = ""
                that.password = ""
              })
              
        }
    },
    data(){
        return{
            name: "",
            password: "",
            loginFailed: false,
            error: ""
        }
    }
  }
</script>

<style>
  .singInForm{
    width: 600px;
    height: fit-content;
    padding: 20px;
    position: absolute;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(255,255,255,0.5);
    text-align: left;
    border-radius: 10px;
  }
  .submitButton{
    padding: 7px 20px 0 20px;
    width: fit-content;
    border-radius: 10px;
    margin-top: 25px;
    border-color: white;
    border-width: 2px;
    background: rgba(44, 62, 80,0.5);
    color: white;
    border-style: solid;
    font-size:30px;
    transition: 0.3s;
    float: right;
  }
  .submitButton:hover{
    border-color: #2c3e50;
    color: #2c3e50;
    background: rgba(255, 255, 255, 0.5);
    cursor: pointer;
  }
  label{
    color: #2c3e50;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 1em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
  }
  input{
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border-style: solid;
    border-color: #2c3e50;
    border-radius: 10px;
    color: #2c3e50;
  }
  .inputError{
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border-style: solid;
    border-color: red;
    border-radius: 10px;
    color: #2c3e50;
  }
  .error{
    color: red;
    width: fit-content;
    padding: 5px;
    font-weight: bold;
    margin: 0 auto;
    font-size: 1em;
    text-transform: uppercase;
  }
</style>