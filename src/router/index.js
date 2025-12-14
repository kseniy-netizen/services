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

// Функция для создания метатегов (простой вариант)
const createMeta = (pageTitle, pageDescription) => ({
  title: pageTitle,
  description: pageDescription
});

// Определение маршрутов с метатегами
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: createMeta('Capture Studio', 'Профессиональный продакшн студио Capture Studio. Фотосъёмка, видеопродакшн, постобработка для вашего бизнеса.')
  },
  {
    path: '/photos',
    name: 'photos',
    component: PhotosView,
    meta: createMeta('Специалисты', 'Наши специалисты: Руби Спарк - профессиональное фото и видео для бизнеса и недвижимости. Александра Вальтер - эмоциональная фотосъёмка.')
  },
  {
    path: '/video',
    name: 'video',
    component: VideoView,
    meta: createMeta('Лучшие работы', 'Портфолио наших проектов. Примеры фото и видео работ для бизнеса, рекламные ролики, видеомонтаж высокого качества.')
  },
  {
    path: '/price',
    name: 'price',
    component: PriceView,
    meta: createMeta('Тарифы', 'Тарифные планы Capture Studio: Фотограф - экономный 30 000₽ (4 часа), оптимальный 40 000₽ (6 часов), премиум 50 000₽ (9 часов).')
  },
  {
    path: '/enter',
    name: 'enter',
    component: EnterView,
    meta: createMeta('Вход', 'Вход в личный кабинет Capture Studio. Управление заказами, доступ к материалам, история сотрудничества.')
  },
  {
    path: '/reg',
    name: 'reg',
    component: RegView,
    meta: createMeta('Регистрация', 'Регистрация в Capture Studio. Создайте аккаунт для заказа фото и видео услуг, получения персональных предложений.')
  },
  {
    path: '/prof',
    name: 'prof',
    component: ProfView,
    meta: createMeta('Профиль', 'Личный профиль в Capture Studio. Управление вашими данными, история заказов, настройки уведомлений.')
  },
  {
    path: '/agree',
    name: 'agree',
    component: AgreeView,
    meta: createMeta('Соглашение', 'Пользовательское соглашение Capture Studio. Правила использования услуг, политика обработки персональных данных.')
  },
  {
    path: '/proc',
    name: 'proc',
    component: ProcView,
    meta: createMeta('Обработка данных', 'Статус обработки вашего заказа в Capture Studio. Отслеживание выполнения фото или видео услуги, сроки готовности.')
  }
];

// Создание и настройка роутера
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve) => {
      // Прокрутка к якорю (хешу) если он есть в URL
      if (to.hash) {
        nextTick(() => {
          resolve({
            el: to.hash,
            behavior: 'smooth'
          });
        });
        return;
      }

      // Для обычных переходов прокручиваем страницу вверх
      nextTick(() => {
        resolve({
          top: 0,
          behavior: 'smooth'
        });
      });
    });
  }
});

// Глобальный обработчик для обновления title и meta description при смене страниц
router.beforeEach((to) => {
  // Обновляем заголовок страницы (видно во вкладке браузера)
  document.title = to.meta.title || 'Capture Studio';
  
  // Динамически обновляем meta description для SEO
  let metaDescription = document.querySelector('meta[name="description"]');
  if (!metaDescription) {
    metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    document.head.appendChild(metaDescription);
  }
  metaDescription.content = to.meta.description || '';
});

export default router;
