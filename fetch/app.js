var app = new Vue({
  el: "#app",
  data: {
    imgClass: "img-fluid d-block rounded-3 mb-2",
    maximum: 5,
    products: null,
    cart: [],
    style: {
      label: ["fw-bold", "mr-2"],
      inputWidth: 60,
      sliderStatus: false,
    },
  },
  mounted() {
    fetch("https://hplussport.com/api/products/order/price")
      .then((response) => response.json())
      .then((data) => {
        this.products = data;
      });
  },
  computed: {
    sliderState() {
      return this.style.sliderStatus ? 'd-flex' : 'd-none';
    }
  },
  methods: {
    addItem(product) {
      this.cart.push(product);
    },
  },
});
