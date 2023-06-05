<template>
    <div class="dashboardForm">
        <h1>{{ name }}'s dashboard</h1>
        <div class="big-button" @click="toExerciseList">
            Exercise list
        </div>
        <div class="big-button" @click="toTrainingPlan">
            Training plan
        </div>
        <div style="width: 520px; display: inline-block; height: fit-content; overflow: auto;">
          <div class="submitButton" style="margin-top: 20px;" @click="singout">Sing out</div>
        </div>
        <span style="display:block; float:none; margin-top: 50px;">App by Michał Kosiba</span>
    </div>
</template>

<script>
export default{
    data(){
        return{
            exerciseList: ['Benchpress', 'Squat', 'Deadlift', 'OHP'],
            trainingPlan: {},
            name: localStorage.getItem('name')
        }
    },
    beforeCreate(){
        //co ba robić kiedy brak autoryzacji
    },
    methods:{
        singout(){
            localStorage.removeItem('name')
            localStorage.removeItem('accessToken')
            this.$router.push('/')
        },
        toExerciseList(){
          this.$router.push('/dashboard/exercises')
        },
        toTrainingPlan(){
            this.$router.push('/dashboard/training')
        }
    }
  }
</script>

<style>
  .dashboardForm{
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
  .big-button{
    text-align: center;
    padding: 36px 18px 10px 18px;
    width: 200px;
    height: 50px;
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
    line-height: 1;
    font-weight: bold;
  }
  .big-button:hover{
    border-color: #2c3e50;
    color: #2c3e50;
    background: rgba(255, 255, 255, 0.5);
    cursor: pointer;
  }
</style>