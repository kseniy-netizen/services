<template>
    <div class="registration-container">
        <!-- Форма регистрации -->
        <div class="registration-form">
            <h1 class="registration-title">Регистрация</h1>

            <!-- Имя пользователя -->
            <div class="input-group">
                <label class="input-label">Имя пользователя</label>
                <input type="text" class="registration-input" placeholder="Введите имя" />
            </div>

            <!-- Email или телефон -->
            <div class="input-group">
                <label class="input-label">E-mail или номер телефона</label>
                <input type="phone" class="registration-input" placeholder="Ваш e-mail или номер телефона" />
            </div>

            <!-- Пароль -->
            <div class="input-group">
                <label class="input-label">Пароль</label>
                <input type="password" class="registration-input" placeholder="Введите пароль" />
                <p class="password-hint">*Должно быть не менее 8 символов</p>
            </div>

            <!-- Подтверждение пароля -->
            <div class="input-group">
                <label class="input-label">Подтвердите пароль</label>
                <input type="password" class="registration-input" placeholder="Повторите пароль" />
            </div>

            <!-- Чекбокс согласия -->
            <div class="checkbox-group">
                <input type="checkbox" id="agreement" class="checkbox-input" />
                <label for="agreement" class="checkbox-label">
                    Создание учетной записи означает, что вы соглашаетесь с <a href="#" class="link">Правилами и
                        условиями</a>, а также с нашей <a href="#" class="link">Политикой конфиденциальности</a>
                </label>
            </div>

            <!-- Кнопка регистрации -->
            <button class="registration-button">Зарегистрироваться</button>

            <!-- Альтернативная регистрация -->
            <div class="alternative-registration">
                <p class="alternative-text">или сделайте это через другие аккаунты</p>
                <div class="social-buttons">
                    <button class="social-button">
                        <img src="../assets/icons/reg/google.svg" alt="Google" />
                    </button>
                    <button class="social-button">
                        <img src="../assets/icons/reg/apple.svg" alt="Apple" />
                    </button>
                </div>
            </div>

            <!-- Ссылка на вход -->
            <div class="login-link">
                Уже есть аккаунт?
                <router-link to="/enter" class="link"><u>Войти</u></router-link>
            </div>
        </div>
    </div>
</template>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Основной контейнер */
.registration-container {
    display: flex;
    align-items: flex-start;
    min-height: 100vh;
    background-image: url('../assets/images/camera.jpg');
    background-size: cover;
    background-position: center;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    color: #fff;
    padding-top: 60px;
    padding-left: 100px;
}

/* Форма - всегда слева */
.registration-form {
    background: rgba(255, 255, 255, 0.603);
    border-radius: 16px;
    padding: 25px;
    width: 500px;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    border: 1px solid rgba(255, 255, 255, 0.582);
}

/* Заголовок */
.registration-title {
    color: #1a1a1a;
    margin-bottom: 16px;
    font-size: 28px;
    font-weight: 700;
    text-align: center;
}

/* Поля ввода */
.input-group {
    margin-bottom: 10px;
}

.input-label {
    display: block;
    color: #333;
    margin-bottom: 6px;
    font-size: 14px;
    font-weight: 500;
}

.registration-input {
    width: 100%;
    padding: 12px 14px;
    border: 1px solid #d0d0d0;
    border-radius: 8px;
    font-size: 15px;
    transition: all 0.2s;
    background: #fff;
    color: #333;
}

.registration-input:focus {
    outline: none;
    border-color: #555;
    box-shadow: 0 0 6px rgba(85, 85, 85, 0.2);
}

.registration-input::placeholder {
    color: #aaa;
}

.password-hint {
    color: #666;
    font-size: 12px;
    margin-top: 4px;
    font-style: italic;
}

/* Чекбокс */
.checkbox-group {
    display: flex;
    align-items: flex-start;
    margin-bottom: 14px;
    gap: 10px;
}

.checkbox-input {
    margin-top: 6px;
    min-width: 16px;
    height: 16px;
    cursor: pointer;
}

.checkbox-label {
    color: #666;
    font-size: 13px;
    line-height: 1.4;
    cursor: pointer;
}

.checkbox-label a {
    color: #1a1a1a;
    text-decoration: none;
    font-weight: 500;
}

.checkbox-label a:hover {
    text-decoration: underline;
}

/* Кнопка регистрации */
.registration-button {
    width: 100%;
    background: #1a1a1a;
    color: white;
    border: none;
    padding: 12px;
    border-radius: 8px;
    font-size: 15px;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.2s;
    margin-bottom: 10px;
}

.registration-button:hover {
    background: #333;
    transform: translateY(-2px);
}

/* Альтернативная регистрация */
.alternative-registration {
    text-align: center;
    margin-bottom: 8px;
}

.alternative-text {
    color: #666;
    font-size: 14px;
    margin-bottom: 6px;
    font-style: italic;
}

.social-buttons {
    display: flex;
    justify-content: center;
    gap: 15px;
}

.social-button {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid #ffffff3a;
    background: white;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s;
}

.social-button img {
    width: 50px;
    height: 50px;
}

.social-button:hover {
    background: #f0f0f0;
    transform: scale(1.1);
    border-color: #999;
}

/* Ссылка на вход */
.login-link {
    text-align: center;
    color: #666;
    font-size: 13px;
}

.link {
    color: #1a1a1a;
    text-decoration: none;
    font-weight: 500;
}

.link:hover {
    text-decoration: underline;
}

/* Адаптивность - только меняем положение и размер формы */
@media (max-width: 1200px) {
    .registration-container {
        padding-left: 80px;
    }
}

@media (max-width: 992px) {
    .registration-container {
        padding-left: 60px;
    }

    .registration-form {
        width: 480px;
    }
}

@media (max-width: 768px) {
    .registration-container {
        padding-left: 40px;
        padding-right: 40px;
        padding-top: 40px;
    }

    .registration-form {
        width: 100%;
        max-width: 500px;
    }
}

@media (max-width: 576px) {
    .registration-container {
        padding-left: 20px;
        padding-right: 20px;
        padding-top: 30px;
    }

    .registration-form {
        padding: 20px;
    }

    .registration-title {
        font-size: 24px;
    }
}
</style>