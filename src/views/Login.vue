<template>
  <div class="auth-page">
    <div class="auth-container">
      <div class="auth-header">
        <router-link to="/" class="logo">
          <img src="/images/logo.jpg" 
               alt="Milky Co" class="logo-img">
          <h2>Milky Co</h2>
        </router-link>
        <h1>Вход в аккаунт</h1>
      </div>
      
      <form @submit.prevent="handleLogin" class="auth-form">
        <div class="form-group">
          <label for="email">Email</label>
          <input 
            v-model="form.email"
            type="email" 
            id="email"
            required
            placeholder="Ваш email">
        </div>
        
        <div class="form-group">
          <label for="password">Пароль</label>
          <input 
            v-model="form.password"
            type="password" 
            id="password"
            required
            placeholder="Ваш пароль">
        </div>
        
        <button type="submit" :disabled="loading" class="submit-btn">
          <span v-if="loading">Вход...</span>
          <span v-else>Войти</span>
        </button>
        
        <div class="auth-links">
          <p>Нет аккаунта? <router-link to="/register">Зарегистрируйтесь</router-link></p>
          <router-link to="/">← На главную</router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Login',
  data() {
    return {
      form: {
        email: '',
        password: ''
      },
      loading: false,
      error: null
    };
  },
  methods: {
    ...mapActions(['login']),
    async handleLogin() {
      this.loading = true;
      this.error = null;
      
      try {
        await this.login(this.form);
        this.$router.push('/profile');
      } catch (error) {
        this.error = 'Неверный email или пароль';
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>

<style scoped>
.auth-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #e0f2fe 0%, #f0f9ff 100%);
  padding: 20px;
}

.auth-container {
  width: 100%;
  max-width: 400px;
  background: white;
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.auth-header {
  text-align: center;
  margin-bottom: 40px;
}

.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  text-decoration: none;
  margin-bottom: 20px;
}

.logo-img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #0ea5e9;
}

.auth-header h1 {
  font-size: 28px;
  color: #0f172a;
  margin: 0;
}

.auth-header h2 {
  font-size: 24px;
  background: linear-gradient(135deg, #0ea5e9 0%, #0369a1 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
}

.auth-form {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-group label {
  font-size: 14px;
  font-weight: 500;
  color: #475569;
}

.form-group input {
  padding: 15px;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  font-size: 16px;
  transition: all 0.3s ease;
}

.form-group input:focus {
  outline: none;
  border-color: #0ea5e9;
  box-shadow: 0 0 0 3px rgba(14, 165, 233, 0.1);
}

.submit-btn {
  padding: 15px;
  background: linear-gradient(135deg, #0ea5e9 0%, #38bdf8 100%);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.submit-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(14, 165, 233, 0.3);
}

.submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.auth-links {
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
}

.auth-links a {
  color: #0ea5e9;
  text-decoration: none;
  font-weight: 500;
}

.auth-links a:hover {
  text-decoration: underline;
}

.error-message {
  color: #ef4444;
  text-align: center;
  font-size: 14px;
  padding: 10px;
  background: #fef2f2;
  border-radius: 8px;
  border: 1px solid #fecaca;
}
</style>