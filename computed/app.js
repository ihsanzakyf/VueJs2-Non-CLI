var app = new Vue({
  el: "#app",
  data: {
    slugText: "The Quick #(*!&@ Brown 29",
  },
  methods: {
    now: function () {
      const date = new Date();
      return (
        String(date.getHours()) +
        String(date.getMinutes()) +
        String(date.getSeconds())
      );
    },
  },
  mounted() {},
  computed: {
    slugetize() {
      return (
        this.slugText
          .toLowerCase()
          .replace(/[^\w ]+/g, "")
          .replace(/ +/g, "-") +
        "-" +
        this.now()
      );
    },
  },
});
