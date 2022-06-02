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

    <h2>Composant affichage</h2>
    <button @click="displayTerm = true">Nouveau terme</button>
    <div v-if="displayTerm">
      <label for="term">Terme:</label>
      <input type="text" id="term" v-model="term.term"> <br>

      <label for="definition">Définition:</label>
      <input type="text" id="definition" v-model="term.definition">
      <button @click="addTerm">OK</button>
    </div>

    <XTerm v-for="(term, index) in terms" :key="index" :term="term" />

    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
  </div>
</template>

<script>
import XCard from './components/XCard.vue';
import XCounter from './components/XCounter.vue';
import XTerm from './components/XTerm.vue';
import XTitle from './components/XTitle.vue';

export default {
  components: {
    XCard,
    XCounter,
    XTerm,
    XTitle,
  },
  data() {
    return {
      theme: 'lightblue',
      propriete: 'Titre modifiable',
      displayTerm: false,
      // term: '',
      // definition: '',
      term: { term: '', definition: '' },
      terms: [],
    }
  },
  methods: {
    addTerm() {
      // On clone l'objet term pour éviter les problèmes de référence
      this.terms.push({ ...this.term });
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
