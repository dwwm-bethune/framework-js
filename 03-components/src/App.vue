<template>
  <div>
    <XCard slogan="Bye composant" color="red" />
    <XCard :color="theme" />
    <input v-model="theme">
    <div class="card">Test</div>
  </div>
</template>

<script>
import XCard from './components/XCard.vue';

export default {
  components: {
    XCard,
  },
  data() {
    return {
      theme: 'lightblue',
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
