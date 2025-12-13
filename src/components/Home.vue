<script>
export default {
    name: 'App'
}
// Вставляем это для этого: <script setup> — это синтаксический сахар для Composition API в Vue 3.
// Он позволяет писать логику компонента прямо в <script> без необходимости возвращать свойства.
// Для простых статических страниц, как эта, может быть пустым.



// Vue.createApp({
//     data() {
//         return {
//             selectedSection: null
//         }
//     }
// }).mount('#app');


// createApp({
//     data() {
//         return {
//             selectedSection: null
//         }
//     },
//     methods: {
//         selectSection(section) {
//             this.selectedSection = section;
//             // Дополнительная логика при выборе раздела
//             console.log('Выбран раздел:', section);

//             // Можно добавить навигацию или другие действия
//             if (section === 'photo') {
//                 // Переход к разделу фотосъёмки
//                 window.location.href = '#photo-section';
//             } else if (section === 'video') {
//                 // Переход к разделу видеосъёмки
//                 window.location.href = '#video-section';
//             }
//         }
//     },
//     mounted() {
//         // Инициализация при загрузке
//         console.log('Компонент загружен');
//     }
// }).mount('#app');


</script>

<template>
    <div class="home-page">
        <!-- Hero Section с изображением и текстом -->
        <section class="hero-section">
            <img src="../assets/images/girl.png" alt="Девушка" class="hero-image" />
            <div class="hero-logo">
                <h1 class="logo-line-1">CAPTURE</h1>
                <h1 class="logo-line-2">STUDIO</h1>
            </div>
        </section>


        <main class="main">
            <section class="hero">
                <div class="hero-container">
                    <div class="hero-text">
                        <img src="/src/assets/icons/points.svg" alt="Три точки">
                        <p class="hero-text">
                            ФОТОГРАФИЯ – ЭТО ИСКУССТВО ОСТАНАВЛИВАТЬ ВРЕМЯ, ПОЗВОЛЯЮЩЕЕ ВАМ ВНОВЬ И ВНОВЬ ПЕРЕЖИВАТЬ
                            САМЫЕ СЧАСТЛИВЫЕ МОМЕНТЫ ВАШЕЙ ЖИЗНИ. МЫ ВЕРИМ, ЧТО КАЖДЫЙ ЧЕЛОВЕК УНИКАЛЕН,
                            И КАЖДЫЙ МОМЕНТ ОСОБЕНЕН.
                        </p>
                        <p class="hero-text-t">
                            МЫ СТРЕМИМСЯ ЗАПЕЧАТЛЯТЬ ВАШУ ИНДИВИДУАЛЬНОСТЬ И СОХРАНИТЬ ВАШИ САМЫЕ ЦЕННЫЕ
                            ВОСПОМИНАНИЯ В УНИКАЛЬНЫХ И НЕПОВТОРИМЫХ ФОТОГРАФИЯХ. МЫ СОЗДАЕМ НЕ ПРОСТО
                            ИЗОБРАЖЕНИЯ, А НАСТОЯЩИЕ ИСТОРИИ, КОТОРЫЕ БУДУТ РАДОВАТЬ ВАС И ВАШИХ БЛИЗКИХ
                            ДОЛГИЕ ГОДЫ. ПОЗВОЛЬТЕ НАМ СТАТЬ ЧАСТЬЮ ВАШЕЙ ИСТОРИИ!
                        </p>
                        <img src="/src/assets/icons/points.svg" alt="Три точки">
                    </div>
                </div>
            </section>
            <section class="cta">
                <div class="subtitle" id="chapter">
                    <div>Выберите интересующий<br>Вас раздел:</div>
                </div>
                <div class="other-buttons">
                    <router-link to="/photos" class="gradient-btn">
                        ФОТОСЪЁМКА
                    </router-link>
                    <router-link to="/video" class="gradient-btn">
                        ВИДЕОСЪЁМКА
                    </router-link>
                </div>
            </section>


            <section class="specialists-section">
                <!-- Заголовок -->
                <h2 class="section-title" id="specialists">НАШИ СПЕЦИАЛИСТЫ</h2>
                <div class="divider">
                </div>

                <div class="s-cards-container">

                    <!-- Специалист 1: ДЭРРИЛ САЙПС -->
                    <div class="s-card">
                        <div class="s-image-frame">
                            <img src="/assets/images/specialist-1.png" alt="ДЭРРИЛ САЙПС" class="s-image" />
                        </div>
                        <h3 class="s-name">ДЭРРИЛ САЙПС</h3>
                        <p class="s-tagline">ЗАХВАТЫВАЮЩИЕ ФОТОГРАФИИ И ДИНАМИЧНЫЕ ВИДЕО ДЛЯ ВАШИХ САМЫХ ЯРКИХ
                            СОБЫТИЙ</p>
                        <p class="s-description">Дэррил – мастер ловить лучшие моменты! Он создает незабываемые
                            снимки и захватывающие видеоролики для любых мероприятий – от семейных торжеств до
                            крупных корпоративов. Его талант позволяет запечатлеть искренние эмоции, важные детали и
                            волнующие мгновения, чтобы вы могли их снова переживать.</p>
                    </div>

                    <!-- Специалист 2: РУБИ СПАРК -->
                    <div class="s-card">
                        <div class="s-image-frame">
                            <img src="@/assets/images/specialist-2.png" alt="РУБИ СПАРК" class="s-image" />
                        </div>
                        <h3 class="s-name">РУБИ СПАРК</h3>
                        <p class="s-tagline">ПРОФЕССИОНАЛЬНОЕ ФОТО И ВИДЕО ДЛЯ ВАШЕГО БИЗНЕСА И НЕДВИЖИМОСТИ</p>
                        <p class="s-description">Руби – эксперт в создании эффективного визуального контента для
                            привлечения клиентов и увеличения продаж. Она специализируется на бизнес-рекламе и
                            съемке недвижимости, помогая вам выгодно представить свои товары и услуги.</p>
                    </div>

                    <!-- Специалист 3: АЛЕКСАНДРА ВАЛЬТЕР -->
                    <div class="s-card">
                        <div class="s-image-frame">
                            <img src="../assets/images/specialist-3.png" alt="АЛЕКСАНДРА ВАЛЬТЕР" class="s-image" />
                        </div>
                        <h3 class="s-name">АЛЕКСАНДРА ВАЛЬТЕР</h3>
                        <p class="s-tagline">ЧУВСТВУЕТ ВАШИ ЭМОЦИИ, СОЗДАЕТ ФОТО И ВИДЕО ОТРАЖАЮЩИЕ ВАШУ
                            УНИКАЛЬНОСТЬ</p>
                        <p class="s-description">Александра – эксперт в создании элегантных образов и раскрытии
                            индивидуальности в каждом кадре. Она тонко чувствует ваши эмоции и мастерски переносит
                            их на камеру, создавая фото и видео, которые по-настоящему отражают вашу уникальность.
                        </p>
                    </div>
                </div>
            </section>

            <!-- Наши лучшие работы  -->
            <section id="work">
                <div class="portfolio-section">
                    <h2>Наши лучшие работы</h2>

                    <!-- Контейнер для линии -->

                    <div class="gallery-center-line"><img src="../assets/images/line.png" alt="Линия">
                    </div>


                    <div class=" gallery-grid">
                        <div class="grid-item item-1">
                            <img src="../assets/images/best-work-1.jpg" alt="Силуэты девушек на закате">
                        </div>
                        <div class="grid-item item-2">
                            <img src="../assets/images/best-work-2.jpg" alt="Поцелуй молодоженов">
                        </div>
                        <div class="grid-item item-3">
                            <img src="../assets/images/best-work-3.jpg" alt="Мужчина с камерой на фоне взрыва">
                        </div>
                        <div class="grid-item item-4">
                            <img src="../assets/images/best-work-4.jpg" alt="Групповое фото людей">
                        </div>
                        <div class="grid-item item-5">
                            <img src="../assets/images/best-work-5.jpg" alt="День рождениe у девушки">
                        </div>
                        <div class="grid-item item-6">
                            <img src="../assets/images/best-work-6.jpg" alt="Девушка на концерте">
                        </div>
                    </div>
                </div>


                </section>

        </main>
    </div>
</template>


<style scoped>
/* Вставляем это для этого: <style scoped> — это CSS-стили, которые применяются только к этому компоненту.
   Это помогает избежать конфликтов стилей между разными компонентами. */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
}
.hero-section {
    position: relative;
    width: 100%;
    height: 100vh;
    max-height: 900px;
    min-height: 500px;
    overflow: hidden;
}

.hero-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
}

/* Логотип позиционируем относительно изображения */
.hero-section {
    position: relative;
    width: 100%;
    height: 100vh;
    max-height: 900px;
    min-height: 500px;
    overflow: hidden;
}

.hero-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
}

/* Логотип позиционируем выше и слева */
.hero-logo {
    position: absolute;
    top: 35%;
    /* Подняли выше (было 50%) */
    left: 10%;
    z-index: 10;
    width: auto;
    text-align: left;
    max-width: 50%;
}

.logo-line-1,
.logo-line-2 {
    font-family: "ProtestRevolution-Regular", sans-serif;
    color: #ffffff;
    text-transform: uppercase;
    font-weight: normal;
    margin: 0;
    line-height: 0.9;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    text-align: left;
}

/* Первая строка "CAPTURE" */
.logo-line-1 {
    font-size: clamp(3rem, 8vw, 5rem);
    letter-spacing: 1px;
}

/* Вторая строка "STUDIO" - со сдвигом вправо */
.logo-line-2 {
    font-size: clamp(3rem, 8vw, 5rem);
    letter-spacing: 1px;
    margin-left: 15px;
    margin-top: 0.5rem;
}

/* Адаптивность для очень широких экранов */
@media (min-width: 1920px) {
    .hero-logo {
        left: 15%;
    }
}

/* Планшеты и маленькие ноутбуки */
@media (max-width: 1024px) {
    .hero-section {
        height: 80vh;
        max-height: 700px;
    }

    .hero-logo {
        top: 30%;
        /* Выше на планшетах */
        left: 8%;
        max-width: 60%;
    }

    .logo-line-1,
    .logo-line-2 {
        font-size: clamp(2.5rem, 7vw, 4rem);
    }

    .logo-line-2 {
        margin-left: 12px;
        margin-top: 0.4rem;
    }
}

/* Планшеты в портретной ориентации */
@media (max-width: 768px) {
    .hero-section {
        height: 70vh;
        max-height: 600px;
        min-height: 400px;
    }

    .hero-logo {
        top: 25%;
        /* Выше на планшетах */
        left: 7%;
        max-width: 70%;
    }

    .logo-line-1,
    .logo-line-2 {
        font-size: clamp(2rem, 9vw, 3.5rem);
    }

    .logo-line-2 {
        margin-left: 10px;
        margin-top: 0.3rem;
    }
}

/* Мобильные телефоны */
@media (max-width: 480px) {
    .hero-section {
        height: 60vh;
        max-height: 500px;
        min-height: 350px;
    }

    .hero-logo {
        top: 20%;
        /* Выше на телефонах */
        left: 6%;
        max-width: 80%;
    }

    .logo-line-1,
    .logo-line-2 {
        font-size: clamp(1.8rem, 10vw, 3rem);
        text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
    }

    .logo-line-2 {
        margin-left: 8px;
        margin-top: 0.2rem;
    }
}

/* Очень маленькие телефоны */
@media (max-width: 360px) {
    .hero-section {
        height: 55vh;
        max-height: 450px;
        min-height: 300px;
    }

    .hero-logo {
        top: 15%;
        /* Максимально вверх на очень маленьких */
        left: 5%;
        max-width: 85%;
    }

    .logo-line-1,
    .logo-line-2 {
        font-size: clamp(1.5rem, 11vw, 2.5rem);
    }

    .logo-line-2 {
        margin-left: 6px;
    }
}

/* Ландшафтная ориентация на мобильных */
@media (max-height: 500px) and (orientation: landscape) {
    .hero-section {
        height: 100vh;
        min-height: 300px;
    }

    .hero-logo {
        top: 20%;
        left: 5%;
        max-width: 60%;
    }

    .logo-line-1,
    .logo-line-2 {
        font-size: clamp(2rem, 6vw, 3rem);
    }
}

/* Если изображение девушки сильно смещено вправо */
@media (min-width: 1400px) {
    .hero-image {
        object-position: 70% center;
    }
}

/* Для очень маленьких высот экрана */
@media (max-height: 400px) {
    .hero-logo {
        top: 15%;
    }

    .logo-line-1,
    .logo-line-2 {
        font-size: clamp(1.5rem, 5vw, 2.5rem);
    }
}

.page-section {
    max-width: 960px;
    margin: 40px auto;
    padding: 20px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
    text-align: left;
}


.page-section p {
    line-height: 1.8;
    margin-bottom: 1px;
}

.hero {
    color: rgb(0, 0, 0);
    padding: 1rem 0;
}

.hero-text {
    font-size: 1.2rem;
    text-align: center;
    max-width: 650px;
    margin-left: auto;
    margin-right: auto;
}
.hero-text-t{
    padding-top: 20px;
}

.hero-text img {
    padding: 35px 0px;
}

/* Выберите раздел - текст */
.cta {
    text-align: center;
}

.subtitle {
    font-size: 1.7rem;
    color: #000000;
}


.other-buttons {
    margin-top: 6px;
}

.gradient-btn {
    padding: 14px 0;
    font-size: 18px;
    font-weight: 700;
    color: #FFFFFF;
    background: linear-gradient(135deg,
            #FFD8C8 0%,
            #FFB194 25%,
            #FFD0B8 50%,
            #FFB194 75%,
            #FFD8C8 100%);
    border: none;
    border-radius: 20px;
    cursor: pointer;
    text-transform: uppercase;
    transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    font-family: 'Segoe UI', system-ui, sans-serif;
    letter-spacing: 1.2px;
    box-shadow:
        0 6px 20px rgba(255, 177, 148, 0.4),
        0 2px 8px rgba(0, 0, 0, 0.1),
        inset 0 1px 0 rgba(255, 255, 255, 0.3);
    position: relative;
    overflow: hidden;
    margin: 10px;
    min-width: 220px;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
}
.gradient-btn::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.15);
    pointer-events: none;
}
.other-buttons a.gradient-btn {
    text-decoration: none;
    display: inline-block;
    padding: 12px 30px;
    font-size: 18px;
    font-weight: 700;
    color: #000000;
    background: linear-gradient(135deg, #957062, #FFB194, #957062);
    border: none;
    border-radius: 18px;
    cursor: pointer;
    text-transform: uppercase;
    transition: all 0.3s ease;
    font-family: Arial, sans-serif;
    letter-spacing: 1px;
    box-shadow: 0 4px 15px rgba(149, 112, 98, 0.3), 0 1px 3px rgba(0, 0, 0, 0.2);
    position: relative;
    overflow: hidden;
    margin: 10px;
    min-width: 200px;
    text-align: center;
}

.other-buttons a.gradient-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(149, 112, 98, 0.4);
}

/* СПециалисты */


.specialists-section {
    max-width: 1200px;
    margin: 16px auto;
    padding: 20px;
}

.section-title {
    font-size: 2em;
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 10px;
    color: #000;
}

.divider {
    width: 100%;
    height: 2px;
    background-color: #000;
    margin: 0 auto 40px;
}

.specialists-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    position: relative;
}

.portfolio-section {
    border-radius: 20px;
    box-shadow: 0 6px 20px rgba(149, 112, 98, 0.4);
}

.specialists-container::before,
.specialists-container::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    width: 1px;
    background-color: #ddd;
}

.specialists-container::before {
    left: calc(33.333% - 15px);
}

.specialists-container::after {
    right: calc(33.333% - 15px);
}

.specialist-card {
    padding: 0 15px;
    text-align: left;
}

.specialist-name {
    font-size: 18px;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 15px;
    color: #000;
    line-height: 1.3;
}

.specialist-tagline {
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 15px;
    color: #000;
    line-height: 1.4;
    text-transform: uppercase;
}

.specialist-description {
    font-size: 14px;
    line-height: 1.5;
    color: #333;
    margin: 0;
}

/* специалисты */
.s-section-wrapper {
    max-width: 1200px;
    margin: 40px auto;
    padding: 20px;
    box-sizing: border-box;
    color: #333;
    background-color: #fff;
}

.s-cards-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 30px;
}

.s-card {
    flex: 1 1 calc(33.333% - 20px);
    max-width: calc(33.333% - 20px);
    background-color: #ffffff;
    padding: 25px;
    border-radius: 8px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
    box-sizing: border-box;
    text-align: left;
    display: flex;
    flex-direction: column;
}

.s-image-frame {
    width: 100%;
    height: 400px;
    overflow: hidden;
    border: 2px solid #000000;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f0f0f0;
}

.s-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}

.s-name {
    font-size: 1.5em;
    font-weight: bold;
    margin: 0 0 10px 0;
    color: #333;
}

.s-tagline {
    font-size: 0.9em;
    color: #777;
    text-transform: uppercase;
    margin: 0 0 15px 0;
    line-height: 1.4;
}

.s-description {
    font-size: 1em;
    color: #555;
    line-height: 1.6;
    margin: 0;
    flex-grow: 1;
}



.portfolio-section {
    padding: 20px;
    max-width: 900px;
    margin: 0 auto;
    font-family: sans-serif;
    position: relative;
}

h2 {
    font-size: 2.4em;
    color: #333;
    margin-bottom: 25px;
    text-align: left;
}

.gallery-grid {
    display: grid;
    grid-template-areas:
        "item1 item1 item2"
        "item3 item4 item4"
        "item3 item5 item6";
    grid-template-columns: 1.5fr 1.2fr 1fr;
    grid-auto-rows: minmax(180px, auto);
    gap: 15px;
}

.grid-item {
    border-radius: 12px;
    overflow: hidden;
    background-color: #f0f0f0;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
}

.grid-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}

.item-1 {
    grid-area: item1;
}

.item-2 {
    grid-area: item2;
}

.item-3 {
    grid-area: item3;
}

.item-4 {
    grid-area: item4;
}

.item-5 {
    grid-area: item5;
}

.item-6 {
    grid-area: item6;
}

/* --- Стили для одной линии по центру --- */
.gallery-center-line {
    position: absolute;
    left: -300px;
    top: 300px;
    z-index: -1;
    /* Линия будет располагаться под элементами галереи */
}

@media (max-width: 1024px) {
    .s-card {
        flex: 1 1 calc(50% - 20px);
        max-width: calc(50% - 20px);
    }
}

@media (max-width: 768px) {
    .s-section-wrapper {
        padding: 15px;
    }

    .s-card {
        flex: 1 1 100%;
        max-width: 100%;
    }

    .s-section-title {
        font-size: 1.8em;
        margin-bottom: 30px;
    }

    .s-nav-tabs {
        flex-wrap: wrap;
        justify-content: center;
        gap: 8px;
        margin-bottom: 25px;
    }

    .s-nav-button {
        padding: 8px 15px;
        font-size: 13px;
    }
}


@media (max-width: 768px) {
    .header .container {
        flex-direction: column;
        gap: 1rem;
    }

    .nav {
        flex-wrap: wrap;
        justify-content: center;
    }

    .hero-text {
        font-size: 1rem;
    }

    .cta-buttons {
        flex-direction: column;
        align-items: center;
    }

    .cta-button {
        width: 100%;
        max-width: 300px;
    }
}
</style>