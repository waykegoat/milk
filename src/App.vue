<template>
  <div id="app">
    <!-- Шапка сайта -->
    <header class="header">
      <div class="container">
        <div class="header-content">
          <div class="logo">
            <img src="https://sun9-15.userapi.com/s/v1/ig2/hitnOpWUtCoBURUrz4sQZOoRnwZJMkwq3ENl95maYcol-3RZIfaWA20CDotBLVzSM0bl_Ekgi6a61-PM0W7PJMv_.jpg?quality=95&as=32x28,48x42,72x63,108x95,160x141,240x211,326x287&from=bu&cs=326x0" 
                 alt="Milky Co Логотип" class="logo-img">
            <div class="logo-text">
              <h1>Milky Co</h1>
              <p>Молочное совершенство с 2025 года</p>
            </div>
          </div>
          
          <nav class="nav">
            <a href="#" class="nav-link active">Главная</a>
            <a href="#" class="nav-link">О компании</a>
            <a href="#" class="nav-link">Продукция</a>
            <a href="#" class="nav-link">Контакты</a>
          </nav>
        </div>
      </div>
    </header>

    <!-- Герой-секция -->
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <div class="hero-text">
            <h2 class="hero-title">Молочная свежесть<br>в каждой капле</h2>
            <p class="hero-subtitle">Современные технологии и традиционные рецепты<br>для идеального вкуса с 2025 года</p>
            <button class="hero-button" @click="scrollToProducts">Исследовать продукты</button>
          </div>
          <div class="hero-image">
            <div class="mascot-container">
              <img src="https://sun9-46.userapi.com/s/v1/ig2/Ab3GtzvlKHXgM8IJ-9Bk7QcIXKluWHMp5P7OcY4hruxW0aZORQfeQ6DLtkV_7QZEnz3tYFqHdscRMTqpFsxvznjX.jpg?quality=95&as=32x32,48x48,72x72,108x107,160x159,240x239,356x354&from=bu&cs=356x0" 
                   alt="Маскот Milky Co" 
                   class="mascot">
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- О компании -->
    <section class="about">
      <div class="container">
        <h2 class="section-title">Почему Milky Co?</h2>
        <div class="about-content">
          <div class="about-card">
            <div class="about-icon">🌱</div>
            <h3>Инновации в молочном деле</h3>
            <p>Используем новейшие технологии для сохранения свежести и питательных свойств молочных продуктов.</p>
          </div>
          <div class="about-card">
            <div class="about-icon">🏆</div>
            <h3>Премиальное качество</h3>
            <p>Каждый продукт проходит 5 ступеней контроля качества для гарантии безупречного вкуса.</p>
          </div>
          <div class="about-card">
            <div class="about-icon">🚚</div>
            <h3>Мгновенная доставка</h3>
            <p>Доставляем свежайшую продукцию в термоконтейнерах в течение 12 часов после производства.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Каталог товаров с горизонтальным скроллом -->
    <section class="products" id="products">
      <div class="container">
        <h2 class="section-title">Наша молочная коллекция</h2>
        <p class="section-subtitle">Проведите пальцем или используйте колесико мыши для просмотра</p>
        
        <div class="products-scroll-container" ref="scrollContainer">
          <div class="products-track" ref="productsTrack">
            <!-- Карточки товаров будут здесь -->
            <ProductCard 
              v-for="product in products" 
              :key="product.id"
              :product="product"
            />
          </div>
        </div>
        
        <div class="scroll-controls">
          <button class="scroll-btn prev-btn" @click="scrollProducts(-1)">←</button>
          <div class="scroll-indicator">
            <span class="scroll-arrow">←</span>
            <span>Листайте в стороны или используйте кнопки</span>
            <span class="scroll-arrow">→</span>
          </div>
          <button class="scroll-btn next-btn" @click="scrollProducts(1)">→</button>
        </div>
      </div>
    </section>

    <!-- Голосовой помощник -->
    <div class="voice-assistant" 
         :class="{ 'active': isAssistantActive }"
         @mouseenter="activateAssistant"
         @mouseleave="deactivateAssistant">
      <img src="https://sun9-73.userapi.com/s/v1/ig2/8V8rSB28SfmmcfVHPdH0rLUINcdWf3hLzzO-BeaJY3f7DiOsKoKFjcfuZN7mYrDPfzbtht0t3xAtIrUsaYQY9low.jpg?quality=95&as=32x25,48x37,72x56,108x83,160x124,240x185,360x278,364x281&from=bu&cs=364x0" 
           alt="Голосовой помощник Milky Co" class="assistant-img">
      <div class="assistant-bubble" v-if="isAssistantActive">
        <p>Привет! Я Milky-помощник! Чем могу помочь?</p>
        <div class="assistant-options">
          <button @click.stop="assistantAction('catalog')">📦 Показать каталог</button>
          <button @click.stop="assistantAction('contact')">📞 Контакты</button>
          <button @click.stop="assistantAction('help')">❓ Помощь</button>
        </div>
      </div>
    </div>

    <!-- Футер -->
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-logo">
            <img src="https://sun9-15.userapi.com/s/v1/ig2/hitnOpWUtCoBURUrz4sQZOoRnwZJMkwq3ENl95maYcol-3RZIfaWA20CDotBLVzSM0bl_Ekgi6a61-PM0W7PJMv_.jpg?quality=95&as=32x28,48x42,72x63,108x95,160x141,240x211,326x287&from=bu&cs=326x0" 
                 alt="Milky Co" class="footer-logo-img">
            <h3>Milky Co</h3>
          </div>
          <div class="footer-info">
            <p>© 2025 Milky Co. Все права защищены.</p>
            <p>Москва, Молочный проезд, д. 15</p>
            <p>+7 (495) 765-43-21</p>
            <p>info@milkyco.ru</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import ProductCard from './components/ProductCard.vue';

export default defineComponent({
  name: 'App',
  components: {
    ProductCard
  },
  setup() {
    const products = ref([
      {
        id: 1,
        name: 'Яйца куриные Premium',
        description: 'Эко-яйца от кур свободного выгула с ярким желтком и плотным белком',
        price: '140 ₽',
        image: 'https://www.m2-shop.ru/img/products_photos/105460895.jpg',
        weight: '10 шт'
      },
      {
        id: 2,
        name: 'Масло фермерское',
        description: 'Ароматное сливочное масло ручной работы 85% жирности',
        price: '520 ₽',
        image: 'https://www.m2-shop.ru/img/products_photos/131449934.jpg',
        weight: '200 г'
      },
      {
        id: 3,
        name: 'Пармезан выдержанный',
        description: 'Твердый сыр с кристаллами кальция, выдержка 14 месяцев',
        price: '950 ₽',
        image: 'https://www.m2-shop.ru/img/products_photos/134419176.jpg',
        weight: '200 г'
      },
      {
        id: 4,
        name: 'Творог деревенский',
        description: 'Нежный творог повышенной жирности с кремовой текстурой',
        price: '320 ₽',
        image: 'https://www.m2-shop.ru/img/products_photos/144322524.jpeg',
        weight: '400 г'
      },
      {
        id: 5,
        name: 'Ряженка томленая',
        description: 'Традиционный напиток с карамельными нотами томления',
        price: '110 ₽',
        image: 'https://www.m2-shop.ru/img/products_photos/141534103.jpeg',
        weight: '500 мл'
      },
      {
        id: 6,
        name: 'Молоко отборное',
        description: 'Цельное пастеризованное молоко с естественным сливочным вкусом',
        price: '130 ₽',
        image: 'https://www.m2-shop.ru/img/products_photos/138732405.jpg',
        weight: '1 л'
      },
      {
        id: 7,
        name: 'Сливки для гурманов',
        description: 'Пастеризованные сливки идеальные для кофе и соусов',
        price: '180 ₽',
        image: 'https://www.m2-shop.ru/img/products_photos/145601518.jpeg',
        weight: '500 мл'
      },
      {
        id: 8,
        name: 'Сыр Монблан',
        description: 'Французский мягкий сыр с благородной белой плесенью',
        price: '820 ₽',
        image: 'https://www.m2-shop.ru/img/products_photos/149079335.jpeg',
        weight: '150 г'
      }
    ]);

    const isAssistantActive = ref(false);
    const productsTrack = ref<HTMLElement | null>(null);
    const scrollContainer = ref<HTMLElement | null>(null);

    const activateAssistant = () => {
      isAssistantActive.value = true;
    };

    const deactivateAssistant = () => {
      isAssistantActive.value = false;
    };

    const assistantAction = (action: string) => {
      switch(action) {
        case 'catalog':
          scrollToProducts();
          break;
        case 'contact':
          alert('Наши контакты: +7 (495) 765-43-21, info@milkyco.ru');
          break;
        case 'help':
          alert('Чем могу помочь? Вы можете:\n1. Исследовать молочную коллекцию\n2. Узнать о доставке\n3. Получить рецепты с нашими продуктами');
          break;
      }
      isAssistantActive.value = false;
    };

    const scrollToProducts = () => {
      const productsSection = document.getElementById('products');
      if (productsSection) {
        productsSection.scrollIntoView({ behavior: 'smooth' });
      }
    };

    const scrollProducts = (direction: number) => {
      if (scrollContainer.value) {
        const scrollAmount = 400; // px
        scrollContainer.value.scrollBy({
          left: scrollAmount * direction,
          behavior: 'smooth'
        });
      }
    };

    onMounted(() => {
      const container = scrollContainer.value;
      if (container) {
        container.addEventListener('wheel', (e) => {
          e.preventDefault();
          container.scrollBy({
            left: e.deltaY > 0 ? 100 : -100,
            behavior: 'smooth'
          });
        });
      }
    });

    return {
      products,
      isAssistantActive,
      productsTrack,
      scrollContainer,
      activateAssistant,
      deactivateAssistant,
      assistantAction,
      scrollToProducts,
      scrollProducts
    };
  }
});
</script>

<style>
/* Сброс и базовые стили */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f8f9fa;
  color: #333;
  line-height: 1.6;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Шапка */
.header {
  background: linear-gradient(135deg, #4a90e2 0%, #63b3ed 100%);
  padding: 20px 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
  gap: 15px;
  animation: fadeInDown 1s ease;
}

.logo-img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.logo-text h1 {
  color: white;
  font-size: 28px;
  margin-bottom: 5px;
  font-weight: 700;
  letter-spacing: 0.5px;
}

.logo-text p {
  color: rgba(255, 255, 255, 0.9);
  font-size: 14px;
}

.nav {
  display: flex;
  gap: 30px;
}

.nav-link {
  color: white;
  text-decoration: none;
  font-weight: 500;
  padding: 10px 20px;
  border-radius: 25px;
  transition: all 0.3s ease;
}

.nav-link:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

.nav-link.active {
  background: white;
  color: #4a90e2;
}

/* Герой-секция */
.hero {
  background: linear-gradient(135deg, #ebf8ff 0%, #bee3f8 100%);
  padding: 80px 0;
  overflow: hidden;
}

.hero-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
}

.hero-text {
  flex: 1;
  animation: fadeInLeft 1s ease;
}

.hero-title {
  font-size: 48px;
  color: #2d3748;
  margin-bottom: 20px;
  line-height: 1.2;
}

.hero-subtitle {
  font-size: 20px;
  color: #4a90e2;
  margin-bottom: 30px;
}

.hero-button {
  background: linear-gradient(135deg, #ed8936 0%, #dd6b20 100%);
  color: white;
  border: none;
  padding: 18px 40px;
  font-size: 18px;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
  box-shadow: 0 6px 20px rgba(237, 137, 54, 0.3);
}

.hero-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(237, 137, 54, 0.4);
}

/* Стили для маскота */
.hero-image {
  flex: 1;
  animation: fadeInRight 1s ease;
}

.mascot-container {
  position: relative;
  display: inline-block;
}

.mascot {
  width: 100%;
  max-width: 400px;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  transform: perspective(1000px) rotateY(-10deg) rotateX(5deg);
  transition: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
  border: 3px solid white;
  animation: float 6s ease-in-out infinite;
}

.mascot:hover {
  transform: perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1.05);
  box-shadow: 0 25px 50px rgba(74, 144, 226, 0.3);
}

@keyframes float {
  0%, 100% {
    transform: perspective(1000px) rotateY(-10deg) rotateX(5deg) translateY(0);
  }
  50% {
    transform: perspective(1000px) rotateY(-10deg) rotateX(5deg) translateY(-20px);
  }
}

/* О компании */
.about {
  padding: 80px 0;
  background: white;
}

.section-title {
  text-align: center;
  font-size: 36px;
  color: #2d3748;
  margin-bottom: 15px;
}

.section-subtitle {
  text-align: center;
  color: #666;
  margin-bottom: 50px;
  font-size: 18px;
}

.about-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 50px;
}

.about-card {
  background: white;
  padding: 40px 30px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  text-align: center;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.about-card:hover {
  transform: translateY(-10px);
  border-color: #4a90e2;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
}

.about-icon {
  font-size: 48px;
  margin-bottom: 20px;
}

.about-card h3 {
  color: #2d3748;
  margin-bottom: 15px;
  font-size: 22px;
}

.about-card p {
  color: #666;
  line-height: 1.8;
}

/* Каталог товаров */
.products {
  padding: 80px 0;
  background: #f7fafc;
}

.products-scroll-container {
  position: relative;
  overflow-x: auto;
  padding: 30px 0;
  margin: 0 -20px;
  scrollbar-width: none;
  -ms-overflow-style: none;
  cursor: grab;
}

.products-scroll-container:active {
  cursor: grabbing;
}

.products-scroll-container::-webkit-scrollbar {
  display: none;
}

.products-track {
  display: flex;
  gap: 30px;
  padding: 0 20px;
  width: max-content;
  animation: slideIn 1s ease;
}

.scroll-controls {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  margin-top: 30px;
}

.scroll-btn {
  background: #4a90e2;
  color: white;
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  font-size: 24px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.scroll-btn:hover {
  background: #3182ce;
  transform: scale(1.1);
}

.scroll-indicator {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  color: #666;
  font-size: 14px;
}

.scroll-arrow {
  animation: bounce 2s infinite;
  font-size: 24px;
  color: #4a90e2;
}

/* Голосовой помощник */
.voice-assistant {
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 1000;
  cursor: pointer;
  transition: all 0.3s ease;
}

.voice-assistant.active {
  transform: scale(1.1);
}

.assistant-img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #4a90e2;
  box-shadow: 0 10px 30px rgba(74, 144, 226, 0.3);
  animation: float 3s ease-in-out infinite;
}

.assistant-bubble {
  position: absolute;
  bottom: 100%;
  right: 0;
  background: white;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  width: 250px;
  margin-bottom: 15px;
  animation: fadeInUp 0.3s ease;
}

.assistant-bubble::after {
  content: '';
  position: absolute;
  top: 100%;
  right: 20px;
  border-width: 10px;
  border-style: solid;
  border-color: white transparent transparent transparent;
}

.assistant-bubble p {
  color: #2d3748;
  margin-bottom: 15px;
  font-size: 14px;
}

.assistant-options {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.assistant-options button {
  background: #edf2f7;
  border: none;
  padding: 10px 15px;
  border-radius: 8px;
  cursor: pointer;
  text-align: left;
  transition: all 0.3s ease;
  font-size: 13px;
}

.assistant-options button:hover {
  background: #4a90e2;
  color: white;
}

/* Футер */
.footer {
  background: linear-gradient(135deg, #2d3748 0%, #4a5568 100%);
  color: white;
  padding: 50px 0;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 15px;
}

.footer-logo-img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid white;
}

.footer-logo h3 {
  font-size: 24px;
}

.footer-info p {
  margin-bottom: 10px;
  opacity: 0.9;
}

/* Анимации */
@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateX(0);
  }
  40% {
    transform: translateX(-5px);
  }
  60% {
    transform: translateX(5px);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Адаптивность */
@media (max-width: 768px) {
  .header-content {
    flex-direction: column;
    gap: 20px;
  }
  
  .hero-content {
    flex-direction: column;
    text-align: center;
  }
  
  .hero-title {
    font-size: 36px;
  }
  
  .footer-content {
    flex-direction: column;
    text-align: center;
  }
  
  .products-track {
    gap: 20px;
  }
  
  .scroll-controls {
    gap: 15px;
  }
  
  .voice-assistant {
    bottom: 20px;
    right: 20px;
  }
  
  .assistant-img {
    width: 60px;
    height: 60px;
  }
}
</style>