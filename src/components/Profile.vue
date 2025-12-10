
<script>
export default {
    name: 'Profile',
    methods: {
        
    }
}
</script>


<template>
    <div class="favorites-page">
        <div class="favorites-panel">

            <div class="panel-header">
                <h1>Избранное</h1>
                <span class="header-icon">🖤</span>
            </div>

            <div class="item-list">

                <div class="item-card" id="fav-1">
                    <img src="../assets/images/photo-5.png" alt="" class="item-thumbnail">

                    <div class="item-details">
                        <span class="item-main-text">ВЫПУСКНОЙ</span>
                        <span class="item-secondary-text">ФОТОСЪЁМКА</span>
                    </div>

                    <button class="remove-btn" @click="removeItem(1)">×</button>
                </div>

                <div class="item-card" id="fav-2">
                    <img src="../assets/images/price/photo.png" alt="" class="item-thumbnail">

                    <div class="item-details">
                        <span class="item-main-text">Фотограф</span>
                        <span class="item-secondary-text">ОПТИМАЛЬНЫЙ</span>
                    </div>

                    <button class="remove-btn" @click="removeItem(2)">×</button>
                </div>

            </div>

            <div class="total-section">
                <span class="total-label">Итого</span>
                <span class="total-price">50,000 ₽</span>
            </div>

            <button class="order-btn" disabled>Оставить заявку</button>

        </div>
    </div>
</template>

<style>
.favorites-page {
min-height: 100vh;
display: flex;
align-items: center;
padding-left: 8vw;
background-image: url('../assets/images/favourites.png');
background-size: cover;
background-position: center 30%;
font-family: Arial, sans-serif;
}

.favorites-panel {
background: white;
padding: 30px 25px;
border-radius: 12px;
width: 340px;
box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
}

/* Заголовок */
.panel-header {
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 25px;
}

h1 {
font-size: 1.6em;
margin: 0;
}

.header-icon {
font-size: 1.1em;
color: #777;
cursor: pointer;
transition: color 0.2s ease;
}

.header-icon:hover {
color: #d85252;
}

/* Элементы */
.item-list {
margin-bottom: 25px;
}

.item-card {
display: flex;
align-items: center;
margin-bottom: 16px;
gap: 12px;
padding: 10px;
border-radius: 8px;
transition: background-color 0.2s ease;
}

.item-card:hover {
background-color: #f9f9f9;
}

.item-thumbnail {
width: 60px;
height: 60px;
border-radius: 8px;
object-fit: cover;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.item-details {
flex-grow: 1;
display: flex;
flex-direction: column;
}

.item-main-text {
font-weight: bold;
font-size: 1em;
color: #333;
}

.item-secondary-text {
font-size: 0.8em;
color: #666;
margin-top: 1px;
}

/* Кнопка удаления — анимированная */
.remove-btn {
background: transparent;
border: 1px solid #e0e0e0;
border-radius: 50%;
width: 28px;
height: 28px;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
font-size: 16px;
color: #888;
transition: all 0.2s ease;
flex-shrink: 0;
}

/* Hover — мягкая пульсация */
.remove-btn:hover {
background-color: #ff6b6b;
border-color: #ff6b6b;
color: white;
transform: scale(1.15) rotate(8deg);
box-shadow: 0 0 10px rgba(255, 107, 107, 0.6);
}

/* Click — вспышка */
.remove-btn:active {
animation: removeFlash 0.35s ease;
}

@keyframes removeFlash {
0% { transform: scale(1) rotate(0deg); opacity: 1; }
40% { transform: scale(1.3) rotate(-12deg); opacity: 1; }
100% { transform: scale(0) rotate(12deg); opacity: 0; }
}

/* Анимация исчезновения карточки */
.fade-out {
animation: fadeOut 0.35s ease forwards;
}

@keyframes fadeOut {
from { opacity: 1; transform: translateX(0); }
to { opacity: 0; transform: translateX(-20px); }
}

/* Итог */
.total-section {
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 25px;
padding-top: 15px;
border-top: 2px solid #f0f0f0;
}

.total-label {
font-size: 1.3em;
font-weight: bold;
color: #555;
}

.total-price {
font-size: 1.3em;
font-weight: bold;
color: #d85252;
letter-spacing: 0.5px;
}

/* Кнопка оформить */
.order-btn {
    width: 100%;
    padding: 14px;
    background: linear-gradient(135deg, rgba(19, 48, 177, 0.933) 0%, #7f1ae4 100%);
    color: white;
    border: none;
    border-radius: 25px;
    font-size: 0.95em;
    font-weight: bold;
    cursor: pointer;
    opacity: 0.6;
    transition: all 0.3s ease;

    /* уменьшенный фиолетовый туман */
    box-shadow:
        0 0 14px rgba(55, 0, 90, 0.45),
        /* меньше радиус */
        0 3px 8px rgba(102, 126, 234, 0.2);
}

.order-btn:enabled {
    opacity: 1;
}

.order-btn:enabled:hover {
    transform: translateY(-2px);
    box-shadow:
        0 0 18px rgba(55, 0, 90, 0.55),
        /* чуть больше на hover */
        0 5px 12px rgba(102, 126, 234, 0.3);
}

.order-btn:enabled:active {
    transform: translateY(0);
    box-shadow:
        0 0 12px rgba(55, 0, 90, 0.4),
        0 3px 8px rgba(102, 126, 234, 0.25);
}

/* Адаптивность */
@media (max-width: 1200px) {
    .favorites-page {
        padding-left: 6vw;
    }
}

@media (max-width: 992px) {
    .favorites-page {
        padding-left: 4vw;
    }
    
    .favorites-panel {
        width: 320px;
        padding: 25px 20px;
    }
}

@media (max-width: 768px) {
    .favorites-page {
        padding-left: 0;
        padding: 20px;
        justify-content: center;
    }
    
    .favorites-panel {
        width: 100%;
        max-width: 400px;
    }
}

@media (max-width: 480px) {
    .favorites-panel {
        padding: 20px 15px;
        border-radius: 10px;
    }
    
    h1 {
        font-size: 1.4em;
    }
    
    .item-thumbnail {
        width: 50px;
        height: 50px;
    }
    
    .item-main-text {
        font-size: 0.9em;
    }
    
    .item-secondary-text {
        font-size: 0.75em;
    }
    
    .remove-btn {
        width: 26px;
        height: 26px;
        font-size: 14px;
    }
    
    .total-label,
    .total-price {
        font-size: 1.2em;
    }
    
    .order-btn {
        padding: 12px;
        font-size: 0.9em;
    }
}

@media (max-width: 360px) {
    .favorites-panel {
        padding: 18px 12px;
    }
    
    .item-card {
        gap: 10px;
        padding: 8px;
    }
    
    .item-thumbnail {
        width: 45px;
        height: 45px;
    }
}
</style>