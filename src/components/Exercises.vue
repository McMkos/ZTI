<template>
    <div class="dashboardForm" style="overflow: auto;">
        <h1>Exercise list</h1>
        <div class="container">
            <div class="addExercise" @click="addExercise">
                <img src="../assets/plus.svg" style="width: 10%; height: 66%; margin-top: 2.5%">
            </div>
            <div v-for="exercise of exerciseList">
                <div class="exercise" :style="{backgroundColor: exercise.color}">
                    <div class="deleteButton">x</div>
                    <span class="exerciseName">{{ exercise.name }}</span>
                </div>
            </div>
        </div>
        <div style="width: 520px; display: inline-block; height: fit-content; overflow: auto;">
          <div class="submitButton" style="margin-top: 20px;" @click="goBack">Dashboard</div>
        </div>
        <span style="display:block; float:none; margin-top: 50px;">App by Michał Kosiba</span>
    </div>
</template>

<script>
import axios from '../../api/axios'

export default{
    data(){
        return{
            exerciseList: []
        }
    },
    beforeCreate(){
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('accessToken')
        const that = this
        axios.get('/exercises')
        .then(res => {
            if(res.status === 200 && res.data != null){
                that.exerciseList = res.data.exercises
            }
        })
        .catch(function (error){
            console.log(error)
            that.$router.push('/401')
        })
    },
    methods:{
        goBack(){
            this.$router.push('/dashboard')
        },
        addExercise(){
            this.$router.push('/dashboard/exercises/new')
        }
    }
  }
</script>

<style>
    .exercise{
        width:400px;
        height: 45px;
        margin: 20px 60px 20px 60px;
        padding-top: 15px;
        border-style: solid;
        border-color: #2c3e50;
        border-radius: 10px;
    }
    .exerciseName{
        color: white;
        text-shadow:
        -1px -1px 0 #000,
        1px -1px 0 #000,
        -1px 1px 0 #000,
        1px 1px 0 #000; 
        font-size: 30px;
    }
    .addExercise{
        width: 300px;
        height: 45px;
        margin: 20px 110px 35px 110px;
        background-color: white;
        border-color: green;
        border-radius: 10px;
        border-style: solid;
        transition: 0.3s;
    }
    .addExercise:hover{
        width: 400px;
        height: 60px;
        margin: 20px 60px 20px 60px;
        cursor: pointer;
    }
    .container{
        width: 520px; 
        height: 400px;
        display: inline-block; 
        overflow: auto;
        background: rgba(255,255,255,0.5);
    }
    .deleteButton{
        width: fit-content;
        height: fit-content;
        cursor: pointer;
        background-color: red;
        color: white;
        border-style: solid;
        border-color: red;
        border-radius: 3px;
        float: right;
        margin-right: 10px;
    }
</style>