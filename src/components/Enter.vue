<template>
    <div class="login-container">
        
        <!-- Форма входа -->
        <div class="login-form">
            <h1 class="login-title">Вход</h1>

            <div class="input-group">
                <label class="input-label">Имя пользователя</label>
                <input type="text" class="login-input" placeholder="Введите имя" />
            </div>

            <div class="input-group">
                <label class="input-label">Пароль</label>
                <input type="password" class="login-input" placeholder="Ваш пароль" />
                <p class="password-hint">*Должно быть не менее 8 символов</p>
            </div>

            <button class="login-button">Войти</button>

            <div class="alternative-login">
                <p class="alternative-text">или войти через другие аккаунты</p>
                <div class="social-buttons">
                    <button class="social-button">
                        <img src="../assets/icons/reg/google.svg" alt="Google" />
                    </button>
                    <button class="social-button">
                        <img src="../assets/icons/reg/apple.svg" alt="Apple" />
                    </button>
                </div>
            </div>

            <div class="register-link">
                У вас ещё нет аккаунта?<router-link to="/reg" class="link"><u>Зарегистрироваться</u></router-link>
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

/* Основной контейнер (фон не меняем) */
.login-container {
    min-height: 100vh;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-image: url('../assets/images/camera.jpg');
    background-size: cover;
    background-position: center;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    color: #fff;
    padding-left: 1vw;
}

/* Форма - делаем адаптивной */
.login-form {
    background: rgba(255, 255, 255, 0.9);
    border-radius: 16px;
    padding: 30px;
    width: 90%;
    max-width: 400px;
    min-width: 280px;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    border: 1px solid rgba(255, 255, 255, 0.3);
    margin-left: 160px;
    margin-top: 20px;
}

/* Заголовок */
.login-title {
    color: #1a1a1a;
    margin-bottom: 25px;
    font-size: 28px;
    font-weight: 700;
    text-align: center;
}

/* Поля ввода */
.input-group {
    margin-bottom: 20px;
}

.input-label {
    display: block;
    color: #333;
    margin-bottom: 6px;
    font-size: 14px;
    font-weight: 500;
}

.login-input {
    width: 100%;
    padding: 12px 14px;
    border: 1px solid #d0d0d0;
    border-radius: 8px;
    font-size: 15px;
    transition: all 0.2s;
    background: #fff;
    color: #333;
}

.login-input:focus {
    outline: none;
    border-color: #555;
    box-shadow: 0 0 6px rgba(85, 85, 85, 0.2);
}

.login-input::placeholder {
    color: #aaa;
}

.password-hint {
    color: #666;
    font-size: 12px;
    margin-top: 4px;
    font-style: italic;
}

/* Кнопка входа */
.login-button {
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
    margin-bottom: 20px;
}

.login-button:hover {
    background: #333;
    transform: translateY(-2px);
}

/* Альтернативный вход */
.alternative-login {
    text-align: center;
    margin-bottom: 20px;
}

.alternative-text {
    color: #666;
    font-size: 14px;
    margin-bottom: 15px;
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
    border: 1px solid #d0d0d0;
    background: white;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s;
}

.social-button img {
    width: 40px;
    height: 40px;
}

.social-button:hover {
    background: #f0f0f0;
    transform: scale(1.1);
    border-color: #999;
}

/* Ссылка на регистрацию */
.register-link {
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

/* Адаптивность формы */
@media (max-width: 1200px) {
    .login-form {
        margin-left: 100px;
        max-width: 380px;
    }
}

@media (max-width: 992px) {
    .login-form {
        margin-left: 60px;
        max-width: 360px;
        padding: 25px;
    }
}

@media (max-width: 768px) {
    .login-container {
        justify-content: center;
        padding: 20px;
        padding-left: 0;
    }

    .login-form {
        margin-left: 0;
        margin-top: 0;
        max-width: 350px;
        width: 100%;
    }

    .login-title {
        font-size: 26px;
    }
}

@media (max-width: 576px) {
    .login-form {
        max-width: 320px;
        padding: 20px;
        border-radius: 14px;
    }

    .login-title {
        font-size: 24px;
        margin-bottom: 20px;
    }

    .input-group {
        margin-bottom: 16px;
    }

    .login-input {
        padding: 10px 12px;
        font-size: 14px;
    }

    .login-button {
        padding: 10px;
        font-size: 14px;
    }

    .social-button {
        width: 38px;
        height: 38px;
    }

    .social-button img {
        width: 38px;
        height: 38px;
    }
}

@media (max-width: 400px) {
    .login-form {
        max-width: 300px;
        padding: 18px;
    }

    .login-title {
        font-size: 22px;
    }

    .alternative-text {
        font-size: 13px;
    }

    .register-link {
        font-size: 12px;
    }
}
</style>