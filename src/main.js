
import { createApp } from 'vue'
import Home from './Home.vue'
// import App from './App.vue'
// import router from './router/router.js'

// Homeを描画
// const app = createApp(App)
// app.use(router)
// app.mount('#app')
const home = createApp(Home);
// home.use(router);
home.mount('#home');