<template>
  <!-- <div class="font-chinese antialiased"> -->
    <!-- <div class="min-h-screen"> -->
      <Navbar />
      
      <router-view></router-view>
      
      <!-- <MarsMap :url="configUrl" map-key="before"  map-key2="after" @onload="marsOnload" /> -->
    <!-- </div> -->
    
  <!-- </div> -->
    
</template>

<script setup lang="ts">
// import * as mars3d from "mars3d";
// import MarsMap from "~/components/mars-work/mars-map.vue";
import Navbar from "~/components/layout/Navbar/index.vue";
// const configUrl = "config/config.json";
 

const marsOnload = (maps: any) => {}
  
</script>

<style></style>
