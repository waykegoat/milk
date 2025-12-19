<template>
  <div class="voice-assistant" 
       :class="{ 'active': isAssistantActive }"
       @mouseenter="activateAssistant"
       @mouseleave="deactivateAssistant"
       @click="toggleAssistant">
    <div class="assistant-circle">
      <img src="https://sun9-73.userapi.com/s/v1/ig2/8V8rSB28SfmmcfVHPdH0rLUINcdWf3hLzzO-BeaJY3f7DiOsKoKFjcfuZN7mYrDPfzbtht0t3xAtIrUsaYQY9low.jpg" 
           alt="Голосовой помощник Milky Co" class="assistant-img">
      <div class="assistant-ring"></div>
      <div class="assistant-pulse"></div>
    </div>
    <div class="assistant-bubble" v-if="isAssistantActive">
      <div class="bubble-header">
        <span class="bubble-title">Milky Помощник</span>
        <button class="bubble-close" @click.stop="deactivateAssistant">×</button>
      </div>
      <p>Привет! Я Milky-помощник! Чем могу помочь?</p>
      <div class="assistant-options">
        <button @click.stop="assistantAction('catalog')" class="option-btn">
          <span class="option-icon">📦</span>
          <span class="option-text">Показать каталог</span>
        </button>
        <button @click.stop="assistantAction('contact')" class="option-btn">
          <span class="option-icon">📞</span>
          <span class="option-text">Контакты</span>
        </button>
        <button @click.stop="assistantAction('help')" class="option-btn">
          <span class="option-icon">❓</span>
          <span class="option-text">Помощь</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: 'VoiceAssistant',
  setup() {
    const router = useRouter()
    const isAssistantActive = ref(false)

    const activateAssistant = () => {
      isAssistantActive.value = true
    }

    const deactivateAssistant = () => {
      isAssistantActive.value = false
    }

    const toggleAssistant = () => {
      isAssistantActive.value = !isAssistantActive.value
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
      isAssistantActive,
      activateAssistant,
      deactivateAssistant,
      toggleAssistant,
      assistantAction
    }
  }
}
</script>

<style scoped>
.voice-assistant {
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 9999;
  cursor: pointer;
}

.assistant-circle {
  position: relative;
  width: 80px;
  height: 80px;
}

.assistant-img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid white;
  box-shadow: 0 10px 30px rgba(14, 165, 233, 0.3);
  position: relative;
  z-index: 2;
  animation: assistantFloat 3s ease-in-out infinite;
}

.assistant-ring {
  position: absolute;
  top: -5px;
  left: -5px;
  right: -5px;
  bottom: -5px;
  border: 2px solid rgba(14, 165, 233, 0.5);
  border-radius: 50%;
  animation: ringPulse 2s ease-in-out infinite;
}

.assistant-pulse {
  position: absolute;
  top: -15px;
  left: -15px;
  right: -15px;
  bottom: -15px;
  border: 2px solid rgba(14, 165, 233, 0.2);
  border-radius: 50%;
  animation: pulse 3s ease-in-out infinite;
}

@keyframes assistantFloat {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-10px) rotate(5deg);
  }
}

@keyframes ringPulse {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.7;
  }
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(1.3);
    opacity: 0;
  }
}

.assistant-bubble {
  position: absolute;
  bottom: calc(100% + 20px);
  right: 0;
  background: white;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
  width: 280px;
  animation: bubbleIn 0.3s ease;
  border: 2px solid #e0f2fe;
  transform-origin: bottom right;
}

@keyframes bubbleIn {
  from {
    opacity: 0;
    transform: scale(0.8) translateY(10px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
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

.bubble-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  padding-bottom: 10px;
  border-bottom: 1px solid #e2e8f0;
}

.bubble-title {
  font-weight: 600;
  color: #0f172a;
  font-size: 16px;
}

.bubble-close {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #94a3b8;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.3s ease;
}

.bubble-close:hover {
  background: #f1f5f9;
  color: #ef4444;
}

.assistant-bubble p {
  color: #475569;
  margin-bottom: 20px;
  font-size: 14px;
  line-height: 1.6;
}

.assistant-options {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.option-btn {
  background: #f8fafc;
  border: 2px solid #e2e8f0;
  padding: 12px 15px;
  border-radius: 12px;
  cursor: pointer;
  text-align: left;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 12px;
  color: #0f172a;
}

.option-btn:hover {
  background: #0ea5e9;
  border-color: #0ea5e9;
  color: white;
  transform: translateX(5px);
}

.option-icon {
  font-size: 18px;
}

.option-text {
  font-size: 13px;
  font-weight: 500;
}

.voice-assistant.active .assistant-ring {
  border-color: rgba(239, 68, 68, 0.5);
}

.voice-assistant.active .assistant-pulse {
  border-color: rgba(239, 68, 68, 0.2);
}

@media (max-width: 768px) {
  .voice-assistant {
    bottom: 20px;
    right: 20px;
  }
  
  .assistant-circle {
    width: 60px;
    height: 60px;
  }
  
  .assistant-bubble {
    width: 250px;
    right: -50px;
  }
  
  .assistant-bubble::after {
    right: 50px;
  }
}
</style>