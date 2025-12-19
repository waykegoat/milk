import { createStore } from 'vuex'

export default createStore({
  state: {
    user: JSON.parse(localStorage.getItem('user')) || null,
    cart: JSON.parse(localStorage.getItem('cart')) || [],
    products: [],
    orders: []
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user
      localStorage.setItem('user', JSON.stringify(user))
    },
    LOGOUT(state) {
      state.user = null
      localStorage.removeItem('user')
    },
    ADD_TO_CART(state, product) {
      const existingProduct = state.cart.find(item => item.id === product.id)
      if (existingProduct) {
        existingProduct.quantity += 1
      } else {
        state.cart.push({ ...product, quantity: 1 })
      }
      localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    REMOVE_FROM_CART(state, productId) {
      state.cart = state.cart.filter(item => item.id !== productId)
      localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    UPDATE_QUANTITY(state, { productId, quantity }) {
      const product = state.cart.find(item => item.id === productId)
      if (product) {
        product.quantity = quantity
        if (product.quantity <= 0) {
          state.cart = state.cart.filter(item => item.id !== productId)
        }
      }
      localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    CLEAR_CART(state) {
      state.cart = []
      localStorage.removeItem('cart')
    },
    SET_PRODUCTS(state, products) {
      state.products = products
    },
    SET_ORDERS(state, orders) {
      state.orders = orders
    }
  },
  actions: {
    async login({ commit }, credentials) {
      // Имитация API
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const user = {
            id: 1,
            email: credentials.email,
            name: credentials.email.split('@')[0],
            role: 'user'
          }
          commit('SET_USER', user)
          resolve(user)
        }, 500)
      })
    },
    async register({ commit }, userData) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const user = {
            id: Date.now(),
            email: userData.email,
            name: userData.name,
            role: 'user'
          }
          commit('SET_USER', user)
          resolve(user)
        }, 500)
      })
    },
    logout({ commit }) {
      commit('LOGOUT')
    },
    addToCart({ commit }, product) {
      commit('ADD_TO_CART', product)
    },
    removeFromCart({ commit }, productId) {
      commit('REMOVE_FROM_CART', productId)
    },
    updateQuantity({ commit }, payload) {
      commit('UPDATE_QUANTITY', payload)
    },
    clearCart({ commit }) {
      commit('CLEAR_CART')
    },
    async fetchProducts({ commit }) {
      const products = [
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
      ]
      commit('SET_PRODUCTS', products)
      return products
    }
  },
  getters: {
    isAuthenticated: state => !!state.user,
    currentUser: state => state.user,
    cartItems: state => state.cart,
    cartTotal: state => state.cart.reduce((total, item) => total + (item.price * item.quantity), 0),
    cartCount: state => state.cart.reduce((count, item) => count + item.quantity, 0),
    products: state => state.products
  }
})