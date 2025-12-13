<script>
export default {
    name: 'Footer',
};
</script>

<template>
    <footer class="app-footer">
        <div class="footer-content">
            <!-- Колонка 1: Логотип и ссылки -->
            <div class="footer-section">
                <h2 class="brand-logo-1">CAPTURE</h2>
                <h2 class="brand-logo-2">STUDIO</h2>
                <nav class="footer-nav-links">
                    <ul>
                        <li class="footer-nav-links-p"><router-link to="/agree">Пользовательское
                                соглашение</router-link></li>
                        <li class="footer-nav-links-p"><router-link to="/proc">Соглашение об обработке персональных
                                данных</router-link></li>
                    </ul>
                </nav>
            </div>

            <!-- Колонка 2: Навигация -->
            <div class="footer-section">
                <h3>НАВИГАЦИЯ</h3>
                <nav class="footer-nav-links">
                    <ul>
                        <li><router-link :to="{ path: '/photos', hash: '#ph' }">Фотосъёмка</router-link>
                        </li>
                        <li><router-link :to="{ path: '/video', hash: '#vi' }">Видеосъёмка</router-link>
                        </li>
                        <li><router-link :to="{ path: '/price', hash: '#ta' }">Тарифы</router-link>
                        </li>
                        <li><router-link :to="{ path: '/', hash: '#specialists' }">Специалисты</router-link>
                        </li>
                        <li><router-link :to="{ path: '/', hash: '#work' }">Лучшие работы</router-link>
                        </li>
                    </ul>
                </nav>
            </div>

            <!-- Колонка 3: Контакты -->
            <div class="footer-section contacts-info">
                <h3>КОНТАКТЫ</h3>
                <div class="contact-item">
                    <i class="fa-phone"><img src="../assets/icons/foot/Phone.svg" alt="номер"></i>
                    <a href="tel:+79999999999">+7 (999)
                        999-99-99</a>
                </div>
                <div class="contact-item">
                    <i class="fas fa-envelope"><img src="../assets/icons/foot/Mail.svg" alt="Почта"></i>
                    <a href="mailto:CAPTURESTUDIO@GMAIL.COM">CAPTURESTUDIO@GMAIL.COM</a>
                </div>
                <div class="social-icons">
                    <a href="https://chat.whatsapp.com/Iky5zxzz5Ed8fkih52vX1C?mode=hqrt1" class="social-icon" 
                        aria-label="WhatsApp"><img src="../assets/icons/foot/Whatsapp.svg"
                            alt="ВатСап"></a>
                    <a href="https://t.me/capture_studio_of" class="social-icon" aria-label="Telegram">
                        <img src="../assets/icons/foot/Telegram.svg"
                            alt="Телеграм"></a>
                    <a href="https://vk.ru/club234605221" class="social-icon" aria-label="VKontakte">
                        <img src="../assets/icons/foot/VK.svg"
                            alt="ВК"></a>
                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped>

@font-face {
    font-family: "ProtestRevolution-Regular";
    src: url('/src/assets/fonts/ProtestRevolution-Regular.ttf');
}

.app-footer {
    margin-top: 65px;
    background-color: #1b1b1b;
    color: #cccccc;
    padding-top: 40px;
    padding-bottom: 24px;
    font-family: 'Arial', sans-serif;
    line-height: 1.6;
    /* Межстрочный интервал */
    box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
    /* Небольшая тень сверху, если нужно */
}

.footer-content {
    display: flex;
    justify-content: space-between;
    /* Распределяем колонки по ширине */
    max-width: 1200px;
    /* Максимальная ширина контента */
    margin: 0 auto;
    /* Центрируем футер */
    padding: 10px 90px;
    gap: 60px;
    /* Отступ между колонками */
}
.footer-section {
    /* flex: 1; */
    /* Каждая колонка занимает равное пространство */
    min-width: 20px;
    /* Минимальная ширина для колонок */
}

.brand-logo-1, .brand-logo-2 {
    font-family: "ProtestRevolution-Regular";
    line-height: 16px;
    font-size: 2.3em;
    font-weight: bold;
    color: #ffffff;
    margin-bottom: 20px;
    letter-spacing: 1.1;
    /*  отступ между буквами */
    text-transform: uppercase;
    /* Для более точного совпадения нужен кастомный шрифт */
}

.brand-logo-2 {
    padding-left: 25px;
    padding-bottom: 12px;
    /* Отступ для "STUDIO", чтобы оно выглядело как на фото */
}

h3 {
    font-size: 1.1em;
    font-weight: bold;
    color: #ffffff;
    margin-bottom: 20px;
    text-transform: uppercase;
}

.footer-nav-links ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.footer-nav-links li {
    margin-bottom: 7px;
}

.footer-nav-links a,
.contact-item a {
    color: #cccccc;
    text-decoration: none;
    transition: color 0.3s ease;
    /* Плавное изменение цвета при наведении */
}

.footer-nav-links a:hover,
.contact-item a:hover {
    color: #ffffff;
    /* Белый цвет при наведении */
    text-decoration: underline;
    /* Подчеркивание при наведении */
}

/* Специфичное подчеркивание для номера телефона, как на фото */
.contact-item a[href^="tel"] {
    text-decoration: underline;
}

.contact-item a[href^="tel"]:hover {
    text-decoration: none;
    /* Убираем подчеркивание при наведении на телефон */
}


.contact-item {
    display: flex;
    align-items: center;
    margin-bottom: 12px;
}

.contact-item i {
    margin-right: 4px;
    font-size: 1.1em;
    color: #ffffff;
}


.social-icons {
    display: flex;
    padding-top: 6px;
    gap: 15px;
}

.social-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    /* Делаем иконки круглыми */
    background-color: #444444;
    color: #ffffff;
    font-size: 1.2em;
    transition: background-color 0.3s ease;
}

.social-icon:hover {
    background-color: #555555;
    /* Чуть светлее фон круга при наведении */
}

/* Адаптивность для мобильных устройств */
@media (max-width: 768px) {
    .footer-content {
        flex-direction: column;
        /* Колонки располагаются вертикально */
        align-items: center;
        text-align: center;
        gap: 30px;
    }

    .footer-section {
        min-width: unset;
        /* Сбрасываем минимальную ширину */
        width: 100%;
        /* Занимает всю доступную ширину */
    }

    .brand-logo {
        margin-bottom: 15px;
        /* Уменьшаем отступ под логотипом */
    }

    /* Центрируем списки и иконки */
    .footer-nav-links ul,
    .contact-item,
    .social-icons {
        justify-content: center;
        padding-left: 0;
        /* Сбрасываем отступ, если был */
    }

    .contact-item {
        flex-direction: column;
        /* Иконка над текстом для контактов */
        align-items: center;
    }

    .contact-item i {
        margin-right: 0;
        margin-bottom: 5px;
    }
}
</style>