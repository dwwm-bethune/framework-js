<template>
  <div>
    <XCard slogan="Bye composant" color="red" />
    <XCard :color="theme" />
    <input v-model="theme">
    <div class="card">Test</div>

    <h2>Composant Titre</h2>
    <input v-model="propriete">
    <XTitle :value="propriete" />

    <h2>Composant Compteur</h2>
    <XCounter />
    <XCounter start="5" max="10" />
  </div>
</template>

<script>
import XCard from './components/XCard.vue';
import XCounter from './components/XCounter.vue';
import XTitle from './components/XTitle.vue';

export default {
  components: {
    XCard,
    XCounter,
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
