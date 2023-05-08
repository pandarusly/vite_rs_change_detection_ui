
import "mars3d-cesium/Build/Cesium/Widgets/widgets.css"
import "mars3d/dist/mars3d.css"

import { createApp } from 'vue' 
import App from './App.vue'
// import "./styles/style.css"
import "./styles/tailwind.css"

import router from './router'

// createApp(App).mount('#app')
const app = createApp(App);
app.use(router);
app.mount('#app');
