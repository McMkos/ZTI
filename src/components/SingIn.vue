<template>
    <div class="singUpForm">
        <label style="margin-top: 0px;">Email: </label>
        <input type="email" required v-model="email">
        <label>Password: </label>
        <input type="password" required v-model="password">
        <div class="submitButton" @click="submitLogin">Submit</div>
    </div>
</template>

<script>
export default{
    methods:{
        submitLogin(){
            this.$emit('submitLogin', this.email)
            console.log(this.email)
        }
    },
    data(){
        return{
            email: "",
            password: ""
        }
    }
  }
</script>

<style>
  .singUpForm{
    width: 600px;
    height: 400px;
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
    margin: 150px auto;
    border-color: white;
    border-width: 2px;
    background: rgba(44, 62, 80,0.5);
    color: white;
    border-style: solid;
    font-size:30px;
    transition: 0.3s;
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
</style>