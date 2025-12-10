<script>
export default {
    name: 'Photos',
    data() {
        return {
            categories: [
                { title: 'СЕМЕЙНАЯ', img: 'src/assets/images/photo-1.png', liked: false },
                { title: 'ИНДИВИДУАЛЬНЫЕ', img: 'src/assets/images/photo-2.png', liked: false },
                { title: 'КОРЦЕРТНАЯ', img: 'src/assets/images/photo-3.png', liked: false },
                { title: 'КОРПОРАТИВНАЯ', img: 'src/assets/images/photo-4.png', liked: false },
                { title: 'ВЫПУСКНОЙ', img: 'src/assets/images/photo-5.png', liked: false },
                { title: 'СВАДЕБНАЯ', img: 'src/assets/images/photo-6.png', liked: false },
                { title: 'РЕКЛАМНАЯ', img: 'src/assets/images/photo-7.png', liked: false },
                { title: 'МЕРОПРИЯТИЯ', img: 'src/assets/images/photo-8.png', liked: false },
                { title: 'НЕДВИЖИМОСТИ', img: 'src/assets/images/photo-9.png', liked: false },
            ]
        };
    },
    methods: {
        toggleLike(item) {
            item.liked = !item.liked;
        }
    }
};
</script>



<template>
    <div class="photos-page">

        <section class="cta">
            <div class="content">
                <div class="subtitle">Выберите интересующий<br>Вас раздел:</div>
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


        <section class="specialists-section" id="ph">
            <div class="divider"></div>
            <h2 class="section-title">ФОТОСЪЁМКА</h2>
            <div class="divider"></div>
        </section>

        <div class="grid">
            <div class="card" v-for="(c, i) in categories" :key="i">
                <div class="image-block">
                    <img :src="c.img" :alt="c.title">

                    <button class="heart" :class="{ liked: c.liked }" @click="c.liked = !c.liked">❤️</button>

                    <!-- Верхний маленький лейбл -->
                    <div class="label-top">{{ c.title }}</div>

                    <!-- Нижняя широкая черная надпись -->
                    <div class="bottom-label">{{ c.title }}</div>
                </div>
            </div>
        </div>

    </div>
</template>


<style scoped>
.photos-page {
    max-width: 1300px;
    margin: 0 auto;
    padding: 20px;
}

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
      padding: 12px 0;
      font-size: 18px;
      font-weight: 700;
      color: #000000;
      background: linear-gradient(135deg,
              #957062,
              #FFB194,
              #957062);
      border: none;
      border-radius: 18px;
      cursor: pointer;
      text-transform: uppercase;
      transition: all 0.3s ease;
      font-family: Arial, sans-serif;
      letter-spacing: 1px;
      box-shadow:
          0 4px 15px #957062,
          0 1px 3px rgba(0, 0, 0, 0.2);
      position: relative;
      overflow: hidden;
      margin: 10px;
      min-width: 200px;
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
   
  .section-title {
      font-size: 2em;
      font-weight: 700;
      text-align: center;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: #000;
  }

  .divider {
      width: 100%;
      height: 2px;
      background-color: #000;
      margin: 12px auto ;
  }

/* ------ ГРИД ------- */
/* Сетка: 3 карточки в ряд */
.grid {
    display: grid;
    grid-template-columns: repeat(3, 380px);
    gap: 30px;
    justify-content: center;
    margin-top: 40px;
}

/* Карточка — растягивается под содержимое */
.card {
    width: 100%;
    background: #fff;
    border-radius: 16px;
    overflow: hidden;
    /* САМОЕ ГЛАВНОЕ — предотвращает выход плашки */
    position: relative;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
    display: flex;
    flex-direction: column;
}

/* Блок картинки — делаем адаптивным */
.image-block {
    width: 100%;
    position: relative;
    aspect-ratio: 4 / 5;
    /* Можно менять: 1/1, 3/4, 4/5 */
    overflow: hidden;
    /* На всякий */
}

.image-block img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

/* Нижняя плашка */
.bottom-label {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background: rgba(0, 0, 0, 0.75);
    color: #fff;
    font-size: 20px;
    font-weight: 700;
    padding: 14px 0;
    text-align: center;
    z-index: 2;
    box-sizing: border-box;
}
/* Сердце */
.heart {
    position: absolute;
    top: 12px;
    right: 12px;
    width: 38px;
    height: 38px;
    border-radius: 50%;
    background: white;
    border: none;
    cursor: pointer;
    font-size: 18px;
    line-height: 38px;
    text-align: center;
    padding: 0;
    transition: 0.2s;
}

.heart.liked {
    background: #ff5e5e;
    color: white;
}

/* Лейбл на картинке */
.bottom-label {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background: rgba(0, 0, 0, 0.75);
    color: #fff;
    font-size: 22px;
    font-weight: 700;
    padding: 18px 0;
    text-align: center;
    z-index: 2;
}
/* Средний вариант — 3 карточки в ряд */
.grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    width: 100%;
    margin-top: 40px;
}

/* На планшетах — 2 */
@media (max-width: 1024px) {
    .grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

/* На телефонах — 1 */
@media (max-width: 600px) {
    .grid {
        grid-template-columns: repeat(1, 1fr);
    }
}

</style>