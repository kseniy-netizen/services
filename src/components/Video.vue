<script>
import weddingVideo from '@/assets/video/wedding.mp4'
import reportVideo from '@/assets/video/report.mp4'
import companyVideo from '@/assets/video/company-party.mp4'
import balletVideo from '@/assets/video/real-estate.mp4'

import weddingPoster from '@/assets/images/posters/wedding.png'
import reportPoster from '@/assets/images/posters/report.png'
import companyPoster from '@/assets/images/posters/company-party.png'
import balletPoster from '@/assets/images/posters/real-estate.png'

export default {
    name: 'VideoGallery',
    data() {
        return {
            videoRefs: [],
            categories: [
                { title: 'СВАДЬБА', video: weddingVideo, poster: weddingPoster, playing: false, liked: false },
                { title: 'РЕПОРТАЖ', video: reportVideo, poster: reportPoster, playing: false, liked: false },
                { title: 'КОРПОРАТИВНАЯ', video: companyVideo, poster: companyPoster, playing: false, liked: false },
                { title: 'НЕДВИЖИМОСТЬ', video: balletVideo, poster: balletPoster, playing: false, liked: false }
            ]
        }
    },
    mounted() {
        // Сразу собираем refs после монтирования
        this.updateVideoRefs()
    },
    methods: {
        updateVideoRefs() {
            const list = this.$refs.videoRefs
            if (!list) return
            if (Array.isArray(list)) {
                list.forEach(el => {
                    if (!el) return
                    const index = Number(el.dataset.index)
                    this.videoRefs[index] = el
                })
            } else {
                // если один элемент
                const index = Number(list.dataset.index)
                this.videoRefs[index] = list
            }
        },

        async playVideo(item, index) {
            item.playing = true
            await this.$nextTick()

            const videoEl = this.videoRefs[index]
            if (!videoEl) return

            // Скрываем видео до загрузки
            videoEl.style.opacity = '0'

            videoEl.addEventListener('loadeddata', () => {
                videoEl.style.opacity = '1'
                videoEl.muted = false
            }, { once: true })

            try {
                await videoEl.play()
            } catch (e) {
                console.warn("Ошибка воспроизведения", e)
                videoEl.controls = true
            }
        },

        toggleLike(item) {
            item.liked = !item.liked
        }
    }
}
</script>

<template>
    <div class="video-page">
        <section class="cta">
            <div class="content">
                <div class="subtitle">Выберите интересующий<br />Вас раздел:</div>
            </div>
            <div class="other-buttons">
                <router-link to="/photos" class="gradient-btn">ФОТОСЪЁМКА</router-link>
                <router-link to="/video" class="gradient-btn">ВИДЕОСЪЁМКА</router-link>
            </div>
        </section>

        <section class="specialists-section" id="#vi">
            <div class="divider"></div>
            <h2 class="section-title">ВИДЕОСЪЁМКА</h2>
            <div class="divider"></div>
        </section>

        <div class="grid">
            <div class="card" v-for="(c, i) in categories" :key="i">
                <div class="video-block">

                    <!-- Постер -->
                    <div class="poster" v-if="!c.playing" :style="{ backgroundImage: 'url(' + c.poster + ')' }">
                        <div class="play-btn" @click="playVideo(c, i)">▶</div>
                    </div>

                    <!-- Видео -->
                    <video v-if="c.playing" playsinline autoplay controls preload="auto" ref="videoRefs" :data-index="i"
                        class="video-el">
                        <source :src="c.video" type="video/mp4" />
                    </video>

                    <!-- Лайк -->
                    <button class="heart" :class="{ liked: c.liked }" @click="toggleLike(c)">❤️</button>
                </div>

                <div class="title-block">{{ c.title }}</div>
            </div>
        </div>
    </div>
</template>


<style scoped>
.video-page {
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
    color: #000;
}

.divider {
    width: 100%;
    height: 2px;
    background: #000;
    margin: 12px auto;
}

.grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
    justify-content: center;
    margin-top: 40px;
}

.card {
    width: 100%;
    display: flex;
    flex-direction: column;
}

.video-block {
    position: relative;
    width: 100%;
    height: 380px;
    overflow: hidden;
    background: #000;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
}

.video-block video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: opacity .25s ease;
}

.poster {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    position: relative;
    cursor: pointer;
}

.play-btn {
    width: 80px;
    height: 80px;
    background: rgba(0, 0, 0, 0.6);
    border-radius: 50%;
    color: #fff;
    font-size: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
    transition: 0.2s;
}

.play-btn:hover {
    transform: translate(-50%, -50%) scale(1.05);
}

.title-block {
    width: 100%;
    padding: 18px 0;
    background: #000;
    color: #fff;
    font-size: 22px;
    font-weight: 700;
    text-align: center;
}

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
    z-index: 3;
}

.heart.liked {
    background: #ff5e5e;
    color: white;
}
</style>