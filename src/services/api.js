// Имитация API сервера с использованием localStorage как "базы данных"

const API = {
  // Получение пользователей
  getUsers() {
    return JSON.parse(localStorage.getItem('users')) || [];
  },

  // Сохранение пользователей
  saveUsers(users) {
    localStorage.setItem('users', JSON.stringify(users));
  },

  // Регистрация пользователя
  async register(userData) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          const users = this.getUsers();
          const existingUser = users.find(u => u.email === userData.email);
          
          if (existingUser) {
            reject(new Error('Пользователь с таким email уже существует'));
            return;
          }
          
          const newUser = {
            id: Date.now(),
            ...userData,
            createdAt: new Date().toISOString(),
            role: 'user'
          };
          
          users.push(newUser);
          this.saveUsers(users);
          resolve(newUser);
        } catch (error) {
          reject(error);
        }
      }, 500);
    });
  },

  // Авторизация
  async login(email, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          const users = this.getUsers();
          const user = users.find(u => u.email === email && u.password === password);
          
          if (!user) {
            reject(new Error('Неверный email или пароль'));
            return;
          }
          
          // Не возвращаем пароль в ответе
          const { password: _, ...userWithoutPassword } = user;
          resolve(userWithoutPassword);
        } catch (error) {
          reject(error);
        }
      }, 500);
    });
  },

  // Получение продуктов
  async getProducts() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const products = [
          {
            id: 1,
            name: 'Яйца куриные Premium',
            description: 'Эко-яйца от кур свободного выгула с ярким желтком и плотным белком',
            price: 140,
            image: 'https://www.m2-shop.ru/img/products_photos/105460895.jpg',
            weight: '10 шт',
            category: 'eggs'
          },
          // ... другие продукты
        ];
        resolve(products);
      }, 300);
    });
  },

  // Сохранение заказов
  async saveOrder(orderData) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const orders = JSON.parse(localStorage.getItem('orders')) || [];
        const newOrder = {
          id: `ORD-${Date.now()}`,
          ...orderData,
          createdAt: new Date().toISOString(),
          status: 'pending'
        };
        
        orders.push(newOrder);
        localStorage.setItem('orders', JSON.stringify(orders));
        resolve(newOrder);
      }, 500);
    });
  },

  // Получение заказов пользователя
  async getUserOrders(userId) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const orders = JSON.parse(localStorage.getItem('orders')) || [];
        const userOrders = orders.filter(order => order.userId === userId);
        resolve(userOrders);
      }, 300);
    });
  },

  // Обновление профиля
  async updateProfile(userId, updates) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          const users = this.getUsers();
          const userIndex = users.findIndex(u => u.id === userId);
          
          if (userIndex === -1) {
            reject(new Error('Пользователь не найден'));
            return;
          }
          
          users[userIndex] = { ...users[userIndex], ...updates };
          this.saveUsers(users);
          
          const { password: _, ...updatedUser } = users[userIndex];
          resolve(updatedUser);
        } catch (error) {
          reject(error);
        }
      }, 500);
    });
  }
};

export default API;