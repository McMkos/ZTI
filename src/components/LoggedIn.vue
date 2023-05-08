<template>
    <div class="form">
        <h1>Welcome again {{ email }}</h1>
    </div>
</template>

<script>
export default{
    props: ['email'],
    data(){
        return{
        }
    }
  }
</script>

<style>
  .form{
    width: 600px;
    height: 400px;
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
    margin: auto;
  }
  .button{
    padding: 7px 20px 0 20px;
    width: fit-content;
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
</style>