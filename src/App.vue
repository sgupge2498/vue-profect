<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/folder">Folder</router-link>
    </nav>
    <router-view />
  </div>
</template>

<!-- <script setup>
import { RouterView } from 'vue-router';
const userName = 'POG'
console.log(userName)
</script>

<template>
  <div>
    <main>
      <RouterView />
    </main>
  </div>
</template> -->
