var app = new Vue({
  el: "#app",
  data: {
    imgClass: "img-fluid d-block rounded-3 mb-2",
    maximum: 5,
    products: null,
    cart: [],
  },
  mounted() {
    fetch("https://hplussport.com/api/products/order/price")
      .then((response) => response.json())
      .then((data) => {
        this.products = data;
      });
  },
  methods: {
    addItem(product) {
      this.cart.push(product);
    },
  },
});
