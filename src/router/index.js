import Vue from 'vue'
//import { createRouter, createWebHistory } from 'vue-router'
import Router from 'vue-router'
//import Home from '../views/Home.vue'
import Folder from '../views/Folder.vue'
import Note from '../views/Note.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',                  
  base: process.env.BASE_URL,
  routes: [
    // {
    //   path: '/',
    //   name: 'Home',
    //   component: Home
    // },
    {
      path: '/Folder',
      name: 'UserFolder',
      component: Folder
    },
    {
      path: '/Note',
      name: 'UserNote',
      component: Note
    }
  ]
})
