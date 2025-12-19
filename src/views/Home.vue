<template>
  <div id="home">
    <!-- Главная секция -->
    <section class="main-section">
      <!-- Улучшенный фон с молочными узорами -->
      <div class="background-animation">
        <!-- Коровки в облаках -->
        <div class="cloud cloud-1">☁️</div>
        <div class="cloud cloud-2">☁️</div>
        <div class="cloud cloud-3">☁️</div>
        
        <!-- Молочные бутылки -->
        <div class="cloud cloud-1">☁️</div>
        <div class="cloud cloud-2">☁️</div>
        <div class="cloud cloud-3">☁️</div>
        
        <!-- Трава на заднем плане -->
        <div class="grass-pattern"></div>
        
        <!-- Солнышко -->
        <div class="sun">☀️</div>
        
        <!-- Облака -->
        <div class="cloud cloud-1">☁️</div>
        <div class="cloud cloud-2">☁️</div>
        <div class="cloud cloud-3">☁️</div>
      </div>

      <!-- Основной контент -->
      <div class="container">
        <div class="main-content">
          <div class="intro-block">
            <div class="intro-text">
              <h2 class="main-title">
                <span class="title-line">Натуральные молочные</span>
                <span class="title-line">продукты от фермы</span>
              </h2>
              
              <div class="description">
                <p>С 2025 года мы выращиваем счастливых коров в экологически чистых условиях. Наша миссия — доставлять на ваш стол молочные продукты высочайшего качества, сохраняя всю пользу и натуральный вкус.</p>
              </div>
              
              <div class="highlights">
                <div class="highlight">
                  <div class="highlight-icon">🌿</div>
                  <span>Экологически чистые пастбища</span>
                </div>
                <div class="highlight">
                  <div class="highlight-icon">❤️</div>
                  <span>Заботливый уход за животными</span>
                </div>
                <div class="highlight">
                  <div class="highlight-icon">🔬</div>
                  <span>Строгий контроль качества</span>
                </div>
              </div>
              
              <button class="cta-button" @click="scrollToProducts">
                Посмотреть продукцию
                <span class="button-icon">→</span>
              </button>
            </div>
            
            <div class="visual-element">
              <div class="mascot-container">
                <div class="mascot-glow"></div>
                <img src="https://sun9-46.userapi.com/s/v1/ig2/Ab3GtzvlKHXgM8IJ-9Bk7QcIXKluWHMp5P7OcY4hruxW0aZORQfeQ6DLtkV_7QZEnz3tYFqHdscRMTqpFsxvznjX.jpg?quality=95&as=32x32,48x48,72x72,108x107,160x159,240x239,356x354&from=bu&cs=356x0" 
                     alt="Маскот Milky Co" 
                     class="mascot">
                <div class="mascot-bubble">Привет! Я Весёлый Бурёнка!</div>
              </div>
            </div>
          </div>
          
          <div class="stats">
            <div class="stat-card">
              <div class="stat-number">500+</div>
              <div class="stat-label">Довольных семей</div>
            </div>
            <div class="stat-card">
              <div class="stat-number">100+</div>
              <div class="stat-label">Гектаров пастбищ</div>
            </div>
            <div class="stat-card">
              <div class="stat-number">24/7</div>
              <div class="stat-label">Контроль качества</div>
            </div>
            <div class="stat-card">
              <div class="stat-number">0%</div>
              <div class="stat-label">Химических добавок</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- О компании -->
    <section class="about-section">
      <div class="section-bg-pattern"></div>
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Наша философия</h2>
          <p class="section-subtitle">Качество начинается с заботы</p>
        </div>
        
        <div class="philosophy-cards">
          <div class="philosophy-card">
            <div class="card-icon">🌱</div>
            <h3>Природа прежде всего</h3>
            <p>Наши коровы живут на свободном выгуле, питаются натуральными кормами и получают всю необходимую заботу.</p>
          </div>
          
          <div class="philosophy-card">
            <div class="card-icon">⚡</div>
            <h3>Современные технологии</h3>
            <p>Используем бережную пастеризацию и современное оборудование для сохранения всех полезных свойств.</p>
          </div>
          
          <div class="philosophy-card">
            <div class="card-icon">🚚</div>
            <h3>Прямые поставки</h3>
            <p>Собственный автопарк позволяет доставлять свежую продукцию напрямую от фермы к вам на стол.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Продукция с горизонтальным скроллом -->
    <section class="products-section" id="products">
      <div class="products-bg-pattern"></div>
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Наша молочная коллекция</h2>
          <p class="section-subtitle">Проведите пальцем или используйте колесико мыши для просмотра</p>
        </div>
        
        <div class="products-scroll-container" ref="scrollContainer">
          <div class="products-track">
            <div class="product-card" v-for="product in products" :key="product.id">
              <div class="product-image-container">
                <img :src="product.image" :alt="product.name" class="product-image">
                <div class="product-badge" v-if="product.id <= 3">NEW</div>
              </div>
              <div class="product-info">
                <h3 class="product-name">{{ product.name }}</h3>
                <p class="product-description">{{ product.description }}</p>
                <div class="product-footer">
                  <span class="product-weight">{{ product.weight }}</span>
                  <span class="product-price">{{ product.price }} ₽</span>
                </div>
                <div class="product-rating">
                  <span class="stars">★★★★★</span>
                  <span class="rating-text">4.8</span>
                </div>
                <button class="add-to-cart-btn" @click="addToCart(product)">
                  <span class="cart-icon">🛒</span>
                  В корзину
                </button>
              </div>
            </div>
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
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'Home',
  setup() {
    const store = useStore()
    const scrollContainer = ref(null)
    
    const products = ref([
      {
        id: 1,
        name: 'Яйца куриные Premium',
        description: 'Эко-яйца от кур свободного выгула с ярким желтком и плотным белком',
        price: 140,
        image: 'https://www.m2-shop.ru/img/products_photos/105460895.jpg',
        weight: '10 шт'
      },
      {
        id: 2,
        name: 'Масло фермерское',
        description: 'Ароматное сливочное масло ручной работы 85% жирности',
        price: 520,
        image: 'https://www.m2-shop.ru/img/products_photos/131449934.jpg',
        weight: '200 г'
      },
      {
        id: 3,
        name: 'Пармезан выдержанный',
        description: 'Твердый сыр с кристаллами кальция, выдержка 14 месяцев',
        price: 950,
        image: 'https://www.m2-shop.ru/img/products_photos/134419176.jpg',
        weight: '200 г'
      },
      {
        id: 4,
        name: 'Творог деревенский',
        description: 'Нежный творог повышенной жирности с кремовой текстурой',
        price: 320,
        image: 'https://www.m2-shop.ru/img/products_photos/144322524.jpeg',
        weight: '400 г'
      },
      {
        id: 5,
        name: 'Ряженка томленая',
        description: 'Традиционный напиток с карамельными нотами томления',
        price: 110,
        image: 'https://www.m2-shop.ru/img/products_photos/141534103.jpeg',
        weight: '500 мл'
      },
      {
        id: 6,
        name: 'Молоко отборное',
        description: 'Цельное пастеризованное молоко с естественным сливочным вкусом',
        price: 130,
        image: 'https://www.m2-shop.ru/img/products_photos/138732405.jpg',
        weight: '1 л'
      },
      {
        id: 7,
        name: 'Сливки для гурманов',
        description: 'Пастеризованные сливки идеальные для кофе и соусов',
        price: 180,
        image: 'https://www.m2-shop.ru/img/products_photos/145601518.jpeg',
        weight: '500 мл'
      },
      {
        id: 8,
        name: 'Сыр Монблан',
        description: 'Французский мягкий сыр с благородной белой плесенью',
        price: 820,
        image: 'https://www.m2-shop.ru/img/products_photos/149079335.jpeg',
        weight: '150 г'
      }
    ])

    const scrollToProducts = () => {
      const productsSection = document.getElementById('products')
      if (productsSection) {
        productsSection.scrollIntoView({ behavior: 'smooth' })
      }
    }

    const scrollProducts = (direction) => {
      if (scrollContainer.value) {
        const scrollAmount = 400
        scrollContainer.value.scrollBy({
          left: scrollAmount * direction,
          behavior: 'smooth'
        })
      }
    }

    const addToCart = (product) => {
      store.dispatch('addToCart', product)
    }

    onMounted(() => {
      const container = scrollContainer.value
      if (container) {
        container.addEventListener('wheel', (e) => {
          e.preventDefault()
          container.scrollBy({
            left: e.deltaY > 0 ? 100 : -100,
            behavior: 'smooth'
          })
        })
      }
    })

    return {
      products,
      scrollContainer,
      scrollToProducts,
      scrollProducts,
      addToCart
    }
  }
}
</script>

<style scoped>
/* Главная секция */
.main-section {
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, 
    #e0f2ff 0%, 
    #c2e4ff 30%, 
    #a6d8ff 60%, 
    #8bcbff 100%);
}

/* Анимированный фон с фермерскими элементами */
.background-animation {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  z-index: 0;
}

/* Коровки */
.cow {
  position: absolute;
  font-size: 40px;
  opacity: 0.2;
  filter: blur(0.5px);
}

.cow-1 {
  top: 15%;
  left: 10%;
  animation: floatCow 25s ease-in-out infinite;
}

.cow-2 {
  top: 40%;
  right: 15%;
  font-size: 50px;
  animation: floatCow 30s ease-in-out infinite reverse;
}

.cow-3 {
  bottom: 25%;
  left: 20%;
  font-size: 35px;
  animation: floatCow 20s ease-in-out infinite;
}

@keyframes floatCow {
  0%, 100% {
    transform: translateY(0) translateX(0) rotate(0deg);
  }
  33% {
    transform: translateY(-40px) translateX(30px) rotate(10deg);
  }
  66% {
    transform: translateY(20px) translateX(-25px) rotate(-10deg);
  }
}

/* Молочные бутылки */
.milk-bottle {
  position: absolute;
  font-size: 30px;
  opacity: 0.15;
  filter: blur(0.3px);
}

.bottle-1 {
  top: 25%;
  right: 20%;
  animation: floatBottle 15s ease-in-out infinite;
}

.bottle-2 {
  top: 60%;
  left: 15%;
  animation: floatBottle 18s ease-in-out infinite reverse;
}

.bottle-3 {
  bottom: 15%;
  right: 25%;
  animation: floatBottle 22s ease-in-out infinite;
}

@keyframes floatBottle {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
    opacity: 0.15;
  }
  50% {
    transform: translateY(-30px) rotate(15deg);
    opacity: 0.25;
  }
}

/* Трава на заднем плане */
.grass-pattern {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 150px;
  background: 
    linear-gradient(90deg, 
      rgba(72, 187, 120, 0.1) 25%, 
      transparent 25%, 
      transparent 50%, 
      rgba(72, 187, 120, 0.1) 50%, 
      rgba(72, 187, 120, 0.1) 75%, 
      transparent 75%, 
      transparent);
  background-size: 80px 100%;
  animation: grassMove 60s linear infinite;
}

@keyframes grassMove {
  0% { background-position: 0 0; }
  100% { background-position: 800px 0; }
}

/* Солнышко */
.sun {
  position: absolute;
  top: 10%;
  right: 10%;
  font-size: 60px;
  opacity: 0.1;
  animation: sunRotate 40s linear infinite;
}

@keyframes sunRotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* Облака */
.cloud {
  position: absolute;
  font-size: 50px;
  opacity: 0.08;
}

.cloud-1 {
  top: 20%;
  left: 5%;
  animation: floatCloud 40s linear infinite;
}

.cloud-2 {
  top: 50%;
  right: 10%;
  font-size: 60px;
  animation: floatCloud 50s linear infinite reverse;
}

.cloud-3 {
  bottom: 30%;
  left: 70%;
  animation: floatCloud 35s linear infinite;
}

@keyframes floatCloud {
  0% { transform: translateX(-100px); }
  100% { transform: translateX(calc(100vw + 100px)); }
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 1;
}

/* Основной контент */
.main-content {
  padding: 120px 0 100px;
  position: relative;
  z-index: 2;
}

.intro-block {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
  margin-bottom: 100px;
}

.main-title {
  font-size: 56px;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 30px;
  background: linear-gradient(135deg, #0f172a 0%, #0ea5e9 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

.title-line {
  display: block;
}

.description {
  margin-bottom: 40px;
}

.description p {
  font-size: 20px;
  color: #475569;
  line-height: 1.8;
  background: rgba(255, 255, 255, 0.9);
  padding: 25px;
  border-radius: 20px;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.8);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.highlights {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 40px;
}

.highlight {
  display: flex;
  align-items: center;
  gap: 15px;
  font-size: 18px;
  color: #334155;
  background: rgba(255, 255, 255, 0.95);
  padding: 18px 25px;
  border-radius: 15px;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.9);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.highlight:hover {
  transform: translateX(15px);
  border-color: rgba(14, 165, 233, 0.5);
  box-shadow: 0 8px 25px rgba(14, 165, 233, 0.2);
}

.highlight-icon {
  font-size: 24px;
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #0ea5e9 0%, #38bdf8 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  box-shadow: 0 5px 15px rgba(14, 165, 233, 0.3);
}

.cta-button {
  background: linear-gradient(135deg, #0ea5e9 0%, #38bdf8 100%);
  color: white;
  border: none;
  padding: 20px 45px;
  border-radius: 30px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 12px;
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px rgba(14, 165, 233, 0.4);
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.5);
}

.cta-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  transition: 0.5s;
}

.cta-button:hover::before {
  left: 100%;
}

.cta-button:hover {
  transform: translateY(-5px) scale(1.05);
  box-shadow: 0 15px 40px rgba(14, 165, 233, 0.6);
}

.button-icon {
  transition: transform 0.3s ease;
}

.cta-button:hover .button-icon {
  transform: translateX(8px);
}

/* Маскот */
.visual-element {
  display: flex;
  justify-content: center;
  align-items: center;
}

.mascot-container {
  position: relative;
}

.mascot-glow {
  position: absolute;
  top: -50px;
  left: -50px;
  right: -50px;
  bottom: -50px;
  background: radial-gradient(circle, 
    rgba(173, 216, 230, 0.3) 0%,        /* Светло-голубой */
    rgba(173, 216, 230, 0.2) 30%,      /* Средний светло-голубой */
    rgba(173, 216, 230, 0.1) 60%,      /* Светлый голубой */
    transparent 80%);
  border-radius: 50%;
  animation: glowPulse 3s ease-in-out infinite;
  z-index: 1;
  filter: blur(15px);
}

@keyframes glowPulse {
  0%, 100% { 
    opacity: 0.8; 
    transform: scale(1); 
  }
  50% { 
    opacity: 1; 
    transform: scale(1.1); 
  }
}

.mascot {
  width: 350px;
  height: 350px;
  border-radius: 50%;
  object-fit: cover;
  border: 10px solid white;
  box-shadow: 
    0 30px 60px rgba(0, 0, 0, 0.15),
    0 0 80px rgba(173, 216, 230, 0.4),     /* Светло-голубое свечение */
    0 0 120px rgba(173, 216, 230, 0.2),    /* Внешнее светло-голубое свечение */
    0 0 160px rgba(173, 216, 230, 0.1);    /* Внешнее очень светлое свечение */
  animation: float 6s ease-in-out infinite;
  filter: drop-shadow(0 15px 25px rgba(0, 0, 0, 0.2));
  position: relative;
  z-index: 2;
}

@keyframes float {
  0%, 100% { 
    transform: translateY(0) rotate(0deg); 
  }
  33% { 
    transform: translateY(-25px) rotate(3deg); 
  }
  66% { 
    transform: translateY(15px) rotate(-2deg); 
  }
}

.mascot-bubble {
  position: absolute;
  top: -80px;
  right: -50px;
  background: white;
  padding: 20px 30px;
  border-radius: 30px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
  font-weight: 500;
  color: #0f172a;
  animation: bubbleFloat 3s ease-in-out infinite;
  border: 2px solid rgba(14, 165, 233, 0.3);
  backdrop-filter: blur(10px);
  z-index: 3;
  font-size: 16px;
  max-width: 200px;
}

.mascot-bubble::after {
  content: '';
  position: absolute;
  bottom: -12px;
  left: 50%;
  transform: translateX(-50%);
  border-width: 12px;
  border-style: solid;
  border-color: white transparent transparent transparent;
}

@keyframes bubbleFloat {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
}

/* Статистика */
.stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
}

.stat-card {
  text-align: center;
  padding: 40px 20px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 25px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.8);
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
}

.stat-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  transition: 0.6s;
}

.stat-card:hover::before {
  left: 100%;
}

.stat-card:hover {
  transform: translateY(-10px) scale(1.05);
  box-shadow: 0 25px 50px rgba(14, 165, 233, 0.2);
  border-color: rgba(14, 165, 233, 0.4);
}

.stat-number {
  font-size: 52px;
  font-weight: 800;
  background: linear-gradient(135deg, #0ea5e9 0%, #0369a1 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 10px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

.stat-label {
  font-size: 16px;
  color: #475569;
  font-weight: 600;
  letter-spacing: 0.5px;
}

/* О компании */
.about-section {
  padding: 100px 0;
  background: linear-gradient(135deg, #ffffff 0%, #f0f9ff 100%);
  position: relative;
  overflow: hidden;
}

.section-bg-pattern {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 20% 30%, rgba(14, 165, 233, 0.03) 0%, transparent 50%),
    radial-gradient(circle at 80% 70%, rgba(14, 165, 233, 0.03) 0%, transparent 50%);
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
  position: relative;
}

.section-title {
  font-size: 42px;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 15px;
  position: relative;
  display: inline-block;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 4px;
  background: linear-gradient(135deg, #0ea5e9 0%, #38bdf8 100%);
  border-radius: 2px;
}

.section-subtitle {
  font-size: 18px;
  color: #64748b;
  background: rgba(255, 255, 255, 0.8);
  padding: 12px 25px;
  border-radius: 30px;
  display: inline-block;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.9);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
}

.philosophy-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
}

.philosophy-card {
  padding: 45px 35px;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 25px;
  border: 2px solid rgba(255, 255, 255, 0.9);
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
}

.philosophy-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 5px;
  background: linear-gradient(135deg, #0ea5e9 0%, #38bdf8 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.philosophy-card:hover::before {
  opacity: 1;
}

.philosophy-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 25px 50px rgba(14, 165, 233, 0.15);
  border-color: rgba(14, 165, 233, 0.3);
}

.card-icon {
  font-size: 52px;
  margin-bottom: 25px;
  display: inline-block;
  background: linear-gradient(135deg, #0ea5e9 0%, #38bdf8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.philosophy-card h3 {
  font-size: 24px;
  margin-bottom: 20px;
  color: #0f172a;
}

.philosophy-card p {
  color: #64748b;
  line-height: 1.8;
  font-size: 16px;
}

/* Продукция с горизонтальным скроллом */
.products-section {
  padding: 100px 0;
  background: linear-gradient(135deg, #e6f2ff 0%, #d4e7ff 100%);
  position: relative;
  overflow: hidden;
}

.products-bg-pattern {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    radial-gradient(circle at 15% 25%, rgba(255, 255, 255, 0.2) 0%, transparent 40%),
    radial-gradient(circle at 85% 75%, rgba(255, 255, 255, 0.2) 0%, transparent 40%);
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

/* Карточка товара */
.product-card {
  background: white;
  border-radius: 25px;
  overflow: hidden;
  box-shadow: 0 15px 35px rgba(74, 144, 226, 0.15);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  width: 300px;
  flex-shrink: 0;
  position: relative;
  border: 2px solid rgba(255, 255, 255, 0.9);
  display: flex;
  flex-direction: column;
  backdrop-filter: blur(10px);
}

.product-card:hover {
  transform: translateY(-12px) scale(1.03);
  box-shadow: 0 25px 50px rgba(74, 144, 226, 0.25);
  border-color: #4a90e2;
}

.product-image-container {
  position: relative;
  height: 220px;
  overflow: hidden;
}

.product-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.8s ease;
}

.product-card:hover .product-image {
  transform: scale(1.12);
}

.product-badge {
  position: absolute;
  top: 20px;
  right: 20px;
  background: linear-gradient(135deg, #ed8936 0%, #dd6b20 100%);
  color: white;
  padding: 8px 20px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 700;
  box-shadow: 0 6px 15px rgba(237, 137, 54, 0.4);
  z-index: 2;
  letter-spacing: 1px;
}

.product-info {
  padding: 30px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.product-name {
  color: #2d3748;
  font-size: 22px;
  margin-bottom: 15px;
  font-weight: 700;
  line-height: 1.3;
}

.product-description {
  color: #718096;
  font-size: 15px;
  line-height: 1.7;
  margin-bottom: 20px;
  flex-grow: 1;
  min-height: 70px;
}

.product-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  border-top: 2px solid rgba(226, 232, 240, 0.6);
  margin-bottom: 20px;
}

.product-weight {
  color: #a0aec0;
  font-size: 15px;
  font-weight: 600;
  background: rgba(240, 249, 255, 0.8);
  padding: 6px 12px;
  border-radius: 10px;
}

.product-price {
  color: #ed8936;
  font-size: 28px;
  font-weight: 800;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
}

.product-rating {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
}

.stars {
  color: #f6ad55;
  font-size: 18px;
  letter-spacing: 2px;
}

.rating-text {
  color: #718096;
  font-size: 15px;
  font-weight: 600;
  background: rgba(240, 249, 255, 0.8);
  padding: 5px 10px;
  border-radius: 10px;
}

/* Кнопка "В корзину" */
.add-to-cart-btn {
  width: 100%;
  padding: 16px;
  background: linear-gradient(135deg, #0ea5e9 0%, #38bdf8 100%);
  color: white;
  border: none;
  border-radius: 15px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.4s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 16px;
  margin-top: auto;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.5);
  letter-spacing: 0.5px;
}

.add-to-cart-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  transition: 0.6s;
}

.product-card:hover .add-to-cart-btn::before {
  left: 100%;
}

.add-to-cart-btn:hover {
  background: linear-gradient(135deg, #0284c7 0%, #0ea5e9 100%);
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(14, 165, 233, 0.4);
}

.cart-icon {
  font-size: 18px;
}

.scroll-controls {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  margin-top: 40px;
}

.scroll-btn {
  background: linear-gradient(135deg, #0ea5e9 0%, #38bdf8 100%);
  color: white;
  border: none;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  font-size: 26px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 20px rgba(14, 165, 233, 0.4);
  border: 2px solid rgba(255, 255, 255, 0.5);
}

.scroll-btn:hover {
  background: linear-gradient(135deg, #0284c7 0%, #0ea5e9 100%);
  transform: scale(1.15);
  box-shadow: 0 12px 25px rgba(14, 165, 233, 0.6);
}

.scroll-indicator {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  color: #475569;
  font-size: 15px;
  background: rgba(255, 255, 255, 0.9);
  padding: 15px 25px;
  border-radius: 30px;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.8);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  font-weight: 500;
}

.scroll-arrow {
  animation: bounce 2s infinite;
  font-size: 26px;
  color: #0ea5e9;
}

/* Адаптивность */
@media (max-width: 1024px) {
  .intro-block {
    gap: 40px;
  }
  
  .main-title {
    font-size: 48px;
  }
  
  .mascot {
    width: 300px;
    height: 300px;
  }
  
  .stats {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .intro-block {
    grid-template-columns: 1fr;
    gap: 60px;
    text-align: center;
  }
  
  .main-title {
    font-size: 36px;
  }
  
  .highlights {
    align-items: center;
  }
  
  .stats {
    grid-template-columns: 1fr;
  }
  
  .products-track {
    gap: 20px;
  }
  
  .product-card {
    width: 260px;
  }
  
  .philosophy-cards {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .main-title {
    font-size: 32px;
  }
  
  .section-title {
    font-size: 32px;
  }
  
  .mascot {
    width: 250px;
    height: 250px;
  }
  
  .mascot-bubble {
    position: static;
    margin-top: 20px;
    max-width: 100%;
  }
  
  .scroll-controls {
    gap: 15px;
    flex-direction: column;
  }
  
  .product-card {
    width: 240px;
  }
  
  .cta-button, .add-to-cart-btn {
    padding: 14px 25px;
    font-size: 15px;
  }
}
</style>