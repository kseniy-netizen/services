<script setup>
// Вставляем это для этого: Импортируем наш компонент навигации, чтобы использовать его здесь.
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

</script>

<template>
    <div id="app">
        <!-- Вставляем это для этого: <Header /> - это наш компонент навигации.
         Он будет отображаться на всех страницах, так как находится в корневом App.vue. -->
        <Header />

        <main>
            <!-- Вставляем это для этого: <router-view /> - это специальный компонент Vue Router.
           Он действует как "заполнитель". Vue Router будет автоматически вставлять
           компонент, соответствующий текущему URL-маршруту, именно сюда.
           Например, при переходе на /photos здесь будет отображаться Photos.vue. -->
            <router-view />
        </main>


        <footer>

        <Footer />
    
        </footer>
        <!-- Вставляем это для этого: Футер, который также будет виден на всех страницах -->
        <!-- <footer class="app-footer">
            <p>&copy; {{ new Date().getFullYear() }} Capture Studio. Все права защищены.</p>
            <div class="footer-links">
                <router-link to="/privacy">Политика конфиденциальности</router-link>
                <router-link to="/terms">Условия использования</router-link>
            </div>
        </footer> -->
    </div>
</template>

<style>
/* Вставляем это для этого: Эти стили применяются глобально ко всему приложению.
   Сброс стилей, базовые шрифты и цвета. */
body {
    margin: 0;
    font-family: 'Open Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #f8f8f8;
    color: #333;
}

#app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 100%;
}

main {
    flex-grow: 1;
    padding-top: 0;
    padding: 0;
    width: 100%;
}

</style>  







