<template>
  <div class="product-card" @mouseenter="startHover" @mouseleave="stopHover">
    <div class="product-image-container">
      <img :src="product.image" :alt="product.name" class="product-image" :class="{ 'hovered': isHovered }">
      <div class="product-overlay" :class="{ 'active': isHovered }">
        <button class="add-to-cart">В корзину</button>
      </div>
      <div class="product-badge" v-if="product.id <= 3">NEW</div>
    </div>
    <div class="product-info">
      <h3 class="product-name">{{ product.name }}</h3>
      <p class="product-description">{{ product.description }}</p>
      <div class="product-footer">
        <span class="product-weight">{{ product.weight }}</span>
        <span class="product-price">{{ product.price }}</span>
      </div>
      <div class="product-rating">
        <span class="stars">★★★★★</span>
        <span class="rating-text">4.8</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, PropType } from 'vue';

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  weight: string;
}

export default defineComponent({
  name: 'ProductCard',
  props: {
    product: {
      type: Object as PropType<Product>,
      required: true
    }
  },
  setup() {
    const isHovered = ref(false);
    
    const startHover = () => {
      isHovered.value = true;
    };
    
    const stopHover = () => {
      isHovered.value = false;
    };
    
    return {
      isHovered,
      startHover,
      stopHover
    };
  }
});
</script>

<style scoped>
.product-card {
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(74, 144, 226, 0.1);
  transition: all 0.4s ease;
  width: 280px;
  flex-shrink: 0;
  position: relative;
  border: 1px solid #e2e8f0;
}

.product-card:hover {
  transform: translateY(-10px) scale(1.02);
  box-shadow: 0 20px 40px rgba(74, 144, 226, 0.2);
  border-color: #4a90e2;
}

.product-image-container {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.product-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.product-image.hovered {
  transform: scale(1.1);
}

.product-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(74, 144, 226, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.product-overlay.active {
  opacity: 1;
}

.add-to-cart {
  background: white;
  color: #4a90e2;
  border: none;
  padding: 12px 30px;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 14px;
}

.add-to-cart:hover {
  background: #ed8936;
  color: white;
  transform: scale(1.1);
}

.product-badge {
  position: absolute;
  top: 15px;
  right: 15px;
  background: #ed8936;
  color: white;
  padding: 5px 15px;
  border-radius: 15px;
  font-size: 12px;
  font-weight: 600;
  box-shadow: 0 4px 8px rgba(237, 137, 54, 0.3);
}

.product-info {
  padding: 25px;
}

.product-name {
  color: #2d3748;
  font-size: 20px;
  margin-bottom: 10px;
  font-weight: 600;
}

.product-description {
  color: #718096;
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 20px;
  height: 60px;
  overflow: hidden;
}

.product-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 15px;
  border-top: 1px solid #e2e8f0;
  margin-bottom: 15px;
}

.product-weight {
  color: #a0aec0;
  font-size: 14px;
  font-weight: 500;
}

.product-price {
  color: #ed8936;
  font-size: 24px;
  font-weight: 700;
}

.product-rating {
  display: flex;
  align-items: center;
  gap: 10px;
}

.stars {
  color: #f6ad55;
  font-size: 16px;
}

.rating-text {
  color: #718096;
  font-size: 14px;
  font-weight: 500;
}
</style>