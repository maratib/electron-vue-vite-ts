<template>
  <div>
    <h2>{{ msg }}</h2>
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>

    <p>
      Install
      <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
      in your IDE for a better DX
    </p>
    <p>{{ tips }}</p>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";

defineProps<{ msg?: string }>();

const count = ref(0);

console.log("Node Version: " + versions.node());

const tips = `Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), Electron (v${versions.electron()})`;

</script>
