<script>
export default {
    name: 'Header',
    data() {
        return {
            showMobileMenu: false
        }
    },
    methods: {
        toggleMobileMenu() {
            this.showMobileMenu = !this.showMobileMenu;
        },
        closeMobileMenu() {
            this.showMobileMenu = false;
        }
    },
    watch: {
        $route() {
            this.closeMobileMenu();
        }
    }
}
</script>

<template>
    <header class="header">
        <div class="header-container">
            <!-- Бренд -->
            <router-link to="/" class="brand">
                Capture Studio
            </router-link>

            <!-- Навигация (десктоп) -->
            <nav class="nav">
                <router-link :to="{ path: '/', hash: '#chapter' }" class="nav-link">
                    Разделы
                </router-link>
                <router-link :to="{ path: '/', hash: '#specialists' }" class="nav-link">
                    Специалисты
                </router-link>
                <router-link :to="{ path: '/', hash: '#work' }" class="nav-link nowrap">
                    Лучшие работы
                </router-link>
                <router-link to="/price" class="nav-link">
                    Тарифы
                </router-link>
            </nav>

            <!-- Действия (десктоп) -->
            <div class="actions">
                <router-link to="/prof" class="fav">🤍</router-link>
                <router-link to="/enter" class="btn">ВОЙТИ</router-link>
            </div>

            <!-- Кнопка мобильного меню -->
            <button class="mobile-menu-btn" @click="toggleMobileMenu" :class="{ 'active': showMobileMenu }">
                <span class="menu-icon">☰</span>
                <span class="close-icon">✕</span>
            </button>
        </div>

        <!-- Мобильное меню -->
        <div class="mobile-menu" :class="{ 'active': showMobileMenu }">
            <router-link :to="{ path: '/', hash: '#chapter' }" class="mobile-nav-link" @click="closeMobileMenu">
                Разделы
            </router-link>
            <router-link :to="{ path: '/', hash: '#specialists' }" class="mobile-nav-link" @click="closeMobileMenu">
                Специалисты
            </router-link>
            <router-link :to="{ path: '/', hash: '#work' }" class="mobile-nav-link" @click="closeMobileMenu">
                Лучшие работы
            </router-link>
            <router-link to="/price" class="mobile-nav-link" @click="closeMobileMenu">
                Тарифы
            </router-link>
            <div class="mobile-actions">
                <router-link to="/prof" class="mobile-fav" @click="closeMobileMenu">
                    🤍 Избранное
                </router-link>
                <router-link to="/enter" class="mobile-btn" @click="closeMobileMenu">
                    ВОЙТИ
                </router-link>
            </div>
        </div>
    </header>
</template>

<style scoped>
.header {
    background: #252525;
    color: white;
    padding: 15px 0;
    width: 100%;
    box-sizing: border-box;
}

.header-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
}


.brand {
    font-size: 1.4rem;
    font-family: "ProtestRevolution-Regular", sans-serif;
    color: white;
    text-decoration: none;
    white-space: nowrap;
    z-index: 2;
}


.nav {
    display: flex;
    gap: 30px;
    align-items: center;
}

.nav-link {
    color: white;
    text-decoration: none;
    font-size: 16px;
    transition: opacity 0.3s;
    white-space: nowrap;
}

.nav-link:hover {
    opacity: 0.8;
}

.nowrap {
    white-space: nowrap;
}

/* Действия (десктоп) */
.actions {
    display: flex;
    align-items: center;
    gap: 20px;

}

.fav {
    font-size: 28px;
    color: white;
    text-decoration: none;
    line-height: 1;
    display: flex;
    align-items: center;
}

.btn {
    color: white;
    text-decoration: none;
    border: 1px solid white;
    border-radius: 20px;
    padding: 8px 20px;
    font-size: 14px;
    transition: all 0.3s;
    white-space: nowrap;
}

.btn:hover {
    background: rgba(255, 255, 255, 0.1);
}

/* Кнопка мобильного меню */
.mobile-menu-btn {
    display: none;
    background: none;
    border: none;
    color: white;
    font-size: 24px;
    cursor: pointer;
    padding: 5px 10px;
    z-index: 2;
    width: 40px;
    height: 40px;
    position: relative;
}

.menu-icon,
.close-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: opacity 0.3s;
}

.close-icon {
    opacity: 0;
}

.mobile-menu-btn.active .menu-icon {
    opacity: 0;
}

.mobile-menu-btn.active .close-icon {
    opacity: 1;
}

/* Мобильное меню */
.mobile-menu {
    display: none;
    background: #252525;
    padding: 20px;
    flex-direction: column;
    gap: 0;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    z-index: 1;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.mobile-nav-link {
    color: white;
    text-decoration: none;
    padding: 15px 20px;
    font-size: 16px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    display: block;
    transition: background 0.3s;
}

.mobile-nav-link:hover {
    background: rgba(255, 255, 255, 0.05);
}

.mobile-nav-link:last-child {
    border-bottom: none;
}

.mobile-actions {
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 20px;
    margin-top: 10px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.mobile-fav {
    color: white;
    text-decoration: none;
    font-size: 16px;
    display: flex;
    align-items: center;
    gap: 10px;
}

.mobile-btn {
    color: white;
    text-decoration: none;
    border: 1px solid white;
    border-radius: 20px;
    padding: 12px;
    font-size: 14px;
    text-align: center;
    transition: all 0.3s;
}

.mobile-btn:hover {
    background: rgba(255, 255, 255, 0.1);
}

@font-face {
    font-family: "ProtestRevolution-Regular";
    src: url('/src/assets/fonts/ProtestRevolution-Regular.ttf');
}

/* Адаптивность */
@media (max-width: 768px) {
    .header-container {
        padding: 0 15px;
    }

    /* Скрываем десктопную навигацию и действия */
    .nav,
    .actions {
        display: none;
    }

    /* Показываем кнопку мобильного меню */
    .mobile-menu-btn {
        display: block;
    }

    /* Показываем мобильное меню когда открыто */
    .mobile-menu.active {
        display: flex;
    }
}

@media (min-width: 769px) {

    /* На десктопе скрываем мобильное меню */
    .mobile-menu {
        display: none !important;
    }
}

@media (max-width: 480px) {
    .brand {
        font-size: 1.2rem;
    }

    .header-container {
        padding: 0 10px;
    }

    .mobile-nav-link {
        padding: 12px 15px;
        font-size: 15px;
    }
}

@media (max-width: 360px) {
    .brand {
        font-size: 1.1rem;
    }

    .header-container {
        padding: 0 8px;
    }
}
</style>