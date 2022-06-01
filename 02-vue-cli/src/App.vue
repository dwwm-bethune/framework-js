<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>{{ message }}, comment ça va?</h1>
    <ul>
      <li v-for="(feature, index) in features" :key="index">
        {{ feature }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Salut CLI',
      features: ['a', 'b', 'c'],
    }
  }
}
</script>

<!-- <style src="./style.css"> -->
<style>
body {
  background-color: rgba(200, 200, 200, 0.5);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
