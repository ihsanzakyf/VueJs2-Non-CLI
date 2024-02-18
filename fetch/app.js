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
  filters: {
    currencyFormat(e) {
      return "Rp" + Number.parseFloat(e).toFixed(2);
    },
  },
  computed: {
    sliderState() {
      return this.style.sliderStatus ? "d-flex" : "d-none";
    },
  },
  methods: {
    before(el) {
      el.className = "d-none";
    },
    enter(el) {
      var delay = el.dataset.index * 100;
      setTimeout(() => {
        el.className =
          "row d-flex mb-3 align-items-center animated fadeInRight";
      }, delay);
    },
    leave(el) {
      var delay = el.dataset.index * 100;
      setTimeout(() => {
        el.className =
          "row d-flex mb-3 align-items-center animated fadeOutRight";
      }, delay);
    },
    addItem(product) {
      this.cart.push(product);
    },
  },
});
