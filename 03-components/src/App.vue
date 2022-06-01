<template>
  <div>
    <XCard slogan="Bye composant" color="red" />
    <XCard :color="theme" />
    <input v-model="theme">
    <div class="card">Test</div>

    <h2>Composant Titre</h2>
    <input v-model="propriete">
    <XTitle :value="propriete" />
  </div>
</template>

<script>
import XCard from './components/XCard.vue';
import XTitle from './components/XTitle.vue';

export default {
  components: {
    XCard,
    XTitle,
  },
  data() {
    return {
      theme: 'lightblue',
      propriete: 'Titre modifiable',
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
