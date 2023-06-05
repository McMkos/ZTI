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
  
</style>