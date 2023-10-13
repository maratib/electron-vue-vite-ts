<template>
  <div>
    <h2 class="text-red-600 text-lg">{{ msg }}</h2>
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
    <p>
      Chrome : <span class="text-red-500">{{ chromeVersion }}</span><br />
      Node : <span class="text-red-500">{{ nodeVersion }}</span><br />
      Electron : <span class="text-red-500">{{ electronVersion }}</span> <br />
      Your value form someObj: : <span class="text-red-500">{{ someValue }}</span> <br />
    </p>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";

defineProps<{ msg?: string }>();

const count = ref(0);
const chromeVersion = ref(versions.chrome());
const nodeVersion = ref(versions.node());
const electronVersion = ref(versions.electron());
const someValue = ref(someObj.getData());


console.log("Node Version: " + versions.node());
console.log("Your value : " + someObj.getData());





</script>
