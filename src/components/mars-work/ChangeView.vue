<!-- '@': path.resolve(__dirname, 'src') 依然无法运行项目，所以不搞了 -->
<template>
    <!-- <div class="font-chinese antialiased"> -->
      <!-- <div class="min-h-screen"> -->
        <!-- <Navbar /> -->
         
        <MarsMap :url="configUrl" map-key="before"  map-key2="after" @onload="marsOnload" />
      <!-- </div> -->
      
    <!-- </div> -->
      
  </template>
  
  <script setup lang="ts">
//   import * as mars3d from "mars3d";
  import MarsMap from "./mars-map.vue";
  import Navbar from "../layout/Navbar/index.vue";
  const configUrl = "config/config.json";
   
  
  const marsOnload = (maps: any) => {}
    
  </script>
  
  <style></style>
  