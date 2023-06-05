<template>
    <div class="singUpForm">
        <div class="error" v-if="registerFailed">
          Registration failed! {{ error }}
        </div>
        <label style="margin-top: 0px;">Name: </label>
        <input :class="{inputError: registerFailed}" type="text" required v-model="name">
        <label>Email: </label>
        <input :class="{inputError: registerFailed}" id="email" type="email" required v-model="email">
        <label>Password: </label>
        <input :class="{inputError: registerFailed}" type="password" required v-model="password">
        <label>Confirm password: </label>
        <input :class="{inputError: registerFailed}" type="password" required v-model="confirmPassword">
        <div style="width: 100%; height: fit-content; overflow: auto;">
          <div class="submitButton" @click="submitRegister">Submit</div>
        </div>
        <span style="text-align: center; display:block; margin-top: 50px;">App by Michał Kosiba</span>
    </div>
</template>

<script>
import axios from '../../api/axios'

export default{
    methods:{
        submitRegister(){
          if(this.name.length < 3){
            this.error = "Name too short"
            this.registerFailed = true
            this.clearInputs()
            return
          }

          if(!document.getElementById("email").validity.valid || this.email.length === 0){
            this.error = "Invalid email address"
            this.registerFailed = true
            this.clearInputs()
            return
          }

          if(this.password.length < 3){
            this.error = "Password too short"
            this.registerFailed = true
            this.clearInputs()
            return
          }

          if(this.password !== this.confirmPassword){
            this.error = "Password confirmation failed"
            this.registerFailed = true
            this.clearInputs()
            return
          }
          let user = {
              name: this.name,
              email: this.email,
              password: this.password,
            }
          const that = this
          axios.post('/users', user)
              .then(res =>{
                console.log(res)
                that.registerFailed = false
                localStorage.setItem('name', user.name)
                localStorage.setItem('accessToken', res.data.accessToken)
                that.$router.push('/')
              })
              .catch(function (error){
                that.error = error.response.data.message
                that.registerFailed = true
                that.clearInputs()
              })
        },
        clearInputs(){
          this.name = ""
          this.email = ""
          this.password = ""
          this.confirmPassword = ""
        }
    },
    data(){
        return{
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
            registerFailed: false
        }
    }
  }
</script>

<style>
  .singUpForm{
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
</style>