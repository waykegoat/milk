<template>
  <div class="profile-page">
    <div class="container">
      <div class="profile-header">
        <h1>Личный кабинет</h1>
        <p>Добро пожаловать, {{ user.name }}!</p>
      </div>
      
      <div class="profile-content">
        <div class="profile-sidebar">
          <div class="user-card">
            <div class="user-avatar">
              <span>{{ user.name.charAt(0).toUpperCase() }}</span>
            </div>
            <h3>{{ user.name }}</h3>
            <p>{{ user.email }}</p>
            <button @click="logout" class="logout-btn">Выйти</button>
          </div>
          
          <nav class="profile-nav">
            <button 
              v-for="tab in tabs" 
              :key="tab.id"
              @click="activeTab = tab.id"
              :class="{ active: activeTab === tab.id }"
              class="nav-btn">
              {{ tab.label }}
            </button>
          </nav>
        </div>
        
        <div class="profile-main">
          <!-- Заказы -->
          <div v-if="activeTab === 'orders'" class="tab-content">
            <h2>Мои заказы</h2>
            <div v-if="orders.length === 0" class="empty-state">
              <p>У вас пока нет заказов</p>
              <router-link to="/" class="shop-btn">Начать покупки</router-link>
            </div>
            <div v-else class="orders-list">
              <div v-for="order in orders" :key="order.id" class="order-card">
                <div class="order-header">
                  <span class="order-id">Заказ #{{ order.id }}</span>
                  <span class="order-status" :class="order.status">{{ order.statusText }}</span>
                </div>
                <div class="order-date">{{ order.date }}</div>
                <div class="order-total">Итого: {{ order.total }} ₽</div>
              </div>
            </div>
          </div>
          
          <!-- Информация -->
          <div v-if="activeTab === 'info'" class="tab-content">
            <h2>Личная информация</h2>
            <form @submit.prevent="updateProfile" class="profile-form">
              <div class="form-group">
                <label>Имя</label>
                <input v-model="profileData.name" type="text">
              </div>
              <div class="form-group">
                <label>Email</label>
                <input v-model="profileData.email" type="email">
              </div>
              <button type="submit" class="save-btn">Сохранить изменения</button>
            </form>
          </div>
          
          <!-- Адреса -->
          <div v-if="activeTab === 'addresses'" class="tab-content">
            <h2>Мои адреса</h2>
            <div v-if="addresses.length === 0" class="empty-state">
              <p>У вас нет сохраненных адресов</p>
            </div>
            <div v-else class="addresses-list">
              <div v-for="address in addresses" :key="address.id" class="address-card">
                <h4>{{ address.name }}</h4>
                <p>{{ address.street }}</p>
                <p>{{ address.city }}</p>
              </div>
            </div>
            <button @click="showAddressForm = true" class="add-address-btn">
              + Добавить новый адрес
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Profile',
  data() {
    return {
      activeTab: 'orders',
      profileData: {
        name: '',
        email: ''
      },
      showAddressForm: false,
      tabs: [
        { id: 'orders', label: 'Мои заказы' },
        { id: 'info', label: 'Личная информация' },
        { id: 'addresses', label: 'Адреса доставки' }
      ],
      orders: [],
      addresses: []
    };
  },
  computed: {
    ...mapGetters(['currentUser']),
    user() {
      return this.currentUser || { name: '', email: '' };
    }
  },
  created() {
    this.profileData = { ...this.user };
    // Загрузка данных пользователя
    this.loadUserData();
  },
  methods: {
    ...mapActions(['logout']),
    loadUserData() {
      // Загрузка заказов (симуляция)
      this.orders = [
        {
          id: 'ORD-001',
          date: '15.12.2024',
          total: 1250,
          status: 'delivered',
          statusText: 'Доставлен'
        },
        {
          id: 'ORD-002',
          date: '10.12.2024',
          total: 890,
          status: 'processing',
          statusText: 'В обработке'
        }
      ];
      
      // Загрузка адресов (симуляция)
      this.addresses = [
        {
          id: 1,
          name: 'Домашний адрес',
          street: 'Молочный проезд, д. 15',
          city: 'Москва'
        }
      ];
    },
    updateProfile() {
      alert('Профиль обновлен!');
    }
  }
};
</script>

<style scoped>
.profile-page {
  padding: 60px 0;
  min-height: 100vh;
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
}

.profile-header {
  text-align: center;
  margin-bottom: 60px;
}

.profile-header h1 {
  font-size: 42px;
  color: #0f172a;
  margin-bottom: 10px;
}

.profile-header p {
  font-size: 18px;
  color: #64748b;
}

.profile-content {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 40px;
}

.profile-sidebar {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.user-card {
  background: white;
  border-radius: 20px;
  padding: 30px;
  text-align: center;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
  border: 1px solid #e2e8f0;
}

.user-avatar {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #0ea5e9 0%, #38bdf8 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  font-size: 32px;
  font-weight: 700;
  color: white;
}

.user-card h3 {
  margin: 0 0 5px 0;
  color: #0f172a;
}

.user-card p {
  margin: 0 0 20px 0;
  color: #64748b;
}

.logout-btn {
  width: 100%;
  padding: 12px;
  background: #f1f5f9;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  color: #64748b;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.logout-btn:hover {
  background: #ef4444;
  color: white;
  border-color: #ef4444;
}

.profile-nav {
  background: white;
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
  border: 1px solid #e2e8f0;
}

.nav-btn {
  width: 100%;
  padding: 15px 20px;
  text-align: left;
  background: none;
  border: none;
  border-radius: 12px;
  font-weight: 500;
  color: #64748b;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 10px;
}

.nav-btn:last-child {
  margin-bottom: 0;
}

.nav-btn:hover,
.nav-btn.active {
  background: #f0f9ff;
  color: #0ea5e9;
}

.profile-main {
  background: white;
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
  border: 1px solid #e2e8f0;
}

.tab-content h2 {
  color: #0f172a;
  margin-bottom: 30px;
  font-size: 28px;
}

.empty-state {
  text-align: center;
  padding: 60px 20px;
  color: #94a3b8;
}

.shop-btn {
  display: inline-block;
  margin-top: 20px;
  padding: 12px 30px;
  background: linear-gradient(135deg, #0ea5e9 0%, #38bdf8 100%);
  color: white;
  text-decoration: none;
  border-radius: 12px;
  font-weight: 500;
}

.orders-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.order-card {
  padding: 25px;
  border: 1px solid #e2e8f0;
  border-radius: 15px;
  transition: all 0.3s ease;
}

.order-card:hover {
  border-color: #0ea5e9;
  box-shadow: 0 5px 15px rgba(14, 165, 233, 0.1);
}

.order-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.order-id {
  font-weight: 600;
  color: #0f172a;
}

.order-status {
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
}

.order-status.delivered {
  background: #d1fae5;
  color: #065f46;
}

.order-status.processing {
  background: #fef3c7;
  color: #92400e;
}

.order-date {
  color: #64748b;
  margin-bottom: 10px;
}

.order-total {
  font-weight: 600;
  color: #0ea5e9;
  font-size: 18px;
}

.profile-form {
  max-width: 500px;
}

.form-group {
  margin-bottom: 25px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: #475569;
}

.form-group input {
  width: 100%;
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

.save-btn {
  padding: 15px 30px;
  background: linear-gradient(135deg, #0ea5e9 0%, #38bdf8 100%);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.save-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(14, 165, 233, 0.3);
}

.addresses-list {
  margin-bottom: 30px;
}

.address-card {
  padding: 20px;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  margin-bottom: 15px;
}

.address-card h4 {
  margin: 0 0 10px 0;
  color: #0f172a;
}

.address-card p {
  margin: 0 0 5px 0;
  color: #64748b;
}

.add-address-btn {
  padding: 15px 30px;
  background: #f1f5f9;
  border: 2px dashed #cbd5e1;
  border-radius: 12px;
  color: #64748b;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
}

.add-address-btn:hover {
  background: #e0f2fe;
  border-color: #0ea5e9;
  color: #0ea5e9;
}

@media (max-width: 768px) {
  .profile-content {
    grid-template-columns: 1fr;
  }
  
  .profile-header h1 {
    font-size: 32px;
  }
  
  .profile-main {
    padding: 20px;
  }
}
</style>