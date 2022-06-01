<template>
  <div>
    <!-- Les images (dans des variables)
         dans le HTML doivent être dans le dossier public -->
    <img class="logo" alt="Vue logo" :src="logo">
    <div class="flex">
      <img class="image" :alt="brand + ' ' + name" :src="variants[selectedVariant].image">
      <div>
        <h1>{{ brand }} {{ name }}</h1>
        <p class="price">{{ variants[selectedVariant].price * quantity }},00 €</p>
        <input type="number" v-model="quantity" min="1" max="100">
        <p class="in-stock" v-if="stock > 0 && quantity <= stock">En stock</p>
        <p class="not-in-stock" v-else>Pas disponible</p>
        <ul>
          <li v-for="(feature, index) in features" :key="index">
            {{ feature }}
          </li>
        </ul>
        <div class="flex">
          <div
            class="square"
            v-for="(variant, index) in variants"
            :key="index"
            :style="{ backgroundColor: variant.color }"
            @click="selectedVariant = index"
          ></div>
          {{ selectedVariant }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logo: 'img/logo.png',
      name: 'Ocarina of Time',
      brand: 'Zelda',
      // image: 'img/ocarina-of-time.jpeg',
      // price: 10,
      quantity: 1,
      stock: 10,
      features: ['RPG', 'Jeu', 'Hyrule'],
      variants: [
       { color: 'lightseagreen', price: 10, image: 'img/ocarina-of-time.jpeg' },
       { color: 'lightcoral', price: 12, image: 'img/wind-waker.jpeg' },
      ],
      selectedVariant: 0,
    }
  }
}
</script>

<!-- <style src="./style.css"> -->
<style>
body {
  background-color: rgba(200, 200, 200, 0.5);
  /* Pour les images en background, l'image doit être dans src/assets */
  background-image: url(./assets/logo.png);
  margin: 0;
}

.flex {
  display: flex;
}

.logo {
  display: block;
  width: 80px;
  margin: auto;
  padding: 25px 0;
}

.image {
  width: 250px;
  height: 250px;
  object-fit: cover;
  margin-right: 100px;
}

.price {
  font-size: 24px;
}

h1 {
  margin-top: 0;
}

input {
  padding: 5px;
  font-size: 20px;
  width: 200px;
}

.square {
  width: 50px;
  height: 50px;
  margin-right: 20px;
}

.in-stock {
  color: lightseagreen;
}

.not-in-stock {
  color: lightcoral;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  border: 5px solid #2c3e50;
  margin-top: 60px;
  width: 1000px;
  margin: auto;
  background-color: #d3d3d3ee;
  padding: 20px;
  border-radius: 20px;
}
</style>
