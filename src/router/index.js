// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import { nextTick } from 'vue';

// Импорт компонентов
import HomeView from '../components/Home.vue';
import PhotosView from '../components/Photos.vue';
import VideoView from '../components/Video.vue';
import PriceView from '../components/Price.vue';
import EnterView from '../components/Enter.vue';
import RegView from '../components/Registration.vue';
import ProfView from '../components/Profile.vue';
import AgreeView from '../components/Agreements.vue';
import ProcView from '../components/Processing.vue';



const router = createRouter({
  
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/photos', name: 'photos', component: PhotosView },
    { path: '/video', name: 'video', component: VideoView },
    { path: '/price', name: 'price', component: PriceView },
    { path: '/enter', name: 'enter', component: EnterView },
    { path: '/reg', name: 'reg', component: RegView },
    { path: '/prof', name: 'prof', component: ProfView },
    { path: '/agree', name: 'agree', component: AgreeView },
    { path: '/proc', name: 'proc', component: ProcView }

  ],
  scrollBehavior(to, from, savedPosition) {
    // Если мы переходим на тот же маршрут, но с другим хэшем,
    // или если хэш вообще отсутствует, мы хотим прокрутить вверх.
    // Если же мы переходим на тот же маршрут и хэш тот же,
    // Vue Router может не вызвать scrollBehavior.
    // Поэтому мы всегда возвращаем Promise с nextTick, чтобы гарантировать действие.

    return new Promise((resolve) => {


      //  Прокрутка к хэшу.
      if (to.hash) {
        nextTick(() => {
          resolve({
            el: to.hash,
            behavior: 'smooth'
          });
        });
        return;
      }

      // 3. Всегда прокручиваем вверх для новых переходов или повторных переходов без хэша.
      // Использование nextTick гарантирует, что прокрутка произойдет после рендеринга нового контента.
      // Это должно работать даже для повторных нажатий на тот же маршрут.
      nextTick(() => {
        resolve({
          top: 0,
          behavior: 'smooth'
        });
      });
    });
  }
});

export default router;
