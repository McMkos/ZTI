<template>
    <div class="dashboardForm" style="overflow: auto;">
        <h1>Training plan</h1>
        <div class="container">
            <div style="margin: 0px 50px 0px 50px; width: 250px; height: 350px; display: inline-block;">
            <div v-for="e in exercises" class="ex">
                <div class="eName" :style="{backgroundColor: e.name.color}">{{e.name.name}}</div>
                <div class="sets">{{e.sets}}</div>
                <div class="reps">{{ e.reps }}</div>
            </div>
        </div>
        </div>
        <div style="width: 520px; display: inline-block; height: fit-content; overflow: auto;">
          <div class="button" style="margin: 20px 20px 0px 20px;" @click="addWorkout">Add training</div>
          <div class="button" style="margin: 20px 20px 0px 20px;" @click="goBack">Dashboard</div>
        </div>
        <span style="display:block; float:none; margin-top: 50px;">App by Michał Kosiba</span>
    </div>
</template>

<script>
import axios from '../../api/axios'

export default{
    data(){
        return{
            exercises: []
        }
    },
    beforeCreate(){
        this.exercises = JSON.parse(localStorage.getItem('workout'))
        if(!this.exercises){
            this.exercises = []
        }
        console.log(this.exercises)
    },
    methods:{
        goBack(){
            this.$router.push('/dashboard')
        },
        addWorkout(){
            this.$router.push('/dashboard/training/new')
        }
    }
  }
</script>

<style>

</style>