<template>
  <div class="cart" :class="{ 'cart-open': isOpen }">
    <div class="cart-header">
      <h3>Корзина</h3>
      <button @click="$emit('close')" class="close-btn">×</button>
    </div>
    
    <div class="cart-body">
      <div v-if="cartItems.length === 0" class="empty-cart">
        <div class="empty-icon">🛒</div>
        <p>Ваша корзина пуста</p>
      </div>
      
      <div v-else class="cart-items">
        <div v-for="item in cartItems" :key="item.id" class="cart-item">
          <img :src="item.image" :alt="item.name" class="cart-item-image">
          <div class="cart-item-info">
            <h4>{{ item.name }}</h4>
            <p>{{ item.weight }}</p>
            <div class="cart-item-price">{{ item.price * item.quantity }} ₽</div>
          </div>
          <div class="cart-item-controls">
            <button @click="updateQuantity(item.id, item.quantity - 1)">-</button>
            <span>{{ item.quantity }}</span>
            <button @click="updateQuantity(item.id, item.quantity + 1)">+</button>
          </div>
          <button @click="removeFromCart(item.id)" class="remove-btn">×</button>
        </div>
      </div>
    </div>
    
    <div v-if="cartItems.length > 0" class="cart-footer">
      <div class="cart-total">
        <span>Итого:</span>
        <span class="total-price">{{ cartTotal }} ₽</span>
      </div>
      <button @click="checkout" class="checkout-btn">
        Оформить заказ
      </button>
      <button @click="clearCart" class="clear-btn">
        Очистить корзину
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Cart',
  props: {
    isOpen: Boolean
  },
  computed: {
    ...mapGetters(['cartItems', 'cartTotal'])
  },
  methods: {
    ...mapActions(['removeFromCart', 'updateQuantity', 'clearCart']),
    checkout() {
      if (!this.$store.getters.isAuthenticated) {
        this.$router.push('/login');
        this.$emit('close');
        return;
      }
      
      // Реализация оформления заказа
      alert('Заказ оформлен! Спасибо за покупку!');
      this.clearCart();
      this.$emit('close');
    }
  }
};
</script>

<style scoped>
.cart {
  position: fixed;
  top: 0;
  right: -400px;
  width: 400px;
  height: 100vh;
  background: white;
  box-shadow: -5px 0 25px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  transition: right 0.3s ease;
  display: flex;
  flex-direction: column;
}

.cart-open {
  right: 0;
}

.cart-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #e2e8f0;
}

.cart-header h3 {
  margin: 0;
  font-size: 24px;
  color: #0f172a;
}

.close-btn {
  background: none;
  border: none;
  font-size: 28px;
  cursor: pointer;
  color: #64748b;
  transition: color 0.3s ease;
}

.close-btn:hover {
  color: #ef4444;
}

.cart-body {
  flex: 1;
  overflow-y: auto;
  padding: 20px;
}

.empty-cart {
  text-align: center;
  padding: 40px 20px;
  color: #94a3b8;
}

.empty-icon {
  font-size: 48px;
  margin-bottom: 20px;
}

.cart-items {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.cart-item {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 15px;
  background: #f8fafc;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
}

.cart-item-image {
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 8px;
}

.cart-item-info {
  flex: 1;
}

.cart-item-info h4 {
  margin: 0 0 5px 0;
  font-size: 14px;
  color: #0f172a;
}

.cart-item-info p {
  margin: 0 0 5px 0;
  font-size: 12px;
  color: #64748b;
}

.cart-item-price {
  font-weight: 700;
  color: #0ea5e9;
}

.cart-item-controls {
  display: flex;
  align-items: center;
  gap: 10px;
  background: white;
  padding: 5px 10px;
  border-radius: 20px;
  border: 1px solid #e2e8f0;
}

.cart-item-controls button {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  color: #475569;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.3s ease;
}

.cart-item-controls button:hover {
  background: #0ea5e9;
  color: white;
}

.cart-item-controls span {
  min-width: 20px;
  text-align: center;
}

.remove-btn {
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: #94a3b8;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.3s ease;
}

.remove-btn:hover {
  background: #ef4444;
  color: white;
}

.cart-footer {
  padding: 20px;
  border-top: 1px solid #e2e8f0;
}

.cart-total {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: 600;
}

.total-price {
  color: #0ea5e9;
  font-size: 24px;
}

.checkout-btn {
  width: 100%;
  padding: 15px;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 10px;
}

.checkout-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(16, 185, 129, 0.3);
}

.clear-btn {
  width: 100%;
  padding: 10px;
  background: #f1f5f9;
  color: #64748b;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.clear-btn:hover {
  background: #ef4444;
  color: white;
  border-color: #ef4444;
}

@media (max-width: 768px) {
  .cart {
    width: 100%;
    right: -100%;
  }
}
</style>