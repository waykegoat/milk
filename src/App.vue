<template>
  <div id="app">
    <AppHeader @toggle-cart="isCartOpen = !isCartOpen" />
    <Cart :is-open="isCartOpen" @close="isCartOpen = false" />
    
    <main>
      <router-view />
    </main>
    
    <div class="voice-assistant" 
         :class="{ 'active': isAssistantActive }"
         @mouseenter="activateAssistant"
         @mouseleave="deactivateAssistant">
      <img src="/images/assistant.jpg" 
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
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import AppHeader from './components/Header.vue'
import Cart from './components/Cart.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    Cart
  },
  setup() {
    const router = useRouter()
    const isCartOpen = ref(false)
    const isAssistantActive = ref(false)

    const activateAssistant = () => {
      isAssistantActive.value = true
    }

    const deactivateAssistant = () => {
      isAssistantActive.value = false
    }

    const assistantAction = (action) => {
      switch(action) {
        case 'catalog':
          router.push('/')
          break
        case 'contact':
          alert('Наши контакты: +7 (495) 765-43-21, info@milkyco.ru')
          break
        case 'help':
          alert('Чем могу помочь? Вы можете:\n1. Исследовать молочную коллекцию\n2. Узнать о доставке\n3. Получить рецепты с нашими продуктами')
          break
      }
      isAssistantActive.value = false
    }

    return {
      isCartOpen,
      isAssistantActive,
      activateAssistant,
      deactivateAssistant,
      assistantAction
    }
  }
}
</script>

<style>
#app {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif
}

/* Стили голосового помощника */
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
  border: 3px solid #0ea5e9;
  box-shadow: 0 10px 30px rgba(14, 165, 233, 0.3);
  animation: assistantFloat 3s ease-in-out infinite;
}

@keyframes assistantFloat {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-10px) rotate(5deg);
  }
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
  border: 2px solid #e0f2fe;
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
  color: #0f172a;
  margin-bottom: 15px;
  font-size: 14px;
  font-weight: 500;
}

.assistant-options {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.assistant-options button {
  background: #f0f9ff;
  border: 1px solid #e0f2fe;
  padding: 10px 15px;
  border-radius: 8px;
  cursor: pointer;
  text-align: left;
  transition: all 0.3s ease;
  font-size: 13px;
  color: #0f172a;
}

.assistant-options button:hover {
  background: #0ea5e9;
  color: white;
  border-color: #0ea5e9;
  transform: translateX(5px);
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
</style>