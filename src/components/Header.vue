<template>
  <header class="header">
    <div class="header-bg"></div>
    <div class="container">
      <div class="header-content">
        <router-link to="/" class="logo">
          <div class="logo-circle">
            <img 
              src="/images/logo.jpg" 
              alt="Milky Co"
              class="logo-img"
            />
          </div>
          <div class="logo-text">
            <h1>Milky Co</h1>
            <p>Молочное совершенство</p>
          </div>
        </router-link>
        
        <nav class="nav">
          <router-link to="/" class="nav-link" :class="{ active: $route.path === '/' }">
            <span class="nav-icon"></span>
            Главная
          </router-link>
          <router-link to="/profile" class="nav-link" :class="{ active: $route.path === '/profile' }">
            <span class="nav-icon"></span>
            Личный кабинет
          </router-link>
        </nav>
        
        <div class="header-right">
          <div class="cart-icon" @click="toggleCart">
            <div class="cart-icon-inner">
              🛒
              <span class="cart-count" v-if="cartCount > 0">{{ cartCount }}</span>
            </div>
          </div>
          
          <div class="user-menu" v-if="isAuthenticated">
            <div class="user-greeting">
              <div class="user-avatar">{{ currentUser?.name?.charAt(0) || 'П' }}</div>
              <span>Привет, {{ currentUser?.name || 'Пользователь' }}!</span>
            </div>
            <button @click="logout" class="logout-btn">Выйти</button>
          </div>
          <div v-else class="auth-buttons">
            <router-link to="/login" class="auth-btn">
              <span class="auth-icon"></span>
              Войти
            </router-link>
            <router-link to="/register" class="auth-btn primary">
              <span class="auth-icon"></span>
              Регистрация
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'AppHeader',
  computed: {
    ...mapGetters(['isAuthenticated', 'currentUser', 'cartCount'])
  },
  methods: {
    ...mapActions(['logout']),
    toggleCart() {
      this.$emit('toggle-cart')
    }
  }
}
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 15px 0;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(14, 165, 233, 0.1);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.header-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(240, 249, 255, 0.9) 0%, rgba(224, 242, 254, 0.9) 100%);
  z-index: -1;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
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
  text-decoration: none;
}

.logo-circle {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, #0ea5e9 0%, #38bdf8 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3px;
  box-shadow: 0 6px 20px rgba(14, 165, 233, 0.3);
  animation: logoGlow 3s ease-in-out infinite;
  border: 2px solid white;
  overflow: hidden;
}

@keyframes logoGlow {
  0%, 100% {
    box-shadow: 0 6px 20px rgba(14, 165, 233, 0.3);
  }
  50% {
    box-shadow: 0 6px 30px rgba(14, 165, 233, 0.5);
  }
}

.logo-img {
  width: 54px;
  height: 54px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid white;
}

.logo-text h1 {
  font-size: 26px;
  font-weight: 700;
  background: linear-gradient(135deg, #0ea5e9 0%, #0369a1 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 2px;
}

.logo-text p {
  font-size: 12px;
  color: #64748b;
  letter-spacing: 1px;
  font-weight: 500;
}

.nav {
  display: flex;
  gap: 10px;
}

.nav-link {
  text-decoration: none;
  color: #475569;
  padding: 12px 24px;
  border-radius: 25px;
  font-weight: 500;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  border: 2px solid transparent;
  background: rgba(255, 255, 255, 0.8);
}

.nav-link:hover {
  color: #0ea5e9;
  border-color: rgba(14, 165, 233, 0.3);
  background: rgba(14, 165, 233, 0.05);
  transform: translateY(-2px);
}

.nav-link.active {
  background: linear-gradient(135deg, #0ea5e9 0%, #38bdf8 100%);
  color: white;
  box-shadow: 0 4px 15px rgba(14, 165, 233, 0.3);
  border-color: transparent;
}

.nav-icon {
  font-size: 18px;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 20px;
}

.cart-icon {
  cursor: pointer;
  position: relative;
}

.cart-icon-inner {
  position: relative;
  font-size: 24px;
  padding: 10px;
  background: white;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 2px solid #e2e8f0;
}

.cart-icon:hover .cart-icon-inner {
  transform: scale(1.1);
  box-shadow: 0 6px 20px rgba(239, 68, 68, 0.3);
  border-color: #ef4444;
  color: #ef4444;
}

.cart-count {
  position: absolute;
  top: -5px;
  right: -5px;
  background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
  color: white;
  font-size: 12px;
  padding: 2px 8px;
  border-radius: 50%;
  min-width: 20px;
  text-align: center;
  font-weight: 600;
  box-shadow: 0 2px 8px rgba(239, 68, 68, 0.3);
}

.user-menu {
  display: flex;
  align-items: center;
  gap: 15px;
}

.user-greeting {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #475569;
  font-weight: 500;
}

.user-avatar {
  width: 36px;
  height: 36px;
  background: linear-gradient(135deg, #0ea5e9 0%, #38bdf8 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  font-size: 14px;
}

.logout-btn {
  padding: 8px 20px;
  background: #f1f5f9;
  border: 2px solid #e2e8f0;
  border-radius: 20px;
  color: #64748b;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.logout-btn:hover {
  background: #ef4444;
  color: white;
  border-color: #ef4444;
  transform: translateY(-2px);
}

.auth-buttons {
  display: flex;
  gap: 10px;
}

.auth-btn {
  padding: 10px 24px;
  border-radius: 25px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  border: 2px solid transparent;
}

.auth-btn:not(.primary) {
  color: #475569;
  border-color: #e2e8f0;
  background: white;
}

.auth-btn.primary {
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: white;
  box-shadow: 0 4px 15px rgba(16, 185, 129, 0.3);
}

.auth-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
}

.auth-btn:not(.primary):hover {
  border-color: #0ea5e9;
  color: #0ea5e9;
}

.auth-icon {
  font-size: 16px;
}

@media (max-width: 768px) {
  .header-content {
    flex-direction: column;
    gap: 15px;
  }
  
  .nav {
    order: 3;
    width: 100%;
    justify-content: center;
  }
  
  .header-right {
    order: 2;
    width: 100%;
    justify-content: center;
  }
  
  .logo-text h1 {
    font-size: 22px;
  }
  
  .nav-link, .auth-btn {
    padding: 10px 18px;
    font-size: 14px;
  }
}
</style>