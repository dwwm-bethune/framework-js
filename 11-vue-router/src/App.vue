<template>
    <div>
      <ul>
        <li><router-link to="/">Accueil</router-link></li>
        <li><router-link to="/a-propos">A propos</router-link></li>
        <li><router-link to="/bonjour/toto">Toto</router-link></li>
        <li><router-link to="/bonjour/titi">Titi</router-link></li>
      </ul>

      <router-view></router-view>
    </div>
</template>

<script>
export default {
}
</script>
