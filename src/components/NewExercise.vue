<template>
    <div class="dashboardForm" style="overflow: auto;">
        <h1>Add exercise</h1>
        <div class="container" style="text-align: left; padding: 10px; width: 500px; height: 380px;">
            <label style="margin-top: 0px;">Exercise name: </label>
            <input type="text" required v-model="name">
            <label>Color: </label>
            <input type="color" required v-model="color">
            <label>Tags: </label>
            <div style="display: flex;">
                <input style="display: inline-block; width: 80%" type="text" required v-model="tag"> 
                <div class="button" style="margin: 0px 0px 0px auto; font-size: 24px;" @click="addTag">Add</div>
            </div>
            <div style="width: 100%; padding-top: 10px;">
                <div v-for="tag in tags" style="display: inline-block;">
                    <div class="tag" @click="remove(tag)">
                        {{ tag }}
                    </div>
                </div>
            </div>
        </div>
        <div style="width: 520px; display: inline-block; height: fit-content; overflow: auto;">
          <div class="button" style="margin: 20px 20px 0px 20px;" @click="addExercise">Add exercise</div>
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
            name: "",
            color: "#2c3e50",
            tag: "",
            tags: []
        }
    },
    methods:{
        cancel(){
            this.$router.push('/dashboard/exercises')
        },
        addTag(){
            if(this.tag.length > 0){
                this.tags.push(this.tag)
            }
            this.tag = ""
        },
        addExercise(){
            const newExercise = {
                user: localStorage.getItem('name'),
                exercise: {
                    name: this.name,
                    color: this.color,
                    tags: [...this.tags]
                }
            }
            
            let that = this

            axios.post('/exercises', newExercise)
            .then(res =>{
              console.log(res)
            })
            .catch(function (error){
              console.log(error.message)
            })


            setTimeout(() => this.$router.push('/dashboard/exercises'), 1000)
        },
        remove(tag){
            this.tags = this.tags.filter((item) => {
                return item !== tag
            })
        }
    }
  }
</script>

<style>
    .tag{
        border-radius: 10px;
        border-style: solid;
        border-color: #2c3e50;
        background-color: #2c3e50;
        color: white;
        font-size: 1em;
        padding: 6px 6px 2px 6px; 
        width: fit-content;
        margin-right: 5px;
        margin-bottom: 5px;
        display: inline-block;
    }
    .tag:hover{
        cursor: pointer;
    }
</style>