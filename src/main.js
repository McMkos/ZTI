import { createApp } from 'vue'
import App from './App.vue'

import {createRouter, createWebHistory } from 'vue-router'
import Welcome from './components/Welcome.vue'
import SingIn from './components/SingIn.vue'
import SingUp from './components/SingUp.vue'
import Dashboard from './components/Dashboard.vue'
import Exercises from './components/Exercises.vue'
import NewExercise from './components/NewExercise.vue'
import notFound from './components/status-codes/404.vue'
import unauthorized from './components/status-codes/401.vue'
import Training from './components/Training.vue'
import NewWorkout from './components/NewWorkout.vue'

const routes = [
    {
        path: '/',
        name: 'Welcome',
        component: Welcome
    },
    {
        path: '/singin',
        name: 'SingIn',
        component: SingIn
    },
    {
        path: '/singup',
        name: 'SingUp',
        component: SingUp
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard
    },
    {
        path: '/dashboard/exercises',
        name: 'Exercises',
        component: Exercises
    },
    {
        path: '/dashboard/exercises/new',
        name: 'NewExercise',
        component: NewExercise
    },
    {
        path: '/dashboard/training',
        name: 'Training',
        component: Training
    },
    {
        path: '/dashboard/training/new',
        name: 'NewWorkout',
        component: NewWorkout
    },
    //401
    {
        path: '/401',
        name: 'unauthorized',
        component: unauthorized
    },
    // 404
    {
        path: '/:catchAll(.*)',
        name: 'NotFound',
        component: notFound
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

createApp(App).use(router).mount('#app')
