<template>
  <div id="app">
    <!-- Герой-секция с фоновым фото фермы -->
    <section class="hero">
      <!-- Фоновое изображение фермы -->
      <div class="hero-bg">
        <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Farm_Study_%281%29_%288625798026%29.jpg" 
             alt="Ферма Milky Co" class="farm-image">
        <div class="hero-overlay"></div>
      </div>
      
      <!-- Прозрачный хедер -->
      <header class="header transparent">
        <div class="container">
          <div class="header-content">
            <div class="logo">
              <img src="https://sun9-15.userapi.com/s/v1/ig2/hitnOpWUtCoBURUrz4sQZOoRnwZJMkwq3ENl95maYcol-3RZIfaWA20CDotBLVzSM0bl_Ekgi6a61-PM0W7PJMv_.jpg?quality=95&as=32x28,48x42,72x63,108x95,160x141,240x211,326x287&from=bu&cs=326x0" 
                   alt="Milky Co Логотип" class="logo-img">
              <div class="logo-text">
                <h1>Milky Co</h1>
                <p>Молочное совершенство</p>
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

      <!-- Контент герой-секции -->
      <div class="container">
        <div class="hero-content">
          <div class="hero-text">
            <h2 class="hero-title">Натуральные молочные продукты<br>от нашей фермы к вашему столу</h2>
            <p class="hero-subtitle">С 2025 года мы выращиваем счастливых коров и производим<br>молочные продукты высочайшего качества в экологически чистых условиях</p>
            <div class="hero-buttons">
              <button class="hero-button primary" @click="scrollToProducts">Посмотреть продукцию</button>
              <button class="hero-button secondary">Узнать о доставке</button>
            </div>
          </div>
          <div class="hero-stats">
            <div class="stat-item">
              <div class="stat-number">500+</div>
              <div class="stat-label">Довольных клиентов</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">100+</div>
              <div class="stat-label">Гектаров пастбищ</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">24/7</div>
              <div class="stat-label">Контроль качества</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Секция с маскотом -->
    <section class="mascot-section">
      <div class="container">
        <div class="mascot-content">
          <div class="mascot-text">
            <h2 class="section-title">Знакомьтесь, наш символ —<br>Веселый Бурёнка</h2>
            <p class="section-subtitle">Он представляет нашу философию: натуральность, качество и забота о каждом клиенте. Наши коровы живут в свободных условиях и питаются только натуральными кормами.</p>
            <div class="features">
              <div class="feature">
                <div class="feature-icon">🌿</div>
                <div class="feature-text">Экологически чистые пастбища</div>
              </div>
              <div class="feature">
                <div class="feature-icon">❤️</div>
                <div class="feature-text">Заботливый уход за животными</div>
              </div>
              <div class="feature">
                <div class="feature-icon">⚡</div>
                <div class="feature-text">Современные технологии производства</div>
              </div>
            </div>
          </div>
          <div class="mascot-image">
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
        <h2 class="section-title">Почему выбирают Milky Co?</h2>
        <p class="section-subtitle">Наши принципы работы обеспечивают безупречное качество продукции</p>
        
        <div class="about-content">
          <div class="about-card">
            <div class="about-icon">🏭</div>
            <h3>Современное производство</h3>
            <p>Используем новейшее оборудование европейского качества для сохранения всех полезных свойств молока.</p>
          </div>
          <div class="about-card">
            <div class="about-icon">🔬</div>
            <h3>Лабораторный контроль</h3>
            <p>Каждая партия продукции проходит строгий контроль в собственной лаборатории по 25 параметрам.</p>
          </div>
          <div class="about-card">
            <div class="about-icon">🚛</div>
            <h3>Собственный автопарк</h3>
            <p>Доставляем продукцию в термоконтейнерах, поддерживающих оптимальную температуру.</p>
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
          <div class="footer-social">
            <p>Мы в соцсетях:</p>
            <div class="social-icons">
              <a href="#" class="social-icon">📘</a>
              <a href="#" class="social-icon">📷</a>
              <a href="#" class="social-icon">📹</a>
              <a href="#" class="social-icon">💬</a>
            </div>
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

/* Герой-секция с фоновой фоткой */
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  color: white;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -2;
}

.farm-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.7);
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(74, 144, 226, 0.3) 0%, rgba(32, 32, 32, 0.6) 100%);
  z-index: -1;
}

/* Прозрачный хедер */
.header.transparent {
  background: transparent;
  padding: 25px 0;
  box-shadow: none;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}

.header.transparent .logo-text h1,
.header.transparent .logo-text p,
.header.transparent .nav-link {
  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.header.transparent .nav-link {
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.header.transparent .nav-link:hover {
  background: rgba(255, 255, 255, 0.2);
  border-color: white;
}

.header.transparent .nav-link.active {
  background: white;
  color: #4a90e2;
  border-color: white;
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
  font-size: 28px;
  margin-bottom: 5px;
  font-weight: 700;
  letter-spacing: 0.5px;
}

.logo-text p {
  font-size: 14px;
  opacity: 0.9;
}

.nav {
  display: flex;
  gap: 20px;
}

.nav-link {
  text-decoration: none;
  font-weight: 500;
  padding: 10px 25px;
  border-radius: 25px;
  transition: all 0.3s ease;
}

/* Контент герой-секции */
.hero-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 150px 0 100px;
  max-width: 800px;
}

.hero-text {
  animation: fadeInUp 1s ease;
}

.hero-title {
  font-size: 56px;
  margin-bottom: 25px;
  line-height: 1.2;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.hero-subtitle {
  font-size: 22px;
  margin-bottom: 40px;
  opacity: 0.95;
  text-shadow: 0 1px 5px rgba(0, 0, 0, 0.3);
}

.hero-buttons {
  display: flex;
  gap: 20px;
  margin-bottom: 60px;
}

.hero-button {
  padding: 18px 40px;
  font-size: 18px;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
  border: none;
}

.hero-button.primary {
  background: linear-gradient(135deg, #ed8936 0%, #dd6b20 100%);
  color: white;
  box-shadow: 0 6px 20px rgba(237, 137, 54, 0.4);
}

.hero-button.primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(237, 137, 54, 0.5);
}

.hero-button.secondary {
  background: transparent;
  color: white;
  border: 2px solid white;
}

.hero-button.secondary:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-3px);
}

.hero-stats {
  display: flex;
  gap: 50px;
  animation: fadeInUp 1.2s ease;
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 10px;
  color: #ed8936;
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
}

.stat-label {
  font-size: 16px;
  opacity: 0.9;
}

/* Секция с маскотом */
.mascot-section {
  padding: 100px 0;
  background: white;
}

.mascot-content {
  display: flex;
  align-items: center;
  gap: 60px;
}

.mascot-text {
  flex: 1;
}

.mascot-image {
  flex: 1;
  text-align: center;
}

.section-title {
  font-size: 42px;
  color: #2d3748;
  margin-bottom: 20px;
  line-height: 1.2;
}

.section-subtitle {
  font-size: 20px;
  color: #718096;
  margin-bottom: 40px;
}

.features {
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-top: 40px;
}

.feature {
  display: flex;
  align-items: center;
  gap: 15px;
}

.feature-icon {
  font-size: 32px;
  flex-shrink: 0;
}

.feature-text {
  font-size: 18px;
  color: #2d3748;
  font-weight: 500;
}

.mascot {
  width: 100%;
  max-width: 400px;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  transform: perspective(1000px) rotateY(-10deg) rotateX(5deg);
  transition: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
  border: 3px solid #4a90e2;
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
  padding: 100px 0;
  background: #f7fafc;
}

.about-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  margin-top: 60px;
}

.about-card {
  background: white;
  padding: 50px 30px;
  border-radius: 20px;
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
  font-size: 56px;
  margin-bottom: 25px;
}

.about-card h3 {
  color: #2d3748;
  margin-bottom: 20px;
  font-size: 24px;
}

.about-card p {
  color: #666;
  line-height: 1.8;
  font-size: 16px;
}

/* Каталог товаров */
.products {
  padding: 100px 0;
  background: white;
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
}

.scroll-controls {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  margin-top: 40px;
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
  padding: 70px 0 40px;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 50px;
  margin-bottom: 40px;
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
  margin-bottom: 12px;
  opacity: 0.9;
  font-size: 15px;
}

.footer-social p {
  margin-bottom: 15px;
  opacity: 0.9;
}

.social-icons {
  display: flex;
  gap: 15px;
}

.social-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  font-size: 20px;
  text-decoration: none;
  color: white;
  transition: all 0.3s ease;
}

.social-icon:hover {
  background: #4a90e2;
  transform: translateY(-3px);
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

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
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

/* Адаптивность */
@media (max-width: 1024px) {
  .hero-title {
    font-size: 48px;
  }
  
  .mascot-content {
    flex-direction: column;
    text-align: center;
  }
  
  .features {
    align-items: center;
  }
}

@media (max-width: 768px) {
  .header-content {
    flex-direction: column;
    gap: 20px;
  }
  
  .hero-content {
    padding: 180px 0 60px;
  }
  
  .hero-title {
    font-size: 36px;
  }
  
  .hero-subtitle {
    font-size: 18px;
  }
  
  .hero-buttons {
    flex-direction: column;
  }
  
  .hero-stats {
    flex-direction: column;
    gap: 30px;
  }
  
  .section-title {
    font-size: 32px;
  }
  
  .footer-content {
    grid-template-columns: 1fr;
    gap: 30px;
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
  
  .nav {
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>