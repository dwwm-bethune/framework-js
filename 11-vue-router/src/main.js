import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import HomePage from './components/HomePage.vue'
import AboutPage from './components/AboutPage.vue'
import HelloPage from './components/HelloPage.vue'

const router = createRouter({
    // Le mode web history fonctionne sur les navigateurs récents et évite
    // d'avoir des URLs comme https://monsite.com/#/contact
    history: createWebHistory(),
    routes: [
        { path: '/', component: HomePage },
        { path: '/a-propos', component: AboutPage },
        { path: '/bonjour/:name', component: HelloPage },
    ],
});

createApp(App).use(router).mount('#app')
