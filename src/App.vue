<script setup>

import { useFlash } from './composables/useFlash';
import { ref, watch } from "vue"
import {useStorage } from './composables/useStorage'
import HomeView from './views/HomeView.vue';

let { flash } = useFlash()

let food = useStorage('food')
let age = useStorage('age')
let message = ref('')

// let obj = useStorage('obj',{ one: 'one'})

// setTimeout(() => {
//   obj.value.one = 'changed'
// }, 3000);
</script>

<template>
  <p>{{ message }}</p>
  <p>
    <input type="text" v-model="message" />
  </p>

  <button @click="doSomething">Click</button>
  <button @click="flash('Yay!','It works On the Page', 'info')">flash</button>
  <button @click="flash('Test!','It works On the Page')">flash2</button>

  <p>
    What is your favorite food? <input type="text" v-model="food"/>
  </p>

  <p>
    How old are you? <input type="text" v-model="age" />
  </p>

  <HomeView></HomeView>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
