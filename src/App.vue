<template>
  <div>
    <h1>💖 Hello World!</h1>
    <p>Welcome to your Electron application.</p>
    <HelloWorld msg="Vite + Vue" />
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import HelloWorld from './components/HelloWorld.vue'

console.log('👋 This message is being logged by "renderer.ts", included via Vite');


</script>

