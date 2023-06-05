<template>
    <div class="dashboardForm" style="overflow: auto;">
        <h1>Add workout</h1>
        <div class="container" style="text-align: left; padding: 10px; width: 500px; height: 380px;">

        <div class="addPanel">
            <label style="margin-top: 0px;">Exercise: </label>
        <div style="width: 100%">
            <select style="width: 100%" required v-model="ex">
                <option v-for="exercise in exerciseList" :value="exercise.name">
                    {{ exercise.name }}
                </option>
            </select>
        </div>
        <label>Sets: </label>
        <input type="number" style="width: 100%" required v-model="sets">
        <label>Repetitions: </label>
        <input type="number" style="width: 100%" required v-model="reps">
        <div class="button" style="margin: 50px 0px 0px 0px; width:98%; text-align: center;padding: 7px 0px 0 0px; font-size: 24px;" @click="addExercise">Add</div>
        </div>

        <div style="margin: 0px 50px 0px 50px; width: 250px; height: 350px; display: inline-block;">
            <div v-for="e in exercises" class="ex">
                <div class="eName" :style="{backgroundColor: e.name.color}">{{e.name.name}}</div>
                <div class="sets">{{e.sets}}</div>
                <div class="reps">{{ e.reps }}</div>
            </div>
        </div>
            
        </div>
        <div style="width: 520px; display: inline-block; height: fit-content; overflow: auto;">
          <div class="button" style="margin: 20px 20px 0px 20px;" @click="addWorkout">Add workout</div>
          <div class="button" style="margin: 20px 20px 0px 20px;" @click="cancel">Cancel</div>
        </div>
        <span style="display:block; float:none; margin-top: 50px;">App by Michał Kosiba</span>
    </div>
</template>

<script>
import axios from '../../api/axios'

export default{
    data(){
        return{
            exerciseList: [],
            ex: "",
            sets: 0,
            reps: 0,
            exercises:[]
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
        cancel(){
            this.$router.push('/dashboard/training')
        },
        addWorkout(){
            console.log(this.exercises)
            localStorage.setItem('workout', JSON.stringify(this.exercises))
            this.$router.push('/dashboard/training')
        },
        addExercise(){
            const exToAdd = {
                name: this.exerciseList.find(e => e.name === this.ex),
                sets: this.sets,
                reps: this.reps
            }
            this.exercises.push(exToAdd)
            this.ex = ""
            this.sets = 0
            this.reps = 0
        }
    }
  }
</script>

<style>
    .addPanel{
        width:150px;
        float: left;
    }
    select{
        display: block;
        padding: 10px 6px;
        width: 100%;
        box-sizing: border-box;
        border-style: solid;
        border-color: #2c3e50;
        border-radius: 10px;
        color: #2c3e50;
    }
    .eName{
        padding: 10px 10px 5px 10px;
        display: inline-block;
        background-color: red;
        width: 150px;
    }
    .sets{
        padding: 10px 10px 5px 10px;
        color: #2c3e50;
        background-color: white;
        display: inline-block;
    }
    .reps{
        padding: 10px 10px 5px 10px;
        color: white;
        background-color: #2c3e50;
        display: inline-block;
    }
    .ex{
        display: inline-block;
        width:fit-content;
        border-radius: 5px;
        border-style: solid;
        margin-bottom: 5px;
    }
</style>